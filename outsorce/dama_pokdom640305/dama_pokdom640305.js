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


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.blik = function() {
	this.initialize(img.blik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,192);


(lib.card = function() {
	this.initialize(img.card);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,33);


(lib.damochka = function() {
	this.initialize(img.damochka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,368);


(lib.dev2 = function() {
	this.initialize(img.dev2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,402);


(lib.fishka = function() {
	this.initialize(img.fishka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,108);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,34);


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,67);


(lib.ruka1 = function() {
	this.initialize(img.ruka1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,46);// helper functions:

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


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-138,-5.5,330.9,-5.5).s().p("EgkoAMHIAA4NMBJRAAAIAAYNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ69, new cjs.Rectangle(-234.4,-77.5,469,155), null);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(-332.3,-158.3,1.038,1.038);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ68, new cjs.Rectangle(-332.3,-158.3,664.6,316.7), null);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(-332.3,-158.3,1.038,1.038);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ67, new cjs.Rectangle(-332.3,-158.3,664.6,316.7), null);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC33").s().p("A0pEiIAApDMApTAAAIAAJDg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC33").s().p("AzaERQgogBAAgoIAAnPQAAgoAogBMAm1AAAQAoABAAAoIAAHPQAAAogoABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ63, new cjs.Rectangle(-128.3,-27.2,256.6,54.5), null);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E160B").s().p("AjPAoQgRgJgCgIQgCgIANgLQANgLAUgBQAUgBAWAHQAXAHAFAPQAFAPgQAFQgQAEgaACIgIABQgVAAgNgHgABsANQgTgBADgSQADgTARgLQAQgKAeAAQAdABATALQATAKACAGQACAGgTAKQgSAJggADQgcADgTAAIgFAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ61, new cjs.Rectangle(-22.7,-4.6,45.5,9.3), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blik();
	this.instance.parent = this;
	this.instance.setTransform(-31,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(-31,-96,63,192), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fishka();
	this.instance.parent = this;
	this.instance.setTransform(-38.4,-38.1,0.706,0.706);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-38.4,-38.1,76.9,76.2), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fishka();
	this.instance.parent = this;
	this.instance.setTransform(-31.5,-31.2,0.578,0.578);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-31.5,-31.2,63,62.4), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fishka();
	this.instance.parent = this;
	this.instance.setTransform(-41.5,-41.1,0.761,0.761);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-41.5,-41.1,83,82.3), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fishka();
	this.instance.parent = this;
	this.instance.setTransform(-54.5,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-54.5,-54,109,108), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ANUChQgMgEgIgJQgRgSAAgiIAAiRQAAgiARgSQAIgJAMgFQANgEAQAAQAgAAARASQAIAJAEANQAEANAAARIAAAbIgpAAIAAgeQAAgPgGgGQgGgGgLAAQgKAAgHAGQgGAGAAAPIAACWQAAAQAGAGQAHAGAKAAQALAAAGgGQAGgGAAgQIAAgoIApAAIAAAmQAAARgEANQgEANgIAJQgIAJgNAEQgMAFgQAAQgQAAgNgFgAA+ChQgMgEgIgJQgRgSAAgiIAAiRQAAgiARgSQAIgJAMgFQANgEAQAAQAgAAARASQAIAJAEANQAEANAAARIAAAbIgpAAIAAgeQAAgPgGgGQgGgGgLAAQgKAAgHAGQgGAGAAAPIAACWQAAAQAGAGQAHAGAKAAQALAAAGgGQAGgGAAgQIAAgoIApAAIAAAmQAAARgEANQgEANgIAJQgIAJgNAEQgMAFgQAAQgQAAgNgFgALzCjIgIgzIg2AAIgHAzIgpAAIAtkXIBBAAIAsEXgALlBKIgViNIgVCNIAqAAgAJFCjIAAhsIgLADIgNAAQgQAAgMgEQgMgFgJgJQgQgSAAghIAAhpIAsAAIAABsQAAAOAGAGQAGAGALAAQAKAAAGgFQAFgGABgMIAAhvIAsAAIAAEXgAGuCjIAAjKIg3DKIgtAAIAAkXIAoAAIAACmIAtimIA3AAIAAEXgAC4CjIAAkXIB4AAIAAAoIhMAAIAABNIA9AAIAAAoIg9AAIAABSIBMAAIAAAogAi2CjIAAkXIAsAAIAABpIAVAAQAhAAARARQAQARAAAiIAAAlQAAAigQARQgJAJgMAEQgMAFgRAAgAiKB7IAVAAQAKAAAGgGQAGgFAAgQIAAgqQAAgPgGgGQgGgFgKAAIgVAAgAkkCjIAAjvIguAAIAAgoICIAAIAAAoIguAAIAADvgAmGCjIgIgzIg2AAIgHAzIgpAAIAtkXIBBAAIAsEXgAmUBKIgViNIgVCNIAqAAgAp+CjIAAkXIBBAAQAhAAARARQAQASAAAiIAAAkQAAAhgQASQgJAJgMAEQgMAEgRAAIgVAAIAABqgApSASIAVAAQAKAAAGgGQAGgGAAgOIAAgqQAAgPgGgGQgGgFgKAAIgVAAgAsGCjIAAkXIB1AAIAAAoIhJAAIAADvgAtNCjIAAjKIg3DKIgtAAIAAkXIAnAAIAACmIAtimIA3AAIAAEXgAFgiEIAAghIBhAAIAAAhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-94.6,-16.5,189.3,33.2), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANUChQgMgEgIgJQgRgSAAgiIAAiRQAAgiARgSQAIgJAMgFQANgEAQAAQAgAAARASQAIAJAEANQAEANAAARIAAAbIgpAAIAAgeQAAgPgGgGQgGgGgLAAQgKAAgHAGQgGAGAAAPIAACWQAAAQAGAGQAHAGAKAAQALAAAGgGQAGgGAAgQIAAgoIApAAIAAAmQAAARgEANQgEANgIAJQgIAJgNAEQgMAFgQAAQgQAAgNgFgAA+ChQgMgEgIgJQgRgSAAgiIAAiRQAAgiARgSQAIgJAMgFQANgEAQAAQAgAAARASQAIAJAEANQAEANAAARIAAAbIgpAAIAAgeQAAgPgGgGQgGgGgLAAQgKAAgHAGQgGAGAAAPIAACWQAAAQAGAGQAHAGAKAAQALAAAGgGQAGgGAAgQIAAgoIApAAIAAAmQAAARgEANQgEANgIAJQgIAJgNAEQgMAFgQAAQgQAAgNgFgALzCjIgIgzIg2AAIgHAzIgpAAIAtkXIBBAAIAsEXgALlBKIgViNIgVCNIAqAAgAJFCjIAAhsIgLADIgNAAQgQAAgMgEQgMgFgJgJQgQgSAAghIAAhpIAsAAIAABsQAAAOAGAGQAGAGALAAQAKAAAGgFQAFgGABgMIAAhvIAsAAIAAEXgAGuCjIAAjKIg3DKIgtAAIAAkXIAoAAIAACmIAtimIA3AAIAAEXgAC4CjIAAkXIB4AAIAAAoIhMAAIAABNIA9AAIAAAoIg9AAIAABSIBMAAIAAAogAi2CjIAAkXIAsAAIAABpIAVAAQAhAAARARQAQARAAAiIAAAlQAAAigQARQgJAJgMAEQgMAFgRAAgAiKB7IAVAAQAKAAAGgGQAGgFAAgQIAAgqQAAgPgGgGQgGgFgKAAIgVAAgAkkCjIAAjvIguAAIAAgoICIAAIAAAoIguAAIAADvgAmGCjIgIgzIg2AAIgHAzIgpAAIAtkXIBBAAIAsEXgAmUBKIgViNIgVCNIAqAAgAp+CjIAAkXIBBAAQAhAAARARQAQASAAAiIAAAkQAAAhgQASQgJAJgMAEQgMAEgRAAIgVAAIAABqgApSASIAVAAQAKAAAGgGQAGgGAAgOIAAgqQAAgPgGgGQgGgFgKAAIgVAAgAsGCjIAAkXIB1AAIAAAoIhJAAIAADvgAtNCjIAAjKIg3DKIgtAAIAAkXIAnAAIAACmIAtimIA3AAIAAEXgAFgiEIAAghIBhAAIAAAhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-94.6,-16.6,189.3,33.2), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AzaERQgogBAAgoIAAnPQAAgoAogBMAm1AAAQAoABAAAoIAAHPQAAAogoABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-128.2,-27.2,256.6,54.5), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AF2DmIAAguIikAAIAAAuIhBAAIAAhpIAWAAQAPAAALgGQALgJAAgYIAAk3IDLAAIAAFeIAhAAIAABpgAEMBSQAAAagFARIBPAAIAAkjIhKAAgAnEC1QgSgGgMgOQgagaAAgxIAAjVQAAgxAagaQAMgOASgGQASgHAXAAQAwAAAZAbQANANAGASQAGATAAAZIAADVQAAAYgGAUQgGASgNANQgNAOgRAGQgTAHgYgBQgXABgSgHgAmziiQgJAJAAAXIAADbQAAAXAJAJQAKAJAOAAQAQAAAJgJQAJgJAAgXIAAjbQAAgXgJgJQgJgJgQAAQgOAAgKAJgAKwC4IAAmZIBAAAIAAGZgAHSC4IAAmZIBAAAIAACaIAfAAQAwAAAYAaQAXAaAAAxIAAA1QAAAxgXAaQgMAMgSAHQgSAGgYABgAISB9IAfAAQAOAAAJgIQAIgIAAgXIAAg9QAAgWgIgIQgJgIgOAAIgfAAgAgsC4IAAmZICuAAIAAA7IhvAAIAAByIBYAAIAAA5IhYAAIAAB4IBvAAIAAA7gAkQC4IAAmZICqAAIAAA7IhqAAIAABfIAfAAQAwAAAYAaQAYAaAAAxIAAA1QAAAxgYAaQgMAMgSAHQgSAGgYABgAjQB9IAfAAQAOAAAJgIQAIgIAAgXIAAg9QAAgWgIgIQgJgIgOAAIgfAAgApmC4IAAleIhJAAIAAFeIhAAAIAAmZIDLAAIAAGZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-75.2,-23,150.5,46), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0033").s().p("AF2DmIAAguIikAAIAAAuIhBAAIAAhpIAWAAQAPAAALgGQALgJAAgYIAAk3IDLAAIAAFeIAhAAIAABpgAEMBSQAAAagFARIBPAAIAAkjIhKAAgAnEC1QgSgGgMgOQgagaAAgxIAAjVQAAgxAagaQAMgOASgGQASgHAXAAQAwAAAZAbQANANAGASQAGATAAAZIAADVQAAAYgGAUQgGASgNANQgNAOgRAGQgTAHgYgBQgXABgSgHgAmziiQgJAJAAAXIAADbQAAAXAJAJQAKAJAOAAQAQAAAJgJQAJgJAAgXIAAjbQAAgXgJgJQgJgJgQAAQgOAAgKAJgAKwC4IAAmZIBAAAIAAGZgAHSC4IAAmZIBAAAIAACaIAfAAQAwAAAYAaQAXAaAAAxIAAA1QAAAxgXAaQgMAMgSAHQgSAGgYABgAISB9IAfAAQAOAAAJgIQAIgIAAgXIAAg9QAAgWgIgIQgJgIgOAAIgfAAgAgsC4IAAmZICuAAIAAA7IhvAAIAAByIBYAAIAAA5IhYAAIAAB4IBvAAIAAA7gAkQC4IAAmZICqAAIAAA7IhqAAIAABfIAfAAQAwAAAYAaQAYAaAAAxIAAA1QAAAxgYAaQgMAMgSAHQgSAGgYABgAjQB9IAfAAQAOAAAJgIQAIgIAAgXIAAg9QAAgWgIgIQgJgIgOAAIgfAAgApmC4IAAleIhJAAIAAFeIhAAAIAAmZIDLAAIAAGZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-75.2,-23,150.5,46), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFJDKQgSgGgMgNQgYgbAAgxIAAjUQAAgyAYgaQAMgOASgGQASgHAXAAQAwAAAYAbQAMANAGATQAGATAAAZIAAAoIg9AAIAAgsQAAgXgIgJQgJgIgQAAQgPAAgJAIQgJAJAAAXIAADbQAAAXAJAJQAJAJAPAAQAQAAAJgJQAIgJAAgXIAAg6IA9AAIAAA3QAAAZgGATQgGATgMANQgMANgSAGQgSAHgYAAQgXAAgSgHgAAdDNIAAg7IAWABIAPgCIAMgGQAFgFACgJIADgWIhdkyIBAAAIBGDuIA7juIBAAAIhUEsQgMArgLAWQgLAWgNAKQgNAJgOACgAhSDNIg/ijIgUAlIAAB+IhAAAIAAmYIBAAAIAACyIBWiyIA/AAIhZC2IBZDigAnRDNIAAmYIBhAAQAZAAASAGQASAFALAMQAMAMAGARQAFASAAAYIAAAOQAAAggKAUQgKAVgWAKQANAFAKAHQAJAHAFAMQALAXAAAgIAAAhQAAAwgZAZQgLAMgTAGQgSAHgZAAgAmRCSIAkAAQARAAAIgJQAJgIAAgXIAAgkQAAgcgKgKQgKgLgWAAIgcAAgAmRglIAZAAQASAAAKgJQAKgJAAgZIAAgXQAAgWgIgKQgHgKgRAAIgfAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-46.6,-20.8,93.3,41.8), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFJDKQgSgGgMgNQgYgbAAgxIAAjUQAAgyAYgaQAMgOASgGQASgHAXAAQAwAAAYAbQAMANAGATQAGATAAAZIAAAoIg9AAIAAgsQAAgXgIgJQgJgIgQAAQgPAAgJAIQgJAJAAAXIAADbQAAAXAJAJQAJAJAPAAQAQAAAJgJQAIgJAAgXIAAg6IA9AAIAAA3QAAAZgGATQgGATgMANQgMANgSAGQgSAHgYAAQgXAAgSgHgAAdDNIAAg7IAWABIAPgCIAMgGQAFgFACgJIADgWIhdkyIBAAAIBGDuIA7juIBAAAIhUEsQgMArgLAWQgLAWgNAKQgNAJgOACgAhSDNIg/ijIgUAlIAAB+IhAAAIAAmYIBAAAIAACyIBWiyIA/AAIhZC2IBZDigAnRDNIAAmYIBhAAQAZAAASAGQASAFALAMQAMAMAGARQAFASAAAYIAAAOQAAAggKAUQgKAVgWAKQANAFAKAHQAJAHAFAMQALAXAAAgIAAAhQAAAwgZAZQgLAMgTAGQgSAHgZAAgAmRCSIAkAAQARAAAIgJQAJgIAAgXIAAgkQAAgcgKgKQgKgLgWAAIgcAAgAmRglIAZAAQASAAAKgJQAKgJAAgZIAAgXQAAgWgIgKQgHgKgRAAIgfAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-46.6,-20.9,93.3,41.8), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABYEBQgSgIgOgOQgagdAAg2IAAjmQAAg2AageQAOgOASgHQAVgIAZAAQA0ABAaAcQANAOAGAVQAIAVAAAcIAAArIhDAAIAAgwQAAgZgJgKQgKgJgRAAQgRAAgKAJQgKAKABAZIAADvQgBAZAKAKQAKAJARAAQARAAAKgJQAJgKAAgZIAAg/IBDAAIAAA7QAAAcgIAUQgGAVgNAOQgNAOgUAIQgTAGgaABQgZgBgVgGgAu+EBQgSgIgPgOQgbgdAAg2IAAjmQAAg2AbgeQAPgOASgHQAUgIAaAAQAzABAdAcQANAOAGAVQAHAVABAcIAADmQgBAcgHAUQgGAVgNAOQgPAOgTAIQgUAGgaABQgagBgUgGgAurh2QgJAKAAAZIAADvQAAAZAJAKQAKAJARABQARgBAKgJQAJgKAAgZIAAjvQAAgZgJgKQgKgJgRAAQgRAAgKAJgAMVEDIAAhAIAXABIAQgCIAOgHQAEgGADgIIADgZIhmlNIBGAAIBNEEIBAkEIBGAAIhbFHQgNAvgMAXQgNAYgNALQgPALgPABIg2ABgAnvEDIAAhAIAYABIARgCIAMgHQAGgGACgIIADgZIhmlNIBGAAIBNEEIBBkEIBFAAIhcFHQgMAvgMAXQgMAYgOALQgPALgQABIg1ABgATFEDIAAlBIhXFBIhIAAIAAm8IBAAAIAAEJIBHkJIBXAAIAAG8gAIAEDIAAm8IBpAAQAbAAAUAFQAUAHAMAOQANAMAGASQAGAUAAAaIAAAQQAAAigLAWQgKAWgYALQAOAGAKAJQALAHAFANQAMAYAAAkIAAAlQAAAzgbAbQgNAOgTAGQgVAHgaAAgAJFDDIApAAQASAAAJgJQAJgJAAgZIAAgnQAAgfgKgLQgLgNgYAAIggAAgAJFgEIAbAAQAVAAALgKQALgKAAgbIAAgZQAAgZgJgKQgIgKgSAAIgjAAgAFREDIAAl8IhJAAIAAhAIDYAAIAABAIhJAAIAAF8gAjcEDIAAm8IBpAAQAbAAAUAFQAUAHAMAOQANAMAGASQAGAUAAAaIAAAQQAAAigLAWQgLAWgYALQAPAGAKAJQAKAHAGANQALAYABAkIAAAlQAAAzgbAbQgNAOgUAGQgUAHgbAAgAiWDDIAnAAQASAAAJgJQAJgJAAgZIAAgnQAAgfgKgLQgLgNgYAAIgeAAgAiWgEIAbAAQATAAALgKQALgKAAgbIAAgZQABgZgJgKQgIgKgTAAIghAAgAp6EDIAAirIgTAEIgTABQgaAAgUgHQgTgHgOgPQgagdAAg1IAAinIBGAAIAACsQAAAWAKAKQALAKAQAAQAQAAAJgIQAJgJACgUIAAixIBGAAIAAG8gAxuEDIAAl8IhPAAIAAF8IhGAAIAAm8IDdAAIAAG8gARJjSIAAg1ICbAAIAAA1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-128.4,-26.3,256.8,52.7), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABYEBQgSgIgOgOQgagdAAg2IAAjmQAAg2AageQAOgOASgHQAVgIAZAAQA0ABAaAcQANAOAGAVQAIAVAAAcIAAArIhDAAIAAgwQAAgZgJgKQgKgJgRAAQgRAAgKAJQgKAKABAZIAADvQgBAZAKAKQAKAJARAAQARAAAKgJQAJgKAAgZIAAg/IBDAAIAAA7QAAAcgIAUQgGAVgNAOQgNAOgUAIQgTAGgaABQgZgBgVgGgAu+EBQgSgIgPgOQgbgdAAg2IAAjmQAAg2AbgeQAPgOASgHQAUgIAaAAQAzABAdAcQANAOAGAVQAHAVABAcIAADmQgBAcgHAUQgGAVgNAOQgPAOgTAIQgUAGgaABQgagBgUgGgAurh2QgJAKAAAZIAADvQAAAZAJAKQAKAJARABQARgBAKgJQAJgKAAgZIAAjvQAAgZgJgKQgKgJgRAAQgRAAgKAJgAMVEDIAAhAIAXABIAQgCIAOgHQAEgGADgIIADgZIhmlNIBGAAIBNEEIBAkEIBGAAIhbFHQgNAvgMAXQgNAYgNALQgPALgPABIg2ABgAnvEDIAAhAIAYABIARgCIAMgHQAGgGACgIIADgZIhmlNIBGAAIBNEEIBBkEIBFAAIhcFHQgMAvgMAXQgMAYgOALQgPALgQABIg1ABgATFEDIAAlBIhXFBIhIAAIAAm8IBAAAIAAEJIBHkJIBXAAIAAG8gAIAEDIAAm8IBpAAQAbAAAUAFQAUAHAMAOQANAMAGASQAGAUAAAaIAAAQQAAAigLAWQgKAWgYALQAOAGAKAJQALAHAFANQAMAYAAAkIAAAlQAAAzgbAbQgNAOgTAGQgVAHgaAAgAJFDDIApAAQASAAAJgJQAJgJAAgZIAAgnQAAgfgKgLQgLgNgYAAIggAAgAJFgEIAbAAQAVAAALgKQALgKAAgbIAAgZQAAgZgJgKQgIgKgSAAIgjAAgAFREDIAAl8IhJAAIAAhAIDYAAIAABAIhJAAIAAF8gAjcEDIAAm8IBpAAQAbAAAUAFQAUAHAMAOQANAMAGASQAGAUAAAaIAAAQQAAAigLAWQgLAWgYALQAPAGAKAJQAKAHAGANQALAYABAkIAAAlQAAAzgbAbQgNAOgUAGQgUAHgbAAgAiWDDIAnAAQASAAAJgJQAJgJAAgZIAAgnQAAgfgKgLQgLgNgYAAIgeAAgAiWgEIAbAAQATAAALgKQALgKAAgbIAAgZQABgZgJgKQgIgKgTAAIghAAgAp6EDIAAirIgTAEIgTABQgaAAgUgHQgTgHgOgPQgagdAAg1IAAinIBGAAIAACsQAAAWAKAKQALAKAQAAQAQAAAJgIQAJgJACgUIAAixIBGAAIAAG8gAxuEDIAAl8IhPAAIAAF8IhGAAIAAm8IDdAAIAAG8gARJjSIAAg1ICbAAIAAA1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-128.4,-26.3,256.8,52.7), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#19130C").s().p("Ai+BQQgWgBgDgMQgDgMARgOQARgOAagIQAagIAWAKQAXAIADAMQAEAMgVAHIgsAPQgTAFgSAAIgIAAgABZgTQgDgMAPgTQAPgUAbgGQAagGAWAEQAVAEADAMQAEALgSANQgSAMgYAFIgtAKIgKABQgNAAgCgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-21.6,-8,43.2,16.1), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// damochka.png
	this.instance = new lib.damochka();
	this.instance.parent = this;
	this.instance.setTransform(-122,-184);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-122,-184,243,368), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.card();
	this.instance.parent = this;
	this.instance.setTransform(-23,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-23,-16.5,46,33), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.parent = this;
	this.instance.setTransform(-34.5,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-34.5,-33.5,73,67), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka1();
	this.instance.parent = this;
	this.instance.setTransform(-35.5,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-35.5,-23,71,46), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dev2();
	this.instance.parent = this;
	this.instance.setTransform(-131,-201);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-131,-201,262,402), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-54,-12.2,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-54,-12.2,108,24.5), null);


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


