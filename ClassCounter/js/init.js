// =============================================================================
//      JS script for appending content
//      Ed Colosky
//      July, 2016
//=============================================================================
var div = document.createElement('div');
div.setAttribute('ng-controller', 'AController');
var content = '<div ng-repeat = "grp in groupsView">';
content += '<span ng-repeat="word in grp.classes" class="label {{grp.color}}" style="font-size: grp.size;">{{word}}</span>';
content += '</div>';
div.innerHTML = content;
var rootDiv = document.body.firstChild;
console.log(rootDiv);
document.body.insertBefore(div,rootDiv);
var app = angular.module('bookmarklet', []);


app.run(function ($rootScope) {
  $rootScope.URL = location.href;
});
