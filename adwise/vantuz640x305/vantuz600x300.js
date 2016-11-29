(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,445);


(lib.mish = function() {
	this.initialize(img.mish);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,70);


(lib.rot = function() {
	this.initialize(img.rot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,15);


(lib.ruka_03 = function() {
	this.initialize(img.ruka_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.ruka_06 = function() {
	this.initialize(img.ruka_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,17);


(lib.ruka_10 = function() {
	this.initialize(img.ruka_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,24);


(lib.ruka_13 = function() {
	this.initialize(img.ruka_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,25);


(lib.ruka_16 = function() {
	this.initialize(img.ruka_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,24);


(lib.ruka_21 = function() {
	this.initialize(img.ruka_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,21);


(lib.ruka_24 = function() {
	this.initialize(img.ruka_24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,123);


(lib.ruka_28 = function() {
	this.initialize(img.ruka_28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,19);


(lib.vant_03 = function() {
	this.initialize(img.vant_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,83);


(lib.vant_06 = function() {
	this.initialize(img.vant_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,79);


(lib.vant_08 = function() {
	this.initialize(img.vant_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,110);


(lib.vant_09 = function() {
	this.initialize(img.vant_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,63);


(lib.vant_15 = function() {
	this.initialize(img.vant_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,159);


(lib.vant_19 = function() {
	this.initialize(img.vant_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,174);


(lib.vant_22 = function() {
	this.initialize(img.vant_22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,31);


(lib.vant_227 = function() {
	this.initialize(img.vant_227);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,58);


(lib.vant_227d_03 = function() {
	this.initialize(img.vant_227d_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,187);


(lib.vant_27 = function() {
	this.initialize(img.vant_27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,31);


(lib.vant_2qwe7_031 = function() {
	this.initialize(img.vant_2qwe7_031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,79);// helper functions:

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
	this.shape.graphics.f().s("#9E2A50").ss(2,1,1).p("AiTztIEnAAMAAAAnbIknAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ143, new cjs.Rectangle(-15.7,-127.2,31.6,254.4), null);


(lib.Символ142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9E2A50").s().p("AkCinIIFCnIoFCog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ142, new cjs.Rectangle(-25.9,-16.7,51.9,33.6), null);


(lib.Символ139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF0000","#1EFF00"],[0,1],0,-124.1,0,124.1).s().p("AiTTuMAAAgnbIEnAAMAAAAnbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ139, new cjs.Rectangle(-14.7,-126.2,29.6,252.4), null);


(lib.Символ134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACaDiIgGhCIlQAAIAAknIBAAAIAAD4IBRAAIAAj4IA/AAIAAD4IBRAAIAAj4IBAAAIAAD4IAjAAIAABxgAD/CSQgJgJgEgKQgEgLAAgOIAAizQAAgOAEgLQAEgKAKgJQARgPAdgBQBCABBIAEIgDAwIhyAAQgLAAgEAGQgGAFAAAMIAAAtIB3AAIAAAuIh3AAIAAA5QAAAMAGAFQAEAGALAAIByAAIADAwQgoAEhiAAQgdAAgSgQgAmlCSQgKgJgEgKQgEgLAAgOIAAizQAAgOAEgLQAFgKAJgJQARgPAegBQBBABBIAEIgCAwIhzAAQgLAAgEAGQgFAFAAAMIAAAtIB2AAIAAAuIh2AAIAAA5QAAAMAFAFQAEAGALAAIBzAAIACAwQgnAEhiAAQgeAAgRgQgAF1isQgOAAAAgNIAAgaQAAgOAOAAIAVAAQAOAAAAAOIAAAaQAAANgOAAgAEnisQgNAAAAgNIAAgaQAAgOANAAIAVAAQAOAAAAAOIAAAaQAAANgOAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ134, new cjs.Rectangle(-44,-22.5,88,45.1), null);


(lib.Символ133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC01").s().p("ACaDiIgGhCIlQAAIAAknIBAAAIAAD4IBRAAIAAj4IA/AAIAAD4IBRAAIAAj4IBAAAIAAD4IAjAAIAABxgAD/CSQgJgJgEgKQgEgLAAgOIAAizQAAgOAEgLQAEgKAKgJQARgPAdgBQBCABBIAEIgDAwIhyAAQgLAAgEAGQgGAFAAAMIAAAtIB3AAIAAAuIh3AAIAAA5QAAAMAGAFQAEAGALAAIByAAIADAwQgoAEhiAAQgdAAgSgQgAmlCSQgKgJgEgKQgEgLAAgOIAAizQAAgOAEgLQAFgKAJgJQARgPAegBQBBABBIAEIgCAwIhzAAQgLAAgEAGQgFAFAAAMIAAAtIB2AAIAAAuIh2AAIAAA5QAAAMAFAFQAEAGALAAIBzAAIACAwQgnAEhiAAQgeAAgRgQgAF1isQgOAAAAgNIAAgaQAAgOAOAAIAVAAQAOAAAAAOIAAAaQAAANgOAAgAEnisQgNAAAAgNIAAgaQAAgOANAAIAVAAQAOAAAAAOIAAAaQAAANgOAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ133, new cjs.Rectangle(-44,-22.5,88,45.1), null);


(lib.Символ129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC01").s().p("AtiCRQgYgJgOgQQgOgSgHgdQgHgfAAgqQAAgpAHgeQAHgeAOgRQAcgjBFAAQAxAAAoALIgGAwIhTgBQgRAAgKAEQgMAGgFAKQgHAKgCATQgDATgBAbQABAcADATQACATAHALQALAUAhAAQAnAAAygEIAFAwQgTAHgYACQgYADgbABQgjAAgYgJgAhHCUIgCAAIAAknIBCAAIAABuIAqAAQA9AAAYAVQALAKAHASQAFASAAAcQAAA2gWATQgLALgSAFQgTAFgaAAQhOAAgogEgAgHBmIAqAAQAbgBAHgIQAIgKAAgbQAAgcgIgLQgHgJgbAAIgqAAgAmFCWIgFgzQARgDAKgHQAKgHAGgOQAJgXAEggQAFggAFhAQAFhABBAAIB7AAIAAEnIhBAAIAAj4IgmAAQgNAAgGAGQgIAGAAANQgGBCgFAiQgIAsgHARQgMAkgZAQQgUANgbAAIgOgBgALtCFQgJgHgFgMQgEgKAAgOIAAizQAAgNAEgLQAFgMAJgHQASgRAdABQBBAABIAEIgCAxIhzAAQgLAAgEAEQgFAGAAALIAAAtIB2AAIAAAuIh2AAIAAA6QAAAMAFAFQAEAGALgBIBzAAIACAxQgnAEhiAAQgeAAgRgRgAH0CFQgJgHgDgMQgFgKAAgOIAAizQAAgNAFgLQAEgMAJgHQASgRAdABQBBAABJAEIgDAxIhyAAQgLAAgFAEQgFAGAAALIAAAtIB3AAIAAAuIh3AAIAAA6QAAAMAFAFQAFAGALgBIByAAIADAxQgoAEhiAAQgeAAgSgRgAFmCUIAAiEIhoAAIAACEIhCAAIAAknIBCAAIAAByIBoAAIAAhyIBCAAIAAEngAnpCUIAAiwQAAgUAEgTIgDAAQgGATgLATIhkCxIhBAAIAAknIA+AAIAACtQAAATgDAWIADAAQAFgQAMgWIBkiwIBBAAIAAEng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ129, new cjs.Rectangle(-93.3,-15.3,186.7,30.7), null);


(lib.Символ128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC01").s().p("AHlCWIAAiwQAAgUAEgUIgDAAQgHAUgKATIhkCxIhBAAIAAknIA+AAIAACtQAAASgDAXIACAAQAGgQALgXIBlivIBBAAIAAEngACwCWIAAiEIhoAAIAACEIhCAAIAAknIBCAAIAABxIBoAAIAAhxIBCAAIAAEngAh4CWIAAhyIgrAAQgZAAgFAaIgWBYIhFAAIAYhaQAIglAlgHIgBgDQgegEgOgSQgGgJgDgNQgEgNAAgSQAAgYAGgRQAHgRAMgJQAMgKAVgFQAUgFAdAAQAwAABAAEIAAEngAjGhaQgIAIgBAZQAAAMACAJQADAIAEAFQAFAFAIADQAJACAMAAIAsAAIAAhWIgsAAQgZAAgJAJgAnKCWIAAjyIhZAAIAAg1IDzAAIAAA1IhZAAIAADyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ128, new cjs.Rectangle(-54.8,-15,109.6,30.1), null);


(lib.Символ127 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AtiCRQgYgJgOgQQgOgSgHgdQgHgfAAgqQAAgpAHgeQAHgeAOgRQAcgjBFAAQAxAAAoALIgGAwIhTgBQgRAAgKAEQgMAGgFAKQgHAKgCATQgDATgBAbQABAcADATQACATAHALQALAUAhAAQAnAAAygEIAFAwQgTAHgYACQgYADgbABQgjAAgYgJgAhHCUIgCAAIAAknIBCAAIAABuIAqAAQA9AAAYAVQALAKAHASQAFASAAAcQAAA2gWATQgLALgSAFQgTAFgaAAQhOAAgogEgAgHBmIAqAAQAbgBAHgIQAIgKAAgbQAAgcgIgLQgHgJgbAAIgqAAgAmFCWIgFgzQARgDAKgHQAKgHAGgOQAJgXAEggQAFggAFhAQAFhABBAAIB7AAIAAEnIhBAAIAAj4IgmAAQgNAAgGAGQgIAGAAANQgGBCgFAiQgIAsgHARQgMAkgZAQQgUANgbAAIgOgBgALtCFQgJgHgFgMQgEgKAAgOIAAizQAAgNAEgLQAFgMAJgHQASgRAdABQBBAABIAEIgCAxIhzAAQgLAAgEAEQgFAGAAALIAAAtIB2AAIAAAuIh2AAIAAA6QAAAMAFAFQAEAGALgBIBzAAIACAxQgnAEhiAAQgeAAgRgRgAH0CFQgJgHgDgMQgFgKAAgOIAAizQAAgNAFgLQAEgMAJgHQASgRAdABQBBAABJAEIgDAxIhyAAQgLAAgFAEQgFAGAAALIAAAtIB3AAIAAAuIh3AAIAAA6QAAAMAFAFQAFAGALgBIByAAIADAxQgoAEhiAAQgeAAgSgRgAFmCUIAAiEIhoAAIAACEIhCAAIAAknIBCAAIAAByIBoAAIAAhyIBCAAIAAEngAnpCUIAAiwQAAgUAEgTIgDAAQgGATgLATIhkCxIhBAAIAAknIA+AAIAACtQAAATgDAWIADAAQAFgQAMgWIBkiwIBBAAIAAEng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ127, new cjs.Rectangle(-93.3,-15.3,186.7,30.7), null);


(lib.Символ126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AHlCWIAAiwQAAgUAEgUIgDAAQgHAUgKATIhkCxIhBAAIAAknIA+AAIAACtQAAASgDAXIACAAQAGgQALgXIBlivIBBAAIAAEngACwCWIAAiEIhoAAIAACEIhCAAIAAknIBCAAIAABxIBoAAIAAhxIBCAAIAAEngAh4CWIAAhyIgrAAQgZAAgFAaIgWBYIhFAAIAYhaQAIglAlgHIgBgDQgegEgOgSQgGgJgDgNQgEgNAAgSQAAgYAGgRQAHgRAMgJQAMgKAVgFQAUgFAdAAQAwAABAAEIAAEngAjGhaQgIAIgBAZQAAAMACAJQADAIAEAFQAFAFAIADQAJACAMAAIAsAAIAAhWIgsAAQgZAAgJAJgAnKCWIAAjyIhZAAIAAg1IDzAAIAAA1IhZAAIAADyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ126, new cjs.Rectangle(-54.8,-15,109.6,30.1), null);


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


(lib.Символ117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFPCSIAHgvQAqACAMgDQALgEAIgVIADgJIgPAAQgdAAgKgeIg9i2IBDAAIAvCcQABAFAHAAIALAAIAzihIBDAAIhJDbQgNAngQAUQgIAKgLAFQgMAGgPABIgPAAQgYAAgggGgAI3CKIAFgtQAiAGA+ACQAaAAAIgIQAJgIAAgYQAAgagJgJQgFgEgJgDQgIgCgOAAIg5AAIAAgtIA5AAQAWAAAJgIQAIgHAAgWQAAgWgJgHQgJgIgYAAQghAAg0AGIgFgvQAagGBEgCQA6AAAWAQQAMAIAFAPQAGAQAAAWQAAAQgDAMQgDANgGAIQgMAQgbADIAAACQAQABAMAFQALAFAHAKQAOAUAAAlQAAAWgGAPQgFAPgLAJQgXAQg1AAQhFAAgtgNgAsKCUIAAkoQA/gDAxAAQA7AAAXAQQAXAQAAAtQAAAQgDAMQgDANgHAIQgLAQgcADIAAACQAhADAOASQAHAKAEAOQADAOAAATQAAAtgXAQQgLAIgTAEQgUAEgbAAQhSAAgsgDgArKBmIBJgCQAKgCAEgEQAFgEACgIQADgIAAgNQAAgagKgKQgKgJgcAAIgxAAgArKgbIAxAAQAXAAAJgHQAJgIAAgXQAAgWgJgIQgKgHgaAAIgtAAgACLCUIAAjzIhZAAIAAg1IDzAAIAAA1IhZAAIAADzgAg2CUIAAiFIhoAAIAACFIhBAAIAAkoIBBAAIAAByIBoAAIAAhyIBBAAIAAEogAlBCUIgWhOIhmAAIgVBOIhDAAIBVkXQACgHAHgFQAGgFAIAAIA+AAQAJAAAGAEQAGAFACAIIBVEXgAllATIgfh2IgMAAIgfB2IBKAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ117, new cjs.Rectangle(-77.8,-15.2,155.8,30.5), null);


(lib.Символ115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AHlCWIAAiwQAAgUAEgUIgDAAQgHAUgKATIhkCxIhBAAIAAknIA+AAIAACtQAAASgDAXIACAAQAGgQALgXIBlivIBBAAIAAEngACwCWIAAiEIhoAAIAACEIhCAAIAAknIBCAAIAABxIBoAAIAAhxIBCAAIAAEngAh4CWIAAhyIgrAAQgZAAgFAaIgWBYIhFAAIAYhaQAIglAlgHIgBgDQgegEgOgSQgGgJgDgNQgEgNAAgSQAAgYAGgRQAHgRAMgJQAMgKAVgFQAUgFAdAAQAwAABAAEIAAEngAjGhaQgIAIgBAZQAAAMACAJQADAIAEAFQAFAFAIADQAJACAMAAIAsAAIAAhWIgsAAQgZAAgJAJgAnKCWIAAjyIhZAAIAAg1IDzAAIAAA1IhZAAIAADyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ115, new cjs.Rectangle(-54.8,-15,109.6,30.1), null);


(lib.Символ112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EAV4AkVMAAAhIpMAqWAAAMAAABIpgEhANAkVMAAAhIpMAqWAAAMAAABIpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ112, new cjs.Rectangle(-410.9,-232.5,822,465), null);


(lib.Символ106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AHlCWIAAiwQAAgUAEgUIgDAAQgHAUgKATIhkCxIhBAAIAAknIA+AAIAACtQAAASgDAXIACAAQAGgQALgXIBlivIBBAAIAAEngACwCWIAAiEIhoAAIAACEIhCAAIAAknIBCAAIAABxIBoAAIAAhxIBCAAIAAEngAh4CWIAAhyIgrAAQgZAAgFAaIgWBYIhFAAIAYhaQAIglAlgHIgBgDQgegEgOgSQgGgJgDgNQgEgNAAgSQAAgYAGgRQAHgRAMgJQAMgKAVgFQAUgFAdAAQAwAABAAEIAAEngAjGhaQgIAIgBAZQAAAMACAJQADAIAEAFQAFAFAIADQAJACAMAAIAsAAIAAhWIgsAAQgZAAgJAJgAnKCWIAAjyIhZAAIAAg1IDzAAIAAA1IhZAAIAADyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ106, new cjs.Rectangle(-54.8,-15,109.6,30.1), null);


(lib.Символ103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AFPCSIAHgvQAqACAMgDQALgEAIgVIADgJIgPAAQgdAAgKgeIg9i2IBDAAIAvCcQABAFAHAAIALAAIAzihIBDAAIhJDbQgNAngQAUQgIAKgLAFQgMAGgPABIgPAAQgYAAgggGgAI3CKIAFgtQAiAGA+ACQAaAAAIgIQAJgIAAgYQAAgagJgJQgFgEgJgDQgIgCgOAAIg5AAIAAgtIA5AAQAWAAAJgIQAIgHAAgWQAAgWgJgHQgJgIgYAAQghAAg0AGIgFgvQAagGBEgCQA6AAAWAQQAMAIAFAPQAGAQAAAWQAAAQgDAMQgDANgGAIQgMAQgbADIAAACQAQABAMAFQALAFAHAKQAOAUAAAlQAAAWgGAPQgFAPgLAJQgXAQg1AAQhFAAgtgNgAsKCUIAAkoQA/gDAxAAQA7AAAXAQQAXAQAAAtQAAAQgDAMQgDANgHAIQgLAQgcADIAAACQAhADAOASQAHAKAEAOQADAOAAATQAAAtgXAQQgLAIgTAEQgUAEgbAAQhSAAgsgDgArKBmIBJgCQAKgCAEgEQAFgEACgIQADgIAAgNQAAgagKgKQgKgJgcAAIgxAAgArKgbIAxAAQAXAAAJgHQAJgIAAgXQAAgWgJgIQgKgHgaAAIgtAAgACLCUIAAjzIhZAAIAAg1IDzAAIAAA1IhZAAIAADzgAg2CUIAAiFIhoAAIAACFIhBAAIAAkoIBBAAIAAByIBoAAIAAhyIBBAAIAAEogAlBCUIgWhOIhmAAIgVBOIhDAAIBVkXQACgHAHgFQAGgFAIAAIA+AAQAJAAAGAEQAGAFACAIIBVEXgAllATIgfh2IgMAAIgfB2IBKAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ103, new cjs.Rectangle(-77.8,-15.2,155.8,30.5), null);


(lib.Символ97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjMFfQhph0AAikQAAijB4iGQB4iHDVhTQDXhSg/DgQhADgAaChQAaCigrBvQgsBviVAAQiTAAhph0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ97, new cjs.Rectangle(-31,-46.7,62,93.4), null);


(lib.Символ96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AAyJiIgagMQgqgRgfgfQgtgtgHhDQgTi1hkiOQhUh4giiJQgniZCKgqQAVgGALAVQAWArgfAlQBpAVAsh5QAfhTAEhYQh1hOCMgqQAMgEALAAQA+AJAKA/IACAGQBvgqAoB+QAIAYADAdQAEAogQAmQA8ArgbBMQgJAagOAaQBRBRhOBtQhLBpAUBqQAIArAfAhQBvB0ABCTQAAAmgpANQg/AUg7AAQhGAAhAgcgABdnBQgDA5gFA5IAAAGQAjg4gbhBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ96, new cjs.Rectangle(-34.7,-63.8,69.5,127.7), null);


(lib.Символ88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC01").s().p("AivBxIgDgoIh6AAIgDAoIgcAAIAAhGIATAAQATgtAFhGQABgQAMgLQALgLATAAIBLAAIAACZIAYAAIAABGgAj2hNQgDAEgBAIQgDAngFAYQgJAggHANIBAAAIAAh8IgYAAQgIAAgEAEgANhBJIgBAAIAAi3IAoAAIAABFIAbAAQAmAAAOAMQAIAGADAMQAEALAAARQAAAhgOAMQgHAGgLAEQgLADgRAAQgwAAgZgCgAOIArIAbAAQAQABAFgGQAFgFAAgSQAAgQgFgGQgFgGgQAAIgbAAgAFwBJIgBAAIAAi3IApAAIAABFIAaAAQAmAAAPAMQAHAGADAMQAEALAAARQAAAhgOAMQgGAGgMAEQgLADgRAAQgvAAgagCgAGYArIAaAAQAIAAAGgBQAFgBACgDQAFgFAAgSQAAgQgFgGQgCgDgGgCQgFgBgIAAIgaAAgAqABJIAAi3QAngCAeAAQAkAAAOAKQAPAKAAAcQAAAKgCAHQgCAIgEAFQgHAKgRACIAAABQAUACAJAMQAEAGACAIQADAIAAAMQAAAcgPAKQgHAEgMAEQgMACgRAAQgyAAgbgCgApZAsIAugBQAFgBADgCQADgDACgFQABgFAAgIQAAgQgGgFQgGgGgSAAIgeAAgApZgjIAeAAQAPAAAFgFQAGgEAAgOQAAgOgGgFQgGgEgQAAIgcgBgAnNBAQgGgFgCgIQgDgGAAgIIAAhvQAAgIADgHQADgGAFgGQALgKASAAQAoAAAtADIgBAeIhHAAQgHAAgDADQgDADAAAIIAAAbIBJAAIAAAeIhJAAIAAAjQAAAGADAEQADADAHAAIBHAAIABAeQgZADg8AAQgSgBgLgJgAJeBJIAAi3IAnAAIAACZIAzAAIAAiZIAnAAIAACZIAzAAIAAiZIAnAAIAAC3gAIPBJIAAi3IApAAIAAC3gAEmBJIgGiXIgEAAIgcBwQgDANgNABIgbAAQgNgBgDgNIgdhwIgEAAIgFCXIgmAAIAGinQABgPAOgBIAoAAQAGAAAEAEQAEADACAHIAbB0IADAAIAbh0QACgHAEgDQAEgEAGAAIAoAAQAOABABAPIAHCngAgJBJIAAhtQAAgMACgMIgCAAQgEALgGAMIg+BuIgoAAIAAi3IAmAAIAABsQAAALgCAOIACAAQADgLAHgNIA/htIAnAAIAAC3gAq8BJIgOgxIg/AAIgNAxIgqAAIA1isQACgEAEgEQADgCAGgBIAmAAQAFABAEACQAEACABAGIA1CsgArSgFIgUhKIgHAAIgTBKIAuAAgAt8BJIAAhRIhAAAIAABRIgpAAIAAi3IApAAIAABGIBAAAIAAhGIApAAIAAC3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ88, new cjs.Rectangle(-99.8,-11.3,199.6,22.6), null);


(lib.Символ87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rot();
	this.instance.parent = this;
	this.instance.setTransform(-7,-7,0.713,0.713);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ87, new cjs.Rectangle(-7,-7,10.7,10.7), null);


(lib.Символ84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(4,1,1).p("Egx/gX0MBj/AAAMAAAAvpMhj/AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ84, new cjs.Rectangle(-322,-154.4,644,309), null);


(lib.Символ80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A52C54").s().p("AiWAAIEthdIAAC7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AipAAIFThoIAADRg");
	this.shape_1.setTransform(1,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ80, new cjs.Rectangle(-16,-13,34,22.4), null);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AA3AAQAAAXgQAQQgQAQgXAAQgWAAgQgQQgQgQAAgXQAAgWAQgQQAQgQAWAAQAXAAAQAQQAQAQAAAWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ76, new cjs.Rectangle(-6.5,-6.5,13,13), null);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(4,1,1).p("AhZjZQApgRAwAAQAzAAAqASABXDbQgoAQgvAAQg0AAgsgVADXhhQAUAtAAA0QAAAwgQAqAjYBdQgSgrAAgyQAAguAQgo");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ75, new cjs.Rectangle(-25.5,-25.5,51,51), null);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AqOOiIAA9DIUdAAIAAdDg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(4,1,1).p("AhnjSQAQgJATgFQAggKAkAAQAxAAAqARADYhfQATAsAAAzQAAAlgKAgQgFATgIARABpDTQgWALgZAGQgbAHgfAAQgyAAgsgTAjZBaQgRgpAAgxQAAgdAHgcQAGgYALgX");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ67, new cjs.Rectangle(-25.5,-25.5,51,51), null);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("ABBAAQAAAbgTATQgTATgbAAQgaAAgTgTQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ65, new cjs.Rectangle(-7.5,-7.5,15,15), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_03();
	this.instance.parent = this;
	this.instance.setTransform(-10,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(-10,-10,20,20), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_06();
	this.instance.parent = this;
	this.instance.setTransform(-9.5,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(-9.5,-8.5,19,17), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_10();
	this.instance.parent = this;
	this.instance.setTransform(-9,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(-9,-12,18,24), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_13();
	this.instance.parent = this;
	this.instance.setTransform(-11,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-11,-11,25,25), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_21();
	this.instance.parent = this;
	this.instance.setTransform(-11,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(-11,-10.5,22,21), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_16();
	this.instance.parent = this;
	this.instance.setTransform(-10.5,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-10.5,-12,21,24), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_24();
	this.instance.parent = this;
	this.instance.setTransform(-47,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-47,-61.5,94,123), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA9FPQh1iQiygJQgygDghgoQhqiDiOhVQiEhQBjh+QjhgrjlhHQhOgYA+gkQD4BID/A6QAZAGgGAbQgOBJgEBIQgBAJAOAHQChBWB2CNQBDBQBbguQgigoAGg1QAUiaCoBiQh5iDC3gwQDJg1DNAdIDWAdQgpgNgugBQgIgBAIgPQAJgQAQAAQCXgZAYBWQAeAFAGAjQAFAhAjgGQgJg7A4AHIAgADQAgADgCAhQCIAoiAAWQhNANhGgIQhDgJgOhBQlbgulQA2QgTADgXAHIgVAGQBeCKC4APQANABgRAJQhPAshiggQiGgrhvgEQAEBQBBAzQByBbB4AyQClgQA6B5QAMAXghANQhCAag7AAQiCAAhlh7gADuFyIACgCQgpgJgrgjQAXA7A7gNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-109.6,-45.7,219.2,91.6), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vant_03();
	this.instance.parent = this;
	this.instance.setTransform(-33.5,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-33.5,-41.5,67,83), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vant_06();
	this.instance.parent = this;
	this.instance.setTransform(-31.5,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-31.5,-39.5,63,79), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vant_08();
	this.instance.parent = this;
	this.instance.setTransform(-47.5,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-47.5,-55,95,110), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vant_09();
	this.instance.parent = this;
	this.instance.setTransform(-63,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-63,-31.5,126,63), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vant_15();
	this.instance.parent = this;
	this.instance.setTransform(-81.5,-79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-81.5,-79.5,163,159), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vant_19();
	this.instance.parent = this;
	this.instance.setTransform(-151,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-151,-87,302,174), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vant_22();
	this.instance.parent = this;
	this.instance.setTransform(-14.5,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-14.5,-15.5,29,31), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vant_27();
	this.instance.parent = this;
	this.instance.setTransform(-21.5,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-21.5,-15.5,43,31), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_28();
	this.instance.parent = this;
	this.instance.setTransform(-7,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-7,-9.5,14,19), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vant_2qwe7_031();
	this.instance.parent = this;
	this.instance.setTransform(-45.4,-28.7,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-45.4,-47.6,91,95.2), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vant_227d_03();
	this.instance.parent = this;
	this.instance.setTransform(-96.5,-93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-96.5,-93.5,193,187), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCD1C2").s().p("AhdA2QgCgFAHgPQAHgPARgFQASgFAOADQAOACADAGQACAGgMAGIgbAPQgPAJgLACIgGABQgHAAgCgFgAAugPQgJgBAAgDQgBgDAEgMQAEgNAPgGQAPgHAKAEQAKADAAAHQABAGgGAFIgUANQgNAHgIAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-9.4,-5.8,18.9,11.7), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vant_227();
	this.instance.parent = this;
	this.instance.setTransform(-48,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-48,-29,96,58), null);


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

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkCinIIFCnIoFCog");
	this.shape.setTransform(-2.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ141, new cjs.Rectangle(-28.4,-16.7,54.4,36.1), null);


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
p.nominalBounds = new cjs.Rectangle(-56.5,115.3,71.3,20.7);


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
	this.instance.setTransform(-35,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 137
	this.instance_1 = new lib.Символ137();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-35.2,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 138
	this.instance_2 = new lib.Символ138();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-35,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ135, new cjs.Rectangle(-91.5,-128,118.6,575.2), null);


(lib.Символ132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ133();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ134();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,3);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-46,-24,92,49);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ132, new cjs.Rectangle(-46,-22.5,96,53), null);


(lib.Символ131 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 128
	this.instance = new lib.Символ128();
	this.instance.parent = this;
	this.instance.setTransform(0,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 126
	this.instance_1 = new lib.Символ126();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-3.5);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-57,-17,114,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ131, new cjs.Rectangle(-56.8,-21,116,37.5), null);


(lib.Символ130 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 129
	this.instance = new lib.Символ129();
	this.instance.parent = this;
	this.instance.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 127
	this.instance_1 = new lib.Символ127();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,2);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-95,-17,191,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ130, new cjs.Rectangle(-95.3,-16.3,194,39), null);


(lib.Символ125 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ132();
	this.instance.parent = this;
	this.instance.setTransform(-218.1,-7.4,1.245,1.245);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).wait(6).to({regY:-0.1,scaleX:1.14,x:-51.3,y:-7.5},4).to({regY:0,scaleX:1.25,x:-71.8,y:-7.4},2).wait(33).to({y:-17.4},3).to({y:163.9,alpha:0},11).wait(14));

	// Символ 129
	this.instance_1 = new lib.Символ130();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-255.6,1.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:0.93,x:-17},6).to({scaleX:1,x:-33.3},3).wait(27).to({y:-8.2},3).to({y:61.4},5).to({y:46.4},2).wait(32).to({y:36.4},3).to({y:217.7,alpha:0},11).wait(17));

	// Символ 128
	this.instance_2 = new lib.Символ131();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-294.2,-51.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.93,x:-53},6).to({scaleX:1,x:-71.8},3).wait(78).to({y:-61.9},3).to({y:119.3,alpha:0},11).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-351,-73,118,38.5);


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


(lib.Символ118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ117();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-80,-17,160,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ118, new cjs.Rectangle(-79.8,-17.2,162,38), null);


(lib.Символ116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ115();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-57,-17,114,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ116, new cjs.Rectangle(-56.8,-17,116,38), null);


(lib.Символ113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ112();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(255, 255, 1)];
	this.instance.cache(-413,-234,826,469);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ113, new cjs.Rectangle(-538.9,-360.5,1081,724), null);


(lib.Символ98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ97();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(33, 33, 1)];
	this.instance.cache(-33,-49,66,97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ98, new cjs.Rectangle(-48,-63.7,100,130), null);


(lib.Символ95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ96();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(14, 14, 1)];
	this.instance.cache(-37,-66,74,132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ95, new cjs.Rectangle(-41.7,-70.8,86,144), null);


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


(lib.Символ85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ87();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.9,y:-0.8},2).to({scaleY:1,y:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-7,10.7,10.7);


(lib.Символ82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ84();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance.cache(-324,-156,648,313);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ82, new cjs.Rectangle(-323,-155.4,650,314), null);


(lib.Символ81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ80();
	this.instance.parent = this;
	this.instance.setTransform(7.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.64,x:-25.2},11,cjs.Ease.get(1)).to({scaleX:1,x:7.8},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-13,34,22.4);


(lib.Символ79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ81();
	this.instance.parent = this;
	this.instance.setTransform(-197.4,0,0.834,0.834,180);

	this.instance_1 = new lib.Символ81();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10.2,0,0.834,0.834);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ79, new cjs.Rectangle(-218.8,-10.8,230.1,21.7), null);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ76();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,-5.5,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:10.6,x:4.4,y:6.4},0).wait(1).to({rotation:21.2,x:3.1,y:7.1},0).wait(1).to({rotation:31.8,x:1.8,y:7.6},0).wait(1).to({rotation:42.4,x:0.4,y:7.8},0).wait(1).to({rotation:52.9,x:-1.1,y:7.7},0).wait(1).to({rotation:63.5,x:-2.5,y:7.4},0).wait(1).to({rotation:74.1,x:-3.8,y:6.8},0).wait(1).to({rotation:84.7,x:-5,y:6},0).wait(1).to({rotation:95.3,x:-6,y:5},0).wait(1).to({rotation:105.9,x:-6.8,y:3.8},0).wait(1).to({rotation:116.5,x:-7.4,y:2.5},0).wait(1).to({rotation:127.1,x:-7.7,y:1.1},0).wait(1).to({rotation:137.6,x:-7.8,y:-0.4},0).wait(1).to({rotation:148.2,x:-7.6,y:-1.8},0).wait(1).to({rotation:158.8,x:-7.1,y:-3.1},0).wait(1).to({rotation:169.4,x:-6.4,y:-4.4},0).wait(1).to({rotation:180,x:-5.5,y:-5.5},0).wait(1).to({rotation:190.6,x:-4.4,y:-6.4},0).wait(1).to({rotation:201.2,x:-3.1,y:-7.1},0).wait(1).to({rotation:211.8,x:-1.8,y:-7.6},0).wait(1).to({rotation:222.4,x:-0.4,y:-7.8},0).wait(1).to({rotation:232.9,x:1.1,y:-7.7},0).wait(1).to({rotation:243.5,x:2.5,y:-7.4},0).wait(1).to({rotation:254.1,x:3.8,y:-6.8},0).wait(1).to({rotation:264.7,x:5,y:-6},0).wait(1).to({rotation:275.3,x:6,y:-5},0).wait(1).to({rotation:285.9,x:6.8,y:-3.8},0).wait(1).to({rotation:296.5,x:7.4,y:-2.5},0).wait(1).to({rotation:307.1,x:7.7,y:-1.1},0).wait(1).to({rotation:317.6,x:7.8,y:0.4},0).wait(1).to({rotation:328.2,x:7.6,y:1.8},0).wait(1).to({rotation:338.8,x:7.1,y:3.1},0).wait(1).to({rotation:349.4,x:6.4,y:4.4},0).wait(1).to({rotation:360,x:5.5,y:5.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,13,13);


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ75();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.26,scaleY:1.26},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-25.5,51,51);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ65();
	this.instance.parent = this;
	this.instance.setTransform(4.7,-1,1,1,0,0,0,4.7,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:9.7,x:-0.1,y:-0.8},0).wait(1).to({rotation:19.5,y:-1.6},0).wait(1).to({rotation:29.2,x:0.1,y:-2.4},0).wait(1).to({rotation:38.9,x:0.4,y:-3.1},0).wait(1).to({rotation:48.6,x:0.8,y:-3.8},0).wait(1).to({rotation:58.4,x:1.4,y:-4.4},0).wait(1).to({rotation:68.1,x:2,y:-4.9},0).wait(1).to({rotation:77.8,x:2.7,y:-5.3},0).wait(1).to({rotation:87.6,x:3.5,y:-5.6},0).wait(1).to({rotation:97.3,x:4.2,y:-5.7},0).wait(1).to({rotation:107,x:5.1},0).wait(1).to({rotation:116.8,x:5.9,y:-5.6},0).wait(1).to({rotation:126.5,x:6.6,y:-5.3},0).wait(1).to({rotation:136.2,x:7.3,y:-4.9},0).wait(1).to({rotation:145.9,x:7.9,y:-4.4},0).wait(1).to({rotation:155.7,x:8.5,y:-3.8},0).wait(1).to({rotation:165.4,x:8.9,y:-3.1},0).wait(1).to({rotation:175.1,x:9.2,y:-2.4},0).wait(1).to({rotation:184.9,x:9.4,y:-1.6},0).wait(1).to({rotation:194.6,y:-0.8},0).wait(1).to({rotation:204.3,x:9.3,y:0},0).wait(1).to({rotation:214.1,x:9.1,y:0.8},0).wait(1).to({rotation:223.8,x:8.7,y:1.5},0).wait(1).to({rotation:233.5,x:8.2,y:2.1},0).wait(1).to({rotation:243.2,x:7.6,y:2.7},0).wait(1).to({rotation:253,x:7,y:3.2},0).wait(1).to({rotation:262.7,x:6.2,y:3.5},0).wait(1).to({rotation:272.4,x:5.5,y:3.7},0).wait(1).to({rotation:282.2,x:4.6,y:3.8},0).wait(1).to({rotation:291.9,x:3.8,y:3.7},0).wait(1).to({rotation:301.6,x:3.1,y:3.5},0).wait(1).to({rotation:311.4,x:2.3,y:3.2},0).wait(1).to({rotation:321.1,x:1.7,y:2.7},0).wait(1).to({rotation:330.8,x:1.1,y:2.1},0).wait(1).to({rotation:340.5,x:0.6,y:1.5},0).wait(1).to({rotation:350.3,x:0.2,y:0.8},0).wait(1).to({rotation:360,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-7.5,15,15);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ67();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.09,scaleY:1.09},6,cjs.Ease.get(-1)).to({scaleX:1.2,scaleY:1.2},8,cjs.Ease.get(1)).to({scaleX:1.11,scaleY:1.11},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-25.5,51,51);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.parent = this;
	this.instance.setTransform(6.9,4.2,1,1,0,0,0,6.9,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15},9,cjs.Ease.get(1)).to({rotation:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,20);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(7.8,2.5,1,1,0,0,0,7.8,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-17.5,x:7.9},9,cjs.Ease.get(1)).to({rotation:0,x:7.8},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-8.5,19,17);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(-9,-12,18,24), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(-4,8.5,1,1,0,0,0,-3.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-3.4,rotation:12.7,x:-3.9},9,cjs.Ease.get(1)).to({regX:-3.5,rotation:0,x:-4},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-8,25,25);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,7.2,1,1,0,0,0,-1.5,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15,y:7.3},9,cjs.Ease.get(1)).to({rotation:0,y:7.2},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-10.5,22,21);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-10.5,-12,21,24), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-47,-61.5,94,123), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(0,4.2,1,1,0,0,0,0,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-22.9},9,cjs.Ease.get(1)).to({rotation:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-9.5,14,19);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(13, 13, 1)];
	this.instance.cache(-112,-48,223,96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-116.6,-52.7,236,108), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-33.5,-41.5,67,83), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(15.8,4.8,1,1,0,0,0,15.8,4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:21.6,x:15.4,y:5.4},14,cjs.Ease.get(-1)).to({regX:15.7,scaleX:1,scaleY:1,rotation:45,x:14.8,y:5.9},15,cjs.Ease.get(1)).to({regX:15.8,regY:4.7,scaleX:1,scaleY:1,rotation:22.3,x:15.5,y:5.3},15,cjs.Ease.get(-1)).to({regY:4.8,scaleX:1,scaleY:1,rotation:0,x:15.8,y:4.8},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-39.5,63,79);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-47.5,-55,95,110), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-63,-31.5,126,63), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-81.5,-79.5,163,159), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-151,-87,302,174), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(-11.2,-4.8,1,1,0,0,0,-11.2,-4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.86,x:-11.6},29,cjs.Ease.get(-1)).to({scaleX:1,x:-11.2},30,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-15.5,29,31);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(-10.8,-8,1,1,0,0,0,-10.8,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,x:-11.9},29,cjs.Ease.get(-1)).to({scaleX:1,x:-10.8},30,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-15.5,43,31);


(lib.Символ14 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.4,-47.6,91,95.2);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-96.5,-93.5,193,187), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_47 = function() {
		this.gotoAndPlay(41);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(8).call(this.frame_47).wait(1));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AihAvIEiibIAhA+IkiCbg");
	var mask_graphics_1 = new cjs.Graphics().p("AihAvIEiibIAhA+IkiCbg");
	var mask_graphics_2 = new cjs.Graphics().p("AihAvIEiibIAhA+IkiCbg");
	var mask_graphics_3 = new cjs.Graphics().p("AihAvIEiibIAhA+IkiCbg");
	var mask_graphics_4 = new cjs.Graphics().p("AihAvIEiibIAhA+IkiCbg");
	var mask_graphics_5 = new cjs.Graphics().p("AihAvIEiibIAhA+IkiCbg");
	var mask_graphics_6 = new cjs.Graphics().p("AihAvIEiibIAhA+IkiCbg");
	var mask_graphics_7 = new cjs.Graphics().p("AihAvIEiibIAhA+IkiCbg");
	var mask_graphics_8 = new cjs.Graphics().p("AihAvIEiibIAhA+IkiCbg");
	var mask_graphics_9 = new cjs.Graphics().p("AihAvIEiibIAhA+IkiCbg");
	var mask_graphics_10 = new cjs.Graphics().p("AihAvIEiibIAhA+IkiCbg");
	var mask_graphics_11 = new cjs.Graphics().p("AihAvIEiibIAhA+IkiCbg");
	var mask_graphics_12 = new cjs.Graphics().p("AihAvIEiibIAhA+IkiCbg");
	var mask_graphics_13 = new cjs.Graphics().p("AihAvIEiibIAhA+IkiCbg");
	var mask_graphics_14 = new cjs.Graphics().p("AihAvIEiibIAhA+IkiCbg");
	var mask_graphics_15 = new cjs.Graphics().p("AihAvIEiibIAhA+IkiCbg");
	var mask_graphics_16 = new cjs.Graphics().p("AihAvIEiibIAhA+IkiCbg");
	var mask_graphics_39 = new cjs.Graphics().p("AihAvIEiibIAhA+IkiCbg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-4.6,y:-6.1}).wait(1).to({graphics:mask_graphics_1,x:-3.4,y:-4.7}).wait(1).to({graphics:mask_graphics_2,x:-2.3,y:-3.2}).wait(1).to({graphics:mask_graphics_3,x:-1.2,y:-1.7}).wait(1).to({graphics:mask_graphics_4,x:0,y:-0.2}).wait(1).to({graphics:mask_graphics_5,x:-1.2,y:-1.7}).wait(1).to({graphics:mask_graphics_6,x:-2.3,y:-3.2}).wait(1).to({graphics:mask_graphics_7,x:-3.4,y:-4.7}).wait(1).to({graphics:mask_graphics_8,x:-4.6,y:-6.1}).wait(1).to({graphics:mask_graphics_9,x:-3.4,y:-4.7}).wait(1).to({graphics:mask_graphics_10,x:-2.3,y:-3.2}).wait(1).to({graphics:mask_graphics_11,x:-1.2,y:-1.7}).wait(1).to({graphics:mask_graphics_12,x:0,y:-0.2}).wait(1).to({graphics:mask_graphics_13,x:-1.2,y:-1.7}).wait(1).to({graphics:mask_graphics_14,x:-2.3,y:-3.2}).wait(1).to({graphics:mask_graphics_15,x:-3.4,y:-4.7}).wait(1).to({graphics:mask_graphics_16,x:-4.6,y:-6.1}).wait(23).to({graphics:mask_graphics_39,x:-0.6,y:0.5}).wait(9));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhkA+QgBgCAIgOQAIgNAOgQQAPgPATAFQAUAFABACQABACgIAOQgIAPgVAEQgUAFgNAFQgJAEgEAAIgCgBgAA8gVQgNgBACgEQACgFgBgLQgBgMAVgFQAWgGAFAFQAGAGgDADQgCADAAAEQAAAEgNAKQgMAJgLAAIgCAAg");
	this.shape.setTransform(-0.5,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhlA9QgBgCAJgMQAKgMAPgOQAQgPARADQARACABACQABACgKALQgMAJgSAIIgfAPQgJAEgEAAIgBgBgAAwgbQACgFAAgJQAqgXAHADQAHACgFAEQgFAEgBADQAAACgNAJQgOAKgLACIgGABQgEAAABgDg");
	this.shape_1.setTransform(-0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AhnA+QgBgCALgLQALgKAQgOQARgNAOAAQAPgBABACQACADgOAGQgOAFgQAMQgQALgMAHQgJAFgDAAIgCAAgAAugbIAEgMQABgHAVgIQATgHAIAAQAJgBgIAFIgIAFIgPAKIgXAOQgFAEgCAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_2.setTransform(-0.2,0.4);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},39).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},39).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-5.8,18.9,10.6);


(lib.Символ120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ103();
	this.instance.parent = this;
	this.instance.setTransform(0,-1.2);

	this.instance_1 = new lib.Символ118();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ120, new cjs.Rectangle(-79.8,-16.4,162,37.5), null);


(lib.Символ119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ106();
	this.instance.parent = this;
	this.instance.setTransform(0,-1.2);

	this.instance_1 = new lib.Символ116();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ119, new cjs.Rectangle(-56.8,-16.2,116,37.5), null);


(lib.Символ114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ113();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.345,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ114, new cjs.Rectangle(-680.9,-360.5,1364,724), null);


(lib.Символ102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ120();
	this.instance.parent = this;
	this.instance.setTransform(0,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ120();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.3,97.2,1,1.283,0,141.2,0);
	this.instance_1.alpha = 0.102;
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-82,-18,166,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ102, new cjs.Rectangle(-81.8,-15.2,194,139), null);


(lib.Символ101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ119();
	this.instance.parent = this;
	this.instance.setTransform(-11.2,101.2,1,1.216,0,-145.3,0);
	this.instance.alpha = 0.102;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-59,-18,120,42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ119();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ101, new cjs.Rectangle(-79.5,-15,144,142), null);


(lib.Символ100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 102
	this.instance = new lib.Символ102();
	this.instance.parent = this;
	this.instance.setTransform(475.2,3.3,1,1,0,0,0,79.5,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.37,scaleY:1.37,x:475.3,y:3.4},14,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:475.2,y:3.3},15,cjs.Ease.get(1)).wait(31));

	// Символ 101
	this.instance_1 = new lib.Символ101();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-76.8,2.9,1,1,0,0,0,-54.8,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({regX:-54.9,scaleX:1.21,scaleY:1.21,x:-76.9},15,cjs.Ease.get(1)).to({regX:-54.8,scaleX:1,scaleY:1,x:-76.8},15,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ114();
	this.instance_2.parent = this;
	this.instance_2.setTransform(199,-11.8);
	this.instance_2.alpha = 0.32;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-481.9,-372.3,1364,724);


(lib.Символ99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ98();
	this.instance.parent = this;
	this.instance.alpha = 0.559;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ99, new cjs.Rectangle(-48,-63.7,100,130), null);


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


(lib.Символ86 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ85();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-7,10.7,10.7);


(lib.Символ83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ82();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},16,cjs.Ease.get(1)).to({alpha:1},18,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-155.4,650,314);


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ77();
	this.instance.parent = this;

	this.instance_1 = new lib.Символ73();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ78, new cjs.Rectangle(-25.5,-25.5,51,51), null);


(lib.Символ74 = function(mode,startPosition,loop) {
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

	// Слой 2
	this.instance = new lib.Символ78();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ68();
	this.instance.parent = this;
	this.instance.setTransform(-4.5,1.6);

	this.instance_1 = new lib.Символ66();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ69, new cjs.Rectangle(-25.5,-25.5,51,51), null);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(0,5.5);

	this.instance_1 = new lib.Символ59();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,-7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ62, new cjs.Rectangle(-10.5,-17.5,21,35), null);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.parent = this;
	this.instance.setTransform(1.5,5.5);

	this.instance_1 = new lib.Символ57();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1,-9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(-10.5,-17.5,21,35), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(-18.6,9,1,1,0,0,0,-17.9,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:14.3,x:-18.7},14,cjs.Ease.get(-1)).to({regY:9.1,scaleX:1,scaleY:1,rotation:30,y:9.1},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:14.8,x:-18.8},15,cjs.Ease.get(-1)).to({regY:9,scaleX:1,scaleY:1,rotation:0,x:-18.6,y:9},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.2,-41.5,67,83);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 30
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(-34.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 28
	this.instance_1 = new lib.Символ28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18.5,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-66,-67,132,134), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_79 = function() {
		this.gotoAndPlay(61);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(20).call(this.frame_79).wait(1));

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(52.2,53.9,1,1,0,0,0,52.4,53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:52.5,regY:53.4,scaleX:1,scaleY:1,rotation:23.3,x:52.3},14,cjs.Ease.get(-1)).to({regX:52.4,scaleX:1,scaleY:1,rotation:35.8,x:52.2,y:54},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:24.1},15,cjs.Ease.get(-1)).to({regY:53.5,scaleX:1,scaleY:1,rotation:0,y:53.9},15,cjs.Ease.get(1)).wait(1).to({regX:52.5,regY:53.4,scaleX:1,scaleY:1,rotation:23.3,x:52.3},4,cjs.Ease.get(-1)).to({regX:52.4,scaleX:1,scaleY:1,rotation:35.8,x:52.2,y:54},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:24.1},5,cjs.Ease.get(-1)).to({regY:53.5,scaleX:1,scaleY:1,rotation:0,y:53.9},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.2,-66.6,132,134);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 32
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(50.5,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 26
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-21,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-84,-43,167.3,86), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,1,1,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-109.9,-107.4,219.9,214.9), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.blink = new lib.Символ5();
	this.blink.parent = this;
	this.blink.setTransform(29.2,-8.2);

	this.timeline.addTween(cjs.Tween.get(this.blink).wait(1));

	// Слой 3
	this.rot = new lib.Символ86();
	this.rot.parent = this;
	this.rot.setTransform(42.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.rot).wait(1));

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-48,-29,96,58), null);


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
	this.instance.setTransform(124.4,4.4);

	this.instance_1 = new lib.Символ88();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ122();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ89, new cjs.Rectangle(-101.8,-17.5,244.4,38.5), null);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ69();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-263.2},49,cjs.Ease.get(-1)).to({x:-537.1},51,cjs.Ease.get(1)).to({x:-271.3},49,cjs.Ease.get(-1)).to({x:0},50,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-25.5,51,51);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.parent = this;
	this.instance.setTransform(0.2,13.4,1,1,0,0,0,2.2,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:15.3,rotation:-8.5,x:0.3},9).to({regY:15.4,rotation:0,x:0.2},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-19.5,21,35);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.parent = this;
	this.instance.setTransform(6,14.8,1,1,0,0,0,6,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-27.7,y:14.9},9,cjs.Ease.get(1)).to({rotation:0,y:14.8},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-17.5,21,35);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_79 = function() {
		this.gotoAndPlay(61);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(20).call(this.frame_79).wait(1));

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(-75.1,14.5,1,1,0,0,0,-75.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:14.6,rotation:2.5,y:14.6},14,cjs.Ease.get(-1)).to({rotation:5.5,x:-75.2},15,cjs.Ease.get(1)).to({rotation:2.6},15,cjs.Ease.get(-1)).to({regY:14.5,rotation:0,x:-75.1,y:14.5},15,cjs.Ease.get(1)).wait(1).to({regY:14.6,rotation:2.5,y:14.6},5,cjs.Ease.get(-1)).to({rotation:5.5,x:-75.2},5,cjs.Ease.get(1)).to({rotation:2.6},4,cjs.Ease.get(-1)).to({regY:14.5,rotation:0,x:-75.1,y:14.5},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.6,-43,167.3,86);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.ruka = new lib.Символ14();
	this.ruka.parent = this;
	this.ruka.setTransform(43.7,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.ruka).wait(1));

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(-71.1,67,1,1,-8.2,0,0,-69.9,62.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-130.6,-122.4,239.6,235.7), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.golova = new lib.Символ2();
	this.golova.parent = this;
	this.golova.setTransform(26.2,28.3,1,1,0,0,0,26.2,28.3);

	this.timeline.addTween(cjs.Tween.get(this.golova).to({rotation:1,x:26.3},14,cjs.Ease.get(-1)).to({rotation:2.2},15,cjs.Ease.get(1)).to({regX:26.3,rotation:1,y:28.4},16,cjs.Ease.get(-1)).to({regX:26.2,rotation:0,x:26.2,y:28.3},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-29,96,58);


(lib.Символ94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 47
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(0,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 45
	this.instance_1 = new lib.Символ45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 63
	this.instance_2 = new lib.Символ63();
	this.instance_2.parent = this;
	this.instance_2.setTransform(16.5,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 51
	this.instance_3 = new lib.Символ51();
	this.instance_3.parent = this;
	this.instance_3.setTransform(21.7,-34.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 53
	this.instance_4 = new lib.Символ53();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-31.5,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Символ 61
	this.instance_5 = new lib.Символ61();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.3,-55.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ94, new cjs.Rectangle(-47,-73.4,94,146.4), null);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ70();
	this.instance.parent = this;
	this.instance.setTransform(23.5,-78);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:16},24,cjs.Ease.get(-1)).to({y:114},25,cjs.Ease.get(1)).to({y:18},25,cjs.Ease.get(-1)).to({y:-78},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-103.5,51,51);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ95();
	this.instance.parent = this;
	this.instance.setTransform(1.8,-3.2);
	this.instance.alpha = 0.109;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ruka_24.png
	this.instance_1 = new lib.Символ94();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-44,-74.1,94,151.1), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_89 = function() {
		this.gotoAndPlay(61);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(30).call(this.frame_89).wait(1));

	// Слой 1
	this.vant = new lib.Символ11();
	this.vant.parent = this;
	this.vant.setTransform(-62.4,64.5,1,1,-3.5,0,0,-70.1,67.8);

	this.timeline.addTween(cjs.Tween.get(this.vant).to({regX:-70,rotation:2,y:64.6},14,cjs.Ease.get(-1)).to({scaleX:1,rotation:0,skewX:6.2,skewY:10.4,y:64.5},15,cjs.Ease.get(1)).to({regX:-70.1,scaleX:1,rotation:2.3,skewX:0,skewY:0,x:-62.5,y:64.6},15,cjs.Ease.get(-1)).to({rotation:-3.5,x:-62.4,y:64.5},15,cjs.Ease.get(1)).wait(1).to({rotation:2.3,x:-62.5,y:64.6},0).to({regX:-70,scaleX:1,rotation:0,skewX:6.2,skewY:10.4,x:-62.4,y:64.5},4,cjs.Ease.get(1)).wait(1).to({regX:-70.1,scaleX:1,rotation:2.3,skewX:0,skewY:0,x:-62.5,y:64.6},4,cjs.Ease.get(-1)).wait(1).to({regX:-70,scaleY:0.88,rotation:0,skewX:-0.1,skewY:2.3,x:-62.4},4,cjs.Ease.get(1)).wait(1).to({regX:-70.1,scaleY:1,rotation:2.3,skewX:0,skewY:0,x:-62.5},4,cjs.Ease.get(-1)).wait(1).to({regX:-70,scaleY:0.88,rotation:0,skewX:-0.1,skewY:2.3,x:-62.4},4,cjs.Ease.get(1)).wait(1).to({regX:-70.1,scaleY:1,rotation:2.3,skewX:0,skewY:0,x:-62.5},4,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.1,-133,246.8,243.2);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(16.5,64.5,1,1,0,0,0,19.5,68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:19.4,scaleX:1,scaleY:1,rotation:14.8,y:64.6},9,cjs.Ease.get(-1)).to({regX:19.5,scaleX:1,scaleY:1,rotation:30,y:64.5},10,cjs.Ease.get(1)).to({regX:19.4,scaleX:1,scaleY:1,rotation:14.8,y:64.6},10,cjs.Ease.get(-1)).to({regX:19.5,scaleX:1,scaleY:1,rotation:0,y:64.5},10,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ99();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.8,90.5,1,1,0,0,0,0,46.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,scaleX:1,scaleY:1,rotation:12.3,x:17.9},9,cjs.Ease.get(-1)).to({regX:0,scaleX:1,scaleY:1,rotation:26.2,x:17.8},10,cjs.Ease.get(0.88)).to({scaleX:1,scaleY:1,rotation:13},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0},10,cjs.Ease.get(0.88)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-78.1,115.8,188.2);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 33
	this.nogal = new lib.Символ40();
	this.nogal.parent = this;
	this.nogal.setTransform(48.6,-60);

	this.timeline.addTween(cjs.Tween.get(this.nogal).wait(1));

	// Слой 1
	this.vantuz = new lib.Символ12();
	this.vantuz.parent = this;
	this.vantuz.setTransform(127.8,-52.1);

	this.timeline.addTween(cjs.Tween.get(this.vantuz).wait(1));

	// Символ 24
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(44,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 34
	this.nogap = new lib.Символ34();
	this.nogap.parent = this;
	this.nogap.setTransform(-67.5,-31);

	this.timeline.addTween(cjs.Tween.get(this.nogap).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-133.7,-185.1,377.1,290.2), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.zadvantuz = new lib.Символ35();
	this.zadvantuz.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.zadvantuz).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-133.7,-185.1,377.1,290.2), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_77 = function() {
		this.gotoAndPlay(61);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(18).call(this.frame_77).wait(1));

	// Слой 1
	this.zadvantuz1 = new lib.Символ36();
	this.zadvantuz1.parent = this;
	this.zadvantuz1.setTransform(88.3,93.5,1,1,0,0,0,88.3,93.5);

	this.timeline.addTween(cjs.Tween.get(this.zadvantuz1).to({rotation:-3.3,x:88.4,y:93.6},13,cjs.Ease.get(-1)).to({rotation:-7.5,x:88.3,y:93.5},16,cjs.Ease.get(1)).to({regX:88.2,rotation:-3.3},16,cjs.Ease.get(-1)).to({regX:88.3,rotation:0},14,cjs.Ease.get(1)).wait(1).to({rotation:-3.3,x:88.4,y:93.6},4,cjs.Ease.get(-1)).to({rotation:-7.5,x:88.3,y:93.5},4,cjs.Ease.get(1)).to({regX:88.2,rotation:-3.3},5,cjs.Ease.get(-1)).to({regX:88.3,rotation:0},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.7,-185.1,377.1,290.2);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 37
	this.zadvantuz2 = new lib.Символ37();
	this.zadvantuz2.parent = this;
	this.zadvantuz2.setTransform(-44.6,-59);

	this.timeline.addTween(cjs.Tween.get(this.zadvantuz2).wait(1));

	// Символ 18
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(62.9,146.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 20
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(163.9,80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 22
	this.instance_2 = new lib.Символ22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(13.4,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.golova1 = new lib.Символ3();
	this.golova1.parent = this;
	this.golova1.setTransform(-84.5,25.8);

	this.timeline.addTween(cjs.Tween.get(this.golova1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-178.3,-244.1,377,406.2), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.devochka = new lib.Символ42();
	this.devochka.parent = this;
	this.devochka.setTransform(-23,21,0.728,0.728);

	this.timeline.addTween(cjs.Tween.get(this.devochka).wait(1));

	// Слой 2
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(-9.2,91.7);
	this.instance.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-450,-288,1.001,1.001);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-450,-288,801.1,445.6), null);


(lib.Символ7 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ135();
	this.instance.parent = this;
	this.instance.setTransform(474.6,-20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:276.5,y:-21.2},5).to({x:291.5},2).wait(1).to({x:276.5},2).to({x:474.6,y:-20.6},5).wait(1));

	// Слой 8
	this.instance_1 = new lib.Символ125();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-154.9,42);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ71();
	this.instance_2.parent = this;
	this.instance_2.setTransform(253,-54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0},7).wait(1).to({alpha:1},7).wait(1));

	// Слой 6
	this.instance_3 = new lib.Символ89();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-213.3,113.1,0.77,0.77);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:18.4,regY:-2.1,x:-199.2,y:107.8},0).wait(1).to({y:106},0).wait(1).to({regX:0,regY:0,x:-213.3,y:106.3},0).wait(1).to({regX:18.4,regY:-2.1,x:-199.2,y:139.5},0).wait(1).to({y:166},0).wait(1).to({y:177.2},0).wait(1).to({regX:0,regY:0,x:-213.3,y:192.7},0).wait(2).to({regX:18.4,regY:-2.1,x:-199.2,y:169.5},0).wait(1).to({y:147.9},0).wait(1).to({y:126.3},0).wait(1).to({regX:0,regY:0,x:-213.3,y:106.3},0).wait(1).to({regX:18.4,regY:-2.1,x:-199.2,y:108.3},0).wait(1).to({y:110.1},0).wait(1).to({regX:0,regY:0,x:-213.3,y:113.1},0).wait(1));

	// Слой 2
	this.instance_4 = new lib.Символ64();
	this.instance_4.parent = this;
	this.instance_4.setTransform(224,93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.28,scaleY:1.28},2).to({scaleX:1,scaleY:1,y:262.6},5).wait(1).to({scaleX:1.28,scaleY:1.28,y:93.5},5).to({scaleX:1,scaleY:1},2).wait(1));

	// Слой 7
	this.instance_5 = new lib.Символ100();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-192.6,-23.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-49.6},3).to({y:17.4,alpha:0},4).wait(1).to({y:-49.6,alpha:1},4).to({y:-23.6},3).wait(1));

	// Слой 5
	this.instance_6 = new lib.Символ79();
	this.instance_6.parent = this;
	this.instance_6.setTransform(181.3,-135.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:0},7).wait(1).to({alpha:1},7).wait(1));

	// Слой 1
	this.devochka1 = new lib.Символ41();
	this.devochka1.parent = this;
	this.devochka1.setTransform(-49.8,40.6,1,1,0,0,0,-72.8,61.6);

	this.timeline.addTween(cjs.Tween.get(this.devochka1).to({scaleX:1.48,scaleY:1.48,y:115.7},4).to({scaleX:1.27,scaleY:1.27,y:95.7},3).wait(1).to({scaleX:1.48,scaleY:1.48,y:115.7},3).to({scaleX:1,scaleY:1,y:40.6},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-674.5,-395.9,1365,822.6);


// stage content:
(lib.vantuz600x300 = function(mode,startPosition,loop) {
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
		
		 this.cursor = "none";
		 this.btnvant.cursor = "none";
		
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
			_this.prizel.gotoAndStop(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(9);
			_this.prizel.gotoAndStop(0);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btnvant.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
			_this.main.devochka1.devochka.zadvantuz2.zadvantuz1.zadvantuz.vantuz.gotoAndPlay(61);
			_this.main.devochka1.devochka.zadvantuz2.zadvantuz1.zadvantuz.vantuz.vant.ruka.gotoAndPlay(1);
			_this.main.devochka1.devochka.golova1.golova.rot.gotoAndPlay(1);
			_this.main.devochka1.devochka.golova1.golova.blink.gotoAndPlay(41);
			_this.main.devochka1.devochka.zadvantuz2.zadvantuz1.zadvantuz.nogal.gotoAndPlay(61);
			_this.main.devochka1.devochka.zadvantuz2.zadvantuz1.zadvantuz.nogap.gotoAndPlay(61);
			_this.main.devochka1.devochka.zadvantuz2.gotoAndPlay(61);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btnvant.addEventListener("mouseout", fl_MouseOutHandler);
		
		function fl_MouseOutHandler()
		{
			_this.main.devochka1.devochka.zadvantuz2.zadvantuz1.zadvantuz.vantuz.gotoAndPlay(1);
			_this.main.devochka1.devochka.zadvantuz2.zadvantuz1.zadvantuz.vantuz.vant.ruka.gotoAndPlay(6);
			_this.main.devochka1.devochka.golova1.golova.rot.gotoAndPlay(6);
			_this.main.devochka1.devochka.golova1.golova.blink.gotoAndPlay(0);
			_this.main.devochka1.devochka.zadvantuz2.zadvantuz1.zadvantuz.nogal.gotoAndPlay(1);
			_this.main.devochka1.devochka.zadvantuz2.zadvantuz1.zadvantuz.nogap.gotoAndPlay(1);
			_this.main.devochka1.devochka.zadvantuz2.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.instance = new lib.Символ83();
	this.instance.parent = this;
	this.instance.setTransform(300,150.5,0.938,0.993);
	this.instance.alpha = 0.48;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Actions
	this.prizel = new lib.Символ74();
	this.prizel.parent = this;
	this.prizel.setTransform(697.2,37.6);

	this.timeline.addTween(cjs.Tween.get(this.prizel).wait(1));

	// Слой 2
	this.btnvant = new lib.Символ72();
	this.btnvant.parent = this;
	this.btnvant.setTransform(379.1,99.1);
	new cjs.ButtonHelper(this.btnvant, 0, 1, 2, false, new lib.Символ72(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnvant).wait(1));

	// vant_15.png
	this.main = new lib.Символ7();
	this.main.parent = this;
	this.main.setTransform(300.6,170);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.9,-75.9,1364,822.6);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1479725483614", id:"bg"},
		{src:"images/mish.png?1479725483614", id:"mish"},
		{src:"images/rot.png?1479725483614", id:"rot"},
		{src:"images/ruka_03.png?1479725483614", id:"ruka_03"},
		{src:"images/ruka_06.png?1479725483614", id:"ruka_06"},
		{src:"images/ruka_10.png?1479725483614", id:"ruka_10"},
		{src:"images/ruka_13.png?1479725483614", id:"ruka_13"},
		{src:"images/ruka_16.png?1479725483614", id:"ruka_16"},
		{src:"images/ruka_21.png?1479725483614", id:"ruka_21"},
		{src:"images/ruka_24.png?1479725483614", id:"ruka_24"},
		{src:"images/ruka_28.png?1479725483614", id:"ruka_28"},
		{src:"images/vant_03.png?1479725483614", id:"vant_03"},
		{src:"images/vant_06.png?1479725483614", id:"vant_06"},
		{src:"images/vant_08.png?1479725483614", id:"vant_08"},
		{src:"images/vant_09.png?1479725483614", id:"vant_09"},
		{src:"images/vant_15.png?1479725483614", id:"vant_15"},
		{src:"images/vant_19.png?1479725483614", id:"vant_19"},
		{src:"images/vant_22.png?1479725483614", id:"vant_22"},
		{src:"images/vant_227.png?1479725483614", id:"vant_227"},
		{src:"images/vant_227d_03.png?1479725483614", id:"vant_227d_03"},
		{src:"images/vant_27.png?1479725483614", id:"vant_27"},
		{src:"images/vant_2qwe7_031.png?1479725483614", id:"vant_2qwe7_031"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;