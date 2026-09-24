import React from 'react';
import { BookOpen, GraduationCap, ArrowRight, CheckCircle, Clock } from 'lucide-react';
import Button from '../common/Button';
import { useLanguage } from '../../context/LanguageContext';

export const CourseCard = ({ course, onOpenDetails }) => {
  const { language, t } = useLanguage();
  const isEn = language === 'en';

  const title = isEn ? (course.title_en || course.title) : course.title;
  const level = isEn ? (course.level_en || course.level) : course.level;
  const duration = isEn ? (course.duration_en || course.duration) : course.duration;
  const description = isEn ? (course.description_en || course.description) : course.description;
  const eligibility = isEn ? (course.eligibility_en || course.eligibility) : course.eligibility;
  const board = isEn ? (course.board_en || course.board) : course.board;
  const subjects = isEn && course.subjects_en ? course.subjects_en : course.subjects;

  return (
    <div
      id={course.id}
      className="bg-white rounded-none border border-[#C68A32]/40 p-6 sm:p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-3 py-1 rounded-none text-xs font-bold bg-[#F8F4EA] text-[#C96B25] border border-[#C68A32]/40">
            {isEn ? 'Duration: ' : 'अवधि: '} {duration}
          </span>
          <span className="text-xs font-semibold text-gray-500">
            {board.split(',')[0]}
          </span>
        </div>

        {/* Course Title */}
        <h3 className="font-serif font-bold text-xl text-[#241B15] mb-1 group-hover:text-[#C96B25] transition-colors">
          {title}
        </h3>

        <p className="text-xs font-bold text-[#8B4513] mb-3">
          {level}
        </p>

        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Eligibility Pill */}
        <div className="p-3 rounded-none bg-[#F8F4EA] border border-[#C68A32]/30 text-xs text-gray-700 mb-4">
          <span className="font-bold text-[#241B15] block mb-0.5">
            {isEn ? 'Eligibility:' : 'पात्रता:'}
          </span>
          <span>{eligibility}</span>
        </div>

        {/* Subjects Preview */}
        <div className="space-y-1.5 pt-2">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
            {isEn ? 'Core Curriculum' : 'मुख्य विषय'}
          </h4>
          <div className="space-y-1">
            {subjects.slice(0, 3).map((sub, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                <CheckCircle className="w-3.5 h-3.5 text-[#C96B25] flex-shrink-0" />
                <span className="truncate">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-6 border-t border-[#C68A32]/20 mt-6 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onOpenDetails(course)}
          className="text-xs font-bold text-[#C96B25] hover:text-[#8B4513] flex items-center gap-1 transition-colors"
        >
          <span>{isEn ? 'Full Details' : 'पूर्ण विवरण'}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>

        <Button
          to="/admission"
          variant="primary"
          size="sm"
          className="rounded-none font-bold"
        >
          {isEn ? 'Apply Now' : 'प्रवेश लें'}
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;

