// dateUtils.js

/**
 * Get the current month and year in various formats.
 * @returns {Object} - An object containing the current month as a number, name, and year.
 */
export function getCurrentMonthInfo(): object {
  const now = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return {
    monthNumber: now.getMonth() + 1, // Adding 1 because months are zero-based
    monthName: monthNames[now.getMonth()],
    year: now.getFullYear(),
  };
}

/**
 * Get the current month as a number (1-12).
 * @returns {number} - The current month as a number.
 */
export function getCurrentMonthNumber(): number {
  return new Date().getMonth() + 1; // Adding 1 because months are zero-based
}

/**
 * Get the current month as a name (e.g., "January").
 * @returns {string} - The current month as a name.
 */
export function getCurrentMonthName(): string {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[new Date().getMonth()];
}

/**
 * Get the current year.
 * @returns {number} - The current year.
 */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}
