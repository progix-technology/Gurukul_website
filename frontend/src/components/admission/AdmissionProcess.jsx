import React from 'react';
import { FileText, UserCheck, Award, Home } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ADMISSION_DATA } from '../../data/admissionData';
import { useLanguage } from '../../context/LanguageContext';

const ICON_MAP = {
  FileText,
  UserCheck,
  Award,
  Home,
};

export const AdmissionProcess = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const { steps, timeline } = ADMISSION_DATA;

  const sessionText = isEn ? (timeline.session_en || timeline.session) : timeline.session;
  const startText = isEn ? (timeline.startDate_en || timeline.startDate) : timeline.startDate;
  const endText = isEn ? (timeline.endDate_en || timeline.endDate) : timeline.endDate;
  const noteText = isEn ? (timeline.specialNote_en || timeline.specialNote) : timeline.specialNote;

  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        {/* Timeline Highlight Bar */}
        <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200 rounded-2xl p-6 sm:p-8 mb-16 shadow-sm text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-gurukul-saffron text-white text-xs font-bold uppercase tracking-wider inline-block mb-3">
            {isEn ? "ANNUAL ADMISSION PERIOD" : "वार्षिक प्रवेश अवधि"}
          </span>
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-gray-900 mb-2">
            {isEn 
              ? `Admission Session ${sessionText}: ${startText} to ${endText}` 
              : `प्रवेश सत्र ${sessionText}: ${startText} से ${endText}`
            }
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xl mx-auto">
            {noteText}
          </p>
        </div>

        <SectionHeading
          badge={isEn ? "ADMISSION PROCEDURE" : "प्रवेश विधि"}
          title={isEn ? "Step-by-Step Admission Process" : "चरणबद्ध प्रवेश प्रक्रिया (Step-by-Step Process)"}
          subtitle={isEn ? "Simple, transparent 4-stage admission procedure for aspiring students" : "गुरुकुल में प्रवेश हेतु सरल एवं पारदर्शी 4-चरणीय व्यवस्था"}
        />

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 relative">
          {steps.map((step) => {
            const IconComponent = ICON_MAP[step.icon] || FileText;
            const title = isEn ? (step.title_en || step.title) : step.title;
            const description = isEn ? (step.description_en || step.description) : step.description;

            return (
              <div
                key={step.stepNumber}
                className="bg-gurukul-cream-100/70 rounded-xl sm:rounded-2xl p-3.5 sm:p-6 border border-orange-100 hover:shadow-vedic transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-4">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-gurukul-saffron text-white flex items-center justify-center font-serif text-sm sm:text-lg font-bold shadow-md group-hover:scale-105 transition-transform">
                      {step.stepNumber}
                    </div>
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-orange-100 text-gurukul-saffron flex items-center justify-center">
                      <IconComponent className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  <h4 className="font-serif font-bold text-xs sm:text-base text-gray-900 mb-1 sm:mb-2 group-hover:text-gurukul-saffron transition-colors line-clamp-2 sm:line-clamp-none">
                    {title}
                  </h4>

                  <p className="text-[11px] sm:text-sm text-gray-600 leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-none font-sans">
                    {description}
                  </p>
                </div>

                <div className="mt-3 sm:mt-6 pt-2 sm:pt-3 border-t border-orange-100/80 text-[10px] sm:text-[11px] font-bold text-gurukul-maroon">
                  {isEn ? `Step ${step.stepNumber}` : `चरण ${step.stepNumber} पूर्ण करें`}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AdmissionProcess;

