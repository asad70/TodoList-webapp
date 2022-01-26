
 $(document).ready(function(){

    $(".btn").on("click", function() {
      
      var value = $("#inputToDoList").val();
    
      if(value !== "") {
        $("#toDoList").append('<li><span contenteditable="false">' + value + " </span><div class='button-container hidden'><a href='#' class='edit'>" + "<i class='far fa-edit '></i></a>" + " <a href='#' class='delete'>" + "<i class='fas fa-trash'></i></a></div></li>");  
        $("#inputToDoList").val(""); 
        
      } else {
        $("#inputToDoList").slideToggle();
      } 
    });
    
    $("ul").on("click", "li", function() {
        var item = $(this).closest("li").find("span");
        if (item.attr("contentEditable") == "false") {
          $(this).toggleClass("checked");
        }
    });
    
    $(document).on("click", ".edit", function() {
      var item = $(this).closest("li").find("span");
      item.prop("contenteditable", true);
      $(item).removeClass("checked");
      $(item).addClass("editable");
      $(".edit, .delete").hide();
      $("#confirm").slideDown();
    
      $("#confirm").on("click", function() {
        $("span").attr("contenteditable", false);
        $(item).removeClass("checked");

        $(".edit, .delete").show();
        $("#confirm").slideUp();
        $(item).removeClass("editable");
      }) 
      return false;
    });
    
    $(document).on("click", ".delete", function() { 
      $(this).closest("li").fadeOut("slow", function() {
        $(this).remove();
      }); 
      return false;
    });
    
    // Bouton confirmation
    $("#confirm").hide();
    $("#inputToDoList").hide();
});


