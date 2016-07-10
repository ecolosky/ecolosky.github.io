var div = document.createElement('div');
div.setAttribute('ng-controller', 'AController');
div.innerHTML = '<div ng-repeat="view in views" id="{{view}}">';
document.body.appendChild(div);

var app = angular.module('bookmarklet', []);

app.run(function ($rootScope) {
  $rootScope.URL = location.href;
});
