var TREE = 3;

var mapData =
   [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
   ];
   var foregroundData = [];
   foregroundData[0] = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
  var prev = [];
  var seenapple = false;
  var seenwater = false;
  var seenmoney = false;
  var seenhealth = false; 
  var moneyx = 0;
  var moneyy = 0;
  var healthx = 0;
  var healthy = 0;
  var applex = 0;
  var appley = 0;
  var waterx = 0;
  var watery = 0;
   for (var i = 1; i < 25; i++){
       var newarr = [];
 /*      if (i === 1){
               prev.push(1);
           }*/
       var temp = [];

       var seen = false;
       for(var j=0; j < 38; j++)
       {

           var index = -1;
           if (Math.floor((Math.random() * 20) +1)  <8)
           {
               index = TREE;
           }
           if (i ===2){
             index = -1;
             if (j ===12){
               index = 3;
             }
           }
           if (j < 12)
           {
             var random = Math.floor((Math.random() * 144) +1);
           if (random === 25 && !seenapple)
           {
               index = 18;
               applex = j;
               appley = i;
               seenapple = true;
           }
           else if (random === 20 && !seenwater)
           {
               index = 17;
                waterx= j;
                watery = i
               seenwater = true;
           }
           }
           
           if ( j > 12 && j <24){
              var random2 = Math.floor((Math.random() * 144) +1);
              if (random2 === 25 && !seenmoney)
           {
               index = 19;
               moneyx = j+12;
               moneyy = i;
               seenmoney = true;
           }
           else if (random2 === 20 && !seenhealth)
           {
               index = 21;
                healthx = j + 12;
                healthy = i
               seenhealth = true;
           }
           }
           if (index === -1 || index === 18){
               newarr.push(j);
               if ((contains(j, prev)) && j != 12 && j != 24){
                   seen = true;
               }
           }
             temp[j] = index;
              if (j === 12 || j === 24)
              {
                  temp[j] = 3;
              }

                  
       }
    //   if (!seen)
      //     {
    //          var generate = Math.floor((Math.random() * prev.length));
    //          newarr[generate] = -1;
    //       }
       prev = newarr;
       foregroundData[i] = temp;
   }
   if (!seenhealth){
     healthx = Math.floor((Math.random() * 25));
     healthy = 13 + Math.floor((Math.random() * 12));
     foregroundData[healthy][healthx] = 21;
   }
   if(!seenmoney){
     moneyy = Math.floor((Math.random() * 25));
     moneyx = 13 + Math.floor((Math.random() * 12));
     foregroundData[moneyy][moneyx] = 19;
   }
   if (!seenapple){
       var applerow = Math.floor((Math.random() * 25));
      appley =applerow;
       var applecolumn = Math.floor((Math.random() * 12));
       applex = applecolumn;
       foregroundData[applerow][applecolumn] = 18;
   }
     if (!seenwater){
       var waterrow = Math.floor((Math.random() * 25));
       var watercolumn = Math.floor((Math.random() * 12));
       foregroundData[waterrow][watercolumn] = 17;
   }
   foregroundData[1][1] = -1; //[,]calls whole row not just the square
   getPath(applex, appley, 18, 17);
   getPath(waterx, watery, 17, 18);
   foregroundData[2][12] = 20;
  foregroundData[2][24] = 20;
