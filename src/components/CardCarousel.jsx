import { useState, useEffect } from "react"

const cards = [
  { id: 1, image: "./src/assets/101.jpg", title: "Split the bill" },
  { id: 2, image: "./src/assets/102.jpg", title: "Instant Payments" },
  { id: 3, image: "./src/assets/103.jpg", title: "Gift a little extra" },
  { id: 4, image: "./src/assets/104.jpg", title: "Risk Free" },
  { id: 5, image: "./src/assets/105.jpg", title: "Track Expenses" },
  { id: 6, image: "./src/assets/106.jpg", title: "One tap pay" }
]

export default function CardCarousel() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(cards.length / 3)

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages)
    }, 5000)

    return () => clearInterval(interval)
  }, [totalPages])

  const handleDotClick = (i) => {
    setPage(i)
  }

  const visibleCards = cards.slice(page * 3, page * 3 + 3)

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-all duration-500">
        {visibleCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-md overflow-hidden border-2 relative"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[300px] object-cover object-center"
            />
            <div className="absolute bottom-1 left-2 z-50 p-4 text-center font-semibold text-white text-4xl">
              {card.title}
            </div>
          </div>
        ))}
      </div>


      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === page ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
