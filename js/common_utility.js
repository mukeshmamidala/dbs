function sitecatalystcode() {

//Product Info Component        
 if ($(".sub-nav-ul.productInfo").length == 0) 
 {
 var smeFlag=getSegMent();
"console" in window && console.log("Site name"+smeFlag);
   if (smeFlag.indexOf('sme') > -1) { // Added condtion as its not applicable for SME sites
		if (debug) {
            "console" in window && console.log('inside SME Site');
        }
        } else {	
		if (debug) {
            "console" in window && console.log('inside else Site');
        }
    return;
        }
 } else {
		var selectedTab = "";
		var urlPathName = window.location.pathname;
		var level_name = urlPathName.match(/\/((\w+\-*\_*\w*\-*\_*\w*\-*\_*\w*))\/((\w+\-*\_*\w*\-*\_*\w*\-*\_*\w*)).page/);
		level_name = level_name[1];
		var tab_var = $(".sub-nav-ul.productInfo li.active").text();
		//On Click of the tabs highlighted 
		$(".sub-nav-ul.productInfo li").click(function (eventObject) 
		{
			selectedTab = $(this).text();
			pageTabSwitch(level_name+ "|" + selectedTab);
		});
		if(selectedTab == "")
		{
			var tab_var_productInfo = $(".sub-nav-ul.productInfo li.active").text();
			if(tab_var_productInfo != "")
			{
				selectedTab = tab_var_productInfo;
			}
		}
		//if an expandable tab(+) is clicked on within the red boxes
		$('body').on('click.collapse.data-api', '[data-toggle=collapse]', function (eventObject) {
                var $this = $(this),
                target = $this.attr('data-target')
				$(target).hasClass('in') ?  pageTabSwitch(level_name+ "|" + selectedTab + "|"  + $(this).next('.large').text()) : null
        })
	}	
/*Starts- Added for Currency Converter--(22-07-2014)*/
    $("#firstCurrencyInput").one("keypress", function() {
        var titleText = $('span.seo-title').text();
        if (debug) {
            "console" in window && console.log('Currency Converter-->' + titleText);
        }
        if (!titleText) {
            titleText = "Currency Convertor";
            if (debug) {
                "console" in window && console.log('inside !titleText' + titleText);
            }
        }
        var ieFlag = false;
        if ($("#secondCurrencyInput").val()) {
            var secondCurrencyInput = $("#secondCurrencyInput").val();
            if (secondCurrencyInput.indexOf("Transfer Amount") > -1) {
                ieFlag = false;
            } else {
                ieFlag = true;
            }
        } else {
            ieFlag = true;
        }
        if (ieFlag) {
            if (debug) {
                "console" in window && console.log('Inside for the first Time' + titleText);
            }
            setCurrencyConerterTracking(titleText);
        }
    });
    $("#secondCurrencyInput").one("keypress", function() {
        var titleText = $('span.seo-title').text();
        if (!titleText) {
            titleText = "Currency Convertor";
        }
        var ieFlag = false;
        if ($("#firstCurrencyInput").val()) {
            var firstCurrencyInput = $("#firstCurrencyInput").val();
            if (firstCurrencyInput.indexOf("Transfer Amount") > -1) {
                ieFlag = false;
            } else {
                ieFlag = true;
            }
        } else {
            ieFlag = true;
        }
        if (ieFlag) {
            if (debug) {
                "console" in window && console.log('Inside for the first Time' + titleText);
            }
            setCurrencyConerterTracking(titleText);
        }
    });
    /*Ends- Added for Currency Converter--(22-07-2014)*/
    /* Starts FAQ Tracking */
    $('div.faq').each(function() {
        var group = $(this);
        $('button', group).each(function() {
            var button = $(this);
            button.live('click', function() {
                if ($(this).hasClass("collapsed")) {
                    if ($(this).next('h3').text()) {
                        if (debug) {
                            "console" in window && console.log('FAQ Tracking' + $(this).next('h3').text());
                        }
                        setFAQTracking($(this).next('h3').text());
                    }
                }
            });
        });
    });
    /* Ends FAQ Tracking */
    /* Starts Frequent Forms Download Tracking */
    $(".frequently-used-forms .doc-link a").click(function() {
        var formTitle = $(".frequently-used-forms h2").text();
        if ($(this).text()) {
            if (!formTitle) {
                formTitle = "Frequently Used Forms";
            }
            if (debug) {
                "console" in window && console.log('Frequently Used Forms Tracking' + $(this).text() + "FormTitle" + formTitle);
            }
            setFrequentlyUsedFormsDownloadTracking($(this).text(), formTitle);
        }
    });
    /* Ends Frequent Forms Download Tracking */
	/*Added for Products Tracking*/
	 var defaultSelectedProducts="";
/*$('.product-browser .tabbed-nav li.active').each(function() {
defaultSelectedProducts = $(this).text();
});*/
	var selectedProduct=""; 
	 $(".product-browser .tabbed-nav li").click(function(eventObject) {
        if ($(this).text()) {
		selectedProduct=$(this).text();
            if (debug) {
                "console" in window && console.log('Page Tab Tracking' + $(this).text());
            }
            pageTabSwitch($(this).text());
        }
    });
	if(!selectedProduct&&defaultSelectedProducts){
	 if (debug) {
                "console" in window && console.log('Page Tab Tracking for the First Time)' );
            }
	pageTabSwitch(defaultSelectedProducts);
	}
	/*Added for Products Tracking*/
    /* Starts Day2DayListTracking */
    $(".product-details ul li span a").click(function() {
        if ($(this).text()) {
            if (debug) {
                "console" in window && console.log('Day2DayListTracking' + $(this).text());
            }
            Day2DayListTracking($(this).text());
        }
    });
	$("div.free-text-block-en ul li div span a").click(function (eventObject) 
		{
			  if (debug) {
                "console" in window && console.log('inside link Tracking' + $(this).text());
            }
			   Day2DayListTracking($(this).text());
		});
			//Added for english taiwan tracking
$("div.free-text-block-cn ul li div span a").click(function (eventObject) 
		{
			  if (debug) {
                "console" in window && console.log('inside link Tracking' + $(this).text());
            }
			   Day2DayListTracking($(this).text());
		});
    /* Ends Email US Form Tracking */
    $(".tabbed-nav li.active").click(function(eventObject) {
        if ($(this).text()) {
            if (debug) {
                "console" in window && console.log('Page Tab Tracking' + $(this).text());
            }
            pageTabSwitch($(this).text());
        }
    });
    //Starts -Internal Campaign Tracking HomePage
    $('div.landing-page-hero-content a').each(function() {
        var $this = $(this),
            aHref = $this.attr('href'); //get the value of an attribute 'href'
        //get the value of an attribute 'href'
        if (aHref && !isURLWithPID(aHref) && isURLValidForPID(aHref)) {
            var strBank = "dbs";
           var strSegment = getSegMent();
            var strMarket =  getCountry();
            var strCurrentSection = "homepage";
            var strPlacement = "homepagebanner";
            var strCampaignName = cleanText($this.find('div.seo-carousel-title').text());
            var strCTAName = cleanText($this.find(' p.intro-text b').text());
            aHref = formatURLWithPID(aHref, strBank, strMarket, strSegment, strCampaignName, strCurrentSection, strPlacement, strCTAName);
            if (debug) {
                "console" in window && console.log('Internal Campaign Tracking href(HomePage)-->' + aHref);
            }
            $this.attr('href', aHref); //set the value of an attribute 'href'
        }
    });
    //Ends -Internal Campaign Tracking HomePage
    //Starts -Added for Day2Day Section Tracking
    $('.promo-hero-block .carousel-inner .item').each(function() { 
        var $this = $(this),
            aHref = $this.attr('href'); //get the value of an attribute 'href'
        //get the value of an attribute 'href'
        var strBank = "dbs";
           var strSegment = getSegMent();
            var strMarket =  getCountry();
        var strCurrentSection = "daytoday";
        var strPlacement = "sectionbanner";
        var strCampaignName = cleanText($this.find('.seo-carousel-title > a').text());
        if (strCampaignName.length == 0) {
            strCampaignName = cleanText($this.find('h2 > a').text());
        }
        var strCTAName = cleanText($this.find('a.pull-right').text());
        var strURL = location.href; 
        if (strCTAName) {
            $(this).find('a').each(function() {
                aHref = $(this).attr('href');
                if (!isURLWithPID(aHref)) {
                    aHref = formatURLWithPID(aHref, strBank, strMarket, strSegment, strCampaignName, strCurrentSection, strPlacement, strCTAName);
                    if (debug) {
                        "console" in window && console.log('inside if condition --> PID' + aHref);
                    }
                }
                //set the value of an attribute 'href'
                $(this).attr('href', aHref);
            });
        }
    });
    //Ends -Added for Day2Day Section Tracking
    //Starts -Added for Related Products Section Tracking
    $('div.related-products .product-preview a').each(function() {
        var $this = $(this),
            aHref = $this.attr('href'); //get the value of an attribute 'href'
        //get the value of an attribute 'href'
        //if (aHref && !isURLWithPID(aHref)) {
        if (aHref && !isURLWithPID(aHref) && isURLValidForPID(aHref)) {
            var strBank = "dbs";
             var strSegment = getSegMent();
            var strMarket =  getCountry();
            var strCurrentSection = "services-insurance-commercialgeneralinsurance";
			var strCurrentSectionFromBreabCrumb=$('div.seo-div-breadcrumb').text();
			var currentSectionFromBC="";
			if(strCurrentSectionFromBreabCrumb){
				var res = strCurrentSectionFromBreabCrumb.split(">");
				for (var i = 0; i < res.length; i++) {
					var tempVaribale=res[i];
					tempVaribale=tempVaribale.replace(/\s/g, '');
					tempVaribale=tempVaribale.toLowerCase();
					if(i==res.length-1){
					currentSectionFromBC+=tempVaribale;
					}else{
					currentSectionFromBC+=tempVaribale+"-";					
					}
				}
			}
			if(currentSectionFromBC){
			strCurrentSection=currentSectionFromBC;
			}
			   if (debug) {
                "console" in window && console.log('Current Section from BC' + currentSectionFromBC);
            }			
            var strPlacement = "relatedproductssection";
            var strCampaignName = "relatedproductlinks";
            var strCTAName = cleanText($this.find('h3').text());
            aHref = formatURLWithPID(aHref, strBank, strMarket, strSegment, strCampaignName, strCurrentSection, strPlacement, strCTAName);
            if (debug) {
                "console" in window && console.log('Internal Campaign Tracking href(Releated Products)-->' + aHref);
            }
            $this.attr('href', aHref); //set the value of an attribute 'href'
        }
    });
    //Ends -Added for Related Products Section Tracking	
}

