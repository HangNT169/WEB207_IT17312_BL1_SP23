var app = angular.module("myModule", ["ngRoute"]);
// chuyen trang :route
app.config(function ($routeProvider, $locationProvider) {
  // Xoa khoang trang tren trinh duyet
  $locationProvider.hashPrefix("");
  // chuyen trang
  $routeProvider
    .when("/trang-chu", {
      // noi dung cua trang chu
      // lam gi thi lam
      template: `<section>
            <h1>Noi dung trang chu</h1>
            <h1>Noi dung trang chu</h1>
            <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
        </section>`,
    })
    .when("/chung-toi", {
      // noi dung cua trang chu
      // lam gi thi lam
      //   template: "<h1>Noi dung ve chung toi</h1>",
      templateUrl: "./pages/ve-chung-toi.html",
    })
    .when("/lien-he", {
      // noi dung cua trang chu
      // lam gi thi lam
      template: "<h1>Noi dung lien he</h1>",
    })
    .otherwise({
      redirectTo: "/trang-chu",
    });
});
