(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 50,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1478071451383", id:"back"},
		{src:"images/cards.png?1478071451383", id:"cards"},
		{src:"images/chip.png?1478071451383", id:"chip"},
		{src:"images/dol.png?1478071451383", id:"dol"},
		{src:"images/logo.png?1478071451383", id:"logo"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,687,356);


(lib.cards = function() {
	this.initialize(img.cards);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,222);


(lib.chip = function() {
	this.initialize(img.chip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,65);


(lib.dol = function() {
	this.initialize(img.dol);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,281,124);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,445,118);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cards();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.522,0.522);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93.9,115.8);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,445,118);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,687,356);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dol();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,281,124);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5F0000").s().p("AwQDcQgTAAgBgTIAAmQQABgUATAAMAghAAAQATAAABAUIAAGQQgBATgTAAg");
	this.shape.setTransform(106.1,22.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212.2,44.2);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E12130").s().p("AwQDcQgTAAgBgTIAAmQQABgUATAAMAghAAAQATAAABAUIAAGQQgBATgTAAg");
	this.shape.setTransform(106.1,22.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212.2,44.2);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgtGWIAAg0QgegGgXgPQgXgOgPgYQgQgVgIgfQgHgdAAgmIAAgwIBrAAIAAA4QAAAmAQARQAOAPAcAAQAbAAAPgPQAPgRAAgmQAAgbgJgXQgJgUgRgUQgPgTg6gzQg1gpgXgkQgRgagIgcQgKggAAgkQAAglAHgdQAIgeAPgWQAPgXAWgOQAXgOAdgIIAAg1IBbAAIAAA1QAeAHAXAOQAWAPAQAWQAPAXAIAdQAHAeAAAlIAAAWIhrAAIAAgdQAAgmgOgRQgPgRgbAAQgaAAgOARQgPARAAAmQAAAaAKAXQAIAUARAVQAPASA7AzQA0ApAYAkQAQAaAJAcQAJAgAAAkQAAAlgHAeQgIAegQAWQgPAYgXAOQgXAPgeAGIAAA0g");
	this.shape.setTransform(105.5,44.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhIFkQgggLgWgYQgWgXgLgiQgMghAAgsIAAl1QAAgqAMgjQALgiAWgWQAWgYAggMQAggMAoAAQApAAAgAMQAgAMAWAYQAWAWALAiQAMAjAAAqIAAF1QAAAsgMAhQgLAigWAXQgWAYggALQggAMgpAAQgoAAgggMgAgpj3QgQARAAAlIAAGDQAAAlAQASQAOARAbAAQAcAAAPgRQAPgSAAglIAAmDQAAglgPgRQgPgRgcAAQgbAAgOARg");
	this.shape_1.setTransform(64.8,44.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgLFoIAAokIhYAAIAAhQQAgAAAWgHQAVgHAOgNQARgSARguIBMAAIAALPg");
	this.shape_2.setTransform(24.9,44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129.9,110.3);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGBYQgGgDgGgGQgFgGgDgIQgDgIAAgLIAAgiIgVAAIAABNIgcAAIAAixIAcAAIAABNIAVAAIAAgiQAAgLADgIQADgIAFgGQAGgGAGgDQAIgDAKAAQAKAAAIADQAIADAGAGQAFAGADAIQADAIAAALIAABbQAAALgDAIQgDAIgFAGQgGAGgIADQgIADgKAAQgKAAgIgDgAANg8QgEAEAAAJIAABfQAAAJAEAEQAEAEAHAAQAHAAAEgEQAEgEAAgJIAAhfQAAgJgEgEQgEgEgHAAQgHAAgEAEg");
	this.shape.setTransform(133.5,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATBZIAAh8IgMAqIgVBSIgdAAIAAixIAZAAIAABvIAKglIAVhKIAfAAIAACxg");
	this.shape_1.setTransform(120.4,11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWBlIAAgYIhHAAIAAixIAcAAIAACXIAeAAIAAiXIAdAAIAACYIAMAAIAAAxg");
	this.shape_2.setTransform(109.4,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUBZIgFghIggAAIgFAhIgaAAIAdixIAnAAIAcCxgAAMAgIgMhYIgNBYIAZAAg");
	this.shape_3.setTransform(98.2,11.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoBZIAAixIAoAAQAKAAAIADQAHADAGAGQAFAFADAIQACAJAAAKIAAAYQAAAKgCAIQgDAHgFAFQgGAGgHADQgIADgKAAIgMAAIAABDgAgMgCIAMAAQAGAAAEgEQADgEAAgJIAAgaQAAgKgDgEQgEgDgGAAIgMAAg");
	this.shape_4.setTransform(88.5,11.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMBZIAAiXIgeAAIAAgaIBVAAIAAAaIgdAAIAACXg");
	this.shape_5.setTransform(78.9,11.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRBYQgHgDgGgGQgFgGgDgIQgCgIAAgLIAAhbQAAgLACgIQADgIAFgGQAGgGAHgDQAIgDAJAAQAKAAAIADQAHADAGAGQAFAGADAIQACAIAAALIAAARIgaAAIAAgTQAAgJgEgEQgEgEgHAAQgFAAgDAEQgEAEAAAJIAABfQAAAJAEAEQADAEAFAAQAHAAAEgEQAEgEAAgJIAAgaIAaAAIAAAYQAAALgCAIQgDAIgFAGQgGAGgHADQgIADgKAAQgJAAgIgDg");
	this.shape_6.setTransform(69.4,11.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATBZIAAh8IgMAqIgVBSIgdAAIAAixIAZAAIAABvIAKglIAVhKIAfAAIAACxg");
	this.shape_7.setTransform(59.1,11.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjBZIAAixIBHAAIAAAaIgsAAIAACXg");
	this.shape_8.setTransform(49.1,11.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AglBZIAAixIBLAAIAAAaIgvAAIAAAyIAlAAIAAAXIglAAIAAA0IAvAAIAAAag");
	this.shape_9.setTransform(39.7,11.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoBZIAAixIAoAAQAKAAAIADQAHADAGAGQAFAFADAIQACAJAAAKIAAAYQAAAKgCAIQgDAHgFAFQgGAGgHADQgIADgKAAIgMAAIAABDgAgMgCIAMAAQAGAAAEgEQADgEAAgJIAAgaQAAgKgDgEQgEgDgGAAIgMAAg");
	this.shape_10.setTransform(30.5,11.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAUBZIgEghIghAAIgFAhIgZAAIAcixIAnAAIAcCxgAALAgIgLhYIgOBYIAZAAg");
	this.shape_11.setTransform(16.2,11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRBYQgHgDgFgGQgGgGgCgIQgDgIgBgLIAAgUIAbAAIAAAWQAAAJAEAEQAEAEAGAAQAGAAADgEQAFgFAAgLIAAgOQAAgMgFgFQgFgGgHAAIgHAAIAAgXIAJAAQAGAAAEgEQAFgFAAgKIAAgKQAAgLgFgFQgDgEgGAAQgGAAgEAEQgEAEAAAJIAAAPIgaAAIAAgNQAAgLADgIQACgJAGgFQAFgGAHgDQAIgDAJAAQAKAAAHADQAIADAGAGQAFAGACAIQAEAIAAALIAAAFQAAAOgGAJQgEAJgKAEQAFADAEABQAEAEACAFQAEAJABAOIAAAOQAAALgEAIQgCAIgFAGQgGAGgIADQgHADgKAAQgJAAgIgDg");
	this.shape_12.setTransform(6,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142.1,27.3);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABODYIAAk1IgvE1Ig+AAIgzkwIAAEwIg8AAIAAmvIBfAAIAwExIAvkxIBfAAIAAGvg");
	this.shape.setTransform(124,26.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAuDYIAAkvIgcBpIg3DGIhGAAIAAmvIA9AAIAAEQIAZhdIA2izIBKAAIAAGvg");
	this.shape_1.setTransform(94.2,26.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhjDYIAAmvIBjAAQAYAAATAHQATAGANAOQAMAOAHAUQAGAUAAAaIAAA4QAAAagGAUQgHASgMAOQgNANgTAHQgTAHgYAAIggAAIAACjgAgggGIAgAAQAPAAAJgKQAIgJAAgXIAAhBQAAgWgIgKQgJgIgPAAIggAAg");
	this.shape_2.setTransform(70.1,26.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAyDYIgMhOIhSAAIgLBOIg/AAIBFmvIBiAAIBGGvgAAdBPIgfjaIghDaIBAAAg");
	this.shape_3.setTransform(45,26.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABHD2IAAg7IiPAAIAAA7IhCAAIAAh4IAaAAQAJgLAEgNQAEgMAAgUIAPk7IC9AAIAAFzIAeAAIAAB4gAgcBEQgBAYgFAOQgEAMgJAIIBYAAIAAk1Ig5AAg");
	this.shape_4.setTransform(17.1,29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143.1,66.3);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(47,57.9,1,1,0,0,0,47,57.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(77).to({_off:false},0).to({rotation:360,x:-273,y:587.9},39,cjs.Ease.get(-1)).wait(1));

	// Слой 1 - копия: 2
	this.instance_1 = new lib.Символ52();
	this.instance_1.parent = this;
	this.instance_1.setTransform(47,57.9,1,1,0,0,0,47,57.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48).to({_off:false},0).to({rotation:360,x:397,y:586.9},39,cjs.Ease.get(-1)).to({_off:true},1).wait(29));

	// Слой 1 - копия
	this.instance_2 = new lib.Символ52();
	this.instance_2.parent = this;
	this.instance_2.setTransform(47,57.9,1,1,0,0,0,47,57.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({rotation:360,x:-43,y:587.9},39,cjs.Ease.get(-1)).to({_off:true},1).wait(58));

	// Слой 1
	this.instance_3 = new lib.Символ52();
	this.instance_3.parent = this;
	this.instance_3.setTransform(47,57.9,1,1,0,0,0,47,57.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:360,x:167,y:587.9},39,cjs.Ease.get(-1)).to({_off:true},1).wait(77));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93.9,115.8);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(47,57.9,1,1,0,0,0,47,57.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93.9,115.8);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYDdIAAgdQgQgDgNgIQgMgIgIgMQgJgMgEgRQgEgQAAgUIAAgbIA6AAIAAAfQAAAUAJAKQAIAIAPAAQANAAAIgIQAJgKAAgUQAAgOgFgNQgFgLgJgLQgIgKgfgcQgdgVgNgUQgJgOgEgPQgFgSAAgUQAAgTAEgQQAEgRAIgMQAIgMAMgIQAMgIAQgDIAAgeIAxAAIAAAeQAQADANAIQAMAIAIAMQAJAMAEAQQAEAQAAAUIAAANIg6AAIAAgQQAAgVgIgJQgIgJgPAAQgNAAgIAJQgIAJAAAVQAAAOAFAMQAFAMAJALQAIAKAfAbQAdAWANAUQAJANAEAQQAFARAAAUQAAAUgEAQQgEAQgJANQgIAMgMAIQgNAIgQADIAAAdg");
	this.shape.setTransform(356.8,-19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmDBQgSgGgMgNQgMgMgGgSQgGgTAAgXIAAjLQAAgXAGgSQAGgTAMgNQAMgMASgHQARgGAVAAQAWAAASAGQARAHAMAMQAMANAGATQAGASAAAXIAADLQAAAXgGATQgGASgMAMQgMANgRAGQgSAHgWAAQgVAAgRgHgAgWiGQgIAJAAAVIAADRQAAAUAIAKQAIAJAOAAQAPAAAIgJQAIgKAAgUIAAjRQAAgVgIgJQgIgJgPAAQgOAAgIAJg");
	this.shape_1.setTransform(334.7,-19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGDDIAAkpIgvAAIAAgrQARAAAMgEQALgEAIgHQAIgKAJgYIAqAAIAAGFg");
	this.shape_2.setTransform(313,-19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhaDDIAAmFIA+AAIAACTIAcAAQAWAAARAGQARAHAMAMQALAMAGAQQAGASAAAYIAAAzQAAAXgGASQgGATgLAMQgMAMgRAGQgRAHgWgBgAgcCLIAcAAQAOABAHgJQAIgIAAgVIAAg7QAAgUgIgIQgHgIgOAAIgcAAg");
	this.shape_3.setTransform(282.2,-19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdDDIAAlOIhBAAIAAg3IC9AAIAAA3IhBAAIAAFOg");
	this.shape_4.setTransform(260.9,-19.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAqDDIAAkRIgZBeIgyCzIg/AAIAAmFIA3AAIAAD1IAWhTIAwiiIBEAAIAAGFg");
	this.shape_5.setTransform(239.1,-19.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAhDDIAAidQgJAKgPAGQgMAGgOgBQgTAAgOgGQgOgGgLgNQgJgLgFgRQgFgOAAgVIAAilIA+AAIAACgQgBATALALQAKAHAOAAQAPAAAHgIQAJgLAAgUIAAieIA+AAIAAGFg");
	this.shape_6.setTransform(215.3,-19.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhPDDIAAg3QAaACALgGQAOgHAEgUIAAgEIhVksIA9AAIAiCGIARBaIAOhaIAdiGIBAAAIhCEiQgGAcgIASQgJAVgNAMQgMANgVAFQgPAEgVAAIgSgBg");
	this.shape_7.setTransform(192.5,-19.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhuDEIAAg4QAXAAAGgHQAJgHAAgaIALknICsAAIAAGGIg/AAIAAlOIg0AAIgHDrQAAAbgFATQgGATgLAMQgLAMgQAFQgRAGgXAAg");
	this.shape_8.setTransform(167.5,-19.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmDBQgSgGgMgNQgMgMgGgSQgGgTAAgXIAAjLQAAgXAGgSQAGgTAMgNQAMgMASgHQARgGAVAAQAWAAASAGQARAHAMAMQAMANAGATQAGASAAAXIAADLQAAAXgGATQgGASgMAMQgMANgRAGQgSAHgWAAQgVAAgRgHgAgWiGQgIAJAAAVIAADRQAAAUAIAKQAIAJAOAAQAPAAAIgJQAIgKAAgUIAAjRQAAgVgIgJQgIgJgPAAQgOAAgIAJg");
	this.shape_9.setTransform(144.8,-19.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAiDDIAAlOIhEAAIAAFOIg+AAIAAmFIDBAAIAAGFg");
	this.shape_10.setTransform(121.8,-19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(235.9,-22.5,1.951,1.951,0,0,0,106.1,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 17
	this.instance_1 = new lib.Символ18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(235.5,-17.2,1.951,1.951,0,0,0,106,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.7,-65.6,414.3,91.5);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 36
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(1031.1,-38.8,0.776,0.776,0,0,0,260.1,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({y:-190.4},14,cjs.Ease.get(1)).wait(38).to({scaleX:0.75,scaleY:0.75},7,cjs.Ease.get(-1)).to({scaleX:0.73,scaleY:0.73},6,cjs.Ease.get(1)).to({regX:260,scaleX:0.75,scaleY:0.75},5,cjs.Ease.get(-1)).to({regX:260.1,scaleX:0.78,scaleY:0.78},6,cjs.Ease.get(1)).to({scaleX:0.75,scaleY:0.75},7,cjs.Ease.get(-1)).to({scaleX:0.73,scaleY:0.73},6,cjs.Ease.get(1)).to({regX:260,scaleX:0.75,scaleY:0.75,y:-190.3},5,cjs.Ease.get(-1)).to({regX:260.1,scaleX:0.78,scaleY:0.78,y:-190.4},6,cjs.Ease.get(1)).to({scaleX:0.75,scaleY:0.75},7,cjs.Ease.get(-1)).to({scaleX:0.73,scaleY:0.73,y:-190.3},6,cjs.Ease.get(1)).to({regX:260,scaleX:0.75,scaleY:0.75},5,cjs.Ease.get(-1)).to({regX:260.1,scaleX:0.78,scaleY:0.78,y:-190.4},6,cjs.Ease.get(1)).to({scaleX:0.75,scaleY:0.75},7,cjs.Ease.get(-1)).to({scaleX:0.73,scaleY:0.73,y:-190.3},6,cjs.Ease.get(1)).to({regX:260,scaleX:0.75,scaleY:0.75},5,cjs.Ease.get(-1)).to({regX:260.1,scaleX:0.78,scaleY:0.78,y:-190.4},6,cjs.Ease.get(1)).to({scaleX:0.75,scaleY:0.75},7,cjs.Ease.get(-1)).to({scaleX:0.73,scaleY:0.73,y:-190.3},5,cjs.Ease.get(1)).wait(16));

	// Символ 37
	this.instance_1 = new lib.Символ37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(944.6,-658.6,1.024,1.024,7.2,0,0,281.2,124);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:123.9,rotation:-7.6,x:1218.4,y:-460.7},12,cjs.Ease.get(-1)).to({regX:281.3,regY:124,rotation:-12.7,x:1309.7,y:-405.3},11,cjs.Ease.get(1)).to({regX:281.2,rotation:-3.3,x:1158.9,y:-341.1},13,cjs.Ease.get(-1)).to({regX:281.1,regY:123.8,rotation:7,x:989.4,y:-304.7},13,cjs.Ease.get(1)).to({regX:281.2,regY:123.9,rotation:3.3,x:1075.1,y:-288.7},13,cjs.Ease.get(-1)).to({regX:281.1,regY:124,rotation:0,x:1151.1,y:-274.3},14,cjs.Ease.get(1)).wait(124));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(658.9,-820.7,514.1,759.3);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(354,-49.1,1,1,0,0,0,47,57.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.chip();
	this.instance_1.parent = this;
	this.instance_1.setTransform(620,298);

	this.instance_2 = new lib.chip();
	this.instance_2.parent = this;
	this.instance_2.setTransform(620,273);

	this.instance_3 = new lib.chip();
	this.instance_3.parent = this;
	this.instance_3.setTransform(631,304);

	this.instance_4 = new lib.chip();
	this.instance_4.parent = this;
	this.instance_4.setTransform(644,284);

	this.instance_5 = new lib.chip();
	this.instance_5.parent = this;
	this.instance_5.setTransform(137,290);

	this.instance_6 = new lib.chip();
	this.instance_6.parent = this;
	this.instance_6.setTransform(345,338);

	this.instance_7 = new lib.chip();
	this.instance_7.parent = this;
	this.instance_7.setTransform(614,77);

	this.instance_8 = new lib.chip();
	this.instance_8.parent = this;
	this.instance_8.setTransform(84,164);

	this.instance_9 = new lib.chip();
	this.instance_9.parent = this;
	this.instance_9.setTransform(69,133);

	this.instance_10 = new lib.chip();
	this.instance_10.parent = this;
	this.instance_10.setTransform(84,99);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Слой 3
	this.instance_11 = new lib.Символ47();
	this.instance_11.parent = this;
	this.instance_11.setTransform(381.6,225.2,0.824,0.824,0,0,0,222.5,59.1);
	this.instance_11.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 1
	this.instance_12 = new lib.Символ46();
	this.instance_12.parent = this;
	this.instance_12.setTransform(379.5,225,1,1,0,0,0,343.5,178);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36,-107,687,510);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMBHIAAg6IgIAAQgGAAgDAEQgDAEAAAKIAAAWQAAAMgCAGIgXAAQACgGAAgMIAAgVQAAgMADgHIAFgHQADgDAEgCQgHgBgEgHQgDgIAAgLIAAgLQAAgIABgGQACgGAEgEQAEgFAHgCQAGgCAHAAIAhAAIAACNgAgFguQgDAEAAAHIAAAOQAAAJADADQAEAEAEAAIAJAAIAAgsIgLAAQgEAAgCADg");
	this.shape.setTransform(168,38.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNBGQgGgCgFgFQgEgFgCgGQgCgHAAgIIAAhIQAAgJACgHQACgGAEgFQAFgEAGgDQAGgCAHAAQAIAAAGACQAGADAEAEQAEAFADAGQACAHAAAJIAAANIgVAAIAAgPQAAgHgDgEQgDgDgGAAQgEAAgCADQgEAEAAAHIAABLQAAAHAEAEQACADAEAAQAGAAADgDQADgEAAgHIAAgUIAVAAIAAATQAAAIgCAHQgDAGgEAFQgEAFgGACQgGACgIAAQgHAAgGgCg");
	this.shape_1.setTransform(160.3,38.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggBHIAAiNIAXAAIAAA2IAJAAQAIAAAGACQAGACAEAFQAFAEACAFQACAGAAAJIAAATQAAAIgCAHQgCAGgFAFQgEAEgGACQgGADgIAAgAgJAyIAJAAQAFAAADgCQACgEAAgHIAAgVQAAgIgCgDQgDgDgFAAIgJAAg");
	this.shape_2.setTransform(152.5,38.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKBHIAAh4IgXAAIAAgVIBDAAIAAAVIgXAAIAAB4g");
	this.shape_3.setTransform(144.7,38.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQBHIgEgaIgZAAIgFAaIgTAAIAWiNIAfAAIAXCNgAAJAaIgJhGIgKBGIATAAg");
	this.shape_4.setTransform(137,38.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghBHIAAiNIAhAAQAHAAAHACQAGACAEAFQAEAEACAGQACAGAAAIIAAAFQAAALgEAHQgDAHgIAEIAIADQADACACAEQAEAIAAALIAAAMQAAAIgCAGQgCAHgFAEQgEAEgGADQgHACgIAAgAgLAyIALAAQAGAAADgDQADgDAAgIIAAgMQAAgKgEgEQgDgDgGAAIgKAAgAgLgMIAJAAQAFAAADgDQADgEAAgIIAAgIQAAgHgCgEQgDgDgEAAIgLAAg");
	this.shape_5.setTransform(128.9,38.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOBGQgFgCgFgFQgEgFgDgGQgCgHAAgIIAAhIQAAgJACgHQADgGAEgFQAFgEAFgDQAHgCAHAAQAIAAAGACQAGADAFAEQAEAFACAGQACAHABAJIAABIQgBAIgCAHQgCAGgEAFQgFAFgGACQgGACgIAAQgHAAgHgCgAgHgwQgEAEABAHIAABLQgBAHAEAEQADADAEAAQAFAAADgDQADgEAAgHIAAhLQAAgHgDgEQgDgDgFAAQgEAAgDADg");
	this.shape_6.setTransform(120.6,38.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggBHIAAiNIAgAAQAIAAAGADQAGACAEAEQAFAFACAHQACAGAAAJIAAASQAAAJgCAGQgCAFgFAEQgEAFgGACQgGACgIAAIgJAAIAAA2gAgJgBIAJAAQAFAAADgDQACgDAAgIIAAgVQAAgHgCgDQgDgDgFAAIgJAAg");
	this.shape_7.setTransform(113,38.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAPBHIAAhjIgJAiIgRBBIgXAAIAAiNIAUAAIAABZIAIgeIARg7IAYAAIAACNg");
	this.shape_8.setTransform(104.6,38.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggBHIAAiNIAgAAQAIAAAGADQAGACAEAEQAFAFACAHQACAGAAAJIAAASQAAAJgCAGQgCAFgFAEQgEAFgGACQgGACgIAAIgJAAIAAA2gAgJgBIAJAAQAFAAADgDQACgDAAgIIAAgVQAAgHgCgDQgDgDgFAAIgJAAg");
	this.shape_9.setTransform(96.7,38.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKBHIAAh4IgXAAIAAgVIBDAAIAAAVIgXAAIAAB4g");
	this.shape_10.setTransform(89,38.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNBGQgGgCgFgFQgEgFgCgGQgCgHAAgIIAAhIQAAgJACgHQACgGAEgFQAFgEAGgDQAGgCAHAAQAIAAAGACQAGADAEAEQAEAFADAGQACAHAAAJIAAANIgVAAIAAgPQAAgHgDgEQgDgDgGAAQgEAAgCADQgEAEAAAHIAABLQAAAHAEAEQACADAEAAQAGAAADgDQADgEAAgHIAAgUIAVAAIAAATQAAAIgCAHQgDAGgEAFQgEAFgGACQgGACgIAAQgHAAgGgCg");
	this.shape_11.setTransform(81.5,38.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAPBHIAAhjIgJAiIgRBBIgXAAIAAiNIAUAAIAABZIAIgeIAQg7IAZAAIAACNg");
	this.shape_12.setTransform(73.2,38.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgcBHIAAiNIA5AAIAAAVIgjAAIAAB4g");
	this.shape_13.setTransform(65.2,38.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdBHIAAiNIA7AAIAAAVIgkAAIAAAnIAcAAIAAATIgcAAIAAApIAkAAIAAAVg");
	this.shape_14.setTransform(57.8,38.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AggBHIAAiNIAgAAQAIAAAGADQAGACAEAEQAFAFACAHQACAGAAAJIAAASQAAAJgCAGQgCAFgFAEQgEAFgGACQgGACgIAAIgJAAIAAA2gAgJgBIAJAAQAFAAADgDQACgDAAgIIAAgVQAAgHgCgDQgDgDgFAAIgJAAg");
	this.shape_15.setTransform(50.4,38.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAQBHIgEgaIgZAAIgFAaIgTAAIAWiNIAfAAIAXCNgAAJAaIgJhGIgKBGIATAAg");
	this.shape_16.setTransform(42.2,38.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgNBGQgGgCgEgFQgFgFgCgGQgCgHAAgIIAAgQIAVAAIAAARQAAAHADAEQADADAFAAQAFAAACgDQADgEAAgJIAAgLQAAgKgDgEQgDgEgGAAIgGAAIAAgTIAHAAQAFAAADgDQADgEAAgIIAAgIQAAgJgDgEQgCgDgFAAQgFAAgDADQgDAEAAAHIAAAMIgUAAIAAgLQAAgIACgHQACgHAEgEQAEgFAGgCQAGgCAHAAQAIAAAGACQAGADAEAEQAFAFACAGQACAHAAAJIAAADQAAAMgEAHQgEAHgIADIAHADIAFAHQAEAHAAALIAAAMQAAAIgCAHQgCAGgFAFQgEAFgGACQgGACgIAAQgHAAgGgCg");
	this.shape_17.setTransform(34,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(101,37.6,1,1,0,0,0,106.1,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 17
	this.instance_1 = new lib.Символ18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(100.9,40.3,1,1,0,0,0,106.1,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,15.5,212.4,46.8);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(46.7,-150.6,1,1,0,0,0,71.5,33.1);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AAAALIgMAWIgLgIIANgWIgVgEIAFgOIAVAIIAAgaIAMAAIAAAbIAUgJIAFAOIgWAGIANAVIgLAIg");
	this.shape.setTransform(-115.1,180.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.3,-185.7,241.5,369.6);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(46.7,-150.6,1,1,0,0,0,71.5,33.1);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AAAALIgMAWIgLgIIANgVIgVgFIAFgOIAVAIIAAgaIAMAAIAAAbIAUgJIAFAOIgWAGIANAVIgLAIg");
	this.shape.setTransform(-115.1,180.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.3,-185.7,241.5,369.6);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(1586.5,299,1,1,0,0,0,65,55.1);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:1500.4},3,cjs.Ease.get(-1)).to({x:1385.5},4,cjs.Ease.get(1)).wait(142));

	// Слой 2
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1254.1,511.5,1,1,0,0,0,71,13.7);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({y:429.6},3,cjs.Ease.get(-1)).to({y:320.5},4,cjs.Ease.get(1)).wait(140));

	// Слой 8
	this.instance_2 = new lib.Анимация1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1157,284.2);
	this.instance_2.alpha = 0.039;

	this.instance_3 = new lib.Анимация2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1206.3,429.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},142).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:1178.1,y:346.6,alpha:0.449},3,cjs.Ease.get(-1)).to({_off:true,x:1206.3,y:429.9,alpha:1},4,cjs.Ease.get(1)).wait(143));

	// Символ 6
	this.instance_4 = new lib.Символ6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1444.3,420.8,1.168,1.168,0,0,0,213.1,45);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({y:384.6,alpha:1},9,cjs.Ease.get(1)).wait(1).to({regX:100.7,regY:38.3,x:1313.1,y:376.8},0).to({regX:100.8,scaleX:1.16,scaleY:1.16,x:1313.2},5,cjs.Ease.get(-1)).to({regY:38.4,scaleX:1.11,scaleY:1.11,y:376.9},6,cjs.Ease.get(1)).to({scaleX:1.14,scaleY:1.14},5).to({regX:100.7,regY:38.3,scaleX:1.17,scaleY:1.17,x:1313.1,y:376.8},5,cjs.Ease.get(1)).wait(1).to({regX:100.8,scaleX:1.16,scaleY:1.16,x:1313.2},5,cjs.Ease.get(-1)).to({regY:38.4,scaleX:1.11,scaleY:1.11,y:376.9},6,cjs.Ease.get(1)).to({scaleX:1.14,scaleY:1.14},5).to({regX:100.7,regY:38.3,scaleX:1.17,scaleY:1.17,x:1313.1,y:376.8},5,cjs.Ease.get(1)).wait(1).to({regX:100.8,scaleX:1.16,scaleY:1.16,x:1313.2},5,cjs.Ease.get(-1)).to({regY:38.4,scaleX:1.11,scaleY:1.11,y:376.9},6,cjs.Ease.get(1)).to({scaleX:1.14,scaleY:1.14},5).to({regX:100.7,regY:38.3,scaleX:1.17,scaleY:1.17,x:1313.1,y:376.8},5,cjs.Ease.get(1)).wait(1).to({regX:100.8,scaleX:1.16,scaleY:1.16,x:1313.2},5,cjs.Ease.get(-1)).to({regY:38.4,scaleX:1.11,scaleY:1.11,y:376.9},6,cjs.Ease.get(1)).to({scaleX:1.14,scaleY:1.14},5).to({regX:100.7,regY:38.3,scaleX:1.17,scaleY:1.17,x:1313.1,y:376.8},5,cjs.Ease.get(1)).wait(1).to({regX:100.8,scaleX:1.16,scaleY:1.16,x:1313.2},5,cjs.Ease.get(-1)).to({regY:38.4,scaleX:1.11,scaleY:1.11,y:376.9},6,cjs.Ease.get(1)).to({scaleX:1.14,scaleY:1.14},5).to({regX:100.7,regY:38.3,scaleX:1.17,scaleY:1.17,x:1313.1,y:376.8},5,cjs.Ease.get(1)).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1038.7,98.4,242.5,369.5);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 3
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(-274.5,760.5,1.163,1.163,0,0,0,302.9,139);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150).to({_off:false},0).wait(183).to({x:331.9},5).wait(27));

	// 1
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1145.3,-69.8,1.524,1.524,0,0,0,213,120.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(139).to({x:-1476.9},10,cjs.Ease.get(-1)).to({_off:true},1).wait(215));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(112.8,-103,366.5,562);


// stage content:



(lib.index = function(mode,startPosition,loop) {
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

	// Слой 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg8bAdXQhRAAAAhVMAAAg4DQAAhVBRAAMB43AAAQBRAAAABVMAAAA4DQAABVhRAAg");
	mask.setTransform(330.4,143.6);

	// 3
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(6,148.8,0.996,0.996,0,0,0,219.5,242.2);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(315.5,146.5,1,1,0,0,0,371.5,215.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(255.5,-23.5,731.5,510);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;