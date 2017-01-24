(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.elk_2uu1 = function() {
	this.initialize(img.elk_2uu1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,428,428);


(lib.mous = function() {
	this.initialize(img.mous);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.pod_01 = function() {
	this.initialize(img.pod_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,208);


(lib.pod_03 = function() {
	this.initialize(img.pod_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,208);


(lib.pod_05 = function() {
	this.initialize(img.pod_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,173);


(lib.pod_08 = function() {
	this.initialize(img.pod_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,105);


(lib.pod_13 = function() {
	this.initialize(img.pod_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,111);


(lib.pod_16 = function() {
	this.initialize(img.pod_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,73);


(lib.pod_21 = function() {
	this.initialize(img.pod_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,137);


(lib.pod_23 = function() {
	this.initialize(img.pod_23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,95);


(lib.pod_28 = function() {
	this.initialize(img.pod_28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,34);


(lib.pod_32 = function() {
	this.initialize(img.pod_32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,31);


(lib.pod_33 = function() {
	this.initialize(img.pod_33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,22);


(lib.pod_341 = function() {
	this.initialize(img.pod_341);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,105);


(lib.pod_35 = function() {
	this.initialize(img.pod_35);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,69);


(lib.podar211 = function() {
	this.initialize(img.podar211);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,54);


(lib.qwe = function() {
	this.initialize(img.qwe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,32);


(lib.ruka_03 = function() {
	this.initialize(img.ruka_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.ruka_06 = function() {
	this.initialize(img.ruka_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,17);


(lib.ruka_10 = function() {
	this.initialize(img.ruka_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,24);


(lib.ruka_13 = function() {
	this.initialize(img.ruka_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,25);


(lib.ruka_16 = function() {
	this.initialize(img.ruka_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,24);


(lib.ruka_21 = function() {
	this.initialize(img.ruka_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,21);


(lib.ruka_24 = function() {
	this.initialize(img.ruka_24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,123);


(lib.ruka_28 = function() {
	this.initialize(img.ruka_28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,19);


(lib.wer = function() {
	this.initialize(img.wer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,61);// helper functions:

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


(lib.Символ110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mous();
	this.instance.parent = this;
	this.instance.setTransform(-32,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ110, new cjs.Rectangle(-32,-32,64,64), null);


(lib.Символ108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHpFGIAAkbIBIAAIAABVIA0AAQARgBAcAJQASAIANAOQAMAOAHASQAGARABAUQgBASgGASQgHASgMANQgNAQgSAHQgcAJgRAAgAIxEFIA0AAQAPAAAIgLQAHgJAAgOQAAgOgIgKQgJgKgNAAIg0AAgAA6FGIAAkbIBKAAIAADYIBFAAIAAjYIBJAAIAADYIBFAAIAAjYIBKAAIAAEbgAhVFGIAAkbIBIAAIAAEbgAlsFGIAAkbIBIAAIAABVIA1AAQAQgBAcAJQATAIAMAOQANAOAGASQAHARAAAUQAAASgHASQgGASgNANQgMAQgTAHQgcAJgQAAgAkkEFIA0AAQAPAAAIgLQAHgJAAgOQABgOgJgKQgIgKgOAAIg0AAgAn+FGIAAh+Ig8A/IgIAAIg8g/IAAB+IhKAAIAAkcIAaAAIBwB7IBwh7IAaAAIAAEcgAGlgwIAAgbIiSAAIAAAbIg0AAIAAhSIAZAAIBUjDIAbAAIBYDDIAaAAIAABSgAF+iDIgkhZIgiBZIBGAAgAKLhMIAAh5Ih8B5IgWAAIAAj2IBAAAIAAB5IB9h6IAWAAIAAD3gAAqhMIAAj2ICaAAIAAA5IhbAAIAAAiIBUAAIAAA4IhUAAIAAAsIBfAAIAAA3gAjGhMIAAj2IBqAAQAPAAAOAGQAOAFALALQAKAKAGAOQAHAOAAAPQAAAMgGAMQgFAMgJAIQAPAHAHANQAIANAAAQQAAARgGAOQgEAOgKAKQgKAMgOAFQgPAHgSgBgAiJiDIAzAAQAIgBAFgGQAGgGAAgJQAAgIgGgGQgFgGgIgBIgzAAgAiJjiIAoAAQAJAAAFgGQAFgGAAgIQAAgIgFgFQgGgHgIABIgoAAgAkkhMIgOgeIhhAAIgPAeIg9AAIAAgJIBujwIAcAAIBvDwIAAAJgAlGigIgdhBIgbBBIA4AAgApAhMIAAhjIhMAAIAABjIg/AAIAAj2IA/AAIAABaIBMAAIAAhaIBBAAIAAD2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ108, new cjs.Rectangle(-71.6,-32.6,143.3,65.2), null);


(lib.Символ107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApzDXQgUgEgTgGQgTgHgSgKQgSgKgPgOQgQgOgMgRQgNgRgJgUQgJgVgFgXQgFgZAAgbQAAgZAFgYQAFgYAJgVQAJgUANgSQAMgQAQgOQAPgNASgLQASgLATgGIAngLIApgDQAiAAAgAJQAiAKAbATQAjAeANAVQAJAPAHATQAHASADAVIhsAAQgFgPgJgNQgJgMgMgHQgMgIgOgEQgPgDgRgBQgYABgUAIQgTAIgOARQgOAQgIAVQgHAWAAAZQAAAYAHAVQAIAWAOAQQAOAQATAKQAUAJAYABQARAAAQgEQAPgFANgJQAMgIAJgNQAJgNAEgRIBrAAQgCAWgHAUQgGATgKAQQgKAQgMANQgLANgPAKQgbAUgiAKQghAJgjAAgAK5DWIAAh+Ig4AAIhJB+Ih7AAIAAgQIBUiIQgUgNgOgTQgNgSgIgWQgHgWgBgXQgBgYAGgWQAFgYANgTQAMgUASgPQATgPAZgJQAagJAeAAIC7AAIAAGqgAJJhiQgLAPAAAVQAAAWALAOQANARAVAAIBOAAIAAhqIhOAAQgWABgMAQgABADWIAAmqIEzAAIAABhIjFAAIAAA0IBOAAQAaABApALQAcALAUAVQATATAKAYQAKAYAAAbQAAAbgKAYQgKAZgTATQgUAVgcALQgpAMgaAAgACuB0IBOAAQAVAAANgNQALgLAAgSQAAgQgMgMQgMgNgVAAIhOAAgAktDWIAAmqIELAAIAABhIieAAIAAA9ICRAAIAABgIiRAAIAABLICkAAIAABhg");
	this.shape.setTransform(354.7,-60.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ107, new cjs.Rectangle(274.1,-82.4,161.3,43.6), null);


(lib.Символ106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("AJQEwIAAgvIj9AAIAAAvIhaAAIAAiPIAsAAICSlQIAvAAICXFQIAsAAIAACPgAGTCgIB5AAIg+iagAuoD7QgTgHgSgLQgRgKgPgNQgRgPgLgRQgOgSgIgUQgJgVgFgYQgFgYAAgcQAAiTDbhJQAbAAA1ANQAUAHARAKQATALAOAOQAQAOAMARQANASAJAUQAJAWAFAXQAFAYAAAbQAACUjbBKQg3gEgagKgAt+hAQgUAHgPAPQgPAPgIAVQgJAVAAAcQAAAcAJAXQAIAVAPAQQAPANAUAIQATAHAUAAQAVAAATgHQATgIAPgNQAPgQAJgVQAJgXAAgcQAAgcgJgVQgJgVgPgPQgPgPgTgHQgTgHgVAAQgUAAgTAHgAR6EAIAAmqIBvAAIAADRIDYjTIAoAAIAAGsIhxAAIAAjSIjYDSgAL6EAIAAgLIBEiLIiQkEIAAgQIB5AAIBRCdIADAAIBKidIB2AAIAAAQIjLGagACMEAIgZg1IioAAIgZA1IhqAAIAAgQIC+mfIAwAAIDBGfIAAAQgAgSBtIBhAAIgxhvgAoqEAIAAmqIC8AAQAzAABAAyQATAWAKAdQAJAcABAeQgBAegJAcQgKAcgTAWQgUAYgcAMQgPAHgQADQgRADgTABIhPAAIAABtgAm9AxIBPAAQAUgBAOgSQAMgSAAgXQAAgZgLgRQgHgJgIgFQgJgGgLAAIhPAAgAz1EAIAAlFIiDAAIAAFFIhwAAIAAmqIFkAAIAAGqgAUVjIQgUgHgOgNQgNgNgHgUQgHgTgBgaIA+gFQACAQALAJQAKAIAUAAQATAAALgHQAMgJADgRIA/AFQgBAagHATQgIAUgNANQgOANgTAHQgUAHgZAAQgZAAgTgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ106, new cjs.Rectangle(-151.2,-30.4,302.5,60.9), null);


(lib.Символ105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aq/DxIAAgvIj8AAIAAAvIhbAAIAAiPIAsAAICSlQIAvAAICYFQIAsAAIAACPgAsDBhIg+iZIg7CZIB5AAgAGaC8QgUgHgRgLQgSgKgPgNQgQgPgMgRQgNgSgJgUQgJgVgFgYQgFgYAAgbQAAiUDbhJQAcAAA1ANQATAHASAKQASALAPAOQAQAOAMARQANASAIAUQAKAWAEAXQAFAZAAAbQAACTjbBKQg2gEgagKgAHDh/QgTAHgPAPQgQAPgIAVQgJAWAAAcQAAAbAJAXQAIAVAQAPQAPAOATAIQATAHAUAAQAVAAATgHQATgIAPgOQAQgPAIgVQAKgXAAgbQAAgcgKgWQgIgVgQgPQgPgPgTgHQgTgHgVAAQgUAAgTAHgA1eC8QgUgHgRgLQgSgKgPgNQgQgPgMgRQgNgSgJgUQgJgVgFgYQgFgYAAgbQAAiUDbhJQAcAAA1ANQATAHASAKQASALAPAOQAQAOAMARQANASAIAUQAKAWAEAXQAFAZAAAbQAACTjbBKQg2gEgagKgA01h/QgTAHgPAPQgQAPgIAVQgJAWAAAcQAAAbAJAXQAIAVAQAPQAPAOATAIQATAHAUAAQAVAAATgHQATgIAPgOQAQgPAIgVQAKgXAAgbQAAgcgKgWQgIgVgQgPQgPgPgTgHQgTgHgVAAQgUAAgTAHgAcmDBIheilQgOACgcAAIAACjIhvAAIAAmqIBvAAIAAChIAIAAQAUAAAQgDQAPgEALgGQAVgNAKgYQAMgegBhRIBwAAQABBVgKAmQgIAegRAYQgbAggVANIBzC7IAAARgATADBIAAmqIELAAIAABhIieAAIAAA9ICRAAIAABgIiRAAIAABLICkAAIAABhgAPlDBIAAiVIgWAAQgbAAgYgEQgYgDgTgHQgTgHgQgLQgPgKgMgOQgMgOgJgRQgJgSgFgVQgHgcgEhHIAAg0IBxAAIAAA0QABBDAMAWQAJAQASAJQATAJAfAAIAVAAIAAivIBvAAIAAGqgAh9DBIAAmqIC7AAQA0AAA/AyQATAWAKAdQAKAcAAAeQAAAfgKAcQgKAbgTAWQgUAYgcAMQgOAHgRADQgRADgTABIhNAAIAABtgAgPgNIBNAAQAVgBANgSQAMgSAAgYQAAgZgLgRQgGgJgJgFQgJgGgLAAIhNAAgAkfDBIgZg2IipAAIgZA2IhqAAIAAgQIDAmfIAvAAIDBGfIAAAQgAlbAuIgyhvIgwBvIBiAAgA6rDBIAAlFIiEAAIAAFFIhvAAIAAmqIFjAAIAAGqg");
	this.shape.setTransform(304.7,-60.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ105, new cjs.Rectangle(109.6,-84.9,390.3,48.3), null);


(lib.Символ104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Ar9DQQgTgHgSgKQgRgLgPgOQgRgOgLgQQgOgTgIgUQgJgVgFgYQgFgZAAgbQAAiTDbhJQAbgBA1AOQAUAIARAJQATAMAOANQAQAOAMARQANASAJAUQAJAVAFAYQAFAZAAAaQAACUjbBKQg3gFgagJgArThrQgUAIgPAOQgPAPgIAVQgJAXAAAaQAAAcAJAXQAIAVAPAPQAPAPAUAHQATAHAUAAQAVAAATgHQATgHAPgPQAPgPAJgVQAJgXAAgcQAAgagJgXQgJgVgPgPQgPgOgTgIQgTgHgVAAQgUAAgTAHgAlGDTQgcgJgTgTQgUgSgKgbQgKgcAAgkIBfAAQABAZAPAPQAOAPAYAAQAbAAAPgPQANgOAAgUQAAgTgNgOQgPgPgbAAIgdAAIAAhYIAcAAQATAAALgMQAKgKAAgQQAAgPgKgKQgLgLgSAAQgRAAgLAGQgKAHABAMIhiAAQgBgdAKgXQAKgVATgPQATgOAZgHQAZgHAcAAQAiAAAcAKQAZALATARQARASAJAWQAIAWABAYQgBAWgIAVQgLAXgRANQAPAJAMAKQALAKAJANQAHAOADAPQAEAQAAARQAAAdgLAYQgKAZgUATQgWASgeAKQgfAKgpAAQgiAAgcgKgAOhDVIAAmqIBvAAIAADRIDYjTIAoAAIAAGsIhxAAIAAjSIjXDSgALEDVIAAi+IhbBfIgMAAIhahfIAAC+IhwAAIAAmrIApAAICmC5ICri5IAnAAIAAGrgAgTDVIAAmqIBtAAIAACAIBOAAQAbgBApANQAcAMAUAWQASAVAKAaQAKAbAAAcQAAAdgKAaQgKAcgSAUQgUAWgcAMQgpANgbAAgABaBzIBOAAQAWAAANgQQALgOAAgWQAAgVgLgOQgOgRgVABIhOAAgA0PDVIAAmqIC3AAQAbAAAZAKQAXAKATASQASASAKAYQALAYAAAbQgBAUgIAUQgKAWgPAMQAZAMANAXQANAWAAAdQAAAdgIAYQgJAYgQATQgSASgYALQgaAKgfAAgAylB0IBXAAQAQAAAJgMQAHgKABgOQgBgPgHgKQgKgMgPAAIhXAAgAylgvIBFAAQAPABAJgMQAIgJAAgOQAAgOgIgJQgKgLgPAAIhEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ104, new cjs.Rectangle(-129.6,-22.2,259.2,44.4), null);


(lib.Символ102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.wer();
	this.instance.parent = this;
	this.instance.setTransform(-33,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ102, new cjs.Rectangle(-33,-30,66,61), null);


(lib.Символ101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.qwe();
	this.instance.parent = this;
	this.instance.setTransform(-15,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ101, new cjs.Rectangle(-15,-16,30,32), null);


(lib.Символ93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wer();
	this.instance.parent = this;
	this.instance.setTransform(-33,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ93, new cjs.Rectangle(-33,-31,66,61), null);


(lib.Символ92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.qwe();
	this.instance.parent = this;
	this.instance.setTransform(-15,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ92, new cjs.Rectangle(-15,-16,30,32), null);


(lib.Символ89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AgFIbQgijFhsihQg1hRg5hQQgXgggCgpIAAgCQgHgLgGgPQgEgLgDgKQgtgVAQgvQAEgLAKgEQgEgHgBgKQgJhaBbgEQALAIAGAIIAOgDQAhAwgrAZIAEAIQAdgcAwAYQAdgZAigVQAJgWAKgWQANgZAUgMIAOggQgNggARguQAbhJhKgkQgLgFAJgKQAhgkA1AGQA9AgAYAyIADgGQAJgSAUAFQCHBrgnCJQAPgMATgEQAeAxgeBDQgOAdgTAUIAIAKQACAEgBAFQBgAvhKBSQhYBkgcCIQgFAYASAWQBUBlBABoQApBDhNAFQgRABgQgJQhSgshDAjQgKAGgJAKQgfAigVAAQgdAAgJg8gAB4kXIAHAHQABgoARgqQARgogagtQgIgNAJgQIgHgFQAHArgPA1QgOAwgEAzIAMgBIAEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.6,-59.9,67.3,119.9);


(lib.Символ88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A8gLuIAA3bMA5BAAAIAAXbg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pod_35();
	this.instance.parent = this;
	this.instance.setTransform(13.2,-75.8,1.294,1.294,64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ82, new cjs.Rectangle(-67.4,-75.8,134.7,151.8), null);


(lib.Символ79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pod_341();
	this.instance.parent = this;
	this.instance.setTransform(-24.9,-59.6,0.499,0.499);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ79, new cjs.Rectangle(-24.9,-59.6,22,52.4), null);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003399").s().p("A3yFyIAArjMAvlAAAIAALjg");
	this.shape.setTransform(138.5,-190.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.podar211();
	this.instance.parent = this;
	this.instance.setTransform(-50,-54,2.012,2.012);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ73, new cjs.Rectangle(-50,-54,100.6,108.7), null);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A5SD4IDYnvMAvNAAAIAAHvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ72, new cjs.Rectangle(-161.9,-24.7,323.9,49.5), null);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pod_341();
	this.instance.parent = this;
	this.instance.setTransform(-16,-40,0.719,0.719);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ70, new cjs.Rectangle(-16,-40,31.6,75.5), null);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A5eLaIAA2zMAy9AAAIAAWzg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AzkD/IBnn9MAjhAAAICBH9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ68, new cjs.Rectangle(-125.2,-25.4,250.5,50.9), null);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AluBpQgKgDgJgGQgJgFgIgHQgIgHgGgJQgHgIgEgLQgFgLgCgMQgDgMAAgOQAAhKBvglQAOAAAbAHIATAJQAJAFAHAHQAIAHAHAJQAGAJAEAKQAFALADAMQACAMAAANQAABLhvAlQgbgCgNgFgAlag2QgJAEgIAHQgIAIgEALQgFALAAANQAAAOAFAMQAEAKAIAIQAIAHAJAEQAKAEAKAAQALAAAJgEQAKgEAIgHQAIgIAEgKQAFgMAAgOQAAgNgFgLQgEgLgIgIQgIgHgKgEQgJgDgLAAQgKAAgKADgAhgBsQgKgBgKgEQgKgDgJgGQgJgFgHgHQgIgHgGgIQgHgJgEgKQgFgLgDgLQgCgNAAgNQAAgNACgMQADgMAFgLQAEgKAHgJQAGgIAIgHQAHgHAJgFQAJgFAKgEIAUgFIAVgCQARAAAQAFQARAFAOAKQARAPAGAKQAFAIADAJQAEAKABAKIg1AAQgDgIgFgGQgEgGgGgEQgGgEgHgCQgIgBgIAAQgMAAgLAEQgJAEgHAIQgHAIgEALQgEALAAANQAAAMAEAKQADALAHAIQAIAJAJAFQALAFAMAAQAIAAAIgDQAIgCAGgEQAHgFAEgGQAFgHACgIIA1AAQgBALgEAKQgDAJgFAJIgLAPIgMALQgOAKgRAFQgRAFgRAAgADxBsIAAjXIA5AAIAABqIBthrIAUAAIAADYIg5AAIAAhrIhtBrgAKQBsIAAjXIA3AAIAABAIAoAAQANAAAVAHQAOAGAKALQAJAKAFANQAFANAAAPQAAAOgFAOQgFAOgJAKQgKALgOAGQgVAHgNAAgALHA6IAnAAQAMAAAGgIQAGgHAAgLQAAgLgGgHQgHgIgLAAIgnAAgAICBsIAAimIg1AAIAAgxIChAAIAAAxIg1AAIAACmgABkBsIAAimIg1AAIAAgxICgAAIAAAxIg0AAIAACmgApVBsIAAjXICHAAIAAAxIhPAAIAACmgAsVBsIAAgGIAjhGIhJiDIAAgIIA9AAIApBPIACAAIAlhPIA8AAIAAAIIhnDPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ65, new cjs.Rectangle(-82.8,-11.2,165.6,22.5), null);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgBsIgvhUIgVABIAABTIg4AAIAAjXIA4AAIAABSIAEAAQAKAAAIgCQAIgCAGgDQAJgHAFgMQAGgQAAgoIA5AAQAAArgFATQgEAQgJALQgNARgLAFIA6BgIAAAIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ63, new cjs.Rectangle(-9.3,-10.8,18.7,21.6), null);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoBpQgJgDgJgGQgKgFgHgHQgIgHgHgJQgGgIgFgLQgEgLgDgMQgCgMAAgOQAAhKBuglQAOAAAaAHIATAJQAKAFAHAHQAIAHAHAJQAGAJAEAKQAFALADAMQACAMAAANQAABLhvAlQgagCgOgFgAgTg2QgKAEgHAHQgIAIgFALQgEALAAANQAAAOAEAMQAFAKAIAIQAHAHAKAEQAKAEAJAAQALAAAJgEQAKgEAIgHQAHgIAEgKQAFgMABgOQgBgNgFgLQgEgLgHgIQgIgHgKgEQgJgDgLAAQgJAAgKADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ61, new cjs.Rectangle(-11.1,-11.2,22.2,22.5), null);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhTBsIAAjXIBbAAQAOAAAMAFQAMAFAKAJQAJAJAFAMQAFAMAAAPQAAAJgEAKQgFAMgIAFQANAGAHAMQAGALAAAPQAAAOgEANQgFAMgIAJQgJAJgMAGQgNAFgQAAgAgeA7IArAAQAIAAAFgGQAEgFAAgIQAAgHgEgFQgFgGgIAAIgrAAgAgegWIAiAAQAIAAAEgHQAEgEAAgHQAAgHgEgFQgEgGgIAAIgiAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(-8.4,-10.8,16.9,21.6), null);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA3BuIgNgbIhUAAIgMAbIg2AAIAAgIIBhjTIAXAAIBhDTIAAAIgAAZAjIgZg4IgYA4IAxAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ57, new cjs.Rectangle(-10.9,-10.9,21.9,21.9), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaBsIAAimIg1AAIAAgxICfAAIAAAxIg0AAIAACmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(-8,-10.8,16.1,21.6), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhVBsIAAjXIA3AAIAABBIAnAAQANgBAVAHQAOAGAKALQAJALAFAMQAFANAAAPQAAAPgFANQgFAOgJAKQgKALgOAHQgVAGgNAAgAgeA6IAmAAQAMABAGgJQAGgHAAgLQAAgLgGgHQgHgIgLAAIgmAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(-8.6,-10.8,17.3,21.6), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhVBsIAAjXIBeAAQAaAAAgAZQAJAMAFAOQAFAOAAAPQAAAQgFANQgFAOgJAMQgKALgOAHIgQAFQgJABgJAAIgnAAIAAA4gAgeADIAmAAQALAAAHgIQAGgKAAgMQAAgNgGgIQgDgFgEgCQgFgCgGgBIgmAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(-8.6,-10.8,17.3,21.6), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA3BuIgNgbIhUAAIgMAbIg2AAIAAgIIBhjTIAXAAIBhDTIAAAIgAAZAjIgZg4IgYA4IAxAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-10.9,-10.9,21.9,21.9), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBtQgLgCgJgDQgKgEgJgFQgJgFgHgHQgJgHgGgJQgGgIgEgLQgFgKgDgMQgCgMAAgOQAAgMACgNQADgMAFgKQAEgKAGgJQAGgIAJgIQAHgGAJgGQAJgFAKgDIAUgFIATgCQARAAARAEQARAFAOAKQARAPAHALQAEAIAEAJQADAJACALIg3AAQgDgIgEgGQgEgGgGgEQgGgEgHgCQgIgCgJAAQgKAAgLAEQgKAFgGAIQgHAIgFALQgEALAAAMQAAAMAEALQAEALAHAIQAIAIAJAFQALAFAKAAQAJAAAIgCQAIgCAGgFQAGgEAFgHQAEgGACgJIA2AAQAAAMgEAJQgDAKgFAIIgLAPIgNAMQgOAKgRAFQgRAEgSAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-10.6,-11,21.3,22.1), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA3BuIgNgbIhUAAIgMAbIg2AAIAAgIIBhjTIAXAAIBhDTIAAAIgAAZAjIgZg4IgYA4IAxAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-10.9,-10.9,21.9,21.9), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhBsIAAikIhBAAIAACkIg5AAIAAjXICzAAIAADXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-9,-10.8,18,21.6), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-362.3,-172.7,1.132,1.132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-362.3,-172.7,724.8,345.4), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("ARuHGIAAp2IYUAAIAAU/gEgqBgErIAAtjMAxMAAAIAANjg");
	this.shape.setTransform(-191.2,-49.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#460003","rgba(54,0,2,0)"],[0,1],-3.4,0,3.5,0).s().p("AgiBeIAAi7IBFAAIAAC7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-3.5,-9.3,7,18.7), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pod_341();
	this.instance.parent = this;
	this.instance.setTransform(17,-10,0.438,0.438,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-29,-10,46,19.3), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pod_33();
	this.instance.parent = this;
	this.instance.setTransform(-7.8,-8,0.536,0.663,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-9.2,-8,18.5,16.2), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7E4F42").s().p("AhVAaQgRgCgRgHQgSgIAAgCQAAgBASgFIAkgLQASgGANAFQANAFgBALQgBALgOAFQgMAFgNAAIgFAAgABoANIgVgHIgOgFQgHgBANgIQAMgJAPgEQAPgFAJACQAKABABAMQACALgLAIQgIAFgJAAIgHAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-13.7,-2.5,27.5,5.2), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pod_01();
	this.instance.parent = this;
	this.instance.setTransform(-52,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-52,-104,104,208), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pod_03();
	this.instance.parent = this;
	this.instance.setTransform(-52,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-52,-104,104,208), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pod_05();
	this.instance.parent = this;
	this.instance.setTransform(-74.5,-86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-74.5,-86.5,149,173), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pod_08();
	this.instance.parent = this;
	this.instance.setTransform(-48,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-48,-52.5,96,105), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pod_13();
	this.instance.parent = this;
	this.instance.setTransform(-53.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-53.5,-55.5,107,111), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pod_16();
	this.instance.parent = this;
	this.instance.setTransform(-24.5,-36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-24.5,-36.5,49,73), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pod_21();
	this.instance.parent = this;
	this.instance.setTransform(-78.5,-68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-78.5,-68.5,157,137), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pod_23();
	this.instance.parent = this;
	this.instance.setTransform(-20.5,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-20.5,-47.5,41,95), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pod_28();
	this.instance.parent = this;
	this.instance.setTransform(-29,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-29,-17,58,34), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pod_32();
	this.instance.parent = this;
	this.instance.setTransform(-33,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-33,-15.5,66,31), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_03();
	this.instance.parent = this;
	this.instance.setTransform(-10,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(-10,-10,20,20), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_06();
	this.instance.parent = this;
	this.instance.setTransform(-9.5,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(-9.5,-8.5,19,17), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_10();
	this.instance.parent = this;
	this.instance.setTransform(-9,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(-9,-12,18,24), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_13();
	this.instance.parent = this;
	this.instance.setTransform(-11,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-11,-11,25,25), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_21();
	this.instance.parent = this;
	this.instance.setTransform(-11,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(-11,-10.5,22,21), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_16();
	this.instance.parent = this;
	this.instance.setTransform(-10.5,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-10.5,-12,21,24), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_24();
	this.instance.parent = this;
	this.instance.setTransform(-47,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-47,-61.5,94,123), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_28();
	this.instance.parent = this;
	this.instance.setTransform(-7,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-7,-9.5,14,19), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.elk_2uu1();
	this.instance.parent = this;
	this.instance.setTransform(-329,-987,1.537,1.537);

	this.instance_1 = new lib.elk_2uu1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-329,-329,1.537,1.537);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-329,-987,658,1316), null);


(lib.Символ113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 107
	this.instance = new lib.Символ107();
	this.instance.parent = this;
	this.instance.setTransform(-175.1,68.5,0.922,0.922,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:277.5,alpha:0},11,cjs.Ease.get(-1)).to({x:241.2},4).wait(69).to({x:277.5},4).to({x:-175.1,alpha:1},11,cjs.Ease.get(1)).wait(55));

	// Символ 106
	this.instance_1 = new lib.Символ106();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-107.5,8.8,0.922,0.922);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({x:345.1,alpha:0},11,cjs.Ease.get(-1)).to({x:308.8},4).wait(63).to({x:345.1},4).to({x:-107.5,alpha:1},11,cjs.Ease.get(1)).wait(58));

	// Символ 105
	this.instance_2 = new lib.Символ105();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-482.1,70.4,0.922,0.922);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({x:-102.1,alpha:1},11,cjs.Ease.get(-1)).to({x:-138.4},4).wait(57).to({x:-102.1},4).to({x:-482.1,alpha:0},11,cjs.Ease.get(1)).wait(61));

	// Символ 104
	this.instance_3 = new lib.Символ104();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-542.6,12.8,0.922,0.922);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({x:-162.6,alpha:1},11,cjs.Ease.get(-1)).to({x:-198.9},4).wait(51).to({x:-162.6},4).to({x:-542.6,alpha:0},11,cjs.Ease.get(1)).wait(64));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-662,-19.2,888.2,56.1);


(lib.Символ111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ110();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ111, new cjs.Rectangle(-32,-32,64,64), null);


(lib.Символ103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ113();
	this.instance.parent = this;
	this.instance.setTransform(159,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ103, new cjs.Rectangle(-503.1,-12.4,888.2,56.1), null);


(lib.Символ98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 102
	this.instance = new lib.Символ102();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:0.5,rotation:5.6,y:0.5},0).wait(1).to({rotation:11.3,x:-0.1},0).wait(1).to({rotation:16.9},0).wait(1).to({rotation:22.5,x:-0.2},0).wait(1).to({rotation:28.1},0).wait(1).to({rotation:33.8,x:-0.3,y:0.4},0).wait(1).to({rotation:39.4},0).wait(1).to({rotation:45},0).wait(1).to({rotation:50.6,x:-0.4,y:0.3},0).wait(1).to({rotation:56.3},0).wait(1).to({rotation:61.9},0).wait(1).to({rotation:67.5,y:0.2},0).wait(1).to({rotation:73.1,x:-0.5},0).wait(1).to({rotation:78.8,y:0.1},0).wait(1).to({rotation:84.4},0).wait(1).to({rotation:90,y:0},0).wait(1).to({rotation:95.6},0).wait(1).to({rotation:101.3,y:-0.1},0).wait(1).to({rotation:106.9},0).wait(1).to({rotation:112.5,x:-0.4,y:-0.2},0).wait(1).to({rotation:118.1},0).wait(1).to({rotation:123.8,y:-0.3},0).wait(1).to({rotation:129.4},0).wait(1).to({rotation:135,x:-0.3},0).wait(1).to({rotation:140.6,y:-0.4},0).wait(1).to({rotation:146.3},0).wait(1).to({rotation:151.9,x:-0.2},0).wait(1).to({rotation:157.5},0).wait(1).to({rotation:163.1,x:-0.1,y:-0.5},0).wait(1).to({rotation:168.8},0).wait(1).to({rotation:174.4,x:0},0).wait(1).to({rotation:180},0).wait(1).to({rotation:185.6,x:0.1},0).wait(1).to({rotation:191.3},0).wait(1).to({rotation:196.9,x:0.2},0).wait(1).to({rotation:202.5,y:-0.4},0).wait(1).to({rotation:208.1,x:0.3},0).wait(1).to({rotation:213.8},0).wait(1).to({rotation:219.4},0).wait(1).to({rotation:225,x:0.4,y:-0.3},0).wait(1).to({rotation:230.6},0).wait(1).to({rotation:236.3},0).wait(1).to({rotation:241.9,x:0.5,y:-0.2},0).wait(1).to({rotation:247.5},0).wait(1).to({rotation:253.1,y:-0.1},0).wait(1).to({rotation:258.8},0).wait(1).to({rotation:264.4,y:0},0).wait(1).to({rotation:270},0).wait(1).to({rotation:275.6,y:0.1},0).wait(1).to({rotation:281.3},0).wait(1).to({rotation:286.9,y:0.2},0).wait(1).to({rotation:292.5},0).wait(1).to({rotation:298.1,y:0.3},0).wait(1).to({rotation:303.8,x:0.4},0).wait(1).to({rotation:309.4},0).wait(1).to({rotation:315,y:0.4},0).wait(1).to({rotation:320.6,x:0.3},0).wait(1).to({rotation:326.3},0).wait(1).to({rotation:331.9,y:0.5},0).wait(1).to({rotation:337.5,x:0.2},0).wait(1).to({rotation:343.1},0).wait(1).to({rotation:348.8,x:0.1},0).wait(1).to({rotation:354.4},0).wait(1).to({rotation:360,x:0},0).wait(1));

	// Символ 101
	this.instance_1 = new lib.Символ101();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:-11.2},0).wait(1).to({rotation:-22.5},0).wait(1).to({rotation:-33.7},0).wait(1).to({rotation:-45},0).wait(1).to({rotation:-56.2},0).wait(1).to({rotation:-67.5},0).wait(1).to({rotation:-78.7},0).wait(1).to({rotation:-90},0).wait(1).to({rotation:-101.2},0).wait(1).to({rotation:-112.5},0).wait(1).to({rotation:-123.7},0).wait(1).to({rotation:-135},0).wait(1).to({rotation:-146.2},0).wait(1).to({rotation:-157.5},0).wait(1).to({rotation:-168.7},0).wait(1).to({rotation:-180},0).wait(1).to({rotation:-191.2},0).wait(1).to({rotation:-202.5},0).wait(1).to({rotation:-213.7},0).wait(1).to({rotation:-225},0).wait(1).to({rotation:-236.2},0).wait(1).to({rotation:-247.5},0).wait(1).to({rotation:-258.7},0).wait(1).to({rotation:-270},0).wait(1).to({rotation:-281.2},0).wait(1).to({rotation:-292.5},0).wait(1).to({rotation:-303.7},0).wait(1).to({rotation:-315},0).wait(1).to({rotation:-326.2},0).wait(1).to({rotation:-337.5},0).wait(1).to({rotation:-348.7},0).wait(1).to({rotation:-360},0).wait(1).to({rotation:-371.2},0).wait(1).to({rotation:-382.5},0).wait(1).to({rotation:-393.7},0).wait(1).to({rotation:-405},0).wait(1).to({rotation:-416.2},0).wait(1).to({rotation:-427.5},0).wait(1).to({rotation:-438.7},0).wait(1).to({rotation:-450},0).wait(1).to({rotation:-461.2},0).wait(1).to({rotation:-472.5},0).wait(1).to({rotation:-483.7},0).wait(1).to({rotation:-495},0).wait(1).to({rotation:-506.2},0).wait(1).to({rotation:-517.5},0).wait(1).to({rotation:-528.7},0).wait(1).to({rotation:-540},0).wait(1).to({rotation:-551.2},0).wait(1).to({rotation:-562.5},0).wait(1).to({rotation:-573.7},0).wait(1).to({rotation:-585},0).wait(1).to({rotation:-596.2},0).wait(1).to({rotation:-607.5},0).wait(1).to({rotation:-618.7},0).wait(1).to({rotation:-630},0).wait(1).to({rotation:-641.2},0).wait(1).to({rotation:-652.5},0).wait(1).to({rotation:-663.7},0).wait(1).to({rotation:-675},0).wait(1).to({rotation:-686.2},0).wait(1).to({rotation:-697.5},0).wait(1).to({rotation:-708.7},0).wait(1).to({rotation:-720},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-30,66,61);


(lib.Символ95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 93
	this.instance = new lib.Символ93();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-0.5,rotation:5.6,x:0.1,y:-0.5},0).wait(1).to({rotation:11.3},0).wait(1).to({rotation:16.9,x:0.2},0).wait(1).to({rotation:22.5,y:-0.4},0).wait(1).to({rotation:28.1,x:0.3},0).wait(1).to({rotation:33.8},0).wait(1).to({rotation:39.4},0).wait(1).to({rotation:45,x:0.4,y:-0.3},0).wait(1).to({rotation:50.6},0).wait(1).to({rotation:56.3},0).wait(1).to({rotation:61.9,x:0.5,y:-0.2},0).wait(1).to({rotation:67.5},0).wait(1).to({rotation:73.1,y:-0.1},0).wait(1).to({rotation:78.8},0).wait(1).to({rotation:84.4,y:0},0).wait(1).to({rotation:90},0).wait(1).to({rotation:95.6,y:0.1},0).wait(1).to({rotation:101.3},0).wait(1).to({rotation:106.9,y:0.2},0).wait(1).to({rotation:112.5},0).wait(1).to({rotation:118.1,y:0.3},0).wait(1).to({rotation:123.8,x:0.4},0).wait(1).to({rotation:129.4},0).wait(1).to({rotation:135,y:0.4},0).wait(1).to({rotation:140.6,x:0.3},0).wait(1).to({rotation:146.3},0).wait(1).to({rotation:151.9,y:0.5},0).wait(1).to({rotation:157.5,x:0.2},0).wait(1).to({rotation:163.1},0).wait(1).to({rotation:168.8,x:0.1},0).wait(1).to({rotation:174.4},0).wait(1).to({rotation:180,x:0},0).wait(1).to({rotation:185.6},0).wait(1).to({rotation:191.3,x:-0.1},0).wait(1).to({rotation:196.9},0).wait(1).to({rotation:202.5,x:-0.2},0).wait(1).to({rotation:208.1},0).wait(1).to({rotation:213.8,x:-0.3,y:0.4},0).wait(1).to({rotation:219.4},0).wait(1).to({rotation:225},0).wait(1).to({rotation:230.6,x:-0.4,y:0.3},0).wait(1).to({rotation:236.3},0).wait(1).to({rotation:241.9},0).wait(1).to({rotation:247.5,y:0.2},0).wait(1).to({rotation:253.1,x:-0.5},0).wait(1).to({rotation:258.8,y:0.1},0).wait(1).to({rotation:264.4},0).wait(1).to({rotation:270,y:0},0).wait(1).to({rotation:275.6},0).wait(1).to({rotation:281.3,y:-0.1},0).wait(1).to({rotation:286.9},0).wait(1).to({rotation:292.5,x:-0.4,y:-0.2},0).wait(1).to({rotation:298.1},0).wait(1).to({rotation:303.8,y:-0.3},0).wait(1).to({rotation:309.4},0).wait(1).to({rotation:315,x:-0.3},0).wait(1).to({rotation:320.6,y:-0.4},0).wait(1).to({rotation:326.3},0).wait(1).to({rotation:331.9,x:-0.2},0).wait(1).to({rotation:337.5},0).wait(1).to({rotation:343.1,x:-0.1,y:-0.5},0).wait(1).to({rotation:348.8},0).wait(1).to({rotation:354.4,x:0},0).wait(1).to({rotation:360},0).wait(1));

	// Символ 92
	this.instance_1 = new lib.Символ92();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:-11.2},0).wait(1).to({rotation:-22.5},0).wait(1).to({rotation:-33.7},0).wait(1).to({rotation:-45},0).wait(1).to({rotation:-56.2},0).wait(1).to({rotation:-67.5},0).wait(1).to({rotation:-78.7},0).wait(1).to({rotation:-90},0).wait(1).to({rotation:-101.2},0).wait(1).to({rotation:-112.5},0).wait(1).to({rotation:-123.7},0).wait(1).to({rotation:-135},0).wait(1).to({rotation:-146.2},0).wait(1).to({rotation:-157.5},0).wait(1).to({rotation:-168.7},0).wait(1).to({rotation:-180},0).wait(1).to({rotation:-191.2},0).wait(1).to({rotation:-202.5},0).wait(1).to({rotation:-213.7},0).wait(1).to({rotation:-225},0).wait(1).to({rotation:-236.2},0).wait(1).to({rotation:-247.5},0).wait(1).to({rotation:-258.7},0).wait(1).to({rotation:-270},0).wait(1).to({rotation:-281.2},0).wait(1).to({rotation:-292.5},0).wait(1).to({rotation:-303.7},0).wait(1).to({rotation:-315},0).wait(1).to({rotation:-326.2},0).wait(1).to({rotation:-337.5},0).wait(1).to({rotation:-348.7},0).wait(1).to({rotation:-360},0).wait(1).to({rotation:-371.2},0).wait(1).to({rotation:-382.5},0).wait(1).to({rotation:-393.7},0).wait(1).to({rotation:-405},0).wait(1).to({rotation:-416.2},0).wait(1).to({rotation:-427.5},0).wait(1).to({rotation:-438.7},0).wait(1).to({rotation:-450},0).wait(1).to({rotation:-461.2},0).wait(1).to({rotation:-472.5},0).wait(1).to({rotation:-483.7},0).wait(1).to({rotation:-495},0).wait(1).to({rotation:-506.2},0).wait(1).to({rotation:-517.5},0).wait(1).to({rotation:-528.7},0).wait(1).to({rotation:-540},0).wait(1).to({rotation:-551.2},0).wait(1).to({rotation:-562.5},0).wait(1).to({rotation:-573.7},0).wait(1).to({rotation:-585},0).wait(1).to({rotation:-596.2},0).wait(1).to({rotation:-607.5},0).wait(1).to({rotation:-618.7},0).wait(1).to({rotation:-630},0).wait(1).to({rotation:-641.2},0).wait(1).to({rotation:-652.5},0).wait(1).to({rotation:-663.7},0).wait(1).to({rotation:-675},0).wait(1).to({rotation:-686.2},0).wait(1).to({rotation:-697.5},0).wait(1).to({rotation:-708.7},0).wait(1).to({rotation:-720},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-31,66,61);


(lib.Символ80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ82();
	this.instance.parent = this;
	this.instance.alpha = 0.398;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14,cjs.Ease.get(1)).to({alpha:0.398},17,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ82();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.4,-75.8,134.7,151.8);


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ79();
	this.instance.parent = this;
	this.instance.setTransform(-64.4,-59.6,2.199,2.199,0,0,0,-25,-59.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ78, new cjs.Rectangle(-64.3,-59.6,48.3,115.3), null);


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ73();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ74, new cjs.Rectangle(-62.4,-65.1,125.3,131), null);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ70();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ66, new cjs.Rectangle(-16,-40,31.6,75.5), null);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ63();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ64, new cjs.Rectangle(-9.3,-10.8,18.7,21.6), null);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ61();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ62, new cjs.Rectangle(-11.1,-11.2,22.2,22.5), null);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ59();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(-8.4,-10.8,16.9,21.6), null);


(lib.Символ58_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ57();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58_1, new cjs.Rectangle(-10.9,-10.9,21.9,21.9), null);


(lib.Символ56_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ55();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56_1, new cjs.Rectangle(-8,-10.8,16.1,21.6), null);


(lib.Символ54_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ53();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54_1, new cjs.Rectangle(-8.6,-10.8,17.3,21.6), null);


(lib.Символ52_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ51();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52_1, new cjs.Rectangle(-8.6,-10.8,17.3,21.6), null);


(lib.Символ50_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ49();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50_1, new cjs.Rectangle(-10.9,-10.9,21.9,21.9), null);


(lib.Символ48_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ47();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48_1, new cjs.Rectangle(-10.6,-11,21.3,22.1), null);


(lib.Символ46_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ45();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46_1, new cjs.Rectangle(-10.9,-10.9,21.9,21.9), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-9,-10.8,18,21.6), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.Символ54_1();
	this.instance.parent = this;
	this.instance.setTransform(110.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({y:-6.2},6,cjs.Ease.get(0.86)).to({y:0},7,cjs.Ease.get(0.86)).wait(3).to({y:-6.2},7).to({y:0},6).wait(12));

	// Слой 8
	this.instance_1 = new lib.Символ56_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(90.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({y:-6.2},6,cjs.Ease.get(0.86)).to({y:0},7,cjs.Ease.get(0.86)).wait(5).to({y:-6.2},7).to({y:0},6).wait(11));

	// Слой 9
	this.instance_2 = new lib.Символ58_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(70.5,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({y:-6.4},6,cjs.Ease.get(0.86)).to({y:-0.2},7,cjs.Ease.get(0.86)).wait(7).to({y:-6.4},7).to({y:-0.2},6).wait(10));

	// Слой 10
	this.instance_3 = new lib.Символ60();
	this.instance_3.parent = this;
	this.instance_3.setTransform(49.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({y:-6.2},6,cjs.Ease.get(0.86)).to({y:0},7,cjs.Ease.get(0.86)).wait(9).to({y:-6.2},7).to({y:0},6).wait(9));

	// Слой 11
	this.instance_4 = new lib.Символ62();
	this.instance_4.parent = this;
	this.instance_4.setTransform(25.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({y:-6.2},6,cjs.Ease.get(0.86)).to({y:0},7,cjs.Ease.get(0.86)).wait(11).to({y:-6.2},7).to({y:0},6).wait(8));

	// Слой 12
	this.instance_5 = new lib.Символ64();
	this.instance_5.parent = this;
	this.instance_5.setTransform(3.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({y:-6.2},6,cjs.Ease.get(0.86)).to({y:0},7,cjs.Ease.get(0.86)).wait(13).to({y:-6.2},7).to({y:0},6).wait(7));

	// Слой 3
	this.instance_6 = new lib.Символ46_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-19.4,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({y:-6.4},6,cjs.Ease.get(0.86)).to({y:-0.2},7,cjs.Ease.get(0.86)).wait(15).to({y:-6.4},7).to({y:-0.2},6).wait(6));

	// Слой 2
	this.instance_7 = new lib.Символ44();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-42.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({y:-6.2},6,cjs.Ease.get(0.86)).to({y:0},7,cjs.Ease.get(0.86)).wait(17).to({y:-6.2},7).to({y:0},6).wait(5));

	// Слой 4
	this.instance_8 = new lib.Символ48_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-66,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({y:-6.2},6,cjs.Ease.get(0.86)).to({y:0},7,cjs.Ease.get(0.86)).wait(19).to({y:-6.2},7).to({y:0},6).wait(4));

	// Слой 5
	this.instance_9 = new lib.Символ50_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-89.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({y:-6.4},6,cjs.Ease.get(0.86)).to({y:-0.2},7,cjs.Ease.get(0.86)).wait(21).to({y:-6.4},7).to({y:-0.2},6).wait(3));

	// Слой 6
	this.instance_10 = new lib.Символ52_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-110.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({y:-6.2},6,cjs.Ease.get(0.86)).to({y:0},7,cjs.Ease.get(0.86)).wait(23).to({y:-6.2},7).to({y:0},6).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.7,-11.2,237.6,22.5);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ65();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.72,x:53.8},8,cjs.Ease.get(1)).to({scaleX:1,x:0},4,cjs.Ease.get(1)).wait(1).to({scaleX:0.72,x:53.8},8,cjs.Ease.get(1)).to({scaleX:1,x:0},4,cjs.Ease.get(1)).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.8,-11.2,165.6,22.5);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnBD/IAAjkQgRgDgKgTQgSgnAfgZQAegTgQgRIAAifIOkAAIAAH9g");
	mask.setTransform(21.1,-1.1);

	// Слой 3
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(-26.1,-3.6,0.451,0.402,19.7,0,0,-0.2,-0.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(62));

	// Слой 1
	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-9.4,y:-2.7},13,cjs.Ease.get(-1)).to({x:-19.9,y:-5.6},14,cjs.Ease.get(1)).to({x:-9.9,y:-2.8},16,cjs.Ease.get(-1)).to({x:0,y:0},18,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.2,-10,44.3,19.3);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.07,rotation:-3.3,y:0.5},9,cjs.Ease.get(-1)).to({scaleY:1.14,rotation:-3.5,x:0.1,y:1.1},10,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,scaleY:1.07,rotation:-3.3,y:0.7},10,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleY:1,rotation:-3.5,x:0,y:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-8.6,19.5,17.3);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5));

	// Слой 3
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(28,3.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1).to({alpha:0},4).wait(1));

	// Слой 1
	this.rot1 = new lib.Символ28();
	this.rot1.parent = this;
	this.rot1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.rot1).to({alpha:1},4).wait(1).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-23.4,107.2,51.1);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AjAAnIAAh3IGCAAIAAB3g");
	var mask_graphics_1 = new cjs.Graphics().p("AjAA1IAAh3IGCAAIAAB3g");
	var mask_graphics_2 = new cjs.Graphics().p("AjAA8IAAh3IGCAAIAAB3g");
	var mask_graphics_3 = new cjs.Graphics().p("AjAA8IAAh3IGCAAIAAB3g");
	var mask_graphics_4 = new cjs.Graphics().p("AjAA8IAAh3IGCAAIAAB3g");
	var mask_graphics_5 = new cjs.Graphics().p("AjAA1IAAh3IGCAAIAAB3g");
	var mask_graphics_6 = new cjs.Graphics().p("AjAAnIAAh3IGCAAIAAB3g");
	var mask_graphics_7 = new cjs.Graphics().p("AjAA1IAAh3IGCAAIAAB3g");
	var mask_graphics_8 = new cjs.Graphics().p("AjAA8IAAh3IGCAAIAAB3g");
	var mask_graphics_9 = new cjs.Graphics().p("AjAA8IAAh3IGCAAIAAB3g");
	var mask_graphics_10 = new cjs.Graphics().p("AjAA8IAAh3IGCAAIAAB3g");
	var mask_graphics_11 = new cjs.Graphics().p("AjAA1IAAh3IGCAAIAAB3g");
	var mask_graphics_12 = new cjs.Graphics().p("AjAAnIAAh3IGCAAIAAB3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-0.3,y:-8.1}).wait(1).to({graphics:mask_graphics_1,x:-0.3,y:-6.7}).wait(1).to({graphics:mask_graphics_2,x:-0.3,y:-4.6}).wait(1).to({graphics:mask_graphics_3,x:-0.3,y:-1.7}).wait(1).to({graphics:mask_graphics_4,x:-0.3,y:-4.6}).wait(1).to({graphics:mask_graphics_5,x:-0.3,y:-6.7}).wait(1).to({graphics:mask_graphics_6,x:-0.3,y:-8.1}).wait(1).to({graphics:mask_graphics_7,x:-0.3,y:-6.7}).wait(1).to({graphics:mask_graphics_8,x:-0.3,y:-4.6}).wait(1).to({graphics:mask_graphics_9,x:-0.3,y:-1.7}).wait(1).to({graphics:mask_graphics_10,x:-0.3,y:-4.6}).wait(1).to({graphics:mask_graphics_11,x:-0.3,y:-6.7}).wait(1).to({graphics:mask_graphics_12,x:-0.3,y:-8.1}).wait(43));

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-52,-104,104,208), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-52,-104,104,208), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-74.5,-86.5,149,173), null);


(lib.Символ16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance_1 = new lib.Символ24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20.6,7.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.rot = new lib.Символ26();
	this.rot.parent = this;
	this.rot.setTransform(22.6,31);

	this.timeline.addTween(cjs.Tween.get(this.rot).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ15();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16_1, new cjs.Rectangle(-48,-52.5,168,111.1), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-53.5,-55.5,107,111), null);


(lib.Символ12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_2 = new lib.Символ11();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12_1, new cjs.Rectangle(-24.5,-36.5,49,73), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-78.5,-68.5,157,137), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-20.5,-47.5,41,95), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-29,-17,58,34), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-33,-15.5,66,31), null);


(lib.Символ59_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.parent = this;
	this.instance.setTransform(6.9,4.2,1,1,0,0,0,6.9,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15},9,cjs.Ease.get(1)).to({rotation:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,20);


(lib.Символ57_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(7.8,2.5,1,1,0,0,0,7.8,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-17.5,x:7.9},9,cjs.Ease.get(1)).to({rotation:0,x:7.8},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-8.5,19,17);


(lib.Символ55_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55_1, new cjs.Rectangle(-9,-12,18,24), null);


(lib.Символ53_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(-4,8.5,1,1,0,0,0,-3.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-3.4,rotation:12.7,x:-3.9},9,cjs.Ease.get(1)).to({regX:-3.5,rotation:0,x:-4},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-8,25,25);


(lib.Символ51_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,7.2,1,1,0,0,0,-1.5,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15,y:7.3},9,cjs.Ease.get(1)).to({rotation:0,y:7.2},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-10.5,22,21);


(lib.Символ49_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49_1, new cjs.Rectangle(-10.5,-12,21,24), null);


(lib.Символ47_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47_1, new cjs.Rectangle(-47,-61.5,94,123), null);


(lib.Символ45_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(0,4.2,1,1,0,0,0,0,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-22.9},9,cjs.Ease.get(1)).to({rotation:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-9.5,14,19);


(lib.Символ24_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:658.2},254).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-329,-987,658,1316);


(lib.Символ112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ111();
	this.instance.parent = this;
	this.instance.setTransform(0,11.1,0.689,0.689);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-0.1,scaleY:0.55,y:-2.9},6,cjs.Ease.get(1)).to({regY:0,scaleY:0.69,y:11.1},5,cjs.Ease.get(1)).wait(1).to({regY:-0.1,scaleY:0.55,y:-2.9},6,cjs.Ease.get(1)).to({regY:0,scaleY:0.69,y:11.1},5,cjs.Ease.get(1)).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-10.9,44.1,44.1);


