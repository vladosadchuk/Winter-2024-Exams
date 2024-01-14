// Return an array without duplicates
'use strict';

const duplicate = (value, times) => {
  if (times <= 0) return [];
  
  let res = [];
  for (let i = 0; i < times; i++) {
    res[i] = value;
  }
  return res;
};

module.exports = duplicate;
