var locastyle = locastyle || {};

locastyle.dismiss = (function() {
  'use strict';

  var config = {
    trigger: '[data-ls-module=dismiss]',
    triggerClose: 'dismiss:close'
  };

  function checkModule() {
    var modules = $(config.trigger).length;
    var isModules = (modules > 0) ? true : false;

    if (isModules) {
      console.info('Locastyle: module [dismiss] successfully initialized.');
    }

    return isModules;
  }

  function init() {
    if (checkModule()) {
      unbind();
      bindClickOnTriggers();
    }
  }

  function unbind() {
    $(config.trigger).off('click.ls');
  }

  function bindClickOnTriggers() {
    $(config.trigger).on('click.ls', function() {
      checkTarget(this);
      locastyle.topbarCurtain.updateStatusCounter();
    });
  }

  function checkTarget(el) {
    var target = $(el).parents('.ls-dismissable');

    if ($(el).data('target')) {
      target = ($(el).data('target'));
    }

    dismiss(target);
  }

  function dismiss(el) {
    $(el).addClass('ls-dismissed');
    $(el).trigger(config.triggerClose);
  }

  return {
    init: init,
    unbind: unbind
  };

}());

$(document).ready(locastyle.dismiss.init);
