// $(document).ready(function() { 
// $(window).resize(function(){
// 	if ($(window).width() >= 980){	
//       $(".navbar .dropdown-toggle").hover(function () {
//          $(this).parent().toggleClass("show");
//          $(this).parent().find(".dropdown-menu").toggleClass("show"); 
//        });
//       $( ".navbar .dropdown-menu" ).mouseleave(function() {
//         $(this).removeClass("show");  
//       });
// 	}	
// });    
// });

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

$(document).ready(function() {
  
  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 75) {
      btn.fadeIn('slow');
    } else {
      btn.fadeOut('fast');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '75');
  });

});
