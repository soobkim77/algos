function runningSum(nums) {
    //loop over array, storing the previous sum, and then add the current val

    //intialize the results array => will be the return of function with the correct outputs
    let results = []

    //loop over array
    for(let i = 0; i < nums.length; i++){
        let val = nums[i]

        //conditional for first val to initialzie loop, cannot sum if it is at index 0
        if(i == 0){
            results.push(val)
        } else {
            //add current val to previous sum
           sum = val + results[i-1]
            results.push(sum)
        }
    }
    return results
}

//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

//Return the running sum of nums
