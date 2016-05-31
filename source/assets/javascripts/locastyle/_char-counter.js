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

  function updateCounter(index, count) {
    $('.ls-number-counter-'+index).text(count);
  }

  function countText() {
    $('[data-ls-module="charCounter"]').each(function(index, field) {
      var limit = $(field).attr('maxlength');
      var html = '<p class="ls-help-inline"><small><strong ' +
        'class="ls-char-count ls-number-counter-' + index + '">' + limit +
        '</strong> caracteres restantes</small></p>';
      var prefixGroup = $(field).closest('.ls-prefix-group');

      $(field).removeAttr('maxlength').data().maxlength = limit;

      if (prefixGroup.length) {
        prefixGroup.after(html);
      } else {
        $(field).after(html);
      }

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

  function init() {
    countText();
  }

  return {
    init: init
  };
}());

$(document).ready(locastyle.charCounter.init);
