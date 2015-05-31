// ==UserScript==
// @name googlesearchmod
// @namespace scheakur.com
// @include https://www.google.com/search*
// @include https://www.google.co.jp/search*
// @noframes
// @version 0.2.1
// ==/UserScript==

(function() {
  function newContainer() {
    let div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.top = '180px';
    div.style.left = '20px';
    return div;
  }


  function newCategory(text) {
    let div = document.createElement('div');
    let header = document.createElement('h4');
    header.appendChild(document.createTextNode(text));
    div.appendChild(header);
    return div;
  }


  function extractParams() {
    return window.location.search.replace(/^\?/, '').split('&').map((q) => {
      return q.split('=');
    });
  }


  function changeUrl(name, value) {
    let loc = window.location;
    let base = loc.href.replace(loc.search, '');
    let params = extractParams().filter((kv) => {
      let key = kv[0];
      return (key !== name) && ['q', 'lr', 'tbs'].indexOf(key) >= 0;
    }).map((kv) => {
      return kv.join('=');
    }).join('&') + '&' + name + '=' + value;
    loc.href = base + '?' + params;
  }


  function newRadio(name, value, text, checked) {
    let radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = name;
    radio.value = value;
    radio.checked = checked;
    radio.addEventListener('change', () => {
      changeUrl(name, value);
    });

    let label = document.createElement('label');
    label.style.display = 'block';
    label.appendChild(radio);
    label.appendChild(document.createTextNode(text));
    return label;
  }


  var material = [
    {
      header: 'Language',
      name: 'lr',
      values: [
        ['lang_ja', 'Japnese'],
        ['lang_en', 'English'],
        ['', 'Any'],
      ],
    },
    {
      header: 'Time',
      name: 'tbs',
      values: [
        ['qdr:h', '1 Hour'],
        ['qdr:d', '1 Day'],
        ['qdr:w', '1 Week'],
        ['qdr:m', '1 Month'],
        ['qdr:y', '1 Year'],
        ['', 'Any'],
      ],
    },
  ];


  function main() {
    let params = extractParams();
    let container = newContainer();

    material.forEach((category) => {
      let cat = newCategory(category.header);
      category.values.forEach((vl) => {
        let checked = params.filter((kv) => {
          return kv[0] === category.name && kv[1] === vl[0];
        }).length > 0;
        cat.appendChild(newRadio(category.name, vl[0], vl[1], checked));
      });
      container.appendChild(cat);
    });

    let base = document.querySelector('#akp').parentElement;
    base.appendChild(container);
  }


  main();

}());