(lib.Символ64 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ63();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},5).wait(1).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.2,-27.2,256.6,54.5);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlXgdIKfhPIAPCFIqdBPg");
	var mask_graphics_1 = new cjs.Graphics().p("AlXgbIKfhPIAQCFIqfBPg");
	var mask_graphics_2 = new cjs.Graphics().p("AlWgbIKdhOIARCFIqfBOg");
	var mask_graphics_3 = new cjs.Graphics().p("AlWgaIKdhPIAQCFIqdBPg");
	var mask_graphics_4 = new cjs.Graphics().p("AlXgaIKfhQIAPCFIqdBQg");
	var mask_graphics_5 = new cjs.Graphics().p("AlXgbIKfhPIAQCFIqfBPg");
	var mask_graphics_6 = new cjs.Graphics().p("AlXgaIKfhQIAPCFIqdBQg");
	var mask_graphics_7 = new cjs.Graphics().p("AlWgaIKdhPIAQCFIqdBPg");
	var mask_graphics_8 = new cjs.Graphics().p("AlWgbIKdhOIARCFIqfBOg");
	var mask_graphics_9 = new cjs.Graphics().p("AlXgbIKfhPIAQCFIqfBPg");
	var mask_graphics_10 = new cjs.Graphics().p("AlXgdIKfhPIAPCFIqdBPg");
	var mask_graphics_11 = new cjs.Graphics().p("AlXgbIKfhPIAQCFIqfBPg");
	var mask_graphics_12 = new cjs.Graphics().p("AlWgbIKdhOIARCFIqfBOg");
	var mask_graphics_13 = new cjs.Graphics().p("AlWgaIKdhPIAQCFIqdBPg");
	var mask_graphics_14 = new cjs.Graphics().p("AlXgaIKfhQIAPCFIqdBQg");
	var mask_graphics_15 = new cjs.Graphics().p("AlXgbIKfhPIAQCFIqfBPg");
	var mask_graphics_16 = new cjs.Graphics().p("AlXgaIKfhQIAPCFIqdBQg");
	var mask_graphics_17 = new cjs.Graphics().p("AlWgaIKdhPIAQCFIqdBPg");
	var mask_graphics_18 = new cjs.Graphics().p("AlWgbIKdhOIARCFIqfBOg");
	var mask_graphics_19 = new cjs.Graphics().p("AlXgbIKfhPIAQCFIqfBPg");
	var mask_graphics_20 = new cjs.Graphics().p("AlXgdIKfhPIAPCFIqdBPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-1.1,y:-10.9}).wait(1).to({graphics:mask_graphics_1,x:-0.9,y:-9.2}).wait(1).to({graphics:mask_graphics_2,x:-0.7,y:-7.2}).wait(1).to({graphics:mask_graphics_3,x:-0.5,y:-5.2}).wait(1).to({graphics:mask_graphics_4,x:-0.3,y:-3.2}).wait(1).to({graphics:mask_graphics_5,x:-0.1,y:-1.2}).wait(1).to({graphics:mask_graphics_6,x:-0.3,y:-3.2}).wait(1).to({graphics:mask_graphics_7,x:-0.5,y:-5.2}).wait(1).to({graphics:mask_graphics_8,x:-0.7,y:-7.2}).wait(1).to({graphics:mask_graphics_9,x:-0.9,y:-9.2}).wait(1).to({graphics:mask_graphics_10,x:-1.1,y:-10.9}).wait(1).to({graphics:mask_graphics_11,x:-0.9,y:-9.2}).wait(1).to({graphics:mask_graphics_12,x:-0.7,y:-7.2}).wait(1).to({graphics:mask_graphics_13,x:-0.5,y:-5.2}).wait(1).to({graphics:mask_graphics_14,x:-0.3,y:-3.2}).wait(1).to({graphics:mask_graphics_15,x:-0.1,y:-1.2}).wait(1).to({graphics:mask_graphics_16,x:-0.3,y:-3.2}).wait(1).to({graphics:mask_graphics_17,x:-0.5,y:-5.2}).wait(1).to({graphics:mask_graphics_18,x:-0.7,y:-7.2}).wait(1).to({graphics:mask_graphics_19,x:-0.9,y:-9.2}).wait(1).to({graphics:mask_graphics_20,x:-1.1,y:-10.9}).wait(28));

	// Слой 1
	this.instance = new lib.Символ61();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.7,-4.6,45.5,4.1);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:6.1},0).wait(1).to({rotation:12.2},0).wait(1).to({rotation:18.3},0).wait(1).to({rotation:24.4},0).wait(1).to({rotation:30.5},0).wait(1).to({rotation:36.6},0).wait(1).to({rotation:42.7},0).wait(1).to({rotation:48.8},0).wait(1).to({rotation:54.9},0).wait(1).to({rotation:61},0).wait(1).to({rotation:67.1},0).wait(1).to({rotation:73.2},0).wait(1).to({rotation:79.3},0).wait(1).to({rotation:85.4},0).wait(1).to({rotation:91.5},0).wait(1).to({rotation:97.6},0).wait(1).to({rotation:103.7},0).wait(1).to({rotation:109.8},0).wait(1).to({rotation:115.9},0).wait(1).to({rotation:122},0).wait(1).to({rotation:128.1},0).wait(1).to({rotation:134.2},0).wait(1).to({rotation:140.3},0).wait(1).to({rotation:146.4},0).wait(1).to({rotation:152.5},0).wait(1).to({rotation:158.6},0).wait(1).to({rotation:164.7},0).wait(1).to({rotation:170.8},0).wait(1).to({rotation:176.9},0).wait(1).to({rotation:183.1},0).wait(1).to({rotation:189.2},0).wait(1).to({rotation:195.3},0).wait(1).to({rotation:201.4},0).wait(1).to({rotation:207.5},0).wait(1).to({rotation:213.6},0).wait(1).to({rotation:219.7},0).wait(1).to({rotation:225.8},0).wait(1).to({rotation:231.9},0).wait(1).to({rotation:238},0).wait(1).to({rotation:244.1},0).wait(1).to({rotation:250.2},0).wait(1).to({rotation:256.3},0).wait(1).to({rotation:262.4},0).wait(1).to({rotation:268.5},0).wait(1).to({rotation:274.6},0).wait(1).to({rotation:280.7},0).wait(1).to({rotation:286.8},0).wait(1).to({rotation:292.9},0).wait(1).to({rotation:299},0).wait(1).to({rotation:305.1},0).wait(1).to({rotation:311.2},0).wait(1).to({rotation:317.3},0).wait(1).to({rotation:323.4},0).wait(1).to({rotation:329.5},0).wait(1).to({rotation:335.6},0).wait(1).to({rotation:341.7},0).wait(1).to({rotation:347.8},0).wait(1).to({rotation:353.9},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.4,-38.1,76.9,76.2);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:8},0).wait(1).to({rotation:16},0).wait(1).to({rotation:24},0).wait(1).to({rotation:32},0).wait(1).to({rotation:40},0).wait(1).to({rotation:48},0).wait(1).to({rotation:56},0).wait(1).to({rotation:64},0).wait(1).to({rotation:72},0).wait(1).to({rotation:80},0).wait(1).to({rotation:88},0).wait(1).to({rotation:96},0).wait(1).to({rotation:104},0).wait(1).to({rotation:112},0).wait(1).to({rotation:120},0).wait(1).to({rotation:128},0).wait(1).to({rotation:136},0).wait(1).to({rotation:144},0).wait(1).to({rotation:152},0).wait(1).to({rotation:160},0).wait(1).to({rotation:168},0).wait(1).to({rotation:176},0).wait(1).to({rotation:184},0).wait(1).to({rotation:192},0).wait(1).to({rotation:200},0).wait(1).to({rotation:208},0).wait(1).to({rotation:216},0).wait(1).to({rotation:224},0).wait(1).to({rotation:232},0).wait(1).to({rotation:240},0).wait(1).to({rotation:248},0).wait(1).to({rotation:256},0).wait(1).to({rotation:264},0).wait(1).to({rotation:272},0).wait(1).to({rotation:280},0).wait(1).to({rotation:288},0).wait(1).to({rotation:296},0).wait(1).to({rotation:304},0).wait(1).to({rotation:312},0).wait(1).to({rotation:320},0).wait(1).to({rotation:328},0).wait(1).to({rotation:336},0).wait(1).to({rotation:344},0).wait(1).to({rotation:352},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-31.2,63,62.4);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:4},0).wait(1).to({rotation:8.1},0).wait(1).to({rotation:12.1},0).wait(1).to({rotation:16.2},0).wait(1).to({rotation:20.2},0).wait(1).to({rotation:24.3},0).wait(1).to({rotation:28.3},0).wait(1).to({rotation:32.4},0).wait(1).to({rotation:36.4},0).wait(1).to({rotation:40.4},0).wait(1).to({rotation:44.5},0).wait(1).to({rotation:48.5},0).wait(1).to({rotation:52.6},0).wait(1).to({rotation:56.6},0).wait(1).to({rotation:60.7},0).wait(1).to({rotation:64.7},0).wait(1).to({rotation:68.8},0).wait(1).to({rotation:72.8},0).wait(1).to({rotation:76.9},0).wait(1).to({rotation:80.9},0).wait(1).to({rotation:84.9},0).wait(1).to({rotation:89},0).wait(1).to({rotation:93},0).wait(1).to({rotation:97.1},0).wait(1).to({rotation:101.1},0).wait(1).to({rotation:105.2},0).wait(1).to({rotation:109.2},0).wait(1).to({rotation:113.3},0).wait(1).to({rotation:117.3},0).wait(1).to({rotation:121.3},0).wait(1).to({rotation:125.4},0).wait(1).to({rotation:129.4},0).wait(1).to({rotation:133.5},0).wait(1).to({rotation:137.5},0).wait(1).to({rotation:141.6},0).wait(1).to({rotation:145.6},0).wait(1).to({rotation:149.7},0).wait(1).to({rotation:153.7},0).wait(1).to({rotation:157.8},0).wait(1).to({rotation:161.8},0).wait(1).to({rotation:165.8},0).wait(1).to({rotation:169.9},0).wait(1).to({rotation:173.9},0).wait(1).to({rotation:178},0).wait(1).to({rotation:182},0).wait(1).to({rotation:186.1},0).wait(1).to({rotation:190.1},0).wait(1).to({rotation:194.2},0).wait(1).to({rotation:198.2},0).wait(1).to({rotation:202.2},0).wait(1).to({rotation:206.3},0).wait(1).to({rotation:210.3},0).wait(1).to({rotation:214.4},0).wait(1).to({rotation:218.4},0).wait(1).to({rotation:222.5},0).wait(1).to({rotation:226.5},0).wait(1).to({rotation:230.6},0).wait(1).to({rotation:234.6},0).wait(1).to({rotation:238.7},0).wait(1).to({rotation:242.7},0).wait(1).to({rotation:246.7},0).wait(1).to({rotation:250.8},0).wait(1).to({rotation:254.8},0).wait(1).to({rotation:258.9},0).wait(1).to({rotation:262.9},0).wait(1).to({rotation:267},0).wait(1).to({rotation:271},0).wait(1).to({rotation:275.1},0).wait(1).to({rotation:279.1},0).wait(1).to({rotation:283.1},0).wait(1).to({rotation:287.2},0).wait(1).to({rotation:291.2},0).wait(1).to({rotation:295.3},0).wait(1).to({rotation:299.3},0).wait(1).to({rotation:303.4},0).wait(1).to({rotation:307.4},0).wait(1).to({rotation:311.5},0).wait(1).to({rotation:315.5},0).wait(1).to({rotation:319.6},0).wait(1).to({rotation:323.6},0).wait(1).to({rotation:327.6},0).wait(1).to({rotation:331.7},0).wait(1).to({rotation:335.7},0).wait(1).to({rotation:339.8},0).wait(1).to({rotation:343.8},0).wait(1).to({rotation:347.9},0).wait(1).to({rotation:351.9},0).wait(1).to({rotation:356},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-41.1,83,82.3);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:4.3},0).wait(1).to({rotation:8.7},0).wait(1).to({rotation:13},0).wait(1).to({rotation:17.3},0).wait(1).to({rotation:21.6},0).wait(1).to({rotation:26},0).wait(1).to({rotation:30.3},0).wait(1).to({rotation:34.6},0).wait(1).to({rotation:38.9},0).wait(1).to({rotation:43.2},0).wait(1).to({rotation:47.6},0).wait(1).to({rotation:51.9},0).wait(1).to({rotation:56.2},0).wait(1).to({rotation:60.5},0).wait(1).to({rotation:64.8},0).wait(1).to({rotation:69.1},0).wait(1).to({rotation:73.4},0).wait(1).to({rotation:77.7},0).wait(1).to({rotation:82.1},0).wait(1).to({rotation:86.4},0).wait(1).to({rotation:90.7},0).wait(1).to({rotation:95},0).wait(1).to({rotation:99.3},0).wait(1).to({rotation:103.6},0).wait(1).to({rotation:107.9},0).wait(1).to({rotation:112.2},0).wait(1).to({rotation:116.5},0).wait(1).to({rotation:120.8},0).wait(1).to({rotation:125.1},0).wait(1).to({rotation:129.4},0).wait(1).to({rotation:133.7},0).wait(1).to({rotation:138},0).wait(1).to({rotation:142.3},0).wait(1).to({rotation:146.6},0).wait(1).to({rotation:150.9},0).wait(1).to({rotation:155.2},0).wait(1).to({rotation:159.5},0).wait(1).to({rotation:163.7},0).wait(1).to({rotation:168},0).wait(1).to({rotation:172.3},0).wait(1).to({rotation:176.6},0).wait(1).to({rotation:180.9},0).wait(1).to({rotation:185.2},0).wait(1).to({rotation:189.5},0).wait(1).to({rotation:193.7},0).wait(1).to({rotation:198},0).wait(1).to({rotation:202.3},0).wait(1).to({rotation:206.6},0).wait(1).to({rotation:210.9},0).wait(1).to({rotation:215.2},0).wait(1).to({rotation:219.4},0).wait(1).to({rotation:223.7},0).wait(1).to({rotation:228},0).wait(1).to({rotation:232.3},0).wait(1).to({rotation:236.5},0).wait(1).to({rotation:240.8},0).wait(1).to({rotation:245.1},0).wait(1).to({rotation:249.3},0).wait(1).to({rotation:253.6},0).wait(1).to({rotation:257.9},0).wait(1).to({rotation:262.1},0).wait(1).to({rotation:266.4},0).wait(1).to({rotation:270.7},0).wait(1).to({rotation:274.9},0).wait(1).to({rotation:279.2},0).wait(1).to({rotation:283.5},0).wait(1).to({rotation:287.7},0).wait(1).to({rotation:292},0).wait(1).to({rotation:296.2},0).wait(1).to({rotation:300.5},0).wait(1).to({rotation:304.8},0).wait(1).to({rotation:309},0).wait(1).to({rotation:313.3},0).wait(1).to({rotation:317.5},0).wait(1).to({rotation:321.8},0).wait(1).to({rotation:326},0).wait(1).to({rotation:330.3},0).wait(1).to({rotation:334.5},0).wait(1).to({rotation:338.8},0).wait(1).to({rotation:343},0).wait(1).to({rotation:347.3},0).wait(1).to({rotation:351.5},0).wait(1).to({rotation:355.8},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.5,-54,109,108);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ39();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.8);
	this.instance_1.alpha = 0.512;
	this.instance_1.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance_1.cache(-97,-18,193,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-95.6,-16.8,194,38), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-130,-29,261,59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-130.2,-29.2,264,62), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#8F0225","#CC0033"],[0,1],0,23.5,0,-23.4).s().p("AzaERQgogBAAgoIAAnPQAAgoAogBMAm1AAAQAoABAAAoIAAHPQAAAogoABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(0,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-130.2,-27.2,264,62.8), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ32();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.3);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-77,-25,155,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-77.2,-23.7,158,53), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ30();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.2);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-49,-23,97,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-48.6,-21.6,100,49), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ28();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.3);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-130,-28,261,57);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-130.4,-27.1,264,60), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AktAPIIqizIAxCWIoqCzg");
	var mask_graphics_1 = new cjs.Graphics().p("AktAPIIqizIAxCWIoqCzg");
	var mask_graphics_2 = new cjs.Graphics().p("AktAOIIqiyIAxCWIoqCzg");
	var mask_graphics_3 = new cjs.Graphics().p("AktAOIIqiyIAxCWIoqCzg");
	var mask_graphics_4 = new cjs.Graphics().p("AktAOIIqiyIAxCWIoqCzg");
	var mask_graphics_5 = new cjs.Graphics().p("AktAOIIqiyIAxCXIoqCyg");
	var mask_graphics_6 = new cjs.Graphics().p("AktAOIIqiyIAxCWIoqCzg");
	var mask_graphics_7 = new cjs.Graphics().p("AktAOIIqiyIAxCWIoqCzg");
	var mask_graphics_8 = new cjs.Graphics().p("AktAOIIqiyIAxCWIoqCzg");
	var mask_graphics_9 = new cjs.Graphics().p("AktAPIIqizIAxCWIoqCzg");
	var mask_graphics_10 = new cjs.Graphics().p("AktAPIIqizIAxCWIoqCzg");
	var mask_graphics_11 = new cjs.Graphics().p("AktAPIIqizIAxCWIoqCzg");
	var mask_graphics_12 = new cjs.Graphics().p("AktAOIIqiyIAxCWIoqCzg");
	var mask_graphics_13 = new cjs.Graphics().p("AktAOIIqiyIAxCWIoqCzg");
	var mask_graphics_14 = new cjs.Graphics().p("AktAOIIqiyIAxCWIoqCzg");
	var mask_graphics_15 = new cjs.Graphics().p("AktAOIIqiyIAxCXIoqCyg");
	var mask_graphics_16 = new cjs.Graphics().p("AktAOIIqiyIAxCWIoqCzg");
	var mask_graphics_17 = new cjs.Graphics().p("AktAOIIqiyIAxCWIoqCzg");
	var mask_graphics_18 = new cjs.Graphics().p("AktAOIIqiyIAxCWIoqCzg");
	var mask_graphics_19 = new cjs.Graphics().p("AktAPIIqizIAxCWIoqCzg");
	var mask_graphics_20 = new cjs.Graphics().p("AktAPIIqizIAxCWIoqCzg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-5.8,y:-12.1}).wait(1).to({graphics:mask_graphics_1,x:-4.9,y:-9.9}).wait(1).to({graphics:mask_graphics_2,x:-3.9,y:-7.6}).wait(1).to({graphics:mask_graphics_3,x:-3,y:-5.4}).wait(1).to({graphics:mask_graphics_4,x:-2.1,y:-3.1}).wait(1).to({graphics:mask_graphics_5,x:-1.2,y:-0.9}).wait(1).to({graphics:mask_graphics_6,x:-2.1,y:-3.1}).wait(1).to({graphics:mask_graphics_7,x:-3,y:-5.4}).wait(1).to({graphics:mask_graphics_8,x:-3.9,y:-7.6}).wait(1).to({graphics:mask_graphics_9,x:-4.9,y:-9.9}).wait(1).to({graphics:mask_graphics_10,x:-5.8,y:-12.1}).wait(1).to({graphics:mask_graphics_11,x:-4.9,y:-9.9}).wait(1).to({graphics:mask_graphics_12,x:-3.9,y:-7.6}).wait(1).to({graphics:mask_graphics_13,x:-3,y:-5.4}).wait(1).to({graphics:mask_graphics_14,x:-2.1,y:-3.1}).wait(1).to({graphics:mask_graphics_15,x:-1.2,y:-0.9}).wait(1).to({graphics:mask_graphics_16,x:-2.1,y:-3.1}).wait(1).to({graphics:mask_graphics_17,x:-3,y:-5.4}).wait(1).to({graphics:mask_graphics_18,x:-3.9,y:-7.6}).wait(1).to({graphics:mask_graphics_19,x:-4.9,y:-9.9}).wait(1).to({graphics:mask_graphics_20,x:-5.8,y:-12.1}).wait(28));

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,-8,43.2,12.5);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(21.4,-106.7,1,1,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-122,-184,243,368), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-34.5,-33.5,73,67), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-35.5,-23,71,46), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ruka1.png
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(-52.3,0.7,1,1,0,0,0,-28.8,-16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({rotation:3.2,x:-52.2},3,cjs.Ease.get(1)).to({rotation:0,x:-52.3},3,cjs.Ease.get(1)).wait(1));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjbggICRiRIEmBuIjZD1g");
	mask.setTransform(4.9,8.5);

	// Слой 1
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26,-18.2);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({rotation:15,x:-21,y:26.5},6,cjs.Ease.get(1)).wait(1));

	// ruka.png
	this.instance_2 = new lib.Символ16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(17,26.5,1,1,0,0,0,-7.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-3.5,y:26.6},3,cjs.Ease.get(-1)).to({regX:-7.4,rotation:-8.2,x:17.1},3,cjs.Ease.get(1)).to({regY:33.4,rotation:-4,y:26.5},3,cjs.Ease.get(-1)).to({regX:-7.5,regY:33.5,rotation:0,x:17},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-40.5,122,81);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(40,60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-122.5,-184,243,368), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ60();
	this.instance.parent = this;
	this.instance.setTransform(16.4,-128.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-131,-201,262,402), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// back.jpg - копия
	this.instance = new lib.Символ67();
	this.instance.parent = this;
	this.instance.setTransform(-0.7,0.4);
	this.instance.alpha = 0.422;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},30).to({alpha:0.422},29).wait(1));

	// back.jpg
	this.instance_1 = new lib.Символ68();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.7,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-333,-158,664.6,316.7);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03},14,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07},15,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-333,-158,664.6,316.7);


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


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:425.1},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-31.2,63,62.4);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:413.1},69).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-41.1,83,82.3);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:450.2},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.5,-54,109,108);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(-38,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:435.2},56).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.4,-38.1,76.9,76.2);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 51
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(567.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 49
	this.instance_1 = new lib.Символ55();
	this.instance_1.parent = this;
	this.instance_1.setTransform(352.5,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 47
	this.instance_2 = new lib.Символ54();
	this.instance_2.parent = this;
	this.instance_2.setTransform(193.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 45
	this.instance_3 = new lib.Символ53();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-55,-54,622.9,108), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzaEQQgoAAAAgnIAAnRQAAgoAoABMAm1AAAQAogBAAAoIAAHRQAAAngoAAg");
	mask.setTransform(0,-1.3);

	// Слой 3
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(-194.9,-11.4,1,1,34);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:210.7},25).wait(15));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.3);
	this.instance_1.alpha = 0;
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.309},19,cjs.Ease.get(1)).to({alpha:0},20,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.2,-28.6,264,61.8);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(0,-2.5,0.715,0.715);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.green = new lib.Символ64();
	this.green.parent = this;
	this.green.setTransform(0,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.green).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ41();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-274.3,-108.4,408.1,194.5), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-48.6,-21.6,100,49), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(0,11.2,1,1,-9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-150.4,-189.7,299,402.2), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.btnmove = new lib.Символ37();
	this.btnmove.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.btnmove).to({scaleX:0.85,scaleY:0.85,y:5},7,cjs.Ease.get(1)).to({scaleX:1.1,scaleY:1.1,y:0},4).to({scaleX:0.97,scaleY:0.97},3).to({scaleX:1.02,scaleY:1.02},3).to({scaleX:0.99,scaleY:0.99},3).to({scaleX:1,scaleY:1},3).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274.3,-108.4,408.1,194.5);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 26
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(53.2,18.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({scaleY:1.18,y:37.8,alpha:1},6).to({scaleY:1,y:33.7},3).wait(37).to({scaleX:1.25,scaleY:1.25,rotation:-8.5,x:71.8,y:31.7},5,cjs.Ease.get(1)).to({regX:0.2,regY:0.2,scaleX:0.4,scaleY:0.4,rotation:21.5,x:14.6,y:18.9,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Символ 25
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-81.8,16.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({scaleY:1.18,y:35.4,alpha:1},6).to({scaleY:1,y:31.6},3).wait(39).to({regX:-0.1,scaleX:1.25,scaleY:1.25,rotation:-8.5,x:-95.3,y:54},5,cjs.Ease.get(1)).to({regY:-0.1,scaleX:0.4,scaleY:0.4,rotation:21.5,x:-35.2,y:-1.7,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Символ 23
	this.instance_2 = new lib.Символ23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-10.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1.17,y:-34.9,alpha:1},6).to({scaleY:1,y:-30.3},3).wait(45).to({scaleX:1.25,scaleY:1.25,rotation:-8.5,x:-5.6,y:-37.4},5,cjs.Ease.get(1)).to({regX:-0.1,regY:-0.2,scaleX:0.4,scaleY:0.4,rotation:21.5,x:4.2,y:-12.6,alpha:0},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.4,-37.4,264,60);


(lib.Символ10 = function(mode,startPosition,loop) {
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

	// Символ 9
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(0.5,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.84,alpha:0},6).wait(1).to({scaleX:0.82},0).to({scaleX:1,alpha:1},6).wait(1));

	// Символ 7
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},6).wait(1).to({alpha:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.9,-206.7,299,407.7);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dev2.png
	this.dama3 = new lib.Символ10();
	this.dama3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.dama3).to({y:9.4},24,cjs.Ease.get(-1)).to({y:19.1},25,cjs.Ease.get(1)).to({y:9.6},25,cjs.Ease.get(-1)).to({y:0},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.9,-206.7,299,407.7);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.dama2 = new lib.Символ5();
	this.dama2.parent = this;
	this.dama2.setTransform(6,-20);

	this.timeline.addTween(cjs.Tween.get(this.dama2).wait(1));

	// Слой 3
	this.btn = new lib.Символ42();
	this.btn.parent = this;
	this.btn.setTransform(270.8,38.7);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Слой 2
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(271.1,-85.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ69();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-111.9,-65.6,0.371,2.212,0,0,0,0,-0.1);
	this.instance_1.alpha = 0.852;

	this.instance_2 = new lib.Символ69();
	this.instance_2.parent = this;
	this.instance_2.setTransform(245.6,-85.4);
	this.instance_2.alpha = 0.852;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-198.9,-236.8,679,417.9), null);