/*var foregroundData = 
   [[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], //25x38
    [3, -1, -1, 3, 3, 3, 18, -1, -1, -1, -1, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3],
    [3, -1, -1, 3, 3, 3, 17, -1 , -1, -1 , -1, 3, -1, 3, -1, -1, 3, -1, -1, -1, 3, 3, 3, 3, 3, -1, -1, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3],
    [3, -1, -1, 3, 3, 3, 3, -1, -1, -1, -1, 3, -1, 3, -1, 3, 3, -1, -1, -1, 3, -1, -1, -1, 3, -1, -1, 3, 3, -1, -1, -1, -1, 3, -1, -1, -1, 3],
    [3, -1, -1, -1, -1, 3, 3, 3, 3, -1, -1, 3, 3, 3, -1, -1, 3, -1, -1, -1, 3, 3, -1, -1, 3, -1, -1, -1, 3, 3, 3, 3, 3, 3, -1, -1, -1, 3],
    [3, -1, -1, -1, -1, 3, 3, 3, 3, -1, -1, 3, 3, -1, -1, -1, 3, -1, -1, 3, 3, -1, 3, -1, 3, -1, -1, -1, -1, -1, -1, -1, -1, 3, -1, -1, -1, 3],
    [3, 3, 3, -1, -1, -1, -1, -1, -1, -1, -1, 3, 3, -1, 3, -1, -1, -1, -1, 3, -1, -1, -1, -1, 3, -1, -1, 3, 3, 3, 3, 3, 3, 3, -1, -1, -1, 3]
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, -1, -1, 3, 3, 3, 18, -1, -1, -1, -1, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3],
    [3, -1, -1, 3, 3, 3, 17, -1 , -1, -1 , -1, 3, -1, 3, -1, -1, 3, -1, -1, -1, 3, 3, 3, 3, 3, -1, -1, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3],
    [3, -1, -1, 3, 3, 3, -1, -1, -1, -1, -1, 3, -1, 3, -1, 3, 3, -1, -1, -1, 3, -1, -1, -1, 3, -1, -1, 3, 3, -1, -1, -1, -1, 3, -1, -1, -1, 3],
    [3, -1, -1, -1, -1, 3, 3, 3, 3, -1, -1, 3, 3, 3, -1, -1, 3, -1, -1, -1, 3, 3, -1, -1, 3, -1, -1, -1, 3, 3, 3, 3, 3, 3, -1, -1, -1, 3],
    [3, -1, -1, -1, -1, 3, 3, 3, 3, -1, -1, 3, 3, -1, -1, -1, 3, -1, -1, 3, 3, -1, 3, -1, 3, -1, -1, -1, -1, -1, -1, -1, -1, 3, -1, -1, -1, 3],
    [3, 3, 3, -1, -1, -1, -1, -1, -1, -1, -1, 3, 3, -1, 3, -1, -1, -1, -1, 3, -1, -1, -1, -1, 3, -1, -1, 3, 3, 3, 3, 3, 3, 3, -1, -1, -1, 3]
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, -1, -1, 3, 3, 3, 18, -1, -1, -1, -1, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3],
    [3, -1, -1, 3, 3, -1, -1, -1 , -1, -1 , -1, 3, -1, 3, -1, -1, 3, -1, -1, -1, 3, 3, 3, 3, 3, -1, -1, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3],
    [3, -1, -1, 3, 3, 3, 3, -1, -1, -1, -1, 3, -1, 3, -1, 3, 3, -1, -1, -1, 3, -1, -1, -1, 3, -1, -1, 3, 3, -1, -1, -1, -1, 3, -1, -1, -1, 3],
    [3, -1, -1, -1, -1, 3, 3, 3, 3, -1, -1, 3, 3, 3, -1, -1, 3, -1, -1, -1, 3, 3, -1, -1, 3, -1, -1, -1, 3, 3, 3, 3, 3, 3, -1, -1, -1, 3],
    [3, -1, -1, -1, -1, 3, 3, 3, 3, -1, -1, 3, 3, -1, -1, -1, 3, -1, -1, 3, 3, -1, 3, -1, 3, -1, -1, -1, -1, -1, -1, -1, -1, 3, -1, -1, -1, 3],
    [3, 3, 3, -1, -1, -1, -1, -1, -1, -1, -1, 3, 3, -1, 3, -1, -1, -1, -1, 3, -1, -1, -1, -1, 3, -1, -1, 3, 3, 3, 3, 3, 3, 3, -1, -1, -1, 3]
    [3, -1, -1, 3, 3, 3, 3, -1, -1, -1, -1, 3, -1, 3, -1, 3, 3, -1, -1, -1, 3, -1, -1, -1, 3, -1, -1, 3, 3, -1, -1, -1, -1, 3, -1, -1, -1, 3],
    [3, -1, -1, -1, -1, 3, 3, 3, 3, -1, -1, 3, 3, 3, -1, -1, 3, -1, -1, -1, 3, 3, -1, -1, 3, -1, -1, -1, 3, 3, 3, 3, 3, 3, -1, -1, -1, 3],
    [3, -1, -1, -1, -1, 3, 3, 3, 3, -1, -1, 3, 3, -1, -1, -1, 3, -1, -1, 3, 3, -1, 3, -1, 3, -1, -1, -1, -1, -1, -1, -1, -1, 3, -1, -1, -1, 3],
    [3, 3, 3, -1, -1, -1, -1, -1, -1, -1, -1, 3, 3, -1, 3, -1, -1, -1, -1, 3, -1, -1, -1, -1, 3, -1, -1, 3, 3, 3, 3, 3, 3, 3, -1, -1, -1, 3],
       
   ]; */
      function getPath(x, y, num, numignore) {
       /*  var goalx = x;
        var goaly = y;
        var currentx = 1;
        var currenty = 1;
        var START = 1;
        var STARTY = 1;
        if (goalx === 0){
           currentx--;
           foregroundData[currenty][currentx] = -1;
        }
        for (var i = 0; i < goalx - START; i++)
        {
                     currentx++;
          foregroundData[currenty][currentx] = -1;
          if ((currentx === goalx) && (goaly === 1)){
               foregroundData[currenty][currentx] = num;

            
          }

        }
if (goaly === 1 && goalx ===0){
                 foregroundData[currenty][currentx] = num;
}
  for (var i = 0; i < goaly - STARTY-1; i++)
        {
          currenty++;
          if ((foregroundData[currenty][currentx] != 18)|| (foregroundData[currenty][currentx] != 17)){
          foregroundData[currenty][currentx] = -1;
          }
            if (currenty === goaly - 1){
                alert("hey");
            
          }

        
        }*/
        var counter = 0;
          var goalx = x; //the x value of the sprite you need to get to
          var goaly = y; // the y value of the sprit you need to get to
          //alert(goalx);
         // alert(goaly);
          var xval = 1; //your CURRENT x value (what square you are clearing). this WILL change
          var yval = 1; // your CURRENT y value (what square you are clearing). this WILL change
          var rowcolumnfound = false;
          var coorfound = false;
          while (!rowcolumnfound){
              var dice = Math.floor((Math.random() * 4)) +1;
              var numStepsNS =  Math.floor((Math.random() * 4)) +1;
              var numStepsEW = Math.floor((Math.random() * 2)) +1;
                if (goalx === 0){
                 xval--;
                  foregroundData[yval][xval] = -1;
                  break;
        }
              if(dice === 1) {
                  if (yval > numStepsNS){
                      for (var i = 0; i < numStepsNS; i++){
                          yval = yval -1;
                          if( foregroundData[yval][xval] != numignore)
                          {
                          foregroundData[yval][xval] = -1;}
                           counter++;
                          if (yval === goaly){

                              rowcolumnfound = true; break; 
                          }
                      }
                  }
              }
                if (dice === 2){
                   if (yval < 24 - numStepsNS){
                        for (var i = 0; i < numStepsNS; i++){
                          yval = yval +1;
                         if( foregroundData[yval][xval] != numignore){
                               foregroundData[yval][xval] = -1;}
                               counter++;
                               
                            if (yval === goaly){
                              rowcolumnfound = true; break; 
                          }
                      }
                       
                   }
              } 
                else if(dice === 3) {
                   if (xval > numStepsEW){
                       for (var i = 0; i < 1; i++){
                            xval = xval -1;
                        if( foregroundData[yval][xval] != numignore){
                          foregroundData[yval][xval] = -1;}
                          counter++;
                          
                            if (xval === goalx){
                             rowcolumnfound = true; break; 
                          }
                       }
                   }
              } 
              else{
                     if (xval < 12 - numStepsEW){
                       for (var i = 0; i < numStepsEW; i++){
                            xval = xval +1;
                          if( foregroundData[yval][xval] != numignore){
                          foregroundData[yval][xval] = -1;}
                          counter++;
                          
                            if (xval === goalx){
                              rowcolumnfound = true; break; 
                          }
                       }
                   }
              }
          }
                 var tempy = yval;
                 var tempx = xval;
              if (xval === goalx && yval != goaly){

                  for (var i = 0; i < Math.abs(tempy - goaly); i++ ){
                  if(yval < goaly){
                      yval = yval + 1;
                     if( foregroundData[yval][xval] != numignore){
                      foregroundData[yval][xval] = -1;}
                      counter++;

                  }
                  else{
                      yval = yval - 1;
                      if( foregroundData[yval][xval] != numignore){
                      foregroundData[yval][xval] = -1;}
                      counter++;
                  }
              }

      }                     
      else if (yval === goaly && xval != goalx){
          for (var i = 0; i < Math.abs(tempx - goalx); i++ ){
                  if(xval < goalx){
                      xval = xval + 1;
                   if( foregroundData[yval][xval] != numignore){
                     foregroundData[yval][xval] = -1;}
                      counter++;

                  }
                  else{
                      xval = xval - 1;
                     if( foregroundData[yval][xval] != numignore){
                     foregroundData[yval][xval] = -1;}
                      counter++;

                  }
              }
      }
                            foregroundData[yval][xval] = num; 
                          //  alert(counter); 
                            for (var i = 0; i < 25; i++)
                        {
                            for(var j = 0; j < 38; j++)
                            {
                               console.log(foregroundData[i][j]);
                            }
                        } 
          }
   function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}
   var clearMapSquare = function(xval, yval){
       foregroundData[yval][xval] = -1;
   }