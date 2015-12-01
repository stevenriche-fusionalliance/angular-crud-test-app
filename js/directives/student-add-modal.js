(function(){
  angular.module("CrudTest")
  .directive('studentAddModal', studentAddModal);

  function studentAddModal(){
    return {
      restrict : 'E',
      templateUrl : '/templates/student-add-modal.html'
    }
  }
})();