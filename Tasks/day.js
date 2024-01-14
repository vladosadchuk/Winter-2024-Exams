// Get day number
'use strict';

const parseDay = (strDay) => {
  const daysList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  for (const [index, day] of daysList.entries()) {
    const lowerDay = day.toLowerCase();
    if (strDay.startsWith(lowerDay)) {
      return index + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
