import { REGIONS } from './constants'

export function isFamilyGroup({ passengers, childSeat, largeBags, pram }) {
  const passengerCount = Number(passengers) || 0
  const bagsCount = Number(largeBags) || 0
  return (
    passengerCount >= 5 ||
    (childSeat && childSeat !== 'None') ||
    bagsCount >= 4 ||
    pram === 'Yes'
  )
}

export function calculateFare({ regionId, passengers, childSeat, largeBags, pram }) {
  const region = REGIONS.find((r) => r.id === regionId)
  if (!region) return null

  const family = isFamilyGroup({ passengers, childSeat, largeBags, pram })
  const tier = family ? region.family : region.standard

  return {
    region,
    tier: family ? 'Family / Group' : 'Standard',
    amount: tier.now,
  }
}
