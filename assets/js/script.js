'use strict';

// Add Events on multible elments

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}


//preloading

const loadingElements = document.querySelector("[data-loading]");

window.addEventListener("load", function () {
    loadingElements.classList.add("loaded");
    document.body.classList.remove("active")
});

//MOPILE NAV TOGGLE

const [navToggLers, navLinks, navbar, overlay] = [
    document.querySelectorAll("[data-nav-toggler]"),
    document.querySelectorAll("[data-nav-link]"),
    document.querySelector("[data-navbar]"),
    document.querySelector("[data-overlay]")
];

const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active")
};

addEventOnElements(navToggLers, "click", toggleNav);

const closeNav = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("active");
}

addEventOnElements(navLinks, "click", closeNav);

// HEADER

const header = document.querySelector("[data-header]");

const activeElementOnScroll = function () {
  if (window.scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElementOnScroll);

/*
*   TEXT ANIMATION EFFECT FOR HERO SECTION
*/ 

// const letterBoxes = document.querySelectorAll("[data-letter-effect]");

// let activeLetterBoxIndix = 0;
// let lastActiveLetterBoxIndix = 0;
// let lastLetterBoxDelay = 0;

// const setLetterEffect = function () {

//   //loop through all letter boxes
//   for (let i = 0; i < letterBoxes.length; i++) {
//     //set initial animation delay
//     let letterAnimationDelay = 0;

//     //get all character from the current letter box
//     const letters = letterBoxes[i].textContent.trim();
//     //Remove all the character from current letter box
//     letterBoxes[i].textContent = "";

//     //loop through all letters
//     for (let j = 0; j < letters.length; j++) {

//       //create a span
//       const span = document.createElement("span");

//       //set animation delay in span
//       span.style.animationDelay = `${letterAnimationDelay}s`;

//       //set the "in" class in the span, if current letter vox is active
//       //otherwise class is "out"
//       if (i === activeLetterBoxIndix) {
//         span.classList.add("in");
//       } else {
//         span.classList.remove("out");
//       }

//       //pass current letter into span
//       span.textContent = letters[j];

//       //add space class on span, when current letter contain space
//       if (letters[j] === " ") span.classList.add("space");

//       //pass the span on current letter box
//       letterBoxes[i].appendChild(span);

//       //skip letterAnimatioDelay when loop is  in the last indix
//       if (j >= letters.length - 1) break;
//       //otherwise update
//       letterAnimationDelay += 0.05;

//     }

//     //get total delay of active letter box
//     if (i = activeLetterBoxIndix) {
//       totalLetterBoxDelay = Number(letterAnimationDelay.toFixed(2));
//     }

//     // add active class on last active letter box
//     if (i === lastActiveLetterBoxIndix) {
//       letterBoxes[i].classList.add("active")
//     } else {
//       letterBoxes[i].classList.remove("active")
//     }

//   }

//   setTimeout (function () {
//     lastActiveLetterBoxIndix = activeLetterBoxIndix;

//     //update active letter box indix based on total letter boxes
//     activeLetterBoxIndix >= letterBoxes.length - 1 ? activeLetterBoxIndix = 0 : 
//     activeLetterBoxIndix++;

//     letterEffec();
//   }, (totalLetterBoxDelay *  1000) + 3000);

// }

// // call the letter effect function after window loaded

// window.addEventListener("load", setLetterEffect);

const letterBoxes = document.querySelectorAll("[data-letter-effect]");

let activeLetterBoxIndex = 0;
let lastActiveLetterBoxIndex = 0;
let totalLetterBoxDelay = 0;

const setLetterEffect = function () {

  // loop through all letter boxes
  for (let i = 0; i < letterBoxes.length; i++) {
    // set initial animation delay
    let letterAnimationDelay = 0;

    // get all character from the current letter box
    const letters = letterBoxes[i].textContent.trim();
    // remove all character from the current letter box
    letterBoxes[i].textContent = "";

    // loop through all letters
    for (let j = 0; j < letters.length; j++) {

      // create a span
      const span = document.createElement("span");

      // set animation delay on span
      span.style.animationDelay = `${letterAnimationDelay}s`;

      // set the "in" class on the span, if current letter box is active
      // otherwise class is "out"
      if (i === activeLetterBoxIndex) {
        span.classList.add("in");
      } else {
        span.classList.add("out");
      }

      // pass current letter into span
      span.textContent = letters[j];

      // add space class on span, when current letter contain space
      if (letters[j] === " ") span.classList.add("space");

      // pass the span on current letter box
      letterBoxes[i].appendChild(span);

      // skip letterAnimationDelay when loop is in the last index
      if (j >= letters.length - 1) break;
      // otherwise update
      letterAnimationDelay += 0.05;

    }

    // get total delay of active letter box
    if (i === activeLetterBoxIndex) {
      totalLetterBoxDelay = Number(letterAnimationDelay.toFixed(2));
    }

    // add active class on last active letter box
    if (i === lastActiveLetterBoxIndex) {
      letterBoxes[i].classList.add("active");
    } else {
      letterBoxes[i].classList.remove("active");
    }

  }

  setTimeout(function () {
    lastActiveLetterBoxIndex = activeLetterBoxIndex;

    // update activeLetterBoxIndex based on total letter boxes
    activeLetterBoxIndex >= letterBoxes.length - 1 ? activeLetterBoxIndex = 0 : activeLetterBoxIndex++;

    setLetterEffect();
  }, (totalLetterBoxDelay * 1000) + 3000);

}

// call the letter effect function after window loaded
window.addEventListener("load", setLetterEffect);
