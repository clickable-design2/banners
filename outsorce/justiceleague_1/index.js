(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,90);// helper functions:

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


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AHjC+QgTgEgKgJQgKgIgFgNQgFgMAAgRIAAivQAAgQAFgMQAFgNAKgIQAKgJATgEQASgFAaABQAagBASAFQASAEALAJQALAIAEANQAEAMAAAQIAAAxIhLAAIAAgnQAAgMgEgFQgDgDgKAAQgKAAgEADQgDAFAAAMIAACbQAAANADAEQAEADAKABQAKgBADgDQAEgEAAgNIAAgoIBLAAIAAAyQAAARgEAMQgEANgLAIQgLAJgSAEQgSAEgaAAQgaAAgSgEgAo5C+QgSgEgLgJQgKgIgFgNQgFgMAAgRIAAivQAAgQAFgMQAFgNAKgIQALgJASgEQASgFAaABQAagBASAFQASAEALAJQALAIAEANQAFAMAAAQIAAAxIhMAAIAAgnQAAgMgEgFQgDgDgKAAQgKAAgDADQgEAFAAAMIAACbQAAANAEAEQADADAKABQAKgBADgDQAEgEAAgNIAAgoIBMAAIAAAyQAAARgFAMQgEANgLAIQgLAJgSAEQgSAEgaAAQgaAAgSgEgAFVC+IgGgyIgwAAIgGAyIhIAAIAtksIByAAIAtEsgAEmBVIAiAAIgRiHIAAAAgAByC+IAAhrIgjgBQgdAAgNgDQgQgFgIgKQgJgMAAgXIAAiLIBLAAIAAB2QAAARAKgBIAZAAIAAiGIBJAAIAAEsgAhcC+IAAiOIAAAAIgzCOIhGAAIAAksIBHAAIgBCJIABAAIAyiJIBHAAIAAEsgAmUC+IAAksICmAAIAAA3IhaAAIAAA5IBLAAIAAA3IhLAAIAABOIBaAAIAAA3gAiWiCQgOgEgJgKQgKgIgFgNQgEgMAAgQIA6AAQAAAMADAFQAEACAKAAQAKAAADgCQAFgFAAgMIA5AAQAAAQgFAMQgEANgJAIQgKAKgOAEQgOAEgTAAQgTAAgOgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-61.9,-19.4,123.9,38.9), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHjC+QgTgEgKgJQgKgIgFgNQgFgMAAgRIAAivQAAgQAFgMQAFgNAKgIQAKgJATgEQASgFAaABQAagBASAFQASAEALAJQALAIAEANQAEAMAAAQIAAAxIhLAAIAAgnQAAgMgEgFQgDgDgKAAQgKAAgEADQgDAFAAAMIAACbQAAANADAEQAEADAKABQAKgBADgDQAEgEAAgNIAAgoIBLAAIAAAyQAAARgEAMQgEANgLAIQgLAJgSAEQgSAEgaAAQgaAAgSgEgAo5C+QgSgEgLgJQgKgIgFgNQgFgMAAgRIAAivQAAgQAFgMQAFgNAKgIQALgJASgEQASgFAaABQAagBASAFQASAEALAJQALAIAEANQAFAMAAAQIAAAxIhMAAIAAgnQAAgMgEgFQgDgDgKAAQgKAAgDADQgEAFAAAMIAACbQAAANAEAEQADADAKABQAKgBADgDQAEgEAAgNIAAgoIBMAAIAAAyQAAARgFAMQgEANgLAIQgLAJgSAEQgSAEgaAAQgaAAgSgEgAFVC+IgGgyIgwAAIgGAyIhIAAIAtksIByAAIAtEsgAEmBVIAiAAIgRiHIAAAAgAByC+IAAhrIgjgBQgdAAgNgDQgQgFgIgKQgJgMAAgXIAAiLIBLAAIAAB2QAAARAKgBIAZAAIAAiGIBJAAIAAEsgAhcC+IAAiOIAAAAIgzCOIhGAAIAAksIBHAAIgBCJIABAAIAyiJIBHAAIAAEsgAmUC+IAAksICmAAIAAA3IhaAAIAAA5IBLAAIAAA3IhLAAIAABOIBaAAIAAA3gAiWiCQgOgEgJgKQgKgIgFgNQgEgMAAgQIA6AAQAAAMADAFQAEACAKAAQAKAAADgCQAFgFAAgMIA5AAQAAAQgFAMQgEANgJAIQgKAKgOAEQgOAEgTAAQgTAAgOgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-61.9,-19.4,123.9,38.9), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhiBGIAAgUIgsAAIAAAUIgcAAIAAgqIAMAAIAAhhIBMAAIAABhIAMAAIAAAqgAiAAcIAQAAIAAhJIgQAAgABhgCIAAA0IgcAAIAAh3IAgAAIAQA8IABAAIAQg8IAfAAIAAB3IgcAAIABg0IgVA2gAGtAyIAAh3IAeAAIAAAsIAOAAIAOABQAGABADACQAEAEABAFQACAHAAAJIAAAaQAAAFgCAEQgBAEgEADQgGAEgKAAgAHLAcIAKAAQAEAAAAgIIAAgQQAAgHgEAAIgKAAgAEqAyIAAh3IAeAAIAABfIAPAAIAAhfIAdAAIAABfIAPAAIAAhfIAeAAIAAB3gAEBAyIAAh3IAcAAIAAB3gACwAyIAAh3IAeAAIAAAsIAOAAIANABQAGABADACQAEAEACAFQABAHAAAJIAAAaQAAAFgBAEIgGAHQgGAEgJAAgADOAcIAJAAQAFAAAAgIIAAgQQAAgHgFAAIgJAAgAgNAyIAAg3IgUA3IgcAAIAAh3IAcAAIAAA3IAUg3IAbAAIAAB3gAjzAyIAAh3IBCAAIAAAWIgkAAIAAAXIAeAAIAAAWIgeAAIAAAeIAkAAIAAAWgAlIAyIAAh3IAyAAQAJAAAHAEQADADACAEQACAEAAAFIAAASQAAAGgCAFQgCAFgGACIAAABQAGACADAGQABAEAAAHIAAAXQAAAFgBAEIgGAHQgGAEgJAAgAkrAcIAKAAQAFAAAAgIIAAgPQgBgFgEAAIgKAAgAkrgWIAKAAQAEAAABgHIAAgKQAAgIgFAAIgKAAgAltAyIgCgUIgTAAIgDAUIgdAAIASh3IAuAAIASB3gAl/AIIANAAIgGg1IgBAAgAnIAyIAAgyIgQAAIAAAyIgeAAIAAh3IAeAAIAAAtIAQAAIAAgtIAeAAIAAB3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-50.3,-7,100.6,14), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhiBGIAAgUIgsAAIAAAUIgcAAIAAgqIAMAAIAAhhIBMAAIAABhIAMAAIAAAqgAiAAcIAQAAIAAhJIgQAAgABhgCIAAA0IgcAAIAAh3IAgAAIAQA8IABAAIAQg8IAfAAIAAB3IgcAAIABg0IgVA2gAGtAyIAAh3IAeAAIAAAsIAOAAIAOABQAGABADACQAEAEABAFQACAHAAAJIAAAaQAAAFgCAEQgBAEgEADQgGAEgKAAgAHLAcIAKAAQAEAAAAgIIAAgQQAAgHgEAAIgKAAgAEqAyIAAh3IAeAAIAABfIAPAAIAAhfIAdAAIAABfIAPAAIAAhfIAeAAIAAB3gAEBAyIAAh3IAcAAIAAB3gACwAyIAAh3IAeAAIAAAsIAOAAIANABQAGABADACQAEAEACAFQABAHAAAJIAAAaQAAAFgBAEIgGAHQgGAEgJAAgADOAcIAJAAQAFAAAAgIIAAgQQAAgHgFAAIgJAAgAgNAyIAAg3IgUA3IgcAAIAAh3IAcAAIAAA3IAUg3IAbAAIAAB3gAjzAyIAAh3IBCAAIAAAWIgkAAIAAAXIAeAAIAAAWIgeAAIAAAeIAkAAIAAAWgAlIAyIAAh3IAyAAQAJAAAHAEQADADACAEQACAEAAAFIAAASQAAAGgCAFQgCAFgGACIAAABQAGACADAGQABAEAAAHIAAAXQAAAFgBAEIgGAHQgGAEgJAAgAkrAcIAKAAQAFAAAAgIIAAgPQgBgFgEAAIgKAAgAkrgWIAKAAQAEAAABgHIAAgKQAAgIgFAAIgKAAgAltAyIgCgUIgTAAIgDAUIgdAAIASh3IAuAAIASB3gAl/AIIANAAIgGg1IgBAAgAnIAyIAAgyIgQAAIAAAyIgeAAIAAh3IAeAAIAAAtIAQAAIAAgtIAeAAIAAB3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-50.3,-7,100.6,14), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AnLHMIAAuXIOXAAIAAOXg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgxjAaUMAAAg0nMBjHAAAMAAAA0ng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-317.2,-168.4,634.4,336.8), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnCAOIABBqIg4AAIAAjvIA+AAIAhB3IABAAIAhh3IA+AAIAADvIg4AAIABhqIgpBugAj9B4QgOgEgJgGQgIgHgEgKQgEgKAAgNIAAiLQAAgOAEgJQAEgKAIgHQAJgHAOgDQAPgEAUAAQAVAAAPAEQAOADAJAHQAIAHAEAKQADAJAAAOIAACLQAAANgDAKQgEAKgIAHQgJAGgOAEQgPADgVAAQgUAAgPgDgAjkhLQgDAEAAAKIAAB7QAAAKADADQADADAHAAQAIAAADgDQADgDAAgKIAAh7QAAgKgDgEQgDgCgIAAQgHAAgDACgAp9B4QgOgEgJgGQgIgHgEgKQgEgKAAgNIAAiLQAAgOAEgJQAEgKAIgHQAJgHAOgDQAPgEAUAAQAVAAAPAEQAOADAJAHQAIAHAEAKQADAJAAAOIAAAnIg8AAIAAgfQAAgKgDgEQgDgCgIAAQgHAAgDACQgDAEAAAKIAAB7QAAAKADADQADADAHAAQAIAAADgDQADgDAAgKIAAggIA8AAIAAAoQAAANgDAKQgEAKgIAHQgJAGgOAEQgPADgVAAQgUAAgPgDgAIRB4IAAjvIA8AAIAABYIAcAAQASAAAJABQALACAHAGQAHAGAEAMQAEALAAAVIAAA0QAAAKgEAIQgEAHgHAGQgMAJgTAAgAJNBMIAUAAQAIAAAAgQIAAggQAAgQgIAAIgUAAgAGVB4IAAjDIguAAIAAgsICYAAIAAAsIguAAIAADDgADUB4IAAjvICEAAIAAAsIhIAAIAAAuIA8AAIAAArIg8AAIAAA+IBIAAIAAAsgAArB4IAAjvIBmAAQATAAAMAJQAHAFAEAHQAEAIAAALIAAA4QAAAUgEAMQgEAMgHAGQgHAFgLACQgJACgSAAIgcAAIAABUgABngHIAUAAQAIAAAAgQIAAgkQAAgQgIAAIgUAAgAhQB4IAAjDIguAAIAAgsICXAAIAAAsIgtAAIAADDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-67.7,-12.3,135.4,24.8), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnCAOIABBqIg4AAIAAjvIA+AAIAhB3IABAAIAhh3IA+AAIAADvIg4AAIABhqIgpBugAj9B4QgOgEgJgGQgIgHgEgKQgEgKAAgNIAAiLQAAgOAEgJQAEgKAIgHQAJgHAOgDQAPgEAUAAQAVAAAPAEQAOADAJAHQAIAHAEAKQADAJAAAOIAACLQAAANgDAKQgEAKgIAHQgJAGgOAEQgPADgVAAQgUAAgPgDgAjkhLQgDAEAAAKIAAB7QAAAKADADQADADAHAAQAIAAADgDQADgDAAgKIAAh7QAAgKgDgEQgDgCgIAAQgHAAgDACgAp9B4QgOgEgJgGQgIgHgEgKQgEgKAAgNIAAiLQAAgOAEgJQAEgKAIgHQAJgHAOgDQAPgEAUAAQAVAAAPAEQAOADAJAHQAIAHAEAKQADAJAAAOIAAAnIg8AAIAAgfQAAgKgDgEQgDgCgIAAQgHAAgDACQgDAEAAAKIAAB7QAAAKADADQADADAHAAQAIAAADgDQADgDAAgKIAAggIA8AAIAAAoQAAANgDAKQgEAKgIAHQgJAGgOAEQgPADgVAAQgUAAgPgDgAIRB4IAAjvIA8AAIAABYIAcAAQASAAAJABQALACAHAGQAHAGAEAMQAEALAAAVIAAA0QAAAKgEAIQgEAHgHAGQgMAJgTAAgAJNBMIAUAAQAIAAAAgQIAAggQAAgQgIAAIgUAAgAGVB4IAAjDIguAAIAAgsICYAAIAAAsIguAAIAADDgADUB4IAAjvICEAAIAAAsIhIAAIAAAuIA8AAIAAArIg8AAIAAA+IBIAAIAAAsgAArB4IAAjvIBmAAQATAAAMAJQAHAFAEAHQAEAIAAALIAAA4QAAAUgEAMQgEAMgHAGQgHAFgLACQgJACgSAAIgcAAIAABUgABngHIAUAAQAIAAAAgQIAAgkQAAgQgIAAIgUAAgAhQB4IAAjDIguAAIAAgsICXAAIAAAsIgtAAIAADDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-67.7,-12.4,135.4,24.8), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(8.8,1,1).p("AFUAAQAACNhjBjQhkBkiNAAQiMAAhkhkQhjhjAAiNQAAiMBjhkQBkhjCMAAQCNAABkBjQBjBkAACMg");
	this.shape.setTransform(0,-105);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiKisIEVCsIkVCtg");
	this.shape_1.setTransform(4.4,-105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-38.4,-143.4,76.8,76.8), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(8.8,1,1).p("AFUAAQAACNhjBkQhkBjiNAAQiMAAhkhjQhjhkAAiNQAAiMBjhkQBkhjCMAAQCNAABkBjQBjBkAACMg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiKisIEVCsIkVCtg");
	this.shape_1.setTransform(4.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-38.4,-38.4,76.8,76.8), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-37.5,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-37.5,-45,75,90), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AIDAPIABCEIhFAAIAAkqIBMAAIAqCVIAAAAIAqiVIBNAAIAAEqIhFAAIAAiEIgyCJgAFbCTIAAkqIBGAAIAAEqgACRCTIAAkqIBLAAIAABuIAgAAQAXAAAMABQANADAIAHQAKAHAFAPQAEAPAAAZIAABBQAAANgFAKQgEAJgJAGQgPAMgYAAgADcBcIAXAAQAJAAAAgUIAAgoQAAgUgJAAIgXAAgAhACTIAAkqIB6AAQAZAAAPALQAIAGAFAKQAFAKAAANIAAAsQAAARgFAKQgGANgOAHIAAAAQAPAFAGAOQAFAMAAAVIAAA3QAAANgFAKQgEAJgJAGQgQAMgXAAgAAHBcIAZAAQAKAAAAgUIAAglQAAgQgKAAIgZAAgAAHgjIAZAAQAKAAAAgPIAAgaQAAgUgKAAIgZAAgAkTCTIAAkqIB/AAQAYAAAPALQAJAGAEAKQAFAKAAANIAABFQAAAagEAPQgFAOgJAIQgIAHgOACQgLACgXAAIgjAAIAABpgAjIgMIAZAAQAKAAAAgUIAAgsQAAgUgKAAIgZAAgAnQCTIAAkqICkAAIAAA3IhZAAIAAA5IBKAAIAAA2IhKAAIAABNIBZAAIAAA3gAo4CTIAAjuIgoAAIAADuIhLAAIAAkqIC9AAIAAEqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-68.3,-15.1,136.8,30.4), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#FF3B3B","#FFFFFF","#FF8E8E"],[0,0.51,0.525,1],0,-14.9,0,15).s().p("AhbCVIAAkpIB+AAQAYAAAPALQAJAGAEAJQAFAKAAANIAABGQAAAZgEAPQgFAPgJAHQgJAHgOADQgKACgXAAIgiAAIAABogAgQgJIAXAAQALAAAAgUIAAgtQAAgUgLAAIgXAAg");
	this.shape.setTransform(-18.3,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FF3B3B","#FFFFFF","#FF8E8E"],[0,0.51,0.525,1],0,-14.7,0,14.8).s().p("AhRCVIAAkpICjAAIAAA2IhYAAIAAA6IBJAAIAAA1IhJAAIAABNIBYAAIAAA3g");
	this.shape_1.setTransform(-38.2,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#FF3B3B","#FFFFFF","#FF8E8E"],[0,0.51,0.525,1],0,-14.9,0,15).s().p("AAUCVIAAjuIgnAAIAADuIhKAAIAAkpIC8AAIAAEpg");
	this.shape_2.setTransform(-58.9,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#FF3B3B","#FFFFFF","#FF8E8E"],[0,0.51,0.525,1],-0.1,-14.8,-0.1,14.9).s().p("AgiCVIAAkpIBFAAIAAEpg");
	this.shape_3.setTransform(38.2,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#FF3B3B","#FFFFFF","#FF8E8E"],[0,0.51,0.525,1],0.1,-15.2,0.1,15.3).s().p("AgxAPIAACEIhEAAIAAkqIBMAAIApCVIAAAAIAqiVIBNAAIAAEqIhGAAIABiEIgyCJg");
	this.shape_4.setTransform(56.6,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#FF3B3B","#FFFFFF","#FF8E8E"],[0,0.51,0.525,1],0,-14.3,0,14.4).s().p("AhaCVIAAkpIBLAAIAABtIAfAAQAXAAAMACQANACAIAHQAKAIAFAPQAEAOAAAaIAABAQAAANgFAKQgEAJgJAHQgPALgYAAgAgPBeIAVAAQAKAAAAgUIAAgnQAAgUgKAAIgVAAg");
	this.shape_5.setTransform(23.7,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFFF","#FF3B3B","#FFFFFF","#FF8E8E"],[0,0.51,0.525,1],0,-14.9,0,15).s().p("AhaCVIAAkpIB6AAQAZAAAPALQAIAGAFAJQAFAKAAANIAAAsQAAARgFALQgGANgOAGIAAABQAPAEAGAPQAFALAAAVIAAA3QAAANgFAKQgEAJgJAHQgQALgXAAgAgSBeIAYAAQAKAAAAgUIAAgkQAAgQgKAAIgYAAgAgSggIAYAAQAKAAAAgQIAAgaQAAgUgKAAIgYAAg");
	this.shape_6.setTransform(2.6,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-68.3,-15.1,136.8,30.4), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmCARIABCMIhKAAIAAk6IBRAAIAsCdIABAAIAsidIBRAAIAAE6IhJAAIAAiMIg1CSgAiACdQgSgEgMgJQgKgKgGgNQgFgMAAgRIAAi4QAAgRAFgNQAGgNAKgJQAMgIASgFQAUgEAbgBQAbABAUAEQARAFANAIQAJAJAGANQAEANAAARIAAC4QAAARgEAMQgGANgJAKQgNAJgRAEQgUAFgbAAQgbAAgUgFgAhfhjQgFAFAAANIAACiQAAANAFAEQAEAFAKAAQALAAADgFQAEgEAAgNIAAiiQAAgNgEgFQgDgDgLAAQgKAAgEADgAp4CdQgTgEgLgJQgLgKgFgNQgGgMAAgRIAAi4QAAgRAGgNQAFgNALgJQALgIATgFQATgEAbgBQAcABATAEQASAFAMAIQALAJAFANQAEANAAARIAAA0IhPAAIAAgpQAAgNgEgFQgEgDgKAAQgKAAgEADQgEAFAAANIAACiQAAANAEAEQAEAFAKAAQAKAAAEgFQAEgEAAgNIAAgqIBPAAIAAA1QAAARgEAMQgFANgLAKQgMAJgSAEQgTAFgcAAQgbAAgTgFgAJiCdIABiUIgBAAIg1CUIhJAAIAAk6IBKAAIgBCQIABAAIA1iQIBKAAIAAE6gAEFCdIAAk6ICGAAQAagBAPAMQAKAIAFAJQAFALAAAOIAABJQAAAbgFAQQgFAPgKAIQgIAHgPADQgMACgYAAIglAAIAABugAFUgKIAaAAQALAAAAgVIAAgvQAAgWgLAAIgaAAgABiCdIAAkBIg8AAIAAg5IDIAAIAAA5Ig9AAIAAEBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-68.4,-16.2,136.9,32.5), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#FF3B3B","#FFFFFF","#FF8E8E"],[0,0.51,0.525,1],0,-15.5,0,15.6).s().p("Ag0APIABCMIhJAAIAAk6IBRAAIArCdIABAAIAsidIBRAAIAAE6IhJAAIAAiMIg1CSg");
	this.shape.setTransform(-33.4,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FF3B3B","#FFFFFF","#FF8E8E"],[0,0.51,0.525,1],0,-15.8,0,15.8).s().p("AgtCdQgTgEgLgJQgLgJgFgNQgFgNAAgRIAAi3QAAgSAFgNQAFgNALgIQALgJATgFQATgEAaAAQAcAAATAEQASAFAMAJQALAIAFANQAEANAAASIAAAzIhPAAIAAgpQAAgNgEgFQgEgDgKAAQgJAAgEADQgEAFAAANIAACiQAAANAEAFQAEAEAJAAQAKAAAEgEQAEgFAAgNIAAgqIBPAAIAAA1QAAARgEANQgFANgLAJQgMAJgSAEQgTAFgcAAQgaAAgTgFg");
	this.shape_1.setTransform(-58.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#FF3B3B","#FFFFFF","#FF8E8E"],[0,0.51,0.525,1],0,-15.6,0,15.6).s().p("AAaCeIABiUIgBAAIg0CUIhJAAIAAk7IBKAAIgBCRIABAAIA0iRIBJAAIAAE7g");
	this.shape_2.setTransform(58.4,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#FF3B3B","#FFFFFF","#FF8E8E"],[0,0.51,0.525,1],0,-16.1,0,16.1).s().p("AhgCeIAAk7ICFAAQAZAAAQAMQAJAHAFAKQAGALAAANIAABKQgBAbgFAPQgEAQgLAIQgIAHgOADQgMACgYAAIgkAAIAABugAgRgJIAZAAQALAAAAgVIAAgwQAAgVgLAAIgZAAg");
	this.shape_3.setTransform(35.9,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#FF3B3B","#FFFFFF","#FF8E8E"],[0,0.51,0.525,1],0,-15.8,0,15.9).s().p("AgnCeIAAkBIg8AAIAAg6IDHAAIAAA6Ig9AAIAAEBg");
	this.shape_4.setTransform(13.8,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#FF3B3B","#FFFFFF","#FF8E8E"],[0,0.51,0.525,1],0,-16.3,0,16.3).s().p("AgtCdQgTgEgMgJQgKgJgFgNQgFgNgBgRIAAi3QABgSAFgNQAFgNAKgIQAMgJATgFQATgEAbAAQAaAAAUAEQASAFAMAJQALAIAFANQAFANAAASIAAC3QAAARgFANQgFANgLAJQgMAJgSAEQgUAFgaAAQgbAAgTgFgAgNhjQgEAFAAANIAACiQAAANAEAFQAEAEAKAAQAKAAADgEQAEgFABgNIAAiiQgBgNgEgFQgDgDgKAAQgKAAgEADg");
	this.shape_5.setTransform(-8.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-68.4,-16.2,136.9,32.5), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Al3D9IAAq+ILvAAIAAK+Il4DFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-37.6,-45,75.2,90), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B40000","#430000"],[0,1],0.1,-134,0.1,134).s().p("A7BZAMAE2gx/MAxNAAAMAAAAx/g");
	this.shape.setTransform(-16,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-189,-159.9,346,320), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ31();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1);
	this.instance_1.alpha = 0.5;
	this.instance_1.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_1.cache(-52,-9,105,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-52.3,-8,108,22), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 - копия
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(0,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,7.5);
	this.instance_1.alpha = 0.699;
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-64,-21,128,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-64,-13.9,131,45), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ23();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.7);
	this.instance_1.alpha = 0.699;
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-70,-14,139,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-69.7,-12.6,142,32), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ18();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,105);
	this.instance_1.alpha = 0.559;
	this.instance_1.filters = [new cjs.BlurFilter(16, 16, 1)];
	this.instance_1.cache(-40,-145,81,81);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-46.4,-46.4,96,96), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(10));

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.29,scaleY:1.29},9,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.4,-46.4,96,96);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.262},9,cjs.Ease.get(-1)).to({alpha:0.551},10,cjs.Ease.get(1)).to({alpha:0.277},10,cjs.Ease.get(-1)).to({alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-45,75,90);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.8);
	this.instance_1.alpha = 0.699;
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-70,-17,141,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-70.3,-15.4,144,37), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.8);
	this.instance_1.alpha = 0.699;
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-70,-18,141,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-70.4,-16.5,144,40), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 7
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(3.6,15.8,1.257,1.257,0,0,0,0,-15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:-15.1,scaleX:1.13,scaleY:1.13,x:3.7,y:16},12,cjs.Ease.get(0.98)).to({regX:0,regY:-15.2,scaleX:1,scaleY:1,x:3.6,y:15.9},12,cjs.Ease.get(1)).to({regX:0.1,scaleX:1.13,scaleY:1.13,x:3.7,y:15.8},13,cjs.Ease.get(0.98)).to({regX:0,scaleX:1.26,scaleY:1.26,x:3.6},12,cjs.Ease.get(1)).wait(1));

	// Символ 6
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.5,4.3,1,1,0,0,0,0,16.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,scaleX:1.13,scaleY:1.13,x:3.6},12,cjs.Ease.get(0.98)).to({scaleX:1.26,scaleY:1.26},12,cjs.Ease.get(1)).to({scaleX:1.12,scaleY:1.12,x:3.5,y:4.4},13,cjs.Ease.get(0.98)).to({regX:0,scaleX:1,scaleY:1,y:4.3},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.4,-28.4,179,90.4);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.4,7.5,1.059,1,0,0,0,0.2,0);
	this.instance_1.alpha = 0.559;
	this.instance_1.filters = [new cjs.BlurFilter(19, 19, 1)];
	this.instance_1.cache(-40,-47,79,94);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-49.6,-47.5,102,113), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},4,cjs.Ease.get(1)).to({alpha:1},4,cjs.Ease.get(1)).wait(1).to({alpha:0.5},4,cjs.Ease.get(1)).to({alpha:1},4,cjs.Ease.get(1)).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.3,-8,108,22);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.logo = new lib.Символ1();
	this.logo.parent = this;
	this.logo.setTransform(-0.3,-4,1.074,1.074,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.logo).to({scaleX:1.22,scaleY:1.22},4,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07},4,cjs.Ease.get(1)).wait(1).to({scaleX:1.22,scaleY:1.22},4,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07},4,cjs.Ease.get(1)).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.7,-54.3,108,120);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(-6.1,132.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 5
	this.instance_1 = new lib.Символ5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5.6,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 14
	this.instance_2 = new lib.Символ14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-2,-77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 2
	this.instance_3 = new lib.Символ2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(16,0);
	this.instance_3.alpha = 0.691;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-173,-159.9,346,320), null);


