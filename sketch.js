function setup() {
  // put setup code here
  createCanvas(1200,700);
}

function draw() {
  // put drawing code here
  background(200,255,200);
  fill(0, 10);
  for(let i=0; i<50; i++){
  triangle(50*i,i,1000,i+300,i,i*i);
}
}