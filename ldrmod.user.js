// ==UserScript==
// @name ldrmod
// @namespace scheakur.com
// @include http://reader.livedwango.com/reader/
// @include http://reader.livedoor.com/reader/
// @include http://reader.livedoor.com/public/*
// @noframes
// @version 0.3.0
// @grant GM_openInTab
// ==/UserScript==

(function(w) {
  function ldrmod(w) {
    function prefetch() {
      var num = 10;
      w.get_unread.cache.max = 1000;
      w.Ordered.list.forEach((id) => {
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

    w.addEventListener('load', () => {
      w.Keybind.add('m', prefetch);
      w.Keybind.add('v', openInTab);
    });
  }

  function contentEval(fn) {
    let source = ';(' + fn + ')(this);';
    let script = document.createElement('script');
    script.setAttribute('type', 'application/javascript');
    script.textContent = source;

    document.body.appendChild(script);
    document.body.removeChild(script);
  }

  exportFunction((url) => {
    setTimeout(() => {
      GM_openInTab(url);
    }, 0);
  }, w, {defineAs: 'GM_openInTab'});
  contentEval(ldrmod);
}(this.unsafeWindow || this.window));
