(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,400);


(lib.blink = function() {
	this.initialize(img.blink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,571,93);


(lib.book = function() {
	this.initialize(img.book);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,97);


(lib.chip = function() {
	this.initialize(img.chip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,44);


(lib.goat = function() {
	this.initialize(img.goat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,257,185);


(lib.goat2 = function() {
	this.initialize(img.goat2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,263,202);


(lib.han1 = function() {
	this.initialize(img.han1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,189);


(lib.han2 = function() {
	this.initialize(img.han2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,184);


(lib.helio = function() {
	this.initialize(img.helio);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,218,155);


(lib.imac = function() {
	this.initialize(img.imac);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,176);


(lib.iph = function() {
	this.initialize(img.iph);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,106);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,99);


(lib.more = function() {
	this.initialize(img.more);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,415,65);


(lib.pod = function() {
	this.initialize(img.pod);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,95);


(lib.priz = function() {
	this.initialize(img.priz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,58);


(lib.rou = function() {
	this.initialize(img.rou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,166);


(lib.snowman = function() {
	this.initialize(img.snowman);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,100);


(lib.tek = function() {
	this.initialize(img.tek);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,494,60);


(lib.twoth = function() {
	this.initialize(img.twoth);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,304,65);// helper functions:

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


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AFcB3IAAgZIh8AAIAAAZIgqAAIAAhHIAIAAQAMAAAEgGQAEgFACgQIAQiHICQAAIAACiIAVAAIAABHgAEKAXQgDAVgHAFIA9AAIAAh0IgqAAgAAiBgQgKgBgJgEIgRgIIgQgMQgIgHgGgIQgGgJgEgKQgEgKgDgMQgCgMAAgMQAAgNACgMQADgMAEgKQAFgKAGgJQAGgJAIgGQAHgHAJgFQAHgFAKgEQAJgDAKgCIAVgCIAUACQAKACAJADQAJAEAJAFQAIAFAIAHQAIAGAGAJQAGAJAEAKQAEAKADAMQACAMAAANQAAALgCALQgCALgEAKQgEAKgFAIQgGAJgHAHQgHAHgIAGQgJAFgKAEQgKAEgKACQgLACgMAAgAAkg+QgKADgHAHQgIAIgEAKQgEALAAAOQAAAMAEALQAEALAIAHQAHAHAKAEQAJADAKAAQAKAAAJgDQAKgEAHgHQAIgHAEgLQAFgLAAgMQAAgOgFgLQgEgKgIgHQgHgHgJgEQgJgEgKAAQgLAAgJAEgAuUBgQgKgBgKgEIgSgIIgQgMQgHgHgGgIQgGgJgFgKQgEgKgCgMQgCgMAAgMQAAgNACgMQACgMAFgKQAEgKAGgJQAGgJAIgGQAIgHAIgFQAJgFAJgEQAKgDAKgCIAUgCIAUACQAKACAJADQAKAEAIAFQAJAFAHAHQAIAGAGAJQAGAJAFAKQAEAKACAMQADAMAAANQAAALgCALQgCALgEAKQgEAKgGAIQgFAJgHAHQgHAHgJAGQgJAFgJAEQgKAEgLACQgLACgMAAgAuSg+QgKADgHAHQgIAIgEAKQgFALAAAOQAAAMAFALQAEALAHAHQAHAHAKAEQAJADALAAQAKAAAJgDQAJgEAIgHQAHgHAFgLQAEgLAAgMQAAgOgEgLQgFgKgHgHQgHgHgKgEQgJgEgKAAQgKAAgJAEgAzNBdIABgnIAPAAQAFgBADgDQAGgFABgRIAPiOICTAAIAADQIg2AAIAAifIgtAAIgIBfQgCAXgFANQgGAOgJAHQgKAHgQABIgIABQgMAAgSgDgAQZBfIAAjRIA3AAIAABnIBthnIARAAIAADQIg3AAIAAhqIhuBrgAoqBfIAAjRIA3AAIAABnIBthnIARAAIAADQIg3AAIAAhqIhuBrgAPABeIguhQIgaABIAABPIg2AAIAAjQIA2AAIAABSIAQAAQAKgBAFgCQAGgDAEgLQADgHAFgVQADgKAFgIQAGgIAIgGQAJgFANgBQAOgCASAEIAAAkQgLAAgGADQgGADgDAJQgFAUgGANQgGAOgIAJIA7BcIAAAIgAIyBeIgMgaIhOAAIgMAaIg5AAIAAgHIBgjLIAZAAIBfDLIAAAHgAIVAXIgWgyIgVAyIArAAgAiLBeIAAieIhAAAIAACeIg3AAIAAjQICuAAIAADQgAJ+BeIAAjQIBcAAQAJAAAJACQAIACAHADQAOAGAKAMQAJALAFAOQAEAOAAAPQAAAOgFAOQgFANgJAKQgKALgNAGQgVAHgMAAIgmAAIAAA2gAK0gGIAmAAQAKAAAHgKQAGgJAAgMQAAgMgGgIQgGgJgLAAIgmAAgAryBdIAAjPIBcAAQAOAAANAEQAMAFAJAIQAIAJAFALQAFAMAAAPQAAAJgFAKQgFALgHAGQAGADAFAFQAFAEADAFQAHAMAAAPQAAANgFAMQgEALgIAJQgJAIgMAFQgNAFgQAAgAq8AuIAqAAQAIAAAEgFQAEgFABgGQAAgIgEgFQgFgGgIAAIgqAAgAq8ggIAiAAQAIAAAEgFQAEgFAAgGQAAgIgEgFQgEgGgIAAIgiAAg");
	this.shape.setTransform(123,11.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(0,0,246,23.8), null);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AFcB3IAAgZIh8AAIAAAZIgqAAIAAhHIAIAAQAMAAAEgGQAEgFACgQIAQiHICQAAIAACiIAVAAIAABHgAEKAXQgDAVgHAFIA9AAIAAh0IgqAAgAAiBgQgKgBgJgEIgRgIIgQgMQgIgHgGgIQgGgJgEgKQgEgKgDgMQgCgMAAgMQAAgNACgMQADgMAEgKQAFgKAGgJQAGgJAIgGQAHgHAJgFQAHgFAKgEQAJgDAKgCIAVgCIAUACQAKACAJADQAJAEAJAFQAIAFAIAHQAIAGAGAJQAGAJAEAKQAEAKADAMQACAMAAANQAAALgCALQgCALgEAKQgEAKgFAIQgGAJgHAHQgHAHgIAGQgJAFgKAEQgKAEgKACQgLACgMAAgAAkg+QgKADgHAHQgIAIgEAKQgEALAAAOQAAAMAEALQAEALAIAHQAHAHAKAEQAJADAKAAQAKAAAJgDQAKgEAHgHQAIgHAEgLQAFgLAAgMQAAgOgFgLQgEgKgIgHQgHgHgJgEQgJgEgKAAQgLAAgJAEgAuUBgQgKgBgKgEIgSgIIgQgMQgHgHgGgIQgGgJgFgKQgEgKgCgMQgCgMAAgMQAAgNACgMQACgMAFgKQAEgKAGgJQAGgJAIgGQAIgHAIgFQAJgFAJgEQAKgDAKgCIAUgCIAUACQAKACAJADQAKAEAIAFQAJAFAHAHQAIAGAGAJQAGAJAFAKQAEAKACAMQADAMAAANQAAALgCALQgCALgEAKQgEAKgGAIQgFAJgHAHQgHAHgJAGQgJAFgJAEQgKAEgLACQgLACgMAAgAuSg+QgKADgHAHQgIAIgEAKQgFALAAAOQAAAMAFALQAEALAHAHQAHAHAKAEQAJADALAAQAKAAAJgDQAJgEAIgHQAHgHAFgLQAEgLAAgMQAAgOgEgLQgFgKgHgHQgHgHgKgEQgJgEgKAAQgKAAgJAEgAzNBdIABgnIAPAAQAFgBADgDQAGgFABgRIAPiOICTAAIAADQIg2AAIAAifIgtAAIgIBfQgCAXgFANQgGAOgJAHQgKAHgQABIgIABQgMAAgSgDgAQZBfIAAjRIA3AAIAABnIBthnIARAAIAADQIg3AAIAAhqIhuBrgAoqBfIAAjRIA3AAIAABnIBthnIARAAIAADQIg3AAIAAhqIhuBrgAPABeIguhQIgaABIAABPIg2AAIAAjQIA2AAIAABSIAQAAQAKgBAFgCQAGgDAEgLQADgHAFgVQADgKAFgIQAGgIAIgGQAJgFANgBQAOgCASAEIAAAkQgLAAgGADQgGADgDAJQgFAUgGANQgGAOgIAJIA7BcIAAAIgAIyBeIgMgaIhOAAIgMAaIg5AAIAAgHIBgjLIAZAAIBfDLIAAAHgAIVAXIgWgyIgVAyIArAAgAiLBeIAAieIhAAAIAACeIg3AAIAAjQICuAAIAADQgAJ+BeIAAjQIBcAAQAJAAAJACQAIACAHADQAOAGAKAMQAJALAFAOQAEAOAAAPQAAAOgFAOQgFANgJAKQgKALgNAGQgVAHgMAAIgmAAIAAA2gAK0gGIAmAAQAKAAAHgKQAGgJAAgMQAAgMgGgIQgGgJgLAAIgmAAgAryBdIAAjPIBcAAQAOAAANAEQAMAFAJAIQAIAJAFALQAFAMAAAPQAAAJgFAKQgFALgHAGQAGADAFAFQAFAEADAFQAHAMAAAPQAAANgFAMQgEALgIAJQgJAIgMAFQgNAFgQAAgAq8AuIAqAAQAIAAAEgFQAEgFABgGQAAgIgEgFQgFgGgIAAIgqAAgAq8ggIAiAAQAIAAAEgFQAEgFAAgGQAAgIgEgFQgEgGgIAAIgiAAg");
	this.shape.setTransform(123,11.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(0,0,246,23.8), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(6,1,1).p("AEytLIFQAJIgIE1ApcotIAIk2IFdAKAklNMIlcgJIAJlQAJeIUIgKFQIlPgJ");
	this.shape.setTransform(64.2,86.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,134.3,179.5);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(6,1,1).p("AJyAAQAAEDi4C3Qi3C4kDAAQkCAAi4i4Qi3i3AAkDQAAkCC3i4QC4i3ECAAQEDAAC3C3QC4C4AAECg");
	this.shape.setTransform(62.6,62.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-3,-3,131.1,131.1), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B11712").ss(4.2,1,1).p("ACCAAQAAA2gmAmQgmAmg2AAQg1AAgmgmQgmgmAAg2QAAg1AmgmQAmgmA1AAQA2AAAmAmQAmAmAAA1g");
	this.shape.setTransform(13,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(-2,-2,30,30), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.twoth();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(0,0,304,65), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.more();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(0,0,415,65), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.priz();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(0,0,191,58), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.han2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(0,0,74,184), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.han1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(0,0,68,189), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blink();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,0,571,93), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tek();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,0,494,60), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.goat();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,257,185), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.goat2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,263,202), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chip();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,42,44), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snowman();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,151,100), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.helio();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,218,155), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rou();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.067,0.067);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,11.1,11.1), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rou();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,166,166), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,700,400), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,135,99), null);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 60
	this.instance = new lib.Символ60();
	this.instance.parent = this;
	this.instance.setTransform(123,11.8,1,1,0,0,0,123,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:123.5},9).to({x:123,y:12.3},10).to({x:122.5,y:11.8},10).to({x:123},10).wait(1));

	// Символ 59
	this.instance_1 = new lib.Символ59();
	this.instance_1.parent = this;
	this.instance_1.setTransform(123,13.9,1,1,0,0,0,123,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:121.5,y:11.9},9).to({x:123,y:10.1},10).to({x:124.8,y:11.9},10).to({x:123,y:13.9},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,246,25.8);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(29.7,51.8,0.702,0.702,20.2,0,0,64,86.7);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.iph();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,106);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(129,38.4,1.229,1.229,97.5,0,0,64,86.7);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.book();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,7.9,1,1,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.2,104.8);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(113.4,94.1,1.458,1.458,107.5,0,0,64.2,86.7);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.imac();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,176);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(33.1,43.3,0.654,0.654,-17,0,0,64,86.7);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.pod();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,95);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(62.6,62.6,1,1,0,0,0,62.6,62.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03},4,cjs.Ease.get(-1)).to({regX:62.5,regY:62.5,scaleX:1.05,scaleY:1.05,x:62.5,y:62.5},4,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03,x:62.6,y:62.6},4,cjs.Ease.get(-1)).to({regX:62.6,regY:62.6,scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,131.1,131.1);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(13,13,1,1,0,0,0,13,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.57,scaleY:0.57,x:13.1,y:13.1},4).to({scaleX:1,scaleY:1,x:13,y:13},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,30,30);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,1,1,0,0,0,62.6,62.6);

	this.instance_1 = new lib.Символ49();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,0.1,1,1,0,0,0,13,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-65.5,-65.5,131.1,131.1), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ57();
	this.instance.parent = this;
	this.instance.setTransform(32.5,53,1,1,0,0,0,32.5,53);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-34.8,-21.8,129.1,147.4), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.parent = this;
	this.instance.setTransform(110,88,1,1,0,0,0,110,88);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-37.9,-36.2,302.4,260.5), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(116.5,52.4,1,1,0,0,0,116.5,52.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(0,-56.6,247.9,190.5), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(31.5,47.5,1,1,0,0,0,31.5,47.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-22.7,-23.2,111.8,133), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(152,32.5,1,1,0,0,0,152,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.97,scaleY:0.97,x:152.1},5,cjs.Ease.get(-1)).to({regX:152.1,scaleX:0.94,scaleY:0.94},4,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:0.97,y:32.6},5,cjs.Ease.get(-1)).to({regX:152,scaleX:1,scaleY:1,x:152,y:32.5},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,304,65);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(247,30,1,1,0,0,0,247,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(0,0,494,60), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 37
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(155,102,1,1,0,0,0,37,92);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.8,x:155.1,y:102.1},6,cjs.Ease.get(-1)).to({rotation:6.5,x:155},8,cjs.Ease.get(1)).to({regX:37.1,rotation:3.3,x:155.2},7,cjs.Ease.get(-1)).to({regX:37,rotation:0,x:155,y:102},8,cjs.Ease.get(1)).wait(1));

	// Символ 36
	this.instance_1 = new lib.Символ36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34,94.5,1,1,0,0,0,34,94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:98.2},6,cjs.Ease.get(-1)).to({y:103.1},8,cjs.Ease.get(1)).to({y:99.1},7,cjs.Ease.get(-1)).to({y:94.5},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,194);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(247,30,1,1,0,0,0,247,30);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.25},14).to({alpha:0},15).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(247,30,1,1,0,0,0,247,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,494,60);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(247,30,1,1,0,0,0,247,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:34.1},14,cjs.Ease.get(-1)).to({y:38.5},15,cjs.Ease.get(1)).to({y:34.3},15,cjs.Ease.get(-1)).to({y:30},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,494,60);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(186.8,72.7,1,1,0,0,0,285.3,46.6);

	this.instance_1 = new lib.Символ33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(396.8,67.5,1,1,0,0,0,285.3,46.6);

	this.instance_2 = new lib.Символ33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(196.6,30.3,1,1,0,0,0,285.3,46.6);

	this.instance_3 = new lib.Символ33();
	this.instance_3.parent = this;
	this.instance_3.setTransform(389,34.9,1,1,0,0,0,285.3,46.6);

	this.instance_4 = new lib.Символ33();
	this.instance_4.parent = this;
	this.instance_4.setTransform(341.4,67.5,1,1,0,0,0,285.3,46.6);

	this.instance_5 = new lib.Символ33();
	this.instance_5.parent = this;
	this.instance_5.setTransform(221.4,61.6,1,1,0,0,0,285.3,46.6);

	this.instance_6 = new lib.Символ33();
	this.instance_6.parent = this;
	this.instance_6.setTransform(285.3,46.6,1,1,0,0,0,285.3,46.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-98.5,-16.3,781,135.4), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (this.currentFrame = true){
		this.gotoAndPlay(Math.random() * 50);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(11,11.5,0.524,0.524,0,0,0,21,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:97.5,x:44,y:426.5},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22,23.1);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(196,22.5,1,1,0,0,0,11,11.5);

	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(502,14.7,1.261,1.261,0,0,0,11,11.6);

	this.instance_2 = new lib.Символ30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(11,14.5,1,1,0,0,0,11,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(0,0,515.9,34.1), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(-114.2,297.7,0.616,0.616,-67.5,0,0,75.5,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:75.4,regY:50.1,rotation:-98.3,x:187.5,y:114.3},29).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.5,243,92.5,109.5);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(58,41.3,0.532,0.532,0,0,0,109,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,116,82.5), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(58,41.2,1,1,0,0,0,58,41.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:36.8},4,cjs.Ease.get(-1)).to({y:31.2},5,cjs.Ease.get(1)).to({y:36.2},5,cjs.Ease.get(-1)).to({y:41.2},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116,82.5);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(147.1,120.8,1,1,-14,0,0,128.5,92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,294.1,241.6), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(147.2,122.7,1,1,10.2,0,0,131.4,101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,294.7,245.5), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (this.currentFrame = true){
		this.gotoAndPlay(Math.random() * 160);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(160));

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(5.5,5.5,1,1,0,0,0,5.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-108.5,y:1467.7},159).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.1,11.1);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (this.currentFrame = true){
		this.gotoAndPlay(Math.random() * 30);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(83,83,1,1,0,0,0,83,83);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1192.5,y:5062.7},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,166,166);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(350,200,1,1,0,0,0,350,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:349.4,y:200.7},1).to({x:350.7,y:199.4},1).to({y:200.7},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,700,400);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 25
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(537.7,39.5,1,1,0,0,0,147.1,120.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75).to({_off:false},0).to({x:515.7,y:-148.4},8,cjs.Ease.get(1)).to({rotation:-6.5,x:515.6},16).to({rotation:0,x:537.7,y:39.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(140));

	// Символ 24
	this.instance_1 = new lib.Символ24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.6,41.5,1,1,0,0,0,147.3,122.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:74.6,y:-141.4},8,cjs.Ease.get(1)).to({rotation:-10.7,y:-135.4},16).to({rotation:0,x:28.6,y:41.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(214).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.7,-81.3,294.7,245.5);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 47
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(408.7,-150.1,1,1,0,0,0,32.5,53);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-34,x:443.1,y:475.5},29,cjs.Ease.get(-1)).wait(1));

	// Символ 46
	this.instance_1 = new lib.Символ46();
	this.instance_1.parent = this;
	this.instance_1.setTransform(250.5,-41.5,1,1,5,0,0,110,88);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:23.7,x:224.1,y:440.5},16).wait(1).to({rotation:0,x:258,y:-177.4},0).to({rotation:4,x:252.2,y:-71.6},12,cjs.Ease.get(-1)).wait(1));

	// Символ 45
	this.instance_2 = new lib.Символ45();
	this.instance_2.parent = this;
	this.instance_2.setTransform(15,326.4,0.997,0.997,-33.1,0,0,116.5,52.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,rotation:-44.5,x:17.1,y:488},4).wait(1).to({rotation:0,x:9,y:-153},0).to({scaleX:1,scaleY:1,rotation:-30.3,x:14.5,y:286},24,cjs.Ease.get(-1)).wait(1));

	// Символ 44
	this.instance_3 = new lib.Символ44();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-143.4,-97.4,1,1,-3,0,0,31.4,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:31.5,rotation:-37,x:-189.8,y:414.9},22).wait(1).to({rotation:0,x:-139,y:-144.6},0).to({regX:31.4,rotation:-1.5,x:-141.3,y:-120.6},6,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177.3,-203.1,618.5,636.7);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(-250.4,-71.5,1,1,0,0,0,228.5,13);

	this.instance_1 = new lib.Символ28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4.4,34.1,1,1,0,0,0,46.5,30.8);

	this.instance_2 = new lib.Символ26();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-472.5,62.9,1,1,0,0,0,58,41.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-530.5,-84.5,567.5,440.2), null);


