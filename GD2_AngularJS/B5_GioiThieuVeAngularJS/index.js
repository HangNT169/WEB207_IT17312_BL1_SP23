// B1: Khai bao module
var myApp = angular.module("myModule", []);

// B2: Khai bao controller
// Co 2 cach khai bao controller
// C1: Dung ham cu the
// Cu phap:
// ten bien cua module.controller("ten controller",ten function)
// myApp.controller("myController", myFunction);

// // $scope: la 1 bien (service). Dung de giao tiep giua model va view
// function myFunction($scope) {
//   $scope.message1 = "hello angular js";
// }

// C2: Ham nac danh
myApp.controller("myController", function ($scope) {
  // code
  // Gia tri la 1 String
  $scope.message1 = "hello angular js";
  // Gia tri la 1 Object
  //   Object: {}
  // Mang:[]
  // Cach khai bao 1 Object
  //   var employee = {
  //     firstName: "Hang",
  //     lastName: "Nguyen",
  //   };
  //   $scope.e = employee;
  $scope.e = {
    firstName: "Hang",
    lastName: "Nguyen",
  };
  // Cach khai bao 1 mang String
  $scope.mang = ["hihi1", "hihi2"];

  // Cach khai bao 1 mang Object
  $scope.mangObject = [
    {
      firstName: "Hang",
      lastName: "Nguyen",
    },
    {
      firstName: "Hang",
      lastName: "Nguyen",
    },
  ];

  // Cach goi 1 function
  $scope.tinhTong = function () {
    // logic tinh tong
    $scope.sum = $scope.numbe1 + $scope.numbe2;
  };
});
