// start-----M O V I N G -- L E T T E R S -------
// Wrap every letter in a span
// https://tobiasahlin.com/moving-letters/#16
$('.ml16').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: false})
.add({
  targets: '.ml16 .letter',
  translateY: [-300,0],
  easing: "easeOutExpo",
  duration: 3000,
  delay: function(el, i) {
    return 300 * i;
  }
})
//if loop, uncomment script below
// .add({
//   targets: '.ml16',
//   opacity: 0,
//   duration: 3000,
//   easing: "easeOutExpo",
//   delay: 1000
// })
;
// end-------M O V I N G -- L E T T E R S -------

// start-----N A V I G A T I O N -------
(function(){
  'use strict';

  class Component {

    printError(error) {

      if (typeof error !== 'string' || error.length === 0) {
        return console.log('you did not give arguments');
      }

      return console.log(error);
    }

    toggleСlass(node, className) {
      return  node.classList.toggle(className);
    }
  }

  class Menu extends Component {

    constructor(settings) {
      super();
      this.menuNode = settings.menuNode;
    }

    toggleMenuState(className) {

      if (typeof className !== 'string' || className.length === 0){
        return super.printError('you did not give the class name for the toggleState function');
      }

      return super.toggleСlass(this.menuNode, className);
    }
  }

  let jsMenuNode = document.querySelector('body');

  let demoMenu = new Menu ({
    menuNode: jsMenuNode
  });

  function callMenuToggle() {
    demoMenu.toggleMenuState('js-menu_activated');
  }

  jsMenuNode.querySelector('.js-menu__toggle').addEventListener('click', callMenuToggle);
})();
// end-----N A V I G A T I O N -------
// start---B A R --- C H A R T -------
window.onload = function () {

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
		color: "#e1737a",
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
// end-----B A R --- C H A R T -------
