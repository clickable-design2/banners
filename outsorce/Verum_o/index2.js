(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,324);


(lib.baks = function() {
	this.initialize(img.baks);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,41);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,129);


(lib.bodypngcopy = function() {
	this.initialize(img.bodypngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,112);


(lib.buttonniz = function() {
	this.initialize(img.buttonniz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,229,64);


(lib.Button_g = function() {
	this.initialize(img.Button_g);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,76);


(lib.Button_r = function() {
	this.initialize(img.Button_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,75);


(lib.graf = function() {
	this.initialize(img.graf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,347,73);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,61);


(lib.handpngcopy = function() {
	this.initialize(img.handpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,78);


(lib.hand2 = function() {
	this.initialize(img.hand2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,69);


(lib.leg = function() {
	this.initialize(img.leg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,37);


(lib.lesnica = function() {
	this.initialize(img.lesnica);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,198);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,86);


(lib.setka = function() {
	this.initialize(img.setka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,341,269);// helper functions:

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


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.baks();
	this.instance.parent = this;
	this.instance.setTransform(23.6,-22,2.782,2.922,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-12.9,-22,126.6,143), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Button_g();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,106,76), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Button_g();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.073,1.073);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,113.7,81.5), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.buttonniz();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,229,64), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,360,324), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSAYIAJgvIAaAAIACACQgFAUgMAZg");
	this.shape.setTransform(236.4,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAkBGIgLghIgxAAIgLAhIgfAAIAxiLIAjAAIAyCLgAASAMIgPgyIgDgKIgRA8IAjAAg");
	this.shape_1.setTransform(227.2,15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgvBGIAAiLIAtAAQAYAAANALQANALAAAWQAAAWgOAMQgOALgZAAIgNAAIAAAygAgSgDIAKAAQANAAAGgFQAIgGgBgKQABgKgHgGQgFgEgLAAIgOAAg");
	this.shape_2.setTransform(214.7,16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAkBGIgKghIgyAAIgKAhIghAAIAyiLIAjAAIAxCLgAATAMIgRgyIgCgKIgRA8IAkAAg");
	this.shape_3.setTransform(201.4,15.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag+BFIAAgYQAFABAFAAQAFAAADgEQADgFACgMIAHgpIAIg2IBYAAIAACLIgeAAIAAhyIgiAAIgBAMQgGAwgFAVQgEATgJAIQgIAIgQAAQgHAAgGgCg");
	this.shape_4.setTransform(186.5,16.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag/BFIAAgYQAGABAFAAQAFAAADgEQADgFACgMIAIgpIAHg2IBYAAIAACLIgeAAIAAhyIgiAAIgBAMQgGAwgFAVQgEATgJAIQgJAIgPAAQgIAAgGgCg");
	this.shape_5.setTransform(171.9,16.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgwA2QgSgUABgiQgBgjASgRQARgTAfAAQAgAAASATQARASAAAiQAAAigRAUQgSASggAAQgfAAgRgSgAgagiQgIALgBAXQABAXAIAMQAJAMARAAQAjAAAAgvQAAgugjgBQgRAAgJANg");
	this.shape_6.setTransform(157.7,16);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAsBbIAAgqIhXAAIAAAqIgdAAIAAhCIALAAQAOgbAIgcQAIgbAEghIBQAAIAABzIATAAIAABCgAgOgTQgHAYgIAUIA1AAIAAhaIgbAAQgEAWgHAYg");
	this.shape_7.setTransform(142.3,18);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAFBGIAAhQIAAgNIABgPIgJAKIgQANIgPgSIAsgkIAZAAIAACLg");
	this.shape_8.setTransform(123.3,16);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgOBGIAAhyIgmAAIAAgZIBpAAIAAAZIgmAAIAAByg");
	this.shape_9.setTransform(108,16);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgwA2QgSgUABgiQgBgjASgRQARgTAfAAQAgAAASATQAQASAAAiQAAAigQAUQgSASggAAQgfAAgRgSgAgagiQgJALAAAXQAAAXAJAMQAJAMARAAQAjAAAAgvQAAgugjgBQgRAAgJANg");
	this.shape_10.setTransform(94.6,16);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAlBGIAAhDIABgnIAAAAIhABqIgkAAIAAiLIAbAAIAABDIAAARIgBAWIAAAAIBAhqIAjAAIAACLg");
	this.shape_11.setTransform(73.7,16);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAYBGIgyhGIAABGIgeAAIAAiLIAeAAIAABEIAxhEIAfAAIgzBDIA2BIg");
	this.shape_12.setTransform(59.9,16);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgzBGIAAiLIArAAQAeAAANAJQAOAIAAATQAAAMgHAIQgFAIgKABIAAABQANADAGAIQAGAIAAANQAAAUgOAKQgOALgYAAgAgVAuIATAAQALgBAGgEQAGgFAAgJQAAgSgYAAIgSAAgAgVgOIARAAQALAAAGgDQAFgEAAgJQAAgHgGgEQgGgEgLABIgQAAg");
	this.shape_13.setTransform(46.3,16);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAkBGIgLghIgyAAIgKAhIgfAAIAxiLIAjAAIAyCLgAASAMIgQgyIgCgKIgRA8IAjAAg");
	this.shape_14.setTransform(32.6,15.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgOBGIAAhyIgmAAIAAgZIBpAAIAAAZIgmAAIAAByg");
	this.shape_15.setTransform(20.1,16);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgkA2QgQgTAAgjQAAgUAIgRQAIgQAOgJQAPgJATAAQAVAAAUAKIgJAYIgQgGQgIgDgIAAQgPAAgKANQgJAMAAAWQAAAuAiAAQAPAAAVgHIAAAZQgRAHgVAAQgeAAgQgSg");
	this.shape_16.setTransform(8.5,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,241.8,30.7), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgzBGIAAiLIArAAQAdAAAOAJQANAIAAATQAAAMgFAIQgHAIgJABIAAABQANADAGAIQAGAIAAANQAAAUgOAKQgOALgYAAgAgVAuIATAAQAMgBAFgEQAGgFAAgJQAAgSgYAAIgSAAgAgVgOIARAAQALAAAFgDQAGgEAAgJQAAgHgGgEQgGgEgMABIgPAAg");
	this.shape.setTransform(268.3,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOBGIAAhyIgmAAIAAgZIBpAAIAAAZIgmAAIAAByg");
	this.shape_1.setTransform(255.6,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkA2QgQgTAAgjQAAgUAIgRQAIgQAOgJQAPgJATAAQAVAAAUAKIgJAYIgQgGQgIgDgIAAQgPAAgKANQgJAMAAAWQAAAuAiAAQAPAAAVgHIAAAZQgRAHgVAAQgeAAgQgSg");
	this.shape_2.setTransform(244,16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAsBbIAAgqIhXAAIAAAqIgcAAIAAhCIAKAAQAOgbAIgcQAIgbAEghIBRAAIAABzIASAAIAABCgAgOgTQgHAYgIAUIA1AAIAAhaIgcAAQgCAWgIAYg");
	this.shape_3.setTransform(229.9,18);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnBGIAAiLIBPAAIAAAZIgxAAIAAAeIAuAAIAAAYIguAAIAAAkIAxAAIAAAYg");
	this.shape_4.setTransform(217.4,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgvBGIAAiLIAtAAQAYAAANALQAOALAAAWQAAAWgPAMQgOALgZAAIgNAAIAAAygAgSgDIAKAAQAMAAAIgFQAGgGAAgKQAAgKgFgGQgGgEgLAAIgOAAg");
	this.shape_5.setTransform(205.9,16);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgkA2QgQgTAAgjQAAgUAIgRQAIgQAOgJQAPgJATAAQAVAAAUAKIgJAYIgQgGQgIgDgIAAQgPAAgKANQgJAMAAAWQAAAuAiAAQAPAAAVgHIAAAZQgRAHgVAAQgeAAgQgSg");
	this.shape_6.setTransform(193.3,16);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAsBbIAAgqIhXAAIAAAqIgdAAIAAhCIALAAQAOgbAIgcQAIgbAEghIBRAAIAABzIASAAIAABCgAgOgTQgHAYgIAUIA1AAIAAhaIgbAAQgEAWgHAYg");
	this.shape_7.setTransform(174.2,18);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgwA2QgRgUAAgiQAAgjARgRQARgTAfAAQAhAAARATQARASAAAiQAAAigRAUQgSASggAAQgfAAgRgSgAgagiQgIALgBAXQABAXAIAMQAJAMARAAQAjAAAAgvQAAgugjgBQgRAAgJANg");
	this.shape_8.setTransform(159.1,16);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgzBGIAAiLIAsAAQAcAAAOAJQANAIAAATQABAMgHAIQgFAIgKABIAAABQANADAGAIQAGAIAAANQAAAUgOAKQgOALgXAAgAgVAuIATAAQALgBAGgEQAGgFAAgJQAAgSgYAAIgSAAgAgVgOIARAAQALAAAFgDQAGgEAAgJQAAgHgGgEQgGgEgMABIgPAAg");
	this.shape_9.setTransform(145.1,16);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAqBGIAAiLIAdAAIAACLgAhGBGIAAiLIAeAAIAAA2IAJAAQAbAAAOALQAPAKAAAVQAAAVgPALQgNALgdAAgAgoAuIAHAAQAPgBAHgEQAHgFAAgJQAAgLgHgEQgHgEgQAAIgGAAg");
	this.shape_10.setTransform(129.3,16);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgzBGIAAiLIArAAQAeAAANAJQAOAIAAATQAAAMgHAIQgFAIgKABIAAABQANADAGAIQAGAIAAANQAAAUgOAKQgOALgYAAgAgVAuIATAAQALgBAGgEQAGgFAAgJQAAgSgYAAIgSAAgAgVgOIARAAQALAAAGgDQAFgEAAgJQAAgHgGgEQgGgEgLABIgQAAg");
	this.shape_11.setTransform(114.2,16);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAlBdIAAhDIACgnIgBAAIhABqIgkAAIAAiLIAbAAIAABCIAAASIgCAVIABAAIBAhpIAjAAIAACLgAghhBQgLgIgCgTIAaAAQACAKAEAEQAEAEAKAAQAKAAAEgEQAFgFABgJIAbAAQgCASgMAJQgMAIgVAAQgXAAgKgIg");
	this.shape_12.setTransform(94.2,13.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAqBGIAAiLIAdAAIAACLgAhGBGIAAiLIAeAAIAAA2IAJAAQAbAAAOALQAPAKAAAVQAAAVgPALQgNALgdAAgAgoAuIAHAAQAPgBAHgEQAHgFAAgJQAAgLgHgEQgHgEgQAAIgGAAg");
	this.shape_13.setTransform(77.2,16);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgwBGIAAiLIAtAAQAZAAANALQANALABAWQAAAWgPAMQgOALgZAAIgMAAIAAAygAgRgDIAJAAQAMAAAIgFQAGgGABgKQgBgKgFgGQgGgEgLAAIgNAAg");
	this.shape_14.setTransform(62.7,16);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgOBGIAAhyIgmAAIAAgZIBpAAIAAAZIgmAAIAAByg");
	this.shape_15.setTransform(50.4,16);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgkA2QgQgTAAgjQAAgUAIgRQAIgQAOgJQAPgJATAAQAVAAAUAKIgJAYIgQgGQgIgDgIAAQgPAAgKANQgJAMAAAWQAAAuAiAAQAPAAAVgHIAAAZQgRAHgVAAQgeAAgQgSg");
	this.shape_16.setTransform(38.7,16);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAqBGIAAiLIAdAAIAACLgAhGBGIAAiLIAeAAIAAA2IAJAAQAbAAAOALQAPAKAAAVQAAAVgPALQgNALgdAAgAgoAuIAHAAQAPgBAHgEQAHgFAAgJQAAgLgHgEQgHgEgQAAIgGAAg");
	this.shape_17.setTransform(23.4,16);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgwBGIAAiLIBXAAIAAAZIg5AAIAAAdIALAAQAbAAAPALQAOAKAAAVQAAArg4AAgAgSAuIAJAAQAPgBAGgEQAHgFAAgJQAAgLgHgEQgHgEgQAAIgHAAg");
	this.shape_18.setTransform(8.7,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,276.7,30.7), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAMIAAgXIAyAAIAAAXg");
	this.shape.setTransform(149.6,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAMIAAgXIAzAAIAAAXg");
	this.shape_1.setTransform(143.3,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLBDQgFgEAAgIQAAgIAFgEQAEgEAHAAQAIAAAFAEQAEAEAAAIQAAAIgEAEQgFAEgIAAQgHAAgEgEgAgKAWIgFhcIAgAAIgFBcg");
	this.shape_2.setTransform(334.7,16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAlBdIAAhDIABgnIAAAAIhABqIgkAAIAAiLIAbAAIAABCIAAASIgBAVIAAAAIBAhpIAjAAIAACLgAghhBQgLgIgBgTIAaAAQABAKADAEQAFAEAKAAQAKAAAEgEQAFgFABgJIAaAAQgBASgMAJQgMAIgVAAQgXAAgKgIg");
	this.shape_3.setTransform(323.9,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAkBGIgLghIgxAAIgLAhIgfAAIAxiLIAjAAIAyCLgAASAMIgPgyIgDgKIgRA8IAjAAg");
	this.shape_4.setTransform(309.1,15.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgzBGIAAiLIAsAAQAdAAANAJQAOAIAAATQAAAMgHAIQgFAIgKABIAAABQANADAGAIQAGAIAAANQAAAUgOAKQgOALgXAAgAgVAuIATAAQALgBAGgEQAGgFAAgJQAAgSgYAAIgSAAgAgVgOIARAAQALAAAGgDQAFgEAAgJQAAgHgGgEQgGgEgLABIgQAAg");
	this.shape_5.setTransform(296.1,16);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAqBGIAAiLIAdAAIAACLgAhGBGIAAiLIAeAAIAAA2IAJAAQAbAAAOALQAPAKAAAVQAAAVgPALQgNALgdAAgAgoAuIAHAAQAPgBAHgEQAHgFAAgJQAAgLgHgEQgHgEgQAAIgGAAg");
	this.shape_6.setTransform(280.3,16);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOBGIAAhyIgmAAIAAgZIBpAAIAAAZIgmAAIAAByg");
	this.shape_7.setTransform(265.7,16);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAkBGIgKghIgzAAIgKAhIggAAIAyiLIAjAAIAxCLgAASAMIgQgyIgCgKIgRA8IAjAAg");
	this.shape_8.setTransform(253.3,15.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgwBGIAAiLIBXAAIAAAZIg5AAIAAAdIALAAQAbAAAPALQAOAKAAAVQAAArg4AAgAgSAuIAJAAQAPgBAGgEQAHgFAAgJQAAgLgHgEQgHgEgQAAIgHAAg");
	this.shape_9.setTransform(240.7,16);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAkBGIgKghIgzAAIgKAhIgfAAIAxiLIAjAAIAyCLgAASAMIgQgyIgCgKIgRA8IAjAAg");
	this.shape_10.setTransform(227.3,15.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgwBGIAAiLIAtAAQAZAAANALQANALAAAWQAAAWgOAMQgOALgZAAIgMAAIAAAygAgRgDIAJAAQAMAAAIgFQAHgGAAgKQAAgKgHgGQgFgEgLAAIgNAAg");
	this.shape_11.setTransform(214.9,16);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAkBGIgLghIgxAAIgLAhIgfAAIAxiLIAjAAIAyCLgAASAMIgPgyIgDgKIgRA8IAjAAg");
	this.shape_12.setTransform(201.5,15.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag1BBIAAgaQAJAFANADQAMABAKAAQAiABAAgVQAAgJgLgFQgLgFgVAAIgOAAIAAgXIAMAAQAVAAALgDQAKgFAAgKQAAgGgHgFQgGgEgMAAQgTAAgTALIgNgUQAMgHAOgEQANgEAPAAQAXAAAOAKQAOAJAAAQQAAANgKAJQgKAJgQACIAAABQATACALAIQAKAIAAAOQAAAUgQAKQgPAMgbAAQgfAAgTgHg");
	this.shape_13.setTransform(188.5,16);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAkBGIAAhDIADgnIgCAAIg/BqIgkAAIAAiLIAbAAIAABDIgBARIgBAWIABAAIA/hqIAkAAIAACLg");
	this.shape_14.setTransform(169,16);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAMIAAgXIAyAAIAAAXg");
	this.shape_15.setTransform(152.8,17.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgYAMIAAgXIAyAAIAAAXg");
	this.shape_16.setTransform(146.5,17.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYAMIAAgXIAyAAIAAAXg");
	this.shape_17.setTransform(140.2,17.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgOBGIAAhyIgmAAIAAgZIBpAAIAAAZIgmAAIAAByg");
	this.shape_18.setTransform(126.3,16);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgnBGIAAiLIBPAAIAAAZIgxAAIAAAeIAuAAIAAAYIguAAIAAAkIAxAAIAAAYg");
	this.shape_19.setTransform(115.4,16);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AArBbIAAgqIhWAAIAAAqIgdAAIAAhCIAMAAQANgbAIgcQAIgbAEghIBQAAIAABzIATAAIAABCgAgNgTQgIAYgIAUIA1AAIAAhaIgbAAQgEAWgGAYg");
	this.shape_20.setTransform(102.1,18);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAkBGIgKghIgyAAIgKAhIghAAIAyiLIAjAAIAxCLgAATAMIgRgyIgCgKIgRA8IAkAAg");
	this.shape_21.setTransform(88,15.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAaBGIAAhyIgyAAIAAByIgfAAIAAiLIBvAAIAACLg");
	this.shape_22.setTransform(73.9,16);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ag4BEIAAgZQAIADANAAQAHAAAFgDQAFgFADgJIgwhjIAfAAIAiBNIABAAIABgFIAehIIAeAAIgsBiQgHATgHAIQgHAIgJAEQgKAEgOAAQgMAAgKgDg");
	this.shape_23.setTransform(60.3,16.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAkBGIAAhDIADgnIgCAAIg/BqIgkAAIAAiLIAbAAIAABDIgBARIgBAWIABAAIA/hqIAkAAIAACLg");
	this.shape_24.setTransform(40.8,16);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag+BFIAAgYQAFABAFAAQAFAAADgEQADgFACgMIAHgpIAIg2IBYAAIAACLIgeAAIAAhyIgiAAIgBAMQgGAwgFAVQgEATgJAIQgJAIgPAAQgHAAgGgCg");
	this.shape_25.setTransform(24.6,16.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAkBGIAAhDIACgnIgBAAIg/BqIgkAAIAAiLIAbAAIAABDIgBARIgBAWIABAAIA/hqIAkAAIAACLg");
	this.shape_26.setTransform(10.1,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,339.7,31), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgvBGIAAiLIAtAAQAYAAANALQAOALAAAWQAAAWgPAMQgOALgZAAIgNAAIAAAygAgSgDIAKAAQAMAAAIgFQAGgGAAgKQAAgKgFgGQgGgEgLAAIgOAAg");
	this.shape.setTransform(313,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAkBGIgKghIgzAAIgJAhIghAAIAyiLIAjAAIAxCLgAATAMIgRgyIgCgKIgRA8IAkAAg");
	this.shape_1.setTransform(299.7,15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag+BFIAAgYQAFABAFAAQAFAAADgEQADgFADgMIAGgpIAIg2IBXAAIAACLIgdAAIAAhyIgiAAIgBAMQgGAwgEAVQgFATgJAIQgIAIgQAAQgIAAgFgCg");
	this.shape_2.setTransform(284.8,16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag+BFIAAgYQAFABAFAAQAFAAADgEQADgFACgMIAHgpIAIg2IBYAAIAACLIgeAAIAAhyIgiAAIgBAMQgGAwgFAVQgEATgJAIQgIAIgQAAQgHAAgGgCg");
	this.shape_3.setTransform(270.2,16.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgwA2QgRgUAAgiQAAgjARgRQARgTAfAAQAgAAASATQAQASABAiQgBAigQAUQgSASggAAQgfAAgRgSgAgagiQgIALgBAXQABAXAIAMQAKAMAQAAQAkAAgBgvQAAgugjgBQgQAAgKANg");
	this.shape_4.setTransform(256,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AArBbIAAgqIhWAAIAAAqIgdAAIAAhCIALAAQAOgbAIgcQAIgbAEghIBQAAIAABzIATAAIAABCgAgNgTQgHAYgJAUIA1AAIAAhaIgbAAQgDAWgHAYg");
	this.shape_5.setTransform(240.6,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgOBGIAAhyIgmAAIAAgZIBpAAIAAAZIgmAAIAAByg");
	this.shape_6.setTransform(222.5,16);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgnBGIAAiLIBPAAIAAAZIgxAAIAAAeIAuAAIAAAYIguAAIAAAkIAxAAIAAAYg");
	this.shape_7.setTransform(211.6,16);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOBGIAAhyIgmAAIAAgZIBpAAIAAAZIgmAAIAAByg");
	this.shape_8.setTransform(200.2,16);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkA2QgQgTAAgjQAAgUAIgRQAIgQAOgJQAPgJATAAQAVAAAUAKIgJAYIgQgGQgIgDgIAAQgPAAgKANQgJAMAAAWQAAAuAiAAQAPAAAVgHIAAAZQgRAHgVAAQgeAAgQgSg");
	this.shape_9.setTransform(188.5,16);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAkBGIgLghIgyAAIgKAhIgfAAIAxiLIAjAAIAyCLgAASAMIgPgyIgDgKIgRA8IAjAAg");
	this.shape_10.setTransform(175.3,15.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgvBGIAAiLIAtAAQAYAAANALQANALAAAWQAAAWgOAMQgOALgZAAIgMAAIAAAygAgRgDIAJAAQANAAAGgFQAIgGgBgKQABgKgHgGQgFgEgLAAIgNAAg");
	this.shape_11.setTransform(162.9,16);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAqBGIAAiLIAdAAIAACLgAhGBGIAAiLIAeAAIAAA2IAJAAQAbAAAOALQAPAKAAAVQAAAVgPALQgNALgdAAgAgoAuIAHAAQAPgBAHgEQAHgFAAgJQAAgLgHgEQgHgEgQAAIgGAAg");
	this.shape_12.setTransform(147.4,16);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgzBGIAAiLIAsAAQAdAAANAJQAOAIAAATQAAAMgHAIQgFAIgKABIAAABQANADAGAIQAGAIAAANQAAAUgOAKQgOALgXAAgAgVAuIATAAQALgBAGgEQAGgFAAgJQAAgSgYAAIgSAAgAgVgOIARAAQALAAAGgDQAFgEAAgJQAAgHgGgEQgGgEgLABIgQAAg");
	this.shape_13.setTransform(132.3,16);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgSAYIAJgvIAaAAIACACQgFAUgMAZg");
	this.shape_14.setTransform(117.2,23.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAlBdIAAhDIABgnIgBAAIg/BqIgkAAIAAiLIAbAAIAABCIAAASIgBAVIAAAAIA/hpIAkAAIAACLgAghhBQgLgIgBgTIAaAAQABAKADAEQAFAEAKAAQAJAAAGgEQAEgFABgJIAaAAQgBASgMAJQgLAIgWAAQgXAAgKgIg");
	this.shape_15.setTransform(106.6,13.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAkBGIgLghIgxAAIgKAhIghAAIAyiLIAjAAIAxCLgAATAMIgQgyIgDgKIgRA8IAkAAg");
	this.shape_16.setTransform(91.8,15.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgzBGIAAiLIAsAAQAcAAAOAJQANAIAAATQABAMgHAIQgFAIgKABIAAABQANADAGAIQAGAIAAANQAAAUgOAKQgOALgXAAgAgVAuIATAAQALgBAGgEQAGgFAAgJQAAgSgYAAIgSAAgAgVgOIARAAQALAAAFgDQAGgEAAgJQAAgHgGgEQgGgEgLABIgQAAg");
	this.shape_17.setTransform(78.9,16);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAqBGIAAiLIAdAAIAACLgAhGBGIAAiLIAeAAIAAA2IAJAAQAbAAAOALQAPAKAAAVQAAAVgPALQgNALgdAAgAgoAuIAHAAQAPgBAHgEQAHgFAAgJQAAgLgHgEQgHgEgQAAIgGAAg");
	this.shape_18.setTransform(63,16);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAsBbIAAgqIhXAAIAAAqIgcAAIAAhCIALAAQANgbAIgcQAIgbAEghIBRAAIAABzIATAAIAABCgAgOgTQgGAYgKAUIA2AAIAAhaIgcAAQgCAWgIAYg");
	this.shape_19.setTransform(46.6,18);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAkBGIgKghIgzAAIgKAhIgfAAIAxiLIAjAAIAyCLgAASAMIgQgyIgCgKIgRA8IAjAAg");
	this.shape_20.setTransform(32.5,15.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgrBGIAAiLIBXAAIAAAZIg5AAIAAByg");
	this.shape_21.setTransform(20.9,16);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag5BEIAAgZQAJADANAAQAHAAAFgDQAFgFADgJIgwhjIAfAAIAiBNIABAAIABgFIAehIIAeAAIgsBiQgHATgIAIQgGAIgJAEQgKAEgOAAQgMAAgLgDg");
	this.shape_22.setTransform(8.4,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,326,30.7), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.handpngcopy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,30,78), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,47,37), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bodypngcopy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,69,112), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLBDQgFgEAAgIQAAgIAFgEQAEgEAHAAQAIAAAFAEQAEAEAAAIQAAAIgEAEQgFAEgIAAQgHAAgEgEgAgKAWIgFhcIAgAAIgFBcg");
	this.shape.setTransform(289.4,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAYBGIg7hpIgBAAIACAnIAABCIgbAAIAAiLIAmAAIA8BoIAAAAIgBgmIAAhCIAaAAIAACLg");
	this.shape_1.setTransform(278.7,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgwA2QgSgUABgiQgBgjASgRQARgTAfAAQAgAAASATQARASAAAiQAAAigRAUQgSASggAAQgfAAgRgSgAgagiQgIALgBAXQABAXAIAMQAJAMARAAQAjAAAAgvQAAgugjgBQgRAAgJANg");
	this.shape_2.setTransform(263,16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOBGIAAiLIAdAAIAACLg");
	this.shape_3.setTransform(252,16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgOBGIAAhyIgmAAIAAgZIBpAAIAAAZIgmAAIAAByg");
	this.shape_4.setTransform(243,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgvBGIAAiLIAtAAQAYAAANALQAOALAAAWQAAAWgPAMQgOALgZAAIgNAAIAAAygAgSgDIAKAAQAMAAAIgFQAGgGAAgKQAAgKgFgGQgGgEgLAAIgOAAg");
	this.shape_5.setTransform(231.7,16);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgxA2QgQgUAAgiQAAgjAQgRQASgTAfAAQAhAAAQATQASASgBAiQABAigSAUQgRASggAAQgfAAgSgSgAgagiQgJALAAAXQAAAXAJAMQAKAMAQAAQAkAAAAgvQAAgugkgBQgQAAgKANg");
	this.shape_6.setTransform(217.3,16);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAvBGIAAhCIAAgKIACghIgBAAIgkBtIgaAAIgihtIgBAAIACAsIAABBIgbAAIAAiLIApAAIAhBqIAAAAIAjhqIAoAAIAACLg");
	this.shape_7.setTransform(195.2,16);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgqA5QgOgNAAgZIAAhZIAdAAIAABUQAAARAHAHQAGAIAOAAQAPAAAGgIQAHgHAAgRIAAhUIAdAAIAABaQAAAPgGAMQgIALgNAHQgNAGgRAAQgbAAgPgOg");
	this.shape_8.setTransform(178.6,16.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAXBGIggg1IgQAAIAAA1IgeAAIAAiLIApAAQAcAAANAKQAOALAAAVQAAANgHAJQgHAIgMAGIApA9gAgZgHIAJAAQAPAAAFgFQAHgEAAgKQAAgKgHgFQgGgDgOAAIgJAAg");
	this.shape_9.setTransform(165.7,16);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgnBGIAAiLIBPAAIAAAZIgxAAIAAAeIAuAAIAAAYIguAAIAAAkIAxAAIAAAYg");
	this.shape_10.setTransform(153.1,16);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgPBGIgwiLIAeAAIAbBSIAEARIACAOIAHgfIAbhSIAeAAIgwCLg");
	this.shape_11.setTransform(141,16);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgkA2QgQgTAAgjQAAgUAIgRQAIgQAOgJQAPgJATAAQAVAAAUAKIgJAYIgQgGQgIgDgIAAQgPAAgKANQgJAMAAAWQAAAuAiAAQAPAAAVgHIAAAZQgRAHgVAAQgeAAgQgSg");
	this.shape_12.setTransform(123.6,16);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgxA2QgQgUAAgiQAAgjAQgRQASgTAfAAQAhAAAQATQASASgBAiQABAigSAUQgRASggAAQgfAAgSgSgAgagiQgJALAAAXQAAAXAJAMQAKAMAQAAQAkAAAAgvQAAgugkgBQgQAAgKANg");
	this.shape_13.setTransform(104.4,16);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAYBGIgyhGIAABGIgeAAIAAiLIAeAAIAABEIAxhEIAfAAIgzBDIA2BIg");
	this.shape_14.setTransform(90.9,16);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgrBGIAAiLIBXAAIAAAZIg5AAIAAByg");
	this.shape_15.setTransform(78.6,16);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgnBGIAAiLIBPAAIAAAZIgxAAIAAAeIAuAAIAAAYIguAAIAAAkIAxAAIAAAYg");
	this.shape_16.setTransform(67.3,16);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag+BFIAAgYQAFABAFAAQAFAAADgEQADgFACgMIAHgpIAIg2IBYAAIAACLIgeAAIAAhyIgiAAIgBAMQgGAwgFAVQgEATgJAIQgJAIgPAAQgHAAgGgCg");
	this.shape_17.setTransform(53.4,16.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgwA2QgRgUgBgiQABgjARgRQARgTAfAAQAhAAARATQAQASABAiQgBAigQAUQgSASggAAQgfAAgRgSgAgagiQgIALgBAXQABAXAIAMQAKAMAQAAQAkAAgBgvQABgugkgBQgQAAgKANg");
	this.shape_18.setTransform(34.1,16);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgOBGIAAhyIgmAAIAAgZIBpAAIAAAZIgmAAIAAByg");
	this.shape_19.setTransform(20.6,16);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag0BBIAAgZQAXAHAQAAQASAAAJgJQAKgJABgRIg8AAIAAgYIA7AAQAAgQgJgJQgKgJgOAAQgJAAgJADIgSAGIgKgYQAWgKAZAAQAeAAARATQARAUAAAgQAAAjgSATQgRASggAAQgXAAgSgHg");
	this.shape_20.setTransform(8.3,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,294.4,30.7), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQBEQgEgEAAgIQAAgIAEgEQAEgEAIAAQAHAAAFAEQAEAEAAAIQAAAIgEAEQgFAEgHAAQgIAAgEgEgAgRAXIAAgHQAAgJAEgHQAEgGAJgHQAKgHADgFQADgEAAgGQAAgGgEgDQgFgEgHAAQgOAAgTAKIgKgVQAVgMAXAAQAUAAALAJQAMAKAAAQQAAAKgFAIQgFAHgNAKQgJAGgCADQgDAEAAAGIAAAFg");
	this.shape.setTransform(123.4,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGBQIAAgUQgYAAgRgIIAAgZQAIAEAMADQAMADAJABIAAgeIgHgCQgSgHgIgIQgIgJAAgNQAAgOALgJQALgIATgDIAAgOIAMAAIAAAOQAWABASAIIgJAWQgPgGgQgBIAAAcQATAHAIAFQAHAFAEAGQAEAGAAAJQAAAPgLAKQgLAJgUABIAAAUgAAGAmQANgDAAgJQAAgEgDgCQgDgEgHgCgAgTgfQAAAFAEACQADADAGACIAAgWQgNACAAAIg");
	this.shape_1.setTransform(113.4,16.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AguBAIAAgaQAIAEAKADQAKACAJAAQAaAAAAgWQAAgWgbAAIgLABIgKADIgMgGIAFhHIBLAAIAAAZIgxAAIgCAcIADgBQAGgBAIAAQAUgBAMAMQAMAKAAAUQAAAYgPAMQgOANgaAAQgXAAgPgHg");
	this.shape_2.setTransform(102.2,16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag1BBIAAgaQAJAFANADQAMABAKAAQAiABAAgVQAAgJgLgFQgLgFgVAAIgOAAIAAgXIAMAAQAVAAALgDQAKgFAAgKQAAgGgHgFQgGgEgMAAQgTAAgTALIgNgUQAMgHAOgEQANgEAPAAQAXAAAOAKQAOAJAAAQQAAANgKAJQgKAJgQACIAAABQATACALAIQAKAIAAAOQAAAUgQAKQgPAMgbAAQgfAAgTgHg");
	this.shape_3.setTransform(85.3,16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAlBGIAAhDIABgnIAAAAIhABqIgkAAIAAiLIAbAAIAABDIAAARIgBAWIAAAAIBAhqIAjAAIAACLg");
	this.shape_4.setTransform(70.9,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGBQIAAgUQgXAAgSgIIAAgZQAJAEALADQAMADAJABIAAgeIgGgCQgTgHgIgIQgIgJAAgNQAAgOALgJQAKgIAUgDIAAgOIAMAAIAAAOQAWABASAIIgJAWQgPgGgQgBIAAAcQATAHAIAFQAIAFAEAGQADAGAAAJQAAAPgLAKQgLAJgUABIAAAUgAAGAmQANgDAAgJQAAgEgDgCQgDgEgHgCgAgSgfQAAAFACACQADADAHACIAAgWQgMACAAAIg");
	this.shape_5.setTransform(52.3,16.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgjA2QgNgTAAgjQAAgkAMgRQAMgSAYAAQAYAAANATQAMASAAAiQAAAkgMATQgMARgZAAQgYAAgLgSgAgOgkQgFALAAAZQAAAaAFALQAFALAJAAQAKAAAFgLQAEgMABgZQgBgZgEgLQgFgLgKAAQgJAAgFALg");
	this.shape_6.setTransform(41.1,16);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgjA2QgNgTAAgjQAAgkAMgRQAMgSAYAAQAYAAANATQAMASAAAiQAAAkgMATQgMARgZAAQgXAAgMgSgAgOgkQgFALABAZQgBAaAFALQAEALAKAAQAKAAAFgLQAEgMABgZQgBgZgEgLQgFgLgKAAQgKAAgEALg");
	this.shape_7.setTransform(29.9,16);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgjA2QgNgTAAgjQAAgkAMgRQAMgSAYAAQAYAAANATQAMASAAAiQAAAkgMATQgMARgZAAQgXAAgMgSgAgOgkQgFALABAZQgBAaAFALQAFALAJAAQAKAAAFgLQAEgMAAgZQAAgZgEgLQgFgLgKAAQgJAAgFALg");
	this.shape_8.setTransform(18.8,16);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAFBGIAAhQIAAgNIABgPIgJAKIgQANIgPgSIAsgkIAZAAIAACLg");
	this.shape_9.setTransform(6.6,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,177.6,30.7), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgwBGIAAiLIAeAAIAAA2IALAAQAbAAAPALQAOAKAAAVQAAArg4AAgAgSAuIAJAAQAPgBAGgEQAHgFAAgJQAAgLgHgEQgHgEgQAAIgHAAg");
	this.shape.setTransform(86.5,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOBGIAAhyIgmAAIAAgZIBpAAIAAAZIgmAAIAAByg");
	this.shape_1.setTransform(74.1,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAkBGIgKghIgzAAIgKAhIgfAAIAxiLIAjAAIAyCLgAASAMIgQgyIgCgKIgRA8IAjAAg");
	this.shape_2.setTransform(61.7,15.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag/BFIAAgYQAGABAFAAQAFAAADgEQADgFADgMIAGgpIAIg2IBXAAIAACLIgdAAIAAhyIgiAAIgBAMQgGAwgEAVQgFATgJAIQgIAIgPAAQgJAAgGgCg");
	this.shape_3.setTransform(46.9,16.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnBGIAAiLIBPAAIAAAZIgxAAIAAAeIAuAAIAAAYIguAAIAAAkIAxAAIAAAYg");
	this.shape_4.setTransform(35.2,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAsBbIAAgqIhXAAIAAAqIgcAAIAAhCIALAAQANgbAIgcQAIgbAEghIBRAAIAABzIATAAIAABCgAgOgTQgGAYgKAUIA2AAIAAhaIgcAAQgCAWgIAYg");
	this.shape_5.setTransform(21.8,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgkA2QgQgTAAgjQAAgUAIgRQAIgQAOgJQAPgJATAAQAVAAAUAKIgJAYIgQgGQgIgDgIAAQgPAAgKANQgJAMAAAWQAAAuAiAAQAPAAAVgHIAAAZQgRAHgVAAQgeAAgQgSg");
	this.shape_6.setTransform(8.5,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,96.5,30.7), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.graf();
	this.instance.parent = this;
	this.instance.setTransform(346,0);

	this.instance_1 = new lib.graf();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,693,73), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,168,86), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.body();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,70,129), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,54,61), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,32,69), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,360,324), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(50,51.5,1,1,0,0,0,50,51.5);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

	// Слой 1
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50,51.5,1,1,0,0,0,50,51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.9,-22,126.6,143);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(50,51.5,1,1,0,0,0,50,51.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ52(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-12.9,-22,126.6,143), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(20.4,47.3,0.771,0.771,-173.3,0,0,50,51.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-208.5,x:192,y:-70.2},8,cjs.Ease.get(0.99)).to({regY:51.5,scaleX:0.77,scaleY:0.77,rotation:-247.7,x:235.4,y:26.7},7,cjs.Ease.get(-1)).to({regY:51.6,scaleX:0.77,scaleY:0.77,rotation:-286.7,x:251,y:96.2},7,cjs.Ease.get(1)).to({regY:51.5,scaleX:0.77,scaleY:0.77,rotation:-270,x:178.3,y:100.3},12,cjs.Ease.get(-1)).to({regX:50.1,regY:51.6,scaleX:0.77,scaleY:0.77,rotation:-232.5,x:133,y:104.3},12,cjs.Ease.get(1)).to({rotation:-272,x:131.9,y:180.1},12,cjs.Ease.get(-1)).to({regY:51.5,rotation:-301.8,x:123.9,y:239.4},13,cjs.Ease.get(1)).to({rotation:-266.5,x:66.8,y:234.1},15,cjs.Ease.get(-1)).to({regY:51.4,rotation:-245.3,x:-29.7,y:210},15,cjs.Ease.get(1)).to({regY:51.5,scaleX:0.77,scaleY:0.77,rotation:-277.3,x:24.6,y:295.1},15,cjs.Ease.get(-1)).to({regY:51.4,scaleX:0.77,scaleY:0.77,rotation:-303,x:65.3,y:362},15,cjs.Ease.get(1)).to({x:14.6,y:366.2,alpha:0},3).to({_off:true},1).wait(2));

	// Слой 3
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.5,59.4,0.813,0.813,18.2,0,0,50.1,51.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({rotation:-42.7,x:230.9,y:-185},12).to({_off:true},1).wait(29).to({_off:false,rotation:18.2,x:61.5,y:59.4},0).to({rotation:-42.7,x:230.9,y:-185},12).to({_off:true},1).wait(29).to({_off:false,rotation:18.2,x:61.5,y:59.4},0).to({rotation:-42.7,x:230.9,y:-185},12).to({_off:true},1).wait(29));

	// Слой 2
	this.instance_2 = new lib.Символ19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(42.5,50.8,0.739,0.739,-32,0,0,49.9,51.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).to({regX:50.1,regY:51.4,scaleX:1.25,scaleY:1.25,rotation:65,x:296.7,y:-147.2},11).to({_off:true},1).wait(30).to({_off:false,regX:49.9,regY:51.6,scaleX:0.74,scaleY:0.74,rotation:-32,x:42.5,y:50.8},0).to({regX:50.1,regY:51.4,scaleX:1.25,scaleY:1.25,rotation:65,x:296.7,y:-147.2},11).to({_off:true},1).wait(30).to({_off:false,regX:49.9,regY:51.6,scaleX:0.74,scaleY:0.74,rotation:-32,x:42.5,y:50.8},0).to({regX:50.1,regY:51.4,scaleX:1.25,scaleY:1.25,rotation:65,x:296.7,y:-147.2},11).to({_off:true},1).wait(19));

	// Слой 1
	this.instance_3 = new lib.Символ19();
	this.instance_3.parent = this;
	this.instance_3.setTransform(55.4,29.3,0.799,0.799,145.3,0,0,50,51.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(33).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:225.8,x:206.6,y:-59.6},9).to({regX:49.9,regY:51.4,scaleX:1,scaleY:1,rotation:311.4,x:331.9,y:-98.2},10).to({_off:true},1).wait(22).to({_off:false,regX:50,regY:51.5,scaleX:0.8,scaleY:0.8,rotation:145.3,x:55.4,y:29.3},0).to({scaleX:1,scaleY:1,rotation:225.8,x:206.6,y:-59.6},9).to({regX:49.9,regY:51.4,scaleX:1,scaleY:1,rotation:311.4,x:331.9,y:-98.2},10).to({_off:true},1).wait(22).to({_off:false,regX:50,regY:51.5,scaleX:0.8,scaleY:0.8,rotation:145.3,x:55.4,y:29.3},0).to({scaleX:1,scaleY:1,rotation:225.8,x:206.6,y:-59.6},9).to({regX:49.9,regY:51.4,scaleX:1,scaleY:1,rotation:311.4,x:331.9,y:-98.2},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.9,-11.5,109.8,120.8);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(27,7.3,0.271,0.271,-44.7,0,0,49.9,51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(1.1,-7.3,39.3,39.7), null);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 13
	this.instance = new lib.Symbol42();
	this.instance.parent = this;
	this.instance.setTransform(19.5,26.9,1.171,1,0,0,180,16.6,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(-8.2,3,45.9,39.7), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol40();
	this.instance.parent = this;
	this.instance.setTransform(45.9,-29.4,0.962,1,0,0,180,6.2,7.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Button_r();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.07,scaleY:1.07,x:-4,y:-3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,75);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol40();
	this.instance.parent = this;
	this.instance.setTransform(66,-29.4,1,1,0,0,0,6.1,7.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(53,38,1,1,0,0,0,53,38);

	this.instance_2 = new lib.Symbol36();
	this.instance_2.parent = this;
	this.instance_2.setTransform(52.9,37.8,1,1,0,0,0,56.9,40.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,76);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol31();
	this.instance.parent = this;
	this.instance.setTransform(114.5,32,1,1,0,0,0,114.5,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:31.9,scaleX:1.03,scaleY:1.03,x:114.6,y:31.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,229,64);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Symbol32();
	this.instance.parent = this;
	this.instance.setTransform(180.5,251,1,1,0,0,0,114.5,32);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOBOQgEgFgBgJQABgJAEgFQAFgFAJAAQAKAAAEAFQAGAFAAAJQAAAJgGAFQgFAFgJAAQgJAAgFgFgAgNAaIgFhsIAmAAIgHBsg");
	this.shape.setTransform(298,175.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag4BRIAAihIAiAAIAAA+IAOAAQAfAAARANQARAMAAAXQAAAzhCAAgAgWA1IAMAAQAQAAAIgGQAIgFAAgMQAAgLgIgFQgIgFgTAAIgJAAg");
	this.shape_1.setTransform(288,175.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgqA/QgTgWAAgoQAAgZAKgTQAIgTASgKQASgLAVAAQAYAAAYAMIgLAcIgTgHQgIgDgKAAQgSAAgKAOQgLAPAAAZQAAA2AnAAQASAAAYgIIAAAcQgUAJgYAAQgjgBgTgUg");
	this.shape_2.setTransform(273.3,175.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AguBRIAAihIBdAAIAAAcIg6AAIAAAkIA2AAIAAAbIg2AAIAAAqIA6AAIAAAcg");
	this.shape_3.setTransform(259.8,175.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAzBpIAAgvIhlAAIAAAvIghAAIAAhMIAMAAQARgfAJghQAJggAFglIBdAAIAACFIAWAAIAABMgAgQgVQgIAbgKAXIA+AAIAAhoIggAAQgDAZgJAdg");
	this.shape_4.setTransform(244.2,177.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag9BLIAAgdQAKAFAOADQAOACAMABQApAAAAgYQAAgLgOgGQgMgGgZABIgQAAIAAgaIAOAAQAZAAAMgGQAMgEgBgMQAAgIgHgFQgIgFgNAAQgXAAgVAOIgQgYQAOgJAQgEQAQgFARAAQAbAAAQAMQAQALAAASQgBAPgKALQgLAKgUADIAAAAQAXADAMAJQALAKAAARQABAVgTANQgSANgeABQglAAgVgJg");
	this.shape_5.setTransform(228.4,175.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAfBRIAAg+IgVAAIglA+IgmAAIAuhHQgNgGgIgKQgHgMgBgQQABgWAQgMQAPgMAdAAIA1AAIAAChgAgFgvQgHAFgBALQAAAKAIAHQAFAGAPAAIAQAAIAAgsIgRAAQgNAAgGAFg");
	this.shape_6.setTransform(206.6,175.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgqA/QgTgWAAgoQAAgZAKgTQAIgTASgKQARgLAWAAQAYAAAYAMIgLAcIgTgHQgJgDgJAAQgSAAgKAOQgLAPAAAZQAAA2AnAAQARAAAZgIIAAAcQgUAJgYAAQgjgBgTgUg");
	this.shape_7.setTransform(193.1,175.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgRBRIAAiFIgrAAIAAgcIB5AAIAAAcIgsAAIAACFg");
	this.shape_8.setTransform(179,175.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AguBRIAAihIBdAAIAAAcIg6AAIAAAkIA2AAIAAAbIg2AAIAAAqIA6AAIAAAcg");
	this.shape_9.setTransform(166.4,175.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AApBSIgLgnIg7AAIgMAnIgkAAIA5iiIApAAIA5CigAAVAOIgSg6IgDgMIgUBGIApAAg");
	this.shape_10.setTransform(151.9,175.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAgBRIAAhGIg/AAIAABGIgjAAIAAihIAjAAIAAA/IA/AAIAAg/IAiAAIAAChg");
	this.shape_11.setTransform(135.3,175.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAqBRIAAhOIACgtIAAAAIhLB7IgpAAIAAihIAfAAIAABOIgBAUIgBAYIABAAIBKh6IApAAIAAChg");
	this.shape_12.setTransform(117.3,175.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAgBRIAAg/QgRAGgLACQgLACgKAAQgXAAgNgLQgNgLAAgTIAAhDIAjAAIAAA5QAAAMAFAGQAGAFANAAQAIAAAJgBQAJgCANgEIAAhJIAjAAIAAChg");
	this.shape_13.setTransform(99.2,175.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AApBSIgMgnIg5AAIgNAnIglAAIA6iiIApAAIA6CigAAVAOIgSg6IgDgMIgUBGIApAAg");
	this.shape_14.setTransform(83.6,175.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAhBRIAAhGIhAAAIAABGIgiAAIAAihIAiAAIAAA/IBAAAIAAg/IAhAAIAAChg");
	this.shape_15.setTransform(67,175.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AguBRIAAihIBdAAIAAAcIg6AAIAAAkIA2AAIAAAbIg2AAIAAAqIA6AAIAAAcg");
	this.shape_16.setTransform(298.9,147.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ABHBRIg3hRIAABRIgfAAIAAhRIg2BRIglAAIA6hTIg3hOIAjAAIA1BOIAAhOIAfAAIAABOIA1hOIAjAAIg2BOIA5BTg");
	this.shape_17.setTransform(281.4,147.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag3BRIAAihIA0AAQAdAAAPANQAPAMAAAZQAAAbgQANQgRANgdAAIgPAAIAAA6gAgVgEIAMAAQAOAAAJgGQAHgGABgMQgBgMgGgGQgHgGgNAAIgQAAg");
	this.shape_18.setTransform(264.1,147.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAqBRIAAhOIACgtIAAAAIhLB7IgpAAIAAihIAfAAIAABOIgBAUIgBAYIABAAIBKh6IApAAIAAChg");
	this.shape_19.setTransform(247.1,147.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag4BRIAAihIBlAAIAAAcIhDAAIAAAiIAOAAQAfAAARANQARAMAAAXQAAAzhCAAgAgWA1IAMAAQAQAAAIgGQAIgFAAgMQAAgLgIgFQgIgFgTAAIgJAAg");
	this.shape_20.setTransform(231,147.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAqBRIgMgmIg6AAIgMAmIglAAIA5iiIApAAIA5CigAAWAOIgTg7IgDgKIgUBFIAqAAg");
	this.shape_21.setTransform(209.5,147.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAhBRIAAhGIhAAAIAABGIgiAAIAAihIAiAAIAAA/IBAAAIAAg/IAhAAIAAChg");
	this.shape_22.setTransform(193,147.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAgBRIAAg+IgWAAIglA+IgmAAIAuhHQgNgGgIgKQgHgMAAgQQgBgWARgMQAQgMAcAAIA1AAIAAChgAgFgvQgIAFABALQAAAKAGAHQAHAGAPAAIAQAAIAAgsIgRAAQgOAAgGAFg");
	this.shape_23.setTransform(169.8,147.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag5BSQgJAAgHgCIAAgcQAGACAHAAQAFAAAEgFQADgGADgOIAIgvIAJg/IBmAAIAAChIgjAAIAAiFIgnAAIgCAPQgGA4gFAXQgGAXgKAJQgKAJgQAAIgCAAg");
	this.shape_24.setTransform(153.9,147.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag7BRIAAihIAyAAQAiAAAQAKQAPAJAAAWQAAAOgHAKQgHAJgLACIAAABQAQADAGAJQAHAJAAAQQAAAWgQANQgQAMgbAAgAgZA1IAXAAQANAAAHgGQAGgFAAgLQAAgVgbAAIgWAAgAgZgQIAUAAQANAAAHgEQAGgFAAgKQAAgJgHgEQgHgEgOAAIgSAAg");
	this.shape_25.setTransform(139.2,147.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag5A+QgTgVgBgpQAAgoAVgVQAUgWAlABQAlgBAUAWQATAVAAAoQAAApgTAVQgUAVgmAAQgkAAgVgVgAgegoQgKAOAAAaQAAAcAKANQAKAOAUAAQApAAAAg3QABg2gpAAQgUAAgLAOg");
	this.shape_26.setTransform(122.1,147.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgyBRIAAihIBlAAIAAAcIhDAAIAACFg");
	this.shape_27.setTransform(107.5,147.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag3BRIAAihIA0AAQAcAAAQANQAPAMAAAZQAAAbgQANQgQANgeAAIgOAAIAAA6gAgUgEIALAAQAPAAAIgGQAHgGAAgMQABgMgHgGQgHgGgNAAIgPAAg");
	this.shape_28.setTransform(93.7,147.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag4A+QgVgVAAgpQABgoAUgVQAUgWAkABQAmgBATAWQAVAVAAAoQAAApgVAVQgUAVglAAQglAAgTgVgAgdgoQgLAOAAAaQAAAcAKANQAKAOAUAAQAqAAAAg3QAAg2gqAAQgTAAgKAOg");
	this.shape_29.setTransform(77,147.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgRBRIAAiFIgsAAIAAgcIB6AAIAAAcIgsAAIAACFg");
	this.shape_30.setTransform(61.4,147.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(101,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.Symbol30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(180,162,1,1,0,0,0,180,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,360,324), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body.png copy
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(34.5,56,1,1,0,0,0,34.5,56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// hand.png copy
	this.instance_1 = new lib.Symbol24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.8,75.8,1,1,0,0,0,31.8,71.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:71.9,rotation:-0.9,x:4.9,y:75.9},19).to({regY:71.8,rotation:0,x:4.8,y:75.8},20).wait(1));

	// leg.png
	this.instance_2 = new lib.Symbol23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(26.5,112.1,1,1,0,0,0,23.5,4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:4.2,rotation:3.5,y:112.2},19).to({regY:4.1,rotation:0,y:112.1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,0,96,145);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(48.2,15.3,1,1,0,0,0,48.2,15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,96.5,30.7), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_297 = new cjs.Graphics().p("AIhGAQgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLg");
	var mask_graphics_298 = new cjs.Graphics().p("ABqHMQh7h8AAixQAAixB7h8QB8h7CxAAQCxAAB8B7QB8B8AACxQAACxh8B8Qh8B8ixAAQixAAh8h8g");
	var mask_graphics_299 = new cjs.Graphics().p("AlLJBQjujuAAlTQAAlSDujuQDtjtFSAAQFUAADtDtQDtDuAAFSQAAFTjtDuQjtDtlUAAQlSAAjtjtg");
	var mask_graphics_300 = new cjs.Graphics().p("AsCNUQlflfAAn1QAAn0FflfQFflfH0AAQH2AAFfFfQFfFfAAH0QAAH1lfFfQlfFfn2AAQn0AAlflfg");
	var mask_graphics_301 = new cjs.Graphics().p("AxnRoQnQnQAAqYQAAqXHQnQQHQnQKXAAQKYAAHQHQQHQHQAAKXQAAKYnQHQQnQHQqYAAQqXAAnQnQg");
	var mask_graphics_302 = new cjs.Graphics().p("A17V8QpCpCAAs6QAAs5JCpCQJCpCM5AAQM6AAJCJCQJCJCAAM5QAAM6pCJCQpCJCs6AAQs5AApCpCg");
	var mask_graphics_303 = new cjs.Graphics().p("A6OaPQq0qzAAvcQAAvbK0qzQKzq0PbAAQPcAAKzK0QK0KzAAPbQAAPcq0KzQqzK0vcAAQvbAAqzq0g");
	var mask_graphics_304 = new cjs.Graphics().p("A+iejQslslAAx+QAAx9MlslQMlslR9AAQR+AAMlMlQMlMlAAR9QAAR+slMlQslMlx+AAQx9AAslslg");
	var mask_graphics_394 = new cjs.Graphics().p("A+iejQslslAAx+QAAx9MlslQMlslR9AAQR+AAMlMlQMlMlAAR9QAAR+slMlQslMlx+AAQx9AAslslg");
	var mask_graphics_395 = new cjs.Graphics().p("A4gYhQqGqGAAubQAAuaKGqGQKGqGOaAAQObAAKGKGQKGKGAAOaQAAObqGKGQqGKGubAAQuaAAqGqGg");
	var mask_graphics_396 = new cjs.Graphics().p("AyeSfQnnnnAAq4QAAq3HnnnQHnnnK3AAQK4AAHnHnQHnHnAAK3QAAK4nnHnQnnHnq4AAQq3AAnnnng");
	var mask_graphics_397 = new cjs.Graphics().p("AsAMdQlJlIAAnVQAAnUFJlIQFIlJHUAAQHVAAFIFJQFIFIAAHUQAAHVlIFIQlIFJnVAAQnUAAlIlJg");
	var mask_graphics_398 = new cjs.Graphics().p("AhxG+QipiqAAjyQAAjxCpipQCpiqDyAAQDyAACpCqQCpCpAADxQAADyipCqQipCpjyAAQjyAAipipg");
	var mask_graphics_399 = new cjs.Graphics().p("AIhGAQgLgKAAgPQAAgPALgLQAKgKAPAAQAPAAALAKQAKALAAAPQAAAPgKAKQgLALgPAAQgPAAgKgLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(297).to({graphics:mask_graphics_297,x:60.6,y:39.5}).wait(1).to({graphics:mask_graphics_298,x:83.2,y:58.4}).wait(1).to({graphics:mask_graphics_299,x:105.8,y:73.1}).wait(1).to({graphics:mask_graphics_300,x:128.5,y:72}).wait(1).to({graphics:mask_graphics_301,x:142.9,y:70.9}).wait(1).to({graphics:mask_graphics_302,x:149.2,y:69.8}).wait(1).to({graphics:mask_graphics_303,x:155.5,y:68.7}).wait(1).to({graphics:mask_graphics_304,x:119.7,y:25.4}).wait(90).to({graphics:mask_graphics_394,x:119.7,y:25.4}).wait(1).to({graphics:mask_graphics_395,x:119.2,y:35.3}).wait(1).to({graphics:mask_graphics_396,x:118.6,y:45.1}).wait(1).to({graphics:mask_graphics_397,x:115.3,y:55}).wait(1).to({graphics:mask_graphics_398,x:87.8,y:61.5}).wait(1).to({graphics:mask_graphics_399,x:60.6,y:39.5}).wait(1));

	// Layer 12
	this.instance = new lib.Symbol29();
	this.instance.parent = this;
	this.instance.setTransform(116,75,1,1,0,0,0,180,162);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(297).to({_off:false},0).wait(103));

	// Layer 9
	this.instance_1 = new lib.Symbol28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-204.3,10.8,1,1,0,0,0,120.9,15.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(202).to({_off:false},0).to({x:115.7},9).to({x:123.7},2).to({x:115.7},2).wait(79).to({x:-204.3,alpha:0},5).to({_off:true},1).wait(100));

	// Layer 8
	this.instance_2 = new lib.Symbol27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(452.3,34.8,1,1,0,0,0,138.3,15.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(202).to({_off:false},0).to({x:116.3},9).to({x:108.3},2).to({x:116.3},2).wait(79).to({x:452.3,alpha:0},5).to({_off:true},1).wait(100));

	// Layer 6
	this.instance_3 = new lib.Symbol26();
	this.instance_3.parent = this;
	this.instance_3.setTransform(475.8,38,1,1,0,0,0,169.8,15.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(124).to({_off:false},0).to({x:115},10).to({x:107},2).to({x:115},2).wait(61).to({x:475.8,alpha:0},5).to({_off:true},1).wait(195));

	// Layer 5
	this.instance_4 = new lib.Symbol25();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-236.6,14.8,1,1,0,0,0,163,15.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(124).to({_off:false},0).to({x:115.4},10).to({x:123.4},2).to({x:115.4},2).wait(61).to({x:-236.6,alpha:0},5).to({_off:true},1).wait(195));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AirjjIFXAAIAAHHIlXAAg");
	this.shape.setTransform(-501.2,91.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AirDkIAAnHIFXAAIAAHHg");
	this.shape_1.setTransform(-501.2,91.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(399));

	// Layer 1
	this.instance_5 = new lib.Symbol18();
	this.instance_5.parent = this;
	this.instance_5.setTransform(48.3,14.7,4.179,4.179,0,0,0,48.2,15.2);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:15.3,scaleX:1,scaleY:1,x:48.2,y:15.3,alpha:1},14).to({scaleX:0.97,scaleY:0.97,x:50.2,y:15.7},2).to({scaleX:1,scaleY:1,x:48.2,y:15.3},2).wait(101).to({alpha:0},5).to({_off:true},1).wait(275));

	// Layer 2
	this.instance_6 = new lib.Symbol19();
	this.instance_6.parent = this;
	this.instance_6.setTransform(185.1,15.4,3.666,3.666,0,0,0,88.7,15.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:false},0).to({regX:88.8,regY:15.3,scaleX:1,scaleY:1,y:15.6,alpha:1},14).to({regY:15.4,scaleX:0.97,scaleY:0.97,x:183.4,y:16},2).to({regY:15.3,scaleX:1,scaleY:1,x:185.1,y:15.6},2).wait(94).to({alpha:0},5).to({_off:true},1).wait(275));

	// Layer 3
	this.instance_7 = new lib.Symbol20();
	this.instance_7.parent = this;
	this.instance_7.setTransform(114.6,39.5,3.23,3.23,0,0,0,147.1,15.3);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).to({regX:147.2,scaleX:1,scaleY:1,x:114.8,y:39.6,alpha:1},14).to({scaleX:0.97,scaleY:0.97,x:115,y:39.3},2).to({scaleX:1,scaleY:1,x:114.8,y:39.6},2).wait(88).to({alpha:0},5).to({_off:true},1).wait(275));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-519.4,-48.8,769.3,164);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(35,64.5,1,1,0,0,0,35,64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,70,129), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(27,30.5,1,1,0,0,0,27,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,54,61), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(16,34.5,1,1,0,0,0,16,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,32,69), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body.png
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(35,64.5,1,1,0,0,0,35,64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// hand.png
	this.instance_1 = new lib.Symbol11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(57.2,70.6,1,1,0,0,0,1.2,59.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:4.5},9,cjs.Ease.get(-1)).to({regY:59.7,rotation:9.7,y:70.7},10,cjs.Ease.get(1)).to({regY:59.6,rotation:4.8,y:70.6},10,cjs.Ease.get(-1)).to({rotation:0},10,cjs.Ease.get(1)).wait(1));

	// hand2.png
	this.instance_2 = new lib.Symbol10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.8,60.8,1,1,0,0,0,29.4,61.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-6.5,x:9.9},9,cjs.Ease.get(-1)).to({rotation:-14},10,cjs.Ease.get(1)).to({rotation:-6.8,x:10},10,cjs.Ease.get(-1)).to({rotation:0,x:9.8},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.6,-1,129.6,130);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Button_r.png
	this.instance = new lib.Symbol35();
	this.instance.parent = this;
	this.instance.setTransform(165,37.5,1,1,0,0,0,53,37.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Button_g.png
	this.instance_1 = new lib.Symbol34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(53,38,1,1,0,0,0,53,38);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-4,-29.1,225.7,107.7), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.setka();
	this.instance.parent = this;
	this.instance.setTransform(0,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(180,162,1,1,0,0,0,180,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,360,324), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// man2
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(63.9,63,1,1,0,0,0,34.5,56);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(121).to({_off:false},0).to({x:60.7,y:27,alpha:1},3).to({y:23.8},3).to({y:24.4},6).to({x:62,y:32.9},3).to({y:74.5},6).to({y:24.4},12).to({y:32.9},6).wait(5).to({y:42.6},6).to({y:78.4},6).to({y:62.8},5).wait(6).to({y:57.6},5).wait(6).to({y:24.4},6).to({y:30.3},7).to({y:51.7},16).to({y:66},6).wait(5).to({y:70.6},7).to({y:52.4},6).wait(5).to({y:25.7},7).to({y:42},5).to({y:80.3},6).to({y:71.9},5).wait(6).to({y:66.7},6).to({y:43.3},12).wait(5).to({y:20.5},6).to({y:14},7).to({y:22.5},1).to({x:59.4,y:45.9},8).to({y:52.4},5).to({y:31.6},6).to({y:23.8},5).wait(5).to({y:34.2},5).to({y:73.8},5).to({y:25.1},11).to({y:32.9},5).wait(4).to({y:43.3},6).to({y:79},5).to({x:60.7,y:47.2},1).to({_off:true},1).wait(5));

	// man1
	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(35,64.5,1,1,0,0,0,35,64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({alpha:0},5).to({_off:true},1).wait(269).to({_off:false},0).to({alpha:1},5).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A0oHUIAAunMApRAAAIAAOng");
	var mask_graphics_119 = new cjs.Graphics().p("A0oHUIAAunMApRAAAIAAOng");
	var mask_graphics_124 = new cjs.Graphics().p("A0oHUIAAunMApRAAAIAAOng");
	var mask_graphics_394 = new cjs.Graphics().p("A0oHUIAAunMApRAAAIAAOng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-132.3,y:-5.3}).wait(119).to({graphics:mask_graphics_119,x:-132.3,y:-5.3}).wait(5).to({graphics:mask_graphics_124,x:-132.3,y:-5.3}).wait(270).to({graphics:mask_graphics_394,x:-132.3,y:-5.3}).wait(6));

	// graf
	this.instance_2 = new lib.Symbol14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-79.5,-1.5,1,1,0,0,0,173.5,36.5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(124).to({x:-400.5},199).to({x:-402.1},8).to({x:-515},63).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-253,-38,363,167);


// stage content:
(lib.index2 = function(mode,startPosition,loop) {
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

	// Layer 7
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(112.7,94.1,1,1,0,0,0,48.2,15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 6
	this.instance_1 = new lib.Symbol13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(175.9,40.6,0.74,0.702,0,0,0,84,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 3
	this.instance_2 = new lib.Symbol4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(138,242,1,1,0,0,0,109,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 4
	this.instance_3 = new lib.Symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(289,237.5,1,1,0,0,0,35,64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 5
	this.instance_4 = new lib.lesnica();
	this.instance_4.parent = this;
	this.instance_4.setTransform(258,127);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 1
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(181,153,1,1,0,0,0,180,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274.4,141,1148.4,334);
// library properties:
lib.properties = {
	width: 360,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1490976106075", id:"back"},
		{src:"images/baks.png?1490976106075", id:"baks"},
		{src:"images/body.png?1490976106075", id:"body"},
		{src:"images/bodypngcopy.png?1490976106075", id:"bodypngcopy"},
		{src:"images/buttonniz.png?1490976106075", id:"buttonniz"},
		{src:"images/Button_g.png?1490976106075", id:"Button_g"},
		{src:"images/Button_r.png?1490976106075", id:"Button_r"},
		{src:"images/graf.png?1490976106075", id:"graf"},
		{src:"images/hand.png?1490976106075", id:"hand"},
		{src:"images/handpngcopy.png?1490976106075", id:"handpngcopy"},
		{src:"images/hand2.png?1490976106075", id:"hand2"},
		{src:"images/leg.png?1490976106075", id:"leg"},
		{src:"images/lesnica.png?1490976106075", id:"lesnica"},
		{src:"images/logo.png?1490976106075", id:"logo"},
		{src:"images/setka.png?1490976106075", id:"setka"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;