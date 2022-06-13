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
      var scrollMax = 150; //number of pixels before modifying styles

      $(window).on("load resize scroll",function(e){
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

        if( $(this).scrollTop() > headerHeight ){
          $('#header').addClass("sticky-menu");
        } else {
          $('#header').removeClass("sticky-menu");
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
