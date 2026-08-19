import type { ReactNode } from "react";
import PauseWhenHiddenVideo from "./PauseWhenHiddenVideo";

/* One customer case, laid out like the reference "Symphony × Amazon" slide:
   left — objective, four KPI tiles, one headline stat;
   right — three phase columns (crawl / walk / run), each with a line of
   copy and one visual. Purely presentational; all copy comes in as props
   so the same frame serves WPP, L'Oréal, Goodtake, Tec-do and AppLovin. */

export type GbsMedia =
  | { kind: "image"; src: string; alt: string; fit?: "cover" | "contain" }
  | { kind: "video"; src: string; poster?: string; label: string; ratio?: "16x9" | "1x1"; stills?: { src: string; alt: string }[] }
  | { kind: "placeholder"; note: ReactNode };

export type GbsPhase = { tag: string; when: string; copy: ReactNode; media: GbsMedia };
export type GbsKpi = { value: ReactNode; label: ReactNode; tone?: "blue" | "ink" };

export type GbsCaseProps = {
  id: string;
  index: string;
  kicker: ReactNode;
  title: ReactNode;
  titleNote?: ReactNode;
  objectiveTitle: ReactNode;
  objective: ReactNode;
  kpis: GbsKpi[];
  headline?: { value: ReactNode; label: ReactNode };
  /* Optional bullet list pinned to the bottom of the left column so its last
     line ends level with the media wells (used when a case has only two
     phases and the left column would otherwise stop short). */
  notes?: ReactNode[];
  /* "rows": phases stack vertically, text left / media right — for a
     couple of landscape films that deserve width. */
  phaseLayout?: "rows";
  /* Wider left column (objective + KPIs) for cases with fewer phases. */
  leftWidth?: "wide";
  phases: [GbsPhase, GbsPhase] | [GbsPhase, GbsPhase, GbsPhase];
  footnote?: ReactNode;
};

function Media({ m }: { m: GbsMedia }) {
  if (m.kind === "video") {
    const video = <PauseWhenHiddenVideo src={m.src} poster={m.poster} autoPlay loop muted playsInline preload="metadata" ariaLabel={m.label} />;
    /* A 16:9 asset alone in a portrait-height stage leaves two thirds of the
       column empty. Stacking the film with two key frames from it fills the
       same footprint as the portrait clips beside it. */
    if (m.stills?.length) {
      return (
        <>
          <span className="gbsCaseStackCell">{video}</span>
          {m.stills.map((s) => (
            <span className="gbsCaseStackCell" key={s.src}>
              <img src={s.src} alt={s.alt} loading="lazy" />
            </span>
          ))}
        </>
      );
    }
    return video;
  }
  if (m.kind === "image") {
    return <img src={m.src} alt={m.alt} loading="lazy" style={m.fit ? { objectFit: m.fit } : undefined} />;
  }
  return <div className="gbsCasePlaceholder"><span>{m.note}</span></div>;
}

export default function GbsCase(p: GbsCaseProps) {
  return (
    <article className={`gbsCase${p.leftWidth === "wide" ? " isWideLeft" : ""}`} id={p.id} aria-labelledby={`${p.id}-title`}>
      <header className="gbsCaseHead">
        <span className="gbsCaseKicker">{p.kicker}</span>
        <h3 id={`${p.id}-title`}>
          <i aria-hidden="true">{p.index}</i>
          {p.title}
          {p.titleNote ? <small>{p.titleNote}</small> : null}
        </h3>
      </header>

      <div className="gbsCaseBody">
        <aside className={`gbsCaseLeft${p.notes?.length ? " hasNotes" : ""}`}>
          <div className="gbsCaseObjective">
            <b>{p.objectiveTitle}</b>
            <p>{p.objective}</p>
          </div>
          <ul className="gbsCaseKpis">
            {p.kpis.map((k, i) => (
              <li key={i} className={k.tone === "ink" ? "isInk" : ""}>
                <b>{k.value}</b>
                <span>{k.label}</span>
              </li>
            ))}
          </ul>
          {p.headline ? (
            <div className="gbsCaseHeadline">
              <b>{p.headline.value}</b>
              <span>{p.headline.label}</span>
            </div>
          ) : null}
          {p.notes?.length ? (
            <ul className="gbsCaseNotes">
              {p.notes.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
          ) : null}
        </aside>

        <ol className={`gbsCasePhases${p.phaseLayout === "rows" ? " isRows" : p.phases.length === 2 ? " isPair" : ""}`}>
          {p.phases.map((ph, i) => (
            <li key={i} className="gbsCasePhase">
              <header>
                <b>{ph.tag}</b>
                <span>{ph.when}</span>
              </header>
              <p>{ph.copy}</p>
              <figure
                className={`gbsCaseMedia is-${ph.media.kind}${ph.media.kind === "video" && ph.media.stills?.length ? " is-stack" : ""}`}
                data-ar={ph.media.kind === "video" ? (ph.media.ratio ?? "9x16") : undefined}
              >
                <Media m={ph.media} />
              </figure>
            </li>
          ))}
        </ol>
      </div>

      {p.footnote ? <p className="gbsCaseFoot">{p.footnote}</p> : null}
    </article>
  );
}
