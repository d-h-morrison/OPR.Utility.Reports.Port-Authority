/**
 * Created by dmorrison on 6/17/2015.
 */
(function(){
    "use strict";

    function GetTwoDigitDate(dateString) {
        var thisDateString;
        if (dateString < 10) {
            thisDateString = '0' + dateString;
            return thisDateString;
        }
        // if day is already 2 digits, just return the day.
        return dateString;

    }
}());