function GetURLParameter(name,href)
{
name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
var regexS = "[\\?&]"+name+"=([^&# ]*)";
var regex = new RegExp(regexS );
var results = regex.exec(href);
if( results == null )
  return "";
else
 return results[1];
}


//function newsdetails(loadUrl){
function newsdetails(){
	var href = $(location).attr('href');
	var checkstr = "FromMonth";
	if(href.indexOf(checkstr) != -1){
	var fromMonth = GetURLParameter('FromMonth',href);
	var fromYear = GetURLParameter('FromYear',href);
	var toMonth = GetURLParameter('ToMonth',href);
	var toYear = GetURLParameter('ToYear',href);
	var country = GetURLParameter('Country',href);
	 $("#countrySelect").val(country);
	 $("#monthFromSelect").val(fromMonth);
	 $("#yearFromSelect").val(fromYear);
	 $("#monthToSelect").val(toMonth);
	 $("#yearToSelect").val(toYear);
	 var backhref = $("#back").attr('href');
	var splitVal = href.split("?");
	backhref=backhref+ "?"+splitVal[1];
	$("#back").attr("href",decodeURIComponent(backhref));
	 

	}
	var currCountry = $("#countrySelect option:selected").val();
	var newsfeedhref = $("#newsfeed").attr('href');
	var newsfeedhrefSplit = newsfeedhref.split("?");
	var newsfeedhrefFinal = newsfeedhrefSplit[0];
	var param="Country="+currCountry;
	$("#newsfeed").attr("href",decodeURIComponent(newsfeedhrefFinal+"?"+param));

}
	

function productInfo(category,loadUrl){
	var highlightCat=null; 
	var description ="";
	if(category===""){
		$(".main-navigation-container ul li").each(function() {		  
		    var css = $(this).attr("class");
		    if(css === 'active'){
		    highlightCat = $(this).children("a").text();
			description =  $(this).find('.scope-note').text();
			highlightCat = highlightCat.replace(description,'');	
		    }
		    //highlightCat= 'Bank';
		});
		ajaxCallInfo(highlightCat,loadUrl);
	}		 
}
function ajaxCallInfo(highlightCat,loadUrl){
	var ajax_load;
	ajax_load="<img src='/iwov-resources/images/ajax-loader.gif' alt='loading'/>";
	$('#productinfo').html(ajax_load);
	$.ajax({
		type: 'POST',
		url: loadUrl,
		cache:false,
		async:true,
		dataType : 'html',
		data: {Category:highlightCat},
		success: function(data) {
			var prdComp = $(data).find('#productinfo').html();
			$('#productinfo').html(prdComp);
			pageLevelComponents.tabs();
			sitecatalystcode();
		},
		error: function(XMLHttpRequest,textStatus,errorThrown) {
			console.log("error while loading the page "+loadUrl);
		},
		complete: function(XMLHttpRequest,status) {
		}
	}); 
}
//added for product list component -starts
function productList(){
	var currCategory=$('#category_type').val();
	var currSearch =  $('#search_type').val();
	var promotype=$('#promotion_type').val();
	var promoSearch =  $('#search_promo').val();
	var promoCat =  $('#promo_cat').val();
	var type =  $('#type').val();
	var listtype =  $('#listType').val();
	if(type == "promotion"){
		ajaxCallPromotion(promotype,0,1,"",promoSearch,promoCat);
	}else if(type == "product"){	
		ajaxCall(currCategory,0,1,"",currSearch);		
	}else{
		if(listtype == "product"){			
			ajaxCall("",0,1,"",currSearch);
		}else{
			ajaxCallPromotion(listtype,0,1,"",currSearch,"");
		}
	}
	
	$('#productlist').hide();
	$('#pagination').hide();
}

