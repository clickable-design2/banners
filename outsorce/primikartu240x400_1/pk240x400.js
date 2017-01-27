(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.bg3 = function() {
	this.initialize(img.bg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.bg4 = function() {
	this.initialize(img.bg4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);// helper functions:

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


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlvBCIAAgWIg4AAIgCAWIgiAAIAAg0IAKAAQADgJAEgTQABgLABghIAAgFIBhAAIAABNIAMAAIgDA0gAmTgfQgBAOgCALIgEAUIAdAAIAAgvIgWAAgAEEArIgKgFIgJgHIgHgIIgFgKIgDgLIgBgLQAAgIAEgOQAEgKAHgIQAIgIAKgEIAKgDIAMgBIANABIALADIAJAGIAIAHQAHAIADALQADALAAAMIAAAHIhIAAQACAIAGAFQAGAEAJAAQAHAAAFgCQAGgDAGgGIAVASIgJAJQgFAEgFADQgGADgHABQgHACgIAAQgQgCgHgCgAErgSQgBgJgFgFQgFgFgIAAQgIAAgFAFQgEAFgCAJIAmAAIAAAAgAANAsQgJgDgGgGQgHgGgFgIQgFgIgCgJIgOAAIAAAoIgmAAIAAhrIAmAAIAAAnIAOAAQADgJAEgHQAFgIAIgFQAGgGAJgDQAJgDALAAIAMABQAGABAFACQAHADAMAJQAHAIAEAKQAEAOAAAIQgBAOgDAHQgEAKgIAIQgLAJgHADQgFADgGABIgNABQgKAAgKgDgAAYgfQgDACgDADQgCADgCAFIgBAJIABAJQACAEACADIAHAGQAEACAFAAQAFAAAEgCQAEgCACgEQADgDABgEQABgEAAgFQAAgFgBgEQgBgFgDgDQgDgDgEgCQgEgCgFAAQgFAAgEACgAobAuIgMgEIgKgFIgJgHQgFgFgHgNIgDgKIgBgLQAAgHAEgPQADgGAKgMIAIgHIAKgFIAMgDIANgBQAIAAAPAEQAIADALAJQAKALADAHQAEAOAAAIQAAAGgBAFIgDAKQgHANgGAFQgMAJgHADIgLAEIgNABIgMgBgAoYgfQgEACgDADQgDADgCAFQgBAEAAAFQAAAFABAEQACAEADADQADAEAEACQAFACAFAAQAFAAAEgCQAEgCADgEQADgDACgEQABgEAAgFQAAgFgCgEQgBgFgDgDQgDgDgFgCQgEgCgFAAQgFAAgEACgAjQAsIABgdIAHAAQADAAACgBQACgCACgFQACgGACgLIABggIAAgVIBdAAIAABrIgmAAIAAhNIgUAAIAAADQgBAdgCAKIgEANIgEAKQgGAIgHADQgHADgJAAgAKfAsIAAgfIgIAAIgVAfIgsAAIAaglIgJgGIgGgGQgDgEgBgFQgBgFAAgGQAAgIACgHQADgGAFgFQAFgGAJgDQAJgDAMAAIA8AAIAABrgAKGggQgEADAAAGQAAAFAEADQADADAHAAIAPAAIAAgWIgPAAQgHAAgDACgAIlAsIAAg1IgkA1IgjAAIAAhrIAlAAIAAA2IAkg2IAjAAIAABrgAGkAsIAAgnIggAAIAAAnIgmAAIAAhrIAmAAIAAAmIAgAAIAAgmIAmAAIAABrgACrAsIAAgjQgFADgIABIgOABQgIAAgHgCQgHgDgFgEQgFgFgDgGQgDgGAAgJIAAgqIAmAAIAAAfQAAAIADAEQACAEAHAAIAIgBIAHgDIAAgrIAmAAIAABrgAj7AsIgVgiIgLANIAAAVIgmAAIAAhrIAmAAIAAAoIAegoIArAAIglAsIAmA/gAqAAsIAAhMIgeAAIAABMIgmAAIAAhrIBqAAIAABrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-70.9,-6.6,141.9,13.3), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjxBWIAAiLIAmAAIAAAOQAGgIAHgDIAJgFIALgBQAJAAAJAFQAJADAGAIQAHAHAEALQAEAOAAAIQgCARgCAGQgEALgHAHQgGAIgJADQgIAFgKAAIgLgCIgJgEQgHgDgGgHIAAAtgAi+gWIgHAFIgFAIQgCAFAAAEQAAAFACAFQACAEADADQADAEAEACQAEACAEgBQAFABAEgCIAHgFIAFgIQABgFAAgFQAAgFgBgEIgFgIIgHgFQgEgCgFAAQgEAAgEACgAhZA2QgHgCgFgEQgFgEgDgHQgCgGAAgIQAAgJADgGQADgHAFgDQAGgEAIgDQAHgCAKAAQAKABAQAEIAAgCQAAgJgFgEIgHgDIgKgBQgIAAgHABIgOAEIgIgbQAKgDAJgCQALgDAOAAQAJAAAPAEQAKADAHAHQAGAFADAJQACAIAAAMIAAA9IglAAIAAgLQgGAGgIADQgIAFgKAAQgIgBgGgCgAhGALQgFAEAAAGQAAAGAEADQAEACAGAAQAIAAAFgEQAFgFAAgIIAAgFQgGgDgIAAQgJAAgEAEgAlYA2QgHgCgFgEQgEgEgDgHQgDgGAAgIQAAgJADgGQADgHAGgDQAFgEAIgDQAIgCAJAAQAKABAQAEIAAgCQAAgJgFgEIgHgDIgJgBQgIAAgIABIgOAEIgIgbQAKgDAKgCQALgDANAAQAKAAAPAEQAKADAGAHQAGAFADAJQADAIAAAMIAAA9IgmAAIAAgLQgGAGgHADQgIAFgLAAQgHgBgHgCgAlFALQgEAEAAAGQAAAGADADQAEACAGAAQAIAAAGgEQAFgFAAgIIAAgFQgHgDgIAAQgIAAgFAEgAG2A2IAAgfIgIAAIgVAfIgsAAIAagmIgJgFIgGgHQgDgEgBgEQgBgGAAgFQAAgJACgGQADgGAFgFQAFgGAJgDQAJgDAMAAIA8AAIAABrgAGdgWQgEADAAAGQAAAFAEADQADACAHAAIAPAAIAAgVIgPAAQgHAAgDACgAE8A2IAAg2IgkA2IgjAAIAAhrIAlAAIAAA1IAkg1IAjAAIAABrgACjA2IAAhMIgfAAIAAgfIBlAAIAAAfIggAAIAABMgABSA2IAAgnIggAAIAAAnIgmAAIAAhrIAmAAIAAAmIAgAAIAAgmIAmAAIAABrgAnbA2IAAiLIBkAAIAAAiIg+AAIAABpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-47.6,-8.6,95.3,17.2), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhkBXIAAiKIAnAAIAAAOQAGgIAHgEIAIgEIALgBQAKAAAJAEQAIAEAGAHQAHAHADALQAEAPABAIQgCAQgDAHQgDALgHAHQgGAHgIAEQgJAEgKAAIgLgBIgJgEQgGgDgGgIIAAAtgAgxgVIgHAGIgEAIQgCAEAAAFQAAAFACAFQACAEACADQADADAEACQAEACAFAAQAFAAAEgCIAHgEIAEgIQACgFAAgGQAAgEgCgEIgEgIIgHgGQgEgBgFAAQgFAAgEABgAqGA5IgOgFQgHgCgGgEIgLgJIgJgLQgEgGgCgGQgEgHgBgGIgCgOQABgIABgHIAFgOQACgHAEgFIAJgLIAMgJQAFgEAHgDQAHgCAIgCQAHgCAIABIAQABQAHACAHACQAHADAGAEIALAJIAJAKQAEAHACAGQADAHACAGIACAQQgBAHgBAGQgCAIgDAGQgCAGgEAGIgJALIgMAJQgFAEgHACQgHAEgIABQgHABgIAAIgQgBgAqEgxQgHADgFAGQgFAFgCAHQgDAHAAAIQAAAHADAGQACAHAGAFQAEAGAHACQAGADAIAAQAIAAAHgDQAGgCAFgGQAEgFADgHQADgGAAgHQAAgIgDgHQgDgHgEgFQgFgFgHgDQgHgEgHABQgIAAgGACgAHHA4QgIgCgEgFQgFgEgDgGQgCgHAAgIQAAgIADgGQADgHAFgEQAGgEAHgCQAIgCAJAAQALAAAPAFIAAgCQAAgJgEgFIgHgDIgKgBQgIAAgIACIgOAEIgHgbQAKgEAJgCQALgDANAAQAKAAAPAEQAKAEAGAGQAGAGADAJQADAHAAANIAAA9IgmAAIAAgMQgFAHgIADQgIAEgKAAQgIAAgGgCgAHZAMQgEAEAAAHQAAAFAEADQAEADAFAAQAJAAAFgFQAFgEAAgJIAAgEQgHgDgHgBQgJAAgFAEgAi+A2IgKgFIgJgHIgHgIIgEgKIgDgKIgCgMQABgIAEgOQAEgKAGgIQAIgHAKgEIAKgEIAMgBIANABIALAEIAJAFIAIAHQAHAJADAKQAEALAAALIAAAIIhJAAQACAIAGAFQAGAEAJABQAHgBAFgCQAGgCAHgGIAUARIgJAJQgEAEgGADQgGADgGACQgIABgHAAQgRgCgHgCgAiXgGQgBgKgFgFQgFgFgIAAQgIAAgFAFQgEAFgCAKIAmAAIAAAAgAnyA5QgJgCgJgDIgPgHQgIgEgGgHIAVgZQAIAFAOAIQAIACAQABQAHAAAFgCQAEgDAAgFQAAgDgFgEQgFgDgOgCIgVgGQgKgDgHgFQgHgEgEgIQgDgHAAgLQAAgKADgIQAEgIAHgHQAHgGAKgDQAKgDANAAQAIAAAIABQAJACAGACQAIACAGADIAMAJIgTAbQgJgGgLgEQgKgEgKAAQgGAAgEADQgDACAAAEQAAAGAEACQAGADAOADQAMADAJAEQALADAGAFQAHAFADAHQAEAGAAALQAAAKgEAIQgEAJgHAGQgIAGgKADQgLADgNAAQgJAAgJgBgAIlA4IACgeIAGAAQADAAACgBQADgCABgFQADgGABgLIABggIAAgUIBdAAIAABrIgmAAIAAhOIgTAAIAAADQgBAcgCALIgFANIgEAKQgGAIgHADQgGADgKAAgAMeA4IAAhrIAmAAIAABrgAKtA4IAAhrIAmAAIAAAhIASAAQAKABAIACQAIACAGAEQAGAFADAGQAEAHAAAJQAAAJgEAHQgDAGgFAGQgFAFgJACQgIADgJAAgALTAdIALAAQAIAAADgEQAEgDAAgFQAAgGgEgDQgDgDgIAAIgLAAgAF8A4IAAgoIggAAIAAAoIgmAAIAAhrIAmAAIAAAmIAgAAIAAgmIAmAAIAABrgAD9A4IAAg2IgkA2IgjAAIAAhrIAlAAIAAA1IAkg1IAjAAIAABrgAB8A4IAAg2IgbAlIgZgkIAAA1IgmAAIAAhrIAoAAIAYAlIAZglIAnAAIAABrgAkuA4IAAhNIggAAIAAgeIBmAAIAAAeIggAAIAABNgAtDA4IAAiMIA8AAQANABALADQALADAHAHQAIAGAEAJQAEAOAAAHIgBAMIgEAKQgCAFgDADIgHAHQgIAGgLADQgLAEgNgBIgTAAIAAApgAscgOIASAAIAJgBIAIgEQACgCABgDQACgFAAgDQAAgFgCgDQgBgEgCgCQgDgCgFgBQgEgCgFAAIgSAAgAmZAKIAAggIBBAAIAAAgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-83.6,-8.7,167.2,17.5), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABhBeQgIgDgIgFIAMgaQAKAGAHAAQAFAAADgFIgqhoIAoAAIAVBAIAVhAIAnAAIgoBoQgDAJgEAHQgEAHgFAEQgFAEgGACQgGACgIAAQgKAAgJgCgAgyBfIAAiKIAmAAIAAAOQAGgIAGgEIAJgEIALgBQAJAAAJAEQAJADAGAIQAHAIAEAKQAEAOAAAJQgCAQgCAHQgEAKgHAIQgGAHgJAEQgIAEgKAAIgLgBIgJgEQgGgDgGgIIAAAtgAAAgNIgGAGIgFAHQgCAEAAAGQAAAFACAFQACAEADADQADADADACQAEACAEAAQAFAAAEgCIAHgEIAFgIQABgGAAgFQAAgFgBgEIgFgHIgHgGQgEgBgFAAQgEAAgEABgAFCBZIBZi4IAfAAIhZC4gAjLBBQgGgCgGgDQgGgCgFgEQgGgEgEgFIgHgLIgGgMIgDgOIgBgNQAAgIABgHQABgHADgGQACgHADgGQADgGAFgFQAEgFAFgEIALgHQAGgDAHgBIAOgBQAHAAAHABQAHABAGADQAGADAFAEIAJAJIAIALIAFANIADANIACAPQAAAGgCAHIgDAOIgGAMIgHALIgJAIIgLAHQgGADgHACIgOACQgIgBgHgBgAjHgpQgFADgDAFIgFAMQgCAHAAAJQAAAHACAHQACAHADAFQAEAGAEACQAFADAGAAQAGAAAFgDQAEgCAEgGQADgFACgHQACgHAAgHQAAgJgCgHQgCgHgEgFQgDgFgFgDQgFgDgFAAQgGAAgFADgAldBBQgGgCgGgDQgGgCgFgEQgGgEgEgFIgHgLIgGgMIgDgOIgBgNQAAgIABgHQABgHADgGQACgHADgGQADgGAFgFQAEgFAFgEIALgHQAGgDAHgBIAOgBQAHAAAHABQAHABAGADQAGADAFAEIAJAJIAIALIAFANIADANIACAPQAAAGgCAHIgDAOIgGAMIgHALIgJAIIgLAHQgGADgHACIgOACQgIgBgHgBgAlZgpQgFADgDAFQgDAFgCAHQgCAHAAAJQAAAHACAHQACAHADAFQAEAGAEACQAFADAGAAQAGAAAFgDQAEgCAEgGQADgFACgHQACgHAAgHQAAgJgCgHQgCgHgEgFQgDgFgFgDQgFgDgFAAQgGAAgFADgAL0BBIgLgEQgNgHgFgFQgHgIgFgKIgDgKIgBgLQAAgIAEgNQAFgLAHgHIAJgHIAKgFIALgEIAMgBQAIAAAHACQAHACAGACIAKAJQAFAEADAFIgZASQgEgEgFgEQgFgCgGAAQgFAAgEACIgHAFIgEAHQgCAEAAAGIACAKQABAEADADQADADAEACQAEACAFAAQAGAAAFgDQAEgDAFgFIAaASIgJAKQgEAFgGADQgGAEgHACQgIABgIAAIgMgBgAJxA+IgKgFIgJgHIgHgIIgFgKIgDgKIgBgMQAAgJAEgNQAEgKAHgIQAIgHAKgEIAKgEIAMgBIANABIALAEIAJAFIAIAHQAHAJADAKQADAKAAAMIAAAIIhIAAQACAIAGAFQAGAFAJAAQAHAAAFgDQAGgCAGgHIAVASIgJAJQgFAEgFADQgGADgHACQgHABgIAAQgQgCgHgCgAKYABQgBgIgFgGQgFgFgIAAQgIAAgFAFQgEAFgCAJIAmAAIAAAAgAD9BBQgHgBgFgDIgKgEIgIgIIgHgJIgEgMQgCgIgCgUQAAgNACgLQACgNAFgJQACgFAEgFQADgEAFgEQAFgEAGgCQAHgDAIgBIA3gJIAEAdIg4ALQgHABgFADQgFACgDAFQgEAFgBAGQADgFAJgFQAFgCAGgCQAHgCAIAAQAKAAAJAEQAJADAIAHQAHAGAEAJQAEAMAAAHIgBALIgDAKQgEALgIAHQgMAJgHACQgOAFgJAAgAECgIQgEACgDACQgDADgBAEIgBAJQAAAEABAEIAEAIQADACAEACQAEACAFAAQAEAAAEgCQAEgCADgCQACgDACgFQABgEAAgEQAAgFgBgEQgCgDgDgEQgDgCgDgCQgEgCgFAAQgEAAgEACgAsABBIgLgEIgKgEIgJgIQgFgEgHgOIgEgKIgBgLQAAgIAFgOQACgGAKgMIAJgHIAKgEIALgEIANgBQAJAAAPAFQAHACAMAJQAJAMADAGQAFANAAAJQAAAGgCAFIgDAKQgHANgFAFQgMAKgHACIgMAEIgMABIgNgBgAr9gMQgEACgDAEQgDADgBADQgCAEAAAGQAAAFACAEQABAEAEADQADAEAEACQAEACAFAAQAFAAAEgCQAFgCACgEQAEgDABgEQACgEAAgFQAAgGgCgEQgCgDgDgDQgDgEgEgCQgEgCgFAAQgFAAgFACgAIYBAIAAg2IgaAlIgagkIAAA1IglAAIAAhrIAnAAIAZAlIAZglIAmAAIAABrgAoFBAIA9hrIhBAAIAAghIBsAAIAAAdIg+BvgAqQBAIAAhNIggAAIAAgeIBlAAIAAAeIgfAAIAABNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-81.5,-9.6,163.1,19.2), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiAjQgPgOAAgVQAAgUAPgPQAOgOAUAAQAVAAAOAOQAPAPAAAUQAAAVgPAOQgOAPgVAAQgUAAgOgPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-5,-5,10,10), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGVBKQAKgCAFgEQAFgFAAgHIAAgBIgPAAIAAgoIAnAAIAAAhQAAAKgCAIQgDAIgGAEQgFAFgIADQgHACgKAAgAq3A5IgNgFIgMgGIgLgJQgFgEgEgHQgEgGgCgGQgDgGgCgIQgBgGAAgIIABgPIAEgNIAHgNQAEgGAFgFIALgJQAGgDAGgDIAOgEQAIgCAIAAQAKAAAJACQAJACAHAFQAHAEAGAFQAGAFAEAHIgcAWQgGgIgHgEQgIgFgKABQgHAAgGACQgGAEgFAFQgEAFgDAGQgCAIAAAHQAAAIACAGQADAGAEAGQAFAEAGAEQAGADAHAAQAGgBAEgBIAIgEQAHgDAHgJIAdAVIgLANQgGAGgHAEQgIAEgJADQgKACgLAAIgPgBgABPA5IgLgEIgKgFIgJgHQgFgFgHgNIgEgKIgBgMQAAgGAFgPQACgGAKgMIAJgHIAKgFIALgEIANgBQAJAAAPAFQAHADAMAJQAJALADAHQAFAOAAAHQAAAGgCAGIgDAKQgHAMgFAGQgMAJgHADIgMAEIgMABIgNgBgABSgVQgEACgDAEQgDADgBAFQgCAEAAAEQAAAFACAFQABAEAEADQADADAEACQAEACAFAAQAFAAAEgCQAFgCACgDQAEgDABgEQACgFAAgFQAAgEgCgEQgCgFgDgDQgDgEgEgCQgEgBgFAAQgFAAgFABgAh4A3QgHgCgFgEQgFgEgDgHQgCgGAAgJQAAgHADgHQADgGAFgEQAGgEAIgCQAHgDAKAAQAKAAAQAFIAAgCQAAgJgFgEIgHgDIgKgBQgIAAgHABIgOAEIgIgbQAKgDAJgCQALgDAOAAQAJAAAPAEQAKADAHAHQAGAFADAJQACAIAAAMIAAA9IglAAIAAgLQgGAGgIADQgIAFgKAAQgIgBgGgCgAhlAMQgFAEAAAGQAAAGAEADQAEACAGAAQAIAAAFgEQAFgFAAgIIAAgFQgGgDgIAAQgJAAgEAEgAniA3QgHgCgFgEQgEgEgDgHQgDgGAAgJQAAgHADgHQADgGAGgEQAFgEAIgCQAIgDAJAAQAKAAAQAFIAAgCQAAgJgFgEIgHgDIgJgBQgIAAgIABIgOAEIgIgbQAKgDAKgCQALgDANAAQAKAAAPAEQAKADAGAHQAGAFADAJQADAIAAAMIAAA9IgmAAIAAgLQgGAGgHADQgIAFgLAAQgHgBgHgCgAnPAMQgEAEAAAGQAAAGADADQAEACAGAAQAIAAAGgEQAFgFAAgIIAAgFQgHgDgIAAQgIAAgFAEgAK+A2QgGgDgFgFQgFgGgDgGQgCgHAAgIQAAgHACgIQADgFAFgFQAFgGAGgCQAHgDAIgBQAIABAHADQAGACAFAGQAFAFACAFQADAIAAAIQAAAHgDAHQgCAGgFAGQgFAFgGADQgHADgIAAQgIAAgHgDgALEAIQgDAEAAAIQAAAGAEAFQADAEAFAAQAFAAADgEQAEgFAAgHQAAgGgEgFQgDgEgFAAQgFAAgEAEgAJbA3IBsiLIAbAAIhsCLgAHWA3IA+hqIhBAAIAAghIBsAAIAAAdIg+BugAFeA3IAAhoIgYAGIgHgfIApgLIAcAAIAACMgAC/A3IAAhNIggAAIAAgeIBlAAIAAAeIgfAAIAABNgAi8A3IgVgiIgLAMIAAAWIgmAAIAAhrIAmAAIAAAoIAegoIArAAIglAsIAmA/gAl7A3IAAhrIBAAAQAKAAAIADQAHACAFAFQADADACAEQACAEAAAGQAAAJgFAGQgEAGgIADIAJAEQAEACACADQADADABAEQACAFAAAFQAAAHgDAGQgDAFgFAEQgGAEgHACQgIACgJAAgAlWAfIAQAAQAGAAAEgDQAEgDAAgFQAAgEgEgDQgEgDgHAAIgPAAgAlWgJIANAAQAGAAAEgDQADgDAAgEQAAgEgDgCQgDgDgHAAIgNAAgApEA3IAAhNIggAAIAAgeIBlAAIAAAeIgfAAIAABNgAJggNQgGgEgFgFQgFgFgCgGQgDgHAAgJQAAgHADgHQACgHAFgFQAFgFAGgDQAHgDAIAAQAIAAAHADQAHADAFAFQAEAFADAHQACAHAAAIQAAAHgCAIQgDAGgFAFQgEAFgHAEQgHACgIAAQgIAAgHgCgAJng7QgDAEAAAHQAAAGADAFQADAEAFABQAFgBAEgEQADgFAAgHQAAgGgDgEQgEgFgFAAQgFAAgDAFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-75.3,-8.8,150.6,17.6), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al7BgIAAiLIAmAAIAAAOQAHgIAHgEIAIgEIALgBQAKAAAJAEQAIAEAHAHQAHAIADAKQAEAOAAAJQgBAQgDAHQgDALgHAHQgHAHgIAEQgJAEgKAAIgLgBIgJgEQgGgDgHgHIAAAtgAlIgMIgHAFIgFAHQgBAEAAAGQAAAFABAFQACAEADADQADAEAEACQAEABAFAAQAEAAAEgBIAHgFIAFgIQACgFAAgGQAAgFgCgEIgFgHIgHgFQgEgCgEAAQgFAAgEACgAGiBZIBYi4IAfAAIhZC4gApPBBIgNgEIgMgGIgLgJQgFgFgEgGQgEgGgCgGQgDgHgCgHQgBgHAAgHQAAgIABgHIAEgOIAHgMQAEgGAFgFIALgJQAGgEAGgCIAOgFQAIgBAIAAQAKAAAJACQAJACAHAEQAHAEAGAGQAGAFAEAHIgcAWQgGgIgHgEQgIgFgKAAQgHAAgGADQgGADgFAFQgEAFgDAHQgCAHAAAIQAAAHACAGQADAHAEAFQAFAFAGADQAGADAHAAQAGAAAEgBIAIgEQAHgDAHgJIAdAVIgLANQgGAGgHAEQgIAEgJACQgKADgLAAIgPgCgAAtBBIgKgDQgNgHgFgFQgIgIgEgKIgDgLIgBgLQAAgIAEgNQAEgKAIgIIAIgHIAKgFIALgEIANgBQAIAAAHACQAHACAGADIAKAIQAEAEAEAGIgaASQgEgFgEgDQgFgDgGAAQgFAAgFACIgHAFIgEAHQgBAFAAAFIABAKQACAEADADQACAEAEACQAEABAFAAQAGAAAFgDQAFgCAFgGIAZATIgIAKQgFAEgGADQgGAEgHACQgHABgJAAIgMgBgAnVA+IgKgFIgJgGIgHgIIgFgKIgDgLIgBgMQAAgIAEgNQAEgLAHgHQAIgIAKgEIAKgEIAMgBIANABIALAEIAJAFIAIAIQAHAIADALQADAJAAAMIAAAIIhIAAQACAJAGAEQAGAFAJAAQAHAAAFgDQAGgCAGgGIAVARIgJAJQgFAFgFACQgGADgHACQgHABgIAAQgQgBgHgDgAmuABQgBgIgFgGQgFgFgIAAQgIAAgFAGQgEAFgCAIIAmAAIAAAAgAIhBAIA9hrIhBAAIAAggIBsAAIAAAdIg+BugAFtBAIAAgbIhEAAIgHgcIBJhVIAnAAIAABUIASAAIAAAdIgSAAIAAAbgAFLAIIAiAAIAAgngACqBAIAAgdIA0gnQAKgIAEgGQAEgFAAgHQAAgGgEgEQgEgEgHAAQgHAAgHAEQgGAEgIAKIgagWIALgNQAGgFAHgEQAGgEAIgCQAJgCAKAAQALAAAKAEQAJADAHAGQAHAGADAIQAEAIAAAKQAAAJgCAGQgCAHgEAGQgEAFgGAFIgmAbIA6AAIAAAggAgzBAIAAg2IgkA2IgjAAIAAhrIAlAAIAAA1IAkg1IAjAAIAABrgAj0BAIAAhrIBBAAQAKAAAHACQAHADAFAEQAEAEABAEQACAEAAAGQAAAJgFAGQgEAFgIADIAJAEQAEACADAEQACADACAEQABAEAAAGQAAAHgDAFQgCAGgGAEQgFAEgIACQgHACgKAAgAjPAnIAQAAQAHAAADgDQAEgCAAgFQAAgEgEgDQgDgDgHAAIgQAAgAjPAAIANAAQAHAAADgDQAEgDAAgEQAAgEgEgDQgDgCgGAAIgOAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-64.9,-9.5,129.9,19.2), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuqC+IAAgzIiFAAIgFAzIhQAAIAAh7IAYAAQAHgVAKguQADgaAChMIAAgNIDjAAIAAC2IAeAAIgJB7gAwAgnQgBAfgFAbQgEAXgHAZIBEAAIAAhvIgzAAgAViCOIgagIQgegQgMgMQgSgTgKgYIgHgZIgDgaQAAgRAKghQAKgYASgSIAUgRIAYgMIAagIQAOgDAPAAQATAAARAEQAQAEANAIQAOAHALALQAKAKAIANIg8ArQgJgMgLgGQgLgHgOAAQgMAAgKAFQgKAEgHAIQgGAIgEAKQgEAKAAAMQAAAMAEALQAEAKAGAIQAHAIAKAEQAJAFALAAQAPAAAMgIQAJgFAMgOIA9AsQgJANgLAKQgLALgOAIQgOAIgRAEQgRAEgVAAQgOAAgNgDgAgrCJQgWgHgRgOQgQgNgMgSQgLgTgGgVIgfAAIAABeIhZAAIAAj+IBZAAIAABcIAgAAQAGgUALgSQAMgSARgNQARgOAVgHQAWgHAYAAQAPAAAOACQAOADANAFQAQAHAaAWQASASAJAYQAKAhAAASQgDAjgHAQQgJAYgSASQgbAXgQAGQgNAFgNADQgPADgPAAQgYAAgWgIgAgRgoQgJAEgGAIQgGAIgDALQgDAJAAAMQAAAMADAKQAEAKAGAIQAGAIAJAFQAKAEAKAAQAMAAAJgEQAJgFAGgIQAGgHADgLQADgKAAgMQAAgMgDgJQgDgLgHgIQgGgIgJgEQgJgFgMAAQgLAAgJAFgA1ACOIgbgIIgYgMIgUgQQgMgMgRgfIgIgYIgDgbQAAgRALgiQAHgPAWgbIAVgQIAYgMIAbgJQAOgCAPAAQAVAAAkAKQAQAHAcAWQAWAaAHAQQAKAhAAASQAAANgCANIgIAZQgRAegMAMQgcAXgRAGIgbAIQgOADgPAAQgQAAgOgDgA05goQgJAEgHAIQgHAIgEALQgEAJAAAMQAAALAEALQAEAKAIAIQAHAIAKAFQAKAEALAAQAMAAAKgEQAKgFAHgIQAHgIAEgKQADgKAAgMQAAgMgDgJQgEgLgIgIQgHgIgKgEQgKgFgLAAQgMAAgLAFgAo2CKIAEhFIAOACQAIAAAEgDQAHgFAEgMQAFgOADgbQADgdAAgvIAAgxIDbAAIAAD+IhZAAIAAi3IgvAAIAAAHQgDBEgFAYIgIAfQgFAOgHAKQgMASgSAIQgPAGgWAAgAanCLIAAhJIgUAAIgxBJIhmAAIA8hZQgMgFgIgHQgJgIgGgJQgGgKgDgLQgDgLAAgPQAAgTAGgPQAGgPALgLQANgOAVgHQAVgIAcAAICOAAIAAD+gAZrgpQgIAHAAANQAAAMAIAHQAJAFAQAAIAjAAIAAgyIgjAAQgQAAgJAGgAP0CLIAAj+IBaAAIAABQIArAAQAWAAAUAGQATAFAOALQAOALAIAPQAIARAAAVQAAAUgHARQgIAQgNALQgNAMgTAGQgTAGgXAAgAROBMIAbAAQARAAAIgHQAKgHAAgOQAAgMgKgHQgJgHgQAAIgbAAgAM0CLIAAi2IhKAAIAAhIIDuAAIAABIIhLAAIAAC2gAJ3CLIAAiAIhUCAIhTAAIAAj+IBXAAIAAB/IBUh/IBSAAIAAD+gAFHCLIAAhSQgLAFgUADIggADQgTAAgRgFQgQgGgMgLQgNgLgGgQQgHgQAAgTIAAhjIBaAAIAABIQAAAUAGAJQAGAKAOAAIAUgCQAKgCAHgGIAAhlIBZAAIAAD+gAqaCLIgxhRIgZAeIAAAzIhaAAIAAj+IBaAAIAABfIBFhfIBlAAIhXBpIBZCVgA40CLIAAj4IhwAAIAAD4IhcAAIAAlIIEnAAIAAFIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-179.2,-19,358.6,38.1), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AtMkDIaZAAQAyAAAAAyIAAGjQAAAygyAAI6ZAAQgyAAAAgyIAAmjQAAgyAyAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-90.5,-27,181,54), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguClIAAhQIBdAAIAABQgAgXA6Igbi1IAAgpIBlAAIAAApIgcC1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-5,-16.4,10.1,32.9), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMLClIAAi5Ih/C5IhVAAIAAlJIBaAAIAAC5IB/i5IBWAAIAAFJgAGiClIAAi8IhUB/IgCAAIhTh+IAAC7IhaAAIAAlJIBhAAIBOCAIBPiAIBgAAIAAFJgAALClIAAi5Ih+C5IhVAAIAAlJIBaAAIAAC5IB+i5IBWAAIAAFJgAoEClIAAlJICNAAQAfABAZAHQAaAIARAPQATAPAJAWQAKAeAAATQAAAOgDANQgDANgFALQgFAKgIAJIgQARQgTAPgaAIQgaAIgfgBIgtAAIAABfgAmpAAIArAAQAMAAAKgDQAKgDAGgGQAHgFAEgIQADgJAAgJQAAgLgDgJQgEgHgHgGQgGgFgKgDQgKgDgMAAIgrAAgAqZClIAAj5IhwAAIAAD5IhcAAIAAlJIEnAAIAAFJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-86.9,-16.4,174,32.9), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIjCiQgSgFgSgLIAkhCQARAMAUAAQAHAAAHgEQAIgDAGgIIiAjyIBlAAIBLCbIBGibIBkAAIiBD7QgLAWgMAPQgMAQgNAKQgNAKgPAFQgQAEgTAAQgWAAgVgGgAEbCkIAAj5IhiAAIAAhQIEgAAIAABQIhjAAIAAD5gAhwCkIAAlJICMAAQAfAAAZAIQAaAIARAPQATAPAJAWQAKAeAAATQAAAPgDAMQgDANgFALQgFAKgIAKIgQARQgTAOgaAIQgaAHgfAAIgsAAIAABfgAgVgBIAqAAQAMAAAKgDQAKgDAGgGQAHgFAEgJQADgHAAgLQAAgKgDgJQgEgHgHgGQgGgFgKgDQgKgDgMAAIgqAAgAjyCkIgYg7Ih/AAIgXA7IhgAAICMlLIBYAAICMFLgAkkAiIglhdIglBdIBKAAgAptCkIhTh7IghAlIAABWIhcAAIAAlJIBcAAIAACGIBxiGIBsAAIh9COICBC7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-82.9,-16.8,166,33.6), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkhCjQgPgFgPgIIAWgyQASALANAAQALAAAFgIIhPjFIBKAAIApB5IAmh5IBIAAIhJDEQgHASgHAMQgIANgIAHQgJAIgMAEQgLADgPAAQgSAAgRgEgABLCUIAAgpIhoAAIgEApIg/AAIAAhiIATAAQAFgRAIgkQADgVABg8IAAgKICzAAIAACQIAXAAIgGBigAAHgiQgBAZgDAVQgDASgFAUIA1AAIAAhYIgpAAgADaBoIgTgJIgQgMIgMgQIgKgSIgGgUIgCgXQAAgOAIgaQAHgTAOgPQANgOATgIIATgGQALgCALAAQANAAALACQALACAKAFQAJAEAJAGQAHAGAHAIQAMAPAGAUQAHATAAAWIgBAPIiHAAQAEAQAMAIQALAJARAAQAMAAALgFQAKgFAMgLIAnAhQgIAJgIAHQgKAIgKAFQgLAGgNADQgNADgPAAQgegDgNgFgAEigKQgCgQgJgKQgJgKgPAAQgOAAgJAKQgJAKgDAQIBGAAIAAAAgAndBuQgLgDgKgEQgLgDgIgGQgIgGgHgIQgHgIgFgKQgFgKgDgLQgFgQgCglQAAgaADgTQAEgYAJgRQAEgKAHgIQAHgJAJgGQAJgHAMgFQAMgEAOgDIBngQIAIA2IhpAUQgNACgKAFQgIAFgFAHQgJAKgBALQAGgJAQgJQAJgFALgDQANgDAPAAQATAAARAGQASAHANAMQAOAMAHAQQAIAYAAANIgCAVIgGATQgIASgPAOQgVARgNAFQgcAJgPAAgAnTgcQgHAEgFAFQgFAGgDAIQgDAGAAAJQAAAIADAIQADAHAFAGQAGAGAHADQAHAEAIAAQAJAAAHgEQAHgDAFgGQAGgFACgIQADgHAAgJQAAgJgDgGQgDgIgFgFQgGgGgHgEQgHgDgIAAQgJAAgHADgAGuBrIAAiQIg7AAIAAg5IC9AAIAAA5Ig7AAIAACQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-55.9,-16.7,112,33.5), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiJBnIgVgGIgTgKIgQgMQgKgKgOgYIgFgUIgDgVQAAgOAIgaQAGgMASgWIAQgMIATgKIAVgHQAMgBAMAAQAQAAAdAIQANAFAWARQASAWAFAMQAIAaAAAOQAAALgCAKIgHATQgNAZgJAJQgXASgNAFIgWAGQgKADgMgBQgMABgMgDgAiDgpQgHAEgHAGQgFAGgDAJQgDAHAAAJQAAAJADAIQAEAIAFAHQAGAGAIAEQAIAEAJAAQAJAAAJgEQAHgEAFgGQAGgHADgIQADgIAAgJQAAgIgDgIQgDgIgGgHQgGgGgHgEQgJgEgIAAQgKAAgIAEgACcBlIAAhJIg7AAIAABJIhHAAIAAjJIBHAAIAABHIA7AAIAAhHIBGAAIAADJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-22.6,-10.5,45.2,21.1), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak+BlQgMgFgJgIQgJgIgGgMQgEgMAAgPQgBgPAGgMQAGgLAKgIQAKgIAPgEQAOgEASAAQATAAAeAIIAAgDQAAgQgKgIQgFgEgIgDQgHgCgLAAQgPAAgOADQgLACgPAGIgPgyQATgHASgFQAVgDAYAAQASgBAcAHQASAGANAMQALALAGAQQAEAQAAAVIAABzIhFAAIAAgVQgLANgOAFQgQAIgTgBQgOAAgNgDgAkaAUQgJAGAAAMQAAAKAIAHQAGAFAMAAQAPAAAKgJQAKgJAAgPIAAgKQgNgEgPAAQgQgBgIAIgAH3BkIAAhjIgxBEIgwhDIAABiIhFAAIAAjJIBIAAIAuBGIAvhGIBIAAIAADJgADmBkIAAhkIhDBkIhBAAIAAjJIBEAAIAABlIBDhlIBCAAIAADJgAADBkIglhBIgVAZIAAAoIhHAAIAAjJIBHAAIAABMIA3hMIBPAAIhFBTIBHB2gAm8BkIgmhBIgUAZIAAAoIhHAAIAAjJIBHAAIAABMIA3hMIBQAAIhFBTIBHB2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-57.4,-10.4,114.8,20.9), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJSCPQASgCAKgIQAJgJAAgOIAAgBIgdAAIAAhJIBLAAIAAA7QAAAUgGAPQgGAOgKAJIgEAEQgIAGgMADQgOAEgSABgAl1BrIgSgKIgQgMIgMgPIgKgSIgGgVIgCgWQgBgOAJgbQAGgTAOgOQAOgPATgHIATgHQAKgCALAAQANAAAMADQALACAJAEQAKAEAIAGQAIAGAHAIQAMAPAGAUQAHAUgBAWIAAAOIiHAAQAEAQALAJQAMAIAQAAQANAAALgFQAKgFALgKIAoAgQgIAKgIAHQgKAIgKAFQgMAFgMADQgOADgOAAQgegDgOgEgAksgHQgCgRgJgKQgKgKgOAAQgOAAgJAKQgJAKgDARIBGAAIAAAAgACvBuQgMgEgJgIQgKgJgFgLQgFgMAAgPQAAgQAFgMQAGgLALgJQAKgGAPgFQAOgEASAAQASAAAfAIIAAgDQAAgQgLgIQgFgEgHgDQgIgCgKAAQgPAAgOADQgMADgOAFIgPgyQASgHASgEQAWgEAXAAQATAAAbAGQATAGANAMQALALAFAQQAFAQAAAVIAABzIhGAAIAAgVQgLANgOAGQgPAHgTAAQgPAAgMgEgADTAdQgJAHAAALQAAALAHAGQAHAFALAAQAPAAALgJQAJgJAAgPIAAgJQgMgFgPAAQgQAAgIAHgAHzBtIAAhlIhDBlIhBAAIAAjIIBFAAIAABkIBChkIBCAAIAADIgAjMBtIAAjIIBHAAIAACPIAxAAIAAiPIBHAAIAACPIAwAAIAAiPIBHAAIAADIgAqkBtIAAkEIBxAAQAYAAAUAHQAUAGAOAMIAMAMQAGAIAEAJQAIAYAAAPQAAALgCALQgDAKgDAJQgEAIgGAIIgOAMQgPAMgVAGQgUAGgZAAIgjAAIAABKgApbgVIAiAAQAKAAAHgCQAIgDAGgEQAFgFACgGQAEgHAAgHQAAgJgEgGQgCgHgFgEQgGgEgIgDQgHgCgKAAIgiAAgAG+hvIgHgDIgLgIQgIgHgFgKQgFgLgCgNIAlgHQADALAGAFQAFAGAKAAQAKAAAFgGQAGgFADgLIAlAHQgCANgEALQgGAKgIAHIgLAIIgHADQgLADgMAAQgNAAgKgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-67.6,-17,135.3,34.2), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIpCCIAAgsIhvAAIgDAsIhDAAIAAhnIAUAAQAGgRAIgnQADgVABg/IAAgKIC8AAIAACWIAZAAIgHBngAHhg9QgBAagDAXQgEATgGAUIA5AAIAAhcIgrAAgAm5CCIAAgsIhvAAIgDAsIhDAAIAAhnIAUAAQAGgRAIgnQADgVABg/IAAgKIC8AAIAACWIAZAAIgHBngAoBg9QgBAagDAXQgEATgGAUIA5AAIAAhcIgrAAgADYBZIgWgGIgUgKIgRgOQgKgKgOgZIgHgUIgCgWQAAgPAJgbQAFgOATgVIARgOIAUgLIAXgGQAMgCAMgBQARAAAeAJQAOAGAXASQASAWAGAOQAIAbAAAPQAAAMgCAKIgGAUQgOAZgLAKQgXASgOAGIgWAGQgMADgNAAQgMAAgMgDgADeg9QgIADgGAHQgGAGgDAIQgDAJAAAKQAAAKAEAIQADAIAGAGQAGAIAIADQAIAEAKAAQAKAAAIgEQAIgDAGgIQAGgGADgIQADgIAAgKQAAgJgDgJQgDgJgGgGQgHgHgIgDQgIgFgKAAQgKAAgIAFgAkMBZIgWgGIgUgKIgRgOQgKgKgOgZIgHgUIgCgWQAAgPAJgbQAFgOATgVIARgOIAUgLIAXgGQAMgCAMgBQARAAAeAJQAOAGAXASQASAWAGAOQAIAbAAAPQAAAMgCAKIgGAUQgOAZgLAKQgXASgOAGIgWAGQgMADgNAAQgMAAgMgDgAkGg9QgIADgGAHQgGAGgDAIQgDAJAAAKQAAAKAEAIQADAIAGAGQAGAIAIADQAIAEAKAAQAKAAAIgEQAIgDAGgIQAGgGADgIQADgIAAgKQAAgJgDgJQgDgJgGgGQgHgHgIgDQgIgFgKAAQgKAAgIAFgAAeBWIgfg2IgiA2IhOAAIBHhpIhFhoIBPAAIAgAzIAegzIBOAAIhFBnIBHBqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-62.2,-12.9,124.6,25.9), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABPCTIgVgGIgUgLIgRgNQgLgKgNgZIgGgVIgDgWQAAgPAJgbQAFgNATgWIARgNIAUgLIAWgGQAMgDANAAQAQAAAeAJQAPAGAWASQATAWAFANQAJAbAAAPQAAALgCALIgHAVQgNAZgLAKQgXASgOAFIgWAHQgNACgMAAQgMAAgNgCgABWgEQgIAEgGAFQgGAHgDAIQgDAJAAAKQAAAJAEAJQACAJAHAGQAGAHAIAEQAIAEAKAAQAKAAAIgEQAIgEAGgHQAGgGADgJQADgIAAgKQAAgKgDgIQgEgJgFgHQgHgFgIgEQgJgEgJAAQgKAAgIAEgAGGCQIAAhpIhGBpIhEAAIAAjSIBHAAIAABpIBHhpIBEAAIAADSgAjwCQIAAjSIB9AAQAUAAAOAFQAOAFAKAJQAGAHAEAIQAEAJAAALQAAAQgKAMQgIALgPAHIARAIQAIAEAEAGQAGAHACAIQADAIAAALQAAAOgFALQgGAKgKAIQgLAHgPAEQgPAEgSAAgAioBgIAeAAQAOAAAGgFQAIgFgBgKQAAgIgGgFQgIgGgOAAIgdAAgAioARIAZAAQAMAAAIgFQAGgFAAgIQABgIgHgFQgGgFgMAAIgbAAgAmQCQIAAiWIg9AAIAAg8IDFAAIAAA8Ig+AAIAACWgAFPhXQgLgEgIgHQgJgIgFgKQgGgLgCgOIAngHQADALAHAFQAGAHAKAAQAKAAAGgHQAFgFAEgLIAnAHQgCAOgFALQgGAKgIAIQgJAHgKAEQgLAEgNAAQgOAAgKgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-46.2,-14.9,92.4,29.9), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkpCMQgKgEgLgFIgUgOIAdguQAMAJAUAGQASAGANAAQAQAAAIgEQAGgEAAgJQABgHgGgEQgHgGgRAAIgbAAIAAgvIAbAAQANAAAGgGQAGgEAAgHQgBgGgGgEQgHgEgMAAQgOAAgQAGQgRAGgKAIIgegoQAJgIAKgGQALgGALgEQAMgFAOgDQAOgCAPAAQAWAAAQAEQARAFALAHQAMAIAFALQAHAKgBANQAAAQgJANQgIAKgQAHQASAHAKALQAFAGADAIQADAIAAAJQAAAPgGAMQgGAMgMAJQgNAJgUAFQgTAFgbAAQgmgCgOgEgAHFCQIgVgHQgZgOgKgKQgPgPgIgUIgGgUIgDgXQAAgOAJgbQAJgUAPgPIAPgNIAUgLIAWgGQALgCANAAQAQAAANADQAOADAMAGQAKAGAJAJQAJAJAHALIgyAjQgHgKgKgFQgJgFgMAAQgKAAgIAEQgIADgGAGQgFAGgDAJQgDAJAAAJQAAALADAIQADAJAFAHQAGAGAIAEQAIADAJAAQAMAAAKgGQAIgEAKgMIAzAlQgJALgJAIQgJAJgKAGQgNAHgNADQgPAEgRAAQgMAAgLgCgADGCKIgUgKIgQgNIgOgQIgJgSIgHgWIgCgYQAAgPAIgbQAIgUAOgPQAOgPAUgIIAUgHQAMgCALAAQANAAAMACQAMADAKAEQAKAFAIAGQAJAGAHAIQAMAQAHAVQAHAUAAAYIgBAPIiNAAQAEARAMAJQAMAIASAAQANAAALgFQAKgFAMgLIApAiQgHAKgKAIQgKAIgKAFQgMAGgNADQgOADgPAAQghgDgNgFgAESASQgCgSgKgJQgKgKgOAAQgPAAgKAKQgKAJgCASIBJAAIAAAAgArkCQQgMgCgLgFQgLgEgJgGQgIgGgHgIQgHgJgGgKIgJgWQgEgRgCgoQAAgZADgUQAEgaAJgSQAFgKAHgJQAHgJAJgGQAKgIAMgEQAMgFAPgDIBsgRIAJA5IhuAUQgNADgLAFQgIAFgGAHQgJALgBAMQAGgKARgJQAKgGALgDQAOgDAPAAQAUAAASAGQATAHANANQAOANAJARQAHAYABAOIgDAWIgGAUQgIATgQAPQgWASgOAFQgcAJgRAAgAraAAQgHACgGAGQgFAGgDAIQgDAIAAAJQAAAJADAIQADAIAGAGQAFAGAIAEQAHADAJAAQAJAAAIgDQAHgEAFgGQAGgGACgIQAEgIAAgJQAAgJgEgIQgDgHgFgGQgGgHgHgCQgIgDgJAAQgJAAgHADgAAZCNIAAhNIg7AAIAABNIhLAAIAAjSIBLAAIAABKIA7AAIAAhKIBLAAIAADSgAmwCNIAAhqIhFBqIhFAAIAAjSIBIAAIAABoIBHhoIBDAAIAADSgAK7AzIAAhAICAAAIAABAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-82.7,-14.6,165.5,29.3), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABnCTIgWgGIgUgLIgRgNQgKgKgOgZIgGgVIgDgWQAAgPAJgbQAGgNASgWIARgNIAVgLIAWgGQAMgDANAAQAQAAAeAJQAOAGAXASQASAWAGANQAJAbAAAPQAAALgDALIgGAVQgOAZgLAKQgXASgNAFIgXAHQgMACgMAAQgNAAgMgCgABugEQgIAEgHAFQgFAHgEAIQgCAJAAAKQgBAJAEAJQADAJAGAGQAGAHAJAEQAHAEALAAQAKAAAIgEQAHgEAGgHQAGgGADgJQAEgIAAgKQAAgKgEgIQgDgJgGgHQgHgFgHgEQgJgEgJAAQgLAAgHAEgAGdCQIAAhpIhFBpIhFAAIAAjSIBIAAIAABpIBHhpIBDAAIAADSgAjZCQIAAjSIB9AAQAUAAAOAFQAPAFAKAJQAGAHAEAIQADAJAAALQAAAQgKAMQgHALgPAHIAQAIQAIAEAFAGQAFAHADAIQACAIAAALQAAAOgFALQgGAKgJAIQgLAHgPAEQgPAEgTAAgAiRBgIAfAAQANAAAHgFQAHgFAAgKQAAgIgHgFQgHgGgOAAIgeAAgAiRARIAZAAQANAAAHgFQAHgFAAgIQAAgIgHgFQgGgFgMAAIgbAAgAmSCQIAAjNIhSAAIAAhDIDvAAIAABDIhSAAIAADNgAFmhXQgLgEgIgHQgJgIgEgKQgGgLgCgOIAmgHQAEALAGAFQAGAHALAAQAJAAAHgHQAFgFAEgLIAmAHQgBAOgGALQgFAKgIAIQgJAHgKAEQgLAEgNAAQgOAAgLgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-48.5,-14.9,97.1,29.9), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-120,-200,240,400), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg2();
	this.instance.parent = this;
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-120,-200,240,400), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg3();
	this.instance.parent = this;
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-120,-200,240,400), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg4();
	this.instance.parent = this;
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-120,-200,240,400), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,-0.2,0.436,0.436);

	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-90.2,-26.7,180.5,53.5), null);


