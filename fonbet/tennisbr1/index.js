(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,669,405);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,370);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,67);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,239);


(lib.hand1 = function() {
	this.initialize(img.hand1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,34);


(lib.handl = function() {
	this.initialize(img.handl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,103);


(lib.logored = function() {
	this.initialize(img.logored);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,56);


(lib.pobeda = function() {
	this.initialize(img.pobeda);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,70);


(lib.ser1 = function() {
	this.initialize(img.ser1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,73);


(lib.ser2 = function() {
	this.initialize(img.ser2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,74);


(lib.ser3 = function() {
	this.initialize(img.ser3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,72);


(lib.ser4 = function() {
	this.initialize(img.ser4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,71);// helper functions:

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


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,231,67), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.body();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,142,370), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,80,239), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,46,34), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.handl();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,41,103), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ser4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,70,71), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ser3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,73,72), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ser2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,81,74), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ser1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,86,73), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logored();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,180,56), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D52929").s().p("EgcMAkQMAAAhIfMA4ZAAAMAAABIfg");
	this.shape.setTransform(180.5,232);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,361,464), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,669,405), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(115.5,33.5,1,1,0,0,0,115.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({scaleX:0.98,scaleY:0.98,x:115.6,y:33.6},2,cjs.Ease.get(-1)).to({scaleX:0.94,scaleY:0.94,y:33.5},3,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96,y:33.6},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:115.5,y:33.5},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,231,67);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handl.png
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(36.5,203.5,1,1,0,0,0,30.5,98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.3,x:36.6,y:203.6},1,cjs.Ease.get(-1)).to({regX:30.6,regY:98.7,rotation:4.8,x:36.7,y:203.7},1,cjs.Ease.get(1)).to({rotation:2.3,x:36.6},1,cjs.Ease.get(-1)).to({regX:30.5,regY:98.5,rotation:0,x:36.5,y:203.5},1,cjs.Ease.get(1)).wait(1).to({rotation:2.3,x:36.6,y:203.6},1,cjs.Ease.get(-1)).to({regX:30.6,regY:98.7,rotation:4.8,x:36.7,y:203.7},1,cjs.Ease.get(1)).to({rotation:2.3,x:36.6},1,cjs.Ease.get(-1)).to({regX:30.5,regY:98.5,rotation:0,x:36.5,y:203.5},1,cjs.Ease.get(1)).wait(1).to({rotation:2.3,x:36.6,y:203.6},1,cjs.Ease.get(-1)).to({regX:30.6,regY:98.7,rotation:4.8,x:36.7,y:203.7},1,cjs.Ease.get(1)).to({rotation:2.3,x:36.6},1,cjs.Ease.get(-1)).to({regX:30.5,regY:98.5,rotation:0,x:36.5,y:203.5},1,cjs.Ease.get(1)).wait(1).to({rotation:2.3,x:36.6,y:203.6},1,cjs.Ease.get(-1)).to({regX:30.6,regY:98.7,rotation:4.8,x:36.7,y:203.7},1,cjs.Ease.get(1)).to({rotation:2.3,x:36.6},1,cjs.Ease.get(-1)).to({regX:30.5,regY:98.5,rotation:0,x:36.5,y:203.5},1,cjs.Ease.get(1)).wait(31));

	// hand1.png
	this.instance_1 = new lib.Symbol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(114,186,1,1,0,0,0,6,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:26.1,rotation:-4,x:114.1,y:186.2},1,cjs.Ease.get(-1)).to({rotation:-8.2},1,cjs.Ease.get(1)).to({rotation:-4,y:186.1},1,cjs.Ease.get(-1)).to({regY:26,rotation:0,x:114,y:186},1,cjs.Ease.get(1)).wait(1).to({regY:26.1,rotation:-4,x:114.1,y:186.2},1,cjs.Ease.get(-1)).to({rotation:-8.2},1,cjs.Ease.get(1)).to({rotation:-4,y:186.1},1,cjs.Ease.get(-1)).to({regY:26,rotation:0,x:114,y:186},1,cjs.Ease.get(1)).wait(1).to({regY:26.1,rotation:-4,x:114.1,y:186.2},1,cjs.Ease.get(-1)).to({rotation:-8.2},1,cjs.Ease.get(1)).to({rotation:-4,y:186.1},1,cjs.Ease.get(-1)).to({regY:26,rotation:0,x:114,y:186},1,cjs.Ease.get(1)).wait(1).to({regY:26.1,rotation:-4,x:114.1,y:186.2},1,cjs.Ease.get(-1)).to({rotation:-8.2},1,cjs.Ease.get(1)).to({rotation:-4,y:186.1},1,cjs.Ease.get(-1)).to({regY:26,rotation:0,x:114,y:186},1,cjs.Ease.get(1)).wait(31));

	// hand.png
	this.instance_2 = new lib.Symbol13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(148,171.5,1,1,0,0,0,15,164.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:164.6,rotation:-4,x:147.1,y:170.7},1,cjs.Ease.get(-1)).to({regX:15.1,rotation:-8.3,x:146.1,y:169.6},1,cjs.Ease.get(1)).to({rotation:-4,x:147.1,y:170.6},1,cjs.Ease.get(-1)).to({regX:15,regY:164.5,rotation:0,x:148,y:171.5},1,cjs.Ease.get(1)).wait(1).to({regY:164.6,rotation:-4,x:147.1,y:170.7},1,cjs.Ease.get(-1)).to({regX:15.1,rotation:-8.3,x:146.1,y:169.6},1,cjs.Ease.get(1)).to({rotation:-4,x:147.1,y:170.6},1,cjs.Ease.get(-1)).to({regX:15,regY:164.5,rotation:0,x:148,y:171.5},1,cjs.Ease.get(1)).wait(1).to({regY:164.6,rotation:-4,x:147.1,y:170.7},1,cjs.Ease.get(-1)).to({regX:15.1,rotation:-8.3,x:146.1,y:169.6},1,cjs.Ease.get(1)).to({rotation:-4,x:147.1,y:170.6},1,cjs.Ease.get(-1)).to({regX:15,regY:164.5,rotation:0,x:148,y:171.5},1,cjs.Ease.get(1)).wait(1).to({regY:164.6,rotation:-4,x:147.1,y:170.7},1,cjs.Ease.get(-1)).to({regX:15.1,rotation:-8.3,x:146.1,y:169.6},1,cjs.Ease.get(1)).to({rotation:-4,x:147.1,y:170.6},1,cjs.Ease.get(-1)).to({regX:15,regY:164.5,rotation:0,x:148,y:171.5},1,cjs.Ease.get(1)).wait(31));

	// body.png
	this.instance_3 = new lib.Symbol14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(71,185,1,1,0,0,0,71,185);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:186},1,cjs.Ease.get(-1)).to({y:184},1,cjs.Ease.get(1)).to({y:186},1,cjs.Ease.get(-1)).to({y:185},1,cjs.Ease.get(1)).wait(1).to({y:186},1,cjs.Ease.get(-1)).to({y:184},1,cjs.Ease.get(1)).to({y:186},1,cjs.Ease.get(-1)).to({y:185},1,cjs.Ease.get(1)).wait(1).to({y:186},1,cjs.Ease.get(-1)).to({y:184},1,cjs.Ease.get(1)).to({y:186},1,cjs.Ease.get(-1)).to({y:185},1,cjs.Ease.get(1)).wait(1).to({y:186},1,cjs.Ease.get(-1)).to({y:184},1,cjs.Ease.get(1)).to({y:186},1,cjs.Ease.get(-1)).to({y:185},1,cjs.Ease.get(1)).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213,370);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ser4.png
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(47,-57.5,1,1,0,0,0,35,35.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({y:-21.1,alpha:0.398},2,cjs.Ease.get(-1)).to({y:33.5,alpha:1},3,cjs.Ease.get(1)).wait(11).to({x:44},1).to({x:50},1).to({x:44},1).to({x:50},1).to({x:47},1).wait(28).to({y:-2.9,alpha:0.602},2,cjs.Ease.get(-1)).to({y:-57.5,alpha:0},3,cjs.Ease.get(1)).to({_off:true},1).wait(7));

	// ser3.png
	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(148.5,-53,1,1,0,0,0,36.5,36);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56).to({y:-16.6,alpha:0.398},2,cjs.Ease.get(-1)).to({y:38,alpha:1},3,cjs.Ease.get(1)).wait(27).to({x:145.5},1).to({x:151.5},1).to({x:145.5},1).to({x:151.5},1).to({x:148.5},1).wait(12).to({y:1.6,alpha:0.602},2,cjs.Ease.get(-1)).to({y:-53,alpha:0},3,cjs.Ease.get(1)).to({_off:true},1).wait(5));

	// ser2.png
	this.instance_2 = new lib.Symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(152.5,36,1,1,0,0,0,40.5,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({x:149.5},1).to({x:155.5},1).to({x:149.5},1).to({x:155.5},1).to({x:152.5},1).wait(17).to({y:4,alpha:0.602},2,cjs.Ease.get(-1)).to({y:-44,alpha:0},3,cjs.Ease.get(1)).wait(54).to({y:-12,alpha:0.398},2,cjs.Ease.get(-1)).to({y:36,alpha:1},3,cjs.Ease.get(1)).wait(1));

	// ser1.png
	this.instance_3 = new lib.Symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(45,37.5,1,1,0,0,0,43,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({x:42},1).to({x:48},1).to({x:42},1).to({x:48},1).to({x:45},1).wait(32).to({y:5.5,alpha:0.602},2,cjs.Ease.get(-1)).to({y:-42.5,alpha:0},3,cjs.Ease.get(1)).wait(54).to({y:-10.5,alpha:0.398},2,cjs.Ease.get(-1)).to({y:37.5,alpha:1},3,cjs.Ease.get(1)).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,-93,191,167);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(115.5,33.5,1,1,0,0,0,115.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,231,67);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(71,185,1,1,0,0,0,71,185);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,213,370), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(127,258,1,1,0,0,0,43,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.instance_1 = new lib.pobeda();
	this.instance_1.parent = this;
	this.instance_1.setTransform(107,143);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 3
	this.instance_2 = new lib.Symbol18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(171.5,335.5,1,1,0,0,0,115.5,33.5);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Symbol18(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(192,105,1,1,0,0,0,90,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Symbol 2
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(223.6,232,1,1.017,0,10.5,0,180.6,232);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,447,464), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 50;
		this.fon.y = - stage.mouseY / 50;
			
			this.girl.x = stage.mouseX / 50;
			this.girl.y = stage.mouseY / 50;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.girl = new lib.Symbol15();
	this.girl.parent = this;
	this.girl.setTransform(0,1,1,1,0,0,0,-79,-13);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Layer 3
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(518.5,168.1,1,1,0,0,0,223.5,232);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.fon = new lib.Symbol1();
	this.fon.parent = this;
	this.fon.setTransform(0.1,1,1,1,0,0,0,31.1,34);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(269,86.1,773,464);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1496328114693", id:"back"},
		{src:"images/body.png?1496328114693", id:"body"},
		{src:"images/button.png?1496328114693", id:"button"},
		{src:"images/hand.png?1496328114693", id:"hand"},
		{src:"images/hand1.png?1496328114693", id:"hand1"},
		{src:"images/handl.png?1496328114693", id:"handl"},
		{src:"images/logored.png?1496328114693", id:"logored"},
		{src:"images/pobeda.png?1496328114693", id:"pobeda"},
		{src:"images/ser1.png?1496328114693", id:"ser1"},
		{src:"images/ser2.png?1496328114693", id:"ser2"},
		{src:"images/ser3.png?1496328114693", id:"ser3"},
		{src:"images/ser4.png?1496328114693", id:"ser4"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;