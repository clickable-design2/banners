(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,819,551);


(lib.for_03 = function() {
	this.initialize(img.for_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,227,160);


(lib.for_05 = function() {
	this.initialize(img.for_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,229,353);


(lib.for_08 = function() {
	this.initialize(img.for_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,102);


(lib.for_11 = function() {
	this.initialize(img.for_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,214);


(lib.for_16 = function() {
	this.initialize(img.for_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,160);


(lib.for_19 = function() {
	this.initialize(img.for_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,107);


(lib.for_21 = function() {
	this.initialize(img.for_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,116);


(lib.for_29 = function() {
	this.initialize(img.for_29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,128);


(lib.for_32 = function() {
	this.initialize(img.for_32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,92);


(lib.for_34 = function() {
	this.initialize(img.for_34);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,103);


(lib.mouse = function() {
	this.initialize(img.mouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.stol = function() {
	this.initialize(img.stol);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,549,342);// helper functions:

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


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Am+YAQgIgCgDgIQgCgJAMgQQAzg9AehLQAGgNADgMQgDgGAAgKQgEhFgdhAQgNgbgDgLQgGgaAHgjIAgiDQAThOgGg0QgCgOgGgeQgGgcgCgPQgCgTABghQAAglgBgQQgDgrgbhPQgdhRgEgpQgEggAEgpQACgZAIgwQAKg5AJgfQANgwAVgiQAPgYA3g8QAtg0APgmQg2gLhCAVQgrAOhIAlIiOBJQguAYgRASQgRATgKAfQgHATgHAlQgNBFgFAhQgHA5AEAtQABANgDAKIgBACIAEAHQATAnAFA3QACAggCBCQgGDPANDUQABATgIAGQgFAEgIgDQgHgCgEgHQgGgJAAgTIgDnEQAAgogDgXQgDgigKgaQgLgcgug7Qgog1gJglQgJgkAKgpQAKgmAYgiQAVgcAggeQAUgSApggIBohSQAwgmAcgRQAtgbApgHIAtgGQAZgGANgNQALgLAHgTIAKgjQAIgfAXgoQAbgtANgXQAwhXAui7QAvjBArhUQAJgSAeg0QAagsAMgcIAOgiQAIgTAHgNQAQgYAnglICAh4QBjhbAdgZQAzgsAogVQA1gdAyAAQAMAAAFAFIABAAIACgBQAGgCAPABIAvAFQAMABAHAEIAKAHQAFAEANAFQALAGAAAJIAAAAIABABQAGAEgBAJQgCAJgGAFQgFAEgJAEIgPAGQgGAEgHAHIgMAMQgIAGgOAIIgXANQgcAUgSAoQgLAYgNAyQgbBsgGA6QgLBdAVBIIATA0QANAiAFATIAGAZIAIAZQAIAZATAaQAMASAYAcQAjAqAXAWQAjAhAiASQAVAKArAPIBeAfQAdAKgBAQQAAAIgKALQgQARgSANQgPAKgMgBQgIADgNgCIgvgKQgegGgSgCQgmgEgwAGQgeAEg4AMIhcAVQgvAJgaAKQgZAIggAQQghAPgNAMQgMAKgLASIgSAhIgXAuQgOAagGAVQgIAcgEAzQgEAyACAeQACAbAJAiQAGAVAOAnIA+CtIALAKQA/BHBVAuIAgASQASAKAMALQAQARAIAUQAHAWgGAUQgIAXgTAEQgLADgPgFIgZgNQgxgbhSgCQhegDhHAYQgsAOgyAeQgeASg5AoQg6ApgcAZQhRBKg9CMQgQAngOAnIgDAKIgDAIQgQAtgLAuQgKAoACAXQACARAKAaIARArQAUBEggBOQgMAfgVAkQgOAWgbAoQgMASgKAEQgEACgEAAIgHgBgAlcPTIABgBIABAAIADgLIABgNIAAgCIgGAbg");
	this.shape.setTransform(88.8,153.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(0,0,177.7,307.4), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mouse();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.686,0.686);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(0,0,43.9,43.9), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(82,86,183,0.2)").s().p("AnpQQQgkgYAOhQQANhKALgmQATg8AhgnIAjglQAVgWAJgSQARghgEhAQgLiahHiHIgig7QgVglgLgXQgUgqgdhaIg/jHQgmh5gShAQgchogMhWQgGgrAOgSQALgNAUgDQASgDATAGQAfAKBIBAQA8A1AugGQAhgEA4gwQA1guAjgCQgGhGgBgjQgCg7AIguQAKg3AYgtQAbgxAqgcQA8grBqgDQBlgEA+AjQAkAVAhAoQAWAaAgAzQAOAWAIAKQAOARAPAIQAMAGAVAEIAiAHQAzAPAsA1QA/BMAYBvQAUBggLByIgJBVQgCAxAKAjQAKAiAoA/QAnA9AKAjQALAqgKAtQgKAsgcAiQgNAOg3AsQgrAjgPAeQgUAoAHBQQAJBZgLAjQgKAjgcAbQgcAbgjAKQgkAKglgIQgmgIgcgYQgJgHgXgZQgUgUgOgJQghgWgtADQgqAEgkAYQg5AmgrBbQg+CCAwBMIAeAtQAOAbgIATQgHAQgVAIQgOAGgZADQiuARi3AEIgGAAQgjAAgQgKg");
	this.shape.setTransform(71.6,105.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(0,0,143.2,210.1), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(65,65,65,0.4)").s().p("AnjNaQgPgEgHgLQgHgLAEgPQACgMAJgMQAGgIAMgLIAUgSQAKgMAWgpQATgiATgOQASgNAwgJQAugJASgPQgXgrgtgZQgtgYgxAEIghADQgTAAgLgIQgPgMACgWQACgVAPgOQANgMAVgHQANgEAZgFQAYgFAOgFQAVgIAMgNQAVgWgCgoQgBgbgOgsQgUhCABgoQABgcAKgZQALgaAUgRQAMgKAegSQAYgRAEgSQAHgfgfgeQgHgHgTgPQgRgNgIgJQgggmAFg7QAEg0AfgyQAxhOBRgvQgpACgkgdQgigcgOgpQgXhJAmhdQAUgxAcgLQANgGATABQALAAAWAEQAhAHAQAFQAaAIASANQAMAIAWAYQAUAWANAJQAeAVAngFQAngEAZgbQAMgNAMgYIAUgnQATgiAlgiQAugqAlAKQAVAGAQAXQALAPALAdQAKAdAEAPQAFAZgFATQgCALgJASQgKATgDAJQgKAdAIAjQAIAeAVAeQAMASAeAhQAdAhAMASQAtBAAEBNQAEA8gcAcQgUAVgwAKQg5AMg+gDIgdAAQgQAAgMAEQgOAFgKAKQgKAMAAAOQABARAQAOQAJAHAZAOQA7AiAlA8QAkA8ABBFQABAcgGAnIgLBCQgJA7ABBKQAAApAEBcQACA6gFAiQgJAygbAeQggAkhEAOQhFAOhdgJIiigVQhggMhFAIQhZAKg+AqIgXAQQgOAJgLADQgJADgHAAQgGAAgGgCg");
	this.shape.setTransform(51,86);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(0,0,102.1,172), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(82,86,183,0.4)").s().p("AiJLNQgSgHgJgQQgMgZAJgrIAHgiQAEgUgDgPQgDgUgOgWQgKgPgUgVQhehihohPIg5gsQgfgbgSgZQgfgtgEg4QgEg4AYgxIAYgnQAPgZAFgRQASg2gehJQgIgUgUgmQgUgngJgUQghhUAJhaQAEgpAPgbQAaguA9gQQA2gOA+ALQAtAJAMABQAhADAWgMQAOgHAWgZQAWgXAPgHQAagMAfALQAdALATAZQAQAVALAgIAQA6QAJAkAKAVQAMAeAUATQAQgWgBggQgCgbgNgeIgPggQgKgUgDgOQgEgTADgRQAEgTANgMQAOgLAfgDQA4gFAvAZQA0AbANAxQAoAIAngPQAogPAYghIAZgjQAPgUARgEQAPgDASAHQAMAFASANQAYAQAMAKQASAQAKARQAQAdABAxQABAxgTAYQgJANgSAKQgJAFgYAJIilA/QggANgQAIQgaAOgQARQggAkgJBeQgKBigaAkQgTAZgwAfQg0AggSAUQgcAfgLA0QgIAggEBAQgTDpguDeQgGAfgNAJQgJAGgKAAQgGAAgHgCg");
	this.shape.setTransform(57.7,71.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(0,0,115.5,143.8), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(82,86,183,0.2)").s().p("AjFKfQgngChGgMIiwgdQgggFgJgOQgHgKADgOQADgNAKgJQAQgOAggDQAdigguidQgMgqgCgQQgGghAKgYQAag+B+gFQgXgQgzgQQg1gPgWgPQgqgcgSg2QgRgxAHg5QAIhMAsgiQAQgNA3gUQAvgRARgXQAVgdgHhKQgGhKAUgdQARgXAggJQAcgIAgAHQAKACA5AUQApAOAcgCQAagCAhgRIA2gfQA3gbA+gDQAsgCAaAQQANAHAQASIAaAcQALALAeAVQAbATAMANQAfAiADAyQADAxgbAlQAQAUAwALQA0ALARANQAXASAHAkQAGAYgBAqQAAA2gNAbQgLAXgzAuQgtAogEAgQgEAiAbAjQALAPAsApQBAA+AWBDQAMAmgDAnQgDApgTAgQgVAkgsAbQggAUg0ATQhZAehbAOIhBAJQgmAFgaAIQgbAHg6AaQg2AYggAHQgjAJgrAAIgegBg");
	this.shape.setTransform(56.3,67.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(0,0,112.6,134.4), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhACsQgGgJACgJQACgJAKgJIAchHIhTjEIgLgTQgHgLgBgHQAAgJANgGQAMgGAPAAQAmAAADAbIACAaIA5B8IAxiEQgFgdAXgOQAWgGAQAFQAPAFABAOQAAALgKANQgfBagVAyIgqBoQgOAkgBAZQgBAMgGAIQgFAHgLADIgKABQgZAAgSgTg");
	this.shape.setTransform(13.1,19.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(0,0,26.1,38.3), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABSDcQgSgJAAgHQAAgJAJgOIAEg6IicAQIAAAuQAIAOAAAMQAAAIgHAEQgHADgNAAQgXAAgPgIQgPgJAAgGQAAgKAJgOIAAg/QgIgNAAgHQAAgMAHgFQAHgGANAAQAEgBAKAGQARg4ARhBQAQhCAQhKQgHgOAAgIQAAgKAIgGQAIgFARgBQAOABALAFIAXAJQAIgGAPAAQAUAAAQAKQANAKAAAKQAAAFgLAXIANDZIAPgEQAQABAIAJQAIAKAAALQAAAFgMAXIgEBKQAHAOAAANQAAAHgGAEQgHAEgOAAQgQgBgSgHgAgqBJIBUgGIgPjkIgHgDg");
	this.shape.setTransform(15.2,22.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(0,0,30.4,45.5), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACAC5IgGgIIgHgSIhJhvIgPABIAABgQAIAPAAAMQAAAHgHAEQgHAEgNAAQgQAAgSgJQgSgIAAgHQAAgJAJgOIAAhbIgRgBQgpA8gYAwIgKAaQgFAFgJgBQgKABgKgGQgJgFgJgLQgLgNAAgLQAAgJAHgGQAHgBANgJQAvhRAKgYQgCgTgRguQgLgegWgmQgXgIgCgKQgBgKAEgIQAFgIAKgIQARgMAOAAQALAAAGALIAFAOQAUAkAQAnIAhBOIAIAAIAAiHQgIgNAAgJQAAgLAIgFQAIgGARABQATAAAQAKQANAJAAAKQAAAGgLAWIAAB5IALgCIBKiZIAEgNQAHgMALAAQAOAAARANQAUAPgDATQAAAFgGAEQgGAFgMAEQgxBjgLAjIBCBsQADADAHADIAJAEQAIAGAAAJQAAALgLANQgSAVgVAAQgIAAgFgEg");
	this.shape.setTransform(19.1,18.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,0,38.2,37.8), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBCxQgTgPAAgKIABgGIABgMIAAkhIgCgIQAAgSAdAAQATAAAGAIIA1gJIAJgEQAJgEAGgBQAPAAAMAPQALANAAAOQAAAIgFAFQgJAJgQABIhJAKIAABuIASgGIANgDQAPAAAQAMQARALAAANIgCAHQgHARgSABIgcABIgYAFIAABLIAlgHQAHgGAJAAQAQAAAPAMQAPANAAANQAAAMgQAHIgjAEQg7AQgGABQgLAAgTgPg");
	this.shape.setTransform(8.5,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(0,0,17,38.3), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABSDcQgSgJAAgHQAAgJAJgOIAEg6IicAQIAAAuQAIAOAAAMQAAAIgHAEQgHADgNAAQgXAAgPgIQgPgJAAgGQAAgKAJgOIAAg/QgIgNAAgHQAAgMAHgFQAHgGANAAQAEgBAKAGQARg4ARhBQAQhCAQhKQgHgOAAgIQAAgKAIgGQAIgFARgBQAOABALAFIAXAJQAIgGAPAAQAUAAAQAKQANAKAAAKQAAAFgLAXIANDZIAPgEQAQABAIAJQAIAKAAALQAAAFgMAXIgEBKQAHAOAAANQAAAHgGAEQgHAEgOAAQgQgBgSgHgAgqBJIBUgGIgPjkIgHgDg");
	this.shape.setTransform(15.2,22.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,0,30.4,45.5), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAQC9IgUgDQgugFgeg6QgPgcgIgiQgHghAAgnQAAg5ATg6QAVg/AYABIAcAEIAngFIALACQAkAPAVArQALAXAGAeQAFAdAAAkQAAAsgHAmQgIAmgPAdQgbA0geAAgAgmhXQgJAoAAAkQAAAiAMA0QAPA/AUAAQAKgBAKgQQAJgQAIgfQANg3gCgeQgHiEgqAAQgXAAgOA4g");
	this.shape.setTransform(11.1,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,0,22.3,38), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhuC5QgOgJAAgIQAAgIAIgOIgEkkQgIgOAAgHQAAgLAIgGQAIgFARAAQAUAAAQAKQANAJAAALQAAAFgLAXIAEC/QA1h8AxhiIgCgJQAAgWAfAAQATAAAQAJQAQAJAAAMQAAAGgLAWIAAERQAHAPAAALQAAAQgbAAQgQAAgSgIQgSgIAAgIQAAgIAIgOIAAi4QggBRhECJIgFALQgGAKgPAEIgIABQgPAAgPgJg");
	this.shape.setTransform(12.9,19.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(0,0,25.9,38.8), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA4C7QgNgIAAgOIgBgWIggi4Ig2CuQgBAEADAIIAEAMIgBAFQgDAKgOAFQgOAGgQAAQgnAAAAgVQAAgHAJgHQAJgHAAgDIBTkBIAAgKIgDgKQAAgIAFgIQAFgJAKgJQATgSARAAQALAAAIAJQAIAIAAAOIgCAYIAzENQABAEAIAFQAIAFACAEIACAIQAAANgQAKQgQAKgSAAQgMAAgIgFg");
	this.shape.setTransform(12.6,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(0,0,25.2,38.4), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhsC7QgPgFgPgNQgOgNACgHQADgJAMgKQAXhVAUg9QAchVAWg2QgEgRADgGQAGgMAOAAIAVACQAQABAOAEQAQAGACAHQABAFgFAZQAOBGAdBmQAWgMANACQAOADAJANQAIAOAAAOQAAAYgeAAIgTgBIAQA0QAPARAAALQAAAMgXAGQgKADgLAAQgaAAgDgLQgFgVAAgFIgTg6IhkAQIgMAqQADARgEAKQgDALgMAAQgHAAgJgEgAguAzIBCgNIgahqg");
	this.shape.setTransform(15.1,19.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,30.3,38.2), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABSDcQgSgJAAgHQAAgJAJgOIAEg6IicAQIAAAuQAIAOAAAMQAAAIgHAEQgHADgNAAQgXAAgPgIQgPgJAAgGQAAgKAJgOIAAg/QgIgNAAgHQAAgMAHgFQAHgGANAAQAEgBAKAGQARg4ARhBQAQhCAQhKQgHgOAAgIQAAgKAIgGQAIgFARgBQAOABALAFIAXAJQAIgGAPAAQAUAAAQAKQANAKAAAKQAAAFgLAXIANDZIAPgEQAQABAIAJQAIAKAAALQAAAFgMAXIgEBKQAHAOAAANQAAAHgGAEQgHAEgOAAQgQgBgSgHgAgqBJIBUgGIgPjkIgHgDg");
	this.shape.setTransform(15.2,22.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,30.4,45.5), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhACsQgGgJACgJQACgJAKgJIAchHIhTjEIgLgTQgHgLgBgHQAAgJANgGQAMgGAPAAQAmAAADAbIACAaIA5B8IAxiEQgFgdAXgOQAWgGAQAFQAPAFABAOQAAALgKANQgfBagVAyIgqBoQgOAkgBAZQgBAMgGAIQgFAHgLADIgKABQgZAAgSgTg");
	this.shape.setTransform(13.1,19.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,26.1,38.3), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmpkSIK7CeIigBmIAAAKIE4CvIg0BeIgKAAIktivIgnC5g");
	this.shape.setTransform(42.6,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,85.3,55), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E3191A").ss(2,1,1).p("AEEAAQAABshMBMQhMBMhsAAQhrAAhMhMQhMhMAAhsQAAhrBMhMQBMhMBrAAQBsAABMBMQBMBMAABrg");
	this.shape.setTransform(26,26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.2)").s().p("Ai3C4QhMhNAAhrQAAhqBMhNQBNhMBqAAQBrAABNBMQBMBNAABqQAABrhMBNQhNBMhrAAQhqAAhNhMg");
	this.shape_1.setTransform(26,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-1,-1,54,54), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E3191A").ss(2,1,1).p("AEEAAQAABshMBMQhMBMhsAAQhrAAhMhMQhMhMAAhsQAAhrBMhMQBMhMBrAAQBsAABMBMQBMBMAABrg");
	this.shape.setTransform(26,26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.2)").s().p("Ai3C4QhMhNAAhrQAAhqBMhNQBNhMBqAAQBrAABNBMQBMBNAABqQAABrhMBNQhNBMhrAAQhqAAhNhMg");
	this.shape_1.setTransform(26,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-1,-1,54,54), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0194").s().p("AJ5LtQgVgJgGghQgCgpgDgSQgCgTgKgaIgTgrQgUgwgLhTQgOhsgHgbQgLgvgghQQgkhYgLglQgKglgXiEQgRhqgcg8IgOgeQgIgSgCgOQgDgRAEgQQAFgSANgKQAPgLAigBQDOgLD+gtQCbgcEshDQgIgSANgTQAMgSAUgGQAQgFAYAAIApAAQAjgCAfgRQAggSAVgcIARgWQAKgNAMgDQAVgGAQAWQAQAUgFAXQgFAUgRATQgLAMgYATIhDAzQgiAagPAIQgYANggAKQgUAFgnAIIkjA9QjPArhrASQivAciOADQAdA/AUB0QAXCIAPAtQAJAdAaA9QAYA6AKAgQAPAwAOBiQAOBiAOAvQAHAYAWA5QATAzAIAeQALAsgLAbQgIARgRAKQgKAFgKAAQgHAAgHgCgAp7KxQgLgCgJgIQgKgIgCgKQgDgPAJgZIAhhYQATgyAHgdQAHgaAIg2IA2lnIAIhCIADggQACgSAEgMIAJgUQAFgLABgJQACgJgDgVQgDgTACgKQACgKAKgOQALgRACgHQADgGADgTQACgPAFgIIAJgMQAHgHACgFQADgGACgLIADgMIksABQgyAAgZgEQgWgEghgKIg2gSQgngMhngOQhbgMgxgTIhBgeQgngSgbgFIghgEQgUgCgMgEQgNgDgRgJIgdgPIg8gWQglgMgTgRQgVgSgSgiQgWgnAEgbQADgSAQgMQAPgMAQAGQAPAFAKAUIARAkQAKASAWAOQAQAKAaAKQBHAaA+AQQBCARAWAJQAMAFAfARQAaAOARAGQAVAHAcAEIAxAFQBzALBtAnQAhAMAPADQAOACAcAAIEmAAQAoAAASAKQAOAIAGAOQAHAPgHANIgBADQAIAHAEAMQAFARgDATQgDAOgKATIgQAfQgOAggLA4IhgJLQgJA7gJApQgOBBgYA7QgKAcgNALQgOAMgRAAIgMgBg");
	this.shape.setTransform(163.5,75.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,326.9,150.2), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.for_03();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,227,160), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.for_05();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,229,353), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.for_08();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,125,102), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.for_11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,82,214), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.for_16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,98,160), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.for_19();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,96,107), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.for_21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,73,116), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.for_29();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,141,128), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.for_32();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,291,92), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.for_34();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,100,103), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(88.8,153.7,1,1,0,0,0,88.8,153.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177.7,307.4);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(88.8,153.7,1,1,0,0,0,88.8,153.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(21.9,21.9,1,1,0,0,0,21.9,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},59).to({scaleX:0.68,scaleY:0.68,x:22,y:22},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:21.9,y:21.9},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.9,43.9);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(6));

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(21.9,21.9,1,1,0,0,0,21.9,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:111.9},4).to({y:21.9},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.9,43.9);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(412.9,236.6,1,1,0,0,0,51.1,86);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(15, 15, 1)];
	this.instance.cache(-2,-2,106,176);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({_off:true},1).wait(80));

	// Слой 4
	this.instance_1 = new lib.Символ38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(705.7,248.7,1,1,0,0,0,56.3,67.2);
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.BlurFilter(16, 16, 1)];
	this.instance_1.cache(-2,-2,117,138);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({_off:true},1).wait(60));

	// Слой 3
	this.instance_2 = new lib.Символ39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(542.4,246.6,1,1,0,0,0,57.7,71.9);
	this.instance_2.compositeOperation = "lighter";
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.BlurFilter(15, 15, 1)];
	this.instance_2.cache(-2,-2,120,148);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({_off:true},1).wait(40));

	// Слой 2
	this.instance_3 = new lib.Символ41();
	this.instance_3.parent = this;
	this.instance_3.setTransform(259.3,219,0.944,0.944,0,0,0,71.6,105.1);
	this.instance_3.compositeOperation = "lighter";
	this.instance_3._off = true;
	this.instance_3.filters = [new cjs.BlurFilter(15, 15, 1)];
	this.instance_3.cache(-2,-2,147,214);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(79).to({_off:false},0).to({_off:true},1).wait(20));

	// Слой 1
	this.instance_4 = new lib.back();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,819,551);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(35.2,30.9,1,1,0,0,0,13.1,19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({regY:19.2,scaleX:1.37,scaleY:1.37,rotation:360,y:31.1},4).to({regY:19.1,scaleX:1,scaleY:1,rotation:720,y:30.9},5).wait(40).to({regY:19.2,scaleX:1.14,scaleY:1.14,x:27,y:30.6},10).to({regY:19.1,scaleX:1,scaleY:1,x:35.2,y:30.9},10).to({regY:19.2,scaleX:1.14,scaleY:1.14,x:27,y:30.6},10).to({regY:19.1,scaleX:1,scaleY:1,x:35.2,y:30.9},10).wait(11));

	// Слой 4
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(64.6,34.5,1,1,0,0,0,15.2,22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({rotation:360},4).to({scaleX:1.3,scaleY:1.3,rotation:720},4).to({scaleX:1,scaleY:1,rotation:1080},5).wait(36).to({scaleX:1.14,scaleY:1.14,x:60.4},10).to({scaleX:1,scaleY:1,x:64.6},10).to({scaleX:1.14,scaleY:1.14,x:60.4},10).to({scaleX:1,scaleY:1,x:64.6},10).wait(11));

	// Слой 5
	this.instance_2 = new lib.Символ27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(96.9,30.4,1,1,0,0,0,15.1,19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({rotation:360},8).to({regX:15.2,scaleX:1.4,scaleY:1.4,rotation:720,x:97.1,y:30.5},4).to({regX:15.1,scaleX:1,scaleY:1,rotation:1080,x:96.9,y:30.4},5).wait(32).to({regX:15.2,scaleX:1.14,scaleY:1.14,x:97.4,y:29.9},10).to({regX:15.1,scaleX:1,scaleY:1,x:96.9,y:30.4},10).to({regX:15.2,scaleX:1.14,scaleY:1.14,x:97.4,y:29.9},10).to({regX:15.1,scaleX:1,scaleY:1,x:96.9,y:30.4},10).wait(11));

	// Слой 2
	this.instance_3 = new lib.Символ28();
	this.instance_3.parent = this;
	this.instance_3.setTransform(126.4,31,1,1,0,0,0,12.6,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({rotation:360},12).to({scaleX:1.36,scaleY:1.36,rotation:720},4).to({scaleX:1,scaleY:1,rotation:1080},5).wait(28).to({scaleX:1.14,scaleY:1.14,x:130.8,y:30.6},10).to({scaleX:1,scaleY:1,x:126.4,y:31},10).to({scaleX:1.14,scaleY:1.14,x:130.8,y:30.6},10).to({scaleX:1,scaleY:1,x:126.4,y:31},10).wait(11));

	// Слой 6
	this.instance_4 = new lib.Символ29();
	this.instance_4.parent = this;
	this.instance_4.setTransform(153.4,30.8,1,1,0,0,0,12.9,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({rotation:360},16).to({regX:13,scaleX:1.34,scaleY:1.34,rotation:720,x:153.6},4).to({regX:12.9,scaleX:1,scaleY:1,rotation:1080,x:153.4},5).wait(24).to({scaleX:1.14,scaleY:1.14,x:161.6,y:30.3},10).to({scaleX:1,scaleY:1,x:153.4,y:30.8},10).to({scaleX:1.14,scaleY:1.14,x:161.6,y:30.3},10).to({scaleX:1,scaleY:1,x:153.4,y:30.8},10).wait(11));

	// Слой 7
	this.instance_5 = new lib.Символ30();
	this.instance_5.parent = this;
	this.instance_5.setTransform(433.1,30.3,1,1,0,0,0,11.1,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({rotation:360},20).to({regX:11.2,scaleX:1.4,scaleY:1.4,rotation:720,x:433.3,y:30.4},4).to({regX:11.1,scaleX:1,scaleY:1,rotation:1080,x:433.1,y:30.3},5).wait(30).to({scaleX:1.17,scaleY:1.17,x:420.1,y:29.7},10).to({scaleX:1,scaleY:1,x:433.1,y:30.3},10).to({scaleX:1.17,scaleY:1.17,x:420.1,y:29.7},10).to({scaleX:1,scaleY:1,x:433.1,y:30.3},10).wait(1));

	// Слой 8
	this.instance_6 = new lib.Символ31();
	this.instance_6.parent = this;
	this.instance_6.setTransform(461.4,34.3,1,1,0,0,0,15.2,22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({rotation:360},24).to({scaleX:1.29,scaleY:1.29,rotation:720},4).to({scaleX:1,scaleY:1,rotation:1080},5).wait(26).to({scaleX:1.17,scaleY:1.17,x:453.2},10).to({scaleX:1,scaleY:1,x:461.4},10).to({scaleX:1.17,scaleY:1.17,x:453.2},10).to({scaleX:1,scaleY:1,x:461.4},10).wait(1));

	// Слой 9
	this.instance_7 = new lib.Символ32();
	this.instance_7.parent = this;
	this.instance_7.setTransform(487.8,30.2,1,1,0,0,0,8.4,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({rotation:360},28).to({regX:8.5,scaleX:1.32,scaleY:1.32,rotation:720,x:488},4).to({regX:8.4,scaleX:1,scaleY:1,rotation:1080,x:487.8},5).wait(22).to({regX:8.5,scaleX:1.17,scaleY:1.17,x:484.3,y:29.5},10).to({regX:8.4,scaleX:1,scaleY:1,x:487.8,y:30.2},10).to({regX:8.5,scaleX:1.17,scaleY:1.17,x:484.3,y:29.5},10).to({regX:8.4,scaleX:1,scaleY:1,x:487.8,y:30.2},10).wait(1));

	// Слой 10
	this.instance_8 = new lib.Символ33();
	this.instance_8.parent = this;
	this.instance_8.setTransform(516.6,30.1,1,1,0,0,0,19.1,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({rotation:360},32).to({regY:19,scaleX:1.37,scaleY:1.37,rotation:720,y:30.3},4).to({regY:18.9,scaleX:1,scaleY:1,rotation:1080,y:30.1},5).wait(18).to({scaleX:1.17,scaleY:1.17,x:518,y:29.4},10).to({scaleX:1,scaleY:1,x:516.6,y:30.1},10).to({scaleX:1.17,scaleY:1.17,x:518,y:29.4},10).to({scaleX:1,scaleY:1,x:516.6,y:30.1},10).wait(1));

	// Слой 11
	this.instance_9 = new lib.Символ34();
	this.instance_9.parent = this;
	this.instance_9.setTransform(552.4,34.3,1,1,0,0,0,15.2,22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({rotation:360},36).to({scaleX:1.34,scaleY:1.34,rotation:720},4).to({scaleX:1,scaleY:1,rotation:1080},5).wait(14).to({scaleX:1.17,scaleY:1.17,x:560},10).to({scaleX:1,scaleY:1,x:552.4},10).to({scaleX:1.17,scaleY:1.17,x:560},10).to({scaleX:1,scaleY:1,x:552.4},10).wait(1));

	// Слой 12
	this.instance_10 = new lib.Символ35();
	this.instance_10.parent = this;
	this.instance_10.setTransform(582.3,30.7,1,1,0,0,0,13.1,19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(9).to({rotation:360},40).to({regY:19.2,scaleX:1.23,scaleY:1.23,rotation:720,y:30.9},4).to({regY:19.1,scaleX:1,scaleY:1,rotation:1080,y:30.7},5).wait(10).to({scaleX:1.17,scaleY:1.17,x:595,y:30.2},10).to({scaleX:1,scaleY:1,x:582.3,y:30.7},10).to({scaleX:1.17,scaleY:1.17,x:595,y:30.2},10).to({scaleX:1,scaleY:1,x:582.3,y:30.7},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22.1,11,573.2,46.2);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(26,26,1,1,0,0,0,26,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-1,-1,54,54), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(26,26,1,1,0,0,0,26,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-1,-1,54,54), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(62.5,51,1,1,0,0,0,62.5,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03,x:62.6},19).to({scaleX:1,scaleY:1,x:62.5},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,102);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(109.1,177,1,1,0,0,0,88.8,153.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ45(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 10
	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(77.5,207,1,1,0,0,0,62.5,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(114.5,176.5,1,1,0,0,0,114.5,176.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,229,353), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(168.1,118.9,1,1,0,0,0,163.5,75.1);
	this.instance.alpha = 0.441;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.stol();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.632,0.632);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,347,216.2), null);


(lib.Символ2копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// for_29.png
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(37,208.5,1,1,0,0,0,123,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.8,x:36.1},4,cjs.Ease.get(-1)).to({regY:28.6,rotation:-11.2,x:34.7,y:208.6},5,cjs.Ease.get(1)).to({rotation:-5.5,x:35.9,y:208.5},5,cjs.Ease.get(-1)).to({regY:28.5,rotation:0,x:37},5,cjs.Ease.get(1)).wait(1).to({rotation:-4.8,x:36.1},4,cjs.Ease.get(-1)).to({regY:28.6,rotation:-11.2,x:34.7,y:208.6},5,cjs.Ease.get(1)).to({rotation:-6.6,x:35.7},4,cjs.Ease.get(-1)).to({regY:28.5,rotation:0,x:37,y:208.5},6,cjs.Ease.get(1)).wait(1));

	// for_32.png
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(218.5,202,1,1,0,0,0,145.5,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:217.5},4,cjs.Ease.get(-1)).to({x:216.1},5,cjs.Ease.get(1)).to({x:217.3},5,cjs.Ease.get(-1)).to({x:218.5},5,cjs.Ease.get(1)).wait(1).to({x:217.5},4,cjs.Ease.get(-1)).to({x:216.1},5,cjs.Ease.get(1)).to({x:217.1},4,cjs.Ease.get(-1)).to({x:218.5},6,cjs.Ease.get(1)).wait(1));

	// for_21.png
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(290.1,98.4,1,1,0,0,0,41.1,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-3.5,x:286.9,y:99.5},4,cjs.Ease.get(-1)).to({rotation:-8,x:282.9,y:100.8},5,cjs.Ease.get(1)).to({rotation:-3.8,x:286.5,y:99.6},5,cjs.Ease.get(-1)).to({rotation:0,x:290.1,y:98.4},5,cjs.Ease.get(1)).wait(1).to({rotation:-3.5,x:286.9,y:99.5},4,cjs.Ease.get(-1)).to({rotation:-8,x:282.9,y:100.8},5,cjs.Ease.get(1)).to({regX:41.2,regY:19.5,rotation:-4.8,x:285.9,y:100},4,cjs.Ease.get(-1)).to({regX:41.1,regY:19.4,rotation:0,x:290.1,y:98.4},6,cjs.Ease.get(1)).wait(1));

	// for_19.png
	this.instance_3 = new lib.Символ7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(226.6,99.3,1,1,0,0,0,52.6,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-1.8,x:225.6,y:98.3},4,cjs.Ease.get(-1)).to({regY:13.4,rotation:-4.5,x:224.3,y:97},5,cjs.Ease.get(1)).to({regX:52.7,rotation:-2.1,x:225.6,y:98.2},5,cjs.Ease.get(-1)).to({regX:52.6,regY:13.3,rotation:0,x:226.6,y:99.3},5,cjs.Ease.get(1)).wait(1).to({rotation:-1.8,x:225.6,y:98.4},4,cjs.Ease.get(-1)).to({regY:13.4,rotation:-4.5,x:224.3,y:97},5,cjs.Ease.get(1)).to({regX:52.7,rotation:-2.5,x:225.4,y:98},4,cjs.Ease.get(-1)).to({regX:52.6,regY:13.3,rotation:0,x:226.6,y:99.3},6,cjs.Ease.get(1)).wait(1));

	// for_08.png
	this.instance_4 = new lib.Символ15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(95.8,221.7,1,1,0,0,0,106.8,321.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-1.3,x:95.9,y:221.8},4,cjs.Ease.get(-1)).to({rotation:-3.2},5,cjs.Ease.get(1)).to({regX:106.7,rotation:-1.5},5,cjs.Ease.get(-1)).to({regX:106.8,rotation:0,x:95.8,y:221.7},5,cjs.Ease.get(1)).wait(1).to({rotation:-1.3,x:95.9,y:221.8},4,cjs.Ease.get(-1)).to({rotation:-3.2},5,cjs.Ease.get(1)).to({regX:106.7,regY:321.6,rotation:-1.8,y:221.7},4,cjs.Ease.get(-1)).to({regX:106.8,regY:321.7,rotation:0,x:95.8},6,cjs.Ease.get(1)).wait(1));

	// for_03.png
	this.instance_5 = new lib.Символ12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(153.4,-9.5,1,1,0,0,0,22.4,112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:112.4,rotation:-0.5,x:146,y:-10.6},4,cjs.Ease.get(-1)).to({rotation:-1.4,x:136.6,y:-11.9},5,cjs.Ease.get(1)).to({rotation:-0.6,x:145,y:-10.7},5,cjs.Ease.get(-1)).to({regY:112.5,rotation:0,x:153.4,y:-9.5},5,cjs.Ease.get(1)).wait(1).to({regY:112.4,rotation:-0.5,x:146,y:-10.6},4,cjs.Ease.get(-1)).to({rotation:-1.4,x:136.6,y:-11.9},5,cjs.Ease.get(1)).to({rotation:-0.8,x:143.3,y:-10.9},4,cjs.Ease.get(-1)).to({regY:112.5,rotation:0,x:153.4,y:-9.5},6,cjs.Ease.get(1)).wait(1));

	// for_11.png
	this.instance_6 = new lib.Символ9();
	this.instance_6.parent = this;
	this.instance_6.setTransform(313,-75.5,1,1,0,0,0,41,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-1.8,x:304.6,y:-76.5},4,cjs.Ease.get(-1)).to({regX:41.1,regY:20.6,rotation:-4,x:293.9,y:-77.8},5,cjs.Ease.get(1)).to({regY:20.5,rotation:-1.8,x:303.5,y:-76.7},5,cjs.Ease.get(-1)).to({regX:41,rotation:0,x:313,y:-75.5},5,cjs.Ease.get(1)).wait(1).to({rotation:-1.8,x:304.6,y:-76.5},4,cjs.Ease.get(-1)).to({regX:41.1,regY:20.6,rotation:-4,x:293.9,y:-77.8},5,cjs.Ease.get(1)).to({rotation:-2.3,x:301.6,y:-76.9},4,cjs.Ease.get(-1)).to({regX:41,regY:20.5,rotation:0,x:313,y:-75.5},6,cjs.Ease.get(1)).wait(1));

	// for_16.png
	this.instance_7 = new lib.Символ8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(264.4,-33,1,1,0,0,0,61.4,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:8.9,rotation:-1.8,x:259.1,y:-36.2},4,cjs.Ease.get(-1)).to({regY:9,rotation:-4.2,x:252.5,y:-40.1},5,cjs.Ease.get(1)).to({regX:61.5,rotation:-2,x:258.6,y:-36.6},5,cjs.Ease.get(-1)).to({regX:61.4,rotation:0,x:264.4,y:-33},5,cjs.Ease.get(1)).wait(1).to({regY:8.9,rotation:-1.8,x:259.1,y:-36.2},4,cjs.Ease.get(-1)).to({regY:9,rotation:-4.2,x:252.5,y:-40.1},5,cjs.Ease.get(1)).to({regY:8.9,rotation:-2.5,x:257.3,y:-37.4},4,cjs.Ease.get(-1)).to({regY:9,rotation:0,x:264.4,y:-33},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-122,450,430);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(538.3,377,1.07,1.07,0,0,0,42.6,27.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({x:50.1,y:19.3},7).to({regY:27.6,scaleX:0.88,scaleY:0.88,y:19.5},3).wait(5).to({regX:42.8,regY:27.7,scaleX:0.97,scaleY:0.97,x:298.5,y:141.8},11).wait(9).to({regX:42.7,scaleX:0.93,scaleY:0.93,x:288.4,y:139.4,alpha:0},5).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11,-5.5,0.306,0.306,0,0,0,25.9,25.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).to({regY:25.9,scaleX:1.59,scaleY:1.59,x:10.8,y:-5.7},5).to({regX:26.1,regY:26.1,x:260.7,y:117},11).wait(9).to({regX:26,regY:26,scaleX:1.53,scaleY:1.53,x:252.1,y:115.4,alpha:0},5).wait(1));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_54 = new cjs.Graphics().p("At/DMII7wnITEKQIo7Qng");
	var mask_graphics_55 = new cjs.Graphics().p("At/DMII7wnITEKQIo7Qng");
	var mask_graphics_56 = new cjs.Graphics().p("At/DMII7wnITEKQIo7Qng");
	var mask_graphics_57 = new cjs.Graphics().p("At/DMII7wnITEKQIo7Qng");
	var mask_graphics_58 = new cjs.Graphics().p("At/DMII7wnITEKQIo7Qng");
	var mask_graphics_59 = new cjs.Graphics().p("At/DMII7wnITEKQIo7Qng");
	var mask_graphics_60 = new cjs.Graphics().p("AsWDMII7wnITEKQIo7Qng");
	var mask_graphics_74 = new cjs.Graphics().p("AsWDMII7wnITEKQIo7Qng");
	var mask_graphics_75 = new cjs.Graphics().p("AsWDMII7wnITEKQIo7Qng");
	var mask_graphics_76 = new cjs.Graphics().p("AsWDMII7wnITEKQIo7Qng");
	var mask_graphics_77 = new cjs.Graphics().p("AsWDMII7wnITEKQIo7Qng");
	var mask_graphics_78 = new cjs.Graphics().p("AsWDMII7wnITEKQIo7Qng");
	var mask_graphics_79 = new cjs.Graphics().p("AsWDMII7wnITEKQIo7Qng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_graphics_54,x:-37.3,y:-37.2}).wait(1).to({graphics:mask_graphics_55,x:-12.6,y:-25.3}).wait(1).to({graphics:mask_graphics_56,x:12.1,y:-13.4}).wait(1).to({graphics:mask_graphics_57,x:36.7,y:-1.5}).wait(1).to({graphics:mask_graphics_58,x:61.4,y:10.5}).wait(1).to({graphics:mask_graphics_59,x:86.1,y:22.4}).wait(1).to({graphics:mask_graphics_60,x:100.1,y:34.2}).wait(14).to({graphics:mask_graphics_74,x:100.1,y:34.2}).wait(1).to({graphics:mask_graphics_75,x:100.1,y:34.2}).wait(1).to({graphics:mask_graphics_76,x:100.1,y:34.2}).wait(1).to({graphics:mask_graphics_77,x:100.1,y:34.2}).wait(1).to({graphics:mask_graphics_78,x:100.1,y:34.2}).wait(1).to({graphics:mask_graphics_79,x:100.1,y:34.2}).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(115.4,30.5,1.267,1.267,0,0,0,50.2,51.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).wait(20).to({alpha:0},5).wait(1));

	// for_29.png
	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(37,208.5,1,1,0,0,0,123,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-4.8,x:36.1},4,cjs.Ease.get(-1)).to({regY:28.6,rotation:-11.2,x:34.7,y:208.6},5,cjs.Ease.get(1)).to({rotation:-5.5,x:35.9,y:208.5},5,cjs.Ease.get(-1)).to({regY:28.5,rotation:0,x:37},5,cjs.Ease.get(1)).wait(1).to({rotation:-4.8,x:36.1},4,cjs.Ease.get(-1)).to({regY:28.6,rotation:-11.2,x:34.7,y:208.6},5,cjs.Ease.get(1)).to({rotation:-6.6,x:35.7},4,cjs.Ease.get(-1)).to({regY:28.5,rotation:0,x:37,y:208.5},6,cjs.Ease.get(1)).wait(41));

	// for_32.png
	this.instance_4 = new lib.Символ4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(218.5,202,1,1,0,0,0,145.5,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:217.5},4,cjs.Ease.get(-1)).to({x:216.1},5,cjs.Ease.get(1)).to({x:217.3},5,cjs.Ease.get(-1)).to({x:218.5},5,cjs.Ease.get(1)).wait(1).to({x:217.5},4,cjs.Ease.get(-1)).to({x:216.1},5,cjs.Ease.get(1)).to({x:217.1},4,cjs.Ease.get(-1)).to({x:218.5},6,cjs.Ease.get(1)).wait(41));

	// for_21.png
	this.instance_5 = new lib.Символ6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(290.1,98.4,1,1,0,0,0,41.1,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-3.5,x:286.9,y:99.5},4,cjs.Ease.get(-1)).to({rotation:-8,x:282.9,y:100.8},5,cjs.Ease.get(1)).to({rotation:-3.8,x:286.5,y:99.6},5,cjs.Ease.get(-1)).to({rotation:0,x:290.1,y:98.4},5,cjs.Ease.get(1)).wait(1).to({rotation:-3.5,x:286.9,y:99.5},4,cjs.Ease.get(-1)).to({rotation:-8,x:282.9,y:100.8},5,cjs.Ease.get(1)).to({regX:41.2,regY:19.5,rotation:-4.8,x:285.9,y:100},4,cjs.Ease.get(-1)).to({regX:41.1,regY:19.4,rotation:0,x:290.1,y:98.4},6,cjs.Ease.get(1)).wait(41));

	// for_19.png
	this.instance_6 = new lib.Символ7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(226.6,99.3,1,1,0,0,0,52.6,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-1.8,x:225.6,y:98.3},4,cjs.Ease.get(-1)).to({regY:13.4,rotation:-4.5,x:224.3,y:97},5,cjs.Ease.get(1)).to({regX:52.7,rotation:-2.1,x:225.6,y:98.2},5,cjs.Ease.get(-1)).to({regX:52.6,regY:13.3,rotation:0,x:226.6,y:99.3},5,cjs.Ease.get(1)).wait(1).to({rotation:-1.8,x:225.6,y:98.4},4,cjs.Ease.get(-1)).to({regY:13.4,rotation:-4.5,x:224.3,y:97},5,cjs.Ease.get(1)).to({regX:52.7,rotation:-2.5,x:225.4,y:98},4,cjs.Ease.get(-1)).to({regX:52.6,regY:13.3,rotation:0,x:226.6,y:99.3},6,cjs.Ease.get(1)).wait(41));

	// for_08.png
	this.instance_7 = new lib.Символ15();
	this.instance_7.parent = this;
	this.instance_7.setTransform(95.8,221.7,1,1,0,0,0,106.8,321.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-1.3,x:95.9,y:221.8},4,cjs.Ease.get(-1)).to({rotation:-3.2},5,cjs.Ease.get(1)).to({regX:106.7,rotation:-1.5},5,cjs.Ease.get(-1)).to({regX:106.8,rotation:0,x:95.8,y:221.7},5,cjs.Ease.get(1)).wait(1).to({rotation:-1.3,x:95.9,y:221.8},4,cjs.Ease.get(-1)).to({rotation:-3.2},5,cjs.Ease.get(1)).to({regX:106.7,regY:321.6,rotation:-1.8,y:221.7},4,cjs.Ease.get(-1)).to({regX:106.8,regY:321.7,rotation:0,x:95.8},6,cjs.Ease.get(1)).wait(41));

	// for_03.png
	this.instance_8 = new lib.Символ12();
	this.instance_8.parent = this;
	this.instance_8.setTransform(153.4,-9.5,1,1,0,0,0,22.4,112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:112.4,rotation:-0.5,x:146,y:-10.6},4,cjs.Ease.get(-1)).to({rotation:-1.4,x:136.6,y:-11.9},5,cjs.Ease.get(1)).to({rotation:-0.6,x:145,y:-10.7},5,cjs.Ease.get(-1)).to({regY:112.5,rotation:0,x:153.4,y:-9.5},5,cjs.Ease.get(1)).wait(1).to({regY:112.4,rotation:-0.5,x:146,y:-10.6},4,cjs.Ease.get(-1)).to({rotation:-1.4,x:136.6,y:-11.9},5,cjs.Ease.get(1)).to({rotation:-0.8,x:143.3,y:-10.9},4,cjs.Ease.get(-1)).to({regY:112.5,rotation:0,x:153.4,y:-9.5},6,cjs.Ease.get(1)).wait(41));

	// for_11.png
	this.instance_9 = new lib.Символ9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(313,-75.5,1,1,0,0,0,41,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:-1.8,x:304.6,y:-76.5},4,cjs.Ease.get(-1)).to({regX:41.1,regY:20.6,rotation:-4,x:293.9,y:-77.8},5,cjs.Ease.get(1)).to({regY:20.5,rotation:-1.8,x:303.5,y:-76.7},5,cjs.Ease.get(-1)).to({regX:41,rotation:0,x:313,y:-75.5},5,cjs.Ease.get(1)).wait(1).to({rotation:-1.8,x:304.6,y:-76.5},4,cjs.Ease.get(-1)).to({regX:41.1,regY:20.6,rotation:-4,x:293.9,y:-77.8},5,cjs.Ease.get(1)).to({rotation:-2.3,x:301.6,y:-76.9},4,cjs.Ease.get(-1)).to({regX:41,regY:20.5,rotation:0,x:313,y:-75.5},6,cjs.Ease.get(1)).wait(41));

	// for_16.png
	this.instance_10 = new lib.Символ8();
	this.instance_10.parent = this;
	this.instance_10.setTransform(264.4,-33,1,1,0,0,0,61.4,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regY:8.9,rotation:-1.8,x:259.1,y:-36.2},4,cjs.Ease.get(-1)).to({regY:9,rotation:-4.2,x:252.5,y:-40.1},5,cjs.Ease.get(1)).to({regX:61.5,rotation:-2,x:258.6,y:-36.6},5,cjs.Ease.get(-1)).to({regX:61.4,rotation:0,x:264.4,y:-33},5,cjs.Ease.get(1)).wait(1).to({regY:8.9,rotation:-1.8,x:259.1,y:-36.2},4,cjs.Ease.get(-1)).to({regY:9,rotation:-4.2,x:252.5,y:-40.1},5,cjs.Ease.get(1)).to({regY:8.9,rotation:-2.5,x:257.3,y:-37.4},4,cjs.Ease.get(-1)).to({regY:9,rotation:0,x:264.4,y:-33},6,cjs.Ease.get(1)).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-122,450,430);


