// Copy all values from dict except listed
'use strict';

const EXCEPT = (incomingvaluesarray, ...no) => {
  const intermediate_variable = Object.keys(incomingvaluesarray);
  for(const key of intermediate_variable) {
    if (no.includes(key)) {
      delete incomingvaluesarray[key];
    }
  };
  return incomingvaluesarray;
};

module.exports = EXCEPT;
