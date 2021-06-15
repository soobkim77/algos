function countUniqueValues(arr){
    //takes a sorted array and returns the counts of unique numbers 
    if(arr.length === 0){return 0}

    let first = 0
    for (var second = 1; second < arr.length; second++){
        if(arr[first] !== arr[second]){
            i++;
            arr[first] = arr[second]
        }
    }
    return first + 1
}