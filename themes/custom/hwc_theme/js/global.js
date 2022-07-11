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
  $( window ).on( "resize load", function() {

    if( $('body').hasClass( "user-logged-in" ) ){
      var height = $('#header').height() + ( $('#toolbar-bar').height()*2  );
    } else {
      var height = $('#header').height();
    }

    $('body').css('padding-top', height+'px'  );

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

  $(document).ready(function($) {
    //Move Help button in PHPforms by js
    if ($("#edit-help")) {
      $('#edit-help').appendTo('.moved-help-js');
      $('#edit-help').css('display', 'block');
    }

    //Delete body scrolldown class to show header
    $('#scroll-top').click(function() {
      $('body').removeClass('scrolldown');
    });


  });

  //Add class active to anchor top when scroll down
  $(window).scroll(function(){
    if ($(this).scrollTop() > 150) {
      $('#scroll-top').addClass('active');
    } else {
      $('#scroll-top').removeClass('active');
    }
  });


  //menu toolkit
  $("#block-campaigntoolkit > .menu >.menu-item.expanded > span").click(function(){
    if($(this).siblings("ul").is(":visible")){
      $(this).removeClass("up-arrow");
      $(this).addClass("closed-down-arrow");
      $('#block-campaigntoolkit').removeClass("opened");
      $(this).siblings("ul").slideUp();
    }
    else {
      $(this).addClass("up-arrow");
      $(this).removeClass("closed-down-arrow");
      $('#block-campaigntoolkit').addClass("opened");
      $(this).siblings("ul").slideDown();
    }
  });

  $('#block-campaigntoolkit .submenu-1 > li').each(function( index ) {
    if( $(this).hasClass( "active" ) ) {
      $(this).parent().css('display','block');
    }
  });

  $('#block-campaigntoolkit .submenu-2 > li').each(function( index ) {
    if( $(this).hasClass( "active" ) ) {
      $(this).parent().parent().css('display','block');
    }
  });


})(jQuery, Drupal);



