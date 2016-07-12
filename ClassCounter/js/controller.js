// =============================================================================
//      Angular JS controller for bookmarklet
//      Ed Colosky
//      July, 2016
//=============================================================================
app.controller('AController', function($scope, $http) {
  $scope.views = ['a', 'b', 'c'];
  // populate class objects
  var classes = {};
  // var found = false;
    [].forEach.call(document.querySelectorAll("*"), function(element) {
      if (element.className) {
        var tempClassArr = element.className.split(" ");
        for(i in tempClassArr) {
          if (tempClassArr[i] in classes) {
            classes[tempClassArr[i]] ++;
          }else{
            classes[tempClassArr[i]] = 1;
          }
        }
      }
    });
    //group by frequency
    var groups = [];
    for(key in classes){
      // i will be equal to the count of each class - 1
      var i = classes[key]-1;
      // generate index if needed
      while(groups[i] == undefined){
        groups.push({classes: []});
      }
      groups[i].classes.push(key);
    }
    var colorPicker = groups.length-1;
    for(grp in groups){
      groups[grp].classes.sort();
      groups[grp].count = grp+1;
      if(colorPicker % 2 == 0){
        // set to blue
        groups[grp].color = "label-primary"
      }
      else{
        // set to yellow
        groups[grp].color = "label-warning"
      }
      // set size of text
      groups[grp].size = 34 - (2*groups.length) + (grp *2)

      colorPicker --;
    }
    groups.reverse();
    $scope.groups = groups;
});
