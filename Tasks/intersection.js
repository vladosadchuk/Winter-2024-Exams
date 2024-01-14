// Find an intersection of two dictionaries
'use strict';

const intersection = (object1, object2) => {
  const firstObjectKeys = Object.keys(object1);
  for (const key of firstObjectKeys) {
    if (object1[key] !== object2[key]) {
      delete object1[key];
    }
  }
  return object1;
};

module.exports = intersection;
