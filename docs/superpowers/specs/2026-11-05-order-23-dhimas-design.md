# ORDER 23: Portofolio Dhimas Bayu Aji (desain dan daftar perbedaan CV vs foto)

Tanggal: 2026-11-05. Sumber: `CV_ Dhimas Bayu Aji_Tempo Maganghub.pdf` (3 halaman), 32 foto di `Foto portofolio-20261105T092843Z-1-001`, dan dua tangkapan layar WhatsApp dari klien.

## Tujuan
Situs portofolio dwibahasa (ID/EN) dari Template 1 (Next.js 14). Kode dasar diambil dari ORDER 22 (turunan Template 1 yang sudah dirapikan). Isi hanya dari CV dan foto klien, tidak ada data karangan.

## Tambahan dari klien (tangkapan layar WhatsApp)
1. Klien sedang ikut Maganghub (Kemnaker) dan melamar ke satu perusahaan, Tempo Inti Media Harian, untuk dua posisi: **B2B Sales Executive** (status Wawancara, 09 Nov 2026 14.00 daring) dan **Staf Sales Support - Implementer** (status Dikirim). Portofolio diminta disesuaikan dengan perusahaan dan kedua posisi itu.
2. Typo di CV, bagian Sales Force UFI: periode ditulis September sampai Oktober, yang benar **September sampai November**. Situs memakai Sep — Nov 2026 (CV sudah menulis "Sep 2026 – Nov 2026" pada baris tanggalnya; teks tidak memakai kata Oktober).

## Keputusan desain (pilihan pembuat situs)
- Hero memakai dua kartu peran: "B2B Sales Executive" dan "Staf Sales Support - Implementer", dan keterangan "Melamar: Tempo Inti Media Harian".
- Bagian baru "Posisi yang Dilamar" (id `roles`) tepat setelah Tentang Saya: dua kartu, tiap kartu berisi butir pengalaman dari CV yang relevan. Tidak ada klaim tentang kebutuhan atau isi perusahaan Tempo di luar CV (kecuali kenyataan bahwa klien mengikuti pelatihan di Tempo Institute, tertulis di CV).
- Pengalaman kerja diurut seperti CV (terbaru dulu): FIFGROUP (Sales Force UFI - Danastra), MyRepublic (Sales), lalu magang Fraksi Partai Golkar DPR RI.
- Bagian Organisasi & Kepanitiaan: 2 organisasi (HMJ Ilmu Politik, UKM FISIP Sport Club) dan 4 kepanitiaan (Ravelnas Himapol, Seminar Career, LKMM-PD, FISIP Futsal Competition 2), masing-masing dengan tumpukan foto.
- Bagian Penghargaan & Sertifikat: sertifikat Tempo Institute (gambar sertifikat) dan Beasiswa KJMU (foto).
- Kemampuan: Hard Skills dan Soft Skills persis seperti CV. Tidak ada daftar perangkat lunak selain "Microsoft Office" (CV tidak merinci Word/Excel/PowerPoint, jadi tidak ditulis).
- Foto hero: foto wisuda `IMG_0509.HEIC` (selempang wisudawan), cutout rembg, karena klien tidak mengirim pas foto/profil.
- Privasi: foto Danastra dikaburkan di bagian alamat dan kode overlay Timemark, wajah pihak ketiga (calon/pelanggan), plat nomor motor, dan dokumen yang dipegang. Foto MyRepublic dikaburkan di bagian overlay koordinat GPS dan stempel waktu.
- Kontak: email, WhatsApp (085717361506 menjadi wa.me/6285717361506), LinkedIn (dari CV), lokasi "Jakarta Barat, DKI Jakarta".
- Teks buatan pembuat situs (diturunkan dari CV): judul Tentang Saya, kutipan, empat karakter kerja, tagline, lencana hero.

## Daftar perbedaan CV vs foto (untuk klien)
1. Tidak ada pas foto/foto profil. Hero memakai foto wisuda `IMG_0509`. Kalau ada foto formal berlatar polos, kirim untuk menggantinya.
2. Sertifikat Tempo Institute: judul di sertifikat "Kelas Jurnalistik Dasar: Langkah Awal Jadi Jurnalis" (30 Agustus 2026), sedangkan CV menulis "Jurnalis Tingkat Pemula". Nama di sertifikat "DHIMASBAYU" (satu kata). Situs memakai judul sesuai sertifikat; mohon konfirmasi.
3. Beasiswa KJMU: CV menulis periode Mar 2023 - Mei 2026, tetapi tidak ada bukti dokumen (SK/kartu). Foto di folder "Foto penghargaan beasiswa" adalah foto bersama peserta (bukan dokumen); diasumsikan kegiatan penerima KJMU. Mohon konfirmasi. Tiga file ada duplikat (`a1eb88aa...` dan `(1)` identik).
4. Foto kepanitiaan LKMM-PD `IMG_3225` dan `IMG_3226` hampir identik; Futsal Competition `502101e0` dan `bec8e5a1` hampir identik. Hanya satu dari tiap pasangan dipakai.
5. Foto Unit Kegiatan Mahasiswa (FISIP Sport Club) adalah foto kelompok di kafe dan di dalam ruangan, bukan foto olahraga futsal. Dipakai apa adanya.
6. Folder "pengalaman organisasi, himpunan mahasiswa jurusan" juga memuat foto LKMM-PD (kegiatan kepanitiaan), dan foto bendera HMJ Ilmu Politik.
7. CV tidak menyebut posisi persis foto Danastra (foto selfie bersama rekan dan foto serah terima dokumen/motor). Foto itu mengandung wajah pihak ketiga, plat nomor motor, dan dokumen; sudah dikaburkan.
8. CV: periode kerja dan sertifikat (Jul sampai Nov 2026, Agu 2026) lebih baru daripada tahun kelulusan; kelulusan tertulis Apr 2026, wisuda di foto Kamis 21 Mei 2026. Ditampilkan apa adanya.
9. CV: periode UKM FISIP Sport Club dan HMJ sama-sama Mar - Okt 2023; kepanitiaan 2023 saling tumpuk. Ditampilkan apa adanya.
10. Foto Ravelnas memuat Ganjar Pranowo (disebut di CV sebagai tamu gala dinner). Perlu persetujuan klien kalau tidak ingin ditampilkan.
11. CV, bagian FISIP Futsal Competition: kalimat pencapaian terpotong ("memastikan persediaan mencukupi untuk peserta dan"). Situs menulis hanya bagian yang utuh.
12. Typo di CV: "Adaptibility", "ke organisasian", "sampe". Situs memakai ejaan yang benar.
13. Foto tidak dipakai: duplikat (butir 3 dan 4).
14. Tangkapan layar Maganghub memperlihatkan lamaran ketiga ("Pengelola Teknis Kebijakan...") yang tidak disebut klien; tidak dimasukkan.
