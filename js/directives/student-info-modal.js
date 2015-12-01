(function(){
  angular.module("CrudTest")
  .directive('studentInfoModal', studentInfoModal);

  function studentInfoModal(){
    return {
      restrict : 'E',
      templateUrl : '/templates/student-info-modal.html'
    }
  }
})();