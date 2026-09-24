import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = 'max-w-2xl',
}) => {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#241B15]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        className={`relative bg-white rounded-none shadow-2xl border-2 border-[#C68A32]/40 w-full ${maxWidth} z-10 overflow-hidden transform transition-all animate-fadeIn`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-[#C68A32]/30 bg-[#241B15] text-[#F8F4EA]">
          <h3 id="modal-title" className="text-base sm:text-xl font-bold font-serif text-[#C68A32] line-clamp-1 pr-2">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-none text-[#F8F4EA] hover:text-[#C68A32] hover:bg-white/10 transition-colors shrink-0"
            aria-label="बंद करें"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto bg-[#F8F4EA] text-[#241B15]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
