(function() {
  'use strict';

  angular
    .module('groengaard.articles')
    .controller('ArticlesController', ArticlesController);

  function ArticlesController(articles) {
    var vm = this;
    vm.articles = [];

    activate();

    function activate() {
      getArticles();
    }

    function getArticles() {
      vm.articles = articles.getArticles();
    }
  }
})();
