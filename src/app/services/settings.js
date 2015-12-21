(function() {
  'use strict';

  angular
    .module('groengaard')
    .factory('settings', settings);

  function settings() {
    return {
      getTagline: getTagline
    };

    function getTagline() {
      return "Web Developer in Constant Motion";
    }
  }
})();
