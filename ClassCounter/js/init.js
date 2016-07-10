// =============================================================================
//      JS script for appending content
//      Ed Colosky
//      July, 2016
//=============================================================================
var div = document.createElement('div');
div.setAttribute('ng-controller', 'AController');
div.innerHTML = '<ul><li ng-repeat="view in views"> {{view}}</li></ul>';
document.body.appendChild(div);

var app = angular.module('bookmarklet', []);

app.run(function ($rootScope) {
  $rootScope.URL = location.href;
});
