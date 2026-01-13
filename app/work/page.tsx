export default function Work() {
  return (
    <div className="mx-auto max-w-2xl space-y-16">
      <header className="space-y-4">
        <h1 className="text-2xl font-medium">Systems</h1>
        <p className="text-neutral-600">
          A small selection of production systems I’ve built or am actively
          developing.
        </p>
      </header>

      <ul className="space-y-6 text-sm">
        <li>
          <a href="/work/client-project" className="underline underline-offset-4">
            Client Project (Autofixer Registration) — Live
          </a>
        </li>
        <li>
          <a href="/work/ai-resume-analyzer" className="underline underline-offset-4">
            AI Resume Analyzer — Live
          </a>
        </li>
        <li>
          <a href="/work/project-three" className="underline underline-offset-4">
            AI Application Tracker — In Progress
          </a>
        </li>
      </ul>
    </div>
  );
}
