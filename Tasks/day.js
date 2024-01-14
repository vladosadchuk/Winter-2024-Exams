// Get day number
'use strict';

const parseDay = (strDay) => {
  const daysList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  for (let i = 0; i < daysList.length; i++) {
    if (strDay.startsWith(daysList[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
