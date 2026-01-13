import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen px-6 py-24 text-neutral-900">
      <div className="mx-auto max-w-3xl space-y-16">

        {/* Header */}
        <section className="flex flex-col md:flex-row md:items-center md:gap-12 space-y-6 md:space-y-0">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <Image
              src="/profile.jpg.jpeg" // Place your image in /public/profile.jpg
              alt="Simba Chasumba"
              width={180}
              height={180}
              className="rounded-full object-cover"
            />
          </div>

          {/* Intro Text */}
          <div className="space-y-4 text-neutral-700 leading-relaxed">
            <h1 className="text-3xl font-semibold">Simba Chasumba</h1>
            <p>
              I’m a full-stack software developer and a recent Computer Science graduate.
              I build production-ready web systems using React, Node.js, and .NET,
              focusing on clean architecture, reliable user flows, and deployable applications.
            </p>
            <p>
              I’ve worked on real startup projects involving user onboarding, secure payments,
              cloud integrations, and responsive user interfaces. I typically own features
              end-to-end — from planning and implementation through deployment and debugging
              in production.
            </p>
            <p>
              I’m actively seeking opportunities where I can contribute at a high level,
              grow quickly, and work on impactful products.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium">Key Skills & Tools</h2>
          <ul className="list-disc pl-5 text-neutral-600 space-y-1 text-sm">
            <li>React, Next.js, Tailwind CSS</li>
            <li>Node.js, Express, .NET</li>
            <li>REST APIs & production-grade backend systems</li>
            <li>Authentication & authorization systems</li>
            <li>Relational & document-based databases</li>
            <li>Cloud deployments (Azure, Vercel)</li>
            <li>Unit testing, debugging, and monitoring in production</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-neutral-200 space-y-4">
          <p className="text-sm text-neutral-600">
            <a
              href="mailto:simba.chasumba15@gmail.com"
              className="underline underline-offset-4"
            >
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
