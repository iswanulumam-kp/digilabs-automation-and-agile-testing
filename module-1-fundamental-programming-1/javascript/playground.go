/*
Problem: Bilangan Prima

Bilangan prima adalah sebuah bilangan yang memiliki 2 faktor, yaitu 1 dan bilangan itu sendiri.
Key -> total faktor itu cuma 2.

Input: 7
Output: Prime Number

Input: 8
Output: Not Prime Number

*/

package main

import "fmt"

func main() {
	// input
	// n := 7
	var n int
	n = 7

	// proses
	countFactor := 0
	for i := 1; i <= n; i++ {
		if n%i == 0 {
			countFactor++
		}
	}

	// output
	if countFactor == 2 {
		fmt.Println("Prime Number")
	} else {
		fmt.Println("Not Prime Number")
	}
}
