const heading = document.querySelector('h1');
console.log(heading);

const printEventDetails = (event) => {
  console.log('event happened!');
  console.log('type:', event.type);
  const target = event.target;
  console.log('target:', event.target);
  console.log('target text content:', target.textContent);
};
/*for (heading of headings) {
  heading.addEventListener('mouseover', (event) => {
    console.log('event happened!');
    console.log('type:', event.type);
    const target = event.target;
    console.log('target:', event.target);
    console.log('target text content:', target.textContent);
  });
} */

for (head of heading) {
  head.addEventListener('mouseover', printEventDetails);
}
