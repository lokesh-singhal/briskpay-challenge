import { FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa"

const socials = [
  { icon: <FaInstagram />, label: "Instagram", bg: "bg-pink-300" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", bg: "bg-blue-300" },
  { icon: <FaFacebookF />, label: "Facebook", bg: "bg-green-300" },
  { icon: <FaYoutube />, label: "YouTube", bg: "bg-red-300" }
]

export default function SocialButtons() {
  return (
    <div className="flex items-center justify-between w-[78%] pt-20">
      {socials.map((social, idx) => (
        <div key={idx} className="relative group">
          {/* Button */}
          <div
            className={`w-12 h-12 ${social.bg} rounded-full flex items-center justify-center hover:scale-110 transition duration-300`}
          >
            <div className="text-black text-xl">{social.icon}</div>
          </div>

          {/* Tooltip */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-10">
            <div className="bg-white text-black text-xs px-2 py-1 rounded shadow-md relative">
              {social.label}
              {/* Tooltip Arrow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-2 h-2 bg-white rotate-45"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
