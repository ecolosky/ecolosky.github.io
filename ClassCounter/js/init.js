// =============================================================================
//      JS script for appending content
//      Ed Colosky
//      July, 2016
//=============================================================================
var div = document.createElement('div');
div.setAttribute('ng-controller', 'AController');
var content = '<div ng-repeat = "grp in groups">';
content += '<span ng-repeat="word in grp.classes" class="label {{word.color}}" style="font-size: {{word.size}};">{{word.class}}</span>';
content += '</div>';
div.innerHTML = content;
var rootDiv = document.body.firstChild;
console.log(rootDiv);
document.body.insertBefore(div,rootDiv);
var app = angular.module('bookmarklet', []);

app.run(function ($rootScope) {
  $rootScope.URL = location.href;
});
