var cars1;
var colls1;
var speed;
var weight;
var deformation;
function setup()
{
    createCanvas(1200,600);

    speed = random(1,290);
    weight = random(500,1200);
    cars1 = createSprite(200,300,30,30);
    cars1.shapeColor = "white";

    colls1 = createSprite(1000,300,10,50);
    colls1.shapeColor = "grey";

    cars1.velocityX = speed;
}
function draw(){
  background("black");

  if(colls1.x-cars1.x < (cars1.width+colls1.width)/2)
  {
    cars1.velocityX = 0;
    var deformation = 0.5 * weight * speed*speed/22500;
    console.log(deformation);
    if(deformation>180){
      cars1.shapeColor = "red";
    }
    if(deformation<180&&deformation>100){
      cars1.shapeColor = "yellow";
    }
    if(deformation<100){
      cars1.shapeColor = "green";
    }

  }
  drawSprites();
}