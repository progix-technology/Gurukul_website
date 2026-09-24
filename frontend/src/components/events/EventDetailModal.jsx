import React from 'react';
import Modal from '../common/Modal';
import { Calendar, MapPin, Clock, User, Share2 } from 'lucide-react';
import Button from '../common/Button';

export const EventDetailModal = ({ event, isOpen, onClose }) => {
  if (!event) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={event.title} maxWidth="max-w-2xl">
      <div className="space-y-5">
        <div className="rounded-xl overflow-hidden aspect-[16/9] shadow-md">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="px-3 py-1 rounded-full bg-gurukul-maroon text-amber-200 font-bold">
            {event.category}
          </span>
          <span className="px-3 py-1 rounded-full bg-orange-100 text-gurukul-saffron-800 font-semibold flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-gurukul-saffron" />
            {event.date}
          </span>
          <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-gurukul-maroon" />
            {event.location}
          </span>
        </div>

        <div className="text-sm text-gray-700 leading-relaxed space-y-3">
          <p>{event.description}</p>
          
          <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-100 space-y-2 text-xs text-gray-800">
            {event.chiefGuest && (
              <div className="flex items-start gap-2">
                <User className="w-4 h-4 text-gurukul-saffron flex-shrink-0 mt-0.5" />
                <span><strong>मुख्य अतिथि / वक्ता:</strong> {event.chiefGuest}</span>
              </div>
            )}
            {event.schedule && (
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gurukul-saffron flex-shrink-0 mt-0.5" />
                <span><strong>समय एवं कार्यक्रम क्रम:</strong> {event.schedule}</span>
              </div>
            )}
          </div>
        </div>

        <div className="pt-3 flex justify-end gap-3 border-t border-orange-100">
          <Button variant="outline" size="sm" onClick={onClose}>
            बंद करें
          </Button>
          <Button to="/contact" variant="primary" size="sm">
            स्थान व संपर्क जानकारी
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EventDetailModal;
