(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bullet1 = function() {
	this.initialize(img.bullet1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,43);


(lib.fire = function() {
	this.initialize(img.fire);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,99);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,507);


(lib.r2 = function() {
	this.initialize(img.r2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,30);


(lib.rifle1 = function() {
	this.initialize(img.rifle1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,200);


(lib.soldddr = function() {
	this.initialize(img.soldddr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,246);


(lib.soll = function() {
	this.initialize(img.soll);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,194);


(lib.statu91 = function() {
	this.initialize(img.statu91);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,396,570);// helper functions:

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


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AAZG3IgFAAQgIgBgEgCQgFgEgDgLQgDgGABgFQABgDABgBQADgCACABIgJgUQgEgHABgFQAAgDACgCQgQgkgmgzQgxhCgOgeIgOgjIgPgkQgMgbgjg6Ig7hbQgagpgPgSQgSgUgHgKQgNgSgDgRQgEggAZgbQASgUAkgOQApgRBugSQBjgRAwgbQARgKAogeQAkgbAXgKQAlgQAWANQAVALAIAsQARBXAXDeQAVDEAbBvIAKAsQAFAYgBAUQgBAYgIAUQgKAWgSAMQgPAKgdAHQh8Adh8AAQAGgDAIgDg");
	this.shape.setTransform(34,44.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(0,0,68.1,89.1), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AEIErQgPgBgUgHIgigLQgXgGghgEIg5gGQgZgCgKgKQgGgGgFgOQgGgQgEgFQhrAPhmAAQglAAgRgJQgKgGgKgMQgFgFgLgRQgUgfgJgRQgPgbgGgZQgHgagBg0QAAgfACgRQACgbAJgTQAIgQAVgYQAigqATgTQAfggAfgTQAZgPA3gWQAugTAaAGQAoAJAXA3QAFAMAJAiQAIAdAHAPQANAcAhAlQAWAaBCBBQA4A5AeAkQAbAiAIAZQAHAWAAAqQAAAegHAMQgIAPgSAIQgNAFgPAAIgHAAg");
	this.shape.setTransform(33.2,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(0,0,66.4,59.9), null);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AjNG4QgFgEgBgMQgXicgqk4Igzl5QgCgOAHgFQAGgEAPAJQAoAdA6APQArALBCAGIBsALQA+AJArARQAbALA1AcQAvAWAjACIAVACQALACAGAHQAIAJAAAVIAABgQADAEgGADQgFACgGgCIhNgZQghgKgQAGQgOAGgGARQgHAPADARQACAOAIAQIAQAcQAgA5APBAIAIAkQAGAUAKAMIAPAQQAJAJADAIIABAEQADgBAEABQAFABABAEIgMAMIgBAAQgCAMgJAHQgHAHgMABIgXAVQgGAHgFABIgMABQgDAAgTAHQgJADgRAAIgbABQgJACgOAGIhGAdQgSAHgIAFQgNAIgLAPQgKANgGAEQgPAFgGAGQgCACgDAGIgDAIQgDAEgEADQgEACgEgCIgDgDIADgEQg0AuhFAOIgJABQgFAAgEgCg");
	this.shape.setTransform(32.8,44.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ57, new cjs.Rectangle(0,0,65.7,88.5), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AgRFPQgKABgFgDQgIgEAAgKQgBgKAGgIQAHgJAXgJQgDgYgUgYQgNgQgcgWQgagVgPgHQgKgEgRgEIgbgIQgegKgtglQgxgogagLIgVgJQgNgEgHgHQgNgMgGgWQgEgOgBgZQgCh5AXhSQAOgxAbgVQAWgQAzgFQBWgHBTAFQAPABAFAGQAGAGgDAPQgJA3gmA6QgYAlg3A9QgeAjgUAPQgRANgEAHQgEAHACAMQAEARASALQASAKASgFQASgHANgUQAIgNAIgZQAghdAdgtIAUgcQAMgRAGgMIAMgZQAIgOAIgIQAYgYA5AJQAUADAcAHQAQAEAGAHQAMAPgXAhQgVAcgSAkIgVApQgrBYgyBIQgEAGABAEQAAAFAGAEQAaAXAOAJQAWAOAhAIQAUAGAnAHQAjAIAXAKQAeANASAVIAPAUQAJAMAGAHQAPAPAlAOQAnAQAPAMQAJAJADAKQADANgJAGQgEADgLAAIhsACQgEgWgUgOQgUgOgWAFQgGAIAAAZQAAAVgJAHQgHAFgQAAg");
	this.shape.setTransform(38,33.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(0,0,76,67.4), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Ai7FVQgNgBgEgKQgDgIAIgPQAOgcAIg2QAQh1gPh4QgIg3gOgdIgJgSQgFgKgBgIQgBgTAPgUQAPgWAagQIAVgMQANgIAHgIIAMgSQAIgKAIgEQAEgCATAAQAlAAAegTQAPgKAcgXQAbgTAZACQAOACAGAIQADAFAAAPQgFCVAqCMQAKAhANAXIAPAYQAKAPAEAKQANAhgRAVQgEAGgSALQgWAOg1A0QgtAsgjANQgXAJgkAEIg9AGQgWAEgOAIIgbAVQgQALgOAAIgBAAg");
	this.shape.setTransform(21.4,34.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(0,0,42.8,68.3), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AD1F7QjWhdimgHIgtgDQgagCgSgIQgUgJgfgaQgZgUgHgQQgHgRAEghQAHguABgXQADgngHgdIgIgaQgEgRADgLQADgPARgSQAYgXAEgGQAOgUADg6QAEg0ATgUQAKgKATgIIAggMQARgHAWgPIAkgYQAkgXAxgUQAegMA8gTQAFgCAFABQAFABAAAEQABAEgFAEQgXAXgNAtQgUA+AIAxQAOBSBfBGIAsAgQAZATANASQARAYAIAkQAFAWADAsQADAjgNANIgKAGIgLAGQgMAJgFAQQgEAQAEAQQAFAUAYAjIA5BOQAOAVgJAJg");
	this.shape.setTransform(31.8,41);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(0,0,63.6,82.1), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("ACrO/QgggBgOgKQgKgHgEgOQgEgOAEgNQAKgaAcgKIATgEIATgEQARgGAUgTQAJgHADgHQADgIgCgQQgMhFgShBQgzAkgzALQggAIgYgHQgOgEgKgJQgLgKgEgNQgFgVAOgUQANgTAWgJQAQgHAbgEIAsgIIgKguIgHgBQgTgDgOgUQgHgLgMgeQgghMg7g0IgZgWQgPgNgHgMQgKgPgBgSQgCgSAKgNIANgMIAOgLQAMgLANgdIA8iEIAhhJQARgpAJgiIAHgXIgIgCQgbgKgWgVQgngigZg+QgiAJgWgBQggAAgTgQQgXgUgEgzQgGg+gKgTQgKgUgPgEQgHgDgNACIgCALIgLAiQgCAIgDAEQgFAGgGAAIgKgEQgHgBgEgCQgFgCgCgHQgHgPAHgYQgPAAgMgDQgSgFgMgMQgOgMgEgQQgDgQAHgSQACgIAHgMQgJgDgGgHQgOADgPgBQgPgCgIgHQgEgEgCgFIgmAMQg1ARgXADIgVACQgJABgDgDQgDgDgBgLQgBgLABgIQACgKAIgGQAEgDAFAAQAFAAAEAEQAEADgBAGQAAAEgDADQAQgKANgFQARgGAjgCIAogCIAAgFQAAgaAEgdQACgOAFgIQAHgLAagHQA8gRBCgIQAMgBAFgEQACgDACgFIADgJQAGgOASgGQAPgGATABQAVABAHALQAEAFAAAMQABAMACAFQAGAQAhAFQAXADANAAQATgBAOgIIgLgKQgJgDgJgGQgKgGgJgHQgHgGgKgLIgPgTQgQgSgDgIQgDgIABgMIABgVIgBgSQAAgKAEgGQACgEAFgEQAFgPAKgOQAWggAigLQAagJA1AFQAZADAPAEQAVAHAMANQALAKAHAUIAJAiQAPA8AhA4QAJADALgGIAVgJQARgHAWAHQAPAEAXAMIBZAwQAeAQAMANQAQARAOAsQAOApgLAVIgRAWQgKANABAKQABAMALAHQAKAHAOACIAZAEQAOADAHAIQAOANgEAaQgBAPgHAfQgBAQAFAcQAFAgAAAMQAAAjgXAdQgXAdghAIQAjA1gEBEQgEBCgpAwQANARgDAbQgCASgLAdQgHATgGAJQgJAPgMAGQgFADgMADIgRAGQgLAFgOAUQglA1gWA2IgLAZQgHAOgIAJIgCACIABABQA/BCAUA2QAMAhAEArQACAdgBAyIgBCdQgBAVgDANQgFASgMAIQgIAGgNACIgYAEQgMABgIAIQgDADgDAHIgEAKQgNAagjAJQgQAEgfAAIgNAAg");
	this.shape.setTransform(55.2,95.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(0,0,110.3,191.8), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.soll();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(0,0,110,194), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AgjTFQgXgXgKgnQgHgYgFgvIgIhOQgDgigLgOQgHgIgVgNQgTgMgGgLQgKgSAKgcQAPggAFgQQANgmgRgzQgCgHgjhQQgdhBgKhHQgKhHAKhGQgQAGgRgHQgQgFgNgOQgQgSgNgrQgThAgGhAQgIhHAZgiQAQgWAegEQAfgEAPAVQAPgZgJggQgHgcgVgcQgNgRgbggQgXgdgGgZQgLgpAVgzQAIgTgBgPQgBgUgOgCQgYAhgsAIQgrAJgjgVQgjgWgMgqQgNgrASglQARghA2gkQBAgrARgUQATgXAAgSQAAgKgGgNIgKgVQgPghgBgmQgCglANgjQARgrAfgRQARgJAVABQAVABAOAMIAcAnQAQAWASAAQAQgBASgVQAvgygGgnQgEgUgRgWIghgkQgngtgBg+QgChAArgkQAQgNAbgLIAugSIAsgQQAZgHATACQAUACAWAMQANAIAYASQAuAkARAWQAaAkAPA8QAUBLgBBMQAAAYAGAKQAEAIAJAGIASAKQBWAqAnBFQAWAnADAqQAEAtgTAlQAeAMANAjQAMAfgEAkQgDAWgNAsQgMAqgCAXQgFAwATA/QALAkAcBHQAhBbgEBCIgDAlQgDAXAAANIABAfQAAASgCALQgIAxgzAbQgwAZg2gIQgIBGhGBcQhZB0gRAmIgSAsQgLAbgLAQIgTAbQgMAQgEAMQgFAPAAAXIACAnQAAAigjBhQgcBRAQAvIAmBFQAXApgLAcQgNAhgpABIgFABQgkAAgXgZg");
	this.shape.setTransform(51,124.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(0,0,102.1,249.1), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AgvGEQgFgFgBgIIgBgOIAAgOQAAgKgFgOIgIgYQgIgfAOgRQAGgHAUgKQATgJAGgJQAFgIACgWQACgkAHgVQAKgWADgMQAEgMAAgSIABgeQABgYAIguIgCgGQgJgpgGgrQgKAEgNACQgqAKhcAjQgMAFgEAEQgGAIgEACQgKAHgSgKQgBAKgJAGQgKAHgJgEQgOgGgEgXIgCgSQgCgLgDgGQgDgHgHgHIgMgNQgIgKgRgjIgTglQgKgWgFgRQgOgwATghQADgIAAgCQAAgCgHgKQgFgIAFgLQAEgLAKgEQAOgIAbAGQAiAIAUAPIAOAMIAOALQALAHARAFIAdAIQAbAIAnAVQA0AbAMAFIASALIADgHQAJgOAWgFIAlgGIAYgFQAOgDAJAAQARAAAaALQAYAJAIAKQAFAGADAKIAFAQIAJAXQAFANgBAJIgDAUQAAAKAGAPQAZA9AOA2QAIAeAFANIANAeQAMAggIApQACADAFAEQAGAFABADIADAJQABAGACADQACAEAHAHQAJAMgKASIgIANIgIANIgFAPQgDALgDAEQgJAUgOAAQgJAAgJgIQgDgCgMgNIgZgaQgOgPgCgPQgBgNAKgTQAOgaABgEIAEgNQADgHAEgCQgIgKgDgIQgDgIgCgWQgCgNgGgcIgOg+QgHghgIgPQgGgLgMgQIgtg8QABAggQA4IgDAMQACAQAAAYIABBqQAAA1gDAbIgHAuQgEAVgGAFIgJAHQgGAEgDADQgFAGgDARIgHAmQgFAigSADIgPACQgIACgJAJQgKAKgGANQgFAMgDAEQgGAJgIAAIgCAAQgGAAgFgFg");
	this.shape.setTransform(33.7,39.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(0,0,67.4,78.7), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AhxCGQgXgFgGgLQgEgGAAgQQgBgVADgOQACgJAJgZQAGgUAEgUQADgSAEgHQAEgGAJgMQAFgHAEgMQAMgaARgUQAHgKAIgDQAHgDARABQAYAAAFABQAQAEASASQALAMALAOQALAOAFADIAOAHQAEADADAFIAGAKQAEAHAKAIIAPAMQANAOADASQADAXgOAIQgIAFgQgBIgdAAQgEgBgCACQgDABgBAHQgCAOgFAOQgGAOgIAFQgFADgJAAQgKACgEACIgHAGIgIAGQgIAEgOgBQgUgBgGAAIgVAIQgKADgNAAQgNAAgRgDg");
	this.shape.setTransform(14.7,13.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(0,0,29.5,27.5), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AAvEyQgXgCgJgMQgEgGgBgNQgCgFAAgIIACgTIAAgsQABgYgCgNQgDgVgJgNQgJgNgXgOQgcgQgHgHQgJgHgNgSQgOgTgIgHQgHgGgMgJIgUgNQgmgfgNg7QgIgkAChFQABgfAHgPQAHgMAUgQQAYgUATgHQATgHApAAQAvAAAXAEQAtAJA8AlQALgOAOAAQAHgBAHAEQAGAEACAHQACAGgEAKIgGAQQgDAOAMAVQAOAaAPAUQAVAeAEAKQATAsgkA6QgTAdgEAJQgFAQAAAhQAAAzAFAcIAGAYQACAOgCAKQgCAJgJAOQgIAPgDAHIgBAFIgBAFIgCAFQgCAIgFAEQgJAKgVgFQgMgEgFACQgEABgEAEIgGAGQgKAIgQAAIgEgBg");
	this.shape.setTransform(21.2,30.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(0,0,42.4,61.3), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AClIkIhAgJQgZgEgOgFQgUgHgKgPQgKgPACgUQABgSAKgSQAGgLAOgVQAPgVAGgLQAPgcACgkQABgggKgiQgRg2gxg9QgngzgpgZQgJgGhQgkQg2gYgXgeQgNgSgKgdIgPgzIgchOQgPguACgiQACgjATgnQAMgZAcgqQAYgjARgSQAagbAbgLQAbgMA3gCQBCgDAgAAQA4AAArAHQAUADANAJQAQAMgDAPQgCAHgHAHIgNANQgLAOgFAeQgFAkgGALQgFAMgQARQgSAUgFAHQgPAVgEAeQgDAbAIAbQANAsArAzIAmAsQAVAaAKAXQATAqgHBIIgMB3QAAAdAKAQQAIAOASAKIAhAQQAVAKAMANQAPAQAAASQgBAKgFALIgLAUQgMAVgOAwQgPAvgNAWQgOAXgRAGQgHADgMAAQgJAAgNgCg");
	this.shape.setTransform(30.8,55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(0,0,61.6,110), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AEtAAQAAB8hYBZQhYBYh9AAQh8AAhYhYQhYhZAAh8QAAh8BYhYQBYhYB8AAQB9AABYBYQBYBYAAB8g");
	this.shape.setTransform(30.1,30.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-1,-1,62.3,62.2), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjpH7QA2owDmn3IC3AxQk1H3AZIxg");
	this.shape.setTransform(23.4,55.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,0,46.8,111.3), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF0000","rgba(255,0,0,0)"],[0,1],-68,0,68,0).s().p("AqnakMAAAg1HIVPAAMAAAA1Hg");
	this.shape.setTransform(68,170);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,0,136,340), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AJIBjIAAgKIANAAIAAgMIAKAAIAAAWgAIcBjIAAgKIANAAIAAiPIAKAAIAACZgAGYBjIAAgKIAMAAIBuh7IAAAVIhkBwgAFsBjIAAgKIAMAAIAAiPIAKAAIAACZgADnBjIAAgKIAGAAIAtgsIBIAAIAAAKIg+AAIgtAsgAC7BjIAAgKIANAAIAAiPIAKAAIAACZgAA3BjIAAgKIAMAAIAAhtQAAgFABgEIAGgHQAGgGAJAAIBYAAIAAAKIhOAAQgJAAgGAGIgGAHQgBAEAAAFIAABtgAh0BjIAAgKICQAAIAAgMIAKAAIAAAWgAkgBjIAAgKIANAAIAAgsIBYAAQAJAAAIgDQAIgEAGgGQAGgGAEgIQADgIAAgJIAAgVQAAgJgEgIIgFgJIAGAFQAFAGAEAIQAEAIAAAJIAAAVQAAAJgEAIQgDAIgGAGQgGAGgIAEQgIADgJAAIhYAAIAAAsgAmDBjIAAgKIAMAAIAAiDIBDAAIAAgMIAJAAIAAAWIhCAAIAACDgAo5BjQgKAAgIgDQgHgEgGgGIgGgFIAKAFQAIADAJAAIBBAAQAKAAAIgDQAIgEAGgGQAGgGAEgIIACgHIALAAQAAAJgDAIQgEAIgGAGQgGAGgIAEQgIADgKAAgAhnBDIAAgsIBtAAIAAgMIAKAAIAAAWIhtAAIAAAigApTA9QgEgDgBgEQgCgEAAgFIAAhBQAAgFACgEQABgEAEgDQAGgGAKAAIBBAAQAFAAAEABIAHAFQADADABADIgBgBQgDgBgGAAIhBAAQgKAAgGAGQgDADgCAEQgBAEAAAFIAABBQAAAFABAEIABABIgGgEgAGkg2IAKAAIAABkIgKALgAJIA3IAAgKIANAAIAAhjIAKAAIAABtgADwAlIAAgBIAAABQAFAEAHACIgDADIgJgJgAkTAXIAAhBIBYAAQAEAAAEABIAHAFIAFAGIgBgBQgFgBgEAAIhYAAIAAA3gAD6ARIgFgHQgCgEAAgFIAAgVQAAgFACgEIAFgHQAGgGAKAAIBYAAIAAAKIhOAAQgKAAgGAGIgFAHQgBAEAAAFIAAAVQAAAFABAEIABABIgGgEgAhnABIAAgrICDAAIAAgMIAKAAIAAAWIiDAAIAAAhgAnhgKQgBgFgBgEIAAgBIAOAAQgBgJgDgIIgGgJIAHAFQAFAGAEAIQAEAIAAAJgAnFggIAAgKIA4AAIAAAKgAHUg6QgIgDgFgGIgFgFIAIAEQAIAEAJAAQAKAAAHgEQAIgDAHgHQAFgGAEgIIACgGIALAAQABAJgEAHQgEAIgFAGQgHAHgIADQgIAEgJAAQgJAAgIgEgAHLhdIgDgFIAHAAQAAAEACAEIAAACQgDgCgDgDg");
	this.shape.setTransform(62.5,10.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AJWBjIgKAAIAAgWIAXAAIAAAKIAAAMgAIqBjIgKAAIAAhmIAAgVIhuB7IgMAAIgKAAIAAiZIAWAAIAAAKIAABvIAKgLIBkhuIAXAAIAAAKIAACPgAF6BjIgKAAIAAgiIAAgKIhIAAIgtAsIgGAAIgKAAIAAgPIAcgcIADgDQgHgCgFgEIAAgBQgGgEgEgFQgEgFgCgHQgCgHgBgHIAAgVQABgJADgIQADgIAGgGQAGgGAIgEQAJgDAJAAIBuAAIAAAKIAACPgAEIgaIgFAHQgCAEAAAFIAAAVQAAAFACAEIAFAHIAGAEIABABQAEABAFAAIBYAAIAAg3IAAgKIhYAAQgKAAgGAGgADJBjIgKAAIAAh5IAAgKIhYAAQgJAAgGAGIgGAHQgBAEAAAFIAABtIgMAAIgKAAIAAhtQAAgJAEgIQADgIAGgGQAGgGAIgDQAIgEAJAAIBvAAIAAAKIAACPgAhmBjIgKAAIAAiZICaAAIAAAKIAAAMIiDAAIAAArIAKAAIBjAAIAAAKIAAAMIhtAAIAAAsIAKAAIB5AAIAAAKIAAAMgAkSBjIgKAAIAAiZIBvAAQAJAAAHADQAIAEAHAGIAEAFIAFAJQAEAIAAAJIAAAVQAAAJgDAIQgEAIgGAGQgGAGgIAEQgIADgJAAIhYAAIAAAsgAkFAhIAKAAIBOAAQAEAAAEgBIAHgFQAHgHAAgJIAAgVQAAgFgCgEIAAgBIgFgGIgHgFQgEgBgEAAIhYAAgAl1BjIgKAAIAAh5IAAgKIg4AAIgKAAIAAgWICaAAIAAAKIAAAMIhCAAIAACDgAo1BjQgJAAgIgDIgKgFIgFgFQgGgFgDgJQgDgIgBgJIAAhBQABgJADgIQADgIAGgGQAGgGAIgDQAIgEAKAAIBBAAQAKAAAHADQAIAEAHAGIADAFIAGAJQADAIABAJIgOAAIgIAAQAAgFgCgEIgBgBQgBgDgDgDIgHgFQgEgBgFAAIhBAAQgKAAgGAGQgEADgBAEQgCAEAAAFIAABBQAAAFACAEQABAEAEADIAGAEIABABQAEABAFAAIBBAAQAFAAAEgBQAEgCADgDQAHgHAAgJIAWAAIgBAKIgCAHQgEAIgGAGQgGAGgIAEQgIADgKAAgAJWA3IgKAAIAAhtIAXAAIAAAKIAABjgAHYg6IgIgEIgFgFQgHgGgDgIQgDgIgBgJIAWAAQAAAEACAEIABACIADAFQADADADACIABAAQAFACAEAAQAFAAAEgCQADgBAEgEQAHgGAAgJIAVAAIgBAKIgCAGQgEAIgFAGQgHAHgIADQgHAEgKAAQgJAAgIgEg");
	this.shape_1.setTransform(61.1,9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(0,0,123.1,20.9), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egx/ACWIAAkrMBj/AAAIAAErg");
	this.shape.setTransform(320,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,640,30), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("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");
	this.shape.setTransform(322.2,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},18).wait(17));

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EAtlACrIAAkJIC+AAQAPAAANAGQAOAGALAKQAKAKAGAOQAHAOAAAQQAAAhgaAXQAaAXAAAiQAAAPgGAOQgGANgKALQgLAKgNAGQgOAHgQAAgEAuLACFICYAAQAIAAAHgDQAGgCAGgGQALgLAAgQQAAgIgDgHQgDgGgFgGQgGgFgGgDQgHgDgIAAIiYAAgEAuLAATICYAAQAIAAAHgDQAGgCAGgGQALgKAAgQQAAgIgDgHQgDgGgFgGQgGgGgGgDQgHgCgIAAIiYAAgEAqFACrQgQAAgOgGQgOgFgKgLQgKgLgGgNQgGgOAAgQIAAhxQAAgQAGgNQAGgOAKgLQALgKAOgGQANgGAQAAIByAAQAPAAAOAGQANAGALAKQAKALAHAOQAGANAAAQIAABxQAAAPgGAOQgGAOgKALQgLAKgOAGQgNAGgQAAgEApqgAtQgGAGgCAGQgDAHAAAIIAABxQAAAIADAHQACAGAGAGQAGAGAGACQAHADAIAAIByAAQAIAAAHgDQAGgCAGgGQALgLAAgQIAAhxQAAgIgDgHQgDgGgFgGQgGgGgGgDQgHgCgIAAIhyAAQgQAAgLALgEAmSACrIAAjjIhyAAIAAgmIEKAAIAAAmIhyAAIAADjgEAhXACrQgQAAgOgGQgOgFgKgLQgKgLgGgNQgHgOAAgQIAAhxQAAgPAGgOQAGgOALgKQAKgKAOgHQAOgFAQgBIBxAAQAQAAANAGQAOAGAKAKQALAKAGAOQAGAOABAQIgmAAQAAgIgDgHQgDgGgGgGQgFgGgHgDQgHgCgIAAIhxAAQgRAAgLALQgFAGgDAGQgCAHAAAIIAABxQAAAIACAHQADAGAFAGQAGAGAHACQAHADAIAAIBxAAQAIAAAHgDQAHgCAFgGQAMgLAAgQIAmAAQAAAPgGAOQgGANgLALQgKALgOAFQgOAHgQAAgAfCCrIAAjWIi+DWIgmAAIAAkJIAmAAIAADSIC+jSIAmAAIAAEJgAW2CrIAAkJIC+AAQAPAAAOAGQAOAGAKAKQAKAKAHAOQAGAOAAAQIAAAlQAAAPgGAOQgGANgKALQgKAKgOAHQgOAGgQAAIiYAAIAABMgAXcA5ICYAAQAIAAAHgDQAHgDAFgFQALgLAAgQIAAglQAAgIgDgHQgCgGgGgGQgFgGgHgDQgHgCgIAAIiYAAgATXCrQgRAAgNgGQgOgFgKgLQgLgLgGgNQgGgOAAgQIAAhxQAAgQAHgNQAGgOAKgLQAKgKAOgGQAOgGAQAAIBxAAQAQAAANAGQAOAGALAKQAKALAGAOQAHANAAAQIAABxQAAAPgHAOQgGAOgKALQgKAKgOAGQgOAGgQAAgAS7gtQgFAGgDAGQgCAHAAAIIAABxQAAAIACAHQADAGAFAGQAGAGAHACQAHADAIAAIBxAAQAIAAAHgDQAHgCAFgGQAMgLAAgQIAAhxQAAgIgDgHQgDgGgGgGQgFgGgHgDQgHgCgIAAIhxAAQgRAAgLALgANmCrIAAkJIC+AAQAPAAAOAGQAOAGAKAKQAKAKAHAOQAGAOAAAQIAAAlQAAAPgGAOQgGANgKALQgKAKgOAHQgOAGgQAAIiYAAIAABMgAOMA5ICYAAQAIAAAHgDQAHgDAFgFQALgLAAgQIAAglQAAgIgDgHQgCgGgGgGQgFgGgHgDQgHgCgIAAIiYAAgAI+CrIAAkJIC+AAQAPAAAOAGQAOAGAKAKQAKAKAHAOQAGAOAAAQIAAAlQAAAPgGAOQgGANgKALQgKAKgOAHQgOAGgQAAIiYAAIAABMgAJkA5ICYAAQAIAAAHgDQAHgDAFgFQALgLAAgQIAAglQAAgIgDgHQgCgGgGgGQgFgGgHgDQgHgCgIAAIiYAAgAEWCrIAAkJIEKAAIAAAmIjkAAIAABLIC+AAIAAAmIi+AAIAABMIDkAAIAAAmgABrCrIAAjjIhxAAIAAgmIEJAAIAAAmIhyAAIAADjgAjXCrIAAjWIi+DWIgmAAIAAkJIAmAAIAADSIC+jSIAmAAIAAEJgAqXCrQgQAAgNgGQgOgFgKgLQgKgLgGgNQgHgOAAgQIAmAAQAAAIADAHQACAGAGAGQAGAGAGACQAHADAIAAIBqAAQAIAAAHgDQAHgCAFgGQAMgLAAgQIAAgmIiYAAQgQAAgOgGQgOgGgKgKQgKgKgGgOQgHgNAAgQIAAhMIAnAAIAABMQAAAIACAHQADAFAFAGQAGAGAHACQAHADAIAAICYAAIAAhxIAmAAIAAC9QAAAPgGAOQgGANgLALQgKALgOAFQgOAHgQAAgAwPCrIAAkJIC+AAQAPAAAOAGQAOAGAKAKQAKAKAHAOQAGAOAAAQIAAAlQAAAPgGAOQgGANgKALQgKAKgOAHQgOAGgQAAIiYAAIAABMgAvpA5ICYAAQAIAAAHgDQAHgDAFgFQALgLAAgQIAAglQAAgIgDgHQgCgGgGgGQgFgGgHgDQgHgCgIAAIiYAAgAxbCrIAAjWIi+DWIgmAAIAAkJIAmAAIAADSIC+jSIAmAAIAAEJgA6oCrIAAgmIAmAAIAAiXQAAgPAGgOQAGgOAKgKQALgLANgGQAOgGAQAAIC+AAIAADjIAmAAIAAAmgA5RgtQgFAGgDAGQgDAHAAAIIAACXIC+AAIAAi9IiYAAQgQAAgLALgA7hCrIAAjWIi+DWIgmAAIAAkJIAmAAIAADSIC+jSIAmAAIAAEJgEgjxACrIAAkJIC+AAQAPAAAOAGQAOAGAKAKQALAKAGAOQAGAOAAAQQAAAhgaAXQAaAXAAAiQAAAPgGAOQgGANgKALQgKAKgOAGQgOAHgQAAgEgjLACFICYAAQAIAAAHgDQAHgCAFgGQALgLAAgQQAAgIgDgHQgCgGgGgGQgFgFgHgDQgHgDgIAAIiYAAgEgjLAATICYAAQAIAAAHgDQAHgCAFgGQALgKAAgQQAAgIgDgHQgCgGgGgGQgFgGgHgDQgHgCgIAAIiYAAgEgk5ACrIhyhyIg9AAIAAByIgmAAIAAkJIAmAAIAABxIA9AAIByhxIA1AAIiFCEICFCFgEgpaACrIAAjWIi+DWIgmAAIAAkJIAmAAIAADSIC+jSIAmAAIAAEJgEguKACrIAAjjIiYAAQgQAAgLALQgFAGgDAGQgDAHAAAIIAAC9IgmAAIAAi9QAAgPAGgOQAGgOAKgKQALgKANgHQAOgFAQgBIC+AAIAAEJgAlThkQgOgGgKgKQgKgLgGgNQgGgOgBgQIAmAAQAAAIADAHQADAGAFAGQAGAFAHADQAGADAIAAQAIAAAHgDQAHgDAFgFQALgLAAgQIAmAAQAAAQgGANQgGAOgKAKQgKAKgOAHQgOAGgQAAQgPAAgOgGg");
	this.shape_1.setTransform(322.2,10.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(18).to({_off:false},0).wait(17));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("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");
	this.shape_2.setTransform(324.2,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.9,-6.6,638.6,36.2);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bullet1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,40,43), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAwrIAAPbAhUAAIvXAAAQsAAIvXAAAAABUIAAPY");
	this.shape.setTransform(106.8,106.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-1,-1,215.6,215.6), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","#000000"],[0,1],0,0,0,0,0,102.5).s().p("ArPLQQkqkrAAmlQAAmkEqkrQEqkqGlAAQGlAAEqEqQErErAAGkQAAGlkrErQkqEqmlAAQmlAAkqkqg");
	this.shape.setTransform(101.8,101.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,203.6,203.6), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhBBBQgbgbAAgmQAAgmAbgbQAbgbAmAAQAmAAAbAbQAcAbAAAmQAAAmgcAbQgbAcgmAAQgmAAgbgcg");
	this.shape.setTransform(9.3,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,18.6,18.6), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArPLQQkqkrAAmlQAAmkEqkrQEqkqGlAAQGlAAEqEqQErErAAGkQAAGlkrErQkqEqmlAAQmlAAkqkqg");
	this.shape.setTransform(101.8,101.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,203.6,203.6), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eht3BA3MAAAiBtMDbvAAAMAAACBtgArRrKQkrEoAAGiQAAGjErEoQErEpGmAAQGnAAEqkpQErkoAAmjQAAmikrkoQkqkpmnAAQmmAAkrEpg");
	this.shape.setTransform(703.2,415.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,1406.4,830.2), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag2RlIAAu+IBtAAIAAO+gACnA2IAAhuIO+AAIAABugAxkA2IAAhuIO/AAIAABugAg2ilIAAu/IBtAAIAAO/g");
	this.shape.setTransform(86,91);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9B9B").s().p("Ag2RlIAAu+IBtAAIAAO+gACnA2IAAhuIO+AAIAABugAxkA2IAAhuIO/AAIAABugAg2ilIAAu/IBtAAIAAO/g");
	this.shape_1.setTransform(81.1,81.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-31.4,-31.4,230,234.9), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhjBkQgqgpAAg7QAAg5AqgqQAqgqA5AAQA7AAApAqQApAqAAA5QAAA7gpApQgpApg7AAQg5AAgqgpg");
	this.shape.setTransform(14.2,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,28.3,28.3), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rifle1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,297,200), null);


(lib.копияshape13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,254,111,0.078)","rgba(255,253,98,0)"],[0,0.749,1],0,0,0,0,0,39).s().p("AkJEIQhthuAAiaQAAibBthtQBuhtCaAAQCbAABtBtQBvBtAACbQAACahvBuQhtBuibAAQiaAAhuhug");
	this.shape.setTransform(0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.1,-37.4,74.9,74.9);


(lib.shape14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","#FFFF00"],[0,1],-98.6,6,0,-98.6,6,176.6).s().p("ALzg7QH9ACpOA8I6AA5g");
	this.shape.setTransform(15.9,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.2,-5.6,198.2,12.1);


(lib.shape11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,242,153,0.8)","rgba(255,255,153,0.49)","rgba(255,255,156,0.929)","#FFFFFF"],[0,0,0.278,1],9,-6.2,-7.2,6.3).s().p("AhJA7IAVgnQASgbAkgZIArgdQATgFAHAKQAIAKgHAUIgqAgQgXASgsAYQgcAQgHAAQgEAAADgFg");
	this.shape.setTransform(-0.7,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-6,15.1,12.8);


(lib.копияshape13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,254,111,0.078)","rgba(255,253,98,0)"],[0,0.749,1],0,0,0,0,0,39).s().p("AkJEIQhthuAAiaQAAibBthtQBuhtCaAAQCbAABtBtQBvBtAACbQAACahvBuQhtBuibAAQiaAAhuhug");
	this.shape_1.setTransform(0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.1,-37.4,74.9,74.9);


(lib.shape14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0)","#FFFF00"],[0,1],-98.6,6,0,-98.6,6,176.6).s().p("ALzg7QH9ACpOA8I6AA5g");
	this.shape_1.setTransform(15.9,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.2,-5.6,198.2,12.1);


(lib.shape11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,242,153,0.8)","rgba(255,255,153,0.49)","rgba(255,255,156,0.929)","#FFFFFF"],[0,0,0.278,1],9,-6.2,-7.2,6.3).s().p("AhJA7IAVgnQASgbAkgZIArgdQATgFAHAKQAIAKgHAUIgqAgQgXASgsAYQgcAQgHAAQgEAAADgFg");
	this.shape_1.setTransform(-0.7,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-6,15.1,12.8);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjcEqQg4gcDXkJQBShlBYhcQBXhaAkgXQgPA4g7BsQg7BrhIBmQigDmhGAAQgJAAgIgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-23.2,-30.2,46.5,60.4), null);


(lib.копияСимвол36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgUAVQgJgIAAgNQAAgMAJgJQAJgIALAAQAMAAAJAIQAJAJAAAMQAAANgJAIQgJAJgMAAQgLAAgJgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.копияСимвол36, new cjs.Rectangle(-2.9,-3,6,6.1), null);


(lib.копияСимвол32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fire();
	this.instance.parent = this;
	this.instance.setTransform(-141,18.5,1.136,1.136,-37.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.копияСимвол32, new cjs.Rectangle(-141,-87.8,207.3,195.6), null);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.parent = this;
	this.instance.setTransform(21.4,34.1,1,1,0,0,0,21.4,34.1);
	this.instance.alpha = 0.352;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(31.8,41,1,1,0,0,0,31.8,41);
	this.instance.alpha = 0.352;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ57();
	this.instance.parent = this;
	this.instance.setTransform(32.8,44.2,1,1,0,0,0,32.8,44.2);
	this.instance.alpha = 0.352;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ59();
	this.instance.parent = this;
	this.instance.setTransform(34,44.5,1,1,0,0,0,34,44.5);
	this.instance.alpha = 0.352;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.parent = this;
	this.instance.setTransform(33.1,29.9,1,1,0,0,0,33.1,29.9);
	this.instance.alpha = 0.352;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(38,33.7,1,1,0,0,0,38,33.7);
	this.instance.alpha = 0.352;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(54.4,98.1,1,1,0,0,0,55.1,95.9);
	this.instance.alpha = 0.352;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Слой 1
	this.instance_1 = new lib.Символ51();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55,97,1,1,0,0,0,55,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,194);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(51.1,124.5,1,1,0,0,0,51.1,124.5);
	this.instance.alpha = 0.352;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(33.7,39.3,1,1,0,0,0,33.7,39.3);
	this.instance.alpha = 0.352;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(21.2,30.7,1,1,0,0,0,21.2,30.7);
	this.instance.alpha = 0.352;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(14.7,13.7,1,1,0,0,0,14.7,13.7);
	this.instance.alpha = 0.352;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(30.8,55,1,1,0,0,0,30.8,55);
	this.instance.alpha = 0.352;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(30.2,30.2,3.084,3.084,0,0,0,30.1,30.1);
	this.instance.alpha = 0.43;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.46,scaleY:2.46,alpha:0.609},4).to({regX:30.3,regY:30.3,scaleX:0.12,scaleY:0.12,x:30.4,y:30.4,alpha:0},15).to({regX:30.1,regY:30.1,scaleX:4.65,scaleY:4.65,x:30.1,y:30.1},1).to({scaleX:3.08,scaleY:3.08,x:30.2,y:30.2,alpha:0.43},9).wait(1));

	// Слой 1 - копия: 2
	this.instance_1 = new lib.Символ36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.3,30.3,1.522,1.522,0,0,0,30.1,30.1);
	this.instance_1.alpha = 0.371;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:30.3,regY:30.3,scaleX:0.12,scaleY:0.12,x:30.4,y:30.4,alpha:0},9).to({regX:30.1,regY:30.1,scaleX:4.65,scaleY:4.65,x:30.1,y:30.1},1).to({scaleX:2.46,scaleY:2.46,x:30.2,y:30.2,alpha:0.609},14).to({scaleX:1.52,scaleY:1.52,x:30.3,y:30.3,alpha:0.371},5).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ36();
	this.instance_2.parent = this;
	this.instance_2.setTransform(30.1,30.1,4.647,4.647,0,0,0,30.1,30.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:2.46,scaleY:2.46,x:30.2,y:30.2,alpha:0.609},14).to({regX:30.3,regY:30.3,scaleX:0.12,scaleY:0.12,x:30.4,y:30.4,alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112,-112,284.6,284.4);


(lib.Символ37_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(30.1,30.1,1,1,0,0,0,30.1,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112,-112,284.6,284.4);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(23.4,55.6,1,1,0,0,0,23.4,55.6);
	this.instance.alpha = 0.289;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(0,0,46.8,111.3), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(326,257,1,1.912,-90,0,0,68,170);

	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(328,68,1,1.912,90,0,0,68,170);

	this.instance_2 = new lib.Символ30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(584,170,1,1,180,0,0,68,170);

	this.instance_3 = new lib.Символ30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(68,170,1,1,0,0,0,68,170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,0,653,340), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(323.4,154.1,1,1,0,0,0,326.4,170);
	this.instance.alpha = 0.441;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1).to({alpha:0.238},0).wait(1).to({alpha:0.109},0).to({_off:true},1).wait(34).to({_off:false,alpha:0.441},0).wait(1).to({alpha:0.238},0).wait(1).to({alpha:0.109},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.238},0).wait(1).to({alpha:0.109},0).to({_off:true},1).wait(13));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("Egx/gX0MBj/AAAMAAAAvpMhj/AAAg");
	this.shape.setTransform(320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,642,307);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(187.4,7.1,1,1,0,0,0,61.6,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.13,scaleY:1.13,y:7.2},2,cjs.Ease.get(-1)).to({scaleX:1.28,scaleY:1.28,y:7.1},2,cjs.Ease.get(1)).to({scaleX:1.14,scaleY:1.14,y:7.2},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:7.1},2,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(125.8,-3.3,123.1,20.9);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(5));

	// Слой 3
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(187.6,55.4,1,1,0,0,0,187.4,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:14.4},3).to({y:55.4},4).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(90.8,12.8,0.581,0.581,0,0,0,156.4,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:52.8},3).to({y:12.8},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,-3.2,370.7,65);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 15
	this.instance = new lib.Символ37_1();
	this.instance.parent = this;
	this.instance.setTransform(1091.3,669.3,1,1,0,0,0,30.1,30.1);

	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1091.3,669.3,0.349,0.349,0,0,0,9.3,9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Символ 17
	this.instance_2 = new lib.Символ17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1091.4,669.4,1.412,1.412,0,0,0,106.9,106.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 16
	this.instance_3 = new lib.Символ16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1091.3,669.4,1.412,1.412,0,0,0,101.8,101.9);
	this.instance_3.alpha = 0.262;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 14
	this.instance_4 = new lib.Символ14();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1091.3,669.4,1.412,1.412,0,0,0,101.8,101.9);
	this.instance_4.alpha = 0.359;
	this.instance_4.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Символ 13
	this.instance_5 = new lib.Символ13();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1091.1,669.2,1.412,1.412,0,0,0,703.1,415.1);
	this.instance_5.alpha = 0.648;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(98,82.9,1986.5,1172.6), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(611.8,495.5,1,1,0,0,0,33.7,39.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ48(), 3);

	this.instance_1 = new lib.Символ47();
	this.instance_1.parent = this;
	this.instance_1.setTransform(586.7,396.2,1,1,0,0,0,21.2,30.7);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ47(), 3);

	this.instance_2 = new lib.Символ46();
	this.instance_2.parent = this;
	this.instance_2.setTransform(509.8,373.8,1,1,0,0,0,14.7,13.7);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Символ46(), 3);

	this.instance_3 = new lib.Символ44();
	this.instance_3.parent = this;
	this.instance_3.setTransform(427.4,532,1,1,0,0,0,30.8,55);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.Символ44(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_4 = new lib.Символ65();
	this.instance_4.parent = this;
	this.instance_4.setTransform(507.5,414.8,1,1,0,0,0,21.4,34.1);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.Символ65(), 3);

	this.instance_5 = new lib.Символ64();
	this.instance_5.parent = this;
	this.instance_5.setTransform(561.8,406.5,1,1,0,0,0,31.8,41);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.Символ64(), 3);

	this.instance_6 = new lib.Символ63();
	this.instance_6.parent = this;
	this.instance_6.setTransform(562.5,473.5,1,1,0,0,0,32.8,44.2);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2, false, new lib.Символ63(), 3);

	this.instance_7 = new lib.Символ62();
	this.instance_7.parent = this;
	this.instance_7.setTransform(504.9,481.8,1,1,0,0,0,34,44.5);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib.Символ62(), 3);

	this.instance_8 = new lib.Символ61();
	this.instance_8.parent = this;
	this.instance_8.setTransform(471.6,498.2,1,1,0,0,0,33.1,29.9);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2, false, new lib.Символ61(), 3);

	this.instance_9 = new lib.Символ60();
	this.instance_9.parent = this;
	this.instance_9.setTransform(483.8,553.6,1,1,0,0,0,38,33.7);
	new cjs.ButtonHelper(this.instance_9, 0, 1, 2, false, new lib.Символ60(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Слой 1
	this.instance_10 = new lib.statu91();
	this.instance_10.parent = this;
	this.instance_10.setTransform(654.6,359,0.698,0.698,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(378,359,276.6,398.2), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(81,81,1,1,0,0,0,81,81);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.86,scaleY:0.86},2,cjs.Ease.get(-1)).to({scaleX:0.72,scaleY:0.72},2,cjs.Ease.get(1)).to({scaleX:0.83,scaleY:0.83},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.4,-31.4,230,234.9);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(6.9,6.9,0.488,0.488,0,0,0,14.2,14.2);
	this.instance.alpha = 0.359;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.4,scaleY:0.4,alpha:0.497},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0.626},0).wait(1).to({scaleX:0.29,scaleY:0.29,alpha:0.658},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.675},0).wait(1).to({regX:14.1,regY:14.1,scaleX:0.26,scaleY:0.26,alpha:0.711},0).wait(1).to({regX:14.2,regY:14.2,scaleX:0.35,scaleY:0.35,x:7,y:7,alpha:0.575},0).wait(1).to({scaleX:0.43,scaleY:0.43,alpha:0.456},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:6.9,y:6.9,alpha:0.421},0).wait(1).to({scaleX:0.46,scaleY:0.46,alpha:0.4},0).wait(1).to({scaleX:0.49,scaleY:0.49,alpha:0.359},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.8,13.8);


