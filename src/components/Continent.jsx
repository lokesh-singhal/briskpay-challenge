import { useState } from "react"

const continents = [
  {
    name: "Asia",
    countries: [
      "🇮🇳 India", "🇨🇳 China", "🇯🇵 Japan", "🇰🇷 Korea", "🇸🇬 Singapore",
      "🇲🇾 Malaysia", "🇮🇩 Indonesia", "🇵🇰 Pakistan", "🇧🇩 Bangladesh", "🇹🇭 Thailand"
    ]
  },
  {
    name: "Europe",
    countries: [
      "🇫🇷 France", "🇩🇪 Germany", "🇪🇸 Spain", "🇮🇹 Italy", "🇬🇧 UK",
      "🇳🇱 Netherlands", "🇸🇪 Sweden", "🇵🇹 Portugal", "🇳🇴 Norway", "🇩🇰 Denmark"
    ]
  },
  {
    name: "Africa",
    countries: [
      "🇪🇬 Egypt", "🇳🇬 Nigeria", "🇿🇦 South Africa", "🇰🇪 Kenya", "🇪🇹 Ethiopia",
      "🇲🇦 Morocco", "🇹🇿 Tanzania", "🇬🇭 Ghana", "🇺🇬 Uganda", "🇸🇩 Sudan"
    ]
  },
  {
    name: "North America",
    countries: [
      "🇺🇸 USA", "🇨🇦 Canada", "🇲🇽 Mexico", "🇨🇺 Cuba", "🇩🇴 Dominican Republic",
      "🇯🇲 Jamaica", "🇭🇹 Haiti", "🇵🇷 Puerto Rico", "🇧🇸 Bahamas", "🇵🇦 Panama"
    ]
  }
]

export default function ContinentRows() {
  const [expanded, setExpanded] = useState({}) 

  const toggleShowAll = (continentName) => {
    setExpanded((prev) => ({
      ...prev,
      [continentName]: !prev[continentName]
    }))
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 space-y-8">
      {continents.map((continent, idx) => {
        const isExpanded = expanded[continent.name] || false
        const visibleCountries = isExpanded
          ? continent.countries
          : continent.countries.slice(0, 6)

        return (
          <div
            key={idx}
            className="flex items-center justify-between border rounded-lg shadow p-4 group hover:shadow-xl transition duration-300 bg-white"
          >
    
            <div className="font-bold text-xl min-w-[120px] text-blue-700 group-hover:text-blue-900 transition">
              {continent.name}
            </div>

        
            <div
              className={`flex gap-3 flex-wrap flex-1 px-4 ${
                isExpanded ? "overflow-visible" : "overflow-x-auto scrollbar-hide"
              } transition-all duration-300`}
            >
              {visibleCountries.map((country, i) => (
                <div
                  key={i}
                  className="px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded-full transition duration-300 text-sm whitespace-nowrap"
                >
                  {country}
                </div>
              ))}
            </div>

        
            <button
              onClick={() => toggleShowAll(continent.name)}
              className="text-sm font-medium text-blue-600 hover:text-blue-800 transition whitespace-nowrap"
            >
              {isExpanded ? "Show Less ↑" : "Show All →"}
            </button>
          </div>
        )
      })}
    </div>
  )
}
