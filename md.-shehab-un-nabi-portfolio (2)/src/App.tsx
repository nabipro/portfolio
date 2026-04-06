import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useInView, useMotionValue } from 'motion/react';
import { toast, Toaster } from 'sonner';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code2, 
  GraduationCap, 
  Briefcase, 
  Trophy, 
  BookOpen, 
  ChevronRight,
  Globe,
  Award,
  Users,
  Send,
  Sparkles,
  Instagram,
  Facebook,
  Terminal,
  Cpu,
  Database,
  Layout,
  Smartphone,
  Server,
  Layers,
  Settings,
  Command,
  Code,
  Download,
  FileText,
  Wrench,
  Palette,
  ShieldCheck,
  Zap,
  Heart,
  ArrowUp
} from 'lucide-react';
import { 
  FaReact, 
  FaNodeJs, 
  FaWordpress, 
  FaPhp,
  FaBluetooth
} from 'react-icons/fa';
import { 
  SiArduino, 
  SiMongodb, 
  SiExpress, 
  SiPython, 
  SiCplusplus, 
  SiMysql, 
  SiBootstrap, 
  SiTailwindcss, 
  SiVite, 
  SiFramer, 
  SiFirebase, 
  SiElementor,
  SiCisco
} from 'react-icons/si';
import { CV_DATA } from './constants';

const TechStackIcons = ({ tags, color = "purple" }: { tags: string[], color?: string }) => {
  const getIcon = (tag: string) => {
    const lowerTag = tag.toLowerCase();
    if (lowerTag.includes('react')) return <span className="text-[#61DAFB]"><FaReact /></span>;
    if (lowerTag.includes('node')) return <span className="text-[#339933]"><FaNodeJs /></span>;
    if (lowerTag.includes('arduino')) return <span className="text-[#00979D]"><SiArduino /></span>;
    if (lowerTag.includes('mongodb')) return <span className="text-[#47A248]"><SiMongodb /></span>;
    if (lowerTag.includes('express')) return <span className="text-white"><SiExpress /></span>;
    if (lowerTag.includes('python')) return <span className="text-[#3776AB]"><SiPython /></span>;
    if (lowerTag.includes('c++')) return <span className="text-[#00599C]"><SiCplusplus /></span>;
    if (lowerTag.includes('mysql')) return <span className="text-[#4479A1]"><SiMysql /></span>;
    if (lowerTag.includes('wordpress')) return <span className="text-[#21759B]"><FaWordpress /></span>;
    if (lowerTag.includes('php')) return <span className="text-[#777BB4]"><FaPhp /></span>;
    if (lowerTag.includes('bootstrap')) return <span className="text-[#7952B3]"><SiBootstrap /></span>;
    if (lowerTag.includes('tailwind')) return <span className="text-[#06B6D4]"><SiTailwindcss /></span>;
    if (lowerTag.includes('vite')) return <span className="text-[#646CFF]"><SiVite /></span>;
    if (lowerTag.includes('framer')) return <span className="text-white"><SiFramer /></span>;
    if (lowerTag.includes('firebase')) return <span className="text-[#FFCA28]"><SiFirebase /></span>;
    if (lowerTag.includes('elementor')) return <span className="text-[#92003B]"><SiElementor /></span>;
    if (lowerTag.includes('bluetooth')) return <span className="text-[#0082FC]"><FaBluetooth /></span>;
    if (lowerTag.includes('cisco')) return <span className="text-[#1BA0D7]"><SiCisco /></span>;
    if (lowerTag.includes('iot')) return <Cpu className="text-neon-blue" />;
    if (lowerTag.includes('robotics')) return <Settings className="text-zinc-400" />;
    if (lowerTag.includes('sensors')) return <Zap className="text-yellow-400" />;
    if (lowerTag.includes('mechanical')) return <Wrench className="text-zinc-500" />;
    if (lowerTag.includes('control')) return <Terminal className="text-green-400" />;
    if (lowerTag.includes('web dev') || lowerTag.includes('web app')) return <Globe className="text-blue-400" />;
    return null;
  };

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {tags.map(tag => {
        const icon = getIcon(tag);
        if (!icon) return null;
        return (
          <motion.div 
            key={tag}
            whileHover={{ scale: 1.2, y: -2 }}
            className={`flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-wider text-zinc-400 hover:text-neon-${color} hover:border-neon-${color}/30 transition-all cursor-default`}
            title={tag}
          >
            <span className="text-sm">{icon}</span>
            <span className="hidden sm:inline">{tag}</span>
          </motion.div>
        );
      })}
    </div>
  );
};

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl text-neon-blue hover:text-white hover:border-neon-blue hover:shadow-neon-blue transition-all duration-300 group"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={24} className="group-hover:animate-bounce" />
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-900 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Back to Top
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-neon-blue rounded-full pointer-events-none z-[999] hidden md:block will-change-transform"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(0, 242, 255, 0.1)' : 'transparent',
          borderColor: isHovering ? 'rgba(0, 242, 255, 0.5)' : 'rgba(0, 242, 255, 0.3)',
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-neon-blue rounded-full pointer-events-none z-[1000] hidden md:block will-change-transform"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.8 : 1,
        }}
      />
    </>
  );
};

const BackgroundShapes = React.memo(() => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 noise-overlay" />
      <motion.div 
        animate={{ 
          rotate: 360,
          x: [0, 150, 0],
          y: [0, 100, 0]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] border border-neon-blue/5 rounded-[40%_60%_60%_40%/40%_40%_60%_60%] blur-2xl will-change-transform"
      />
      <motion.div 
        animate={{ 
          rotate: -360,
          x: [0, -100, 0],
          y: [0, 150, 0]
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] border border-neon-purple/5 rounded-[60%_40%_40%_60%/60%_60%_40%_40%] blur-2xl will-change-transform"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.02),transparent_70%)]" />
    </div>
  );
});

