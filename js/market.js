/**Country: India**/
/*
* (C) Copyright 2013 DevCartel. All rights reserved,
* Bangkok, Thailand
*/
var marketOverviewWidget = null;

TrisUI.ready = function (){
    $.each(DevCartel.MarketOverview.AssetClass, function(key, value) {
        $('#DevCartel_MarketOverview_SelectAssetClass')
            .append($("<option></option>")
            .attr("value",key)
            .text(value.name));
        });
    changeMarketAssetClass("indices");
    
    //[2013-07-01 DBS-Kevin] Added - BEGIN
    /**Set Currencies Headings**/
    $('#CurrencyAgainstLabel').html(DevCartel.CurrenciesHeading.against);
    $('#DevCartel_MarketOverview_CurrencySwitch_Default').html('<span>' + DevCartel.CurrenciesHeading.usd + '</span>');
    $('#DevCartel_MarketOverview_CurrencySwitch_HomeCurrency').html('<span>' + DevCartel.CurrenciesHeading.local + '</span>');
    //[2013-07-01 DBS-Kevin] Added - END
};
function changeMarketAssetClass(assetClassId, groupId){
    var countryCode = "in";
    //[2013-07-01 DBS-Kevin] Modified - BEGIN
    //var currency = "INR";
    var currency = DevCartel.CurrenciesHeading.local;
    //[2013-07-01 DBS-Kevin] Modified - END
    if(marketOverviewWidget){
        marketOverviewWidget.remove();
        marketOverviewWidget = undefined;
    }        
    if(assetClassId == 'funds'){
        $('#DevCartel_MarketOverview_SelectChartView').show();
        $('#DevCartel_MarketOverview_CurrencySwitch').hide();
        var assetClass = DevCartel.MarketOverview.getAssetClass(countryCode, assetClassId, groupId);  
        marketOverviewWidget = $('<div id="DevCartel_Chart_1"></div>').appendTo($('#DevCartel_MarketOverview_Holder'))
            .devcartel_marketoverview_chart({
                url: DevCartel.TRISConfig.chartServerUrl,
                service : DevCartel.TRISConfig.chartService,
                container: "#DevCartel_Chart_1",
                symbols: assetClass.symbols,
                dataInterval: DevCartel.MarketOverview.getChartView('day'),
                chartOptions: DevCartel.MarketOverview.ChartOptions
            });
        var defaultView = $("#DevCartel_MarketOverview_SelectChartView_Default");
        updateMarketChartViewDisplay(defaultView[0]);
        
    }else{
        $('#DevCartel_MarketOverview_SelectChartView').hide();
        var showMiniChart = false;
        var miniChartConfig = null;
        var assetClass = null;
        if(assetClassId == 'currencies'){
            if(!groupId || groupId == ''){
                groupId = "usd";
            }
            assetClass = DevCartel.MarketOverview.getAssetClass(countryCode, assetClassId, groupId);
            showMiniChart = assetClass.showMiniChart;
            miniChartConfig = {
                url: DevCartel.TRISConfig.chartServerUrl,
                service : DevCartel.TRISConfig.chartService,                        
                chartOptions: DevCartel.MarketOverview.MiniChartOptions,
                dataInterval: DevCartel.MarketOverview.MiniChartDataInterval
            };
            var defaultView = $("#DevCartel_MarketOverview_CurrencySwitch_Default");
            updateCurrencyViewDisplay(defaultView[0]);
            $('#DevCartel_MarketOverview_CurrencySwitch').show();
        }else{
            assetClass = DevCartel.MarketOverview.getAssetClass(countryCode, assetClassId, groupId);
            $('#DevCartel_MarketOverview_CurrencySwitch').hide();
        }            
        marketOverviewWidget = $('<div id="DevCartel_Quote_1"></div>').appendTo($('#DevCartel_MarketOverview_Holder'))
            .devcartel_marketoverview_quote({
                url: DevCartel.TRISConfig.quoteServerUrl,
                service : DevCartel.TRISConfig.quoteService,
                container: "#DevCartel_Quote_1",
                symbols: assetClass.symbols,
                symbolNames: assetClass.symbolNames,
                fields : assetClass.fields,
                fieldLabels: assetClass.fieldLabels,
                showName: true,
                showTick: false,
                showMiniChart: showMiniChart,
                miniChartConfig: miniChartConfig
            });           	
    }
    $('#DevCartel_MarketOverview_Title').text(DevCartel.MarketOverview.AssetClass[assetClassId].title);
    $('#DevCartel_MarketOverview_CurrencySwitch_HomeCurrency').text(currency);

}
function changeMarketChartView(chartViewKey, element){
    marketOverviewWidget.devcartel_marketoverview_chart("changeDataInterval", DevCartel.MarketOverview.getChartView(chartViewKey));
    updateMarketChartViewDisplay(element)
}
function updateMarketChartViewDisplay(element){
    var elem = $(element);
    var sibblings = $("#DevCartel_MarketOverview_SelectChartView").find("a");
    for(var i=0; i<sibblings.length; i++){
        $(sibblings[i]).removeClass("chart-view-selected");
    }
    elem.addClass("chart-view-selected");
}
function changeCurrencyView(currencyViewKey, element){
    changeMarketAssetClass("currencies", currencyViewKey);
    updateCurrencyViewDisplay(element);
}
function updateCurrencyViewDisplay(element){
    var elem = $(element);
    var sibblings = $("#DevCartel_MarketOverview_CurrencySwitch").find("a");
    for(var i=0; i<sibblings.length; i++){
        $(sibblings[i]).removeClass("currency-switch-selected");
    }
    elem.addClass("currency-switch-selected");
}