// ==UserScript==
// @name         5ch thread
// @namespace    https://scheakur.com/
// @version      0.1
// @author       scheakur
// @match        http://*.5ch.net/test/read.cgi/*
// @match        https://*.5ch.net/test/read.cgi/*
// @grant        none
// ==/UserScript==

(function() {
  document.querySelectorAll("a").forEach(a => {
    if (a.href.startsWith("http://jump.5ch.net/?")) {
      a.href = a.href.replace(/^http:\/\/jump\.5ch\.net\/\?/, "");
      a.target = "_blank";
    }
  });
})();
