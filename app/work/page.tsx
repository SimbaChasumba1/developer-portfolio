import Link from "next/link";

export default function Work() {
  return (
    <main className="px-6 py-28 bg-neutral-900 text-neutral-100">
      <div className="mx-auto max-w-4xl space-y-20">

        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">
            Systems
          </h1>
          <p className="max-w-xl text-neutral-400 leading-relaxed">
            A selection of production systems and active builds focused on
            real-world usage, scalability, and clean architecture.
          </p>
        </header>

        {/* Projects */}
        <ul className="space-y-8">
          {[
            {
              title: "Client Project (Autofixer Registration)",
              desc:
                "Production onboarding and authentication system built for a real startup client.",
              href: "/work/client-project",
            },
            {
              title: "AI Resume Analyzer",
              desc:
                "Live AI-powered application delivering structured resume analysis and feedback.",
              href: "/work/ai-resume-analyzer",
            },
            {
              title: "AI Application Tracker",
              desc:
                "In-progress platform for tracking applications and automating follow-ups with AI insights.",
              href: "/work/project-three",
            },
          ].map((item) => (
            <li
              key={item.title}
              className="group rounded-2xl border border-neutral-800 bg-neutral-800/40 p-8 transition hover:border-neutral-700 hover:bg-neutral-800/60"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div className="space-y-2">
                  <h2 className="text-xl font-medium">
                    {item.title}
                  </h2>
                  <p className="text-neutral-400 leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>

                <Link
                  href={item.href}
                  className="shrink-0 inline-flex items-center gap-2 text-sm font-medium text-blue-400"
                >
                  View project
                  <span className="transition group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
