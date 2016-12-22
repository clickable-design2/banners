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


(lib.chern = function() {
	this.initialize(img.chern);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,270,270);


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


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAKD4QgYgBgWgLQgBgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQiGgEiFgMQgtgDgDgtQgMiXBYh9QApg9A9gkQAKgGALgEQA8gVA+gKQCIgRBqBOQAaAUATAaQBaB2AQCVQAIBCg/AVQg4ATg9gCQhTgEhOARIgLABIgEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-35.9,-24.8,71.8,49.6), null);


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
	this.instance.setTransform(-150,-131,0.835,0.835);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-150,-131,308.2,162), null);


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


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chern();
	this.instance.parent = this;
	this.instance.setTransform(-133,-133);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-133,-133,270,270), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-35.9,-24.8,71.8,49.6), null);


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
	this.instance.setTransform(74,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-131,-97.5,410,195), null);


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

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(138.6,-46.6,1,1,-15.3,0,0,-81.9,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(218.3,0.8,1,0.161);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(73.5,-197.3,288.4,258.3), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(12, 12, 1)];
	this.instance.cache(-38,-27,76,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-41.9,-30.8,86,64), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.2,-3.4,1.052,1.052);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-43.6,-35.5,90,67), null);


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
	this.instance.setTransform(0,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(900));

	// Слой 3
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.8,73.9,0.588,0.588,0,0,0,357.9,-68.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(900));

	// Слой 2
	this.instance_2 = new lib.Символ5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(900));

	// Слой 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_149 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_150 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_299 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_300 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_449 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_450 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_599 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_600 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_749 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_750 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");
	var mask_graphics_899 = new cjs.Graphics().p("A8lKZIAA0xMA5LAAAIAAUxg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:8.6,y:65}).wait(149).to({graphics:mask_graphics_149,x:8.6,y:65}).wait(1).to({graphics:mask_graphics_150,x:8.6,y:65}).wait(149).to({graphics:mask_graphics_299,x:8.6,y:65}).wait(1).to({graphics:mask_graphics_300,x:8.6,y:65}).wait(149).to({graphics:mask_graphics_449,x:8.6,y:65}).wait(1).to({graphics:mask_graphics_450,x:8.6,y:65}).wait(149).to({graphics:mask_graphics_599,x:8.6,y:65}).wait(1).to({graphics:mask_graphics_600,x:8.6,y:65}).wait(149).to({graphics:mask_graphics_749,x:8.6,y:65}).wait(1).to({graphics:mask_graphics_750,x:8.6,y:65}).wait(149).to({graphics:mask_graphics_899,x:8.6,y:65}).wait(1));

	// Слой 7
	this.instance_3 = new lib.Символ13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-21.5,71);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(37).to({alpha:0},15).wait(81).to({alpha:1},15).wait(39).to({alpha:0},15).wait(81).to({alpha:1},15).wait(39).to({alpha:0},15).wait(81).to({alpha:1},15).wait(39).to({alpha:0},15).wait(81).to({alpha:1},15).wait(39).to({alpha:0},15).wait(81).to({alpha:1},15).wait(39).to({alpha:0},15).wait(81).to({alpha:1},15).wait(2));

	// Слой 8
	this.instance_4 = new lib.Символ14();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.5,99);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(86).to({alpha:0},15).wait(49).to({alpha:1},0).wait(86).to({alpha:0},15).wait(49).to({alpha:1},0).wait(86).to({alpha:0},15).wait(49).to({alpha:1},0).wait(86).to({alpha:0},15).wait(49).to({alpha:1},0).wait(86).to({alpha:0},15).wait(49).to({alpha:1},0).wait(86).to({alpha:0},15).wait(49));

	// Слой 5
	this.instance_5 = new lib.Символ11();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,40.9);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(900));

	// Слой 1
	this.instance_6 = new lib.Символ4();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(900));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.8,-125,407.5,274.9);


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
p.nominalBounds = new cjs.Rectangle(84.2,124.5,473.3,294);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1482237538159", id:"bg"},
		{src:"images/blik.png?1482237538159", id:"blik"},
		{src:"images/cake.jpg?1482237538159", id:"cake"},
		{src:"images/chern.png?1482237538159", id:"chern"},
		{src:"images/kon_02.jpg?1482237538159", id:"kon_02"},
		{src:"images/kur.jpg?1482237538159", id:"kur"},
		{src:"images/logo_03.png?1482237538159", id:"logo_03"},
		{src:"images/pack_03.png?1482237538159", id:"pack_03"},
		{src:"images/plash_02.png?1482237538159", id:"plash_02"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;