// Get month number
'use strict';

const getMonth = (strMonth) => {
  const monthsList = ['jan', 'feb', 'mar', 'apr', 'may', 'jun',
                  'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  
  for (let i = 0; i < monthsList.length; i++) {
    const lowerMonth = strMonth.toLowerCase();
    if (lowerMonth.indexOf(monthsList[i]) === 0) return i + 1;
  }
  return -1;
};

module.exports = getMonth;
