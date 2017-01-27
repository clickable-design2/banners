(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.deva = function() {
	this.initialize(img.deva);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,263,384);


(lib.divava = function() {
	this.initialize(img.divava);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,427,134);


(lib.dol1 = function() {
	this.initialize(img.dol1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,61);


(lib.dol3 = function() {
	this.initialize(img.dol3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,47);


(lib.dol5 = function() {
	this.initialize(img.dol5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,56);


(lib.dol8 = function() {
	this.initialize(img.dol8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,56);


(lib.dol_pop = function() {
	this.initialize(img.dol_pop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,58);


(lib.fon_600 = function() {
	this.initialize(img.fon_600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,740,370);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,113);


(lib.hand_p = function() {
	this.initialize(img.hand_p);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,139);


(lib.kabl = function() {
	this.initialize(img.kabl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,63);


(lib.logo_pokerdom = function() {
	this.initialize(img.logo_pokerdom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,349,125);


(lib.nog = function() {
	this.initialize(img.nog);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,106);// helper functions:

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


(lib.Символ94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3300").ss(4,1,1).p("AAUAAQAAAJgGAFQgFAGgJAAQgIAAgGgGQgFgFAAgJQAAgIAFgGQAGgFAIAAQAJAAAFAFQAGAGAAAIg");
	this.shape.setTransform(2,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAOQgFgGAAgIQAAgHAFgHQAHgFAHAAQAIAAAGAFQAGAHAAAHQAAAIgGAGQgGAGgIAAQgHAAgHgGg");
	this.shape_1.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ94, new cjs.Rectangle(-2,-2,8,8), null);


(lib.Символ91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3300").ss(5,1,1).p("AAAmtIAABaAAAFKIAABk");
	this.shape.setTransform(0,43);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ91, new cjs.Rectangle(-2.5,-2.5,5,91), null);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGIHvIAAg/QgkgIgdgSQgbgSgTgbQgTgcgJgkQgKglAAgtIAAg8ICDAAIAABGQAAAtAUAVQARATAjAAQAiAAASgTQATgVAAgtQAAghgMgcQgLgagUgXQgTgXhJg9QhAg0gcgsQgUgfgLgjQgMgnAAgsQAAgtAJgjQAKglASgaQARgcAdgSQAbgSAjgHIAAhCIByAAIAABCQAjAHAdASQAbASATAbQATAbAJAjQAJAlAAAtIAAAbIiDAAIAAglQAAgsgRgWQgRgUgiAAQgiAAgRAUQgSAWAAAsQAAAgAMAdQAKAZAVAYQATAXBJA9QBAA1AcArQAUAgALAiQAMAmAAAtQAAAtgKAlQgKAjgTAdQgSAbgcASQgdARgjAJIAAA/gAiHGyQgngOgagdQgbgcgNgpQgOgqAAg0IAAnHQAAg0AOgpQANgqAbgcQAagdAngOQAngOAzAAQAyAAAnAOQAnAOAaAdQAbAcANAqQAOApAAA0IAAHHQAAA0gOAqQgNApgbAcQgaAdgnAOQgnAOgyAAQgzAAgngOgAhhkvQgTAWAAAuIAAHYQAAAuATAVQASAUAiAAQAiAAARgUQATgVAAguIAAnYQAAgugTgWQgRgTgiAAQgiAAgSATgAokG3IAAqcIhqAAIAAhjQAnAAAbgIQAZgIARgPQAYgXAVg3IBcAAIAANsg");
	this.shape.setTransform(65.5,49.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ62, new cjs.Rectangle(0,0,131,99.1), null);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C63842").s().p("AmMDbQgPgHgLgMQgLgMgFgRQgFgSAAgVIAAi/QAAgVAFgRQAFgRALgNQALgMAPgGQARgHAUAAQAWAAAQAHQAQAGALAMQAKANAGARQAFARAAAVIAAC/QAAAVgFASQgGARgKAMQgLAMgQAHQgQAGgWAAQgUAAgRgGgAmIhkQgLAOAAAZIAADDQAAAaALAOQAMAOAVAAQAXAAALgOQAKgOAAgaIAAjDQAAgagKgNQgLgOgXAAQgVAAgMAOgAJsDeIAAknIhfEnIgrAAIAAlyIAlAAIAAETIBckTIAuAAIAAFygAGZDeIgOhLIheAAIgPBLIgmAAIBHlyIA8AAIBHFygAGFBwIgqjWIgpDWIBTAAgACyDeIAAkqIg7EpIgoAAIg+kmIAAEnIgjAAIAAlyIA5AAIA9EnIA7knIA6AAIAAFygAhgDeIAAknIhfEnIgrAAIAAlyIAkAAIAAETIBdkTIAuAAIAAFygAoMDeIAAlNIhbAAIAAFNIgpAAIAAlyICuAAIAAFygAIkiwQgKgEgHgGQgIgHgEgKQgEgKAAgLIAaAAQABAOAJAHQAHAFAOAAQAOAAAIgFQAJgHABgOIAZAAQAAALgEAKQgEAKgHAHQgIAGgKAEQgLADgNAAQgNAAgLgDgAioiwQgLgEgHgGQgHgHgEgKQgEgKgBgLIAaAAQABAOAJAHQAIAFAOAAQANAAAJgFQAIgHABgOIAaAAQAAALgEAKQgEAKgIAHQgHAGgLAEQgKADgNAAQgOAAgKgDg");
	this.shape.setTransform(65.7,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ61, new cjs.Rectangle(0,0,131.5,45.1), null);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AgoDpQgHgDgLgOQhGhYhThcQgUgVgIgLQgOgSgFgTQgFgUADgUQAEgVANgQQAIgKAggbQAbgWAHgTIAFgLQAEgFAFgBIBOBdQAJALAHABQAFAAAKgFQAqgXBCgxQAfgVAHgTIAGgMQAEgGAFAAIABAIQAJATAGAIIALAQIAJATIAKASIANAUIAFAQQAHAUAYAoIAvBJQAFAFAAAFIgBAEIgBADQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAACgEABIgCABQgSAfgMAQQgTAcgUAUQgQAQgTAOQhHAxhZAOIgOABQgKAAgHgDg");
	this.shape.setTransform(26.2,23.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(0,0,52.4,47.2), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AgtELQhGgigwg+QgjgsgghMIgTgxQgJgWAFgOQACgFAEgHIAJgLQAEgGAHgNIALgTQAOgTApgTQA/gcA+gWQAegKAKgIQAHgFARgVIAeglQADgFAEgCQADAAAJACQAsAPAVAKQAjAQAYASQAPALAAALQABAJgLANQgoAxg3AfQgLAIgCAFQgBAGAFAIQAZA0ASAaQAbAoAjAcIAWASIAVAUQAHAIgBAFQgBAFgHAGQgSAOgiALQhFAXghAOQg6AXglAbQgOAKgJABIgCAAQgHAAgMgFg");
	this.shape.setTransform(25.6,27.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(0,0,51.2,54.4), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Ak0BIQgCgHAAgEQABgEAJgIQBGg3BQgmIAigPQATgKANgIQAQgKAZgUIAngfQALgJA6giQAsgZAWgWIAVgXQANgMANgFIABACIABgBQABAAAAAAQABAAAAABQABAAAAAAQAAABABABQBCBbA5BiQAEAJAAACQAAAJgGABIAAACQgBAFgEAEQhIBAhkBBQg9Aoh8BIQgxAdgVALQgoAUgiALQhLhXgghugAkICgIADAHQADAEAEACQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIgCgDIAAgCQgBgCgDgEIgEgEIgCgDIAAAAQgBADAEAGg");
	this.shape.setTransform(31.1,26.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(0,0,62.2,53.8), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dol5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(0,0,64,56), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AjwEzQgTgBgLgCQgQgCgLgIQgSgMgKgdIgOgzIgjhYQgVgzAHglQABgGADgDQADgBAIACQAsAQA7AEQAkADBGgBQAQAAAHgFQAGgGADgSQAIg9AAgiQABg1gOgoQgFgRgPgfQgOgfgGgRQgHgXALgKQAGgFASABIGkATQAhABAOAJQAIAFAMAPQAaAgAKAWQAKAXADAgQADAUAAAlQABAxgBAbQgCApgIAhQgGAZgTAxIggBRQgMAggKARQgPAZgUAMQgQAKgYADQgOACgcABIg/AAQi5AAiwgFg");
	this.shape.setTransform(39.1,31.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(0,0,78.2,62.3), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Ai5BoQgugEgfgMQgKgEgDgEQgGgIAHgFIAHgEQAGgDAEgHIAHgOQAHgPARgYQATgcAHgLIANgcQAIgRAHgKQAGgIAFgCQAIgCANAIIAkAWQAVANAMALIAVAXQAPAQAeANQA5AcAngPQAMgEARgKIAagTIAUgLQALgGAGgHIANgTQAIgLAIgFQAJgFAFAEQADACADAIIAtB6QACAGgBADQgBAIgPABIhwAFIg1AEIhEAKQhAAKgqADQgiADggAAIgqgBg");
	this.shape.setTransform(27.9,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(0,0,55.8,21.1), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo_pokerdom();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,0,349,125), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon_600();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(0,0,740,370), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhtBXIgBgDQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIADgEIALgTIAEgEIAGgEIAJgGQAIgGATgGQAHgCADAAQAEABABAFQAAAFgEAGIgEAIIgDADQgJALgOAHIgUAJIgIAEIgFABIgFADIgBAAQgDAAgEgCgABDgnQgDAAgCgCQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQgEABgCgCQgDgDADgIIADgIQADgHAOgFIASgIQAGgDACABQACAAADADQAEAEgBAHIgBADIACAMQABADgBADQgBAFgIACIgYAGIgHACIgDgBg");
	this.shape.setTransform(141.3,43.2);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(37).to({_off:false},0).to({_off:true},1).wait(32));

	// Слой 1
	this.instance = new lib.deva();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,263,384);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kabl();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,87,63), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEWCDQgLgEgHgKQgIgJgDgLQgEgNAAgPIAAiJQAAgPAEgMQADgMAIgKQAHgIALgFQAMgEAPgBQAPABAMAEQALAFAHAIQAHAKAEAMQAEAMAAAPIAAAYIgcAAIAAgaQAAgRgIgLQgIgKgPAAQgQAAgIAKQgIALAAARIAACNQAAARAIAKQAIALAQgBQAPABAIgLQAIgJAAgSIAAgjIAcAAIAAAhQAAAPgEANQgEALgHAJQgHAKgLAEQgMAEgPAAQgPAAgMgEgAi0CDQgLgEgIgKQgIgJgEgLQgDgNAAgPIAAiJQAAgPADgNQAEgMAIgJQAIgJALgEQALgEAPgBQAQABALAEQAMAEAHAJQAIAJAEAMQAEANAAAPIAACJQAAAPgEANQgEALgIAJQgHAKgMAEQgLAEgQAAQgPAAgLgEgAixhiQgIALAAARIAACNQAAASAIAJQAIALAPgBQAQABAIgLQAIgJAAgSIAAiNQAAgRgIgLQgIgKgQAAQgPAAgIAKgABiCGIAAgbQARAAAJgGQAJgFADgQIAGgRIg9jDIAeAAIAtCfIAnifIAfAAIg5DOQgDARgFAKQgFALgIAIQgIAHgMAEQgJADgNAAIgIAAgAAdCFIAAh3IhAAAIAAB3IgeAAIAAkJIAeAAIAAB4IBAAAIAAh4IAeAAIAAEJgAlsCFIAAkJIBwAAIAAAbIhSAAIAABTIAfAAQAPAAAMAEQAMADAIAIQAIAHADALQAFAMAAAQIAAAeQAAAPgEAMQgEAMgHAJQgIAIgMADQgLAFgQAAgAlOBqIAgAAQAQAAAIgIQAIgJAAgSIAAgiQAAgSgJgJQgHgGgRgBIgfAAg");
	this.shape.setTransform(36.5,15.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,1.8,73,27.1), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C63842").s().p("Ah/CDQgLgEgIgKQgHgJgDgLQgEgNAAgPIAAgaIAcAAIAAAcQAAARAHAKQAIALAQgBQAQABAIgLQAHgJAAgVIAAgVQAAgTgJgKQgEgFgGgDQgHgDgIABIgNAAIAAgaIAOAAQAPAAAJgJQAJgLAAgQIAAgMQAAgVgHgLQgIgKgQAAQgQAAgIAKQgHALAAARIAAASIgcAAIAAgQQAAgPAEgNQADgMAIgJQAHgJALgEQAMgEAPgBQAPABALAEQALAFAIAIQAHAKAEAMQAEAMAAAPIAAAHIgCATQgCAJgFAHQgEAHgGAFQgGAFgIADQAIADAGAEQAHAGAEAHQAIANAAAVIAAAVQAAAPgEANQgEALgHAJQgIAKgLAEQgLAEgPAAQgPAAgMgEgAkSCDQgLgEgIgKQgIgJgEgLQgDgNAAgPIAAiJQAAgPADgNQAEgMAIgJQAIgJALgEQALgEAPgBQAQABALAEQAMAEAHAJQAIAJAEAMQAEANAAAPIAACJQAAAPgEANQgEALgIAJQgHAKgMAEQgLAEgQAAQgPAAgLgEgAkPhiQgIALAAARIAACNQAAASAIAJQAIALAPgBQAQABAIgLQAIgJAAgSIAAiNQAAgRgIgLQgIgKgQAAQgPAAgIAKgAGtCFIAAjTIhEDTIgfAAIAAkJIAbAAIAADFIBCjFIAhAAIAAEJgAEQCFIAAjVIgqDVIgcAAIgtjTIAADTIgZAAIAAkJIApAAIAsDUIAqjUIApAAIAAEJgAgMCFIAAkJIAdAAIAABpIAaAAQAQAAAMAEQALAEAIAIQAIAJAEAKQADAMAAAQIAAAgQAAAPgDAMQgEAMgHAJQgHAIgMAEQgLAFgPAAgAARBqIAdAAQAPAAAIgJQAHgJAAgSIAAgjQAAgUgIgIQgIgIgRABIgaAAgAnHCFIAAkJIA8AAQAQAAALAEQALAEAHAHQAGAHAEALQADALAAAPIAAAMQAAAXgHAMQgEAGgGAFQgGAEgIADQAJADAHAFQAHAEAEAHQAEAIADAJIABArQAAAOgDAMQgEAMgHAIQgIAIgLAEQgMAEgPAAgAmpBqIAgAAQAQAAAHgJQAIgIAAgTIAAgYQAAgLgCgIQgCgHgFgEQgEgFgIgCQgGgCgKAAIgaAAgAmpgTIAXAAQATAAAIgHQAEgFACgGQADgHAAgKIAAgQQAAgSgHgJQgHgIgQAAIgdAAg");
	this.shape.setTransform(45.6,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,91.2,27.1), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AArCdQgLgEgIgJQgIgKgEgLQgDgNAAgPIAAiJQAAgPADgNQAEgMAIgIQAIgKALgEQALgFAPABQAQgBALAFQAMAEAHAKQAIAIAEAMQAEANAAAPIAACJQAAAPgEANQgEALgIAKQgHAJgMAEQgLAEgQABQgPgBgLgEgAAuhHQgIAKAAARIAACNQAAASAIAKQAIAKAPAAQAQAAAIgKQAIgKAAgSIAAiNQAAgRgIgKQgIgLgQAAQgPAAgIALgAj6CdQgLgEgHgJQgIgKgDgLQgEgNAAgPIAAiJQAAgPAEgMQADgNAIgIQAHgJALgFQAMgFAPABQAPgBAMAFQALAFAHAJQAHAIAEANQAEAMAAAPIAAAYIgcAAIAAgaQAAgRgIgKQgIgLgPAAQgQAAgIALQgIAKAAARIAACNQAAARAIALQAIAKAQAAQAPAAAIgKQAIgKAAgSIAAgjIAcAAIAAAhQAAAPgEANQgEALgHAKQgHAJgLAEQgMAEgPABQgPgBgMgEgAEBCfIAAjTIhEDTIgfAAIAAkJIAbAAIAADFIBCjFIAhAAIAAEJgAiJCfIAAkJIA8AAQAQAAALADQALAFAHAHQAGAHAEALQADALAAAPIAAAMQAAAXgHAMQgEAFgGAFQgGAEgIADQAJADAHAFQAHAFAEAHQAEAIADAJIABArQAAAOgDAMQgEAMgHAIQgIAIgLAEQgMAEgPAAgAhrCEIAgAAQAQAAAHgJQAIgJAAgSIAAgYQAAgLgCgHQgCgIgFgEQgEgFgIgCQgGgCgKAAIgaAAgAhrAGIAXAAQATAAAIgGQAEgFACgGQADgHAAgKIAAgQQAAgSgHgIQgHgJgQAAIgdAAgADOh+QgIgDgFgEQgFgFgDgHQgDgHAAgJIASAAQABAKAGAGQAGADAKAAQAKAAAFgDQAHgGAAgKIATAAQAAAJgDAHQgDAHgFAFQgGAEgHADQgIADgJgBQgKABgHgDg");
	this.shape.setTransform(28.4,16.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,56.8,32.3), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dol_pop();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,85,58), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nog();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,53,106), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("ABQAAQAAAhgXAYQgYAXghAAQggAAgYgXQgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-9,-9,18,18), null);


(lib.копияshape149 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C63842").s().p("AkECtIDTAAIAAoQQByBZCNhZIiTIQIDKAAQiyBUhTBjQhjhwihhHg");
	this.shape.setTransform(-1.9,-9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-44.8,52.2,71.2);


(lib.hand_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand();
	this.instance.parent = this;
	this.instance.setTransform(-22,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_1, new cjs.Rectangle(-22,-56.5,44,113), null);


(lib.hand_p_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand_p();
	this.instance.parent = this;
	this.instance.setTransform(-52,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_p_1, new cjs.Rectangle(-52,-69.5,104,139), null);


(lib.divava_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.divava();
	this.instance.parent = this;
	this.instance.setTransform(-213.5,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.divava_1, new cjs.Rectangle(-213.5,-67,427,134), null);


(lib.Символ93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ91();
	this.instance.parent = this;
	this.instance.setTransform(43,43,1,1,-90,0,0,0,43);

	this.instance_1 = new lib.Символ91();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43,43,1,1,0,0,0,0,43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ93, new cjs.Rectangle(-2.5,-2.5,91,91), null);


(lib.Символ92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ93();
	this.instance.parent = this;
	this.instance.setTransform(43,43,1,1,0,0,0,43,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,91,91);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.parent = this;
	this.instance.setTransform(65.7,103.9,1,1,0,0,0,65.5,49.5);

	this.instance_1 = new lib.Символ61();
	this.instance_1.parent = this;
	this.instance_1.setTransform(65.7,22.5,1,1,0,0,0,65.7,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ63, new cjs.Rectangle(0,0,131.5,153.4), null);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ60();
	this.instance.parent = this;
	this.instance.setTransform(27.1,23.6,1,1,0,0,0,26.2,23.6);
	this.instance.alpha = 0.34;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

	// Слой 1
	this.instance_1 = new lib.dol3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,47);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ58();
	this.instance.parent = this;
	this.instance.setTransform(26.2,28.1,1,1,0,0,0,25.6,27.2);
	this.instance.alpha = 0.34;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

	// Слой 1
	this.instance_1 = new lib.dol8();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,56);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(33.3,27.9,1,1,0,0,0,31.1,26.9);
	this.instance.alpha = 0.34;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

	// Слой 1
	this.instance_1 = new lib.Символ54();
	this.instance_1.parent = this;
	this.instance_1.setTransform(32,28,1,1,0,0,0,32,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,56);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(38.9,31.1,1,1,0,0,0,39.1,31.2);
	this.instance.alpha = 0.449;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

	// Слой 1
	this.instance_1 = new lib.dol1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,61);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(35.4,35.1,1,1,0,0,0,27.9,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(42.5,29,1,1,0,0,0,42.5,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(0,0,85,58), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand_p_1();
	this.instance.parent = this;
	this.instance.setTransform(52,69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(0,0,104,139), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ57();
	this.instance.parent = this;
	this.instance.setTransform(26,28,1,1,0,0,0,26,28);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ57(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(0,0,52,56), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ63();
	this.instance.parent = this;
	this.instance.setTransform(65.7,-65.9,1,1,0,0,0,65.7,76.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.85,scaleY:0.85,x:65.8},5,cjs.Ease.get(-1)).to({scaleX:0.7,scaleY:0.7,x:65.7},5,cjs.Ease.get(1)).to({scaleX:0.83,scaleY:0.83,x:65.8},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:65.7},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-142.6,131.5,153.4);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(39.5,30.5,1,1,0,0,0,39.5,30.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ52(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-0.2,-0.1,79.2,62.3), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(26,28,1,1,0,0,0,26,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},27).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,56);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 12
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(109.5,59.6,2.074,2.074,0,0,0,36.6,13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:95.8,alpha:0},3).wait(1).to({regX:36.4,x:-516.8,y:59.6,alpha:1},0).wait(2).to({regX:36.6,x:116.7},5).to({regX:36.7,scaleX:1.99,scaleY:1.99,x:112.8,y:58.4},2).wait(67));

	// Символ 10
	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(158.1,7.5,0.943,0.943,0,0,0,28.4,16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:23.9,alpha:0},3).wait(1).to({x:-126.9,y:7.5,alpha:1},0).wait(4).to({x:161.3},5).to({scaleX:0.93,scaleY:0.93,x:158.5,y:7.2},2).wait(65));

	// Символ 11
	this.instance_2 = new lib.Символ11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(80.2,10,0.943,0.943,0,0,0,45.6,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:26.5,alpha:0},3).wait(1).to({x:-204.8,y:10,alpha:1},0).wait(6).to({x:83.4},5).to({scaleX:0.93,scaleY:0.93,x:82,y:9.7},2).wait(63));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.6,-7.7,151.3,98.9);


(lib.Символ29копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(6));

	// Слой 4
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(-136.7,-63.3,1.267,1.267,0,0,0,99.5,23.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:27.3,y:-63.4},3,cjs.Ease.get(-1)).to({x:191.3,y:-63.3},3,cjs.Ease.get(1)).to({x:60.1},2,cjs.Ease.get(-1)).to({x:-136.7},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-262.7,-273.9,166.6,194.4);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(39.5,30.5,1,1,0,0,0,39.5,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360,y:515.7},44).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,61);


(lib.Символ17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.parent = this;
	this.instance.setTransform(32,28,1,1,0,0,0,32,28);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ55(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17_1, new cjs.Rectangle(0,0,64.4,56), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ59();
	this.instance.parent = this;
	this.instance.setTransform(27,23.5,1,1,0,0,0,27,23.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ59(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,54,47.2), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(26,28,1,1,0,0,0,26,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:68.7},14,cjs.Ease.get(-1)).to({x:116},15,cjs.Ease.get(1)).to({x:71},15,cjs.Ease.get(-1)).to({x:26},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,56);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(174.5,62.5,1,1,0,0,0,174.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.07,scaleY:1.07},8,cjs.Ease.get(-1)).to({regX:174.4,regY:62.4,scaleX:1.12,scaleY:1.12,x:174.4,y:62.4},7,cjs.Ease.get(1)).to({regX:174.3,scaleX:1.07,scaleY:1.07,y:62.5},7,cjs.Ease.get(-1)).to({regX:174.5,regY:62.5,scaleX:1,scaleY:1,x:174.5},8,cjs.Ease.get(1)).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,349,125);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(52,69.5,1,1,0,0,0,52,69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:52.1,rotation:-3.8,x:47.7,y:73.3},4,cjs.Ease.get(-1)).to({rotation:-7.7,x:43.3,y:77.1},4,cjs.Ease.get(1)).to({regX:52,rotation:-4.3,x:47,y:73.9},3,cjs.Ease.get(-1)).to({rotation:0,x:52,y:69.5},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,139);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(370,185,1,1,0,0,0,370,185);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05},9,cjs.Ease.get(-1)).to({scaleX:1.1,scaleY:1.1,x:370.1,y:185.1},10,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:370,y:185},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,740,370);


(lib.Символ16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.96,scaleY:0.96},4).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-8.5,17,17);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ92();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,43,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ16_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,3.24,3.24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ94();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.2,-0.3,1,1,0,0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-45.5,-45.5,91,91), null);


(lib.sprite150 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.копияshape149("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.992,1.992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite150, new cjs.Rectangle(-55.8,-89.3,103.9,141.8), null);


(lib.Символ95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.pric = new lib.Символ14();
	this.pric.parent = this;
	this.pric.setTransform(205,9.5);

	this.timeline.addTween(cjs.Tween.get(this.pric).to({x:265},9).to({x:205},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(159.5,-36,91,91);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.pric2 = new lib.Символ95();
	this.pric2.parent = this;
	this.pric2.setTransform(-86,119.5,1,1,0,0,0,76,86);

	this.timeline.addTween(cjs.Tween.get(this.pric2).to({y:139.5},8,cjs.Ease.get(-1)).to({y:159.5},8,cjs.Ease.get(1)).to({y:140.9},7,cjs.Ease.get(-1)).to({y:119.5},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,91,91);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(35.4,35.1,1,1,0,0,0,27.9,10.5);
	this.instance.alpha = 0.449;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

	// Слой 1
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(42.5,29,1,1,0,0,0,42.5,29);

	this.instance_2 = new lib.Символ49();
	this.instance_2.parent = this;
	this.instance_2.setTransform(42.5,29,1,1,0,0,0,42.5,29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,58);


(lib.Символ48 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(107,49.5,0.712,0.712,0,0,0,52,69.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(70,0,74,98.9);


(lib.Символ47 = function(mode,startPosition,loop) {
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

	// Слой 3
	this.instance = new lib.Символ64();
	this.instance.parent = this;
	this.instance.setTransform(-33.8,26,1,1,0,0,0,1.2,58.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(39.5,30.5,1,1,0,0,0,39.5,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(0,0,79,61), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17_1();
	this.instance.parent = this;
	this.instance.setTransform(32,28,1,1,0,0,0,32,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1.8},14,cjs.Ease.get(-1)).to({x:-38},15,cjs.Ease.get(1)).to({x:-3},15,cjs.Ease.get(-1)).to({x:32},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,56);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(27,23.5,1,1,0,0,0,27,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({rotation:360,y:507.7},34).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,47);


(lib.Символ32копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(26,28,1,1,0,0,0,26,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53).to({y:484.2},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,56);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(26,28,1,1,0,0,0,26,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:484.2},39).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,56);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(42.5,29,1,1,0,0,0,42.5,29);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ51(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,85,58), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(42.5,29,1,1,0,0,0,42.5,29);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:29.1,rotation:1.8,y:29.2},2,cjs.Ease.get(-1)).to({regY:29,rotation:3.9,y:29},2,cjs.Ease.get(1)).to({regX:42.6,rotation:1.8,x:42.6,y:29.1},2,cjs.Ease.get(-1)).to({regX:42.5,rotation:0,x:42.5,y:29},2,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,58);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(46.5,171.2,1,1,0,0,0,42.5,29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// Слой 1
	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(131.5,192,1,1,0,0,0,131.5,192);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// Слой 2
	this.instance_2 = new lib.hand_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(202.9,151.2,1,1,0,0,0,8.1,49);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:4.3,x:202.1,y:152.7},9,cjs.Ease.get(-1)).to({rotation:9,x:201.2,y:154.3},10,cjs.Ease.get(1)).to({regX:8.2,rotation:4.3,x:202.1,y:152.8},10,cjs.Ease.get(-1)).to({regX:8.1,rotation:0,x:202.9,y:151.2},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,263,384);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// deva(2).psd
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(624.5,178,1,1,0,0,0,131.5,192);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:131.4,rotation:4,x:633,y:186.2},14,cjs.Ease.get(-1)).to({regX:131.5,rotation:8.5,x:642.1,y:194.9},15,cjs.Ease.get(1)).to({regY:191.8,rotation:4.1,x:633.3,y:186.4},15,cjs.Ease.get(-1)).to({regY:192,rotation:0,x:624.5,y:178},15,cjs.Ease.get(1)).wait(1));

	// Слой 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ap5IeQgrgKhMgmQg7gegdgUQghgXgcgcQg9g/g3hxQgdg9gHgnQgHgfAAguIABhOIAAg8QABgiAJgYQAKgeAjgpQAfglAggbQBAg3B1g0QCWhECegsQBZgYA4gHQApgFBfgBIBrABQA8ACAtAFQBBAIBdAXICcAnIBwAZQBCAPAtAPQBfAhBSA4QARAMAAALQAAAKgLAIIgUANIBpBKIBbA/QAzAiArAXQATALAFAHQAEAGABAHQABAIgEAGQgFAHgPADQgdAHglADQgYABgrAAQgtAAgWgFQgqgLgtgnIgagWQgPgMgMgIQgigUgeADQgiAEgaAhQgQATgUArIgcA6QgRAlgFAQQgJAhAABEQgBAcgCAOQgDAYgLAQQgIANgdAYQheBKgvAeQggAUgZAKQgbALgxALIhYARQg9AKhcAHQhoAGg0AFQgjADgTAHQgXALgMAEQgNAEgSABIgfABIh2AJQgZACgWAAQgoAAgegGg");
	mask.setTransform(282,256.8);

	// kabl.psd
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(308.5,248.5,1,1,0,0,0,43.5,31.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:3,x:315.1,y:249.8},14,cjs.Ease.get(-1)).to({regX:43.6,rotation:6.2,x:322.3,y:251.2},15,cjs.Ease.get(1)).to({rotation:3,x:315.5,y:249.9},15,cjs.Ease.get(-1)).to({regX:43.5,rotation:0,x:308.5,y:248.5},15,cjs.Ease.get(1)).wait(1));

	// divava.psd
	this.instance_2 = new lib.divava_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(350.5,287);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

	// nog.psd
	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(483.5,250,1,1,0,0,0,26.5,53);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:26.6,scaleY:1.07,skewX:-0.1,x:491.2,y:252.3},14,cjs.Ease.get(-1)).to({regX:26.7,regY:53.1,scaleY:1.14,skewX:-0.5,x:499.3,y:254.6},15,cjs.Ease.get(1)).to({regX:26.8,scaleY:1.07,skewX:-0.3,x:491.5,y:252.3},15,cjs.Ease.get(-1)).to({regX:26.5,regY:53,scaleY:1,skewX:0,x:483.5,y:250},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(137,-14,619,384);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(694,336,1,1,0,0,0,370,185);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(324,151,740,370), null);


(lib.sprite152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.sprite150();
	this.instance.parent = this;
	this.instance.setTransform(0.2,-40.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,scaleY:1.01,y:-42.5},2).to({scaleX:0.93,scaleY:1.08,y:-49.4},2).to({scaleX:0.83,scaleY:1.18,y:-60.8},2).to({scaleX:0.89,scaleY:1.11,x:0.1,y:-65.4},1).to({scaleX:0.94,scaleY:1.07,y:-68.6},1).to({scaleX:0.97,scaleY:1.03,x:0.2,y:-70.7},1).to({scaleX:1,scaleY:1,y:-72.6},2).to({scaleX:1,scaleY:1,y:-72.8},1).to({scaleX:1,scaleY:1,y:-72.5},1).to({scaleX:0.99,scaleY:1.01,y:-71.5},1).to({scaleX:0.97,scaleY:1.03,y:-69.6},1).to({scaleX:0.94,scaleY:1.06,y:-66.5},1).to({scaleX:0.89,scaleY:1.1,y:-62.2},1).to({scaleX:0.79,scaleY:1.2,y:-51.9},2).to({scaleX:1,scaleY:1,y:-40.8},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.6,-130.2,103.9,141.8);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(27,23.5,1,1,0,0,0,27,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-14.5},14,cjs.Ease.get(-1)).to({x:-53},13,cjs.Ease.get(0.99)).to({x:-11.6},15,cjs.Ease.get(-1)).to({x:27},14,cjs.Ease.get(0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,47);


(lib.Символ37копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(32,28,1,1,0,0,0,32,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71).to({rotation:360,x:55,y:515.2},54).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,56);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(32,28,1,1,0,0,0,32,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({rotation:360,x:55,y:515.2},54).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,56);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(-87.2,34.7,0.807,0.807,0,0,0,28.9,29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,499.4,309.9), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(206.1,154.9,1,1,0,0,0,206.1,154.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:164.2},19,cjs.Ease.get(-1)).to({y:173.9},20,cjs.Ease.get(1)).to({y:164.4},20,cjs.Ease.get(-1)).to({y:154.9},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,499.4,309.9);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(5).call(this.frame_11).wait(1));

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(206.1,154.9,1,1,0,0,0,206.1,154.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.15,scaleY:1.15,x:162.1,y:155.4},3,cjs.Ease.get(-1)).to({regY:154.8,scaleX:1.3,scaleY:1.3,x:128.1,y:153.8},3,cjs.Ease.get(1)).to({regY:154.9,scaleX:1,scaleY:1,x:206.1,y:154.9},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,499.4,309.9);


(lib.U = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.arrow = new lib.sprite152();
	this.arrow.parent = this;
	this.arrow.setTransform(6.4,23,0.228,0.342);
	this.arrow.shadow = new cjs.Shadow("#FFFFFF",0,0,11);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

}).prototype = getMCSymbolPrototype(lib.U, new cjs.Rectangle(-12.3,-27.6,39,63), null);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.U();
	this.instance.parent = this;
	this.instance.setTransform(52.4,15.9,0.871,0.871,0,-75,105,6.4,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ66, new cjs.Rectangle(16,-8.4,62,46), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(32,28,1,1,0,0,0,32,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(0,0,64,56), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(6));

	// Слой 4
	this.instance = new lib.Символ66();
	this.instance.parent = this;
	this.instance.setTransform(238.2,118.3,1,1,0,0,0,36.1,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:218.2,alpha:0},6).to({x:238.2,alpha:1},5).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(109.9,115.2,1,1,0,0,0,109.9,41.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({x:-126.5,y:117.9,alpha:0},4,cjs.Ease.get(-1)).to({x:109.9,y:115.2,alpha:1},5,cjs.Ease.get(-1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(115.3,34.4,0.548,0.548,0,0,0,174.6,62.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-123.8,alpha:0},6,cjs.Ease.get(-1)).to({x:115.3,alpha:1},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.5,0,260.6,164.7);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 18
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(881.6,34.5,1,1,0,0,0,39.5,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 17
	this.instance_1 = new lib.Символ37копия();
	this.instance_1.parent = this;
	this.instance_1.setTransform(502,37,1,1,0,0,0,32,28);

	this.instance_2 = new lib.Символ38();
	this.instance_2.parent = this;
	this.instance_2.setTransform(790.1,37,1,1,0,0,0,32,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Символ 16
	this.instance_3 = new lib.Символ40();
	this.instance_3.parent = this;
	this.instance_3.setTransform(570.1,23.5,1,1,0,0,0,27,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 15
	this.instance_4 = new lib.Символ32копия();
	this.instance_4.parent = this;
	this.instance_4.setTransform(706.1,48,1,1,0,0,0,26,28);

	this.instance_5 = new lib.Символ32();
	this.instance_5.parent = this;
	this.instance_5.setTransform(408.1,48,1,1,0,0,0,26,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(382.1,0,539,76), null);


// stage content:
(lib.divan600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.ms2.x = stage.mouseX / window.devicePixelRatio;
		this.ms1.x = stage.mouseX / window.devicePixelRatio;
			this.ms1.y = stage.mouseY / window.devicePixelRatio;
			this.fon.x = -stage.mouseX / 10 / window.devicePixelRatio;
			this.fon.y = -stage.mouseY / 10 / window.devicePixelRatio;
			this.doll.x = -stage.mouseX / 4 / window.devicePixelRatio;
		}
		
		stage.canvas.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover() {
			this.deva.gotoAndPlay(1);
			this.txt.gotoAndPlay(1);
			this.txt2.gotoAndPlay(1);
			this.ms1.gotoAndStop(1);
			this.ms2.gotoAndStop(1);
		}
		
		
		stage.canvas.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout() {
			this.deva.gotoAndPlay(7);
			this.txt.gotoAndPlay(7);
			this.txt2.gotoAndPlay(7);
			this.ms1.gotoAndStop(0);
			this.ms2.gotoAndStop(0);
		}
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 11
	this.ms2 = new lib.Символ48();
	this.ms2.parent = this;
	this.ms2.setTransform(742.1,271.5,1,1,0,0,0,37,49.5);

	this.timeline.addTween(cjs.Tween.get(this.ms2).wait(1));

	// Слой 2
	this.ms1 = new lib.Символ47();
	this.ms1.parent = this;
	this.ms1.setTransform(1189.2,353.2,1,1,0,0,0,37,49.5);

	this.timeline.addTween(cjs.Tween.get(this.ms1).wait(1));

	// Слой 10
	this.txt2 = new lib.Символ29копия();
	this.txt2.parent = this;
	this.txt2.setTransform(117.6,356.9,0.88,0.88,0,0,0,109.9,83.2);

	this.txt = new lib.Символ29();
	this.txt.parent = this;
	this.txt.setTransform(151.8,103.7,1.121,1.121,0,0,0,109.9,83.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt},{t:this.txt2}]}).wait(1));

	// Слой 3
	this.deva = new lib.Символ24();
	this.deva.parent = this;
	this.deva.setTransform(249.7,160.2,1,1,0,0,0,206.1,154.9);

	this.timeline.addTween(cjs.Tween.get(this.deva).wait(1));

	// dol1.psd
	this.doll = new lib.Символ25();
	this.doll.parent = this;
	this.doll.setTransform(323.5,-103,1,1,0,0,0,290.5,38);

	this.timeline.addTween(cjs.Tween.get(this.doll).wait(1));

	// Слой 1
	this.fon = new lib.Символ2();
	this.fon.parent = this;
	this.fon.setTransform(-13,-3,1,1,0,0,0,370,185);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(89.7,9,1164.4,474);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/deva.png?1485525531522", id:"deva"},
		{src:"images/divava.png?1485525531522", id:"divava"},
		{src:"images/dol1.png?1485525531522", id:"dol1"},
		{src:"images/dol3.png?1485525531522", id:"dol3"},
		{src:"images/dol5.png?1485525531522", id:"dol5"},
		{src:"images/dol8.png?1485525531522", id:"dol8"},
		{src:"images/dol_pop.png?1485525531522", id:"dol_pop"},
		{src:"images/fon_600.jpg?1485525531522", id:"fon_600"},
		{src:"images/hand.png?1485525531522", id:"hand"},
		{src:"images/hand_p.png?1485525531522", id:"hand_p"},
		{src:"images/kabl.png?1485525531522", id:"kabl"},
		{src:"images/logo_pokerdom.png?1485525531522", id:"logo_pokerdom"},
		{src:"images/nog.png?1485525531522", id:"nog"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;