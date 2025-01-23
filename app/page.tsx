import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-zinc-100">
      <div className="container mx-auto px-6 py-8">
        <h1 className="mb-4 text-3xl font-bold">Welcome to Dashboard</h1>
        <p className="mb-4">Scroll down to see the navbar stick to the top.</p>
      </div>
      {/* Create multiple sections to enable scrolling */}
      {[...Array(5)].map((_, index) => (
        <section key={index} className="min-h-screen bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="mb-4 text-2xl font-semibold">Section {index + 1}</h2>
            <p>This is a full-height section to demonstrate the sticky navbar.</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Sample content cards */}
              {[...Array(3)].map((_, cardIndex) => (
                <div key={cardIndex} className="rounded-lg bg-zinc-50 p-6 shadow-md transition-shadow hover:shadow-lg">
                  <h3 className="mb-2 text-xl font-semibold">Feature {cardIndex + 1}</h3>
                  <p className="text-gray-600">
                    This is a sample feature card. It demonstrates content within each full-height section.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  )
}


