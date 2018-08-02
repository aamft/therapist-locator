//get specified cookie value
function getCookie(cname)
{
var name = cname + "=";
var ca = document.cookie.split(';');
for(var i=0; i<ca.length; i++)
  {
  var c = ca[i].trim();
  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
return "";
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

jQuery().ready(function(){
	//get survey cookie value
	var thisHereCookie=getCookie("tosc");
	
	//if no survey taken yet
	if (thisHereCookie!="1"){

//display the overlay and blur results list on newer browsers
jQuery('#masterContentArea').css('filter','blur(3px)');
jQuery('[id*="tosol"]').show().css('display','flex');

//tos accepted button clicked
jQuery('.tosmod button').click(function(){

	//create cookie
	//document.cookie="tosc=1; expires=Thu, 23 Jul 2017 12:00:00 GMT; domain=therapistlocator.net; path=/";		
	setCookie('tosc', 1, 14);

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