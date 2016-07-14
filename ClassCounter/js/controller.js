// =============================================================================
//      Angular JS controller for bookmarklet
//      Ed Colosky
//      July, 2016
//=============================================================================
app.controller('AController', function($scope, $attrs) {

  var dataModel = localStorage.getItem('_dataModel');
  if (!dataModel) throw new Error("no data was stored in local storage for the controller");
  localStorage.removeItem('_dataModel');
  dataModel = atob(dataModel);
  dataModel = JSON.parse(dataModel);
  $scope.view = dataModel;

// button to switch view
  // $scope.bttnName = 'Word cloud';
  // $scope.changeOrder = function(task){
  //   if($scope.bttnName == 'Ordered arrangement'){
  //     // sort content
  //     $scope.view = sortedDataModel;
  //     $scope.bttnName = 'Word cloud';
  //   }
  //   else{
  //     $scope.view = dataModel;
  //     $scope.bttnName = 'Ordered arrangement';
  //   }
  //
  // };
  $scope.close = function(){
    document.getElementById('bookmarklet root').remove();
  };
});
