# BRIEF — InfografisCepat — 2026-10-18

## Masalah/usecase (1 kalimat + siapa yang kena)
Pelajar peserta lomba infografis sering gugur bukan karena desain jelek, melainkan karena naskah berantakan dan syarat administratif (logo, sumber data, orisinalitas, format PDF) tidak terpenuhi — InfografisCepat meracik draf 6 blok naskah dari 12 tema siap pakai, memandu checklist syarat juri, dan memberi panduan tipografi, semuanya client-side tanpa akun.

## Konsep visual (1 kalimat)
"Dapur naskah warteg": jalur saji vertikal (timeline satu sumbu) tempat 6 "piring" blok naskah disajikan berurutan, dibungkus sampul kaset SIDE A (generator naskah) / SIDE B (checklist syarat + ekspor), ditempeli stiker pixel-art.

## Hasil seed (ringkas, seed.json di workdir)
- domain: warung tegal | layout: timeline satu sumbu | referensi: sampul kaset
- batasan: satu ukuran biasa + satu ukuran raksasa
- gerak: A pan horizontal pinned + zoom per panel; B 2 band marquee berlawanan + skew velocity; C kata-kata jatuh lalu menumpuk; D drag inertia flick; E garis draw-on lalu isi
- ikon: pixel-art, sumber Bootstrap Icons + custom
- font: display Noto Serif Grantha, body Hind Madurai, aksen Hachi Maru Pop (semua ada subset latin; tidak ada yang variable)
- palet: mid, complementary, baseHue 34

## 3 arah desain (2 kalimat masing-masing) + arah terpilih dan alasannya
1. Kantin digital penuh: etalase kaca, papan menu tulis-tangan, meja kayu. Hangat dan akrab, tapi berisiko dibaca sebagai "situs makanan" dan tool-nya tenggelam di dekorasi. Dibuang.
2. Kaset murni: seluruh tool = tracklist kaset dengan tombol play/rewind/stop, tiap blok naskah = satu track. Kuat untuk referensi sampul kaset, tapi form 6 blok + checklist 8 syarat sulit dipetakan ke track dan timeline satu sumbu jadi tempelan. Dibuang.
3. Jalur saji warteg (TERPILIH): timeline satu sumbu = jalur saji warteg; tiap blok naskah = piring lauk bernomor yang "disajikan" berurutan; kaset hanya jadi bingkai SIDE A/SIDE B + stiker pixel-art; constraint 2 ukuran font memaksa hierarki brutal. Paling jauh dari default (tanpa hero+3 kartu, tanpa SaaS-kit) dan dari build kemarin (kartu pos → ini "dapur").

## Keputusan berani
Hanya ada DUA ukuran teks di seluruh situs: 16px (semua body, form, tombol, label) dan raksasa (clamp 12–20vw untuk display). Tidak ada ukuran "sedang". Kartu tanpa border-radius sama sekali — tajam seperti papan menu dan kotak kaset.

## Persona/suara
"Mas Dapur" — kepala dapur warteg yang meracik naskah. Hangat, ceplas-ceplos, tidak jaim. Semua copy, termasuk error dan empty state, bersuara dia.
- Error tema kosong: "Eits, temanya kosong — kayak warung buka tapi kompor belum nyala."
- Empty state blok: "Piringnya masih kosong. Pilih tema di atas biar dapur ngebul."
- Checklist selesai: "Beres! Piring bersih, dapur tutup. Tinggal desain, kirim."

## Palet (harmoni, kenapa, psikologi warna, token oklch final, hasil cek kontras AA)
Harmoni complementary 34 (oranye hangat) vs 214 (biru). Psikologi: oranye = dapur warteg yang akrab dan mengundang (hangat, merakyat); biru komplementer = label kaset yang tegas dan "resmi" (dingin, presisi juri); ketegangan hangat-dingin bikin mata melek.
- --bg: oklch(0.70 0.138 34) — kertas/kayu warteg
- --surface: oklch(0.63 0.115 34) — piring/nampan
- --ink: oklch(0.16 0.030 34) — teks utama; 6.52:1 di bg ✓, 5.43:1 di surface ✓
- --muted: oklch(0.28 0.035 34) — HANYA teks besar (3.06:1 ≥ 3:1 untuk teks besar); body copy selalu pakai --ink
- --blue: oklch(0.55 0.22 214) — fill label kaset; teks ink di atasnya 5.20:1 ✓
- --blue-deep: oklch(0.30 0.12 214) — teks biru hanya di atas chip krem terang
- --pop: oklch(0.87 0.250 242) — highlight/stiker; teks ink di atasnya 7.94:1 ✓
- --cream: oklch(0.90 0.05 34) — chip terang untuk teks biru

