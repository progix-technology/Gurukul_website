import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import { EVENTS_DATA } from '../../data/eventsData';

export const AboutSnippet = () => {
  return (
    <section className="py-14 bg-[#F2EBDA] border-b border-[#C68A32]/30">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: Swami Dayanand Saraswati */}
          <div className="md:col-span-3 lg:col-span-3">
            <div className="bg-white rounded-none p-4 border border-[#C68A32]/40 shadow-sm flex flex-col items-center text-center h-full justify-between">
              <div className="w-full aspect-[4/3] rounded-none overflow-hidden bg-[#F8F4EA] border border-[#C68A32]/30 mb-3">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=500&q=80"
                  alt="स्वामी दयानन्द सरस्वती"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full pt-1">
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#241B15] leading-tight">
                  स्वामी दयानन्द सरस्वती
                </h3>
                <p className="text-xs text-[#E5832E] font-semibold mt-0.5">
                  आदर्श एवं प्रेरणास्रोत
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Main History Narrative in Center */}
          <div className="md:col-span-6 lg:col-span-4 flex flex-col justify-center bg-white rounded-none p-6 border border-[#C68A32]/40 shadow-sm">
            <div className="space-y-3">
              <span className="inline-block px-3 py-0.5 rounded-none bg-[#241B15] text-[#C68A32] text-xs font-bold uppercase tracking-wider">
                स्थापना सन् 1925 ई०
              </span>
              <h3 className="font-serif font-bold text-lg text-[#241B15] leading-snug">
                श्री निःशुल्क गुरुकुल महाविद्यालय, अयोध्या
              </h3>
              <p className="text-xs sm:text-sm text-[#241B15]/90 leading-relaxed font-medium">
                श्री निःशुल्क गुरुकुल महाविद्यालय की स्थापना स्वामी त्यागानन्द सरस्वती जी द्वारा श्रावण पूर्णिमा संवत् 1982 विक्रमी तद्नुसार सन् 1925 ई० को की गयी । स्वामी त्यागानन्द सरस्वती जी का जन्म कोहरौली जिला देवरिया में हुआ था । यह महाविद्यालय प्राच्य शिक्षा पद्धति (आवासीय व्यवस्था) के अन्तर्गत संस्कृत के साथ आधुनिक विषयों के अध्ययन अध्यापन की व्यवस्था संचालित करता है ।
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E5832E] hover:text-[#D97724] hover:underline"
                >
                  <span>विस्तृत इतिहास पढ़ें</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Swami Tyaganand Saraswati */}
          <div className="md:col-span-3 lg:col-span-2">
            <div className="bg-white rounded-none p-4 border border-[#C68A32]/40 shadow-sm flex flex-col items-center text-center h-full justify-between">
              <div className="w-full aspect-[4/3] rounded-none overflow-hidden bg-[#F8F4EA] border border-[#C68A32]/30 mb-3">
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=500&q=80"
                  alt="स्वामी त्यागानन्द सरस्वती"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full pt-1">
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#241B15] leading-tight">
                  स्वामी त्यागानन्द सरस्वती
                </h3>
                <p className="text-xs text-[#E5832E] font-semibold mt-0.5">
                  गुरुकुल संस्थापक
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Recent Events Box */}
          <div className="md:col-span-12 lg:col-span-3">
            <div className="bg-white rounded-none p-5 border border-[#C68A32]/40 shadow-sm flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#C68A32]/30 mb-3">
                  <h3 className="font-serif font-bold text-base text-[#241B15] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-none bg-[#E5832E] animate-pulse" />
                    <span>नवीन कार्यक्रम (Events)</span>
                  </h3>
                  <Link to="/events" className="text-[11px] font-bold text-[#E5832E] hover:underline">
                    सभी देखें
                  </Link>
                </div>

                {/* Event list */}
                <div className="space-y-2.5">
                  {EVENTS_DATA.slice(0, 3).map((event) => (
                    <Link
                      key={event.id}
                      to="/events"
                      className="block p-2.5 rounded-none bg-[#F8F4EA] hover:bg-[#F2EBDA] border border-[#C68A32]/20 transition-colors group"
                    >
                      <div className="flex items-center gap-1.5 text-[11px] text-[#E5832E] font-bold mb-1">
                        <Calendar className="w-3 h-3 text-[#E5832E]" />
                        <span>{event.date}</span>
                      </div>
                      <h4 className="font-serif font-bold text-xs text-[#241B15] group-hover:text-[#E5832E] transition-colors line-clamp-1">
                        {event.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#C68A32]/20 text-center">
                <Link
                  to="/events"
                  className="text-xs font-bold text-[#E5832E] hover:underline flex items-center justify-center gap-1"
                >
                  <span>कार्यक्रम कैलेंडर देखें</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSnippet;
