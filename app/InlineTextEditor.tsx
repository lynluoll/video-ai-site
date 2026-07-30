"use client";

import { useEffect, useRef, useState } from "react";

type CopyOverride = {
  html: string;
  hidden?: boolean;
};

type EditableElement = HTMLElement | SVGElement;

type ExportedCopyChange = {
  key: string;
  xpath: string;
  section: string | null;
  action: "replace" | "delete";
  originalText: string;
  updatedText: string;
  originalHtml: string;
  updatedHtml: string;
};

const STORAGE_KEY = "byteplus-ads-copy-overrides-v10";

function readOverrides(): Record<string, CopyOverride> {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}") as Record<string, CopyOverride>;
  } catch {
    return {};
  }
}

function getEditableTargets(root: HTMLElement) {
  return Array.from(root.querySelectorAll<EditableElement>("*")).filter((element) => {
    if (element.closest("[data-copy-editor]")) return false;
    if (element.matches("script, style, noscript, input, textarea, select, option")) return false;
    if (element.closest("video, audio")) return false;
    return Array.from(element.childNodes).some(
      (node) => node.nodeType === Node.TEXT_NODE && Boolean(node.textContent?.trim()),
    );
  });
}

function getXPath(element: Element) {
  const segments: string[] = [];
  let current: Element | null = element;

  while (current) {
    const tagName = current.localName.toLowerCase();
    const parent = current.parentElement;
    let segment = tagName;

    if (parent) {
      const siblings = Array.from(parent.children).filter(
        (sibling) => sibling.localName.toLowerCase() === tagName,
      );
      if (siblings.length > 1) segment += `[${siblings.indexOf(current) + 1}]`;
    }

    segments.unshift(segment);
    current = parent;
  }

  return `/${segments.join("/")}`;
}

function hashCopyIdentity(value: string) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36);
}

function getStableCopyKey(
  element: EditableElement,
  occurrenceByFingerprint: Map<string, number>,
) {
  const sectionId = element.closest<HTMLElement>("[id]")?.id ?? "site-root";
  const fingerprint = `${sectionId}|${element.localName}|${element.innerHTML}`;
  const occurrence = (occurrenceByFingerprint.get(fingerprint) ?? 0) + 1;
  occurrenceByFingerprint.set(fingerprint, occurrence);
  return `copy-${hashCopyIdentity(fingerprint)}-${String(occurrence).padStart(2, "0")}`;
}

function textFromHtml(html: string) {
  const template = document.createElement("template");
  template.innerHTML = html;
  return (template.content.textContent || "").replace(/\s+/g, " ").trim();
}

