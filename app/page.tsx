export default function Home() {
  return (
    <main className="min-h-screen px-6 py-24 text-neutral-900">
      <div className="mx-auto max-w-2xl space-y-24">

        {/* Hero */}
        <section className="space-y-6">
          <h1 className="text-4xl font-semibold leading-tight">
            I build production web systems with React, Node.js, and .NET.
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            I focus on clean system design, clear user flows, and shipping
            real, deployed applications that solve practical problems.
          </p>
          <a
            href="#systems"
            className="inline-block text-sm text-neutral-900 underline underline-offset-4"
          >
            View systems →
          </a>
        </section>

        {/* Systems */}
        <section id="systems" className="space-y-12">
          <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500">
            Selected Systems
          </h2>

          <ul className="space-y-10">
            <li className="space-y-2">
              <h3 className="text-lg font-medium">
                Client Project (Autofixer Registration)
              </h3>
              <p className="text-neutral-600">
                A production web system built for a real client to manage
                core business workflows and data.
              </p>
              <p className="text-sm text-neutral-500">
                React · Node.js · .NET · Live
              </p>
              <a
                href="/work/client-project"
                className="text-sm underline underline-offset-4"
              >
                View case study →
              </a>
            </li>

            <li className="space-y-2">
              <h3 className="text-lg font-medium">
                AI Resume Analyzer
              </h3>
              <p className="text-neutral-600">
                A deployed AI-powered system that analyzes resumes and
                provides structured feedback for job seekers.
              </p>
              <p className="text-sm text-neutral-500">
                React · Node.js · AI Services · Live
              </p>
              <a
                href="/work/ai-resume-analyzer"
                className="text-sm underline underline-offset-4"
              >
                View case study →
              </a>
            </li>

            <li className="space-y-2">
              <h3 className="text-lg font-medium">
                Project 3 (In Progress)
              </h3>
              <p className="text-neutral-600">
                An in-progress system focused on improving a specific
                workflow, currently under active development.
              </p>
              <p className="text-sm text-neutral-500">
                React · Backend API · In Progress
              </p>
              <a
                href="/work/project-3"
                className="text-sm underline underline-offset-4"
              >
                View case study →
              </a>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-neutral-200 space-y-4">
          <p className="text-sm text-neutral-600">
            <a href="mailto:simba.chasumba15@gmail.com" className="underline underline-offset-4">
              simba.chasumba15@gmail.com
            </a>
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="https://github.com/SimbaChasumba1"
              className="underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/simba-chasumba-b52762251"
              className="underline underline-offset-4"
            >
              LinkedIn
            </a>
          </div>
        </footer>

      </div>
    </main>
  );
}
