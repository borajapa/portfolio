import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      skills: "Habilidades",
      projects: "Projetos",
      education: "Formação",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, me chamo",
      status: "Disponível para novos projetos & vagas",
      ctaProjects: "Explorar Projetos",
      ctaContact: "Entrar em Contato",
      ctaResume: "Baixar Currículo",
      experienceTag: "4+ anos atuando em sistemas corporativos",
      scrollHint: "Role para explorar",
    },
    about: {
      tag: "Trajetória & Diferencial",
      title: "Sobre Mim",
      subtitle: "Unindo engenharia de software rigorosa com visão analítica e de negócios",
      pillarsTitle: "Pilares de Atuação",
    },
    experience: {
      tag: "Carreira Profissional",
      title: "Experiência",
      subtitle: "Construindo e sustentando soluções escaláveis em ambientes de missão crítica",
      present: "Presente",
      keyHighlights: "Principais Entregas & Atuação:",
      techUsed: "Tecnologias Utilizadas",
    },
    skills: {
      tag: "Stack & Competências",
      title: "Habilidades Técnicas",
      subtitle: "Linguagens, frameworks, bancos de dados e ferramentas aplicadas na prática",
    },
    projects: {
      tag: "Portfólio de Trabalhos",
      title: "Projetos & Aplicações",
      subtitle: "Uma seleção de arquiteturas corporativas, produtos digitais e código aberto",
      all: "Todos",
      fullstack: "Full Stack",
      frontend: "Frontend",
      backend: "Backend",
      viewCode: "Código",
      viewDemo: "Demonstração",
      details: "Ver Detalhes",
    },
    education: {
      tag: "Conhecimento Contínuo",
      title: "Formação & Certificações",
      subtitle: "Bases sólidas em computação, raciocínio jurídico e especializações contínuas",
      languagesTitle: "Idiomas & Comunicação",
    },
    contact: {
      tag: "Conexão Direta",
      title: "Vamos Conversar?",
      subtitle: "Seja para uma nova oportunidade, parceria técnica ou troca de ideias, minhas portas estão abertas.",
      emailLabel: "Email Principal",
      copyEmail: "Copiar Email",
      copied: "Email Copiado com Sucesso! 🎉",
      locationLabel: "Localização",
      socialsLabel: "Redes & Código",
      sendMessage: "Enviar Mensagem via Email",
      footerText: "Projetado e desenvolvido por João Henrique Ferreira.",
      rightsReserved: "Todos os direitos reservados.",
    }
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      status: "Available for new projects & opportunities",
      ctaProjects: "Explore Projects",
      ctaContact: "Get in Touch",
      ctaResume: "Download CV",
      experienceTag: "4+ years engineering enterprise systems",
      scrollHint: "Scroll to explore",
    },
    about: {
      tag: "Background & Edge",
      title: "About Me",
      subtitle: "Merging robust software engineering with analytical precision and business insight",
      pillarsTitle: "Core Engineering Pillars",
    },
    experience: {
      tag: "Career Path",
      title: "Work Experience",
      subtitle: "Building and maintaining resilient solutions in mission-critical environments",
      present: "Present",
      keyHighlights: "Key Responsibilities & Deliveries:",
      techUsed: "Stack Used",
    },
    skills: {
      tag: "Stack & Competencies",
      title: "Technical Skills",
      subtitle: "Languages, frameworks, databases, and DevOps tools mastered through hands-on work",
    },
    projects: {
      tag: "Portfolio Showcase",
      title: "Projects & Applications",
      subtitle: "A curated selection of enterprise architectures, web apps, and open-source work",
      all: "All",
      fullstack: "Full Stack",
      frontend: "Frontend",
      backend: "Backend",
      viewCode: "Source Code",
      viewDemo: "Live Demo",
      details: "View Details",
    },
    education: {
      tag: "Lifelong Learning",
      title: "Education & Credentials",
      subtitle: "Solid grounding in computer science, legal reasoning, and specialized certifications",
      languagesTitle: "Languages & Communication",
    },
    contact: {
      tag: "Get in Touch",
      title: "Let's Connect",
      subtitle: "Whether you have an opportunity, a technical collaboration, or just want to talk code, feel free to reach out.",
      emailLabel: "Direct Email",
      copyEmail: "Copy Email",
      copied: "Email Copied to Clipboard! 🎉",
      locationLabel: "Location",
      socialsLabel: "Socials & Code",
      sendMessage: "Send Message via Email",
      footerText: "Engineered and crafted by João Henrique Ferreira.",
      rightsReserved: "All rights reserved.",
    }
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portfolio_lang') || 'pt';
  });

  const toggleLanguage = () => {
    setLang(prev => {
      const next = prev === 'pt' ? 'en' : 'pt';
      localStorage.setItem('portfolio_lang', next);
      return next;
    });
  };

  const setSpecificLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem('portfolio_lang', newLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setSpecificLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
