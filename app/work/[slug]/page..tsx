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
};

const projects: Record<string, Project> = {
  "client-project": {
    title: "Client Project (Autofixer Registration)",
    description:
      "A production system built for a real client to handle user onboarding, authentication, and core business workflows.",
    audience:
      "End users registering for services and internal staff managing requests.",
    purpose:
      "To provide a reliable, secure entry point into the client’s platform and support real operational workflows.",
    userFlow: [
      "User registers and authenticates",
      "Profile and required information are collected",
      "User is routed into the core system experience",
    ],
    system: {
      frontend: "React (Next.js), Tailwind CSS",
      backend: "Node.js API with supporting .NET services",
      auth: "Token-based authentication",
      data: "Relational database",
      services: "Email and notification services",
      deployment: "Cloud-hosted production environment",
    },
    status: "Live — actively used in production",
    nextSteps: [
      "Improve onboarding validation and error handling",
      "Add internal analytics for user drop-off",
    ],
    links: {
      live: "https://autofixer-registration.vercel.app/",
    },
  },

  "ai-resume-analyzer": {
    title: "AI Resume Analyzer",
    description:
      "A deployed AI-powered application that analyzes resumes and generates structured feedback for users.",
    audience:
      "Job seekers looking for automated, actionable resume feedback.",
    purpose:
      "To reduce manual resume review and provide consistent, structured insights using AI.",
    userFlow: [
      "User uploads or submits resume text",
      "System processes and analyzes content",
      "Structured feedback is returned to the user",
    ],
    system: {
      frontend: "React (Next.js)",
      backend: "Node.js API",
      auth: "Authenticated user sessions",
      data: "Document-based storage",
      services: "AI text analysis services",
      deployment: "Cloud-hosted production deployment",
    },
    status: "Live — publicly accessible",
    nextSteps: [
      "Improve analysis consistency",
      "Add exportable feedback reports",
    ],
    links: {
      live: "https://ai-resume-analysis-platform.vercel.app/",
      source: "https://github.com/SimbaChasumba1/ai-resume-analyzer",
    },
  },

  "project-three": {
    title: "AI Application Tracker",
    description:
      "An in-progress system designed to track job applications and automate follow-up workflows.",
    audience:
      "Job seekers managing multiple applications across platforms.",
    purpose:
      "To centralize application tracking and reduce manual follow-up effort.",
    userFlow: [
      "User adds applications manually or via import",
      "System tracks status and timelines",
      "Automated reminders and insights are generated",
    ],
    system: {
      frontend: "React",
      backend: "Backend API (in progress)",
      auth: "Planned authentication layer",
      data: "Planned relational storage",
      services: "Planned AI-assisted insights",
      deployment: "Not yet deployed",
    },
    status: "In Progress",
    nextSteps: [
      "Finalize core data model",
      "Implement authentication",
      "Deploy initial production version",
    ],
    links: {
      source: "https://github.com/your-repo",
    },
  },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug];

  if (!project) notFound();

  return (
    <div className="mx-auto max-w-2xl space-y-16">
      {/* Overview */}
      <section className="space-y-4">
        <h1 className="text-2xl font-medium">{project.title}</h1>
        <p className="text-neutral-600">{project.description}</p>
        <p className="text-sm text-neutral-500">
          <strong>Who it’s for:</strong> {project.audience}
        </p>
        <p className="text-sm text-neutral-500">
          <strong>Why it exists:</strong> {project.purpose}
        </p>
      </section>

      {/* User Flow */}
      <section className="space-y-4">
        <h2 className="text-lg font-medium">Main User Flow</h2>
        <ul className="list-disc pl-5 space-y-2 text-neutral-600">
          {project.userFlow.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>
      </section>

      {/* System Summary */}
      <section className="space-y-4">
        <h2 className="text-lg font-medium">System Summary</h2>
        <ul className="space-y-1 text-neutral-600 text-sm">
          <li>
            <strong>Frontend:</strong> {project.system.frontend}
          </li>
          <li>
            <strong>Backend / API:</strong> {project.system.backend}
          </li>
          <li>
            <strong>Authentication:</strong> {project.system.auth}
          </li>
          <li>
            <strong>Data:</strong> {project.system.data}
          </li>
          <li>
            <strong>External Services:</strong> {project.system.services}
          </li>
          <li>
            <strong>Deployment:</strong> {project.system.deployment}
          </li>
        </ul>
      </section>

      {/* Status & Next Steps */}
      <section className="space-y-4">
        <h2 className="text-lg font-medium">Status & Next Steps</h2>
        <p className="text-neutral-600">{project.status}</p>
        <ul className="list-disc pl-5 space-y-2 text-neutral-600">
          {project.nextSteps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>
      </section>

      {/* Links */}
      <section className="space-y-2">
        <h2 className="text-lg font-medium">Links</h2>
        <div className="space-x-4 text-sm">
          {project.links.live && (
            <a
              href={project.links.live}
              className="underline underline-offset-4"
              target="_blank"
            >
              Live system
            </a>
          )}
          {project.links.source && (
            <a
              href={project.links.source}
              className="underline underline-offset-4"
              target="_blank"
            >
              Source code
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
