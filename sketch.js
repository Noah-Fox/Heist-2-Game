//Public version -- DO NOT EDIT


//this data is used for pseudo-randomly creating the maze
var randomData = [[8,5,3,2,6,5],[1,7,3,0,7,7],[4,6,2,0,9,4],[6,8,4,1,1,0],[2,1,5,0,4,6],[7,6,7,7,5,1],[5,1,0,3,7,9],[3,7,7,4,4,4],[3,9,2,9,3,9],[7,1,2,7,7,2],[9,1,7,9,6,4],[6,8,6,0,3,2],[8,5,2,9,6,2],[4,5,2,9,8,5],[6,2,5,2,5,8],[1,6,0,9,6,6],[0,2,8,6,8,6],[1,5,4,5,7,9],[5,0,3,4,1,2],[4,1,9,6,0,5],[3,3,2,0,2,4],[7,3,0,1,7,2],[4,2,8,8,3,3],[2,6,7,6,2,8],[9,6,7,0,7,8],[7,9,0,2,1,8],[9,5,2,2,9,1],[0,7,4,2,1,7],[2,6,2,7,2,9],[4,2,4,5,4,6],[4,6,6,2,0,7],[8,7,6,9,6,1],[1,0,6,6,3,8],[5,7,1,2,0,7],[1,9,3,8,9,6],[8,3,5,4,9,9],[3,6,1,4,6,1],[5,7,4,2,3,2],[9,8,2,6,1,2],[5,6,1,5,0,1],[2,7,9,8,0,2],[2,0,8,9,3,0],[2,0,7,8,3,0],[1,0,7,8,6,6],[1,1,4,2,8,2],[4,1,7,1,8,6],[4,2,6,6,1,5],[3,7,3,7,1,4],[0,3,8,1,0,2],[9,4,0,7,6,0],[0,6,8,8,1,8],[6,0,3,4,9,6],[6,0,6,1,8,3],[0,8,5,5,7,1],[5,1,1,2,0,5],[8,5,9,8,8,2],[1,3,9,3,0,2],[4,0,0,0,8,8],[9,7,9,4,3,1],[3,8,2,6,4,0],[6,5,8,7,8,4],[0,8,6,9,0,5],[5,4,6,1,9,4],[7,7,2,9,6,4],[8,1,4,1,2,2],[9,5,8,2,5,6],[5,8,8,4,2,3],[1,0,2,3,6,6],[9,0,3,0,0,2],[8,8,1,3,0,5],[5,8,6,1,0,5],[6,5,1,0,6,3],[4,8,4,8,9,6],[9,2,5,1,9,7],[8,4,0,0,6,4],[3,4,5,7,0,4],[8,8,7,9,2,8],[8,7,1,4,3,2],[7,4,5,3,6,3],[8,9,7,0,7,7],[5,4,8,0,7,2],[6,3,1,6,0,0],[4,4,8,8,4,7],[9,3,7,0,4,7],[5,5,3,4,2,0],[5,2,6,3,2,5],[0,8,9,4,3,1],[7,8,2,6,9,3],[5,6,9,7,4,4],[2,3,8,5,0,4]];
var dataOn = -1;
var randomData2 = [[8,8,0,8,9,0],[6,8,6,1,0,1],[6,0,0,0,4,8],[4,0,6,9,1,5],[8,9,1,4,2,7],[8,3,5,2,6,5],[2,4,3,7,1,9],[0,3,7,2,0,2],[1,7,5,4,0,6],[7,5,0,6,6,5],[9,6,5,9,8,3],[9,1,3,1,1,5],[9,0,7,7,5,0],[0,8,8,1,1,6],[7,7,9,6,0,2],[4,7,9,4,2,3],[3,4,2,7,1,1],[4,4,2,8,0,6],[0,8,9,1,6,1],[7,9,6,1,3,4],[7,7,6,7,2,8],[0,7,1,9,0,6],[3,5,5,1,0,6],[1,7,1,4,6,7],[6,1,1,0,6,8],[1,6,6,4,9,7],[3,0,2,3,5,8],[0,9,7,0,9,4],[1,4,2,6,6,3],[3,5,7,8,9,4],[6,5,7,5,5,0],[1,7,4,6,5,2],[1,6,7,8,6,7],[6,5,6,8,8,9],[5,8,4,8,7,0],[2,0,6,1,9,2],[9,8,4,9,7,2],[2,6,2,5,4,9],[4,9,3,9,0,7],[2,1,8,5,8,6],[1,4,4,6,8,3],[1,3,6,2,8,5],[5,6,0,4,7,1],[9,6,8,3,3,3],[8,1,8,4,0,5],[4,6,2,8,6,8],[7,2,9,4,6,3],[8,8,8,2,6,7],[4,8,1,3,4,3],[4,6,8,2,2,5],[3,3,2,8,7,0],[5,5,4,4,3,4],[9,3,3,0,6,8],[0,3,9,0,6,3],[2,2,1,6,9,1],[3,1,2,3,5,0],[2,8,3,8,3,5],[1,4,1,2,5,6],[3,2,1,2,3,7]];
var dataOn2 = -1;
var randomFloorData = [3,3,2,3,2,0,0,3,3,0,2,3,0,3,0,1,3,1,1,0];
var floorDataOn = -1;
var playerData = [];//6-digit code used to create every object's location
var playerFloorData;//1 digit used to create every object's floor number
var playerInputLength = 7;
var playerInput = [];//7 digits input by the player, or randomly assigned if not in multiplayer mode
var pressingInput = false;//used for typing in code


