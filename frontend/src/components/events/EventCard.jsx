import React from 'react';
import { Calendar, MapPin, ArrowRight, User } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';
import { useLanguage } from '../../context/LanguageContext';

export const EventCard = ({ event, onOpenDetails }) => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const title = isEn ? (event.title_en || event.title) : event.title;
  const date = isEn ? (event.date_en || event.date) : event.date;
  const category = isEn ? (event.category_en || event.category) : event.category;
  const badge = isEn ? (event.badge_en || event.badge) : event.badge;
  const description = isEn ? (event.description_en || event.description) : event.description;
  const location = isEn ? (event.location_en || event.location) : event.location;
  const chiefGuest = isEn ? (event.chiefGuest_en || event.chiefGuest) : event.chiefGuest;

  return (
    <div className="bg-white rounded-none border border-[#C68A32]/40 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Event Banner */}
        <div className="relative aspect-[16/10] overflow-hidden bg-orange-50">
          <ImageWithFallback
            src={event.image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 rounded-none text-xs font-bold bg-[#241B15] text-[#FFCD33] shadow-md border border-[#C68A32]/40">
              {category}
            </span>
          </div>
          {badge && (
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-0.5 rounded-none text-[11px] font-semibold bg-[#FFCD33] text-gray-900 shadow">
                {badge}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-xs font-bold text-[#C96B25] mb-2">
            <Calendar className="w-3.5 h-3.5 text-[#C96B25]" />
            <span>{date}</span>
          </div>

          <h3 className="font-serif font-bold text-lg sm:text-xl text-[#241B15] mb-2 group-hover:text-[#C96B25] transition-colors line-clamp-2">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed mb-4">
            {description}
          </p>

          <div className="space-y-1 text-xs text-gray-500 border-t border-[#C68A32]/20 pt-3">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C96B25] flex-shrink-0" />
              <span className="truncate">{location}</span>
            </div>
            {chiefGuest && (
              <div className="flex items-center gap-1.5 text-gray-700 font-medium">
                <User className="w-3.5 h-3.5 text-[#C68A32] flex-shrink-0" />
                <span className="truncate">{isEn ? 'Guest: ' : 'अतिथि: '}{chiefGuest}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <button
          type="button"
          onClick={() => onOpenDetails(event)}
          className="w-full py-2.5 px-4 rounded-none text-xs font-bold text-[#C96B25] bg-[#F8F4EA] hover:bg-[#C96B25] hover:text-white border border-[#C68A32]/40 transition-all flex items-center justify-center gap-1.5"
        >
          <span>{isEn ? 'Full Event Details' : 'पूर्ण विवरण एवं रूपरेखा'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default EventCard;

