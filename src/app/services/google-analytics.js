(function() {
  'use strict';

  angular
    .module('groengaard')
    .factory('googleAnalytics', googleAnalytics);

  function googleAnalytics(Analytics) {
    var service = {
      initialize: initialize
    };

    return service;

    function initialize() {
    }
  }
})();
