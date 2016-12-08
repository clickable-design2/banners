(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.belka = function() {
	this.initialize(img.belka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,47);


(lib.belkahv = function() {
	this.initialize(img.belkahv);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,46);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.blik = function() {
	this.initialize(img.blik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,150);


(lib.box = function() {
	this.initialize(img.box);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.ded_03 = function() {
	this.initialize(img.ded_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,189);


(lib.ded_05 = function() {
	this.initialize(img.ded_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,46);


(lib.ded_08 = function() {
	this.initialize(img.ded_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,97);


(lib.ded_10 = function() {
	this.initialize(img.ded_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.elk_03 = function() {
	this.initialize(img.elk_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,53);


(lib.elk_06 = function() {
	this.initialize(img.elk_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,99);


(lib.elk_08 = function() {
	this.initialize(img.elk_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,44);


(lib.elk_0d3 = function() {
	this.initialize(img.elk_0d3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,54);


(lib.elk_1111 = function() {
	this.initialize(img.elk_1111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,99);


(lib.elk_16 = function() {
	this.initialize(img.elk_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,179);


(lib.elk_233 = function() {
	this.initialize(img.elk_233);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,129);


(lib.elk_2uu1 = function() {
	this.initialize(img.elk_2uu1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,894,894);


(lib.elks_233 = function() {
	this.initialize(img.elks_233);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.girls_03 = function() {
	this.initialize(img.girls_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,29);


(lib.girls_06 = function() {
	this.initialize(img.girls_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,156);


(lib.girls_09 = function() {
	this.initialize(img.girls_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,144);


(lib.girls_12 = function() {
	this.initialize(img.girls_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,40);


(lib.girls_16 = function() {
	this.initialize(img.girls_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,22);


(lib.girls_21 = function() {
	this.initialize(img.girls_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,96);


(lib.girls_24 = function() {
	this.initialize(img.girls_24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,34);


(lib.palez3 = function() {
	this.initialize(img.palez3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);// helper functions:

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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C32F38").s().p("AH/DBIgJgyIiPAAIgJAyIg7AAIgBgQIgGhGIgCgQIAagIIA9jnIgeACIgCguIDQAFIAIEOIAaAIIgJBmgAGph9IghDAIAAARIBegBIgKjTgAi2CTQgvgMgaAAIAAgrIAagHIAAjXIgZgFIgBg4IBmAJQAZgHAmgDQANAAAKAEQAKADAIAFQAOAMAIAPQAJAOACASIAAABQACAQgCAOQgBAMgEAKQgHAQgOAFQAIgBAKAGQAFAEAFAOQAFANAEAWQAEAWgFAWQgEAWgPAWQgJANgPAKQgOAKgWAIQgVAHgYACIgOABQgSAAgUgDgAiagKIAABhIAhgBQALAAAJgEQAKgFAJgJQAKgJADgOQADgPgDgUQgEgWg0AAIgdACgAhuiFQgNABgNAFQgMAGgFAGIAAA+QBNAJAAgtIAAgIIAAgJQAAgPgLgHQgHgFgMAAIgEAAgAomCTQgQgDgDgJIAAgrIAagHIA4jkIgdABIgDgxICdAJIAzELIAaAHIgBArIhyAAIABgrIAYgHIgNg5IhKAAIgNA5IAYAHIAAAvIg/AHIgWACIgOgBgAnGgmIgBASIA8gBIAAgSIgNhUIgaAAgALpCGIAAgqIAagIIABiQIhNCHIAAAJIAZAIIAAAqIh/AAIAAgqIAZgIIABjXIgagFIAAg4IBlAFIAACIIBNiIIBMAAIAAEPIAaAIIgBAqgAAQCGIAAgrIAagHIAAjXIgagFIAAg4IBlAFICIAAIARBvIgzAAIgRg8IhVAJIABBMIBUAAIACAzIhWAAIgBBLIBVAIIARg6IAzAAIgRBtgArHCGIAAgrIAZgHIAAhcIhUAAIAABcIAZAHIAAArIh/AAIAAgrIAagHIAAjXIgagFIAAg4IBmAFIAAB3IBUAAIAAh3IBMAAIAAEPIAaAHIAAArg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ83, new cjs.Rectangle(-87.3,-19.2,174.6,38.6), null);


(lib.Символ82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A79B2").s().p("AB/ClIhJgFIAAgrIAZgIIABjXIgagFIAAg4IBlAGIABEOIAZAFIAIAAIAAkTIBMAAIAAETIAJABIAZgFIAAkPIBMAAIAAEOIAaAIIAAAWIABAVQhyAIg5AAQg1AAgzgDgAHpCkIhGgEIAAgqIAZgJIABjXIgagFIAAg3IBlAFIABBgQAagBAoAHQANADALAFQAKAFAIAHQAIAIAGAJQAFAIAEAKQAGAdgBASQgCAagHAUQgIATgNANQgaAZgkAKQgSAEgTACQgPACgQAAIgIAAgAIIAAIAABUQA7AJABg0QABgqguAAIgPABgAj4CkIhHgEIAAgqIAagJIAAjXIgagFIAAg3IBmAFIABBgQAZgBAoAHQANADALAFQALAFAHAHQAIAIAGAJQAGAIADAKQAHAdgBASQgDAagHAUQgHATgOANQgaAZgkAKQgRAEgTACQgQACgPAAIgIAAgAjZAAIAABUQA6AJABg0QABgqguAAIgOABgAhbCgIABguIAZgFIAAjRIgZgEIAAg4IBlAJIAAEEIAZAFIAAAugAnNCgIAAgrIAZgHIAAiYIgZBcIgiADIgigDIgahbIABCXIAZAHIAAArIh/AAIAAgrIAZgHIABjXIgagGIAAg3IBmAFIAZARIAiB3IAih3IAZgRIBMAAIAAEPIAaAHIgBArg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ82, new cjs.Rectangle(-65.7,-16.8,131.5,33.7), null);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.belkahv();
	this.instance.parent = this;
	this.instance.setTransform(-16,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ77, new cjs.Rectangle(-16,-23,32,46), null);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.belka();
	this.instance.parent = this;
	this.instance.setTransform(-24,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ76, new cjs.Rectangle(-24,-23.5,48,47), null);


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girls_03();
	this.instance.parent = this;
	this.instance.setTransform(-14.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ73, new cjs.Rectangle(-14.5,-14.5,29,29), null);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girls_06();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ71, new cjs.Rectangle(-46.5,-78,93,156), null);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girls_12();
	this.instance.parent = this;
	this.instance.setTransform(-23,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ69, new cjs.Rectangle(-23,-20,46,40), null);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girls_21();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ67, new cjs.Rectangle(-46.5,-48,93,96), null);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girls_24();
	this.instance.parent = this;
	this.instance.setTransform(-23,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ65, new cjs.Rectangle(-23,-17,46,34), null);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girls_09();
	this.instance.parent = this;
	this.instance.setTransform(-34,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ63, new cjs.Rectangle(-34,-72,68,144), null);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girls_16();
	this.instance.parent = this;
	this.instance.setTransform(-22.5,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ62, new cjs.Rectangle(-22.5,-11,45,22), null);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elk_1111();
	this.instance.parent = this;
	this.instance.setTransform(-82.5,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ57, new cjs.Rectangle(-82.5,-49.5,165,99), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elk_06();
	this.instance.parent = this;
	this.instance.setTransform(-82.5,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(-82.5,-49.5,165,99), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Символ54, null, null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Символ53, null, null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ded_05();
	this.instance.parent = this;
	this.instance.setTransform(-18.3,-21,0.915,0.915);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(-18.3,-21,36.6,42.1), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ded_05();
	this.instance.parent = this;
	this.instance.setTransform(-18.3,-21,0.915,0.915);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(-18.3,-21,36.6,42.1), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ded_10();
	this.instance.parent = this;
	this.instance.setTransform(-18.3,-18.3,0.915,0.915);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-18.3,-18.3,36.6,36.6), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ded_03();
	this.instance.parent = this;
	this.instance.setTransform(-64.5,-86.4,0.915,0.915);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-64.5,-86.4,129,172.9), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjEAqQh8hKAbghQAcgiAPgBQAgAEAPAeIACACQBDg5BQAxQA1AhBHgIQBlgKBaAYQATAGAQAzQAPA0g8AAQg8gBiDAVQgdAFgcAAQhlAAhig7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-29.8,-10,59.8,20.2), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ded_08();
	this.instance.parent = this;
	this.instance.setTransform(-19.2,-44.3,0.915,0.915);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-44.3,38.5,88.8);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.box();
	this.instance.parent = this;
	this.instance.setTransform(-34.4,-34.4,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-34.4,-34.4,68.8,68.8), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elk_0d3();
	this.instance.parent = this;
	this.instance.setTransform(-103.5,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-103.5,-27,207,54), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blik();
	this.instance.parent = this;
	this.instance.setTransform(-20,-20,0.271,0.271);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-20,-20,40.1,40.6), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9ED5EF").s().p("AqoFRIAAqhIVRAAIAAKhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-68.1,-33.6,136.3,67.3), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elk_2uu1();
	this.instance.parent = this;
	this.instance.setTransform(-447,0);

	this.instance_1 = new lib.elk_2uu1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-447,-894);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-447,-894,894,1788), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elks_233();
	this.instance.parent = this;
	this.instance.setTransform(-331,-157.7,1.034,1.034);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-331,-157.7,662,315.5), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-353,-168.2,1.103,1.103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-353,-168.2,706,336.5), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elk_03();
	this.instance.parent = this;
	this.instance.setTransform(-47.5,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-47.5,-26.5,95,53), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elk_08();
	this.instance.parent = this;
	this.instance.setTransform(-51,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-51,-22,102,44), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elk_16();
	this.instance.parent = this;
	this.instance.setTransform(-71,-89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-71,-89.5,142,179), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elk_233();
	this.instance.parent = this;
	this.instance.setTransform(-136,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-136,-64.5,272,129), null);


(lib.Символ63_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.palez3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-66,-66,1.915,1.915);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ63_1, new cjs.Rectangle(-66,-66,134.1,134.1), null);


(lib.Символ81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 83
	this.instance = new lib.Символ83();
	this.instance.parent = this;
	this.instance.setTransform(-303,270.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:248.5},9,cjs.Ease.get(1)).to({y:270.1},10,cjs.Ease.get(1)).to({y:291.7},10,cjs.Ease.get(1)).to({y:270.1},10,cjs.Ease.get(1)).wait(1));

	// Символ 82
	this.instance_1 = new lib.Символ82();
	this.instance_1.parent = this;
	this.instance_1.setTransform(324.6,267.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:289.1},9,cjs.Ease.get(1)).to({y:267.5},10,cjs.Ease.get(1)).to({y:245.9},10,cjs.Ease.get(1)).to({y:267.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390.3,250.7,780.7,38.7);


(lib.Символ80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ81();
	this.instance.parent = this;
	this.instance.setTransform(13.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9,cjs.Ease.get(1)).to({alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-377.2,250.7,780.7,38.7);


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ73();
	this.instance.parent = this;
	this.instance.setTransform(5.9,8.6,1,1,0,0,0,5.9,8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.8,x:6,y:8.7},24,cjs.Ease.get(-1)).to({rotation:-7.7,y:8.6},25,cjs.Ease.get(1)).to({regX:6,regY:8.7,rotation:-3.5,x:6.1,y:8.8},26,cjs.Ease.get(-1)).to({regX:5.9,regY:8.6,rotation:0,x:5.9,y:8.6},24,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-14.5,29,29);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ71();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ72, new cjs.Rectangle(-46.5,-78,93,156), null);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ69();
	this.instance.parent = this;
	this.instance.setTransform(6.9,10.6,1,1,0,0,0,6.9,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.8,x:7},18,cjs.Ease.get(-1)).to({rotation:-8.2},21,cjs.Ease.get(1)).to({rotation:-4},20,cjs.Ease.get(-1)).to({rotation:0,x:6.9},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-20,46,40);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ67();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ68, new cjs.Rectangle(-46.5,-48,93,96), null);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ65();
	this.instance.parent = this;
	this.instance.setTransform(16,12.1,1,1,0,0,0,16,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5,x:16.1},16,cjs.Ease.get(-1)).to({rotation:10.9,x:16,y:12.2},18,cjs.Ease.get(1)).to({rotation:5.3,x:16.1,y:12.1},18,cjs.Ease.get(-1)).to({rotation:0,x:16},17,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-17,46,34);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.parent = this;
	this.instance.setTransform(-16.8,7.7,1,1,0,0,0,-16.8,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:7.8,rotation:-4.1,y:7.9},11,cjs.Ease.get(-1)).to({regY:7.7,rotation:-9.2,y:7.8},13,cjs.Ease.get(0.99)).to({rotation:-4.8,x:-16.7},12,cjs.Ease.get(-1)).to({rotation:0,x:-16.8,y:7.7},13,cjs.Ease.get(0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-11,45,22);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// girls_06.png
	this.instance = new lib.Символ72();
	this.instance.parent = this;
	this.instance.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// girls_03.png
	this.instance_1 = new lib.Символ74();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16,-70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ61, new cjs.Rectangle(-46.5,-85,93,170), null);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// girls_16.png
	this.instance = new lib.Символ64();
	this.instance.parent = this;
	this.instance.setTransform(22,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// girls_09.png
	this.instance_1 = new lib.Символ63();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(-44.5,-72,89,144), null);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// girls_24.png
	this.instance = new lib.Символ66();
	this.instance.parent = this;
	this.instance.setTransform(-28,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// girls_21.png
	this.instance_1 = new lib.Символ68();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// girls_12.png
	this.instance_2 = new lib.Символ70();
	this.instance_2.parent = this;
	this.instance_2.setTransform(5,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(-51,-51.5,102,103), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ57();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},24,cjs.Ease.get(1)).to({alpha:0},25,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ57();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-49.5,165,99);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ55();
	this.instance.parent = this;
	this.instance.alpha = 0.602;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},24,cjs.Ease.get(1)).to({alpha:0.602},25,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ55();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-49.5,165,99);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ77();
	this.instance.parent = this;
	this.instance.setTransform(-1,21.6,1,1,0,0,0,-1,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.5},3,cjs.Ease.get(0.88)).to({rotation:0},3,cjs.Ease.get(0.88)).to({rotation:4.5},3,cjs.Ease.get(0.88)).to({rotation:0},3,cjs.Ease.get(0.88)).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-23,32,46);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(-6.2,3.2,1,1,0,0,0,-6.2,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.88,scaleY:0.96,rotation:-15,x:-6.3,y:3.1},19,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:-6.2,y:3.2},20,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,-18.3,36.6,36.6);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.16},16,cjs.Ease.get(1)).to({alpha:0},18,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ51();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,-21,36.6,42.1);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// belka.png
	this.instance = new lib.Символ76();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// belkahv.png
	this.instance_1 = new lib.Символ52();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-24,-23.5,48,47), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-29.8,-10,59.8,20.2), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-44.3,38.5,88.8);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-34.4,-34.4,68.8,68.8), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-103.5,-27,207,54), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).wait(3).to({x:20.3,y:19},0).wait(3).to({x:36.5,y:-18.3},0).wait(3).to({x:24.3,y:-45.3},0).wait(3).to({x:41.8,y:22.8},0).wait(3).to({x:37.5,y:-36.8},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:0,y:0},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:37.5,y:-36.8},0).wait(3).to({x:41.8,y:22.8},0).wait(3).to({x:24.3,y:-45.3},0).wait(3).to({x:36.5,y:-18.3},0).wait(3).to({x:20.3,y:19},0).wait(3).to({x:0,y:0},0).wait(2).to({x:6.1,y:13.1},0).to({_off:true},3).wait(2));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_1 = new lib.Символ28();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).wait(3).to({x:20.3,y:19},0).wait(3).to({x:36.5,y:-18.3},0).wait(3).to({x:24.3,y:-45.3},0).wait(3).to({x:41.8,y:22.8},0).wait(3).to({x:37.5,y:-36.8},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:0,y:0},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:37.5,y:-36.8},0).wait(3).to({x:41.8,y:22.8},0).wait(3).to({x:24.3,y:-45.3},0).wait(3).to({x:36.5,y:-18.3},0).wait(3).to({x:20.3,y:19},0).wait(3).to({x:0,y:0},0).wait(2).to({x:6.1,y:13.1},0).wait(2).to({x:37.5,y:-36.8},0).wait(3).to({x:41.8,y:22.8},0).wait(3).to({x:24.3,y:-45.3},0).wait(3));

	// Слой 1 - копия: 2
	this.instance_2 = new lib.Символ28();
	this.instance_2.parent = this;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({_off:false},0).wait(3).to({x:20.3,y:19},0).wait(3).to({x:36.5,y:-18.3},0).wait(3).to({x:24.3,y:-45.3},0).wait(3).to({x:41.8,y:22.8},0).wait(3).to({x:37.5,y:-36.8},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:0,y:0},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:37.5,y:-36.8},0).wait(3).to({x:41.8,y:22.8},0).wait(3).to({x:24.3,y:-45.3},0).wait(3).to({x:36.5,y:-18.3},0).wait(3).to({x:20.3,y:19},0).wait(3).to({x:0,y:0},0).wait(2).to({x:6.1,y:13.1},0).wait(2).to({x:20.3,y:-65},0).wait(3).to({x:0,y:0},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:37.5,y:-36.8},0).to({_off:true},3).wait(4));

	// Слой 1 - копия: 2
	this.instance_3 = new lib.Символ28();
	this.instance_3.parent = this;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).wait(3).to({x:20.3,y:19},0).wait(3).to({x:36.5,y:-18.3},0).wait(3).to({x:24.3,y:-45.3},0).wait(3).to({x:41.8,y:22.8},0).wait(3).to({x:37.5,y:-36.8},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:0,y:0},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:37.5,y:-36.8},0).wait(3).to({x:41.8,y:22.8},0).wait(3).to({x:24.3,y:-45.3},0).wait(3).to({x:36.5,y:-18.3},0).wait(3).to({x:20.3,y:19},0).wait(3).to({x:0,y:0},0).wait(2).to({x:6.1,y:13.1},0).wait(2).to({x:20.3,y:-65},0).wait(3).to({x:37.5,y:-36.8},0).wait(3).to({x:41.8,y:22.8},0).wait(3).to({x:24.3,y:-45.3},0).wait(3).to({x:36.5,y:-18.3},0).wait(3).to({x:20.3,y:19},0).wait(3).to({x:0,y:0},0).to({_off:true},2).wait(2));

	// Слой 1 - копия: 2
	this.instance_4 = new lib.Символ28();
	this.instance_4.parent = this;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).wait(3).to({x:20.3,y:19},0).wait(3).to({x:36.5,y:-18.3},0).wait(3).to({x:24.3,y:-45.3},0).wait(3).to({x:41.8,y:22.8},0).wait(3).to({x:37.5,y:-36.8},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:0,y:0},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:37.5,y:-36.8},0).wait(3).to({x:41.8,y:22.8},0).wait(3).to({x:24.3,y:-45.3},0).wait(3).to({x:36.5,y:-18.3},0).wait(3).to({x:20.3,y:19},0).wait(3).to({x:0,y:0},0).wait(2).to({x:6.1,y:13.1},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:0,y:0},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:37.5,y:-36.8},0).wait(3).to({x:41.8,y:22.8},0).wait(3).to({x:24.3,y:-45.3},0).wait(3).to({x:36.5,y:-18.3},0).wait(3).to({x:20.3,y:19},0).wait(3).to({x:0,y:0},0).to({_off:true},2).wait(2));

	// Слой 1 - копия: 2
	this.instance_5 = new lib.Символ28();
	this.instance_5.parent = this;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).wait(3).to({x:20.3,y:19},0).wait(3).to({x:36.5,y:-18.3},0).wait(3).to({x:24.3,y:-45.3},0).wait(3).to({x:41.8,y:22.8},0).wait(3).to({x:37.5,y:-36.8},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:0,y:0},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:37.5,y:-36.8},0).wait(3).to({x:41.8,y:22.8},0).wait(3).to({x:24.3,y:-45.3},0).wait(3).to({x:36.5,y:-18.3},0).wait(3).to({x:20.3,y:19},0).wait(3).to({x:0,y:0},0).wait(2).to({x:6.1,y:13.1},0).wait(2).to({x:41.8,y:22.8},0).wait(3).to({x:37.5,y:-36.8},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:0,y:0},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:37.5,y:-36.8},0).wait(3).to({x:41.8,y:22.8},0).wait(3).to({x:24.3,y:-45.3},0).wait(3).to({x:36.5,y:-18.3},0).wait(3).to({x:20.3,y:19},0).wait(3).to({x:0,y:0},0).wait(2).to({x:6.1,y:13.1},0).to({_off:true},1).wait(2));

	// Слой 1 - копия
	this.instance_6 = new lib.Символ28();
	this.instance_6.parent = this;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).wait(3).to({x:20.3,y:19},0).wait(3).to({x:36.5,y:-18.3},0).wait(3).to({x:24.3,y:-45.3},0).wait(3).to({x:41.8,y:22.8},0).wait(3).to({x:37.5,y:-36.8},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:0,y:0},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:37.5,y:-36.8},0).wait(3).to({x:41.8,y:22.8},0).wait(3).to({x:24.3,y:-45.3},0).wait(3).to({x:36.5,y:-18.3},0).wait(3).to({x:20.3,y:19},0).wait(3).to({x:0,y:0},0).wait(2).to({x:6.1,y:13.1},0).wait(3).to({x:37.5,y:-36.8},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:0,y:0},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:37.5,y:-36.8},0).wait(3).to({x:41.8,y:22.8},0).wait(3).to({x:24.3,y:-45.3},0).wait(3).to({x:36.5,y:-18.3},0).wait(3).to({x:20.3,y:19},0).wait(3).to({x:0,y:0},0).wait(2).to({x:6.1,y:13.1},0).to({_off:true},3).wait(9));

	// Слой 1
	this.instance_7 = new lib.Символ28();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({x:20.3,y:19},0).wait(3).to({x:36.5,y:-18.3},0).wait(3).to({x:24.3,y:-45.3},0).wait(3).to({x:41.8,y:22.8},0).wait(3).to({x:37.5,y:-36.8},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:0,y:0},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:37.5,y:-36.8},0).wait(3).to({x:41.8,y:22.8},0).wait(3).to({x:24.3,y:-45.3},0).wait(3).to({x:36.5,y:-18.3},0).wait(3).to({x:20.3,y:19},0).wait(3).to({x:0,y:0},0).wait(2).to({x:6.1,y:13.1},0).wait(3).to({x:0,y:0},0).wait(3).to({x:20.3,y:19},0).wait(3).to({x:36.5,y:-18.3},0).wait(3).to({x:24.3,y:-45.3},0).wait(3).to({x:41.8,y:22.8},0).wait(3).to({x:37.5,y:-36.8},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:0,y:0},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:36.5,y:-18.3},0).wait(3).to({x:24.3,y:-45.3},0).wait(3).to({x:41.8,y:22.8},0).wait(3).to({x:37.5,y:-36.8},0).wait(3).to({x:20.3,y:-65},0).wait(3).to({x:0,y:0},0).to({_off:true},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40.1,40.6);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(33, 33, 1)];
	this.instance.cache(-70,-36,140,71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-85.1,-50.6,174,104), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-124},199,cjs.Ease.get(1)).to({x:0},200,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-447,-894,894,1788);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(0,-447);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:446.7},189).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-447,-1341,894,1788);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-47.5,-26.5,95,53), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-51,-22,102,44), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(-25.6,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-71,-89.5,142,179), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ56();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ53();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,1.5);
	this.instance_1.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-82.5,-49.5,165,99), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ58();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ54();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,0.5);
	this.instance_1.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-82.5,-49.5,165,99), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-136,-64.5,272,129), null);


