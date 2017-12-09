///Initialiser function for the carousel on the Home page
$(document).ready(function(){
	  $('.slideShow').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 7000,
		speed: 500,
                dots: false,
                arrows: false,
                accessibility: false
	  });
                   
});

