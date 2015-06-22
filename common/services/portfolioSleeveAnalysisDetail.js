/**
 * Created by dmorrison on 6/17/2015.
 */


(function(){
    "use strict";

    angular
        .module("common.services")
        .factory("portfolioSleeveAnalysisDetail", ["$resource", "$http", "appSettings",
            portfolioSleeveAnalysisDetail]);

    function portfolioSleeveAnalysisDetail($resource, $http, appSettings) {

        //debugger;
/*            return{portfolioSleeveAnalysisDetail:$resource("/api/portfolioSleeveAnalysis/:portfolioId"),

            sleeveAnalysisPromise: SleeveAnalysisPromise,
            getSleeveAnalysisurl: GetSleeveAnalysisUrl};*/
        var vs = this;
        vs.appSettings = appSettings;
        vs.http = $http;

        function GetSleeveAnalysisUrl(startDate, endDate, portfolioId) {
            debugger;
            var sleeveAnalysisUrl = "InvestmentPool(" +portfolioId +")/ProfileLineItemTimeSeries/?$select=Date,PLISk,Name,AcbMtd,TwrMtd,TwrQtd,TwrCytd,MV&$filter=(EndDate eq " + "'" + endDate + "'" + " and StartDate eq " + "'" + startDate + "'" + " and CurrencyISO eq 'USD' and Tag eq 'TOTAL_ALL' and PLIType eq 'Sleeve' and Periodicity eq 'Monthly')";

            var thisUrl = vs.appSettings.serverPath + sleeveAnalysisUrl;
            // var thisResponseJson = $resource(vs.appSettings.serverPath + "KurtosysInvPool");

            return thisUrl;
        }

        function GetSleeveInfoUrl()
        {
            // Reutrn data for a sleeve selector control on the report page.
            //InvestmentPool(11823)/ProfileLineItem/?$select=PLISk,ParentPLISk,Lvl,PLIType,Name&$filter=(BaseDate eq '2015-05-31' and CurrencyISO eq 'USD' and Tag eq 'TOTAL_ALL' and Lvl ge 0 and PLIType eq 'Sleeve')
        }

        function SleeveAnalysisPromise(dataApiCall) {
debugger;
            return vs.http.get(dataApiCall);

        }

        return{portfolioSleeveAnalysisDetail:$resource("/api/portfolioSleeveAnalysis/:portfolioId"),
            sleeveAnalysisPromise: SleeveAnalysisPromise,
            getSleeveAnalysisUrl: GetSleeveAnalysisUrl};
    }

/*    function GetSleeveAnalysisUrl(startDate, endDate, portfolioId) {
        debugger;
        var sleeveAnalysisUrl = "InvestmentPool(" +
            portfolioId +
            ")/ProfileLineItemTimeSeries/" +
            "?$select=Date,PLISk,Name,AcbMtd,TwrMtd,TwrQtd,TwrCytd,MV" +
            "&$filter=(EndDate eq " +
            "'" + endDate + "'" +
            " and StartDate eq " +
            "'" + startDate + "'" +
            "and CurrencyISO eq " +
            "'USD' " +
            "and Tag eq 'TOTAL_ALL' " +
            "and PLISk eq 2 " +
            "and PLIType eq 'Sleeve' " +
            "and Periodicity eq 'Monthly' " +
            "and ReportQuality eq 'ALL_DATA')";

        var thisUrl = vs.appSettings.serverPath + sleeveAnalysisUrl;
       // var thisResponseJson = $resource(vs.appSettings.serverPath + "KurtosysInvPool");

        return thisUrl;
    }*/

/*    function SleeveAnalysisPromise(dataApiCall) {

        return vs.http.get(dataApiCall);

    }*/


}());



