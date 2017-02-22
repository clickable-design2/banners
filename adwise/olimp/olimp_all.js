(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.BasketballPNG = function() {
	this.initialize(img.BasketballPNG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,226);


(lib.bball = function() {
	this.initialize(img.bball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,212);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,54);


(lib.card = function() {
	this.initialize(img.card);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,76);


(lib.cup = function() {
	this.initialize(img.cup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,345,466);


(lib.fball = function() {
	this.initialize(img.fball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,236);


(lib.hokey = function() {
	this.initialize(img.hokey);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,141);


(lib.like = function() {
	this.initialize(img.like);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,76);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,74);


(lib.photo = function() {
	this.initialize(img.photo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,448,300);


(lib.tennis_PNG10405 = function() {
	this.initialize(img.tennis_PNG10405);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,179);// helper functions:

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


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fball();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(0,0,236,236), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.BasketballPNG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(0,0,226,226), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bball();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.472,0.472);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(0,0,100,100), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,253,0,0)","#FFFD00","#FFFF99","rgba(255,255,153,0)"],[0,0.298,0.533,1],-81.9,0,82,0).s().p("AszeJMAAAg8RIZnAAMAAAA8Rg");
	this.shape.setTransform(82,192.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(0,0,164,385.9), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#922125","#621C1F"],[0,1],-426.8,0,426.8,0).s().p("EhCrAYZMAWegwxMBu5AAAMgWeAwxg");
	this.shape.setTransform(426.8,156.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(0,0,853.7,312.2), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(0,0,175,54), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9BE43").s().p("ABYBkIAAgQIhUAAIAAAQIgbAAIAAgwIAFAAQAIAAADgEQADgDABgLIAKhbIBhAAIAABtIAPAAIAAAwgAAgAkIgBALQgCAEgDACIAqAAIAAhOIgdAAgAmBBSQgNgFgKgJQgKgJgHgOQgFgPAAgRQAAgMACgJQADgKAFgIQALgSAQgHQAQgJATABIANAAIAOAEQANAFAJAJQAGAFAEAFIAHANQADAHABAIQACAHAAAJQAAAggUAVQgVAUgfAAQgOAAgNgEgAl/gOQgFAFgDAGQgCAHAAAJQAAASAKAKQAFAFAGACQAGADAIAAQAOAAAKgKQAMgKAAgSQgBgJgDgGQgCgHgFgFQgGgFgGgDQgFgDgIABQgPgBgKALgAH/BTIAAgaQAMAAAEgDQAEgDABgMIAKhgIBkAAIAACNIglAAIAAhsIgfAAIgFBAIgDASQgCAHgDAFQgGAKgMADQgGABgIAAIgSgBgAMTBUIAAiNIAlAAIAABFIBJhGIAMAAIAACOIglAAIAAhJIhLBJgACPBUIAAiNIAlAAIAABFIBKhGIALAAIAACOIglAAIAAhJIhKBJgAKfBUIAAiNIBZAAIAAAhIg0AAIAAATIAvAAIAAAgIgvAAIAAAXIA1AAIAAAigAGYBUIAAiNIBYAAIAAAhIgzAAIAAATIAvAAIAAAgIgvAAIAAAXIA1AAIAAAigAE/BUIAAhsIgjAAIAAghIBpAAIAAAhIgiAAIAABsgAiBBUIAAiNIBZAAIAAAhIg0AAIAAATIAvAAIAAAgIgvAAIAAAXIA1AAIAAAigAkHBUIAAiNIBlAAIAAAhIhBAAIAAASIAaAAQAMAAAJADQAKADAGAFQAOANAAATQAAAKgEAJQgDAHgHAHQgNANgYABgAjjAzIAaAAQAHABAEgFQAEgEAAgFQAAgHgEgDQgEgFgHAAIgaAAgAnqBUIAAhrIgsAAIAABrIglAAIAAiNIB2AAIAACNgAqeBUIgIgSIg1AAIgIASIgmAAIAAgGIBAiIIARAAIBACIIAAAGgArPAjIAdAAIgPgigAs7BUIAAg5IgsAAIAAA5IglAAIAAiNIAlAAIAAA0IAsAAIAAg0IAlAAIAACNgANIhCQgGgDgEgEQgJgIAAgQIAUgCQAAAFADADQADADAGAAQAHAAADgDQAEgDABgFIATACQAAAQgJAIQgIAJgQAAQgIAAgGgCg");
	this.shape.setTransform(90.9,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(0,0,181.8,20), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A0DFOIg9gRQgegLgbgPQgcgQgYgVQgwgogehCQgOghgHglQgIglAAgoQAAgpAIgkQAHgmAOghQAehDAwgoQAYgVAcgPQAagQAfgLQA7gVBCAAQAkAAAiAGQAiAGAgAMQBAAZAyA8QAyA6ANBUIioAAQgRgvgkgXQgkgYg4AAQhMAAgtAxQgtAzgBBRQAAAlAMAgQALAgAXAaQAXAbAeAOQAfANAlgBQA4ABAmgbQAngaANg1ICoAAQgGAtgQAmQgPAmgYAeQgyA+hAAaQggAMgjAHQgjAGglAAgAQHFMIAAqYICpAAIAADHIB6AAQA0AAArAPQAqAQAdAcQAbAbAUAjQATAhAFAnQADAmgDAnQgFAmgTAkQgUAjgbAbQgdAbgqAQQgrARg0gBgASwCzIB6AAQAcAAATgRQATgPAEgYQAEgZgFgWQgEgYgUgRQgSgQgbAAIh6AAgACWFMIgmhSIj4AAIgmBSIi2AAIAAgXIExqHIBPAAIEuKHIAAAXgAA4BpIhEigIhFCgICJAAgAq1FMIAAoAIikAAIAAiYIHuAAIAACYIiiAAIAAIAgAGIFJIAAqXIElAAQBeAAA5A3QA7A5AABcQAAAfgPAgQgPAfgZAUQAUALAPANQAPAOALAUQAWAmAAAuQAABZg3A4Qg5A6hjAAgAI1CyICGAAQAvAAAFg0QACgYgPgRQgPgRgZAAIiFAAgAI1hIIBsAAQAXAAAOgPQANgPABgXQABgXgOgRQgOgSgYAAIhsAAg");
	this.shape.setTransform(156.1,33.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(0,0,312.1,67.8), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.photo();
	this.instance.parent = this;
	this.instance.setTransform(30,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(30,0,448,300), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egm/AYZMAAAgwxMBN/AAAMAAAAwxg");
	this.shape.setTransform(249.6,156.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,0,499.2,312.2), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArwCvQgIgDgHgFQgGgGgEgIQgDgIgBgLIAPAAQAAAHADAGQACAFAFAEQAFAEAFACQAGACAHAAQAHAAAGgCQAGgCAFgEQAEgDADgFQADgGAAgHQAAgGgDgFQgDgGgEgDIgLgGIgNgCIgKAAIAAgNIAJAAQAGAAAGgCIAJgEQADgDACgEQADgFAAgFQAAgFgDgFQgCgFgDgDQgFgDgEgBQgGgCgFAAIgLABIgJAEQgEADgCAEQgCAEgBAGIgOAAQgBgJAEgHQAEgHAGgEQAFgEAJgCQAIgCAIAAQAJAAAIADQAIACAGAFQAGAFADAHQADAHAAAIQAAAFgCAEIgDAJIgHAGIgIAFIALAFQAGAEADAEQAEAFACAFQACAGAAAHQgBAKgDAIQgEAIgHAFQgHAFgJADQgJADgLAAQgKAAgJgDgAmrCvIgNgEQgGgCgGgDIgKgIQgFgFgDgGIgHgMIgEgOQgBgHgBgIQABgIABgIQACgHADgHIAGgMQADgGAFgEIAKgIIAMgHIANgDIAOgBIAPABIANADIALAHIAKAIIAJAKQAEAGACAGQADAHACAHQABAIAAAIIgBAPIgFANIgFANIgIAKIgLAIQgFAEgHACIgNAEIgPABIgOgBgAmyA1QgJAEgHAIQgJALgDAHQgEAOAAAJIABAMIADALQAEAKAHAHQAHAIAKAEQAHACAOABQAIAAANgDQAJgEAIgIQAHgHAEgKIAEgLIAAgMQAAgIgEgPQgEgKgHgIQgHgHgKgEQgNgEgIAAQgLAAgKADgAC8CvQgHgBgGgDIgMgGQgFgDgFgFIgJgKIgGgMIgEgOIgBgPIABgQIADgNIAHgNIAJgKIAKgIIAMgGQAGgCAHgBQAGgCAIAAQAKAAAKADQAJADAIAFQAJAGAFAIQAHAIACAKIgPAAQgDgGgFgGQgEgFgHgEIgMgFQgHgBgHAAIgMAAIgKAEQgJADgIAIQgGAHgEALQgEAOAAAIQAAALAEAKQAEALAGAHQAIAIAJADIAKAEIALABQAIAAAHgCQAIgCAGgEQAGgEAFgFQAEgGACgIIAQAAQgEAPgFAGQgGAIgHAGQgJAFgKADQgKADgKAAIgOgBgAAnCvQgHgBgGgDQgHgCgFgEQgGgDgFgFIgHgKIgGgMQgDgHgCgHQgBgHAAgIQAAgIABgIIAFgNIAGgNIAHgKQAFgEAGgEQAFgDAHgDIAMgDIAPgCQAKAAAJADQAKADAIAFQAJAGAFAIQAGAIAEAKIgQAAQgDgGgFgGQgFgFgFgEIgNgFQgHgBgHAAIgLAAIgLAEQgKADgGAIQgHAHgFALQgDAOAAAIQAAALADAKQAFALAHAHQAGAIAKADIALAEIALABQAHAAAHgCQAIgCAGgEQAFgEAFgFQAFgGADgIIAQAAQgGAPgDAGQgHAIgIAGQgIAFgLADQgJADgKAAIgOgBgAISCuIABhnIhaBnIgFAAIAAiJIARAAIgCBoIBZhoIAGAAIAACJgAGACuIABhnIhZBnIgGAAIAAiJIAQAAIgBBoIBahoIAEAAIAACJgAg8CuIABhnIhZBnIgFAAIAAiJIAQAAIgCBoIBZhoIAGAAIAACJgAjOCuIAAhjIgtA+IgDAAIgtg+IAABjIgQAAIAAiJIAGAAIA5BMIA4hMIAGAAIAACJgAoCCuIgsg/IgPACIgPAAIAAA9IgQAAIAAiJIAQAAIAAA/IASgBQAJgBAEgCQAFgDAGgLIAHgTQABgIADgEQAEgGADgDQAGgEAGgBQAHgCAJACIAAALIgKAAQgDABgEADQgDACgBAEIgEAJIgHAVQgHAMgFAEIAxBEIAAACgAtxCuIAAiJIBPAAIAAAOIg/AAIAAAtIA9AAIAAAPIg9AAIAAAwIBBAAIAAAPgAvyCuIAAiJIBbAAIAAAPIhLAAIAAAnIAnAAQALAAAJADQAKADAGAGQAGAFADAIQACAHAAAJQAAAJgCAIQgDAIgGAFQgGAGgKADQgJADgLAAgAviCgIAnAAQAIAAAFgCQAHgCADgEQAFgDABgFQADgFgBgGQABgGgDgFQgBgFgFgEQgDgDgHgCQgFgDgIAAIgnAAgAMUgkIgNgEQgGgCgFgEIgKgIQgGgEgDgGQgEgGgDgGIgDgOQgCgIAAgIQAAgIACgHQABgIADgGQACgHAEgFQADgGAGgFIAKgIQAGgEAFgCIAOgEIANgBIAPABIANAEQAGACAGAEIAKAIIAJALIAFAMQADAGACAIQABAHABAIIgCAPIgEAOIgFAMIgJAKIgKAIQgFAEgIADIgNAEIgPABIgOgBgAMOieQgKAEgHAHQgIALgDAHQgFAPAAAIIABAMIAEALQADAKAIAIQAHAHAKAEQAGADAOABQAIAAANgEQAKgEAHgHQAIgIAEgKIADgLIAAgMQAAgIgDgPQgEgKgIgHQgGgIgKgEQgNgEgJAAQgKAAgKAEgAH2gkIgOgEQgGgCgFgEQgGgDgEgFQgFgEgEgGIgHgMIgDgOQgCgIAAgIQAAgIACgHQABgIADgGIAGgMQAEgGAFgFIAKgIQAGgEAFgCIAOgEIANgBIAPABIANAEQAGACAGAEIAKAIIAJALQAEAFACAHIAEAOQABAHAAAIIAAAPIgFAOQgCAGgDAGIgJAKIgKAIQgGAEgGADIgNAEIgQABIgNgBgAHvieQgJAEgIAHQgJALgCAHQgFAPAAAIIAFAXQADAKAIAIQAHAHAKAEQAGADAOABQAIAAAOgEQAJgEAHgHQAIgIAEgKIADgLIABgMQAAgIgEgPQgEgKgIgHQgGgIgKgEQgNgEgJAAQgLAAgJAEgADBgkIgMgEQgGgCgGgEIgKgIQgFgEgDgGQgEgGgDgGIgEgOQgCgIAAgIQAAgIACgHIAEgOQADgHAEgFQADgGAFgFIAKgIQAGgEAGgCIANgEIAOgBIAPABIAMAEQAGACAGAEIALAIIAIALIAGAMQADAGABAIQACAHAAAIIgBAPIgFAOIgFAMIgIAKIgKAIQgHAEgGADIgNAEIgPABIgPgBgAC7ieQgJAEgHAHQgJALgDAHQgEAPAAAIIABAMIADALQAEAKAHAIQAIAHAJAEQAGADAPABQAHAAAOgEQAKgEAHgHQAHgIAFgKIADgLIAAgMQAAgIgDgPQgFgKgHgHQgHgIgKgEQgNgEgIAAQgLAAgKAEgAsEgkIgMgEIgLgFIgKgHIgJgKIgGgLQgDgFgCgHIgCgOIgZAAIAAA+IgQAAIAAiJIAQAAIAAA8IAZAAIADgOIAFgMIAHgLIAHgJIALgHIALgFIAMgEIANAAIAOABQAHABAGACIAMAGIAKAIIAJALIAHAMQACAGABAIQABAHAAAIQAAAIgBAIQgBAHgDAHIgGAMIgJAKIgKAIQgFAEgHACQgGADgHABIgOABIgOgBgAsLidQgKAEgHAHQgHAIgEAJQgEAPAAAIIAEAXQAEAKAHAIQAIAHAJAEQAKADALAAQALAAAKgDQAKgEAHgHQAHgIAEgKIADgLIABgMQAAgIgEgPQgEgJgHgIQgHgHgKgEQgKgEgLAAQgMAAgJAEgAFgglQgGgBgGgCIgNgHQgFgDgFgEIgIgLQgEgFgCgHQgDgGgCgHQgBgIAAgIQAAgIABgHIAFgOQACgGAEgGIAIgKIAKgIIANgGQAFgDAHgBQAHgBAIAAQAKAAAJADQAKADAIAFQAIAFAGAIQAGAJADAKIgPAAQgEgHgEgFQgFgFgGgEIgMgFQgHgCgHAAIgMABIgKADQgKAEgHAIQgHAHgEAKQgDAOAAAIQAAAMADAKQAEAKAHAHQAHAIAKAEIAKADIALABQAIAAAHgCQAHgCAHgDQAFgEAFgGQAFgGADgHIAPAAQgFAOgEAGQgGAIgIAGQgIAGgKADQgKACgKAAIgPgBgAhgglQgHgBgGgCIgMgHQgGgDgEgEIgJgLIgFgMQgEgGgBgHQgBgIgBgIQABgIABgHIAEgOIAGgMIAJgKIAKgIIAMgGQAGgDAHgBQAHgBAHAAQAKAAAKADQAKADAHAFQAJAFAFAIQAHAJADAKIgQAAQgDgHgFgFQgFgFgFgEIgNgFQgGgCgIAAIgMABIgKADQgJAEgIAIQgGAHgEAKQgDAOAAAIQAAAMADAKQAEAKAGAHQAIAIAJAEIAKADIAMABQAIAAAHgCQAHgCAGgDQAGgEAEgGQAFgGADgHIAQAAQgFAOgEAGQgGAIgJAGQgIAGgKADQgJACgLAAIgOgBgAwBgmIAAgMIAMABQAEgCADgCQADgDABgFQACgEABgGIAKhnIBUAAIAACJIgQAAIAAh7Ig1AAIgJBZQgBALgDAHQgDAHgEAEQgFAEgIABIgGAAIgMgBgAPxglIAAhjIgtA+IgCAAIgtg+IAABjIgRAAIAAiKIAHAAIA4BNIA4hNIAHAAIAACKgAJlglIAAiJIBbAAIAAAOIhKAAIAAAoIAmAAQAMAAAJADQAJADAGAFQAGAGADAHQADAIAAAJQAAAJgDAIQgDAHgGAGQgGAFgJAEQgJADgMAAgAJ2g0IAmAAQAIAAAGgBIAKgGQAEgDABgGQADgFAAgGQAAgGgDgEQgBgFgEgEQgEgEgGgCQgGgCgIAAIgmAAgABeglIAAh6IhJAAIAAB6IgPAAIAAiJIBoAAIAACJgAj2glIAAhjIgtA+IgDAAIgtg+IAABjIgRAAIAAiKIAHAAIA4BNIA5hNIAGAAIAACKgAmYglIAAiJIAQAAIAACJgAoUglIAAiJIAPAAIAAAvIAnAAQAKAAAKADQAJAEAGAGQAGAHAEAJQACAJAAAJQgBAJgDAIQgEAIgGAGQgHAGgIADQgJADgJAAgAoFg0IAkAAQAHAAAHgBQAFgDAFgEQAFgDADgGQACgFAAgIQABgGgDgGQgCgGgFgEQgDgEgHgDQgFgCgHAAIgnAAgAqVglIAAiJIBbAAIAAAOIhLAAIAAAoIAnAAQAMAAAJADQAJADAGAFQAGAGADAHQADAIAAAJQAAAJgDAIQgDAHgGAGQgGAFgJAEQgJADgMAAgAqFg0IAnAAQAIAAAGgBQAGgDAEgDQAEgDACgGQABgFAAgGQAAgGgBgEQgCgFgEgEQgEgEgGgCQgGgCgIAAIgnAAg");
	this.shape.setTransform(102.6,17.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(0,0,205.1,35.6), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjQBDQgNgFgKgIQgJgJgGgOQgGgOAAgRQAAgKADgKQACgKAFgIQALgRAQgIQAPgHATAAIANABIANAEQAMAEAKAJQAFAEAEAFIAHANQADAHABAIQACAIAAAHQAAAggUAUQgUATgfAAQgOAAgMgEgAjOgbQgFAFgDAHQgCAHAAAIQAAASAKAJQAFAFAGADQAGACAIAAQANAAALgKQAKgJAAgSQAAgHgDgHQgCgHgFgFQgFgFgGgDQgHgCgGAAQgPAAgKAJgAn7BDQgNgFgKgIQgJgJgHgOQgFgOAAgRQAAgKADgKQACgKAFgIQALgRAPgIQAQgHASAAIAOABIANAEQAMAEAKAJQAFAEAEAFIAHANQADAHABAIQACAIAAAHQAAAggUAUQgUATgfAAQgOAAgMgEgAn5gbQgFAFgDAHQgCAHAAAIQAAASAKAJQAFAFAGADQAGACAHAAQAOAAALgKQAKgJAAgSQAAgHgDgHQgCgHgFgFQgFgFgHgDQgGgCgHAAQgOAAgKAJgAhlBEIAAgaQAMABAEgDQADgEABgLIAKhdIBgAAIAACJIgjAAIAAhpIgeAAIgFA+QgBAKgCAIQgBAHgDAFQgGAJgMADQgGACgHAAQgJAAgJgCgAHFBFIAAiJIAkAAIAABDIBHhDIALAAIAACJIgjAAIAAhGIhIBGgAJZBFIAAiJIBWAAIAAAgIgyAAIAAATIAuAAIAAAfIguAAIAAAWIAzAAIAAAhgAGEBFIAAg3IgrAAIAAA3IgkAAIAAiJIAkAAIAAAyIArAAIAAgyIAkAAIAACJgADGBFIAAiJIBVAAIAAAgIgyAAIAAATIAuAAIAAAfIguAAIAAAWIA0AAIAAAhgACFBFIAAg3IgrAAIAAA3IgkAAIAAiJIAkAAIAAAyIArAAIAAgyIAkAAIAACJgAk2BFIAAhoIgqAAIAABoIgkAAIAAiJIByAAIAACJgAphBFIAAhoIgqAAIAABoIgkAAIAAiJIByAAIAACJg");
	this.shape.setTransform(68.8,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,137.7,14.3), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.card();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,101,76), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC4BWIAAgYIhuAAIAAiQIARAAIAACAIBKAAIAAiAIASAAIAACCIAPAAIAAAmgAo7A9QgLgCgIgHQgKgGgGgIQgEgHgFgPIARAAQACAIAFAGQAEAGAIAEQAFAEAJACQAHADAIAAQAMAAAJgEQALgEAGgHQAIgHAFgKQADgJABgKIg/AAIAAgOIBAAAQAAgLgFgLQgFgIgHgIQgHgHgKgDQgJgEgMAAQgIAAgIACQgHACgGAEQgGADgFAGIgIAMIgRAAQAEgKAGgJQAGgIAJgGQAJgGAKgDQAKgDALAAIAPABIANAEQAIADAFAEQAGADAFAFIAJALIAHANIADAPIABAQIgBAPIgDAPIgHAMQgEAHgFAEIgLAJIgNAGQgHADgGABIgQACQgLAAgKgEgArSA/QgIAAgHgDIgMgHQgGgEgFgEQgGgFgDgGQgEgGgDgHQgCgHgDgIIgBgPIABgRIAFgOQADgIAEgFQAEgGAFgFIALgJIAMgGIAPgEIAOgCIAPACIAOAEIAMAGIALAJQAGAFADAGQAEAGADAHQADAGABAJQACAHAAAJIgBAOIgEAQIgHALQgEAHgFAEQgEAGgGAEIgNAGQgHADgHABQgHACgJAAQgIAAgGgCgArahAQgLAEgHAIQgJALgDAIQgEAPAAAJIABAMIADAKQAFAMAHAHQAHAIALAFQAGACAQACQAIAAAOgEQALgFAHgIQAIgHAEgMIADgKIACgMQAAgJgFgPQgDgLgJgIQgHgIgLgEQgNgFgJAAQgMAAgKAFgAN/A+IAAiQIARAAIAACQgAL6A+IAAiQIARAAIAAAyIAoAAQANAAAJAEQAKAEAGAHQAHAHAEAIQACAJAAAKQgBAKgEAIQgDAJgHAFQgHAGgIAEQgKADgLAAgAMLAvIAmAAQAIAAAHgCQAFgCAFgEQAGgFADgEQACgHAAgIQABgHgDgGQgCgFgFgEQgFgFgFgCQgIgCgHAAIgoAAgAKmA+IAAiAIgtAAIAAgQIBqAAIAAAQIgtAAIAACAgAJQA+IAAhCIhMAAIAABCIgSAAIAAiQIASAAIAAA9IBMAAIAAg9IASAAIAACQgAF8A+IAAiQIBVAAIAAAPIhEAAIAAAvIBCAAIAAAQIhCAAIAAAyIBGAAIAAAQgAFEA+IADhtIhgBtIgGAAIAAiRIASAAIgCBtIBfhtIAGAAIAACRgAASA+IAChtIheBtIgGAAIAAiRIARAAIgCBtIBfhtIAGAAIAACRgAjHA+IAAgQQgPAAgMgDQgQgFgGgFQgFgDgEgFQgFgEgCgGQgDgFgCgGQgCgGAAgHQAAgIACgGIAFgNQACgFAFgEIAIgIQAHgEAQgGQAMgDAOAAIAAgRIASAAIAAARQAOAAAMADIAMAEIALAGQAFADAEAEIAHAKIAEAMQACAHAAAIQAAAHgCAGIgEAMIgHAKIgKAHIgKAHIgMADQgMADgOAAIAAAQgAi3AgQALAAAJgCQALgDAGgEQAJgFADgIIAEgJIABgKIgBgMIgEgJQgDgHgJgFQgHgFgKgCQgJgCgLAAgAjbgxQgJACgIAFQgIAFgEAHQgDAEgBAFQgBAGAAAGQAAAGABAEQABAEADAFQAEAIAIAFQAHAEALADQAJACAKAAIAAhTQgLAAgJACgAl+A+IAAgQQgPAAgMgDQgQgFgHgFQgFgDgEgFQgEgEgDgGQgCgFgCgGQgCgGAAgHQAAgIACgGIAEgNQADgFAEgEIAJgIQAGgEARgGQAMgDAPAAIAAgRIARAAIAAARQAOAAAMADIAMAEIALAGIAIAHQAFAFADAFIADAMQACAHAAAIQAAAHgCAGIgDAMIgIAKIgJAHIgKAHIgMADQgMADgOAAIAAAQgAlvAgQAMAAAJgCQAKgDAHgEQAIgFAEgIIADgJQACgEAAgGQAAgGgCgGIgDgJQgEgHgIgFQgHgFgKgCQgJgCgMAAgAmTgxQgJACgHAFQgIAFgFAHIgDAJQgBAGAAAGQAAAGABAEIADAJQAFAIAIAFQAHAEALADQAIACALAAIAAhTQgLAAgKACgAsvA+IguhCIgQACIgQABIAAA/IgSAAIAAiQIASAAIAABDIATgBQAJgBAFgDQAEgCAHgMQAEgHADgOQACgHADgFQADgGAFgEQAFgEAHgCQAIgBAJACIAAAMQgFgBgFACQgEAAgEADQgDACgBAFIgFAJQgEAOgDAIQgHANgFAEIAzBHIAAACg");
	this.shape.setTransform(91.2,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,182.3,17.1), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHBHQgLgFgLgKQgKgIgHgPQgGgPAAgSQAAgLADgKQADgLAFgIQALgSAQgIQAQgJAUAAQAHAAAHACQAHABAGADQAOAEAKAJQAFAFAEAGIAIANQADAHACAJIABAQQAAAhgUAVQgVAWgiAAQgOAAgOgFgAAKgcQgFAFgDAHQgCAIAAAIQAAASAKALQAFAFAHADQAGADAIAAQAOAAALgLQALgLAAgSQAAgIgDgHQgDgIgFgFQgFgFgGgCQgHgDgHAAQgPAAgLAKgAiHBJIgOgEIgMgFIgMgIQgKgJgHgOIgFgQIgBgRIABgQIAFgPQAHgPAKgJIAMgIIAMgGQANgEAPAAIAPACQAHABAHADQAOAFALANQALANADASIglAAQgDgLgJgEQgHgGgMAAQgRAAgKALQgKALAAARQAAAIADAHQACAHAFAGQAFAFAHAEQAHADAIAAQAMAAAIgHQAJgFADgMIAkAAQgBALgDAIQgEAIgFAHQgLANgOAGIgPAEQgHABgIAAgAEcBJIAAiQIAmAAIAABGIBMhHIALAAIAACRIgmAAIAAhKIhMBKgAG4BJIAAiQIBbAAIAAAgIg1AAIAAAVIAxAAIAAAgIgxAAIAAAYIA3AAIAAAjgADdBJIggg5IgSABIAAA4IgmAAIAAiQIAmAAIAAA5QARAAAEgDQAFgCADgGIAFgVQACgIAEgGQAEgFAGgEQANgHAYAFIAAAZQgPgBgDAMQgHAbgKAKIApBBIAAAGgAkBBJIAAiQIAmAAIAACQgAmIBJIAAiQIAlAAIAAArIAbAAQALAAAJADQAKAEAGAFQAGAGAEAIQAFAHAAAIQABAJgBAIQAAAIgFAIQgEAIgGAGQgGAGgKADQgJAEgLAAgAljAoIAbAAQAGAAAEgFQAEgDABgFIAAgLQgBgEgEgEQgEgEgGAAIgbAAgAoUBIIAAiQIBBAAQAUAAANAMQAMAMAAAVQAAAGgDAHQgDAHgFAFQAEACADACQADADACAEQAFAJAAAKQAAATgLAMQgNANgWAAgAnuAnIAdAAQALAAABgLQABgFgEgFQgDgDgGAAIgdAAgAnugPIAYAAQAFAAADgEQADgCAAgGQAAgEgDgEQgDgEgFAAIgYAAg");
	this.shape.setTransform(53.3,7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,106.6,15.2), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.like();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,88,76), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF1D6").s().p("Aj8ECQhohqAAiYQAAiWBohsQBphqCTAAQCUAABoBqQBpBsAACWQAACYhpBqQhoBriUAAQiTAAhphrg");
	this.shape.setTransform(35.7,36.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,71.4,73.1), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF1D6").s().p("AgqGdIAAs5IBUAAIAAM5g");
	this.shape.setTransform(4.3,41.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,8.5,82.5), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9BE43").s().p("Ax4E7QiDAAhchcQhchcAAiDIAAAAQAAiCBchcQBchcCDAAMAjxAAAQCDAABcBcQBcBcAACCIAAAAQAACDhcBcQhcBciDAAg");
	this.shape.setTransform(142.5,28.4,0.976,0.903);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,284.9,57), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF8F03").s().p("AFpCCIAAgVIhuAAIAAAVIgkAAIAAg+IAHAAQAJAAAEgFQAEgFACgNIANh3IB/AAIAACOIASAAIAAA+gAEgAuIgDAPQgCAFgEADIA2AAIAAhmIglAAgAoUBqQgRgGgOgLQgNgMgIgSQgHgTAAgXQAAgPAEgMQADgOAHgLQAOgWAVgKQAVgLAZAAQAIAAAJACIARAFQARAGANALQAHAGAFAIQAFAHAEAJQAFAKABAKQACAJAAAMQABAqgbAbQgbAagpAAQgSAAgRgGgAoSgTQgGAHgEAJQgDAIAAAMQAAAXANAOQAIAGAIADQAIAEAJAAQATAAANgNQAOgOABgXQgBgMgDgIQgDgJgIgHQgGgGgIgEQgIgDgJAAQgUAAgOANgAJnBtIAAi3IAxAAIAABZIBfhaIAPAAIAAC4IgvAAIAAhfIhhBfgAIlBtIgLgXIhFAAIgKAXIgyAAIAAgHIBUiyIAWAAIBUCyIAAAHgAHlAuIAmAAIgTgtgACUBtIgohHIgQABIAABGIgvAAIAAhGIgPgBIgnBHIg2AAIAAgHIA1hSQgNgNgJgkQgCgIgGgDQgGgDgKACIAAggQA4gOAJAtQAGAeAMAGQAFADANAAIAAhHIAvAAIAABHQANAAAFgDQAGgDAEgHQAEgHABgFIADgOQAJgtA6AOIAAAgQgKgCgGADQgGADgCAIQgFASgFAMQgFAMgGAHIA1BSIAAAHgAjHBtIAAi3IBzAAIAAAqIhDAAIAAAaIA+AAIAAApIg+AAIAAAeIBFAAIAAAsgAl2BtIAAi3ICEAAIAAAqIhUAAIAAAYIAhAAQARAAAMAEQAMAEAJAHQAQAQABAZQgBANgEALQgFALgIAIQgRASggAAgAlGBDIAhAAQAKAAAEgGQAFgFABgHQgBgIgFgFQgEgFgKAAIghAAgAqcBtIAAiMIg6AAIAACMIgwAAIAAi3ICaAAIAAC3gAKshWQgHgDgGgFQgLgLgBgVIAagDQABAHAEADQAEAEAIAAQAIAAAFgEQAFgDABgHIAaADQgBAVgLALQgMAKgUAAQgKAAgJgCg");
	this.shape.setTransform(77.5,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AIKBbQgDgDAAgFQAAgGADgDQADgEAGAAQAGAAADAEQAEADAAAGQAAAFgEADQgEAEgFAAQgGAAgDgEgAnVBcIgRgFQgJgDgHgFQgIgFgFgGQgHgGgFgIQgFgHgDgJQgEgIgCgKQgCgKAAgKQAAgKACgKQACgKAEgJQADgIAFgIQAFgHAGgGQAGgHAIgEQAIgFAHgDIASgFQAJgCAKAAQAOAAAMAEQANAEALAHQAMAHAHALQAJALADAOIgUAAQgFgJgGgHQgGgHgIgFQgIgFgJgCQgJgCgKAAIgPABIgOAEQgMAFgKAKQgKAKgEAOQgFATgBAKQABAPAFANQAFAOAIAKQAKAKANAFIANAFIAPABQALAAAKgDQAKgCAHgFQAIgFAHgIQAGgIADgKIAVAAQgGAUgGAHQgIALgLAIQgKAIgOAEQgNADgOAAQgJAAgKgBgAFHBcIAAi4IAVAAIgCCKIB4iKIAIAAIAAC3IgXAAIADiKIh5CLgAEABbIAAiDIg9BSIgDAAIg8hSIAACDIgXAAIAAi3IAJAAIBMBmIBLhmIAIAAIAAC3gAA8BbIgVgtIhbAAIgWAtIgXAAIAAgDIBWi0IAKAAIBTC0IAAADgAgtAbIBMAAIgmhVgAiRBbIAAhWIhhAAIAABWIgVAAIAAi2IAVAAIAABNIBhAAIAAhNIAXAAIAAC2gAIJA1IgCiQIAYAAIgCCQg");
	this.shape_1.setTransform(222.6,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,277,26.1), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#621C1F").s().p("AziCaIAAggIijAAIAAAgIg3AAIAAhcIALAAQAPAAAGgIQAFgHADgUIAUixIC8AAIAADUIAcAAIAABcgA1OAeQgCAMgDAJQgDAIgFAEIBQAAIAAiYIg3AAgAYoCAQgfgFgTgHIAJgzQAUAJANgEQAOgEAIgUIAKgTIheioIAAgJIBPAAIAzBpIADAAIAuhpIBLAAIAAAIIhjDIQgLAYgKAPQgMAPgQAJQgOAHgSAAIgEAAgAEuB7IgZgHQgMgEgLgHQgMgGgKgJQgTgQgMgcQgHgNgCgPQgDgPAAgQQAAgRADgPQACgQAHgNQAMgbATgRQAKgJAMgGQALgGAMgFQAZgIAaAAQAPAAAOACQAOADANAFQAaAKAVAYQAVAYAEAjIhEAAQgGgUgQgJQgOgKgYAAQgfAAgSAUQgTAVAAAiQAAAOAEANQAFANAKALQAKALALAFQANAGAPAAQAYAAAPgLQARgLAFgVIBEAAQgCASgHAQQgGAPgKANQgUAZgbAKQgNAGgOACQgPADgPAAgA5uB7IgZgHQgNgEgLgHQgLgGgJgJQgVgQgMgcQgFgNgEgPQgCgPgBgQQABgRACgPQAEgQAFgNQAMgbAVgRQAJgJALgGQALgGANgFQAZgIAbAAQAOAAAOACQAOADAOAFQAaAKAUAYQAUAYAGAjIhFAAQgHgUgPgJQgPgKgWAAQggAAgSAUQgTAVAAAiQAAAOAEANQAGANAJALQAKALALAFQANAGAQAAQAWAAARgLQAQgLAEgVIBGAAQgDASgGAQQgHAPgKANQgVAZgZAKQgOAGgOACQgOADgPAAgAuPB8QgPAAgUgDIACgzQAWACAIgHQAGgHADgWIATi6IDBAAIAAEQIhHAAIAAjQIg8AAIgKB8QgCAUgEAPQgDAOgGAKQgLATgYAGQgJACgNAAIgFAAgAWIB6Ig7hpIgiABIAABoIhHAAIAAkQIBHAAIAABrQAfAAAJgEQAIgFAFgLQAEgLAIgdQADgOAHgKQAJgLALgHQAXgOAtAKIAAAwQgcgCgFAVQgOAzgUAWIBOB5IAAAKgAN7B6IgQgiIhnAAIgPAiIhLAAIAAgJIB9kJIAiAAIB8EJIAAAJgANUAdIgdhBIgbBBIA4AAgAIgB6IAAjRIhDAAIAAg/IDKAAIAAA/IhCAAIAADRgAiQB6IAAkQIBFAAIAABSIAzAAQAUAAARAGQARAHAMALQAMALAHAOQAIAPADAOQABAQgBAQQgDAQgIAOQgHAPgMALQgMALgRAHQgRAGgUAAgAhLA7IAzAAQALAAAIgGQAGgHACgKQACgKgCgJQgCgKgHgHQgHgFgLAAIgzAAgAk9B6IAAjRIhCAAIAAg/IDKAAIAAA/IhDAAIAADRgAnNB6IgPgiIhnAAIgPAiIhLAAIAAgJIB9kJIAiAAIB8EJIAAAJgAnzAdIgchBIgcBBIA4AAgAx5B6IAAkQICrAAIAAA+IhkAAIAAAnIBcAAIAAA+IhcAAIAAAsIBnAAIAABBgAPeB5IAAkQIB4AAQAmAAAZAXQAYAXAAAmQAAANgHANQgGANgLAIQAJAEAGAGQAHAGAEAHQAJAPAAAUQgBAkgWAXQgXAYgpAAgAQlA7IA3AAQATAAACgVQABgKgGgHQgHgHgJAAIg3AAgAQlgrIAsAAQAKAAAFgGQAFgHABgJQAAgJgFgIQgGgHgKAAIgsAAg");
	this.shape.setTransform(176.1,15.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,352.1,30.9), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tennis_PNG10405();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,178,179), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hokey();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,162,141), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D89B3B").ss(1,1,1).p("Egq9gThMBV7AAAMAAAAnDMhV7AAAg");
	this.shape.setTransform(275,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-1,-1,552,252), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#621C1F").s().p("Egu3AXcMAAAgu3MBdvAAAMAAAAu3g");
	this.shape.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,600,300), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// Слой 6
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(150.9,145.9,1.278,1.278,90,0,0,117.9,117.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).to({rotation:450,guide:{path:[150.9,145.9,-147.4,-35.9,-333.8,145.9,-492.9,-4.4,-675.1,122.2,-855.9,26,-971.8,145.9,-1290.1,-30,-1720.2,225.6]}},28,cjs.Ease.get(1)).wait(8));

	// Слой 5
	this.instance_1 = new lib.Символ54();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1881.2,168.7,2.12,2.12,150,0,0,118,117.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({regX:117.9,scaleX:3.12,scaleY:3.12,rotation:90,x:295.6,y:-974.1},10).wait(39));

	// Слой 1
	this.instance_2 = new lib.Символ54();
	this.instance_2.parent = this;
	this.instance_2.setTransform(158.8,126,1,1,0,0,0,118,118);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:117.9,scaleX:2.12,scaleY:2.12,rotation:150,guide:{path:[158.8,126,-520.5,-622.5,-1975,-371.9]}},19).to({_off:true},1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40.8,8,236,236);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(113,113,1,1,0,0,0,113,113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(0,0,226,226), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_47 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(47).call(this.frame_47).wait(1));

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(50,50,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[50,50.1,-219.6,208.4,-283.3,497.3,-435.3,305.9,-562.7,238.9,-690.1,172,-792.9,229.6]}},47,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(194.4,194.4,1,1,-45,0,0,82,192.9);
	this.instance.alpha = 0.43;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(0,0,388.8,388.8), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(87.5,27,1,1,0,0,0,87.5,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175,54);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(93.1,20.2,0.596,0.596,0,0,0,156.1,33.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(0,0,186.1,40.5), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A+EY7MAXDgx1MAwDAAAMAAAAx1g");
	mask.setTransform(262.6,152.6);

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(199,150,1,1,0,0,0,224,150);
	this.instance.alpha = 0.5;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(224.6,156.1,1,1,0,0,0,249.6,156.1);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(70.2,0,404,312.2), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(35.6,36.5,1,1,0,0,0,35.6,36.5);
	this.instance.alpha = 0.25;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,71.4,73.1), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(53.5,70.8,2.882,2.005,0,30.9,0,4.7,41.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-2.6,0,109.4,142), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(142.5,28.6,1,1,0,0,0,142.5,28.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD275").s().rr(-146.05,-31.55,292.1,63.1,31.55);
	this.shape.setTransform(142.5,28.5,0.976,0.903);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,284.9,57);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(89,89.5,1,1,0,0,0,89,89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,178,179), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(89,89.5,1,1,0,0,0,89,89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},303).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178,179);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(81,70.5,1,1,0,0,0,81,70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4,x:81.1},14,cjs.Ease.get(-1)).to({rotation:-8.5,x:81,y:70.6},15,cjs.Ease.get(1)).to({rotation:-4.1,x:81.1,y:70.5},15,cjs.Ease.get(-1)).to({rotation:0,x:81},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162,141);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(194.4,194.4,1,1,0,0,0,194.4,194.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:556.3,y:-303.4},35).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,388.8,388.8);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(87.5,27,1,1,0,0,0,87.5,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.06,scaleY:1.06,y:27.1},0).wait(1).to({scaleX:1,scaleY:1,y:27},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175,54);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#621C1F").s().p("AnZA6IAAgMIg9AAIAAAMIgVAAIAAgjIAEAAQAGAAACgDQACgCABgIIAIhCIBHAAIAABPIALAAIAAAjgAoBALQAAAFgCADQgBADgCACIAeAAIAAg5IgVAAgAJVAwQgMgCgHgCIADgTQAHADAGgCQAFgBAEgIIADgHIgkg/IAAgDIAeAAIAUAnIABAAIARgnIAdAAIAAADIgmBLIgIAPQgEAFgGADQgGADgHAAIgBAAgAByAuIgJgCIgJgEIgIgGQgIgGgEgLQgDgFAAgFIgBgLIABgNIADgLQAEgKAIgGIAIgGIAJgEQAJgDALAAIAKABIALADQAKADAHAKQAIAJACANIgaAAQgDgIgGgDQgFgEgIAAQgMAAgIAIQgGAIAAAMQAAAFABAFIAFAJQAEAEAFACQAEACAHAAQAIAAAGgEQAGgEACgIIAaAAIgDANQgDAGgDAFQgIAJgKAEIgKADIgLABgApvAuIgJgCIgJgEIgHgGQgJgGgEgLIgDgKIgBgLQAAgHABgGIADgLQAEgKAJgGIAHgGIAJgEQAKgDAKAAIALABIAKADQAJADAJAKQAHAJACANIgaAAQgDgIgFgDQgGgEgIAAQgMAAgHAIQgHAIAAAMQAAAFACAFIAFAJQAEAEAEACQAFACAGAAQAIAAAGgEQAHgEABgIIAbAAQgCAHgCAGIgGALQgIAJgKAEIgKADIgLABgAllAtIAAgTQAJABACgDQADgCACgJIAGhFIBKAAIAABmIgbAAIAAhOIgXAAIgEAuIgCANIgEAJQgEAIgIACIgLABIgNgCgAIYAuIgWgoIgNABIAAAnIgbAAIAAhmIAbAAIAAAoQAMAAADgBQADgCACgEIAEgPQABgGAEgEQADgEAEgCQAJgGAQAEIAAASQgKgBgCAIQgFAUgIAIIAeAtIAAAEgAFRAuIgGgNIgnAAIgFANIgdAAIAAgEIAwhjIAMAAIAvBjIAAAEgAFDALIgLgYIgLAYIAWAAgADOAuIAAhPIgZAAIAAgXIBMAAIAAAXIgYAAIAABPgAg2AuIAAhmIAbAAIAAAfIATAAQAHAAAGACQAHACAEAFQAEAEADAFQAEAGAAAFIAAAMQAAAGgEAFQgDAGgEAEQgEAEgHADQgGACgHAAgAgbAWIATAAQADAAADgCQADgDAAgEIAAgHQAAgDgDgDQgDgCgDAAIgTAAgAh3AuIAAhPIgZAAIAAgXIBMAAIAAAXIgZAAIAABPgAiuAuIgFgNIgnAAIgGANIgcAAIAAgEIAvhjIAMAAIAvBjIAAAEgAi8ALIgLgYIgLAYIAWAAgAmwAuIAAhmIBAAAIAAAXIglAAIAAAPIAiAAIAAAXIgiAAIAAAQIAnAAIAAAZgAF3AtIAAhmIAtAAQAPAAAJAJQAJAJAAAOQAAAFgCAFQgDAFgEADIAGAEIAEAEQADAGAAAHQAAAOgIAJQgJAIgPAAgAGRAWIAWAAQAGAAACgIQAAgEgDgCQgCgDgDAAIgWAAgAGRgQIARAAQAEAAACgCQACgDAAgDQAAgEgBgCQgDgDgEAAIgRAAg");
	this.shape.setTransform(88.4,28.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(87.5,27,1,1,0,0,0,87.5,27);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ42(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-5,-1.5,185,57.1), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnBY/Qj5g8iQg0QjThOiShvIgOgMIgMgCQgugHgIgXQgDgIADgKQACgJAHgGQANgIAFgFQAHgHADgOIADgZQAGghAZgMQAKgFASgBIAdgBQAQgCAMgIQAOgKABgOIgBgJQAAgGABgEQADgIAPgGQAngQBSgdQBEgdAkgoQAJgKARgYQAQgXAKgLIAZgZQARgQAIgKQAKgLABgKQABgHgHgSQgUgvgBg0QgBgZAJgNQASgaA6ANQAbhLA8g1QgLgFgFgMQgCgHAAgHQAAAEgEABQgggkgKg7QgHgmAAhGQAAg+ACgaQABgaACgWIgEAPQgLAmgJARQgJARgOAKQgQALgPgHQgLgEgFgLQgGgLABgMQAAgOANgfQAghTAChuQABhHgNiBIgIhSQgJgMgEgaIgPhzQgKhLgEgmQgGg/ACgyQABglgEgPIgJgdQgGgVAEgoQAHhFAWhhQAahtAMg3QAGgdAIgMQAHgJAKgFIABAAIABgNQAAguAUhNQAMgxAQgZQAHgLAQgRIAYgcIAUgdQAMgTAKgKQAZgYAqgJQAfgGAxACQA5ACAfAIQAxAOAZAhQAhApgHBLQgCAkgNAXQgVApgxAOQgrAMgxgNQgTAbgIAdQgJAgAHAdQAFAVAaAqIA5BZIAPg5QAMgpAVgKQAOgGASAGQAMADAUALQBWAzA7APIBKAWQAhAKAaATQAJAHAIAIQAfAeBfAQIBhAQIABABIA4AcQB5A9BJA+QByA3BvA/QglAxgkBGIADAAIAZgCQAIgBAPgGQAMgCAXgBQAKgBAegLIAhgOQATgIANgIQAlgXAKgfIAGgYQAEgOAGgIIgBgDQgCgFgHgGIgLgLQgJgKgEgZIgHglQgEgWABgKQABggAcgaQAUgTAkgQQBEgeAvARQARAIAHABIAOAAQAIAAAFABQAGACAGAHIAKAMQALAMAgAOQAfAOAKAOQALAOAFAgIANBWQAFAcgBARQgBAZgLAQQgHAJgSAOQgSAPgGAJIgLAUQgHAMgHAFIgGAEIgCAGQgWA+gPAiQgWA0gYAnQgcAtg7BFIhUBlQg6BFggAkQg1A3gxAmQhCA0h9A/QiZBNgtAcQgzAfgvAnQgWATgPAEIgEACIAAAAQgGARgMALIgPANIgRAMIgSAUIhbBrQgMAOgFADQgKAFgLAAQgLgBgIgHQgIgGgEgLQgEgLADgKQADgLANgOIAQgTQgWATgdATIhjA+Qh3BMgjBQQgEAKgUBDQgOAwgUAYQgKANgWATQgZAVgIAJQgdAegOAsQgNApAAAuQABAnAKAvQAGAeAPA3IBBDsQAHAbAAARQAAAZgPANQgMALgVAAQgOAAgYgFgAJ1m9QhfDngIAQQgYAzgkA8QgUAjguBIQgpBCgVAeQgkA0gjAkQgQASgtAqIgYAXIAJAFQAJgIAOgJQE+jKD8kYQAWgYAEgPQADgXAEgKQAFgOAQgMQAGgFAWgNQBMgrA+g/QA9g+ArhMQAQgfAOgKIAFgDQAFgPAMgWQAVgoAAgaQAAgjgmgvQgNgRgpguQgOgQgKgEQgNgGgXAGQgeAIgaATQgIAGgBAFQgCAEACALIAEAaQADAPAGAIQAHAJAVALQAUALAGAKQAGAKgCAOQgDANgJAJQgLAMgSADIgCAPIgGAXQgHAWgZAaQgaAdgcAPQgKAGgQAGIgaALQgpARgJACIguAIQgzAIgLAAQgYAAgMgKIgCgBIgXA1gAnf35QgeAGgSARQgJAJgLATIgSAdIgRASQgKALgFAIQgLAPgIAgQgKAkgFAmQgFAjgDA0QgDBKAEBFIABAyIAAAKQADAHAAAIQABALgEANIgIAYQg5CfAKDrQADBDANCFQANCEADBDQABAaAGAOIAGAKIABgmQAAhDAiiGQAhiGAghSQAhhSAUg9QAQgmAHgsQAHgsAqhJQAcgvAQghIgJgFQgKgIgPgXIgphAQgXglgKgTQgRgggGgcQgJgsALguQALgsAbgmQAcglAcgBQALAAAbAKQAYAJANgEQAcgIAGgrQAFgfgLgVQgNgcglgLQgWgHgrAAIgIAAQgdAAgRADg");
	mask.setTransform(215.7,165);

	// Слой 3
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(22,432.9,1,1,0,0,0,194.4,194.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.cup();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(0,0,345,466), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(35.6,36.5,1,1,0,0,0,35.6,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.566},14,cjs.Ease.get(-1)).to({alpha:0.102},15,cjs.Ease.get(1)).to({alpha:0.551},15,cjs.Ease.get(-1)).to({alpha:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.4,73.1);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(48.2,71,1,1,0,0,0,48.2,71);
	this.instance.alpha = 0.48;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:391.7},39).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.6,0,109.4,142);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fball.psd
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(770.2,348.1,0.424,0.424,0,0,0,118.1,118.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(129).to({_off:false},0).wait(161));

	// Basketball-PNG.psd
	this.instance_1 = new lib.Символ52();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-97,343,1,1,0,0,0,113,113);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({_off:false},0).to({rotation:135,x:829.2,y:383},29).wait(162));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_59 = new cjs.Graphics().p("EgiYAZDMAAAgnOMBV9AAAMAAAAnOg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_graphics_59,x:330.1,y:160.3}).wait(231));

	// bball(1).psd
	this.instance_2 = new lib.Символ49();
	this.instance_2.parent = this;
	this.instance_2.setTransform(694,-40,1,1,0,0,0,50,50);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).wait(231));

	// Слой 2
	this.instance_3 = new lib.Символ9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(463.2,-17.1,0.281,0.281,0,0,0,89.2,89.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({scaleX:0.69,scaleY:0.69,x:626.1,y:305},4).to({regX:89,scaleX:1,scaleY:1,rotation:360,x:687.2,y:89.5},13).to({x:697.2,y:65.5},2).to({x:687.2,y:89.5},2).wait(22).to({y:129.5},2).to({x:607.2,y:-70.5},4).to({_off:true},1).wait(229));

	// Слой 1
	this.instance_4 = new lib.Символ6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(764,342.6,1,1,0,0,0,81,70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-70.2,y:282.6},16).to({x:157.8,y:332.6},8).to({x:149.8,y:322.6},2).wait(28).to({y:302.6},2).to({y:442.6},4).to({_off:true},1).wait(229));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(683,272.1,162,141);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(142.1,29.8,0.551,0.551,0,0,0,176.1,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxcEdQh/AAhbhUQhZhTAAh2IAAAAQAAh1BZhUQBbhTB/AAMAi5AAAQCAAABZBTQBbBUAAB1IAAAAQAAB2hbBTQhZBUiAAAg");
	mask.setTransform(142.5,28.4);

	// Слой 4
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-24.9,22.5,1,1,0,0,0,48.2,71);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(142.5,28.5,1,1,0,0,0,142.5,28.5);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Символ15(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,284.9,57), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(35.8,37.1,1,1,0,0,0,35.6,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,278,74), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(172.5,233,1,1,0,0,0,172.5,233);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:167.8,y:242.5},9,cjs.Ease.get(-1)).to({x:162.5,y:253},10,cjs.Ease.get(1)).to({x:167.5,y:243},10,cjs.Ease.get(-1)).to({x:172.5,y:233},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.4,0,517.4,627.3);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(200.5,233,1,1,0,0,0,172.5,233);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-144.4,0,517.4,627.3), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 21
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(920,103.1,1,1,0,0,0,426.8,156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(280).to({x:-580.3},10).wait(1));

	// btn1
	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(143,164.6,1,1,0,0,0,142.5,28.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(286).to({_off:false},0).wait(5));

	// logo
	this.instance_2 = new lib.Символ3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(143,38.1,1.029,1.029,0,0,0,139,37);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(286).to({_off:false},0).wait(5));

	// pobejday
	this.instance_3 = new lib.Символ8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(144.1,101.5,0.993,0.993,0,0,0,138.5,13);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(286).to({_off:false},0).wait(5));

	// btn.psd
	this.instance_4 = new lib.Символ40();
	this.instance_4.parent = this;
	this.instance_4.setTransform(545.4,185,1,1,0,0,0,87.5,27);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(213).to({_off:false},0).to({x:310.5},6).to({x:320.5},2).wait(8).to({scaleX:1.05,scaleY:1.05},4,cjs.Ease.get(-1)).to({scaleX:1.09,scaleY:1.09},4,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05},3,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(4).to({scaleX:1.05,scaleY:1.05},4,cjs.Ease.get(-1)).to({scaleX:1.09,scaleY:1.09},4,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05},3,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).to({_off:true},20).wait(8));

	// Слой 19
	this.instance_5 = new lib.Символ37();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-258,94.1,1,1,0,0,0,93,20.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(208).to({_off:false},0).to({x:2},5).to({x:-18},2).to({_off:true},70).wait(6));

	// Слой 18
	this.instance_6 = new lib.Символ38();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-255.7,131.1,1,1,0,0,0,90.9,10);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(211).to({_off:false},0).to({x:4.3},5).to({x:-15.7},2).to({_off:true},67).wait(6));

	// cup.psd
	this.instance_7 = new lib.Символ33();
	this.instance_7.parent = this;
	this.instance_7.setTransform(625.6,211,1,1,10,0,0,172.6,233);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(190).to({_off:false},0).to({regX:172.3,regY:233.1,rotation:-7.7,x:85.5,y:211.1},9).to({regX:172.5,regY:233,rotation:0,x:105.5,y:211},3).to({_off:true},82).wait(7));

	// Слой 15
	this.instance_8 = new lib.Символ29();
	this.instance_8.parent = this;
	this.instance_8.setTransform(683,97,1,1,0,0,0,224,150);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(190).to({_off:false},0).to({x:223},9).to({x:243},3).to({_off:true},81).wait(8));

	// card.psd
	this.instance_9 = new lib.Символ26();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-72.5,98,1,1,0,0,0,50.5,38);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(129).to({_off:false},0).to({x:62.5,alpha:1},6).to({x:52.5},2).wait(56).to({alpha:0},5).to({_off:true},4).wait(89));

	// Слой 12
	this.instance_10 = new lib.Символ27();
	this.instance_10.parent = this;
	this.instance_10.setTransform(185.9,75.2,0.477,0.477,0,0,0,68.9,7.2);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(132).to({_off:false},0).to({regX:68.8,regY:7.1,scaleX:1,scaleY:1,y:75.1,alpha:1},4).wait(52).to({y:95.1,alpha:0},5).to({_off:true},9).wait(89));

	// Слой 11
	this.instance_11 = new lib.Символ28();
	this.instance_11.parent = this;
	this.instance_11.setTransform(218.5,149.3,1,1,0,0,0,102.5,17.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(131).to({_off:false},0).to({y:109.3,alpha:1},3).wait(52).to({y:149.3,alpha:0},5).to({_off:true},11).wait(89));

	// Слой 10
	this.instance_12 = new lib.Символ24();
	this.instance_12.parent = this;
	this.instance_12.setTransform(497.1,96.2,1,1,0,0,0,53.2,7.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(65).to({_off:false},0).to({x:164.1,alpha:1},7).to({x:170.1},2).wait(48).to({x:316.2,alpha:0},6).to({_off:true},1).wait(162));

	// Слой 9
	this.instance_13 = new lib.Символ25();
	this.instance_13.parent = this;
	this.instance_13.setTransform(535.5,120.5,1,1,0,0,0,91.2,8.6);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(68).to({_off:false},0).to({x:202.5,alpha:1},7).to({x:208.5},2).wait(46).to({x:278.5,alpha:0},5).to({_off:true},1).wait(162));

	// like.psd
	this.instance_14 = new lib.Символ23();
	this.instance_14.parent = this;
	this.instance_14.setTransform(54,166,1,1,0,0,0,44,38);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(64).to({_off:false},0).to({y:130.5,alpha:0.5},3,cjs.Ease.get(-1)).to({y:95,alpha:1},3,cjs.Ease.get(1)).wait(54).to({alpha:0},6).to({_off:true},1).wait(160));

	// btn1
	this.instance_15 = new lib.Символ10();
	this.instance_15.parent = this;
	this.instance_15.setTransform(143,164.6,1,1,0,0,0,142.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(54).to({y:157.6},2).to({y:234.6,alpha:0},8).to({_off:true},1).wait(226));

	// logo
	this.instance_16 = new lib.Символ3();
	this.instance_16.parent = this;
	this.instance_16.setTransform(143,38.1,1.029,1.029,0,0,0,139,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(54).to({y:-11.9,alpha:0},7).wait(3).to({regX:139.1,regY:36.9,scaleX:0.6,scaleY:0.6,x:-256.9,y:5.1,alpha:1},0).to({x:-25.9},3).to({x:-34.9},2).to({_off:true},217).wait(5));

	// pobejday
	this.instance_17 = new lib.Символ8();
	this.instance_17.parent = this;
	this.instance_17.setTransform(144.1,101.5,0.993,0.993,0,0,0,138.5,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(54).to({regX:138.4,regY:13.1,scaleX:1.28,scaleY:1.28,x:144,y:103.6},3).to({regX:138.6,regY:13,scaleX:0.18,scaleY:0.18,x:144.1,y:101.5,alpha:0},7).to({_off:true},1).wait(226));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.2,-53,1422.1,312.2);


// stage content:
(lib.olimp_all = function(mode,startPosition,loop) {
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

	// frame
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(300,150,1,1,0,0,0,275,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// txt_block
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(300,148.5,1,1,0,0,0,143,96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// element_block
	this.instance_2 = new lib.Символ14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(285.5,162.7,1,1,0,0,0,370.5,208.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.Символ1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(300,150,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,149,1503.9,368.6);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BasketballPNG.png?1487771517620", id:"BasketballPNG"},
		{src:"images/bball.png?1487771517620", id:"bball"},
		{src:"images/btn.png?1487771517620", id:"btn"},
		{src:"images/card.png?1487771517620", id:"card"},
		{src:"images/cup.png?1487771517620", id:"cup"},
		{src:"images/fball.png?1487771517621", id:"fball"},
		{src:"images/hokey.png?1487771517621", id:"hokey"},
		{src:"images/like.png?1487771517621", id:"like"},
		{src:"images/logo.png?1487771517621", id:"logo"},
		{src:"images/photo.jpg?1487771517621", id:"photo"},
		{src:"images/tennis_PNG10405.png?1487771517621", id:"tennis_PNG10405"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;