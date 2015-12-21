(function () {
  'use strict';

  angular
    .module('groengaard.core')
    .controller('CoreController', CoreController);

  function CoreController(settings) {
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
