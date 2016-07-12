// =============================================================================
//      Angular JS controller for bookmarklet
//      Ed Colosky
//      July, 2016
//=============================================================================
app.controller('AController', function($scope, $attrs) {
  // if (!$attrs.model) throw new Error("No model for controller");

  // var found = false;
  // $scope.init = function(model){
  var dataModel = localStorage.getItem('_dataModel');
  localStorage.removeItem('_dataModel');
  dataModel = atob(dataModel);
  dataModel = JSON.parse(dataModel);
  $scope.groupsView = dataModel;
  console.log(dataModel);
  //
  // };

});
