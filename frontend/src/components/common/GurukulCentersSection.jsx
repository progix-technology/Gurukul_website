import React from 'react';
import Container from './Container';
import SectionHeading from './SectionHeading';
import { INSTITUTION_INFO } from '../../data/institutionalData';
import {
  Building2,
  MapPin,
  Globe,
  ExternalLink,
  BookOpen,
  Sparkles,
  Users,
  Award
} from 'lucide-react';

export const GurukulCentersSection = ({ className = '' }) => {
  const { gurukulCenters } = INSTITUTION_INFO;

  return (
    <section className={`py-16 sm:py-20 bg-white border-t border-[#C68A32]/20 ${className}`}>
      <Container>
        <SectionHeading
          badge="अयोध्या के प्रमुख गुरुकुल केंद्र"
          title="वैदिक शिक्षण केंद्र एवं सहयोगी विद्यापीठ"
          subtitle="अयोध्या धाम में वैदिक संस्कृति, संस्कृत ज्ञान एवं आधुनिक शिक्षा के प्रमुख केंद्र"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {gurukulCenters.map((center) => (
            <div
              key={center.id}
              className={`rounded-2xl p-7 sm:p-8 border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative flex flex-col justify-between overflow-hidden ${
                center.isPrimary
                  ? 'bg-[#FAF8F5] border-[#C68A32] shadow-md'
                  : 'bg-white border-orange-200/80 shadow-sm'
              }`}
            >
              {/* Subtle accent border at top */}
              <div
                className="absolute top-0 inset-x-0 h-1"
                style={{ backgroundColor: center.isPrimary ? '#C68A32' : '#C96B25' }}
              />

              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 text-xs font-bold font-serif uppercase tracking-wider rounded-none border ${
                        center.isPrimary
                          ? 'bg-[#241B15] text-[#C68A32] border-[#C68A32]/40'
                          : 'bg-orange-50 text-[#C96B25] border-orange-200'
                      }`}
                    >
                      {center.tag}
                    </span>
                  </div>

                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 ${
                      center.isPrimary
                        ? 'bg-[#C68A32] text-[#241B15]'
                        : 'bg-orange-100 text-[#C96B25]'
                    }`}
                  >
                    <Building2 className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#241B15] leading-snug">
                    {center.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#8B4513] mt-1">
                    {center.affiliation}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
                  {center.about}
                </p>

                {/* Address block */}
                <div className="p-3.5 rounded-xl bg-orange-50/70 border border-orange-100 flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C96B25] flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-gray-800 leading-relaxed font-sans">
                    <span className="font-bold text-[#241B15] block mb-0.5">पता:</span>
                    {center.address}
                  </div>
                </div>
              </div>

              {/* Action Buttons / Links */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                {center.portal && (
                  <a
                    href={center.portal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#E5832E] text-white text-xs sm:text-sm font-semibold rounded shadow-sm hover:bg-[#D97724] transition-all"
                  >
                    <Globe className="w-4 h-4" />
                    <span>आधिकारिक पोर्टल: {center.portalText}</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                  </a>
                )}

                {center.facebookGroup && (
                  <a
                    href={center.facebookGroup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1877F2] text-white text-xs sm:text-sm font-semibold rounded shadow-sm hover:bg-[#166FE5] transition-all"
                  >
                    <Users className="w-4 h-4" />
                    <span>फेसबुक ग्रुप (प्रवेश व सूचना): {center.facebookGroupText}</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default GurukulCentersSection;
