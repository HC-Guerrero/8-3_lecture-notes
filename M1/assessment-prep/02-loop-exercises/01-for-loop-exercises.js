/**
 * EXERCISE 1
 *
 * Get the sum of the elements of two arrays.
 * Each array includes only integer numbers.
 *
 * Example output:
 * 276 + 351 = 627
 */
function findSum() {
let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351
sum1 = 0;
sum2 = 0;
let finalsum = 0;
for (i =0; i < arr_1.lengt; i++) {
    for(j =0; j < arr_2.length; j++) {
    //sum1 += arr_1[i];
    sum2 += arr_2[j];
    }
    sum1 += arr_1[i];
    
}
finalsum = sum1 + sum2;
    return finalsum;
}
console.log(findSum());


/**
 * EXERCISE 2
 *
 * Using a for loop print all even numbers up to and including n.
 * Don’t include 0.
 *
 *  Print each item on a new line
 *
 * Example output:
 * 2
 * 4
 * 6
 * 8
 * 10
 * 12
 * 14
 * 16
 * 18
 * 20
 * 22
 */
function printEven() {
let arrEven = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
let arrEven2 = [];
let n1 = 22;
for( i = 2; i < arrEven.length; i+2); {
    if (arrEven[i] %2 == 0) {
        arrEven2.push(arrEven[i])
    }

}
return arrEven2;
}
console.log(printEven(arrEven));
/**
 * EXERCISE 3
 *
 * Using a for loop output the elements in reverse order
 * with each item on a new line
 *
 * Example output:
 * true
 * 3
 * be
 * false
 * cannot
 * true
 * 9
 * what
 * 43
 *
 */


let arrReverse = [43, 'what', 9, true, 'cannot', false, 'be', 3, true];
let arrReverse2 = [];


/**
 * EXERCISE 4
 *
 * Given two arrays of integers, add up each element in the same position
 * and create a new array containing the sum of each pair.
 * Assume both arrays are of the same length.
 *
 * Example output:
 * [12, 7, 16]
 *
 */
let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];

/**
 * EXERCISE 5
 * Given a string change the every second letter to an uppercase ‘Z’.
 * Assume there are no spaces.
 *
 * Example output:
 * jZvZsZrZpZ OR each letter on a new line
 *
 * HINT: You can use  if((i+1) % 2 == 0) to check for even indexes
 */
let str1 = 'javascript';

/**
 * EXERCISE 6
 * Check if a string contains the letter “y”. Print “yes” if it does and “no”
 * if it does not.
 *
 * Example output:
 * yes
 */

let str2 = `don't know why`;

/**
 * EXERCISE 7
 *
 * Given a number n, calculate the factorial of the number
 *
 * EXAMPLE input: 4, output: 24
 */

let n2 = 4; //  4 * 3 * 2 * 1 = 24

/**
 * EXERCISE 8
 *
 * Write a program that will allow someone to guess a four digit pin
 * exactly 4 times. If the user guesses the number correctly.
 * It prints “That was correct!”
 *
 * Otherwise it will print “Sorry that was wrong.”
 *
 * Program stops after the 4th attempt of if they got it right.
 *
 * Example output:
 * Please make your guess:
 * 4544
 * Sorry that was wrong.
 * Please make your guess:
 * 4444
 * Sorry that was wrong.
 * Please make your guess:
 * 0704
 * That was correct!
 */
let pin = 0704;

/** EXERCISE 9
 *
 * Write a program that will check if two strings are palindromes.
 * A palindrome is a word that spells the same forward and backward.
 * Palindrome: a word, phrase, or sequence that reads the same backward as
 * forward, e.g., madam or nurses run.
 *
 * Example output:
 * string1 palindrome?: Yes
 * string2 palindrome?: No
 */

let str3 = 'racecar';
let str4 = 'Java';

/**
 * EXERCISE 10
 *
 * Write a program that finds the summation of every number from 1 to num.
 * The number will always be a positive integer greater than 0.
 *
 * EXAMPLE:
 * input: 2, 8
 * output: 36
 *
 * 1 + 2 = 3
 * 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36
 */

let num1 = 2;
let num2 = 8;
