/*
Problem: Bilangan Prima

Bilangan prima adalah sebuah bilangan yang memiliki 2 faktor, yaitu 1 dan bilangan itu sendiri.
Key -> total faktor itu cuma 2.

Input: 7
Output: Prime Number

Input: 8
Output: Not Prime Number

*/

// // Input
// let input = 20;

// // Proses
// let countFactor = 0;
// for (let i = 1; i <= input; i++) {
//     if (input%i === 0) {
//         countFactor++
//     }
// }

// // Output
// if (countFactor === 2) {
//     console.log("Prime Number")
// } else {
//     console.log("Not Prime Number")
// }



let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
   if (arr[i] % 2 === 0) {
       sum += arr[i];
   }
}
console.log(sum);

