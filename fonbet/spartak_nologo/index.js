(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,65);


(lib.fott = function() {
	this.initialize(img.fott);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,146);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,217,66);


(lib.Rectangle1 = function() {
	this.initialize(img.Rectangle1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2000,150);


(lib.trener = function() {
	this.initialize(img.trener);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,149);


(lib.txt = function() {
	this.initialize(img.txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,81);// helper functions:

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


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Rectangle1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.059,1.059);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2117.4,158.8);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,235,65), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fott();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.148,1.148);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,202,167.6), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.trener();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.091,1.091);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,203,162.6), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,236,81), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(117.5,32.5,1,1,0,0,0,117.5,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.03,scaleY:1.03,x:117.6,y:32.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,235,65);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(101.5,81.3,1,1,0,0,0,101.5,81.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:86.2},24,cjs.Ease.get(-1)).to({y:91.3},25,cjs.Ease.get(1)).to({y:86.1},26,cjs.Ease.get(-1)).to({y:81.3},24,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,203,162.6);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(101,83.8,1,1,0,0,0,101,83.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:86.2},24,cjs.Ease.get(-1)).to({y:93.8},25,cjs.Ease.get(1)).to({y:91.3},25,cjs.Ease.get(-1)).to({y:83.8},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202,167.6);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo.png
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// button.png
	this.instance_1 = new lib.Symbol11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(117.5,103.5,1,1,0,0,0,117.5,32.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-2.9,0,241,136.9), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(1058.7,79.4,1,1,0,0,0,1058.7,79.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1053.8},24,cjs.Ease.get(-1)).to({x:1048.7},25,cjs.Ease.get(1)).to({x:1053.7},25,cjs.Ease.get(-1)).to({x:1058.7},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2117.4,158.8);


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
				stage.canvas.style.height = 150 + 'px';
				stage.canvas.width = windowSize.width;
				stage.canvas.height = 150;
					
				_this.txt.x = windowSize.width * 0.15;
				_this.txt.y = 75;	
			
				_this.button.x = (windowSize.width*0.85);
				_this.button.y = 75;	
			
				_this.tren.x = (windowSize.width*0.35);
				_this.tren.y = 75;
			
				_this.foot.x = windowSize.width*0.65;
				_this.foot.y = 75;
			
				_this.back.x = windowSize.width/2;
				_this.back.y = 75;
			
				
				
				_this.tren.scaleX = 0.9;
				_this.tren.scaleY = 0.9;
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
					
				}
				
				if(stage.canvas.width < 780){
				
				_this.tren.scaleX = 0.45;
				_this.tren.scaleY = 0.45;
				_this.foot.scaleX = 0.45;
				_this.foot.scaleY = 0.45;
					
				_this.txt.scaleX = 0.45;
				_this.txt.scaleY = 0.45;
				
				_this.button.scaleX = 0.45;
				_this.button.scaleY = 0.45;
					
					_this.txt.x = windowSize.width * 0.10;
					_this.button.x = (windowSize.width*0.85);
					
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
	this.button.setTransform(1058,71,1,1,0,0,0,119,56);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Layer 5
	this.foot = new lib.Symbol3();
	this.foot.parent = this;
	this.foot.setTransform(802,76.8,1,1,0,0,0,102,71.8);

	this.timeline.addTween(cjs.Tween.get(this.foot).wait(1));

	// Layer 3
	this.tren = new lib.Symbol5();
	this.tren.parent = this;
	this.tren.setTransform(385.5,75.3,1,1,0,0,0,99.5,69.3);

	this.timeline.addTween(cjs.Tween.get(this.tren).wait(1));

	// Layer 2
	this.txt = new lib.Symbol6();
	this.txt.parent = this;
	this.txt.setTransform(162,74.5,1,1,0,0,0,118,40.5);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 1
	this.back = new lib.Symbol1();
	this.back.parent = this;
	this.back.setTransform(603.7,77.4,1,1,0,0,0,1058.7,79.4);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(145,73,2117.4,174.6);
// library properties:
lib.properties = {
	width: 1200,
	height: 150,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/button.png?1497361893267", id:"button"},
		{src:"images/fott.png?1497361893267", id:"fott"},
		{src:"images/logo.png?1497361893267", id:"logo"},
		{src:"images/Rectangle1.jpg?1497361893267", id:"Rectangle1"},
		{src:"images/trener.png?1497361893267", id:"trener"},
		{src:"images/txt.png?1497361893267", id:"txt"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;