import React from 'react';
import Container from './Container';
import SectionHeading from './SectionHeading';
import {
  FileText,
  ExternalLink,
  Download,
  Share2,
  Newspaper,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import adaniLabPdf from '../../assets/gurukul_adani_lab.pdf';

export const MediaCoverageSection = ({ className = '' }) => {
  return (
    <section className={`py-16 sm:py-20 bg-[#FAF8F5] border-t border-[#C68A32]/20 ${className}`}>
      <Container>
        <SectionHeading
          badge="समाचार एवं सोशल मीडिया"
          title="मीडिया कवरेज एवं डिजिटल संपर्क"
          subtitle="द टाइम्स ऑफ इंडिया (The Times of India) में प्रकाशित विशेष रिपोर्ट एवं गुरुकुल के आधिकारिक सोशल मीडिया माध्यम"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10 items-stretch">
          {/* Left Column: The Times of India News Feature */}
          <div className="lg:col-span-7 bg-white rounded-2xl border-2 border-[#C68A32]/40 shadow-xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Top red accent line characteristic of Times of India */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-[#D32F2F]" />

            <div>
              {/* Newspaper Header */}
              <div className="flex items-center justify-between border-b-2 border-gray-200 pb-4 mb-5">
                <div>
                  <div className="text-xl sm:text-2xl font-black font-serif tracking-tight text-[#1A1A1A] flex items-center gap-2">
                    <span className="text-[#D32F2F] text-2xl font-bold font-serif">■</span>
                    THE TIMES OF INDIA
                  </div>
                  <p className="text-[11px] text-gray-500 mt-0.5 font-mono">
                    TNN | Published Media Coverage • Ayodhya
                  </p>
                </div>

                <span className="px-3 py-1 bg-red-50 text-[#D32F2F] text-xs font-bold font-serif border border-red-200 uppercase tracking-wider">
                  राष्ट्रीय समाचार
                </span>
              </div>

              {/* Headline */}
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#241B15] leading-snug mb-3">
                Adani Foundation sets up modern computer lab at Ayodhya Gurukul
              </h3>

              <p className="text-xs sm:text-sm font-semibold text-[#8B4513] mb-4">
                अयोध्या के श्री निःशुल्क गुरुकुल महाविद्यालय में स्थापित हुई अत्याधुनिक कंप्यूटर लैब — टाइम्स ऑफ इंडिया विशेष कवरेज
              </p>

              {/* Article Content Summary */}
              <div className="space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed font-sans bg-amber-50/50 p-4 rounded-xl border border-amber-200/60 mb-6">
                <p>
                  <strong>अयोध्या:</strong> अडानी फाउंडेशन की विशेष पहल के अंतर्गत अयोध्या के <strong>श्री निःशुल्क गुरुकुल महाविद्यालय</strong> में अत्याधुनिक कंप्यूटर लैब की स्थापना की गई है। यह पहल पारंपरिक गुरुकुल शिक्षा पद्धति को 21वीं सदी के आधुनिक तकनीकी संसाधनों से जोड़ने की दिशा में एक ऐतिहासिक कदम है।
                </p>
                <p>
                  अप्रैल 2026 में उद्योगपति <strong>श्री गौतम अडानी</strong>, अडानी फाउंडेशन की अध्यक्षा <strong>डॉ. प्रीति अडानी</strong>, सुपुत्र <strong>श्री करण अडानी</strong> एवं पुत्रवधू <strong>श्रीमती परिधि अडानी</strong> ने रामलला के दर्शन उपरांत गुरुकुल का भ्रमण किया। विद्यार्थियों के विशेष अनुरोध पर अडानी फाउंडेशन ने इस सर्वसुविधायुक्त लैब की स्थापना की।
                </p>
                <div className="p-3 bg-white rounded-lg border-l-4 border-[#C96B25] text-xs italic text-gray-800 font-serif">
                  "श्री निःशुल्क गुरुकुल महाविद्यालय के विद्यार्थियों को आधुनिक कंप्यूटर लैब के माध्यम से तकनीक से जुड़ते देखना अत्यंत सुखद है... यह प्राचीन ज्ञान परंपरा और डिजिटल युग के बीच एक सुदृढ़ सेतु है।"
                  <span className="block not-italic font-bold text-[#C96B25] mt-1 font-sans">— श्री गौतम अडानी (X पर साझा सन्देश)</span>
                </div>
              </div>
            </div>

            {/* Action Buttons for News */}
            <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={adaniLabPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#C96B25] text-white text-xs sm:text-sm font-semibold shadow-md hover:bg-[#B35614] transition-all"
              >
                <Download className="w-4 h-4" />
                <span>टाइम्स ऑफ इंडिया न्यूज़ PDF देखें</span>
              </a>

              <a
                href="https://timesofindia.indiatimes.com/city/lucknow/adani-foundation-sets-up-modern-computer-lab-at-ayodhya-gurukul/articleshow/133548689.cms"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded border border-[#C68A32] text-[#241B15] bg-white text-xs sm:text-sm font-semibold shadow-sm hover:bg-orange-50 transition-all"
              >
                <ExternalLink className="w-4 h-4 text-[#C96B25]" />
                <span>TOI ऑनलाइन न्यूज़ आर्टिकल</span>
              </a>
            </div>
          </div>

          {/* Right Column: Social Media & Official Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            {/* Facebook Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-blue-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-[#1877F2] text-white flex items-center justify-center shadow-md flex-shrink-0">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#241B15]">
                    फेसबुक समुदाय (Facebook Community)
                  </h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    दैनिक गतिविधियाँ, वेद पाठ एवं प्रवेश सूचनाएँ
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed font-sans mb-4">
                श्री निःशुल्क गुरुकुल महाविद्यालय अयोध्या के आधिकारिक फेसबुक समूह से जुड़कर सभी नवीनतम अपडेट एवं वैदिक आयोजनों की जानकारी प्राप्त करें।
              </p>

              <a
                href="https://www.facebook.com/sri.nissulka.gurukulamahavidyalaya.ayodhya/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs sm:text-sm font-semibold rounded shadow transition-all"
              >
                <span>फेसबुक पेज से जुड़ें</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* YouTube Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-red-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-[#FF0000] text-white flex items-center justify-center shadow-md flex-shrink-0">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#241B15]">
                    यूट्यूब चैनल (YouTube Channel)
                  </h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    वैदिक मंत्रोच्चार, यज्ञ, दैनिक दिनचर्या व वीडियो
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed font-sans mb-4">
                गुरुकुल के ब्रह्मचारियों द्वारा सस्वर वेद पाठ, वार्षिकोत्सव, दीक्षारम्भ एवं Adani Computer Lab के वीडियो देखने हेतु यूट्यूब चैनल सब्सक्राइब करें।
              </p>

              <a
                href="https://www.youtube.com/@gurukulayodhya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#FF0000] hover:bg-[#e60000] text-white text-xs sm:text-sm font-semibold rounded shadow transition-all"
              >
                <span>यूट्यूब चैनल देखें</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* X (Twitter) Video Mention Card */}
            <div className="bg-[#241B15] text-[#F8F4EA] rounded-2xl p-5 sm:p-6 border border-[#C68A32]/40 shadow-md flex flex-col justify-between">
              <div className="flex items-start gap-4 mb-2">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center border border-white/20 shadow-md flex-shrink-0">
                  <span className="font-bold text-base">𝕏</span>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#C68A32]">
                    गौतम अडानी जी का वीडियो सन्देश (X / Twitter)
                  </h4>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    गुरुकुल कंप्यूटर लैब लोकार्पण पर आधिकारिक पोस्ट
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#EDE7D4] leading-relaxed font-sans mb-3">
                "विद्यार्थियों को आधुनिक कंप्यूटर लैब से जुड़ते देखना संतोषप्रद है... यह भारत की ज्ञान परंपरा और डिजिटल युग के बीच एक सेतु है।"
              </p>

              <a
                href="https://x.com/gautam_adani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#C96B25] hover:bg-[#B35614] text-white text-xs font-semibold rounded shadow transition-all"
              >
                <span>X (Twitter) पर वीडियो देखें</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MediaCoverageSection;
