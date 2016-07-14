// ================================================================
// 			  JS Script
// 			  Ed Colosky
// 			  July, 2016
// =================================================================
(function(){
  var appRoot = 'http://edcolosky.com/ClassCounter/';
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



  // Loading style definitions
  loadStyles([
    // appRoot + 'css/bootstrap.min.css',
    appRoot + 'css/style.css'
  ]);


  // Loading the scripts
  loadScripts([
    appRoot + "node_modules/jquery/dist/jquery.js",
    appRoot + "node_modules/jquery-bridget/jquery-bridget.js",
    appRoot + "node_modules/ev-emitter/ev-emitter.js",
    appRoot + "node_modules/desandro-matches-selector/matches-selector.js",
    appRoot + "node_modules/fizzy-ui-utils/utils.js",
    appRoot + "node_modules/get-size/get-size.js",
    appRoot + "node_modules/outlayer/item.js",
    appRoot + "node_modules/outlayer/outlayer.js",
    appRoot + "node_modules/masonry-layout/masonry.js",
    appRoot + "node_modules/imagesloaded/imagesloaded.js",
    appRoot + "node_modules/angular/angular.js",
    appRoot + "node_modules/angular-masonry/angular-masonry.js",
    appRoot + 'js/analyzer.js',
    appRoot + 'js/init.js',
    appRoot + 'js/controller.js'
  ], function() {
    // Initialization of angular app
    angular.element(document).ready(function($scope) {
      angular.bootstrap(document, ['bookmarklet']);
    });
  });


})();
