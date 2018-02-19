var input-img-string;
function readFile() {
  
  if (this.files && this.files[0]) {
    
    var FR= new FileReader();
    
    FR.addEventListener("load", function(e) {
      document.getElementById("img").src = e.target.result;
      input-img-string=e.target.result;
    }); 
    
    FR.readAsDataURL( this.files[0] );
  }
  alert(input-img-string);
}

document.getElementById("input-image").addEventListener("change", readFile);