function ajaxCallPromotion(promotype,start,pageNum,clsVal,search,promoCat){
	var ajax_load;
	ajax_load="<img src='/iwov-resources/images/ajax-loader.gif' alt='loading'/>";
	$('#productlist').html(ajax_load);
	var requrl=window.location.href;
	var loadUrl;
	if (requrl.indexOf("/in/") !=-1) {
		loadUrl = "/in";
	}else if(requrl.indexOf("/id/") !=-1){
		loadUrl = "/id";
	}else{
		loadUrl="";
	}
	var prodlistChild =   $('#product_main_page').val();
	loadUrl = loadUrl + prodlistChild;
	var type="promotion";
	$.ajax({
		type: 'POST',
		url: loadUrl,
		cache:false,
		async:true,
		dataType : 'html',
		data: { promotype:promotype,start:start,pageNum:pageNum,clsVal:clsVal,search:search,type:type,pct:promoCat},
		success: function(data) {
			$('#productlist').show();
			$('#pagination').show();
			var prodComp = $(data).find('#product-main').html();
			$('#product-main').html(prodComp);
			var searchHeadline = $(data).find('#productlistHeadline').html();
			//alert("searchHeadline:"+searchHeadline);
			$('#productlistHeadline').html(searchHeadline);
			var paginComp = $(data).find('#pagination').html();
			$('#pagination').html(paginComp);	
			var currPageComp = $(data).find('#hiddendivpage').html();
			$('#hiddendivpage').html(currPageComp);
			
		},
		error: function(XMLHttpRequest,textStatus,errorThrown) {
			console.log("error while loading the page "+loadUrl);
		},
		complete: function(XMLHttpRequest, status) {
		}
	});
}
function ajaxCall(category,start,pageNum,clsVal,search){
	var ajax_load;
	ajax_load="<img src='/iwov-resources/images/ajax-loader.gif' alt='loading'/>";
	$('#productlist').html(ajax_load);
	var requrl=window.location.href;
	var loadUrl;
	if (requrl.indexOf("/in/") !=-1) {
		loadUrl = "/in";
	}else if(requrl.indexOf("/id/") !=-1){
		loadUrl = "/id";
	}else{
		loadUrl="";
	}
	var type="product";
	var prodlistChild =   $('#product_main_page').val();
	loadUrl = loadUrl + prodlistChild;
	$.ajax({
		type: 'POST',
		url: loadUrl,
		cache:false,
		async:true,
		dataType : 'html',
		data: { category:category,start:start,pageNum:pageNum,clsVal:clsVal,search:search,type:type},
		success: function(data) {
			$('#productlist').show();
			$('#pagination').show();
			var prodComp = $(data).find('#product-main').html();
			$('#product-main').html(prodComp);
			var searchHeadline = $(data).find('#productlistHeadline').html();
			$('#productlistHeadline').html(searchHeadline);
			var paginComp = $(data).find('#pagination').html();
			$('#pagination').html(paginComp);	
			var currPageComp = $(data).find('#hiddendivpage').html();
			$('#hiddendivpage').html(currPageComp);
			
		},
		error: function(XMLHttpRequest,textStatus,errorThrown) {
			console.log("error while loading the page "+loadUrl);
		},
		complete: function(XMLHttpRequest, status) {
		}
	});
}
	

	

	function checkClass(){
		var liclsValue = $(this).parent().attr("class");
		if(liclsValue !='disabled'){
			var page = $(this).text();
			var clsValue = $(this).attr("class");
			onPageChange(page,clsValue);
		}
	
	}
	function onPageChange(page,clsValue){
		var listtype =  $('#listType').val();
		var type = $("#type").val();
		var promotype=$('#promotion_type').val();
		var promoCat=$('#promo_cat').val();
		
		var pageNum=1;
		if(page == ""){
			if(clsValue =='prev'){
				pageNum = $("input:hidden[rel = page]").val();

			}
			if(clsValue =='next'){
				pageNum = $("input:hidden[rel = page]").val();		
			}
		}
		var searchPage = $("input:text[id='Search']").val();
		var placeholder =  $("#placeholder").val();
		if((searchPage!="") && (placeholder!=searchPage)){
			if(type == 'promotion'){
				ajaxCallPromotion("",page,pageNum,clsValue,searchPage,"");
				
			}else if(type == 'product'){
				ajaxCall("",page,pageNum,clsValue,searchPage);
			}else{
				if(listtype == "product"){
					ajaxCall("",page,pageNum,clsValue,searchPage);
				}else{
					ajaxCallPromotion(listtype,page,pageNum,clsValue,searchPage,"");
				}
			}
			
		}else{
			currCategory=$('#category_type').val();
			currSearch =  $('#search_type').val();
			var promoSearchCurr = $('#search_promo').val();
			if(type == 'promotion'){
				ajaxCallPromotion(promotype,page,pageNum,clsValue,promoSearchCurr,promoCat);
			}else if(type == 'product'){
				ajaxCall(currCategory,page,pageNum,clsValue,currSearch);
				
			}else{
				if(listtype == "product"){
					ajaxCall("",page,pageNum,clsValue,currSearch);
				}else{
					ajaxCallPromotion(listtype,page,pageNum,clsValue,currSearch,"");
				}
			}
			
		}
	}
	
	function searchTextChange(){
		var listtype =  $('#listType').val();
		var promotype=$('#promotion_type').val();
		var search = $("input:text[id='Search']").val();
		var type = $("#type").val();
		var placeholder =  $("#placeholder").val();
		if((search!="") && (placeholder!=search)){
			if(type=='promotion'){
				ajaxCallPromotion("",0,1,"",search,"");	
				
			}else if(type == 'product'){
				ajaxCall("",0,1,"",search);	
			}else{
				if(listtype == "product"){
					ajaxCall("",0,1,"",search);
				}else{
					ajaxCallPromotion(listtype,0,1,"",search,"");
				}
			}
		
	}
	if(search==""){
		var currSearch =  $('#search_type').val();
		if(listtype == "product"){			
			ajaxCall("",0,1,"",currSearch);
		}else{
			ajaxCallPromotion(listtype,0,1,"",currSearch,"");
		}


	}else{
	if(placeholder==search){
		var currSearch =  $('#search_type').val();
		if(listtype == "product"){			
			ajaxCall("",0,1,"",currSearch);
		}else{
			ajaxCallPromotion(promotype,0,1,"",currSearch,"");
		}
	}
	}
			
		
	}
	 //added for product list component -ends
	
 //added for cards hero component -starts

	
	 //added for cards hero component -ends
	//added for find latest offers
	
