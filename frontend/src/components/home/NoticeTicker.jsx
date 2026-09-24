import React from 'react';

export const NoticeTicker = () => {
  return (
    <div className="bg-[#C68A32] text-[#241B15] font-bold py-3 px-4 border-y border-[#945E1B] shadow-inner overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="relative overflow-hidden w-full whitespace-nowrap">
          <div className="inline-block animate-marquee hover:[animation-play-state:paused] cursor-pointer text-base sm:text-lg font-serif">
            <span className="inline-flex items-center mx-8">
              <span>श्री निःशुल्क गुरुकुल महाविद्यालय अयोध्या आपका स्वागत करता है।</span>
            </span>
            <span className="inline-flex items-center mx-8">
              <span>★ सत्र 2026-27 प्रवेश प्रारम्भ (1 जुलाई से 31 जुलाई)</span>
            </span>
            <span className="inline-flex items-center mx-8">
              <span>★ सम्पूर्णानन्द संस्कृत विश्वविद्यालय वाराणसी से "क-वर्ग" प्रथम श्रेणी में मान्यता प्राप्त</span>
            </span>
            <span className="inline-flex items-center mx-8">
              <span>★ पूर्णतः निःशुल्क शिक्षा, भोजन, आवास, वस्त्र एवं पाठ्य सामग्री</span>
            </span>
            <span className="inline-flex items-center mx-8">
              <span>★ अप्रैल 2026: अडानी फाउंडेशन द्वारा स्थापित अत्याधुनिक Adani Computer Lab में डिजिटल प्रशिक्षण प्रारम्भ</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeTicker;