(lib.Символ109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ112();
	this.instance.parent = this;
	this.instance.setTransform(-14.5,-41.7,0.722,0.722);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ108();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14.5,13.9,0.722,0.722);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ109, new cjs.Rectangle(-66.2,-49.6,103.5,87.1), null);


(lib.Символ99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ98();
	this.instance.parent = this;
	this.instance.setTransform(-28,-10,1,1,0,0,0,-28,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:7.3,x:-1.5,y:3.5},0).wait(1).to({rotation:14.7,x:-3.5,y:6.8},0).wait(1).to({rotation:22,x:-5.8,y:9.8},0).wait(1).to({rotation:29.4,x:-8.5,y:12.5},0).wait(1).to({rotation:36.7,x:-11.5,y:14.8},0).wait(1).to({rotation:44.1,x:-14.8,y:16.7},0).wait(1).to({rotation:51.4,x:-18.4,y:18.1},0).wait(1).to({rotation:58.8,x:-22,y:19.1},0).wait(1).to({rotation:66.1,x:-25.8,y:19.7},0).wait(1).to({rotation:73.5,x:-29.6},0).wait(1).to({rotation:80.8,x:-33.4,y:19.2},0).wait(1).to({rotation:88.2,x:-37.1,y:18.3},0).wait(1).to({rotation:95.5,x:-40.6,y:16.9},0).wait(1).to({rotation:102.9,x:-44,y:15.1},0).wait(1).to({rotation:110.2,x:-47.1,y:12.8},0).wait(1).to({rotation:117.6,x:-49.8,y:10.2},0).wait(1).to({rotation:124.9,x:-52.2,y:7.2},0).wait(1).to({rotation:132.2,x:-54.2,y:4},0).wait(1).to({rotation:139.6,x:-55.8,y:0.5},0).wait(1).to({rotation:146.9,x:-56.9,y:-3.1},0).wait(1).to({rotation:154.3,x:-57.6,y:-6.9},0).wait(1).to({rotation:161.6,x:-57.7,y:-10.7},0).wait(1).to({rotation:169,x:-57.4,y:-14.5},0).wait(1).to({rotation:176.3,x:-56.6,y:-18.2},0).wait(1).to({rotation:183.7,x:-55.3,y:-21.8},0).wait(1).to({rotation:191,x:-53.6,y:-25.2},0).wait(1).to({rotation:198.4,x:-51.4,y:-28.3},0).wait(1).to({rotation:205.7,x:-48.9,y:-31.2},0).wait(1).to({rotation:213.1,x:-46,y:-33.7},0).wait(1).to({rotation:220.4,x:-42.8,y:-35.8},0).wait(1).to({rotation:227.8,x:-39.4,y:-37.5},0).wait(1).to({rotation:235.1,x:-35.8,y:-38.7},0).wait(1).to({rotation:242.4,x:-32.1,y:-39.5},0).wait(1).to({rotation:249.8,x:-28.3,y:-39.7},0).wait(1).to({rotation:257.1,x:-24.5,y:-39.5},0).wait(1).to({rotation:264.5,x:-20.7,y:-38.8},0).wait(1).to({rotation:271.8,x:-17.1,y:-37.7},0).wait(1).to({rotation:279.2,x:-13.7,y:-36},0).wait(1).to({rotation:286.5,x:-10.4,y:-34},0).wait(1).to({rotation:293.9,x:-7.5,y:-31.6},0).wait(1).to({rotation:301.2,x:-4.9,y:-28.8},0).wait(1).to({rotation:308.6,x:-2.7,y:-25.7},0).wait(1).to({rotation:315.9,x:-0.9,y:-22.3},0).wait(1).to({rotation:323.3,x:0.4,y:-18.7},0).wait(1).to({rotation:330.6,x:1.3,y:-15},0).wait(1).to({rotation:338,x:1.7,y:-11.2},0).wait(1).to({rotation:345.3,x:1.6,y:-7.4},0).wait(1).to({rotation:352.7,x:1,y:-3.7},0).wait(1).to({rotation:360,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-30,66,61);


(lib.Символ96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ95();
	this.instance.parent = this;
	this.instance.setTransform(-278.7,-83);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-882.9},69,cjs.Ease.get(1)).to({x:-278.7},70,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311.7,-114,66,61);


