(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,690,332);


(lib.mish = function() {
	this.initialize(img.mish);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,70);


(lib.muha2_01 = function() {
	this.initialize(img.muha2_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,10);


(lib.muha2_03 = function() {
	this.initialize(img.muha2_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,10);


(lib.muha2_04 = function() {
	this.initialize(img.muha2_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,32);


(lib.muha_01 = function() {
	this.initialize(img.muha_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,128);


(lib.muha_04 = function() {
	this.initialize(img.muha_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,126);


(lib.muha_07 = function() {
	this.initialize(img.muha_07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,139);


(lib.muha_12 = function() {
	this.initialize(img.muha_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,239);


(lib.muha_15 = function() {
	this.initialize(img.muha_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,251);


(lib.muha_19 = function() {
	this.initialize(img.muha_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,178);


(lib.muha_22 = function() {
	this.initialize(img.muha_22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,101);


(lib.muhoboyka = function() {
	this.initialize(img.muhoboyka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,233);


(lib.rot = function() {
	this.initialize(img.rot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,13);// helper functions:

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


(lib.Символ147 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAnH+IgLgpIg2AAIgMApIgkAAIAuiVQABgEAEgDQADgCAFAAIAfAAQAGAAACACQADADACAEIAuCVgAAUG6IgRhAIgFAAIgRBAIAnAAgAhGDgIgDgbQAJgBAGgEQAFgEADgHQAFgMACgSQADgRACgiQADgiAiAAIBCAAIAACeIgjAAIAAiFIgUAAQgIAAgCADQgEAEAAAGQgDAjgDATQgEAXgEAKQgGATgOAJQgKAGgOAAIgIgBgAAng9IAAhfQgBgKADgLIgCAAQgDAKgGAKIg0BgIgjAAIAAifIAhAAIAABdIgBAWIABAAQACgIAHgNIA1heIAjAAIAACfgAgcldQgNgFgHgJQgHgKgEgPQgEgQAAgXQAAgWAEgQQAEgRAHgIQAPgTAkAAQAbAAAUAFIgDAaIgsgBQgIABgGACQgGADgDAFQgDAGgBAKQgCAKAAAPQAAAPACAKQABALADAFQAHALAQAAQAVAAAagCIADAZQgKAEgMACQgNABgPAAQgSAAgNgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ147, new cjs.Rectangle(-7.4,-51,14.9,102), null);


(lib.Символ146 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AAnH+IgLgpIg2AAIgMApIgkAAIAuiVQABgEAEgDQADgCAFAAIAfAAQAGAAACACQADADACAEIAuCVgAAUG6IgRhAIgFAAIgRBAIAnAAgAhGDgIgDgbQAJgBAGgEQAFgEADgHQAFgMACgSQADgRACgiQADgiAiAAIBCAAIAACeIgjAAIAAiFIgUAAQgIAAgCADQgEAEAAAGQgDAjgDATQgEAXgEAKQgGATgOAJQgKAGgOAAIgIgBgAAng9IAAhfQgBgKADgLIgCAAQgDAKgGAKIg0BgIgjAAIAAifIAhAAIAABdIgBAWIABAAQACgIAHgNIA1heIAjAAIAACfgAgcldQgNgFgHgJQgHgKgEgPQgEgQAAgXQAAgWAEgQQAEgRAHgIQAPgTAkAAQAbAAAUAFIgDAaIgsgBQgIABgGACQgGADgDAFQgDAGgBAKQgCAKAAAPQAAAPACAKQABALADAFQAHALAQAAQAVAAAagCIADAZQgKAEgMACQgNABgPAAQgSAAgNgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ146, new cjs.Rectangle(-7.4,-51,14.9,102), null);


(lib.Символ144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AiTztIEnAAMAAAAnbIknAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ144, new cjs.Rectangle(-15.7,-127.2,31.6,254.4), null);


(lib.Символ143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EDA800").ss(2,1,1).p("AiTztIEnAAMAAAAnbIknAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ143, new cjs.Rectangle(-15.7,-127.2,31.6,254.4), null);


(lib.Символ142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AkCinIIFCnIoFCog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ142, new cjs.Rectangle(-25.9,-16.7,51.9,33.6), null);


(lib.Символ139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF0000","#1EFF00"],[0,1],0,-124.1,0,124.1).s().p("AiTTuMAAAgnbIEnAAMAAAAnbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ139, new cjs.Rectangle(-14.7,-126.2,29.6,252.4), null);


(lib.Символ123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhhgKQBjArBggr");
	this.shape.setTransform(0,-5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2.5,1,1).p("AAAiRIAAAAQApAAAdAdQAXAXAFAeQAAADABAEQAAAFAAAFIAABdQAAApgdAdQgdAdgpAAIAAAAQgoAAgdgdQgdgdAAgpIAAhdQAAgFAAgFQABgEAAgDQAFgeAXgXQAdgdAoAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ123, new cjs.Rectangle(-11.1,-15.8,22.4,31.7), null);


(lib.Символ121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AivBxIgDgoIh6AAIgDAoIgcAAIAAhGIATAAQATgtAFhGQABgQAMgLQALgLATAAIBLAAIAACZIAYAAIAABGgAj2hNQgDAEgBAIQgDAngFAYQgJAggHANIBAAAIAAh8IgYAAQgIAAgEAEgANhBJIgBAAIAAi3IAoAAIAABFIAbAAQAmAAAOAMQAIAGADAMQAEALAAARQAAAhgOAMQgHAGgLAEQgLADgRAAQgwAAgZgCgAOIArIAbAAQAQABAFgGQAFgFAAgSQAAgQgFgGQgFgGgQAAIgbAAgAFwBJIgBAAIAAi3IApAAIAABFIAaAAQAmAAAPAMQAHAGADAMQAEALAAARQAAAhgOAMQgGAGgMAEQgLADgRAAQgvAAgagCgAGYArIAaAAQAIAAAGgBQAFgBACgDQAFgFAAgSQAAgQgFgGQgCgDgGgCQgFgBgIAAIgaAAgAqABJIAAi3QAngCAeAAQAkAAAOAKQAPAKAAAcQAAAKgCAHQgCAIgEAFQgHAKgRACIAAABQAUACAJAMQAEAGACAIQADAIAAAMQAAAcgPAKQgHAEgMAEQgMACgRAAQgyAAgbgCgApZAsIAugBQAFgBADgCQADgDACgFQABgFAAgIQAAgQgGgFQgGgGgSAAIgeAAgApZgjIAeAAQAPAAAFgFQAGgEAAgOQAAgOgGgFQgGgEgQAAIgcgBgAnNBAQgGgFgCgIQgDgGAAgIIAAhvQAAgIADgHQADgGAFgGQALgKASAAQAoAAAtADIgBAeIhHAAQgHAAgDADQgDADAAAIIAAAbIBJAAIAAAeIhJAAIAAAjQAAAGADAEQADADAHAAIBHAAIABAeQgZADg8AAQgSgBgLgJgAJeBJIAAi3IAnAAIAACZIAzAAIAAiZIAnAAIAACZIAzAAIAAiZIAnAAIAAC3gAIPBJIAAi3IApAAIAAC3gAEmBJIgGiXIgEAAIgcBwQgDANgNABIgbAAQgNgBgDgNIgdhwIgEAAIgFCXIgmAAIAGinQABgPAOgBIAoAAQAGAAAEAEQAEADACAHIAbB0IADAAIAbh0QACgHAEgDQAEgEAGAAIAoAAQAOABABAPIAHCngAgJBJIAAhtQAAgMACgMIgCAAQgEALgGAMIg+BuIgoAAIAAi3IAmAAIAABsQAAALgCAOIACAAQADgLAHgNIA/htIAnAAIAAC3gAq8BJIgOgxIg/AAIgNAxIgqAAIA1isQACgEAEgEQADgCAGgBIAmAAQAFABAEACQAEACABAGIA1CsgArSgFIgUhKIgHAAIgTBKIAuAAgAt8BJIAAhRIhAAAIAABRIgpAAIAAi3IApAAIAABGIBAAAIAAhGIApAAIAAC3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ121, new cjs.Rectangle(-99.8,-11.3,199.6,22.6), null);


(lib.Символ88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC01").s().p("AivBxIgDgoIh6AAIgDAoIgcAAIAAhGIATAAQATgtAFhGQABgQAMgLQALgLATAAIBLAAIAACZIAYAAIAABGgAj2hNQgDAEgBAIQgDAngFAYQgJAggHANIBAAAIAAh8IgYAAQgIAAgEAEgANhBJIgBAAIAAi3IAoAAIAABFIAbAAQAmAAAOAMQAIAGADAMQAEALAAARQAAAhgOAMQgHAGgLAEQgLADgRAAQgwAAgZgCgAOIArIAbAAQAQABAFgGQAFgFAAgSQAAgQgFgGQgFgGgQAAIgbAAgAFwBJIgBAAIAAi3IApAAIAABFIAaAAQAmAAAPAMQAHAGADAMQAEALAAARQAAAhgOAMQgGAGgMAEQgLADgRAAQgvAAgagCgAGYArIAaAAQAIAAAGgBQAFgBACgDQAFgFAAgSQAAgQgFgGQgCgDgGgCQgFgBgIAAIgaAAgAqABJIAAi3QAngCAeAAQAkAAAOAKQAPAKAAAcQAAAKgCAHQgCAIgEAFQgHAKgRACIAAABQAUACAJAMQAEAGACAIQADAIAAAMQAAAcgPAKQgHAEgMAEQgMACgRAAQgyAAgbgCgApZAsIAugBQAFgBADgCQADgDACgFQABgFAAgIQAAgQgGgFQgGgGgSAAIgeAAgApZgjIAeAAQAPAAAFgFQAGgEAAgOQAAgOgGgFQgGgEgQAAIgcgBgAnNBAQgGgFgCgIQgDgGAAgIIAAhvQAAgIADgHQADgGAFgGQALgKASAAQAoAAAtADIgBAeIhHAAQgHAAgDADQgDADAAAIIAAAbIBJAAIAAAeIhJAAIAAAjQAAAGADAEQADADAHAAIBHAAIABAeQgZADg8AAQgSgBgLgJgAJeBJIAAi3IAnAAIAACZIAzAAIAAiZIAnAAIAACZIAzAAIAAiZIAnAAIAAC3gAIPBJIAAi3IApAAIAAC3gAEmBJIgGiXIgEAAIgcBwQgDANgNABIgbAAQgNgBgDgNIgdhwIgEAAIgFCXIgmAAIAGinQABgPAOgBIAoAAQAGAAAEAEQAEADACAHIAbB0IADAAIAbh0QACgHAEgDQAEgEAGAAIAoAAQAOABABAPIAHCngAgJBJIAAhtQAAgMACgMIgCAAQgEALgGAMIg+BuIgoAAIAAi3IAmAAIAABsQAAALgCAOIACAAQADgLAHgNIA/htIAnAAIAAC3gAq8BJIgOgxIg/AAIgNAxIgqAAIA1isQACgEAEgEQADgCAGgBIAmAAQAFABAEACQAEACABAGIA1CsgArSgFIgUhKIgHAAIgTBKIAuAAgAt8BJIAAhRIhAAAIAABRIgpAAIAAi3IApAAIAABGIBAAAIAAhGIApAAIAAC3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ88, new cjs.Rectangle(-99.8,-11.3,199.6,22.6), null);


(lib.Символ83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fon();
	this.instance.parent = this;
	this.instance.setTransform(-370.8,-192.4,1.091,1.091,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ83, new cjs.Rectangle(-381.7,-192.4,763.7,385), null);


(lib.Символ82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("An4DBIgEgzQAQgDALgHQAJgGAHgPQAIgXAEggQAFghAFg+QAFhBBBAAIB8AAIAAEoIhCAAIAAj5IgmAAQgNAAgGAHQgHAGgBAMQgGBCgFAjQgIArgGARQgNAkgZAQQgUANgbAAIgOgBgAitCxQgJgIgEgLQgEgLgBgOIAAizQABgNAEgLQAFgLAIgIQASgQAdAAQBCAABHAEIgDAxIhxAAQgLAAgFAFQgEAFgBAMIAAAsIB3AAIAAAvIh3AAIAAA5QABAMAEAFQAFAGALAAIBxAAIADAwQgnAEhiAAQgeAAgRgQgANCDAIAAixQAAgTAFgUIgEAAQgGATgLATIhkCyIhBAAIAAkoIA+AAIAACtQAAATgCAWIACAAQAFgQAMgWIBliwIBAAAIAAEogAIODAIAAiFIhpAAIAACFIhBAAIAAkoIBBAAIAABxIBpAAIAAhxIBBAAIAAEogADlDAIAAj5IhoAAIAAD5IhCAAIAAkoIDrAAIAAEogAuADAIAAkoIBAAAIAAD5IBRAAIAAj5IBAAAIAAD5IBSAAIAAj5IBAAAIAAEogAg3iMQgOAAAAgOIAAgZQAAgOAOAAIAVAAQAOAAAAAOIAAAZQAAAOgOAAgAiFiMQgOAAAAgOIAAgZQAAgOAOAAIAVAAQAOAAAAAOIAAAZQAAAOgOAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ82, new cjs.Rectangle(-89.7,-19.4,179.5,38.8), null);


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AouDBIgFgzQARgDAKgHQAKgGAGgPQAJgXAEggIAEgaIAAgEIAGhBQAFhBBBAAIB8AAIAAEoIhCAAIAAj5IgmAAQgNAAgGAHQgHAGgBAMIgFA6IgBAEIgFAnQgIArgGARQgNAkgZAQQgUANgbAAIgOgBgAjjCxQgJgIgEgLQgFgLAAgOIAAizQAAgNAFgLQAEgLAJgIQASgQAdAAQBBAABJAEIgDAxIhyAAQgLAAgFAFQgFAFAAAMIAAAsIB3AAIAAAvIh3AAIAAA5QAAAMAFAFQAFAGALAAIByAAIADAwQgoAEhiAAQgeAAgRgQgAORDAQgNAAgFgFQgEgFAAgNIAAgUQAAgNAEgFQAFgEANAAIAPAAQAMAAAFAEQAFAFAAANIAAAUQAAANgFAFQgFAFgMAAgAL6DAIAAixQAAgTAEgUIgDAAQgGATgLATIhkCyIhBAAIAAkoIA+AAIAACtQAAATgDAWIADAAQAFgQAMgWIBkiwIBBAAIAAEogAHjDAIgVhOIhmAAIgWBOIhDAAIBWkXQACgHAGgFQAGgFAJAAIA9AAQAKAAAFAEQAGAFACAIIBWEXgAHAA/Iggh2IgLAAIggB2IBLAAgACvDAIAAj5IhoAAIAAD5IhCAAIAAkoIDrAAIAAEogAu3DAIAAkoIBAAAIAAD5IBSAAIAAj5IBAAAIAAD5IBSAAIAAj5IBAAAIAAEogAN/BhIgFhDIgBiIIA/AAIgCCIIgFBDgAKiiCQgNgFgKgKQgUgUADgbIArAAQgCAjAeAAQAPAAAHgJQAHgIgBgSIArAAQADAbgTAUQgKAKgOAFQgNAEgSAAQgRAAgOgEgAhtiMQgOAAAAgOIAAgZQAAgOAOAAIAVAAQAOAAAAAOIAAAZQAAAOgOAAgAi7iMQgOAAAAgOIAAgZQAAgOAOAAIAVAAQAOAAAAAOIAAAZQAAAOgOAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ78, new cjs.Rectangle(-95.2,-19.4,190.4,38.8), null);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6633").s().p("AN7BzIgCiOIA/AAIgCCOgAL6BzIAAgVQAAgUAEgUIgDAAQgGATgLAUIgMAWIg2AAIBQiMIBBAAIAACMgAJFBzIAAiMIA+AAIAACMgAG5BzIgZhcIgLAAIgZBcIg9AAIAmh7QACgHAGgFQAGgFAJAAIA9AAQAKAAAFAEQAGAFACAIIAmB7gACvBzIAAheIhoAAIAABeIhCAAIAAiMIDrAAIAACMgAj1BzIAAhTQAAgNAFgLQAEgKAJgIQASgQAdAAQBBAABJAEIgDAwIhyAAQgLAAgFAFQgFAFAAAMIAAAtIB3AAIAAAWgAlxBzIAAheIgmAAQgNAAgGAHQgHAGgBAMIgFA2IAAAFIgBAEIgBAGIg/AAIABgGIAAgEIABgFIAFg9QAFhABBAAIB8AAIAACMgAqTBzIAAiMIBAAAIAACMgAslBzIAAiMIBAAAIAACMgAu3BzIAAiMIBAAAIAACMgAKigzQgNgFgKgKQgUgUADgbIArAAQgCAjAeAAQAPAAAHgJQAHgIgBgSIArAAQADAbgTAUQgKAKgOAFQgNAEgSAAQgRAAgOgEgAhtg9QgOAAAAgOIAAgZQAAgOAOAAIAVAAQAOAAAAAOIAAAZQAAAOgOAAgAi7g9QgOAAAAgOIAAgZQAAgOAOAAIAVAAQAOAAAAAOIAAAZQAAAOgOAAg");
	this.shape.setTransform(0,-7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AotBOIgFgzQARgDAKgHQAKgGAGgOQAIgXAFggIACgUIBAAAIgEAhQgIArgHAQQgNAkgZAQQgTANgbAAIgOgBgAjjA+QgJgIgDgLQgFgLAAgOIAAhgIC4AAIAAAZIh3AAIAAA4QAAAMAFAFQAFAGALAAIByAAIADAwQgoAEhiAAQgeAAgSgQgAOSBNQgNAAgFgFQgFgFAAgNIAAgUQAAgNAFgFQAFgEANAAIAPAAQALAAAFAEQAGAFAAANIAAAUQAAANgGAFQgFAFgLAAgAL7BNIAAibIA/AAIAACbgAJGBNIAAibIA+AAIAAAhQAAATgDAWIADAAQAFgQAMgWIAUgkIA1AAIhXCbgAHkBNIgVhNIhnAAIgVBNIhDAAIAwibIA9AAIgHAbIBKAAIgHgbIA+AAIAwCbgACwBNIAAibIBBAAIAACbgAAGBNIAAibIBBAAIAACbgAlwBNIAAibIBCAAIAACbgAu2BNIAAibIBAAAIAABsIBSAAIAAhsIBAAAIAABsIBRAAIAAhsIBAAAIAACbgAOAgRIgFg9IA7AAIgEA9g");
	this.shape_1.setTransform(-0.1,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ77, new cjs.Rectangle(-95.2,-19.4,190.4,38.8), null);


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFlCQIAHgvQAqACAMgDQALgEAIgVIADgJIgPAAQgdAAgKgeIg9i2IBDAAIAvCcQABAFAGAAIALAAIAzihIBDAAIhIDbQgNAngQAUQgIAKgLAFQgMAGgPABIgPABQgYAAgggHgAisCQIAHgvQAqACALgDQAMgEAIgVIADgJIgPAAQgdAAgKgeIg9i2IBDAAIAvCcQABAFAGAAIALAAIAzihIBDAAIhIDbQgNAngQAUQgJAKgLAFQgMAGgOABIgPABQgYAAgggHgAD6CSIg/iEIgFAAIg/CEIhFAAIBNiVIABgCIhHiRIBDAAIA5B7IAGAAIA6h7IBDAAIhICRIACACIBMCVgAkmCSIgJj1IgIAAIgtC3QgEAVgWAAIgrAAQgWAAgFgVIgui3IgHAAIgID1Ig9AAIAKkPQABgZAXAAIBAAAQAKAAAGAFQAHAGACAKIAsC9IAGAAIAsi9QACgKAHgGQAGgFALAAIBAAAQAWAAACAZIALEPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ74, new cjs.Rectangle(-57.5,-15,115.1,30.1), null);


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AF9BGIAHguQAqACAMgEQALgDAIgUIADgKIgPAAQgdAAgKgeIgLgjIA+AAIACAJQABAGAHAAIALAAIAFgPIBAAAIgYBJQgNAmgQATQgIAKgLAGQgMAFgPABIgPABQgYAAgggHgAiUBGIAHguQAqACAMgEQALgDAIgUIADgKIgPAAQgdAAgKgeIgLgjIA+AAIACAJQABAGAHAAIALAAIAFgPIA/AAIgXBJQgNAmgQATQgIAKgLAGQgMAFgPABIgPABQgYAAgggHgAESBIIg/iDIgFAAIg/CDIhEAAIBMiUIBzAAIBMCUgAkOBIIgFiUIA9AAIAGCUgAomBIIAGiUIA9AAIgGCUgAmRAfQgWAAgFgVIgVhWIA0AAIAPA/IAFAAIAPg/IA0AAIgWBWQgEAVgWAAg");
	this.shape.setTransform(-2.4,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AHMBJIAtiRIBDAAIgwCRgAFzBJIgxiRIBDAAIAsCRgAB8BJIABgCIhHiPIBDAAIA5B5IAGAAIA6h5IBDAAIhICPIACACgAhGBJIAuiRIBDAAIgwCRgAieBJIgxiRIBDAAIAsCRgAkvBJIgDhfIgIAAIgYBfIgzAAIAdh9QACgKAHgGQAGgEALAAIBAAAQAWgBACAZIAFB5gAncBJIgZhfIgHAAIgDBfIg9AAIAFh5QABgZAXABIBAAAQAKAAAGAEQAHAGACAKIAeB9g");
	this.shape_1.setTransform(0.3,-7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ73, new cjs.Rectangle(-57.5,-15,115.1,30.1), null);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AEHAAQAABthNBNQhNBNhtAAQhsAAhNhNQhNhNAAhtQAAhsBNhNQBNhNBsAAQBtAABNBNQBNBNAABsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ61, new cjs.Rectangle(-27.2,-27.2,54.5,54.5), null);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AAvAAQAAATgMANQgBAAgBABQgNAOgUAAQgTAAgNgOQgOgNAAgUQAAgTAOgNQANgOATAAQAUAAANAOQABABABAAQAMANAAASg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(-5.6,-5.6,11.3,11.3), null);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(4,1,1).p("AEPAAQAABwhQBPQhPBQhwAAQhvAAhPhQQhQhPAAhwQAAhvBQhQQBPhPBvAAQBwAABPBPQBQBQAABvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(-29,-29,58.1,58.1), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.muhoboyka();
	this.instance.parent = this;
	this.instance.setTransform(-138.6,-6.3,1,1,-54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(-138.6,-129.1,277.4,258.3), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF9DA4").s().p("AsLKtIAA1ZIYXAAIAAVZg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF9DA4").s().p("A4hNhIAAzDIURn+IcyAAIAATDI79H+g");
	this.shape.setTransform(89.5,-25.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.muha2_01();
	this.instance.parent = this;
	this.instance.setTransform(-7,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-7,-5,14,10), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.muha2_03();
	this.instance.parent = this;
	this.instance.setTransform(-7.5,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-7.5,-5,15,10), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.muha2_04();
	this.instance.parent = this;
	this.instance.setTransform(-25,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-25,-16,50,32), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF9DA4").s().p("ABRAhQgJgDACgRQABgNANgDQAZgHAagGIAngGQAWAAAIATQACAEgEAFQgHAJgMAEQgUAHgWgBQgRAAgOAIIgCACIgDACQgDADgGABIgIABQgLAAAAgJgAhuASQgCgCgDABQgRADgKgJQgQgCgQgBQgcgBgFgWQgBgGAGgDQAHgEAHgBIAAgBQAHgMAOABQA/AHA5AZQAEACADAFQAIAPgFAOQAAADgCACIgBABQgCAEgFAAIgCAAQgiAAgbgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-20.8,-4.2,41.7,8.4), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C2429").s().p("ACrAcQgigMgkgIQgtgKAdgWQBHAMA5AkQAFAEgIACQgHACgJAAQgLAAgMgEgAjRAXQgIgCAFgEQA5gkBHgMQAdAWgtAKQgkAIgiAMQgMAEgLAAQgJAAgHgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-21.4,-3.2,43,6.4), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rot();
	this.instance.parent = this;
	this.instance.setTransform(-13.3,-7.2,1.114,1.114,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-13.7,-7.2,27.2,15.2), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B2A30").s().p("ABtAiQgYgBABgQQgBgQATgMQASgOAegEQAfgEAYAHQAZAHgDAKQgCAIgQANQgPAOggAEQgcAEgWAAIgFAAgAijAbQgggEgQgOQgPgNgCgIQgDgKAZgHQAYgHAfAEQAeAEASAOQATANgBAPQABAQgYABIgFAAQgWAAgcgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-22.9,-3.4,45.8,6.8), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ASsDOQmigGl8hBQgSgDAPghQASgrAqgHQIVhUHhB9QAYAGgZAVQhnBaieAAIgLgBgA2dgvQhlhrCGg0QElCvF6g0QAjgFgbAmQhUB1iqAaQg2AJgyAAQjWAAiMiVg");
	this.shape.setTransform(0.5,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-147.6,-18.9,296.3,41.3), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.muha_04();
	this.instance.parent = this;
	this.instance.setTransform(-58,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-58,-63,116,126), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.muha_01();
	this.instance.parent = this;
	this.instance.setTransform(-45.5,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-45.5,-64,91,128), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.muha_12();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-119.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-42.5,-119.5,85,239), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.muha_15();
	this.instance.parent = this;
	this.instance.setTransform(-145,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-145,-125.5,290,251), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.muha_19();
	this.instance.parent = this;
	this.instance.setTransform(-84,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-84,-89,168,178), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.muha_22();
	this.instance.parent = this;
	this.instance.setTransform(-145,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-145,-50.5,290,101), null);


(lib.Символ145 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ144();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance.cache(-18,-129,36,258);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ145, new cjs.Rectangle(-18.7,-130.2,40,264), null);


(lib.Символ141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ142();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ141, new cjs.Rectangle(-25.9,-16.7,51.9,33.6), null);


(lib.Символ138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ141();
	this.instance.parent = this;
	this.instance.setTransform(-40.2,124.9,0.573,0.573,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-124.8},24,cjs.Ease.get(1)).to({y:124.9},25,cjs.Ease.get(1)).wait(1));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgJIAi8MAAAgyJISRAAMAAAAyJg");
	var mask_graphics_1 = new cjs.Graphics().p("EgJIAhbMAAAgyKISRAAMAAAAyKg");
	var mask_graphics_2 = new cjs.Graphics().p("ApIf9MAAAgyJISRAAMAAAAyJg");
	var mask_graphics_3 = new cjs.Graphics().p("ApIejMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_4 = new cjs.Graphics().p("ApIdOMAAAgyKISRAAMAAAAyKg");
	var mask_graphics_5 = new cjs.Graphics().p("ApIb8MAAAgyKISRAAMAAAAyKg");
	var mask_graphics_6 = new cjs.Graphics().p("ApIauMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_7 = new cjs.Graphics().p("ApIZkMAAAgyKISRAAMAAAAyKg");
	var mask_graphics_8 = new cjs.Graphics().p("ApIZFMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_9 = new cjs.Graphics().p("ApIZFMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_10 = new cjs.Graphics().p("ApIZFMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_11 = new cjs.Graphics().p("ApIZFMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_12 = new cjs.Graphics().p("ApIZFMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_13 = new cjs.Graphics().p("ApIZFMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_14 = new cjs.Graphics().p("ApIZFMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_15 = new cjs.Graphics().p("ApIZFMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_16 = new cjs.Graphics().p("ApIZFMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_17 = new cjs.Graphics().p("ApIZFMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_18 = new cjs.Graphics().p("ApIZFMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_19 = new cjs.Graphics().p("ApIZFMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_20 = new cjs.Graphics().p("ApIZFMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_21 = new cjs.Graphics().p("ApIZFMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_22 = new cjs.Graphics().p("ApIZFMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_23 = new cjs.Graphics().p("ApIZFMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_24 = new cjs.Graphics().p("ApIZFMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_25 = new cjs.Graphics().p("ApIZFMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_26 = new cjs.Graphics().p("ApIZFMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_27 = new cjs.Graphics().p("ApIZFMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_28 = new cjs.Graphics().p("ApIZFMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_29 = new cjs.Graphics().p("ApIZFMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_30 = new cjs.Graphics().p("ApIZFMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_31 = new cjs.Graphics().p("ApIZFMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_32 = new cjs.Graphics().p("ApIZWMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_33 = new cjs.Graphics().p("ApIaXMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_34 = new cjs.Graphics().p("ApIbUMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_35 = new cjs.Graphics().p("ApIcOMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_36 = new cjs.Graphics().p("ApIdEMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_37 = new cjs.Graphics().p("ApId3MAAAgyKISRAAMAAAAyKg");
	var mask_graphics_38 = new cjs.Graphics().p("ApIemMAAAgyKISRAAMAAAAyKg");
	var mask_graphics_39 = new cjs.Graphics().p("ApIfRMAAAgyKISRAAMAAAAyKg");
	var mask_graphics_40 = new cjs.Graphics().p("ApIf4MAAAgyJISRAAMAAAAyJg");
	var mask_graphics_41 = new cjs.Graphics().p("EgJIAgdMAAAgyKISRAAMAAAAyKg");
	var mask_graphics_42 = new cjs.Graphics().p("EgJIAg9MAAAgyJISRAAMAAAAyJg");
	var mask_graphics_43 = new cjs.Graphics().p("EgJIAhaMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_44 = new cjs.Graphics().p("EgJIAhzMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_45 = new cjs.Graphics().p("EgJIAiJMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_46 = new cjs.Graphics().p("EgJIAibMAAAgyJISRAAMAAAAyJg");
	var mask_graphics_47 = new cjs.Graphics().p("EgJIAiqMAAAgyKISRAAMAAAAyKg");
	var mask_graphics_48 = new cjs.Graphics().p("EgJIAi1MAAAgyKISRAAMAAAAyKg");
	var mask_graphics_49 = new cjs.Graphics().p("EgJIAi8MAAAgyJISRAAMAAAAyJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:3.6,y:223.6}).wait(1).to({graphics:mask_graphics_1,x:3.6,y:213.9}).wait(1).to({graphics:mask_graphics_2,x:3.6,y:204.5}).wait(1).to({graphics:mask_graphics_3,x:3.6,y:195.5}).wait(1).to({graphics:mask_graphics_4,x:3.6,y:187}).wait(1).to({graphics:mask_graphics_5,x:3.6,y:178.8}).wait(1).to({graphics:mask_graphics_6,x:3.6,y:171}).wait(1).to({graphics:mask_graphics_7,x:3.6,y:163.6}).wait(1).to({graphics:mask_graphics_8,x:3.6,y:152.6}).wait(1).to({graphics:mask_graphics_9,x:3.6,y:139.4}).wait(1).to({graphics:mask_graphics_10,x:3.6,y:126.9}).wait(1).to({graphics:mask_graphics_11,x:3.6,y:115.3}).wait(1).to({graphics:mask_graphics_12,x:3.6,y:104.4}).wait(1).to({graphics:mask_graphics_13,x:3.6,y:94.2}).wait(1).to({graphics:mask_graphics_14,x:3.6,y:84.9}).wait(1).to({graphics:mask_graphics_15,x:3.6,y:76.3}).wait(1).to({graphics:mask_graphics_16,x:3.6,y:68.5}).wait(1).to({graphics:mask_graphics_17,x:3.6,y:61.5}).wait(1).to({graphics:mask_graphics_18,x:3.6,y:55.3}).wait(1).to({graphics:mask_graphics_19,x:3.6,y:49.9}).wait(1).to({graphics:mask_graphics_20,x:3.6,y:45.2}).wait(1).to({graphics:mask_graphics_21,x:3.6,y:41.3}).wait(1).to({graphics:mask_graphics_22,x:3.6,y:38.2}).wait(1).to({graphics:mask_graphics_23,x:3.6,y:35.9}).wait(1).to({graphics:mask_graphics_24,x:3.6,y:34.3}).wait(1).to({graphics:mask_graphics_25,x:3.6,y:53}).wait(1).to({graphics:mask_graphics_26,x:3.6,y:71}).wait(1).to({graphics:mask_graphics_27,x:3.6,y:88.3}).wait(1).to({graphics:mask_graphics_28,x:3.6,y:104.9}).wait(1).to({graphics:mask_graphics_29,x:3.6,y:120.7}).wait(1).to({graphics:mask_graphics_30,x:3.6,y:135.9}).wait(1).to({graphics:mask_graphics_31,x:3.6,y:150.3}).wait(1).to({graphics:mask_graphics_32,x:3.6,y:162.2}).wait(1).to({graphics:mask_graphics_33,x:3.6,y:168.7}).wait(1).to({graphics:mask_graphics_34,x:3.6,y:174.8}).wait(1).to({graphics:mask_graphics_35,x:3.6,y:180.6}).wait(1).to({graphics:mask_graphics_36,x:3.6,y:186}).wait(1).to({graphics:mask_graphics_37,x:3.6,y:191.1}).wait(1).to({graphics:mask_graphics_38,x:3.6,y:195.8}).wait(1).to({graphics:mask_graphics_39,x:3.6,y:200.1}).wait(1).to({graphics:mask_graphics_40,x:3.6,y:204}).wait(1).to({graphics:mask_graphics_41,x:3.6,y:207.7}).wait(1).to({graphics:mask_graphics_42,x:3.6,y:210.9}).wait(1).to({graphics:mask_graphics_43,x:3.6,y:213.8}).wait(1).to({graphics:mask_graphics_44,x:3.6,y:216.3}).wait(1).to({graphics:mask_graphics_45,x:3.6,y:218.5}).wait(1).to({graphics:mask_graphics_46,x:3.6,y:220.3}).wait(1).to({graphics:mask_graphics_47,x:3.6,y:221.8}).wait(1).to({graphics:mask_graphics_48,x:3.6,y:222.9}).wait(1).to({graphics:mask_graphics_49,x:3.6,y:223.6}).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ139();
	this.instance_1.parent = this;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.1,115.3,69.9,19.3);


(lib.Символ137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ146();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ147();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-9,-53,19,106);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ137, new cjs.Rectangle(-9.4,-52,22,110), null);


(lib.Символ136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ143();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ145();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.899,0.982);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ136, new cjs.Rectangle(-17.1,-128,38,259), null);


(lib.Символ135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 136
	this.instance = new lib.Символ136();
	this.instance.parent = this;
	this.instance.setTransform(-152.3,-10,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 137
	this.instance_1 = new lib.Символ137();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-152.3,-10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 138
	this.instance_2 = new lib.Символ138();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-152.3,-10,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ135, new cjs.Rectangle(-214.4,-138,117.2,575.2), null);


(lib.Символ124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ123();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance.cache(-13,-18,26,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ124, new cjs.Rectangle(-12.1,-16.8,28,36), null);


(lib.Символ122 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ121();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-102,-13,204,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ122, new cjs.Rectangle(-101.8,-13.3,206,30), null);


(lib.Символ92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mish();
	this.instance.parent = this;
	this.instance.setTransform(-9,-22,0.474,0.474);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ124();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.4,-3.6,0.95,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ92, new cjs.Rectangle(-9.2,-22,27,38.5), null);


(lib.Символ81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ82();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-92,-21,184,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ81, new cjs.Rectangle(-91.7,-21.4,186,46), null);


(lib.Символ79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ78();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-97,-21,194,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ79, new cjs.Rectangle(-97.2,-21.4,198,46), null);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ77();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ79();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ76, new cjs.Rectangle(-97.2,-19.4,198,47.2), null);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ74();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-59,-17,119,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ75, new cjs.Rectangle(-59.5,-17,122,38), null);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9901").s().p("An3BMIgGgzQARgDAKgHQAKgGAHgOQAIgXAEggIACgOIABgCIA/AAIAAACIgEAbQgHArgHAQQgNAkgZAQQgUANgbAAIgNgBgAitA8QgJgIgEgLQgFgLAAgOIAAhcIC4AAIAAAVIh2AAIAAA4QAAAMAEAFQAFAGALAAIByAAIACAwQgnAEhhAAQgfAAgRgQgANCBLIAAiXIA/AAIAACXgAKNBLIAAiXIA+AAIAAAdQAAATgCAWIACAAQAGgQALgWIASggIA2AAIhWCXgAINBLIAAiEIhoAAIAACEIhBAAIAAiXIDrAAIAACXgADlBLIAAiXIBBAAIAACXgAA7BLIAAiXIBCAAIAACXgAk6BLIAAiXIBBAAIAACXgAuABLIAAiXIA/AAIAABoIBSAAIAAhoIBAAAIAABoIBSAAIAAhoIBAAAIAACXg");
	this.shape.setTransform(-24.6,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC01").s().p("ANCB1IAAgZQAAgUAFgUIgEAAQgGAUgKATIgPAaIg2AAIBSiQIBBAAIAACQgAKNB1IAAiQIA+AAIAACQgAFkB1IAAiQIBBAAIAABxIBoAAIAAhxIBCAAIAACQgADlB1IAAhhIhoAAIAABhIhCAAIAAiQIDrAAIAACQgAi/B1IAAhWQAAgOAFgLQAFgKAIgIQASgQAeAAQBAAABIAFIgCAvIhyAAQgLAAgFAFQgEAGAAALIAAAtIB2AAIAAAagAk6B1IAAhhIgnAAQgNgBgGAHQgHAGgBAMIgHBJIg/AAQAEgfADgxQAFhABBAAIB8AAIAACQgApdB1IAAiQIBAAAIAACQgArvB1IAAiQIBAAAIAACQgAuAB1IAAiQIA/AAIAACQgAg3g/QgOAAAAgOIAAgZQAAgOAOAAIAVAAQAOAAAAAOIAAAZQAAAOgOAAgAiFg/QgOAAAAgOIAAgZQAAgOAOAAIAVAAQAOAAAAAOIAAAZQAAAOgOAAg");
	this.shape_1.setTransform(-24.6,-12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.instance = new lib.Символ81();
	this.instance.parent = this;
	this.instance.setTransform(-24.6,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ70, new cjs.Rectangle(-116.4,-23.8,187,48), null);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ73();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ75();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ69, new cjs.Rectangle(-59.5,-15,122,40), null);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ70();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ68, new cjs.Rectangle(-116.4,-23.8,187,48), null);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 69
	this.instance = new lib.Символ69();
	this.instance.parent = this;
	this.instance.setTransform(21.5,-14.9,1,1,0,0,0,-57.6,-15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({regX:0,regY:3.2,scaleX:1.08,scaleY:1.08,x:83.9,y:4.9},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:87,y:5.9},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:89.1,y:6.6},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:90.7,y:7.1},0).wait(1).to({regX:-57.5,regY:-15,scaleX:1.23,scaleY:1.23,x:21.6,y:-14.8},0).wait(1).to({regX:0,regY:3.2,scaleX:1.15,scaleY:1.15,x:87.8,y:6.2},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:85,y:5.3},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:82.9,y:4.6},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:81.4,y:4.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:80.2,y:3.7},0).wait(1).to({regX:-57.6,regY:-15.1,scaleX:1,scaleY:1,x:21.5,y:-14.9},0).wait(1));

	// Символ 68
	this.instance_1 = new lib.Символ68();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.6,-15.3,1,1,0,0,0,71.6,-15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-24.7,regY:-1.2,scaleX:1.05,scaleY:1.05,x:-94.7,y:-0.6},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:-97.8,y:-0.1},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-100,y:0.2},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:-101.5,y:0.4},0).wait(1).to({regX:71.6,regY:-15.2,scaleX:1.14,scaleY:1.14,x:6.7,y:-15.3},0).wait(1).to({regX:-24.7,regY:-1.2,scaleX:1.1,scaleY:1.1,x:-98.7,y:0},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-95.8,y:-0.4},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-93.7,y:-0.7},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-92.2,y:-1},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-90.9,y:-1.1},0).wait(1).to({regX:71.6,regY:-15.2,scaleX:1,scaleY:1,x:6.6,y:-15.3},0).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181.4,-23.9,323.9,48.1);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ61();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({scaleX:0.2,scaleY:0.2,alpha:0},12).wait(26));

	// Слой 3
	this.instance_1 = new lib.Символ61();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({scaleX:0.2,scaleY:0.2,alpha:0},12).wait(30));

	// Слой 2
	this.instance_2 = new lib.Символ61();
	this.instance_2.parent = this;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({scaleX:0.2,scaleY:0.2,alpha:0},12).wait(34));

	// Слой 1
	this.instance_3 = new lib.Символ61();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.2,scaleY:0.2,alpha:0},12).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.2,-27.2,54.5,54.5);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-138.6,-129.1,277.4,258.3), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-7,-5,14,10), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-7.5,-5,15,10), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-25,-16,50,32), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-20.8,-4.2,41.7,8.4), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-2.1},4,cjs.Ease.get(-1)).to({y:0},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.4,-3.2,43,6.4);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.12},2).to({scaleY:1},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-7.2,27.2,15.2);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Al4BEIAAi+ILxAAIAAC+g");
	var mask_graphics_1 = new cjs.Graphics().p("Al4BcIAAi+ILxAAIAAC+g");
	var mask_graphics_2 = new cjs.Graphics().p("Al4BfIAAi9ILxAAIAAC9g");
	var mask_graphics_3 = new cjs.Graphics().p("Al4BfIAAi+ILxAAIAAC+g");
	var mask_graphics_4 = new cjs.Graphics().p("Al4BfIAAi9ILxAAIAAC9g");
	var mask_graphics_5 = new cjs.Graphics().p("Al4BcIAAi+ILxAAIAAC+g");
	var mask_graphics_6 = new cjs.Graphics().p("Al4BEIAAi+ILxAAIAAC+g");
	var mask_graphics_7 = new cjs.Graphics().p("Al4BcIAAi+ILxAAIAAC+g");
	var mask_graphics_8 = new cjs.Graphics().p("Al4BfIAAi9ILxAAIAAC9g");
	var mask_graphics_9 = new cjs.Graphics().p("Al4BfIAAi+ILxAAIAAC+g");
	var mask_graphics_10 = new cjs.Graphics().p("Al4BfIAAi9ILxAAIAAC9g");
	var mask_graphics_11 = new cjs.Graphics().p("Al4BcIAAi+ILxAAIAAC+g");
	var mask_graphics_12 = new cjs.Graphics().p("Al4BEIAAi+ILxAAIAAC+g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.5,y:-12.3}).wait(1).to({graphics:mask_graphics_1,x:0.5,y:-9.9}).wait(1).to({graphics:mask_graphics_2,x:0.5,y:-5.5}).wait(1).to({graphics:mask_graphics_3,x:0.5,y:-0.7}).wait(1).to({graphics:mask_graphics_4,x:0.5,y:-5.5}).wait(1).to({graphics:mask_graphics_5,x:0.5,y:-9.9}).wait(1).to({graphics:mask_graphics_6,x:0.5,y:-12.3}).wait(1).to({graphics:mask_graphics_7,x:0.5,y:-9.9}).wait(1).to({graphics:mask_graphics_8,x:0.5,y:-5.5}).wait(1).to({graphics:mask_graphics_9,x:0.5,y:-0.7}).wait(1).to({graphics:mask_graphics_10,x:0.5,y:-5.5}).wait(1).to({graphics:mask_graphics_11,x:0.5,y:-9.9}).wait(1).to({graphics:mask_graphics_12,x:0.5,y:-12.3}).wait(33));

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-147.6,-18.9,296.3,41.3), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-45.5,-64,91,128), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-42.5,-119.5,85,239), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-145,-125.5,290,251), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-84,-89,168,178), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-145,-50.5,290,101), null);


(lib.Символ93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ92();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.81,y:-8.8},4).to({scaleY:1,y:0},3).wait(1).to({scaleY:0.81,y:-8.8},4).to({scaleY:1,y:0},3).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-22,27,38.5);


(lib.Символ90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ93();
	this.instance.parent = this;
	this.instance.setTransform(0.5,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ90, new cjs.Rectangle(-8.8,-21.8,26,38.5), null);


(lib.Символ80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ76();
	this.instance.parent = this;
	this.instance.setTransform(0,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:2.8,scaleX:1.05,scaleY:1.05,y:1.4},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:1.5},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:1.6},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.17,scaleY:1.17,y:1.7},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.2,scaleY:1.2,y:1.8},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1.23,scaleY:1.23,y:1.9},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.26,scaleY:1.26},0).wait(1).to({scaleX:1.26,scaleY:1.26,y:2},0).wait(1).to({regY:0,scaleX:1.27,scaleY:1.27,y:-1.6},0).wait(1).to({regY:2.8,scaleX:1.23,scaleY:1.23,y:1.9},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:1.8},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:1.7},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:1.6},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:1.5},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:1.4},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:1.3},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:1.2},0).wait(1).to({regY:0,scaleX:1,scaleY:1,y:-1.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.2,-21,198,47.2);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.parent = this;
	this.instance.setTransform(0.2,0.2);

	this.instance_1 = new lib.Символ60();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.2,0.2);

	this.instance_2 = new lib.Символ59();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ63, new cjs.Rectangle(-29,-29,58.1,58.1), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(-59,102.1,1,1,26.5,0,0,46,74);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:45.9,rotation:11.5,x:-72.1,y:81},19,cjs.Ease.get(0.99)).to({regX:46,rotation:26.5,x:-59,y:102.1},20,cjs.Ease.get(0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248.8,-162.1,363.5,354.9);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(7,1);

	this.instance_1 = new lib.Символ42();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7.5,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-14.5,-6,29,12), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-23,-6,46,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-22.8,-6.2,48,16), null);


