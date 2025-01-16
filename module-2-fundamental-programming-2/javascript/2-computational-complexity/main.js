// --- 1. Constant Time - O(1) ---
function getFirstElement(arr) {
    // Return the first element of the array
    return arr[0];
}

const firstElement = getFirstElement([10, 20, 30, 40]);
console.log('Constant Time Example (O(1)): ', firstElement);  // Output: 10

// --- 2. Linear Time - O(n) ---
function sumArray(arr) {
    let sum = 0;

    // Loop through all elements of the array and sum them up
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

const array = [1, 2, 3, 4, 5];
const totalSum = sumArray(array);
console.log('Linear Time Example (O(n)): ', totalSum);  // Output: 15


// --- 3. Quadratic Time - O(n²) ---
function bubbleSort(arr) {
const n = arr.length;

// Two nested loops to compare and swap elements
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            // Swap the elements if they are in the wrong order
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
}

return arr;
}

const unsortedArray = [5, 3, 8, 4, 2];
const sortedArray = bubbleSort(unsortedArray);
console.log('Quadratic Time Example (O(n²)): ', sortedArray);  // Output: [2, 3, 4, 5, 8]


// --- 4. Logarithmic Time - O(log n) ---
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    // Loop until the search space is reduced to a single element
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);  // Find the middle index
        
        if (arr[mid] === target) {
            // Return the index if the target is found
            return mid;
        }
        
        // Narrow down the search space
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;  // Return -1 if the target is not found
}

const sortedArr = [1, 3, 5, 7, 9, 11, 13];
const targetValue = 7;
const targetIndex = binarySearch(sortedArr, targetValue);
console.log('Logarithmic Time Example (O(log n)): ', targetIndex);  // Output: 3