function searchOffers(searchPreference,globalsearchpage,promotionlistPage){
	
	var ptype = $("#ptype").val();
	var searchTxt = $("input:text[id='SearchTxt']").val();
	if(searchPreference == 'Global'){
		window.location.href = globalsearchpage+"?Query_String="+searchTxt;
	}else if(searchPreference == 'Contextual'){
		if(searchTxt!=""){
			ajaxCallSearchOffers(searchTxt,0,1,"");
		}
		
	}else{
		if(searchTxt!=""){
			searchTxt = encodeURI(searchTxt);
			window.location.href = promotionlistPage+"?pt="+ptype+"&search="+searchTxt;
		}
		
	}
}
function ajaxCallSearchOffers(searchTxt,start,pageNum,clsVal){
    var moretext =   $('#moretext').val();
	var queryparam =   $('#queryparam').val();
	var offerchild = $("#offerchild").val();
	var ptype = $("#ptype").val();
	var requrl=window.location.href;
	var loadUrl;
	if (requrl.indexOf("/in/") !=-1) {
		loadUrl = "/in";
	}else if(requrl.indexOf("/id/") !=-1){
		loadUrl = "/id";
	}else{
		loadUrl="";
	}
	loadUrl = loadUrl + offerchild;
	//alert(loadUrl);
	$.ajax({
		type: 'POST',
		url: loadUrl,
		cache:false,
		async:true,
		dataType : 'html',
		data: { search:searchTxt,SearchOffers:true,SearchProducts:false,start:start,pageNum:pageNum,clsVal:clsVal,PromotionType:ptype,moretext:moretext,qparam:queryparam},
		success: function(data) {
			$('#paginationOffer').show();
			$('#offersSection').show();			
			var paginComp = $(data).find('#pagination').html();
			if( paginComp !== "") {
			$('#paginationOffer').html(paginComp);	
			} else {
				$('#paginationOffer').hide();
			}		
			var currPageComp = $(data).find('#hiddendivpage').html();
			$('#hiddendivpage').html(currPageComp);
			var offerComp = $(data).find('#latestOffers').html();
			$('#latestOffers').html(offerComp);	
			
			var offertype = $(data).find('#offertypediv').html();
			$('#offertypediv').html(offertype);	
			searchOffersView();
		},
		error: function(XMLHttpRequest,textStatus,errorThrown) {
			console.log("error while loading the page "+loadUrl);
			searchOffersView();
		},
		complete: function(XMLHttpRequest, status) {
		}
	});
}
function loadCardsDropdown(benefitThree,idString){
	var benefitOne  = $("#subnav").contents('.active').children("a").attr("data-target");



	var currBenTwo = "#benefittwo_"+idString;
	var benefitTwo = $(currBenTwo).val();
	var cardsid = "#benefitcard_"+idString;
	//$(cardsid).empty();
	$(cardsid).find('option:gt(0)').remove();
	ajaxCallSearchCards(benefitOne,benefitTwo,benefitThree,cardsid);
		
}
function loadCardsDropdownMobile(benefitThree,idString){
	var benefitOne  = $("#FindOffersDrp").val();
	var currBenTwo = "#mobbenefittwo_"+idString;
	var benefitTwo = $(currBenTwo).val();
	var cardsid = "#mobbenefitcard_"+idString;
	//$(cardsid).empty();
	$(cardsid).find('option:gt(0)').remove();
	ajaxCallSearchCardsMobile(benefitOne,benefitTwo,benefitThree,cardsid);
		
}
/* Added by jayson - functions for MR1504
	getOffersCookie
	checkOffersCookie
	setOffersCookie
	setCategoriesByCookie
	isPushStatesupported
	browerVersion
	findOffersWithoutCookie
	findOffersMobileWithoutCookie
   Modified by jayson - function for MR1504
   	findOffers
	findOffersMobile
	ajaxCallFindOffer
	ajaxCallSearchCards
	ajaxCallSearchCardsMobile
	subnavchange
	subnavchangeMobile	
*/
var offersmobile = function() {
    return {
        detect: function(e, t) {
            e = navigator.userAgent;
            if (/android|bb|meego|mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substring(0, 4)))
                return true;
            else
                return false
        }
    }
}();
/** Test if tablet **/
var offerstablet = function() {
    return {
        detect: function() {
            return /ipad|android 3|sch-i800|playbook|kindle|sm-n900t|gt-n7100|samsung-sgh-i717|sm-t330nu|sm-t325|sm-t525|gt-p1000|gt-p7500|sgh-t849|shw-m180s|a510|a511|a100|dell streak|silk/i.test(navigator.userAgent.toLowerCase())
        }
    }
}();
function getOffersCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
function checkOffersCookie(cname) {
    var cookieVal = getOffersCookie(cname);
    if (cookieVal != "") {
		if(cname === "benefitOne") {
			if (!(offersmobile.detect() && !offerstablet.detect())) {
				if($("a[data-target="+cookieVal+"]").length != 0) { 
					return true;
				} else { 
					deleteOffersCookies();
					return false;
				}
			} else {
				if($("#FindOffersDrp").find("[id="+cookieVal+"]").length != 0) {
				return true;
				} else { 
					deleteOffersCookies();
					return false;
				}	
			}
		}	else {
			return true;
		}
    } else {
       return false;
    }
}
function deleteOffersCookies(){	
	var cbenefitOne = "benefitOne";
	var cbenefitTwo = "benefitTwo";
	var cbenefitThree = "benefitThree";
	var cbenefitCard = "benefitCard";
	//document.cookie = cbenefitOne + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
	//document.cookie = cbenefitTwo + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
	//document.cookie = cbenefitThree + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
	//document.cookie = cbenefitCard + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
	setOffersCookie(cbenefitOne,"");
	setOffersCookie(cbenefitTwo,"");
	setOffersCookie(cbenefitThree,"");
	setOffersCookie(cbenefitCard,"");
}
function setOffersCookie(cname, cvalue) {
	document.cookie = cname+"="+cvalue+"; path=/";
}
function setCategoriesByCookie(benefitOne, benefitTwo, benefitThree, benefitCard){
	if (!(offersmobile.detect() && !offerstablet.detect())) {
		$("[data-target="+benefitOne+"]").parent().addClass('active');	
		var searchGroup = $('.card-options');	
		if(benefitOne !='more'){
			$.toggleLoansSearch(searchGroup,benefitOne);
		}
		if($("[data-target="+benefitOne+"]").attr("rel") > 6){
			var loansAdded= $('#loans-wrap');
			var loansCurrent = loansAdded.html();
			var thisOne = $("[data-target="+benefitOne+"]").parent();
			//loansAdded.addClass('active');
			loansAdded.html($(thisOne).html());
			$(thisOne).html(loansCurrent);
			$('#loans-wrap').addClass('active');
		}
	} else {
		$( "#FindOffersDrp option:selected" ).removeAttr('selected');
		$("#FindOffersDrp").find("[id="+benefitOne+"]").attr("selected", "selected");
		var benefitOneText = $("#FindOffersDrp").find("[id="+benefitOne+"]").text();
		$("#FindOffersDrp").next().text(benefitOneText);
		var selectedVal = $("#FindOffersDrp option:selected").attr("id");
		$(".latestoffers-default-mobile").find("div[data-name]").removeClass("show").addClass("hide");
		$(".latestoffers-default-mobile").find("div[data-name="+selectedVal+"]").addClass("show");
	}
	if ( benefitTwo == "" && benefitThree == "") {
		var thisid=$("[data-target="+benefitOne+"]").attr("rel");
		if (!(offersmobile.detect() && !offerstablet.detect())) {
			var currBenefitTwo="#benefittwo_"+thisid;
			var selectedOption2 = $(currBenefitTwo+" option:eq(0)").attr("selected", "selected");
			var selectedOption2 = $(currBenefitTwo+" option:eq(0)").text();
			$(currBenefitTwo).next(".holder").text(selectedOption2);
			findLatestOffers();			
		}else{
			var currMobBenefitTwo="#mobbenefittwo_"+thisid;
			var selectedOption2 = $(currMobBenefitTwo+" option:eq(0)").attr("selected", "selected");
			var selectedOption2 = $(currMobBenefitTwo+" option:eq(0)").text();
			$(currMobBenefitTwo).next(".holder").text(selectedOption2);
			findLatestOffersMobile();
		}
	} else {
		var pos  = $("#subnav").contents('.active').children("a").attr("rel");
		var currBenTwo = "#benefittwo_"+pos;
		var currBenThree = "#benefitthree_"+pos;
		var mobPos  = $( "#FindOffersDrp option:selected" ).attr("rel");
		var mobCurrBenTwo = "#mobbenefittwo_"+mobPos;
		var mobCurrBenThree = "#mobbenefitthree_"+mobPos;
		if(benefitTwo !== "") {
			if (!(offersmobile.detect() && !offerstablet.detect())) {
				$(currBenTwo).find('option[value=""]').removeAttr('selected');
				$(currBenTwo+' option[value="' + benefitTwo + '"]').attr("selected", "selected");
				var selectedOption1 = $(currBenTwo).find(":selected").text();
				$(currBenTwo).next(".holder").text(selectedOption1);
				loadDropdown(benefitOne,benefitTwo,pos);
			} else {
				$(mobCurrBenTwo).find('option[value=""]').removeAttr('selected');
				$(mobCurrBenTwo+' option[value="' + benefitTwo + '"]').attr("selected", "selected");
				var selectedOption1 = $(mobCurrBenTwo).find(":selected").text();
				$(mobCurrBenTwo).next(".holder").text(selectedOption1);
				loadDropdownMobile(benefitOne,benefitTwo,mobPos);
			}
		}
		if( benefitThree !== "") {
			if (!(offersmobile.detect() && !offerstablet.detect())) {
				$(currBenThree).find('option[value=""]').removeAttr('selected');
				$(currBenThree+' option[value="' + benefitThree + '"]').attr("selected", "selected");
				var selectedOption2 = $(currBenThree).find(":selected").text();
				$(currBenThree).next(".holder").text(selectedOption2);				
			}else{
				$(mobCurrBenThree).find('option[value=""]').removeAttr('selected');
				$(mobCurrBenThree+' option[value="' + benefitThree + '"]').attr("selected", "selected");
				var selectedOption2 = $(mobCurrBenThree).find(":selected").text();
				$(mobCurrBenThree).next(".holder").text(selectedOption2);
			}
		}
		if (!(offersmobile.detect() && !offerstablet.detect())) {
			loadCardsDropdown(benefitThree,pos);				
		}else{
			loadCardsDropdownMobile(benefitThree,mobPos);
		}
	}		
	if(benefitCard !== "") {	
		var pos  = $("#subnav").contents('.active').children("a").attr("rel");
		var currBenCard = "#benefitcard_"+pos;
		var mobPos  = $( "#FindOffersDrp option:selected" ).attr("rel");
		var mobcurrBenCard = "#mobbenefitcard_"+mobPos;
		if (!(offersmobile.detect() && !offerstablet.detect())) { 
			$(currBenCard).find('option[value=""]').removeAttr('selected');
			$(currBenCard+' option[value="' + benefitCard + '"]').attr("selected", "selected");
			var selectedOption3 = $(currBenCard).find(":selected").text();
			$(currBenCard).next(".holder").text(selectedOption3);
		} else {
			$(mobcurrBenCard).find('option[value=""]').removeAttr('selected');
			$(mobcurrBenCard+' option[value="' + benefitCard + '"]').attr("selected", "selected");
			var selectedOption3 = $(mobcurrBenCard).find(":selected").text();
			$(mobcurrBenCard).next(".holder").text(selectedOption3);
		}
	}
	if($("#findoffer").length == 0) {
		if (!(offersmobile.detect() && !offerstablet.detect())) { 
			findOffersWithoutCookie();			
		}else{
			findOffersMobileWithoutCookie();
		}
	}
}
function isPushStatesupported() {
    var str = browerVersion();
    var res = str.split(",");
    var browser = res[0];
    var version = res[1];
	if( browser.toUpperCase() === 'CHROME'){		
		if(version < 5) {
			return false;
		} else {
			return true;
		}
	} 
	if( browser.toUpperCase() === 'FIREFOX'){		
		if(version < 4) {
			return false;
		} else {
			return true;
		}
	} 
	if( browser.toUpperCase() === 'IE'){		
		if(version < 10) {
			return false;
		} else {
			return true;
		}
	} 
	if( browser.toUpperCase() === 'SAFARI'){		
		if(version < 6) {
			return false;
		} else {
			return true;
		}
	} 
	if( browser.toUpperCase() === 'OPERA'){		
		if(version < 11) {
			return false;
		} else {
			return true;
		}
	} 
}
function browerVersion(){
	var ua= navigator.userAgent, tem, 
	M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	if(/trident/i.test(M[1])){
		tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
		return 'IE,'+(tem[1] || '');
	}
	if(M[1]=== 'Chrome'){
		tem= ua.match(/\bOPR\/(\d+)/);
		if(tem!= null) return 'Opera,'+tem[1];
	}
	M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
	if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
	return M.join(',');
}
function findOffersWithoutCookie() {
	var benefitOne  = $("#subnav").contents('.active').children("a").attr("data-target");
	var pos  = $("#subnav").contents('.active').children("a").attr("rel");
	var currBenTwo = "#benefittwo_"+pos;
	var benefitTwo = $(currBenTwo).val();
	var currBenThree = "#benefitthree_"+pos;
	var benefitThree = $(currBenThree).val();
	var currBenCard = "#benefitcard_"+pos;
	var benefitCard = $(currBenCard).val();
	ajaxCallFindOffer(benefitOne,benefitTwo,benefitThree,benefitCard,0,1,"");
}
function findOffersMobileWithoutCookie(){
	var benefitOne  = $("#FindOffersDrp").val();
	var pos  =  $( "#FindOffersDrp option:selected" ).attr("rel");
	var currBenTwo = "#mobbenefittwo_"+pos;
	var benefitTwo = $(currBenTwo).val();
	var currBenThree = "#mobbenefitthree_"+pos;
	var benefitThree = $(currBenThree).val();
	var currBenCard = "#mobbenefitcard_"+pos;
	var benefitCard = $(currBenCard).val();	
   ajaxCallFindOffer(benefitOne,benefitTwo,benefitThree,benefitCard,0,1,"");
   scrollfunction($("#latest-offers").offset().top,10);
}
function findOffers(){
	var benefitOne  = $("#subnav").contents('.active').children("a").attr("data-target");
	var pos  = $("#subnav").contents('.active').children("a").attr("rel");




	var currBenTwo = "#benefittwo_"+pos;
	var benefitTwo = $(currBenTwo).val();
	var currBenThree = "#benefitthree_"+pos;
	var benefitThree = $(currBenThree).val();
	var currBenCard = "#benefitcard_"+pos;
	var benefitCard = $(currBenCard).val();
	
	if(typeof benefitOne !== 'undefined'){
	setOffersCookie("benefitOne", benefitOne);
		if(typeof benefitTwo !== 'undefined'){
	setOffersCookie("benefitTwo", benefitTwo);
			if(typeof benefitThree !== 'undefined'){
	setOffersCookie("benefitThree", benefitThree);
			}
		}
		if(typeof benefitCard !== 'undefined'){
	setOffersCookie("benefitCard", benefitCard);
		}
	}
   ajaxCallFindOffer(benefitOne,benefitTwo,benefitThree,benefitCard,0,1,"");
	scrollfunction($("#latest-offers").offset().top,500);
	
	
}
function findOffersMobile(){
	var benefitOne  = $("#FindOffersDrp").val();
	var pos  =  $( "#FindOffersDrp option:selected" ).attr("rel");
	var currBenTwo = "#mobbenefittwo_"+pos;
	var benefitTwo = $(currBenTwo).val();
	var currBenThree = "#mobbenefitthree_"+pos;
	var benefitThree = $(currBenThree).val();
	var currBenCard = "#mobbenefitcard_"+pos;
	var benefitCard = $(currBenCard).val();	
	if(typeof benefitOne !== 'undefined'){
	setOffersCookie("benefitOne", benefitOne);
		if(typeof benefitTwo !== 'undefined'){
	setOffersCookie("benefitTwo", benefitTwo);
			if(typeof benefitThree !== 'undefined'){
	setOffersCookie("benefitThree", benefitThree);
			}
		}
		if(typeof benefitCard !== 'undefined'){
	setOffersCookie("benefitCard", benefitCard);
		}
	}
   ajaxCallFindOffer(benefitOne,benefitTwo,benefitThree,benefitCard,0,1,"");
   scrollfunction($("#latest-offers").offset().top,500);
	
	
}

