// document.addEventListener('DOMContentLoaded', function(){ 
    
// }, false);



// Animation on page load
// let photoWrapper = document.querySelectorAll('.grid-photos-item-child');
// document.addEventListener('DOMContentLoaded', function(){ 
// 	anime({
// 		targets: 'body',
// 		translateY: [2000, 0], // Animate all divs translateX property to 250px
// 		easing: 'easeInOutCirc', // or easeInOutCirc or easeInOutElastic (originally easeInOutBack)
// 		rotate: '1turn',
// 		complete: setTimeout(function() {
// 			for(let i = 0, length1 = photoWrapper.length; i < length1; i++){
// 				photoWrapper[i].style.opacity = 1;
// 			}
// 		}, 1000)
// 	});
// });
// OR THIS:
// let photoWrapper = document.querySelectorAll('.grid-photos-item-child');
// document.addEventListener('DOMContentLoaded', function(){ 
// 	anime({
// 		targets: 'body',
// 		// translateY: [2000, 0], // Animate all divs translateX property to 250px
// 		easing: 'easeInOutCirc', // or easeInOutCirc or easeInOutElastic (originally easeInOutBack)
// 		// rotate: '1turn',
// 		scale: [0, 1],
// 		complete: function() {
// 			for(let i = 0, length1 = photoWrapper.length; i < length1; i++){
// 				photoWrapper[i].style.opacity = 1;
// 			}
// 		}
// 	});
// });

// var myTimeline3 = anime.timeline();
// myTimeline3
//   .add({
//     targets: 'body',
// 	translateY: [2000, 0], // Animate all divs translateX property to 250px
// 	easing: 'easeInOutCirc', // or easeInOutCirc or easeInOutElastic (originally easeInOutBack)
// 	rotate: '1turn'
//   })
//   .add({
//     targets: '.grid-photos-item',
//     delay: 2500,
// 	// translateY: [600, 0],
// 	// direction: 'reverse',
// 	scale: [0, 1],
// 	duration: 800,
// 	easing: 'easeInOutElastic', // or easeInOutQuint
// 	delay: function(target, index) {
// 		return index * 120;
// 	},
// 	elasticity: 200
// 	// elasticity: function(target, index, totalTargets) {
// 	// 	return 200 + ((totalTargets - index) * 200);
// 	// }
//   })


var myTimeline3 = anime.timeline();
myTimeline3
  .add({
    targets: 'body',
	translateY: [2000, 0], // Animate all divs translateX property to 250px
	easing: 'easeInOutCirc', // or easeInOutCirc or easeInOutElastic (originally easeInOutBack)
	rotate: '1turn'
  })
//   .add({
//     targets: '.photo-5, .photo-6',
//     translateX: [-2000,0],
//     // delay: 2500,
// 	// translateY: [-2000, 0],
// 	easing: 'easeOutQuint'
//   })
//   .add({
//     targets: '.photo-4, .photo-7',
//     translateX: [4000,0],
//     offset: '-=0',
//     // delay: 2500,
// 	// translateY: [-2000, 0],
// 	easing: 'easeOutQuint'
//   })
//   .add({
//     targets: '.photo-1, .photo-2, .photo-3',
//     translateY: [-2000,0],
//     offset: '-=0',
//     // delay: 2500,
// 	// translateY: [-2000, 0],
// 	easing: 'easeOutQuint'
//   })
//   .add({
//     targets: '.photo-8, .photo-11',
//     translateY: [4000,0],
//     offset: '-=0',
//     // delay: 2500,
// 	// translateY: [-2000, 0],
// 	easing: 'easeOutQuint'
//   })
//   .add({
//     targets: '.photo-9, .photo-10, .photo-12',
//     translateX: [-2000,0],
//     offset: '-=0',
//     // delay: 2500,
// 	// translateY: [-2000, 0],
// 	easing: 'easeOutQuint'
//   })

