import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ADMISSION_DATA } from '../../data/admissionData';
import { Gift } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const AdmissionRules = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const { rules, rules_en, freeFacilities } = ADMISSION_DATA;
  const rulesList = isEn ? (rules_en || rules) : rules;

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-orange-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* 100% Free Amenities Section */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              badge={isEn ? "COMPLIMENTARY AMENITIES" : "निःशुल्क सुविधाएँ"}
              title={isEn ? "100% Free Amenities Provided" : "गुरुकुल द्वारा प्रदत्त निःशुल्क सुविधाएँ"}
              subtitle={isEn ? "All essential facilities provided free of charge for holistic student development" : "विद्यार्थी के सर्वांगीण विकास हेतु आवश्यक प्रत्येक सुविधा पूर्णतः निःशुल्क"}
              align="left"
              className="mb-6"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {freeFacilities.map((facility, idx) => {
                const title = isEn ? (facility.title_en || facility.title) : facility.title;
                const desc = isEn ? (facility.desc_en || facility.desc) : facility.desc;

                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-orange-50/60 border border-orange-200/80 shadow-sm"
                  >
                    <div className="flex items-center gap-2 text-gurukul-saffron-800 font-bold text-sm mb-1.5">
                      <Gift className="w-4 h-4 text-gurukul-saffron" />
                      <span>{title}</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Code of Conduct & Rules */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              badge={isEn ? "GURUKUL DISCIPLINE" : "गुरुकुल मर्यादा"}
              title={isEn ? "Discipline & Code of Conduct" : "अनुशासन एवं आचार संहिता"}
              subtitle={isEn ? "Mandatory regulations to be observed by every resident Brahmachari" : "परिसर में प्रत्येक ब्रह्मचारी द्वारा पालन किए जाने वाले अनिवार्य नियम"}
              align="left"
              className="mb-6"
            />

            <div className="bg-gurukul-cream-200 rounded-2xl border border-orange-100 p-6 space-y-3.5 shadow-sm">
              {rulesList.map((rule, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gurukul-maroon text-amber-200 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {rule}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AdmissionRules;

