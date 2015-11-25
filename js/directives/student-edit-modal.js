(function(){
  angular.module("CrudTest")
  .directive('studentEditModal', function(){
    return {
      restrict : 'E',
      templateUrl : '/templates/student-edit-modal.html'
    }
  });

})();