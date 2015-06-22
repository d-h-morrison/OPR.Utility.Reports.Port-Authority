/**
 * Created by david on 6/8/2015.
 */
(function(){
    "use strict";

    angular
        .module("Port-Authority")
        .controller("PortfolioEditCtrl",
        ["portfolio", // Parameter for the portfolioEditCtrl function.
            PortfolioEditCtrl]
        );

    function PortfolioEditCtrl(portfolio){
        var vm = this;

        vm.portfolio = portfolio;

        if(vm.portfolio && vm.portfolio.portfolioId){
            vm.title = "Reports for : " + vm.portfolio.portfolioName;
        }
        else{
            vm.title = "New portfolio";
        }
    }
}());