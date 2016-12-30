(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,744,466);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,384);


(lib.Cic = function() {
	this.initialize(img.Cic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,89);


(lib.Head = function() {
	this.initialize(img.Head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,92);


(lib.IE1 = function() {
	this.initialize(img.IE1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,61);


(lib.IE2 = function() {
	this.initialize(img.IE2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,61);


(lib.IE3 = function() {
	this.initialize(img.IE3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,63);


(lib.IE4 = function() {
	this.initialize(img.IE4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,66);


(lib.IE5 = function() {
	this.initialize(img.IE5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,738,72);


(lib.lh = function() {
	this.initialize(img.lh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,239);


(lib.Liap = function() {
	this.initialize(img.Liap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,114);


(lib.Rh = function() {
	this.initialize(img.Rh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,72);


(lib.Sneg = function() {
	this.initialize(img.Sneg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);// helper functions:

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


(lib.Symbol86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAtDnIguhwIgvBwIh2AAIBojrIhpjiIB6AAIAuBtIAuhtIB2AAIhoDpIBrDkg");
	this.shape.setTransform(19.9,55.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol86, new cjs.Rectangle(0,0,39.9,96.4), null);


(lib.Symbol85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.8)").s().p("AvYDNIC0mZIb9AAIi0GZg");
	this.shape.setTransform(98.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol85, new cjs.Rectangle(0,0,197.1,41), null);


(lib.Symbol83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.8)").s().p("AiJDjQhdg5gahrQgahpA4heQA6heBqgaQBqgaBdA5QBeA5AbBrQAaBpg6BeQg4BehrAZQgiAIgfAAQhHAAhAgmg");
	this.shape.setTransform(26.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol83, new cjs.Rectangle(0,0,53.1,53.1), null);


(lib.Symbol80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.8)").s().p("AiJDjQhdg5gahrQgahpA4heQA6heBqgaQBqgaBdA5QBeA5AbBrQAaBpg6BeQg4BehrAZQgiAIgfAAQhHAAhAgmg");
	this.shape.setTransform(26.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol80, new cjs.Rectangle(0,0,53.1,53.1), null);


(lib.Symbol72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2.7,1,1).p("AIIAAQAADXiZCYQiYCZjXAAQjWAAiZiZQiYiYAAjXQAAjWCYiZQCZiYDWAAQDXAACYCYQCZCZAADWg");
	this.shape.setTransform(52,52);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,0,0.047)").s().p("AluFvQiYiYgBjXQABjWCYiYQCYiYDWgBQDXABCYCYQCYCYAADWQAADXiYCYQiYCYjXAAQjWAAiYiYg");
	this.shape_1.setTransform(52,52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol72, new cjs.Rectangle(-1.3,-1.3,106.6,106.6), null);


(lib.Symbol69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A80dOMAAAg6bMA5pAAAMAAAA6bg");
	this.shape.setTransform(184.5,187);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol69, new cjs.Rectangle(0,0,369,374), null);


(lib.Symbol68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABmDnIAAnNIBsAAIAAHNgAjRDnIAAnNIBzAAIAACpIAzAAQAkAAAQAEQAVADANAKQAPAMAGAXQAHAYAAAnIAABkQAAAUgHAPQgIAOgMALQgYARgkAAgAheCSIAjAAQAPAAABgfIAAg9QgBgfgPAAIgjAAg");
	this.shape.setTransform(21,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol68, new cjs.Rectangle(0,0,42,46.2), null);


(lib.Symbol67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiODnIAAnNIDEAAQAlAAAYARQANAKAHAOQAIAQAAAUIAABsQgBAngGAXQgIAYgOAMQgNAJgUAFQgTADgjAAIg1AAIAAChgAgagPIAlAAQAQAAAAgeIAAhGQAAgegQAAIglAAg");
	this.shape.setTransform(14.3,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol67, new cjs.Rectangle(0,0,28.5,46.2), null);


(lib.Symbol66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAuDnIgJhNIhIAAIgKBNIhuAAIBFnNICtAAIBFHNgAgZBGIAzAAIgajPIAAAAg");
	this.shape.setTransform(15.6,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol66, new cjs.Rectangle(0,0,31.3,46.2), null);


(lib.Symbol65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjmDnIAAnNIBzAAIAAFxIA7AAIAAlxIBxAAIAAFxIA6AAIAAlxIB0AAIAAHNg");
	this.shape.setTransform(23.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol65, new cjs.Rectangle(0,0,46.2,46.2), null);


(lib.Symbol64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiMDnIAAnNIC+AAQAlAAAYARQAOAKAGAOQAIAQAAAUIAABFQAAAZgIAQQgIAVgVAKIAAABQAWAGAJAXQAHASAAAhIAABVQAAAUgHAPQgHAOgNALQgYARglAAgAgcCSIAmAAQAPAAAAgfIAAg4QgBgZgOAAIgmAAgAgcgyIAmAAQAOAAABgYIAAgpQAAgegPAAIgmAAg");
	this.shape.setTransform(14.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol64, new cjs.Rectangle(0,0,28.1,46.2), null);


(lib.Symbol63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAmDnIABjZIgBAAIhMDZIhsAAIAAnNIBtAAIgBDTIABAAIBMjTIBsAAIAAHNg");
	this.shape.setTransform(14.7,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol63, new cjs.Rectangle(0,0,29.4,46.2), null);


(lib.Symbol62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABVEOIAAhOIipAAIAABOIhsAAIAAiiIAuAAIAAl5IEkAAIAAF5IAvAAIAACigAgeBsIA9AAIAAkcIg9AAg");
	this.shape.setTransform(19.3,27);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol62, new cjs.Rectangle(0,0,38.5,53.9), null);


(lib.Symbol61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAuDnIgJhNIhIAAIgKBNIhuAAIBFnNICtAAIBFHNgAgZBGIAzAAIgajPIAAAAg");
	this.shape.setTransform(15.6,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol61, new cjs.Rectangle(0,0,31.3,46.2), null);


(lib.Symbol60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAfDnIAAlwIg9AAIAAFwIh0AAIAAnNIElAAIAAHNg");
	this.shape.setTransform(14.7,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol60, new cjs.Rectangle(0,0,29.3,46.2), null);


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhDDoQgbgIgRgNQgQgNgHgTQgIgTAAgZIAAkNQAAgaAIgSQAHgUAQgNQARgNAbgGQAbgHAoAAQAoAAAcAHQAbAGARANQAQANAIAUQAGASABAaIAAENQgBAZgGATQgIATgQANQgRANgbAIQgcAGgoAAQgoAAgbgGgAgTiQQgHAGAAAUIAADtQAAAUAHAGQAFAFAOAAQAPAAAFgFQAHgGAAgUIAAjtQAAgUgHgGQgFgFgPAAQgOAAgFAFg");
	this.shape.setTransform(14.3,23.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol59, new cjs.Rectangle(0,0,28.5,47.6), null);


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAfDnIAAlwIg9AAIAAFwIh0AAIAAnNIElAAIAAHNg");
	this.shape.setTransform(14.7,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol58, new cjs.Rectangle(0,0,29.3,46.2), null);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhbDqIAAhcIBnAAIAABcgAhRBoIAAgzQAAgjAMgSQALgSAVgHQARgFAcAAQATAAAAgfIAAg2QAAgTgGgHQgFgEgNAAQgNAAgGAEQgHAHAAATIAAAYIhoAAIAAgoQAAgYAIgTQAHgUAQgNQAPgNAYgGQAZgIAgAAQAhAAAZAIQAYAGAPANQAQANAHAUQAIATAAAYIAABGQAAAhgHAXQgHAWgNAOQgMAOgUAHQgSAFgZAAIAAAAQgNABgFAEQgFAHAAATIAAAQg");
	this.shape.setTransform(12.8,23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol54, new cjs.Rectangle(0,0,25.6,46.9), null);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAmDnIABjZIgBAAIhMDZIhsAAIAAnNIBtAAIgBDTIABAAIBMjTIBsAAIAAHNg");
	this.shape.setTransform(14.7,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol53, new cjs.Rectangle(0,0,29.4,46.2), null);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAmDnIhQjuIBLjfIB6AAIhXDXIBdD2gAigDnIAAnNIBxAAIAAHNg");
	this.shape.setTransform(16.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol52, new cjs.Rectangle(0,0,32.2,46.2), null);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ACODnIhRjuIBMjfIB6AAIhWDXIBcD2gAg4DnIAAnNIBwAAIAAHNgAkIDnIBcj2IhWjXIB5AAIBMDfIhQDug");
	this.shape.setTransform(26.5,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol51, new cjs.Rectangle(0,0,53.1,46.2), null);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ah+DnIAAnNID9AAIAABVIiKAAIAABZIBzAAIAABTIhzAAIAAB3ICKAAIAABVg");
	this.shape.setTransform(12.7,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol50, new cjs.Rectangle(0,0,25.4,46.2), null);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAfDnIAAjFIg9AAIAADFIh0AAIAAnNIB0AAIAACuIA9AAIAAiuIB0AAIAAHNg");
	this.shape.setTransform(14.7,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol49, new cjs.Rectangle(0,0,29.3,46.2), null);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhDDoQgbgIgRgNQgQgNgHgTQgIgTAAgZIAAkNQAAgaAIgSQAHgUAQgNQARgNAbgGQAbgHAoAAQAoAAAcAHQAbAGARANQAQANAIAUQAGASABAaIAABLIh0AAIAAg7QAAgUgHgGQgFgFgPAAQgOAAgFAFQgHAGAAAUIAADtQAAAUAHAGQAFAFAOAAQAPAAAFgFQAHgGAAgUIAAg+IB0AAIAABOQgBAZgGATQgIATgQANQgRANgbAIQgcAGgoAAQgoAAgbgGg");
	this.shape.setTransform(14.3,23.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol48, new cjs.Rectangle(0,0,28.5,47.6), null);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiMDnIAAnNIC+AAQAlAAAYARQAOAKAGAOQAIAQAAAUIAABFQAAAZgIAQQgIAVgVAKIAAABQAWAGAJAXQAHASAAAhIAABVQAAAUgHAPQgHAOgNALQgYARglAAgAgcCSIAmAAQAPAAAAgfIAAg4QgBgZgOAAIgmAAgAgcgyIAmAAQAOAAABgYIAAgpQAAgegPAAIgmAAg");
	this.shape.setTransform(14.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol47, new cjs.Rectangle(0,0,28.1,46.2), null);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhMAXIgBAAIACDMIhrAAIAAnNIB2AAIBADnIABAAIBAjnIB2AAIAAHNIhrAAIACjMIgBAAIhNDUg");
	this.shape.setTransform(18.3,23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol46, new cjs.Rectangle(0,0,36.7,47), null);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ah+DnIAAnNID9AAIAABVIiKAAIAABZIBzAAIAABTIhzAAIAAB3ICKAAIAABVg");
	this.shape.setTransform(12.7,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(0,0,25.4,46.2), null);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAuDnIgJhNIhIAAIgKBNIhuAAIBFnNICtAAIBFHNgAgZBGIAzAAIgajPIAAAAg");
	this.shape.setTransform(15.6,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(0,0,31.3,46.2), null);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiODnIAAnNIDEAAQAlAAAYARQANAKAHAOQAIAQAAAUIAABsQgBAngGAXQgIAYgOAMQgNAJgUAFQgTADgjAAIg1AAIAAChgAgagPIAlAAQAQAAAAgeIAAhGQAAgegQAAIglAAg");
	this.shape.setTransform(14.3,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol43, new cjs.Rectangle(0,0,28.5,46.2), null);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhzDnIAAnNIDnAAIAABVIh0AAIAAF4g");
	this.shape.setTransform(11.6,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(0,0,23.1,46.2), null);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAmDnIABjZIgBAAIhMDZIhsAAIAAnNIBtAAIgBDTIABAAIBMjTIBsAAIAAHNg");
	this.shape.setTransform(14.7,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol41, new cjs.Rectangle(0,0,29.4,46.2), null);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#E45838","rgba(192,95,68,0)"],[0,1],0,0,0,0,0,14.6).s().p("AhmBnQgqgrAAg8QAAg7AqgrQArgqA7AAQA8AAArAqQAqArAAA7QAAA8gqArQgrAqg8AAQg7AAgrgqg");
	this.shape.setTransform(14.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(0,0,29,29), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#002EFD","rgba(0,15,247,0)"],[0,1],0,0,0,0,0,14.6).s().p("AhmBnQgqgrAAg8QAAg7AqgrQArgqA7AAQA8AAArAqQAqArAAA7QAAA8gqArQgrAqg8AAQg7AAgrgqg");
	this.shape.setTransform(14.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(0,0,29,29), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#2EFD00","rgba(0,247,28,0)"],[0,1],0,0,0,0,0,14.6).s().p("AhmBnQgqgrAAg8QAAg7AqgrQArgqA7AAQA8AAArAqQAqArAAA7QAAA8gqArQgrAqg8AAQg7AAgrgqg");
	this.shape.setTransform(14.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,29,29), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FD0000","rgba(247,0,0,0)"],[0,1],0,0,0,0,0,14.6).s().p("AhmBnQgqgrAAg8QAAg7AqgrQArgqA7AAQA8AAArAqQAqArAAA7QAAA8gqArQgrAqg8AAQg7AAgrgqg");
	this.shape.setTransform(14.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,29,29), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.298)").s().p("Eg4ZAbqMAAAg3TMBwzAAAMAAAA3Tg");
	this.shape.setTransform(361,177);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,722,354), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Sneg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,60,60), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Liap();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,252,114), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Sneg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,60,60), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,744,466), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.IE1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,50,61), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.IE2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,50,61), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.IE3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,52,63), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.IE5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,738,72), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.body();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,146,384), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Rh();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,121,72), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Cic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,124,89), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Head();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,97,92), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lh();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,68,239), null);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol39();
	this.instance.parent = this;
	this.instance.setTransform(158,12.5,1,1,0,0,0,14.5,14.5);

	this.instance_1 = new lib.Symbol39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-63,-12.5,1,1,0,0,0,14.5,14.5);

	this.instance_2 = new lib.Symbol39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-158,5.5,1,1,0,0,0,14.5,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.5,-27,345,54);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol39();
	this.instance.parent = this;
	this.instance.setTransform(158,12.5,1,1,0,0,0,14.5,14.5);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Symbol39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-63,-12.5,1,1,0,0,0,14.5,14.5);
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.Symbol39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-158,5.5,1,1,0,0,0,14.5,14.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.5,-27,345,54);


(lib.Symbol84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiB1QgPgDgJgIQgHgHgEgJQgDgJAAgNIAAgUIA7AAIAAAMQAAAKADADQADADAHAAQAIAAADgDQADgDAAgKIAAggQAAgMgIAAIgTAAQgVAAgMgDQgMgEgHgJQgHgIAAgTIAAhdICQAAIAAAsIhVAAIAAAjQAAAMAIAAIAUAAQAPAAALADQALADAHAHQAHAGAEAKQADAMAAAQIAAAoQAAANgDAJQgDAJgIAHQgJAIgOADQgPAEgVAAQgUAAgOgEg");
	this.shape.setTransform(158.4,14.4);

	this.instance = new lib.Symbol86();
	this.instance.parent = this;
	this.instance.setTransform(139,12.2,0.449,0.314,0,0,0,19.9,48);

	this.instance_1 = new lib.Sneg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(98,-1,0.5,0.5);

	this.instance_2 = new lib.Symbol85();
	this.instance_2.parent = this;
	this.instance_2.setTransform(98.5,14.4,1,1,0,0,0,98.5,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol84, new cjs.Rectangle(0,-14.5,197.1,49.7), null);


(lib.Symbol81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol83();
	this.instance.parent = this;
	this.instance.setTransform(26.6,26.5,1,1,0,0,0,26.6,26.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.1,53.1);


(lib.Symbol78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol80();
	this.instance.parent = this;
	this.instance.setTransform(26.6,26.5,1,1,0,0,0,26.6,26.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.1,53.1);


(lib.Symbol75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol72();
	this.instance.parent = this;
	this.instance.setTransform(52,52,1,1,0,0,0,52,52);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:51.9,regY:51.9,scaleX:0.84,scaleY:0.84},7,cjs.Ease.get(-1)).to({regX:52,regY:52,scaleX:0.69,scaleY:0.69,x:52.1,y:52.1},7,cjs.Ease.get(1)).to({scaleX:0.85,scaleY:0.85,x:52,y:52},8,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-1.3,106.6,106.6);


(lib.Symbol73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag4A6QgZgZAAghQAAghAZgXQAXgZAhAAQAhAAAZAZQAXAXAAAhQAAAhgXAZQgZAXghAAQghAAgXgXg");
	this.shape.setTransform(52,52);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.Symbol75();
	this.instance.parent = this;
	this.instance.setTransform(52,52,1,1,0,0,0,52,52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol73, new cjs.Rectangle(-1.3,-1.3,106.6,106.6), null);


(lib.Symbol71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol69();
	this.instance.parent = this;
	this.instance.setTransform(184.5,187,1,1,0,0,0,184.5,187);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol69();
	this.instance.parent = this;
	this.instance.setTransform(184.5,187,1,1,0,0,0,184.5,187);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 68
	this.instance = new lib.Symbol68();
	this.instance.parent = this;
	this.instance.setTransform(434.1,55.9,1,1,0,0,0,21,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},6).wait(24));

	// Symbol 67
	this.instance_1 = new lib.Symbol67();
	this.instance_1.parent = this;
	this.instance_1.setTransform(394.7,55.9,1,1,0,0,0,14.2,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({rotation:360},6).wait(18));

	// Symbol 66
	this.instance_2 = new lib.Symbol66();
	this.instance_2.parent = this;
	this.instance_2.setTransform(361.5,55.9,1,1,0,0,0,15.6,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:360},6).wait(24));

	// Symbol 65
	this.instance_3 = new lib.Symbol65();
	this.instance_3.parent = this;
	this.instance_3.setTransform(319.4,55.9,1,1,0,0,0,23.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({rotation:360},6).wait(18));

	// Symbol 64
	this.instance_4 = new lib.Symbol64();
	this.instance_4.parent = this;
	this.instance_4.setTransform(260.9,55.9,1,1,0,0,0,14.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:360},6).wait(24));

	// Symbol 63
	this.instance_5 = new lib.Symbol63();
	this.instance_5.parent = this;
	this.instance_5.setTransform(210.7,55.9,1,1,0,0,0,14.7,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({rotation:360},6).wait(18));

	// Symbol 62
	this.instance_6 = new lib.Symbol62();
	this.instance_6.parent = this;
	this.instance_6.setTransform(173.2,59.7,1,1,0,0,0,19.2,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:360},6).wait(24));

	// Symbol 61
	this.instance_7 = new lib.Symbol61();
	this.instance_7.parent = this;
	this.instance_7.setTransform(136,55.9,1,1,0,0,0,15.6,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({rotation:360},6).wait(18));

	// Symbol 60
	this.instance_8 = new lib.Symbol60();
	this.instance_8.parent = this;
	this.instance_8.setTransform(102.5,55.9,1,1,0,0,0,14.7,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:360},6).wait(24));

	// Symbol 59
	this.instance_9 = new lib.Symbol59();
	this.instance_9.parent = this;
	this.instance_9.setTransform(69,55.9,1,1,0,0,0,14.2,23.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({rotation:360},6).wait(18));

	// Symbol 58
	this.instance_10 = new lib.Symbol58();
	this.instance_10.parent = this;
	this.instance_10.setTransform(35.8,55.9,1,1,0,0,0,14.7,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:360},6).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.1,32.1,434,54.6);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 54
	this.instance = new lib.Symbol54();
	this.instance.parent = this;
	this.instance.setTransform(422.5,64.2,1,1,0,0,0,12.8,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},26,cjs.Ease.get(-1)).to({regX:12.7,scaleX:1,scaleY:1,rotation:980,x:422.3,y:45.9},2,cjs.Ease.get(-1)).to({regX:12.8,rotation:880,x:422.4,y:27.6},2,cjs.Ease.get(1)).to({rotation:815.8,x:422.5,y:42.2},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:720,y:64.2},3,cjs.Ease.get(1)).wait(35));

	// Symbol 53
	this.instance_1 = new lib.Symbol53();
	this.instance_1.parent = this;
	this.instance_1.setTransform(391.2,64.6,1,1,0,0,0,14.7,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:360},24,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:980,x:391.1,y:46.1},2,cjs.Ease.get(-1)).to({regX:14.6,rotation:880,y:27.9},2,cjs.Ease.get(1)).to({rotation:815.8,y:42.5},2,cjs.Ease.get(-1)).to({regX:14.7,scaleX:1,scaleY:1,rotation:720,x:391.2,y:64.6},3,cjs.Ease.get(1)).wait(37));

	// Symbol 52
	this.instance_2 = new lib.Symbol52();
	this.instance_2.parent = this;
	this.instance_2.setTransform(356.9,64.6,1,1,0,0,0,16.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:360},22,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:980,y:46.2},2,cjs.Ease.get(-1)).to({rotation:880,x:356.8,y:27.8},2,cjs.Ease.get(1)).to({rotation:815.8,y:42.5},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:720,x:356.9,y:64.6},3,cjs.Ease.get(1)).wait(39));

	// Symbol 51
	this.instance_3 = new lib.Symbol51();
	this.instance_3.parent = this;
	this.instance_3.setTransform(310.7,64.6,1,1,0,0,0,26.5,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:360},20,cjs.Ease.get(-1)).to({regX:26.4,scaleX:1,scaleY:1,rotation:980,y:46.3},2,cjs.Ease.get(-1)).to({rotation:880,x:310.8,y:27.9},2,cjs.Ease.get(1)).to({regX:26.5,rotation:815.8,x:310.7,y:42.5},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:720,y:64.6},3,cjs.Ease.get(1)).wait(41));

	// Symbol 50
	this.instance_4 = new lib.Symbol50();
	this.instance_4.parent = this;
	this.instance_4.setTransform(268.7,64.6,1,1,0,0,0,12.7,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:360},18,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:980,y:46.2},2,cjs.Ease.get(-1)).to({rotation:880,y:27.9},2,cjs.Ease.get(1)).to({rotation:815.8,y:42.5},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:720,y:64.6},3,cjs.Ease.get(1)).wait(43));

	// Symbol 49
	this.instance_5 = new lib.Symbol49();
	this.instance_5.parent = this;
	this.instance_5.setTransform(236.9,64.6,1,1,0,0,0,14.7,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:360},16,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:980,x:236.8,y:46.2},2,cjs.Ease.get(-1)).to({rotation:880,x:236.7,y:27.9},2,cjs.Ease.get(1)).to({rotation:815.8,x:236.8,y:42.5},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:720,x:236.9,y:64.6},3,cjs.Ease.get(1)).wait(45));

	// Symbol 48
	this.instance_6 = new lib.Symbol48();
	this.instance_6.parent = this;
	this.instance_6.setTransform(203.5,64.6,1,1,0,0,0,14.2,23.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:360},14,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:980,x:203.6,y:46.3},2,cjs.Ease.get(-1)).to({regY:23.9,rotation:880,x:203.5,y:27.8},2,cjs.Ease.get(1)).to({regX:14.3,regY:23.8,rotation:815.8,x:203.6,y:42.6},2,cjs.Ease.get(-1)).to({regX:14.2,scaleX:1,scaleY:1,rotation:720,x:203.5,y:64.6},3,cjs.Ease.get(1)).wait(47));

	// Symbol 47
	this.instance_7 = new lib.Symbol47();
	this.instance_7.parent = this;
	this.instance_7.setTransform(154.1,64.6,1,1,0,0,0,14.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:360},12,cjs.Ease.get(-1)).to({regX:14,scaleX:1,scaleY:1,rotation:980,y:46.2},2,cjs.Ease.get(-1)).to({regX:14.1,rotation:880,x:154,y:27.8},2,cjs.Ease.get(1)).to({rotation:815.8,x:153.9,y:42.4},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:720,x:154.1,y:64.6},3,cjs.Ease.get(1)).wait(49));

	// Symbol 46
	this.instance_8 = new lib.Symbol46();
	this.instance_8.parent = this;
	this.instance_8.setTransform(100.2,64.9,1,1,0,0,0,18.3,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:360},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:980,x:100.1,y:46.5},2,cjs.Ease.get(-1)).to({regX:18.2,rotation:880,x:100.2,y:28.2},2,cjs.Ease.get(1)).to({regX:18.3,rotation:815.8,y:42.9},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:720,y:64.9},3,cjs.Ease.get(1)).wait(51));

	// Symbol 45
	this.instance_9 = new lib.Symbol45();
	this.instance_9.parent = this;
	this.instance_9.setTransform(65.3,64.6,1,1,0,0,0,12.7,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:360},8,cjs.Ease.get(-1)).to({regY:23.2,scaleX:1,scaleY:1,rotation:980,x:65.4,y:46.1},2,cjs.Ease.get(-1)).to({regY:23.1,rotation:880,x:65.3,y:27.8},2,cjs.Ease.get(1)).to({rotation:815.8,y:42.4},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:720,y:64.6},3,cjs.Ease.get(1)).wait(53));

	// Symbol 44
	this.instance_10 = new lib.Symbol44();
	this.instance_10.parent = this;
	this.instance_10.setTransform(33.6,64.6,1,1,0,0,0,15.6,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:360},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:980,y:46.1},2,cjs.Ease.get(-1)).to({rotation:880,y:27.8},2,cjs.Ease.get(1)).to({regX:15.7,rotation:815.8,y:42.5},2,cjs.Ease.get(-1)).to({regX:15.6,scaleX:1,scaleY:1,rotation:720,y:64.6},3,cjs.Ease.get(1)).wait(55));

	// Symbol 43
	this.instance_11 = new lib.Symbol43();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0.8,64.6,1,1,0,0,0,14.2,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:360},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:980,x:0.9,y:46.2},2,cjs.Ease.get(-1)).to({rotation:880,x:0.8,y:27.8},2,cjs.Ease.get(1)).to({rotation:815.8,x:0.9,y:42.5},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:720,x:0.8,y:64.6},3,cjs.Ease.get(1)).wait(57));

	// Symbol 42
	this.instance_12 = new lib.Symbol42();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-28.5,64.6,1,1,0,0,0,11.6,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({rotation:360},2,cjs.Ease.get(-1)).to({regX:11.5,scaleX:1,scaleY:1,rotation:980,y:46.3},2,cjs.Ease.get(-1)).to({regX:11.6,rotation:880,x:-28.6,y:27.8},2,cjs.Ease.get(1)).to({regY:23.2,rotation:815.8,x:-28.5,y:42.6},2,cjs.Ease.get(-1)).to({regY:23.1,scaleX:1,scaleY:1,rotation:720,y:64.6},3,cjs.Ease.get(1)).wait(59));

	// Symbol 41
	this.instance_13 = new lib.Symbol41();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-59.4,64.6,1,1,0,0,0,14.7,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regX:14.6,scaleX:1,scaleY:1,rotation:620,y:46.3},2,cjs.Ease.get(-1)).to({regX:14.7,regY:23.2,rotation:520,x:-59.5,y:27.8},2,cjs.Ease.get(1)).to({rotation:455.8,x:-59.4,y:42.5},2,cjs.Ease.get(-1)).to({regY:23.1,scaleX:1,scaleY:1,rotation:360,y:64.6},3,cjs.Ease.get(1)).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.1,40.8,509.3,47.7);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Tween21("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(331.5,32.1);

	this.instance_1 = new lib.Tween22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(331.5,32.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},9).wait(10));

	// Layer 4
	this.instance_2 = new lib.Symbol38();
	this.instance_2.parent = this;
	this.instance_2.setTransform(579.5,44.6,1,1,0,0,0,14.5,14.5);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.Symbol38();
	this.instance_3.parent = this;
	this.instance_3.setTransform(359.5,33.5,1,1,0,0,0,14.5,14.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{alpha:0}},{t:this.instance_2,p:{alpha:0}}]}).to({state:[{t:this.instance_3,p:{alpha:1}},{t:this.instance_2,p:{alpha:1}}]},9).to({state:[]},10).wait(9));

	// Layer 3
	this.instance_4 = new lib.Symbol37();
	this.instance_4.parent = this;
	this.instance_4.setTransform(315.5,19.6,1,1,0,0,0,14.5,14.5);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.Symbol37();
	this.instance_5.parent = this;
	this.instance_5.setTransform(700.5,28.6,1,1,0,0,0,14.5,14.5);
	this.instance_5.alpha = 0;

	this.instance_6 = new lib.Symbol37();
	this.instance_6.parent = this;
	this.instance_6.setTransform(529.5,38.6,1,1,0,0,0,14.5,14.5);
	this.instance_6.alpha = 0;

	this.instance_7 = new lib.Symbol37();
	this.instance_7.parent = this;
	this.instance_7.setTransform(212.5,41.5,1,1,0,0,0,14.5,14.5);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7,p:{alpha:0}},{t:this.instance_6,p:{alpha:0}},{t:this.instance_5,p:{alpha:0}},{t:this.instance_4,p:{alpha:0}}]},4).to({state:[{t:this.instance_7,p:{alpha:1}},{t:this.instance_6,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_4,p:{alpha:1}}]},9).to({state:[]},10).wait(5));

	// Layer 2
	this.instance_8 = new lib.Symbol36();
	this.instance_8.parent = this;
	this.instance_8.setTransform(71.5,44.6,1,1,0,0,0,14.5,14.5);
	this.instance_8.alpha = 0;

	this.instance_9 = new lib.Symbol36();
	this.instance_9.parent = this;
	this.instance_9.setTransform(122.5,44.6,1,1,0,0,0,14.5,14.5);
	this.instance_9.alpha = 0;

	this.instance_10 = new lib.Symbol36();
	this.instance_10.parent = this;
	this.instance_10.setTransform(398.5,38.6,1,1,0,0,0,14.5,14.5);
	this.instance_10.alpha = 0;

	this.instance_11 = new lib.Symbol36();
	this.instance_11.parent = this;
	this.instance_11.setTransform(439.5,38.6,1,1,0,0,0,14.5,14.5);
	this.instance_11.alpha = 0;

	this.instance_12 = new lib.Symbol36();
	this.instance_12.parent = this;
	this.instance_12.setTransform(625.5,48.6,1,1,0,0,0,14.5,14.5);
	this.instance_12.alpha = 0;

	this.instance_13 = new lib.Symbol36();
	this.instance_13.parent = this;
	this.instance_13.setTransform(671.5,44.6,1,1,0,0,0,14.5,14.5);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13,p:{alpha:0}},{t:this.instance_12,p:{alpha:0}},{t:this.instance_11,p:{alpha:0}},{t:this.instance_10,p:{alpha:0}},{t:this.instance_9,p:{alpha:0}},{t:this.instance_8,p:{alpha:0}}]}).to({state:[{t:this.instance_13,p:{alpha:1}},{t:this.instance_12,p:{alpha:1}},{t:this.instance_11,p:{alpha:1}},{t:this.instance_10,p:{alpha:1}},{t:this.instance_9,p:{alpha:1}},{t:this.instance_8,p:{alpha:1}}]},9).to({state:[]},10).wait(9));

	// Layer 1
	this.instance_14 = new lib.Symbol10();
	this.instance_14.parent = this;
	this.instance_14.setTransform(369,36,1,1,0,0,0,369,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,738,72);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A15B4F").s().p("AiMA3QgPgBgBgHQgCgHANgIQAOgIATgFQAUgEAPAAQAPACABAGQABAHgNAIQgNAJgUAEQgPAEgMAAIgHAAgABPgMQgPAAgBgHQgCgHANgIQANgJATgGQAUgFAOAAQAPAAACAHQACAHgNAIQgNAKgUAFQgRAFgOAAIgDAAg");
	this.shape.setTransform(40.2,49.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(49).to({_off:false},0).wait(1));

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(54.5,79,1,1,0,0,0,54.5,79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97,92);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol25();
	this.instance.parent = this;
	this.instance.setTransform(337.3,112.9,0.209,0.209,0,0,0,30.1,29.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(116).to({_off:false},0).to({regY:29.8,scaleX:3.76,scaleY:3.76,guide:{path:[337.3,112.9,328.6,104.8,321,95.7,316,89.7,315.4,89.1,311.9,85.3,306.9,81.2,303.7,78.7,297.6,74.2,289.2,68,284.6,65,277.1,60.2,270.6,57.4,260.8,53.2,248,51.3,238.6,49.9,224.5,49.4,216.5,49.2,200.7,49.1,190.3,49.1,184.5,50,175.6,51.3,169.6,55.2,168.3,56.2,165.4,58.4,162.6,60.6,161.1,61.6,155.5,65.2,150.8,64.1,152.2,63.3,153.5,62.5]},alpha:1},8,cjs.Ease.get(-1)).to({_off:true},1).wait(15));

	// Layer 1
	this.instance_1 = new lib.Symbol24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(119.3,34.4,4.034,4.034,0,0,0,125.8,56.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(125).to({_off:false},0).wait(7).to({alpha:0},7).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol26();
	this.instance_2.parent = this;
	this.instance_2.setTransform(143,54.1,1,1,0,0,0,360.9,177);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(125).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(30,30,1,1,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8 copy 2
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(125.7,-83.5,1,1,0,0,0,30,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).to({guide:{path:[125.8,-83.4,161,-85.8,183.4,-86.9,231.7,-89.4,270.8,-89.6,301.4,-89.6,353.6,-88,398.8,-86.6,430.6,-85.2,472.4,-83.3,507.6,-80.7,538.7,-78.3,582.3,-74.1,585.8,-73.7,589.7,-73.3]}},12,cjs.Ease.get(-1)).to({guide:{path:[589.7,-73.4,614.1,-70.9,657,-66.6,748.2,-57.7,806.6,-56.1,817.7,-55.8,896,-55.3,950.2,-55.1,985.2,-52.2,999.7,-51,1009.8,-49.4,1023,-47.3,1033.7,-43.7,1023.3,-45.4,1012.8,-46.8]}},12,cjs.Ease.get(1)).wait(1));

	// Layer 8 copy
	this.instance_1 = new lib.Symbol20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1017.8,82.3,1,1,0,0,0,30,30);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({guide:{path:[1017.8,82.2,1013.5,80.7,1009.3,79.2,973.6,66.7,956.1,60.1,926.8,48.9,904.2,38,890.3,31.3,867.2,18.9,852.5,11.2,837.8,3.4,826.4,-2.7,819.7,-5.6,813.1,-8.4,799.1,-12.9,709.8,-41.8,662.9,-53.8,618.6,-65.1,578.8,-71.1]}},12,cjs.Ease.get(-1)).to({guide:{path:[578.8,-71.1,549.9,-75.5,523.4,-77.1,506.1,-78.2,478,-78.7,432.8,-79.4,387.7,-79.1,363.1,-79,347.9,-78.2,325.6,-77,298.2,-73.1,280.4,-70.6,248.9,-65.2,208.9,-58.4,186.2,-53.4,151.8,-45.9,124.7,-36.6,128.7,-37.1,133.6,-38.2,134.8,-38.5,136.6,-38.9]}},12,cjs.Ease.get(1)).to({_off:true},1).wait(8));

	// Layer 8
	this.instance_2 = new lib.Symbol20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(997.5,-85.7,1,1,0,0,0,30,30);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({guide:{path:[997.5,-85.6,846.9,-116,696.5,-150.4,677.8,-154.7,668.3,-156.2,658.1,-157.9,637.2,-159.6,599.1,-162.7,568,-164.8]}},12,cjs.Ease.get(-1)).to({guide:{path:[568,-164.8,531.2,-167.4,504.3,-168.5,473.5,-169.9,434.9,-170.6,411.7,-171,365.4,-171.4,342.9,-171.6,320.5,-171.8,263.6,-172.3,235.1,-171.6,187.6,-170.4,149.9,-165.6,141.1,-164.5,136,-163.3,133.8,-162.8,131.9,-162.2]}},12,cjs.Ease.get(1)).to({_off:true},1).wait(21));

	// Layer 5
	this.instance_3 = new lib.Symbol20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1027.5,-140.5,0.433,0.433,0,0,0,30,30);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({regX:30.1,regY:29.9,guide:{path:[1027.5,-140.4,1021.5,-141,1015.1,-141.5,1003.2,-142.5,978.2,-143.6,883.3,-148,835.8,-150.2,804.5,-151.6,790,-152,764.4,-152.8,744.1,-152.4,699.6,-151.6,644.4,-144.5,611,-140.3,545.4,-129.5,539.2,-128.5,533.8,-127.6]}},12,cjs.Ease.get(-1)).to({regX:30,regY:30,guide:{path:[533.7,-127.6,517.8,-125,508.7,-123.4,488.4,-119.8,472.2,-116.3,449.9,-111.4,417,-102.7,369,-90.1,333.6,-79.8,288.7,-66.9,251.1,-54.1,192.4,-33,163,-23,111.4,-5.3,73.5,2.7,64.9,4.6,61.7,5.5,61.3,5.6,60.9,5.7]}},12,cjs.Ease.get(1)).to({_off:true},1).wait(14));

	// Layer 1
	this.instance_4 = new lib.Symbol20();
	this.instance_4.parent = this;
	this.instance_4.setTransform(139.2,75.3,1,1,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({guide:{path:[139.3,75.3,137.2,76.7,135.3,78.2,139,77.2,143.5,74.8,146.2,73.4,151.4,70.4,159.2,66.2,175.5,60.1,207.6,48.1,239.7,36.2,255.7,30.3,263,27.8,276,23.2,286.5,20,300,15.9,316.9,11.7,327.6,9.1,347.6,4.6,371.3,-0.7,383.1,-3.2,402.9,-7.3,418.9,-10,468.4,-18.2,531.1,-20.1,561.2,-21.1,614.6,-20.6]}},12,cjs.Ease.get(-1)).to({guide:{path:[614.6,-20.6,628.5,-20.5,644.1,-20.3,691,-19.7,711.7,-19.3,749.5,-18.5,779.4,-17.2,809.7,-15.9,862,-12.7,896.3,-10.6,913.4,-9.2,942,-6.8,964.6,-3.6,981.5,-1.1,1002.4,2.7,1015.1,5.2,1040,10.3,1073.5,17.2,1106.9,24.2]}},12,cjs.Ease.get(1)).to({_off:true},1).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(109.2,45.3,60,60);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(-162,317,1,1,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(390.9,153.1,1.255,1.255,0,0,0,371.9,233);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-82.8,-139.4,940.9,585), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 5
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(137,79.5,1,1,0,0,0,62,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:44.6,scaleY:1.04,y:81.5},9,cjs.Ease.get(-1)).to({regX:62.1,regY:44.5,scaleY:1.09,x:137.1,y:83.5},10,cjs.Ease.get(1)).to({scaleY:1.05,y:81.6},10,cjs.Ease.get(-1)).to({regX:62,scaleY:1,x:137,y:79.5},10,cjs.Ease.get(1)).wait(1));

	// Symbol 6
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(164.5,27,1,1,0,0,0,39.5,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-1.5,x:163.8,y:26.5},9,cjs.Ease.get(-1)).to({regX:39.6,rotation:-3.5,x:162.9,y:25.7},10,cjs.Ease.get(1)).to({rotation:-1.6,x:163.8,y:26.4},10,cjs.Ease.get(-1)).to({regX:39.5,rotation:0,x:164.5,y:27},10,cjs.Ease.get(1)).wait(1));

	// Symbol 4
	this.instance_2 = new lib.Symbol27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(119.5,8,1,1,0,0,0,55.5,76);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:5.3,y:8.1},9,cjs.Ease.get(-1)).to({rotation:11.5},10,cjs.Ease.get(1)).to({regX:55.6,rotation:5.6,x:119.6},10,cjs.Ease.get(-1)).to({regX:55.5,rotation:0,x:119.5,y:8},10,cjs.Ease.get(1)).wait(1));

	// Symbol 7
	this.instance_3 = new lib.Symbol7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(125,192,1,1,0,0,0,73,192);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

	// Symbol 3
	this.instance_4 = new lib.Symbol3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(89,41.6,1,1,0,0,0,56,14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:56.1,rotation:-2,x:89.1},9,cjs.Ease.get(-1)).to({rotation:-4.5,x:89.2},10,cjs.Ease.get(1)).to({rotation:-2.1,x:89.1,y:41.7},10,cjs.Ease.get(-1)).to({regX:56,rotation:0,x:89,y:41.6},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33,-68,213,452);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(73,192,1,1,0,0,0,73,192);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:213},6).to({y:192},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33,-68,213,452);


