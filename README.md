# AquaLumina - Destinasi Rekreasi Air & Kolam Renang Terpadu Palangka Raya

Website landing page interaktif & mobile-first untuk **AquaLumina** (Pusat Rekreasi Air & Kolam Renang Palangka Raya). Dilengkapi dengan showcase fasilitas kolam (Olympic Pool, Kids Waterpark, Jacuzzi Hangat), galeri foto interaktif dengan Lightbox, katalog harga tiket reguler & member, formulir reservasi tiket langsung ke WhatsApp Admin, integrasi Google Maps, FAQ akordeon interaktif, ulasan testimoni, serta fitur bagikan link (share modal).

🌐 **Live Demo Website:** [https://solusilokal.github.io/AquaLumina/](https://solusilokal.github.io/AquaLumina/)  
📦 **GitHub Repository:** [https://github.com/solusilokal/AquaLumina](https://github.com/solusilokal/AquaLumina)

---

## 🚀 Cara Menjalankan & Preview

Terdapat **2 cara praktis** untuk melihat preview website ini:

### 1. Buka Langsung Tanpa Terminal (Paling Cepat & Praktis)
- Buka folder `kolam renang` di File Explorer Windows.
- Cukup **klik dua kali (double-click)** pada file `standalone.html` (atau `preview.bat` opsi `[1]`).
- Website akan langsung terbuka di browser (Chrome / Edge / Firefox) lengkap dengan styling Tailwind CSS, ikon Lucide, gambar, dan interaktivitasnya tanpa memerlukan web server.

---

### 2. Menggunakan Vite Dev Server (Hot Reload)
- **Cara A:** Klik dua kali file **`preview.bat`** lalu ketik `2` dan tekan Enter.
- **Cara B:** Buka terminal / command prompt di folder ini dan jalankan:
  ```bash
  npm run dev
  ```
- Buka peramban di [http://localhost:3000](http://localhost:3000).

---

## 📁 Struktur File Proyek

```
kolam renang/
├── public/
│   ├── logo-aqualumina.png                          # Logo profil resmi AquaLumina
│   ├── gambarSEO.png                                # Gambar kartu preview SEO & WhatsApp
│   ├── galeri-olympic-pool.webp                     # Foto kolam olympic pool
│   ├── galeri-kids-waterpark.webp                   # Foto kids waterpark
│   ├── galeri-jacuzzi-hangat.webp                   # Foto jacuzzi air hangat
│   ├── galeri-sewa-alat-renang.webp                 # Foto area sewa perlengkapan renang
│   └── Gemini_Generated_Image_7mr36z7mr36z7mr3.jpg  # Foto banner kolam renang AquaLumina
├── src/
│   ├── App.jsx                                      # Komponen utama React AquaLumina
│   ├── index.css                                    # Konfigurasi Tailwind & Google Fonts Plus Jakarta Sans
│   └── main.jsx                                     # Entry point aplikasi React 18
├── dist/                                            # Hasil kompilasi produksi Vite
├── standalone.html                                  # File mandiri lengkap (bisa dibuka langsung tanpa server)
├── preview.bat                                      # Script launcher 1-klik untuk Windows
├── index.html                                       # File HTML utama untuk Vite dev & build
├── build_standalone.cjs                             # Skrip bundler esbuild untuk standalone.html
├── package.json                                     # Konfigurasi dependensi npm & skrip
├── vite.config.js                                   # Konfigurasi Vite server & build
├── tailwind.config.js                               # Konfigurasi Tailwind CSS
├── postcss.config.js                                # Konfigurasi PostCSS
├── logo-aqualumina.png                              # File logo AquaLumina
├── gambarSEO.png                                    # Gambar kartu preview SEO & WhatsApp
├── galeri-*.webp                                    # 4 Foto fasilitas galeri AquaLumina
├── Gemini_Generated_Image_7mr36z7mr36z7mr3.jpg      # Asset foto hero
└── aqualumina_pool_app.tsx                          # Source code komponen asli
```

---

## ✨ Fitur-Fitur Utama

- **Hero Visual & Identitas AquaLumina**: Desain modern bernuansa aquatic blue (`#0c4a6e`, `#0284c7`, `#168db8`) dengan sentuhan gold amber (`#f59e0b`).
- **Fasilitas Kolam Renang**: Olympic Pool (1.5m - 2m), Kids Waterpark ramah anak, dan Jacuzzi Air Hangat.
- **Galeri Foto & Lightbox Modal**: Geser dan perbesar foto-foto fasilitas dengan preview fullscreen dan navigasi slide (Next/Prev).
- **Katalog & Harga Tiket**: Tiket reguler weekday, weekend/hari libur, member bulanan, dan sewa perlengkapan.
- **FAQ Interaktif**: Jawaban pertanyaan seputar pakaian renang, makanan luar, dan penyewaan alat.
- **Formulir Pemesanan WhatsApp Otomatis**: Pengunjung mengisi nama, tanggal, kategori tiket, jumlah orang, lalu sistem langsung memformat pesan WhatsApp ke Admin.
- **Share Modal**: Fitur salin tautan, bagikan ke WhatsApp, X (Twitter), dan Facebook.
- **Sticky CTA Button**: Tombol mengambang pemesanan tiket yang muncul saat pengguna menggulir ke bawah.
