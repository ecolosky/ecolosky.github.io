// =============================================================================
//      Angular JS controller for bookmarklet
//      Ed Colosky
//      July, 2016
//=============================================================================
app.controller('AController', function($scope, $http) {
  $scope.views = ['a', 'b', 'c'];
  $scope.rootNode = document.querySelectorAll("*");
});
