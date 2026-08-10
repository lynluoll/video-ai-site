/* ═══════════════════════════════════════════════════════════
   BytePlus ADS Creative — demo site
   Static copy is bilingual in the DOM (<i class="en"> / <i class="zh">);
   this file only translates strings it generates itself.
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var DEMOS = window.DEMOS || [];
  var lang = localStorage.getItem('vai_lang') || 'en';

  /* ─────────────── filter axes: type · industry · orientation ─────────────── */
  var CATS = [
    { id: 'all', en: 'All demos', zh: '全部',
      noteEn: 'Every asset here is model output — click a tile to play it full size with its references and intent.',
      noteZh: '这里每一条都是模型直出——点开可全尺寸播放，并查看它的参考图与创意意图。' },
    { id: 'branding', en: 'Branding', zh: '品牌广告',
      noteEn: 'Films judged on craft: surface, light and identity have to hold at big-screen size.',
      noteZh: '看质感的片子：表面、光影与品牌身份要经得起大屏。' },
    { id: 'performance', en: 'Performance', zh: '效果广告',
      noteEn: 'Films judged on the cycle: how cheap the next variant is, how fast it goes live.',
      noteZh: '看轮次的片子：下一条变体多便宜、多快能上线。' }
  ];

  var INDS = [
    { id: 'all', en: 'All industries', zh: '全部行业' },
    { id: 'auto', en: 'Automotive', zh: '汽车' },
    { id: 'fnb', en: 'Food & beverage', zh: '食品饮料' },
    { id: 'home', en: 'Home care', zh: '家清' },
    { id: 'baby', en: 'Baby care', zh: '母婴' },
    { id: 'beauty', en: 'Beauty', zh: '美妆个护' },
    { id: 'fashion', en: 'Fashion', zh: '服饰' },
    { id: 'tech', en: 'Tech & apps', zh: '科技与应用' },
    { id: 'retail', en: 'Retail & commerce', zh: '零售电商' },
    { id: 'travel', en: 'Travel', zh: '旅行' },
    { id: 'pet', en: 'Pet', zh: '宠物' },
    { id: 'gaming', en: 'Gaming', zh: '游戏' }
  ];

  var RATIOS = [
    { id: 'all', en: 'All formats', zh: '全部画幅' },
    { id: 'v', en: 'Vertical', zh: '竖版' },
    { id: 'h', en: 'Horizontal', zh: '横版' }
  ];

  function ratioGroup(r) {
    if (['9:16', '3:4', '2:3', '1:2'].indexOf(r) > -1) return 'v';
    return 'h';
  }

  /* ─────────────── strings this file generates ─────────────── */
  var T = {
    'gal.search': ['Search demos, formats, tags…', '搜索 demo、格式、标签…'],
    'lb.model': ['Model', '模型'],
    'lb.ratio': ['Aspect', '比例'],
    'lb.dur': ['Duration', '时长'],
    'lb.refs': ['Reference inputs', '参考输入'],
    'lb.prompt': ['Prompt intent', '创意 prompt'],
    'lb.audio': ['Sound on', '建议开声音'],
    'cnt': ['{n} demos', '{n} 条']
  };
  function t(k) { var v = T[k]; return v ? (lang === 'zh' ? v[1] : v[0]) : k; }
  function L(o) { return lang === 'zh' ? o.zh : o.en; }

  /* ─────────────── proof lists ─────────────── */
  var PROOF_OK = [
    ['<b>Reference identity lock</b> — 5-reference automotive three-view: LED signature, wheels and tail bar identical across three camera angles, 21:9 straight out.',
     '<b>多参考身份锁定</b>——5 参考汽车三视图：LED 灯签名、轮毂、贯穿尾灯三个机位完全一致，21:9 直出。'],
    ['<b>Pixel-faithful UI</b> — four app-UI references reproduced exactly, down to labels and chart values, through a tap transition.',
     '<b>UI 逐像素保真</b>——四张 App UI 参考完整复现，文案与图表数值都对，点按转场中不糊。'],
    ['<b>Text rendering</b> — end-card brand, tagline and price line word-perfect; storefront signage correct frame by frame including accents.',
     '<b>文字渲染</b>——尾板品牌名、slogan 与价格行逐字正确；店招拼写逐帧正确，含重音符。'],
    ['<b>Precision object edit</b> — one can recoloured inside an existing clip, whole-frame SSIM 0.935, camera and hand untouched.',
     '<b>精准换物</b>——已有片子里只把罐体换色，全帧 SSIM 0.935，机位与手部完全保留。'],
    ['<b>Native audio</b> — generated score cutting on downbeats, English voice-over word-perfect and in sync with the end card.',
     '<b>原生音频</b>——生成配乐硬切落重拍，英文口播逐字正确且与尾板同步。'],
    ['<b>Multilingual narration</b> — Portuguese narration with correct word order, phrasing and duration from the same prompt.',
     '<b>多语言旁白</b>——同一 prompt 出葡语旁白，词序、断句、时长全部正确。'],
    ['<b>Frame stability</b> — zero dropped or duplicated frames across slow-motion, fast pan, high-speed subject and locked-off tests.',
     '<b>帧稳定</b>——慢镜、快速横摇、高速物体、静止微动四类测试均零跳帧、零重复帧。']
  ];
  var PROOF_NO = [
    ['<b>Frame-exact music sync</b> — cut timing drifts up to +0.88s across a 15-second clip. Beat-locked delivery still needs an edit pass.',
     '<b>帧级音乐卡点</b>——15 秒片内切点最多后漂 +0.88s。要精确卡点仍需后期剪辑兜底。'],
    ['<b>Non-standard product structure</b> — complex industrial silhouettes get redrawn unless every design element is named in the prompt.',
     '<b>非标商品结构</b>——复杂工业设计外形会被重绘，除非 prompt 里逐要素点名锁定。'],
    ['<b>Above 720p on 2.5</b> — the 2.5 line caps at 720p output; 1080p masters come from the 2.0 line or downstream upscale.',
     '<b>2.5 的 720p 以上</b>——2.5 输出上限为 720p；1080p 母版走 2.0 线或下游放大。'],
    ['<b>Voice cloning from a reference</b> — audio generation works, but copying a specific reference voice does not yet.',
     '<b>按参考克隆音色</b>——音频生成可用，但复制指定参考音色仍不成立。'],
    ['<b>Deterministic turnaround</b> — output moderation is stricter and occasionally false-positives; volume pipelines should budget retries.',
     '<b>确定性交付时延</b>——输出审核更严且偶有误拦，量产链路需预留重试预算。']
  ];

  /* ─────────────── language ─────────────── */
  function applyLang() {
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    var el = document.querySelector('[data-i18n-ph]');
    if (el) el.placeholder = t('gal.search');
    var s = document.querySelectorAll('#langBtn span');
    s[0].classList.toggle('on', lang === 'en');
    s[1].classList.toggle('on', lang === 'zh');
    renderTabs(); renderInds(); renderRatios(); renderProof(); renderCompare(); render();
  }

  /* ─────────────── gallery ─────────────── */
  var state = { cat: 'all', ind: 'all', ratio: 'all', q: '' };
  var grid = document.getElementById('grid');
  var visible = [];

  function catCount(id) {
    if (id === 'all') return DEMOS.filter(function (d) { return d.cat !== 'compare'; }).length;
    return DEMOS.filter(function (d) { return d.cat === id; }).length;
  }

  function renderTabs() {
    var box = document.getElementById('tabs');
    box.innerHTML = '';
    CATS.forEach(function (c) {
      var b = document.createElement('button');
      b.className = 'tab' + (state.cat === c.id ? ' on' : '');
      b.setAttribute('role', 'tab');
      b.innerHTML = '<span>' + L(c) + '</span><span class="n">' + catCount(c.id) + '</span>';
      b.onclick = function () { state.cat = c.id; state.ind = 'all'; renderTabs(); renderInds(); render(); };
      box.appendChild(b);
    });
  }

  function indCount(id) {
    return DEMOS.filter(function (d) {
      if (state.cat !== 'all' && d.cat !== state.cat) return false;
      return id === 'all' ? true : d.ind === id;
    }).length;
  }

  function renderInds() {
    var box = document.getElementById('indChips');
    if (!box) return;
    box.innerHTML = '';
    INDS.forEach(function (r) {
      var n = indCount(r.id);
      if (r.id !== 'all' && !n) return;          // hide industries with nothing in them
      var b = document.createElement('button');
      b.className = 'chip' + (state.ind === r.id ? ' on' : '');
      b.textContent = L(r) + (r.id === 'all' ? '' : ' ' + n);
      b.onclick = function () { state.ind = r.id; renderInds(); render(); };
      box.appendChild(b);
    });
  }

  function renderRatios() {
    var box = document.getElementById('ratioChips');
    box.innerHTML = '';
    RATIOS.forEach(function (r) {
      var b = document.createElement('button');
      b.className = 'chip' + (state.ratio === r.id ? ' on' : '');
      b.textContent = L(r);
      b.onclick = function () { state.ratio = r.id; renderRatios(); render(); };
      box.appendChild(b);
    });
  }

  function matches(d) {
    if (state.cat !== 'all' && d.cat !== state.cat) return false;
    if (state.ind !== 'all' && d.ind !== state.ind) return false;
    if (state.ratio !== 'all' && ratioGroup(d.ratio) !== state.ratio) return false;
    if (state.q) {
      var hay = [d.title.en, d.title.zh, d.desc.en, d.desc.zh, d.model, d.ratio,
        (d.tags || []).join(' '), d.badge || ''].join(' ').toLowerCase();
      if (hay.indexOf(state.q) === -1) return false;
    }
    return true;
  }

  function badgeClass(b) {
    var x = (b || '').toLowerCase();
    if (x === 'pass' || x === 'best' || x === 'after') return 'b-pass';
    if (x === 'fail' || x === 'limit') return 'b-fail';
    if (x === 'partial') return 'b-partial';
    if (['hero', '30s', 'reel', 'scale', 'pipeline'].indexOf(x) > -1) return 'b-hot';
    return '';
  }

  function card(d, idx) {
    var el = document.createElement('article');
    el.className = 'card rv';
    el.tabIndex = 0;
    var badge = d.badge ? '<span class="badge ' + badgeClass(d.badge) + '">' + d.badge + '</span>' : '';
    var pills = '<div class="meta-top"><span class="pill">' + d.ratio + '</span>' +
      (d.dur ? '<span class="pill">' + d.dur + '</span>' : '') + '</div>';
    var play = d.type === 'video' ? '<span class="play"></span>' : '';
    var tags = (d.tags || []).slice(0, 3).map(function (x) { return '<span class="tag">' + x + '</span>'; }).join('');
    el.innerHTML =
      '<div class="card-media">' + badge + pills + play +
        '<img loading="lazy" decoding="async"' + (d.w ? ' width="' + d.w + '" height="' + d.h + '"' : '') +
            ' src="' + d.poster + '" alt="">' +
      '</div>' +
      '<div class="card-body">' +
        '<h3>' + L(d.title) + '</h3>' +
        '<p>' + L(d.desc) + '</p>' +
        '<div class="tagrow"><span class="tag model">' + d.model + '</span>' + tags + '</div>' +
      '</div>';

    if (d.type === 'video') {
      var vid = null;
      el.addEventListener('mouseenter', function () {
        if (!vid) {
          vid = document.createElement('video');
          vid.muted = true; vid.loop = true; vid.playsInline = true; vid.preload = 'none';
          vid.src = d.file;
          el.querySelector('.card-media').appendChild(vid);
        }
        el.classList.add('playing');
        var p = vid.play(); if (p && p.catch) p.catch(function () {});
      });
      el.addEventListener('mouseleave', function () {
        el.classList.remove('playing');
        if (vid) { vid.pause(); vid.currentTime = 0; }
      });
    }
    el.addEventListener('click', function () { openLb(idx); });
    el.addEventListener('keydown', function (e) { if (e.key === 'Enter') openLb(idx); });
    return el;
  }

  function render() {
    visible = DEMOS.filter(matches);
    grid.innerHTML = '';
    visible.forEach(function (d, i) { grid.appendChild(card(d, i)); });
    document.getElementById('empty').hidden = visible.length > 0;
    document.getElementById('resultCount').textContent = t('cnt').replace('{n}', visible.length);
    var c = CATS.filter(function (x) { return x.id === state.cat; })[0];
    document.getElementById('tabNote').textContent = c ? (lang === 'zh' ? c.noteZh : c.noteEn) : '';
    observeReveal(grid.querySelectorAll('.rv'));
  }

  /* ─────────────── lightbox ─────────────── */
  var lb = document.getElementById('lb'), lbIn = document.getElementById('lbIn'), lbIdx = 0;

  function openLb(i) { lbIdx = i; paintLb(); lb.hidden = false; document.body.style.overflow = 'hidden'; }
  function closeLb() { lb.hidden = true; lbIn.innerHTML = ''; document.body.style.overflow = ''; }
  function stepLb(n) { lbIdx = (lbIdx + n + visible.length) % visible.length; paintLb(); }

  function paintLb() {
    var d = visible[lbIdx]; if (!d) return;
    var c = CATS.filter(function (x) { return x.id === d.cat; })[0];
    var media = d.type === 'video'
      ? '<video src="' + d.file + '" poster="' + d.poster + '" controls autoplay loop playsinline></video>'
      : '<img src="' + d.file + '" alt="">';
    var refs = (d.refs && d.refs.length)
      ? '<div class="lb-refs"><h4>' + t('lb.refs') + ' · ' + d.refs.length + '</h4><div class="ref-row">' +
        d.refs.map(function (r) { return '<img src="' + r + '" alt="">'; }).join('') + '</div></div>'
      : '';
    var prompt = d.prompt
      ? '<div class="lb-prompt"><h4>' + t('lb.prompt') + '</h4><p>' + d.prompt + '</p></div>' : '';
    lbIn.innerHTML =
      '<div class="lb-media">' + media + '</div>' +
      '<div class="lb-info">' +
        '<span class="lb-cat">' + (c ? L(c) : '') + (d.type === 'video' ? ' · ' + t('lb.audio') : '') + '</span>' +
        '<h3>' + L(d.title) + '</h3>' +
        '<p>' + L(d.desc) + '</p>' +
        '<dl class="lb-metagrid">' +
          '<dt>' + t('lb.model') + '</dt><dd>' + d.model + '</dd>' +
          '<dt>' + t('lb.ratio') + '</dt><dd>' + d.ratio + '</dd>' +
          (d.dur ? '<dt>' + t('lb.dur') + '</dt><dd>' + d.dur + '</dd>' : '') +
        '</dl>' +
        '<div class="tagrow">' + (d.tags || []).map(function (x) {
          return '<span class="tag">' + x + '</span>'; }).join('') + '</div>' +
        refs + prompt +
      '</div>';
  }
  document.getElementById('lbClose').onclick = closeLb;
  document.getElementById('lbPrev').onclick = function () { stepLb(-1); };
  document.getElementById('lbNext').onclick = function () { stepLb(1); };
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') stepLb(-1);
    if (e.key === 'ArrowRight') stepLb(1);
  });

  /* ─────────────── generation compare strip ─────────────── */
  function renderCompare() {
    var row = document.getElementById('cmpRow');
    if (!row) return;
    row.innerHTML = '';
    ['cmp_10_endcard', 'cmp_20_endcard', 'cmp_25_endcard'].forEach(function (id) {
      var d = DEMOS.filter(function (x) { return x.id === id; })[0];
      if (!d) return;
      var el = document.createElement('div');
      el.className = 'cmp-card rv' + (d.badge === 'BEST' ? ' best' : '');
      el.innerHTML =
        '<video src="' + d.file + '" poster="' + d.poster + '" muted loop playsinline preload="none"></video>' +
        '<div class="cmp-meta"><span class="gen">' + d.model + '</span>' +
        '<h3>' + L(d.title).split('·')[0].trim() + '</h3>' +
        '<p>' + L(d.desc) + '</p></div>';
      var v = el.querySelector('video');
      el.addEventListener('mouseenter', function () { var p = v.play(); if (p && p.catch) p.catch(function () {}); });
      el.addEventListener('mouseleave', function () { v.pause(); });
      row.appendChild(el);
    });
    observeReveal(row.querySelectorAll('.rv'));
  }

  function renderProof() {
    var a = document.getElementById('proofOk'), b = document.getElementById('proofNo');
    if (!a) return;
    a.innerHTML = PROOF_OK.map(function (x) { return '<li>' + x[lang === 'zh' ? 1 : 0] + '</li>'; }).join('');
    b.innerHTML = PROOF_NO.map(function (x) { return '<li>' + x[lang === 'zh' ? 1 : 0] + '</li>'; }).join('');
  }

  /* ─────────────── solution tabs ─────────────── */
  [].forEach.call(document.querySelectorAll('.sol-tab'), function (btn) {
    btn.onclick = function () {
      var key = btn.getAttribute('data-sol');
      [].forEach.call(document.querySelectorAll('.sol-tab'), function (b) { b.classList.toggle('on', b === btn); });
      [].forEach.call(document.querySelectorAll('.sol-panel'), function (p) {
        p.classList.toggle('on', p.getAttribute('data-panel') === key);
      });
    };
  });

  /* ─────────────── misc wiring ─────────────── */
  var io = null;
  function observeReveal(nodes) {
    if (!('IntersectionObserver' in window)) {
      [].forEach.call(nodes, function (n) { n.classList.add('in'); }); return;
    }
    if (!io) {
      io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { rootMargin: '0px 0px -40px 0px', threshold: .04 });
    }
    [].forEach.call(nodes, function (n) { io.observe(n); });
    // Safety net: a document that is hidden while loading (background tab,
    // embedded preview) never fires the observer, which would leave the page
    // blank. Reveal anything still waiting after a short grace period.
    clearTimeout(revealTimer);
    revealTimer = setTimeout(function () {
      [].forEach.call(document.querySelectorAll('.rv:not(.in)'), function (n) { n.classList.add('in'); });
    }, 2500);
  }
  var revealTimer = null;

  document.getElementById('search').addEventListener('input', function (e) {
    state.q = e.target.value.trim().toLowerCase(); render();
  });

  document.getElementById('langBtn').onclick = function () {
    lang = lang === 'en' ? 'zh' : 'en';
    localStorage.setItem('vai_lang', lang);
    applyLang();
  };

  // imagination tiles open their demo in the lightbox
  [].forEach.call(document.querySelectorAll('[data-demo]'), function (el) {
    el.onclick = function () {
      var id = el.getAttribute('data-demo');
      state.cat = 'all'; state.ind = 'all'; state.ratio = 'all'; state.q = '';
      document.getElementById('search').value = '';
      renderTabs(); renderInds(); renderRatios(); render();
      for (var i = 0; i < visible.length; i++) {
        if (visible[i].id === id) { openLb(i); return; }
      }
    };
  });

  [].forEach.call(document.querySelectorAll('[data-goto]'), function (el) {
    el.onclick = function () {
      state.cat = el.getAttribute('data-goto'); state.q = ''; state.ind = 'all'; state.ratio = 'all';
      document.getElementById('search').value = '';
      renderTabs(); renderInds(); renderRatios(); render();
      document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
    };
  });

  // legacy tiles: play on hover, pause on leave
  [].forEach.call(document.querySelectorAll('.plm-out video, .pv video, .ans-media video, .pbk video'), function (v) {
    v.addEventListener('mouseenter', function () { var p = v.play(); if (p && p.catch) p.catch(function () {}); });
    v.addEventListener('mouseleave', function () { v.pause(); v.currentTime = 0; });
  });

  var nav = document.getElementById('nav');
  function onScroll() { nav.classList.toggle('stuck', window.scrollY > 20); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  document.getElementById('statCount').textContent = DEMOS.length + '+';

  var statics = document.querySelectorAll('.cap, .steps li, .proof-col, .cmp-table, .scn, .f4, .case, .gap, .mk-panel, .rm-stage');
  [].forEach.call(statics, function (n) { n.classList.add('rv'); });
  observeReveal(statics);

  applyLang();
})();