const RevealText = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <div className="relative overflow-hidden inline-block">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const GlitchText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const characters = text.split("");
  
  return (
    <div className="flex flex-wrap">
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.05,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          className="inline-block hover:text-neon-blue transition-colors duration-300 cursor-default"
          whileHover={{ 
            scale: 1.2,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.2 }
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

const FloatingCode = React.memo(() => {
  const snippets = [
    "const developer = { name: 'Shehab', role: 'Fullstack' };",
    "function buildFuture() { return new Innovation(); }",
    "import { creativity } from 'brain';",
    "while(alive) { code(); learn(); repeat(); }",
    "git commit -m 'Initial commit of brilliance'",
    "npm install success --save",
    "const isModern = true;",
    "console.log('Hello World');"
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.05] select-none">
      {snippets.map((snippet, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: 0 
          }}
          animate={{ 
            y: [null, Math.random() * -200 - 100],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 5
          }}
          className="absolute font-mono text-xs text-neon-blue whitespace-nowrap will-change-transform"
        >
          {snippet}
        </motion.div>
      ))}
    </div>
  );
});

const SectionHeader = React.memo(({ title, icon: Icon, color = "blue", index }: { title: string; icon: any; color?: "blue" | "purple" | "pink"; index?: string }) => {
  const shadowClass = color === "blue" ? "group-hover:shadow-neon-blue" : color === "purple" ? "group-hover:shadow-neon-purple" : "group-hover:shadow-neon-pink";
  const borderClass = color === "blue" ? "border-neon-blue/20" : color === "purple" ? "border-neon-purple/20" : "border-neon-pink/20";
  const textClass = color === "blue" ? "text-neon-blue" : color === "purple" ? "text-neon-purple" : "text-neon-pink";

  return (
    <div className="flex items-center gap-8 mb-16 group">
      <div className="relative">
        {index && (
          <span className="absolute -top-6 -left-4 text-[11px] font-black text-zinc-800 font-mono tracking-[0.5em]">
            {index}
          </span>
        )}
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`p-5 bg-zinc-900/30 backdrop-blur-2xl rounded-2xl border ${borderClass} ${shadowClass} transition-all duration-500`}
        >
          <Icon size={28} className={textClass} />
        </motion.div>
      </div>
      <div className="flex flex-col">
        <RevealText>
          <h2 className={`text-4xl md:text-5xl font-display font-black tracking-tight uppercase text-white group-hover:${textClass} transition-colors duration-500`}>
            {title}
          </h2>
        </RevealText>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          className={`h-[3px] bg-gradient-to-r from-neon-${color} to-transparent mt-2 rounded-full`} 
        />
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-zinc-900 to-transparent ml-8" />
    </div>
  );
});

const SkillBadge = ({ name, color = "blue", icon: Icon }: { name: string; color?: "blue" | "purple" | "pink"; key?: string; icon?: any }) => {
  const colorClass = color === "blue" ? "neon-blue" : color === "purple" ? "neon-purple" : "neon-pink";
  return (
    <motion.div 
      whileHover={{ scale: 1.1, y: -5, rotate: 2 }}
      className={`px-4 py-2 bg-zinc-900/40 text-zinc-300 rounded-xl text-xs font-mono border border-zinc-800/50 hover:border-${colorClass}/40 hover:text-${colorClass} hover:shadow-[0_0_20px_rgba(0,242,255,0.2)] transition-all duration-300 cursor-default flex items-center gap-2 group/badge`}
    >
      {Icon ? <Icon size={14} className={`group-hover/badge:text-${colorClass} transition-colors`} /> : <div className={`w-1 h-1 rounded-full bg-${colorClass}/40 group-hover/badge:bg-${colorClass} transition-colors`} />}
      {name}
    </motion.div>
  );
};

const SkillProgressBar = ({ name, level, color = "blue", icon: Icon }: { name: string; level: number; color?: "blue" | "purple" | "pink"; icon?: any; key?: any }) => {
  const colorClass = color === "blue" ? "neon-blue" : color === "purple" ? "neon-purple" : "neon-pink";
  const shadowColor = color === "blue" ? "rgba(0,242,255,0.3)" : color === "purple" ? "rgba(188,19,254,0.3)" : "rgba(255,0,128,0.3)";
  
  return (
    <div className="space-y-3 group">
      <div className="flex justify-between items-end">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg bg-zinc-900/50 border border-white/5 text-${colorClass} group-hover:border-${colorClass}/30 transition-all duration-500`}>
            {Icon ? <Icon size={16} /> : <Code2 size={16} />}
          </div>
          <span className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors">{name}</span>
        </div>
        <span className={`text-[10px] font-mono text-${colorClass} font-black tracking-widest`}>{level}%</span>
      </div>
      <div className="h-2 bg-zinc-900/80 rounded-full overflow-hidden border border-white/5 relative">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-full bg-${colorClass} relative`}
          style={{ 
            boxShadow: `0 0 15px ${shadowColor}` 
          }}
        >
          <motion.div 
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/2"
          />
        </motion.div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Training', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 bg-dark-bg/80 backdrop-blur-xl border-b border-zinc-800' : 'py-6 md:py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        <a href="#" className="text-2xl font-display font-black tracking-tighter text-white group">
          S<span className="text-neon-blue group-hover:text-neon-purple transition-colors">.</span>NABI
        </a>
        
        <div className="flex items-center gap-4 md:gap-8 overflow-x-auto no-scrollbar py-2">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] md:text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-neon-blue transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="#contact" 
            className="px-4 md:px-6 py-2 md:py-2.5 bg-white text-black text-[10px] md:text-xs font-black uppercase tracking-widest rounded-full hover:bg-neon-blue hover:shadow-neon-blue transition-all duration-300 whitespace-nowrap"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

