import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { REGIONS, BUSINESS } from '../lib/constants'
import { calculateFare } from '../lib/pricing'
import { supabase } from '../lib/supabaseClient'

const inputClass =
  'w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-navy-900 placeholder-slate-400 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500'

const initialForm = {
  fullName: '',
  mobile: '',
  email: '',
  tripType: '',
  pickupAddress: '',
  destination: '',
  travelDate: '',
  pickupTime: '',
  passengers: '',
  terminal: '',
  regionId: '',
  consent: false,
  flightNumber: '',
  largeBags: '0',
  smallBags: '0',
  childSeat: 'None',
  pram: 'No',
  specialRequests: '',
}

function Field({ label, required, optional, error, helper, children, className = '' }) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
        {required && <span className="ml-0.5 text-red-600">*</span>}
        {optional && <span className="ml-1.5 text-xs font-normal text-slate-400">(optional)</span>}
      </label>
      {children}
      {helper && !error && <p className="mt-1 text-xs text-slate-400">{helper}</p>}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  )
}

export default function BookingForm() {
  const navigate = useNavigate()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [duplicateMessage, setDuplicateMessage] = useState('')
  const [submitError, setSubmitError] = useState('')

  const fare = useMemo(() => {
    if (!form.regionId) return null
    return calculateFare({
      regionId: form.regionId,
      passengers: form.passengers,
      childSeat: form.childSeat,
      largeBags: form.largeBags,
      pram: form.pram,
    })
  }, [form.regionId, form.passengers, form.childSeat, form.largeBags, form.pram])

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
    setErrors((e) => ({ ...e, [field]: undefined }))
    setDuplicateMessage('')
    setSubmitError('')
  }

  function validate() {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'Full name is required.'
    if (!form.mobile.trim()) e.mobile = 'Mobile number is required.'
    else if (!/^[0-9+()\s-]{8,}$/.test(form.mobile.trim())) e.mobile = 'Enter a valid mobile number.'
    if (!form.email.trim()) e.email = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Enter a valid email address.'
    if (!form.tripType) e.tripType = 'Select departure or arrival.'
    if (!form.pickupAddress.trim()) e.pickupAddress = 'Pickup address is required.'
    if (!form.destination.trim()) e.destination = 'Destination is required.'
    if (!form.travelDate) e.travelDate = 'Travel date is required.'
    if (!form.pickupTime) e.pickupTime = 'Pickup time is required.'
    if (!form.passengers) e.passengers = 'Select number of passengers.'
    if (!form.terminal) e.terminal = 'Select a terminal.'
    if (!form.regionId) e.regionId = 'Select your region.'
    if (!form.consent) e.consent = 'Please confirm you understand this is an estimated fare.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(ev) {
    ev.preventDefault()
    if (submitting) return
    if (!validate()) return

    setSubmitting(true)
    setDuplicateMessage('')
    setSubmitError('')

    try {
      const { data: isDuplicate, error: lookupError } = await supabase.rpc(
        'check_booking_duplicate',
        {
          p_email: form.email.trim().toLowerCase(),
          p_travel_date: form.travelDate,
          p_pickup_time: form.pickupTime,
        }
      )

      if (lookupError) throw lookupError

      if (isDuplicate) {
        setDuplicateMessage(
          `A booking request already exists. WhatsApp us on ${BUSINESS.phoneDisplay} to make changes.`
        )
        setSubmitting(false)
        return
      }

      const region = REGIONS.find((r) => r.id === form.regionId)

      const payload = {
        full_name: form.fullName.trim(),
        mobile: form.mobile.trim(),
        email: form.email.trim().toLowerCase(),
        trip_type: form.tripType,
        pickup_address: form.pickupAddress.trim(),
        destination: form.destination.trim(),
        travel_date: form.travelDate,
        pickup_time: form.pickupTime,
        passengers: Number(form.passengers),
        terminal: form.terminal,
        region_id: form.regionId,
        region_label: region?.label ?? '',
        fare_tier: fare?.tier ?? '',
        estimated_fare: fare?.amount ?? null,
        flight_number: form.flightNumber.trim() || null,
        large_bags: Number(form.largeBags) || 0,
        small_bags: Number(form.smallBags) || 0,
        child_seat: form.childSeat,
        pram: form.pram,
        special_requests: form.specialRequests.trim() || null,
        consent: form.consent,
        status: 'pending',
      }

      const { error: insertError } = await supabase.from('bookings').insert(payload)
      if (insertError) throw insertError

      supabase.functions.invoke('send-booking-emails', { body: payload }).catch(() => {})

      navigate('/booking-success')
    } catch (err) {
      console.error(err)
      if (err?.code === '23505') {
        setDuplicateMessage(
          `A booking request already exists. WhatsApp us on ${BUSINESS.phoneDisplay} to make changes.`
        )
      } else {
        setSubmitError('Something went wrong submitting your booking. Please try again or WhatsApp us directly.')
      }
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" required error={errors.fullName}>
          <input
            className={inputClass}
            value={form.fullName}
            onChange={(e) => update('fullName', e.target.value)}
            placeholder="Jane Smith"
          />
        </Field>

        <Field label="Mobile number" required error={errors.mobile}>
          <input
            className={inputClass}
            value={form.mobile}
            onChange={(e) => update('mobile', e.target.value)}
            placeholder="04xx xxx xxx"
            type="tel"
          />
        </Field>

        <Field label="Email address" required error={errors.email}>
          <input
            className={inputClass}
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="you@example.com"
            type="email"
          />
        </Field>

        <Field label="Trip type" required error={errors.tripType}>
          <select
            className={inputClass}
            value={form.tripType}
            onChange={(e) => update('tripType', e.target.value)}
          >
            <option value="">Select trip type</option>
            <option value="Departure">Departure</option>
            <option value="Arrival">Arrival</option>
          </select>
        </Field>

        <Field label="Pickup address" required error={errors.pickupAddress}>
          <input
            className={inputClass}
            value={form.pickupAddress}
            onChange={(e) => update('pickupAddress', e.target.value)}
            placeholder="Street address or suburb"
          />
        </Field>

        <Field label="Destination" required error={errors.destination}>
          <input
            className={inputClass}
            value={form.destination}
            onChange={(e) => update('destination', e.target.value)}
            placeholder="e.g. Sydney Airport T1"
          />
        </Field>

        <Field label="Travel date" required error={errors.travelDate}>
          <input
            className={inputClass}
            value={form.travelDate}
            onChange={(e) => update('travelDate', e.target.value)}
            type="date"
          />
        </Field>

        <Field label="Pickup time" required error={errors.pickupTime}>
          <input
            className={inputClass}
            value={form.pickupTime}
            onChange={(e) => update('pickupTime', e.target.value)}
            type="time"
          />
        </Field>

        <Field label="Passengers" required error={errors.passengers}>
          <select
            className={inputClass}
            value={form.passengers}
            onChange={(e) => update('passengers', e.target.value)}
          >
            <option value="">Select passengers</option>
            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </Field>

        <Field label="Terminal" required error={errors.terminal}>
          <select
            className={inputClass}
            value={form.terminal}
            onChange={(e) => update('terminal', e.target.value)}
          >
            <option value="">Select terminal</option>
            <option value="T1 International">T1 International</option>
            <option value="T2 Domestic">T2 Domestic</option>
            <option value="T3 Domestic">T3 Domestic</option>
          </select>
        </Field>

        <Field label="Region" required error={errors.regionId} helper="Your fare is calculated automatically from this.">
          <select
            className={inputClass}
            value={form.regionId}
            onChange={(e) => update('regionId', e.target.value)}
          >
            <option value="">Select your region</option>
            {REGIONS.map((r) => (
              <option key={r.id} value={r.id}>{r.label}</option>
            ))}
          </select>
        </Field>
      </div>

      {fare && (
        <div className="rounded-xl border border-gold-300 bg-gold-50 px-5 py-4 text-center">
          <p className="font-display text-lg font-bold text-gold-700">
            Your estimated fare is ${fare.amount} — fixed, all tolls included.
          </p>
          <p className="mt-1 text-xs text-slate-500">{fare.tier} rate for {fare.region.label}</p>
        </div>
      )}

      <div className="border-t border-line pt-8">
        <h3 className="font-display text-lg font-bold text-navy-900">Optional details</h3>
        <p className="mt-1 text-sm text-slate-500">
          Help us prepare the right vehicle — none of this is required to submit.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field
            label="Flight number"
            optional
            helper="Required for pickups so we can track your flight"
          >
            <input
              className={inputClass}
              value={form.flightNumber}
              onChange={(e) => update('flightNumber', e.target.value)}
              placeholder="e.g. QF1"
            />
          </Field>

          <Field label="Child seat" optional>
            <select
              className={inputClass}
              value={form.childSeat}
              onChange={(e) => update('childSeat', e.target.value)}
            >
              <option value="None">None</option>
              <option value="Infant 0-4 yrs">Infant 0–4 yrs</option>
              <option value="Booster 0-8 yrs">Booster 0–8 yrs</option>
              <option value="Both">Both</option>
            </select>
          </Field>

          <Field label="Large bags" optional>
            <input
              className={inputClass}
              value={form.largeBags}
              onChange={(e) => update('largeBags', e.target.value)}
              type="number"
              min="0"
              max="10"
            />
          </Field>

          <Field label="Small bags" optional>
            <input
              className={inputClass}
              value={form.smallBags}
              onChange={(e) => update('smallBags', e.target.value)}
              type="number"
              min="0"
              max="10"
            />
          </Field>

          <Field label="Pram" optional>
            <select
              className={inputClass}
              value={form.pram}
              onChange={(e) => update('pram', e.target.value)}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </Field>

          <Field label="Special requests" optional className="sm:col-span-2">
            <textarea
              className={inputClass}
              value={form.specialRequests}
              onChange={(e) => update('specialRequests', e.target.value)}
              rows={3}
              placeholder="Anything else we should know?"
            />
          </Field>
        </div>
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => update('consent', e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border border-gray-400 bg-white accent-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
          />
          I understand this is an estimated fare pending availability confirmation
        </label>
        {errors.consent && <p className="mt-1 text-xs text-red-600">{errors.consent}</p>}
      </div>

      {duplicateMessage && (
        <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
          {duplicateMessage}
        </div>
      )}
      {submitError && (
        <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-8 py-4 text-base font-bold text-navy-900 shadow-lg shadow-gold-500/25 transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting && <Loader2 size={20} className="animate-spin" />}
        {submitting ? 'Submitting…' : 'Request Booking'}
      </button>
    </form>
  )
}
