/**
 * Created by david on 6/8/2015.
 * Reusable data services module.
 */
(
    function(){
        "use strict";
        angular.module("common.services" /*name of the module*/,
                        ["ngResource"] /*ngResources dependency adds support for interacting with restful services.*/).constant("appSettings",
            {
                serverPath: "http://52.4.103.223/Core/" /*"http://localhost:47257/"*/

            });



        //http://52.4.103.223/Core/KurtosysInvPool
    }()

);