(lib.Символ30 = function(mode,startPosition,loop) {
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

	// Слой 3
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(0.8,-40.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1).to({alpha:0},4).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},4).wait(1).to({alpha:0},4).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ35();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.5,-39.9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},4).wait(1).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.4,-46.1,49,54.1);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(0,-5);
	this.instance.filters = [new cjs.BlurFilter(29, 29, 1)];
	this.instance.cache(-150,-21,300,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-162.6,-38.9,329,74), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(2.4,5.2);
	this.instance.alpha = 0.891;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.rot = new lib.Символ30();
	this.rot.parent = this;
	this.rot.setTransform(1.2,38.1);

	this.timeline.addTween(cjs.Tween.get(this.rot).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-58,-63,116,126), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.golova11 = new lib.Символ16();
	this.golova11.parent = this;
	this.golova11.setTransform(-32.8,23.8,1,1,0,0,0,-32.8,23.8);

	this.timeline.addTween(cjs.Tween.get(this.golova11).to({rotation:3.3},14,cjs.Ease.get(-1)).to({regY:23.7,rotation:7,y:23.7},15,cjs.Ease.get(1)).to({regY:23.8,rotation:3.3,y:23.9},15,cjs.Ease.get(-1)).to({rotation:0,y:23.8},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-63,116,126);


(lib.Символ91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ90();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ91, new cjs.Rectangle(-8.8,-21.8,26,38.5), null);


(lib.Символ89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ91();
	this.instance.parent = this;
	this.instance.setTransform(625.8,-16.4);

	this.instance_1 = new lib.Символ88();
	this.instance_1.parent = this;
	this.instance_1.setTransform(501.5,-20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ122();
	this.instance_2.parent = this;
	this.instance_2.setTransform(501.5,-18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ89, new cjs.Rectangle(399.7,-38.3,244.4,38.5), null);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.instance = new lib.Символ63();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ63();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ64, new cjs.Rectangle(-29,-29,58.1,58.1), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.53},1).to({scaleX:1},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-6,29,12);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// muha2_03.png
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(2.4,-19.6,1.574,1.574);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// muha2_04.png
	this.instance_1 = new lib.Символ38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,3.9,1.574,1.574);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-39.3,-29,78.7,58.2), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.alpha = 0.621;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-162.6,-38.9,329,74), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.golova1 = new lib.Символ12();
	this.golova1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.golova1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-58,-63,116,126), null);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ64();
	this.instance.parent = this;
	this.instance.setTransform(-153.6,31.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-600.8},39,cjs.Ease.get(1)).to({x:-153.6},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.6,2.2,58.1,58.1);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ65();
	this.instance.parent = this;
	this.instance.setTransform(-0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:39.9},19,cjs.Ease.get(0.86)).to({y:-0.1},20,cjs.Ease.get(0.86)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183,2,58.1,58.1);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_109 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_129 = function() {
		this.stop();
	}
	this.frame_140 = function() {
		this.stop();
	}
	this.frame_150 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(109).call(this.frame_109).wait(20).call(this.frame_129).wait(11).call(this.frame_140).wait(10).call(this.frame_150).wait(20));

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.62,0.62,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-28.6,y:25.6},9,cjs.Ease.get(0.94)).wait(21).to({regX:0.3,scaleX:0.43,skewX:-60,skewY:125.7,y:25.7},0).to({x:4.6,y:31.1},9,cjs.Ease.get(1)).wait(21).to({regX:0.5,scaleY:0.65,skewX:-112.3,skewY:50.7},0).to({skewX:-82.3,skewY:80.7,x:29.1,y:13},9).wait(22).to({regX:0.6,regY:-0.6,scaleX:0.41,scaleY:0.53,skewX:-232.3,skewY:-55.1,x:29.3,y:13.1},0).to({regX:0,regY:-0.1,scaleX:0.62,scaleY:0.62,skewX:-360,skewY:0,x:0,y:0},9,cjs.Ease.get(1)).wait(10).to({regX:0.1,scaleX:0.35,scaleY:0.35,x:368.7,y:-110.6},19,cjs.Ease.get(0.9)).to({regX:0.4,regY:0.2,scaleX:0.56,scaleY:0.77,x:368.8,y:33.1},10,cjs.Ease.get(1)).wait(1).to({regX:0.3,regY:0.1,scaleX:0.77,rotation:-45,y:33},0).to({regX:0.1,regY:-0.1,scaleX:0.35,scaleY:0.35,rotation:0,x:368.7,y:-110.6},10,cjs.Ease.get(1)).to({regX:0,scaleX:0.62,scaleY:0.62,x:0,y:0},19,cjs.Ease.get(-0.9)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.4,-18,48.8,36);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.golova = new lib.Символ13();
	this.golova.parent = this;
	this.golova.setTransform(33.3,-74.2,0.812,0.812);

	this.telo = new lib.Символ7();
	this.telo.parent = this;
	this.telo.setTransform(0,23.6,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.telo},{t:this.golova}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-117.8,-125.4,235.6,251), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.mushka = new lib.Символ45();
	this.mushka.parent = this;
	this.mushka.setTransform(-29.6,-40.7);

	this.timeline.addTween(cjs.Tween.get(this.mushka).wait(1));

	// Слой 1
	this.instance = new lib.muha_07();
	this.instance.parent = this;
	this.instance.setTransform(-84,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-84,-69.5,168,139), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.bulki1 = new lib.Символ10();
	this.bulki1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bulki1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-84,-69.5,168,139), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_136 = function() {
		this.gotoAndPlay(121);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(17).call(this.frame_136).wait(1));

	// muha_04.png
	this.golovatelo = new lib.Символ17();
	this.golovatelo.parent = this;
	this.golovatelo.setTransform(120,123.1,1,1,-2.2,0,0,57.1,87);

	this.timeline.addTween(cjs.Tween.get(this.golovatelo).to({rotation:-1},14,cjs.Ease.get(-1)).to({regX:57,rotation:0,x:119.9,y:123},15,cjs.Ease.get(1)).to({rotation:-1,x:120,y:123.1},15,cjs.Ease.get(-1)).to({regX:57.1,rotation:-2.2},15,cjs.Ease.get(1)).wait(1).to({rotation:-1},14,cjs.Ease.get(-1)).to({regX:57,rotation:0,x:119.9,y:123},15,cjs.Ease.get(1)).to({rotation:-1,x:120,y:123.1},15,cjs.Ease.get(-1)).to({regX:57.1,rotation:-2.2},15,cjs.Ease.get(1)).wait(2).to({regX:0,regY:-0.9,rotation:-1.3,x:60.8,y:36.5},0).wait(1).to({rotation:-0.9,x:61.5,y:36},0).wait(1).to({rotation:-0.6,x:61.9,y:35.7},0).wait(1).to({rotation:-0.4,x:62.2,y:35.4},0).wait(1).to({rotation:-0.2,x:62.4,y:35.3},0).wait(1).to({x:62.6,y:35.2},0).wait(1).to({rotation:-0.1,x:62.7,y:35.1},0).wait(1).to({regX:57,regY:87,rotation:0,x:119.9,y:123},0).wait(1).to({regX:0,regY:-0.9,rotation:-0.8,x:61.7,y:36},0).wait(1).to({rotation:-1.3,x:61,y:36.5},0).wait(1).to({rotation:-1.6,x:60.5,y:36.8},0).wait(1).to({rotation:-1.8,x:60.2,y:37},0).wait(1).to({rotation:-1.9,x:60,y:37.1},0).wait(1).to({rotation:-2,x:59.9,y:37.2},0).wait(1).to({rotation:-2.1,x:59.8,y:37.3},0).wait(1).to({regX:57.1,regY:87,rotation:-2.2,x:120,y:123.1},0).wait(1));

	// muha_22.png
	this.ruka = new lib.Символ3();
	this.ruka.parent = this;
	this.ruka.setTransform(43.8,124.2,0.812,0.812,-1.5,0,0,-86,15.6);

	this.timeline.addTween(cjs.Tween.get(this.ruka).to({rotation:-0.8,y:124.3},14,cjs.Ease.get(-1)).to({rotation:0,y:124.2},15,cjs.Ease.get(1)).to({rotation:-0.6},15,cjs.Ease.get(-1)).to({rotation:-1.5},15,cjs.Ease.get(1)).wait(1).to({rotation:-0.8,y:124.3},14,cjs.Ease.get(-1)).to({rotation:0,y:124.2},15,cjs.Ease.get(1)).to({rotation:-0.6},15,cjs.Ease.get(-1)).to({rotation:-1.5},15,cjs.Ease.get(1)).wait(2).to({regX:0,regY:0,rotation:-0.9,x:113.4,y:110.4},0).wait(1).to({rotation:-0.6,x:113.5,y:110.8},0).wait(1).to({rotation:-0.4,x:113.6,y:111.1},0).wait(1).to({rotation:-0.3,y:111.2},0).wait(1).to({rotation:-0.2,y:111.3},0).wait(1).to({rotation:-0.1,y:111.4},0).wait(1).to({y:111.5},0).wait(1).to({regX:-86,regY:15.6,rotation:0,x:43.8,y:124.2},0).wait(1).to({regX:0,regY:0,rotation:-0.6,x:113.5,y:110.9},0).wait(1).to({rotation:-0.9,x:113.4,y:110.5},0).wait(1).to({rotation:-1.1,y:110.2},0).wait(1).to({rotation:-1.2,y:110.1},0).wait(1).to({rotation:-1.3,x:113.3,y:110},0).wait(1).to({rotation:-1.4,y:109.9},0).wait(1).to({y:109.8},0).wait(1).to({regX:-86,regY:15.6,rotation:-1.5,x:43.8,y:124.2},0).wait(1));

	// muha_07.png
	this.bulki = new lib.Символ11();
	this.bulki.parent = this;
	this.bulki.setTransform(-100.6,4.9,0.812,0.812,5,0,0,-76.3,0.2);

	this.timeline.addTween(cjs.Tween.get(this.bulki).to({regX:-76.4,regY:0.3,rotation:2.5,x:-100.7},14,cjs.Ease.get(-1)).to({regY:0.1,rotation:0,x:-100.6},15,cjs.Ease.get(1)).to({regY:0.2,rotation:2.3,x:-100.7,y:5},15,cjs.Ease.get(-1)).to({regX:-76.3,rotation:5,x:-100.6,y:4.9},15,cjs.Ease.get(1)).wait(1).to({regX:-76.4,regY:0.3,rotation:2.5,x:-100.7},14,cjs.Ease.get(-1)).to({regY:0.1,rotation:0,x:-100.6},15,cjs.Ease.get(1)).to({regY:0.2,rotation:2.3,x:-100.7,y:5},15,cjs.Ease.get(-1)).to({regX:-76.3,rotation:5,x:-100.6,y:4.9},15,cjs.Ease.get(1)).wait(2).to({regX:146,regY:-46,rotation:3.1,x:81.8,y:-23},0).wait(1).to({rotation:2,x:81.2,y:-26.4},0).wait(1).to({rotation:1.3,x:80.8,y:-28.5},0).wait(1).to({rotation:0.9,x:80.6,y:-29.9},0).wait(1).to({rotation:0.6,x:80.4,y:-30.9},0).wait(1).to({rotation:0.4,x:80.3,y:-31.5},0).wait(1).to({rotation:0.2,x:80.1,y:-32.1},0).wait(1).to({regX:-76.4,regY:0.1,rotation:0,x:-100.6,y:4.9},0).wait(1).to({regX:146,regY:-46,rotation:1.9,x:81.2,y:-26.6},0).wait(1).to({rotation:3,x:81.8,y:-23.2},0).wait(1).to({rotation:3.6,x:82,y:-21.1},0).wait(1).to({rotation:4.1,x:82.3,y:-19.5},0).wait(1).to({rotation:4.4,x:82.4,y:-18.6},0).wait(1).to({rotation:4.6,x:82.5,y:-18},0).wait(1).to({rotation:4.8,x:82.6,y:-17.4},0).wait(1).to({regX:-76.3,regY:0.2,rotation:5,x:-100.6,y:4.9},0).wait(1));

	// muha_19.png
	this.koleni = new lib.Символ5();
	this.koleni.parent = this;
	this.koleni.setTransform(-138.8,107.4,0.812,0.812,0,0,0,-81.4,63.4);

	this.timeline.addTween(cjs.Tween.get(this.koleni).to({scaleX:0.83,scaleY:0.84},14,cjs.Ease.get(-1)).to({scaleX:0.86,scaleY:0.88},15,cjs.Ease.get(1)).to({regX:-81.5,regY:63.5,scaleX:0.83,scaleY:0.84,y:107.5},15,cjs.Ease.get(-1)).to({regX:-81.4,regY:63.4,scaleX:0.81,scaleY:0.81,y:107.4},15,cjs.Ease.get(1)).wait(1).to({scaleX:0.83,scaleY:0.84},14,cjs.Ease.get(-1)).to({scaleX:0.86,scaleY:0.88},15,cjs.Ease.get(1)).to({regX:-81.5,regY:63.5,scaleX:0.83,scaleY:0.84,y:107.5},15,cjs.Ease.get(-1)).to({regX:-81.4,regY:63.4,scaleX:0.81,scaleY:0.81,y:107.4},15,cjs.Ease.get(1)).wait(2).to({regX:0,regY:0,scaleX:0.83,scaleY:0.84,x:-71.4,y:54.4},0).wait(1).to({scaleX:0.84,scaleY:0.85,x:-70.6,y:53.6},0).wait(1).to({scaleX:0.84,scaleY:0.86,x:-70.2,y:53},0).wait(1).to({scaleX:0.85,scaleY:0.86,x:-69.8,y:52.7},0).wait(1).to({scaleX:0.85,scaleY:0.87,x:-69.6,y:52.4},0).wait(1).to({scaleX:0.85,scaleY:0.87,x:-69.5,y:52.3},0).wait(1).to({scaleX:0.85,scaleY:0.87,x:-69.4,y:52.1},0).wait(1).to({regX:-81.4,regY:63.4,scaleX:0.86,scaleY:0.88,x:-138.8,y:107.4},0).wait(1).to({regX:0,regY:0,scaleX:0.84,scaleY:0.85,x:-70.5,y:53.4},0).wait(1).to({scaleX:0.83,scaleY:0.84,x:-71.3,y:54.3},0).wait(1).to({scaleX:0.82,scaleY:0.83,x:-71.7,y:54.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-72.1,y:55.2},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-72.3,y:55.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-72.4,y:55.6},0).wait(1).to({scaleX:0.81,scaleY:0.82,x:-72.5,y:55.7},0).wait(1).to({regX:-81.4,regY:63.4,scaleX:0.81,scaleY:0.81,x:-138.8,y:107.4},0).wait(1));

	// muha_12.png
	this.noga1 = new lib.Символ9();
	this.noga1.parent = this;
	this.noga1.setTransform(-138.5,107.4,0.812,0.812,0,0,0,-20.6,112.9);

	this.timeline.addTween(cjs.Tween.get(this.noga1).to({regX:-20.7,rotation:1.5,x:-138.6,y:107.5},14,cjs.Ease.get(-1)).to({rotation:3.2,y:107.4},15,cjs.Ease.get(1)).to({regX:-20.8,regY:113,rotation:1.5,y:107.5},15,cjs.Ease.get(-1)).to({regX:-20.6,regY:112.9,rotation:0,x:-138.5,y:107.4},15,cjs.Ease.get(1)).wait(1).to({regX:-20.7,rotation:1.5,x:-138.6,y:107.5},14,cjs.Ease.get(-1)).to({rotation:3.2,y:107.4},15,cjs.Ease.get(1)).to({regX:-20.8,regY:113,rotation:1.5,y:107.5},15,cjs.Ease.get(-1)).to({regX:-20.6,regY:112.9,rotation:0,x:-138.5,y:107.4},15,cjs.Ease.get(1)).wait(2).to({regX:0,regY:0,rotation:1.2,x:-119.9,y:16.1},0).wait(1).to({rotation:1.9,x:-118.8,y:16.3},0).wait(1).to({rotation:2.4,x:-118.1,y:16.5},0).wait(1).to({rotation:2.7,x:-117.6,y:16.6},0).wait(1).to({rotation:2.9,x:-117.3,y:16.7},0).wait(1).to({rotation:3,x:-117.1},0).wait(1).to({rotation:3.1,x:-116.9,y:16.8},0).wait(1).to({regX:-20.7,regY:112.9,rotation:3.2,x:-138.6,y:107.4},0).wait(1).to({regX:0,regY:0,rotation:2,x:-118.6,y:16.3},0).wait(1).to({rotation:1.3,x:-119.7,y:16.1},0).wait(1).to({rotation:0.9,x:-120.4,y:15.9},0).wait(1).to({rotation:0.6,x:-120.8,y:15.8},0).wait(1).to({rotation:0.4,x:-121.1},0).wait(1).to({rotation:0.2,x:-121.4,y:15.7},0).wait(1).to({rotation:0.1,x:-121.5},0).wait(1).to({regX:-20.6,regY:112.9,rotation:0,x:-138.5,y:107.4},0).wait(1));

	// muha_01.png
	this.noga2 = new lib.Символ15();
	this.noga2.parent = this;
	this.noga2.setTransform(-124.5,28.8,0.812,0.812,0,0,0,11.7,43.6);

	this.timeline.addTween(cjs.Tween.get(this.noga2).to({rotation:5.5,x:-124.6,y:28.9},14,cjs.Ease.get(-1)).to({regY:43.5,rotation:11.5,x:-124.5},15,cjs.Ease.get(1)).to({regX:11.6,rotation:5.6},15,cjs.Ease.get(-1)).to({regX:11.7,regY:43.6,rotation:0,y:28.8},15,cjs.Ease.get(1)).wait(1).to({rotation:5.5,x:-124.6,y:28.9},14,cjs.Ease.get(-1)).to({regY:43.5,rotation:11.5,x:-124.5},15,cjs.Ease.get(1)).to({regX:11.6,rotation:5.6},15,cjs.Ease.get(-1)).to({regX:11.7,regY:43.6,rotation:0,y:28.8},15,cjs.Ease.get(1)).wait(2).to({regX:0,regY:0,rotation:4.4,x:-131.3,y:-7.2},0).wait(1).to({rotation:6.9,x:-129.7,y:-7.5},0).wait(1).to({rotation:8.4,x:-128.8,y:-7.6},0).wait(1).to({rotation:9.5,x:-128.1,y:-7.7},0).wait(1).to({rotation:10.2,x:-127.7},0).wait(1).to({rotation:10.6,x:-127.3,y:-7.8},0).wait(1).to({rotation:11.1,x:-127.1},0).wait(1).to({regX:11.7,regY:43.5,rotation:11.5,x:-124.5,y:28.9},0).wait(1).to({regX:0,regY:0,rotation:7.1,x:-129.6,y:-7.4},0).wait(1).to({rotation:4.6,x:-131.1,y:-7.2},0).wait(1).to({rotation:3.1,x:-132.1,y:-7},0).wait(1).to({rotation:2,x:-132.7,y:-6.8},0).wait(1).to({rotation:1.3,x:-133.2,y:-6.7},0).wait(1).to({rotation:0.8,x:-133.5},0).wait(1).to({rotation:0.4,x:-133.7,y:-6.6},0).wait(1).to({regX:11.7,regY:43.6,rotation:0,x:-124.5,y:28.8},0).wait(1));

	// Слой 11
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(5.7,120.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(137));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,-65.7,0,65.8).s().p("Eg5gAMjIAA5FMBzBAAAIAAZFg");
	this.shape.setTransform(44.1,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(137));

	// Слой 10
	this.instance_1 = new lib.Символ83();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.1,22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(137));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364.7,-169.5,776.9,385);


