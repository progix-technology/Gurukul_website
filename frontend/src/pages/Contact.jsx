import React from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import ContactCard from '../components/contact/ContactCard';
import ContactForm from '../components/contact/ContactForm';
import MediaCoverageSection from '../components/common/MediaCoverageSection';
import MapEmbed from '../components/contact/MapEmbed';
import { Sparkles, PhoneCall } from 'lucide-react';
import bannerBgImg from '../assets/img_2.jpeg';

export const Contact = () => {
  return (
    <>
      <SEO
        title="संपर्क करें"
        description="श्री निःशुल्क गुरुकुल महाविद्यालय अयोध्या का आधिकारिक पता, फोन नंबर, ईमेल, कार्यालय समय एवं संपर्क फॉर्म।"
      />

      {/* Header Banner */}
      <section className="relative overflow-hidden text-white pt-24 pb-16 sm:pt-32 sm:pb-24 bg-[#241B15] select-none">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBgImg}
            alt="श्री निःशुल्क गुरुकुल महाविद्यालय संपर्क"
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
            <span>हमसे संपर्क करें</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-3 drop-shadow-md">
            संपर्क सूत्र (Contact Us)
          </h1>
          <p className="text-sm sm:text-base text-[#F8F4EA]/90 max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-medium">
            प्रवेश पूछताछ, गुरुकुल भ्रमण अथवा दान-सहयोग हेतु सीधे हमसे संपर्क करें
          </p>
        </Container>
      </section>

      {/* Contact Grid */}
      <section className="py-20 bg-gurukul-cream-100/70">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <ContactCard />
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Media Coverage & Social Channels */}
      <MediaCoverageSection />

      {/* Map Embed */}
      <MapEmbed />
    </>
  );
};

export default Contact;
