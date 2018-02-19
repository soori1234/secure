



$(document).ready(function(){
  $("input-image-submit").click(function(){
        $.ajax({
                  url: "https://httpbin.org/get", 
                 success: function(result){
                            alert(result);
                          }
        });
  });
});
