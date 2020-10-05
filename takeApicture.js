let capture;

function setup() {
  let canvas=createCanvas(480, 480);
  canvas.parent('sketch-holder');

  capture = createCapture(VIDEO);
  capture.hide();
  button = select('#takeApic');
  //button.position(380, 400);
  button.mousePressed(takePic);
}

function draw() {
  image(capture, 0, 0, width, width * capture.height / capture.width);
  //filter(INVERT);
}

function takePic() {
 saveCanvas('bodypart');
}