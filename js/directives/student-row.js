(function(){
  angular.module("CrudTest")
  .directive('studentRow', function(){
    return {
      restrict : 'E',
      templateUrl : '/templates/student-row.html',
      controller : 'GetController',
      controllerAs : 'StudentCtrl'
    }
  });

})();


