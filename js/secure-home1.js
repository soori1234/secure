



$(document).ready(function(){
  $("input-image-submit").click(function(){
       alert("button click");
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
