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
          <p className="mt-2">
            Dr. Vineet Parikh is a pharmacist, entrepreneur, and digital healthcare builder on a mission to transform how care is delivered. As the founder of multiple pharmacy ventures, he combines clinical insight, business strategy, and technology to solve real-world healthcare problems — with empathy and impact at the core.
          </p>
          <p className="mt-2">
            Vineet specializes in developing AI-integrated platforms that simplify pharmacy operations, empower patients, and make the healthcare system more navigable for providers and patients alike. Whether it’s redesigning digital systems, responding to audits, or building custom applications that address day-to-day pharmacy challenges, he leads with a hands-on approach rooted in integrity, precision, and responsibility.
          </p>
          <p className="mt-2">
            Outside the world of healthcare, Vineet brings creative energy to everything he does. A lifelong music enthusiast, he’s also worked behind the scenes in Bollywood as an assistant director and assistant producer — blending logic and artistry in both business and life.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-red-600">Sankar K. – CTO</h2>
          <p className="mt-2">
            Sankar K. is a seasoned technology executive with a distinguished career leading Enterprise IT solutions across top-tier organizations like Oracle, TCS, and Deutsche Bank. With deep expertise in ERP, CRM, BI, and global program management, he has transformed operations in CPG, Media, Financial Services, and Hi-Tech industries.
          </p>
          <p className="mt-2">
            He is known for his ability to align IT and business strategies, drive operational efficiencies, and lead large-scale deployments that generate sustainable growth. Sankar’s strengths include global team leadership, outsourcing strategy, stakeholder engagement, and application portfolio planning. He brings both vision and execution to every initiative.
          </p>
        </section>

        <div className="text-center mt-12">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </main>
    </>
  )
}
