(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,54);


(lib.grn900 = function() {
	this.initialize(img.grn900);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,371,178);


(lib.Layer1 = function() {
	this.initialize(img.Layer1);
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
	this.shape.graphics.f("#FFFFFF").s().p("AgmA8QgOgMAAgYIAgAAQAAAIAGAGQAFAEAIAAQAHAAAGgEQAEgFAAgGQAAgHgEgFQgGgEgHAAIgLAAIAAgcIAKAAQAGgBADgEQAEgDAAgFQAAgGgEgEQgEgDgFAAQgEAAgFACQgDADAAAFIghAAQgBgTANgKQAHgEAIgDQAJgCAJAAQAWAAAMAMQAHAFADAHQACAIAAAIQAAAHgCAIQgEAGgGAFQAVAKgBAYQABATgOAMQgOANgaAAQgYAAgNgNg");
	this.shape.setTransform(105.1,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag7BbIAAiLIAkAAIAABDIBIhEIALAAIAACMIgkAAIAAhIIhIBIgAgHg6QgGgCgFgEQgIgIgBgQIAVgCQAAAFADADQADACAFAAQAHAAADgCQAEgDABgFIAUACQgBAQgIAIQgJAIgQAAQgHAAgGgCg");
	this.shape_1.setTransform(91.7,7.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaBEQgNgEgKgJQgKgJgGgOQgGgOAAgSQAAgKADgKQADgKAFgJQALgRAQgIQAQgIASAAIANACIANADQANAFAKAJIAJAKQAEAFADAIQADAHABAIQACAHAAAIQAAAggUAVQgUAUggAAQgNAAgNgFgAgYgbQgFAFgCAHQgDAHAAAIQAAASAKAKQAGAFAGADQAGACAGAAQAOAAALgKQAKgKAAgSQAAgIgCgHQgDgHgFgFQgFgFgGgCQgGgDgHAAQgOAAgLAKg");
	this.shape_2.setTransform(76.2,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag3BGIAAiLIBjAAIAAAgIg/AAIAAASIAYAAQANAAAJAEQAJACAHAHQANAKAAAUQAAAKgEAIQgDAIgHAHQgNANgYAAgAgTAmIAYAAQAIAAADgEQAEgEAAgGQAAgFgEgFQgDgDgIAAIgYAAg");
	this.shape_3.setTransform(62.1,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrBGIAAiLIBXAAIAAAgIgyAAIAABrg");
	this.shape_4.setTransform(45.6,10);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWBGIAAg4IgrAAIAAA4IgkAAIAAiLIAkAAIAAAyIArAAIAAgyIAkAAIAACLg");
	this.shape_5.setTransform(32.4,10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAXBGIAAgsIgUAAIgXAsIgmAAIAAgFIAbgtQgUgOgBgaQAAgJAEgKQADgIAGgIQAOgOAYAAIA8AAIAACLgAgMggQgEAFAAAGQAAAIAEAFQAEAFAHAAIAYAAIAAgiIgYAAQgIAAgDAFg");
	this.shape_6.setTransform(17.7,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(9.2,0,104.1,24), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BGIAAiLIA9AAQAUAAAMAMQAMAMAAATQAAAHgDAGQgDAHgGAEQAFACADACIAGAIQAEAIAAAJQAAATgMAMQgLAMgWAAgAgSAmIAbAAQAJAAACgLQAAgFgDgDQgDgEgFAAIgbAAgAgSgOIAVAAQAGAAACgDQADgDAAgFQABgFgEgDQgCgEgGAAIgVAAg");
	this.shape.setTransform(112.6,9.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrBGIAAiLIBWAAIAAAgIgyAAIAAAUIAuAAIAAAfIguAAIAAAXIA0AAIAAAhg");
	this.shape_1.setTransform(100,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag7BGIAAiLIAkAAIAABEIBIhEIALAAIAACLIgkAAIAAhHIhJBHg");
	this.shape_2.setTransform(86.5,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVBHIgdg2IgRAAIAAA2IglAAIAAiLIAlAAIAAA3QAQAAAEgDQAEgCACgGIAGgUQACgHADgGQAEgFAGgEQAMgHAXAFIAAAZQgOgBgDALQgHAagKAKIAoA+IAAAGg");
	this.shape_3.setTransform(72.3,9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaBEQgNgEgKgJQgKgJgGgOQgGgOAAgSQAAgKADgKQADgKAFgJQALgRAQgIQAQgIASAAIANACIANADQANAFAKAJIAJAKQAEAFADAIQADAHABAIQACAHAAAIQAAAggUAVQgUAUggAAQgNAAgNgFgAgYgbQgFAFgCAHQgDAHAAAIQAAASAKAKQAGAFAGADQAGACAGAAQAOAAALgKQAKgKAAgSQAAgIgCgHQgDgHgFgFQgFgFgGgCQgGgDgHAAQgOAAgLAKg");
	this.shape_4.setTransform(51.8,10);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAgBGIAAhAIgeAfIgDAAIgegfIAABAIgkAAIAAiLIAMAAIA3A8IA4g8IAMAAIAACLg");
	this.shape_5.setTransform(35.6,10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjBHIgJgSIgzAAIgIASIgmAAIAAgFIBAiIIAQAAIA/CIIAAAFgAAPAXIgPghIgNAhIAcAAg");
	this.shape_6.setTransform(20.2,9.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAWBGIAAg4IgrAAIAAA4IgkAAIAAiLIAkAAIAAAyIArAAIAAgyIAkAAIAACLg");
	this.shape_7.setTransform(5.9,10);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag7BGIAAiLIAkAAIAABEIBIhEIALAAIAACLIgkAAIAAhHIhJBHg");
	this.shape_8.setTransform(-9,10);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AApBOIAAgQIhTAAIAAAQIgcAAIAAgvIAFAAQAIAAADgEQADgEABgKIALhaIBgAAIAABsIANAAIAAAvgAgOAOIgCALQgBAEgDADIAoAAIAAhOIgcAAg");
	this.shape_9.setTransform(-24.5,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-34.1,0,155.3,24), null);


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


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCB522").s().p("AggBvQgPgFgLgIQgLgJgGgNQgGgNAAgQQAAgLAEgKQADgKAGgIQAGgHAIgFQAIgFAKgDQgOgHgIgLQgEgGgCgGQgCgHAAgIQAAgNAFgLQAEgKAKgIQAJgHAMgEQAMgEAOAAQAOAAANAEQAMAEAJAHQAKAIAFAKQAFALAAAMQAAAIgDAHQgCAHgEAGQgIALgPAHQAKAEAIAFQAJAFAFAHQAHAHADAJQADAKABAMQAAAPgGANQgHAMgLAJQgLAKgPAFQgPAEgRAAQgRAAgPgEgAgUACQgKADgIAGQgIAHgEAIQgFAJAAALQAAALAFAJQAEAIAIAHQAIAGAKADQAKADAKAAQALAAAKgDQAKgDAIgGQAIgHAEgIQAFgJAAgLQAAgLgFgJQgEgJgIgGQgIgGgKgDQgKgCgLAAQgKAAgKACgAgPhaQgIACgGAFQgHAEgDAHQgEAHAAAIQAAAJAEAHQADAGAGAFQAGAEAIADQAIACAIAAQAIAAAIgCQAIgDAGgEQAHgFADgHQAEgHAAgIQAAgIgEgHQgDgHgHgFQgGgEgIgCQgIgDgIAAQgIAAgHADg");
	this.shape.setTransform(120.7,95.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB522").s().p("AgfBuQgPgFgLgKQgMgKgGgOQgHgPAAgSIAAhMQAAgRAHgPQAGgOAMgKQALgKAPgGQAPgFARAAQARAAAPAFQAPAGALAKQALAKAHAOQAGAPAAARIAABMQAAASgGAPQgHAOgLAKQgLAKgPAFQgPAGgRAAQgRAAgPgGgAgRhZQgJACgHAFQgHAEgFAHQgFAHgDAJQgDAKAAAOIAAA/QAAANADALQADAIAFAHQAFAHAHAFQAHAEAJADQAJACAJAAQAJAAAJgCQAJgDAHgEQAHgFAFgHQAFgHACgIQAEgLAAgNIAAg/QAAgOgEgKQgCgJgFgHQgFgHgHgEQgHgFgJgCQgJgDgJAAQgJAAgJADg");
	this.shape_1.setTransform(100.2,95.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCB522").s().p("AgLALQgFgFABgGQgBgGAFgEQAFgEAGAAQAHAAAFAEQAEAEAAAGQAAAGgEAFQgFAEgHAAQgGAAgFgEg");
	this.shape_2.setTransform(86,105.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCB522").s().p("AhGByIAAgGIBchzQALgMAEgPQAFgOgCgNQgCgNgJgIQgFgEgHgCQgIgCgJAAQgJAAgIACQgIADgFAEQgGAFgDAIQgDAHgBAKIgWAAQAAgPAFgMQAFgLAIgIQAIgIAMgEQANgEAPAAQAOAAAMAEQAMAEAIAHQAIAHAFAKQAEAJACALQABAPgEAPQgJAWgIAJIhIBaIBhAAIAAAYg");
	this.shape_3.setTransform(73.2,94.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCB522").s().p("AgfBuQgPgFgLgKQgMgKgGgOQgHgPAAgSIAAhMQAAgRAHgPQAGgOAMgKQALgKAPgGQAPgFARAAQARAAAPAFQAPAGALAKQALAKAHAOQAGAPAAARIAABMQAAASgGAPQgHAOgLAKQgLAKgPAFQgPAGgRAAQgRAAgPgGgAgRhZQgJACgHAFQgHAEgFAHQgFAHgDAJQgDAKAAAOIAAA/QAAANADALQADAIAFAHQAFAHAHAFQAHAEAJADQAJACAJAAQAJAAAJgCQAJgDAHgEQAHgFAFgHQAFgHACgIQAEgLAAgNIAAg/QAAgOgEgKQgCgJgFgHQgFgHgHgEQgHgFgJgCQgJgDgJAAQgJAAgJADg");
	this.shape_4.setTransform(54.1,95.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiCDQgPgFgMgJQgMgKgHgNQgHgOgCgSIAeAAQABALAFAIQAFAJAIAGQAHAFAKADQAKADALAAQAKAAAKgDQALgDAJgHQAJgHAFgLQAGgNAAgQQAAgRgGgNQgGgMgLgGQgKgHgOgDQgLgDgPAAIgkACQgSACgNAEIAAiBICcAAIAAAdIh/AAIAABFQAUgFAVAAQAUAAASAFQATAFAOAKQAPALAIAQQAEAJACAKQACALgBAMQAAAUgGAQQgHAQgMAMQgMAMgRAGQgRAHgUAAQgRAAgPgFg");
	this.shape_5.setTransform(119.2,130.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhDCFIAAgZIA1AAIAAjXIgvAAIAAgaIBMAAIAADxIA1AAIAAAZg");
	this.shape_6.setTransform(100.1,129.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNBMQgGgFAAgIQAAgIAGgFQAFgFAIAAQAIAAAGAFQAFAFABAIQgBAIgFAFQgGAGgIAAQgIAAgFgGgAgNgyQgGgFAAgHQAAgJAGgFQAFgEAIAAQAIAAAGAEQAFAFABAJQgBAHgFAFQgGAGgIAAQgIAAgFgGg");
	this.shape_7.setTransform(87,135.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhDCFIAAgZIA1AAIAAjXIgvAAIAAgaIBMAAIAADxIA1AAIAAAZg");
	this.shape_8.setTransform(74.6,129.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhTCHIAAgHIBtiIQAMgPAGgRQAGgSgCgOQgCgQgMgJQgGgFgJgCQgIgDgLAAQgLAAgJADQgKADgHAFQgGAGgDAIQgEAJgCAMIgaAAQABgSAFgOQAGgNAKgJQAKgKAOgFQAPgEARAAQASAAAOAEQAOAFAKAIQAKAJAFALQAFALACANQACASgGASQgKAagJALIhWBrIBzAAIAAAcg");
	this.shape_9.setTransform(55.5,129.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(42.6,81.3,89.4,73.2), null);


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
	this.instance.setTransform(-7,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-7,-13,108,127), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.team1();
	this.instance.parent = this;
	this.instance.setTransform(0,-8,0.897,0.897);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,-8,104,139.9), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol2, null, null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,-8,104,139.9), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(54,63.5,1,1,0,0,0,54,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-7,-13,108,127), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(234.5,155,1,1,0,0,0,234.5,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

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


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,255,0,0)").ss(1,1,1).p("Al8k3IL5AAIAAJuIr5AAg");
	this.shape.setTransform(-390.5,216.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB522").s().p("Al9E3IAApuIL6AAIAAJug");
	this.shape_1.setTransform(-390.5,216.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(234.5,155,1,1,0,0,0,234.5,155);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(-429.6,0,898.7,310), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(40));

	// Symbol 11
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(151.6,152.1,1,1,0,0,0,15.3,12);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({regX:14.4,scaleX:20.02,scaleY:20.02,x:132.7},0).to({regX:15.3,scaleX:1,scaleY:1,x:151.6,alpha:1},10).wait(21).to({_off:true},1).wait(39));

	// Symbol 16
	this.instance_1 = new lib.Symbol16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(146.3,20.5,1,1,0,0,0,77,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({y:10.5},3).to({y:20.5},3).wait(49));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_19 = new cjs.Graphics().p("AJJMHQgogogCg4IAAgDIAAgCQAAg7AqgqQAqgqA7AAQA7AAAqAqQAqAqAAA7IAAACIAAADQgBA4gpAoQgqAqg7AAQg7AAgqgqg");
	var mask_graphics_20 = new cjs.Graphics().p("AFBM0QhmhmgEiNIAAgFIAAgGQAAiVBqhqQBphpCVAAQCVAABpBpQBqBqAACVIAAAGIAAAFQgECNhmBmQhpBqiVAAQiVAAhphqg");
	var mask_graphics_21 = new cjs.Graphics().p("AA4NhQiiijgGjiIAAgIIAAgKQAAjvCoipQCqipDuAAQDuAACpCpQCqCpAADvIAAAKIAAAIQgGDiikCjQipCqjuAAQjuAAiqiqg");
	var mask_graphics_22 = new cjs.Graphics().p("AjPOOQjhjhgJk3IAAgLIAAgOQAAlHDqjpQDojpFIAAQFHAADqDpQDpDpAAFHIAAAOIAAALQgJE3jgDhQjqDplHAAQlIAAjojpg");
	var mask_graphics_23 = new cjs.Graphics().p("AnYO7QkekegLmMIAAgOIAAgSQAAmgEpkpQEpkpGgAAQGiAAEpEpQEpEpAAGgIAAASIAAAOQgLGMkeEeQkpEpmiAAQmgAAkpkpg");
	var mask_graphics_24 = new cjs.Graphics().p("ArgPoQlclcgNnhIAAgRIAAgVQAAn6FplpQFolpH6AAQH7AAFpFpQFoFpAAH6IAAAVIAAARQgMHhlcFcQlpFpn7AAQn6AAlolpg");
	var mask_graphics_25 = new cjs.Graphics().p("AvpQVQmZmZgPo2IAAgUIAAgZQAApUGomoQGpmpJTAAQJUAAGpGpQGoGoAAJUIAAAZIAAAUQgPI2mZGZQmpGppUAAQpTAAmpmpg");
	var mask_graphics_26 = new cjs.Graphics().p("AyVSWQnXnXgRqLIAAgXIAAgdQAAqtHonoQHonoKtAAQKuAAHoHoQHoHoAAKtIAAAdIAAAXQgRKLnXHXQnoHoquAAQqtAAnonog");
	var mask_graphics_27 = new cjs.Graphics().p("A0uUvQoVoUgTrgIAAgaIAAghQAAsGIoooQIoooMGAAQMHAAIoIoQIoIoAAMGIAAAhIAAAaQgTLgoVIUQooIosHAAQsGAAoooog");
	var mask_graphics_28 = new cjs.Graphics().p("A3IXJQpRpSgWs1IAAgdIAAglQAAtgJnpoQJopnNgAAQNhAAJoJnQJnJoAANgIAAAlIAAAdQgWM1pRJSQpoJnthAAQtgAApopng");
	var mask_graphics_29 = new cjs.Graphics().p("A5hZiQqPqPgZuKIAAghIAAgoQAAu6KoqnQKnqoO6AAQO7AAKnKoQKoKnAAO6IAAAoIAAAhQgZOKqPKPQqnKou7AAQu6AAqnqog");
	var mask_graphics_30 = new cjs.Graphics().p("A76b7QrNrMgbvfIAAgkIAAgsQAAwTLornQLnroQTAAQQUAALnLoQLoLnAAQTIAAAsIAAAkQgbPfrNLMQrnLowUAAQwTAArnrog");
	var mask_graphics_31 = new cjs.Graphics().p("A+UeVQsKsLgdw0IAAgmIAAgwQAAxtMnsnQMnsnRtAAQRuAAMnMnQMnMnAARtIAAAwIAAAmQgdQ0sKMLQsnMnxuAAQxtAAsnsng");
	var mask_graphics_32 = new cjs.Graphics().p("EggtAguQtItIgfyJIAAgpIAAg0QAAzGNntnQNntnTGAAQTHAANnNnQNnNnAATGIAAA0IAAApQgfSJtINIQtnNnzHAAQzGAAtntng");
	var mask_graphics_33 = new cjs.Graphics().p("EgjGAjHQuFuFgizeIAAgsIAAg4QAA0gOnumQOmunUgAAQUhAAOmOnQOnOmAAUgIAAA4IAAAsQgiTeuFOFQumOn0hAAQ0gAAumung");
	var mask_graphics_34 = new cjs.Graphics().p("EglgAlhQvCvDgk0zIAAgwIAAg7QAA15PmvnQPnvmV5AAQV6AAPnPmQPmPnAAV5IAAA7IAAAwQgkUzvCPDQvnPm16AAQ15AAvnvmg");
	var mask_graphics_35 = new cjs.Graphics().p("Egn5An6QwAwAgm2IIAAgzIAAg/QAA3TQmwmQQmwmXTAAQXUAAQmQmQQmQmAAXTIAAA/IAAAzQgmWIwAQAQwmQm3UAAQ3TAAwmwmg");
	var mask_graphics_36 = new cjs.Graphics().p("EgqSAqTQw+w9go3dIAAg2IAAhDQAA4sRmxmQRmxmYsAAQYtAARmRmQRmRmAAYsIAABDIAAA2QgoXdw+Q9QxmRm4tAAQ4sAAxmxmg");
	var mask_graphics_37 = new cjs.Graphics().p("EgsrAssQx7x7gr4yIAAg4IAAhHQAA6GSmylQSlymaGAAQaHAASlSmQSmSlAAaGIAABHIAAA4QgrYyx7R7QylSm6HAAQ6GAAylymg");
	var mask_graphics_38 = new cjs.Graphics().p("EgvFAvGQy4y5gt6HIAAg7IAAhLQAA7fTlzmQTmzlbfAAQbgAATmTlQTlTmAAbfIAABLIAAA7QgtaHy4S5QzmTl7gAAQ7fAAzmzlg");
	var mask_graphics_39 = new cjs.Graphics().p("EgxeAxfQz2z2gv7cIAAg/IAAhOQAA85Ul0lQUl0lc5AAQc6AAUlUlQUlUlAAc5IAABOIAAA/Qgvbcz2T2Q0lUl86AAQ85AA0l0lg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_graphics_19,x:82.9,y:81.7}).wait(1).to({graphics:mask_graphics_20,x:93.5,y:92.6}).wait(1).to({graphics:mask_graphics_21,x:104.1,y:103.5}).wait(1).to({graphics:mask_graphics_22,x:114.7,y:114.3}).wait(1).to({graphics:mask_graphics_23,x:125.3,y:125.2}).wait(1).to({graphics:mask_graphics_24,x:135.8,y:136.1}).wait(1).to({graphics:mask_graphics_25,x:146.4,y:147}).wait(1).to({graphics:mask_graphics_26,x:147.8,y:149.5}).wait(1).to({graphics:mask_graphics_27,x:148.1,y:146.4}).wait(1).to({graphics:mask_graphics_28,x:148.4,y:143.4}).wait(1).to({graphics:mask_graphics_29,x:148.7,y:140.4}).wait(1).to({graphics:mask_graphics_30,x:148.9,y:137.3}).wait(1).to({graphics:mask_graphics_31,x:149.2,y:134.3}).wait(1).to({graphics:mask_graphics_32,x:149.5,y:131.3}).wait(1).to({graphics:mask_graphics_33,x:149.8,y:128.2}).wait(1).to({graphics:mask_graphics_34,x:150.1,y:125.2}).wait(1).to({graphics:mask_graphics_35,x:150.4,y:122.1}).wait(1).to({graphics:mask_graphics_36,x:150.7,y:119.1}).wait(1).to({graphics:mask_graphics_37,x:151,y:116.1}).wait(1).to({graphics:mask_graphics_38,x:151.3,y:113}).wait(1).to({graphics:mask_graphics_39,x:151.5,y:158.6}).wait(41));

	// t1
	this.instance_2 = new lib.Symbol15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(63.6,64.1,1,1,0,0,0,63.6,12);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(4).to({x:53.6,y:54.1},3).to({x:63.6,y:64.1},3).wait(45).to({alpha:0},5).wait(1));

	// t2
	this.instance_3 = new lib.Symbol13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(240.9,64.1,1,1,0,0,0,50.6,12);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(4).to({x:250.9,y:54.1},3).to({x:240.9,y:64.1},3).wait(45).to({alpha:0},5).wait(1));

	// t1logo
	this.instance_4 = new lib.Symbol14();
	this.instance_4.parent = this;
	this.instance_4.setTransform(62.3,155.9,1,1,0,0,0,52,69.9);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).wait(2).to({x:52.3},4).to({x:62.3},4).wait(45).to({alpha:0},5).wait(1));

	// t2logo
	this.instance_5 = new lib.Symbol12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(242.3,159.5,1,1,0,0,0,54,63.5);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).wait(2).to({x:252.3},4).to({x:242.3},4).wait(45).to({alpha:0},5).wait(1));

	// Symbol 10
	this.instance_6 = new lib.Symbol10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(439.8,128.5,1,1,0,0,0,87.5,112.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(26).to({_off:false},0).wait(48).to({y:119.5},0).to({alpha:0},5).wait(1));

	// Layer 4
	this.instance_7 = new lib.grn900();
	this.instance_7.parent = this;
	this.instance_7.setTransform(349,-1,0.483,0.483);

	this.instance_8 = new lib.Symbol20();
	this.instance_8.parent = this;
	this.instance_8.setTransform(440.9,205.1,1,1,0,0,0,87.5,27);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2, false, new lib.Symbol20(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(80));

	// Layer 9 copy
	this.instance_9 = new lib.Symbol18();
	this.instance_9.parent = this;
	this.instance_9.setTransform(151.4,149.1,0.283,0.283,0,0,0,57.2,57.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({_off:false},0).to({scaleX:3.08,scaleY:3.08,x:147.4,y:145},7).to({regX:55.8,regY:55.9,scaleX:8.28,scaleY:8.28,x:139.8,y:138},13).to({_off:true},1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.3,-1,462.1,234);


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
	this.instance_1 = new lib.Symbol40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(314.5,155,1,1,0,0,0,234.5,155);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(28,-3.9,475,313), null);


// stage content:
(lib._640305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 5
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(313.8,153.8,1.059,1.059,0,0,0,263.6,116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.ramka();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23,21,1.073,1.023);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 6
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(124.5,152,1,1,0,0,0,234.5,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.1,124.6,1081.2,375);
// library properties:
lib.properties = {
	id: '056DADFE5E13401B8D85320E94262F4F',
	width: 640,
	height: 305,
	fps: 24,
	color: "#5B191C",
	opacity: 1.00,
	manifest: [
		{src:"images/button.png?1501599693101", id:"button"},
		{src:"images/grn900.png?1501599693101", id:"grn900"},
		{src:"images/Layer1.jpg?1501599693101", id:"Layer1"},
		{src:"images/logo.png?1501599693101", id:"logo"},
		{src:"images/ramka.png?1501599693101", id:"ramka"},
		{src:"images/team1.png?1501599693101", id:"team1"},
		{src:"images/team2.png?1501599693101", id:"team2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['056DADFE5E13401B8D85320E94262F4F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;