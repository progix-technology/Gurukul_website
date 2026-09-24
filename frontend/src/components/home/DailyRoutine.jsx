import React from 'react';
import { Sun, Activity, Flame, Coffee, BookOpen, Utensils, Laptop, Smile, Moon, Book, Bed, Clock } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { DAILY_ROUTINE } from '../../data/eventsData';

const ICON_MAP = {
  Sun,
  Activity,
  Flame,
  Coffee,
  BookOpen,
  Utensils,
  Laptop,
  Smile,
  Moon,
  Book,
  Bed,
};

export const DailyRoutine = () => {
  return (
    <section className="py-20 bg-[#F2EBDA] border-b border-[#C68A32]/30">
      <Container>
        <SectionHeading
          badge="गुरुकुल जीवन शैली"
          title="आदर्श वैदिक दिनचर्या (Daily Routine)"
          subtitle="प्रातः 4:30 ब्रह्ममुहूर्त जागरण से सायं 9:30 शयन तक साधना, योग, स्वाध्याय एवं खेलकूद का संतुलित क्रम"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {DAILY_ROUTINE.map((item, index) => {
            const IconComponent = ICON_MAP[item.icon] || Clock;

            return (
              <div
                key={index}
                className="bg-white rounded-none p-5 border border-[#C68A32]/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Time Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none text-xs font-bold bg-[#F8F4EA] text-[#241B15] border border-[#C68A32]/40">
                      <Clock className="w-3.5 h-3.5 text-[#C96B25]" />
                      {item.time}
                    </span>
                    <div className="w-7 h-7 rounded-none bg-[#F2EBDA] text-[#C96B25] flex items-center justify-center">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-serif font-bold text-base text-[#241B15] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#241B15]/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-[#C68A32]/20 flex items-center justify-between text-[11px] text-[#C68A32]">
                  <span>चरण {index + 1}</span>
                  <span className="font-serif font-bold text-[#C96B25]">ॐ</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default DailyRoutine;
