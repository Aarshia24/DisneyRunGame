var alien;
var backgroundImage;
var rocket;
var blast;
var asteriods;
var Minnie;
var Golden;
var Pink;
var Purple;
var Red;
var title
var score = 0;
var life = 4;
var gamestate = 0;

var GoldenBowGroup, GoldenBow1, GoldenBow2, GoldenBow3, GoldenBow4, GoldenBow5, GoldenBow6, GoldenBow7, GoldenBow8, GoldenBow9, GoldenBow10;
var PinkBowGroup, PinkBow1, PinkBow2, PinkBow3, PinkBow4, PinkBow5;
var PurpleBowGroup, PurpleBow1, PurpleBow2, PurpleBow3, PurpleBow4, PurpleBow5, PurpleBow5;
var RedBowGroup, RedBow1, RedBow2, RedBow3;
var AliensGroup, aliens1;
var rocketsGroup, Rocket;
var asteriodsGroup, Asteriods;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  alien = loadImage("./assets/Alien.png");
  rocket = loadImage("./assets/rocket.png");
  blast = loadImage("./assets/blast.png");
  asteriods = loadImage("./assets/asteriods_good2.png");
  Minnie = loadImage("./assets/minnie_mouse.png");
  Golden = loadImage("./assets/golden_bow.png");
  Pink = loadImage("./assets/pink_bow.png");
  Purple = loadImage("./assets/purple_bow.png");
  Red = loadImage("./assets/red_bow.png");
  title = loadImage("./assets/Title.png");
  lifetime = loadImage("./assets/life.png");

  startSound = loadSound("start.wav");
  gameoverSound = loadSound("gameoverSound.wav");
  gameWonSound = loadSound("WinSound.wav");
  collectBowSound = loadSound("collect.wav");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  GoldenBowGroup = new Group();
  AliensGroup = new Group();
  PinkBowGroup = new Group();
  PurpleBowGroup = new Group();
  RedBowGroup = new Group();
  rocketsGroup = new Group();
  asteriodsGroup = new Group();

  minnie = createSprite(200, 500, 50, 50);
  minnie.addImage(Minnie);
  minnie.scale = 0.5;

  var GoldenBow1 = createSprite(600, 120, 40, 10);
  GoldenBow1.x = Math.round(random(80,width*4-200));
  GoldenBow1.y = Math.round(random(100, height-200));
  GoldenBow1.addImage(Golden);
  GoldenBow1.scale = 0.3
  GoldenBowGroup.add(GoldenBow1)

  var GoldenBow2 = createSprite(600, 120, 40, 10);
  GoldenBow2.x = Math.round(random(80,width*4-200));
  GoldenBow2.y = Math.round(random(100, height-200));
  GoldenBow2.addImage(Golden);
  GoldenBow2.scale = 0.3
  GoldenBowGroup.add(GoldenBow2)

  var GoldenBow3 = createSprite(600, 120, 40, 10);
  GoldenBow3.x = Math.round(random(80,width*4-200));
  GoldenBow3.y = Math.round(random(100, height-200));
  GoldenBow3.addImage(Golden);
  GoldenBow3.scale = 0.3
  GoldenBowGroup.add(GoldenBow3)

  var GoldenBow4 = createSprite(600, 120, 40, 10);
  GoldenBow4.x = Math.round(random(80,width*4-200));
  GoldenBow4.y = Math.round(random(100, height-200));
  GoldenBow4.addImage(Golden);
  GoldenBow4.scale = 0.3
  GoldenBowGroup.add(GoldenBow4)

  var GoldenBow5 = createSprite(600, 120, 40, 10);
  GoldenBow5.x = Math.round(random(80,width*4-200));
  GoldenBow5.y = Math.round(random(100, height-200));
  GoldenBow5.addImage(Golden);
  GoldenBow5.scale = 0.3
  GoldenBowGroup.add(GoldenBow5)

  var GoldenBow6 = createSprite(600, 120, 40, 10);
  GoldenBow6.x = Math.round(random(80,width*4-200));
  GoldenBow6.y = Math.round(random(100, height-200));
  GoldenBow6.addImage(Golden);
  GoldenBow6.scale = 0.3;
  GoldenBowGroup.add(GoldenBow6)

  var GoldenBow7 = createSprite(600, 120, 40, 10);
  GoldenBow7.x = Math.round(random(80,width*4-200));
  GoldenBow7.y = Math.round(random(100, height-200));
  GoldenBow7.addImage(Golden);
  GoldenBow7.scale = 0.3;
  GoldenBowGroup.add(GoldenBow7)

  var GoldenBow8 = createSprite(600, 120, 40, 10);
  GoldenBow8.x = Math.round(random(80,width*4-200));
  GoldenBow8.y = Math.round(random(100, height-200));
  GoldenBow8.addImage(Golden);
  GoldenBow8.scale = 0.3
  GoldenBowGroup.add(GoldenBow8)

  var GoldenBow9 = createSprite(600, 120, 40, 10);
  GoldenBow9.x = Math.round(random(80,width*4-200));
  GoldenBow9.y = Math.round(random(100, height-200));
  GoldenBow9.addImage(Golden);
  GoldenBow9.scale = 0.3
  GoldenBowGroup.add(GoldenBow9)

  var GoldenBow10 = createSprite(600, 120, 40, 10);
  GoldenBow10.x = Math.round(random(80,width*4-200));
  GoldenBow10.y = Math.round(random(100, height-200));
  GoldenBow10.addImage(Golden);
  GoldenBow10.scale = 0.3
  GoldenBowGroup.add(GoldenBow10)

  var PinkBow1 = createSprite(300,400,60,60);
  PinkBow1.x = Math.round(random(80,width*4-230));
  PinkBow1.y = Math.round(random(100, height-230));
  PinkBow1.addImage(Pink);
  PinkBow1.scale = 0.2;
  PinkBowGroup.add(PinkBow1);

  var PinkBow2 = createSprite(300,400,60,60);
  PinkBow2.x = Math.round(random(80,width*4-230));
  PinkBow2.y = Math.round(random(100,height-230));
  PinkBow2.addImage(Pink);
  PinkBow2.scale = 0.2;
  PinkBowGroup.add(PinkBow2);

  var PinkBow3 = createSprite(300,400,60,60);
  PinkBow3.x = Math.round(random(80,width*4-230));
  PinkBow3.y = Math.round(random(100,height-230));
  PinkBow3.addImage(Pink);
  PinkBow3.scale = 0.2;
  PinkBowGroup.add(PinkBow3);

  var PinkBow4 = createSprite(300,400,60,60);
  PinkBow4.x = Math.round(random(80,width*4-230));
  PinkBow4.y = Math.round(random(100,height-230));
  PinkBow4.addImage(Pink);
  PinkBow4.scale = 0.2;
  PinkBowGroup.add(PinkBow4);

  var PinkBow5 = createSprite(300,400,60,60);
  PinkBow5.x = Math.round(random(80,width*4-230));
  PinkBow5.y = Math.round(random(100,height-230));
  PinkBow5.addImage(Pink);
  PinkBow5.scale = 0.2;
  PinkBowGroup.add(PinkBow5);

  var PurpleBow1 = createSprite(400,400,60,60);
  PurpleBow1.x = Math.round(random(80,width*4-215));
  PurpleBow1.y = Math.round(random(100,height-215));
  PurpleBow1.addImage(Purple);
  PurpleBow1.scale = 0.2;
  PurpleBowGroup.add(PurpleBow1);

  var PurpleBow2 = createSprite(400,400,60,60);
  PurpleBow2.x = Math.round(random(80,width*4-215));
  PurpleBow2.y = Math.round(random(100,height-215));
  PurpleBow2.addImage(Purple);
  PurpleBow2.scale = 0.2;
  PurpleBowGroup.add(PurpleBow2);

  var PurpleBow3 = createSprite(400,400,60,60);
  PurpleBow3.x = Math.round(random(80,width*4-215));
  PurpleBow3.y = Math.round(random(100,height-215));
  PurpleBow3.addImage(Purple);
  PurpleBow3.scale = 0.2;
  PurpleBowGroup.add(PurpleBow3);

  var PurpleBow4 = createSprite(400,400,60,60);
  PurpleBow4.x = Math.round(random(80,width*4-215));
  PurpleBow4.y = Math.round(random(100,height-215));
  PurpleBow4.addImage(Purple);
  PurpleBow4.scale = 0.2;
  PurpleBowGroup.add(PurpleBow4);

  var PurpleBow5 = createSprite(400,400,60,60);
  PurpleBow5.x = Math.round(random(80,width*4-215));
  PurpleBow5.y = Math.round(random(100,height-215));
  PurpleBow5.addImage(Purple);
  PurpleBow5.scale = 0.2;
  PurpleBowGroup.add(PurpleBow5);

  var RedBow1 = createSprite(500,400,60,60);
  RedBow1.x = Math.round(random(80,width*4-210));
  RedBow1.y = Math.round(random(100,height-210));
  RedBow1.addImage(Red);
  RedBow1.scale = 0.2;
  RedBowGroup.add(RedBow1);

  var RedBow2 = createSprite(500,400,60,60);
  RedBow2.x = Math.round(random(80,width*4-210));
  RedBow2.y = Math.round(random(100,height-210));
  RedBow2.addImage(Red);
  RedBow2.scale = 0.2;
  RedBowGroup.add(RedBow2);

  var RedBow3 = createSprite(500,400,60,60);
  RedBow3.x = Math.round(random(80,width*4-210));
  RedBow3.y = Math.round(random(100,height-210));
  RedBow3.addImage(Red);
  RedBow3.scale = 0.2;
  RedBowGroup.add(RedBow3);


  Minnie.debug = true
  
  score = 0;
}

