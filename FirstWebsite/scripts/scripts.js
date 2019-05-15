//import { Context } from "../v20-javascript/src/context";
//import { Account } from "../v20-javascript/src/account";

function onCheckDonationClicked()
{
    alert("You have received £10000 in total");
}

function onCheckSPClicked()
{
    alert("S&P future is heading towards dailu supplu zone. It's time to set an sell order!");
}

function onTimeClicked()
{
    var d = new Date();
    alert("Unix Epoch timetime" + (d.getTime()/1000).toFixed(0));
}

function onAuth()
{
    // var token = "69c953194b221721363c1a7dacab7712-4552a182ee8b525bbc39a49ab71cd093";
    // var accountID = "101-001-616929-002";
    // var context = new Context(api-fxpractice.oanda.com, 443, true, "");
    // var account = new Account(accountID);
    // context.setToken(token);
    var bal = document.getElementById("txtBalance");
    bal.value = "9999";
}

function refreshTime()
{
    var currentTime = new Date();
    document.getElementById("clock").value = currentTime;
}
