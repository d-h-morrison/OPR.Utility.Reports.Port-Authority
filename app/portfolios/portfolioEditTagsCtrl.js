/**
 * Created by david on 6/8/2015.
 */
(function(){
    "use strict";

    angular.module("Port-Authority")
        .controller("PortfolioEditTagsCtrl",
            ["portfolio",
             "$state",
             PortfolioEditTagsCtrl ]
    );

    function PortfolioEditTagsCtrl(portfolio,$state){
        var vm = this;
        vm.portfolio = portfolio;

        vm.addTags = function(tags){
            if(tags) {
                var tagArray = tags.split(',');
                vm.portfolio.tags = vm.portfolio.tags ? vm.portfolio.tags.concat(tagArray) : tagArray;
                vm.newTags = "";
            }
            else{
                //alert("Please enter one or more tags separated by commas.");
            }
        };

        vm.removeTag = function(tagIndex){
            ////debugger;
            //var tags = vm.portfolio.tags;
            vm.portfolio.tags.splice(tagIndex,1);
        }

        vm.submit = function(portfolio){
            vm.portfolio.$save();
        }

        vm.cancel = function(){
            $state.go('portfolioList');
        }
    }
}());