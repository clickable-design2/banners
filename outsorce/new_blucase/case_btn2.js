(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.blue_case = function() {
	this.initialize(img.blue_case);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,142);


(lib.doppler = function() {
	this.initialize(img.doppler);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,193);


(lib.logopngкопия2 = function() {
	this.initialize(img.logopngкопия2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,93);


(lib.OPEN = function() {
	this.initialize(img.OPEN);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,198);// helper functions:

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


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.doppler();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.928,0.928);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,220,179.1), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00AFEE").s().p("AC2EmQi/gGh2gRQiDgShrgmIgegGQirgojkhuQhZgrgxgjQhHg0ggg/QgTgkACgeQgDgLAAgKQgCgkAXgVQAbgZAvAIQAYAEAyAWQBEAeBaAXQA2AOBuAWICXAeQALgWAYgKQAYgKAhAGQAVADAkAOQCiA+CcAsQE3A2EGAeQC0AVBkgEQA5gDAYAFQAVAFARAMQASAMAHASQAMAcgQAgQgFAKgIAJIgBACQgKAUgRAMIgJAFIgOAKQgdASg3AOQifAmjFAKQhGADhWAAQhdAAhwgEg");
	this.shape.setTransform(104.3,26.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-1.3,-3.6,211.3,59.6), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.OPEN();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.451,0.454);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,87.9,89.8), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logopngкопия2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.301,0.307,0,-6.1,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,72.2,39), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#FFCC66","#FFCC33","#FFCC99"],[0,0.314,0.714,1],-11.2,0,11.3,0).s().p("AhwEkIAApHIDhAAIAAJHg");
	this.shape.setTransform(11.3,29.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,22.6,58.4), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.OPEN();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.451,0.453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,87.9,89.7), null);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.blue_case();
	this.instance.parent = this;
	this.instance.setTransform(-71,-46,0.659,0.659);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-46,145.6,93.6);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(110,89.5,1,1,0,0,0,110,89.5);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(19, 7, 27, 0))];
	this.instance.cache(-2,-2,224,183);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,223,183), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(110,89.5,1,1,0,0,0,110,89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:81},9,cjs.Ease.get(-1)).to({y:78.7},10,cjs.Ease.get(1)).to({y:80.5},10,cjs.Ease.get(-1)).to({y:89.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223,183);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(105.6,29.1,1,1,0,0,0,105.6,29.1);
	this.instance.filters = [new cjs.BlurFilter(14, 14, 3)];
	this.instance.cache(-3,-6,215,64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-20.3,-22.6,252,101), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_1 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_2 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_3 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_4 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_5 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_6 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_7 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_8 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_9 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_10 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_11 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_12 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_13 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_14 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_15 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_16 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_17 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_18 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_19 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_20 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_21 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_22 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_23 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_24 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_25 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_26 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_27 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_28 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_29 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_30 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_31 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_32 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_33 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_34 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_35 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_36 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_37 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_38 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_39 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_40 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_41 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_42 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_43 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_44 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_45 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_46 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_47 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_48 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_49 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");
	var mask_graphics_80 = new cjs.Graphics().p("AExFCIAAAdIjWgfIAEgcIjqgiIgPgbIASgMIAFhcIgOgIIgFgXID+ApQgDg7AngQQAngQAgAQQAgARAQAVQAQAVABAQQABAPgDAIID2AoIgCANIgRAJIgJBcIAMATIgFAWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_1,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_2,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_3,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_4,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_5,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_6,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_7,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_8,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_9,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_10,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_11,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_12,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_13,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_14,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_15,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_16,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_17,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_18,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_19,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_20,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_21,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_22,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_23,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_24,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_25,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_26,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_27,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_28,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_29,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_30,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_31,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_32,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_33,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_34,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_35,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_36,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_37,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_38,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_39,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_40,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_41,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_42,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_43,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_44,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_45,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_46,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_47,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_48,x:52,y:35.5}).wait(1).to({graphics:mask_graphics_49,x:52,y:35.5}).wait(31).to({graphics:mask_graphics_80,x:52,y:35.5}).wait(1));

	// Слой 3
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(-2.4,49,1.386,1.122,0,27,0,11.3,29.2);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-2,-2,27,62);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:11.4,scaleY:1.12,skewX:26.8,x:65,y:51.4},24,cjs.Ease.get(-1)).to({regX:11.3,scaleY:1.12,skewX:27,x:135.1,y:54},25,cjs.Ease.get(1)).wait(30).to({alpha:0.699},0).wait(1).to({x:-2.4,y:49},0).wait(1));

	// Слой 6
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.9,54.9,1,1,0,0,0,36.1,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(81));

	// Слой 1
	this.instance_2 = new lib.Анимация3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(80.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},24,cjs.Ease.get(-1)).to({startPosition:0},25,cjs.Ease.get(1)).wait(30).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.5,4.5,145.6,93.6);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(142.8,-9.1,1,1,0,0,0,44,44.9);

	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(142.8,-9.1,1,1,0,0,0,44,44.9);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(25, 25, 31, 175))];
	this.instance_1.cache(-2,-2,92,94);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(98.8,-54,87.9,89.8);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(31));

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(272.1,177.1,1,1,0,0,0,105.6,25.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.48},14,cjs.Ease.get(-1)).to({alpha:1},15,cjs.Ease.get(1)).to({alpha:0.5},15,cjs.Ease.get(-1)).to({alpha:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(146.2,128.6,253,102);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(81,20.5,1,1,0,0,0,81,20.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:22.8},9,cjs.Ease.get(-1)).to({y:24.3},10,cjs.Ease.get(1)).to({y:22.9},10,cjs.Ease.get(-1)).to({y:20.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(98.8,-54,92,93);


// stage content:
(lib.case_btn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.flash.gotoAndPlay(1);
			this.knife.gotoAndPlay(1);
		
		  
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.flash.gotoAndPlay(30);
			this.knife.gotoAndPlay(20);
			
		 
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(169.3,68.3,1,1,0,0,0,141.9,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// knife
	this.knife = new lib.Символ12();
	this.knife.parent = this;
	this.knife.setTransform(228,178.5,1,1,0,0,0,110,89.5);

	this.timeline.addTween(cjs.Tween.get(this.knife).wait(1));

	// case
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(170,168,1.939,1.939,0,0,0,80.4,50.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// flash
	this.flash = new lib.Символ14();
	this.flash.parent = this;
	this.flash.setTransform(-96,67.7,1,1,0,0,0,10.7,19.6);

	this.timeline.addTween(cjs.Tween.get(this.flash).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120.2,164.3,395.8,254.4);
// library properties:
lib.properties = {
	width: 350,
	height: 280,
	fps: 24,
	color: "#333333",
	opacity: 0.00,
	manifest: [
		{src:"images/blue_case.png?1501494652682", id:"blue_case"},
		{src:"images/doppler.png?1501494652682", id:"doppler"},
		{src:"images/logopngкопия2.png?1501494652682", id:"logopngкопия2"},
		{src:"images/OPEN.png?1501494652682", id:"OPEN"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;