import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-4xl text-center">
        <div className="mb-6">
          <Image
            src="/DRRX-AI_Animated_Logo.webp"
            alt="DRRX-AI Logo"
            width={140}
            height={140}
            className="mx-auto"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Empowering Healthcare with Smart AI. Better Systems. Better Care.
        </h1>

        <p className="text-lg sm:text-xl mb-6 text-gray-700">
          DRRX-AI delivers scalable, intelligent, and empathetic patient engagement tools using voice, text, and real-time data to revolutionize the healthcare systems and workflows.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://calendly.com/drrxllc/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition">
              Request a Demo
            </button>
          </a>

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