(lib.Символ64_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance_1 = new lib.Символ80();
	this.instance_1.parent = this;
	this.instance_1.setTransform(229.9,-22.2,0.614,0.614,0,180,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(93));

	// Слой 1
	this.instance_2 = new lib.Символ63_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-55,81.8,0.723,0.723,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-0.1,regY:-0.1,scaleX:0.63,scaleY:0.63},2).to({regX:0,regY:0,scaleX:0.72,scaleY:0.72},2).to({regX:-0.1,regY:-0.1,scaleX:0.63,scaleY:0.63},2).to({regX:0,regY:0,scaleX:0.72,scaleY:0.72},2).to({rotation:-180,guide:{path:[-54.9,81.8,252.7,-332.2,547.6,81.8]}},29,cjs.Ease.get(1)).to({regX:-0.1,regY:-0.1,scaleX:0.65,scaleY:0.65,guide:{path:[547.6,81.8,546.7,80.4,545.7,79]}},2).to({regX:0,regY:0,scaleX:0.72,scaleY:0.72,guide:{path:[545.7,79,546.7,80.4,547.7,81.8]}},2).to({regX:-0.1,regY:-0.1,scaleX:0.65,scaleY:0.65,guide:{path:[547.6,81.8,546.7,80.4,545.7,79]}},2).to({regX:0,regY:0,scaleX:0.72,scaleY:0.72,guide:{path:[545.7,79,546.7,80.4,547.7,81.8]}},2).wait(1).to({rotation:-90,guide:{path:[547.6,81.8,252.7,-332.2,-54.9,81.8]}},38,cjs.Ease.get(1)).to({regX:-0.1,regY:-0.1,scaleX:0.63,scaleY:0.63},2).to({regX:0,regY:0,scaleX:0.72,scaleY:0.72},2).to({regX:-0.1,regY:-0.1,scaleX:0.63,scaleY:0.63},2).to({regX:0,regY:0,scaleX:0.72,scaleY:0.72},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.7,-200,580.4,329.5);


