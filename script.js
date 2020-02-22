var myApp = angular.module('myApp', []);

myApp.controller("myController", function($scope){
    
    $scope.newUser = {};
    $scope.clickedUser = {};
    $scope.alertMassege = "";
    
    
    $scope.users = [
      
        {name : "Sravan", fullname : "Amishetti", email : "sr@mail.com"},
        {name : "Naseer", fullname : "Shake", email : "na@mail.com"},
        {name : "Bhargav", fullname : "Kottala", email : "kb@mail.com"},
               
    ];
    
    
    $scope.saveUser = function(){    
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
        
        $scope.alertMassege = "New item add on list successfully!!";
    };
    
    
    $scope.selectUser = function(user){
        console.log(user);
        $scope.clickedUser = user;
    };
    
    $scope.updateUser = function (){
        $scope.alertMassege = "Update Successfully!!";
    };
    
    
    $scope.deleteUser = function(){
        $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
        $scope.alertMassege = "Deleted successfully!!";
    };
    
    $scope.clickedAlert = function(){
        $scope.alertMassege = "";
    };
    
});