(lib.Символ18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_6 = new lib.Символ37();
	this.instance_6.parent = this;
	this.instance_6.setTransform(22.2,14.8,0.306,0.306,75);

	this.instance_7 = new lib.Символ37();
	this.instance_7.parent = this;
	this.instance_7.setTransform(19.9,31.5,0.526,0.526,45,0,0,-0.1,0);

	this.instance_8 = new lib.копияСимвол36();
	this.instance_8.parent = this;
	this.instance_8.setTransform(29,30.9,1,0.467,-105);
	this.instance_8.alpha = 0.41;
	this.instance_8.compositeOperation = "lighter";
	this.instance_8.filters = [new cjs.BlurFilter(3, 3, 2)];
	this.instance_8.cache(-5,-5,10,10);

	this.instance_9 = new lib.копияСимвол36();
	this.instance_9.parent = this;
	this.instance_9.setTransform(29.1,13.4,0.792,0.369,-127.2);
	this.instance_9.alpha = 0.781;
	this.instance_9.compositeOperation = "lighter";
	this.instance_9.filters = [new cjs.BlurFilter(3, 3, 2)];
	this.instance_9.cache(-5,-5,10,10);

	this.instance_10 = new lib.копияСимвол36();
	this.instance_10.parent = this;
	this.instance_10.setTransform(34.5,20,1,0.467,-60);
	this.instance_10.alpha = 0.41;
	this.instance_10.compositeOperation = "lighter";
	this.instance_10.filters = [new cjs.BlurFilter(3, 3, 2)];
	this.instance_10.cache(-5,-5,10,10);

	this.instance_11 = new lib.копияСимвол32();
	this.instance_11.parent = this;
	this.instance_11.setTransform(23.9,27.5,0.319,0.451,5);
	this.instance_11.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18_1, new cjs.Rectangle(-25.2,-15.9,73.6,93.7), null);


