function ask()   
{  
   //array of images with image location, height, and width  
    var imageArray = [  
    {   
     //address URL of the image  
    src: "images/magic8ball_start.png",  
     //size for the image to be display on webpage  
        width: "300",  
        height: "300"  
},   
{     
    src: "images/magic8ball_1.png",
    width: "300",
    height: "300"
},
{ 
    src: "images/magic8ball_2.png",
    width: "300",
    height: "300" 
},  
{ 
  src: "images/magic8ball_3.png",
  width: "300",
  height: "300" 
},
{ 
  src: "images/magic8ball_4.png",
  width: "300",
  height: "300" 
},
{ 
  src: "images/magic8ball_5.png",
  width: "300",
  height: "300" 
},
{ 
  src: "images/magic8ball_6.png",
  width: "300",
  height: "300" 
},
{ 
  src: "images/magic8ball_7.png",
  width: "300",
  height: "300" 
},
{ 
  src: "images/magic8ball_8.png",
  width: "300",
  height: "300" 
},
{ 
  src: "images/magic8ball_9.png",
  width: "300",
  height: "300" 
},
{ 
  src: "images/magic8ball_10.png",
  width: "300",
  height: "300" 
},
{ 
  src: "images/magic8ball_11.png",
  width: "300",
  height: "300" 
},
{ 
  src: "images/magic8ball_12.png",
  width: "300",
  height: "300" 
},
{ 
  src: "images/magic8ball_13.png",
  width: "300",
  height: "300" 
},
{ 
  src: "images/magic8ball_14.png",
  width: "300",
  height: "300" 
},
{ 
  src: "images/magic8ball_15.png",
  width: "300",
  height: "300" 
},
{ 
  src: "images/magic8ball_16.png",
  width: "300",
  height: "300" 
},
{ 
  src: "images/magic8ball_17.png",
  width: "300",
  height: "300" 
},
{ 
  src: "images/magic8ball_18.png",
  width: "300",
  height: "300" 
},
{ 
  src: "images/magic8ball_19.png",
  width: "300",
  height: "300" 
},
{ 
  src: "images/magic8ball_20.png",
  width: "300",
  height: "300" 
},
{  
    src: "images/magic8ball_extra.png",  
    width: "300",  
    height: "300"  
    } ];  
    //find the length of the array of images  
    var arrayLength = imageArray.length;  
    var newArray = [];  
    for (var i = 0; i < arrayLength; i++) {  
        newArray[i] = new Image();  
        newArray[i].src = imageArray[i].src;  
        newArray[i].width = imageArray[i].width;  
        newArray[i].height = imageArray[i].height;  
    }  

  // create random image number  
    function getRandomNum(min, max) {  
      // generate and return a random number for the image to be displayed   
      imgNo = Math.floor(Math.random() * (max - min + 1)) + min;  
        return newArray[imgNo];  
}    

  // 0 is first image and (preBuffer.length - 1) is last image of the array  
    var newImage = getRandomNum(0, newArray.length - 1);  

  // remove the previous images  
    var images = document.getElementsByTagName('img');  
    var l = images.length;  
    for (var p = 0; p < l; p++) {  
    images[0].parentNode.removeChild(images[0]);  
}  
  // display the new random image    
    document.body.appendChild(newImage);  
}  

// function repl() {
// let text = document.getElementById("Enter");

// if (text.value == " ") {
//   document.getElementById("Enter").style.visibility="hidden";
  
// }
// else {
//   document.getElementById("Enter").style.visibility="visible";
  
// }
// }

function refreshPage() {

  let text = document.getElementById("Enter");
  // text.resetvalue="";
text.value="";
    // location.reload();
}

let welcome= "Welcome to the Page!";
alert(welcome);