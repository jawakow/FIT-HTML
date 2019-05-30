/// <reference path="../typings/globals/jquery/index.d.ts" />
$(function(){

    /*
        JSON Notes:
        { } - Denotes a JSON object
        "K": "V" -Syntax for K, V pair
        , - Separate items
    */
    var instrument = {
    "ticker": "ES",
    "name": "S&P 500",
    "margin" : "500",
    "tick": 
        {
            "size": "0.25",
            "value": "12.5",
        },
    "contract_months":
        [
            "Mar",
            "Jun",
            "Sep",
            "Dec",
        ],
    };


//  Creating a <p> object
    var para = $("<p>").append("Instrument: " + instrument.name);
    $("#info-container").append(para);

    var childList = $("<ul>", {"id": "child-list"});
    $("#info-container").append(childList);
    for (i = 0 ; i < instrument.contract_months.length; ++i){
        let li = $("<li>").append(instrument.contract_months[i]);
        $("#child-list").append(li);
    }
});