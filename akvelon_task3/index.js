/* Task №1 Implement a function that reverses the bits in an integer. For example, the number 47 is 110100001 in binary. Reversing the binary is 100001011 which is 267.
*/

function decimalToBinary(dec){
   // Step #1
   const binaredNum = Math.abs(dec).toString(2); 
   // Step #2
   const reversedBinNum = binaredNum.split("").reverse().join("");
   return parseInt(reversedBinNum, 2).toString(10);
 }


/* Task №2  Implement factorial function.*/

const factorial = (n) => {
    if (n === 0) {
      return 1;
    }
    else {
      return n * factorial(n-1);
    }
}

/* Task №3 Implement a function that returns only unique words in the string, all words are separated only by space. The order of the returned words is not important. */

function unique(arr) {
    let result = [];
    let splitedArr = arr.split(" ");
    for (let str of splitedArr) {
        if (!result.includes(str)) {
        result.push(str);
        }
    }

    return result.join(" ");
}