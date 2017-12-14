var app = angular.module('myApp',[]);

function headerControl($scope){
  $scope.header = {name : "header.html", url : "header.html"};
}
app.controller('stylistController' , ['$scope', function($scope) {
  $scope.stylists = [
    {
      "profile_pic" : "images/logo/logo1.jpg",
      "uname" : "jano",
      "desc" : "jjjj"
    },
    {
      "profile_pic" : "images/logo/logo1.jpg",
      "uname" : "charr",
      "desc" : "jjjcccccj"
    },
    {
      "profile_pic" : "images/logo/logo1.jpg",
      "uname" : "vanb",
      "desc" : "jjjvvvvvvj"
    }
  ];
  $scope.stylists1 = [
    {
      "profile_pic" : "images/logo/logo1.jpg",
      "uname" : "chafhfrr",
      "desc" : "hgdh"
    },
    {
      "profile_pic" : "images/logo/logo1.jpg",
      "uname" : "h",
      "desc" : "fgdf"
    }
  ];
  $scope.stylists2 = [
    {
      "profile_pic" : "images/logo/logo1.jpg",
      "uname" : "yyy",
      "desc" : "htsd"
    },
    {
      "profile_pic" : "images/logo/logo1.jpg",
      "uname" : "www",
      "desc" : "dffffffffffff"
    }
  ];
}]);

app.controller('salonController' , ['$scope', function($scope) {
  $scope.salons = [
    {
      "profile_pic" : "images/logo/logo1.jpg",
      "sname" : "jano",
      "desc" : "jjjj"
    },
    {
      "profile_pic" : "images/logo/logo1.jpg",
      "sname" : "charr",
      "desc" : "jjjcccccj"
    },
    {
      "profile_pic" : "images/logo/logo1.jpg",
      "sname" : "vanb",
      "desc" : "jjjvvvvvvj"
    }
  ];
  $scope.salons1 = [
    {
      "profile_pic" : "images/logo/logo1.jpg",
      "sname" : "chafhfrr",
      "desc" : "hgdh"
    },
    {
      "profile_pic" : "images/logo/logo1.jpg",
      "sname" : "h",
      "desc" : "fgdf"
    }
  ];
  $scope.salons2 = [
    {
      "profile_pic" : "images/logo/logo1.jpg",
      "sname" : "yyy",
      "desc" : "htsd"
    },
    {
      "profile_pic" : "images/logo/logo1.jpg",
      "sname" : "www",
      "desc" : "dffffffffffff"
    }
  ];
}]);
