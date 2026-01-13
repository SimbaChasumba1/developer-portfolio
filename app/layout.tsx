import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-5xl mx-auto px-6 py-6 bg-white text-neutral-900">
        {/* Header */}
        <header className="py-6 border-b border-neutral-200">
          <nav className="flex justify-between text-sm">
            <span className="font-medium">Simba Chasumba</span>
            <div className="flex gap-6">
              <a href="/">Home</a>
              <a href="/work">Work</a>
              <a href="/about">About</a>
            </div>
          </nav>
        </header>

        {/* Page content */}
        <main className="py-12">{children}</main>

        {/* Footer */}
        <footer className="py-12 text-sm text-neutral-500 border-t border-neutral-200">
          © {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