var lineAmount = 1100;//number of lines on each floor
var lineSize = 40;//length of each line
var screenLinesWidth = 30;//amount of lines across the maze
var screenSize = lineSize*screenLinesWidth;//size of the maze
var spacing = 40;
var lineAngles = 4;//everything is square. DO NOT CHANGE THIS
var lines = [];//2D array, containing arrays for lines on each floor, containing information for each line. 
var outerWalls = [[240-(screenSize/2),240-(screenSize/2),240+(screenSize/2),240-(screenSize/2)],
            [240-screenSize/2,240-screenSize/2,240-screenSize/2,240+screenSize/2],
            [240-(screenSize/2),240+(screenSize/2),240+(screenSize/2),240+(screenSize/2)],
            [240+screenSize/2,240-screenSize/2,240+screenSize/2,240+screenSize/2]];//line info for borders of the maze


var floors = 4;//number of floors
var floorOn = 0;//floor the player is currently on
var switchingFloors = false;//used when fading out to switch floors

var playerX = lineSize/2;
var playerY = lineSize/2;
var playerSpeed = 3;
var playerSize = 10;


//all object arrays contain arrays for each individual object, with [x position, y position, floor number]

var coinAmount = 25;
var coins = [];
var coinSize = 10;
var coinsGot = 0;//how many coins the player has collected
var coinViewRadius = 100;//radius of circle of coins when viewing in inventory
var coinViewSize = 20;//size of coins when viewing in inventory

//var lightBubble;
var lightBubbles = [];//array of images with clear centers, creating illusion of a dim light
var lightRadii = [50,75,100,125,150,175,200];//radii of clear center of each image
var lightOn = 0;//which image is currently being shown

var flashlights = [];
var flashlightSize = 10;



var maps = [];//array of maze objects
var mapSymbolSize = 20;//size of map symbol in maze
var mapSize = 350;//size of map when viewing it
var mapsOwned = [];//array of booleans, for which map of each floor you own

var inventoryUp = false;//if inventory bar is up
var inventory = [true,false,false,false,false];//boolean for each item that is visible in inventory:
/*
coins - 0
maps - 1
roof panel scraps - 2
keys - 3
code scrap - 4
*/
var inventoryOpen = -1;//int value for which inventory item is open, -1 if none
var pressingSpace = false;
var inventorySymbolSize = 50;
var inventorySymbolSpacing = 20;

var roofPanel = [];
var scraps = [];
var scrapSymbolSize = 20;
var scrapAmount = 4;
var scrapsOwned = 0;
var panelNumOn = 0;
var scrapSize = 350;

var panelCode = [];//code used to escape at the end of the game
var panelCodeLength = 6;
var escaped = false;

var keys = [];
var keyAmount = 4;//if you want to change this, you have to change keyAt array in key viewing section
var keySymbolSize = 20;
var keysOwned = 0;

var office = [];
var officeDecimal = [];

//message is displayed when an object is collected
var message = "";//each object sets this to the object's name when picked up
var messageStart = 60;//what the messageOn number counts up to - increase to make message last on the screen longer
var messageOn = messageStart;//keeps track of how long message has been up
var mainMessage = "You found a ";
var messageHeight = 50;
var messageWidth = 80;
var messageRadius = 10;//roundness of corners
var messageTextSize = 12;
var messageX = 240;
var messageY = 240 - (20+messageHeight/2);
var messageMove = 0.5;//how much the message moves

var objectsCreated = [];//used by createObject() function to make sure no objects overlap

var switchFloorLength = 40;//(half of) how long it takes to switch floors
var switchFloorOn = switchFloorLength;//counts up when switching floors, affecting how dark the screen is
var switchFloorTo = 0;




//determine which screen is currently being viewed
var menuScreenOn = true;
var gameScreenOn = false;
var directionScreenOn = false;
var switchingScreens = false;
var winScreenOn = false;
var multiplayerScreenOn = false;

var switchScreenLength = 40;//(half of) how long it takes to fade in and out when changing screens
var switchScreenOn = switchScreenLength;
var switchScreenTo;

var directions = ["You have a mission that you have been planning for twelve years: break into the famous Museum of Priceless Artifacts and rob everything in it. This is an incredibly lucrative job, but very dangerous. It will take intuition, strategy, and patience.\n[Press space to continue]",
                 "Your team is able to shut down the fans in the duct system for ten seconds: just enough time for you to get inside. This is a one-way ticket, though. Once inside, you will have to navigate through the labrynthine museum, finding artifacts and any discarded possessions that could help you find a way to escape without detection",
                 "Your mission is to find all " + coinAmount + " gold coins on exhibit throughout the " + floors + " floors of the museum. Each coin is worth a quarter of a million dollars. Escaping the museum with all of them would make this one of the most profitable heists ever completed.",
                 "You can navigate through the museum using the arrow keys, and go up and down floors using the W and S keys. You will encounter many objects throughout the heist. If not immediately used, these objects will be stored in your inventory. To view your inventory, press Space, and select an item or press its corresponding number key to view it.",
                  "When using multiplayer mode, multiple accomplices can use the same 7-digit code to enter identical museums. While you cannot interact with each other within your heists, you can work together to search the museum. You can also use a code to retry a heist, and get a better time.",
                  "During your heist, you may need to enter a code to unlock a passage way. To do so, simply locate the passage way using your location displayed at the top left corner of the screen, and type out the code when you are relatively close to it.",
                 "You are now ready to begin your heist.\nGood luck."];
var directionSpacing = false;
var directionsUp = 0;

var timeStarted;
var timeTaken;

function setup() {
  createCanvas(480, 480);
  angleMode(DEGREES);
  rectMode(CENTER);
  
  makeAllLightBubbles();
}




