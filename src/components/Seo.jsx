import { useEffect } from 'react'

export default function Seo({ title, description, jsonLd }) {
  useEffect(() => {
    if (title) document.title = title

    let metaDescription = document.head.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    if (description) metaDescription.setAttribute('content', description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `${window.location.origin}${window.location.pathname}`)

    const jsonLdEntries = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []
    const scripts = jsonLdEntries.map((entry) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(entry)
      document.head.appendChild(script)
      return script
    })

    return () => {
      scripts.forEach((script) => script.remove())
    }
  }, [title, description, jsonLd])

  return null
}
