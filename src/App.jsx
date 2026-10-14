import { useState } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';

export default function App() {
  // Estado para alternar idioma na seção Sobre Mim (Requisito S01/S02)
  const [lang, setLang] = useState('pt');

  const aboutText = {
    pt: {
      role: 'Estudante de Engenharia de Software | Desenvolvedor Back-end & Fullstack',
      bio: 'Graduando em Engenharia de Software pela PUC Minas. Focado no desenvolvimento de aplicações web utilizando Java com Spring Boot no back-end e React no front-end, além de modelagem de bancos de dados SQL. Busco oportunidades de estágio e desenvolvimento de projetos reais para criar soluções escaláveis e bem arquitetadas.',
    },
    en: {
      role: 'Software Engineering Student | Back-end & Fullstack Developer',
      bio: 'Undergraduate Software Engineering student at PUC Minas. Focused on building web applications using Java with Spring Boot on the back-end and React on the front-end, alongside SQL database modeling. Seeking internship opportunities and challenging projects to build scalable, well-architected solutions.',
    }
  };

  // Linha do tempo de projetos: do mais antigo ao mais recente
  const projects = [
    {
      year: '2026.1',
      name: 'Horizon Parking',
      description: 'Sistema de gerenciamento de estacionamento com modelagem BPMN, banco de dados relacional normalizado (3FN) e aplicação em Java.',
      techs: ['Java', 'SQL', 'HTML/CSS', 'BPMN', 'UML'],
      github: 'https://github.com/seu-usuario/horizon-parking',
      image: 'https://placehold.co/600x350/1e293b/38bdf8?text=Horizon+Parking+Preview'
    },
    {
      year: '2026.2',
      name: 'Amparo.me (+ Saúde)',
      description: 'Portal web de comunicação em saúde focado em acessibilidade, estruturação de dados em JSON e interfaces intuitivas.',
      techs: ['HTML5', 'CSS3', 'JavaScript', 'JSON', 'Figma'],
      github: 'https://github.com/seu-usuario/amparo-me',
      image: 'https://placehold.co/600x350/1e293b/38bdf8?text=Amparo.me+Preview'
    },
    {
      year: '2026.2',
      name: 'SecureLoginPUC',
      description: 'Aplicação web fullstack com cadastro de usuários, autenticação segura, recuperação de senha por e-mail e interface dinâmica.',
      techs: ['Java', 'Spring Boot', 'Spring Security', 'Thymeleaf', 'HTML/CSS'],
      github: 'https://github.com/seu-usuario/secure-login-puc',
      image: 'https://placehold.co/600x350/1e293b/38bdf8?text=SecureLoginPUC+Preview'
    }
  ];

  const experiences = [
    {
      institution: 'PUC Minas',
      role: 'Graduando em Engenharia de Software',
      period: '2025 - Atual',
      description: 'Desenvolvimento de projetos práticos de arquitetura de software, aplicações web fullstack, modelagem de processos (BPMN) e bancos de dados.'
    },
    {
      institution: 'Projeto de Extensão Universitária',
      role: 'Autor — Projeto "Código da Rotina"',
      period: '2026',
      description: 'Elaboração de oficinas de organização de estudos e repetição espaçada voltadas para estudantes da rede pública.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* CABEÇALHO E MENU DE NAVEGAÇÃO */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur border-b border-slate-800">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-sky-400">Cesar Lacerda</span>
          <ul className="flex gap-6 text-sm font-medium text-slate-300">
            <li><a href="#sobre" className="hover:text-sky-400 transition">Sobre Mim</a></li>
            <li><a href="#projetos" className="hover:text-sky-400 transition">Projetos</a></li>
            <li><a href="#experiencias" className="hover:text-sky-400 transition">Experiências</a></li>
            <li><a href="#contato" className="hover:text-sky-400 transition">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* ÁREA DE CONTEÚDO PRINCIPAL */}
      <main className="flex-grow max-w-5xl w-full mx-auto px-6 py-12 space-y-24">
        
        {/* 1. SEÇÃO SOBRE MIM (PT / EN) */}
        <section id="sobre" className="scroll-mt-24">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-white">Sobre Mim</h1>
            <div className="flex gap-2">
              <button 
                onClick={() => setLang('pt')}
                className={`px-3 py-1 rounded text-xs font-semibold cursor-pointer ${lang === 'pt' ? 'bg-sky-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
              >
                PT-BR
              </button>
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded text-xs font-semibold cursor-pointer ${lang === 'en' ? 'bg-sky-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
              >
                EN-US
              </button>
            </div>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h2 className="text-xl font-semibold text-sky-400 mb-3">{aboutText[lang].role}</h2>
            <p className="text-slate-300 leading-relaxed mb-6">{aboutText[lang].bio}</p>
            <div className="flex flex-wrap gap-2">
              {['Java', 'Spring Boot', 'React', 'JavaScript', 'SQL', 'C/C++', 'HTML/CSS', 'Git'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-slate-800 text-sky-300 rounded-full text-xs font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 2. SEÇÃO PROJETOS (LINHA DO TEMPO) */}
        <section id="projetos" className="scroll-mt-24">
          <h2 className="text-3xl font-bold text-white mb-8">Projetos (Linha do Tempo)</h2>
          <div className="border-l-2 border-sky-500/40 pl-6 space-y-10">
            {projects.map((proj, idx) => (
              <div key={idx} className="relative bg-slate-900 p-6 rounded-2xl border border-slate-800 grid md:grid-cols-2 gap-6 items-center">
                <span className="absolute -left-[33px] top-6 w-4 h-4 rounded-full bg-sky-400 border-4 border-slate-950" />
                <div>
                  <span className="text-xs font-semibold text-sky-400">{proj.year}</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">{proj.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{proj.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.techs.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 bg-slate-800 text-slate-300 rounded text-xs">{t}</span>
                    ))}
                  </div>
                  <a href={proj.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-sky-400 hover:underline">
                    <Github size={16} /> Ver Repositório no GitHub <ExternalLink size={14} />
                  </a>
                </div>
                <img src={proj.image} alt={proj.name} className="rounded-lg border border-slate-800 w-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* 3. SEÇÃO EXPERIÊNCIAS */}
        <section id="experiencias" className="scroll-mt-24">
          <h2 className="text-3xl font-bold text-white mb-8">Experiências</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <span className="text-xs text-sky-400 font-semibold">{exp.period}</span>
                <h3 className="text-lg font-bold text-white mt-1">{exp.role}</h3>
                <p className="text-sm text-slate-400 font-medium mb-3">{exp.institution}</p>
                <p className="text-sm text-slate-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. SEÇÃO CONTATO */}
        <section id="contato" className="scroll-mt-24">
          <h2 className="text-3xl font-bold text-white mb-8">Contato</h2>
          <div className="grid md:grid-cols-2 gap-8 bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Redes e Canais Diretos</h3>
              <p className="text-slate-400 text-sm mb-6">
                Entre em contato pelas redes abaixo ou envie uma mensagem diretamente pelo formulário.
              </p>
              <div className="space-y-4">
                <a href="mailto:seuemail@dominio.com" className="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition">
                  <Mail size={20} className="text-sky-400" /> seuemail@dominio.com
                </a>
                <a href="https://wa.me/5531999999999" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition">
                  <Phone size={20} className="text-sky-400" /> WhatsApp
                </a>
                <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition">
                  <Linkedin size={20} className="text-sky-400" /> LinkedIn
                </a>
                <a href="https://github.com/seu-usuario" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition">
                  <Github size={20} className="text-sky-400" /> GitHub
                </a>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Nome</label>
                <input type="text" placeholder="Seu nome" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">E-mail</label>
                <input type="email" placeholder="seu@email.com" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Mensagem</label>
                <textarea rows="4" placeholder="Sua mensagem..." className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400"></textarea>
              </div>
              <button type="submit" className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold py-2.5 rounded-lg text-sm transition cursor-pointer">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* RODAPÉ */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © 2026 Cesar Lacerda — Engenharia de Software PUC Minas. Desenvolvido com React & Tailwind CSS.
      </footer>

    </div>
  );
}