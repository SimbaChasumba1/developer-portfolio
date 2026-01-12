export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900">
        <div className="mx-auto max-w-5xl px-4">
          <header className="py-6 border-b">
            <nav className="flex justify-between">
              <span className="font-medium">Simba Chasumba</span>
              <div className="space-x-4 text-sm">
                <a href="/">Home</a>
                <a href="/work">Work</a>
                <a href="/about">About</a>
              </div>
            </nav>
          </header>

          <main className="py-12">{children}</main>

          <footer className="py-12 text-sm text-neutral-500">
            © {new Date().getFullYear()}
          </footer>
        </div>
      </body>
    </html>
  )
}
