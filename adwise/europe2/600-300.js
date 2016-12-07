(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,405);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,405);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,55);


(lib.ejednevni = function() {
	this.initialize(img.ejednevni);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,174);


(lib.ejenedzelni = function() {
	this.initialize(img.ejenedzelni);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,159);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,67);


(lib.pokerturniri = function() {
	this.initialize(img.pokerturniri);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,130);


(lib.spini = function() {
	this.initialize(img.spini);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,113);// helper functions:

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


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,720,405), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,720,405), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,240,55), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ejednevni();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,400,174), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ejenedzelni();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,400,159), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.spini();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,400,113), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pokerturniri();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,400,130), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg1.jpg
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(360,202.5,1,1,0,0,0,360,202.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(179).to({alpha:0},15).wait(40).to({alpha:1},10).wait(1));

	// bg2.jpg
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(360,202.5,1,1,0,0,0,360,202.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(245));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,720,405);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(200,79.5,1,1,0,0,0,200,79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,400,159), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pok
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(763.2,-56.6,0.379,0.379,0,0,0,200,65);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:757,y:-46,alpha:1},14,cjs.Ease.get(1)).wait(35).to({scaleX:0.38,scaleY:0.38,x:763.2,y:-56.6,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(180));

	// 200
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(768.2,-63.1,0.379,0.379,0,0,0,200.1,86.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60).to({_off:false},0).to({regX:200,regY:87,scaleX:1,scaleY:1,x:770.1,alpha:1},14,cjs.Ease.get(1)).wait(35).to({regX:200.1,regY:86.9,scaleX:0.38,scaleY:0.38,x:768.2,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(120));

	// 1000
	this.instance_2 = new lib.Символ8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(770.8,-60.3,0.379,0.379,0,0,0,200.1,79.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120).to({_off:false},0).to({regX:200,regY:79.5,scaleX:1,scaleY:1,x:776.9,y:-55.6,alpha:1},14,cjs.Ease.get(1)).wait(35).to({regX:200.1,regY:79.4,scaleX:0.38,scaleY:0.38,x:770.8,y:-60.3,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(60));

	// bt
	this.instance_3 = new lib.Символ7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(765.5,-44.3,0.379,0.379,0,0,0,120.1,27.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(179).to({_off:false},0).to({regX:120,regY:27.5,scaleX:1,scaleY:1,x:763.1,y:-13.6,alpha:1},14,cjs.Ease.get(1)).wait(35).to({regX:120.1,regY:27.4,scaleX:0.38,scaleY:0.38,x:765.5,y:-44.3,alpha:0},16,cjs.Ease.get(-1)).wait(1));

	// tex
	this.instance_4 = new lib.Символ4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(765.5,-74.7,0.379,0.379,0,0,0,200.1,56.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(179).to({_off:false},0).to({regX:200,regY:56.5,scaleX:1,scaleY:1,x:763,y:-93.6,alpha:1},14,cjs.Ease.get(1)).wait(35).to({regX:200.1,regY:56.4,scaleX:0.38,scaleY:0.38,x:765.5,y:-74.7,alpha:0},16,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(687.3,-81.3,151.7,49.3);


// stage content:
(lib._600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 2
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(205.5,393.5,1,1,0,0,0,657.5,220.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logo.png
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(418,238,0.851,0.851);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 9
	this.instance_2 = new lib.Символ9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(310.2,156.5,0.862,0.862,0,0,0,360,202.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,132,620.5,349);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg1.jpg?1480086978619", id:"bg1"},
		{src:"images/bg2.jpg?1480086978619", id:"bg2"},
		{src:"images/button.png?1480086978619", id:"button"},
		{src:"images/ejednevni.png?1480086978619", id:"ejednevni"},
		{src:"images/ejenedzelni.png?1480086978619", id:"ejenedzelni"},
		{src:"images/logo.png?1480086978619", id:"logo"},
		{src:"images/pokerturniri.png?1480086978619", id:"pokerturniri"},
		{src:"images/spini.png?1480086978619", id:"spini"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;