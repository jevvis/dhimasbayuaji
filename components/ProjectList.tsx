'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const palette = ['bg-blue-600', 'bg-slate-600', 'bg-rose-600', 'bg-indigo-600', 'bg-cyan-700', 'bg-purple-600', 'bg-amber-600', 'bg-slate-700']
const colorFor = (tech: string) => palette[tech.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % palette.length]

const projects = [
  {
    number: '01',
    title: { id: "Penawaran Produk Pembiayaan DANASTRA", en: "Offering DANASTRA Financing Products" },
    description: { id: "Menawarkan dan memasarkan produk pembiayaan dana tunai DANASTRA kepada calon konsumen.", en: "Offered and marketed DANASTRA cash financing products to prospective customers." },
    framework: "FIFGROUP",
    techStack: ["Sales", "Pembiayaan"],
  },
  {
    number: '02',
    title: { id: "Prospek & Follow-up via WhatsApp", en: "Prospecting & WhatsApp Follow-up" },
    description: { id: "Mencari dan menindaklanjuti prospek pelanggan melalui komunikasi langsung maupun WhatsApp.", en: "Found and followed up on customer prospects through direct communication and WhatsApp." },
    framework: "FIFGROUP",
    techStack: ["Prospek", "Follow-up"],
  },
  {
    number: '03',
    title: { id: "Informasi Produk & Pengumpulan Dokumen", en: "Product Information & Document Collection" },
    description: { id: "Menjelaskan informasi produk dan persyaratan pengajuan, serta membantu calon konsumen mengumpulkan data dan dokumen sesuai prosedur perusahaan.", en: "Explained product information and application requirements, and helped prospective customers collect data and documents per company procedure." },
    framework: "FIFGROUP",
    techStack: ["Persyaratan", "Dokumen"],
  },
  {
    number: '04',
    title: { id: "Promosi Layanan Internet WiFi", en: "WiFi Internet Service Promotion" },
    description: { id: "Menawarkan dan mempromosikan layanan internet WiFi MyRepublic kepada calon pelanggan.", en: "Offered and promoted MyRepublic WiFi internet services to prospective customers." },
    framework: "MYREPUBLIC",
    techStack: ["Sales", "Promosi"],
  },
  {
    number: '05',
    title: { id: "Penjelasan Produk, Paket & Manfaat", en: "Explaining Products, Packages & Benefits" },
    description: { id: "Berkomunikasi dengan calon pelanggan untuk menjelaskan produk, paket, dan manfaat layanan.", en: "Communicated with prospects to explain products, packages, and service benefits." },
    framework: "MYREPUBLIC",
    techStack: ["Komunikasi", "Paket"],
  },
  {
    number: '06',
    title: { id: "Follow-up & Pendaftaran Pelanggan", en: "Follow-up & Customer Registration" },
    description: { id: "Melakukan follow-up calon pelanggan serta membantu proses pendaftaran pelanggan sesuai prosedur perusahaan.", en: "Followed up with prospective customers and helped with customer registration per company procedure." },
    framework: "MYREPUBLIC",
    techStack: ["Follow-up", "Pendaftaran"],
  },
  {
    number: '07',
    title: { id: "Dukungan Administrasi & Dokumentasi Fraksi", en: "Faction Administration & Documentation Support" },
    description: { id: "Ditugaskan di Komisi II DPR RI untuk mendukung kebutuhan administratif dan dokumentasi kegiatan fraksi Partai Golkar.", en: "Assigned to Commission II of the DPR RI to support the administrative and documentation needs of the Golkar faction's activities." },
    framework: "FRAKSI PARTAI GOLKAR DPR RI",
    techStack: ["Administrasi", "Dokumentasi"],
  },
  {
    number: '08',
    title: { id: "Bahan Rapat, Notulensi & Ringkasan Dokumen", en: "Meeting Materials, Minutes & Document Summaries" },
    description: { id: "Menyiapkan bahan rapat, notulensi, dan ringkasan dokumen untuk mendukung agenda fraksi.", en: "Prepared meeting materials, minutes, and document summaries to support the faction's agenda." },
    framework: "FRAKSI PARTAI GOLKAR DPR RI",
    techStack: ["Notulensi", "Rapat"],
  },
  {
    number: '09',
    title: { id: "Koordinasi dengan Staf", en: "Coordination with Staff" },
    description: { id: "Berkoordinasi dengan staf untuk memastikan kelengkapan dokumen dan kelancaran pelaksanaan kegiatan fraksi.", en: "Coordinated with staff to make sure documents were complete and the faction's activities ran smoothly." },
    framework: "FRAKSI PARTAI GOLKAR DPR RI",
    techStack: ["Koordinasi", "Dokumen"],
  },
  {
    number: '10',
    title: { id: "Pengembangan Sumber Daya Mahasiswa", en: "Student Resource Development" },
    description: { id: "Menyelenggarakan pelatihan kepemimpinan, seminar, dan perlombaan, serta mengelola keluhan mahasiswa ilmu politik.", en: "Organized leadership training, seminars, and competitions, and handled political science students' complaints." },
    framework: "HMJ ILMU POLITIK UIN WALISONGO",
    techStack: ["Organisasi", "Kepemimpinan"],
  },
  {
    number: '11',
    title: { id: "Divisi Futsal & Acara Olahraga", en: "Futsal Division & Sports Events" },
    description: { id: "Berkolaborasi dengan kampus dan pihak eksternal untuk acara olahraga, latihan rutin, dan pertandingan antar-kampus.", en: "Collaborated with the campus and external parties on sports events, regular training, and inter-campus matches." },
    framework: "UKM FISIP SPORT CLUB UIN WALISONGO",
    techStack: ["Organisasi", "Olahraga"],
  },
  {
    number: '12',
    title: { id: "Ketua Pelaksana Seminar Career", en: "Chair of Seminar Career" },
    description: { id: "Memimpin penyelenggaraan seminar CV dan personal branding dari persiapan sampai selesai dengan 29 peserta.", en: "Led a CV and personal branding seminar from preparation to completion with 29 participants." },
    framework: "SEMINAR CAREER",
    techStack: ["Ketua Pelaksana", "29 Peserta"],
  },
  {
    number: '13',
    title: { id: "Koordinator Kelompok LKMM-PD", en: "LKMM-PD Group Coordinator" },
    description: { id: "Mengatur kelompok berjumlah 9 orang dan menjadi penghubung komunikasi antaranggota selama acara.", en: "Managed a group of 9 people and was the communication link between members during the event." },
    framework: "LKMM-PD HMJ ILMU POLITIK",
    techStack: ["Koordinasi", "Kepemimpinan"],
  },
  {
    number: '14',
    title: { id: "Logistik & Perlengkapan Acara", en: "Event Logistics & Equipment" },
    description: { id: "Menyediakan tempat, alat, dan persediaan logistik untuk Ravelnas Himapol dan FISIP Futsal Competition 2.", en: "Provided venues, equipment, and logistics supplies for Ravelnas Himapol and FISIP Futsal Competition 2." },
    framework: "RAVELNAS HIMAPOL & FISIP FUTSAL COMPETITION 2",
    techStack: ["Logistik", "Perlengkapan"],
  },
]

export default function ProjectList() {
  const { lang } = useLanguage()
  const en = lang === 'en'

  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{en ? 'SALES & SUPPORT PORTFOLIO' : 'PORTOFOLIO SALES & SUPPORT'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{en ? 'Sales, Administration & Organization Experience' : 'Pengalaman Sales, Administrasi & Organisasi'}</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            {en
              ? 'A record of sales work at FIFGROUP and MyRepublic, an administrative internship at the Golkar Faction of the DPR RI, and organization and committee experience.'
              : 'Rekam jejak pekerjaan sales di FIFGROUP dan MyRepublic, magang administrasi di Fraksi Partai Golkar DPR RI, serta pengalaman organisasi dan kepanitiaan.'}
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300"
            >
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">{project.number}</span>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1">{project.title[lang]}</h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">{project.description[lang]}</p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">{project.framework}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${colorFor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
