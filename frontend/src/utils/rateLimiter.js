/**
 * Production-ready Rate Limiter utility using Sliding Window algorithm with localStorage & memory storage.
 * Prevents spam submissions and API abuse across the Gurukul website.
 */

class RateLimiter {
  constructor() {
    this.storageKeyPrefix = 'gurukul_rl_';
    this.memoryFallback = new Map();
  }

  /**
   * Get timestamp records from storage
   * @private
   */
  _getRecords(key) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const item = window.localStorage.getItem(this.storageKeyPrefix + key);
        return item ? JSON.parse(item) : [];
      }
    } catch {
      // Storage blocked or quota exceeded, fallback to memory
    }
    return this.memoryFallback.get(key) || [];
  }

  /**
   * Save timestamp records to storage
   * @private
   */
  _setRecords(key, records) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(this.storageKeyPrefix + key, JSON.stringify(records));
      }
    } catch {
      // Storage blocked, save in memory
    }
    this.memoryFallback.set(key, records);
  }

  /**
   * Clean up expired timestamps outside the current sliding window
   * @private
   */
  _cleanOldRecords(records, windowMs, now) {
    return records.filter((timestamp) => now - timestamp < windowMs);
  }

  /**
   * Check if an action is currently rate limited without consuming an attempt
   * @param {string} key - Unique identifier for the action (e.g., 'contact_form')
   * @param {number} maxRequests - Max permitted requests in the time window
   * @param {number} windowMs - Time window in milliseconds
   * @returns {{ allowed: boolean, remaining: number, retryAfterSeconds: number }}
   */
  check(key, maxRequests = 3, windowMs = 5 * 60 * 1000) {
    const now = Date.now();
    const rawRecords = this._getRecords(key);
    const validRecords = this._cleanOldRecords(rawRecords, windowMs, now);

    if (validRecords.length >= maxRequests) {
      const oldestRecord = Math.min(...validRecords);
      const retryAfterMs = oldestRecord + windowMs - now;
      const retryAfterSeconds = Math.max(1, Math.ceil(retryAfterMs / 1000));
      return {
        allowed: false,
        remaining: 0,
        retryAfterSeconds,
      };
    }

    return {
      allowed: true,
      remaining: Math.max(0, maxRequests - validRecords.length),
      retryAfterSeconds: 0,
    };
  }

  /**
   * Consume an attempt if within limit, otherwise return rate limit error details
   * @param {string} key - Unique identifier for the action
   * @param {number} maxRequests - Max permitted requests
   * @param {number} windowMs - Time window in milliseconds
   * @returns {{ allowed: boolean, remaining: number, retryAfterSeconds: number, message?: string }}
   */
  consume(key, maxRequests = 3, windowMs = 5 * 60 * 1000) {
    const now = Date.now();
    const rawRecords = this._getRecords(key);
    const validRecords = this._cleanOldRecords(rawRecords, windowMs, now);

    if (validRecords.length >= maxRequests) {
      const oldestRecord = Math.min(...validRecords);
      const retryAfterMs = oldestRecord + windowMs - now;
      const retryAfterSeconds = Math.max(1, Math.ceil(retryAfterMs / 1000));
      
      const minutes = Math.floor(retryAfterSeconds / 60);
      const seconds = retryAfterSeconds % 60;
      const timeStr = minutes > 0 ? `${minutes} मिनट ${seconds} सेकंड` : `${seconds} सेकंड`;

      return {
        allowed: false,
        remaining: 0,
        retryAfterSeconds,
        message: `अनुरोध सीमा पार हो गई है। कृपया ${timeStr} बाद पुनः प्रयास करें। (Rate limit exceeded)`,
      };
    }

    // Add current timestamp and save
    validRecords.push(now);
    this._setRecords(key, validRecords);

    return {
      allowed: true,
      remaining: Math.max(0, maxRequests - validRecords.length),
      retryAfterSeconds: 0,
    };
  }

  /**
   * Reset rate limit bucket for testing or administrative actions
   */
  reset(key) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(this.storageKeyPrefix + key);
      }
    } catch {}
    this.memoryFallback.delete(key);
  }
}

// Global Singleton RateLimiter instance
export const rateLimiter = new RateLimiter();

// Standard Rate Limiting Presets for Gurukul Website
export const RATE_LIMIT_CONFIGS = {
  // Contact form: 3 submissions per 3 minutes
  CONTACT_FORM: {
    key: 'contact_form_submit',
    maxRequests: 3,
    windowMs: 3 * 60 * 1000,
  },
  // Admission quick inquiry form: 3 submissions per 3 minutes
  ADMISSION_INQUIRY: {
    key: 'admission_inquiry_submit',
    maxRequests: 3,
    windowMs: 3 * 60 * 1000,
  },
  // General API requests: 30 requests per minute
  API_REQUEST: {
    key: 'general_api_request',
    maxRequests: 30,
    windowMs: 60 * 1000,
  },
};

export default rateLimiter;