anime({
	targets: '.photo-5, .photo-6',
    translateX: [-2000,0],
    delay: 1400,
	easing: 'easeOutQuint'
});
anime({
	targets: '.photo-4, .photo-7',
    translateX: [4000,0],
    delay: 1400,
	easing: 'easeOutQuint'
});
anime({
	targets: '.photo-1, .photo-2, .photo-3',
    translateY: [-2000,0],
    delay: 1400,
	easing: 'easeOutQuint'
});
anime({
	targets: '.photo-8, .photo-11',
    translateY: [4000,0],
    delay: 1400,
	easing: 'easeOutQuint'
});
anime({
	targets: '.photo-9, .photo-10, .photo-12',
    translateX: [-2000,0],
    delay: 1400,
	easing: 'easeOutQuint'
});


let menuBtn = document.getElementById('menu-btn');
let closeBtn = document.getElementById('menu-close-btn');
let gridMenu = document.getElementById('easing');

// Hide menu on page load
gridMenu.style.display = 'none';

// let myTimeline = anime.timeline();


let moveItem1 = document.querySelector('.move-right-1');
let moveItem2 = document.querySelector('.move-right-2');
let moveItem3 = document.querySelector('.move-right-3');
let moveItem4 = document.querySelector('.move-right-4');
let moveItem5 = document.querySelector('.move-right-5');
let moveItem6 = document.querySelector('.move-right-6');
let moveItem7 = document.querySelector('.move-right-7');
let moveItem8 = document.querySelector('.move-right-8');
let moveItem9 = document.querySelector('.move-right-9');
let moveItem10 = document.querySelector('.move-right-10');

// Opening the menu
menuBtn.addEventListener('click', function(){
	// show menu
	gridMenu.style.display = "grid";

	// launch chain reaction (1 by 1)
	let myTimeline = anime.timeline();
	myTimeline
		.add({
			targets: '.move-right-1',
			translateX: [-200, 0],
			easing: 'easeInOutQuart', // toggle or change
			duration: 200,
			offset: 0
		})
		.add({
			targets: '.move-right-2',
			translateX: [-200, 0],
			easing: 'easeInOutQuart', // toggle or change
			duration: 200,
			// offset: 50
			offset: '-=50'
		})
		.add({
			targets: '.move-right-3',
			translateX: [-200, 0],
			easing: 'easeInOutQuart', // toggle or change
			duration: 200,
			// offset: 100
			offset: '-=100'
		})
		.add({
			targets: '.move-right-4',
			translateX: [-200, 0],
			easing: 'easeInOutQuart', // toggle or change
			duration: 300,
			// offset: 150
			offset: '-=150'
		})
		.add({
			targets: '.move-right-5',
			translateX: [-200, 0],
			easing: 'easeInOutQuart', // toggle or change
			duration: 400,
			// offset: 200
			offset: '-=200'
		})
		.add({
			targets: '.move-right-6',
			translateX: [-400, 0],
			easing: 'easeInOutQuart', // toggle or change
			duration: 500,
			// offset: 250
			offset: '-=250'
		})
		.add({
			targets: '.move-right-7',
			translateX: [-400, 0],
			easing: 'easeInOutQuart', // toggle or change
			duration: 500,
			// offset: 300
			offset: '-=300'
		})
		.add({
			targets: '.move-right-8',
			translateX: [-800, 0],
			easing: 'easeInOutQuart', // toggle or change
			duration: 500,
			// offset: 350
			offset: '-=350'
		})
		.add({
			targets: '.move-right-9',
			translateX: [-800, 0],
			easing: 'easeInOutQuart', // toggle or change
			duration: 600,
			// offset: 400
			offset: '-=400'
		})
		.add({
			targets: '.move-right-10',
			translateX: [1400, 0],
			easing: 'easeInOutQuart', // toggle or change
			duration: 700,
			// offset: 450
			offset: '-=450',
			// once animations are done, launch function below
			complete: function() {
			    moveItem1.style.zIndex = 5;
			    moveItem2.style.zIndex = 6;
			    moveItem3.style.zIndex = 6;
			    moveItem4.style.zIndex = 7;
			    moveItem5.style.zIndex = 7;
			    moveItem6.style.zIndex = 8;
			    moveItem7.style.zIndex = 8;
			    moveItem8.style.zIndex = 9;
			    moveItem9.style.zIndex = 9;
			}

		});
})

