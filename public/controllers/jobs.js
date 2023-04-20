var myApp = angular.module("myApp");

myApp.controller("JobsController", JobsController);

JobsController.$inject = ["$scope", "$http", "$location", "$routeParams"]

function JobsController($scope, $http, $location, $routeParams){
  console.log("Jobs Controller loaded");  
    $scope.getJobs = function(){
        $http.get('/api/jobs').success(function(response){
            $scope.jobs = response;
        });
    }
    
    $scope.getJob = function(){
        var id = $routeParams.id;
        $http.get('/api/jobs/'+id).success(function(response){
            $scope.job = response;
        });
    }
    
        $scope.addJob = function(){
        $http.post('/api/jobs/').success(function(response){
            window.location.href="#/jobs"
            console.log($scope.job);

        });
    }
        
        $scope.updateJob = function(){
        var id = $routeParams.id;

        $http.put('/api/jobs/' + id).success(function(response){
            window.location.href="#/jobs"
            console.log($scope.job);

        });
    }
        
        $scope.deleteJob = function(id){
        $http.delete('/api/jobs/' + id).success(function(response){
            window.location.href="#/jobs"
            console.log($scope.job);

        }); 
    }
    
} 