function draw() {
  background(220);
  
  
  //opening screen. You can begin the game, view directions, or begin the game using multiplayer mode
  if (menuScreenOn){
    textSize(20);
    textAlign(CENTER,CENTER);
    fill(0);
    text("Heist 2",240,130);
    
    textSize(16);
    
    //shows buttons. If clicked, it begins the fade effect
    if (makeButton(["BEGIN",240,240,130,40]) && switchScreenOn == switchScreenLength){
      switchScreenOn = -1*switchScreenLength;
      switchScreenTo = "game";
    }
    if (makeButton(["DIRECTIONS",240,300,130,40]) && switchScreenOn == switchScreenLength){
      switchScreenOn = -1*switchScreenLength;
      switchScreenTo = "directions";
    }
    if (makeButton(["MULTIPLAYER",240,360,130,40]) && switchScreenOn == switchScreenLength){
      switchScreenOn = -1*switchScreenLength;
      switchScreenTo = "multiplayer";
    }
    
    //when a button is clicked and fade effect is fully black, it switches screens
    if (switchScreenOn == 0){
      menuScreenOn = false;
      switchScreenOn ++;
      if (switchScreenTo == "game"){
        playerFloorData = floor(random(floors-1));
        for (var i = 0; i < playerInputLength-1; i ++){
          append(playerData,floor(random(0,10)));
        }
        
        createMaze();
        gameScreenOn = true;
      }else if (switchScreenTo == "directions"){
        directionScreenOn = true;
        directionsUp = 0;
      }else if (switchScreenTo == "multiplayer"){
        multiplayerScreenOn = true;
      }
    }
    
    image(lightBubbles[6],0,0);
    
    textSize(12);
    textAlign(LEFT,BASELINE);
  }
  
  //screen showing the directions. Space bar is used to move through each page of directions
  if (directionScreenOn){
    textAlign(CENTER,CENTER);
    textSize(14);
    fill(0);
    
    text(directions[directionsUp],240,240,300,300);
    
    if (keyIsDown(32) && !directionSpacing){
      directionSpacing = true;
      switchScreenOn = -1*switchScreenLength;
    }
    if (directionSpacing && !keyIsDown(32)){
      directionSpacing = false;
    }
    
    if (switchScreenOn == 0){
      directionsUp ++;
      switchScreenOn ++;
      if (directionsUp >= directions.length){
        directionScreenOn = false;
        menuScreenOn = true;
      }
    }
    
    image(lightBubbles[6],0,0);
    textAlign(LEFT,BASELINE);
    textSize(12);
  }
  
  //screen viewed after finishing game. Cannot leave from it
  if (winScreenOn){
    textAlign(CENTER,CENTER);
    textSize(14);
    text("You escaped, with " + coinsGot + " gold coins.\nYour heist was a success, and you can now live a calm, quiet life of wealth and luxury.\n\nThat is, until you plan your next heist.\n\nYour time: " + timeTaken + "\nGame code: " + playerData + "," + playerFloorData,240,240,300,300);
    
    image(lightBubbles[6],0,0);
  }
  
  //screen viewed when using multiplayer mode. Shows a box for 7-digit code, which fill with numbers when typed out. Space bar is used to exit screen and begin game
  if (multiplayerScreenOn){
    textAlign(CENTER,CENTER);
    textSize(30);
    
    for (var i = 0; i < playerInputLength; i ++){
      fill(160);
      strokeWeight(2);
      rect(240-(playerInputLength-1)*(45)/2+i*(45),240,40,80);
      fill(0);
      strokeWeight(1);
      if (playerInput.length > i){
        text(playerInput[i],240-(playerInputLength-1)*(45)/2+i*(45),240);
      }
    }
    
    textSize(14);
    text("Enter your 7-digit code.\nPress Space to begin.",240,330);
    
    if (playerInput.length < playerInputLength){
      if (keyIsDown(keyCode) && keyCode > 47 && keyCode < 58){
        if (!pressingInput){
          pressingInput = true;
          append(playerInput,keyCode-48);
        }
      }else if (pressingInput){
        pressingInput = false;
      }
    }
    
    if (keyIsDown(32) && playerInput.length >= playerInputLength && switchScreenOn == switchScreenLength){
      switchScreenOn = -1*switchScreenLength;
    }
    if (switchScreenOn == 0){
      multiplayerScreenOn = false;
      switchScreenOn ++;
      
      playerFloorData = playerInput[playerInputLength-1];
      for (var i = 0; i < playerInputLength-1; i ++){
        append(playerData,playerInput[i]);
      }
      
      createMaze();
      gameScreenOn = true;
    }
    
    image(lightBubbles[6],0,0);
    textAlign(LEFT,BASELINE);
    textSize(12);
  }
  
  //screen for main game
  if (gameScreenOn){
    
    if (escaped && switchScreenOn == 0){
      switchScreenOn ++;
      gameScreenOn = false;
      winScreenOn = true;
      timeTaken = millisToMinutes(millis()-timeStarted);
    }
    
    // ************* operating player controls
    var move = keyControls(playerSpeed);
    
    if (keyIsDown(87)){
      if (!switchingFloors && floorOn < floors-1){
        switchingFloors = true;
        switchFloorOn = -1*switchFloorLength;
        switchFloorTo = 1;
      }
    }else if (keyIsDown(83)){
      if (!switchingFloors && floorOn > 0){
        switchingFloors = true;
        switchFloorOn = -1*switchFloorLength;
        switchFloorTo = -1;
      }
    }else if (switchFloorOn < switchFloorLength){
      switchFloorOn ++;
      if (switchFloorOn == 0){
        floorOn += switchFloorTo;
      }
    }else if (switchingFloors){
      switchingFloors = false;
    }
    
    var canMoveVertical = true;
    var canMoveHorizontal = true;
    
    
    
    // ************* printing lines, testing if player can move
    strokeWeight(2);
    for (var i = 0; i < lines[floorOn].length; i ++){
      var lx1 = lines[floorOn][i][0];
      var ly1 = lines[floorOn][i][1];
      var lx2 = lines[floorOn][i][2];
      var ly2 = lines[floorOn][i][3];
      
      var openedUp = false;
      stroke(0);
      if (keysOwned == keyAmount && scrapsOwned == scrapAmount && floorOn == office[2] && i == 4){
        openedUp = true;
        stroke(0,100);
      }
      if (abs(lx1-playerX-240) < 240+lineSize && abs(ly1-playerY-240) < 240+lineSize || i < 4){
        line(lx1-playerX,ly1-playerY,lx2-playerX,ly2-playerY);
      }
      
      if (!openedUp && circleTouching(lx1-playerX,ly1-playerY,lx2-playerX,ly2-playerY,240+move[0],240,playerSize)){
        canMoveHorizontal = false;
      }
      if (!openedUp && circleTouching(lx1-playerX,ly1-playerY,lx2-playerX,ly2-playerY,240,240+move[1],playerSize)){
        canMoveVertical = false;
      }
    }
    
    
    
    // ************* printing objects
    strokeWeight(1);
    
    // printing coins - 25 for loop
    fill(255,249,31);
    for (var i = coins.length-1; i >= 0; i --){
      if (coins[i][2] == floorOn){
        circle(coins[i][0]-playerX,coins[i][1]-playerY,coinSize);
        if (getDistance(coins[i][0]-playerX,coins[i][1]-playerY,240,240) < coinSize/2 + playerSize/2){
          coinsGot ++;
          coins.splice(i,1);
          message = mainMessage + "gold coin";
          messageOn = 0;
        }
      }
    }
    
    // printing flashlights
    fill(255,0,0);
    for (var i = flashlights.length-1; i >= 0; i --){
      if (flashlights[i][2] == floorOn){
        drawFlashlight(flashlights[i][0]-playerX,flashlights[i][1]-playerY,flashlightSize);
        if (getDistance(flashlights[i][0]-playerX,flashlights[i][1]-playerY,240,240) < flashlightSize/2 + playerSize/2){
          flashlights.splice(i,1);
          lightOn ++;
          message = mainMessage + "flashlight";
          messageOn = 0;
        }
      }
    }
    
    // printing maps
    for (var i = maps.length-1; i >= 0; i --){
      if (maps[i][2] == floorOn){
        drawMap(maps[i][0]-playerX,maps[i][1]-playerY,mapSymbolSize);
        if (getDistance(maps[i][0]-playerX,maps[i][1]-playerY,240,240) < mapSymbolSize/2 + playerSize/2){
          mapsOwned[floorOn] = true;
          maps.splice(i,1);
          inventory[1] = true;
          message = mainMessage + "map";
          messageOn = 0;
        }
      }
    }
    
    
    // printing scraps
    for (var i = scraps.length-1; i >= 0; i --){
      if (scraps[i][2] == floorOn){
        drawScrap(scraps[i][0]-playerX,scraps[i][1]-playerY,scrapSymbolSize);
        if (getDistance(scraps[i][0]-playerX,scraps[i][1]-playerY,240,240) < scrapSymbolSize/2 + playerSize/2){
          scraps.splice(i,1);
          inventory[2] = true;
          scrapsOwned ++;
          message = mainMessage + "scrap of paper";
          messageOn = 0;
        }
      }
    }
    
    
    //printing code scrap
    if (keysOwned == keyAmount && scrapsOwned == scrapAmount && floorOn == office[2] && !inventory[4]){
      drawScrap(office[0]-playerX,office[1]-playerY,scrapSymbolSize);
      if (getDistance(office[0]-playerX,office[1]-playerY,240,240) < scrapSymbolSize/2 + playerSize/2){
        inventory[4] = true;
        message = mainMessage + "scrap of paper";
        messageOn = 0;
      }
    }
    
    
    // printing keys
    fill(255,0,255);
    for (var i = keys.length-1; i >= 0; i --){
      if (keys[i][2] == floorOn){
        drawKey(keys[i][0]-playerX,keys[i][1]-playerY,keySymbolSize);
        if (getDistance(keys[i][0]-playerX,keys[i][1]-playerY,240,240) < keySymbolSize/2 + playerSize/2){
          keys.splice(i,1);
          keysOwned ++;
          inventory[3] = true;
          message = mainMessage + "key";
          messageOn = 0;
        }
      }
    }
    
    
    // print player
    fill(255);
    circle(240,240,playerSize);
    
    
    fill(0);
    
    
    // adding shadow effect
    image(lightBubbles[lightOn],0,0);
    
    
    
    
    // moving player
    if (canMoveHorizontal){
      playerX += move[0];
    }
    if (canMoveVertical){
      playerY += move[1];
    }
    
    
    
    
    // ************* running inventory
    if (keyIsDown(32) && !pressingSpace){
      pressingSpace = true;
      if (inventoryUp || inventoryOpen >= 0){
        inventoryUp = false;
        inventoryOpen = -1;
      }else{
        inventoryUp = true;
      }
    }else if (!keyIsDown(32) && pressingSpace){
      pressingSpace = false;
    }
    
    // showing inventory pop up
    fill(130);
    if (inventoryUp && inventoryOpen == -1){
      for (var i = 0; i < inventory.length; i ++){
        //inventorySymbolSize,inventorySymbolSpacing
        
        if (inventory[i]){
          var symX = inventorySymbolSpacing+inventorySymbolSize/2+i*(inventorySymbolSize+inventorySymbolSpacing);
          var symY = 480-inventorySymbolSpacing-inventorySymbolSize/2;
          
          fill(130);
          if (abs(mouseX-symX) < inventorySymbolSize/2 && abs(mouseY-symY) < inventorySymbolSize/2){
            fill(90);
            if (mouseIsPressed){
              inventoryOpen = i;
            }
          }if (keyIsDown(i+49)){
            inventoryOpen = i;
          }
          
          square(symX,symY,inventorySymbolSize);
          if (i == 0){
            fill(255,249,31);
            circle(symX,symY,inventorySymbolSize*0.3);
          }
          if (i == 1){
            drawMap(symX,symY,inventorySymbolSize*0.4);
          }
          if (i == 2 || i == 4){
            drawScrap(symX,symY,inventorySymbolSize*0.4);
          }
          if (i == 3){
            drawKey(symX,symY,inventorySymbolSize*0.6);
          }
        }
      }
    }
    
    
    //viewing coins
    if (inventoryOpen == 0){
      fill(150);
      square(240,240,scrapSize);
      for (var i = 0; i < coinAmount; i ++){
        if (i < coinsGot){
          fill(255,249,31);
        }else{
          fill(150);
        }
        circle(240+coinViewRadius*cos(i*360/coinAmount-90), 240+coinViewRadius*sin(i*360/coinAmount-90),coinViewSize);
      }
    }
    
    //viewing map
    fill(150);
    if (inventoryOpen == 1){
      square(240,240,mapSize);
      
      if (mapsOwned[floorOn]){
        var mapLineSize = mapSize/screenLinesWidth;
        
        var centerAmount = 240+(mapSize*(-0.2));
        
        for (var i = 0; i < lines[floorOn].length; i ++){
          var mx1 = lines[floorOn][i][0];
          var my1 = lines[floorOn][i][1];
          var mx2 = lines[floorOn][i][2];
          var my2 = lines[floorOn][i][3];
          
          line((centerAmount)+mapSize*mx1/screenSize,(centerAmount)+mapSize*my1/screenSize,(centerAmount)+mapSize*mx2/screenSize,(centerAmount)+mapSize*my2/screenSize);
        }
        fill(255,249,31);
        for (var i = 0; i < coins.length; i ++){
          if (coins[i][2] == floorOn){
            circle(centerAmount+mapSize*coins[i][0]/screenSize,centerAmount+mapSize*coins[i][1]/screenSize,coinSize*2*mapSize/screenSize);
          }
        }
        
        fill(255);
      }
      
      
    }
    
    
    //viewing scraps
    if (inventoryOpen == 2){
      textAlign(CENTER,CENTER);
      var blockAt = [[240-scrapSize/4,240-scrapSize/4],[240+scrapSize/4,240-scrapSize/4],[240-scrapSize/4,240+scrapSize/4],[240+scrapSize/4,240+scrapSize/4]];
      fill(80);
      square(240,240,scrapSize+10);
      fill(150);
      square(240,240,scrapSize);
      noFill();
      for (var i = 0; i < blockAt.length; i ++){
        viewScrap(240,240,scrapSize,i);
      }
      fill(0);
      textSize(30);
      var plusSigns = ["","","",""];
      if (viewCoordinates(roofPanel[0]) > 0){
        plusSigns[0] = "+";
      }
      if (viewCoordinates(roofPanel[1]) > 0){
        plusSigns[1] = "+";
      }
      if (viewCoordinates(office[0]) > 0){
        plusSigns[2] = "+";
      }
      if (viewCoordinates(office[1]) > 0){
        plusSigns[3] = "+";
      }
      text("Roof Escape Panel\nFloor: " + floors + "\n" + plusSigns[0] + round(viewCoordinates(roofPanel[0]),8) + "\n" + plusSigns[1] + round(viewCoordinates(roofPanel[1]),8) + "\nAccess Code Locked in Head Supervisor's Office:\nFloor: " + (office[2]+1) + "\n" + plusSigns[2] + round(viewCoordinates(officeDecimal[0]),8) + "\n" + plusSigns[3] + round(viewCoordinates(officeDecimal[1]),8),240,240,scrapSize,scrapSize);
      textSize(12);
      
      
      fill(0);
      for (var i = scrapsOwned; i < scrapAmount; i ++){
        viewScrap(240,240,scrapSize,i);
      }
      
      
      
      textAlign(LEFT,BASELINE);
    }
    
    //viewing keys
    if (inventoryOpen == 3){
      fill(150);
      square(240,240,mapSize);
      var keyAt = [[240-mapSize/4,240-mapSize/4],[240-mapSize/4,240+mapSize/4],[240+mapSize/4,240-mapSize/4],[240+mapSize/4,240+mapSize/4]];
      for (var i = 0; i < keysOwned; i ++){
        drawKey(keyAt[i][0],keyAt[i][1],100);
      }
    }
    
    
    //viewing code scrap
    if (inventoryOpen == 4){
      fill(150);
      square(240,240,scrapSize);
      textAlign(CENTER,CENTER);
      
      var accessCode = "";
      for (var i = 0; i < panelCode.length; i ++){
        accessCode += panelCode[i];
      }
      
      fill(0);
      textSize(30);
      if (inventory[4]){
        text("Roof Panel Acess Code:\n" + accessCode,240,240);
      }
      textSize(12);
      
      textAlign(LEFT,BASELINE);
    }
    
    
    
    
    // testing for escape through roof panel
    if (getDistance(240+playerX,240+playerY,roofPanel[0],roofPanel[1]) < lineSize/2){
      fill(0,255,0);
      if (keyCode-48 == panelCode[panelNumOn]){
        panelNumOn ++;
        if (panelNumOn == panelCodeLength){
          switchScreenOn = -1*switchScreenLength;
          escaped = true;
        }
      }
    }else{
      panelNumOn = 0;
    }
    
    //showing message when an object is found
    if (messageOn < messageStart){
      messageOn ++;
      fill(100,255-150*messageOn/messageStart);
      rect(messageX,messageY-messageOn*messageMove,messageWidth,messageHeight,messageRadius);
      textAlign(CENTER,CENTER);
      fill(0,255-150*messageOn/messageStart);
      noStroke();
      text(message,messageX,messageY-messageOn*messageMove,messageWidth,messageHeight);
      stroke(0);
      textAlign(LEFT,BASELINE);
    }
    
    //blacking out when switching floors
    if (switchFloorOn < switchFloorLength){
      fill(0,255-255*abs(switchFloorOn)/switchFloorLength);
      square(240,240,480);
    }
    
    // printing player information (coordinates, floor number)
    fill(255);
    text(round(viewCoordinates(240+playerX),8) + "\n" + round(viewCoordinates(240+playerY),8) + "\nFloor: " + (floorOn+1),10,10);
  }
  
  
  if (switchScreenOn < switchScreenLength){
    fill(0,255-255*abs(switchScreenOn)/switchScreenLength);
    square(240,240,480);
    switchScreenOn ++;
  }
  
}


