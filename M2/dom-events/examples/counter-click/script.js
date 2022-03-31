const span = document.querySelector('h1 span');
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
