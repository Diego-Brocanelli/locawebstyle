var locastyle = locastyle || {};

locastyle.modules = locastyle.modules || [];

locastyle.alert = (function() {
  'use strict';

  var config = {
    module: '[class*="ls-alert"]'
  };

  function checkModule() {
    var modules = $(config.module).length;
    var isModules = (modules > 0) ? true : false;

    if (isModules) {
      console.info('Locastyle: module [alert] successfully initialized.');
    }

    return isModules;
  }

  function init() {
    if (checkModule()) {
      ariaAlert();
    }
  }

  function ariaAlert() {
    $(config.module).attr({ role: 'alert' });
  }

  return {
    init: init
  };
}());

$(document).ready(locastyle.alert.init);
