/**
 * Created by david on 6/8/2015.
 */

(function () {
    "use strict";
////debugger;
    angular.module("Port-Authority")
        .controller("PortfolioHistoricalDetailReportCtrl",
        [
            "portfolioResource",
            "PortfolioHistoricalDetail",
            "$state",
            "$stateParams",
            "$scope",
            "$http",
            PortfolioHistoricalDetailReportCtrl ]
    );

    //function PortfolioHistoricalDetailReportCtrl(portfolioResource,PortfolioHistoricalDetail,$state, $stateParams, $scope, $http ) {
    function PortfolioHistoricalDetailReportCtrl(portfolioResource,PortfolioHistoricalDetail,$state, $stateParams, $scope, $http )

    {
       // debugger;
        var vm = this;
        vm.state = {};
        vm.portfolioId = $stateParams.portfolioId;

        vm.portfolios={};
        vm.startDate = Date.now();
        vm.endDate = Date.now();

        /*vm.state.portfolioId */

/*        try {
            vm.state.portfolio.id = $state.params.portfolioId;
        }catch(e){}
        vm.portfolio = portfolioResource;
        var blah = $stateParams;*/
        /*console.log($stateParams.portfolioId);*/

        //vm.dataApiCall ="http://52.4.103.223/Core/InvestmentPool(11823)/ProfileLineItemTimeSeries/?$select=Date,PLISk,Name,AcbMtd,TwrMtd,TwrQtd,TwrCytd,MV&$filter=(EndDate eq '2015-03-31' and StartDate eq '2014-04-30' and CurrencyISO eq 'USD' and Tag eq 'TOTAL_ALL' and PLISk eq 2 and PLIType eq 'Sleeve' and Periodicity eq 'Monthly' and ReportQuality eq 'ALL_DATA')";
        //vm.dataApiCall ="http://52.4.103.223/Core/InvestmentPool(11823)/ProfileLineItemTimeSeries/?$select=Date,PLISk,Name,AcbMtd,TwrMtd,TwrQtd,TwrCytd,MV&$filter=(EndDate eq '2015-03-31' and StartDate eq '2014-04-30' and CurrencyISO eq 'USD' and Tag eq 'TOTAL_ALL' and PLISk eq 2 and PLIType eq 'Sleeve' and Periodicity eq 'Monthly' and ReportQuality eq 'ALL_DATA')";
        //vm.dataApiCall ="http://52.4.103.223/Core/InvestmentPool(" + vm.portfolioId + ")/ProfileLineItemTimeSeries/?$select=Date,PLISk,Name,AcbMtd,TwrMtd,TwrQtd,TwrCytd,MV&$filter=(EndDate eq '2015-03-31' and StartDate eq '2014-04-30' and CurrencyISO eq 'USD' and Tag eq 'TOTAL_ALL' and PLISk eq 2 and PLIType eq 'Sleeve' and Periodicity eq 'Monthly' and ReportQuality eq 'ALL_DATA')";
        /*        vm.portfolio = portfolio;*/

        vm.run = function(portfolioId){
            //debugger;
            //$scope.data = [];

            vm.dataApiCall ="http://52.4.103.223/Core/InvestmentPool(" + vm.portfolioId + ")" +
                "/ProfileLineItemTimeSeries/?$select=Date,PLISk,Name,AcbMtd,TwrMtd,TwrQtd,TwrCytd,MV" +
                "&$filter=(EndDate eq '" + vm.endDate.getFullYear()+ "-" + (GetTwoDigitDate( vm.endDate.getMonth()+1)) + "-" + GetTwoDigitDate(vm.endDate.getDate()) +
                "' and StartDate eq '"+ vm.startDate.getFullYear()+ "-" + GetTwoDigitDate((vm.startDate.getMonth()+1)) + "-" + GetTwoDigitDate(vm.startDate.getDate())
                + "' and CurrencyISO eq 'USD' and Tag eq 'TOTAL_ALL' and PLISk eq 2 and " +
                "PLIType eq 'Sleeve' and Periodicity eq 'Monthly' and ReportQuality eq 'ALL_DATA')";

            var state = $state;

           // debugger;
            $scope.test = $http.get(vm.dataApiCall)
                .success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    //debugger;
                    //$scope.data = data;
                    vm.portfolios = data;
                    debugger;
                })

        }

        vm.clear = function(){
          //  debugger;
            vm.portfolios = [];
        }

        vm.startDateOpen = function($event){
//debugger;
            $event.preventDefault();
            $event.stopPropagation();

            vm.sdOpened = !vm.sdOpened;
        }

        vm.endDateOpen = function($event){

            $event.preventDefault();
            $event.stopPropagation();

            vm.edOpened = !vm.edOpened;
        }

        function GetTwoDigitDate(dateString) {
            var thisDateString;
            if (dateString < 10) {
                thisDateString = '0' + dateString;
                return thisDateString;
            }
            // if day is already 2 digits, just return the day.
            return dateString;

        }



    }



}());