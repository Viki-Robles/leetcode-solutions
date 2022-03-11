/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    const sortedArray = salary.sort()
    const removeLast = sortedArray.pop()
    const removeFirst = sortedArray.shift()
    const result = sortedArray.reduce((total, acc) => total + acc, 0) /sortedArray.length
  
    return result
};