(lib.Символ4 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(-16,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-36},2).to({x:316.1},5).wait(1).to({x:-36},5).to({x:-16},2).wait(1));

	// Символ 22
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-179,116.7,1.373,1.373);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:-179.1,y:81.5,alpha:1},4,cjs.Ease.get(1)).wait(1).to({x:-179,y:116.7,alpha:0},4,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// Символ 21
	this.instance_2 = new lib.Символ21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-179.3,-104.9,1.26,1.26,0,0,0,-0.1,-0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({y:-80.9,alpha:1},4,cjs.Ease.get(1)).wait(1).to({y:-104.9,alpha:0},4,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// Слой 5
	this.play_btn = new lib.Символ16();
	this.play_btn.parent = this;
	this.play_btn.setTransform(-178.4,45.6);
	this.play_btn.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.play_btn).to({y:-18.9,alpha:0.711},5).to({y:0,alpha:1},2).wait(1).to({y:-18.9,alpha:0.711},2).to({y:45.6,alpha:0},5).wait(1));

	// Слой 7
	this.instance_3 = new lib.Символ27();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-172.2,3);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0.281},7,cjs.Ease.get(1)).wait(1).to({alpha:0},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-489.4,-165.4,646.4,336.8);


// stage content:
(lib.index = function(mode,startPosition,loop) {
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
		    _this.main.gotoAndPlay(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(9);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn.addEventListener("mouseover", fl_MouseOverHandler_44);
		
		function fl_MouseOverHandler_44()
		{
			_this.main.play_btn.gotoAndPlay(1);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn.addEventListener("mouseout", fl_MouseOutHandler_88);
		
		function fl_MouseOutHandler_88()
		{
			_this.main.play_btn.gotoAndPlay(11);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.btn = new lib.Символ28();
	this.btn.parent = this;
	this.btn.setTransform(300.4,154);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.Символ28(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Слой 1
	this.main = new lib.Символ4();
	this.main.parent = this;
	this.main.setTransform(479,151);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(289.6,135.6,646.4,336.8);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/logo.png?1490960376656", id:"logo"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;