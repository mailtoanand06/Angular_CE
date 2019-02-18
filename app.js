(function (){
  angular.module("FirstApp",[])

  .controller("FirstController", function($scope){
    $scope.name = "Evans";

    $scope.sayName = function () {
       return "Hello Evans!!";
    };
  });
})();
