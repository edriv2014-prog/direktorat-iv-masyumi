
export default function Page() {
  const pillars = [
    {
      title: "PILAR 1: MASYUMI BRANTAS KORUPSI & MAKSIAT",
      programs: [
        { program: "Gerakan Content #MasyumiAntiKorupsi", contoh: "Series video pendek 30-60 detik + infografis korupsi = maksiat", misal: "Video 'Korupsi Bansos = Makan Hak Dhuafa (HARAM)' + Infografis Peta Maksiat - DPD Jaktim - Output replikasi nasional" },
        { program: "Podcast Investigasi Bongkar Maksiat Birokrasi", contoh: "Podcast 15 menit dengan aktivis anti-korupsi", misal: "Episode 1 '1 Triliun = 20.000 anak buruh gagal sekolah'" },
        { program: "Lomba Seni Anti Korupsi", contoh: "Lomba poster santri, karikatur, puisi", misal: "Tema 'Korupsi itu Mencuri, Mencuri itu Maksiat'" },
      ]
    },
    {
      title: "PILAR 2: DEKAT KYAI, USTADZ, HABIB",
      programs: [
        { program: "Safari Seni Dakwah Hadrah, Qasidah, Marawis", contoh: "Vlog silaturahmi majelis keliling", misal: "Hadrah di Majelis Habib Cipinang - Reels 60 detik" },
        { program: "Content Ceramah Pendek Reels", contoh: "Kolaborasi Ustadz lokal jelaskan isu ummat", misal: "Ustadz Jaktim Jawab: Hukum Korupsi dalam Islam" },
        { program: "Festival Seni Budaya Islami Jaktim", contoh: "Lomba Qasidah, Hadrah, Puisi Islami", misal: "Festival Muharram - Libatkan 10 majelis" },
      ]
    },
    {
      title: "PILAR 3: PEDULI UMMAT - BURUH, TANI, TENAGA KERJA, PENGANGGURAN",
      programs: [
        { program: "Suara Ummat - Testimoni Video Rakyat", contoh: "Video curhat buruh, tani, ojol, pengangguran", misal: "Saya Buruh di Jatinegara, Gaji Dipotong, Masyumi Bela Kami" },
        { program: "Content Edukasi Hak Rakyat", contoh: "Infografis hak buruh, solusi UMKM", misal: "Infografis 5 Hak Buruh Wajib Tahu + Cara UMKM Daftar Halal Gratis" },
        { program: "Workshop Skill Gratis & Teatrikal Rakyat", contoh: "Kelas content creator, drama kisah rakyat", misal: "Kelas Content Creator Anti Korupsi - 20 peserta/angkatan" },
      ]
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a1930] text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#11244a] border border-[#D4AF37]/30 rounded-2xl p-6 text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37] text-black px-3 py-1 rounded-full text-xs font-bold mb-3">M PARTAI MASYUMI</div>
          <h1 className="text-2xl md:text-3xl font-black">DIREKTORAT IV - SENI BUDAYA & CONTENT KREASI</h1>
          <p className="text-[#D4AF37] font-bold mt-1">KAPPU • DPP PARTAI MASYUMI (PUSAT) — KURIKULUM NASIONAL</p>
          <div className="mt-3 inline-block border border-[#D4AF37]/50 rounded-full px-4 py-1 text-sm">PILOT PROJECT: DPD JAKARTA TIMUR</div>
        </div>

        <div className="bg-[#162d5a] rounded-2xl p-5 text-center mb-6 border border-[#D4AF37]/20">
          <p className="text-[#D4AF37] text-xs tracking-widest">MOTTO PERJUANGAN • DPP PUSAT</p>
          <h2 className="text-2xl font-black mt-1">Brantas Korupsi, Dekat Ulama, Bela Ummat</h2>
          <span className="inline-block mt-3 bg-[#D4AF37] text-black px-4 py-1 rounded-full text-xs font-bold">9 PROGRAM SIAP TAYANG</span>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#0f2347] border border-[#D4AF37]/20 rounded-xl p-4">
            <h3 className="text-[#D4AF37] text-xs font-bold tracking-widest">STRUKTUR KOMANDO KAPPU</h3>
            <p className="font-bold mt-2">DPP Pusat → DPD Provinsi → DPD Jaktim Pelaksana</p>
            <p className="text-xs text-gray-400 mt-2">DPP KURIKULUM → JAKTIM EKSEKUSI MODEL</p>
          </div>
          <div className="bg-[#0f2347] border border-[#D4AF37]/20 rounded-xl p-4">
            <h3 className="text-[#D4AF37] text-xs font-bold">LEVEL 1 • DPP (PUSAT)</h3>
            <p className="font-bold">Direktorat IV KAPPU DPP Partai Masyumi</p>
            <p className="text-xs text-gray-400">Pengarah, Kurikulum, Template nasional</p>
          </div>
          <div className="bg-[#0f2347] border border-[#D4AF37]/20 rounded-xl p-4">
            <h3 className="text-[#D4AF37] text-xs font-bold">LEVEL 3 • DPD KOTA</h3>
            <p className="font-bold">DPD Jakarta Timur - Pelaksana</p>
            <p className="text-xs text-gray-400">9 Program dengan Contoh + Misal siap shoot</p>
          </div>
        </div>

        {pillars.map((pillar) => (
          <div key={pillar.title} className="mb-8">
            <h2 className="bg-[#D4AF37] text-black font-black px-4 py-2 rounded-t-xl text-sm">{pillar.title}</h2>
            <div className="grid md:grid-cols-3 gap-3 bg-[#0f2347] p-3 rounded-b-xl border border-[#D4AF37]/20">
              {pillar.programs.map((p, i) => (
                <div key={i} className="bg-[#1a335e] rounded-lg p-3 border border-white/10">
                  <p className="text-[#D4AF37] font-bold text-xs">Program: {p.program}</p>
                  <p className="text-xs mt-2"><span className="text-gray-400">Contohnya:</span> {p.contoh}</p>
                  <p className="text-xs mt-1 bg-black/30 p-2 rounded"><span className="text-[#D4AF37]">Misal:</span> {p.misal}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-white text-black rounded-xl p-5">
          <h3 className="font-black text-[#0a1930]">TIMELINE & KPI - SIAP REPLIKASI NASIONAL</h3>
          <ul className="text-xs mt-3 space-y-1 list-disc pl-5">
            <li>FASE 1 Pra-Kampanye (Bulan 1-2) Jaktim: 10 video + 10 infografis + Safari 10 Majelis</li>
            <li>FASE 2 Kampanye Kreatif (Bulan 3-4): Lomba Seni, Festival Islami, Workshop Skill Gratis</li>
            <li>FASE 3 Replikasi Nasional: Template Canva/CapCut disebar ke DPD lain</li>
            <li>KPI: 1 Juta views/bulan, 100 content ulama/tahun, 50 testimoni/DPD</li>
          </ul>
          <p className="text-[10px] text-gray-600 mt-3">Disusun: Direktorat IV KAPPU DPP Partai Masyumi | Pelaksana Model: DPD Jakarta Timur | Jayalah NKRI</p>
        </div>
      </div>
    </main>
  );
}
