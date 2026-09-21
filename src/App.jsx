import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowDown, 
  Facebook,
  Share,
  Copy,
  Check,
  Twitter,
  Clock,
  Droplets,
  Waves,
  Info,
  History,
  Ticket,
  HelpCircle,
  Star,
  Quote,
  LifeBuoy,
  Award,
  Umbrella,
  Thermometer
} from 'lucide-react';

const pageData = {
  name: "AquaLumina",
  phone: "6289529605601",
  address: "Jl. Tirta Mutiara No. 8, Palangka Raya, Kalteng.",
  title: "Kesegaran Tanpa Batas di AquaLumina",
  description: "Destinasi rekreasi air terbaik untuk keluarga Anda. Nikmati kolam renang berstandar internasional, area bermain anak, dan air sebening kristal dengan teknologi filtrasi terkini.",
  profileImg: "logo-aqualumina.png", 
  heroImg: "Gemini_Generated_Image_7mr36z7mr36z7mr3.jpg",
  links: {
    instagram: "https://www.instagram.com/solusilokal.id/",
    maps: "https://www.google.com/maps/place/Palangka+Raya,+Palangka+Raya+City,+Central+Kalimantan/", 
    facebook: "https://facebook.com/", 
    tiktok: "https://www.tiktok.com/@solusilokal.id" 
  },
  about: "AquaLumina adalah pusat rekreasi air premium yang didesain untuk memberikan pengalaman berenang yang aman, bersih, dan menyenangkan. Kami menggunakan sistem filtrasi UV dan Ozone untuk memastikan air selalu jernih dan bebas kuman.",
  history: "Berdiri sejak 2015, AquaLumina berawal dari visi untuk menciptakan oase kesegaran di tengah kota. Dimulai dari satu kolam renang dewasa berstandar, kini kami telah berkembang menjadi kompleks rekreasi air terpadu yang melayani ribuan keluarga setiap bulannya.",
  pools: [
    { name: "Olympic Pool", desc: "Kolam berstandar olimpiade kedalaman 1.5m - 2m untuk perenang profesional.", icon: "Award" },
    { name: "Kids Waterpark", desc: "Area bermain air dangkal dengan perosotan dan ember tumpah ceria.", icon: "Umbrella" },
    { name: "Jacuzzi Air Hangat", desc: "Kolam relaksasi air hangat untuk melepas penat dan ketegangan otot.", icon: "Thermometer" }
  ],
  pricing: [
    { name: "Tiket Reguler (Senin-Jumat)", price: "Rp 35.000", type: "Per Orang" },
    { name: "Tiket Weekend / Libur", price: "Rp 50.000", type: "Per Orang" },
    { name: "Member Bulanan", price: "Rp 300.000", type: "Akses Tanpa Batas" },
    { name: "Katalog Loker & Handuk", price: "Rp 15.000", type: "Per Loker/Handuk" }
  ],
  faqs: [
    { q: "Apakah wajib menggunakan baju renang?", a: "Ya, demi menjaga kebersihan air, seluruh pengunjung wajib menggunakan pakaian khusus renang (bahan lycra/spandex)." },
    { q: "Bolehkah membawa makanan dari luar?", a: "Pengunjung tidak diperkenankan membawa makanan/minuman dari luar. Kami menyediakan kantin dengan berbagai pilihan menu." },
    { q: "Apakah ada penyewaan ban dan alat renang?", a: "Tentu! Kami menyewakan ban pelampung, kacamata renang, dan papan seluncur dengan harga terjangkau." }
  ],
  testimonials: [
    { name: "Keluarga Budi", rating: 5, text: "Anak-anak sangat suka area waterpark-nya. Airnya juga tidak pedih di mata, bersih sekali!" },
    { name: "Rina S.", rating: 5, text: "Kolam olympic-nya sangat nyaman untuk latihan rutin. Fasilitas bilas juga bersih dan air panasnya berfungsi baik." },
    { name: "Andi Wijaya", rating: 4, text: "Tempat rekreasi akhir pekan andalan. Kantinnya murah dan enak. Mantap AquaLumina!" }
  ],
  galleryPhotos: [
    "galeri-olympic-pool.webp",
    "galeri-kids-waterpark.webp",
    "galeri-jacuzzi-hangat.webp",
    "galeri-sewa-alat-renang.webp",
  ]
};

