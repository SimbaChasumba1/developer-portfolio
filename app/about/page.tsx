import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen px-6 py-24 bg-neutral-900">
      <div className="mx-auto max-w-4xl space-y-20">

        {/* Intro Card */}
        <section className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center gap-10">

            {/* Profile Image */}
            <div className="shrink-0">
              <Image
                src="/profile.jpg.jpeg"
                alt="Simba Chasumba"
                width={160}
                height={160}
                className="rounded-full object-cover border border-neutral-700"
              />
            </div>

            {/* Text */}
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold text-neutral-100">
                Simba Chasumba
              </h1>

              <p className="text-neutral-300 leading-relaxed">
                I’m a full-stack software developer and Computer Science graduate
                who builds production-ready web systems with a strong focus on
                clean architecture, reliable user flows, and deployable applications.
              </p>

              <p className="text-neutral-300 leading-relaxed">
                I’ve worked on real startup products involving user onboarding,
                secure payments, cloud integrations, and responsive user interfaces.
                I typically own features end-to-end — from planning and implementation
                through deployment and production debugging.
              </p>

              <p className="text-neutral-400 leading-relaxed">
                Actively seeking opportunities to contribute, grow fast, and work
                on impactful products.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-8">
            <h2 className="text-lg font-medium text-neutral-100 mb-4">
              Core Skills
            </h2>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>React, Next.js, Tailwind CSS</li>
              <li>Node.js, Express, .NET</li>
              <li>REST APIs & backend architecture</li>
              <li>Authentication & authorization</li>
              <li>Relational & document databases</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-8">
            <h2 className="text-lg font-medium text-neutral-100 mb-4">
              Engineering Focus
            </h2>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>Production-ready systems</li>
              <li>Clean, maintainable architecture</li>
              <li>End-to-end feature ownership</li>
              <li>Cloud deployment (Azure, Vercel)</li>
              <li>Testing, debugging & monitoring</li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-10 border-t border-neutral-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-neutral-400">
          <a
            href="mailto:simba.chasumba15@gmail.com"
            className="hover:text-neutral-200 underline underline-offset-4"
          >
            simba.chasumba15@gmail.com
          </a>

          <div className="flex gap-6">
            <a
              href="https://github.com/SimbaChasumba1"
              className="hover:text-neutral-200 underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/simba-chasumba-b52762251"
              className="hover:text-neutral-200 underline underline-offset-4"
            >
              LinkedIn
            </a>
          </div>
        </footer>

      </div>
    </main>
  );
}
