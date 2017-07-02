$(document).ready(function(){
    $("#yakor").hide();
    $(window).scroll(function(){
        if($(this).scrollTop() >= 270){
            $("#yakor").show();
            $("#yakor").removeClass('animated fadeOutDown');
            $("#yakor").addClass('animated fadeInUp');
         }
        else if($(this).scrollTop() <= 270){
            $("#yakor").hide();
            $("#yakor").removeClass('animated fadeInUp');
            $("#yakor").addClass('animated fadeOutDown');
         }
    });
    $("#yakor").bind("click", function(e){
        e.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $("body, html").animate({scrollTop: top}, 1000);
    });
    
    
       //Owl Carousel    
       $('.owl-carousel').owlCarousel({
        loop:true,
        margin:50,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',   
        nav:true,  
        navText: ["<img src='../img/icons/prev.png' />", "<img src='../img/icons/next.png' />"],   
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });
    
    
   //menu hover animation
    $('.dropdown').hover(
        function(){
            $('.menu-dropdown').css("top", "100%");   
        }, function(){
            $('.menu-dropdown').css("top", "130%");
        }
    );
    
  
    
    
});