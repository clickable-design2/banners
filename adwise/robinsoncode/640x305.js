(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bablo_03 = function() {
	this.initialize(img.bablo_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,37);


(lib.bablo_05 = function() {
	this.initialize(img.bablo_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,56);


(lib.bablo_08 = function() {
	this.initialize(img.bablo_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,71);


(lib.bablo_13 = function() {
	this.initialize(img.bablo_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,45);


(lib.bablo_16 = function() {
	this.initialize(img.bablo_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,42);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.blik = function() {
	this.initialize(img.blik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,173);


(lib.damoc_02 = function() {
	this.initialize(img.damoc_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,299,400);


(lib.damoc_05 = function() {
	this.initialize(img.damoc_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,292);


(lib.dollars = function() {
	this.initialize(img.dollars);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,60);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,33);


(lib.man = function() {
	this.initialize(img.man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,439,400);// helper functions:

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


(lib.Символ83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bablo_03();
	this.instance.parent = this;
	this.instance.setTransform(-23.5,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ83, new cjs.Rectangle(-23.5,-18.5,47,37), null);


(lib.Символ80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bablo_05();
	this.instance.parent = this;
	this.instance.setTransform(-33.5,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ80, new cjs.Rectangle(-33.5,-28,67,56), null);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bablo_08();
	this.instance.parent = this;
	this.instance.setTransform(-24,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ77, new cjs.Rectangle(-24,-35.5,48,71), null);


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bablo_13();
	this.instance.parent = this;
	this.instance.setTransform(-16.5,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ74, new cjs.Rectangle(-16.5,-22.5,33,45), null);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bablo_16();
	this.instance.parent = this;
	this.instance.setTransform(-29,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ71, new cjs.Rectangle(-29,-21,58,42), null);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#815139").s().p("ArXLYQkuktAAmrQAAmqEuktQEtkuGqAAQGrAAEtEuQEuEtAAGqQAAGrkuEtQktEumrAAQmqAAktkug");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660000").s().p("ArICMQgTgGgNgMQgOgMgHgQQgHgTAAgYIA2AAQAAALADAIQAEAIAGAHQAHAFAIADQAJADAKAAQAKAAAJgDQAJgDAGgFQAGgGAEgIQADgHAAgJQAAgIgDgHQgEgIgGgGQgHgEgIgDQgJgEgKAAIgVAAIAAgvIAUAAQAQAAALgJQAKgJAAgPQAAgPgLgIQgKgJgPAAQgQAAgKAGQgMAIAAANIg1AAQAAgTAHgOQAHgOAMgKQANgIARgFQAQgFATAAQAVABARAFQARAGANAMQAMAKAGAPQAGAOAAAQQAAARgIAPQgJAOgPAJQAMAGAIAFQAJAHAGAIQAGAKADAKQAEALAAANQAAATgIAQQgHAQgOALQgOAMgUAGQgUAHgZAAQgXAAgSgGgEAixACMIAAkXIA6AAIAABYIA8AAQAQAAAbAIQASAHANAOQANANAGAQQAHASAAASQAAATgHARQgGASgNAOQgNANgSAIQgbAIgQAAgEAjrABXIA8AAQAKAAAIgDQAHgEAGgGQAGgGACgIQADgIAAgJQAAgJgDgIQgDgHgFgGQgGgGgHgDQgIgDgKAAIg8AAgEAgFACMIAAjjIhLAAIAAg0IDPAAIAAA0IhKAAIAADjgAd3CMIgWguIh1AAIgVAuIg/AAIAAgIICBkRIAcAAICAERIAAAIgAdNArIgmhcIgnBcIBNAAgAWvCMIAAkXIB3AAQATABAQAFQAQAGAMAKQAMALAGAPQAHAQAAATQAAAQgIANQgHAPgNAIQAKAEAHAFQAIAGAFAJQAFAHACAKQADAKAAAKQAAATgGAPQgGAPgMALQgLALgQAGQgRAGgVAAgAXrBYIBCAAQAPAAAJgJQAJgHABgPQAAgIgDgIQgEgHgGgEQgIgGgQAAIg/AAgAXrgYIA3AAQAPAAAJgHQAJgJAAgOQAAgPgJgJQgJgJgPAAIg3AAgAUzCMIAAkXIA7AAIAAEXgAQwCMIAAkXIA7AAIAABYIA8AAQAMAAAMACQAMADAKAEQANAGATATQAMAPAFASQAGAUgDAUQgCARgHAPQgIAPgMAMQgNAMgRAGQgSAHgVAAgARrBXIAyAAQALAAAJgBQAJgDAHgFQAGgFAEgGQAEgIABgKQABgJgCgJQgDgJgFgHQgGgGgIgFQgIgDgKAAIg8AAgAOECMIAAjjIhLAAIAAg0IDQAAIAAA0IhLAAIAADjgAL2CMIgWguIh0AAIgWAuIg+AAIAAgIICBkRIAbAAICAERIAAAIgALNArIgnhcIgnBcIBOAAgAEyCMIAAkXIDEAAIAAA1IiJAAIAAAzIA9AAQAYAAATAGQATAHAMAMQANALAGAPQAGAPAAATQAAATgGAQQgHAQgMAMQgNANgSAHQgTAHgYAAgAFtBXIA8AAQAKAAAIgCQAIgDAFgGQALgKAAgQQAAgPgLgKQgFgGgIgCQgIgDgKAAIg8AAgADWCMIgWguIh1AAIgVAuIg+AAIAAgIICAkRIAcAAICAERIAAAIgACsArIgmhcIgnBcIBNAAgAlHCMIgWguIh1AAIgVAuIg/AAIAAgIICBkRIAcAAICAERIAAAIgAlxArIgmhcIgnBcIBNAAgAxWCMIAAkXIA6AAIAABYIA8AAQAQAAAbAIQASAHANAOQANANAGAQQAHASAAASQAAATgHARQgGASgNAOQgNANgSAIQgbAIgQAAgAwcBXIA8AAQAKAAAIgDQAHgEAGgGQAGgGACgIQADgIAAgJQAAgJgDgIQgDgHgFgGQgGgGgHgDQgIgDgKAAIg8AAgA0CCMIAAjjIhLAAIAAg0IDPAAIAAA0IhKAAIAADjgA2QCMIgWguIh1AAIgVAuIg/AAIAAgIICBkRIAcAAICAERIAAAIgA26ArIgmhcIgnBcIBNAAgA7ICMIAAhkIglACQgRABgOgDQgPgDgMgFQgMgFgJgIQgKgJgGgKQgHgKgFgPQgFgPgCgRQgCgSAAgVIAAgrIA8AAIAAArQAAAcAEARQAFARAKAKQALAJASACQARACAcgDIAAh9IA7AAIAAEXgA+rCMIgWguIh0AAIgWAuIg+AAIAAgIICBkRIAbAAICAERIAAAIgA/UArIgnhcIgnBcIBOAAgEgjjACMIAAh2IhrAAIAAB2Ig8AAIAAkXIA8AAIAABrIBrAAIAAhrIA8AAIAAEXgAjqCLIAAkWIB3AAQARAAAaAIQASAIANAPQANAOAGASQAHASAAAUQAAAUgHASQgHARgMAOQgNAOgSAHQgbAJgQgBIg7AAIAABPgAiwAJIA9AAQAJAAAIgEQAIgEAGgFQAGgHADgJQACgJAAgKQAAgKgCgJQgDgIgGgHQgFgGgIgEQgIgEgKAAIg9AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-244.2,-14.5,488.6,29.1), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AzzETQg3AAAAg3IAAm3QAAg3A3AAMAnnAAAQA3AAAAA3IAAG3QAAA3g3AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-132.3,-27.5,264.6,55), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFDC00","#FFCC00","#FFFFCC"],[0,0.51,1],0,-37,0,37.1).s().p("AzzETQg3AAAAg3IAAm3QAAg3A3AAMAnnAAAQA3AAAAA3IAAG3QAAA3g3AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-132.3,-27.5,264.6,55), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blik();
	this.instance.parent = this;
	this.instance.setTransform(-29,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-29,-87,58,173), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#815139").s().p("AHYGKIAAhdIgzAAIg5BdIg/AAIAAgJIA+hcQgMgGgJgJQgJgJgGgLQgHgKgDgMQgEgNAAgNQAAgSAHgSQAHgRALgOQANgNATgIIAUgGIAWgCIB4AAIAAEYgAGLCqQgIADgFAGQgFAFgDAJQgDAHAAAJQAAAJADAIQADAIAFAFQAFAHAIADQAIAEAJAAIA9AAIAAhXIg9AAQgJABgIADgADDGKIAAh2IhrAAIAAB2Ig7AAIAAkYIA7AAIAABrIBrAAIAAhrIA9AAIAAEYgAjHGKIAAkYICsAAIAAA1IhvAAIAAA5IBoAAIAAA0IhoAAIAABAIByAAIAAA2gAlDGKIAAiXIhGBYIgIAAIhHhYIAACXIg8AAIAAkZIAXAAIBwCGIBwiGIAWAAIAAEZgAisgYQgSgHgNgLQgOgMgIgRQgGgSAAgYIA2AAQgBALAEAIQADAIAHAGQAHAFAIADQAIAEALAAQAKAAAJgEQAIgDAHgFQAGgFAEgIQACgHAAgKQAAgHgCgIQgEgIgGgFQgHgFgJgDQgJgEgJABIgVAAIAAgxIAUAAQAQAAALgJQAKgJAAgOQAAgPgLgJQgLgJgOAAQgQABgLAGQgLAHAAANIg1AAQgBgSAIgPQAGgNANgKQANgJAQgFQAQgEAUAAQAUAAASAGQARAGAMALQAMALAGAOQAHAPAAAQQAAARgJAOQgIAOgPAKQAMAFAIAGQAJAIAGAIQAGAJADAKQADAMABANQgBASgHARQgHAPgOAMQgOALgUAHQgUAGgZAAQgXAAgTgFgAIGgXIAAkZIA8AAIAACeICdigIATAAIAAEaIg7AAIAAigIifChgAEigYIAAkYICrAAIAAA0IhvAAIAAA5IBoAAIAAA0IhoAAIAABAIByAAIAAA3gAAZgYIAAkYIDEAAIAAA0IiJAAIAAAzIA9AAQAYABATAGQASAHANAMQAMALAHAQQAFAPABATQgBASgFAQQgHARgMAMQgNAMgSAIQgUAGgXABgABUhNIA8AAQAKAAAIgDQAIgDAFgFQAKgLAAgPQAAgPgKgKQgFgGgIgDQgIgCgKAAIg8AAgAkwgYIgWgvIh1AAIgVAvIg+AAIAAgIICAkTIAcAAICAETIAAAIgAmnh5IBNAAIgmhdgArxgZIAAkYIB3AAQARAAAbAIQARAJANAOQANAPAGASQAHASAAAUQAAAUgHARQgGASgNAOQgNAOgSAIQgbAIgQAAIg7AAIAABPgAq3icIA9AAQAJAAAJgDQAHgEAGgHQAGgHADgIQADgKAAgJQAAgKgDgJQgDgJgGgGQgFgHgIgDQgIgFgKAAIg9AAgAJrlIQgMgEgKgJQgJgJgFgMQgFgMgBgQIAogDQACAMAHAGQAIAHANgBQAOABAIgGQAHgGADgNIAoADQgBAPgFAMQgFANgJAJQgJAJgMAEQgOAFgQAAQgQAAgNgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-75.4,-39.4,150.8,78.9), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFCC33","#FFCC00","#FFFFCC"],[0,0.51,1],0,-18.5,0,18.6).s().p("AgyCtQgYgHgSgPQgSgRgKgWIgIgXIgCgcIAAh6QAAgSAKghQAKgWASgQQASgQAYgHQAYgIAaAAQAbAAAYAIQAYAHASAQQASAQAKAWQAKAhAAASIAAB6IgCAcIgIAXQgKAWgSARQgSAPgYAHQgYAJgbAAQgaAAgYgJgAgghaQgNALAAAUIAAB2QAAAVANAMQAMALAUgBQAUABANgLQAOgMAAgVIAAh2QAAgUgOgLQgNgMgUAAQgTAAgNAMg");
	this.shape.setTransform(-40.3,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFCC33","#FFCC00","#FFFFCC"],[0,0.51,1],0,-17.7,0,17.7).s().p("AhfCwIAAhKIA0AAIAAjLIgwAAIAAhJICGAAIAAEUIA1AAIAABKg");
	this.shape_1.setTransform(-67.9,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFCC33","#FFCC00","#FFFFCC"],[0,0.51,1],0,-18.4,0,18.4).s().p("AgbDqIAAg2IgZgFQgagJgTgNQgVgPgMgWQgFgKgDgMQgDgNAAgOIBXAAQAAAPARAKIAKAEIAAg7QgSgDgPgEQgYgHgRgMQgQgMgJgUQgJgTgBgcQAAgmApgwIAFgDQAJgGAKgEQAJgFAKgDQAMgEANgBIAAg1IA5AAIAAA2IAQAEQAYAIATANQAUAPALAVQAGALACAMQADANAAAOIhWAAQAAgRgOgJIgBgBIAABAQAPACAKACQAbAGARAKQAUALALASQAGALADAMQADANAAAQQgSBCgbASQgUAOgZAHIgWAEIAAA3gAAeBgIAHgCQASgJAAgPQAAgIgFgHQgFgFgKgEIgFgCgAgiheQgPAKgCAPQAAAJADAGQAFAHAHAEIAJADIAAg5IgHADg");
	this.shape_2.setTransform(-108.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFCC33","#FFCC00","#FFFFCC"],[0,0.51,1],0,-17.6,0,17.7).s().p("AgyCtQgYgHgSgPQgSgRgKgWIgIgXIgCgcIAAh6QAAgSAKghQAKgWASgQQASgQAYgHQAYgIAaAAQAbAAAXAIQAZAHARAQQASAQAKAWQALAhAAASIAAB6IgCAcIgJAXQgKAWgSARQgRAPgZAHQgXAJgbAAQgaAAgYgJgAgghaQgNALAAAUIAAB2QAAAVANAMQAMALAUgBQAUABANgLQAOgMAAgVIAAh2QAAgUgOgLQgNgMgUAAQgTAAgNAMg");
	this.shape_3.setTransform(109.8,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFCC33","#FFCC00","#FFFFCC"],[0,0.51,1],0,-17.6,0,17.7).s().p("AgyCtQgYgHgSgPQgSgRgKgWIgIgXIgCgcIAAh6QAAgSAKghQAKgWASgQQASgQAYgHQAYgIAaAAQAbAAAYAIQAYAHASAQQASAQAKAWQAKAhAAASIAAB6IgCAcIgIAXQgKAWgSARQgSAPgYAHQgYAJgbAAQgaAAgYgJgAgghaQgNALAAAUIAAB2QAAAVANAMQAMALAUgBQAVABAMgLQAOgMAAgVIAAh2QAAgUgOgLQgMgMgVAAQgTAAgNAMg");
	this.shape_4.setTransform(75.7,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFCC33","#FFCC00","#FFFFCC"],[0,0.51,1],0,-17.2,0,17.3).s().p("AgyCtQgYgHgSgPQgSgRgKgWIgIgXIgCgcIAAh6QAAgSAKghQAKgWASgQQASgQAYgHQAYgIAaAAQAbAAAXAIQAZAHARAQQASAQAKAWQALAhAAASIAAB6IgCAcIgJAXQgKAWgSARQgRAPgZAHQgXAJgbAAQgaAAgYgJgAgghaQgNALAAAUIAAB2QAAAVANAMQAMALAUgBQAUABANgLQAOgMAAgVIAAh2QAAgUgOgLQgNgMgUAAQgTAAgNAMg");
	this.shape_5.setTransform(41.7,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFCC33","#FFCC00","#FFFFCC"],[0,0.51,1],0,-18.1,0,18.1).s().p("AgyCtQgYgHgSgPQgSgRgKgWIgIgXIgCgcIAAh6QAAgSAKghQAKgWASgQQASgQAYgHQAYgIAaAAQAaAAAYAIQAZAHARAQQASAQAKAWQALAhAAASIAAB6IgCAcIgJAXQgKAWgSARQgRAPgZAHQgYAJgaAAQgaAAgYgJgAgghaQgNALAAAUIAAB2QAAAVANAMQAMALAUgBQAUABANgLQAOgMAAgVIAAh2QAAgUgOgLQgNgMgUAAQgTAAgNAMg");
	this.shape_6.setTransform(-6.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-122.9,-23.4,245.9,46.8), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AEtDSIAAggIiuAAIAAAgIg+AAIAAhiIAdAAIBljpIAhAAIBoDpIAfAAIAABigACqBvIBUAAIgrhrgAjuCwQgUgHgPgNQgQgNgIgTIgGgUIgCgXIAAhmQAAgQAIgbQAIgTAQgNQAPgNAUgGQAUgHAXAAQAWAAAUAHQAVAGAPANQAPANAIATQAKAbgBAQIAABmIgBAXIgIAUQgIATgPANQgPANgVAHQgUAHgWAAQgXAAgUgHgAjeguQgMAKAAAQIAABjQAAASAMAKQAJAJASAAQASAAAKgJQALgKAAgSIAAhjQAAgQgLgKQgKgJgSAAQgRAAgKAJgAnpCzQgMgDgLgGQgLgGgJgIQgIgJgHgKQgGgLgEgMQgDgNgBgOIBCAAQABAOAJAHQAIAIAPAAQAQAAAJgLQAHgJABgPQAAgQgHgJQgGgIgMgEQgKgDgPgBIgZABIAAgLIAohQIhWAAIAAhDIC8AAIAAALIg2BkQAQAEANAIQAMAIAGAMQAHAMADAOQADANAAAPQABATgIASQgGATgNAOQgNAPgUAJQgbAJgSAAQgPAAgOgEgAyQCwQgUgHgNgNQgNgNgHgSQgHgUAAgYIBCAAQAAARAKAKQAKAKAQAAQATAAAKgKQAKgJAAgOQAAgNgKgKQgKgKgTAAIgUAAIAAg9IAUAAQANAAAIgIQAGgHAAgKQAAgLgGgHQgIgIgNAAQgMAAgHAFQgGAEAAAIIhEAAQAAgUAHgPQAHgPANgKQAMgKASgEQARgFATAAQAYAAATAHQARAGANANQAMAMAGAPQAHAQgBAQQAAAPgGAPQgHAOgMAKQALAGAIAHQAIAIAGAJQAFAJADAKQABALAAAMQABAUgIARQgHARgOANQgPAMgUAHQgXAIgcAAQgXAAgTgHgAPRCxIAAkmIBMAAIAACPICViQIAbAAIAAEnIhNAAIAAiRIiVCRgALRCxIAAkmIC4AAIAABDIhtAAIAAAqIBkAAIAABCIhkAAIAAA0IBxAAIAABDgAI5CxIAAh3IhbAAIAAB3IhNAAIAAkmIBNAAIAABrIBbAAIAAhrIBNAAIAAEmgAsBCxIgRglIh0AAIgRAlIhKAAIAAgLICFkfIAgAAICFEfIAAALgAttBLIBDAAIgihMgAQ8iJQgOgFgKgJQgIgKgFgNQgGgOgBgRIAsgEQAAALAJAGQAHAGANAAQAOAAAHgFQAJgFABgNIAsAEQAAARgGAOQgFANgJAKQgJAJgOAFQgNAEgSAAQgRAAgNgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-122.9,-21,245.9,42.1), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADjCyQgNgFgLgHQgMgHgJgJQgLgJgIgLQgJgMgGgNQgFgOgEgQQgCgQAAgSQgBhgCQgwQASAAAiAJQANAFAMAGQAMAHAKAJQAKAJAIAMQAIALAGAOQAGANADAPQADAQABASQAABhiQAxQgkgDgRgGgAD/gdQgOAFgJAJQgLAKgFANQgGAPAAASQAAASAGAQQAFANALAKQAJAKAOAFQAMAEANAAQANAAANgEQANgFAJgKQAKgKAHgNQAFgQAAgSQAAgSgFgPQgHgNgKgKQgJgJgNgFQgNgEgNAAQgNAAgMAEgAyUC0QgRgGgNgNQgNgMgGgSQgIgSABgXIA/AAQgBAQAKAKQAKAJAQAAQAQAAALgJQAIgJABgNQgBgNgIgJQgLgKgQAAIgUAAIAAg6IATAAQAMAAAIgHQAGgHAAgKQAAgKgGgHQgIgHgLAAQgMAAgGAEQgHAEAAAIIhAAAQAAgTAGgOQAHgOAMgKQAMgJARgFQAQgEATAAQAVAAASAGQASAHALAMQAMALAGAPQAFAOAAAQQABAOgHANQgGAPgMAJQALAFAHAHQAIAIAFAIQAFAJADAKQACAKAAAMQgBATgGAQQgHAQgNAMQgOAMgUAGQgVAHgaAAQgXAAgTgGgAPdC1IAAkXIBJAAIAACIICNiJIAaAAIAAEYIhJAAIAAiKIiOCKgANwC1IgQgjIhvAAIgQAjIhGAAIAAgLIB+kQIAeAAIB/EQIAAALgAMJBUIBAAAIghhJgAIHC1IAAjXIhFAAIAAhAIDQAAIAABAIhEAAIAADXgAh7C1IAAkXIDIAAIAABAIiAAAIAAAiIAzAAQAQAAAbAHQASAHAOANQAMANAHAQQAGAQAAASQAAARgGAQQgHARgMAMQgOAOgSAHQgbAIgQAAgAgzB1IAzAAQANAAAIgJQAIgIAAgLQAAgLgIgHQgIgJgNAAIgzAAgAjlC1IgRgjIhuAAIgRAjIhGAAIAAgLIB+kQIAfAAIB/EQIAAALgAlNBUIBAAAIgghJgAqtC1IAAkXIB7AAQAiAAApAgQANAPAGATQAHASAAATQAAAUgHASQgGATgNAPQgMAPgTAIQgJAFgLACQgMACgMAAIg0AAIAABIgApmAtIA0AAQAOAAAIgNQAIgLAAgQQABgPgIgMQgEgFgGgEQgFgDgIAAIg0AAgAsYC1IgPgjIhwAAIgPAjIhGAAIAAgLIB+kQIAeAAIB+EQIAAALgAt/BUIBAAAIghhJgARDh2QgNgEgJgJQgJgJgEgMQgGgNAAgRIAqgEQAAALAIAGQAGAFANAAQANAAAHgFQAIgFABgMIAqAEQgBARgFANQgEAMgJAJQgJAJgNAEQgMAFgRAAQgRAAgMgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-122.9,-18.6,245.9,37.3), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AxaDqIAAg2IgZgFQgbgJgTgNQgVgPgLgWQgGgKgCgMQgDgNAAgOIBWAAQAAAPASAKIAKAEIAAg7QgTgDgPgEQgYgHgQgMQgRgMgJgUQgJgTAAgcQgBgmApgwIAGgDQAIgGAKgEQAKgFAKgDQAMgEANgBIAAg1IA5AAIAAA2IARAEQAYAIATANQAUAPAKAVQAGALADAMQADANgBAOIhVAAQAAgRgOgJIgCgBIAABAQAPACAKACQAbAGARAKQAVALAKASQAGALADAMQADANAAAQQgSBCgaASQgUAOgaAHIgWAEIAAA3gAwhBgIAIgCQARgJAAgPQAAgIgFgHQgFgFgJgEIgGgCgAxiheQgPAKgBAPQgBAJAEAGQAEAHAIAEIAJADIAAg5IgIADgAQXCsQgYgIgSgPQgSgRgKgVIgIgYIgCgcIAAh6QAAgSAKggQAKgWASgQQASgQAYgIQAYgIAaAAQAcAAAXAIQAZAIARAQQASAQAKAWQALAgAAASIAAB6IgCAcIgJAYQgKAVgSARQgRAPgZAIQgXAJgcAAQgaAAgYgJgAQphcQgNALAAAVIAAB2QAAAUANAMQAMALAUAAQAVAAANgLQAOgMAAgUIAAh2QAAgVgOgLQgNgLgVAAQgTAAgNALgALCCsQgYgIgSgPQgSgRgKgVIgIgYIgCgcIAAh6QAAgSAKggQAKgWASgQQASgQAYgIQAYgIAaAAQAcAAAYAIQAYAIASAQQASAQAKAWQAKAgAAASIAAB6IgCAcIgIAYQgKAVgSARQgSAPgYAIQgYAJgcAAQgaAAgYgJgALUhcQgNALAAAVIAAB2QAAAUANAMQAMALAUAAQAWAAAMgLQAOgMAAgUIAAh2QAAgVgOgLQgMgLgWAAQgTAAgNALgAFtCsQgXgIgTgPQgSgRgKgVIgHgYIgDgcIAAh6QAAgSAKggQAKgWASgQQATgQAXgIQAYgIAaAAQAcAAAYAIQAYAIASAQQASAQAKAWQALAgAAASIAAB6IgDAcIgIAYQgKAVgSARQgSAPgYAIQgYAJgcAAQgaAAgYgJgAGAhcQgOALAAAVIAAB2QAAAUAOAMQALALAUAAQAWAAAMgLQAOgMAAgUIAAh2QAAgVgOgLQgMgLgWAAQgTAAgMALgAhwCsQgYgIgSgPQgSgRgKgVIgIgYIgCgcIAAh6QAAgSAKggQAKgWASgQQASgQAYgIQAYgIAaAAQAbAAAYAIQAYAIARAQQASAQAKAWQALAgAAASIAAB6IgCAcIgJAYQgKAVgSARQgRAPgYAIQgYAJgbAAQgaAAgYgJgAhehcQgNALAAAVIAAB2QAAAUANAMQAMALAUAAQAVAAANgLQAOgMAAgUIAAh2QAAgVgOgLQgNgLgVAAQgTAAgNALgAnFCsQgYgIgSgPQgSgRgKgVIgIgYIgCgcIAAh6QAAgSAKggQAKgWASgQQASgQAYgIQAYgIAaAAQAcAAAYAIQAYAIASAQQASAQAKAWQAKAgAAASIAAB6IgCAcIgIAYQgKAVgSARQgSAPgYAIQgYAJgcAAQgaAAgYgJgAmzhcQgNALAAAVIAAB2QAAAUANAMQAMALAUAAQAVAAANgLQAOgMAAgUIAAh2QAAgVgOgLQgNgLgVAAQgTAAgNALgAsHCuIAAhKIA0AAIAAjLIgvAAIAAhJICGAAIAAEUIA1AAIAABKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-122.9,-23.4,245.9,46.8), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dollars();
	this.instance.parent = this;
	this.instance.setTransform(-117,-35,1.17,1.17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-117,-35,234,70.2), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dollars();
	this.instance.parent = this;
	this.instance.setTransform(-100,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-100,-30,200,60), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dollars();
	this.instance.parent = this;
	this.instance.setTransform(-135,-41,1.35,1.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-135,-41,270.1,81), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dollars();
	this.instance.parent = this;
	this.instance.setTransform(-100,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-100,-30,200,60), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dollars();
	this.instance.parent = this;
	this.instance.setTransform(-100,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-100,-30,200,60), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.man();
	this.instance.parent = this;
	this.instance.setTransform(-219.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-219.5,-200,439,400), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F3218").s().p("ADkBJQgygDgcgIQgbgIAAgXQAAgWAjgYQAjgaA3AFQA2AFAhAeQAhAdAMANQALANg4ALQgtAJgoAAIgWgBgAkTAlQgzgDgbgIQgcgIAAgWQAAgXAkgZQAjgZA2AFQA3AEAhAfQAgAeAMAMQAMANg5ALQgsAIgpAAIgVAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-38.1,-7.4,76.4,14.8), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.damoc_02();
	this.instance.parent = this;
	this.instance.setTransform(-132.5,-177.2,0.886,0.886);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-132.5,-177.2,265,354.5), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-80.5,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-80.5,-16.5,161,33), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-320,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-320,-152.5,640,305), null);


(lib.Символ84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ83();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:6.1},0).wait(1).to({rotation:12.2},0).wait(1).to({rotation:18.3},0).wait(1).to({rotation:24.4},0).wait(1).to({rotation:30.5},0).wait(1).to({rotation:36.6},0).wait(1).to({rotation:42.7},0).wait(1).to({rotation:48.8},0).wait(1).to({rotation:54.9},0).wait(1).to({rotation:61},0).wait(1).to({rotation:67.1},0).wait(1).to({rotation:73.2},0).wait(1).to({rotation:79.3},0).wait(1).to({rotation:85.4},0).wait(1).to({rotation:91.5},0).wait(1).to({rotation:97.6},0).wait(1).to({rotation:103.7},0).wait(1).to({rotation:109.8},0).wait(1).to({rotation:115.9},0).wait(1).to({rotation:122},0).wait(1).to({rotation:128.1},0).wait(1).to({rotation:134.2},0).wait(1).to({rotation:140.3},0).wait(1).to({rotation:146.4},0).wait(1).to({rotation:152.5},0).wait(1).to({rotation:158.6},0).wait(1).to({rotation:164.7},0).wait(1).to({rotation:170.8},0).wait(1).to({rotation:176.9},0).wait(1).to({rotation:183.1},0).wait(1).to({rotation:189.2},0).wait(1).to({rotation:195.3},0).wait(1).to({rotation:201.4},0).wait(1).to({rotation:207.5},0).wait(1).to({rotation:213.6},0).wait(1).to({rotation:219.7},0).wait(1).to({rotation:225.8},0).wait(1).to({rotation:231.9},0).wait(1).to({rotation:238},0).wait(1).to({rotation:244.1},0).wait(1).to({rotation:250.2},0).wait(1).to({rotation:256.3},0).wait(1).to({rotation:262.4},0).wait(1).to({rotation:268.5},0).wait(1).to({rotation:274.6},0).wait(1).to({rotation:280.7},0).wait(1).to({rotation:286.8},0).wait(1).to({rotation:292.9},0).wait(1).to({rotation:299},0).wait(1).to({rotation:305.1},0).wait(1).to({rotation:311.2},0).wait(1).to({rotation:317.3},0).wait(1).to({rotation:323.4},0).wait(1).to({rotation:329.5},0).wait(1).to({rotation:335.6},0).wait(1).to({rotation:341.7},0).wait(1).to({rotation:347.8},0).wait(1).to({rotation:353.9},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-18.5,47,37);


(lib.Символ81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ80();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:1.4},0).wait(1).to({rotation:2.7},0).wait(1).to({rotation:4.1},0).wait(1).to({rotation:5.5},0).wait(1).to({rotation:6.8},0).wait(1).to({rotation:8.2},0).wait(1).to({rotation:9.6},0).wait(1).to({rotation:11},0).wait(1).to({rotation:12.3},0).wait(1).to({rotation:13.7},0).wait(1).to({rotation:15.1},0).wait(1).to({rotation:16.4},0).wait(1).to({rotation:17.8},0).wait(1).to({rotation:19.2},0).wait(1).to({rotation:20.5},0).wait(1).to({rotation:21.9},0).wait(1).to({rotation:23.3},0).wait(1).to({rotation:24.6},0).wait(1).to({rotation:26},0).wait(1).to({rotation:27.4},0).wait(1).to({rotation:28.7},0).wait(1).to({rotation:30.1},0).wait(1).to({rotation:31.5},0).wait(1).to({rotation:32.9},0).wait(1).to({rotation:34.2},0).wait(1).to({rotation:35.6},0).wait(1).to({rotation:37},0).wait(1).to({rotation:38.3},0).wait(1).to({rotation:39.7},0).wait(1).to({rotation:41.1},0).wait(1).to({rotation:42.4},0).wait(1).to({rotation:43.8},0).wait(1).to({rotation:45.2},0).wait(1).to({rotation:46.5},0).wait(1).to({rotation:47.9},0).wait(1).to({rotation:49.3},0).wait(1).to({rotation:50.6},0).wait(1).to({rotation:52},0).wait(1).to({rotation:53.4},0).wait(1).to({rotation:54.8},0).wait(1).to({rotation:56.1},0).wait(1).to({rotation:57.5},0).wait(1).to({rotation:58.9},0).wait(1).to({rotation:60.2},0).wait(1).to({rotation:61.6},0).wait(1).to({rotation:63},0).wait(1).to({rotation:64.3},0).wait(1).to({rotation:65.7},0).wait(1).to({rotation:67.1},0).wait(1).to({rotation:68.4},0).wait(1).to({rotation:69.8},0).wait(1).to({rotation:71.2},0).wait(1).to({rotation:72.5},0).wait(1).to({rotation:73.9},0).wait(1).to({rotation:75.3},0).wait(1).to({rotation:76.7},0).wait(1).to({rotation:78},0).wait(1).to({rotation:79.4},0).wait(1).to({rotation:80.8},0).wait(1).to({rotation:82.1},0).wait(1).to({rotation:83.5},0).wait(1).to({rotation:84.9},0).wait(1).to({rotation:86.2},0).wait(1).to({rotation:87.6},0).wait(1).to({rotation:89},0).wait(1).to({rotation:90.3},0).wait(1).to({rotation:91.7},0).wait(1).to({rotation:93.1},0).wait(1).to({rotation:94.4},0).wait(1).to({rotation:95.8},0).wait(1).to({rotation:97.2},0).wait(1).to({rotation:98.6},0).wait(1).to({rotation:99.9},0).wait(1).to({rotation:101.3},0).wait(1).to({rotation:102.7},0).wait(1).to({rotation:104},0).wait(1).to({rotation:105.4},0).wait(1).to({rotation:106.8},0).wait(1).to({rotation:108.1},0).wait(1).to({rotation:109.5},0).wait(1).to({rotation:110.9},0).wait(1).to({rotation:112.2},0).wait(1).to({rotation:113.6},0).wait(1).to({rotation:115},0).wait(1).to({rotation:116.3},0).wait(1).to({rotation:117.7},0).wait(1).to({rotation:119.1},0).wait(1).to({rotation:120.5},0).wait(1).to({rotation:121.8},0).wait(1).to({rotation:123.2},0).wait(1).to({rotation:124.6},0).wait(1).to({rotation:125.9},0).wait(1).to({rotation:127.3},0).wait(1).to({rotation:128.7},0).wait(1).to({rotation:130},0).wait(1).to({rotation:131.4},0).wait(1).to({rotation:132.8},0).wait(1).to({rotation:134.1},0).wait(1).to({rotation:135.5},0).wait(1).to({rotation:136.9},0).wait(1).to({rotation:138.3},0).wait(1).to({rotation:139.6},0).wait(1).to({rotation:141},0).wait(1).to({rotation:142.4},0).wait(1).to({rotation:143.7},0).wait(1).to({rotation:145.1},0).wait(1).to({rotation:146.5},0).wait(1).to({rotation:147.8},0).wait(1).to({rotation:149.2},0).wait(1).to({rotation:150.6},0).wait(1).to({rotation:151.9},0).wait(1).to({rotation:153.3},0).wait(1).to({rotation:154.7},0).wait(1).to({rotation:156},0).wait(1).to({rotation:157.4},0).wait(1).to({rotation:158.8},0).wait(1).to({rotation:160.2},0).wait(1).to({rotation:161.5},0).wait(1).to({rotation:162.9},0).wait(1).to({rotation:164.3},0).wait(1).to({rotation:165.6},0).wait(1).to({rotation:167},0).wait(1).to({rotation:168.4},0).wait(1).to({rotation:169.7},0).wait(1).to({rotation:171.1},0).wait(1).to({rotation:172.5},0).wait(1).to({rotation:173.8},0).wait(1).to({rotation:175.2},0).wait(1).to({rotation:176.6},0).wait(1).to({rotation:177.9},0).wait(1).to({rotation:179.3},0).wait(1).to({rotation:180.7},0).wait(1).to({rotation:182.1},0).wait(1).to({rotation:183.4},0).wait(1).to({rotation:184.8},0).wait(1).to({rotation:186.2},0).wait(1).to({rotation:187.5},0).wait(1).to({rotation:188.9},0).wait(1).to({rotation:190.3},0).wait(1).to({rotation:191.6},0).wait(1).to({rotation:193},0).wait(1).to({rotation:194.4},0).wait(1).to({rotation:195.7},0).wait(1).to({rotation:197.1},0).wait(1).to({rotation:198.5},0).wait(1).to({rotation:199.8},0).wait(1).to({rotation:201.2},0).wait(1).to({rotation:202.6},0).wait(1).to({rotation:204},0).wait(1).to({rotation:205.3},0).wait(1).to({rotation:206.7},0).wait(1).to({rotation:208.1},0).wait(1).to({rotation:209.4},0).wait(1).to({rotation:210.8},0).wait(1).to({rotation:212.2},0).wait(1).to({rotation:213.5},0).wait(1).to({rotation:214.9},0).wait(1).to({rotation:216.3},0).wait(1).to({rotation:217.6},0).wait(1).to({rotation:219},0).wait(1).to({rotation:220.4},0).wait(1).to({rotation:221.7},0).wait(1).to({rotation:223.1},0).wait(1).to({rotation:224.5},0).wait(1).to({rotation:225.9},0).wait(1).to({rotation:227.2},0).wait(1).to({rotation:228.6},0).wait(1).to({rotation:230},0).wait(1).to({rotation:231.3},0).wait(1).to({rotation:232.7},0).wait(1).to({rotation:234.1},0).wait(1).to({rotation:235.4},0).wait(1).to({rotation:236.8},0).wait(1).to({rotation:238.2},0).wait(1).to({rotation:239.5},0).wait(1).to({rotation:240.9},0).wait(1).to({rotation:242.3},0).wait(1).to({rotation:243.7},0).wait(1).to({rotation:245},0).wait(1).to({rotation:246.4},0).wait(1).to({rotation:247.8},0).wait(1).to({rotation:249.1},0).wait(1).to({rotation:250.5},0).wait(1).to({rotation:251.9},0).wait(1).to({rotation:253.2},0).wait(1).to({rotation:254.6},0).wait(1).to({rotation:256},0).wait(1).to({rotation:257.3},0).wait(1).to({rotation:258.7},0).wait(1).to({rotation:260.1},0).wait(1).to({rotation:261.4},0).wait(1).to({rotation:262.8},0).wait(1).to({rotation:264.2},0).wait(1).to({rotation:265.6},0).wait(1).to({rotation:266.9},0).wait(1).to({rotation:268.3},0).wait(1).to({rotation:269.7},0).wait(1).to({rotation:271},0).wait(1).to({rotation:272.4},0).wait(1).to({rotation:273.8},0).wait(1).to({rotation:275.1},0).wait(1).to({rotation:276.5},0).wait(1).to({rotation:277.9},0).wait(1).to({rotation:279.2},0).wait(1).to({rotation:280.6},0).wait(1).to({rotation:282},0).wait(1).to({rotation:283.3},0).wait(1).to({rotation:284.7},0).wait(1).to({rotation:286.1},0).wait(1).to({rotation:287.5},0).wait(1).to({rotation:288.8},0).wait(1).to({rotation:290.2},0).wait(1).to({rotation:291.6},0).wait(1).to({rotation:292.9},0).wait(1).to({rotation:294.3},0).wait(1).to({rotation:295.7},0).wait(1).to({rotation:297},0).wait(1).to({rotation:298.4},0).wait(1).to({rotation:299.8},0).wait(1).to({rotation:301.1},0).wait(1).to({rotation:302.5},0).wait(1).to({rotation:303.9},0).wait(1).to({rotation:305.2},0).wait(1).to({rotation:306.6},0).wait(1).to({rotation:308},0).wait(1).to({rotation:309.4},0).wait(1).to({rotation:310.7},0).wait(1).to({rotation:312.1},0).wait(1).to({rotation:313.5},0).wait(1).to({rotation:314.8},0).wait(1).to({rotation:316.2},0).wait(1).to({rotation:317.6},0).wait(1).to({rotation:318.9},0).wait(1).to({rotation:320.3},0).wait(1).to({rotation:321.7},0).wait(1).to({rotation:323},0).wait(1).to({rotation:324.4},0).wait(1).to({rotation:325.8},0).wait(1).to({rotation:327.1},0).wait(1).to({rotation:328.5},0).wait(1).to({rotation:329.9},0).wait(1).to({rotation:331.3},0).wait(1).to({rotation:332.6},0).wait(1).to({rotation:334},0).wait(1).to({rotation:335.4},0).wait(1).to({rotation:336.7},0).wait(1).to({rotation:338.1},0).wait(1).to({rotation:339.5},0).wait(1).to({rotation:340.8},0).wait(1).to({rotation:342.2},0).wait(1).to({rotation:343.6},0).wait(1).to({rotation:344.9},0).wait(1).to({rotation:346.3},0).wait(1).to({rotation:347.7},0).wait(1).to({rotation:349},0).wait(1).to({rotation:350.4},0).wait(1).to({rotation:351.8},0).wait(1).to({rotation:353.2},0).wait(1).to({rotation:354.5},0).wait(1).to({rotation:355.9},0).wait(1).to({rotation:357.3},0).wait(1).to({rotation:358.6},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-28,67,56);


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ77();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:1.4},0).wait(1).to({rotation:2.8},0).wait(1).to({rotation:4.2},0).wait(1).to({rotation:5.6},0).wait(1).to({rotation:6.9},0).wait(1).to({rotation:8.3},0).wait(1).to({rotation:9.7},0).wait(1).to({rotation:11.1},0).wait(1).to({rotation:12.5},0).wait(1).to({rotation:13.9},0).wait(1).to({rotation:15.3},0).wait(1).to({rotation:16.7},0).wait(1).to({rotation:18.1},0).wait(1).to({rotation:19.5},0).wait(1).to({rotation:20.8},0).wait(1).to({rotation:22.2},0).wait(1).to({rotation:23.6},0).wait(1).to({rotation:25},0).wait(1).to({rotation:26.4},0).wait(1).to({rotation:27.8},0).wait(1).to({rotation:29.2},0).wait(1).to({rotation:30.6},0).wait(1).to({rotation:32},0).wait(1).to({rotation:33.4},0).wait(1).to({rotation:34.7},0).wait(1).to({rotation:36.1},0).wait(1).to({rotation:37.5},0).wait(1).to({rotation:38.9},0).wait(1).to({rotation:40.3},0).wait(1).to({rotation:41.7},0).wait(1).to({rotation:43.1},0).wait(1).to({rotation:44.5},0).wait(1).to({rotation:45.9},0).wait(1).to({rotation:47.3},0).wait(1).to({rotation:48.6},0).wait(1).to({rotation:50},0).wait(1).to({rotation:51.4},0).wait(1).to({rotation:52.8},0).wait(1).to({rotation:54.2},0).wait(1).to({rotation:55.6},0).wait(1).to({rotation:57},0).wait(1).to({rotation:58.4},0).wait(1).to({rotation:59.8},0).wait(1).to({rotation:61.2},0).wait(1).to({rotation:62.5},0).wait(1).to({rotation:63.9},0).wait(1).to({rotation:65.3},0).wait(1).to({rotation:66.7},0).wait(1).to({rotation:68.1},0).wait(1).to({rotation:69.5},0).wait(1).to({rotation:70.9},0).wait(1).to({rotation:72.3},0).wait(1).to({rotation:73.7},0).wait(1).to({rotation:75.1},0).wait(1).to({rotation:76.4},0).wait(1).to({rotation:77.8},0).wait(1).to({rotation:79.2},0).wait(1).to({rotation:80.6},0).wait(1).to({rotation:82},0).wait(1).to({rotation:83.4},0).wait(1).to({rotation:84.8},0).wait(1).to({rotation:86.2},0).wait(1).to({rotation:87.6},0).wait(1).to({rotation:89},0).wait(1).to({rotation:90.3},0).wait(1).to({rotation:91.7},0).wait(1).to({rotation:93.1},0).wait(1).to({rotation:94.5},0).wait(1).to({rotation:95.9},0).wait(1).to({rotation:97.3},0).wait(1).to({rotation:98.7},0).wait(1).to({rotation:100.1},0).wait(1).to({rotation:101.5},0).wait(1).to({rotation:102.9},0).wait(1).to({rotation:104.2},0).wait(1).to({rotation:105.6},0).wait(1).to({rotation:107},0).wait(1).to({rotation:108.4},0).wait(1).to({rotation:109.8},0).wait(1).to({rotation:111.2},0).wait(1).to({rotation:112.6},0).wait(1).to({rotation:114},0).wait(1).to({rotation:115.4},0).wait(1).to({rotation:116.8},0).wait(1).to({rotation:118.1},0).wait(1).to({rotation:119.5},0).wait(1).to({rotation:120.9},0).wait(1).to({rotation:122.3},0).wait(1).to({rotation:123.7},0).wait(1).to({rotation:125.1},0).wait(1).to({rotation:126.5},0).wait(1).to({rotation:127.9},0).wait(1).to({rotation:129.3},0).wait(1).to({rotation:130.7},0).wait(1).to({rotation:132},0).wait(1).to({rotation:133.4},0).wait(1).to({rotation:134.8},0).wait(1).to({rotation:136.2},0).wait(1).to({rotation:137.6},0).wait(1).to({rotation:139},0).wait(1).to({rotation:140.4},0).wait(1).to({rotation:141.8},0).wait(1).to({rotation:143.2},0).wait(1).to({rotation:144.6},0).wait(1).to({rotation:145.9},0).wait(1).to({rotation:147.3},0).wait(1).to({rotation:148.7},0).wait(1).to({rotation:150.1},0).wait(1).to({rotation:151.5},0).wait(1).to({rotation:152.9},0).wait(1).to({rotation:154.3},0).wait(1).to({rotation:155.7},0).wait(1).to({rotation:157.1},0).wait(1).to({rotation:158.5},0).wait(1).to({rotation:159.8},0).wait(1).to({rotation:161.2},0).wait(1).to({rotation:162.6},0).wait(1).to({rotation:164},0).wait(1).to({rotation:165.4},0).wait(1).to({rotation:166.8},0).wait(1).to({rotation:168.2},0).wait(1).to({rotation:169.6},0).wait(1).to({rotation:171},0).wait(1).to({rotation:172.4},0).wait(1).to({rotation:173.7},0).wait(1).to({rotation:175.1},0).wait(1).to({rotation:176.5},0).wait(1).to({rotation:177.9},0).wait(1).to({rotation:179.3},0).wait(1).to({rotation:180.7},0).wait(1).to({rotation:182.1},0).wait(1).to({rotation:183.5},0).wait(1).to({rotation:184.9},0).wait(1).to({rotation:186.3},0).wait(1).to({rotation:187.6},0).wait(1).to({rotation:189},0).wait(1).to({rotation:190.4},0).wait(1).to({rotation:191.8},0).wait(1).to({rotation:193.2},0).wait(1).to({rotation:194.6},0).wait(1).to({rotation:196},0).wait(1).to({rotation:197.4},0).wait(1).to({rotation:198.8},0).wait(1).to({rotation:200.2},0).wait(1).to({rotation:201.5},0).wait(1).to({rotation:202.9},0).wait(1).to({rotation:204.3},0).wait(1).to({rotation:205.7},0).wait(1).to({rotation:207.1},0).wait(1).to({rotation:208.5},0).wait(1).to({rotation:209.9},0).wait(1).to({rotation:211.3},0).wait(1).to({rotation:212.7},0).wait(1).to({rotation:214.1},0).wait(1).to({rotation:215.4},0).wait(1).to({rotation:216.8},0).wait(1).to({rotation:218.2},0).wait(1).to({rotation:219.6},0).wait(1).to({rotation:221},0).wait(1).to({rotation:222.4},0).wait(1).to({rotation:223.8},0).wait(1).to({rotation:225.2},0).wait(1).to({rotation:226.6},0).wait(1).to({rotation:228},0).wait(1).to({rotation:229.3},0).wait(1).to({rotation:230.7},0).wait(1).to({rotation:232.1},0).wait(1).to({rotation:233.5},0).wait(1).to({rotation:234.9},0).wait(1).to({rotation:236.3},0).wait(1).to({rotation:237.7},0).wait(1).to({rotation:239.1},0).wait(1).to({rotation:240.5},0).wait(1).to({rotation:241.9},0).wait(1).to({rotation:243.2},0).wait(1).to({rotation:244.6},0).wait(1).to({rotation:246},0).wait(1).to({rotation:247.4},0).wait(1).to({rotation:248.8},0).wait(1).to({rotation:250.2},0).wait(1).to({rotation:251.6},0).wait(1).to({rotation:253},0).wait(1).to({rotation:254.4},0).wait(1).to({rotation:255.8},0).wait(1).to({rotation:257.1},0).wait(1).to({rotation:258.5},0).wait(1).to({rotation:259.9},0).wait(1).to({rotation:261.3},0).wait(1).to({rotation:262.7},0).wait(1).to({rotation:264.1},0).wait(1).to({rotation:265.5},0).wait(1).to({rotation:266.9},0).wait(1).to({rotation:268.3},0).wait(1).to({rotation:269.7},0).wait(1).to({rotation:271},0).wait(1).to({rotation:272.4},0).wait(1).to({rotation:273.8},0).wait(1).to({rotation:275.2},0).wait(1).to({rotation:276.6},0).wait(1).to({rotation:278},0).wait(1).to({rotation:279.4},0).wait(1).to({rotation:280.8},0).wait(1).to({rotation:282.2},0).wait(1).to({rotation:283.6},0).wait(1).to({rotation:284.9},0).wait(1).to({rotation:286.3},0).wait(1).to({rotation:287.7},0).wait(1).to({rotation:289.1},0).wait(1).to({rotation:290.5},0).wait(1).to({rotation:291.9},0).wait(1).to({rotation:293.3},0).wait(1).to({rotation:294.7},0).wait(1).to({rotation:296.1},0).wait(1).to({rotation:297.5},0).wait(1).to({rotation:298.8},0).wait(1).to({rotation:300.2},0).wait(1).to({rotation:301.6},0).wait(1).to({rotation:303},0).wait(1).to({rotation:304.4},0).wait(1).to({rotation:305.8},0).wait(1).to({rotation:307.2},0).wait(1).to({rotation:308.6},0).wait(1).to({rotation:310},0).wait(1).to({rotation:311.4},0).wait(1).to({rotation:312.7},0).wait(1).to({rotation:314.1},0).wait(1).to({rotation:315.5},0).wait(1).to({rotation:316.9},0).wait(1).to({rotation:318.3},0).wait(1).to({rotation:319.7},0).wait(1).to({rotation:321.1},0).wait(1).to({rotation:322.5},0).wait(1).to({rotation:323.9},0).wait(1).to({rotation:325.3},0).wait(1).to({rotation:326.6},0).wait(1).to({rotation:328},0).wait(1).to({rotation:329.4},0).wait(1).to({rotation:330.8},0).wait(1).to({rotation:332.2},0).wait(1).to({rotation:333.6},0).wait(1).to({rotation:335},0).wait(1).to({rotation:336.4},0).wait(1).to({rotation:337.8},0).wait(1).to({rotation:339.2},0).wait(1).to({rotation:340.5},0).wait(1).to({rotation:341.9},0).wait(1).to({rotation:343.3},0).wait(1).to({rotation:344.7},0).wait(1).to({rotation:346.1},0).wait(1).to({rotation:347.5},0).wait(1).to({rotation:348.9},0).wait(1).to({rotation:350.3},0).wait(1).to({rotation:351.7},0).wait(1).to({rotation:353.1},0).wait(1).to({rotation:354.4},0).wait(1).to({rotation:355.8},0).wait(1).to({rotation:357.2},0).wait(1).to({rotation:358.6},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-35.5,48,71);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ74();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:2},0).wait(1).to({rotation:4.1},0).wait(1).to({rotation:6.1},0).wait(1).to({rotation:8.1},0).wait(1).to({rotation:10.2},0).wait(1).to({rotation:12.2},0).wait(1).to({rotation:14.2},0).wait(1).to({rotation:16.3},0).wait(1).to({rotation:18.3},0).wait(1).to({rotation:20.3},0).wait(1).to({rotation:22.4},0).wait(1).to({rotation:24.4},0).wait(1).to({rotation:26.4},0).wait(1).to({rotation:28.5},0).wait(1).to({rotation:30.5},0).wait(1).to({rotation:32.5},0).wait(1).to({rotation:34.6},0).wait(1).to({rotation:36.6},0).wait(1).to({rotation:38.6},0).wait(1).to({rotation:40.7},0).wait(1).to({rotation:42.7},0).wait(1).to({rotation:44.7},0).wait(1).to({rotation:46.8},0).wait(1).to({rotation:48.8},0).wait(1).to({rotation:50.8},0).wait(1).to({rotation:52.9},0).wait(1).to({rotation:54.9},0).wait(1).to({rotation:56.9},0).wait(1).to({rotation:59},0).wait(1).to({rotation:61},0).wait(1).to({rotation:63.1},0).wait(1).to({rotation:65.1},0).wait(1).to({rotation:67.1},0).wait(1).to({rotation:69.2},0).wait(1).to({rotation:71.2},0).wait(1).to({rotation:73.2},0).wait(1).to({rotation:75.3},0).wait(1).to({rotation:77.3},0).wait(1).to({rotation:79.3},0).wait(1).to({rotation:81.4},0).wait(1).to({rotation:83.4},0).wait(1).to({rotation:85.4},0).wait(1).to({rotation:87.5},0).wait(1).to({rotation:89.5},0).wait(1).to({rotation:91.5},0).wait(1).to({rotation:93.6},0).wait(1).to({rotation:95.6},0).wait(1).to({rotation:97.6},0).wait(1).to({rotation:99.7},0).wait(1).to({rotation:101.7},0).wait(1).to({rotation:103.7},0).wait(1).to({rotation:105.8},0).wait(1).to({rotation:107.8},0).wait(1).to({rotation:109.8},0).wait(1).to({rotation:111.9},0).wait(1).to({rotation:113.9},0).wait(1).to({rotation:115.9},0).wait(1).to({rotation:118},0).wait(1).to({rotation:120},0).wait(1).to({rotation:122},0).wait(1).to({rotation:124.1},0).wait(1).to({rotation:126.1},0).wait(1).to({rotation:128.1},0).wait(1).to({rotation:130.2},0).wait(1).to({rotation:132.2},0).wait(1).to({rotation:134.2},0).wait(1).to({rotation:136.3},0).wait(1).to({rotation:138.3},0).wait(1).to({rotation:140.3},0).wait(1).to({rotation:142.4},0).wait(1).to({rotation:144.4},0).wait(1).to({rotation:146.4},0).wait(1).to({rotation:148.5},0).wait(1).to({rotation:150.5},0).wait(1).to({rotation:152.5},0).wait(1).to({rotation:154.6},0).wait(1).to({rotation:156.6},0).wait(1).to({rotation:158.6},0).wait(1).to({rotation:160.7},0).wait(1).to({rotation:162.7},0).wait(1).to({rotation:164.7},0).wait(1).to({rotation:166.8},0).wait(1).to({rotation:168.8},0).wait(1).to({rotation:170.8},0).wait(1).to({rotation:172.9},0).wait(1).to({rotation:174.9},0).wait(1).to({rotation:176.9},0).wait(1).to({rotation:179},0).wait(1).to({rotation:181},0).wait(1).to({rotation:183.1},0).wait(1).to({rotation:185.1},0).wait(1).to({rotation:187.1},0).wait(1).to({rotation:189.2},0).wait(1).to({rotation:191.2},0).wait(1).to({rotation:193.2},0).wait(1).to({rotation:195.3},0).wait(1).to({rotation:197.3},0).wait(1).to({rotation:199.3},0).wait(1).to({rotation:201.4},0).wait(1).to({rotation:203.4},0).wait(1).to({rotation:205.4},0).wait(1).to({rotation:207.5},0).wait(1).to({rotation:209.5},0).wait(1).to({rotation:211.5},0).wait(1).to({rotation:213.6},0).wait(1).to({rotation:215.6},0).wait(1).to({rotation:217.6},0).wait(1).to({rotation:219.7},0).wait(1).to({rotation:221.7},0).wait(1).to({rotation:223.7},0).wait(1).to({rotation:225.8},0).wait(1).to({rotation:227.8},0).wait(1).to({rotation:229.8},0).wait(1).to({rotation:231.9},0).wait(1).to({rotation:233.9},0).wait(1).to({rotation:235.9},0).wait(1).to({rotation:238},0).wait(1).to({rotation:240},0).wait(1).to({rotation:242},0).wait(1).to({rotation:244.1},0).wait(1).to({rotation:246.1},0).wait(1).to({rotation:248.1},0).wait(1).to({rotation:250.2},0).wait(1).to({rotation:252.2},0).wait(1).to({rotation:254.2},0).wait(1).to({rotation:256.3},0).wait(1).to({rotation:258.3},0).wait(1).to({rotation:260.3},0).wait(1).to({rotation:262.4},0).wait(1).to({rotation:264.4},0).wait(1).to({rotation:266.4},0).wait(1).to({rotation:268.5},0).wait(1).to({rotation:270.5},0).wait(1).to({rotation:272.5},0).wait(1).to({rotation:274.6},0).wait(1).to({rotation:276.6},0).wait(1).to({rotation:278.6},0).wait(1).to({rotation:280.7},0).wait(1).to({rotation:282.7},0).wait(1).to({rotation:284.7},0).wait(1).to({rotation:286.8},0).wait(1).to({rotation:288.8},0).wait(1).to({rotation:290.8},0).wait(1).to({rotation:292.9},0).wait(1).to({rotation:294.9},0).wait(1).to({rotation:296.9},0).wait(1).to({rotation:299},0).wait(1).to({rotation:301},0).wait(1).to({rotation:303.1},0).wait(1).to({rotation:305.1},0).wait(1).to({rotation:307.1},0).wait(1).to({rotation:309.2},0).wait(1).to({rotation:311.2},0).wait(1).to({rotation:313.2},0).wait(1).to({rotation:315.3},0).wait(1).to({rotation:317.3},0).wait(1).to({rotation:319.3},0).wait(1).to({rotation:321.4},0).wait(1).to({rotation:323.4},0).wait(1).to({rotation:325.4},0).wait(1).to({rotation:327.5},0).wait(1).to({rotation:329.5},0).wait(1).to({rotation:331.5},0).wait(1).to({rotation:333.6},0).wait(1).to({rotation:335.6},0).wait(1).to({rotation:337.6},0).wait(1).to({rotation:339.7},0).wait(1).to({rotation:341.7},0).wait(1).to({rotation:343.7},0).wait(1).to({rotation:345.8},0).wait(1).to({rotation:347.8},0).wait(1).to({rotation:349.8},0).wait(1).to({rotation:351.9},0).wait(1).to({rotation:353.9},0).wait(1).to({rotation:355.9},0).wait(1).to({rotation:358},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-22.5,33,45);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ71();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3.6},0).wait(1).to({rotation:7.3},0).wait(1).to({rotation:10.9},0).wait(1).to({rotation:14.5},0).wait(1).to({rotation:18.2},0).wait(1).to({rotation:21.8},0).wait(1).to({rotation:25.5},0).wait(1).to({rotation:29.1},0).wait(1).to({rotation:32.7},0).wait(1).to({rotation:36.4},0).wait(1).to({rotation:40},0).wait(1).to({rotation:43.6},0).wait(1).to({rotation:47.3},0).wait(1).to({rotation:50.9},0).wait(1).to({rotation:54.5},0).wait(1).to({rotation:58.2},0).wait(1).to({rotation:61.8},0).wait(1).to({rotation:65.5},0).wait(1).to({rotation:69.1},0).wait(1).to({rotation:72.7},0).wait(1).to({rotation:76.4},0).wait(1).to({rotation:80},0).wait(1).to({rotation:83.6},0).wait(1).to({rotation:87.3},0).wait(1).to({rotation:90.9},0).wait(1).to({rotation:94.5},0).wait(1).to({rotation:98.2},0).wait(1).to({rotation:101.8},0).wait(1).to({rotation:105.5},0).wait(1).to({rotation:109.1},0).wait(1).to({rotation:112.7},0).wait(1).to({rotation:116.4},0).wait(1).to({rotation:120},0).wait(1).to({rotation:123.6},0).wait(1).to({rotation:127.3},0).wait(1).to({rotation:130.9},0).wait(1).to({rotation:134.5},0).wait(1).to({rotation:138.2},0).wait(1).to({rotation:141.8},0).wait(1).to({rotation:145.5},0).wait(1).to({rotation:149.1},0).wait(1).to({rotation:152.7},0).wait(1).to({rotation:156.4},0).wait(1).to({rotation:160},0).wait(1).to({rotation:163.6},0).wait(1).to({rotation:167.3},0).wait(1).to({rotation:170.9},0).wait(1).to({rotation:174.5},0).wait(1).to({rotation:178.2},0).wait(1).to({rotation:181.8},0).wait(1).to({rotation:185.5},0).wait(1).to({rotation:189.1},0).wait(1).to({rotation:192.7},0).wait(1).to({rotation:196.4},0).wait(1).to({rotation:200},0).wait(1).to({rotation:203.6},0).wait(1).to({rotation:207.3},0).wait(1).to({rotation:210.9},0).wait(1).to({rotation:214.5},0).wait(1).to({rotation:218.2},0).wait(1).to({rotation:221.8},0).wait(1).to({rotation:225.5},0).wait(1).to({rotation:229.1},0).wait(1).to({rotation:232.7},0).wait(1).to({rotation:236.4},0).wait(1).to({rotation:240},0).wait(1).to({rotation:243.6},0).wait(1).to({rotation:247.3},0).wait(1).to({rotation:250.9},0).wait(1).to({rotation:254.5},0).wait(1).to({rotation:258.2},0).wait(1).to({rotation:261.8},0).wait(1).to({rotation:265.5},0).wait(1).to({rotation:269.1},0).wait(1).to({rotation:272.7},0).wait(1).to({rotation:276.4},0).wait(1).to({rotation:280},0).wait(1).to({rotation:283.6},0).wait(1).to({rotation:287.3},0).wait(1).to({rotation:290.9},0).wait(1).to({rotation:294.5},0).wait(1).to({rotation:298.2},0).wait(1).to({rotation:301.8},0).wait(1).to({rotation:305.5},0).wait(1).to({rotation:309.1},0).wait(1).to({rotation:312.7},0).wait(1).to({rotation:316.4},0).wait(1).to({rotation:320},0).wait(1).to({rotation:323.6},0).wait(1).to({rotation:327.3},0).wait(1).to({rotation:330.9},0).wait(1).to({rotation:334.5},0).wait(1).to({rotation:338.2},0).wait(1).to({rotation:341.8},0).wait(1).to({rotation:345.5},0).wait(1).to({rotation:349.1},0).wait(1).to({rotation:352.7},0).wait(1).to({rotation:356.4},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-21,58,42);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(52.3,-57.6,0.371,0.371,7.8,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.damoc_05();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-102.3,-129.4,0.886,0.886);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(-102.3,-129.4,204.8,258.8), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.parent = this;
	this.instance.setTransform(-89.2,112,1,1,0,0,0,-89.2,112);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-89.1,rotation:8.7,x:-89.1},4,cjs.Ease.get(-1)).to({regX:-89.2,rotation:0,x:-89.2},4,cjs.Ease.get(1)).wait(1).to({regX:-89.1,rotation:8.7,x:-89.1},4,cjs.Ease.get(-1)).to({regX:-89.2,rotation:0,x:-89.2},4,cjs.Ease.get(1)).wait(1).to({regX:-89.1,rotation:8.7,x:-89.1},4,cjs.Ease.get(-1)).to({regX:-89.2,rotation:0,x:-89.2},4,cjs.Ease.get(1)).wait(1).to({regX:-89.1,rotation:8.7,x:-89.1},4,cjs.Ease.get(-1)).to({regX:-89.2,rotation:0,x:-89.2},4,cjs.Ease.get(1)).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.3,-129.4,204.8,258.8);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(0,-2);

	this.instance_1 = new lib.Символ38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,2);
	this.instance_1.alpha = 0.719;
	this.instance_1.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance_1.cache(-134,-29,269,59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-137.3,-30.5,278,68), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.148},19,cjs.Ease.get(1)).to({alpha:0},20,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-2);

	this.instance_2 = new lib.Символ38();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,2);
	this.instance_2.alpha = 0.719;
	this.instance_2.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance_2.cache(-134,-29,269,59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.3,-30.5,278,68);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(-0.3,0.4,0.447,0.447);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-137.3,-28.5,278,68), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxaDqIAAg2IgZgFQgbgJgTgNQgVgPgLgWQgGgKgCgMQgDgNAAgOIBWAAQAAAPASAKIAKAEIAAg7QgTgDgPgEQgYgHgQgMQgRgMgJgUQgJgTAAgcQgBgmApgwIAGgDQAIgGAKgEQAKgFAKgDQAMgEANgBIAAg1IA5AAIAAA2IARAEQAYAIATANQAUAPAKAVQAGALADAMQADANgBAOIhVAAQAAgRgOgJIgCgBIAABAQAPACAKACQAbAGARAKQAVALAKASQAGALADAMQADANAAAQQgSBCgaASQgUAOgaAHIgWAEIAAA3gAwhBgIAIgCQARgJAAgPQAAgIgFgHQgFgFgJgEIgGgCgAxiheQgPAKgBAPQgBAJAEAGQAEAHAIAEIAJADIAAg5IgIADgAQXCsQgYgIgSgPQgSgRgKgVIgIgYIgCgcIAAh6QAAgSAKggQAKgWASgQQASgQAYgIQAYgIAaAAQAcAAAXAIQAZAIARAQQASAQAKAWQALAgAAASIAAB6IgCAcIgJAYQgKAVgSARQgRAPgZAIQgXAJgcAAQgaAAgYgJgAQphcQgNALAAAVIAAB2QAAAUANAMQAMALAUAAQAVAAANgLQAOgMAAgUIAAh2QAAgVgOgLQgNgLgVAAQgTAAgNALgALCCsQgYgIgSgPQgSgRgKgVIgIgYIgCgcIAAh6QAAgSAKggQAKgWASgQQASgQAYgIQAYgIAaAAQAcAAAYAIQAYAIASAQQASAQAKAWQAKAgAAASIAAB6IgCAcIgIAYQgKAVgSARQgSAPgYAIQgYAJgcAAQgaAAgYgJgALUhcQgNALAAAVIAAB2QAAAUANAMQAMALAUAAQAWAAAMgLQAOgMAAgUIAAh2QAAgVgOgLQgMgLgWAAQgTAAgNALgAFtCsQgXgIgTgPQgSgRgKgVIgHgYIgDgcIAAh6QAAgSAKggQAKgWASgQQATgQAXgIQAYgIAaAAQAcAAAYAIQAYAIASAQQASAQAKAWQALAgAAASIAAB6IgDAcIgIAYQgKAVgSARQgSAPgYAIQgYAJgcAAQgaAAgYgJgAGAhcQgOALAAAVIAAB2QAAAUAOAMQALALAUAAQAWAAAMgLQAOgMAAgUIAAh2QAAgVgOgLQgMgLgWAAQgTAAgMALgAhwCsQgYgIgSgPQgSgRgKgVIgIgYIgCgcIAAh6QAAgSAKggQAKgWASgQQASgQAYgIQAYgIAaAAQAbAAAYAIQAYAIARAQQASAQAKAWQALAgAAASIAAB6IgCAcIgJAYQgKAVgSARQgRAPgYAIQgYAJgbAAQgaAAgYgJgAhehcQgNALAAAVIAAB2QAAAUANAMQAMALAUAAQAVAAANgLQAOgMAAgUIAAh2QAAgVgOgLQgNgLgVAAQgTAAgNALgAnFCsQgYgIgSgPQgSgRgKgVIgIgYIgCgcIAAh6QAAgSAKggQAKgWASgQQASgQAYgIQAYgIAaAAQAcAAAYAIQAYAIASAQQASAQAKAWQAKAgAAASIAAB6IgCAcIgIAYQgKAVgSARQgSAPgYAIQgYAJgcAAQgaAAgYgJgAmzhcQgNALAAAVIAAB2QAAAUANAMQAMALAUAAQAVAAANgLQAOgMAAgUIAAh2QAAgVgOgLQgNgLgVAAQgTAAgNALgAsHCuIAAhKIA0AAIAAjLIgvAAIAAhJICGAAIAAEUIA1AAIAABKg");

	// Слой 2
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(-153.1,-17,1,0.716,20,0,0,-0.2,-0.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:169.6,y:-4.8},29).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.9,-23.4,18.5,46.8);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ32();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-201.1,-85.3,324.1,136.1), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEtDSIAAggIiuAAIAAAgIg+AAIAAhiIAdAAIBljpIAhAAIBoDpIAfAAIAABigACqBvIBUAAIgrhrgAjuCwQgUgHgPgNQgQgNgIgTIgGgUIgCgXIAAhmQAAgQAIgbQAIgTAQgNQAPgNAUgGQAUgHAXAAQAWAAAUAHQAVAGAPANQAPANAIATQAKAbgBAQIAABmIgBAXIgIAUQgIATgPANQgPANgVAHQgUAHgWAAQgXAAgUgHgAjeguQgMAKAAAQIAABjQAAASAMAKQAJAJASAAQASAAAKgJQALgKAAgSIAAhjQAAgQgLgKQgKgJgSAAQgRAAgKAJgAnpCzQgMgDgLgGQgLgGgJgIQgIgJgHgKQgGgLgEgMQgDgNgBgOIBCAAQABAOAJAHQAIAIAPAAQAQAAAJgLQAHgJABgPQAAgQgHgJQgGgIgMgEQgKgDgPgBIgZABIAAgLIAohQIhWAAIAAhDIC8AAIAAALIg2BkQAQAEANAIQAMAIAGAMQAHAMADAOQADANAAAPQABATgIASQgGATgNAOQgNAPgUAJQgbAJgSAAQgPAAgOgEgAyQCwQgUgHgNgNQgNgNgHgSQgHgUAAgYIBCAAQAAARAKAKQAKAKAQAAQATAAAKgKQAKgJAAgOQAAgNgKgKQgKgKgTAAIgUAAIAAg9IAUAAQANAAAIgIQAGgHAAgKQAAgLgGgHQgIgIgNAAQgMAAgHAFQgGAEAAAIIhEAAQAAgUAHgPQAHgPANgKQAMgKASgEQARgFATAAQAYAAATAHQARAGANANQAMAMAGAPQAHAQgBAQQAAAPgGAPQgHAOgMAKQALAGAIAHQAIAIAGAJQAFAJADAKQABALAAAMQABAUgIARQgHARgOANQgPAMgUAHQgXAIgcAAQgXAAgTgHgAPRCxIAAkmIBMAAIAACPICViQIAbAAIAAEnIhNAAIAAiRIiVCRgALRCxIAAkmIC4AAIAABDIhtAAIAAAqIBkAAIAABCIhkAAIAAA0IBxAAIAABDgAI5CxIAAh3IhbAAIAAB3IhNAAIAAkmIBNAAIAABrIBbAAIAAhrIBNAAIAAEmgAsBCxIgRglIh0AAIgRAlIhKAAIAAgLICFkfIAgAAICFEfIAAALgAttBLIBDAAIgihMgAQ8iJQgOgFgKgJQgIgKgFgNQgGgOgBgRIAsgEQAAALAJAGQAHAGANAAQAOAAAHgFQAJgFABgNIAsAEQAAARgGAOQgFANgJAKQgJAJgOAFQgNAEgSAAQgRAAgNgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(0,2.5);
	this.instance.alpha = 0.5;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-125,-23,250,46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-124.9,-21,252,49.5), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,3.1);
	this.instance_1.alpha = 0.5;
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-125,-25,250,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-201.1,-85.2,328.3,136.2), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADjCyQgNgFgLgHQgMgHgJgJQgLgJgIgLQgJgMgGgNQgFgOgEgQQgCgQAAgSQgBhgCQgwQASAAAiAJQANAFAMAGQAMAHAKAJQAKAJAIAMQAIALAGAOQAGANADAPQADAQABASQAABhiQAxQgkgDgRgGgAD/gdQgOAFgJAJQgLAKgFANQgGAPAAASQAAASAGAQQAFANALAKQAJAKAOAFQAMAEANAAQANAAANgEQANgFAJgKQAKgKAHgNQAFgQAAgSQAAgSgFgPQgHgNgKgKQgJgJgNgFQgNgEgNAAQgNAAgMAEgAyUC0QgRgGgNgNQgNgMgGgSQgIgSABgXIA/AAQgBAQAKAKQAKAJAQAAQAQAAALgJQAIgJABgNQgBgNgIgJQgLgKgQAAIgUAAIAAg6IATAAQAMAAAIgHQAGgHAAgKQAAgKgGgHQgIgHgLAAQgMAAgGAEQgHAEAAAIIhAAAQAAgTAGgOQAHgOAMgKQAMgJARgFQAQgEATAAQAVAAASAGQASAHALAMQAMALAGAPQAFAOAAAQQABAOgHANQgGAPgMAJQALAFAHAHQAIAIAFAIQAFAJADAKQACAKAAAMQgBATgGAQQgHAQgNAMQgOAMgUAGQgVAHgaAAQgXAAgTgGgAPdC1IAAkXIBJAAIAACIICNiJIAaAAIAAEYIhJAAIAAiKIiOCKgANwC1IgQgjIhvAAIgQAjIhGAAIAAgLIB+kQIAeAAIB/EQIAAALgAMJBUIBAAAIghhJgAIHC1IAAjXIhFAAIAAhAIDQAAIAABAIhEAAIAADXgAh7C1IAAkXIDIAAIAABAIiAAAIAAAiIAzAAQAQAAAbAHQASAHAOANQAMANAHAQQAGAQAAASQAAARgGAQQgHARgMAMQgOAOgSAHQgbAIgQAAgAgzB1IAzAAQANAAAIgJQAIgIAAgLQAAgLgIgHQgIgJgNAAIgzAAgAjlC1IgRgjIhuAAIgRAjIhGAAIAAgLIB+kQIAfAAIB/EQIAAALgAlNBUIBAAAIgghJgAqtC1IAAkXIB7AAQAiAAApAgQANAPAGATQAHASAAATQAAAUgHASQgGATgNAPQgMAPgTAIQgJAFgLACQgMACgMAAIg0AAIAABIgApmAtIA0AAQAOAAAIgNQAIgLAAgQQABgPgIgMQgEgFgGgEQgFgDgIAAIg0AAgAsYC1IgPgjIhwAAIgPAjIhGAAIAAgLIB+kQIAeAAIB+EQIAAALgAt/BUIBAAAIghhJgARDh2QgNgEgJgJQgJgJgEgMQgGgNAAgRIAqgEQAAALAIAGQAGAFANAAQANAAAHgFQAIgFABgMIAqAEQgBARgFANQgEAMgJAJQgJAJgNAEQgMAFgRAAQgRAAgMgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(0,2.5);
	this.instance.alpha = 0.5;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-125,-21,250,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-124.9,-18.7,252,45.5), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dollars.png
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(556,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({y:2.8},5,cjs.Ease.get(-1)).to({y:6},6,cjs.Ease.get(1)).to({y:3},6,cjs.Ease.get(-1)).to({y:0},6,cjs.Ease.get(1)).wait(4));

	// dollars.png
	this.instance_1 = new lib.Символ18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(429,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({y:2.8},5,cjs.Ease.get(-1)).to({y:6},6,cjs.Ease.get(1)).to({y:3},6,cjs.Ease.get(-1)).to({y:0},6,cjs.Ease.get(1)).wait(7));

	// dollars.png
	this.instance_2 = new lib.Символ19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(292,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({y:2.8},5,cjs.Ease.get(-1)).to({y:6},6,cjs.Ease.get(1)).to({y:3},6,cjs.Ease.get(-1)).to({y:0},6,cjs.Ease.get(1)).wait(10));

	// dollars.png
	this.instance_3 = new lib.Символ20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(144,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({y:2.8},5,cjs.Ease.get(-1)).to({y:6},6,cjs.Ease.get(1)).to({y:3},6,cjs.Ease.get(-1)).to({y:0},6,cjs.Ease.get(1)).wait(13));

	// dollars.png
	this.instance_4 = new lib.Символ21();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({y:2.8},5,cjs.Ease.get(-1)).to({y:6},6,cjs.Ease.get(1)).to({y:3},6,cjs.Ease.get(-1)).to({y:0},6,cjs.Ease.get(1)).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,-41,773,81);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-187.9,-171.2,375.9,342.5), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.alpha = 0.941;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-40,-9,80,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-40.1,-9.4,84,22), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AsLBOIAclYIX7B+IgcFYg");
	var mask_graphics_1 = new cjs.Graphics().p("AsLBmIAclYIX7B+IgcFYg");
	var mask_graphics_2 = new cjs.Graphics().p("AsLBtIAclXIX7B+IgcFXg");
	var mask_graphics_3 = new cjs.Graphics().p("AsLBuIAclYIX7B+IgcFYg");
	var mask_graphics_4 = new cjs.Graphics().p("AsLBuIAclZIX7B+IgcFZg");
	var mask_graphics_5 = new cjs.Graphics().p("AsLBuIAclZIX7B+IgcFZg");
	var mask_graphics_6 = new cjs.Graphics().p("AsLBtIAclYIX7B+IgcFYg");
	var mask_graphics_7 = new cjs.Graphics().p("AsLBuIAclZIX7B+IgcFZg");
	var mask_graphics_8 = new cjs.Graphics().p("AsLBuIAclZIX7B+IgcFZg");
	var mask_graphics_9 = new cjs.Graphics().p("AsLBuIAclYIX7B+IgcFYg");
	var mask_graphics_10 = new cjs.Graphics().p("AsLBtIAclXIX7B+IgcFXg");
	var mask_graphics_11 = new cjs.Graphics().p("AsLBmIAclYIX7B+IgcFYg");
	var mask_graphics_12 = new cjs.Graphics().p("AsLBOIAclYIX7B+IgcFYg");
	var mask_graphics_13 = new cjs.Graphics().p("AsLBOIAclYIX7B+IgcFYg");
	var mask_graphics_14 = new cjs.Graphics().p("AsLBmIAclYIX7B+IgcFYg");
	var mask_graphics_15 = new cjs.Graphics().p("AsLBtIAclXIX7B+IgcFXg");
	var mask_graphics_16 = new cjs.Graphics().p("AsLBuIAclYIX7B+IgcFYg");
	var mask_graphics_17 = new cjs.Graphics().p("AsLBuIAclZIX7B+IgcFZg");
	var mask_graphics_18 = new cjs.Graphics().p("AsLBuIAclZIX7B+IgcFZg");
	var mask_graphics_19 = new cjs.Graphics().p("AsLBtIAclYIX7B+IgcFYg");
	var mask_graphics_20 = new cjs.Graphics().p("AsLBuIAclZIX7B+IgcFZg");
	var mask_graphics_21 = new cjs.Graphics().p("AsLBuIAclZIX7B+IgcFZg");
	var mask_graphics_22 = new cjs.Graphics().p("AsLBuIAclYIX7B+IgcFYg");
	var mask_graphics_23 = new cjs.Graphics().p("AsLBtIAclXIX7B+IgcFXg");
	var mask_graphics_24 = new cjs.Graphics().p("AsLBmIAclYIX7B+IgcFYg");
	var mask_graphics_25 = new cjs.Graphics().p("AsLBOIAclYIX7B+IgcFYg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:2.7,y:-26.7}).wait(1).to({graphics:mask_graphics_1,x:2.7,y:-24.3}).wait(1).to({graphics:mask_graphics_2,x:2.7,y:-20.3}).wait(1).to({graphics:mask_graphics_3,x:2.7,y:-15.5}).wait(1).to({graphics:mask_graphics_4,x:2.7,y:-10.8}).wait(1).to({graphics:mask_graphics_5,x:2.7,y:-6}).wait(1).to({graphics:mask_graphics_6,x:2.7,y:-1.2}).wait(1).to({graphics:mask_graphics_7,x:2.7,y:-6}).wait(1).to({graphics:mask_graphics_8,x:2.7,y:-10.8}).wait(1).to({graphics:mask_graphics_9,x:2.7,y:-15.5}).wait(1).to({graphics:mask_graphics_10,x:2.7,y:-20.3}).wait(1).to({graphics:mask_graphics_11,x:2.7,y:-24.3}).wait(1).to({graphics:mask_graphics_12,x:2.7,y:-26.7}).wait(1).to({graphics:mask_graphics_13,x:2.7,y:-26.7}).wait(1).to({graphics:mask_graphics_14,x:2.7,y:-24.3}).wait(1).to({graphics:mask_graphics_15,x:2.7,y:-20.3}).wait(1).to({graphics:mask_graphics_16,x:2.7,y:-15.5}).wait(1).to({graphics:mask_graphics_17,x:2.7,y:-10.8}).wait(1).to({graphics:mask_graphics_18,x:2.7,y:-6}).wait(1).to({graphics:mask_graphics_19,x:2.7,y:-1.2}).wait(1).to({graphics:mask_graphics_20,x:2.7,y:-6}).wait(1).to({graphics:mask_graphics_21,x:2.7,y:-10.8}).wait(1).to({graphics:mask_graphics_22,x:2.7,y:-15.5}).wait(1).to({graphics:mask_graphics_23,x:2.7,y:-20.3}).wait(1).to({graphics:mask_graphics_24,x:2.7,y:-24.3}).wait(1).to({graphics:mask_graphics_25,x:2.7,y:-26.7}).wait(30));

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.1,-9.4,84,3.1);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.166,1.166);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-373,-177.7,746,355.5), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(0,-21);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0,alpha:1},99).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:40},49,cjs.Ease.get(1)).to({y:0},50,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-373,-198.7,746,376.5);


