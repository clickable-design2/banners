(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,703,305);


(lib.girl_r1 = function() {
	this.initialize(img.girl_r1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,297);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,107);


(lib.hand_curs = function() {
	this.initialize(img.hand_curs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,100);


(lib.is3 = function() {
	this.initialize(img.is3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,23);


(lib.is4 = function() {
	this.initialize(img.is4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,13);


(lib.is6 = function() {
	this.initialize(img.is6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,11);


(lib.is7 = function() {
	this.initialize(img.is7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,12);


(lib.kist = function() {
	this.initialize(img.kist);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,37);


(lib.tic = function() {
	this.initialize(img.tic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,117);// helper functions:

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


(lib.Символ89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ89, new cjs.Rectangle(0,0,80,117), null);


(lib.Символ86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.557,0.557);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ86, new cjs.Rectangle(0,0,117,20.6), null);


(lib.Символ85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9BE01").s().p("AhfBDQAWgCAMgJQAFgEAFgHQAGgGADgKQAFgPAFgqQADgYAAg5ICTAAIAADXIgyAAIAAiuIg0AAIgCArQgBAUgEATQgEATgFARQgHASgMANQgFAGgIAFQgIAGgIADQgIAEgMACQgKACgMABgAngBqQgQgCgRgDIAAjSICPAAIAAApIhhAAIAAAkIAQAAQAYAAATADQATAFANAIQAGAEAFAGQAFAFADAFQAEAHABAIQACAJAAAJQAAASgGANQgHAOgNAIQgaASgvAAgAnTBCIAJAAIAdgBQAIgBAIgEQAGgDAEgFQAEgFAAgKQAAgJgDgGQgFgGgGgDQgHgEgKgBIglgBgAGQBqIAAitIhAAAIAAgqICyAAIAAAqIhBAAIAACtgACnBqIAAjXICRAAIAAApIhhAAIAAArIBWAAIAAAmIhWAAIAAA0IBoAAIAAApgAiuBqIAAiMQgbAggZAiIgtBKIgoAAIAAjXIAwAAIAAB/IBhh/IAnAAIAADXg");
	this.shape.setTransform(51.4,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ85, new cjs.Rectangle(0,0,102.8,22), null);


(lib.Символ84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AktB4IgfgFIAAisIA2gFQASAAAPADQAOACALAGQAKAGAFAJQADAGABAGQACAFAAAIQABAKgGAHQgFAJgLAHQARAGAHALQAFALAAAOQABAcgVAPQgJAGgRAEQgPAEgUAAgAkkBWIAKABIAbgBQAIgBAEgCQAGgDADgFQADgFAAgHQAAgNgIgFQgGgCgHgCIgogBgAkkgdIAAAmIAjgBIALgDQADgCAEgEQABgDAAgGQAAgFgBgEQgEgEgDgCQgJgEgQgBgAHmB3IAAh3QgXAcgTAeIgnA9IggAAIAAizIAnAAIAABoIBRhoIAhAAIAACzgAExB3IgMgnIhHAAIgMAnIgrAAIAlhlIAjhOIAmAAIBHCzgAEbAvIgahCIgaBCIA0AAgABCB3IAAiRIg3AAIAAgiICVAAIAAAiIg2AAIAACRgAgmB3IgNgnIhGAAIgOAnIgpAAIBHizIAmAAIBHCzgAg9AvIgZhCIgaBCIAzAAgAmSB3IgRgfQgNgTgIgHIgeArIgIAOIgvAAQAMgWAQgWIAjgvIg8hYIAyAAIAiA0IAig0IAvAAIg7BVQAQAUAWAhQAPAYAIARgAG0hNQgIgEgGgEQgGgFgEgHQgEgHAAgIIAagIQABALAGAEQAFADAGAAQAHAAAEgDQAFgEADgKIAaAHQgCAIgDAIIgKALQgGAEgIAEQgIACgIAAQgJAAgHgCg");
	this.shape.setTransform(52.6,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ84, new cjs.Rectangle(0,0,105.1,24.1), null);


(lib.Символ83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhsAZQggAAgPgIQgFgCgDgDQgEgFAEgEQACgDAGgBIAOgCIAPgDQgIgGACgHQACgEAGgBIAKACIAKAGIAEAFQADADAHADIATAHQAKAEADAEQACADgBAFQgBAEgDABQgDACgHgDIgBgBIgDACQgDACgHAAgABUAUQgDgBgDgDQgCgDAAgDQABgGAJgCQAFgCAUgDIAQgCIALgBIANAFIAJABQAEABABADQACAFgFAEQgDADgGABQgJABgSAAQgTgBgJACIgMABIgCAAg");
	this.shape.setTransform(128.4,62.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(64).to({_off:false},0).to({_off:true},2).wait(1));

	// Слой 1
	this.instance = new lib.girl_r1();
	this.instance.parent = this;
	this.instance.setTransform(59,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(67));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(59,10,141,297);


(lib.Символ81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hand();
	this.instance.parent = this;
	this.instance.setTransform(2,0,1.135,1.135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ81, new cjs.Rectangle(2,0,72.7,121.5), null);


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.is6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ74, new cjs.Rectangle(0,0,9,11), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.is4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(0,0,9,13), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.is3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(0,0,28,23), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.is7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(0,0,16,12), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AubVAMAAAgp/Ic3AAMAAAAp/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-92.4,-134.4,184.8,268.8), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand_curs();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,63,100), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kist();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,30,30), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(280,167,1.389,1.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(280,167,976.3,423.6), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FA1313").s().p("AGPE6QgrgWgegrQgfgsgQg+QgPg+AAhRQAAhRAQg9IAUg6QALgaAQgWQAPgVASgQQATgQAVgMQAWgKAYgGQAXgGAbAAQA2AAAqAWQArAWAfArQAfAsAQA+QAPA9AABRQAACig+BXQgfArgrAWQgqAWg2AAQg2AAgrgWgAHFjIQgSAQgKAdQgLAdgFAnIgEBXIAEBYQAFAnALAdQAKAdASAQQARAQAaAAQAaAAASgQQARgQAKgdQALgdAEgnIAFhYIgFhXQgEgngLgdQgKgdgRgQQgSgQgaAAQgaAAgRAQgAh/E6QgrgWgegrQgfgsgQg+QgPg+AAhRQAAhRAQg9IAUg6QAMgaAPgWQAQgVASgQQASgQAWgMQAVgKAYgGQAXgGAbAAQA1AAArAWQAqAWAfArQAgAsAPA+QAPA9AABRQAACig+BXQgfArgqAWQgrAWg1AAQg2AAgrgWgAhJjIQgSAQgKAdQgLAdgEAnIgFBXIAFBYQAEAnALAdQAKAdASAQQARAQAaAAQAaAAARgQQARgQAKgdQALgdAEgnIAFhYIgFhXQgEgngLgdQgKgdgRgQQgRgQgaAAQgaAAgRAQgAqOE6QgqgWgfgrQgfgsgPg+QgQg+AAhRQAAhRAQg9IAUg6QAMgaAQgWQAPgVASgQQASgQAWgMQAVgKAYgGQAXgGAbAAQA2AAArAWQArAWAeArQAgAsAPA+QAPA9AABRQAACig+BXQgeArgrAWQgrAWg2AAQg2AAgrgWgApYjIQgRAQgLAdQgKAdgFAnIgFBXIAFBYQAFAnAKAdQALAdARAQQARAQAaAAQAaAAASgQQARgQAKgdQALgdAEgnIAFhYIgFhXQgEgngLgdQgKgdgRgQQgSgQgaAAQgaAAgRAQgAQAFBQgsgOgfgcQg9g5gThmIhDAAIAAhcIA6AAIAAg7Ig6AAIAAhcIBGAAQAMg0AXgnQAXgnAigbQAigbArgMQAsgOA1AAQAqAAAdAHIA7ARIgcBsIgtgMQgYgGgiAAQg4AAgfAZQgPAMgMARQgLATgHAXIDOAAIgSBcIjIAAIAAA7IC9AAIgRBcIigAAQAIAcAMATQALATAQAMQAQALAUAFQAUAGAXAAQAfAAAfgGQAggGAggNIAaBrQgZANgnAKQgnAKg1AAQg6AAgtgOgAxXFCIAAnOQgcATgjAPIhCAbIgqhrIBxg5IA1gkIAugoIBhAAIAAKBg");
	this.shape.setTransform(128.2,20.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-0.1,-12.7,256.7,67.2), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AByBXIAAgjIhcAAIAAAjIgbAAIAAg8IASAAQAHgMAEgMQAEgLACgMQACgMAAgNIABghIBWAAIAABpIAXAAIAAA8gAA4gLQgBALgEAJQgDAKgEAIIAvAAIAAhQIgeAAgADPA2IgMgDQgMgFgJgIIgIgKQgDgFgDgHIgEgOIgBgOQAAgRAGgNQAFgNAJgIQAJgJAMgEIAMgEIAMgBQAOAAAMAFIALAFIAKAIQAIAIAGANQAFANAAARQAAAIgCAGQgBAIgCAGQgFANgJAJQgJAIgMAFQgMAEgOAAIgNgBgADOg0QgHADgEAGQgFAFgCAIQgCAIAAAKQAAAJACAHQACAIAFAFQAEAGAHADQAGADAIAAQAJAAAGgDQAHgDAEgGQAFgFACgIQACgHAAgJQAAgKgCgIQgCgIgFgFQgEgGgHgDQgGgDgJAAQgIAAgGADgAjrA2IgMgDQgMgFgJgIIgIgKQgEgFgCgHIgEgOIgBgOQAAgRAFgNQAFgNAJgIQAJgJAMgEIAMgEIANgBQANAAAMAFIALAFIAKAIQAJAIAFANQAFANAAARQAAAIgBAGQgBAIgDAGQgFANgJAJQgIAIgMAFQgMAEgOAAIgNgBgAjtg0QgGADgFAGQgEAFgCAIQgDAIAAAKQAAAJADAHQACAIAEAFQAFAGAGADQAHADAIAAQAIAAAHgDQAGgDAFgGQAEgFACgIQADgHAAgJQAAgKgDgIQgCgIgEgFQgFgGgGgDQgHgDgIAAQgIAAgHADgAGpA0IgCgpIgCgtIgfBGIgUAAIgehGIgFBWIgcAAIAKiCIAcAAIAkBOIAjhOIAbAAIALCCgAg1A0IAAg2IgyAAIAAA2IgdAAIAAiCIAdAAIAAAyIAyAAIAAgyIAdAAIAACCgAmJA0IAAgPQgQgBgLgFQgLgEgHgIQgHgHgEgKQgEgIAAgKQAAgKAEgJQAEgKAHgIQAHgHALgFQALgFAQgCIAAgOIAcAAIAAAOQAPACAMAFQALAFAHAHQAHAIAEAKQAEAJAAAKQAAAKgEAIQgEAKgHAHQgHAIgLAEQgMAFgPABIAAAPgAltAMQAIAAAGgDQAFgCAEgEQADgDACgFQACgGAAgGQAAgFgCgGQgBgFgEgEQgEgEgFgDQgGgCgIgBgAmXgsQgFADgEAEQgEAEgBAFQgCAGAAAFQAAAGACAGQACAFADADQAEAEAGACQAFADAIAAIAAg7QgIABgGACg");
	this.shape.setTransform(45.4,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,90.8,17.5), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABfBDIgMgDQgMgEgJgJIgIgKQgEgFgCgGIgEgOIgBgQQAAgQAFgMQAFgNAJgJQAJgJAMgEIAMgDIANgBQANAAAMAEIALAFIAKAIQAJAJAFANQAFAMAAAQQAAAJgBAHQgBAHgDAHQgFAMgJAJQgIAJgMAEQgMAEgOAAIgNgBgABdgmQgGADgFAFQgEAGgCAIQgDAIAAAIQAAAKADAIQACAHAEAGQAFAFAGADQAHADAIAAQAIAAAHgDQAGgDAFgFQAEgGACgHQADgIAAgKQAAgIgDgIQgCgIgEgGQgFgFgGgDQgHgDgIAAQgIAAgHADgAg4BBIgVgHIAJgXIAZAHIAKABQANAAAHgDQAIgEAAgJQAAgFgCgEQgDgDgEgCQgEgCgGAAIgegBIAAgXIAdgBIAIgDQADgCACgDQACgDAAgEQAAgHgFgDQgFgDgKAAQgKAAgIACQgIADgHAEIgJgYQAIgEAKgDQALgDAOAAQAKAAAJACQAJADAGAEQAHAFADAHQAEAHAAAKQAAAHgEAHQgEAHgIAFIAIAEIAHAHQADAEACAFQACAFAAAGQAAALgEAHQgEAIgHAFQgOAJgbAAgApyAzQgQgSAAghQAAgPAFgNIAGgMQADgFAFgEQAJgJAMgFQAMgEAPAAIAPABIAMADIANAGIgIAYQgGgEgIgCQgJgCgKAAQgHAAgGACQgHACgFAFQgFAFgDAIQgDAIAAALQAAAJACAHQACAIAFAGQAEAGAHADQAIADAKAAIALAAIAJgCIANgFIAIAYQgGADgMADQgQADgKAAQggAAgRgRgAFZBCIgVgDIAAh/IAeAAIAAArIAIAAQAPAAAMADQALACAIAGQAIAFAEAIQADAIAAAMQAAALgEAIQgEAIgIAGQgIAGgLADQgLACgOAAgAFiADIAAAnIAWAAQAFgBAEgDQAEgCACgEQACgDAAgGQAAgMgIgEIgLgDIgOgBIgDAAgADcBDQgLgBgMgCIAAh+IAogEQANAAAKACQALACAHAEQAIAFAEAHIADAHIABAKQAAAIgDAGQgEAGgIAFQANAEAEAIQAFAIAAAKQAAAVgPAKQgIAFgLADQgLACgPAAgADiAqIAHABIAUgBIAKgDQAEgBACgEQACgDAAgGQAAgJgHgEIgIgCIgegBgADigpIAAAcIAagBIAIgCIAEgFQACgDAAgEQAAgEgCgCQgBgDgDgCQgGgDgMAAgAJmBCIgBgqIgDgsIgeBFIgVAAIgehFIgEBWIgdAAIALiCIAcAAIAjBNIAkhNIAbAAIAKCCgAG4BCIAAiCIAdAAIAACCgAh+BCIAAhVQgQATgPAVIgbAtIgZAAIAAiCIAdAAIAABMIA8hMIAYAAIAACCgAlLBCIAAiAIAVgDIATgBQAdAAAQALQAPAKAAAXQAAAMgEAJQgEAHgHAFQgQALgeAAIgJAAIAAAsgAktgoIAAAmIAJAAIAOgBIAJgDQAEgCACgEQACgEAAgGQAAgFgCgEQgCgEgEgCQgDgCgGgBIgLgBgAmGBCIAAhpIgxAAIAABpIgeAAIAAiCIBsAAIAACCg");
	this.shape.setTransform(64.3,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,128.7,13.7), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEOAtQANgBAHgFQAEgDADgEQADgEACgGQADgJADgZQACgPAAgjIBaAAIAACCIgeAAIAAhpIggAAIgBAaIgDAYQgCAMgEAKQgFAKgHAIIgIAHIgJAGIgMADQgHACgHAAgAB5AtQANgBAHgFQAEgDADgEQADgEACgGQADgJADgZQACgPAAgjIBaAAIAACCIgeAAIAAhpIggAAIgBAaIgDAYQgCAMgEAKQgFAKgHAIIgIAHIgJAGIgMADQgHACgHAAgAAdBGIgMgDQgMgEgIgJIgIgKQgEgFgCgHIgEgOIgBgPQAAgQAFgNQAFgNAJgIQAIgJAMgEIAMgEIANgBQANABAMAEIALAFIAKAIQAJAIAFANQAFANAAAQQAAAJgBAGQgBAIgDAGQgFANgJAJQgIAJgMAEQgMAEgOAAIgNgBgAAbgkQgGAEgFAFQgEAFgCAJQgDAIAAAIQAAAJADAJQACAHAEAFQAFAGAGADQAHADAIAAQAIAAAHgDQAGgDAFgGQAEgFACgHQADgJAAgJQAAgIgDgIQgCgJgEgFQgFgFgGgEQgHgDgIAAQgIAAgHADgAHCBFIgUgDIAAiAIAdAAIAAAsIAIAAQAQAAALADQAMACAHAGQAIAFAEAIQAEAIAAALQAAALgEAJQgFAIgHAGQgIAGgLADQgMACgOAAgAHLAGIAAAnIAXgBQAFAAADgDQAEgCADgEQACgDAAgHQAAgLgJgEIgKgEIgPAAIgCAAgAIhBEIAAiCIAeAAIAACCgAiKBEIAAh/IAUgEIATAAQAdAAAQAKQAQAKAAAYQAAAMgEAHQgEAJgIAFQgQAKgdAAIgKAAIAAAsgAhtgmIAAAmIAKAAIANgBIAKgCQAEgCACgFQACgEAAgFQAAgGgDgEQgCgDgDgCQgEgCgFgBIgMgBgAjGBEIAAhVQgQATgPAWIgbAsIgZAAIAAiCIAdAAIAABNIA8hNIAYAAIAACCgAmTBEIAAh/IAVgEIATAAQAdAAAQAKQAPAKAAAYQAAAMgEAHQgEAJgHAFQgQAKgeAAIgJAAIAAAsgAl1gmIAAAmIAJAAIAOgBIAJgCQAEgCACgFQACgEAAgFQAAgGgCgEQgCgDgEgCQgDgCgGgBIgLgBgAoCBEIAAgPQgQgBgLgEQgLgFgHgIQgHgHgEgKQgEgJAAgJQAAgKAEgJQAEgJAHgJQAHgHALgFQALgFAQgCIAAgOIAcAAIAAAOQAPACAMAFQALAFAHAHQAHAJAEAJQAEAJAAAKQAAAJgEAJQgEAKgHAHQgHAIgLAFQgMAEgPABIAAAPgAnmAdQAIgBAGgDQAFgCAEgEQADgEACgFQACgFAAgGQAAgFgCgGQgBgEgEgFQgEgEgFgDQgGgCgIAAgAoQgcQgFADgEAEQgEAFgBAEQgCAGAAAFQAAAGACAFQACAFADAEQAEAEAGACQAFADAIABIAAg7QgIAAgGACg");
	this.shape.setTransform(57.5,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,115,14.2), null);


(lib.sprite136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.sprite136, null, null);


(lib.shape142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(8.9,1,1).p("AKKqJQELELAAF+QAAF+kLEMQkLEMl/AAQl+AAkLkMQkMkMAAl+QAAl+EMkLQELkMF+AAQF/AAELEMg");
	this.shape.setTransform(199.7,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(103.5,-94.4,192.3,192.3);


(lib.shape137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7232E").s().p("AIoCbIxQibIRQiaIABAAIAAE1g");
	this.shape.setTransform(-51.2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.5,-13.3,110.7,31.1);


(lib.shape132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEF1D4").s().p("AhVhAIAVgWICXCXIgWAWg");
	this.shape.setTransform(-73.1,-72.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEF1D4").s().p("AhVhAIAVgWICWCXIgVAWg");
	this.shape_1.setTransform(72.8,73);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEF1D4").s().p("AhVBBICWiWIAVAVIiWCXg");
	this.shape_2.setTransform(-72.9,73.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEF1D4").s().p("AhWBBICXiXIAVAWIiWCWg");
	this.shape_3.setTransform(73.1,-73);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.7,-81.7,163.5,163.4);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ74();
	this.instance.parent = this;
	this.instance.setTransform(4.5,5.5,1,1,0,0,0,4.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-21.2},6,cjs.Ease.get(-1)).to({x:-55.5},8,cjs.Ease.get(1)).to({x:-27.5},7,cjs.Ease.get(-1)).to({x:4.5},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,11);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.parent = this;
	this.instance.setTransform(4.5,6.5,1,1,0,0,0,4.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:29.5},7,cjs.Ease.get(-1)).to({x:54.5},7,cjs.Ease.get(1)).to({x:33.7},5,cjs.Ease.get(-1)).to({x:4.5},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,13);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(8,6,1,1,0,0,0,8,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:17.5},9,cjs.Ease.get(-1)).to({x:28},10,cjs.Ease.get(1)).to({x:18},10,cjs.Ease.get(-1)).to({x:8},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,12);


(lib.Символ51копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(14,11.5,1,1,0,0,0,14,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({y:-396.1},52).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28,23);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(14,11.5,1,1,0,0,0,14,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-396.1},52).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28,23);


(lib.Символ46копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ75();
	this.instance.parent = this;
	this.instance.setTransform(4.5,5.5,1,1,0,0,0,4.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({y:-391.1},43).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,11);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ75();
	this.instance.parent = this;
	this.instance.setTransform(4.5,5.5,1,1,0,0,0,4.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({y:-391.1},43).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,11);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,1.147,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(62.2,80.6,1.431,1.431,-15,0,0,31.6,49.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:50,scaleX:1.43,scaleY:1.43,rotation:-14.8,x:67.6,y:98.5},7,cjs.Ease.get(-1)).to({regY:49.9,scaleX:1.43,scaleY:1.43,rotation:-15,x:72.9,y:116.2},7,cjs.Ease.get(1)).to({scaleX:1.43,scaleY:1.43,rotation:-14.8,x:67.2,y:97.2},8,cjs.Ease.get(-1)).to({scaleX:1.43,scaleY:1.43,rotation:-15,x:62.2,y:80.6},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124.2,161.6);


(lib.Символ19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ81();
	this.instance.parent = this;
	this.instance.setTransform(51.3,215.7,1.099,1.099,0,0,0,36,60.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:60,rotation:20.2,x:70.7,y:209.5},14).wait(1).to({regX:38.3,regY:60.7,rotation:16.9,x:68.3,y:212.1},0).wait(1).to({rotation:15.1,x:66,y:212.6},0).wait(1).to({rotation:13.9,x:64.4,y:213},0).wait(1).to({rotation:13.3,x:63.5,y:213.2},0).wait(1).to({regX:36.1,regY:60,rotation:12.8,x:60.7,y:212.1},0).wait(1).to({regX:38.3,regY:60.7,rotation:16.6,x:67.9,y:212.2},0).wait(1).to({rotation:18.5,x:70.5,y:211.6},0).wait(1).to({rotation:19.6,x:71.9,y:211.3},0).wait(1).to({regX:36,regY:60,rotation:20.2,x:70.7,y:209.5},0).wait(1).to({regX:38.3,regY:60.7,rotation:16.4,x:67.9,y:212.3},0).wait(1).to({rotation:14.4,x:65.5,y:212.9},0).wait(1).to({rotation:13.4,x:64.2,y:213.1},0).wait(1).to({regX:36.1,regY:60,rotation:12.8,x:61.2,y:212.1},0).wait(1).to({regX:38.3,regY:60.7,rotation:16.6,x:68.2,y:212.2},0).wait(1).to({rotation:18.5,x:70.6,y:211.6},0).wait(1).to({rotation:19.6,x:72,y:211.3},0).wait(1).to({regX:36,regY:60,rotation:20.2,x:70.7,y:209.5},0).to({regY:60.1,rotation:0,x:51.3,y:215.7},12).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(37,170,1,1,0,0,0,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:15.1,rotation:39.5,x:72.6,y:161.6},14).wait(1).to({regX:15,rotation:19.9,x:63.8,y:165},0).wait(1).to({rotation:10.1,x:59.4,y:166.7},0).wait(1).to({rotation:5.3,x:57.2,y:167.6},0).wait(1).to({rotation:2.4,x:56,y:168.1},0).wait(1).to({regX:15.1,rotation:0,x:55,y:168.5},0).wait(1).to({regX:15,rotation:22.8,x:65.1,y:164.4},0).wait(1).to({rotation:32.2,x:69.3,y:162.8},0).wait(1).to({rotation:36.5,x:71.2,y:162},0).wait(1).to({regX:15.1,rotation:39.5,x:72.6,y:161.6},0).wait(1).to({regX:15,rotation:16.7,x:62.3,y:165.6},0).wait(1).to({rotation:7.3,x:58.2,y:167.3},0).wait(1).to({rotation:3,x:56.2,y:168.1},0).wait(1).to({regX:15.1,rotation:0,x:55,y:168.5},0).wait(1).to({regX:15,rotation:22.8,x:65.1,y:164.4},0).wait(1).to({rotation:32.2,x:69.3,y:162.8},0).wait(1).to({rotation:36.5,x:71.2,y:162},0).wait(1).to({regX:15.1,rotation:39.5,x:72.6,y:161.6},0).wait(1).to({regX:15,rotation:36.2,x:69.5,y:162.2},0).wait(1).to({rotation:32.9,x:66.6,y:162.9},0).wait(1).to({rotation:29.6,x:63.6,y:163.6},0).wait(1).to({rotation:26.3,x:60.6,y:164.4},0).wait(1).to({rotation:23,x:57.7,y:165},0).wait(1).to({rotation:19.7,x:54.7,y:165.7},0).wait(1).to({rotation:16.5,x:51.8,y:166.5},0).wait(1).to({rotation:13.2,x:48.8,y:167.2},0).wait(1).to({rotation:9.9,x:45.9,y:167.9},0).wait(1).to({rotation:6.6,x:42.9,y:168.6},0).wait(1).to({rotation:3.3,x:39.9,y:169.4},0).wait(1).to({rotation:0,x:37,y:170},0).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ89();
	this.instance_2.parent = this;
	this.instance_2.setTransform(20.8,129.7,0.632,0.632,0,0,0,40.1,58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:40.2,rotation:30,x:75.8,y:118.2},14).wait(1).to({regX:40,rotation:20.1,x:62,y:121.9},0).wait(1).to({rotation:14.7,x:54.4,y:124},0).wait(1).to({rotation:11.9,x:50.6,y:125.1},0).wait(1).to({rotation:10.3,x:48.3,y:125.7},0).wait(1).to({regX:40.1,regY:58.6,rotation:9,x:46.8,y:126.2},0).wait(1).to({regX:40,regY:58.5,rotation:20.6,x:62.9,y:121.7},0).wait(1).to({rotation:25.9,x:70.2,y:119.7},0).wait(1).to({rotation:28.4,x:73.6,y:118.7},0).wait(1).to({regX:40.2,rotation:30,x:75.8,y:118.2},0).wait(1).to({regX:40,rotation:18.4,x:59.6,y:122.5},0).wait(1).to({rotation:13.1,x:52.3,y:124.6},0).wait(1).to({rotation:10.6,x:48.8,y:125.6},0).wait(1).to({regX:40.1,regY:58.6,rotation:9,x:46.8,y:126.2},0).wait(1).to({regX:40,regY:58.5,rotation:20.6,x:62.9,y:121.7},0).wait(1).to({rotation:25.9,x:70.2,y:119.7},0).wait(1).to({rotation:28.4,x:73.6,y:118.7},0).wait(1).to({regX:40.2,rotation:30,x:75.8,y:118.2},0).to({regX:40.1,rotation:0,x:20.8,y:129.7},12).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ83();
	this.instance_3.parent = this;
	this.instance_3.setTransform(115.6,198.1,1.099,1.099,0,0,0,111.5,150.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,44.2,217.4,326.3);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(93.4,133.6,0.704,0.704,0,0,0,128.9,36.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({regX:128.8,regY:36.3,scaleX:0.77,scaleY:0.77,y:133.7},4).to({regX:128.9,regY:36.2,scaleX:0.7,scaleY:0.7,y:133.6},5).wait(1));

	// Символ 19
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(92.3,74.9,1.974,1.974,0,0,0,45.4,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({scaleX:2.26,scaleY:2.26,x:92.5},4).to({scaleX:1.97,scaleY:1.97,x:92.3},5).wait(8));

	// Символ 18
	this.instance_2 = new lib.Символ18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(92.6,34.4,1.387,1.387,0,0,0,64.3,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({scaleX:1.59,scaleY:1.59,x:92.7},4).to({scaleX:1.39,scaleY:1.39,x:92.6},5).wait(15));

	// Символ 17
	this.instance_3 = new lib.Символ17();
	this.instance_3.parent = this;
	this.instance_3.setTransform(92,-1.1,1.553,1.553,0,0,0,57.5,7.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:57.4,regY:7,scaleX:1.74,scaleY:1.74,x:91.9,y:-1.2},4).to({regX:57.5,regY:7.1,scaleX:1.55,scaleY:1.55,x:92,y:-1.1},5).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.6,-12.1,180.6,158.6);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ84();
	this.instance.parent = this;
	this.instance.setTransform(54.6,21.1,0.842,0.842,0,0,0,52.6,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:52.5,scaleX:0.89,scaleY:0.89,x:54.5},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:21},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:21.1},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:21},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:21.1},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:21},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:21.1},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:21},0).wait(1).to({regX:52.6,scaleX:1.13,scaleY:1.13,x:54.6,y:21.1},0).wait(1).to({regX:52.5,scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:54.5},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:54.6},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:54.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:54.6},0).wait(1).to({regX:52.6,scaleX:0.84,scaleY:0.84},0).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ85();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55.7,52.5,1.118,1.118,0,0,0,51.4,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:11,scaleX:1.06,scaleY:1.06,y:52.4},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:55.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:55.7,y:52.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:55.6,y:52.4},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:55.7},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:55.6,y:52.3},0).wait(1).to({scaleX:0.85,scaleY:0.85},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:55.7,y:52.4},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:55.6},0).wait(1).to({scaleX:0.82,scaleY:0.82},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:52.3},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:55.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:52.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:55.6},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:55.7},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:55.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:55.7},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:55.6},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:55.7,y:52.5},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:52.4},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:52.5},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:52.4},0).wait(1).to({regY:11.1,scaleX:1.12,scaleY:1.12,y:52.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,10.9,114.9,53.8);


(lib.sprite143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape142("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-199.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite143, new cjs.Rectangle(-95.8,-94.4,192.3,192.3), null);


(lib.sprite138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape137("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite138, new cjs.Rectangle(-106.5,-13.3,110.7,31.1), null);


(lib.sprite133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.shape132("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-3.4,0,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite133, new cjs.Rectangle(-117.4,-114,227.8,228), null);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(4.5,6.5,1,1,0,0,0,4.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ57, new cjs.Rectangle(0,0,9,13), null);


(lib.Символ54копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(8,6,1,1,0,0,0,8,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42).to({y:-396.5},35).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,12);


(lib.Символ54копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(8,6,1,1,0,0,0,8,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({y:-396.5},35).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,12);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(8,6,1,1,0,0,0,8,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-396.5},35).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,12);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(14,11.5,1,1,0,0,0,14,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:47.2},9,cjs.Ease.get(-1)).to({x:84},10,cjs.Ease.get(1)).to({x:49},10,cjs.Ease.get(-1)).to({x:14},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28,23);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 4
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(-65.3,114.8,0.849,0.849,0,0,0,79.5,64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-273.6},6).wait(16).to({x:-65.3},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.6,49.5,153.4,134.6);


(lib.Символ45копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ57();
	this.instance.parent = this;
	this.instance.setTransform(4.5,6.5,1,1,0,0,0,4.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({y:-383.5},39).wait(90).to({y:6.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,13);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ57();
	this.instance.parent = this;
	this.instance.setTransform(4.5,6.5,1,1,0,0,0,4.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({y:-383.5},39).wait(27).to({y:6.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,13);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(14,11.5,1,1,0,0,0,14,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(0,0,28,23), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 46
	this.instance = new lib.Символ46копия();
	this.instance.parent = this;
	this.instance.setTransform(536.6,381.7,1.44,1.44,0,0,180,4.5,5.5);

	this.instance_1 = new lib.Символ46();
	this.instance_1.parent = this;
	this.instance_1.setTransform(405.6,381.7,1.44,1.44,0,0,180,4.5,5.5);

	this.instance_2 = new lib.Символ46копия();
	this.instance_2.parent = this;
	this.instance_2.setTransform(595.5,395.5,1,1,0,0,0,4.5,5.5);

	this.instance_3 = new lib.Символ46();
	this.instance_3.parent = this;
	this.instance_3.setTransform(686.5,395.5,1,1,0,0,0,4.5,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Символ 45
	this.instance_4 = new lib.Символ45копия();
	this.instance_4.parent = this;
	this.instance_4.setTransform(357.7,414.8,1.44,1.44,0,0,180,4.5,6.5);

	this.instance_5 = new lib.Символ45();
	this.instance_5.parent = this;
	this.instance_5.setTransform(601.4,380.3,1.44,1.44,0,0,180,4.5,6.5);

	this.instance_6 = new lib.Символ45копия();
	this.instance_6.parent = this;
	this.instance_6.setTransform(719.8,418.5,1,1,0,0,0,4.5,6.5);

	this.instance_7 = new lib.Символ45();
	this.instance_7.parent = this;
	this.instance_7.setTransform(550.5,394.5,1,1,0,0,0,4.5,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Символ 44
	this.instance_8 = new lib.Символ54копия();
	this.instance_8.parent = this;
	this.instance_8.setTransform(717.2,381,1.44,1.44,0,0,180,8,6);

	this.instance_9 = new lib.Символ54();
	this.instance_9.parent = this;
	this.instance_9.setTransform(562.9,415.6,1.44,1.44,0,0,180,8,6);

	this.instance_10 = new lib.Символ54копия2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(806.6,381,1.44,1.44,0,0,180,8,6);

	this.instance_11 = new lib.Символ54копия();
	this.instance_11.parent = this;
	this.instance_11.setTransform(470.1,395,1,1,0,0,0,8,6);

	this.instance_12 = new lib.Символ54();
	this.instance_12.parent = this;
	this.instance_12.setTransform(577.3,419,1,1,0,0,0,8,6);

	this.instance_13 = new lib.Символ54копия2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(408,395,1,1,0,0,0,8,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(1));

	// Символ 43
	this.instance_14 = new lib.Символ51копия();
	this.instance_14.parent = this;
	this.instance_14.setTransform(220.9,389.1,1.44,1.44,0,0,180,14,11.6);

	this.instance_15 = new lib.Символ43();
	this.instance_15.parent = this;
	this.instance_15.setTransform(921.8,389.1,1.44,1.44,0,0,180,14,11.6);

	this.instance_16 = new lib.Символ51копия();
	this.instance_16.parent = this;
	this.instance_16.setTransform(814.8,400.5,1,1,0,0,0,14,11.5);

	this.instance_17 = new lib.Символ43();
	this.instance_17.parent = this;
	this.instance_17.setTransform(328,400.5,1,1,0,0,0,14,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(200.8,370.9,741.2,54.1), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(64.6,2.4,1,1,0,0,0,62.1,80.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(2.5,-78.4,124.2,161.6), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ19_1();
	this.instance.parent = this;
	this.instance.setTransform(87.2,58.1,1,1,0,0,0,107.2,273.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:53.3},19,cjs.Ease.get(-1)).to({y:48.1},20,cjs.Ease.get(1)).to({y:53.1},20,cjs.Ease.get(-1)).to({y:58.1},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-170.8,217.4,326.3);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(30.5,174);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.5},7,cjs.Ease.get(-1)).to({x:52.5},7,cjs.Ease.get(1)).to({x:40.7},8,cjs.Ease.get(-1)).to({x:30.5},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.9,3.1,217.4,326.3);


(lib.sprite139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite138();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite139, new cjs.Rectangle(-106.5,-13.3,110.7,31.1), null);


(lib.sprite134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite133();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-178.2},49).to({rotation:-181.8},1).to({rotation:-360},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.9,-115.5,230.8,231);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(13).call(this.frame_14).wait(15).call(this.frame_29).wait(1));

	// Слой 4
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(-225.4,-34.6,1.565,1.565,0,0,0,53,35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-109.9},6,cjs.Ease.get(-1)).to({x:24.9},7,cjs.Ease.get(1)).to({x:-91.8},7,cjs.Ease.get(-1)).to({x:-225.4},8,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(375.6,-34.6,1.398,1.398,0,0,0,53.1,35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.57,scaleY:1.57,x:472.5},6).to({regX:53,x:585.5},7,cjs.Ease.get(1)).to({regX:53.1,x:469.3},7,cjs.Ease.get(-1)).to({regX:53,x:336.2},8,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(171,17.2,1,1,0,0,0,129.4,191.1);

	this.instance_3 = new lib.Символ32();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-15.4,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,regX:0,regY:0,x:-15.4,y:0},1,cjs.Ease.get(1)).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},1,cjs.Ease.get(1)).to({x:164.1},6,cjs.Ease.get(-1)).to({x:237.3},7,cjs.Ease.get(1)).to({x:62.1},7,cjs.Ease.get(-1)).to({x:-7.6},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311.2,-170.8,770.7,326.3);


(lib.sprite140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.sprite139();
	this.instance.parent = this;
	this.instance.setTransform(0,-143.5,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.sprite139();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-148.7,-2.8,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1 - копия
	this.instance_2 = new lib.sprite139();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,147,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.instance_3 = new lib.sprite139();
	this.instance_3.parent = this;
	this.instance_3.setTransform(144.8,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite140, new cjs.Rectangle(-152.8,-147.6,301.7,298.7), null);


(lib.sprite141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite140();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:77.5},17).to({scaleX:1,scaleY:1,rotation:177.7,y:-0.1},22).to({rotation:182.3},1).to({scaleX:1,scaleY:1,rotation:259.7,x:0.1,y:0},17).to({scaleX:1,scaleY:1,rotation:360,x:0},22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.8,-147.6,301.7,298.7);


(lib.sprite144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(22.5,1,1).p("AWIAAQAAJMmeGeQmeGfpMAAQpLAAmemfQmemeAApMQAApLGemeQGemfJLAAQJMAAGeGfQGeGeAAJLg");
	this.shape.setTransform(-2.2,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(27));

	// Layer 8
	this.instance = new lib.sprite143();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.251,0.251);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.47,scaleY:0.47},3).to({scaleX:0.65,scaleY:0.65},3).to({scaleX:0.79,scaleY:0.79},3).to({scaleX:0.9,scaleY:0.9},3).to({scaleX:0.97,scaleY:0.97},3).to({scaleX:0.38,scaleY:0.38},4).to({scaleX:0.25,scaleY:0.25},7).wait(1));

	// Layer 6
	this.instance_1 = new lib.sprite141();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.2,2.099,2.099);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.88,scaleY:1.88,y:0.1},2).to({scaleX:1.69,scaleY:1.69},2).to({scaleX:1.52,scaleY:1.52},2).to({scaleX:1.37,scaleY:1.37},2).to({scaleX:1.25,scaleY:1.25},2).to({scaleX:1.15,scaleY:1.15},2).to({scaleX:1.08,scaleY:1.08},2).to({scaleX:1.03,scaleY:1.03,y:0},2).to({scaleX:1.01,scaleY:1.01},1).to({scaleX:1,scaleY:1},2).to({scaleX:2.1,scaleY:2.1,y:0.2},7).wait(1));

	// Layer 3
	this.instance_2 = new lib.sprite136();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,5.843,5.843);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:5.41,scaleY:5.41},1).to({scaleX:4.99,scaleY:4.99},1).to({scaleX:4.6,scaleY:4.6},1).to({scaleX:4.23,scaleY:4.23},1).to({scaleX:3.89,scaleY:3.89},1).to({scaleX:3.57,scaleY:3.57},1).to({scaleX:3.28,scaleY:3.28},1).to({scaleX:3,scaleY:3},1).to({scaleX:2.75,scaleY:2.75},1).to({scaleX:2.53,scaleY:2.53},1).to({scaleX:2.33,scaleY:2.33},1).to({scaleX:2.15,scaleY:2.15},1).to({scaleX:2,scaleY:2},1).to({scaleX:1.87,scaleY:1.87},1).to({scaleX:1.76,scaleY:1.76},1).to({scaleX:1.68,scaleY:1.68},1).to({scaleX:1.62,scaleY:1.62},1).to({scaleX:1.57,scaleY:1.57},2).to({scaleX:5.84,scaleY:5.84},7).wait(1));

	// Layer 1
	this.instance_3 = new lib.sprite134();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1,0.2,1.594,1.594);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.53,scaleY:1.53},1).to({scaleX:1.37,scaleY:1.37},3).to({scaleX:1.2,scaleY:1.2},4).to({scaleX:1.08,scaleY:1.08},4).to({scaleX:1.03,scaleY:1.03},3).to({scaleX:1.01,scaleY:1.01},1).to({scaleX:1.01,scaleY:1.01},1).to({scaleX:1,scaleY:1},2).to({scaleX:1.59,scaleY:1.59},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320.8,-309.7,633.4,627.1);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.sprite144();
	this.instance.parent = this;
	this.instance.setTransform(0.6,6,0.154,0.154);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-48.9,-41.8,97.7,96.8), null);


