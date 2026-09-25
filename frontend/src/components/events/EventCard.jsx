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

export const EventCardSkeleton = () => {
  return (
    <div className="bg-white rounded-none border border-[#C68A32]/40 shadow-sm flex flex-col justify-between animate-pulse select-none">
      <div>
        {/* Top Image Banner Skeleton */}
        <div className="relative aspect-[16/10] bg-[#F8F5EE] border-b border-[#EFE9DC] flex items-center justify-center overflow-hidden">
          <svg
            className="w-10 h-10 text-[#DCD4C4]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.175 2.899 1.35-1.8a1 1 0 0 1 1.622-.056l3.5 4.5a1 1 0 0 1 .129.938Z" />
          </svg>
          <div className="absolute top-3 right-3 h-5 w-20 bg-[#E8DFC8]/70" />
          <div className="absolute top-3 left-3 h-4 w-16 bg-[#E8DFC8]/50" />
        </div>

        {/* Card Content Skeleton */}
        <div className="p-6">
          {/* Date row */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3.5 h-3.5 bg-[#E8DFC8] rounded-sm flex-shrink-0" />
            <div className="h-3.5 bg-[#EDE5D6] w-28 rounded-sm" />
          </div>

          {/* Title lines */}
          <div className="h-5 bg-[#E2D8C3] w-5/6 mb-2 rounded-sm" />
          <div className="h-5 bg-[#E2D8C3] w-3/5 mb-4 rounded-sm" />

          {/* Description lines */}
          <div className="space-y-2 mb-5">
            <div className="h-3 bg-[#EDE5D6] w-full rounded-sm" />
            <div className="h-3 bg-[#EDE5D6] w-11/12 rounded-sm" />
            <div className="h-3 bg-[#EDE5D6] w-3/4 rounded-sm" />
          </div>

          {/* Location & Chief Guest Info */}
          <div className="pt-3 border-t border-[#C68A32]/20 space-y-2.5">
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 bg-[#E8DFC8] rounded-full flex-shrink-0" />
              <div className="h-3 bg-[#EDE5D6] w-1/2 rounded-sm" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 bg-[#E8DFC8] rounded-full flex-shrink-0" />
              <div className="h-3 bg-[#EDE5D6] w-2/3 rounded-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Button Skeleton */}
      <div className="p-6 pt-0">
        <div className="w-full h-9 bg-[#F4EFE5] border border-[#E5DAC8] rounded-none flex items-center justify-center">
          <div className="h-3 bg-[#DCD4C4] w-32 rounded-sm" />
        </div>
      </div>
    </div>
  );
};

export default EventCard;


