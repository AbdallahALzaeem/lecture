import { ArrowUpRight } from 'lucide-react'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="relative isolate overflow-hidden border-t border-slate-800 bg-slate-950 px-6 pt-16 sm:pt-20">
      <div className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-slate-800 pb-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight text-white transition hover:text-cyan-300"
            >
              zaeem web
            </a>
            <p className="mt-5 leading-7 text-slate-400">
              Thoughtful design and reliable development for ideas ready to
              grow into something great.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>
                <a className="transition hover:text-cyan-300" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a
                  className="transition hover:text-cyan-300"
                  href="#work-tracker"
                >
                  Work tracker
                </a>
              </li>
              <li>
                <a className="transition hover:text-cyan-300" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              What we do
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>Web design</li>
              <li>Development</li>
              <li>Responsive experiences</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold leading-tight text-white">
              Have a project in mind?
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Let&apos;s talk about what you&apos;re building.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-cyan-200"
            >
              Get in touch
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} Zaeem Web. All rights reserved.</p>
          <a
            href="#home"
            className="transition hover:text-slate-300"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
