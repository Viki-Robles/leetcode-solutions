var rob = function(nums) {
    let filteredHouses = nums.filter(function(element, index, array) {
    return (index % 2 === 0);
});

    let countMoney = filteredHouses.reduce((a, b) => a + b)
    
    return countMoney
};