function draw() {
  if ( gamestate === 0){
    background("black");
    text("Disney Run", width/2, height/2);
    image(title, 0,0,680*2,620);
    if (keyIsDown(UP_ARROW)){
      startSound.play();
      gamestate = 1;
    }
  }
  else{
    image(backgroundImage, 0,0, width*4, height);
    
    for (var i = 1; i <= life; i++){
      image(lifetime, minnie.x-(100+i*20), 10, 20,20);
    }
   
    text("Score: "+ score, minnie.x-100 ,50);
  
    camera.x = minnie.x+500;
  
    if (keyIsDown(RIGHT_ARROW) && minnie.x < width*4-100) {
      minnie.x += 10;
    }
  
    if (keyIsDown(LEFT_ARROW) && minnie.x > 160){
      minnie.x -=10;
    }
  
    if (keyIsDown(UP_ARROW)){
      minnie.y -=10
    }
  
    if (keyIsDown(DOWN_ARROW)){
      minnie.y +=10
    }
  
    minnie.overlap(GoldenBowGroup, function(collector, collected) {
      collectBowSound.play();
     score += 4;
      collected.remove();
    })
  
    minnie.overlap(PinkBowGroup, function(collector, collected) {
      collectBowSound.play();
      score += 2;
       collected.remove();
     })
  
     minnie.overlap(PurpleBowGroup, function(collector, collected) {
      collectBowSound.play();
      score += 1;
       collected.remove();
     })
  
     minnie.overlap(RedBowGroup, function(collector, collected) {
      collectBowSound.play();
      score += 2;
       collected.remove();
     })
  
  
  
    minnie.overlap(AliensGroup, function(collector, collected) {
      life -= 1;
       score -= 1;
       collected.remove();
     })
  
     if (life<=0){
      gamestate = 2;
     }
  
     if (gamestate == 2){
      gameoverSound.play();
      gameOver();
     }
  
  
     if (minnie.x < width*3){
      spawnAliens();
      spawnrockets();
     }
  
     if (minnie.x > width*4-150){
      gameWonSound.play();
      gameWon();
     }
  
  
     minnie.overlap(rocketsGroup, function(collector, collected) {
      life -= 1;
       score -= 1;
       collected.remove();
     })
  
     if (life<=0){
      gamestate = 2;
     }
  
     if (gamestate == 2){
      gameOver();
     }
     
  
  
  drawSprites()
  
  }

  
}

