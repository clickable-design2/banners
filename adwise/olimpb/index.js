(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,54);


(lib.foot = function() {
	this.initialize(img.foot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,469,310);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,41);


(lib.ramka = function() {
	this.initialize(img.ramka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,558,261);


(lib.stav = function() {
	this.initialize(img.stav);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,63);


(lib.team1 = function() {
	this.initialize(img.team1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,156);


(lib.team2 = function() {
	this.initialize(img.team2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,127);// helper functions:

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


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().rs(["rgba(0,255,0,0)","#00FF00","rgba(0,255,0,0)"],[0,0.494,1],0,0,0,0,0,23.2).ss(10,1,1).p("ABeAAQAABHgcAxQgYAsggAGQgFAAgFAAQgmAAgcgyQgbgxAAhHQAAhGAbgyQAcgxAmAAQAnAAAbAxQAaAvACBBQAAAFAAADg");
	this.shape.setTransform(9.4,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-5,-5,28.7,44), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.494,1],0,0,0,0,0,60.6).ss(15,1,1).p("AI8AAQAADtipCmQilCpjuAAQjtAAioipQimimAAjtQAAjsCmipQCoimDtAAQDuAAClCmQCpCpAADsg");
	this.shape.setTransform(57.2,57.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-7.5,-7.5,129.4,129.4), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,154,41), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BGIAAiLIAkAAIAAAqIAZAAQAKAAAJADQAJAEAGAFQAGAGAEAHQAEAGABAJQABAIgBAIQgBAIgEAIQgEAHgGAGQgGAFgJADQgJAEgKAAgAgTAmIAIAAIAJAAIAIAAQAFAAAEgEQAEgDABgFQABgFgBgFQgBgFgEgEQgEgDgFAAIgZAAg");
	this.shape.setTransform(119.2,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BFIAAgaQAMAAADgDQAEgDABgMIAKhfIBiAAIAACMIgkAAIAAhrIgeAAIgFA/IgDASQgCAHgDAFQgGAKgMADQgGABgIABQgIgBgJgBg");
	this.shape_1.setTransform(104.2,10.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdBHQgPgCgKgEIAFgZQAKAEAGgCQAHgCAFgKIAFgKIgwhWIAAgEIAoAAIAaA2IABAAIAXg2IAnAAIAAAEIgyBmQgGAMgGAIQgFAIgIAEQgGADgJAAIgEAAg");
	this.shape_2.setTransform(91,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWBGIAAhqIgrAAIAABqIgkAAIAAiLIBzAAIAACLg");
	this.shape_3.setTransform(77.1,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3BGIAAiLIA9AAQAYAAANAQQANAPAAAWQAAATgNAQQgOAOgXAAIgYAAIAAAlgAgTACIAZAAQAHAAAEgGQAEgFAAgIQAAgJgEgGQgEgFgHgBIgZAAg");
	this.shape_4.setTransform(63.8,10);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsBGIAAiLIBXAAIAAAgIgyAAIAAAUIAuAAIAAAfIguAAIAAAXIAzAAIAAAhg");
	this.shape_5.setTransform(51.2,10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag3BGIAAiLIA9AAQAUAAAMAMQAMAMAAATQAAAHgDAGQgDAHgFAEQAEACADACIAFAIQAFAIAAAJQAAATgLAMQgMAMgWAAgAgSAmIAbAAQAJAAACgLQAAgFgDgDQgDgEgFAAIgbAAgAgSgOIAVAAQAFAAADgDQADgDAAgFQAAgFgDgDQgDgEgFAAIgVAAg");
	this.shape_6.setTransform(38.9,9.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag8BGIAAiLIAlAAIAABEIBIhEIAMAAIAACLIglAAIAAhHIhJBHg");
	this.shape_7.setTransform(24.3,10);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag/BFIAAgaQAMAAADgDQAEgDABgMIAKhfIBiAAIAACMIgkAAIAAhrIgeAAIgFA/IgDASQgCAHgDAFQgGAKgMADQgGABgIABQgIgBgJgBg");
	this.shape_8.setTransform(8.8,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,127.4,24), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhABFIABgaQAMAAADgDQAEgDABgMIAKhfIBhAAIAACMIgkAAIAAhrIgdAAIgGA/IgDASQgBAHgDAFQgFAKgNADQgGABgIABQgIgBgKgBg");
	this.shape.setTransform(91.2,10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAjBHIgJgSIgzAAIgIASIgmAAIAAgFIBAiIIAQAAIA/CIIAAAFgAAPAXIgPghIgNAhIAcAAg");
	this.shape_1.setTransform(77.4,9.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWBGIAAg4IgrAAIAAA4IgkAAIAAiLIAkAAIAAAyIArAAIAAgyIAkAAIAACLg");
	this.shape_2.setTransform(63.1,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsBGIAAiLIBXAAIAAAgIgyAAIAAAUIAuAAIAAAfIguAAIAAAXIAzAAIAAAhg");
	this.shape_3.setTransform(50.3,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKBGIgNgDIgMgGIgLgHQgKgJgGgOQgDgHgBgIQgCgHAAgJQAAgIACgHQABgIADgHQAGgOAKgJIALgHIAMgGQANgFANABQAHAAAHABQAIABAGADQAOAFAKAMQALANACASIgjAAQgDgLgIgEQgIgFgLgBQgPAAgKALQgJALAAAQQAAAIACAGQACAHAFAGQAFAGAGACQAHADAHAAQALAAAJgGQAIgFADgLIAjAAQgBAKgEAHQgDAIgFAHQgLANgNAFIgOAEQgHACgIAAg");
	this.shape_4.setTransform(36.8,10);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag3BGIAAiLIA9AAQAYAAANAQQANAPAAAWQAAATgNAQQgOAOgXAAIgYAAIAAAlgAgTACIAZAAQAHAAAEgGQAEgFAAgIQAAgJgEgGQgEgFgHgBIgZAAg");
	this.shape_5.setTransform(23.1,10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjBHIgJgSIgzAAIgIASIgmAAIAAgFIBAiIIAQAAIA/CIIAAAFgAAPAXIgPghIgNAhIAcAAg");
	this.shape_6.setTransform(9,9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,101.3,24), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoA9QgRgMABgWIAjAAQAAAHAGAEQAHADAIAAQAIABAHgEQAGgEAAgGIgBgGIgDgDIgFgDIgGgCIgFAAIgFgBQgKAAgJgCQgIgDgIgFQgHgDgFgIQgEgIAAgKQAAgLAEgJQAEgIAIgGQAIgGAKgDQAJgDAMAAQANAAAMAEQAMAFAIAMQAIAKgBAPIgiAAQAAgHgFgEQgGgDgHAAQgJAAgFADQgFAEAAAGQAAAGAFADQAFACALACIARACIAPAFQAIADAEAEQAFADADAIQADAIAAAKQAAAKgEAIQgEAIgJAGQgRAMgXAAQgXAAgRgMg");
	this.shape.setTransform(22.1,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGBHIg9iHIAAgGIAnAAIARAqIALAjIABAAIALgjIARgqIAnAAIAAAGIg8CHg");
	this.shape_1.setTransform(8.8,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,30.7,24), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,175,54), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.team2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,108,127), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.team1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.897,0.897);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,104,139.9), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgrqAdTMAAAg6lMBXVAAAMAAAA6lg");
	this.shape.setTransform(279.5,187.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,559,375), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.foot();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,469,310), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(9.3,17,1,1,0,0,0,9.3,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:3.04,scaleY:1.59,x:9.2,alpha:0.41},3).to({regX:9,regY:16.8,scaleX:13.95,scaleY:4.74,x:9.1,y:16.8,alpha:0},16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,28.7,44);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AqwD2QhaAAhAhGQg/hEAAhhIAAgVQAAhhA/hFQBAhFBaAAIVgAAQBaAABABFQBABFAABhIAAAVQAABhhABEQhABGhaAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:87.4,y:27}).wait(3));

	// Layer 2
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(90.5,26.1,1,1,0,0,0,9.3,17);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

	// Layer 1
	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(87.5,27,1,1,0,0,0,87.5,27);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.button, null, new cjs.Matrix2D(1,0,0,1,-87.5,-27)).s().p("AtqEOIAAobIbVAAIAAIbg");
	this.shape.setTransform(87.5,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{regY:27,scaleX:1,scaleY:1,y:27}}]}).to({state:[{t:this.instance_1,p:{regY:26.9,scaleX:1.034,scaleY:1.034,y:26.9}}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175,54);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(52,69.9,1,1,0,0,0,52,69.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,104,139.9), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(54,63.5,1,1,0,0,0,54,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,108,127), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(87.5,198,1,1,0,0,0,87.5,27);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol20(), 3);

	this.instance_1 = new lib.stav();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCB522").s().p("AglCDQgSgGgOgMQgNgMgIgRQgHgRAAgVIAAhaQAAgVAHgSQAIgQANgNQAOgLASgHQASgGATAAQAVAAARAGQATAHANALQANANAHAQQAIASAAAVIAABaQAAAVgIARQgHARgNAMQgNAMgTAGQgRAGgVAAQgTAAgSgGgAgVhqQgKADgIAGQgJAFgGAIQgGAIgDALQgEAMAAAQIAABLQAAAQAEANQADAKAGAIQAGAIAJAFQAIAGAKADQAKADALAAQALAAALgDQALgDAIgGQAIgFAGgIQAGgIADgKQAFgNAAgQIAAhLQAAgQgFgMQgDgLgGgIQgGgIgIgFQgIgGgLgDQgLgDgLAAQgLAAgKADg");
	this.shape.setTransform(125.2,132.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB522").s().p("AgiCCQgPgFgMgKQgMgKgHgOQgHgOgCgSIAcAAQACAMAFAJQAFAJAHAGQAIAHAKADQAKADAMAAQANAAAMgFQALgDAIgIQAJgIAEgLQAFgLAAgPQAAgQgIgNQgIgMgOgHQgNgHgQgBQgQgBgRAEIAAgHIBJheIh2AAIAAgbICmAAIAAAFIhMBjQAQAAAOAGQAOAGALALQAKAKAGAOQAGAPAAAPQAAAUgGAQQgHAQgMAMQgMALgRAHQgRAGgUAAQgSAAgPgFg");
	this.shape_1.setTransform(101.6,132.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCB522").s().p("AgNBMQgFgFgBgIQABgIAFgFQAGgFAHAAQAJAAAFAFQAFAFABAIQgBAIgFAFQgGAFgIAAQgHAAgGgFgAgNgxQgFgGgBgHQABgJAFgFQAGgEAHAAQAJAAAFAEQAFAFABAJQgBAHgFAGQgGAFgIAAQgHAAgGgFg");
	this.shape_2.setTransform(86.3,137.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCB522").s().p("AglCDQgSgGgOgMQgNgMgHgRQgIgRAAgVIAAhaQAAgVAIgSQAHgQANgNQAOgLASgHQASgGATAAQAVAAARAGQATAHANALQANANAHAQQAIASAAAVIAABaQAAAVgIARQgHARgNAMQgNAMgTAGQgRAGgVAAQgTAAgSgGgAgVhqQgKADgJAGQgIAFgGAIQgGAIgDALQgEAMAAAQIAABLQAAAQAEANQADAKAGAIQAGAIAIAFQAJAGAKADQALADAKAAQAMAAAKgDQALgDAHgGQAJgFAGgIQAGgIADgKQAEgNABgQIAAhLQgBgQgEgMQgDgLgGgIQgGgIgJgFQgHgGgLgDQgKgDgMAAQgKAAgLADg");
	this.shape_3.setTransform(69.3,132.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCB522").s().p("AhTCHIAAgHIBtiIQAMgPAGgRQAGgSgCgOQgDgQgLgIQgGgFgIgDQgJgDgLABQgLAAgJACQgKADgGAGQgHAFgDAJQgEAJgBAMIgbAAQABgSAGgOQAFgOAKgJQAKgJAOgFQAPgFASAAQARAAAOAFQAOAFAKAIQAJAJAGALQAFALABANQACARgFATQgKAZgJALIhWBrIBzAAIAAAcg");
	this.shape_4.setTransform(46.3,132.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfB4QgOgFgLgJQgLgJgGgNQgHgNgCgRIAaAAQACALAEAJQAFAIAHAGQAHAFAJADQAKADALAAQALAAALgEQAKgDAIgIQAIgHAEgKQAEgKAAgNQAAgQgHgMQgHgLgNgGQgMgGgPgBQgOgBgQAEIAAgHIBChXIhsAAIAAgZICZAAIAAAFIhGBcQAPgBANAGQANAFAJAKQAKAJAFANQAGAOAAAPQAAARgGAPQgGAPgLALQgLALgQAFQgQAHgSAAQgQAAgOgFg");
	this.shape_5.setTransform(128.4,96.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiB5QgRgHgMgKQgNgLgGgPQgHgRAAgTIAAhTQAAgTAHgQQAGgQANgLQAMgLARgFQAQgHASAAQATAAAQAHQARAFAMALQAMALAHAQQAHAQAAATIAABTQAAATgHARQgHAPgMALQgMAKgRAHQgQAFgTAAQgSAAgQgFgAgThiQgKADgHAFQgIAFgGAIQgFAHgDAJQgEAMAAAPIAABFQAAAPAEALQADAJAFAIQAGAIAIAEQAHAFAKADQAJACAKAAQALAAAJgCQAKgDAHgFQAIgEAGgIQAFgIADgJQAEgLAAgPIAAhFQAAgPgEgMQgDgJgFgHQgGgIgIgFQgHgFgKgDQgJgDgLAAQgKAAgJADg");
	this.shape_6.setTransform(107,96.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhIB6IB1jzIAcAAIh1Dzg");
	this.shape_7.setTransform(87.2,96);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAlB6IAAg3Ih9AAIAAgMIB7iwIAdAAIAAClIAZAAIAAAXIgZAAIAAA3gAg1AtIBcAAIAAg9IABhIg");
	this.shape_8.setTransform(68.1,96.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiB5QgRgHgMgKQgNgLgGgPQgHgRAAgTIAAhTQAAgTAHgQQAGgQANgLQAMgLARgFQAQgHASAAQATAAAQAHQARAFAMALQAMALAHAQQAHAQAAATIAABTQAAATgHARQgHAPgMALQgMAKgRAHQgQAFgTAAQgSAAgQgFgAgThiQgKADgHAFQgIAFgGAIQgFAHgDAJQgEAMAAAPIAABFQAAAPAEALQADAJAFAIQAGAIAIAEQAHAFAKADQAJACAKAAQALAAAJgCQAKgDAHgFQAIgEAGgIQAFgIADgJQAEgLAAgPIAAhFQAAgPgEgMQgDgJgFgHQgGgIgIgFQgHgFgKgDQgJgDgLAAQgKAAgJADg");
	this.shape_9.setTransform(46.7,96.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-3,0,181,226), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(234.5,155,1,1,0,0,0,234.5,155);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,469,310), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(234.5,155,1,1,0,0,0,234.5,155);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:238.6},16,cjs.Ease.get(-1)).to({x:244.5},23,cjs.Ease.get(1)).to({x:239},22,cjs.Ease.get(-1)).to({x:234.5},18,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,469,310);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgiIAYTMgAygwvMBKNAAUMgIwAwlg");
	mask.setTransform(251.5,152.5);

	// Layer 4
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(251.5,162.6,1,1,0,0,0,279.4,187.5);
	this.instance.alpha = 0.59;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(314.5,155,1,1,0,0,0,234.5,155);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(28,-3.9,475,313), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	// Symbol 11
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(151.6,152.1,1,1,0,0,0,15.3,12);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({regX:14.4,scaleX:20.02,scaleY:20.02,x:132.7},0).to({regX:15.3,scaleX:1,scaleY:1,x:151.6,alpha:1},10).wait(22));

	// Symbol 16
	this.instance_1 = new lib.Symbol16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(146.3,20.5,1,1,0,0,0,77,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({y:10.5},3).to({y:20.5},3).wait(10));

	// Symbol 15
	this.instance_2 = new lib.Symbol15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(63.6,64.1,1,1,0,0,0,63.6,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({x:53.6,y:54.1},3).to({x:63.6,y:64.1},3).wait(12));

	// Symbol 13
	this.instance_3 = new lib.Symbol13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(240.9,64.1,1,1,0,0,0,50.6,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({x:250.9,y:54.1},3).to({x:240.9,y:64.1},3).wait(12));

	// Symbol 14
	this.instance_4 = new lib.Symbol14();
	this.instance_4.parent = this;
	this.instance_4.setTransform(62.3,155.9,1,1,0,0,0,52,69.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21).to({x:52.3},4).to({x:62.3},4).wait(12));

	// Symbol 12
	this.instance_5 = new lib.Symbol12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(242.3,159.5,1,1,0,0,0,54,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({x:252.3},4).to({x:242.3},4).wait(12));

	// Layer 9 copy
	this.instance_6 = new lib.Symbol18();
	this.instance_6.parent = this;
	this.instance_6.setTransform(151.4,149.1,0.283,0.283,0,0,0,57.2,57.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({scaleX:3.08,scaleY:3.08,x:147.4,y:145},7).to({regX:55.8,regY:55.9,scaleX:8.28,scaleY:8.28,x:139.8,y:138},13).to({_off:true},1).wait(1));

	// Layer 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_26 = new cjs.Graphics().p("A7rblQM98es96rMAwHAAAQOhbRuhb4g");
	var mask_graphics_27 = new cjs.Graphics().p("A7BblQM+8es+6rMAwHAAAQOibRuib4g");
	var mask_graphics_28 = new cjs.Graphics().p("A5RblQM98es96rMAwHAAAQOhbRuhb4g");
	var mask_graphics_29 = new cjs.Graphics().p("A3iblQM98es96rMAwHAAAQOibRuib4g");
	var mask_graphics_30 = new cjs.Graphics().p("A1zblQM+8es+6rMAwHAAAQOibRuib4g");
	var mask_graphics_31 = new cjs.Graphics().p("Az2blQM+8es+6rMAwHAAAQOibRuib4g");
	var mask_graphics_32 = new cjs.Graphics().p("Ax5blQM+8es+6rMAwHAAAQOibRuib4g");
	var mask_graphics_33 = new cjs.Graphics().p("Av8blQM+8es+6rMAwHAAAQOibRuib4g");
	var mask_graphics_34 = new cjs.Graphics().p("At/blQM+8es+6rMAwHAAAQOibRuib4g");
	var mask_graphics_35 = new cjs.Graphics().p("AskblQM98es96rMAwHAAAQOibRuib4g");
	var mask_graphics_36 = new cjs.Graphics().p("ArJblQM98es96rMAwHAAAQOibRuib4g");
	var mask_graphics_37 = new cjs.Graphics().p("ApublQM98es96rMAwHAAAQOibRuib4g");
	var mask_graphics_38 = new cjs.Graphics().p("AoTblQM98es96rMAwHAAAQOibRuib4g");
	var mask_graphics_39 = new cjs.Graphics().p("Am4blQM98es96rMAwHAAAQOibRuib4g");
	var mask_graphics_40 = new cjs.Graphics().p("Am4blQM98es96rMAwHAAAQOibRuib4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(26).to({graphics:mask_graphics_26,x:163.5,y:136.6}).wait(1).to({graphics:mask_graphics_27,x:181.5,y:136.6}).wait(1).to({graphics:mask_graphics_28,x:192.6,y:136.6}).wait(1).to({graphics:mask_graphics_29,x:203.8,y:136.6}).wait(1).to({graphics:mask_graphics_30,x:214.9,y:136.6}).wait(1).to({graphics:mask_graphics_31,x:227.4,y:136.6}).wait(1).to({graphics:mask_graphics_32,x:239.9,y:136.6}).wait(1).to({graphics:mask_graphics_33,x:252.4,y:136.6}).wait(1).to({graphics:mask_graphics_34,x:264.9,y:136.6}).wait(1).to({graphics:mask_graphics_35,x:274,y:136.6}).wait(1).to({graphics:mask_graphics_36,x:283.1,y:136.6}).wait(1).to({graphics:mask_graphics_37,x:292.2,y:136.6}).wait(1).to({graphics:mask_graphics_38,x:301.3,y:136.6}).wait(1).to({graphics:mask_graphics_39,x:310.4,y:136.6}).wait(1).to({graphics:mask_graphics_40,x:310.4,y:136.6}).wait(1));

	// Symbol 10
	this.instance_7 = new lib.Symbol10();
	this.instance_7.parent = this;
	this.instance_7.setTransform(439.8,119.5,1,1,0,0,0,87.5,112.5);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(26).to({_off:false},0).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,296.3,225.9);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(302.3,147,1,1,0,0,0,263.6,116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.ramka();
	this.instance_1.parent = this;
	this.instance_1.setTransform(21,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 6
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(124.5,152,1,1,0,0,0,234.5,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(162.1,122.1,717,375);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#5B191C",
	opacity: 1.00,
	manifest: [
		{src:"images/button.png?1488286159630", id:"button"},
		{src:"images/foot.jpg?1488286159630", id:"foot"},
		{src:"images/logo.png?1488286159630", id:"logo"},
		{src:"images/ramka.png?1488286159630", id:"ramka"},
		{src:"images/stav.png?1488286159630", id:"stav"},
		{src:"images/team1.png?1488286159630", id:"team1"},
		{src:"images/team2.png?1488286159630", id:"team2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;