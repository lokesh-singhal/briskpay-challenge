export default function FooterLinks() {
  const columns = [
    {
      title: "Company",
      links: ["About us", "Office", "Annual Report", "Shareholder", "Sustainability", "Code of Conduct"]
    },
    {
      title: "Feature",
      links: ["Split Bill", "Smart Wallet", "Savings", "Pay in 4", "International transfer"]
    },
    {
      title: "Career",
      links: ["Careers", "Culture", "Talent Programmes", "Diversity", "Internship"]
    },
    {
      title: "Accounts",
      links: ["Join Account", "Savings", "Freelance", "Plan", "Education"]
    },
    {
      title: "Lifestyle",
      links: ["Shop", "Insurance", "Donations", "eSIM", "Points"]
    }
  ]

  return (
    <div className="bg-black text-white px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {columns.map((col, idx) => (
          <div key={idx}>
            <h3 className="text-sm text-gray-400 font-medium mb-3 uppercase tracking-wide">{col.title}</h3>
            <ul className="space-y-2">
              {col.links.map((link, i) => (
                <li key={i} className="text-sm hover:underline cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
