// Javascript code can be added here
//var isHidden
// Selector syntax in as follows
// $ ( " selector " )
var rotation = 0;
$(document).ready(function()
{
    // This mean that the following instruction will be
    // loaded when the document has finished building
    // the DOM and is ready for accessing

    // Set the on click of the button we defined on HTML
    $("#btnHideChart").click(function()
    {
        // The code within this anonymous function is
        // what will be called when the 
        $("p,h1,h2,#imgChart").toggle(2000)
        //$("p,h1,h2,#imgChart").show(2000)
        //console.log("Clicked");
        
    });
    $("#imgChart").mousemove(function()
    {
        rotation +=30;
        $("#imgChart").css('width', 200);
        $("#imgChart").css('height', 200);
        $("#imgChart").rotate(rotation);

        
    }); 
    $("#btnMoveLeft").click(function()
    {
        $("#imgChart").css('width', 500);
        $("#imgChart").css('height', 500);
        $("#imgChart").animate({ "left": "-=50px" }, "slow" );
    });
    $("#btnMoveRight").click(function()
    {
        $("#imgChart").css('width', 500);
        $("#imgChart").css('height', 500);
        $("#imgChart").animate({ "left": "+=50px" }, "slow" );
        
    }); 
    $("#btnBounce").click(function()
    {
        $("#imgChart").css('width', 200);
        $("#imgChart").css('height', 200);
        
        $("#imgChart").animate({ "left": "+=500px" }, "slow" );
        $("#imgChart").animate({ "bottom": "-=500px" }, "slow" );
        //$("#imgChart").effect("bounce" , {"direction" : left, "distance": 20},30);
        $("#imgChart").animate({ "left": "-=500px" }, "slow" );
        $("#imgChart").animate({ "bottom": "+=500px" }, "slow" );

    });         
});