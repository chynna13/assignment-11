$(document).ready(function() {

$("button").click(function() {
    var inputItem = document.getElementById("input1").value;
    
    var aT = document.createTextNode(inputItem);
    var newItem = document.createElement("li");
    newItem.append(aT);
    document.getElementById("list1").append(newItem);
 });


  $("ul").on("click", "li", function(){
      $(this).toggleClass("strike");
    });
    
});