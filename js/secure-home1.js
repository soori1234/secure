



$(document).ready(function(){
  alert("test");
  $("input-image-submit").click(function(){
        $.ajax({
                  url: "https://httpbin.org/get", 
                 success: function(result){
                            alert(result);
                          }
        });
  });
});
