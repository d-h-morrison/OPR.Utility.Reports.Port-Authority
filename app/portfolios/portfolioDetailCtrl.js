/**
 * Created by david on 6/8/2015.
 */
(function(){
        "use strict";

        angular
            .module("Port-Authority")
            .controller("PortfolioDetailCtrl", // Controller name.
            ["portfolio", // Include portfolio in registration.  Because we are injecting the portfolio we need to include it as the first parameter of a min-safe array.
                PortfolioDetailCtrl]); // Controller instance.

        function PortfolioDetailCtrl(portfolio /*Inject the portfolio from the portfolioResource service*/){
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

            vm.title="portfolio Detail: " + vm.portfolio.portfolioName;

            if(vm.portfolio.tags){
                vm.portfolio.tagList = vm.portfolio.tags.toString();
            }
        }

    }
    ()
);