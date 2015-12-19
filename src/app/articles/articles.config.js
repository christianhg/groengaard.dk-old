(function () {
  'use strict';

  angular
    .module('groengaard.articles')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('articles', {
        url: '/articles',
        templateUrl: 'articles/articles.view.html',
        controller: 'ArticlesController',
        controllerAs: 'vm',
        pageTitle: 'Articles'
      });
  }
})();
