// Copy all values from dict except listed
'use strict';

const except = (incomingArray, ...exceptElements) => {
  const arrayKeys = Object.keys(incomingArray);
  for(const key of arrayKeys) {
    if (exceptElements.includes(key)) delete incomingArray[key];
  };
  return incomingArray;
};

module.exports = except;
