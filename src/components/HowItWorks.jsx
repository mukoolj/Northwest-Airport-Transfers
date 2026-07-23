const STEPS = [
  {
    step: '1',
    title: 'Tell us your suburb',
    desc: 'We calculate your zone from a simple list of North West Sydney suburbs.',
  },
  {
    step: '2',
    title: 'Standard or Family/Group?',
    desc: 'Based on your passengers, bags and whether you need a child seat.',
  },
  {
    step: '3',
    title: 'Fixed fare confirmed',
    desc: 'Locked in before your trip — no surprises, no surge, no hidden fees.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-canvas py-10 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold text-navy-900 md:text-4xl">
            How it works
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:mt-12 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.step}
              className="rounded-2xl border border-line bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-gold-300 to-gold-500 font-display text-lg font-extrabold text-navy-900">
                {s.step}
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
