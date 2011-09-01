reload.js
=========

This module reloads the current webpage automatically based on given interval. This behavior can be particularly useful for testing. Just attach reloader to your test suite, let it run, develop and see your tests fail or pass.

There are more robust solutions, such as [LiveReload](https://github.com/mockko/livereload) and [reload](http://code.google.com/p/reloader/), available. Getting these to work may sometimes be quite difficult, however. That's why I came up with this little hack.


Basic Usage
-----------

The API itself is quite simple. The following example shows how to get reload.js to work:

```javascript
var r = reload(2000); // 2000 ms interval (min 500)

document.body.appendChild(r.ui()); // shows simple play/stop UI

r.play(); // set the thing on
```

In addition to "ui" and "play" methods there are "stop" and "interval" (get/set) methods.

License
-------

reload.js is available under MIT license. See LICENSE for more details.
