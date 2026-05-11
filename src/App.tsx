import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, Mail, MapPin, Linkedin, Github, Instagram, Twitter,
  ChevronRight, Calendar, GraduationCap, 
  Briefcase, Cpu, Award, Heart, MessageSquare,
  Menu, X, ExternalLink, ArrowUpRight,
  Code, Brain, Terminal, Layers, Sparkles, GitBranch, Puzzle,
  Palette, Video
} from 'lucide-react';
import { CV_DATA } from './constants';
import profilePic from './profile.jpg';
import { AIChat } from './components/AIChat';

export default function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['about', 'personal', 'education', 'skills', 'interests', 'projects'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveTab(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'personal', label: 'Personal' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'interests', label: 'Interests' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <div className="min-h-screen bg-cream selection:bg-gold/30 scroll-smooth">
      
      {/* --- HERO SECTION --- */}
      <header className="relative bg-navy-dark text-white overflow-hidden border-t-4 border-gold">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-gold rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] left-[5%] w-64 h-64 bg-gold rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative shrink-0"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-4 border-gold shadow-2xl relative z-10 group">
                <img 
                  src={profilePic} 
                  alt={CV_DATA.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors" />
              </div>
              {/* Decorative Frame Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4 border-gold opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-4 border-l-4 border-gold opacity-50" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 text-center md:text-left"
            >
              <h1 className="font-display text-4xl md:text-7xl font-light tracking-tight leading-none mb-4">
                Hello,<br />
                <span className="text-gold-light italic font-bold">Satya Prakash</span>
              </h1>
              <p className="font-body text-gold text-sm md:text-base font-semibold tracking-[0.25em] uppercase mb-2">
                {CV_DATA.title}
              </p>
              <p className="font-display italic text-white/50 text-xl font-light">
                {CV_DATA.tagline}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-4 min-w-[260px] text-sm text-white/70"
            >
              <ContactItem icon={<Phone size={14} />} text={CV_DATA.contact.phone} href={`tel:${CV_DATA.contact.phone}`} />
              <ContactItem icon={<Mail size={14} />} text={CV_DATA.contact.email} href={`mailto:${CV_DATA.contact.email}`} />
              <ContactItem icon={<MapPin size={14} />} text={CV_DATA.contact.location} />
              <div className="flex gap-4 mt-2">
                <a href={CV_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 border border-gold/30 rounded-full hover:bg-gold/10 transition-colors text-gold">
                  <Linkedin size={18} />
                </a>
                <a href={CV_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="p-2 border border-gold/30 rounded-full hover:bg-gold/10 transition-colors text-gold">
                  <Github size={18} />
                </a>
                <a href={CV_DATA.contact.instagram} target="_blank" rel="noopener noreferrer" className="p-2 border border-gold/30 rounded-full hover:bg-gold/10 transition-colors text-gold">
                  <Instagram size={18} />
                </a>
                <a href={CV_DATA.contact.x} target="_blank" rel="noopener noreferrer" className="p-2 border border-gold/30 rounded-full hover:bg-gold/10 transition-colors text-gold">
                  <Twitter size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Animated divider line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-0.5 bg-gradient-to-r from-gold via-gold/20 to-transparent max-w-6xl mx-auto"
        />
      </header>

      {/* --- NAVIGATION --- */}
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-navy shadow-xl translate-y-0' : 'bg-navy-dark'}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollTo('about')}>
              <div className="w-8 h-8 bg-gold rounded flex items-center justify-center text-navy font-display font-black text-xs transition-all group-hover:bg-white group-hover:scale-110">
                SP
              </div>
              <span className="text-white font-display font-bold tracking-widest text-sm hidden sm:block">SATYA PRAKASH</span>
            </div>
            
            <div className="hidden md:flex gap-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-2 text-[11px] font-semibold tracking-[0.14em] uppercase transition-all relative ${
                    activeTab === item.id ? 'text-gold' : 'text-white/50 hover:text-gold-light'
                  }`}
                >
                  {item.label}
                  {activeTab === item.id && (
                    <motion.div layoutId="nav-pill" className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <button 
            className="md:hidden text-gold p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex items-center gap-4">
             <a 
               href={`mailto:${CV_DATA.contact.email}?subject=Hiring Inquiry for Satya Prakash`}
               className="text-[10px] font-bold tracking-widest uppercase border border-gold/30 px-3 py-1.5 rounded text-gold hover:bg-gold hover:text-navy transition-all animate-pulse"
             >
                Hire Me
             </a>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-navy-dark border-t border-white/10"
            >
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="w-full text-left px-8 py-4 text-sm font-semibold tracking-widest uppercase text-white/70 border-b border-white/5 hover:bg-gold/10"
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- CONTENT --- */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        
        {/* --- ABOUT --- */}
        <Section id="about" title="About" label="Introduction">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-white p-8 md:p-12 border border-gold/20 border-l-4 border-l-gold shadow-sm"
          >
            <div className="absolute top-4 left-6 text-7xl font-display text-gold-pale opacity-30 select-none">"</div>
            <p className="font-display text-xl md:text-2xl italic text-navy-mid leading-relaxed relative z-10">
              {CV_DATA.about}
            </p>
          </motion.div>
        </Section>

        {/* --- PERSONAL INFO --- */}
        <Section id="personal" title="Personal" label="Background">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <InfoCard label="Full Name" value={CV_DATA.name} />
            <InfoCard label="Date of Birth" value={CV_DATA.personalInfo.dob} />
            <InfoCard label="Gender" value={CV_DATA.personalInfo.gender} />
            <InfoCard label="Nationality" value={CV_DATA.personalInfo.nationality} />
            <InfoCard label="Languages" value={CV_DATA.personalInfo.languages.join(', ')} />
            <InfoCard label="Status" value={CV_DATA.personalInfo.availability} />
          </div>
        </Section>

        {/* --- EDUCATION --- */}
        <Section id="education" title="Education" label="Academic Journey">
          <div className="relative pl-8 border-l border-gold/30 space-y-12">
            {CV_DATA.education.map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-white p-6 rounded-sm border border-gold/20 shadow-sm"
              >
                <div className="absolute -left-[41.5px] top-6 w-3.5 h-3.5 rounded-full bg-gold ring-4 ring-cream" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="font-display text-2xl font-semibold text-navy-dark">{edu.degree}</h3>
                  <span className="bg-navy text-gold text-[10px] font-bold px-3 py-1 rounded tracking-tighter uppercase whitespace-nowrap mt-2 md:mt-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-gold font-medium mb-4 flex items-center gap-2">
                  <GraduationCap size={16} />
                  {edu.link ? (
                    <a href={edu.link} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1 group/edu">
                      {edu.institution} <ExternalLink size={12} className="opacity-50 group-hover/edu:opacity-100 transition-opacity" />
                    </a>
                  ) : edu.institution} 
                  <span className="text-navy/40 px-1">|</span> <span className="text-navy">{edu.score}</span>
                </p>
                <p className="text-navy/70 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* --- SKILLS --- */}
        <Section id="skills" title="Skills" label="Expertise">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CV_DATA.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-6 border border-gold/20 rounded shadow-sm flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-gold-pale flex items-center justify-center text-gold mb-4 group-hover:bg-navy group-hover:text-gold transition-colors">
                  {(() => {
                    const iconName = skill.icon;
                    switch(iconName) {
                      case 'code': return <Code size={24} />;
                      case 'brain': return <Brain size={24} />;
                      case 'terminal': return <Terminal size={24} />;
                      case 'cpu': return <Cpu size={24} />;
                      case 'layers': return <Layers size={24} />;
                      case 'sparkles': return <Sparkles size={24} />;
                      case 'git-branch': return <GitBranch size={24} />;
                      case 'puzzle': return <Puzzle size={24} />;
                      case 'palette': return <Palette size={24} />;
                      case 'video': return <Video size={24} />;
                      default: return <Code size={24} />;
                    }
                  })()}
                </div>
                <h3 className="font-display font-bold text-lg text-navy-dark">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* --- INTERESTS --- */}
        <Section id="interests" title="Passion" label="Interests">
          <div className="flex flex-wrap gap-3">
            {CV_DATA.interests.map((interest, i) => (
              <motion.span
                key={interest}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 bg-white border border-gold/20 text-navy-dark text-sm font-medium hover:bg-navy hover:text-gold transition-all cursor-default shadow-sm"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </Section>

        {/* --- PROJECTS --- */}
        <Section id="projects" title="Projects" label="Portfolio">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CV_DATA.projects.map((proj, i) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white group overflow-hidden border border-gold/20 relative shadow-sm hover:shadow-xl transition-all"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gold transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-display text-4xl font-black text-gold-pale/50">{proj.id}</span>
                    <ArrowUpRight className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy mb-2 leading-tight">{proj.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tech.map(t => (
                      <span key={t} className="text-[9px] font-black tracking-widest uppercase py-1 px-2 border border-gold/30 rounded text-gold bg-gold/5">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-navy/70 text-sm leading-relaxed mb-6">
                    {proj.description}
                  </p>
                  <button className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-navy border-b-2 border-gold pb-1 hover:text-gold transition-colors">
                    View Project <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-navy-dark text-white/40 py-12 px-6 border-t border-gold/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold rounded flex items-center justify-center text-navy font-display font-black text-lg">
                SP
              </div>
              <div>
                <h2 className="font-display text-2xl text-white">Satya Prakash</h2>
                <p className="text-[10px] tracking-widest uppercase text-gold font-semibold">Ready for Innovation</p>
              </div>
            </div>
          </div>
          
          <div className="flex gap-6">
             <a href={CV_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors"><Linkedin size={20} /></a>
             <a href={CV_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors"><Github size={20} /></a>
             <a href={CV_DATA.contact.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
             <a href={CV_DATA.contact.x} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors"><Twitter size={20} /></a>
             <a href={`mailto:${CV_DATA.contact.email}`} className="hover:text-gold transition-colors"><Mail size={20} /></a>
          </div>

          <div className="text-[10px] tracking-widest uppercase text-white/30 text-center md:text-right">
            © 2026 SATYA PRAKASH.<br />ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>

      {/* --- AI ASSISTANT --- */}
      <AIChat />
    </div>
  );
}

function ContactItem({ icon, text, href }: { icon: React.ReactNode, text: string, href?: string }) {
  const content = (
    <>
      <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold bg-gold/5 shrink-0 transition-all group-hover:bg-gold group-hover:text-navy">
        {icon}
      </div>
      <span className="font-medium tracking-wide">{text}</span>
    </>
  );

  return href ? (
    <a href={href} className="flex items-center gap-3 hover:text-gold active:scale-95 transition-all group w-fit">
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-3 group w-fit">
      {content}
    </div>
  );
}

function Section({ id, title, label, children }: { id: string, title: string, label: string, children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-center gap-6 mb-12">
        <div className="shrink-0 flex flex-col">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold mb-1">{label}</p>
          <h2 className="font-display text-4xl font-light text-navy-dark tracking-tight">{title}</h2>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-gold/40 via-gold/10 to-transparent" />
      </div>
      {children}
    </section>
  );
}

function InfoCard({ label, value }: { label: string, value: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white p-6 border border-gold/10 rounded-sm hover:border-gold/40 transition-colors shadow-sm"
    >
      <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-gold mb-1">{label}</p>
      <p className="text-navy font-semibold">{value}</p>
    </motion.div>
  );
}

