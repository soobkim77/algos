 // given 2 strings, write a function to determine if the second string is an anagram of the first

 function isAnagram(str1, str2){
    if (str1.length !== str2.length){
        return false
    }

    let fq1 = {}
    let fq2 = {}

    for(let char of str1){
        fq1[char] = (fq1[char] || 0) + 1
    }
    for(let char of str2){
        fq2[char] = (fq2[char] || 0) + 1
    }
    for(let key in fq1){
        if(fq2[char] !== fq1[char]){
            return false
        }
    }
    return true
 }

 function refactoredIsAnagram(str1, str2){
    if (str1.length !== str2.length){
        return false
    }

    let cntObj = {}

    for (let i = 0; i < str1.length; i++){
        let char = str1[i]

        cntObj[char] ? cntObj[char] += 1 : cntObj[char] = 0
    }

    for (let i = 0; i < str2.length; i++){
        let char = str2[i]

        if(!cntObj[char]){
            return false
        } else {
            cntObj[char] -= 1;
        }
    }
    return true
 }