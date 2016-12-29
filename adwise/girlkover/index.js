(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1120,504);


(lib.elka = function() {
	this.initialize(img.elka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,254);


(lib.girl1 = function() {
	this.initialize(img.girl1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,365,208);


(lib.girl2 = function() {
	this.initialize(img.girl2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,84);


(lib.girl3 = function() {
	this.initialize(img.girl3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,85);


(lib.girl4 = function() {
	this.initialize(img.girl4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,88);


(lib.girl5 = function() {
	this.initialize(img.girl5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,21);


(lib.gob1 = function() {
	this.initialize(img.gob1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,193);


(lib.gob2 = function() {
	this.initialize(img.gob2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,39);


(lib.gob3 = function() {
	this.initialize(img.gob3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,52);


(lib.gob4 = function() {
	this.initialize(img.gob4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,50);


(lib.gob5 = function() {
	this.initialize(img.gob5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,150);


(lib.gob6 = function() {
	this.initialize(img.gob6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,61);


(lib.gob7 = function() {
	this.initialize(img.gob7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,52);


(lib.gorl6 = function() {
	this.initialize(img.gorl6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,62);


(lib.gun = function() {
	this.initialize(img.gun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,544,397);


(lib.Ieg = function() {
	this.initialize(img.Ieg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,40);


(lib.mousethinroundedbuttonoutline1 = function() {
	this.initialize(img.mousethinroundedbuttonoutline1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);// helper functions:

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


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Ieg();
	this.instance.parent = this;
	this.instance.setTransform(-19,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-20,38,40);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Ieg();
	this.instance.parent = this;
	this.instance.setTransform(-19,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-20,38,40);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("Agsl0IBZAAIAALpIhZAAg");
	this.shape.setTransform(4.5,37.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AgsF1IAArpIBZAAIAALpg");
	this.shape_1.setTransform(4.5,37.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol55, new cjs.Rectangle(-1,-1,11,76.6), null);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mousethinroundedbuttonoutline1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol53, new cjs.Rectangle(0,0,64,64), null);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.698)").s().p("AjgHHIAAuNIHBAAIAAONg");
	this.shape.setTransform(22.5,45.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol48, new cjs.Rectangle(0,0,45,91), null);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.698)").s().p("AjgHHIAAuNIHBAAIAAONg");
	this.shape.setTransform(22.5,45.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol47, new cjs.Rectangle(0,0,45,91), null);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.698)").s().p("AjgHHIAAuNIHBAAIAAONg");
	this.shape.setTransform(22.5,45.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol46, new cjs.Rectangle(0,0,45,91), null);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.698)").s().p("ABBJRQgcgCgpgIIhGgMQg/gKhQACQgoABhpAHIgIgOQANgIgKgfQgJgeAEggQAEggAPgbQALgTAUgVIANgNQAIgIAEgHQAIgOADgTQABgMAAgXIgBnpQAAgrADgWQAEgkAQgZQAHgLARgUQAQgTAHgLIAOgdQAIgTAGgJQAKgOANgIQAQgIAOAEQACggAXgaQAWgbAggHQAPgCAeAAIBoABQA/ACAWAFQAhAIAvATQAqASAWAOQAgAXAMAdQAIAVAAAuIAAC9QgBAWgHAPQgIASgQABQgTBbgRA5QgFATgIAGQgKAIgSgCQgNgBgXgDIgkgFQgugBgUAXIgSAaQgLAQgMAEQgCBeACBBQABAWADAMQAEASALAKQAHAGAMAGIAUAJQAcAOgCATQAVgCAUAMQATANAHAUQAGAUgJAVQgJAWgTAJIgdBBQgKAZgJAJQgYAbg0AAIgRAAg");
	this.shape.setTransform(37.4,59.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(0,0,74.9,118.7), null);


(lib.Symbol39copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(18.6,1,1).p("AFmAAQAACUhpBpQhpBpiUAAQiTAAhphpQhphpAAiUQAAiTBphpQBphpCTAAQCUAABpBpQBpBpAACTg");
	this.shape.setTransform(35.8,35.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39copy, new cjs.Rectangle(-9.3,-9.3,90.1,90.1), null);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(3,1,1).p("AFmAAQAACUhpBpQhpBpiUAAQiTAAhphpQhphpAAiUQAAiTBphpQBphpCTAAQCUAABpBpQBpBpAACTg");
	this.shape.setTransform(35.8,35.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(-1.5,-1.5,74.6,74.6), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,10.1,0,-10).s().p("AgvCjQgTgFgMgJQgLgJgFgOQgGgNAAgSIAAi9QAAgSAGgNQAFgOALgJQAMgJATgFQAUgFAbAAQAdAAATAFQATAFAMAJQAMAJAFAOQAEANABASIAAA1IhSAAIAAgqQAAgOgFgEQgDgEgLAAQgKAAgDAEQgFAEAAAOIAACnQAAAOAFAEQADAEAKAAQALAAADgEQAFgEAAgOIAAgrIBSAAIAAA2QgBASgEANQgFAOgMAJQgMAJgTAFQgTAFgdAAQgbAAgUgFg");
	this.shape.setTransform(13,39.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,10.4,0,-10.3).s().p("AgoCjIAAkJIg+AAIAAg8IDNAAIAAA8Ig+AAIAAEJg");
	this.shape_1.setTransform(35.6,39.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,10.1,0,-10).s().p("AhkCjIAAlFICKAAQAaAAARANQAJAHAFAKQAGAKAAAPIAABMQgBAbgFAQQgEARgLAIQgIAHgPADQgMACgaAAIglAAIAABygAgSgKIAaAAQALAAAAgVIAAgxQAAgWgLAAIgaAAg");
	this.shape_2.setTransform(58.4,39.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,11,0,-11).s().p("AAeCjIgejyIAAAAIgdDyIhQAAIAylFIB3AAIAyFFg");
	this.shape_3.setTransform(102.1,39.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,9,0,-8.9).s().p("AhYCjIAAlFICyAAIAAA8IhhAAIAAA+IBRAAIAAA7IhRAAIAABUIBhAAIAAA8g");
	this.shape_4.setTransform(80.3,39.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,10.3,0,-10.2).s().p("AhlCjQAEgDAAgNIAAhIQAAgQADgNQAEgMAHgHQAFgGAHgCQgGgDgGgFQgHgIgEgJQgDgLAAgPIAAhLQAAgPAFgKQAFgKAJgIQARgMAaAAICJAAIAAFFIhRAAIAAhzIgVAAQgIABgEAFQgEAGAAALIgBBWQgCAGgFAAgAgQhQIAAAwQAAAWALAAIAaAAIAAhdIgaAAQgLAAAAAXg");
	this.shape_5.setTransform(125.5,39.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,10.4,0,-10.3).s().p("AAbCjIAAiZIAAAAIg2CZIhLAAIAAlFIBMAAIgBCVIABAAIA1iVIBNAAIAAFFg");
	this.shape_6.setTransform(149.3,39.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],-8.1,0,8.2,0).s().p("AgjAfQgPgEgKgKQgKgJgGgNQgEgNAAgSIA+AAQAAAOAEAEQAEAEAKAAQAKAAAFgEQAEgEAAgOIA/AAQAAASgGANQgFANgKAJQgLAKgOAEQgQAGgUAAQgTAAgQgGg");
	this.shape_7.setTransform(149.4,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(2.9,14.1,156.8,42.1), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,10,0,-9.9).s().p("AhiCjIAAlFICFAAQAaAAARANQAKAHAEAKQAGAKAAAPIAAAwQAAASgFALQgHAPgPAHIAAAAQAQAFAGAQQAGANAAAWIAAA8QAAAOgFALQgFAKgKAHQgRANgZAAgAgTBnIAaAAQALAAAAgWIAAgnQgBgSgKAAIgaAAgAgTgjIAaAAQAKAAABgRIAAgcQAAgWgLAAIgaAAg");
	this.shape.setTransform(12.9,39.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(3,23.1,19.9,32.6), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,8.2,0,-8.1).s().p("AhRCjIAAlFICiAAIAAA8IhRAAIAAEJg");
	this.shape.setTransform(11.2,39.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,10.1,0,-10).s().p("AgvCjQgTgFgMgJQgLgJgGgOQgEgNAAgSIAAi9QAAgSAEgNQAGgOALgJQAMgJATgFQATgFAcAAQAcAAAUAFQATAFAMAJQAMAJAEAOQAGANgBASIAAC9QABASgGANQgEAOgMAJQgMAJgTAFQgUAFgcAAQgcAAgTgFgAgOhlQgEAEAAAOIAACnQAAAOAEAEQAFAEAJAAQALAAADgEQAFgEAAgOIAAinQAAgOgFgEQgDgEgLAAQgJAAgFAEg");
	this.shape_1.setTransform(31.8,39.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,10.1,0,-10).s().p("AhkCjIAAlFIDCAAIAAA8IhwAAIAAA2IAlAAQAZAAANACQAOADAKAHQAJAIAFARQAGAQAAAbIAABMQgBAOgFALQgFAKgJAHQgRANgaAAgAgSBnIAbAAQAKAAAAgWIAAgxQAAgVgKAAIgbAAg");
	this.shape_2.setTransform(55,39.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,11,0,-11).s().p("AAeCjIgejyIAAAAIgdDyIhQAAIAylFIB3AAIAyFFg");
	this.shape_3.setTransform(78.3,39.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,10.4,0,-10.3).s().p("AAbCjIAAiZIAAAAIg2CZIhLAAIAAlFIBMAAIgBCVIABAAIA1iVIBNAAIAAFFg");
	this.shape_4.setTransform(102.1,39.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,10.4,0,-10.3).s().p("AAWCjIAAiLIgrAAIAACLIhRAAIAAlFIBRAAIAAB6IArAAIAAh6IBRAAIAAFFg");
	this.shape_5.setTransform(125.9,39.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,10.1,0,-10).s().p("AgvCjQgTgFgMgJQgLgJgFgOQgFgNgBgSIAAi9QABgSAFgNQAFgOALgJQAMgJATgFQATgFAcAAQAdAAATAFQATAFAMAJQAMAJAEAOQAFANABASIAAC9QgBASgFANQgEAOgMAJQgMAJgTAFQgTAFgdAAQgcAAgTgFgAgNhlQgFAEAAAOIAACnQAAAOAFAEQADAEAKAAQALAAADgEQAFgEAAgOIAAinQAAgOgFgEQgDgEgLAAQgKAAgDAEg");
	this.shape_6.setTransform(149.4,39.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],-3.6,0,3.7,0).s().p("AgjAhIAAhAIBIAAIAABAg");
	this.shape_7.setTransform(189.4,52.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,10,0,-9.9).s().p("AhiCjIAAlFICFAAQAaAAARANQAKAHAEAKQAGAKAAAPIAAAwQAAASgFALQgHAPgPAHIAAAAQAQAFAGAQQAGANAAAWIAAA8QAAAOgFALQgFAKgKAHQgRANgZAAgAgTBnIAaAAQALAAAAgWIAAgnQgBgSgKAAIgaAAgAgTgjIAaAAQAKAAABgRIAAgcQAAgWgLAAIgaAAg");
	this.shape_8.setTransform(172.5,39.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,4.1,0,-4.1).s().p("AgeB1IgKjpIBRAAIgJDpg");
	this.shape_9.setTransform(189.4,34.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(3,22.6,190.5,33.6), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,14.3,0,-14.2).s().p("AhDDnQgbgGgRgOQgQgNgHgTQgIgSAAgaIAAkNQAAgaAIgSQAHgTAQgOQARgMAbgHQAbgHAoAAQAoAAAcAHQAbAHARAMQAQAOAIATQAHASAAAaIAABLIh0AAIAAg8QAAgTgHgGQgEgFgQAAQgOAAgFAFQgHAGAAATIAADvQAAATAHAHQAFAEAOAAQAQAAAEgEQAHgHAAgTIAAg/IB0AAIAABOQAAAagHASQgIATgQANQgRAOgbAGQgcAHgoAAQgoAAgbgHg");
	this.shape.setTransform(18.4,55.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,14.7,0,-14.6).s().p("AAfDnIAAlxIg9AAIAAFxIh0AAIAAnNIElAAIAAHNg");
	this.shape_1.setTransform(51.7,55.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,15.7,0,-15.6).s().p("AAuDnIgJhNIhIAAIgKBNIhuAAIBFnNICtAAIBFHNgAgZBFIAzAAIgajPIAAAAg");
	this.shape_2.setTransform(85.3,55.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,15.7,0,-15.6).s().p("AAuDnIgJhNIhIAAIgKBNIhuAAIBFnNICtAAIBFHNgAgZBFIAzAAIgajPIAAAAg");
	this.shape_3.setTransform(151.4,55.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,14.3,0,-14.2).s().p("AhDDnQgbgGgRgOQgQgNgIgTQgGgSAAgaIAAkNQAAgaAGgSQAIgTAQgOQARgMAbgHQAbgHAoAAQAoAAAcAHQAbAHARAMQAQAOAIATQAGASAAAaIAABLIhzAAIAAg8QAAgTgHgGQgEgFgQAAQgOAAgGAFQgGAGAAATIAADvQAAATAGAHQAGAEAOAAQAQAAAEgEQAHgHAAgTIAAg/IBzAAIAABOQAAAagGASQgIATgQANQgRAOgbAGQgcAHgoAAQgoAAgbgHg");
	this.shape_4.setTransform(118.4,55.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],-5.1,0,5.2,0).s().p("AgzAuIAAhbIBnAAIAABbg");
	this.shape_5.setTransform(209.8,74.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,14.7,0,-14.6).s().p("AAmDnIABjaIgBAAIhMDaIhsAAIAAnNIBtAAIgBDTIABAAIBMjTIBsAAIAAHNg");
	this.shape_6.setTransform(185,55.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],-11.5,0,11.6,0).s().p("AgyAtQgVgGgPgOQgOgNgHgTQgHgTAAgZIBYAAQAAAUAGAGQAGAFAPAAQAPAAAFgFQAGgGAAgUIBYAAQAAAZgGATQgIATgOANQgPAOgWAGQgVAHgcAAQgcAAgXgHg");
	this.shape_7.setTransform(185.1,25.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,5.9,0,-5.8).s().p("AgrClIgOlKIB0AAIgOFKg");
	this.shape_8.setTransform(209.8,49.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(4.2,20,211.5,59.7), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gun();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.463,0.463);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,252,183.9), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,12.7,0,-12.7).s().p("Ah+DnIAAnNID9AAIAABUIiKAAIAABZIBzAAIAABUIhzAAIAAB4ICKAAIAABUg");
	this.shape.setTransform(17,55.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,12.7,0,-12.7).s().p("Ah+DnIAAnNID9AAIAABUIiKAAIAABZIBzAAIAABUIhzAAIAAB4ICKAAIAABUg");
	this.shape_1.setTransform(46.3,55.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(4.3,32.8,54.7,46.2), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,14.7,0,-14.6).s().p("AAeDnIAAjFIg8AAIAADFIhzAAIAAnNIBzAAIAACtIA8AAIAAitIB0AAIAAHNg");
	this.shape.setTransform(19,55.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,12.7,0,-12.7).s().p("Ah+DnIAAnNID9AAIAABUIiKAAIAABZIBzAAIAABUIhzAAIAAB4ICKAAIAABUg");
	this.shape_1.setTransform(50.9,55.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,14.3,0,-14.2).s().p("AhDDnQgbgGgRgOQgQgNgIgTQgHgSAAgaIAAkNQAAgaAHgSQAIgTAQgOQARgMAbgHQAcgHAnAAQAoAAAcAHQAbAHARAMQAQAOAHATQAIASAAAaIAABLIh0AAIAAg8QAAgTgHgGQgFgFgPAAQgOAAgFAFQgHAGAAATIAADvQAAATAHAHQAFAEAOAAQAPAAAFgEQAHgHAAgTIAAg/IB0AAIAABOQAAAagIASQgHATgQANQgRAOgbAGQgcAHgoAAQgnAAgcgHg");
	this.shape_2.setTransform(81.5,55.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,14.6,0,-14.6).s().p("Ag5DnIAAl5IhYAAIAAhUIEjAAIAABUIhZAAIAAF5g");
	this.shape_3.setTransform(142.9,55.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,12.7,0,-12.7).s().p("Ah+DnIAAnNID9AAIAABUIiJAAIAABZIByAAIAABUIhyAAIAAB4ICJAAIAABUg");
	this.shape_4.setTransform(112.8,55.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],-5.2,0,5.2,0).s().p("AgzAuIAAhbIBnAAIAABbg");
	this.shape_5.setTransform(169.1,74.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,12.8,0,-12.7).s().p("AhRCpIAAgyQAAgjAMgUQALgSAVgGQARgGAcAAQATAAAAgfIAAg1QAAgTgGgGQgFgFgNAAQgNAAgGAFQgHAHAAASIAAAYIhoAAIAAgnQAAgZAIgTQAHgTAQgOQAPgMAYgHQAZgHAgAAQAhAAAZAHQAYAHAPAMQAQAOAHATQAIATAAAZIAABEQAAAhgHAYQgHAXgNAOQgMAOgUAGQgSAGgZAAIAAAAQgNAAgFAFQgFAHAAASIAAAQg");
	this.shape_6.setTransform(173.1,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(4.3,32.1,181.5,47.6), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,10.2,0,-10.2).s().p("AgUDnIhRjtIBNjgIB4AAIhWDXIBcD2g");
	this.shape.setTransform(26.3,55.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,5.7,0,-5.6).s().p("Ag3DnIAAnNIBvAAIAAHNg");
	this.shape_1.setTransform(10,55.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,14.3,0,-14.2).s().p("AhDDkQgbgHgRgNQgQgNgHgUQgIgSABgaIAAgqIBzAAIAAAbQAAATAGAHQAGAEAOABQAPgBAFgEQAHgHAAgTIAAhCIg1AAQgkAAgRgCQgVgFgNgKQgPgLgGgXQgIgXABgoIAAiqIBzAAIAACqQAAAfAPAAIAmAAIAAjJIBzAAIAAFtQAAAagGASQgIAUgQANQgRANgbAHQgcAHgoAAQgnAAgcgHg");
	this.shape_2.setTransform(54.1,56.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,15.7,0,-15.6).s().p("AAuDnIgJhNIhIAAIgKBNIhuAAIBFnNICtAAIBFHNgAgZBFIAzAAIgajPIAAAAg");
	this.shape_3.setTransform(128.2,55.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#EDBC49","#F3B92E","#F6EC69"],[0.212,0.478,1],0,19.3,0,-19.2).s().p("ABUENIAAhMIioAAIAABMIhsAAIAAihIAuAAIAAl5IEkAAIAAF5IAvAAIAAChgAgeBsIA8AAIAAkcIg8AAg");
	this.shape_4.setTransform(91,59.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(4.3,32.8,139.5,53.9), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.elka();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.42,0.42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,71.5,106.8), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gob4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,56,50), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gob1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,89,193), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gob2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,49,39), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gob3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,24,52), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gob5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,62,150), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gob6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,28,61), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gob7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,29,52), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.girl2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,73,84), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.girl5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,58,21), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.girl3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,49,85), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.girl4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,30,88), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gorl6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,62,62), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.girl1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,365,208), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(2238,0);

	this.instance_1 = new lib.back();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2239,0,1,1,0,0,180);

	this.instance_2 = new lib.back();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,3358,504), null);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgSAfIAAg9IAZAAQAFAAADACIADAEIABAEIAAAPIgBAIQgBADgCABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgHABIgHAAIAAAVgAgDgBIAFAAQAAAAABAAQAAAAAAgBQAAAAABgBQAAgBAAgBIAAgJQAAgCAAAAQgBgBAAgBQAAAAAAAAQgBgBAAAAIgFAAg");
	this.shape.setTransform(-11.4,84.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AAEAfIAAgbIgHAAIAAAbIgQAAIAAg9IAQAAIAAAXIAHAAIAAgXIAQAAIAAA9g");
	this.shape_1.setTransform(-15.9,84.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Symbol55();
	this.instance.parent = this;
	this.instance.setTransform(8.5,84.3,1,0.787,-90,0,0,4.5,37.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol56, new cjs.Rectangle(-21.1,76.7,59.5,13), null);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol53();
	this.instance.parent = this;
	this.instance.setTransform(32,32,1,1,0,0,0,32,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol54, new cjs.Rectangle(0,0,64,64), null);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol54();
	this.instance.parent = this;
	this.instance.setTransform(32,32,1,1,0,0,0,32,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:31.9,rotation:-8.8,x:31.9,y:32.1},4,cjs.Ease.get(-1)).to({regX:32,rotation:-19.7,x:32.1},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-9.8},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:32,y:32},5,cjs.Ease.get(1)).to({regX:31.9,rotation:8.1},5,cjs.Ease.get(-1)).to({regX:32,rotation:16.5,x:32.1},5,cjs.Ease.get(1)).to({regY:31.9,scaleX:1,scaleY:1,rotation:9.8},4,cjs.Ease.get(-1)).to({regY:32,scaleX:1,scaleY:1,rotation:0,x:32},6,cjs.Ease.get(1)).to({scaleX:0.86,scaleY:0.86},5,cjs.Ease.get(-1)).to({scaleX:0.72,scaleY:0.72},5,cjs.Ease.get(1)).to({scaleX:0.86,scaleY:0.86,x:32.1,y:32.1},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:32,y:32},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol48();
	this.instance.parent = this;
	this.instance.setTransform(22.5,45.5,1,1,0,0,0,22.5,45.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol47();
	this.instance.parent = this;
	this.instance.setTransform(22.5,45.5,1,1,0,0,0,22.5,45.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol46();
	this.instance.parent = this;
	this.instance.setTransform(22.5,45.5,1,1,0,0,0,22.5,45.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol44();
	this.instance.parent = this;
	this.instance.setTransform(37.4,59.3,1,1,0,0,0,37.4,59.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.9,118.7);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(3,1,1).p("AE3AHIiYAAAgEk2IAADFAieAHIiYAAAgEByIAADF");
	this.shape.setTransform(35.9,34.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1 copy
	this.instance = new lib.Symbol39copy();
	this.instance.parent = this;
	this.instance.setTransform(35.8,35.8,0.112,0.112,0,0,0,35.8,35.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.8,35.8,0.61,0.61,0,0,0,35.7,35.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(3.4,2,65.2,65.3), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol31();
	this.instance.parent = this;
	this.instance.setTransform(90.6,39.8,0.824,0.824,0,0,0,109.9,48.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(3.4,16.5,174.4,49.2), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol34();
	this.instance.parent = this;
	this.instance.setTransform(90.6,-40.2,1,1,0,0,0,90.6,39.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:39.7,scaleX:1.06,scaleY:1.06},2,cjs.Ease.get(-1)).to({scaleX:1.14,scaleY:1.14,y:-40.3},3,cjs.Ease.get(1)).to({regX:90.5,regY:39.6,scaleX:1.09,scaleY:1.09,y:-40.4},2,cjs.Ease.get(-1)).to({regX:90.6,regY:39.8,scaleX:1,scaleY:1,y:-40.2},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.4,-63.5,174.4,49.2);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ГОБЛИНОВ!
	this.instance = new lib.Symbol35();
	this.instance.parent = this;
	this.instance.setTransform(607.7,190.3,1,1,0,0,0,195.2,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({scaleX:1.12},9).to({scaleX:1},10).wait(12));

	// В
	this.instance_1 = new lib.Symbol36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(605.2,132.3,1,1,0,0,0,23.9,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({scaleX:1.19},9).to({scaleX:1},10).wait(17));

	// СТРЕЛЯЙ
	this.instance_2 = new lib.Symbol37();
	this.instance_2.parent = this;
	this.instance_2.setTransform(575.5,132.3,1,1,0,0,0,161.4,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:161.5,scaleX:1.12,x:575.7},9).to({regX:161.4,scaleX:1,x:575.5},10).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(415.5,107.4,190.5,100.1);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol30();
	this.instance.parent = this;
	this.instance.setTransform(253,185,1,1,0,0,0,253,185);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:184.9,rotation:3.5,x:253.1,y:184.9},9).to({regY:185,rotation:0,x:253,y:185},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252,183.9);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol29();
	this.instance.parent = this;
	this.instance.setTransform(126,91.9,1,1,0,0,0,126,91.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:127.6,y:92.9},2,cjs.Ease.get(-1)).to({x:136,y:97.9},3,cjs.Ease.get(1)).to({x:132,y:95.5},2,cjs.Ease.get(-1)).to({x:126,y:91.9},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252,183.9);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol25();
	this.instance.parent = this;
	this.instance.setTransform(422.6,38.1,1,1,0,0,0,190.5,57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({scaleX:1.09,x:422.7},9).to({scaleX:1,x:422.6},10).wait(22));

	// Layer 2
	this.instance_1 = new lib.Symbol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(212.3,37.1,1,1,0,0,0,60.2,57);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({regX:60.3,scaleX:1.25,x:212.5},9).to({regX:60.2,scaleX:1,x:212.3},10).wait(27));

	// Layer 1
	this.instance_2 = new lib.Symbol24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(136.3,38.3,1,1,0,0,0,146.3,58.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.15},9).to({scaleX:1},10).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,12.8,423.7,53.9);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer 5
	this.instance = new lib.Symbol52();
	this.instance.parent = this;
	this.instance.setTransform(559,36,1,1,0,0,0,32,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-64},9).to({y:36},10).wait(1));

	// Layer 4
	this.instance_1 = new lib.Symbol33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(96.7,27.1,1,1,0,0,0,90.6,39.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:107.1},9).to({y:27.1},10).wait(1));

	// Layer 3
	this.instance_2 = new lib.Symbol32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(389.9,-54.1,0.808,0.808,0,0,0,80.5,35.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:158.9,y:-52.1},9).to({x:389.9,y:-54.1},10).wait(1));

	// Layer 1
	this.instance_3 = new lib.Symbol23();
	this.instance_3.parent = this;
	this.instance_3.setTransform(53.6,42.3,0.796,0.796,0,0,0,73.5,48.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-356.4},9).to({x:53.6},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-76.2,823.9,161.1);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gob7.png
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(82.1,-100.4,1,1,-101.5,0,0,8.3,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:8.4,rotation:-116.3,y:-119.1},9).to({regX:8.3,rotation:-101.5,y:-100.4},10).wait(1));

	// gob2.png
	this.instance_1 = new lib.Symbol17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.8,-59.9,1,1,-58.2,0,0,24.9,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-68.1,x:8.5},9).to({rotation:-58.2,x:-0.8},10).wait(1));

	// gob5.png
	this.instance_2 = new lib.Symbol15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10.7,32.5,1,1,37.5,0,0,29.2,4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:4.9,rotation:-18.1,y:29.7},4).to({regY:4.8,rotation:15.5,y:32.5},5).wait(1).to({rotation:37.5},0).to({regY:4.9,rotation:-18.1,y:29.7},4).to({regY:4.8,rotation:15.5,y:32.5},5).wait(1));

	// Symbol 15
	this.instance_3 = new lib.Symbol15();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-12.4,32.3,1,1,-25.4,0,0,26.5,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:26.6,rotation:35.8,x:-8.4,y:24.9},4).to({rotation:-21.9,x:-10.5,y:34.1},5).wait(1).to({regX:26.5,rotation:-25.4,x:-12.4,y:32.3},0).to({regX:26.6,rotation:35.8,x:-8.4,y:24.9},4).to({rotation:-21.9,x:-10.5,y:34.1},5).wait(1));

	// gob3.png
	this.instance_4 = new lib.Symbol16();
	this.instance_4.parent = this;
	this.instance_4.setTransform(8.9,-60.1,1,1,-94.9,0,0,12.2,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:6,rotation:-106.4,x:18.2,y:-61},9).to({regY:5.9,rotation:-94.9,x:8.9,y:-60.1},10).wait(1));

	// gob6.png
	this.instance_5 = new lib.Symbol14();
	this.instance_5.parent = this;
	this.instance_5.setTransform(46.4,-63.6,1,1,-125.8,0,0,11.6,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-145.3,x:58.5,y:-73.9},9).to({rotation:-125.8,x:46.4,y:-63.6},10).wait(1));

	// gob1.png
	this.instance_6 = new lib.Symbol18();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-11.7,-13.2,1,1,12.7,0,0,53.1,92.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:17.9,x:-11.8},9).to({rotation:12.7,x:-11.7},10).wait(1));

	// gob4.png
	this.instance_7 = new lib.Symbol19();
	this.instance_7.parent = this;
	this.instance_7.setTransform(17.3,-74.5,1,1,11.2,0,0,9.1,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:40.5,rotation:-24.8,y:-74.6},9).to({regY:40.6,rotation:11.2,y:-74.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.2,-129.7,250.2,306.9);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 12
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(241.1,69,1,1,0,0,0,35.5,74);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:35.6,rotation:1,x:242.3,y:69.9},4,cjs.Ease.get(-1)).to({regX:35.5,rotation:5.2,x:246.6,y:72.8},5,cjs.Ease.get(1)).to({regX:35.6,rotation:2.5,x:244,y:71},5,cjs.Ease.get(-1)).to({regX:35.5,rotation:0,x:241.1,y:69},5,cjs.Ease.get(1)).wait(1));

	// Symbol 10
	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(286.6,149.3,1,1,0,0,0,11.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:4.3,x:292.4,y:147.5},4,cjs.Ease.get(-1)).to({regX:11.6,rotation:9.7,x:299.7,y:145.3},5,cjs.Ease.get(1)).to({regX:11.5,rotation:4.8,x:293.1,y:147.3},5,cjs.Ease.get(-1)).to({rotation:0,x:286.6,y:149.3},5,cjs.Ease.get(1)).wait(1));

	// Symbol 11
	this.instance_2 = new lib.Symbol11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(311.6,218.3,1,1,0,0,0,4,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:1.6,rotation:4.3,x:312,y:217.1},4,cjs.Ease.get(-1)).to({rotation:10,x:312.6,y:215.4},5,cjs.Ease.get(1)).to({regY:1.5,rotation:4.8,x:312.1,y:216.8},5,cjs.Ease.get(-1)).to({rotation:0,x:311.6,y:218.3},5,cjs.Ease.get(1)).wait(1));

	// Symbol 9
	this.instance_3 = new lib.Symbol9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(268.3,86.3,1,1,0,0,0,2,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:14.1,rotation:-4.8,x:268.4,y:86.4},4,cjs.Ease.get(-1)).to({rotation:-11,x:268.3,y:86.3},5,cjs.Ease.get(1)).to({rotation:-5.3,y:86.4},5,cjs.Ease.get(-1)).to({regY:14,rotation:0,y:86.3},5,cjs.Ease.get(1)).wait(1));

	// Symbol 8
	this.instance_4 = new lib.Symbol8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(231.3,108.8,1,1,0,0,0,27,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:16.1,scaleY:1,skewX:-0.3,skewY:2.8,x:233.2,y:109.3},4,cjs.Ease.get(-1)).to({scaleY:1.01,skewX:-1,skewY:6.5,x:235.4,y:109.9},5,cjs.Ease.get(1)).to({regX:27.1,scaleY:1,skewX:-0.3,skewY:3.1,x:233.5,y:109.3},5,cjs.Ease.get(-1)).to({regX:27,regY:16,scaleY:1,skewX:0,skewY:0,x:231.3,y:108.8},5,cjs.Ease.get(1)).wait(1));

	// Symbol 7
	this.instance_5 = new lib.Symbol7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(191.8,228.8,1,1,0,0,0,275.5,182);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:275.4,rotation:0.8,x:191.7},4,cjs.Ease.get(-1)).to({regX:275.5,rotation:2,x:191.9},5,cjs.Ease.get(1)).to({regX:275.4,regY:182.1,rotation:0.8,x:191.8,y:228.9},5,cjs.Ease.get(-1)).to({regX:275.5,regY:182,rotation:0,y:228.8},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.7,-5,449.3,259.8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(1120,252,1,1,0,0,0,1120,252);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1096.1},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3358,504);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol56();
	this.instance.parent = this;
	this.instance.setTransform(137.2,1,1.488,0.936,0,0,0,8.6,84.2);

	this.instance_1 = new lib.Symbol56();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3.3,1,1.488,0.936,0,0,0,8.6,84.2);

	this.instance_2 = new lib.Symbol56();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-137,1,1.488,0.936,0,0,0,8.6,84.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181.3,-6,362.7,12.1);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol56();
	this.instance.parent = this;
	this.instance.setTransform(137.2,1,1.488,0.936,0,0,0,8.6,84.2);

	this.instance_1 = new lib.Symbol56();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3.3,1,1.488,0.936,0,0,0,8.6,84.2);

	this.instance_2 = new lib.Symbol56();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-137,1,1.488,0.936,0,0,0,8.6,84.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181.3,-6,362.7,12.1);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(180.8,44.6);

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(180.8,6.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:6.1},9).to({_off:false,y:44.6},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},9).to({_off:true,y:44.6},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,38.5,363.6,12.3);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol42();
	this.instance.parent = this;
	this.instance.setTransform(37.4,59.3,1,1,0,0,0,37.4,59.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol38();
	this.instance.parent = this;
	this.instance.setTransform(34.2,35.8,1.043,1.043,0,0,0,35.6,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:35.8,scaleX:1.38,scaleY:1.38,guide:{path:[34.2,35.7,34.1,34.3,32.3,32.5,20,19.2,5.6,8.1,1.7,5,-1.1,3.3,-4.9,0.9,-8.4,-0.3,-13,-1.9,-21.8,-2.5,-30.9,-3.1,-39.9,-3.2,-43.2,-3.3,-44.8,-2.4,-46.5,-1.4,-47.2,0.9,-47.8,2.5,-48,5.2,-48.6,12.2,-48.5,15.9,-48.4,21.9,-46.9,26.4,-46.1,28.7,-44.6,31.6,-41,38.2,-35.5,43,-31.3,46.7,-23.7,51,-18.5,54,-14.5,55.7,-9.3,57.9,-4.8,58.7,0.9,59.6,7.7,58.7,13,58,20,55.9,23.5,54.9,26.8,53.7]}},29).to({regX:35.8,scaleX:1.13,scaleY:1.13,guide:{path:[26.9,53.7,52.4,44.8,63.4,28.7,64.2,27.6,65.6,25.5,66.8,23.8,68,22.7,70.3,20.6,73.9,19.4,76.5,18.6,80.7,18,88.6,17,96.4,16.8,102.5,16.7,106.5,17.4,112,18.4,115.7,21,126.2,28.1,126.3,48.3,126.3,52.5,125.2,54.5,124.1,56.6,121.1,58.3,117,60.8,111.1,62,107,62.9,100.4,63.3,93.5,63.7,88.7,63.5,82.4,63.2,77.3,61.8,71.5,60.3,64.9,56.7,61.1,54.6,53.4,49.7,52.6,49.2,51.8,48.8]}},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,0.7,68,68.1);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer 1
	this.instance = new lib.Symbol27();
	this.instance.parent = this;
	this.instance.setTransform(126,191.9,1,1,0,0,0,126,91.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:91.9},9).to({y:191.9},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,100,252,183.9);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol43();
	this.instance.parent = this;
	this.instance.setTransform(24.9,-8.8,1,1,0,0,0,37.4,59.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol43(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(75.8,109,1,1,0,0,0,44.5,96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-91,-117.2,250.2,306.9), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(268,226);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(268,199);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:214},4,cjs.Ease.get(-1)).to({_off:true,y:199},5,cjs.Ease.get(1)).wait(8).to({_off:false,y:226},2,cjs.Ease.get(-1)).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},5,cjs.Ease.get(1)).to({rotation:360},8,cjs.Ease.get(-1)).to({_off:true,y:226},2,cjs.Ease.get(-1)).wait(1));

	// Layer 1
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(184.5,113,1,1,0,0,0,182.5,104);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:183.6,y:104.1},4,cjs.Ease.get(-1)).to({x:182.5,y:93},5,cjs.Ease.get(1)).to({x:183.3,y:101},4,cjs.Ease.get(-1)).to({x:184.5,y:113},6,cjs.Ease.get(1)).wait(1));

	// Layer 7
	this.instance_3 = new lib.Symbol21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(393.8,173.4,1,1,0,0,0,35.8,53.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:53.5,rotation:4.3,x:398,y:165.4},4,cjs.Ease.get(-1)).to({regY:53.4,rotation:10,x:403,y:155},5,cjs.Ease.get(1)).to({regX:35.9,regY:53.5,rotation:5.8,x:399.4,y:162.5},4,cjs.Ease.get(-1)).to({regX:35.8,regY:53.4,rotation:0,x:393.8,y:173.4},6,cjs.Ease.get(1)).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("EglfgFrUAosAC9AppgCfIjSJhUgqzACggrmgCCg");
	this.shape.setTransform(157.3,236.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Egs1AEyIHWqdUAosAC9AppgCfIjSJhQ3oBY32AAQzZAAzig6g");
	this.shape_1.setTransform(157.3,236.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(1,1,1).p("Egs1AE1QDtlODjlNUAoyACrApqgCSQhsEwhlEzUgq1ACSgrmgBzg");
	this.shape_2.setTransform(157.5,236.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Egs2AE1QDvlODilNUAoyACrApqgCSQhtEwhkEzQ3+BR4MAAQzEAAzOgyg");
	this.shape_3.setTransform(157.5,236.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(1,1,1).p("Egs3AE9QD3lNDJlIUApEAB3AprgBsQh2EshYE8Ugq7ABogrmgBGg");
	this.shape_4.setTransform(158.1,235.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("Egs3AE9QD3lNDJlIUApEAB3AprgBsQh2EshYE8Q5pA+53AAQxdAAxkgcg");
	this.shape_5.setTransform(158.1,235.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(1,1,1).p("Egs5AFNQEElNCgk/UApiAAfAptgAsQiFEmhDFLUgrFAAkgrmAAEg");
	this.shape_6.setTransform(159.1,233.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("EgmVgE/UApiAAgAptgAsQiFElhDFLUgrFAAkgrmAADQEElMCgk/g");
	this.shape_7.setTransform(159.1,233.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(1,1,1).p("Egs8AFeQEYlLBmkzUAqKgBbApxAAtQibEdglFfUgrUgA7grlABrg");
	this.shape_8.setTransform(160.6,230.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("Egm+gEgUAqKgBbApxAAtQibEdglFfUgrUgA7grlABrQEYlLBmkzg");
	this.shape_9.setTransform(160.6,230.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF0000").ss(1,1,1).p("Egs/AF7QEslJAqknUAq1gDZAp0ACJQixEUgHF0UgrigCegrlADWg");
	this.shape_10.setTransform(162.1,227.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("EgnpgD1UAq1gDZAp0ACJQixEUgHF0UgrigCegrlADWQEslJAqkng");
	this.shape_11.setTransform(162.1,227.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF0000").ss(1,1,1).p("EgtBAGSQE7lHgFkeUArWgE7Ap3ADRQjCENAQGEUgrtgDqgrkAEog");
	this.shape_12.setTransform(163.3,224.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("EgoLgDTUArXgE7Ap2ADRQjCENAQGEUgrtgDqgrkAEoQE8lHgGkeg");
	this.shape_13.setTransform(163.3,224.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF0000").ss(1,1,1).p("EgtDAGiQFHlGgnkXUArugGBAp5AEEQjPEIAhGPUgr1gEggrkAFjg");
	this.shape_14.setTransform(164.1,222.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("EgojgC7UArugGBAp5AEEQjPEIAhGPUgr1gEggrkAFjQFHlGgnkXg");
	this.shape_15.setTransform(164.1,222.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF0000").ss(1,1,1).p("EgtEAGsQFOlFg7kUUAr8gGqAp6AEiQjWEFArGXUgr6gFCgrkAGHg");
	this.shape_16.setTransform(164.6,221.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("EgoxgCtUAr8gGqAp6AEiQjWEFArGXUgr6gFCgrkAGHQFOlFg7kUg");
	this.shape_17.setTransform(164.6,221.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF0000").ss(1,1,1).p("Ego2gCoUAsBgG5Ap6AEtQjYEEAuGZUgr8gFNgrjAGTQFPlFhBkSg");
	this.shape_18.setTransform(164.8,221);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("Ego2gCoUAsBgG5Ap6AEtQjYEEAuGZUgr8gFNgrjAGTQFPlFhBkSg");
	this.shape_19.setTransform(164.8,221);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF0000").ss(1,1,1).p("EgtEAGrQFNlFg6kUUAr8gGoAp6AEhQjWEFArGWUgr6gFAgrkAGFg");
	this.shape_20.setTransform(164.6,221.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("EgoxgCuUAr8gGoAp6AEhQjWEFArGWUgr6gFAgrkAGFQFNlFg6kUg");
	this.shape_21.setTransform(164.6,221.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF0000").ss(1,1,1).p("EgtDAGgQFGlGgkkYUArsgF5Ap5AD+QjOEJAgGOUgr1gEbgrkAFdg");
	this.shape_22.setTransform(164,222.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("EgoggC+UArsgF5Ap3AD+QjNEJAgGOUgr0gEbgrlAFdQFGlGgjkYg");
	this.shape_23.setTransform(164,222.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF0000").ss(1,1,1).p("EgtBAGOQE5lIACkfUArRgErAp3ADFQjAEOANGCUgrsgDegrkAEbg");
	this.shape_24.setTransform(163.1,225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("EgoGgDZUArRgErAp3ADFQjAEOANGCUgrsgDegrkAEbQE5lIACkfg");
	this.shape_25.setTransform(163.1,225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF0000").ss(1,1,1).p("Egs+AF0QEnlJA3kqUAqsgC8ApzAB0QisEWgOFvUgrfgCHgrkAC9g");
	this.shape_26.setTransform(161.8,228.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("EgnggD/UAqsgC8ApzAB0QisEWgOFvUgregCHgrlAC9QEnlJA3kqg");
	this.shape_27.setTransform(161.8,228.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF0000").ss(1,1,1).p("Egs7AFaQEVlLBtk1UAqFgBJApwAAgQiXEegqFcUgrRgAtgrlABcg");
	this.shape_28.setTransform(160.4,231.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("Egm5gEmUAqFgBJApwAAgQiXEegqFcUgrRgAtgrlABcQEVlLBtk1g");
	this.shape_29.setTransform(160.4,231.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF0000").ss(1,1,1).p("Egs5AFNQEGlMCak+UAplAAVApugAkQiHElhAFMUgrGAAcgrmAAMg");
	this.shape_30.setTransform(159.3,233);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("EgmYgE9UApkAAVApugAkQiHElhBFMUgrFAAcgrmAAMQEGlMCbk+g");
	this.shape_31.setTransform(159.3,233);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF0000").ss(1,1,1).p("Egs3AFBQD6lNC+lGUApMABfAprgBaQh5EqhTFAUgq+ABWgrlgAyg");
	this.shape_32.setTransform(158.4,234.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("Egs3AFBQD6lNC+lGUApMABfAprgBaQh5EqhTFAQ7LA27aAAQv9AAwBgSg");
	this.shape_33.setTransform(158.4,234.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF0000").ss(1,1,1).p("Egs2AE5QDxlODXlLUAo7ACTApqgCAQhwEuhfE3Ugq4AB/grmgBeg");
	this.shape_34.setTransform(157.8,235.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("Egs2AE5QDylODWlLUAo7ACTApqgCAQhxEuhfE3Q4mBJ41AAQydAAylgog");
	this.shape_35.setTransform(157.8,235.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF0000").ss(1,1,1).p("Egs1AE0QDslODmlOUAowACyAppgCXQhrEwhmEyUgq0ACXgrmgB4g");
	this.shape_36.setTransform(157.4,236.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("Egs1AE0QDslODmlOUAowACyAppgCXQhrEwhmEyQ31BU4CAAQzNAAzWg1g");
	this.shape_37.setTransform(157.4,236.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 6
	this.instance_4 = new lib.Symbol6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(147.7,374.7,0.591,0.591,0,0,0,44.5,96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:44.6,regY:96.6,x:161,y:361.4},4,cjs.Ease.get(-1)).to({regX:44.5,regY:96.5,x:177.7,y:344.7},5,cjs.Ease.get(1)).to({regX:44.6,regY:96.6,x:165.7,y:356.7},4,cjs.Ease.get(-1)).to({regX:44.5,regY:96.5,x:147.7,y:374.7},6,cjs.Ease.get(1)).wait(1));

	// Layer 5
	this.instance_5 = new lib.Symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-32.3,374.7,0.591,0.591,0,0,0,44.5,96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:44.4,regY:96.6,x:-45.7,y:365.8},4,cjs.Ease.get(-1)).to({regX:44.5,regY:96.5,x:-62.3,y:354.7},5,cjs.Ease.get(1)).to({regX:44.4,regY:96.6,x:-50.3,y:362.8},4,cjs.Ease.get(-1)).to({regX:44.5,regY:96.5,x:-32.3,y:374.7},6,cjs.Ease.get(1)).wait(1));

	// Layer 3
	this.instance_6 = new lib.Symbol6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(355.8,372.4,0.591,0.591,0,0,0,44.5,96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:44.6,regY:96.6,x:359.9,y:363.5},4,cjs.Ease.get(-1)).to({regX:44.5,regY:96.5,x:364.8,y:352.4},5,cjs.Ease.get(1)).to({regX:44.6,regY:96.6,x:361.2,y:360.4},4,cjs.Ease.get(-1)).to({regX:44.5,regY:96.5,x:355.8,y:372.4},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.7,4,576,425.7);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10));

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(217,69.4,0.695,0.695,0,0,0,182.7,103.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:297},8).wait(1).to({x:217},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,0,399.4,295.6);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer 1
	this.girlm = new lib.Symbol45();
	this.girlm.parent = this;
	this.girlm.setTransform(317.3,222.6,1.449,1.449,0,0,0,200.8,147.8);

	this.timeline.addTween(cjs.Tween.get(this.girlm).to({regX:200.7,scaleX:1,scaleY:1,x:221.1,y:127.5},9).to({regX:200.8,scaleX:1.45,scaleY:1.45,x:317.3,y:222.6},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.8,8.3,578.8,428.5);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Custom Mouse Cursor
		Replaces the default mouse cursor with the specified symbol instance.
		*/
		stage.canvas.style.cursor = "none";
		this.kur.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kur.x = stage.mouseX/window.devicePixelRatio;;
			this.kur.y = stage.mouseY/window.devicePixelRatio;;
		}
		//To restore the default mouse pointer, uncomment the following lines:
		//this.removeEventListener("tick", fl_CustomMouseCursor.bind(this));
		//stage.removeChild(kur);
		//stage.canvas.style.cursor = "default";
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		_this.kur1.visible=true;
		_this.kur.visible=false;
		
		function fl_MouseOverHandler_5()
		    {
			    _this.girl.gotoAndPlay(1);
				_this.txt.gotoAndPlay(1);
				_this.gun.gotoAndPlay(1);
				_this.hp.gotoAndPlay(1);
				_this.kur1.visible=false;
				_this.kur.visible=true;
		
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
			    _this.girl.gotoAndPlay(10);
				_this.txt.gotoAndPlay(10);
				_this.gun.gotoAndPlay(10);
				_this.hp.gotoAndPlay(10);
				_this.kur1.visible=true;
				_this.kur.visible=false;
		
		    }
		
			
			
			
			this.addEventListener("tick", fl_CustomMouseCursor1.bind(this));
		
		function fl_CustomMouseCursor1() {
		
		this.gun.x = stage.mouseX / 15;
		
		}
		
		
		this.g1.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
		this.girl.girlm.gotoAndPlay(2);
		}
		
		this.g2.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
		this.girl.girlm.gotoAndPlay(2);
		}
		
		this.g3.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
		this.girl.girlm.gotoAndPlay(2);
		}
		
		
		this.g1.addEventListener("mouseout", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
		this.girl.girlm.gotoAndPlay(11);
		}
		
		this.g2.addEventListener("mouseout", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
		this.girl.girlm.gotoAndPlay(11);
		}
		
		this.g3.addEventListener("mouseout", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
		this.girl.girlm.gotoAndPlay(11);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 8
	this.hp = new lib.Symbol57();
	this.hp.parent = this;
	this.hp.setTransform(211.1,293.9,1,1,0,0,0,180.8,6);

	this.timeline.addTween(cjs.Tween.get(this.hp).wait(1));

	// Layer 3
	this.g1 = new lib.Symbol51();
	this.g1.parent = this;
	this.g1.setTransform(74.5,261,1,1,0,0,0,22.5,45.5);
	new cjs.ButtonHelper(this.g1, 0, 1, 2, false, new lib.Symbol51(), 3);

	this.g2 = new lib.Symbol50();
	this.g2.parent = this;
	this.g2.setTransform(207.5,261,1,1,0,0,0,22.5,45.5);
	new cjs.ButtonHelper(this.g2, 0, 1, 2, false, new lib.Symbol50(), 3);

	this.g3 = new lib.Symbol49();
	this.g3.parent = this;
	this.g3.setTransform(350.5,261,1,1,0,0,0,22.5,45.5);
	new cjs.ButtonHelper(this.g3, 0, 1, 2, false, new lib.Symbol49(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.g3},{t:this.g2},{t:this.g1}]}).wait(1));

	// Layer 7 copy
	this.kur1 = new lib.Symbol41();
	this.kur1.parent = this;
	this.kur1.setTransform(184.6,115.6,1,1,0,0,0,35.8,35.8);

	this.timeline.addTween(cjs.Tween.get(this.kur1).wait(1));

	// Layer 7
	this.kur = new lib.Symbol41();
	this.kur.parent = this;
	this.kur.setTransform(-74.4,172.6,1,1,0,0,0,35.8,35.8);

	this.timeline.addTween(cjs.Tween.get(this.kur).wait(1));

	// Layer 6
	this.gun = new lib.Symbol28();
	this.gun.parent = this;
	this.gun.setTransform(0.8,0.8,1,1,0,0,0,-455.2,-178.2);

	this.timeline.addTween(cjs.Tween.get(this.gun).wait(1));

	// Layer 5
	this.txt = new lib.Symbol22();
	this.txt.parent = this;
	this.txt.setTransform(105.5,58.3,1,1,0,0,0,73.5,48.2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 2
	this.girl = new lib.Symbol20();
	this.girl.parent = this;
	this.girl.setTransform(293.5,186.7,1,1,0,0,0,291.5,134.7);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(550,173.5,1,1,0,0,0,560,252);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(210.3,74,3457.7,567.2);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1483008120059", id:"back"},
		{src:"images/elka.png?1483008120059", id:"elka"},
		{src:"images/girl1.png?1483008120059", id:"girl1"},
		{src:"images/girl2.png?1483008120059", id:"girl2"},
		{src:"images/girl3.png?1483008120059", id:"girl3"},
		{src:"images/girl4.png?1483008120059", id:"girl4"},
		{src:"images/girl5.png?1483008120059", id:"girl5"},
		{src:"images/gob1.png?1483008120059", id:"gob1"},
		{src:"images/gob2.png?1483008120059", id:"gob2"},
		{src:"images/gob3.png?1483008120059", id:"gob3"},
		{src:"images/gob4.png?1483008120059", id:"gob4"},
		{src:"images/gob5.png?1483008120059", id:"gob5"},
		{src:"images/gob6.png?1483008120059", id:"gob6"},
		{src:"images/gob7.png?1483008120059", id:"gob7"},
		{src:"images/gorl6.png?1483008120059", id:"gorl6"},
		{src:"images/gun.png?1483008120059", id:"gun"},
		{src:"images/Ieg.png?1483008120059", id:"Ieg"},
		{src:"images/mousethinroundedbuttonoutline1.png?1483008120059", id:"mousethinroundedbuttonoutline1"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;