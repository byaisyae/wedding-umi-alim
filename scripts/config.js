/* Data undangan (nama, tanggal, acara, rekening, galeri, cerita) — edit di file ini. */
/* ============ DATA — edit di sini ============ */
// Foto dummy pernikahan dari Unsplash (lisensi bebas pakai). Ganti dengan foto kostumer saat pesanan asli.
const U = (id, w, h) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75&w=${w}&h=${h}`;
// Kosongkan ("" / []) bagian opsional bila tidak dipakai: live, giftAddress, gifts, story.
const C = {
  bride: {
    full: "Umi Musidah Naila Izatin, S.E", // nama + gelar
    nick: "Umi", // nama panggilan (tampil di cover)
    ig: "nlztn_", // tanpa @
    wa: "6285772173499", // format 62xxx
    father: "Supriadi",
    mother: "Sumak Iyah",
    role: "Putri", // Putri / Putri pertama / Putri kedua ...
    address: "Ngawi, Jawa Timur",
    // 2 foto = carousel otomatis (bergeser ke kanan). Isi 1 foto saja bila tidak ingin carousel.
    photos: ["img/p10.jpg"], // foto portrait sendiri (isi 2 foto = carousel otomatis)
  },
  groom: {
    full: "Nur Alim Ma'mun, S.I.Kom",
    nick: "Alim",
    ig: "alimmmn_",
    wa: "6285888619272", // format 62xxx
    father: "Fatchuri",
    mother: "Tursilah",
    role: "Putra",
    address: "Pemalang, Jawa Tengah",
    // 2 foto = carousel otomatis (bergeser ke kiri).
    photos: ["img/p11.jpg"],
  },
  date: "2026-12-27T15:00:00", // tanggal & jam mulai acara (Minggu, 27 Desember 2026)
  // Identitas & teks undangan
  site: {
    title: "The Wedding of Umi & Alim", // judul tab browser
    copyright: "© 2026 Aisyae Digital Invitation — Dibuat dengan cinta.",
    // kredit desainer di footer (kosongkan {} untuk menyembunyikan)
    credit: {
      name: "saevitation.com",
      url: "https://saevitation.com",
      ig: "saevitation",
    },
  },
  text: {
    greeting: "Assalamu'alaikum Wr. Wb.",
    intro:
      "Segala puji bagi Allah SWT yang telah menjadikan hamba-Nya hidup berpasang-pasangan. Dengan memohon ridho, rahmat, dan berkah-Nya, kami bermaksud mengundang Bapak/Ibu/Saudara/i dalam acara pernikahan kami.",
    quote:
      "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
    quoteSource: "AR-RUM AYAT : 21",
    closing:
      "Merupakan sebuah kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Terima kasih.",
  },
  // URL Web App Google Apps Script (berakhiran /exec) untuk RSVP & ucapan. Kosongkan = disimpan di browser saja (hanya untuk uji coba)
  rsvp: "https://script.google.com/macros/s/AKfycbwqubOEaIhRvknu1ulGTuK7Ohaz2w7og4ECivurgvghD-3GQZGpyyrqyM_ylupjvuCGdw/exec",
  // foto latar tiap bagian
  bg: {
    // latar paralax watercolor untuk bagian tanpa foto (Mempelai, Galeri, Cerita, Hadiah)
    paper: "img/paper.jpg",
    cover: "img/p3.jpg",
    quote: "img/p8.jpg",
    foot: "img/p1.jpg",
    date: "img/p7.jpg",
  },
  events: [
    {
      t: "Akad Nikah",
      // photos: 2 foto = carousel otomatis; date (opsional) = tanggal khusus acara ini, kosong = tanggal utama
      photos: ["img/l6.jpg", "img/c1.jpg"],
      time: "15.00 - 18.00 WIB",
      place: "Hotel Grand Tjokro Jakarta",
      addr: "Jl. Daan Mogot No. 63, Kel. Tanjung Duren Utara, Kec. Grogol Petamburan, Kota Jakarta Barat.",
      map: "https://maps.app.goo.gl/Yte3U3tN8GscBi5C6?g_st=ac",
    },
    {
      t: "Resepsi",
      photos: ["img/l5.jpg", "img/c3.jpg"],
      date: "", // kosong = tanggal & hari tidak ditampilkan (isi mis. "2026-12-27" bila sudah ada)
      time: "", // kosong = jam tidak ditampilkan
      place: "Kediaman Mempelai Wanita",
      addr: "Desa Kedung Putri, Kec. Paron, Kab. Ngawi, Jawa Timur",
      map: "", // kosong = tombol "Buka Maps" disembunyikan
    },
  ],
  live: "", // link live streaming (kosongkan jika tidak ada)
  music: "sound/Lagu Pernikahan Kita.mpeg", // lagu latar: taruh file mp3 di folder sound/
  // alamat pengiriman kado (kosongkan {} jika tidak dipakai)
  giftAddress: {
    name: "Alim",
    addr: "ACER CUSTOMER SERVICE CENTER - RUKO MANGGA DUA SQUARE BLOK H NO. 28-29 - JL. GUNUNG SAHARI RAYA, KEL. ANCOL, KEC. PADEMANGAN, KOTA JAKARTA UTARA",
  },
  // rekening amplop digital (boleh lebih dari satu; kosongkan [] jika tidak dipakai)
  gifts: [
    {
      bank: "BCA",
      no: "3690022248",
      name: "NURALIM MA'MUN",
      logo: "img/bca.svg",
    },
    {
      bank: "BRI",
      no: "0969 0104 1638 533",
      name: "Umi Musidah Naila Izatin",
      logo: "img/bri.svg",
    },
  ],
  // nomor WhatsApp tujuan konfirmasi pengiriman hadiah (format 62xxx; kosong = pakai WA mempelai wanita)
  giftWa: "6285888619272",
  // galeri: disarankan 6 foto portrait agar ringan (tampil sebagai slider + thumbnail)
  gallery: [
    "img/p1.jpg",
    "img/p2.jpg",
    "img/p3.jpg",
    "img/p4.jpg",
    "img/p5.jpeg",
    "img/p6.jpeg",
    "img/p7.jpg",
    "img/p8.jpg",
    "img/p9.jpeg",
  ],
  // cerita (kosongkan [] jika tidak dipakai)
  // 2 foto cerita (carousel otomatis bergeser ke bawah)
  storyPhotos: ["img/c2.jpg", "img/c4.jpg"],
  // contoh isi (hapus tanda // di depan, lalu isi dengan cerita asli):
  // story: [
  //   { d: "09 September 2016", t: "Awal Bertemu", p: "Tulis cerita singkat di sini." },
  //   { d: "12 Desember 2016", t: "Menjalin Hubungan", p: "Tulis cerita singkat di sini." },
  //   { d: "15 Januari 2023", t: "Bertunangan", p: "Tulis cerita singkat di sini." },
  // ],
  // cerita (kosongkan [] jika tidak dipakai)
  story: [
    {
      d: "2015",
      t: "Witing Tresno Jalaran Soko Kulino",
      p: "Tidak ada yang menyangka perkenalan biasa di lorong sekolah akan membawa kami sejauh ini. Bermula dari pertemanan sederhana sebagai adik dan kakak kelas di SMK Negeri 2 Jakarta, hingga pada akhirnya pertemanan itu perlahan menumbuhkan rasa nyaman hingga kami memutuskan untuk berjalan bersama pada tahun 2015.",
    },
    {
      d: "2023",
      t: "Sigar",
      p: "Tujuh tahun berjalan, kami belajar banyak tentang arti memahami dan mempercayai. Namun, dalam proses pendewasaan seringkali menuntut ruang. Pada awal tahun 2023, benturan ego membuat kami sepakat untuk melepaskan genggaman tangan dan memilih jalan masing-masing.",
    },
    {
      d: "2025",
      t: "Janji Temani",
      p: "Dua tahun terpisah, takdir rupanya hanya memberi kami jeda, bukan titik akhir. Sebuah pertemuan dan tatapan yang tak disengaja kembali menautkan kami. Dengan versi diri yang lebih matang, percakapan sederhana kembali membangun kenyamanan yang sempat hilang. Di akhir tahun 2025, kami mantap dan berniat baik untuk membawa komitmen ini ke tahap lamaran.",
    },
    {
      d: "2026",
      t: "Tresno Tekan Mati",
      p: "Selamanya dimulai pada hari Senin, 23 Maret 2026. Semua ujian dan perpisahan di masa lalu ternyata adalah cara Allah SWT untuk menguatkan kami. Hari itu bukanlah sebuah akhir, melainkan garis awal yang baru. Kami pertemukan dua keluarga besar dalam sebuah acara yang melantunkan janji / ikrar bersama dalam ikatan pertunangan.",
    },
  ],
};
/* =============================================== */
