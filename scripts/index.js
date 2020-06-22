/**
 * index.js
 * - All our usefulgoes here, awesome!
**/

document.getElementById("af-slider").step = "2";
var slider = document.getElementById("af-slider");
var output = document.getElementById("size");
output.innerHTML = slider.value; // Display the default slider value


// Update the current slider value (each time you drag the slider handle)

slider.oninput = function afSlider() {
  
  var size = document.getElementById("af-slider").value;
 
 if(size == 22){
    document.getElementById("af-slider").stepUp();
  output.innerHTML = 24;
  }
  else if(size != 22){
  output.innerHTML = size;
  }
}
