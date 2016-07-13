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
  console.log(dataModel);

  $scope.bttnName = 'Ordered List';

  $scope.changeOrder = function(task){
    if($scope.bttnName == 'Ordered List'){
      // sort content
        var sortedDataModel = dataModel.slice(0);
        sortedDataModel.sort(function(a,b){
          return b.count -a.count;
        });
      $scope.view = sortedDataModel;
      $scope.bttnName = 'Word Cloud';
    }
    else{
      $scope.view = dataModel;
      $scope.bttnName = 'Ordered List';
    }

  };
  $scope.close = function(){
    document.getElementById('bookmarklet root').remove();
  };
});
