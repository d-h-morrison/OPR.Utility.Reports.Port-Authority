/**
 * Created by david on 6/8/2015.
 */

(function(){
    "use strict";

    //debugger;
    var app = angular
        .module("portfolioResourceMock",
                        ["ngMockE2E"]);
    
    app.run(function ($httpBackend) {
//debugger;
        var portfolios;
        var portfolioHistoricalDetails;
        portfolios = [
            {
                "portfolioId": 1,
                "portfolioName": "Leaf Rake Group",
                "portfolioCode": "GDN-0011",
                "releaseDate": "March 19, 2009",
                "description": "Leaf Rake. Private Wealth Fund.",
                "cost": 9.00,
                "nAv": 19.95,
                "category": "garden",
                "tags": ["leaf", "tool"],
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "portfolioId": 5,
                "portfolioName": "Hammer, MC",
                "portfolioCode": "TBX-0048",
                "releaseDate": "May 21, 2013",
                "description": "Curved Claw Steel Hammer.  Private Family.",
                "cost": 1.00,
                "nAv": 8.99,
                "category": "toolbox",
                "tags": ["tool"],
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
            },
            {
                "portfolioId": 2,
                "portfolioName": "Garden Cart Consortium",
                "portfolioCode": "GDN-0023",
                "releaseDate": "March 18, 2010",
                "description": "Rolling Garden Cart. Private Investor.",
                "cost": 20.00,
                "nAv": 32.99,
                "category": "garden",
                "tags": ["barrow", "cart", "wheelbarrow"],
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            },
            {
                "portfolioId": 6,
                "portfolioName": "Russian T-14 Armata G.P.",
                "portfolioCode": "RMS-0945",
                "releaseDate": "May 30, 2014",
                "description": "Battle Ready T-14.  Ammunition must be purchased separately.  Sovereign Wealth Fund",
                "cost": 45000000.00,
                "nAv": 75000000.00,
                "category": "arsenal",
                "tags": ["tool", "military", "insurgence"],
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/218607/T-14-Armata-by-Rones.png"
            }
        ];

        portfolioHistoricalDetails = [
            {
                "portfolioId": 1,
                "fundName": "Elane Fund",
                "marketValue": 4345,
                "monthlyReturn": .35,
                "quarterlyReturn": .31,
                "yTd": .48,
                "aCb": 2.3,
                "nAv": 1234,
                "endDate": "12-31-01"

            },
            {
                "portfolioId": 1,
                "fundName": "Norm Fund",
                "marketValue": 4345,
                "monthlyReturn": .35,
                "quarterlyReturn": .31,
                "yTd": .101,
                "aCb": 7.3,
                "nAv": 1234,
                "endDate": "12-31-04"

            },
            {
                "portfolioId": 1,
                "fundName": "Lamont Fund",
                "marketValue": 4345,
                "monthlyReturn": .35,
                "quarterlyReturn": .31,
                "yTd": 1.23,
                "aCb": 8.3,
                "nAv": 345,
                "endDate": "09-31-07"

            },
            {
                "portfolioId": 1,
                "fundName": "Fred Fund",
                "marketValue": 9478,
                "monthlyReturn": .35,
                "quarterlyReturn": .31,
                "yTd": .589,
                "aCb": 4.3,
                "nAv": 8473,
                "endDate": "12-31-07"

            },
            {
                "portfolioId": 1,
                "fundName": "Mary Fund",
                "marketValue": 1124,
                "monthlyReturn": .35,
                "quarterlyReturn": .31,
                "yTd": .176,
                "aCb": 2.3,
                "nAv": 7765,
                "endDate": "12-31-09"

            },
            {
                "portfolioId": 1,
                "fundName": "Ralph Fund",
                "marketValue": 9872,
                "monthlyReturn": .35,
                "quarterlyReturn": .31,
                "yTd": .343,
                "aCb": 4.3,
                "nAv": 1265,
                "endDate": "12-31-10"

            },
            {
                "portfolioId": 5,
                "fundName": "Greg Fund",
                "marketValue": 97434,
                "monthlyReturn": .25,
                "quarterlyReturn": .31,
                "yTd": .80,
                "aCb": 8.3,
                "nAv": 23547,
                "endDate": "12-31-01"

            },
            {
                "portfolioId": 5,
                "fundName": "Sally Fund",
                "marketValue": 8732,
                "monthlyReturn": .35,
                "quarterlyReturn": .31,
                "yTd": .40,
                "aCb": 6.3,
                "nAv": 9878,
                "endDate": "12-31-02"

            },
            {
                "portfolioId": 5,
                "fundName": "Joe Fund",
                "marketValue": 24334,
                "monthlyReturn": .35,
                "quarterlyReturn": .31,
                "yTd": .210,
                "aCb": 4.3,
                "nAv": 7877,
                "endDate": "12-31-04"

            },
            {
                "portfolioId": 2,
                "fundName": "Marley Fund",
                "marketValue": 332,
                "monthlyReturn": .35,
                "quarterlyReturn": .31,
                "yTd": .60,
                "aCb": 7.3,
                "nAv": 89789,
                "endDate": "12-31-01"

            },
            {
                "portfolioId": 2,
                "fundName": "Ralph Fund",
                "marketValue": 3242,
                "monthlyReturn": .35,
                "quarterlyReturn": .31,
                "yTd": .80,
                "aCb": 4.3,
                "nAv": 78978,
                "endDate": "12-31-03"

            },
            {
                "portfolioId": 2,
                "fundName": "Sally Fund",
                "marketValue": 43534,
                "monthlyReturn": .35,
                "quarterlyReturn": .31,
                "yTd": .80,
                "aCb": 8.3,
                "nAv": 78907,
                "endDate": "12-31-05"

            },
            {
                "portfolioId": 6,
                "fundName": "Joy Fund",
                "marketValue": 23423,
                "monthlyReturn": .35,
                "quarterlyReturn": .31,
                "yTd": .40,
                "aCb": 5.3,
                "nAv": 80874,
                "endDate": "12-31-01"

            },
            {
                "portfolioId": 6,
                "fundName": "Bob Fund",
                "marketValue": 7879,
                "monthlyReturn": .35,
                "quarterlyReturn": .31,
                "yTd": .80,
                "aCb": 4.3,
                "nAv": 7899,
                "endDate": "12-31-02"

            },
            {
                "portfolioId": 6,
                "fundName": "Ralph Fund",
                "marketValue": 89778,
                "monthlyReturn": .35,
                "quarterlyReturn": .31,
                "yTd": .60,
                "aCb": 7.3,
                "nAv": 78553,
                "endDate": "12-31-03"

            },
        ];

/*        portfolioHistoricalDetails = [
            {
                "portfolioId": 1,
                "portfolioName": "Leaf Rake Group",
                "portfolioCode": "GDN-0011",
                "releaseDate": "March 19, 2009",
                "description": "Leaf Rake. Private Wealth Fund.",
                "cost": 9.00,
                "nAv": 19.95,
                "category": "garden",
                "tags": ["leaf", "tool"],
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "portfolioId": 5,
                "portfolioName": "Hammer, MC",
                "portfolioCode": "TBX-0048",
                "releaseDate": "May 21, 2013",
                "description": "Curved Claw Steel Hammer.  Private Family.",
                "cost": 1.00,
                "nAv": 8.99,
                "category": "toolbox",
                "tags": ["tool"],
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
            },
            {
                "portfolioId": 2,
                "portfolioName": "Garden Cart Consortium",
                "portfolioCode": "GDN-0023",
                "releaseDate": "March 18, 2010",
                "description": "Rolling Garden Cart. Private Investor.",
                "cost": 20.00,
                "nAv": 32.99,
                "category": "garden",
                "tags": ["barrow", "cart", "wheelbarrow"],
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            },
            {
                "portfolioId": 6,
                "portfolioName": "Russian T-14 Armata G.P.",
                "portfolioCode": "RMS-0945",
                "releaseDate": "May 30, 2014",
                "description": "Battle Ready T-14.  Ammunition must be purchased separately.  Sovereign Wealth Fund",
                "cost": 45000000.00,
                "nAv": 75000000.00,
                "category": "arsenal",
                "tags": ["tool", "military", "insurgence"],
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/218607/T-14-Armata-by-Rones.png"
            }
        ];*/
//debugger;
        var portfolioUrl = "/api/portfolios";
        var historyDetailUrl = "/api/portfolioHistoricalDetail";
        $httpBackend.whenGET(portfolioUrl).respond(portfolios);
        $httpBackend.whenGET(historyDetailUrl).respond(portfolioHistoricalDetails);

        // Define whenGET for extensible mocking using a regular expression.
        //debugger;
        var editingRegex = new RegExp(portfolioUrl + "/[0-9][0-9]*",'');
        var historyRegex = new RegExp(historyDetailUrl + "/[0-9][0-9]*",'');
        $httpBackend.whenGET(editingRegex).respond(function (method,url,data) {
            var portfolio = {"portfolioId": 0};
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < portfolios.length; i++) {
                    if (portfolios[i].portfolioId == id) {
                        portfolio = portfolios[i];
                        break;
                    }
                }
            }
            return [200, portfolio,{}];
        });

        //"/api/portfolioHistoricalDetail/:portfolioId"
        $httpBackend.whenGET(historyRegex).respond(function (method,url,data) {
            var portfolio = {"portfolioId": 0};
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < portfolioHistoricalDetails.length; i++) {
                    if (portfolioHistoricalDetails[i].portfolioId == id) {
                        portfolio = portfolioHistoricalDetails[i];

                        break;
                    }
                }
            }
            blah(id);
            return [200, portfolio,{}];
        });
// I.E. $save()...
        $httpBackend.whenPOST(portfolioUrl).respond(function (method,url,data) {
            var portfolio = angular.fromJson(data);
            ////debugger;
            if(!portfolio.portfolioId){
                // New portfolio.  Assign id.
                portfolio.portfolioId = portfolios[portfolios.length-1].portfolioId +1;
                portfolios.push(portfolio);
            }
            else{
                for (var i = 0; i < portfolios.length; i++) {
                    if (portfolios[i].portfolioId == portfolio.portfolioId) {
                        portfolios[i] = portfolio;
                        break;
                    }
                }
            }

            return [200, portfolio,{}];
        });


        // Pass any requests for application files through--don't intercept them.
        $httpBackend.whenGET(/app/).passThrough();


    })
}());