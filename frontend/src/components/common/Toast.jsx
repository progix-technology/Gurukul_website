import React from 'react';
import { CheckCircle2, AlertCircle, AlertTriangle, Info, X } from 'lucide-react';

const ICONS = {
  success: CheckCircle2,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

const STYLES = {
  success: 'bg-emerald-50 border-emerald-300 text-emerald-900',
  error: 'bg-red-50 border-red-300 text-red-900',
  warning: 'bg-amber-50 border-amber-300 text-amber-900',
  info: 'bg-orange-50 border-orange-300 text-orange-900',
};

const ICON_COLORS = {
  success: 'text-emerald-600',
  error: 'text-red-600',
  warning: 'text-amber-600',
  info: 'text-gurukul-saffron',
};

export const Toast = ({ toasts = [], onDismiss }) => {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-md w-full px-4 sm:px-0 pointer-events-none"
      role="region"
      aria-label="सूचना संदेश"
    >
      {toasts.map((toast) => {
        const IconComponent = ICONS[toast.type] || Info;
        const styleClass = STYLES[toast.type] || STYLES.info;
        const iconColor = ICON_COLORS[toast.type] || ICON_COLORS.info;

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-lg transition-all duration-300 transform translate-y-0 animate-fadeIn ${styleClass}`}
            role="alert"
          >
            <IconComponent className={`w-5 h-5 flex-shrink-0 mt-0.5 ${iconColor}`} />
            <div className="flex-1 text-sm font-medium leading-relaxed">
              {toast.message}
            </div>
            {onDismiss && (
              <button
                onClick={() => onDismiss(toast.id)}
                className="p-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-black/5 transition-colors"
                aria-label="बंद करें"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Toast;
