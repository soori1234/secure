



$(document).ready(function(){
  alert("test");
  $("input-image-submit").click(function(){
        $.ajax({
                  url: "demo_test.txt", 
                 success: function(result){
                            alert(result);
                          }
        });
  });
});
