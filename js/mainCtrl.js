angular.module('angularPractice')

.controller('mainCtrl', function($scope, mainService){


    mainService.getSmurfs()
        .then(function(response){
            $scope.smurfList = response.data;
            console.log($scope.smurfList);
        });
        


});