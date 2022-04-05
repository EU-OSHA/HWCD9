/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.allages_theme = {
    attach: function (context, settings) {

      $('.header-tools #search-block-form .form-actions button').text('');

    }
  };


})(jQuery, Drupal);


