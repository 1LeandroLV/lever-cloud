"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const socials = [
    ["📧", "Email", "leandro.lever.cloud@gmail.com"],
    ["📱", "Instagram", "@lever.cloud"],
    ["💼", "Business", "Premium digital solutions"],
    ["⚡", "Svarstid", "Oftast inom några timmar"],
  ];

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("Skickar...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setStatus("Meddelandet är skickat ✅");
      setForm({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } else {
      setStatus("Något gick fel. Försök igen.");
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#02050d] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(37,99,235,0.25),transparent_35%),radial-gradient(circle_at_10%_30%,rgba(14,165,233,0.12),transparent_30%)]" />

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#02050d]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-black">
            lever<span className="text-blue-500">.cloud</span>
          </Link>

          <div className="hidden gap-9 text-sm font-semibold text-white/70 md:flex">
            <Link href="/">Hem</Link>
            <Link href="/projects">Projekt</Link>
            <Link href="/about">Om mig</Link>
            <Link href="/services">Tjänster</Link>

            <Link href="/contact" className="text-blue-400">
              Kontakt
            </Link>
          </div>

          <a
            href="mailto:leandro.lever.cloud@gmail.com"
            className="hidden rounded-full border border-blue-500/40 bg-white/[0.03] px-5 py-2.5 text-sm font-bold shadow-[0_0_25px_rgba(37,99,235,0.35)] md:block"
          >
            Kontakta mig →
          </a>
        </div>
      </nav>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-20 lg:grid-cols-2">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-500">
            ● Kontakt
          </p>

          <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Låt oss bygga något{" "}
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              stort tillsammans.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            Behöver du en premium hemsida, bokningssystem eller adminpanel?
            Jag hjälper småföretag att modernisera sin verksamhet med smarta
            digitala lösningar.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:leandro.lever.cloud@gmail.com"
              className="rounded-2xl bg-blue-600 px-8 py-4 text-sm font-black shadow-[0_0_40px_rgba(37,99,235,0.65)] hover:bg-blue-500"
            >
              Skicka email →
            </a>

            <Link
              href="/projects"
              className="rounded-2xl border border-white/15 bg-white/[0.04] px-8 py-4 text-sm font-black hover:bg-white/[0.08]"
            >
              Se mina projekt
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {socials.map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-4 text-xl font-black">{title}</h3>
                <p className="mt-2 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[120px]" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_90px_rgba(37,99,235,0.22)]">
            <form
              onSubmit={handleSubmit}
              className="rounded-[1.5rem] border border-white/10 bg-[#07101f] p-8"
            >
              <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-400">
                Starta projekt
              </p>

              <h2 className="mt-5 text-4xl font-black">
                Berätta om ditt företag.
              </h2>

              <div className="mt-8 space-y-5">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Ditt namn"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 outline-none placeholder:text-slate-500 focus:border-blue-500"
                />

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 outline-none placeholder:text-slate-500 focus:border-blue-500"
                />

                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  type="text"
                  placeholder="Företag"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 outline-none placeholder:text-slate-500 focus:border-blue-500"
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Berätta vad du vill bygga..."
                  rows={5}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 outline-none placeholder:text-slate-500 focus:border-blue-500"
                />

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-blue-600 px-8 py-5 text-sm font-black shadow-[0_0_40px_rgba(37,99,235,0.65)] transition hover:bg-blue-500"
                >
                  Skicka förfrågan →
                </button>

                {status && (
                  <p className="text-center text-sm font-bold text-blue-400">
                    {status}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}