(lib.Символ79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(0,23.5,1,1,0,0,0,0,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[0.1,23.5,26,-7.2,63.5,23.4]}},7,cjs.Ease.get(1)).wait(20).to({guide:{path:[63.5,23.4,63.6,23.5,63.7,23.5,118.4,-12.7,164.5,23.8]}},7,cjs.Ease.get(1)).wait(21).to({guide:{path:[164.5,23.9,164.5,23.9,164.6,23.9,218.9,-11.4,275.8,23]}},7,cjs.Ease.get(1)).wait(14).to({x:275.8,y:23},0).to({guide:{path:[275.8,23,276.2,23.2,276.6,23.5,338.5,-20.1,394.3,22.8]}},7).wait(7).to({x:394.3,y:22.9},0).to({guide:{path:[394.3,22.8,394.4,22.9,394.5,23,445.8,-9,496.8,22.5,496.9,22.5,496.9,22.5]}},7).wait(17).to({y:22.5},0).to({guide:{path:[496.9,22.5,553,-13.7,602.5,22.6]}},8,cjs.Ease.get(0.9)).wait(22).to({skewY:180,x:602.5,y:22.7},0).to({guide:{path:[602.5,22.6,553,-13.7,496.8,22.5]}},8,cjs.Ease.get(1)).wait(13).to({guide:{path:[496.9,22.5,496.9,22.5,496.9,22.5,446,-8.9,394.8,22.8]}},7,cjs.Ease.get(1)).wait(13).to({x:394.8,y:22.9},0).to({guide:{path:[394.7,22.8,394.6,22.9,394.5,23,338.6,-20.2,276.6,23.5,276.2,23.2,275.9,23]}},7,cjs.Ease.get(1)).wait(9).to({x:275.9,y:23.1},0).to({guide:{path:[275.9,23.1,219,-11.4,164.6,23.9,164.2,23.6,163.7,23.2]}},8).wait(12).to({x:163.7,y:23.2},0).to({guide:{path:[163.7,23.2,117.9,-12.3,63.7,23.6,63.4,23.3,63.1,23.1]}},8,cjs.Ease.get(1)).wait(13).to({x:63,y:23.1},0).to({guide:{path:[63,23,26.6,-6.5,1,22.4]}},6,cjs.Ease.get(1)).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-23.5,48,47);


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ79();
	this.instance.parent = this;
	this.instance.setTransform(42.4,-2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(123));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18.4,-26.4,48,47);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ59();
	this.instance.parent = this;
	this.instance.setTransform(45.8,34.4);

	this.instance_1 = new lib.Символ60();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-52.3,12.1);

	this.instance_2 = new lib.Символ61();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-2,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ75, new cjs.Rectangle(-96.8,-85.9,193.6,171.8), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(9.2,-25.1);

	this.instance_1 = new lib.Символ38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8.2,0);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-27.4,-44.3,54.9,88.8), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(-14.5,-39.6,1,1,0,0,0,-14.5,-39.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-14.6,rotation:-2.8,x:-14.6},9,cjs.Ease.get(-1)).to({regX:-14.5,rotation:-6.2,x:-14.5},10,cjs.Ease.get(1)).to({rotation:-3,x:-14.6,y:-39.7},10,cjs.Ease.get(-1)).to({rotation:0,x:-14.5,y:-39.6},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.4,-44.3,54.9,88.8);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-29.8,-10,59.8,20.2), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.148},14,cjs.Ease.get(1)).to({alpha:0},15,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ35();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// Слой 2
	this.instance_2 = new lib.Символ42();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.2,24.1);
	this.instance_2.alpha = 0.262;
	this.instance_2.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_2.cache(-32,-12,64,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.4,-34.4,69.8,74.4);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 14
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(-4.5,-12.5,1,1,0,0,0,51,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.13,scaleY:1.13},19,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},20,cjs.Ease.get(-1)).to({scaleX:0.82,scaleY:0.82,x:-4.4},20,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:-4.5},20,cjs.Ease.get(-1)).wait(1));

	// Символ 16
	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12.5,-13,1,1,0,0,0,-46.5,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-13.1,scaleX:0.86,scaleY:0.86,y:-13.1},19,cjs.Ease.get(1)).to({regY:-13,scaleX:1,scaleY:1,y:-13},20,cjs.Ease.get(-1)).to({scaleX:1.13,scaleY:1.13},20,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},20,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.5,-26.5,213,53);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-136,-64.5,272,129), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ded_10.png
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(-26,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ded_05.png
	this.instance_1 = new lib.Символ45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33.4,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// ded_03.png
	this.instance_2 = new lib.Символ46();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-4.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-69,-83,129,172.9), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0.602;
	this.instance_1.filters = [new cjs.BlurFilter(33, 33, 1)];
	this.instance_1.cache(-70,-36,140,71);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-85.1,-50.6,174,104), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.2,5.9);
	this.instance_1.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-84.9,-49.5,173,108.8), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// girls_24.png
	this.instance = new lib.Символ75();
	this.instance.parent = this;
	this.instance.setTransform(3.1,-0.4,1.017,1.017);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-95.3,-87.7,196.7,174.6), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(-2.2,24.7,0.628,0.628,0,0,0,-3.5,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:31.8,scaleX:0.69,scaleY:0.69,y:24.8},4,cjs.Ease.get(0.96)).to({regY:31.6,scaleX:0.63,scaleY:0.63,y:24.7},3,cjs.Ease.get(0.96)).wait(1).to({regY:31.8,scaleX:0.69,scaleY:0.69,y:24.8},4,cjs.Ease.get(0.96)).to({regY:31.6,scaleX:0.63,scaleY:0.63,y:24.7},3,cjs.Ease.get(0.96)).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,-16.8,45,49.4);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.alpha = 0.23;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},19,cjs.Ease.get(1)).to({alpha:0.23},20,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ23();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-64.5,272,129);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-69,-83,129,172.9), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-95.3,-87.7,196.7,174.6), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-0.1,regY:22,scaleX:1.1,scaleY:1.1,x:-0.1,y:22.1},0).wait(1).to({regY:22.1,scaleX:0.91,scaleY:0.91},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-64.5,272,129);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(-3.1,0.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-153.3,-72.6,300.3,142.4), null);


