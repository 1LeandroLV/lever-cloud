import Image from "next/image";

export default function Home() {
  const problems = [
    {
      title: "DM-kaos",
      text: "Kunder skriver på Instagram, tider glöms bort och allt blir svårt att hålla koll på.",
      icon: "💬",
    },
    {
      title: "Oprofessionell känsla",
      text: "Ett företag kan vara riktigt bra, men ändå tappa kunder om det ser rörigt ut online.",
      icon: "👤",
    },
    {
      title: "Ingen struktur",
      text: "Bokningar, personal, betalningar och kundinformation ligger på olika ställen.",
      icon: "📁",
    },
  ];

  const features = [
    ["▣", "Modern landningssida"],
    ["📅", "Onlinebokning"],
    ["☷", "Adminpanel"],
    ["👥", "Personal-login"],
    ["✓", "Betalstatus"],
    ["💳", "Stripe-betalning"],
    ["📍", "GPS check-in"],
    ["⚙", "Automatiserade flöden"],
  ];

  const projects = [
    {
      images: [
        "/IMG_4418.jpeg",
        "/project-4.png",
        "/IMG_4416.jpeg",
        "/IMG_4417.jpeg",
      ],
      title: "Premium Landing Page",
      text: "En premium startsida som får företaget att kännas modernt och professionellt direkt när kunden öppnar sidan. Perfekt för företag som vill sticka ut, bygga förtroende och få fler bokningar online.",
    },
    {
      images: [
        "/IMG_4408.jpeg",
        "/IMG_4410.png",
        "/IMG_4411.jpeg",
        "/IMG_4412.jpeg",
      ],
      title: "Admin Dashboard",
      text: "Ett internt adminsysten där företaget kan hantera bokningar, kunder, betalningar och personal på ett och samma ställe. Ger bättre struktur och sparar tid varje dag.",
    },
    {
      images: ["/project-3.png", "/IMG_4413.png", "/IMG_4414.png"],
      title: "Smart Booking Flow",
      text: "Ett smart bokningsflöde där kunder enkelt kan välja tjänst, datum och skicka bokning direkt från mobilen. Snabbt, tydligt och byggt för att öka konverteringar.",
    },
    {
      images: [
        "/IMG_4419.jpeg",
        "/IMG_4420.jpeg",
        "/IMG_4421.jpeg",
        "/IMG_4422.jpeg",
      ],
      title: "Employee System",
      text: "Ett personalsystem där anställda kan logga in, se sina jobb och hantera uppdrag direkt från mobilen. Perfekt för företag som vill växa och organisera sitt team bättre.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#020714] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_10%,rgba(37,99,235,0.45),transparent_35%),radial-gradient(circle_at_20%_30%,rgba(14,165,233,0.12),transparent_35%)]" />

      {/* NAVBAR */}
      <nav className="border-b border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-bold tracking-tight">
            lever<span className="text-blue-400">.cloud</span>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white/90 transition hover:border-blue-400 hover:bg-blue-500/10"
          >
            Kontakta mig
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 shadow-[0_0_35px_rgba(59,130,246,0.25)]">
          <span className="h-2 w-2 rounded-full bg-blue-400" />
          Premium digitala system för småföretag
        </div>

        <h1 className="mx-auto max-w-5xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
          Sluta ta bokningar via DM.
          <span className="mt-3 block bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
            Bygg ett företag som känns professionellt.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
          lever.cloud bygger moderna bokningssystem, premium hemsidor och
          digitala lösningar för småföretag som vill få bättre struktur, fler
          bokningar och en starkare online-närvaro.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-blue-500 px-7 py-4 text-sm font-bold text-white shadow-[0_0_35px_rgba(37,99,235,0.7)] transition hover:bg-blue-400"
          >
            Jag vill ha ett system →
          </a>

          <a
            href="#projects"
            className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:border-blue-400 hover:bg-blue-500/10"
          >
            Se projekt
          </a>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-y border-white/10 bg-black/20 px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-400">
            Problemet
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Känns detta igen?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-left shadow-[0_0_40px_rgba(37,99,235,0.08)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl text-blue-400">
                  {problem.icon}
                </div>

                <h3 className="text-xl font-bold">{problem.title}</h3>

                <p className="mt-3 leading-7 text-slate-400">{problem.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-400">
          Lösningen
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold md:text-5xl">
          System byggda för riktiga företag.
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {features.map(([icon, title]) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                {icon}
              </div>

              <h3 className="font-bold">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-y border-white/10 bg-black/20 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-400">
              Projekt
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Exempel på vad jag kan bygga.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-slate-400">
              Premium hemsidor, bokningssystem och adminpaneler byggda med
              modern fullstack-teknik.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition hover:border-blue-400/40"
              >
                <div className="bg-[#050b18] p-5">
                  <div className="grid grid-cols-2 gap-4">
                    {project.images.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${
                          project.images.length === 3 && imgIndex === 2
                            ? "col-span-2 h-52"
                            : "h-52"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${project.title} screenshot ${imgIndex + 1}`}
                          fill
                          className="object-contain p-5"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{project.title}</h3>

                  <p className="mt-3 text-slate-400">{project.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex justify-center">
            <div className="relative h-[350px] w-[280px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 shadow-[0_0_60px_rgba(37,99,235,0.25)]">
              <Image
                src="/profile.png"
                alt="Leandro"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-400">
              Om mig
            </p>

            <h2 className="mt-4 text-4xl font-black">Byggt av Leandro.</h2>

            <p className="mt-6 leading-8 text-slate-400">
              Backend Developer (Cloud) student med fokus på att bygga moderna
              digitala lösningar för småföretag.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              Jag bygger system som hjälper företag få bättre struktur,
              professionell online-närvaro och enklare bokningsflöden.
            </p>
          </div>
        </div>
      </section>

      {/* CUSTOM SYSTEMS */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 p-10 text-center shadow-[0_0_80px_rgba(37,99,235,0.12)] md:p-16">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-400">
            Flexibilitet
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Behöver du något helt annat?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            lever.cloud bygger inte bara bokningssystem.
            <br />
            Jag kan även bygga premium hemsidor, dashboards, interna
            företagssystem, kundportaler och skräddarsydda digitala lösningar
            för ditt företag.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {[
              "Premium hemsidor",
              "Dashboards",
              "Kundportaler",
              "Adminsystem",
              "Automation",
              "Custom systems",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 py-24 text-center">
        <h2 className="text-4xl font-black md:text-5xl">
          Vill du bygga något liknande?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-slate-400">
          Kontakta lever.cloud så bygger vi en modern lösning för ditt företag.
        </p>

        <a
          href="mailto:contact@lever.cloud"
          className="mt-9 inline-flex rounded-full bg-blue-500 px-8 py-4 text-sm font-bold text-white shadow-[0_0_35px_rgba(37,99,235,0.7)]"
        >
          Kontakta lever.cloud
        </a>
      </section>
    </main>
  );
}