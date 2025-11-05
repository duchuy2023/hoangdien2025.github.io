
$(function() {
		   
	// main menu toggler
	$('.nav .container').prepend('<div class="menu-icon"><a class="navbar-brand" href="#"><img src="images/logo.png" alt="BootstrapBrain Logo" height="25"></a><span>Menu</span></div>');
	$('.menu-icon').click(function(){						
		$('ul.dropdown').slideToggle(600);
		$(this).toggleClass("active");	
	});	
	// sub menu accordion-like toggler 
	var $menuToggler = $('.sub > a');
	$menuToggler.click(function(e) {
		e.preventDefault();
		var $this = $(this);
		$this.toggleClass('current').next('ul').toggleClass('current');
	});	
	
});


