import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const fieldClassName =
  'mt-2 w-full rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20'

const Contact = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus(
      'Your details passed the browser checks. This demo is not connected to a server, so nothing was sent.',
    )
  }

  return (
    <section id="contact" className="px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            Tell us a little about what you need, and let&apos;s explore how we
            can make it happen.
          </p>
          <p className="mt-6 text-sm leading-6 text-slate-500">
            National ID numbers are sensitive. Only provide one when necessary.
            This demo does not transmit or store your information. A production
            server must validate submissions again and protect personal data.
          </p>
        </div>

        <form
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20 sm:p-8"
          onSubmit={handleSubmit}
          aria-describedby="contact-form-note"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="text-sm font-medium text-slate-200"
              >
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                minLength={2}
                maxLength={80}
                pattern=".*\S.*"
                title="Enter at least 2 characters and include a non-space character."
                placeholder="Your name"
                className={fieldClassName}
              />
            </div>

            <div>
              <label
                htmlFor="contact-national-id"
                className="text-sm font-medium text-slate-200"
              >
                National ID
              </label>
              <input
                id="contact-national-id"
                name="nationalId"
                type="text"
                autoComplete="off"
                inputMode="numeric"
                required
                minLength={5}
                maxLength={20}
                pattern="[0-9]{5,20}"
                title="Enter 5 to 20 digits. The exact format depends on your country."
                placeholder="National ID number"
                className={fieldClassName}
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="text-sm font-medium text-slate-200"
              >
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                required
                maxLength={254}
                placeholder="you@example.com"
                className={fieldClassName}
              />
            </div>

            <div>
              <label
                htmlFor="contact-phone"
                className="text-sm font-medium text-slate-200"
              >
                Mobile number
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                required
                maxLength={16}
                pattern="\+?[0-9]{7,15}"
                title="Enter 7 to 15 digits, optionally starting with +."
                placeholder="+1234567890"
                className={fieldClassName}
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Check and continue
            <ArrowUpRight size={18} aria-hidden="true" />
          </button>

          <p
            id="contact-form-note"
            className="mt-4 min-h-6 text-sm text-cyan-200"
            role="status"
            aria-live="polite"
          >
            {status}
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
