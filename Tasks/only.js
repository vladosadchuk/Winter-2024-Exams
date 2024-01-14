// Copy only listed values from dict
'use strict';

const only = (W, ...only) => {
  const X = Object.keys(W);
  for(const key of X){
    if(!only.includes(key)){
      delete W[key];
    }
  }
  return W;
};

module.exports = only;
