// 12 preset tema lomba infografis × 6 blok naskah.
// PENTING (R7): angka di bawah ini CONTOH untuk struktur naskah — ganti dengan
// hasil risetmu dan cantumkan sumbernya sebelum dikirim ke juri.
// Tiap preset menyertakan `cekSumber`: ke mana angka itu harus diverifikasi.

export const BLOK_LABEL = [
  { id: 'judul', nama: 'Judul', tip: 'Satu kalimat, maksimal 8 kata. Bikin orang berhenti scroll.' },
  { id: 'hook', nama: 'Hook', tip: 'Fakta mengejutkan atau pertanyaan. 1–2 kalimat pembuka.' },
  { id: 'data', nama: 'Data Kunci', tip: '2–3 angka terkuat. Satu angka = satu visual (chart/ikon).' },
  { id: 'fakta', nama: 'Fakta Pendukung', tip: 'Konteks: kenapa ini terjadi, siapa terdampak.' },
  { id: 'visual', nama: 'Saran Visual', tip: 'Tulis di sini maunya digambar apa per blok — desainer berterima kasih.' },
  { id: 'cta', nama: 'Ajakan (CTA)', tip: 'Satu ajakan jelas. Apa yang harus dilakukan pembaca besok pagi?' },
];

export const PRESETS = [
  {
    id: 'sampah-plastik',
    nama: 'Sampah Plastik',
    cekSumber: 'KLHK (SIPSN), BPS, jurnal lingkungan',
    blok: {
      judul: 'Plastik Sekali Pakai, Masalah Berkali-kali',
      hook: 'Satu kantong plastik dipakai rata-rata 15 menit — tapi butuh ratusan tahun untuk terurai. [angka contoh]',
      data: '• Indonesia menghasilkan ±68 juta ton sampah per tahun, ±18% di antaranya plastik. [contoh]\n• Hanya ±10% sampah plastik yang terdaur ulang. [contoh]',
      fakta: 'Sampah plastik yang tidak terkelola berakhir di sungai dan laut, terurai menjadi mikroplastik yang masuk rantai makanan — termasuk ke piring kita.',
      visual: 'Blok judul: ilustrasi kantong plastik raksasa menaungi kota. Blok data: bar chart 68 juta ton vs 10% daur ulang. Blok CTA: ikon tumbler + tote bag.',
      cta: 'Mulai besok: bawa tumbler dan tas belanja sendiri. Satu orang, satu tumbler, ribuan plastik terpangkas setahun.',
    },
  },
  {
    id: 'stunting',
    nama: 'Stunting',
    cekSumber: 'Kemenkes (SKI/SSGI), BKKBN, WHO',
    blok: {
      judul: '1000 Hari yang Menentukan Masa Depan',
      hook: 'Tinggi badan anak bukan soal genetik semata — 1000 hari pertama kehidupan menentukan segalanya.',
      data: '• Prevalensi stunting Indonesia ±21,5% (2023). [contoh]\n• Target nasional: turun ke 14% pada 2024. [contoh]',
      fakta: 'Stunting bukan cuma soal pendek — ia menghambat perkembangan otak, menurunkan prestasi belajar, dan berisiko menurunkan produktivitas saat dewasa.',
      visual: 'Timeline 1000 hari (hamil → 2 tahun) sebagai sumbu utama. Ikon: telur, ikan, sayur untuk protein hewani. Warna hangat, jangan menakut-nakuti.',
      cta: 'Calon orang tua dan remaja putri: penuhi protein hewani dan tablet tambah darah. Cegah stunting mulai dari piring sendiri.',
    },
  },
  {
    id: 'literasi-digital',
    nama: 'Literasi Digital',
    cekSumber: 'Kominfo, Katadata Insight Center, UNESCO',
    blok: {
      judul: 'Jempolmu Lebih Cepat dari Otakmu?',
      hook: 'Rata-rata orang Indonesia menghabiskan 7+ jam sehari menatap layar. Berapa jam dipakai untuk memverifikasi sebelum membagikan? [contoh]',
      data: '• 7 jam 59 menit: rata-rata screen time harian Indonesia. [contoh]\n• 3 langkah cek hoaks: cek sumber, cek tanggal, cek gambar (reverse search).',
      fakta: 'Hoaks paling cepat menyebar lewat grup keluarga — bukan karena niat jahat, tapi karena tombol "teruskan" lebih mudah daripada tombol "cek dulu".',
      visual: 'Ilustrasi jempol raksasa vs kaca pembesar. Flowchart 3 langkah cek hoaks sebagai panel tengah. Ikon grup chat keluarga.',
      cta: 'Sebelum teruskan pesan: tahan 10 detik, cek 3 langkah di atas. Jadilah "rem" hoaks di grup keluargamu.',
    },
  },
  {
    id: 'umkm',
    nama: 'UMKM Naik Kelas',
    cekSumber: 'Kemenkop UKM, BPS',
    blok: {
      judul: 'Warung Sebelah Bisa Go Digital — Kamu Juga Bisa',
      hook: 'UMKM menyumbang ±61% PDB Indonesia, tapi baru sebagian kecil yang go digital. [contoh]',
      data: '• ±64 juta unit UMKM di Indonesia. [contoh]\n• UMKM digital tumbuh omzet hingga 2× lipat dibanding yang offline saja. [contoh]',
      fakta: 'Kendalanya bukan modal besar — melainkan foto produk seadanya, tidak ada katalog harga jelas, dan slow respon chat pembeli.',
      visual: 'Before/after: warung foto blur vs foto terang + harga jelas. Ikon: QRIS, marketplace, chat. Panah naik untuk omzet.',
      cta: 'Minggu ini: foto ulang 5 produk terlaris dengan cahaya pagi, pasang harga jelas, aktifkan QRIS. Digital itu mulai dari HP yang kamu pegang.',
    },
  },
  {
    id: 'perundungan',
    nama: 'Stop Perundungan',
    cekSumber: 'KPAI, Kemendikbud, UNICEF Indonesia',
    blok: {
      judul: 'Candaan yang Tidak Lucu Buat Semua Orang',
      hook: '"Cuma bercanda" — tapi 1 dari 3 kalimat itu diingat korban bertahun-tahun.',
      data: '• ±41% siswa pernah mengalami perundungan verbal. [contoh]\n• Korban bullying 2× lebih berisiko mengalami kecemasan. [contoh]',
      fakta: 'Perundungan jarang terjadi sekali — ia berulang, ada kuasa yang timpang, dan penonton yang diam justru memperkuat pelaku.',
      visual: 'Jangan gambarkan korban menangis (melemahkan). Gambarkan "tangan menahan" + lingkaran dukungan teman. Warna tegas, bukan muram.',
      cta: 'Lihat teman dirundung? Jangan diam: alihkan perhatian, ajak korban menjauh, laporkan ke guru/BK. Penonton yang berani = perisai.',
    },
  },
  {
    id: 'karhutla',
    nama: 'Hutan & Karhutla',
    cekSumber: 'KLHK (SiPongi), BMKG, BNPB',
    blok: {
      judul: 'Asapnya Sampai ke Kelasmu',
      hook: 'Satu titik api di hutan bisa menutup sekolah ratusan kilometer jauhnya.',
      data: '• Luas karhutla 2023: ±1,16 juta hektare. [contoh]\n• ISPU >300 = berbahaya: sekolah diliburkan, penerbangan terganggu. [contoh]',
      fakta: 'Mayoritas karhutla dipicu manusia — pembukaan lahan dengan bakar — lalu diperparah musim kemarau dan angin.',
      visual: 'Peta titik api (heatmap) sebagai latar. Masker + angka ISPU sebagai ikon data. Timeline: kemarau → titik api → kabut asap.',
      cta: 'Lapor titik api: hubungi Manggala Agni/BPBD setempat atau lapor via aplikasi. Jangan bakar sampah/lahan di musim kemarau.',
    },
  },
  {
    id: 'air-bersih',
    nama: 'Air Bersih',
    cekSumber: 'BPS, PUPR, WHO/UNICEF JMP',
    blok: {
      judul: 'Satu Ember Sehari Bukan Kemewahan',
      hook: 'Kita buka keran tanpa pikir — jutaan keluarga masih antre air bersih tiap pagi.',
      data: '• ±27 juta penduduk belum akses air minum aman. [contoh]\n• Kebutuhan dasar: 60 liter/orang/hari (WHO). [contoh]',
      fakta: 'Krisis air bukan cuma soal kemarau — tapi juga pencemaran sumur, intrusi air laut, dan pipa bocor yang membuang 30%+ air bersih. [contoh]',
      visual: 'Ember vs keran sebagai metafora utama. Peta akses air per provinsi (choropleth sederhana). Ikon tetes air untuk tiap data.',
      cta: 'Hemat dari rumah: tampung air wudu/cuci sayur untuk siram tanaman. Laporkan pipa bocor ke PDAM — air yang bocor = air yang hilang.',
    },
  },
  {
    id: 'kesehatan-mental',
    nama: 'Kesehatan Mental Remaja',
    cekSumber: 'Kemenkes, WHO, PDSKJI',
    blok: {
      judul: 'Capek Itu Valid. Minta Tolong Juga.',
      hook: 'Otak remaja sedang renovasi besar-besaran — wajar kalau emosinya naik-turun seperti roller coaster.',
      data: '• 1 dari 7 remaja mengalami gangguan mental (global, WHO). [contoh]\n• Tanda bahaya: menarik diri >2 minggu, nilai anjlok drastis, tidak nafsu makan/tidur.',
      fakta: '"Cuma kurang ibadah/kurang bersyukur" adalah mitos berbahaya — depresi adalah kondisi medis, bukan kurang iman atau kurang usaha.',
      visual: 'Hindari visual gelap-menakutkan. Pakai metafora "baterai lowbat" + "charger" (istirahat, cerita, profesional). Warna hangat.',
      cta: 'Butuh cerita? Hubungi konselor sekolah/BK, atau call center kesehatan jiwa 119 ext 8 (Kemenkes). Minta tolong itu berani, bukan lemah.',
    },
  },
  {
    id: 'transportasi-umum',
    nama: 'Transportasi Umum',
    cekSumber: 'BPS, Kemenhub, BPTJ',
    blok: {
      judul: 'Macet Bukan Takdir',
      hook: 'Satu bus TransJakarta mengangkut 80 orang — atau setara 60 mobil pribadi yang hilang dari jalan.',
      data: '• Kecepatan rata-rata kendaraan di Jakarta: ±10–15 km/jam di jam sibuk. [contoh]\n• 1 bus = ±60 mobil. Satu gerbong KRL = ratusan motor. [contoh]',
      fakta: 'Orang tidak benci angkutan umum — mereka benci menunggu lama, berdesakan, dan last-mile yang tidak jelas.',
      visual: 'Perbandingan visual: 60 ikon mobil vs 1 ikon bus (ruang jalan yang dipakai). Peta rute + ikon last-mile (ojek, sepeda, jalan kaki).',
      cta: 'Tantangan 5 hari: ganti 1 perjalanan rutinmu ke transportasi umum. Catat waktu & biaya — bandingkan sendiri.',
    },
  },
  {
    id: 'energi-surya',
    nama: 'Energi Surya',
    cekSumber: 'KESDM, IESR, PLN',
    blok: {
      judul: 'Atapmu Pembangkit Listrik',
      hook: 'Indonesia dapat jatah matahari 4,8 kWh/m²/hari — salah satu tertinggi di dunia. Atap rumahmu idle. [contoh]',
      data: '• Potensi surya Indonesia: ±3.294 GW. [contoh]\n• PLTS atap 1 kWp ≈ menghemat ±Rp150 ribu/bulan tagihan listrik. [contoh]',
      fakta: 'Hambatan adopsi: biaya awal panel, bukan teknologinya. Skema cicilan dan atap bersama (komunal) mulai bermunculan.',
      visual: 'Ilustrasi atap rumah + panel + kabel ke stopkontak. Sunburst chart: potensi vs terpasang. Ikon koin untuk penghematan.',
      cta: 'Hitung dulu: cek tagihan listrik 3 bulan terakhir, lalu simulasi PLTS atap di kalkulator daring KESDM. Mulai dari atap sendiri.',
    },
  },
  {
    id: 'pangan-lokal',
    nama: 'Pangan Lokal',
    cekSumber: 'BPS, Kementan, FAO',
    blok: {
      judul: 'Nasi Bukan Satu-satunya Jawaban',
      hook: 'Indonesia punya 77 jenis pangan karbohidrat lokal — tapi 95% piring kita isinya nasi. [contoh]',
      data: '• Konsumsi beras: ±81 kg/kapita/tahun. [contoh]\n• Sagu, singkong, jagung, talas: karbohidrat setara, tumbuh di lahan marjinal.',
      fakta: 'Ketergantungan pada satu komoditas = rentan: sekali gagal panen atau harga gabah naik, semua kena.',
      visual: 'Piring dibagi 77 kotak kecil (satu per pangan lokal) vs satu kotak nasi raksasa. Ikon umbi-umbian pixel-art.',
      cta: 'Gerakan #SehariTanpaNasi seminggu sekali: ganti dengan tiwul, getuk, atau bubur sagu. Diversifikasi dimulai dari piringmu.',
    },
  },
  {
    id: 'pendidikan-vokasi',
    nama: 'Pendidikan Vokasi',
    cekSumber: 'Kemendikbud, BPS (Sakernas)',
    blok: {
      judul: 'SMK Bukan Pilihan Kedua',
      hook: 'Lulusan vokasi yang terserap industri: keahliannya dibayar sejak hari pertama kerja.',
      data: '• TPT lulusan SMK pernah tertinggi di antara jenjang pendidikan. [contoh]\n• Program magang industri: jembatan SMK → kerja. [contoh]',
      fakta: 'Masalahnya bukan gengsi — tapi link-and-match: kurikulum yang ketinggalan 5 tahun dari kebutuhan industri.',
      visual: 'Dua jalur: tangga (akademik) vs eskalator (vokasi) menuju gedung "industri". Ikon: helm proyek, laptop, sertifikasi.',
      cta: 'Siswa SMP: kunjungi 2 SMK + 1 industri saat open house sebelum memilih. Pilih jurusan dari peta kerja, bukan dari gengsi.',
    },
  },
];

