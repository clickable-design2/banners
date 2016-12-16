(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.blik = function() {
	this.initialize(img.blik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,130);


(lib.cake = function() {
	this.initialize(img.cake);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,369,194);


(lib.kon_02 = function() {
	this.initialize(img.kon_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,176);


(lib.kur = function() {
	this.initialize(img.kur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,410,195);


(lib.logo_03 = function() {
	this.initialize(img.logo_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,61);


(lib.pack_03 = function() {
	this.initialize(img.pack_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,201);


(lib.plash_02 = function() {
	this.initialize(img.plash_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,113);// helper functions:

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


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blik();
	this.instance.parent = this;
	this.instance.setTransform(-30,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-30,-65,59,130), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plash_02();
	this.instance.parent = this;
	this.instance.setTransform(-150,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-150,-56.5,300,113), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo_03();
	this.instance.parent = this;
	this.instance.setTransform(-42,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-42,-30.5,84,61), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cake();
	this.instance.parent = this;
	this.instance.setTransform(-184.5,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-184.5,-97,369,194), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kur();
	this.instance.parent = this;
	this.instance.setTransform(-205,-97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-205,-97.5,410,195), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kon_02();
	this.instance.parent = this;
	this.instance.setTransform(-155,-90.9,1.033,1.033);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-155,-90.9,310,181.9), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-151,-126,302,252), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pack_03();
	this.instance.parent = this;
	this.instance.setTransform(-122,-100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-122,-100.5,244,201), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-150,-125,300,250), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_899 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(899).call(this.frame_899).wait(1));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A4GiEMAwNgEOIAAIeMgwNAEHg");
	var mask_graphics_89 = new cjs.Graphics().p("A4GiEMAwNgEOIAAIeMgwNAEHg");
	var mask_graphics_90 = new cjs.Graphics().p("A4GiEMAwNgEOIAAIeMgwNAEHg");
	var mask_graphics_179 = new cjs.Graphics().p("A4GiEMAwNgEOIAAIeMgwNAEHg");
	var mask_graphics_180 = new cjs.Graphics().p("A4GiEMAwNgEOIAAIeMgwNAEHg");
	var mask_graphics_269 = new cjs.Graphics().p("A4GiEMAwNgEOIAAIeMgwNAEHg");
	var mask_graphics_270 = new cjs.Graphics().p("A4GiEMAwNgEOIAAIeMgwNAEHg");
	var mask_graphics_359 = new cjs.Graphics().p("A4GiEMAwNgEOIAAIeMgwNAEHg");
	var mask_graphics_360 = new cjs.Graphics().p("A4GiEMAwNgEOIAAIeMgwNAEHg");
	var mask_graphics_449 = new cjs.Graphics().p("A4GiEMAwNgEOIAAIeMgwNAEHg");
	var mask_graphics_450 = new cjs.Graphics().p("A4GiEMAwNgEOIAAIeMgwNAEHg");
	var mask_graphics_539 = new cjs.Graphics().p("A4GiEMAwNgEOIAAIeMgwNAEHg");
	var mask_graphics_540 = new cjs.Graphics().p("A4GiEMAwNgEOIAAIeMgwNAEHg");
	var mask_graphics_629 = new cjs.Graphics().p("A4GiEMAwNgEOIAAIeMgwNAEHg");
	var mask_graphics_630 = new cjs.Graphics().p("A4GiEMAwNgEOIAAIeMgwNAEHg");
	var mask_graphics_719 = new cjs.Graphics().p("A4GiEMAwNgEOIAAIeMgwNAEHg");
	var mask_graphics_720 = new cjs.Graphics().p("A4GiEMAwNgEOIAAIeMgwNAEHg");
	var mask_graphics_809 = new cjs.Graphics().p("A4GiEMAwNgEOIAAIeMgwNAEHg");
	var mask_graphics_810 = new cjs.Graphics().p("A4GiEMAwNgEOIAAIeMgwNAEHg");
	var mask_graphics_899 = new cjs.Graphics().p("A4GiEMAwNgEOIAAIeMgwNAEHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:108.6,y:-31.3}).wait(89).to({graphics:mask_graphics_89,x:108.6,y:-31.3}).wait(1).to({graphics:mask_graphics_90,x:108.6,y:-31.3}).wait(89).to({graphics:mask_graphics_179,x:108.6,y:-31.3}).wait(1).to({graphics:mask_graphics_180,x:108.6,y:-31.3}).wait(89).to({graphics:mask_graphics_269,x:108.6,y:-31.3}).wait(1).to({graphics:mask_graphics_270,x:108.6,y:-31.3}).wait(89).to({graphics:mask_graphics_359,x:108.6,y:-31.3}).wait(1).to({graphics:mask_graphics_360,x:108.6,y:-31.3}).wait(89).to({graphics:mask_graphics_449,x:108.6,y:-31.3}).wait(1).to({graphics:mask_graphics_450,x:108.6,y:-31.3}).wait(89).to({graphics:mask_graphics_539,x:108.6,y:-31.3}).wait(1).to({graphics:mask_graphics_540,x:108.6,y:-31.3}).wait(89).to({graphics:mask_graphics_629,x:108.6,y:-31.3}).wait(1).to({graphics:mask_graphics_630,x:108.6,y:-31.3}).wait(89).to({graphics:mask_graphics_719,x:108.6,y:-31.3}).wait(1).to({graphics:mask_graphics_720,x:108.6,y:-31.3}).wait(89).to({graphics:mask_graphics_809,x:108.6,y:-31.3}).wait(1).to({graphics:mask_graphics_810,x:108.6,y:-31.3}).wait(89).to({graphics:mask_graphics_899,x:108.6,y:-31.3}).wait(1));

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(-77,-29.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:336.1},48).wait(42).to({x:-77},0).to({x:336.1},48).wait(42).to({x:-77},0).to({x:336.1},48).wait(42).to({x:-77},0).to({x:336.1},48).wait(42).to({x:-77},0).to({x:336.1},48).wait(42).to({x:-77},0).to({x:336.1},48).wait(42).to({x:-77},0).to({x:336.1},48).wait(42).to({x:-77},0).to({x:336.1},48).wait(42).to({x:-77},0).to({x:336.1},48).wait(42).to({x:-77},0).to({x:336.1},48).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-205,-97.5,410,195), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(0,-3.5,0.968,0.968);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-150,-91.5,300.1,176.1), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(-108.8,19.1);
	this.instance.alpha = 0.629;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-215.8,-75.8,369.9,132.4), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_899 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(899).call(this.frame_899).wait(1));

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(-72,6,1,1,0,0,0,-82,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-82.1,rotation:-3,x:-72.1,y:6.1},21,cjs.Ease.get(-1)).to({regX:-82,rotation:-6.5,x:-72},23,cjs.Ease.get(1)).to({regY:0.1,rotation:-3.3,y:6.2},22,cjs.Ease.get(-1)).to({regY:0,rotation:0,y:6},23,cjs.Ease.get(1)).wait(1).to({regX:-82.1,rotation:-3,x:-72.1,y:6.1},21,cjs.Ease.get(-1)).to({regX:-82,rotation:-6.5,x:-72},23,cjs.Ease.get(1)).to({regY:0.1,rotation:-3.3,y:6.2},22,cjs.Ease.get(-1)).to({regY:0,rotation:0,y:6},23,cjs.Ease.get(1)).wait(1).to({regX:-82.1,rotation:-3,x:-72.1,y:6.1},21,cjs.Ease.get(-1)).to({regX:-82,rotation:-6.5,x:-72},23,cjs.Ease.get(1)).to({regY:0.1,rotation:-3.3,y:6.2},22,cjs.Ease.get(-1)).to({regY:0,rotation:0,y:6},23,cjs.Ease.get(1)).wait(1).to({regX:-82.1,rotation:-3,x:-72.1,y:6.1},21,cjs.Ease.get(-1)).to({regX:-82,rotation:-6.5,x:-72},23,cjs.Ease.get(1)).to({regY:0.1,rotation:-3.3,y:6.2},22,cjs.Ease.get(-1)).to({regY:0,rotation:0,y:6},23,cjs.Ease.get(1)).wait(1).to({regX:-82.1,rotation:-3,x:-72.1,y:6.1},21,cjs.Ease.get(-1)).to({regX:-82,rotation:-6.5,x:-72},23,cjs.Ease.get(1)).to({regY:0.1,rotation:-3.3,y:6.2},22,cjs.Ease.get(-1)).to({regY:0,rotation:0,y:6},23,cjs.Ease.get(1)).wait(1).to({regX:-82.1,rotation:-3,x:-72.1,y:6.1},21,cjs.Ease.get(-1)).to({regX:-82,rotation:-6.5,x:-72},23,cjs.Ease.get(1)).to({regY:0.1,rotation:-3.3,y:6.2},22,cjs.Ease.get(-1)).to({regY:0,rotation:0,y:6},23,cjs.Ease.get(1)).wait(1).to({regX:-82.1,rotation:-3,x:-72.1,y:6.1},21,cjs.Ease.get(-1)).to({regX:-82,rotation:-6.5,x:-72},23,cjs.Ease.get(1)).to({regY:0.1,rotation:-3.3,y:6.2},22,cjs.Ease.get(-1)).to({regY:0,rotation:0,y:6},23,cjs.Ease.get(1)).wait(1).to({regX:-82.1,rotation:-3,x:-72.1,y:6.1},21,cjs.Ease.get(-1)).to({regX:-82,rotation:-6.5,x:-72},23,cjs.Ease.get(1)).to({regY:0.1,rotation:-3.3,y:6.2},22,cjs.Ease.get(-1)).to({regY:0,rotation:0,y:6},23,cjs.Ease.get(1)).wait(1).to({regX:-82.1,rotation:-3,x:-72.1,y:6.1},21,cjs.Ease.get(-1)).to({regX:-82,rotation:-6.5,x:-72},23,cjs.Ease.get(1)).to({regY:0.1,rotation:-3.3,y:6.2},22,cjs.Ease.get(-1)).to({regY:0,rotation:0,y:6},23,cjs.Ease.get(1)).wait(1).to({regX:-82.1,rotation:-3,x:-72.1,y:6.1},21,cjs.Ease.get(-1)).to({regX:-82,rotation:-6.5,x:-72},23,cjs.Ease.get(1)).to({regY:0.1,rotation:-3.3,y:6.2},22,cjs.Ease.get(-1)).to({regY:0,rotation:0,y:6},23,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112,-94.5,244,201);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_899 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(899).call(this.frame_899).wait(1));

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({scaleX:0.89,scaleY:0.89},4,cjs.Ease.get(1)).to({scaleX:1.27,scaleY:1.27},4,cjs.Ease.get(1)).to({scaleX:1.01,scaleY:1.01},4,cjs.Ease.get(1)).to({scaleX:1.21,scaleY:1.21},4,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(35).to({scaleX:0.89,scaleY:0.89},4,cjs.Ease.get(1)).to({scaleX:1.27,scaleY:1.27},4,cjs.Ease.get(1)).to({scaleX:1.01,scaleY:1.01},4,cjs.Ease.get(1)).to({scaleX:1.21,scaleY:1.21},4,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(35).to({scaleX:0.89,scaleY:0.89},4,cjs.Ease.get(1)).to({scaleX:1.27,scaleY:1.27},4,cjs.Ease.get(1)).to({scaleX:1.01,scaleY:1.01},4,cjs.Ease.get(1)).to({scaleX:1.21,scaleY:1.21},4,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(35).to({scaleX:0.89,scaleY:0.89},4,cjs.Ease.get(1)).to({scaleX:1.27,scaleY:1.27},4,cjs.Ease.get(1)).to({scaleX:1.01,scaleY:1.01},4,cjs.Ease.get(1)).to({scaleX:1.21,scaleY:1.21},4,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(30).to({scaleX:0.89,scaleY:0.89},4,cjs.Ease.get(1)).to({scaleX:1.27,scaleY:1.27},4,cjs.Ease.get(1)).to({scaleX:1.01,scaleY:1.01},4,cjs.Ease.get(1)).to({scaleX:1.21,scaleY:1.21},4,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(30).to({scaleX:0.89,scaleY:0.89},4,cjs.Ease.get(1)).to({scaleX:1.27,scaleY:1.27},4,cjs.Ease.get(1)).to({scaleX:1.01,scaleY:1.01},4,cjs.Ease.get(1)).to({scaleX:1.21,scaleY:1.21},4,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(35).to({scaleX:0.89,scaleY:0.89},4,cjs.Ease.get(1)).to({scaleX:1.27,scaleY:1.27},4,cjs.Ease.get(1)).to({scaleX:1.01,scaleY:1.01},4,cjs.Ease.get(1)).to({scaleX:1.21,scaleY:1.21},4,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(35).to({scaleX:0.89,scaleY:0.89},4,cjs.Ease.get(1)).to({scaleX:1.27,scaleY:1.27},4,cjs.Ease.get(1)).to({scaleX:1.01,scaleY:1.01},4,cjs.Ease.get(1)).to({scaleX:1.21,scaleY:1.21},4,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(35).to({scaleX:0.89,scaleY:0.89},4,cjs.Ease.get(1)).to({scaleX:1.27,scaleY:1.27},4,cjs.Ease.get(1)).to({scaleX:1.01,scaleY:1.01},4,cjs.Ease.get(1)).to({scaleX:1.21,scaleY:1.21},4,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(35).to({scaleX:0.89,scaleY:0.89},4,cjs.Ease.get(1)).to({scaleX:1.27,scaleY:1.27},4,cjs.Ease.get(1)).to({scaleX:1.01,scaleY:1.01},4,cjs.Ease.get(1)).to({scaleX:1.21,scaleY:1.21},4,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(35).to({scaleX:0.89,scaleY:0.89},4,cjs.Ease.get(1)).to({scaleX:1.27,scaleY:1.27},4,cjs.Ease.get(1)).to({scaleX:1.01,scaleY:1.01},4,cjs.Ease.get(1)).to({scaleX:1.21,scaleY:1.21},4,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(30).to({scaleX:0.89,scaleY:0.89},4,cjs.Ease.get(1)).to({scaleX:1.27,scaleY:1.27},4,cjs.Ease.get(1)).to({scaleX:1.01,scaleY:1.01},4,cjs.Ease.get(1)).to({scaleX:1.21,scaleY:1.21},4,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(35).to({scaleX:0.89,scaleY:0.89},4,cjs.Ease.get(1)).to({scaleX:1.27,scaleY:1.27},4,cjs.Ease.get(1)).to({scaleX:1.01,scaleY:1.01},4,cjs.Ease.get(1)).to({scaleX:1.21,scaleY:1.21},4,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(30).to({scaleX:0.89,scaleY:0.89},4,cjs.Ease.get(1)).to({scaleX:1.27,scaleY:1.27},4,cjs.Ease.get(1)).to({scaleX:1.01,scaleY:1.01},4,cjs.Ease.get(1)).to({scaleX:1.21,scaleY:1.21},4,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(31).to({scaleX:0.89,scaleY:0.89},4,cjs.Ease.get(1)).to({scaleX:1.27,scaleY:1.27},4,cjs.Ease.get(1)).to({scaleX:1.01,scaleY:1.01},4,cjs.Ease.get(1)).to({scaleX:1.21,scaleY:1.21},4,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(31).to({scaleX:0.89,scaleY:0.89},4,cjs.Ease.get(1)).to({scaleX:1.27,scaleY:1.27},4,cjs.Ease.get(1)).to({scaleX:1.01,scaleY:1.01},4,cjs.Ease.get(1)).to({scaleX:1.21,scaleY:1.21},4,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-30.5,84,61);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_899 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(899).call(this.frame_899).wait(1));

	// Слой 4
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(0,-173.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:12.5},15).to({y:2.5},4).wait(213).to({y:12.5},3).to({y:-173.5},7).wait(58).to({y:12.5},15).to({y:2.5},4).wait(213).to({y:12.5},3).to({y:-173.5},7).wait(58).to({y:12.5},15).to({y:2.5},4).wait(202).to({y:12.5},3).to({y:-173.5},7).wait(17).to({y:2.5},10).wait(13));

	// Слой 3
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-359.1,121.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({x:-47},7).to({x:-67,y:119},3).wait(240).to({y:121.5},0).to({x:-47},3).to({x:-359.1},7).wait(40).to({x:-47},7).to({x:-67,y:119},3).wait(240).to({y:121.5},0).to({x:-47},3).to({x:-359.1},7).wait(40).to({x:-47},7).to({x:-67,y:119},3).wait(229).to({y:121.5},0).to({x:-47},3).to({x:-359.1},7).wait(20).to({x:-67,y:119},11).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ5();
	this.instance_2.parent = this;
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({y:-93.7,alpha:0.91},7,cjs.Ease.get(1)).to({y:-86.5,alpha:1},3).wait(260).to({y:-91.5},3).to({y:0,alpha:0},7).wait(20).to({y:-93.7,alpha:0.91},7,cjs.Ease.get(1)).to({y:-86.5,alpha:1},3).wait(260).to({y:-91.5},3).to({y:0,alpha:0},7).wait(20).to({y:-93.7,alpha:0.91},7,cjs.Ease.get(1)).to({y:-86.5,alpha:1},3).wait(249).to({y:-91.5},3).to({y:0,alpha:0},7).wait(10).to({y:-86.5,alpha:1},11).wait(1));

	// Слой 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_299 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_300 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_599 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_600 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_746 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_828 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_888 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_889 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_890 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_891 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_892 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_893 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_894 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_895 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_896 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_897 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_898 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_899 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:8.6,y:65}).wait(299).to({graphics:mask_graphics_299,x:8.6,y:65}).wait(1).to({graphics:mask_graphics_300,x:8.6,y:65}).wait(299).to({graphics:mask_graphics_599,x:8.6,y:65}).wait(1).to({graphics:mask_graphics_600,x:8.6,y:65}).wait(146).to({graphics:mask_graphics_746,x:8.6,y:65}).wait(82).to({graphics:mask_graphics_828,x:8.6,y:65}).wait(60).to({graphics:mask_graphics_888,x:8.6,y:65}).wait(1).to({graphics:mask_graphics_889,x:8.6,y:65}).wait(1).to({graphics:mask_graphics_890,x:8.6,y:65}).wait(1).to({graphics:mask_graphics_891,x:8.6,y:65}).wait(1).to({graphics:mask_graphics_892,x:8.6,y:65}).wait(1).to({graphics:mask_graphics_893,x:8.6,y:65}).wait(1).to({graphics:mask_graphics_894,x:8.6,y:65}).wait(1).to({graphics:mask_graphics_895,x:8.6,y:65}).wait(1).to({graphics:mask_graphics_896,x:8.6,y:65}).wait(1).to({graphics:mask_graphics_897,x:8.6,y:65}).wait(1).to({graphics:mask_graphics_898,x:8.6,y:65}).wait(1).to({graphics:mask_graphics_899,x:8.6,y:65}).wait(1));

	// Слой 8
	this.instance_3 = new lib.Символ14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.5,99);
	this.instance_3.alpha = 0;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(185).to({y:43,alpha:1},10,cjs.Ease.get(1)).wait(51).to({y:99,alpha:0},10).wait(229).to({y:43,alpha:1},10,cjs.Ease.get(1)).wait(51).to({y:99,alpha:0},10).wait(218).to({y:43,alpha:1},10,cjs.Ease.get(1)).wait(51).to({y:99,alpha:0},10).wait(55));

	// Слой 7
	this.instance_4 = new lib.Символ13();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-21.5,71);
	this.instance_4.alpha = 0;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(115).to({x:55,alpha:1},11,cjs.Ease.get(1)).wait(54).to({x:-21.5,alpha:0},11).wait(224).to({x:55,alpha:1},11,cjs.Ease.get(1)).wait(54).to({x:-21.5,alpha:0},11).wait(224).to({x:55,alpha:1},11,cjs.Ease.get(1)).wait(43).to({x:-21.5,alpha:0},11).wait(108).to({x:55,alpha:1},11).wait(1));

	// Слой 5
	this.instance_5 = new lib.Символ11();
	this.instance_5.parent = this;
	this.instance_5.setTransform(25,40.9);
	this.instance_5.alpha = 0;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(48).to({x:0,alpha:1},11,cjs.Ease.get(1)).wait(51).to({x:25,alpha:0},11).wait(227).to({x:0,alpha:1},11,cjs.Ease.get(1)).wait(51).to({x:25,alpha:0},11).wait(227).to({x:0,alpha:1},11,cjs.Ease.get(1)).wait(51).to({x:25,alpha:0},11).wait(179));

	// Слой 1
	this.instance_6 = new lib.Символ4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,0,1.088,1.088);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(1)).wait(280).to({alpha:0},10).wait(1).to({scaleX:1.09,scaleY:1.09},0).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(1)).wait(280).to({alpha:0},10).wait(1).to({scaleX:1.09,scaleY:1.09},0).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(1)).wait(269).to({alpha:0},10).to({alpha:1},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-471.1,-249.4,655.1,477.4);


// stage content:
(lib.hochland300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.1,0.6,662.8,477.4);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1481885507649", id:"bg"},
		{src:"images/blik.png?1481885507649", id:"blik"},
		{src:"images/cake.jpg?1481885507649", id:"cake"},
		{src:"images/kon_02.jpg?1481885507649", id:"kon_02"},
		{src:"images/kur.jpg?1481885507649", id:"kur"},
		{src:"images/logo_03.png?1481885507649", id:"logo_03"},
		{src:"images/pack_03.png?1481885507649", id:"pack_03"},
		{src:"images/plash_02.png?1481885507649", id:"plash_02"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;