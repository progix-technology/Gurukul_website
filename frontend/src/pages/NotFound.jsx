import React from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import { Home, BookOpen, AlertTriangle } from 'lucide-react';

export const NotFound = () => {
  return (
    <>
      <SEO
        title="पृष्ठ नहीं मिला (404)"
        description="क्षमा करें, आपके द्वारा खोजा गया पृष्ठ उपलब्ध नहीं है।"
      />

      <section className="min-h-[70vh] flex items-center justify-center py-20 bg-gurukul-cream-100">
        <Container className="max-w-2xl text-center">
          <div className="bg-white rounded-3xl border border-orange-200 p-8 sm:p-12 shadow-vedic">
            {/* Vedic Emblem */}
            <div className="w-20 h-20 rounded-full bg-orange-100 text-gurukul-saffron flex items-center justify-center font-serif text-3xl font-bold mx-auto mb-6 border-2 border-amber-300">
              404
            </div>

            <span className="px-3.5 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider inline-block mb-3">
              त्रुटि 404
            </span>

            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">
              पृष्ठ नहीं मिला
            </h1>

            <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed max-w-md mx-auto">
              क्षमा करें, जिस पृष्ठ को आप खोज रहे हैं वह उपलब्ध नहीं है या इसका पता बदल दिया गया है।
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                to="/"
                variant="primary"
                size="lg"
                icon={Home}
                className="w-full sm:w-auto"
              >
                मुख्य पृष्ठ पर जाएँ
              </Button>

              <Button
                to="/courses"
                variant="outline"
                size="lg"
                icon={BookOpen}
                className="w-full sm:w-auto"
              >
                पाठ्यक्रम देखें
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NotFound;
