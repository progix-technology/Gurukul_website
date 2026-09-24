import React from 'react';
import { BookOpen, GraduationCap, ArrowRight, CheckCircle, Clock } from 'lucide-react';
import Button from '../common/Button';

export const CourseCard = ({ course, onOpenDetails }) => {
  return (
    <div
      id={course.id}
      className="bg-white rounded-2xl border border-orange-100 p-6 sm:p-7 shadow-vedic-card hover:shadow-vedic hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-gurukul-saffron-800 border border-orange-200">
            अवधि: {course.duration}
          </span>
          <span className="text-xs font-semibold text-gray-500">
            {course.board.split(',')[0]}
          </span>
        </div>

        {/* Course Title */}
        <h3 className="font-serif font-bold text-xl text-gray-900 mb-1 group-hover:text-gurukul-saffron transition-colors">
          {course.title}
        </h3>

        <p className="text-xs font-bold text-gurukul-maroon mb-3">
          {course.level}
        </p>

        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {course.description}
        </p>

        {/* Eligibility Pill */}
        <div className="p-3 rounded-xl bg-gurukul-cream-200 border border-orange-100/80 text-xs text-gray-700 mb-4">
          <span className="font-bold text-gray-900 block mb-0.5">पात्रता:</span>
          <span>{course.eligibility}</span>
        </div>

        {/* Subjects Preview */}
        <div className="space-y-1.5 pt-2">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
            मुख्य विषय
          </h4>
          <div className="space-y-1">
            {course.subjects.slice(0, 3).map((sub, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                <CheckCircle className="w-3.5 h-3.5 text-gurukul-saffron flex-shrink-0" />
                <span className="truncate">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-6 border-t border-orange-100 mt-6 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onOpenDetails(course)}
          className="text-xs font-bold text-gurukul-saffron hover:text-gurukul-saffron-700 flex items-center gap-1 transition-colors"
        >
          <span>पूर्ण विवरण</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>

        <Button
          to="/admission"
          variant="primary"
          size="sm"
        >
          प्रवेश लें
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
