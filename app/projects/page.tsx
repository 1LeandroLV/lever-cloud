import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      images: ["/IMG_4418.jpeg", "/project-4.png", "/IMG_4416.jpeg", "/IMG_4417.jpeg"],
      title: "Premium Landing Page",
      text: "En premium startsida som får företaget att kännas modernt och professionellt direkt när kunden öppnar sidan. Perfekt för företag som vill sticka ut, bygga förtroende och få fler bokningar online.",
    },
    {
      images: ["/IMG_4408.jpeg", "/IMG_4410.png", "/IMG_4411.jpeg", "/IMG_4412.jpeg"],
      title: "Admin Dashboard",
      text: "Ett internt adminsystem där företaget kan hantera bokningar, kunder, betalningar och personal på ett och samma ställe. Ger bättre struktur och sparar tid varje dag.",
    },
    {
      images: ["/project-3.png", "/IMG_4413.png", "/IMG_4414.png"],
      title: "Smart Booking Flow",
      text: "Ett smart bokningsflöde där kunder enkelt kan välja tjänst, datum och skicka bokning direkt från mobilen. Snabbt, tydligt och byggt för att öka konverteringar.",
    },
    {
      images: ["/IMG_4419.jpeg", "/IMG_4420.jpeg", "/IMG_4421.jpeg", "/IMG_4422.jpeg"],
      title: "Employee System",
      text: "Ett personalsystem där anställda kan logga in, se sina jobb och hantera uppdrag direkt från mobilen. Perfekt för företag som vill växa och organisera sitt team bättre.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#020714] px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="text-sm font-bold text-blue-400">
          ← Tillbaka
        </Link>

        <section className="py-20 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-blue-400">
            Projekt
          </p>

          <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
            Exempel på vad jag kan bygga.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-slate-400">
            Premium hemsidor, bokningssystem och adminpaneler byggda med modern
            fullstack-teknik.
          </p>
        </section>

        <div className="space-y-16">
          {projects.map((project) => (
            <section
              key={project.title}
              className="rounded-[3rem] border border-white/10 bg-white/[0.03] p-6 md:p-12"
            >
              <div className="grid grid-cols-2 gap-6 md:gap-10">
                {project.images.map((img, index) => (
                  <div
                    key={img}
                    className={`relative flex items-center justify-center rounded-[2rem] border border-white/10 bg-white/5 p-6 ${
                      project.images.length === 3 && index === 2
                        ? "col-span-2 h-[360px]"
                        : "h-[360px]"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-contain p-6"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-14">
                <h2 className="text-4xl font-black md:text-5xl">
                  {project.title}
                </h2>

                <p className="mt-6 text-xl leading-relaxed text-slate-400 md:text-2xl">
                  {project.text}
                </p>
              </div>
            </section>
          ))}
        </div>

        <section className="py-24 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-blue-400">
            Live demo
          </p>

          <h2 className="mt-6 text-4xl font-black md:text-6xl">
            Vill du se projektet live?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-slate-400">
            Testa en riktig demo av bokningssystemet, adminpanelen och
            företagsflödet som är byggt för riktiga småföretag.
          </p>

          <a
            href="https://cleanin-booking-api-ext3.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full bg-blue-600 px-12 py-5 text-xl font-bold shadow-[0_0_35px_rgba(37,99,235,0.7)] hover:bg-blue-500"
          >
            Öppna live demo
          </a>
        </section>
      </div>
    </main>
  );
}