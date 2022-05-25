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

(function ($, Drupal) {
  $( window ).on( "load", function() {

    var height = $('#header').height();
    $('body').css('padding-top', height+ ( $('#toolbar-bar').height()*2 ) );


    $('.share-link').on( "click", function() {
      var wrapper = $(this).parent().parent();
      var element = wrapper.find('.list-networks');
      element.toggleClass('d-none');
    });
    $('.close-share').on( "click", function() {
      $(this).parent().toggleClass('d-none');
    });

  });

  $(document).mouseup(function(e) {
    var container = $(".list-networks");
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.addClass('d-none');
    }
  });


})(jQuery, Drupal);
