import { notFound } from "next/navigation";

type Project = {
  title: string;
  description: string;
  audience: string;
  purpose: string;
  userFlow: string[];
  system: {
    frontend: string;
    backend: string;
    auth: string;
    data: string;
    services: string;
    deployment: string;
  };
  status: string;
  nextSteps: string[];
  links: {
    live?: string;
    source?: string;
  };
  video?: string;
};

const projects: Record<string, Project> = {
  "client-project": {
    title: "Client Project — Autofixer Registration",
    description:
      "A production system built for a real startup client to handle user onboarding, authentication, and operational workflows.",
    audience:
      "End users registering for services and internal staff managing requests.",
    purpose:
      "To provide a secure, reliable entry point into the client’s platform and support real-world operations.",
    userFlow: [
      "User registers and authenticates",
      "Profile and required data are collected",
      "User enters the core product experience",
    ],
    system: {
      frontend: "Next.js (React), Tailwind CSS",
      backend: "Node.js API with supporting .NET services",
      auth: "Token-based authentication",
      data: "Relational database",
      services: "Email and notification services",
      deployment: "Cloud-hosted production environment",
    },
    status: "Live — actively used in production",
    nextSteps: [
      "Improve onboarding validation",
      "Add internal analytics",
    ],
    links: {
      live: "https://autofixer-registration.vercel.app/",
    },
    video: "/videos/autofixer.mp4",
  },

  "ai-resume-analyzer": {
    title: "AI Resume Analyzer",
    description:
      "A deployed AI-powered system that analyzes resumes and returns structured, actionable feedback.",
    audience:
      "Job seekers looking for automated resume feedback.",
    purpose:
      "To reduce manual resume review and provide consistent AI-driven insights.",
    userFlow: [
      "User submits resume text",
      "AI processes and analyzes content",
      "Structured feedback is returned",
    ],
    system: {
      frontend: "Next.js (React)",
      backend: "Node.js API",
      auth: "Authenticated sessions",
      data: "Document-based storage",
      services: "AI text analysis services",
      deployment: "Cloud-hosted production deployment",
    },
    status: "Live — publicly accessible",
    nextSteps: [
      "Improve analysis consistency",
      "Add exportable reports",
    ],
    links: {
      live: "https://ai-resume-analysis-platform.vercel.app/",
      source: "https://github.com/SimbaChasumba1/ai-resume-analyzer",
    },
    video: "/videos/resume-analyzer.mp4",
  },

  "project-three": {
    title: "AI Application Tracker",
    description:
      "An in-progress system designed to track job applications and automate follow-up workflows.",
    audience:
      "Job seekers managing multiple applications.",
    purpose:
      "To centralize application tracking and reduce manual follow-ups.",
    userFlow: [
      "User adds applications",
      "System tracks status",
      "Insights and reminders are generated",
    ],
    system: {
      frontend: "React",
      backend: "Backend API (in progress)",
      auth: "Planned authentication",
      data: "Planned relational storage",
      services: "Planned AI-assisted insights",
      deployment: "Not yet deployed",
    },
    status: "In Progress",
    nextSteps: [
      "Finalize data model",
      "Implement authentication",
      "Deploy MVP",
    ],
    links: {
      source: "https://github.com/your-repo",
    },
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) notFound();

return (
  <main className="px-6 py-24">
    <div className="mx-auto max-w-3xl space-y-16">

      {/* Title */}
      <section className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-100">
          {project.title}
        </h1>
        <p className="text-neutral-400">
          {project.description}
        </p>
      </section>

      {/* Context */}
      <section className="space-y-4">
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6">
          <p className="text-sm text-neutral-400">
            <span className="font-medium text-neutral-200">Who it’s for:</span>{" "}
            {project.audience}
          </p>
          <p className="mt-2 text-sm text-neutral-400">
            <span className="font-medium text-neutral-200">Why it exists:</span>{" "}
            {project.purpose}
          </p>
        </div>
      </section>

      {/* Demo */}
      <section className="space-y-3">
        <h2 className="text-lg font-medium text-neutral-200">
          Product Demo
        </h2>

        {project.links.live ? (
          <div className="aspect-video overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950">
            {/* replace src later */}
            <div className="flex h-full items-center justify-center text-sm text-neutral-500">
              Demo video placeholder
            </div>
          </div>
        ) : (
          <div className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-neutral-800 text-sm text-neutral-500">
            Demo coming soon
          </div>
        )}
      </section>

      {/* User Flow */}
      <section className="space-y-3">
        <h2 className="text-lg font-medium text-neutral-200">
          User Flow
        </h2>
        <ul className="space-y-2 text-neutral-400">
          {project.userFlow.map((step, i) => (
            <li key={i}>– {step}</li>
          ))}
        </ul>
      </section>

      {/* System */}
      <section className="space-y-3">
        <h2 className="text-lg font-medium text-neutral-200">
          System Overview
        </h2>
        <ul className="space-y-1 text-sm text-neutral-400">
          <li><span className="text-neutral-200">Frontend:</span> {project.system.frontend}</li>
          <li><span className="text-neutral-200">Backend:</span> {project.system.backend}</li>
          <li><span className="text-neutral-200">Auth:</span> {project.system.auth}</li>
          <li><span className="text-neutral-200">Data:</span> {project.system.data}</li>
          <li><span className="text-neutral-200">Services:</span> {project.system.services}</li>
          <li><span className="text-neutral-200">Deployment:</span> {project.system.deployment}</li>
        </ul>
      </section>

      {/* Status */}
      <section className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6">
        <h2 className="text-lg font-medium text-neutral-200">
          Status
        </h2>
        <p className="mt-2 text-neutral-400">{project.status}</p>

        <ul className="mt-3 space-y-2 text-sm text-neutral-400">
          {project.nextSteps.map((step, i) => (
            <li key={i}>– {step}</li>
          ))}
        </ul>
      </section>

      {/* Links */}
      <section className="flex gap-6 text-sm">
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            className="text-emerald-400 hover:text-emerald-300"
          >
            Live system →
          </a>
        )}
        {project.links.source && (
          <a
            href={project.links.source}
            target="_blank"
            className="text-emerald-400 hover:text-emerald-300"
          >
            Source code →
          </a>
        )}
      </section>

    </div>
  </main>
);
}