(lib.Символ1копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ2копия();
	this.instance.parent = this;
	this.instance.setTransform(279.6,48.5,0.648,0.648,0,0,0,145.7,176.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(306.5,132,1,1,0,0,0,173.5,108);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1копия, new cjs.Rectangle(129.6,-144.7,350.5,384.9), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(279.6,48.5,0.648,0.648,0,0,0,145.7,176.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(306.5,132,1,1,0,0,0,173.5,108);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(129.6,-144.7,350.5,384.9), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(70.4,23.1,1,1,0,0,0,92.4,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(0,0,573.2,46.2), null);


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
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(-150.9,-14.3,1,1,0,0,0,-21.4,-159);

	this.girl1 = new lib.Символ1копия();
	this.girl1.parent = this;
	this.girl1.setTransform(-17,-16.3,1,1,0,0,0,112.5,-161);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.girl1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350.5,384.9);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.kur.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kur.x = stage.mouseX;
			this.kur.y = stage.mouseY;
		}
		
		
		
		var _this = this;
		
		_this.kur.visible=false;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.girl.gotoAndPlay(1);
			_this.kur.visible=true;
			_this.mous.gotoAndPlay(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.girl.gotoAndPlay(2);
			_this.kur.visible=false;
			_this.mous.gotoAndPlay(5);
			
		}
		
		
		this.addEventListener("tick", fl_CustomMouseCursor12.bind(this));
		
		function fl_CustomMouseCursor12() {
		
		this.fon.x = - stage.mouseX / 20;
		this.fon.y = - stage.mouseY / 20;
		}
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.kur = new lib.Символ18();
	this.kur.parent = this;
	this.kur.setTransform(-213.9,123.7,1,1,0,0,0,26,26);

	this.timeline.addTween(cjs.Tween.get(this.kur).wait(1));

	// Слой 5
	this.mous = new lib.Символ42();
	this.mous.parent = this;
	this.mous.setTransform(598.9,265.9,1,1,0,0,0,21.9,21.9);

	this.timeline.addTween(cjs.Tween.get(this.mous).wait(1));

	// Слой 4
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(322.4,148.7,1,1,0,0,0,286.6,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.girl = new lib.Символ23();
	this.girl.parent = this;
	this.girl.setTransform(326.8,207.7,1,1,0,0,0,175.2,192.4);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 1
	this.fon = new lib.Символ37();
	this.fon.parent = this;
	this.fon.setTransform(1,0,1,1,0,0,0,88,104);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(79.1,48.5,973,551);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1480550022268", id:"back"},
		{src:"images/for_03.png?1480550022268", id:"for_03"},
		{src:"images/for_05.png?1480550022268", id:"for_05"},
		{src:"images/for_08.png?1480550022268", id:"for_08"},
		{src:"images/for_11.png?1480550022268", id:"for_11"},
		{src:"images/for_16.png?1480550022268", id:"for_16"},
		{src:"images/for_19.png?1480550022268", id:"for_19"},
		{src:"images/for_21.png?1480550022268", id:"for_21"},
		{src:"images/for_29.png?1480550022268", id:"for_29"},
		{src:"images/for_32.png?1480550022268", id:"for_32"},
		{src:"images/for_34.png?1480550022268", id:"for_34"},
		{src:"images/mouse.png?1480550022268", id:"mouse"},
		{src:"images/stol.png?1480550022268", id:"stol"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;