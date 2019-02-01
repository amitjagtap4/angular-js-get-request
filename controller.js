// get data from API
var app = angular.module('serviceApp', []);
app.controller('MyController', function ($scope, $http) {

  $scope.submit = true;
  $scope.update = false;
  $scope.cancel = false;
  $scope.userid = true;
  $scope.username = true;
  $scope.useremail = true;

$http({method: 'GET', url: 'https://jsonplaceholder.typicode.com/users'
}).then(function success(response) {
$scope.users = response.data;
}, function error(response) {
});


// Delete data from API
$scope.deleteuser = function(user) {
    $http({method: 'DELETE',url: 'https://jsonplaceholder.typicode.com/users/' + user.id
	}).then(function successCallback(response) {
	  alert("User has deleted Successfully");
      var indeuser = $scope.users.indexOf(user);
      $scope.users.splice(indeuser, 1);

    }, function errorCallback(response) {

      alert("Error. while deleting user Try Again!");

    });

  };


    //Create New User
  $scope.createUser = function() {

    //$http POST function
    $http({

      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/users',
      data: $scope.user

    }).then(function successCallback(response) {

      $scope.users.push(response.data);
      console.log($scope.user);
      alert("User has created Successfully")

    }, function errorCallback(response) {

      alert("Error. while created user Try Again!");

    });

  };


  $scope.cancelupdate = function(){
  	$scope.user = null;
  	$scope.submit = true;
  	$scope.update = false;
  	$scope.cancel = false;
  	$scope.userid = true;
    $scope.username = true;
    $scope.useremail = true;
  };

  $scope.EditUser = function(user){

  	$scope.user = user;
    $scope.submit = false
    $scope.update = true;
    $scope.cancel = true;
    $scope.userid = false;
    $scope.username = true;
    $scope.useremail = true;
  };

  //Update User
  $scope.updateUser = function() {

    //$http PUT function
    $http({

      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/users/' + $scope.user.id,
      data: $scope.user

    }).then(function successCallback(response) {

      alert("User has updated Successfully")

    }, function errorCallback(response) {

      alert("Error. while updating user Try Again!");

    });

  };

$scope.remove = function () {
        var newDataList = [];
        
        angular.forEach($scope.users, function (checked) {
            if (!checked.checked) {
               var a =  newDataList.push(checked);

                console.log(a);
            }
        });
      
//I need to call another url, which returns null but it delets the selected
//rowid from url:http://jsonplaceholder.typicode.com/posts
//and finally the updated data from http://jsonplaceholder.typicode.com/posts
//has to be displayed in table
        $scope.users = newDataList;
    };


    $scope.isAll = false;
	$scope.selectAllFriends = function () {
        if ($scope.isAll === false) {
            angular.forEach($scope.users, function (user) {

                user.checked = true;
            });
            $scope.isAll = true;
        } else {
            angular.forEach($scope.users, function (user) {
                user.checked = false;
            });
            $scope.isAll = false;
        }
    };
});

