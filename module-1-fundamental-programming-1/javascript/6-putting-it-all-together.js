/* 
@@@@@@@@@@@@@@@@@@ Put in all Togethers @@@@@@@@@@@@@@@@@@
*/

/*
    Problem Description:
    Check if a given number n is prime.
        - Input: A single integer n (1 ≤ n ≤ 1000).
        - Output: Print "Prime" if the number is prime, otherwise print "Not Prime".
*/

function countFactors(num) {
  let factorCount = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factorCount++; // Increment if i is a factor of num
    }
  }
  return factorCount; // Return the total number of factors
}

let n = 7; // Example input
let factors = countFactors(n);

if (factors === 2) {
  console.log("Prime");
} else {
  console.log("Not Prime");
}