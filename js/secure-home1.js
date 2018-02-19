



$(document).ready(function(){
  $("input-image-submit").click(function(){
        $.ajax({
                  url: "demo_test.txt", 
                 success: function(result){
                            alert(result);
                          }
        });
  });
});
