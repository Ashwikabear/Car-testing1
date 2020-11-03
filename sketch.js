
var wall, car
var speed,weight,deformation

function setup() {
  createCanvas(1600,400);
  car =createSprite(50,200,50,50)
  wall = createSprite(700,200,60,400)
  
  speed=random(55,90)
  weight=random(400,1500)
   car.shapeColor="brown"
   wall.shapeColor="brown"
   
}

function draw() {
  background(255,255,255);
  

 car.velocityX= speed;

  if(car.x-wall.x < car.width/2 + wall.width/2 && wall.x-car.x<wall.width/2+car.width/2 &&
    car.y-wall.y<car.height/2+wall.height/2 && wall.y-car.y<wall.height/2+car.height/2
  ){
    deformation= .5 *  weight * speed* speed /22500
    car.velocityX=0
    if(deformation<100){
 car.shapeColor= "green"
 
 } else  if ( deformation <180 || deformation>100){

      car.shapeColor = "yellow"

 }
  else if (deformation>180){

   car.shapeColor = "red"
 }



  }
  console.log(car)
 console.log(wall)
  drawSprites();
}