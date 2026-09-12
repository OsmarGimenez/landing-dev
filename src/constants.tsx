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

// `slug` apunta al glifo de marca en components/techIcons. Los que no tienen
// (Oracle, SQL Server y CI/CD no estan en simple-icons por marca registrada)
// caen al icono generico de `icon`.
//
// Los colores son los de cada marca, salvo cuatro que venian practicamente
// negros y desaparecian sobre el fondo oscuro: Django, SQLite y Flutter usan
// su tono claro oficial, y Next.js —cuya marca es monocroma— un gris neutro
// que se lee en ambos temas.
export const TECH_STACK = [
  {
    category: "Backend",
    icon: "Server",
    items: [
      { name: "PHP", slug: "php", icon: "Code2", color: "#777BB4" },
      { name: "Laravel", slug: "laravel", icon: "Zap", color: "#FF2D20" },
      { name: "Python", slug: "python", icon: "Terminal", color: "#3776AB" },
      { name: "Django", slug: "django", icon: "ShieldCheck", color: "#44B78B" },
      { name: "FastAPI", slug: "fastapi", icon: "Zap", color: "#05998B" },
      { name: "C#", slug: "dotnet", icon: "Code2", color: "#512BD4" },
      { name: "Java", slug: "openjdk", icon: "Coffee", color: "#F89820" },
      { name: "Spring Boot", slug: "springboot", icon: "Leaf", color: "#6DB33F" },
      { name: "Node.js", slug: "nodedotjs", icon: "Server", color: "#339933" }
    ]
  },
  {
    category: "Frontend",
    icon: "Layout",
    items: [
      { name: "TypeScript", slug: "typescript", icon: "Code2", color: "#3178C6" },
      { name: "JavaScript", slug: "javascript", icon: "Code2", color: "#F7DF1E" },
      { name: "React", slug: "react", icon: "Cpu", color: "#61DAFB" },
      { name: "Next.js", slug: "nextdotjs", icon: "Globe", color: "#9CA3AF" },
      { name: "Flutter", slug: "flutter", icon: "Layers", color: "#54C5F8" },
      { name: "Tailwind CSS", slug: "tailwindcss", icon: "Palette", color: "#06B6D4" }
    ]
  },
  {
    category: "Databases",
    icon: "Database",
    items: [
      { name: "PostgreSQL", slug: "postgresql", icon: "Database", color: "#4169E1" },
      { name: "Oracle", slug: null, icon: "Database", color: "#F80000" },
      { name: "SQL Server", slug: null, icon: "Database", color: "#CC2927" },
      { name: "MySQL", slug: "mysql", icon: "Database", color: "#4479A1" },
      { name: "SQLite", slug: "sqlite", icon: "Database", color: "#0F80CC" },
      { name: "Redis", slug: "redis", icon: "Zap", color: "#DC382D" }
    ]
  },
  {
    category: "DevOps & Tools",
    icon: "Terminal",
    items: [
      { name: "Docker", slug: "docker", icon: "Box", color: "#2496ED" },
      { name: "Linux", slug: "linux", icon: "Terminal", color: "#FCC624" },
      { name: "Git", slug: "git", icon: "GitBranch", color: "#F05032" },
      { name: "GitHub Actions", slug: "githubactions", icon: "Activity", color: "#2088FF" },
      { name: "CI/CD", slug: null, icon: "RefreshCw", color: "#9CA3AF" }
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
