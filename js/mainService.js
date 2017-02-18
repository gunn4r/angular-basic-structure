angular.module('angularPractice')

.service('mainService', function($http, $q){


    this.getSmurfs = function(){
        return $http({
            method: 'GET',
            url: 'http://smurfs.devmounta.in/smurfs/?format=json'
        });
    }


    this.getFirstSmurf = function(){

        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://smurfs.devmounta.in/smurfs/?format=json'
        })
        .then(function(response){
            var firstSmurf = response.data.shift();
            deferred.resolve(firstSmurf);
        });
        return deferred.promise;

    }

});