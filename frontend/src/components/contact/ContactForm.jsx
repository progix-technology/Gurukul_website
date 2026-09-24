import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import Button from '../common/Button';
import { validateContactForm } from '../../utils/validation';
import { contactService } from '../../services/contactService';
import { useToast } from '../../hooks/useToast';
import { useLanguage } from '../../context/LanguageContext';

export const ContactForm = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const { showSuccess, showError } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
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
    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      showError(isEn ? 'Please correct the errors in the form.' : 'कृपया फॉर्म में दी गई त्रुटियों को सुधारें।');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await contactService.submitMessage(formData);
      setIsSuccess(true);
      showSuccess(response.message || (isEn ? 'Your message has been sent successfully.' : 'आपका संदेश सफलतापूर्वक भेज दिया गया है।'));
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });
      setErrors({});
      setRateLimitNotice(null);
    } catch (err) {
      if (err.isRateLimit || err.status === 429) {
        setRateLimitNotice(err.message);
        showError(err.message || (isEn ? 'Request limit exceeded. Please wait a moment.' : 'अनुरोध सीमा पार हो गई है। कृपया कुछ देर प्रतीक्षा करें।'));
      } else {
        showError(err.message || (isEn ? 'Error sending message. Please try again.' : 'संदेश भेजने में कुछ समस्या हुई। कृपया पुनः प्रयास करें।'));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-none border border-[#C68A32]/40 p-5 sm:p-8 lg:p-10 shadow-sm">
      <div className="mb-6">
        <h3 className="font-serif font-bold text-2xl text-[#241B15] mb-1">
          {isEn ? "Send Us a Message" : "हमें संदेश भेजें (Write to Us)"}
        </h3>
        <p className="text-xs sm:text-sm text-[#241B15]/80">
          {isEn 
            ? "Fill out the form below for admissions, academic inquiries, or general communication."
            : "प्रवेश, पाठ्यक्रम या सामान्य जानकारी हेतु नीचे दिया गया फॉर्म भरें।"
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
              ? "Message sent successfully! Our office will get back to you shortly."
              : "सफलतापूर्वक भेजा गया! गुरुकुल कार्यालय शीघ्र ही आपसे संपर्क करेगा।"
            }
          </span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Name */}
        <div>
          <label className="block text-xs font-bold text-[#241B15] mb-1">
            {isEn ? "Full Name" : "आपका पूरा नाम"} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={isEn ? "e.g. Rahul Sharma" : "उदा. राहुल शर्मा"}
            className={`w-full px-4 py-2.5 rounded-none border text-sm focus:outline-none focus:ring-1 bg-[#F8F4EA]/50 ${
              errors.name
                ? 'border-red-400 focus:ring-red-400'
                : 'border-[#C68A32]/40 focus:ring-[#C96B25]'
            }`}
          />
          {errors.name && (
            <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Phone */}
          <div>
            <label className="block text-xs font-bold text-[#241B15] mb-1">
              {isEn ? "Mobile Number" : "मोबाइल नंबर"} <span className="text-red-500">*</span>
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

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-[#241B15] mb-1">
              {isEn ? "Email Address (Optional)" : "ईमेल पता (वैकल्पिक)"}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={isEn ? "e.g. example@gmail.com" : "उदा. example@gmail.com"}
              className={`w-full px-4 py-2.5 rounded-none border text-sm focus:outline-none focus:ring-1 bg-[#F8F4EA]/50 ${
                errors.email
                  ? 'border-red-400 focus:ring-red-400'
                  : 'border-[#C68A32]/40 focus:ring-[#C96B25]'
              }`}
            />
            {errors.email && (
              <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-xs font-bold text-[#241B15] mb-1">
            {isEn ? "Subject" : "विषय (Subject)"}
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={isEn ? "e.g. Admission Inquiry / Collaboration" : "उदा. प्रवेश जानकारी / दान सहयोग"}
            className="w-full px-4 py-2.5 rounded-none border border-[#C68A32]/40 text-sm focus:outline-none focus:ring-1 focus:ring-[#C96B25] bg-[#F8F4EA]/50"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-bold text-[#241B15] mb-1">
            {isEn ? "Message" : "संदेश (Message)"} <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder={isEn ? "Write your message or inquiry here..." : "अपना संदेश या प्रश्न यहाँ लिखें..."}
            className={`w-full px-4 py-2.5 rounded-none border text-sm focus:outline-none focus:ring-1 bg-[#F8F4EA]/50 ${
              errors.message
                ? 'border-red-400 focus:ring-red-400'
                : 'border-[#C68A32]/40 focus:ring-[#C96B25]'
            }`}
          />
          {errors.message && (
            <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>
          )}
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full text-base font-bold shadow-sm rounded-none"
            isLoading={isSubmitting}
            loadingText={isEn ? "Sending Message..." : "भेजा जा रहा है..."}
            icon={Send}
          >
            {isSuccess 
              ? (isEn ? "Sent Successfully" : "सफलतापूर्वक भेजा गया") 
              : (isEn ? "Send Message" : "संदेश भेजें")
            }
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

