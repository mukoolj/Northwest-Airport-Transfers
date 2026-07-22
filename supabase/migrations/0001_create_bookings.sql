-- Bookings table for Northwest Airport Transfers
create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  mobile text not null,
  email text not null,
  trip_type text not null,
  pickup_address text not null,
  destination text not null,
  travel_date date not null,
  pickup_time time not null,
  passengers integer not null,
  terminal text not null,
  region_id text not null,
  region_label text not null,
  fare_tier text not null,
  estimated_fare numeric,
  flight_number text,
  large_bags integer default 0,
  small_bags integer default 0,
  child_seat text default 'None',
  pram text default 'No',
  special_requests text,
  consent boolean not null default false,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

-- Prevent duplicate requests for the same email + travel date + pickup time
create unique index if not exists bookings_dedupe_idx
  on public.bookings (email, travel_date, pickup_time);

alter table public.bookings enable row level security;

-- Allow the public site (anon key) to insert a booking request.
-- No SELECT policy is granted to anon, so the bookings table (customer
-- names, emails, phone numbers, addresses) is never directly readable
-- from the browser.
create policy "Allow public booking inserts"
  on public.bookings
  for insert
  to anon
  with check (true);

-- Duplicate-check helper: lets the frontend ask "does a booking already
-- exist for this email + date + time?" without exposing any row data.
-- SECURITY DEFINER runs with the function owner's privileges so it can
-- read the table even though anon has no SELECT grant on it directly.
create or replace function public.check_booking_duplicate(
  p_email text,
  p_travel_date date,
  p_pickup_time time
)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.bookings
    where email = lower(p_email)
      and travel_date = p_travel_date
      and pickup_time = p_pickup_time
  );
$$;

revoke all on function public.check_booking_duplicate(text, date, time) from public;
grant execute on function public.check_booking_duplicate(text, date, time) to anon;
