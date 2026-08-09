import { REGIONS } from './constants'

export const TERMINALS = ['T1 International', 'T2 Domestic', 'T3 Domestic']

// Flat, alphabetically-sorted list of every suburb across all regions,
// each tagged with the region it belongs to — used to populate the
// fare calculator's suburb dropdown and to look up a region by suburb.
export const SUBURB_OPTIONS = REGIONS.flatMap((region) =>
  region.suburbs.map((suburb) => ({ suburb, regionId: region.id }))
).sort((a, b) => a.suburb.localeCompare(b.suburb))

export function getRegionBySuburb(suburb) {
  return REGIONS.find((region) => region.suburbs.includes(suburb)) ?? null
}
