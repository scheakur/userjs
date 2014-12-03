// ==UserScript==
// @name ldrmod
// @namespace scheakur.com
// @include http://reader.livedoor.com/reader/
// @include http://reader.livedoor.com/public/*
// @noframes
// @version 0.2.0
// @grant GM_openInTab
// ==/UserScript==

(function (w) {
  function ldrmod(w) {
    function prefetch() {
      var num = 10;
      w.get_unread.cache.max = 1000;
      w.Ordered.list.forEach(function (id) {
        if (num > 0 && !w.get_unread.cache.has(id) && w.subs_item(id).unread_count) {
          num--;
          w.prefetch(id);
        }
      });
    }

    function openInTab() {
      var item = w.get_active_item(true);
      if (!item) {
        return;
      }
      GM_openInTab(item.link);
    }

    w.addEventListener('load', function () {
      w.Keybind.add('m', prefetch);
      w.Keybind.add('v', openInTab);
    });
  }

  function contentEval(fn) {
    var source = ';(' + fn + ')(this);';
    var script = document.createElement('script');
    script.setAttribute('type', 'application/javascript');
    script.textContent = source;

    document.body.appendChild(script);
    document.body.removeChild(script);
  }

  exportFunction(function (url) {
    setTimeout(function () {
      GM_openInTab(url);
    }, 0);
  }, w, {defineAs: 'GM_openInTab'});
  contentEval(ldrmod);
}(this.unsafeWindow || this.window));
