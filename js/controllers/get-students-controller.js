(function(){
  angular.module('CrudTest')
  .controller('GetController', ['$http', '$filter', '$log', function($http, $filter, $log){
    this.currentStudent = 1;
    this.studentInfo = {};
    var that = this;

    $http({method:'GET', url:'data/students.json'})
    .success(function(data){
      that.students = data;
    });

    this.view = function(student_id){
      that.currentStudent = student_id;
      that.studentInfo = $filter('filter')(that.students, {"index":student_id});
      //$log.log(that.studentInfo);
      $('#student-info-modal').modal();
    }

    this.edit = function(student_id){
      that.currentStudent = student_id;
      that.studentInfo = $filter('filter')(that.students, {"index":student_id});
      that.studentEdit = that.studentInfo[0];
      $log.log(that.studentInfo);
      $('#student-edit-modal').modal();
    }

    this.update = function(student_id){

    }
  }]);
})();