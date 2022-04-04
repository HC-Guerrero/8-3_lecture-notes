const BASE_URL = 'https://randomuser.me/api';

// create a function to display dom elements from the api response
const displayUser = ({ results }) => {
  console.log(results);
  const [person] = results;

  const { title, first, last } = person.name;
  const fullName = `${title} ${first} ${last}`;
  const { email } = person;

  const section = document.createElement('section');
  section.classList.add(`card`);
  //display title, and name
  const h2 = document.createElement('h2');
  h2.textContent = fullName;

  //display the profile photo
  const img = document.createElement('img');
  img.setAttribute('src', picture.medium);
  img.setAttribute('alt', fullName);
  //display email
  const p = document.createElement('p');
  p.textContent = email;
  //apend all the lements to the dom
  section.append(h2, img, p);
  document.querySelector('.people').append(section);
};
// create a function to display errors from the api response
const displayError = (error) => {
  const section = document.querySelector('section.error');
  section.style.display = 'block';
  const p = document.createElement('p');
  p.textContent = 'Something went wrong!';
  const errorMsg = document.createElement('p');
  section.append(p.errorMsg);
  console.log(error);
};
// fetch url data
const button = document.querySelector('button');
console.log(button.textContent);

button.addEventListener(
  ('click',
  () => {
    fetch(BASE_URL)
      .then((res) => {
        return res.json();
      })
      .then(displayUser)
      .catch(displayError);
  }),
);
