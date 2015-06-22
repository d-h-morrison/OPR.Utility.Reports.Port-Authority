/**
 * Created by david on 6/9/2015.
 */

(function () {
    "use strict";
//debugger;
    angular
        .module("common.services")
        .factory("PortfolioHistoricalDetail",["$resource", PortfolioHistoricalDetail]);

    function PortfolioHistoricalDetail($resource){
        //debugger;
        return $resource("/api/portfolioHistoricalDetail/:portfolioId")
    }


}());