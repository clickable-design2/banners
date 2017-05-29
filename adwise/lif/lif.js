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


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,99);


(lib.kist = function() {
	this.initialize(img.kist);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,84);


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
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000","rgba(0,0,0,0)"],[0,0.498,1],-37,0,36.9,0).s().p("AlxfpMAAAg/RILjAAMAAAA/Rg");
	this.shape.setTransform(37,202.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","#000000","rgba(0,0,0,0)"],[0,0.498,1],-37,0,36.9,0).s().p("AlxfpMAAAg/RILjAAMAAAA/Rg");
	this.shape_1.setTransform(251.2,202.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(0,0,288.2,405), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.brassiere();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,0,85,80), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#74375D").s().p("AgYB2QgJgJgBgPQABgOAJgJQAKgJAOAAQAPAAALAJQAKAJAAAOQAAAPgKAJQgLAJgPAAQgOAAgKgJgAgdA1IgGizIBGAAIgECzg");
	this.shape_10.setTransform(146.8,52.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#74375D").s().p("AAmB8IAAhjIhLAAIAABjIhBAAIAAj3IBBAAIAABaIBLAAIAAhaIBBAAIAAD3g");
	this.shape_11.setTransform(128.1,51.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#74375D").s().p("AgvB4QgXgIgRgPQgSgQgKgZQgLgZAAgfQAAgTAEgSQAFgSAKgPQASgeAdgOQAdgOAgABQAMAAALABQAMACALAFQAXAIARAPQAJAIAIAKQAHAKAGANQAFANADAOQACANAAAPQAAA5gjAjQgkAkg4AAQgYAAgXgIgAgrgwQgJAIgFANQgEAMAAAPQAAAfASATQAJAIALAFQALAFAMAAQAZAAATgSQASgTABgfQAAgPgFgMQgFgMgJgJQgJgJgLgFQgLgEgMAAQgZAAgTASg");
	this.shape_12.setTransform(101,51.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#74375D").s().p("AgdB9IAAgYQgzgCghgaQghgaAAgvQAAguAhgaQAQgNAVgHQAVgHAagBIAAgYIA7AAIAAAYQAaABAWAGQAVAHAQANQAgAYAAAxQAAARgEAOQgFAOgIALQgQAXgZAKQgaALghABIAAAYgAAdAuQAagCAOgLQANgMAAgVQAAgrg1gCgAhEggQgNALAAAVQAAAVANAMQANALAbACIAAhbQgbABgNAMg");
	this.shape_13.setTransform(70.9,51.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#74375D").s().p("AhqB9IAAj4IBBAAIAAB6ICAh7IAUAAIAAD4IhBAAIAAh/IiBCAg");
	this.shape_14.setTransform(41.7,51.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#74375D").s().p("AhSB9QgOAAgSgDIABguQAVABAGgGQAHgGACgUIARipICvAAIAAD3IhBAAIAAi9Ig1AAIgKBxQgBASgDANQgEAOgEAIQgLASgVAFQgJACgLAAIgFAAg");
	this.shape_15.setTransform(14.3,51.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#74375D").s().p("AhqB9IAAj4IBBAAIAAB6ICAh7IAUAAIAAD4IhBAAIAAh/IiBCAg");
	this.shape_16.setTransform(116.4,16.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#74375D").s().p("AhiB8IAAj3IBsAAQAjAAAWAVQAWAVAAAjQAAALgGAMQgFAMgKAHQAIAEAFAEQAGAGAEAHQAIAOAAARQAAAhgVAWQgUAVglAAgAghBEIAxAAQARAAACgUQABgIgGgHQgFgGgKAAIgwAAgAghgZIAnAAQAJAAAFgGQAFgFAAgIQAAgJgFgHQgFgGgJAAIgnAAg");
	this.shape_17.setTransform(91.8,16.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#74375D").s().p("AgvB4QgXgIgRgQQgSgPgLgZQgKgZAAgfQAAgTAFgSQAFgSAIgPQAUgeAcgOQAcgOAgAAQANABALACQAMACALADQAXAJARAQQAKAHAHALQAHAKAFAMQAGAMACAOQADAOAAAPQAAA5gjAjQgkAlg4AAQgZAAgWgJgAgrgxQgJAJgFANQgEAMAAAPQAAAgASARQAKAKALAEQALAFALgBQAZABATgTQASgRAAggQABgOgFgNQgFgNgJgIQgJgJgLgEQgLgFgNAAQgYAAgTARg");
	this.shape_18.setTransform(65.2,16.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#74375D").s().p("AhSB9QgOAAgRgDIAAguQAVABAHgGQAGgGACgUIASipICtAAIAAD3IhAAAIAAi9Ig1AAIgKBxQgBASgDANQgDAOgFAIQgLASgVAFQgJACgLAAIgFAAg");
	this.shape_19.setTransform(37,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,0,153.3,73.8), null);


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


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.brassiere();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,85,80), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgqFvQgIAAgFgGQgFgGAAgHIAAhsQAAgTASAAIBVAAQASAAAAATIAABsQAAAHgFAGQgFAGgIAAgAgdCfQgIAAgGgGQgHgFAAgIIgOnnQAAgIAGgFQAGgGAIAAIBaAAQAIAAAGAGQAFAFAAAIIgOHnQAAAHgFAGQgGAFgIABg");
	this.shape.setTransform(563.8,151);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACtFoQgOAAgFgQIiLpAQgEgPgLAAQgLAAgDAPIiMJAQgDAQgPAAIhmAAQgRAAAAgQIABgEICdpaQAahhBrgBQBsABAZBhICfJeQAAAQgSAAg");
	this.shape_1.setTransform(520.6,151.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACtFoQgPABgEgRIgsi2IjcAAIgcB1IgRBHIgGAHIgLADIhmAAQgRAAAAgQIABgEICdpaQAahhBrgBQBsABAZBhICfJeQAAAQgSAAgABUA0IgxjKIgZhdIgKgEQgKAAgDAIIhHEjICoAAg");
	this.shape_2.setTransform(458.6,151.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ADDFlQgGAAgFgGIgEgNIAAm+QgBgGgCgEQgHALgKAUIhOCaQgLAUgWAAIhfAAQgWAAgKgQIhHiLQgQghgLgRQgCAEAAAGIAAG+IgFANQgEAGgHAAIhhAAQgQAAAAgPIAAqTQAAgQAMgLQALgMAQAAIBOAAQAZAAALAXIBjDIIAyBnQACADADACIAJgKIB3jxIAjhCIAMgJIAQgFIBPAAQAPAAAMAMQALALAAAQIAAKTQAAAPgQAAg");
	this.shape_3.setTransform(389.6,151.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ACpHIQgIABgFgGQgFgFAAgJIAAniQAAgHgFAAQgFAAgEAHIjUHTQgKAYgNAFQgNAGgXgBIhgAAQgQABgLgLQgMgMAAgQIAAqPQAAgTATAAIBSAAQATAAAAATIAAH3QAAAJAEAAQAFAAADgIIDensIAQgXQAJgIARAAIBpAAQAPAAAMAMQALALAAAPIAAKPQAAAJgGAFQgGAGgHgBgAhplWQgsglgOhCIgBgDQAAgIAJABIBJAAQAJAAADALQARA/A7AAQA8AAAQg/QADgLAKAAIBIAAQAKgBAAAIIgBADQgPBCgrAlQgsAlhEgBQhDABgsglg");
	this.shape_4.setTransform(317.4,141.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AjJEgQhIhNAAiSIAAiBQABiYBJhJQBLhKB8AAQCDAABHBNQBHBNABCRIAACBQgBCShHBNQhHBMiDAAQiCAAhHhMgAhojKQgiAtgBBdIAACBQABBeAiAtQAiAsBGAAQBHAAAigsQAigtAAheIAAiBQAAhdgigtQgigthHAAQhGAAgiAtg");
	this.shape_5.setTransform(250.7,151.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ACcFlQgIAAgGgGQgGgFAAgIIAAoQQAAgcgIgKQgIgKgYAAIi/AAQgYAAgIALQgIAKAAAbIAAIQQAAAIgGAFQgGAGgIAAIheAAQgIAAgGgGQgGgFAAgIIAAoQQAAhXApgnQApgoBcAAIC/AAQBcAAApAnQApAnAABYIAAIQQAAAIgGAFQgGAGgHAAg");
	this.shape_6.setTransform(183.9,151.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AigE8QgzgxAAhjIAAlOQAAhkAzgwQAxgxB5AAQBEAAA+AGQA+AHAFAFQAFAFAAALIAAA9QAAAIgGAGQgGAFgHAAIjDAAQgsAAgQASQgQATAAAuIAABnIEDAAQAIAAAFAGQAGAGAAAIIAABDQAAAIgGAGQgFAGgIAAIkDAAIAAB8QAAAuAQASQAQASAsAAIDDAAQAHAAAGAGQAGAGAAAIIAAA9QAAAMgGAEQgGAEg2AHQg3AGhRAAQh5AAgxgwg");
	this.shape_7.setTransform(98.8,151.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ACcFlQgIAAgGgGQgGgFAAgIIAAkmIkPAAIAAEmQAAAIgGAFQgGAGgIAAIheAAQgIAAgGgGQgGgFAAgIIAAqjQAAgIAGgFQAFgGAJAAIBeAAQAIAAAGAGQAGAFAAAIIAAEIIEPAAIAAkIQAAgIAGgFQAGgGAIAAIBfAAQAIAAAFAGQAGAFAAAIIAAKjQAAAIgGAFQgGAGgHAAg");
	this.shape_8.setTransform(36.3,151.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AifFjQhCgFgLgIQgLgIAAgOIAAqUQAAgIAHgGQAFgGAIAAIBgAAQAHAAAFAGQAGAGAAAIIAADzIBVgDQCGAABHA5QBGA3ABBuIAAARQAABJgfAyQggAxg+AZQg+AZhZAAgAhxAOIAADpIBVADQBLAAAjgbQAhgaAAg6IAAgRQAAg8gjgZQgjgahJAAg");
	this.shape_9.setTransform(416.3,49.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AguFlQgJAAgFgGQgGgFABgIIAApGIipAAQgTAAAAgRIAAhMQAAgIAGgFQAFgGAIAAIHVAAQAIAAAGAGQAFAFAAAIIAABMQAAARgTAAIioAAIAAJGQAAAIgGAFQgFAGgJAAg");
	this.shape_10.setTransform(356.6,48.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ACQFoQgIABgFgGQgFgFAAgJIAAkEIhWAEIgNAAIh6DjIgYAsIgLAEIh1AAQgLAAAAgLQAAgEACgEICWkYQiBgzAAiQIAAgJQAAhrBIg2QBHg3CEgBICDAGQBCAGALAHQALAIAAAPIAAKTQAAAJgFAFQgGAGgIgBgAhDjcQgkAYAAA1IAAAJQAAA8AhAaQAgAaBOAAIBWgDIAAjZIhWgDQhIAAgjAZg");
	this.shape_11.setTransform(295.7,48.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ACcFlQgIAAgGgGQgGgFAAgIIAAoQQAAgcgIgKQgIgKgYAAIi/AAQgYAAgIALQgIAKAAAbIAAIQQAAAIgGAFQgGAGgIAAIheAAQgIAAgGgGQgGgFAAgIIAAoQQAAhXApgnQApgoBcAAIC/AAQBcAAApAnQApAnAABYIAAIQQAAAIgGAFQgGAGgHAAg");
	this.shape_12.setTransform(232,48.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AjJEgQhHhNAAiSIAAiBQgBiYBLhJQBJhKB9AAQCCAABJBNQBGBNAACRIAACBQAACShGBNQhJBMiCAAQiCAAhHhMgAhojKQgjAtABBdIAACBQgBBeAjAtQAhAsBHAAQBIAAAhgsQAigtAAheIAAiBQAAhdgigtQghgthIAAQhHAAghAtg");
	this.shape_13.setTransform(165.2,48.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,578.2,210.1), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhExAnFMAAAhOJMCJiAAAMAAABOJg");
	this.shape.setTransform(338.1,184.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-102,-65.9,880.3,500.1), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C29DDD").s().p("Eg1pAqpQABgZgDgPQgEgSgLgKIAFgNQAOgoAUhPQAfh2AFhIQACgpgEgzQgCgbgIhBIgsloQgLhjgIgwQgQhngsjWQg2j8ghioQgKgwgCgcQgEgqALghQAMgmAhgWQAkgYAjANQAkANARAwQAMAgAEA5QAJCDAsDCIBIFBQAVB0AZDXIAtGLQAGA3ACAcQAEAugCAlQgDAvgMA4QgJAngSA+QgeBigaBBQgkBWgtBAQgkAygiATgEgd9ArTQhKgNiCgnQkahQiVhLQjkhxhsirQg1hTglh3QgWhGggiTIjow+QgJgqgCgYQgDglAIgcQAMghAdgUQAfgVAeAKQAdAJARAhQAMAXAKAqIEMTDQAcB/AYBCQAnBnA8BBQAsAvBGAnQAwAcBSAiQD6BjDgA3QBLATA1AHQBHAJA7gIQBQgLBVgxQA/gkBUhEQBzhcBFhMQBbhkAshoQArhhARiNIASj3QAmoZDWlvQAyhXBQhrICOi6QCBisCWjgQBTh9C0kbQAog+AUglQAfg5AOgyQAPg6gBhHQAAg3gLhLQgaishCjUQgghnhhkRQhVjtgniMQg6jRgPixQgDghACgTQADgdAOgSQAbgjA0AHQAxAGAeAlQAZAfAMAyQAGAbAIBBQAVCiA5DGQAiByBSDuQBQDmAjB5QA4DFATCjQANBvgFBZQgGBqggBXQgWA8gqBFQgZApg5BQQkCFwmMIwQhDBgggAxQg1BRgiBFQhPCbgqDGQgjCggPDUQgQDvgGAsQgTCfgxBwQg5CDh1B5QheBhiQBlQhpBJhRAnQhqAzhjAMQggADgjAAQhBAAhKgNgEAw2ADUQhPgMhagoQg6gZhmg4Qlbi5iwhsQkcivjJixQhwhkiUicQmim7lan3Qlbn3kHokQgPgggEgRQgHgcAIgVQANghApgJQAogIAiATQAdARAXAiQAQAWAVArQCOEbAlBHQBoDGBcCSQBpCpCUDFQBfB9C0DhQDQEGB1CDQC8DUCvCQQC6CaEcCmQCkBgFOC4QBIAqAmASQA/AcA2ALQBCAMA8gQQBBgRAmgtIAthCQAagnAdgNQAxgWAxArQAvApgDA6QgDAzglAwQghApg0AhQhPAxheATQg2ALg2AAQgoAAgngGg");
	this.shape.setTransform(359.4,290.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgpeBGLQihgrinjhQmzpYi2rfQi4rhBnraQA5lPAbirQAjkpgYjTQgSiOiTnBQh0luAVjnQARjLB6gpQBtgkBdBpQBQBXAtCNQBjE4AgCFQA/D2AMDQQAHBMAICWQAICCApBUQBNCmDOBnQCQBFD8A5QDXAvCFAHQDCAOCTg8QGSigCZrvQBtoSAdhyQBjlnCajoQASgcGvoCQELk6AmkRQAbjFhQj6QgUhCiXlvQimmOhlm9Qgvi9BNhJQAagXArgWQBDgcAKgIQBnhXAxgmQBYhIBDAhQAqAcAnBUQCrGLE9G3QCzD9GmIAQFVGWC6CNQCLBsELCWQEqCrByBQQCuB5B4AkQCvA9BphdQAugwATgbQAmgrAngHQBugbBcDCQEzK7CEK7QBKFwiKCnQhXBli2ApQhnAWjYAdQjlAskXCdQihBbk8DMQnYEgoLCHQjWA2nHBwQl0B6ikDvQglA3hKCNQhFB/g1A9QhPBbiYBSQhVAvixBSQrgFlnTNUIh1DYQhKCChJBLQhdBhhxAsQhOAehKAAQgtABgsgMgEg46gMWIAEgCQgEABgCgDg");
	mask.setTransform(384.9,450.2);

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.718)","rgba(0,0,0,0)"],[0,1],154.3,-89.1,-94,54.2).s().p("Eg8cgrvMA0zgefMBEGB1+Mg0zAefg");
	this.shape_1.setTransform(582.8,280);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBF0EF").s().p("EgpeBGLQihgrinjhQmzpYi2rfQi4rhBnraQA5lPAbirQAjkpgYjTQgSiOiTnBQh0luAVjnQARjLB6gpQBtgkBdBpQBQBXAtCNQBjE4AgCFQA/D2AMDQQAHBMAICWQAICCApBUQBNCmDOBnQCQBFD8A5QDXAvCFAHQDCAOCTg8QGSigCZrvQBtoSAdhyQBjlnCajoQASgcGvoCQELk6AmkRQAbjFhQj6QgUhCiXlvQimmOhlm9Qgvi9BNhJQAagXArgWQBDgcAKgIQBnhXAxgmQBYhIBDAhQAqAcAnBUQCrGLE9G3QCzD9GmIAQFVGWC6CNQCLBsELCWQEqCrByBQQCuB5B4AkQCvA9BphdQAugwATgbQAmgrAngHQBugbBcDCQEzK7CEK7QBKFwiKCnQhXBli2ApQhnAWjYAdQjlAskXCdQihBbk8DMQnYEgoLCHQjWA2nHBwQl0B6ikDvQglA3hKCNQhFB/g1A9QhPBbiYBSQhVAvixBSQrgFlnTNUIh1DYQhKCChJBLQhdBhhxAsQhOAehKAAQgtABgsgMgEg46gMWIAEgCQgEABgCgDg");
	this.shape_2.setTransform(384.9,450.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-1.7,-5.7,771.6,906.3), null);


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


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kist();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,28,84), null);


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


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tits();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,88,62), null);


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
	this.instance = new lib.head();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,88,99), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,101,195), null);


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


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(75.9,36.1,1,1,0,0,0,75.9,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:76,scaleX:0.91,scaleY:0.91,x:76,y:36.2},3,cjs.Ease.get(-1)).to({regY:36.2,scaleX:0.79,scaleY:0.79},4,cjs.Ease.get(1)).to({scaleX:0.88,scaleY:0.88},3,cjs.Ease.get(-1)).to({regX:75.9,regY:36.1,scaleX:1,scaleY:1,x:75.9,y:36.1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153.3,73.8);


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
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(253.7,28,1.045,1.045,0,0,0,147.2,27.9);

	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(249.7,167.6,1.718,1.718,0,0,0,88.1,50.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(98.4,-1.2,308.9,254.5), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(42.5,40,1,1,0,0,0,42.5,40);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,85,80), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25).wait(1));

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(328.8,113.8,0.177,0.177,0,0,0,289.1,105.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({regY:105,scaleX:1.14,scaleY:1.14,x:295.1,y:104.7,alpha:1},9).to({regY:105.1,scaleX:0.84,scaleY:0.84,y:104.8},4).to({regY:105,scaleX:1.06,scaleY:1.06,y:104.7},4).to({scaleX:0.91,scaleY:0.91,x:295},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(277.6,95.2,102.3,37.1);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(366.4,210,1,1,0,0,0,366.4,210);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.641},9,cjs.Ease.get(-1)).to({alpha:0.238},10,cjs.Ease.get(1)).to({alpha:0.621},10,cjs.Ease.get(-1)).to({alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,733,420);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_102 = function() {
		this.parent.parent.parent.goToX();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(102).call(this.frame_102).wait(68));

	// Слой 2
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(-366.4,240.1,0.304,0.304,15,0,0,384.8,450.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92).to({_off:false},0).to({regY:450.2,scaleX:2.17,scaleY:2.17,rotation:-18.9,x:-528.5,y:352.5},5).to({_off:true},15).wait(58));

	// head.png
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-373.9,171.1,1,1,-6.5,0,0,44,70.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:43.9,rotation:-2,x:-373.7,y:173.1},12,cjs.Ease.get(-1)).to({regX:44,rotation:2.5,x:-373.2,y:175.3},13,cjs.Ease.get(1)).to({regY:70.9,rotation:-1.8,x:-373.6,y:173.2},13,cjs.Ease.get(-1)).to({regY:70.8,rotation:-6.5,x:-373.9,y:171.1},13,cjs.Ease.get(1)).to({_off:true},57).wait(62));

	// hand.png
	this.instance_2 = new lib.Символ8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-299.4,259.8,1,1,0,0,0,86.5,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-7.3,x:-295.3,y:258.9},12,cjs.Ease.get(-1)).to({rotation:-15.2,x:-290.8,y:257.9},13,cjs.Ease.get(1)).to({regX:86.4,regY:6.9,rotation:-7.5,x:-295.2,y:258.9},13,cjs.Ease.get(-1)).to({regX:86.5,regY:6.8,rotation:0,x:-299.4,y:259.8},13,cjs.Ease.get(1)).wait(32).to({regY:6.9,rotation:36.8,x:-297,y:261.1},4).to({regX:86.4,regY:6.7,rotation:-117,x:-258.4,y:218.4},5).to({_off:true},16).wait(62));

	// Слой 2 - копия
	this.instance_3 = new lib.Символ16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-366.5,220.1,0.115,0.115,30,0,0,384.4,450.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(87).to({_off:false},0).to({regX:384.8,regY:450.4,scaleX:0.3,scaleY:0.3,rotation:15,x:-366.4,y:240.1},5).to({_off:true},1).wait(77));

	// tits.png
	this.instance_4 = new lib.Символ7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-379.9,232,1,1,0,0,0,44,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:234.2},12,cjs.Ease.get(-1)).to({y:236.5},13,cjs.Ease.get(1)).to({y:234.3},13,cjs.Ease.get(-1)).to({y:232},13,cjs.Ease.get(1)).to({_off:true},57).wait(62));

	// ple4o.png
	this.instance_5 = new lib.Символ9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-329.7,197.5,1,1,0,0,0,2.2,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:1,rotation:-4.5,x:-330.9,y:199.3},12,cjs.Ease.get(-1)).to({regX:2.1,regY:13.7,scaleY:0.99,rotation:-9.7,x:-332,y:201.1},13,cjs.Ease.get(1)).to({regX:2,scaleY:1,rotation:-4.8,x:-330.9,y:199.5},13,cjs.Ease.get(-1)).to({regX:2.2,regY:13.5,scaleY:1,rotation:0,x:-329.7,y:197.5},13,cjs.Ease.get(1)).wait(32).to({scaleY:1,skewX:-4.1,x:-328.7},4).to({scaleY:1.02,skewX:-48.4,skewY:-60,x:-320.5,y:199.3},5).to({_off:true},16).wait(62));

	// kist.png
	this.instance_6 = new lib.Символ10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-403.7,265.8,1,1,0,0,0,24.2,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:262.2},12,cjs.Ease.get(-1)).to({y:258.3},13,cjs.Ease.get(1)).to({y:262.1},13,cjs.Ease.get(-1)).to({y:265.8},13,cjs.Ease.get(1)).to({_off:true},57).wait(62));

	// body.png
	this.instance_7 = new lib.Символ3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-366.4,259.5,1,1,0,0,0,50.5,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleY:0.99,x:-366.7,y:260.3},12,cjs.Ease.get(-1)).to({scaleY:0.98,x:-366.9,y:261},13,cjs.Ease.get(1)).to({regY:97.6,scaleY:0.99,x:-366.7,y:260.3},13,cjs.Ease.get(-1)).to({regY:97.5,scaleY:1,x:-366.4,y:259.5},13,cjs.Ease.get(1)).to({_off:true},57).wait(62));

	// leg.png
	this.instance_8 = new lib.Символ5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-346.1,345.2,1,1,0,0,0,22.8,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleY:0.96,x:-346.8,y:343.9},12,cjs.Ease.get(-1)).to({scaleY:0.92,x:-347.6,y:342.5},13,cjs.Ease.get(1)).to({scaleY:0.96,x:-346.9,y:343.8},13,cjs.Ease.get(-1)).to({scaleY:1,x:-346.1,y:345.2},13,cjs.Ease.get(1)).to({_off:true},57).wait(62));

	// leg-1.png
	this.instance_9 = new lib.Символ6();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-404.9,337.4,1,1,0,0,0,35,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleY:0.99,x:-404.4,y:336.4},12,cjs.Ease.get(-1)).to({regY:22.5,scaleY:0.98,x:-403.9,y:335.4},13,cjs.Ease.get(1)).to({scaleY:0.99,x:-404.4,y:336.4},13,cjs.Ease.get(-1)).to({regY:22.4,scaleY:1,x:-404.9,y:337.4},13,cjs.Ease.get(1)).to({_off:true},57).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-439.9,95.7,155,384.3);


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
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(124.8,264,1,1,0,0,0,76.7,36.9);

	this.instance_1 = new lib.Символ28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(124.5,157.6,0.941,0.941,0,0,0,42.6,40.1);

	this.instance_2 = new lib.Символ25();
	this.instance_2.parent = this;
	this.instance_2.setTransform(124,64.1,0.297,0.297,0,0,0,253,126);

	this.instance_3 = new lib.Символ24();
	this.instance_3.parent = this;
	this.instance_3.setTransform(136.3,177.6,0.91,1,0,0,0,125,177.6);
	this.instance_3.alpha = 0.461;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(22.5,0,227.6,355.1), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_76 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(76).call(this.frame_76).wait(1));

	// Слой 3
	this.txt = new lib.Символ18();
	this.txt.parent = this;
	this.txt.setTransform(31.6,31.5,0.734,0.734,15,0,0,289.1,105.1);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(64).to({x:21.6,y:48.8,alpha:0},5).wait(8));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(59.1,-48.4,0.042,0.042,-15,0,0,46.6,40);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({regX:43.1,scaleX:0.37,scaleY:0.37,alpha:1},4).to({regX:42.9,regY:40.2,scaleX:0.26,scaleY:0.26,y:-48.3},2).to({regY:39.9,scaleX:0.28,scaleY:0.28,y:-48.4},3).wait(51).to({x:39.1,y:-13.8,alpha:0},5).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.3,147.6,0.085,0.085,-90,0,0,45.2,40.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({regX:42.9,regY:40.1,scaleX:0.75,scaleY:0.75,x:16.4,alpha:1},4).to({regX:42.7,scaleX:0.53,scaleY:0.53,x:16.5},2).to({regY:39.9,scaleX:0.58,scaleY:0.58,x:16.3},3).wait(52).to({x:-3.7,y:182.2,alpha:0},5).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_2 = new lib.Символ20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(169.6,32.9,0.093,0.093,-120,0,0,45.8,40.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).to({regX:42.9,regY:40.2,scaleX:0.82,scaleY:0.82,x:169.8,alpha:1},4).to({regX:42.8,regY:40.3,scaleX:0.57,scaleY:0.57,y:32.8},2).to({regY:40,scaleX:0.64,scaleY:0.64,x:169.6,y:32.9},3).wait(49).to({x:149.6,y:67.5,alpha:0},5).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_3 = new lib.Символ20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-21.2,-76.5,0.074,0.074,-120,0,0,46.4,40.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({regX:43,scaleX:0.65,scaleY:0.65,alpha:1},4).to({regX:42.8,regY:40.3,scaleX:0.46,scaleY:0.46,x:-21},2).to({regX:42.9,regY:40,scaleX:0.51,scaleY:0.51,x:-21.2},3).wait(53).to({x:-41.2,y:-41.9,alpha:0},5).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_4 = new lib.Символ20();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-158.7,-47.3,0.049,0.049,30,0,0,46.5,40);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({regX:42.9,regY:40.1,scaleX:0.44,scaleY:0.44,alpha:1},4).to({regX:42.6,regY:40.2,scaleX:0.3,scaleY:0.3,x:-158.8},2).to({regX:42.9,regY:40,scaleX:0.34,scaleY:0.34,x:-158.7},3).wait(52).to({x:-178.7,y:-12.7,alpha:0},5).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_5 = new lib.Символ20();
	this.instance_5.parent = this;
	this.instance_5.setTransform(247,52.8,0.049,0.049,30,0,0,46.5,40);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({regX:42.9,regY:40.1,scaleX:0.44,scaleY:0.44,alpha:1},4).to({regX:42.6,regY:40.2,scaleX:0.3,scaleY:0.3,x:246.9},2).to({regX:42.9,regY:40,scaleX:0.34,scaleY:0.34,x:247},3).wait(54).to({x:227,y:87.4,alpha:0},5).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_6 = new lib.Символ20();
	this.instance_6.parent = this;
	this.instance_6.setTransform(101.2,162.7,0.049,0.049,90,0,0,45.6,40.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({regX:42.6,regY:40.1,scaleX:0.44,scaleY:0.44,y:162.6,alpha:1},4).to({regX:42.5,regY:40.2,scaleX:0.3,scaleY:0.3,x:101.1,y:162.7},2).to({regX:42.7,regY:40.1,scaleX:0.34,scaleY:0.34,x:101.2},3).wait(52).to({x:81.2,y:197.3,alpha:0},5).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_7 = new lib.Символ20();
	this.instance_7.parent = this;
	this.instance_7.setTransform(214.2,133.4,0.11,0.11,90,0,0,44.4,40.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({regX:42.6,regY:40.2,scaleX:0.98,scaleY:0.98,x:214.1,alpha:1},4).to({regX:42.5,regY:40.4,scaleX:0.68,scaleY:0.68,x:213.9},2).to({regX:42.6,regY:40.1,scaleX:0.76,scaleY:0.76,x:214.1},3).wait(48).to({x:194.1,y:168,alpha:0},5).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2
	this.instance_8 = new lib.Символ20();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-123.1,-140,0.11,0.11,105,0,0,43.8,40.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10).to({_off:false},0).to({regX:42.5,regY:40.2,scaleX:0.98,scaleY:0.98,x:-123.2,y:-140.1,alpha:1},4).to({regY:40.3,scaleX:0.68,scaleY:0.68,x:-123.3},2).to({regY:40.1,scaleX:0.76,scaleY:0.76,x:-123.1},3).wait(52).to({x:-143.1,y:-105.5,alpha:0},5).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия
	this.instance_9 = new lib.Символ20();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-113.1,59,0.11,0.11,30,0,0,43.8,40.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(12).to({_off:false},0).to({regX:42.5,regY:40.2,scaleX:0.98,scaleY:0.98,x:-113.2,alpha:1},4).to({scaleX:0.68,scaleY:0.68,x:-113.1,y:59.1},2).to({regY:40,scaleX:0.76,scaleY:0.76,y:59},3).wait(50).to({x:-133.1,y:93.6,alpha:0},5).wait(1));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_10 = new lib.Символ20();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-218.7,24.7,0.08,0.08,75,0,0,43.9,39.6);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({_off:false},0).to({regX:42.5,regY:40.1,scaleX:0.71,scaleY:0.71,x:-218.8,y:24.6,alpha:1},4).to({scaleX:0.49,scaleY:0.49,y:24.7},2).to({regY:39.9,scaleX:0.55,scaleY:0.55,x:-218.7},3).wait(52).to({x:-238.7,y:59.3,alpha:0},5).wait(1));

	// Слой 1 - копия: 2 - копия
	this.instance_11 = new lib.Символ20();
	this.instance_11.parent = this;
	this.instance_11.setTransform(208.7,248.1,0.128,0.128,30,0,0,43.7,38.9);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(12).to({_off:false},0).to({regX:42.6,regY:40.1,scaleX:1.13,scaleY:1.13,x:208.6,y:248.2,alpha:1},4).to({regX:42.5,scaleX:0.79,scaleY:0.79},2).to({regX:42.6,regY:39.9,scaleX:0.88,scaleY:0.88,x:208.7,y:248.1},3).wait(50).to({x:188.7,y:282.7,alpha:0},5).wait(1));

	// Слой 1 - копия: 2
	this.instance_12 = new lib.Символ20();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-53.6,0.4,0.068,0.068,30,0,0,43.6,39);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10).to({_off:false},0).to({regX:42.5,regY:40.1,scaleX:0.61,scaleY:0.61,x:-53.8,alpha:1},4).to({scaleX:0.42,scaleY:0.42,x:-53.7,y:0.5},2).to({regX:42.6,regY:39.9,scaleX:0.47,scaleY:0.47,y:0.4},3).wait(52).to({x:-73.7,y:35,alpha:0},5).wait(1));

	// Слой 1 - копия
	this.instance_13 = new lib.Символ20();
	this.instance_13.parent = this;
	this.instance_13.setTransform(306.6,114.5,0.068,0.068,60,0,0,43.8,39.6);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10).to({_off:false},0).to({regX:42.6,regY:40,scaleX:0.61,scaleY:0.61,y:114.4,alpha:1},4).to({regX:42.5,regY:40.1,scaleX:0.42,scaleY:0.42,x:306.5,y:114.5},2).to({regX:42.7,regY:40,scaleX:0.47,scaleY:0.47,x:306.6},3).wait(52).to({x:286.6,y:149.1,alpha:0},5).wait(1));

	// Слой 1
	this.instance_14 = new lib.Символ20();
	this.instance_14.parent = this;
	this.instance_14.setTransform(42.5,40,0.146,0.146,0,0,0,42.4,40);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(6).to({_off:false},0).to({regX:42.5,scaleX:1.29,scaleY:1.29,x:42.6,y:40.1,alpha:1},4).to({scaleX:0.9,scaleY:0.9},2).to({scaleX:1,scaleY:1,x:42.5,y:40},3).wait(56).to({x:22.5,y:74.6,alpha:0},5).wait(1));

	// Слой 5
	this.instance_15 = new lib.Символ17();
	this.instance_15.parent = this;
	this.instance_15.setTransform(31.3,49.8,1,1,30,0,0,338.1,184.1);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(6).to({alpha:1},0).wait(65).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-474.9,-386.8,1012.4,873.2);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(514.9,58.5,1,1,0,0,0,75,159.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:64.3},14,cjs.Ease.get(-1)).to({y:70.5},15,cjs.Ease.get(1)).to({y:64.5},15,cjs.Ease.get(-1)).to({y:58.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5.3,155,384.3);


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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(125,177.6,1,1,0,0,0,125,177.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22.5,0,227.6,355.1);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(453.4,203.5,1,1,0,0,0,257.4,189.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-5.4,-15.3,663.1,408.3), null);


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
(lib.lif = function(mode,startPosition,loop) {
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
			
		//	this.girl.x =  -stage.mouseX / 14/window.devicePixelRatio;
		//	this.girl.y = - stage.mouseY / 24/window.devicePixelRatio;
		}
		
		
		
		
		this.goToX = function(){
			this.lif.txt.gotoAndPlay(2);
			this.lif.gotoAndPlay(2);
			this.dark.gotoAndPlay(2);
		}
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// txt
	this.lif = new lib.Символ19();
	this.lif.parent = this;
	this.lif.setTransform(300,150.6,1,1,-30,0,0,42.5,40);

	this.timeline.addTween(cjs.Tween.get(this.lif).wait(1));

	// Слой 11
	this.targ = new lib.Символ37();
	this.targ.parent = this;
	this.targ.setTransform(58.8,81.4,1,1,0,0,0,54.8,54.2);

	this.timeline.addTween(cjs.Tween.get(this.targ).wait(1));

	// Слой 10
	this.pricel = new lib.Символ40_1();
	this.pricel.parent = this;
	this.pricel.setTransform(-382,75);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// Слой 1
	this.girl = new lib.Символ15();
	this.girl.parent = this;
	this.girl.setTransform(-26.5,0.4,1,1,0,0,0,-6.5,1.4);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ARRZqMAAAgzHIiKAAMAAAAzHI/TAAMAAAgzHIiKAAMAAAAzHI/TAAMAAAgzTMBjTAAAMAAAAzTg");
	mask.setTransform(303.5,153);

	// Слой 13
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(300.4,152.6,1,1,0,0,0,326.9,190);
	this.instance.alpha = 0.602;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 12
	this.instance_1 = new lib.Символ40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(300.4,147.5,1,1,0,0,0,144.1,202.5);
	this.instance_1.alpha = 0.602;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 8
	this.dark = new lib.Символ35();
	this.dark.parent = this;
	this.dark.setTransform(506.1,165.6,1,1,0,0,0,125,177.6);

	var maskedShapeInstanceList = [this.dark];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.dark).wait(1));

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
p.nominalBounds = new cjs.Rectangle(-151.6,64.6,1187.1,500.1);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/body.png?1496048679520", id:"body"},
		{src:"images/brassiere.png?1496048679520", id:"brassiere"},
		{src:"images/girl_lif_s.jpg?1496048679520", id:"girl_lif_s"},
		{src:"images/hand.png?1496048679520", id:"hand"},
		{src:"images/handdd.png?1496048679520", id:"handdd"},
		{src:"images/head.png?1496048679520", id:"head"},
		{src:"images/kist.png?1496048679520", id:"kist"},
		{src:"images/leg1.png?1496048679520", id:"leg1"},
		{src:"images/leg.png?1496048679520", id:"leg"},
		{src:"images/ple4o.png?1496048679520", id:"ple4o"},
		{src:"images/tits.png?1496048679520", id:"tits"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;