(lib.Символ18 = function(mode,startPosition,loop) {
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

	// Слой 7
	this.instance = new lib.Символ80();
	this.instance.parent = this;
	this.instance.setTransform(-23.3,-254.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-139.9},4).to({y:-153.5},2).wait(1).to({y:-139.9},2).to({y:-254.7},4).wait(1));

	// Слой 5
	this.instance_1 = new lib.Символ67();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-23.2,-156.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-148.4},2).to({y:-259.6},4).wait(1).to({y:-148.4},4).to({y:-156.4},2).wait(1));

	// Слой 6
	this.instance_2 = new lib.Символ89();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-213.3,113.1,0.77,0.77);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:519.8,regY:-22.9,x:186.9,y:114.9},0).wait(1).to({y:138.6},0).wait(1).to({y:152},0).wait(1).to({y:159.2},0).wait(1).to({y:165.5},0).wait(1).to({regX:0,regY:0,x:-213.3,y:192.7},0).wait(2).to({regX:519.8,regY:-22.9,x:186.9,y:161.7},0).wait(1).to({y:148.5},0).wait(1).to({y:135.2},0).wait(1).to({y:121.9},0).wait(1).to({y:108.7},0).wait(1).to({regX:0,regY:0,x:-213.3,y:113.1},0).wait(1));

	// Слой 9
	this.instance_3 = new lib.Символ135();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-273.9,-20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-134.8},6,cjs.Ease.get(1)).wait(1).to({x:-273.9},6,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.instance_4 = new lib.Символ57();
	this.instance_4.parent = this;
	this.instance_4.setTransform(406.6,-31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0},6).wait(1).to({alpha:1},6).wait(1));

	// Слой 2
	this.instance_5 = new lib.Символ53();
	this.instance_5.parent = this;
	this.instance_5.setTransform(235.5,282.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:48.8},6,cjs.Ease.get(1)).wait(1).to({y:282.8},6).wait(1));

	// Слой 1
	this.devochka = new lib.Символ1();
	this.devochka.parent = this;
	this.devochka.setTransform(-30.5,-38.2);

	this.timeline.addTween(cjs.Tween.get(this.devochka).to({scaleX:1.06,scaleY:1.06},6,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-488.3,-275.8,870,751.4);


// stage content:
(lib.muha600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		stage.canvas.style.cursor = "none";
		this.prizel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.prizel.x = stage.mouseX/window.devicePixelRatio;
			this.prizel.y = stage.mouseY/window.devicePixelRatio;
		}
		
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);    
			_this.main.devochka.gotoAndPlay(121);
			_this.main.devochka.golovatelo.golova.golova1.golova11.rot.gotoAndPlay(1);
			_this.main.devochka.bulki.bulki1.mushka.gotoAndPlay(1);
			_this.prizel.gotoAndStop(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		  function fl_MouseOutHandler_2()
		{
			_this.main.gotoAndPlay(9);
			_this.main.devochka.gotoAndPlay(1);
			_this.main.devochka.golovatelo.golova.golova1.golova11.rot.gotoAndPlay(6);
			_this.main.devochka.bulki.bulki1.mushka.gotoAndStop(0);
				_this.prizel.gotoAndStop(0);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.bulkibtn.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
			_this.main.devochka.bulki.bulki1.mushka.gotoAndPlay(111);
		}
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.bulkibtn.addEventListener("mouseout", fl_MouseOutHandler);
		
		function fl_MouseOutHandler()
		{
			_this.main.devochka.bulki.bulki1.mushka.gotoAndPlay(151);
		}
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.muhavniz.addEventListener("mouseover", fl_MouseOverHandler_24);
		
		function fl_MouseOverHandler_24()
		{
			_this.main.devochka.bulki.bulki1.mushka.gotoAndPlay(131);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.muhavniz.addEventListener("mouseout", fl_MouseOutHandler_23);
		
		function fl_MouseOutHandler_23()
		{
			_this.main.devochka.bulki.bulki1.mushka.gotoAndPlay(151);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.prizel = new lib.Символ66();
	this.prizel.parent = this;
	this.prizel.setTransform(-125.5,-51.8);

	this.timeline.addTween(cjs.Tween.get(this.prizel).wait(1));

	// Слой 4
	this.muhavniz = new lib.Символ47();
	this.muhavniz.parent = this;
	this.muhavniz.setTransform(562,68.6);
	new cjs.ButtonHelper(this.muhavniz, 0, 1, 2, false, new lib.Символ47(), 3);

	this.timeline.addTween(cjs.Tween.get(this.muhavniz).wait(1));

	// Слой 3
	this.bulkibtn = new lib.Символ46();
	this.bulkibtn.parent = this;
	this.bulkibtn.setTransform(260.6,141.6,0.933,1);
	new cjs.ButtonHelper(this.bulkibtn, 0, 1, 2, false, new lib.Символ46(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bulkibtn).wait(1));

	// Слой 1
	this.main = new lib.Символ18();
	this.main.parent = this;
	this.main.setTransform(312.6,183.8);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(124.3,58,870,751.3);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/fon.jpg?1479729966842", id:"fon"},
		{src:"images/mish.png?1479729966842", id:"mish"},
		{src:"images/muha2_01.png?1479729966842", id:"muha2_01"},
		{src:"images/muha2_03.png?1479729966842", id:"muha2_03"},
		{src:"images/muha2_04.png?1479729966842", id:"muha2_04"},
		{src:"images/muha_01.png?1479729966842", id:"muha_01"},
		{src:"images/muha_04.png?1479729966842", id:"muha_04"},
		{src:"images/muha_07.png?1479729966842", id:"muha_07"},
		{src:"images/muha_12.png?1479729966842", id:"muha_12"},
		{src:"images/muha_15.png?1479729966842", id:"muha_15"},
		{src:"images/muha_19.png?1479729966842", id:"muha_19"},
		{src:"images/muha_22.png?1479729966842", id:"muha_22"},
		{src:"images/muhoboyka.png?1479729966842", id:"muhoboyka"},
		{src:"images/rot.png?1479729966842", id:"rot"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;