function createMaze(){
  objectsCreated = [];
  
  
  //creating office - can't be on the far left side, exists on every floor, adjacent lines get added to lines array
  office = [round(pseudoRandom(getRandomData(),1,screenSize/spacing-2))*spacing + (240-screenSize/2) + lineSize/2,round(pseudoRandom(getRandomData(),1,screenSize/spacing-2))*spacing + (240-screenSize/2) + lineSize/2,getRandomFloorData()];
  for (var i = 0; i < floors; i ++){
    append(objectsCreated,[office[0],office[1],i]);
  }
  append(officeDecimal,office[0]+round(random(-1,1)*lineSize/8,8));
  append(officeDecimal,office[1]+round(random(-1,1)*lineSize/8,8));
  append(officeDecimal,office[2]);
  
  //creating roof panel, scraps, and roof panel code
  roofPanel = createObject(floors-1);
  roofPanel[0] += round(random(-1,1)*lineSize/8,8);
  roofPanel[1] += round(random(-1,1)*lineSize/8,8);
  for (var i = 0; i < scrapAmount; i ++){
    append(scraps,createObject(getRandomFloorData()));
  }
  for (var i = 0; i < panelCodeLength; i ++){
    append(panelCode,floor(random(0,10)));
  }
  if (panelCode[panelCode.length-1] == panelCode[panelCode.length-2]){
    panelCode[panelCode.length-1] = (panelCode[panelCode.length-1]+1)%10;
  }
  
  //creating keys
  for (var i = 0; i < keyAmount; i ++){
    append(keys,createObject(getRandomFloorData()));
  }
  
  //creating coins
  for (var i = 0; i < coinAmount; i ++){
    append(coins,createObject(getRandomFloorData()));
  }
  
  //creating flashlights
  for (var i = 0; i < lightRadii.length-1; i ++){
    append(flashlights,createObject(getRandomFloorData()));
  }
  
  //creating maps - one on each floor
  for (var i = 0; i < floors; i ++){
    append(maps,createObject(i));
    append(mapsOwned,false);
  }
  
  //creating lines
  for (var x = 0; x < floors; x ++){
    append(lines,[]);
    
    //adding borders
    for (var b = 0; b < outerWalls.length; b ++){
      append(lines[x],outerWalls[b]);
    }
    //adding lines adjacent to office
    append(lines[x],[office[0]-lineSize/2,office[1]-lineSize/2,office[0]-lineSize/2,office[1]+lineSize/2]);
    append(lines[x],[office[0]-lineSize/2,office[1]+lineSize/2,office[0]+lineSize/2,office[1]+lineSize/2]);
    append(lines[x],[office[0]+lineSize/2,office[1]+lineSize/2,office[0]+lineSize/2,office[1]-lineSize/2]);
    append(lines[x],[office[0]+lineSize/2,office[1]-lineSize/2,office[0]-lineSize/2,office[1]-lineSize/2]);
    
    var overlapAmount = 0;
    for (var i = 0; i < lineAmount; i ++){
      
      var testX = round(pseudoRandom(getRandomData(),0,screenSize/spacing))*spacing + (240-screenSize/2);
      var testY = round(pseudoRandom(getRandomData(),0,screenSize/spacing))*spacing + (240-screenSize/2);
      
      var testAngle = getRandomFloorData()*90;
      
      //if it goes over the edge, it gets flipped around
      if (abs((testX + lineSize*cos(testAngle)) - 240) > screenSize/2 || abs((testY + lineSize*sin(testAngle)) - 240) > screenSize/2){
        testAngle += 180;
      }
      
      //no two lines are in the same space
      var overlapping = false;
      for (var b = 0; b < lines[x].length; b ++){
        var lXAvg = (lines[x][b][0] + lines[x][b][2])/2;
        var lYAvg = (lines[x][b][1] + lines[x][b][3])/2;
        var tXAvg = testX+(lineSize/2)*cos(testAngle);
        var tYAvg = testY+(lineSize/2)*sin(testAngle);
        if (lXAvg == tXAvg && lYAvg == tYAvg){
          overlapping = true;
        }
      }
      if (overlapping)
        overlapAmount ++;
      
      if (!overlapping){
        append(lines[x],[testX,testY,testX+lineSize*cos(testAngle),testY+lineSize*sin(testAngle)]);
      }
    }
  }
  
  
  timeStarted = millis();
}

