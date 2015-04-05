// ==UserScript==
// @name slidesharemod
// @namespace scheakur.com
// @include http://www.slideshare.net/*
// @noframes
// @version 0.1.0
// @grant none
// ==/UserScript==

(function() {

  function disableAutoTransition() {
    let transit = document.querySelector('.next-container');
    transit.parentElement.removeChild(transit);
  }

  window.addEventListener('DOMContentLoaded', () => {
    disableAutoTransition();
  });

})();
