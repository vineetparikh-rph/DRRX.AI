// pages/index.js
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl text-center">
        <div className="mb-8">
          <Image
            src="/logo-drrx-ai.png"
            alt="DRRX-AI Logo"
            width={120}
            height={120}
            className="mx-auto"
            priority
          />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Empowering Healthcare with Smart AI
        </h1>

        <p className="text-lg sm:text-xl mb-8 text-gray-700">
          DRRX-AI delivers scalable, intelligent, and empathetic patient engagement tools using voice, text, and real-time data to revolutionize pharmacy and hospital workflows.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/demo">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300">
              Request a Demo
            </button>
          </Link>
          <Link href="/team">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300">
              Meet the Team
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

}