(lib.Символ95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.pric = new lib.Символ14();
	this.pric.parent = this;
	this.pric.setTransform(205,9.5);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ95, new cjs.Rectangle(156.1,-32.3,97.8,96.8), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.pric = new lib.Символ14();
	this.pric.parent = this;
	this.pric.setTransform(0.1,2.7);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(-48.8,-39.1,97.7,96.8), null);


// stage content:
(lib.girl_prk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		
		this.but1.addEventListener("mouseover", fl_Clickover.bind(this));
		function fl_Clickover() {
			this.girl.gotoAndPlay(2);
		}
		
		this.but1.addEventListener("mouseout", fl_Clickout.bind(this));
		function fl_Clickout() {
			this.girl.gotoAndStop(0);
		}
		
		
		
		//---------------
		
		this.but2.addEventListener("mouseover", fl_Clickover2.bind(this));
		function fl_Clickover2() {
			this.girl.gotoAndPlay(16);
		}
		
		this.but2.addEventListener("mouseout", fl_Clickout2.bind(this));
		function fl_Clickout2() {
			this.girl.gotoAndStop(0);
		}
		
		
		//----------------
		
		this.pric.alpha = 0;
		this.gun.alpha = 0;
		
		this.cursor = "none";
		this.pric.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pric.x = stage.mouseX / window.devicePixelRatio;;
			this.pric.y = stage.mouseY / window.devicePixelRatio;;
			this.gun.x = stage.mouseX / window.devicePixelRatio;;
		}
		
		
		
		
		
		//---------------
		
		stage.canvas.addEventListener("mouseover", fl_Clickover3.bind(this));
		
		function fl_Clickover3() {
		
			this.pric.alpha = 1;
			this.pric2.alpha = 0;
			this.gun.alpha = 1;
			this.tek.gotoAndPlay(1);
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout3.bind(this));
		function fl_Clickout3() {
		
			this.pric.alpha = 0;
			this.pric2.alpha = 1;
			this.gun.alpha = 0;
			this.tek.gotoAndPlay(16);
			this.girl.gotoAndStop(0);
		}
		
		
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		function fl_CustomMouseCursor() {
			this.fon.x = -stage.mouseX / 10 / window.devicePixelRatio;;
			this.fon.y = -stage.mouseY / 10 / window.devicePixelRatio;;
		}
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 7
	this.pric = new lib.Символ55();
	this.pric.parent = this;
	this.pric.setTransform(-281.8,496.6);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// Слой 6
	this.pric2 = new lib.Символ95();
	this.pric2.parent = this;
	this.pric2.setTransform(452.4,317.2,0.779,0.779,0,0,0,76,86);

	this.gun = new lib.Символ37();
	this.gun.parent = this;
	this.gun.setTransform(750.1,261.2,0.929,0.929);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gun},{t:this.pric2}]}).wait(1));

	// Слой 8
	this.but2 = new lib.Символ34();
	this.but2.parent = this;
	this.but2.setTransform(448.7,155.1,1.426,1.183);
	new cjs.ButtonHelper(this.but2, 0, 1, 2, false, new lib.Символ34(), 3);

	this.but1 = new lib.Символ34();
	this.but1.parent = this;
	this.but1.setTransform(146.7,155.2,1.426,1.183,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.but1, 0, 1, 2, false, new lib.Символ34(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.but1},{t:this.but2}]}).wait(1));

	// Слой 5
	this.tek = new lib.Символ48();
	this.tek.parent = this;
	this.tek.setTransform(157.7,35.2);

	this.timeline.addTween(cjs.Tween.get(this.tek).wait(1));

	// Слой 3
	this.girl = new lib.Символ30();
	this.girl.parent = this;
	this.girl.setTransform(118.6,184);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 11
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(-272.4,-13,1,1,0,0,0,20,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ86();
	this.instance_1.parent = this;
	this.instance_1.setTransform(101,22.3,1,1,0,0,0,58.5,10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.fon = new lib.Символ1();
	this.fon.parent = this;
	this.fon.setTransform(-27,-3,0.871,0.871,0,0,0,399.9,200);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,118.3,1198.3,586);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1488796689429", id:"bg"},
		{src:"images/girl_r1.png?1488796689429", id:"girl_r1"},
		{src:"images/hand.png?1488796689429", id:"hand"},
		{src:"images/hand_curs.png?1488796689429", id:"hand_curs"},
		{src:"images/is3.png?1488796689429", id:"is3"},
		{src:"images/is4.png?1488796689429", id:"is4"},
		{src:"images/is6.png?1488796689429", id:"is6"},
		{src:"images/is7.png?1488796689429", id:"is7"},
		{src:"images/kist.png?1488796689429", id:"kist"},
		{src:"images/logo.png?1488796689429", id:"logo"},
		{src:"images/tic.png?1488796689429", id:"tic"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;