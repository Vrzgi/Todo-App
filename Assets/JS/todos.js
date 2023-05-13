//Check off Specific To-Do by Clicking
$("li").click(function(){
    $(this).toggleClass("complated");
    /*
    //if <li> is grey
    if($(this).css("color") === "rgb(128, 128, 128)"){
        //turn it black
        $(this).css(({
            color : "black",
            textDecoration : "none"
        }));
    }
    else{
        //turn it grey
        $(this).css(({
            color: "grey",
            textDecoration: "line-through"
        }));
    }
    */
});