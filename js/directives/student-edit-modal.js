(function(){
  angular.module("CrudTest")
  .directive('studentEditModal', studentEditModal);

  function studentEditModal(){
    return {
      restrict : 'E',
      templateUrl : '/templates/student-edit-modal.html'
    }
  }
})();