export default function InlineTextEditor() {
  const [editing, setEditing] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [selectedText, setSelectedText] = useState("");
  const [selectedIsPlain, setSelectedIsPlain] = useState(false);
  const [changeCount, setChangeCount] = useState(0);
  const [notice, setNotice] = useState("修改自动保存在当前浏览器");
  const targetsRef = useRef<EditableElement[]>([]);
  const selectedKeyRef = useRef<string | null>(null);
  const originalsRef = useRef<Record<string, string>>({});
  const overridesRef = useRef<Record<string, CopyOverride>>({});

  const persist = (element: EditableElement) => {
    const key = element.dataset.copyKey;
    if (!key) return;

    const next: CopyOverride = {
      html: element.innerHTML,
      hidden: element.dataset.copyHidden === "true",
    };
    const original = originalsRef.current[key];
    if (next.html === original && !next.hidden) delete overridesRef.current[key];
    else overridesRef.current[key] = next;

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(overridesRef.current));
    setChangeCount(Object.keys(overridesRef.current).length);
    setNotice("已保存");
  };

  useEffect(() => {
    const root = document.querySelector<HTMLElement>("main.siteRoot");
    if (!root) return;

    const targets = getEditableTargets(root);
    const stored = readOverrides();
    const occurrenceByFingerprint = new Map<string, number>();
    targetsRef.current = targets;
    overridesRef.current = stored;

    targets.forEach((element) => {
      const key = getStableCopyKey(element, occurrenceByFingerprint);
      element.dataset.copyKey = key;
      originalsRef.current[key] = element.innerHTML;
      const override = stored[key];
      if (!override) return;
      element.innerHTML = override.html;
      if (override.hidden) element.dataset.copyHidden = "true";
    });

    setChangeCount(Object.keys(stored).length);

    const handleInput = (event: Event) => {
      const element = (event.target as Element | null)?.closest<EditableElement>("[data-copy-key]");
      if (!element) return;
      persist(element);
      if (element.dataset.copyKey === selectedKeyRef.current) setSelectedText(element.textContent || "");
    };

    const handleSelection = (event: Event) => {
      if (!document.body.classList.contains("is-copy-editing")) return;
      const element = (event.target as Element | null)?.closest<EditableElement>("[data-copy-key]");
      if (!element || !root.contains(element)) return;
      const key = element.dataset.copyKey || null;
      selectedKeyRef.current = key;
      setSelectedKey(key);
      setSelectedText(element.textContent || "");
      setSelectedIsPlain(element.childElementCount === 0);
      targetsRef.current.forEach((target) => target.classList.toggle("copy-editor-selected", target === element));
    };

    const blockNavigation = (event: Event) => {
      if (!document.body.classList.contains("is-copy-editing")) return;
      const element = (event.target as Element | null)?.closest<EditableElement>("[data-copy-key]");
      if (!element) return;
      if ((event.target as Element).closest("a, button, label, summary")) event.preventDefault();
      handleSelection(event);
    };

    root.addEventListener("input", handleInput);
    root.addEventListener("focusin", handleSelection);
    root.addEventListener("click", blockNavigation, true);

    return () => {
      root.removeEventListener("input", handleInput);
      root.removeEventListener("focusin", handleSelection);
      root.removeEventListener("click", blockNavigation, true);
      document.body.classList.remove("is-copy-editing");
      targets.forEach((element) => {
        element.removeAttribute("contenteditable");
        element.removeAttribute("spellcheck");
        element.classList.remove("copy-editor-selected");
      });
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("is-copy-editing", editing);
    targetsRef.current.forEach((element) => {
      const hidden = element.dataset.copyHidden === "true";
      if (editing && !hidden) {
        element.setAttribute("contenteditable", "true");
        element.setAttribute("spellcheck", "false");
      } else {
        element.removeAttribute("contenteditable");
        element.removeAttribute("spellcheck");
      }
      if (!editing) element.classList.remove("copy-editor-selected");
    });
    if (!editing) {
      selectedKeyRef.current = null;
      setSelectedKey(null);
      setSelectedText("");
      setSelectedIsPlain(false);
    }
    setNotice(editing ? "点击页面文字即可修改" : "修改自动保存在当前浏览器");
  }, [editing]);

  const selectedElement = () => targetsRef.current.find((element) => element.dataset.copyKey === selectedKey);

  const deleteSelected = () => {
    const element = selectedElement();
    if (!element) return;
    element.dataset.copyHidden = "true";
    element.removeAttribute("contenteditable");
    persist(element);
    setNotice("该段文字已删除；可用“恢复当前”撤回");
  };

  const restoreSelected = () => {
    const element = selectedElement();
    const key = element?.dataset.copyKey;
    if (!element || !key) return;
    element.innerHTML = originalsRef.current[key];
    element.removeAttribute("data-copy-hidden");
    element.setAttribute("contenteditable", "true");
    persist(element);
    setSelectedText(element.textContent || "");
    setNotice("已恢复当前文字");
  };

  const updateSelectedText = (value: string) => {
    const element = selectedElement();
    if (!element || !selectedIsPlain) return;
    element.textContent = value;
    setSelectedText(value);
    persist(element);
  };

  const restoreAll = () => {
    if (!window.confirm("恢复页面全部原始文字？当前浏览器里的文字修改会被清除。")) return;
    targetsRef.current.forEach((element) => {
      const key = element.dataset.copyKey;
      if (!key) return;
      element.innerHTML = originalsRef.current[key];
      element.removeAttribute("data-copy-hidden");
      if (editing) element.setAttribute("contenteditable", "true");
    });
    overridesRef.current = {};
    window.localStorage.removeItem(STORAGE_KEY);
    setChangeCount(0);
    selectedKeyRef.current = null;
    setSelectedKey(null);
    setSelectedText("");
    setSelectedIsPlain(false);
    setNotice("已恢复全部原始文字");
  };

  const exportChanges = () => {
    const changes = targetsRef.current.flatMap<ExportedCopyChange>((element) => {
      const key = element.dataset.copyKey;
      if (!key) return [];

      const override = overridesRef.current[key];
      if (!override) return [];

      const section = element.closest<HTMLElement>("section[id]");
      const originalHtml = originalsRef.current[key] || "";
      return [{
        key,
        xpath: getXPath(element),
        section: section?.id || null,
        action: override.hidden ? "delete" : "replace",
        originalText: textFromHtml(originalHtml),
        updatedText: override.hidden ? "" : (element.textContent || "").replace(/\s+/g, " ").trim(),
        originalHtml,
        updatedHtml: override.hidden ? "" : element.innerHTML,
      }];
    });

    if (!changes.length) {
      setNotice("还没有需要导出的修改");
      return;
    }

    const payload = {
      format: "byteplus-ads-copy-changes",
      version: 1,
      pageTitle: document.title,
      pageUrl: window.location.href,
      exportedAt: new Date().toISOString(),
      changeCount: changes.length,
      changes,
    };
    const blob = new Blob([`${JSON.stringify(payload, null, 2)}\n`], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "byteplus-ads-copy-changes.json";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1_000);
    setNotice(`已导出 ${changes.length} 处修改与 XPath`);
  };

  return (
    <aside className={`copyEditor ${editing ? "copyEditorOpen" : ""}`} data-copy-editor aria-label="网页文字编辑器">
      <button className="copyEditorToggle" type="button" onClick={() => setEditing((value) => !value)} aria-pressed={editing}>
        <span aria-hidden="true">{editing ? "✓" : "✎"}</span>
        {editing ? "完成编辑" : "编辑文字"}
      </button>

      {editing && (
        <div className="copyEditorPanel">
          <header>
            <div><strong>网页文字编辑</strong><span>{changeCount} 处修改</span></div>
            <p>{notice}</p>
          </header>
          {selectedKey && selectedIsPlain && (
            <label className="copyEditorField">
              <span>当前文字</span>
              <textarea value={selectedText} onChange={(event) => updateSelectedText(event.target.value)} rows={3} />
            </label>
          )}
          <div className="copyEditorActions">
            <button type="button" onClick={deleteSelected} disabled={!selectedKey}>删除当前</button>
            <button type="button" onClick={restoreSelected} disabled={!selectedKey}>恢复当前</button>
            <button type="button" onClick={restoreAll} disabled={!changeCount}>恢复全部</button>
            <button className="copyEditorExport" type="button" onClick={exportChanges} disabled={!changeCount}>导出修改清单</button>
          </div>
          <small>导出文件仅包含修改前后文字、删除操作与对应 XPath，不包含完整网页。</small>
        </div>
      )}
    </aside>
  );
}
