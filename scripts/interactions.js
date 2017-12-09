
$(document).ready(function() {

//To make the descriptor in the menu appear
  $('.svg').mouseenter(function() {
     $(this).closest('.mainMenuDiv').find('.descriptor').css('visibility', 'visible');
   })
   .mouseleave(function() {
     $(this).closest('.mainMenuDiv').find('.descriptor').css('visibility', 'hidden');
  });

//To make the descriptor in the submenu appear
  $('.svg').mouseenter(function() {
     $(this).closest('.subNavDiv').find('.descriptor').css('visibility', 'visible');
   })
   .mouseleave(function() {
     $(this).closest('.subNavDiv').find('.descriptor').css('visibility', 'hidden');
  });

  //To make the descriptor for the enter button appear
    $('.svg').mouseenter(function() {
       $(this).closest('.enterDiv').find('.descriptor').css('visibility', 'visible');
     })
     .mouseleave(function() {
       $(this).closest('.enterDiv').find('.descriptor').css('visibility', 'hidden');
    });


//Makes menu appear
  $('.mainMenuDiv').click(function(event) {
     $('.mainNav').css('right', 0);
     $('.mainMenuDiv').css('visibility', 'hidden');
  });

  $('#navHeading').click(function(event) {
     $('.mainNav').css('right', '-400px');
     $('.mainMenuDiv').css('visibility', 'visible');
  });


//Click event to scroll to top
	$('#backToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});


////JQuery for the hide/show animation on the Index page

 $('h3').click(function(event) {
     $('.hiddenMessage').slideToggle(800);
     event.stopPropagation();
     event.preventDefault();
  });

});

  //This is to change the fill colour of the SVG's used for the menu
  //OLD

  $('.menu').mouseenter(function() {
    $(this).closest('.menu').find('.menuSvg').css('fill', 'rgb(23,230,214)');
  })
  .mouseleave(function() {
    $(this).closest('.menu').find('.menuSvg').css('fill', 'rgb(0,0,0)');
  });



  // The script below makes the blurb for each portfolio piece visible

  $('.folioImages').hover(function() {
    $(this).closest('.portfolioDivSub').find('.blurb').slideToggle(800);
  });

//The script below makes the social media image gallery slide down
$('#pdImage').click(function(event) {
    $('.PDInstaImages').slideToggle(800);
    event.stopPropagation();
    event.preventDefault();
 });
