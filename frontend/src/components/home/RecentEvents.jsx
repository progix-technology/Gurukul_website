import React, { useState } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import ImageWithFallback from '../common/ImageWithFallback';
import Modal from '../common/Modal';
import { EVENTS_DATA } from '../../data/eventsData';

export const RecentEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const events = EVENTS_DATA.slice(0, 3);

  return (
    <section className="py-20 bg-[#F2EBDA] border-b border-[#C68A32]/30">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          <SectionHeading
            badge="कार्यक्रम एवं समाचार"
            title="नवीनतम गतिविधियां व वार्षिकोत्सव"
            subtitle="गुरुकुल में आयोजित होने वाले प्रमुख धार्मिक, सांस्कृतिक एवं राष्ट्रीय पर्व"
            align="left"
            className="mb-0"
          />

          <Button
            to="/events"
            variant="outline"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
          >
            सभी कार्यक्रम देखें
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-none overflow-hidden border border-[#C68A32]/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Event Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#241B15]">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-none text-xs font-bold bg-[#241B15] text-[#C68A32] border border-[#C68A32]/40 shadow">
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#C96B25] mb-2">
                    <Calendar className="w-3.5 h-3.5 text-[#C96B25]" />
                    <span>{event.date}</span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#241B15] mb-2 group-hover:text-[#C96B25] transition-colors line-clamp-2">
                    {event.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#241B15]/80 line-clamp-3 leading-relaxed mb-4">
                    {event.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-gray-600 border-t border-[#C68A32]/20 pt-3">
                    <MapPin className="w-3.5 h-3.5 text-[#C96B25] flex-shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedEvent(event)}
                  className="w-full py-2.5 px-4 rounded-none text-xs font-serif font-bold text-[#C96B25] hover:bg-[#C96B25] hover:text-white border border-[#C96B25] transition-all flex items-center justify-center gap-1.5"
                >
                  <span>विस्तृत विवरण पढ़ें</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Event Details Modal */}
      {selectedEvent && (
        <Modal
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          title={selectedEvent.title}
        >
          <div className="space-y-4">
            <div className="rounded-none overflow-hidden aspect-[16/9]">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                loading="lazy"
                className="w-full h-full object-cover rounded-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="px-3 py-1 rounded-none bg-[#241B15] text-[#C68A32] font-semibold">
                {selectedEvent.category}
              </span>
              <span className="flex items-center gap-1 text-[#241B15]">
                <Calendar className="w-3.5 h-3.5 text-[#C96B25]" />
                {selectedEvent.date}
              </span>
              <span className="flex items-center gap-1 text-[#241B15]">
                <MapPin className="w-3.5 h-3.5 text-[#C96B25]" />
                {selectedEvent.location}
              </span>
            </div>

            <div className="text-sm text-[#241B15]/90 leading-relaxed space-y-2">
              <p>{selectedEvent.description}</p>
              {selectedEvent.chiefGuest && (
                <p className="font-semibold text-[#241B15] pt-2">
                  मुख्य अतिथि: <span className="font-normal">{selectedEvent.chiefGuest}</span>
                </p>
              )}
              {selectedEvent.schedule && (
                <p className="font-semibold text-[#241B15]">
                  समय: <span className="font-normal">{selectedEvent.schedule}</span>
                </p>
              )}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default RecentEvents;
