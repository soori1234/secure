



$(document).ready(function(){
  $("input-image-submit").click(function(){
        $.ajax({
                  url: "https://httpbin.org/get",
                  error: function(result){
                            alert("error");
                          },
                 success: function(result){
                            alert("result");
                          }
        });
  });
});
