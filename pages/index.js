
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 text-gray-800">
      <header className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo-drrx-ai.png" alt="DRRX-AI Logo" className="w-12 h-12" />
          <h1 className="text-2xl font-bold">DRRX-AI</h1>
        </div>
        <nav className="space-x-6">
          <a href="/">Home</a>
          <a href="/team">Team</a>
          <a href="/demo">Demo</a>
          <a href="/faq">FAQ</a>
        </nav>
      </header>
      <main className="text-center py-20 px-6">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-4">Empowering Healthcare with Smart AI</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          DRRX-AI delivers scalable, intelligent, and empathetic patient engagement tools using voice, text, and real-time data to revolutionize pharmacy and hospital workflows.
        </p>
      </main>
    </div>
  );
}
