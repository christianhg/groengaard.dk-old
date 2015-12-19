(function() {
  'use strict';

  angular
    .module('groengaard.articles')
    .controller('ArticleController', ArticleController);

  function ArticleController(articles) {
    var vm = this;
    vm.article = [];

    activate();

    function activate() {
      getArticle();
    }

    function getArticle() {

    }
  }
})();
