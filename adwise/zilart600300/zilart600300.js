(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,609,343);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,622,351);


(lib.bg3 = function() {
	this.initialize(img.bg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,685,385);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,73);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,46);// helper functions:

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


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(-244.5,-36.7,489.1,73.5), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-247.5,-15.7,495.1,31.5), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E40034").ss(2,1,1).p("EguFgWpMBcLAAAMAAAAtTMhcLAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-296,-146,592,292), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(255,255,255,0)","#FFFFFF"],[0,0,1],0.1,194.1,0.1,-6).s().p("EgxXAYsMAAAgxXMBivAAAMAAAAxXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-315.9,-158,631.9,316), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E30035").s().p("AHvCzQgPgFgMgMQgXgYAAgsIAAi8QAAgrAXgYQAMgMAPgFQAQgHAWABQApgBAWAYQAMALAFASQAGAQAAAWIAAC8QAAAXgGAQQgFASgMALQgLAMgPAFQgQAHgVgBQgWABgQgHgAH+h8QgHAHAAAUIAADDQAAAUAHAHQAJAJAOAAQAMAAAIgJQAJgHAAgUIAAjDQAAgUgJgHQgIgIgMAAQgOAAgJAIgAEiCzQgQgFgLgMQgWgYAAgsIAAi8QAAgrAWgYQALgMAQgFQAQgHAWABQAqgBAVAYQAMALAFASQAGAQAAAWIAAC8QAAAXgGAQQgFASgMALQgLAMgPAFQgQAHgVgBQgWABgQgHgAExh8QgHAHAAAUIAADDQAAAUAHAHQAJAJAOAAQANAAAHgJQAJgHAAgUIAAjDQAAgUgJgHQgHgIgNAAQgOAAgJAIgABWCzQgQgFgMgMQgWgYAAgsIAAi8QAAgrAWgYQAMgMAQgFQAPgHAWABQAqgBAVAYQAMALAFASQAGAQAAAWIAAC8QAAAXgGAQQgFASgMALQgLAMgPAFQgQAHgVgBQgWABgPgHgABlh8QgIAHAAAUIAADDQAAAUAIAHQAJAJANAAQANAAAHgJQAJgHAAgUIAAjDQAAgUgJgHQgHgIgNAAQgNAAgJAIgAjHCzQgPgFgMgMQgWgYAAgsIAAi8QAAgrAWgYQAMgMAPgFQAQgHAWABQApgBAXAYQALALAFASQAGAQAAAWIAAC8QAAAXgGAQQgFASgLALQgLAMgQAFQgRAHgUgBQgWABgQgHgAi4h8QgHAHAAAUIAADDQAAAUAHAHQAJAJAOAAQAMAAAJgJQAIgHAAgUIAAjDQAAgUgIgHQgJgIgMAAQgOAAgJAIgAmmC2IBUk3IhyAAIAAg0ICrAAIAAAzIhUE4gAo+C2IAAkUIgsAAIAAgpQAQAAAMgEQAKgDAHgGQAHgHAEgIIAHgSIAmAAIAAFrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-61.9,-18.5,123.8,37.1), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKBeQgIgDgDgFQgKgLAAgUIAAgUIAXAAIAAAWQAAAJAEADQAEAEAFAAQAHAAADgEQAEgDAAgLIAAgNQgBgMgDgEQgEgFgJAAIgEAAIAAgWIAFAAQAIAAADgEQAFgDAAgKIAAgJQAAgLgEgEQgDgDgHAAQgFAAgEADQgEADAAAJIAAASIgXAAIAAgQQAAgUAKgKQADgGAIgCQAHgDAJAAQATAAAKALQAFAFACAIQACAHAAAKIAAAEQAAAZgRAHQAJAFAEAIQAEAJAAAMIAAANQAAAKgCAIQgCAHgFAGQgFAFgIADQgGACgKAAQgJAAgHgCgAlfBeIAAgXIAJABQAGAAAEgDQAFgEAAgJIAAh7IBQAAIAAChIgaAAIAAiKIgdAAIAABiQAAAMgDAIQgDAIgFAEQgFAFgHACQgGACgIAAgAoWBeIAAgXIAJABIAGgBIAEgDQADgCAAgDIACgJIglh5IAYAAIAdBeIAXheIAaAAIgiB3QgEARgFAIQgFAJgFAEQgFAEgFAAIgTABgAJcBeIAAgZIAYAAIAAAZgAIyBeIAAhzIgSBzIgZAAIgShyIAAByIgWAAIAAihIAjAAIATByIARhyIAkAAIAAChgAGQBeIAAgZIAZAAIAAAZgAEyBeIAAihIAnAAQAKAAAHADQAHACAEAEQAFAFACAHQACAHAAAJIAAAGQAAANgDAIQgFAHgJAEQAGACADADQAEADADAFQADAJAAAMIAAAOQABASgLAKQgEAFgHADQgHACgKAAgAFLBHIAPAAQAHAAACgDQAEgEAAgJIAAgOQAAgLgEgFQgDgEgJAAIgMAAgAFLgBIAKAAQAHAAAFgEQADgDAAgKIAAgJQAAgJgCgEQgDgEgHAAIgNAAgAEMBeIgZhAIgHAPIAAAxIgaAAIAAihIAaAAIAABGIAhhGIAZAAIgjBHIAjBagACJBeIgFgdIgeAAIgGAdIgWAAIAaihIAlAAIAaChgACBArIgNhRIgMBRIAZAAgAhVBeIAAh0IghB0IgaAAIAAihIAXAAIAABgIAahgIAgAAIAAChgAjlBeIAAihIBGAAIAAAXIgrAAIAAAtIAiAAIAAAXIgiAAIAAAvIArAAIAAAXgAmzBeIAAihIBFAAIAAAXIgrAAIAAAmIAMAAQAUAAAJAJQAJAKAAAUIAAAWQAAATgJAKQgFAFgHADQgHACgKAAgAmZBHIAMAAQAHAAACgDQAEgDAAgJIAAgZQAAgIgEgEQgCgDgHAAIgMAAgApzBeIAAihIAlAAQATAAAJAKQAKALAAATIAAAVQAAATgKAKQgEAFgHADQgIACgJAAIgNAAIAAA9gApbAKIANAAQAGAAADgDQAEgEgBgHIAAgYQABgJgEgEQgDgDgGAAIgNAAgAiDhMIAAgTIA4AAIAAATg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-62.8,-9.6,125.7,19.3), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFWBQQgHgCgFgGQgKgKAAgUIAAhTQAAgUAKgLQAFgFAHgCQAHgDAKAAQASAAALAKQAFAGACAHQADAIAAAKIAABTQAAAKgDAHQgCAIgFAFQgGAGgHACQgGADgKAAQgKAAgHgDgAFdg3QgDADAAAJIAABXQAAAJADADQAEAEAGAAQAGAAADgEQAEgDAAgJIAAhXQAAgJgEgDQgDgEgGAAQgGAAgEAEgAGyBRIAAiKIgbAAIAAgXIBOAAIAAAXIgaAAIAACKgADyBRIAAihIAaAAIAAChgACbBRIAAihIAZAAIAAA9IAMAAQATAAAJAKQAKAJAAAUIAAAVQAAAUgKAKQgEAFgHACQgHADgKAAgAC0A6IAMAAQAGAAAEgDQACgEAAgJIAAgYQAAgIgCgEQgEgDgGAAIgMAAgABEBRIAAihIAlAAQATAAAKAKQAJAKAAAUIAAAVQAAATgJAKQgFAFgHACQgHADgKAAIgMAAIAAA9gABdgCIAMAAQAGAAADgEQADgDABgIIAAgZQgBgIgDgEQgDgDgGAAIgMAAgAAaBRIAAh0IgeB0IgbAAIAAihIAXAAIAABgIAZhgIAgAAIAAChgAheBRIAAiKIgbAAIAAgXIBPAAIAAAXIgbAAIAACKgAjKBRIAAihIAmAAQAUAAAJAKQAKAKgBAUIAAAVQABATgKAKQgFAFgHACQgHADgKAAIgLAAIAAA9gAivgCIALAAQAHAAACgEQAEgDAAgIIAAgZQAAgIgEgEQgCgDgHAAIgLAAgAjuBRIgFgeIgfAAIgFAeIgWAAIAZihIAmAAIAZChgAj2AdIgNhRIgMBRIAZAAgAmFBRIAAihIAnAAQAJAAAIACQAHACAFAFQAEAFACAGQADAHAAAKIAAAGQAAAMgEAJQgFAHgIAFQAFACAEACQAEADABAEQAFAJAAANIAAANQAAATgKAKQgFAFgGACQgIADgKAAgAlrA6IAOAAQAHAAADgEQADgDAAgJIAAgOQAAgMgDgEQgEgEgJAAIgLAAgAlrgOIAJAAQAIAAADgEQAFgDAAgKIAAgJQAAgJgDgEQgDgEgHAAIgMAAgAmrBRIgZhBIgHAPIAAAyIgZAAIAAihIAZAAIAABGIAhhGIAaAAIgkBIIAkBZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-48.5,-8.3,97.1,16.6), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg1mALaIAA2zMBrNAAAIAAWzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-343,-73,686.2,146), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AI9DCIAAmDIBaAAQAuAAAXAYQAWAYAAAwIAAAyQAAAvgWAXQgMANgRAGQgRAGgXAAIgdAAIAACSgAJ6gGIAdAAQAOAAAIgIQAIgIAAgVIAAg6QAAgVgIgIQgIgIgOAAIgdAAgAHZDCIAAkYIhMEYIg+AAIAAmDIA2AAIAADnIA/jnIBMAAIAAGDgAC2DCIAAlMIhAAAIAAg3IC9AAIAAA3IhAAAIAAFMgAhJDCIAAmDIBZAAQAuAAAXAYQAWAYAAAwIAAAyQAAAvgWAXQgMANgQAGQgSAGgXAAIgcAAIAACSgAgMgGIAcAAQAOAAAJgIQAHgIAAgVIAAg6QAAgVgHgIQgJgIgOAAIgcAAgAijDCIgKhHIhLAAIgKBHIg5AAIA/mDIBZAAIA+GDgAi1BGIgejDIgdDDIA7AAgAoLDCIAAmDIBcAAQAYAAARAFQASAGAKAKQALALAGARQAFARAAAXIAAAOQAAAegJATQgKATgVAKQANAFAJAHQAJAHAEALQALAWAAAeIAAAgQAAAtgYAYQgLALgRAGQgSAGgXAAgAnOCLIAjAAQAQAAAHgIQAJgJAAgVIAAgiQAAgbgJgKQgKgKgVAAIgbAAgAnOgjIAYAAQARAAAKgKQAJgHAAgYIAAgWQAAgWgHgJQgHgJgQAAIgeAAgAplDCIg8iaIgTAjIAAB3Ig9AAIAAmDIA9AAIAACpIBRipIA8AAIhVCsIBVDXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-75.4,-19.4,150.9,38.9), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACeDBQgQgHgMgMQgZgZAAgvIAAjKQAAgwAZgZQAMgMAQgGQASgHAXAAQAsAAAYAZQAMANAGASQAGASAAAYIAADKQAAAXgGASQgGASgMANQgMAMgQAHQgSAGgWAAQgXAAgSgGgACviGQgIAJAAAVIAADRQAAAWAIAIQAJAJAPAAQANAAAJgJQAJgIAAgWIAAjRQAAgVgJgJQgJgIgNAAQgPAAgJAIgAg8DBQgQgHgNgMQgYgZAAgvIAAjKQAAgwAYgZQANgMAQgGQASgHAWAAQArAAAZAZQAMANAGASQAFASAAAYIAADKQAAAXgFASQgGASgMANQgNAMgQAHQgRAGgWAAQgWAAgSgGgAgriGQgIAJAAAVIAADRQAAAWAIAIQAIAJAPAAQAOAAAIgJQAIgIABgWIAAjRQgBgVgIgJQgIgIgOAAQgPAAgIAIgAjzDDIAAkoIgvAAIAAgrQASAAAMgEQALgEAHgHQAIgHAEgJIAIgSIApAAIAAGEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-29.1,-19.8,58.2,39.8), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACABvIAAggIAMAAIAIgBIAGgDQADgDABgFIABgLIgyinIAjAAIAnCCIAfiCIAjAAIguCjQgGAXgGAMQgGANgHAFQgHAFgIABIgbABgABDBvIgjhZIgKAUIAABFIgjAAIAAjeIAjAAIAABhIAuhhIAjAAIgxBjIAxB7gAiBBvIAAjeIBgAAIAAAgIg9AAIAAA+IAwAAIAAAfIgwAAIAABBIA9AAIAAAggAj4BvIAAjeIA0AAQAaAAANAOQANAOAAAbIAAAdQAAAbgNANQgHAHgJAEQgKADgNAAIgRAAIAABUgAjVgEIARAAQAIAAAEgEQAFgEAAgMIAAgiQAAgMgFgFQgEgEgIAAIgRAAg");
	this.shape.setTransform(0,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-24.9,-19.3,49.8,22.4), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABZBwIgGgpIgrAAIgGApIggAAIAkjfIAzAAIAjDfgABOAoIgRhvIgRBvIAiAAgAgwBwIAAhgIgoAAIAABgIgjAAIAAjfIAjAAIAABgIAoAAIAAhgIAjAAIAADfg");
	this.shape.setTransform(0,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-12.4,-19.2,24.9,22.3), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcB9IAAgZIhZAAIAAAZIgjAAIAAg5IAMAAQAIAAAGgDQAGgFAAgNIAAipIBtAAIAAC+IASAAIAAA5gAgdAsQAAAOgDAKIAqAAIAAieIgnAAgABpBjQgKgEgHgHQgNgOAAgbIAAhzQAAgbANgPQAHgHAKgEQAKgDAMAAQAaAAAOAOQAHAHADAKQAEALAAAOIAABzQAAANgEAKQgDALgHAHQgHAHgJAEQgKADgOABQgMgBgKgDgAByhXQgEAEAAANIAAB3QAAAMAEAFQAFAFAIAAQAJAAAFgFQAFgFAAgMIAAh3QAAgNgFgEQgFgGgJAAQgIAAgFAGgAE9BkIAAifIgYCfIghAAIgaidIAACdIgfAAIAAjeIAxAAIAZCdIAYidIAxAAIAADegAiNBkIAAigIgrCgIgkAAIAAjeIAfAAIAACFIAkiFIAsAAIAADegAldBkIAAjeIA1AAQANAAAKADQAKADAGAHQAHAGADAKQADAJAAAOIAAAHQAAASgGALQgFALgMAFQAHADAFAEQAFAFADAGQAGALAAASIAAASQAAAagNANQgHAHgKADQgKAEgNAAgAk6BEIAUAAQAJAAAEgEQAFgGAAgLIAAgUQAAgQgFgGQgGgFgMAAIgPAAgAk6gfIANAAQAKAAAGgGQAGgEAAgOIAAgMQAAgMgFgGQgEgFgJAAIgRAAg");
	this.shape.setTransform(0,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-35,-20.6,70.1,25.1), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWBvQgJgFgHgGQgNgPAAgbIAAhzQAAgbANgPQAHgGAJgEQAKgEAMAAQAaAAANAOQAHAIADAKQADALAAANIAAAWIghAAIAAgYQAAgMgFgFQgEgFgJAAQgHAAgFAFQgFAFAAAMIAAB3QAAANAFAEQAFAFAHAAQAJAAAEgFQAFgEAAgNIAAgfIAhAAIAAAdQAAANgDALQgDAKgHAIQgGAGgKAFQgKADgNAAQgMAAgKgDg");
	this.shape.setTransform(0,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-5.2,-19.5,10.5,22.8), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AHJDzIAAgxIi0AAIAAmwIBEAAIAAFyIBNAAIAAlyIBFAAIAAFyIAiAAIAABvgAieC/QgSgHgOgOQgZgcAAg0IAAjgQAAg0AZgcQAOgOASgHQATgHAZAAQAyAAAaAcQANAOAGATQAGAVAAAaIAAAqIhAAAIAAguQAAgYgJgJQgJgKgRAAQgQAAgKAKQgJAJAAAYIAADoQAAAYAJAJQAKAKAQAAQARAAAJgKQAJgJAAgYIAAg+IBAAAIAAA6QAAAagGAVQgGATgNAOQgNAOgTAHQgSAHgaAAQgZAAgTgHgAK8DCIgLhPIhTAAIgMBPIg+AAIBFmwIBjAAIBFGwgAKoA4IgijZIggDZIBCAAgACgDCIAAixIgXAAQgYAAgKANQgKAMAAAfIgCBnIgFASIhFAAIAGgZIACheQAAgiAJgYQAJgXAagKQgWgLgLgWQgLgWAAghIAAgiQAAgyAYgZQAMgMATgGQATgHAbAAIBmAAIAAGwgABlilQgIAKAAAYIAAArQAAAZALAKQALAKASAAIAbAAIAAiFIghAAQgRAAgJALgAmyDCIAAmwIC5AAIAAA+Ih1AAIAAB4IBdAAIAAA9IhdAAIAAB/IB1AAIAAA+gAojDCIAAk1IgwE1IhAAAIgykxIAAExIg7AAIAAmwIBeAAIAyEyIAukyIBfAAIAAGwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-76.9,-24.3,153.9,48.6), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAODYIAAhOIiAAAIAAg+IB6kjIBLAAIAAEjIAgAAIAAA+IggAAIAABOgAgzBMIBBAAIAAifg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-11.5,-21.6,23,43.2), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E30035").s().p("AAODYIAAhOIiAAAIAAg+IB6kjIBLAAIAAEjIAgAAIAAA+IggAAIAABOgAgzBMIBBAAIAAifg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-11.5,-21.6,23,43.2), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhlDaIAAg1QABggAJgYQAJgXAQgUIBBhKQAOgUAKgYQAKgXgBgfQABgegKgKQgJgKgPAAQgQAAgKAKQgJAJgBAYIAAAuIhAAAIAAgqQABg1AZgcQANgNATgHQATgHAYAAQAxAAAaAbQANAOAGAUQAIAUAAAbQAAAjgMAdQgLAcgPAWQgRAXgSAVIghAlQgPARgJARQgHARADAUIB+AAIAAA9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-10.1,-21.8,20.3,43.7), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABuCLQgMgFgJgJQgRgSAAgiIAAiRQAAgiARgSQAJgJAMgFQAMgEAQAAQAhAAARASQAJAJAEANQAEANAAARIAACRQAAARgEANQgEANgJAJQgJAJgMAFQgMAEgRAAQgQAAgMgEgAB6hgQgGAGAAAPIAACXQAAAPAGAGQAGAGAKABQALgBAGgGQAGgGAAgPIAAiXQAAgPgGgGQgGgGgLAAQgKAAgGAGgAjDCLQgMgFgJgJQgQgSAAgiIAAiRQAAgiAQgSQAJgJAMgFQAMgEAQAAQAhAAAQASQAJAJAEANQAEANAAARIAAAbIgqAAIAAgeQAAgPgGgGQgGgGgLAAQgKAAgGAGQgGAGAAAPIAACXQAAAPAGAGQAGAGAKAAQALAAAGgGQAGgGAAgPIAAgpIAqAAIAAAmQAAARgEANQgEANgJAJQgIAJgMAFQgMAEgRAAQgQAAgMgEgAleCLQgMgFgJgJQgQgSAAgiIAAiRQAAgiAQgSQAJgJAMgFQAMgEAQAAQAhAAAQASQAJAJAEANQAEANAAARIAAAbIgqAAIAAgeQAAgPgGgGQgGgGgLAAQgKAAgGAGQgGAGAAAPIAACXQAAAPAGAGQAGAGAKAAQALAAAGgGQAGgGAAgPIAAgpIAqAAIAAAmQAAARgEANQgEANgJAJQgIAJgMAFQgMAEgRAAQgQAAgMgEgAKMCMIgIgzIg2AAIgHAzIgpAAIAtkXIBBAAIAsEXgAJ+AzIgViNIgVCNIAqAAgAHpCMIgrhvIgNAZIAABWIgsAAIAAkXIAsAAIAAB6IA6h6IArAAIg9B9IA9CagAE5CMIAAhsIgMADIgMAAQgQABgNgFQgMgEgIgKQgRgRAAgiIAAhpIAsAAIAABsQAAAPAHAGQAGAGAKAAQAKAAAGgFQAGgGABgNIAAhvIAsAAIAAEXgAhJCMIAAkXIBBAAQAgAAAQASQAQARAAAjIAAAkQAAAhgQARQgIAJgMAFQgNADgPAAIgVAAIAABqgAgdgEIAVAAQAJAAAGgGQAFgGAAgPIAAgqQAAgPgFgGQgGgFgJAAIgVAAgAnACMIgHgzIg2AAIgIAzIgoAAIAtkXIBAAAIAtEXgAnNAzIgWiNIgVCNIArAAgAq3CMIAAkXIBBAAQAhAAAQASQAQARAAAjIAAAkQAAAhgQARQgIAJgMAFQgNADgQAAIgVAAIAABqgAqLgEIAVAAQAKAAAGgGQAFgGAAgPIAAgqQAAgPgFgGQgGgFgKAAIgVAAg");
	this.shape.setTransform(0,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-69.6,-22.4,139.3,28.6), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag6EeQgbgJgQgUQgjglAAhGIAAkqQAAgkAIgaQAJgbASgTQAjgmBCABQAjAAAYAJQAaAKASASQASATAIAbQAIAaAAAkIAAEqQAABGgiAlQgSAUgaAJQgYAJgjgBQghABgZgJgAguiaIAAE3QAAAbAMAPQALAPAXgBQAWABANgNQALgPAAgdIAAk3QAAgdgLgPQgNgNgWAAQgtAAgBA5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-13.7,-29.4,27.4,58.9), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjcHGIFluLIBUAAIllOLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-22.1,-45.4,44.3,90.9), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag7EdQgYgJgSgTQgkglAAhGIAAkqQAAgjAIgaQAKgcASgTQAiglBDAAQAiAAAYAJQAbAKASASQARATAJAcQAJAaAAAjIAAEqQAABGgjAlQgSATgbAJQgYAJgiAAQghAAgagJgAguicIAAE5QAAAbAMAPQAMAOAWAAQAXAAALgOQANgNAAgdIAAk5QAAgdgNgNQgLgOgXAAQguAAAAA4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-13.8,-29.4,27.6,58.9), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcG9QgngPgbgdQg2g7ABhuIAAhMICGAAIAABUQAAAyATAUQAWATAiAAQAhAAATgTQAUgUAAgyIAAjIQAAgvgUgVQgTgUghAAQgiAAgWAUQgTAVAAAvIAAAcIiGAAIAaoOIF3AAIAACBIj4AAIgKDaQAohDBTAAQBOAAApA2QATAaAKAnQAJAnAAAxIAADLQABA3gNAqQgNArgcAdQgaAdgoAPQgpAOg0AAQgzAAgpgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-21.2,-45.9,42.5,91.9), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsUCLQgMgFgJgJQgQgSAAgiIAAgjIApAAIAAAmQAAAPAHAGQAGAGAKAAQAKAAAHgGQAGgHAAgTIAAgWQAAgTgHgIQgHgIgPAAIgHAAIAAgnIAKAAQAMAAAHgGQAHgGAAgSIAAgPQAAgTgGgGQgHgHgKAAQgKAAgGAGQgHAGAAAPIAAAeIgpAAIAAgbQAAgiAQgSQAJgJAMgFQAMgEAQAAQAhAAAQASQAJAJAEANQAEANAAARIAAAHQAAAugfAMQARAHAHAOQAHAQAAAUIAAAXQAAARgEANQgEANgJAJQgIAJgMAFQgMAEgRAAQgQAAgMgEgAKiCMIAAgoIAPABIAKgCIAIgEQADgEACgFIACgQIhAjRIAsAAIAwCjIAoijIAsAAIg5DOQgIAdgIAPQgIAPgIAGQgJAHgKABgAIACMIAAkXIBBAAQAhAAAQASQAQARAAAjIAAAkQAAAhgQARQgIAJgMAFQgNADgQAAIgVAAIAABqgAIsgEIAVAAQAKAAAGgGQAFgGAAgPIAAgqQAAgPgFgGQgGgFgKAAIgVAAgAG4CMIAAjJIg3DJIgtAAIAAkXIAoAAIAACnIAtinIA3AAIAAEXgADmCMIAAjvIguAAIAAgoICIAAIAAAoIguAAIAADvgAAuCMIAAkXIBBAAQAhAAARASQAQARAAAjIAAAkQAAAhgQARQgJAJgMAFQgMADgRAAIgVAAIAABqgABagEIAVAAQAKAAAGgGQAGgGAAgPIAAgqQAAgPgGgGQgGgFgKAAIgVAAgAgRCMIgIgzIg2AAIgHAzIgpAAIAtkXIBBAAIArEXgAgfAzIgViNIgVCNIAqAAgAkVCMIAAkXIBDAAQARAAAMAEQANAEAHAIQAIAIAEAMQAEAMAAAQIAAAKQAAAWgHAOQgHAOgPAHQAJAEAHAEQAGAFAEAIQAHAQAAAVIAAAYQAAAggRARQgIAIgMAFQgNAEgRAAgAjpBkIAZAAQAMAAAFgGQAGgGAAgPIAAgZQAAgUgGgGQgHgIgPAAIgUAAgAjpgZIARAAQANAAAHgGQAHgGAAgSIAAgPQAAgQgGgGQgFgHgLAAIgWAAgAlWCMIgrhvIgNAZIAABWIgsAAIAAkXIAsAAIAAB6IA6h6IArAAIg9B9IA9CagAo5CMIgHgzIg2AAIgIAzIgoAAIAtkXIBAAAIAtEXgApGAzIgWiNIgVCNIArAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-82.6,-14.3,165.3,28.6), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlxCnIAAgoIAPAAQAKAAAIgFQAHgFABgRIAAjUICKAAIAAEXIgsAAIAAjvIgyAAIAACpQgBAVgFAOQgFANgJAIQgJAIgLADQgMAEgMAAgAHjCnIgrhwIgNAZIAABXIgsAAIAAhXIgNgZIgrBwIgtAAIA9icIg9h7IArAAIA6B4IAAh4IAsAAIAAB4IA6h4IArAAIg9B7IA9CcgACUCnIAAkXIB3AAIAAAoIhLAAIAABNIA8AAIAAAoIg8AAIAABSIBLAAIAAAogAAmCnIAAjvIgtAAIAAgoICHAAIAAAoIguAAIAADvgAg8CnIgHgzIg2AAIgIAzIgoAAIAtkXIBAAAIAtEXgAhKBOIgViNIgVCNIAqAAgAmyCnIAAjvIgxAAIAADvIgsAAIAAkXICKAAIAAEXgADbh+IAAgpIAoAAIAAApgACbh+IAAgpIAoAAIAAApg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-52.8,-16.8,105.7,33.6), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHKCkIAAjJIg3DJIgtAAIAAkXIAoAAIAACnIAtinIA3AAIAAEXgAEbCkIAAkXIAsAAIAAEXgACDCkIAAkXIAsAAIAABpIAUAAQAiAAAQARQAQASAAAiIAAAkQAAAigQASQgIAIgNAFQgMAEgRAAgACvB8IAUAAQALAAAFgFQAGgGAAgPIAAgqQAAgPgGgGQgFgGgLAAIgUAAgAgfCkIAAkXIBCAAQARAAANAEQAMAEAIAIQAHAIAEAMQAEAMAAARIAAAKQAAAVgGAOQgHANgQAHQAJAEAHAFQAHAFADAIQAHAQAAAWIAAAXQAAAggRARQgHAJgNAEQgMAEgRAAgAANB8IAZAAQALAAAGgGQAFgGAAgPIAAgZQAAgTgGgHQgHgIgPAAIgTAAgAANgBIARAAQAMAAAHgGQAHgGAAgRIAAgQQAAgPgGgHQgEgHgMAAIgVAAgAi1CkIAAkXIBCAAQAgAAARASQAQASAAAiIAAAkQAAAhgQARQgIAJgMAFQgNAEgQAAIgWAAIAABpgAiJATIAWAAQAJAAAGgGQAGgFAAgOIAAgqQAAgPgGgGQgGgGgJAAIgWAAgAlHCkIAAkXIB4AAIAAAoIhMAAIAABNIA9AAIAAAoIg9AAIAABSIBMAAIAAAogAmTCkIAAjvIgyAAIAADvIgsAAIAAkXICLAAIAAEXgAF9iCIAAghIBhAAIAAAhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-49.8,-16.4,99.6,32.8), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-76,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-76,-23,152,46), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-115,-36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-115,-36.5,230,73), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgyKAYyMAAAgxjMBkVAAAMAAAAxjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-321.1,-158.6,642.3,317.3), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg1();
	this.instance.parent = this;
	this.instance.setTransform(-304.5,-171.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-304.5,-171.5,609,343), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg2();
	this.instance.parent = this;
	this.instance.setTransform(-311,-175.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-311,-175.5,622,351), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg3();
	this.instance.parent = this;
	this.instance.setTransform(-342.5,-192.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-342.5,-192.5,685,385), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(7));

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:10},6,cjs.Ease.get(1)).wait(1).to({y:0},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-23,152,46);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(0.1,23.3,0.62,0.62);

	this.instance_1 = new lib.Символ49();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,-30.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E40034").ss(2,1,1).p("EgpVAAAMBSrAAA");
	this.shape.setTransform(0,-9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(-265.5,-46,531.2,92), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(7));

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(0,-67.3,0.768,0.768);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},6).wait(1).to({scaleX:0.77,scaleY:0.77,alpha:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.8,-102.6,407.7,70.6);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-297,-147,598,298), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(7));

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(0,-146.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0,alpha:1},6).wait(1).to({y:-146.2,alpha:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-315.9,-304.2,631.9,316);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E30035").s().p("AI9DCIAAmDIBaAAQAuAAAXAYQAWAYAAAwIAAAyQAAAvgWAXQgMANgRAGQgRAGgXAAIgdAAIAACSgAJ6gGIAdAAQAOAAAIgIQAIgIAAgVIAAg6QAAgVgIgIQgIgIgOAAIgdAAgAHZDCIAAkYIhMEYIg+AAIAAmDIA2AAIAADnIA/jnIBMAAIAAGDgAC2DCIAAlMIhAAAIAAg3IC9AAIAAA3IhAAAIAAFMgAhJDCIAAmDIBZAAQAuAAAXAYQAWAYAAAwIAAAyQAAAvgWAXQgMANgQAGQgSAGgXAAIgcAAIAACSgAgMgGIAcAAQAOAAAJgIQAHgIAAgVIAAg6QAAgVgHgIQgJgIgOAAIgcAAgAijDCIgKhHIhLAAIgKBHIg5AAIA/mDIBZAAIA+GDgAi1BGIgejDIgdDDIA7AAgAoLDCIAAmDIBcAAQAYAAARAFQASAGAKAKQALALAGARQAFARAAAXIAAAOQAAAegJATQgKAUgVAJQANAFAJAHQAJAHAEALQALAWAAAeIAAAgQAAAtgYAYQgLALgRAGQgSAGgXAAgAnOCLIAjAAQAQAAAHgJQAJgIAAgVIAAgiQAAgbgJgKQgKgKgVAAIgbAAgAnOgjIAYAAQARAAAKgKQAJgHAAgYIAAgWQAAgWgHgJQgHgJgQAAIgeAAgAplDCIg8iaIgTAjIAAB3Ig9AAIAAmDIA9AAIAACpIBRipIA8AAIhVCsIBVDXg");
	this.shape.setTransform(0,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(0,8.9);
	this.instance.alpha = 0.699;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-77,-21,155,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-77.4,-12.6,158,46), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E30035").s().p("ACeDBQgQgHgMgMQgZgZAAgvIAAjKQAAgwAZgZQAMgMAQgGQASgHAXAAQAsAAAYAZQAMANAGASQAGASAAAYIAADKQAAAXgGASQgGASgMANQgMAMgQAHQgSAGgWAAQgXAAgSgGgACviGQgIAJAAAVIAADRQAAAWAIAIQAJAJAPAAQANAAAJgJQAJgIAAgWIAAjRQAAgVgJgJQgJgIgNAAQgPAAgJAIgAg8DBQgQgHgNgMQgYgZAAgvIAAjKQAAgwAYgZQANgMAQgGQASgHAWAAQArAAAZAZQAMANAGASQAFASAAAYIAADKQAAAXgFASQgGASgMANQgNAMgQAHQgRAGgWAAQgWAAgSgGgAgriGQgIAJAAAVIAADRQAAAWAIAIQAIAJAPAAQAOAAAIgJQAIgIABgWIAAjRQgBgVgIgJQgIgIgOAAQgPAAgIAIgAjzDDIAAkoIgvAAIAAgrQASAAAMgEQALgEAHgHQAIgHAEgJIAIgSIApAAIAAGEg");
	this.shape.setTransform(0,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(0,8.8);
	this.instance.alpha = 0.699;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-31,-22,62,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-31.1,-13,66,47), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E30035").s().p("AHJDzIAAgyIi0AAIAAmvIBEAAIAAFyIBNAAIAAlyIBFAAIAAFyIAiAAIAABvgAieC/QgSgHgOgOQgZgcAAg0IAAjgQAAg0AZgcQAOgOASgHQATgHAZAAQAyAAAaAcQANAOAGATQAGAVAAAaIAAAqIhAAAIAAguQAAgYgJgJQgJgKgRAAQgQAAgKAKQgJAJAAAYIAADoQAAAYAJAJQAKAKAQAAQARAAAJgKQAJgJAAgYIAAg+IBAAAIAAA6QAAAagGAVQgGATgNAOQgNAOgTAHQgSAHgaAAQgZAAgTgHgAK8DBIgLhOIhTAAIgMBOIg+AAIBFmvIBjAAIBFGvgAKoA4IgijZIggDZIBCAAgACgDBIAAiwIgXAAQgYAAgKANQgKAMAAAfIgCBnIgFARIhFAAIAGgYIACheQAAgiAJgYQAJgXAagKQgWgLgLgWQgLgWAAghIAAgiQAAgyAYgZQAMgMATgGQATgHAbAAIBmAAIAAGvgABlilQgIAKAAAYIAAArQAAAZALAKQALAKASAAIAbAAIAAiFIghAAQgRAAgJALgAmyDBIAAmvIC5AAIAAA+Ih1AAIAAB4IBdAAIAAA9IhdAAIAAB/IB1AAIAAA9gAojDBIAAk0IgwE0IhAAAIgykwIAAEwIg7AAIAAmvIBeAAIAyEyIAukyIBfAAIAAGvg");
	this.shape.setTransform(0,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(0,8.9);
	this.instance.alpha = 0.699;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-79,-26,158,53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-78.9,-17.4,160,56), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(0,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,8.9);
	this.instance_1.alpha = 0.699;
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-13,-24,27,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-13.5,-14.7,30,50), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E30035").s().p("AhlDaIAAg1QABggAJgYQAJgXAQgUIBBhKQAOgUAKgYQAKgXgBgfQABgegKgKQgJgKgPAAQgQAAgKAKQgJAJgBAYIAAAuIhAAAIAAgqQABg1AZgcQANgNATgHQATgHAYAAQAxAAAaAbQANAOAGAUQAIAUAAAbQAAAjgMAdQgLAcgPAWQgRAXgSAVIghAlQgPARgJARQgHARADAUIB+AAIAAA9g");
	this.shape.setTransform(0,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(0,8.8);
	this.instance.alpha = 0.699;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-12,-24,24,48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-12.1,-15,28,51), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E30035").s().p("Ag6EeQgbgJgQgUQgjglAAhGIAAkqQAAgkAIgaQAJgbASgTQAjgmBCABQAjAAAYAJQAaAKASASQASATAIAbQAIAaAAAkIAAEqQAABGgiAlQgSAUgaAJQgYAJgjgBQghABgZgJgAguiaIAAE3QAAAbAMAPQALAPAXgBQAWABANgNQALgPAAgdIAAk3QAAgdgLgPQgNgNgWAAQgtAAgBA5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(0,1.2);
	this.instance.alpha = 0.699;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-16,-31,31,63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-15.7,-30.2,34,66), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E30035").s().p("AjcHGIFluLIBUAAIllOLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(0,0.8);
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-24,-47,48,95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-24.1,-46.6,52,98), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E30035").s().p("Ag7EdQgYgJgSgTQgkglAAhGIAAkqQAAgjAIgaQAKgcASgTQAiglBDAAQAiAAAYAJQAbAKASASQARATAJAcQAJAaAAAjIAAEqQAABGgjAlQgSATgbAJQgYAJgiAAQghAAgagJgAguicIAAE5QAAAbAMAPQAMAOAWAAQAXAAALgOQANgNAAgdIAAk5QAAgdgNgNQgLgOgXAAQguAAAAA4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(0,1.2);
	this.instance.alpha = 0.699;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-16,-31,32,63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-15.8,-30.2,34,66), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E30035").s().p("AhcG9QgngPgbgdQg2g7ABhuIAAhMICGAAIAABUQAAAyATAUQAWATAiAAQAhAAATgTQAUgUAAgyIAAjIQAAgvgUgVQgTgUghAAQgiAAgWAUQgTAVAAAvIAAAcIiGAAIAaoOIF3AAIAACBIj4AAIgKDaQAohDBTAAQBOAAApA2QATAaAKAnQAJAnAAAxIAADLQABA3gNAqQgNArgcAdQgaAdgoAPQgpAOg0AAQgzAAgpgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(0,1.2);
	this.instance.alpha = 0.699;
	this.instance.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance.cache(-23,-48,47,96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-24.2,-47.7,52,101), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 42
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(166.5,1.2,1.279,1.279);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(254).to({_off:false},0).wait(1).to({regX:0.1,scaleX:0.86,scaleY:0.86,x:166.7},0).to({regX:0,scaleX:1.28,scaleY:1.28,x:166.5,alpha:1},9,cjs.Ease.get(1)).wait(40).to({regX:0.1,scaleX:0.86,scaleY:0.86,x:166.7,alpha:0},9).wait(1).to({regX:0,scaleX:1.28,scaleY:1.28,x:166.5},0).wait(1));

	// Символ 41
	this.instance_1 = new lib.Символ41();
	this.instance_1.parent = this;
	this.instance_1.setTransform(166.5,42,1.279,1.279);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(254).to({_off:false},0).wait(1).to({y:49.2},0).to({y:37.1,alpha:1},7).to({y:42},2).wait(40).to({y:37.1},2).to({y:49.2,alpha:0},7).wait(1).to({y:42},0).wait(1));

	// Символ 40
	this.instance_2 = new lib.Символ40();
	this.instance_2.parent = this;
	this.instance_2.setTransform(166.5,-41,1.279,1.279);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(254).to({_off:false},0).wait(1).to({y:-50.7},0).to({y:-36.1,alpha:1},7).to({y:-41},2).wait(40).to({y:-36.1},2).to({y:-50.7,alpha:0},7).wait(1).to({y:-41},0).wait(1));

	// Символ 36
	this.instance_3 = new lib.Символ36();
	this.instance_3.parent = this;
	this.instance_3.setTransform(229.8,35.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(166).to({_off:false},0).wait(17).to({x:225.3},0).to({x:231.6,alpha:1},5).to({x:229.8},2).wait(40).to({x:231.6},2).to({x:225.3,alpha:0},5).wait(17).to({x:229.8},0).to({_off:true},1).wait(60));

	// Символ 35
	this.instance_4 = new lib.Символ35();
	this.instance_4.parent = this;
	this.instance_4.setTransform(185.9,35.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(166).to({_off:false},0).wait(14).to({y:19.6},0).to({y:38.1,alpha:1},5).to({y:35.8},2).wait(46).to({y:38.1},2).to({y:19.6,alpha:0},5).wait(14).to({y:35.8},0).to({_off:true},1).wait(60));

	// Символ 34
	this.instance_5 = new lib.Символ34();
	this.instance_5.parent = this;
	this.instance_5.setTransform(131,37);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(166).to({_off:false},0).wait(11).to({scaleX:0.14,scaleY:0.14},0).to({scaleX:1.07,scaleY:1.07,alpha:1},5).to({scaleX:1,scaleY:1},2).wait(52).to({scaleX:1.07,scaleY:1.07},2).to({scaleX:0.14,scaleY:0.14,alpha:0},5).wait(11).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(60));

	// Символ 33
	this.instance_6 = new lib.Символ33();
	this.instance_6.parent = this;
	this.instance_6.setTransform(83.6,35.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(166).to({_off:false},0).wait(8).to({scaleX:0.35,scaleY:0.35,x:80.2,y:43.3},0).to({scaleX:1.13,scaleY:1.13,x:84.2,y:34.4,alpha:1},5).to({scaleX:1,scaleY:1,x:83.6,y:35.8},2).wait(58).to({scaleX:1.13,scaleY:1.13,x:84.2,y:34.4},2).to({scaleX:0.35,scaleY:0.35,x:80.2,y:43.3,alpha:0},5).wait(8).to({scaleX:1,scaleY:1,x:83.6,y:35.8},0).to({_off:true},1).wait(60));

	// Символ 32
	this.instance_7 = new lib.Символ32();
	this.instance_7.parent = this;
	this.instance_7.setTransform(201.8,-32);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(166).to({_off:false},0).wait(4).to({scaleX:0.15,scaleY:0.15,x:137.6,y:-15.4},0).to({scaleX:1.08,scaleY:1.08,x:207.9,y:-33.6,alpha:1},5).to({scaleX:1,scaleY:1,x:201.8,y:-32},2).wait(66).to({scaleX:1.08,scaleY:1.08,x:207.9,y:-33.6},2).to({scaleX:0.15,scaleY:0.15,x:137.6,y:-15.4,alpha:0},5).wait(4).to({scaleX:1,scaleY:1,x:201.8,y:-32},0).to({_off:true},1).wait(60));

	// Символ 31
	this.instance_8 = new lib.Символ31();
	this.instance_8.parent = this;
	this.instance_8.setTransform(84.8,-32);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(166).to({_off:false},0).wait(1).to({scaleX:1.43,scaleY:1.43,rotation:-20.5},0).to({regX:0.1,regY:-0.1,scaleX:0.92,scaleY:0.92,rotation:4.4,x:85,y:-32.1,alpha:1},5,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:84.8,y:-32},2).wait(72).to({regX:0.1,regY:-0.1,scaleX:0.92,scaleY:0.92,rotation:4.4,x:85,y:-32.1},2).to({regX:0,regY:0,scaleX:1.43,scaleY:1.43,rotation:-20.5,x:84.8,y:-32,alpha:0},5).wait(1).to({scaleX:1,scaleY:1,rotation:0},0).to({_off:true},1).wait(60));

	// Символ 26
	this.instance_9 = new lib.Символ26();
	this.instance_9.parent = this;
	this.instance_9.setTransform(166.9,33.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(94).to({_off:false},0).wait(11).to({y:45.3},0).to({y:33.1,alpha:1},7,cjs.Ease.get(1)).wait(43).to({x:289.4,alpha:0},10,cjs.Ease.get(1)).to({_off:true},2).wait(148));

	// Символ 25
	this.instance_10 = new lib.Символ25();
	this.instance_10.parent = this;
	this.instance_10.setTransform(195.9,-27.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(94).to({_off:false},0).wait(7).to({y:-39.2},0).to({y:-27.1,alpha:1},7,cjs.Ease.get(1)).wait(45).to({x:48.7,alpha:0},10,cjs.Ease.get(1)).to({_off:true},4).wait(148));

	// Символ 24
	this.instance_11 = new lib.Символ24();
	this.instance_11.parent = this;
	this.instance_11.setTransform(95,-29.3);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(94).to({_off:false},0).wait(4).to({y:-41.5},0).to({y:-29.3,alpha:1},7,cjs.Ease.get(1)).wait(46).to({x:-52.3,alpha:0},10,cjs.Ease.get(1)).to({_off:true},6).wait(148));

	// Символ 23
	this.instance_12 = new lib.Символ23();
	this.instance_12.parent = this;
	this.instance_12.setTransform(70.9,-29.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(94).to({_off:false},0).wait(1).to({y:-41.7},0).to({y:-29.5,alpha:1},7,cjs.Ease.get(1)).wait(47).to({x:-76.4,alpha:0},10,cjs.Ease.get(1)).to({_off:true},8).wait(148));

	// Символ 18
	this.instance_13 = new lib.Символ18();
	this.instance_13.parent = this;
	this.instance_13.setTransform(236.7,33.3,0.907,0.907);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(30).to({x:220.5},0).to({x:236.7,alpha:1},10).wait(44).to({x:228.6},3).to({x:281.2,alpha:0},7).to({_off:true},1).wait(220));

	// Символ 17
	this.instance_14 = new lib.Символ17();
	this.instance_14.parent = this;
	this.instance_14.setTransform(210.1,-3.1,0.907,0.907,0,0,0,0,-0.1);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(27).to({x:193.9},0).to({x:210.1,alpha:1},10).wait(45).to({x:202},3).to({x:238.4,alpha:0},7).to({_off:true},1).wait(222));

	// Символ 16
	this.instance_15 = new lib.Символ16();
	this.instance_15.parent = this;
	this.instance_15.setTransform(207.3,-36.8,0.907,0.907);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(24).to({x:191.1},0).to({x:207.3,alpha:1},10).wait(46).to({x:199.2},3).to({x:235.6,alpha:0},7).to({_off:true},1).wait(224));

	// Символ 14
	this.instance_16 = new lib.Символ14();
	this.instance_16.parent = this;
	this.instance_16.setTransform(110.3,-0.1);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10).to({x:131.9,y:-54.6},0).to({x:108.3,y:8,alpha:1},6).to({x:110.3,y:-0.1},2).wait(65).to({scaleX:1.12,scaleY:1.12,x:113.2},3).to({regX:0.1,regY:-0.1,scaleX:0.5,scaleY:0.5,x:97.8,alpha:0},7).to({_off:true},1).wait(221));

	// Символ 15
	this.instance_17 = new lib.Символ15();
	this.instance_17.parent = this;
	this.instance_17.setTransform(133.2,16.8);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(7).to({y:45.2},0).to({y:12.8,alpha:1},6).to({y:16.8},2).wait(67).to({scaleX:1.12,scaleY:1.12,x:138.7,y:18.7},3).to({regX:0.1,regY:0.1,scaleX:0.5,scaleY:0.5,x:109.4,y:8.5,alpha:0},7).to({_off:true},1).wait(222));

	// Символ 13
	this.instance_18 = new lib.Символ13();
	this.instance_18.parent = this;
	this.instance_18.setTransform(88.1,-16.8);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(4).to({y:-45.1},0).to({y:-12.7,alpha:1},6).to({y:-16.8},2).wait(69).to({scaleX:1.12,scaleY:1.12,x:88.5,y:-18.7},3).to({regX:0.1,regY:-0.1,scaleX:0.5,scaleY:0.5,x:86.6,y:-8.5,alpha:0},7).to({_off:true},1).wait(223));

	// Символ 12
	this.instance_19 = new lib.Символ12();
	this.instance_19.parent = this;
	this.instance_19.setTransform(44.5,0.3);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({scaleX:0.37,scaleY:0.37,rotation:-90,x:14.9,y:41.4},0).to({scaleX:1,scaleY:1,rotation:8.5,x:48.5,y:0.3,alpha:1},6).to({rotation:0,x:44.5},2).wait(71).to({scaleX:1.12,scaleY:1.12,x:39.8},3).to({regX:0.1,regY:0.1,scaleX:0.5,scaleY:0.5,x:64.6,y:0.2,alpha:0},7).to({_off:true},1).wait(224));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.2,-51.7,291.4,105.4);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06,alpha:0.07},14,cjs.Ease.get(-1)).to({scaleX:1.13,scaleY:1.13,alpha:0.148},15,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07,alpha:0.074},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,alpha:0},15,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.06,scaleY:1.06},14,cjs.Ease.get(-1)).to({scaleX:1.13,scaleY:1.13},15,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-36.5,230,73);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(-34.3,-42.9);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));

	// bg3.jpg
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-53},59).to({x:-80,alpha:0},30).to({_off:true},1).wait(210));

	// bg2.jpg
	this.instance_2 = new lib.Символ3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-31.5,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({x:-45.8},90).to({x:-52.9,alpha:0},30).to({_off:true},1).wait(120));

	// bg1.jpg
	this.instance_3 = new lib.Символ4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-5.9,-2.9,1.105,1.105);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(149).to({x:-52.6},90).to({x:-76.1,alpha:0},60).wait(1));

	// bg3.jpg
	this.instance_4 = new lib.Символ2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(21.2,-12.9,1.078,1.078);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(239).to({_off:false},0).to({scaleX:1,scaleY:1,x:0,y:0},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.5,-201.6,698,394.1);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.711},14,cjs.Ease.get(1)).to({alpha:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-297,-147,598,298);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(7));

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.09,scaleY:1.09,y:-13},6,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,y:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-36.5,230,73);


