
/** CAROUSEL **/
jQuery(function ($) {

  jQuery(document).ready(function () {

    var itemsMainDiv = ('.multicarousel--block');
    var itemsDiv = ('.multicarousel--block--inner');
    var itemWidth = "";
    var multicarouselPage = 0;
    var incno = 0;

    // this function define the size of the items
    function ResCarouselSize() {
      var dataItems = ("data-items");
      var itemClass = ('.item');
      var id = 0;
      var btnParentSb = '';
      var itemsSplit = '';
      var sampwidth = jQuery(itemsMainDiv).width();
      var bodyWidth = jQuery('body').width();


      jQuery(itemsDiv).each(function () {

        id = id + 1;
        var itemNumbers = jQuery(this).find(itemClass).length;
        btnParentSb = jQuery(this).parent().attr(dataItems);
        itemsSplit = btnParentSb.split(',');


        jQuery(this).parent().attr("id", "multicarouselBlock" + id);


        if (bodyWidth >= 1200) {
          incno = itemsSplit[3];
          itemWidth = sampwidth / incno;
          if (jQuery("body.front-page")[0]){
            incno = itemsSplit[4];
            itemWidth = sampwidth / incno;
          }
        }
        else if (bodyWidth >= 992) {
          incno = itemsSplit[2];
          itemWidth = sampwidth / incno;
        }
        else if (bodyWidth >= 768) {
          incno = itemsSplit[1];
          itemWidth = sampwidth / incno;
        }
        else {
          incno = itemsSplit[0];
          itemWidth = sampwidth / incno;
        }

        jQuery(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
        jQuery(this).find(itemClass).each(function () {
          jQuery(this).outerWidth(itemWidth);
        });

        jQuery(".leftLst").addClass("over");
        jQuery(".rightLst").removeClass("over");

      });
    }

    // this function used to move the items
    function ResCarousel(e, el, s) {

      var leftBtn = ('.leftLst');
      var rightBtn = ('.rightLst');
      var translateXval = '';
      var divStyle = jQuery(el + ' ' + itemsDiv).css('transform');
      var values = divStyle.match(/-?[\d\.]+/g);
      var xds = Math.abs(values[4]);
      if (e == 0) {
        translateXval = parseInt(xds) - parseInt(itemWidth * s);
        jQuery(el + ' ' + rightBtn).removeClass("over");
        multicarouselPage -= 1;

        if (translateXval <= itemWidth / 2) {
          multicarouselPage = 0;
          translateXval = 0;
          jQuery(el + ' ' + leftBtn).addClass("over");
        }
      }
      else if (e == 1) {
        var itemsCondition = jQuery(el).find(itemsDiv).width() - jQuery(el).width();
        multicarouselPage += 1;
        translateXval = parseInt(xds) + parseInt(itemWidth * s);
        jQuery(el + ' ' + leftBtn).removeClass("over");

        if (translateXval >= itemsCondition - itemWidth / 2) {
          translateXval = itemsCondition;
          jQuery(el + ' ' + rightBtn).addClass("over");
        }
      }
      jQuery(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
      jQuery(".multicarousel-indicators li").removeClass('active')
      jQuery("#multicarousel-indicator-"+multicarouselPage).addClass('active');
    }

  //It is used to get some elements from btn
    function click(ell, ee) {
      var Parent = "#" + jQuery(ee).parent().attr("id");
      var slide = jQuery(Parent).attr("data-slide");
      ResCarousel(ell, Parent, slide);
    }

    jQuery('.leftLst, .rightLst').click(function () {
      var condition = jQuery(this).hasClass("leftLst");
      if (condition)
        click(0, this);
      else
        click(1, this)
    });

    ResCarouselSize();

    var cl='class="active"';
    for (i = 0; i < Math.ceil(jQuery('.multicarousel--block--inner .item').length / incno); i++) {
      jQuery('.multicarousel-indicators').append('<li id="multicarousel-indicator-'+i+'" data-slide-to="' + i + '" '+cl+'></li>');
      cl='class=""';
    }

    jQuery(window).resize(function () {
      ResCarouselSize();
    });

    jQuery('.multicarousel-indicators li').click(function () {
      var slide_to = jQuery(this).data('slide-to');
      if (multicarouselPage != slide_to) {
        jQuery(".multicarousel-indicators li").removeClass('active')
        jQuery("#multicarousel-indicator-" + slide_to).addClass('active');
        if (slide_to > multicarouselPage) {
          var el = jQuery('.rightLst');
          for (i = 0; i <= slide_to - multicarouselPage; i++) {
            click(1, el);
          }
        }
        else {
          var el = jQuery('.leftLst');
          for (i = 0; i <= multicarouselPage - slide_to; i++) {
            click(0, el);
          }
        }
      }
    });

  });

  jQuery(document).ready(function(){
    if (jQuery(window).width() >= 1200) {
      if (jQuery("body.front-page")[0]){
        jQuery("body.front-page .multicarousel--block").attr("data-slide","5");
      }else{
        jQuery(".multicarousel--block").attr("data-slide","4");
      }
    }
  });

  jQuery(window).resize(function () {
    if (jQuery(window).width() >= 1200) {
      if (jQuery("body.front-page")[0]){
        jQuery("body.front-page .multicarousel--block").attr("data-slide","5");
      }else{
        jQuery(".multicarousel--block").attr("data-slide","4");
      }
    }
  });

  jQuery(document).ready(function(){
    if (jQuery(window).width() <= 1200) {
      jQuery(".multicarousel--block").attr("data-slide","3");
      jQuery("ol.multicarousel-indicators").css("width", "87%");
    }
  });

  jQuery(window).resize(function () {
    if (jQuery(window).width() <= 1200) {
      jQuery(".multicarousel--block").attr("data-slide","3");
      jQuery("ol.multicarousel-indicators").css("width", "87%");
    }
  });

  jQuery(document).ready(function(){
    if (jQuery(window).width() <= 991) {
      jQuery(".multicarousel--block").attr("data-slide","2");
      jQuery("ol.multicarousel-indicators").css("width", "87%");
    }
  });

  jQuery(window).resize(function () {
    if (jQuery(window).width() <= 991) {
      jQuery(".multicarousel--block").attr("data-slide","2");
      jQuery("ol.multicarousel-indicators").css("width", "87%");
    }
  });

  jQuery(document).ready(function(){
    if (jQuery(window).width() <= 767) {
      jQuery(".multicarousel--block").attr("data-slide","1");
      jQuery("ol.multicarousel-indicators").css("width", "79%");
    }
  });

  jQuery(window).resize(function () {
    if (jQuery(window).width() <= 767) {
      jQuery(".multicarousel--block").attr("data-slide","1");
      jQuery("ol.multicarousel-indicators").css("width", "79%");
    }
  });
});