(lib.Символ85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ78();
	this.instance.parent = this;
	this.instance.setTransform(-9.1,56.9,1,1,0,0,0,-9.1,56.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-9.2,rotation:-30,y:57},5,cjs.Ease.get(1)).to({regX:-9.1,rotation:0,y:56.9},6,cjs.Ease.get(1)).wait(1).to({regX:-9.2,rotation:-30,y:57},5,cjs.Ease.get(1)).to({regX:-9.1,rotation:0,y:56.9},6,cjs.Ease.get(1)).wait(21).to({x:-19.9,y:96.2},5,cjs.Ease.get(1)).to({x:-9.1,y:56.9},5,cjs.Ease.get(1)).wait(1).to({x:-19.9,y:96.2},5,cjs.Ease.get(1)).to({x:-9.1,y:56.9},5,cjs.Ease.get(1)).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.3,-59.6,48.3,115.3);


(lib.Символ84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5));

	// Слой 1
	this.instance = new lib.Символ85();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.3,-59.6,48.3,115.3);


(lib.Символ81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ80();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6},3,cjs.Ease.get(-1)).to({regX:0.1,regY:-0.1,rotation:9,x:0.1,y:-0.1},8,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:-6,x:0,y:0},8,cjs.Ease.get(-1)).to({rotation:0},3,cjs.Ease.get(1)).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.4,-75.8,134.7,151.8);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(-44.6,3.4);

	this.instance_1 = new lib.Символ74();
	this.instance_1.parent = this;
	this.instance_1.setTransform(128.9,6.3,0.869,0.869);

	this.instance_2 = new lib.Символ72();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-35.4,1.6);
	this.instance_2.alpha = 0.531;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ75, new cjs.Rectangle(-197.3,-50.3,380.8,113.8), null);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ66();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ68();
	this.instance_1.parent = this;
	this.instance_1.setTransform(124.1,1.5);
	this.instance_1.alpha = 0.559;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ67, new cjs.Rectangle(-16,-40,265.4,75.5), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_69 = function() {
		this.gotoAndPlay(51);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(20).call(this.frame_69).wait(1));

	// Слой 17
	this.instance = new lib.Символ81();
	this.instance.parent = this;
	this.instance.setTransform(-30.2,-11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-38,y:-15.2},11,cjs.Ease.get(-1)).to({x:-47.2,y:-19.8},13,cjs.Ease.get(1)).to({x:-39,y:-15.7},12,cjs.Ease.get(-1)).to({x:-30.2,y:-11.3},13,cjs.Ease.get(1)).wait(1).to({x:-37.8,y:-15.2},4,cjs.Ease.get(-1)).to({x:-47.2,y:-19.8},5,cjs.Ease.get(1)).to({x:-39,y:-15.7},5,cjs.Ease.get(-1)).to({x:-30.2,y:-11.3},5,cjs.Ease.get(1)).wait(1));

	// Слой 15
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.4,-18.8,35.1,2.7).s().p("AjfDTIB1m9QFfgugWE5QgTCri7AbQhEAKgyAAQhYAAgigeg");
	this.shape.setTransform(119,-17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.4,-18.8,35.1,2.7).s().p("AjfDSIA0jIIBCj0IAigEIAkgCQEWgIgUEYIAAAEIgEAUQgcCWiuAZIgBAAIgBAAQhCAKgyAAQhYAAgigfg");
	this.shape_1.setTransform(118.9,-17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.4,-18.8,35.1,2.7).s().p("AjfDTQAZhkAbhlIBCj0IAjgFIAjgCQEWgGgUEYIAAAEIgDATQgdCXiuAZIgBAAIgBAAQhCAKgxAAQhZAAgigfg");
	this.shape_2.setTransform(118.7,-17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.4,-18.6,35.1,2.9).s().p("AjfDTQAXhjAdhlQAih4Ahh9IAhgGIAkgBQEWgGgUEZIAAAEIgDATQgdCXiuAZIgBAAIgBAAQhBAKgxAAQhaAAgiggg");
	this.shape_3.setTransform(118.3,-16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.4,-18.5,35.1,3).s().p("AjfDUIAAgBQAVhiAfhnQAjh2Aih+IAfgJIAkAAQEVgDgTEYIAAAEIgEAUQgbCXivAaIgBAAIgBAAQhAAJgxAAQhaAAgjggg");
	this.shape_4.setTransform(117.7,-16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.4,-18.3,35.1,3.2).s().p("AjfDVIAAgBQAShhAhhoQAlh1AjiAIAegLIAjABQEVgBgTEYIAAAEIgDAUQgcCZivAZIgBAAIgBAAQg/AJgwAAQhcAAgjghg");
	this.shape_5.setTransform(117,-16);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.4,-18,35.1,3.5).s().p("AjfDWIAAAAQAPhhAkhqQAmhzAkiCIAcgOIAjADQEVABgTEZIAAAEIgDAUQgbCZivAaIgCAAIgBAAQg+AJgvAAQhdAAgkgjg");
	this.shape_6.setTransform(116.1,-15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.3,-17.6,35.2,3.9).s().p("AjfDYIAAgBQALhgAohrQAohxAliFIAZgRIAkAEQETAFgSEZIAAAEIgDAUQgaCbiwAZIgBAAIgBAAQg9AJgvAAQhfAAgkgkg");
	this.shape_7.setTransform(115,-14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.3,-17.2,35.2,4.3).s().p("AjfDZIAAAAQAGhfAthuQAqhuAniHIAWgWIAjAHQETAIgREZIAAAEIgDAVQgaCbiwAaIgCAAIgBAAQg7AJguAAQhhAAglgng");
	this.shape_8.setTransform(113.7,-14);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.3,-16.8,35.2,4.7).s().p("AjfDbIgBgBQAChdAxhxQAuhrAniLQAKgMAJgNIAjAIQESAMgQEaIAAAEIgDAVQgZCdixAbIgBAAIgBAAQg5AIgtAAQhkAAgmgpg");
	this.shape_9.setTransform(112.3,-13.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.3,-16.3,35.2,5.2).s().p("AjeDdIgCgBQgEhbA3h0QAwhoAqiOIAPgfIAjALQEQARgPEaIAAAEIgCAVQgYCfiyAbIgBAAIgBAAQg3AIgtAAQhmAAgmgsg");
	this.shape_10.setTransform(110.7,-12.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.2,-15.7,35.3,5.8).s().p("AjfDfIAAgBQgMhZA+h3QA6hxAwiqIAjANQERAWgQEfIgCAWQgXChi0AaIgBAAQg1AIgrAAQhqAAgogvg");
	this.shape_11.setTransform(108.9,-11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.1,-15.6,35.4,5.9).s().p("AjfDcIAAAAQgPheA9hzIAKgUQA4hpAwicIAdAFIAEACQEPAcgPEgIgCATIAAACQgWCii1AbIgBAAIgBAAQgzAIgqAAQhsAAgpgzg");
	this.shape_12.setTransform(107.1,-9.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45,-15.5,35.5,6).s().p("AjeDaIAAAAQgUhiA9hvIALgTQA6hoA2icIAagBIAEACQEOAhgPEhIgCATIAAACQgWCji1AbIgBAAIgBAAQgyAIgoAAQhvAAgpg2g");
	this.shape_13.setTransform(105.4,-8.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.9,-15.1,35.6,6.4).s().p("AjdDbIgBAAQgXhmA9hsIAMgTQA8hlA6idIAZgGIAEACQEMAmgPEhIgBAUIAAACQgWCki2AbIgBAAIgBAAQgwAHgoAAQhxAAgpg4g");
	this.shape_14.setTransform(103.9,-7.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.8,-14.8,35.7,6.7).s().p("AjdDbQgahpA8hpIAMgSQA/hkA+idIAXgLIAEABQEKArgOEiIgBAUIAAACQgWCli3AbIgBAAIgBAAQguAHgnAAQhyAAgrg7g");
	this.shape_15.setTransform(102.5,-6.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.7,-14.5,35.8,7).s().p("AjcDcQgehsA9hmIAMgTQBBhhBBifIAVgPIAEACQEKAvgOEiIgCAUIAAACQgUCmi4AbIgBAAIgBAAQgtAHgnAAQhzAAgrg9g");
	this.shape_16.setTransform(101.2,-5.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.6,-14.3,35.9,7.2).s().p("AjbDcIgBAAQgghuA9hkIANgTQBChfBFifIATgTIAEABQEJAzgOEjIgBATIAAACQgVCni4AbIgBAAIgBAAQgtAHgmAAQh0AAgrg/g");
	this.shape_17.setTransform(100.1,-4.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.6,-14.1,35.9,7.4).s().p("AjbDdQgjhxA9hiIANgSQBEheBHigIATgWIAEABQEHA2gNEjIgCAUIAAACQgUCoi5AbIgBAAIgBAAQgrAGgmAAQh1AAgshAg");
	this.shape_18.setTransform(99.1,-4.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.5,-13.9,36,7.6).s().p("AjaDdIgBAAQgkhyA9hhIANgSQBFhdBKigIARgZIAEABQEHA5gOEjIgBAUIAAACQgUCoi5AbIgBAAIgBAAQgrAHglAAQh2AAgshCg");
	this.shape_19.setTransform(98.3,-3.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.4,-13.7,36.1,7.8).s().p("AjaDeQgmh0A9hfIAOgSQBGhdBLigIAQgbIAEABQEGA7gNEkIgBAUIAAACQgUCoi5AbIgBAAIgBAAQgrAGglAAQh3AAgshCg");
	this.shape_20.setTransform(97.6,-3.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.4,-13.6,36.1,7.9).s().p("AjaDeQgnh1A9heIANgSQBHhcBNigIAQgdIAEABQEFA8gNEkIgBAUIAAACQgTCpi6AbIgBAAIgBAAQgrAGgkAAQh3AAgthDg");
	this.shape_21.setTransform(97.1,-2.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.4,-13.5,36.1,8).s().p("AjaDeQgoh2A9hdIAOgSQBHhbBOihIAPgeIAEABQEFA+gMEkIgCAUIAAACQgTCpi6AbIgBAAIgBAAQgqAGgkAAQh4AAgthEg");
	this.shape_22.setTransform(96.7,-2.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.4,-13.5,36.1,8).s().p("AjaDeQgoh3A9hcIAOgSQBHhbBPigIAPggIAEABQEEA/gMEkIgBAUIAAACQgUCqi6AbIgBAAIgBAAQgqAGgkAAQh4AAgthFg");
	this.shape_23.setTransform(96.5,-2.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.3,-13.5,36.2,8).s().p("AjZDeQguiDBQhiQBPhjBWi4QESA/gXE5QgSCsi8AbQgqAGglAAQh5AAgshFg");
	this.shape_24.setTransform(96.4,-2.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.4,-13.5,36.1,8).s().p("AjaDeQgriBBLhgIADgEQBJhdBRinIALgXIACAAQEGA+gMEmIgBAUIAAABQgTCri7AbIgBAAIgBAAQgqAGgkAAQh4AAgthFg");
	this.shape_25.setTransform(96.5,-2.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.4,-13.5,36.1,8).s().p("AjaDeQgriBBLhgIADgEQBJhdBQioIALgVIACAAQEHA9gMElIgBAVIAAABQgUCqi6AbIgBAAIgBAAQgqAGglAAQh3AAgthEg");
	this.shape_26.setTransform(96.7,-2.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.4,-13.6,36.1,7.9).s().p("AjaDdQgqiABKhhIADgEQBIhdBQinIAMgUIACAAQEHA8gMElIgCAUIAAABQgTCqi7AbIgBAAIgBAAQgqAGgkAAQh4AAgshEg");
	this.shape_27.setTransform(97.1,-2.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.5,-13.8,36,7.7).s().p("AjaDdQgph/BJhiIADgEQBHhdBQioIAMgSIACAAQEIA6gNElIgBAVIAAAAQgUCqi6AbIgBAAIgBAAQgrAGglAAQh2AAgshDg");
	this.shape_28.setTransform(97.7,-3.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.5,-13.9,36,7.6).s().p("AjbDdQgmh/BIhiIACgEQBGhdBQipIAMgQIACABQEIA3gMElIgCAVIAAAAQgUCpi5AbIgBAAIgBAAQgsAHglAAQh2AAgshCg");
	this.shape_29.setTransform(98.4,-3.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.6,-14.1,35.9,7.4).s().p("AjcDdQgjh/BGhiIADgEQBDheBPioIANgOIACAAQEJA2gMEkIgCAUIAAABQgUCoi5AbIgBAAIgBAAQgsAHgmAAQh1AAgshAg");
	this.shape_30.setTransform(99.3,-4.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.7,-14.3,35.8,7.2).s().p("AjcDcQggh+BEhjIACgEQBBheBPipIAOgKIACABQEKAygNEjIgCAVIAAABQgUCni5AbIgBAAIgBAAQgsAHgmAAQh1AAgrg/g");
	this.shape_31.setTransform(100.3,-4.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.8,-14.6,35.7,6.9).s().p("AjdDcIAAAAQgdh+BChjIADgEQA+heBOiqIAPgGIACAAQELAugNEjIgCAVIAAABQgVCmi4AbIgBAAIgBAAQgtAHgnAAQhzAAgrg8g");
	this.shape_32.setTransform(101.5,-5.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.9,-14.9,35.6,6.6).s().p("AjdDcIgBgBQgYh8BAhkIACgEQA7hfBOiqIAPgCIACABQENAqgOEiIgCAVQgVCmi3AbIgBAAIgBAAQgvAGgoAAQhxAAgqg5g");
	this.shape_33.setTransform(102.8,-6.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45,-15.1,35.5,6.4).s().p("AjeDcIAAAAQgUh8A9hlIACgEQA3hfBOirIAQADIACABQEOAlgOEhIgCAWIAAAAQgWCli2AbIgBAAIgBAAQgwAHgoAAQhxAAgpg4g");
	this.shape_34.setTransform(104.2,-7.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.1,-15.2,35.4,6.3).s().p("AjfDeIAAAAQgPh6A6hnIACgEQAzhfBNisIASAIIACABQEPAhgPEgIgCAWQgWCji1AbIgBAAIgBAAQgyAHgpAAQhuAAgpg1g");
	this.shape_35.setTransform(105.9,-8.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.2,-15.3,35.3,6.2).s().p("AjfDgIgBAAQgJh5A3hoQAvhfBOixIAVAPQERAagQEgIgCAWQgXCii1AaIgBAAQgzAIgqAAQhsAAgogyg");
	this.shape_36.setTransform(107.6,-10.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.3,-15.8,35.2,5.7).s().p("AjfDfIgBgBQgEh3AzhoQAohYA7iNIAXgmIAVANQESAVgQEeIAAABIgCAVQgYChizAaIgBAAIgBAAQg1AIgrAAQhpAAgngug");
	this.shape_37.setTransform(109.4,-11.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.3,-16.3,35.2,5.2).s().p("AjfDdIgBgBQACh1AvhpIBdjlIAaggIAWAKQETARgREcIAAABIgCAWQgYCfizAaIgBAAIgBAAQg3AIgsAAQhmAAgngrg");
	this.shape_38.setTransform(110.9,-12.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.3,-16.8,35.2,4.7).s().p("AjeDbIgBAAIgBgBQAGh0AshpIBXjkIAegcIAWAIQEUAMgREcIAAABIgDAWQgYCeizAaIAAAAIgBAAQg5AIgsAAQhkAAgmgpg");
	this.shape_39.setTransform(112.3,-13.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.4,-17.2,35.1,4.3).s().p("AjeDaIgCgBQAKhyAqhqIBRjlIAggXIAXAGQEVAIgSEcIAAABIgCAVQgaCdixAaIgBAAIgBAAQg6AIguAAQhhAAglgmg");
	this.shape_40.setTransform(113.6,-13.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.4,-17.5,35.1,4).s().p("AjeDZIgCgCQAOhxAnhqIBNjkIAigUIAYAFQEVAFgSEbIAAABIgDAVQgZCbiyAaIgBAAQg7AJgvAAQhfAAglgkg");
	this.shape_41.setTransform(114.8,-14.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.3,-17.9,35.2,3.6).s().p("AjdDYIAAgBIgCgBQARhwAlhqIBJjlIAkgQIAYADQEWACgTEbIAAABIgCAVQgaCaixAaIgBAAIgBAAQg9AJgwAAQhcAAgkgig");
	this.shape_42.setTransform(115.7,-15.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.4,-18.1,35.1,3.4).s().p("AjdDXIgCgCQAUhvAihqIBGjlIAmgNIAYACQEXgBgTEaIAAABIgDAVQgaCaixAZIAAAAIgBAAQg/AJgwAAQhaAAgkggg");
	this.shape_43.setTransform(116.6,-15.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.4,-18.4,35.1,3.1).s().p("AjdDWIgCgCQAXhuAghrIBDjlIAogKIAYABQEXgDgTEZIAAABIgDAVQgbCZiwAaIgBAAQhAAJgwAAQhZAAgkgfg");
	this.shape_44.setTransform(117.4,-16.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.4,-18.6,35.1,2.9).s().p("AjdDVIAAAAIgCgCQAZhtAfhrIBAjlIApgIIAYAAQEYgGgTEaIAAABIgDAVQgbCYiwAaIgBAAQhBAJgxAAQhXAAgkgeg");
	this.shape_45.setTransform(118,-16.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.4,-18.7,35.1,2.8).s().p("AjcDVIgBAAIgCgCQAbhtAehrIA+jlIAqgHIAYAAQEZgHgUEZIAAABIgDAVQgbCYiwAZIgBAAQhCAKgxAAQhXAAgigdg");
	this.shape_46.setTransform(118.4,-16.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.4,-18.8,35.1,2.7).s().p("AjdDVIgCgCQAchtAdhrIA9jlIArgFIAYgCQEZgHgUEZIAAABIgDAUQgcCYivAaIgBAAQhDAKgxAAQhWAAgjgdg");
	this.shape_47.setTransform(118.8,-17.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.4,-18.8,35.1,2.7).s().p("AjcDVIgDgCIA5jYIA8jlIAsgFIAYgBQEZgIgUEZIAAABIgDAUQgcCYivAZIgBAAQhDAKgyAAQhVAAgigcg");
	this.shape_48.setTransform(119,-17.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.4,-18.7,35.1,2.8).s().p("AjfDTQAYhjAchmQAih4Ahh8IAhgGIAkgBQEWgGgUEYIAAAEIgEAUQgcCWiuAaIgBAAIgBAAQhBAJgyAAQhZAAgigfg");
	this.shape_49.setTransform(118.4,-16.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.3,-18.1,35.2,3.4).s().p("AjfDVIAAAAQARhiAihoQAmh1AjiAIAdgNIAjACQEVAAgTEZIAAAEIgDAUQgbCZivAZIgBAAIgBAAQg/AKgwAAQhdAAgjgjg");
	this.shape_50.setTransform(116.6,-15.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.3,-17.1,35.2,4.4).s().p("AjeDZIgBAAQAFheAuhvQArhuAniIIAVgWIAjAHQETAJgREZIAAAEIgDAVQgZCcixAaIgBAAIgBAAQg6AJguAAQhiAAglgog");
	this.shape_51.setTransform(113.5,-13.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.2,-15.7,35.3,5.8).s().p("AjfDfIAAgBQgLhZA9h3QA6hxAwiqIAjANQERAWgQEfIgCAWQgXChi0AaIgBAAQg1AIgrAAQhqAAgogvg");
	this.shape_52.setTransform(109.1,-11.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45,-15.3,35.5,6.2).s().p("AjeDbQgWhkA9huIAMgTQA7hmA4idIAagEIAEACQEMAkgOEhIgCAUIAAACQgWCki2AbIgBAAIgBAAQgwAHgoAAQhwAAgqg3g");
	this.shape_53.setTransform(104.6,-7.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.7,-14.5,35.8,7).s().p("AjcDcIAAAAQgehsA9hmIAMgTQBBhhBCieIAVgQIAEABQEJAwgOEjIgBATIAAACQgVCni4AbIgBAAIgBAAQgtAGgmAAQh0AAgrg9g");
	this.shape_54.setTransform(101,-5.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.5,-13.9,36,7.6).s().p("AjbDdQgkhyA9hhIANgSQBFhdBJigIASgZIAEACQEGA4gNEjIgBAUIAAACQgUCoi5AbIgBAAIgBAAQgrAHglAAQh3AAgshCg");
	this.shape_55.setTransform(98.5,-3.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.4,-13.6,36.1,7.9).s().p("AjaDdQgnh1A8heIAOgSQBHhbBNigIAQgeIAEABQEFA9gNEkIgBAUIAAACQgTCpi6AbIgBAAIgBAAQgqAHgkAAQh4AAgthFg");
	this.shape_56.setTransform(96.9,-2.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.4,-13.6,36.1,7.9).s().p("AjaDeIAAAAQgriBBLhgIADgEQBIhdBRioIALgVIACAAQEHA9gMElIgCAVIAAABQgTCqi7AbIgBAAIgBAAQgqAGgkAAQh3AAgthEg");
	this.shape_57.setTransform(96.9,-2.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.5,-13.9,36,7.6).s().p("AjbDdIAAAAQgmh/BIhiIACgEQBGhdBQioIAMgRIACAAQEIA4gMElIgCAVIAAABQgTCpi6AbIgBAAIgBAAQgsAGglAAQh2AAgshCg");
	this.shape_58.setTransform(98.2,-3.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-44.7,-14.4,35.8,7.1).s().p("AjcDcIAAAAQggh+BEhjIADgEQBAheBPipIAOgJIACAAQEKAxgNEkIgCAVIAAAAQgUCoi5AbIgBAAIgBAAQgtAGgmAAQh0AAgrg+g");
	this.shape_59.setTransform(100.5,-5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45,-15.1,35.5,6.4).s().p("AjeDbIAAAAQgWh8A+hlIADgEQA4heBOirIAQABIACAAQENAogOEhIgCAWIAAAAQgVCli3AbIgBAAIgBAAQgwAHgnAAQhxAAgqg5g");
	this.shape_60.setTransform(103.6,-7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.3,-16.6,35.2,4.9).s().p("AjfDcIAAAAIgBgBQAEh0AuhpIBZjlIAcgeIAWAKQEUANgREdIAAABIgDAVQgYCfiyAaIgBAAIgBAAQg4AIgtAAQhkAAgngqg");
	this.shape_61.setTransform(111.8,-12.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.4,-17.6,35.1,3.9).s().p("AjeDYIAAAAIgCgBQAPhxAmhqIBNjlIAigSIAYAEQEVAEgSEbIAAABIgDAVQgZCbiyAaIgBAAQg7AJgvAAQhfAAglgkg");
	this.shape_62.setTransform(115,-14.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.4,-18.3,35.1,3.2).s().p("AjdDWIAAAAIgCgCQAWhuAhhrIBDjlIAogLIAYACQEXgDgTEaIAAABIgDAUQgbCZiwAaIAAAAIgBAAQg/AKgxAAQhZAAgkggg");
	this.shape_63.setTransform(117.2,-16.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#460003","#831A2D","#460003"],[0,0.498,1],-45.4,-18.7,35.1,2.8).s().p("AjcDVIgDgCQAbhsAehsIA+jlIAqgGIAYgBQEZgHgUEZIAAABIgDAVQgbCYiwAZIgBAAQhCAKgyAAQhWAAgigdg");
	this.shape_64.setTransform(118.6,-17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Слой 16
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.7,-16.2,45.8,16.3).s().p("AAsDcQi0gmiTihQB8AICSkjQD1A2A0AoQgzBigIFNQAAgFi1gmg");
	this.shape_65.setTransform(50.3,-35.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.7,-16.2,45.8,16.3).s().p("AArDcQizgmiTihQB8AHCTkiQDzA2A1AoQgzBjgJFMQAAgFi1gmg");
	this.shape_66.setTransform(50.2,-35.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.7,-16.3,45.8,16.2).s().p("AApDcQiygmiSihQB8AHCTkjQDzA4A1AnQg0BmgKFKQgBgHi0glg");
	this.shape_67.setTransform(50.1,-35.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.7,-16.3,45.8,16.2).s().p("AAmDbQixgniPifQB7AGCTkiQDyA6A1AmQg2BpgJFGQgEgHiygmg");
	this.shape_68.setTransform(50,-35.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.7,-16.3,45.8,16.2).s().p("AAhDZQivgmiMieQB7AFCUkhQDwA8A2AkQg5BvgJFAQgGgIiygng");
	this.shape_69.setTransform(49.7,-35.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.6,-16.4,45.9,16.1).s().p("AAcDYQiugoiIibQB7AECUkhQDvBAA3AiQg9B2gKE5QgJgKivgng");
	this.shape_70.setTransform(49.4,-35.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.6,-16.4,45.9,16.1).s().p("AAVDWQirgoiDiZQB7ACCVkfQDrBDA4AhQhBB/gKEuQgNgMitgng");
	this.shape_71.setTransform(49,-35.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.5,-16.5,46,16).s().p("AAMDTQiogoh8iWQB6AACWkeQDnBJA6AdQhGCJgLEkQgSgPiqgog");
	this.shape_72.setTransform(48.6,-35.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.5,-16.6,46,15.9).s().p("AADDQQilgph1iSQB5gCCXkcQDkBOA7AZQhMCVgLEXQgYgRimgpg");
	this.shape_73.setTransform(48,-35.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.4,-16.7,46.1,15.8).s().p("AgHDNQiigqhtiOQB4gFCYkaQDhBUA8AWQhTCigLEJQgfgVihgpg");
	this.shape_74.setTransform(47.4,-35.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.3,-16.7,46.2,15.8).s().p("AgTDJQidgqhliKQB3gHCakZQDcBcA+ARQhaCxgND5QglgYidgrg");
	this.shape_75.setTransform(46.8,-35.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.3,-16.9,46.2,15.6).s().p("AggDFQiZgrhbiFQB2gKCckXQDWBjBBANQhjDDgNDmQgtgciYgsg");
	this.shape_76.setTransform(46,-36);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.2,-17,46.3,15.5).s().p("AguDCQiUgthRiBQB2gMCdkWQDQBsBDAJQhqDTgODVQg2ghiTgsg");
	this.shape_77.setTransform(45.3,-36.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.1,-17.1,46.4,15.4).s().p("Ag6C+QiQgthHh9QB0gPCdkTQDOBzBEAEQhyDigPDFQg9gkiOgug");
	this.shape_78.setTransform(44.6,-36.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45,-17.2,46.5,15.3).s().p("AhGC6QiMgtg+h5QBzgRCfkTQDIB6BHABQh5DwgPC2QhEgoiLgvg");
	this.shape_79.setTransform(44,-36.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45,-17.2,46.5,15.3).s().p("AhQC4QiIgvg3h1QBygTCgkRQDFCABIgDQiAD+gPCmQhKgqiHgvg");
	this.shape_80.setTransform(43.4,-36.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-44.9,-17.3,46.6,15.2).s().p("AhZC2QiFgwgwhyQBxgUChkRQDCCGBJgHQiFEKgRCaQhOgtiEgvg");
	this.shape_81.setTransform(42.9,-36.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-44.8,-17.4,46.7,15.1).s().p("AhhCzQiDgwgphvQBxgWChkQQC+CLBMgJQiLETgRCQQhUgwiAgwg");
	this.shape_82.setTransform(42.5,-36.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-44.8,-17.4,46.7,15.1).s().p("AhoCxQiAgxglhtQBwgXCjkOQC8CPBMgMQiPEcgSCGQhXgyh+gwg");
	this.shape_83.setTransform(42.1,-36.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-44.8,-17.5,46.7,15).s().p("AhuCvQh+gxgghrQBwgYCjkNQC6CSBMgOQiSEjgSB/Qhbg0h8gxg");
	this.shape_84.setTransform(41.8,-36.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-44.8,-17.5,46.7,15).s().p("AhzCuQh8gxgdhpQBwgbCjkMQC4CWBOgQQiWEpgSB4Qheg1h6gxg");
	this.shape_85.setTransform(41.5,-36.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-44.7,-17.5,46.8,15).s().p("Ah3CtQh6gygahoQBvgaCkkMQC2CXBOgRQiXEvgTByQhfg2h6gxg");
	this.shape_86.setTransform(41.3,-36.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-44.7,-17.6,46.8,14.9).s().p("Ah6CsQh5gygYhnQBvgbCkkMQC1CaBPgSQiaEygSBvQhhg4h5gxg");
	this.shape_87.setTransform(41.2,-36.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-44.7,-17.6,46.8,14.9).s().p("Ah7CrQh5gygXhmQBvgbCkkMQC1CbBPgTQibE0gSBtQhig4h4gyg");
	this.shape_88.setTransform(41.1,-36.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-44.7,-17.6,46.8,14.9).s().p("Ah8CrQh5gygWhmQBvgbClkMQC0CbBPgTQibE1gTBsQhhg4h5gyg");
	this.shape_89.setTransform(41.1,-36.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-44.7,-17.6,46.8,14.9).s().p("Ah8CrQh4gxgXhnQBvgbCkkMQC1CbBPgTQibE0gSBtQhig4h5gyg");
	this.shape_90.setTransform(41.1,-36.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-44.7,-17.6,46.8,14.9).s().p("Ah6CsQh5gygYhnQBvgbCkkMQC2CaBOgSQiZEygTBvQhgg4h6gxg");
	this.shape_91.setTransform(41.2,-36.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-44.7,-17.5,46.8,15).s().p("Ah3CtQh7gygahoQBwgaCkkMQC2CXBPgRQiYEvgTByQhgg2h5gxg");
	this.shape_92.setTransform(41.4,-36.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-44.7,-17.5,46.8,15).s().p("AhzCuQh8gxgdhpQBvgaCkkNQC4CVBOgPQiWEpgSB4Qheg0h6gyg");
	this.shape_93.setTransform(41.6,-36.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-44.8,-17.5,46.7,15).s().p("AhuCwQh9gyghhrQBwgYCjkNQC5CRBNgNQiSEjgSB/Qhbg0h8gwg");
	this.shape_94.setTransform(41.8,-36.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-44.8,-17.4,46.7,15.1).s().p("AhoCxQh/gwgmhuQBxgXCikOQC8COBMgLQiOEbgSCHQhXgxh/gxg");
	this.shape_95.setTransform(42.2,-36.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-44.8,-17.4,46.7,15.1).s().p("AhhCzQiCgwgrhwQBygWChkPQC/CLBKgJQiKESgRCQQhSgviCgwg");
	this.shape_96.setTransform(42.6,-36.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-44.9,-17.3,46.6,15.2).s().p("AhYC2QiFgvgyhzQBzgUCgkRQDCCGBJgHQiEEIgQCcQhPgsiEgwg");
	this.shape_97.setTransform(43,-36.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45,-17.2,46.5,15.3).s().p("AhOC4QiJgug5h2QBzgTCgkRQDFB/BJgDQiAD8gPCpQhJgqiHgvg");
	this.shape_98.setTransform(43.6,-36.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.1,-17.1,46.4,15.4).s().p("AhEC8QiMguhAh6QBzgRCekSQDKB5BGABQh4DugPC3QhCgmiMgug");
	this.shape_99.setTransform(44.1,-36.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.1,-17,46.4,15.5).s().p("Ag4C/QiQgthKh+QB1gOCdkUQDOByBEAFQhwDfgPDHQg7gjiQgtg");
	this.shape_100.setTransform(44.8,-36.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.2,-16.9,46.3,15.6).s().p("AgrDDQiVgshTiDQB1gLCdkWQDSBqBDAKQhpDPgODYQg0gfiUgsg");
	this.shape_101.setTransform(45.5,-36.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.3,-16.8,46.2,15.7).s().p("AgeDHQiagshciGQB2gKCbkXQDXBiBBAOQhhDAgODpQgsgbiYgrg");
	this.shape_102.setTransform(46.2,-36);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.4,-16.7,46.1,15.8).s().p("AgSDKQiegqhliMQB3gGCakZQDcBbA+ASQhZCwgND6QglgXidgrg");
	this.shape_103.setTransform(46.8,-35.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.4,-16.6,46.1,15.9).s().p("AgHDNQiigphtiPQB4gECYkbQDgBVA9AWQhTCigMEIQgegUihgqg");
	this.shape_104.setTransform(47.4,-35.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.5,-16.6,46,15.9).s().p("AACDQQilgph0iSQB5gCCXkdQDkBPA7AaQhNCXgLEVQgZgSilgpg");
	this.shape_105.setTransform(48,-35.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.5,-16.5,46,16).s().p("AAKDSQingoh7iVQB6AACWkeQDnBKA6AdQhICLgKEhQgTgPiqgpg");
	this.shape_106.setTransform(48.5,-35.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.6,-16.4,45.9,16.1).s().p("AASDVQiqgoiBiYQB6ACCWkfQDqBFA5AfQhDCCgKErQgPgMisgog");
	this.shape_107.setTransform(48.9,-35.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.6,-16.4,45.9,16.1).s().p("AAZDXQitgniFibQB6ADCVkgQDtBCA3AhQg+B6gKE0QgLgLiugng");
	this.shape_108.setTransform(49.2,-35.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.7,-16.4,45.8,16.1).s().p("AAfDYQivgmiKidQB7AECUkgQDvA9A3AkQg7BygJE9QgIgKiwgng");
	this.shape_109.setTransform(49.5,-35.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.7,-16.3,45.8,16.2).s().p("AAkDaQixgniNieQB7AFCTkhQDxA7A2AlQg4BtgJFCQgFgIixgmg");
	this.shape_110.setTransform(49.8,-35.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.7,-16.3,45.8,16.2).s().p("AAnDbQiygmiPigQB7AGCTkiQDzA5A1AnQg2BngJFIQgDgHizgmg");
	this.shape_111.setTransform(50,-35.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.7,-16.3,45.8,16.2).s().p("AAqDcQizgmiSigQB8AGCTkjQDzA4A1AnQg0BlgJFLQgBgGi0gmg");
	this.shape_112.setTransform(50.1,-35.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.7,-16.2,45.8,16.3).s().p("AArDcQizgmiTihQB8AHCTkiQDzA2A1AoQgzBigJFNQAAgFi1gmg");
	this.shape_113.setTransform(50.2,-35.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.7,-16.3,45.8,16.2).s().p("AAnDbQiygmiPigQB7AGCTkiQDzA5A1AnQg2BogJFHQgDgHizgmg");
	this.shape_114.setTransform(50,-35.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.6,-16.4,45.9,16.1).s().p("AAYDWQisgniFiaQB7ADCUkgQDsBCA4AhQg+B6gLE0QgLgLiugog");
	this.shape_115.setTransform(49.3,-35.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.5,-16.6,46,15.9).s().p("AABDPQikgph0iRQB4gDCYkcQDjBQA8AZQhOCYgLEUQgZgTilgpg");
	this.shape_116.setTransform(48,-35.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45,-17.1,46.5,15.4).s().p("AhBC8QiNguhCh6QBzgQCekTQDLB4BGABQh3DrgPC7QhBgmiMgug");
	this.shape_117.setTransform(44.4,-36.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-44.9,-17.3,46.6,15.2).s().p("AhbC0QiEgvgvhxQBxgVChkQQDBCHBKgIQiHEMgQCYQhQgtiDgxg");
	this.shape_118.setTransform(42.9,-36.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-44.8,-17.5,46.7,15).s().p("AhtCwQh+gyghhrQBwgYCjkNQC6CRBMgNQiSEigRCAQhbg0h8gwg");
	this.shape_119.setTransform(41.9,-36.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-44.7,-17.6,46.8,14.9).s().p("Ah5CsQh5gxgahoQBwgbCkkMQC2CZBPgSQiaEwgRByQhig3h5gyg");
	this.shape_120.setTransform(41.3,-36.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-44.7,-17.6,46.8,14.9).s().p("Ah5CsQh5gxgZhoQBvgbCkkMQC2CZBOgRQiZEwgSBxQhhg3h5gyg");
	this.shape_121.setTransform(41.2,-36.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-44.8,-17.5,46.7,15).s().p("AhvCvQh9gxgghqQBwgZCjkOQC5CTBNgOQiTElgSB9Qhbg0h8gxg");
	this.shape_122.setTransform(41.8,-36.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-44.9,-17.4,46.6,15.1).s().p("AhfC0QiDgwgshxQBygVChkQQC/CKBLgIQiJEPgRCTQhSgviCgvg");
	this.shape_123.setTransform(42.6,-36.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45,-17.2,46.5,15.3).s().p("AhIC7QiLgvg9h4QBzgSCekRQDJB7BHgBQh7D0gQCxQhEgniKgug");
	this.shape_124.setTransform(43.9,-36.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.4,-16.7,46.1,15.8).s().p("AgLDMQihgqhqiNQB4gFCZkbQDeBYA+AUQhVCogNEDQghgWifgqg");
	this.shape_125.setTransform(47.2,-35.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.6,-16.5,45.9,16).s().p("AAMDTQiogoh8iWQB6AACWkeQDnBJA6AdQhHCKgKEjQgTgPipgog");
	this.shape_126.setTransform(48.6,-35.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.7,-16.4,45.8,16.1).s().p("AAeDYQiugniKicQB7AECUkgQDvA+A3AjQg7B0gKE7QgIgKiwgng");
	this.shape_127.setTransform(49.5,-35.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#460003","#831A2D","#460003"],[0,0.545,1],-45.7,-16.3,45.8,16.2).s().p("AAoDbQiygmiRigQB8AHCTkjQDyA5A2AnQg1BlgJFKQgCgHi0gmg");
	this.shape_128.setTransform(50.1,-35.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65}]}).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76,p:{x:46}}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_76,p:{x:46.2}}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_65}]},1).wait(1));

	// pod_32.png
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(99.2,88.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:99,y:88.1},11,cjs.Ease.get(-1)).to({x:98.8,y:87.6},13,cjs.Ease.get(1)).to({x:99,y:88.1},12,cjs.Ease.get(-1)).to({x:99.2,y:88.6},13,cjs.Ease.get(1)).wait(1).to({y:88.1},4,cjs.Ease.get(-1)).to({x:98.8,y:87.6},5,cjs.Ease.get(1)).to({x:99,y:88.1},5,cjs.Ease.get(-1)).to({x:99.2,y:88.6},5,cjs.Ease.get(1)).wait(1));

	// pod_28.png
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(136.5,56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:136.4,y:55.6},11,cjs.Ease.get(-1)).to({x:136.2,y:55.1},13,cjs.Ease.get(1)).to({x:136.3,y:55.6},12,cjs.Ease.get(-1)).to({x:136.5,y:56.1},13,cjs.Ease.get(1)).wait(1).to({x:136.6,y:55.6},4,cjs.Ease.get(-1)).to({x:136.2,y:55.1},5,cjs.Ease.get(1)).to({x:136.3,y:55.6},5,cjs.Ease.get(-1)).to({x:136.5,y:56.1},5,cjs.Ease.get(1)).wait(1));

	// pod_08.png
	this.golova = new lib.Символ16_1();
	this.golova.parent = this;
	this.golova.setTransform(134,-114.7,1,1,0,0,0,19.3,41.8);

	this.timeline.addTween(cjs.Tween.get(this.golova).to({regY:41.7,rotation:3.8,x:132.7,y:-103.1},11,cjs.Ease.get(-1)).to({regX:19.4,rotation:8.2,x:131.2,y:-89.3},13,cjs.Ease.get(1)).to({rotation:4.3,x:132.6,y:-101.5},12,cjs.Ease.get(-1)).to({regX:19.3,regY:41.8,rotation:0,x:134,y:-114.7},13,cjs.Ease.get(1)).wait(1).to({regY:41.7,rotation:3.8,x:132.9,y:-103.1},4,cjs.Ease.get(-1)).to({regX:19.4,rotation:8.2,x:131.2,y:-89.3},5,cjs.Ease.get(1)).to({rotation:4.3,x:132.6,y:-101.5},5,cjs.Ease.get(-1)).to({regX:19.3,regY:41.8,rotation:0,x:134,y:-114.7},5,cjs.Ease.get(1)).wait(1));

	// pod_23.png
	this.instance_3 = new lib.Символ8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(80.7,76.4,1,1,0,0,0,0,35.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:0.1,rotation:-8.3,x:80.8},11,cjs.Ease.get(-1)).to({rotation:-18.5},13,cjs.Ease.get(1)).to({regY:35.9,scaleX:1,scaleY:1,rotation:-9.5,y:76.6},12,cjs.Ease.get(-1)).to({regX:0,regY:35.8,scaleX:1,scaleY:1,rotation:0,x:80.7,y:76.4},13,cjs.Ease.get(1)).wait(1).to({regX:0.1,rotation:-8.3,x:81},4,cjs.Ease.get(-1)).to({rotation:-18.5,x:80.8},5,cjs.Ease.get(1)).to({regY:35.9,scaleX:1,scaleY:1,rotation:-9.5,y:76.6},5,cjs.Ease.get(-1)).to({regX:0,regY:35.8,scaleX:1,scaleY:1,rotation:0,x:80.7,y:76.4},5,cjs.Ease.get(1)).wait(1));

	// pod_01.png
	this.instance_4 = new lib.Символ22();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-125.7,36.6,1,1,0,0,0,43.8,50.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-1.3,y:36.7},11,cjs.Ease.get(-1)).to({rotation:-3.2,x:-125.6,y:36.6},13,cjs.Ease.get(1)).to({regX:43.6,rotation:-1.5,x:-125.9,y:36.7},12,cjs.Ease.get(-1)).to({regX:43.8,rotation:0,x:-125.7,y:36.6},13,cjs.Ease.get(1)).wait(1).to({rotation:-1.3,x:-125.5,y:36.7},4,cjs.Ease.get(-1)).to({rotation:-3.2,x:-125.6,y:36.6},5,cjs.Ease.get(1)).to({regX:43.6,rotation:-1.5,x:-125.9,y:36.7},5,cjs.Ease.get(-1)).to({regX:43.8,rotation:0,x:-125.7,y:36.6},5,cjs.Ease.get(1)).wait(1));

	// pod_21.png
	this.instance_5 = new lib.Символ10();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-158.5,83.5,1,1,0,0,0,-71.5,53.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-3.3,y:83.4},11,cjs.Ease.get(-1)).to({rotation:-7.2},13,cjs.Ease.get(1)).to({rotation:-3.6,y:83.5},12,cjs.Ease.get(-1)).to({rotation:0},13,cjs.Ease.get(1)).wait(1).to({rotation:-3.3,x:-158.3,y:83.4},4,cjs.Ease.get(-1)).to({rotation:-7.2,x:-158.5},5,cjs.Ease.get(1)).to({rotation:-3.6,y:83.5},5,cjs.Ease.get(-1)).to({rotation:0},5,cjs.Ease.get(1)).wait(1));

	// pod_13.png
	this.instance_6 = new lib.Символ14();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-18.8,23.1,1,1,0,0,0,-4.6,37.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:3.5,x:-28.5,y:20.1},11,cjs.Ease.get(-1)).to({regX:-4.7,rotation:7.8,x:-39.9,y:16.6},13,cjs.Ease.get(1)).to({regX:-4.8,rotation:4,x:-29.9,y:19.8},12,cjs.Ease.get(-1)).to({regX:-4.6,rotation:0,x:-18.8,y:23.1},13,cjs.Ease.get(1)).wait(1).to({rotation:3.5,x:-28.3,y:20.1},4,cjs.Ease.get(-1)).to({regX:-4.7,rotation:7.8,x:-39.9,y:16.6},5,cjs.Ease.get(1)).to({regX:-4.8,rotation:4,x:-29.9,y:19.8},5,cjs.Ease.get(-1)).to({regX:-4.6,rotation:0,x:-18.8,y:23.1},5,cjs.Ease.get(1)).wait(1));

	// pod_05.png
	this.instance_7 = new lib.Символ18();
	this.instance_7.parent = this;
	this.instance_7.setTransform(26.9,-31.5,1,1,0,0,0,-54.1,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:6,x:18.4,y:-31.4},11,cjs.Ease.get(-1)).to({regY:18.9,rotation:13.2,x:8.3,y:-31.6},13,cjs.Ease.get(1)).to({rotation:6.8,x:17.3,y:-31.7},12,cjs.Ease.get(-1)).to({regY:19,rotation:0,x:26.9,y:-31.5},13,cjs.Ease.get(1)).wait(1).to({rotation:6,x:18.6,y:-31.4},4,cjs.Ease.get(-1)).to({regY:18.9,rotation:13.2,x:8.3,y:-31.6},5,cjs.Ease.get(1)).to({rotation:6.8,x:17.3,y:-31.7},5,cjs.Ease.get(-1)).to({regY:19,rotation:0,x:26.9,y:-31.5},5,cjs.Ease.get(1)).wait(1));

	// pod_03.png
	this.instance_8 = new lib.Символ20();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-110.1,16.3,1,1,0,0,0,40.4,58.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-1.5,y:16.4},11,cjs.Ease.get(-1)).to({rotation:-3.4},13,cjs.Ease.get(1)).to({regX:40.3,regY:58,rotation:-1.8,x:-110.2,y:16.3},12,cjs.Ease.get(-1)).to({regX:40.4,regY:58.1,rotation:0,x:-110.1},13,cjs.Ease.get(1)).wait(1).to({rotation:-1.5,x:-109.9,y:16.4},4,cjs.Ease.get(-1)).to({rotation:-3.4,x:-110.1},5,cjs.Ease.get(1)).to({regX:40.3,regY:58,rotation:-1.8,x:-110.2,y:16.3},5,cjs.Ease.get(-1)).to({regX:40.4,regY:58.1,rotation:0,x:-110.1},5,cjs.Ease.get(1)).wait(1));

	// pod_16.png
	this.instance_9 = new lib.Символ12_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(122.1,49.1,1,1,0,0,0,8.1,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1,scaleY:1,rotation:-11},11,cjs.Ease.get(-1)).to({regY:26.6,scaleX:1,scaleY:1,rotation:-24.2,x:122.2},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-12.5},12,cjs.Ease.get(-1)).to({regY:26.5,scaleX:1,scaleY:1,rotation:0,x:122.1},13,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,rotation:-11,x:122.3},4,cjs.Ease.get(-1)).to({regY:26.6,scaleX:1,scaleY:1,rotation:-24.2,x:122.2},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-12.5},5,cjs.Ease.get(-1)).to({regY:26.5,scaleX:1,scaleY:1,rotation:0,x:122.1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-221.5,-209,456.2,313.2);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_37 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(37).call(this.frame_37).wait(37));

	// Слой 2
	this.baba1 = new lib.Символ35();
	this.baba1.parent = this;
	this.baba1.setTransform(-31.3,5.3);

	this.timeline.addTween(cjs.Tween.get(this.baba1).to({x:84.2},37,cjs.Ease.get(1)).to({x:-31.3},36,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-252.8,-203.7,456.2,313.2);


(lib.Символ62_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ49_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,5.5);

	this.instance_2 = new lib.Символ59_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.5,-7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ62_1, new cjs.Rectangle(-10.5,-17.5,21,35), null);


