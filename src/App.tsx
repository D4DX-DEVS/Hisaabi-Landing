import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './components/ui/button';
import { 
  BookOpen, 
  Clock, 
  Heart, 
  Moon, 
  Target, 
  MessageCircle,
  Menu,
  X,
  Copy,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Globe,
  Languages,
  ArrowRight
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 glass rounded-full px-4 shadow-sm border border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 cursor-pointer" onClick={(e) => handleScroll(e as any, 'support')}>
            <img src="/assets/app-icon.png" alt="Hisaabi Logo" className="w-10 h-10 rounded-xl" />
            <span className="text-xl font-bold text-foreground tracking-tight">Hisaabi</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Features</a>
              <a href="#screenshots" onClick={(e) => handleScroll(e, 'screenshots')} className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">App</a>
              <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">About</a>
              <a href="#support" onClick={(e) => handleScroll(e, 'support')} className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Support</a>
              <a href="#download" onClick={(e) => handleScroll(e, 'download')}>
                <Button size="sm" className="ml-4 rounded-full">Get the App</Button>
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden glass absolute top-20 left-0 w-full rounded-2xl border border-border/50 shadow-lg overflow-hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/50">
            <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="block px-3 py-2 rounded-xl text-base font-medium text-foreground hover:text-primary hover:bg-white/60">Features</a>
            <a href="#screenshots" onClick={(e) => handleScroll(e, 'screenshots')} className="block px-3 py-2 rounded-xl text-base font-medium text-foreground hover:text-primary hover:bg-white/60">App</a>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="block px-3 py-2 rounded-xl text-base font-medium text-foreground hover:text-primary hover:bg-white/60">About</a>
            <a href="#support" onClick={(e) => handleScroll(e, 'support')} className="block px-3 py-2 rounded-xl text-base font-medium text-foreground hover:text-primary hover:bg-white/60">Support</a>
            <a href="#download" onClick={(e) => handleScroll(e, 'download')} className="block px-3 py-2 rounded-xl text-base font-medium text-primary hover:bg-white/60">Get the App</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const FeatureCard = ({ icon: Icon, title, description, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 group shadow-sm hover:shadow-md"
    >
      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
        <Icon className="text-primary h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    { icon: Clock, title: "Prayer Times", description: "Real-time tracking, accurate location-based times, and Adhan notifications." },
    { icon: BookOpen, title: "Quran & Duas", description: "Daily reading tracker, verse memorization, and comprehensive Dua collection." },
    { icon: Target, title: "Daily Goals", description: "Customizable worship targets, progress tracking, and achievement system." },
    { icon: Moon, title: "Ramadan Ready", description: "Fasting tracker, Taraweeh reminders, and special Ramadan Adhkar." },
    { icon: Heart, title: "Dhikr & Tasbeeh", description: "Digital counter, shake-to-count, and 99 Names of Allah." },
    { icon: MessageCircle, title: "AI Assistant", description: "AI-powered personalized Islamic guidance and knowledge Q&A." },
  ];

  return (
    <section id="features" className="py-16 relative z-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">Everything You Need</h2>
          <p className="text-muted-foreground text-lg">Replacing multiple apps with one comprehensive Islamic companion designed to keep you connected to your deen.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <FeatureCard key={i} index={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Screenshots = () => {
  const screenshots = [
    "/assets/ss1.jpeg",
    "/assets/ss2.jpeg",
    "/assets/ss3.jpeg",
    "/assets/ss4.jpeg",
    "/assets/ss5.jpeg",
    "/assets/ss6.jpeg",
    "/assets/ss7.jpeg",
    "/assets/ss8.jpeg",
    "/assets/ss9.jpeg",
  ];
  const points = ["Easy to use", "Fast & Reliable", "Secure & Private", "Cross-platform"];

  return (
    <section id="screenshots" className="py-16 relative z-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/10 via-primary/5 to-white overflow-hidden px-6 py-12 md:px-12"
        >
          <div className="absolute -left-16 bottom-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-10 -top-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-10 lg:gap-14 items-center">
            {/* Phone: screens rotate inside a fixed frame */}
            <PhoneShowcase screens={screenshots} className="my-8" />

            {/* Text */}
            <div>
              <div className="h-1 w-24 rounded-full bg-primary mb-4" />
              <p className="text-lg font-semibold text-foreground mb-2">App Experience</p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-snug text-foreground mb-4">
                A beautiful and intuitive interface designed to help you focus on what matters most.
              </h2>
              <p className="text-muted-foreground mb-7 max-w-md">
                Simple, elegant and easy to use — Hisaabi brings all the essential features at your fingertips.
              </p>
              <a href="#download" onClick={(e) => { e.preventDefault(); document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' }); }}>
                <Button className="h-12 px-7 rounded-full bg-gradient-to-r from-emerald-700 to-emerald-500 text-white shadow-md">
                  Download Hisaabi <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>

            {/* Points */}
            <ul className="space-y-4 lg:pl-4">
              {points.map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 fill-primary text-white shrink-0" />
                  <span className="font-medium text-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-16 relative overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden flex flex-col md:flex-row md:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 p-6 md:p-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5 text-foreground">Why Hisaabi?</h2>
            <p className="text-base text-muted-foreground mb-6">
              Hisaabi is built to help Muslims stay consistent in their faith. Whether it's praying on time, reciting the Quran daily, or building a habit of Dhikr.
            </p>
            <ul className="space-y-3">
              {[
                "All-in-one unified experience",
                "Habit tracking and visual streaks",
                "Modern AI Islamic Assistant",
                "Built for communities and families"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 fill-primary text-white shrink-0" />
                  <span className="text-foreground font-medium text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:w-[48%] p-3 md:pl-0"
          >
            <img
              src="/assets/mosque.jpg"
              alt="A mosque at sunset reflected in still water"
              className="w-full h-56 md:h-full min-h-[260px] object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Large upright phone with rotating app screens over a green design (rings, glow, dots).
const PhoneShowcase = ({ screens, className = "" }: { screens: string[]; className?: string }) => {
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % screens.length), 3000);
    return () => clearInterval(t);
  }, [screens.length]);

  return (
    <div className={`relative mx-auto w-[250px] sm:w-[290px] ${className}`}>
      <div className="absolute -inset-12 rounded-full bg-gradient-to-br from-primary/35 via-primary/15 to-transparent" />
      <div className="absolute -inset-20 rounded-full border border-primary/20" />
      <div className="absolute -inset-5 rounded-full border border-primary/25" />
      <div className="absolute -right-14 top-6 w-24 h-24 opacity-60 [background-image:radial-gradient(#10b981_1.6px,transparent_1.6px)] [background-size:12px_12px]" />
      <div className="absolute -left-12 bottom-10 w-20 h-20 opacity-50 [background-image:radial-gradient(#10b981_1.6px,transparent_1.6px)] [background-size:12px_12px]" />
      <div className="absolute -left-16 top-24 h-12 w-12 rounded-2xl bg-white shadow-lg flex items-center justify-center rotate-[-8deg]">
        <Clock className="h-6 w-6 text-primary" />
      </div>
      <div className="absolute -right-16 bottom-28 h-12 w-12 rounded-2xl bg-white shadow-lg flex items-center justify-center rotate-[8deg]">
        <BookOpen className="h-6 w-6 text-primary" />
      </div>
      <div className="relative w-full aspect-[722/1600] bg-black rounded-[2.4rem] border-[8px] border-black shadow-2xl overflow-hidden ring-4 ring-white/70">
        {screens.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Hisaabi app screen"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: i === idx ? 1 : 0 }}
          />
        ))}
      </div>
    </div>
  );
};

// Real photo of a hand holding a phone (app screenshot composited on the screen) in a soft green arch with real leaf photos.
// Several screens crossfade; one stays still.
const PhotoPhone = ({ src, className = "" }: { src: string; className?: string }) => (
  <div className={`relative aspect-[412/1000] ${className}`}>
    <div className="absolute -inset-x-[35%] inset-y-[10%] rounded-full bg-primary/20 blur-3xl" />
    <img
      src={src}
      alt="Hisaabi app in hand"
      className="absolute inset-0 w-full h-full object-contain"
      style={{ WebkitMaskImage: "linear-gradient(to bottom, #000 88%, transparent 100%)", maskImage: "linear-gradient(to bottom, #000 88%, transparent 100%)" }}
    />
  </div>
);

const Support = () => {
  const [copied, setCopied] = useState(false);
  const [ml, setMl] = useState(true);
  const upiId = "vyapar.176971524101@hdfcbank";

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const bank = [
    ["Account Name", "D4DX INNOVATIONS LLP"],
    ["TID", "82182968"],
    ["Bank", "HDFC SmartHub Vyapar"],
    ["Account number", "50200102639272"],
    ["IFSC code", "HDFC0002811"],
    ["Branch", "CIVIL STATION"],
  ];

  return (
    <section id="support" className="pt-32 pb-16 relative z-10 bg-white overflow-hidden">
      <div className="absolute -top-24 right-0 w-[520px] h-[520px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Hero row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block rounded-full bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 mb-5">
              Support This Noble Cause
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-6 whitespace-nowrap text-foreground">
              Give today, <span className="text-primary">benefit forever</span>
            </h2>

            <button
              onClick={() => setMl(!ml)}
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium px-3 py-1.5 mb-4 hover:bg-primary/10 transition-colors"
            >
              <Languages className="h-3.5 w-3.5" />
              {ml ? 'Translate to English' : <span lang="ml">മലയാളത്തിൽ വായിക്കുക</span>}
            </button>

            <div className="mb-8 text-base text-muted-foreground leading-relaxed space-y-5">
              <div className={`space-y-5 ${ml ? 'hidden' : ''}`}>
                <p>
                  Hisaabi.faith is a free Islamic knowledge resource created for the global community. It is available as a website and as apps on Android and iOS. Your donations are essential to cover the costs of maintaining and regularly updating the technology behind them.
                </p>
                <p>
                  If you benefit from Hisaabi, or if you value this effort to serve others, please donate and become a part of it. In doing so, you secure for yourself a Sadaqah Jariyah: an ongoing charity whose reward continues even after death, as taught by the Prophet Muhammad ﷺ.
                </p>
              </div>
              <div className={`space-y-5 ${ml ? '' : 'hidden'}`}>
                <p lang="ml">
                  ആഗോള സമൂഹത്തിനായി ഒരുക്കിയിരിക്കുന്ന സൗജന്യ ഇസ്‌ലാമിക വിജ്ഞാന സ്രോതസ്സാണ് Hisaabi.faith എന്ന വെബ്സൈറ്റും അതിന്റെ ആൻഡ്രോയിഡ്, ഐഒഎസ് ആപ്പുകളും. ഇവയുടെ സാങ്കേതിക സംവിധാനങ്ങൾ നിലനിർത്താനും കാലാനുസൃതമായി പുതുക്കാനുമുള്ള ചെലവുകൾ കണ്ടെത്താൻ നിങ്ങളുടെ സംഭാവനകൾ അനിവാര്യമാണ്.
                </p>
                <p lang="ml">
                  ഹിസാബിയിൽ നിന്ന് നിങ്ങൾക്ക് പ്രയോജനം ലഭിക്കുന്നുണ്ടെങ്കിൽ, അല്ലെങ്കിൽ മറ്റുള്ളവർക്ക് സേവനം ചെയ്യാനുള്ള ഈ സദുദ്യമത്തെ നിങ്ങൾ വിലമതിക്കുന്നുണ്ടെങ്കിൽ, ദയവായി സംഭാവന നൽകി ഇതിൽ പങ്കാളികളാവുക. അതുവഴി നബി ﷺ പഠിപ്പിച്ചതുപോലെ, മരണശേഷവും പ്രതിഫലം ലഭിച്ചുകൊണ്ടിരിക്കുന്ന ഒരു നിലനിൽക്കുന്ന ദാനം (സ്വദഖ ജാരിയ) നിങ്ങൾക്കായി ഉറപ്പാക്കുക.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="https://rzp.io/rzp/muhasabah-app" target="_blank" rel="noreferrer">
                <Button className="h-12 px-7 text-base rounded-full shadow-md">
                  <Heart className="mr-2 h-5 w-5" /> Support Now
                </Button>
              </a>
              <a href="https://hisaabi.faith" target="_blank" rel="noreferrer">
                <Button variant="outline" className="h-12 px-7 text-base rounded-full border-primary text-primary hover:bg-primary/10">
                  <Globe className="mr-2 h-5 w-5" /> Web Edition
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <PhotoPhone src="/assets/hand/ph9.webp" className="mx-auto w-full max-w-[250px]" />
          </motion.div>
        </div>

        {/* Donate strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-14 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-primary/5 p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
        >
          {/* Hadith */}
          <blockquote className="border-l-4 border-primary pl-5 space-y-3 hadith-box">
            <p dir="rtl" lang="ar" className="text-xl leading-loose text-foreground font-medium">
              إِذَا مَاتَ الإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلَّا مِنْ ثَلَاثَةٍ: إِلَّا مِنْ صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ
            </p>
            <p className="text-sm text-muted-foreground italic">
              “When a person dies, all of his deeds come to an end except three: ongoing charity, knowledge from which others benefit, and a righteous child who prays for him.”
            </p>
            <p lang="ml" className="text-sm text-muted-foreground italic">
              “ഒരു മനുഷ്യൻ മരണപ്പെട്ടാൽ മൂന്ന് കാര്യങ്ങളൊഴികെ അവന്റെ എല്ലാ കർമ്മങ്ങളും മുറിഞ്ഞുപോകുന്നു: നിലനിൽക്കുന്ന ദാനം, പ്രയോജനപ്പെടുന്ന അറിവ്, അവനുവേണ്ടി പ്രാർത്ഥിക്കുന്ന സൽസന്താനം.”
            </p>
            <footer className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">(Sahih Muslim 1631)</footer>
          </blockquote>

          {/* QR */}
          <div className="text-center">
            <h3 className="text-lg font-bold text-foreground mb-4">Scan QR or transfer directly</h3>
            <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-sm inline-block">
              <img src="/assets/qr.jpeg" alt="UPI QR Code" className="w-40 h-40 object-contain" />
            </div>
            <p className="text-xs text-muted-foreground mt-3 mb-3">Open any UPI app, tap <strong>Scan QR</strong>, and donate</p>
            <div className="flex items-center justify-between bg-white border border-border rounded-xl p-2 pl-3">
              <span className="text-xs font-medium text-foreground truncate">{upiId}</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-xs font-medium text-primary ml-3 shrink-0 bg-primary/10 px-2.5 py-1.5 rounded-lg"
              >
                {copied ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>

          {/* Bank */}
          <dl className="text-sm">
            {bank.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2 border-b border-primary/10 last:border-0">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="font-medium text-foreground text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-sm">
          <span className="font-semibold text-foreground">For queries, please contact us</span>
          <a href="mailto:info@d4dx.co" className="flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
            <Mail className="h-4 w-4 shrink-0" /> info@d4dx.co
          </a>
          <a href="tel:+919895804006" className="flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
            <Phone className="h-4 w-4 shrink-0" /> +91 98958 04006
          </a>
        </div>
      </div>
    </section>
  );
};

// Mosque skyline silhouette used in the download banner and footer.
const Skyline = ({ className = "", fill = "currentColor" }: { className?: string; fill?: string }) => (
  <svg viewBox="0 0 1200 160" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden fill={fill}>
    <path d="M0 160 V128 H60 V96 C60 70 100 70 100 96 V128 H150 V110 H162 V60 L168 40 L174 60 V110 H186 V128 H260 V104 C260 60 340 60 340 104 V128 H380 V70 L386 48 L392 70 V128 H460 V120 H520 V100 C520 72 560 72 560 100 V120 H640 V128 H700 V90 C700 40 800 40 800 90 V128 H830 V64 L836 40 L842 64 V128 H890 V128 H940 V98 C940 70 990 70 990 98 V128 H1040 V110 H1052 V62 L1058 42 L1064 62 V110 H1076 V128 H1140 V104 C1140 84 1170 84 1170 104 V128 H1200 V160 Z" />
  </svg>
);

const Download = () => {
  return (
    <section id="download" className="py-12 relative bg-slate-50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-emerald-800 to-lime-600 px-6 py-8 md:px-10"
        >
          <Skyline className="absolute right-0 bottom-0 h-28 w-[55%] text-white/10 pointer-events-none" />
          <div className="relative flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
            <div className="flex items-center gap-4">
              <img src="/assets/app-icon.png" alt="Hisaabi Icon" className="w-16 h-16 rounded-2xl shadow-lg" />
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">Download Hisaabi</h2>
                <p className="text-sm text-emerald-100/80">Available on iOS and Android.</p>
              </div>
            </div>
            <div className="hidden lg:block h-14 w-px bg-white/25" />
            <div className="flex flex-wrap gap-3 items-center">
              <a href="https://apps.apple.com/in/app/hisaabi/id1620752442" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                <img src="/assets/appstore.png" alt="Download on the App Store" className="h-12 w-auto object-contain" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=app.hisaabi" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                <img src="/assets/playstore.png" alt="Get it on Google Play" className="h-12 w-auto object-contain" />
              </a>
              <a href="https://hisaabi.faith" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                <div className="h-12 px-4 rounded-xl bg-black border border-slate-500 text-white flex items-center gap-2.5 text-left">
                  <Globe className="h-7 w-7" />
                  <div className="leading-tight">
                    <div className="text-[10px] tracking-wide">Open the</div>
                    <div className="text-lg font-semibold">Web Edition</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-emerald-950 to-[#06201c] text-slate-300 pt-14 pb-8">
      <Skyline className="absolute inset-x-0 bottom-0 h-32 w-full text-emerald-300/10 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_auto] gap-10 mb-10 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/assets/app-icon.png" alt="Hisaabi Logo" className="w-11 h-11 rounded-xl" />
              <div>
                <h3 className="text-xl font-bold text-white leading-tight">Hisaabi</h3>
                <p className="text-xs text-emerald-200/70">Built by D4DX Innovations LLP</p>
              </div>
            </div>
            <p className="text-sm text-slate-300/80 leading-relaxed max-w-sm">
              Making Hisaabi guidance accessible through a clear, practical app experience for families, students, and community volunteers.
            </p>
          </div>

          <div className="md:border-l md:border-white/10 md:pl-10">
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-300/80">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@d4dx.co" className="hover:text-white transition-colors">info@d4dx.co</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="leading-relaxed">
                  D4DX Innovations LLP<br />
                  AMH Tower, First Floor, 63/3965 B,<br />
                  Mavoor Rd, Thiruthiyad, Kozhikode 673004
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+919895804006" className="hover:text-white transition-colors">+91 98958 04006</a>
              </li>
            </ul>
          </div>

          <div className="md:border-l md:border-white/10 md:pl-10 flex items-center gap-3 text-sm text-slate-200">
            <span className="leading-snug">A noble initiative for<br />a better society</span>
            <Heart className="h-7 w-7 text-primary" />
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div>
            <p>© 2026 Hisaabi. All rights reserved.</p>
            <p className="mt-1">
              Powered by <a href="https://d4dx.co/" target="_blank" rel="noreferrer" className="text-white font-medium hover:text-primary transition-colors">D4DX</a>
            </p>
          </div>
          <div className="flex gap-6">
            <a href="https://d4dx.co/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://d4dx.co/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="https://d4dx.co/contacts-us/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 text-foreground">
      <Navbar />
      <main className="pt-16">
        <Support />
        <Features />
        <Screenshots />
        <About />
        <Download />
      </main>
      <Footer />
    </div>
  );
}

export default App;
