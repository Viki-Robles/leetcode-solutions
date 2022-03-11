/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
  let count = [];
    
  const range = [... Array(high - low + 1).keys()].map(i => i + low);

  for(i=0; i < range.length; i++) {
    if(range[i] % 2 !== 0) {
      count.push(range[i])
      
    }
  }

  return count.length
};


The first one passes only 72 out of 84 tests so the second below is better.

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
   if(low % 2 !== 0 || high %2 !== 0){
            return (high - low)/2 + 1;
        }
        return (high - low)/2;
    
};