//inputs floor value, outputs pseudo-random location for an object that no other object exists in
function createObject(onFloor){
  var testing = true;
  var testX;
  var testY;
  while(testing){
    testing = false;
    testX = round(pseudoRandom(getRandomData(),0,screenSize/spacing-1))*spacing + (240-screenSize/2) + lineSize/2;
    testY = round(pseudoRandom(getRandomData(),0,screenSize/spacing-1))*spacing + (240-screenSize/2) + lineSize/2;
    for (var i = 0; i < objectsCreated.length; i ++){
      if (testX == objectsCreated[i][0] && testY == objectsCreated[i][1] && onFloor == objectsCreated[i][2]){
        testing = true;
        console.log("redo");
      }
    }
  }
  append(objectsCreated,[testX,testY,onFloor]);
  return [testX,testY,onFloor];
}

//gives a combination of two random data arrays and the player data array. Used for pseudo-random
function getRandomData(){
  dataOn ++;
  if (dataOn >= randomData.length){
    dataOn = 0;
  }
  dataOn2 ++;
  if (dataOn2 >= randomData2.length){
    dataOn2 = 0;
  }
  return mergeLists([randomData[dataOn],randomData2[dataOn2],playerData],10);
}

//outputs combination of random floor data and player floor data - used for pseudo random
function getRandomFloorData(){
  floorDataOn ++;
  if (floorDataOn >= randomFloorData.length){
    floorDataOn = 0;
  }
  return (randomFloorData[floorDataOn]+playerFloorData)%floors;
}