const ClientsMarquee = React.memo(() => {
  return (
    <div className="relative py-16 overflow-hidden border-y border-white/5 bg-zinc-900/10 backdrop-blur-sm">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent)]" />
      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <div className="flex items-center gap-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-zinc-800" />
          <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500 whitespace-nowrap">
            Strategic Partnerships & Collaborations
          </h3>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-zinc-800" />
        </div>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-20 py-4 will-change-transform">
          {[...CV_DATA.clients, ...CV_DATA.clients].map((client, idx) => (
            <div key={idx} className="flex items-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 group/client">
              <span className="text-4xl md:text-6xl font-display font-black text-zinc-800 tracking-tighter uppercase group-hover/client:text-zinc-400 transition-colors duration-700">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

const App = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroData = {
    badge: "System Status: Online & Ready to Build",
    title: "Full-Stack Architect & IoT Innovator",
    description: (
      <div className="flex flex-wrap gap-x-2">
        {["I'm", CV_DATA.name + ",", "a", "Digital", "Architect", "and", "Software", "Engineer", "engineering", "the", "next", "generation", "of", "high-performance", "digital", "ecosystems."].map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 + i * 0.05 }}
            className={
              word.includes(CV_DATA.name) ? "text-white font-bold" :
              ["Digital", "Architect"].includes(word) ? "text-neon-blue font-medium" :
              ["Software", "Engineer"].includes(word) ? "text-neon-purple font-medium" :
              "text-zinc-400"
            }
          >
            {word}
          </motion.span>
        ))}
      </div>
    ),
    image: CV_DATA.profileImage,
    color: "blue"
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message || 'Message sent successfully!');
        setFormState({ name: '', email: '', message: '' });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSkillIcon = (name: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('html') || lowerName.includes('css') || lowerName.includes('bootstrap')) return Layout;
    if (lowerName.includes('javascript') || lowerName.includes('js') || lowerName.includes('python') || lowerName.includes('c++') || lowerName.includes('java') || lowerName.includes('react') || lowerName.includes('node')) return Code;
    if (lowerName.includes('arduino') || lowerName.includes('cpu')) return Cpu;
    if (lowerName.includes('wordpress')) return Globe;
    if (lowerName.includes('visual studio') || lowerName.includes('vscode')) return Terminal;
    if (lowerName.includes('mysql') || lowerName.includes('database') || lowerName.includes('mongodb')) return Database;
    if (lowerName.includes('express')) return Server;
    if (lowerName.includes('cisco') || lowerName.includes('network')) return Server;
    if (lowerName.includes('office') || lowerName.includes('word') || lowerName.includes('excel') || lowerName.includes('power point')) return Layers;
    if (lowerName.includes('power bi') || lowerName.includes('analysis')) return Database;
    if (lowerName.includes('canva') || lowerName.includes('design')) return Sparkles;
    if (lowerName.includes('google') || lowerName.includes('workspace')) return Globe;
    if (lowerName.includes('teams') || lowerName.includes('communication')) return Users;
    if (lowerName.includes('tool') || lowerName.includes('wrench')) return Wrench;
    return null;
  };

  return (
    <div className="min-h-screen bg-dark-bg text-zinc-100 font-sans selection:bg-neon-blue selection:text-black scroll-smooth overflow-x-hidden">
      <CustomCursor />
      <Toaster position="top-center" richColors />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon-blue z-[100] origin-left"
        style={{ scaleX }}
      />
      <BackgroundShapes />
      <Navbar />
      
      {/* Hero Section */}
      <header id="home" className="relative min-h-screen flex items-center border-b border-zinc-900 overflow-hidden pt-32 pb-20 bg-black">
        {/* Atmospheric Background Layers */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-neon-blue/10 rounded-full blur-[160px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-neon-purple/10 rounded-full blur-[160px] animate-pulse delay-1000" />
          
          <FloatingCode />
          
          {/* Floating Decorative Elements */}
          <motion.div 
            animate={{ 
              y: [0, -40, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] right-[10%] w-96 h-96 opacity-[0.03] border border-white rounded-full hidden xl:block"
          />
          <motion.div 
            animate={{ 
              y: [0, 50, 0],
              rotate: [0, -15, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[15%] left-[10%] w-[500px] h-[500px] opacity-[0.03] border border-white rounded-[40%] hidden xl:block"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="relative z-10">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neon-blue text-[10px] font-bold uppercase tracking-[0.4em] mb-8 backdrop-blur-3xl"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue"></span>
                  </span>
                  {heroData.badge}
                </motion.div>
                
                <div className="mb-10">
                  <div className="text-[10vw] lg:text-[5.5rem] font-display font-black tracking-tighter leading-[0.85] uppercase text-white mb-4">
                    <GlitchText text="WEB" delay={0.2} />
                    <div className="flex items-center gap-4">
                      <GlitchText text="DEVELOPER" delay={0.4} />
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="h-2 flex-grow bg-gradient-to-r from-neon-blue to-transparent origin-left hidden md:block"
                      />
                    </div>
                  </div>
                  <div className="text-[10vw] lg:text-[5.5rem] font-display font-black tracking-tighter leading-[0.85] uppercase text-stroke bg-clip-text text-transparent bg-gradient-to-r from-neon-purple via-white to-neon-blue animate-gradient-x">
                    <GlitchText text="& SOFTWARE" delay={0.6} />
                    <GlitchText text="ENGINEER" delay={0.8} />
                  </div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl md:text-2xl text-zinc-400 font-light mb-12 max-w-2xl leading-relaxed"
                >
                  {heroData.description}
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-wrap gap-6 mb-12"
                >
                  <a 
                    href="#contact" 
                    className="px-10 py-5 bg-white text-black font-black tracking-widest uppercase rounded-xl hover:bg-neon-blue hover:shadow-[0_0_40px_rgba(0,242,255,0.4)] transition-all duration-500 flex items-center gap-3 group/btn"
                  >
                    Start Project <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="/updated_CV_Shehab.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-5 bg-transparent text-white font-black tracking-widest uppercase rounded-xl border border-zinc-800 hover:border-neon-blue hover:text-neon-blue transition-all duration-500 flex items-center gap-3 group/cv"
                  >
                    <Download size={18} className="group-hover/cv:translate-y-1 transition-transform" />
                    Download CV
                  </a>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                  className="flex items-center gap-6"
                >
                  <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em]">Connect // Profile</span>
                  <div className="flex gap-4">
                    {[
                      { icon: Github, href: CV_DATA.contact.github, label: 'GitHub' },
                      { icon: Linkedin, href: CV_DATA.contact.linkedin, label: 'LinkedIn' },
                      { icon: Mail, href: `mailto:${CV_DATA.contact.email}`, label: 'Email' }
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }}
                        className="p-3 bg-white/5 border border-white/10 rounded-xl text-zinc-500 hover:text-neon-blue hover:border-neon-blue/50 transition-all"
                        title={social.label}
                      >
                        <social.icon size={18} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:block relative">
              {/* Modern Profile Picture Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.02, rotate: -2 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="relative w-full max-w-[400px] aspect-[3/4] mx-auto lg:ml-auto group/profile"
              >
                {/* Decorative frames behind */}
                <div className="absolute inset-0 border border-white/10 rounded-[3rem] rotate-6 scale-105" />
                <div className="absolute inset-0 border border-neon-blue/20 rounded-[3rem] -rotate-3 scale-102" />

                <div className="relative h-full w-full bg-zinc-900/90 backdrop-blur-2xl border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-transparent opacity-0 group-hover/profile:opacity-100 transition-opacity duration-500" />
                  
                  <img 
                    src="/shehab2.jpeg" 
                    alt={CV_DATA.name}
                    className="w-full h-full object-cover grayscale group-hover/profile:grayscale-0 transition-all duration-1000 scale-110 group-hover/profile:scale-100"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center justify-end mb-2">
                      <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse shadow-[0_0_10px_rgba(0,242,255,0.8)]" />
                    </div>
                    <p className="text-white text-xl font-display font-bold tracking-tight">{CV_DATA.name}</p>
                  </div>

                  {/* Scanning Effect */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div 
                      animate={{ y: ["-100%", "200%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="w-full h-1/2 bg-gradient-to-b from-transparent via-neon-blue/10 to-transparent"
                    />
                  </div>
                </div>
                
                {/* Glow behind card */}
                <div className="absolute -inset-4 bg-neon-blue/20 blur-3xl rounded-[3rem] -z-10 opacity-0 group-hover/profile:opacity-100 transition-opacity duration-1000" />
              </motion.div>
            </div>
          </div>
        </div>

          {/* Elegant Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-4 z-20"
          >
            <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.3em] vertical-text rotate-180">Scroll</span>
            <div className="w-px h-24 bg-gradient-to-b from-zinc-800 via-zinc-400 to-transparent relative overflow-hidden">
              <motion.div 
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white to-transparent"
              />
            </div>
          </motion.div>
      </header>

      <ClientsMarquee />

      <main className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        {/* About Me Section */}
        <section id="about" className="space-y-16">
          <SectionHeader title="About Me" icon={Users} color="blue" index="01" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Cool Image Design for pp2.jpg */}
            <div className="lg:col-span-4 relative group">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
              >
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-neon-blue/40 rounded-tl-3xl z-0" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-neon-purple/40 rounded-br-3xl z-0" />
                
                {/* Main Image Container */}
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 tech-card group-hover:border-neon-blue/30 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60" />
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 1.5 }}
                    src="/pp2.jpg" 
                    alt="About Me" 
                    className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="p-4 glass-card rounded-2xl border-white/10 backdrop-blur-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center">
                          <Code2 size={20} className="text-neon-blue" />
                        </div>
                        <div>
                          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Specialization</p>
                          <p className="text-white font-bold text-sm">Web Developer & Software Engineer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated Rings */}
                <div className="absolute -top-10 -right-10 w-40 h-40 border border-white/5 rounded-full animate-spin-slow pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 border border-neon-blue/5 rounded-full animate-reverse-spin pointer-events-none" />
              </motion.div>
            </div>

            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-8">
                <RevealText>
                  <h3 className="text-3xl md:text-5xl font-display font-black text-white leading-tight">
                    Building Ideas <br />
                    <span className="text-neon-blue">Into Reality</span>
                  </h3>
                </RevealText>
                <p className="text-zinc-400 text-lg leading-relaxed font-light max-w-3xl whitespace-pre-line">
                  {CV_DATA.bio}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Based In</span>
                    <span className="text-white font-bold">{CV_DATA.location}</span>
                  </div>
                  <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Status</span>
                    <span className="text-neon-blue font-bold">Open to Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Foundation - Single Row */}
          <div className="space-y-8 pt-8">
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500 flex items-center gap-3">
              <div className="w-2 h-2 bg-neon-purple rounded-full shadow-neon-purple" />
              Academic Foundation
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CV_DATA.education.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 glass-card rounded-[2rem] border-white/5 hover:border-neon-purple/20 transition-all group relative overflow-hidden h-full flex flex-col justify-between"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-neon-purple/5 blur-3xl -mr-12 -mt-12 group-hover:bg-neon-purple/10 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 rounded-xl bg-neon-purple/10 text-neon-purple">
                        <GraduationCap size={24} />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">{edu.period}</span>
                    </div>
                    <h5 className="text-xl text-white font-bold group-hover:text-neon-purple transition-colors mb-2 leading-tight">{edu.degree}</h5>
                    <p className="text-zinc-400 text-sm font-light leading-relaxed">{edu.institution}</p>
                  </div>
                  {edu.location && (
                    <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      <MapPin size={12} className="text-neon-purple" />
                      {edu.location}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-24">
          <div>
            <SectionHeader title="Expertise" icon={Award} color="pink" index="02" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Frontend Skills */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="lg:col-span-6 p-10 tech-card rounded-[2.5rem] border-white/5 relative overflow-hidden group"
              >
                <div className="scanner-line opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-circuit opacity-[0.03] pointer-events-none" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 blur-[120px] -mr-48 -mt-48 group-hover:bg-neon-blue/10 transition-colors" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-12">
                    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500 flex items-center gap-3">
                      <div className="w-2 h-2 bg-neon-blue rounded-full shadow-neon-blue animate-pulse" />
                      Frontend Development
                    </h4>
                    <Code2 size={24} className="text-neon-blue/30 group-hover:text-neon-blue transition-colors" />
                  </div>
                  
                  <div className="space-y-8">
                    {CV_DATA.skills.frontend.map((skill: any) => (
                      <SkillProgressBar 
                        key={skill.name} 
                        name={skill.name} 
                        level={skill.level} 
                        color="blue" 
                        icon={getSkillIcon(skill.name)} 
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* MERN Stack Skills */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="lg:col-span-6 p-10 tech-card rounded-[2.5rem] border-white/5 relative overflow-hidden group"
              >
                <div className="scanner-line opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-circuit opacity-[0.03] pointer-events-none" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/5 blur-[120px] -mr-48 -mt-48 group-hover:bg-neon-purple/10 transition-colors" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-12">
                    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500 flex items-center gap-3">
                      <div className="w-2 h-2 bg-neon-purple rounded-full shadow-neon-purple animate-pulse" />
                      MERN Stack Development
                    </h4>
                    <Layers size={24} className="text-neon-purple/30 group-hover:text-neon-purple transition-colors" />
                  </div>
                  
                  <div className="space-y-8">
                    {CV_DATA.skills.mern.map((skill: any) => (
                      <SkillProgressBar 
                        key={skill.name} 
                        name={skill.name} 
                        level={skill.level} 
                        color="purple" 
                        icon={getSkillIcon(skill.name)} 
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* IoT & Robotics */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="lg:col-span-6 p-10 tech-card rounded-[2.5rem] border-white/5 relative overflow-hidden group"
              >
                <div className="scanner-line opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-circuit opacity-[0.03] pointer-events-none" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-neon-pink/5 blur-[120px] -mr-48 -mt-48 group-hover:bg-neon-pink/10 transition-colors" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-12">
                    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500 flex items-center gap-3">
                      <div className="w-2 h-2 bg-neon-pink rounded-full shadow-neon-pink animate-pulse" />
                      IoT & Robotics
                    </h4>
                    <Cpu size={24} className="text-neon-pink/30 group-hover:text-neon-pink transition-colors" />
                  </div>
                  
                  <div className="space-y-8">
                    {CV_DATA.skills.iot.map((skill: any) => (
                      <SkillProgressBar 
                        key={skill.name} 
                        name={skill.name} 
                        level={skill.level} 
                        color="pink" 
                        icon={getSkillIcon(skill.name)} 
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Other Backend & Technologies */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="lg:col-span-6 p-10 tech-card rounded-[2.5rem] border-white/5 relative overflow-hidden group"
              >
                <div className="scanner-line opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-circuit opacity-[0.03] pointer-events-none" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 blur-[120px] -mr-48 -mt-48 group-hover:bg-neon-blue/10 transition-colors" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-12">
                    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500 flex items-center gap-3">
                      <div className="w-2 h-2 bg-neon-blue rounded-full shadow-neon-blue animate-pulse" />
                      Backend & Other Technologies
                    </h4>
                    <Database size={24} className="text-neon-blue/30 group-hover:text-neon-blue transition-colors" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {CV_DATA.skills.backend.map((skill: any) => (
                      <SkillProgressBar 
                        key={skill.name} 
                        name={skill.name} 
                        level={skill.level} 
                        color="blue" 
                        icon={getSkillIcon(skill.name)} 
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Tools & Productivity */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="lg:col-span-12 p-10 tech-card rounded-[2.5rem] border-white/5 relative overflow-hidden group"
              >
                <div className="scanner-line opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-circuit opacity-[0.03] pointer-events-none" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/5 blur-[120px] -mr-48 -mt-48 group-hover:bg-neon-purple/10 transition-colors" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-12">
                    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500 flex items-center gap-3">
                      <div className="w-2 h-2 bg-neon-purple rounded-full shadow-neon-purple animate-pulse" />
                      Tools & Productivity
                    </h4>
                    <Wrench size={24} className="text-neon-purple/30 group-hover:text-neon-purple transition-colors" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
                    <div className="space-y-8">
                      {CV_DATA.skills.tools.slice(0, 3).map((skill: any) => (
                        <SkillProgressBar 
                          key={skill.name} 
                          name={skill.name} 
                          level={skill.level} 
                          color="purple" 
                          icon={getSkillIcon(skill.name)} 
                        />
                      ))}
                    </div>
                    <div className="space-y-8">
                      {CV_DATA.skills.tools.slice(3).map((skill: any) => (
                        <SkillProgressBar 
                          key={skill.name} 
                          name={skill.name} 
                          level={skill.level} 
                          color="purple" 
                          icon={getSkillIcon(skill.name)} 
                        />
                      ))}
                    </div>
                    <div className="space-y-8">
                      {CV_DATA.skills.productivity.map((skill: any) => (
                        <SkillProgressBar 
                          key={skill.name} 
                          name={skill.name} 
                          level={skill.level} 
                          color="purple" 
                          icon={getSkillIcon(skill.name)} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Soft Skills & Languages - Bottom Row */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="lg:col-span-12 p-10 tech-card rounded-[2.5rem] border-white/5 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-circuit opacity-[0.03] pointer-events-none" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500 mb-8 flex items-center gap-3">
                      <div className="w-2 h-2 bg-neon-blue rounded-full shadow-neon-blue animate-pulse" />
                      Soft Skills
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {CV_DATA.skills.softSkills.map(skill => <SkillBadge key={skill} name={skill} color="blue" icon={getSkillIcon(skill)} />)}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500 mb-8 flex items-center gap-3">
                      <div className="w-2 h-2 bg-neon-purple rounded-full shadow-neon-purple animate-pulse" />
                      Research & Analysis
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {CV_DATA.skills.research.map(skill => <SkillBadge key={skill} name={skill} color="purple" icon={getSkillIcon(skill)} />)}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500 mb-8 flex items-center gap-3">
                      <div className="w-2 h-2 bg-neon-pink rounded-full shadow-neon-pink animate-pulse" />
                      Languages
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {CV_DATA.skills.languages.map(skill => <SkillBadge key={skill} name={skill} color="pink" icon={getSkillIcon(skill)} />)}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Quick Access Buttons */}
          <div className="flex flex-wrap justify-center gap-6 pt-12">
            {[
              { name: 'View Awards', href: '#awards', icon: Trophy, color: 'purple' },
              { name: 'View Publications', href: '#publications', icon: BookOpen, color: 'pink' },
              { name: 'View Activity', href: '#extracurricular', icon: Users, color: 'blue' }
            ].map((btn, i) => (
              <motion.a
                key={i}
                href={btn.href}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 bg-zinc-900/50 border border-white/5 rounded-2xl flex items-center gap-3 text-xs font-black tracking-widest uppercase hover:border-neon-${btn.color}/30 hover:shadow-neon-${btn.color} transition-all duration-500 group`}
              >
                <btn.icon size={18} className={`text-neon-${btn.color}`} />
                {btn.name}
              </motion.a>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="space-y-32">
          <div>
            <SectionHeader title="Selected Works" icon={Code2} color="purple" index="03" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {CV_DATA.clientProjects.map((project, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="group relative bg-zinc-900/10 backdrop-blur-3xl border border-white/5 rounded-[3rem] overflow-hidden hover:border-neon-purple/30 transition-all duration-700 hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.2)]"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <div className="absolute inset-0 bg-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay z-10" />
                    <motion.img 
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 1.5 }}
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-[0.7] group-hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-90" />
                    
                    <div className="absolute top-6 right-6 z-20">
                      <div className="px-4 py-2 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-neon-purple rounded-full animate-pulse" />
                        Project Details
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-10">
                    <TechStackIcons tags={project.tags} color="purple" />
                    <h3 className="text-3xl font-display font-bold mb-4 text-white group-hover:text-neon-purple transition-colors leading-tight">{project.title}</h3>
                    <p className="text-zinc-500 text-base leading-relaxed mb-10 line-clamp-2 group-hover:text-zinc-400 transition-colors">{project.description}</p>
                    
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-4 text-xs font-black tracking-[0.2em] text-white hover:text-neon-purple transition-all group/btn"
                      >
                        EXPLORE <div className="w-8 h-px bg-white group-hover/btn:w-12 group-hover/btn:bg-neon-purple transition-all" />
                      </button>
                      
                      <div className="flex items-center gap-3">
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 text-zinc-500 rounded-xl hover:text-neon-purple hover:bg-neon-purple/10 border border-white/5 transition-all hover:scale-110"
                            title="View Source Code"
                          >
                            <Github size={18} />
                          </a>
                        )}
                        {project.website && (
                          <a 
                            href={project.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 text-zinc-500 rounded-xl hover:text-neon-purple hover:bg-neon-purple/10 border border-white/5 transition-all hover:scale-110"
                            title="Live Website"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader title="IoT & Robotics" icon={Sparkles} color="pink" index="04" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {CV_DATA.iotProjects.map((project, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="group relative bg-zinc-900/10 backdrop-blur-3xl border border-white/5 rounded-[3rem] overflow-hidden hover:border-neon-pink/30 transition-all duration-700 hover:shadow-[0_0_50px_-12px_rgba(236,72,153,0.2)]"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <div className="absolute inset-0 bg-neon-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay z-10" />
                    <motion.img 
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 1.5 }}
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-[0.7] group-hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-90" />
                  </div>
                  
                  <div className="p-10">
                    <TechStackIcons tags={project.tags} color="pink" />
                    <h3 className="text-3xl font-display font-bold mb-4 text-white group-hover:text-neon-pink transition-colors leading-tight">{project.title}</h3>
                    <p className="text-zinc-500 text-base leading-relaxed mb-10 line-clamp-2 group-hover:text-zinc-400 transition-colors">{project.description}</p>
                    
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-4 text-xs font-black tracking-[0.2em] text-white hover:text-neon-pink transition-all group/btn"
                      >
                        EXPLORE <div className="w-8 h-px bg-white group-hover/btn:w-12 group-hover/btn:bg-neon-pink transition-all" />
                      </button>

                      <div className="flex items-center gap-3">
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 text-zinc-500 rounded-xl hover:text-neon-pink hover:bg-neon-pink/10 border border-white/5 transition-all hover:scale-110"
                            title="View Source Code"
                          >
                            <Github size={18} />
                          </a>
                        )}
                        {project.website && (
                          <a 
                            href={project.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 text-zinc-500 rounded-xl hover:text-neon-pink hover:bg-neon-pink/10 border border-white/5 transition-all hover:scale-110"
                            title="Live Demo"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-16">
          <SectionHeader title="Experience" icon={Briefcase} color="blue" index="05" />
          <div className="space-y-12 relative before:absolute before:left-[1.35rem] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-neon-blue before:via-neon-blue/20 before:to-transparent">
            {CV_DATA.experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-16 group"
              >
                <div className="absolute left-0 top-1.5 w-11 h-11 bg-zinc-900 border border-neon-blue/30 rounded-xl flex items-center justify-center z-10 group-hover:shadow-neon-blue group-hover:border-neon-blue transition-all duration-500">
                  <Briefcase size={18} className="text-neon-blue" />
                </div>
                <div className="p-8 glass-card rounded-3xl border-white/5 hover:border-white/10 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h4 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-neon-blue transition-colors">{exp.role}</h4>
                      <p className="text-zinc-500 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-[10px] font-black text-neon-blue uppercase tracking-[0.3em] bg-neon-blue/5 px-3 py-1 rounded-full border border-neon-blue/20 self-start md:self-center">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6">{exp.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Training & Certifications */}
        <section id="certifications">
          <SectionHeader title="Training & Certifications" icon={Sparkles} color="blue" index="06" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CV_DATA.certifications.map((cert, idx) => (
              <div key={idx} className="p-8 bg-zinc-900/30 border border-zinc-800 rounded-3xl hover:border-neon-blue/30 hover:shadow-neon-blue transition-all duration-500 group">
                <h3 className="font-bold text-xl text-white mb-2 group-hover:text-neon-blue transition-colors">{cert.title}</h3>
                <p className="text-zinc-500 text-sm mb-4">{cert.issuer}</p>
                <span className="text-[10px] font-mono text-neon-blue bg-neon-blue/5 px-3 py-1 rounded-full border border-neon-blue/20">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Honors & Awards */}
        <section id="awards">
          <SectionHeader title="Honors & Awards" icon={Trophy} color="purple" index="07" />
          <div className="space-y-8">
            {CV_DATA.awards.map((award, idx) => (
              <div key={idx} className="p-8 bg-zinc-900/30 border border-zinc-800 rounded-3xl hover:border-neon-purple/30 hover:shadow-neon-purple transition-all duration-500 group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-xl text-white mb-2 group-hover:text-neon-purple transition-colors">{award.title}</h3>
                    {award.detail && <p className="text-zinc-500 text-sm">{award.detail}</p>}
                  </div>
                  <span className="text-[10px] font-mono text-neon-purple bg-neon-purple/5 px-3 py-1 rounded-full border border-neon-purple/20 self-start md:self-center">
                    {award.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section id="publications">
          <SectionHeader title="Research & Publications" icon={BookOpen} color="pink" index="08" />
          <div className="grid grid-cols-1 gap-12">
            {CV_DATA.publications.map((pub, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative p-12 tech-card rounded-[3rem] border-white/5 hover:border-neon-pink/30 hover:shadow-neon-pink transition-all duration-700 overflow-hidden"
              >
                <div className="scanner-line opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-circuit opacity-[0.03] pointer-events-none" />
                
                <div className="absolute top-0 right-0 p-16 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <BookOpen size={200} className="text-neon-pink" />
                </div>
                
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-16">
                  <div className="space-y-8 max-w-4xl">
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="px-4 py-1.5 bg-neon-pink/10 border border-neon-pink/20 rounded-full flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-neon-pink rounded-full animate-pulse" />
                        <span className="text-[10px] font-black text-neon-pink tracking-widest uppercase">{pub.year}</span>
                      </div>
                      <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
                        <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">ID: {pub.id}</span>
                      </div>
                      <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
                        <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">Research Paper</span>
                      </div>
                      {pub.doi && (
                        <div className="px-4 py-1.5 bg-neon-pink/5 border border-neon-pink/20 rounded-full">
                          <span className="text-[10px] font-mono text-neon-pink tracking-widest uppercase">DOI: {pub.doi}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-5xl font-display font-black text-white leading-[1.1] tracking-tight group-hover:text-neon-pink transition-colors duration-500">
                        {pub.title}
                      </h3>
                      
                      <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                        <div className="p-2 bg-zinc-900/50 rounded-lg border border-white/5">
                          <Users size={16} className="text-zinc-500" />
                        </div>
                        <p className="text-zinc-400 text-base font-medium italic leading-relaxed">
                          {pub.authors}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-4 shrink-0">
                    <motion.a 
                      href={pub.link}
                      target="_blank"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-10 py-5 bg-white text-black font-black tracking-[0.2em] uppercase rounded-2xl hover:bg-neon-pink hover:shadow-neon-pink transition-all duration-300 flex flex-col items-center justify-center gap-1 whitespace-nowrap group/pub-btn"
                    >
                      <div className="flex items-center gap-3">
                        Access Full Paper <ExternalLink size={20} />
                      </div>
                      {pub.doi && (
                        <span className="text-[8px] opacity-40 font-mono tracking-tighter lowercase group-hover/pub-btn:opacity-100 transition-opacity">
                          doi:{pub.doi}
                        </span>
                      )}
                    </motion.a>
                    <p className="text-[10px] text-zinc-600 font-mono text-center tracking-widest uppercase">
                      Published in IEEE Xplore
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Extracurricular */}
        <section id="extracurricular" className="relative py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.03)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute -left-24 top-0 w-96 h-96 bg-neon-purple/5 blur-[120px] pointer-events-none" />
          <div className="absolute -right-24 bottom-0 w-96 h-96 bg-neon-pink/5 blur-[120px] pointer-events-none" />
          <SectionHeader title="Extracurricular Activity" icon={Users} color="purple" index="09" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {CV_DATA.extracurricular.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-10 tech-card rounded-[2.5rem] border-white/5 overflow-hidden transition-all duration-500"
              >
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-circuit opacity-[0.02] pointer-events-none" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/5 blur-[80px] -mr-32 -mt-32 group-hover:bg-neon-purple/10 transition-colors" />
                <div className="scanner-line opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-8">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-neon-purple rounded-full shadow-neon-purple animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neon-purple/80">
                          {item.period}
                        </span>
                      </div>
                      <h3 className="text-2xl font-display font-bold text-white group-hover:text-neon-purple transition-colors">
                        {item.role}
                      </h3>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5 group-hover:border-neon-purple/30 group-hover:bg-neon-purple/5 transition-all">
                      {item.role.toLowerCase().includes('design') ? <Palette size={24} className="text-zinc-500 group-hover:text-neon-purple" /> : 
                       item.role.toLowerCase().includes('secretary') ? <ShieldCheck size={24} className="text-zinc-500 group-hover:text-neon-purple" /> :
                       item.role.toLowerCase().includes('co-ordinator') ? <Zap size={24} className="text-zinc-500 group-hover:text-neon-purple" /> :
                       item.role.toLowerCase().includes('volunteer') ? <Heart size={24} className="text-zinc-500 group-hover:text-neon-purple" /> :
                       <Users size={24} className="text-zinc-500 group-hover:text-neon-purple" />}
                    </div>
                  </div>

                  <div className="space-y-4 flex-grow">
                    <div className="flex items-center gap-2 text-zinc-400 font-medium">
                      <div className="w-4 h-px bg-zinc-800" />
                      <span>{item.organization}</span>
                    </div>
                    
                    {item.location && (
                      <div className="flex items-center gap-2 text-[10px] text-zinc-600 uppercase tracking-widest font-black">
                        <MapPin size={12} className="text-neon-purple/50" />
                        {item.location}
                      </div>
                    )}

                    {item.details && (
                      <p className="text-zinc-500 text-sm leading-relaxed pt-4 border-t border-white/5 group-hover:text-zinc-400 transition-colors">
                        {item.details}
                      </p>
                    )}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">
                      Activity Verified
                    </span>
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full border-2 border-dark-bg bg-zinc-800 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-neon-purple/30" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Contact & Footer */}
      <footer id="contact" className="relative bg-dark-bg border-t border-zinc-900 pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,rgba(0,242,255,0.03)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
            <div className="space-y-12">
              <RevealText>
                <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter text-white leading-[0.85] uppercase">
                  Let's create <br />
                  <span className="text-neon-blue text-glow-blue">something epic</span>
                </h2>
              </RevealText>
              
              <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-md">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>

              <div className="flex flex-wrap gap-6">
                {[
                  { icon: Github, href: CV_DATA.contact.github, color: "blue" },
                  { icon: Linkedin, href: CV_DATA.contact.linkedin, color: "purple" },
                  { icon: Instagram, href: CV_DATA.contact.instagram, color: "pink" },
                  { icon: Facebook, href: CV_DATA.contact.facebook, color: "blue" },
                  { icon: Mail, href: `mailto:${CV_DATA.contact.email}`, color: "pink" }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    href={social.href} 
                    target="_blank" 
                    whileHover={{ y: -5, scale: 1.1 }}
                    className={`p-5 bg-zinc-900/50 text-zinc-500 rounded-2xl hover:text-neon-${social.color} border border-white/5 hover:border-neon-${social.color}/40 hover:shadow-neon-${social.color} transition-all duration-500 backdrop-blur-2xl group/social`}
                  >
                    <social.icon size={24} className="group-hover/social:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 blur-2xl rounded-[3rem] opacity-50" />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative p-10 glass-card rounded-[3rem] border-white/5 space-y-8"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Your Name</label>
                      <input 
                        type="text" 
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Message</label>
                    <textarea 
                      required
                      rows={5} 
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      placeholder="Tell me about your project..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all resize-none"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 bg-white text-black font-black tracking-[0.3em] uppercase rounded-2xl hover:bg-neon-blue hover:shadow-neon-blue transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4 group/submit"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={20} className="group-hover/submit:translate-x-1 group-hover/submit:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>

          <div className="pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <h4 className="text-xl font-display font-black text-white tracking-tighter uppercase">{CV_DATA.name}</h4>
              <p className="text-zinc-600 text-[10px] font-mono tracking-[0.3em] uppercase">© {new Date().getFullYear()} • DESIGNED FOR THE FUTURE</p>
            </div>
            
            <div className="flex items-center gap-8">
              <a href="#about" className="text-[10px] font-black text-zinc-500 hover:text-white transition-colors tracking-widest uppercase">About</a>
              <a href="#projects" className="text-[10px] font-black text-zinc-500 hover:text-white transition-colors tracking-widest uppercase">Work</a>
              <a href="#contact" className="text-[10px] font-black text-zinc-500 hover:text-white transition-colors tracking-widest uppercase">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-zinc-900 border border-white/10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[3rem] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all z-20"
              >
                <ChevronRight size={24} className="rotate-180" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-[300px] lg:h-full relative overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                </div>
                <div className="p-8 md:p-16">
                  <TechStackIcons tags={selectedProject.tags} color="blue" />
                  <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-white mb-8">
                    {selectedProject.title}
                  </h2>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-12">
                    {selectedProject.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-6">
                    {selectedProject.github && (
                      <a 
                        href={selectedProject.github}
                        target="_blank"
                        className="px-8 py-4 bg-white text-black font-black tracking-widest uppercase rounded-2xl hover:bg-neon-blue hover:shadow-neon-blue transition-all duration-300 flex items-center gap-3"
                      >
                        <Github size={20} /> VIEW SOURCE
                      </a>
                    )}
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="px-8 py-4 bg-transparent text-white font-black tracking-widest uppercase rounded-2xl border border-zinc-800 hover:border-neon-blue transition-all duration-300"
                    >
                      CLOSE PREVIEW
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <BackToTop />
    </div>
  );
};

export default App;
