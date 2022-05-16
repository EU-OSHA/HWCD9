/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.allages_theme = {
    attach: function (context, settings) {

      /* $('.header-tools #search-block-form .form-actions button').text(''); */

    }
  };


})(jQuery, Drupal);

(function ($, Drupal) {
  'use strict';
  $( window ).on( "load", function() {
    $('.sidebar-first .block-facets .content').css('display','none')
    $('.sidebar-first .block-facets h2').click(function() {
      var $checkboxes = $(this).parent().find( ".content" );
      if ($checkboxes.is(':visible')) {
        $checkboxes.slideUp();
        $(this).removeClass('area-shown');
      }
      else {
        $(this).addClass('area-shown');
        $checkboxes.slideDown();
      }
    });
  });


})(jQuery, Drupal);

