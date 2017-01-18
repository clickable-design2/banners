(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,110);


(lib.mech = function() {
	this.initialize(img.mech);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,40);


(lib.navedi = function() {
	this.initialize(img.navedi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,23);


(lib.pom = function() {
	this.initialize(img.pom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,33);


(lib.rogatka = function() {
	this.initialize(img.rogatka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,136);


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,120);


(lib.viki_03 = function() {
	this.initialize(img.viki_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,102);


(lib.viki_05 = function() {
	this.initialize(img.viki_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,77);


(lib.viki_08 = function() {
	this.initialize(img.viki_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,174);


(lib.viki_12 = function() {
	this.initialize(img.viki_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,38);


(lib.viki_16 = function() {
	this.initialize(img.viki_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,170);


(lib.viki_20 = function() {
	this.initialize(img.viki_20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,39);


(lib.viki_24 = function() {
	this.initialize(img.viki_24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,89);


(lib.viking_3s21 = function() {
	this.initialize(img.viking_3s21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,39);


(lib.viking_3ss21 = function() {
	this.initialize(img.viking_3ss21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,39);


(lib.viking_3sss21 = function() {
	this.initialize(img.viking_3sss21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,35);// helper functions:

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


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mech();
	this.instance.parent = this;
	this.instance.setTransform(-8,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ62, new cjs.Rectangle(-8,-20,16,40), null);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.navedi();
	this.instance.parent = this;
	this.instance.setTransform(-51,-6,0.518,0.518);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(-51,-6,116.1,11.9), null);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ57, new cjs.Rectangle(-232,-37.3,464.2,74.7), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(-233.1,-47.1,466.2,94.4), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(-221.5,-48.9,443.1,97.9), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viking_3sss21();
	this.instance.parent = this;
	this.instance.setTransform(17,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(17,-15,26,35), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viking_3ss21();
	this.instance.parent = this;
	this.instance.setTransform(-24,141.6,1.255,1.255,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(-24,-142,49,283.6), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEB13C").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-221.5,-48.9,443.1,97.9), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEB13C").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-232,-37.3,464.2,74.7), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEB13C").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-233.1,-47.2,466.2,94.4), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("A5sfVMAAAg+pMAzZAAAMAAAA+pg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("EgdTAgMMAAAhAXMA6nAAAMAAABAXg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pom();
	this.instance.parent = this;
	this.instance.setTransform(-15,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-15,-16.5,30,33), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pom();
	this.instance.parent = this;
	this.instance.setTransform(-15,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-15,-16.5,30,33), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pom();
	this.instance.parent = this;
	this.instance.setTransform(-15,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-15,-16.5,30,33), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-100,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-100,-55,200,110), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(7.4,1,1).p("ABzjNQAbAPAYAYQAhAhARAnAjXheQARgnAgghQASgRATgNAiBDFQgTgNgSgSQgegegRgkADWBkQgRAkgfAeQgYAYgbAQ");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-25.2,-24.2,50.5,48.4), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(3,1,1).p("Egu3gXbMBdvAAAMAAAAu3MhdvAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-301.5,-151.5,603,303), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.parent = this;
	this.instance.setTransform(-25,-47.2,1,0.788);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-25,-47.2,50,94.5), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rogatka();
	this.instance.parent = this;
	this.instance.setTransform(-30,-40.8,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-30,-40.8,60,81.6), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Eip8BVoMAAAirPMFT5AAAMAAACrPg");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-1087.7,-547.9,2175.5,1096.1), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viki_12();
	this.instance.parent = this;
	this.instance.setTransform(-23,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-23,-19,46,38), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viki_03();
	this.instance.parent = this;
	this.instance.setTransform(-58,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-58,-51,116,102), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viki_20();
	this.instance.parent = this;
	this.instance.setTransform(-25.5,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-25.5,-19.5,51,39), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viki_24();
	this.instance.parent = this;
	this.instance.setTransform(-60.5,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-60.5,-44.5,121,89), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viki_08();
	this.instance.parent = this;
	this.instance.setTransform(-64.5,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-64.5,-87,129,174), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viki_05();
	this.instance.parent = this;
	this.instance.setTransform(-46,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-46,-38.5,92,77), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viki_16();
	this.instance.parent = this;
	this.instance.setTransform(-44,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-44,-85,88,170), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-300,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-300,-150,600,300), null);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.parent = this;
	this.instance.setTransform(0,20.2,1,1,0,0,0,0,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:22.2,y:20.3},3,cjs.Ease.get(1)).to({rotation:0,y:20.2},3,cjs.Ease.get(1)).to({rotation:22.2,y:20.3},3,cjs.Ease.get(1)).to({rotation:0,y:20.2},3,cjs.Ease.get(1)).to({rotation:22.2,y:20.3},3,cjs.Ease.get(1)).to({rotation:0,y:20.2},3,cjs.Ease.get(1)).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-20,16,40);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ61();
	this.instance.parent = this;
	this.instance.setTransform(-40,-30.2,0.615,0.615,30,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ60();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-126,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(-177,-43.2,147.4,26.2), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(0,-1.4);

	this.instance_1 = new lib.Символ53();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(-221.5,-50.4,443.1,100.8), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(-30.5,-117.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-6.6},9,cjs.Ease.get(-1)).to({y:117},10,cjs.Ease.get(1)).to({y:-0.4},10,cjs.Ease.get(-1)).to({y:-117.8},10,cjs.Ease.get(1)).wait(1));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_1 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_2 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_3 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_4 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_5 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_6 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_7 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_8 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_9 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_10 = new cjs.Graphics().p("Ai9UZMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_11 = new cjs.Graphics().p("Ai9WEMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_12 = new cjs.Graphics().p("Ai9XiMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_13 = new cjs.Graphics().p("Ai9Y0MAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_14 = new cjs.Graphics().p("Ai9Z5MAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_15 = new cjs.Graphics().p("Ai9axMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_16 = new cjs.Graphics().p("Ai9bdMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_17 = new cjs.Graphics().p("Ai9b9MAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_18 = new cjs.Graphics().p("Ai9cQMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_19 = new cjs.Graphics().p("Ai9cWMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_20 = new cjs.Graphics().p("Ai9cQMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_21 = new cjs.Graphics().p("Ai9b+MAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_22 = new cjs.Graphics().p("Ai9bgMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_23 = new cjs.Graphics().p("Ai9a2MAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_24 = new cjs.Graphics().p("Ai9aBMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_25 = new cjs.Graphics().p("Ai9Y/MAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_26 = new cjs.Graphics().p("Ai9XxMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_27 = new cjs.Graphics().p("Ai9WYMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_28 = new cjs.Graphics().p("Ai9UyMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_29 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_30 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_31 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_32 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_33 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_34 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_35 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_36 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_37 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_38 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_39 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.2,y:1.8}).wait(1).to({graphics:mask_graphics_1,x:0.2,y:3.2}).wait(1).to({graphics:mask_graphics_2,x:0.2,y:7.4}).wait(1).to({graphics:mask_graphics_3,x:0.2,y:14.4}).wait(1).to({graphics:mask_graphics_4,x:0.2,y:24.1}).wait(1).to({graphics:mask_graphics_5,x:0.2,y:36.7}).wait(1).to({graphics:mask_graphics_6,x:0.2,y:52.1}).wait(1).to({graphics:mask_graphics_7,x:0.2,y:70.2}).wait(1).to({graphics:mask_graphics_8,x:0.2,y:91.2}).wait(1).to({graphics:mask_graphics_9,x:0.2,y:114.9}).wait(1).to({graphics:mask_graphics_10,x:0.2,y:130.5}).wait(1).to({graphics:mask_graphics_11,x:0.2,y:141.2}).wait(1).to({graphics:mask_graphics_12,x:0.2,y:150.6}).wait(1).to({graphics:mask_graphics_13,x:0.2,y:158.8}).wait(1).to({graphics:mask_graphics_14,x:0.2,y:165.7}).wait(1).to({graphics:mask_graphics_15,x:0.2,y:171.3}).wait(1).to({graphics:mask_graphics_16,x:0.2,y:175.7}).wait(1).to({graphics:mask_graphics_17,x:0.2,y:178.9}).wait(1).to({graphics:mask_graphics_18,x:0.2,y:180.8}).wait(1).to({graphics:mask_graphics_19,x:0.2,y:181.4}).wait(1).to({graphics:mask_graphics_20,x:0.2,y:180.8}).wait(1).to({graphics:mask_graphics_21,x:0.2,y:179}).wait(1).to({graphics:mask_graphics_22,x:0.2,y:176}).wait(1).to({graphics:mask_graphics_23,x:0.2,y:171.8}).wait(1).to({graphics:mask_graphics_24,x:0.2,y:166.5}).wait(1).to({graphics:mask_graphics_25,x:0.2,y:159.9}).wait(1).to({graphics:mask_graphics_26,x:0.2,y:152.1}).wait(1).to({graphics:mask_graphics_27,x:0.2,y:143.2}).wait(1).to({graphics:mask_graphics_28,x:0.2,y:133}).wait(1).to({graphics:mask_graphics_29,x:0.2,y:121.2}).wait(1).to({graphics:mask_graphics_30,x:0.2,y:98.5}).wait(1).to({graphics:mask_graphics_31,x:0.2,y:78.2}).wait(1).to({graphics:mask_graphics_32,x:0.2,y:60.3}).wait(1).to({graphics:mask_graphics_33,x:0.2,y:44.8}).wait(1).to({graphics:mask_graphics_34,x:0.2,y:31.7}).wait(1).to({graphics:mask_graphics_35,x:0.2,y:20.9}).wait(1).to({graphics:mask_graphics_36,x:0.2,y:12.5}).wait(1).to({graphics:mask_graphics_37,x:0.2,y:6.6}).wait(1).to({graphics:mask_graphics_38,x:0.2,y:3}).wait(1).to({graphics:mask_graphics_39,x:0.2,y:1.8}).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ50();
	this.instance_1.parent = this;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.8,-132.8,38,256.8);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ46();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ57();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,3);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-234,-39,468,79);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-234,-37.3,472,83), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ45();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ56();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,2.8);
	this.instance_1.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance_1.cache(-235,-49,470,98);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-234.1,-47.2,472,100.8), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 44
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(486.3,0.3,1,1,0,0,0,232.1,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:232.2,scaleX:1.22,scaleY:1.22,x:486.4},9,cjs.Ease.get(1)).to({regX:232.1,scaleX:1,scaleY:1,x:593.8},15,cjs.Ease.get(1)).to({x:486.3},9,cjs.Ease.get(1)).wait(1));

	// Символ 43
	this.instance_1 = new lib.Символ43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-486.2,1.4,1,1,0,0,0,-233.1,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-593.8},9,cjs.Ease.get(1)).to({regX:-233.2,regY:1.2,scaleX:1.26,scaleY:1.26,x:-486.4,y:1.2},15,cjs.Ease.get(1)).to({regX:-233.1,regY:1.4,scaleX:1,scaleY:1,x:-486.2,y:1.4},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-487.2,-47.2,979.4,100.8);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pom.png
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(-80,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({y:-6.5},5,cjs.Ease.get(1)).to({y:-1.5},5,cjs.Ease.get(1)).to({y:-6.5},5,cjs.Ease.get(1)).to({y:-1.5},5,cjs.Ease.get(1)).wait(12));

	// pom.png
	this.instance_1 = new lib.Символ37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-40,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({y:-6.5},5,cjs.Ease.get(1)).to({y:-1.5},5,cjs.Ease.get(1)).to({y:-6.5},5,cjs.Ease.get(1)).to({y:-1.5},5,cjs.Ease.get(1)).wait(15));

	// pom.png
	this.instance_2 = new lib.Символ38();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:-6.5},5,cjs.Ease.get(1)).to({y:-1.5},5,cjs.Ease.get(1)).to({y:-6.5},5,cjs.Ease.get(1)).to({y:-1.5},5,cjs.Ease.get(1)).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-18,110,33);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.alpha = 0.352;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},12,cjs.Ease.get(1)).to({alpha:0.352},12,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-55,200,110);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 30
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.416,0.416);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:12.2},0).wait(1).to({rotation:24.4},0).wait(1).to({rotation:36.6},0).wait(1).to({rotation:48.8},0).wait(1).to({rotation:61},0).wait(1).to({rotation:73.2},0).wait(1).to({rotation:85.4},0).wait(1).to({rotation:97.6},0).wait(1).to({rotation:109.8},0).wait(1).to({rotation:122},0).wait(1).to({rotation:134.2},0).wait(1).to({rotation:146.4},0).wait(1).to({rotation:158.6},0).wait(1).to({rotation:170.8},0).wait(1).to({rotation:183.1},0).wait(1).to({rotation:195.3},0).wait(1).to({rotation:207.5},0).wait(1).to({rotation:219.7},0).wait(1).to({rotation:231.9},0).wait(1).to({rotation:244.1},0).wait(1).to({rotation:256.3},0).wait(1).to({rotation:268.5},0).wait(1).to({rotation:280.7},0).wait(1).to({rotation:292.9},0).wait(1).to({rotation:305.1},0).wait(1).to({rotation:317.3},0).wait(1).to({rotation:329.5},0).wait(1).to({rotation:341.7},0).wait(1).to({rotation:353.9},0).wait(1).to({rotation:366.1},0).wait(1).to({rotation:378.3},0).wait(1).to({rotation:390.5},0).wait(1).to({rotation:402.7},0).wait(1).to({rotation:414.9},0).wait(1).to({rotation:427.1},0).wait(1).to({rotation:439.3},0).wait(1).to({rotation:451.5},0).wait(1).to({rotation:463.7},0).wait(1).to({rotation:475.9},0).wait(1).to({rotation:488.1},0).wait(1).to({rotation:500.3},0).wait(1).to({rotation:512.5},0).wait(1).to({rotation:524.7},0).wait(1).to({rotation:536.9},0).wait(1).to({rotation:549.2},0).wait(1).to({rotation:561.4},0).wait(1).to({rotation:573.6},0).wait(1).to({rotation:585.8},0).wait(1).to({rotation:598},0).wait(1).to({rotation:610.2},0).wait(1).to({rotation:622.4},0).wait(1).to({rotation:634.6},0).wait(1).to({rotation:646.8},0).wait(1).to({rotation:659},0).wait(1).to({rotation:671.2},0).wait(1).to({rotation:683.4},0).wait(1).to({rotation:695.6},0).wait(1).to({rotation:707.8},0).wait(1).to({rotation:720},0).wait(1));

	// Символ 30
	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:-6.1},0).wait(1).to({rotation:-12.2},0).wait(1).to({rotation:-18.3},0).wait(1).to({rotation:-24.4},0).wait(1).to({rotation:-30.5},0).wait(1).to({rotation:-36.6},0).wait(1).to({rotation:-42.7},0).wait(1).to({rotation:-48.8},0).wait(1).to({rotation:-54.9},0).wait(1).to({rotation:-61},0).wait(1).to({rotation:-67.1},0).wait(1).to({rotation:-73.2},0).wait(1).to({rotation:-79.3},0).wait(1).to({rotation:-85.4},0).wait(1).to({rotation:-91.5},0).wait(1).to({rotation:-97.6},0).wait(1).to({rotation:-103.7},0).wait(1).to({rotation:-109.8},0).wait(1).to({rotation:-115.9},0).wait(1).to({rotation:-122},0).wait(1).to({rotation:-128.1},0).wait(1).to({rotation:-134.2},0).wait(1).to({rotation:-140.3},0).wait(1).to({rotation:-146.4},0).wait(1).to({rotation:-152.5},0).wait(1).to({rotation:-158.6},0).wait(1).to({rotation:-164.7},0).wait(1).to({rotation:-170.8},0).wait(1).to({rotation:-176.9},0).wait(1).to({rotation:-183.1},0).wait(1).to({rotation:-189.2},0).wait(1).to({rotation:-195.3},0).wait(1).to({rotation:-201.4},0).wait(1).to({rotation:-207.5},0).wait(1).to({rotation:-213.6},0).wait(1).to({rotation:-219.7},0).wait(1).to({rotation:-225.8},0).wait(1).to({rotation:-231.9},0).wait(1).to({rotation:-238},0).wait(1).to({rotation:-244.1},0).wait(1).to({rotation:-250.2},0).wait(1).to({rotation:-256.3},0).wait(1).to({rotation:-262.4},0).wait(1).to({rotation:-268.5},0).wait(1).to({rotation:-274.6},0).wait(1).to({rotation:-280.7},0).wait(1).to({rotation:-286.8},0).wait(1).to({rotation:-292.9},0).wait(1).to({rotation:-299},0).wait(1).to({rotation:-305.1},0).wait(1).to({rotation:-311.2},0).wait(1).to({rotation:-317.3},0).wait(1).to({rotation:-323.4},0).wait(1).to({rotation:-329.5},0).wait(1).to({rotation:-335.6},0).wait(1).to({rotation:-341.7},0).wait(1).to({rotation:-347.8},0).wait(1).to({rotation:-353.9},0).wait(1).to({rotation:-360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,-24.2,50.5,48.4);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.531},14,cjs.Ease.get(1)).to({alpha:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-301.5,-151.5,603,303);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-0.5,y:-2.5},2).to({x:0,y:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-47.2,50,94.5);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(-8.2,11.8,1,1,10.7,0,0,4.8,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:4.9,rotation:-5.5,x:5.8},19,cjs.Ease.get(-1)).to({regX:4.8,regY:-32.4,rotation:-22.7,x:20.4},20,cjs.Ease.get(1)).to({regX:4.9,rotation:-5,x:5.5},21,cjs.Ease.get(-1)).to({regX:4.8,regY:-32.5,rotation:10.7,x:-8.2},19,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIDoFHIIplH");
	this.shape.setTransform(0,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIDqFHIInlH");
	this.shape_1.setTransform(0,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIDsFHIIllH");
	this.shape_2.setTransform(0,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIDwFHIIhlH");
	this.shape_3.setTransform(0,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijID0FHIIdlH");
	this.shape_4.setTransform(0,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijID5FHIIYlH");
	this.shape_5.setTransform(0,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIEAFHIIRlH");
	this.shape_6.setTransform(0,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIEHFHIIKlH");
	this.shape_7.setTransform(0,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIEPFHIIClH");
	this.shape_8.setTransform(0,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIEZFHIH4lH");
	this.shape_9.setTransform(0,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIEjFHIHulH");
	this.shape_10.setTransform(0,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIEuFHIHjlH");
	this.shape_11.setTransform(0,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIE6FHIHXlH");
	this.shape_12.setTransform(0,0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIFIFHIHJlH");
	this.shape_13.setTransform(0,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIFWFHIG7lH");
	this.shape_14.setTransform(0,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIFlFHIGslH");
	this.shape_15.setTransform(0,0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIF1FHIGclH");
	this.shape_16.setTransform(0,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIGGFHIGLlH");
	this.shape_17.setTransform(0,0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIGYFHIF5lH");
	this.shape_18.setTransform(0,0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIGqFHIFnlH");
	this.shape_19.setTransform(0,0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIG7FHIFWlH");
	this.shape_20.setTransform(0,0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIHLFHIFGlH");
	this.shape_21.setTransform(0,0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIHaFHIE3lH");
	this.shape_22.setTransform(0,0.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIHoFHIEplH");
	this.shape_23.setTransform(0,0.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIH2FHIEblH");
	this.shape_24.setTransform(0,0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIICFHIEPlH");
	this.shape_25.setTransform(0,0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIIOFHIEDlH");
	this.shape_26.setTransform(0,0.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIIZFHID4lH");
	this.shape_27.setTransform(0,0.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIIiFHIDvlH");
	this.shape_28.setTransform(0,0.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIIrFHIDmlH");
	this.shape_29.setTransform(0,0.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIIzFHIDelH");
	this.shape_30.setTransform(0,0.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijII6FHIDXlH");
	this.shape_31.setTransform(0,0.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIJAFHIDRlH");
	this.shape_32.setTransform(0,0.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIJFFHIDMlH");
	this.shape_33.setTransform(0,0.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIJKFHIDHlH");
	this.shape_34.setTransform(0,0.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIJNFHIDElH");
	this.shape_35.setTransform(0,0.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIJQFHIDBlH");
	this.shape_36.setTransform(0,0.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIJRFHIDAlH");
	this.shape_37.setTransform(0,0.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIJSFHIC/lH");
	this.shape_38.setTransform(0,0.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIJOFHIDDlH");
	this.shape_39.setTransform(0,0.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIJLFHIDGlH");
	this.shape_40.setTransform(0,0.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIJHFHIDKlH");
	this.shape_41.setTransform(0,0.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIJCFHIDPlH");
	this.shape_42.setTransform(0,0.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijII9FHIDUlH");
	this.shape_43.setTransform(0,0.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijII2FHIDblH");
	this.shape_44.setTransform(0,0.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIIvFHIDilH");
	this.shape_45.setTransform(0,0.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIInFHIDqlH");
	this.shape_46.setTransform(0,0.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIIdFHID0lH");
	this.shape_47.setTransform(0,0.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIIUFHID9lH");
	this.shape_48.setTransform(0,0.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIIJFHIEIlH");
	this.shape_49.setTransform(0,0.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIH9FHIEUlH");
	this.shape_50.setTransform(0,0.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIHxFHIEglH");
	this.shape_51.setTransform(0,0.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIHjFHIEulH");
	this.shape_52.setTransform(0,0.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIHVFHIE8lH");
	this.shape_53.setTransform(0,0.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIHGFHIFLlH");
	this.shape_54.setTransform(0,0.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIG2FHIFblH");
	this.shape_55.setTransform(0,0.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIGlFHIFslH");
	this.shape_56.setTransform(0,0.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIGTFHIF+lH");
	this.shape_57.setTransform(0,0.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIGCFHIGPlH");
	this.shape_58.setTransform(0,0.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIFyFHIGflH");
	this.shape_59.setTransform(0,0.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIFiFHIGvlH");
	this.shape_60.setTransform(0,0.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIFUFHIG9lH");
	this.shape_61.setTransform(0,0.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIFGFHIHLlH");
	this.shape_62.setTransform(0,0.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIE5FHIHYlH");
	this.shape_63.setTransform(0,0.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIEtFHIHklH");
	this.shape_64.setTransform(0,0.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIEiFHIHvlH");
	this.shape_65.setTransform(0,0.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijIEYFHIH5lH");
	this.shape_66.setTransform(0,0.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FF0000").ss(2,1,1).p("AmIijID6FHIIXlH");
	this.shape_67.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.3,-17.2,92.6,111.1);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:3},2).to({y:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-40.8,60,81.6);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-23,-19,46,38), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-58,-51,116,102), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-25.5,-19.5,51,39), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-60.5,-44.5,121,89), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-64.5,-87,129,174), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-46,-38.5,92,77), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-44,-85,88,170), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_108 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_167 = function() {
		this.gotoAndPlay(109);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(108).call(this.frame_108).wait(59).call(this.frame_167).wait(1));

	// Слой 10
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(-96.9,4.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(104).to({_off:false},0).to({alpha:0.539},1).to({alpha:0},2).to({_off:true},1).wait(56).to({_off:false},0).to({alpha:0.539},1).to({x:-102.9,y:8.1,alpha:0},1).to({_off:true},1).wait(1));

	// viki_03.png
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-78.2,-16.5,1,1,0,0,0,-17.2,41.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100).to({_off:false},0).to({scaleX:1.31,scaleY:1.31,rotation:48,x:-57.5,y:-34.5},4,cjs.Ease.get(1)).to({regY:41.4,scaleX:0.94,scaleY:0.94,rotation:0,skewX:132.6,skewY:-47.4,x:-63.2,y:56.7},3,cjs.Ease.get(1)).to({_off:true},1).wait(51).to({_off:false,regY:41.5,scaleX:1,scaleY:1,skewX:0,skewY:0,x:-78.2,y:-16.5},0).to({scaleX:1.31,scaleY:1.31,rotation:48,x:-57.5,y:-34.5},4,cjs.Ease.get(1)).to({regY:41.4,scaleX:0.94,scaleY:0.94,rotation:0,skewX:132.6,skewY:-47.4,x:-63.2,y:56.7},3,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// viki_16.png
	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(63.5,28.9,1,1,0,0,0,-23.5,-35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-23.4,scaleX:1.34,rotation:0.7,x:11,y:28.6},24,cjs.Ease.get(1)).to({regX:-23.5,scaleX:1,rotation:0,x:63.5,y:28.9},25,cjs.Ease.get(1)).wait(1).to({regX:-23.4,scaleX:1.34,rotation:0.7,x:11,y:28.6},24,cjs.Ease.get(1)).to({regX:-23.5,scaleX:1,rotation:0,x:63.5,y:28.9},25,cjs.Ease.get(1)).wait(1).to({regX:-23.4,regY:-34.9,scaleX:1.31,scaleY:1.31,rotation:-2.2,x:17.5,y:0.4},4,cjs.Ease.get(1)).to({regY:-35,scaleX:1,scaleY:1,rotation:-22.1,x:37.9,y:6.8},3,cjs.Ease.get(1)).wait(1).to({regX:-23.5,regY:-35.1,rotation:0,x:63.5,y:28.9},0).wait(1).to({regX:-23.4,scaleX:1.34,rotation:0.7,x:11,y:28.6},24,cjs.Ease.get(1)).to({regX:-23.5,scaleX:1,rotation:0,x:63.5,y:28.9},25,cjs.Ease.get(1)).wait(1).to({regX:-23.4,regY:-34.9,scaleX:1.31,scaleY:1.31,rotation:-2.2,x:17.5,y:0.4},4,cjs.Ease.get(1)).to({regY:-35,scaleX:1,scaleY:1,rotation:-22.1,x:37.9,y:6.8},3,cjs.Ease.get(1)).wait(1).to({regX:-23.5,regY:-35.1,rotation:0,x:63.5,y:28.9},0).wait(1));

	// viki_05.png
	this.instance_3 = new lib.Символ6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-22,-6,1,1,0,0,0,-15,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-15.1,rotation:7.7,x:-30.1,y:-0.5},24,cjs.Ease.get(1)).to({regX:-15,rotation:0,x:-22,y:-6},25,cjs.Ease.get(1)).wait(1).to({regX:-15.1,rotation:7.7,x:-30.1,y:-0.5},24,cjs.Ease.get(1)).to({regX:-15,rotation:0,x:-22,y:-6},25,cjs.Ease.get(1)).wait(1).to({regX:-15.1,scaleX:1.31,scaleY:1.31,x:-30.2,y:-2.6},4,cjs.Ease.get(1)).to({regX:-15,scaleX:1,scaleY:1,x:-22,y:4.5},3,cjs.Ease.get(1)).wait(1).to({y:-6},0).wait(1).to({regX:-15.1,rotation:7.7,x:-30.1,y:-0.5},24,cjs.Ease.get(1)).to({regX:-15,rotation:0,x:-22,y:-6},25,cjs.Ease.get(1)).wait(1).to({regX:-15.1,scaleX:1.31,scaleY:1.31,x:-30.2,y:-2.6},4,cjs.Ease.get(1)).to({regX:-15,scaleX:1,scaleY:1,x:-22,y:4.5},3,cjs.Ease.get(1)).wait(1).to({y:-6},0).wait(1));

	// viki_08.png
	this.instance_4 = new lib.Символ8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(25.5,103.5,1,1,0,0,0,17,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:17.1,rotation:-4.2,x:25.6,y:103.6},24,cjs.Ease.get(1)).to({regX:17,rotation:0,x:25.5,y:103.5},25,cjs.Ease.get(1)).wait(1).to({regX:17.1,rotation:-4.2,x:25.6,y:103.6},24,cjs.Ease.get(1)).to({regX:17,rotation:0,x:25.5,y:103.5},25,cjs.Ease.get(1)).wait(1).to({regY:43.6,scaleX:1.31,scaleY:1.18,x:32,y:126.9},4,cjs.Ease.get(1)).to({regY:43.5,scaleX:1,scaleY:0.9,x:25.5,y:103.6},3,cjs.Ease.get(1)).wait(1).to({scaleY:1,y:103.5},0).wait(1).to({regX:17.1,rotation:-4.2,x:25.6,y:103.6},24,cjs.Ease.get(1)).to({regX:17,rotation:0,x:25.5,y:103.5},25,cjs.Ease.get(1)).wait(1).to({regY:43.6,scaleX:1.31,scaleY:1.18,x:32,y:126.9},4,cjs.Ease.get(1)).to({regY:43.5,scaleX:1,scaleY:0.9,x:25.5,y:103.6},3,cjs.Ease.get(1)).wait(1).to({scaleY:1,y:103.5},0).wait(1));

	// viki_24.png
	this.instance_5 = new lib.Символ10();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-37.5,112.5,1,1,0,0,0,-39,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-36,y:114.5},24,cjs.Ease.get(1)).to({x:-37.5,y:112.5},25,cjs.Ease.get(1)).wait(1).to({x:-36,y:114.5},24,cjs.Ease.get(1)).to({x:-37.5,y:112.5},25,cjs.Ease.get(1)).wait(1).to({regY:-25.9,scaleX:1.31,scaleY:1.09,x:-50.3,y:134.5},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:0.83,x:-37.5,y:109.5},3,cjs.Ease.get(1)).wait(1).to({regY:-26,scaleY:1,y:112.5},0).wait(1).to({x:-36,y:114.5},24,cjs.Ease.get(1)).to({x:-37.5,y:112.5},25,cjs.Ease.get(1)).wait(1).to({regY:-25.9,scaleX:1.31,scaleY:1.09,x:-50.3,y:134.5},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:0.83,x:-37.5,y:109.5},3,cjs.Ease.get(1)).wait(1).to({regY:-26,scaleY:1,y:112.5},0).wait(1));

	// viki_20.png
	this.instance_6 = new lib.Символ12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-36.8,22.5,1,1,0,0,0,10.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:3.5,x:-36.2,y:20.6},11,cjs.Ease.get(1)).to({rotation:0,x:-43.6,y:28.3},13,cjs.Ease.get(1)).to({rotation:12.7,x:-37.1,y:26.6},12,cjs.Ease.get(1)).to({rotation:0,x:-36.8,y:22.5},13,cjs.Ease.get(1)).wait(1).to({rotation:3.5,x:-36.2,y:20.6},11,cjs.Ease.get(1)).to({rotation:0,x:-43.6,y:28.3},13,cjs.Ease.get(1)).to({rotation:12.7,x:-37.1,y:26.6},12,cjs.Ease.get(1)).to({rotation:0,x:-36.8,y:22.5},13,cjs.Ease.get(1)).wait(1).to({scaleX:1.31,scaleY:1.31,rotation:23.5,x:-45.6,y:32.7},4,cjs.Ease.get(1)).to({regX:10.4,scaleX:1,scaleY:1,rotation:-27.5,x:-25.7,y:34.3},3,cjs.Ease.get(1)).wait(1).to({regX:10.5,rotation:0,x:-36.8,y:22.5},0).wait(1).to({rotation:3.5,x:-36.2,y:20.6},11,cjs.Ease.get(1)).to({rotation:0,x:-43.6,y:28.3},13,cjs.Ease.get(1)).to({rotation:12.7,x:-37.1,y:26.6},12,cjs.Ease.get(1)).to({rotation:0,x:-36.8,y:22.5},13,cjs.Ease.get(1)).wait(1).to({scaleX:1.31,scaleY:1.31,rotation:23.5,x:-45.6,y:32.7},4,cjs.Ease.get(1)).to({regX:10.4,scaleX:1,scaleY:1,rotation:-27.5,x:-25.7,y:34.3},3,cjs.Ease.get(1)).wait(1).to({regX:10.5,rotation:0,x:-36.8,y:22.5},0).wait(1));

	// viki_12.png
	this.instance_7 = new lib.Символ16();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-61.5,12.5,1,1,0,0,0,3.5,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:18.4,rotation:21,x:-60.5,y:8.2},11,cjs.Ease.get(1)).to({regY:18.5,rotation:0,x:-68.2,y:18.3},13,cjs.Ease.get(1)).to({regX:3.4,regY:18.4,rotation:15.3,x:-58.2,y:11},12,cjs.Ease.get(1)).to({regX:3.5,regY:18.5,rotation:0,x:-61.5,y:12.5},13,cjs.Ease.get(1)).wait(1).to({regY:18.4,rotation:21,x:-60.5,y:8.2},11,cjs.Ease.get(1)).to({regY:18.5,rotation:0,x:-68.2,y:18.3},13,cjs.Ease.get(1)).to({regX:3.4,regY:18.4,rotation:15.3,x:-58.2,y:11},12,cjs.Ease.get(1)).to({regX:3.5,regY:18.5,rotation:0,x:-61.5,y:12.5},13,cjs.Ease.get(1)).wait(1).to({scaleX:1.31,scaleY:1.31,rotation:45,x:-70.6,y:7.3},4,cjs.Ease.get(1)).to({regX:11,regY:1.7,scaleX:1.66,scaleY:1.66,rotation:-78.7,x:-55.9,y:18},1,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-84.5,x:-53.9,y:31},2,cjs.Ease.get(1)).wait(1).to({regX:3.5,regY:18.5,rotation:0,x:-61.5,y:12.5},0).wait(1).to({regY:18.4,rotation:21,x:-60.5,y:8.2},11,cjs.Ease.get(1)).to({regY:18.5,rotation:0,x:-68.2,y:18.3},13,cjs.Ease.get(1)).to({regX:3.4,regY:18.4,rotation:15.3,x:-58.2,y:11},12,cjs.Ease.get(1)).to({regX:3.5,regY:18.5,rotation:0,x:-61.5,y:12.5},13,cjs.Ease.get(1)).wait(1).to({scaleX:1.31,scaleY:1.31,rotation:45,x:-70.6,y:7.3},4,cjs.Ease.get(1)).to({regX:11,regY:1.7,scaleX:1.66,scaleY:1.66,rotation:-78.7,x:-55.9,y:18},1,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-84.5,x:-53.9,y:31},2,cjs.Ease.get(1)).wait(1).to({regX:3.5,regY:18.5,rotation:0,x:-61.5,y:12.5},0).wait(1));

	// viki_03.png
	this.instance_8 = new lib.Символ14();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-78.2,-16.5,1,1,0,0,0,-17.2,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-28,x:-64.7,y:-25.5},11,cjs.Ease.get(1)).to({rotation:0,x:-84.9,y:-10.7},13,cjs.Ease.get(1)).to({rotation:-33.7,x:-65.7,y:-22},12,cjs.Ease.get(1)).to({rotation:0,x:-78.2,y:-16.5},13,cjs.Ease.get(1)).wait(1).to({rotation:-28,x:-64.7,y:-25.5},11,cjs.Ease.get(1)).to({rotation:0,x:-84.9,y:-10.7},13,cjs.Ease.get(1)).to({rotation:-33.7,x:-65.7,y:-22},12,cjs.Ease.get(1)).to({rotation:0,x:-78.2,y:-16.5},13,cjs.Ease.get(1)).to({_off:true},1).wait(8).to({_off:false},0).wait(1).to({rotation:-28,x:-64.7,y:-25.5},11,cjs.Ease.get(1)).to({rotation:0,x:-84.9,y:-10.7},13,cjs.Ease.get(1)).to({rotation:-33.7,x:-65.7,y:-22},12,cjs.Ease.get(1)).to({rotation:0,x:-78.2,y:-16.5},13,cjs.Ease.get(1)).to({_off:true},1).wait(8).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119,-109,250,292);


(lib.Символ22_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-149.9,-48.2,0.188,0.188,-90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ49();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-129.7,-45.3,0.718,0.718);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.viking_3s21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-112.4,-150,0.913,0.913,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22_1, new cjs.Rectangle(-156.4,-150,44.6,206.4), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},4,cjs.Ease.get(-1)).to({scaleX:1.22,scaleY:1.22},5,cjs.Ease.get(0.98)).to({scaleX:1.11,scaleY:1.11},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(0.98)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-221.5,-50.4,443.1,100.8);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ55();
	this.instance.parent = this;
	this.instance.setTransform(0,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-221.5,-48.9,443.1,100.8), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(-25,-11,1,1,0,0,0,-25,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:7.1,x:-1.5,y:3},0).wait(1).to({rotation:14.1,x:-3.4,y:5.8},0).wait(1).to({rotation:21.2,x:-5.7,y:8.3},0).wait(1).to({rotation:28.2,x:-8.2,y:10.5},0).wait(1).to({rotation:35.3,x:-11,y:12.4},0).wait(1).to({rotation:42.4,x:-13.9,y:14},0).wait(1).to({rotation:49.4,x:-17.1,y:15.1},0).wait(1).to({rotation:56.5,x:-20.4,y:15.9},0).wait(1).to({rotation:63.5,x:-23.7,y:16.3},0).wait(1).to({rotation:70.6,x:-27.1,y:16.2},0).wait(1).to({rotation:77.6,x:-30.4,y:15.8},0).wait(1).to({rotation:84.7,x:-33.6,y:14.9},0).wait(1).to({rotation:91.8,x:-36.8,y:13.6},0).wait(1).to({rotation:98.8,x:-39.7,y:12},0).wait(1).to({rotation:105.9,x:-42.4,y:10},0).wait(1).to({rotation:112.9,x:-44.9,y:7.7},0).wait(1).to({rotation:120,x:-47,y:5.2},0).wait(1).to({rotation:127.1,x:-48.8,y:2.3},0).wait(1).to({rotation:134.1,x:-50.3,y:-0.7},0).wait(1).to({rotation:141.2,x:-51.4,y:-3.9},0).wait(1).to({rotation:148.2,x:-52,y:-7.2},0).wait(1).to({rotation:155.3,x:-52.3,y:-10.5},0).wait(1).to({rotation:162.4,x:-52.2,y:-13.9},0).wait(1).to({rotation:169.4,x:-51.6,y:-17.2},0).wait(1).to({rotation:176.5,x:-50.6,y:-20.4},0).wait(1).to({rotation:183.5,x:-49.3,y:-23.5},0).wait(1).to({rotation:190.6,x:-47.6,y:-26.4},0).wait(1).to({rotation:197.6,x:-45.5,y:-29.1},0).wait(1).to({rotation:204.7,x:-43.1,y:-31.4},0).wait(1).to({rotation:211.8,x:-40.5,y:-33.5},0).wait(1).to({rotation:218.8,x:-37.6,y:-35.2},0).wait(1).to({rotation:225.9,x:-34.5,y:-36.6},0).wait(1).to({rotation:232.9,x:-31.3,y:-37.6},0).wait(1).to({rotation:240,x:-28,y:-38.2},0).wait(1).to({rotation:247.1,x:-24.6,y:-38.3},0).wait(1).to({rotation:254.1,x:-21.3,y:-38.1},0).wait(1).to({rotation:261.2,x:-18,y:-37.4},0).wait(1).to({rotation:268.2,x:-14.8,y:-36.3},0).wait(1).to({rotation:275.3,x:-11.7,y:-34.9},0).wait(1).to({rotation:282.4,x:-8.9,y:-33.1},0).wait(1).to({rotation:289.4,x:-6.3,y:-30.9},0).wait(1).to({rotation:296.5,x:-4,y:-28.5},0).wait(1).to({rotation:303.5,x:-2,y:-25.8},0).wait(1).to({rotation:310.6,x:-0.4,y:-22.8},0).wait(1).to({rotation:317.6,x:0.9,y:-19.7},0).wait(1).to({rotation:324.7,x:1.8,y:-16.5},0).wait(1).to({rotation:331.8,x:2.2,y:-13.1},0).wait(1).to({rotation:338.8,x:2.3,y:-9.8},0).wait(1).to({rotation:345.9,x:1.9,y:-6.4},0).wait(1).to({rotation:352.9,x:1.2,y:-3.2},0).wait(1).to({rotation:360,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,-24.2,50.5,48.4);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(2.2,-34.1);

	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.8,-10.9,1.576,1.196);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-50.1,-59.7,100.2,119.5), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 2
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(-2.8,6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_138 = function() {
		this.stop();
	}
	this.frame_157 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(19).call(this.frame_138).wait(19).call(this.frame_157).wait(1));

	// Слой 1
	this.vikin = new lib.Символ2();
	this.vikin.parent = this;
	this.vikin.setTransform(-6,-37);

	this.timeline.addTween(cjs.Tween.get(this.vikin).to({x:-110.2},29,cjs.Ease.get(-1)).to({x:-218},30,cjs.Ease.get(1)).to({x:-112},30,cjs.Ease.get(-1)).to({x:-6},30,cjs.Ease.get(1)).wait(1).to({x:-110.2},9,cjs.Ease.get(-1)).to({x:-218},9,cjs.Ease.get(1)).to({x:-112},9,cjs.Ease.get(-1)).to({x:-6},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-146,250,292);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.viki = new lib.Символ17();
	this.viki.parent = this;
	this.viki.setTransform(-25,0);

	this.timeline.addTween(cjs.Tween.get(this.viki).to({y:14},3,cjs.Ease.get(1)).to({y:0},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-146,250,292);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(8));

	// Слой 9
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(-128.1,-270.9,0.408,0.408);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-145.9},7).wait(1).to({y:-270.9},7,cjs.Ease.get(1)).wait(1));

	// Слой 7
	this.instance_1 = new lib.Символ22_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(371.8,-11.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:272.6,y:-7.3,alpha:1},7,cjs.Ease.get(1)).wait(1).to({x:371.8,y:-11.2,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Слой 8
	this.instance_2 = new lib.Символ33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-368.7,-142,0.764,0.764);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-256.5,alpha:0},7,cjs.Ease.get(1)).wait(1).to({y:-142,alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Слой 7
	this.instance_3 = new lib.Символ42();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-64.3,-146.7,0.377,0.377);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-126.3,y:-250.8,alpha:0},7,cjs.Ease.get(1)).wait(1).to({x:-64.3,y:-146.7,alpha:1},7).wait(1));

	// Слой 5
	this.instance_4 = new lib.Символ35();
	this.instance_4.parent = this;
	this.instance_4.setTransform(144,166.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:89.5},7,cjs.Ease.get(1)).wait(1).to({y:166.1},7,cjs.Ease.get(1)).wait(1));

	// Слой 6
	this.instance_5 = new lib.Символ59();
	this.instance_5.parent = this;
	this.instance_5.setTransform(184.7,124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:162.7,alpha:0},7,cjs.Ease.get(1)).wait(1).to({y:124.5,alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.vik = new lib.Символ19();
	this.vik.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.vik).to({scaleX:1.44,scaleY:1.44,x:15,y:15},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},7,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,-43,0,43).s().p("Eg1bAIwIAAxfMBq3AAAIAARfg");
	this.shape.setTransform(-114.5,-141.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(16));

	// Слой 4
	this.instance_6 = new lib.Символ1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-127.5,-35.9,1.033,1.033);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:-0.1,regY:-0.1,scaleX:1.22,scaleY:1.22,x:-127.6,y:-36},7,cjs.Ease.get(1)).wait(1).to({regX:0,regY:0,scaleX:1.03,scaleY:1.03,x:-127.5,y:-35.9},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-456.5,-290.9,716.5,472);


// stage content:
(lib.vikingsha600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var zagl = document.getElementById("zagl");
		zagl.style.display = 'none';
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		stage.canvas.style.cursor = "none";
		this.rog.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.rog.x = stage.mouseX;
		}
		
		stage.canvas.style.cursor = "none";
		this.priz.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.priz.x = stage.mouseX;
			this.priz.y = stage.mouseY;
		}
		
		 this.vlevo.cursor = "none";
		 this.vpravo.cursor = "none";
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
			_this.rog.gotoAndStop(1);
			_this.priz.gotoAndStop(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(8);
			_this.rog.gotoAndStop(0);
			_this.priz.gotoAndStop(0);
			_this.main.vik.viki.gotoAndPlay(0);
		}
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.vlevo.addEventListener("mouseover", fl_MouseOverHandler_111);
		
		function fl_MouseOverHandler_111()
		{
			_this.main.vik.viki.gotoAndPlay(121);
		}
		
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.vpravo.addEventListener("mouseover", fl_MouseOverHandler_222);
		
		function fl_MouseOverHandler_222()
		{
			_this.main.vik.viki.gotoAndPlay(140);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 6
	this.vpravo = new lib.Символ40();
	this.vpravo.parent = this;
	this.vpravo.setTransform(135.5,167.6);
	new cjs.ButtonHelper(this.vpravo, 0, 1, 2, false, new lib.Символ40(), 3);

	this.vlevo = new lib.Символ39();
	this.vlevo.parent = this;
	this.vlevo.setTransform(487.6,162.1);
	new cjs.ButtonHelper(this.vlevo, 0, 1, 2, false, new lib.Символ39(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.vlevo},{t:this.vpravo}]}).wait(1));

	// Слой 4
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(300,150.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.priz = new lib.Символ32();
	this.priz.parent = this;
	this.priz.setTransform(843.2,254.6);

	this.timeline.addTween(cjs.Tween.get(this.priz).wait(1));

	// Слой 3
	this.rog = new lib.Символ23();
	this.rog.parent = this;
	this.rog.setTransform(659,275.8);

	this.timeline.addTween(cjs.Tween.get(this.rog).wait(1));

	// Слой 1
	this.main = new lib.Символ18();
	this.main.parent = this;
	this.main.setTransform(427.6,187);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(271,46.1,716.6,472);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1484729171040", id:"bg"},
		{src:"images/logo.png?1484729171040", id:"logo"},
		{src:"images/mech.png?1484729171040", id:"mech"},
		{src:"images/navedi.png?1484729171040", id:"navedi"},
		{src:"images/pom.png?1484729171040", id:"pom"},
		{src:"images/rogatka.png?1484729171040", id:"rogatka"},
		{src:"images/ruka.png?1484729171040", id:"ruka"},
		{src:"images/viki_03.png?1484729171040", id:"viki_03"},
		{src:"images/viki_05.png?1484729171040", id:"viki_05"},
		{src:"images/viki_08.png?1484729171040", id:"viki_08"},
		{src:"images/viki_12.png?1484729171040", id:"viki_12"},
		{src:"images/viki_16.png?1484729171040", id:"viki_16"},
		{src:"images/viki_20.png?1484729171040", id:"viki_20"},
		{src:"images/viki_24.png?1484729171040", id:"viki_24"},
		{src:"images/viking_3s21.png?1484729171040", id:"viking_3s21"},
		{src:"images/viking_3ss21.png?1484729171040", id:"viking_3ss21"},
		{src:"images/viking_3sss21.png?1484729171040", id:"viking_3sss21"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;