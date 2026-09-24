import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import {
  CheckCircle,
  HelpCircle,
  Info,
  ShieldCheck,
  Utensils,
  GraduationCap,
  Sparkles,
  Building,
  BookOpen
} from 'lucide-react';

export const FeeStructure = () => {
  const feeItems = [
    {
      title: 'शिक्षण शुल्क (Tuition Fee)',
      amount: 'निःशुल्क (₹0)',
      frequency: 'संपूर्ण सत्र',
      desc: 'कक्षा 6 (प्रथमा) से आचार्य (M.A.) तक किसी भी प्रकार का शिक्षण शुल्क नहीं लिया जाता।',
      icon: GraduationCap,
      isFree: true,
      badge: 'पूर्णतः निःशुल्क'
    },
    {
      title: 'प्रवेश / नामांकन शुल्क (Admission Fee)',
      amount: '₹500',
      frequency: 'एकमुश्त (One-time)',
      desc: 'प्रवेश के समय पंजीकरण एवं प्रशासनिक व्यवस्था हेतु अप्रतिदेय (Non-refundable) शुल्क।',
      icon: ShieldCheck,
      isFree: false
    },
    {
      title: 'मासिक भोजन व्यवस्था शुल्क (Monthly Meal Charge)',
      amount: '₹500',
      frequency: 'प्रति माह (Per Month)',
      desc: 'गुरुकुल गौशाला के शुद्ध दुग्ध एवं त्रिकाल सात्विक, पौष्टिक भोजन व्यवस्था हेतु नाममात्र सहयोग।',
      icon: Utensils,
      isFree: false
    },
    {
      title: 'वार्षिक विकास शुल्क (Annual Development Fee)',
      amount: '₹60',
      frequency: 'प्रति वर्ष (Per Year)',
      desc: 'गुरुकुल परिसर के रखरखाव एवं आवश्यक भौतिक संसाधन विकास हेतु।',
      icon: Building,
      isFree: false
    },
    {
      title: 'वार्षिक शिक्षण संवर्धन शुल्क (Annual Teaching Fee)',
      amount: '₹24',
      frequency: 'प्रति वर्ष (Per Year)',
      desc: 'परीक्षा सामग्री, प्रश्न-पत्र एवं शैक्षणिक गतिविधियों हेतु वार्षिक शुल्क।',
      icon: BookOpen,
      isFree: false
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FAF8F5] border-t border-[#C68A32]/20">
      <Container>
        <SectionHeading
          badge="पारदर्शी शुल्क व्यवस्था"
          title="शुल्क संरचना एवं आवासीय व्यवस्था विवरण"
          subtitle="श्री निःशुल्क गुरुकुल महाविद्यालय में पारंपरिक शिक्षण पूर्णतः निःशुल्क है। नाममात्र सहयोग शुल्क विवरण नीचे दिया गया है:"
        />

        {/* Fee Breakdown Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-10">
          {feeItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className={`rounded-xl sm:rounded-2xl p-3.5 sm:p-7 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative flex flex-col justify-between ${
                  item.isFree
                    ? 'bg-gradient-to-br from-[#241B15] to-[#36251B] text-[#F8F4EA] border-[#C68A32] shadow-lg'
                    : 'bg-white border-orange-100 text-gray-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-4">
                    <div
                      className={`w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md ${
                        item.isFree
                          ? 'bg-[#C68A32] text-[#241B15]'
                          : 'bg-orange-50 text-[#C96B25] border border-orange-200'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>

                    {item.badge ? (
                      <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-emerald-600 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-sm">
                        {item.badge}
                      </span>
                    ) : (
                      <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-0.5 bg-orange-100/80 text-[#8B4513] text-[9px] sm:text-[11px] font-semibold rounded-md">
                        {item.frequency}
                      </span>
                    )}
                  </div>

                  <h3
                    className={`font-serif font-bold text-xs sm:text-lg mb-1 sm:mb-2 line-clamp-2 sm:line-clamp-none ${
                      item.isFree ? 'text-[#C68A32]' : 'text-[#241B15]'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <div className="mb-2 sm:mb-3">
                    <span
                      className={`text-base sm:text-3xl font-bold font-serif ${
                        item.isFree ? 'text-[#F8F4EA]' : 'text-[#C96B25]'
                      }`}
                    >
                      {item.amount}
                    </span>
                    {item.frequency && !item.badge && (
                      <span className="text-[10px] sm:text-xs text-gray-500 ml-1 font-medium hidden sm:inline-block">
                        / {item.frequency}
                      </span>
                    )}
                  </div>

                  <p
                    className={`text-[11px] sm:text-sm leading-snug sm:leading-relaxed font-sans line-clamp-3 sm:line-clamp-none ${
                      item.isFree ? 'text-[#EDE7D4]' : 'text-gray-600'
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note For Parents Regarding Personal Items */}
        <div
          className="mt-10 rounded-2xl p-6 sm:p-8 border shadow-sm"
          style={{
            backgroundColor: '#FFFDF9',
            borderColor: '#C68A32'
          }}
        >
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#C96B25] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow">
              <Info className="w-5 h-5" />
            </div>

            <div className="space-y-2 flex-1">
              <h4 className="font-serif font-bold text-base sm:text-lg text-[#241B15]">
                अभिभावकों हेतु आवश्यक निर्देश (Note for Parents)
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
                गुरुकुल में रहने वाले प्रत्येक विद्यार्थी की व्यक्तिगत दैनिक उपयोग की सामग्री की व्यवस्था अभिभावकों द्वारा की जाती है:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-2">
                {[
                  'भोजन के बर्तन (थाली, कटोरी, गिलास, चम्मच)',
                  'बिछौना व बिस्तर (गद्दा, चादर, तकिया, कम्बल/रजाई)',
                  'दैनिक स्वच्छता सामग्री (साबुन, तेल, दंतमंजन आदि)',
                  'गुरुकुलीय वेशभूषा (धोती-कुर्ता / निर्धारित वस्त्र)',
                  'पाठ्य पुस्तकें, कॉपियां व लेखन सामग्री'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-800 font-medium">
                    <span className="text-[#C96B25] font-bold">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comparison & Vedic Mission Context */}
        <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#241B15] text-[#F8F4EA] border border-[#C68A32]/40 shadow-md">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-serif font-bold text-[#C68A32] uppercase tracking-wider">
                निःशुल्क गुरुकुलीय सेवा संकल्प
              </span>
              <p className="text-xs sm:text-sm text-[#EDE7D4] leading-relaxed font-sans max-w-3xl">
                जहाँ आधुनिक निजी विद्यालयों में वार्षिक शिक्षण व्यय ₹30,000 से ₹1,00,000 तक होता है, वहीं श्री निःशुल्क गुरुकुल महाविद्यालय अयोध्या में लगभग 100 वर्षों से नाममात्र सहयोग पर राष्ट्र निर्माण हेतु समर्पित ऋषि परम्परा की शिक्षा प्रदान की जा रही है।
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeeStructure;