(lib.Символ85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ84();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-6.1,y:181.9},29).to({x:130,y:370},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-18.5,47,37);


(lib.Символ82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ81();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:29.5,y:188.5},41).to({x:-51,y:370},48).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-28,67,56);


(lib.Символ79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ78();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-203.7,y:183.6},74).to({x:-120.4,y:277.5},53).to({x:-238.9,y:437},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-35.5,48,71);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ75();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:154,y:221.3},59).to({x:0,y:404},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-22.5,33,45);


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ72();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-59.6,y:201.9},49).to({x:21,y:408},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-21,58,42);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bablo_16.png
	this.instance = new lib.Символ73();
	this.instance.parent = this;
	this.instance.setTransform(-357,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bablo_13.png
	this.instance_1 = new lib.Символ76();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-158.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bablo_08.png
	this.instance_2 = new lib.Символ79();
	this.instance_2.parent = this;
	this.instance_2.setTransform(33,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bablo_05.png
	this.instance_3 = new lib.Символ82();
	this.instance_3.parent = this;
	this.instance_3.setTransform(154.5,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bablo_03.png
	this.instance_4 = new lib.Символ85();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-272.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ70, new cjs.Rectangle(-386,-37,574,82), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(14.7,-71.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(-132.5,-177.2,265,354.5), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// damoc_05.png
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(65.4,39.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// damoc_02.png
	this.instance_1 = new lib.Символ54();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-51.5,-16.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-184,-194,351.8,362.8), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.09,scaleY:1.09},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(1).to({scaleX:1.09,scaleY:1.09},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.3,-30.5,278,68);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(0,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.92,scaleY:0.92},9,cjs.Ease.get(1)).to({scaleX:1.06,scaleY:1.06},5,cjs.Ease.get(1)).to({regY:-0.1,scaleX:0.98,scaleY:0.98,y:-1.7},3,cjs.Ease.get(1)).to({regY:0,scaleX:1.06,scaleY:1.06,y:-1.6},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-201.1,-86.8,328.3,136.1);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 25
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(0,53.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 24
	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 23
	this.instance_2 = new lib.Символ23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-38.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-201.1,-74.7,328.3,157.4), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:9.8},19,cjs.Ease.get(-1)).to({y:20},20,cjs.Ease.get(1)).to({y:10},20,cjs.Ease.get(-1)).to({y:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.9,-171.2,375.9,342.5);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(6.4,9.9,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:0.1,x:6.5,y:19.7},14,cjs.Ease.get(-1)).to({regX:0,regY:0,x:6.4,y:29.9},15,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,x:6.5,y:20},15,cjs.Ease.get(-1)).to({regX:0,regY:0,x:6.4,y:9.9},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.2,-142.5,276.5,285.1);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.3,-30.5,278,68);