(lib.Символ60_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ55_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.5,5.5);

	this.instance_2 = new lib.Символ57_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1,-9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60_1, new cjs.Rectangle(-10.5,-17.5,21,35), null);


(lib.Символ100 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ99();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ96();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:252.6},37,cjs.Ease.get(1)).to({y:0},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311.7,-114,66,61);


(lib.Символ91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 93
	this.instance = new lib.Символ97();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ91, new cjs.Rectangle(-311.7,-114,66,61), null);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(-3.9,3.3);

	this.instance_1 = new lib.Символ67();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-118.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ71, new cjs.Rectangle(-134.3,-40,265.4,75.5), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ75();
	this.instance.parent = this;
	this.instance.setTransform(328,-25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-19.3},11,cjs.Ease.get(-1)).to({y:-12.6},13,cjs.Ease.get(1)).to({y:-18.6},12,cjs.Ease.get(-1)).to({y:-25.1},13,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ71();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-39.9,-12.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-18.2},11,cjs.Ease.get(-1)).to({y:-24.9},13,cjs.Ease.get(1)).to({y:-18.9},12,cjs.Ease.get(-1)).to({y:-12.4},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.2,-75.4,685.6,113.8);


(lib.Символ63_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ62_1();
	this.instance.parent = this;
	this.instance.setTransform(0.2,13.4,1,1,0,0,0,2.2,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:15.3,rotation:-8.5,x:0.3},9).to({regY:15.4,rotation:0,x:0.2},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-19.5,21,35);


