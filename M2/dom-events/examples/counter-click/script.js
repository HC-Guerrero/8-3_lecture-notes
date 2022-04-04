const span = document.querySelector('h1 span');
<<<<<<< HEAD
//review accessing an element by tag
const clicker = document.querySelector('p');

//verifying we're accessed the correct tag
console.log(clicker.textContent);

const increment = (count) => {
  return count++;
};

//use an event listener to create a behavior for clicking the tag
clicker.addEventListener('click', () => {
  console.log('i have been clicked!!');
  ///how can I add to the click count?
  let count = parseInt(span.textContent) + 1;

  //count = increment(count);
  console.log(increment(count));

  const spanCount = count.toString();
  span.textContent = spanCount;
});
=======
// review accessing an elemen by tag
const clickMeP = document.querySelector('p');

// verifying we've accessed the correct tag
console.log(clickMeP.textContent);

const incrementTextContent = () => {
  console.log("i've been clicked!!");
  // how can I add to the click count?
  // we parse the string text content as a integer
  let count = parseInt(span.textContent);
  // increment the count
  count++;
  // convert the integer count back to string
  const countText = count.toString();
  // update the span value
  span.textContent = countText;
};

// use an event listener to create a behavior for clicking the tag
clickMeP.addEventListener('click', incrementTextContent);
>>>>>>> e23cf7d401a4124e250bdb6ea310c3845f0d55fe
