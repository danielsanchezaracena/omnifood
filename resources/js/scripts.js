$(document).ready(function(){

    $('.js-section-features').waypoint(function(direction){
      console.log(direction); 
      if(direction=='down'){
       $('nav').addClass('sticky');
       $('.mobile-nav-icon ion-icon').css('color','#555');
       }else{
        $('nav').removeClass('sticky');
        $('.mobile-nav-icon ion-icon').css('color','#fff');
       }
    }, {
      offset: '60px'
    })

    $('.mobile-nav-icon').click(()=>{
     var $element= $('.mobile-nav-icon ion-icon');
     var name =$element.attr("name");  
     if(name=='reorder-three-outline'){
      $element.attr("name","close-outline");
      $('.main-nav').css('display','block');
     }else{
      $element.attr("name","reorder-three-outline");
      $('.main-nav').css('display','none');
     }
    })
    
    $('.js-scroll-to-plan').click(()=>{
    $('html,body').animate({
      scrollTop:$('.section-sign-up').offset().top
    },1000)
    });

    $('.js-scroll-to-features').click(()=>{
    $('html,body').animate({
      scrollTop:$('.section-features').offset().top
    },1000)
    });

    /*Navigation scroll*/
    // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
}); 

/*Animations on scroll*/
$('.js-wp-1').waypoint(function(direction){
    $('.js-wp-1').addClass('animate__animated animate__fadeIn');
},{
  offset:'50%'
});
$('.js-wp-2').waypoint(function(direction){
    $('.js-wp-2').addClass('animate__animated animate__fadeInUp');
},{
  offset:'50%'
});
$('.js-wp-3').waypoint(function(direction){
    $('.js-wp-3').addClass('animate__animated animate__fadeIn');
},{
  offset:'50%'
});

$('.js-wp-4').waypoint(function(direction){
   $('.js-wp-4').addClass('animate__animated animate__pulse');
},{
  offset:'50%'
});


});