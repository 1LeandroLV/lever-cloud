import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const stats = [
    ["🚀", "100%", "Fokus på kvalitet"],
    ["⚡", "Snabba", "Leveranstider"],
    ["🛡️", "Säkra", "System & data"],
    ["⭐", "Nöjda", "Kunder i fokus"],
  ];

  const cards = [
    ["🎯", "Mitt mål", "Att göra avancerad teknik enkel, tillgänglig och lönsam för småföretag."],
    ["</>", "Min styrka", "Backend, systemtänk och förmågan att bygga stabila helhetslösningar."],
    ["💙", "Min passion", "Att se företag växa med hjälp av smarta digitala lösningar jag bygger."],
  ];

  const services = [
    ["📅", "Bokningssystem", "Onlinebokning, smarta flöden och automatiska påminnelser."],
    ["🌐", "Premium hemsidor", "Snabba, responsiva och snygga hemsidor som konverterar besökare."],
    ["🖥️", "Adminpaneler", "Full kontroll över bokningar, kunder, betalningar och verksamheten."],
    ["👥", "Personal-system", "Anställda kan logga in, se sina uppdrag och rapportera direkt."],
    ["💳", "Betalningar", "Säkra betalningar med Stripe, kvitton och betalstatus."],
    ["📊", "Dashboard & statistik", "Få insikter, rapporter och översikt som hjälper dig ta bättre beslut."],
    ["📞", "Mobilanpassat", "Allt fungerar perfekt på mobil, surfplatta och dator."],
    ["✨", "Automatiserade flöden", "Mindre manuellt arbete, mer automation och nöjdare kunder."],
  ];

  const tech = [
    ["NX", "Next.js"],
    ["TS", "TypeScript"],
    ["⚛", "React"],
    ["〰", "Tailwind CSS"],
    ["▰", "Supabase"],
    ["S", "Stripe"],
    ["C#", "C# / .NET"],
    ["SQL", "SQL"],
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#02050d] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(37,99,235,0.22),transparent_35%),radial-gradient(circle_at_10%_10%,rgba(30,64,175,0.18),transparent_30%)]" />

      <nav className="relative z-10 border-b border-white/10 bg-[#02050d]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-black tracking-tight">
            lever<span className="text-blue-500">.cloud</span>
          </Link>

          <div className="hidden items-center gap-9 text-sm font-semibold text-white/70 md:flex">
            <Link className="hover:text-white" href="/">Hem</Link>
            <Link className="hover:text-white" href="/projects">Projekt</Link>
            <Link className="relative text-white" href="/about">
              Om mig
              <span className="absolute -bottom-3 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,1)]" />
            </Link>
            <Link className="hover:text-white" href="/services">
  Tjänster
</Link>
            <Link className="hover:text-white" href="/#contact">
  Kontakt
</Link>
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-blue-500/50 px-5 py-2.5 text-sm font-bold shadow-[0_0_25px_rgba(37,99,235,0.45)] transition hover:bg-blue-600/20 md:block"
          >
            Kontakta mig →
          </a>
        </div>
      </nav>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-12 pt-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-500">
            ● Om mig
          </p>

          <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Byggt av{" "}
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Leandro.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-xl font-bold leading-8 text-white">
            Backend Developer (Cloud) student som bygger moderna digitala
            lösningar för småföretag.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
            Jag hjälper företag att automatisera, förenkla och växa med
            skräddarsydda system som gör verklig skillnad – både för dem och
            deras kunder.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-2xl bg-blue-600 px-7 py-4 text-sm font-black shadow-[0_0_40px_rgba(37,99,235,0.65)] transition hover:bg-blue-500"
            >
              Låt oss bygga något tillsammans →
            </a>

            <Link
              href="/projects"
              className="rounded-2xl border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-black transition hover:bg-white/[0.08]"
            >
              Se mina projekt
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
            {stats.map(([icon, title, text]) => (
              <div key={title} className="flex items-center gap-3">
                <div className="text-2xl">{icon}</div>
                <div>
                  <h3 className="text-lg font-black">{title}</h3>
                  <p className="text-xs text-slate-400">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden justify-center lg:flex">
          <div className="absolute inset-0 rounded-[2rem] bg-blue-600/20 blur-[80px]" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_0_80px_rgba(37,99,235,0.25)]">
            <div className="relative h-[520px] w-[420px] overflow-hidden rounded-[1.6rem] bg-[#07101f]">
              <Image
                src="/profile.png"
                alt="Leandro"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-10 right-8 rounded-2xl border border-white/10 bg-black/75 px-5 py-4 shadow-2xl backdrop-blur-xl">
              <p className="text-sm font-black">
                <span className="text-emerald-400">●</span> Tillgänglig för nya projekt
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Svarar oftast inom några timmar
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-500">
            ● Min resa
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            Från nyfikenhet till lösningar som gör{" "}
            <span className="text-blue-500">skillnad.</span>
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Jag har alltid älskat att lösa problem och bygga saker som faktiskt
            används på riktigt. Med tiden insåg jag att många småföretag fastnar
            i gamla rutiner – manuella bokningar, rörig kommunikation och system
            som inte hänger ihop.
          </p>

          <p className="mt-4 leading-7 text-slate-400">
            Därför startade jag lever.cloud. För att hjälpa företag att få
            moderna system, bättre struktur och mer tid över till det som
            verkligen betyder något – deras kunder.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {cards.map(([icon, title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            >
              <div className="mb-7 text-3xl text-blue-400">{icon}</div>
              <h3 className="text-lg font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="relative z-10 mx-auto max-w-7xl px-6 py-12">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-500">
          ● Vad jag kan bygga
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
          Moderna lösningar som hjälper företag att{" "}
          <span className="text-blue-500">växa.</span>
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {services.map(([icon, title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.07]"
            >
              <div className="mb-4 text-2xl">{icon}</div>
              <h3 className="font-black">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-500">
          ● Teknik jag arbetar med
        </p>

        <h2 className="mt-4 text-3xl font-black md:text-4xl">
          Modern teknik. Stabil prestanda. Skalbart från dag ett.
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
          {tech.map(([short, name]) => (
            <div
              key={name}
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center text-sm font-black"
            >
              <span className="text-blue-400">{short}</span>
              {name}
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-8">
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] md:grid-cols-3">
          <div className="p-8">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-500">
              ● Varför lever.cloud?
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight">
              Jag bygger inte bara system. Jag bygger{" "}
              <span className="text-blue-500">förtroende.</span>
            </h2>

            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li>✓ Skräddarsydda lösningar för ditt företag</li>
              <li>✓ Fokus på kvalitet, säkerhet och prestanda</li>
              <li>✓ Tydlig kommunikation och snabb support</li>
              <li>✓ Bygger för långsiktigt samarbete</li>
            </ul>
          </div>

          <div className="border-y border-white/10 p-8 md:border-x md:border-y-0">
            <p className="text-5xl font-black text-blue-500">“</p>
            <p className="mt-2 text-lg font-semibold leading-8 text-slate-200">
              Mitt mål är enkelt: att ge småföretag samma möjligheter som stora
              företag – med smarta system som faktiskt sparar tid och skapar
              resultat.
            </p>
            <p className="mt-6 font-signature text-2xl text-blue-400">
              Leandro.
            </p>
          </div>

          <div className="relative min-h-[260px] overflow-hidden bg-[#050b17] p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(37,99,235,0.35),transparent_45%)]" />
            <div className="relative mx-auto mt-4 h-44 max-w-sm rounded-2xl border border-white/10 bg-[#081225] p-5 shadow-[0_0_50px_rgba(37,99,235,0.3)]">
              <div className="grid grid-cols-3 gap-3">
                {["Booking", "Admin", "Stripe", "Stats", "Users", "Cloud"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/[0.05] px-3 py-4 text-center text-xs font-bold text-slate-300"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl font-black">
              Redo att ta ditt företag till nästa nivå?
            </h2>
            <p className="mt-2 text-slate-400">
              Låt oss bygga ett system som jobbar för dig – inte tvärtom.
            </p>
          </div>

          <a
            href="mailto:contact@lever.cloud"
            className="rounded-2xl bg-blue-600 px-10 py-4 text-sm font-black shadow-[0_0_35px_rgba(37,99,235,0.55)] transition hover:bg-blue-500"
          >
            Kontakta mig idag →
          </a>
        </div>
      </section>
    </main>
  );
}