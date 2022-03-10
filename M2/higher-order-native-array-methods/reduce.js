/**
 * Array.reduce() --> a higher order native array method
 *
 * Description:
 * Take an array, and using a callback function(anonymous or named), will apply an accumulation and return a single value, if there are no elements in the array
 * the default value will be the second(optional) argument passed to reduce.
 *
 * Side Effects: NOT recommended
 *
 * Side Effects: NOT recommended
 *
 * Return values: A single value, the accumulation of an array
 *
 * Mutates the original array?: NO
 */
/// Accumulator pattern
//1. return result default value type
//2 Loop
//3 accumulate
/*
let numbers = [1 , 1, 1, 2]
function sum(arr) {
  //default type and value result
  let res = 0;

  //loop
  for(let i = 0; i < arr.length; i++) {
    //accumulate the sum
    res += arr[i]
  }

  //return the result
  return res;

}

console.log(sum(numbers));
//accumulator pattern + higher order function

//write a higher order function
function getArrSum(arr, callback) {
  let res = 0;
  //handle the loop
  for(let el of arr) {
    res = callback(res, el);
  }
  //return the default value and type
return res;
}
//pass in a sum callback function
function getSum(a, b) {
  //accumulate
  return a + b;
}
console.log(getArrSum(numbers))
//accumulator pattern + reduce native array method
numbers.reduce((accumulator, currentValue) => {  //step 2 of accumulator pattern abstracted by native array method definition
// step 3: accumulation operation (this is what we handle as devs)
return accumulator + currentValue; // In the background the accumulator value is updated to equal this result of this expression
}, 0); // step 1 of accumulator pattern(default value and type)
*/
/**
 * 1
 *
 * Summing all the numbers in an array:
 */

let arr1 = [1, 2, 3, 4];
let sum1 = arr1.reduce((acc, el) => { // acc = Accumulator, el = current Element
  return acc + el;
});

console.log(sum1); // => 10

// validate our element values are correct
let numbers3 = ['string'];

let sumNumbers = numbers3.reduce((acc, el) => {
  if (typeof el !== 'number') {
    return 0;
  }
  return acc + el;
}, 0);

console.log(sumNumbers);

// handling an empty array
let numbers4 = [];

let sumNumbers4 = numbers4.reduce((acc, el) => {
  if (typeof el !== 'number') {
    return 0;
  }
  return acc + el;
}, 0);

console.log(sumNumbers4);

/**
 * 2
 *
 * In this example we did not pass reduce the optional initialValue argument. This means that acc started as 1 and el started as 2.
 *
 * acc = 1    el = 2    return 1 + 2 -> 3 our next acc
 * acc = 3    el = 3    return 3 + 3 -> 6
 * acc = 6    el = 4    return 8 + 3 -> 10
 */

/**
 * If we wanted to find the sum of all the number in an array and have 5 added to that number, we could do this by passing in the second argument (initialValue) to the reduce function.
 */

let arr2 = [1, 2, 3, 4];
let sum2 = arr2.reduce((acc, el) => {
  return acc + el;
}, 5);

// console.log(sum2); // => 15

/**
 * 3
 *
 * The same as above but if we'd declared it with a name like:
 */

const adder = (num1, num2) => {
  return num1 + num2;
};

let sum3 = arr2.reduce(adder, 5);

// console.log(sum3); // => 15

/**
 * 4
 *
 * Turn an array of numbers into a long string of all those numbers.
 */

function stringConcat(arr1) {
  const stringConv = arr1.reduce( (acc, el) => { 
    return acc + el.toString();
  });

  //
  // your code here
}

// console.log(stringConcat([1, 2, 3])); // "123"
/**
 * 5
 *
 * Turn an array of voter objects into a count of how many people voted
 *
 * Note: You don't necessarily have to use reduce for this, so try to think of multiple ways you could solve this.
 */
let arr = [1, 2, 3, 4, 5]

function totalVotes(arr) {
  const totalVote = arr.reduce((acc, el) => {
    return totalVote = acc + el;
  });
  console.log(totalVotes(arr))
  // your code here
}

const voters = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false },
];
// console.log(totalVotes(voters)); // 7

/**
 * 6
 *
 * Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
 */

function shoppingSpree(arr) {
  // your code here
}

const wishlist = [
  { title: 'Tesla Model S', price: 90000 },
  { title: '4 carat diamond ring', price: 45000 },
  { title: 'Fancy hacky Sack', price: 5 },
  { title: 'Gold fidgit spinner', price: 2000 },
  { title: 'A second Tesla Model S', price: 90000 },
];

