// ================================================================
// 			  JS Script
// 			  Ed Colosky
// 			  July, 2016
// =================================================================
(function(){

  // Load the script from url and when it's ready loading run the callback.
  function loadScript(url, callback) {
    var script = document.createElement('script');
    script.src = url;

    // Attach handlers for all browsers
    var done = false;
    script.onload = script.onreadystatechange = function() {
      if(
          !done && (
          !this.readyState ||
          this.readyState === 'loaded' ||
          this.readyState === 'complete')
        ) {
        done = true;

        // Continue code
        callback();

        // Handle memory leak in IE
        script.onload = script.onreadystatechange = null;
        document.head.removeChild(script);
      }
    };

    document.head.appendChild(script);
  }

  // Load a list of scripts
  var loadScripts = function(scripts, cb) {
    var script;
    if(scripts.length) {
      script = scripts.shift();
      loadScript(script, function(){
        loadScripts(scripts.slice(0), cb);
      });
    } else {
      if (cb) { cb(); }
    }
  };
  // Load a list of styles
  var loadStyles = function(csss) {
    var css, i, len;
    for (i = 0, len = csss.length; i < len; i++) {
      css =  csss[i];
      var e = document.createElement('link');
      e.setAttribute('rel','stylesheet');
      e.setAttribute('href', css);
      document.head.appendChild(e);
    }
  };

  var appRoot = 'http://edcolosky.com/ClassCounter/';

  // Loading style definitions
  loadStyles([
    appRoot + 'css/bootstrap.min.css',
    appRoot + 'css/style.css'
  ]);

  // Loading the scripts
  loadScripts([
    'https://ajax.googleapis.com/ajax/libs/angularjs/1.1.4/angular.min.js',
    // appRoot + 'angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
    appRoot + 'js/init.js',
    appRoot + 'js/controller.js'
  ], function() {
    // Initialization of angular app
    angular.element(document).ready(function() {
      angular.bootstrap(document, ['bookmarklet']);
    });
  });

})();
