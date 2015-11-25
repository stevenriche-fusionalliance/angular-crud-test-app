(function(){
  angular.module("CrudTest", ['ngRoute'])
  .directive('studentRow', function(){
    return {
      restrict : 'E',
      templateUrl : '/templates/student-row.html',
      controller : function($http){
        var that = this;

        $http({method:'GET', url:'data/students.json'})
        .success(function(data){
          that.students = data;
        });

      },
      controllerAs : 'StudentCtrl'
    }
  });

})();


