import { ReactNode } from "react";
import { motion } from "motion/react";
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
  ExternalLink,
  ChevronRight
} from "lucide-react";

export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <img 
      src="/logo.png" 
      alt="Boyo Solution Logo" 
      className="h-10 w-auto brightness-0 invert" 
      referrerPolicy="no-referrer"
      onError={(e) => {
        const target = e.currentTarget as HTMLImageElement;
        target.style.display = 'none';
        const parent = target.parentElement;
        if (parent) {
          parent.innerHTML = `
            <div class="flex items-center gap-2">
              <div class="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-950 w-6 h-6"><path d="m13 2-2 2.5h3L12 7l2 2.5h-3L13 12"/><path d="M12 17h.01"/><path d="M11 21h2"/><path d="M15 13a6 6 0 1 0-6 0c0 1.3.6 2.4 1.5 3.2V21h3v-4.8c.9-.8 1.5-1.9 1.5-3.2z"/></svg>
              </div>
              <span class="text-xl font-display font-bold tracking-tight">
                BOYO<span class="text-emerald-500">SOLUTION</span>
              </span>
            </div>
          `;
        }
      }}
    />
  </div>
);

export const NavItem = ({ href, children }: { href: string; children: ReactNode }) => (
  <a 
    href={href} 
    className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors duration-200"
  >
    {children}
  </a>
);

export const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false 
}: { 
  title: string; 
  subtitle?: string; 
  centered?: boolean 
}) => (
  <div className={`mb-12 ${centered ? "text-center" : ""}`}>
    {subtitle && (
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-emerald-500 font-mono text-xs tracking-widest uppercase mb-2 block"
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-3xl md:text-4xl font-display font-bold"
    >
      {title}
    </motion.h2>
  </div>
);

export const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: any; 
  title: string; 
  description: string;
  key?: any;
}) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 rounded-2xl glass hover:border-emerald-500/50 transition-all duration-300 group"
  >
    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
      <Icon className="w-6 h-6 text-emerald-400" />
    </div>
    <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
    <p className="text-zinc-400 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

export const ProjectCard = ({ 
  title, 
  category, 
  image, 
  tags 
}: { 
  title: string; 
  category: string; 
  image: string; 
  tags: string[];
  key?: any;
}) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden rounded-2xl aspect-[4/3] glass"
  >
    <img 
      src={image} 
      alt={title} 
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
    <div className="absolute bottom-0 left-0 p-6 w-full">
      <span className="text-emerald-400 text-xs font-mono mb-2 block">{category}</span>
      <h3 className="text-xl font-display font-bold mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] px-2 py-1 rounded-full bg-white/10 border border-white/10 text-zinc-300">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export const TeamMember = ({ 
  name, 
  role, 
  image 
}: { 
  name: string; 
  role: string; 
  image: string;
  key?: any;
}) => (
  <div className="text-center group">
    <div className="relative mb-4 inline-block">
      <div className="absolute inset-0 bg-emerald-500 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
      <img 
        src={image} 
        alt={name} 
        className="w-32 h-32 rounded-full object-cover border-2 border-white/10 group-hover:border-emerald-500/50 transition-colors"
        referrerPolicy="no-referrer"
      />
    </div>
    <h4 className="text-lg font-display font-semibold">{name}</h4>
    <p className="text-sm text-zinc-500">{role}</p>
  </div>
);
