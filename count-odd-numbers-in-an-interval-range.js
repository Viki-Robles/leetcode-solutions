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
