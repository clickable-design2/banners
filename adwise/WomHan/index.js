(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bablo_03 = function() {
	this.initialize(img.bablo_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,37);


(lib.bablo_05 = function() {
	this.initialize(img.bablo_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,56);


(lib.bablo_08 = function() {
	this.initialize(img.bablo_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,71);


(lib.bablo_13 = function() {
	this.initialize(img.bablo_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,45);


(lib.bablo_16 = function() {
	this.initialize(img.bablo_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,42);


(lib.body1 = function() {
	this.initialize(img.body1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,419);


(lib.dollars = function() {
	this.initialize(img.dollars);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,60);


(lib.hand11 = function() {
	this.initialize(img.hand11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,134);


(lib.hand2 = function() {
	this.initialize(img.hand2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,105);


(lib.jaht = function() {
	this.initialize(img.jaht);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,394);


(lib.kist2111 = function() {
	this.initialize(img.kist2111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,80);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,33);// helper functions:

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


(lib.Символ83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bablo_03();
	this.instance.parent = this;
	this.instance.setTransform(-23.5,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ83, new cjs.Rectangle(-23.5,-18.5,47,37), null);


(lib.Символ80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bablo_05();
	this.instance.parent = this;
	this.instance.setTransform(-33.5,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ80, new cjs.Rectangle(-33.5,-28,67,56), null);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bablo_08();
	this.instance.parent = this;
	this.instance.setTransform(-24,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ77, new cjs.Rectangle(-24,-35.5,48,71), null);


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bablo_13();
	this.instance.parent = this;
	this.instance.setTransform(-16.5,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ74, new cjs.Rectangle(-16.5,-22.5,33,45), null);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bablo_16();
	this.instance.parent = this;
	this.instance.setTransform(-29,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ71, new cjs.Rectangle(-29,-21,58,42), null);


(lib.Символ40copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrEYIAAnfIhcAAIAAhQIEPAAIAABQIhcAAIAAHfg");
	this.shape.setTransform(-117.3,-7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah3EYIAAovIDvAAIAABQIiXAAIAACcIB4AAIAABPIh4AAIAACkICXAAIAABQg");
	this.shape_1.setTransform(-145.7,-7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAxEYIAAjwIhjAAIAADwIhYAAIAAovIBYAAIAADwIBjAAIAAjwIBaAAIAAIvg");
	this.shape_2.setTransform(-178,-7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40copy2, new cjs.Rectangle(-197.1,-41.6,96.2,84), null);


(lib.Символ40copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABBEYIgPhmIhrAAIgQBmIhQAAIBZovICAAAIBaIvgAAmBnIgqkbIgqEbIBUAAg");
	this.shape.setTransform(-139.8,-7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABdE+IAAhMIi7AAIAABMIhVAAIAAiaIAiAAQALgOAFgSQAEgPACgaIATmYID2AAIAAHhIAmAAIAACagAglBaQgCAegGASQgFAPgMALIByAAIAAmRIhJAAg");
	this.shape_1.setTransform(-175.8,-3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40copy, new cjs.Rectangle(-197.1,-41.6,75.8,84), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AzzETQg3AAAAg3IAAm3QAAg3A3AAMAnnAAAQA3AAAAA3IAAG3QAAA3g3AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-132.3,-27.5,264.6,55), null);


(lib.Символ37copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF5003","#FF0000","#FF4102"],[0,0.51,1],0,-37,0,37.1).s().p("AzzETQg3AAAAg3IAAm3QAAg3A3AAMAnnAAAQA3AAAAA3IAAG3QAAA3g3AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37copy, new cjs.Rectangle(-132.3,-27.5,264.6,55), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00CC00","#00CC00","#00FF04"],[0,0.51,1],0,-37,0,37.1).s().p("AzzETQg3AAAAg3IAAm3QAAg3A3AAMAnnAAAQA3AAAAA3IAAG3QAAA3g3AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-132.3,-27.5,264.6,55), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dollars();
	this.instance.parent = this;
	this.instance.setTransform(-117,-35,1.17,1.17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-117,-35,234,70.2), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dollars();
	this.instance.parent = this;
	this.instance.setTransform(-100,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-100,-30,200,60), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dollars();
	this.instance.parent = this;
	this.instance.setTransform(-135,-41,1.35,1.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-135,-41,270.1,81), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dollars();
	this.instance.parent = this;
	this.instance.setTransform(-100,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-100,-30,200,60), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dollars();
	this.instance.parent = this;
	this.instance.setTransform(-100,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-100,-30,200,60), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-80.5,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-80.5,-16.5,161,33), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kist2111();
	this.instance.parent = this;
	this.instance.setTransform(9,-33,1.009,0.997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(9,-33,76.7,79.8), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.184,1.184);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,84.1,124.3), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand11();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.184,1.184);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,56.9,158.7), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.body1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.184,1.184);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,172.9,496.1), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AIFD1IAAggQgSgDgOgKQgOgIgJgNQgJgOgFgSQgFgSAAgWIAAgeIBBAAIAAAiQAAAWAJALQAJAJARAAQARAAAJgJQAJgLAAgWQAAgQgFgOQgFgNgKgLQgKgMgkgeQgggagOgVQgKgPgFgSQgGgSAAgWQAAgWAFgTQAEgRAJgOQAJgNAOgJQANgJASgEIAAggIA4AAIAAAgQASAEAOAJQANAJAKANQAJANAEASQAFATAAAWIAAANIhBAAIAAgSQAAgXgIgKQgJgKgQAAQgRAAgJAKQgJAKAAAXQAAAQAGAOQAFAMAKAMQAKALAkAfQAgAZAOAWQAKAQAFAQQAGATAAAXQAAAVgFATQgFASgJAOQgJANgOAIQgOAKgSADIAAAggACfDXQgTgIgNgOQgOgOgGgUQgHgUAAgaIAAjhQAAgZAHgVQAGgUAOgPQANgOATgGQAUgIAYAAQAZAAAUAIQATAGANAOQAOAPAGAUQAHAVAAAZIAADhQAAAagHAUQgGAUgOAOQgNAOgTAIQgUAHgZAAQgYAAgUgHgACyiVQgKALAAAWIAADpQAAAXAKAKQAIAKARAAQASAAAIgKQAKgKAAgXIAAjpQAAgWgKgLQgIgKgSAAQgRAAgIAKgAhVDXQgUgIgNgOQgNgOgHgUQgHgUAAgaIAAjhQAAgZAHgVQAHgUANgPQANgOAUgGQATgIAZAAQAZAAASAIQAUAGANAOQANAPAHAUQAHAVAAAZIAADhQAAAagHAUQgHAUgNAOQgNAOgUAIQgSAHgZAAQgZAAgTgHgAhDiVQgJALAAAWIAADpQAAAXAJAKQAJAKARAAQARAAAJgKQAJgKAAgXIAAjpQAAgWgJgLQgJgKgRAAQgRAAgJAKgAlLDXQgTgIgNgOQgOgOgGgUQgHgUAAgaIAAjhQAAgZAHgVQAGgUAOgPQANgOATgGQAUgIAYAAQAZAAAUAIQATAGANAOQAOAPAGAUQAHAVAAAZIAADhQAAAagHAUQgGAUgOAOQgNAOgTAIQgUAHgZAAQgYAAgUgHgAk4iVQgKALAAAWIAADpQAAAXAKAKQAIAKARAAQASAAAIgKQAKgKAAgXIAAjpQAAgWgKgLQgIgKgSAAQgRAAgIAKgAoDDZIAAhPIiDAAIAAg+IB8kkIBKAAIAAEkIAhAAIAAA+IghAAIAABPgApHBMIBEAAIAAiig");
	this.shape.setTransform(64.7,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,129.4,49), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag5CDIAAkFIAdAAIAABnIAaAAQAOAAAMAEQALAEAIAIQAIAIADALQAEAMAAAPIAAAgQAAAPgDAMQgEAMgHAIQgIAIgKAEQgMAFgOAAgAgcBoIAcAAQAPAAAHgJQAHgIAAgTIAAgiQAAgTgIgJQgIgHgPAAIgaAAg");
	this.shape.setTransform(242.3,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOCDIAAjqIgwAAIAAgbIB9AAIAAAbIgxAAIAADqg");
	this.shape_1.setTransform(228.1,16.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAqCDIgKg1IhBAAIgKA1IgbAAIAykFIApAAIAyEFgAAcA1IgdiWIgdCWIA6AAg");
	this.shape_2.setTransform(213.2,16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOCDIAAjqIgwAAIAAgbIB9AAIAAAbIgxAAIAADqg");
	this.shape_3.setTransform(198.4,16.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZCBQgMgFgHgJQgHgIgEgMQgEgMAAgPIAAiHQAAgPAEgMQAEgMAHgJQAHgIAMgFQALgEAOAAQAPAAALAEQALAFAIAIQAHAJAEAMQAEAMAAAPIAACHQAAAPgEAMQgEAMgHAIQgIAJgLAFQgLAEgPAAQgOAAgLgEgAgXhgQgHAKAAASIAACJQAAASAHAKQAIAKAPAAQAPAAAIgKQAIgKAAgSIAAiJQAAgSgIgKQgIgKgPAAQgPAAgIAKg");
	this.shape_4.setTransform(184.2,16.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag7CDIAAkFIBtAAIAAAbIhRAAIAABRIAfAAQAOAAALAEQAMAEAIAHQAHAHAFALQADAMAAAPIAAAdQAAAQgDALQgEAMgIAIQgHAIgLAFQgLAEgQAAgAgfBoIAfAAQAQAAAIgIQAHgJABgSIAAggQAAgTgJgIQgHgHgQAAIgfAAg");
	this.shape_5.setTransform(169.6,16.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAqCDIgKg1IhBAAIgKA1IgbAAIAykFIApAAIAyEFgAAcA1IgdiWIgdCWIA6AAg");
	this.shape_6.setTransform(154,16.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag5CDIAAkFIA5AAQAOAAALAFQALAEAIAIQAHAIAEAMQADAMAAAPIAAAgQAAAPgEAMQgEALgHAIQgIAIgLAEQgMAEgOAAIgaAAIAABngAgcABIAaAAQAQAAAHgHQAIgIAAgTIAAgjQAAgSgHgIQgHgJgPAAIgcAAg");
	this.shape_7.setTransform(139.6,16.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAqCDIgKg1IhBAAIgKA1IgbAAIAykFIApAAIAyEFgAAcA1IgdiWIgdCWIA6AAg");
	this.shape_8.setTransform(124.4,16.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZCBQgLgFgIgJQgHgIgDgMQgEgMAAgPIAAgaIAbAAIAAAbQAAASAIAKQAIAKAPAAQAPAAAHgKQAIgKAAgUIAAgVQAAgTgJgKQgEgFgGgCQgHgDgHAAIgMAAIAAgZIAOAAQANAAAJgJQAJgKAAgRIAAgMQAAgUgIgKQgHgKgPAAQgPAAgIAKQgIAKAAASIAAARIgaAAIAAgQQAAgPADgMQAEgMAHgJQAHgIALgFQALgEAOAAQAPAAALAEQALAFAIAJQAHAIADAMQAEAMAAAPIAAAHIgCATQgCAIgEAHQgEAHgGAFQgGAFgIADQAIADAGAEQAGAFAEAHQAIAOAAAUIAAAVQAAAPgEAMQgDAMgHAIQgIAJgLAFQgLAEgPAAQgOAAgLgEg");
	this.shape_9.setTransform(109.3,16.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag5CDIAAkFIAdAAIAABnIAaAAQAOAAAMAEQAMAEAHAIQAIAIADALQAEAMAAAPIAAAgQAAAPgDAMQgEAMgHAIQgIAIgKAEQgMAFgOAAgAgcBoIAcAAQAPAAAHgJQAHgIAAgTIAAgiQAAgTgIgJQgIgHgPAAIgaAAg");
	this.shape_10.setTransform(89.4,16.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhcCDIAAkFIAcAAIAADqIAzAAIAAjqIAcAAIAADqIAyAAIAAjqIAdAAIAAEFg");
	this.shape_11.setTransform(71.3,16.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag1CDIAAkFIBrAAIAAAbIhOAAIAABZIA/AAIAAAZIg/AAIAABdIBOAAIAAAbg");
	this.shape_12.setTransform(53.8,16.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAgCDIAAh0QgHAKgLAFQgLAFgLAAQgNAAgKgEQgJgFgHgIQgGgJgEgKQgDgLAAgOIAAhoIAdAAIAABmQAAARAJAKQAJAKAOAAQANAAAIgIQAIgHACgPIAAhtIAdAAIAAEFg");
	this.shape_13.setTransform(39.3,16.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgZCBQgMgFgHgJQgHgIgEgMQgEgMAAgPIAAiHQAAgPAEgMQAEgMAHgJQAHgIAMgFQALgEAOAAQAPAAALAEQALAFAIAIQAHAJAEAMQAEAMAAAPIAACHQAAAPgEAMQgEAMgHAIQgIAJgLAFQgLAEgPAAQgOAAgLgEgAgXhgQgHAKAAASIAACJQAAASAHAKQAIAKAPAAQAPAAAIgKQAIgKAAgSIAAiJQAAgSgIgKQgIgKgPAAQgPAAgIAKg");
	this.shape_14.setTransform(24.7,16.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAqCDIgqhxIgsBxIgcAAIA1iGIgxh/IAeAAIAnBpIAphpIAbAAIgxB/IA1CGg");
	this.shape_15.setTransform(9.3,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,250.6,39.8), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZCxIAAgxIAkAAIAAAxgAgXBjQgDgKAAgKQAAgTAKgdQAGgMAQgWQAQgWAHgPIAHgWQADgNAAgOQAAgZgKgNQgFgHgHgDQgIgEgJAAQgLAAgHAEQgIADgFAHQgJANAAAZIAAAfIglAAIAAgdQAAgUAFgQQAEgRAKgLQAKgMAOgGQAPgHATAAQAUAAAPAHQAOAGAKALQAJAMAFAQQAFAQAAAVQAAAPgDANIgIAYQgHAQgRAVQgjAsAAAiIADATg");
	this.shape.setTransform(164.9,21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA5DGIAAguIiXAAIAAleIAmAAIAAE6IBVAAIAAk6IAoAAIAAE7IAaAAIAABRg");
	this.shape_1.setTransform(144.9,24.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AArCvIAAiVIgcAAQgMgBgIADQgKADgGAFQgHAHgDAKQgEAKAAAPIAAA3QAAAcgGAOIgoAAQAHgOAAgcIAAg2IADgaQACgMAFgKQAFgJAJgGQAIgHAMgDQgLgEgIgGQgIgGgGgIQgFgKgDgMIgCgZIAAgdQAAgUAEgOQAFgQAJgJQAKgLAOgFQAPgFAUAAIBOAAIAAFdgAgZh+QgKALAAAZIAAAhQAAAOAEAJQADAKAGAFQAMAKAXAAIAeAAIAAiCIgmAAQgVAAgJANg");
	this.shape_2.setTransform(122.9,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiCsQgPgGgKgMQgJgLgFgRQgFgQAAgUIAAizQAAgVAFgPQAFgRAJgLQAKgMAPgGQAPgGATgBQAUABAPAGQAPAGAKAMQAJALAFARQAFAPAAAVIAAAfIglAAIAAghQAAgYgKgNQgKgOgVAAQgUAAgKAOQgKANAAAYIAAC3QAAAYAKANQAKAOAUAAQAVAAAKgOQAKgMAAgZIAAgtIAlAAIAAArQAAAUgFAQQgFARgJALQgKAMgPAGQgPAHgUAAQgTAAgPgHg");
	this.shape_3.setTransform(103.9,22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhHCvIAAldICPAAIAAAjIhoAAIAAB4IBVAAIAAAiIhVAAIAAB8IBoAAIAAAkg");
	this.shape_4.setTransform(85.6,22);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABKCvIAAkZIg4EYIgkAAIg6kVIAAEWIgiAAIAAldIA2AAIA5EXIA4kXIA2AAIAAFdg");
	this.shape_5.setTransform(63.3,22);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA4CvIgNhGIhYAAIgNBGIgkAAIBDldIA3AAIBDFdgAAlBHIgmjJIgnDJIBNAAg");
	this.shape_6.setTransform(31.9,22);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiCsQgPgGgKgMQgJgLgFgRQgFgQAAgUIAAgiIAlAAIAAAkQAAAYAKANQAKAOAVAAQAUAAAKgOQAKgNAAgaIAAgcQAAgagMgNQgFgGgJgEQgIgDgKAAIgRAAIAAgiIATAAQATAAALgMQAMgNAAgXIAAgQQAAgbgKgNQgKgOgUAAQgVAAgKAOQgKANAAAYIAAAXIgkAAIAAgWQAAgVAEgPQAFgRAKgLQAJgMAPgFQAPgHATAAQAUABAPAGQAOAGALAMQAJALAFARQAFAPAAAVIAAAJIgDAZQgDALgFAJQgGAJgIAIQgIAGgKAEQALAEAIAFQAIAIAFAJQALASAAAbIAAAbQAAAUgFAQQgFARgJALQgLAMgOAGQgPAHgUAAQgTAAgPgHg");
	this.shape_7.setTransform(11.7,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,176.1,54), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFCC33","#FFCC00","#FFFFCC"],[0,0.51,1],0,-21.7,0,21.7).s().p("AAQDZIAAhPIiCAAIAAg+IB6kkIBLAAIAAEkIAgAAIAAA+IggAAIAABPgAg0BMIBEAAIAAiig");
	this.shape.setTransform(11.5,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFCC33","#FFCC00","#FFFFCC"],[0,0.51,1],0,-21.7,0,21.7).s().p("AgrDXQgUgIgNgOQgNgOgHgUQgHgUAAgaIAAjhQAAgZAHgVQAHgUANgPQANgOAUgGQATgIAYAAQAZAAATAIQAUAGANAOQANAPAHAUQAHAVAAAZIAADhQAAAagHAUQgHAUgNAOQgNAOgUAIQgTAHgZAAQgYAAgTgHgAgZiVQgJALAAAWIAADpQAAAXAJAKQAJAKAQAAQARAAAJgKQAJgKAAgXIAAjpQAAgWgJgLQgJgKgRAAQgQAAgJAKg");
	this.shape_1.setTransform(35.9,24.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFCC33","#FFCC00","#FFFFCC"],[0,0.51,1],0,-21.7,0,21.7).s().p("AgrDXQgUgIgNgOQgNgOgHgUQgHgUAAgaIAAjhQAAgZAHgVQAHgUANgPQANgOAUgGQATgIAYAAQAZAAATAIQAUAGANAOQANAPAHAUQAHAVAAAZIAADhQAAAagHAUQgHAUgNAOQgNAOgUAIQgTAHgZAAQgYAAgTgHgAgZiVQgJALAAAWIAADpQAAAXAJAKQAJAKAQAAQARAAAJgKQAJgKAAgXIAAjpQAAgWgJgLQgJgKgRAAQgQAAgJAKg");
	this.shape_2.setTransform(60.5,24.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFCC33","#FFCC00","#FFFFCC"],[0,0.51,1],0,-21.7,0,21.7).s().p("AgrDXQgUgIgNgOQgNgOgHgUQgHgUAAgaIAAjhQAAgZAHgVQAHgUANgPQANgOAUgGQATgIAYAAQAZAAATAIQAUAGANAOQANAPAHAUQAHAVAAAZIAADhQAAAagHAUQgHAUgNAOQgNAOgUAIQgTAHgZAAQgYAAgTgHgAgZiVQgJALAAAWIAADpQAAAXAJAKQAJAKAQAAQARAAAJgKQAJgKAAgXIAAjpQAAgWgJgLQgJgKgRAAQgQAAgJAKg");
	this.shape_3.setTransform(85,24.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFCC33","#FFCC00","#FFFFCC"],[0,0.51,1],0,-21.7,0,21.7).s().p("AgbD1IAAggQgSgDgOgKQgOgIgJgNQgJgOgFgSQgFgSAAgWIAAgeIBBAAIAAAiQAAAWAJALQAJAJARAAQAQAAAJgJQAJgLAAgWQAAgQgFgOQgFgNgKgLQgKgMgjgeQgggagOgVQgKgPgFgSQgGgSAAgWQAAgWAFgTQAEgRAJgOQAJgNAOgJQANgJASgEIAAggIA3AAIAAAgQASAEAOAJQANAJAKANQAJANAEASQAFATAAAWIAAANIhBAAIAAgSQAAgXgIgKQgJgKgQAAQgQAAgJAKQgJAKAAAXQAAAQAGAOQAFAMAKAMQAKALAjAfQAgAZAOAWQAKAQAFAQQAGATAAAXQAAAVgFATQgFASgJAOQgJANgOAIQgOAKgSADIAAAgg");
	this.shape_4.setTransform(119.2,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,129.4,49), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.jaht();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,700,394), null);


(lib.Символ84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ83();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:6.1},0).wait(1).to({rotation:12.2},0).wait(1).to({rotation:18.3},0).wait(1).to({rotation:24.4},0).wait(1).to({rotation:30.5},0).wait(1).to({rotation:36.6},0).wait(1).to({rotation:42.7},0).wait(1).to({rotation:48.8},0).wait(1).to({rotation:54.9},0).wait(1).to({rotation:61},0).wait(1).to({rotation:67.1},0).wait(1).to({rotation:73.2},0).wait(1).to({rotation:79.3},0).wait(1).to({rotation:85.4},0).wait(1).to({rotation:91.5},0).wait(1).to({rotation:97.6},0).wait(1).to({rotation:103.7},0).wait(1).to({rotation:109.8},0).wait(1).to({rotation:115.9},0).wait(1).to({rotation:122},0).wait(1).to({rotation:128.1},0).wait(1).to({rotation:134.2},0).wait(1).to({rotation:140.3},0).wait(1).to({rotation:146.4},0).wait(1).to({rotation:152.5},0).wait(1).to({rotation:158.6},0).wait(1).to({rotation:164.7},0).wait(1).to({rotation:170.8},0).wait(1).to({rotation:176.9},0).wait(1).to({rotation:183.1},0).wait(1).to({rotation:189.2},0).wait(1).to({rotation:195.3},0).wait(1).to({rotation:201.4},0).wait(1).to({rotation:207.5},0).wait(1).to({rotation:213.6},0).wait(1).to({rotation:219.7},0).wait(1).to({rotation:225.8},0).wait(1).to({rotation:231.9},0).wait(1).to({rotation:238},0).wait(1).to({rotation:244.1},0).wait(1).to({rotation:250.2},0).wait(1).to({rotation:256.3},0).wait(1).to({rotation:262.4},0).wait(1).to({rotation:268.5},0).wait(1).to({rotation:274.6},0).wait(1).to({rotation:280.7},0).wait(1).to({rotation:286.8},0).wait(1).to({rotation:292.9},0).wait(1).to({rotation:299},0).wait(1).to({rotation:305.1},0).wait(1).to({rotation:311.2},0).wait(1).to({rotation:317.3},0).wait(1).to({rotation:323.4},0).wait(1).to({rotation:329.5},0).wait(1).to({rotation:335.6},0).wait(1).to({rotation:341.7},0).wait(1).to({rotation:347.8},0).wait(1).to({rotation:353.9},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-18.5,47,37);


(lib.Символ81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ80();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:1.4},0).wait(1).to({rotation:2.7},0).wait(1).to({rotation:4.1},0).wait(1).to({rotation:5.5},0).wait(1).to({rotation:6.8},0).wait(1).to({rotation:8.2},0).wait(1).to({rotation:9.6},0).wait(1).to({rotation:11},0).wait(1).to({rotation:12.3},0).wait(1).to({rotation:13.7},0).wait(1).to({rotation:15.1},0).wait(1).to({rotation:16.4},0).wait(1).to({rotation:17.8},0).wait(1).to({rotation:19.2},0).wait(1).to({rotation:20.5},0).wait(1).to({rotation:21.9},0).wait(1).to({rotation:23.3},0).wait(1).to({rotation:24.6},0).wait(1).to({rotation:26},0).wait(1).to({rotation:27.4},0).wait(1).to({rotation:28.7},0).wait(1).to({rotation:30.1},0).wait(1).to({rotation:31.5},0).wait(1).to({rotation:32.9},0).wait(1).to({rotation:34.2},0).wait(1).to({rotation:35.6},0).wait(1).to({rotation:37},0).wait(1).to({rotation:38.3},0).wait(1).to({rotation:39.7},0).wait(1).to({rotation:41.1},0).wait(1).to({rotation:42.4},0).wait(1).to({rotation:43.8},0).wait(1).to({rotation:45.2},0).wait(1).to({rotation:46.5},0).wait(1).to({rotation:47.9},0).wait(1).to({rotation:49.3},0).wait(1).to({rotation:50.6},0).wait(1).to({rotation:52},0).wait(1).to({rotation:53.4},0).wait(1).to({rotation:54.8},0).wait(1).to({rotation:56.1},0).wait(1).to({rotation:57.5},0).wait(1).to({rotation:58.9},0).wait(1).to({rotation:60.2},0).wait(1).to({rotation:61.6},0).wait(1).to({rotation:63},0).wait(1).to({rotation:64.3},0).wait(1).to({rotation:65.7},0).wait(1).to({rotation:67.1},0).wait(1).to({rotation:68.4},0).wait(1).to({rotation:69.8},0).wait(1).to({rotation:71.2},0).wait(1).to({rotation:72.5},0).wait(1).to({rotation:73.9},0).wait(1).to({rotation:75.3},0).wait(1).to({rotation:76.7},0).wait(1).to({rotation:78},0).wait(1).to({rotation:79.4},0).wait(1).to({rotation:80.8},0).wait(1).to({rotation:82.1},0).wait(1).to({rotation:83.5},0).wait(1).to({rotation:84.9},0).wait(1).to({rotation:86.2},0).wait(1).to({rotation:87.6},0).wait(1).to({rotation:89},0).wait(1).to({rotation:90.3},0).wait(1).to({rotation:91.7},0).wait(1).to({rotation:93.1},0).wait(1).to({rotation:94.4},0).wait(1).to({rotation:95.8},0).wait(1).to({rotation:97.2},0).wait(1).to({rotation:98.6},0).wait(1).to({rotation:99.9},0).wait(1).to({rotation:101.3},0).wait(1).to({rotation:102.7},0).wait(1).to({rotation:104},0).wait(1).to({rotation:105.4},0).wait(1).to({rotation:106.8},0).wait(1).to({rotation:108.1},0).wait(1).to({rotation:109.5},0).wait(1).to({rotation:110.9},0).wait(1).to({rotation:112.2},0).wait(1).to({rotation:113.6},0).wait(1).to({rotation:115},0).wait(1).to({rotation:116.3},0).wait(1).to({rotation:117.7},0).wait(1).to({rotation:119.1},0).wait(1).to({rotation:120.5},0).wait(1).to({rotation:121.8},0).wait(1).to({rotation:123.2},0).wait(1).to({rotation:124.6},0).wait(1).to({rotation:125.9},0).wait(1).to({rotation:127.3},0).wait(1).to({rotation:128.7},0).wait(1).to({rotation:130},0).wait(1).to({rotation:131.4},0).wait(1).to({rotation:132.8},0).wait(1).to({rotation:134.1},0).wait(1).to({rotation:135.5},0).wait(1).to({rotation:136.9},0).wait(1).to({rotation:138.3},0).wait(1).to({rotation:139.6},0).wait(1).to({rotation:141},0).wait(1).to({rotation:142.4},0).wait(1).to({rotation:143.7},0).wait(1).to({rotation:145.1},0).wait(1).to({rotation:146.5},0).wait(1).to({rotation:147.8},0).wait(1).to({rotation:149.2},0).wait(1).to({rotation:150.6},0).wait(1).to({rotation:151.9},0).wait(1).to({rotation:153.3},0).wait(1).to({rotation:154.7},0).wait(1).to({rotation:156},0).wait(1).to({rotation:157.4},0).wait(1).to({rotation:158.8},0).wait(1).to({rotation:160.2},0).wait(1).to({rotation:161.5},0).wait(1).to({rotation:162.9},0).wait(1).to({rotation:164.3},0).wait(1).to({rotation:165.6},0).wait(1).to({rotation:167},0).wait(1).to({rotation:168.4},0).wait(1).to({rotation:169.7},0).wait(1).to({rotation:171.1},0).wait(1).to({rotation:172.5},0).wait(1).to({rotation:173.8},0).wait(1).to({rotation:175.2},0).wait(1).to({rotation:176.6},0).wait(1).to({rotation:177.9},0).wait(1).to({rotation:179.3},0).wait(1).to({rotation:180.7},0).wait(1).to({rotation:182.1},0).wait(1).to({rotation:183.4},0).wait(1).to({rotation:184.8},0).wait(1).to({rotation:186.2},0).wait(1).to({rotation:187.5},0).wait(1).to({rotation:188.9},0).wait(1).to({rotation:190.3},0).wait(1).to({rotation:191.6},0).wait(1).to({rotation:193},0).wait(1).to({rotation:194.4},0).wait(1).to({rotation:195.7},0).wait(1).to({rotation:197.1},0).wait(1).to({rotation:198.5},0).wait(1).to({rotation:199.8},0).wait(1).to({rotation:201.2},0).wait(1).to({rotation:202.6},0).wait(1).to({rotation:204},0).wait(1).to({rotation:205.3},0).wait(1).to({rotation:206.7},0).wait(1).to({rotation:208.1},0).wait(1).to({rotation:209.4},0).wait(1).to({rotation:210.8},0).wait(1).to({rotation:212.2},0).wait(1).to({rotation:213.5},0).wait(1).to({rotation:214.9},0).wait(1).to({rotation:216.3},0).wait(1).to({rotation:217.6},0).wait(1).to({rotation:219},0).wait(1).to({rotation:220.4},0).wait(1).to({rotation:221.7},0).wait(1).to({rotation:223.1},0).wait(1).to({rotation:224.5},0).wait(1).to({rotation:225.9},0).wait(1).to({rotation:227.2},0).wait(1).to({rotation:228.6},0).wait(1).to({rotation:230},0).wait(1).to({rotation:231.3},0).wait(1).to({rotation:232.7},0).wait(1).to({rotation:234.1},0).wait(1).to({rotation:235.4},0).wait(1).to({rotation:236.8},0).wait(1).to({rotation:238.2},0).wait(1).to({rotation:239.5},0).wait(1).to({rotation:240.9},0).wait(1).to({rotation:242.3},0).wait(1).to({rotation:243.7},0).wait(1).to({rotation:245},0).wait(1).to({rotation:246.4},0).wait(1).to({rotation:247.8},0).wait(1).to({rotation:249.1},0).wait(1).to({rotation:250.5},0).wait(1).to({rotation:251.9},0).wait(1).to({rotation:253.2},0).wait(1).to({rotation:254.6},0).wait(1).to({rotation:256},0).wait(1).to({rotation:257.3},0).wait(1).to({rotation:258.7},0).wait(1).to({rotation:260.1},0).wait(1).to({rotation:261.4},0).wait(1).to({rotation:262.8},0).wait(1).to({rotation:264.2},0).wait(1).to({rotation:265.6},0).wait(1).to({rotation:266.9},0).wait(1).to({rotation:268.3},0).wait(1).to({rotation:269.7},0).wait(1).to({rotation:271},0).wait(1).to({rotation:272.4},0).wait(1).to({rotation:273.8},0).wait(1).to({rotation:275.1},0).wait(1).to({rotation:276.5},0).wait(1).to({rotation:277.9},0).wait(1).to({rotation:279.2},0).wait(1).to({rotation:280.6},0).wait(1).to({rotation:282},0).wait(1).to({rotation:283.3},0).wait(1).to({rotation:284.7},0).wait(1).to({rotation:286.1},0).wait(1).to({rotation:287.5},0).wait(1).to({rotation:288.8},0).wait(1).to({rotation:290.2},0).wait(1).to({rotation:291.6},0).wait(1).to({rotation:292.9},0).wait(1).to({rotation:294.3},0).wait(1).to({rotation:295.7},0).wait(1).to({rotation:297},0).wait(1).to({rotation:298.4},0).wait(1).to({rotation:299.8},0).wait(1).to({rotation:301.1},0).wait(1).to({rotation:302.5},0).wait(1).to({rotation:303.9},0).wait(1).to({rotation:305.2},0).wait(1).to({rotation:306.6},0).wait(1).to({rotation:308},0).wait(1).to({rotation:309.4},0).wait(1).to({rotation:310.7},0).wait(1).to({rotation:312.1},0).wait(1).to({rotation:313.5},0).wait(1).to({rotation:314.8},0).wait(1).to({rotation:316.2},0).wait(1).to({rotation:317.6},0).wait(1).to({rotation:318.9},0).wait(1).to({rotation:320.3},0).wait(1).to({rotation:321.7},0).wait(1).to({rotation:323},0).wait(1).to({rotation:324.4},0).wait(1).to({rotation:325.8},0).wait(1).to({rotation:327.1},0).wait(1).to({rotation:328.5},0).wait(1).to({rotation:329.9},0).wait(1).to({rotation:331.3},0).wait(1).to({rotation:332.6},0).wait(1).to({rotation:334},0).wait(1).to({rotation:335.4},0).wait(1).to({rotation:336.7},0).wait(1).to({rotation:338.1},0).wait(1).to({rotation:339.5},0).wait(1).to({rotation:340.8},0).wait(1).to({rotation:342.2},0).wait(1).to({rotation:343.6},0).wait(1).to({rotation:344.9},0).wait(1).to({rotation:346.3},0).wait(1).to({rotation:347.7},0).wait(1).to({rotation:349},0).wait(1).to({rotation:350.4},0).wait(1).to({rotation:351.8},0).wait(1).to({rotation:353.2},0).wait(1).to({rotation:354.5},0).wait(1).to({rotation:355.9},0).wait(1).to({rotation:357.3},0).wait(1).to({rotation:358.6},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-28,67,56);


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ77();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:1.4},0).wait(1).to({rotation:2.8},0).wait(1).to({rotation:4.2},0).wait(1).to({rotation:5.6},0).wait(1).to({rotation:6.9},0).wait(1).to({rotation:8.3},0).wait(1).to({rotation:9.7},0).wait(1).to({rotation:11.1},0).wait(1).to({rotation:12.5},0).wait(1).to({rotation:13.9},0).wait(1).to({rotation:15.3},0).wait(1).to({rotation:16.7},0).wait(1).to({rotation:18.1},0).wait(1).to({rotation:19.5},0).wait(1).to({rotation:20.8},0).wait(1).to({rotation:22.2},0).wait(1).to({rotation:23.6},0).wait(1).to({rotation:25},0).wait(1).to({rotation:26.4},0).wait(1).to({rotation:27.8},0).wait(1).to({rotation:29.2},0).wait(1).to({rotation:30.6},0).wait(1).to({rotation:32},0).wait(1).to({rotation:33.4},0).wait(1).to({rotation:34.7},0).wait(1).to({rotation:36.1},0).wait(1).to({rotation:37.5},0).wait(1).to({rotation:38.9},0).wait(1).to({rotation:40.3},0).wait(1).to({rotation:41.7},0).wait(1).to({rotation:43.1},0).wait(1).to({rotation:44.5},0).wait(1).to({rotation:45.9},0).wait(1).to({rotation:47.3},0).wait(1).to({rotation:48.6},0).wait(1).to({rotation:50},0).wait(1).to({rotation:51.4},0).wait(1).to({rotation:52.8},0).wait(1).to({rotation:54.2},0).wait(1).to({rotation:55.6},0).wait(1).to({rotation:57},0).wait(1).to({rotation:58.4},0).wait(1).to({rotation:59.8},0).wait(1).to({rotation:61.2},0).wait(1).to({rotation:62.5},0).wait(1).to({rotation:63.9},0).wait(1).to({rotation:65.3},0).wait(1).to({rotation:66.7},0).wait(1).to({rotation:68.1},0).wait(1).to({rotation:69.5},0).wait(1).to({rotation:70.9},0).wait(1).to({rotation:72.3},0).wait(1).to({rotation:73.7},0).wait(1).to({rotation:75.1},0).wait(1).to({rotation:76.4},0).wait(1).to({rotation:77.8},0).wait(1).to({rotation:79.2},0).wait(1).to({rotation:80.6},0).wait(1).to({rotation:82},0).wait(1).to({rotation:83.4},0).wait(1).to({rotation:84.8},0).wait(1).to({rotation:86.2},0).wait(1).to({rotation:87.6},0).wait(1).to({rotation:89},0).wait(1).to({rotation:90.3},0).wait(1).to({rotation:91.7},0).wait(1).to({rotation:93.1},0).wait(1).to({rotation:94.5},0).wait(1).to({rotation:95.9},0).wait(1).to({rotation:97.3},0).wait(1).to({rotation:98.7},0).wait(1).to({rotation:100.1},0).wait(1).to({rotation:101.5},0).wait(1).to({rotation:102.9},0).wait(1).to({rotation:104.2},0).wait(1).to({rotation:105.6},0).wait(1).to({rotation:107},0).wait(1).to({rotation:108.4},0).wait(1).to({rotation:109.8},0).wait(1).to({rotation:111.2},0).wait(1).to({rotation:112.6},0).wait(1).to({rotation:114},0).wait(1).to({rotation:115.4},0).wait(1).to({rotation:116.8},0).wait(1).to({rotation:118.1},0).wait(1).to({rotation:119.5},0).wait(1).to({rotation:120.9},0).wait(1).to({rotation:122.3},0).wait(1).to({rotation:123.7},0).wait(1).to({rotation:125.1},0).wait(1).to({rotation:126.5},0).wait(1).to({rotation:127.9},0).wait(1).to({rotation:129.3},0).wait(1).to({rotation:130.7},0).wait(1).to({rotation:132},0).wait(1).to({rotation:133.4},0).wait(1).to({rotation:134.8},0).wait(1).to({rotation:136.2},0).wait(1).to({rotation:137.6},0).wait(1).to({rotation:139},0).wait(1).to({rotation:140.4},0).wait(1).to({rotation:141.8},0).wait(1).to({rotation:143.2},0).wait(1).to({rotation:144.6},0).wait(1).to({rotation:145.9},0).wait(1).to({rotation:147.3},0).wait(1).to({rotation:148.7},0).wait(1).to({rotation:150.1},0).wait(1).to({rotation:151.5},0).wait(1).to({rotation:152.9},0).wait(1).to({rotation:154.3},0).wait(1).to({rotation:155.7},0).wait(1).to({rotation:157.1},0).wait(1).to({rotation:158.5},0).wait(1).to({rotation:159.8},0).wait(1).to({rotation:161.2},0).wait(1).to({rotation:162.6},0).wait(1).to({rotation:164},0).wait(1).to({rotation:165.4},0).wait(1).to({rotation:166.8},0).wait(1).to({rotation:168.2},0).wait(1).to({rotation:169.6},0).wait(1).to({rotation:171},0).wait(1).to({rotation:172.4},0).wait(1).to({rotation:173.7},0).wait(1).to({rotation:175.1},0).wait(1).to({rotation:176.5},0).wait(1).to({rotation:177.9},0).wait(1).to({rotation:179.3},0).wait(1).to({rotation:180.7},0).wait(1).to({rotation:182.1},0).wait(1).to({rotation:183.5},0).wait(1).to({rotation:184.9},0).wait(1).to({rotation:186.3},0).wait(1).to({rotation:187.6},0).wait(1).to({rotation:189},0).wait(1).to({rotation:190.4},0).wait(1).to({rotation:191.8},0).wait(1).to({rotation:193.2},0).wait(1).to({rotation:194.6},0).wait(1).to({rotation:196},0).wait(1).to({rotation:197.4},0).wait(1).to({rotation:198.8},0).wait(1).to({rotation:200.2},0).wait(1).to({rotation:201.5},0).wait(1).to({rotation:202.9},0).wait(1).to({rotation:204.3},0).wait(1).to({rotation:205.7},0).wait(1).to({rotation:207.1},0).wait(1).to({rotation:208.5},0).wait(1).to({rotation:209.9},0).wait(1).to({rotation:211.3},0).wait(1).to({rotation:212.7},0).wait(1).to({rotation:214.1},0).wait(1).to({rotation:215.4},0).wait(1).to({rotation:216.8},0).wait(1).to({rotation:218.2},0).wait(1).to({rotation:219.6},0).wait(1).to({rotation:221},0).wait(1).to({rotation:222.4},0).wait(1).to({rotation:223.8},0).wait(1).to({rotation:225.2},0).wait(1).to({rotation:226.6},0).wait(1).to({rotation:228},0).wait(1).to({rotation:229.3},0).wait(1).to({rotation:230.7},0).wait(1).to({rotation:232.1},0).wait(1).to({rotation:233.5},0).wait(1).to({rotation:234.9},0).wait(1).to({rotation:236.3},0).wait(1).to({rotation:237.7},0).wait(1).to({rotation:239.1},0).wait(1).to({rotation:240.5},0).wait(1).to({rotation:241.9},0).wait(1).to({rotation:243.2},0).wait(1).to({rotation:244.6},0).wait(1).to({rotation:246},0).wait(1).to({rotation:247.4},0).wait(1).to({rotation:248.8},0).wait(1).to({rotation:250.2},0).wait(1).to({rotation:251.6},0).wait(1).to({rotation:253},0).wait(1).to({rotation:254.4},0).wait(1).to({rotation:255.8},0).wait(1).to({rotation:257.1},0).wait(1).to({rotation:258.5},0).wait(1).to({rotation:259.9},0).wait(1).to({rotation:261.3},0).wait(1).to({rotation:262.7},0).wait(1).to({rotation:264.1},0).wait(1).to({rotation:265.5},0).wait(1).to({rotation:266.9},0).wait(1).to({rotation:268.3},0).wait(1).to({rotation:269.7},0).wait(1).to({rotation:271},0).wait(1).to({rotation:272.4},0).wait(1).to({rotation:273.8},0).wait(1).to({rotation:275.2},0).wait(1).to({rotation:276.6},0).wait(1).to({rotation:278},0).wait(1).to({rotation:279.4},0).wait(1).to({rotation:280.8},0).wait(1).to({rotation:282.2},0).wait(1).to({rotation:283.6},0).wait(1).to({rotation:284.9},0).wait(1).to({rotation:286.3},0).wait(1).to({rotation:287.7},0).wait(1).to({rotation:289.1},0).wait(1).to({rotation:290.5},0).wait(1).to({rotation:291.9},0).wait(1).to({rotation:293.3},0).wait(1).to({rotation:294.7},0).wait(1).to({rotation:296.1},0).wait(1).to({rotation:297.5},0).wait(1).to({rotation:298.8},0).wait(1).to({rotation:300.2},0).wait(1).to({rotation:301.6},0).wait(1).to({rotation:303},0).wait(1).to({rotation:304.4},0).wait(1).to({rotation:305.8},0).wait(1).to({rotation:307.2},0).wait(1).to({rotation:308.6},0).wait(1).to({rotation:310},0).wait(1).to({rotation:311.4},0).wait(1).to({rotation:312.7},0).wait(1).to({rotation:314.1},0).wait(1).to({rotation:315.5},0).wait(1).to({rotation:316.9},0).wait(1).to({rotation:318.3},0).wait(1).to({rotation:319.7},0).wait(1).to({rotation:321.1},0).wait(1).to({rotation:322.5},0).wait(1).to({rotation:323.9},0).wait(1).to({rotation:325.3},0).wait(1).to({rotation:326.6},0).wait(1).to({rotation:328},0).wait(1).to({rotation:329.4},0).wait(1).to({rotation:330.8},0).wait(1).to({rotation:332.2},0).wait(1).to({rotation:333.6},0).wait(1).to({rotation:335},0).wait(1).to({rotation:336.4},0).wait(1).to({rotation:337.8},0).wait(1).to({rotation:339.2},0).wait(1).to({rotation:340.5},0).wait(1).to({rotation:341.9},0).wait(1).to({rotation:343.3},0).wait(1).to({rotation:344.7},0).wait(1).to({rotation:346.1},0).wait(1).to({rotation:347.5},0).wait(1).to({rotation:348.9},0).wait(1).to({rotation:350.3},0).wait(1).to({rotation:351.7},0).wait(1).to({rotation:353.1},0).wait(1).to({rotation:354.4},0).wait(1).to({rotation:355.8},0).wait(1).to({rotation:357.2},0).wait(1).to({rotation:358.6},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-35.5,48,71);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ74();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:2},0).wait(1).to({rotation:4.1},0).wait(1).to({rotation:6.1},0).wait(1).to({rotation:8.1},0).wait(1).to({rotation:10.2},0).wait(1).to({rotation:12.2},0).wait(1).to({rotation:14.2},0).wait(1).to({rotation:16.3},0).wait(1).to({rotation:18.3},0).wait(1).to({rotation:20.3},0).wait(1).to({rotation:22.4},0).wait(1).to({rotation:24.4},0).wait(1).to({rotation:26.4},0).wait(1).to({rotation:28.5},0).wait(1).to({rotation:30.5},0).wait(1).to({rotation:32.5},0).wait(1).to({rotation:34.6},0).wait(1).to({rotation:36.6},0).wait(1).to({rotation:38.6},0).wait(1).to({rotation:40.7},0).wait(1).to({rotation:42.7},0).wait(1).to({rotation:44.7},0).wait(1).to({rotation:46.8},0).wait(1).to({rotation:48.8},0).wait(1).to({rotation:50.8},0).wait(1).to({rotation:52.9},0).wait(1).to({rotation:54.9},0).wait(1).to({rotation:56.9},0).wait(1).to({rotation:59},0).wait(1).to({rotation:61},0).wait(1).to({rotation:63.1},0).wait(1).to({rotation:65.1},0).wait(1).to({rotation:67.1},0).wait(1).to({rotation:69.2},0).wait(1).to({rotation:71.2},0).wait(1).to({rotation:73.2},0).wait(1).to({rotation:75.3},0).wait(1).to({rotation:77.3},0).wait(1).to({rotation:79.3},0).wait(1).to({rotation:81.4},0).wait(1).to({rotation:83.4},0).wait(1).to({rotation:85.4},0).wait(1).to({rotation:87.5},0).wait(1).to({rotation:89.5},0).wait(1).to({rotation:91.5},0).wait(1).to({rotation:93.6},0).wait(1).to({rotation:95.6},0).wait(1).to({rotation:97.6},0).wait(1).to({rotation:99.7},0).wait(1).to({rotation:101.7},0).wait(1).to({rotation:103.7},0).wait(1).to({rotation:105.8},0).wait(1).to({rotation:107.8},0).wait(1).to({rotation:109.8},0).wait(1).to({rotation:111.9},0).wait(1).to({rotation:113.9},0).wait(1).to({rotation:115.9},0).wait(1).to({rotation:118},0).wait(1).to({rotation:120},0).wait(1).to({rotation:122},0).wait(1).to({rotation:124.1},0).wait(1).to({rotation:126.1},0).wait(1).to({rotation:128.1},0).wait(1).to({rotation:130.2},0).wait(1).to({rotation:132.2},0).wait(1).to({rotation:134.2},0).wait(1).to({rotation:136.3},0).wait(1).to({rotation:138.3},0).wait(1).to({rotation:140.3},0).wait(1).to({rotation:142.4},0).wait(1).to({rotation:144.4},0).wait(1).to({rotation:146.4},0).wait(1).to({rotation:148.5},0).wait(1).to({rotation:150.5},0).wait(1).to({rotation:152.5},0).wait(1).to({rotation:154.6},0).wait(1).to({rotation:156.6},0).wait(1).to({rotation:158.6},0).wait(1).to({rotation:160.7},0).wait(1).to({rotation:162.7},0).wait(1).to({rotation:164.7},0).wait(1).to({rotation:166.8},0).wait(1).to({rotation:168.8},0).wait(1).to({rotation:170.8},0).wait(1).to({rotation:172.9},0).wait(1).to({rotation:174.9},0).wait(1).to({rotation:176.9},0).wait(1).to({rotation:179},0).wait(1).to({rotation:181},0).wait(1).to({rotation:183.1},0).wait(1).to({rotation:185.1},0).wait(1).to({rotation:187.1},0).wait(1).to({rotation:189.2},0).wait(1).to({rotation:191.2},0).wait(1).to({rotation:193.2},0).wait(1).to({rotation:195.3},0).wait(1).to({rotation:197.3},0).wait(1).to({rotation:199.3},0).wait(1).to({rotation:201.4},0).wait(1).to({rotation:203.4},0).wait(1).to({rotation:205.4},0).wait(1).to({rotation:207.5},0).wait(1).to({rotation:209.5},0).wait(1).to({rotation:211.5},0).wait(1).to({rotation:213.6},0).wait(1).to({rotation:215.6},0).wait(1).to({rotation:217.6},0).wait(1).to({rotation:219.7},0).wait(1).to({rotation:221.7},0).wait(1).to({rotation:223.7},0).wait(1).to({rotation:225.8},0).wait(1).to({rotation:227.8},0).wait(1).to({rotation:229.8},0).wait(1).to({rotation:231.9},0).wait(1).to({rotation:233.9},0).wait(1).to({rotation:235.9},0).wait(1).to({rotation:238},0).wait(1).to({rotation:240},0).wait(1).to({rotation:242},0).wait(1).to({rotation:244.1},0).wait(1).to({rotation:246.1},0).wait(1).to({rotation:248.1},0).wait(1).to({rotation:250.2},0).wait(1).to({rotation:252.2},0).wait(1).to({rotation:254.2},0).wait(1).to({rotation:256.3},0).wait(1).to({rotation:258.3},0).wait(1).to({rotation:260.3},0).wait(1).to({rotation:262.4},0).wait(1).to({rotation:264.4},0).wait(1).to({rotation:266.4},0).wait(1).to({rotation:268.5},0).wait(1).to({rotation:270.5},0).wait(1).to({rotation:272.5},0).wait(1).to({rotation:274.6},0).wait(1).to({rotation:276.6},0).wait(1).to({rotation:278.6},0).wait(1).to({rotation:280.7},0).wait(1).to({rotation:282.7},0).wait(1).to({rotation:284.7},0).wait(1).to({rotation:286.8},0).wait(1).to({rotation:288.8},0).wait(1).to({rotation:290.8},0).wait(1).to({rotation:292.9},0).wait(1).to({rotation:294.9},0).wait(1).to({rotation:296.9},0).wait(1).to({rotation:299},0).wait(1).to({rotation:301},0).wait(1).to({rotation:303.1},0).wait(1).to({rotation:305.1},0).wait(1).to({rotation:307.1},0).wait(1).to({rotation:309.2},0).wait(1).to({rotation:311.2},0).wait(1).to({rotation:313.2},0).wait(1).to({rotation:315.3},0).wait(1).to({rotation:317.3},0).wait(1).to({rotation:319.3},0).wait(1).to({rotation:321.4},0).wait(1).to({rotation:323.4},0).wait(1).to({rotation:325.4},0).wait(1).to({rotation:327.5},0).wait(1).to({rotation:329.5},0).wait(1).to({rotation:331.5},0).wait(1).to({rotation:333.6},0).wait(1).to({rotation:335.6},0).wait(1).to({rotation:337.6},0).wait(1).to({rotation:339.7},0).wait(1).to({rotation:341.7},0).wait(1).to({rotation:343.7},0).wait(1).to({rotation:345.8},0).wait(1).to({rotation:347.8},0).wait(1).to({rotation:349.8},0).wait(1).to({rotation:351.9},0).wait(1).to({rotation:353.9},0).wait(1).to({rotation:355.9},0).wait(1).to({rotation:358},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-22.5,33,45);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ71();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3.6},0).wait(1).to({rotation:7.3},0).wait(1).to({rotation:10.9},0).wait(1).to({rotation:14.5},0).wait(1).to({rotation:18.2},0).wait(1).to({rotation:21.8},0).wait(1).to({rotation:25.5},0).wait(1).to({rotation:29.1},0).wait(1).to({rotation:32.7},0).wait(1).to({rotation:36.4},0).wait(1).to({rotation:40},0).wait(1).to({rotation:43.6},0).wait(1).to({rotation:47.3},0).wait(1).to({rotation:50.9},0).wait(1).to({rotation:54.5},0).wait(1).to({rotation:58.2},0).wait(1).to({rotation:61.8},0).wait(1).to({rotation:65.5},0).wait(1).to({rotation:69.1},0).wait(1).to({rotation:72.7},0).wait(1).to({rotation:76.4},0).wait(1).to({rotation:80},0).wait(1).to({rotation:83.6},0).wait(1).to({rotation:87.3},0).wait(1).to({rotation:90.9},0).wait(1).to({rotation:94.5},0).wait(1).to({rotation:98.2},0).wait(1).to({rotation:101.8},0).wait(1).to({rotation:105.5},0).wait(1).to({rotation:109.1},0).wait(1).to({rotation:112.7},0).wait(1).to({rotation:116.4},0).wait(1).to({rotation:120},0).wait(1).to({rotation:123.6},0).wait(1).to({rotation:127.3},0).wait(1).to({rotation:130.9},0).wait(1).to({rotation:134.5},0).wait(1).to({rotation:138.2},0).wait(1).to({rotation:141.8},0).wait(1).to({rotation:145.5},0).wait(1).to({rotation:149.1},0).wait(1).to({rotation:152.7},0).wait(1).to({rotation:156.4},0).wait(1).to({rotation:160},0).wait(1).to({rotation:163.6},0).wait(1).to({rotation:167.3},0).wait(1).to({rotation:170.9},0).wait(1).to({rotation:174.5},0).wait(1).to({rotation:178.2},0).wait(1).to({rotation:181.8},0).wait(1).to({rotation:185.5},0).wait(1).to({rotation:189.1},0).wait(1).to({rotation:192.7},0).wait(1).to({rotation:196.4},0).wait(1).to({rotation:200},0).wait(1).to({rotation:203.6},0).wait(1).to({rotation:207.3},0).wait(1).to({rotation:210.9},0).wait(1).to({rotation:214.5},0).wait(1).to({rotation:218.2},0).wait(1).to({rotation:221.8},0).wait(1).to({rotation:225.5},0).wait(1).to({rotation:229.1},0).wait(1).to({rotation:232.7},0).wait(1).to({rotation:236.4},0).wait(1).to({rotation:240},0).wait(1).to({rotation:243.6},0).wait(1).to({rotation:247.3},0).wait(1).to({rotation:250.9},0).wait(1).to({rotation:254.5},0).wait(1).to({rotation:258.2},0).wait(1).to({rotation:261.8},0).wait(1).to({rotation:265.5},0).wait(1).to({rotation:269.1},0).wait(1).to({rotation:272.7},0).wait(1).to({rotation:276.4},0).wait(1).to({rotation:280},0).wait(1).to({rotation:283.6},0).wait(1).to({rotation:287.3},0).wait(1).to({rotation:290.9},0).wait(1).to({rotation:294.5},0).wait(1).to({rotation:298.2},0).wait(1).to({rotation:301.8},0).wait(1).to({rotation:305.5},0).wait(1).to({rotation:309.1},0).wait(1).to({rotation:312.7},0).wait(1).to({rotation:316.4},0).wait(1).to({rotation:320},0).wait(1).to({rotation:323.6},0).wait(1).to({rotation:327.3},0).wait(1).to({rotation:330.9},0).wait(1).to({rotation:334.5},0).wait(1).to({rotation:338.2},0).wait(1).to({rotation:341.8},0).wait(1).to({rotation:345.5},0).wait(1).to({rotation:349.1},0).wait(1).to({rotation:352.7},0).wait(1).to({rotation:356.4},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-21,58,42);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(0,-2);

	this.instance_1 = new lib.Символ38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,2);
	this.instance_1.alpha = 0.719;
	this.instance_1.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance_1.cache(-134,-29,269,59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-137.3,-30.5,278,68), null);


(lib.Символ39copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37copy();
	this.instance.parent = this;
	this.instance.setTransform(0,-2);

	this.instance_1 = new lib.Символ38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,2);
	this.instance_1.alpha = 0.719;
	this.instance_1.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance_1.cache(-134,-29,269,59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.3,-30.5,278,68);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.148},19,cjs.Ease.get(1)).to({alpha:0},20,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-2);

	this.instance_2 = new lib.Символ38();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,2);
	this.instance_2.alpha = 0.719;
	this.instance_2.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance_2.cache(-134,-29,269,59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.3,-30.5,278,68);


(lib.Символ36copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40copy2();
	this.instance.parent = this;
	this.instance.setTransform(-2.9,0.4,0.447,0.447);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ39copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-70.7,-0.6,0.458,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36copy, new cjs.Rectangle(-136.3,-31.1,135,68), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40copy();
	this.instance.parent = this;
	this.instance.setTransform(-0.3,0.4,0.447,0.447);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-70.7,-0.6,0.458,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-136.3,-31.1,135,68), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZCxIAAgxIAkAAIAAAxgAgXBjQgDgKAAgKQAAgTAKgdQAGgMAQgWQAQgWAHgPIAHgWQADgNAAgOQAAgZgKgNQgFgHgHgDQgIgEgJAAQgLAAgHAEQgIADgFAHQgJANAAAZIAAAfIglAAIAAgdQAAgUAFgQQAEgRAKgLQAKgMAOgGQAPgHATAAQAUAAAPAHQAOAGAKALQAJAMAFAQQAFAQAAAVQAAAPgDANIgIAYQgHAQgRAVQgjAsAAAiIADATg");
	this.shape.setTransform(80.3,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA5DGIAAgvIiXAAIAAldIAmAAIAAE6IBVAAIAAk6IAoAAIAAE7IAaAAIAABRg");
	this.shape_1.setTransform(60.3,9.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AArCvIAAiVIgcAAQgMgBgIADQgKADgGAFQgHAHgDAKQgEAKAAAPIAAA3QAAAcgGAOIgoAAQAHgOAAgcIAAg2IADgaQACgNAFgIQAFgKAJgGQAIgHAMgDQgLgEgIgFQgIgGgGgJQgFgKgDgLIgCgaIAAgdQAAgUAEgOQAFgPAJgKQAKgKAOgGQAPgFAUAAIBOAAIAAFdgAgZh+QgKALAAAZIAAAhQAAAOAEAJQADAKAGAFQAMAKAXAAIAeAAIAAiBIgmAAQgVAAgJAMg");
	this.shape_2.setTransform(38.3,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiCsQgPgGgKgMQgJgLgFgRQgFgPAAgVIAAi0QAAgTAFgRQAFgQAJgLQAKgMAPgGQAPgGATgBQAUABAPAGQAPAGAKAMQAJALAFAQQAFARAAATIAAAgIglAAIAAghQAAgYgKgNQgKgOgVAAQgUAAgKAOQgKANAAAYIAAC3QAAAYAKANQAKAOAUAAQAVAAAKgOQAKgMAAgZIAAgtIAlAAIAAArQAAAVgFAPQgFARgJALQgKAMgPAGQgPAHgUAAQgTAAgPgHg");
	this.shape_3.setTransform(19.3,6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhHCvIAAldICPAAIAAAkIhoAAIAAB3IBVAAIAAAiIhVAAIAAB9IBoAAIAAAjg");
	this.shape_4.setTransform(1,6.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABKCvIAAkZIg4EYIgkAAIg6kVIAAEWIgiAAIAAldIA2AAIA5EXIA4kXIA2AAIAAFdg");
	this.shape_5.setTransform(-21.3,6.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA4CvIgNhGIhYAAIgNBGIgkAAIBDldIA3AAIBDFdgAAlBHIgmjJIgnDJIBNAAg");
	this.shape_6.setTransform(-52.7,6.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiCsQgPgGgKgMQgJgLgFgRQgFgPAAgVIAAgiIAlAAIAAAkQAAAYAKANQAKAOAVAAQAUAAAKgOQAKgNAAgaIAAgcQAAgZgMgOQgFgGgJgDQgIgEgKAAIgRAAIAAgiIATAAQATAAALgMQAMgNAAgXIAAgQQAAgbgKgNQgKgOgUAAQgVAAgKAOQgKANAAAYIAAAXIgkAAIAAgWQAAgUAEgQQAFgRAKgLQAJgMAPgFQAPgHATAAQAUABAPAGQAOAGALAMQAJALAFAQQAFARAAATIAAAJIgDAaQgDALgFAJQgGAJgIAIQgIAGgKAEQALAEAIAFQAIAHAFAKQALASAAAbIAAAbQAAAVgFAPQgFARgJALQgLAMgOAGQgPAHgUAAQgTAAgPgHg");
	this.shape_7.setTransform(-72.9,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2 copy
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(3.4,13,1,1,0,0,0,88,27);
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-2,-2,180,58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-86.6,-16,183,62), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5CDIAAkFIAdAAIAABnIAaAAQAPAAALAEQALAEAIAIQAHAIAEALQAEAMAAAPIAAAgQAAAPgEAMQgDAMgHAIQgIAIgLAEQgLAFgOAAgAgcBoIAcAAQAPAAAHgJQAHgIAAgTIAAgiQAAgTgIgJQgHgHgQAAIgaAAg");
	this.shape.setTransform(116.9,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOCDIAAjqIgwAAIAAgbIB9AAIAAAbIgxAAIAADqg");
	this.shape_1.setTransform(102.7,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAqCDIgKg1IhBAAIgKA1IgbAAIAykFIApAAIAyEFgAAcA1IgdiWIgdCWIA6AAg");
	this.shape_2.setTransform(87.8,3.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOCDIAAjqIgwAAIAAgbIB9AAIAAAbIgxAAIAADqg");
	this.shape_3.setTransform(73,3.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZCBQgMgFgHgJQgHgIgEgMQgEgMAAgPIAAiHQAAgPAEgMQAEgMAHgJQAHgIAMgFQALgEAOAAQAPAAALAEQALAFAIAIQAHAJAEAMQAEAMAAAPIAACHQAAAPgEAMQgEAMgHAIQgIAJgLAFQgLAEgPAAQgOAAgLgEgAgXhgQgHAKAAASIAACJQAAASAHAKQAIAKAPAAQAPAAAIgKQAIgKAAgSIAAiJQAAgSgIgKQgIgKgPAAQgPAAgIAKg");
	this.shape_4.setTransform(58.8,3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag8CDIAAkFIBuAAIAAAbIhRAAIAABRIAfAAQAOAAAMAEQALAEAIAHQAHAHAEALQAFAMAAAPIAAAdQgBAQgDALQgEAMgIAIQgHAIgLAFQgMAEgPAAgAgfBoIAfAAQAQAAAIgIQAIgJAAgSIAAggQAAgTgJgIQgHgHgQAAIgfAAg");
	this.shape_5.setTransform(44.2,3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAqCDIgKg1IhBAAIgKA1IgbAAIAykFIApAAIAyEFgAAcA1IgdiWIgdCWIA6AAg");
	this.shape_6.setTransform(28.6,3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag5CDIAAkFIA5AAQAOAAALAFQALAEAIAIQAHAIADAMQAEAMAAAPIAAAgQAAAPgEAMQgDALgIAIQgIAIgLAEQgLAEgPAAIgaAAIAABngAgcABIAaAAQAQAAAHgHQAIgIAAgTIAAgjQAAgSgHgIQgHgJgPAAIgcAAg");
	this.shape_7.setTransform(14.2,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAqCDIgKg1IhBAAIgKA1IgbAAIAykFIApAAIAyEFgAAcA1IgdiWIgdCWIA6AAg");
	this.shape_8.setTransform(-1,3.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZCBQgLgFgIgJQgHgIgDgMQgEgMAAgPIAAgaIAbAAIAAAbQAAASAIAKQAIAKAPAAQAPAAAHgKQAIgKAAgUIAAgVQAAgTgJgKQgEgFgGgCQgHgDgHAAIgMAAIAAgZIAOAAQANAAAJgJQAJgKAAgRIAAgMQAAgUgIgKQgHgKgPAAQgPAAgIAKQgIAKAAASIAAARIgaAAIAAgQQAAgPADgMQAEgMAHgJQAHgIALgFQALgEAOAAQAPAAALAEQALAFAIAJQAHAIADAMQAEAMAAAPIAAAHIgCATQgCAIgEAHQgEAHgGAFQgGAFgIADQAIADAGAEQAGAFAEAHQAIAOAAAUIAAAVQAAAPgEAMQgDAMgHAIQgIAJgLAFQgLAEgPAAQgOAAgLgEg");
	this.shape_9.setTransform(-16.1,3.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag5CDIAAkFIAdAAIAABnIAaAAQAPAAALAEQAMAEAHAIQAHAIAEALQAEAMAAAPIAAAgQAAAPgDAMQgEAMgHAIQgIAIgLAEQgLAFgOAAgAgcBoIAcAAQAPAAAHgJQAHgIAAgTIAAgiQAAgTgIgJQgHgHgQAAIgaAAg");
	this.shape_10.setTransform(-36,3.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhdCDIAAkFIAeAAIAADqIAxAAIAAjqIAdAAIAADqIAyAAIAAjqIAcAAIAAEFg");
	this.shape_11.setTransform(-54.1,3.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag1CDIAAkFIBrAAIAAAbIhOAAIAABZIA/AAIAAAZIg/AAIAABdIBOAAIAAAbg");
	this.shape_12.setTransform(-71.6,3.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAgCDIAAh0QgHAKgLAFQgLAFgLAAQgNAAgKgEQgJgFgHgIQgGgJgEgKQgDgLAAgOIAAhoIAdAAIAABmQAAARAJAKQAJAKAOAAQANAAAIgIQAIgHACgPIAAhtIAdAAIAAEFg");
	this.shape_13.setTransform(-86.1,3.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZCBQgMgFgHgJQgHgIgEgMQgEgMAAgPIAAiHQAAgPAEgMQAEgMAHgJQAHgIAMgFQALgEAOAAQAPAAALAEQALAFAIAIQAHAJAEAMQAEAMAAAPIAACHQAAAPgEAMQgEAMgHAIQgIAJgLAFQgLAEgPAAQgOAAgLgEgAgXhgQgHAKAAASIAACJQAAASAHAKQAIAKAPAAQAPAAAIgKQAIgKAAgSIAAiJQAAgSgIgKQgIgKgPAAQgPAAgIAKg");
	this.shape_14.setTransform(-100.7,3.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAqCDIgqhxIgsBxIgcAAIA1iGIgxh/IAeAAIAnBpIAphpIAbAAIgxB/IA1CGg");
	this.shape_15.setTransform(-116.1,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,7.9,1,1,0,0,0,125.2,19.9);
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-2,-2,255,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-127.4,-14,258,47), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dollars.png
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(292,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({y:2.8},5,cjs.Ease.get(-1)).to({y:6},6,cjs.Ease.get(1)).to({y:3},6,cjs.Ease.get(-1)).to({y:0},6,cjs.Ease.get(1)).wait(10));

	// dollars.png
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(556,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({y:2.8},5,cjs.Ease.get(-1)).to({y:6},6,cjs.Ease.get(1)).to({y:3},6,cjs.Ease.get(-1)).to({y:0},6,cjs.Ease.get(1)).wait(4));

	// dollars.png
	this.instance_2 = new lib.Символ18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(429,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({y:2.8},5,cjs.Ease.get(-1)).to({y:6},6,cjs.Ease.get(1)).to({y:3},6,cjs.Ease.get(-1)).to({y:0},6,cjs.Ease.get(1)).wait(7));

	// dollars.png
	this.instance_3 = new lib.Символ20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(144,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({y:2.8},5,cjs.Ease.get(-1)).to({y:6},6,cjs.Ease.get(1)).to({y:3},6,cjs.Ease.get(-1)).to({y:0},6,cjs.Ease.get(1)).wait(13));

	// dollars.png
	this.instance_4 = new lib.Символ21();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({y:2.8},5,cjs.Ease.get(-1)).to({y:6},6,cjs.Ease.get(1)).to({y:3},6,cjs.Ease.get(-1)).to({y:0},6,cjs.Ease.get(1)).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,-41,773,81);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_60 = function() {
		this.gotoAndPlay(22);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60).call(this.frame_60).wait(21));

	// kist.png
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(70.5,203.2,1,1,0,0,0,32.5,27.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:54.8,regY:8.5,x:92.8,y:184.5},0).to({regX:54.9,regY:8.8,rotation:47.4,x:-46.2,y:103.7},19,cjs.Ease.get(1)).wait(1).to({regX:54.8,regY:8.7,scaleX:1,scaleY:1,rotation:35.1,x:-57.5,y:101.3},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:-72.7,y:98.1},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:-65.6,y:99.9},10,cjs.Ease.get(-1)).to({regX:54.9,regY:8.8,scaleX:1,scaleY:1,rotation:45.1,x:-46.2,y:103},10,cjs.Ease.get(1)).to({rotation:47.4,y:103.7},1,cjs.Ease.get(-1)).to({regX:54.8,regY:8.5,rotation:0,x:92.8,y:184.5},19,cjs.Ease.get(-1)).wait(1));

	// hand2.png
	this.instance_1 = new lib.Symbol11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(116,142.1,1,1,0,0,0,42,62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:72.4,regY:7.2,x:146.4,y:87.2},0).to({regX:72.8,rotation:47.3,x:64.1,y:74.4},19,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,rotation:41.9,x:48.8,y:61.8},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:36,x:31.5,y:47.7},10,cjs.Ease.get(1)).to({regX:72.7,regY:7.3,scaleX:1,scaleY:1,rotation:38.8,x:39.6,y:54.4},10,cjs.Ease.get(-1)).to({regX:72.8,regY:7.2,scaleX:1,scaleY:1,rotation:47.3,x:64.1,y:74.4},10,cjs.Ease.get(1)).wait(1).to({regX:72.4,rotation:0,x:146.4,y:87.2},19,cjs.Ease.get(-1)).wait(1));

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ArJPsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBNggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAbgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmIAfgTQBDgtg0BTQA0AaBDBdQBEBdARh+QASh+AagjQAbgkABggQABggAKAEQAJAEAegmQAdgmAQgZQAPgYAtgQQAtgQA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAMIAAABQAnByAkByQA1CiAWBdQAiCPABB3QABAhgCBBQAAA6AHAnQAFAZALAiIAUA5QA1CbAICjQACAlgDAYQgEAhgNAYQggA7hcAaQhvAgiggWQgugGhYgRQhbgRgsgGQhYgNiYgFQhfgEiEgCQghAAgEgSIAAgEIgIABQgwAKgwAnQgYAUg4A6QhaBehPAoQgsAXhZAcQinAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_1 = new cjs.Graphics().p("ArJPsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBNggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAbgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmIAfgTQBDgtg0BTQA0AaBDBdQBEBdARh+QASh+AagjQAbgkABggQABggAKAEQAJAEAegmQAdgmAQgZQAPgYAtgQQAtgQA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAMIAAABQAnByAkByQA1CiAWBdQAiCPABB3QABAhgCBBQAAA6AHAnQAFAZALAiIAUA5QA1CbAICjQACAlgDAYQgEAhgNAYQggA7hcAaQhvAgiggWQgugGhYgRQhbgRgsgGQhYgNiYgFQhfgEiEgCQghAAgEgSIAAgEIgIABQgwAKgwAnQgYAUg4A6QhaBehPAoQgsAXhZAcQinAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_2 = new cjs.Graphics().p("ArAPrQg7AAhFgHQgvgFg1gJQg4gIhhgTIhIgOIg8gMIg6gNQgogJgjgLQgWgGgUgIQgkgMgZgQQgOgJgLgLQgOgQgMgYIgKgXQglhgAMhxIAAgBQAGgwAOgdIAFgIQASgeAlgZIAQgKQAZgOAmgRIAbgMIB1gzIArgVQA2gaAqgaIA4gjIADgCQAigWAagNIADgCIAwgTIAYgIIAcgLIAdgNQAcgMAegQQAvgaA4gjIBihAIBUg1QA5gjBGgiIAsgUQA0gZBngrIAWgJIBNggIgDgDQgFgFABgHQAAgMAPgKQAQgKAigMIAGgDQASgJAYgSIAhgZIADgCIAJgIQALgJAOgHQAXgOAfgMIAjgNIAZgKIA/gXIAegMQArgSAzgfQAcgRAdgUIBDgvIBMg1QARgMAOgHQAygigRAmQgEALgLASQAyAWBABPIAGAHQAKAMAIAIQAyAtANhTIACgMIANg7QAPhDATgcIABgBQAagkACgfQACgfAJADQAHACAOgPIASgVIAcgmIARgYIAIgKQAKgLASgJQAKgGAOgFIAHgCQAqgOAyAFQAQACAOAEQAMADAKAFQAaAMAMAVQAGAMACAPIABALIAAABIAAAAIAjBZQANAjAMAkQAIAbAKAYIADAHQAPAqALAoQAUBCAMAyIANA4IAKArQALAyACAsQAEA3AAAzIgBALIgCA3IgCAqQgBAoADAgIADAYQAEAYAJAhIAIAcIAJAdIAJAcIAIAfIAJAjQAPBAAHBDQAEAsABAvQABAWgBARIgCAVQgEAhgNAYQgXAqg0AaQgVALgZAIQgmANgrAFQhIALhZgHIgVgCQgugEhXgOIgHAAIgogHIgngFIgtgFQgggEgpgCIhJgDIghgBIgNAAIgMAAIgRgBIgQABIgVgBQg3gBhCABQgmgBgsACQgbABgHgMIgCgFIAAgEIgJACQguALgwAnQgZAUg3A5IgGAFQg8A9g5AlQgYAQgXALQgtAXhYAbQhJAWhCARQhTAWhIANQhdARhXAGQg0AEgyAAIgUAAg");
	var mask_graphics_3 = new cjs.Graphics().p("Aq2PrQg8gBhEgIQgvgFg0gIQg4gIhggTIhIgOIg8gMIg6gNQgngKgjgKIgqgOQgkgNgXgPQgPgKgKgLQgOgQgMgXIgKgYQgkhfAMhwIAAgBQAFgwAOgdIAFgIQASgeAlgZIAQgKQAZgOAmgRIAagMIB1gzIArgUQA1gbAqgZIA3gjIADgCQAjgWAZgMIAEgCQATgJAcgKIAXgJIAdgLIAcgMQAegNAcgPQAvgZA3gjIBihAIBTg1QA6gjBFgiIArgUQA1gZBlgrIAWgJIBNggIgDgCQgEgGABgGQABgMAOgKQARgJAhgMIAGgDQASgKAYgRIAhgYIADgDIAIgIQALgJANgHQAXgNAfgNIAjgNIAZgKIA9gYIAfgMQAqgSAzgfQAcgQAdgUQAegTAlgaIBMg1QAQgLAPgIQAwgggOAjQgEAKgJAQQAxATBBBIIAGAGQAKALAJAHQAyAoAJhKIAEgLQAHgeAIgZQAPg+AVgfIABgBQAZgkADgfQACgeAKACQAGACAPgPIARgUIAcgmIARgYIAIgKQAKgLARgJIAYgKIAIgDQApgOAxADQAQACAOADIAWAIQAaALAMAUQAGAKADAOIACAKIAAABIAAABIAlBTQAQAhALAkQAJAaAKAXIAEAHQAPAoALApQAUBCAJAxIALA4IAKArQANAygCApQABA0gDAyIgBAKIgEA2IgCApQgCAoACAfIABAZQADAYAIAgIAHAbIAHAdIAIAbIAHAgIAIAiQAOBAAFBCQAEAsAAAvIgBAnIgDAVQgEAhgNAYQgXAqgyAaQgUAMgYAIQglAOgqAHQhGANhXgDIgVgBQgtgChVgLIgHAAIgogFIgmgDIgsgDQgfgCgogBIhIgBIghAAIgNAAIgLABIgRAAIgPABIgWgBQg2AAhBADQgmAAgrAEQgaABgHgKIgCgEIgBgEIgIACQguAMgvAmQgaAVg2A3IgGAGQg7A6g7AlQgYAPgXALQguAXhWAaQhJAWhCAQQhSAWhIAMQhdARhWAGQgyAEgxAAIgWAAg");
	var mask_graphics_4 = new cjs.Graphics().p("AqtPpQg7gBhEgHQgugFg0gJQg4gIhggTIhHgOIg7gMIg6gNQgngJgigLQgXgGgTgIQgkgNgXgPQgOgKgLgLQgNgQgMgYQgFgKgFgNQgkhfAMhvIAAgBQAGgwAOgdIAEgHQASgeAlgZIAQgKQAYgPAmgQIAagMIB1gzIAqgUQA1gaAqgaIA3giIADgCQAigWAZgMIAEgCIAugUIAYgJIAcgLIAcgMQAfgNAbgOQAvgZA3giIBhg/IBTg1QA7gkBDghIAqgVQA2gZBjgrIAWgJIBNgfIgCgCQgEgGABgGQABgMAPgJQAQgJAhgMIAFgDQATgKAYgRIAhgXIACgCIAIgJQAKgJAOgIQAWgNAggMIAigOIAYgKQApgSAUgHIAfgMQApgSAzgeQAdgQAcgTQAggTAjgZQAhgWArgeIAegTQAwgfgMAgQgDAJgIAOQAxARBBBAIAGAGQAKAJAJAHQA0AjAFhBIAEgKIARgzQAQg7AWghIABgBQAZgkAEgeQADgdAJABQAHABAOgOIARgUQARgUAMgSIAQgXIAIgKQAKgLARgJIAYgLIAHgDQApgOAwACQAQABAOADIAWAHQAaALANARQAGAKADAOIACAJIAAAAIAAABIApBNQASAfALAkQAIAbAMAVIAEAGQAPAmAMAqQASBDAHAwQADAdAGAbIALAqQANAygEAnIgIBhIgBAKQgEAVgCAgIgEApQgCAmAAAgIABAYQACAYAGAfIAFAbIAHAcIAGAcIAGAfIAIAiQAMBAAEBCQADArgCAvIgCAmIgCAVQgFAggNAYQgXAqgwAcQgTAMgYAJQgkAQgoAIQhEAPhVAAIgVAAQgsABhTgIIgIAAIgngDIgkgBQgZgCgTABQgegCgoABIhGABIghABIgNABIgLABIgQABIgPACIgVgBQg2AAhAAFQglABgrAGQgZACgIgJIgCgEIAAgDIgIADQguANguAlQgbAWg1A1IgGAFQg6A5g9AkQgYAPgXAKQgvAXhUAaQhJAVhCAQQhRAVhHANQhdAQhWAFQguAEgtAAIgegBg");
	var mask_graphics_5 = new cjs.Graphics().p("AqjPpQg7gBhEgIQgtgFg1gJQg4gIhfgSIhGgOIg8gMIg5gNQgngKgigLIgpgNQgjgNgYgRQgNgJgKgMQgOgQgLgXQgGgLgEgMQgjheALhvIAAgBQAGgwAOgcIAEgIQASgeAkgZIAQgKQAYgOAmgRIAagLIB0gzIAqgUQA0gaAqgZIA3giIADgCQAigWAZgNIADgCIAvgTIAXgJIAcgLIAcgMQAfgNAagOQAvgYA3giIBhg/IBSg1QA8gkBBghIAqgUQA2gaBigqIAWgJIBMgfIgCgDQgDgFABgGQACgLAPgJQAQgKAfgLIAHgDQATgKAYgQIAhgXIACgCIAHgJIAAgBQAJgIAOgIQAWgNAfgNIAigNIAYgLQAqgSASgHIAfgMQApgTAzgdQAdgQAcgSQAhgTAhgYQAigVAqgeQAQgLAPgHQAtgfgJAdQgCAIgHANQAxANBCA5IAGAFIATAPQA1AeACg4IAEgKIAUgvQAQg2AXgkIACgBQAYgjAFgeQADgcAJABQAHAAANgOIARgUIAdglIARgYIAIgJQAKgLARgJIAXgLIAHgDQAogQAwACQAQABAOADIAVAFQAaAKAOAQQAHAJADAMIACAIIABABIAAABIArBHQAUAeALAjQAHAbAOATIAEAHQAQAjALAsQASBDAEAvQACAcAGAbIALAqQAOAzgIAkIgNBcIgCAKQgFAVgCAfIgFAoIgEBFIAAAYQABAYAEAgIAEAZQACANADAPIAFAbIAGAfIAHAiQALA/ACBCQACAqgDAvIgDAnIgDAUQgFAggNAYQgWAqgvAdQgSAMgXAKQgjARgmAJQhCAShTADIgVABQgsADhRgEIgIAAIgmgCIgjACQgYgBgTABQgeAAgmACIhGAEQgQACgQAAIgNABIgKACIgQABIgQABIgVAAQg1ABg/AHQgjADgrAHQgZADgIgHIgCgEIAAgDIgIACQgtAPguAmQgbAWg1AzIgGAFQg5A2g/AkQgXAOgXALQgwAWhTAZQhJAVhBAQQhRAUhHANQhcAPhVAGQgpACgoAAIgnAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AqhPoQg7gChDgHQgtgFg1gJQg4gIhdgTIhHgOIg7gMIg4gNQgngJgigLQgWgGgTgIQgjgNgXgQQgOgKgJgLQgOgQgLgYIgKgXQgiheALhuIAAgBQAGgvANgcIAFgIQASgeAjgZIAQgKQAYgOAlgRIAagLIB0gzIApgTQA1gaApgZIA3giIADgCQAigWAYgMIAEgCIAugUIAXgJIAcgLIAcgMQAggOAYgMQAvgYA3giIBhg+IBSg0QA7glBAghIAqgUQA2gaBhgqIAVgJIBMgfIgBgDQgDgFABgFQADgLAOgJQARgJAfgMIAGgDQAUgJAXgQIAigWIABgDIAHgJQAIgJAOgIQAWgNAfgMIAigOIAYgLQApgUASgGIAegNQApgSAzgdQAdgPAcgSQAjgTAfgWQAhgVAqgdIAfgTQAsgdgHAZQgBAHgFALQAwALBDAyIAFAEQALAIAJAFQA1AZgBgvIAFgIIAWgsQARgyAZgmIABgBQAYgjAFgeQAEgbAJAAQAHAAANgOIARgTIAdglIARgXIAIgKQAKgLAQgJQAKgFANgGIAHgDQAngQAwAAQAQABANACIAWAFQAaAIAOAPQAHAIAEALIADAIIAAABQAXAfAYAjQAVAcAKAjQAIAbAPASIAEAFQARAiALAtQARBDACAuQAAAbAGAbQAFAVAGAVQAQA0gMAhQgLAqgIAtIgCAKQgHAVgDAeIgFAnIgGBFIgCAYQABAXADAfIADAaQAAANADAPIADAaIAGAfIAGAiQAKA+AABCQABApgEAvQgBAVgDARIgDAVQgFAfgNAYQgWAqgtAeQgSANgVAKQgiATglAJQhAAVhSAHIgUACQgrAFhQgBIgHAAIgmABQgQAAgSADQgYAAgSACQgeABglADIhFAHQgQACgPABIgNABIgKACIgQADIgPABIgVABQg1ABg+AJQgiADgqAKQgYADgIgGIgDgDIAAgCIgIACQgsARgtAkQgcAXg0AxIgHAFQg4A1hAAjQgYANgXALQgxAVhRAYQhIAWhBAQQhRAThGAMQhcAQhUAEQgrADgqAAIgjgBg");
	var mask_graphics_7 = new cjs.Graphics().p("AqlPnQg7gChCgHQgtgGg0gIQg5gJhcgSIhGgOIg7gMIg4gNQgngKghgKQgWgHgTgHQgjgNgWgRQgOgJgJgMQgOgQgLgXIgJgXQgiheALhuIAAAAQAGgvANgdIAEgHQASgeAjgZIAQgKQAYgOAlgRIAagLIBzgzIApgTQA0gZAqgZIA2giIADgCQAigVAYgNIAEgCQAUgKAZgKIAXgJIAcgLIAcgMQAhgOAXgMQAvgXA2giIBhg9IBRg0QA8gmA/gfIApgVQA3gbBegpIAWgJIBMgfIgCgDQgCgEACgGQADgKAOgIQASgKAegLIAGgDQAUgKAXgPIAigWIABgCIAFgKIAAAAQAIgJAOgIQAVgNAggMIAhgOIAYgLQApgVARgGIAegNQAogTA0gbQAdgPAbgSQAlgTAdgUQAigVAqgdIAegSQArgcgFAWQAAAGgEAJQAwAIBDArIAGADIAUALQA2AUgFgmIAGgHIAYgoQARgtAbgpIABgCQAYgiAGgdQAEgbAJAAQAHgBANgNIARgTIAcglIARgXIAIgKQAKgKAQgKIAXgLIAHgDQAngRAvAAQAPAAAOACIAVAEQAaAHAPANQAHAHAFAKIADAIIAAAAIAAABQAYAbAaAhQAXAaAKAjQAIAaAQARIAEAFQASAfAKAvQARBEgBAsQgBAbAGAbIALAqQARA0gQAeQgOAngKAsIgDAJQgIAVgDAdIgGAnIgIBEIgDAYQAAAXABAeIACAZQgBANACAPQABAOACAMIAEAfQADAPACASQAKA+gCBBQAAApgFAvIgEAmIgEAUQgGAfgNAYQgWArgrAeQgRAOgUAKQghAVgkAKQg9AYhRAKIgTADQgrAGhOADIgHABIgmACIggAFQgXABgSADIhCAHIhDAJQgRADgPABIgMABIgKADIgPAEIgPABIgVABQg1ACg9ALQghAEgqAMQgWADgJgEIgCgDIgBgCIgIADQgsASgsAkQgdAYgzAuIgGAGQg4AyhCAiQgXAOgXAJQgyAWhQAXQhIAVhAAQQhQAThHAMQhbAPhUAEQgkACgkAAIgvgBg");
	var mask_graphics_8 = new cjs.Graphics().p("AqpPnQg7gDhCgIQgrgFg1gIQg5gJhbgSIhGgOIg6gMIg4gNQgmgKghgKQgWgHgTgHQgjgOgWgQQgNgKgJgMQgNgQgLgXIgKgXQghhdALhtIAAgBQAGguANgdIAEgHQASgeAjgZIAPgKQAYgOAlgRIAZgLIBzgyIApgTQA0gZApgZIA2ghIADgCQAigWAXgMIAEgCQAVgLAYgKIAXgJIAcgLIAbgLQAjgPAVgLQAvgXA2ghIBhg9IBQg0QA9gmA9gfIApgVQA3gbBdgpIAWgJIBLgfIgBgCQgCgFACgFQAEgKAOgIQASgJAegMIAHgDQATgJAWgPIAigVIABgDIAFgJIAAgBQAHgJAOgIQAVgNAggMIAhgOIAXgMQAqgVAPgGIAegNQAogTAzgbQAegPAbgQQAngUAbgTQAhgUAqgcIAegTQAqgbgDATQABAFgDAIQAwAFBEAjIAGADIAUAJQA3APgIgcIAGgHIAagkQASgpAcgrIABgCQAXgiAHgdQAFgZAJgCQAHgBAMgNIARgTIAdgkIARgXIAIgJQAKgLAQgJIAWgLIAHgEQAmgRAvgCQAPAAANABIAWAEQAaAGAPAMQAIAGAFAJIADAGIAAABQAaAYAbAfQAZAYAKAiQAHAbASAPIAFAFQASAdAKAwQAQBEgDArQgDAaAGAcQAEAUAHAVQASA1gTAcQgSAjgMAqIgDAJQgKAVgDAcIgHAmIgKBDIgEAYQgBAXAAAeQgBAKABAPQgBAMABAPQAAAOABAMIAEAfIAEAhQAIA9gDBBQAAAogHAvIgFAmIgEAUQgHAegMAZQgWAqgpAfQgRAOgTAMQggAWgiALQg8AahOAOIgTADQgrAJhMAGIgHABIglAEIgfAHQgWACgSAEIhBAJIhCAMQgRADgOACQgFAAgIACIgJADIgPAEIgPACIgUABQg0ACg9AOQggAFgpANQgWAFgJgDIgCgCIgBgCIgIADQgrATgrAjQgeAZgyAtIgHAFQg2AwhEAiQgYANgXAJQgzAWhNAWQhIAVhAAPQhQAThGALQhbAPhTAEQgkACgkAAIgvgBg");
	var mask_graphics_9 = new cjs.Graphics().p("AqtPmQg6gChCgIQgrgFg1gJQg5gJhagSIhFgOIg6gMIg3gNQgngJghgLQgVgHgTgHQgigOgWgQQgNgKgJgMQgNgQgLgXIgJgXQghhdALhsIAAgBQAGguANgcIAEgIQARgdAjgZIAPgKQAXgOAlgRIAagLIBygzIAogSQA0gZApgYIA2ghIADgCQAigWAXgMIAEgCQAUgLAZgKIAWgKIAcgLIAbgLQAjgOAVgLQAugWA3ghIBfg9IBQgzQA+gnA7gfIAogUQA4gcBcgoIAVgJIBLggIAAgCQgBgEACgFQAEgJAOgIQASgJAdgMIAHgDQATgJAXgOIAigVIAAgCIAEgLQAHgKAOgIQAUgMAhgMIAggPIAXgLQAqgXAPgFIAdgOIBbgtQAegPAbgPQAogUAZgRQAigUAqgcIAegTQAngaAAAQQACAEgBAHQAwABBDAcIAGADIAVAGQA4AKgMgSIAGgHIAdgfQATgmAdgtIABgCQAXgiAIgcQAFgZAJgCQAHgCAMgMIARgSIAdgkIARgXIAIgKQAJgKAQgJIAWgMIAGgDQAngSAugDQAPgBANABIAVADQAaAFAQAKQAIAFAGAIIADAGIABABIAAAAQAbAVAdAcQAbAXAJAiQAHAbATANIAFAEQASAbALAxQAPBFgGAqQgEAZAGAcQAEAUAHAVQATA1gWAZQgWAggOApIgDAJQgMAVgDAaIgIAnIgNBCIgEAXIgEA0IgBAYQgCANABAOQgBAOABAMIACAfIAEAiQAHA7gFBCQgBAmgIAwIgGAlIgEAUQgHAegNAYQgVAqgoAhQgQAOgSAMQgfAYggAMQg6AdhNASIgSAEQgqALhLAIIgHACIgkAFIgeAJQgVADgSAFIhAAMIhBAOQgQAEgOACQgGAAgHADIgIAEQgHADgIACIgPACIgUABQg0ADg7APQgfAGgpAQQgVAEgKgBIgCgCIgBgBIgHADQgrAVgrAiIhQBEIgGAGQg2AuhGAhQgXAMgXAKQg0AVhMAWQhIAUhAAPQhOAThGALQhbAOhTADIg7ABIg7gBg");
	var mask_graphics_10 = new cjs.Graphics().p("AqxPmQg6gDhBgIQgrgFg1gJQg5gJhZgSIhEgNIg6gMIg3gNQgmgKghgLQgVgGgTgIQgigOgVgQQgNgKgJgMQgNgRgKgXIgJgWQghhcALhsIAAgBQAGguANgcIAEgHQARgeAigZIAPgKQAXgOAlgQIAagMIBxgyIAogSQA0gZApgYIA1ggIADgCQAigWAXgMIADgCQAVgLAYgLIAWgJIAcgLIAbgLQAkgPATgKQAugWA3ggIBfg8IBQg0QA+gnA5geIAogVQA5gcBagoIAVgJIBLgfIgBgCQAAgEACgFQAFgJAOgHQASgJAdgMIAHgDQATgJAXgOIAigUIAAgCIADgLIAAAAQAGgKAOgIQAUgMAggNIAhgOIAWgMQArgYANgFIAdgOIBbgsQAegOAagPQArgUAXgQQAigUApgbIAegTQAmgZACANQADADAAAFQAwgBBEAUIAGACIAVAFQA5AFgQgKIAHgFIAggcQATghAegwIABgCQAXgiAIgbQAGgYAJgDQAHgCALgMIARgSQARgUAMgQIARgXIAIgJQAKgKAQgJIAVgMIAGgEQAmgSAugEIAcgBIAVACQAaAEAQAJQAJAEAGAHQACACABADIABABIAAAAQAcASAfAaQAdAUAJAiQAGAbAVALIAFAEQATAZAKAzQAPBFgIApQgGAYAGAdQAEATAHAVQAUA1gaAXQgZAdgQAnIgEAJQgNAVgDAZIgJAmQgHAigIAfIgFAXIgHAzIgCAYQgDANAAAOQgBAOAAAMIACAfIADAhQAGA7gHBBQgCAmgJAwIgHAkIgFAUQgHAdgMAZQgWAqglAhQgQAQgRAMQgeAagfANQg3AfhLAVIgSAFQgqANhJAMIgHACIgjAHIgdALQgUAEgSAGQgcAFgjAJIhAAQQgQAFgOACIgMADIgIAFQgGAEgJACIgPACIgUABQgzAEg6ASQgeAGgpASQgUAFgKAAIgCgBIgBgBIgHADQgqAWgqAiIhQBDIgHAFQg1AshHAhQgYAMgXAJQg1AVhKAVQhHAUhAAPQhOAShGALQhaANhSADIg2ABQggAAgggBg");
	var mask_graphics_11 = new cjs.Graphics().p("Aq1PlQg6gDhBgIQgqgFg1gJQg5gKhYgRIhEgOIg6gMIg2gNQgmgJghgLQgVgHgSgHQgigOgVgRQgMgKgJgMQgNgQgKgXIgJgXQgghcALhrIAAAAQAFguANgcIAEgIQARgdAigYIAPgKQAXgPAkgQIAagMIBxgxIAngSQAzgZApgYIA2ggIADgCQAhgWAXgMIAEgCQAUgLAYgKIAWgKIAbgLIAbgLQAlgPASgJQAugVA2ghIBgg7IBOg0QA/gnA4geIAogUQA4geBZgmIAVgJIBLggIgBgCQAAgEADgEQAGgIANgIQATgJAcgLIAHgDQAUgKAWgNIAigTIAAgDIACgKIAAgBQAFgKAPgJQATgLAhgMIAggQIAWgLQAqgZANgFIAdgOIBagsQAegOAagOQAsgUAWgPQAigTApgbIAegSQAkgYAFAKQADABACAEQAvgEBFANIAGABIAVADQA7AAgUAAIAIgFIAhgXIAzhQIACgCQAWgiAJgbQAGgWAJgEQAIgEALgKIAQgSIAdgjIASgXIAHgJQAKgKAPgKIAVgMIAHgDQAlgUAtgFQAOgBAOAAIAVABQAZADARAHQAJAEAHAFIAEAFIABAAQAdAPAhAYQAeATAJAgQAHAcAVAJIAGAEQAUAXAJA0QAOBGgKAnQgIAYAGAdQAEATAIAUQAVA2geAUQgdAagRAmIgFAIQgOAVgEAYIgJAlQgIAigJAfIgGAXQgFAVgFAdIgEAYQgDAMgBAOQgCANAAAMIABAfIACAiQAFA7gIBAQgDAlgLAwQgDATgEARIgFAUQgIAdgNAYQgUAqgkAiQgPAQgRANQgdAbgdAPQg1AhhJAZIgSAGQgpAPhHAPIgHACIgjAJIgbANQgUAEgSAHIg9ASIg/ASQgQAGgNACIgNAEIgHAFQgGAEgIACIgPADIgUABQgzAFg6AUQgcAHgoAUQgUAGgKABIgCgBIgCAAIgHADQgpAYgpAhIhQBCIgHAFQg0AphKAhQgXALgXAJQg2AVhIAUQhHAUg/AOQhOAShGAKQhZANhSADIguABQgjAAgkgCg");
	var mask_graphics_12 = new cjs.Graphics().p("Aq5PlQg6gDhAgJQgpgFg2gJQg5gKhXgRIhEgNIg5gMIg2gNQglgKghgLQgVgGgSgIQgigOgVgRQgLgKgJgMQgNgRgKgXIgJgWQgfhbALhrIAAAAQAFguANgcIAEgHQARgeAhgYIAPgKQAXgOAkgRIAZgLIBxgxIAngSQAzgYApgYIA1ggIADgCQAhgWAWgMIAEgCQAVgMAXgKIAWgJIAbgLIAbgLQAmgPAQgJQAugVA2ggIBgg7IBOgzQA/goA2gdIAogVQA5geBXgmIAVgJIBKgfIAAgCQAAgEAEgEQAGgIANgHQATgJAcgLIAHgDQAVgKAUgMIAjgTIgBgDIABgKIAAgBQAFgKAPgJQATgMAggMQAPgGARgJIAWgMQArgaALgEIAdgPIBagrQAegNAagOQAugUAUgOQAhgSAqgbIAdgSQAjgXAHAHQAEAAADADQAvgIBFAGIAHABIAVABQAvgEgEAEIACgBIAkgTQAUgZAgg1IACgCQAWghAKgbQAGgVAJgFQAIgEAKgKIARgSQARgTAMgQIARgXIAIgIQAKgKAPgKIAUgMIAHgEQAlgUAsgGQAOgCANAAIAWAAQAZACARAGQAKADAHAEIAEAEIABAAQAfAMAiAVQAgARAJAgQAGAcAXAIIAGADQAVAVAJA2QANBGgNAmQgJAXAGAdQAEATAIAUQAWA3ghARQghAWgTAlIgFAIQgQAUgEAYIgKAkQgJAigKAeIgHAXQgGAVgGAcIgGAYQgEAMgBANQgDAOgBAMIAAAfIACAhQAEA6gKBAQgEAkgMAwQgDATgFARIgGAUQgIAcgMAZQgVAqghAjQgPARgQANQgcAdgbAPQgzAkhIAcIgRAHQgpARhFATIgHACIgiAKQgJAHgRAJQgTAFgSAIIg8AUIg+AVQgQAGgNADIgMADQgCADgFAEQgGAEgIACIgPADIgUACQgyAFg5AWQgbAIgoAWQgSAHgLACIgCAAIgCAAIgHADQgoAZgoAhIhQBBIgHAEQg0AohLAgQgYALgWAIQg3AVhHAUQhHATg+AOQhOARhFAKQhZANhSACIgpABQglAAgmgCg");
	var mask_graphics_13 = new cjs.Graphics().p("Aq9PkQg5gDhAgIQgpgGg1gJQg6gKhWgQIhDgOIg5gMIg2gNQglgKgggKQgVgHgSgIQghgOgVgRQgLgKgJgNQgMgQgKgXIgJgWQgfhbALhqIAAAAQAFgtANgcIADgIQARgdAigYIAOgKQAWgPAlgQIAZgLIBwgyIAngRQAygYApgYIA1gfIADgCQAhgWAWgMIAEgCQAVgMAWgKIAWgKIAbgLIAagLQAngPAQgIQAugUA2ggQAvgdAvgeIBOgyQBAgpA0gdIAngUQA6gfBWglIAUgJIBKggIABgCQABgDADgEQAHgHANgHQATgJAbgLIAHgDQAVgKAVgMIAigSIgBgCIABgMIAAAAQAEgLAPgJQASgLAhgMQAPgGARgKIAVgMQArgaAKgFIAdgOQAmgUA0gXIA4gaQAvgUASgMQAigSApgbIAdgSQAigWAJAEQAFgBAFABQAvgKBFgCIAGAAIAWgBQA9gKgbASIAIgDIAngPQAUgVAig3IACgDQAVghALgaQAHgVAJgFQAIgFAKgJIAQgSQASgTAMgPIARgXIAIgJQAJgJAPgKIAUgNIAGgDQAlgVAsgHIAbgDIAVAAQAZABASADQAKACAIAEIAEADIABAAQAhAIAjATQAjAQAIAgQAGAbAYAHIAGADQAVASAKA3QAMBHgPAkQgLAXAGAdQAEATAIAUQAXA3gkAPQglATgVAjIgFAIQgSAUgEAWIgLAlQgKAggMAfIgHAWIgPAwIgHAXQgEANgCANQgEANgBAMIgBAfIABAhQACA6gLA/QgFAkgNAwQgEASgFASIgGATQgIAcgNAYQgUArggAkQgOARgPAOQgbAegZAQQgyAnhFAgIgRAHQgoAUhEAVIgHADIghAMQgIAHgRAKQgSAGgSAJIg7AXIg9AXQgQAHgMADIgMAEQgCAEgFADQgFAFgIADIgPADIgUACQgyAFg3AYQgaAKgoAXIgdAMIgCgBIgCABIgGADQgpAbgnAgIhQA/IgHAFQgzAmhNAfIgtATQg5AUhFATQhGATg/AOQhMARhFAKQhZAMhRACIgfAAQgqAAgrgDg");
	var mask_graphics_14 = new cjs.Graphics().p("ArBPlQg5gEhAgJQgogFg1gJIiOgbIhDgNIg5gMIg1gNQglgKgggKQgVgHgSgIQghgOgUgSQgLgKgJgMQgMgRgKgXIgIgWQgfhaALhpIAAgBQAFgsANgcIADgIQARgdAhgYIAOgKQAWgPAkgQIAagLIBvgxIAmgSQAzgXAogYIA1gfIADgCQAhgWAWgMIADgCIArgWIAWgKIAbgLIAagKQAogQAOgHQAugUA2gfIBeg7IBNgyQBAgpAzgdIAngUQA6gfBVglIAUgJIBKggIAAgBQACgEAEgDQAHgHANgHIAugUIAHgDQAVgJAVgMIAigRIgBgDIgBgLIAAgBQAEgLAPgJQASgLAhgMIAfgQIAWgMQArgcAJgEIAcgPQAmgTAzgWIA4gaQAygUAQgLQAigRApgbIAcgRQAhgVALABIAMgDQAvgNBFgJIAHgBIAWgDQA+gPgfAcIAJgDIApgLQAVgRAjg5IACgDQAVghAMgaQAHgTAJgGIARgPIARgRQARgTAMgPIASgXIAHgIQAKgKAPgKIATgMIAGgEQAlgWArgIIAbgDIAVgBQAZgBASADQALABAIACIAFACIAAABQAiAEAmARQAkAOAHAfQAGAcAaAFIAHACQAVARAJA4QAMBHgSAjQgMAXAGAdQADASAJAVQAYA3goAMQgoAQgXAhIgGAIQgTAUgEAVIgMAkQgLAggNAeIgIAWIgSAwIgIAXQgFAMgDANQgEANgCAMIgCAeIABAhQABA6gNBAQgGAigOAwIgKAjIgGATQgJAcgMAZQgUAqgeAlQgOARgOAPQgaAggYARQgvAphEAkIgQAIQgoAWhCAYIgGADIghAOQgHAIgRALQgRAHgSAKIg6AZIg8AaQgQAIgLADIgNAFQgBADgFAEQgFAFgIADIgPAEIgTACQgyAGg2AaQgZAKgnAaIgcANIgDABIgCAAIgGAEQgoAcgmAgQgkAdgsAhIgHAEQgyAkhPAfIguASQg5AThEATQhGATg+AOQhMAQhFAJQhYAMhRABIgfAAQgpAAgrgCg");
	var mask_graphics_15 = new cjs.Graphics().p("ArFPlQg5gEg/gJQgngFg2gKIiNgaIhDgNIg4gMIg1gNQglgKgggLQgVgHgRgHQghgPgUgRQgKgKgJgNQgMgRgJgWIgJgWQgehaALhpIAAAAQAFgtANgcIADgHQAQgdAhgYIAPgKQAVgPAkgQIAZgLIBvgxIAmgRQAygXApgYIA0gfIADgCQAhgVAVgMIAEgCQAVgNAWgKIAVgKIAbgLIAagKQApgQANgGQAtgUA2gfIBeg6IBMgyQBBgqAygbIAmgVQA7ggBSgkIAVgJIBJggIABgBIAGgHQAIgGANgGIAtgUIAIgDQAVgKAUgLIAjgRIgCgCIgBgMIAAgBQADgLAPgJQARgLAigMQAOgGARgKIAVgMQArgdAIgEIAdgPQAlgTAzgWIA4gZQAzgUAOgJQAigRApgaIAdgSQAegTAOgDIAOgFQAvgQBGgQIAHgCIAWgFQA/gUgiAlIAJgCQAagFARgCQAWgNAkg8IACgCQAVghAMgZQAIgTAJgHIARgOIAQgRQASgTAMgPIARgXIAIgIQAJgJAPgLIATgMIAGgEQAkgWAqgJIAbgFIAVgCIAsAAIAUABIAFACIABAAQAjACAnAOQAmAMAHAfQAGAcAbADIAHACQAWAPAJA5QALBIgUAiQgOAVAFAeQAEASAJAUQAZA4grAJQgsANgZAgIgGAHQgUAUgFAUIgNAkQgLAfgPAeIgJAWIgUAvIgKAWQgGANgDAMQgGANgBALIgDAfIAAAhQAAA5gPBAQgHAigPAvIgLAjIgGATQgKAbgMAZQgUAqgcAmQgMASgOAPQgZAigWASQgtAshCAnIgQAJQgoAXhAAcIgGAEIghAPQgFAJgRAMIgjATIg4AcIg6AcQgQAIgMAEIgMAFQgBAEgEAEQgFAFgIAEIgPAEIgTACQgyAHg1AcQgYALgnAcIgbAPIgDABIgCABIgGAEQgnAdgmAfQglAegrAfIgHAFQgxAhhRAeQgWAKgXAHQg7AUhCASQhFATg+ANQhLAQhFAJQhYALhQABIgVAAQguAAgwgDg");
	var mask_graphics_16 = new cjs.Graphics().p("ArLPnQg5gFg+gJQgngFg2gJQg5gKhTgRIhCgNIg4gMIg1gNQgkgKgggKQgVgHgRgIQghgPgTgRQgLgKgIgNQgLgRgKgXIgIgVQgehaALhoQAFgsAMgcIAEgHQAQgeAhgYIAOgKQAVgOAkgQIAZgMIBugwIAmgRQAygXAogXIA0gfIADgCIA2ghIAEgCQAVgNAVgKIAVgKIAbgLIAZgKIA2gWQAtgTA2gfQAugbAwgfIBMgxQBBgrAwgbIAmgVQA7gfBRglIAUgJIBJgfIABgBIAHgGQAJgHAMgGIAugTIAHgDIArgUIAhgQIgBgDQgDgGABgGIAAgBQACgLAPgJQARgLAigMQAOgGAQgKIAVgNQArgeAHgDIAdgQQAlgTAzgVIA4gYQA1gUAMgIQAigRAogZIAdgSQAdgSAQgGIARgIQAugTBHgXIAGgCIAXgHQA/gZglAuIAKgBQAbgDASgBQAXgIAmg+IABgDQAUghAOgYQAIgSAJgIIARgPIAQgQIAdgiIASgWIAIgIQAJgKAOgKIATgMIAGgFQAjgWAqgLIAbgFIAVgCQAZgDATAAIAVgBIAFABIABAAQAkgCApANQAoAJAHAfQAGAcAcACIAHABQAXANAIA7QALBHgXAhQgPAVAFAeQAEASAJAUQAbA4gwAHQgvAJgbAfIgHAHQgVAUgGATIgNAjQgMAegQAeIgLAWIgWAuIgKAWQgHAMgFAMQgGAOgCALQgCANgBARIgBAhQgCA4gQBAQgHAhgRAxIgMAhIgGATQgKAbgMAZQgUAqgaAmQgMATgMAQQgYAjgVATQgsAvhAAqIgPAKQgnAag/AfIgGAEIggARQgEAKgRANIgiAVIg3AeIg5AeQgQAJgLAEIgMAGQgBAEgEAEQgFAGgIAEIgOAEIgTADQgxAHg1AfQgXALgmAeIgbARIgDACIgCABIgGAEIhLA9QgmAfgqAdIgIAEQgwAghSAdIguARQg7AThAARQhGATg9ANQhLAPhFAJQhXALhPAAIgMAAQgyAAg1gDg");
	var mask_graphics_17 = new cjs.Graphics().p("ArRPpQg4gEg+gJQgngGg1gJQg6gKhSgQIhCgOIg3gMIg1gNQgkgKgfgKQgVgHgRgIQgggOgTgTQgLgJgIgOQgLgQgKgXIgIgVQgdhaALhnQAFgsAMgcIADgHQARgdAggYIAOgKQAVgOAkgRIAYgLIBugwIAmgRQAxgXAogWIA0gfIADgCIA1giIAEgCQAWgNAUgKIAVgKIAagLIAagKIA1gVQAugTA1geQAtgaAxggIBLgxQBCgrAugaIAmgVQA7ggBQgkIAUgJIBJgfIABgCIAIgFIAVgMIAtgTIAIgDIAqgTIAigQIgCgDQgDgGAAgGIAAgBQACgLAPgKQARgKAhgMQAOgGARgLIAUgNIAxghIAdgQQAkgUA0gUIA3gXQA3gUAKgHQAigQApgZIAcgRQAcgSASgJIATgKQAugXBHgeIAHgDIAXgIQBAgegpA2IALAAQAdgBATACQAWgEAohBIABgDIAig4QAJgRAJgIIAQgQIARgQIAdghIASgWIAHgIQAKgKAOgKIASgNIAGgEQAjgYApgLIAagFIAVgEIAtgGIAWgCIAFAAIABAAQAmgFAqAKQAqAIAHAeQAFAcAeAAQAEAAADACQAYAKAIA8QAKBIgZAgQgRAUAFAfQAEARAKAUQAbA5gzAEQgzAGgdAdIgHAHQgXAUgGASIgOAiQgNAegRAeIgMAVIgYAtIgMAWQgIAMgFAMQgHANgDALQgDANgBASIgBAgQgDA3gSBAQgIAggSAxIgNAiIgHASQgKAagMAZQgTArgZAnQgLAUgLAQQgXAlgUAUQgpAxg/AtIgOALQgnAcg9AjIgGAEIgfASQgDALgRAPIghAWIg2AhIg4AhQgQAKgKAEIgMAFQgBAFgEAFQgFAGgHAEIgPAEIgTADQgwAIg0AhQgVANgmAfIgbAUIgDABIgCACIgGAEIhKA/QgmAfgqAbIgHAEQgwAdhUAdIgtAQQg9ATg+ARQhFASg9ANQhLAOhEAJQhWAKhQABQg2AAg8gFg");
	var mask_graphics_18 = new cjs.Graphics().p("ArXPtQg4gEg+gJQglgGg2gKQg6gKhRgQIhBgNIg3gMIg0gNQgkgKgfgKQgVgHgRgIQgggPgTgSQgKgKgIgNQgLgRgJgXIgIgVQgdhZALhnQAFgrAMgcIADgHQAQgdAggYIAOgKQAVgOAjgQIAZgMIBugwIAkgQQAxgXApgWIAzgeIADgCIA1giIAEgCIApgYIAVgKIAagLIAagKIA1gUQAtgTA1geQAtgZAxggIBKgxQBDgrAsgaIAmgVQA8ghBOgjIATgJIBJgfIACgCIAIgFIAWgKIAtgUIAHgDIArgSIAigQIgDgCQgEgHABgGIAAgBQABgLAPgKQAQgKAigMQAOgGAQgLIAUgNIAxgiIAcgRQAkgTAzgUIA4gVQA4gVAJgFQAigQAogZIAcgRQAbgRAVgLIAVgNIB1hAIAGgDIAYgKQBBgjgsBAIALAAQAeABAUAEQAXAAAphDIABgDIAjg4QAJgQAJgJIAQgPIAQgQQASgSAMgPIARgWIAIgIQAJgJAOgKIASgOIAGgEQAigYApgMQANgEANgDIAVgEIAtgJIAWgEIAGAAIABAAQAogJAsAIQArAGAHAeQAFAcAfgCIAIABQAYAJAIA9QAJBJgcAeQgTAUAGAfQADARALAUQAcA4g2ACQg3ADgfAbIgHAHQgZAUgGARIgPAiQgOAcgSAfIgNAVIgbAsIgNAVQgJANgFALQgIANgDALQgEANgBARIgCAgQgEA3gUBAQgJAfgTAyIgOAhIgHATQgKAYgMAZQgUArgWAoIgVAlQgWAngSAVQgnAzg9AxIgPAMQglAeg7AmIgHAEIgeAUQgCAMgRAQIggAYIg1AjIg3AjQgQALgKAEIgMAHQAAAFgEAFQgEAHgIAEQgEACgKACIgTADQgwAJgzAjQgUANgmAiIgaAVIgDACIgCADIgGAEQglAigjAdQgoAggoAZIgIAEQguAbhVAdIgvAPQg9ATg9AQQhFASg8AMQhKAOhEAJQhWAJhPAAQg2AAg8gFg");
	var mask_graphics_19 = new cjs.Graphics().p("ApsP3Qg1gBg8gFQg4gFg9gJIhbgPIiJgaIhBgOIg3gMIg0gNQgkgKgfgKQgUgHgRgIQgggPgSgSQgKgKgIgOQgLgQgJgXIgHgVQgdhZALhmQAFgrAMgcIADgHQAQgdAfgYIAOgKQAVgOAjgQIAZgLIBtgwIAkgQQAxgXAogWIAzgeIADgCIA1ghIAEgCQAVgOAUgKIAUgKIAagLIAagKIA0gUQAtgSA1geQAsgYAxggIBKgxQBDgsAsgZIAkgVQA9giBMgiIAUgJIBIggIACgBIAKgEIAWgLIAsgTIAIgDIArgSIAigOIgDgDQgFgGAAgHIAAgBQABgMAPgJQAQgKAigMQAOgGAQgLIAUgOIAvgjIAcgQQAkgUAzgTIA4gVQA6gUAGgEQAjgPAogZIAcgRIAwgeIAXgQIB1hJIAHgEQANgIALgFQBCgogwBJIAMACQAfADAVAFQAYAFAqhGIABgDQAUggAPgXQAKgPAJgKIAQgPIAQgQQARgSAMgOIASgWIAIgIQAJgJANgLIASgNIAGgEQAigZAogOIAagHIAUgFIAugLIAXgGIAHgBIABAAQAogMAuAFQAuAFAFAdQAGAcAggDQAEAAAEABQAYAGAIA/QAJBJgeAdQgVATAGAfQADARALAUQAdA5g6gBQg6gBghAaIgIAHQgaAUgGAPIgQAiQgOAcgUAeIgOAVIgeArIgOAVQgKAMgGALQgIAOgEAKQgEANgCASIgDAfQgEA3gWA/QgKAfgUAxIgOAiIgIASIgXAxQgTArgVApIgTAmQgVAogQAWQglA2g8A1IgOAMQglAgg5ApIgGAFIgfAWQAAANgRAQIgfAaIg0AmIg1AmQgQALgKAFIgMAGQAAAGgDAFQgFAHgHAFIgOAFIgTADQgwAJgxAlQgUAPglAjIgZAYIgDACIgDADIgFAEQglAkgjAcQgoAhgoAXIgHAEQguAZhXAcIguAOQg/ATg7APQhEASg9AMQhJAOhEAIQhRAJhLAAIgIAAg");
	var mask_graphics_20 = new cjs.Graphics().p("ApyP8QhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgCgDQgFgGAAgHQAAgMAOgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmIAfgTQBDgsg0BSQAqAGAZAIQAZAJAqhIQArhIAdgaQAdgaAQgVQARgVAJgJQAJgJAOgKIAXgSQAsgiA2gOQA3gPArgPQAqgPAwADQAvADAGAdQAFAcAhgFQAhgFAJBKQAIBJghAcQghAcAeA6QAfA6g+gEQg9gEgjAZQgjAYgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgNAHQABAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhYAcQinAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_21 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtgvBNQAoAGAZAHQAYAIAqhGQAqhGAcgYQAcgaARgUQARgVAJgIQAJgJAOgKIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_22 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtgqBIQAmAFAYAGQAYAHAqhDQAohEAcgYQAbgYASgUQARgUAJgIQAJgJAOgKIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_23 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtglBDQAkAEAXAGQAXAFAqhBQAohCAbgXQAagXASgTQASgTAJgIIAXgTIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_24 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtggA+QAiADAXAFQAWAFAphAQAng/AbgWQAZgXATgSQASgTAJgHIAXgTIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_25 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtgcA4QAhADAWAEQAWAEAog+QAng8AbgWIAqgnIAcgZIAXgTIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_26 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtgXAzQAfACAWADQAVADAog7QAlg7AbgVIAqglIAcgZIAXgSIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_27 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtgSAuQAdABAVACQAUACAog5QAlg4AagUIApgkIAdgYIAXgSIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_28 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtgNApQAbAAAUABQAUACAng4QAkg2AagTIApgiIAdgXIAXgSIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_29 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtgJAjIAuAAQATABAmg1QAkg0AZgTIAoggIAegWIAXgSIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_30 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtgEAeIArgCQATAAAmgzQAigxAZgSIAogfIAegVIAXgSIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_31 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtABAZIAogDQASgCAmgxQAigvAYgRQATgPAVgOIAdgVIAYgRIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_32 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtAGAUIAmgFQARgCAlgwQAigsAXgQQASgOAVgOIAegUIAYgRIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_33 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtAKAOIAkgGQARgDAkgtQAhgqAXgQQARgNAWgNIAegTIAYgRIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_34 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtAPAJIAigIQAQgEAkgrQAggoAWgPQAQgMAWgMIAfgSIAYgRIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_35 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtAUAEIAfgKQAPgFAkgpQAfglAWgOQAQgLAWgMQAVgLAKgGIAYgRIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_36 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtAZgBIAcgMQAPgFAjgnQAfgkAVgNQAPgKAWgKIAggSQAKgGAOgKIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_37 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtAdgHIAbgNQAOgGAiglQAeghAWgNQANgIAXgKQAWgKAKgHQAKgGAOgKIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_38 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtAigMQAJgHAPgIQAOgHAigjQAdgeAVgMQAMgIAXgJQAXgKAKgGQAKgGAOgKIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_39 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtAngRQAHgIAOgIQANgJAighQAcgcAVgLQAMgHAXgIQAWgJALgGQAKgGAOgKIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_40 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmIAfgTQBDgtArgXQAGgIAOgJQAMgJAhgfQAcgaAUgLQALgFAXgIQAXgIALgGQAKgGAOgKIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgNAGQABAGgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_41 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtAngRQAHgIAOgIQANgIAigiQAcgcAVgLQAMgHAXgIQAWgJALgGQAKgGAOgKIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_42 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtAigMQAJgHAPgHQAOgIAigjQAdgeAVgMQAMgIAXgJQAXgKAKgGQAKgGAOgKIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_43 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtAdgHIAbgNQAOgGAiglQAeghAWgNQANgIAXgKQAWgKAKgHQAKgGAOgKIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_44 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtAZgBIAcgMQAPgFAjgnQAfgkAVgNQAPgKAWgKIAggSQAKgGAOgKIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_45 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtAUAEIAfgKQAPgEAkgqQAfglAWgOQAQgLAWgLIAfgSIAYgRIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_46 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtAPAJIAhgIQARgEAkgrQAggoAWgPQARgMAVgMQAVgLAKgHIAYgRIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_47 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtAKAPIAkgHQARgDAkgtQAhgqAXgQQARgNAWgNIAegTIAYgRIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_48 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtAGAUIAmgFQARgCAlgwQAigsAXgRQASgNAVgOIAegUIAYgRIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_49 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtABAZIAogDQASgCAmgxQAigvAYgRQATgPAVgOIAdgVIAYgRIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_50 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtgEAeIArgBQATgBAmgzQAjgxAYgSQAUgQAUgPIAegVIAXgSIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_51 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtgJAkIAugBQATABAmg2QAkgzAZgTIAoggIAegWIAXgSIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_52 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtgOApQAcAAAUABQAUACAng4QAkg1AagUIApgiIAdgXIAXgSIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_53 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtgSAuQAdABAVACQAUACAog5QAlg4AagUIApgkIAdgYIAXgSIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_54 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtgXAzQAfACAWADQAUADAog7QAmg7AbgVIAqglIAcgZIAXgSIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_55 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtgcA5QAhACAWAEQAWAEAog+QAng8AbgWIAqgnIAcgaIAXgSIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_56 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtghA+QAjADAXAFQAWAFAphAQAng/AcgWQAZgXASgSIAbgaIAXgTIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_57 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtglBDQAkAEAXAGQAXAGAqhCQAohBAbgYQAagXASgTQASgTAJgIIAXgTIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_58 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtgqBIQAmAFAYAGQAXAHAqhEQAphDAcgYQAbgYASgUQARgUAJgIIAXgTIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_59 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmQARgLAOgIQBDgtgvBNQAoAGAZAHQAYAIAqhGQAqhGAcgYQAcgaARgUQARgVAJgIQAJgJAOgKIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgMAHQAAAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_60 = new cjs.Graphics().p("Ao5PsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmIAfgTQBDgtg0BTQAqAGAZAIQAZAJAqhIQArhIAdgaQAdgaAQgVQARgVAJgJQAJgJAOgKIAXgSQAsgiA2gOQA3gPA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAeQgBBBgIAgQgFATgMAbIgUAtIgTAvQgMAfgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgNAGQABAGgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhZAcQimAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_61 = new cjs.Graphics().p("ApyP8QhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBMggIgCgDQgFgGAAgHQAAgMAOgKQAPgKAjgMQAVgKAcgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmIAfgTQBDgsg0BSQAqAGAZAIQAZAJAqhIQArhIAdgaQAdgaAQgVQARgVAJgJQAJgJAOgKIAXgSQAsgiA2gOQA3gPArgPQAqgPAwADQAvADAGAdQAFAcAhgFQAhgFAJBKQAIBJghAcQghAcAeA6QAfA6g+gEQg9gEgjAZQgjAYgHAQQgUArghAwQgVAegqA1QgXAdgHASQgFAMgCASIgEAgQgGA2gXA/QgOAnghBJIhFCYQggBHgVAhQgjA4g5A5QgqAphGA3IgeAYQABAOgRARQgbAbg2AqIg0AoQgQAMgJAFIgNAHQABAFgDAGQgEAIgIAFQgHAEgZAEQgwAKgwAnQgYAUg4A6QhaBehPAoQgtAXhYAcQinAziBAYQibAdiHAAIgNAAg");
	var mask_graphics_62 = new cjs.Graphics().p("ApsP3Qg1gBg8gFQg4gFg9gJIhbgPIiJgaIhBgOIg3gMIg0gNQgkgKgfgKQgUgHgRgIQgggPgSgSQgKgKgIgOQgLgQgJgXIgHgVQgdhZALhmQAFgrAMgcIADgHQAQgdAfgYIAOgKQAVgOAjgQIAZgLIBtgwIAkgQQAxgXAogWIAzgeIADgCIA1ghIAEgCQAVgOAUgKIAUgKIAagLIAagKIA0gUQAtgSA1geQAsgYAxggIBKgxQBDgsAsgZIAkgVQA9giBMgiIAUgJIBIggIACgBIAKgEIAWgLIAsgTIAIgDIArgSIAigOIgDgDQgFgGAAgHIAAgBQABgMAPgJQAQgKAigMQAOgGAQgLIAUgOIAvgjIAcgQQAkgUAzgTIA4gVQA6gUAGgEQAjgPAogZIAcgRIAwgeIAXgQIB1hJIAHgEQANgIALgFQBCgogwBJIAMACQAfADAVAFQAYAFAqhGIABgDQAUggAPgXQAKgPAJgKIAQgPIAQgQQARgSAMgOIASgWIAIgIQAJgJANgLIASgNIAGgEQAigZAogOIAagHIAUgFIAugLIAXgGIAHgBIABAAQAogMAuAFQAuAFAFAdQAGAcAggDQAEAAAEABQAYAGAIA/QAJBJgeAdQgVATAGAfQADARALAUQAdA5g6gBQg6gBghAaIgIAHQgaAUgGAPIgQAiQgOAcgUAeIgOAVIgeArIgOAVQgKAMgGALQgIAOgEAKQgEANgCASIgDAfQgEA3gWA/QgKAfgUAxIgOAiIgIASIgXAxQgTArgVApIgTAmQgVAogQAWQglA2g8A1IgOAMQglAgg5ApIgGAFIgfAWQAAANgRAQIgfAaIg0AmIg1AmQgQALgKAFIgMAGQAAAGgDAFQgFAHgHAFIgOAFIgTADQgwAJgxAlQgUAPglAjIgZAYIgDACIgDADIgFAEQglAkgjAcQgoAhgoAXIgHAEQguAZhXAcIguAOQg/ATg7APQhEASg9AMQhJAOhEAIQhRAJhLAAIgIAAg");
	var mask_graphics_63 = new cjs.Graphics().p("ArXPtQg4gEg+gJQglgGg2gKQg6gKhRgQIhBgNIg3gMIg0gNQgkgKgfgKQgVgHgRgIQgggPgTgSQgKgKgIgNQgLgRgJgXIgIgVQgdhZALhnQAFgrAMgcIADgHQAQgdAggYIAOgKQAVgOAjgQIAZgMIBugwIAkgQQAxgXApgWIAzgeIADgCIA1giIAEgCIApgYIAVgKIAagLIAagKIA1gUQAtgTA1geQAtgZAxggIBKgxQBDgrAsgaIAmgVQA8ghBOgjIATgJIBJgfIACgCIAIgFIAWgKIAtgUIAHgDIArgSIAigQIgDgCQgEgHABgGIAAgBQABgLAPgKQAQgKAigMQAOgGAQgLIAUgNIAxgiIAcgRQAkgTAzgUIA4gVQA4gVAJgFQAigQAogZIAcgRQAbgRAVgLIAVgNIB1hAIAGgDIAYgKQBBgjgsBAIALAAQAeABAUAEQAXAAAphDIABgDIAjg4QAJgQAJgJIAQgPIAQgQQASgSAMgPIARgWIAIgIQAJgJAOgKIASgOIAGgEQAigYApgMQANgEANgDIAVgEIAtgJIAWgEIAGAAIABAAQAogJAsAIQArAGAHAeQAFAcAfgCIAIABQAYAJAIA9QAJBJgcAeQgTAUAGAfQADARALAUQAcA4g2ACQg3ADgfAbIgHAHQgZAUgGARIgPAiQgOAcgSAfIgNAVIgbAsIgNAVQgJANgFALQgIANgDALQgEANgBARIgCAgQgEA3gUBAQgJAfgTAyIgOAhIgHATQgKAYgMAZQgUArgWAoIgVAlQgWAngSAVQgnAzg9AxIgPAMQglAeg7AmIgHAEIgeAUQgCAMgRAQIggAYIg1AjIg3AjQgQALgKAEIgMAHQAAAFgEAFQgEAHgIAEQgEACgKACIgTADQgwAJgzAjQgUANgmAiIgaAVIgDACIgCADIgGAEQglAigjAdQgoAggoAZIgIAEQguAbhVAdIgvAPQg9ATg9AQQhFASg8AMQhKAOhEAJQhWAJhPAAQg2AAg8gFg");
	var mask_graphics_64 = new cjs.Graphics().p("ArRPpQg4gEg+gJQgngGg1gJQg6gKhSgQIhCgOIg3gMIg1gNQgkgKgfgKQgVgHgRgIQgggOgTgTQgLgJgIgOQgLgQgKgXIgIgVQgdhaALhnQAFgsAMgcIADgHQARgdAggYIAOgKQAVgOAkgRIAYgLIBugwIAmgRQAxgXAogWIA0gfIADgCIA1giIAEgCQAWgNAUgKIAVgKIAagLIAagKIA1gVQAugTA1geQAtgaAxggIBLgxQBCgrAugaIAmgVQA7ggBQgkIAUgJIBJgfIABgCIAIgFIAVgMIAtgTIAIgDIAqgTIAigQIgCgDQgDgGAAgGIAAgBQACgLAPgKQARgKAhgMQAOgGARgLIAUgNIAxghIAdgQQAkgUA0gUIA3gXQA3gUAKgHQAigQApgZIAcgRQAcgSASgJIATgKQAugXBHgeIAHgDIAXgIQBAgegpA2IALAAQAdgBATACQAWgEAohBIABgDIAig4QAJgRAJgIIAQgQIARgQIAdghIASgWIAHgIQAKgKAOgKIASgNIAGgEQAjgYApgLIAagFIAVgEIAtgGIAWgCIAFAAIABAAQAmgFAqAKQAqAIAHAeQAFAcAeAAQAEAAADACQAYAKAIA8QAKBIgZAgQgRAUAFAfQAEARAKAUQAbA5gzAEQgzAGgdAdIgHAHQgXAUgGASIgOAiQgNAegRAeIgMAVIgYAtIgMAWQgIAMgFAMQgHANgDALQgDANgBASIgBAgQgDA3gSBAQgIAggSAxIgNAiIgHASQgKAagMAZQgTArgZAnQgLAUgLAQQgXAlgUAUQgpAxg/AtIgOALQgnAcg9AjIgGAEIgfASQgDALgRAPIghAWIg2AhIg4AhQgQAKgKAEIgMAFQgBAFgEAFQgFAGgHAEIgPAEIgTADQgwAIg0AhQgVANgmAfIgbAUIgDABIgCACIgGAEIhKA/QgmAfgqAbIgHAEQgwAdhUAdIgtAQQg9ATg+ARQhFASg9ANQhLAOhEAJQhWAKhQABQg2AAg8gFg");
	var mask_graphics_65 = new cjs.Graphics().p("ArLPnQg5gFg+gJQgngFg2gJQg5gKhTgRIhCgNIg4gMIg1gNQgkgKgggKQgVgHgRgIQghgPgTgRQgLgKgIgNQgLgRgKgXIgIgVQgehaALhoQAFgsAMgcIAEgHQAQgeAhgYIAOgKQAVgOAkgQIAZgMIBugwIAmgRQAygXAogXIA0gfIADgCIA2ghIAEgCQAVgNAVgKIAVgKIAbgLIAZgKIA2gWQAtgTA2gfQAugbAwgfIBMgxQBBgrAwgbIAmgVQA7gfBRglIAUgJIBJgfIABgBIAHgGQAJgHAMgGIAugTIAHgDIArgUIAhgQIgBgDQgDgGABgGIAAgBQACgLAPgJQARgLAigMQAOgGAQgKIAVgNQArgeAHgDIAdgQQAlgTAzgVIA4gYQA1gUAMgIQAigRAogZIAdgSQAdgSAQgGIARgIQAugTBHgXIAGgCIAXgHQA/gZglAuIAKgBQAbgDASgBQAXgIAmg+IABgDQAUghAOgYQAIgSAJgIIARgPIAQgQIAdgiIASgWIAIgIQAJgKAOgKIATgMIAGgFQAjgWAqgLIAbgFIAVgCQAZgDATAAIAVgBIAFABIABAAQAkgCApANQAoAJAHAfQAGAcAcACIAHABQAXANAIA7QALBHgXAhQgPAVAFAeQAEASAJAUQAbA4gwAHQgvAJgbAfIgHAHQgVAUgGATIgNAjQgMAegQAeIgLAWIgWAuIgKAWQgHAMgFAMQgGAOgCALQgCANgBARIgBAhQgCA4gQBAQgHAhgRAxIgMAhIgGATQgKAbgMAZQgUAqgaAmQgMATgMAQQgYAjgVATQgsAvhAAqIgPAKQgnAag/AfIgGAEIggARQgEAKgRANIgiAVIg3AeIg5AeQgQAJgLAEIgMAGQgBAEgEAEQgFAGgIAEIgOAEIgTADQgxAHg1AfQgXALgmAeIgbARIgDACIgCABIgGAEIhLA9QgmAfgqAdIgIAEQgwAghSAdIguARQg7AThAARQhGATg9ANQhLAPhFAJQhXALhPAAIgMAAQgyAAg1gDg");
	var mask_graphics_66 = new cjs.Graphics().p("ArFPlQg5gEg/gJQgngFg2gKIiNgaIhDgNIg4gMIg1gNQglgKgggLQgVgHgRgHQghgPgUgRQgKgKgJgNQgMgRgJgWIgJgWQgehaALhpIAAAAQAFgtANgcIADgHQAQgdAhgYIAPgKQAVgPAkgQIAZgLIBvgxIAmgRQAygXApgYIA0gfIADgCQAhgVAVgMIAEgCQAVgNAWgKIAVgKIAbgLIAagKQApgQANgGQAtgUA2gfIBeg6IBMgyQBBgqAygbIAmgVQA7ggBSgkIAVgJIBJggIABgBIAGgHQAIgGANgGIAtgUIAIgDQAVgKAUgLIAjgRIgCgCIgBgMIAAgBQADgLAPgJQARgLAigMQAOgGARgKIAVgMQArgdAIgEIAdgPQAlgTAzgWIA4gZQAzgUAOgJQAigRApgaIAdgSQAegTAOgDIAOgFQAvgQBGgQIAHgCIAWgFQA/gUgiAlIAJgCQAagFARgCQAWgNAkg8IACgCQAVghAMgZQAIgTAJgHIARgOIAQgRQASgTAMgPIARgXIAIgIQAJgJAPgLIATgMIAGgEQAkgWAqgJIAbgFIAVgCIAsAAIAUABIAFACIABAAQAjACAnAOQAmAMAHAfQAGAcAbADIAHACQAWAPAJA5QALBIgUAiQgOAVAFAeQAEASAJAUQAZA4grAJQgsANgZAgIgGAHQgUAUgFAUIgNAkQgLAfgPAeIgJAWIgUAvIgKAWQgGANgDAMQgGANgBALIgDAfIAAAhQAAA5gPBAQgHAigPAvIgLAjIgGATQgKAbgMAZQgUAqgcAmQgMASgOAPQgZAigWASQgtAshCAnIgQAJQgoAXhAAcIgGAEIghAPQgFAJgRAMIgjATIg4AcIg6AcQgQAIgMAEIgMAFQgBAEgEAEQgFAFgIAEIgPAEIgTACQgyAHg1AcQgYALgnAcIgbAPIgDABIgCABIgGAEQgnAdgmAfQglAegrAfIgHAFQgxAhhRAeQgWAKgXAHQg7AUhCASQhFATg+ANQhLAQhFAJQhYALhQABIgVAAQguAAgwgDg");
	var mask_graphics_67 = new cjs.Graphics().p("ArBPlQg5gEhAgJQgogFg1gJIiOgbIhDgNIg5gMIg1gNQglgKgggKQgVgHgSgIQghgOgUgSQgLgKgJgMQgMgRgKgXIgIgWQgfhaALhpIAAgBQAFgsANgcIADgIQARgdAhgYIAOgKQAWgPAkgQIAagLIBvgxIAmgSQAzgXAogYIA1gfIADgCQAhgWAWgMIADgCIArgWIAWgKIAbgLIAagKQAogQAOgHQAugUA2gfIBeg7IBNgyQBAgpAzgdIAngUQA6gfBVglIAUgJIBKggIAAgBQACgEAEgDQAHgHANgHIAugUIAHgDQAVgJAVgMIAigRIgBgDIgBgLIAAgBQAEgLAPgJQASgLAhgMIAfgQIAWgMQArgcAJgEIAcgPQAmgTAzgWIA4gaQAygUAQgLQAigRApgbIAcgRQAhgVALABIAMgDQAvgNBFgJIAHgBIAWgDQA+gPgfAcIAJgDIApgLQAVgRAjg5IACgDQAVghAMgaQAHgTAJgGIARgPIARgRQARgTAMgPIASgXIAHgIQAKgKAPgKIATgMIAGgEQAlgWArgIIAbgDIAVgBQAZgBASADQALABAIACIAFACIAAABQAiAEAmARQAkAOAHAfQAGAcAaAFIAHACQAVARAJA4QAMBHgSAjQgMAXAGAdQADASAJAVQAYA3goAMQgoAQgXAhIgGAIQgTAUgEAVIgMAkQgLAggNAeIgIAWIgSAwIgIAXQgFAMgDANQgEANgCAMIgCAeIABAhQABA6gNBAQgGAigOAwIgKAjIgGATQgJAcgMAZQgUAqgeAlQgOARgOAPQgaAggYARQgvAphEAkIgQAIQgoAWhCAYIgGADIghAOQgHAIgRALQgRAHgSAKIg6AZIg8AaQgQAIgLADIgNAFQgBADgFAEQgFAFgIADIgPAEIgTACQgyAGg2AaQgZAKgnAaIgcANIgDABIgCAAIgGAEQgoAcgmAgQgkAdgsAhIgHAEQgyAkhPAfIguASQg5AThEATQhGATg+AOQhMAQhFAJQhYAMhRABIgfAAQgpAAgrgCg");
	var mask_graphics_68 = new cjs.Graphics().p("Aq9PkQg5gDhAgIQgpgGg1gJQg6gKhWgQIhDgOIg5gMIg2gNQglgKgggKQgVgHgSgIQghgOgVgRQgLgKgJgNQgMgQgKgXIgJgWQgfhbALhqIAAAAQAFgtANgcIADgIQARgdAigYIAOgKQAWgPAlgQIAZgLIBwgyIAngRQAygYApgYIA1gfIADgCQAhgWAWgMIAEgCQAVgMAWgKIAWgKIAbgLIAagLQAngPAQgIQAugUA2ggQAvgdAvgeIBOgyQBAgpA0gdIAngUQA6gfBWglIAUgJIBKggIABgCQABgDADgEQAHgHANgHQATgJAbgLIAHgDQAVgKAVgMIAigSIgBgCIABgMIAAAAQAEgLAPgJQASgLAhgMQAPgGARgKIAVgMQArgaAKgFIAdgOQAmgUA0gXIA4gaQAvgUASgMQAigSApgbIAdgSQAigWAJAEQAFgBAFABQAvgKBFgCIAGAAIAWgBQA9gKgbASIAIgDIAngPQAUgVAig3IACgDQAVghALgaQAHgVAJgFQAIgFAKgJIAQgSQASgTAMgPIARgXIAIgJQAJgJAPgKIAUgNIAGgDQAlgVAsgHIAbgDIAVAAQAZABASADQAKACAIAEIAEADIABAAQAhAIAjATQAjAQAIAgQAGAbAYAHIAGADQAVASAKA3QAMBHgPAkQgLAXAGAdQAEATAIAUQAXA3gkAPQglATgVAjIgFAIQgSAUgEAWIgLAlQgKAggMAfIgHAWIgPAwIgHAXQgEANgCANQgEANgBAMIgBAfIABAhQACA6gLA/QgFAkgNAwQgEASgFASIgGATQgIAcgNAYQgUArggAkQgOARgPAOQgbAegZAQQgyAnhFAgIgRAHQgoAUhEAVIgHADIghAMQgIAHgRAKQgSAGgSAJIg7AXIg9AXQgQAHgMADIgMAEQgCAEgFADQgFAFgIADIgPADIgUACQgyAFg3AYQgaAKgoAXIgdAMIgCgBIgCABIgGADQgpAbgnAgIhQA/IgHAFQgzAmhNAfIgtATQg5AUhFATQhGATg/AOQhMARhFAKQhZAMhRACIgfAAQgqAAgrgDg");
	var mask_graphics_69 = new cjs.Graphics().p("Aq5PlQg6gDhAgJQgpgFg2gJQg5gKhXgRIhEgNIg5gMIg2gNQglgKghgLQgVgGgSgIQgigOgVgRQgLgKgJgMQgNgRgKgXIgJgWQgfhbALhrIAAAAQAFguANgcIAEgHQARgeAhgYIAPgKQAXgOAkgRIAZgLIBxgxIAngSQAzgYApgYIA1ggIADgCQAhgWAWgMIAEgCQAVgMAXgKIAWgJIAbgLIAbgLQAmgPAQgJQAugVA2ggIBgg7IBOgzQA/goA2gdIAogVQA5geBXgmIAVgJIBKgfIAAgCQAAgEAEgEQAGgIANgHQATgJAcgLIAHgDQAVgKAUgMIAjgTIgBgDIABgKIAAgBQAFgKAPgJQATgMAggMQAPgGARgJIAWgMQArgaALgEIAdgPIBagrQAegNAagOQAugUAUgOQAhgSAqgbIAdgSQAjgXAHAHQAEAAADADQAvgIBFAGIAHABIAVABQAvgEgEAEIACgBIAkgTQAUgZAgg1IACgCQAWghAKgbQAGgVAJgFQAIgEAKgKIARgSQARgTAMgQIARgXIAIgIQAKgKAPgKIAUgMIAHgEQAlgUAsgGQAOgCANAAIAWAAQAZACARAGQAKADAHAEIAEAEIABAAQAfAMAiAVQAgARAJAgQAGAcAXAIIAGADQAVAVAJA2QANBGgNAmQgJAXAGAdQAEATAIAUQAWA3ghARQghAWgTAlIgFAIQgQAUgEAYIgKAkQgJAigKAeIgHAXQgGAVgGAcIgGAYQgEAMgBANQgDAOgBAMIAAAfIACAhQAEA6gKBAQgEAkgMAwQgDATgFARIgGAUQgIAcgMAZQgVAqghAjQgPARgQANQgcAdgbAPQgzAkhIAcIgRAHQgpARhFATIgHACIgiAKQgJAHgRAJQgTAFgSAIIg8AUIg+AVQgQAGgNADIgMADQgCADgFAEQgGAEgIACIgPADIgUACQgyAFg5AWQgbAIgoAWQgSAHgLACIgCAAIgCAAIgHADQgoAZgoAhIhQBBIgHAEQg0AohLAgQgYALgWAIQg3AVhHAUQhHATg+AOQhOARhFAKQhZANhSACIgpABQglAAgmgCg");
	var mask_graphics_70 = new cjs.Graphics().p("Aq1PlQg6gDhBgIQgqgFg1gJQg5gKhYgRIhEgOIg6gMIg2gNQgmgJghgLQgVgHgSgHQgigOgVgRQgMgKgJgMQgNgQgKgXIgJgXQgghcALhrIAAAAQAFguANgcIAEgIQARgdAigYIAPgKQAXgPAkgQIAagMIBxgxIAngSQAzgZApgYIA2ggIADgCQAhgWAXgMIAEgCQAUgLAYgKIAWgKIAbgLIAbgLQAlgPASgJQAugVA2ghIBgg7IBOg0QA/gnA4geIAogUQA4geBZgmIAVgJIBLggIgBgCQAAgEADgEQAGgIANgIQATgJAcgLIAHgDQAUgKAWgNIAigTIAAgDIACgKIAAgBQAFgKAPgJQATgLAhgMIAggQIAWgLQAqgZANgFIAdgOIBagsQAegOAagOQAsgUAWgPQAigTApgbIAegSQAkgYAFAKQADABACAEQAvgEBFANIAGABIAVADQA7AAgUAAIAIgFIAhgXIAzhQIACgCQAWgiAJgbQAGgWAJgEQAIgEALgKIAQgSIAdgjIASgXIAHgJQAKgKAPgKIAVgMIAHgDQAlgUAtgFQAOgBAOAAIAVABQAZADARAHQAJAEAHAFIAEAFIABAAQAdAPAhAYQAeATAJAgQAHAcAVAJIAGAEQAUAXAJA0QAOBGgKAnQgIAYAGAdQAEATAIAUQAVA2geAUQgdAagRAmIgFAIQgOAVgEAYIgJAlQgIAigJAfIgGAXQgFAVgFAdIgEAYQgDAMgBAOQgCANAAAMIABAfIACAiQAFA7gIBAQgDAlgLAwQgDATgEARIgFAUQgIAdgNAYQgUAqgkAiQgPAQgRANQgdAbgdAPQg1AhhJAZIgSAGQgpAPhHAPIgHACIgjAJIgbANQgUAEgSAHIg9ASIg/ASQgQAGgNACIgNAEIgHAFQgGAEgIACIgPADIgUABQgzAFg6AUQgcAHgoAUQgUAGgKABIgCgBIgCAAIgHADQgpAYgpAhIhQBCIgHAFQg0AphKAhQgXALgXAJQg2AVhIAUQhHAUg/AOQhOAShGAKQhZANhSADIguABQgjAAgkgCg");
	var mask_graphics_71 = new cjs.Graphics().p("AqxPmQg6gDhBgIQgrgFg1gJQg5gJhZgSIhEgNIg6gMIg3gNQgmgKghgLQgVgGgTgIQgigOgVgQQgNgKgJgMQgNgRgKgXIgJgWQghhcALhsIAAgBQAGguANgcIAEgHQARgeAigZIAPgKQAXgOAlgQIAagMIBxgyIAogSQA0gZApgYIA1ggIADgCQAigWAXgMIADgCQAVgLAYgLIAWgJIAcgLIAbgLQAkgPATgKQAugWA3ggIBfg8IBQg0QA+gnA5geIAogVQA5gcBagoIAVgJIBLgfIgBgCQAAgEACgFQAFgJAOgHQASgJAdgMIAHgDQATgJAXgOIAigUIAAgCIADgLIAAAAQAGgKAOgIQAUgMAggNIAhgOIAWgMQArgYANgFIAdgOIBbgsQAegOAagPQArgUAXgQQAigUApgbIAegTQAmgZACANQADADAAAFQAwgBBEAUIAGACIAVAFQA5AFgQgKIAHgFIAggcQATghAegwIABgCQAXgiAIgbQAGgYAJgDQAHgCALgMIARgSQARgUAMgQIARgXIAIgJQAKgKAQgJIAVgMIAGgEQAmgSAugEIAcgBIAVACQAaAEAQAJQAJAEAGAHQACACABADIABABIAAAAQAcASAfAaQAdAUAJAiQAGAbAVALIAFAEQATAZAKAzQAPBFgIApQgGAYAGAdQAEATAHAVQAUA1gaAXQgZAdgQAnIgEAJQgNAVgDAZIgJAmQgHAigIAfIgFAXIgHAzIgCAYQgDANAAAOQgBAOAAAMIACAfIADAhQAGA7gHBBQgCAmgJAwIgHAkIgFAUQgHAdgMAZQgWAqglAhQgQAQgRAMQgeAagfANQg3AfhLAVIgSAFQgqANhJAMIgHACIgjAHIgdALQgUAEgSAGQgcAFgjAJIhAAQQgQAFgOACIgMADIgIAFQgGAEgJACIgPACIgUABQgzAEg6ASQgeAGgpASQgUAFgKAAIgCgBIgBgBIgHADQgqAWgqAiIhQBDIgHAFQg1AshHAhQgYAMgXAJQg1AVhKAVQhHAUhAAPQhOAShGALQhaANhSADIg2ABQggAAgggBg");
	var mask_graphics_72 = new cjs.Graphics().p("AqtPmQg6gChCgIQgrgFg1gJQg5gJhagSIhFgOIg6gMIg3gNQgngJghgLQgVgHgTgHQgigOgWgQQgNgKgJgMQgNgQgLgXIgJgXQghhdALhsIAAgBQAGguANgcIAEgIQARgdAjgZIAPgKQAXgOAlgRIAagLIBygzIAogSQA0gZApgYIA2ghIADgCQAigWAXgMIAEgCQAUgLAZgKIAWgKIAcgLIAbgLQAjgOAVgLQAugWA3ghIBfg9IBQgzQA+gnA7gfIAogUQA4gcBcgoIAVgJIBLggIAAgCQgBgEACgFQAEgJAOgIQASgJAdgMIAHgDQATgJAXgOIAigVIAAgCIAEgLQAHgKAOgIQAUgMAhgMIAggPIAXgLQAqgXAPgFIAdgOIBbgtQAegPAbgPQAogUAZgRQAigUAqgcIAegTQAngaAAAQQACAEgBAHQAwABBDAcIAGADIAVAGQA4AKgMgSIAGgHIAdgfQATgmAdgtIABgCQAXgiAIgcQAFgZAJgCQAHgCAMgMIARgSIAdgkIARgXIAIgKQAJgKAQgJIAWgMIAGgDQAngSAugDQAPgBANABIAVADQAaAFAQAKQAIAFAGAIIADAGIABABIAAAAQAbAVAdAcQAbAXAJAiQAHAbATANIAFAEQASAbALAxQAPBFgGAqQgEAZAGAcQAEAUAHAVQATA1gWAZQgWAggOApIgDAJQgMAVgDAaIgIAnIgNBCIgEAXIgEA0IgBAYQgCANABAOQgBAOABAMIACAfIAEAiQAHA7gFBCQgBAmgIAwIgGAlIgEAUQgHAegNAYQgVAqgoAhQgQAOgSAMQgfAYggAMQg6AdhNASIgSAEQgqALhLAIIgHACIgkAFIgeAJQgVADgSAFIhAAMIhBAOQgQAEgOACQgGAAgHADIgIAEQgHADgIACIgPACIgUABQg0ADg7APQgfAGgpAQQgVAEgKgBIgCgCIgBgBIgHADQgrAVgrAiIhQBEIgGAGQg2AuhGAhQgXAMgXAKQg0AVhMAWQhIAUhAAPQhOAThGALQhbAOhTADIg7ABIg7gBg");
	var mask_graphics_73 = new cjs.Graphics().p("AqpPnQg7gDhCgIQgrgFg1gIQg5gJhbgSIhGgOIg6gMIg4gNQgmgKghgKQgWgHgTgHQgjgOgWgQQgNgKgJgMQgNgQgLgXIgKgXQghhdALhtIAAgBQAGguANgdIAEgHQASgeAjgZIAPgKQAYgOAlgRIAZgLIBzgyIApgTQA0gZApgZIA2ghIADgCQAigWAXgMIAEgCQAVgLAYgKIAXgJIAcgLIAbgLQAjgPAVgLQAvgXA2ghIBhg9IBQg0QA9gmA9gfIApgVQA3gbBdgpIAWgJIBLgfIgBgCQgCgFACgFQAEgKAOgIQASgJAegMIAHgDQATgJAWgPIAigVIABgDIAFgJIAAgBQAHgJAOgIQAVgNAggMIAhgOIAXgMQAqgVAPgGIAegNQAogTAzgbQAegPAbgQQAngUAbgTQAhgUAqgcIAegTQAqgbgDATQABAFgDAIQAwAFBEAjIAGADIAUAJQA3APgIgcIAGgHIAagkQASgpAcgrIABgCQAXgiAHgdQAFgZAJgCQAHgBAMgNIARgTIAdgkIARgXIAIgJQAKgLAQgJIAWgLIAHgEQAmgRAvgCQAPAAANABIAWAEQAaAGAPAMQAIAGAFAJIADAGIAAABQAaAYAbAfQAZAYAKAiQAHAbASAPIAFAFQASAdAKAwQAQBEgDArQgDAaAGAcQAEAUAHAVQASA1gTAcQgSAjgMAqIgDAJQgKAVgDAcIgHAmIgKBDIgEAYQgBAXAAAeQgBAKABAPQgBAMABAPQAAAOABAMIAEAfIAEAhQAIA9gDBBQAAAogHAvIgFAmIgEAUQgHAegMAZQgWAqgpAfQgRAOgTAMQggAWgiALQg8AahOAOIgTADQgrAJhMAGIgHABIglAEIgfAHQgWACgSAEIhBAJIhCAMQgRADgOACQgFAAgIACIgJADIgPAEIgPACIgUABQg0ACg9AOQggAFgpANQgWAFgJgDIgCgCIgBgCIgIADQgrATgrAjQgeAZgyAtIgHAFQg2AwhEAiQgYANgXAJQgzAWhNAWQhIAVhAAPQhQAThGALQhbAPhTAEQgkACgkAAIgvgBg");
	var mask_graphics_74 = new cjs.Graphics().p("AqlPnQg7gChCgHQgtgGg0gIQg5gJhcgSIhGgOIg7gMIg4gNQgngKghgKQgWgHgTgHQgjgNgWgRQgOgJgJgMQgOgQgLgXIgJgXQgiheALhuIAAAAQAGgvANgdIAEgHQASgeAjgZIAQgKQAYgOAlgRIAagLIBzgzIApgTQA0gZAqgZIA2giIADgCQAigVAYgNIAEgCQAUgKAZgKIAXgJIAcgLIAcgMQAhgOAXgMQAvgXA2giIBhg9IBRg0QA8gmA/gfIApgVQA3gbBegpIAWgJIBMgfIgCgDQgCgEACgGQADgKAOgIQASgKAegLIAGgDQAUgKAXgPIAigWIABgCIAFgKIAAAAQAIgJAOgIQAVgNAggMIAhgOIAYgLQApgVARgGIAegNQAogTA0gbQAdgPAbgSQAlgTAdgUQAigVAqgdIAegSQArgcgFAWQAAAGgEAJQAwAIBDArIAGADIAUALQA2AUgFgmIAGgHIAYgoQARgtAbgpIABgCQAYgiAGgdQAEgbAJAAQAHgBANgNIARgTIAcglIARgXIAIgKQAKgKAQgKIAXgLIAHgDQAngRAvAAQAPAAAOACIAVAEQAaAHAPANQAHAHAFAKIADAIIAAAAIAAABQAYAbAaAhQAXAaAKAjQAIAaAQARIAEAFQASAfAKAvQARBEgBAsQgBAbAGAbIALAqQARA0gQAeQgOAngKAsIgDAJQgIAVgDAdIgGAnIgIBEIgDAYQAAAXABAeIACAZQgBANACAPQABAOACAMIAEAfQADAPACASQAKA+gCBBQAAApgFAvIgEAmIgEAUQgGAfgNAYQgWArgrAeQgRAOgUAKQghAVgkAKQg9AYhRAKIgTADQgrAGhOADIgHABIgmACIggAFQgXABgSADIhCAHIhDAJQgRADgPABIgMABIgKADIgPAEIgPABIgVABQg1ACg9ALQghAEgqAMQgWADgJgEIgCgDIgBgCIgIADQgsASgsAkQgdAYgzAuIgGAGQg4AyhCAiQgXAOgXAJQgyAWhQAXQhIAVhAAQQhQAThHAMQhbAPhUAEQgkACgkAAIgvgBg");
	var mask_graphics_75 = new cjs.Graphics().p("AqhPoQg7gChDgHQgtgFg1gJQg4gIhdgTIhHgOIg7gMIg4gNQgngJgigLQgWgGgTgIQgjgNgXgQQgOgKgJgLQgOgQgLgYIgKgXQgiheALhuIAAgBQAGgvANgcIAFgIQASgeAjgZIAQgKQAYgOAlgRIAagLIB0gzIApgTQA1gaApgZIA3giIADgCQAigWAYgMIAEgCIAugUIAXgJIAcgLIAcgMQAggOAYgMQAvgYA3giIBhg+IBSg0QA7glBAghIAqgUQA2gaBhgqIAVgJIBMgfIgBgDQgDgFABgFQADgLAOgJQARgJAfgMIAGgDQAUgJAXgQIAigWIABgDIAHgJQAIgJAOgIQAWgNAfgMIAigOIAYgLQApgUASgGIAegNQApgSAzgdQAdgPAcgSQAjgTAfgWQAhgVAqgdIAfgTQAsgdgHAZQgBAHgFALQAwALBDAyIAFAEQALAIAJAFQA1AZgBgvIAFgIIAWgsQARgyAZgmIABgBQAYgjAFgeQAEgbAJAAQAHAAANgOIARgTIAdglIARgXIAIgKQAKgLAQgJQAKgFANgGIAHgDQAngQAwAAQAQABANACIAWAFQAaAIAOAPQAHAIAEALIADAIIAAABQAXAfAYAjQAVAcAKAjQAIAbAPASIAEAFQARAiALAtQARBDACAuQAAAbAGAbQAFAVAGAVQAQA0gMAhQgLAqgIAtIgCAKQgHAVgDAeIgFAnIgGBFIgCAYQABAXADAfIADAaQAAANADAPIADAaIAGAfIAGAiQAKA+AABCQABApgEAvQgBAVgDARIgDAVQgFAfgNAYQgWAqgtAeQgSANgVAKQgiATglAJQhAAVhSAHIgUACQgrAFhQgBIgHAAIgmABQgQAAgSADQgYAAgSACQgeABglADIhFAHQgQACgPABIgNABIgKACIgQADIgPABIgVABQg1ABg+AJQgiADgqAKQgYADgIgGIgDgDIAAgCIgIACQgsARgtAkQgcAXg0AxIgHAFQg4A1hAAjQgYANgXALQgxAVhRAYQhIAWhBAQQhRAThGAMQhcAQhUAEQgrADgqAAIgjgBg");
	var mask_graphics_76 = new cjs.Graphics().p("AqjPpQg7gBhEgIQgtgFg1gJQg4gIhfgSIhGgOIg8gMIg5gNQgngKgigLIgpgNQgjgNgYgRQgNgJgKgMQgOgQgLgXQgGgLgEgMQgjheALhvIAAgBQAGgwAOgcIAEgIQASgeAkgZIAQgKQAYgOAmgRIAagLIB0gzIAqgUQA0gaAqgZIA3giIADgCQAigWAZgNIADgCIAvgTIAXgJIAcgLIAcgMQAfgNAagOQAvgYA3giIBhg/IBSg1QA8gkBBghIAqgUQA2gaBigqIAWgJIBMgfIgCgDQgDgFABgGQACgLAPgJQAQgKAfgLIAHgDQATgKAYgQIAhgXIACgCIAHgJIAAgBQAJgIAOgIQAWgNAfgNIAigNIAYgLQAqgSASgHIAfgMQApgTAzgdQAdgQAcgSQAhgTAhgYQAigVAqgeQAQgLAPgHQAtgfgJAdQgCAIgHANQAxANBCA5IAGAFIATAPQA1AeACg4IAEgKIAUgvQAQg2AXgkIACgBQAYgjAFgeQADgcAJABQAHAAANgOIARgUIAdglIARgYIAIgJQAKgLARgJIAXgLIAHgDQAogQAwACQAQABAOADIAVAFQAaAKAOAQQAHAJADAMIACAIIABABIAAABIArBHQAUAeALAjQAHAbAOATIAEAHQAQAjALAsQASBDAEAvQACAcAGAbIALAqQAOAzgIAkIgNBcIgCAKQgFAVgCAfIgFAoIgEBFIAAAYQABAYAEAgIAEAZQACANADAPIAFAbIAGAfIAHAiQALA/ACBCQACAqgDAvIgDAnIgDAUQgFAggNAYQgWAqgvAdQgSAMgXAKQgjARgmAJQhCAShTADIgVABQgsADhRgEIgIAAIgmgCIgjACQgYgBgTABQgeAAgmACIhGAEQgQACgQAAIgNABIgKACIgQABIgQABIgVAAQg1ABg/AHQgjADgrAHQgZADgIgHIgCgEIAAgDIgIACQgtAPguAmQgbAWg1AzIgGAFQg5A2g/AkQgXAOgXALQgwAWhTAZQhJAVhBAQQhRAUhHANQhcAPhVAGQgpACgoAAIgnAAg");
	var mask_graphics_77 = new cjs.Graphics().p("AqtPpQg7gBhEgHQgugFg0gJQg4gIhggTIhHgOIg7gMIg6gNQgngJgigLQgXgGgTgIQgkgNgXgPQgOgKgLgLQgNgQgMgYQgFgKgFgNQgkhfAMhvIAAgBQAGgwAOgdIAEgHQASgeAlgZIAQgKQAYgPAmgQIAagMIB1gzIAqgUQA1gaAqgaIA3giIADgCQAigWAZgMIAEgCIAugUIAYgJIAcgLIAcgMQAfgNAbgOQAvgZA3giIBhg/IBTg1QA7gkBDghIAqgVQA2gZBjgrIAWgJIBNgfIgCgCQgEgGABgGQABgMAPgJQAQgJAhgMIAFgDQATgKAYgRIAhgXIACgCIAIgJQAKgJAOgIQAWgNAggMIAigOIAYgKQApgSAUgHIAfgMQApgSAzgeQAdgQAcgTQAggTAjgZQAhgWArgeIAegTQAwgfgMAgQgDAJgIAOQAxARBBBAIAGAGQAKAJAJAHQA0AjAFhBIAEgKIARgzQAQg7AWghIABgBQAZgkAEgeQADgdAJABQAHABAOgOIARgUQARgUAMgSIAQgXIAIgKQAKgLARgJIAYgLIAHgDQApgOAwACQAQABAOADIAWAHQAaALANARQAGAKADAOIACAJIAAAAIAAABIApBNQASAfALAkQAIAbAMAVIAEAGQAPAmAMAqQASBDAHAwQADAdAGAbIALAqQANAygEAnIgIBhIgBAKQgEAVgCAgIgEApQgCAmAAAgIABAYQACAYAGAfIAFAbIAHAcIAGAcIAGAfIAIAiQAMBAAEBCQADArgCAvIgCAmIgCAVQgFAggNAYQgXAqgwAcQgTAMgYAJQgkAQgoAIQhEAPhVAAIgVAAQgsABhTgIIgIAAIgngDIgkgBQgZgCgTABQgegCgoABIhGABIghABIgNABIgLABIgQABIgPACIgVgBQg2AAhAAFQglABgrAGQgZACgIgJIgCgEIAAgDIgIADQguANguAlQgbAWg1A1IgGAFQg6A5g9AkQgYAPgXAKQgvAXhUAaQhJAVhCAQQhRAVhHANQhdAQhWAFQguAEgtAAIgegBg");
	var mask_graphics_78 = new cjs.Graphics().p("Aq2PrQg8gBhEgIQgvgFg0gIQg4gIhggTIhIgOIg8gMIg6gNQgngKgjgKIgqgOQgkgNgXgPQgPgKgKgLQgOgQgMgXIgKgYQgkhfAMhwIAAgBQAFgwAOgdIAFgIQASgeAlgZIAQgKQAZgOAmgRIAagMIB1gzIArgUQA1gbAqgZIA3gjIADgCQAjgWAZgMIAEgCQATgJAcgKIAXgJIAdgLIAcgMQAegNAcgPQAvgZA3gjIBihAIBTg1QA6gjBFgiIArgUQA1gZBlgrIAWgJIBNggIgDgCQgEgGABgGQABgMAOgKQARgJAhgMIAGgDQASgKAYgRIAhgYIADgDIAIgIQALgJANgHQAXgNAfgNIAjgNIAZgKIA9gYIAfgMQAqgSAzgfQAcgQAdgUQAegTAlgaIBMg1QAQgLAPgIQAwgggOAjQgEAKgJAQQAxATBBBIIAGAGQAKALAJAHQAyAoAJhKIAEgLQAHgeAIgZQAPg+AVgfIABgBQAZgkADgfQACgeAKACQAGACAPgPIARgUIAcgmIARgYIAIgKQAKgLARgJIAYgKIAIgDQApgOAxADQAQACAOADIAWAIQAaALAMAUQAGAKADAOIACAKIAAABIAAABIAlBTQAQAhALAkQAJAaAKAXIAEAHQAPAoALApQAUBCAJAxIALA4IAKArQANAygCApQABA0gDAyIgBAKIgEA2IgCApQgCAoACAfIABAZQADAYAIAgIAHAbIAHAdIAIAbIAHAgIAIAiQAOBAAFBCQAEAsAAAvIgBAnIgDAVQgEAhgNAYQgXAqgyAaQgUAMgYAIQglAOgqAHQhGANhXgDIgVgBQgtgChVgLIgHAAIgogFIgmgDIgsgDQgfgCgogBIhIgBIghAAIgNAAIgLABIgRAAIgPABIgWgBQg2AAhBADQgmAAgrAEQgaABgHgKIgCgEIgBgEIgIACQguAMgvAmQgaAVg2A3IgGAGQg7A6g7AlQgYAPgXALQguAXhWAaQhJAWhCAQQhSAWhIAMQhdARhWAGQgyAEgxAAIgWAAg");
	var mask_graphics_79 = new cjs.Graphics().p("ArAPrQg7AAhFgHQgvgFg1gJQg4gIhhgTIhIgOIg8gMIg6gNQgogJgjgLQgWgGgUgIQgkgMgZgQQgOgJgLgLQgOgQgMgYIgKgXQglhgAMhxIAAgBQAGgwAOgdIAFgIQASgeAlgZIAQgKQAZgOAmgRIAbgMIB1gzIArgVQA2gaAqgaIA4gjIADgCQAigWAagNIADgCIAwgTIAYgIIAcgLIAdgNQAcgMAegQQAvgaA4gjIBihAIBUg1QA5gjBGgiIAsgUQA0gZBngrIAWgJIBNggIgDgDQgFgFABgHQAAgMAPgKQAQgKAigMIAGgDQASgJAYgSIAhgZIADgCIAJgIQALgJAOgHQAXgOAfgMIAjgNIAZgKIA/gXIAegMQArgSAzgfQAcgRAdgUIBDgvIBMg1QARgMAOgHQAygigRAmQgEALgLASQAyAWBABPIAGAHQAKAMAIAIQAyAtANhTIACgMIANg7QAPhDATgcIABgBQAagkACgfQACgfAJADQAHACAOgPIASgVIAcgmIARgYIAIgKQAKgLASgJQAKgGAOgFIAHgCQAqgOAyAFQAQACAOAEQAMADAKAFQAaAMAMAVQAGAMACAPIABALIAAABIAAAAIAjBZQANAjAMAkQAIAbAKAYIADAHQAPAqALAoQAUBCAMAyIANA4IAKArQALAyACAsQAEA3AAAzIgBALIgCA3IgCAqQgBAoADAgIADAYQAEAYAJAhIAIAcIAJAdIAJAcIAIAfIAJAjQAPBAAHBDQAEAsABAvQABAWgBARIgCAVQgEAhgNAYQgXAqg0AaQgVALgZAIQgmANgrAFQhIALhZgHIgVgCQgugEhXgOIgHAAIgogHIgngFIgtgFQgggEgpgCIhJgDIghgBIgNAAIgMAAIgRgBIgQABIgVgBQg3gBhCABQgmgBgsACQgbABgHgMIgCgFIAAgEIgJACQguALgwAnQgZAUg3A5IgGAFQg8A9g5AlQgYAQgXALQgtAXhYAbQhJAWhCARQhTAWhIANQhdARhXAGQg0AEgyAAIgUAAg");
	var mask_graphics_80 = new cjs.Graphics().p("ArJPsQhmgBh/gTQhLgLiYgfQhNgPgqgKQhCgPg0gSQg7gVgbgcQgVgWgQgpQglhgAMhyQAFgxAPgdQATgjApgcQAcgSA0gXICRhAQBRglA6gkIA7gmQAjgWAagMQAUgJAfgMIA1gTQBRggBthHQB5hRA+glQBKgsBigtQA6gbB5gyIBNggIgDgDQgFgGAAgHQAAgMAPgKQAPgKAjgMQAVgKAbgVIAugkQAqgdBJgZIB4grQBBgdBWg8ICPhmIAfgTQBDgtg0BTQA0AaBDBdQBEBdARh+QASh+AagjQAbgkABggQABggAKAEQAJAEAegmQAdgmAQgZQAPgYAtgQQAtgQA3AHQAeAEAXALQAaAOALAWQAGAMABARIABAMIAAABQAnByAkByQA1CiAWBdQAiCPABB3QABAhgCBBQAAA6AHAnQAFAZALAiIAUA5QA1CbAICjQACAlgDAYQgEAhgNAYQggA7hcAaQhvAgiggWQgugGhYgRQhbgRgsgGQhYgNiYgFQhfgEiEgCQghAAgEgSIAAgEIgIABQgwAKgwAnQgYAUg4A6QhaBehPAoQgsAXhZAcQinAziBAYQibAdiHAAIgNAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:15.4,y:48.8}).wait(1).to({graphics:mask_graphics_1,x:15.4,y:48.8}).wait(1).to({graphics:mask_graphics_2,x:13.9,y:48.9}).wait(1).to({graphics:mask_graphics_3,x:12.3,y:48.9}).wait(1).to({graphics:mask_graphics_4,x:10.8,y:49}).wait(1).to({graphics:mask_graphics_5,x:9.3,y:49}).wait(1).to({graphics:mask_graphics_6,x:8.5,y:49.1}).wait(1).to({graphics:mask_graphics_7,x:8.3,y:49.1}).wait(1).to({graphics:mask_graphics_8,x:8.1,y:49.2}).wait(1).to({graphics:mask_graphics_9,x:7.9,y:49.2}).wait(1).to({graphics:mask_graphics_10,x:7.7,y:49.2}).wait(1).to({graphics:mask_graphics_11,x:7.5,y:49.2}).wait(1).to({graphics:mask_graphics_12,x:7.3,y:49.2}).wait(1).to({graphics:mask_graphics_13,x:7.1,y:49.2}).wait(1).to({graphics:mask_graphics_14,x:6.9,y:49.2}).wait(1).to({graphics:mask_graphics_15,x:6.7,y:49.1}).wait(1).to({graphics:mask_graphics_16,x:6.7,y:48.9}).wait(1).to({graphics:mask_graphics_17,x:6.7,y:48.6}).wait(1).to({graphics:mask_graphics_18,x:6.7,y:48.2}).wait(1).to({graphics:mask_graphics_19,x:6.7,y:47.8}).wait(1).to({graphics:mask_graphics_20,x:6.7,y:47.2}).wait(1).to({graphics:mask_graphics_21,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_22,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_23,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_24,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_25,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_26,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_27,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_28,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_29,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_30,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_31,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_32,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_33,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_34,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_35,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_36,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_37,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_38,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_39,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_40,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_41,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_42,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_43,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_44,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_45,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_46,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_47,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_48,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_49,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_50,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_51,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_52,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_53,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_54,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_55,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_56,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_57,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_58,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_59,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_60,x:1,y:48.8}).wait(1).to({graphics:mask_graphics_61,x:6.7,y:47.2}).wait(1).to({graphics:mask_graphics_62,x:6.7,y:47.8}).wait(1).to({graphics:mask_graphics_63,x:6.7,y:48.2}).wait(1).to({graphics:mask_graphics_64,x:6.7,y:48.6}).wait(1).to({graphics:mask_graphics_65,x:6.7,y:48.9}).wait(1).to({graphics:mask_graphics_66,x:6.7,y:49.1}).wait(1).to({graphics:mask_graphics_67,x:6.9,y:49.2}).wait(1).to({graphics:mask_graphics_68,x:7.1,y:49.2}).wait(1).to({graphics:mask_graphics_69,x:7.3,y:49.2}).wait(1).to({graphics:mask_graphics_70,x:7.5,y:49.2}).wait(1).to({graphics:mask_graphics_71,x:7.7,y:49.2}).wait(1).to({graphics:mask_graphics_72,x:7.9,y:49.2}).wait(1).to({graphics:mask_graphics_73,x:8.1,y:49.2}).wait(1).to({graphics:mask_graphics_74,x:8.3,y:49.1}).wait(1).to({graphics:mask_graphics_75,x:8.5,y:49.1}).wait(1).to({graphics:mask_graphics_76,x:9.3,y:49}).wait(1).to({graphics:mask_graphics_77,x:10.8,y:49}).wait(1).to({graphics:mask_graphics_78,x:12.3,y:48.9}).wait(1).to({graphics:mask_graphics_79,x:13.9,y:48.9}).wait(1).to({graphics:mask_graphics_80,x:15.4,y:48.8}).wait(1));

	// hand.png
	this.instance_2 = new lib.Symbol10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(130.4,22.8,1,1,0,0,0,28.4,75.8);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:24.9,regY:15,x:126.9,y:-38},0).to({regY:14.9,rotation:38.4,x:127},19,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,rotation:46.9,x:127.1},9,cjs.Ease.get(-1)).to({regY:14.8,scaleX:1,scaleY:1,rotation:56.1,x:127},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:51.7,x:127.1},10,cjs.Ease.get(-1)).to({regY:14.9,scaleX:1,scaleY:1,rotation:38.4,x:127},10,cjs.Ease.get(1)).wait(1).to({regY:15,rotation:0,x:126.9},19,cjs.Ease.get(-1)).wait(1));

	// body.png
	this.instance_3 = new lib.Symbol8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(59.8,63,1,1,0,0,0,86.4,248.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-185.1,185.5,496.1);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-274.9,0,275,0).s().p("Egq9AfaMAAAg+zMBV7AAAMAAAA+zg");
	this.shape.setTransform(-54,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(200));

	// Слой 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(25,22,1,1,0,0,0,350,197);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:17.7},47,cjs.Ease.get(-1)).to({y:16},52,cjs.Ease.get(1)).to({y:19.1},52,cjs.Ease.get(-1)).to({y:22},48,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-329,-201.2,704,420.2);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(64.7,24.5,1,1,0,0,0,64.7,24.5);
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-2,-2,133,53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-2,-2,137,57), null);


(lib.Символ85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ84();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-6.1,y:181.9},29).to({x:130,y:370},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-18.5,47,37);


(lib.Символ82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ81();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:29.5,y:188.5},41).to({x:-51,y:370},48).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-28,67,56);


(lib.Символ79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ78();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-203.7,y:183.6},74).to({x:-120.4,y:277.5},53).to({x:-238.9,y:437},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-35.5,48,71);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ75();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:154,y:221.3},59).to({x:0,y:404},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-22.5,33,45);


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ72();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-59.6,y:201.9},49).to({x:21,y:408},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-21,58,42);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bablo_16.png
	this.instance = new lib.Символ73();
	this.instance.parent = this;
	this.instance.setTransform(-357,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bablo_13.png
	this.instance_1 = new lib.Символ76();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-158.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bablo_08.png
	this.instance_2 = new lib.Символ79();
	this.instance_2.parent = this;
	this.instance_2.setTransform(33,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bablo_05.png
	this.instance_3 = new lib.Символ82();
	this.instance_3.parent = this;
	this.instance_3.setTransform(154.5,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bablo_03.png
	this.instance_4 = new lib.Символ85();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-272.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ70, new cjs.Rectangle(-386,-37,574,82), null);


(lib.Символ43copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36copy();
	this.instance.parent = this;
	this.instance.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43copy2, new cjs.Rectangle(-136.3,-33.1,135,68), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(-70.5,-3.2,1,1,0,0,0,-70.5,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.16,scaleY:1.16},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1).to({scaleX:1.16,scaleY:1.16},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.3,-33.1,135,68);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(2.9,0.7,1,1,0,0,0,64.7,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1 copy
	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.9,0.7,1,1,0,0,0,64.7,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-63.8,-25.8,136,56), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.girl2 = new lib.Символ11();
	this.girl2.parent = this;
	this.girl2.setTransform(0,0,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.girl2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-120.2,-158.4,266.9,424.8), null);


(lib.Символ44copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43copy2();
	this.instance.parent = this;
	this.instance.setTransform(-68.2,-2.3,1,1,0,0,0,-68.2,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-2.2,scaleX:1.06,scaleY:1.06,y:-2.2},0).wait(1).to({regY:-2.3,scaleX:1,scaleY:1,y:-2.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.3,-33.1,135,68);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(-70.5,-1.1,1,1,0,0,0,-70.5,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.3,-33.1,135,68);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(0,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.92,scaleY:0.92},9,cjs.Ease.get(1)).to({scaleX:1.06,scaleY:1.06},5,cjs.Ease.get(1)).to({regY:-0.1,scaleX:0.98,scaleY:0.98,y:-1.7},3,cjs.Ease.get(1)).to({regY:0,scaleX:1.06,scaleY:1.06,y:-1.6},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.8,-27.4,136,56);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 25
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(-0.6,69.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 24
	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.6,20.2,1.301,1.301);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 23
	this.instance_2 = new lib.Символ23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-38.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-127.4,-52.4,258,168.3), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.girl1 = new lib.Символ12();
	this.girl1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.girl1).to({y:9.8},19,cjs.Ease.get(-1)).to({y:20},20,cjs.Ease.get(1)).to({y:10},20,cjs.Ease.get(-1)).to({y:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.2,-158.4,266.9,424.8);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		    {
			    _this.girl.girl1.girl2.gotoAndPlay(2);
		
		
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
			    _this.girl.girl1.girl2.gotoAndPlay(61);
		
		    }
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 8
	this.btn = new lib.Символ44copy2();
	this.btn.parent = this;
	this.btn.setTransform(183.7,271.7,0.879,0.879);
	new cjs.ButtonHelper(this.btn, 0, 1, 2);

	this.btn_1 = new lib.Символ44();
	this.btn_1.parent = this;
	this.btn_1.setTransform(302,271.7,0.879,0.879);
	new cjs.ButtonHelper(this.btn_1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_1},{t:this.btn}]}).wait(1));

	// Слой 5
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(181.6,112.5,1.282,1.282,0,0,0,0.2,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(78.6,22.9,0.661,0.661,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4
	this.girl = new lib.Символ13();
	this.girl.parent = this;
	this.girl.setTransform(453.1,170.8);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 6
	this.instance_2 = new lib.Символ16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(66,279);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ70();
	this.instance_3.parent = this;
	this.instance_3.setTransform(649.5,-45.5);

	this.instance_4 = new lib.Символ70();
	this.instance_4.parent = this;
	this.instance_4.setTransform(388.5,-55.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Слой 1
	this.instance_5 = new lib.Символ2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(324,162.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(269,60,888.5,529.6);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bablo_03.png?1495722334272", id:"bablo_03"},
		{src:"images/bablo_05.png?1495722334272", id:"bablo_05"},
		{src:"images/bablo_08.png?1495722334272", id:"bablo_08"},
		{src:"images/bablo_13.png?1495722334272", id:"bablo_13"},
		{src:"images/bablo_16.png?1495722334272", id:"bablo_16"},
		{src:"images/body1.png?1495722334272", id:"body1"},
		{src:"images/dollars.png?1495722334272", id:"dollars"},
		{src:"images/hand11.png?1495722334272", id:"hand11"},
		{src:"images/hand2.png?1495722334272", id:"hand2"},
		{src:"images/jaht.jpg?1495722334272", id:"jaht"},
		{src:"images/kist2111.png?1495722334272", id:"kist2111"},
		{src:"images/logo.png?1495722334272", id:"logo"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;