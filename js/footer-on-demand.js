
function log(x,y) {

  if(y==void 0) y=""; 
  if(window.console&&window.console.log){window.console.log("footer.js(log): " + x,y);}
  
}
  
function getRegion() {
  var region = "sg";

  try{log("PARAM(country):",country);}catch(e){log("ERROR:",e);}
  
  try{
	var country = $("#country").val();
    country = $.trim(country.toLowerCase());

    if(country == 'hk' || country.search('hong')!=-1){
      region = 'hk';

    }else if(country == 'sg' || country.search('sing')!=-1){
      region = 'sg';

    }else if(country == 'in' || country.search('india')!=-1){
      region = 'in';

    }else if(country == 'cn' || country.search('china')!=-1){
      region = 'cn';

    }else if(country == 'tw' || country.search('taiwan')!=-1){
      region = 'tw';

    }else if(country == 'id' || country.search('indo')!=-1){
      region = 'id';
    }
  }catch(e){
    log("ERROR:",e);
  }
  log("region:",region);
  return region;
}

function initializeFooter() {
  log('initializeFooter()');
  
  var geocodeInputFooter = document.getElementById('geocodeInputFooter');
  
  var autocomplete = new google.maps.places.Autocomplete(geocodeInputFooter, {
    types: ["geocode"],
    componentRestrictions: {country: getRegion()}
  });
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());

      var geocoder = new google.maps.Geocoder();
      var latLng = new google.maps.LatLng(geolocation.lat,geolocation.lng);
      if(geocoder){
        geocoder.geocode({ 'latLng': latLng}, function (results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            geocodeInputFooter.value=results[0].formatted_address;
            log(results[0].formatted_address);
          }
          else {
            log("Geocoding failed: " + status);
          }
        });
      }

    });
  }
}

$(function(){
	  /**ACTION: Go to Find Branch Page**/
	  var goToFindBranchPage = function(e) {
	    $('#geocodeInputFooter').trigger('focus');
		$.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());

	    /* Detect Chrome */
	    if($.browser.chrome && location.protocol=="http:"){

	  var url = $('#goBranchfinder').attr('href');
	  if($('#geocodeInputFooter').val()=='')
	  {
	  		 window.open(url);
	  }
else
{

	      var url = $('#goBranchfinder').attr('href');
	      if(url.indexOf("filter=") !=-1){
	       url = url + (/\?$/.test(url) ? "" : "&") + "q=" + $('#geocodeInputFooter').val();
		  }else{
		  url = url + (/\?$/.test(url) ? "" : "?") + "q=" + $('#geocodeInputFooter').val();
		  }
	      window.open(url);
	   
	
}


		}
		else{
		if($('#geocodeInputFooter').val()!=""){
	      var url = $('#goBranchfinder').attr('href');
	      if(url.indexOf("filter=") !=-1){
	       url = url + (/\?$/.test(url) ? "" : "&") + "q=" + $('#geocodeInputFooter').val();
		  }else{
		  url = url + (/\?$/.test(url) ? "" : "?") + "q=" + $('#geocodeInputFooter').val();
		  }
	      window.open(url);
	    }
		}
	    
	  };
	  
	   /**EVENT: On Search Click**/
	  $('#goBranchfinder').click(goToFindBranchPage);
	  
	   /**EVENT: On Enter Press**/
	  $('#geocodeInputFooter').keypress(function(e){
	      var code = (e.keyCode ? e.keyCode : e.which);
	      if (code == 13) { goToFindBranchPage()}
	  });
	});