export const BUSINESS = {
  name: "Northwest Airport Transfers",
  phoneDisplay: "0493 002 728",
  phoneTel: "tel:0493002728",
  phoneDigits: "0493002728",
  whatsappNumber: "61493002728",
  email: "northwestairportnsw@gmail.com",
  serviceArea: "North West Sydney and surrounds",
  offerEndDate: "2026-12-31T23:59:59+11:00",
};

export function whatsappLink(message) {
  const defaultMessage = "Hi, I'd like a quote for an airport transfer.";
  const text = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${text}`;
}

// Regions: id, label, standard price (was/now), family price (was/now), suburbs
export const REGIONS = [
  {
    id: "parramatta",
    label: "Parramatta Region",
    standard: { was: 99, now: 89 },
    family: { was: 120, now: 100 },
    suburbs: [
      "Parramatta", "Westmead", "Merrylands", "Guildford", "Wentworthville",
      "Toongabbie", "Pendle Hill", "Auburn", "Lidcombe", "Strathfield",
      "Burwood", "Homebush", "Rhodes",
    ],
  },
  {
    id: "blacktown",
    label: "Blacktown Region",
    standard: { was: 110, now: 100 },
    family: { was: 130, now: 110 },
    suburbs: ["Blacktown", "Seven Hills", "Kings Langley"],
  },
  {
    id: "ryde",
    label: "Ryde Region",
    standard: { was: 120, now: 110 },
    family: { was: 140, now: 120 },
    suburbs: ["Ryde", "Epping", "Marsfield", "North Ryde", "Meadowbank"],
  },
  {
    id: "hills",
    label: "Hills District",
    standard: { was: 130, now: 120 },
    family: { was: 155, now: 135 },
    suburbs: [
      "Castle Hill", "Baulkham Hills", "Winston Hills", "Norwest",
      "Bella Vista", "Carlingford", "Pennant Hills", "Cherrybrook",
    ],
  },
  {
    id: "stanhope",
    label: "Stanhope / Kellyville",
    standard: { was: 130, now: 120 },
    family: { was: 165, now: 145 },
    suburbs: [
      "Stanhope Gardens", "The Ponds", "Glenwood", "Kellyville", "Colebee",
      "Marsden Park", "Quakers Hill", "Parklea", "Kellyville Ridge",
    ],
  },
  {
    id: "rousehill",
    label: "Rouse Hill / Box Hill",
    standard: { was: 150, now: 140 },
    family: { was: 175, now: 155 },
    suburbs: ["Rouse Hill", "Box Hill", "Dural"],
  },
  {
    id: "gables",
    label: "Gables / Oakville / Middle Dural",
    standard: { was: 160, now: 150 },
    family: { was: 190, now: 170 },
    suburbs: ["The Gables", "Oakville", "Middle Dural"],
  },
];

export const FLEET = [
  {
    name: "Jeep Grand Cherokee L",
    tagline: "Full-size 7-seat SUV",
  },
  {
    name: "Tesla Model Y",
    tagline: "Premium electric SUV",
  },
  {
    name: "BYD Sealion 8",
    tagline: "Premium electric SUV",
  },
];

export const FEATURES = [
  { title: "Fixed Fares", desc: "Confirmed at booking" },
  { title: "Child Seats", desc: "Britax convertible 0–4 yrs and booster 0–8 yrs" },
  { title: "Flight Tracking", desc: "On every pickup" },
  { title: "No Surge Pricing", desc: "The price is the price" },
  { title: "All Tolls Included", desc: "No hidden charges" },
  { title: "Available 24/7", desc: "Early, late, red-eye" },
];

export const TESTIMONIALS = [
  {
    quote: "Punctual, professional and the car was immaculate. Had our child seat fitted perfectly and we didn't have to worry about a thing.",
    name: "Sarah M.",
    suburb: "Castle Hill",
  },
  {
    quote: "Fixed price meant no nasty surprises. Tracked our flight and was waiting when we landed. Will use every time.",
    name: "James T.",
    suburb: "Norwest",
  },
  {
    quote: "Best airport transfer we've used. The Jeep was spotless and our driver was so helpful with the luggage.",
    name: "Priya K.",
    suburb: "Stanhope Gardens",
  },
];
