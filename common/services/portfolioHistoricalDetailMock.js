/**
 * Created by david on 6/9/2015.
 */

(function () {
    "use strict";

    //alert("In the portfolioHistoricalDetailMock.js service!!");
    //debugger;
    var app = angular
        .module("portfolioHistoricalDetailMock",
        ["ngMockE2E"]);

    app.run(function ($httpBackend) {

        //Market Value, Monthly Return, Quarterly Return, YTD, ACB
        var portfolioHistoricalDetails;
        portfolioHistoricalDetails = [
            {
                "portfolioId": 1,
                "MarketValue": 4345,
                "MonthlyReturn": 3.5,
                "QuarterlyReturn": 3.1,
                "YTD": 3.0,
                "ACB": 1.3,
                "NAV": 1234,
                "EndDate": "12-31-01"

            },
            {
                "portfolioId": 1,
                "MarketValue": 4345,
                "MonthlyReturn": 3.5,
                "QuarterlyReturn": 3.1,
                "YTD": 3.0,
                "ACB": 1.3,
                "NAV": 1234,
                "EndDate": "12-31-04"

            },
            {
                "portfolioId": 1,
                "MarketValue": 4345,
                "MonthlyReturn": 3.5,
                "QuarterlyReturn": 3.1,
                "YTD": 3.0,
                "ACB": 1.3,
                "NAV": 1234,
                "EndDate": "09-31-07"

            },
            {
                "portfolioId": 1,
                "MarketValue": 4345,
                "MonthlyReturn": 3.5,
                "QuarterlyReturn": 3.1,
                "YTD": 3.0,
                "ACB": 1.3,
                "NAV": 1234,
                "EndDate": "12-31-07"

            },
            {
                "portfolioId": 1,
                "MarketValue": 4345,
                "MonthlyReturn": 3.5,
                "QuarterlyReturn": 3.1,
                "YTD": 3.0,
                "ACB": 1.3,
                "NAV": 1234,
                "EndDate": "12-31-09"

            },
            {
                "portfolioId": 1,
                "MarketValue": 4345,
                "MonthlyReturn": 3.5,
                "QuarterlyReturn": 3.1,
                "YTD": 3.0,
                "ACB": 1.3,
                "NAV": 1234,
                "EndDate": "12-31-10"

            },
            {
                "portfolioId": 5,
                "MarketValue": 4345,
                "MonthlyReturn": 3.5,
                "QuarterlyReturn": 3.1,
                "YTD": 3.0,
                "ACB": 1.3,
                "NAV": 1234,
                "EndDate": "12-31-01"

            },
            {
                "portfolioId": 5,
                "MarketValue": 4345,
                "MonthlyReturn": 3.5,
                "QuarterlyReturn": 3.1,
                "YTD": 3.0,
                "ACB": 1.3,
                "NAV": 1234,
                "EndDate": "12-31-02"

            },
            {
                "portfolioId": 5,
                "MarketValue": 4345,
                "MonthlyReturn": 3.5,
                "QuarterlyReturn": 3.1,
                "YTD": 3.0,
                "ACB": 1.3,
                "NAV": 1234,
                "EndDate": "12-31-04"

            },
            {
                "portfolioId": 2,
                "MarketValue": 4345,
                "MonthlyReturn": 3.5,
                "QuarterlyReturn": 3.1,
                "YTD": 3.0,
                "ACB": 1.3,
                "NAV": 1234,
                "EndDate": "12-31-01"

            },
            {
                "portfolioId": 2,
                "MarketValue": 4345,
                "MonthlyReturn": 3.5,
                "QuarterlyReturn": 3.1,
                "YTD": 3.0,
                "ACB": 1.3,
                "NAV": 1234,
                "EndDate": "12-31-03"

            },
            {
                "portfolioId": 2,
                "MarketValue": 4345,
                "MonthlyReturn": 3.5,
                "QuarterlyReturn": 3.1,
                "YTD": 3.0,
                "ACB": 1.3,
                "NAV": 1234,
                "EndDate": "12-31-05"

            },
            {
                "portfolioId": 6,
                "MarketValue": 4345,
                "MonthlyReturn": 3.5,
                "QuarterlyReturn": 3.1,
                "YTD": 3.0,
                "ACB": 1.3,
                "NAV": 1234,
                "EndDate": "12-31-01"

            },
            {
                "portfolioId": 6,
                "MarketValue": 4345,
                "MonthlyReturn": 3.5,
                "QuarterlyReturn": 3.1,
                "YTD": 3.0,
                "ACB": 1.3,
                "NAV": 1234,
                "EndDate": "12-31-02"

            },
            {
                "portfolioId": 6,
                "MarketValue": 4345,
                "MonthlyReturn": 3.5,
                "QuarterlyReturn": 3.1,
                "YTD": 3.0,
                "ACB": 1.3,
                "NAV": 1234,
                "EndDate": "12-31-03"

            },
        ];

        var portfolioUrl = "/api/portfolios";
        $httpBackend.whenGET(portfolioUrl).respond(portfolioHistoricalDetails);
        //debugger;
        // Define whenGET for extensible mocking using a regular expression.
        var editingRegex = new RegExp(portfolioUrl + "/[0-9][0-9]*",'');
        $httpBackend.whenGET(editingRegex).respond(function (method,url,data) {
            var portfolioHistory = {"portfolioId": 0};
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {

                for (var i = 0; i < portfolioHistoricalDetails.length; i++) {
                    if (portfolioHistoricalDetails[i].portfolioId == id) {
                        portfolioHistory[i] = portfolioHistoricalDetails[i];
                        //break;
                    }
                }
            }
            return [200, portfolioHistory,{}];
        });

// I.E. $save()...
        $httpBackend.whenPOST(portfolioUrl).respond(function (method,url,data) {
            var portfolioHistory = angular.fromJson(data);
            ////debugger;
            if(!portfolioHistoricalDetails.portfolioId){
                // New portfolio.  Assign id.
                portfolioHistory.portfolioId = portfolioHistoricalDetails[portfolioHistoricalDetails.length-1].portfolioId +1;
                portfolioHistoricalDetails.push(portfolioHistory);
            }
            else{
                for (var i = 0; i < portfolioHistoricalDetails.length; i++) {
                    if (portfolioHistoricalDetails[i].portfolioId == portfolioHistory.portfolioId) {
                        portfolioHistoricalDetails[i] = portfolioHistory;
                        break;
                    }
                }
            }

            return [200, portfolioHistory,{}];
        });


        // Pass any requests for application files through--don't intercept them.
        $httpBackend.whenGET(/app/).passThrough();

    })

}());