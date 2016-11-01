jQuery(document).ready(function(){
  jQuery(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    autoplay:6000,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:4,
            nav:false
        },
        1000:{
            items:5,
            nav:true
        }
    }
  });

  jQuery("a.but-price").click(function () {
    var elementClick = jQuery(this).attr("href")
    var destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1500);
    return false;
  });
});





