import Link from "next/link";

export default function ServicesPage() {
  const process = [
    ["01", "Strategi", "Vi går igenom ditt företag, mål, problem och vad systemet ska lösa."],
    ["02", "Design", "Jag skapar en modern premium-design som känns seriös och enkel att använda."],
    ["03", "Utveckling", "Jag bygger lösningen med modern teknik, säker struktur och mobilanpassning."],
    ["04", "Lansering", "Systemet testas, optimeras och görs redo för riktiga kunder."],
  ];

  const services = [
    ["📅", "Bokningssystem", "Kunder bokar själva online. Du får struktur, mindre DM och bättre kontroll."],
    ["🌐", "Premium hemsidor", "Moderna hemsidor som bygger förtroende och gör besökare till kunder."],
    ["🖥️", "Adminpaneler", "Hantera bokningar, kunder, status, betalningar och verksamheten på ett ställe."],
    ["💳", "Betalningar", "Stripe checkout, betalstatus, kvitton och smartare betalflöden."],
    ["📊", "Dashboard & statistik", "Se siffror, bokningar och resultat tydligt så du kan ta bättre beslut."],
    ["⚙️", "Automatisering", "Automatiska flöden som sparar tid och minskar manuellt arbete."],
  ];

  const benefits = [
    ["⚡", "Snabbare flöden", "Kunder kan boka direkt utan onödigt krångel."],
    ["🛡️", "Säker grund", "Byggt med fokus på säkerhet och stabilitet."],
    ["📱", "Mobilanpassat", "Ser bra ut på mobil, surfplatta och dator."],
    ["🚀", "Skalbart", "Kan växa med företaget när behoven blir större."],
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#02050d] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(37,99,235,0.25),transparent_35%),radial-gradient(circle_at_10%_30%,rgba(14,165,233,0.12),transparent_30%)]" />

      <nav className="relative z-10 border-b border-white/10 bg-[#02050d]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-black">
            lever<span className="text-blue-500">.cloud</span>
          </Link>

          <div className="hidden gap-9 text-sm font-semibold text-white/70 md:flex">
            <Link href="/">Hem</Link>
            <Link href="/projects">Projekt</Link>
            <Link href="/about">Om mig</Link>
            <Link href="/services" className="text-blue-400">Tjänster</Link>
            <a href="#contact">Kontakt</a>
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-blue-500/50 px-5 py-2.5 text-sm font-bold shadow-[0_0_25px_rgba(37,99,235,0.45)] md:block"
          >
            Kontakta mig →
          </a>
        </div>
      </nav>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-14 pt-20 lg:grid-cols-2">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-500">
            ● Tjänster
          </p>

          <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Digitala lösningar som{" "}
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              säljer, bokar & växer.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Jag bygger premium hemsidor, bokningssystem och adminpaneler för
            småföretag som vill se mer professionella ut och jobba smartare.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-2xl bg-blue-600 px-7 py-4 text-sm font-black shadow-[0_0_40px_rgba(37,99,235,0.65)] hover:bg-blue-500"
            >
              Bygg mitt system →
            </a>

            <Link
              href="/projects"
              className="rounded-2xl border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-black hover:bg-white/[0.08]"
            >
              Se mina projekt
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
            {benefits.map(([icon, title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-4 font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[120px]" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_90px_rgba(37,99,235,0.22)]">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#07101f] p-6">
              <div className="flex items-center justify-between">
                <p className="font-black text-blue-400">Live Dashboard</p>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-400">
                  Online
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                {["32", "18 450 kr", "94%"].map((item, index) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <p className="text-2xl font-black">{item}</p>
                    <p className="mt-1 text-xs text-slate-400">
                      {index === 0 ? "Bokningar" : index === 1 ? "Intäkter" : "Kundnöjdhet"}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-br from-blue-600/40 to-cyan-400/10 p-5">
                <div className="flex h-44 items-end gap-3">
                  {[45, 70, 50, 90, 65, 100, 78].map((height, index) => (
                    <div
                      key={index}
                      style={{ height: `${height}%` }}
                      className="w-full rounded-t-xl bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.45)]"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {["Nya kunder", "Betalningar", "Admin", "Automatisering"].map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/[0.05] p-4 text-sm font-bold">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl border-t border-white/10 px-6 py-20">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-500">
          ● Så här jobbar jag
        </p>

        <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
          Från idé till färdig lösning — utan{" "}
          <span className="text-blue-500">krångel.</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {process.map(([number, title, text]) => (
            <div
              key={title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/40 bg-blue-500/10 text-lg font-black text-blue-400">
                {number}
              </div>
              <h3 className="mt-7 text-xl font-black">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl border-t border-white/10 px-6 py-20">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-500">
          ● Mina tjänster
        </p>

        <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
          Allt ditt företag behöver för att se{" "}
          <span className="text-blue-500">professionellt ut.</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map(([icon, title, text]) => (
            <div
              key={title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_50px_rgba(37,99,235,0.06)] transition hover:-translate-y-2 hover:border-blue-500/50 hover:bg-blue-500/[0.06]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-500/10 text-4xl shadow-[0_0_35px_rgba(37,99,235,0.25)]">
                {icon}
              </div>

              <h3 className="mt-8 text-2xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{text}</p>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-sm font-bold text-blue-400">Läs mer</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/40 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-8">
        <div className="grid items-center gap-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-600/15 via-white/[0.04] to-cyan-400/10 p-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-500">
              ● Redo?
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              Vill du att ditt företag ska kännas mer premium?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Då bygger vi en lösning som gör jobbet åt dig — bokningar,
              betalningar, struktur och en design som känns seriös.
            </p>

            <a
              href="mailto:contact@lever.cloud"
              className="mt-8 inline-flex rounded-2xl bg-blue-600 px-8 py-4 text-sm font-black shadow-[0_0_35px_rgba(37,99,235,0.6)] hover:bg-blue-500"
            >
              Kontakta mig idag →
            </a>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6 shadow-[0_0_70px_rgba(37,99,235,0.12)]">
            <div className="grid grid-cols-2 gap-4">
              {["Booking", "Admin", "Stripe", "Stats", "Users", "Cloud"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[0.05] p-5 text-center text-sm font-black"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}