(lib.Символ19 = function(mode,startPosition,loop) {
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

	// Слой 14
	this.instance = new lib.Символ64_1();
	this.instance.parent = this;
	this.instance.setTransform(-128.2,-2.3,0.497,0.497,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:0,x:-82.8,y:9.2,alpha:0},6).wait(1).to({skewX:180,x:-128.2,y:-2.3,alpha:1},6).wait(1));

	// Слой 13
	this.instance_1 = new lib.Символ78();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-296,116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:236.9,alpha:0},6,cjs.Ease.get(1)).wait(1).to({y:116.5,alpha:1},6).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6.5,-261.9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-108.6,alpha:0.672},4).to({y:-121.9,alpha:1},2).wait(1).to({y:-108.6,alpha:0.672},2).to({y:-261.9,alpha:0},4).wait(1));

	// Символ 14
	this.instance_3 = new lib.Символ27();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-12.5,-137);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-106.7,alpha:0.672},2).to({y:-259,alpha:0},4).wait(1).to({y:-106.7,alpha:0.672},4).to({y:-137,alpha:1},2).wait(1));

	// Символ 2
	this.instance_4 = new lib.Символ24();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-7,209);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.06,scaleY:1.06,y:149},2).to({scaleX:1.11,scaleY:1.11,y:89},2).to({scaleX:1,scaleY:1,y:99},2).wait(1).to({scaleX:1.11,scaleY:1.11,y:89},2).to({scaleX:1,scaleY:1,y:209},4).wait(1));

	// Символ 4
	this.instance_5 = new lib.Символ4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(204.5,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14));

	// Символ 10
	this.instance_6 = new lib.Символ10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-222.9,43.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14));

	// Слой 12
	this.instance_7 = new lib.Символ39();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-12.6,106.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:102.4},2).to({y:214.4},4).wait(1).to({y:102.4},4).to({y:106.4},2).wait(1));

	// Символ 12
	this.instance_8 = new lib.Символ12();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-8,22.9,1.235,1.235);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:0.84,scaleY:0.84,y:9.5},4).to({scaleX:1,scaleY:1},2).wait(1).to({scaleX:0.84,scaleY:0.84},2).to({scaleX:1.24,scaleY:1.24,y:22.9},4).wait(1));

	// Символ 6
	this.instance_9 = new lib.Символ6();
	this.instance_9.parent = this;
	this.instance_9.setTransform(227,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14));

	// Символ 8
	this.instance_10 = new lib.Символ8();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-227,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(14));

	// Символ 18
	this.instance_11 = new lib.Символ18();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,41.3,1.073,1.073);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355,-288.9,710,563.3);


