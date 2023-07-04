'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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

///Button Scrolling

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  console.log('Curent scroll (X/Y)', window.scrollX, window.scrollY);

  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  //Modern way scrolling

  section1.scrollIntoView({ behavior: 'smooth' });
});

/////
// //PAGE NAVIGATION

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault(); // we use prevent default ,to prevent default behavior of the anchor element in HTML
//     const id = this.getAttribute('href'); //is at this wich is the current element
//     console.log(id);
//     document.querySelector('id').scrollIntoView({ behavior: 'smooth' });
//   });
// }); // it will return a node list and we can use it for each method in order to attach an event handler to each of the elements that are in the node list.

////❗Event Delegation
//We need 2 steps:
//1. Add eventListener to a common Parrent.
//2. Determine what element originated the event.

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //console.log(e.target); // event.target becomes very useful to see where that event happened

  //Matching Strategy to use just the elements that we are interested in
  // The best way is to check if target has the class wich we are interested in

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//////////////////////////////////
/////////////////////////////////
/////////////////////////////////

//
//❗✅ Attributes
// Standard
const logo = document.querySelector('.nav__logo');
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

////SCROLLING

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);
//   // console.log(e.target.getBoundingClientRect());
//   console.log('Curent scroll (X/Y)', window.scrollX, window.scrollY);

//   //Scrolling
//   // window.scrollTo(
//   //   s1coords.left + window.scrollX,
//   //   s1coords.top + window.scrollY
//   // );

//   // window.scrollTo({
//   //   left: s1coords.left + window.scrollX,
//   //   top: s1coords.top + window.scrollY,
//   //   behavior: 'smooth',
//   // });

//   //Modern way scrolling

//   section1.scrollIntoView({ behavior: 'smooth' });
// });

///❗✅TYPES OF EVENTS AND EVENT HANDLERS

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener: Great!You are reading the heading');
//   h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1); // we remove the event

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000); // we romove the event after 5 seconds passed
//
//h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great!You are reading the heading');
// };

///❗EVENT PROPAGATION
// rgb(255,255,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // Stop Propagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });

// //❗EVENT DELEGATION: IMPLEMENTING PAGE NAVIGATION
// //Its better not to use this solution
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault(); // we use prevent default ,to prevent default behavior of the anchor element in HTML
//     const id = this.getAttribute('href'); //is at this wich is the current element
//     console.log(id);
//     document.querySelector('id').scrollIntoView({ behavior: 'smooth' });
//   });
// }); // it will return a node list and we can use it for each method in order to attach an event handler to each of the elements that are in the node list.

// //✅ Event Delegation , Better to use for page navigation
// // In event delegation we use the fact events bubble up, and we do that by putting eventListener on a common parrent off all the elements that we are interested in.
// // We can catch that event in the parrent element and handle it there, because we know where the event acttaly originated (we can check by e.target = event.target)

// // In Event Delegation We need 2 steps:
// // 	1. We add the eventListener to a common parrent element off all elements which we are interested in
// // 	2. Determine what element originated the event( where the event was actually created)

// ////❗Event Delegation
// //We need 2 steps:
// //1. Add eventListener to a common Parrent.
// //2. Determine what element originated the event.
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();
//   //console.log(e.target); // event.target becomes very useful to see where that event happened
//   //Matching Strategy to use just the elements that we are interested in
//   // The best way is to check if target has the class wich we are interested in
//   if (e.target.classList.contains('nav__link')) {
//     const id = e.target.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   }
// });

// // We simply added 1 big event handler function to the parent elementof all the elements  interested in , and we detrmine where the click event came from

//
//❗✅ DOM TRAVERSING

const h1 = document.querySelector('h1'); // selecting elements

//✍️Going downwards: Selecting child elements
//querySelector() works on elements also not just on document
console.log(h1.querySelectorAll('.highlight')); // it will select all the elements with the hichlight class that are children of h1. It will work not matter how deep these child elements would be inside of h1 element
// if there is another elements with same name of the class they will not get selected because they are not children of the h1 element
console.log(h1.childNodes); // sometimes we can use direct children
console.log(h1.children); //works only for direct childrens
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//✍️Going Upwards: Selecting parents
console.log(h1.parentNode);
console.log(h1.parentElement);

//Most of the time we need a parent element which is not a direct parent
// Or we might need to find a parent element no matter how far in the DOM tree.
// for that we have:
console.log(
  (h1.closest('.header').style.background = 'var(--gradient-secondary)')
); // it selected the closest header to h1 element that has class .headear and aplied style to that element
// used all the time, mostly for event Delegation

console.log((h1.closest('h1').style.background = 'var(--gradient-primary)'));
/// closest() method finds parents
/// querySelector() finds children

/// Going Sideways: Selecting Siblings
// In JS we can acces directly siblings.
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

//If we really need all the siblings:
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.7)';
}); // we spread into an array and we loop over the array and we change astyle to all siblings except element itself