(lib.Символ61_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ60_1();
	this.instance.parent = this;
	this.instance.setTransform(6,14.8,1,1,0,0,0,6,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-27.7,y:14.9},9,cjs.Ease.get(1)).to({rotation:0,y:14.8},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-17.5,21,35);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47_1();
	this.instance.parent = this;
	this.instance.setTransform(0,11.7);

	this.instance_1 = new lib.Символ45_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25,-17.3);

	this.instance_2 = new lib.Символ63_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(16.5,-44.3);

	this.instance_3 = new lib.Символ51_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(21.7,-33.9);

	this.instance_4 = new lib.Символ53_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-31.5,-37.3);

	this.instance_5 = new lib.Символ61_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.3,-55.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-47,-73.2,94,146.4), null);


(lib.Символ94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ89();
	this.instance.parent = this;
	this.instance.setTransform(-2.7,-10.6);
	this.instance.alpha = 0.199;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(23, 23, 1)];
	this.instance.cache(-36,-62,71,124);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 47
	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ94, new cjs.Rectangle(-48.4,-82.6,95.4,155.6), null);


(lib.Символ86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ94();
	this.instance.parent = this;
	this.instance.setTransform(-78.8,30.1,1,1,-18.7,0,0,34.6,43.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6.8,y:30.2},9,cjs.Ease.get(-1)).to({rotation:6.5,x:-78.7,y:30},10,cjs.Ease.get(1)).to({rotation:-6,x:-78.8,y:30.2},10,cjs.Ease.get(-1)).to({rotation:-18.7,y:30.1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.7,-89,137.1,173);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5));

	// Слой 1
	this.instance = new lib.Символ86();
	this.instance.parent = this;
	this.instance.setTransform(125.8,0.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,-88.5,137,173);


