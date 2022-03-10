/**
 * Array.some() --> a higher order native array method
 * Description:
 * Return true if there are ANY elements for which the callback evaluates to true.
 * Return false if there are NO elements for which the callback evaluates to true
 * 
 * 
 * Side Effects: Are Not recommended 
 * 
 * 
 * 1
 *
 * How does the .some() method differ from the .every() method? How is it similar?
 *  Both return a boolean value
 * some returns true when one lement meets the condition //some is logical OR
 * vs every returns true when all elements meet the condition //every is logical AND
 * 
 */ 

/**
 * 2
 *
 * Take a look at the following code. How many times does the isWebComic() function get called? How could you confirm?
 * 
 */

const comics = [
  { title: 'Calvin & Hobbes', author: 'Bill Watterson', kind: 'print' },
  { title: 'Zen Pencils', author: 'Gavin Aung Than', kind: 'web' },
  { title: 'Nancy', author: 'Olivia James', kind: 'print' },
  { title: null, author: 'Joshua Barkman', kind: 'web' },
  { title: null, author: 'Joshua Barkman', kind: 'web' },
];

function isWebComic(comic) {
  console.log(comic);
  return comic.kind === 'web';
}

<<<<<<< HEAD
const result = comics.some(isWebComic); //callback is called for every element that is processed.
console.log(`comic:` +result); //> true

const pens = [
  {
    name: 'g2',
    style: 'ballpoint',
  },
  {
    name: 'pilot',
    style: 'ballpoint',
  },
  {
    name: 'claire fontaine',
    style: 'fountain',
  }
]
console.log('There are sharpies in the case:', pens.some((pen) => {
  return pen.style === 'sharpie';
//  some() expects a callback which returns a value of true or false.
// any value that is not ture will cause some() to interpret the value as falsy.
}));
/*console.log('There are ballpoints in the case:',`index:${index}`, `array:${array}`, `thisArg:${thisArg}`, pens.some((pen, index, array, thisArg) => {
  return pen.style === 'ballpoint'; /// all this line does without a return value is evaluate an expression.
})); */


/*
How are the find() and some() methods:
Similar
Method execution stops after the first true evaluation is true;


*/
=======
// higher order function similar to the logic of the native array method Array.some()
const some = (array, callback) => {
  for (let el of array) {
    let res = callback(el);
    if (res === true) {
      return true;
    }
  }
  return false;
};

const result = comics.some(isWebComic); // callback is called for every element that is processed
console.log(result); //> true
console.log(some(comics, isWebComic));

/**
 * 3
 *
 * How are the find() and some() methods:
 *
 * SIMILAR
 * method execution stops after the first true evaluation occurs
 *
 * DIFFERENT
 * find() returns an element
 * some() returns a boolean
 */
>>>>>>> f08ca227492aed2cf3db74dec080e82ba9427eed
