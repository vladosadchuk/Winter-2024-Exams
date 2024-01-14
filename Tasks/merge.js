// Merge two dictionaries
'use strict';

const mergeTwoObjects = (object1, object2) => {
  let object3 = {};
  for (const [key, value] of Object.entries(object1)) {
    object3[key] = value;
  }
  for (const [key, value] of Object.entries(object2)) {
    object3[key] = value;
  }
  return object3;
};

module.exports = mergeTwoObjects;
