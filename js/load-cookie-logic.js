 /*Header BR Tag Remove 11 Jun 2013*/
$(document).ready(function() {
 $('ul#bu-dropdown li.list-heading h1').each(function(){
    var heading = $(this).text();
  heading = heading.replace("<br/>"," ");
  $(this).text(heading);
 });
 $('div#language-country-dropdown li.list-heading h1').each(function(){
  var heading = $(this).text();
  heading = heading.replace("<br/>"," ");
  $(this).text(heading); 
 });
 $('div#segment-dropdown li.list-heading h1').each(function(){
  var heading = $(this).text();
  heading = heading.replace("<br/>"," ");
  $(this).text(heading); 
 });
 
 /*************** Cookie Value updation statrs here ******************************/
	function setCookie(c_name,value,exdays,urlPath)
  {
      var exdate=new Date();
      exdate.setDate(exdate.getDate() + exdays);
      var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString()) + ";path=" +urlPath;
      document.cookie=c_name + "=" + c_value;
  }

  setCookie("segmentValue", "", "-1", "/in");
   var pageURL = window.location.href;

  var pageSegments = pageURL.split('/');

  var pageSegment = "";
  if(pageSegments != null && pageSegments != "")
  {
			
      if(pageSegments[3] == "in")
           pageSegment = pageSegments[4];
      else if(pageSegments[3] == "id")
           pageSegment = pageSegments[4];
      else
           pageSegment = pageSegments[3];
  } 
  
  var arrValues = [ "treasures", "personal", "sme", "corporate" ];
  //var arrValues = [ "treasures", "personal", "treasures-id", "personal-id" ];
		arrValues.forEach(function(entry) {
		   if(pageSegment==entry)
		   {
		   	"console" in window && console.log("cookie passed here is --->"+pageSegment);
		   	 setCookie("segmentValue", pageSegment, 99999,"/in");
		   }
		});


 /* if((pageSegment!=null || pageSegment!='')&&((pageSegment != "index")&&(pageSegment != "index-sc")&&(pageSegment != "index-zh")&&(pageSegment != "index-id")))
  {
"console" in window && console.log("cookie passed here is --->"+pageSegment);
      setCookie("segmentValue", pageSegment, 99999,"/");
  }*/
/*************** Cookie Value updation ends here ******************************/
});