// Closing the menu
closeBtn.addEventListener('click', function(){
	let newTimeLine = anime.timeline(); // creates a chain reaction effect (1 by 1)
	newTimeLine
		.add({
			targets: '.move-right-1',
			translateX: '120vw',
			easing: 'easeInOutQuart', // toggle or change
			duration: 300,
			offset: 100
		})
		.add({
			targets: '.move-right-2',
			translateX: '120vw',
			easing: 'easeInOutQuart', // toggle or change
			duration: 300,
			offset: 200
		})
		.add({
			targets: '.move-right-3',
			translateX: '120vw',
			easing: 'easeInOutQuart', // toggle or change
			duration: 300,
			offset: 300
		})
		.add({
			targets: '.move-right-4',
			translateX: '120vw',
			easing: 'easeInOutQuart', // toggle or change
			duration: 300,
			offset: 400
		})
		.add({
			targets: '.move-right-5',
			translateX: '120vw',
			easing: 'easeInOutQuart', // toggle or change
			duration: 300,
			offset: 500
		})
		.add({
			targets: '.move-right-6',
			translateX: '120vw',
			easing: 'easeInOutQuart', // toggle or change
			duration: 300,
			offset: 600
		})
		.add({
			targets: '.move-right-7',
			translateX: '120vw',
			easing: 'easeInOutQuart', // toggle or change
			duration: 300,
			offset: 700
		})
		.add({
			targets: '.move-right-8',
			translateX: '120vw',
			easing: 'easeInOutQuart', // toggle or change
			duration: 300,
			offset: 800
		})
		.add({
			targets: '.move-right-9',
			translateX: '120vw',
			easing: 'easeInOutQuart', // toggle or change
			duration: 300,
			offset: 900
		})
		.add({
			targets: '.move-right-10',
			translateX: '120vw',
			easing: 'easeInOutQuart', // toggle or change
			duration: 300,
			offset: 1100,
			// once animations are done, launch function below
			complete: function() { 
			    moveItem1.style.zIndex = 10;
			    moveItem2.style.zIndex = 9;
			    moveItem3.style.zIndex = 10;
			    moveItem4.style.zIndex = 8;
			    moveItem5.style.zIndex = 10;
			    moveItem6.style.zIndex = 7;
			    moveItem7.style.zIndex = 10;
			    moveItem8.style.zIndex = 6;
			    moveItem9.style.zIndex = 10;
			    gridMenu.style.display = 'none';
			}
		})
		// .add({
		// 	targets: '#easing',
		// 	visibility: 'hidden'
		// });
})


/*
--------------------------------------------------------
	MASONRY SETUP
--------------------------------------------------------
*/

// let msnry = new Masonry( '.grid-photos', {
// 	itemSelector: '.grid-photos-item',
// 	columnWidth: 100,
// 	containerStyle: { position: 'absolute' }
// 	// gutter: 2
// });

/*
--------------------------------------------------------
	WEB PROJECTS
--------------------------------------------------------
*/

