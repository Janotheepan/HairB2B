app.controller('swapSearch',['$scope',function($scope){
  $scope.changeSearch = function(searchName){

    if (searchName == 'Name'){
      var typ1='Skill';

      return typ1;
    }
    else {
     var typ = 'Name';
     return typ;
    };
  };
}]);