(lib.sprite15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape14("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite15, new cjs.Rectangle(-83.2,-5.6,198.2,12.1), null);


(lib.sprite12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape11("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite12, new cjs.Rectangle(-8.3,-6,15.1,12.8), null);


(lib.sprite15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.shape14_1("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite15_1, new cjs.Rectangle(-83.2,-5.6,198.2,12.1), null);


(lib.sprite12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.shape11_1("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite12_1, new cjs.Rectangle(-8.3,-6,15.1,12.8), null);


(lib.Group1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(-1.6,1.3,1,1,0,0,0,51.1,124.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ49(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.instance_1 = new lib.soldddr();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-52,-123);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group1, new cjs.Rectangle(-52.7,-123.2,104.8,249.1), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(23.4,55.6,1,1,0,0,0,23.4,55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:127.4,y:91.6},16).wait(77));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.8,111.3);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(617.2,332.2,1,1,0,0,0,703.1,415.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:605.2},12,cjs.Ease.get(-1)).to({x:593.2},12,cjs.Ease.get(1)).to({x:604.7},12,cjs.Ease.get(-1)).to({x:617.2},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12,0,1986.5,1172.7);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(1375.3,826.4,1,1,0,0,0,993.2,586.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:838.1},19,cjs.Ease.get(-1)).to({y:850.4},20,cjs.Ease.get(1)).to({y:838.4},20,cjs.Ease.get(-1)).to({y:826.4},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(394.1,240.1,1986.5,1172.7);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Пользовательский курсор мыши
		Заменяет курсор мыши по умолчанию на указанный экземпляр символа.
		*/
		stage.canvas.style.cursor = "none";
		this.pricel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.pricel.x = stage.mouseX/window.devicePixelRatio;
			this.pricel.y = stage.mouseY/window.devicePixelRatio;
		}
		//Чтобы восстановить курсор мыши по умолчанию, раскомментируйте следующие строки:
		//this.removeEventListener("tick", fl_CustomMouseCursor.bind(this));
		//stage.removeChild(pricel);
		//stage.canvas.style.cursor = "default";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.pricel = new lib.Символ19();
	this.pricel.parent = this;
	this.pricel.setTransform(1608.3,1008.3,1,1,0,0,0,993.2,586.3);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(1009.2,662.1,1986.5,1172.7), null);


(lib.sprite16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite16, new cjs.Rectangle(-83.2,-5.6,198.2,12.1), null);


(lib.sprite16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.sprite15_1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite16_1, new cjs.Rectangle(-83.2,-5.6,198.2,12.1), null);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(77.3,42.7,0.214,0.214,0,0,0,81.9,81.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(260.4,122.2,1,1,0,0,0,6.9,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ANlK0QhqhqAAiWQAAiWBqhqQBqhqCWAAQCWAABqBqQBrBqAACWQAACWhrBqQhqBqiWAAQiWAAhqhqg");
	mask.setTransform(148.8,79.9);

	// Слой 5
	this.instance_2 = new lib.Символ35();
	this.instance_2.parent = this;
	this.instance_2.setTransform(212.2,104,1,1,0,0,0,23.4,55.6);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(159.9,137.9,1,1,7.2,0,0,148.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol, new cjs.Rectangle(0,18.4,319.8,237.4), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Symbol();
	this.instance.parent = this;
	this.instance.setTransform(159.9,117.9,1,1,0,0,0,159.9,117.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.8,x:155.4,y:144},22,cjs.Ease.get(-1)).to({regX:159.8,rotation:-10,x:150.7,y:169.9},21,cjs.Ease.get(1)).to({rotation:-4.5,x:155.6,y:142.2},30,cjs.Ease.get(-1)).to({regY:118,rotation:-1.3,x:158.7,y:125},12,cjs.Ease.get(1)).to({regX:159.9,regY:117.9,rotation:0,x:159.9,y:117.9},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,18.4,319.8,237.4);


(lib.sprite17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite16();
	this.instance.parent = this;
	this.instance.setTransform(50.4,-6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2).to({_off:false,scaleX:1.37,scaleY:1.37,rotation:15,x:79.7,y:21},0).wait(1).to({scaleX:1.43,rotation:-11,x:82.7,y:-31.3},0).to({_off:true},1).wait(4).to({_off:false,scaleX:1.24,scaleY:2.54,rotation:-4.8,x:68.2,y:-24.8},0).wait(1).to({rotation:13,x:70.9,y:7.2},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.9,-12,198.2,12.1);


(lib.sprite17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.sprite16_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.4,-6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(3).to({_off:false,scaleX:1.37,scaleY:1.37,rotation:15,x:79.7,y:21},0).wait(1).to({scaleX:1.43,rotation:-11,x:82.7,y:-31.3},0).to({_off:true},1).wait(3).to({_off:false,scaleX:1.24,scaleY:2.54,rotation:-4.8,x:68.2,y:-24.8},0).wait(1).to({rotation:13,x:70.9,y:7.2},0).to({_off:true},1).wait(30).to({_off:false,scaleX:1.37,scaleY:1.37,rotation:15,x:79.7,y:21},0).wait(1).to({scaleX:1.43,rotation:-11,x:82.7,y:-31.3},0).to({_off:true},1).wait(3).to({_off:false,scaleX:1.37,rotation:15,x:79.7,y:21},0).wait(1).to({scaleX:1.43,rotation:-11,x:82.7,y:-31.3},0).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.9,-12,198.2,12.1);


(lib.Символ12 = function(mode,startPosition,loop) {
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

	// Слой 3
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(-18.9,49.9,1,1,0,0,0,703.1,415.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({alpha:1},3).to({alpha:0},3).to({_off:true},1).wait(3));

	// Слой 1
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(159.9,117.9,1,1,0,0,0,159.9,117.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:159.8,regY:117.7,scaleX:2.15,scaleY:2.15,rotation:-10.9,x:-95.1,y:111.7,alpha:0.281},6).to({alpha:0},1).to({alpha:0.281},1).to({regX:159.9,regY:117.9,scaleX:1,scaleY:1,rotation:0,x:159.9,y:117.9,alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,18.4,319.8,237.4);


(lib.sprite18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.instance = new lib.sprite17();
	this.instance.parent = this;
	this.instance.setTransform(33.2,-0.3);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6));

	// Layer 9
	this.instance_1 = new lib.копияshape13("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,0,0.673,0.673);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(2).to({_off:false,scaleX:1,scaleY:1,x:0},0).to({_off:true},1).wait(2));

	// Layer 7
	this.instance_2 = new lib.sprite12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-5,-7,0.852,0.852,-90);
	this.instance_2.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_2.cache(-10,-8,19,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(2).to({_off:false,scaleX:1.27,scaleY:1.27,x:-7.5,y:-10.3},0).to({_off:true},1).wait(2));

	// Layer 5
	this.instance_3 = new lib.sprite12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(5.6,7,0.852,0.852,90);
	this.instance_3.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_3.cache(-10,-8,19,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(2).to({_off:false,scaleX:1.27,scaleY:1.27,x:8.2,y:10.4},0).to({_off:true},1).wait(2));

	// Layer 3
	this.instance_4 = new lib.sprite12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6.7,5.3,0.852,0.852,180);
	this.instance_4.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_4.cache(-10,-8,19,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(2).to({_off:false,scaleX:1.27,scaleY:1.27,x:-10,y:7.9},0).to({_off:true},1).wait(2));

	// Layer 1
	this.instance_5 = new lib.sprite12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(7.3,-5.3,0.852,0.852);
	this.instance_5.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_5.cache(-10,-8,19,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(2).to({_off:false,scaleX:1.27,scaleY:1.27,x:10.6,y:-7.8},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.9,-25.2,223.4,50.4);


(lib.sprite18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.instance_6 = new lib.sprite17_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(33.2,-0.3);
	this.instance_6.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6));

	// Layer 9
	this.instance_7 = new lib.копияshape13_1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(0.1,0,0.673,0.673);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},1).wait(2).to({_off:false,scaleX:1,scaleY:1,x:0},0).to({_off:true},1).wait(2));

	// Layer 7
	this.instance_8 = new lib.sprite12_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-5,-7,0.852,0.852,-90);
	this.instance_8.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_8.cache(-10,-8,19,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},1).wait(2).to({_off:false,scaleX:1.27,scaleY:1.27,x:-7.5,y:-10.3},0).to({_off:true},1).wait(2));

	// Layer 5
	this.instance_9 = new lib.sprite12_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(5.6,7,0.852,0.852,90);
	this.instance_9.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_9.cache(-10,-8,19,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},1).wait(2).to({_off:false,scaleX:1.27,scaleY:1.27,x:8.2,y:10.4},0).to({_off:true},1).wait(2));

	// Layer 3
	this.instance_10 = new lib.sprite12_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-6.7,5.3,0.852,0.852,180);
	this.instance_10.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_10.cache(-10,-8,19,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},1).wait(2).to({_off:false,scaleX:1.27,scaleY:1.27,x:-10,y:7.9},0).to({_off:true},1).wait(2));

	// Layer 1
	this.instance_11 = new lib.sprite12_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(7.3,-5.3,0.852,0.852);
	this.instance_11.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_11.cache(-10,-8,19,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},1).wait(2).to({_off:false,scaleX:1.27,scaleY:1.27,x:10.6,y:-7.8},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.9,-25.2,223.4,50.4);


