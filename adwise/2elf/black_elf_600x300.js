(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.arr = function() {
	this.initialize(img.arr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,112);


(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,33);


(lib.bey = function() {
	this.initialize(img.bey);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,54);


(lib.bf434 = function() {
	this.initialize(img.bf434);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,41);


(lib.bfgbr5 = function() {
	this.initialize(img.bfgbr5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,62);


(lib.bod5 = function() {
	this.initialize(img.bod5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,379);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,285);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,711,400);


(lib.hand4 = function() {
	this.initialize(img.hand4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,67);


(lib.hang1 = function() {
	this.initialize(img.hang1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,130);


(lib.hang3 = function() {
	this.initialize(img.hang3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,150);


(lib.hat3 = function() {
	this.initialize(img.hat3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,79);


(lib.hat4 = function() {
	this.initialize(img.hat4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,39);


(lib.knife = function() {
	this.initialize(img.knife);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,93);


(lib.oi8 = function() {
	this.initialize(img.oi8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,66);


(lib.ple1 = function() {
	this.initialize(img.ple1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,56);


(lib.ple2 = function() {
	this.initialize(img.ple2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,80);


(lib.rain = function() {
	this.initialize(img.rain);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,911);


(lib.sila = function() {
	this.initialize(img.sila);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,21);


(lib.zastreli = function() {
	this.initialize(img.zastreli);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,295,39);// helper functions:

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


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,-62,0,62).s().p("Eg2OAJsIAAzXMBsdAAAIAATXg");
	this.shape.setTransform(347,62);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,62,0,-62).s().p("Eg2OAJsIAAzXMBsdAAAIAATXg");
	this.shape_1.setTransform(347,294.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],62,0,-62,0).s().p("ApralMAAAg1JITXAAMAAAA1Jg");
	this.shape_2.setTransform(632.1,170.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-62,0,62,0).s().p("ApralMAAAg1JITXAAMAAAA1Jg");
	this.shape_3.setTransform(62,170.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ70, new cjs.Rectangle(0,0,694.2,356.2), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AicZoIAAgBICbxSICbRSIAAABgAZ1CDIxRiaIRRibIABAAIAAE1gA51CDIAAk1IABAAIRRCbIxRCagAic5mIAAgBIE2AAIAAABIibRSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-165.4,-163.9,330.9,327.9), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rain();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(0,0,253,911), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egx5Ag0MAAAhBnMBjzAAAMAAABBng");
	this.shape.setTransform(311.4,190);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-8,-20,638.8,420), null);


(lib.Символ35копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC33").s().p("AhPXEMAAAguHICfAAMAAAAuHg");
	this.shape.setTransform(8,147.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35копия, new cjs.Rectangle(0,0,16,295.1), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0033").s().p("AhPXEMAAAguHICfAAMAAAAuHg");
	this.shape.setTransform(8,147.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(0,0,16,295.1), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(0,-2213);

	this.instance_1 = new lib.arrow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-2247);

	this.instance_2 = new lib.arrow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-2282);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,-2282,174,102), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bey();
	this.instance.parent = this;
	this.instance.setTransform(-11,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-11,-11,198,54), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egv+ADDIAAmFMBf9AAAIAAGFg");
	this.shape.setTransform(307.1,19.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,614.2,39), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zastreli();
	this.instance.parent = this;
	this.instance.setTransform(-3,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-3,-2,295,39), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AhDFxQgggMgPgMQgVgSgSgqQgWgugQgtQgIgVgJgFQgFgDgUgCQgigDgmgTQgZgMgqgcQgMgIgFgGQgIgMAFgKQAIgPAeAHQApALAlAPQAXAKAKADQAUAFAPgFIgGhyQgBgnAFgUQAFgZASgcQALgSAZgeQAigqAVgSIAHhjQACgaAKgIQAGgFAJAAQAJABAGAEQAOAKABASQAFgEAKgCQALgDAEgCQADgCAFgFIAHgJQAOgOAYABQARABAWAMQAUAKACANQgBAMADAGQACAFAKAFQALAFACAFQADAEAAALQAAALACAEQACAEAFADIAJAGQAHAHAGAVQAJAlAAAQIAAAUQABALADAHQAFAKANAKQASAOADAEQAKAKAJAaQATA7gEA+QAAAMADADQADAEAJACQAoAHAngDQARgBAHABQAOADADAMQAFARgeAQQhSAqgcATQg7AngdAwIgOAXQgIANgIAIQgGAFgNAHIgTALIgZATQgHAGgUAIQggANgTACIgEAAQgZAAgmgPg");
	this.shape.setTransform(39.5,38.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,79,76.8), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAUIgFgCQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgCAAIgBgCIgBABIgCgDIAAgBIgBgBIgDgJIABgEIACgGIABgCQADgGAIgBIAAAAIAFgBIAGABQAAAAABAAQAAAAAAAAQABAAAAAAQAAABABAAIACACIABABIABACIABAAIACACQAAAAAAAAQABAAAAAAQAAAAAAABQgBAAAAAAIABABIABACIAAAAIABAFIAAABIAAAAIAAACIAAACIAAABIgDAGIgCACIgDADIgDACIgGACIgCAAIgBAAIgDAAg");
	this.shape.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,4,4.1), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWAnQgQgJgFgSQgFgRAKgRQAJgQASgFQARgFARAKQAQAJAFASQAFASgKAQQgJAQgTAFQgGABgFAAQgLAAgLgGg");
	this.shape.setTransform(4.6,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,9.1,9.1), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.2,1,1).p("AAsgLQAFASgJAQQgKAQgSAFQgRAFgRgKQgQgJgFgSQgFgRAJgRQAKgQASgFQASgFAQAKQAQAJAFASg");
	this.shape.setTransform(4.6,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-1,-1,11.1,11.1), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhoFbQgKgDgHgSIgIgVQgEgNgGgHQgEgGgNgLQgLgLgFgHQgFgIgEgPIgHgYQgEgNgOgYQgNgYgEgNQgGgSgCgbQgGhTAShUIAPg7QALgrAJgXQAOgjAUgXQASgVAdgRQAUgNAigPQAegOASgBIAlADIAWAAIAWABQAXADAYAOQAQAKAZATQAaAUAJANQAOASAHAgQAKAogBAzQAAA5gJAZQgJAZADAbQADAbgPADIgGABQAHA3gcA1QgcA2gzAaIgpASQgZAKgNAKIgfAdQghAdgmASQgKAEgHAAIgGgBg");
	this.shape.setTransform(23.3,34.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,46.6,69.6), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bfgbr5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,33,62), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hang3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,66,150), null);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(5.2,1,1).p("AWhhxIA+gNAX0iNIhTAcItjCuAnwA1IIkB3IIKhvIoJBkgA17iJIgugKA2biUIAgALIOLC+A2biUIgugSA3zirIBYAX");
	this.shape.setTransform(0,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155,-22.9,310,39.7);


(lib.knife_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.knife();
	this.instance.parent = this;
	this.instance.setTransform(-64.5,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.knife_1, new cjs.Rectangle(-64.5,-46.5,129,93), null);


(lib.hat4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat4();
	this.instance.parent = this;
	this.instance.setTransform(-32,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hat4_1, new cjs.Rectangle(-32,-19.5,64,39), null);


(lib.hang1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hang1();
	this.instance.parent = this;
	this.instance.setTransform(-60.5,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hang1_1, new cjs.Rectangle(-60.5,-65,121,130), null);


(lib.hand4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand4();
	this.instance.parent = this;
	this.instance.setTransform(-25.5,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand4_1, new cjs.Rectangle(-25.5,-33.5,51,67), null);


(lib.body_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body();
	this.instance.parent = this;
	this.instance.setTransform(-82,-142.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.body_1, new cjs.Rectangle(-82,-142.5,164,285), null);


(lib.bf434_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bf434();
	this.instance.parent = this;
	this.instance.setTransform(-23.5,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bf434_1, new cjs.Rectangle(-23.5,-20.5,47,41), null);


(lib.sprite37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.arr();
	this.instance.parent = this;
	this.instance.setTransform(-46,-40.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite37, new cjs.Rectangle(-46,-40.3,80,112), null);


(lib.shape161 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AF7KaQgcgMgeAAIg4ADIhxAKIgOACIiygMIgygIQhHAAgcAJIgtAJIgegFIgEABQgRAIgTAAIgcgGIgggKIgPgCIgNADIgkAJIgYgDQgFAFgHAAQgLAAgGgQIgKgFIAAgFIAHgBIgDgSQAAg1AThKQgEguAFhQIAHgBIABAFIADgBIAXAeQAYAaAVAAQAoAAAPgnIAKg0IAIgtQAHgcAKgSQAig8AMggQAUgwAAgrQAAgSgKgeQgKgcgMgTIgKgYQgGgSgDgFIgUgVQgMgOgCgKIACgEIAHgCQAHAAALAJQAMAJAKAAQAJAAgBgSIgCgSQADgQAJAHQAHAGAHANIAXApQACADAeAPIAMAEIAMAEIAtgCIAOgCIAUAsQAWAqAQAAQAeAAAKgfIAHgaQAEgNAFgEQAKAIADAYQAEAYANAKIARAPQAKAIAOAHIAUAEQALACAAAKQAAAVgHAzQgIAyAAAUQAAA6AgA4QArBJAQA9QAThBADgzQAHhGADgOQALguAlgoIAggoQAXgeAQgNQAQgMALgeQAMgdAKgJQANAJAKAaQANAjAGAKIApAnQAcAZAAATQAAANgUASQgaAZgFAIQgLARgEARQgBAKAAAYQAAAiAJAZIAVAqQAdA2AABNQAAAUgNA9IgMA9IAAACIgCAJIgBADIgHAEIgMACQgrAAgcgNgAn3iMQgEgoAOglIAaAaIARAXIgCAEIgFABQgTAIgMAQgABamBIgFgKIAIgKIApgrIAageQAFgGAHgEQAFgCgCAGIgLA3QgDAOACAOQAFAagRAHgAjsmXIAAgwQAMgNAMARIARAaIgPANQgNAJgFAAgAG1paIAJhHIAGgFIAdA/IgLAFIgcAJg");
	this.shape.setTransform(-14,68.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.4,0.3,101,135.8);


(lib.shape160 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AGHImIgPAAIg9gGIhQgHIhmAIIhBAIIhhgFIhBgHIhbgGIglAEIgiAEIg/gEIhBgEIhNAGIgWAEIgcAEIgBAAIgCgGQABgGAHgKIAHgGIgCgEQAAgJAggcQAhgaAAghQgBglgcgpQghgugKgxIABAAIgHgKIAEgDIAKAPQAEACABAGQALAGAkAAQAjABAwguQApgmAFgSIAPhAQAEgZAAgcIgEg2IgGhQQgCg/hGhEQAagRALgdQAKgcgHgdQANACAIAYIALApQAIAyATAdIAdArQATAXAeAMIA0AcQAzAbAJAAQAlAAAnhhIAHgZIAIgWIAEgaQABgMAJgKQAKAJADAXQAEAaAGAJIALASQAGAKAPAIIAgAJQAXAIAAAKIgGAYIgJAYIgFAVIgEAWQgBAggFAVQgGASAAATQAAAUAKAgIASAyQAEgJAIgIQAOgNAlgUIBAgmQAlgbAWgmIAthaIAFgyQADgbAXAAQAAAaAWApIAmBFQALgBADgOQACgKgBgMIADgEQATANAGAYQAGAdAGAIQAJANAIAXQAGAVABAQQAAAhg5BWQg4BYgBAwQAAAkAgA9QAYAyAVAXIAIAAIABACIABAGIAGAAIABACIABAIQAAATgnAAQgsAAgWgMgAAPmvIgFgHIgHgmQgFgZAAgbIAFgDQARANATACQAQAAAQgJIAigVIAcgQIgCARIgHAVQgJATgRAOIhKBAg");
	this.shape.setTransform(-10.3,80.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.8,24.2,102.9,112.5);


(lib.shape159 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AAaGrIhPgLIiJAKIhLAJQgiAAgZgKQgZgLgOAAIhCALIg5ALIgVgCQgCAAAAgKIAAgEQgGgJAAgKQAAggAbhBQAahBAAgkQAAgRgIgrIApACQAyAAAXgSQATgPAVgwQAEgKAGgkQAFgaALgKIACACIAAAHIAAAMIABAAIABgTQAAgigEgYQgFgcgNgkIAAgUQAOgGALAVIASAmQAJAMAJAUQAIAUAEARQAPBEAbAbQAYAZAuAAQBAAAAyhZQAUgnAWhHIAEgQIAGAAIADAbIABALIAAADIACAbQABATAYAtQAUAlAhArQAmAwANAAQAWAAAdggIAZgjIAjhGQAMgVAjgzQAeguAAgaQAAgGAEgCIAEgBQATAcAQBUQAYBFBMAEIABACIAAAHQAAAHgZAqQgaAyAAAuQAAAxAZBOQATBAAEAUQAIADABANQAAAJgSAKIgBAAIgEAFIgCgBQgZAJgpAAIiIgJIhqAFIhSAFgAAmgsIgCgFIgBAFIADAAgAlVkIQgRgUgGgXIgBgQQAHgugCgtIAIgXQARAdAGAfQAGAfADAgIADA5QgEACgEAAQgJAAgHgJg");
	this.shape.setTransform(-9.2,91.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.8,48.2,103.3,87.5);


(lib.shape158 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AGtGfIh3gJIhHADIhSgHIhfAGIhJgDQhugHhvAEIhCgCIh2gIIhagGIgKgfQgDgMABgNQABgeAPgaQATggAbgaQAMgNACgSIAOhcIgKgMIAPAAIAFgEIADAJIAWgCQAIgBAGgGQAVgSAJgcQADgLgBgKIgEhJIAJgBIAHAKIAVAdIAWAZQAHAFAJADIAwADIAwAoIAfATQAdAOAggCQAfgFAWgXQAjglAYgqIALAqIAGAiQAFAlAaAWQAOAMAUAFQA+AMA3ggQAvgcAdgsQAPgXAIgYIAchSQAOgnAbghIAMBaIAeBpIAhgjIAHAJIARAdQAUAqAGAtQAKBLgRBLQgQBIgJBJIgVADgAAHh6IACgZIAEgnQAFgngMgmQgFgPgJgOIgIgNIgHgcQgGgbAQgTIAQgRIgDAQQAIAXAAAYQAAAMAGAMIAxBOQALARgBASQgBAXgLAUIgLASIgMAKQgJAHgKAAQgGAAgGgEgAlWjKQgJgdgNgMQgIgIgIggQgIgdAAgOIACgWIAOgaQAEgGACgUQABgPAJgCQAKALAQAzQAQA0AAAVIgCAvIgCBFQgDAEgEABQgHgKgKgfgAl0lIQAIgBgIgCg");
	this.shape.setTransform(-8.3,94.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.2,52.5,103.9,83.5);


(lib.shape157 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AHEG9IiIgCIhMgOIgcgHIiEAHQhPAMhQgKIhagKIhZAAIhMAGQhQAJhPgVIgCAJIgIAEIgOgPIAYlhIAJgBIBgBwIAEgNQADgNgBgNIAChbQABghAFghIAGgUQAHBbA9BGQAOARAUAIIAsALIArAGQAaAAAagKQAIgDAHgFQAagSAQgbQAGgMAEgMQAMgpAIgqIAIgCQAJAEABAKQAHAtAYAlQANASASANIAWAMIAfAMIB7ADQAcgGAagRIAUgRQAngkAJg1QAFgagGgaQgPhFAbhDIAFgIIARAhQAQAjAAAoIgBBSQgBA2AVAwIBKhEIAPBAQAMAuAHAuQAJA6gOA5IgFAcQgEAegBAeQgBAWgJAUQgOAGgNAAIgKgBgAhKkpIgBgcQAFgdAMgaIAehBIAWBTQAGAYgCAYIgIAwIgFAvIABAbQADATgBAUIgIAAQgxg/gFhRgAlqikQgVgmgQgnIgMgrQgLg9Agg0IAiBAQAFAKADALQAGASgBATQgBA4gHA4g");
	this.shape.setTransform(-3.5,90.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.3,46.3,103.6,89.3);


(lib.shape156 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AmSJrQgJgIgMgBIhKgCIgIAKQgTgQAAgaQADhYAYhVIAIglQAEgfgGghQArAAAhgcQAegXAJgkIAHgZIAIgRIACAXIAMAqQAHASAMAPIAhAmIATAOQAhARAlAHIA4AGQAuAAAogXQA6giANhDIACgTQAAgjgDgkIAPgBQAJAGAAAMIADBEQAEA0AoAiIAiAcQAvAiA5gGQBAgGAwgrQAcgaALglQANgugOgtIgPg3QgHghgDghQgCgdAEgdQABgHAEgGIAOADIAOAQQAUAYACAgIAEBPIgBBBQgEA3AaAwQAEguAgggIAMBZQABAMAFALQAMAgAQAfQATAnACAsIgDAuQgCARgJATIgYAuIABAQIgtADIgoAIIg0ACIhUgGQhTgDhQAEIiegEIgVgFIgcgIIibAFQgugBgrAPIgPAEIgHAAQgSAAgPgMgAgvhAQgSglAAg3QAAgfADgOIASg2QAHgSgBgeIAAgxQALAFASAaQAUAfALAJQARAUAGAVQAFAQAAAWQAAAagIAiIgQA9QgOA5ADA/QgDADgEABgAlLAeIgFgRQgEgpgMgoIgQgwQgRgxABg0IAMAAIAKAUQAIAPASANQAKAIAHAJQAPAUAHAYIADASQADAbgLAaQgPAhgDAkgADooHQgGgyASgvIAEgOIAHADQAVAegEAiIgFAQQgMAXgGAYIgIACg");
	this.shape.setTransform(-5.7,72.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.2,9.8,105,126.3);


(lib.shape155 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Al7IYIgzgTIgzgXQgJgEgFgJQgSgigIgmIgFglQgCgiACgiQADg2AOgyQARAMAMATQAMASARAJQAiATAlgNQAJgDAIgGIAOgOIAJgQIALgoIAKAAIAvAuQAOAPATAKQAeAOAhAAQAvgCAngbQAngaAUgsIAMgfQAOgyAWgsIANAsQAKAiAOAhQAVAxAwAXIBfAvQA1AcApAuQAHgkAKgkQALgoAOgnQAQgqAAguIgBhnIAGAAIBFDMIAagWQAIgHAJgFIAWgLQACgCADABQgEAkgCAlQgDAkAGAiIAPBiIACAeQgBApgQAnIAGAKQgHALgPgBIgggHIhEgDIg4AIIhqgEIjugEIhrgLIhOAGIhTAIIhDAFIgNADgAgDixQgEgagOgZQgZgoggghQgZgbgUgjQgwBjgdBoQgLABgGgLQgTgigOgmIgyCuIgMgBQgVgrgHguQgLhGgRhEIAFgBIASAQQAVAXANAcIAGAAQADgeAMgbIAWgxIAbg/QAJgWAGgXQAJghgDgkIAKAAIAlAtIAKABIARgFQAKgCAHgLIAIg0IAJABIARAwQANAbAaANIAcgEIAYAFQAEABADAFIAEAJIAHAVQAMAhAVAiQALASABAVQAEAugGAtIgFAcIgMApIgSBHQgDANgMAJQgBg/gJg+g");
	this.shape.setTransform(-6.3,82.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.1,28.9,105.7,107.6);


(lib.shape154 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AHvH0QgMAGgOAAIhMgFIh9gBIg8gFIibAHIg3gEIgtgIQgegIgigBIgEgDIh4AIIh4AKIgSABIghgKQgsgTgwAAIgCgFIAAgLIADgbQACgVgDgVQgMhLgXhKIAFgGQAJgBAJAFIARAHIAyAKQAWADAXgDQAvgJAVgtIAHgTIAMg5IADAHIgHgqIADgDQATArAfAiQAUAXAaANQAfAOAgAAQAkAAAhgPQAbgNAUgVQAbgeAOgjQAPgmgBgpQgBglgEglQgDgbgHgbQgGgZgLgWQgOgdgQgbQgWgngJgrQgjAogZAyIgFAQQgCAMACANQABALgIAHIg0gNIgRgBQgJACgJAEQgLADgJAHQgJAHgFAJQgTAkgIAqIgIAAIgNgUQgTgogLgtQgIgjAJgkIAHgBIAkAWQAMAHAOgFQAUgFALgRIAJgPQAOgeAFgfQAKhHAEhLIAIgBIASANIAQAIIASAFQATABAQgMIAJgKQAHgJAEgMIAHgUQAEgPAKgIIAJAjIARAqQAKATAWAAIAygFIAHADIgBANIgGBDQgEA2AQA1QARA0gFA4QgHBKgVBHIAQAqQAJATAMASQAMARAPANQAPAOASAJIBAAlQAOAHANAKQAkAcAdAnQACgrARglQAshfAphjIAcAxQAUAzACA4QADBEAABGIA6guIAJARQAHARAEASQAGAZACAaQAFA6gMA3QgGAZgSATg");
	this.shape.setTransform(-6.8,85.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.2,34.3,106.9,102.3);


(lib.shape153 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AmWHMQgTgMgLgGIghgIIgXgDIgCgJIAIgaQAIgZAAgHIgDgeIgFgdQABgHgOgvIgNgrQgHgKgBgIIAFgCIAMARIATAVIAiAMIApANQA/AAAihFQAZgzAAgyQAAgegPg4QgShAgCgTIADgDIAJgCIANARQAOASAZgBQA4AAAThDQAFgWADgaIAAgXIgIi6QAAgNADgDIAYgCQAcABATggIAWghQAAAWARAxQAXA9AXAAQAVAAANgQQAQgQAFgCIAGA/IAEBNQAAA+gZBEIAAABIgBAFQgHAngBAaIACAdIAAABIAJAAIANAAQA5AAAcA6QASAngBAkQgBAfANAlQAPAoAZAYQANgYAEgbIACg0IABgCQADgDAGABQAGgBAJAPIAVAmQAlA9A2AgQAChEACgkQAGg/AZgmIASAjQALAZAUASQANAKASAYQARAXAHAQQAUAqAIAiQAJAiAAAoIgCAWQAFAFABALQAAAJgIAEIgHADIgCADQAFACgKAAQgHAAgCgEIgEAAQgZAAgWgIQgWgKgIABQgKgBgeAMQgeAMgeAAIg6gHQgdgIgvAAIhmAKIhngOIhXgMQggAAhtARIh5ARQgRAAgKgHg");
	this.shape.setTransform(-6.6,89.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.6,43.2,104.1,93.3);


(lib.shape152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AGJHBIglgFIgGABIhcAKQgYAAgvgNIgrgMIgnAKQglALgZAAQg1AAhKgSQhIgRgpAAQgYAAhUARIhUAQIgBAAIgBACIgHACIgIgDIgIABQgOAAgUgTIgPgPIgCAAIgjABIgCgJQAAgHAGgMQAIgNgBgNQAEgOAAgeIgBgpQgDgPgTghIAAgRIAAgCIAIgCQABAAATANQAZANAlAAQA8AAAQglQAFgLAAgPIgBgMQAAgZgShIQgPg+gJgWIACgFQABgDAHAAIAPAJQAMAJALAAQBeAAAbiGQAKgtAAg0QAAgqgEgKIABgFQACgDAGAAQAFAAAAAEQABAEAEAAQAUAAAQg9QAPg4ANgXIgBgGQAAgGgEgDIgDgDQARgKAHAWQACAJACAaQAAAPAFATIAIAgQALAbAWAnIAoBEQAYgXAKggQAHgYABgmIAKgEQALAMACAdIAAAtQAAAKgIA3IgHA9IgCA+QgCAkgRAZQBJAXAkBPQAbA5AABAIAGgCIALgCIAmALIAuAPIAYAUIAYAaIACAAQAJgwAHgYQALgqAdgWQAjBJBFBRQAYAdAJASQANAaAAAhIAAABIADAJQAAAIgHAEIgOAEIgQAEgAh3mWIAAAAIAAgBg");
	this.shape.setTransform(-4.9,90.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.8,45.3,101.8,91);


(lib.shape151 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Al5IyQgngTgtgFIgEACIgOgEIAHgpIAMgqIAOguQAEgTgCgTQgDgkgQghQgEgJAAgKIATABQAZATAhAEQAqAEAfgcQATgSAHgZQASg/gWhAIAKgCIAcAKIASgBQASgIAIgSQAlhLgChTIgCgSIgYhoIAYgGQAOgHAIgOQAYgnAEgwIAEgeIAFgFQgDAkASAdQAiA3AqAuQARATAJATIAkgrQAIgKACgNIAJAAQAGADACAIQAFAagBAbIgCAuIgCByIAFAlIANAjQAjA+AqA5QAgAKATAbQAiAxAJA8QATgLAOgTQAaglAdgiQAPARAJAUIAIAOIAuA3QAUAZAQAcIAyB6IgFAOIiHAMIgegGQhcgXhdAQIhNANIgqgCIhWgPQhNgRhPAIQggADgfAHIguAPQgKACgJAAQgRAAgQgHgAmrFHIACAAIgCgCgAFBjCIgBgQQAAggADgIQAGgSAcgWQAIAOAAARQAAAIgOAgQgOAjgJAHQgGgHgBgKgAnyoDIANgoQAEgJAKgEIAGALQALAYAZAKIAEAGQgiAOglACQgFgGADgIg");
	this.shape.setTransform(-7.3,78.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.3,21.6,99.9,113.8);


(lib.shape150 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AmEIYIhRgRIgHAFQgKgDABgKQACgYAQgWQAOgTAJgTQANgfAFggIADgaQAGgtgPgqQgLgigIghIAIAAQAOgJAQAAIArgBQALgEAJgGIAXgSIANgPQAMgQACgUIACgUIACgtIALAAQAKAIAQADIAMABQAlgGAUghIAQgcQANgbgDgdIgNh6QgDggADghIAEgPIAFgHQAdAkAnAZQARAKAUgEIBBgDIAiAFQAQAGAPAHQAjAVAVAhQAQAaACAeIABA0QgCAwgMAvQgDALAAAMIADAYQAMA7AoAsIATAQIAJAFQAeADAcgLIAUgIQARgIAJgSQAJgSASgHIgBATIAEACQgHBdAxBPQAQAYAcALIAbAJIAjAIQAQAgABAoQABAdgNAaIgrAJIkBgQIhgAIIhPADIhIgDQhbgNhcAIQgoAEglAKIgZAHgAFOjDQgEg1AOgzQALgmAYggQAMAHABAOIABAJQADAcgLAbIgRArQgKAZgQAVgAn6n0QABggAegJIAIAkQADAVARAOIgCAKIg3AMQgDgZABgbg");
	this.shape.setTransform(-8.9,82.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.6,28.2,101.4,108.4);


(lib.shape149 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AHRHlIhTgLIg+gEIhKgGIhHAIIhAAIQgSAEgTgEIhvgJQg5gFg5AGIhQAKIgwgCIgxgMQgogJgoABIgEADIgPgCIAKgmIAIgWQAVg4gPg6QgIgcgRgXIAhgGIAvgEQAHgBAGgEIAagYIAYgdQAmg4gLhDIgPhTIALgNIALgOQAVgjAOgmIAIgYQAIgbgLgXIAEgIIASALIAiARIAtgCQAegRAKgeIAKggQAEgQAAgQQABgigBgiIABgzIADgNIAXA8IAaA6IAcAtQARAVAUAQQANALAQAHQApASAsAIIBbAOIAqgBQAOgBAMgJIAOgOQAbgoARgrQAIAHgCAIQgKA7gHA8QgEAcAEAcQADASAJAQQAKAOARAEQAVgBAUgHIAIAEIACAJQgVAcgUAdQgSAcgGAgIgJA0QgHAqAHAqQAFAcAUAVIAtAFIAJAQIgRAbQgKASgHATQgHAVAPASIAZAbQAPARAFAWIAHAEIADAJQgEAIgHAFQgMAHgNAAIgFAAgAG/EcIABAEIAFgFgAgul3IACgBIgCgCgAn5mGQAAgQANgiIARgsIAFAAQAAAVAKAZQALAbAVAWIgaAFIgdAEQgMAKgIAAg");
	this.shape.setTransform(-14.6,86.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.2,38.3,101.3,97.1);


(lib.shape148 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AFYHXIgoACIhHgEIg/AEIhAAEIhtgXIgigKIg2gCIhjAJIhzAIIhWgEQgGgHgQgGIACgHQgEgJgCgOIgBgrQAAgVAFgWIANguIAAgBIAIgBIAfAYQAiAZAQAEIgCgzIgCglQAAhsAlhkIAZhBQAMgiAAgZQAAgjgVgpIgVgrIABgFIADAAIABABQAJAAAhAbQAnAhAcAAQARAAAGgGQADgEAAgKQAAgIgNgzIgOgzIACgEIAHgCQACAAAWAfQAXAgANAAQARAAAMgcQAJgUAAgNQAIgtgBgVQgBgcARgnQAPgiAUgZIADADIABAJQAAARgGAgQgHAgAAAPQAAA9AoA4QBABXCHAAQBgAAA7hKQAlguAHgqIABgEIAIgCIAHACIACASQAAALgJAmIgMArIAAAGIAIAAIALgBIAEABIAAAGIgOAvQgOApAAArQAAAtAEALQALAdAwATQg0AugNAwQgGAXAABDQAAASA4BsIAsBWQAKACAEAIIADANQAAANgQAJQgZANg7AAgAGtjJIACACIABgDgAnuk0IADgIIgCgBIgBgHIAAgDIgEgTQgCgagCgHQgDgJgLgVQgIgQAAgNIACggIACAAQADAOAfAgIAfAeIgBAKQADgKAMAEQgGAIgBARQAAAHgEADIADATQAAADgOALIgMAIIgBABQgDAIgGADIgHgBIgBACQgBAAAAgHg");
	this.shape.setTransform(-14.4,89.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.9,41.2,105.1,95.9);


(lib.shape147 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Ak4HRQgQgOgEgBIgfgEIgcgEIADgFIgBgEQAAgYAVhCQAXhJACgMIAAgCIAHgCQAJAAAHANQAFAJACAKIAShCQAMgqANgZQAkhHAAg7QAAgSgJgaIgPguQgFgTgYgaIgvgsIACgCQALACAKAGIABgBIgSgNIABgCIADgEQAZALATALIA0AGQAhAAAMgOQAGgHAAgHIgEgUIgEgVIAAgHIACgDIgBgBIAHgBQADAAAaArQAgArAdAAQAkAAAQhHQALg1gDgtQgDgfAHg3IAFgtQADgaAPgOQAHALACAVIABAkQAAAUgFAtQAAAWAKAsQAKAsAIARQAbAxA2AnQA0AkAnAAQA7AAAlgcQATgOAKgRQAkghgOgmIAAgeIABgCQABgCAGAAQAEAAAQAWQAMAMAGAAIAYgCIAVACIAAAUQgQAfgKAqQgJAnAAAgQAAAMARBKQAHAcAPARQANANAYAJQATAHAAAHIgaBAQgaBDAAAfQAAAyAiAuQAeAqAKAgIAJACQAGADAAAJIgBAGIgBADIgKABIgNgBIgmAEIgoAEIghADIgUABIg6gJQgqgKgtAAIhfAHIg6AHQggAAgugPQgtgPgnAAQgPAAhcATIhdATQgSAAgSgNgAoZjcQgDgaADgbQAFglABgiIAIAAQAMAcAFAeQAIAyAqAdIABAGIgEACIgfgFQgGgCgFACIgPAEIgKACQgJgHgCgPg");
	this.shape.setTransform(-14.7,88.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.7,41,108,95.6);


(lib.shape146 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AlBJgIgjgOIgBACIgHgBIgBgEIgJgFQAEgFAHgEIAMgbIAfgyQAthMAAg4QAAhIgkhEQgjhBhOhTIAFgDIAJAJIACAAQAJAAAYAOQAXAOAXAAIA3gFQAMgGAAgnIAAgBIgBgBQgHgSgHglIgFgXQgLghAAgNIAAgQIgCgUIABgGIABgBIAEAAQAIAMAGAUIASAgIAhA6QAKAQA3AaQAGADATAPIAbAVIAAgFIgFgeIgDgeQAAglAOghIAnhQQAKgVALg4QAJguARgTQALAUAAAdQACAlACAMQAFAVgBAcIgDAxQgCAYAJAZQAIAUASAdQAFAHARAOQASAOALAEIAsATQAgANAMAAQBcAAAVg9QAGgUAAgYIgDgUQAAgaARgjQAOgeAUgZIADgQQADgOAHgFIA6A5QASAUAAAgQAAAWgcA3QgdA3AAAnQAAAiAYApQAkA+BIgBQAXAAATgLIAQgKQAEABACACIACALQAAAHgKARIgOAXQgIASgEAbQgHA8gBAfIAAAvQAAAbgDATQgEANgCAgQgDARgHALIAAADQgBAPgPAAIgpgCIiJAKIiAgKIhwAKQgXAAgwgMQgwgLgNAAIiTAFQgPACgcAMIgaALgAo1AaIgEgXQAAgmAPg2QAJAVARAtQAVAoAyAVIAAAFQgBABgGABIgUgIQgRgGgMgBQgaAAgFAHQgKAMgHACgAHsoDQgJgEgBgKIgBgLQAAgMABgKIAKg7IAGAAQAGAYgBAYIABAGIALAmQgEAJgLAFIgEABIgEgBg");
	this.shape.setTransform(-13.4,74.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.3,12.2,113.9,124.3);


(lib.shape145 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgcJOIgZgGIgagJIgWgBQiZAKiZgFQgaAAgZgKIgGACIgHgMQALgTAQgMIAUgTQAWgWgCggIgDgsIAAgoQADhXgPhVQgHgqgUgjQgVgkgkgXIAAgGIASgDIAZAOQARAIATAFQAYAEAWgJQAZgLAIgZIAEgUQABgLgCgJQgGgiANgfIABAIIAFAAIAGASQAHASALAOQAmAwA1AjIAQhnQADgOAGgNQAVgrAhgkQANgQAJgTIAagxIADgDQAMANAIARQAVAyASA1QAIAZAGAZQAGAWADAWIAIA6IAJAXQAEAIAJAEQAOAHAQAEIAZgGQA5gMApgtQAVgXARgZQAjg2Aeg6QAZA+gIBDQgEAlgLAkQgKAgADAjQAEAsAaAlQApA4BGAFQAXABAWgKIAJgHIASgYIALAEIAAAeQABAMgIALIgdApQgjAwgBA+QAAApAPAoIALAfIgHADIhqgDQguAFgsgGQhjgHhiAIIgyAKQgJACgKAAIgQgBgAlKgLIADgCIgDgFgAHrnjQgJgHgMABIgIAHQgMgVgEgbIAAgNIAEgvIAGAAQASAsAXAqIAGARIABAGIgIADg");
	this.shape.setTransform(-7.3,76.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.7,17.7,100.8,118.2);


(lib.shape144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ACdJxIhYAFIhRAGIgDAAIiSgJIhTAHQg7AAgTgIIgKgFIhCgCIhbgDQgCAEAAgKIAFgFIgBgEQAAgJAog8QAng7AAglQAAgYgag5QgWgugJgNIg7hDQgkgqgCgiIAEAAIACgCIABACIABAAIABACIAnAeQAnAbAOAAQBHAAAWgzQAJgUAAglIABgBIAHgBQAJAAAUAdIAdAoIBHA8IACgBQgPgpAXgqQASghA3g1QAMgMAPgZIAYgsQAIgNAEgeQAFgdAFgHQAXAbAKAtIARBLIAIAXQAJAYAOATQAsA9BBAAQA2AAArgoQAWgVARgaQAQgPAIggQAJgjALgMQAMAjACAOIABArIgIB1QAAA1AfBMQAOAhAOAZIANANQASAPAnAAQAhAAAWgbQAVgZAGABQAJAMADAVIAAAiQAAAsgfBJQgiBNgZAAIgDgBIgCABQgSAIgoAAIg6gCIgHACIhEADgAinkrQAIgqAAgaIgEgoIgEgoIACgGIAGAAIAIAlQAFAZAHAPIAYAsQADAHAAAaIgBAoQgDAYgNALQgmgmAAglgAIhklIAAgKQgCgNgmAEIgCgCIgCgHIAMgmIgGgUIgGgSIgCgTQgEgNAAgFIABgFIABgCIAGAAIArBAQARAcAAAbQAAAVgEALQAEACgKAAQgIAAAAgFgAnspFQABglAfgUIAPAxQgVACgQAMg");
	this.shape.setTransform(-7.7,71.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.9,8,112.6,127.9);


(lib.shape143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgyJpIgvgMQg/gNhAgFIg5gDIglAIQgyAPg1AAQgcAAgXgQIAHgMQgXgygEg3QgDgsgFgrQgFgngIgmQgKgxgHg0IAOAEIAFALIAkAlQAZgYAQghIANgeQAOguAZgnQASAwAZArQAMAVAXAJIAyAEQBKgQAyg6QARgVAOgYQA8hkAdhxIAJABIAAAGIgDAsQgDAnABAnQABAaAFAZQAGAcAQAaIAPAZQATAcAfAOQARAHASAAIATAAQAbgEATgVIBAhAQAPgOAJgUIAZg7IAGAMQAFAMABAOQACAogHAoIgSBpQgKBDAhA8IAXAhIAOAPIAlAkIAZgwIAQARIASAhIAIAoQAGAdgBAdIgEAoIgGAYIhRACIAQgGIghAGIhBgGQhSgNhPAMIhIAKIgjAGQgQAEgQAAQgSAAgRgEgAiOjRIgHgcQgHgbgUgVIgPgTQgYgoALgtIAQhpIAHAAQAXA4AVA8QAMAjABAlQADA4gDA3IgMAAgAAhjRIgBgEIAAgPQAAgVAIglIAKg5QAHAAAHALQAIALgBAFQABBugeAHgAHfkYIgCgBIAAgHQAAgGAIgUIAKgZQAGgTAEgdQAVAJABAiIADA8QgDAGgYAAgAnDn6IgBgMQgCgOgpAFIgBgBIgBgGIAKgVIAMgVQAGgeAAgOIAIAAIALAtIANAyIAAAaQgDADgDABQgHgDgBgIgAnOofIgBgEIgEAEIAFAAg");
	this.shape.setTransform(-8.3,74.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.3,12.5,106.1,124.3);


(lib.shape142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AEPJaIhTgFIhUAGIgaACIiegSIgqgDIjLAHIgkgFIg0gMQgXgJgXgDIgEgGQgEgHAAgHQAAgaAEgZIAKg6QAHgigEghQgCgRgJgOIgagqQgMgTAAgUIAHgBIAHAGIAmAkQAkAcArAUQAQgaAEgeQAEghgFgiQgGgqAOgoIAHALQAGAJACALQAEAPAIANIAZAiQAQASAVAHQApANAngMQAOgFAOgKQAggYAYghQAbgmAPguIAehPQAIgTANgQIgEAwIgCAgQgEAlAQAhQAaAvAyAXQAfANAhAGQAjgDAbgSIAdgXQAbgcAUgfIAohGIgBALIgFAdIgHAlIgKBHQgPB+BFBpQASgzAsgkQANgLASgEIgCATQgPAsAJArIANA8QALAxgBA0IgIAFIgoAIIg+AFgAAUhdIgCgHQAAgeAUhMIAZhgIACAFIADADIACgKIAHgKIACADIABgHIAFgWQAGAbAAAhQAAAbgFAaIABAHQAAAcgXAuIgmBAgAHIixQAAgUALgtQAPg+AVgRQAJAPAEAlQADAjAQATIgUALIgaAPIgLANQgHALgHABgAiVkXQgdgggUgkIgcgzQgMgVABgYIgJgDIAWgHIAHgPIAEgSQAIhAAmg2QAFgHAIgDQgFAdgCAdQgBAMADAMIAUBNQAIAegEAgQgIA+ANA7IgDABQgJAAgHgIgAoWl0IACgLIAJgTIAuhFIAKgSQAEgIgBgIQgBgggDggIAGgEIgHgKIAHgEIgBgFIAPAUQAHALADANQAJAfgHAgQgJArgRAnQgjAGgaAagAncmiIAFAAIAAgGg");
	this.shape.setTransform(-11,75.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,14.2,107,123);


(lib.shape141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AFnI9Qh3gWh5ABIhqgGIhiAAIhYgDIhJAIQhLAJhIgSIAAgGIAJAAQgvhEgIhRIgJhYIgMhTIAOADQAhATAfAVQARAKAGAUQAWgjATglQAJgSAFgRQAMgtgEgwQgEgsAIgpIABANIAHgDIAAAiIAFAsQAIAhATAeQAQAXAYAUQAOAMARAEIAuACIApgCQAPgDALgKQASgSAPgYQARgbAMgbQAHgSAFgUIAkhzIgMBdQgFAmAEAmIAIAkQAIAdAXASIAZARQARALAVgCQAcgDAXgOIANgIQBCg0AxhGQASgaAOgdQAQgfAdgQIAAAOIgEAhQgJBgADBhIACA7QACAsAVAmQAGAKAOAGQASAHATgLIAUgOIAIAEIgDAjIgDAtQAAAQADARQAJApAZAkIgGAMIgdACIgggKIgWAHIguAKgAFsAVIADAAIAAgFgAA6iOIAAgJIACgWQABgeAMgcIAjhZQANgjAKglIAPgsIgEA/IAMBPQADAXgJAXQgaBCg4AtgAiSlZQgshdAAg9IACgCIAIgCIAVARIAVAQQAEgEAHgUIAKgdIAJgeQAFgUAGgBQADAIAIAoQAHArAAAOQAAAWgIA2QgIA2AAAUQAAAdAJAYQAMAjAFAeQgCAEgIABQgFgQg+iFgAoClLQARgZAVgXIAZggQATgbAKggIALghIACAxIgCAxQgEAhAEAfIgDAEIgFAEIgHABQgNgPgTgBIgTAEQgYALgPAVQgEgLAGgIgAmwlpIACgEIgDAAgAm/l0IgEgDIgDACIAHABg");
	this.shape.setTransform(-15.1,79);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.9,21.5,103.7,115);


(lib.shape140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AAeI4QgegSgkgEQg7gDg6ADQggAAgdALIgeAFIggAAQgVgDgTgJQgcgOgiAHIgpAKIgaABIABgHIAOgNIgBgLIAHgnIAMgwQAPg/gNg/IAGgCQANAKARACQAmABATgkQAPgbACgfQADg6AAg4IAKgEQAEAsAOAqQAHAWALATQAHANAMAJQAjAcAsgFQAhgEAagTQAVgQANgZQAWgrALgxIAVhjIANABQgEAqAHAoQAJAxAfArQAMAQARALQAeATAkgCQAxgCAhgkIAbgfQAngxAWg6QATgyAlgkIACAbIgCBRQgCAiAAAjQAAAhAHAfQAUBYAnBRIAjgpIAHACQAEBfAnBVIANAEIAAAQIgEAFIhEAJIgxACIijgRQgtgDgrALIhDASQgKACgJAAQgYAAgVgNgAAvh6QgChEAjg6IAYgkQAYgjANgoQAFAiADAjQACAXgCAXQgCAYgOAVIgMAPIhDBEgAhdj8IgFgUQgCgYgLgXIgdhGQgWg5ADg8IAIABIAcArIAgh2IATApQAEAKABALQAFAzgKAxQgTBZANBcIgFACgAoUkcQARg4AhgxQANgSAIgUIAIgVIAMANQAMAsgIAuQgGAggQAbIgDABIgRgQIgdAKIgMAIgAnDmqIABgBIgBAAg");
	this.shape.setTransform(-15.8,79.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.1,21.7,106.6,116.3);


(lib.shape139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AAPLmIhZgRIhoAFIgZAGIgaAFQgkgFgegQIg4AOIgFgCIAAgIQAng8AVhEQAJgcAGgdQAEgVABgWQADhVgHhSIAKgBIAHAOQAHANAFAPQAGATANARQALAOAQALQALAIAPAAIARgBQAbgEARgUQBDhMAQhkIALhFQADgUgGgUQgKgkAHghIAKASIAoBoQAIAVAUANIASABQAMgGABgPIAGgBIAEBAIAEAYQAIAdALAbQAIATATAKIAZALIAlACQAagFAUgMQAjgWAUgjQAVgnALgtQANgxAZguIAMABQABANgEAPIgGAUQgDAKAAAMQAAAPAEAPQAOAzAvAYQAMAHALAHQgRAvgQAvQgGATACAVIAFAhQAGAZATANQAQAKARgIIgRA2QgMAqADAsQACAVANAOIAQABIAFAIQAFAIgDAIIgBAGQgTAIgVADIhKACIgpABIg/gIIgtgCIhFACIhIAJgAhKhSQgLglgJgNQgegpgTg8IABgBIAGgDIAFAJQAEAHAQAAQAQAAAAgHQACgHANgEQABAKgBARIAAAWQAAAbAPAzQARA5ACARQgBAEgEACQgMgPgLgjgAnygwIAAgNQAEhGAZhAIAGAsQAGAbAVASIggAdQgPAMgFASgAkBqNIgcgTIgHAKIgOAAQgCgTAKgOQARgbAVgXIAIAAIAIBCQABALgGAHIgGAIg");
	this.shape.setTransform(-17.5,61.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.4,-13,99.9,149.3);


(lib.shape138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Al2KfIAFgBIgYgEIAHgJIAYgXIAKgKQAVghAFglQAFgrABgtIgBhIQgBgTgEgSQgNg3gQg1IAIgBQALAPAQAKQAUANAZgEQAZgDAUgQIAPgOQAhgdANgqQAKgeADghQADgcgHgdIgJglIAJAAIA6ApQAIAGAKADIASgCQAOgHAGgMQAFgJABgNQADgdgBgeQAAgKAFgJQAcA4AVA8QALAfAWAZQAWAaAhAKQAVA2AYA2QAPAhAHAmIAbiWIAFgQQANgcAYgVQAtgqA6gVIAAAOQACAkAEAjQAEAiAVAZIAdAfIAyAxQALAKAJAPQAIAPABAQIADA5IgBAMIgFAhQgHAkgEAlQgKBaAlBTIgJAPIhXAHIhWgDQh0gKh0AHIiRgGIhFgEIg2AFIhLAOIgfAGQg0gFgdgqgAkkEsIAAAAIAAAAgAoIgUQgCgIADgGQAUgvgFg2IgDgxIAGAAIAOAfQAQAoApASQgbADgSATIgKAPQgLAWgPARgAHclHIAHgiIgMg7QATAAAJAQIALAXIAMAeIgjAdgAk6p2IgKgEIgVgEIgFAFIgDgOIAAhFQAXAkAcAhQAHAIgCAMIgHACg");
	this.shape.setTransform(-13.8,65.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.9,-6.2,104.4,143.5);


(lib.shape137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AE7MkIgugDIhKgIIgpADIgnAEIglAEQg1AAgigKQgZgKgIAAIgpgJIgCgBIh0ALIgqALQgKAAgWgOQgWgOgJAAIguABQgKAAgTgMIgCAAIgeAJIgHgCIgCgEIAGgHIAAgBIAWgiQAXggAAgfQAAgXgJgZQgJgagSgXIAAgGIAAgBIAHgCQAJAAAOAQIAQAVQATgbANgfQAOgjAAgZQAAgcgUgmIgig3IAWAUIACgBQA3AhAXAWQAhAfAIApQAYggAEgQQADgJAAgfIgCgzQgCgagIgWIAAgeQAzANAUgkQAMgVAAggQAAgYgRgwIgSgwQAAgGAEgBIADgBQAJAIAcAyQAhAvAjAAQATAAAGgXQAGgaAHgEQAHAPAKAuQAKAnAOAWQAXgYAMgeQALgaAFgjIAAgCIAFgEQAoA+AUBiQAdCTAFAPQAkhUAZgtQArhPBHgxIAGgBIABABIACAAQAAA0AqBPIAxBgIARgTIAhglQAQAfADAOIABAmQAAAngRBHQgQBHAAAvQAAAoAQA4IADACQAGAEABAGIgEACIAEAJIgCADIgHACIgIgBIgEgEIAAgHIgWgCQgaAAggAJIgnAIIgFAAQgJAFgOABQgfgCgGABgAE6MlIABgBIAKABgAoNEDQgEgXANgSIAegmIANgTQAVgiAAgpQAGAdgKAaQgFANgBAOQgDAoANAmIgJAFQgfgJgbAUgAHSqzIgJgJIgQABQgKgBgGgMQgLgYAAgTIADgxIAFAAQgEAVAaAmIApA7IgGAGQgFgCgIgJg");
	this.shape.setTransform(-15.3,55.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-24.6,105.4,161);


(lib.shape136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ADoMCIhugHIgiAHIg4AGQgXgDgVgLQgLgGgLgCQgXgHgXABIh4AIIgVAEIgWAJIgLAGIihgPIgdACIgJgEIAFgFQgBgRAKgQIAnhEQAMgVAIgYQAHgWgEgZQgOhTg2g/QgggkgRgrIgWg1QgKgXAMgWIALAgIAIAQIAcAjIAYAXIBmBQQAmAdARAsQAdgnAYgsIATgqIAIgXQAJgogIgpIgEgEIgFgQIAIgCIANAJIAMAFQAMgCAEgJIAFgKQANgagKgcIgYhMIgDgPIAFgDIAXAkQAIAMAOAIQAkAVAmgRIANgJIAIgKQAHgMACgOQAFgbAUgRIAFAPQADAOAAAOQAAAZAIAYQAFASANALQAYASAeAGIA+AJIgBAIIgFAVQgFAQgBASQgDA3AQA1QAVBGAOBHIAAiRQABhaAthMQAKgSAOgRQAqg1A8gbIAGACIAAAJQgBAKgEAIQgLAYgEAaQgLBOAlBEIAjA+QAlA/AXBFQAWgoAhgeIAHACIAAAWIgOA0QgHAigDAiQgHBQACBPIAPAFIgHAFQgMAJgNADIhxgJQgGAJgJADIgcAHgAG6iZIA0A1QgCAIgJAEIgbAPgAi4oBIgNgrQgEgPADgPIAFAAQATAYAPAbQAGAJADAMIgHAuQgTgTgIgagAA4ndQgEgQAGgRQAJgagFgZIAFgCIAPAVQAHANAMAKIANAJIAAAIIgvAbIgFABQgDAAgDgDgAHKqbIgPgJQgTAAgMAIQgOAKgEAAQgIgFgCgOIgBgSIADgoQAFgnAMgKIAIAfQAFAQAIAQQAGAKAVAVIAZAeQgBAEgFAAg");
	this.shape.setTransform(-13,59);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.2,-19.5,104.4,157.1);


(lib.shape135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AkOJ8IgQgXQgMgRgUgDQgogCgmAOIgiAGIgeAEIgBgIQAYgrgDgyQgCgvgVgpQgagugVgxQgOghgEglIgBgdIADguQABgaALgSIAKAwQAHAoAXAlIAZAhQAnAuAvAkQASAOAMASIAIgqQALgsARgqQAXg5AOg6IAHgiQADgYgEgYQgEgcgKgcIAOgDIATgHIAIgJQAEgKABgKQAAgPgDgPQgEgWgJgVQgLgbgQgZQggg3gmg1QALgEAJAGQAPAMALAPIBEBcIAKALIAPgRIgXh6IAGgDQAIADAHAKQAIAOAEARIAVBGQAKAdASAZIATAWIAOAIIAiAEQAuAAANgtQALgoAEgpIACADIABgBIAEAlQADAzAIAzQAFAgAMAfQANAhAZAaIAaAUQAQAKAQgGIABAFIgDAHQgSAWgJAWQgEAKgBALQgBAZANAYQAlA/AqA9IgDgyQgEglADgnQACgaAGgZQAGgZALgXQAJgUAPgRQAxg8A0g3IAAgIIABgHQABgKAGgIQAHgKAKgFIABAGIgCARIgKAtQgKApAFAqQAFA3AWAyQALAZAOAYQAgAyAcA2QAYAuAAA0IAQgaIAKgfIATAAQAGBdgTBbIgIAeIgKAdIgLgCIgJgEQgvgOgvAOIg0AMIgVgGIgeAEIhogFIg5ACIgfgBIgugGIhLgTIgygCQg8ADg7ANQgeAIgbAQgAH+G7QAGAEgFgHgAGOhbQgCgEABgGIAFgZQAGgegJgcIAGgBIA/BHQgNARgVgGIgLACIgVAKgAnpk5QgCgeALgZIAPghIAAAQQAIABABAMIAGAdIAHAZQgEAOgPAFIgLAEIgEABQgMgFAAgOgAnbk+IABAAIgBgDIAAADgAjWn+IgOgLQgKgMgCgPQgEgVACgXQABgPAJgLIAOAwQAMAFAEAKIACANIgFAjgAATolIgBgbIACgdIAEgnQAKAEAFAQQAGAVAFAGQADAGAPAJIAXANQAGAEAFAHIALAPQAAAJgGACIgMgNQgFgGgIAAQgqAAgDAKIgBAJQgBAGgHAFQgHgKgCgSgAAgpaIAAAAIAAgBg");
	this.shape.setTransform(-12.4,73.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.4,8.6,106,129);


(lib.shape134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AkYLEIAAgNIgwgEQhPAEgcAJIgWAIIgRAEIgOgCIgBgCIgBgHIAAgCQgLgPgHgvQgKgwABgiQgBgLALgqIAOgvIAMgzIALgvQAFAHAIAUIANAaIAgApQAFggAbg4QAhhCAXgWQAjggAag5QAbg5AAgnQAAgSgIgQQgMgXgZAAQgFAAgFAEIgRAHIgCgBIgBgIQAAgEAIgHQAKgJAFgOQAGgSAAgPQAAgXgJgXIgWgzIABgCIAEgDIA0AmQAmAcAHAPIACgBIgdh2IAAgkQAJACAGANIAMAXIAXAcQAZAXAlAAQA1AAAXgXIANgPQAGgGAJABIgCAFQABAVgEAlQAAAtAZAmQAkA1BFgIIABABIABAHQAAAEgVAYQgXAZgDAYIgJBIQAAAmAbA3QAXAwAfAnQAcAiANA3QAEAQABAhIAAAlIgBBMIgFAXQAPgcAMgrQAPg7AAgwQABgXgLgzQgLgzAAgUQAAguAdgpQANgRA0gzQArgqARgiQAYgwgIg8QAQgEAAAQIgBAbQACAJAQASQAPATALAHQAnAWASAfQAOAZAEAiIgGAFIgLgJIgKgFQg3AAgJBAQgEAgAHAkIAAAFQAKAZAVAgIA2BNQAVAjANAsQAMArgBAmQAAAUgDAbQgGAdgIAOIAAAGIAAAGIgCACIgVABQgfAAgRgIIgSgIQhBAAgVANQgTAMgcAAQgaAAgdgKQgcgMgdAAIhMAMIhJAKQgPAAgogQQgqgPhIAAIglAHIgoAJQgOACgVAKIgVAJQgLAAgEgUgAoNhdIgLggQAAgdAFgbQAIgfAMgMQAIAtAXAeIAWAVQAAAGgLALIgTASIgHAOIgLARQgGgEgNgbgAAKkkQACgPAJgNQATgaAZgWIAbgWQAsgiAfgvQAKgPABgSQACgaATgMIADAEQACATgEATQgOA4gaA2QgTArgtAPQgUAHgTAOQgVAPgYAJIgBABgAj8mFQABgMgCgLQgCgMgDgLQgJgdALgeIAXAuIAkAqIgdAWIgNAPQgOgDABgRgAgbneIgBgRQAAg3AQgzIAJAAQAFAeAFAfQAGAlgIAmIgMBLIgIABgAHYoQIgBgOIAEgkIAEgkIgJgbIgNghQgEgKgOgrIAEAAQAHANAWAiQATAdAHAUQAKAbAABEQAAAGgHACIgSACg");
	this.shape.setTransform(-13.9,65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.7,-7.8,107.5,145.7);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(126.2,41.3,1,1,0,0,0,126.2,455.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:397.8},31).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-414.3,253,911);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkLK1QAKgiB8haIAIACQAIABACADQguAUgrArIg5A6gAiiKoQAhhDBHhoIByirQAdgvBGiZQAjhMAVgfIg0gQIiDgkQiMgrgSgkIgjAtQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQgCgBAAgJQAAgJBeiAQBLhpAigyQhVCUhHBgIAAABQAAAlCaAsQB7AiA8AUQAJgLAGgDIgFARQAfALALAFQAAAEgJACQgNgGgXgIQgqB9h2C7IgGAJQAGAbApBAQAkA7AAAgQAAAJgBgBQgGgCgBAAQgjg6gRgiQgagxgFgiIhhCVQhEBnglBAQgGAAgDgFgABMmWIAAgxIAJAAIABALIALgbIAjhRQArheBGgxQg3BJhoCzQACAqAQBNQATBWAAAtQAAAWgCAJIgGACQgFhdgiiZg");
	this.shape.setTransform(26.8,69.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(78));

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAsEWQgIg0gQghQgeAkgWADQARgbAwhCIA6hPQgHgLgFgOQgIgYgFgKIAJAAQAKAJAHARIAIAVIABgCIAHACQAIABACADQgLALg9BeIgTAbQAOAQAMAzQANA7AAAoQAAAOgCAEIgEAEQgFgPgLhPgABagEQgYgpghgdQAAALAIAZIgFACQgHgDgDgJQgDgJgEgEIAAgJIgiAiIgFgCQAlg4A7hHQgqATg9AWIidA7IgDACQgDABAAgJQAAgSBOgaQCtg7ARgHIAHACIACAAIAZgeQAWgaAThAQAQg5AWgOQgPBQgzBUQgmBBg3A7QAmAOAZAsQAQAcAZA6QgBAFgIACQgYgygNgXg");
	this.shape_1.setTransform(171.3,42.6);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).to({_off:true},2).wait(77));

	// Слой 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjTE/QAeggA6hUQA5hIA8gWQg/AuguA6QgYAegvBMQgIADgHAAQgHAAgDgDgAgMA8IgXhtIABgJIAIAAQAFAXAZBQQAMAkAAAwQAAAagCANIgDAEIgXhwgAhMg8QBJgxBahcQBrhqARgOQgdA5hRBNQhGBAhfBFQgJgBgDgFg");
	this.shape_2.setTransform(217.1,109.8);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2).to({_off:false},0).wait(1).to({_off:true},1).wait(76));

	// Слой 4
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(117.8,216.4,1,1,0,0,0,121.3,210);
	this.instance.alpha = 0.359;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(2).to({alpha:0},0).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-13.6,638.8,420);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(472.6,165.7,1.324,1.013,0,-9.2,0,126.3,248.5);

	this.instance_1 = new lib.Символ40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(142.5,165.7,1.324,1.013,0,-9.2,0,126.3,248.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ38();
	this.instance_2.parent = this;
	this.instance_2.setTransform(123.8,58.8,1,1,0,0,0,119.1,71);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,204,255,1)",0,0,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-131.7,-497.1,812,911), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AqVAkIUvAAIAAhHI0vAAAqZgjIAABH");
	this.shape.setTransform(11.9,226.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AqXR9IAAhIIUvAAIAABIg");
	var mask_graphics_1 = new cjs.Graphics().p("Ap3R9IAAhIITvAAIAABIg");
	var mask_graphics_2 = new cjs.Graphics().p("ApYR9IAAhIISxAAIAABIg");
	var mask_graphics_3 = new cjs.Graphics().p("Ao4R9IAAhIIRxAAIAABIg");
	var mask_graphics_4 = new cjs.Graphics().p("AoYR9IAAhIIQxAAIAABIg");
	var mask_graphics_5 = new cjs.Graphics().p("An5R9IAAhIIPzAAIAABIg");
	var mask_graphics_6 = new cjs.Graphics().p("AnZR9IAAhIIOzAAIAABIg");
	var mask_graphics_7 = new cjs.Graphics().p("Am5R9IAAhIINzAAIAABIg");
	var mask_graphics_8 = new cjs.Graphics().p("AmaR9IAAhIIM1AAIAABIg");
	var mask_graphics_9 = new cjs.Graphics().p("AlsR9IAAhIIL1AAIAABIg");
	var mask_graphics_10 = new cjs.Graphics().p("AktR9IAAhIIK2AAIAABIg");
	var mask_graphics_11 = new cjs.Graphics().p("AjuR9IAAhIIJ3AAIAABIg");
	var mask_graphics_12 = new cjs.Graphics().p("AiuR9IAAhIII3AAIAABIg");
	var mask_graphics_13 = new cjs.Graphics().p("AhvR9IAAhIIH4AAIAABIg");
	var mask_graphics_14 = new cjs.Graphics().p("AgwR9IAAhIIG4AAIAABIg");
	var mask_graphics_15 = new cjs.Graphics().p("AhrR9IAAhIIHzAAIAABIg");
	var mask_graphics_16 = new cjs.Graphics().p("AimR9IAAhIIIuAAIAABIg");
	var mask_graphics_17 = new cjs.Graphics().p("AjhR9IAAhIIJpAAIAABIg");
	var mask_graphics_18 = new cjs.Graphics().p("AkcR9IAAhIIKkAAIAABIg");
	var mask_graphics_19 = new cjs.Graphics().p("AlYR9IAAhIILgAAIAABIg");
	var mask_graphics_20 = new cjs.Graphics().p("AmNR9IAAhIIMbAAIAABIg");
	var mask_graphics_21 = new cjs.Graphics().p("AmrR9IAAhIINXAAIAABIg");
	var mask_graphics_22 = new cjs.Graphics().p("AnIR9IAAhIIORAAIAABIg");
	var mask_graphics_23 = new cjs.Graphics().p("AnmR9IAAhIIPNAAIAABIg");
	var mask_graphics_24 = new cjs.Graphics().p("AoDR9IAAhIIQHAAIAABIg");
	var mask_graphics_25 = new cjs.Graphics().p("AohR9IAAhIIRDAAIAABIg");
	var mask_graphics_26 = new cjs.Graphics().p("Ao+R9IAAhIIR9AAIAABIg");
	var mask_graphics_27 = new cjs.Graphics().p("ApcR9IAAhIIS5AAIAABIg");
	var mask_graphics_28 = new cjs.Graphics().p("Ap5R9IAAhIITzAAIAABIg");
	var mask_graphics_29 = new cjs.Graphics().p("AqXR9IAAhIIUvAAIAABIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:12.1,y:114.9}).wait(1).to({graphics:mask_graphics_1,x:15.3,y:114.9}).wait(1).to({graphics:mask_graphics_2,x:18.4,y:114.9}).wait(1).to({graphics:mask_graphics_3,x:21.6,y:114.9}).wait(1).to({graphics:mask_graphics_4,x:24.8,y:114.9}).wait(1).to({graphics:mask_graphics_5,x:27.9,y:114.9}).wait(1).to({graphics:mask_graphics_6,x:31.1,y:114.9}).wait(1).to({graphics:mask_graphics_7,x:34.3,y:114.9}).wait(1).to({graphics:mask_graphics_8,x:37.4,y:114.9}).wait(1).to({graphics:mask_graphics_9,x:39.3,y:114.9}).wait(1).to({graphics:mask_graphics_10,x:39.3,y:114.9}).wait(1).to({graphics:mask_graphics_11,x:39.3,y:114.9}).wait(1).to({graphics:mask_graphics_12,x:39.3,y:114.9}).wait(1).to({graphics:mask_graphics_13,x:39.3,y:114.9}).wait(1).to({graphics:mask_graphics_14,x:39.2,y:114.9}).wait(1).to({graphics:mask_graphics_15,x:39.2,y:114.9}).wait(1).to({graphics:mask_graphics_16,x:39.2,y:114.9}).wait(1).to({graphics:mask_graphics_17,x:39.2,y:114.9}).wait(1).to({graphics:mask_graphics_18,x:39.2,y:114.9}).wait(1).to({graphics:mask_graphics_19,x:39.2,y:114.9}).wait(1).to({graphics:mask_graphics_20,x:38.6,y:114.9}).wait(1).to({graphics:mask_graphics_21,x:35.7,y:114.9}).wait(1).to({graphics:mask_graphics_22,x:32.7,y:114.9}).wait(1).to({graphics:mask_graphics_23,x:29.8,y:114.9}).wait(1).to({graphics:mask_graphics_24,x:26.8,y:114.9}).wait(1).to({graphics:mask_graphics_25,x:23.8,y:114.9}).wait(1).to({graphics:mask_graphics_26,x:20.9,y:114.9}).wait(1).to({graphics:mask_graphics_27,x:17.9,y:114.9}).wait(1).to({graphics:mask_graphics_28,x:14.9,y:114.9}).wait(1).to({graphics:mask_graphics_29,x:12.1,y:114.9}).wait(1));

	// Слой 2
	this.instance = new lib.Символ35копия();
	this.instance.parent = this;
	this.instance.setTransform(12.1,226.3,0.45,0.45,0,-90,90,8,147.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Слой 5
	this.instance_1 = new lib.Символ35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12.1,226.3,0.45,0.45,0,-90,90,8,147.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.7,221.7,135.2,9.2);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(0,43.9,0.252,0.252,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-576.2,0,25.8,43.9), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(86.2,14.2,1,1,0,0,0,86.2,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.87,scaleY:0.87,x:86.3,y:14.3},3,cjs.Ease.get(-1)).to({scaleX:0.75,scaleY:0.75,x:86.2},3,cjs.Ease.get(1)).to({regX:86.3,scaleX:0.87,scaleY:0.87,x:86.3},4,cjs.Ease.get(-1)).to({regX:86.2,scaleX:1,scaleY:1,x:86.2,y:14.2},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-11,198,54);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(300.6,17.4,1,1,0,0,0,160,21.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:300.1,y:17.9},0).wait(1).to({x:301.1,y:16.9},0).wait(1).to({x:300.6,y:17.9},0).wait(1).to({y:16.4},0).wait(1).to({x:301.1,y:17.9},0).wait(1).to({x:300.6,y:16.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(137.6,-5.7,295,39);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ70();
	this.instance.parent = this;
	this.instance.setTransform(62.1,170.1,1,1,0,0,0,62,170.1);
	this.instance.alpha = 0.859;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,694.2,356.2), null);


(lib.Символ21 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(347.1,178.1,1,1,0,0,0,347.1,178.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,694.2,356.2);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(4.5,4.5,1,1,0,0,0,4.5,4.5);

	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.5,4.5,1,1,0,0,0,4.5,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-0.1,-0.1,9.3,9.3), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(4.8,4.7,1,1,0,0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.25,scaleY:1.25},4).to({scaleX:1,scaleY:1},5).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.5,4.5,1,1,0,0,0,4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.84,scaleY:0.84,x:4.6},4).to({scaleX:1,scaleY:1,x:4.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.1,9.3,9.3);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(39,39.9,1.4,1.4,0,0,0,4.5,4.5);

	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55.6,39.9,1.389,1.389,0,0,0,4.5,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[]},1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(49.6,36.7,1,1,0,0,0,23.3,34.8);
	this.instance_2.alpha = 0.281;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(2));

	// Слой 1
	this.instance_3 = new lib.hat3();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81,79);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hang1_1();
	this.instance.parent = this;
	this.instance.setTransform(158.2,61,1,1,-60,0,0,56.5,50.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-79.2},4).to({rotation:-60},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173.1,169.8);


(lib.копияСимвол2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.sprite37();
	this.instance.parent = this;
	this.instance.setTransform(-3.3,-46.3,1.041,1.041,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.31,scaleY:1.27,rotation:0,skewX:-30.1,skewY:-29.3,x:-3.2,y:-22.4},14).to({scaleX:1.04,scaleY:1.04,rotation:-30,skewX:0,skewY:0,x:-3.3,y:-46.3},15).wait(1));

	// Слой 1
	this.instance_1 = new lib.Анимация1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5.3,14.1,1.048,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.04,scaleY:2.36,skewX:-0.8,skewY:-0.5,x:-5,y:40},14).to({scaleX:1.05,scaleY:1,skewX:0,skewY:0,x:-5.3,y:14.1},15).wait(1));

	// Слой 5
	this.instance_2 = new lib.oi8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-165.1,-49,2.282,2.282);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.6,-100.4,324.7,202);


(lib.ple1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(-78.2,32.7,1,1,0,0,0,86.5,84.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.ple1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14.5,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ple1_1, new cjs.Rectangle(-164.7,-52.2,179.2,169.8), null);


(lib.hat3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,40.5,39.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hat3_1, new cjs.Rectangle(-40.5,-39.5,81,79), null);


(lib.hang3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(6.5,-71.5,1,1,0,0,0,39.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-45,x:6.1,y:-79.9},3).to({rotation:0,x:6.5,y:-71.5},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-75,66,150);


(lib.bfgbr5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hand4_1();
	this.instance.parent = this;
	this.instance.setTransform(4.4,46.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15,x:31,y:57},2).to({rotation:0,x:4.4,y:46.2},11).wait(22));

	// Слой 1
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,0,0,0,16.5,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:30.9,rotation:-15,x:10.6,y:18.7},2).to({regY:31,rotation:0,x:0,y:0},11).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-31,51,110.7);


(lib.sprite140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(-2,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},58).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.4,-162.2,330.9,327.9);


(lib.sprite162 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape134("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.shape135("synched",0);
	this.instance_1.parent = this;

	this.instance_2 = new lib.shape136("synched",0);
	this.instance_2.parent = this;

	this.instance_3 = new lib.shape137("synched",0);
	this.instance_3.parent = this;

	this.instance_4 = new lib.shape138("synched",0);
	this.instance_4.parent = this;

	this.instance_5 = new lib.shape139("synched",0);
	this.instance_5.parent = this;

	this.instance_6 = new lib.shape140("synched",0);
	this.instance_6.parent = this;

	this.instance_7 = new lib.shape141("synched",0);
	this.instance_7.parent = this;

	this.instance_8 = new lib.shape142("synched",0);
	this.instance_8.parent = this;

	this.instance_9 = new lib.shape143("synched",0);
	this.instance_9.parent = this;

	this.instance_10 = new lib.shape144("synched",0);
	this.instance_10.parent = this;

	this.instance_11 = new lib.shape145("synched",0);
	this.instance_11.parent = this;

	this.instance_12 = new lib.shape146("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.shape147("synched",0);
	this.instance_13.parent = this;

	this.instance_14 = new lib.shape148("synched",0);
	this.instance_14.parent = this;

	this.instance_15 = new lib.shape149("synched",0);
	this.instance_15.parent = this;

	this.instance_16 = new lib.shape150("synched",0);
	this.instance_16.parent = this;

	this.instance_17 = new lib.shape151("synched",0);
	this.instance_17.parent = this;

	this.instance_18 = new lib.shape152("synched",0);
	this.instance_18.parent = this;

	this.instance_19 = new lib.shape153("synched",0);
	this.instance_19.parent = this;

	this.instance_20 = new lib.shape154("synched",0);
	this.instance_20.parent = this;

	this.instance_21 = new lib.shape155("synched",0);
	this.instance_21.parent = this;

	this.instance_22 = new lib.shape156("synched",0);
	this.instance_22.parent = this;

	this.instance_23 = new lib.shape157("synched",0);
	this.instance_23.parent = this;

	this.instance_24 = new lib.shape158("synched",0);
	this.instance_24.parent = this;

	this.instance_25 = new lib.shape159("synched",0);
	this.instance_25.parent = this;

	this.instance_26 = new lib.shape160("synched",0);
	this.instance_26.parent = this;

	this.instance_27 = new lib.shape161("synched",0);
	this.instance_27.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_23}]},2).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_25}]},2).to({state:[{t:this.instance_26}]},2).to({state:[{t:this.instance_27}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.7,-7.8,107.5,145.7);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.копияСимвол2();
	this.instance.parent = this;
	this.instance.setTransform(85.8,57.3,0.554,0.475,0,0,0,152.5,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:59.6},7,cjs.Ease.get(-1)).to({y:61.8},7,cjs.Ease.get(1)).to({y:59.4},8,cjs.Ease.get(-1)).to({y:57.3},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.6,0,180,95.9);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sila();
	this.instance.parent = this;
	this.instance.setTransform(1,0);

	this.instance_1 = new lib.Символ36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120.8,28.4,1.813,0.841,180,0,0,11.9,226.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-1.8,0,245.1,32.3), null);


(lib.Символ28 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(283.6,-41.3,1.243,1.243,0,0,0,86.2,14.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:8.7},4).to({y:-34.3},4).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(140.6,12.4,1,1,0,0,0,140.6,12.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-319.4},4).to({x:140.6},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(137.6,-72.6,295,105.9);


(lib.Символ23копия = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(92.8,0.1,1.028,1.028);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ23 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(92.8,0.1,1.028,1.028);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,0,185,98.5);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(23.1,6.3,1.4,1.4,0,0,0,4.5,4.5);

	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.3,6.3,1.4,1.4,0,0,0,4.5,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[]},1).wait(2));

	// Слой 1
	this.instance_2 = new lib.Символ18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(14.6,-2,1,1,0,0,0,39.5,38.4);
	this.instance_2.alpha = 0.281;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ple2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hang3_1();
	this.instance.parent = this;
	this.instance.setTransform(-7.2,106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.ple2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-15.5,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ple2_1, new cjs.Rectangle(-40.2,-40,66,221), null);


(lib.bod5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(-14.5,-140.2,1,1,0,0,0,14.8,6.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ17(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.bod5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-85,-189.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.bod5_1, new cjs.Rectangle(-85,-189.5,170,379), null);


(lib.sprite235 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.sprite162();
	this.instance.parent = this;
	this.instance.setTransform(12.5,-31.4);
	this.instance.shadow = new cjs.Shadow("#FFCC00",0,0,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite235, new cjs.Rectangle(-80.2,-64.2,161,199), null);


(lib.sprite141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite140();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite141, new cjs.Rectangle(-167.4,-162.2,330.9,327.9), null);


(lib.Символ49 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(81.8,41,0.677,0.677,0,0,0,120.8,16.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:11},4).to({y:41},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,30,165.8,21.9);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sprite141();
	this.instance.parent = this;
	this.instance.setTransform(41,39.1,0.396,0.396,0,0,0,0,0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(40,37.2,1.631,1.631);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-25.4,-25.2,131.1,129.9), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// knife
	this.instance = new lib.knife_1();
	this.instance.parent = this;
	this.instance.setTransform(609.5,54.5,1,1,0,-135,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:-150,skewY:30,y:56.5},19).to({skewX:-135,skewY:45,y:54.5},20).wait(1));

	// hat3
	this.instance_1 = new lib.hat3_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(590.5,20.5,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,regY:0.1,rotation:0,x:588.6,y:23.6},19).to({regX:0,regY:0,rotation:15,x:590.5,y:20.5},20).wait(1));

	// body
	this.instance_2 = new lib.body_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(554,185.5,1,1,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:11.6},19).to({rotation:6.2},20).wait(1));

	// ple2
	this.instance_3 = new lib.ple2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(632.5,119);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:25.7,x:623.5,y:122.4},19).to({rotation:0,x:632.5,y:119},20).wait(1));

	// ple1
	this.instance_4 = new lib.ple1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(539.5,82);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:15,x:537.7,y:89.8},19).to({rotation:0,x:539.5,y:82},20).wait(1));

	// hat4
	this.instance_5 = new lib.hat4_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(656,80.5,1,1,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-60},19).to({rotation:-30},20).wait(1));

	// bod5
	this.instance_6 = new lib.bod5_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(563,141.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40));

	// bf434
	this.instance_7 = new lib.bf434_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(627,103.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-45,x:638,y:99.5},19).to({rotation:0,x:627,y:103.6},20).wait(1));

	// bfgbr5
	this.instance_8 = new lib.bfgbr5_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(489.7,66.1,1,1,15,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(374.8,-48,318.7,384);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiPEhQgjgGgpgQQgVgJg0gZQgogSgMgSQgNgTgBgfQAAgcAKgVQAIgSAdgcIAcgbIgLgHQgfgSgKgMQgQgVAFgYQAEgaAXgMQAGgEAKgCIASgFQAMgDAXgKQAUgHAPABQAeADAXAeIANASQAHAKAHAGQAHAGAVALIAHAEIAZAEQAlAFBJAAQAsAAAbgEQAPgCAJABIAJAAQAOgBAcgEQAagCArAGQAyAGASAAQASAAAGACQAPAFABAMQABAJgJAKIgSAQQATAPgDAOQgCAKgPAIQgQAIgRADQgOACgFAEQgCACgHAMQgJAQgVANQgSAMgTAIIgJASQgQAagbATQgRAMgnAQQhFAcgvAKQgqAKgmAAQgWAAgUgDgAgBiDQgdgCgRgFQgNgCgHgHQgFgFgBgFIgDgBIgegLIgUgGQgKgFgPgLIgVgQQgPgOgDgIQgDgHABgHQABgIAFgEQAHgGANABIATAGQARAFAWADIAnADIBIACQANAAAGgDQADgCAKgLQARgWArgHQAjgHAfAEQAuAFAUAcQAIAKALAXIAMAXQAGAPgHAKQgEAHgMAFQgeANg/ALQgxAJgbACIgQAAQgaAAgfgDg");
	mask.setTransform(856.1,279.7);

	// Слой 3
	this.instance = new lib.sprite235();
	this.instance.parent = this;
	this.instance.setTransform(864.4,263.6,0.236,0.256,0,22.8,0);
	this.instance.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.sprite235();
	this.instance_1.parent = this;
	this.instance_1.setTransform(764.6,285.6,0.236,0.256,0,22.8,0);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.fon();
	this.instance_2.parent = this;
	this.instance_2.setTransform(345,159);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(345,159,711,400), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(20.2,39.8,1,1,0,0,0,40.2,39.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:48.6},9,cjs.Ease.get(-1)).to({x:80.2},10,cjs.Ease.get(1)).to({x:50.2},10,cjs.Ease.get(-1)).to({x:20.2},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.4,-25.2,131.1,129.9);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(-373.4,87.5,1,1,0,0,0,28,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:39.6,rotation:2.8,x:-369.4,y:60},14,cjs.Ease.get(-1)).to({regX:27.9,rotation:5.7,x:-365.2,y:30.4},15,cjs.Ease.get(1)).to({rotation:2.8,x:-369.3,y:59},15,cjs.Ease.get(-1)).to({regX:28,regY:39.5,rotation:0,x:-373.4,y:87.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,0,318.7,384);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(60.2,-20.2,1,1,0,0,0,40.2,39.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:7.5},4,cjs.Ease.get(-1)).to({y:119.8},5,cjs.Ease.get(1)).to({y:56.2},5,cjs.Ease.get(-1)).to({y:-20.2},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.4,-85.2,131.1,129.9);


(lib.Символ9копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}
	this.frame_1 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 2
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(40.2,39.8,1,1,0,0,0,40.2,39.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}
	this.frame_1 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(20.2,39.8,1,1,0,0,0,40.2,39.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.4,-85.2,131.1,129.9);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(150.9,471,1,1,0,0,0,-40.8,192);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:480.8},19,cjs.Ease.get(-1)).to({y:491},20,cjs.Ease.get(1)).to({y:481},20,cjs.Ease.get(-1)).to({y:471},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(165,279,318.7,384);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(-32.8,182.5,1,1,-2.7,0,0,-14,192);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(158.6,248.1,316,386.6), null);


