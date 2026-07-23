import WhatsAppCTA from './WhatsAppCTA'

export default function QuickQuote() {
  return (
    <section className="bg-canvas-alt py-10 md:py-14">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-xl font-bold text-navy-900 md:text-3xl">
          Get your fixed fare in minutes
        </h2>
        <p className="mt-3 text-slate-600">
          Just tell us your suburb, travel date and number of passengers
        </p>
        <div className="mt-6 md:mt-7">
          <WhatsAppCTA
            label="Start a conversation on WhatsApp"
            full
            size="lg"
            variant="gold"
            promiseText="Average reply time: under 15 minutes"
            className="mx-auto max-w-md"
          />
        </div>
      </div>
    </section>
  )
}
