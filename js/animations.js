//Close the menu (shows up on md size) when clicked anywhere on the page
$(document).on('click',function(){
  $('.navbar-collapse').collapse('hide');
})

//Smooth scroll
$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 700, 'swing', function () {
      window.location.hash = target;
    });
  });
});

$('.coming_soon').hover(function(){
  $(this).html("Coming Soon");
}, function(){
  $(this).html("Request Service");
});


// get the value of the top ~25% of the #main element by adding the offset of that element plus 25% of its height, set it as a variable
var first_quarter = $('#main').offset().top + ($('#main').height() * 0.25);

//get the value of the end of #main element
var main_bottom = $('#main').offset().top + $('#main').height();
var lastScrollTop = 0;
// on scroll, 
$(window).on('scroll',function(){
  var stop = Math.round($(window).scrollTop());
  console.log(stop)

  if (stop > lastScrollTop){
    $('.navbar').addClass('animated');
    $('.navbar').addClass('fadeOutUp');
    console.log('SADDDD')
  } else {
    $('.navbar').addClass('fadeInDown');
    $('.navbar').removeClass('fadeOutUp');
  }
  lastScrollTop = stop;

  //Add classes once scrolled past certain pages
  if(stop > first_quarter){
    //console.log('I am inside of main');
    $('.navbar-brand').css('color','#ffffff');
    $('.navbar-toggler').css('color', '#ffffff');
    
    if(stop > main_bottom * 0.95){
      //console.log('I just left main');
      $('.navbar-brand').css('color','#2A0001');
      $('.navbar-toggler').css('color', '#2A0001');
      //console.log("I have passed main.");
    }
  } else{
    //console.log('I AM ALL THE WAY UP');
    $('.navbar-brand').css('color','#ffffff');
    $('.navbar-toggler').css('color', '#ffffff');
 
  }
});