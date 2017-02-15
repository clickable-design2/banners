(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib._10 = function() {
	this.initialize(img._10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,100);


(lib.back_card = function() {
	this.initialize(img.back_card);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,200);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,467);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,45);


(lib.chip1 = function() {
	this.initialize(img.chip1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,180);


(lib.king = function() {
	this.initialize(img.king);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,200);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,258,58);


(lib.queen = function() {
	this.initialize(img.queen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,200);


(lib.uzor = function() {
	this.initialize(img.uzor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,273);


(lib.valet = function() {
	this.initialize(img.valet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,200);// helper functions:

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


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACUBFQgIgBgGgCQgHgDgGgDIgKgJQgEgEgEgGIgGgMQgDgHgBgHIgBgPIABgNIADgOIAGgMIAIgKQAEgFAGgEQAFgEAHgCQAGgDAIgCIAQgBQAJAAAPAEQALAEAGAGIgKASIgNgHQgIgCgKAAQgKAAgIADQgIADgGAHQgGAGgEAJQgDAJAAAKQAAALADAJQAEAIAGAHQAHAGAJAEQAIADALAAQAJAAAIgDQAIgDAHgFIAKASQgEAEgEADIgLAEQgQAFgKAAIgOgCgAkIBFQgGgCgHgEQgGgDgEgEIgHgIIANgRQAGAIAJAEQAKAFAIAAIAJgBQAFgBAEgDQADgCACgEQACgEAAgFQAAgEgBgEQgCgDgDgCQgDgDgFgBQgEgBgGAAIgOAAIAAgWIANAAQAJAAAFgFIAEgFQACgEAAgEQAAgEgCgDQgBgEgCgCQgHgEgIAAQgIAAgIADQgGAEgGAIIgOgQQAEgFAEgEQAFgEAFgDQAHgDAGgBQAHgCAGAAQAKAAAHADQAIACAFAFQAFAFAEAHQACAHABAJQgBAIgEAIQgCAEgDAEIgIAGIAAABQAFABAFACQAFADACAEQADAEABAGQACAFAAAGQAAAJgEAIQgEAIgGAFQgHAFgJADQgJADgJAAQgIAAgJgCgArMBFIAAiIIAogBQAMAAAJACQAIADAFAFQAGAEACAGQADAHAAAHQAAAGgCAEIgDAJIgHAHIgIAFIAAAAIAKADIAHAGQAEAFACAFQABAFABAHQgBALgDAIQgEAHgHAFQgHAFgJADQgJACgLAAgAqzAuIAPABIAMgBQAEgCADgCQADgDACgEQACgDgBgFQABgEgCgDIgEgGIgIgDIgKgBIgRAAgAqzgtIAAAjIAPAAQAJAAAGgFIAFgFIABgIIgBgIQgCgDgDgCQgGgFgKAAgAJ7BFIAAiJIBPAAIAAAXIg3AAIAAAiIAxAAIAAAWIgxAAIAAAjIA5AAIAAAXgAI9BFIAAg7Ig/AAIAAA7IgXAAIAAiJIAXAAIAAA4IA/AAIAAg4IAYAAIAACJgAG5BFIgPgjIg6AAIgOAjIgZAAIA6iJIAVAAIA6CJgAGiALIgUgwIgVAwIApAAgAEBBFIAAhyIgsAAIAAgXIByAAIAAAXIgtAAIAABygAA1BFIgjg0IgiA0IgdAAIAvhFIgshEIAcAAIAhAyIAggyIAcAAIguBEIAxBFgAhKBFIgOgjIg7AAIgOAjIgYAAIA5iJIAWAAIA6CJgAhhALIgUgwIgVAwIApAAgAlIBFIgPgjIg6AAIgOAjIgYAAIA5iJIAWAAIA6CJgAlfALIgVgwIgUAwIApAAgAnZBFIg4hGIAABGIgYAAIAAiJIAYAAIAABBIA2hBIAdAAIg4BAIA7BJg");
	this.shape.setTransform(71.7,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(0,0,143.3,14.2), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AELBFIAAiIIAYAAIAAAvIAQgBQANAAAJADQAKADAHAGQAGAFADAIQAEAIAAAKQAAALgEAJQgEAIgIAGQgHAHgKADQgPADgKAAgAEjABIAAAtIAOABQAGAAAFgCIAKgEQADgDACgEQACgFAAgGQAAgGgCgEQgCgFgEgCQgDgDgGgCQgEgBgHAAgACTBFIAAiIIAngBQAKAAAPAEQAKADAHAHQAFAGAEAIQACAIAAAIQAAAKgDAHQgEAHgFAHQgHAGgKADQgNAEgIAAIgSgBIAAAygACrgtIAAArIASABQAFgBAEgBQAFgCAEgCIAEgGQADgGAAgFQAAgFgCgFQgBgDgDgDIgJgEQgEgBgGgBgAAjBFIAAiIIBPAAIAAAWIg4AAIAAAiIAyAAIAAAWIgyAAIAAAjIA6AAIAAAXgAgZBFIAAhyIg/AAIAAByIgXAAIAAiIIBtAAIAACIgAjfBFIAAiIIBPAAIAAAWIg3AAIAAAiIAxAAIAAAWIgxAAIAAAjIA5AAIAAAXgAk5BFIAAhyIgtAAIAAgWIByAAIAAAWIgtAAIAAByg");
	this.shape.setTransform(35.9,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(0,0,71.7,13.8), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah/BFQgHgBgHgCIgMgGIgKgJIgJgKIgGgMQgDgHgBgHQgCgHAAgIQAAgHACgGIADgOIAGgMIAJgKQAFgFAFgEQAGgEAHgCQAGgDAHgCIAQgBIAOABIAOAEQAHADAFADQAGAEAEAFQAGAEADAGIAGAMQADAHABAHIACAOIgCAPQgBAHgDAGIgGANIgJAKIgKAIIgMAGQgHADgHABIgOACQgIAAgHgCgAiDgsQgIAEgGAGQgHAHgDAIQgEAKAAAJQAAAKAEAJQADAJAHAGQAGAHAIAEQAJADAKAAQAKAAAJgEQAIgDAGgHQAGgHADgIQADgJAAgKQAAgJgDgKQgDgIgHgHQgGgGgIgEQgJgDgJAAQgKAAgJADgADlBFIAAiJIAnAAQAKAAAQAEQAJADAHAGQAGAHADAIQACAHAAAJQAAAJgDAIQgDAHgGAGQgHAHgJADQgOAEgIAAIgSgBIAAAygAD9gtIAAAqIARABQAGAAAEgBQAFgCAEgCIAFgHQACgFAAgFQAAgFgCgFQgBgDgEgDQgDgDgEgBQgFgCgHAAgAB1BFIAAiJIBPAAIAAAXIg3AAIAAAiIAxAAIAAAWIgxAAIAAAjIA5AAIAAAXgABBBFIg4hGIAABGIgXAAIAAiJIAXAAIAABBIA2hBIAdAAIg4BAIA8BJgAjrBFIAAhyIg+AAIAAByIgXAAIAAiJIBtAAIAACJg");
	this.shape.setTransform(32.1,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(0,0,64.3,14.2), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.valet();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.892,0.892);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(0,0,130.2,178.4), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.queen();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.892,0.892);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(0,0,130.2,178.4), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.king();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.892,0.892);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(0,0,130.2,178.4), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().rr(-66.5,-100,133,200,5.9);
	this.shape.setTransform(65,98.3,0.977,0.983);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,129.9,196.6), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,200,45), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHtBfIAAgMQgHgCgFgDQgFgDgEgGQgEgFgBgHQgCgHAAgJIAAgLIAZAAIAAANQAAAIAEAFQADADAHAAQAGAAAEgDQADgFAAgIQAAgGgCgFQgCgFgEgFQgDgFgPgLQgMgJgFgJQgEgFgCgHQgCgIAAgIQAAgIABgIQACgGAEgFQADgGAFgDQAGgEAGgCIAAgMIAWAAIAAAMQAHACAFAEQAGADADAFQAEAGACAGQABAHAAAJIAAAFIgZAAIAAgHQAAgIgDgFQgDgDgHAAQgGAAgEADQgDAFAAAIQAAAGACAGQACAEAEAFQAEAFAOALQAMAKAGAIQADAGACAGQADAIAAAIQAAAJgCAHQgCAHgEAFQgDAGgGADQgFADgHACIAAAMgAGIBTQgHgCgFgGQgGgFgCgJQgDgHAAgLIAAhVQAAgLADgHQACgJAGgFQAFgGAHgCQAIgDAJAAQAKAAAHADQAIACAFAGQAFAFADAJQACAHAAALIAABVQAAALgCAHQgDAJgFAFQgFAGgIACQgHADgKAAQgJAAgIgDgAGPg5QgDAEAAAIIAABaQAAAJADAEQAEAEAGAAQAHAAADgEQAEgEAAgJIAAhaQAAgIgEgEQgDgEgHAAQgGAAgEAEgAmkBTQgHgCgFgGQgGgFgCgJQgDgHAAgLIAAhVQAAgLADgHQACgJAGgFQAFgGAHgCQAIgDAJAAQAKAAAHADQAIACAFAGQAFAFADAJQACAHAAALIAABVQAAALgCAHQgDAJgFAFQgFAGgIACQgHADgKAAQgJAAgIgDgAmdg5QgDAEAAAIIAABaQAAAJADAEQAEAEAGAAQAHAAADgEQAEgEAAgJIAAhaQAAgIgEgEQgDgEgHAAQgGAAgEAEgAjoBUIAAgYQAKACAFgDQAGgDACgJIAAgCIgkiAIAaAAIAWBgIAThgIAbAAIgcB8QgDAMgDAIQgEAJgFAFQgGAGgJACIgPABIgIAAgAE5BUIAAh/IgUAAIAAgTQAHAAAFgCQAFgBADgDQAFgFAEgKIASAAIAACngACRBUIAAinIAbAAIAAA/IAMAAQAKAAAHADQAIACAFAGQAFAFACAHQADAIAAAKIAAAVQAAALgDAHQgCAIgFAGQgFAEgIADQgHADgKAAgACsA8IAMAAQAHAAADgDQADgEAAgJIAAgZQAAgJgDgEQgDgDgHAAIgMAAgABQBUIAAiPIgbAAIAAgYIBRAAIAAAYIgbAAIAACPgAASBUIAAh1IggB1IgbAAIAAinIAYAAIAABqIAehqIAdAAIAACngAhWBUIAAhEQgEAFgHACQgGACgGAAQgIABgGgDQgGgDgEgFQgFgFgCgHQgCgGAAgJIAAhHIAbAAIAABFQAAAIAEAEQAEADAHABQAGAAAEgEQAEgFAAgIIAAhEIAaAAIAACngAkdBUIAAiPIgXAAIgDBkQAAAMgCAIQgDAIgEAGQgFAFgHACQgHACgKAAIgEAAIAAgYQAJAAADgCQAEgEAAgLIAFh+IBKAAIAACngAnmBUIAAiPIgeAAIAACPIgbAAIAAinIBUAAIAACng");
	this.shape.setTransform(59.1,11.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#560000").s().p("AHtBfIAAgNQgHgBgFgDQgFgDgEgGQgEgFgBgHQgCgHAAgJIAAgLIAZAAIAAANQAAAIAEAEQADAFAHAAQAGAAAEgFQADgEAAgIQAAgGgCgFQgCgFgEgFQgDgEgPgMQgMgKgFgHQgEgHgCgHQgCgHAAgIQAAgIABgHQACgIAEgEQADgGAFgDQAGgEAGgCIAAgMIAWAAIAAAMQAHACAFAEQAGADADAFQAEAGACAHQABAGAAAJIAAAFIgZAAIAAgHQAAgJgDgEQgDgDgHAAQgGAAgEADQgDAEAAAJQAAAGACAGQACAEAEAFQAEAFAOALQAMAKAGAIQADAGACAGQADAIAAAIQAAAJgCAHQgCAHgEAFQgDAGgGADQgFADgHABIAAANgAGIBTQgHgCgFgGQgGgFgCgJQgDgHAAgLIAAhWQAAgJADgJQACgHAGgGQAFgFAHgDQAIgDAJAAQAKAAAHADQAIADAFAFQAFAGADAHQACAJAAAJIAABWQAAALgCAHQgDAJgFAFQgFAGgIACQgHADgKAAQgJAAgIgDgAGPg5QgDAEAAAIIAABaQAAAJADAEQAEAEAGAAQAHAAADgEQAEgEAAgJIAAhaQAAgIgEgEQgDgEgHAAQgGAAgEAEgAmkBTQgHgCgFgGQgGgFgCgJQgDgHAAgLIAAhWQAAgJADgJQACgHAGgGQAFgFAHgDQAIgDAJAAQAKAAAHADQAIADAFAFQAFAGADAHQACAJAAAJIAABWQAAALgCAHQgDAJgFAFQgFAGgIACQgHADgKAAQgJAAgIgDgAmdg5QgDAEAAAIIAABaQAAAJADAEQAEAEAGAAQAHAAADgEQAEgEAAgJIAAhaQAAgIgEgEQgDgEgHAAQgGAAgEAEgAjoBUIAAgYQAKACAFgDQAGgDACgJIAAgCIgkiAIAaAAIAWBgIAThgIAbAAIgcB8QgDAMgDAIQgEAJgFAFQgGAGgJACIgPABIgIAAgAE5BUIAAh/IgUAAIAAgTQAHAAAFgCQAFgBADgDQAFgEAEgLIASAAIAACngACRBUIAAinIAbAAIAAA/IAMAAQAKAAAHADQAIACAFAGQAFAFACAHQADAIAAAKIAAAVQAAAKgDAIQgCAIgFAFQgFAGgIACQgHADgKAAgACsA8IAMAAQAHAAADgDQADgEAAgJIAAgZQAAgJgDgDQgDgEgHAAIgMAAgABQBUIAAiPIgbAAIAAgYIBRAAIAAAYIgbAAIAACPgAASBUIAAh2IggB2IgbAAIAAinIAYAAIAABqIAehqIAdAAIAACngAhWBUIAAhEQgEAEgHAEQgGABgGAAQgIABgGgDQgGgDgEgFQgFgFgCgHQgCgGAAgJIAAhHIAbAAIAABFQAAAIAEAEQAEADAHAAQAGABAEgEQAEgEAAgJIAAhEIAaAAIAACngAkdBUIAAiPIgXAAIgDBlQAAALgCAIQgDAIgEAGQgFAFgHACQgHACgKAAIgEAAIAAgYQAJAAADgCQAEgEAAgLIAFh+IBKAAIAACngAnmBUIAAiPIgeAAIAACPIgbAAIAAinIBUAAIAACng");
	this.shape_1.setTransform(59.1,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(4.7,2.1,108.8,19.8), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD1823").s().p("AjMCEIAAgfIhNAAIAAAfIgkAAIAAg/IAPAAQAEgGACgHQACgGABgLIAIioIBmAAIAADGIAPAAIAAA/gAkCAmQgBANgDAHQgCAHgEAEIAwAAIAAilIggAAgAEQBkQgKgEgHgHQgHgIgDgLQgEgKAAgOIAAgaIAjAAIAAAcQgBAMAGAGQAEAFAJAAQAKAAAEgGQAFgGAAgOIAAgSQAAgQgFgHQgGgGgMAAIgJAAIAAghIALAAQAKAAAGgFQAFgGAAgNIAAgNQAAgPgFgGQgEgFgKAAQgJAAgEAFQgGAFABAMIAAATIgiAAIAAgRQAAgOADgLQADgKAIgIQAGgHAKgEQAKgDANAAQAOAAAKADQAKAEAHAIQAGAHAEALQAEALgBAOIAAAGQAAASgFAMQgHAMgNAFQAGADAGAFQAEAEAEAHQAFAKAAATIAAASQABAOgEAKQgEALgGAIQgHAHgKAEQgKAEgOAAQgNAAgKgEgACNBkQgKgEgHgHQgHgIgEgLQgDgKAAgOIAAh3QAAgOADgLQAEgLAHgHQAHgIAKgEQAKgDAOAAQANAAAKADQALAEAGAIQAIAHADALQAEALAAAOIAAB3QAAAOgEAKQgDALgIAIQgGAHgLAEQgKAEgNAAQgOAAgKgEgACXhdQgFAFAAAMIAAB8QAAAMAFAGQAFAFAJAAQAJAAAEgFQAGgGAAgMIAAh8QAAgMgGgFQgEgFgJAAQgJAAgFAFgAnNBkQgLgEgHgHQgGgIgEgLQgDgKAAgOIAAgaIAiAAIAAAcQAAAMAFAGQAFAFAJAAQAJAAAEgGQAFgGABgOIAAgSQAAgQgGgHQgGgGgMAAIgJAAIAAghIALAAQAKAAAGgFQAGgGAAgNIAAgNQgBgPgFgGQgEgFgJAAQgJAAgFAFQgFAFAAAMIAAATIghAAIAAgRQAAgOACgLQAEgKAHgIQAGgHALgEQAKgDANAAQANAAAKADQAKAEAHAIQAHAHADALQAEALAAAOIAAAGQAAASgGAMQgGAMgNAFQAGADAFAFQAFAEADAHQAGAKAAATIAAASQAAAOgEAKQgDALgHAIQgHAHgKAEQgKAEgNAAQgNAAgKgEgALIBlIgGgqIgtAAIgGAqIgiAAIAmjmIA1AAIAlDmgAKaAcIAjAAIgSh0gAIeBlIAAjFIgnAAIAAghIBxAAIAAAhIgmAAIAADFgAHIBlIAAihIgtChIglAAIAAjmIAgAAIAACRIAriRIAoAAIAADmgAAyBlIAAjFIgqAAIAADFIgjAAIAAjmIByAAIAADmgAiUBlIAAjmIBjAAIAAAhIg+AAIAABBIAxAAIAAAgIgxAAIAABDIA+AAIAAAhgApkBlIAAjmIBjAAIAAAhIg+AAIAABBIAyAAIAAAgIgyAAIAABDIA+AAIAAAhgArsBlIAAjmIBmAAIAAAhIhBAAIAAA7IAVAAQANAAAKAEQALAEAHAHQAHAHADALQAEAKAAANIAAAZQAAAOgEALQgDAKgHAIQgHAHgLAEQgKADgNAAgArHBEIAVAAQAJAAAEgEQAFgGABgMIAAgdQgBgMgFgFQgEgEgJAAIgVAAg");
	this.shape.setTransform(78.2,61.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgBCtIAAgpIhlAAIAAApIguAAIAAhTIASAAQAGgIADgJQACgJABgNIAKjbICEAAIAAECIAUAAIAABTgAhIAyQgBARgDAJQgDAIgGAGIA+AAIAAjXIgoAAgAG9CDQgOgFgJgLQgJgJgFgOQgFgOAAgSIAAicQAAgRAFgPQAFgOAJgKQAJgJAOgFQANgGARAAQASAAANAGQAOAFAJAJQAJAKAEAOQAFAPAAARIAACcQAAASgFAOQgEAOgJAJQgJALgOAFQgNAEgSAAQgRAAgNgEgAHJh5QgGAGAAAQIAAChQAAARAGAHQAHAGALABQAMgBAGgGQAHgHAAgRIAAihQAAgQgHgGQgGgIgMAAQgLAAgHAIgAkPCDQgNgFgJgLQgKgJgEgOQgFgOAAgSIAAicQAAgRAFgPQAEgOAKgKQAJgJANgFQAOgGARAAQARAAAOAGQANAFAJAJQAJAKAFAOQAFAPAAARIAACcQAAASgFAOQgFAOgJAJQgJALgNAFQgOAEgRAAQgRAAgOgEgAkCh5QgHAGAAAQIAAChQAAARAHAHQAGAGAMABQAMgBAGgGQAGgHAAgRIAAihQAAgQgGgGQgGgIgMAAQgMAAgGAIgAKtCEIguh4IgOAcIAABcIgwAAIAAksIAwAAIAACDIA+iDIAvAAIhCCGIBCCmgAD1CEIAAksIBGAAQASAAANAFQANAFAJAJQAJAJAEAOQAFAOAAATIAAAmQAAATgFAOQgEAOgJAIQgJAJgNAFQgNAFgSAAIgWAAIAABxgAElgXIAWAAQAMAAAFgGQAGgHAAgPIAAgtQAAgQgGgHQgFgGgMAAIgWAAgACwCEIgIg3Ig6AAIgJA3IgrAAIAwksIBFAAIAxEsgAB0AkIAtAAIgXiXgAmHCEIAAkBIg1AAIAAEBIgwAAIAAksICWAAIAAEsgArdCEIAAksIBIAAQASAAAOAEQANAEAIAJQAJAJAEANQAEAMAAASIAAALQAAAYgHAOQgIAPgQAHQAKAFAHAFQAGAGAFAJQAIAOAAAZIAAAYQAAASgFAOQgEANgJAIQgJAKgOAFQgOAEgRAAgAqtBZIAbAAQAMAAAGgGQAGgIAAgPIAAgbQAAgVgHgHQgHgIgQAAIgVAAgAqtguIASAAQAOABAHgIQAIgHAAgRIAAgRQAAgQgGgIQgGgHgMAAIgXAAg");
	this.shape_1.setTransform(77.1,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(3.4,3.8,149.7,71.1), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chip1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,176,180), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,258,58), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,200,45), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,238,0,0)","#FFB000","rgba(255,248,0,0)"],[0,0.51,1],-10.9,-10.9,10.9,10.9).s().p("AwKIXIYh4hIH0H0I4hYhg");
	this.shape.setTransform(103.5,103.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,206.9,206.9), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,238,0,0)","#FFB000","rgba(255,248,0,0)"],[0,0.51,1],-15.4,0,15.5,0).s().p("AlgRWMAAAgirILBAAMAAAAirg");
	this.shape.setTransform(-22.6,111);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,238,0,0)","#FFB000","rgba(255,248,0,0)"],[0,0.51,1],-21.8,0,9.1,0).s().p("AkhRWMAAAgirIJCAAMAAAAirg");
	this.shape_1.setTransform(41.7,111);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-57.9,0,128.5,222), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#333333"],[0,1],0,273,0,-272.9).s().p("EgyYAYiMAAAgxDMBkxAAAMAAAAxDg");
	this.shape.setTransform(322.5,157);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,645,314), null);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back_card();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol, new cjs.Rectangle(0,0,133,200), null);


(lib.j = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.j, new cjs.Rectangle(0,0,700,467), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(65.1,89.2,1,1,0,0,0,65.1,89.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,scaleY:1.02,x:65.2,y:89.3},4,cjs.Ease.get(-1)).to({scaleX:1.05,scaleY:1.05,x:65.1,y:89.2},5,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,x:65.2,y:89.3},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:65.1,y:89.2},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130.2,178.4);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(65.1,89.2,1.05,1.05,0,0,0,65.1,89.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:65,scaleX:1.03,scaleY:1.03},4,cjs.Ease.get(-1)).to({regX:65.1,scaleX:1,scaleY:1},5,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,x:65.2,y:89.3},5,cjs.Ease.get(-1)).to({scaleX:1.05,scaleY:1.05,x:65.1,y:89.2},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-4.4,136.7,187.3);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(65.1,89.2,1,1,0,0,0,65.1,89.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,scaleY:1.02,x:65.2,y:89.3},4,cjs.Ease.get(-1)).to({scaleX:1.05,scaleY:1.05,x:65.1,y:89.2},5,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,x:65.2,y:89.3},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:65.1,y:89.2},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130.2,178.4);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(65,98.2,1,1,0,0,0,65,98.2);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,129.9,196.6), null);


