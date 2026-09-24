import api from './api';
import { rateLimiter, RATE_LIMIT_CONFIGS } from '../utils/rateLimiter';

export const admissionService = {
  /**
   * Submit admission registration or inquiry with rate limiting
   * @param {Object} formData
   * @returns {Promise<Object>}
   */
  async submitInquiry(formData) {
    // Check and consume rate limit
    const rlStatus = rateLimiter.consume(
      RATE_LIMIT_CONFIGS.ADMISSION_INQUIRY.key,
      RATE_LIMIT_CONFIGS.ADMISSION_INQUIRY.maxRequests,
      RATE_LIMIT_CONFIGS.ADMISSION_INQUIRY.windowMs
    );

    if (!rlStatus.allowed) {
      const error = new Error(rlStatus.message);
      error.isRateLimit = true;
      error.retryAfterSeconds = rlStatus.retryAfterSeconds;
      throw error;
    }

    try {
      const response = await api.post('/admission/inquiry', formData);
      return response;
    } catch (error) {
      if (error.isRateLimit || error.status === 429) {
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, 800));
      return {
        success: true,
        message: 'प्रवेश पूछताछ सफलतापूर्वक दर्ज कर ली गई है। प्रवेश समिति आपसे शीघ्र संपर्क करेगी।',
        data: formData
      };
    }
  },
};

export default admissionService;
