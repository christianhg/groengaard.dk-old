(function() {
  'use strict';

  angular
    .module('groengaard.home')
    .controller('HomeController', HomeController);

  function HomeController($timeout, amMoment, settings) {
    var vm = this;
    vm.showLogo = false;
    vm.showTitle = false;
    vm.showSubtitle = false;  
    vm.tagline = '';
    vm.time = new Date();

    activate();

    function activate() {
      getTagline();
    }

    function getTagline() {
      vm.tagline = settings.getTagline();
    }

    $timeout(function() {
      vm.showLogo = true;
    }, 500);

    $timeout(function() {
      vm.showTitle = true;
    }, 1000);

    $timeout(function() {
      vm.showSubtitle = true;
    }, 1500);
  }
})();
