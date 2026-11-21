import Image from "next/image";
import Link from "next/link";

const deliverables = [
  {
    title: "Premium hemsida",
    text: "En modern hemsida som bygger förtroende direkt och får företaget att kännas seriöst, tydligt och bokningsbart.",
    points: ["Design som säljer", "Responsiv mobilanpassning", "Tydlig CTA"],
  },
  {
    title: "Bokningssystem",
    text: "Kunder kan boka tjänster själva online istället för att ni ska behöva ta allt manuellt via telefon och meddelanden.",
    points: ["Smidigt kundflöde", "Färre manuella steg", "Byggt för konvertering"],
  },
  {
    title: "Adminpanel",
    text: "Företaget får ett internt system där bokningar, kunder och betalningar kan hanteras på ett ställe.",
    points: ["Bättre struktur", "Tidsbesparing", "Mer kontroll"],
  },
  {
    title: "Personalsystem",
    text: "Anställda kan logga in, se jobb och arbeta i ett tydligare system som gör verksamheten enklare att växa.",
    points: ["Inloggning", "Jobböversikt", "Intern hantering"],
  },
];

const systems = [
  {
    name: "Premium Landing Page",
    desc: "För företag som vill kännas exklusiva, moderna och förtroendeingivande redan från första besöket.",
    tech: ["Next.js", "Tailwind CSS", "Responsive"],
  },
  {
    name: "Booking Flow",
    desc: "Ett bokningsflöde som gör det enkelt för kunder att välja tjänst, datum och skicka in bokning direkt online.",
    tech: ["Forms", "UX", "Conversion"],
  },
  {
    name: "Admin Dashboard",
    desc: "Intern överblick för att hantera bokningar, betalningar, kunder och andra viktiga delar av verksamheten.",
    tech: ["Dashboard", "Data", "Admin"],
  },
  {
    name: "Employee System",
    desc: "Ett personalsystem där teamet kan arbeta tydligare, se uppdrag och få bättre struktur i vardagen.",
    tech: ["Auth", "Cloud", "Mobile"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Förstå verksamheten",
    text: "Jag börjar med att förstå hur företaget jobbar idag, vad som tar tid och vad kunden faktiskt behöver.",
  },
  {
    number: "02",
    title: "Bygga lösningen",
    text: "Sedan bygger jag en lösning som inte bara ser bra ut, utan som också fungerar i praktiken för riktiga användare.",
  },
  {
    number: "03",
    title: "Lansera & förbättra",
    text: "När systemet är live kan det fortsätta utvecklas med fler funktioner, bättre flöden och smartare automation.",
  },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Stripe",
  "Webhooks",
  "Resend",
  "Vercel",
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030816] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(37,99,235,0.18),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(14,165,233,0.12),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.10),transparent_35%)]" />

      <nav className="relative z-10 border-b border-white/10 bg-[#030816]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-black tracking-tight">
            lever<span className="text-blue-500">.cloud</span>
          </Link>

          <div className="hidden gap-9 text-sm font-semibold text-white/70 md:flex">
            <Link href="/" className="transition hover:text-white">
              Hem
            </Link>

            <Link href="/projects" className="text-blue-400">
              Projekt
            </Link>

            <Link href="/about" className="transition hover:text-white">
              Om mig
            </Link>

            <Link href="/services" className="transition hover:text-white">
              Tjänster
            </Link>

            <Link href="/contact" className="transition hover:text-white">
              Kontakt
            </Link>
          </div>

          <Link
            href="/contact"
            className="hidden rounded-full border border-blue-500/50 px-5 py-2.5 text-sm font-bold shadow-[0_0_25px_rgba(37,99,235,0.35)] transition hover:bg-blue-600/10 md:block"
          >
            Kontakta mig →
          </Link>
        </div>
      </nav>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-14 pt-20 md:pt-24">
        <div className="max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-400">
            ● Projekt / Case Studies
          </p>

          <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Digitala system byggda för{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-300 to-blue-200 bg-clip-text text-transparent">
              riktiga företag.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            Här visar jag hur jag bygger mer än bara snygga sidor — jag bygger
            lösningar som hjälper företag att få fler bokningar, bättre struktur
            och en mer professionell digital närvaro.
          </p>
        </div>

        <section className="mt-16 overflow-hidden rounded-[2.5rem] border border-blue-500/20 bg-white/[0.04] shadow-[0_0_80px_rgba(37,99,235,0.10)]">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-7 md:p-10 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Live kundprojekt
              </div>

              <p className="mt-8 text-xs font-black uppercase tracking-[0.35em] text-blue-400">
                Case 01
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                K Golv & Städservice
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                En produktionssatt digital plattform byggd för ett riktigt
                företag — med premium hemsida, bokningsflöde, betalningar,
                adminfunktioner och interna system.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
                Målet var inte bara att företaget skulle se bättre ut online —
                utan att det skulle bli enklare att ta emot bokningar, hantera
                verksamheten och växa med bättre struktur.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.kgolvstadservice.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-2xl bg-blue-600 px-7 py-4 text-sm font-black shadow-[0_0_35px_rgba(37,99,235,0.45)] transition hover:-translate-y-1 hover:bg-blue-500"
                >
                  Besök hemsidan →
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-black text-slate-200 transition hover:border-blue-500/40 hover:bg-white/[0.06]"
                >
                  Vill ha något liknande
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <StatCard
                  title="Bokning"
                  text="Kunden kan boka direkt online."
                />

                <StatCard
                  title="Betalning"
                  text="Stripe-flöde för säkrare hantering."
                />

                <StatCard
                  title="Admin"
                  text="Intern kontroll över bokningar och data."
                />

                <StatCard
                  title="Team"
                  text="Grund för personal- och verksamhetsflöde."
                />
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 bg-[#07101f] p-4 sm:p-6 lg:border-l lg:border-t-0 lg:p-8">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a1427] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(37,99,235,0.18),transparent_40%)]" />

                <div className="relative aspect-[16/11]">
                  <Image
                    src="/kgolv-preview.png"
                    alt="K Golv & Städservice hemsida"
                    fill
                    priority
                    className="object-contain object-center p-3"
                  />
                </div>
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-400">
                  Projektfokus
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <MiniPoint text="Premium känsla" />
                  <MiniPoint text="Tydligare bokningar" />
                  <MiniPoint text="Företagsstruktur" />
                  <MiniPoint text="Modern digital närvaro" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-6">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-400">
            ● Vad jag bygger
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
            Lösningar som företag faktiskt kan använda.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Istället för att bara visa design visar jag också vilken nytta
            systemen skapar för verksamheten.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {deliverables.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_35px_rgba(37,99,235,0.06)]"
            >
              <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-400">
                Lösning
              </p>

              <h3 className="mt-4 text-2xl font-black">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {item.text}
              </p>

              <div className="mt-6 space-y-3">
                {item.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
                    <span className="text-sm text-slate-300">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-400">
            ● System & funktioner
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
            Exempel på vad som kan ingå i ett projekt.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Alla företag behöver inte exakt samma lösning. Därför bygger jag
            system utifrån behov — från enklare premium hemsidor till mer
            kompletta flöden.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {systems.map((item, index) => (
            <article
              key={item.name}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_0_35px_rgba(37,99,235,0.06)]"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-400">
                  0{index + 1}
                </p>

                <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-300">
                  Lever Cloud
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black">
                  {item.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-10">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-400">
            ● Process
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
            Från idé till fungerande system.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {processSteps.map((step) => (
            <article
              key={step.number}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-sm font-black text-blue-300">
                {step.number}
              </div>

              <h3 className="mt-6 text-2xl font-black">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-20">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-blue-600/15 via-white/[0.04] to-cyan-400/10 p-10 shadow-[0_0_60px_rgba(37,99,235,0.08)] md:p-14">
          <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-400">
                ● Nästa projekt
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
                Vill du ha något liknande för ditt företag?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Jag hjälper småföretag att få en mer professionell digital
                närvaro med hemsidor, bokningssystem och interna lösningar som
                faktiskt underlättar verksamheten.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 text-sm font-black shadow-[0_0_35px_rgba(37,99,235,0.45)] transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Kontakta mig →
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-black text-slate-200 transition hover:border-blue-500/40 hover:bg-white/[0.06]"
              >
                Se tjänster
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-5">
      <p className="text-sm font-black text-white">
        {title}
      </p>

      <p className="mt-2 text-sm leading-6 text-slate-400">
        {text}
      </p>
    </div>
  );
}

function MiniPoint({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200">
      {text}
    </div>
  );
}