(lib.Символ23копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(66.9,100.3,1,1,0,0,0,65,98.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.09},8,cjs.Ease.get(-1)).to({alpha:0.172},7,cjs.Ease.get(1)).to({alpha:0.09},7,cjs.Ease.get(-1)).to({alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Symbol();
	this.instance_1.parent = this;
	this.instance_1.setTransform(66.5,100,1,1,0,0,0,66.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133,200);


(lib.Символ23копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(66.9,100.3,1,1,0,0,0,65,98.2);
	this.instance.alpha = 0.09;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},7,cjs.Ease.get(1)).to({alpha:0.09},8,cjs.Ease.get(-1)).to({alpha:0.172},7,cjs.Ease.get(1)).to({alpha:0.09},7,cjs.Ease.get(-1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Symbol();
	this.instance_1.parent = this;
	this.instance_1.setTransform(66.5,100,1,1,0,0,0,66.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133,200);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(66.9,100.3,1,1,0,0,0,65,98.2);
	this.instance.alpha = 0.172;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.086},7,cjs.Ease.get(-1)).to({alpha:0},7,cjs.Ease.get(1)).to({alpha:0.09},8,cjs.Ease.get(-1)).to({alpha:0.172},7,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Symbol();
	this.instance_1.parent = this;
	this.instance_1.setTransform(66.5,100,1,1,0,0,0,66.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133,200);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(100,22.5,1,1,0,0,0,100,22.5);
	this.instance.filters = [new cjs.ColorFilter(0.74, 0.74, 0.74, 1, 66.3, 39.78, 13.26, 0)];
	this.instance.cache(-2,-2,204,49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,200,45), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(127.5,124.3,1,1,0,0,0,103.5,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:284.3,y:258.7},22).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24,20.8,206.9,206.9);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(88,90,1,1,0,0,0,88,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},186).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176,180);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(88,90,1,1,0,0,0,88,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.97,x:88.1},0).wait(1).to({scaleX:0.94},0).wait(2).to({regX:88.1,scaleX:0.9},0).wait(1).to({regX:88.2,scaleX:0.81,x:88.3},0).wait(1).to({scaleX:0.69},0).wait(1).to({scaleX:0.5},0).wait(1).to({regX:88.3,scaleX:0.39},0).wait(1).to({regX:88.5,scaleX:0.33},0).wait(1).to({scaleX:0.25},0).wait(1).to({regX:88.7,scaleX:0.19},0).wait(1).to({regX:88.9,scaleX:0.14},0).wait(1).to({regX:89.2,scaleX:0.07},0).wait(1).to({regX:90.5,scaleX:0.03,x:86},0).to({_off:true},1).wait(1).to({_off:false,x:90.1},0).wait(1).to({regX:89.2,scaleX:0.07,x:88.6},0).wait(1).to({regX:88.9,scaleX:0.14},0).wait(1).to({regX:88.7,scaleX:0.19,x:89.3},0).wait(1).to({regX:88.5,scaleX:0.25,x:89.1},0).wait(1).to({scaleX:0.33,x:88.9},0).wait(1).to({regX:88.3,scaleX:0.39,x:88.4},0).wait(1).to({regX:88.2,scaleX:0.5},0).wait(1).to({scaleX:0.69,x:89.4},0).wait(1).to({scaleX:0.81,x:88.6},0).wait(1).to({regX:88.1,scaleX:0.9,x:88.8},0).wait(1).to({regX:88,scaleX:0.94,x:88.7},0).wait(1).to({x:89},0).wait(1).to({scaleX:0.97,x:88.1},0).wait(1).to({scaleX:1,x:88},0).wait(30));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#000101","#FBBF4E","#746C5D","#000000","#000101","#FEFDD5","#888274","#000000","#000101"],[0,0.141,0.157,0.384,0.4,0.627,0.651,0.851,0.855,1],-7.4,89.8,-7.4,-89.9).s().p("Aj+OFIgI8JIB+AAICWA+QHkNKnKMhQg7AtiSAzg");
	this.shape.setTransform(110.9,90.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#000101","#FBBF4E","#746C5D","#000000","#000101","#FEFDD5","#888274","#000000","#000101"],[0,0.141,0.157,0.384,0.4,0.627,0.651,0.851,0.855,1],-13.4,90.4,-13.4,-89.3).s().p("Ai+OAIAA7/IBzAAQIWOSoWNtg");
	this.shape_1.setTransform(110.7,89.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","#000101","#FBBF4E","#746C5D","#000000","#000101","#FEFDD5","#888274","#000000","#000101"],[0,0.141,0.157,0.384,0.4,0.627,0.651,0.851,0.855,1],-10.4,90.4,-10.4,-90.3).s().p("AigOLIAA8VIB0AAQGbOWmbN/g");
	this.shape_2.setTransform(109.1,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","#000101","#FBBF4E","#746C5D","#000000","#000101","#FEFDD5","#888274","#000000","#000101"],[0,0.141,0.157,0.384,0.4,0.627,0.651,0.851,0.855,1],-4.7,89.7,-4.7,-91).s().p("Ah8OEIgX8HICbAAQEXOIkUN/g");
	this.shape_3.setTransform(103.4,90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000000","#000101","#FBBF4E","#746C5D","#000000","#000101","#FEFDD5","#888274","#000000","#000101"],[0,0.141,0.157,0.384,0.4,0.627,0.651,0.851,0.855,1],-7.2,90.2,-7.2,-90.6).s().p("AiAOJIAA8RIB1AAQEZOUkaN9g");
	this.shape_4.setTransform(102.4,89.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000000","#000101","#FBBF4E","#746C5D","#000000","#000101","#FEFDD5","#888274","#000000","#000101"],[0,0.141,0.157,0.384,0.4,0.627,0.651,0.851,0.855,1],1.8,89.7,1.8,-91).s().p("AhXOEIAA8HIB1AAQB0N9h0OKg");
	this.shape_5.setTransform(100.5,90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#000000","#000101","#FBBF4E","#746C5D","#000000","#000101","#FEFDD5","#888274","#000000","#000101"],[0,0.141,0.157,0.384,0.4,0.627,0.651,0.851,0.855,1],-9.1,90.4,-9.1,-90.3).s().p("AhTOLIAA8VIBTAAQCpOPipOGg");
	this.shape_6.setTransform(97.8,89.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#000000","#000101","#FBBF4E","#746C5D","#000000","#000101","#FEFDD5","#888274","#000000","#000101"],[0,0.141,0.157,0.384,0.4,0.627,0.651,0.851,0.855,1],-1.8,90.4,-1.8,-90.3).s().p("AhQOLIAA8VIB+AAQBFOKhFOLg");
	this.shape_7.setTransform(93.9,89.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#000000","#000101","#FBBF4E","#746C5D","#000000","#000101","#FEFDD5","#888274","#000000","#000101"],[0,0.141,0.157,0.384,0.4,0.627,0.651,0.851,0.855,1],0,90.4,0,-90.3).s().p("AhoOLIAA8VIDQAAIAAcVg");
	this.shape_8.setTransform(88.5,89.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#000000","#000101","#FBBF4E","#746C5D","#000000","#000101","#FEFDD5","#888274","#000000","#000101"],[0,0.141,0.157,0.384,0.4,0.627,0.651,0.851,0.855,1],1.8,90.4,1.8,-90.3).s().p("AgtOLQhFuLBFuKIB+AAIAAcVg");
	this.shape_9.setTransform(82.2,89.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#000000","#000101","#FBBF4E","#746C5D","#000000","#000101","#FEFDD5","#888274","#000000","#000101"],[0,0.141,0.157,0.384,0.4,0.627,0.651,0.851,0.855,1],9.1,90.4,9.1,-90.3).s().p("AABOLQipuGCpuPIBTAAIAAcVg");
	this.shape_10.setTransform(79.6,89.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#000000","#000101","#FBBF4E","#746C5D","#000000","#000101","#FEFDD5","#888274","#000000","#000101"],[0,0.141,0.157,0.384,0.4,0.627,0.651,0.851,0.855,1],-1.7,89.6,-1.7,-91.1).s().p("AgeODQhyuIByt9IB2AAIAAcFg");
	this.shape_11.setTransform(79.4,90.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#000000","#000101","#FBBF4E","#746C5D","#000000","#000101","#FEFDD5","#888274","#000000","#000101"],[0,0.141,0.157,0.384,0.4,0.627,0.651,0.851,0.855,1],7.2,89.9,7.2,-90.8).s().p("AANOGQkZt6EWuRIB3AAIAAcLg");
	this.shape_12.setTransform(76.5,89.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#000000","#000101","#FBBF4E","#746C5D","#000000","#000101","#FEFDD5","#888274","#000000","#000101"],[0,0.141,0.157,0.384,0.4,0.627,0.651,0.851,0.855,1],7,89.3,7,-91.4).s().p("AALOAQkPt1EJuKIB6AAIAAb/g");
	this.shape_13.setTransform(74.8,90.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#000000","#000101","#FBBF4E","#746C5D","#000000","#000101","#FEFDD5","#888274","#000000","#000101"],[0,0.141,0.157,0.384,0.4,0.627,0.651,0.851,0.855,1],10.4,89.7,10.4,-91.1).s().p("AAtOEQmYt5GSuNIB6AAIAAcGg");
	this.shape_14.setTransform(72.8,90.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#000000","#000101","#FBBF4E","#746C5D","#000000","#000101","#FEFDD5","#888274","#000000","#000101"],[0,0.141,0.157,0.384,0.4,0.627,0.651,0.851,0.855,1],27.4,90.1,27.4,-89.6).s().p("ADXN5QmLipgor0QAsrzGNhgIAAbwg");
	this.shape_15.setTransform(69.3,91.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#000000","#000101","#FBBF4E","#746C5D","#000000","#000101","#FEFDD5","#888274","#000000","#000101"],[0,0.141,0.157,0.384,0.4,0.627,0.651,0.851,0.855,1],6.4,91.3,6.4,-88.4).s().p("ACbN2QiRgVgFg6QoBsUH/tOIB7g6IB+AAIgDbrg");
	this.shape_16.setTransform(64.9,91.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},7).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[]},1).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176,180);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 45
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(224.9,16.5,1,1,0,0,0,71.7,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({y:19.3},3).to({y:-23},6).to({y:19.3},5).to({y:16.5},2).wait(44));

	// Символ 44
	this.instance_1 = new lib.Символ44();
	this.instance_1.parent = this;
	this.instance_1.setTransform(110.5,16.6,1,1,0,0,0,35.9,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({y:19.4},3).to({y:-22.9},6).to({y:19.4},5).to({y:16.6},2).wait(47));

	// Символ 43
	this.instance_2 = new lib.Символ43();
	this.instance_2.parent = this;
	this.instance_2.setTransform(37.2,16.5,1,1,0,0,0,32.1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({y:19.3},3).to({y:-23},6).to({y:19.3},5).to({y:16.5},2).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.1,9.5,291.3,14.2);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AFsHQIAAg8QgigHgagRQgagQgSgaQgSgagIgiQgJgiAAgqIAAg4IB6AAIAABBQAAAqASAUQARARAgAAQAhAAAQgRQASgUAAgqQAAgfgLgaQgKgYgSgWQgSgVhFg7Qg9gwgagpQgTgegKggQgKgkAAgqQAAgpAIgjQAJghAQgZQARgaAagRQAbgQAggIIAAg9IBrAAIAAA9QAiAIAaAPQAaARARAaQASAZAJAiQAIAiAAAqIAAAaIh6AAIAAgiQAAgrgRgUQgQgSggAAQggAAgPASQgRAUAAArQAAAeALAaQAJAYATAXQASAUBFA6QA8AxAbApQATAeAJAgQALAkAAAqQAAAqgJAiQgIAigSAaQgRAagbAQQgaARgiAHIAAA8gAh+GXQglgOgZgbQgZgagNgmQgMgnAAgxIAAmrQAAgxAMgnQANgnAZgZQAZgbAlgOQAkgOAvAAQAvAAAlAOQAkAOAZAbQAZAZANAnQANAnAAAxIAAGrQAAAxgNAnQgNAmgZAaQgZAbgkAOQglANgvAAQgvAAgkgNgAhbkcQgSAUAAArIAAG7QAAArASAUQAQATAgAAQAhAAAQgTQASgUAAgrIAAm7QAAgrgSgUQgQgRghAAQggAAgQARgAn9GbIAApzIhkAAIAAhbQAkAAAZgIQAYgIAQgOQAWgVATg0IBYAAIAAM1g");
	mask.setTransform(65,50.7);

	// Слой 2
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(-40.1,-37.7,1,1,0,0,0,103.5,103.5);
	this.instance.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib._10();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,129,100), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(35.3,111,1,1,0,0,0,35.3,111);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-57.9,0,128.5,222), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(83.1,84.7,0.941,0.941,0,0,0,88.2,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.84,scaleY:0.84},6,cjs.Ease.get(-1)).to({scaleX:0.71,scaleY:0.71},8,cjs.Ease.get(0.99)).to({regY:90.1,scaleX:0.84,scaleY:0.84,x:83,y:84.8},8,cjs.Ease.get(-1)).to({regY:90,scaleX:0.94,scaleY:0.94,x:83.1,y:84.7},7,cjs.Ease.get(0.99)).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.7,169.5);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(66.5,101.3,1,1,0,0,0,66.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:99.4},6,cjs.Ease.get(-1)).to({y:97.5},6,cjs.Ease.get(1)).to({y:99.4},6,cjs.Ease.get(-1)).to({y:101.3},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.3,133,200);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23копия();
	this.instance.parent = this;
	this.instance.setTransform(66.5,100,1,1,0,0,0,66.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:101.1},4,cjs.Ease.get(-1)).to({y:102.5},5,cjs.Ease.get(1)).to({y:101.3},6,cjs.Ease.get(-1)).to({y:100},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133,200);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23копия2();
	this.instance.parent = this;
	this.instance.setTransform(66.5,100,1,1,0,0,0,66.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:98.8},5,cjs.Ease.get(-1)).to({y:97.5},5,cjs.Ease.get(1)).to({y:98.5},5,cjs.Ease.get(-1)).to({y:100},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133,200);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 30
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(349.1,89.2,1,1,0,0,0,65.1,89.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({y:-143.2},4).to({y:-127.1},2).wait(37).to({y:-143.2},2).to({y:89.2},4).to({_off:true},1).wait(4));

	// Символ 29
	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(207.1,89.2,1,1,0,0,0,65.1,89.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({y:-143.2},4).to({y:-127.1},2).wait(41).to({y:-143.2},2).to({y:89.2},4).to({_off:true},1).wait(2));

	// Символ 28
	this.instance_2 = new lib.Символ28();
	this.instance_2.parent = this;
	this.instance_2.setTransform(65.1,89.2,1,1,0,0,0,65.1,89.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-143.2},4).to({y:-127.1},2).wait(45).to({y:-143.2},2).to({y:89.2},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130.2,178.4);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 23 - копия 2
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(66.5,100,1,1,0,0,0,66.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({y:90.2},2).to({y:337.2},6).wait(5).to({y:100},6).wait(37));

	// Символ 23 - копия
	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(208.5,100,1,1,0,0,0,66.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({y:90.2},2).to({y:337.2},6).wait(9).to({y:100},6).wait(35));

	// Символ 23
	this.instance_2 = new lib.Символ35();
	this.instance_2.parent = this;
	this.instance_2.setTransform(350.5,100,1,1,0,0,0,66.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({y:90.2},2).to({y:337.2},6).wait(13).to({y:100},6).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,417,201.3);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(100,22.5,1,1,0,0,0,100,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},7,cjs.Ease.get(-1)).to({alpha:0},7,cjs.Ease.get(1)).to({alpha:0.465},7,cjs.Ease.get(-1)).to({alpha:1},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,45);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(223.7,46.6,1,1,60.4,0,0,35.4,111);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:385,y:394.8},53).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(81.1,-89.4,256.5,221.4);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACWVHQgGgBgIgJQgQgPgDgNQgCgGABgJIABgRQAAgEgCgCQgBgBgJgDQgIgDAAgIQgBgJAIgCQgPABgCgIQgBgGAGgGQAHgGABgDQgXADgJgFQgHgEgGgIQgQgUABgSQAAgLAIgLQAHgKALgDIAPgEQAJgBAEABQAHACAFAFQAFAEABAGQAAAFgDAEQgEAFgGABQAEAGgEAEQgCADgEgBQgEAAgCgDQgEgFgBgIQgHgBgFAGQgFAFABAGQACAOAPAFQAJADAIgEQALgFAHgYQAFgXgHgLQgGgJgTgGQgWgEgMAEQgHADgMAKIgIAJQgHAJABAYIAAACIAHARQAIASAFAJIAKAQIAXA0IABACIABADIACAEIAAABIABAJQAAAHgCAIQgBAFgDABIgFACIgFAFQgEAGgFACQgEABgFAAQgSAAgIgCQgPgDgHgIQgNANgJACQgHABgMgEQgLgCgIgFQgKgHgCgJQgBgGABgGQADgYAMgfIAXg0IAEgFQAFgPAAgTQgBgKADgDQgCgDgBgHQgCgIgMgJIgHgFQgFgEgGgBIgHgBIgMgBIgKABIgKAEIgLADIgEABQgJANgEAOIABACIABAGQAAATADAGQABADAEAFIAIAJQAOAJAQgIQAIgDABgFIADgJIACgJQAAgGgHgCQgEgCgCACIgDAEIgDAGIgCAIQgCAFgEgBQgDgCgBgFIAAgIQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQgBgCgFAAQgEAAgBgCQgDgDACgDQAAAAAAgBQABAAAAAAQABAAAAgBQABAAABAAIAEgCQACgCAAgJQAAgEACgDQACgFAEAAQAEAAAAAGQAAAEABABIADABQALgCAHACIAMAGIAHAGQAGAHAAALQAAAJgDAKQgDANgEAFQgCADgKAHIgIAEIgJABIgPAAIABAIIAAABIACABQADADAAAFQAAADgBACIgFAEIgHAFIgCAFIAHACQAGADABAFIgBACQgCAEgCABIgFAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAgBIgDADIgFABIADAHIABAHIgBARIgCAHQgDAEgCAAIgBAAQgCAFgGAFQgSATgRgBIgFgBIgCgBQgDgDADgHQANgYAFgQQAIgWgCgTQAAgNgHgWQgIgagBgJQgFgZAHgbQAJgfAWgFQgPgDgGgDQgLgJACgLQACgFAFgDQAGgCAFADQACgGgFgIIgKgLQgSgUAHgmQACgLAFgTIAJgcQALg2gWgyIgCgGQAAgDADgCQADgCADAAQAFABAHAFQAOAMAGASQAHASgDASIAQAHQAFACABACQAAADgEADIgFAEQgCAEAFAEIAIAIQACAEgDAEQgDAEgEgBQAmAJAPAWQAJANgDARQgCARgNAIIgMAEQgHADgEADIgJAGQgFACgFgGQgFgFADgFQgDACgDgCQgDgCgBgEQgBgEAEgIIAIgRIAEgDQADgCADAEIAEAIQAEAGAIgDQAIgBACgIQABgGgEgGQgEgHgGgCQgLgFgQADQgZAiAFAVQACANANAJQANAJANgDQAPgEAEADQAEACABAFQANgIAKgQQAPgZgGgRIgDgJIAAgDQgkhShYioQgOgZgGgOQgJgXgDgUIAAgEIAAgGIgBgTIACgQIACgGIAGgJQADgEAIgIIAEgDIAHgHQAPgKAIgBIAAAAIACgCIAEgCIgSgHQgPgGgHgIQgEgEgFgMQgOgeADgaQABgLAKgaQAahAAPgfQAMgZAVgmIABgCQAAAAAAgBQgBAAAAAAQAAgBAAAAQABgBAAAAIACgGQAHgJALgUIACgHIAAgEQAAgDADgEIAphIIAEgYQACgWgLgYQgFgKgGgFQgHgEgRAAQgOAAgIADQgLAFgKARIgBACIAAAAIgDAFQgCACgBAIIAAALQgBAGABAEIAGAMIABAFIAGAIIAGAFIAIAEIAAAAIAEAAIAEgDIAIgFIAGgGQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIABgCIAEgHIABgDIAAAAQgBgJgDgIIgMACQgGAEgBAEIgBAGQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgDAAgCgDIgEgHIgGgFQgCgCAAgFQAAgIAEgDIADgDIADgDQACgGAFgBQAFgCAGADIAGACIAFAAQAHAAAEABIAEACIAHAFQADADABAFIACAIIAAAGIgBAGQAAALgCAFIgEAGQgCAIgEAFIgIAIIgGAGIgHABIgHABIgHADQgDACgDgBIABATQACAMgBAHQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBAAQgDAEgGgEQgFgFgDAAQgCACAAAEIgBAEIABAWIgBAIIgEAIIgHAMIgCAGIgJAKQgBADgDABIgFACIgIAEQgFADgFgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgBgDQABgFADgBIACAAIAGgJIAHgLQAGgMABgHQACgJgCgOQgEgrgMgfQgFgNgBgHQgBgHAFgaQACgUADgGQADgFAIgIQAHgIADgFIABgBIgBgBIgBgCIgEgBIgGgCQgGgCgDgGIgBgEQgBgEABgEQABgFAGgDIADgBIAAAAQAEgCAEgBQgBgEgDgEIgKgMQgRgVAGglQACgLAGgSIAIgdQAMg2gXgyIgBgGQAAgDADgCQADgCADAAQAFAAAGAGQAOAMAHASQAGARgCATIAQAGQAFACAAAEQAAACgEACIgFAFQgCAEAGAEIAIAIQACAEgDAEQgDAEgEgBQAmAJAOAWQAJANgCARQgDARgNAHIgLAFQgIADgDADIgJAFQgGACgEgEQgFgGACgFQgCACgDgCQgDgCgBgEQgBgEAEgIIAIgQIADgFQADgBADAEIAFAJQAEAFAIgDQAHgBACgIQACgGgEgGQgEgHgHgCQgKgFgRADQgZAhAFAWQADAOANAIQAMAIAOgCQAOgDAEACQAEACACAEQAMgHALgQQAPgagGgQIgDgJIAAgDQglhShYinQgNgZgGgQQgKgWgCgUIAAgEIAAgFIgBgVIABgPIACgGIAGgJQADgEAJgHIADgFIAIgGQAPgLAHgBIABAAIACgBIADgCIgSgHQgPgGgHgIQgDgEgGgMQgNgeACgaQACgLAJgaQAahAAPgfQANgZAVgmIAAgBQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIADgEQAHgKALgUIACgHIAAgEQAAgCADgGIAohIIAFgXQACgVgLgYQgFgLgGgFQgHgEgRAAQgOAAgIADQgLAGgKAQIgCACIAAABIgDAEQgBACgBAIIgBALQgBAFACAFIAFAMIACAEIAGAIIAGAGIAIADIAAABIADgBIAFgCIAHgFIAGgGQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAIACgDIADgFIABgEIAAgBQgBgIgDgJIgLADQgHADAAAGIgBAEQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgEABgCgFIgDgGIgHgFQgBgCAAgFQAAgIADgDIAEgDIACgDQADgGAFgCQAEgBAHADIAGACIAEAAQAIAAADABIAEACIAHAFQAEADABAFIABAHIAAAHIgBAGQAAALgCAFIgDAGQgDAHgEAGIgHAJIgHAEIgHACIgHABIgGADQgEACgDgBIACATQABAMgBAHQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgEADgFgEQgGgFgDAAQgBACAAAFIgCADIABAXIAAAGIgEAJIgHANIgCAEIgJALQgCACgDACIgEACIgIAFQgGACgEgBQgBAAAAAAQgBAAgBAAQAAgBAAAAQgBAAAAAAIgBgFQABgEACAAIACgBIAGgJIAHgMQAGgMACgGQACgJgCgNQgFgsgLggQgFgNgBgGQgBgIAEgZQADgUADgGQACgFAIgIQAIgIACgEIABgDIAAAAQgCgDgDAAIgGgCQgGgCgDgGQgDgHADgFQACgHAGgDQAGgEAHABQAAgEgEgEIgHgHQgPgMgFgSQgEgRAGgWIALgnQAKgngGgnQgCgPgEgHIgHgLQgEgGABgGIAAAAQgCgCABgEQABgEAEgCQAEgDAFACQAGAAAIAJQAQAPADANQACAGgBAJIgBAQQAAAGACABQABACAJACQAIAEAAAHQABAJgIACQAPgBACAJQABAEgGAHQgHAGgBADQAXgDAJAFQAHADAGAJQAQAUgBASQAAALgIAKQgHALgLADIgPAEQgJAAgEAAQgHgBgFgGQgFgEgBgGQAAgFADgFQAEgEAGgBQgEgGAEgEQACgCAEAAQAEAAACAEQAEAEABAIQAHABAFgGQAFgFgBgHQgCgOgPgEQgJgDgIAEQgLAGgHAXQgFAXAHALQAGAJATAGQAWAFAMgFQAHgDAMgKIAIgJQAHgJgBgYIgBgBIgGgRQgIgUgFgIIgKgQIgXg0IgBgCIgBgCIgCgFIAAgBIgBgJQAAgHACgIQABgFADgBIAFgCIAFgFQAEgGAFgCQAEgCAFABQASAAAIABQAPAEAHAIQANgNAJgBQAHgCAMAEQALACAIAFQAKAHACAKQABAFgBAGQgDAYgMAfIgXA0IgEAFQgFAQAAARQABAKgDAFQACACABAHQACAIAMAJIAHAEQAFAEAGACIAHABIAMABIAKgBIAKgEIALgDIAEgCQAJgMAEgOIgBgBIgBgHQAAgTgDgGIgFgIIgIgJQgOgJgQAIQgIAEgBADIgDAKIgCAJQAAAGAHACQAEACACgCIADgDIADgHIACgIQACgFAEACQADABABAFIAAAIQAAABAAABQAAABABAAQAAABAAAAQAAABABAAQABABAFABQAEABABABQADADgCADQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgEACQgCACAAAKQAAADgCADQgCAFgEAAQgEgBAAgFQAAgEgBgBIgDAAQgLACgHgCIgMgHIgHgHQgGgGAAgLQAAgJADgKQADgNAEgFQACgDAKgHIAIgEIAJgBIAOAAIAAgIIAAgBIgCgBQgDgDAAgFQAAgEABgBIAFgEIAHgGIACgEIgHgCQgGgDgBgFIABgCQACgDACgCIAFAAQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAIADgCIAFgCQgDgDAAgDIgBgIIABgQIACgHQADgEACgBIABAAQACgEAGgGQASgSARABIAFABIACABQADAEgDAGQgNAZgFAPQgIAWACATQAAAOAHAVQAIAaABAJQAFAagHAaQgJAggWAEQAPACAGAFQALAIgCALQgCAFgFADQgGACgFgDQgCAGAFAHIAKAMQASAVgHAlQgCALgFASIgJAdQgLA2AWAyIACAGQAAADgDACQgDACgDAAQgFAAgHgGQgOgMgGgSQgHgSADgSIgQgGQgFgDgBgDQAAgCAEgDIAFgEQACgEgFgEIgIgIQgCgEADgEQADgEAEABQgmgJgPgWQgJgNADgRQACgRANgIIAMgEQAHgCAEgEIAJgFQAFgCAFAEQAFAGgDAFQADgCADACQADACABAEQABAEgEAIIgIAQIgEAEQgDACgDgEIgEgJQgEgFgIADQgIABgCAIQgBAGAEAGQAEAHAGACQALAFAQgDQAZgigFgVQgCgNgNgJQgNgIgNACQgPADgEgCQgEgCgBgEQgNAHgKAQQgPAaAGAQIADAJIAAADQAkBSBYCnQAOAZAGAPQAJAXADAUIgBAEIABAFIABAUIgCAQIgCAGIgGAJQgDAEgIAHIgEAFIgHAGQgPAKgIACIAAAAIgCABIgEACIASAHQAPAHAHAHQAEAEAFAMQAOAegDAaQgBALgKAaQgaBAgPAfQgMAagVAlIgBABQAAABAAAAQABABAAAAQAAABAAAAQAAABgBABIgCAEQgHAKgLAUIgCAHIAAAEQAAACgDAFIgpBIIgEAYQgCAVALAYQAFALAGAFQAHAEARAAQAOABAIgEQALgGAKgQIABgDIAAAAIADgEQACgCABgIIAAgLQABgGgBgEIgGgMIgBgFIgGgHIgGgGIgIgDIAAgBIgEABIgEACIgIAFIgGAGQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAIgBACIgEAGIgBAEIAAABQABAIADAIIAMgCQAGgEABgFIABgEQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQADgBACAFIAEAGIAGAFQACACAAAFQAAAIgEADIgDADIgDADQgCAGgFABQgFACgGgDIgGgCIgFAAQgHAAgEgBIgEgCIgHgFQgDgDgBgFIgCgIIAAgGIABgGQAAgLACgFIAEgGQACgHAEgGIAIgJIAGgEIAHgCIAHgBIAHgDQADgCADABIgBgTQgCgMABgHQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQADgDAGAEQAFAFADAAQACgCAAgFIABgDIgBgXIABgHIAEgIIAHgNIACgEIAJgLQABgCADgCIAFgCIAIgFQAFgDAFACQAAAAABAAQABAAAAAAQABABAAAAQAAAAABAAIABAFQgBAEgDAAIgCAAIgGAKIgHAMQgGALgBAHQgCAJACANQAEAsAMAfQAFAOABAGQABAIgFAZQgCAUgDAGQgDAFgIAIQgHAIgDAFIgBABIABABIACACIADABIAGACQAGACADAGIABAEQABADgBAEQgBAGgGADIgCABIgBAAQgEACgEABQABAEADAEIAKAMQARAVgGAlQgCALgGASIgIAeQgMA1AXAyIABAGQAAADgDACQgDACgDAAQgFAAgGgGQgOgMgHgSQgGgSACgSIgQgGQgFgCAAgEQAAgCAEgCIAFgFQACgEgGgEIgIgIQgCgEADgEQADgEAEAAQgmgIgOgWQgJgNACgRQADgRANgHIALgFQAIgCADgDIAJgHQAGgBAEAEQAFAGgCAFQACgCADACQADACABADQABAFgEAIIgIAQIgDAFQgDABgDgEIgFgIQgEgGgIACQgHADgCAGQgCAHAEAHQAEAFAHAEQAKAEARgDQAZghgFgWQgDgOgNgIQgMgJgOADQgOADgEgCQgEgCgCgFQgMAIgLARQgPAZAGAPIADAKIAAAEQAlBRBYCnQANAaAGAPQAKAWACAUIAAAEIAAAGIABAUIgBAPIgCAGIgGAIQgDAFgJAHIgDAFIgIAGQgPALgHABIgBAAIgCABIgEACIATAHQAPAHAHAHQADAEAGAMQANAegCAaQgCALgJAaQgaBAgPAfQgNAagVAlIgBABQABABAAABQAAAAAAABQAAAAAAABQAAAAAAABIgDAEQgHAKgLAUIgCAHIAAAEQAAADgDAFIgoBIIgFAXQgCAVALAYQAFALAGAEQAHAFARABQAOAAAIgEQALgFAKgRIABgCIABAAIADgFQABgCABgIIABgLQABgGgCgEIgFgNIgCgDIgGgIIgGgGIgIgDIAAgBIgDABIgFACIgHAFIgGAGQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABIgCACIgDAFIgBAEIAAABQABAIADAJIALgDQAHgDAAgFIABgGQABAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAEAAACADIADAHIAHAFQABACAAAFQAAAIgDADIgEADIgCADQgDAGgFACQgEABgHgDIgGgCIgEAAQgIAAgDgCIgEgBIgHgFQgEgDgBgEIgBgIIAAgHIABgGQAAgLACgFIADgGQADgIAEgFIAHgIIAHgGIAHgBIAHgBIAGgDQAEgCADABIgCgTQgBgMABgHQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAQAEgEAFAFQAGAEADgBQABgBAAgFIABgDIAAgWIAAgHIAEgJIAHgNIACgEIAJgLQACgCADgCIAEgCIAIgEQAGgEAEACQABAAAAAAQABAAABAAQAAABAAAAQABAAAAABIABADQgBAFgCABIgCAAIgGAJIgHAMQgGAMgCAGQgCAJACANQAFAsALAgQAFANABAGQABAIgEAaQgDATgDAGQgCAFgIAIQgIAIgCAEIgCADIABABQACABADABIAGABQAGACADAHQADAGgDAGQgCAHgGADQgGADgHAAQAAAEAEAEIAHAHQAPAMAFASQAEARgGAWIgLAnQgKAnAGAnQACAOAEAJIAHAKQAEAGgBAFIAAABQACACgBAEQgBAEgEACQgDACgDAAIgDAAgAgCSwIgQAmIgKAaIgHARIgDAIQgCAKAIAGIADACIAEgBIAKgIQAKgHAMAFIAPAHQAKAFAFgHQACgDgBgIIgCgQIgDgKQgPgjgRgiQgBACgCADgAhWS2IABgBIgCAAgAgmQ4IAMAFQAGAEAHAHIAGAFIAHAKIADgDQAEgFAEgCIACgCIAIgGIAFgDQAEgEAKgFIAFgGQgEgCgGgFIgFgDIgOgMIgKgHQgFgEgDgBIgBADQgBADgEADIgEAEIgIAFIgDAFIgQAJIgGABIgDAAIAKAGgAiCJLQgOATADAWQABAGAEAPQALAfAWAuIA/CDIAAABIACACIAWAtQAEAHAFASIAEAMIAzhjIAIgOIACgHQARggANghIAJgWQAGgMANgYIATgjQALgagCgOQgBgLgIgPQgEgHgDgCQgDgDgLgFQgMgEgHABQgJABgQAJIgKADQgGAEgDADQgEAFACAHQABAGAFAFQAIAHAPgDQADgBADgKQADgIAGAAQAGAAAFAMQAFAJAIAEIAMAGQADAFAAAGQgBAFgEAFQgHAIgNgCQABAOgDAGQgDAEgFACQgFACgEgDQgCgBgCgEQgHgOAAgJQgFgCgIACIgOACQgNACgKgKIAFBPIAAAGIACABQAEAEAPABQAOABACAJQADAJgOAHQgPAJgSgDQAAAFADAJIAFAOQADAKgGAPQgGATgLAJQgGAGgGAAQgGgBgHgKQgPgUgCgMQgEgSALgTQgSAAgOgFQgRgIgEgPQgCgHAFgEQACgCAFAAQAJgBAMABQAMACADgCQAGgEAAgNIgBg6QAAgHgCgCQgDgCgHABIgYAEQgNACgDAHIgBAIQAAAGgCACQgDAEgFABQgGAAgDgEQgFgGgBgNIAAgBIgBgCIAAgHQgBgCgEABQgLgBgEgEQgIgHADgHIAGgGQAGgEAJgDQgBgKAFgIQAEgFAEgBQAFgDAEAEQADACABAHIABAGIABADIADAAIAHADIAFABQAIAAACgCQACgDABgFIACgHQADgMgEgFIgKgGIgNgKIgMgGIgHgBIgGgCQgSADgNARgAAAHjIggAiIgHAFIgTALIgKAGIgHACIADACIARADQAOACANAJQALAIAHAMIADAJIACADIAAADIADACQACgBACgDIAgghIAGgFIATgKIAKgHIAHgCIgDgCIgQgDQgPgCgMgJQgLgIgHgLIgEgKIgCgDIAAgEIgDgBQgCAAgBADgAA4HDQgCACgBAEIgBAHQgDAMAEAGIAJAHIAOAJIALAGIAIACIAFABQATgEANgQQANgTgDgXQAAgFgFgPQgLgfgWgvI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");
	mask.setTransform(20.3,136.9);

	// Слой 5
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(-237.7,41.5,1,1,0,0,0,35.3,111);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.uzor();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,40,273), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5));

	// Слой 2
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(333.1,439,1,1,0,0,0,207.1,89.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({alpha:0},3).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(334.5,217.6,1,1,0,0,0,208.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},4).to({alpha:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(126,117.6,417,201.3);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(100,22.5,1,1,0,0,0,100,22.5);

	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(100,22.5,1,1,0,0,0,100,22.5);
	this.instance_1.alpha = 0.449;
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(2));

	// Слой 1
	this.instance_2 = new lib.Символ8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(100,22.5,1,1,0,0,0,100,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,45);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(97,25.2,1,1,0,0,0,59,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(100,22.5,1,1,0,0,0,100,22.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ21(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,200,45), null);


// stage content:
(lib.kazah_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover()
		{
		this.card.gotoAndPlay(1);
		}
		
		stage.canvas.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout()
		{
		this.card.gotoAndPlay(5);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(242.8,41.8,1.051,1.051,0,0,0,160.6,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.2,152.6,1.066,1.066,0,0,0,20.1,136.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ42();
	this.instance_2.parent = this;
	this.instance_2.setTransform(534.2,158.4,1,1,0,0,0,82.9,84.7);

	this.instance_3 = new lib.Символ9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(139.6,85.6,1,1,0,0,0,64.5,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ17();
	this.instance_4.parent = this;
	this.instance_4.setTransform(532.5,277.1,1,1,0,0,0,100,22.5);

	this.instance_5 = new lib.Символ16();
	this.instance_5.parent = this;
	this.instance_5.setTransform(301.2,93.2,1.113,1.113,0,0,0,78.5,45);

	this.instance_6 = new lib.Символ11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(528.1,36,0.74,0.74,0,0,0,129.1,29);

	this.card = new lib.Символ2();
	this.card.parent = this;
	this.card.setTransform(60.1,167.6,0.809,0.809,0,0,0,99.7,150.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.card},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Слой 7
	this.instance_7 = new lib.j();
	this.instance_7.parent = this;
	this.instance_7.setTransform(323,180.5,1,1,0,0,0,350,233.5);
	this.instance_7.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 2
	this.instance_8 = new lib.Символ1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(320,152.6,1,1,0,0,0,322.5,157);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(128.1,-9.9,865,576.4);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_10.png?1487173530826", id:"_10"},
		{src:"images/back_card.png?1487173530826", id:"back_card"},
		{src:"images/bg.jpg?1487173530826", id:"bg"},
		{src:"images/btn.jpg?1487173530826", id:"btn"},
		{src:"images/chip1.png?1487173530826", id:"chip1"},
		{src:"images/king.jpg?1487173530826", id:"king"},
		{src:"images/logo.png?1487173530826", id:"logo"},
		{src:"images/queen.jpg?1487173530826", id:"queen"},
		{src:"images/uzor.png?1487173530826", id:"uzor"},
		{src:"images/valet.jpg?1487173530826", id:"valet"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;