export const SYARAT = [
  { id: 'logo', nama: 'Logo penyelenggara terpasang', detail: 'Unduh dari panduan lomba resmi, resolusi cukup, tidak stretch.' },
  { id: 'sumber', nama: 'Sumber data tercantum', detail: 'Tiap angka punya sumber di kaki infografis — juri mengecek ini duluan.' },
  { id: 'orisinal', nama: 'Karya orisinal', detail: 'Bukan template mentah atau jiplakan. Elemen boleh dari aset bebas lisensi dengan kredit.' },
  { id: 'format', nama: 'Format file PDF', detail: 'Kirim PDF, bukan JPG/PNG — teks tetap tajam saat dicetak juri.' },
  { id: 'ukuran-kertas', nama: 'Ukuran A4 portrait', detail: '210 × 297 mm, portrait. Cek lagi: ada lomba yang minta A3 atau square.' },
  { id: 'ukuran-file', nama: 'Ukuran file di bawah batas', detail: 'Umumnya maks 5–10 MB. Kompres gambar sebelum export.' },
  { id: 'biodata', nama: 'Biodata peserta lengkap', detail: 'Nama, sekolah, kontak — sesuai format yang diminta panitia.' },
  { id: 'deadline', nama: 'Kirim H-1 sebelum deadline', detail: 'Server panitia sering down di jam-jam terakhir. Jangan mepet.' },
];

