// Get month number
'use strict';

const Month = (s) => {
  const Months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun',
                  'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  
  for (let i = 0; i < Months.length; i++) {
    const lowerMonth = s.toLowerCase();
    if (lowerMonth.indexOf(Months[i]) === 0) return i + 1;
  }
  return -1;
};

module.exports = Month;
