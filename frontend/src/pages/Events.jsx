import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import EventCard from '../components/events/EventCard';
import EventDetailModal from '../components/events/EventDetailModal';
import CallToAction from '../components/home/CallToAction';
import { EVENTS_DATA } from '../data/eventsData';
import { Sparkles } from 'lucide-react';
import bannerBgImg from '../assets/img_2.jpeg';
import { useLanguage } from '../context/LanguageContext';

export const Events = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { language } = useLanguage();
  const isEn = language === 'en';

  const categories = [
    { id: 'all', label: isEn ? 'All Events' : 'सभी कार्यक्रम' },
    { id: 'adani-lab', label: isEn ? 'Adani Computer Lab' : 'अडानी कंप्यूटर लैब' },
    { id: 'annual-day', label: isEn ? '51st Annual Day' : '51वाँ वार्षिकोत्सव' },
    { id: 'independence-day', label: isEn ? 'Independence Day' : 'स्वतंत्रता दिवस (15 अगस्त)' },
    { id: 'guru-purnima', label: isEn ? 'Guru Purnima' : 'गुरु पूर्णिमा महोत्सव' },
    { id: 'veda-prachar', label: isEn ? 'Veda Prachar Camp' : 'वेद प्रचार शिविर' },
    { id: 'rishi-bodhotsav', label: isEn ? 'Rishi Bodhotsav' : 'ऋषि बोधोत्सव' },
    { id: 'shastrartha', label: isEn ? 'Shastrartha Contest' : 'शास्त्रार्थ प्रतियोगिता' },
  ];

  const filteredEvents = activeCategory === 'all'
    ? EVENTS_DATA
    : EVENTS_DATA.filter((e) => e.eventFilter === activeCategory || e.category === activeCategory || e.id === activeCategory);

  return (
    <>
      <SEO
        title={isEn ? "Events & News" : "कार्यक्रम एवं समाचार"}
        description={isEn
          ? "Annual festivals, Veda propagation camps, Mahayajnas and cultural events of Shri Nishulk Gurukul Mahavidyalaya Ayodhya."
          : "श्री निःशुल्क गुरुकुल महाविद्यालय अयोध्या के वार्षिक उत्सव, वेद प्रचार शिविर, महायज्ञ एवं सांस्कृतिक कार्यक्रम।"}
      />

      {/* Header Banner */}
      <section className="relative overflow-hidden text-white pt-24 pb-16 sm:pt-32 sm:pb-24 bg-[#241B15] select-none">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBgImg}
            alt={isEn ? "Shri Nishulk Gurukul Mahavidyalaya Events" : "श्री निःशुल्क गुरुकुल महाविद्यालय कार्यक्रम"}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          {/* Light Warm Vedic Overlay - letting the building shine through */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(36,27,21,0.55) 0%, rgba(36,27,21,0.35) 50%, rgba(36,27,21,0.70) 100%)',
            }}
          />
          <div className="absolute top-0 right-0 w-80 h-80 bg-gurukul-saffron/20 rounded-full blur-3xl pointer-events-none" />
        </div>

        <Container className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="text-3xl sm:text-4xl mb-2 font-serif text-[#C68A32]">
            ॐ
          </div>
          <div className="inline-flex items-center px-4 py-1 rounded-none text-xs sm:text-sm font-serif font-bold uppercase tracking-wider mb-4 bg-transparent text-[#F8F4EA] border border-[#C68A32] shadow-sm">
            <span>{isEn ? "Vedic Celebrations & Academic Ceremonies" : "वैदिक उत्सव एवं समारोह"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-3 drop-shadow-md">
            {isEn ? "Events & Campus News" : "कार्यक्रम एवं समाचार (Events)"}
          </h1>
          <p className="text-sm sm:text-base text-[#F8F4EA]/90 max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-medium">
            {isEn
              ? "Detailed schedule of the 51st Annual Day, Devayajna, Vedic Mission Week, and National Celebrations hosted at the Gurukul."
              : "गुरुकुल में आयोजित होने वाले 51वें वार्षिकोत्सव, देवयज्ञ, वेद प्रचार सप्ताह एवं राष्ट्रीय पर्वों की रूपरेखा"}
          </p>
        </Container>
      </section>

      {/* Events Content */}
      <section className="py-20 bg-white">
        <Container>
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-gurukul-saffron text-white shadow-md'
                    : 'bg-gurukul-cream-200 text-gray-700 hover:bg-orange-50 border border-orange-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onOpenDetails={setSelectedEvent}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Event Details Modal */}
      {selectedEvent && (
        <EventDetailModal
          event={selectedEvent}
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}

      {/* CTA */}
      <CallToAction />
    </>
  );
};

export default Events;
