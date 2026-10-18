# InfografisCepat — Dapur Naskah Lomba Infografis

Peserta lomba infografis sering gugur bukan karena desainnya jelek — tapi karena naskahnya
berantakan dan syarat administratifnya bolong. InfografisCepat adalah tool client-side
(rasa warung tegal × sampul kaset) untuk:

- **Meracik draf 6 blok naskah** (Judul, Hook, Data Kunci, Fakta Pendukung, Saran Visual, CTA)
  dari **12 tema siap pakai** — atau ketik temamu sendiri.
- **Checklist 8 syarat administratif juri** (logo, sumber data, orisinalitas, PDF, A4 portrait, …)
  dengan progress tersimpan otomatis.
- **Panduan 3 aturan tipografi juri** + ekspor (salin / unduh .md / cetak / tautan deep-link).

Gratis, tanpa akun. Naskah tersimpan di `localStorage` browser — tidak dikirim ke mana pun.
Angka bertanda `[contoh]` wajib diganti hasil risetmu sendiri + cantumkan sumbernya.

## Tech

Astro 7 (static) + Tailwind CSS v4 + GSAP (ScrollTrigger) + astro-icon (Bootstrap Icons + pixel-art SVG custom).
Font via Astro Fonts API: Noto Serif Grantha (display), Hind Madurai (body), Hachi Maru Pop (aksen).

## Cara jalanin

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output ke dist/
npm run preview
```

`prebuild` otomatis men-generate aset biner (favicon png/ico, og-image png) dari SVG via sharp.

## Struktur

- `src/pages/index.astro` — satu halaman tool (hero, SIDE A generator, jalur saji, tipografi, SIDE B syarat, ekspor, FAQ)
- `src/scripts/dapur.js` — logika tool + gerak (state, deep-link `#naskah=…`, checklist, ekspor)
- `src/data/presets.js` — 12 preset tema × 6 blok, 8 syarat, 3 aturan tipografi, 5 FAQ
- `src/pages/api/health.ts` — endpoint kesehatan (static prerender)

## Skor (terverifikasi 2026-10-18, Playwright + Lighthouse)

- Lighthouse mobile: Performance 91, Accessibility 100
- Lighthouse desktop: Performance 99, Accessibility 97
- FPS (CPU throttle 4×): 60.4
- QA viewports 360/390/768/1280: 0 overflow, 0 tap target <44px, 0 console error
- Kontras: semua pasangan teks/latar ≥ 4.5 (terukur di browser; satu-satunya gagal — sticker-pop — diperbaiki)

## Lisensi

Kode: MIT. Font: OFL (Google Fonts). Ikon UI: Bootstrap Icons (MIT); ikon pixel-art (piring, kaset,
stempel, sendok) digambar sendiri untuk build ini.
