(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"hock_300_400_atlas_", frames: [[0,0,800,450],[802,276,131,204],[856,550,59,79],[802,0,196,274],[750,482,104,82],[671,452,77,117],[215,452,141,158],[856,482,74,66],[588,452,81,124],[935,448,56,230],[358,452,117,102],[0,452,213,117],[477,452,109,96],[477,550,78,94],[358,556,65,67],[935,276,89,170]]}
];


// symbols:



(lib.back = function() {
	this.spriteSheet = ss["hock_300_400_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body = function() {
	this.spriteSheet = ss["hock_300_400_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.head = function() {
	this.spriteSheet = ss["hock_300_400_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.klowka = function() {
	this.spriteSheet = ss["hock_300_400_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.leffot = function() {
	this.spriteSheet = ss["hock_300_400_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.lefhand = function() {
	this.spriteSheet = ss["hock_300_400_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.lefleg = function() {
	this.spriteSheet = ss["hock_300_400_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.lefshold = function() {
	this.spriteSheet = ss["hock_300_400_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.medal1 = function() {
	this.spriteSheet = ss["hock_300_400_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.medal2 = function() {
	this.spriteSheet = ss["hock_300_400_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.medal3 = function() {
	this.spriteSheet = ss["hock_300_400_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.medal4 = function() {
	this.spriteSheet = ss["hock_300_400_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.medal5 = function() {
	this.spriteSheet = ss["hock_300_400_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.rigfot = function() {
	this.spriteSheet = ss["hock_300_400_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.righthand = function() {
	this.spriteSheet = ss["hock_300_400_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.rigleg = function() {
	this.spriteSheet = ss["hock_300_400_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,800,450), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALHBHIhLAAIgQA1IgwgQIBLjhIA2AAIBMDhIgwAQgAK6AbIgTg2IgEgZIgBAAIgFAZIgSA2IAvAAgABBBsIg0hVIgOAAIAABeIgzAAIAAjqIAzAAIAABcIARAAIAvhSIAzgQIAOAvIgcAJIgoBDIAqBFIAcAJIgOAugAk1BPIAegLIAKgKIAVivICcAAIAADqIg0AAIAAi5Ig6AAIgRCTIgcAdIgvAQgAl3BHIhLAAIgQA1IgwgQIBLjhIA2AAIBMDhIgwAQgAmEAbIgTg2IgEgZIgBAAIgFAZIgSA2IAvAAgAH1B1IAAheIhOAAIAABeIgzAAIAAjqIAzAAIAABcIBOAAIAAhcIAzAAIAADqgAEZB1IAAh/IAEgWIgCAAIgIAVIhNCAIguAAIAAjqIAzAAIAACBIgEAWIACAAIAIgWIBNiBIAuAAIAADqgApJB1IAAh8IAEgWIgCAAIgIAWIguBLIgjAAIguhLIgJgWIgBAAIADAWIAAB8IgzAAIAAjqIAvAAIBGByIADALIACAAIAEgLIBFhyIAvAAIAADqg");
	this.shape.setTransform(77.7,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,155.4,24.8), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACIBEIhKAAIgQA1IgwgQIBLjhIA2AAIBLDhIgwAQgAB7AYIgSg2IgFgZIgBAAIgEAZIgTA2IAvAAgAhIByIAAhfIhOAAIAABfIgzAAIAAjqIAzAAIAABcIBOAAIAAhcIAzAAIAADqg");
	this.shape.setTransform(20.2,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,40.5,24.2), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiCRIAAg3IiAAAIAAA3IgzAAIAAhnIAYAAIAMgcIATieICXAAIAAC6IAXAAIAABngAh+AXIgIATIBMAAIAAiKIg2AAgADkAzIAegLIAKgKIAViuICcAAIAADqIg0AAIAAi6Ig6AAIgRCTIgcAeIgvAPgACiAsIhLAAIgQA0IgwgQIBLjgIA2AAIBMDgIgwAQgACVAAIgTg3IgEgYIgBAAIgFAYIgSA3IAvAAgAHlBaIAAjqIAzAAIAABPIBXAAIAqAqIAABGIgqArgAIYAqIBAAAIANgOIAAggIgNgNIhAAAgAl+BaIAAjqICjAAIAAAwIhwAAIAAAoIBiAAIAAAwIhiAAIAAAyIBwAAIAAAwgAnZBaIAAh8IAEgWIgCAAIgIAVIguBLIgjAAIguhLIgJgVIgBAAIADAWIAAB8IgzAAIAAjqIAvAAIBGBxIADAMIACAAIAEgMIBFhxIAvAAIAADqg");
	this.shape.setTransform(66.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,133,29.1), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiPCRIAAg3IiAAAIAAA3IgzAAIAAhnIAYAAIAMgcIATieICXAAIAAC6IAYAAIAABngAjsAXIgIATIBNAAIAAiKIg2AAgAFXBaIAAjqIAzAAIAABPIBXAAIAqAqIAABGIgqArgAGKAqIBBAAIAMgOIAAggIgMgNIhBAAgAD8BaIAAheIhOAAIAABeIgzAAIAAjqIAzAAIAABcIBOAAIAAhcIAzAAIAADqgAhCBaIAAjqICiAAIAAAwIhuAAIAAAoIBhAAIAAAwIhhAAIAAAyIBuAAIAAAwgAncBaIgugqIAAiWIAugqIBiAAIAuAqIAACWIguAqgAnXhSIAABuIAQAOIA4AAIAQgOIAAhuIgQgOIg4AAg");
	this.shape.setTransform(52.3,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,104.6,29.1), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(8.1,1,1).p("AAAAAIhxhxAByhxIhyBxIhxByAByByIhyhy");
	this.shape.setTransform(11.4,11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-4,-4,30.9,30.9), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(8.1,1,1).p("AHMAAIhnAAAAGnSIAAB2AlWAAIh1AAAAGFlIAABu");
	this.shape.setTransform(46,46.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-4,-4,100.1,101.5), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(8.1,1,1).p("AFtAAQAAAPgBAOQgJCFhhBgQhOBPhnAVQglAHgoAAQgnAAgkgHQhogVhOhPQhDhCgZhTQgPgzAAg6QAAg5APgzQAZhTBDhCQBAhBBQgZQA2gRA7AAQA8AAA2ARQBQAZBABBQBhBgAJCFQABAOAAAOg");
	this.shape.setTransform(36.5,36.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-4,-4,81.1,81.1), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.medal1();
	this.instance.parent = this;
	this.instance.setTransform(0,40.5,1,0.734,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,115.7,119.3), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.medal3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,117,102), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.medal2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,56,230), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.medal4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,213,117), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.medal5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,109,96), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.klowka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,196,274), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lefhand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,77,117), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.body();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,131,204), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.head();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,59,79), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leffot();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,104,82), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lefleg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,141,158), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lefshold();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,74,66), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rigleg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,89,170), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rigfot();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,78,94), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.righthand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,65,67), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol35();
	this.instance.parent = this;
	this.instance.setTransform(400,225,1,1,0,0,0,400,225);
	this.instance.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance.cache(-2,-2,804,454);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(-3,-3,810,460), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 33
	this.instance = new lib.Symbol33();
	this.instance.parent = this;
	this.instance.setTransform(149.2,61.1,1,1,0,0,0,77.7,12.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({regX:77.6,regY:12.5,scaleX:1.28,scaleY:1.28,x:149.1,y:61.3},9,cjs.Ease.get(-1)).to({regX:77.7,regY:12.4,scaleX:1,scaleY:1,x:149.2,y:61.1},10,cjs.Ease.get(1)).wait(2));

	// Symbol 32
	this.instance_1 = new lib.Symbol32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(38.3,61.5,1,1,0,0,0,20.2,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({scaleX:1.4,scaleY:1.4},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(7));

	// Symbol 31
	this.instance_2 = new lib.Symbol31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(188.5,23.3,1,1,0,0,0,66.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({scaleX:1.24,scaleY:1.24,x:188.6,y:23.4},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:188.5,y:23.3},10,cjs.Ease.get(1)).wait(11));

	// Symbol 30
	this.instance_3 = new lib.Symbol30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(55.9,23.3,1,1,0,0,0,52.3,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.18,scaleY:1.18,y:23.4},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:23.3},10,cjs.Ease.get(1)).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.6,8.8,251.4,64.7);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol28();
	this.instance.parent = this;
	this.instance.setTransform(46,46.6,1,1,0,0,0,46,46.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,100.1,101.5);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol29();
	this.instance.parent = this;
	this.instance.setTransform(11.4,11.3,1,1,0,0,0,11.4,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,30.9,30.9);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Symbol24();
	this.instance.parent = this;
	this.instance.setTransform(-29,38.3,0.714,0.714,0,0,0,11.4,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-29.1,38.2,1,1,0,0,0,46,46.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.Symbol26();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-29,38.2,1,1,0,0,0,36.5,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-79.1,-12.5,100.2,101.5), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 20
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(161.7,-49.6,0.622,0.533,-12.2,0,0,28.2,114.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:10.3,x:141.4,y:-55},9,cjs.Ease.get(-1)).to({regX:28.1,regY:114.7,rotation:35.7,x:120.8,y:-71.3},10,cjs.Ease.get(1)).to({regX:28.2,rotation:0,skewX:11.6,skewY:11.8,x:141.3,y:-57.5},10,cjs.Ease.get(-1)).to({regY:114.9,rotation:-12.2,skewX:0,skewY:0,x:161.7,y:-49.6},10,cjs.Ease.get(1)).wait(1));

	// Symbol 21
	this.instance_1 = new lib.Symbol21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(144.9,-128.7,0.622,0.622,13.7,0,0,58.5,50.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:58.6,regY:50.7,scaleX:0.62,scaleY:0.62,rotation:27.1,x:153.1,y:-135.3},9,cjs.Ease.get(-1)).to({regY:50.8,scaleX:0.62,scaleY:0.62,rotation:42.2,x:162,y:-142.6},10,cjs.Ease.get(1)).to({regY:50.7,scaleX:0.62,scaleY:0.62,rotation:27.8,x:153.5,y:-135.7},10,cjs.Ease.get(-1)).to({regX:58.5,regY:50.8,scaleX:0.62,scaleY:0.62,rotation:13.7,x:144.9,y:-128.7},10,cjs.Ease.get(1)).wait(1));

	// Symbol 19
	this.instance_2 = new lib.Symbol19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(229.1,-73.1,0.622,0.622,19.9,0,0,106.5,58.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.62,scaleY:0.62,rotation:23.3,x:228.5,y:-71.6},9,cjs.Ease.get(-1)).to({regX:106.4,regY:58.3,scaleX:0.62,scaleY:0.62,rotation:27.2,x:227.7,y:-70},10,cjs.Ease.get(1)).to({regY:58.2,scaleX:0.62,scaleY:0.62,rotation:23.5,x:228.4,y:-71.7},10,cjs.Ease.get(-1)).to({regX:106.5,regY:58.4,scaleX:0.62,scaleY:0.62,rotation:19.9,x:229.1,y:-73.1},10,cjs.Ease.get(1)).wait(1));

	// Symbol 18
	this.instance_3 = new lib.Symbol18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(310.9,-35.7,0.622,0.622,19.9,0,0,54.6,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:54.7,regY:47.9,scaleX:0.62,scaleY:0.62,rotation:23.3,x:307.3,y:-30.1},9,cjs.Ease.get(-1)).to({regX:54.8,regY:48,scaleX:0.62,scaleY:0.62,rotation:27.2,x:303.4,y:-23.7},10,cjs.Ease.get(1)).to({regX:54.9,scaleX:0.62,scaleY:0.62,rotation:23.5,x:307.2,y:-29.6},10,cjs.Ease.get(-1)).to({regX:54.6,scaleX:0.62,scaleY:0.62,rotation:19.9,x:310.9,y:-35.7},10,cjs.Ease.get(1)).wait(1));

	// Symbol 22
	this.instance_4 = new lib.Symbol22();
	this.instance_4.parent = this;
	this.instance_4.setTransform(124.3,-127.8,0.622,0.622,4.9,0,0,57.9,59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:59.4,rotation:15.3,x:127.9,y:-138.2},9,cjs.Ease.get(-1)).to({regY:59.6,rotation:27.2,x:137.8,y:-149.5},10,cjs.Ease.get(1)).to({rotation:16,x:128.1,y:-138.7},10,cjs.Ease.get(-1)).to({regY:59.5,rotation:4.9,x:124.3,y:-127.8},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(85.2,-168,267.7,182.1);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(98,137,1,1,0,0,0,98,137);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:68.2,x:111.8,y:135},4).to({rotation:0,x:98,y:137},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196,274);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(38.5,58.5,1,1,0,0,0,38.5,58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:38.4,scaleX:1,skewX:-65.7,skewY:-69.9,x:-0.1,y:72.7},9).to({regX:38.5,scaleX:1,skewX:0,skewY:0,x:38.5,y:58.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77,117);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol34();
	this.instance.parent = this;
	this.instance.setTransform(400,225,1,1,0,0,0,400,225);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:420},24,cjs.Ease.get(-1)).to({x:440.8},25,cjs.Ease.get(1)).to({x:421.2},24,cjs.Ease.get(-1)).to({x:400},26,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,810,460);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// righthand.png
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(231.2,163.8,0.732,0.732,-7.7,0,0,19,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:18.9,rotation:0,x:223.9,y:141},4).to({rotation:-3.6,x:182.5,y:113.8},4).to({regX:19,rotation:-18.9,x:109.7,y:135.5},4).to({regX:19.1,regY:20.1,scaleX:0.73,scaleY:0.73,rotation:-9.6,x:116.9,y:153.9},5,cjs.Ease.get(1)).to({regX:19.2,regY:20.2,rotation:-24.6,x:89.2,y:125},5).to({regX:18.9,regY:19.9,scaleX:0.73,scaleY:0.73,rotation:-10.2,x:176.6,y:99.8},5).to({regX:19.1,regY:20,rotation:7.3,x:272.4,y:155.3},5).to({regX:19,regY:19.9,rotation:-7.7,x:231.2,y:163.8},4,cjs.Ease.get(1)).wait(1));

	// rigfot.png
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(218.8,262.8,0.732,0.732,-7.7,0,0,39.1,19.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:0,x:198.4,y:237.5},4).to({scaleX:0.73,scaleY:0.73,rotation:-35.6,x:170.8,y:217.2},4).to({regX:39,regY:19.9,scaleX:0.73,scaleY:0.73,rotation:-78.9,x:132.5,y:242.5},4).to({regX:38.9,regY:20,scaleX:0.73,scaleY:0.73,rotation:-76.5,x:122.6,y:259.2},5,cjs.Ease.get(1)).to({regY:20.1,rotation:-91.5,x:121.9,y:225.2},5).to({regX:39.1,regY:19.7,rotation:-42.3,x:177,y:203.8},5).to({regX:39.2,scaleX:0.73,scaleY:0.73,rotation:7.3,x:234.8,y:247.7},5).to({regX:39.1,rotation:-7.7,x:218.8,y:262.8},4,cjs.Ease.get(1)).wait(1));

	// rigleg.png
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(225,310.2,0.732,0.66,15,0,0,18.2,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:17.9,scaleY:0.73,rotation:0,x:198.3,y:291.9},4).to({regX:18.1,rotation:-3.3,x:191.2,y:247.8},4).to({regY:12.3,rotation:-48.2,x:171.9,y:250.2},4).to({regX:18.2,scaleX:0.73,scaleY:0.73,rotation:-79.8,x:173.5,y:270.1},5,cjs.Ease.get(1)).to({regY:12.4,rotation:-49.8,x:160.8,y:223.7},5).to({regX:18.1,regY:12.1,scaleX:0.73,scaleY:0.73,rotation:-10,x:200.9,y:231.8},5).to({regX:18,rotation:15,x:227.8,y:299.3},5).to({regX:18.2,scaleY:0.66,x:225,y:310.2},4,cjs.Ease.get(1)).wait(1));

	// lefleg.png
	this.instance_3 = new lib.Symbol7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(125,276,0.732,0.732,-7.7,0,0,126.7,27.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:27.4,rotation:0,x:103.7,y:238},4).to({regX:126.6,scaleX:0.72,scaleY:0.74,skewX:6,skewY:14.2,x:79.9,y:237.5},4).to({regX:126.3,regY:27.6,scaleX:0.71,scaleY:0.74,skewX:-31,skewY:-15.9,x:59.1,y:297.3},4).to({regX:125.5,regY:27.8,scaleX:0.72,scaleY:0.74,skewX:-50.9,skewY:-28.7,x:43.6,y:304},5,cjs.Ease.get(1)).to({regX:126.2,regY:27.7,scaleX:0.73,scaleY:0.74,skewX:-46.6,skewY:-27.9,x:55.4,y:292.8},5).to({regX:126.7,regY:27.4,scaleX:0.72,scaleY:0.74,skewX:-30.7,skewY:-22.5,x:92.2,y:234.2},5).to({regX:126.8,scaleX:0.73,scaleY:0.73,rotation:7.3,skewX:0,skewY:0,x:140.8,y:236.1},5).to({regX:126.7,regY:27.3,rotation:-7.7,x:125,y:276},4,cjs.Ease.get(1)).wait(1));

	// leffot.png
	this.instance_4 = new lib.Symbol9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(180.9,269.7,0.732,0.732,-7.7,0,0,90.4,41.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:0,x:159.9,y:239.2},4).to({regY:41.2,scaleX:0.73,scaleY:0.74,skewX:-17,skewY:-27.3,x:127.3,y:215.6},4).to({regY:41.5,scaleX:0.73,scaleY:0.74,skewX:-43.9,skewY:-63.2,x:84.8,y:247.8},4).to({regY:41.4,scaleX:0.73,scaleY:0.74,skewX:-34.7,skewY:-54.2,x:74.8,y:259.5},5,cjs.Ease.get(1)).to({regY:41.5,skewX:-49.7,skewY:-69.2,x:75.8,y:237.8},5).to({regY:41.3,scaleY:0.74,skewX:-23.7,skewY:-34,x:133.6,y:207.3},5).to({regY:41.2,scaleX:0.73,scaleY:0.73,rotation:7.3,skewX:0,skewY:0,x:196.3,y:244.5},5).to({regY:41.1,rotation:-7.7,x:180.9,y:269.7},4,cjs.Ease.get(1)).wait(1));

	// klowka.png
	this.instance_5 = new lib.Symbol10();
	this.instance_5.parent = this;
	this.instance_5.setTransform(269.2,193.6,0.732,0.732,-7.7,0,0,108,162.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:0,x:257.7,y:175.6},4).to({scaleX:0.73,scaleY:0.73,rotation:12.3,x:213,y:144.8},4).to({regY:162.2,scaleX:0.73,scaleY:0.73,rotation:11.1,x:142.5,y:157},4).to({regX:108.2,scaleX:0.73,scaleY:0.73,rotation:20.2,x:145.7,y:179.9},5,cjs.Ease.get(1)).to({rotation:5.2,x:123.6,y:142.6},5).to({regX:108,regY:162.1,rotation:5.6,x:210.6,y:127},5).to({scaleX:0.73,scaleY:0.73,rotation:7.3,x:301.4,y:193.8},5).to({rotation:-7.7,x:269.2,y:193.6},4,cjs.Ease.get(1)).wait(1));

	// head.png
	this.instance_6 = new lib.Symbol11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(185.8,169.3,0.732,0.732,-7.7,0,0,29.5,79);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:29.4,rotation:0,x:178.2,y:140.4},4).to({rotation:-3.6,x:137,y:116.1},4).to({regX:29.6,regY:79.2,rotation:-18.9,x:66.3,y:149.8},4).to({regY:79.3,scaleX:0.73,scaleY:0.73,rotation:-9.6,x:72.3,y:160.9},5,cjs.Ease.get(1)).to({regX:29.5,regY:79.4,rotation:-24.6,x:47.8,y:143.3},5).to({regY:79,scaleX:0.73,scaleY:0.73,rotation:-10.2,x:131.8,y:107.4},5).to({regX:29.6,regY:79.2,rotation:7.3,x:227.2,y:148.9},5).to({regX:29.5,regY:79,rotation:-7.7,x:185.8,y:169.3},4,cjs.Ease.get(1)).wait(1));

	// body.png
	this.instance_7 = new lib.Symbol12();
	this.instance_7.parent = this;
	this.instance_7.setTransform(205.5,221.3,0.732,0.732,-7.7,0,0,65.6,102);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:65.5,rotation:0,x:190.7,y:194.6},4).to({regY:102.2,rotation:-3.6,x:153,y:169.4},4).to({rotation:-18.9,x:95.6,y:197.1},4).to({regY:102.1,scaleX:0.73,scaleY:0.73,rotation:-9.6,x:93.4,y:211.5},5,cjs.Ease.get(1)).to({regX:65.7,regY:102.2,rotation:-24.6,x:81.4,y:186.6},5).to({regX:65.5,scaleX:0.73,scaleY:0.73,rotation:-10.2,x:153.7,y:158.5},5).to({regY:102,rotation:7.3,x:232.6,y:204.1},5).to({regX:65.6,rotation:-7.7,x:205.5,y:221.3},4,cjs.Ease.get(1)).wait(1));

	// lefshold.png
	this.instance_8 = new lib.Symbol6();
	this.instance_8.parent = this;
	this.instance_8.setTransform(154.2,183.3,0.732,0.732,-7.7,0,0,52.1,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:33,rotation:0,x:145,y:149.9},4).to({scaleX:0.73,scaleY:0.73,rotation:-11.6,x:106.1,y:131.2},4).to({regX:52.2,regY:33.1,scaleX:0.73,scaleY:0.73,rotation:-33.9,x:41.8,y:175.3},4).to({regY:33.2,scaleX:0.73,scaleY:0.73,rotation:-24.7,x:44.3,y:181.9},5,cjs.Ease.get(1)).to({rotation:-39.7,x:26.3,y:170.8},5).to({regY:33.1,rotation:-18.2,x:102.8,y:126},5).to({regY:33.2,scaleX:0.73,scaleY:0.73,rotation:7.3,x:193,y:154.1},5).to({regX:52.1,regY:33.1,rotation:-7.7,x:154.2,y:183.3},4,cjs.Ease.get(1)).wait(1));

	// lefhand.png
	this.instance_9 = new lib.Symbol8();
	this.instance_9.parent = this;
	this.instance_9.setTransform(130.7,180.4,0.732,0.732,-7.7,0,0,24.9,93);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:0,x:122.2,y:144},4).to({scaleX:0.73,scaleY:0.73,rotation:-27.6,x:83.6,y:133.2},4).to({regX:24.7,regY:92.9,scaleX:0.73,scaleY:0.73,rotation:-63.9,x:22,y:188.5},4).to({regY:93,scaleX:0.73,scaleY:0.73,rotation:-54.8,x:22.9,y:191.7},5,cjs.Ease.get(1)).to({regX:24.6,rotation:-69.8,x:8.1,y:185.9},5).to({regX:24.9,regY:93.1,rotation:-34.3,x:80.6,y:130.6},5).to({regY:93,scaleX:0.73,scaleY:0.73,rotation:7.3,x:171,y:145.2},5).to({rotation:-7.7,x:130.7,y:180.4},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.5,67.4,313.6,357);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(87,80,1,1,0,0,0,98,137);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(19.5,10.4,313.6,357), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(155.5,175.2,1,1,0,0,0,155.5,175.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(19.5,10.4,313.6,357), null);


