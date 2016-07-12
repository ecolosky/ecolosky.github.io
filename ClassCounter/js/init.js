// =============================================================================
//      JS script for
//          1) analysing css classes
//          2) appending HTML content
//      Ed Colosky
//      July, 2016
//=============================================================================
// append new div for population
var div = document.createElement('div');
div.setAttribute('ng-controller', 'AController');
var content = '<div class="bookmarklet outer" >';
content += '<div class = "bookmarklet header"><h2><b>Class</b>Counter</h2></div>';
content += '<div class = "bookmarklet inner">';
content += '<div class="bookmarklet group" ng-repeat = "grp in groupsView">';
content += '<span class="bookmarklet class badge">{{grp.count}}</span>'
content += '<span ng-repeat="word in grp.classes" class="label class {{grp.color}}" style= {{grp.size}}>{{word}}</span>';
content += '</div>';
content += '</div>';
content += '</div>';
div.innerHTML = content;
var rootDiv = document.body.firstChild;
document.body.insertBefore(div,rootDiv);
var app = angular.module('bookmarklet', []);


app.run(function ($rootScope) {
  $rootScope.URL = location.href;
});