function gameOver() {
  swal(
    {
      title: `Game Over!!!`,
      text: "Thanks for playing!!",
      imageUrl:
        "https://www.pngfind.com/pngs/m/122-1221536_sad-mickey-mouse-clip-art-submited-images-sad.png",
      imageSize: "150x150",
      confirmButtonText: "Play Again"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
}

function gameWon() {
  swal(
    {
      title: `YOU WON THE GAME!!!`,
      text: "CONGRATLATIONS!!!",
      imageUrl:
        "https://i.pinimg.com/originals/a1/e5/cf/a1e5cff7d202a264dfc0b52152755f2b.gif",
      imageSize: "155x155",
      confirmButtonText: "Play Again"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
}

function spawnAliens() {
  //write code here to spawn the clouds
  if (frameCount % 160 === 0) {
    var aliens1 = createSprite(minnie.x + width, height-200, 50, 50);
  aliens1.addImage(alien);
  aliens1.y = Math.round(random(80, height-100));
  aliens1.velocityX = -2;
  aliens1.scale = 0.2
  AliensGroup.add(aliens1);
    
     //assign lifetime to the variable
    aliens1.lifetime = 1000;
  }
}

function spawnrockets() {
  if (frameCount % 160 === 0) {
    var Rocket = createSprite(minnie.x + width, 800, 50, 50);
    Rocket.addImage(rocket);
    Rocket.velocityY = -6;
    Rocket.scale = 0.2;
    rocketsGroup.add(Rocket);

    rocket.lifetime = 1000; 
  }
}

function spawnasteriods() {
  if (frameCount % 160 === 0) {
    var Asteriods = createSprite(minnie.x + height, width-210, 50, 50);
    Asteriods.addImage(asteriods);
    Asteriods.velocityX = -7
    Asteriods.scale = 0.2
    asteriodsGroup.add(Asteriods)

    asteriods.lifetime = 1000;
  }
}
