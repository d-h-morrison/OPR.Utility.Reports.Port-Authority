/**
 * Created by david on 6/8/2015.
 */
(function(){
    "use strict";

    angular
        .module("Port-Authority")
        .controller("PortfolioEditInfoCtrl",
        ["portfolio", // Parameter for the portfolioEditCtrl function.
          "$state",
          PortfolioEditInfoCtrl]
    );

    function PortfolioEditInfoCtrl(portfolio, $state){
        var vm = this;
debugger;
        vm.portfolio = portfolio;

        if(vm.portfolio && vm.portfolio.portfolioId){
            vm.title = "Edit: " + vm.portfolio.portfolioName;
        }
        else{
            vm.title = "New portfolio";
        }

        vm.open = function($event){

            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        }

        vm.save = function(){
            ////alert("trying to save...");
            vm.portfolio.$save();
        }

        vm.cancel = function(){
            ////alert("trying to cancel...");
            // on cancel, return to portfolio list state...
            $state.go('portfolioList');
        }
    }
}());