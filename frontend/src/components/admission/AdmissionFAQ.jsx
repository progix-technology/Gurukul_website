import React, { useState } from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ADMISSION_DATA } from '../../data/admissionData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const AdmissionFAQ = () => {
  const { faqs } = ADMISSION_DATA;
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-gurukul-cream-100/60 border-t border-orange-100">
      <Container className="max-w-4xl">
        <SectionHeading
          badge="प्रायः पूछे जाने वाले प्रश्न"
          title="प्रवेश संबंधी महत्वपूर्ण प्रश्नोत्तर (FAQs)"
          subtitle="अभिभावकों एवं विद्यार्थियों की सामान्य जिज्ञासाओं के प्रामाणिक उत्तर"
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-orange-100 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-gray-900 hover:text-gurukul-saffron transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-gurukul-saffron flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-gurukul-saffron' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-orange-50 bg-orange-50/20">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AdmissionFAQ;
