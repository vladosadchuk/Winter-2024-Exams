// Copy only listed values from dict
'use strict';

const getListedValues = (dict, ...allowedKeys) => {
  const dictKeys = Object.keys(dict);
  for(const key of dictKeys){
    if(!allowedKeys.includes(key)) delete dict[key];
  };
  return dict;
};

module.exports = getListedValues;
