import React from "react"
import { Link } from "react-router-dom"
import {
  BookOpen,
  Home as HomeIcon,
  Leaf,
  Star,
  Users,
  Award,
  Sun,
  Heart,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"
import SEO from "../components/common/SEO"
import HeroSlider from "../components/home/HeroSlider"

import heroBgImage from "../assets/img_1.png"
import schoolImage_1 from "../assets/IMG_1968.jpg"
import schoolImage_2 from "../assets/swami_dayanand.jpg"
import img_1 from "../assets/img_1.png"
import img_2 from "../assets/img_2.jpeg"
import img_3 from "../assets/img_3.jpeg"
import img_4 from "../assets/img_4.jpeg"
import img_5 from "../assets/img_5.jpeg"
import img_6 from "../assets/img_6.jpeg"
import img_7 from "../assets/img_7.png"
import img_11 from "../assets/11.jpg"

const serifFont = { fontFamily: "'Noto Serif Devanagari', serif" }
const sansFont = { fontFamily: "'Noto Sans Devanagari', sans-serif" }

function SectionTitle({ children, light = false }) {
  return (
    <div className="text-center mb-12">
      <h2
        className="text-3xl md:text-4xl font-bold mb-4"
        style={{ ...serifFont, color: light ? "#F8F4EA" : "#241B15" }}
      >
        {children}
      </h2>
      <div className="flex items-center justify-center gap-3">
        <div
          className="h-px w-16"
          style={{ backgroundColor: light ? "#C68A32" : "#C68A32" }}
        />
        <span style={{ color: "#C96B25", fontSize: "1.2rem" }}>✦</span>
        <div className="h-px w-16" style={{ backgroundColor: "#C68A32" }} />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <SEO
        title="मुख्य पृष्ठ"
        description="श्री निःशुल्क गुरुकुल महाविद्यालय, अयोध्या - सन् 1925 से वेद, संस्कृत एवं आधुनिक शिक्षा का अद्वितीय केंद्र।"
      />

      {/* 1. HERO SLIDER (Left-to-Right Carousel with Dots Navigation) */}
      <HeroSlider />

      {/* 1.5 WELCOME MARQUEE TICKER */}
      <div
        className="py-3 overflow-hidden select-none border-y relative z-20"
        style={{
          backgroundColor: "#C68A32",
          borderColor: "#8B4513",
          boxShadow: "inset 0 2px 6px rgba(36,27,21,0.15)",
        }}
      >
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-6 text-sm sm:text-base font-bold text-[#241B15]" style={serifFont}>
              <span className="tracking-wide">
                श्री निःशुल्क गुरुकुल महाविद्यालय अयोध्या आपका हार्दिक स्वागत करता है।
              </span>
              <span className="text-[#F8F4EA] text-xs">✦</span>
              <span style={sansFont} className="text-[#241B15]/90 font-medium text-xs sm:text-sm">
                परंपरा, संस्कार और ज्ञान की समन्वित शिक्षा
              </span>
              <span className="text-[#F8F4EA] text-xs">✦</span>
              <span style={sansFont} className="text-[#F8F4EA] font-bold bg-[#241B15] px-2.5 py-0.5 text-xs rounded">
                सत्र 2026-27 प्रवेश प्रारम्भ
              </span>
              <span className="text-[#F8F4EA] text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. TRUST STRIP */}
      <section className="py-14" style={{ backgroundColor: "#EDE7D4" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Star size={28} color="#C96B25" />,
                stat: "1925",
                label: "स्थापना वर्ष",
              },
              {
                icon: <HomeIcon size={28} color="#C96B25" />,
                stat: "आवासीय",
                label: "गुरुकुलीय शिक्षा",
              },
              {
                icon: <BookOpen size={28} color="#C96B25" />,
                stat: "संस्कृत",
                label: "प्रमुख शिक्षा",
              },
              {
                icon: <Award size={28} color="#C96B25" />,
                stat: "आधुनिक",
                label: "समन्वित अध्ययन",
              },
            ].map(({ icon, stat, label }) => (
              <div
                key={label}
                className="p-6 rounded-lg text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: "#F8F4EA",
                  border: "1px solid #C68A32",
                  boxShadow: "0 2px 12px rgba(198,138,50,0.12)",
                }}
              >
                <div className="flex justify-center mb-3">{icon}</div>
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ ...serifFont, color: "#241B15" }}
                >
                  {stat}
                </div>
                <div
                  className="text-sm"
                  style={{ ...sansFont, color: "#8B4513" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT PREVIEW */}
      <section className="py-20 px-6" style={{ backgroundColor: "#F8F4EA" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[330px]">
              <div
                className="w-full h-[360px] rounded-lg overflow-hidden bg-[#241B15]/5"
                style={{
                  border: "4px solid #C68A32",
                  boxShadow: "6px 6px 0 #8B4513",
                }}
              >
                <img
                  src={schoolImage_1}
                  alt="स्वामी त्यागानन्द सरस्वती - संस्थापक"
                  className="w-full h-full object-cover object-top block"
                  loading="lazy"
                />
              </div>
              <div
                className="absolute -bottom-3 -right-3 px-4 py-2 rounded shadow-md z-10"
                style={{ backgroundColor: "#C96B25" }}
              >
                <span
                  className="text-xs sm:text-sm font-bold"
                  style={{ color: "#F8F4EA", ...sansFont }}
                >
                  सन् 1925 से संचालित
                </span>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#C96B25", ...sansFont }}
            >
              गुरुकुल परिचय
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5"
              style={{ ...serifFont, color: "#241B15" }}
            >
              गुरुकुल की गौरवशाली परंपरा
            </h2>
            <div
              className="h-px mb-6"
              style={{ backgroundColor: "#C68A32", maxWidth: "80px" }}
            />
            <p
              className="mb-4 leading-relaxed"
              style={{ ...sansFont, color: "#3D2B1F" }}
            >
              सन् 1925 में स्वामी त्यागानन्द सरस्वती जी द्वारा स्थापित इस गुरुकुल महाविद्यालय
              ने शताब्दी से अधिक समय से वैदिक परंपरा में आधारित शिक्षा प्रदान की है।
            </p>
            <p
              className="mb-8 leading-relaxed"
              style={{ ...sansFont, color: "#3D2B1F" }}
            >
              यहाँ वेद, संस्कृत, धर्मशास्त्र के साथ-साथ आधुनिक विषयों का समावेश कर छात्रों को
              एक संपूर्ण शिक्षा दी जाती है। सम्पूर्णानन्द संस्कृत विश्वविद्यालय, वाराणसी से
              मान्यता प्राप्त यह संस्था उत्तर प्रदेश में गुरुकुलीय शिक्षा का अग्रणी केंद्र है।
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded font-semibold transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: "#241B15",
                color: "#C68A32",
                ...sansFont,
              }}
            >
              विस्तार से पढ़ें <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FOUNDERS & HERITAGE */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EDE7D4" }}>
        <div className="max-w-5xl mx-auto">
          <SectionTitle>हमारे आदरणीय संस्थापक</SectionTitle>

          {/* Open Historical Narrative (Fluid, non-block presentation) */}
          <div className="max-w-3xl mx-auto text-center mb-12 px-4">
            <p
              className="text-base sm:text-lg leading-relaxed mb-4 italic"
              style={{ ...serifFont, color: "#3D2B1F" }}
            >
              "श्री निःशुल्क गुरुकुल महाविद्यालय की स्थापना स्वामी त्यागानन्द सरस्वती जी द्वारा श्रावण पूर्णिमा संवत् 1982 विक्रमी तद्नुसार सन् 1925 ई० को की गयी। यह महाविद्यालय प्राच्य शिक्षा पद्धति (आवासीय व्यवस्था) के अन्तर्गत संस्कृत के साथ आधुनिक विषयों के अध्ययन अध्यापन की व्यवस्था संचालित करता है।"
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold pt-2" style={{ ...sansFont, color: "#8B4513" }}>
              <span className="inline-flex items-center gap-1.5 bg-[#F8F4EA] px-3 py-1 rounded-full border border-[#C68A32]/40">
                <span className="w-2 h-2 rounded-full bg-[#C96B25]" />
                स्थापना: श्रावण पूर्णिमा संवत् 1982 (सन् 1925)
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#F8F4EA] px-3 py-1 rounded-full border border-[#C68A32]/40">
                <span className="w-2 h-2 rounded-full bg-[#C96B25]" />
                पद्धति: निःशुल्क आवासीय प्राच्य व आधुनिक शिक्षा
              </span>
            </div>
          </div>

          {/* 2 Equal-Width Founder Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* 1. Swami Dayanand Saraswati */}
            <div
              className="w-full flex flex-col h-full rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                backgroundColor: "#F8F4EA",
                border: "1px solid #C68A32",
                boxShadow: "0 4px 20px rgba(36,27,21,0.1)",
              }}
            >
              <div className="relative h-72 w-full overflow-hidden bg-[#F8F4EA]">
                <img
                  src={schoolImage_2}
                  alt="स्वामी दयानन्द सरस्वती"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(36,27,21,0.8) 0%, transparent 60%)",
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: "#C68A32", ...sansFont }}
                  >
                    प्रेरणा स्रोत
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ ...serifFont, color: "#241B15" }}
                  >
                    स्वामी दयानन्द सरस्वती
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ ...sansFont, color: "#5C3D2E" }}
                  >
                    आर्य समाज के संस्थापक एवं वैदिक परंपरा के महान पुनरुद्धारक। उनके विचारों एवं वेदोपदेश से प्रेरित होकर इस गुरुकुल की स्थापना हुई।
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Swami Tyaganand Saraswati */}
            <div
              className="w-full flex flex-col h-full rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                backgroundColor: "#F8F4EA",
                border: "1px solid #C68A32",
                boxShadow: "0 4px 20px rgba(36,27,21,0.1)",
              }}
            >
              <div className="relative h-72 w-full overflow-hidden bg-[#F8F4EA]">
                <img
                  src={schoolImage_1}
                  alt="स्वामी त्यागानन्द सरस्वती"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(36,27,21,0.8) 0%, transparent 60%)",
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: "#C68A32", ...sansFont }}
                  >
                    संस्थापक एवं प्रथम कुलपति
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ ...serifFont, color: "#241B15" }}
                  >
                    स्वामी त्यागानन्द सरस्वती
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ ...sansFont, color: "#5C3D2E" }}
                  >
                    सन् 1925 में अयोध्या में इस गुरुकुल की स्थापना की और वेद एवं आधुनिक शिक्षा के समन्वय का अनूठा प्रयोग किया।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COURSES */}
      <section className="py-20 px-6" style={{ backgroundColor: "#F8F4EA" }}>
        <div className="max-w-6xl mx-auto">
          <SectionTitle>हमारे पाठ्यक्रम</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen size={36} color="#C96B25" />,
                title: "माध्यमिक विद्यालय",
                sub: "कक्षा 1 से 12",
                desc: "वैदिक एवं आधुनिक शिक्षा का अनूठा सम्मिश्रण। संस्कृत, हिंदी, गणित, विज्ञान तथा सामाजिक विज्ञान का अध्ययन।",
              },
              {
                icon: <Award size={36} color="#C96B25" />,
                title: "महाविद्यालय",
                sub: "पाँच वर्षीय पाठ्यक्रम",
                desc: "उच्च स्तरीय संस्कृत, वेद, दर्शन एवं व्याकरण का गहन अध्ययन। सम्पूर्णानन्द संस्कृत विश्वविद्यालय से मान्यता प्राप्त।",
              },
              {
                icon: <Users size={36} color="#C96B25" />,
                title: "उपदेशक विद्यालय",
                sub: "पाँच वर्षीय पाठ्यक्रम",
                desc: "धर्म प्रचार एवं उपदेश की कला का प्रशिक्षण। वेद, उपनिषद् तथा धर्मशास्त्र का विशेष अध्ययन।",
              },
            ].map(({ icon, title, sub, desc }) => (
              <div
                key={title}
                className="p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  backgroundColor: "#F8F4EA",
                  border: "1px solid #D4C4A0",
                  boxShadow: "0 2px 16px rgba(36,27,21,0.07)",
                }}
              >
                <div className="mb-5">{icon}</div>
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ ...serifFont, color: "#241B15" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm font-semibold mb-4"
                  style={{ color: "#C96B25", ...sansFont }}
                >
                  {sub}
                </p>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ ...sansFont, color: "#5C3D2E" }}
                >
                  {desc}
                </p>
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-200 hover:gap-2"
                  style={{ color: "#C96B25", ...sansFont }}
                >
                  विस्तृत जानकारी <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURES */}
      <section className="py-20 px-6" style={{ backgroundColor: "#241B15" }}>
        <div className="max-w-6xl mx-auto">
          <SectionTitle light>गुरुकुल की विशेषताएँ</SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <HomeIcon size={28} color="#C68A32" />,
                label: "आवासीय शिक्षा",
                desc: "छात्र गुरुकुल परिसर में रहकर अध्ययन करते हैं।",
              },
              {
                icon: <BookOpen size={28} color="#C68A32" />,
                label: "संस्कृत शिक्षा",
                desc: "संस्कृत भाषा एवं साहित्य का गहन अध्ययन।",
              },
              {
                icon: <Award size={28} color="#C68A32" />,
                label: "आधुनिक विषय",
                desc: "गणित, विज्ञान, हिंदी, अंग्रेजी का शिक्षण।",
              },
              {
                icon: <Heart size={28} color="#C68A32" />,
                label: "धर्म एवं संस्कार",
                desc: "नैतिक मूल्यों व संस्कारों की शिक्षा।",
              },
              {
                icon: <Star size={28} color="#C68A32" />,
                label: "अनुशासन",
                desc: "नियमित दिनचर्या और अनुशासित जीवन।",
              },
              {
                icon: <Sun size={28} color="#C68A32" />,
                label: "भारतीय शिक्षा",
                desc: "वेद, उपनिषद् की प्राचीन शिक्षा पद्धति।",
              },
              {
                icon: <Leaf size={28} color="#C68A32" />,
                label: "प्राकृतिक जीवनशैली",
                desc: "प्रकृति के निकट स्वास्थ्यप्रद जीवन।",
              },
              {
                icon: <Users size={28} color="#C68A32" />,
                label: "गुरु-शिष्य परंपरा",
                desc: "प्राचीन गुरु-शिष्य परंपरा का पालन।",
              },
            ].map(({ icon, label, desc }) => (
              <div
                key={label}
                className="p-5 rounded-lg transition-all duration-200 hover:-translate-y-1"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(198,138,50,0.3)",
                }}
              >
                <div className="mb-3">{icon}</div>
                <h4
                  className="font-bold text-sm mb-2"
                  style={{ ...serifFont, color: "#F8F4EA" }}
                >
                  {label}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{ ...sansFont, color: "#D4C4A0" }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TIMELINE */}
      <section className="py-20 px-6" style={{ backgroundColor: "#F8F4EA" }}>
        <div className="max-w-3xl mx-auto">
          <SectionTitle>गुरुकुल की यात्रा</SectionTitle>
          <div className="relative">
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{ backgroundColor: "#C68A32" }}
            />
            {[
              {
                year: "1925",
                event: "गुरुकुल की स्थापना",
                detail:
                  "स्वामी त्यागानन्द सरस्वती जी ने अयोध्या में श्री निःशुल्क गुरुकुल महाविद्यालय की स्थापना की।",
                side: "left",
              },
              {
                year: "1950",
                event: "माध्यमिक विद्यालय की मान्यता",
                detail:
                  "उत्तर प्रदेश सरकार द्वारा माध्यमिक विद्यालय के रूप में औपचारिक मान्यता प्रदान की गई।",
                side: "right",
              },
              {
                year: "1972",
                event: "सम्पूर्णानन्द विश्वविद्यालय से सम्बद्धता",
                detail:
                  "सम्पूर्णानन्द संस्कृत विश्वविद्यालय, वाराणसी से महाविद्यालय की सम्बद्धता प्राप्त हुई।",
                side: "left",
              },
              {
                year: "1995",
                event: "उपदेशक विद्यालय की स्थापना",
                detail:
                  "धर्म प्रचार एवं उपदेश विभाग का विस्तार करते हुए उपदेशक विद्यालय आरम्भ किया गया।",
                side: "right",
              },
              {
                year: "2025",
                event: "शताब्दी वर्ष",
                detail:
                  "गुरुकुल के स्थापना शताब्दी वर्ष का भव्य आयोजन। ज्ञान परंपरा का निरंतर प्रवाह।",
                side: "left",
              },
            ].map(({ year, event, detail, side }) => (
              <div
                key={year}
                className={`relative flex items-start gap-8 mb-12 ${
                  side === "right" ? "flex-row-reverse text-right" : ""
                }`}
              >
                <div className="flex-1">
                  <div
                    className="inline-block px-3 py-1 rounded text-sm font-bold mb-2"
                    style={{
                      backgroundColor: "#C96B25",
                      color: "#F8F4EA",
                      ...sansFont,
                    }}
                  >
                    {year}
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ ...serifFont, color: "#241B15" }}
                  >
                    {event}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ ...sansFont, color: "#5C3D2E" }}
                  >
                    {detail}
                  </p>
                </div>
                {/* Dot */}
                <div
                  className="absolute left-1/2 top-2 w-4 h-4 rounded-full -translate-x-1/2 border-2"
                  style={{
                    backgroundColor: "#C68A32",
                    borderColor: "#F8F4EA",
                    boxShadow: "0 0 0 3px #C68A32",
                  }}
                />
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. EVENTS PREVIEW */}
      <section className="py-14 sm:py-20 px-3 sm:px-6" style={{ backgroundColor: "#EDE7D4" }}>
        <div className="max-w-6xl mx-auto">
          <SectionTitle>आगामी कार्यक्रम</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 mb-10">
            {[
              {
                img: img_7,
                month: "अगस्त",
                day: "15",
                title: "51वाँ वार्षिकोत्सव",
                desc: "गुरुकुल का 51वाँ वार्षिक उत्सव एवं चतुर्वेद महायज्ञ जिसमें छात्रों की वेद पाठ, दीक्षांत अलंकरण एवं सांस्कृतिक प्रस्तुतियाँ होती हैं।",
              },
              {
                img: img_3,
                month: "जुलाई",
                day: "10",
                title: "वेद प्रचार एवं संस्कृत सप्ताह",
                desc: "सप्ताहभर संस्कृत भाषा को समर्पित कार्यक्रम — श्लोक पाठ, वाद-विवाद, निबंध लेखन एवं वैदिक स्वाध्याय।",
              },
              {
                img: img_4,
                month: "अप्रैल",
                day: "2026",
                title: "Adani Computer Lab लोकार्पण",
                desc: "अडानी फाउंडेशन के सहयोग से स्थापित अत्याधुनिक कंप्यूटर लैब एवं छात्रों का डिजिटल कौशल प्रशिक्षण।",
              },
            ].map(({ img, month, day, title, desc }) => (
              <div
                key={title}
                className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col"
                style={{
                  backgroundColor: "#F8F4EA",
                  border: "1px solid #D4C4A0",
                  boxShadow: "0 2px 12px rgba(36,27,21,0.08)",
                }}
              >
                <div className="relative h-28 sm:h-44 md:h-48 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div
                    className="absolute top-2 left-2 sm:top-4 sm:left-4 text-center px-2 py-1 sm:px-3 sm:py-2 rounded shadow-md"
                    style={{ backgroundColor: "#C96B25" }}
                  >
                    <div
                      className="text-xs sm:text-xl font-bold leading-none"
                      style={{ color: "#F8F4EA", ...serifFont }}
                    >
                      {day}
                    </div>
                    <div
                      className="text-[10px] sm:text-xs"
                      style={{ color: "#F8F4EA", ...sansFont }}
                    >
                      {month}
                    </div>
                  </div>
                </div>
                <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className="text-xs sm:text-lg font-bold mb-1 sm:mb-2 line-clamp-2"
                      style={{ ...serifFont, color: "#241B15" }}
                    >
                      {title}
                    </h3>
                    <p
                      className="text-[11px] sm:text-sm leading-snug sm:leading-relaxed mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-none"
                      style={{ ...sansFont, color: "#5C3D2E" }}
                    >
                      {desc}
                    </p>
                  </div>
                  <Link
                    to="/events"
                    className="text-xs sm:text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all mt-auto"
                    style={{ color: "#C96B25", ...sansFont }}
                  >
                    और देखें <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-6 py-3 rounded font-semibold transition-all duration-200 hover:opacity-90 shadow-md hover:shadow-lg"
              style={{
                backgroundColor: "#241B15",
                color: "#C68A32",
                ...sansFont,
              }}
            >
              सभी कार्यक्रम देखें <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. GALLERY STRIP */}
      <section className="py-20 px-6" style={{ backgroundColor: "#F8F4EA" }}>
        <div className="max-w-6xl mx-auto">
          <SectionTitle>छायाचित्र</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {[img_2, img_7, img_4, img_1, img_6, img_3].map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl shadow-sm hover:shadow-md border border-amber-200/60 transition-all duration-300 hover:scale-[1.03]"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={src}
                  alt={`गुरुकुल छायाचित्र ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl"
              style={{
                backgroundColor: "#C96B25",
                color: "#F8F4EA",
                ...sansFont,
              }}
            >
              और छायाचित्र देखें (Explore More) <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. ADMISSION CTA */}
      <section
        className="relative py-24 px-6"
        style={{
          backgroundImage: `url(${img_6})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(36,27,21,0.8)" }}
        />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ ...serifFont, color: "#F8F4EA" }}
          >
            गुरुकुल में प्रवेश
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16" style={{ backgroundColor: "#C68A32" }} />
            <span style={{ color: "#C96B25", fontSize: "1.2rem" }}>✦</span>
            <div className="h-px w-16" style={{ backgroundColor: "#C68A32" }} />
          </div>
          <p
            className="text-lg mb-8 leading-relaxed"
            style={{ ...sansFont, color: "#EDE7D4" }}
          >
            अपने बच्चे को प्राचीन वैदिक परंपरा में आधारित और आधुनिक शिक्षा से समृद्ध वातावरण
            प्रदान करें। प्रवेश अप्रैल-जून माह में आयोजित होते हैं।
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/admission"
              className="px-8 py-3 rounded font-semibold text-base transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: "#C96B25",
                color: "#F8F4EA",
                ...sansFont,
              }}
            >
              प्रवेश प्रक्रिया जानें
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 rounded font-semibold text-base transition-all duration-200 hover:bg-white/10"
              style={{
                border: "2px solid #F8F4EA",
                color: "#F8F4EA",
                ...sansFont,
              }}
            >
              संपर्क करें
            </Link>
          </div>
        </div>
      </section>

      {/* 11. CONTACT PREVIEW */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EDE7D4" }}>
        <div className="max-w-6xl mx-auto">
          <SectionTitle>संपर्क करें</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <MapPin size={28} color="#C96B25" />,
                title: "पता",
                lines: [
                  "5/5/13 जालपा लाला,",
                  "जालपा मंदिर के सामने,",
                  "अयोध्या, फैज़ाबाद - 224123",
                ],
              },
              {
                icon: <Phone size={28} color="#C96B25" />,
                title: "दूरभाष",
                lines: ["+91 9071235505", "+91 9648409250"],
              },
              {
                icon: <Mail size={28} color="#C96B25" />,
                title: "ईमेल",
                lines: ["gurukulayodhya@gmail.com"],
              },
            ].map(({ icon, title, lines }) => (
              <div
                key={title}
                className="p-8 rounded-xl text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: "#F8F4EA",
                  border: "1px solid #C68A32",
                  boxShadow: "0 2px 16px rgba(36,27,21,0.07)",
                }}
              >
                <div className="flex justify-center mb-4">{icon}</div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ ...serifFont, color: "#241B15" }}
                >
                  {title}
                </h3>
                {lines.map((line) => (
                  <p
                    key={line}
                    className="text-sm"
                    style={{ ...sansFont, color: "#5C3D2E" }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded font-semibold transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: "#8B4513",
                color: "#F8F4EA",
                ...sansFont,
              }}
            >
              संपर्क पृष्ठ देखें <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
