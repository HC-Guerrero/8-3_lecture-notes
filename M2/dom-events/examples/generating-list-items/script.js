/*
  This code enables all the inital li elements to create a new li when clicked. However, the new li elements do not have the same capability.
*/
// accessing all the li in the html
const lis = document.querySelectorAll('li');

<<<<<<< HEAD
function generateLiHandler() {
  const ol = document.querySelector('ol');
  const newLi = document.createElement('li');

  newLi.textContent = 'Click me to make more! You know you want to!';
  ol.append(newLi);
  newLi.addEventListener('click', generateLiHandler);
}

=======
const generateLiHandler = () => {
  // access the order list
  const ol = document.querySelector('ol');
  // create a new list item
  const newLi = document.createElement('li');
  // add new text to the new list item
  newLi.textContent = 'Click me to make more!';
  // add an event listener to the new list item!
  newLi.addEventListener('click', generateLiHandler);
  // append the new list item to the ordered list
  ol.append(newLi);
};

// loop through the li
>>>>>>> e23cf7d401a4124e250bdb6ea310c3845f0d55fe
for (let li of lis) {
  li.addEventListener('click', generateLiHandler);
}
