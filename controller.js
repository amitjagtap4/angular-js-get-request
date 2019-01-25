
var app = angular.module('serviceApp', []);
app.controller('MyController', function ($scope, $http) {
$http({method: 'GET', url: 'https://jsonplaceholder.typicode.com/posts'
}).then(function success(response) {
$scope.items = response.data;
}, function error(response) {
});
});
