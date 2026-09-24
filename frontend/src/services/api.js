/**
 * Centralized API client abstraction
 * Production-ready for connecting to Express + Node + MongoDB backend
 */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

import { rateLimiter, RATE_LIMIT_CONFIGS } from '../utils/rateLimiter';

/**
 * Custom API request helper with rate limiting and error handling
 * @param {string} endpoint 
 * @param {Object} options 
 * @returns {Promise<any>}
 */
export async function apiRequest(endpoint, options = {}) {
  // Client-side rate limiting for API spam protection
  const rateLimitStatus = rateLimiter.consume(
    RATE_LIMIT_CONFIGS.API_REQUEST.key,
    RATE_LIMIT_CONFIGS.API_REQUEST.maxRequests,
    RATE_LIMIT_CONFIGS.API_REQUEST.windowMs
  );

  if (!rateLimitStatus.allowed) {
    const error = new Error(rateLimitStatus.message || 'बहुत अधिक अनुरोध भेजे गए हैं। कृपया कुछ देर प्रतीक्षा करें।');
    error.status = 429;
    error.retryAfterSeconds = rateLimitStatus.retryAfterSeconds;
    throw error;
  }

  const url = `${API_BASE_URL}${endpoint}`;
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      if (response.status === 429) {
        const error = new Error(data.message || 'अनुरोध सीमा पार हो गई है (429 Too Many Requests)। कृपया कुछ देर बाद पुनः प्रयास करें।');
        error.status = 429;
        error.data = data;
        throw error;
      }
      const error = new Error(data.message || 'सर्वर से संपर्क करने में समस्या हुई।');
      error.status = response.status;
      error.data = data;
      throw error;
    }

    return data;
  } catch (err) {
    // If backend is not currently running in local dev, log warning
    console.warn(`[API] Request to ${endpoint} failed:`, err.message);
    throw err;
  }
}

export default {
  get: (endpoint, options) => apiRequest(endpoint, { ...options, method: 'GET' }),
  post: (endpoint, body, options) =>
    apiRequest(endpoint, { ...options, method: 'POST', body: JSON.stringify(body) }),
  put: (endpoint, body, options) =>
    apiRequest(endpoint, { ...options, method: 'PUT', body: JSON.stringify(body) }),
  delete: (endpoint, options) =>
    apiRequest(endpoint, { ...options, method: 'DELETE' }),
};
