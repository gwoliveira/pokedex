angular.module('pokedex')
    .controller('pokemonController', function($scope, $routeParams, $http, $templateCache) {
        $scope.carregando = true;

        $http.get("http://pokeapi.co/api/v2/pokemon/" + $routeParams.name, {
            cache: $templateCache
        }).
        then(function(response) {
            $scope.pokemon = response.data;
            $scope.erro = false;
            $scope.carregando = false;

        }, function(response) {
            $scope.erro = true;
            $scope.data = response.data || 'Request failed';
            $scope.status = response.status;
            $scope.carregando = false;
        });
    });