// stage content:
(lib.hock_300400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.pric.alpha=0;
		this.hand.alpha=0;
			this.hand2.alpha=1;
		
		this.cursor = "none";
		this.pric.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pric.x = stage.mouseX;
			this.pric.y = stage.mouseY;
			this.hand.y = stage.mouseY;
		}
		
		stage.canvas.addEventListener("mouseover", fl_Clickover3.bind(this));
		
		function fl_Clickover3()
		{
		
			this.pric.alpha=1;
			this.hand2.alpha=0;
			this.hand.alpha=1;
		
		
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout3.bind(this));
		
		function fl_Clickout3()
		{
		
			this.pric.alpha=0;
			this.hand2.alpha=1;
			this.hand.alpha=0;
		
		}
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 10;
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 6
	this.pric = new lib.Symbol23();
	this.pric.parent = this;
	this.pric.setTransform(78.2,196.5,0.616,0.616,0,0,0,-29.1,38.3);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// Layer 4
	this.hand2 = new lib.Symbol17();
	this.hand2.parent = this;
	this.hand2.setTransform(275,270.2,1,1,0,0,0,219,-139.5);

	this.hand = new lib.Symbol17();
	this.hand.parent = this;
	this.hand.setTransform(275,309,1,1,0,0,0,219,-139.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hand},{t:this.hand2}]}).wait(1));

	// Layer 3
	this.instance = new lib.Symbol27();
	this.instance.parent = this;
	this.instance.setTransform(150.9,49.1,1,1,0,0,0,128.9,40.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(156.1,256,1.08,1.08,0,0,0,155.5,175.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 2
	this.fon = new lib.Symbol2();
	this.fon.parent = this;
	this.fon.setTransform(124.3,-31.4,1.226,1.226,0,0,0,399.9,0);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219,165.6,990,561);
// library properties:
lib.properties = {
	width: 300,
	height: 400,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/hock_300_400_atlas_.png?1491227687847", id:"hock_300_400_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;