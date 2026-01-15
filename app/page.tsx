import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 px-6 py-24 text-neutral-100">
      <div className="mx-auto max-w-5xl space-y-32">

        {/* Hero */}
        <section className="space-y-6">
          <h1 className="text-4xl font-semibold leading-tight max-w-3xl">
            I build production-ready web applications with{" "}
            <span className="underline decoration-neutral-500 underline-offset-4">
              React, Node.js, and .NET
            </span>.
          </h1>

          <p className="text-lg text-neutral-300 leading-relaxed max-w-xl">
            I focus on clean architecture, reliable user flows, and real-world
            deployability across full-stack systems.
          </p>

          <a
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:underline"
          >
            View systems →
          </a>
        </section>

        {/* Systems Preview */}
        <section className="space-y-12">
          <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-400">
            Selected Systems
          </h2>

          <ul className="space-y-10">
            {[
              {
                title: "Client Project (Autofixer Promo Registration)",
                desc:
                  "A production website built for a startup promo drive, allowing users to submit contact details, upload short promo videos, and complete payments.",
                stack: "Next.js · Supabase · PayPal · Live",
                link: "/work/client-project",
                image: "/client-project.png",
              },
              {
                title: "AI Resume Analyzer",
                desc:
                  "A deployed AI-powered application that analyzes resumes and returns structured, actionable feedback.",
                stack: "Next.js · ASP.NET Core · OpenAI · Live",
                link: "/work/ai-resume-analyzer",
                image: "/ai-resume-analyzer.png",
              },
              {
                title: "AI Application Tracker",
                desc:
                  "An in-progress system for tracking job applications and automating follow-ups using AI insights.",
                stack: "Next.js · Node.js · PostgreSQL · In Progress",
                link: "/work/project-three",
                image: "/ai-tracker.png",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="group grid gap-6 md:grid-cols-[1fr_260px] items-center rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 transition hover:border-neutral-700"
              >
                {/* Text */}
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">
                    {item.title}
                  </h3>

                  <p className="text-neutral-300 leading-relaxed">
                    {item.desc}
                  </p>

                  <p className="text-sm text-neutral-400 underline decoration-neutral-600 underline-offset-4">
                    {item.stack}
                  </p>

                  <a
                    href={item.link}
                    className="inline-block pt-2 text-sm font-medium text-blue-400 hover:underline"
                  >
                    View project →
                  </a>
                </div>

                {/* Image */}
                <div className="relative h-40 w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-800">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="pt-16 border-t border-neutral-800 space-y-4">
          <p className="text-sm text-neutral-400">
            <a
              href="mailto:simba.chasumba15@gmail.com"
              className="hover:text-blue-400 underline underline-offset-4"
            >
              simba.chasumba15@gmail.com
            </a>
          </p>

          <div className="flex gap-6 text-sm text-neutral-400">
            <a
              href="https://github.com/SimbaChasumba1"
              className="hover:text-blue-400 underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/simba-chasumba-b52762251"
              className="hover:text-blue-400 underline underline-offset-4"
            >
              LinkedIn
            </a>
          </div>
        </footer>

      </div>
    </main>
  );
}
