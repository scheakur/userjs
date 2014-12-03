// ==UserScript==
// @name googlesearchmod
// @namespace scheakur.com
// @include https://www.google.com/search*
// @include https://www.google.co.jp/search*
// @noframes
// @version 0.1.0
// ==/UserScript==

(function () {
  var search = document.querySelector('.nojsb').parentNode;
  var copied = search.cloneNode(true);

  var button = copied.querySelector('button');
  button.addEventListener('click', function () {
    if (document.f.q.value !== '') {
      document.querySelector('.past-year-param').disabled = false;
    }
  });

  var pastYear = document.createElement('input');
  pastYear.classList.add('past-year-param');
  pastYear.type = 'hidden';
  pastYear.name = 'tbs';
  pastYear.value = 'qdr:y';
  pastYear.disabled = true;

  copied.appendChild(pastYear);

  var mark = button.querySelector('.sbico');
  mark.classList.remove('sbico');
  mark.style.fontSize = 'medium';
  mark.style.color = 'white';
  mark.appendChild(document.createTextNode('1Y'));

  search.parentNode.insertBefore(copied, search.nextElementSibling);
}());

