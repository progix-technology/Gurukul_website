import React from 'react';
import { Quote, Award, ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { ABOUT_DATA } from '../../data/aboutData';

export const PrincipalSnippet = () => {
  const { principalMessage } = ABOUT_DATA;

  return (
    <section className="py-20 bg-[#F8F4EA] border-b border-[#C68A32]/30">
      <Container>
        <div className="bg-[#241B15] rounded-none p-8 sm:p-12 text-[#F8F4EA] shadow-xl border border-[#C68A32]/40 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Principal Photo & Details */}
            <div className="lg:col-span-4 text-center flex flex-col items-center">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-none overflow-hidden border-2 border-[#C68A32] shadow-xl p-1 bg-[#2E221B] mb-4">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
                  alt={principalMessage.principalName}
                  className="w-full h-full object-cover rounded-none"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#C68A32]">
                {principalMessage.principalName}
              </h3>
              <p className="text-xs text-[#F8F4EA]/90 mt-1">
                {principalMessage.qualification}
              </p>
              <span className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-none bg-[#C96B25] text-white text-xs font-semibold shadow-sm border border-amber-300/30">
                <Award className="w-3.5 h-3.5 text-amber-200" />
                प्राचार्य (Principal)
              </span>
            </div>

            {/* Principal's Quote and Message */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-block px-3.5 py-1 rounded-none bg-[#C96B25] text-white text-xs font-bold uppercase tracking-wider shadow-sm border border-amber-300/30">
                {principalMessage.title}
              </div>

              <blockquote className="text-base sm:text-lg text-[#F8F4EA] font-serif leading-relaxed italic">
                "{principalMessage.message.split('\n\n')[1] || principalMessage.message}"
              </blockquote>

              <p className="text-xs sm:text-sm text-[#F8F4EA]/80 leading-relaxed pt-2">
                श्री निःशुल्क गुरुकुल महाविद्यालय, अयोध्या में हम अपने प्रत्येक ब्रह्मचारी को वेदों के सनातन मूल्यों, सदाचार, योग एवं राष्ट्रप्रेम के साथ-साथ आधुनिक विज्ञान में निष्णात करते हैं।
              </p>

              <div className="pt-4">
                <Button
                  to="/about#principal"
                  variant="gold"
                  size="md"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  पूरा संदेश व प्रबंध समिति विवरण
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PrincipalSnippet;