(lib.Символ83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.hand = new lib.Символ77();
	this.hand.parent = this;
	this.hand.setTransform(44.1,11,1,1,0,0,0,28.9,0);

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1));

	// Слой 1
	this.candy = new lib.Символ84();
	this.candy.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.candy).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ83, new cjs.Rectangle(-64.3,-77.6,147.5,173), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(8));

	// Слой 8
	this.instance = new lib.Символ109();
	this.instance.parent = this;
	this.instance.setTransform(-221.7,26.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-420.2},7,cjs.Ease.get(1)).wait(1).to({x:-221.7},7,cjs.Ease.get(1)).wait(1));

	// Слой 6
	this.instance_1 = new lib.Символ91();
	this.instance_1.parent = this;
	this.instance_1.setTransform(631.8,-87.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},7).wait(1).to({alpha:1},7).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ40();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-109.9,-154.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16));

	// Слой 5
	this.candyhand = new lib.Символ83();
	this.candyhand.parent = this;
	this.candyhand.setTransform(297,264);

	this.timeline.addTween(cjs.Tween.get(this.candyhand).to({y:80.6},7,cjs.Ease.get(1)).wait(1).to({y:264},7,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.baba = new lib.Символ1();
	this.baba.parent = this;
	this.baba.setTransform(30.8,47.5,0.868,0.868);

	this.timeline.addTween(cjs.Tween.get(this.baba).to({scaleX:1.06,scaleY:1.06,y:77.1},7,cjs.Ease.get(1)).wait(1).to({scaleX:0.87,scaleY:0.87,y:47.5},7,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ36();
	this.instance_3.parent = this;
	this.instance_3.setTransform(96.5,-76.3,1.179,1.179);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:0.1,scaleX:1.49,scaleY:1.49,x:96.7,y:-8.1},7,cjs.Ease.get(1)).wait(1).to({regX:0,scaleX:1.18,scaleY:1.18,x:96.5,y:-76.3},7).wait(1));

	// Слой 7
	this.instance_4 = new lib.Символ103();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-90.8,-187.9,0.847,0.847,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-65.8,y:-382.9,alpha:0},7,cjs.Ease.get(1)).wait(1).to({x:-90.8,y:-187.9,alpha:1},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-516.6,-280,1040.5,639.4);


