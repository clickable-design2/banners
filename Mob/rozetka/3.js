(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1123,843);


(lib.bubles = function() {
	this.initialize(img.bubles);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,833);


(lib.Button = function() {
	this.initialize(img.Button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,91);


(lib.cofii = function() {
	this.initialize(img.cofii);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,58);


(lib.gamepad = function() {
	this.initialize(img.gamepad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,38);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1218,1049);


(lib.Iphone = function() {
	this.initialize(img.Iphone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,412);


(lib.Layer13 = function() {
	this.initialize(img.Layer13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,25);


(lib.Layer14 = function() {
	this.initialize(img.Layer14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,49);


(lib.Layer5 = function() {
	this.initialize(img.Layer5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,164);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,46);


(lib.logotxt = function() {
	this.initialize(img.logotxt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,42);


(lib.mikrovoln = function() {
	this.initialize(img.mikrovoln);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,46);


(lib.nout = function() {
	this.initialize(img.nout);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,53);


(lib.plita = function() {
	this.initialize(img.plita);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,69);


(lib.ring = function() {
	this.initialize(img.ring);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1022,928);


(lib.smartphone = function() {
	this.initialize(img.smartphone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,65);


(lib.stirka = function() {
	this.initialize(img.stirka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,66);


(lib.wifi = function() {
	this.initialize(img.wifi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,45);


(lib.wifirou = function() {
	this.initialize(img.wifirou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,40);// helper functions:

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


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logotxt();
	this.instance.parent = this;
	this.instance.setTransform(-78.5,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.5,-21,157,42);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logotxt();
	this.instance.parent = this;
	this.instance.setTransform(-78.5,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.5,-21,157,42);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,1123,843), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.941)").s().p("AD6CJQgQgFgKgHQgJgHgEgMQgFgLAAgQIAAidQAAgQAFgLQAEgLAJgIQAKgIAQgEQARgDAXAAQAYAAARADQAPAEALAIQAJAIAEALQAFALAAAQIAACdQAAAQgFALQgEAMgJAHQgLAHgPAFQgRADgYAAQgXAAgRgDgAEWhUQgDADAAAMIAACLQAAAMADAEQAEADAIgBQAKABADgDQADgEAAgMIAAiLQAAgMgDgDQgDgEgKAAQgIAAgEAEgAoQCJQgQgFgKgHQgJgHgFgMQgEgLAAgQIAAidQAAgQAEgLQAFgLAJgIQAKgIAQgEQAQgDAZAAQAXAAAQADQARAEAJAIQAKAIAFALQADALAAAQIAAArIhDAAIAAgiQAAgMgFgDQgCgEgJAAQgKAAgCAEQgFADAAAMIAACLQAAAMAFAEQACADAKgBQAJABACgDQAFgEAAgMIAAgkIBDAAIAAAtQAAAQgDALQgFAMgKAHQgJAHgRAFQgQADgXAAQgZAAgQgDgArRCJQgQgFgLgHQgJgHgEgMQgEgLgBgQIAAgZIBFAAIAAAQQAAAMAEAEQADADAJgBQAJABADgDQAEgEAAgMIAAgmIggAAQgVAAgLgCQgMgCgHgGQgJgHgEgOQgEgNgBgYIAAhkIBFAAIAABkQAAATAJAAIAXAAIAAh3IBEAAIAADXQAAAQgEALQgFAMgJAHQgKAHgQAFQgQADgYAAQgYAAgQgDgAK+CJIABiBIgBAAIgtCBIhAAAIAAkRIBAAAIAAB9IAAAAIAuh9IA/AAIAAERgAGRCJIAAkRIBwAAQAWAAAOALQAIAFAEAJQAFAJAAAMIAAApQAAAPgEAKQgGALgMAHQANAEAFANQAFAKAAAUIAAAyQAAAMgEAJQgFAIgIAGQgOALgWAAgAHTBWIAXAAQAIAAABgSIAAghQgBgPgIAAIgXAAgAHTgdIAXAAQAIAAABgPIAAgXQgBgTgIABIgXAAgABvCJIAAh0IgkAAIAAB0IhEAAIAAkRIBEAAIAABnIAkAAIAAhnIBEAAIAAERgAhOCJIgFguIgrAAIgGAuIhBAAIApkRIBmAAIAqERgAh4ApIAeAAIgPh6IgBAAgAlMCJIAAjeIg0AAIAAgzICtAAIAAAzIg0AAIAADeg");
	this.shape.setTransform(81.6,32.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(5,18.7,153.3,28.1), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC33").s().p("AiXBwQgMgDgJgGQgHgGgEgKQgDgJgBgNIAAiCQABgMADgJQAEgKAHgGQAJgGAMgEQAOgDAUAAQAUAAANADQANAEAJAGQAHAGAEAKQADAJAAAMIAACCQAAANgDAJQgEAKgHAGQgJAGgNADQgNAEgUAAQgUAAgOgEgAh/hGQgDADAAAKIAABzQAAAJADAEQADACAHAAQAIAAACgCQADgEAAgJIAAhzQAAgKgDgDQgCgCgIAAQgHAAgDACgALLBwIAAjgIB8AAIAAAqIhDAAIAAArIA4AAIAAAoIg4AAIAAA6IBDAAIAAApgAKABwIABhpIgBAAIglBpIg1AAIAAjgIA1AAIAABnIAAAAIAmhnIA0AAIAADggAHXBwIAAhfIgdAAIAABfIg5AAIAAjgIA5AAIAABVIAdAAIAAhVIA4AAIAADggADzBwIAAjgIB8AAIAAAqIhEAAIAAArIA4AAIAAAoIg4AAIAAA6IBEAAIAAApgAClBwIgmhzIAkhtIA8AAIgqBpIAtB3gABFBwIAAjgIA3AAIAADggAggBwIAsh3IgohpIA5AAIAlBtIgmBzgAkCBwIgUinIgBAAIgVCnIg3AAIAijgIBUAAIAiDggAmoBwIABhpIgBAAIgmBpIg0AAIAAjgIA1AAIgBBnIABAAIAmhnIA0AAIAADggAqhBwIAAjgIBgAAQASAAAMAJQAFAFAEAHQAEAHAAAKIAAA0QAAAUgEAKQgDAMgHAFQgGAFgLACQgIACgSAAIgaAAIAABOgAppgHIATAAQAHAAAAgPIAAghQAAgPgHAAIgTAAgArwBwIAAizIgdAAIAACzIg5AAIAAjgICOAAIAADgg");
	this.shape.setTransform(89,27);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(5.1,15.4,167.8,23.2), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.937)").s().p("ALECsQgQgEgKgHQgJgIgFgLQgEgLAAgQIAAieQAAgPAEgLQAFgMAJgHQAKgIAQgEQAQgEAZAAQAXAAAQAEQARAEAJAIQAKAHAFAMQADALAAAPIAAArIhDAAIAAgiQAAgLgFgEQgCgDgJAAQgKAAgCADQgFAEAAALIAACMQAAAMAFAEQACACAKAAQAJAAACgCQAFgEAAgMIAAgkIBDAAIAAAtQAAAQgDALQgFALgKAIQgJAHgRAEQgQAEgXAAQgZAAgQgEgAi4CsQgQgEgKgHQgIgIgFgLQgFgLAAgQIAAgZIBFAAIAAAQQAAAMAEAEQADACAJAAQAJAAADgCQAEgEAAgMIAAgmIggAAQgVAAgKgCQgNgCgIgGQgIgHgEgOQgFgOAAgXIAAhkIBFAAIAABkQAAASAJAAIAXAAIAAh2IBEAAIAADXQAAAQgEALQgFALgJAIQgKAHgQAEQgQAEgYAAQgYAAgRgEgApNCsQgQgEgKgHQgIgIgFgLQgFgLAAgQIAAieQAAgPAFgLQAFgMAIgHQAKgIAQgEQARgEAYAAQAYAAAQAEQAQAEAKAIQAJAHAFAMQAEALAAAPIAACeQAAAQgEALQgFALgJAIQgKAHgQAEQgQAEgYAAQgYAAgRgEgAowgxQgEAEAAALIAACMQAAAMAEAEQADACAJAAQAJAAADgCQAEgEAAgMIAAiMQAAgLgEgEQgDgDgJAAQgJAAgDADgAHZCsIABiAIgBAAIgtCAIhAAAIAAkQIBAAAIAAB8IAAAAIAuh8IBAAAIAAEQgAEXCsIgGgtIgrAAIgFAtIhBAAIAokQIBnAAIApEQgADsBNIAfAAIgPh6IgBAAgABHCsIAAjZIgkAAIAADZIhEAAIAAkQICsAAIAAEQgAlACsIgviNIAtiDIBHAAIgzB+IA3CSgAm2CsIAAkQIBEAAIAAEQgArXCsIAAjZIgkAAIAADZIhFAAIAAkQICuAAIAAEQgAGlh2QgNgEgIgIQgIgIgFgLQgFgMAAgOIA1AAQAAALAEAEQADADAJAAQAJAAADgDQAEgEAAgLIA1AAQAAAOgFAMQgFALgHAIQgJAIgNAEQgNAEgRAAQgRAAgNgEg");
	this.shape.setTransform(86.7,29.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(3.5,11.6,166.5,35.3), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC33").s().p("AUDAjIgBAAIACEIIiLAAIAApWICaAAIBTErIACAAIBTkrICaAAIAAJWIiLAAIACkIIgBAAIhkESgAkpAjIgBAAIACEIIiLAAIAApWICaAAIBTErIACAAIBTkrICZAAIAAJWIiKAAIACkIIgBAAIhkESgAr+EsQgkgJgVgRQgVgQgKgaQgJgYAAgiIAAlcQAAgjAJgXQAKgaAVgQQAVgSAkgHQAkgJA0AAQA0AAAlAJQAiAHAXASQAUAQAKAaQAJAXAAAjIAAFcQAAAigJAYQgKAagUAQQgXARgiAJQglAJg0gBQg0ABgkgJgArAi8QgJAIAAAaIAAE0QAAAaAJAIQAGAHAUAAQAUAAAHgHQAIgIAAgaIAAk0QAAgagIgIQgHgHgUAAQgUAAgGAHgA+sEsQgkgJgWgRQgUgQgKgaQgJgYAAgiIAAlcQAAgjAJgXQAKgaAUgQQAWgSAkgHQAjgJA1AAQA0AAAkAJQAjAHAXASQAUAQAKAaQAJAXAAAjIAAFcQAAAigJAYQgKAagUAQQgXARgjAJQgkAJg0gBQg1ABgjgJgA9ui8QgJAIAAAaIAAE0QAAAaAJAIQAHAHATAAQAUAAAHgHQAIgIAAgaIAAk0QAAgagIgIQgHgHgUAAQgTAAgHAHgAeBErIABkaIgBAAIhkEaIiMAAIAApWICNAAIgBESIABAAIBkkSICMAAIAAJWgAOxErIAApWICMAAIAAJWgAIcErIAApWICWAAIAADbIBBAAQAuAAAYAFQAbAEAQAOQATAPAJAeQAJAeAAA0IAACBQAAAbgJATQgKATgRANQgfAWgwAAgAKyC9IAtAAQAUABAAgoIAAhQQAAgpgUAAIgtAAgAFKErIAAj+IhQAAIAAD+IiWAAIAApWICWAAIAADhIBQAAIAAjhICWAAIAAJWgA0FErIAApWID/AAQAwAAAfAWQARANAJATQAKATAAAbIAACLQAAA0gJAdQgJAfgTAQQgQANgcAFQgWAEgvAAIhGAAIAADRgAxvgTIAyAAQAUgBAAgoIAAhaQAAgogUABIgyAAgA5hErIAApWIEsAAIAABuIiWAAIAAHog");
	this.shape.setTransform(223.8,72.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(17.6,41.1,412.4,61.9), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.937)").s().p("AhJChIAAgtIhkAAIAAAtIg/AAIAAhfIAbAAIAAjeICtAAIAADeIAbAAIAABfgAiNBCIAlAAIAAioIglAAgAHjgEIgBAAIABB4Ig/AAIAAkQIBGAAIAmCIIABAAIAliIIBGAAIAAEQIg/AAIABh4IAAAAIguB8gAsYB0QgQgEgKgIQgJgHgFgMQgEgLAAgPIAAieQAAgQAEgLQAFgLAJgIQAKgIAQgDQAQgEAYAAQAYAAAQAEQAQADAKAIQAKAIAEALQAEALAAAQIAAAsIhEAAIAAgjQAAgMgEgDQgDgEgJAAQgJAAgDAEQgEADAAAMIAACMQAAALAEAEQADADAJAAQAJAAADgDQAEgEAAgLIAAglIBEAAIAAAuQAAAPgEALQgEAMgKAHQgKAIgQAEQgQAEgYAAQgYAAgQgEgAMFB0IABiAIgBAAIgtCAIhAAAIAAkQIBAAAIAAB9IAAAAIAuh9IA/AAIAAEQgAFPB0IgGguIgrAAIgGAuIhBAAIApkQIBnAAIApEQgAEkAUIAfAAIgPh6IgBAAgACAB0IgviMIAtiEIBHAAIgyB/IA2CRgAALB0IAAkQIBDAAIAAEQgAlBB0IAAiAIAAAAIguCAIhAAAIAAkQIBBAAIgBB9IABAAIAth9IBAAAIAAEQgAoNB0IgviMIAtiEIBHAAIgyB/IA2CRgAqCB0IAAkQIBDAAIAAEQg");
	this.shape.setTransform(91.1,34.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(7.4,18.7,167.5,32.3), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,28,49), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,164,164), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,350,91), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.941)").s().p("ABrEIQgfgIgTgPQgSgOgJgWQgIgVAAgeIAAkzQAAgdAIgVQAJgXASgOQATgPAfgIQAggHAuAAQAuAAAgAHQAeAIAUAPQASAOAJAXQAHAVAAAdIAAEzQAAAegHAVQgJAWgSAOQgUAPgeAIQggAHguAAQguAAgggHgACiikQgIAGAAAXIAAEPQAAAXAIAHQAGAFARAAQARAAAGgFQAIgHAAgXIAAkPQAAgXgIgGQgGgGgRAAQgRAAgGAGgAlaByQAAgeAMgYQAMgZAXgRQAXgSBDgeIAYgLIAKgFIAMgIQAKgNAAgUIAAgwQAAgXgHgGQgGgGgSAAQgRAAgGAGQgHAGAAAXIAAAnIiAAAIAAg5QAAgdAHgVQAJgXASgOQATgPAegIQAfgHAsAAQApAAAeAHQAcAIASAPQATAOAIAXQAJAVAAAdIAABcQAAAfgNAXQgKAUgWAPQgWARggAQIhCAjIgKAJQgKAMAAAYIAAARIC+AAIAABqIlAABg");
	this.shape.setTransform(34.7,27.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,69.5,54.3), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.937)").s().p("ABtEIQgfgIgTgPQgSgOgJgWQgHgVAAgeIAAkzQAAgdAHgVQAJgXASgOQATgPAfgIQAggHAuAAQAuAAAgAHQAfAIATAPQATAOAIAXQAIAVAAAdIAAEzQAAAegIAVQgIAWgTAOQgTAPgfAIQggAHguAAQguAAgggHgACkikQgIAGAAAXIAAEPQAAAXAIAHQAGAFARAAQARAAAGgFQAIgHAAgXIAAkPQAAgXgIgGQgGgGgRAAQgRAAgGAGgAkIEIQgfgIgSgPQgSgOgJgWQgJgVAAgeIAAgsICFAAIAAAaQAAAXAGAHQAGAFASAAQASAAAGgFQAHgHAAgXIAAhEQgBgdgQAAIgnAAIAAhgIAnAAQAQAAABgcIAAgyQAAgXgHgGQgGgGgSAAQgSAAgGAGQgGAGAAAXIAAAaIiFAAIAAgsQAAgdAJgVQAJgXASgOQASgPAfgIQAggHAuAAQAuAAAgAHQAeAIAUAQQASAOAIAWQAJAVAAAdIAAA4QAAAegJATQgKAZgYAKQAXAHAKAaQAKAXAAAjIAABMQAAAdgIAUQgHAVgSAPQgSARggAIQghAHgvAAQguAAgggHg");
	this.shape.setTransform(35,27.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,69.9,54.3), null);


(lib.Symbol18copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.937)").s().p("AAOEIQgegIgTgPQgTgOgIgWQgIgVAAgeIAAkzQAAgdAIgVQAIgXATgOQATgPAegIQAggHAtAAQAuAAAhAHQAeAIATAPQATAOAIAXQAIAVAAAdIAAEzQAAAegIAVQgIAWgTAOQgTAPgeAIQghAHguAAQgtAAgggHgABEikQgHAGAAAXIAAEPQAAAXAHAHQAHAFAQAAQASAAAGgFQAIgHgBgXIAAkPQABgXgIgGQgGgGgSAAQgQAAgHAGgAj9EIIAAoPICEAAIAAIPg");
	this.shape.setTransform(45.8,63.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18copy, new cjs.Rectangle(20.4,36.1,50.8,54.2), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cofii();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,65,58), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gamepad();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,61,38), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.light();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,30,46), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mikrovoln();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,70,46), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nout();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,64,53), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plita();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,50,69), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.smartphone();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,39,65), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.stirka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,48,66), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wifi();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.771,0.771);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,42.4,34.7), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wifirou();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,78,40), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bubles();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,970,833), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand
	this.instance = new lib.hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,1218,1049), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol35();
	this.instance.parent = this;
	this.instance.setTransform(561.5,421.5,1,1,0,0,0,561.5,421.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:484},99).to({x:561.5},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1123,843);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol27();
	this.instance.parent = this;
	this.instance.setTransform(14,24.5,1,1,0,0,0,14,24.5);

	this.instance_1 = new lib.Layer13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-16,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},29).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleY:0.59,y:24.6},2,cjs.Ease.get(1)).to({_off:true},1).wait(5).to({_off:false},0).to({scaleY:1,y:24.5},2,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28,49);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol26();
	this.instance.parent = this;
	this.instance.setTransform(93,53.5,1,1,0,0,0,14,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(82,82,1,1,0,0,0,82,82);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,164,164), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(175,45.5,1,1,0,0,0,175,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06,x:175.1,y:45.6},4).to({scaleX:1,scaleY:1,x:175,y:45.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350,91);


(lib.Symbol17copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.949)").s().p("AhhAuIAAhcIDDAAIAABcg");
	this.shape.setTransform(5.2,63.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(45.1,63.2,1,1,0,0,0,35,27.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17copy2, new cjs.Rectangle(-4.6,36.1,84.6,54.2), null);


(lib.Symbol17copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.949)").s().p("AhhAuIAAhcIDDAAIAABcg");
	this.shape.setTransform(1.5,63.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(47.7,63.2,1,1,0,0,0,34.7,27.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17copy, new cjs.Rectangle(-8.3,36.1,90.8,54.2), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.949)").s().p("AhhAuIAAhcIDDAAIAABcg");
	this.shape.setTransform(5.2,63.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.Symbol18copy();
	this.instance.parent = this;
	this.instance.setTransform(45.2,54.5,1,1,0,0,0,45.7,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-4.6,36.1,75.3,54.2), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wifirou.png
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(224.4,750.8,1,1,0,0,0,39,20);

	this.instance_1 = new lib.Symbol17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(220.2,752,0.122,0.866,0,0,0,33.2,63.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({regY:20.1,scaleX:0.16,y:750.9,alpha:0},5).to({_off:true},1).wait(30).to({_off:false},0).to({regY:20,scaleX:1,y:750.8,alpha:1},5).wait(225));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).to({regX:33,scaleX:0.87,x:220.1,alpha:1},4).wait(21).to({regX:33.2,scaleX:0.12,x:220.2,alpha:0},4).to({_off:true},1).wait(230));

	// wifi.png
	this.instance_2 = new lib.Symbol8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(966.2,231.4,1,1,0,0,0,21.2,17.4);

	this.instance_3 = new lib.Symbol17();
	this.instance_3.parent = this;
	this.instance_3.setTransform(962.5,231.7,0.122,0.662,0,0,0,33.3,63.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({scaleX:0.34,alpha:0},5).to({_off:true,regX:33.3,regY:63.5,scaleX:0.12,scaleY:0.66,x:962.5,y:231.7},1).wait(30).to({_off:false,regX:21.2,regY:17.4,scaleX:0.34,scaleY:1,x:966.2,y:231.4},0).to({scaleX:1,alpha:1},5).wait(212));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(37).to({_off:false},1).to({regX:33.1,scaleX:0.66,alpha:1},4).wait(21).to({regX:33.3,scaleX:0.12,alpha:0},4).to({_off:true},1).wait(217));

	// stirka.png
	this.instance_4 = new lib.Symbol9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(795,462.4,1,1,0,0,0,24,33);

	this.instance_5 = new lib.Symbol17copy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(791.6,465.6,0.1,0.886,0,0,0,38,63.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(41).to({scaleX:0.21,x:795.1,alpha:0},5).to({_off:true,regX:38,regY:63.4,scaleX:0.1,scaleY:0.89,x:791.6,y:465.6},1).wait(30).to({_off:false,regX:24,regY:33,scaleX:0.21,scaleY:1,x:795.1,y:462.4},0).to({scaleX:1,x:795,alpha:1},5).wait(203));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(46).to({_off:false},1).to({regX:38.1,regY:63.3,scaleX:0.89,y:465.5,alpha:1},4).wait(21).to({regX:38,regY:63.4,scaleX:0.1,y:465.6,alpha:0},4).to({_off:true},1).wait(208));

	// smartphone.png
	this.instance_6 = new lib.Symbol10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(120.5,601.5,1,1,0,0,0,19.5,32.5);

	this.instance_7 = new lib.Symbol17copy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(116.2,601.5,0.1,0.886,0,0,0,38,63.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(26).to({scaleX:0.33,x:120.6,alpha:0},5).to({_off:true},1).wait(30).to({_off:false},0).to({scaleX:1,x:120.5,alpha:1},5).wait(218));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(32).to({_off:false},0).to({regX:38.1,regY:63.3,scaleX:0.89,x:116.3,y:601.4,alpha:1},4).wait(21).to({regX:38,regY:63.4,scaleX:0.1,x:116.2,y:601.5,alpha:0},4).to({_off:true},1).wait(223));

	// plita.png copy
	this.instance_8 = new lib.Symbol11();
	this.instance_8.parent = this;
	this.instance_8.setTransform(630.5,695.7,1,1,0,0,0,25,34.5);

	this.instance_9 = new lib.Symbol17();
	this.instance_9.parent = this;
	this.instance_9.setTransform(624,696.2,0.22,1.035,0,0,0,33.1,63.4);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(61).to({scaleX:0.31,x:630.6,alpha:0},5).to({_off:true},1).wait(30).to({_off:false},0).to({scaleX:1,x:630.5,alpha:1},5).wait(183));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(67).to({_off:false},0).to({regX:33,scaleX:1.03,x:623.9,alpha:1},4).wait(21).to({regX:33.1,scaleX:0.22,x:624,alpha:0},4).to({_off:true},1).wait(188));

	// plita.png
	this.instance_10 = new lib.Symbol11();
	this.instance_10.parent = this;
	this.instance_10.setTransform(223,261.9,1,1,0,0,0,25,34.5);

	this.instance_11 = new lib.Symbol17();
	this.instance_11.parent = this;
	this.instance_11.setTransform(216.5,262.5,0.22,1.035,0,0,0,33.1,63.4);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(91).to({scaleX:0.31,x:223.1,alpha:0},5).to({_off:true},1).wait(30).to({_off:false},0).to({scaleX:1,x:223,alpha:1},5).wait(153));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(97).to({_off:false},0).to({regX:33,scaleX:1.03,x:216.4,alpha:1},4).wait(21).to({regX:33.1,scaleX:0.22,x:216.5,alpha:0},4).to({_off:true},1).wait(158));

	// nout.png
	this.instance_12 = new lib.Symbol12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(479.4,110.5,1,1,0,0,0,32,26.5);

	this.instance_13 = new lib.Symbol17copy();
	this.instance_13.parent = this;
	this.instance_13.setTransform(477.9,110,0.1,0.886,0,0,0,38,63.4);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(121).to({scaleX:0.2,x:479.5,alpha:0},5).to({_off:true},1).wait(30).to({_off:false},0).to({scaleX:1,x:479.4,alpha:1},5).wait(123));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(127).to({_off:false},0).to({regX:38.1,regY:63.3,scaleX:0.89,alpha:1},4).wait(21).to({regX:38,regY:63.4,scaleX:0.1,alpha:0},4).to({_off:true},1).wait(128));

	// mikrovoln.png
	this.instance_14 = new lib.Symbol13();
	this.instance_14.parent = this;
	this.instance_14.setTransform(144,434.4,1,1,0,0,0,35,23);

	this.instance_15 = new lib.Symbol17copy2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(142.5,437,0.096,0.778,0,0,0,39.2,64.2);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(51).to({scaleX:0.14,x:144.1,alpha:0},5).to({_off:true,regX:39.2,regY:64.2,scaleX:0.1,scaleY:0.78,x:142.5,y:437},1).wait(30).to({_off:false,regX:35,regY:23,scaleX:0.14,scaleY:1,x:144.1,y:434.4},0).to({scaleX:1,x:144,alpha:1},5).wait(193));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(56).to({_off:false},1).to({scaleX:0.78,x:142.4,alpha:1},4).wait(21).to({scaleX:0.1,x:142.5,alpha:0},4).to({_off:true},1).wait(198));

	// light.png
	this.instance_16 = new lib.Symbol14();
	this.instance_16.parent = this;
	this.instance_16.setTransform(273,89.6,1,1,0,0,0,15,23);

	this.instance_17 = new lib.Symbol17copy2();
	this.instance_17.parent = this;
	this.instance_17.setTransform(271.2,88.5,0.073,0.591,0,0,0,39.1,64.3);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(157).to({scaleX:0.43,x:273.1,alpha:0},5).to({_off:true},1).wait(30).to({_off:false},0).to({scaleX:1,x:273,alpha:1},5).wait(87));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(163).to({_off:false},0).to({regX:39.4,regY:64.2,scaleX:0.59,alpha:1},4).wait(21).to({regX:39.1,regY:64.3,scaleX:0.07,alpha:0},4).to({_off:true},1).wait(92));

	// gamepad.png
	this.instance_18 = new lib.Symbol15();
	this.instance_18.parent = this;
	this.instance_18.setTransform(884.5,645,1,1,0,0,0,30.5,19);

	this.instance_19 = new lib.Symbol17();
	this.instance_19.parent = this;
	this.instance_19.setTransform(881.2,646.6,0.163,0.977,0,0,0,33.1,63.5);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(206).to({scaleX:0.21,alpha:0},5).to({_off:true,regX:33.1,regY:63.5,scaleX:0.16,scaleY:0.98,x:881.2,y:646.6},1).wait(30).to({_off:false,regX:30.5,regY:19,scaleX:0.21,scaleY:1,x:884.5,y:645},0).to({scaleX:1,alpha:1},5).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(211).to({_off:false},1).to({scaleX:0.98,x:881,alpha:1},4).wait(21).to({scaleX:0.16,x:881.2,alpha:0},4).to({_off:true},1).wait(43));

	// cofii.png copy
	this.instance_20 = new lib.Symbol16();
	this.instance_20.parent = this;
	this.instance_20.setTransform(24.7,230.4,0.799,0.799,0,0,0,32.5,29);

	this.instance_21 = new lib.Symbol17copy2();
	this.instance_21.parent = this;
	this.instance_21.setTransform(24.6,231.9,0.089,0.722,0,0,0,39.4,64.3);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(243).to({regX:32.7,scaleX:0.16,alpha:0},5).to({_off:true},1).wait(30).to({_off:false},0).to({regX:32.5,scaleX:0.8,alpha:1},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(249).to({_off:false},0).to({regX:39.3,scaleX:0.72,alpha:1},4).wait(21).to({regX:39.4,scaleX:0.09,alpha:0},4).to({_off:true},1).wait(6));

	// cofii.png
	this.instance_22 = new lib.Symbol16();
	this.instance_22.parent = this;
	this.instance_22.setTransform(703.7,205.4,1,1,0,0,0,32.5,29);

	this.instance_23 = new lib.Symbol17copy2();
	this.instance_23.parent = this;
	this.instance_23.setTransform(703.7,207.3,0.111,0.903,0,0,0,39.1,64.3);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(228).to({scaleX:0.2,alpha:0},5).to({_off:true},1).wait(30).to({_off:false},0).to({scaleX:1,alpha:1},5).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(234).to({_off:false},0).to({regX:39.4,regY:64.2,scaleX:0.9,y:207.2,alpha:1},4).wait(21).to({regX:39.1,regY:64.3,scaleX:0.11,y:207.3,alpha:0},4).to({_off:true},1).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,66.6,988.7,704.2);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ring();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Vector Smart Object.png
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(479,466.5,1,1,0,0,0,485,416.5);
	this.instance_1.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-6,0,1028,928), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol24();
	this.instance.parent = this;
	this.instance.setTransform(82,82,1,1,0,0,0,82,82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({rotation:2.2,x:82.1,y:82.1},5).to({rotation:0,x:82,y:82},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164,164);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuRUjMAAAgpFIckAAMAAAApFg");
	mask.setTransform(81.4,117.5);

	// Layer 4
	this.instance = new lib.Symbol33();
	this.instance.parent = this;
	this.instance.setTransform(82.3,-328.6,1,1,0,0,0,81.7,28.2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).to({y:8.9},4).wait(117).to({y:421.4},3).to({_off:true},1).wait(3));

	// Layer 5
	this.instance_1 = new lib.Symbol32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(82.1,-285.8,1,1,0,0,0,88.8,23.2);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(87).to({_off:false},0).to({y:51.7},4).wait(119).to({y:464.2},3).to({_off:true},1).wait(3));

	// Layer 6
	this.instance_2 = new lib.Symbol31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(82.4,-227.7,1,1,0,0,0,86.7,28.2);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({_off:false},0).to({y:109.8},4).wait(121).to({y:522.3},3).to({_off:true},1).wait(3));

	// Layer 7
	this.instance_3 = new lib.Symbol30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(414.6,162.9,1,1,0,0,0,223.9,62);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(92).to({_off:false},0).to({x:-235.1},60).wait(1).to({x:414.6},0).to({x:-235.1},57).to({_off:true},1).wait(6));

	// Layer 8
	this.instance_4 = new lib.Symbol29();
	this.instance_4.parent = this;
	this.instance_4.setTransform(80.5,-111.4,1,1,0,0,0,91.2,28.2);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(83).to({_off:false},0).to({y:226.1},4).wait(123).to({y:638.6},3).to({_off:true},1).wait(3));

	// Layer 1
	this.instance_5 = new lib.Symbol28();
	this.instance_5.parent = this;
	this.instance_5.setTransform(82,82,1,1,0,0,0,82,82);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(79).to({rotation:360,x:307},5).wait(127).to({rotation:720,x:82},5).wait(1));

	// logotxt.png
	this.instance_6 = new lib.logotxt();
	this.instance_6.parent = this;
	this.instance_6.setTransform(4,186);

	this.instance_7 = new lib.Tween1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(82.5,207);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-118.5,207);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_6,this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},79).to({state:[{t:this.instance_8}]},5).to({state:[{t:this.instance_8}]},127).to({state:[{t:this.instance_7}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(79).to({_off:false},0).to({_off:true,x:-118.5},5).wait(127).to({_off:false,x:82.5},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(79).to({_off:false},5).wait(127).to({startPosition:0},0).to({_off:true,x:82.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164,228);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(514.7,401,1,1,0,0,0,493.7,383);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(517,464,1,1,0,0,0,511,464);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,1028,928), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(589,376,1,1,0,0,0,82,82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.instance_1 = new lib.Iphone();
	this.instance_1.parent = this;
	this.instance_1.setTransform(486,224);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 2
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(599.8,385.7,1,1,0,0,0,514,464);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(583.4,574.2,1,1,0,0,0,609,524.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-25.6,-78.3,1218,1177), null);


// stage content:
(lib._3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// button
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(504,703.5,1,1,0,0,0,175,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hand
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(530,527.8,1,1,0,0,0,609,524.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// back
	this.instance_2 = new lib.Symbol34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(553.5,392.5,1,1,0,0,0,561.5,421.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(407.4,309,1219.6,1177);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1485525288457", id:"back"},
		{src:"images/bubles.png?1485525288457", id:"bubles"},
		{src:"images/Button.png?1485525288457", id:"Button"},
		{src:"images/cofii.png?1485525288457", id:"cofii"},
		{src:"images/gamepad.png?1485525288457", id:"gamepad"},
		{src:"images/hand.png?1485525288457", id:"hand"},
		{src:"images/Iphone.png?1485525288457", id:"Iphone"},
		{src:"images/Layer13.png?1485525288457", id:"Layer13"},
		{src:"images/Layer14.png?1485525288457", id:"Layer14"},
		{src:"images/Layer5.png?1485525288457", id:"Layer5"},
		{src:"images/light.png?1485525288457", id:"light"},
		{src:"images/logotxt.png?1485525288457", id:"logotxt"},
		{src:"images/mikrovoln.png?1485525288457", id:"mikrovoln"},
		{src:"images/nout.png?1485525288457", id:"nout"},
		{src:"images/plita.png?1485525288457", id:"plita"},
		{src:"images/ring.png?1485525288457", id:"ring"},
		{src:"images/smartphone.png?1485525288457", id:"smartphone"},
		{src:"images/stirka.png?1485525288457", id:"stirka"},
		{src:"images/wifi.png?1485525288457", id:"wifi"},
		{src:"images/wifirou.png?1485525288457", id:"wifirou"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;