export default function App() {
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (images, index) => {
    setLightbox({ isOpen: true, images, currentIndex: index });
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  const scrollToForm = () => {
    document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const visitDate = formData.get('visitDate');
    const ticketType = formData.get('ticketType');
    const quantity = formData.get('quantity');
    const notes = formData.get('notes');
    
    const waUrl = `https://wa.me/${pageData.phone}?text=Halo%20Admin%20${pageData.name},%20saya%20${name}.%20Saya%20ingin%20memesan%20tiket%20untuk%20kunjungan%20tanggal%20${visitDate}.%0A%0ADetail%20Pesanan:%0A-%20Kategori:%20${ticketType}%0A-%20Jumlah:%20${quantity}%20Orang%0A-%20Catatan:%20${notes}%0A%0AMohon%20info%20pembayarannya,%20terima%20kasih.`;
    window.open(waUrl, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: pageData.name,
      text: pageData.title,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        
        body {
          background-color: #f0f7f4;
          color: #0c4a6e;
          margin: 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-[#f0f7f4] min-h-screen overflow-hidden pb-32">
        
        {}
        <section className="relative w-full min-h-[100dvh] flex flex-col justify-end pb-12 px-6 bg-[#168db8]">
          
          <button
            onClick={handleShare}
            aria-label="Share this page"
            className="absolute top-6 right-6 z-20 p-3 bg-[#168db8]/40 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-[#168db8]/60 transition-all shadow-sm"
          >
            <Share size={20} />
          </button>

          <div className="absolute inset-0 z-0">
            <img 
              src={pageData.heroImg} 
              alt={pageData.name} 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e] via-[#0c4a6e]/70 to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-40">
            <div className="w-32 h-32 rounded-full p-2 bg-white shadow-2xl border-2 border-[#fbbf24]/80 mb-6 flex items-center justify-center overflow-hidden">
              <img 
                src={pageData.profileImg} 
                alt="Profile" 
                className="w-full h-full rounded-full object-contain"
              />
            </div>

            <h1 className="text-4xl font-extrabold text-[#e0f2fe] mb-3 leading-tight tracking-tight drop-shadow-md">
              {pageData.name}
            </h1>
            <p className="text-[#bae6fd] font-light text-sm leading-relaxed mb-6 max-w-[95%] drop-shadow-sm">
              {pageData.description}
            </p>

            <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-3">
              <a href={pageData.links.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#168db8]/80 backdrop-blur-md border border-[#7dd3fc]/30 hover:bg-[#168db8] transition-all text-white shadow-sm text-sm font-medium">
                <Instagram size={18} /> Instagram
              </a>
              <a href={pageData.links.tiktok} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#168db8]/80 backdrop-blur-md border border-[#7dd3fc]/30 hover:bg-[#168db8] transition-all text-white shadow-sm text-sm font-medium">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg> TikTok
              </a>
            </div>
            
            <div className="w-full max-w-sm mb-8">
               <a href={pageData.links.maps} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#f59e0b]/90 backdrop-blur-md border border-[#fbbf24]/50 hover:bg-[#d97706] transition-all text-white shadow-md text-sm font-bold w-full">
                <MapPin size={18} /> Lokasi Kami
              </a>
            </div>

            <button 
              onClick={scrollToForm}
              className="group relative flex items-center justify-center gap-3 w-full max-w-sm py-4 bg-[#0284c7] text-white rounded-2xl font-bold text-[13px] uppercase tracking-wider hover:bg-[#0369a1] transition-all shadow-[0_4px_14px_0_rgba(2,132,199,0.39)]"
            >
              Pesan Tiket Sekarang
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        {}
        <section className="py-12 px-6 bg-white">
          <div className="bg-[#f0f9ff] rounded-3xl p-6 shadow-sm border border-[#bae6fd] mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Info className="text-[#0284c7]" size={24} />
              <h2 className="text-xl font-extrabold text-[#0c4a6e]">Tentang Kami</h2>
            </div>
            <p className="text-[#334155] text-sm leading-relaxed">{pageData.about}</p>
          </div>
          
          <div className="bg-[#f0f9ff] rounded-3xl p-6 shadow-sm border border-[#bae6fd]">
            <div className="flex items-center gap-2 mb-3">
              <History className="text-[#0284c7]" size={24} />
              <h2 className="text-xl font-extrabold text-[#0c4a6e]">History</h2>
            </div>
            <p className="text-[#334155] text-sm leading-relaxed">{pageData.history}</p>
          </div>
        </section>

        {}
        <section className="pt-8 pb-10 bg-white border-b border-[#e2e8f0]">
          <div className="px-6 mb-6">
            <div className="flex items-center gap-2">
              <Droplets className="text-[#0ea5e9]" size={22} />
              <h2 className="text-2xl font-extrabold text-[#0c4a6e] tracking-tight">Fasilitas Kolam</h2>
            </div>
            <p className="text-[#475569] text-xs ml-8 mt-1">Beragam pilihan kolam untuk keseruan seluruh keluarga.</p>
          </div>
          
          <div className="grid gap-4 px-6 mb-8">
            {pageData.pools.map((pool, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-[#f8fafc] rounded-2xl border border-[#e2e8f0] hover:border-[#7dd3fc] transition-colors">
                <div className="bg-[#e0f2fe] text-[#0284c7] p-3 rounded-xl shadow-inner">
                  {pool.icon === 'Award' ? <Award size={24} /> : pool.icon === 'Umbrella' ? <Umbrella size={24} /> : <Thermometer size={24}/>}
                </div>
                <div>
                  <h3 className="font-bold text-[#0f172a] mb-1">{pool.name}</h3>
                  <p className="text-xs text-[#475569] leading-relaxed">{pool.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar">
            {pageData.galleryPhotos.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => openLightbox(pageData.galleryPhotos, idx)}
                className="snap-center shrink-0 w-[240px] aspect-[4/3] rounded-[1.5rem] overflow-hidden cursor-pointer relative group border border-[#e2e8f0] shadow-md bg-white"
              >
                <img 
                  src={img} 
                  alt={"Galeri " + (idx + 1)} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="py-10 px-6 bg-[#f8fafc] border-b border-[#e2e8f0]">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Ticket className="text-[#0ea5e9]" size={22} />
              <h2 className="text-2xl font-extrabold text-[#0c4a6e] tracking-tight">Katalog & Harga</h2>
            </div>
            <p className="text-[#475569] text-xs ml-8">Dapatkan penawaran terbaik untuk kunjungan Anda.</p>
          </div>

          <div className="grid gap-3">
            {pageData.pricing.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-white border border-[#e2e8f0] rounded-2xl shadow-sm hover:border-[#38bdf8] hover:shadow-md transition-all">
                <div className="flex-1 pr-3">
                  <h4 className="font-bold text-[#0f172a] text-sm mb-1">{item.name}</h4>
                  <span className="text-[11px] font-medium text-[#64748b] bg-[#f1f5f9] px-2 py-1 rounded-md">{item.type}</span>
                </div>
                <div className="shrink-0 w-[110px] text-left">
                  <span className="font-extrabold text-[#0284c7] text-base whitespace-nowrap block">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="py-10 px-6 bg-white border-b border-[#e2e8f0]">
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <HelpCircle className="text-[#0ea5e9]" size={22} />
              <h2 className="text-2xl font-extrabold text-[#0c4a6e] tracking-tight">FAQ</h2>
            </div>
            <p className="text-[#475569] text-xs ml-8 mt-1">Pertanyaan yang sering diajukan.</p>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className="border border-[#e2e8f0] rounded-2xl overflow-hidden bg-[#f8fafc]">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-4 py-4 font-bold text-sm text-[#0f172a] flex justify-between items-center hover:bg-[#f1f5f9] transition-colors"
                >
                  {faq.q}
                  <span className={`transform transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}>
                    <ArrowDown size={16} className="text-[#0284c7]" />
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 text-xs text-[#475569] leading-relaxed border-t border-[#e2e8f0] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="py-10 px-6 bg-[#f0f9ff] border-b border-[#bae6fd]">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Quote className="text-[#0ea5e9]" size={22} />
              <h2 className="text-2xl font-extrabold text-[#0c4a6e] tracking-tight">Testimoni</h2>
            </div>
            <p className="text-[#475569] text-xs ml-8">Pengalaman seru para pengunjung kami.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-white p-5 rounded-3xl border border-[#e0f2fe] shadow-sm flex flex-col gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#fbbf24] text-[#fbbf24]" />
                  ))}
                </div>
                <p className="text-[#334155] text-sm leading-relaxed italic">"{testi.text}"</p>
                <div className="mt-auto pt-4 border-t border-[#f1f5f9] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0284c7] flex items-center justify-center text-white font-bold text-sm">
                    {testi.name.charAt(0)}
                  </div>
                  <span className="text-[13px] font-bold text-[#0f172a]">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section id="booking-form" className="py-12 px-6 bg-white">
          <div className="bg-[#0c4a6e] border border-[#082f49] rounded-[2rem] p-8 shadow-xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#0284c7]/30 rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#0284c7]/30 rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 mb-8">
              <h2 className="text-2xl font-extrabold text-[#f0f9ff] mb-2">Beli Tiket & Reservasi</h2>
              <p className="text-[#bae6fd] text-sm leading-relaxed">Hindari antrean dengan reservasi tiket Anda secara online via WhatsApp kami.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 relative z-10">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-[#7dd3fc] uppercase tracking-wide ml-1">Nama Pemesan</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Ketik nama lengkap"
                  className="w-full bg-[#f0f9ff]/10 border border-[#bae6fd]/30 rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#bae6fd]/50 focus:outline-none focus:border-[#38bdf8] focus:bg-[#f0f9ff]/20 focus:ring-1 focus:ring-[#38bdf8] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-[#7dd3fc] uppercase tracking-wide ml-1">Tanggal Kunjungan</label>
                <input 
                  type="date" 
                  name="visitDate" 
                  required
                  className="w-full bg-[#f0f9ff]/10 border border-[#bae6fd]/30 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#38bdf8] focus:bg-[#f0f9ff]/20 focus:ring-1 focus:ring-[#38bdf8] transition-all [color-scheme:dark]"
                />
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col gap-1.5 w-2/3">
                  <label className="text-[11px] font-bold text-[#7dd3fc] uppercase tracking-wide ml-1">Kategori Tiket</label>
                  <select 
                    name="ticketType" 
                    required
                    className="w-full bg-[#f0f9ff]/10 border border-[#bae6fd]/30 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#38bdf8] focus:bg-[#f0f9ff]/20 focus:ring-1 focus:ring-[#38bdf8] transition-all appearance-none"
                  >
                    <option value="" className="text-slate-800">Pilih...</option>
                    <option value="Reguler (Weekday)" className="text-slate-800">Reguler (Weekday)</option>
                    <option value="Weekend/Libur" className="text-slate-800">Weekend/Libur</option>
                    <option value="Daftar Member" className="text-slate-800">Daftar Member Bulanan</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5 w-1/3">
                  <label className="text-[11px] font-bold text-[#7dd3fc] uppercase tracking-wide ml-1">Jumlah</label>
                  <input 
                    type="number" 
                    name="quantity"
                    min="1"
                    defaultValue="1" 
                    required
                    className="w-full bg-[#f0f9ff]/10 border border-[#bae6fd]/30 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#38bdf8] focus:bg-[#f0f9ff]/20 focus:ring-1 focus:ring-[#38bdf8] transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-[#7dd3fc] uppercase tracking-wide ml-1">Catatan (Sewa Loker/Handuk dll)</label>
                <textarea 
                  name="notes" 
                  rows="2"
                  placeholder="Opsional..."
                  className="w-full bg-[#f0f9ff]/10 border border-[#bae6fd]/30 rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#bae6fd]/50 focus:outline-none focus:border-[#38bdf8] focus:bg-[#f0f9ff]/20 focus:ring-1 focus:ring-[#38bdf8] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-3 bg-[#f59e0b] text-[#0f172a] font-extrabold text-sm tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#fbbf24] transition-colors shadow-lg"
              >
                Pesan via WhatsApp
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-[#0f172a]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </button>
            </form>
          </div>
        </section>

        {}
        <footer className="pt-8 pb-12 text-center flex flex-col items-center justify-center mx-6 mt-4">
          <div className="w-full h-px bg-[#e2e8f0] mb-8"></div>
          
          <div className="w-16 h-16 bg-white rounded-full shadow-sm border border-[#bae6fd] flex items-center justify-center mb-4 p-1 overflow-hidden">
            <img src={pageData.profileImg} alt="Footer Logo" className="w-full h-full object-contain rounded-full" />
          </div>
          
          <div className="text-[#64748b] text-xs flex flex-col gap-1 items-center">
            <span className="font-extrabold text-[#0f172a] text-sm">{pageData.name}</span>
            <span className="max-w-[250px]">{pageData.address}</span>
          </div>

          <p className="text-[#94a3b8] text-[10px] mt-8">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>

          <a 
            href="https://www.solusilokal.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#94a3b8] text-[10px] mt-2 tracking-wide font-medium hover:text-[#0c4a6e] transition-colors"
          >
            powered by solusilokal.id
          </a>
        </footer>

        {}
        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${
            showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
        >
          <button 
            onClick={scrollToForm}
            className="w-full flex items-center justify-between px-6 py-4 bg-[#0c4a6e] backdrop-blur-xl border border-[#0284c7] rounded-2xl text-white shadow-[0_10px_40px_rgba(2,132,199,0.4)] hover:bg-[#075985] active:scale-[0.98] transition-all"
          >
            <span className="font-bold text-sm tracking-wide text-[#e0f2fe]">Pesan Tiket Renang</span>
            <div className="bg-[#f59e0b] text-[#0f172a] p-2 rounded-xl">
              <Ticket size={18} className="fill-none stroke-current stroke-2" />
            </div>
          </button>
        </div>

      </main>

      {}
      {lightbox.isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-xl"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
            onClick={closeLightbox}
          >
            <X size={20} />
          </button>

          {lightbox.images.length > 1 && (
            <button 
              className="absolute left-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
              onClick={prevImage}
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="w-full max-w-4xl max-h-[100dvh] p-4 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={lightbox.images[lightbox.currentIndex]} 
              alt="Lightbox View" 
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
          </div>

          {lightbox.images.length > 1 && (
            <button 
              className="absolute right-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
              onClick={nextImage}
            >
              <ChevronRight size={24} />
            </button>
          )}
          
          {lightbox.images.length > 1 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xs font-bold tracking-[0.2em] bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
              {lightbox.currentIndex + 1} / {lightbox.images.length}
            </div>
          )}
        </div>
      )}

      {showShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/40 backdrop-blur-sm sm:items-center transition-opacity"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="w-full max-w-[480px] bg-white sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center mb-6 relative">
              <h3 className="text-slate-900 font-bold text-[15px]">Bagikan {pageData.name}</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="absolute right-0 p-1 text-[#64748b] hover:bg-[#f1f5f9] rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-[#f0f9ff] border border-[#e0f2fe] rounded-[24px] p-8 flex flex-col items-center justify-center mb-8 shadow-sm">
              <div className="w-[72px] h-[72px] rounded-full bg-white border border-[#bae6fd] mb-4 p-1.5 flex items-center justify-center overflow-hidden shadow-sm">
                <img src={pageData.profileImg} alt="Profile" className="w-full h-full object-contain" />
              </div>
              <h4 className="text-slate-900 font-bold text-lg text-center tracking-tight">@{pageData.name.toLowerCase().replace(/\s/g, '')}</h4>
              <p className="text-[#64748b] text-sm mt-1 text-center font-medium opacity-90">{pageData.links.instagram.replace('https://www.', '')}</p>
            </div>

            <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar items-start px-1 mb-4">
              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={copyToClipboard}
                  className="w-[60px] h-[60px] rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#334155] hover:bg-[#e2e8f0] transition-all shadow-sm border border-[#e2e8f0]"
                >
                  {copied ? <Check size={26} className="text-green-600" /> : <Copy size={26} />}
                </button>
                <span className="text-[11px] font-semibold text-[#475569] text-center">
                  {copied ? 'Tersalin' : 'Salin Tautan'}
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="w-[60px] h-[60px] rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition-all shadow-sm"
                >
                  <Twitter size={26} />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">X</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="w-[60px] h-[60px] rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <Facebook size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">Facebook</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(pageData.title + ' ' + window.location.href)}`, '_blank')}
                  className="w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <MessageCircle size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">WhatsApp</span>
              </div>
            </div>
            
            <div className="w-full h-px bg-slate-200 mb-4"></div>
            
            <div className="flex flex-col items-center text-center">
              <h5 className="text-[#0f172a] font-bold text-[13px] mb-1">Ikuti Kami</h5>
              <p className="text-[#64748b] text-[11px] mb-4">Follow media sosial kami untuk update promo berenang.</p>
              <a href={pageData.links.instagram} target="_blank" rel="noreferrer" className="w-full py-3 bg-[#0284c7] text-white text-sm font-bold rounded-xl hover:bg-[#0369a1] transition-colors">
                Kunjungi Instagram
              </a>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}