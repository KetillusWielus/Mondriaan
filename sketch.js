function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  //vierkanten

  stroke("black");
  strokeWeight(4);
  fill("black");
  square(150,0,100);

  stroke("black");
  strokeWeight(4);
  fill("black");
  square(0,350,50);
  
  stroke("black");
  strokeWeight(4);
  fill("blue");
  square(150,100,100);
  
  stroke("black");
  strokeWeight(4);
  fill("red");
  square(0,0,50);
  
  stroke("black");
  strokeWeight(4);
  fill("yellow");
  square(50,50,100);
  
  stroke("black");
  strokeWeight(4);
  fill("white");
  square(0,150,150);
  
  stroke("black");
  strokeWeight(4);
  fill("white");
  square(250,0,150);
  
  stroke("black");
  strokeWeight(4);
  fill("white");
  square(150,300,100);
  
  
  //rechthoeken

  stroke("black");
  strokeWeight(4);
  fill("black")
  rect(350,200,50,100);
  
  stroke("black");
  strokeWeight(4);
  fill("blue");  
  rect(50,0,100,50);

  stroke("black");
  strokeWeight(4);
  fill("blue");
  rect(250,300,150,100);
  
  stroke("black");
  strokeWeight(4);
  fill("red");
  rect(0,300,150,50);
  
  stroke("black");
  strokeWeight(4);
  fill("red");
  rect(250,150,150,50);
  
  stroke("black");
  strokeWeight(4);
  fill("yellow");
  rect(50,350,100,50);
  
  stroke("black");
  strokeWeight(4);
  fill("yellow");
  rect(150,200,200,100);
  
  stroke("black");
  strokeWeight(4);
  fill("white")
  rect(0,50,50,100);
}
