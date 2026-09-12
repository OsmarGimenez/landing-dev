import { 
  Code2, 
  Server, 
  Database, 
  Terminal, 
  Layers, 
  Cpu, 
  Globe, 
  Github, 
  Linkedin, 
  Mail, 
  MessageCircle,
  MapPin, 
  ExternalLink, 
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Zap,
  ArrowRight,
  Lock,
  Sun,
  Moon,
  Target,
  Brain,
  Lightbulb,
  FileText,
  Download,
  Coffee,
  Leaf,
  Palette,
  Box,
  GitBranch,
  Activity,
  RefreshCw,
  Braces,
  Layout
} from 'lucide-react';

export const ICONS = {
  Code2,
  Server,
  Database,
  Terminal,
  Layers,
  Cpu,
  Globe,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Zap,
  ArrowRight,
  Lock,
  Sun,
  Moon,
  Target,
  Brain,
  Lightbulb,
  FileText,
  Download,
  Coffee,
  Leaf,
  Palette,
  Box,
  GitBranch,
  Activity,
  RefreshCw,
  Braces,
  Layout
};

export const SERVICES = [
  {
    title: "Landing Pages",
    description: "High-conversion landing pages designed for speed and impact.",
    icon: "Globe",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    mockup: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    color: "cyan"
  },
  {
    title: "Web Catalogs",
    description: "Professional digital catalogs to showcase your products effectively.",
    icon: "Layers",
    tags: ["Next.js", "Flutter Web"],
    mockup: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    color: "indigo"
  },
  {
    title: "E-commerce Solutions",
    description: "Full shopping cycles and scalable online stores.",
    icon: "Rocket",
    tags: ["React", "Stripe/Payments", "Node.js"],
    mockup: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    color: "rose"
  },
  {
    title: "API Architectures",
    description: "Secure and scalable backends for your applications.",
    icon: "Server",
    tags: ["Laravel", "Python", "C#", "Java"],
    mockup: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    color: "amber"
  },
  {
    title: "Database Optimization",
    description: "High-performance data management and integrity.",
    icon: "Database",
    tags: ["PostgreSQL", "MySQL", "Oracle", "SQL Server"],
    mockup: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=800&q=80",
    color: "emerald"
  },
  {
    title: "Automations & CI/CD",
    description: "Efficiency and reliable software delivery.",
    icon: "Zap",
    tags: ["Docker", "GitHub Actions", "Linux", "CI/CD"],
    mockup: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    color: "sky"
  },
  {
    title: "Odoo ERP",
    description: "Odoo implementation and integrations for growing businesses.",
    icon: "Box",
    tags: ["Odoo", "Python", "PostgreSQL", "n8n"],
    mockup: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
    color: "violet"
  }
];

export const WHY_ME = [
  {
    title: "Experience",
    icon: "ShieldCheck",
  },
  {
    title: "Delivered Projects",
    icon: "Rocket",
  },
  {
    title: "Full-Stack Versatility",
    icon: "Layers",
  },
  {
    title: "Strategic Problem Solver",
    icon: "Brain",
  }
];

export const TECH_STACK = [
  {
    category: "Backend",
    icon: "Server",
    items: [
      { name: "PHP", icon: "Code2", color: "#777BB4" },
      { name: "Laravel", icon: "Zap", color: "#FF2D20" },
      { name: "Python", icon: "Terminal", color: "#3776AB" },
      { name: "Django", icon: "ShieldCheck", color: "#092E20" },
      { name: "FastAPI", icon: "Zap", color: "#05998B" },
      { name: "C#", icon: "Code2", color: "#239120" },
      { name: "Java", icon: "Coffee", color: "#007396" },
      { name: "Spring Boot", icon: "Leaf", color: "#6DB33F" },
      { name: "Node.js", icon: "Server", color: "#339933" }
    ]
  },
  {
    category: "Frontend",
    icon: "Layout",
    items: [
      { name: "TypeScript", icon: "Code2", color: "#3178C6" },
      { name: "JavaScript", icon: "Code2", color: "#F7DF1E" },
      { name: "React", icon: "Cpu", color: "#61DAFB" },
      { name: "Next.js", icon: "Globe", color: "#000000" },
      { name: "Flutter", icon: "Layers", color: "#02569B" },
      { name: "Tailwind CSS", icon: "Palette", color: "#06B6D4" }
    ]
  },
  {
    category: "Databases",
    icon: "Database",
    items: [
      { name: "PostgreSQL", icon: "Database", color: "#4169E1" },
      { name: "Oracle", icon: "Database", color: "#F80000" },
      { name: "SQL Server", icon: "Database", color: "#CC2927" },
      { name: "MySQL", icon: "Database", color: "#4479A1" },
      { name: "SQLite", icon: "Database", color: "#003B57" },
      { name: "Redis", icon: "Zap", color: "#DC382D" }
    ]
  },
  {
    category: "DevOps & Tools",
    icon: "Terminal",
    items: [
      { name: "Docker", icon: "Box", color: "#2496ED" },
      { name: "Linux", icon: "Terminal", color: "#FCC624" },
      { name: "Git", icon: "GitBranch", color: "#F05032" },
      { name: "GitHub Actions", icon: "Activity", color: "#2088FF" },
      { name: "CI/CD", icon: "RefreshCw", color: "#000000" }
    ]
  }
];

// TODO: completar con tu numero en formato internacional sin signos, ej: "595981123456".
// Mientras este vacio, el boton de WhatsApp no se renderiza.
export const WHATSAPP_NUMBER = "";

export const WHATSAPP_MESSAGE =
  "Hola Osmar, vi tu sitio y quiero consultarte por un proyecto.";

export const WHATSAPP_URL = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  : "";

export const CONTACT_INFO = {
  name: "Osmar Gimenez",
  email: "osmar_gimenez@outlook.com",
  linkedin: "https://www.linkedin.com/in/osmar-gimenez-5971b0187/",
  location: "Paraguay (Remote Available)",
  whatsapp: WHATSAPP_URL
};
