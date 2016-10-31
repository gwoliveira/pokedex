angular.module('pokedex', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/pokemon/:name', {
                templateUrl: 'view/pokemon.html',
                controller: 'pokemonController',
            })
            .when('/pokemons', {
                templateUrl: 'view/list-pokemons.html',
                controller: 'pokemonsListController'
            })
            .otherwise('/pokemons');
    });
