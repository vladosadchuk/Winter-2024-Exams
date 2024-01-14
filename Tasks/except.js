// Copy all values from dict except listed
'use strict';

EXCEPT = (incomingvaluesarray, ...no) => {
  intermediate_variable = Object.keys(incomingvaluesarray, 'a', 'b', 'c');
  intermediate_variable.forEach((Z) => {
    if (no.includes(Z)) {
      delete incomingvaluesarray[Z];
    }
  });
  return incomingvaluesarray;
};

module.exports = EXCEPT;