// stage content:
(lib._640x305 = function(mode,startPosition,loop) {
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

	// Слой 11
	this.priz_btn = new lib.Символ57();
	this.priz_btn.parent = this;
	this.priz_btn.setTransform(949.2,192);
	new cjs.ButtonHelper(this.priz_btn, 0, 1, 2, false, new lib.Символ57(), 3);

	this.timeline.addTween(cjs.Tween.get(this.priz_btn).wait(1));

	// Слой 8
	this.btn = new lib.Символ44();
	this.btn.parent = this;
	this.btn.setTransform(140,264.7,0.879,0.879);
	new cjs.ButtonHelper(this.btn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Слой 5
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(181.6,121.5,1.282,1.282,0,0,0,0.2,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(78.6,22.9,0.661,0.661,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(453.1,170.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 10
	this.instance_3 = new lib.Символ56();
	this.instance_3.parent = this;
	this.instance_3.setTransform(853.9,165.7,1.085,1.085);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 6
	this.instance_4 = new lib.Символ16();
	this.instance_4.parent = this;
	this.instance_4.setTransform(66,279);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 3
	this.instance_5 = new lib.Символ70();
	this.instance_5.parent = this;
	this.instance_5.setTransform(649.5,-45.5);

	this.instance_6 = new lib.Символ70();
	this.instance_6.parent = this;
	this.instance_6.setTransform(388.5,-55.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// Слой 1
	this.instance_7 = new lib.Символ2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(320,131.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(243.4,60,1128.8,434.5);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bablo_03.png?1495116153502", id:"bablo_03"},
		{src:"images/bablo_05.png?1495116153502", id:"bablo_05"},
		{src:"images/bablo_08.png?1495116153502", id:"bablo_08"},
		{src:"images/bablo_13.png?1495116153502", id:"bablo_13"},
		{src:"images/bablo_16.png?1495116153502", id:"bablo_16"},
		{src:"images/bg.jpg?1495116153502", id:"bg"},
		{src:"images/blik.png?1495116153502", id:"blik"},
		{src:"images/damoc_02.png?1495116153502", id:"damoc_02"},
		{src:"images/damoc_05.png?1495116153502", id:"damoc_05"},
		{src:"images/dollars.png?1495116153502", id:"dollars"},
		{src:"images/logo.png?1495116153502", id:"logo"},
		{src:"images/man.png?1495116153502", id:"man"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;