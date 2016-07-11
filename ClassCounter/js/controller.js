// =============================================================================
//      Angular JS controller for bookmarklet
//      Ed Colosky
//      July, 2016
//=============================================================================
app.controller('AController', function($scope, $http) {
  $scope.views = ['a', 'b', 'c'];
  // populate class objects
  $scope.classArr = [];
  var found = false;
    [].forEach.call(document.querySelectorAll("*"), function(element) {
      if (element.className) {
        var tempClassArr = element.className.split(" ");
        for (var i = 0; i < tempClassArr.length; i++) {
          found = false;
          for(var x = 0; x < $scope.classArr.length; x++){
            if (tempClassArr[i] == $scope.classArr[x].class) {
              $scope.classArr[x].count = $scope.classArr[x].count + 1;
              found = true;
              break
            }
          }
          if(found == false){$scope.classArr.push({class: tempClassArr[i], count: 1});}
        }
      }
    });

});
