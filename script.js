let cx, cy;
let dx, dy;
let path;
let skyColor;
let seaColor;
let reverseIndex = 340;
let rising = true;
//Mr.Oswald helped us with this

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 25);
    noStroke();
  colorMode(HSB, 360, 100, 100, 100);
  cx = width/2;
  cy = 0.8*height;
  ellipseMode(RADIUS);
  dx = width/2;
  dy = 0.8*height;
  ellipseMode(RADIUS);
  path = {
    e: {
      x: width/2,
      y: height/2,
      w: width/2 - 1/10*width,
      h: height/2 - 1/10*width
    },
    theta: 0
  };
  skyColor = color(0, 311, 253);
  seaColor = color(235,100,30);
}

let bgImg;
let img;
let flipimg;

function preload() {
bgImg = loadImage('ocean.jpeg');
img = loadImage('ocean texture.jpg');
}


function draw (){
  background(bgImg);
  fill(skyColor);
    rect(0,0,width,0.6*height);  
  fill('yellow');
    circle(cx,cy,1/15*width);
  image(img,0,0.6*height);
  image(img,img.width,0.6*height);
  fill(seaColor);
    rect(0,0.6*height,width,0.4*height);
  // cy -= 1;

  cx = path.e.x + path.e.w*(cos(path.theta));
  cy = path.e.y + path.e.h*(sin(path.theta));
  //Mr.Osawld gave us this equation but it can be found online


    const newHue = map(cy, 0.8*height, 0, 400, 180);
    const newBrightness = map(cy,0.8*height,0,30,100);
    skyColor = color(newHue, saturation(skyColor),newBrightness,50); 
    seaColor = color(hue(seaColor), saturation(seaColor),newBrightness,67);  
  path.theta += 0.01; 
}

