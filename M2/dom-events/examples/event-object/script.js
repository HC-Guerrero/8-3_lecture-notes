<<<<<<< HEAD
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
=======
const headings = document.querySelectorAll('h1');

const printEventDetails = (e) => {
  console.log('event happened!');
  console.log('type: ', e.type);
  const target = e.target;
  console.log('target: ', target);
  console.log('target text content: ', target.textContent);
};

for (heading of headings) {
  heading.addEventListener('mouseover', printEventDetails);
>>>>>>> e23cf7d401a4124e250bdb6ea310c3845f0d55fe
}
