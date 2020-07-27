jQuery().ready(function(){
	//get survey cookie value
	var thisHereCookie=getCookie("tltos");
	
	//if no survey taken yet
	if (thisHereCookie!="1"){

		//display the overlay and blur results list on newer browsers
		jQuery('#masterContentArea').css('filter','blur(0px)');
		jQuery('[id*="tosol"]').show().css('display','flex');

		//tos accepted button clicked
		jQuery('.tosmod button').click(function(){

			//create cookie
			//document.cookie="tosc=1; expires=Thu, 23 Jul 2017 12:00:00 GMT; domain=therapistlocator.net; path=/";		
			setCookie('tltos', 1, 14);

			//hide the overlay and unblur the results list
			jQuery('#masterContentArea').css('filter','blur(0px)');
			jQuery('[id*="tosol"]').hide();

			//create ga event for acceptance
			//ga('send', 'event', 'terms of service', 'accepted');

			//don't let the click do anything else
			return false;
		});

	}

});