function ajaxCallFindOffer(benefitOne,benefitTwo,benefitThree,benefitCard,start,pageNum,clsVal){
    var moretext =   $('#moretext').val();
	var queryparam =   $('#queryparam').val();
	var offerchild = $("#offerchild").val();
	var ptype = $("#ptype").val();
	var requrl=window.location.href;
	var loadUrl;
	if (requrl.indexOf("/in/") !=-1) {
		loadUrl = "/in";
	}else if(requrl.indexOf("/id/") !=-1){
		loadUrl = "/id";
	}else{
		loadUrl="";
	}
	loadUrl = loadUrl + offerchild;
	//alert(loadUrl);
	$.ajax({
		type: 'POST',
		url: loadUrl,
		cache:false,
		async:true,
		dataType : 'html',
		data: { b1:benefitOne,b2:benefitTwo,b3:benefitThree,prodMap:benefitCard,SearchOffers:true,SearchProducts:false,start:start,pageNum:pageNum,clsVal:clsVal,PromotionType:ptype,moretext:moretext,qparam:queryparam},
		success: function(data) {
			$('#paginationOffer').show();
			$('#offersSection').show();			
			var paginComp = $(data).find('#pagination').html();
			if( paginComp !== "") {
			$('#paginationOffer').html(paginComp);	
			} else {
				$('#paginationOffer').hide();
			}
			var currPageComp = $(data).find('#hiddendivpage').html();
			$('#hiddendivpage').html(currPageComp);
			var offerComp = $(data).find('#latestOffers').html();
			$('#latestOffers').html(offerComp);	
			var offertype = $(data).find('#offertypediv').html();
			$('#offertypediv').html(offertype);
			searchOffersView();
		},
		error: function(XMLHttpRequest,textStatus,errorThrown) {
			console.log("error while loading the page "+loadUrl);
			searchOffersView(); // tobe remove as ajax is not working in static HTMLs
		},
		complete: function(XMLHttpRequest, status) {
		}
	});
}
function ajaxCallSearchCards(benefitOne,benefitTwo,benefitThree,cardsid){
	var ptype = $("#ptype").val();
	var offerchild = $("#offerchild").val();
	var requrl=window.location.href;
	var loadUrl;
	if (requrl.indexOf("/in/") !=-1) {
		loadUrl = "/in";
	}else if(requrl.indexOf("/id/") !=-1){
		loadUrl = "/id";
	}else{
		loadUrl="";
	}
	var asyncCall=true;
	if(getOffersCookie("benefitCard"))
	{
		asyncCall=false;
	}
	loadUrl = loadUrl + offerchild;
	$.ajax({
		type: 'POST',
		url: loadUrl,
		cache:false,
		async:asyncCall,
		dataType : 'html',
		data: {SearchProducts:true,SearchOffers:false,b1:benefitOne,b2:benefitTwo,b3:benefitThree,PromotionType:ptype},
		success: function(data) {
			var prodComp = $(data).find('#benefitcard').html();
			$(cardsid).find('option:gt(0)').remove();
			$(cardsid).append(prodComp);
			$(cardsid).val($(cardsid).find('option').first().val());
			//MR1504 - removed default selected
			var selectedOption2 = $(cardsid).find(":selected").text();
			$(cardsid).next(".holder").text(selectedOption2);
		},
		error: function(XMLHttpRequest,textStatus,errorThrown) {
			console.log("error while loading the page "+loadUrl);
		},
		complete: function(XMLHttpRequest, status) {
		}
	});
}
function ajaxCallSearchCardsMobile(benefitOne,benefitTwo,benefitThree,cardsid){
	var ptype = $("#ptype").val();
	var offerchild = $("#offerchild").val();
	var requrl=window.location.href;
	var loadUrl;
	if (requrl.indexOf("/in/") !=-1) {
		loadUrl = "/in";
	}else if(requrl.indexOf("/id/") !=-1){
		loadUrl = "/id";
	}else{
		loadUrl="";
	}
	var asyncCall=true;
	if(getOffersCookie("benefitCard"))
	{
		asyncCall=false;
	}
	loadUrl = loadUrl + offerchild;
	$.ajax({
		type: 'POST',
		url: loadUrl,
		cache:false,
		async:asyncCall,
		dataType : 'html',
		data: {SearchProducts:true,SearchOffers:false,b1:benefitOne,b2:benefitTwo,b3:benefitThree,PromotionType:ptype},
		success: function(data) {
			var prodComp = $(data).find('#benefitcard').html();
			$(cardsid).find('option:gt(0)').remove();
			$(cardsid).append(prodComp);
			$(cardsid).val($(cardsid).find('option').first().val());
			//MR1504 - removed default selected			
			var selectedOption2 = $(cardsid).find(":selected").text();
			$(cardsid).next(".holder").text(selectedOption2);
		},
		error: function(XMLHttpRequest,textStatus,errorThrown) {
			console.log("error while loading the page "+loadUrl);
		},
		complete: function(XMLHttpRequest, status) {
		}
	});
}
function checkClassOffer(){
	if($("#latest-offers").length > 0) {
		scrollfunction($("#latest-offers").offset().top,500);
	}
	var liclsValue = $(this).parent().attr("class");
	if(liclsValue !='disabled'){
		var page = $(this).text();
		var clsValue = $(this).attr("class");
		if (!(offersmobile.detect() && !offerstablet.detect())) { 
			onPageChangeOffer(page,clsValue);
		}else{
			onPageChangeOfferMobile(page,clsValue);
		}
		
	}

}
function onPageChangeOffer(page,clsValue){
	var pageNum=1;
	if(page == ""){
		if(clsValue =='prev'){
			pageNum = $("input:hidden[rel = page]").val();

		}
		if(clsValue =='next'){
			pageNum = $("input:hidden[rel = page]").val();		
		}
	}
	var benefitOne  = $("#subnav").contents('.active').children("a").attr("data-target");
	var pos  = $("#subnav").contents('.active').children("a").attr("rel");




	var currBenTwo = "#benefittwo_"+pos;
	var benefitTwo = $(currBenTwo).val();
	var currBenThree = "#benefitthree_"+pos;
	var benefitThree = $(currBenThree).val();
	var currBenCard = "#benefitcard_"+pos;
	var benefitCard = $(currBenCard).val();
	
	var searchPage = $("input:text[id='SearchTxt']").val();
	var type =  $("#offertype").val();
	if(type =='search'){
		ajaxCallSearchOffers(searchPage,page,pageNum,clsValue);
	}
	
	else{

		   ajaxCallFindOffer(benefitOne,benefitTwo,benefitThree,benefitCard,page,pageNum,clsValue);
	}
}
function onPageChangeOfferMobile(page,clsValue){
	var pageNum=1;
	if(page == ""){
		if(clsValue =='prev'){
			pageNum = $("input:hidden[rel = page]").val();

		}
		if(clsValue =='next'){
			pageNum = $("input:hidden[rel = page]").val();		
		}
	}
	var benefitOne  = $("#FindOffersDrp").val();
	var pos  =  $( "#FindOffersDrp option:selected" ).attr("rel");
	var currBenTwo = "#mobbenefittwo_"+pos;
	var benefitTwo = $(currBenTwo).val();
	var currBenThree = "#mobbenefitthree_"+pos;
	var benefitThree = $(currBenThree).val();
	var currBenCard = "#mobbenefitcard_"+pos;
	var benefitCard = $(currBenCard).val();
	
	var searchPage = $("input:text[id='SearchTxt']").val();
	var type =  $("#offertype").val();
	if(type =='search'){
		ajaxCallSearchOffers(searchPage,page,pageNum,clsValue);
	}else{
		   ajaxCallFindOffer(benefitOne,benefitTwo,benefitThree,benefitCard,page,pageNum,clsValue);
	}
}
function findLatestOffers(){
	var benefitOne  = $("#subnav").contents('.active').children("a").attr("data-target");
	var idStr  = $("#subnav").contents('.active').children("a").attr("rel");





	var cardsid = "#benefitcard_"+idStr;
	var currBenTwo = "#benefittwo_"+idStr;

	var benefitTwo = $(currBenTwo).val();

	//$(cardsid).empty();
	$(cardsid).find('option:gt(0)').remove();
	if(benefitOne != ""){
		if(typeof benefitOne === 'undefined'){
			
		}else{
			ajaxCallSearchCards(benefitOne,benefitTwo,"",cardsid);
				
		}
	}
		
	}
