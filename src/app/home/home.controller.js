(function() {
  'use strict';

  angular
    .module('groengaard.home')
    .controller('HomeController', HomeController);

  function HomeController(settings) {
    var vm = this;
    vm.tagline = '';

    activate();

    function activate() {
      getTagline();
    }

    function getTagline() {
      vm.tagline = settings.getTagline();
    }
  }
})();
