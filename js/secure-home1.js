var input-img-base64="";
function readFile() {
  
  if (this.files && this.files[0]) {
    
    var FR= new FileReader();
    
    FR.addEventListener("load", function(e) {
      document.getElementById("img").src = e.target.result;
    }); 
    
    FR.readAsDataURL( this.files[0] );
  }
  alert(input-img-base64);
}

document.getElementById("input-image").addEventListener("change", readFile);
