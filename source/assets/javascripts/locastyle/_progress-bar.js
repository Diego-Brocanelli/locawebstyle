var locastyle = locastyle || {};

locastyle.progressBar = (function() {
  'use strict';

  var config = {
    module: '[data-ls-module="progressBar"]'
  }

  function checkModule() {
    var modules = $(config.module).length;
    var isModules = (modules > 0) ? true : false;

    if (isModules) {
      console.info('Locastyle: module [progressBar] successfully initialized.');
    }

    return isModules;
  }

  function init() {
    if (checkModule()) {
      structureProgressBar();
    }
  }

  function structureProgressBar() {
    $(config.module).each(function (index, element) {
      var percentage = $(element).attr('aria-valuenow');
      $(element).append('<span aria-valuenow="' + percentage + '%">');
      var $bar = $(element).find('span');
      setProgressBarValue($bar, percentage);
    });
  }

  function setProgressBarValue(target, percentage) {
    $(target).css('width', percentage + '%');
  }

  return {
    init: init
  };
}());

$(document).ready(locastyle.progressBar.init);
