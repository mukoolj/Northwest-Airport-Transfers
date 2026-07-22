import { BUSINESS } from './constants'
import { FAQS } from './constants'

export const taxiServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TaxiService',
  name: BUSINESS.name,
  description:
    'Premium fixed-fare airport transfers across North West Sydney. All tolls included, no surge pricing, child seats available.',
  telephone: '+61493002728',
  email: BUSINESS.email,
  priceRange: '$89-$170',
  openingHours: 'Mo-Su 00:00-24:00',
  areaServed: [
    'Parramatta',
    'Blacktown',
    'Castle Hill',
    'Stanhope Gardens',
    'Kellyville',
    'Rouse Hill',
    'Box Hill',
    'Norwest',
    'Seven Hills',
    'Ryde',
    'Epping',
  ],
}

export function faqJsonLd(faqs = FAQS) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}
