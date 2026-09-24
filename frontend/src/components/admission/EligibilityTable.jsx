import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { COURSES_DATA } from '../../data/coursesData';
import { CheckCircle2, FileCheck } from 'lucide-react';
import { ADMISSION_DATA } from '../../data/admissionData';

export const EligibilityTable = () => {
  const { requiredDocuments } = ADMISSION_DATA;

  return (
    <section className="py-16 sm:py-20 bg-gurukul-cream-100/60 border-t border-orange-100">
      <Container>
        <SectionHeading
          badge="पात्रता एवं प्रपत्र"
          title="कक्षावार पात्रता एवं आवश्यक दस्तावेज़"
          subtitle="प्रवेश से पूर्व आवश्यक शैक्षणिक योग्यता एवं प्रमाण पत्रों की सूची"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Eligibility Table */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-orange-100 shadow-sm overflow-hidden">
            <div className="p-5 bg-gurukul-maroon text-white flex items-center justify-between">
              <h4 className="font-serif font-bold text-base text-amber-200">
                कक्षावार पात्रता एवं आयु सीमा विवरण
              </h4>
              <span className="text-xs bg-white/20 px-2.5 py-0.5 rounded-full">
                सत्र 2026-27
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-orange-50/80 text-gray-900 border-b border-orange-100 font-serif">
                    <th className="p-3.5 font-bold">कक्षा / पाठ्यक्रम</th>
                    <th className="p-3.5 font-bold">न्यूनतम योग्यता</th>
                    <th className="p-3.5 font-bold">आयु सीमा</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-100 text-gray-700">
                  {COURSES_DATA.map((item) => (
                    <tr key={item.id} className="hover:bg-orange-50/40 transition-colors">
                      <td className="p-3.5 font-semibold text-gray-900 font-serif">
                        {item.title}
                      </td>
                      <td className="p-3.5">{item.eligibility}</td>
                      <td className="p-3.5 font-medium text-gurukul-saffron-800">
                        {item.ageLimit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Required Documents Checklist */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-orange-100 p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-orange-100">
              <FileCheck className="w-5 h-5 text-gurukul-saffron" />
              <h4 className="font-serif font-bold text-base text-gray-900">
                प्रवेश हेतु आवश्यक दस्तावेज़ (Documents)
              </h4>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
              {requiredDocuments.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{doc}</span>
                </li>
              ))}
            </ul>

            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
              <p className="font-semibold mb-0.5">विशेष निर्देश:</p>
              <p>प्रवेश के समय समस्त मूल प्रमाण-पत्र (Originals) सत्यापन हेतु प्रस्तुत करना अनिवार्य है।</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EligibilityTable;
