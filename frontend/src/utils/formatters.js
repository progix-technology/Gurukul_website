/**
 * Format Hindi Devanagari numbers
 * @param {number|string} num 
 * @returns {string}
 */
export const toDevanagariNumerals = (num) => {
  if (num === null || num === undefined) return '';
  const devanagariDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
  return String(num).replace(/[0-9]/g, (digit) => devanagariDigits[Number(digit)]);
};

/**
 * Truncate Hindi text safely
 * @param {string} text 
 * @param {number} maxLength 
 * @returns {string}
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
};
