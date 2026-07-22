import WhatsAppCTA from './WhatsAppCTA'

export default function QuickQuote() {
  return (
    <section className="bg-navy-800 py-14">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
          Get your fixed fare in minutes
        </h2>
        <p className="mt-3 text-white/70">
          Just tell us your suburb, travel date and number of passengers
        </p>
        <div className="mt-7">
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
