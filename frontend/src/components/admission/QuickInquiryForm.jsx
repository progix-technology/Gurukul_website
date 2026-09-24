import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import Button from '../common/Button';
import { validateAdmissionForm } from '../../utils/validation';
import { admissionService } from '../../services/admissionService';
import { useToast } from '../../hooks/useToast';
import { COURSES_DATA } from '../../data/coursesData';
import { useLanguage } from '../../context/LanguageContext';

export const QuickInquiryForm = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const { showSuccess, showError } = useToast();

  const [formData, setFormData] = useState({
    studentName: '',
    guardianName: '',
    phone: '',
    course: '',
    city: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [rateLimitNotice, setRateLimitNotice] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRateLimitNotice(null);
    const validationErrors = validateAdmissionForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      showError(isEn ? 'Please fill in all mandatory fields correctly.' : 'कृपया फॉर्म में आवश्यक जानकारियाँ सही ढंग से भरें।');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await admissionService.submitInquiry(formData);
      setIsSuccess(true);
      showSuccess(res.message || (isEn ? 'Your admission inquiry has been submitted successfully.' : 'आपकी प्रवेश पूछताछ सफलतापूर्वक प्राप्त हो गई है।'));
      setFormData({
        studentName: '',
        guardianName: '',
        phone: '',
        course: '',
        city: '',
        message: '',
      });
      setErrors({});
      setRateLimitNotice(null);
    } catch (err) {
      if (err.isRateLimit || err.status === 429) {
        setRateLimitNotice(err.message);
        showError(err.message || (isEn ? 'Request limit exceeded. Please wait a moment.' : 'अनुरोध सीमा पार हो गई है। कृपया कुछ देर प्रतीक्षा करें।'));
      } else {
        showError(err.message || (isEn ? 'Error submitting inquiry. Please try again.' : 'पूछताछ दर्ज करने में कुछ बाधा आई। कृपया पुनः प्रयास करें।'));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="inquiry" className="py-16 bg-[#F8F4EA] border-t border-[#C68A32]/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-none border border-[#C68A32]/40 p-5 sm:p-8 lg:p-10 shadow-sm">
          <div className="text-center mb-8">
            <span className="px-3.5 py-1 rounded-none bg-[#241B15] text-[#C68A32] text-xs font-bold uppercase tracking-wider inline-block mb-2">
              {isEn ? "ONLINE ADMISSION INQUIRY" : "ऑनलाइन पंजीकरण / पूछताछ"}
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#241B15]">
              {isEn ? "Admission Inquiry Form" : "प्रवेश पूछताछ फॉर्म (Admission Inquiry)"}
            </h3>
            <p className="text-xs sm:text-sm text-[#241B15]/80 mt-2">
              {isEn 
                ? "Please fill out the details below. Our admission coordinator will contact you promptly."
                : "कृपया नीचे दिया गया विवरण भरें, गुरुकुल प्रवेश समिति आपसे यथाशीघ्र संपर्क करेगी।"
              }
            </p>
          </div>

          {rateLimitNotice && (
            <div className="p-4 rounded-none bg-amber-50 border border-amber-300 text-amber-900 text-xs sm:text-sm flex items-center gap-3 mb-6 animate-fadeIn">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span>{rateLimitNotice}</span>
            </div>
          )}

          {isSuccess && (
            <div className="p-4 rounded-none bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs sm:text-sm flex items-center gap-3 mb-6 animate-fadeIn">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>
                {isEn 
                  ? "Your admission inquiry has been sent successfully. The committee will contact you soon."
                  : "आपकी प्रवेश पूछताछ सफलतापूर्वक भेज दी गई है। प्रवेश समिति शीघ्र संपर्क करेगी।"
                }
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Student Name */}
              <div>
                <label className="block text-xs font-bold text-[#241B15] mb-1">
                  {isEn ? "Student's Full Name" : "छात्र का नाम"} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder={isEn ? "e.g. Amit Sharma" : "उदा. अमित कुमार"}
                  className={`w-full px-4 py-2.5 rounded-none border text-sm focus:outline-none focus:ring-1 bg-[#F8F4EA]/50 ${
                    errors.studentName
                      ? 'border-red-400 focus:ring-red-400'
                      : 'border-[#C68A32]/40 focus:ring-[#C96B25]'
                  }`}
                />
                {errors.studentName && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.studentName}</p>
                )}
              </div>

              {/* Guardian Name */}
              <div>
                <label className="block text-xs font-bold text-[#241B15] mb-1">
                  {isEn ? "Father's / Guardian's Name" : "अभिभावक / पिता का नाम"} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="guardianName"
                  value={formData.guardianName}
                  onChange={handleChange}
                  placeholder={isEn ? "e.g. Shri Rajesh Sharma" : "उदा. श्री राजेश शर्मा"}
                  className={`w-full px-4 py-2.5 rounded-none border text-sm focus:outline-none focus:ring-1 bg-[#F8F4EA]/50 ${
                    errors.guardianName
                      ? 'border-red-400 focus:ring-red-400'
                      : 'border-[#C68A32]/40 focus:ring-[#C96B25]'
                  }`}
                />
                {errors.guardianName && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.guardianName}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-[#241B15] mb-1">
                  {isEn ? "Mobile Number (10 Digits)" : "मोबाइल नंबर (10 अंक)"} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={isEn ? "e.g. 9876543210" : "उदा. 9876543210"}
                  maxLength={10}
                  className={`w-full px-4 py-2.5 rounded-none border text-sm focus:outline-none focus:ring-1 bg-[#F8F4EA]/50 ${
                    errors.phone
                      ? 'border-red-400 focus:ring-red-400'
                      : 'border-[#C68A32]/40 focus:ring-[#C96B25]'
                  }`}
                />
                {errors.phone && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Course Selection */}
              <div>
                <label className="block text-xs font-bold text-[#241B15] mb-1">
                  {isEn ? "Desired Course / Class" : "वांछित पाठ्यक्रम / कक्षा"} <span className="text-red-500">*</span>
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 rounded-none border text-sm focus:outline-none focus:ring-1 bg-[#F8F4EA]/50 ${
                    errors.course
                      ? 'border-red-400 focus:ring-red-400'
                      : 'border-[#C68A32]/40 focus:ring-[#C96B25]'
                  }`}
                >
                  <option value="">{isEn ? "-- Select Course --" : "-- पाठ्यक्रम चुनें --"}</option>
                  {COURSES_DATA.map((c) => (
                    <option key={c.id} value={c.title}>
                      {isEn ? (c.title_en || c.title) : c.title} ({isEn ? (c.level_en || c.level) : c.level})
                    </option>
                  ))}
                </select>
                {errors.course && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.course}</p>
                )}
              </div>
            </div>

            {/* City / State */}
            <div>
              <label className="block text-xs font-bold text-[#241B15] mb-1">
                {isEn ? "Home City / State" : "गृह जनपद / राज्य"}
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder={isEn ? "e.g. Ayodhya, Uttar Pradesh" : "उदा. अयोध्या, उत्तर प्रदेश"}
                className="w-full px-4 py-2.5 rounded-none border border-[#C68A32]/40 text-sm focus:outline-none focus:ring-1 focus:ring-[#C96B25] bg-[#F8F4EA]/50"
              />
            </div>

            {/* Message / Remarks */}
            <div>
              <label className="block text-xs font-bold text-[#241B15] mb-1">
                {isEn ? "Additional Query / Remarks" : "अतिरिक्त टिप्पणी / कोई प्रश्न"}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder={isEn ? "Write your query here..." : "यदि कोई विशिष्ट प्रश्न हो तो यहाँ लिखें..."}
                className="w-full px-4 py-2.5 rounded-none border border-[#C68A32]/40 text-sm focus:outline-none focus:ring-1 focus:ring-[#C96B25] bg-[#F8F4EA]/50"
              />
            </div>

            <div className="pt-3">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full text-base font-bold shadow-sm rounded-none"
                isLoading={isSubmitting}
                loadingText={isEn ? "Submitting Inquiry..." : "पूछताछ भेजी जा रही है..."}
                icon={Send}
              >
                {isEn ? "Submit Admission Inquiry" : "प्रवेश पूछताछ प्रेषित करें"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuickInquiryForm;

