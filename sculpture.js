let bodyparts=[];

function preload(){
    for (i=0;i<6;i++){
    bodyparts[i]=loadImage('bodypart'+i+'.png');
    bodyparts[i].style("z-index: -100");

    }
}

function setup() {
    let canvas=createCanvas(480, 480);
    canvas.parent('sketch-holder');
    button1 = select('#createAbody');
    //button.position(380, 400);
    button1.mousePressed(redraw);
    button2 = select('#takeApic');
  //button.position(380, 400);
  button2.mousePressed(takePic);
    
  }
  
  function draw() {
      background(random(255),random(255),random(255))
    for (i=0;i<bodyparts.length;i++){
        //rotate(random(-50,50));
    image(bodyparts[i],random(-200,400),random(-200,400));
    }
    noLoop();
  }
  
  function takePic() {
    saveCanvas('bodysculpture');
   }
  