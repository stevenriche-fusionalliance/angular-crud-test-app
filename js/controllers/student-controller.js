(function(){
  angular.module('CrudTest')
  .controller('StudentController', ['$http', '$filter', '$log', StudentController]);

  function StudentController($http, $filter, $log){
    var that = this;
    this.currentStudent = 1;
    this.studentInfo = {};
    // initialize students
    read_function();

    // Function to get all students. Also called when controller initialized
    this.read = function(){
      read_function();
    }

    // Function to view one student by student id
    this.view = function(student_id){
      that.currentStudent = student_id;
      var studentInfo = $filter('filter')(that.students, {"index":student_id});
      if (studentInfo.length > 0){
        that.studentInfo = studentInfo[0];
      } else {
        that.studentInfo = {
          name: '',
          school: '',
          grade: 0,
          description: ''
        };
      }
      //$log.log(that.studentInfo);
      $('#student-info-modal').modal();
    }

    // Function to open edit form for one student by student id
    this.edit = function(student_id){
      that.currentStudent = student_id;
      var studentInfo = $filter('filter')(that.students, {"index":student_id});
      if (studentInfo.length > 0){
        that.studentEdit = studentInfo[0];
      } else {
        that.studentEdit = {
          name: '',
          school: '',
          grade: 0,
          description: ''
        };
      }

      //$log.log(that.studentInfo);
      $('#student-edit-modal').modal();
    }

    // Function to update a student from the edit form by student id
    this.update = function(student_id){
      //$log.log(that.studentEdit);
      $http({method:'PUT', url:'http://localhost:3000/update/'+student_id, data:that.studentEdit})
      .success(function(data){
      //  $log.log(data);
        that.read();
      });
      $('#student-edit-modal').modal('hide');
      $('.edit_message').hide();
    }

    // Function to open the add student form
    this.add_form = function(){
      that.studentEdit = {};
      $('#student-add-modal').modal();
    }

    // Function to submit the add student form and add a new student
    this.add = function(){
      //$log.log(that.studentEdit);
      $http({method:'POST', url:'http://localhost:3000/new', data:that.studentEdit})
      .success(function(data){
        $log.log(data);
        that.read();
      });
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
      //$log.log(student_id);
      $http({method:'DELETE', url:'http://localhost:3000/delete/'+student_id})
      .success(function(data){
        that.read();
      });
    }

    function read_function(){
      //$http({method:'GET', url:'data/students.json'}) // old call to json file
      $http({method:'GET', url:'http://localhost:3000/all'})
      .success(function(data){
        that.students = data;
      });
    }

  }

})();