anime({
	targets: '#web-grid .web-project-1',
	background: '#232323',
	left: ['-100%', 0],
	translateY: '-50%',
	rotate: [-360, 0],
	duration: 1200,
	delay: 1000,
	easing: 'easeInOutBack',
	complete: function(){
		anime({
			targets: '#web-grid .web-project-1',
			height: 300,
			width: 200,
			duration: 800,
			easing: 'easeOutElastic', // or easeInOutBack
			elasticity: 550,
			complete: function(){
				anime({
					targets: '.web-grid-item img',
					opacity: 1,
					delay: 1000
				});
			}
		});
		anime({
			targets: '#web-grid .web-project-1',
			background: '#fff',
			delay: 300
		})
	}
});
anime({
	targets: '#web-grid .web-project-2',
	background: '#232323',
	bottom: ['-100%', 0],
	translateX: '-50%',
	rotate: [-180, 0],
	duration: 1200,
	delay: 1200,
	complete: function() {
		anime({
			targets: '#web-grid .web-project-2',
			height: 350,
			width: 350,
			duration: 800,
			easing: 'easeOutElastic', // or easeInOutBack
			elasticity: 550,
			complete: function(){
				anime({
					targets: '.web-grid-item img',
					opacity: 1,
					delay: 1000
				});
			}
		});
		anime({
			targets: '#web-grid .web-project-2',
			background: '#fff',
			delay: 300
		})
	}
});
anime({
	targets: '#web-grid .web-project-3',
	background: '#232323',
	right: ['-100%', 0],
	rotate: [-720, 0],
	duration: 1200,
	delay: 1500,
	complete: function() {
		anime({
			targets: '#web-grid .web-project-3',
			height: 200,
			width: 200,
			duration: 800,
			easing: 'easeOutElastic', // or easeInOutBack
			elasticity: 550,
			complete: function(){
				anime({
					targets: '.web-grid-item img',
					opacity: 1,
					delay: 300
				});
			}
		});
		anime({
			targets: '#web-grid .web-project-3',
			background: '#fff',
			delay: 300
		})
	}
})


/* ---------- Display web projects content ----------- */

// let webGridItem = document.getElementsByClassName('web-grid-item');
// let webProjectContent = document.getElementsByClassName('web-grid-item-content');
// let 

// for(let i = 0; i < webGridItem; i++){
// 	webGridItem[i].addEventListener('click', function(){
// 		console.log(webGridItem[i]);
// 		// for(let i = 0; i < webProjectContent.length; i++){
// 		// 	webProjectContent[i].style.display = 'block'
// 		// }
// 	});
// }


/*
--------------------------------------------------------
	SVG
--------------------------------------------------------
*/

let svgElement = document.querySelector('svg');

/* ---------- Home ----------- */

let homeLinkOne = document.getElementById('home-links-1'),
	homeLinkTwo = document.getElementById('home-links-2'),
	homeLinkThree = document.getElementById('home-links-3'),
	homeLinkFour = document.getElementById('home-links-4');

let homeSvgSurfaceOne = Snap('#home-1-shadeSVG'),
	homeSvgSurfaceTwo = Snap('#home-2-shadeSVG'),
	homeSvgSurfaceThree = Snap('#home-3-shadeSVG'),
	homeSvgSurfaceFour = Snap('#home-4-shadeSVG');

// homeSvgSurfaceTwo.width = window.innerWidth;
// homeSvgSurfaceTwo.height = window.innerHeight;

