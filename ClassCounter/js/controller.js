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
    var groupsModel = [];
    for(key in classes){
      console.log(key);
      // i will be equal to the count of each class - 1
      var i = classes[key]-1;
      // generate index if needed
      while(groupsModel[i] == undefined){
        groupsModel.push({classes: []});
      }
      groupsModel[i].classes.push(key);
    }
    
    var colorPicker = groupsModel.length-1;
    for(grp in groupsModel){
      groupsModel[grp].classes.sort();
      groupsModel[grp].count = grp+1;
      if(colorPicker % 2 == 0){
        // set to blue
        groupsModel[grp].color = "label-primary"
      }
      else{
        // set to yellow
        groupsModel[grp].color = "label-warning"
      }
      // set size of text
      groupsModel[grp].size = 34 - (2*groupsModel.length) + (grp *2)

      colorPicker --;
      console.log(grp);
    }
    groupsModel.reverse();
    $scope.groupsView = groupsModel;
});
