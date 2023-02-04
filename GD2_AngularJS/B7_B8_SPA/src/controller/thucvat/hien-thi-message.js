window.HienThi = function ($scope, $routeParams) {
  // $routeParams lay gia tri tren duong dan
  $scope.message = "Blue" + $routeParams.id;
};
