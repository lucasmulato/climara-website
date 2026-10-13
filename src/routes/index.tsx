import { createFileRoute, Link } from "@tanstack/react-router";
import { SEEDS, WEEK } from "@/lib/sementeira";

export const Route = createFileRoute("/")({ component: Landing });

const MAIL = "mailto:climaratech@gmail.com";

function Wreath() {
  return (
    <svg viewBox="0 0 420 420" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
      <g fill="none" stroke="#1B4332" strokeWidth="1.2" opacity="0.35">
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
          const x = 210 + Math.cos(a) * 168;
          const y = 210 + Math.sin(a) * 168;
          const rot = (a * 180) / Math.PI + 90;
          return (
            <g key={i} transform={`translate(${x} ${y}) rotate(${rot})`}>
              <path d="M0-46 C18-28 22-8 0 18 C-22-8 -18-28 0-46Z" />
              <path d="M0-30 V8" stroke="#C08A5A" />
              <circle cx="-8" cy="-8" r="1.4" fill="#C08A5A" stroke="none" />
              <circle cx="8" cy="2" r="1.4" fill="#C08A5A" stroke="none" />
              <path d="M0-12 H-8 M0 0 H8" stroke="#C08A5A" />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 40 40" className="size-10" aria-hidden="true">
      <path d="M20 6c6 8 8 14 8 20a8 8 0 1 1-16 0c0-6 2-12 8-20z" fill="none" stroke="#1B4332" strokeWidth="1.4" />
      <path d="M20 14v16M16 20h8M15 17h3M22 24h3" fill="none" stroke="#C08A5A" strokeWidth="1.2" />
    </svg>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-menta text-texto">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <a href="#topo" className="font-display text-2xl text-floresta">
          Climara
        </a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#servicos" className="hidden text-floresta sm:inline">
            Serviços
          </a>
          <a href="#semana" className="hidden text-floresta sm:inline">
            Semana
          </a>
          <Link to="/servicos" className="min-h-11 rounded-xl px-3 py-2 text-floresta">
            Serviços
          </Link>
        </nav>
      </header>

      <section id="topo" className="relative mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6">
        <div className="relative mx-auto flex min-h-[28rem] max-w-3xl flex-col items-center justify-center text-center">
          <Wreath />
          <img
            src="/climara-mark.jpg"
            alt="Marca Climara"
            className="relative z-10 h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
          />
          <p className="relative z-10 mt-6 text-xs font-medium tracking-[0.22em] text-gold-deep uppercase">
            Jaraguá do sul · Energia limpa
          </p>
          <h1 className="relative z-10 mt-3 max-w-xl text-4xl leading-tight sm:text-6xl">
            O futuro não será distópico. Será plantado.
          </h1>
          <p className="relative z-10 mt-4 max-w-xl text-base leading-relaxed text-texto">
            Tecnologia climática acessível para a casa, o pequeno comércio e o bairro. Reduzir a conta.
            Sem jargão. Sem greenwashing.
          </p>
          <div className="relative z-10 mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={MAIL}
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-floresta px-8 text-sm font-medium text-paper transition duration-300 hover:bg-floresta-claro"
            >
              Falar com a Climara
            </a>
            <a
              href="#servicos"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-cobre bg-transparent px-8 text-sm font-medium text-floresta transition duration-300 hover:bg-paper"
            >
              Ver caminhos
            </a>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-3 sm:px-6">
          {[
            ["Transparência", "Erramos rápido, falamos em 24h e corrigimos junto. Verdade acima de crescimento."],
            ["Feito é melhor", "Um protótipo em duas semanas move mais que um plano perfeito em dois meses."],
            ["Lucro que regenera", "Negócio saudável sustenta planeta saudável. Começamos no telhado e na tomada."],
          ].map(([title, body]) => (
            <article
              key={title}
              className="rounded-xl border-t-[3px] border-cobre bg-paper p-6 shadow-[0_4px_20px_rgba(27,67,50,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(27,67,50,0.12)]"
            >
              <LeafIcon />
              <h2 className="mt-3 text-2xl">{title}</h2>
              <p className="mt-2 max-w-prose text-sm leading-relaxed">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="servicos" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-4xl">Três caminhos. Escolhe dois.</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed">
          Parcerias reais de energia solar para gerar caixa agora, sem inventar número.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {SEEDS.map((seed) => (
            <article
              key={seed.id}
              className="flex flex-col rounded-xl border-t-[3px] border-cobre bg-paper p-6 shadow-[0_4px_20px_rgba(27,67,50,0.08)]"
            >
              <p className="w-fit rounded-full bg-cobre/15 px-3 py-1 text-xs font-medium text-gold-deep">
                {seed.commission}
              </p>
              <h3 className="mt-4 text-2xl">{seed.name}</h3>
              <p className="mt-2 text-sm">{seed.model}</p>
              <p className="mt-3 text-sm text-ink-soft">{seed.fit}</p>
              <a
                href={seed.href}
                target="_blank"
                rel="noreferrer"
                className="mt-auto pt-6 text-sm font-medium text-gold-deep underline-offset-4 hover:underline"
              >
                Abrir parceria
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="semana" className="bg-paper py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-4xl">Plano desta semana</h2>
          <ol className="relative mt-8 border-l border-dashed border-cobre pl-8">
            {WEEK.map((day) => (
              <li key={day.id} className="relative pb-8 last:pb-0">
                <span className="absolute -left-[2.35rem] top-1 size-4 rounded-full border-2 border-cobre bg-paper" />
                <h3 className="text-xl">{day.label}</h3>
                <p className="mt-1 max-w-prose text-sm leading-relaxed">{day.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-4xl">Bora plantar?</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed">
          Casa, comércio ou equipe. A transição acontece no bairro, não no slide.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={MAIL}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-floresta px-8 text-sm font-medium text-paper transition duration-300 hover:bg-floresta-claro"
          >
            Escrever para climaratech@gmail.com
          </a>
          <Link
            to="/servicos"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-cobre px-8 text-sm font-medium text-floresta"
          >
            Central de operações
          </Link>
        </div>
      </section>

      <footer className="bg-floresta px-4 py-10 text-menta sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-2xl text-paper">Climara</p>
            <p className="mt-1 max-w-md text-sm text-menta">
              Laboratório de futuros regenerativos. Jaraguá do sul.
            </p>
          </div>
          <a href={MAIL} className="text-sm text-cobre-claro">
            climaratech@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}