//inputs a list of numbers, and a max and min range for the random output
//output a seemingly random number, that is always recreated using that same list of numbers
function pseudoRandom(numList,min,max){
  var shuffledNums = [[4, 6, 9, 5, 3, 0, 1, 7, 8, 2],
                      [3, 6, 9, 5, 4, 7, 2, 8, 0, 1],
                      [5, 2, 9, 4, 8, 1, 7, 6, 3, 0],
                      [0, 2, 3, 4, 6, 1, 9, 8, 5, 7],
                      [0, 4, 6, 7, 3, 5, 9, 2, 8, 1],
                      [7, 6, 2, 0, 5, 4, 8, 1, 3, 9],
                      [7, 0, 3, 8, 9, 5, 6, 4, 2, 1],
                      [6, 0, 1, 5, 8, 4, 9, 2, 3, 7],
                      [1, 5, 8, 3, 0, 4, 7, 2, 6, 9],
                      [9, 8, 6, 5, 0, 1, 2, 3, 7, 4]];
  var rand = 0;
  for (var i = 0; i < numList.length; i ++){
    rand += shuffledNums[numList[i]][numList[(i+1)%numList.length]] * pow(10,-1*(i+1));
  }
  rand *= max-min;
  rand += min;
  
  rand = round(rand,10);
  return rand;
}

