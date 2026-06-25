import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      images: ["/IMG_4418.jpeg", "/project-4.png", "/IMG_4416.jpeg", "/IMG_4417.jpeg"],
      title: "Premium Landing Page",
      category: "Premium hemsida",
      text: "En premium startsida som får företaget att kännas modernt och professionellt direkt när kunden öppnar sidan. Perfekt för företag som vill sticka ut, bygga förtroende och få fler bokningar online.",
      tech: ["Next.js", "Tailwind CSS", "Design", "Responsive"],
    },
    {
      images: ["/IMG_4408.jpeg", "/IMG_4410.png", "/IMG_4411.jpeg", "/IMG_4412.jpeg"],
      title: "Admin Dashboard",
      category: "Adminsystem",
      text: "Ett internt adminsystem där företaget kan hantera bokningar, kunder, betalningar och personal på ett och samma ställe. Ger bättre struktur och sparar tid varje dag.",
      tech: ["Dashboard", "Supabase", "Admin", "Data"],
    },
    {
      images: ["/project-3.png", "/IMG_4413.png", "/IMG_4414.png"],
      title: "Smart Booking Flow",
      category: "Bokningsflöde",
      text: "Ett smart bokningsflöde där kunder enkelt kan välja tjänst, datum och skicka bokning direkt från mobilen. Snabbt, tydligt och byggt för att öka konverteringar.",
      tech: ["Booking", "Forms", "Mobile", "Automation"],
    },
    {
      images: ["/IMG_4419.jpeg", "/IMG_4420.jpeg", "/IMG_4421.jpeg", "/IMG_4422.jpeg"],
      title: "Employee System",
      category: "Personalsystem",
      text: "Ett personalsystem där anställda kan logga in, se sina jobb och hantera uppdrag direkt från mobilen. Perfekt för företag som vill växa och organisera sitt team bättre.",
      tech: ["Auth", "Employee", "Mobile", "Cloud"],
    },
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
            <Link href="/projects" className="text-blue-400">
              Projekt
            </Link>
            <Link href="/about">Om mig</Link>
            <Link href="/services">Tjänster</Link>
            <Link href="/contact">Kontakt</Link>
          </div>

        <Link
  href="/contact"
  className="hidden rounded-full border border-blue-500/50 px-5 py-2.5 text-sm font-bold shadow-[0_0_25px_rgba(37,99,235,0.45)] md:block"
>
  Kontakta mig →
</Link>
        </div>
      </nav>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-14 pt-20">
        <div className="max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-500">
            ● Projekt
          </p>

          <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Projekt byggda för{" "}
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              riktiga företag.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            Här visar jag exempel på premium hemsidor, bokningssystem,
            adminpaneler och personalsystem byggda med modern fullstack-teknik.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {projects.map((project, projectIndex) => (
            <section
              key={project.title}
              className="group overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_60px_rgba(37,99,235,0.08)] transition hover:border-blue-500/40 md:p-8"
            >
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-400">
                    {project.category}
                  </p>
                  <h2 className="mt-3 text-4xl font-black md:text-5xl">
                    {project.title}
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/40 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">
                  →
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {project.images.map((img, index) => (
                  <div
                    key={img}
                    className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#07101f] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ${
                      project.images.length === 3 && index === 2
                        ? "h-[320px] md:col-span-2 md:h-[430px]"
                        : "h-[320px] md:h-[380px]"
                    }`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.22),transparent_45%)]" />

                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      priority={projectIndex === 0 && index === 0}
                      className="object-contain p-5 transition duration-500 group-hover:scale-[1.03]"
                    />

                    <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-bold text-slate-300 backdrop-blur-xl">
                      0{index + 1}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[1.1fr_0.9fr]">
                <p className="text-lg leading-8 text-slate-400 md:text-xl">
                  {project.text}
                </p>

                <div className="flex flex-wrap gap-3 md:justify-end">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-8">
        <div className="grid items-center gap-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-600/15 via-white/[0.04] to-cyan-400/10 p-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-500">
              ● Live demo
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              Vill du se projektet live?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Testa en riktig demo av bokningssystemet, adminpanelen och
              företagsflödet som är byggt för riktiga småföretag.
            </p>

            <a
              href="https://cleanin-booking-api-ext3.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-2xl bg-blue-600 px-8 py-4 text-sm font-black shadow-[0_0_35px_rgba(37,99,235,0.6)] hover:bg-blue-500"
            >
              Öppna live demo →
            </a>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6 shadow-[0_0_70px_rgba(37,99,235,0.12)]">
            <div className="grid grid-cols-2 gap-4">
              {["Booking", "Admin", "Stripe", "Stats", "Users", "Cloud"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.05] p-5 text-center text-sm font-black"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}