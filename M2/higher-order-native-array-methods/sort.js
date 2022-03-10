/**
 * Array.sort() --> a higher order native array method
 * Description:
 * Sorts the array ALPHABETICALLY (element values are converted to strings, and then compared according to UTF 16 values) and then returns the mutated, sorted array.
 * it is NOT necessary to store the output of the sort method in a new variable.
 * because the method mutates the array directly --> it is DESTRUCTIVE.
 * 
 * Side Effects:
 *  Yes, Mutates the original array.
 * 
 * Return values: 
 * Yes, returns the sorted array.
 * sort() expects the callback to return either -
 * Current Pen is <        nextPen is <         curretnPen === nextPen
 * - 1,                         1,                  or 0
 * no swap                  nextPen swaps        no change
 * 
 * Mutates the original array? Yes
 * 1
 */
 const pens = [
  {
    name: 'g2',
    style: 'ballpoint',
  },
  {
    name: `crayola`,
    style: `crayon`,
  },
  {
    name: 'pilot',
    style: 'ballpoint',
  },
  {
    name: 'claire fontaine',
    style: 'fountain',
  },
  {
    name: `sharpie`,
    style: `marker`,
  },
  {
    name: 'crayola',
    style: `marker`,
  }
];

//1st Loop:currentPen = pens[0], nextPen = pens[1] 
//2nd Loop:currentPen = pens[1], nextPen = pens[2] 
// .....
//5th Loop: currentPen = pens[4], nextPen = undefined

//TODO: fix this compatison so that the objects are sorted by name
console.log(pens.sort(function (currentPen, nextPen) {
  if (currentPen.name.toLowerCase() < nextPen.name.toLowerCase())  {
    return -1 ;
  }else if(currentPen.name.toLowerCase() > nextPen.name.toLowerCase()) {
    return 1;
  }
  return 0;
})); //callback is optional here

console.log(`shortcut for sorting numbers`,numbers.sort((a, b) => a - b), 
//1st Loop: 1 - 6 (negative number) ---> -1
//2nd Loop: 123 - 123 (0) --> 0
//3rd loop: 123 - 6 (positive number) ---> 1
);

let numbers = [34, 123, 6, 1, 345, 22, 11111];

console.log(numbers.sort());
 /* The .sort() method sorts elements in an array. Although the functionality is very different, in what ways is it similar to .every() and .some()?
 */

/**
 * 2
 *
 *  Calling the .sort() method looks like it might magically work, depending on the elements in the array it is sorting.
 */

const numArr1 = [4, 2, 3, 1, 0];
const res1 = numArr1.sort();
console.log(res1); //> [ 0, 1, 2, 3, 4 ]

/**
 * 3
 *
 * However, it can have unexpected results.
 */

const numArr2 = [11, 1, 0, 22, 2];
const res2 = numArr2.sort();
console.log(res2); //> [ 0, 1, 11, 2, 22 ]

/**
 * 4
 *
 * In general, you should not use the .sort() method without a callback function. However, can you describe why the .sort() method is organizing the numbers above in this way?
 */

/**
 * 5
 *
 * The .sort() method expects one argument. What data type is this argument?
 */

/**
 * 6
 * 
 *
 * The .sort() method's callback function has up to two parameters. What are these parameters?
 */

/**
 * 7
 *
 * The .sort() method's callback function expects a number to be returned. The number must either be a positive number, a negative number, or 0. What is the effect of each of these values?
 */

/**
 * 8
 *
 * The code below sorts numbers appropriately. Based on what you know about sort() will the numbers be sorted in ascending order (i.e. 0, 1, 2...) or descending order (i.e. 22, 11, 2...)?
 */

const numArr3 = [11, 1, 0, 22, 2];
const res3 = numArr3.sort((a, b) => {
  if (a > b) {
    return -1;
  }

  if (a < b) {
    return 1;
  }

  return 0;
});

console.log(res3);

/**
 * 9
 *
 * Is .sort() a destructive or non-destructive method?
 */

/**
 * 10
 *
 * Take a look at the table below. What does each column mean?
 *
 * Method  | Callback return value  |  Method return value | Destructive?
 * .every()| Boolean 	              |  Boolean 	           | No
 * .some() | Boolean 	              |  Boolean 	           | No
 * .sort() | Number                 |  An array            | Yes
 */
