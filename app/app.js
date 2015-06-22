/**
 * Created by david on 6/8/2015.
 */

    // Immediately-Invoked Function Expression (IIFE) AKA Self-executing anonymous function...
(function() {
    "use strict";
    debugger;
    var app = angular.module("Port-Authority" /*Main module*/,
        ["common.services", /*dependencies*/
            "ui.router", // Most full-featured Angular router based on named, nested and parallel views.
            "ui.mask",  // Angular utility class for masking data entry fields.
            "ui.bootstrap"/*,*/ // Bootstrap UI utilities.
            /*"portfolioResourceMock", // Add Mock to portfolioResource for mock.*/
            /*"portfolioHistoricalDetailMock"*/] /*use mock data until the back end is done*/ );

    // This filter makes the assumption that the input will be in decimal form (i.e. 17% is 0.17).
    app.filter('percentage', ['$filter', function ($filter) {
        return function (input, decimals) {
            return $filter('number')(input * 100, decimals) + '%';
        };
    }]);



    /*    app.directive("dropdown", function($rootScope) {
     return {
     restrict: "E",
     templateUrl: "app/templates/dropdown.html",
     scope: {
     placeholder: "@",
     list: "=",
     selected: "=",
     property: "@"
     },
     link: function(scope) {
     scope.listVisible = false;
     scope.isPlaceholder = true;

     scope.select = function(item) {
     scope.isPlaceholder = false;
     scope.selected = item;
     };

     scope.isSelected = function(item) {
     return item[scope.property] === scope.selected[scope.property];
     };

     scope.show = function() {
     scope.listVisible = true;
     };

     $rootScope.$on("documentClicked", function(inner, target) {
     console.log($(target[0]).is(".dropdown-display.clicked") || $(target[0]).parents(".dropdown-display.clicked").length > 0);
     if (!$(target[0]).is(".dropdown-display.clicked") && !$(target[0]).parents(".dropdown-display.clicked").length > 0)
     scope.$apply(function() {
     scope.listVisible = false;
     });
     });

     scope.$watch("selected", function(value) {
     scope.isPlaceholder = scope.selected[scope.property] === undefined;
     scope.display = scope.selected[scope.property];
     });
     }
     }
     });*/

    app.config(["$stateProvider",
            "$urlRouterProvider",
            "$httpProvider",
            function($stateProvider, $urlRouterProvider, $httpProvider)

            {
//CORS Elimination Thingy.
                $httpProvider.defaults.useXDomain = true;
                delete $httpProvider.defaults.headers.common["X-Requested-With"];
//End CORS.
//debugger;
                // The $urlRouterProvider service watches $location for changes to the URL.
                // When $location changes, it finds a matching state and activates it.

                // Default route as indicated by the "otherwise" method.
                // If no valid state, or no active state name provided, we will navigate to the home page.
                // Notice the fragment identifier "/" is that of the home state.
                $urlRouterProvider.otherwise("/");

                // Home route (default route).
                $stateProvider
                    .state("home",{
                        url: "/", // Fragment identifier.
                        templateUrl: "app/welcomeView.html"
                    })

                    /*                        .state("portfolioReports.info",{
                     url:"/info",
                     templateUrl: "app/portfolios/portfolioReportInfoView.html",
                     controller: "PortfolioReportInfoCtrl as vm",
                     resolve: {
                     portfolioResource: "portfolioResource",
                     portfolio: function(portfolioResource, $stateParams){
                     var portfolioId = $stateParams.portfolioId;
                     return portfolioResource.get({portfolioId: portfolioId}).$promise;
                     }
                     }
                     })*/

                    .state("portfolioReport",{
                        // DO NOT OMIT THE "/" URL PREFIX OR THE ROUTE WILL NOT WORK.
                        abstract: true,  // Do not invoke the Edit state unless it makes sense.
                        url: "/portfolios/reports/:portfolioId", // Parameter passed to the state.
                        templateUrl:"app/portfolios/portfolioReportView.html",
                        controller: "PortfolioReportCtrl as vm",
                        resolve: {
                            portfolioResource: "portfolioResource",
                            portfolio: function(portfolioResource, $stateParams){
                                var portfolioId = $stateParams.portfolioId;
                                return portfolioResource.get({portfolioId: portfolioId}).$promise;
                            }
                        }
                    })

                    /*.state("portfolioReport.info",{
                     url:"/info",
                     templateUrl: "app/portfolios/portfolioReportInfoView.html",
                     controller: "PortfolioReportInfoCtrl as vm",
                     resolve: {
                     portfolioResource: "portfolioResource",
                     portfolio: function(portfolioResource, $stateParams){
                     var portfolioId = $stateParams.portfolioId;
                     return portfolioResource.get({portfolioId: portfolioId}).$promise;
                     }
                     }
                     })*/

                    .state("portfolioReport.historicalDetail",{
                        url:"/info",
                        templateUrl: "app/portfolios/portfolioHistoricalDetailReportView.html",
                        controller: "PortfolioHistoricalDetailReportCtrl as vm",
                        resolve: {
                            //PortfolioHistoricalDetail: "portfolioResource",
                            //portfolioResource: "portfolioResource",

                            portfolio: function (portfolioResource, $stateParams) {
                                //alert("In 'portfolioReport.historicalDetail' state.");

                                //debugger;
                                var portfolioId = $stateParams.portfolioId;
                                return portfolioResource.get({portfolioId: portfolioId}).$promise;

                            }
                        }
                    })

                    .state("portfolioReport.historicalTransaction",{
                        url:"/info",
                        templateUrl: "app/portfolios/portfolioHistoricalTransactionReportView.html",
                        controller: "PortfolioHistoricalTransactionReportCtrl as vm",
                        resolve: {
                            /*portfolioResource: "portfolioResource",*/
                            portfolio: function(portfolioResource, $stateParams){
                                var portfolioId = $stateParams.portfolioId;
                                return portfolioResource.get({portfolioId: portfolioId}).$promise;
                            }
                        }
                    })

                    .state("portfolioReport.sleeveSetUp",{
                        url:"/info",
                        templateUrl: "app/portfolios/portfolioSleeveSetUpReportView.html",
                        controller: "PortfolioSleeveSetUpReportCtrl as vm",
                        resolve: {
                            portfolioResource: "portfolioResource",
                            portfolio: function(portfolioResource, $stateParams){
                                var portfolioId = $stateParams.portfolioId;
                                return portfolioResource.get({portfolioId: portfolioId}).$promise;
                            }
                        }
                    })



                    /*  .state("portfolioReport.historicalDetail",{
                     url:"/info",
                     templateUrl: "app/portfolios/portfolioHistoricalDetailReportView.html",
                     controller: "PortfolioHistoricalDetailReportCtrl as vm"
                     resolve: {
                     portfolioResource: "portfolioResource",
                     PortfolioHistoricalDetail: "PortfolioHistoricalDetail",
                     portfolio: function(portfolioResource, PortfolioHistoricalDetail, $stateParams){
                     debugger;
                     var portfolioId = $stateParams.portfolioId;
                     return portfolioResource.get({portfolioId: portfolioId}).$promise;
                     }
                     }
                     })*/



                    .state("portfolioReport.sleeveAnalysis",{
                        url:"/info",
                        templateUrl: "app/portfolios/portfolioSleeveAnalysisDetailReportView.html",
                        controller: "PortfolioSleeveAnalysisDetailReportCtrl as vm",
                        resolve: {
                            portfolioResource: "portfolioResource",
                            portfolio: function(portfolioResource, $stateParams){
                                var portfolioId = $stateParams.portfolioId;
                                return portfolioResource.get({portfolioId: portfolioId}).$promise;
                            }
                        }
                    })

                    // portfolios state.
                    .state("portfolioList",{
                        // DO NOT OMIT THE "/" URL PREFIX OR THE ROUTE WILL NOT WORK.
                        url: "/portfolios", // Fragment identifier.
                        templateUrl: "app/portfolios/portfolioListView.html",
                        controller: "PortfolioListCtrl as vm"
                    })


                    // Edit state.
                    .state("portfolioEdit",{
                        // DO NOT OMIT THE "/" URL PREFIX OR THE ROUTE WILL NOT WORK.
                        abstract: true,  // Do not invoke the Edit state unless it makes sense.
                        url: "/portfolios/edit/:portfolioId", // Parameter passed to the state.
                        templateUrl:"app/portfolios/portfolioEditView.html",
                        controller: "PortfolioEditCtrl as vm",
                        resolve: {
                            portfolioResource: "portfolioResource",
                            portfolio: function(portfolioResource, $stateParams){
                                var portfolioId = $stateParams.portfolioId;
                                return portfolioResource.get({portfolioId: portfolioId}).$promise;
                            }
                        }
                    })
                    /*
                     .state("portfolioEdit.NAV",{
                     url:"/NAV",
                     templateUrl: "app/portfolios/portfolioEditNAVView.html"
                     })

                     .state("portfolioEdit.tags",{
                     url:"/tags",
                     templateUrl: "app/portfolios/portfolioEditTagsView.html",
                     controller: "portfolioEditTagsCtrl as vm"
                     })

                     .state("portfolioEdit.info",{
                     url:"/info",
                     templateUrl: "app/portfolios/portfolioEditInfoView.html",
                     controller: "PortfolioEditInfoCtrl as vm",
                     resolve: {
                     portfolioResource: "portfolioResource",
                     portfolio: function(portfolioResource, $stateParams){
                     var portfolioId = $stateParams.portfolioId;
                     return portfolioResource.get({portfolioId: portfolioId}).$promise;
                     }
                     }
                     })*/

                    // Portfolio detail state.
                    .state("portfolioDetail",{
                        // DO NOT OMIT THE "/" URL PREFIX OR THE ROUTE WILL NOT WORK.
                        url: "/portfolios/:portfolioId", // Parameter passed to the state.
                        templateUrl:"app/portfolios/portfolioDetailView.html",
                        controller: "PortfolioDetailCtrl as vm",
                        resolve: {
                            portfolioResource: "portfolioResource",
                            portfolio: function(portfolioResource, $stateParams){
                                var portfolioId = $stateParams.portfolioId;
                                return portfolioResource.get({portfolioId: portfolioId}).$promise;
                            }
                        }
                    })

            }]

    );

}());