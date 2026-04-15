'use client'

import Link from "next/link";
import { MdArrowBack, MdPrint } from "react-icons/md";

export default function CVPage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") window.print();
  };

  return (
    <body className="cv-body">
      <div className="cv-toolbar print:hidden">
        <Link href="/" className="cv-back">
          <MdArrowBack /> <span>Voltar ao portfólio</span>
        </Link>
        <button onClick={handlePrint} className="cv-print">
          <MdPrint /> <span>Baixar PDF / Imprimir</span>
        </button>
      </div>

      <main className="cv-page">
        <header className="cv-header">
          <div>
            <h1>João Victor Macedo</h1>
            <p className="cv-role">
              Full Stack Developer — React Native · NestJS · Node.js · TypeScript
            </p>
          </div>
          <div className="cv-contact">
            <div><span>Email</span><a href="mailto:joao.espmacedo@gmail.com">joao.espmacedo@gmail.com</a></div>
            <div><span>Localização</span><span>Brasília · DF · Brasil</span></div>
            <div><span>LinkedIn</span><a href="https://linkedin.com/in/joaoespmacedo" target="_blank" rel="noreferrer">/in/joaoespmacedo</a></div>
            <div><span>GitHub</span><a href="https://github.com/espindolajv" target="_blank" rel="noreferrer">/espindolajv</a></div>
          </div>
        </header>

        <section className="cv-section">
          <h2><span>01</span> Perfil</h2>
          <p>
            Desenvolvedor full-stack, 23 anos, formado em <em>Análise e Desenvolvimento de Sistemas</em> pelo UniCEUB.
            Atuo do front ao back — com React, React Native, Next.js, TypeScript, Node.js, NestJS e C# (.NET) — com
            atenção a arquitetura, performance e experiência do usuário. Interesse ativo em IA aplicada ao produto
            (LLMs, RAG, vector DBs).
          </p>
        </section>

        <section className="cv-section">
          <h2><span>02</span> Experiência</h2>

          <article className="cv-job">
            <div className="cv-job-head">
              <div>
                <h3>Desenvolvedor Fullstack Pleno</h3>
                <p className="cv-company">MV Gois · Brasília, DF</p>
              </div>
              <p className="cv-period">Fev 2026 — Presente</p>
            </div>
            <ul>
              <li>Arquitetura e escalabilidade em aplicações web e mobile (React, React Native, Nest.js, Next.js, Vite).</li>
              <li>Mentoria técnica a desenvolvedores juniores e padronização de código.</li>
              <li>Integração de CI/CD, testes automatizados e monitoramento para otimizar o ciclo de entrega.</li>
              <li>Liderança em refatorações estruturais e evoluções tecnológicas.</li>
              <li>Colaboração com stakeholders multidisciplinares alinhando decisões técnicas e estratégicas.</li>
            </ul>
          </article>

          <article className="cv-job">
            <div className="cv-job-head">
              <div>
                <h3>Desenvolvedor Fullstack Jr</h3>
                <p className="cv-company">MV Gois · Brasília, DF</p>
              </div>
              <p className="cv-period">Jun 2024 — Jan 2026</p>
            </div>
            <ul>
              <li>Features em React, React Native, Nest.js, Next.js e Vite.</li>
              <li>Refatoração de código legado, ganhos de legibilidade e redução de bugs.</li>
              <li>Otimização de performance e escalabilidade em aplicações fullstack.</li>
              <li>Testes automatizados com Jest, Vitest e Cypress.</li>
            </ul>
          </article>

          <article className="cv-job">
            <div className="cv-job-head">
              <div>
                <h3>Estagiário de TI</h3>
                <p className="cv-company">Instituto Superior CONAMAD · Brasília, DF</p>
              </div>
              <p className="cv-period">Jan 2023 — Dez 2023</p>
            </div>
            <ul>
              <li>Manutenção de sites, sistemas, diretórios e infraestrutura.</li>
              <li>Administração Microsoft e utilização da plataforma Azure.</li>
              <li>Gerenciamento de processos, análise de dados e suporte ao usuário.</li>
            </ul>
          </article>
        </section>

        <section className="cv-section">
          <h2><span>03</span> Projetos selecionados</h2>

          <article className="cv-project">
            <div className="cv-project-head">
              <h3>Matchmania</h3>
              <p className="cv-period">2025 · Freelance · Publicado na Play Store</p>
            </div>
            <p>
              App mobile que conecta gamers para desafios com apostas em coins, com loja de resgate de prêmios reais
              e painel admin para moderação. <strong>Stack:</strong> React Native, TypeScript, Node.js, NestJS, PostgreSQL.
            </p>
          </article>

          <article className="cv-project">
            <div className="cv-project-head">
              <h3>Plann</h3>
              <p className="cv-period">2024 · Projeto pessoal</p>
            </div>
            <p>
              Aplicativo de planejamento minimalista — listas, grupos e foco em uma tarefa por vez.
              <strong> Stack:</strong> Next.js, React, TypeScript, Tailwind.
            </p>
          </article>

          <article className="cv-project">
            <div className="cv-project-head">
              <h3>Petzone</h3>
              <p className="cv-period">2024 · Acadêmico</p>
            </div>
            <p>
              Plataforma veterinária ponta-a-ponta: agenda, prontuários, gestão de clientes e perfis para profissionais.
              <strong> Stack:</strong> Next.js, TypeScript, Node.js, Tailwind, PostgreSQL.
            </p>
          </article>
        </section>

        <section className="cv-section">
          <h2><span>04</span> Stack</h2>
          <div className="cv-stack">
            <div>
              <h4>Frontend</h4>
              <p>React · Next.js · TypeScript · React Native · Tailwind · Angular · Vue.js</p>
            </div>
            <div>
              <h4>Backend</h4>
              <p>Node.js · NestJS · Fastify · Express · C# / .NET · REST / OpenAPI · WebSockets</p>
            </div>
            <div>
              <h4>Messaging</h4>
              <p>RabbitMQ · MQTT · Kafka</p>
            </div>
            <div>
              <h4>Data</h4>
              <p>PostgreSQL · MongoDB · Prisma · Redis · Firebase</p>
            </div>
            <div>
              <h4>Infra & DevOps</h4>
              <p>Docker · AWS (S3 · EC2 · Lambda) · GitHub Actions · Vercel · Linux</p>
            </div>
            <div>
              <h4>AI & Emerging</h4>
              <p>LLMs (OpenAI · Anthropic) · RAG · Vector DBs (pgvector) · LangChain · Prompt Engineering</p>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h2><span>05</span> Formação</h2>
          <div className="cv-edu">
            <div>
              <h3>Análise e Desenvolvimento de Sistemas</h3>
              <p>UniCEUB — Centro Universitário de Brasília</p>
            </div>
            <p className="cv-period">2022 — 2023</p>
          </div>
          <div className="cv-edu">
            <div>
              <h3>Desenvolvedor FullStack</h3>
              <p>OneBitCode</p>
            </div>
            <p className="cv-period">Out 2024</p>
          </div>
        </section>

        <section className="cv-section">
          <h2><span>06</span> Idiomas</h2>
          <p>Português (nativo) · Inglês (profissional) · Espanhol (leitura)</p>
        </section>

        <footer className="cv-footer">
          <span>João Victor Macedo</span>
          <span>joaoespmacedo.dev</span>
        </footer>
      </main>
    </body>
  );
}
