import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

export default function Home() {
  const projects = [
    {
      image: "/IMG_4418.jpeg",
      title: "CleaninBooking",
      text: "Bokningssystem för städföretag",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      image: "/IMG_4408.jpeg",
      title: "GymTracker",
      text: "Träningsapp med statistik & planer",
      tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    },
    {
      image: "/project-3.png",
      title: "AI Chat Platform",
      text: "AI chattplattform med modern UI",
      tags: ["Next.js", "OpenAI API", "Tailwind CSS"],
    },
  ];

  const values = [
    {
      icon: "⚡",
      title: "Snabba leveranser",
      text: "Effektiva processer och snabb leverans.",
    },
    {
      icon: "</>",
      title: "Modern kod",
      text: "Ren, skalbar och hållbar kod.",
    },
    {
      icon: "📱",
      title: "Mobilanpassat",
      text: "Alla lösningar är 100% responsiva.",
    },
    {
      icon: "🛡️",
      title: "Säkra lösningar",
      text: "Säkerhet och prestanda i fokus.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#020714] text-white">
      <nav className="border-b border-white/10 bg-[#050914]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <div className="text-2xl font-black">
            lever<span className="text-blue-400">.cloud</span>
          </div>

          <div className="hidden gap-10 text-sm font-semibold text-white/80 md:flex">
  <a href="#">Hem</a>

  <a
    href="/projects"
    className="transition hover:text-blue-400"
  >
    Projekt
  </a>

  <a href="/about">Om mig</a>

  <a href="/services">Tjänster</a>

  <a href="/contact">Kontakt</a>
</div>
         <a
  href="/contact"
  className="rounded-2xl border border-blue-400 px-6 py-3 text-sm font-bold shadow-[0_0_20px_rgba(59,130,246,0.45)] hover:bg-blue-500/10"
>
  Kontakta mig
</a>
        </div>
      </nav>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-8 py-20 md:grid-cols-2">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Premium digitala lösningar för smarta företag
            </div>

            <h1 className="max-w-2xl text-6xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Bygg ett företag som känns{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent">
                professionellt.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              lever.cloud bygger moderna bokningssystem, premium hemsidor och
              digitala lösningar som får ditt företag att växa. Rent, snabbt och
              skräddarsytt för dig.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="/projects"
                className="rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold shadow-[0_0_30px_rgba(37,99,235,0.55)] hover:bg-blue-500"
              >
                Se mina projekt →
              </a>

              <a
                href="/contact"
                className="rounded-xl border border-blue-400/50 px-7 py-4 text-sm font-bold hover:bg-blue-500/10"
              >
                Kontakta mig
              </a>
            </div>

            <div className="mt-8 flex gap-5">
              <a
                href="https://github.com/1LeandroLV"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-500/30 bg-white/5 text-2xl text-white shadow-[0_0_25px_rgba(37,99,235,0.35)] hover:bg-blue-500/20"
              >
                <FaGithub />
              </a>

              <a
                href="https://se.linkedin.com/in/leandro-v-37a970380"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-500/30 bg-white/5 text-2xl text-white shadow-[0_0_25px_rgba(37,99,235,0.35)] hover:bg-blue-500/20"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.instagram.com/1leandro.v"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-500/30 bg-white/5 text-2xl text-white shadow-[0_0_25px_rgba(37,99,235,0.35)] hover:bg-blue-500/20"
              >
                <FaInstagram />
              </a>

              <a
                href="mailto:dinmail@gmail.com"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-500/30 bg-white/5 text-2xl text-white shadow-[0_0_25px_rgba(37,99,235,0.35)] hover:bg-blue-500/20"
              >
                <MdEmail />
              </a>
            </div>
          </div>

          <div className="relative flex h-[540px] items-end justify-center">
            <div className="absolute bottom-10 h-[430px] w-[430px] rounded-[45%_55%_50%_50%] bg-gradient-to-br from-cyan-400 to-blue-700 shadow-[0_0_70px_rgba(14,165,233,0.55)]" />

            <div className="relative z-10 h-[500px] w-[430px] overflow-hidden rounded-[2rem] shadow-[0_0_60px_rgba(37,99,235,0.35)]">
              <Image
                src="/profile.png"
                alt="Leandro"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-b border-white/10 px-8 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
                Projekt
              </p>
              <h2 className="mt-4 text-4xl font-bold">Några utvalda projekt</h2>
            </div>

            <a
              href="/projects"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/10"
            >
              Se alla projekt
            </a>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="relative h-44 overflow-hidden rounded-xl bg-[#050b18]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="mt-5 text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{project.text}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-3 py-2 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-8 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
              Om mig
            </p>

            <h2 className="mt-4 max-w-lg text-4xl font-bold leading-tight">
              Jag bygger lösningar som gör skillnad.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-400">
              Mitt fokus är att skapa moderna, snabba och användarvänliga
              lösningar som hjälper företag att växa online.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold hover:bg-white/10"
            >
              Läs mer om mig →
            </a>
          </div>

          <div id="services" className="grid gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                  {value.icon}
                </div>

                <div>
                  <h3 className="font-bold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {value.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10 px-8 py-8">
        <div className="mx-auto flex max-w-7xl justify-between text-sm text-slate-500">
          <p>© 2025 lever.cloud. Alla rättigheter förbehållna.</p>

          <div className="flex gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-sm text-white hover:bg-blue-500/20"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-sm text-white hover:bg-blue-500/20"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-sm text-white hover:bg-blue-500/20"
            >
              <FaInstagram />
            </a>

            <a
              href="mailto:dinmail@gmail.com"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-sm text-white hover:bg-blue-500/20"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}