function loadHomeSVG () {
	let xPositionHomeOne = getOffset(homeLinkOne).x;
	let yPositionHomeOne = getOffset(homeLinkOne).y-2030;

	let xPositionHomeTwo = getOffset(homeLinkTwo).x;
	let yPositionHomeTwo = getOffset(homeLinkTwo).y-2030;

	let xPositionHomeThree = getOffset(homeLinkThree).x;
	let yPositionHomeThree = getOffset(homeLinkThree).y-2030;

	let xPositionHomeFour = getOffset(homeLinkFour).x;
	let yPositionHomeFour = getOffset(homeLinkFour).y-2030;

	drawHomeShadeSVG();

	anime({
		targets: '#home-1-shadeSVG, #home-links-1',
		translateX: [-250,0],
		translateY: [750,0],
		delay: 800,
		easing: 'easeOutCirc'
	});
	anime({
		targets: '#home-2-shadeSVG, #home-links-2',
		translateX: [-250,0],
		translateY: [750,0],
		delay: 1000,
		easing: 'easeOutCirc'
	});
	anime({
		targets: '#home-3-shadeSVG, #home-links-3',
		translateX: [-250,0],
		translateY: [750,0],
		delay: 1200,
		easing: 'easeOutCirc'
	});
	anime({
		targets: '#home-4-shadeSVG',
		translateX: [-250,0],
		translateY: [750,0],
		delay: 1400,
		easing: 'easeOutCirc'
	});
	anime({
		targets: '#home-links-4',
		translateX: [-250,0],
		translateY: [750,0],
		rotate: 45,
		delay: 1400,
		easing: 'easeOutCirc'
	});


	window.addEventListener('resize', function(){
		homeSvgSurfaceOne.clear();
		homeSvgSurfaceTwo.clear();
		homeSvgSurfaceThree.clear();
		homeSvgSurfaceFour.clear();
		
		// homeSvgSurfaceTwo.width = window.innerWidth;
		// homeSvgSurfaceTwo.height = window.innerHeight;

		xPositionHomeOne = getOffset(homeLinkOne).x+1;
		yPositionHomeOne = getOffset(homeLinkOne).y-30;

		xPositionHomeTwo = getOffset(homeLinkTwo).x;
		yPositionHomeTwo = getOffset(homeLinkTwo).y-30;

		xPositionHomeThree = getOffset(homeLinkThree).x;
		yPositionHomeThree = getOffset(homeLinkThree).y-30;

		xPositionHomeFour = getOffset(homeLinkFour).x;
		yPositionHomeFour = getOffset(homeLinkFour).y-30;

		drawHomeShadeSVG();
	}, false);

	function drawHomeShadeSVG () {
		let p1 = homeSvgSurfaceOne.polyline(xPositionHomeOne+48, yPositionHomeOne+57, xPositionHomeOne+2, yPositionHomeOne+45, xPositionHomeOne-1000, yPositionHomeOne+3000, xPositionHomeOne-910, yPositionHomeOne+3000, xPositionHomeOne+48, yPositionHomeOne+57);
		p1.attr({
		    fill: generateColour() // or #d2d2d2 OR rgb(204, 255, 144) OR rgb(255, 229, 127)
		});
		let p2 = homeSvgSurfaceTwo.polyline(xPositionHomeTwo+49, yPositionHomeTwo+80, xPositionHomeTwo, yPositionHomeTwo+30, xPositionHomeTwo-1000, yPositionHomeTwo+3000, xPositionHomeTwo-910, yPositionHomeTwo+3000, xPositionHomeTwo+49, yPositionHomeTwo+80);
		p2.attr({
		    fill: generateColour() // or #d2d2d2 OR rgb(185, 246, 202) OR rgb(255, 158, 128)
		});
		let p3 = homeSvgSurfaceThree.polyline(xPositionHomeThree+60, yPositionHomeThree+80, xPositionHomeThree, yPositionHomeThree+80, xPositionHomeThree-1000, yPositionHomeThree+3000, xPositionHomeThree-910, yPositionHomeThree+3000, xPositionHomeThree+60, yPositionHomeThree+80);
		p3.attr({
		    fill: generateColour() // or #d2d2d2 OR rgb(128, 216, 255) OR rgb(130, 177, 255)
		});
		let p4 = homeSvgSurfaceFour.polyline(xPositionHomeFour+56.57, yPositionHomeFour+59, xPositionHomeFour, yPositionHomeFour+59, xPositionHomeFour-1000, yPositionHomeFour+3000, xPositionHomeFour-910, yPositionHomeFour+3000, xPositionHomeFour+56.57, yPositionHomeFour+59);
		p4.attr({
		    fill: generateColour() // or #d2d2d2 OR rgb(255, 158, 128) OR rgb(132, 255, 255)
		});
	}
}


/* ---------- Web ----------- */

let webProjectOne = document.getElementById('web-project-1'),
	webProjectTwo = document.getElementById('web-project-2'),
	webProjectThree = document.getElementById('web-project-3');

let webSvgSurfaceOne = Snap('#web-1-shadeSVG'),
	webSvgSurfaceTwo = Snap('#web-2-shadeSVG'),
	webSvgSurfaceThree = Snap('#web-3-shadeSVG');

// webSvgSurfaceOne.width = window.innerWidth;
// webSvgSurfaceOne.height = window.innerHeight;

