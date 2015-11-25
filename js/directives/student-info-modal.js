(function(){
  angular.module("CrudTest")
  .directive('studentInfoModal', function(){
    return {
      restrict : 'E',
      templateUrl : '/templates/student-info-modal.html'
    }
  });

})();