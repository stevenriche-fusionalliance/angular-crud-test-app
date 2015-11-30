(function(){
  angular.module("CrudTest")
  .directive('studentAddModal', function(){
    return {
      restrict : 'E',
      templateUrl : '/templates/student-add-modal.html'
    }
  });

})();