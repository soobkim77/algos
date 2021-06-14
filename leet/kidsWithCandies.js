function fasterKidsWithCandies(candies, extraCandies) {
    let result = []
    let max = Math.max(...candies)
    for (let i = 0; i < candies.length; i++){
        if ((candies[i] + extraCandies) >= max){
            result.push(true)
        } else {
            result.push(false)
        }
    }
    return result
    //80ms 72% of JS submissions
};


function kidsWithCandies(candies, extraCandies) {
    let result = []
    let x = [...candies]
    x.sort((a,b) => b - a)
    for (let i = 0; i < x.length; i++){
        console.log(candies[i] + extraCandies, x[0])
        if ((candies[i] + extraCandies) >= x[0]){
            result.push(true)
        } else {
            result.push(false)
        }
    }
    return result
    //117ms, 7% faster
};

// (Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

//     For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.)