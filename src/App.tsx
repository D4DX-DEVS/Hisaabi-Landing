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
  Star,
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
    "/assets/hand/ph1.webp",
    "/assets/hand/ph2.webp",
    "/assets/hand/ph3.webp",
    "/assets/hand/ph4.webp",
    "/assets/hand/ph5.webp",
    "/assets/hand/ph6.webp",
    "/assets/hand/ph7.webp",
    "/assets/hand/ph8.webp",
    "/assets/hand/ph9.webp",
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
            <PhotoPhone screens={screenshots} flush className="mx-auto w-[300px] sm:w-[380px] lg:-mb-12" />

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
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-border flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">Why Hisaabi?</h2>
            <div className="space-y-3 text-base text-muted-foreground">
              <p>Hisaabi is built to help Muslims stay consistent in their faith. Whether it's praying on time, reciting the Quran daily, or building a habit of Dhikr.</p>
              <ul className="space-y-3 mt-5">
                {[
                  "All-in-one unified experience",
                  "Habit tracking and visual streaks",
                  "Modern AI Islamic Assistant",
                  "Built for communities and families"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground font-medium text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative w-full h-52 md:h-[280px]"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-3 scale-105" />
            <div className="absolute inset-0 bg-white rounded-2xl overflow-hidden flex items-center justify-center border border-border shadow-lg">
               <img src="/assets/app-icon.png" alt="App Logo" className="w-2/5 object-contain" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Real photo of a hand holding a phone (app screenshot composited on the screen) in a soft green arch with real leaf photos.
// Several screens crossfade; one stays still.
const PhotoPhone = ({ screens, flush = false, className = "" }: { screens: string[]; flush?: boolean; className?: string }) => {
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    if (screens.length < 2) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % screens.length), 3000);
    return () => clearInterval(t);
  }, [screens.length]);

  // flush: the wrist runs off the bottom of its card; otherwise it fades out.
  const fade = flush ? undefined : "linear-gradient(to bottom, #000 80%, transparent 100%)";

  return (
    <div className={`relative aspect-[1181/1000] ${className}`}>
      <div className="absolute inset-[8%] rounded-full bg-primary/20 blur-3xl" />
      <img src="/assets/leaf-left.webp" alt="" aria-hidden className="absolute -left-[4%] bottom-[8%] w-[30%] pointer-events-none" style={{ WebkitMaskImage: "radial-gradient(ellipse closest-side at 50% 50%, #000 55%, transparent 100%)", maskImage: "radial-gradient(ellipse closest-side at 50% 50%, #000 55%, transparent 100%)" }} />
      <img src="/assets/leaf-right.webp" alt="" aria-hidden className="absolute -right-[2%] top-[30%] w-[26%] pointer-events-none" style={{ WebkitMaskImage: "radial-gradient(ellipse closest-side at 50% 50%, #000 55%, transparent 100%)", maskImage: "radial-gradient(ellipse closest-side at 50% 50%, #000 55%, transparent 100%)" }} />
      {screens.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Hisaabi app in hand"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${flush ? "max-lg:[-webkit-mask-image:linear-gradient(to_bottom,#000_80%,transparent)] max-lg:[mask-image:linear-gradient(to_bottom,#000_80%,transparent)]" : ""}`}
          style={{ opacity: i === idx ? 1 : 0, WebkitMaskImage: fade, maskImage: fade }}
        />
      ))}
    </div>
  );
};

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
            <PhotoPhone screens={["/assets/hand/ph9.webp"]} className="mx-auto w-full max-w-[460px]" />
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

const Download = () => {
  return (
    <section id="download" className="py-20 relative bg-slate-50 border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <img src="/assets/app-icon.png" alt="Hisaabi Icon" className="w-20 h-20 rounded-2xl shadow-lg mb-6" />
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">Download Hisaabi</h2>
          <p className="text-muted-foreground mb-6">Available on iOS and Android.</p>
          
          <div className="flex items-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-sm text-muted-foreground ml-2">Rated on App Store & Play Store</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://apps.apple.com/in/app/hisaabi/id1620752442" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
              <img src="/assets/appstore.png" alt="Download on the App Store" className="h-14 w-auto object-contain" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=app.hisaabi" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
              <img src="/assets/playstore.png" alt="Get it on Google Play" className="h-14 w-auto object-contain" />
            </a>
            <a href="https://hisaabi.faith" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
              <div className="h-14 px-5 rounded-xl bg-black border border-slate-500 text-white flex items-center gap-3 text-left">
                <Globe className="h-8 w-8" />
                <div className="leading-tight">
                  <div className="text-[11px] tracking-wide">Open the</div>
                  <div className="text-xl font-semibold">Web Edition</div>
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left Side */}
          <div>
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-3">
                <img src="/assets/app-icon.png" alt="Hisaabi Logo" className="w-10 h-10 rounded-lg" />
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">Hisaabi</h3>
                  <p className="text-xs text-slate-400">Built by D4DX Innovations LLP</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Making Hisaabi guidance accessible through a clear, practical app experience for families, students, and community volunteers.
            </p>
            {/* <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div> */}
          </div>

          {/* Right Side */}
          <div className="md:pl-12 lg:pl-24">
            <h3 className="text-lg font-bold text-white mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-slate-400">
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
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
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
