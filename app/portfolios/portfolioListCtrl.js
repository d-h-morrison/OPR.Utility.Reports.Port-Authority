/**
 * Created by david on 6/8/2015.
 */
// Use an Immediately Invoked Function Expression (IIFE).
(
  function(){
      "use strict";

      angular
          .module("Port-Authority")// Register with main module.
          .controller("PortfolioListCtrl",
                        ["portfolioResource",
                            PortfolioListCtrl]);

      // Ask angular to pass a reference to the portfolioResource service to this specific controller function.
      // We do this by adding the portfolioResource as a parameter.
      function PortfolioListCtrl(portfolioResource, $scope){
          ////debugger;
          // Define Model
          var vm = this;

          // Query the Mock data source.
            portfolioResource.query(function(data){
                debugger;
                vm.portfolios = data;

            });

          /*$scope.data = portfolioResource.query(function(data) {

          });*/

          // Define Methods for Actions in the view.
          vm.showImage = false;
          vm.toggleImage = function(){
              vm.showImage = !vm.showImage;
          }

      }
  }()
);