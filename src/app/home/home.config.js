(function () {
  'use strict';

  angular
    .module('groengaard.home')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      });
  }
})();
