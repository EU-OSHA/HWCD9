function openShare(element){
  let wrapper = element.parentElement.parentElement;
  let el = wrapper.getElementsByClassName("list-networks")[0];
  el.classList.toggle("d-none");
}
function closeShare(element){
  let wrapper = element.parentElement;
  wrapper.classList.toggle("d-none");
}

jQuery(function ($) {

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

  $( window ).on( "resize load", function() {

    if( $('body').hasClass( "user-logged-in" ) ){
      var height = $('#header').height() + ( $('#toolbar-bar').height()*2  );
    } else {
      var height = $('#header').height();
    }

    $('body').css('padding-top', height+'px'  );
  });

  //Add class active to anchor top when scroll down
  $(window).scroll(function(){
    if ($(this).scrollTop() > 150) {
      $('#scroll-top').addClass('active');
    } else {
      $('#scroll-top').removeClass('active');
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

    //menu toolkit
    function OpenMenu(element, menu){
      if($(element).siblings("ul").is(":visible")){
        $(element).removeClass("up-arrow");
        $(element).addClass("closed-down-arrow");
        $(menu).removeClass("opened");
        $(element).siblings("ul").slideUp();
      }
      else {
        $(element).addClass("up-arrow");
        $(element).removeClass("closed-down-arrow");
        $(menu).addClass("opened");
        $(element).siblings("ul").slideDown();
      }
    }
    function OpenMenuLevel1(element){
      if( $(element).hasClass( "active" ) ) {
        $(element).parent().css('display','block');
      }
    }
    function OpenMenuLevel2(element){
      if( $(element).hasClass( "active" ) ) {
        $(element).parent().parent().css('display','block');
      }
    }

    $("#block-campaigntoolkit > .menu >.menu-item.expanded > span").click(function(){
      OpenMenu( $(this), '#block-campaigntoolkit' )
    });
    $("#block-campaigntoolkit-2 > .menu >.menu-item.expanded > span").click(function(){
      OpenMenu( $(this), '#block-campaigntoolkit-2' )
    });

    $('#block-campaigntoolkit .submenu-1 > li').each(function( index ) {
      OpenMenuLevel1( $(this) )
    });
    $('#block-campaigntoolkit-2 .submenu-1 > li').each(function( index ) {
      OpenMenuLevel1( $(this) )
    });

    $('#block-campaigntoolkit .submenu-2 > li').each(function( index ) {
      OpenMenuLevel2( $(this) )
    });
    $('#block-campaigntoolkit-2 .submenu-2 > li').each(function( index ) {
      OpenMenuLevel2( $(this) )
    });

    /* sharelink in napo films */
    $('.share-link').on( "click", function() {
      console.log($(this));
      var wrapper = $(this).parent().parent();
      var element = wrapper.find('.list-networks');
      element.toggleClass('d-none');
    });

    $('.close-share').on( "click", function() {
      $(this).parent().toggleClass('d-none');
    });

    /* hide sharelinks when the user clicks out */
    $(document).mouseup(function(e) {
      var container = $(".list-networks");
      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.addClass('d-none');
      }
    });

    /* landing pages grid: go to specefic url when the user clicks into the item div  */
    $('.landing-menu-item').on( "click", function() {
        var urlLink = $('>a',this).attr('href');
        window.location.href= urlLink;
    });

    /* increase and decrease the body text size */
    var fontSize = 10;
    $('#text_resize_decrease').on( "click", function() {
      var currentVal = parseInt( $('html').css('font-size') );
      if (currentVal != NaN) {
        $('html').css('font-size',currentVal - 1)
      } else {
        $('html').css('font-size',fontSize - 1)
      }

    });
    $('#text_resize_increase').on( "click", function() {
      var currentVal = parseInt( $('html').css('font-size') );
      if (currentVal != NaN) {
        $('html').css('font-size',currentVal + 1)
      } else{
        $('html').css('font-size',fontSize + 1)
      }
    });

  });
});