function loadWebSVG () {
	let xPositionWebOne = getOffset(webProjectOne).x+800;
	let yPositionWebOne = getOffset(webProjectOne).y-2150;

	let xPositionWebTwo = getOffset(webProjectTwo).x-175;
	let yPositionWebTwo = getOffset(webProjectTwo).y-2830;

	let xPositionWebThree = getOffset(webProjectThree).x-980;
	let yPositionWebThree = getOffset(webProjectThree).y-2000;

	drawWebShadeSVG();

	anime({
		targets: '#web-1-shadeSVG',
		translateX: [-250,0],
		translateY: [750,0],
		delay: 3000,
		easing: 'easeOutCirc'
	});
	anime({
		targets: '#web-2-shadeSVG',
		translateX: [750,0],
		translateY: [3000,0],
		delay: 3100,
		easing: 'easeOutCirc'
	});
	anime({
		targets: '#web-3-shadeSVG',
		translateX: [3000,0],
		translateY: [-1000,0],
		delay: 3200,
		easing: 'easeOutCirc'
	});


	window.addEventListener('resize', function(){
		webSvgSurfaceOne.clear();
		webSvgSurfaceTwo.clear();
		webSvgSurfaceThree.clear();
		
		// webSvgSurfaceOne.width = window.innerWidth;
		// webSvgSurfaceOne.height = window.innerHeight;

		xPositionWebOne = getOffset(webProjectOne).x;
		yPositionWebOne = getOffset(webProjectOne).y;

		xPositionWebTwo = getOffset(webProjectTwo).x;
		yPositionWebTwo = getOffset(webProjectTwo).y;

		xPositionWebThree = getOffset(webProjectThree).x;
		yPositionWebThree = getOffset(webProjectThree).y;

		drawWebShadeSVG();
	}, false);

	function drawWebShadeSVG () {
		let p1 = webSvgSurfaceOne.polyline(xPositionWebOne, yPositionWebOne, xPositionWebOne+200, yPositionWebOne, xPositionWebOne+200, yPositionWebOne+300, xPositionWebOne-800, yPositionWebOne+3000, xPositionWebOne-1000, yPositionWebOne+3000, xPositionWebOne, yPositionWebOne);
		p1.attr({
		    fill: '#FF8A80' // or #d2d2d2 OR rgb(204, 255, 144) OR rgb(255, 229, 127) OR #FF8A80 (OR generateColour())
		});
		let p2 = webSvgSurfaceTwo.polyline(xPositionWebTwo+350, yPositionWebTwo, xPositionWebTwo, yPositionWebTwo, xPositionWebTwo, yPositionWebTwo+350, xPositionWebTwo+750, yPositionWebTwo+3000, xPositionWebTwo+1000, yPositionWebTwo+3000, xPositionWebTwo+350, yPositionWebTwo);
		p2.attr({
		    fill: '#bc7cb8' // or #d2d2d2 OR rgb(185, 246, 202) OR rgb(255, 158, 128) OR #bc7cb8 (OR generateColour())
		});
		let p3 = webSvgSurfaceThree.polyline(xPositionWebThree, yPositionWebThree, xPositionWebThree, yPositionWebThree+200, xPositionWebThree+200, yPositionWebThree+200, xPositionWebThree+3000, yPositionWebThree-1000, xPositionWebThree+2200, yPositionWebThree-1000, xPositionWebThree, yPositionWebThree);
		p3.attr({
		    fill: '#84FFFF' // or #d2d2d2 OR rgb(128, 216, 255) OR rgb(130, 177, 255) OR #A7FFEB/#84FFFF (OR generateColour())
		});
	}
}



/* ---------- Photo ----------- */

let gridPhotos = document.querySelector('#grid-photos');
let photosSvgSurface = Snap('#photo-shadeSVG');
let photosShadeSVG = document.getElementById('photo-shadeSVG');

// photosSvgSurface.width = window.innerWidth;
// photosSvgSurface.height = window.innerHeight;

