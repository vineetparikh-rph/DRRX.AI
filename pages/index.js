import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-4xl text-center">
        {/* Animated SVG Logo */}
        <div className="mb-6">
          <img
            src="/drrx-ai-logo.svg"
            alt="DRRX-AI Animated Logo"
            className="mx-auto w-32 h-32"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Empowering Healthcare with Smart AI
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl mb-6 text-gray-700">
          DRRX-AI delivers scalable, intelligent, and empathetic patient engagement tools using voice, text, and real-time data to revolutionize pharmacy and hospital workflows.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center gap-4">
          <Link href="/demo">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition">
              Request a Demo
            </button>
          </Link>
          <Link href="/team">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow transition">
              Meet the Team
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
