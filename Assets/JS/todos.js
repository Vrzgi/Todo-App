//Check off Specific To-Do by Clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("Complated!");
});
//Click on X to delete To-Do
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});
$("input[type='text'").keypress(function(event){
    //check enter
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val(""); //empty after each add
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +"</li>");
    }
});
$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
});