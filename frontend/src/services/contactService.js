import { web3FormsService } from './web3FormsService';
import { rateLimiter, RATE_LIMIT_CONFIGS } from '../utils/rateLimiter';

export const contactService = {
  /**
   * Submit contact form inquiry with rate limiting and direct email delivery
   * @param {Object} formData { name, phone, email, subject, message }
   * @returns {Promise<Object>}
   */
  async submitMessage(formData) {
    // Check and consume rate limit
    const rlStatus = rateLimiter.consume(
      RATE_LIMIT_CONFIGS.CONTACT_FORM.key,
      RATE_LIMIT_CONFIGS.CONTACT_FORM.maxRequests,
      RATE_LIMIT_CONFIGS.CONTACT_FORM.windowMs
    );

    if (!rlStatus.allowed) {
      const error = new Error(rlStatus.message);
      error.isRateLimit = true;
      error.retryAfterSeconds = rlStatus.retryAfterSeconds;
      throw error;
    }

    return await web3FormsService.sendContactMessage(formData);
  },
};

export default contactService;

