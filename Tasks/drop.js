// Delete listed keys from dictionary
'use strict';

const DroP = (D, ...X) => {
  const T = Object.keys(D);
  for(const key of T){
    if(X.includes(key)){
      delete D[key];
    };
  };
  return D;
};

module.exports = DroP;
