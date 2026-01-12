// app/about/page.tsx

import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen px-6 py-24 text-neutral-900">
      <div className="mx-auto max-w-2xl space-y-16">

        {/* Header */}
        <section className="space-y-6">
          <h1 className="text-3xl font-semibold">
            About
          </h1>
        </section>

        {/* Profile */}
        <section className="flex items-start gap-8">
          <div className="shrink-0">
            <Image
              src="/profile.jpg" // place your image in /public/profile.jpg
              alt="Profile photo"
              width={96}
              height={96}
              className="rounded-full object-cover"
            />
          </div>

          <div className="space-y-6 text-neutral-700 leading-relaxed">
            <p>
              I’m a full-stack software developer who builds and deploys
              production-ready web systems.
            </p>

            <p>
              My experience includes working on real startup projects involving
              user onboarding, secure payments, cloud integrations, and
              responsive user interfaces. I typically own features end-to-end —
              from planning and implementation through deployment and debugging
              in production.
            </p>

            <p>
             I’m a Computer Science graduate and currently focused on working on 
             real production systems in professional product environments.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-neutral-200 space-y-4">
          <p className="text-sm text-neutral-600">
            <a
              href="mailto:simba.chasumba15@gmail.com"
              className="underline underline-offset-4"
            >
              youremail@example.com
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
              href="https://linkedin.com/in/siumba-chasumba"
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
