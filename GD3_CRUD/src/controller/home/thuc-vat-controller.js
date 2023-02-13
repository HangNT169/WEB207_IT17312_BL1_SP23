window.ThucVatController = function ($scope, $http) {
  // De giao tiep BE, FE
  // => Phuong thuc HTTP
  // Voi cac HTTP Method : GET,POST,PUT,DELETE.....
  // CRUD: CREATE, READ, UPDATE, DELETE
  // request : la gia tri duoc truyen tu client ve server(FE =>BE)
  // => Giong tham so cua 1 function
  // response : la gia tri nhan duoc tu server tra cho clien
  // (BE => FE)
  // => Giong ket qua tra ve cua 1 function
  // GET: Lay du lieu  <=> READ <=> SELECT
  $scope.listThucVat = [];
  $http.get(thucVatAPI).then(function (response) {
    // console.log(response.data);
    $scope.listThucVat = response.data;
  });

  // Detail
  $scope.detailThucVat = function (event, index) {};

  // Remove : Xoa khoi table <=> DELETE <=> DELETE <=> DELETE
  $scope.removeThucVat = function (event, index) {
    event.preventDefault();
    let tv = $scope.listThucVat[index];
    let api = thucVatAPI + "/" + tv.id;
    $http.delete(api).then(function () {
      $scope.listThucVat.splice(index, 1);
      alert("Xoa thanh cong");
    });
  };
};
