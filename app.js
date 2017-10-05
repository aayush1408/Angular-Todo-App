var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider',function($routeProvider){
    $routeProvider.
    when('/home',{
        templateUrl:"views/home.html",
        })
    .when('/list',{
        templateUrl:'views/todo.html',
        controller:'myController'
    })
    .otherwise({
        redirectTo:'/home'
    })
}]);



myApp.controller('myController',['$scope',function($scope){
  
    $scope.removeit = function(task){
        var removedTask = $scope.tasks.indexOf(task);
        $scope.tasks.splice(removedTask,1);
    };

    $scope.addtask = function(){
        $scope.tasks.push({
            task:$scope.newtask,
            date:$scope.newdate,
            done:false
        });
        $scope.newtask=' ';
        $scope.newdate=' ';
    };
 
  $scope.tasks = [
  {
    task:'My Webtech Assignment',
    date:'11:12:2017',
    done:false
  },
  {
    task:'New episode of Dbs',
    date:'11:10:2017',
    done:false
  },
  {
    task:'Buy Sauce',
    date:'01:12:2017',
    done:false
  },
  {
    task:'My Project',
    date:'11:9:2017',
    done:false
  }
  
  ]
}]);
