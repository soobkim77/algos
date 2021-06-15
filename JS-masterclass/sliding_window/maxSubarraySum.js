function maxSubarraySumNaive(arr,n){
    let maxSum = 0
    let tempSum = 0
    if(arr.length < num) return null
    for(let i = 0; i < num; i++){
        maxSum += arr[i]
        //creates original window
    }
    tempSum = maxSum
    for(let i = num;i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
        //subtracts first value, adds next value to window "slides"
    }
    return maxSum
}

function maxSubarraySumNaive(arr, n){
    if (n > arr.length){
        return null
    }
    let max = -Infinity
    for(let i = 0; i < arr.length - num + 1; i++){
        temp = 0
        for (let j = 0; j < num; j++){
            temp += arr[i+j]
        }
        if(temp > max){
            max = temp
        }
    }
    return max
}

//accepts an array and number n
//return the maximum sum of n consecutive elements in an array