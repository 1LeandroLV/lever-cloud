"use client";

import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
export default function Home() {
const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
  {
    image: "/IMG_4418.jpeg",
    title: "CleanBook – K Golv & Städservice",
    text: "Komplett bokningssystem för städföretag med kundbokning, adminpanel och betalningsflöde.",
    tags: ["Next.js", "TypeScript", "Stripe"],
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
    <main className="min-h-screen overflow-x-hidden bg-[#020714] text-white">
      <nav className="border-b border-white/10 bg-[#050914]">
  <div className="mx-auto max-w-7xl px-8 py-6">
    <div className="flex items-center justify-between">
      <div className="text-2xl font-black">
        lever<span className="text-blue-400">.cloud</span>
      </div>

      <div className="hidden gap-6 text-sm font-semibold text-white/80 md:flex">
        <a href="/">Hem</a>
        <a href="/projects" className="transition hover:text-blue-400">Projekt</a>
        <a href="/about">Om mig</a>
        <a href="/services">Tjänster</a>
        <a href="/contact">Kontakt</a>
      </div>

      <a
        href="/contact"
        className="hidden rounded-2xl border border-blue-400 px-6 py-3 text-sm font-bold shadow-[0_0_20px_rgba(59,130,246,0.45)] hover:bg-blue-500/10 sm:block"
      >
        Kontakta mig
      </a>

         <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="rounded-xl border border-white/15 px-4 py-2 text-xl text-white md:hidden"
  aria-label="Öppna meny"
>
  {menuOpen ? "×" : "☰"}
</button>  
    </div>
{menuOpen && (
  <div className="mt-6 grid gap-3 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5 text-sm font-semibold text-white/80 md:hidden">
   <a href="/" className="rounded-xl bg-white/5 p-4">🏠 Hem</a>
<a href="/projects" className="rounded-xl bg-white/5 p-4">📁 Projekt</a>
<a href="/about" className="rounded-xl bg-white/5 p-4">👤 Om mig</a>
<a href="/services" className="rounded-xl bg-white/5 p-4">🚀 Tjänster</a>
<a href="/contact" className="rounded-xl bg-blue-500 p-4 text-white">✉️ Kontakt</a>
  </div>
)}
   </div> 
</nav>
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-8 py-20 md:grid-cols-2">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Premium digitala lösningar för smarta företag
            </div>

          <h1 className="max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-5xl md:text-7xl"> 
              Bygg ett företag som känns{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent">
                professionellt.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-8 text-slate-300 sm:max-w-xl sm:text-lg">
              lever.cloud bygger moderna bokningssystem, premium hemsidor och
              digitala lösningar som får ditt företag att växa. Rent, snabbt och
              skräddarsytt för dig.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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
                href="mailto:leandro.lever.cloud@gmail.com"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-500/30 bg-white/5 text-2xl text-white shadow-[0_0_25px_rgba(37,99,235,0.35)] hover:bg-blue-500/20"
              >
                <MdEmail />
              </a>
            </div>
          </div>

          <div className="relative flex h-[480px] items-center justify-center md:h-[540px]">
             

             <div className="relative z-10 h-[400px] w-[320px] overflow-hidden rounded-[2rem] shadow-[0_0_40px_rgba(37,99,235,0.25)] md:h-[500px] md:w-[430px] md:shadow-[0_0_60px_rgba(37,99,235,0.35)]">
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

          <div className="grid gap-7 md:grid-cols-1">
            {projects.map((project) => (
              <div
                key={project.title}
                className="max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-8"
              >
               

                <h3 className="mt-5 text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{project.text}</p>
                <a
  href="https://cleanin-booking-api-ext3.vercel.app"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-block rounded-xl bg-blue-500 px-4 py-2 text-white font-semibold"
>
  Besök hemsidan →
</a>

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
        Redo?
      </p>

      <h2 className="mt-4 max-w-lg text-4xl font-bold leading-tight">
        Redo att digitalisera ditt företag?
      </h2>

      <p className="mt-6 max-w-xl leading-8 text-slate-400">
        Jag bygger moderna hemsidor, bokningssystem och adminpaneler för företag
        som vill växa snabbare och se mer professionella ut.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="/contact"
          className="rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-400"
        >
          Kontakta mig →
        </a>

        <a
          href="/services"
          className="rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold hover:bg-white/10"
        >
          Se tjänster
        </a>
      </div>
    </div>

    <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8">
      <p className="text-sm uppercase tracking-widest text-blue-400">
        VARFÖR LEVER.CLOUD
      </p>

      <h3 className="mt-4 text-2xl font-bold">
        En kontaktperson. Ett komplett system.
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        Från första designen till färdig lansering bygger jag hela lösningen åt
        dig. Hemsida, bokningssystem, betalningar och administration på ett
        ställe.
      </p>
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