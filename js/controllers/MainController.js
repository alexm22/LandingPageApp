var app = angular.module('linkBuilder', ['ngAnimate']);

app.controller('MainController', function($scope, $http) {
	$scope.selectedButton = false;
    $http.get('../json/ccodes.json').
    then(function (res)
    {
        $scope.ccode = res.data;
    });




    $scope.regions = [
            {
            name: "Arabic",
            code: "ar"
            },
            {
            name: "Bulgarian",
            code: "bg"
            },
            {
            name: "Brazilian",
            code: "br"}
            ,
            {
            name: "Czech",
            code: "cs"}
            ,
            {
            name: "Catalan",
            code: "ca"}
            ,
    ];
});