function findLatestOffersMobile(){
	var benefitOne  =$("#FindOffersDrp").val();
	var idStr  = $( "#FindOffersDrp option:selected" ).attr("rel");
	var cardsid = "#mobbenefitcard_"+idStr;
	var currBenTwo = "#mobbenefittwo_"+idStr;
	var benefitTwo = $(currBenTwo).val();
	//$(cardsid).empty();
	$(cardsid).find('option:gt(0)').remove();
	if(benefitOne != ""){
		if(typeof benefitOne === 'undefined'){
			
		}else{
			ajaxCallSearchCardsMobile(benefitOne,benefitTwo,"",cardsid);
				
		}
	}
		
	}
  function findLatestMoreBen(moreBen,idStr){
		

	  if(typeof moreBen === 'undefined'){
			
		}else{
			var currBenThree = "#benefitthree_"+idStr;
			var cardsid = "#benefitcard_"+idStr;
			var benefitTwo =  "#benefittwo_"+idStr;
			$(cardsid).find('option:first').attr('selected', 'selected');
			$(benefitTwo).find('option:first').attr('selected', 'selected');

			$(currBenThree).find('option:first').attr('selected', 'selected');
			ajaxCallSearchCards(moreBen,"","",cardsid);
			
				
		}
  }
  function subnavchange(){
	  	var idStr  = $("#subnav").contents('.active').children("a").attr("rel");
		var vanityURL = $("#subnav").contents('.active').children("a").attr("vanity");
		if(vanityURL !== ''){
			if(typeof vanityURL === 'undefined'){
				} else {
					vanityURL = vanityURL.replace(/^\//, '');
					if(isPushStatesupported()) {						
						window.history.pushState("string", "Title", "/"+vanityURL);
					} else {
						deleteOffersCookies();
						var benefitOne  = $("#subnav").contents('.active').children("a").attr("data-target");
						setOffersCookie("benefitOne", benefitOne);
						var protocol=$(location).attr('protocol');
						var hostname=$(location).attr('hostname');
						var fullURL=protocol+"//"+hostname+"/"+vanityURL;
						$(location).attr('href', fullURL);      
						$('#offersSection').focus();
						return false;
					}
			}
		}



		var currBenThree = "#benefitthree_"+idStr;
		var cardsid = "#benefitcard_"+idStr;
		var benefitTwo =  "#benefittwo_"+idStr;
		$(cardsid).find('option:first').attr('selected', 'selected');
		$(benefitTwo).find('option:first').attr('selected', 'selected');

		$(currBenThree).find('option:first').attr('selected', 'selected');
		var benefitTwoOption = $(benefitTwo).find(":selected").text();
		$(benefitTwo).next(".holder").text(benefitTwoOption);
		var benefitThreeOption = $(currBenThree).find(":selected").text();
		$(currBenThree).next(".holder").text(benefitThreeOption);
		var benefitCardOption = $(cardsid).find(":selected").text();
		$(cardsid).next(".holder").text(benefitCardOption);

		findLatestOffers();
  }
  function subnavchangeMobile(){
	   	var idStr  = $( "#FindOffersDrp option:selected" ).attr("rel");
		var vanityURL = $( "#FindOffersDrp option:selected" ).attr("vanity");
		if(vanityURL !== ''){
				if(typeof vanityURL === 'undefined'){
				} else {
					deleteOffersCookies();
					vanityURL = vanityURL.replace(/^\//, '');
						var benefitOne  =$("#FindOffersDrp").val();
						setOffersCookie("benefitOne", benefitOne);
						var protocol=$(location).attr('protocol');
						var hostname=$(location).attr('hostname');
						var fullURL=protocol+"//"+hostname+"/"+vanityURL;
						$(location).attr('href', fullURL);      
						$('#offersSection').focus();
						return false;
					//window.history.pushState("string", "Title", "/"+vanityURL);
				}
		}
	   	var currBenThree = "#mobbenefitthree_"+idStr;
		var cardsid = "#mobbenefitcard_"+idStr;
		var benefitTwo =  "#mobbenefittwo_"+idStr;
		$(cardsid).find('option:first').attr('selected', 'selected');
		$(benefitTwo).find('option:first').attr('selected', 'selected');

		$(currBenThree).find('option:first').attr('selected', 'selected');
		var benefitTwoOption = $(benefitTwo).find(":selected").text();
		$(benefitTwo).next(".holder").text(benefitTwoOption);
		var benefitThreeOption = $(currBenThree).find(":selected").text();
		$(currBenThree).next(".holder").text(benefitThreeOption);
		var benefitCardOption = $(cardsid).find(":selected").text();
		$(cardsid).next(".holder").text(benefitCardOption);

		findLatestOffersMobile();
}	
/*
 * Added to enable pagination in news list
 * 16-01-2015
 */
function newsList(){
	ajaxCallNews(0, 1, "");
	$('#newsroom').hide();
	$('#newspagination').hide();
}
function ajaxCallNews(start, pageNum, clsVal) {
	var ajax_load;
	ajax_load = "<div id='newsimgajax'><img src='/iwov-resources/images/ajax-loader.gif' alt='loading'/></div>";
	$('#newsroom').html(ajax_load);
	var country = $('#country').val();
	var monthFrom = $('#monthFrom').val();
	var monthTo = $('#monthTo').val();
	var yearFrom = $('#yearFrom').val();
	var yearTo = $('#yearTo').val();
	var newschild = $('#newschild').val();
	var requrl = window.location.href;
	var loadUrl;
	if (requrl.indexOf("/in/") != -1) {
		loadUrl = "/in";
	} else if (requrl.indexOf("/id/") != -1) {
		loadUrl = "/id";
	} else {
		loadUrl = "";
	}
	loadUrl = loadUrl + newschild;
	$.ajax({
		type : 'POST',
		url : loadUrl,
		cache : false,
		async : true,
		dataType : 'html',
		data : {
			start : start,
			pageNum : pageNum,
			clsVal : clsVal,
			Country : country,
			FromMonth: monthFrom,
			ToMonth: monthTo,
			FromYear: yearFrom,
			ToYear: yearTo			
		},
		success : function(data) {			
			$('#newsimgajax').hide();
			$('#newsroom').show();
			$('#newspagination').show();
			var newscontent = $(data).find('#newslist').html();
			$('#newsroom').html(newscontent);
			$('#newsroom').prepend($('#newstitle').val());
			var paginComp = $(data).find('#newspagination').html();
			$('#newspagination').html(paginComp);
			var currPageComp = $(data).find('#hiddendivnews').html();
			$('#hiddendivnews').html(currPageComp);	

		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			console.log("error while loading the page " + loadUrl);
		},
		complete : function(XMLHttpRequest, status) {
		}
	});
}
function checkClassNews() {
	var liclsValue = $(this).parent().attr("class");
	if (liclsValue != 'disabled') {
		var page = $(this).text();
		var clsValue = $(this).attr("class");
		onPageChangeNews(page, clsValue);
	}

}
function onPageChangeNews(page, clsValue) {
	var pageNum = 1;
	if (page == "") {
		if (clsValue == 'prev') {
			pageNum = $("input:hidden[rel = page]").val();

		}
		if (clsValue == 'next') {
			pageNum = $("input:hidden[rel = page]").val();
		}
	}
	ajaxCallNews(page, pageNum, clsValue);	
	/*$('#newsroom').hide();
	$('#newspagination').hide();*/
}	

/*Additional functions for card offer pages
 **
*/
/*Compute the height of cards per row.*/
function autoHeight(_element){
	 var maxHeight = -1;
	 _element.each(function() {
	   maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
	 });
	 if (maxHeight > 90) {
		 _element.each(function() {
			 $(this).css('height',maxHeight+"px");
		 });
	 }
}
/*On click of search button it animates/shows the cards and initialize all events related to cards.*/
function searchOffersView() {
//	 var scrollPos = $('#FindOffersDrp').parents('.page-module').offset().top;
//	 $('html, body').animate({
//		 scrollTop: scrollPos
//	 }, 500);
	 alignCards('.search-deal-box .span4');
	 orientationCards(); //on window resize
	 if($('.visible-phone').is(':visible')){ //mobile
		  $('.search-deal-box-content').children(":first-child").unwrap('.search-deal-box-content');
		  cardsLandscapeControl();
	 }else{//desktop
		  $('.search-deal-box  .search-deal-box-content').each(function(o,j){ 
			   autoHeight($(j).find('.deal-box-content'));  												 
		  }); 
	 }
}
/*margin controls on the cards, Desktop will have 3 cards and mobile will have two cards.
 *This allow the cards to have remove the extra margins on the left.
 */
function alignCards(elem){
	 $(elem).each(function(o,j){
		 var num = o%3;
		 if ($('.visible-phone:first').is(':visible')) {
			 num = o%2;  
		 }
		 if (num == 0) {
			 $(j).addClass('mLeft-0');
		 }
	 });
}
/*Detects if its oriented to portrait or landscape,
 *if its landscape it perform a height calculation for cards in mobile as it should show 2 cards.
 */
function orientationCards(){
	 $(window).on("resize", function () {
		  if($('.visible-phone').is(':visible')){ //mobile
			   cardsLandscapeControl();
		  }   
	 });
}
function cardsLandscapeControl(){
	 var dealBoxContent = $('.search-deal-box .span4 .deal-box-content');
	 if ($(this).width() >=480) { //landscape of iphone 4
		  var maxArray =[];
		  var maxHeight = -1;
		  dealBoxContent.each(function(o,j) {
			   maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
			   if(o%2 == 1){
					maxArray.push(maxHeight);
					maxHeight=-1;
			   }
		  });
		  var index=0;
		  dealBoxContent.each(function(i,k) {
			   newMaxheight=  maxArray[index];
			  $(this).css('height',newMaxheight+"px");
			  if(i%2 == 1){
					index++;
			   }
		  });
	 }else{
		  dealBoxContent.removeAttr('style');
	 }
}
// 5-Star Rating - Apr 2016

function validate5starSubmit(){
	var str=$('#star-rating input:checked').val()
	var $submitBtn = $('#sumbit5StarRating')
	if(str<4){
		if($('#msgToImprove').val()==''){
			$('#errormsgfivestar1').css('display','none');
		}
		if($(".rating-btn.active").length>0){
			$($submitBtn).prop('disabled', false);
		}
		if($(".rating-btn.active").length==0 || $('#errormsgfivestar1').is(":visible")){
			$($submitBtn).prop('disabled', true);
		}
	}

	if(str >=4){
		$($submitBtn).prop('disabled', false);
	}
	if(str==4){
		if($('#msg4star').val()==''){
			$('#errormsgfivestar').css('display','none');
			$($submitBtn).prop('disabled', false);
		}
		if($('#errormsgfivestar').is(":visible")){
			$($submitBtn).prop('disabled', true);
		}

	}

}
$(function(){


	if($(".st").length==1 && $(window).width()>10){ if($(".product-summary").length==1) $(".product-summary").append($(".st"));
	else if($(".breadcrumb").length==1) {
		if($("div[itemprop=breadcrumb]").next().hasClass("page-module")) $("div[itemprop=breadcrumb]").next().append($(".st"));
		else $(".breadcrumb").append($(".st"));
	}
	else $(".page-module:first-child").append($(".st"));}

	var $inputs = $('.rating-input');
	$inputs.slice(0).hide();

	$('#star-rating').on('click', function(){
		var oCheckedVal = $('#star-rating input:checked').val();
		$('#errormsgfivestar').css('opacity','0');
                                                $('#errormsgfivestar1').css('opacity','0');
                                                setTimeout(function() {
                                                                $('#errormsgfivestar').css('opacity','1');
                                                $('#errormsgfivestar1').css('opacity','1');
                                                },500)

		//alert(oCheckedVal);
		oCheckedVal = (oCheckedVal <=3) ? 1 : oCheckedVal,

			$target = $('#rating' + oCheckedVal + 'On').show('slow'),
			$submitBtn = $('#sumbit5StarRating'),
			$msgBox = $('#star-rating textarea'),
			$MaxLenInfoBox = $("#ratingFrm .maxlength"),
			$formInputs = $('form#ratingFrm :input');
		$inputs.not($target).hide('slow');
		if($('#star-rating input:checked').length == 0 ) $($submitBtn).css('display', 'none');
		else $($submitBtn).css('display', 'block');

		if (!oCheckedVal) {
			//$($submitBtn).css('display', 'block');
		}

		else if (oCheckedVal == 5) {
			resetForm(false);
		} else if (oCheckedVal == 4) {
			$('#msg4star').focus();
			resetForm(false);
			var $msgTextarea=$('#msg4star').val()
			var regex=/^[0-9a-zA-Z ,@!?$&\-()',.\n\r\/]+$/
			if(!regex.test($msgTextarea)){
				$('#errormsgfivestar').css('display','block');
				$($submitBtn).prop('disabled', true);
			}
			validate5starSubmit();
		} else if (oCheckedVal <= 3) {
			// $('#msg4star').val('');
			var $isCategorySelected = $('.rating-btn input:checked').length > 0;
			if($isCategorySelected){
				if($('#errormsgfivestar1:visible').length>0){
					$($submitBtn).prop('disabled', true);
				}
				else{
					$($submitBtn).prop('disabled', false);
				}

			} else {
				$($submitBtn).prop('disabled', true);
			};

			var $msgTextarea=$('#msgToImprove').val()
			var regex=/^[0-9a-zA-Z ,@!?$&\-()',.\n\r\/]+$/
			if(!regex.test($msgTextarea)){
				if($('#rating1On:visible').length>0){
					$('#errormsgfivestar1').css('display','block');
				}else if($('#rating4On:visible').length>0){
					$('#errormsgfivestar').css('display','block');
				}
			}
			validate5starSubmit();
		} else {
			$($submitBtn).prop('disabled', true);
		}

		$('.rating-btn').on('click', function(){
			var $thisButton = $(this).find('input[type=checkbox]'),
				$cmntBox = $('#msgToImprove');

			if($(this).hasClass('active')){
				$(this).removeClass('active');
				if($thisButton.is(':checked')){$thisButton.attr("checked", true)} else {$thisButton.attr("checked", false)}
				//$($cmntBox).focus();
			} else {
				$(this).addClass('active');
				if($thisButton.is(':checked')){$thisButton.attr("checked", true)} else { $thisButton.attr("checked", false)}
				//$($cmntBox).focus();
			}
		});

		function resetForm(clr){
			$('.rating-btn').find('input[type=checkbox]:checked').attr("checked", false);

			$('.rating-bttn-group label').removeClass('active');
			$('#errormsgfivestar').css('display','none');
			$('#errormsgfivestar1').css('display','none');
			var $msgTextarea;
			if(clr){
				$($msgBox).val('');
				$($MaxLenInfoBox).text('500');
			}
			$($submitBtn).prop('disabled', false);
			if($('#rating1On:visible').length>0){
				$msgTextarea=$('#msgToImprove').val();
			}else if($('#rating4On:visible').length>0){
				$msgTextarea=$('#msg4star').val();
			}
			var regex=/^[0-9a-zA-Z ,@!?$&\-()',.\n\r\/]+$/
			if(!regex.test($msgTextarea))
			{
				if($('#rating1On:visible').length>0){
					$('#errormsgfivestar1').css('display','block');
				}else if($('#rating4On:visible').length>0){
					$('#errormsgfivestar').css('display','block');
				}

				$($submitBtn).prop('disabled', true);
			}
			validate5starSubmit();
		}

	});


	$('#star-rating textarea').keyup(function(e){
		var $limit = 500,
			$val = $(this).val(),
			$len = $val.length,
			$nVal = ( $len - $limit );

		if ($len <= $limit) {
			$($MaxLenInfoBox).text(Math.abs($nVal));
		} else {
			$($MaxLenInfoBox).text(Math.abs($nVal) + ": You have exceeded character limit 500");
		}

		var regex=/^[0-9a-zA-Z ,@!?$&\-()',.\n\r\/]+$/
		if(!regex.test($val)){
			if($('#rating1On:visible').length>0){
				$('#errormsgfivestar1').css('display','block');
			}else if($('#rating4On:visible').length>0){
				$('#errormsgfivestar').css('display','block');
			}


			$($submitBtn).prop('disabled', true);
		}
		else{
			if($('#rating1On:visible').length>0){
				$('#errormsgfivestar1').css('display','none');
			}else if($('#rating4On:visible').length>0){
				$('#errormsgfivestar').css('display','none');
			}

			$($submitBtn).prop('disabled', false);
			if($('#rating1On:visible').length>0){
				if($('.rating-btn input:checked').length<=0){
					$($submitBtn).prop('disabled', true);
				}
			}

		}
		validate5starSubmit();
	});


	$('#star-rating textarea').on("paste",function(e){
		setTimeout(function () {
			var $limit = 500;
			if($('#rating1On:visible').length>0){
				var $val = $("#msgToImprove").val();
			}else if($('#rating4On:visible').length>0){
				var $val = $("#msg4star").val();
			}
			var $len = $val.length,
				$nVal = ( $len - $limit ),
				$len = $val.length,
				$nVal = ( $len - $limit );

			if ($len <= $limit) {
				$($MaxLenInfoBox).text(Math.abs($nVal));
			} else {
				$($MaxLenInfoBox).text(Math.abs($nVal) + ": You have exceeded character limit 500");
			}

			var regex=/^[0-9a-zA-Z ,@!?$&\-()',.\n\r\/]+$/
			if(!regex.test($val)){
				if($('#rating1On:visible').length>0){
					$('#errormsgfivestar1').css('display','block');
				}else if($('#rating4On:visible').length>0){
					$('#errormsgfivestar').css('display','block');
				}


				$($submitBtn).prop('disabled', true);
			}
			else{
				if($('#rating1On:visible').length>0){
					$('#errormsgfivestar1').css('display','none');
				}else if($('#rating4On:visible').length>0){
					$('#errormsgfivestar').css('display','none');
				}

				$($submitBtn).prop('disabled', false);
				if($('#rating1On:visible').length>0){
					if($('.rating-btn input:checked').length<=0){
						$($submitBtn).prop('disabled', true);
					}
				}

			}
			validate5starSubmit();
		}, 100);

	});
	$('#sumbit5StarRating').click(function(event){
		event.preventDefault();
		$('.starRating').addClass('posted');
		var rating = $('#star-rating input:checked').val();
		var feedbackcategory = "";
		$('#ratingFrm input:checkbox:checked').each(function(){
			feedbackcategory = feedbackcategory +  $(this).attr("cname");
			feedbackcategory += ",";

		});
		var feedbackComment = "";
		if(rating == 4){
			feedbackComment = $('#msg4star').val();
		}else{
			feedbackComment = $('#msgToImprove').val();
		}
		$('#ratingFrm').addClass('hide');
		var productName= "";
		var headingname1=$('h1.introtextproddetailname').text();
		var headingname2 = $('.breadcrumb').find( "li.active" ).text();
		var headingname3 = $('.seo-h1').text();
		var headingname4 = $('h1').text();
	
		if (headingname1 != ""){
		  productName = headingname1;
		}else if (headingname2 != ""){
		productName = headingname2;
		}else if (headingname3 != ""){	
		productName= headingname3;
		}else{
		productName=headingname4;
			}
		
		feedbackcategory = feedbackcategory.replace(/,\s*$/, "");
		$.ajax({
			type: "POST",
			url: ajaxURL,
			cache: false,
			async: false,
			dataType: "xml",
			data: {
				'ratingvalue': rating,
				'feedbackcategoryvalue': feedbackcategory,
				'feedbackComment' : feedbackComment,
				'productName':productName,


			},
			success: function(responseText) {
				$('#infoBlk').text(successMessage);
				$('#infoBlk').addClass('show');

			},
			error: function(xhr, textStatus, errorThrown) {
				$('#infoBlk').text(successMessage);
				$('#infoBlk').addClass('show');
			}
		});

		var scrollTab=$("#star-rating").parent().get(0);
		scrollTab.scrollIntoView(true);

	});

});
// 5-Star Rating - Apr 2016
