// Question 1
// 1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

// Constant time O(1)


// 2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

//Linear Time O(n)

//Question 2: Even or Odd


// What is the Big O of the following algorithm?

// function isEven(value) {
//     if (value % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

//Exponential time O(2^n)
// The longer the list of values, the more time it takes to compute if it's divisible by 2

// When searching if a given value is divisible by 2 and evaluating for true, the larger the data set, the longer this function will take to complete. 2 values will take twice as long to finish and 4 values will take twice as long as that since each number has to be checked

//Question 3: Are you here?


// What is the Big O of the following algorithm?

// function areYouHere(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         const el1 = arr1[i];
//         for (let j = 0; j < arr2.length; j++) {
//             const el2 = arr2[j];
//             if (el1 === el2) return true;
//         }
//     }
//     return false;
// }

// Polynomial Time Object(n^k)
// The time taken increases primarily from the length of the first Array, and looping through it with the second increases the time that way for each value in the first Array. 

// Question 4: Doubler


// What is the Big O of the following algorithm?


// function doubleArrayValues(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] *= 2;
//     }
//     return array;
// }

// Linear Time O(n)
// As the array size grows, the number of operations the function will have to carry out increases directly proportionally

// Question 5: Naive search


// What is the Big O of the following algorithm?


// function naiveSearch(array, item) {
//     let ticks = 1
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             ticks ++
//             return {
//                 result: i,
//                 ticks: ticks
//             }
//         }
//     }
// }

// console.log(naiveSearch([1,2,3], 3));
// console.log(naiveSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
// console.log(naiveSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100], 100));

// Constant Time O(1) 
// No matter the size of the input array, the function is always looking for a single value. Scaled up, the operation takes the same amount of time

// Question 6: Creating pairs 



// What is the Big O of the following algorithm? Explain your answer

// function createPairs(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             console.log(arr[i] + ", " +  arr[j] );
//         }
//     }
// }

//Exponential Time O(2^n)
// Since the pairs are being made by the initial loop and a value that is the inital value plus one, we're looping twice for each value and thus, increasing time exponentially


// Question 7: Compute the sequence
// What does the following algorithm do? What is its runtime complexity? Explain your answer

// function compute(num) {
//     let result = [];
//     for (let i = 1; i <= num; i++) {

//         if (i === 1) {
//             result.push(0);
//         }
//         else if (i === 2) {
//             result.push(1);
//         }
//         else {
//             result.push(result[i - 2] + result[i - 3]);
//         }
//     }
//     return result;
// }

// console.log(compute(5));
// console.log(compute(15));
// console.log(compute(100));

// This algo creates an array filled with integers that increases i value if it's less than the num they started with, but only pushes values after 0 and 1 have been evaluated, then it adds the two values together (and account for i being zero indexed) from the number at that position in the array, and pushes that value to the end of the array



// Question 8: An efficient search
// In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}



// 9. Random element
// What is the Big O of the following algorithm? Explain your answer

// function findRandomElement(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }



// 10. What Am I?
// What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

// function isWhat(n) {
//     if (n < 2 || n % 1 !== 0) {
//         return false;
//     }
//     for (let i = 2; i < n; ++i) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }