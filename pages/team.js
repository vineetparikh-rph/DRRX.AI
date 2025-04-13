// pages/team.js
import Head from 'next/head'
import Link from 'next/link'

export default function Team() {
  return (
    <>
      <Head>
        <title>Meet the Team | DRRX-AI</title>
      </Head>
      <main className="min-h-screen bg-white text-gray-900 px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Meet the Team</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-red-600">Dr. Vineet Parikh, PharmD – CEO</h2>
          <p className="mt-2">Dr. Vineet Parikh is a pharmacist, entrepreneur, and digital healthcare builder...</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-red-600">Sankar K. – CTO</h2>
          <p className="mt-2">Sankar K. is a seasoned technology executive with a distinguished career leading enterprise IT solutions...</p>
        </section>

        <div className="text-center mt-12">
          <Link href="/">
            <a className="text-blue-600 hover:underline">← Back to Home</a>
          </Link>
        </div>
      </main>
    </>
  )
}
