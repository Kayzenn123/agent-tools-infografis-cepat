# CRITIQUE — InfografisCepat (j0800 2026-10-18)

Self-review sebelum deploy. Putaran 1 (dua bug kritis ditemukan & diperbaiki saat QA visual).

## Tes slop (v3)
- [x] Bukan template ungu-biru generik: oklch hue 34 (salmon warteg), border 2-3px + hard shadow, font Hachi Maru Pop.
- [x] Tidak ada lorem ipsum / klaim palsu: 12 tema × 6 blok = draft awal bertanda [contoh], bukan fakta.
- [x] Tidak ada "revolusioner/terbaik": copy membumi ("Mas Dapur", "kompor ngebul").
- [x] Setiap angka di preset = [contoh] + aturan dapur mewajibkan ganti hasil riset.

## 3 hal template yang diubah total
1. Layout: satu halaman panjang dengan SIDE A (racik) / SIDE B (syarat+ekspor) ala sampul kaset — bukan Hero→Features→Pricing.
2. Tipografi: constraint "satu ukuran biasa (16px) + satu ukuran raksasa" — section-title clamp(2.75rem,9vw,8rem), hero 16vw.
3. Interaksi: flick strip preset (drag-inertia), easter egg "kembalian", deep-link #naskah=, bukan form kontak generik.

## Gerbang motion (v4)
- [x] A: hero pinned + zoom 2.6× (amplitudo dibatasi, tidak mabuk).
- [x] B: 2 marquee band berlawanan arah + skew mengikuti velocity.
- [x] C: hero words jatuh & menumpuk (bounce.out, sekali saja).
- [x] D: preset strip drag-inertia + flick (pointer, bukan scroll-jacking).
- [x] E: spine draw-on line lalu fill mengikuti scroll.
- [x] Gerak mati total saat prefers-reduced-motion / HP kentang / save-data; toggle manual; fps4x 60.4.

## Gerbang v5 (penyatu)
- [x] Satu metafora konsisten: dapur warteg (racik → jalur saji → bungkus).
- [x] Satu constraint warna: hue 34 + aksen biru kaset + pop highlight.
- [x] Satu constraint ukuran: 16px vs raksasa. Tidak ada ukuran "tanggung".

## Bug ditemukan saat QA (diperbaiki)
1. **Stasiun invisible di lite-device**: IO tidak jalan saat motion off → 6 kartu hilang total. Fix: `dataset.motion='off'` untuk semua kasus motion-off + CSS `is:global` (Astro scoping merusak selector `[data-motion]` di `<html>`).
2. **Klik preset mati**: `setPointerCapture` + `pointer-events:none` saat dragging me-retarget klik. Fix: tanpa pointer capture, user-select saja.
3. **Kontras sticker-pop gagal** (1.77): `.sticker` tidak set color → inherit salmon di atas biru pop. Fix: `color: var(--ink)`.
4. **Perf mobile 84**: GSAP (~82KB) diunduh sia-sia saat motion off. Fix: dynamic import hanya saat motion jalan → P91.

## Skor rubrik web/tool (1-10)
- Masalah nyata: 8 — peserta lomba infografis gugur karena naskah berantakan & syarat bolong (observasi umum komunitas lomba; klaim dampak tidak dibesar-besarkan).
- Fungsi inti jalan: 9 — racik→6 blok→checklist→ekspor (copy/.md/print/deep-link) terverifikasi Playwright end-to-end, 0 console error.
- Mobile 390px: 9 — QA 0 overflow, 0 tap target kecil, screenshot proof tersimpan.
- Kecepatan: 9 — Lighthouse mobile P91/A100, desktop P99/A97.
- Aksesibilitas: 9 — kontras AA semua (terukur di browser), label 44px+, skip link, aria-live, reduced-motion.
- Karakter: 9 — "dapur naskah warteg" konsisten di copy, visual, motion, easter egg.
- Keunikan: 8 — flick strip + easter egg + deep-link; bukan sekadar form generator.
- Kerapian: 8 — satu constraint ukuran, satu hue; potongan 1 poin untuk header mobile 2 baris (masih rapi, tapi padat).
- Kejujuran (R7): 9 — semua angka [contoh], tidak ada testimoni palsu.

**Semua ≥ 8. Lolos gerbang. Layak deploy.**
