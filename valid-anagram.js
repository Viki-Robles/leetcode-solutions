Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


var isAnagram = function(s, t) {
    //both strings need to have the same length
    if(s.length !== t.length) {
        return false;
    }
    //create an object
    let counts = {};
    //loop over the first string and check if the str[1] exists
    //if exists add it to the object
    //if it doesnt initialise set to 1
    for(i=0; i < s.length; i++) {
        let char = s[i];
        counts[char] ? counts[char] += 1 : counts[char] = 1;
    }
    for(let i = 0; i < t.length; i++) {
        let char = t[i];
    //if the char of the second string doesnt exists on the object return false
        if(!counts[char]) {
            return false;
    //if the char exist substract it by 1
        } else {
            counts[char] -= 1
        }
    }
    return true
};