// console.log(shoppingSpree(wishlist)); // 227005
/**
 * 7
 *
 * Given an array of arrays, flatten them into a single array
 *
 * Note: Take a look at Array.concat() to help with this one
 */

function flatten(arr) {
  // your code here
}

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

/**
 * 8
 *
 * Given the array of potential voters above, return an object representing the results of the vote.
 * 
 * const voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
  }
 *
 * Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.
 */

function voterResults(arr) {
<<<<<<< HEAD
  //default return value
  /*{
    numYoungVotes: 0, // call reduce + conditional voted true and age 18 - 25
    numYoungPeople: 0, // call reduce + age 18-25
    numMidVotesPeople: 0, // call reduce + conditional voted true age 26 - 35
    numMidsPeople: 0, // call reduce + conditional voted true && age  26 -35
    numOldVotesPeople: 0 // call reduce + conditionals voted true and age 36+
    numOldsPeople: 0 //call reduce + conditionals voted true and age 36+ 
  } */
=======
  // default return value
  // {
  //   numYoungVotes: 0, // call reduce + conditional voted true and && age 18-25
  //   numYoungPeople: 0, // call reduce + conditional && age 18-25
  //   numMidVotesPeople: 0, // call reduce + conditional voted true && age 26-35
  //   numMidsPeople: 0, // call reduce + conditional age 18-25
  //   numOldVotesPeople: 0, // call reduce + conditional voted true && age 36+
  //   numOldsPeople: 0, // call reduce + conditional age 36+
  // }
  let numOldPeople = 0;
  const res = {
    numYoungVotes: arr.reduce((acc, el) => {
      // call reduce + conditional voted true and && age 18-25
      if (el.voted === true && el.age <= 25 && el.age >= 18) {
        return acc + 1;
      }
      return acc + 0; // explicitly adding 0 is SOMETIMES not necessary, but visually remember this is happening in the background
    }, 0),
    numYoungPeople: arr.reduce((acc, el) => {
      if (el.age <= 25 && el.age >= 18) {
        return acc + 1;
      }
      return acc + 0;
    }, 0), // expression that evaluate to a certain return value
    numMidVotes: arr.reduce((acc, el) => {
      // call reduce + conditional voted true && age 26-35
      if (el.voted && el.age >= 26 && el.age <= 35) {
        return acc + 1;
      }
      return acc + 0;
    }, 0),
    numMidPeople: arr.reduce((acc, el) => {
      // call reduce + conditional age 26-35
      if (el.age >= 26 && el.age <= 35) {
        return acc + 1;
      }
      return acc + 0;
    }, 0),
    numOldVotes: 0, // call reduce + conditional voted true && age 36+
    numOldPeople: 0, // call reduce + conditional age 36+
  };

  return res;
>>>>>>> a26a1803af10058998c7cf8407e574bc2fc2331e
  // your code here
  const res = {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotes: 0,
    numMidPeople: 0,
    numOldVotes: 0,
    numOldPeople: 0, 
  };
  res.numYoungVotes = arr.reduce((acc, el)  => {
    if (el.voted === true && el.age < 25 && el.age > 18){
      console.log("called")
        return acc + 1;
    }
    return acc + 0;
  }, 0),
  res.numYoungPeople = arr.reduce((acc, el) =>{
    if(el.age <= 25 && el.age >= 18) {
      return acc + 1;
    }
    return acc + 0;
  }, 0),
res.numMidVotes = arr.reduce((acc,el) => {
  if(el.voted /*<-booleancheck*/ && el.age >= 26 && el.age <= 35 ) {
    return acc + 1;
  }
  return acc + 0;
}, 0),
res.numMidPeople = arr.reduce((acc,el) => {
  if(el.age <= 35 && el.age >= 26) {
    return acc + 1;
  }
  return acc + 0;
}, 0),
res.numOldVotes = arr.reduce((acc, el) => {
  if(el.voted && el.age > 36) {
    return acc + 1;
  }
  return acc + 0;
}, 0),
res.numOldPeople = arr.reduce((acc, el) => {
  if(el.age > 36) {
    return acc + 1;
  }
  return acc + 0;
}, 0 ),
  res.numYoungVotes;
  res.numYoungPeople;
  res.numMidPeople;
  res.numMidVotes;
  res.numOldVotes;
  res.numOldPeople;

  return res;
}

<<<<<<< HEAD
 console.log(voterResults(voters)); // Returned value shown below:
=======
console.log(voterResults(voters)); // Returned value shown below:
>>>>>>> a26a1803af10058998c7cf8407e574bc2fc2331e
/*
{ 
  numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/
