/* Given a signed 32-bit integer x, return x with its digits reversed. If x vauses the value to go outside the unsigned 32-bit range, returrn 0 */

function reverse(x) {
    if(x < 0){
        let c = Math.abs(x).toString().split("").reverse().join("")
        let p = parseInt(c)
        if (p * -1 < -2147483648 ){
            return 0
        }
        return c * -1
    } else {
         let c = x.toString().split("").reverse().join("")
        let p = parseInt(c)
        if (p > 2147483648 ){
            return 0
        }
        return c
    }
}

reverse(123);

/*  
Pseudocode: 

    Integer can be turned to string, but needs to factor out negative first with abs or * -1
    .toString() to convert intger to string
    .split("") to get an array
    .reverse() to reverse the order of numbers
    .join("") to join the array into a single string with no whitespace
    parseInt(x) to return an intger from a string
    validations for outside 2^31 bounds, will return 0
    otherwise return a positive or negative reversed number

*/