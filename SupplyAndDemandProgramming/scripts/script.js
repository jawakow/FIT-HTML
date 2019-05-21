// Javascript code can be added here
//var isHidden
// Selector syntax in as follows
// $ ( " selector " )
$(document).ready(function(){
    // This mean that the following instruction will be
    // loaded when the document has finished building
    // the DOM and is ready for accessing

    // Set the on click of the button we defined on HTML
    $("#btnSwitchChart").click(function(){
        // The code within this anonymous function is
        // what will be called when the 
        $("p,h1,h2,#imgChart").toggle(2000)
        //$("p,h1,h2,#imgChart").show(2000)
        console.log("Clicked");
        
    });
});