import React from 'react';
import { AlertCircle, RotateCcw } from 'lucide-react';
import Button from './Button';

export const ErrorState = ({
  title = 'कुछ समस्या हुई है',
  message = 'क्षमा करें, इस समय यह जानकारी उपलब्ध नहीं हो पा रही है।',
  onRetry,
  retryText = 'पुनः प्रयास करें',
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-8 text-center bg-red-50/50 rounded-2xl border border-red-200/80 my-4 ${className}`}
      role="alert"
    >
      <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-4 shadow-sm">
        <AlertCircle className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold font-serif text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 max-w-md mb-6 leading-relaxed">
        {message}
      </p>
      {onRetry && (
        <Button
          variant="outline"
          size="md"
          onClick={onRetry}
          icon={RotateCcw}
        >
          {retryText}
        </Button>
      )}
    </div>
  );
};

export default ErrorState;
