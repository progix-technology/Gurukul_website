import { web3FormsService } from './web3FormsService';
import { rateLimiter, RATE_LIMIT_CONFIGS } from '../utils/rateLimiter';

export const admissionService = {
  /**
   * Submit admission registration or inquiry with rate limiting and direct email delivery
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

    return await web3FormsService.sendAdmissionInquiry(formData);
  },
};

export default admissionService;

