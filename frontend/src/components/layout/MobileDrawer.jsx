import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X, Phone, Mail, MapPin, GraduationCap } from 'lucide-react';
import { NAV_LINKS } from '../../constants/navigation';
import { INSTITUTION_INFO } from '../../data/institutionalData';
import Button from '../common/Button';

export const MobileDrawer = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="मोबाइल नेविगेशन मेन्यू"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#241B15]/80 backdrop-blur-sm transition-opacity animate-fadeIn"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#F8F4EA] shadow-2xl flex flex-col z-10 transform transition-transform duration-300 ease-in-out border-l border-[#C68A32]/30">
        {/* Header inside drawer */}
        <div className="p-4 bg-[#241B15] text-[#F8F4EA] flex items-center justify-between border-b border-[#C68A32]/40">
          <div className="flex items-center gap-2">
            {/* Clean Om Symbol without box */}
            <span className="text-[#E5832E] font-serif text-3xl font-extrabold select-none leading-none">
              ॐ
            </span>
            <div>
              <h3 className="font-serif font-bold text-sm text-[#C68A32] leading-tight">
                गुरुकुल अयोध्या
              </h3>
              <p className="text-[10px] text-[#F8F4EA]/80">
                स्थापना सन् 1925 ई०
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-none text-[#F8F4EA] hover:text-[#C68A32] hover:bg-white/10 transition-colors"
            aria-label="मेन्यू बंद करें"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={onClose}
              end={link.path === '/'}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 rounded-none text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#241B15] text-[#C68A32] border-l-4 border-[#E5832E] font-bold'
                    : 'text-[#241B15] hover:bg-[#EADEC3] hover:text-[#E5832E]'
                }`
              }
            >
              <span>{link.label}</span>
            </NavLink>
          ))}

          {/* Quick Admission CTA */}
          <div className="pt-4 px-2">
            <Button
              to="/admission"
              variant="primary"
              size="md"
              className="w-full shadow-sm rounded-none"
              icon={GraduationCap}
              onClick={onClose}
            >
              निःशुल्क प्रवेश लें
            </Button>
          </div>
        </div>

        {/* Footer Contact Info */}
        <div className="p-4 bg-[#EADEC3]/70 border-t border-[#C68A32]/30 text-xs text-[#241B15] space-y-2.5">
          <a
            href={`tel:${INSTITUTION_INFO.contact.primaryPhone}`}
            className="flex items-center gap-2 text-[#E5832E] font-bold"
          >
            <Phone className="w-3.5 h-3.5 text-[#E5832E]" />
            <span>{INSTITUTION_INFO.contact.phones[0]}</span>
          </a>

          <a
            href={`mailto:${INSTITUTION_INFO.contact.email}`}
            className="flex items-center gap-2 text-gray-700 truncate"
          >
            <Mail className="w-3.5 h-3.5 text-[#E5832E]" />
            <span className="truncate">{INSTITUTION_INFO.contact.email}</span>
          </a>

          <div className="flex items-start gap-2 text-gray-700 text-[11px] leading-tight pt-1">
            <MapPin className="w-3.5 h-3.5 text-[#E5832E] flex-shrink-0 mt-0.5" />
            <span>जालपा मंदिर के सामने, अयोध्या - 224123</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