(lib.Symbol87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol84();
	this.instance.parent = this;
	this.instance.setTransform(98.5,34.9,1,1,0,0,0,98.5,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:104.5},19).to({x:98.5},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,197.1,49.7);


(lib.Symbol82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol81();
	this.instance.parent = this;
	this.instance.setTransform(26.6,26.5,1,1,0,0,0,26.6,26.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AEHg/QAXBeg9BVQg9BWhtAaQhrAbhdgxQhdgwgYhfQgXhdA9hWQA8hVBtgaQBsgbBdAwQBdAwAYBfg");
	this.shape.setTransform(26.2,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,255,0,0.8)").s().p("AiRDOQhdgwgYhfQgWhdA8hWQA9hVBsgaQBsgbBdAwQBdAwAYBfQAWBeg8BVQg8BWhtAaQgnAKgjAAQhDAAg8ggg");
	this.shape_1.setTransform(26.2,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol78();
	this.instance.parent = this;
	this.instance.setTransform(26.6,26.5,1,1,0,0,0,26.6,26.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AD/BHQgaBfheAvQhdAwhpgeQhqgdg4hZQg4hYAbhfQAahfBdgwQBegvBpAeQBqAdA4BYQA4BZgbBfg");
	this.shape.setTransform(27,23.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,255,0,0.8)").s().p("Ag/DnQhqgdg4hZQg4hYAbhfQAahfBdgwQBegvBpAeQBqAdA4BYQA4BZgbBfQgaBfheAvQg5Aeg/AAQglAAgpgMg");
	this.shape_1.setTransform(27,23.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol73();
	this.instance.parent = this;
	this.instance.setTransform(39.4,39.5,0.758,0.758,0,0,0,51.9,52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol77, new cjs.Rectangle(-1,-1,80.8,80.8), null);


(lib.Symbol76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol77();
	this.instance.parent = this;
	this.instance.setTransform(39.9,39.1,1,1,0,0,0,39.4,39.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[40,39,39.9,38.9,39.7,38.7,37.4,36.2,32.5,33.4,26.1,29.8,24.7,28.7,22.5,27.1,19.2,23.7,-2.8,1.5,-18.3,-25.9,-4.4,-18.7,4.7,-6.2,5.9,-5.3,7.1,-4.5,15.1,5.4,24.6,13.6,24.9,14.5,25.9,13.8,26.9,13.1,27.1,12,31.5,-12.8,30.7,-38.1,39.9,-15.6,46.8,6.6,48.7,6.1,49.8,5.7,62.9,-2.2,77.9,-6.3,92.8,-10.5,108.1,-10.5,95.6,-3.6,85.5,6.7,75.4,17.1,68.9,29.7,72.1,31.9,76.9,33.7,78.8,34.4,85.4,36.3,110.3,43.4,134.1,54.7,94.7,54.4,55.3,54.1,56.2,56.2,57.7,58.7,58.4,59.8,60.6,63,73.9,82.8,83.3,105.3,65,85.4,44.6,65.6,43,64.1,42.1,64.3,40.9,64.3,39.7,66.3,24.1,89.7,6.8,110.9,11.6,96.8,16.4,82.6,19.9,72.3,21,66.6,22.4,60.6,22.4,54.8,-12.3,59,-48,59.4,-39.8,55.5,-29.1,51.8,-22.8,49.6,-9.7,45.5,1.1,42.1,7,40.8,15.9,39,23.3,39.6]}},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-1.3,80.8,80.8);


(lib.Symbol74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol73();
	this.instance.parent = this;
	this.instance.setTransform(51.7,52.2,1,1,0,0,0,52,52);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[51.7,52.2,41.7,27.2,18.9,8.6,-3,-9.2,-31,-16.8,-56.8,-23.8,-86.6,-22.1,-113.1,-20.6,-142,-12.3,-153.5,-9,-162.1,-5.5,-172.7,-1.2,-180.9,4.1,-193.7,12.5,-202.7,24.7,-211.9,37.3,-215.2,51.7,-218.7,66.6,-215.1,81.6,-211.5,96.9,-201.5,108,-192.4,118.1,-177.8,124.7,-164.7,130.8,-147.5,133.9,-134.9,136.2,-115.8,137.5,-89,139.4,-68,138.9,-42.4,138.3,-20.6,134,3.9,129.1,24.7,119.3,47.4,108.7,64.1,93,70.8,86.7,81.9,73.9,93.8,60.3,99.6,54.6,110.3,44.1,125.7,33.3,135.3,26.6,154.1,15,166.2,7.5,173.6,3.4,184.6,-2.6,194.1,-6.3,207.6,-11.4,225.5,-14.4,236.2,-16.1,257.8,-18.2,273.8,-19.7,282.8,-19,296.7,-18,306,-12.1,310.7,-9,315.3,-4,318.4,-0.5,323,5.7,333.9,20.5,340.3,33.1,348.2,48.6,350.9,63.2,353.9,79.8,349.9,95.4,345.6,112.2,334.3,122.9,327.6,129.2,317.9,133.8,310.1,137.5,299.2,140.5,269.7,148.8,238.6,148.1,207.6,147.4,178.5,137.9,165.9,133.8,150.8,127,141.5,122.8,123.9,114,113.5,108.9,108.6,105.9,100.4,101,95,95.6,94.1,94.6,93.3,93.8]}},79).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-1.2,106.6,106.6);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer 3
	this.instance = new lib.Symbol57();
	this.instance.parent = this;
	this.instance.setTransform(47,-319.5,0.662,0.662,0,0,0,238.1,48.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-237},9).to({y:-319.5},10).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(194.8,4.4,0.585,0.585,0,0,0,258.8,48.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:116.9},9).to({y:4.4},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.6,-330.2,394.5,358.1);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol79();
	this.instance.parent = this;
	this.instance.setTransform(24.6,36.2,1,1,0,0,0,26.6,26.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol79(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25,30.5,1,1,0,0,0,25,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(-2.4,0,54.8,62.7), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol79();
	this.instance.parent = this;
	this.instance.setTransform(26.3,37.4,1,1,0,0,0,26.6,26.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol79(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26,31.5,1,1,0,0,0,26,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(-0.7,0,54.8,64), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol79();
	this.instance.parent = this;
	this.instance.setTransform(25.5,35.9,1,1,0,0,0,26.6,26.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol79(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25,30.5,1,1,0,0,0,25,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(-1.5,0,54.8,62.4), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol33();
	this.instance.parent = this;
	this.instance.setTransform(25,0.5,1,1,9.7,0,0,25,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0.3,x:25.1,y:0.4},5,cjs.Ease.get(-1)).to({regX:25.1,regY:0.6,rotation:-12.3,x:25.2,y:0.5},5,cjs.Ease.get(1)).to({rotation:-0.5,x:25.1,y:0.7},5,cjs.Ease.get(-1)).to({regX:25,regY:0.5,rotation:9.7,x:25,y:0.5},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,-4.2,59.6,68.6);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol32();
	this.instance.parent = this;
	this.instance.setTransform(26.1,0.5,1,1,-15.5,0,0,26,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.3,x:26},4,cjs.Ease.get(-1)).to({regX:26.1,rotation:26.7,x:26.2,y:0.6},5,cjs.Ease.get(1)).to({rotation:5.5,y:0.5},5,cjs.Ease.get(-1)).to({regX:26,rotation:-15.5,x:26.1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.9,-6.9,66.9,74.6);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(689,233,1,1,0,0,0,372,233);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(234.2,-139.4,940.9,585), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol82();
	this.instance.parent = this;
	this.instance.setTransform(27.2,38.8,1,1,0,0,0,26.6,26.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol82(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.IE4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-1.1,0,55.8,66), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_139 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_154 = function() {
		this.stop();
	}
	this.frame_169 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(139).call(this.frame_139).wait(15).call(this.frame_154).wait(15).call(this.frame_169).wait(1));

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(30,260,1,1,0,0,0,73,192);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:253.1},33,cjs.Ease.get(-1)).to({x:500},36,cjs.Ease.get(1)).wait(1).to({skewY:180,x:640},0).to({x:390.9},35,cjs.Ease.get(-1)).to({x:150},34,cjs.Ease.get(1)).wait(1).to({skewY:0,x:37.5},0).to({x:475},14).wait(1).to({skewY:180,x:637.5},0).to({x:150},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,0,213,452);


(lib.Symbol88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer 1
	this.instance = new lib.Symbol87();
	this.instance.parent = this;
	this.instance.setTransform(-31.5,24.8,1,1,0,0,0,98.5,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:98.5},9).to({x:-31.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130,0,197.1,49.7);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol31();
	this.instance.parent = this;
	this.instance.setTransform(25,0.5,1,1,-23,0,0,25,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.6,rotation:-5.8,x:25.1,y:0.6},4,cjs.Ease.get(-1)).to({regY:0.5,rotation:20},4,cjs.Ease.get(1)).to({regX:25.1,rotation:-1.3,y:0.5},4,cjs.Ease.get(-1)).to({regX:25,rotation:-23,x:25},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.8,-9.7,69.9,75.7);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(27.1,0.1,1,1,13.7,0,0,27,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1,y:0},4,cjs.Ease.get(-1)).to({regX:27.1,regY:0.1,rotation:-19.8,x:27.2,y:0.1},5,cjs.Ease.get(1)).to({rotation:-3,y:0.2},5,cjs.Ease.get(-1)).to({regX:27,regY:0,rotation:13.7,x:27.1,y:0.1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,-6.3,68.1,76.9);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// IE5.png
	this.instance = new lib.Symbol35();
	this.instance.parent = this;
	this.instance.setTransform(310,-84,1,1,0,0,0,369,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// IE4.png
	this.instance_1 = new lib.Symbol28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(97,-59,1,1,0,0,0,27,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// IE3.png
	this.instance_2 = new lib.Symbol29();
	this.instance_2.parent = this;
	this.instance_2.setTransform(235,-60.5,1,1,0,0,0,26,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// IE2.png
	this.instance_3 = new lib.Symbol30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(378,-61.5,1,1,0,0,0,25,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// IE1.png
	this.instance_4 = new lib.Symbol34();
	this.instance_4.parent = this;
	this.instance_4.setTransform(506,-56.5,1,1,0,0,0,25,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-59,-120,738,98.9), null);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(428,156,1,1,0,0,0,369,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:369.1,regY:36.1,scaleX:1.07,scaleY:1.07,x:442.2,y:183.9},9).to({regX:369,regY:36,scaleX:1,scaleY:1,x:428,y:156},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,738,98.9);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Custom Mouse Cursor
		Replaces the default mouse cursor with the specified symbol instance.
		*/
		stage.canvas.style.cursor = "none";
		this.kur.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kur.x = stage.mouseX;
			this.kur.y = stage.mouseY;
		}
		//To restore the default mouse pointer, uncomment the following lines:
		//this.removeEventListener("tick", fl_CustomMouseCursor.bind(this));
		//stage.removeChild(kur);
		//stage.canvas.style.cursor = "default";
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		_this.kur.visible=false;
		_this.kur1.visible=true;
		_this.morda.visible=true;
		
		
		function fl_MouseOverHandler_5()
		    {
			    _this.shar.gotoAndPlay(1);
				_this.text.gotoAndPlay(1);
				_this.xxx.gotoAndPlay(1);
				_this.kur.visible=true;
				_this.kur1.visible=false;
				_this.morda.visible=false;
				
		
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
			    _this.shar.gotoAndPlay(10);
				_this.text.gotoAndPlay(10);
				_this.xxx.gotoAndPlay(10);
				_this.kur.visible=false;
				_this.kur1.visible=true;
				_this.morda.visible=true;
				_this.girl.gotoAndPlay(1);
		
		    }
		
		this.btr.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
		this.girl.gotoAndPlay(156);
		}
		
		this.btl.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
		this.girl.gotoAndPlay(141);
		}
		
		
		this.addEventListener("tick", fl_CustomMouseCursor11.bind(this));
		
		function fl_CustomMouseCursor11() {
		
		this.fon.x = - stage.mouseX / 20;
		this.fon.y = - stage.mouseY / 20;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 10
	this.xxx = new lib.Symbol88();
	this.xxx.parent = this;
	this.xxx.setTransform(14.5,269.4,1,1,0,0,0,98.5,24.8);

	this.timeline.addTween(cjs.Tween.get(this.xxx).wait(1));

	// Layer 8
	this.kur = new lib.Symbol76();
	this.kur.parent = this;
	this.kur.setTransform(-209,100.1,1,1,0,0,0,39.4,39.4);

	this.timeline.addTween(cjs.Tween.get(this.kur).wait(1));

	// Layer 7
	this.kur1 = new lib.Symbol74();
	this.kur1.parent = this;
	this.kur1.setTransform(338.9,148,0.735,0.735,0,0,0,52,52);

	this.timeline.addTween(cjs.Tween.get(this.kur1).wait(1));

	// Layer 6
	this.btr = new lib.Symbol71();
	this.btr.parent = this;
	this.btr.setTransform(508.5,205.9,1,0.604,0,0,0,184.5,187.2);
	new cjs.ButtonHelper(this.btr, 0, 1, 2, false, new lib.Symbol71(), 3);

	this.btl = new lib.Symbol70();
	this.btl.parent = this;
	this.btl.setTransform(139.6,206,1,0.604,0,0,0,184.5,187.2);
	new cjs.ButtonHelper(this.btl, 0, 1, 2, false, new lib.Symbol70(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btl},{t:this.btr}]}).wait(1));

	// Layer 5
	this.text = new lib.Symbol56();
	this.text.parent = this;
	this.text.setTransform(423.4,271.9,1,1,0,0,0,149,14);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 4
	this.morda = new lib.Symbol23();
	this.morda.parent = this;
	this.morda.setTransform(312,160,1,1,0,0,0,126,57);

	this.timeline.addTween(cjs.Tween.get(this.morda).wait(1));

	// Layer 2
	this.girl = new lib.Symbol8();
	this.girl.parent = this;
	this.girl.setTransform(93.5,298,1,1,0,0,0,106.5,226);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Layer 3
	this.shar = new lib.Symbol55();
	this.shar.parent = this;
	this.shar.setTransform(310,75,1,1,0,0,0,369,78);

	this.timeline.addTween(cjs.Tween.get(this.shar).wait(1));

	// Layer 1
	this.fon = new lib.Symbol17();
	this.fon.parent = this;
	this.fon.setTransform(1,2.5,1,1,0,0,0,354,96.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(71,-80.9,1071.1,757.5);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1483023144173", id:"back"},
		{src:"images/body.png?1483023144173", id:"body"},
		{src:"images/Cic.png?1483023144173", id:"Cic"},
		{src:"images/Head.png?1483023144173", id:"Head"},
		{src:"images/IE1.png?1483023144173", id:"IE1"},
		{src:"images/IE2.png?1483023144173", id:"IE2"},
		{src:"images/IE3.png?1483023144173", id:"IE3"},
		{src:"images/IE4.png?1483023144173", id:"IE4"},
		{src:"images/IE5.png?1483023144173", id:"IE5"},
		{src:"images/lh.png?1483023144173", id:"lh"},
		{src:"images/Liap.png?1483023144173", id:"Liap"},
		{src:"images/Rh.png?1483023144173", id:"Rh"},
		{src:"images/Sneg.png?1483023144173", id:"Sneg"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;