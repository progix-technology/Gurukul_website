/**
 * Web3Forms Zero-Backend Email Service
 * Directly dispatches form submissions to Gurukul's email inbox without needing a custom server.
 */

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

// Get Access Key from Vite environment variable or use the default configured key
export const getWeb3FormsKey = () => {
  return import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE';
};

export const web3FormsService = {
  /**
   * Send Contact Us Form to Gurukul's Email
   * @param {Object} formData { name, phone, email, subject, message }
   */
  async sendContactMessage(formData) {
    const accessKey = getWeb3FormsKey();

    // If key is default/unconfigured in local dev, simulate response
    if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
      console.info('[Web3Forms Demo Mode]: Form data received:', formData);
      await new Promise((resolve) => setTimeout(resolve, 900));
      return {
        success: true,
        message: 'आपका संदेश सफलतापूर्वक प्राप्त हो गया है। गुरुकुल कार्यालय शीघ्र ही आपसे संपर्क करेगा।',
        isDemo: true,
      };
    }

    const payload = {
      access_key: accessKey,
      from_name: 'गुरुकुल अयोध्या पोर्टल',
      subject: `[गुरुकुल संपर्क] ${formData.name} - ${formData.subject || 'सामान्य पूछताछ'}`,
      'नाम (Name)': formData.name,
      'मोबाइल नंबर (Phone)': formData.phone,
      'ईमेल (Email)': formData.email || 'उपलब्ध नहीं कराया गया',
      'विषय (Subject)': formData.subject || 'सामान्य पूछताछ',
      'संदेश (Message)': formData.message,
      'समय (Submitted At)': new Date().toLocaleString('hi-IN', { timeZone: 'Asia/Kolkata' }),
      'पोर्टल': 'श्री निःशुल्क गुरुकुल महाविद्यालय, अयोध्या (Contact Page)'
    };

    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || 'ईमेल भेजने में असमर्थ। कृपया पुनः प्रयास करें।');
    }

    return {
      success: true,
      message: 'आपका संदेश सफलतापूर्वक भेज दिया गया है। गुरुकुल कार्यालय शीघ्र ही आपसे संपर्क करेगा।',
      data,
    };
  },

  /**
   * Send Admission Inquiry Form to Gurukul's Email
   * @param {Object} formData { studentName, parentName, phone, classApplied, previousSchool, city, message }
   */
  async sendAdmissionInquiry(formData) {
    const accessKey = getWeb3FormsKey();

    if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
      console.info('[Web3Forms Demo Mode]: Admission Inquiry data received:', formData);
      await new Promise((resolve) => setTimeout(resolve, 900));
      return {
        success: true,
        message: 'प्रवेश पूछताछ सफलतापूर्वक दर्ज कर ली गई है। प्रवेश समिति आपसे शीघ्र संपर्क करेगी।',
        isDemo: true,
      };
    }

    const payload = {
      access_key: accessKey,
      from_name: 'गुरुकुल प्रवेश प्रकोष्ठ',
      subject: `[गुरुकुल प्रवेश पूछताछ] ${formData.studentName || 'नवीन छात्र'} (कक्षा: ${formData.classApplied || 'अनिर्दिष्ट'})`,
      'छात्र का नाम (Student Name)': formData.studentName,
      'अभिभावक का नाम (Parent Name)': formData.parentName,
      'मोबाइल नंबर (Phone)': formData.phone,
      'इच्छुक कक्षा (Class Applied)': formData.classApplied,
      'शहर/स्थान (City)': formData.city || 'अनिर्दिष्ट',
      'पूर्व विद्यालय (Previous School)': formData.previousSchool || 'लागू नहीं',
      'संदेश/टिप्पणी (Message)': formData.message || 'प्रवेश सम्बन्धी जानकारी',
      'समय (Submitted At)': new Date().toLocaleString('hi-IN', { timeZone: 'Asia/Kolkata' }),
      'पोर्टल': 'श्री निःशुल्क गुरुकुल महाविद्यालय, अयोध्या (Admission Inquiry)'
    };

    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || 'प्रवेश पूछताछ भेजने में समस्या हुई। कृपया पुनः प्रयास करें।');
    }

    return {
      success: true,
      message: 'प्रवेश पूछताछ सफलतापूर्वक दर्ज कर ली गई है। प्रवेश समिति आपसे शीघ्र संपर्क करेगी।',
      data,
    };
  },
};

export default web3FormsService;
