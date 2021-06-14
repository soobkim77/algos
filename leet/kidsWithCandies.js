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
};