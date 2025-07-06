import { useState, useEffect, useRef } from "react"

const slides = [
  {
    image: "./public/assets/new1.jpg",
    heading: "Seameless Payments, Limitless Possiblities",
    subheading: "Designed for next generation, Briskpay make managing your money effortless"
  },
  {
    image: "./public/assets/new2.jpg",
    heading: "Connect Effortlessly",
    subheading: "Send money to anyone, anytime"
  },
  {
    image: "./public/assets/3.jpg",
    heading: "Secure. Simple. Seamless.",
    subheading: "Your payments, protected and powerful"
  }
]

export default function ImageRevealSlider() {
  const [index, setIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)

  const containerRef = useRef(null)
  const revealRef = useRef(null)
  const mousePos = useRef({ x: 0, y: 0 })

  const currentSlide = slides[index]
  const nextSlide = slides[(index + 1) % slides.length]

  useEffect(() => {
    const animate = () => {
      const { x, y } = mousePos.current
      if (revealRef.current) {
        revealRef.current.style.clipPath = `circle(120px at ${x}px ${y}px)`
      }
      requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [])

  // Track mouse
  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect()
    mousePos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
  }

  // Slide changer 
  const nextImage = () => {
    setIsFading(true)
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length)
      setIsFading(false)
    }, 500) // Fade duration
  }

  // Auto 6 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onClick={nextImage}
      className="relative w-full h-[120vh] overflow-hidden"
    >
      {/*  (next) */}
      <img
        src={nextSlide.image}
        alt="Next"
        className="absolute w-full h-full object-cover z-0"
      />

      {/* Foreground */}
      <img
        ref={revealRef}
        src={currentSlide.image}
        alt="Current"
        className="absolute w-full h-full object-cover z-10 transition-opacity duration-500"
        style={{ clipPath: "circle(0px at 0px 0px)", opacity: isFading ? 0 : 1 }}
      />

      {/* Fade */}
      {isFading && (
        <div className="absolute inset-0 bg-black/30 z-20 transition-opacity duration-500 pointer-events-none" />
      )}

      {/* Text content */}
      <div className="h-11/12 inset-0 z-30 flex flex-col items-center justify-center text-white text-center px-4 pointer-events-none">
        <h1 className="w-1/2 text-5xl md:text-7xl font-bold drop-shadow-md transition-all duration-500">
          {currentSlide.heading}
        </h1>
        <p className="text-xl md:text-xl mt-3 drop-shadow-sm text-blue-100 transition-all duration-500">
          {currentSlide.subheading}
        </p>
        <button className="bg-black px-5 py-3 rounded-4xl mt-4 cursor-pointer pointer-events-auto z-40">Get the app</button>
      </div>
    </div>
  )
}
