import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import { INSTITUTION_INFO } from '../../data/institutionalData'

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76M7.86 18.5v-8.37H5.07v8.37h2.79z" />
  </svg>
)

const navLinks = [
  { label: 'मुख्य पृष्ठ', path: '/' },
  { label: 'गुरुकुल परिचय', path: '/about' },
  { label: 'पाठ्यक्रम', path: '/courses' },
  { label: 'प्रवेश प्रक्रिया', path: '/admission' },
  { label: 'Adani Computer Lab', path: '/adani-computer-lab' },
  { label: 'कार्यक्रम', path: '/events' },
  { label: 'छायाचित्र', path: '/gallery' },
  { label: 'संपर्क', path: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#241B15', color: '#F8F4EA' }}>
      {/* Gold top border */}
      <div style={{ height: '3px', backgroundColor: '#C68A32' }} />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Logo + description */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-4xl"
                style={{ fontFamily: "'Noto Serif Devanagari', serif", color: '#C96B25' }}
              >
                ॐ
              </span>
              <div>
                <div
                  className="font-bold text-base leading-tight"
                  style={{ fontFamily: "'Noto Serif Devanagari', serif", color: '#C68A32' }}
                >
                  श्री निःशुल्क गुरुकुल
                </div>
                <div className="text-sm" style={{ color: '#D4C4A0' }}>
                  महाविद्यालय, अयोध्या
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#D4C4A0', fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
              सन् 1925 से परंपरागत गुरुकुलीय शिक्षा प्रदान करते हुए, यह महाविद्यालय वेद, संस्कृत एवं आधुनिक ज्ञान के समन्वय का केंद्र है।
            </p>
            <div className="mt-5 h-px" style={{ backgroundColor: '#8B4513' }} />
            <p className="mt-4 text-xs italic" style={{ color: '#C68A32', fontFamily: "'Noto Serif Devanagari', serif" }}>
              "विद्या विनयं ददाति"
            </p>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h3
              className="text-base font-bold mb-5 pb-2 border-b"
              style={{
                fontFamily: "'Noto Serif Devanagari', serif",
                color: '#C68A32',
                borderColor: '#8B4513',
              }}
            >
              त्वरित लिंक
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm flex items-center gap-2 transition-colors duration-200 hover:text-[#C68A32]"
                    style={{ color: '#D4C4A0', fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                  >
                    <span style={{ color: '#C96B25' }}>›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3
              className="text-base font-bold mb-5 pb-2 border-b"
              style={{
                fontFamily: "'Noto Serif Devanagari', serif",
                color: '#C68A32',
                borderColor: '#8B4513',
              }}
            >
              संपर्क
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} color="#C96B25" className="mt-1 shrink-0" />
                <span className="text-sm" style={{ color: '#D4C4A0', fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                  5/5/13 जालपा लाला, जालपा मंदिर के सामने,<br />
                  अयोध्या, फैज़ाबाद - 224123
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} color="#C96B25" className="shrink-0" />
                <div className="text-sm" style={{ color: '#D4C4A0' }}>
                  <div>+91 9071235505</div>
                  <div>+91 9648409250</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} color="#C96B25" className="shrink-0" />
                <span className="text-sm break-all" style={{ color: '#D4C4A0' }}>
                  gurukulayodhya@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Social */}
          <div>
            <h3
              className="text-base font-bold mb-5 pb-2 border-b"
              style={{
                fontFamily: "'Noto Serif Devanagari', serif",
                color: '#C68A32',
                borderColor: '#8B4513',
              }}
            >
              हमसे जुड़ें
            </h3>
            <p className="text-sm mb-5" style={{ color: '#D4C4A0', fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
              हमारे सोशल मीडिया पर हमें अनुसरण करें और गुरुकुल की गतिविधियों से जुड़े रहें।
            </p>
            <div className="flex items-center gap-3.5">
              <a
                href={INSTITUTION_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="फेसबुक (Facebook)"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-[#C68A32] text-[#C68A32] hover:text-[#241B15] shadow-sm"
                style={{ backgroundColor: 'rgba(198,138,50,0.15)', border: '1px solid #C68A32' }}
              >
                <FacebookIcon />
              </a>
              <a
                href={INSTITUTION_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="यूट्यूब (YouTube)"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-[#C68A32] text-[#C68A32] hover:text-[#241B15] shadow-sm"
                style={{ backgroundColor: 'rgba(198,138,50,0.15)', border: '1px solid #C68A32' }}
              >
                <YoutubeIcon />
              </a>
              <a
                href={INSTITUTION_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="लिंक्डइन (LinkedIn)"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-[#C68A32] text-[#C68A32] hover:text-[#241B15] shadow-sm"
                style={{ backgroundColor: 'rgba(198,138,50,0.15)', border: '1px solid #C68A32' }}
              >
                <LinkedinIcon />
              </a>
            </div>
            <div className="mt-6 p-4 rounded" style={{ backgroundColor: 'rgba(201,107,37,0.12)', border: '1px solid rgba(198,138,50,0.3)' }}>
              <p className="text-xs" style={{ color: '#D4C4A0', fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                <span style={{ color: '#C68A32', fontWeight: 600 }}>मान्यता:</span><br />
                सम्पूर्णानन्द संस्कृत विश्वविद्यालय,<br />वाराणसी से सम्बद्ध
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div
        className="border-t py-5 px-6 text-center text-sm"
        style={{ borderColor: '#8B4513', color: '#D4C4A0', fontFamily: "'Noto Sans Devanagari', sans-serif" }}
      >
        © 2026 श्री निःशुल्क गुरुकुल महाविद्यालय, अयोध्या। सर्वाधिकार सुरक्षित।
        <span className="ml-2" style={{ color: '#C68A32' }}>
          | सन् 1925 से ज्ञान का प्रकाश
        </span>
      </div>
    </footer>
  )
}