## Font (display/body/aksen, alasan, id Fontsource, variable atau bukan)
- Display: Noto Serif Grantha 400 (fontsource id: noto-serif-grantha) — serif berkarakter "cap/stempel" klasik, cocok untuk judul raksasa rasa papan warteg tua. Bukan variable.
- Body: Hind Madurai 400/500/600 (hind-madurai) — Latin bersih, x-height wajar, terbaca di 16px mobile. Bukan variable.
- Aksen: Hachi Maru Pop 400 (hachi-maru-pop) — untuk stiker/label kaset SIDE A/B. Bukan variable.
- Semua via Astro Fonts API (provider google), subset latin, display swap.

## Ikon (gaya, sumber, daftar 12+ ikon, 3+ custom)
Gaya pixel-art; sumber Bootstrap Icons untuk ikon UI + minimal 4 custom digambar sendiri sebagai SVG pixel-art (kotak-kotak 16×16):
1. piring warteg (custom) 2. kaset (custom) 3. stempel "LOLOS" (custom) 4. sendok sayur (custom)
5. printer/cetak 6. salin 7. unduh 8. ceklis 9. peringatan 10. jam/deadline 11. tautan 12. bendera finish
Garis ornamen: divider gerigi ala gigi kaset; pola repeating garis papan menu; grain feTurbulence di bg.

## Gerak (kategori A-F yang dipakai, narasi yang menyatukan, MODE RINGAN apa yang dimatikan)
Narasi: "masuk warteg → dapur ngebul → piring disajikan di jalur saji".
- A (kamera): hero pinned — judul raksasa di-zoom (scale 1→5, jadi "pintu") via scrub, lalu reveal SIDE A. Zoom dibatasi amplitudonya (tidak memicu pusing).
- B (marquee): 2 band berlawanan ("RACIK NASKAH ✳ CEK SYARAT ✳ ..."), skew mengikuti velocity scroll; tombol jeda (WCAG 2.2.2).
- C (teks): headline hero jatuh per kata lalu menumpuk (entrance); dipakai ulang saat tombol "Racik!" ditekan — kata berjatuhan mengisi 6 blok.
- D (input): strip preset 12 tema bisa di-flick (drag + momentum inersia custom, tanpa plugin berbayar); tap juga bisa.
- E (reveal): garis spine timeline draw-on (stroke-dashoffset scrub); tiap stasiun "terisi" (fill) saat bloknya sudah diisi.
- MODE RINGAN (hardwareConcurrency ≤4 / Save-Data / FPS <40 2 dtk): A jadi fade biasa, D jadi tap-biasa (tanpa momentum), B jadi statis, E jadi fill langsung tanpa draw-on.

## Storyboard hero moment (tabel scroll)
| Scroll | Yang terlihat | Kamera (zoom/pan) | Marquee | Teks | Interaksi |
| --- | --- | --- | --- | --- | --- |
| 0% | Judul raksasa "INFOGRAFIS CEPAT" + stiker kaset | statis | 2 band jalan berlawanan | kata jatuh & menumpuk | — |
| 25% | Judul membesar, jadi "pintu" | zoom in (pinned) | mempercepat + skew | — | — |
| 50% | SIDE A: form tema + strip preset | zoom selesai, reveal | — | — | isi/pilih tema, tekan Racik! |
| 75% | Jalur saji: 6 piring blok naskah | — | band bawah | spine draw-on | edit tiap blok |
| 100% | SIDE B: checklist + ekspor + footer | — | — | — | checklist, salin/unduh/cetak |

Pertunjukan utama di 25–50%: judul raksasa yang di-zoom menjadi pintu masuk dapur. 5 detik pertama: headline raksasa + marquee + stiker kaset pixel — langsung kebaca "tool naskah infografis rasa warteg".

## Konten (15+ item nyata, easter egg)
- 12 preset tema × 6 blok naskah (72 item konkret, konteks lomba Indonesia): Sampah plastik, Stunting, Literasi digital, UMKM naik kelas, Perundungan, Hutan & karhutla, Air bersih, Kesehatan mental remaja, Transportasi umum, Energi surya, Pangan lokal, Pendidikan vokasi.
- 8 item checklist syarat administratif (logo, sumber data, orisinalitas, PDF, A4 portrait, maks ukuran file, biodata, deadline).
- 5 FAQ bersuara Mas Dapur. Panduan tipografi 3 aturan juri.
- Easter egg: ketik "kembalian" di kolom tema lalu tekan Racik → stiker rahasia "SIDE C: kembalian receh, naskah mewah".

## Teknik visual orisinal (2+)
1. Pola CSS repeating (garis papan menu) + grain feTurbulence sebagai tekstur kertas warteg.
2. Tipografi raksasa sebagai ilustrasi utama + divider gerigi gigi kaset (SVG).

## Suara
Tidak (tool fokus; bunyi mikro tidak menambah nilai).