//inputs a radius value, outputs a black image with a clear center, which fades in from that radius
function createLightBubble(lightRadius){
  var newLight = createImage(480,480);
  newLight.loadPixels();
  for (var i = 0; i < newLight.width; i ++){
    for (var x = 0; x < newLight.height; x ++){
      var lightAlpha = round(255*getDistance(i,x,240,240)/lightRadius);
      if (lightAlpha > 255){
        lightAlpha = 255;
      }
      newLight.set(i,x,color(0,0,0,lightAlpha));
    }
  }
  newLight.updatePixels();
  return newLight;
}

//makes a light bubble image for every radius value in lightRadii array
function makeAllLightBubbles(){
  for (var i = 0; i < lightRadii.length; i ++){
    append(lightBubbles,createLightBubble(lightRadii[i]));
  }
}

//inputs a value of milliseconds
//outputs a string value with format MINUTES:SECONDS
function millisToMinutes(milVal){
  milVal /= 1000;
  var minutes = floor(milVal/60);
  var seconds = round(milVal-(minutes*60));
  if (seconds < 10){
    return "" + minutes + ":0" + seconds;
  }
  return "" + minutes + ":" + seconds;
}


//inputs button array, containing [text,x position, y position, width, height, (font size)]
//displays the button, slightly darker if mouse is hovering over it
//outputs boolean for if the button is being clicked
function makeButton(button){
  textAlign(CENTER,CENTER);
  if (button.length == 6){
    textSize(button[5]);
  }
  
  var touching = false;
  fill(255);
  if (abs(mouseX-button[1]) < button[3]/2 && abs(mouseY-button[2]) < button[4]/2){
    fill(150);
    touching = true;
  }
  
  rect(button[1],button[2],button[3],button[4]);
  fill(0);
  text(button[0],button[1],button[2],button[3],button[4]);
  
  textAlign(LEFT,BASELINE);
  
  if (touching && mouseIsPressed){
    return true;
  }
  return false;
}

//used throughout code to make player coordinates more user friendly
function viewCoordinates(pos){
  return pos-260;
}

//draws symbol of map in maze
function drawMap(xPos,yPos,size){
  
  fill(255);
  
  var mapPic = [[[31,33],[54,211],[32,411],[221,440],[406,419],[427,215],[393,25],[234,46],[30,30]],[[84,57],[103,183],[223,179],[347,154],[361,217],[344,361],[238,378],[100,354],[108,277],[244,295],[296,281]],[[138,105],[233,103],[332,76],[336,108]],[[136,222],[239,227],[310,216]]];
  
  for (var x = 0; x < mapPic.length; x ++){
    if (x > 0){
      noFill();
      stroke(255,0,0);
    }
    beginShape();
    for (var i = 0; i < mapPic[x].length; i ++){
      vertex(xPos+size*(240-mapPic[x][i][0])/480,yPos+(-1)*size*(240-mapPic[x][i][1])/480);
    }
    endShape();
  }
  fill(0);
  stroke(0);
}

//draws symbol of key in maze
function drawKey(xPos,yPos,size){
  fill(70,70,90);
  var shaftAmount = 0.7;
  strokeWeight(2);
  rect(xPos+0.5*size*(1-shaftAmount),yPos,size*shaftAmount,size*0.1);
  circle(xPos-size*0.3,yPos,size*0.4);
  
  
  rect(xPos+0.475*size,yPos-0.05*size,0.05*size,0.2*size);
  rect(xPos+0.35*size,yPos-0.05*size,0.05*size,0.2*size);
  
  noStroke();
  rect(xPos+0.5*size*(1-shaftAmount),yPos,size*shaftAmount*0.9,size*0.1*0.9);
  stroke(0);
  strokeWeight(1);
  
}

