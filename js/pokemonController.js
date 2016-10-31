angular.module('pokedex')
    .controller('pokemonController', function($scope, $routeParams, $http) {
        $scope.pokemonName = $routeParams.name;
    });
