(function () {
  'use strict';

  angular
    .module('groengaard.core')
    .config(config)
    .run(runBlock);

  function config($urlRouterProvider, AnalyticsProvider) {
    $urlRouterProvider.otherwise("/");

    AnalyticsProvider.setAccount('UA-35381607-8');
  }

  function runBlock(googleAnalytics) {
    googleAnalytics.initialize();
  }
})();