// stage content:
(lib.pk240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(294));

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(119.6,350.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(189).to({_off:false},0).wait(19).to({y:446.8},0).to({y:350.8,alpha:1},8,cjs.Ease.get(1)).wait(67).to({y:462.8,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Сервис 24/7
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,236.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(189).to({_off:false},0).wait(17).to({y:204.9},0).to({y:236.9,alpha:1},5,cjs.Ease.get(1)).wait(71).to({x:-88,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Символ 24
	this.instance_2 = new lib.Символ24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(119.6,214.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(189).to({_off:false},0).wait(15).to({y:182.2},0).to({y:214.2,alpha:1},5,cjs.Ease.get(1)).wait(72).to({alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(2));

	// Символ 28
	this.instance_3 = new lib.Символ28();
	this.instance_3.parent = this;
	this.instance_3.setTransform(120,191.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(189).to({_off:false},0).wait(13).to({y:159.6},0).to({y:191.6,alpha:1},5,cjs.Ease.get(1)).wait(73).to({x:328,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// Символ 27
	this.instance_4 = new lib.Символ27();
	this.instance_4.parent = this;
	this.instance_4.setTransform(120.2,170.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(189).to({_off:false},0).wait(11).to({y:138.8},0).to({y:170.8,alpha:1},5,cjs.Ease.get(1)).wait(74).to({x:-71.8,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(4));

	// Символ 24
	this.instance_5 = new lib.Символ24();
	this.instance_5.parent = this;
	this.instance_5.setTransform(119.6,147);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(189).to({_off:false},0).wait(9).to({y:115},0).to({y:147,alpha:1},5,cjs.Ease.get(1)).wait(75).to({alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(5));

	// Ставка от 1,7%
	this.instance_6 = new lib.Символ21();
	this.instance_6.parent = this;
	this.instance_6.setTransform(120,123.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(189).to({_off:false},0).wait(7).to({y:91.7},0).to({y:123.7,alpha:1},5,cjs.Ease.get(1)).wait(76).to({x:360,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(6));

	// Символ 24
	this.instance_7 = new lib.Символ24();
	this.instance_7.parent = this;
	this.instance_7.setTransform(119.6,100.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(189).to({_off:false},0).wait(5).to({y:68.2},0).to({y:100.2,alpha:1},5,cjs.Ease.get(1)).wait(77).to({alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(7));

	// Символ 25
	this.instance_8 = new lib.Символ25();
	this.instance_8.parent = this;
	this.instance_8.setTransform(120,75.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(189).to({_off:false},0).wait(3).to({y:43.7},0).to({y:75.7,alpha:1},5,cjs.Ease.get(1)).wait(78).to({x:-136,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(8));

	// Символ 26
	this.instance_9 = new lib.Символ26();
	this.instance_9.parent = this;
	this.instance_9.setTransform(120,56.7);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(189).to({_off:false},0).wait(1).to({y:24.7},0).to({y:56.7,alpha:1},5,cjs.Ease.get(1)).wait(79).to({x:344,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(9));

	// Символ 15
	this.instance_10 = new lib.Символ15();
	this.instance_10.parent = this;
	this.instance_10.setTransform(300,257.5,2.142,2.142);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(134).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.88,scaleY:0.88,rotation:-2,x:194.1,y:227.6,alpha:1},5).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:203.8,y:232.8},2).wait(34).to({scaleX:1.13,scaleY:1.13,x:214.4,y:221.3},2,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,scaleX:0.65,scaleY:0.65,x:174.4,y:290.1,alpha:0},6,cjs.Ease.get(1)).to({_off:true},78).wait(33));

	// Символ 13
	this.instance_11 = new lib.Символ13();
	this.instance_11.parent = this;
	this.instance_11.setTransform(106,257.8,2.142,2.142);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(134).to({_off:false},0).to({scaleX:0.88,scaleY:0.88,rotation:-2,x:114.7,y:230.4,alpha:1},5).to({scaleX:1,scaleY:1,rotation:0,x:113.3,y:232.9},2).wait(37).to({scaleX:1.13,scaleY:1.13,x:112.5,y:221.4},2,cjs.Ease.get(1)).to({regX:0.1,scaleX:0.65,scaleY:0.65,x:115.5,y:290.1,alpha:0},6,cjs.Ease.get(1)).to({_off:true},75).wait(33));

	// Символ 14
	this.instance_12 = new lib.Символ14();
	this.instance_12.parent = this;
	this.instance_12.setTransform(114.6,163.7,2.142,2.142);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(134).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.88,scaleY:0.88,rotation:-2,x:117,y:191.9,alpha:1},5).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:117.3,y:189},2).wait(40).to({scaleX:1.13,scaleY:1.13,x:117,y:172},2,cjs.Ease.get(1)).to({regX:0.1,scaleX:0.65,scaleY:0.65,x:118.1,y:261.6,alpha:0},6,cjs.Ease.get(1)).to({_off:true},72).wait(33));

	// Символ 12
	this.instance_13 = new lib.Символ12();
	this.instance_13.parent = this;
	this.instance_13.setTransform(149.3,246.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(67).to({_off:false},0).wait(19).to({x:301.3},0).to({x:149.3,alpha:1},7,cjs.Ease.get(1)).wait(33).to({y:228.1},3,cjs.Ease.get(1)).to({y:319.3,alpha:0},5,cjs.Ease.get(1)).to({_off:true},127).wait(33));

	// Символ 11
	this.instance_14 = new lib.Символ11();
	this.instance_14.parent = this;
	this.instance_14.setTransform(56.7,247.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(67).to({_off:false},0).wait(19).to({x:-31.3},0).to({x:56.7,alpha:1},7,cjs.Ease.get(1)).wait(30).to({y:228.7},3,cjs.Ease.get(1)).to({y:319.9,alpha:0},5,cjs.Ease.get(1)).to({_off:true},130).wait(33));

	// Символ 10
	this.instance_15 = new lib.Символ10();
	this.instance_15.parent = this;
	this.instance_15.setTransform(119.3,212);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(67).to({_off:false},0).wait(15).to({y:228},0).to({y:212,alpha:1},7,cjs.Ease.get(1)).wait(31).to({y:193.6},3,cjs.Ease.get(1)).to({y:284.8,alpha:0},5,cjs.Ease.get(1)).to({_off:true},133).wait(33));

	// Символ 9
	this.instance_16 = new lib.Символ9();
	this.instance_16.parent = this;
	this.instance_16.setTransform(119.7,175.9);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(67).to({_off:false},0).wait(11).to({y:199.9},0).to({y:175.9,alpha:1},7,cjs.Ease.get(1)).wait(32).to({y:157.5},3,cjs.Ease.get(1)).to({y:248.7,alpha:0},5,cjs.Ease.get(1)).to({_off:true},136).wait(33));

	// Символ 8
	this.instance_17 = new lib.Символ8();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-73.1,270);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(5).to({_off:false},0).wait(25).to({x:119.7,alpha:1},8,cjs.Ease.get(1)).wait(20).to({y:258},2,cjs.Ease.get(1)).to({y:294,alpha:0},7,cjs.Ease.get(1)).to({_off:true},194).wait(33));

	// Символ 7
	this.instance_18 = new lib.Символ7();
	this.instance_18.parent = this;
	this.instance_18.setTransform(298.3,227.5);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(5).to({_off:false},0).wait(17).to({x:118.7,alpha:1},8,cjs.Ease.get(1)).wait(26).to({y:215.5},2,cjs.Ease.get(1)).to({y:251.5,alpha:0},7,cjs.Ease.get(1)).to({_off:true},196).wait(33));

	// Символ 6
	this.instance_19 = new lib.Символ6();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-91.1,191.2);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(5).to({_off:false},0).wait(9).to({x:119.7,alpha:1},8,cjs.Ease.get(1)).wait(32).to({y:179.2},2,cjs.Ease.get(1)).to({y:215.2,alpha:0},7,cjs.Ease.get(1)).to({_off:true},198).wait(33));

	// Символ 5
	this.instance_20 = new lib.Символ5();
	this.instance_20.parent = this;
	this.instance_20.setTransform(119,108.5);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(5).to({_off:false},0).wait(1).to({y:154.1,alpha:1},8,cjs.Ease.get(1)).wait(38).to({y:142.1},2,cjs.Ease.get(1)).to({y:178.1,alpha:0},7,cjs.Ease.get(1)).to({_off:true},200).wait(33));

	// bg.jpg
	this.instance_21 = new lib.Символ4();
	this.instance_21.parent = this;
	this.instance_21.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({scaleX:1.24,scaleY:1.24,x:120.1,y:200.1},59).to({scaleX:1.29,scaleY:1.29,x:120,y:200,alpha:0},10).to({_off:true},192).wait(33));

	// bg2.jpg
	this.instance_22 = new lib.Символ3();
	this.instance_22.parent = this;
	this.instance_22.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(59).to({scaleX:1.27,scaleY:1.27,y:200.1},60).to({scaleX:1.32,scaleY:1.32,y:200,alpha:0},10).to({_off:true},132).wait(33));

	// bg3.jpg
	this.instance_23 = new lib.Символ2();
	this.instance_23.parent = this;
	this.instance_23.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(119).to({scaleX:1.29,scaleY:1.29,x:120.1},60).to({scaleX:1.34,scaleY:1.34,x:120,alpha:0},10).to({_off:true},72).wait(33));

	// bg4.jpg
	this.instance_24 = new lib.Символ1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(179).to({scaleX:1.28,scaleY:1.28,y:200.1},104).to({scaleX:1.33,scaleY:1.33,y:200,alpha:0},10).wait(1));

	// bg.jpg - копия
	this.instance_25 = new lib.Символ4();
	this.instance_25.parent = this;
	this.instance_25.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(294));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120,200,240,400);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1485509585527", id:"bg"},
		{src:"images/bg2.jpg?1485509585527", id:"bg2"},
		{src:"images/bg3.jpg?1485509585527", id:"bg3"},
		{src:"images/bg4.jpg?1485509585527", id:"bg4"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;