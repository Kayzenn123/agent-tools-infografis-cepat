// InfografisCepat — "dapur" client-side.
// Modul: state+storage, deep-link, generator, checklist, ekspor, gerak (GSAP).
import { PRESETS, SYARAT, BLOK_LABEL } from '../data/presets.js';

/* GSAP hanya diunduh kalau motion benar-benar jalan (hemat ~82KB di HP/lite) */
let gsap = null, ScrollTrigger = null;
async function ensureGsap() {
  if (gsap) return true;
  try {
    const [g, st] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
    gsap = g.gsap || g.default || g;
    ScrollTrigger = st.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);
    return true;
  } catch { return false; }
}

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const live = $('#live');
const say = (msg) => { if (live) live.textContent = msg; };

/* ---------- motion flags ---------- */
const reducedOS = matchMedia('(prefers-reduced-motion: reduce)').matches;
const liteDevice =
  (navigator.hardwareConcurrency || 8) <= 4 ||
  (navigator.deviceMemory || 8) <= 4 ||
  !!navigator.connection?.saveData;
let motionOn = !reducedOS && !liteDevice;
if (!motionOn) document.documentElement.dataset.motion = 'off';

/* ---------- state ---------- */
const KEY = 'infografis-cepat/v1';
const BLANK = () => ({ tema: '', namaLomba: '', blok: { judul: '', hook: '', data: '', fakta: '', visual: '', cta: '' }, syarat: {} });
let state = BLANK();

function validState(s) {
  return s && typeof s === 'object' && s.blok && typeof s.blok === 'object' && typeof s.syarat === 'object';
}
function load() {
  // 1) deep-link hash dulu
  const m = location.hash.match(/#naskah=([A-Za-z0-9\-_]+)/);
  if (m) {
    try {
      const json = decodeURIComponent(escape(atob(m[1].replace(/-/g, '+').replace(/_/g, '/'))));
      const s = JSON.parse(json);
      if (validState(s)) { state = { ...BLANK(), ...s }; return 'tautan'; }
    } catch { /* jatuh ke storage */ }
  }
  // 2) localStorage berversi
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const s = JSON.parse(raw);
      if (s && s.v === 1 && validState(s)) { state = { ...BLANK(), ...s }; return 'storage'; }
    }
  } catch { /* storage rusak → default */ }
  return 'kosong';
}
function save() {
  try { localStorage.setItem(KEY, JSON.stringify({ v: 1, ...state })); } catch { /* mode privat */ }
}

/* ---------- render state → DOM ---------- */
const inputs = {};
function cacheInputs() {
  BLOK_LABEL.forEach((b) => { inputs[b.id] = $(`#blok-${b.id}`); });
}
function paint(announce) {
  $('#tema-input').value = state.tema || '';
  $('#nama-lomba').value = state.namaLomba || '';
  BLOK_LABEL.forEach((b) => {
    const el = inputs[b.id];
    if (el && el.value !== (state.blok[b.id] || '')) el.value = state.blok[b.id] || '';
    countWords(b.id);
    markFilled(b.id);
  });
  $$('[data-syarat]').forEach((cb) => { cb.checked = !!state.syarat[cb.dataset.syarat]; });
  paintSyarat(false);
  if (announce) say(announce);
}
function countWords(id) {
  const el = inputs[id];
  const n = el.value.trim() ? el.value.trim().split(/\s+/).length : 0;
  const badge = $(`.station[data-blok="${id}"] .blok-count`);
  if (badge) badge.textContent = `${n} kata`;
}
function markFilled(id) {
  const li = $(`.station[data-blok="${id}"]`);
  if (li) li.classList.toggle('filled', !!(inputs[id] && inputs[id].value.trim()));
}

