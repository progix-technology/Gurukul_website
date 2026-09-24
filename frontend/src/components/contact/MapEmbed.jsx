import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import Container from '../common/Container';

export const MapEmbed = () => {
  return (
    <section className="py-12 bg-white border-t border-orange-100">
      <Container>
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-6 sm:p-8 border border-orange-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gurukul-maroon text-amber-200 flex items-center justify-center shadow">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-gray-900">
                  गूगल मानचित्र स्थिति (Google Map Location)
                </h3>
                <p className="text-xs text-gray-600">
                  श्री निःशुल्क गुरुकुल महाविद्यालय, 5/5/13 जालपा लाला, जालपा मंदिर के सामने, अयोध्या - 224123
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Shri+Nisshukla+Gurukul+Mahavidhyalaya+Ayodhya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-gurukul-saffron text-white hover:bg-gurukul-saffron-700 transition-colors shadow-sm"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>मानचित्र दिशा-निर्देश देखें</span>
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-orange-200 shadow-inner bg-gray-100">
            <iframe
              title="श्री निःशुल्क गुरुकुल महाविद्यालय अयोध्या गूगल मैप"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1780.9129587069513!2d82.1793697!3d26.7818185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07cfd285ac6f%3A0xad3d6ba746ba6263!2sShri%20Nisshukla%20Gurukul%20Mahavidhyalaya!5e0!3m2!1sen!2sin!4v1616065889966!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MapEmbed;
