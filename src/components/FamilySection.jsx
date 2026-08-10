import { Baby, Luggage, Armchair, DoorOpen } from 'lucide-react'
import { QUOTE_REQUEST_MESSAGE } from '../lib/constants'
import WhatsAppCTA from './WhatsAppCTA'
import Reveal from './Reveal'
import jeepImage from '../assets/images/jeep.jpg'

const BENEFITS = [
  {
    icon: Baby,
    title: 'Child seats available',
    desc: 'Suitable child seating can be arranged when requested at booking.',
  },
  {
    icon: Luggage,
    title: 'Room for luggage & prams',
    desc: 'A full-size SUV gives families substantially more flexibility than relying on a randomly assigned rideshare vehicle.',
  },
  {
    icon: Armchair,
    title: 'Up to 7 seats',
    desc: 'Ideal for families and small groups travelling together.',
  },
  {
    icon: DoorOpen,
    title: 'Private door-to-door transfer',
    desc: 'No shared shuttle, multiple stops or surge pricing.',
  },
]

export default function FamilySection() {
  return (
    <section className="bg-canvas-alt py-12 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center md:gap-14">
        <Reveal className="order-2 md:order-1">
          <h2 className="font-display text-2xl font-bold text-navy-900 md:text-4xl">
            Travelling with kids, prams and luggage?
          </h2>
          <p className="mt-2 font-display text-lg font-semibold text-gold-600">
            That's exactly what we're built for.
          </p>
          <p className="mt-4 max-w-lg text-slate-600">
            Airport travel with a family comes with enough logistics already.
            We provide a spacious private transfer with room for passengers,
            suitcases and prams — with child seats available when requested.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {BENEFITS.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.title} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold-50 text-gold-600">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-navy-900">{b.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-600">{b.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8">
            <WhatsAppCTA
              label="Get a Family Transfer Quote"
              message={QUOTE_REQUEST_MESSAGE}
              showPromise={false}
            />
          </div>
        </Reveal>

        <Reveal delay={100} className="order-1 md:order-2">
          <div className="overflow-hidden rounded-3xl border border-line shadow-lg">
            <img
              src={jeepImage}
              alt="White Jeep Grand Cherokee L with room for family luggage, prams and up to seven passengers"
              loading="lazy"
              className="h-64 w-full object-cover sm:h-80 md:h-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
