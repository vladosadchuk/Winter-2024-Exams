// Delete listed keys from dictionary
'use strict';

const drop = (dictionary, ...keysToDelete) => {
  const dictKeys = Object.keys(dictionary);
  for(const key of dictKeys){
    if(keysToDelete.includes(key)) delete dictionary[key];
  };
  return dictionary;
};

module.exports = drop;
