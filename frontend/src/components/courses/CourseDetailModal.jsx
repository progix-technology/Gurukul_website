import React from 'react';
import Modal from '../common/Modal';
import { BookOpen, CheckCircle, Award, Clock, UserCheck } from 'lucide-react';
import Button from '../common/Button';
import { useLanguage } from '../../context/LanguageContext';

export const CourseDetailModal = ({ course, isOpen, onClose }) => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  if (!course) return null;

  const title = isEn ? (course.title_en || course.title) : course.title;
  const level = isEn ? (course.level_en || course.level) : course.level;
  const duration = isEn ? (course.duration_en || course.duration) : course.duration;
  const description = isEn ? (course.description_en || course.description) : course.description;
  const eligibility = isEn ? (course.eligibility_en || course.eligibility) : course.eligibility;
  const ageLimit = isEn ? (course.ageLimit_en || course.ageLimit) : course.ageLimit;
  const board = isEn ? (course.board_en || course.board) : course.board;
  const subjects = isEn && course.subjects_en ? course.subjects_en : course.subjects;
  const features = isEn && course.features_en ? course.features_en : course.features;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} maxWidth="max-w-3xl">
      <div className="space-y-6">
        {/* Header Tags */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-gurukul-saffron-800 border border-orange-200">
            {isEn ? 'Duration: ' : 'अवधि: '} {duration}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-200">
            {level}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-900 border border-emerald-200">
            {isEn ? '100% Free Education' : 'पूर्णतः निःशुल्क'}
          </span>
        </div>

        {/* Description */}
        <div>
          <h4 className="font-serif font-bold text-base text-gray-900 mb-1">
            {isEn ? 'Course Description' : 'पाठ्यक्रम विवरण'}
          </h4>
          <p className="text-sm text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Eligibility & Age */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-orange-50/70 border border-orange-100 text-xs text-gray-800">
          <div>
            <span className="font-bold block text-gurukul-maroon mb-0.5">
              {isEn ? 'Academic Eligibility:' : 'शैक्षणिक पात्रता:'}
            </span>
            <span>{eligibility}</span>
          </div>
          <div>
            <span className="font-bold block text-gurukul-maroon mb-0.5">
              {isEn ? 'Age Limit:' : 'आयु सीमा:'}
            </span>
            <span>{ageLimit}</span>
          </div>
        </div>

        {/* Subjects List */}
        <div>
          <h4 className="font-serif font-bold text-base text-gray-900 mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-gurukul-saffron" />
            <span>{isEn ? 'Core Subjects Covered' : 'अध्ययन किए जाने वाले मुख्य विषय'}</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {subjects.map((sub, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 p-2.5 rounded-lg bg-white border border-gray-100 text-xs text-gray-700 shadow-sm"
              >
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Special Features */}
        <div>
          <h4 className="font-serif font-bold text-base text-gray-900 mb-2 flex items-center gap-2">
            <Award className="w-4 h-4 text-gurukul-maroon" />
            <span>{isEn ? 'Key Features & Benefits' : 'विशेषताएँ एवं लाभ'}</span>
          </h4>
          <ul className="space-y-1.5 text-xs text-gray-700">
            {features.map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gurukul-saffron" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Examination Board */}
        <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-center justify-between">
          <span className="font-bold">{isEn ? 'Affiliated Board / University:' : 'संबद्ध परीक्षा बोर्ड:'}</span>
          <span>{board}</span>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex justify-end gap-3">
          <Button variant="outline" size="sm" onClick={onClose}>
            {isEn ? 'Close' : 'बंद करें'}
          </Button>
          <Button to="/admission" variant="primary" size="sm">
            {isEn ? 'Apply for Admission' : 'प्रवेश के लिए आवेदन करें'}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CourseDetailModal;
