import { useEffect, useState } from "react"
import "./CardFlip.css"

const cards = [
  { id: 1, frontColor: "bg-gradient-to-r from-black to-gray-800", frontText: "BRISKPAY", backText: "John Doe\nValid Thru: 12/28\nCVV: ***" },
  { id: 2, frontColor: "bg-gradient-to-br from-blue-700 to-indigo-900", frontText: "BRISKPAY", backText: "Jane Smith\nValid Thru: 06/27\nCVV: ***" },
  { id: 3, frontColor: "bg-gradient-to-tr from-purple-700 to-fuchsia-900", frontText: "BRISKPAY", backText: "Alex Lee\nValid Thru: 04/26\nCVV: ***" },
  { id: 4, frontColor: "bg-gradient-to-r from-green-700 to-teal-900", frontText: "BRISKPAY", backText: "Lisa Ray\nValid Thru: 09/29\nCVV: ***" },
  { id: 5, frontColor: "bg-gradient-to-r from-orange-600 to-yellow-500", frontText: "BRISKPAY", backText: "Mark Z\nValid Thru: 03/30\nCVV: ***" },
  { id: 6, frontColor: "bg-gradient-to-br from-slate-700 to-zinc-900", frontText: "BRISKPAY", backText: "Eva Green\nValid Thru: 11/25\nCVV: ***" }
]

export default function CardFlipCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])


  const prevCard = cards[(index - 1 + cards.length) % cards.length]
  const currentCard = cards[index]
  const nextCard = cards[(index + 1) % cards.length]

  return (
    <div className="w-full relative h-[250px] overflow-hidden bg-gray-100">
    
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-[200%] transition-all duration-700 ease-in-out">

        
        <div className="flip-card w-[280px] scale-90 opacity-50 mx-2">
          <div className="flip-card-inner">
            <div className={`flip-card-front ${prevCard.frontColor} text-white p-6 rounded-2xl shadow-xl relative`}>
              <div className="absolute top-4 left-4 w-10 h-8" />
              <div className="text-2xl font-bold">{prevCard.frontText}</div>
              <div className="absolute bottom-4 right-4 text-lg font-semibold">VISA</div>
            </div>
            <div className="flip-card-back bg-gray-900 text-white p-6 rounded-2xl shadow-xl text-sm whitespace-pre-line">
              {prevCard.backText}
            </div>
          </div>
        </div>

        
        <div className="flip-card w-[320px] scale-100 mx-4 z-10">
          <div className="flip-card-inner">
            <div className={`flip-card-front ${currentCard.frontColor} text-white p-6 rounded-2xl shadow-xl relative`}>
              <div className="absolute top-4 left-4 w-10 h-8" />
              <div className="text-2xl font-bold">{currentCard.frontText}</div>
              <div className="absolute bottom-4 right-4 text-lg font-semibold">VISA</div>
            </div>
            <div className="flip-card-back bg-gray-900 text-white p-6 rounded-2xl shadow-xl text-sm whitespace-pre-line">
              {currentCard.backText}
            </div>
          </div>
        </div>

      
        <div className="flip-card w-[280px] scale-90 opacity-50 mx-2">
          <div className="flip-card-inner">
            <div className={`flip-card-front ${nextCard.frontColor} text-white p-6 rounded-2xl shadow-xl relative`}>
              <div className="absolute top-4 left-4 w-10 h-8" />
              <div className="text-2xl font-bold">{nextCard.frontText}</div>
              <div className="absolute bottom-4 right-4 text-lg font-semibold">VISA</div>
            </div>
            <div className="flip-card-back bg-gray-900 text-white p-6 rounded-2xl shadow-xl text-sm whitespace-pre-line">
              {nextCard.backText}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
