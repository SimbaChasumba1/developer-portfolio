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
    title: "Client Project (Autofixer Promo Registration)",
    description:
      "A production website built for a startup promo drive, allowing users to submit contact details, upload short promotional videos, and complete payments.",
    audience:
      "End users participating in a promotional campaign run by the startup.",
    purpose:
      "To collect user submissions, promotional videos, and payments as part of a real-world marketing drive.",
    userFlow: [
      "User enters name, email, and phone number",
      "User uploads a 10–60 second promotional video",
      "User completes payment via PayPal",
      "Submission is stored and made available for internal review",
    ],
    system: {
      frontend: "Next.js (React), Tailwind CSS",
      backend: "Serverless API routes",
      auth: "No authentication (public submission flow)",
      data: "Supabase (relational data and file storage)",
      services: "PayPal payments, file upload handling",
      deployment: "Vercel (frontend) and Render (backend)",
    },
    status: "Live — used in a real startup promotional campaign",
    nextSteps: [
      "Improve submission validation",
      "Add internal review tooling",
    ],
    links: {
      live: "https://autofixer-registration.vercel.app/",
    },
    video: "/videos/autofixer.MOV",
  },

  "ai-resume-analyzer": {
    title: "AI Resume Analyzer",
    description:
      "A deployed AI-powered application that analyzes resumes and returns structured, actionable feedback.",
    audience:
      "Job seekers looking for fast, automated resume evaluation.",
    purpose:
      "To reduce manual resume review and provide consistent, AI-driven insights at scale.",
    userFlow: [
      "User authenticates and uploads a resume",
      "AI processes and analyzes the content",
      "Structured feedback and scoring are returned",
    ],
    system: {
      frontend: "Next.js (React)",
      backend: "ASP.NET Core API",
      auth: "JWT-based authentication",
      data: "PostgreSQL database",
      services: "OpenAI API with fallback handling",
      deployment: "Vercel (frontend) and Render (backend)",
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
    video: "/videos/resume-analyzer.MOV",
  },

  "project-three": {
    title: "AI Application Tracker",
    description:
      "An in-progress system designed to track job applications and automate follow-up workflows using AI-driven insights.",
    audience:
      "Job seekers managing multiple applications and interview pipelines.",
    purpose:
      "To centralize application tracking, improve follow-up timing, and surface actionable insights.",
    userFlow: [
      "User adds job applications",
      "System tracks status and history",
      "Insights and reminders are generated",
    ],
    system: {
      frontend: "Next.js (React), TypeScript, Tailwind CSS",
      backend: "Node.js, Express.js, TypeScript (REST API)",
      auth: "JWT-based authentication (planned)",
      data: "PostgreSQL relational database",
      services: "OpenAI API for insights and follow-up generation",
      deployment: "Not yet deployed",
    },
    status: "In Progress",
    nextSteps: [
      "Finalize data model",
      "Implement authentication",
      "Deploy MVP",
    ],
    links: {
      source: "https://github.com/SimbaChasumba1/ai-application-tracker",
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
              {project.video ? (
                <video
                  src={project.video}
                  controls
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-neutral-500">
                  Demo video placeholder
                </div>
              )}
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
              className="text-blue-400 hover:text-blue-300"
            >
              Live system →
            </a>
          )}
          {project.links.source && (
            <a
              href={project.links.source}
              target="_blank"
              className="text-blue-400 hover:text-blue-300"
            >
              Source code →
            </a>
          )}
        </section>

      </div>
    </main>
  );
}
