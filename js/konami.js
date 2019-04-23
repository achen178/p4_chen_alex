// a key map of allowed keys
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
  let root = document.documentElement;
  root.style.setProperty('--miloticBlue', "#96a6d1");
  root.style.setProperty('--miloticPink', "#efbd5a");
  document.getElementById("logo").src="imgs/logo-shiny.png";
  if($("#header-img").length){
    $("#header-img").attr("src","imgs/header-shiny.png");
  }
  if($("#animate-img").length){
    $("#animate-img").attr("src","https://img.pokemondb.net/sprites/black-white/anim/shiny/milotic.gif");
  }
  if($("#milotic-gif").length){
    $("#milotic-gif").attr("src","https://upload.pokeheroes.com/img/avatar/261431961.gif?t=1526627923");
  }
  console.log(miloticPink);
  miloticPink = "#efbd5a";
  console.log(miloticPink);
  var chart = new CanvasJS.Chart("chartContainer", {
  	animationEnabled: true,
    title:{
  		text:"Base Stats",
      fontFamily: "Lato",
      horizontalAlign: "right"
  	},
  	axisX:{
  		interval: 1
  	},
  	axisY2:{
  		gridColor: "rgba(1,77,101,.1)",
  	},
  	data: [{
      indexLabelFontFamily: "Lato",
  		type: "bar",
  		name: "stats",
  		axisYType: "secondary",
  		color: miloticPink,
  		dataPoints: [
  			{ y: 95, label: "HP" },
  			{ y: 60, label: "Attack" },
  			{ y: 79, label: "Defense" },
  			{ y: 100, label: "Sp. Atk" },
  			{ y: 125, label: "Sp. Def" },
  			{ y: 81, label: "Speed" },
  		]
  	}]
  });
  chart.render();
}
