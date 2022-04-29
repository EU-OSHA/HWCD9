/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.bootstrap_barrio = {
    attach: function (context, settings) {

      var position = $(window).scrollTop();
      var headerHeight = $('header').height();

      $(window).scroll(function () {
        if ($(this).scrollTop() > headerHeight) {
          $('body').addClass("scrolled");

        var scroll = $(window).scrollTop();

          if (scroll > position) {
            $('body').addClass("scrolldown");
            $('body').removeClass("scrollup");
          } else {
            $('body').addClass("scrollup");
            $('body').removeClass("scrolldown");
          }
          position = scroll;
        }
        else {
          $('body').removeClass("scrolled");
        }
      });

      $('.dropdown-item a.dropdown-toggle').on("click", function(e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
      });
    }
  };

})(jQuery, Drupal);
