// Merge two dictionaries
'use strict';

const merge_two_objects = (object_1, object_2) => {
  let object_3 = {};
  for (const [key, value] of Object.entries(object_1)) {
    object_3[key] = value;
  }
  for (const [key, value] of Object.entries(object_2)) {
    object_3[key] = value;
  }
  return object_3;
};

module.exports = merge_two_objects;