function loadPhotoSVG (argument) {
	let xPositionPhoto = getOffset(gridPhotos).x;
	let yPositionPhoto = getOffset(gridPhotos).y-2000;

	drawPhotoShadeSVG();

	anime({
		targets: '#photo-shadeSVG',
		translateX: [3000,0],
		translateY: [3000,0],
		delay: 800,
		easing: 'easeOutCirc'
	});

	window.addEventListener('resize', function(){
		photosSvgSurface.clear();
		
		// photosSvgSurface.width = window.innerWidth;
		// photosSvgSurface.height = window.innerHeight;

		xPositionPhoto = getOffset(gridPhotos).x;
		yPositionPhoto = getOffset(gridPhotos).y;

		drawPhotoShadeSVG();
	}, false);

	function drawPhotoShadeSVG () {
		let p2 = photosSvgSurface.polyline(xPositionPhoto, yPositionPhoto, xPositionPhoto+800, yPositionPhoto, xPositionPhoto+3000, yPositionPhoto+3000, xPositionPhoto+2200, yPositionPhoto+3000, xPositionPhoto, yPositionPhoto+500, xPositionPhoto, yPositionPhoto);
		document.querySelector('polyline').style.fill = '#232323';
		setInterval(function(){
			p2.attr({
			    fill: generateColour()
			});
		}, 60000)
	}
}

/* ---------- About ----------- */

let aboutImg = document.getElementById('about-img'),
	aboutText = document.getElementById('about-text');

let aboutSvgSurfaceOne = Snap('#about-1-shadeSVG'),
	aboutSvgSurfaceTwo = Snap('#about-2-shadeSVG');

// aboutSvgSurfaceOne.width = window.innerWidth;
// aboutSvgSurfaceOne.height = window.innerHeight;

function loadAboutSVG () {
	let xPositionAboutOne = getOffset(aboutImg).x;
	let yPositionAboutOne = getOffset(aboutImg).y-2000;

	let xPositionAboutTwo = getOffset(aboutText).x;
	let yPositionAboutTwo = getOffset(aboutText).y-2000;

	drawAboutShadeSVG();

	anime({
		targets: '#about-1-shadeSVG, #about-img',
		translateX: [-3000,0],
		translateY: [-3000,0],
		delay: 800,
		easing: 'easeOutCirc'
	});
	anime({
		targets: '#about-2-shadeSVG, #about-text',
		translateX: [3000,0],
		translateY: [3000,0],
		delay: 800,
		easing: 'easeOutCirc'
	});

	window.addEventListener('resize', function(){
		aboutSvgSurfaceOne.clear();
		aboutSvgSurfaceTwo.clear();
		
		// aboutSvgSurfaceOne.width = window.innerWidth;
		// aboutSvgSurfaceOne.height = window.innerHeight;

		xPositionAboutOne = getOffset(aboutImg).x;
		yPositionAboutOne = getOffset(aboutImg).y;

		xPositionAboutTwo = getOffset(aboutText).x;
		yPositionAboutTwo = getOffset(aboutText).y;

		drawAboutShadeSVG();
	}, false);

	function drawAboutShadeSVG () {
		let p1 = aboutSvgSurfaceOne.polyline(xPositionAboutOne+200, yPositionAboutOne, xPositionAboutOne+200, yPositionAboutOne+350, xPositionAboutOne, yPositionAboutOne+350, xPositionAboutOne-3000, yPositionAboutOne-3000, xPositionAboutOne-2650, yPositionAboutOne-3000, xPositionAboutOne+200, yPositionAboutOne);
		p1.attr({
		    fill: '#232323' // or #d2d2d2 OR rgb(204, 255, 144) OR rgb(255, 229, 127) OR #FF8A80 (OR generateColour())
		});
		let p2 = aboutSvgSurfaceTwo.polyline(xPositionAboutTwo+1, yPositionAboutTwo+420, xPositionAboutTwo+1, yPositionAboutTwo, xPositionAboutTwo+550, yPositionAboutTwo, xPositionAboutTwo+3000, yPositionAboutTwo+3000, xPositionAboutTwo+2580, yPositionAboutTwo+3000, xPositionAboutTwo+1, yPositionAboutTwo+420);
		p2.attr({
		    fill: '#232323' // or #d2d2d2 OR rgb(185, 246, 202) OR rgb(255, 158, 128) OR #bc7cb8 (OR generateColour())
		});
	}
}


