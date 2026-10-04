# João Henrique Ferreira — Developer Portfolio v2.0

> Modern, high-performance developer portfolio built with **Vite**, **React 18**, **Tailwind CSS**, and **Framer Motion**.

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

---

## ✨ Destaques & Features

- ⚡ **Ultra Rápido**: Migrado do antigo Create React App para **Vite 6** (build em ~3 segundos).
- 🌐 **Suporte Bilíngue (PT-BR / EN)**: Alternância instantânea de idioma com persistência no navegador.
- 🎨 **Design Minimalista Tech (Linear / Vercel style)**:
  - Fundo escuro refinado com grid sutil e ambient radial glows.
  - Header flutuante translúcido (*glassmorphism*) com indicador de seção ativa.
  - Micro-animações e transições suaves com **Framer Motion**.
- 💼 **Dados Reais & Estruturados**:
  - Trajetória em sistemas de missão crítica corporativos (**BB Seguros / MAPFRE** via **Coopersystem**).
  - Background multidisciplinar: **Direito (Advogado)** + **Ciência da Computação**.
  - Timeline interativa de experiência profissional.
  - Grade de competências técnicas categorizadas (Backend, Frontend, DevOps & Infra, Metodologias).
  - Projetos com filtro por categoria (Full Stack, Frontend, Backend), tags e links diretos para código e demo.
  - Seção de contato com cópia de email em 1 clique (com feedback em confetes) e links sociais.
- 🛠️ **Fácil Customização**: Todo o conteúdo e projetos são centralizados no arquivo modular `src/data/portfolioData.js`.

---

## 🚀 Como Executar Localmente

### 1. Clonar o repositório e instalar as dependências
```bash
git clone https://github.com/borajapa/portfolio.git
cd portfolio
npm install
```

### 2. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### 3. Build para produção
```bash
npm run build
```
Os arquivos otimizados serão gerados na pasta `build/`.

### 4. Testar o build de produção localmente
```bash
npm run preview
```

---

## 📁 Estrutura do Projeto

```
portfolio/
├── index.html                  # Entrypoint HTML com meta tags SEO & fontes Google
├── vite.config.js              # Configuração Vite & build
├── tailwind.config.js          # Configuração Tailwind & paleta dark customizada
├── postcss.config.js           # PostCSS com Tailwind & Autoprefixer
├── src/
│   ├── main.jsx                # Renderização raiz do React
│   ├── App.jsx                 # Componente principal com LanguageProvider
│   ├── index.css               # Diretivas Tailwind, animações e estilização base
│   ├── context/
│   │   └── LanguageContext.jsx # Gerenciamento de idioma (PT-BR / EN)
│   ├── data/
│   │   └── portfolioData.js    # Dados centralizados (Perfil, Experiência, Projetos, etc.)
│   └── components/
│       ├── Navbar.jsx          # Header flutuante glassmorphism & switcher de idioma
│       ├── Hero.jsx            # Seção hero com rotação dinâmica de papéis e CTAs
│       ├── About.jsx           # História, formação Direito + Computação e 4 pilares
│       ├── Experience.jsx      # Linha do tempo de carreira e principais entregas
│       ├── Skills.jsx          # Competências categorizadas com ícones técnicos
│       ├── Projects.jsx        # Cards de projetos com filtro por categoria
│       ├── Education.jsx       # Formação acadêmica, certificações e idiomas
│       ├── Contact.jsx         # Cartão de contato com copy email e confetes
│       └── Footer.jsx          # Rodapé minimalista com botão voltar ao topo
```

---

## 👤 Autor

**João Henrique Ferreira (borajapa)**
- **GitHub**: [@borajapa](https://github.com/borajapa)
- **LinkedIn**: [João Henrique](https://www.linkedin.com/in/ferreirajoaoh/)