// stage content:
(lib.dama_pokdom640305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.dama1.dama2.dama3.gotoAndPlay(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.dama1.dama2.dama3.gotoAndPlay(9);
		}
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btnreact.addEventListener("mouseover", fl_MouseOverHandler_7);
		
		function fl_MouseOverHandler_7()
		{
			_this.dama1.btn.gotoAndStop(0);
			_this.dama1.btn.btnmove.green.gotoAndPlay(0);
		}
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btnreact.addEventListener("mouseout", fl_MouseOutHandler_99);
		
		function fl_MouseOutHandler_99()
		{
			_this.dama1.btn.gotoAndPlay(0);
			_this.dama1.btn.btnmove.green.gotoAndPlay(7);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 2
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(78,36.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 6
	this.btnreact = new lib.Символ65();
	this.btnreact.parent = this;
	this.btnreact.setTransform(447,248);
	new cjs.ButtonHelper(this.btnreact, 0, 1, 2, false, new lib.Символ65(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnreact).wait(1));

	// Слой 3
	this.dama1 = new lib.Символ11();
	this.dama1.parent = this;
	this.dama1.setTransform(174,211);

	this.timeline.addTween(cjs.Tween.get(this.dama1).wait(1));

	// Слой 7
	this.instance_1 = new lib.Символ70();
	this.instance_1.parent = this;
	this.instance_1.setTransform(719.5,-45.5);

	this.instance_2 = new lib.Символ70();
	this.instance_2.parent = this;
	this.instance_2.setTransform(458.5,-55.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ43();
	this.instance_3.parent = this;
	this.instance_3.setTransform(35.5,-65.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(352,153.7,1.06,1.06);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(295.1,33.3,932.5,511.2);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bablo_03.png?1494862836321", id:"bablo_03"},
		{src:"images/bablo_05.png?1494862836321", id:"bablo_05"},
		{src:"images/bablo_08.png?1494862836321", id:"bablo_08"},
		{src:"images/bablo_13.png?1494862836321", id:"bablo_13"},
		{src:"images/bablo_16.png?1494862836321", id:"bablo_16"},
		{src:"images/back.jpg?1494862836321", id:"back"},
		{src:"images/blik.png?1494862836321", id:"blik"},
		{src:"images/card.png?1494862836321", id:"card"},
		{src:"images/damochka.png?1494862836321", id:"damochka"},
		{src:"images/dev2.png?1494862836321", id:"dev2"},
		{src:"images/fishka.png?1494862836321", id:"fishka"},
		{src:"images/logo.png?1494862836321", id:"logo"},
		{src:"images/ruka.png?1494862836321", id:"ruka"},
		{src:"images/ruka1.png?1494862836321", id:"ruka1"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;