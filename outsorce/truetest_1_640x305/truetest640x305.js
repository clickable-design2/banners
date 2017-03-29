(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.elvis = function() {
	this.initialize(img.elvis);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,292,314);


(lib.ivan = function() {
	this.initialize(img.ivan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,200);


(lib.jaz = function() {
	this.initialize(img.jaz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,22);


(lib.koza = function() {
	this.initialize(img.koza);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,198);


(lib.maxresdefault = function() {
	this.initialize(img.maxresdefault);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,1280);


(lib.monr = function() {
	this.initialize(img.monr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,220);


(lib.nap = function() {
	this.initialize(img.nap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,220);// helper functions:

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


(lib.Символ5333 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00FF66","#006666"],[0,1],4.8,-13.6,4.8,34.4).s().p("AscEUQhlAAAAhZIAAl1QAAhZBlAAIY5AAQBlAAAABZIAAF1QAABZhlAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5333, new cjs.Rectangle(-89.8,-27.6,179.6,55.2), null);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jaz();
	this.instance.parent = this;
	this.instance.setTransform(-11.5,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ76, new cjs.Rectangle(-11.5,-11,23,22), null);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.koza();
	this.instance.parent = this;
	this.instance.setTransform(-138,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ75, new cjs.Rectangle(-138,-99,276,198), null);


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ74, new cjs.Rectangle(-115.4,-10.9,230.9,21.9), null);


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ73, new cjs.Rectangle(-115.4,-10.9,230.9,21.9), null);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006600").s().p("AEHBPQgHgCgFgGQgFgFgCgHQgDgIAAgJIAAhTQAAgJADgIQACgIAFgFQAFgFAHgCQAIgEAJAAQAJAAAHAEQAHACAFAFQAFAFADAIQACAIAAAJIAABTQAAAJgCAIQgDAHgFAFQgFAGgHACQgHAEgJAAQgJAAgIgEgAEOg3QgDAEAAAJIAABVQAAAJADAEQADADAHAAQAGAAADgDQAEgEAAgJIAAhVQAAgJgEgEQgDgDgGAAQgHAAgDADgAjKBPQgHgCgFgGQgFgFgDgHQgCgIAAgJIAAhTQAAgJACgIQADgIAFgFQAFgFAHgCQAHgEAJAAQAKAAAHAEQAHACAFAFQAFAFACAIQADAIAAAJIAABTQAAAJgDAIQgCAHgFAFQgFAGgHACQgHAEgKAAQgJAAgHgEgAjDg3QgEAEAAAJIAABVQAAAJAEAEQADADAGAAQAHAAADgDQADgEAAgJIAAhVQAAgJgDgEQgDgDgHAAQgGAAgDADgADHBQIAAhEIgcAAIAABEIgaAAIAAifIAaAAIAABEIAcAAIAAhEIAaAAIAACfgABmBQIAAhBQgEAFgGADQgGABgGAAQgHABgGgDQgGgDgEgFQgEgFgCgGQgCgGAAgJIAAhDIAZAAIAABCQAAAHAFAEQADAEAHAAQAGAAADgEQAEgEAAgIIAAhBIAZAAIAACfgAghBQIAAifIBEAAIAAAWIgrAAIAAAtIAiAAIAAAXIgiAAIAAAvIArAAIAAAWgAhNBQIAAhEIgdAAIAABEIgZAAIAAifIAZAAIAABEIAdAAIAAhEIAaAAIAACfgAkDBQIgZhAIgIAPIAAAxIgZAAIAAifIAZAAIAABFIAhhFIAaAAIgkBHIAkBYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ70, new cjs.Rectangle(-31.8,-8.2,63.7,16.5), null);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEHBPQgHgCgFgGQgFgFgCgHQgDgIAAgJIAAhTQAAgJADgIQACgIAFgFQAFgFAHgCQAIgEAJAAQAJAAAHAEQAHACAFAFQAFAFADAIQACAIAAAJIAABTQAAAJgCAIQgDAHgFAFQgFAGgHACQgHAEgJAAQgJAAgIgEgAEOg3QgDAEAAAJIAABVQAAAJADAEQADADAHAAQAGAAADgDQAEgEAAgJIAAhVQAAgJgEgEQgDgDgGAAQgHAAgDADgAjKBPQgHgCgFgGQgFgFgDgHQgCgIAAgJIAAhTQAAgJACgIQADgIAFgFQAFgFAHgCQAHgEAJAAQAKAAAHAEQAHACAFAFQAFAFACAIQADAIAAAJIAABTQAAAJgDAIQgCAHgFAFQgFAGgHACQgHAEgKAAQgJAAgHgEgAjDg3QgEAEAAAJIAABVQAAAJAEAEQADADAGAAQAHAAADgDQADgEAAgJIAAhVQAAgJgDgEQgDgDgHAAQgGAAgDADgADHBQIAAhEIgcAAIAABEIgaAAIAAifIAaAAIAABEIAcAAIAAhEIAaAAIAACfgABmBQIAAhBQgEAFgGADQgGABgGAAQgHABgGgDQgGgDgEgFQgEgFgCgGQgCgGAAgJIAAhDIAZAAIAABCQAAAHAFAEQADAEAHAAQAGAAADgEQAEgEAAgIIAAhBIAZAAIAACfgAghBQIAAifIBEAAIAAAWIgrAAIAAAtIAiAAIAAAXIgiAAIAAAvIArAAIAAAWgAhNBQIAAhEIgdAAIAABEIgZAAIAAifIAZAAIAABEIAdAAIAAhEIAaAAIAACfgAkDBQIgZhAIgIAPIAAAxIgZAAIAAifIAZAAIAABFIAhhFIAaAAIgkBHIAkBYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ69, new cjs.Rectangle(-31.8,-8.2,63.7,16.5), null);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C0030").s().p("AH+BgQgHgCgFgGQgFgEgCgIQgDgIAAgJIAAhTQAAgJADgIQACgIAFgFQAFgFAHgCQAIgEAJAAQAJAAAHAEQAHACAFAFQAFAFADAIQACAIAAAJIAABTQAAAJgCAIQgDAIgFAEQgFAGgHACQgHADgJABQgJgBgIgDgAIFgmQgDAEAAAJIAABVQAAAJADAEQADADAHABQAGgBADgDQAEgEAAgJIAAhVQAAgJgEgEQgDgDgGAAQgHAAgDADgAFGBgQgHgCgFgGQgFgEgCgIQgDgIAAgJIAAhTQAAgJADgIQACgIAFgFQAFgFAHgCQAIgEAJAAQAJAAAHAEQAHACAFAFQAFAFADAIQACAIAAAJIAABTQAAAJgCAIQgDAIgFAEQgFAGgHACQgHADgJABQgJgBgIgDgAFNgmQgDAEAAAJIAABVQAAAJADAEQADADAHABQAGgBADgDQAEgEAAgJIAAhVQAAgJgEgEQgDgDgGAAQgHAAgDADgAAsBgQgHgCgFgGQgFgEgCgIQgCgIAAgJIAAgSIAYAAIAAATQAAAJADAEQADADAHABQAGgBADgDQAEgFAAgKIAAgMQAAgMgEgEQgEgFgJAAIgGAAIAAgXIAIAAQAHAAAEgDQAEgDAAgKIAAgJQAAgKgEgFQgDgDgGAAQgHAAgDADQgEAEAAAJIAAAMIgXAAIAAgLQAAgKACgHQADgIAEgFQAFgFAHgDQAHgCAJgBQAKAAAHAEQAHACAEAFQAFAFADAIQACAIAAAJIAAAEQAAAOgEAHQgFAIgJAEQAFACADADQAEADACAEQAEAJAAAMIAAANQAAAJgCAIQgDAIgFAEQgEAGgHACQgHADgKABQgJgBgHgDgAloBgQgHgCgFgGQgFgEgCgIQgDgIAAgJIAAhTQAAgJADgIQACgIAFgFQAFgFAHgCQAIgEAJAAQAJAAAHAEQAHACAFAFQAFAFADAIQACAIAAAJIAABTQAAAJgCAIQgDAIgFAEQgFAGgHACQgHADgJABQgJgBgIgDgAlhgmQgDAEAAAJIAABVQAAAJADAEQADADAHABQAGgBADgDQAEgEAAgJIAAhVQAAgJgEgEQgDgDgGAAQgHAAgDADgAGNBhIAAigIAnAAQAJAAAIADQAHACAEAEQAFAGACAGQACAHAAAKIAAAFQAAANgEAHQgEAIgIAEQAFACAEADIAFAHQAFAJAAANIAAANQAAAJgDAIQgCAHgFAEQgFAFgHADQgHACgKAAgAGnBLIAOAAQAHgBADgDQADgDAAgKIAAgOQAAgKgDgFQgEgEgJAAIgLAAgAGnACIAKAAQAHAAAEgDQAEgDAAgKIAAgJQAAgIgDgFQgDgEgHAAIgMAAgAEGBhIAAhEIgcAAIAABEIgaAAIAAigIAaAAIAABEIAcAAIAAhEIAaAAIAACggACrBhIgEgdIgfAAIgFAdIgXAAIAaigIAlAAIAaCggACLAvIAYAAIgMhRgAgzBhIAAhwIggBwIgaAAIAAigIAXAAIAABmIAehmIAcAAIAACggAirBhIAAiJIgaAAIAAgXIBOAAIAAAXIgbAAIAACJgAjnBhIAAhwIggBwIgaAAIAAigIAXAAIAABmIAehmIAcAAIAACggAnSBhIAAigIAlAAQAKAAAHADQAHACAFAGQAEAEADAIQACAIAAAKIAAAUQAAAJgCAHQgDAIgEAEQgFAGgHACQgHADgKAAIgMAAIAAA8gAm5AOIAMAAQAHAAACgDQAEgEAAgHIAAgYQAAgIgEgFQgCgDgHAAIgMAAgAn+BhIAAiJIgdAAIAACJIgZAAIAAigIBQAAIAACggAkEhLQgFgBgDgDQgDgEgCgFIgCgLIAQAAQABAHACACQADACAFAAQAGAAACgCQADgCAAgHIAQAAQAAAHgCAEQgCAFgDAEQgDADgFABQgFACgHAAQgHAAgFgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ65, new cjs.Rectangle(-56.5,-9.9,113.1,19.9), null);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AH+BgQgHgCgFgGQgFgEgCgIQgDgIAAgJIAAhTQAAgJADgIQACgIAFgFQAFgFAHgCQAIgEAJAAQAJAAAHAEQAHACAFAFQAFAFADAIQACAIAAAJIAABTQAAAJgCAIQgDAIgFAEQgFAGgHACQgHADgJABQgJgBgIgDgAIFgmQgDAEAAAJIAABVQAAAJADAEQADADAHABQAGgBADgDQAEgEAAgJIAAhVQAAgJgEgEQgDgDgGAAQgHAAgDADgAFGBgQgHgCgFgGQgFgEgCgIQgDgIAAgJIAAhTQAAgJADgIQACgIAFgFQAFgFAHgCQAIgEAJAAQAJAAAHAEQAHACAFAFQAFAFADAIQACAIAAAJIAABTQAAAJgCAIQgDAIgFAEQgFAGgHACQgHADgJABQgJgBgIgDgAFNgmQgDAEAAAJIAABVQAAAJADAEQADADAHABQAGgBADgDQAEgEAAgJIAAhVQAAgJgEgEQgDgDgGAAQgHAAgDADgAAsBgQgHgCgFgGQgFgEgCgIQgCgIAAgJIAAgSIAYAAIAAATQAAAJADAEQADADAHABQAGgBADgDQAEgFAAgKIAAgMQAAgMgEgEQgEgFgJAAIgGAAIAAgXIAIAAQAHAAAEgDQAEgDAAgKIAAgJQAAgKgEgFQgDgDgGAAQgHAAgDADQgEAEAAAJIAAAMIgXAAIAAgLQAAgKACgHQADgIAEgFQAFgFAHgDQAHgCAJgBQAKAAAHAEQAHACAEAFQAFAFADAIQACAIAAAJIAAAEQAAAOgEAHQgFAIgJAEQAFACADADQAEADACAEQAEAJAAAMIAAANQAAAJgCAIQgDAIgFAEQgEAGgHACQgHADgKABQgJgBgHgDgAloBgQgHgCgFgGQgFgEgCgIQgDgIAAgJIAAhTQAAgJADgIQACgIAFgFQAFgFAHgCQAIgEAJAAQAJAAAHAEQAHACAFAFQAFAFADAIQACAIAAAJIAABTQAAAJgCAIQgDAIgFAEQgFAGgHACQgHADgJABQgJgBgIgDgAlhgmQgDAEAAAJIAABVQAAAJADAEQADADAHABQAGgBADgDQAEgEAAgJIAAhVQAAgJgEgEQgDgDgGAAQgHAAgDADgAGNBhIAAigIAnAAQAJAAAIADQAHACAEAEQAFAGACAGQACAHAAAKIAAAFQAAANgEAHQgEAIgIAEQAFACAEADIAFAHQAFAJAAANIAAANQAAAJgDAIQgCAHgFAEQgFAFgHADQgHACgKAAgAGnBLIAOAAQAHgBADgDQADgDAAgKIAAgOQAAgKgDgFQgEgEgJAAIgLAAgAGnACIAKAAQAHAAAEgDQAEgDAAgKIAAgJQAAgIgDgFQgDgEgHAAIgMAAgAEGBhIAAhEIgcAAIAABEIgaAAIAAigIAaAAIAABEIAcAAIAAhEIAaAAIAACggACrBhIgEgdIgfAAIgFAdIgXAAIAaigIAlAAIAaCggACLAvIAYAAIgMhRgAgzBhIAAhwIggBwIgaAAIAAigIAXAAIAABmIAehmIAcAAIAACggAirBhIAAiJIgaAAIAAgXIBOAAIAAAXIgbAAIAACJgAjnBhIAAhwIggBwIgaAAIAAigIAXAAIAABmIAehmIAcAAIAACggAnSBhIAAigIAlAAQAKAAAHADQAHACAFAGQAEAEADAIQACAIAAAKIAAAUQAAAJgCAHQgDAIgEAEQgFAGgHACQgHADgKAAIgMAAIAAA8gAm5AOIAMAAQAHAAACgDQAEgEAAgHIAAgYQAAgIgEgFQgCgDgHAAIgMAAgAn+BhIAAiJIgdAAIAACJIgZAAIAAigIBQAAIAACggAkEhLQgFgBgDgDQgDgEgCgFIgCgLIAQAAQABAHACACQADACAFAAQAGAAACgCQADgCAAgHIAQAAQAAAHgCAEQgCAFgDAEQgDADgFABQgFACgHAAQgHAAgFgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ64, new cjs.Rectangle(-56.5,-9.9,113.1,19.9), null);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AscEUQhlAAAAhZIAAl1QAAhZBlAAIY5AAQBlAAAABZIAAF1QAABZhlAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(-89.8,-27.6,179.6,55.2), null);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CE0045","#88002E"],[0,1],0.5,-3.2,0.5,23.9).s().p("AscEUQhlAAAAhZIAAl1QAAhZBlAAIY5AAQBlAAAABZIAAF1QAABZhlAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(-89.8,-27.6,179.6,55.2), null);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ57, new cjs.Rectangle(-64.5,-29.3,129.1,58.7), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlvEhQgLgEgGgIQgHgHgEgLQgDgLAAgNIAAgaIAjAAIAAAcQAAAMAFAFQAEAGAKAAQAJAAAFgGQAFgGAAgPIAAgSQAAgQgGgHQgGgHgMAAIgKAAIAAghIAMAAQALAAAFgFQAGgGAAgOIAAgNQAAgOgFgHQgFgFgJAAQgKAAgFAFQgFAFAAANIAAATIghAAIAAgSQAAgOADgKQADgLAHgIQAGgHALgEQAKgEAOAAQANAAAKAFQALADAGAHQAHAIAEALQADALAAAOIAAAGQAAATgGAMQgGALgNAGQAGADAFAFQAFAFADAGQAGAMAAASIAAATQAAANgDALQgEALgHAHQgGAIgLAEQgKAEgNAAQgOAAgKgEgAkBEiIAAggQAPABAHgDQAIgFACgMIABgCIgzi0IAlAAIAfCGIAZiGIAmAAIgnCuQgDARgFALQgFAMgIAHQgIAHgNAEQgIACgMAAIgMgBgAIjEiIAAgjIAkAAIAAAjgAGwEiIAAjIIgmAAIAAghIBxAAIAAAhIgnAAIAADIgAFeEiIgGgqIgtAAIgHAqIghAAIAmjpIA1AAIAlDpgAFTDZIgSh3IgRB3IAjAAgACzEiIAAjIIgnAAIAAghIBxAAIAAAhIgmAAIAADIgAAUEiIAAjpIAlAAIAABYIARAAQAOAAAKADQAKAEAIAHQAGAIAEAKQADALAAAOIAAAeQAAAPgDALQgEAKgGAIQgIAHgKAEQgKADgOAAgAA5EBIARAAQAKAAADgFQAFgFAAgMIAAgjQAAgMgFgFQgDgFgKAAIgRAAgAgsEiIAAjIIggAAIgECOQAAAQgEALQgDALgHAHQgGAHgKAEQgKACgNAAIgGAAIAAghQANAAAEgEQAFgEAAgQIAHiwIBnAAIAADpgAoHEiIAAjpIBkAAIAAAhIg/AAIAABCIAyAAIAAAhIgyAAIAABEIA/AAIAAAhgAqEEiIAAjpIA2AAQAOAAAKAEQAKADAIAIQAGAHAEALQADALAAAOIAAAeQAAAOgDALQgEAKgGAIQgIAIgKADQgKAEgOAAIgRAAIAABXgApfCpIARAAQAKAAADgFQAFgFAAgLIAAgkQAAgLgFgGQgDgFgKAAIgRAAgAIlDvQgCgHAAgHQAAgaAUgdQAJgOAFgKIAEgQIACgTQAAgNgFgFQgEgFgKAAQgIAAgFAFQgFAFAAANIAAAZIgjAAIAAgXQAAgOAEgLQAEgLAGgIQAHgHAKgDQAKgFAOAAQANAAAKAFQAKADAHAHQAHAIADALQADALAAAOQAAALgBAJIgFASQgEAKgLAPQgWAcAAAWIABANgAnWg6QgKgDgIgIQgGgIgEgKQgDgLAAgOIAAh6QAAgOADgKQAEgLAGgIQAIgIAKgDQAKgEAOAAQANAAAKAEQALADAGAIQAHAIADALQAEAKAAAOIAAAXIgjAAIAAgZQAAgMgFgFQgEgGgKAAQgJAAgEAGQgFAFAAAMIAAB+QAAAMAFAFQAEAGAJAAQAKAAAEgGQAFgFAAgMIAAghIAjAAIAAAfQAAAOgEALQgDAKgHAIQgGAIgLADQgKAFgNAAQgOAAgKgFgApyg4IAAghQAOACAIgEQAIgEACgNIABgCIgzi0IAkAAIAfCGIAaiGIAmAAIgnCuQgEARgFALQgFAMgHAHQgJAIgMADQgJACgLAAIgMAAgAI7g4IAAjIIgnAAIAAgiIBxAAIAAAiIgmAAIAADIgAGkg4IAAjqIBkAAIAAAiIg/AAIAABBIAyAAIAAAhIgyAAIAABEIA/AAIAAAigAFug4IgGgqIgtAAIgHAqIghAAIAmjqIA1AAIAlDqgAFjiCIgSh2IgRB2IAjAAgACWg4IAAjqIA3AAQAOAAALAEQAKADAHAGQAGAIADAJQAEAKAAAOIAAAIQAAATgGALQgGAMgMAFQAHADAGAFQAEAEAEAHQAGAMAAATIAAAUQAAANgDAKQgEALgHAGQgHAHgLAEQgKAEgNAAgAC7haIAVAAQAJAAAEgFQAFgFAAgNIAAgUQAAgQgFgHQgFgFgNAAIgQAAgAC7jDIAOAAQALAAAFgFQAGgGAAgNIAAgNQAAgNgFgFQgEgGgKAAIgRAAgABbg4IAAilIguClIglAAIAAjqIAhAAIAACUIAriUIAoAAIAADqgAgtg4IgHgqIgsAAIgHAqIghAAIAljqIA2AAIAlDqgAg5iCIgRh2IgRB2IAiAAgAj8g4IAAjqIA2AAQAOAAAKAEQAKAEAHAIQAHAGAEAMQACAKAAAOIAAAeQAAAPgCAKQgEALgHAHQgHAIgKADQgKAEgOAAIgRAAIAABYgAjXixIARAAQAKAAADgFQAFgFAAgMIAAgkQAAgLgFgGQgDgEgKAAIgRAAgAlWg4IAAjIIgmAAIAAgiIBxAAIAAAiIgnAAIAADIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(-64.5,-29.3,129.1,58.7), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AixBRIBqAAIAAmjICPAAIAAGjIBqAAIiyECg");
	this.shape.setTransform(0,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-17.8,-27.6,35.6,67.7), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.koza();
	this.instance.parent = this;
	this.instance.setTransform(123,-88.2,0.891,0.891,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(-122.9,-88.2,245.9,176.4), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ANpBgQgHgCgFgGQgEgEgDgIQgCgIAAgJIAAgSIAYAAIAAATQAAAJADAEQADADAHABQAGgBADgDQAEgFAAgKIAAgMQAAgMgEgEQgEgFgIAAIgHAAIAAgXIAIAAQAIAAADgDQAEgDAAgKIAAgJQAAgKgEgFQgDgDgGAAQgHAAgDADQgEAEABAJIAAAMIgYAAIAAgLQAAgKACgHQADgIAEgFQAFgFAHgDQAIgCAIgBQAKAAAHAEQAHACAEAFQAGAFACAIQACAIAAAJIAAAEQAAAOgEAHQgFAIgIAEQAEACADADQAEADACAEQAEAJAAAMIAAANQAAAJgCAIQgCAIgGAEQgEAGgHACQgHADgKABQgIgBgIgDgAGbBgQgGgCgFgGQgFgEgDgIQgDgIABgJIAAhTQgBgJADgIQADgIAFgFQAFgFAGgCQAIgEAJAAQAJAAAIAEQAGACAFAFQAFAFADAIQACAIAAAJIAABTQAAAJgCAIQgDAIgFAEQgFAGgGACQgIADgJABQgJgBgIgDgAGigmQgDAEAAAJIAABVQAAAJADAEQADADAHABQAGgBADgDQAEgEAAgJIAAhVQAAgJgEgEQgDgDgGAAQgHAAgDADgABPBgQgHgCgFgGQgFgEgDgIQgCgIAAgJIAAhTQAAgJACgIQADgIAFgFQAFgFAHgCQAHgEAJAAQAKAAAHAEQAHACAFAFQAFAFACAIQADAIAAAJIAABTQAAAJgDAIQgCAIgFAEQgFAGgHACQgHADgKABQgJgBgHgDgABWgmQgEAEABAJIAABVQgBAJAEAEQADADAGABQAHgBADgDQAEgEAAgJIAAhVQAAgJgEgEQgDgDgHAAQgGAAgDADgASFBhIAAgYIAZAAIAAAYgARMBhIAAhwIggBwIgaAAIAAigIAXAAIAABmIAdhmIAcAAIAACggAPmBhIAAhEIgdAAIAABEIgZAAIAAigIAZAAIAABEIAdAAIAAhEIAaAAIAACggAMtBhIAAhwIggBwIgaAAIAAigIAXAAIAABmIAdhmIAcAAIAACggALPBhIgXhHIgHANIAAA6IgZAAIAAg6IgFgNIgYBHIgaAAIAgheIgghCIAaAAIAdBBIAAhBIAZAAIAABBIAehBIAaAAIgfBBIAfBfgAIcBhIAAhwIggBwIgaAAIAAigIAYAAIAABmIAdhmIAcAAIAACggAFaBhIAAiJIgVAAIgDBhQAAALgDAIQgCAHgFAFQgEAFgHACQgHACgJAAIgEAAIAAgWQAJgBADgCQADgDAAgLIAFh5IBIAAIAACggACWBhIAAigIAZAAIAACKIAWAAIAAiKIAZAAIAACKIAXAAIAAiKIAZAAIAACggAgbBhIAAigIAlAAQAKAAAGADQAHACAGAGQAEAEADAIQACAIAAAKIAAAUQAAAJgCAHQgDAIgEAEQgGAGgHACQgGADgKAAIgLAAIAAA8gAgBAOIALAAQAHAAACgDQADgEABgHIAAgYQgBgIgDgFQgCgDgHAAIgLAAgAhGBhIAAiJIgdAAIAACJIgZAAIAAigIBPAAIAACggAj9BhIAAigIAnAAQAJAAAHADQAIACAEAEQAFAGABAGQADAHAAAKIAAAFQAAANgEAHQgEAIgIAEQAFACAEADIAFAHQAEAJAAANIAAANQAAAJgCAIQgDAHgEAEQgFAFgHADQgIACgJAAgAjkBLIAPAAQAHgBADgDQADgDAAgKIAAgOQAAgKgDgFQgFgEgIAAIgMAAgAjkACIAKAAQAIAAADgDQAFgDAAgKIAAgJQAAgIgDgFQgEgEgHAAIgMAAgAlOBhIAAiJIgVAAIgDBhQgBALgCAIQgCAHgEAFQgFAFgHACQgHACgJAAIgEAAIAAgWQAJgBADgCQADgDABgLIAEh5IBHAAIAACggAm0BhIAAigIAaAAIAACggAoNBhIAAigIAaAAIAAA9IALAAQAKAAAHACQAHACAFAFQAEAFADAIQACAHAAAKIAAAVQAAAKgCAHQgDAHgEAFQgFAFgHADQgHACgKAAgAnzBLIALAAQAHgBACgDQAEgDAAgJIAAgYQAAgIgEgEQgCgDgHAAIgLAAgAprBhIAAigIBGAAIAAAXIguAAIAAApIAPAAQAKAAAHADQAHACAFAFQAFAFACAHQADAIgBAJIAAASQABAKgDAHQgCAHgFAFQgFAFgHADQgHACgKAAgApTBLIAPAAQAHgBADgDQADgDAAgJIAAgUQAAgIgDgEQgDgDgHgBIgPAAgAq7BhIAAigIAaAAIAACggAsUBhIAAigIAZAAIAAA9IAMAAQAJAAAIACQAGACAFAFQAFAFADAIQABAHAAAKIAAAVQAAAKgBAHQgDAHgFAFQgFAFgGADQgIACgJAAgAr7BLIAMAAQAHgBACgDQAEgDgBgJIAAgYQABgIgEgEQgCgDgHAAIgMAAgAtSBhIAAiJIgbAAIAAgXIBOAAIAAAXIgaAAIAACJgAuzBhIAAhyIgSByIgXAAIgUhwIAABwIgWAAIAAigIAkAAIASByIAShyIAjAAIAACggAxaBhIAAigIBFAAIAAAXIgsAAIAAAsIAjAAIAAAYIgjAAIAAAvIAsAAIAAAWgAx/BhIgYhAIgIAPIAAAxIgaAAIAAigIAaAAIAABFIAhhFIAZAAIgkBHIAkBZgASGA+QgBgEAAgGQAAgSAOgUIAKgPIACgLIACgNQAAgJgDgEQgDgDgHAAQgGAAgDADQgEAEAAAJIAAARIgXAAIAAgQQAAgJACgIQADgIAEgFQAFgFAHgCQAHgEAJAAQAJAAAHAEQAHACAFAFQAFAFACAIQACAIAAAJIgBAOIgEALQgDAIgHAKQgPATAAAPIABAJgAH/hLQgEgBgEgDQgDgEgBgFIgCgLIAPAAQABAHADACQACACAFAAQAGAAACgCQADgCABgHIAPAAQAAAHgCAEQgCAFgCAEQgEADgFABQgFACgHAAQgGAAgGgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-121,-9.9,242,19.9), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB713").s().p("ANpBgQgHgCgFgGQgEgEgDgIQgCgIAAgJIAAgSIAYAAIAAATQAAAJADAEQADADAHABQAGgBADgDQAEgFAAgKIAAgMQAAgMgEgEQgEgFgIAAIgHAAIAAgXIAIAAQAIAAADgDQAEgDAAgKIAAgJQAAgKgEgFQgDgDgGAAQgHAAgDADQgEAEABAJIAAAMIgYAAIAAgLQAAgKACgHQADgIAEgFQAFgFAHgDQAIgCAIgBQAKAAAHAEQAHACAEAFQAGAFACAIQACAIAAAJIAAAEQAAAOgEAHQgFAIgIAEIAEACIADADQAEADACAEQAEAJAAAMIAAANQAAAJgCAIQgCAIgGAEQgEAGgHACQgHADgKABQgIgBgIgDgAGbBgQgGgCgFgGQgFgEgDgIQgDgIABgJIAAhTQgBgJADgIQADgIAFgFQAFgFAGgCQAIgEAJAAQAJAAAIAEQAGACAFAFQAFAFADAIQACAIAAAJIAABTQAAAJgCAIQgDAIgFAEQgFAGgGACQgIADgJABQgJgBgIgDgAGigmQgDAEAAAJIAABVQAAAJADAEQADADAHABQAGgBADgDQAEgEAAgJIAAhVQAAgJgEgEQgDgDgGAAQgHAAgDADgABPBgQgHgCgFgGQgFgEgDgIQgCgIAAgJIAAhTQAAgJACgIQADgIAFgFQAFgFAHgCQAHgEAJAAQAKAAAHAEQAHACAFAFQAFAFACAIQADAIAAAJIAABTQAAAJgDAIQgCAIgFAEQgFAGgHACQgHADgKABQgJgBgHgDgABWgmQgEAEABAJIAABVQgBAJAEAEQADADAGABQAHgBADgDQAEgEAAgJIAAhVQAAgJgEgEQgDgDgHAAQgGAAgDADgASFBhIAAgYIAZAAIAAAYgARMBhIAAhwIggBwIgaAAIAAigIAXAAIAABmIAdhmIAcAAIAACggAPmBhIAAhEIgdAAIAABEIgZAAIAAigIAZAAIAABEIAdAAIAAhEIAaAAIAACggAMtBhIAAhwIggBwIgaAAIAAigIAXAAIAABmIAdhmIAcAAIAACggALPBhIgXhHIgHANIAAA6IgZAAIAAg6IgFgNIgYBHIgaAAIAgheIgghCIAaAAIAdBBIAAhBIAZAAIAABBIAehBIAaAAIgfBBIAfBfgAIcBhIAAhwIggBwIgaAAIAAigIAYAAIAABmIAdhmIAcAAIAACggAFaBhIAAiJIgVAAIgDBhQAAALgDAIQgCAHgFAFQgEAFgHACQgHACgJAAIgEAAIAAgWQAJgBADgCQADgDAAgLIAFh5IBIAAIAACggACWBhIAAigIAZAAIAACKIAWAAIAAiKIAZAAIAACKIAXAAIAAiKIAZAAIAACggAgbBhIAAigIAlAAQAKAAAGADQAHACAGAGQAEAEADAIQACAIAAAKIAAAUQgBAIgBAHIAAABIgBABIgBADIgFAIQgGAGgHACQgGADgKAAIgLAAIAAA8gAgBAOIALAAQAEAAADgBIACgCQADgEABgHIAAgYQgBgIgDgFQgCgDgHAAIgLAAgAhGBhIAAiJIgdAAIAACJIgZAAIAAigIBPAAIAACggAj9BhIAAigIAnAAQAJAAAHADQAIACAEAEQAFAGABAGQADAHAAAKIAAAFQAAANgEAHQgEAIgIAEIACABIAFACIACACIAAABIAFAGQAEAJAAANIAAANQAAAJgCAIQgDAHgEAEQgFAFgHADQgIACgJAAgAjkBLIAPAAQAHgBADgDQADgDAAgKIAAgOQAAgKgDgFQgFgEgIAAIgMAAgAjkACIAKAAQAIAAADgDQAFgDAAgKIAAgJQAAgIgDgFQgEgEgHAAIgMAAgAlOBhIAAiJIgVAAIgDBhQgBALgCAIQgCAHgEAFQgFAFgHACQgHACgJAAIgEAAIAAgWQAJgBADgCQADgDABgLIAEh5IBHAAIAACggAm0BhIAAigIAaAAIAACggAoNBhIAAigIAaAAIAAA9IALAAQAKAAAHACQAHACAFAFIAEAGIABACIABADIABACQACAHAAAKIAAAVQAAAKgCAHQgDAHgEAFQgFAFgHADQgHACgKAAgAnzBLIALAAQAHgBACgDQAEgDAAgJIAAgYQAAgIgEgEQgCgDgHAAIgLAAgAprBhIAAigIBGAAIAAAXIguAAIAAApIAPAAQAKAAAHADQAHACAFAFIABACIADACIABADIACAFQADAIgBAJIAAASQABAKgDAHQgCAHgFAFQgFAFgHADQgHACgKAAgApTBLIAPAAQAHgBADgDQADgDAAgJIAAgUQAAgIgDgEQgDgDgHgBIgPAAgAq7BhIAAigIAaAAIAACggAsUBhIAAigIAZAAIAAA9IAMAAQAJAAAIACQAGACAFAFIAEAGIACACIABADIABACQABAHAAAKIAAAVQAAAKgBAHQgDAHgFAFQgFAFgGADQgIACgJAAgAr7BLIAMAAQAHgBACgDQAEgDgBgJIAAgYQABgIgEgEQgCgDgHAAIgMAAgAtSBhIAAiJIgbAAIAAgXIBOAAIAAAXIgaAAIAACJgAuzBhIAAhyIgSByIgXAAIgUhwIAABwIgWAAIAAigIAkAAIASByIAShyIAjAAIAACggAxaBhIAAigIBFAAIAAAXIgsAAIAAAsIAjAAIAAAYIgjAAIAAAvIAsAAIAAAWgAx/BhIgYhAIgIAPIAAAxIgaAAIAAigIAaAAIAABFIAhhFIAZAAIgkBHIAkBZgASGA+QgBgEAAgGQAAgQALgSIACgDIABgBIABgBIAJgOIACgLIACgNQAAgJgDgEQgDgDgHAAQgGAAgDADQgEAEAAAJIAAARIgXAAIAAgQQAAgJACgIQADgIAEgFQAFgFAHgCQAHgEAJAAQAJAAAHAEQAHACAFAFQAFAFACAIQACAIAAAJIgBAOIgEALIgGAMIgCACIgCADIAAABQgPATAAAPIABAJgAH/hLQgEgBgEgDQgDgEgBgFIgCgLIAPAAQABAHADACQACACAFAAQAGAAACgCQADgCABgHIAPAAQAAAHgCAEQgCAFgCAEQgEADgFABQgFACgHAAQgGAAgGgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-121,-9.9,242,19.9), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elvis();
	this.instance.parent = this;
	this.instance.setTransform(135,-164);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(135,-164,292,314), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ivan();
	this.instance.parent = this;
	this.instance.setTransform(-293,-109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-293,-109,186,200), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.monr();
	this.instance.parent = this;
	this.instance.setTransform(-102.5,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-102.5,-110,205,220), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nap();
	this.instance.parent = this;
	this.instance.setTransform(-52,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-52,-110,128,220), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.maxresdefault();
	this.instance.parent = this;
	this.instance.setTransform(-640,-606);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-640,-606,1280,1280), null);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgODCQghgDgdgRQh8hEAIiHQABgIgCgGQgFgWAKgUQARgjAbABIACgCQAJgIAMACQAMACAMADQAPgUAcgCIAKABQgBgmAxgMQAZAAAMAWQANAWARARQAxAtAbA6QBCASgYA8QgKAZgUASQgHAHgIACQAEAXgYAYIgNAOQgZAigugGQgNgBgMADQgKACgJAAIgKAAg");
	mask.setTransform(1.1,3.7);

	// Слой 1
	this.instance = new lib.Символ76();
	this.instance.parent = this;
	this.instance.setTransform(21.3,-18.2,1,1,-52);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,x:0.9,y:0.7},9).to({rotation:-8.9,x:3,y:-1.5},10,cjs.Ease.get(-1)).to({rotation:0,x:0.9,y:0.7},10,cjs.Ease.get(1)).wait(1).to({rotation:-8.9,x:3,y:-1.5},10,cjs.Ease.get(-1)).to({rotation:0,x:0.9,y:0.7},10,cjs.Ease.get(1)).wait(1).to({rotation:-52,x:21.3,y:-18.2},5).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.5,-15.7,15.2,13.4);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ73();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ74();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.5);
	this.instance_1.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_1.cache(-117,-13,235,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ72, new cjs.Rectangle(-117.4,-12.4,238,29), null);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.6);

	this.instance_1 = new lib.Символ49();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.7);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-123,-12,246,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ71, new cjs.Rectangle(-123,-11.3,250,27), null);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ69();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ70();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.5);
	this.instance_1.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance_1.cache(-34,-10,68,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ68, new cjs.Rectangle(-32.8,-8.7,68,21), null);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ68();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.4,1.465,1.465);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ5333();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.2);

	this.instance_2 = new lib.Символ60();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,1.2);
	this.instance_2.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_2.cache(-92,-30,184,59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ67, new cjs.Rectangle(-91.8,-28.8,186,62.4), null);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ64();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ65();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.9);
	this.instance_1.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance_1.cache(-58,-12,117,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ62, new cjs.Rectangle(-57.5,-10,118,25), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ59();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ60();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,2.4);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-92,-30,184,59);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(-91.8,-27.6,186,63.4), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ56();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ57();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.2);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-66,-31,133,63);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(-66.5,-30.1,136,66), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.17,scaleY:1.17},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(1).to({scaleX:1.17,scaleY:1.17},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.5,-30.1,136,66);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.64,y:21.3},8,cjs.Ease.get(1)).to({scaleY:0.73,y:16.1},4,cjs.Ease.get(-1)).to({scaleY:1,y:0},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.8,-27.6,35.6,67.7);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 255, 0, 0)];
	this.instance.cache(-125,-90,250,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(-122.9,-88.2,245.9,176.4), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ72();
	this.instance.parent = this;
	this.instance.setTransform(0,1,1,0.367);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({scaleY:1,alpha:1},10).wait(40).to({scaleY:0.37,alpha:0},10).wait(1));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ71();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({scaleY:0.44,alpha:0},10,cjs.Ease.get(1)).wait(40).to({scaleY:1,alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-10.7,250,27);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.14,scaleY:1.14},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-10.7,250,27);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:11.3},24,cjs.Ease.get(-1)).to({y:23},25,cjs.Ease.get(1)).to({y:11.5},25,cjs.Ease.get(-1)).to({y:0},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(135,-164,292,314);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-5.7},14,cjs.Ease.get(-1)).to({y:-11.8},15,cjs.Ease.get(1)).to({y:-5.5},16,cjs.Ease.get(-1)).to({y:0},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-293,-109,186,200);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5));

	// Слой 2
	this.jazik = new lib.Символ77();
	this.jazik.parent = this;
	this.jazik.setTransform(-88.5,-13);
	this.jazik.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.jazik).to({alpha:1},4).wait(1).to({alpha:0},4).wait(1));

	// Слой 1
	this.instance = new lib.Символ75();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138,-99,276,198);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:9},9,cjs.Ease.get(-1)).to({y:20.1},11,cjs.Ease.get(1)).to({y:10.6},9,cjs.Ease.get(-1)).to({y:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.5,-110,205,220);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:6},12,cjs.Ease.get(-1)).to({y:13},14,cjs.Ease.get(1)).to({y:6.5},14,cjs.Ease.get(-1)).to({y:0},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-110,128,220);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.277},3,cjs.Ease.get(-1)).to({alpha:0.551},3,cjs.Ease.get(1)).to({alpha:0.277},3,cjs.Ease.get(-1)).to({alpha:0},3,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-606,1280,1280);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ63, new cjs.Rectangle(-57.5,-10,118,25), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,0,1.793,1.793,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.7},9,cjs.Ease.get(-1)).to({rotation:0.5},10,cjs.Ease.get(1)).to({rotation:3},10,cjs.Ease.get(-1)).to({rotation:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219,-17.8,442,43.2);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.koz = new lib.Символ12();
	this.koz.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.koz).to({y:-2},3,cjs.Ease.get(-1)).to({y:-4.8},4,cjs.Ease.get(1)).to({y:-2.7},3,cjs.Ease.get(-1)).to({y:0},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138,-99,276,198);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 13
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(-660.5,109.1,0.91,0.91,0,0,180,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 9
	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-410,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 11
	this.instance_2 = new lib.Символ11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-903.2,56.5,0.777,0.777);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 15
	this.instance_3 = new lib.Символ15();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-508,72.1,1.35,1.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 17
	this.instance_4 = new lib.Символ17();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-799.6,66.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Символ 13
	this.instance_5 = new lib.Символ13();
	this.instance_5.parent = this;
	this.instance_5.setTransform(630.7,109.1,0.91,0.91,0,0,180,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Символ 13
	this.koza = new lib.Символ13();
	this.koza.parent = this;
	this.koza.setTransform(-10.9,109.1,0.91,0.91,0,0,180,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.koza).wait(1));

	// Символ 9
	this.instance_6 = new lib.Символ9();
	this.instance_6.parent = this;
	this.instance_6.setTransform(881.2,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Символ 9
	this.instance_7 = new lib.Символ9();
	this.instance_7.parent = this;
	this.instance_7.setTransform(239.6,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Символ 11
	this.instance_8 = new lib.Символ11();
	this.instance_8.parent = this;
	this.instance_8.setTransform(388,56.5,0.777,0.777);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Символ 11
	this.instance_9 = new lib.Символ11();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-253.6,56.5,0.777,0.777);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Символ 15
	this.instance_10 = new lib.Символ15();
	this.instance_10.parent = this;
	this.instance_10.setTransform(783.2,72.1,1.35,1.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Символ 15
	this.instance_11 = new lib.Символ15();
	this.instance_11.parent = this;
	this.instance_11.setTransform(141.6,72.1,1.35,1.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Символ 17
	this.instance_12 = new lib.Символ17();
	this.instance_12.parent = this;
	this.instance_12.setTransform(491.6,66.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Символ 17
	this.instance_13 = new lib.Символ17();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-150,66.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-982.9,-97.9,1940.1,314), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-640,-606,1280,1280), null);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ63();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,-2.7,1.248,1.248);

	this.instance_1 = new lib.Символ58();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ66, new cjs.Rectangle(-91.8,-28.8,186,62.4), null);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ66();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.831,0.831);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.91,scaleY:0.91},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).to({scaleX:0.92,scaleY:0.92},9,cjs.Ease.get(-1)).to({scaleX:0.83,scaleY:0.83},11,cjs.Ease.get(1)).wait(1));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ67();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-400.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.92,scaleY:0.92},9,cjs.Ease.get(-1)).to({scaleX:0.83,scaleY:0.83},10,cjs.Ease.get(1)).to({scaleX:0.91,scaleY:0.91},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-492.6,-27.6,572,63.4);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_41 = function() {
		this.gotoAndPlay(15);
	}
	this.frame_95 = function() {
		this.gotoAndPlay(64);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(41).call(this.frame_41).wait(54).call(this.frame_95).wait(1));

	// Слой 4
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(265.2,-48,0.708,0.708,-11.8,0,0,-0.1,6.2);

	this.instance_1 = new lib.Символ53();
	this.instance_1.parent = this;
	this.instance_1.setTransform(369.3,-62,0.708,0.708,33.2);

	this.instance_2 = new lib.Символ53();
	this.instance_2.parent = this;
	this.instance_2.setTransform(312.2,-59.7,0.708,0.708);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},63).wait(33));

	// Слой 3
	this.instance_3 = new lib.Символ50();
	this.instance_3.parent = this;
	this.instance_3.setTransform(321,50.6,1.039,1.039);
	this.instance_3.alpha = 0;
	this.instance_3.compositeOperation = "lighter";
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(63).to({_off:false},0).to({alpha:0.23},5,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).wait(1).to({alpha:0.23},5,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).wait(1).to({alpha:0.23},5,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.people1 = new lib.Символ7();
	this.people1.parent = this;
	this.people1.setTransform(333.7,-59);

	this.timeline.addTween(cjs.Tween.get(this.people1).to({x:301.7},14).to({x:950.9},27).wait(1).to({x:-340.3},0).to({x:333.7},21,cjs.Ease.get(1)).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-649.2,-157,1940.1,314);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(-11.5,457.1,1.41,1.41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:34,rotation:-1.8,x:-10,y:505},0).wait(1).to({rotation:-3.6,x:-8.5,y:504.9},0).wait(1).to({rotation:-5.4,x:-6.9,y:504.8},0).wait(1).to({rotation:-7.2,x:-5.4,y:504.6},0).wait(1).to({rotation:-9,x:-3.9,y:504.4},0).wait(1).to({rotation:-10.9,x:-2.4,y:504.1},0).wait(1).to({rotation:-12.7,x:-1,y:503.8},0).wait(1).to({rotation:-14.5,x:0.5,y:503.5},0).wait(1).to({rotation:-16.3,x:2,y:503.1},0).wait(1).to({rotation:-18.1,x:3.4,y:502.6},0).wait(1).to({rotation:-19.9,x:4.8,y:502.1},0).wait(1).to({rotation:-21.7,x:6.3,y:501.6},0).wait(1).to({rotation:-23.5,x:7.6,y:501},0).wait(1).to({rotation:-25.3,x:9,y:500.4},0).wait(1).to({rotation:-27.1,x:10.4,y:499.7},0).wait(1).to({rotation:-28.9,x:11.7,y:499},0).wait(1).to({rotation:-30.8,x:13,y:498.3},0).wait(1).to({rotation:-32.6,x:14.3,y:497.5},0).wait(1).to({rotation:-34.4,x:15.6,y:496.6},0).wait(1).to({rotation:-36.2,x:16.8,y:495.8},0).wait(1).to({rotation:-38,x:18,y:494.8},0).wait(1).to({rotation:-39.8,x:19.2,y:493.9},0).wait(1).to({rotation:-41.6,x:20.4,y:492.9},0).wait(1).to({rotation:-43.4,x:21.5,y:491.9},0).wait(1).to({rotation:-45.2,x:22.5,y:490.8},0).wait(1).to({rotation:-47,x:23.6,y:489.7},0).wait(1).to({rotation:-48.8,x:24.6,y:488.6},0).wait(1).to({rotation:-50.7,x:25.6,y:487.4},0).wait(1).to({rotation:-52.5,x:26.5,y:486.2},0).wait(1).to({rotation:-54.3,x:27.4,y:485},0).wait(1).to({rotation:-56.1,x:28.3,y:483.8},0).wait(1).to({rotation:-57.9,x:29.1,y:482.5},0).wait(1).to({rotation:-59.7,x:29.9,y:481.2},0).wait(1).to({rotation:-61.5,x:30.6,y:479.9},0).wait(1).to({rotation:-63.3,x:31.3,y:478.5},0).wait(1).to({rotation:-65.1,x:32,y:477.2},0).wait(1).to({rotation:-66.9,x:32.6,y:475.8},0).wait(1).to({rotation:-68.7,x:33.2,y:474.4},0).wait(1).to({rotation:-70.6,x:33.7,y:473},0).wait(1).to({rotation:-72.4,x:34.2,y:471.5},0).wait(1).to({rotation:-74.2,x:34.6,y:470.1},0).wait(1).to({rotation:-76,x:35,y:468.6},0).wait(1).to({rotation:-77.8,x:35.3,y:467.2},0).wait(1).to({rotation:-79.6,x:35.6,y:465.7},0).wait(1).to({rotation:-81.4,x:35.9,y:464.2},0).wait(1).to({rotation:-83.2,x:36.1,y:462.7},0).wait(1).to({rotation:-85,x:36.2,y:461.2},0).wait(1).to({rotation:-86.8,x:36.3,y:459.7},0).wait(1).to({rotation:-88.6,x:36.4,y:458.2},0).wait(1).to({rotation:-90.5,y:456.6},0).wait(1).to({rotation:-92.3,y:455.1},0).wait(1).to({rotation:-94.1,x:36.3,y:453.6},0).wait(1).to({rotation:-95.9,x:36.2,y:452.1},0).wait(1).to({rotation:-97.7,x:36,y:450.6},0).wait(1).to({rotation:-99.5,x:35.7,y:449.1},0).wait(1).to({rotation:-101.3,x:35.5,y:447.6},0).wait(1).to({rotation:-103.1,x:35.2,y:446.1},0).wait(1).to({rotation:-104.9,x:34.8,y:444.7},0).wait(1).to({rotation:-106.7,x:34.4,y:443.2},0).wait(1).to({rotation:-108.5,x:33.9,y:441.8},0).wait(1).to({rotation:-110.4,x:33.4,y:440.4},0).wait(1).to({rotation:-112.2,x:32.9,y:438.9},0).wait(1).to({rotation:-114,x:32.3,y:437.6},0).wait(1).to({rotation:-115.8,x:31.6,y:436.2},0).wait(1).to({rotation:-117.6,x:30.9,y:434.8},0).wait(1).to({rotation:-119.4,x:30.2,y:433.5},0).wait(1).to({rotation:-121.2,x:29.4,y:432.2},0).wait(1).to({rotation:-123,x:28.6,y:430.9},0).wait(1).to({rotation:-124.8,x:27.8,y:429.7},0).wait(1).to({rotation:-126.6,x:26.9,y:428.4},0).wait(1).to({rotation:-128.4,x:26,y:427.2},0).wait(1).to({rotation:-130.3,x:25,y:426.1},0).wait(1).to({rotation:-132.1,x:24,y:424.9},0).wait(1).to({rotation:-133.9,x:23,y:423.8},0).wait(1).to({rotation:-135.7,x:21.9,y:422.8},0).wait(1).to({rotation:-137.5,x:20.8,y:421.7},0).wait(1).to({rotation:-139.3,x:19.7,y:420.7},0).wait(1).to({rotation:-141.1,x:18.5,y:419.8},0).wait(1).to({rotation:-142.9,x:17.3,y:418.8},0).wait(1).to({rotation:-144.7,x:16.1,y:417.9},0).wait(1).to({rotation:-146.5,x:14.9,y:417.1},0).wait(1).to({rotation:-148.3,x:13.6,y:416.3},0).wait(1).to({rotation:-150.2,x:12.3,y:415.5},0).wait(1).to({rotation:-152,x:11,y:414.8},0).wait(1).to({rotation:-153.8,x:9.6,y:414.1},0).wait(1).to({rotation:-155.6,x:8.2,y:413.4},0).wait(1).to({rotation:-157.4,x:6.9,y:412.8},0).wait(1).to({rotation:-159.2,x:5.4,y:412.3},0).wait(1).to({rotation:-161,x:4,y:411.8},0).wait(1).to({rotation:-162.8,x:2.6,y:411.3},0).wait(1).to({rotation:-164.6,x:1.1,y:410.9},0).wait(1).to({rotation:-166.4,x:-0.3,y:410.5},0).wait(1).to({rotation:-168.2,x:-1.8,y:410.2},0).wait(1).to({rotation:-170.1,x:-3.3,y:409.9},0).wait(1).to({rotation:-171.9,x:-4.8,y:409.6},0).wait(1).to({rotation:-173.7,x:-6.3,y:409.4},0).wait(1).to({rotation:-175.5,x:-7.8,y:409.3},0).wait(1).to({rotation:-177.3,x:-9.3,y:409.2},0).wait(1).to({rotation:-179.1,x:-10.8},0).wait(1).to({rotation:-180.9,x:-12.3},0).wait(1).to({rotation:-182.7,x:-13.8,y:409.3},0).wait(1).to({rotation:-184.5,x:-15.4},0).wait(1).to({rotation:-186.3,x:-16.9,y:409.5},0).wait(1).to({rotation:-188.1,x:-18.4,y:409.7},0).wait(1).to({rotation:-189.9,x:-19.9,y:409.9},0).wait(1).to({rotation:-191.8,x:-21.3,y:410.2},0).wait(1).to({rotation:-193.6,x:-22.8,y:410.5},0).wait(1).to({rotation:-195.4,x:-24.3,y:410.9},0).wait(1).to({rotation:-197.2,x:-25.7,y:411.3},0).wait(1).to({rotation:-199,x:-27.2,y:411.8},0).wait(1).to({rotation:-200.8,x:-28.6,y:412.3},0).wait(1).to({rotation:-202.6,x:-30,y:412.9},0).wait(1).to({rotation:-204.4,x:-31.4,y:413.5},0).wait(1).to({rotation:-206.2,x:-32.8,y:414.1},0).wait(1).to({rotation:-208,x:-34.1,y:414.8},0).wait(1).to({rotation:-209.8,x:-35.4,y:415.6},0).wait(1).to({rotation:-211.7,x:-36.7,y:416.3},0).wait(1).to({rotation:-213.5,x:-38,y:417.1},0).wait(1).to({rotation:-215.3,x:-39.3,y:418},0).wait(1).to({rotation:-217.1,x:-40.5,y:418.9},0).wait(1).to({rotation:-218.9,x:-41.7,y:419.8},0).wait(1).to({rotation:-220.7,x:-42.8,y:420.8},0).wait(1).to({rotation:-222.5,x:-44,y:421.8},0).wait(1).to({rotation:-224.3,x:-45.1,y:422.8},0).wait(1).to({rotation:-226.1,x:-46.1,y:424},0).wait(1).to({rotation:-227.9,x:-47.2,y:425.1},0).wait(1).to({rotation:-229.7,x:-48.2,y:426.2},0).wait(1).to({rotation:-231.6,x:-49.1,y:427.4},0).wait(1).to({rotation:-233.4,x:-50,y:428.6},0).wait(1).to({rotation:-235.2,x:-50.9,y:429.8},0).wait(1).to({rotation:-237,x:-51.8,y:431.1},0).wait(1).to({rotation:-238.8,x:-52.6,y:432.3},0).wait(1).to({rotation:-240.6,x:-53.3,y:433.6},0).wait(1).to({rotation:-242.4,x:-54.1,y:435},0).wait(1).to({rotation:-244.2,x:-54.7,y:436.3},0).wait(1).to({rotation:-246,x:-55.3,y:437.7},0).wait(1).to({rotation:-247.8,x:-55.9,y:439.1},0).wait(1).to({rotation:-249.6,x:-56.5,y:440.5},0).wait(1).to({rotation:-251.5,x:-57,y:441.9},0).wait(1).to({rotation:-253.3,x:-57.4,y:443.4},0).wait(1).to({rotation:-255.1,x:-57.8,y:444.8},0).wait(1).to({rotation:-256.9,x:-58.2,y:446.3},0).wait(1).to({rotation:-258.7,x:-58.5,y:447.8},0).wait(1).to({rotation:-260.5,x:-58.8,y:449.3},0).wait(1).to({rotation:-262.3,x:-59,y:450.8},0).wait(1).to({rotation:-264.1,x:-59.2,y:452.3},0).wait(1).to({rotation:-265.9,x:-59.3,y:453.8},0).wait(1).to({rotation:-267.7,x:-59.4,y:455.3},0).wait(1).to({rotation:-269.5,x:-59.5,y:456.8},0).wait(1).to({rotation:-271.4,x:-59.4,y:458.3},0).wait(1).to({rotation:-273.2,y:459.8},0).wait(1).to({rotation:-275,x:-59.3,y:461.3},0).wait(1).to({rotation:-276.8,x:-59.1,y:462.8},0).wait(1).to({rotation:-278.6,x:-58.9,y:464.3},0).wait(1).to({rotation:-280.4,x:-58.7,y:465.8},0).wait(1).to({rotation:-282.2,x:-58.4,y:467.3},0).wait(1).to({rotation:-284,x:-58,y:468.8},0).wait(1).to({rotation:-285.8,x:-57.6,y:470.2},0).wait(1).to({rotation:-287.6,x:-57.1,y:471.7},0).wait(1).to({rotation:-289.4,x:-56.7,y:473.1},0).wait(1).to({rotation:-291.3,x:-56.1,y:474.6},0).wait(1).to({rotation:-293.1,x:-55.6,y:476},0).wait(1).to({rotation:-294.9,x:-55,y:477.3},0).wait(1).to({rotation:-296.7,x:-54.3,y:478.7},0).wait(1).to({rotation:-298.5,x:-53.6,y:480},0).wait(1).to({rotation:-300.3,x:-52.9,y:481.4},0).wait(1).to({rotation:-302.1,x:-52.1,y:482.7},0).wait(1).to({rotation:-303.9,x:-51.2,y:483.9},0).wait(1).to({rotation:-305.7,x:-50.4,y:485.2},0).wait(1).to({rotation:-307.5,x:-49.5,y:486.4},0).wait(1).to({rotation:-309.3,x:-48.5,y:487.6},0).wait(1).to({rotation:-311.2,x:-47.6,y:488.7},0).wait(1).to({rotation:-313,x:-46.5,y:489.8},0).wait(1).to({rotation:-314.8,x:-45.5,y:490.9},0).wait(1).to({rotation:-316.6,x:-44.4,y:491.9},0).wait(1).to({rotation:-318.4,x:-43.3,y:493},0).wait(1).to({rotation:-320.2,x:-42.2,y:493.9},0).wait(1).to({rotation:-322,x:-41,y:494.9},0).wait(1).to({rotation:-323.8,x:-39.8,y:495.8},0).wait(1).to({rotation:-325.6,x:-38.5,y:496.7},0).wait(1).to({rotation:-327.4,x:-37.3,y:497.5},0).wait(1).to({rotation:-329.2,x:-36,y:498.3},0).wait(1).to({rotation:-331.1,x:-34.7,y:499.1},0).wait(1).to({rotation:-332.9,x:-33.3,y:499.8},0).wait(1).to({rotation:-334.7,x:-32,y:500.4},0).wait(1).to({rotation:-336.5,x:-30.6,y:501.1},0).wait(1).to({rotation:-338.3,x:-29.2,y:501.7},0).wait(1).to({rotation:-340.1,x:-27.8,y:502.2},0).wait(1).to({rotation:-341.9,x:-26.4,y:502.7},0).wait(1).to({rotation:-343.7,x:-24.9,y:503.1},0).wait(1).to({rotation:-345.5,x:-23.5,y:503.5},0).wait(1).to({rotation:-347.3,x:-22,y:503.9},0).wait(1).to({rotation:-349.1,x:-20.5,y:504.2},0).wait(1).to({rotation:-351,x:-19,y:504.5},0).wait(1).to({rotation:-352.8,x:-17.5,y:504.7},0).wait(1).to({rotation:-354.6,x:-16,y:504.8},0).wait(1).to({rotation:-356.4,x:-14.5,y:505},0).wait(1).to({rotation:-358.2,x:-13},0).wait(1).to({rotation:-360,x:-11.4,y:505.1},0).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EiW0BOSMAAAicjMEtpAAAMAAACcjg");
	this.shape.setTransform(51.6,-17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-913.7,-517.9,1930.6,1925.2);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(-21.1,-13.9,0.409,0.409);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-0.1,scaleX:0.45,scaleY:0.45},64,cjs.Ease.get(-1)).to({regY:0,scaleX:0.49,scaleY:0.49},65,cjs.Ease.get(1)).to({regY:-0.1,scaleX:0.45,scaleY:0.45},66,cjs.Ease.get(-1)).to({regY:0,scaleX:0.41,scaleY:0.41},64,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-395.1,-225.9,790.2,787.9);