// stage content:
(lib.black_elf_600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.movieClip_1.x = stage.mouseX/window.devicePixelRatio;
			this.movieClip_1.y = stage.mouseY/window.devicePixelRatio;
		this.elf.x = - stage.mouseX / 4 /window.devicePixelRatio;
		this.elf.y = - stage.mouseY / 4 /window.devicePixelRatio;
		this.fon.x = - stage.mouseX / 10 /window.devicePixelRatio;
		this.fon.y = - stage.mouseY / 10 / window.devicePixelRatio;
			this.arbal.x = stage.mouseX/window.devicePixelRatio;
		}
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		function fl_MouseOverHandler_5() {
			_this.arbal1.gotoAndStop(1);
				_this.arbal.gotoAndStop(1);
				_this.movieClip_2.gotoAndStop(1);
				_this.movieClip_1.gotoAndStop(1);
			_this.scen.gotoAndPlay(1);
				_this.txt.gotoAndPlay(1);
			_this.sila.gotoAndPlay(1);
		}
		
		
		stage.canvas.onmouseout = fl_MouseOutHandler_5;
		function fl_MouseOutHandler_5() {
			_this.arbal1.gotoAndStop(0);
			_this.arbal.gotoAndStop(0);
					_this.movieClip_2.gotoAndStop(0);
				_this.movieClip_1.gotoAndStop(0);
			_this.scen.gotoAndPlay(5);
			_this.txt.gotoAndPlay(5);
			_this.sila.gotoAndPlay(5);
		}
		
		document.addEventListener("click", fl_ClickToGoToWebPage3);
		
		function fl_ClickToGoToWebPage3() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 11
	this.sila = new lib.Символ49();
	this.sila.parent = this;
	this.sila.setTransform(300,284.3,1,1,0,0,0,81.7,10.9);

	this.timeline.addTween(cjs.Tween.get(this.sila).wait(1));

	// Layer 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(586.3,271,1,1,0,0,0,4.2,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 6
	this.txt = new lib.Символ28();
	this.txt.parent = this;
	this.txt.setTransform(158.3,22.2,1,1,0,0,0,140.6,12.4);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Слой 9
	this.instance_1 = new lib.Символ24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(306.2,18.1,1,1.117,0,0,0,307.1,19.4);
	this.instance_1.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4
	this.arbal = new lib.Символ23копия();
	this.arbal.parent = this;
	this.arbal.setTransform(824.1,281.7,1,1,0,0,0,91,49.2);

	this.arbal1 = new lib.Символ23();
	this.arbal1.parent = this;
	this.arbal1.setTransform(186,281.7,1,1,0,0,0,91,49.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arbal1},{t:this.arbal}]}).wait(1));

	// Слой 3
	this.movieClip_1 = new lib.Символ9копия();
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(731.1,132.4,1,1,0,0,0,40.2,39.8);

	this.movieClip_2 = new lib.Символ9();
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(190.3,132.4,1,1,0,0,0,40.2,39.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_2},{t:this.movieClip_1}]}).wait(1));

	// Слой 8
	this.instance_2 = new lib.Символ37();
	this.instance_2.parent = this;
	this.instance_2.setTransform(123.7,209.1,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 2
	this.elf = new lib.Символ20();
	this.elf.parent = this;
	this.elf.setTransform(-9.3,-29.7,1,1,0,0,0,-5,175.6);

	this.timeline.addTween(cjs.Tween.get(this.elf).wait(1));

	// Слой 5
	this.instance_3 = new lib.sprite235();
	this.instance_3.parent = this;
	this.instance_3.setTransform(64.6,151.3,1.481,1.607,0,22.8,0,0.4,0.4);
	this.instance_3.compositeOperation = "lighter";

	this.instance_4 = new lib.sprite235();
	this.instance_4.parent = this;
	this.instance_4.setTransform(602.7,151.3,1.481,1.607,0,22.8,0,0.4,0.4);
	this.instance_4.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Слой 7
	this.scen = new lib.Символ21();
	this.scen.parent = this;
	this.scen.setTransform(318,157.9,1,1,0,0,0,347.1,178.1);

	this.timeline.addTween(cjs.Tween.get(this.scen).wait(1));

	// Слой 1
	this.fon = new lib.Символ1();
	this.fon.parent = this;
	this.fon.setTransform(-9.6,-13,1,1,0,0,0,355.5,200);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(172,-338.1,861.2,917.5);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/arr.png?1479132856989", id:"arr"},
		{src:"images/arrow.png?1479132856989", id:"arrow"},
		{src:"images/bey.png?1479132856989", id:"bey"},
		{src:"images/bf434.png?1479132856989", id:"bf434"},
		{src:"images/bfgbr5.png?1479132856989", id:"bfgbr5"},
		{src:"images/bod5.png?1479132856989", id:"bod5"},
		{src:"images/body.png?1479132856989", id:"body"},
		{src:"images/fon.jpg?1479132856989", id:"fon"},
		{src:"images/hand4.png?1479132856989", id:"hand4"},
		{src:"images/hang1.png?1479132856989", id:"hang1"},
		{src:"images/hang3.png?1479132856989", id:"hang3"},
		{src:"images/hat3.png?1479132856989", id:"hat3"},
		{src:"images/hat4.png?1479132856989", id:"hat4"},
		{src:"images/knife.png?1479132856989", id:"knife"},
		{src:"images/oi8.png?1479132856989", id:"oi8"},
		{src:"images/ple1.png?1479132856989", id:"ple1"},
		{src:"images/ple2.png?1479132856989", id:"ple2"},
		{src:"images/rain.png?1479132856989", id:"rain"},
		{src:"images/sila.png?1479132856989", id:"sila"},
		{src:"images/zastreli.png?1479132856989", id:"zastreli"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;