/* ---------- General SVG function ----------- */

function generateColour () {
	let colours = ["#FF8A80", "#FF80AB", "#EA80FC", "#B388FF", "#8C9EFF", "#82B1FF", "#80D8FF", "#84FFFF", "#A7FFEB", "#B9F6CA", "#CCFF90", "#F4FF81", "#FFFF8D", "#FFE57F", "#FFD180", "#FF9E80"];
	let randomColor = colours[Math.floor(Math.random()*16)];
	console.log(randomColor);
	return randomColor;
}

// on page load, check what page is loaded
if (svgElement.getAttribute('data-svg') == "web") {
    loadWebSVG();
} else if (svgElement.getAttribute('data-svg') == "photo") {
	loadPhotoSVG();
} else if (svgElement.getAttribute('data-svg') == "home") {
	loadHomeSVG();
} else if (svgElement.getAttribute('data-svg') == "about") {
	loadAboutSVG();
	// change menu button colour to white
	document.getElementById('menu-btn').style.color = "white";
}


// function to get x and y positions of an element
function getOffset(el) {
  el = el.getBoundingClientRect();
  return {
    // left: el.left + window.scrollX,
    // top: el.top + window.scrollY
    left: el.left,
    top: el.top,
    x: el.x,
    y: el.y
  }
}




/*
--------------------------------------------------------
	CANVAS
--------------------------------------------------------
*/

// let myCanvas = document.getElementById('shadeCanvas');
// let context = myCanvas.getContext("2d");
// myCanvas.width = window.innerWidth;
// myCanvas.height = window.innerHeight;

// let xPosition = getOffset(webGrid).x;
// let yPosition = getOffset(webGrid).y-2000;

// drawWebShadeCanvas();

// window.addEventListener('resize', function(){
// 	console.log(xPosition + ' ' + yPosition);
// 	myCanvas.width = window.innerWidth;
// 	myCanvas.height = window.innerHeight;

// 	xPosition = getOffset(webGrid).x;
// 	yPosition = getOffset(webGrid).y;

// 	drawWebShadeCanvas();
// }, false);

// function drawWebShadeCanvas () {
// 	context.fillStyle = '#232323';
// 	context.beginPath();
// 	context.moveTo(xPosition, yPosition);
// 	context.lineTo(xPosition+702, yPosition);
// 	context.lineTo(xPosition+702, yPosition+312);
// 	context.lineTo(xPosition, yPosition+3000);
// 	context.lineTo(xPosition-700, yPosition+3000);
// 	context.lineTo(xPosition, yPosition);
// 	context.closePath();
// 	context.fill();
// }



// var 
	// Obtain a reference to the canvas element
	// using its id.
	// htmlCanvas = document.getElementById('c'),

  	// Obtain a graphics context on the
  	// canvas element for drawing.
  	// context = htmlCanvas.getContext('2d');

// Start listening to resize events and draw canvas.
// initialize();

// function initialize() {
// 	// Register an event listener to call the resizeCanvas() function each time the window is resized.
// 	window.addEventListener('resize', resizeCanvas, false);
	
// 	// Draw canvas border for the first time.
// 	resizeCanvas();
// }
	
// // Display custom canvas. In this case it's a blue, 5 pixel border that resizes along with the browser window.					
// function redraw() {
// 	// context.strokeStyle = 'blue';
// 	// context.lineWidth = '5';
// 	// context.strokeRect(0, 0, window.innerWidth, window.innerHeight);
// 	let p1 = svgSurface.polyline(0, 0, 700, 0, 700, 312, 350, 2000, -350, 2000);
// }

// // Runs each time the DOM window resize event fires.
// // Resets the canvas dimensions to match window,
// // then draws the new borders accordingly.
// function resizeCanvas() {
// 	svgSurface.width = window.innerWidth;
// 	svgSurface.height = window.innerHeight;
// 	redraw();
// }


