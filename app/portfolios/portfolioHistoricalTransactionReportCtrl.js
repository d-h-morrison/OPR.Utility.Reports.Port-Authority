/**
 * Created by david on 6/8/2015.
 */

(function () {
    "use strict";

    angular.module("Port-Authority")
        .controller(     "PortfolioHistoricalTransactionReportCtrl",
        ["portfolioResource",
         "PortfolioHistoricalTransaction",
        "$state",
        "$stateParams",
        "$scope",
        "$http",
        PortfolioHistoricalTransactionReportCtrl]
            /*[
            "portfolioResource",
                "PortfolioHistoricalDetail",
                "$state",
                "$stateParams",
                "$scope",
                "$http",
                PortfolioHistoricalDetailReportCtrl ]*/

    );

    function PortfolioHistoricalTransactionReportCtrl(portfolioResource,PortfolioHistoricalTransaction,$state, $stateParams, $scope, $http) {
        //debugger;
        var vm = this;
        vm.portfolioId = $stateParams.portfolioId;

        vm.portfolios={};
        vm.startDate = Date.now();
        vm.endDate = Date.now();

        //vm.dataApiCall = "http://52.4.103.223/Core/InvestmentPool(11823)/Transaction/?$select=Sk,BaseDate,Name,Date,Type,Amnt,AbsAmnt,CurrencyISO$top=25&$orderby=AbsAmnt desc,Date desc&$filter=(PreviousMonths eq 12 and Date le '2015-03-31' and CurrencyISO eq 'USD')";
       /* vm.dataApiTransactionCall = "http://52.4.103.223/Core/InvestmentPool("+
                portfolioId +
                ")/Transaction/?$select=Sk,BaseDate,Name,Date,Type,Amnt,AbsAmnt,CurrencyISO&$orderby=AbsAmnt desc,Date desc&$filter=(Date le '2015-03-31' and Date ge '2005-03-31' and CurrencyISO eq 'USD')";*/

        vm.dataApiDateRangeCall = "http://52.4.103.223/Core/InvestmentPool("+
            vm.portfolioId +
            ")Transaction/?$select=Date&$orderby=Date desc&$filter=(PreviousMonths eq 12 and Date le '2015-03-31')&?apply=groupby(Date)";

        //http://52.4.103.223/Core/InvestmentPool(11823)/Transaction/?$select=Date&$orderby=Date desc&$filter=(PreviousMonths eq 12 and Date le '2015-03-31')&?apply=groupby(Date)
        var dateRequest = PortfolioHistoricalTransaction.HistoricalTransactionPromise(/*vm.dataApiDateRangeCall*/
            "http://52.4.103.223/Core/InvestmentPool(11823)/Transaction/?$select=Date&$orderby=Date desc&$filter=(PreviousMonths eq 12 and Date le '2015-03-31')&?apply=groupby(Date)");
        dateRequest.success(function(data,status,headers,config){
            //debugger;
           vm.dateRange = data;
        });

        vm.run = function(portfolioId){

            debugger;
            var dStart = new Date(vm.startDate);
            var dEnd = new Date(vm.endDate);

            // Set up the service call and return an object that we can use to capture the promise.
            vm.dataApiTransactionCall = "http://52.4.103.223/Core/InvestmentPool("+
                vm.portfolioId +
                ")/Transaction/?$select=Sk,BaseDate,Name,Date,Type,Amnt,AbsAmnt,CurrencyISO&$orderby=AbsAmnt desc,Date desc&$filter="+
                "(Date ge '"+ vm.startDate.getFullYear()+ "-" + GetTwoDigitDate((vm.startDate.getMonth()+1)) + "-" + GetTwoDigitDate(vm.startDate.getDate())
                + "' and Date le '" + vm.endDate.getFullYear()+ "-" + GetTwoDigitDate((vm.endDate.getMonth()+1)) + "-" + GetTwoDigitDate(vm.endDate.getDate()) + "' and CurrencyISO eq 'USD')";
                //"(Date le '2015-03-31' and Date ge '2005-03-31' and CurrencyISO eq 'USD')";


            var request =PortfolioHistoricalTransaction.HistoricalTransactionPromise(vm.dataApiTransactionCall);

            // When the data comes in, fill the table.
            request.success(function(data, status, headers, config) {
             // this callback will be called asynchronously
             // when the response is available
                vm.portfolios = data;
             });


        }

        vm.clear = function(){
            //debugger;
            vm.portfolios = [];
        }

        vm.dateSelected = function (theDate){
            //debugger;
            var selectedDate = theDate.date.Date;
            alert("At the tone the date is: " + theDate.date.Date);
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

        // Should create a global function, rather than using this.
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