// ==UserScript==
// @name slidesharemod
// @namespace scheakur.com
// @version 0.1.0
// @author scheakur
// @match https://www.slideshare.net/*
// @grant none
// ==/UserScript==

(function() {
  const disableAutoTransition = () => {
    const transit = document.querySelector(".next-container");
    transit.parentElement.removeChild(transit);
  };

  window.addEventListener("load", disableAutoTransition);
})();
