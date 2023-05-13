//Check off Specific To-Do by Clicking
$("ul").on("click","li",function(){
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
//Click on X to delete To-Do
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});
$("input[type='text'").keypress(function(event){
    //console.log("Key Pressed !")
    //check enter
    if(event.which === 13){
        //console.log("You Press ENTER !");
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val(""); //empty after each add
        //create a new li and add to ul
        $("ul").append("<li><span>X</span> " + todoText +"</li>");
    }
});
