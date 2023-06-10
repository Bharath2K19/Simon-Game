var mylist=[];
var is=false;
var i=0;
var x=0;


$(document).keypress(function(){
    if(!is){
    is=true;
    getrancol();
    }
});

   $(".green").click(function(){
    if(is){
      timing("green");
      var audio=new Audio("sounds/green.mp3");
            audio.play();
     checking("green",x++);
    }
   });
   $(".red").click(function(){
    if(is){
    timing("red");
    var audio=new Audio("sounds/red.mp3");
            audio.play();
            checking("red",x++);
    }
   });
   $(".blue").click(function(){
    if(is){
    timing("blue");
    var audio=new Audio("sounds/blue.mp3");
            audio.play();
            checking("blue",x++);
    }
   });
   $(".yellow").click(function(){
    if(is){
    timing("yellow");
    var audio=new Audio("sounds/yellow.mp3");
            audio.play();
            checking("yellow",x++);
    }
   });



function getrancol(){
    x=0;
    $("h1").text("Level "+(++i));
    var ranum=Math.floor(Math.random()*4+1);
    sich(ranum);
}

function sich(num){
    switch(num){
        case 1:
            var audio=new Audio("sounds/green.mp3");
            audio.play();
            timing("green");
            pushele("green");
            break;
        case 2:
            var audio=new Audio("sounds/red.mp3");
            audio.play();
            timing("red");
            pushele("red");
            break;
        case 3:
            var audio=new Audio("sounds/blue.mp3");
            audio.play();
            timing("blue");
            pushele("blue");
            break;
        case 4:
            var audio=new Audio("sounds/yellow.mp3");
            audio.play();
            timing("yellow");
            pushele("yellow");
            break;
        default:alert(num);
    }   
}

function timing(colname){
    $("."+colname).addClass("pressed");
    setTimeout(function(){
        $("."+colname).removeClass("pressed");
    },100);
}

function pushele(val){
    mylist.push(val);
}


function checking(name,x){
    if(name===mylist[x]) {
      if(x+1==mylist.length){
        setTimeout(function () {
            getrancol();
          }, 1000);
      }
    }else {
        $("h1").text("Game over, Press any key to start");
        var audio=new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
           $("body").removeClass("game-over");
        },200);
        is=false; 
        i=0;
        mylist=[];
    }
}






