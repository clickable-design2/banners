(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,195);


(lib.brassiere = function() {
	this.initialize(img.brassiere);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,80);


(lib.byustgalter = function() {
	this.initialize(img.byustgalter);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,85);


(lib.girl_lif_s = function() {
	this.initialize(img.girl_lif_s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,680,385);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,35);


(lib.handdd = function() {
	this.initialize(img.handdd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,90);


(lib.head1 = function() {
	this.initialize(img.head1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,99);


(lib.kist = function() {
	this.initialize(img.kist);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,84);


(lib.korzina = function() {
	this.initialize(img.korzina);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,171);


(lib.leg1 = function() {
	this.initialize(img.leg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,165);


(lib.leg = function() {
	this.initialize(img.leg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,153);


(lib.ple4o = function() {
	this.initialize(img.ple4o);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,83);


(lib.tits = function() {
	this.initialize(img.tits);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,62);// helper functions:

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


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AAaD7IgUgDQgKgCgTACIgeABIgFgBQgDACgEAAQgZAAgOgVIgKgQIgKgMQgMgNgHgFQgKgIgYgJQgVgJgugaQhAglghgcQgVgRglgoIggghQgLgLgDgIQgDgJACgQQAJhIAYhCQAMggAPgMQAFgEAEACIABABIACgBQADABACAEQAbAoA4AoQAgAWBCArIAYARQAOAKAKAFQAPAHAoAJIBBAPQAeAHAOACQAgAFAYgBQA9AABOgeQBXgiBPg0QgGgDACgHQAFACABgHIABgEIgBAAQgDgCAAgDQABgFAIgDQAFgDADADQACACAAAFQgBAGACACQACAEAHACQAGAFgCANQgDAYAIAYQAEANANAYQAKAXgCAQQgBARgPASQgJAMgUAQQgWASgUAPQgVAQgfATQg1AggtATQgeAMgMAGQgOAHgdAWQgaAUgRAHQgUAJgRAAIgTgDg");
	this.shape.setTransform(44.8,25.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(0,0,89.5,50.7), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AF+FXQgUgBgfgOQgjgQgOgDQgRgDgaABIgrADQgxACh0ghQhngeg7AMIgkAIQgWAEgPgDQgIgBgVgIQgSgHgLAAQgOAAgRAIIgbAQQgrAagyAOQgWAGgMgFQgNgFgJgRQgMgZABgrQAChWAjhIIAFgIQgBgDAAgEQACgJAGgKQASgZAvgqQAugqASgaQAQgXAahAQAYg5AXgbQAHgJAHAAQAHgBAFAHQAEAHgBAIQgCAIgMARQgKAPgRAnIgmBbQgIATgCAKQgFAQADANQAEAZAhAbQAXASAPAGQATAHAagBQAQgCAegGQAZgFAOgFQAVgIANgLQAIgHAKgMIARgVQAQgTAcgRIA2gfIBig1QArgWARgUQARgUAMgsQAPgyAKgSQAMgTANgDQAFgBAEABQAFgDAHABQALAAADAJQACAFgCAHIgFAMQgJASgBAmIgFCZQgBAqADARQAEAWAQAmQARAkARAgQAPAdARAFQAIADASACQAQADACAKQACAHgHAPQgfA4gJBEQgCARgCAGQgDANgHAIQgMAOgXAAIgFAAg");
	this.shape.setTransform(48.1,34.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(0,0,96.3,68.7), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.korzina();
	this.instance.parent = this;
	this.instance.setTransform(2,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(2,-21,86,171), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#74375D").s().p("AgXB2QgKgJAAgOQAAgPAKgJQAJgJAOAAQAPAAAKAJQAKAJAAAPQAAAOgKAJQgKAJgPAAQgOAAgJgJgAgdA1IgGizIBGAAIgECzg");
	this.shape.setTransform(145.3,50.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#74375D").s().p("AAmB8IAAhjIhLAAIAABjIhBAAIAAj3IBBAAIAABaIBLAAIAAhaIBBAAIAAD3g");
	this.shape_1.setTransform(126.6,50.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#74375D").s().p("AgvB5QgWgJgTgQQgRgPgLgZQgKgZAAgfQAAgUAEgRQAFgSAKgPQASgdAdgOQAdgOAfgBQANAAAMACQALACALAFQAWAIATAQQAIAHAIALQAHAJAGANQAFANADANQACAPAAAOQAAA5gkAkQgjAjg4ABQgYgBgXgHgAgrgwQgJAIgEAMQgFANAAAPQAAAgASASQAKAJAKAEQAMAEALABQAZgBATgRQATgSAAggQgBgOgEgNQgFgMgJgJQgJgJgLgFQgLgEgNAAQgZAAgSASg");
	this.shape_2.setTransform(99.5,50.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#74375D").s().p("AgdB9IAAgYQgzgCghgaQghgaAAgvQAAguAhgaQAQgNAVgHQAVgHAagBIAAgYIA7AAIAAAYQAaABAWAGQAVAHAQANQAgAYAAAxQAAARgEAOQgFAOgIALQgQAXgZAKQgaALghABIAAAYgAAdAuQAagCAOgLQANgMAAgVQAAgrg1gCgAhEggQgNALAAAVQAAAVANAMQANALAbACIAAhbQgbABgNAMg");
	this.shape_3.setTransform(69.4,50.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#74375D").s().p("AhqB9IAAj4IBBAAIAAB6ICAh7IAUAAIAAD4IhBAAIAAh/IiBCAg");
	this.shape_4.setTransform(40.2,50.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#74375D").s().p("AhSB9QgOAAgSgDIACguQAUABAHgGQAGgGADgUIAQipICvAAIAAD3IhBAAIAAi9Ig0AAIgKBxQgCASgDANQgEAOgFAIQgKASgVAFQgJACgLAAIgFAAg");
	this.shape_5.setTransform(12.8,50.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#74375D").s().p("AhqB9IAAj4IBBAAIAAB6ICAh7IAUAAIAAD4IhBAAIAAh/IiBCAg");
	this.shape_6.setTransform(114.9,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#74375D").s().p("AhiB8IAAj3IBsAAQAjAAAWAVQAWAVAAAjQAAALgGAMQgFAMgKAHQAIAEAFAEQAGAGAEAHQAIAOAAARQAAAhgVAWQgUAVglAAgAghBEIAxAAQARAAACgUQABgIgGgHQgFgGgKAAIgwAAgAghgZIAnAAQAJAAAFgGQAFgFAAgIQAAgJgFgHQgFgGgJAAIgnAAg");
	this.shape_7.setTransform(90.3,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#74375D").s().p("AgvB4QgXgIgRgPQgSgQgKgZQgLgZAAgfQAAgTAEgSQAFgSAKgPQASgeAdgOQAdgOAgABQAMAAALABQAMACALAFQAXAIARAPQAJAIAIAKQAHAKAGANQAFANADAOQACANAAAPQAAA5gjAjQgkAkg4AAQgYAAgXgIgAgrgwQgJAIgFANQgEAMAAAPQAAAfASATQAJAIALAFQALAFAMAAQAZAAATgSQASgTABgfQAAgPgFgMQgFgMgJgJQgJgJgLgFQgLgEgMAAQgZAAgTASg");
	this.shape_8.setTransform(63.7,14.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#74375D").s().p("AhSB9QgOAAgSgDIABguQAVABAGgGQAHgGACgUIARipICvAAIAAD3IhBAAIAAi9Ig0AAIgLBxQgBASgDANQgEAOgFAIQgJASgWAFQgJACgLAAIgFAAg");
	this.shape_9.setTransform(35.5,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(0,0,151.8,72.3), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000","rgba(0,0,0,0)"],[0,0.498,1],0.1,-37,0.1,36.9).s().p("EgzFAFyIAArjMBmLAAAIAALjg");
	this.shape.setTransform(327,343);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","#000000","rgba(0,0,0,0)"],[0,0.498,1],0.1,-37,0.1,36.9).s().p("EgzFAFyIAArjMBmLAAAIAALjg");
	this.shape_1.setTransform(327,37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(0,0,653.9,380), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000","rgba(0,0,0,0)"],[0,0.498,1],-46.6,0,46.5,0).s().p("AnRfpMAAAg/RIOjAAMAAAA/Rg");
	this.shape.setTransform(245.7,202.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","#000000","rgba(0,0,0,0)"],[0,0.498,1],-47,0,46.9,0).s().p("AnVfpMAAAg/RIOrAAMAAAA/Rg");
	this.shape_1.setTransform(30.2,202.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-16.8,0,309.1,405), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.brassiere();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,0,85,80), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFCxQgigMgagXQgagXgQglQgOgkAAguQgBgdAHgaQAHgbAOgVQAbgsAqgVQAqgUAwAAQARAAARADQASADAQAGQAhAMAbAXQANALAKAPQALAPAIATQAHASAFAUQADAVAAAWQABBTg1A1Qg0A1hSAAQgkAAghgMgAhAhIQgNANgHASQgGATgBAWQAAAvAbAaQAOANAQAGQAQAGASABQAlAAAbgaQAcgaAAgvQgBgWgGgSQgHgTgNgMQgOgNgQgHQgQgHgSAAQgmAAgbAag");
	this.shape.setTransform(265.4,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA4C2IAAiRIhwAAIAACRIhfAAIAAlrIBfAAIAACDIBwAAIAAiDIBgAAIAAFrg");
	this.shape_1.setTransform(225.7,22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABaC4IgWgtIiHAAIgUAtIhkAAIAAgNICnliIArAAIClFiIAAANgAAmA7IglhXIglBXIBKAAg");
	this.shape_2.setTransform(188.4,22.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABTC3IAAioIhNBRIgKAAIhOhRIAACoIhfAAIAAltIAiAAICPCeICQieIAiAAIAAFtg");
	this.shape_3.setTransform(148.6,22.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AicDtIAAlsIBfAAIAACxIC9iyIAdAAIAAFsIhfAAIAAi7Ii+C8gAgUiXQgPgGgLgKQgXgWgBgqIAzgFQABAOAJAHQAIAHAPAAQARAAAJgHQAJgHACgOIA0AFQgCAqgWAWQgWAVgpAAQgUAAgQgFg");
	this.shape_4.setTransform(107.2,17.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhGCxQgggMgbgXQgagXgPglQgPgkgBguQABgdAGgaQAHgbANgVQAcgsAqgVQAqgUAwAAQASAAARADQAQADARAGQAiAMAZAXQAOALALAPQAKAPAIATQAIASADAUQAFAVAAAWQAABTg1A1Qg0A1hSAAQgkAAgigMgAg/hIQgOANgHASQgGATAAAWQAAAvAbAaQANANAQAGQAQAGASABQAlAAAbgaQAcgagBgvQABgWgIgSQgGgTgOgMQgNgNgQgHQgQgHgSAAQglAAgbAag");
	this.shape_5.setTransform(67,22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA4C2IAAkWIhwAAIAAEWIheAAIAAlrIEtAAIAAFrg");
	this.shape_6.setTransform(27.4,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,294.3,56), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdFHQgpgOgggeQhBg7gChjICaAAQAAAgAUARQAUARAiAAQAiAAAUgWQATgXABgjQgBglgQgWQgPgWgZgGIg1gIQgfgBgdAEIAAgVIBkjFIjPAAIAAiOIGsAAIAAAZIh7DiQBFATAiAyQAiAxAABSQAABdg/BGQgfAigsASQgsARg2AAQgxAAgqgPg");
	this.shape.setTransform(145.8,41);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aj1FPIFDqdICoAAIlDKdg");
	this.shape_1.setTransform(91.4,40.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhhFOQgtgQgkgfQhIg/AAhqIAAjsQAAg0ASgqQARgrAlgfQAkgfAtgQQAtgPA1AAQBsgBBIA/QAjAfASArQARAqABA0IAADsQgBA1gRAqQgSArgjAfQglAfgsAQQgtAPg2AAQg1AAgtgPgAg+ivQgYAXgBAnIAADkQABAoAYAUQAZAVAmAAQAnAAAYgVQAZgWAAgmIAAjkQAAgngZgXQgYgVgnAAQgmAAgZAVg");
	this.shape_2.setTransform(33.2,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,176,100), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AzhbwMAAAg3fMAnDAAAMAAAA3fg");
	this.shape.setTransform(125,177.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,250.1,355.1), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_lif_s();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,680,385), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg5QAg0MAAAhBnMByhAAAMAAABBng");
	this.shape.setTransform(366.5,210);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,733,420), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ple4o();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,47,83), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,96,35), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leg1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,61,165), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,79,153), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.head1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,88,99), null);


(lib.handdd_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.handdd();
	this.instance.parent = this;
	this.instance.setTransform(-25,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.handdd_1, new cjs.Rectangle(-25,-45,50,90), null);


(lib.sprite136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.sprite136, null, null);


(lib.shape142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(8.9,1,1).p("AKKqJQELELAAF+QAAF+kLEMQkLEMl/AAQl+AAkLkMQkMkMAAl+QAAl+EMkLQELkMF+AAQF/AAELEMg");
	this.shape.setTransform(199.7,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(103.5,-94.4,192.3,192.3);


(lib.shape137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AIoCbIxQibIRQiaIABAAIAAE1g");
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


(lib.fef = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.byustgalter();
	this.instance.parent = this;
	this.instance.setTransform(32.6,-2.1,0.479,0.479,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fef, new cjs.Rectangle(-2.6,-2.1,63.3,68.9), null);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(153.8,29.2,1.045,1.045,0,0,0,147.2,27.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.648},6).to({alpha:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,307.4,58.5);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003300").s().p("AApECIAAgBQgEgBgJABQgHAAgEgDIgDgCIgFgBIhRAAIgKgBQgEgBgEgGIgDgDIgRgSIgRgTQgIgJgDgFIhIgnQhGgngwglQg9gtgcggQgcghgGgMQgFgMAJgwQAJgxAWgyQAWgzAKABIAMABIABgBQAEgCAGAGIAfAlQAVAYAhAZQATAOAqAbQAfAVAdAQQAdAQA4ARQA5AQA3AHQA5AIAogJIAGgEIAVgIIAjgKQARgEAEAAIAAAAIAPgFIAbgNIAJgGIAigTIAzgdQAZgPAIgOQAFgKADgCIABgBIAAgDQAAgCADgCQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAABQACABABADIADARIAFAYIAEAPIAEALQAEALADAZIADATIADABQACAAABAEIABAFQABAEAEAFQACAFACAIIABAIIAAABQABACAAAHQgHAXgWAVQgPAOgeAUIhwBJQgiAVgPAGQgaAJgMAFQgPAHgTAPIggAaQgiAZgdgDIgBABgAAxD1IABACQAQgBAQgFQATgIAdgYQAfgZARgIQAOgGAdgKQALgFAQgKIB3hMQAfgUAOgNQAVgTAJgUIgCgBQgDgCgBgEQgCgNgFgQQgDgHAAgEIgBgLIgFgcIgPg1IgCgQIgKAMIgLANQgIAHgRALQgeAUgcAOIg0AYQgcALgOAHIgXALQgIADgPAAIgKADQgdAHgqAAQhaAAhWghQgpgQgkgXQgngcgUgMIgtgbQgggXgsgzIgLgNIAAAAIgHAAQgKgBgKARQgtBYAJBiQA/BLA6ApQATANAnAXIBJArQAYAOANAFIABAAIAXAXIADACQADAKAHAEQAIAFAEAHIAIAIQAFAFADABIAIABIBbgCQASAAAHAGg");
	this.shape.setTransform(45,25.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(44.8,25.4,1,1,0,0,0,44.8,25.4);
	this.instance.alpha = 0.648;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(-0.3,-0.3,90.8,51.7), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(44.8,25.4,1,1,0,0,0,44.8,25.4);

	this.instance_1 = new lib.Символ54();
	this.instance_1.parent = this;
	this.instance_1.setTransform(44.8,25.4,1,1,0,0,0,44.8,25.4);
	this.instance_1.alpha = 0.648;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006600").s().p("AGDFeQgPgDgZgLQgcgMgMgDQgOgEgTgBIgigBQgvAAgXgBQgngCgegGQgMgDhTgbQg4gTgnACQgRABgcAFQghAHgMABQgRABgIgEQgEgCgFgEIgJgHQgQgJgeANQgoAQggAYQgIAGgEgDQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIgjARQgWALgOACQgUAEgOgJQgNgKgGgXQgQg0APhBQAJgpAehGQANgfAJgNQANgRAdgUQAjgZAKgKQATgSAQgeQAKgRAQglIAqhfQAEgJADgCIABAAIACgCQAGgEALgCQAMgCADAFQADAFgCAIQgWBlgzBVQgNAWACAMQACAHAKAMQAVAYANAMQAVAUAUAKQAVAKAQgCQANgCAZgOQA8glArghIAsghQAYgQAxgWQA0gWAWgOQAPgJAZgSQARgNAGgGQALgNAKgeIAph0QAEgJADgCQAEgDAOABQAcAEAHANQACAGgBAOQgEBLgLBLQgFAqABARQABAdASA1IAhBgQAKAcAJALQAHAIALAEQALAEAJgEIAMgEQAGgBAEADQADAEgCAJQgHArgQAzQgJAfgWA9QgGASgIAFQgHAGgMAAIgMgBgAEQExQAaABATAGIAjAOQAWAKAOADQAPADAIgGQAFgEAFgMQAkhaAShhQgLAIgQgEQgQgDgLgKQgOgOgNgmIgXhCQgXhAgDgkQgCgWAFguIARikQgQgQgZADIgrB4QgMAjgMAOQgJAKgVAPQggAWgRAKIhXAoQgeAOgPAJQgMAHgiAcQgwAmg2AgQgaAPgRACQgZACgdgTQgogZgbgjQgLgPgCgKQgCgMAGgPQADgJALgRQAwhRAShfIgQAIIgCADQgOAWgmBXQgdBFgiAfQgKAIgdAVQgZARgMAOQgSAUgUA0QgXA9gHAlQgJA5AOAtQAGARALAHQANAHARgIIAOgIIAOgJQARgKAUgDQAFgBAEACIACABIAqgYQAbgQAQgDQAagHAUALIAJAHIAJAFQAJADASgEQBdgVBEAUIAvASQBPAdBqgBIAvAAg");
	this.shape.setTransform(47.8,34.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(48.1,34.3,1,1,0,0,0,48.1,34.3);
	this.instance.alpha = 0.648;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(-0.9,-1,97.4,70.3), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(48.1,34.3,1,1,0,0,0,48.1,34.3);

	this.instance_1 = new lib.Символ50();
	this.instance_1.parent = this;
	this.instance_1.setTransform(48.1,34.3,1,1,0,0,0,48.1,34.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.handdd_1();
	this.instance.parent = this;
	this.instance.setTransform(112.1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.3,x:116.1,y:47.7},2,cjs.Ease.get(-1)).to({rotation:10.7,x:120,y:50.4},2,cjs.Ease.get(1)).to({rotation:6.3,x:116.8,y:48.3},2,cjs.Ease.get(-1)).to({rotation:0,x:112.1,y:45},3,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.handdd_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25,47,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:-4.3,skewY:175.7,x:21.8,y:49.2},2,cjs.Ease.get(-1)).to({skewX:-8.7,skewY:171.3,x:18.5,y:51.3},2,cjs.Ease.get(1)).to({skewX:-5.1,skewY:174.9,x:21.1,y:49.7},2,cjs.Ease.get(-1)).to({skewX:0,skewY:180,x:25,y:47},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.1,92);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(43,102,1,1,0,0,0,43,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(2,1,86,171), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(75.9,36.1,1,1,0,0,0,75.9,36.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEA8BA").s().p("AgYB2QgKgJAAgOQAAgPAKgJQALgJANAAQAPAAALAJQAJAJABAPQgBAOgJAJQgLAJgPAAQgNAAgLgJgAgdA1IgFizIBFAAIgECzg");
	this.shape.setTransform(146.6,51.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEA8BA").s().p("AAmB8IAAhjIhLAAIAABjIhBAAIAAj3IBBAAIAABaIBLAAIAAhaIBBAAIAAD3g");
	this.shape_1.setTransform(127.9,51.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEA8BA").s().p("AgvB5QgXgJgRgQQgSgPgKgZQgLgZAAgfQAAgUAFgRQAFgSAIgPQAUgdAcgOQAcgOAhgBQAMAAALACQAMACALAEQAXAJARAQQAKAHAHALQAHAJAFANQAGANACANQADAPAAAOQAAA5gjAkQgkAjg4ABQgYgBgXgHgAgrgwQgJAIgFAMQgEANAAAPQAAAgASASQAKAJALAEQALAEALABQAZgBATgRQASgSAAggQABgOgFgNQgFgMgJgJQgJgJgLgFQgLgEgMAAQgaAAgSASg");
	this.shape_2.setTransform(100.8,51.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEA8BA").s().p("AgdB9IAAgYQgzgCghgaQghgaAAgvQAAguAhgaQAQgNAVgHQAVgHAagBIAAgYIA7AAIAAAYQAaABAWAGQAVAHAQANQAgAYAAAxQAAARgEAOQgFAOgIALQgQAXgZAKQgaALghABIAAAYgAAdAuQAagCAOgLQANgMAAgVQAAgrg1gCgAhEggQgNALAAAVQAAAVANAMQANALAbACIAAhbQgbABgNAMg");
	this.shape_3.setTransform(70.7,51.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEA8BA").s().p("AhqB9IAAj4IBBAAIAAB6ICAh7IAUAAIAAD4IhBAAIAAh/IiBCAg");
	this.shape_4.setTransform(41.5,51.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEA8BA").s().p("AhSB9QgOAAgRgDIABguQAUABAHgGQAGgGACgUIASipICtAAIAAD3IhAAAIAAi9Ig1AAIgKBxQgBASgDANQgDAOgFAIQgLASgVAFQgJACgLAAIgFAAg");
	this.shape_5.setTransform(14.1,51.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEA8BA").s().p("AhqB9IAAj4IBBAAIAAB6ICAh7IAUAAIAAD4IhBAAIAAh/IiBCAg");
	this.shape_6.setTransform(116.2,15.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEA8BA").s().p("AhiB8IAAj3IBsAAQAjAAAWAVQAWAVAAAjQAAALgGAMQgFAMgKAHQAIAEAFAEQAGAGAEAHQAIAOAAARQAAAhgVAWQgUAVglAAgAghBEIAxAAQARAAACgUQABgIgGgHQgFgGgKAAIgwAAgAghgZIAnAAQAJAAAFgGQAFgFAAgIQAAgJgFgHQgFgGgJAAIgnAAg");
	this.shape_7.setTransform(91.6,15.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEA8BA").s().p("AgvB4QgWgIgTgPQgRgQgLgZQgKgZAAgfQAAgTAFgSQAEgSAJgPQAUgeAcgOQAdgOAfABQANAAAMABQALACALAFQAXAIASAPQAJAIAHAKQAHAKAFANQAGANADAOQACANAAAPQAAA5gkAjQgjAkg4AAQgZAAgWgIgAgrgwQgJAIgEANQgFAMAAAPQAAAfASATQAJAIAMAFQAKAFAMAAQAZAAATgSQASgTAAgfQAAgPgEgMQgFgMgJgJQgJgJgLgFQgLgEgNAAQgZAAgSASg");
	this.shape_8.setTransform(65,15.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEA8BA").s().p("AhSB9QgOAAgRgDIABguQAUABAHgGQAGgGADgUIARipICtAAIAAD3IhAAAIAAi9Ig0AAIgKBxQgCASgDANQgDAOgGAIQgJASgWAFQgJACgLAAIgFAAg");
	this.shape_9.setTransform(36.8,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(0,0,153.1,73.2), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEA8BA").s().p("AgXB2QgKgJAAgOQAAgPAKgJQAJgJAOAAQAPAAAKAJQAKAJAAAPQAAAOgKAJQgKAJgPAAQgOAAgJgJgAgdA1IgGizIBGAAIgECzg");
	this.shape.setTransform(145.3,50.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEA8BA").s().p("AAmB8IAAhjIhLAAIAABjIhBAAIAAj3IBBAAIAABaIBLAAIAAhaIBBAAIAAD3g");
	this.shape_1.setTransform(126.6,50.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEA8BA").s().p("AgvB5QgWgJgTgQQgRgPgLgZQgKgZAAgfQAAgUAEgRQAFgSAKgPQASgdAdgOQAdgOAfgBQANAAAMACQALACALAFQAWAIATAQQAIAHAIALQAHAJAGANQAFANADANQACAPAAAOQAAA5gkAkQgjAjg4ABQgYgBgXgHgAgrgwQgJAIgEAMQgFANAAAPQAAAgASASQAKAJAKAEQAMAEALABQAZgBATgRQATgSAAggQgBgOgEgNQgFgMgJgJQgJgJgLgFQgLgEgNAAQgZAAgSASg");
	this.shape_2.setTransform(99.5,50.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEA8BA").s().p("AgdB9IAAgYQgzgCghgaQghgaAAgvQAAguAhgaQAQgNAVgHQAVgHAagBIAAgYIA7AAIAAAYQAaABAWAGQAVAHAQANQAgAYAAAxQAAARgEAOQgFAOgIALQgQAXgZAKQgaALghABIAAAYgAAdAuQAagCAOgLQANgMAAgVQAAgrg1gCgAhEggQgNALAAAVQAAAVANAMQANALAbACIAAhbQgbABgNAMg");
	this.shape_3.setTransform(69.4,50.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEA8BA").s().p("AhqB9IAAj4IBBAAIAAB6ICAh7IAUAAIAAD4IhBAAIAAh/IiBCAg");
	this.shape_4.setTransform(40.2,50.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEA8BA").s().p("AhSB9QgOAAgSgDIACguQAUABAHgGQAGgGADgUIAQipICvAAIAAD3IhBAAIAAi9Ig0AAIgKBxQgCASgDANQgEAOgFAIQgKASgVAFQgJACgLAAIgFAAg");
	this.shape_5.setTransform(12.8,50.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEA8BA").s().p("AhqB9IAAj4IBBAAIAAB6ICAh7IAUAAIAAD4IhBAAIAAh/IiBCAg");
	this.shape_6.setTransform(114.9,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEA8BA").s().p("AhiB8IAAj3IBsAAQAjAAAWAVQAWAVAAAjQAAALgGAMQgFAMgKAHQAIAEAFAEQAGAGAEAHQAIAOAAARQAAAhgVAWQgUAVglAAgAghBEIAxAAQARAAACgUQABgIgGgHQgFgGgKAAIgwAAgAghgZIAnAAQAJAAAFgGQAFgFAAgIQAAgJgFgHQgFgGgJAAIgnAAg");
	this.shape_7.setTransform(90.3,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEA8BA").s().p("AgvB4QgXgIgRgPQgSgQgKgZQgLgZAAgfQAAgTAEgSQAFgSAKgPQASgeAdgOQAdgOAgABQAMAAALABQAMACALAFQAXAIARAPQAJAIAIAKQAHAKAGANQAFANADAOQACANAAAPQAAA5gjAjQgkAkg4AAQgYAAgXgIgAgrgwQgJAIgFANQgEAMAAAPQAAAfASATQAJAIALAFQALAFAMAAQAZAAATgSQASgTABgfQAAgPgFgMQgFgMgJgJQgJgJgLgFQgLgEgMAAQgZAAgTASg");
	this.shape_8.setTransform(63.7,14.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEA8BA").s().p("AhSB9QgOAAgSgDIABguQAVABAGgGQAHgGACgUIARipICvAAIAAD3IhBAAIAAi9Ig0AAIgLBxQgBASgDANQgEAOgFAIQgJASgWAFQgJACgLAAIgFAAg");
	this.shape_9.setTransform(35.5,15);

	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(77.8,36.8,1,1,0,0,0,75.9,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(0,0,153.7,73), null);


(lib.Символ30 = function(mode,startPosition,loop) {
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

	// Слой 2 - копия
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(78.5,37.7,1,1,0,0,0,76.9,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({alpha:1},4).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(76.8,36.9,1,1,0,0,0,76.5,36.6);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},4).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,0.3,155,73.9);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(42.5,40.1,1,1,-15,0,0,42.5,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:40.1,rotation:-2},14,cjs.Ease.get(-1)).to({regX:42.6,regY:40,rotation:15,x:42.6},16,cjs.Ease.get(1)).to({rotation:1,y:40.2},15,cjs.Ease.get(-1)).to({regX:42.5,rotation:-15,x:42.5,y:40.1},16,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.9,-9.6,102.8,99.3);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ57();
	this.instance.parent = this;
	this.instance.setTransform(253.6,28,1,1,0,0,0,153.7,29.2);

	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(249.7,167.6,1.718,1.718,0,0,0,88.1,50.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(98.4,-1.2,308.9,254.5), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(366.4,210,1,1,0,0,0,366.4,210);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.641},9,cjs.Ease.get(-1)).to({alpha:0.238},10,cjs.Ease.get(1)).to({alpha:0.621},10,cjs.Ease.get(-1)).to({alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,733,420);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kist();
	this.instance.parent = this;
	this.instance.setTransform(-54.6,-23.4,1,1,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ49();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-27,51.6,1,1,34,0,0,43,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-106.2,-45.9,166.9,189.9), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(48.8,14.4,1,1,0,0,0,48.1,34.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ52(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.tits();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-0.2,-20.9,97.4,82.9), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ55();
	this.instance.parent = this;
	this.instance.setTransform(45,167.5,1,1,0,0,0,44.8,25.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ55(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.ple4o();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15,32,1,1,0,22.7,-157.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.body();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-60.4,0,161.4,195), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand.png
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(-323.4,259.8,1,1,0,0,0,86.5,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.5,x:-362,y:266.5},3).to({regY:6.9,rotation:72.4,x:-357.6,y:264.4},4).to({regY:6.8,rotation:-15.2,x:-314.8,y:257.9},18).to({regX:86.4,regY:6.9,rotation:-7.5,x:-319.2,y:258.9},13,cjs.Ease.get(-1)).to({regX:86.5,regY:6.8,rotation:0,x:-323.4,y:259.8},13,cjs.Ease.get(1)).to({rotation:5.5,x:-362,y:266.5},3).to({rotation:57.4,x:-336.5,y:272.3},4).to({rotation:-15.2,x:-314.8,y:257.9},18).to({regX:86.4,regY:6.9,rotation:-7.5,x:-319.2,y:258.9},13,cjs.Ease.get(-1)).to({regX:86.5,regY:6.8,rotation:0,x:-323.4,y:259.8},13,cjs.Ease.get(1)).to({rotation:5.5,x:-362,y:266.5},3).to({regY:6.9,rotation:72.4,x:-357.6,y:264.4},4).to({regY:6.8,rotation:-15.2,x:-314.8,y:257.9},18).to({regX:86.4,regY:6.9,rotation:-7.5,x:-319.2,y:258.9},13,cjs.Ease.get(-1)).to({regX:86.5,regY:6.8,rotation:0,x:-323.4,y:259.8},13,cjs.Ease.get(1)).wait(1));

	// letit
	this.instance_1 = new lib.fef();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-435.4,269.6,0.54,0.54,0,0,0,30.4,27.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({regY:27.8,scaleX:1,scaleY:1,rotation:-45,x:-384.2,y:185},4).to({regY:28.1,scaleX:1.47,scaleY:1.47,rotation:375,x:-355.2,y:-46.3},11).to({_off:true},1).wait(35).to({_off:false,regY:27.9,scaleX:0.54,scaleY:0.54,rotation:360,x:-435.4,y:269.6},0).to({scaleX:1,scaleY:1,x:-354.2,y:212.1},4).to({regY:28.1,scaleX:3.01,scaleY:3.01,rotation:735,x:68,y:-79.3},11).to({_off:true},1).wait(35).to({_off:false,regY:27.9,scaleX:0.54,scaleY:0.54,rotation:720,x:-435.4,y:269.6},0).to({regY:27.8,scaleX:1,scaleY:1,rotation:675,x:-384.2,y:185},4).to({regY:28.1,scaleX:1.47,scaleY:1.47,rotation:1095,x:-465.2,y:-46.3},11).wait(34));

	// head.png
	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-397.9,171.1,1,1,-6.5,0,0,44,70.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:43.9,rotation:-2,x:-397.7,y:173.1},12,cjs.Ease.get(-1)).to({regX:44,rotation:2.5,x:-397.2,y:175.3},13,cjs.Ease.get(1)).to({regY:70.9,rotation:-1.8,x:-397.6,y:173.2},13,cjs.Ease.get(-1)).to({regY:70.8,rotation:-6.5,x:-397.9,y:171.1},13,cjs.Ease.get(1)).to({regX:43.9,rotation:-2,x:-397.7,y:173.1},12,cjs.Ease.get(-1)).to({regX:44,rotation:2.5,x:-397.2,y:175.3},13,cjs.Ease.get(1)).to({regY:70.9,rotation:-1.8,x:-397.6,y:173.2},13,cjs.Ease.get(-1)).to({regY:70.8,rotation:-6.5,x:-397.9,y:171.1},13,cjs.Ease.get(1)).to({regX:43.9,rotation:-2,x:-397.7,y:173.1},12,cjs.Ease.get(-1)).to({regX:44,rotation:2.5,x:-397.2,y:175.3},13,cjs.Ease.get(1)).to({regY:70.9,rotation:-1.8,x:-397.6,y:173.2},13,cjs.Ease.get(-1)).to({regY:70.8,rotation:-6.5,x:-397.9,y:171.1},13,cjs.Ease.get(1)).wait(1));

	// ple4o.png
	this.instance_3 = new lib.Символ9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-353.7,197.5,1,1,0,0,0,2.2,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:13.6,rotation:30,x:-355.8,y:195.9},3).to({regX:2.1,regY:13.7,x:-356},4).to({scaleY:0.99,rotation:-9.7,y:201.1},18).to({regX:2,scaleY:1,rotation:-4.8,x:-354.9,y:199.5},13,cjs.Ease.get(-1)).to({regX:2.2,regY:13.5,scaleY:1,rotation:0,x:-353.7,y:197.5},13,cjs.Ease.get(1)).to({regY:13.6,rotation:30,x:-355.8,y:195.9},3).to({regX:2.1,regY:13.7,rotation:15,x:-352.4,y:196.8},4).to({scaleY:0.99,rotation:-9.7,x:-356,y:201.1},18).to({regX:2,scaleY:1,rotation:-4.8,x:-354.9,y:199.5},13,cjs.Ease.get(-1)).to({regX:2.2,regY:13.5,scaleY:1,rotation:0,x:-353.7,y:197.5},13,cjs.Ease.get(1)).to({regY:13.6,rotation:30,x:-355.8,y:195.9},3).to({regX:2.1,regY:13.7,x:-356},4).to({scaleY:0.99,rotation:-9.7,y:201.1},18).to({regX:2,scaleY:1,rotation:-4.8,x:-354.9,y:199.5},13,cjs.Ease.get(-1)).to({regX:2.2,regY:13.5,scaleY:1,rotation:0,x:-353.7,y:197.5},13,cjs.Ease.get(1)).wait(1));

	// kist.png
	this.instance_4 = new lib.Символ10();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-431.8,277.5,1,1,11.3,0,0,24.1,11.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:3.3,x:-431.6,y:273.7},12,cjs.Ease.get(-1)).to({rotation:-5.4,x:-431.1,y:269.4},13,cjs.Ease.get(1)).to({regX:24,regY:12,rotation:2.8,x:-431.5,y:273.6},13,cjs.Ease.get(-1)).to({regX:24.1,regY:11.9,rotation:11.3,x:-431.8,y:277.5},13,cjs.Ease.get(1)).to({rotation:3.3,x:-431.6,y:273.7},12,cjs.Ease.get(-1)).to({rotation:-5.4,x:-431.1,y:269.4},13,cjs.Ease.get(1)).to({regX:24,regY:12,rotation:2.8,x:-431.5,y:273.6},13,cjs.Ease.get(-1)).to({regX:24.1,regY:11.9,rotation:11.3,x:-431.8,y:277.5},13,cjs.Ease.get(1)).to({rotation:3.3,x:-431.6,y:273.7},12,cjs.Ease.get(-1)).to({rotation:-5.4,x:-431.1,y:269.4},13,cjs.Ease.get(1)).to({regX:24,regY:12,rotation:2.8,x:-431.5,y:273.6},13,cjs.Ease.get(-1)).to({regX:24.1,regY:11.9,rotation:11.3,x:-431.8,y:277.5},13,cjs.Ease.get(1)).wait(1));

	// tits.png
	this.instance_5 = new lib.Символ7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-403.9,232,1,1,0,0,0,44,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:234.2},12,cjs.Ease.get(-1)).to({y:236.5},13,cjs.Ease.get(1)).to({y:234.3},13,cjs.Ease.get(-1)).to({y:232},13,cjs.Ease.get(1)).to({y:234.2},12,cjs.Ease.get(-1)).to({y:236.5},13,cjs.Ease.get(1)).to({y:234.3},13,cjs.Ease.get(-1)).to({y:232},13,cjs.Ease.get(1)).to({y:234.2},12,cjs.Ease.get(-1)).to({y:236.5},13,cjs.Ease.get(1)).to({y:234.3},13,cjs.Ease.get(-1)).to({y:232},13,cjs.Ease.get(1)).wait(1));

	// body.png
	this.instance_6 = new lib.Символ3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-390.4,259.5,1,1,0,0,0,50.5,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleY:0.99,x:-390.7,y:260.3},12,cjs.Ease.get(-1)).to({scaleY:0.98,x:-390.9,y:261},13,cjs.Ease.get(1)).to({regY:97.6,scaleY:0.99,x:-390.7,y:260.3},13,cjs.Ease.get(-1)).to({regY:97.5,scaleY:1,x:-390.4,y:259.5},13,cjs.Ease.get(1)).to({scaleY:0.99,x:-390.7,y:260.3},12,cjs.Ease.get(-1)).to({scaleY:0.98,x:-390.9,y:261},13,cjs.Ease.get(1)).to({regY:97.6,scaleY:0.99,x:-390.7,y:260.3},13,cjs.Ease.get(-1)).to({regY:97.5,scaleY:1,x:-390.4,y:259.5},13,cjs.Ease.get(1)).to({scaleY:0.99,x:-390.7,y:260.3},12,cjs.Ease.get(-1)).to({scaleY:0.98,x:-390.9,y:261},13,cjs.Ease.get(1)).to({regY:97.6,scaleY:0.99,x:-390.7,y:260.3},13,cjs.Ease.get(-1)).to({regY:97.5,scaleY:1,x:-390.4,y:259.5},13,cjs.Ease.get(1)).wait(1));

	// leg.png
	this.instance_7 = new lib.Символ5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-370.1,345.2,1,1,0,0,0,22.8,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleY:0.96,x:-370.8,y:343.9},12,cjs.Ease.get(-1)).to({scaleY:0.92,x:-371.6,y:342.5},13,cjs.Ease.get(1)).to({scaleY:0.96,x:-370.9,y:343.8},13,cjs.Ease.get(-1)).to({scaleY:1,x:-370.1,y:345.2},13,cjs.Ease.get(1)).to({scaleY:0.96,x:-370.8,y:343.9},12,cjs.Ease.get(-1)).to({scaleY:0.92,x:-371.6,y:342.5},13,cjs.Ease.get(1)).to({scaleY:0.96,x:-370.9,y:343.8},13,cjs.Ease.get(-1)).to({scaleY:1,x:-370.1,y:345.2},13,cjs.Ease.get(1)).to({scaleY:0.96,x:-370.8,y:343.9},12,cjs.Ease.get(-1)).to({scaleY:0.92,x:-371.6,y:342.5},13,cjs.Ease.get(1)).to({scaleY:0.96,x:-370.9,y:343.8},13,cjs.Ease.get(-1)).to({scaleY:1,x:-370.1,y:345.2},13,cjs.Ease.get(1)).wait(1));

	// leg-1.png
	this.instance_8 = new lib.Символ6();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-428.9,337.4,1,1,0,0,0,35,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleY:0.99,x:-428.4,y:336.4},12,cjs.Ease.get(-1)).to({regY:22.5,scaleY:0.98,x:-427.9,y:335.4},13,cjs.Ease.get(1)).to({scaleY:0.99,x:-428.4,y:336.4},13,cjs.Ease.get(-1)).to({regY:22.4,scaleY:1,x:-428.9,y:337.4},13,cjs.Ease.get(1)).to({scaleY:0.99,x:-428.4,y:336.4},12,cjs.Ease.get(-1)).to({regY:22.5,scaleY:0.98,x:-427.9,y:335.4},13,cjs.Ease.get(1)).to({scaleY:0.99,x:-428.4,y:336.4},13,cjs.Ease.get(-1)).to({regY:22.4,scaleY:1,x:-428.9,y:337.4},13,cjs.Ease.get(1)).to({scaleY:0.99,x:-428.4,y:336.4},12,cjs.Ease.get(-1)).to({regY:22.5,scaleY:0.98,x:-427.9,y:335.4},13,cjs.Ease.get(1)).to({scaleY:0.99,x:-428.4,y:336.4},13,cjs.Ease.get(-1)).to({regY:22.4,scaleY:1,x:-428.9,y:337.4},13,cjs.Ease.get(1)).wait(1));

	// Слой 11
	this.instance_9 = new lib.fef();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-308.2,-46.6,1.889,1.889,15,0,0,30.3,27.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21).to({_off:false},0).to({regX:30.4,regY:28.1,scaleX:0.99,scaleY:0.99,rotation:375,x:-261.2,y:460.9},14).to({_off:true},16).wait(72).to({_off:false,regX:30.3,regY:27.9,scaleX:1.89,scaleY:1.89,x:-558.2,y:-46.6},0).to({regX:30.4,regY:28.1,scaleX:0.99,scaleY:0.99,rotation:735,x:-605.2,y:460.9},14).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-576,95.7,267.1,384.3);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(710.1,348.7,1.173,1.173,0,0,0,340,192.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:340.1,regY:192.5,scaleX:1.2,scaleY:1.2,x:710.2,y:348.6},14,cjs.Ease.get(-1)).to({regX:339.9,scaleX:1.24,scaleY:1.24,x:710},15,cjs.Ease.get(1)).to({scaleX:1.2,scaleY:1.2,x:710.1,y:348.7},15,cjs.Ease.get(-1)).to({regX:340,regY:192.6,scaleX:1.17,scaleY:1.17},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(311.1,122.7,797.9,451.8);


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


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(124.5,157.6,0.941,0.941,0,0,0,42.6,40.1);

	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(124,64.1,0.297,0.297,0,0,0,253,126);

	this.instance_2 = new lib.Символ24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(136.3,177.6,0.91,1,0,0,0,125,177.6);
	this.instance_2.alpha = 0.461;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(22.5,0,227.6,355.1), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.ttx = new lib.Символ30();
	this.ttx.parent = this;
	this.ttx.setTransform(75.9,36.1,1,1,0,0,0,75.9,36.1);

	this.timeline.addTween(cjs.Tween.get(this.ttx).to({regX:76,scaleX:0.91,scaleY:0.91,x:76,y:36.2},3,cjs.Ease.get(-1)).to({regY:36.2,scaleX:0.79,scaleY:0.79},4,cjs.Ease.get(1)).to({scaleX:0.88,scaleY:0.88},3,cjs.Ease.get(-1)).to({regX:75.9,regY:36.1,scaleX:1,scaleY:1,x:75.9,y:36.1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,0.3,155,73.9);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(514.9,58.5,1,1,0,0,0,75,159.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:64.3},14,cjs.Ease.get(-1)).to({y:70.5},15,cjs.Ease.get(1)).to({y:64.5},15,cjs.Ease.get(-1)).to({y:58.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.1,-5.3,267.1,384.3);


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


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(125,177.6,1,1,0,0,0,125,177.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(22.5,0,227.6,355.1), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(489.4,203.5,1,1,0,0,0,257.4,189.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(95.8,8.7,267.2,384.3), null);


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
	this.shape.graphics.f().s("#FF0000").ss(22.5,1,1).p("AWIAAQAAJMmeGeQmeGfpMAAQpLAAmemfQmemeAApMQAApLGemeQGemfJLAAQJMAAGeGfQGeGeAAJLg");
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


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sprite144();
	this.instance.parent = this;
	this.instance.setTransform(55.6,53.6,0.173,0.173,0,0,0,0.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109.6,108.5);


(lib.Символ36_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handdd
	this.instance_1 = new lib.Символ51();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.7,60,1,1,0,0,0,68.5,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.sprite144();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.2,-0.3,0.084,0.084);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36_1, new cjs.Rectangle(-66.8,-26.2,137.1,132.3), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(54.8,54.2,1,1,0,0,0,54.8,54.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:111.3},9,cjs.Ease.get(-1)).to({y:174.6},10,cjs.Ease.get(1)).to({y:114.4},10,cjs.Ease.get(-1)).to({y:54.2},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109.6,108.5);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(54.8,54.2,1,1,0,0,0,54.8,54.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:252.8},14,cjs.Ease.get(-1)).to({x:465},15,cjs.Ease.get(1)).to({x:259.9},15,cjs.Ease.get(-1)).to({x:54.8},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109.6,108.5);


(lib.Символ40_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.Символ36_1();
	this.instance.parent = this;
	this.instance.setTransform(-76.3,78.5,0.978,1,0,0,180,77,79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40_1, new cjs.Rectangle(-69.6,-27.3,134,132.3), null);


// stage content:
(lib.lif2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.pricel.mouseEnabled = false;
		this.pricel.visible = false;
		stage.canvas.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover() {
			this.pricel.visible = true;
			this.targ.visible = false;
		}
		
		stage.canvas.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout() {
				this.pricel.visible = false;
				this.targ.visible = true;
		}
		
		
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.pricel.x = stage.mouseX/window.devicePixelRatio;
			this.pricel.y = stage.mouseY/window.devicePixelRatio;
			
			this.fon.x = - stage.mouseX / 4/window.devicePixelRatio;
			this.fon.y = - stage.mouseY / 8/window.devicePixelRatio;
			
			this.girl.x =  -stage.mouseX / 14/window.devicePixelRatio;
			this.girl.y = - stage.mouseY / 24/window.devicePixelRatio;
		}
		
		/*this.goTXT = function(){
			this.tt.ttx.gotoAndPlay(1);
		}
		this.outTXT = function(){
			this.tt.ttx.gotoAndPlay(6);
		}*/
		
		
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 10
	this.pricel = new lib.Символ40_1();
	this.pricel.parent = this;
	this.pricel.setTransform(-128,54.6);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// Слой 11
	this.targ = new lib.Символ37();
	this.targ.parent = this;
	this.targ.setTransform(58.8,81.4,1,1,0,0,0,54.8,54.2);

	this.timeline.addTween(cjs.Tween.get(this.targ).wait(1));

	// Слой 14
	this.tt = new lib.Символ31();
	this.tt.parent = this;
	this.tt.setTransform(507.3,251.2,1,1,0,0,0,76.7,36.9);

	this.timeline.addTween(cjs.Tween.get(this.tt).wait(1));

	// Слой 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ARRZqMAAAgzHIiKAAMAAAAzHI/TAAMAAAgzHIiKAAMAAAAzHI/TAAMAAAgzTMBjTAAAMAAAAzTg");
	mask.setTransform(303.5,153);

	// Слой 1
	this.girl = new lib.Символ15();
	this.girl.parent = this;
	this.girl.setTransform(-19.8,-7.3,1,1,0,0,0,-6.5,1.4);

	var maskedShapeInstanceList = [this.girl];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 8
	this.dark = new lib.Символ35();
	this.dark.parent = this;
	this.dark.setTransform(506.1,165.6,1,1,0,0,0,125,177.6);

	var maskedShapeInstanceList = [this.dark];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.dark).wait(1));

	// Слой 13
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(300.4,152.6,1,1,0,0,0,326.9,190);
	this.instance.alpha = 0.871;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 12
	this.instance_1 = new lib.Символ40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(303.6,147.5,1,1,0,0,0,144.1,202.5);
	this.instance_1.alpha = 0.891;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(334.5,165.1,1,1,0,0,0,366.4,210);
	this.instance_2.alpha = 0.441;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 2
	this.fon = new lib.Символ1();
	this.fon.parent = this;
	this.fon.setTransform(-10.1,-3.9,1,1,0,0,0,340,192.5);

	var maskedShapeInstanceList = [this.fon];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(102.4,138.8,818.9,328.5);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/body.png?1496153585791", id:"body"},
		{src:"images/brassiere.png?1496153585791", id:"brassiere"},
		{src:"images/byustgalter.png?1496153585791", id:"byustgalter"},
		{src:"images/girl_lif_s.jpg?1496153585791", id:"girl_lif_s"},
		{src:"images/hand.png?1496153585791", id:"hand"},
		{src:"images/handdd.png?1496153585791", id:"handdd"},
		{src:"images/head1.png?1496153585791", id:"head1"},
		{src:"images/kist.png?1496153585791", id:"kist"},
		{src:"images/korzina.png?1496153585791", id:"korzina"},
		{src:"images/leg1.png?1496153585791", id:"leg1"},
		{src:"images/leg.png?1496153585791", id:"leg"},
		{src:"images/ple4o.png?1496153585791", id:"ple4o"},
		{src:"images/tits.png?1496153585791", id:"tits"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;