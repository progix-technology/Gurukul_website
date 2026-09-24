import React from 'react';
import { Target, Compass, Sparkles } from 'lucide-react';
import Container from '../common/Container';

export const MissionVision = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#241B15] text-[#F8F4EA] relative overflow-hidden border-t border-[#C68A32]/30">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C68A32]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C96B25]/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 max-w-7xl">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none text-xs font-serif font-bold uppercase tracking-wider mb-3.5 bg-[#C96B25] text-white border border-amber-300/30 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
            लक्ष्य एवं संकल्प
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F8F4EA]">
            हमारा पावन ध्येय एवं दूरदृष्टि
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-px w-12 bg-[#C68A32]" />
            <span className="text-[#C96B25] text-base">✦</span>
            <div className="h-px w-12 bg-[#C68A32]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Mission Card */}
          <div
            className="flex flex-col justify-between rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl relative overflow-hidden"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(198, 138, 50, 0.4)",
              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-xl bg-[#C96B25] flex items-center justify-center text-[#F8F4EA] shadow-lg border border-[#C68A32]/50">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#C68A32]">
                हमारा पावन ध्येय (Mission)
              </h3>
              <p className="text-sm sm:text-base text-[#EDE7D4] leading-relaxed font-sans">
                प्रत्येक बालक को बिना किसी आर्थिक भेदभाव के निःशुल्क उच्च गुणवत्तायुक्त संस्कृत एवं आधुनिक शिक्षा प्रदान करना, ताकि वे वैदिक मर्यादा, राष्ट्रभक्ति एवं चारित्रिक शुचिता के साथ समाज का नेतृत्व कर सकें।
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div
            className="flex flex-col justify-between rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl relative overflow-hidden"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(198, 138, 50, 0.4)",
              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-xl bg-[#C68A32] flex items-center justify-center text-[#241B15] shadow-lg border border-[#EDE7D4]/40">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#C68A32]">
                हमारी दूरदृष्टि (Vision)
              </h3>
              <p className="text-sm sm:text-base text-[#EDE7D4] leading-relaxed font-sans">
                भारत की प्राचीन ऋषिकुल शिक्षा परंपरा को पुनर्जीवित करते हुए ऐसा आदर्श केंद्र बनना, जहाँ से निकले विद्वान प्राचीन वेदों के अमर संदेश और 21वीं सदी के विज्ञान का समन्वय कर विश्व बंधुत्व (कृण्वन्तो विश्वमार्यम्) का आलोक फैलाएँ।
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MissionVision;