/* ---------- generator ---------- */
function findPreset(tema) {
  const t = tema.trim().toLowerCase();
  return PRESETS.find((p) => p.nama.toLowerCase() === t || p.id === t);
}
function genericBlok(tema) {
  const T = tema.trim();
  return {
    judul: `${T}: Judul Paling Nendang [ISI MANUAL — maks 8 kata]`,
    hook: `Kenapa ${T} penting buat kamu? [ISI MANUAL — 1 fakta mengejutkan]`,
    data: `• Angka kunci 1 soal ${T}: [contoh — ganti hasil risetmu]\n• Angka kunci 2: [contoh]`,
    fakta: `Konteks ${T}: kenapa ini terjadi dan siapa yang terdampak. [ISI MANUAL]`,
    visual: `Saran visual: [ISI MANUAL — tulis maunya digambar apa per blok]`,
    cta: `Ajakan: satu hal yang bisa dilakukan pembaca besok pagi soal ${T}. [ISI MANUAL]`,
  };
}
function racik(ev) {
  ev.preventDefault();
  const temaEl = $('#tema-input');
  const tema = temaEl.value.trim();
  const err = $('#tema-error');
  state.namaLomba = $('#nama-lomba').value.trim();

  if (!tema) {
    err.textContent = 'Eits, temanya kosong — kayak warung buka tapi kompor belum nyala. Isi temanya dulu ya.';
    err.classList.remove('hidden');
    temaEl.focus();
    temaEl.scrollIntoView({ block: 'center', behavior: motionOn ? 'smooth' : 'auto' });
    say('Tema belum diisi.');
    return;
  }
  err.classList.add('hidden');
  state.tema = tema;

  // Easter egg: "kembalian"
  if (tema.toLowerCase() === 'kembalian') {
    const e = $('#easter');
    e.classList.remove('hidden');
    setTimeout(() => e.classList.add('hidden'), 4500);
    say('SIDE C terbuka: kembalian receh, naskah mewah.');
  }

  const preset = findPreset(tema);
  state.blok = preset ? { ...preset.blok } : genericBlok(tema);
  save();
  paint();
  jatuhKePiring();
  $('#jalur').scrollIntoView({ behavior: motionOn ? 'smooth' : 'auto' });
  say(preset
    ? `Naskah tema ${preset.nama} tersaji di jalur saji. Ingat: angka [contoh] wajib diganti hasil risetmu.`
    : `Tema "${tema}" belum ada di buku resep — Mas Dapur bikinkan kerangkanya, kamu yang isi dagingnya.`);
}

/* C: kata/blok jatuh lalu menumpuk — dipakai ulang tiap Racik */
function jatuhKePiring() {
  if (!motionOn || !gsap) return;
  gsap.fromTo('.station',
    { y: -34, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.45, stagger: 0.07, ease: 'back.out(1.6)', overwrite: true,
      onComplete: () => $$('.station').forEach((s) => s.classList.add('in')) });
}

/* ---------- preset strip: pilih + flick (D) ---------- */
function initStrip() {
  const strip = $('#preset-strip');
  const cards = $$('.preset-card', strip);
  const pilih = (id) => {
    const p = PRESETS.find((x) => x.id === id);
    if (!p) return;
    cards.forEach((c) => c.setAttribute('aria-selected', String(c.dataset.preset === id)));
    $('#tema-input').value = p.nama;
    state.tema = p.nama;
    say(`Tema dipilih: ${p.nama}. Tekan Racik untuk menyajikan.`);
  };
  cards.forEach((c) => c.addEventListener('click', () => pilih(c.dataset.preset)));

  // flick dengan momentum inersia (tanpa plugin berbayar)
  let down = false, startX = 0, startL = 0, lastX = 0, vel = 0, raf = 0, moved = 0;
  const stop = () => cancelAnimationFrame(raf);
  const decay = () => {
    if (Math.abs(vel) < 0.4) return;
    strip.scrollLeft -= vel;
    vel *= 0.94;
    raf = requestAnimationFrame(decay);
  };
  strip.addEventListener('pointerdown', (e) => {
    down = true; moved = 0; stop();
    startX = lastX = e.clientX; startL = strip.scrollLeft; vel = 0;
    strip.classList.add('dragging');
  });
  // pointermove/up di window (tanpa setPointerCapture) agar klik kartu tetap sampai
  window.addEventListener('pointermove', (e) => {
    if (!down) return;
    const dx = e.clientX - lastX;
    moved += Math.abs(e.clientX - startX);
    strip.scrollLeft = startL - (e.clientX - startX);
    vel = dx; lastX = e.clientX;
  });
  const up = () => {
    if (!down) return;
    down = false;
    strip.classList.remove('dragging');
    if (motionOn && Math.abs(vel) > 1) { raf = requestAnimationFrame(decay); }
  };
  window.addEventListener('pointerup', up);
  window.addEventListener('pointercancel', up);
  // cegah klik nyasar setelah flick
  strip.addEventListener('click', (e) => { if (moved > 10) { e.stopPropagation(); e.preventDefault(); } }, true);
}