(lib.Символ6 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ61();
	this.instance.parent = this;
	this.instance.setTransform(177.9,-187.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-115.9,alpha:1},7,cjs.Ease.get(1)).wait(1).to({y:-187.1,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Слой 8
	this.instance_1 = new lib.Символ54();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-21.5,-242.9,1.223,1.223);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-21.6,y:-105.7},5).to({y:-113.7},2).wait(1).to({y:-105.7},2).to({x:-21.5,y:-242.9},5).wait(1));

	// Слой 7
	this.instance_2 = new lib.Символ46();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-21.5,-118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-89.7},2).to({y:-241.7},5).wait(1).to({y:-89.7},5).to({y:-118.5},2).wait(1));

	// Слой 2
	this.people = new lib.Символ44();
	this.people.parent = this;
	this.people.setTransform(-333.6,60.7);

	this.timeline.addTween(cjs.Tween.get(this.people).wait(16));

	// Слой 1
	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-982.9,-279.2,1940.1,817.3);


// stage content:
(lib.truetest640x305 = function(mode,startPosition,loop) {
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
		    _this.main.gotoAndPlay(1);
			_this.main.people.gotoAndPlay(43);
			_this.main.people.people1.koza.koz.gotoAndPlay(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(9);
			_this.main.people.gotoAndPlay(0);
			_this.main.people.people1.koza.koz.gotoAndPlay(6);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.main = new lib.Символ6();
	this.main.parent = this;
	this.main.setTransform(341.1,165.9);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-321.8,39.2,1940.1,817.3);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/elvis.png?1490792499858", id:"elvis"},
		{src:"images/ivan.png?1490792499858", id:"ivan"},
		{src:"images/jaz.png?1490792499858", id:"jaz"},
		{src:"images/koza.png?1490792499858", id:"koza"},
		{src:"images/maxresdefault.jpg?1490792499858", id:"maxresdefault"},
		{src:"images/monr.png?1490792499858", id:"monr"},
		{src:"images/nap.png?1490792499858", id:"nap"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;