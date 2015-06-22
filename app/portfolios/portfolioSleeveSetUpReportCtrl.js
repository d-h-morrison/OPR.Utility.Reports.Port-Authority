/**
 * Created by david on 6/8/2015.
 */

(function () {
    "use strict";

    angular.module("Port-Authority")
        .controller("PortfolioSleeveSetUpReportCtrl",
        ["portfolio",
            "$state",
            PortfolioSleeveSetUpReportCtrl ]
    );

    function PortfolioSleeveSetUpReportCtrl(portfolio,$state) {
        var vm = this;
        vm.portfolio = portfolio;

    }

}());