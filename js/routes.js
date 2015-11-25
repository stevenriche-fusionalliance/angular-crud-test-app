(function(){
  angular.module('CrudTest')
  .config(function($routeProvider){
    $routeProvider.when('/students',{
      templateUrl : 'templates/pages/list/index.html'
    })
    .when('/', {
      templateUrl : 'templates/pages/list/index.html'
    })
    .when('/test', {
      template : 'it works!'
    })
    .otherwise({
      redirectTo : '/'
    });
  });
})();