(lib.Символ8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.sprite18();
	this.instance.parent = this;
	this.instance.setTransform(3.7,37.6,1.439,1.439,-177.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},7).wait(17));

	// Слой 7
	this.instance_1 = new lib.Символ18_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.6,43.8,1.37,0.798,15,0,0,22.7,27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(17));

	// Слой 1
	this.instance_2 = new lib.Символ52();
	this.instance_2.parent = this;
	this.instance_2.setTransform(66,99,1,1,0,0,0,55,97);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Символ52(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-282.5,-3.8,403.5,199.8);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8_1();
	this.instance.parent = this;
	this.instance.setTransform(78.5,24.8,1,1,0,0,0,18.2,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({x:65,y:219.3},5).wait(34).to({x:78.5,y:24.8},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222.3,2.8,403.6,199.8);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.sprite18_1();
	this.instance.parent = this;
	this.instance.setTransform(-14,-5.8,0.76,0.76,0,170.5,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:true},1).wait(74));

	// Layer 2
	this.instance_1 = new lib.Group1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-26.2,22,0.409,0.409,0,-0.6,179.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45).to({y:79},13).wait(47).to({y:22},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.1,-30.5,184.4,103.1);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AorIGQhIgRhsg4QiGhFgrgRQhsgoi6gQQjqgThDgOQhkgUguguQgWgXgRgiQgMgagNgoQgpiFgRiQQgZjVBohOQAngcA8gKQAngGBHAAQPfAJHxAjQM5A5KBClQBIATAmAPQA8AXAoAgQBUBGAQB5QAPB0g2BmQgyBfhjBEQhZA+h0AeQhgAah9AHQhNAEiUgCIrUgKQiVgChJABQh8ABhkAHQiLALgXAAIgZABQhNAAg7gOg");
	mask.setTransform(1066.9,537.5);

	// Слой 3
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(1145.7,572.1,0.441,0.441,0,0,0,90.8,101.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("APeNmQuZhlh0gLQh1gMiNgFQiMgGhKAPQhQARhvACIjBAAQhvACg3gBQhfgChFgPQhngWhwg+QhNgrh2hUQg0gmgTgZQgfgogKg9QgHgtAEhEQAKihAWh/QAViAAJhCQAIhCAIivQAIivBzgrQBygrgsgfQgsggCugoQCvgoGHgZQGHgYEMASQEMATLpBaQLoBaBoD0QBnD0jrEgIj3EwQgMANAlA9QAlA+D6DgQCrCcmBAAQitAAkdggg");
	mask_1.setTransform(1088.3,314.6);

	// Слой 4
	this.instance_1 = new lib.Symbol32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(997,404.6,0.81,0.81,1.8,0,0,-26.2,44.4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.fon();
	this.instance_2.parent = this;
	this.instance_2.setTransform(407,241,1.087,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(407,241,978.4,507), null);


(lib.Символ1копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.stt = new lib.Символ10();
	this.stt.parent = this;
	this.stt.setTransform(53.4,17,1,1,0,0,0,198,224);

	this.timeline.addTween(cjs.Tween.get(this.stt).wait(4).to({y:3.4},0).to({y:17},2).wait(35).to({y:3.4},0).to({y:17},2).wait(2).to({y:3.4},0).to({y:17},2).wait(13));

	// Слой 3
	this.fon = new lib.Символ9();
	this.fon.parent = this;
	this.fon.setTransform(59,40.5,1,1,0,0,0,450,253.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(4).to({y:26.9},0).to({y:40.5},2).wait(35).to({y:26.9},0).to({y:40.5},2).wait(2).to({y:26.9},0).to({y:40.5},2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16,11.5,978.4,538.7);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 10/window.devicePixelRatio;
		this.fon.y = - stage.mouseY / 10/window.devicePixelRatio;
		}
		this.addEventListener("tick", fl_CustomMouseCursor1.bind(this));
		
		function fl_CustomMouseCursor1() {
		
		this.stt.x = - stage.mouseX / 3/window.devicePixelRatio;
		this.stt.y = - stage.mouseY / 3/window.devicePixelRatio;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 2
	this.stt = new lib.Символ10();
	this.stt.parent = this;
	this.stt.setTransform(53.4,17,1,1,0,0,0,198,224);

	this.timeline.addTween(cjs.Tween.get(this.stt).wait(1));

	// Слой 3
	this.fon = new lib.Символ9();
	this.fon.parent = this;
	this.fon.setTransform(59,40.5,1,1,0,0,0,450,253.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(16,11.5,978.4,538.7), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(7));

	// Слой 1
	this.instance = new lib.Символ1копия();
	this.instance.parent = this;
	this.instance.setTransform(283.5,161.5,0.716,0.716,0,0,0,450,253.6);

	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(283.5,161.5,0.716,0.716,0,0,0,450,253.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},1).to({regX:449.9,regY:253.5,scaleX:1.02,scaleY:1.02,x:238.5,y:207.5},5).to({regX:450,regY:253.6,scaleX:0.72,scaleY:0.72,x:283.5,y:161.5},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.2,-11.8,700.4,385.7);


// stage content:
(lib.vzdanii_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover() {
			this.gun.gotoAndPlay(1);
			this.vse.gotoAndPlay(1);
			this.txt.gotoAndPlay(1);
		}
		
		stage.canvas.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout() {
			this.gun.gotoAndPlay(8);
			this.vse.gotoAndPlay(8);
			this.txt.gotoAndPlay(5);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 7
	this.txt = new lib.Символ26();
	this.txt.parent = this;
	this.txt.setTransform(320,290.4,1,1,0,0,0,187.5,11.2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Слой 8
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(320,290,1,1,0,0,0,320,15);
	this.instance.alpha = 0.559;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 6
	this.instance_1 = new lib.r2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(561,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(25,26.7,1,1,0,0,0,20,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ29();
	this.instance_3.parent = this;
	this.instance_3.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 2
	this.gun = new lib.Символ12();
	this.gun.parent = this;
	this.gun.setTransform(495.8,225.1,1,1,0,0,0,159.9,117.9);

	this.timeline.addTween(cjs.Tween.get(this.gun).wait(1));

	// Слой 1
	this.vse = new lib.Символ11();
	this.vse.parent = this;
	this.vse.setTransform(360.6,181.6,1,1,0,0,0,321.9,177.5);

	this.timeline.addTween(cjs.Tween.get(this.vse).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(319.5,144.8,712.4,385.7);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/bullet1.png?1485422867079", id:"bullet1"},
		{src:"images/fire.png?1485422867079", id:"fire"},
		{src:"images/fon.jpg?1485422867079", id:"fon"},
		{src:"images/r2.png?1485422867079", id:"r2"},
		{src:"images/rifle1.png?1485422867079", id:"rifle1"},
		{src:"images/soldddr.png?1485422867079", id:"soldddr"},
		{src:"images/soll.png?1485422867079", id:"soll"},
		{src:"images/statu91.png?1485422867079", id:"statu91"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;