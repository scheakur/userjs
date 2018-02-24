// ==UserScript==
// @name irodrmod
// @namespace scheakur.com
// @include http://irodr.netlify.com/
// @noframes
// @version 0.2.0
// @grant GM_openInTab
// ==/UserScript==

(function() {
  "use strict";

  function openInBackgroundTab() {
    const content = userScript.getActiveContent();

    if (!content) {
      return;
    }

    GM_openInTab(content.url, {
      active: false,
      insert: true,
      setParent: true
    });
  }

  let tryCount = 0;

  function retry(fn) {
    if (tryCount++ < 10) {
      setTimeout(() => {
        fn();
      }, 33);
    }
  }

  function setup() {
    if (typeof userScript === "undefined") {
      retry(setup);
      return;
    }

    const unsubscribe = userScript.event.subscribe(
      "SubscriptionContent::componentDidMount",
      content => {
        userScript.registerKey("v", openInBackgroundTab);
        unsubscribe();
      }
    );
  }

  setup();
})();
