// =============================================================================
//      JS script for appending content
//      Ed Colosky
//      July, 2016
//=============================================================================
var div = document.createElement('div');
div.setAttribute('ng-controller', 'AController');
var content = '<ul>';
content += '<li ng-repeat="view in views"> {{view}}</li>';
content += '</ul>';
div.innerHTML = content;


var app = angular.module('bookmarklet', []);

app.run(function ($rootScope) {
  $rootScope.URL = location.href;
});
var rootDiv = "{{rootDiv}}";
document.body.insertBefore(rootDiv,div);
