// ==UserScript==
// @name         5ch list
// @namespace    https://scheakur.com/
// @version      0.1
// @author       scheakur
// @match        http://*.5ch.net/*/subback.html
// @match        https://*.5ch.net/*/subback.html
// @grant        none
// ==/UserScript==

(function() {
  document.querySelectorAll("a").forEach(a => {
    if (a.href.endsWith("/l50")) {
      a.href = a.href.replace(/\/l50$/, "");
    }
  });
})();
