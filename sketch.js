var fondo,fondoimg;
var gato,gatoimg;
var rama,ramaImg, ramaGroup;
var ardilla, ardillaImg, ardillaGroup;
var invisibleGround,invisibleGroundGroup;
var aguacate, aguacateImg;
var bola, bolaImg;
var vidas=3;
function preload(){
  fondoimg = loadImage("fondo.png");
 gatoimg = loadAnimation("gato.png","gato2.png","gato3.png");
 //ramaImg = loadImage("rama.png");
 ardillaImg= loadAnimation("ardilla1.png","ardilla2.png","ardilla3.png");
 aguacateImg=loadImage("aguacate.png");
 bolaImg= loadImage("bola.png");
}

function setup() {
createCanvas(windowWidth,windowHeight);


 //creación gato
 gato=createSprite(100,1000,40,100);
 gato.addAnimation("running",gatoimg);
 //gato.scale=0.2;



 //crear aguacate
 aguacate= createSprite(0,0);
 aguacate.addImage(aguacateImg);
aguacate.scale=0.2;
 
//crear bola
bola=createSprite(310,1000);
bola.addImage(bolaImg);
bola.scale=0.02;


 ramaGroup=new Group();
ardillaGroup=new Group();


}
function draw() {
  background(fondoimg);


 //Hacer salt ar al gato con la tecla espaciadora.
 if(keyDown("space")) {
  gato.velocityY= -10; 
}


gato.velocityY = gato.velocityY + 0.8


spawnRamas();
createEdgeSprites();
if(ramaGroup.isTouching(gato)){
 gato.velocityX =        1     ;
 gato.velocityY=-2;  
}

if(ardillaGroup.isTouching(gato)){
  //reset;
  
 }

  drawSprites();       

}

function spawnRamas() {
 
 //creación rama
 if (frameCount % 180 === 0) {
  rama = createSprite(1800,1800,800,50);
  rama.shapeColor="brown";


     rama.y=Math.round(random(400, 1000));
  //rama.addImage(ramaImg); 
  rama.velocityX=-3;

   //crear ardilla
 ardilla=createSprite(300,1000,40,100);
 ardilla.addAnimation("dancing",ardillaImg);
 ardilla.velocityX=-3;
 ardilla.y=rama.y-60;

 ardilla.x= Math.round(random(1400,2200));
 console.log(rama.x);

 aguacate.velocityX=-3;
 aguacate.y=rama.y-65;
 
 aguacate.x= Math.round(random(1400,2200));
 
  
     //asignar ciclo de vida a la variable
      rama.lifetime = 1000;  
      ardilla.lifetime=800;
       
    //  invisibleGround.lifetime=800;

      //ajustar la profundidad
    rama.depth = gato.depth;
    gato.depth = gato.depth + 1;
 
    ramaGroup.add(rama);
  //  invisibleGroundGroup.add(invisibleGround);

 
}
 
 
 
   
    
        
}

  
