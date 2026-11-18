import { ChevronDown, Menu, X } from 'lucide-react'
import links from '../data/Navbar.js'
import { useRef, useState } from 'react'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const closeMenuTimeout = useRef(null)

  const closeNavigation = () => {
    setShowMenu(false)
    setIsNavOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:py-5">
        <a
          href="#home"
          className="shrink-0 text-2xl font-bold tracking-tight text-white"
          onClick={closeNavigation}
        >
          zaeem web
        </a>

        <button
          type="button"
          className="ml-auto inline-flex items-center justify-center rounded-lg p-2 text-slate-200 transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-300 md:hidden"
          aria-label={isNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isNavOpen}
          aria-controls="primary-navigation"
          onClick={() => {
            setIsNavOpen((open) => !open)
            setShowMenu(false)
          }}
        >
          {isNavOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>

        <nav
          id="primary-navigation"
          className={`${isNavOpen ? 'block' : 'hidden'} absolute left-0 right-0 top-full border-t border-slate-800 bg-slate-900 px-4 py-4 shadow-lg md:static md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6 lg:gap-8">
              {links.map((el) => {
                const submenuId = `${el.name.toLowerCase()}-submenu`

                return (
                  <li key={el.name}>
                    {el.children ? (
                      <div
                        className="relative"
                        onMouseEnter={() =>
                          clearTimeout(closeMenuTimeout.current)
                        }
                        onMouseLeave={() => {
                          closeMenuTimeout.current = setTimeout(
                            () => setShowMenu(false),
                            400,
                          )
                        }}
                      >
                        <button
                          type="button"
                          className="flex items-center gap-1 py-2 text-slate-300 transition hover:text-white md:py-0"
                          aria-expanded={showMenu}
                          aria-controls={submenuId}
                          onClick={() => setShowMenu((open) => !open)}
                        >
                          {el.name}
                          <ChevronDown
                            size={14}
                            className={`transition-transform ${
                              showMenu ? 'rotate-180' : ''
                            }`}
                            aria-hidden="true"
                          />
                        </button>

                        {showMenu && (
                          <ul
                            id={submenuId}
                            className="mt-1 space-y-1 rounded-lg bg-slate-800 p-2 text-sm text-slate-200 md:absolute md:left-0 md:top-full md:z-10 md:mt-2 md:w-48 md:bg-white md:text-slate-900 md:shadow-lg"
                          >
                            {el.children.map((child) => (
                              <li key={`${el.name}-${child.name}`}>
                                <a
                                  className="block rounded px-3 py-2 transition hover:bg-slate-700 md:hover:bg-slate-100"
                                  href={child.link}
                                  onClick={closeNavigation}
                                >
                                  {child.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <a
                        className="block py-2 text-slate-300 transition hover:text-white md:py-0"
                        href={el.link}
                        onClick={closeNavigation}
                      >
                        {el.name}
                      </a>
                    )}
                  </li>
                )
              })}
            </ul>

            <a
              href="#contact"
              className="inline-flex shrink-0 justify-center rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
              onClick={closeNavigation}
            >
              Let&apos;s talk
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header