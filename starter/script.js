'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////
/////////////////////////////////
/////////////////////////////////

//❗✅ Selecting Elements

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const header = document.querySelector('.header'); // when we want to select an element
const allSections = document.querySelectorAll('.section'); // when we want to select all elements
console.log(allSections);
document.getElementById('section--1'); // # we use this id selector just for querrySelector('#section--1') methods.

const allButtons = document.getElementsByTagName('button'); // this is a HTMLCollection // we dont use the selector ('.button')
console.log(allButtons);
// if we delete a button from the collection it will update automaticaly

console.log(document.getElementsByClassName('btn')); // it will return a live HTMLCollection// we don't need the selector ('.btn') because its the name of the classes

////✅❗CREATING and INSERTING Elements✅
//.insertAdjacentHTML();
const message = document.createElement('div'); // create a DOM element and store that element in to the message
// the element is not yet in to the DOM , all this is a DOM obj which we can use to do something on it
//🖍️We can add classes on it for example
message.classList.add('cookie-message'); // we programaticaly build an element wich will display a small cokie message on the bottom of the screen
message.textContent = 'We use cookies for improves functionality';
message.innerHTML =
  'We use cookies for improves functionality. <button class ="btn btn--close-cookie">Got it!</button>';
//❗header.prepend(message); // prepend add the element as first child of the header element
header.append(message); // append add the element as last child
// we can use prepend ans append  not only to insert elements but also to move elements, that because the DOM element is unique it can exist at one place at the time

//header.append(message.cloneNode(true)); // if we want to insert multiple copies of the same element, we have to copy the first element

//❗ header.before(message);
//❗header.after(message);

////✅ DELETE ELEMENTS
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    //message.parentElement.removeChild(message); // old way of remove elements
  });

///❗✅STYLE

message.style.backgroundColor = 'black';
message.style.width = '120%';

console.log(message.style.color); // we get nothing because using the style property ,only works for inline styles that we set ourselvs also using the style property
console.log(message.style.backgroundColor); // these is an inline style ,we set it manualy ourselfs.

//❗We can get the style hidden in a class with the function:

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height); // we can get acces to a value even if  we dont computed ourselfs
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + -5 + 'px';
//message.style.height = '50px';

const cookieButton = document.querySelector('.btn--close-cookie');
cookieButton.style.height =
  Number.parseFloat(getComputedStyle(cookieButton).height, 10) + -5 + 'px';
//cookieButton.style.height = '40px';

//❗CSS Customed Properties (wich we call CSS variables)
document.documentElement.style.setProperty('--color-primary', 'orangered');

//❗✅ Attributes
// Standard
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);
console.log(logo.src); // this is the absolute version
console.log(logo.getAttribute('src')); // this is the relative version of the folder where the absolute version is located
// ON links
const link = document.querySelector('.nav__link--btn');
console.log(link.href); //this return absolute value
console.log(link.getAttribute('href')); // return the value of wich we write it in html (relative version)
//❗Setting the vallue of the attributes
logo.alt = 'Beautigul minimalist logo';

//Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist'); // Setting (creating atributes)

// DATA ATTRIBUTES (Special Types of Atributes )
console.log(logo.dataset.versionNumber); // here we use camelCase and in html we have the - (dash)
// ✍️this special attributes are always stored in the dataset object

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

//////Continue of aplication

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log('Curent scroll (X/Y)', window.scrollX, scrollY);

  //Scrolling
  window.scrollTo(
    s1coords.left + window.scrollX,
    s1coords.top + window.scrollY
  );
});
