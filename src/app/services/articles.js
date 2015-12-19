(function() {
  'use strict';

  angular
    .module('groengaard')
    .factory('articles', articles);

  function articles() {
    return {
      getArticles: getArticles
    };

    function getArticles() {
      return [
        {
          "id": 1,
          "slug": "test-article",
          "title": "Test article",
          "timestamp": "",
          "body": ""
        }
      ];
    }
  }
})();
