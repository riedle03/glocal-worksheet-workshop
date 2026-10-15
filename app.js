/* 합평 워크숍 활동지 — 입력 보존 · 자리 표시 · 의도 카드 · 걸음 안내 · 메모 잇기 · 인쇄 */
(function () {
  "use strict";

  /* 1~3일차와 다른 네임스페이스. 같은 브라우저에서 활동지를 여럿 열어도
     서로의 값을 덮어쓰지 않는다. */
  var NS = "gdb-workshop:v1:";

  var store = (function () {
    try {
      var t = "__t";
      localStorage.setItem(t, t);
      localStorage.removeItem(t);
      return localStorage;
    } catch (e) {
      return null;
    }
  })();

  function keyFor(el) {
    if (el.dataset.k) return el.dataset.k;
    var path = [], node = el, root = null;
    while (node && node !== document.body) {
      if (node.id) { root = node.id; break; }
      var p = node.parentNode;
      if (!p) break;
      path.push(Array.prototype.indexOf.call(p.children, node));
      node = p;
    }
    var k = (root || "doc") + "/" + path.reverse().join(".");
    el.dataset.k = k;
    return k;
  }

  /* readonly 칸(옮겨 온 질문)은 저장하지 않는다 — 원본 칸이 저장된다. */
  var SEL = "input[type=text]:not([readonly]), input[type=checkbox], input[type=radio], textarea:not([readonly])";
  var fields = [];

  function isField(el) {
    return !!(el && el.matches && el.matches(SEL));
  }

  function collect() {
    fields = Array.prototype.slice.call(document.querySelectorAll(SEL));
    fields.forEach(keyFor);
  }

  function restore() {
    if (!store) return;
    fields.forEach(function (el) {
      var v = store.getItem(NS + el.dataset.k);
      if (v === null) return;
      if (el.type === "checkbox" || el.type === "radio") el.checked = v === "1";
      else el.value = v;
    });
  }

  var flag = document.getElementById("saved");
  var flagTimer = null, saveTimer = null, maxWaitTimer = null, queue = new Set();

  function flash() {
    if (!flag) return;
    flag.classList.add("on");
    clearTimeout(flagTimer);
    flagTimer = setTimeout(function () { flag.classList.remove("on"); }, 1400);
  }

  function commit() {
    if (!store) return;
    queue.forEach(function (el) {
      var k = NS + el.dataset.k;
      if (el.type === "checkbox" || el.type === "radio") {
        if (el.checked) store.setItem(k, "1");
        else store.removeItem(k);
      } else {
        var v = el.value;
        if (v === "") store.removeItem(k);
        else store.setItem(k, v);
      }
    });
    queue.clear();
    clearTimeout(maxWaitTimer);
    maxWaitTimer = null;
    flash();
  }

  /* 디바운스 400ms. 쉬지 않고 입력하면 커밋이 끝없이 밀리므로 3초 상한을 둔다. */
  function scheduleSave(el) {
    queue.add(el);
    clearTimeout(saveTimer);
    saveTimer = setTimeout(commit, 400);
    if (!maxWaitTimer) {
      maxWaitTimer = setTimeout(function () {
        maxWaitTimer = null;
        clearTimeout(saveTimer);
        commit();
      }, 3000);
    }
  }

  /* 라디오는 새로 켜진 쪽만 change가 오고, 꺼진 쪽은 오지 않는다.
     같은 그룹의 다른 칸을 직접 지워야 다음 방문에 두 칸이 다 켜지지 않는다. */
  function clearRadioSiblings(el) {
    if (el.type !== "radio" || !el.name) return;
    document.querySelectorAll('input[type=radio][name="' + el.name + '"]').forEach(function (o) {
      if (o !== el) queue.add(o);
    });
  }

  function grow(el) {
    if (!el || el.tagName !== "TEXTAREA") return;
    el.style.height = "auto";
    var min = parseFloat(getComputedStyle(el).minHeight) || 0;
    el.style.height = Math.max(el.scrollHeight, min) + "px";
  }

  function val(id) {
    var el = document.getElementById(id);
    return el ? (el.value || "").trim() : "";
  }

  /* ── 진행: data-progress 체크만 집계 ── */
  var parts = Array.prototype.slice.call(document.querySelectorAll("[data-part]"));
  function tally() {
    parts.forEach(function (sec) {
      var boxes = sec.querySelectorAll("input[type=checkbox][data-progress]");
      var done = 0;
      boxes.forEach(function (b) { if (b.checked) done++; });
      var bar = document.querySelector('.rail__bar[data-for="' + sec.id + '"] i');
      if (!bar) return;
      /* 앞장에는 완료 체크가 없다 — 자리와 이름을 정하면 찬다. */
      if (!boxes.length) {
        var n = (document.querySelector('input[name="track"]:checked') ? 1 : 0) + (val("f-name") ? 1 : 0);
        bar.style.width = n * 50 + "%";
        return;
      }
      bar.style.width = (done / boxes.length) * 100 + "%";
    });
  }

  function spy() {
    if (!("IntersectionObserver" in window)) return;
    var items = {};
    document.querySelectorAll(".rail__item").forEach(function (li) { items[li.dataset.for] = li; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var li = items[e.target.id];
        if (li) li.classList.toggle("is-here", e.isIntersecting);
      });
    }, { rootMargin: "-84px 0px -62% 0px" });
    parts.forEach(function (p) { io.observe(p); });
  }

  /* ── 자리(A/B) — 다른 자리 챕터를 옅게 ── */
  function syncTrack() {
    var picked = document.querySelector('input[name="track"]:checked');
    if (picked) document.body.dataset.track = picked.value;
    else delete document.body.dataset.track;
  }

  /* ── 고른 질문을 챕터 4로 옮기기 ── */
  function syncChosen() {
    var mirror = document.getElementById("chosen-mirror");
    if (!mirror) return;
    mirror.value = val("a-chosen") || "(칸 2-D에서 아직 고르지 않았습니다)";
    grow(mirror);
  }

  /* ── 읽는 사람 메모 복사 — 합평이 끝나면 쓴 분께 건넨다 ── */
  function copyFallback(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
    return ok;
  }

  function copyText(text, done) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(copyFallback(text)); });
      return;
    }
    done(copyFallback(text));
  }

  function slotMemo(n) {
    var me = val("f-name");
    var lines = [(val("r" + n + "-who") || "선생님") + "께 — 합평 메모" + (me ? " (" + me + ")" : "")];
    var help = val("r" + n + "-help");
    var point = val("r" + n + "-point");
    var q = val("r" + n + "-q");
    if (help) lines.push("도움받고 싶다고 하신 곳: " + help);
    if (point) lines.push("제가 짚은 자리: " + point);
    if (q) lines.push("제 질문: " + q);
    return lines.length > 1 ? lines.join("\n") : "";
  }

  document.querySelectorAll("[data-copy-slot]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var n = btn.getAttribute("data-copy-slot");
      var msg = document.querySelector('[data-copy-msg="' + n + '"]');
      var text = slotMemo(n);
      if (!text) { if (msg) msg.textContent = "짚은 자리나 질문을 먼저 적어 주세요."; return; }
      copyText(text, function (ok) {
        if (msg) msg.textContent = ok
          ? "복사했습니다. 메신저나 쪽지로 건네세요."
          : "복사가 막혔습니다. 칸의 글을 직접 선택해 복사하세요.";
      });
    });
  });

  /* ── 초안 글자 수 ── */
  function updateCount() {
    var ta = document.getElementById("b-draft");
    var out = document.getElementById("draft-count");
    if (ta && out) out.textContent = ta.value.length.toLocaleString("ko-KR") + "자";
  }

  /* ── 의도 카드 ── */
  var intent = document.getElementById("intent");
  var intentBtn = document.getElementById("btn-intent");
  var intentMsg = document.getElementById("intent-msg");
  /* 엎어 둔 상태도 저장한다. 쓴 사람 차례에 화면이 새로 고쳐져 의도가 드러나면 안 된다. */
  var INTENT_KEY = NS + "ui/intent";
  function setIntent(state, quiet) {
    if (!intent || !intentBtn) return;
    intent.dataset.state = state;
    if (store && !quiet) {
      if (state === "closed") store.setItem(INTENT_KEY, "closed");
      else store.removeItem(INTENT_KEY);
    }
    var closed = state === "closed";
    intentBtn.textContent = closed ? "카드 뒤집기" : "카드 엎어 두기";
    intentBtn.setAttribute("aria-pressed", closed ? "true" : "false");
    var face = document.getElementById("a-intent");
    if (face) face.setAttribute("tabindex", closed ? "-1" : "0");
    if (intentMsg) intentMsg.textContent = closed
      ? "엎어 두었습니다. 읽는 분들의 말을 다 들은 뒤에 뒤집으세요."
      : "";
  }
  if (intentBtn) intentBtn.addEventListener("click", function () {
    if (intent.dataset.state !== "closed" && !val("a-intent")) {
      if (intentMsg) intentMsg.textContent = "먼저 한 문장을 적어 주세요.";
      return;
    }
    setIntent(intent.dataset.state === "closed" ? "open" : "closed");
  });

  /* ── 메모 잇기 (6 → 1 → 2 → 3 → 4 → 5) ── */
  var draftBtn = document.getElementById("btn-build-draft");
  if (draftBtn) draftBtn.addEventListener("click", function () {
    var order = ["b6", "b1", "b2", "b3", "b4", "b5"];
    var chunks = order.map(val).filter(Boolean);
    var ta = document.getElementById("b-draft");
    var msg = document.getElementById("draft-msg");
    if (!ta) return;
    if (!chunks.length) {
      if (msg) msg.textContent = "먼저 여섯 계단 가운데 몇 칸을 채워 주세요.";
      return;
    }
    /* 손으로 고쳐 둔 초안을 말없이 날리지 않는다. */
    if (ta.value.trim() && !confirm("초안 칸에 적어 두신 내용을 지우고 메모를 다시 잇습니다. 계속할까요?")) return;
    ta.value = chunks.join("\n\n");
    grow(ta);
    updateCount();
    scheduleSave(ta);
    if (msg) msg.textContent = chunks.length + "칸을 이었습니다. 이제 문장으로 고쳐 쓰세요.";
  });

  /* ── 걸음 안내 ──
     칸마다 시간을 강제하지 않는다. 시간이 다 돼도 넘어가지 않고 색만 바뀐다.
     넘기는 것은 진행을 맡은 사람이 정한다. */
  var STEPS = [
    { label: "쓴 사람 · 계기와 도움받을 곳", sec: 30,
      say: "「어떤 글인지 한 줄, 도움받고 싶은 곳 하나를 말씀해 주세요.」" },
    { label: "쓴 사람 · 소리 내 읽기", sec: 120,
      say: "「읽어 주세요. 듣는 분들은 마음에 남는 줄에 표시해 두세요.」" },
    { label: "읽는 사람 · 짚기", sec: 120,
      say: "「마음에 남은 낱말이나 장면을 한 분씩, 어느 줄인지도 함께요.」" },
    { label: "읽는 사람 · 되비추기", sec: 90,
      say: "「제게는 ~로 들렸어요」로 말씀해 주세요." },
    { label: "읽는 사람 · 이끄는 질문 (쓴 사람은 받아 적기)", sec: 180,
      say: "「도움받고 싶다고 하신 곳에 대해 질문해 주세요. 쓰신 분은 받아 적기만 하세요.」" },
    { label: "쓴 사람 · 카드 뒤집기", sec: 120,
      say: "「카드를 뒤집어 주세요. 무엇을 쓰고 싶으셨는지, 들은 것과 무엇이 달랐는지요.」" },
    { label: "읽는 사람 · 허락받은 의견", sec: 60,
      say: "「의견이 있는 분은 먼저 들어 보실지 여쭤 주세요.」" }
  ];
  var st = { i: 0, left: STEPS[0].sec, running: false, timer: null };
  var stepper = document.getElementById("stepper");
  var stIdx = document.getElementById("st-idx");
  var stLabel = document.getElementById("st-label");
  var stClock = document.getElementById("st-clock");
  var stBar = document.getElementById("st-bar");
  var stPlay = document.getElementById("st-play");
  var stNext = document.getElementById("st-next");
  var stReset = document.getElementById("st-reset");
  var stMsg = document.getElementById("st-msg");

  /* 넘친 시간은 숫자로 세지 않는다. 쓴 사람도 같은 화면을 볼 수 있다. */
  function fmt(s) {
    var a = Math.max(0, s);
    return Math.floor(a / 60) + ":" + ("0" + (a % 60)).slice(-2);
  }

  var stSay = document.getElementById("st-say");

  function paint() {
    if (!stepper) return;
    var step = STEPS[st.i];
    stIdx.textContent = (st.i + 1) + " / " + STEPS.length;
    stLabel.textContent = step.label;
    if (stSay) stSay.textContent = step.say;
    stClock.textContent = fmt(st.left);
    var used = step.sec - st.left;
    stBar.style.width = Math.min(100, Math.max(0, used / step.sec * 100)) + "%";
    stepper.classList.toggle("is-over", st.left < 0);
    stPlay.textContent = st.running ? "멈춤" : (used > 0 ? "이어서" : "시작");
    stNext.textContent = st.i === STEPS.length - 1 ? "이분 합평 마치기" : "다음 걸음";
  }

  function tick() {
    st.left -= 1;
    if (st.left === 0 && stMsg) stMsg.textContent = "이 걸음을 마무리해 주세요. 끝나면 「다음 걸음」을 누릅니다.";
    paint();
  }

  function stop() {
    st.running = false;
    clearInterval(st.timer);
    st.timer = null;
  }

  if (stPlay) stPlay.addEventListener("click", function () {
    if (st.running) { stop(); paint(); return; }
    st.running = true;
    st.timer = setInterval(tick, 1000);
    if (stMsg) stMsg.textContent = "";
    paint();
  });

  if (stNext) stNext.addEventListener("click", function () {
    if (st.i === STEPS.length - 1) {
      stop();
      st.i = 0;
      st.left = STEPS[0].sec;
      if (stMsg) stMsg.textContent = "한 분의 합평을 마쳤습니다. 다음 분 차례에 「시작」을 누르세요.";
      paint();
      return;
    }
    st.i += 1;
    st.left = STEPS[st.i].sec;
    if (stMsg) stMsg.textContent = "";
    paint();
  });

  if (stReset) stReset.addEventListener("click", function () {
    stop();
    st.i = 0;
    st.left = STEPS[0].sec;
    if (stMsg) stMsg.textContent = "";
    paint();
  });

  /* ── 초기화 ── */
  collect();
  restore();
  fields.forEach(function (el) { if (el.tagName === "TEXTAREA") grow(el); });
  tally();
  spy();
  syncTrack();
  syncChosen();
  updateCount();
  paint();
  if (store && store.getItem(INTENT_KEY) === "closed" && val("a-intent")) setIntent("closed", true);

  document.addEventListener("input", function (e) {
    var el = e.target;
    if (!isField(el)) return;
    if (el.tagName === "TEXTAREA") grow(el);
    if (el.id === "b-draft") updateCount();
    if (el.id === "a-chosen") syncChosen();
    if (el.id === "f-name") tally();
    if (el.type !== "checkbox" && el.type !== "radio") scheduleSave(el);
  });

  document.addEventListener("change", function (e) {
    var el = e.target;
    if (!isField(el)) return;
    clearRadioSiblings(el);
    scheduleSave(el);
    if (el.type === "checkbox") tally();
    if (el.name === "track") { syncTrack(); tally(); }
  });

  window.addEventListener("beforeunload", function () {
    clearTimeout(saveTimer);
    commit();
  });

  /* ── 인쇄 ── */
  var reclose = [];
  var intentWas = null;
  window.addEventListener("beforeprint", function () {
    reclose = [];
    document.querySelectorAll("details:not([open])").forEach(function (d) {
      d.open = true;
      reclose.push(d);
    });
    document.querySelectorAll("textarea").forEach(grow);
    if (intent) { intentWas = intent.dataset.state; setIntent("open", true); }
  });
  window.addEventListener("afterprint", function () {
    reclose.forEach(function (d) { d.open = false; });
    reclose = [];
    if (intent && intentWas) setIntent(intentWas, true);
  });

  var printBtn = document.getElementById("btn-print");
  if (printBtn) printBtn.addEventListener("click", function () { window.print(); });

  if (!store && flag) {
    flag.textContent = "저장 안 됨";
    flag.classList.add("on");
    flag.style.color = "var(--seal)";
  }

  /* ── 앵커로 점프하면 접힌 곳을 펴 준다 ── */
  function openTarget() {
    var id = location.hash.slice(1);
    if (!id) return;
    var el = document.getElementById(id);
    if (!el) return;
    var d = el.tagName === "DETAILS" ? el : el.closest("details");
    while (d) {
      d.open = true;
      d = d.parentElement && d.parentElement.closest("details");
    }
    el.scrollIntoView({ block: "start" });
  }
  window.addEventListener("hashchange", openTarget);
  if (location.hash) setTimeout(openTarget, 0);

  /* ── 상단 고정 요소 실측 ──
     좁은 폭에서 툴바가 줄바꿈하면 고정 높이보다 커져 가로 레일과 겹친다.
     실제 높이를 재서 CSS 변수로 넘긴다. */
  (function stickyMetrics() {
    var topbar = document.querySelector(".topbar");
    var rail = document.querySelector(".rail");
    if (!topbar) return;
    function measure() {
      var th = Math.round(topbar.getBoundingClientRect().height);
      var rh = rail && getComputedStyle(rail).position === "sticky"
        ? Math.round(rail.getBoundingClientRect().height) : 0;
      var root = document.documentElement.style;
      root.setProperty("--topbar-h", th + "px");
      root.setProperty("--sticky-h", th + rh + 22 + "px");
    }
    measure();
    if ("ResizeObserver" in window) {
      var ro = new ResizeObserver(measure);
      ro.observe(topbar);
      if (rail) ro.observe(rail);
    }
    window.addEventListener("resize", measure);
  })();

  /* ── 텍스트 백업 ── */
  var exportBtn = document.getElementById("btn-export");
  if (exportBtn) exportBtn.addEventListener("click", function () {
    var lines = ["원고 합평 워크숍 — 질문으로 고쳐 쓰기", ""];
    var t = document.querySelector('input[name="track"]:checked');
    if (t) lines.push("내 자리: " + (t.value === "a" ? "A · 원고를 냈습니다" : "B · 아직 쓰는 중입니다"), "");
    parts.forEach(function (sec) {
      var head = sec.querySelector(".part__title");
      var railItem = document.querySelector('.rail__item[data-for="' + sec.id + '"] .rail__link');
      var body = [];
      sec.querySelectorAll("[data-k]").forEach(function (el) {
        if (el.type === "checkbox" || el.type === "radio") return;
        var v = (el.value || "").trim();
        if (!v) return;
        /* 라벨이 붙은 칸은 라벨을, 없으면 aria-label이나 placeholder를 이름으로 쓴다. */
        var lab = el.id ? sec.querySelector('label[for="' + el.id + '"]') : null;
        var name = lab ? lab.textContent.replace(/\s+/g, " ").trim()
                 : el.getAttribute("aria-label") || el.getAttribute("placeholder") || el.dataset.k;
        body.push("· " + name, "  " + v.replace(/\n/g, "\n  "), "");
      });
      if (!body.length) return;
      lines.push("──────────────────────────────");
      lines.push(head ? head.textContent.trim()
        : railItem ? railItem.textContent.replace(/^\s*\d+/, "").trim() : sec.id);
      lines.push("");
      lines = lines.concat(body);
    });
    var blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    var a = document.createElement("a");
    var who = val("f-name") || "이름";
    a.href = URL.createObjectURL(blob);
    a.download = "합평_" + who.replace(/\s+/g, "") + ".txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  });

  var resetBtn = document.getElementById("btn-reset");
  if (resetBtn) resetBtn.addEventListener("click", function () {
    if (!confirm("이 활동지(합평 워크숍)에 적은 내용을 전부 지웁니다. 1~3일차 저장은 건드리지 않습니다. 계속할까요?")) return;
    fields.forEach(function (el) {
      if (el.type === "checkbox" || el.type === "radio") el.checked = false;
      else el.value = "";
      if (store) store.removeItem(NS + el.dataset.k);
      grow(el);
    });
    setIntent("open");
    tally();
    syncTrack();
    syncChosen();
    updateCount();
    window.scrollTo({ top: 0, behavior: "auto" });
  });

  if (!store) {
    var warn = document.createElement("p");
    warn.className = "warn";
    warn.textContent =
      "이 브라우저에서는 적으신 내용이 자동으로 저장되지 않습니다. 창을 닫기 전에 인쇄 · PDF로 남겨 두십시오.";
    var main = document.querySelector(".page");
    if (main) main.insertBefore(warn, main.firstChild);
  }
})();
