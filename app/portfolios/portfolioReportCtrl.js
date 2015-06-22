/**
 * Created by david on 6/8/2015.
 */

(function () {
    "use strict";

    angular
        .module("Port-Authority")
        .controller("PortfolioReportCtrl", // Controller name.
        ["portfolio", // Include portfolio in registration.  Because we are injecting the portfolio we need to include it as the first parameter of a min-safe array.
            PortfolioReportCtrl]); // Controller instance.

    function PortfolioReportCtrl(portfolio /*Inject the portfolio from the portfolioResource service*/){
       // //debugger;
        var vm = this;
        vm.portfolio = portfolio;

        /*vm.portfolio = {
         "portfolioId":2,
         "portfolioName":"Garden Cart",
         "portfolioCode": "GDN-0023",
         "releaseDate": "March 18, 2010",
         "description": "15 gallon capacity rolling garden cart",
         "cost": 20.00,
         "NAV": 32.99,
         "category": "garden",
         "tags": ["barrow", "cart", "wheelbarrow"],
         "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
         };*/



        if(vm.portfolio && vm.portfolio.portfolioId){
            vm.title = "Edit: " + vm.portfolio.portfolioName;
        }
        else{
            vm.title = "Portfolio Detail: New portfolio";
            //vm.title="Portfolio Detail: " + vm.portfolio.portfolioName;
        }

        if(vm.portfolio.tags){
            vm.portfolio.tagList = vm.portfolio.tags.toString();
        }
    }
}());