
function displayRadioValue() { 
            var ele = document.getElementsByName('PFXRadios'); 
              
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                document.getElementById("radio-results").innerHTML
                        = ele[i].value; 
            } 
        } 



/* 
************************************************************************************************************************************

START CODE FOR SLIDER ELEMENT

*************************************************************************************************************************************
*/

var sliderValue = [0 ,8,10,12,14,16,18,20,'',24]; // our dynamic array

    document.querySelector("#af-slider").setAttribute("max",sliderValue.length-1)
    // here we have set max attribute to one less array length i.e. 7-1 = 6

    const settings={
      fill: '#97989A',
      background: '#d7dcdf'
    } // colour settings for slider fill effect

    document.querySelector('#size').innerHTML = sliderValue[0]
    // intialized slider value to array first element.


    // below code execute when we move the slider 
    document.querySelector("#af-slider").addEventListener('input', (event)=>{
    // 1. apply our value to the span
    document.querySelector('#size-results').innerHTML = sliderValue[parseInt(event.target.value)];
    document.querySelector('#size').innerHTML = sliderValue[parseInt(event.target.value)];
    
      
         

    // 2. apply our fill to the input
    applyFill(event.target);
    fillData(sliderValue[parseInt(event.target.value)]);
  });

    // This function applies the fill to our sliders by using a linear gradient background
    function applyFill(slider) {
       const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
       const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
       slider.style.background = bg;
    }



    
 function fillData(sliderValue){
   
   var fanSize = sliderValue;
   var fanType = document.querySelector('#radio-results').innerHTML;
   
   if(fanType == "PFX3.0"){
     
     switch(fanSize){
         
         
       case 0:
         document.querySelector('#speed-results').innerHTML = "";
         document.querySelector('#voltage1').innerHTML = "";
         document.querySelector('#voltage2').innerHTML = "";
         document.querySelector('#voltage3').innerHTML = "";
         document.querySelector('#voltage4').innerHTML = "";
         document.querySelector('#amps1').innerHTML = "";
         document.querySelector('#amps2').innerHTML = "";
         document.querySelector('#amps3').innerHTML = "";
         document.querySelector('#amps4').innerHTML = "";
         document.querySelector('#circuit1').innerHTML = "";
         document.querySelector('#circuit2').innerHTML = " ";
         document.querySelector('#circuit3').innerHTML = " ";  
         document.querySelector('#circuit4').innerHTML = " ";

    // code block
       break;
         
         case '':
         document.querySelector('#speed-results').innerHTML = "";
         document.querySelector('#voltage1').innerHTML = "";
         document.querySelector('#voltage2').innerHTML = "";
         document.querySelector('#voltage3').innerHTML = "";
         document.querySelector('#voltage4').innerHTML = "";
         document.querySelector('#amps1').innerHTML = "";
         document.querySelector('#amps2').innerHTML = "";
         document.querySelector('#amps3').innerHTML = "";
         document.querySelector('#amps4').innerHTML = "";
         document.querySelector('#circuit1').innerHTML = "";
         document.querySelector('#circuit2').innerHTML = "";
         document.querySelector('#circuit3').innerHTML = "";  
         document.querySelector('#circuit4').innerHTML = "";
    // code block
       break;
         
        case 8:
         document.querySelector('#speed-results').innerHTML = "197 RPM";
         document.querySelector('#voltage1').innerHTML = "200-240 V, 1Φ";
         document.querySelector('#voltage2').innerHTML = "200-240 V, 3Φ";
         document.querySelector('#voltage3').innerHTML = "400-480 V, 3Φ";
         document.querySelector('#voltage4').innerHTML = "";
         document.querySelector('#amps1').innerHTML = "8.8-7.7 A";
         document.querySelector('#amps2').innerHTML = "4.8-3.9 A";
         document.querySelector('#amps3').innerHTML = "2.4-2.5 A";
         document.querySelector('#amps4').innerHTML = "";
         document.querySelector('#circuit1').innerHTML = "20 A";
         document.querySelector('#circuit2').innerHTML = "10 A";
         document.querySelector('#circuit3').innerHTML = "10 A";        
         document.querySelector('#circuit4').innerHTML = "";
    // code block
       break;
      case 10:
         document.querySelector('#speed-results').innerHTML = "160 RPM";
         document.querySelector('#voltage1').innerHTML = "200-240 V, 1Φ";
         document.querySelector('#voltage2').innerHTML = "200-240 V, 3Φ";
         document.querySelector('#voltage3').innerHTML = "400-480 V, 3Φ";
         document.querySelector('#voltage4').innerHTML = "";         
         document.querySelector('#amps1').innerHTML = "8.8-7.7 A";
         document.querySelector('#amps2').innerHTML = "4.8-3.9 A";
         document.querySelector('#amps3').innerHTML = "2.4-2.5 A";
         document.querySelector('#amps4').innerHTML = "";
         document.querySelector('#circuit1').innerHTML = "30 A";
         document.querySelector('#circuit2').innerHTML = "20 A";
         document.querySelector('#circuit3').innerHTML = "10 A";  
         document.querySelector('#circuit4').innerHTML = "";  
    
       break;
         case 12:
         document.querySelector('#speed-results').innerHTML = "139 RPM";
         document.querySelector('#voltage1').innerHTML = "200-240 V, 1Φ";
         document.querySelector('#voltage2').innerHTML = "200-240 V, 3Φ";
         document.querySelector('#voltage3').innerHTML = "400-480 V, 3Φ";
         document.querySelector('#voltage4').innerHTML = "575-600 V, 3Φ";         
         document.querySelector('#amps1').innerHTML = "12.4-10.7 A";
         document.querySelector('#amps2').innerHTML = "6.1-5.6 A";
         document.querySelector('#amps3').innerHTML = "3.5-3.3 A";
         document.querySelector('#amps4').innerHTML = "1.9 A";
         document.querySelector('#circuit1').innerHTML = "30 A";
         document.querySelector('#circuit2').innerHTML = "20 A";
         document.querySelector('#circuit3').innerHTML = "10 A";  
         document.querySelector('#circuit4').innerHTML = "10 A";  
    
       break;
         case 14:
         document.querySelector('#speed-results').innerHTML = "118 RPM";
         document.querySelector('#voltage1').innerHTML = "200-240 V, 1Φ";
         document.querySelector('#voltage2').innerHTML = "200-240 V, 3Φ";
         document.querySelector('#voltage3').innerHTML = "400-480 V, 3Φ";
         document.querySelector('#voltage4').innerHTML = "575-600 V, 3Φ";         
         document.querySelector('#amps1').innerHTML = "12.4-10.7 A";
         document.querySelector('#amps2').innerHTML = "6.1-5.6 A";
         document.querySelector('#amps3').innerHTML = "3.5-3.3 A";
         document.querySelector('#amps4').innerHTML = "1.9 A";
         document.querySelector('#circuit1').innerHTML = "30 A";
         document.querySelector('#circuit2').innerHTML = "20 A";
         document.querySelector('#circuit3').innerHTML = "10 A";  
         document.querySelector('#circuit4').innerHTML = "10 A";  
    
       break;
         case 16:
         document.querySelector('#speed-results').innerHTML = "99 RPM";
         document.querySelector('#voltage1').innerHTML = "200-240 V, 1Φ";
         document.querySelector('#voltage2').innerHTML = "200-240 V, 3Φ";
         document.querySelector('#voltage3').innerHTML = "400-480 V, 3Φ";
         document.querySelector('#voltage4').innerHTML = "575-600 V, 3Φ";         
         document.querySelector('#amps1').innerHTML = "12.4-10.7 A";
         document.querySelector('#amps2').innerHTML = "6.1-5.6 A";
         document.querySelector('#amps3').innerHTML = "3.5-3.3 A";
         document.querySelector('#amps4').innerHTML = "1.9 A";
         document.querySelector('#circuit1').innerHTML = "30 A";
         document.querySelector('#circuit2').innerHTML = "20 A";
         document.querySelector('#circuit3').innerHTML = "10 A";  
         document.querySelector('#circuit4').innerHTML = "10 A";  
    
       break;
         case 18:
         document.querySelector('#speed-results').innerHTML = "160 RPM";
         document.querySelector('#voltage1').innerHTML = "200-240 V, 1Φ";
         document.querySelector('#voltage2').innerHTML = "200-240 V, 3Φ";
         document.querySelector('#voltage3').innerHTML = "400-480 V, 3Φ";
         document.querySelector('#voltage4').innerHTML = "";         
         document.querySelector('#amps1').innerHTML = "13-11.4 A";
         document.querySelector('#amps2').innerHTML = "7.6-6.9 A";
         document.querySelector('#amps3').innerHTML = "3.9 A";
         document.querySelector('#amps4').innerHTML = "2.3 A";
         document.querySelector('#circuit1').innerHTML = "30 A";
         document.querySelector('#circuit2').innerHTML = "20 A";
         document.querySelector('#circuit3').innerHTML = "10 A";  
         document.querySelector('#circuit4').innerHTML = "10 A";  
    
       break;
         case 20:
         document.querySelector('#speed-results').innerHTML = "160 RPM";
         document.querySelector('#voltage1').innerHTML = "200-240 V, 1Φ";
         document.querySelector('#voltage2').innerHTML = "200-240 V, 3Φ";
         document.querySelector('#voltage3').innerHTML = "400-480 V, 3Φ";
         document.querySelector('#voltage4').innerHTML = "";         
         document.querySelector('#amps1').innerHTML = "8.8-7.7 A";
         document.querySelector('#amps2').innerHTML = "4.8-3.9 A";
         document.querySelector('#amps3').innerHTML = "2.4-2.5 A";
         document.querySelector('#amps4').innerHTML = "";
         document.querySelector('#circuit1').innerHTML = "30 A";
         document.querySelector('#circuit2').innerHTML = "20 A";
         document.querySelector('#circuit3').innerHTML = "10 A";  
         document.querySelector('#circuit4').innerHTML = "";  
    
       break;
         case 24:
         document.querySelector('#speed-results').innerHTML = "160 RPM";
         document.querySelector('#voltage1').innerHTML = "200-240 V, 1Φ";
         document.querySelector('#voltage2').innerHTML = "200-240 V, 3Φ";
         document.querySelector('#voltage3').innerHTML = "400-480 V, 3Φ";
         document.querySelector('#voltage4').innerHTML = "";         
         document.querySelector('#amps1').innerHTML = "8.8-7.7 A";
         document.querySelector('#amps2').innerHTML = "4.8-3.9 A";
         document.querySelector('#amps3').innerHTML = "2.4-2.5 A";
         document.querySelector('#amps4').innerHTML = "";
         document.querySelector('#circuit1').innerHTML = "30 A";
         document.querySelector('#circuit2').innerHTML = "20 A";
         document.querySelector('#circuit3').innerHTML = "10 A";  
         document.querySelector('#circuit4').innerHTML = "";  
    
       break;
  default:
         document.querySelector('#speed-results').innerHTML = "";
         document.querySelector('#voltage1').innerHTML = "";
         document.querySelector('#voltage2').innerHTML = "";
         document.querySelector('#voltage3').innerHTML = "";
         document.querySelector('#voltage4').innerHTML = "";
         document.querySelector('#amps1').innerHTML = "";
         document.querySelector('#amps2').innerHTML = "";
         document.querySelector('#amps3').innerHTML = "";
         document.querySelector('#amps4').innerHTML = "";
         document.querySelector('#circuit1').innerHTML = "";
         document.querySelector('#circuit2').innerHTML = " ";
         document.querySelector('#circuit3').innerHTML = " ";  
         document.querySelector('#circuit4').innerHTML = " ";
        
    // code block 
         
     }
     
     
     
   }
  
   
   
   
   
   
 }   
    
 


/* 
************************************************************************************************************************************

START CODE FOR SLIDER ELEMENT

*************************************************************************************************************************************
*/

//
//function displayRadioValue() { 
//            var ele = document.getElementsByName('PFXRadios'); 
//            
 //             
 //           for(i = 0; i < ele.length; i++) { 
 //               if(ele[i].checked){
 //               document.getElementById("result").innerHTML
 //                       = "Fan: "+ele[i].value; }
  
//  
//}
//}


//function specOutput(){
  
//}


function displaySize(){
  
  var size = document.getElementById("#af-slider").value;
    
  document.getElementById('#size-results').innerHTML = size;
}