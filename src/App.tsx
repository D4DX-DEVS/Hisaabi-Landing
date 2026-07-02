import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Star
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
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative py-24 flex items-center justify-center overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium text-foreground">Hisaabi v2.0.14 is live</span>
          </div> */}
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-foreground">
            Strengthen Your Faith, <br className="hidden md:block" />
            <span className="text-gradient">One Day at a Time</span>
          </h1>
          
          <p className="mt-4 max-w-2xl text-xl text-muted-foreground mx-auto mb-10 leading-relaxed">
            Hisaabi brings together prayer times, Quran reading, Dhikr, Duas, Qibla, and AI-powered Islamic guidance — in one beautiful app.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://apps.apple.com/in/app/hisaabi/id1620752442" target="_blank" rel="noreferrer" className="w-full sm:w-auto hover:opacity-80 transition-opacity">
              <img src="/assets/appstore.png" alt="Download on the App Store" className="h-14 w-auto object-contain" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=app.hisaabi" target="_blank" rel="noreferrer" className="w-full sm:w-auto hover:opacity-80 transition-opacity">
              <img src="/assets/playstore.png" alt="Get it on Google Play" className="h-14 w-auto object-contain" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="relative rounded-3xl bg-white border border-border p-2 shadow-2xl">
            <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl bg-slate-100 overflow-hidden relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent"></div>
              <img src="/assets/app-icon.png" alt="App Preview" className="w-32 h-32 md:w-48 md:h-48 opacity-80 object-contain drop-shadow-xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
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
    <section id="features" className="py-24 relative z-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Everything You Need</h2>
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
  const [currentIndex, setCurrentIndex] = React.useState(0);
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

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [screenshots.length]);

  return (
    <section id="screenshots" className="py-24 relative z-10 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">App Experience</h2>
          <p className="text-muted-foreground text-lg">A beautiful and intuitive interface designed to help you focus on what matters most.</p>
        </motion.div>
        
        <div className="relative h-[600px] sm:h-[680px] w-full flex justify-center items-center">
          <AnimatePresence>
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 200, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -200, scale: 0.95 }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className="absolute w-[280px] sm:w-[320px] h-[600px] sm:h-[680px] bg-black rounded-[3rem] border-[8px] border-black shadow-2xl overflow-hidden ring-4 ring-slate-200/50"
            >
              {/* Phone Notch/Island */}
              <div className="absolute top-1.5 inset-x-0 flex justify-center z-20">
                <div className="w-20 h-5 bg-black rounded-full"></div>
              </div>
              
              <img
                src={screenshots[currentIndex]}
                className="w-full h-full object-cover"
                alt={`Screenshot ${currentIndex + 1}`}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-border flex flex-col md:flex-row items-center gap-12 shadow-sm">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Why Hisaabi?</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>Hisaabi is built to help Muslims stay consistent in their faith. Whether it's praying on time, reciting the Quran daily, or building a habit of Dhikr.</p>
              <ul className="space-y-4 mt-8">
                {[
                  "All-in-one unified experience",
                  "Habit tracking and visual streaks",
                  "Modern AI Islamic Assistant",
                  "Built for communities and families"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[400px]"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-3 scale-105" />
            <div className="absolute inset-0 bg-white rounded-2xl overflow-hidden flex items-center justify-center border border-border shadow-lg">
               <img src="/assets/app-icon.png" alt="App Logo" className="w-1/2 object-contain" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Support = () => {
  const [copied, setCopied] = useState(false);
  const upiId = "vyapar.176971524101@hdfcbank";

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const bulletPoints = [
    "Be a part of spreading the light of the Deen",
    "Your donation brings Islamic knowledge closer to hearts",
    "Help others stay consistent in faith — Donate today",
    "Support Hisaabi App — A Sadaqah Jariyah opportunity",
    "Empower the Ummah with modern tools",
    "Give today, benefit forever",
    "Build a generation connected to their faith"
  ];

  return (
    <section id="support" className="pt-32 pb-24 relative z-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-foreground tracking-tight">
              Support This <span className="text-primary">Noble Cause</span>
            </h2>
            
            <ul className="space-y-4 mb-12">
              {bulletPoints.map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <span className="text-muted-foreground text-lg">{text}</span>
                </li>
              ))}
            </ul>

            <div className="bg-slate-50 border border-border rounded-2xl p-6 shadow-sm">
              <div className="mb-4">
                <span className="text-xs font-bold text-primary tracking-wider uppercase">Razorpay Payment</span>
                <h3 className="text-xl font-bold text-foreground mt-1">Quick support via gateway</h3>
                <p className="text-sm text-muted-foreground">Use Razorpay for fast and secure online payment.</p>
              </div>
              
              <div className="w-full h-48 rounded-xl mb-4 overflow-hidden relative">
                <img src="/assets/donate.png" alt="Donate Illustration" className="w-full h-full object-cover" />
              </div>
              
              <a href="https://rzp.io/rzp/muhasabah-app" target="_blank" rel="noreferrer" className="block w-full">
                <Button className="w-full h-12 text-lg rounded-xl shadow-md bg-[#2b84ea] hover:bg-[#1a73d9]">
                  <Heart className="mr-2 h-5 w-5" /> Support Now
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="bg-white border border-border rounded-3xl p-8 shadow-xl shadow-slate-200/50">
              <div className="mb-6">
                <span className="text-xs font-bold text-primary tracking-wider uppercase">Direct UPI & Bank</span>
                <h3 className="text-2xl font-bold text-foreground mt-2">Scan QR or transfer directly</h3>
              </div>
              
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm inline-block">
                  <img src="/assets/qr.jpeg" alt="UPI QR Code" className="w-48 h-48 object-contain" />
                </div>
              </div>
              
              <p className="text-center text-sm text-muted-foreground mb-6">
                Open any UPI app, tap <strong>Scan QR</strong>, and donate
              </p>
              
              <div className="flex items-center justify-between bg-slate-50 border border-border rounded-xl p-3 mb-8">
                <span className="text-sm font-medium text-foreground truncate">{upiId}</span>
                <button 
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors ml-4 shrink-0 bg-primary/10 px-3 py-1.5 rounded-lg"
                >
                  {copied ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>

              <div className="space-y-6">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 text-muted-foreground">Account Name</td>
                      <td className="py-3 text-right font-medium text-foreground">D4DX INNOVATIONS LLP</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 text-muted-foreground">TID</td>
                      <td className="py-3 text-right font-medium text-foreground">82182968</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 text-muted-foreground">Bank</td>
                      <td className="py-3 text-right font-medium text-foreground">HDFC SmartHub Vyapar</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 text-muted-foreground">Account number</td>
                      <td className="py-3 text-right font-medium text-foreground">50200102639272</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 text-muted-foreground">IFSC code</td>
                      <td className="py-3 text-right font-medium text-foreground">HDFC0002811</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Branch</td>
                      <td className="py-3 text-right font-medium text-foreground">CIVIL STATION</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
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
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Download Hisaabi</h2>
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
            <a href="https://play.google.com/store/apps/details?id=app.muhasabah" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
              <img src="/assets/playstore.png" alt="Get it on Google Play" className="h-14 w-auto object-contain" />
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
                <a href="mailto:mail@d4dx.co" className="hover:text-white transition-colors">mail@d4dx.co</a>
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
            <a href="https://merchant.razorpay.com/policy/PV2XAkNJXKVU7X/terms" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://merchant.razorpay.com/policy/PV2XAkNJXKVU7X/terms" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Terms of Service</a>
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
        <Hero />
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