// stage content:
(lib.zilart600300 = function(mode,startPosition,loop) {
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
		    _this.bel.gotoAndPlay(1);
			_this.txt.gotoAndPlay(1);
			_this.btn.gotoAndPlay(1);
			_this.logo.gotoAndPlay(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.bel.gotoAndPlay(8);
			_this.txt.gotoAndPlay(8);
			_this.btn.gotoAndPlay(8);
			_this.logo.gotoAndPlay(8);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 8
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.logo = new lib.Символ52();
	this.logo.parent = this;
	this.logo.setTransform(300,41);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// Слой 2
	this.btn = new lib.Символ9();
	this.btn.parent = this;
	this.btn.setTransform(300,259.5);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Слой 9
	this.txt = new lib.Символ48();
	this.txt.parent = this;
	this.txt.setTransform(300.6,210.6);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Слой 7
	this.bel = new lib.Символ43();
	this.bel.parent = this;
	this.bel.setTransform(300.1,222.6,1,1.459,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.bel).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(301.3,146,1.028,1.028,0,0,0,167.6,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(301.1,149.1);
	this.instance_2.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(342.5,192.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(258.1,-71.4,727,606.5);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg1.jpg?1495727426943", id:"bg1"},
		{src:"images/bg2.jpg?1495727426943", id:"bg2"},
		{src:"images/bg3.jpg?1495727426943", id:"bg3"},
		{src:"images/btn.png?1495727426943", id:"btn"},
		{src:"images/logo.png?1495727426943", id:"logo"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;