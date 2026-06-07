import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, Mail, MapPin, Linkedin, Github, Instagram, Twitter,
  ChevronRight, Calendar, GraduationCap, 
  Briefcase, Cpu, Award, Heart, MessageSquare,
  Menu, X, ExternalLink, ArrowUpRight,
  Code, Brain, Terminal, Layers, Sparkles, GitBranch, Puzzle,
  Palette, Video, FileText, Download,
  Zap, Lock, Database,
  Camera, BookOpen, Users
} from 'lucide-react';
import profilePic from './profile.jpg';
import edutrackMockup from './edutrack_mockup.png';
import { AIChat } from './components/AIChat';
import { CV_DATA } from './constants';


export default function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => item.id);
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
    setMobileMenuOpen(false);
    
    // Tiny timeout to let the mobile menu close animation start and layout adjust
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 150);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'personal', label: 'Personal' },
    { id: 'education', label: 'Education' },
    { id: 'clubs', label: 'Clubs' },
    { id: 'skills', label: 'Skills' },
    { id: 'interests', label: 'Interests' },
    { id: 'resume', label: 'Resume' },
    { id: 'edutrack', label: 'EduTrack SIT' },
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
                  alt="Satya Prakash" 
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
                CSE AI & ML Engineering Student
              </p>
              <p className="font-display italic text-white/50 text-xl font-light">
                Building Intelligent Systems through AI, ML<br />& Software Development
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-4 min-w-[260px] text-sm text-white/70"
            >
              <ContactItem icon={<Phone size={14} />} text="+91 7061800527" href="tel:+91 7061800527" />
              <ContactItem icon={<Mail size={14} />} text="satya2006prakash@gmail.com" href="mailto:satya2006prakash@gmail.com" />
              <ContactItem icon={<MapPin size={14} />} text="Tumkur, Karnataka, India" />
              <div className="flex gap-4 mt-2">
                <a href="https://www.linkedin.com/in/satya-prakash-2b837a366?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="p-2 border border-gold/30 rounded-full hover:bg-gold/10 transition-colors text-gold">
                  <Linkedin size={18} />
                </a>
                <a href="https://github.com/satya2006prakash" target="_blank" rel="noopener noreferrer" className="p-2 border border-gold/30 rounded-full hover:bg-gold/10 transition-colors text-gold">
                  <Github size={18} />
                </a>
                <a href="https://www.instagram.com/niku_modi.official?igsh=MmdrY2Q4eGN1MnV4" target="_blank" rel="noopener noreferrer" className="p-2 border border-gold/30 rounded-full hover:bg-gold/10 transition-colors text-gold">
                  <Instagram size={18} />
                </a>
                <a href="https://x.com/niku_modi_2006" target="_blank" rel="noopener noreferrer" className="p-2 border border-gold/30 rounded-full hover:bg-gold/10 transition-colors text-gold">
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
          <div className="flex items-center gap-2 lg:gap-6">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollTo('about')}>
              <div className="w-8 h-8 bg-gold rounded flex items-center justify-center text-navy font-display font-black text-xs transition-all group-hover:bg-white group-hover:scale-110">
                SP
              </div>
              <span className="text-white font-display font-bold tracking-widest text-sm hidden sm:block">SATYA PRAKASH</span>
            </div>
            
            <div className="hidden lg:flex gap-1 xl:gap-2">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollTo(item.id)} 
                  className={`px-2 xl:px-3 py-2 text-[11px] font-semibold tracking-[0.11em] xl:tracking-[0.14em] uppercase transition-all relative whitespace-nowrap ${activeTab === item.id ? 'text-gold' : 'text-white/50 hover:text-gold-light'}`}
                >
                  {item.label}
                  {activeTab === item.id && (
                    <motion.div layoutId="nav-pill" className="absolute bottom-0 left-2 right-2 h-0.5 bg-gold" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <button 
            className="lg:hidden text-gold p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex items-center gap-4 shrink-0">
             <a 
               href="mailto:satya2006prakash@gmail.com?subject=Hiring Inquiry for Satya Prakash"
               className="text-[10px] font-bold tracking-widest uppercase border border-gold/30 px-3 py-1.5 rounded text-gold hover:bg-gold hover:text-navy transition-all animate-pulse whitespace-nowrap"
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
              className="lg:hidden bg-navy-dark border-t border-white/10"
            >
              {navItems.map((item) => (
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
            className="relative bg-white p-5 sm:p-8 md:p-12 border border-gold/20 border-l-4 border-l-gold shadow-sm"
          >
            <div className="absolute top-4 left-6 text-7xl font-display text-gold-pale opacity-30 select-none">"</div>
            <p className="font-display text-xl md:text-2xl italic text-navy-mid leading-relaxed relative z-10">
              I am a first-year Computer Science and Engineering student with a specialization in Artificial Intelligence and Machine Learning (AI & ML). I have a strong interest in Artificial Intelligence, Machine Learning, and Software Development, and I am passionate about learning how intelligent systems work and how technology can be used to solve real-world problems. My areas of interest include Python programming, Java, and C programming. I am actively building my technical skills through academic projects, coding practice, and online learning platforms. I enjoy participating in hackathons, technical events, and collaborative activities that help me enhance my problem-solving, teamwork, leadership, and communication skills. I am eager to explore emerging technologies and continuously expand my knowledge to develop innovative and impactful solutions in the field of AI and Machine Learning.
            </p>
          </motion.div>
        </Section>

        {/* --- PERSONAL INFO --- */}
        <Section id="personal" title="Personal" label="Background">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <InfoCard label="Full Name" value="Satya Prakash" />
            <InfoCard label="Date of Birth" value="17 July 2006" />
            <InfoCard label="Gender" value="Male" />
            <InfoCard label="Nationality" value="Indian" />
            <InfoCard label="Languages" value="English, Hindi, Balake Kannada" />
            <InfoCard label="Status" value="Open to Opportunities" />
          </div>
        </Section>

        {/* --- EDUCATION --- */}
        <Section id="education" title="Education" label="Academic Journey">
          <div className="relative pl-8 border-l border-gold/30 space-y-12">
            {/* SIT Tumkur */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative bg-white p-6 rounded-sm border border-gold/20 shadow-sm">
              <div className="absolute -left-[41.5px] top-6 w-3.5 h-3.5 rounded-full bg-gold ring-4 ring-cream" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="font-display text-2xl font-semibold text-navy-dark">Bachelor Of Engineering — C.S.E (AI & ML)</h3>
                <span className="bg-navy text-gold text-[10px] font-bold px-3 py-1 rounded tracking-tighter uppercase whitespace-nowrap mt-2 md:mt-0">2025 – 2029</span>
              </div>
              <p className="text-gold font-medium mb-4 flex items-center gap-2">
                <GraduationCap size={16} />
                <a href="https://sit.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1 group/edu">
                  Siddaganga Institute of Technology, Tumkur, Karnataka <ExternalLink size={12} className="opacity-50 group-hover/edu:opacity-100 transition-opacity" />
                </a> 
                <span className="text-navy/40 px-1">|</span> <span className="text-navy">CGPA: 7.9 / 10</span>
              </p>
              <p className="text-navy/70 text-sm leading-relaxed">
                Focusing on Artificial Intelligence, Machine Learning, and core Software Engineering principles. Actively building technical skills through academic coding, algorithm design, and exploring emerging intelligent technologies.
              </p>
            </motion.div>

            {/* Adarsh School */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative bg-white p-6 rounded-sm border border-gold/20 shadow-sm">
              <div className="absolute -left-[41.5px] top-6 w-3.5 h-3.5 rounded-full bg-gold ring-4 ring-cream" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="font-display text-2xl font-semibold text-navy-dark">School (12th) — Science (PCM)</h3>
                <span className="bg-navy text-gold text-[10px] font-bold px-3 py-1 rounded tracking-tighter uppercase whitespace-nowrap mt-2 md:mt-0">2023 – 2025</span>
              </div>
              <p className="text-gold font-medium mb-4 flex items-center gap-2">
                <GraduationCap size={16} />
                <a href="https://adarshvidyalaya.org.in/Home-Page" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1 group/edu">
                  Adarsh +2 Uchcha Vidyalaya, Koderma, Jharkhand <ExternalLink size={12} className="opacity-50 group-hover/edu:opacity-100 transition-opacity" />
                </a> 
                <span className="text-navy/40 px-1">|</span> <span className="text-navy">70% (CBSE Board)</span>
              </p>
              <p className="text-navy/70 text-sm leading-relaxed">
                Built a strong academic foundation in Physics, Chemistry, Mathematics while improving analytical thinking, discipline, and problem-solving skills.
              </p>
            </motion.div>

            {/* St. Clare's */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative bg-white p-6 rounded-sm border border-gold/20 shadow-sm">
              <div className="absolute -left-[41.5px] top-6 w-3.5 h-3.5 rounded-full bg-gold ring-4 ring-cream" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="font-display text-2xl font-semibold text-navy-dark">School (10th)</h3>
                <span className="bg-navy text-gold text-[10px] font-bold px-3 py-1 rounded tracking-tighter uppercase whitespace-nowrap mt-2 md:mt-0">2011 – 2023</span>
              </div>
              <p className="text-gold font-medium mb-4 flex items-center gap-2">
                <GraduationCap size={16} />
                <a href="https://www.stclaresschoollokai.com/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1 group/edu">
                  St. Clare's School, Koderma, Jharkhand <ExternalLink size={12} className="opacity-50 group-hover/edu:opacity-100 transition-opacity" />
                </a> 
                <span className="text-navy/40 px-1">|</span> <span className="text-navy">85% (ICSE Board)</span>
              </p>
              <p className="text-navy/70 text-sm leading-relaxed">
                Provided a strong academic foundation while also encouraging participation in extracurricular activities, teamwork, and continuous learning.
              </p>
            </motion.div>
          </div>
        </Section>

        {/* --- CLUBS --- */}
        <Section id="clubs" title="Clubs & Activities" label="College Life">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CV_DATA.clubs.map((club, index) => {
              let IconComponent = BookOpen;
              if (club.icon === 'camera') IconComponent = Camera;
              if (club.icon === 'users') IconComponent = Users;
              if (club.icon === 'instagram') IconComponent = Instagram;
              
              return (
                <motion.div
                  key={club.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 sm:p-8 border border-gold/20 rounded-sm hover:border-gold shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group relative"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <ClubLogo logoUrl={club.logo} fallbackIcon={<IconComponent size={24} />} />
                      <span className="text-[9px] font-black tracking-widest uppercase py-1 px-2 border border-gold/30 rounded text-gold bg-gold/5 whitespace-nowrap">
                        {club.type}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-navy-dark mb-1 group-hover:text-gold transition-colors">
                      {club.name}
                    </h3>
                    
                    <p className="text-navy font-semibold text-xs mb-4 italic tracking-wide">
                      {club.role}
                    </p>

                    <p className="text-navy/70 text-sm leading-relaxed mb-6">
                      {club.description}
                    </p>
                  </div>

                  {club.instagram && (
                    <div className="pt-4 border-t border-gold/10 mt-auto">
                      <a 
                        href={club.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase text-navy border-b border-transparent hover:border-gold hover:text-gold transition-all w-fit"
                      >
                        <Instagram size={14} className="text-gold" /> Instagram
                      </a>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </Section>

        {/* --- SKILLS --- */}
        <Section id="skills" title="Skills" label="Expertise">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard icon={<PythonLogo />} name="Python Programming" />
            <SkillCard icon={<BrainLogo />} name="Machine Learning" />
            <SkillCard icon={<JavaLogo />} name="Java" />
            <SkillCard icon={<CLogo />} name="C Programming" />
            <SkillCard icon={<PaletteLogo />} name="Graphic Design" />
            <SkillCard icon={<VideoEditingLogo />} name="Video Editing" />
            <SkillCard icon={<VibeCodingLogo />} name="Vibe Coding" />
            <SkillCard icon={<ProblemSolvingLogo />} name="Problem Solving" />
          </div>
        </Section>

        {/* --- INTERESTS --- */}
        <Section id="interests" title="Passion" label="Interests">
          <div className="flex flex-wrap gap-3">
            <span className="px-6 py-3 bg-white border border-gold/20 text-navy-dark text-sm font-medium hover:bg-navy hover:text-gold transition-all cursor-default shadow-sm">Poster Designing</span>
            <span className="px-6 py-3 bg-white border border-gold/20 text-navy-dark text-sm font-medium hover:bg-navy hover:text-gold transition-all cursor-default shadow-sm">Video Editing</span>
            <span className="px-6 py-3 bg-white border border-gold/20 text-navy-dark text-sm font-medium hover:bg-navy hover:text-gold transition-all cursor-default shadow-sm">Photography</span>
            <span className="px-6 py-3 bg-white border border-gold/20 text-navy-dark text-sm font-medium hover:bg-navy hover:text-gold transition-all cursor-default shadow-sm">Videography</span>
            <span className="px-6 py-3 bg-white border border-gold/20 text-navy-dark text-sm font-medium hover:bg-navy hover:text-gold transition-all cursor-default shadow-sm">Canva</span>
            <span className="px-6 py-3 bg-white border border-gold/20 text-navy-dark text-sm font-medium hover:bg-navy hover:text-gold transition-all cursor-default shadow-sm">Thumbnails</span>
            <span className="px-6 py-3 bg-white border border-gold/20 text-navy-dark text-sm font-medium hover:bg-navy hover:text-gold transition-all cursor-default shadow-sm">Adobe Photoshop</span>
            <span className="px-6 py-3 bg-white border border-gold/20 text-navy-dark text-sm font-medium hover:bg-navy hover:text-gold transition-all cursor-default shadow-sm">Artificial Intelligence</span>
            <span className="px-6 py-3 bg-white border border-gold/20 text-navy-dark text-sm font-medium hover:bg-navy hover:text-gold transition-all cursor-default shadow-sm">Tech Innovation</span>
            <span className="px-6 py-3 bg-white border border-gold/20 text-navy-dark text-sm font-medium hover:bg-navy hover:text-gold transition-all cursor-default shadow-sm">Hackathons</span>
          </div>
        </Section>

        {/* --- RESUME --- */}
        <Section id="resume" title="Resume" label="Document">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 border border-gold/20 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold shrink-0">
                <FileText size={32} />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-navy-dark mb-2">Satya Prakash's Resume</h3>
                <p className="text-navy/70 text-sm">Download my latest resume to see my qualifications, experience, and skills in detail.</p>
              </div>
            </div>
            
            <a 
              href="/Satya_Prakash_Resume.pdf" 
              download="Satya_Prakash_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-navy text-gold font-bold tracking-widest uppercase text-sm border border-navy hover:bg-transparent hover:text-navy transition-all shrink-0"
            >
              <Download size={18} />
              Download PDF
            </a>
          </motion.div>
        </Section>
        {/* --- EDUTRACK SIT --- */}
        <Section id="edutrack" title="EduTrack SIT" label="Featured Project">
          <div className="bg-white border border-gold/20 shadow-xl overflow-hidden relative">
            {/* Glowing Accent Bar */}
            <div className="h-2 bg-gradient-to-r from-gold via-yellow-500 to-amber-600" />
            
            <div className="p-5 sm:p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Text Content */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-gold/10 text-gold text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wider uppercase border border-gold/20 flex items-center gap-1.5">
                      <Sparkles size={10} className="animate-pulse" /> First-Year CSE Highlight
                    </span>
                    <span className="bg-navy text-gold text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wider uppercase flex items-center gap-1.5">
                      <Zap size={10} /> Built in 24 Hours
                    </span>
                  </div>

                  <div className="flex items-center gap-4 pb-4 border-b border-navy/5">
                    <ProjectLogo logoUrl="/edutrack_logo.png" fallbackIcon={<GraduationCap size={28} />} />
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl font-black text-navy-dark tracking-tight leading-none mb-1">
                        EduTrack SIT
                      </h3>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-gold">
                        Academic Calculator & Tracker
                      </p>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-extrabold text-navy-dark leading-tight">
                    Smart Academic Tracking for SIT Students
                  </h3>

                  <p className="text-navy/80 text-base leading-relaxed">
                    As a first-year CSE (AI & ML) student at SIT Tumkur, I noticed that students spent too much time manually calculating attendance percentages and estimating marks targets. To solve this, I designed and deployed <strong>EduTrack SIT</strong> — a modern academic tracking tool, built completely using a <em>“vibe coding”</em> workflow with a live cloud database in a single day.
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-navy-dark">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { icon: "📌", text: "Subject-wise Attendance Tracking" },
                        { icon: "📈", text: "CIE Marks Monitoring" },
                        { icon: "🎯", text: "SEE Target Prediction" },
                        { icon: "🧮", text: "SGPA Estimation Dashboard" },
                        { icon: "🔐", text: "Secure Authentication (Supabase Auth)" },
                        { icon: "🗄️", text: "Cloud Database (Supabase DB)" },
                        { icon: "📱", text: "Fully Responsive Mobile-First UI" },
                        { icon: "💬", text: "Feedback & Support System" }
                      ].map((feat, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm text-navy/70">
                          <span className="shrink-0">{feat.icon}</span>
                          <span>{feat.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-navy-dark">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: "HTML5 & Vanilla CSS", icon: "🌐" },
                        { name: "JavaScript (ES6+)", icon: "⚡" },
                        { name: "Supabase (Auth & Database)", icon: "🗄️" },
                        { name: "Vercel (Deployment)", icon: "🚀" },
                        { name: "GitHub (Version Control)", icon: "🐙" }
                      ].map((tech) => (
                        <span key={tech.name} className="text-[10px] font-bold tracking-wider uppercase py-1.5 px-3 border border-gold/30 rounded-full text-gold bg-gold/5 flex items-center gap-1.5">
                          <span>{tech.icon}</span> {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-wrap gap-4">
                    <a 
                      href="https://edu-track-sit.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-gold font-bold tracking-widest uppercase text-xs border border-navy hover:bg-transparent hover:text-navy transition-all"
                    >
                      Visit Live Website <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Dashboard Image & Live Stats */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Mockup Frame */}
                  <div className="border border-gold/20 rounded-xl overflow-hidden shadow-lg bg-navy/5 p-2">
                    <div className="flex items-center gap-1.5 px-2 pb-2 border-b border-navy/10">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      <span className="text-[10px] text-navy/40 font-mono ml-2">edu-track-sit.vercel.app</span>
                    </div>
                    <img 
                      src={edutrackMockup} 
                      alt="EduTrack SIT Dashboard Mockup" 
                      className="w-full rounded-lg object-cover border border-navy/5"
                    />
                  </div>

                  {/* Metrics Panel */}
                  <div className="bg-navy text-white p-4 sm:p-6 rounded-xl border border-gold/20 shadow-md">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-4 text-center border-b border-gold/20 pb-2">
                      First 6-Hour Launch Metrics
                    </h4>
                    <div className="grid grid-cols-3 gap-1 sm:gap-2 text-center">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-2">
                          <Zap size={18} />
                        </div>
                        <span className="text-lg font-black text-white">1,300+</span>
                        <span className="text-[9px] text-white/50 uppercase tracking-tight">API Requests</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-2">
                          <Lock size={18} />
                        </div>
                        <span className="text-lg font-black text-white">430+</span>
                        <span className="text-[9px] text-white/50 uppercase tracking-tight">Auth Requests</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-2">
                          <Database size={18} />
                        </div>
                        <span className="text-lg font-black text-white">880+</span>
                        <span className="text-[9px] text-white/50 uppercase tracking-tight">DB Requests</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
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
                className="bg-white group overflow-hidden border border-gold/20 relative shadow-sm hover:shadow-xl transition-all flex flex-col justify-between h-full"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gold transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                <div className="p-6 sm:p-8 flex flex-col justify-between h-full flex-1">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="font-display text-4xl font-black text-gold/70">{proj.id}</span>
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
                  </div>
                  
                  <div className="flex flex-wrap gap-x-4 gap-y-2 pt-4 border-t border-gold/10 mt-auto">
                    {proj.link && (
                      <a 
                        href={proj.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase text-navy border-b-2 border-gold pb-1 hover:text-gold transition-colors"
                      >
                        View Project <ChevronRight size={14} />
                      </a>
                    )}
                    {proj.links && proj.links.map((subLink, idx) => (
                      <a 
                        key={idx}
                        href={subLink.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase text-navy border-b-2 border-gold pb-1 hover:text-gold transition-colors"
                      >
                        {subLink.label} <ChevronRight size={14} />
                      </a>
                    ))}
                    {!proj.link && (!proj.links || proj.links.length === 0) && (
                      <button className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-navy/40 border-b-2 border-transparent pb-1 cursor-default">
                        In Progress
                      </button>
                    )}
                  </div>
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
             <a href="https://www.linkedin.com/in/satya-prakash-2b837a366?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors"><Linkedin size={20} /></a>
             <a href="https://github.com/satya2006prakash" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors"><Github size={20} /></a>
             <a href="https://www.instagram.com/niku_modi.official?igsh=MmdrY2Q4eGN1MnV4" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
             <a href="https://x.com/niku_modi_2006" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors"><Twitter size={20} /></a>
             <a href="mailto:satya2006prakash@gmail.com" className="hover:text-gold transition-colors"><Mail size={20} /></a>
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

function ClubLogo({ logoUrl, fallbackIcon }: { logoUrl?: string, fallbackIcon: React.ReactNode }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (logoUrl && !imageError) {
    return (
      <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/20 flex items-center justify-center bg-white group-hover:border-gold transition-colors relative shrink-0">
        <img 
          src={logoUrl} 
          alt="Club Logo" 
          className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-gold">
            {fallbackIcon}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-navy group-hover:text-gold transition-colors shrink-0">
      {fallbackIcon}
    </div>
  );
}

function ProjectLogo({ logoUrl, fallbackIcon }: { logoUrl?: string, fallbackIcon: React.ReactNode }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (logoUrl && !imageError) {
    return (
      <div className="w-14 h-14 rounded-2xl overflow-hidden border border-gold/20 flex items-center justify-center bg-white shadow-md relative shrink-0">
        <img 
          src={logoUrl} 
          alt="Project Logo" 
          className={`w-full h-full object-contain p-1 transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-navy to-navy-dark text-gold">
            {fallbackIcon}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-navy to-navy-dark flex items-center justify-center text-gold border-2 border-gold/40 shadow-md shrink-0">
      {fallbackIcon}
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

const PythonLogo = () => (
  <svg viewBox="0 0 110 110" className="w-6 h-6 select-none shrink-0">
    <path d="M51.7 2.1c-15.6 0-24.6 1.7-27.8 4.9C20 10.9 20 20.3 20 28.5h32.2v4.4H13.6C5.5 32.9 2.1 36.3 2.1 44.4s0 19.3 3.3 22.5c3.2 3.2 11.6 3.3 27.8 3.3v-8.8c0-8.2 4.4-12.6 12.6-12.6h32.2c8.2 0 12.6-4.4 12.6-12.6V17c0-8.2-3.4-11.6-11.6-11.6H51.7zm-14.7 9.8c2.4 0 4.4 2 4.4 4.4s-2 4.4-4.4 4.4-4.4-2-4.4-4.4 2-4.4 4.4-4.4z" fill="#3776AB" />
    <path d="M58.3 107.9c15.6 0 24.6-1.7 27.8-4.9 3.9-3.9 3.9-13.3 3.9-21.5H57.8v-4.4h38.6c8.2 0 11.6-3.4 11.6-11.6s0-19.3-3.3-22.5c-3.2-3.2-11.6-3.3-27.8-3.3v8.8c0 8.2-4.4 12.6-12.6 12.6H42.1c-8.2 0-12.6 4.4-12.6 12.6v19.7c0 8.2 3.4 11.6 11.6 11.6h27.2zm14.7-9.8c2.4 0 4.4-2 4.4-4.4s-2-4.4-4.4-4.4-4.4 2-4.4 4.4 2 4.4 4.4 4.4z" fill="#FFE873" />
  </svg>
);

const JavaLogo = () => (
  <svg viewBox="0 0 128 128" className="w-6 h-6 select-none shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/>
    <path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/>
    <path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"/>
    <path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"/>
    <path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/>
  </svg>
);

const CLogo = () => (
  <svg viewBox="0 0 128 128" className="w-6 h-6 select-none shrink-0">
    <path fill="#555555" d="M117.5 33.5l-51-29.5c-1.6-.9-3.5-.9-5.1 0l-51 29.5c-1.6.9-2.6 2.6-2.6 4.5v59c0 1.9 1 3.6 2.6 4.5l51 29.5c.8.5 1.7.7 2.5.7s1.8-.2 2.5-.7l51-29.5c1.6-.9 2.6-2.6 2.6-4.5v-59c.1-1.9-.9-3.6-2.5-4.5z"/>
    <path fill="#00599C" d="M111.5 37l-45-26c-.9-.5-2.1-.5-3 0l-45 26c-.9.5-1.5 1.5-1.5 2.6v52.1c0 1.1.6 2.1 1.5 2.6l45 26c.5.3 1 .4 1.5.4s1-.1 1.5-.4l45-26c.9-.5 1.5-1.5 1.5-2.6V39.6c0-1.1-.6-2.1-1.5-2.6z"/>
    <path fill="#FFFFFF" d="M68.5 35c-14.7 0-26.6 11.9-26.6 26.6v4.8c0 14.7 11.9 26.6 26.6 26.6 9.4 0 17.6-4.9 22.3-12.2l-10-5.8c-2.8 4.8-8.1 8-12.3 8-9.2 0-16.6-7.4-16.6-16.6v-4.8c0-9.2 7.4-16.6 16.6-16.6 4.2 0 9.5 3.2 12.3 8l10-5.8c-4.7-7.3-12.9-12.2-22.3-12.2z"/>
  </svg>
);

const BrainLogo = () => (
  <svg viewBox="0 0 128 128" className="w-6 h-6 select-none shrink-0">
    <path fill="#EE4C2C" d="M64 4L14.3 90.1 64 124l49.7-33.9z"/>
    <path fill="#343434" opacity="0.15" d="M64 4v120l49.7-33.9z"/>
    <path fill="#FFFFFF" d="M64 33.7L33.9 85.8 64 106.3l30.1-20.5z"/>
  </svg>
);

const PaletteLogo = () => (
  <svg viewBox="0 0 128 128" className="w-6 h-6 select-none shrink-0">
    <rect width="128" height="128" rx="24" fill="#001E36"/>
    <rect width="112" height="112" x="8" y="8" rx="16" fill="none" stroke="#00C8FF" strokeWidth="8"/>
    <text x="32" y="86" fill="#00C8FF" fontSize="54" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="bold">P</text>
    <text x="68" y="86" fill="#00C8FF" fontSize="54" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="bold">s</text>
  </svg>
);

const VideoEditingLogo = () => (
  <svg viewBox="0 0 128 128" className="w-6 h-6 select-none shrink-0">
    <rect width="128" height="128" rx="24" fill="#18002E"/>
    <rect width="112" height="112" x="8" y="8" rx="16" fill="none" stroke="#E4A5FF" strokeWidth="8"/>
    <text x="32" y="86" fill="#E4A5FF" fontSize="54" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="bold">P</text>
    <text x="68" y="86" fill="#E4A5FF" fontSize="54" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="bold">r</text>
  </svg>
);

const VibeCodingLogo = () => (
  <svg viewBox="0 0 256 256" className="w-6 h-6 select-none shrink-0" fill="none">
    <rect width="256" height="256" rx="56" fill="#0E0E10"/>
    <path d="M50 85h156v35H50z" fill="#38BDF8"/>
    <path d="M50 145h96v35H50z" fill="#38BDF8"/>
  </svg>
);

const ProblemSolvingLogo = () => (
  <svg role="img" viewBox="0 0 24 24" className="w-6 h-6 select-none shrink-0" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="leetcodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBBF24" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" fill="url(#leetcodeGrad)"/>
  </svg>
);

function SkillCard({ icon, name }: { icon: React.ReactNode, name: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white p-6 border border-gold/20 rounded shadow-sm flex flex-col items-center text-center group hover:border-gold/60 transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center mb-4 border border-gold/10 group-hover:scale-110 group-hover:shadow-md transition-all duration-300 shrink-0">
        {icon}
      </div>
      <h3 className="font-display font-bold text-lg text-navy-dark">{name}</h3>
    </motion.div>
  );
}

function ProjectCard({ id, name, tech, description }: { id: string, name: string, tech: string[], description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white group overflow-hidden border border-gold/20 relative shadow-sm hover:shadow-xl transition-all"
    >
      <div className="absolute top-0 left-0 w-1.5 h-full bg-gold transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <span className="font-display text-4xl font-black text-gold-pale/50">{id}</span>
          <ArrowUpRight className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <h3 className="font-display text-2xl font-bold text-navy mb-2 leading-tight">{name}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map(t => (
            <span key={t} className="text-[9px] font-black tracking-widest uppercase py-1 px-2 border border-gold/30 rounded text-gold bg-gold/5">
              {t}
            </span>
          ))}
        </div>
        <p className="text-navy/70 text-sm leading-relaxed mb-6">
          {description}
        </p>
        <button className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-navy border-b-2 border-gold pb-1 hover:text-gold transition-colors">
          View Project <ChevronRight size={14} />
        </button>
      </div>
    </motion.div>
  );
}