(lib.Символ3 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(545.1,286.1,1,1,0,0,0,96,97);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:206.1},7,cjs.Ease.get(-1)).to({y:126.1},7,cjs.Ease.get(1)).to({y:200.7},8,cjs.Ease.get(-1)).to({y:286.1},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(449.1,189.1,192,194);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(247,30,1,1,0,0,0,247,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(255.6,27.2,1,1,0,0,0,285.3,46.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-128.3,-35.7,781,135.4), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 200th.png
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(164,41.5,1,1,0,0,0,152,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// priz.png
	this.instance_1 = new lib.Символ40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(399.5,42,1,1,0,0,0,95.5,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// more.png
	this.instance_2 = new lib.Символ41();
	this.instance_2.parent = this;
	this.instance_2.setTransform(100.3,38.5,1,1,0,0,0,207.5,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.blink();
	this.instance_3.parent = this;
	this.instance_3.setTransform(115,5);

	this.instance_4 = new lib.blink();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-261,13);

	this.instance_5 = new lib.blink();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-4,-5);

	this.instance_6 = new lib.blink();
	this.instance_6.parent = this;
	this.instance_6.setTransform(74,-3);

	this.instance_7 = new lib.blink();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-220,-2);

	this.instance_8 = new lib.blink();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-231,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-261,-5,947,111), null);


