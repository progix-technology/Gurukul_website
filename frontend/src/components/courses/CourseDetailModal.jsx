import React from 'react';
import Modal from '../common/Modal';
import { BookOpen, CheckCircle, Award, Clock, UserCheck } from 'lucide-react';
import Button from '../common/Button';

export const CourseDetailModal = ({ course, isOpen, onClose }) => {
  if (!course) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={course.title} maxWidth="max-w-3xl">
      <div className="space-y-6">
        {/* Header Tags */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-gurukul-saffron-800 border border-orange-200">
            अवधि: {course.duration}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-200">
            {course.level}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-900 border border-emerald-200">
            पूर्णतः निःशुल्क
          </span>
        </div>

        {/* Description */}
        <div>
          <h4 className="font-serif font-bold text-base text-gray-900 mb-1">
            पाठ्यक्रम विवरण
          </h4>
          <p className="text-sm text-gray-700 leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* Eligibility & Age */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-orange-50/70 border border-orange-100 text-xs text-gray-800">
          <div>
            <span className="font-bold block text-gurukul-maroon mb-0.5">शैक्षणिक पात्रता:</span>
            <span>{course.eligibility}</span>
          </div>
          <div>
            <span className="font-bold block text-gurukul-maroon mb-0.5">आयु सीमा:</span>
            <span>{course.ageLimit}</span>
          </div>
        </div>

        {/* Subjects List */}
        <div>
          <h4 className="font-serif font-bold text-base text-gray-900 mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-gurukul-saffron" />
            <span>अध्ययन किए जाने वाले मुख्य विषय</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {course.subjects.map((sub, idx) => (
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
            <span>विशेषताएँ एवं लाभ</span>
          </h4>
          <ul className="space-y-1.5 text-xs text-gray-700">
            {course.features.map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gurukul-saffron" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Examination Board */}
        <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-center justify-between">
          <span className="font-bold">संबद्ध परीक्षा बोर्ड:</span>
          <span>{course.board}</span>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex justify-end gap-3">
          <Button variant="outline" size="sm" onClick={onClose}>
            बंद करें
          </Button>
          <Button to="/admission" variant="primary" size="sm">
            प्रवेश के लिए आवेदन करें
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CourseDetailModal;
