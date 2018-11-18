/**
 * Description : This javascript is used to provide the auto-suggest finctionality
 *               for a input[type='text'] element. To apply this functionality to
 *               any input[type='text'] simply add the class 'gsa-search-box' 
 *               to the input[type='text'] element.
 *
 *
 * Author       : DBS-Kevin
 * Creation Date: 2013-03-19
 *
 *
 * REVISION HISTORY
 * --------------------------------------------------------------------------------
 * Date         Author                  Details
 * --------------------------------------------------------------------------------
 * 2013-03-19   DBS-Kevin               Create.
 * 2013-06-20   DBS-Kevin               Modified: Resize width of suggest table to
 *                                      search box width.
 * --------------------------------------------------------------------------------
 */

/********************************************************************************/
/**                                                                            **/
/** GSA GLOBAL VARIABLES                                                       **/
/**                                                                            **/
/********************************************************************************/
var ss_form_element = 'suggestion_form'; // search form
var ss_popup_element = ''; // search suggestion drop-down
var ss_seq = [ 'g' ];
var ss_g_one_name_to_display = "";
var ss_g_more_names_to_display = "";
var ss_wait_millisec = 300;
var ss_delay_millisec = 30;
var SS_OUTPUT_FORMAT_LEGACY = 'legacy';
var SS_OUTPUT_FORMAT_OPEN_SEARCH = 'os';
var SS_OUTPUT_FORMAT_RICH = 'rich';
var ss_protocol = SS_OUTPUT_FORMAT_RICH;
var ss_allow_non_query = true;
var ss_non_query_empty_title = "No Title";
var ss_allow_debug = false;
/**GSA Paramenters**/
//var site = 'all_uat';
//var client = 'DBSIntranet_frontend';
var ss_g_max_to_display = 5;
var ss_max_to_display = 5;
var access = 'p';
var format = SS_OUTPUT_FORMAT_RICH;
var ss_gsa_host = '/in/iw/GSAResponder.jsp'//TODO: Get correct configuration.
//var ss_gsa_param = '?site=' + site + '&max=' + ss_g_max_to_display + '&access=' + access + '&format=' + ss_protocol + '&client=' + client; //TODO: Get correct configuration.
var ss_gsa_param = '?max=' + ss_g_max_to_display + '&access=' + access + '&format=' + ss_protocol; //TODO: Get correct configuration.
/**User Defined**/
var selectedGsaSearchBox = '';



jQuery(function($){
  /********************************************************************************/
  /**                                                                            **/
  /** MAIN FUNCTION                                                              **/
  /**                                                                            **/
  /********************************************************************************/

  try{

    /**Append Search Collection**/
    if(gsaSearchCollection!=void 0) {
      log('gsaSearchCollection:',gsaSearchCollection);

      var collections = gsaSearchCollection.split('&');
      var site = '';
      var client = '';

      for (var i = 0; i < collections.length; i++) {
          //Site
          if(i==0){
              site = collections[i];
          //Client1
          } else {
              var attribute = collections[i].split('=');
              if(attribute.length==2){
                  if(attribute[0]=='Client1') {
                      client = attribute[1];
                  }
              } else {
                  log('ERROR: Malformed Search Collection.',collections[i]);
              }
          }
      }

      ss_gsa_param = ss_gsa_param + '&site=' + site + '&client=' + client;

      log('site:',site);
      log('client:',client);
      log('ss_gsa_param:',ss_gsa_param);
    }

    /**Include GSA Javascripts**/
    /*XMLHttp*/
    var js = document.createElement("script");
    js.type = "text/javascript";
    js.src = "/in/iwov-resources/scripts/gsa/xmlhttp.js";
    document.body.appendChild(js);
    /*Search Suggest*/
    js = document.createElement("script");
    js.type = "text/javascript";
    js.src = "/in/iwov-resources/scripts/gsa/ss.js";
    document.body.appendChild(js);

    /**Configure settings for all instance of GSA search box**/
    $('.gsa-search-box').each(function(index, element){
      log("index:",index);
      log("element:",element);

      /*Insert GSA Search Box Id*/
      var selectedGsaSearchBoxId = 'gsa_'+index;
      $(this).attr('gsa-searchbox-id',selectedGsaSearchBoxId);
      $(this).attr('gsa-index',index);

      /*Insert GSA Suggest Dropdown List*/
      var gsaSuggestDropdownListId = 'search_suggest_'+index;
      var gsaSuggestDropdownList = '<table cellpadding="0" cellspacing="0" class="ss-gac-m" style="width: ' + $(this).outerWidth() + 'px; visibility: hidden;" id="' + gsaSuggestDropdownListId + '"></table>';
      $(gsaSuggestDropdownList).insertAfter($(this));

      /*EVENT HANDLER(focusin): Search Box*/
      $(this).on('focusin', function(e) {
        //Fix dropdown menu width
        var tableId = '#search_suggest_' + $(this).attr('gsa-index');
        $(tableId).css('width', $(this).outerWidth() + 'px');
        
        ss_popup_element = gsaSuggestDropdownListId;
        selectedGsaSearchBox = selectedGsaSearchBoxId;
        log('EVENT(focusin): ss_popup_element = ',ss_popup_element);
        log('EVENT(focusin): selectedGsaSearchBox = ',selectedGsaSearchBox);
      });

      /*EVENT HANDLER(focusout): Search Box*/
      $(this).on('focusout', function(e) {
        log('EVENT(focusout)');
        $('#'+gsaSuggestDropdownListId).css('visibility','hidden');
		//$('#hsearchbutton').trigger('click');
      });

      /*EVENT HANDLER(keyup): Search Box*/
      $(this).on('keyup', function(e) {
        log('EVENT(keyup): selectedGsaSearchBox = ',selectedGsaSearchBox);
        log('EVENT(keyup): e.keyCode = ',e.keyCode);
        //Fuction from ss.js
        ss_handleKey(e);
      });

      /**Fix CSS**/
      $(this).css('margin-botom','0px');
      $(this).parent('div').css('position','relative');
    });

  } catch(e) {
    //alert("ERROR: Exception occurred in GSA Auto complete javascript.");
    "console" in window && console.log("ERROR: Exception occurred in GSA Auto complete javascript.");
    "console" in window && console.log("Exception:",e);
  }

  /**Logging**/
  function log(x,y) {
    if(y==void 0) y="";
    if(window.console&&window.console.log){window.console.log(x,y);}
  }
});