(lib.Символ62 = function(mode,startPosition,loop) {
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

	// Слой 2
	this.instance = new lib.Символ61();
	this.instance.parent = this;
	this.instance.setTransform(869,24.1,1,1,0,0,0,123,12.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(746,11.2,246,25.8);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(723.1,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(676.1,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(628,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_3 = new lib.Символ12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(581,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_4 = new lib.Символ12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(533,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_5 = new lib.Символ12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(486,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_6 = new lib.Символ12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(438,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_7 = new lib.Символ12();
	this.instance_7.parent = this;
	this.instance_7.setTransform(391,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_8 = new lib.Символ12();
	this.instance_8.parent = this;
	this.instance_8.setTransform(345,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_9 = new lib.Символ12();
	this.instance_9.parent = this;
	this.instance_9.setTransform(298,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_10 = new lib.Символ12();
	this.instance_10.parent = this;
	this.instance_10.setTransform(250,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_11 = new lib.Символ12();
	this.instance_11.parent = this;
	this.instance_11.setTransform(203,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_12 = new lib.Символ12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(155,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_13 = new lib.Символ12();
	this.instance_13.parent = this;
	this.instance_13.setTransform(108,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_14 = new lib.Символ12();
	this.instance_14.parent = this;
	this.instance_14.setTransform(59.9,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_15 = new lib.Символ12();
	this.instance_15.parent = this;
	this.instance_15.setTransform(12.9,12.9,0.156,0.156,0,0,0,83,83);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,736,25.8), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(628.5,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(608.3,5.6,0.067,0.067,0,0,0,82.7,83.4);

	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(587.8,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_3 = new lib.Символ12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(567.7,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_4 = new lib.Символ12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(547.2,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_5 = new lib.Символ12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(527,5.6,0.067,0.067,0,0,0,82.7,83.4);

	this.instance_6 = new lib.Символ12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(506.5,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_7 = new lib.Символ12();
	this.instance_7.parent = this;
	this.instance_7.setTransform(486.4,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_8 = new lib.Символ12();
	this.instance_8.parent = this;
	this.instance_8.setTransform(466.7,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_9 = new lib.Символ12();
	this.instance_9.parent = this;
	this.instance_9.setTransform(446.6,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_10 = new lib.Символ12();
	this.instance_10.parent = this;
	this.instance_10.setTransform(426.1,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_11 = new lib.Символ12();
	this.instance_11.parent = this;
	this.instance_11.setTransform(406,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_12 = new lib.Символ12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(385.4,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_13 = new lib.Символ12();
	this.instance_13.parent = this;
	this.instance_13.setTransform(365.3,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_14 = new lib.Символ12();
	this.instance_14.parent = this;
	this.instance_14.setTransform(344.8,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_15 = new lib.Символ12();
	this.instance_15.parent = this;
	this.instance_15.setTransform(324.6,5.6,0.067,0.067,0,0,0,82.7,83.4);

	this.instance_16 = new lib.Символ12();
	this.instance_16.parent = this;
	this.instance_16.setTransform(309.4,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_17 = new lib.Символ12();
	this.instance_17.parent = this;
	this.instance_17.setTransform(289.2,5.6,0.067,0.067,0,0,0,82.7,83.4);

	this.instance_18 = new lib.Символ12();
	this.instance_18.parent = this;
	this.instance_18.setTransform(268.7,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_19 = new lib.Символ12();
	this.instance_19.parent = this;
	this.instance_19.setTransform(248.6,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_20 = new lib.Символ12();
	this.instance_20.parent = this;
	this.instance_20.setTransform(228.1,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_21 = new lib.Символ12();
	this.instance_21.parent = this;
	this.instance_21.setTransform(207.9,5.6,0.067,0.067,0,0,0,82.7,83.4);

	this.instance_22 = new lib.Символ12();
	this.instance_22.parent = this;
	this.instance_22.setTransform(187.4,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_23 = new lib.Символ12();
	this.instance_23.parent = this;
	this.instance_23.setTransform(167.3,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_24 = new lib.Символ12();
	this.instance_24.parent = this;
	this.instance_24.setTransform(147.6,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_25 = new lib.Символ12();
	this.instance_25.parent = this;
	this.instance_25.setTransform(127.5,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_26 = new lib.Символ12();
	this.instance_26.parent = this;
	this.instance_26.setTransform(107,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_27 = new lib.Символ12();
	this.instance_27.parent = this;
	this.instance_27.setTransform(86.9,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_28 = new lib.Символ12();
	this.instance_28.parent = this;
	this.instance_28.setTransform(66.3,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_29 = new lib.Символ12();
	this.instance_29.parent = this;
	this.instance_29.setTransform(46.2,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_30 = new lib.Символ12();
	this.instance_30.parent = this;
	this.instance_30.setTransform(25.7,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_31 = new lib.Символ12();
	this.instance_31.parent = this;
	this.instance_31.setTransform(5.5,5.6,0.067,0.067,0,0,0,82.7,83.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,634,11.1), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(679.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(672.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_2 = new lib.Символ15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(662.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_3 = new lib.Символ15();
	this.instance_3.parent = this;
	this.instance_3.setTransform(655,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_4 = new lib.Символ15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(648.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_5 = new lib.Символ15();
	this.instance_5.parent = this;
	this.instance_5.setTransform(640.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_6 = new lib.Символ15();
	this.instance_6.parent = this;
	this.instance_6.setTransform(631.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_7 = new lib.Символ15();
	this.instance_7.parent = this;
	this.instance_7.setTransform(623.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_8 = new lib.Символ15();
	this.instance_8.parent = this;
	this.instance_8.setTransform(618.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_9 = new lib.Символ15();
	this.instance_9.parent = this;
	this.instance_9.setTransform(610.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_10 = new lib.Символ15();
	this.instance_10.parent = this;
	this.instance_10.setTransform(600.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_11 = new lib.Символ15();
	this.instance_11.parent = this;
	this.instance_11.setTransform(593.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_12 = new lib.Символ15();
	this.instance_12.parent = this;
	this.instance_12.setTransform(586.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_13 = new lib.Символ15();
	this.instance_13.parent = this;
	this.instance_13.setTransform(579,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_14 = new lib.Символ15();
	this.instance_14.parent = this;
	this.instance_14.setTransform(569.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_15 = new lib.Символ15();
	this.instance_15.parent = this;
	this.instance_15.setTransform(561.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_16 = new lib.Символ15();
	this.instance_16.parent = this;
	this.instance_16.setTransform(556.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_17 = new lib.Символ15();
	this.instance_17.parent = this;
	this.instance_17.setTransform(548.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_18 = new lib.Символ15();
	this.instance_18.parent = this;
	this.instance_18.setTransform(538.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_19 = new lib.Символ15();
	this.instance_19.parent = this;
	this.instance_19.setTransform(531.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_20 = new lib.Символ15();
	this.instance_20.parent = this;
	this.instance_20.setTransform(524.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_21 = new lib.Символ15();
	this.instance_21.parent = this;
	this.instance_21.setTransform(517,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_22 = new lib.Символ15();
	this.instance_22.parent = this;
	this.instance_22.setTransform(507.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_23 = new lib.Символ15();
	this.instance_23.parent = this;
	this.instance_23.setTransform(499.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_24 = new lib.Символ15();
	this.instance_24.parent = this;
	this.instance_24.setTransform(494.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_25 = new lib.Символ15();
	this.instance_25.parent = this;
	this.instance_25.setTransform(486.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_26 = new lib.Символ15();
	this.instance_26.parent = this;
	this.instance_26.setTransform(477,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_27 = new lib.Символ15();
	this.instance_27.parent = this;
	this.instance_27.setTransform(469.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_28 = new lib.Символ15();
	this.instance_28.parent = this;
	this.instance_28.setTransform(462.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_29 = new lib.Символ15();
	this.instance_29.parent = this;
	this.instance_29.setTransform(455.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_30 = new lib.Символ15();
	this.instance_30.parent = this;
	this.instance_30.setTransform(445.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_31 = new lib.Символ15();
	this.instance_31.parent = this;
	this.instance_31.setTransform(437.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_32 = new lib.Символ15();
	this.instance_32.parent = this;
	this.instance_32.setTransform(432.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_33 = new lib.Символ15();
	this.instance_33.parent = this;
	this.instance_33.setTransform(424.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_34 = new lib.Символ15();
	this.instance_34.parent = this;
	this.instance_34.setTransform(415,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_35 = new lib.Символ15();
	this.instance_35.parent = this;
	this.instance_35.setTransform(407.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_36 = new lib.Символ15();
	this.instance_36.parent = this;
	this.instance_36.setTransform(400.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_37 = new lib.Символ15();
	this.instance_37.parent = this;
	this.instance_37.setTransform(393.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_38 = new lib.Символ15();
	this.instance_38.parent = this;
	this.instance_38.setTransform(383.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_39 = new lib.Символ15();
	this.instance_39.parent = this;
	this.instance_39.setTransform(375.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_40 = new lib.Символ15();
	this.instance_40.parent = this;
	this.instance_40.setTransform(370.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_41 = new lib.Символ15();
	this.instance_41.parent = this;
	this.instance_41.setTransform(362.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_42 = new lib.Символ15();
	this.instance_42.parent = this;
	this.instance_42.setTransform(353.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_43 = new lib.Символ15();
	this.instance_43.parent = this;
	this.instance_43.setTransform(345.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_44 = new lib.Символ15();
	this.instance_44.parent = this;
	this.instance_44.setTransform(338.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_45 = new lib.Символ15();
	this.instance_45.parent = this;
	this.instance_45.setTransform(331.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_46 = new lib.Символ15();
	this.instance_46.parent = this;
	this.instance_46.setTransform(321.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_47 = new lib.Символ15();
	this.instance_47.parent = this;
	this.instance_47.setTransform(314.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_48 = new lib.Символ15();
	this.instance_48.parent = this;
	this.instance_48.setTransform(308.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_49 = new lib.Символ15();
	this.instance_49.parent = this;
	this.instance_49.setTransform(300.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_50 = new lib.Символ15();
	this.instance_50.parent = this;
	this.instance_50.setTransform(291.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_51 = new lib.Символ15();
	this.instance_51.parent = this;
	this.instance_51.setTransform(283.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_52 = new lib.Символ15();
	this.instance_52.parent = this;
	this.instance_52.setTransform(276.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_53 = new lib.Символ15();
	this.instance_53.parent = this;
	this.instance_53.setTransform(269.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_54 = new lib.Символ15();
	this.instance_54.parent = this;
	this.instance_54.setTransform(259.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_55 = new lib.Символ15();
	this.instance_55.parent = this;
	this.instance_55.setTransform(252.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_56 = new lib.Символ15();
	this.instance_56.parent = this;
	this.instance_56.setTransform(243.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_57 = new lib.Символ15();
	this.instance_57.parent = this;
	this.instance_57.setTransform(235.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_58 = new lib.Символ15();
	this.instance_58.parent = this;
	this.instance_58.setTransform(226.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_59 = new lib.Символ15();
	this.instance_59.parent = this;
	this.instance_59.setTransform(218.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_60 = new lib.Символ15();
	this.instance_60.parent = this;
	this.instance_60.setTransform(212,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_61 = new lib.Символ15();
	this.instance_61.parent = this;
	this.instance_61.setTransform(204.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_62 = new lib.Символ15();
	this.instance_62.parent = this;
	this.instance_62.setTransform(194.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_63 = new lib.Символ15();
	this.instance_63.parent = this;
	this.instance_63.setTransform(187.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_64 = new lib.Символ15();
	this.instance_64.parent = this;
	this.instance_64.setTransform(181.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_65 = new lib.Символ15();
	this.instance_65.parent = this;
	this.instance_65.setTransform(173.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_66 = new lib.Символ15();
	this.instance_66.parent = this;
	this.instance_66.setTransform(164.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_67 = new lib.Символ15();
	this.instance_67.parent = this;
	this.instance_67.setTransform(156.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_68 = new lib.Символ15();
	this.instance_68.parent = this;
	this.instance_68.setTransform(150,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_69 = new lib.Символ15();
	this.instance_69.parent = this;
	this.instance_69.setTransform(142.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_70 = new lib.Символ15();
	this.instance_70.parent = this;
	this.instance_70.setTransform(132.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_71 = new lib.Символ15();
	this.instance_71.parent = this;
	this.instance_71.setTransform(125.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_72 = new lib.Символ15();
	this.instance_72.parent = this;
	this.instance_72.setTransform(119.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_73 = new lib.Символ15();
	this.instance_73.parent = this;
	this.instance_73.setTransform(112.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_74 = new lib.Символ15();
	this.instance_74.parent = this;
	this.instance_74.setTransform(102.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_75 = new lib.Символ15();
	this.instance_75.parent = this;
	this.instance_75.setTransform(95,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_76 = new lib.Символ15();
	this.instance_76.parent = this;
	this.instance_76.setTransform(88.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_77 = new lib.Символ15();
	this.instance_77.parent = this;
	this.instance_77.setTransform(80.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_78 = new lib.Символ15();
	this.instance_78.parent = this;
	this.instance_78.setTransform(71.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_79 = new lib.Символ15();
	this.instance_79.parent = this;
	this.instance_79.setTransform(63.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_80 = new lib.Символ15();
	this.instance_80.parent = this;
	this.instance_80.setTransform(57.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_81 = new lib.Символ15();
	this.instance_81.parent = this;
	this.instance_81.setTransform(50.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_82 = new lib.Символ15();
	this.instance_82.parent = this;
	this.instance_82.setTransform(40.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_83 = new lib.Символ15();
	this.instance_83.parent = this;
	this.instance_83.setTransform(33,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_84 = new lib.Символ15();
	this.instance_84.parent = this;
	this.instance_84.setTransform(26.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_85 = new lib.Символ15();
	this.instance_85.parent = this;
	this.instance_85.setTransform(18.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_86 = new lib.Символ15();
	this.instance_86.parent = this;
	this.instance_86.setTransform(9.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_87 = new lib.Символ15();
	this.instance_87.parent = this;
	this.instance_87.setTransform(1.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,681.3,2.9), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(908.1,43,1,1,0,0,0,367.9,12.9);

	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(857.1,13.4,1,1,0,0,0,316.9,5.5);

	this.instance_2 = new lib.Символ16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(894.9,1.4,1,1,0,0,0,340.6,1.4);

	this.instance_3 = new lib.Символ15();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1576.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_4 = new lib.Символ15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1569.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_5 = new lib.Символ15();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1559.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(540.2,0,1038,55.9), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(-432.2,41,1,1,0,0,0,83,83);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(350,200,1,1,0,0,0,350,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,-42,1063,442.1), null);


// stage content:
(lib.lavina600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//----------------
		
		this.pric.alpha=0;
		
		
		this.cursor = "none";
		this.pric.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pric.x = stage.mouseX/window.devicePixelRatio;
			this.pric.y = stage.mouseY/window.devicePixelRatio;
			this.hands.x = stage.mouseX/window.devicePixelRatio;
		}
		
		
		
		
		
		//---------------
		
		stage.canvas.addEventListener("mouseover", fl_Clickover3.bind(this));
		
		function fl_Clickover3()
		{
		
			this.pric.alpha=1;
			this.lovi.gotoAndPlay(2);
			this.hands.gotoAndPlay(2);
		
			
		
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout3.bind(this));
		
		function fl_Clickout3()
		{
		
			this.pric.alpha=0;
			this.lovi.gotoAndPlay(16);
			this.hands.gotoAndPlay(16);
		
		
		
		}
		
		
		
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 22/window.devicePixelRatio;
		this.fon.y = - stage.mouseY / 22/window.devicePixelRatio;
		}
		
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// preztek
	this.lovi = new lib.Символ62();
	this.lovi.parent = this;
	this.lovi.setTransform(-495.2,185.2,1,1,0,0,0,69.2,55.1);

	this.timeline.addTween(cjs.Tween.get(this.lovi).wait(1));

	// pric
	this.pric = new lib.Символ48();
	this.pric.parent = this;
	this.pric.setTransform(264.6,659.7,0.456,0.456,0,0,0,-1.2,1.1);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// 2000
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(319,296.1,0.812,0.812,0,0,0,209,57.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logo
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.9,38.9,0.6,0.6,0,0,0,67.6,49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// goat
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(154.6,497.5,1,1,0,0,0,133.5,124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// devices
	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(340.5,162.1,0.776,0.776,0,0,0,157.5,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// other
	this.instance_4 = new lib.Символ4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(702.5,135.1,1,1,0,0,0,176.5,92);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// hand
	this.hands = new lib.Символ3();
	this.hands.parent = this;
	this.hands.setTransform(310.1,352.7,1,1,0,0,0,544.1,234.6);

	this.timeline.addTween(cjs.Tween.get(this.hands).wait(1));

	// tek
	this.instance_5 = new lib.Символ2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(336.3,45.5,0.906,0.906,0,0,0,247,30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// back
	this.fon = new lib.Символ7();
	this.fon.parent = this;
	this.fon.setTransform(-32.9,-31,1,1,0,0,0,21.9,25);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(202.4,52,1105.8,787);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1479811828011", id:"back"},
		{src:"images/blink.png?1479811828011", id:"blink"},
		{src:"images/book.png?1479811828011", id:"book"},
		{src:"images/chip.png?1479811828011", id:"chip"},
		{src:"images/goat.png?1479811828011", id:"goat"},
		{src:"images/goat2.png?1479811828011", id:"goat2"},
		{src:"images/han1.png?1479811828011", id:"han1"},
		{src:"images/han2.png?1479811828011", id:"han2"},
		{src:"images/helio.png?1479811828011", id:"helio"},
		{src:"images/imac.png?1479811828011", id:"imac"},
		{src:"images/iph.png?1479811828011", id:"iph"},
		{src:"images/logo.png?1479811828011", id:"logo"},
		{src:"images/more.png?1479811828011", id:"more"},
		{src:"images/pod.png?1479811828011", id:"pod"},
		{src:"images/priz.png?1479811828011", id:"priz"},
		{src:"images/rou.png?1479811828011", id:"rou"},
		{src:"images/snowman.png?1479811828011", id:"snowman"},
		{src:"images/tek.png?1479811828011", id:"tek"},
		{src:"images/twoth.png?1479811828011", id:"twoth"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;