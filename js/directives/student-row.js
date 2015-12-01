(function(){
  angular.module("CrudTest")
  .directive('studentRow', studentRow);

  function studentRow(){
    return {
      restrict : 'E',
      templateUrl : '/templates/student-row.html',
      controller : 'StudentController',
      controllerAs : 'StudentCtrl'
    }
  }
})();


