angular.module('pokedex')
    .controller('pokemonsListController', function($scope, $http, $templateCache) {
      $scope.carregando = true;

      $http.get("http://pokeapi.co/api/v2/pokemon/", {
          cache: $templateCache
      }).
      then(function(response) {
          $scope.data = response.data;
          $scope.erro = false;
      }, function(response) {
          $scope.erro = true;
          $scope.data = response.data || 'Request failed';
          $scope.status = response.status;
      }).finally(function() {
          $scope.carregando = false;
      });
    });