// stage content:
(lib.podarochek640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		stage.canvas.style.cursor = "none";
		this.priz.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.priz.x = stage.mouseX/window.devicePixelRatio;
			this.priz.y = stage.mouseY/window.devicePixelRatio;
		}
		
		this.cursor = "none";
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
			_this.priz.gotoAndStop(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(9);
			_this.priz.gotoAndStop(0);
		}
		
		//rot
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.rotbtn.addEventListener("mouseover", fl_MouseOverHandler_11);
		
		function fl_MouseOverHandler_11()
		{
			_this.main.baba.baba1.golova.rot.gotoAndPlay(1);
			_this.main.candyhand.candy.gotoAndPlay(1);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.rotbtn.addEventListener("mouseout", fl_MouseOutHandler_22);
		
		function fl_MouseOutHandler_22()
		{
			_this.main.baba.baba1.golova.rot.gotoAndPlay(6);
			_this.main.candyhand.candy.gotoAndPlay(6);
		}
		
		
		//razd
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.razdbtn.addEventListener("mouseover", fl_MouseOverHandler_25);
		
		function fl_MouseOverHandler_25()
		{
		    _this.main.baba.baba1.gotoAndPlay(51);
			_this.main.candyhand.hand.gotoAndPlay(1);
		}
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.razdbtn.addEventListener("mouseout", fl_MouseOutHandler_42);
		
		function fl_MouseOutHandler_42()
		{
			_this.main.baba.baba1.gotoAndPlay(1);
			_this.main.candyhand.hand.gotoAndPlay(6);
		}
		
		//vpr
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.vpr.addEventListener("mouseover", fl_MouseOverHandler_35);
		
		function fl_MouseOverHandler_35()
		{
			_this.main.baba.gotoAndPlay(1);
		}
		
		
		
		
		//vle
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.vle.addEventListener("mouseover", fl_MouseOverHandler_42);
		
		function fl_MouseOverHandler_42()
		{
			_this.main.baba.gotoAndPlay(38);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.vle = new lib.Символ88();
	this.vle.parent = this;
	this.vle.setTransform(508.7,240);
	new cjs.ButtonHelper(this.vle, 0, 1, 2, false, new lib.Символ88(), 3);

	this.vpr = new lib.Символ69();
	this.vpr.parent = this;
	this.vpr.setTransform(163.1,238.1);
	new cjs.ButtonHelper(this.vpr, 0, 1, 2, false, new lib.Символ69(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.vpr},{t:this.vle}]}).wait(1));

	// Слой 4
	this.priz = new lib.Символ100();
	this.priz.parent = this;
	this.priz.setTransform(842.2,39.3);

	this.timeline.addTween(cjs.Tween.get(this.priz).wait(1));

	// Слой 3
	this.rotbtn = new lib.Символ33();
	this.rotbtn.parent = this;
	this.rotbtn.setTransform(384.4,146.3,0.879,0.879);
	new cjs.ButtonHelper(this.rotbtn, 0, 1, 2, false, new lib.Символ33(), 3);

	this.timeline.addTween(cjs.Tween.get(this.rotbtn).wait(1));

	// Actions
	this.razdbtn = new lib.Символ76();
	this.razdbtn.parent = this;
	this.razdbtn.setTransform(355.8,227.3);
	new cjs.ButtonHelper(this.razdbtn, 0, 1, 2, false, new lib.Символ76(), 3);

	this.timeline.addTween(cjs.Tween.get(this.razdbtn).wait(1));

	// Слой 2
	this.instance = new lib.Символ24_1();
	this.instance.parent = this;
	this.instance.setTransform(319.5,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.main = new lib.Символ2();
	this.main.parent = this;
	this.main.setTransform(282.7,197.6,0.879,0.879);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(148.3,-839,915,1505.1);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1483431897278", id:"bg"},
		{src:"images/elk_2uu1.png?1483431897278", id:"elk_2uu1"},
		{src:"images/mous.png?1483431897278", id:"mous"},
		{src:"images/pod_01.png?1483431897278", id:"pod_01"},
		{src:"images/pod_03.png?1483431897278", id:"pod_03"},
		{src:"images/pod_05.png?1483431897278", id:"pod_05"},
		{src:"images/pod_08.png?1483431897278", id:"pod_08"},
		{src:"images/pod_13.png?1483431897278", id:"pod_13"},
		{src:"images/pod_16.png?1483431897278", id:"pod_16"},
		{src:"images/pod_21.png?1483431897278", id:"pod_21"},
		{src:"images/pod_23.png?1483431897278", id:"pod_23"},
		{src:"images/pod_28.png?1483431897278", id:"pod_28"},
		{src:"images/pod_32.png?1483431897278", id:"pod_32"},
		{src:"images/pod_33.png?1483431897278", id:"pod_33"},
		{src:"images/pod_341.png?1483431897278", id:"pod_341"},
		{src:"images/pod_35.png?1483431897278", id:"pod_35"},
		{src:"images/podar211.png?1483431897278", id:"podar211"},
		{src:"images/qwe.png?1483431897278", id:"qwe"},
		{src:"images/ruka_03.png?1483431897278", id:"ruka_03"},
		{src:"images/ruka_06.png?1483431897278", id:"ruka_06"},
		{src:"images/ruka_10.png?1483431897278", id:"ruka_10"},
		{src:"images/ruka_13.png?1483431897278", id:"ruka_13"},
		{src:"images/ruka_16.png?1483431897278", id:"ruka_16"},
		{src:"images/ruka_21.png?1483431897278", id:"ruka_21"},
		{src:"images/ruka_24.png?1483431897278", id:"ruka_24"},
		{src:"images/ruka_28.png?1483431897278", id:"ruka_28"},
		{src:"images/wer.png?1483431897278", id:"wer"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;