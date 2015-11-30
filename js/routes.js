(function(){
  angular.module('CrudTest')
  .config(function($routeProvider){
    $routeProvider.when('/students',{
      templateUrl : 'templates/pages/list/index.html',
      controller : 'StudentController',
      controllerAs : 'StudentCtrl'
    })
    .when('/', {
      templateUrl : 'templates/pages/list/index.html',
      controller : 'StudentController',
      controllerAs : 'StudentCtrl'
    })
    .when('/test', {
      template : 'it works!'
    })
    .otherwise({
      redirectTo : '/'
    });
  });
})();

