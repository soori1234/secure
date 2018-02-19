var inputImgString;
function readFile() {
  
  if (this.files && this.files[0]) {
    
    var FR= new FileReader();
    
    FR.addEventListener("load", function(e) {
      inputImgString=e.target.result;
      document.getElementById("img").src = e.target.result;
    }); 
    
    FR.readAsDataURL( this.files[0] );
  }
  
}

function submitImage(){
  alert("test");
alert(inputImgString);
}

document.getElementById("input-image").addEventListener("change", readFile);
document.getElementById("input-image-submit").addEventListener("click", submitImage);
