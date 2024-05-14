'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);











 // Disable right-clicking on the entire document
// document.addEventListener("contextmenu", function(event) {
//   event.preventDefault();
// });



document.addEventListener("DOMContentLoaded", function() {
  // Show the custom context menu on right-click
  document.addEventListener("contextmenu", function(event) {
      event.preventDefault(); // Prevent the default context menu
      showContextMenu(event.clientX, event.clientY);
  });

  // Hide the custom context menu when clicking outside
  document.addEventListener("click", function() {
      hideContextMenu();
  });

  // Function to show the custom context menu
  function showContextMenu(x, y) {
      var contextMenu = document.getElementById("context-menu");
      contextMenu.style.display = "block";
      contextMenu.style.left = x + "px";
      contextMenu.style.top = y + "px";
  }

  // Function to hide the custom context menu
  function hideContextMenu() {
      var contextMenu = document.getElementById("context-menu");
      contextMenu.style.display = "none";
  }

  // Event listeners for each context menu item
  document.getElementById("select").addEventListener("click", function() {
      // Add functionality for "Select" option here
    
      hideContextMenu();
  });

  document.getElementById("copy").addEventListener("click", function() {
      // Add functionality for "Copy" option here
    
      hideContextMenu();
  });

  document.getElementById("follow-instagram").addEventListener("click", function() {
      // Add functionality for "Follow me on Instagram" option here
      
      hideContextMenu();
  });

  document.getElementById("inspect").addEventListener("click", function() {
    // Add functionality for "Select" option here
    alert("Permission denied 🙃");
    hideContextMenu();
  });
});