export const TIPOGRAFI = [
  {
    nama: 'Dua keluarga font, tidak lebih',
    detail: 'Satu untuk judul (berkarakter), satu untuk isi (bersih dan terbaca). Tiga font atau lebih = juri pusing duluan.',
  },
  {
    nama: 'Judul terbaca dari 2 meter',
    detail: 'Tes: zoom out sampai 25%. Kalau judul masih kebaca, hierarkinya benar. Ukuran judul minimal 3× ukuran isi.',
  },
  {
    nama: 'Kontras teks minimal 4,5:1',
    detail: 'Teks abu-abu muda di atas putih adalah pembunuh nilai. Kalau ragu, gelapkan teksnya — jangan ganti warnanya.',
  },
];

export const FAQS = [
  {
    q: 'Bolehkah naskah ini dipakai mentah-mentah untuk lomba?',
    a: 'Jangan. Racikan ini titik start — ganti semua angka [contoh] dengan hasil risetmu, sesuaikan dengan sub-tema lomba, lalu tulis ulang dengan bahasamu sendiri. Juri menilai orisinalitas.',
  },
  {
    q: 'Datanya dari mana? Kok ada tulisan [contoh]?',
    a: 'Angka-angka di preset memang contoh struktur, bukan data final. Tiap tema menyertakan "cek sumber" — lembaga resmi tempat kamu harus memverifikasi angka aslinya sebelum dipakai.',
  },
  {
    q: 'Apakah harus daftar akun atau bayar?',
    a: 'Tidak. Semua jalan di browser, gratis, tanpa akun. Naskahmu tersimpan otomatis di localStorage perangkatmu sendiri.',
  },
  {
    q: 'Bagaimana cara menyimpan dan membagikan naskah?',
    a: 'Pakai tombol Ekspor: salin semua, unduh sebagai .md, cetak, atau salin tautan berisi naskahmu (deep-link) untuk dibuka di perangkat lain.',
  },
  {
    q: 'Bolehkah dipakai untuk lomba berkelompok?',
    a: 'Boleh. Satu orang meracik, lalu kirim tautan naskah ke anggota tim untuk direview. Catatan: tautan berisi seluruh teks naskah — jangan sebar ke publik sebelum lomba selesai.',
  },
];
