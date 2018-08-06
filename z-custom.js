/*=== REVEAL INITIAL HOMEPAGE FORM ===*/
jQuery('.homeforms [id*="formus"]').parent().fadeIn(350);
/*=== HOMEPAGE FORM SELECTOR - US - CANANDA - OVERSEAS ===*/
jQuery(document).ready(function() {
	});jQuery('.homeforms #btnus').click(function(asdf){
		console.log('us');
		asdf.stopPropagation();
		asdf.preventDefault();
		jQuery('.homeforms [id*="formca"], .homeforms [id*="formos"]').parent().fadeOut(350).promise().done(function(){
		  jQuery('.homeforms [id*="formus"]').parent().fadeIn(350);
	  });
	});
	jQuery('.homeforms #btnca').click(function(asdf){
		console.log('can');
		asdf.stopPropagation();
		asdf.preventDefault();
		jQuery('.homeforms [id*="formus"], .homeforms [id*="formos"]').parent().fadeOut(350).promise().done(function(){
		  jQuery('.homeforms [id*="formca"]').parent().fadeIn(350);
	  });
	});
	jQuery('.homeforms #btnos').click(function(asdf){
		console.log('os');
		asdf.stopPropagation();
		asdf.preventDefault();
		jQuery('.homeforms [id*="formca"], .homeforms [id*="formus"]').parent().fadeOut(350).promise().done(function(){
		  jQuery('.homeforms [id*="formos"]').parent().fadeIn(350);
	  });
});
/*=== HOMEPAGE OVERSEAS DROPDOWN BUILDER ===*/
jQuery('table[id*="oscountries"] tbody tr').each(function(){
	jQuery('[id*="formos"] select').append('<option value="' + jQuery(this).find('td:first-child').text() + '">' + jQuery(this).find('td:first-child').text() + '  (' + jQuery(this).find('td:last-child').text() + ')</option>');
})
/*=== HOMEPAGE US FORM REDIRECT BASED ON INPUT ===*//
jQuery('#usSearch').submit(function() {
    if (jQuery.trim(jQuery("#uslname").val()) != "" && jQuery.trim(jQuery("#uszip").val()) === "") {
        jQuery(this).find('#uszip').attr('name','');
        jQuery(this).attr('action','/tl/therapist-finder-name.aspx');
    }
});
//GET COOKIE VALUE
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
//SET COOKIE
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}