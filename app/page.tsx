import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 px-6 py-24 text-neutral-100">
      <div className="mx-auto max-w-5xl space-y-32">

        {/* Hero */}
        <section className="space-y-6">
          <h1 className="text-4xl font-semibold leading-tight max-w-3xl">
            I build production web systems with{" "}
            <span className="underline decoration-neutral-500 underline-offset-4">
              React, Node.js, and .NET
            </span>.
          </h1>

          <p className="text-lg text-neutral-300 leading-relaxed max-w-xl">
            I focus on clean system design, reliable user flows,
            and shipping real, deployed applications.
          </p>

          <a
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:underline"
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
                title: "Client Project (Autofixer Registration)",
                desc:
                  "A production system built for a real client to manage onboarding, authentication, and core business workflows.",
                stack: "React · Node.js · .NET · Live",
                link: "/work/client-project",
                image: "/client-project.png",
              },
              {
                title: "AI Resume Analyzer",
                desc:
                  "An AI-powered system that analyzes resumes and returns structured, actionable feedback.",
                stack: "React · Node.js · AI Services · Live",
                link: "/work/ai-resume-analyzer",
                image: "/ai-resume-analyzer.png",
              },
              {
                title: "AI Application Tracker",
                desc:
                  "An in-progress system focused on tracking applications and automating follow-ups.",
                stack: "React · Backend API · In Progress",
                link: "/work/project-three",
                image: "/projects/tracker.png",
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
                    className="inline-block pt-2 text-sm font-medium text-emerald-400 hover:underline"
                  >
                    View case study →
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
              className="hover:text-emerald-400 underline underline-offset-4"
            >
              simba.chasumba15@gmail.com
            </a>
          </p>

          <div className="flex gap-6 text-sm text-neutral-400">
            <a
              href="https://github.com/SimbaChasumba1"
              className="hover:text-emerald-400 underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/simba-chasumba-b52762251"
              className="hover:text-emerald-400 underline underline-offset-4"
            >
              LinkedIn
            </a>
          </div>
        </footer>

      </div>
    </main>
  );
}
