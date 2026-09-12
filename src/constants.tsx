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

// Los servicios ya no cargan una foto de stock: la ilustracion de cada tarjeta
// es un sol de ñanduti generado a partir del indice (ver components/Nanduti).
//
// Tampoco listan tecnologias. Al cliente le importa que problema le resolves,
// no con que lo construis, y el detalle tecnico ya tiene su propia seccion.
export const SERVICES = [
  {title: "Landing Pages", icon: "Globe", color: "cyan"},
  {title: "Web Catalogs", icon: "Layers", color: "indigo"},
  {title: "E-commerce Solutions", icon: "Rocket", color: "rose"},
  {title: "API Architectures", icon: "Server", color: "amber"},
  {title: "Database Optimization", icon: "Database", color: "emerald"},
  {title: "Automations & CI/CD", icon: "Zap", color: "sky"},
  {title: "Odoo ERP", icon: "Box", color: "violet"}
];

// Los tres pasos de "Como trabajo". El texto vive en las traducciones de
// App.tsx; aca solo el icono de cada paso.
export const PROCESS = [
  {icon: "MessageCircle"},
  {icon: "FileText"},
  {icon: "RefreshCw"}
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

// Formato internacional sin signos ni espacios: 595 (Paraguay) + 986544857.
export const WHATSAPP_NUMBER = "595986544857";

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
