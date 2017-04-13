(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2000,250);


(lib.blick = function() {
	this.initialize(img.blick);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,484,174);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,373,92);


(lib.kubok = function() {
	this.initialize(img.kubok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,238);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,217,66);


(lib.t1 = function() {
	this.initialize(img.t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,362,522);


(lib.t2 = function() {
	this.initialize(img.t2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,416,544);


(lib.txt = function() {
	this.initialize(img.txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,92);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(-94,-12,1.094,1.094);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-94,-12,2188.3,273.6), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blick();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.504,0.504);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,244,87.7), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kubok();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,142,238), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(7,63,0.587,0.587);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(7,63,219,54), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.t2();
	this.instance.parent = this;
	this.instance.setTransform(-17,-16,0.606,0.606);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-17,-16,252,329.6), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.t1();
	this.instance.parent = this;
	this.instance.setTransform(-2,-25,0.608,0.608);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-2,-25,220,317.3), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt();
	this.instance.parent = this;
	this.instance.setTransform(-27,3,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-27,3,283.9,78.2), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(122,43.9,0.115,0.247,0,0,0,122,43.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},8).to({alpha:0},8).wait(74));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(108,33,28,21.7);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(117.5,32.5,1,1,0,0,0,117.5,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.03,scaleY:1.03,x:117.6,y:32.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,63,219,54);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(-59,-23);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(99,68,1,1,0,0,0,71,119);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(28,-51,142,238), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(101.5,81.3,1,1,0,0,0,101.5,81.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:86.2},24,cjs.Ease.get(-1)).to({y:91.3},25,cjs.Ease.get(1)).to({y:86.1},26,cjs.Ease.get(-1)).to({y:81.3},24,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-25,220,317.3);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(98.5,65,1,1,0,0,0,98.5,65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(28,-51,142,238), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(101,83.8,1,1,0,0,0,101,83.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:86.2},24,cjs.Ease.get(-1)).to({y:93.8},25,cjs.Ease.get(1)).to({y:91.3},25,cjs.Ease.get(-1)).to({y:83.8},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-16,252,329.6);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo.png
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-14,26,1.199,1.199);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// button.png
	this.instance_1 = new lib.Symbol11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(117.8,91.6,1.199,1.199,0,0,0,117.5,32.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-17.9,26,269.2,169.4), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(1052,127,1,1,0,0,0,1000,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1044.6},39,cjs.Ease.get(-1)).to({x:1038},35,cjs.Ease.get(1)).to({x:1044.7},36,cjs.Ease.get(-1)).to({x:1052},39,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-10,2188.3,273.6);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Prepare
		var _this=this;
		function getWindowSize() { 
		                return {
				width: Math.min(document.documentElement.clientWidth,       window.innerWidth || 0),
				height: Math.min(document.documentElement.clientHeight,    window.innerHeight || 0)
		                }
		}
		window._setCanvasSize = function() {
				var windowSize = getWindowSize();
				stage.canvas.style.width = windowSize.width + 'px';
				stage.canvas.style.height = 250 + 'px';
				stage.canvas.width = windowSize.width;
				stage.canvas.height = 250;
					
				_this.txt.x = windowSize.width * 0.15;
				_this.txt.y = 125;	
			
				_this.button.x = (windowSize.width*0.85);
				_this.button.y = 125;	
			
				_this.tren.x = (windowSize.width*0.35);
				_this.tren.y = 125;
			
				_this.spart.x = windowSize.width/2;
				_this.spart.y = 125;
			
				_this.foot.x = windowSize.width*0.65;
				_this.foot.y = 125;
			
				_this.back.x = windowSize.width/2;
				_this.back.y = 125;
			
				
				
				_this.tren.scaleX = 0.9;
				_this.tren.scaleY = 0.9;
				_this.spart.scaleX = 0.9;
				_this.spart.scaleY = 0.9;
				_this.foot.scaleX = 0.9;
				_this.foot.scaleY = 0.9;
				
				_this.txt.scaleX = 0.9;
				_this.txt.scaleY = 0.9;
				
				_this.button.scaleX = 0.9;
				_this.button.scaleY = 0.9;
				
				
				if(stage.canvas.width < 1112){
				
				_this.txt.x = windowSize.width/12;
				_this.button.x = windowSize.width*0.87;
					_this.txt.x = windowSize.width * 0.15;
					_this.button.scaleX = 0.7;
					_this.button.scaleY = 0.7;
					_this.txt.scaleX = 0.7;
					_this.txt.scaleY = 0.7;
				}
				
				
				if(stage.canvas.width < 780){
		
				
				_this.tren.scaleX = 0.85;
				_this.tren.scaleY = 0.85;
				_this.spart.scaleX = 0.45;
				_this.spart.scaleY = 0.45;
				_this.foot.scaleX = 0.85;
				_this.foot.scaleY = 0.85;
					
				_this.txt.scaleX = 0.5;
				_this.txt.scaleY = 0.5;
				
				_this.button.scaleX = 0.45;
				_this.button.scaleY = 0.45;
					
					_this.txt.x = windowSize.width * 0.13;
					_this.button.x = windowSize.width*0.9;
					
					_this.spart.y = 188;
					
				}
				
				if(windowSize.width < 600){
				stage.canvas.width = 600;
				stage.canvas.style.width=600+'px';
					
					_this.txt.x = 78;
			
					_this.button.x = 535;
			
					_this.tren.x = 210;
			
					_this.spart.x = 310;
			
					_this.foot.x = 400;
					
				}
			
		}
		
		window.onresize=function(){_setCanvasSize();}
		
		//clickTAG
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		
		
		window.onresize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 6
	this.button = new lib.Symbol2();
	this.button.parent = this;
	this.button.setTransform(1056,124,1,1,0,0,0,117,109);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Layer 5
	this.foot = new lib.Symbol3();
	this.foot.parent = this;
	this.foot.setTransform(812,137.4,1,1,0,0,0,112,132.4);

	this.timeline.addTween(cjs.Tween.get(this.foot).wait(1));

	// Layer 4
	this.spart = new lib.Symbol4();
	this.spart.parent = this;
	this.spart.setTransform(598,108.1,1,1,0,0,0,98,46.1);

	this.timeline.addTween(cjs.Tween.get(this.spart).wait(1));

	// Layer 3
	this.tren = new lib.Symbol5();
	this.tren.parent = this;
	this.tren.setTransform(396,140.3,1,1,0,0,0,110,134.3);

	this.timeline.addTween(cjs.Tween.get(this.tren).wait(1));

	// Layer 2
	this.txt = new lib.Symbol6();
	this.txt.parent = this;
	this.txt.setTransform(173.3,128.5,1,1,0,0,0,129.3,45.5);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 1
	this.back = new lib.Symbol1();
	this.back.parent = this;
	this.back.setTransform(598,128.7,1,1,0,0,0,1053,130.7);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(103,106,2188.3,337.6);
// library properties:
lib.properties = {
	width: 1200,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1491898836557", id:"back"},
		{src:"images/blick.png?1491898836557", id:"blick"},
		{src:"images/button.png?1491898836557", id:"button"},
		{src:"images/kubok.png?1491898836557", id:"kubok"},
		{src:"images/logo.png?1491898836557", id:"logo"},
		{src:"images/t1.png?1491898836557", id:"t1"},
		{src:"images/t2.png?1491898836557", id:"t2"},
		{src:"images/txt.png?1491898836557", id:"txt"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;