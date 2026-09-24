import React from 'react';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { INSTITUTION_INFO } from '../../data/institutionalData';

export const ContactCard = () => {
  const { contact } = INSTITUTION_INFO;

  return (
    <div className="bg-gradient-to-br from-gurukul-maroon via-gurukul-maroon-900 to-gurukul-dark-900 text-white rounded-3xl p-8 shadow-xl space-y-6 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div>
        <span className="px-3 py-1 rounded-full bg-white/15 text-amber-300 text-xs font-bold uppercase tracking-wider inline-block mb-3 border border-white/20">
          सीधा संपर्क सूत्र
        </span>
        <h3 className="font-serif font-bold text-2xl text-white">
          गुरुकुल संपर्क केंद्र
        </h3>
        <p className="text-xs sm:text-sm text-orange-200/90 mt-1">
          किसी भी प्रकार की जानकारी, प्रवेश सहायता अथवा दान-सहयोग हेतु संपर्क करें।
        </p>
      </div>

      <div className="space-y-4 text-sm">
        {/* Address */}
        <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
          <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-amber-300 text-xs uppercase tracking-wider mb-0.5">
              कार्यालय पता
            </h4>
            <p className="text-gray-200 text-xs leading-relaxed">
              {contact.address}
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
          <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-amber-300 text-xs uppercase tracking-wider mb-0.5">
              दूरभाष / मोबाइल
            </h4>
            <div className="flex flex-col gap-1 text-xs">
              <a href={`tel:${contact.primaryPhone}`} className="hover:text-amber-300 font-semibold">
                {contact.phones[0]} (कार्यालय)
              </a>
              <a href={`tel:${contact.whatsappPhone}`} className="hover:text-amber-300 font-semibold">
                {contact.phones[1]} (व्हाट्सएप हेल्पलाइन)
              </a>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
          <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-amber-300 text-xs uppercase tracking-wider mb-0.5">
              ईमेल संपर्क
            </h4>
            <a href={`mailto:${contact.email}`} className="hover:text-amber-300 text-xs break-all">
              {contact.email}
            </a>
          </div>
        </div>

        {/* Office Hours */}
        <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
          <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-amber-300 text-xs uppercase tracking-wider mb-0.5">
              कार्यालय समय
            </h4>
            <p className="text-gray-200 text-xs">
              {contact.officeHours}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