// stage content:
(lib.elka640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 70/window.devicePixelRatio;
		this.fon.y = - stage.mouseY / 70/window.devicePixelRatio;
		}
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(9);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// elk_23.png
	this.main = new lib.Символ19();
	this.main.parent = this;
	this.main.setTransform(320,166.5);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 12
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(376,-137);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 10
	this.fon = new lib.Символ17();
	this.fon.parent = this;
	this.fon.setTransform(-33,-16,1,1,0,0,0,-353,-168.2);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(249,-1325.5,894,1918.8);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/belka.png?1481201547288", id:"belka"},
		{src:"images/belkahv.png?1481201547288", id:"belkahv"},
		{src:"images/bg.jpg?1481201547288", id:"bg"},
		{src:"images/blik.png?1481201547288", id:"blik"},
		{src:"images/box.png?1481201547288", id:"box"},
		{src:"images/ded_03.png?1481201547288", id:"ded_03"},
		{src:"images/ded_05.png?1481201547288", id:"ded_05"},
		{src:"images/ded_08.png?1481201547288", id:"ded_08"},
		{src:"images/ded_10.png?1481201547288", id:"ded_10"},
		{src:"images/elk_03.png?1481201547288", id:"elk_03"},
		{src:"images/elk_06.png?1481201547288", id:"elk_06"},
		{src:"images/elk_08.png?1481201547288", id:"elk_08"},
		{src:"images/elk_0d3.png?1481201547288", id:"elk_0d3"},
		{src:"images/elk_1111.png?1481201547288", id:"elk_1111"},
		{src:"images/elk_16.png?1481201547288", id:"elk_16"},
		{src:"images/elk_233.png?1481201547288", id:"elk_233"},
		{src:"images/elk_2uu1.png?1481201547288", id:"elk_2uu1"},
		{src:"images/elks_233.png?1481201547288", id:"elks_233"},
		{src:"images/girls_03.png?1481201547288", id:"girls_03"},
		{src:"images/girls_06.png?1481201547288", id:"girls_06"},
		{src:"images/girls_09.png?1481201547288", id:"girls_09"},
		{src:"images/girls_12.png?1481201547288", id:"girls_12"},
		{src:"images/girls_16.png?1481201547288", id:"girls_16"},
		{src:"images/girls_21.png?1481201547288", id:"girls_21"},
		{src:"images/girls_24.png?1481201547288", id:"girls_24"},
		{src:"images/palez3.png?1481201547288", id:"palez3"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;