var inputImgString;
function readFile() {
  
  if (this.files && this.files[0]) {
    
    var FR= new FileReader();
    
    FR.addEventListener("load", function(e) {
      inputImgString=e.target.result;
      document.getElementById("img").src = e.target.result;
      alert(inputImgString);
    }); 
    
    FR.readAsDataURL( this.files[0] );
  }
  
}

document.getElementById("input-image").addEventListener("change", readFile);
