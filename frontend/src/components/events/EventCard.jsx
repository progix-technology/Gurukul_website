import React from 'react';
import { Calendar, MapPin, ArrowRight, User } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

export const EventCard = ({ event, onOpenDetails }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-orange-100 shadow-vedic-card hover:shadow-vedic hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Event Banner */}
        <div className="relative aspect-[16/10] overflow-hidden bg-orange-50">
          <ImageWithFallback
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-gurukul-maroon text-amber-200 shadow-md">
              {event.category}
            </span>
          </div>
          {event.badge && (
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-400 text-gray-900 shadow">
                {event.badge}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-xs font-bold text-gurukul-saffron-800 mb-2">
            <Calendar className="w-3.5 h-3.5 text-gurukul-saffron" />
            <span>{event.date}</span>
          </div>

          <h3 className="font-serif font-bold text-lg sm:text-xl text-gray-900 mb-2 group-hover:text-gurukul-saffron transition-colors line-clamp-2">
            {event.title}
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed mb-4">
            {event.description}
          </p>

          <div className="space-y-1 text-xs text-gray-500 border-t border-orange-50 pt-3">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gurukul-maroon flex-shrink-0" />
              <span className="truncate">{event.location}</span>
            </div>
            {event.chiefGuest && (
              <div className="flex items-center gap-1.5 text-gray-700 font-medium">
                <User className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                <span className="truncate">अतिथि: {event.chiefGuest}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <button
          type="button"
          onClick={() => onOpenDetails(event)}
          className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-gurukul-saffron bg-orange-50/60 hover:bg-gurukul-saffron hover:text-white border border-orange-200 transition-all flex items-center justify-center gap-1.5"
        >
          <span>पूर्ण विवरण एवं रूपरेखा</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default EventCard;
