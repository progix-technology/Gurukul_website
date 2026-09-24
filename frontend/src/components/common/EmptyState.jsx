import React from 'react';
import { Inbox } from 'lucide-react';

export const EmptyState = ({
  title = 'कोई जानकारी उपलब्ध नहीं है',
  message = 'इस श्रेणी में वर्तमान में कोई सामग्री उपलब्ध नहीं है। कृपया बाद में देखें।',
  icon: Icon = Inbox,
  action,
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-12 text-center bg-orange-50/30 rounded-2xl border border-dashed border-orange-200 my-6 ${className}`}
    >
      <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-gurukul-saffron mb-4 shadow-sm">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold font-serif text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-500 max-w-md mb-6 leading-relaxed">
        {message}
      </p>
      {action && <div>{action}</div>}
    </div>
  );
};

export default EmptyState;
