# Portfolio — Jovan Faizan Ardiansyah

Website portfolio personal. Dibangun dengan HTML, CSS, dan JavaScript murni.

## 🚀 Deploy ke GitHub Pages (Gratis!)

### Langkah 1: Buat Repository
1. Buka [github.com/new](https://github.com/new)
2. Buat repository baru dengan nama: **`jovanjopan.github.io`**
   - Nama harus persis sesuai username GitHub Anda
3. Set repository ke **Public**
4. Jangan centang "Add a README file" (kita sudah punya)
5. Klik **Create repository**

### Langkah 2: Upload File
**Cara mudah (tanpa Git):**
1. Buka repository yang baru dibuat
2. Klik **"uploading an existing file"**
3. Drag & drop semua file dan folder dari project ini
4. Klik **Commit changes**

**Cara dengan Git (lebih baik untuk jangka panjang):**
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/jovanjopan/jovanjopan.github.io.git
git push -u origin main
```

### Langkah 3: Aktifkan GitHub Pages
1. Buka **Settings** di repository
2. Di sidebar kiri, klik **Pages**
3. Di bagian "Source", pilih **Deploy from a branch**
4. Pilih branch **main** dan folder **/ (root)**
5. Klik **Save**

### Langkah 4: Tunggu & Akses
- Tunggu 1-2 menit untuk deploy pertama
- Website Anda akan live di: **https://jovanjopan.github.io**

---

## ✏️ Cara Update Konten

1. Edit file-file di repository (bisa langsung di GitHub atau clone ke lokal)
2. Ganti semua placeholder text di `index.html` dengan konten Anda
3. Tambahkan foto ke folder `assets/images/`
4. Commit & push — GitHub Pages akan otomatis update

### Checklist Konten
- [ ] Ganti tagline di hero section
- [ ] Tulis About Me yang personal
- [ ] Isi 5 project dengan detail lengkap
- [ ] Tambahkan screenshot/gambar proyek
- [ ] Isi pengalaman di timeline
- [ ] Update link email, LinkedIn, GitHub

---

## 📁 Struktur File

```
├── index.html          ← Halaman utama
├── css/
│   └── style.css       ← Semua styling
├── js/
│   └── main.js         ← Interaksi & animasi
├── assets/
│   └── images/         ← Foto & screenshot
└── README.md           ← File ini
```

## 🌐 Custom Domain (Opsional)

Jika Anda punya domain sendiri (misal: `jovanfaizan.com`):
1. Buka **Settings > Pages** di repository
2. Masukkan domain Anda di kolom **Custom domain**
3. Tambahkan DNS records sesuai [panduan GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
