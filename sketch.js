function setup() {
  // put setup code here
  createCanvas(1200,700);
}

function draw() {
  // put drawing code here
  background(255,200,255);
  fill(0, 10);
  for(let i=0; i<100; i++){
  triangle(mouseX*i,mouseY+i,mouseX,i+200,i,i);
}
}