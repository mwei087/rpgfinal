enchant();
localStorage.clear();
alert("You are a person who is discovering just what it takes to make you current (worthless) life something beautiful. You must collect each item and make a friend. However, some things will try to kill you so avoid them. You only get 3 lives (be careful!)");
alert("For each level collect the two necessary items (press space bar). If you are lucky there may be an item in the starting place in the wall.")
var arr = ["", "", "", "", "", ""];
var replace = -1;
var enemyxval = 4;
var enemyyval  = 4;
var hp = 3;
var nottouched1 = false;
var nottouched2 = false;
var seeninventory1 = false;
var seeninventory2 = false;
var seeninventory3 =false;
var seeninventory4 = false;
var heartseen = false;
window.onload = function(){
  var game = new Game(300, 300);
  game.keybind(32, 'a');
  game.spriteSheetWidth = 256;
  game.spriteSheetHeight = 16;
  game.itemSpriteSheetWidth = 96;
  game.preload(['sprites2.png', 'items.png']);
  game.items = [{price: 1000, description: "Hurter", id: 0}, 
               {price: 5000, description: "Drg. Paw", id: 1},
               {price: 5000, description: "Ice Magic", id: 2},
               {price: 60, description: "Chess Set", id: 3},
               {price: 1, description: "Apple", id: 4},
               {price: 1, description: "Water Bottle", id: 5},

               ]
  game.fps = 15;
  game.spriteWidth = 16;
  game.spriteHeight = 16;
  var map = new Map(game.spriteWidth, game.spriteHeight);
  var foregroundMap = new Map(game.spriteWidth, game.spriteHeight);
  var setMaps = function(){
    map.image = game.assets['sprites2.png'];
    map.loadData(mapData);
    foregroundMap.image = game.assets['sprites2.png'];
    foregroundMap.loadData(foregroundData);
    var collisionData = [];
    for(var i = 0; i< foregroundData.length; i++){
      collisionData.push([]);
      for(var j = 0; j< foregroundData[0].length; j++){
        var collision = foregroundData[i][j] %24 %23 %18 %13 >= 1 ? 1 :0; //1 else 0
        collisionData[i][j] = collision;
      }
    }
    map.collisionData = collisionData;
  };
  var setStage = function(){
    var stage = new Group();
    stage.addChild(map);
    stage.addChild(player);
    stage.addChild(foregroundMap);
    stage.addChild(player.statusLabel);
    game.rootScene.addChild(stage);
  };
  var player = new Sprite(game.spriteWidth, game.spriteHeight);
  var setPlayer = function(){
    player.spriteOffset = 5;
    player.startingX = 1;
    player.startingY = 1;
    player.x = player.startingX * game.spriteWidth;
    player.y = player.startingY * game.spriteHeight;
    player.direction = 0;
    player.walk = 0;
    player.frame = player.spriteOffset + player.direction; 
    player.image = new Surface(game.spriteSheetWidth, game.spriteSheetHeight);
    player.image.draw(game.assets['sprites2.png']);

    player.name = "Person";
    player.characterClass = "McMan";
    player.exp = 0;
    player.level = 1;
    player.gp = 100;
    if (window.localStorage.getItem('exp')) {
      player.exp = parseInt(window.localStorage.getItem('exp'));
    } else {
      player.exp = 0;
    }
    if (window.localStorage.getItem('level')) {
      player.level = parseInt(window.localStorage.getItem('level'));
    } else {
      player.level = 1;
    }
    if (window.localStorage.getItem('gp')) {
      player.gp = parseInt(window.localStorage.getItem('gp'));
    } else {
      player.gp = 100;
    }
    if (window.localStorage.getItem('inventory')) {
      player.inventory = JSON.parse(window.localStorage.getItem('inventory'));
    } else {
      player.inventory = []; 
    }
    player.levelStats = [{},{attack: 4, maxHp: 10, maxMp: 0, expMax: 10},
                         {attack: 6, maxHp: 14, maxMp: 0, expMax: 30},
                         {attack: 7, maxHp: 20, maxMp: 5, expMax: 50}
    ];
    player.attack = function(){
      return player.levelStats[player.level].attack;
    };
    player.hp = player.levelStats[player.level].maxHp;
    player.mp = player.levelStats[player.level].maxMp;
      
    player.statusLabel = new Label("");
    player.statusLabel.width = game.width;
   
    player.statusLabel.color = '#fff';
    player.statusLabel.backgroundColor = '#000';
  };
  player.displayStatus = function(){

      if (seeninventory1){arr[0] = "X";}
    if (seeninventory2){arr[1] = " X";}
    if (seeninventory3){arr[2] = "X";}
    if(seeninventory4){arr[3] = "X";}
    if(heartseen){arr[4] = "X";}
    player.statusLabel.text = 
	  "<br />Checklist" + 
      "<br />--Apple "+ arr[0] +
      "<br />--Water Bottle"+ arr[1] +
      "<br />--Coin "+ arr[2] +
      "<br />--Medicine "+ arr[3] +
      "<br />--Heart "+ arr[4] +
	  "<br />--Cat Friend "+ arr[5] +
    "<br /> --hp=" +hp
    player.statusLabel.height = 130;

    player.showInventory(0);
  };
  player.clearStatus = function(){
    player.statusLabel.text = "";
    player.statusLabel.height = 0;
    player.hideInventory();
  };

  player.move = function(){
    this.frame = this.spriteOffset + this.direction * 2 + this.walk;
    if (this.isMoving) {
      this.moveBy(this.xMovement, this.yMovement);
      if (!(game.frame % 2)) {
        this.walk++;
        this.walk %= 2;
      }
      if ((this.xMovement && this.x % 16 === 0) || (this.yMovement && this.y % 16 === 0)) {
        this.isMoving = false;
        this.walk = 1;
      }
    } else {
      this.xMovement = 0;
      this.yMovement = 0;
      if (game.input.up) {
        this.direction = 1;
        this.yMovement = -4;
		 player.statusLabel.y = player.y;
  
        player.clearStatus();
      } else if (game.input.right) {
        this.direction = 2;
        this.xMovement = 4;
		  player.statusLabel.x = player.x;
        player.clearStatus();
      } else if (game.input.left) {
        this.direction = 3;
        this.xMovement = -4;
		player.statusLabel.x = player.x;
        player.clearStatus();
		
      } else if (game.input.down) {
        this.direction = 0;
        this.yMovement = 4;
		  player.statusLabel.y = player.y;
		
        player.clearStatus();
      }
      if (this.xMovement || this.yMovement) {
        var x = this.x + (this.xMovement ? this.xMovement / Math.abs(this.xMovement) * 16 : 0);
        var y = this.y + (this.yMovement ? this.yMovement / Math.abs(this.yMovement) * 16 : 0);
      if (0 <= x && x < map.width && 0 <= y && y < map.height && !map.hitTest(x, y)) {
          this.isMoving = true;
          this.move();
        }
      }
    }
  };
  player.onsquare = function(){
   var x = Math.floor(this.x /game.spriteWidth);
    var y = Math.floor(this.y/game.spriteHeight);
    if(foregroundData[y][x]=== 18){
      foregroundData[y][x]= 13;
      map.collisionData[y][x] = 0;
      return true;
    }
    else
    {
      return false;
    }
  };
  player.square = function(){
    return {x: Math.floor(this.x /game.spriteWidth), y: Math.floor(this.y/game.spriteHeight)}
  }
  player.facingSquare = function(){
    var playerSquare = player.square();
    var facingSquare;
    if(player.direction === 0){
      facingSquare = {x: playerSquare.x, y: playerSquare.y + 1}
    }else if (player.direction === 1) {
      facingSquare = {x: playerSquare.x, y: playerSquare.y - 1}
    }else if (player.direction === 2) {
      facingSquare = {x: playerSquare.x + 1, y: playerSquare.y}
    }else if (player.direction === 3) {
      facingSquare = {x: playerSquare.x - 1, y: playerSquare.y}
    }
    if ((facingSquare.x < 0 || facingSquare.x >= map.width/16) || (facingSquare.y < 0 || facingSquare.y >= map.height/16)) {
      return null;
    } else {
      return facingSquare;
    }
  }
  player.facing = function(){
    var facingSquare = player.facingSquare();
   // this.xval = facingSquare.x;

   // this.yval = facingSquare.y;
    if (!facingSquare){
      return null;
    }else{
      return foregroundData[facingSquare.y][facingSquare.x];
    }
  }
    player.xvalues = function(){
          var facingSquare = player.facingSquare();
      return facingSquare.x;
    }
    player.yvalues = function(){
          var facingSquare = player.facingSquare();
      return facingSquare.y;
    }
  player.visibleItems = [];
  player.itemSurface = new Surface(game.itemSpriteSheetWidth, game.spriteSheetHeight);
  player.inventory = [];
  player.hideInventory = function(){
    for(var i = 0; i < player.visibleItems.length; i++){
      player.visibleItems[i].remove();
    }
      player.visibleItems = [];
  };
  player.showInventory = function(yOffset){
     if(player.visibleItems.length === 0){
      player.itemSurface.draw(game.assets['items.png']);
      for (var i = 0; i < player.inventory.length; i++){
      /*
	  var item = new Sprite(game.spriteWidth, game.spriteHeight);
        item.y = 130 + yOffset;
        item.x = 10 + 20*i;
        item.frame = player.inventory[i];
        item.scaleX = .5;
        item.scaleY = .5;
        item.image = player.itemSurface;
        player.visibleItems.push(item);
        game.currentScene.addChild(item);
		*/
		
      }
    }
  };
  var npc = {
    say: function(message){
      player.statusLabel.height = 12;
      player.statusLabel.text = message;
    }
  }
  var appletree = {
 action: function()
 {  
   player.inventory.push(game.items[4].id);
  seeninventory1 = true;
  if (seeninventory2){
          foregroundData[2][12] = -1;
          map.collisionData[2][12] = 0;
      }
 }
  }
  var greeter = {
    action: function(){
      npc.say("hello");
    }
  };

  //actions when player interacts with water
  var water = {
    action: function(xvalue, yvalue){
      npc.say("You got water");
      foregroundData[yvalue][xvalue] = -1;
      map.collisionData[yvalue][xvalue] = 0;
      player.inventory.push(game.items[5].id);
      seeninventory2 = true;
      if (seeninventory1){
          foregroundData[2][12] = -1;
          map.collisionData[2][12] = 0;
          npc.say("Level 2 unlocked");
      }
    
    }
  };
  var money = {
    action: function(xvalue, yvalue){
      npc.say("You got gold coins!");
      foregroundData[yvalue][xvalue] = -1;
      map.collisionData[yvalue][xvalue] = 0;
      //player.inventory.push(game.items[5].id);
      seeninventory3 = true;
      if (seeninventory4){
        foregroundData[2][24] = -1;
          map.collisionData[2][24] = 0;
          npc.say("Level 3 unlocked");
      }
    
    }
  };
  var heart = {
     action: function(xvalue, yvalue){
      npc.say("You found a heart!");
      heartseen = true;
      foregroundData[yvalue][xvalue] = -1;
      map.collisionData[yvalue][xvalue] = 0;
    }
  }
  var health = {
    action: function(xvalue, yvalue){
      npc.say("You got a first aid kit!");
      foregroundData[yvalue][xvalue] = -1;
      map.collisionData[yvalue][xvalue] = 0;
      seeninventory4 = true;
        if (seeninventory3){
        foregroundData[2][24] = -1;
          map.collisionData[2][24] = 0;
          npc.say("Level 3 unlocked");
      }
    
    }
  }
  //actions when player interacts with tree


  var shopScene = new Scene();
  var cat = {
    action: function(){
      game.pushScene(shopScene);
    }
  };

  var battleScene = new Scene();
  var brawler = {
    maxHp: 20,
    hp: 20,
    sprite: 15,
    attack: 3,
    exp: 3,
    gp: 5,
    action: function(){
      player.currentEnemy = this;
      game.pushScene(battleScene);
    }
  };

  var spriteRoles = [water,,greeter,,cat,,,,,,,,,,,brawler,,water,appletree,money,,health,heart];

  var setBattle = function(){
    battleScene.backgroundColor = '#000';
    var battle = new Group();
    battle.menu = new Label();
    battle.menu.x = 20;
    battle.menu.y = 170;
    battle.menu.color = '#fff';  
    battle.activeAction = 0;
    battle.getPlayerStatus = function(){
      return "HP: " + player.hp + "<br />MP: " + player.mp;
    };
    battle.playerStatus = new Label(battle.getPlayerStatus());
    battle.playerStatus.color = '#fff';
    battle.playerStatus.x = 200;
    battle.playerStatus.y = 120;
    battle.hitStrength = function(hit){
      return Math.round((Math.random() + .5) * hit);
    };
    battle.won = function(){
      battle.over = true;
      player.exp += player.currentEnemy.exp;
      player.gp += player.currentEnemy.gp;
      player.currentEnemy.hp = player.currentEnemy.maxHp;
      player.statusLabel.text = "You won!<br />" +
        "You gained "+ player.currentEnemy.exp + " exp<br />"+
        "and " + player.currentEnemy.gp + " gold pieces!";
      player.statusLabel.height = 45;
      if(player.exp > player.levelStats[player.level].expMax){
        player.level += 1;
        player.statusLabel.text = player.statusLabel.text + 
          "<br />And you gained a level!"+
          "<br />You are now at level " + player.level +"!";
        player.statusLabel.height = 75;
      }
    };
    battle.lost = function(){
      battle.over = true;
      player.hp = player.levelStats[player.level].maxHp;
      player.mp = player.levelStats[player.level].maxMp;
      player.gp = Math.round(player.gp/2);
      player.statusLabel.text = "You lost!";
      player.statusLabel.height = 12;
    };
    battle.playerAttack = function(){
      var currentEnemy = player.currentEnemy;
      var playerHit = battle.hitStrength(player.attack());
      currentEnemy.hp = currentEnemy.hp - playerHit;
      battle.menu.text = "You did " + playerHit + " damage!";
      if(currentEnemy.hp <= 0){
         battle.won();
      };
    };
    battle.enemyAttack = function(){
      var currentEnemy = player.currentEnemy;
      var enemyHit = battle.hitStrength(currentEnemy.attack);
      player.hp = player.hp - enemyHit;
      battle.menu.text = "You took " + enemyHit + " damage!";
      if(player.hp <= 0){
        battle.lost();
      };
    };
    battle.actions = [{name: "Fight", action: function(){
        battle.wait = true;
        battle.playerAttack();
        setTimeout(function(){
          if(!battle.over){
            battle.enemyAttack();
          };
          if(!battle.over){
            setTimeout(function(){
              battle.menu.text = battle.listActions();
              battle.wait = false;
            }, 1000)
          } else {
            setTimeout(function(){
              battle.menu.text = "";
              game.popScene();
            }, 1000)
          };
        }, 1000);
      }},
      {name: "Magic", action: function(){
        battle.menu.text = "You don't know any magic yet!";
        battle.wait = true;
        battle.activeAction = 0;
        setTimeout(function(){
          battle.menu.text = battle.listActions();
          battle.wait = false;
        }, 1000);
      }},
      {name: "Run", action: function(){
        game.pause();
        player.statusLabel.text = "You ran away!";
        player.statusLabel.height = 12;
        battle.menu.text = "";
        game.popScene();
      }}
    ];
    battle.listActions = function(){
      battle.optionText = [];
      for(var i = 0; i < battle.actions.length; i++){
        if(i === battle.activeAction){
          battle.optionText[i] = "<span class='active-option'>"+ battle.actions[i].name + "</span>";
        } else {
          battle.optionText[i] = battle.actions[i].name;
        }
      }
      return battle.optionText.join("<br />");
    };
    battle.addCombatants = function(){
      var image = new Surface(game.spriteSheetWidth, game.spriteSheetHeight);
      image.draw(game.assets['sprites2.png']);
      battle.player = new Sprite(game.spriteWidth, game.spriteHeight);
      battle.player.image = image;
      battle.player.frame = 7;
      battle.player.x = 150;
      battle.player.y = 120;
      battle.player.scaleX = 2;
      battle.player.scaleY = 2;
      battle.enemy = new Sprite(game.spriteWidth, game.spriteHeight);
      battle.enemy.image = image;
      battle.enemy.x = 150;
      battle.enemy.y = 70;
      battle.enemy.scaleX = 2;
      battle.enemy.scaleY = 2;
      battle.addChild(battle.enemy);
    };
    battle.addCombatants();
    
    battleScene.on('enter', function() {
      battle.over = false;
      battle.wait = true;
      battle.menu.text = "";
      battle.enemy.frame = player.currentEnemy.sprite;
      setTimeout(function(){
        battle.menu.text = battle.listActions();
        battle.wait = false;
      }, 500);
    });
    battleScene.on('enterframe', function() {
      if(!battle.wait){
        if (game.input.a){
          battle.actions[battle.activeAction].action();
        } else if (game.input.down){
          battle.activeAction = (battle.activeAction + 1) % battle.actions.length;
          battle.menu.text = battle.listActions();
        } else if (game.input.up){
          battle.activeAction = (battle.activeAction - 1 + battle.actions.length) % battle.actions.length;
          battle.menu.text = battle.listActions();
        }
        battle.playerStatus.text = battle.getPlayerStatus();
      };
    })
    battleScene.on('exit', function() {
      setTimeout(function(){
        battle.menu.text = "";
        battle.activeAction = 0;
        battle.playerStatus.text = battle.getPlayerStatus();
        game.resume();
      }, 1000);
    });
    battle.addChild(battle.playerStatus);
    battle.addChild(battle.menu);
    battle.addChild(battle.player);
    battleScene.addChild(battle);
  };
  var setShopping = function(){
    var shop = new Group();
    shop.itemSelected = 0;
    shop.shoppingFunds = function(){
      return "Gold: " + player.gp;
    };
    shop.drawManeki = function(){
      var image = new Surface(game.spriteSheetWidth, game.spriteSheetHeight);
      var maneki = new Sprite(game.spriteWidth, game.spriteHeight);
      maneki.image = image;
      image.draw(game.assets['sprites2.png']);
      maneki.frame = 4;
      maneki.y = 10;
      maneki.x = 10;
      maneki.scaleX = 2;
      maneki.scaleY = 2;
      this.addChild(maneki);
      this.message.x = 40;
      this.message.y = 10;
      this.message.color = '#fff';
      this.addChild(this.message);
    };
    
    shop.drawItemsForSale = function(){
      for(var i = 0; i < game.items.length; i++){
        var image = new Surface(game.itemSpriteSheetWidth, game.spriteSheetHeight);
        var item = new Sprite(game.spriteWidth, game.spriteHeight);
        image.draw(game.assets['items.png']);
        itemLocationX = 10 + 40*i;
        itemLocationY = 70;
        item.y = itemLocationY;
        item.x = itemLocationX;
        item.frame = i;
        item.scaleX = 1;
        item.scaleY = 1;
        item.image = image;
        this.addChild(item);
        var itemDescription = new Label(game.items[i].price + "<br />" + game.items[i].description);
        itemDescription.x = itemLocationX - 1;
        itemDescription.y = itemLocationY + 40;
        itemDescription.font = "8px arial";
        itemDescription.color = '#fff';
        this.addChild(itemDescription);
        if(i === this.itemSelected){
          var image = new Surface(game.spriteSheetWidth, game.spriteSheetHeight);
          this.itemSelector = new Sprite(game.spriteWidth, game.spriteHeight);
          image.draw(game.assets['sprites2.png']);
          itemLocationX = 10 + 30*i;
          itemLocationY = 160;
          this.itemSelector.scaleX = 1;
          this.itemSelector.scaleY = 1;
          this.itemSelector.y = itemLocationY;
          this.itemSelector.x = itemLocationX;
          this.itemSelector.frame = 7;
          this.itemSelector.image = image;
          this.addChild(this.itemSelector);
        };
      };
    };
    shop.on('enter', function(){
      shoppingFunds.text = shop.shoppingFunds();
    });
    shop.on('enterframe', function() {
      setTimeout(function(){
        if (game.input.a){
          shop.attemptToBuy();
        } else if (game.input.down) {
          shop.message.text = shop.farewell;
          setTimeout(function(){
            game.popScene();
            shop.message.text = shop.greeting;
          }, 1000);
        } else if (game.input.left) {
          shop.itemSelected = shop.itemSelected + game.items.length - 1;
          shop.itemSelected = shop.itemSelected % game.items.length;
          shop.itemSelector.x = 10 + 40*shop.itemSelected;
          shop.message.text = shop.greeting;
        } else if (game.input.right) {
          shop.itemSelected = (shop.itemSelected + 1) % game.items.length;
          shop.itemSelector.x = 10 + 40*shop.itemSelected;
          shop.message.text = shop.greeting;
        }
      }, 500);
      player.showInventory(100);
      shoppingFunds.text = shop.shoppingFunds();
    });
    shop.attemptToBuy = function(){
      var itemPrice = game.items[this.itemSelected].price;
      if (player.gp < itemPrice){
        this.message.text = this.apology;
      }else{
        player.visibleItems = [];
        player.gp = player.gp - itemPrice;
        player.inventory.push(game.items[this.itemSelected].id);
        this.message.text = this.sale;
      }
    };
    
    shop.greeting = "Hi!  I'm Maneki. Meow. I sell things.";
    shop.apology = "Meow... sorry, you don't have the money for this.";
    shop.sale = "Here ya go!";
    shop.farewell = "Come again! Meow!";
    shop.message = new Label(shop.greeting);
    shop.drawManeki();
    var shoppingFunds = new Label(shop.shoppingFunds());
    shoppingFunds.color = '#fff';
    shoppingFunds.y = 200;
    shoppingFunds.x = 10;
    shop.addChild(shoppingFunds);
    shop.drawItemsForSale();
    shopScene.backgroundColor = '#000';
    shopScene.addChild(shop);
  };
    
  game.focusViewport = function(){
    var x = Math.min((game.width  - 16) / 2 - player.x, 0);
    var y = Math.min((game.height - 16) / 2 - player.y, 0);
    x = Math.max(game.width,  x + map.width)  - map.width;
    y = Math.max(game.height, y + map.height) - map.height;
    game.rootScene.firstChild.x = x;
    game.rootScene.firstChild.y = y;
  };
  var timer = 500;
  setInterval(function () {

        var playerxval = player.xvalues();
        var playeryval = player.yvalues();
        map.collisionData[enemyyval][enemyxval] = 0
        if (playerxval > enemyxval){
          enemyxval++;
          if (map.collisionData[enemyyval][enemyxval] != 0)
        {
          enemyxval--;
       }
       else{
         foregroundData[enemyyval][enemyxval-1] = replace;
          map.collisionData[enemyyval][enemyxval] = 0;
          foregroundData[enemyyval][enemyxval] = 27;
        //  if (playerxval === enemyxval && playeryval === enemyyval){
     // hp--;}
       }
        }
        else if (playerxval < enemyxval){
          enemyxval--;
          if (map.collisionData[enemyyval][enemyxval] != 0)
        {
          enemyxval++;
       }
       else{
         foregroundData[enemyyval][enemyxval+1] = replace;
          map.collisionData[enemyyval][enemyxval] = 0;
          foregroundData[enemyyval][enemyxval] = 27;
       //    if (playerxval === enemyxval && playeryval === enemyyval){
      //hp--;}
       }
        }
        
        if (playeryval > enemyyval){
          enemyyval++;
          if (map.collisionData[enemyyval][enemyxval] != 0)
        {
          enemyyval--;
       }
       else{
         foregroundData[enemyyval-1][enemyxval] = replace;
          map.collisionData[enemyyval][enemyxval] = 0;
          foregroundData[enemyyval][enemyxval] = 27;
        //   if (playerxval === enemyxval && playeryval === enemyyval){
      //hp--;}
       }
        }
        else if (playeryval < enemyyval){
          enemyyval--;
          if (map.collisionData[enemyyval][enemyxval] != 0)
        {
          enemyyval++;
       }
       else{
         foregroundData[enemyyval+1][enemyxval] = replace;
          map.collisionData[enemyyval][enemyxval] = 0;
          foregroundData[enemyyval][enemyxval] = 27;
        //   if (playerxval === enemyxval && playeryval === enemyyval){
      //hp--;}
       }
        }
        if (seeninventory1 && seeninventory2 && !nottouched1){
                    foregroundData[enemyyval][enemyxval] = replace;
          enemyxval = 16;
          enemyyval = 3;
          replace = -23;
           map.collisionData[enemyyval][enemyxval] = 0;
          foregroundData[enemyyval][enemyxval] = 27;
        //   if (playerxval === enemyxval && playeryval === enemyyval){
      //hp--;}
          nottouched1 = true;
        }
                if (seeninventory3 && seeninventory4 && !nottouched2){
                                      foregroundData[enemyyval][enemyxval] = replace;
                  enemyxval = 28;
                  enemyyval = 3;
                  replace = -24;
                 map.collisionData[enemyyval][enemyxval] = 0;
          foregroundData[enemyyval][enemyxval] = 27;
        //   if (playerxval === enemyxval && playeryval === enemyyval){
      //hp--;}
                    nottouched2 = true;
                }
                if (playerxval === enemyxval && playeryval === enemyyval){

      hp--;}
               if (seeninventory1 && seeninventory2&& seeninventory3 && seeninventory4 && heartseen){
         var youWin = window.confirm("You win (for now). Do you want to play again?");
		 if (youWin == true)
		 {
			 location.reload();
		 }
       }
                if (hp <= 0){
                  var restart = window.confirm("you died...Do you want to restart?");
                  if(restart == true){
                    location.reload();
                  }
                  else{
                    window.open('','_self').close();
                  }
                }
       
       }
       , timer);
       
  game.onload = function(){
     
    game.storable = ['exp', 'level', 'gp', 'inventory'];
    game.saveToLocalStorage = function(){
      for(var i = 0; i < game.storable.length; i++){
        if(game.storable[i] === 'inventory'){
          window.localStorage.setItem(game.storable[i], JSON.stringify(player[game.storable[i]]));
        } else {
          window.localStorage.setItem(game.storable[i], player[game.storable[i]]);
        }
      }
    };
    setInterval(game.saveToLocalStorage, 5000);
    
    setMaps();
    setPlayer();
    setStage();
    setShopping();
    setBattle();
    player.on('enterframe', function() {
      player.move();
      
      if (game.input.a) {
        var temp = player.onsquare();
        if (temp){
          spriteRoles[18].action();
          npc.say("You picked an apple!");
          
       //   player.displayStatus();
        }
        else{
          var playerFacing = player.facing();
          if(!playerFacing || !spriteRoles[playerFacing]){
            player.displayStatus();
          }
          else{
            if ((playerFacing === 17) || (playerFacing ==0) || (playerFacing===19) || (playerFacing === 21) || (playerFacing === 22))
            {

              spriteRoles[playerFacing].action(player.xvalues(), player.yvalues());
            }
            else{
            spriteRoles[playerFacing].action();}
          }
        }
      }
    });
    game.rootScene.on('enterframe', function(e) {
      game.focusViewport();
    });
  };
  game.start();
};
