// Get month number
'use strict';

const Month = (s) => {
  const Months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun',
                  'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  
  for (let i = 0; i < Months.length; i++) {
    if (s.toLowerCase().startsWith(Months[i])) return i + 1;
  }
  return -1;
};

module.exports = Month;
