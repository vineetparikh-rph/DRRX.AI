import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Demo() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <Head>
        <title>Request a Demo – DRRX-AI</title>
      </Head>

      <div className="min-h-screen bg-white text-gray-900 px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Request a Demo</h1>

          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/drrxllc/30min"
            style={{ minWidth: '320px', height: '700px' }}
          ></div>

          <div className="mt-10 text-center">
            <Link href="/">
              <span className="text-blue-600 hover:underline">← Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
