(function(){
  angular.module('CrudTest')
  .controller('StudentController', ['$http', '$filter', '$log', function($http, $filter, $log){
    var that = this;
    this.currentStudent = 1;
    this.studentInfo = {};

    // Function to get all students. Also called when controller initialized
    this.read = function(){
      $http({method:'GET', url:'data/students.json'})
      .success(function(data){
        that.students = data;
      });
    }

    // Function to view one student by student id
    this.view = function(student_id){
      that.currentStudent = student_id;
      that.studentInfo = $filter('filter')(that.students, {"index":student_id});
      //$log.log(that.studentInfo);
      $('#student-info-modal').modal();
    }

    // Function to open edit form for one student by student id
    this.edit = function(student_id){
      that.currentStudent = student_id;
      that.studentInfo = $filter('filter')(that.students, {"index":student_id});
      that.studentEdit = that.studentInfo[0];
      //$log.log(that.studentInfo);
      $('#student-edit-modal').modal();
    }

    // Function to update a student from the edit form by student id
    this.update = function(student_id){
      $log.log(that.studentEdit);
      //$http({method:'PUT', url:'my_edit_url_here', data:dataVar});
      $('#student-edit-modal').modal('hide');
    }

    // Function to open the add student form
    this.add_form = function(){
      that.studentEdit = {};
      $('#student-add-modal').modal();
    }

    // Function to submit the add student form and add a new student
    this.add = function(){
      $log.log(that.studentEdit);
      //$http({method:'POST', url:'my_add_url_here', data:that.studentEdit});
      $('#student-add-modal').modal('hide');
    }

    // Function to open confirm message to delete a student by student id
    this.delete_confirm = function(student_id){
      var confirm_message = confirm('Are you sure you want to delete this student?');
      if (confirm_message){
        that.delete(student_id);
      }
    }

    // Function to delete a student by student id. Called by this.delete_confirm
    this.delete = function(student_id){
      $log.log(student_id);
      //$http({method:'DELETE', url:'my_delete_url_here', data:student_id});
    }

    // Get all students
    that.read();
  }]);
})();