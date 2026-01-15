import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-neutral-100 antialiased">
        {/* Navigation */}
        <header className="fixed top-0 z-50 w-full border-b border-neutral-800 bg-neutral-900/80 backdrop-blur">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="text-sm font-semibold tracking-wide text-white transition hover:text-blue-400"
            >
              Simba Chasumba
            </Link>

            <div className="flex gap-8 text-sm">
              <Link
                href="/work"
                className="text-neutral-300 transition hover:text-blue-400"
              >
                Work
              </Link>
              <Link
                href="/about"
                className="text-neutral-300 transition hover:text-blue-400"
              >
                About
              </Link>
            </div>
          </nav>
        </header>

        {/* Page content */}
        <main className="pt-28 min-h-screen bg-neutral-900">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-neutral-800 bg-neutral-900 py-10">
          <div className="mx-auto max-w-5xl text-center text-sm text-neutral-400">
            © 2026 Simba Chasumba
          </div>
        </footer>
      </body>
    </html>
  );
}
