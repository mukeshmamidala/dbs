

var DevCartel = {};
DevCartel.MarketOverview = {};


 DevCartel.CurrenciesHeading = {
    against: "Against:",
    usd: "USD",
    local: "INR"
};



DevCartel.TRISConfig = {
    chartServerUrl: "/in/iw/proxyPage.jsp?target=chartServerUrl",
    quoteServerUrl: "/in/iw/proxyPage.jsp?target=quoteServerUrl",
    chartService: "IDN_SELECTFEED",
    quoteService: "IDN_SELECTFEED"
};


DevCartel.MarketOverview.AssetClass = {
    indices: {name: "Indices", title: "Stock Market"},
    currencies: {name: "Currencies", title: "Foreign Currencies"}
};
DevCartel.MarketOverview.CountryAssetClass = {
    'in': {
        indices: {
            symbols: 	 	['/.BSESN','/.SPX','/.DJI','.IXIC','/.STOXX'],
            symbolNames: 	['BSE Sensex','S&amp;P','Dow Jones','Nasdaq','Euro Stoxx'],
            fields: 	 	[["TRDPRC_1","HST_CLOSE"],"HIGH_1","LOW_1","NETCHNG_1","PCTCHNG"],
            fieldLabels: 	["Latest","High","Low","Chg","Chg%"],
            showMiniChart: 	false
        },
        currencies: {
        	local: {
                symbols: 	 	['INR=','JPYINR=X','EURINR=X','GBPINR=X','AUDINR=X','CNHINR=R','CADINR=R'],
                symbolNames: 	['USD/INR','JPY/INR','EUR/INR','GBP/INR','AUD/INR','CNH/INR','CAD/INR'],
                fields: 	 	["BID","HIGH_1","LOW_1","NETCHNG_1","PCTCHNG"],
                fieldLabels: 	["Latest","High","Low","Chg","Chg%"],
                showMiniChart: 	true
            },
            usd: {
                symbols: 	 	['INR=','JPY=','EUR=','GBP=','AUD=','CNH=','CAD='],
                symbolNames: 	['USD/INR','USD/JPY','EUR/USD','GBP/USD','AUD/USD','USD/CNH','USD/CAD'],
                fields: 	 	["BID","HIGH_1","LOW_1","NETCHNG_1","PCTCHNG"],
                fieldLabels: 	["Latest","High","Low","Chg","Chg%"],
                showMiniChart: 	true
            }
        }
    }
};
var millisecond_day=1000 * 60 * 60 * 24;
var millisecond_year=1000 * 60 * 60 * 24 * 365;
var endDate = new Date();
var back1Days = new Date(endDate.getTime()-(1*millisecond_day));
var back3Days = new Date(endDate.getTime()-(3*millisecond_day));
var back5Days = new Date(endDate.getTime()-(5*millisecond_day));
var back15Days = new Date(endDate.getTime()-(15*millisecond_day));
var back30Days = new Date(endDate.getTime()-(30*millisecond_day));
var back4Months = new Date(endDate.getTime()-(120*millisecond_day));
var back1Years = new Date(endDate.getTime()-(1*millisecond_year));
var back5Years = new Date(endDate.getTime()-(5*millisecond_year));
DevCartel.MarketOverview.ChartView = {
    hour : {interval: 'MINUTE', frequency: 30, displayUnit: 'H', displayInterval: 16, startDate: back5Days, endDate: endDate, textFormat: "h tt"},
    day:   {interval: 'DAILY', 	frequency: 1,  displayUnit: 'D', displayInterval: 365, startDate: back1Years, endDate: endDate, textFormat: "d.mmm.yy"},
    week:  {interval: 'WEEKLY',  frequency: 1, displayUnit: 'W', displayInterval: 52, startDate: back1Years, endDate: endDate, textFormat: "d.mmm.yy"},
    month: {interval: 'MONTHLY', frequency: 1, displayUnit: 'M', displayInterval: 60, startDate: back5Years, endDate: endDate, textFormat: "mmm.yy"},
    year: {interval: 'MONTHLY', frequency: 1, displayUnit: 'Y', displayInterval: 12, startDate: back5Years, endDate: endDate}
};
DevCartel.MarketOverview.ChartOptions = {
    xaxis: {
        showLabels: true,
        color:"#636363",
        labelBGColor:"#ffffff",
        labelBGOpacity:0.1
    },
    yaxis: {
        showLabels: true,
        color:"#636363",
        tickDecimals:2
    },
    grid: {
        verticalLines: true,
        horizontalLines: false,
        zeroLine:false,
        tickColor: "#eeeff1",
        outlineWidth: 0,
        labelMargin: 0
    },
    line:{
        color: "#D53F3F",
        lineWidth: 2
    },
    mouse: {
        track: true,
        sensibility: 1,
        trackDecimals: 2,
        fillColor: "#0e0e0e",
        fillOpacity: 1,
        lineColor: "#0e0e0e"
    },
    HtmlText: false,
    fontSize: 10
};
DevCartel.MarketOverview.MiniChartDataInterval = {
		interval: 'MINUTE', frequency: 5, displayUnit: 'H', displayInterval: 48, startDate: back3Days, endDate: endDate, textFormat: "h tt"
};
DevCartel.MarketOverview.MiniChartOptions = {
    xaxis: {
        showLabels: true,
        color:"#636363",
        labelBGColor:"#ffffff",
        labelBGOpacity:0.1
    },
    yaxis: {
        showLabels: true,
        showLabelInLine: false,
        color:"#636363",
        tickDecimals:3
    },
    grid: {
        verticalLines: true,
        horizontalLine: true,
        zeroLine:false,
        tickColor: "#eeeff1",
        outlineWidth: 0,
        labelMargin: 0
    },
    line:{
        color: "#D53F3F",
        lineWidth: 2
    },
    mouse: {
        track: true,
        sensibility: 1,
        trackDecimals: 2,
        fillColor: "#0e0e0e",
        fillOpacity: 1,
        lineColor: "#0e0e0e"
    },
    HtmlText: false,
    fontSize: 10
};
DevCartel.MarketOverview.getAssetClass = function(countryCode, assetClassId, groupId){
	var countryAssetClass = DevCartel.MarketOverview.CountryAssetClass[countryCode];
    if(countryAssetClass){
        var assetClass = countryAssetClass[assetClassId];
        if(groupId && assetClass){
        	return assetClass[groupId];
        }
        return assetClass;
    }
    return null;
};
DevCartel.MarketOverview.getChartView = function(chartViewId){
    var view = DevCartel.MarketOverview.ChartView[chartViewId];
    if(view){
    	view["endDate"] = new Date();
        return view;
    }
    return null;
};