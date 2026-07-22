// Supabase Edge Function: send-booking-emails
//
// Sends two emails via Resend whenever a new booking request comes in:
//   1. A notification to the business inbox with full booking details.
//   2. An acknowledgement to the customer confirming receipt.
//
// Required environment variables (set with `supabase secrets set`):
//   RESEND_API_KEY   - Resend API key (never exposed to the frontend)
//   BUSINESS_EMAIL   - inbox that receives new booking notifications

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const BUSINESS_EMAIL = Deno.env.get('BUSINESS_EMAIL') ?? 'northwestairportnsw@gmail.com'
const FROM_EMAIL = Deno.env.get('RESEND_FROM_EMAIL') ?? 'Northwest Airport Transfers <bookings@resend.dev>'
const WHATSAPP_DISPLAY = '0493 002 728'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function formatBookingRows(booking) {
  const rows = [
    ['Trip type', booking.trip_type],
    ['Pickup address', booking.pickup_address],
    ['Destination', booking.destination],
    ['Travel date', booking.travel_date],
    ['Pickup time', booking.pickup_time],
    ['Passengers', booking.passengers],
    ['Terminal', booking.terminal],
    ['Region', booking.region_label],
    ['Fare tier', booking.fare_tier],
    ['Estimated fare', booking.estimated_fare ? `$${booking.estimated_fare}` : '—'],
    ['Flight number', booking.flight_number || '—'],
    ['Large bags', booking.large_bags],
    ['Small bags', booking.small_bags],
    ['Child seat', booking.child_seat],
    ['Pram', booking.pram],
    ['Special requests', booking.special_requests || '—'],
    ['Mobile', booking.mobile],
    ['Email', booking.email],
  ]

  return rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;color:#6b7280;font-size:13px;">${escapeHtml(label)}</td><td style="padding:6px 12px;font-size:13px;font-weight:600;">${escapeHtml(value)}</td></tr>`
    )
    .join('')
}

function businessEmailHtml(booking) {
  return `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="color:#0a1128;">New Booking Request</h2>
      <p><strong>${escapeHtml(booking.full_name)}</strong> — ${escapeHtml(booking.travel_date)}</p>
      <table style="width:100%;border-collapse:collapse;">${formatBookingRows(booking)}</table>
      <p style="margin-top:16px;font-size:13px;color:#6b7280;">Reply to the customer directly, or WhatsApp them to confirm.</p>
    </div>
  `
}

function customerEmailHtml(booking) {
  return `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="color:#0a1128;">Booking Request Received</h2>
      <p>Hi ${escapeHtml(booking.full_name)},</p>
      <p>Thanks for booking with Northwest Airport Transfers. Here's what we received:</p>
      <table style="width:100%;border-collapse:collapse;">${formatBookingRows(booking)}</table>
      <p style="margin-top:16px;">We'll confirm your booking within <strong>2 hours</strong> via WhatsApp or email.</p>
      <p>Need to make a change now? WhatsApp us on <strong>${WHATSAPP_DISPLAY}</strong>.</p>
      <p style="margin-top:24px;color:#6b7280;font-size:13px;">Northwest Airport Transfers — North West Sydney and surrounds</p>
    </div>
  `
}

async function sendEmail({ to, subject, html }) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from: FROM_EMAIL, to, subject, html }),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Resend error (${res.status}): ${text}`)
  }

  return res.json()
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  if (!RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: 'RESEND_API_KEY is not configured' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  try {
    const booking = await req.json()

    await sendEmail({
      to: BUSINESS_EMAIL,
      subject: `New Booking Request — ${booking.full_name} — ${booking.travel_date}`,
      html: businessEmailHtml(booking),
    })

    await sendEmail({
      to: booking.email,
      subject: 'Booking Request Received — Northwest Airport Transfers',
      html: customerEmailHtml(booking),
    })

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
