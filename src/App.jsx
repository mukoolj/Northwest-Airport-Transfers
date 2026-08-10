import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import TopAnnouncementBar from './components/TopAnnouncementBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import StickyMobileBar from './components/StickyMobileBar'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

// The base Google tag (index.html) auto-fires one page_view on the initial
// load. Since this is a client-side-routed SPA, it never fires again on
// in-app navigation — so without this, Google Ads/Analytics would only
// ever see the first page a visitor landed on. This sends a page_view for
// every subsequent route change (skipping the first render to avoid
// double-counting the initial pageview the base tag already sent).
function AnalyticsRouteTracker() {
  const { pathname } = useLocation()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    // Deferred to the next frame so the page's own Seo component (a sibling
    // effect deeper in the tree) has already updated document.title by the
    // time we read it — otherwise this fires with the previous page's title.
    const frame = requestAnimationFrame(() => {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'page_view', {
          page_path: pathname,
          page_title: document.title,
          page_location: window.location.href,
        })
      }
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <ScrollToTop />
      <AnalyticsRouteTracker />
      <div className="sticky top-0 z-40">
        <TopAnnouncementBar />
        <Navbar />
      </div>
      <main className="flex-1 pb-16 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyMobileBar />
    </div>
  )
}

export default App
