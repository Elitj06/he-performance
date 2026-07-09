import {
  Activity,
  Apple,
  Brain,
  CalendarCheck,
  ChartNoAxesCombined,
  ClipboardCheck,
  Dumbbell,
  HeartPulse,
  Instagram,
  MapPin,
  MessageCircle,
  Sparkles,
  Stethoscope,
  Target,
  Watch,
} from "lucide-react";

export const clinic = {
  name: "Clínica HE Performance",
  slogan: "Viva na sua melhor versão",
  area: "Saúde, Metabologia & Performance",
  address: "Av. Evandro Lins e Silva, 840, Barra da Tijuca, RJ",
  instagram: "@clinicaheperformance",
  phone: "(21) 98460-6091",
  whatsappUrl: "https://wa.me/5521984606091",
  instagramUrl: "https://www.instagram.com/clinicaheperformance/",
};

export const navItems = [
  { label: "Clínica", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Contato", href: "#contato" },
];

export const stats = [
  { value: "+130 mil", label: "pacientes atendidos" },
  { value: "21 anos", label: "de carreira médica" },
  { value: "360", label: "graus de avaliação" },
];

export const specialties = [
  {
    title: "Endocrinologia",
    description: "Investigação hormonal, metabolismo, energia e longevidade com planos médicos individualizados.",
    icon: Stethoscope,
  },
  {
    title: "Medicina Ortomolecular",
    description: "Equilíbrio bioquímico, suplementação estratégica e protocolos de alta precisão.",
    icon: Sparkles,
  },
  {
    title: "Medicina do Esporte",
    description: "Performance, recuperação, composição corporal e prevenção para treinar melhor.",
    icon: Dumbbell,
  },
  {
    title: "Nutrição",
    description: "Nutrição clínica e esportiva conectada à rotina real, aos exames e aos objetivos.",
    icon: Apple,
  },
  {
    title: "Avaliação 360",
    description: "Consulta ampla, exames, histórico, hábitos e metas para montar uma estratégia completa.",
    icon: ClipboardCheck,
  },
  {
    title: "Emagrecimento",
    description: "Acompanhamento multidisciplinar para perda de peso com saúde, consistência e manutenção.",
    icon: Target,
  },
];

export const processSteps = [
  {
    title: "Consulta",
    description: "Anamnese profunda, leitura de exames, composição corporal e objetivos de vida.",
    icon: CalendarCheck,
  },
  {
    title: "Protocolo",
    description: "Plano médico e nutricional personalizado, com metas claras e prioridades.",
    icon: HeartPulse,
  },
  {
    title: "Acompanhamento",
    description: "Lembretes, evolução, ajustes e organização do tratamento no portal.",
    icon: Watch,
  },
  {
    title: "Resultado",
    description: "Indicadores acompanhados com foco em energia, saúde metabólica e performance.",
    icon: ChartNoAxesCombined,
  },
];

export const technologyItems = [
  {
    title: "Prescrições organizadas",
    description: "IA para transformar orientações médicas e nutricionais em rotinas claras para o paciente.",
    icon: Brain,
  },
  {
    title: "Lembretes inteligentes",
    description: "Horários de suplementos, treinos, exames e retornos centralizados em uma experiência simples.",
    icon: Activity,
  },
  {
    title: "Acompanhamento contínuo",
    description: "Evolução, feedback e próximos passos com comunicação mais objetiva entre equipe e paciente.",
    icon: MessageCircle,
  },
];

export const team = [
  {
    name: "Dr. João Branco",
    role: "Diretor técnico, CRM-RJ 75572-9",
    description: "+130 mil pacientes atendidos e 21 anos de carreira em saúde, metabologia e performance.",
    image: "/team-dr-joao.jpg",
  },
  {
    name: "Renata Pigliasco Branco",
    role: "Nutricionista e sócia proprietária",
    description: "Nutrição clínica e esportiva para transformar estratégia em rotina sustentável.",
    image: "/team-renata.jpg",
  },
];

export const testimonials = [
  {
    quote: "A avaliação foi completa e conectou exames, rotina e objetivos de forma muito prática.",
    author: "Paciente HE",
  },
  {
    quote: "O acompanhamento trouxe clareza para alimentação, treino e suplementação.",
    author: "Paciente HE",
  },
  {
    quote: "Uma experiência premium, humana e focada em resultado de verdade.",
    author: "Paciente HE",
  },
];

export const contactItems = [
  { label: "Endereço", value: clinic.address, icon: MapPin },
  { label: "WhatsApp", value: clinic.phone, icon: MessageCircle },
  { label: "Instagram", value: clinic.instagram, icon: Instagram },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=82",
    alt: "Mulher treinando em ambiente de performance",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=82",
    alt: "Grupo diverso em treino funcional",
  },
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1400&q=82",
    alt: "Nutricionista avaliando paciente",
  },
  {
    src: "https://images.unsplash.com/photo-1559548331-f9cb98001426?auto=format&fit=crop&w=1400&q=82",
    alt: "Casal de idosos ativo e saudável",
  },
  {
    src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1400&q=82",
    alt: "Criança em atividade física",
  },
  {
    src: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1400&q=82",
    alt: "Atleta de escalada em desempenho",
  },
];
