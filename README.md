# Northwest Airport Transfers

A React + Vite + Tailwind CSS site for Northwest Airport Transfers — fixed-fare
airport transfers across North West Sydney, with WhatsApp as the primary
booking channel and a Supabase-backed booking form.

## Tech stack

- **React 19 + Vite** — frontend
- **Tailwind CSS v4** — styling (dark navy / gold theme)
- **React Router** — Home, Pricing, Contact / Book Now, Booking Success
- **Supabase** — Postgres database for booking requests
- **Resend** (via a Supabase Edge Function) — booking confirmation emails
- **Vercel** — hosting

## Local development

```bash
npm install
cp .env.example .env   # then fill in your Supabase values
npm run dev
```

## Environment variables

Copy `.env.example` to `.env` and fill in your Supabase project details:

```
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-public-key
```

These two are safe to expose in the frontend — the Supabase anon key is
designed for browser use and is constrained by Row Level Security (RLS), not
a secret. **Never** put your Resend API key or a Supabase service role key in
this file or anywhere in the frontend code — see below.

## Supabase setup

1. Create a new project at [supabase.com](https://supabase.com).
2. In **SQL Editor**, run the migration in
   [`supabase/migrations/0001_create_bookings.sql`](supabase/migrations/0001_create_bookings.sql).
   This creates the `bookings` table with:
   - A unique index on `(email, travel_date, pickup_time)` so the same
     customer can't accidentally submit the same trip twice.
   - Row Level Security enabled, with an `insert`-only policy for the
     public `anon` role (the table is **not** readable from the browser).
   - A `check_booking_duplicate(email, date, time)` function the frontend
     calls to show a friendly "you've already booked this" message without
     ever exposing other customers' data.
3. Copy your project's **Project URL** and **anon public key** from
   **Settings → API** into `.env` (see above).

### Booking flow

- The form in `src/components/BookingForm.jsx` validates all required
  fields, calculates an estimated fare from the selected region and trip
  details, checks for a duplicate booking via RPC, then inserts a row into
  `bookings` with `status = 'pending'`.
- On success it best-effort invokes the `send-booking-emails` Edge Function
  (see below) and redirects to `/booking-success`.

## Email notifications (Resend + Supabase Edge Function)

Emails are sent from a Supabase Edge Function (`supabase/functions/send-booking-emails`)
so the Resend API key is **never shipped to the browser**.

1. [Install the Supabase CLI](https://supabase.com/docs/guides/cli) and log in:
   ```bash
   npm install -g supabase
   supabase login
   supabase link --project-ref your-project-ref
   ```
2. Create a free [Resend](https://resend.com) account and API key.
3. Set the Edge Function secrets (these stay server-side only):
   ```bash
   supabase secrets set RESEND_API_KEY=your-resend-api-key
   supabase secrets set BUSINESS_EMAIL=northwestairportnsw@gmail.com
   supabase secrets set RESEND_FROM_EMAIL="Northwest Airport Transfers <bookings@yourdomain.com>"
   ```
   `RESEND_FROM_EMAIL` must use a domain you've verified in Resend (or the
   Resend sandbox address while testing).
4. Deploy the function:
   ```bash
   supabase functions deploy send-booking-emails
   ```

The function sends:
- **Business notification** to `BUSINESS_EMAIL` — subject
  `New Booking Request — [Name] — [Date]`, with the full booking details and
  quoted fare.
- **Customer acknowledgement** to the booker's email — subject
  `Booking Request Received — Northwest Airport Transfers`, confirming their
  details, that they'll hear back within 2 hours, and the WhatsApp number.

## Deploying to Vercel

1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com), **New Project** → import the repo.
   `vercel.json` is already configured (Vite framework preset, SPA rewrites
   for React Router).
3. Add the environment variables from `.env.example` in
   **Project Settings → Environment Variables**:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy. Vercel's free tier is sufficient for this project.

## Project structure

```
src/
  components/   Shared UI: Navbar, Footer, WhatsApp CTAs, booking form, etc.
  pages/        Home, Pricing, Contact, BookingSuccess
  lib/          Business constants, pricing logic, Supabase client
  hooks/        useCountdown (introductory offer timer)
supabase/
  migrations/   SQL schema for the bookings table
  functions/    send-booking-emails Edge Function (Resend integration)
```

## Business details

- Phone / WhatsApp: **0493 002 728** ([wa.me/61493002728](https://wa.me/61493002728))
- Email: northwestairportnsw@gmail.com
- Service area: North West Sydney and surrounds
