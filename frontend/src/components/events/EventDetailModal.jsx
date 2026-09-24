import React from 'react';
import Modal from '../common/Modal';
import { Calendar, MapPin, Clock, User, Share2 } from 'lucide-react';
import Button from '../common/Button';
import { useLanguage } from '../../context/LanguageContext';

export const EventDetailModal = ({ event, isOpen, onClose }) => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  if (!event) return null;

  const title = isEn ? (event.title_en || event.title) : event.title;
  const category = isEn ? (event.category_en || event.category) : event.category;
  const date = isEn ? (event.date_en || event.date) : event.date;
  const location = isEn ? (event.location_en || event.location) : event.location;
  const description = isEn ? (event.description_en || event.description) : event.description;
  const chiefGuest = isEn ? (event.chiefGuest_en || event.chiefGuest) : event.chiefGuest;
  const schedule = isEn ? (event.schedule_en || event.schedule) : event.schedule;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} maxWidth="max-w-2xl">
      <div className="space-y-5">
        <div className="rounded-xl overflow-hidden aspect-[16/9] shadow-md">
          <img
            src={event.image}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="px-3 py-1 rounded-full bg-gurukul-maroon text-amber-200 font-bold">
            {category}
          </span>
          <span className="px-3 py-1 rounded-full bg-orange-100 text-gurukul-saffron-800 font-semibold flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-gurukul-saffron" />
            {date}
          </span>
          <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-gurukul-maroon" />
            {location}
          </span>
        </div>

        <div className="text-sm text-gray-700 leading-relaxed space-y-3">
          <p>{description}</p>
          
          <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-100 space-y-2 text-xs text-gray-800">
            {chiefGuest && (
              <div className="flex items-start gap-2">
                <User className="w-4 h-4 text-gurukul-saffron flex-shrink-0 mt-0.5" />
                <span><strong>{isEn ? 'Chief Guest / Speaker:' : 'मुख्य अतिथि / वक्ता:'}</strong> {chiefGuest}</span>
              </div>
            )}
            {schedule && (
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gurukul-saffron flex-shrink-0 mt-0.5" />
                <span><strong>{isEn ? 'Timings & Order of Events:' : 'समय एवं कार्यक्रम क्रम:'}</strong> {schedule}</span>
              </div>
            )}
          </div>
        </div>

        <div className="pt-3 flex justify-end gap-3 border-t border-orange-100">
          <Button variant="outline" size="sm" onClick={onClose}>
            {isEn ? 'Close' : 'बंद करें'}
          </Button>
          <Button to="/contact" variant="primary" size="sm">
            {isEn ? 'Directions & Contact' : 'स्थान व संपर्क जानकारी'}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EventDetailModal;
