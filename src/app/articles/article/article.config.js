(function () {
  'use strict';

  angular
    .module('groengaard.articles.article')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('articles.article', {
        url: '/:slug',
        templateUrl: 'articles/article/article.view.html',
        controller: 'ArticleController',
        controllerAs: 'vm'
      });
  }
})();
