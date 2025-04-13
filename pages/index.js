// pages/index.js
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-4xl text-center">
        <div className="mb-6">
          <video
            src="/drrx-ai-animated.mp4"
            width="150"
            height="150"
            className="mx-auto rounded-lg shadow-lg"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold mb-2">
          Empowering Healthcare with Smart AI
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-6">
          Better Systems. Better Care.
        </h2>

        <p className="text-lg sm:text-xl mb-8 text-gray-700">
          DRRX-AI delivers scalable, intelligent, and empathetic patient engagement tools using voice, text, and real-time data to revolutionize the healthcare systems and workflows.
        </p>

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
