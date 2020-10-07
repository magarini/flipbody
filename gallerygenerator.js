let bodysculptures=[];
let x;

function preload(){
    for (i=0;i<5;i++){
    bodysculptures[i]=loadImage('bodysculpture ('+i+').png');
    console.log(bodysculptures[i]);
}
}

function setup() {
    let canvas=createCanvas(480, 480);
    canvas.parent('sketch-holder');
    frameRate(5);
    
  }
  
  function draw() {
      background(random(255),random(255),random(255))
    
let img=random(bodysculptures);
image(img,0,0);
 
  }
  
  