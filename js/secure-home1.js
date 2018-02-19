var inputImgString;
function readFile() {
  
  if (this.files && this.files[0]) {
    
    var FR= new FileReader();
    
    FR.addEventListener("load", function(e) {
      document.getElementById("img").src = e.target.result;
      inputImgString=e.target.result;
    }); 
    
    FR.readAsDataURL( this.files[0] );
  }
  alert(inputImgString);
}

document.getElementById("input-image").addEventListener("change", readFile);
