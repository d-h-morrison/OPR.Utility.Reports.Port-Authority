/**
 * Created by david on 6/9/2015.
 */

(function () {
    "use strict";
//debugger;
    angular
        .module("common.services")
        .factory("PortfolioHistoricalTransaction",["$resource","$http",  PortfolioHistoricalTransaction]);


    function PortfolioHistoricalTransaction($resource,$http){
        //debugger;
        //return $resource("/api/portfolioHistoricalTransaction/:portfolioId")
        var vs = this;
        vs.resource = $resource;
        vs.http = $http;

        vs.run = function(portfolioId){
            return{HistoricalTransaction: HistoricalTranaction};
        };

        return{PortfolioHistoricalTransaction:$resource("/api/portfolioHistoricalTransaction/:portfolioId"),
            HistoricalTransactionPromise: HistoricalTranactionPromise};

        function HistoricalTranactionPromise(dataApiCall){

            return vs.http.get(dataApiCall);

        }



    }

}());