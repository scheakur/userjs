// ==UserScript==
// @name googlesearchmod
// @namespace scheakur.com
// @include https://www.google.com/search*
// @include https://www.google.co.jp/search*
// @version 0.1.0
// ==/UserScript==

(function () {
  var search = document.querySelector('.nojsb').parentNode;
  var copied = search.cloneNode(true);

  var button = copied.querySelector('button');
  button.style.background = 'none repeat scroll 0% 0% transparent';
  // set parameter for `Past year`
  button.name = 'tbs';
  button.value = 'qdr:y';

  var mark = button.querySelector('.sbico');
  mark.classList.remove('sbico');
  mark.style.fontSize = 'medium';
  mark.style.color = 'white';
  mark.appendChild(document.createTextNode('1Y'));

  search.parentNode.appendChild(copied);
}());

