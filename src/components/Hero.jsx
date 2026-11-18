import { ArrowUpRight, Check, Sparkles } from 'lucide-react'

const stats = [
  { label: 'Projects', value: '120+' },
  { label: 'Clients', value: '35+' },
  { label: 'Reviews', value: '4.9/5' },
]

const features = [
  'Modern UI Design',
  'Fast Performance',
  'Responsive Layout',
]

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-6 py-20 sm:py-28 lg:py-32"
    >
      <div className="absolute -left-32 top-12 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 -z-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
            <Sparkles size={16} aria-hidden="true" />
            Creative digital studio
          </div>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            We build websites that help your business{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              stand out.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            From thoughtful design to fast, reliable development, we create
            digital experiences that turn your ideas into real growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore our work
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-5 py-3 font-semibold text-white transition hover:border-slate-500 hover:bg-white/5"
            >
              Let&apos;s talk
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-slate-300"
              >
                <Check size={16} className="text-cyan-300" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          <dl className="mt-12 flex flex-wrap gap-10 border-t border-slate-800 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-sm text-slate-400">{stat.label}</dt>
                <dd className="mt-1 text-2xl font-bold text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 blur-2xl" />
          <div className="relative rounded-2xl border border-slate-700/80 bg-slate-900/90 p-3 shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-slate-800 px-3 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <div className="ml-3 flex-1 rounded-md bg-slate-800 px-3 py-1 text-xs text-slate-400">
                yourbrand.com
              </div>
            </div>

            <div className="rounded-b-xl bg-gradient-to-br from-slate-800 to-slate-950 p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold tracking-wide text-white">
                  YOUR BRAND
                </span>
                <span className="text-xs text-slate-400">Digital storefront</span>
              </div>
              <div className="mt-10 max-w-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Made for what&apos;s next
                </p>
                <p className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Great ideas deserve a great website.
                </p>
                <div className="mt-6 h-2 w-24 rounded-full bg-cyan-400" />
                <div className="mt-3 h-2 w-40 rounded-full bg-slate-700" />
              </div>
              <div className="mt-10 grid grid-cols-3 gap-3">
                {['Design', 'Build', 'Grow'].map((item, index) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-700/80 bg-slate-900/70 p-3 sm:p-4"
                  >
                    <span className="text-xs text-cyan-300">0{index + 1}</span>
                    <p className="mt-2 text-sm font-medium text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
