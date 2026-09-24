import React from 'react';
import { BookOpen, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import Container from '../common/Container';

export const CurriculumOverview = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-orange-50/50 to-gurukul-cream-100 border-t border-orange-100">
      <Container>
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-orange-200/80 shadow-vedic">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-gurukul-saffron flex items-center justify-center font-bold">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-gray-900">
                प्राच्य वैदिक शिक्षा
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                ऋग्वेद, यजुर्वेद, सामवेद, अथर्ववेद के मन्त्र, पाणिनीय अष्टाध्यायी, सिद्धान्तकौमुदी, दर्शन, उपनिषद एवं संस्कार विधि का प्रामाणिक अध्ययन।
              </p>
            </div>

            {/* Box 2 */}
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-gray-900">
                आधुनिक विषय व कंप्यूटर
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                गणित, सामान्य विज्ञान, अंग्रेजी भाषा, सामाजिक अध्ययन एवं आधुनिक कंप्यूटर लैब में व्यावहारिक डिजिटल शिक्षा।
              </p>
            </div>

            {/* Box 3 */}
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-gurukul-maroon flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-gray-900">
                विश्वविद्यालयी मान्यता
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                सम्पूर्णानन्द संस्कृत विश्वविद्यालय, वाराणसी से 'क-वर्ग' प्रथम श्रेणी मान्यता। देश भर में उच्च शिक्षा एवं नौकरियों हेतु पूर्णतः मान्य।
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CurriculumOverview;