/* ---------- checklist syarat (SIDE B) ---------- */
function paintSyarat(announce = true) {
  const done = SYARAT.filter((s) => state.syarat[s.id]).length;
  const bar = $('#syarat-bar'), prog = $('#syarat-progress'), cnt = $('#syarat-count'), msg = $('#syarat-msg');
  bar.style.width = `${(done / SYARAT.length) * 100}%`;
  prog.setAttribute('aria-valuenow', String(done));
  cnt.textContent = `${done}/${SYARAT.length} beres`;
  const pesan = {
    0: 'Belum ada yang dicentang — ayo, satu per satu.',
    8: 'Beres! Piring bersih, dapur tutup. Tinggal desain, kirim. — Mas Dapur',
  }[done] || (done >= 6
    ? `Tinggal ${SYARAT.length - done} lagi — sudah di depan mata.`
    : `${done} beres. Lanjut, jangan kendor.`);
  msg.textContent = pesan;
  if (announce) say(`Checklist syarat: ${done} dari ${SYARAT.length}.`);
}
function initSyarat() {
  $$('[data-syarat]').forEach((cb) => {
    cb.addEventListener('change', () => {
      state.syarat[cb.dataset.syarat] = cb.checked;
      save();
      paintSyarat();
    });
  });
}

/* ---------- ekspor ---------- */
function naskahTeks() {
  const lines = [];
  lines.push(`# Naskah Infografis${state.namaLomba ? ` — ${state.namaLomba}` : ''}`);
  lines.push(`Tema: ${state.tema || '[belum diisi]'}\n`);
  BLOK_LABEL.forEach((b, i) => {
    lines.push(`## ${i + 1}. ${b.nama}\n${(state.blok[b.id] || '').trim() || '[kosong]'}\n`);
  });
  lines.push('---\nDibuat dengan InfografisCepat. Angka [contoh] wajib diganti hasil riset + sumber.');
  return lines.join('\n');
}
async function salin(teks, okMsg) {
  const msg = $('#ekspor-msg');
  try {
    await navigator.clipboard.writeText(teks);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = teks;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch { /* abaikan */ }
    ta.remove();
  }
  msg.textContent = okMsg;
  say(okMsg);
}
function initEkspor() {
  $('#btn-salin').addEventListener('click', () => salin(naskahTeks(), 'Naskah tersalin — tinggal tempel ke aplikasi desainmu.'));
  $('#btn-unduh').addEventListener('click', () => {
    const blob = new Blob([naskahTeks()], { type: 'text/markdown;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `naskah-infografis-${(state.tema || 'tanpa-tema').toLowerCase().replace(/[^a-z0-9]+/g, '-')}.md`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    const m = 'Beres! File .md naskahmu terunduh.';
    $('#ekspor-msg').textContent = m;
    say(m);
  });
  $('#btn-cetak').addEventListener('click', () => window.print());
  $('#btn-tautan').addEventListener('click', () => {
    const json = JSON.stringify(state);
    const b64 = btoa(unescape(encodeURIComponent(json))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    const url = `${location.origin}${location.pathname}#naskah=${b64}`;
    salin(url, 'Tautan naskah tersalin — buka di HP atau kirim ke tim.');
  });
  $('#reset-btn').addEventListener('click', () => {
    state = BLANK();
    save();
    paint('Piring dikosongkan. Dapur siap meracik lagi.');
    $('#tema-input').focus();
  });
}

/* ---------- input → state ---------- */
function initInputs() {
  BLOK_LABEL.forEach((b) => {
    const el = inputs[b.id];
    el.addEventListener('input', () => {
      state.blok[b.id] = el.value;
      countWords(b.id);
      markFilled(b.id);
      save();
    });
  });
  $('#nama-lomba').addEventListener('input', (e) => { state.namaLomba = e.target.value; save(); });
  $('#tema-input').addEventListener('input', (e) => {
    state.tema = e.target.value;
    $$('.preset-card').forEach((c) => c.setAttribute('aria-selected', 'false'));
  });
}

/* ---------- gerak (A–E) ---------- */
let triggers = [];
async function initMotion() {
  if (!motionOn) return;
  if (!(await ensureGsap())) return;

  // C: hero — kata jatuh lalu menumpuk
  gsap.fromTo('.hero-word',
    { yPercent: -115, opacity: 0 },
    { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'bounce.out' });

  // A: hero pinned — judul di-zoom jadi "pintu" (amplitudo dibatasi)
  triggers.push(ScrollTrigger.create({
    trigger: '#top',
    start: 'top top',
    end: '+=110%',
    pin: true,
    scrub: 1,
    animation: gsap.timeline()
      .to('#hero-inner', { scale: 2.6, opacity: 0.25, transformOrigin: '50% 40%', ease: 'none', duration: 1 }),
  }));

  // B: skew marquee mengikuti velocity scroll
  const tracks = $$('.marquee-track');
  const setSkew = gsap.quickSetter(tracks, 'skewX', 'deg');
  let skewCur = 0;
  triggers.push(ScrollTrigger.create({
    onUpdate: (self) => {
      const v = gsap.utils.clamp(-14, 14, self.getVelocity() / -350);
      if (Math.abs(v) > Math.abs(skewCur)) {
        skewCur = v;
        setSkew(skewCur);
        gsap.to({ s: skewCur }, {
          s: 0, duration: 0.6, overwrite: true,
          onUpdate: function () { skewCur = this.targets()[0].s; setSkew(skewCur); },
        });
      }
    },
  }));

  // E: spine draw-on — garis overlay digambar mengikuti scroll
  const spine = $('#spine');
  if (spine) {
    const NS = 'http://www.w3.org/2000/svg';
    const draw = document.createElementNS(NS, 'line');
    draw.setAttribute('x1', '3'); draw.setAttribute('y1', '0');
    draw.setAttribute('x2', '3'); draw.setAttribute('y2', '100%');
    draw.setAttribute('stroke', 'var(--blue)');
    draw.setAttribute('stroke-width', '6');
    draw.setAttribute('pathLength', '1');
    draw.style.strokeDasharray = '1';
    draw.style.strokeDashoffset = '1';
    spine.appendChild(draw);
    triggers.push(ScrollTrigger.create({
      trigger: '#spine-wrap',
      start: 'top 70%',
      end: 'bottom 60%',
      scrub: 1,
      onUpdate: (self) => { draw.style.strokeDashoffset = String(1 - self.progress); },
    }));
  }

  // Reveal stasiun (sekali saja)
  const io = new IntersectionObserver((es) => {
    es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  $$('.station').forEach((s) => io.observe(s));
}
function killMotion() {
  if (!gsap) return;
  triggers.forEach((t) => t.kill());
  triggers = [];
  gsap.set(['#hero-inner', '.hero-word', '.station', '.marquee-track'], { clearProps: 'all' });
}

/* ---------- toggle & pause ---------- */
function initToggles() {
  const btn = $('#motion-toggle');
  const label = $('#motion-state');
  const paintBtn = () => {
    label.textContent = motionOn ? 'Nyala' : 'Mati';
    btn.setAttribute('aria-pressed', String(motionOn));
  };
  paintBtn();
  btn.addEventListener('click', () => {
    motionOn = !motionOn;
    document.documentElement.dataset.motion = motionOn ? 'on' : 'off';
    if (motionOn) initMotion(); else killMotion();
    paintBtn();
    say(`Gerak ${motionOn ? 'dinyalakan' : 'dimatikan'}.`);
  });

  const pp = $('#marquee-pause');
  const pl = $('#marquee-pause-label');
  pp.addEventListener('click', () => {
    const paused = pp.getAttribute('aria-pressed') === 'true';
    pp.setAttribute('aria-pressed', String(!paused));
    $$('.marquee-track').forEach((t) => { t.style.animationPlayState = paused ? 'running' : 'paused'; });
    pl.textContent = paused ? 'Jeda' : 'Jalan';
    say(paused ? 'Teks berjalan dilanjutkan.' : 'Teks berjalan dijeda.');
  });
}

/* ---------- boot ---------- */
document.documentElement.classList.add('js');
cacheInputs();
const sumber = load();
paint();
$('#racik-form').addEventListener('submit', racik);
initStrip();
initSyarat();
initEkspor();
initInputs();
initToggles();
initMotion();
if (sumber === 'tautan') say('Naskah dimuat dari tautan.');
else if (sumber === 'storage') say('Naskah terakhirmu dimuat kembali.');
