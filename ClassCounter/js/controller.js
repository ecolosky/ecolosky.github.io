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
      // console.log(key);
      // i will be equal to the count of each class - 1
      var i = classes[key]-1;
      // generate index if needed
      while(groupsModel[i] == undefined){
        groupsModel.push({classes: []});
      }
      groupsModel[i].classes.push(key);
    }

    var colorPicker = groupsModel.length-1;
    var maxCount = groupsModel.length;
    for(grp in groupsModel){
      // clean up array of empty counts
      if(groupsModel[grp].classes.length == 0 || groupsModel[grp].classes[0] == ""){
        groupsModel[grp].classes.pop();
        continue;
      }
      // organise classes alphabetically
      groupsModel[grp].classes.sort();
      // assign count attribute
      groupsModel[grp].count = parseInt(grp)+1;

      // alternate colors per line
      if(colorPicker % 2 == 0){
        // set to blue
        groupsModel[grp].color = "label-primary"
      }
      else{
        // set to yellow
        groupsModel[grp].color = "label-warning"
      }
      colorPicker --;

      // set size of text by normalizing count vector
      var normalVal = (groupsModel[grp].count)/(maxCount) * 250
      if(normalVal > 65){
        groupsModel[grp].size = 'font-size: '+ normalVal.toString() + '%;';
      }
      // size min threshold of 65
      else{
        groupsModel[grp].size = 'font-size: 65%;';
      }



      console.log(groupsModel[grp]);
    }
    groupsModel.reverse();
    console.log(groupsModel.length);
    $scope.groupsView = groupsModel;
});