//draws symbol of flashlight in maze
function drawFlashlight(xPos,yPos,size){
  fill(80,100,155);
  var fHeight = 0.75*size;
  var fWidth = size;
  var fx = xPos + 0.25;
  var fy = yPos;
  var trapWidth = 0.35*fWidth;
  var trapHeight = 1.35*fHeight;
  rect(fx,fy,fWidth,fHeight);
  quad(fx-fWidth/2,fy+fHeight/2,fx-fWidth/2,fy-fHeight/2,fx-fWidth/2-trapWidth,fy-trapHeight/2,fx-fWidth/2-trapWidth,fy+trapHeight/2);
}

//draws symbol of scrap in maze
function drawScrap(xPos,yPos,size){
  fill(255);
  
  var scrapPic = [[55,45],[71,194],[61,246],[145,227],[168,196],[145,227],[75,242],[61,358],[64,435],[187,457],[199,427],[188,401],[213,426],[206,454],[362,438],[355,414],[368,396],[390,394],[390,254],[369,158],[324,131],[325,109],[325,131],[363,155],[361,66],[324,18],[222,31],[209,64],[163,68],[210,63],[214,53],[128,42],[126,54],[105,63],[92,51],[83,39],[55,44],[66,149],[121,157],[134,139],[148,149],[169,159],[197,134],[225,149],[260,137],[244,116],[235,138],[255,153],[297,138],[327,163],[307,188],[275,167],[263,190],[280,197],[295,180],[253,217],[209,202],[197,217],[173,216],[153,230],[127,248],[171,245],[163,256],[203,240],[212,269],[196,266],[234,241],[262,257],[299,250],[321,233],[293,238],[340,221]];
  
  beginShape();
  
  for (var i = 0; i < scrapPic.length; i ++){
    vertex(xPos+size*(240-scrapPic[i][0])/480,yPos+(-1)*size*(240-scrapPic[i][1])/480);
  }
  
  endShape();
  
}

//displays torn quarters of a square when viewing the scraps
function viewScrap(xPos,yPos,size,quadrant){
  var scrapPic = [[[0,0],[242,0],[250,36],[224,44],[247,89],[198,111],[210,112],[206,126],[267,126],[234,179],[215,188],[235,223],[221,253],[153,222],[144,239],[102,256],[98,239],[105,223],[87,231],[78,247],[39,270],[11,259],[0,259],[0,0]],
                  [[243,0],[480,0],[480,265],[438,253],[413,273],[411,290],[386,275],[376,279],[363,255],[386,241],[339,243],[326,263],[297,273],[268,246],[241,263],[227,243],[235,224],[216,189],[234,179],[267,126],[206,126],[210,112],[197,111],[247,88],[225,45],[251,36],[243,0]],
                  [[0,480],[0,260],[14,260],[40,271],[79,245],[87,231],[105,223],[97,240],[102,257],[144,238],[154,223],[220,253],[227,243],[242,263],[246,275],[246,297],[231,286],[200,300],[213,312],[224,307],[246,342],[205,374],[231,388],[246,425],[224,459],[240,480],[2,480]],
                 [[480,266],[480,480],[239,480],[224,458],[245,424],[232,389],[205,374],[245,341],[224,307],[212,311],[201,300],[230,286],[246,296],[246,274],[241,263],[268,247],[297,273],[326,262],[338,243],[385,241],[362,255],[377,280],[385,275],[411,290],[412,273],[439,253],[480,265]]];
  
  beginShape();
  for (var i = 0; i < scrapPic[quadrant].length; i ++){
    vertex(xPos+size*(240-scrapPic[quadrant][i][0])/480,yPos+(-1)*size*(240-scrapPic[quadrant][i][1])/480);
  }
  endShape();
}


//inputs speed of player
//outputs array of x and y directions that the player is moving in
function keyControls(speed){
  var answer = [0,0];
  if (keyIsDown(RIGHT_ARROW)){
    answer[0] = speed;
  }else if (keyIsDown(LEFT_ARROW)){
    answer[0] = -1*speed;
  }
  if (keyIsDown(UP_ARROW)){
    answer[1] = -1*speed;
  }else if (keyIsDown(DOWN_ARROW)){
    answer[1] = speed;
  }
  if (answer[0] != 0 && answer[1] != 0){
    answer[0] /= sqrt(2);
    answer[1] /= sqrt(2);
  }
  return answer;
}

//inputs coordinates for a line, coordinates for a circle, and diameter of the circle
//outputs boolean for if the circle is touching the line
function circleTouching(x1,y1,x2,y2,cx,cy,di){
  var side1 = sqrt(pow(x1-x2,2)+pow(y1-y2,2));
  var side2 = sqrt(pow(x1-cx,2)+pow(y1-cy,2));
  var side3 = sqrt(pow(cx-x2,2)+pow(cy-y2,2));
  var s = (side1+side2+side3)/2;
  var area = sqrt(s * (s-side1) * (s-side2) * (s-side3));
  var height = 2 * area / side1;
  if (height < di/2 && side2-side1 < di/2 && side3-side1 < di/2){
    return true;
  }else{
    return false;
  }
}

//inputs two coordinates, outputs distance between them
function getDistance(x1,y1,x2,y2){
  return sqrt(pow(x1-x2,2) + pow(y1-y2,2));
}



//inputs a 2D array of int values, and an int value
//outputs an array, made up of the corresponding values of each array added up, modulo modAmount
function mergeLists(listArray,modAmount){
  var merged = [];
  var length = 0;
  for (var i = 0; i < listArray.length; i ++){
    if (listArray[i].length > length){
      length = listArray[i].length;
    }
  }
  for (var i = 0; i < length; i ++){
    
    var addAmount = 0;
    for (var x = 0; x < listArray.length; x ++){
      if (i < listArray[x].length){
        addAmount += listArray[x][i];
      }
    }
    
    append(merged,(addAmount)%modAmount);
  }
  return merged;
}
