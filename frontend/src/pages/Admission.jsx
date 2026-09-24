import React from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import AdmissionProcess from '../components/admission/AdmissionProcess';
import EligibilityTable from '../components/admission/EligibilityTable';
import FeeStructure from '../components/admission/FeeStructure';
import AdmissionRules from '../components/admission/AdmissionRules';
import QuickInquiryForm from '../components/admission/QuickInquiryForm';
import AdmissionFAQ from '../components/admission/AdmissionFAQ';
import { GraduationCap, Sparkles } from 'lucide-react';
import bannerBgImg from '../assets/img_2.jpeg';

export const Admission = () => {
  return (
    <>
      <SEO
        title="प्रवेश प्रक्रिया एवं शुल्क संरचना"
        description="श्री निःशुल्क गुरुकुल महाविद्यालय अयोध्या में प्रवेश प्रक्रिया, शुल्क संरचना, पात्रता, आवश्यक दस्तावेज़, नियम एवं ऑनलाइन पूछताछ फॉर्म।"
      />

      {/* Header Banner */}
      <section className="relative overflow-hidden text-white pt-24 pb-16 sm:pt-32 sm:pb-24 bg-[#241B15] select-none">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBgImg}
            alt="श्री निःशुल्क गुरुकुल महाविद्यालय प्रवेश"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          {/* Light Warm Vedic Overlay - letting the building shine through */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(36,27,21,0.55) 0%, rgba(36,27,21,0.35) 50%, rgba(36,27,21,0.70) 100%)',
            }}
          />
          <div className="absolute top-0 right-0 w-80 h-80 bg-gurukul-saffron/20 rounded-full blur-3xl pointer-events-none" />
        </div>

        <Container className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="text-3xl sm:text-4xl mb-2 font-serif text-[#C68A32]">
            ॐ
          </div>
          <div className="inline-flex items-center px-4 py-1 rounded-none text-xs sm:text-sm font-serif font-bold uppercase tracking-wider mb-4 bg-transparent text-[#F8F4EA] border border-[#C68A32] shadow-sm">
            <span>सत्र 2026-27 प्रवेश खुला है</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-3 drop-shadow-md">
            प्रवेश प्रक्रिया एवं शुल्क संरचना
          </h1>
          <p className="text-sm sm:text-base text-[#F8F4EA]/90 max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-medium">
            निःशुल्क शिक्षा, आवास, भोजन, वस्त्र एवं पुस्तकों के साथ गौरवशाली ऋषिकुल जीवन में प्रवेश प्राप्त करें
          </p>
        </Container>
      </section>

      {/* Process & Timeline */}
      <AdmissionProcess />

      {/* Eligibility & Documents */}
      <EligibilityTable />

      {/* Fee Structure & Parent Guidelines */}
      <FeeStructure />

      {/* Free Facilities & Rules */}
      <AdmissionRules />

      {/* Quick Inquiry Form */}
      <QuickInquiryForm />

      {/* FAQs */}
      <AdmissionFAQ />
    </>
  );
};

export default Admission;
