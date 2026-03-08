import { motion, useScroll, useTransform } from "motion/react";
import { 
  Code2, 
  Smartphone, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  Headphones, 
  Rocket,
  Users,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Menu,
  X,
  ChevronRight
} from "lucide-react";
import { useState, useRef } from "react";
import { 
  NavItem, 
  SectionHeading, 
  ServiceCard, 
  ProjectCard, 
  TeamMember,
  Logo
} from "./components/UI";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.95]);

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom, responsive, and high-performance websites built with the latest technologies to drive your business forward."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Intuitive and powerful mobile applications for iOS and Android that provide seamless user experiences."
    },
    {
      icon: Cpu,
      title: "Software Development",
      description: "Robust enterprise software solutions tailored to your specific operational needs and business goals."
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity Services",
      description: "Advanced security audits and protection strategies to safeguard your digital assets and user data."
    },
    {
      icon: Globe,
      title: "IT Consulting",
      description: "Strategic technology advice to help you navigate the complex digital landscape and optimize your infrastructure."
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Reliable 24/7 technical assistance and maintenance to ensure your systems are always running smoothly."
    }
  ];

  const projects = [
    {
      title: "FinTech Dashboard",
      category: "Web Application",
      image: "https://picsum.photos/seed/tech1/800/600",
      tags: ["React", "D3.js", "Node.js"]
    },
    {
      title: "HealthTrack Mobile",
      category: "Mobile App",
      image: "https://picsum.photos/seed/tech2/800/600",
      tags: ["Flutter", "Firebase", "AI"]
    },
    {
      title: "SecureCloud Storage",
      category: "Cloud Solution",
      image: "https://picsum.photos/seed/tech3/800/600",
      tags: ["AWS", "Python", "Encryption"]
    },
    {
      title: "E-Commerce Engine",
      category: "E-Commerce",
      image: "https://picsum.photos/seed/tech4/800/600",
      tags: ["Next.js", "Stripe", "PostgreSQL"]
    }
  ];

  const team = [
    { name: "Dawit Abraham", role: "CEO & Founder", image: "https://picsum.photos/seed/person1/300/300" },
    { name: "Selamawit Tekle", role: "Lead Developer", image: "https://picsum.photos/seed/person2/300/300" },
    { name: "Yared Bekele", role: "UI/UX Designer", image: "https://picsum.photos/seed/person3/300/300" },
    { name: "Hanna Girma", role: "Project Manager", image: "https://picsum.photos/seed/person4/300/300" }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#services">Services</NavItem>
            <NavItem href="#portfolio">Portfolio</NavItem>
            <NavItem href="#team">Team</NavItem>
            <a 
              href="#contact" 
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold rounded-full transition-all text-sm"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-zinc-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-zinc-900 border-b border-white/10 p-6 flex flex-col gap-4"
          >
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">About</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Services</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Portfolio</a>
            <a href="#team" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Team</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-emerald-400">Contact Us</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            style={{ opacity, scale }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6 mx-auto"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Empowering Digital Transformation
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-8"
            >
              Innovating the Future of <span className="text-gradient">Technology</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Boyo Solution Technology Company delivers cutting-edge digital solutions 
              that help businesses scale, innovate, and lead in the modern era.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a 
                href="#services" 
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl transition-all flex items-center gap-2 group"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#portfolio" 
                className="px-8 py-4 glass hover:bg-white/10 text-white font-bold rounded-xl transition-all"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden glass p-4">
                <img 
                  src="https://picsum.photos/seed/office/800/800" 
                  alt="Boyo Solution Office" 
                  className="w-full h-full object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-display font-bold text-emerald-500">10+</div>
                  <div className="text-sm text-zinc-400 leading-tight">Years of<br/>Excellence</div>
                </div>
              </div>
            </motion.div>
            
            <div>
              <SectionHeading 
                subtitle="About Us" 
                title="We Build Solutions That Define Tomorrow" 
              />
              <p className="text-zinc-400 mb-8 leading-relaxed">
                Boyo Solution Technology Company is a premier technology firm dedicated to solving 
                complex business challenges through innovative software and hardware solutions. 
                Founded with a vision to bridge the gap between imagination and reality, we've 
                grown into a team of experts passionate about digital excellence.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-emerald-400 font-display font-bold mb-2">Our Mission</h4>
                  <p className="text-sm text-zinc-500">To empower businesses worldwide with scalable, secure, and cutting-edge technology solutions.</p>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-display font-bold mb-2">Our Vision</h4>
                  <p className="text-sm text-zinc-500">To be the global leader in digital transformation and technological innovation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            subtitle="Our Expertise" 
            title="Comprehensive Tech Services" 
            centered 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading 
              subtitle="Portfolio" 
              title="Recent Success Stories" 
            />
            <a href="#" className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-2 group mb-12">
              View All Projects
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            subtitle="Our Team" 
            title="The Minds Behind Boyo Solution" 
            centered 
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-900/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading 
                subtitle="Contact Us" 
                title="Let's Start a Conversation" 
              />
              <p className="text-zinc-400 mb-10">
                Ready to transform your business? Reach out to us and let's discuss 
                how our technology solutions can help you achieve your goals.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <Mail className="text-emerald-400 w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-mono uppercase">Email</div>
                    <div className="text-zinc-200">info@boyosolution.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <Phone className="text-emerald-400 w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-mono uppercase">Phone</div>
                    <div className="text-zinc-200">+251 911 234 567</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <MapPin className="text-emerald-400 w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-mono uppercase">Location</div>
                    <div className="text-zinc-200">Addis Ababa, Ethiopia</div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-emerald-500/20 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-emerald-500/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-emerald-500/20 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-500 uppercase">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-500 uppercase">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-500 uppercase">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-500 uppercase">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/20">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Logo />
            
            <div className="flex gap-8 text-sm text-zinc-500">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Cookie Policy</a>
            </div>
            
            <div className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Boyo Solution Technology. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
