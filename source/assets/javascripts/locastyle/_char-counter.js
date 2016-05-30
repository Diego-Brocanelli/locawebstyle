var locastyle = locastyle || {};

locastyle.charCounter = (function() {
  'use strict';

  var config = {
    module: '[data-ls-module="charCounter"]'
  };

  function checkModule() {
    var modules = $(config.module).length;
    var isModules = (modules > 0) ? true : false;

    if (isModules) {
      console.info('Locastyle: module [char counter] successfully initialized.');
    }

    return isModules;
  }

  function init() {
    if (checkModule()) {
      countText();
    }
  }

  function countText() {
    $(config.module).each(function(index, field) {
      var limit = $(field).attr('maxlength');
      $(field).removeAttr('maxlength').data().maxlength = limit;
      $(field).after('<p class="ls-help-inline"><small><strong class="ls-char-count ls-number-counter-' + index + '">' + limit + '</strong> caracteres restantes</small></p>');

      $(field).keyup(function() {
        var count = $(this).val().length;
        var limit = $(this).data().maxlength;

        if (count > limit) {
          $(this).val($(this).val().substring(0, limit));
          updateCounter(index, 0);
        } else {
          updateCounter(index, limit - count);
        }
      });

      $(field).trigger('keyup');
    });
  }

  function updateCounter(index, count) {
    $('.ls-number-counter-' + index).text(count);
  }

  return {
    init: init
  };
}());

$(document).ready(locastyle.charCounter.init);
