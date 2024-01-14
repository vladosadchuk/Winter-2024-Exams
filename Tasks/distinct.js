// Return an array without duplicates
'use strict';

const distinct = (data) => {
  const uniqueElements = new Set();
  for(let i = 0; i < data.length; i++) {
    const element = data[i];
    if (uniqueElements.has(element)) delete data[i];
    else uniqueElements.add(element);
  };
  return data.filter(x => typeof x === 'number');
};

module.exports = distinct;
