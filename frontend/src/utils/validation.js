/**
 * Validate Indian Mobile Number (10 digits starting with 6,7,8,9)
 * @param {string} phone 
 * @returns {boolean}
 */
export const isValidIndianPhone = (phone) => {
  if (!phone) return false;
  const cleanPhone = phone.replace(/[\s\-\+]/g, '').replace(/^91/, '');
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(cleanPhone);
};

/**
 * Validate Email address
 * @param {string} email 
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

/**
 * Validate Contact Form fields
 * @param {Object} formData 
 * @returns {Object} errors object with Hindi messages
 */
export const validateContactForm = (formData) => {
  const errors = {};

  if (!formData.name || !formData.name.trim()) {
    errors.name = 'कृपया अपना नाम दर्ज करें।';
  } else if (formData.name.trim().length < 2) {
    errors.name = 'नाम कम से कम 2 अक्षरों का होना चाहिए।';
  }

  if (!formData.phone || !formData.phone.trim()) {
    errors.phone = 'कृपया अपना मोबाइल नंबर दर्ज करें।';
  } else if (!isValidIndianPhone(formData.phone)) {
    errors.phone = 'कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें (उदा. 9876543210)।';
  }

  if (formData.email && formData.email.trim()) {
    if (!isValidEmail(formData.email)) {
      errors.email = 'कृपया सही ईमेल पता दर्ज करें (उदा. example@gmail.com)।';
    }
  }

  if (!formData.message || !formData.message.trim()) {
    errors.message = 'कृपया अपना संदेश या प्रश्न लिखें।';
  } else if (formData.message.trim().length < 5) {
    errors.message = 'संदेश कम से कम 5 अक्षरों का होना चाहिए।';
  }

  return errors;
};

/**
 * Validate Admission Quick Inquiry Form
 * @param {Object} formData 
 * @returns {Object} errors
 */
export const validateAdmissionForm = (formData) => {
  const errors = {};

  if (!formData.studentName || !formData.studentName.trim()) {
    errors.studentName = 'कृपया छात्र का नाम दर्ज करें।';
  }

  if (!formData.guardianName || !formData.guardianName.trim()) {
    errors.guardianName = 'कृपया माता/पिता या अभिभावक का नाम दर्ज करें।';
  }

  if (!formData.phone || !formData.phone.trim()) {
    errors.phone = 'कृपया अभिभावक का संपर्क नंबर दर्ज करें।';
  } else if (!isValidIndianPhone(formData.phone)) {
    errors.phone = 'कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।';
  }

  if (!formData.course || !formData.course.trim()) {
    errors.course = 'कृपया वांछित कक्षा/पाठ्यक्रम का चयन करें।';
  }

  return errors;
};
