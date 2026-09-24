import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import LanguageToggle from '../common/LanguageToggle'
import { useLanguage } from '../../context/LanguageContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()
  const { t, language } = useLanguage()

  const navLinks = [
    { label: t('nav.home', 'मुख्य पृष्ठ'), path: '/' },
    { label: t('nav.about', 'गुरुकुल परिचय'), path: '/about' },
    { label: t('nav.courses', 'पाठ्यक्रम'), path: '/courses' },
    { label: t('nav.admission', 'प्रवेश प्रक्रिया'), path: '/admission' },
    { label: t('nav.adaniLab', 'अडानी लैब'), path: '/adani-computer-lab' },
    { label: t('nav.events', 'कार्यक्रम'), path: '/events' },
    { label: t('nav.gallery', 'छायाचित्र'), path: '/gallery' },
    { label: t('nav.contact', 'संपर्क'), path: '/contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setDrawerOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const solidBg = scrolled || !isHome

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          solidBg
            ? 'bg-[#F8F4EA] shadow-[0_4px_25px_rgba(36,27,21,0.12)] border-b border-[#C68A32]/30 py-1 transform translate-y-0'
            : 'bg-gradient-to-b from-[#241B15]/85 via-[#241B15]/35 to-transparent py-1.5 sm:py-2.5'
        }`}
      >
        <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between h-13 sm:h-14 lg:h-15 relative transition-all duration-300">
          {/* Logo */}
          <div className="flex items-center shrink-0 z-10">
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3">
              <span
                className="text-3xl sm:text-4xl font-bold"
                style={{
                  fontFamily: "'Noto Serif Devanagari', serif",
                  color: '#C96B25',
                  lineHeight: 1,
                }}
              >
                ॐ
              </span>
              <div>
                <div
                  className={`${
                    language === 'en' ? 'text-xs sm:text-sm font-bold' : 'text-sm sm:text-base lg:text-[17px] font-bold tracking-tight'
                  } leading-tight whitespace-nowrap`}
                  style={{
                    fontFamily: "'Noto Serif Devanagari', serif",
                    color: solidBg ? '#241B15' : '#F8F4EA',
                  }}
                >
                  {language === 'en' ? 'Shri Nishulk Gurukul' : 'श्री निःशुल्क गुरुकुल'}
                </div>
                <div
                  className={`${
                    language === 'en' ? 'text-[10px] sm:text-xs' : 'text-[11px] sm:text-[13px] font-medium'
                  } leading-tight whitespace-nowrap`}
                  style={{ color: solidBg ? '#8B4513' : '#D4C4A0' }}
                >
                  {language === 'en' ? 'Mahavidyalaya, Ayodhya' : 'महाविद्यालय, अयोध्या'}
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop nav - Mathematically Centered */}
          <ul className="hidden lg:flex items-center justify-center gap-1 xl:gap-2.5 2xl:gap-3.5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            {navLinks.map((link) => {
              const active = location.pathname === link.path
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`px-2.5 xl:px-3 py-1 ${
                      language === 'en' ? 'text-xs xl:text-sm' : 'text-[13px] xl:text-[15px]'
                    } rounded whitespace-nowrap transition-colors duration-200`}
                    style={{
                      fontFamily: "'Noto Sans Devanagari', sans-serif",
                      color: active
                        ? '#C96B25'
                        : solidBg
                          ? '#241B15'
                          : '#F8F4EA',
                      fontWeight: active ? '600' : '400',
                      borderBottom: active ? '2px solid #C96B25' : '2px solid transparent',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* CTA + Language + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 ml-auto z-10">
            <LanguageToggle className="inline-flex" />

            <Link
              to="/admission"
              className="hidden sm:inline-flex items-center justify-center px-3.5 xl:px-4 h-8 sm:h-9 rounded text-xs xl:text-sm font-semibold transition-all duration-200 hover:opacity-90 shadow-sm whitespace-nowrap shrink-0"
              style={{
                backgroundColor: '#C96B25',
                color: '#F8F4EA',
                fontFamily: "'Noto Sans Devanagari', sans-serif",
              }}
            >
              {t('btn.admissionInfo', 'प्रवेश संबंधी जानकारी')}
            </Link>

            <button
              className="lg:hidden p-2 rounded-lg touch-manipulation focus:outline-none"
              onClick={() => setDrawerOpen(true)}
              aria-label={t('nav.openMenu', 'मेनू खोलें')}
            >
              <Menu size={24} color={solidBg ? '#241B15' : '#F8F4EA'} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[100] animate-fade-in">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setDrawerOpen(false)}
          />
          <div
            className="absolute top-0 right-0 bottom-0 w-[85%] max-w-[320px] flex flex-col shadow-2xl border-l border-[#8B4513]"
            style={{ backgroundColor: '#241B15' }}
          >
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#8B4513]/60">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-[#C96B25]">ॐ</span>
                <span
                  className="text-base sm:text-lg font-bold"
                  style={{
                    fontFamily: "'Noto Serif Devanagari', serif",
                    color: '#C68A32',
                  }}
                >
                  {t('nav.gurukulName', 'गुरुकुल महाविद्यालय')}
                </span>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label={t('nav.closeMenu', 'बंद करें')}
                className="p-1.5 rounded-lg hover:bg-white/10 text-[#C68A32] touch-manipulation"
              >
                <X size={24} />
              </button>
            </div>

            <ul className="flex-1 overflow-y-auto py-4 flex flex-col gap-1 px-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="block px-4 py-3 rounded-lg text-sm sm:text-base font-medium transition-colors duration-200 touch-manipulation"
                    style={{
                      fontFamily: "'Noto Sans Devanagari', sans-serif",
                      color:
                        location.pathname === link.path ? '#C96B25' : '#F8F4EA',
                      backgroundColor:
                        location.pathname === link.path
                          ? 'rgba(201,107,37,0.2)'
                          : 'transparent',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="p-4 sm:p-5 border-t border-[#8B4513]/60 bg-[#1D1510]">
              <Link
                to="/admission"
                className="block w-full text-center py-3 rounded-xl font-bold text-sm shadow-md"
                style={{
                  backgroundColor: '#C96B25',
                  color: '#F8F4EA',
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                }}
              >
                {t('btn.admissionInfo', 'प्रवेश संबंधी जानकारी')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
