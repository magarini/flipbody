let bodysculptures=[];
let x;

function preload(){
    for (i=2;i<6;i++){
    bodysculptures[i]=loadImage('bodysculpture ('+i+').png');
    }
}

function setup() {
    let canvas=createCanvas(480, 480);
    canvas.parent('sketch-holder');
    frameRate(5);
    
  }
  
  function draw() {
      background(random(255),random(255),random(255))
    for (i=2;i<bodysculptures.length;i++){
        //rotate(random(-50,50));
    image(bodysculptures[i],0,0);
    }
    x=random(2,6);
    image(bodysculptures[x],0,0);

    //noLoop();
  }
  
  function takePic() {
    saveCanvas('bodysculpture');
   }
  