(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.mish = function() {
	this.initialize(img.mish);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,200);


(lib.sg1_03 = function() {
	this.initialize(img.sg1_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,63);


(lib.sg1_06 = function() {
	this.initialize(img.sg1_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,79);


(lib.sg1_10 = function() {
	this.initialize(img.sg1_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,93);


(lib.sg1_14 = function() {
	this.initialize(img.sg1_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,58);


(lib.sg1_19 = function() {
	this.initialize(img.sg1_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,63);


(lib.sg2_03 = function() {
	this.initialize(img.sg2_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,108);


(lib.sg2_07 = function() {
	this.initialize(img.sg2_07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,98);


(lib.sg2_10 = function() {
	this.initialize(img.sg2_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,56);


(lib.sg2_14 = function() {
	this.initialize(img.sg2_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,62);


(lib.sg2_17 = function() {
	this.initialize(img.sg2_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,40);


(lib.sg4_02 = function() {
	this.initialize(img.sg4_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,141);


(lib.sg4_05 = function() {
	this.initialize(img.sg4_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,91);


(lib.sg4_10 = function() {
	this.initialize(img.sg4_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,51);


(lib.sg4_13 = function() {
	this.initialize(img.sg4_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,62);


(lib.sg4_16 = function() {
	this.initialize(img.sg4_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,48);


(lib.sg_03 = function() {
	this.initialize(img.sg_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,158);


(lib.sg_06 = function() {
	this.initialize(img.sg_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,50);


(lib.sg_09 = function() {
	this.initialize(img.sg_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,71);


(lib.sg_14 = function() {
	this.initialize(img.sg_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,56);


(lib.sg_18 = function() {
	this.initialize(img.sg_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,59);


(lib.spi = function() {
	this.initialize(img.spi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,304);// helper functions:

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


(lib.Символ96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		playSound("Snare27wav");
	}
	this.frame_21 = function() {
		playSound("Snare27wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(11).call(this.frame_21).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("Kick");
	}
	this.frame_14 = function() {
		playSound("Kick");
	}
	this.frame_28 = function() {
		playSound("Kick");
	}
	this.frame_42 = function() {
		playSound("Kick");
	}
	this.frame_56 = function() {
		playSound("Kick");
	}
	this.frame_70 = function() {
		playSound("Kick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(14).call(this.frame_28).wait(14).call(this.frame_42).wait(14).call(this.frame_56).wait(14).call(this.frame_70).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFLCOQgOgDgOgFQgNgFgLgIQgLgHgLgJQgJgKgIgLQgHgMgGgNQgFgNgDgPQgDgPAAgQQAAgOADgPQACgOAGgNQAFgNAHgMQAIgLAJgKQAKgKALgHQAMgIANgFQAOgFAOgDQAPgDARgBQAPAAAPADQAOADANAFQAOAFAMAHQALAIAKAJQAJAKAIALQAIAMAGANQAFANADAOQADAQAAAPQAAAPgDAPQgDAOgFAOQgGANgIAMQgIALgJAJQgKAKgLAIQgNAIgNAEQgNAGgOACQgPADgPABQgQAAgPgDgAFFhaQgSAHgNANQgMANgHASQgHASAAAVQAAAVAHASQAHASANANQANAOARAHQARAIAUgBQAVABASgIQARgHAMgOQAMgOAHgRQAGgTAAgUQABgVgIgSQgGgSgOgNQgNgNgQgHQgSgIgTABQgUgBgRAIgAneCOQgOgDgOgFQgNgFgMgIQgLgHgKgJQgJgKgJgLQgHgMgFgNQgGgNgCgPQgDgPgBgQQAAgOADgPQADgOAFgNQAGgNAHgMQAIgLAJgKQAJgKAMgHQAMgIANgFQAOgFAOgDQAPgDAQgBQAPAAAPADQAPADANAFQANAFAMAHQALAIAKAJQAKAKAIALQAHAMAGANQAGANACAOQADAQAAAPQAAAPgDAPQgCAOgGAOQgGANgHAMQgIALgKAJQgKAKgLAIQgMAIgNAEQgNAGgPACQgPADgPABQgPAAgPgDgAnlhaQgRAHgNANQgMANgIASQgHASAAAVQAAAVAIASQAGASANANQANAOASAHQARAIATgBQAWABARgIQASgHAMgOQAMgOAGgRQAHgTAAgUQAAgVgHgSQgHgSgNgNQgNgNgRgHQgRgIgUABQgTgBgSAIgAMeCMIAAjJIhYB7IgHAAIhZh6IAADIIgyAAIAAkXIAyAAIBfCDIBbiDIAvAAIAAEXgAA2CMIAAjpIhaAAIAAguIDmAAIAAAuIhbAAIAADpgAj1CMIAAkXIBPgBQAVAAAfAIQAUAHANANQAMAMAGARQAGAPAAASQAAASgHARQgHAPgNANQgNANgSAGQgcAIgQAAIglgBIAABlgAjEhdIAABWIAjACQALAAAJgCQAKgDAHgGQAHgGAEgIQAEgJAAgLQAAgLgDgIQgEgJgGgFQgHgGgKgCQgKgDgMAAgAr0CMIAAjpIhaAAIAAguIDnAAIAAAuIhbAAIAADpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ94, new cjs.Rectangle(-84.7,-14.4,169.4,28.9), null);


(lib.Символ93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFLCOQgOgDgOgFQgNgFgLgIQgLgHgLgJQgJgKgIgLQgHgMgGgNQgFgNgDgPQgDgPAAgQQAAgOADgPQACgOAGgNQAFgNAHgMQAIgLAJgKQAKgKALgHQAMgIANgFQAOgFAOgDQAPgDARgBQAPAAAPADQAOADANAFQAOAFAMAHQALAIAKAJQAJAKAIALQAIAMAGANQAFANADAOQADAQAAAPQAAAPgDAPQgDAOgFAOQgGANgIAMQgIALgJAJQgKAKgLAIQgNAIgNAEQgNAGgOACQgPADgPABQgQAAgPgDgAFFhaQgSAHgNANQgMANgHASQgHASAAAVQAAAVAHASQAHASANANQANAOARAHQARAIAUgBQAVABASgIQARgHAMgOQAMgOAHgRQAGgTAAgUQABgVgIgSQgGgSgOgNQgNgNgQgHQgSgIgTABQgUgBgRAIgAneCOQgOgDgOgFQgNgFgMgIQgLgHgKgJQgJgKgJgLQgHgMgFgNQgGgNgCgPQgDgPgBgQQAAgOADgPQADgOAFgNQAGgNAHgMQAIgLAJgKQAJgKAMgHQAMgIANgFQAOgFAOgDQAPgDAQgBQAPAAAPADQAPADANAFQANAFAMAHQALAIAKAJQAKAKAIALQAHAMAGANQAGANACAOQADAQAAAPQAAAPgDAPQgCAOgGAOQgGANgHAMQgIALgKAJQgKAKgLAIQgMAIgNAEQgNAGgPACQgPADgPABQgPAAgPgDgAnlhaQgRAHgNANQgMANgIASQgHASAAAVQAAAVAIASQAGASANANQANAOASAHQARAIATgBQAWABARgIQASgHAMgOQAMgOAGgRQAHgTAAgUQAAgVgHgSQgHgSgNgNQgNgNgRgHQgRgIgUABQgTgBgSAIgAMeCMIAAjJIhYB7IgHAAIhZh6IAADIIgyAAIAAkXIAyAAIBfCDIBbiDIAvAAIAAEXgAA2CMIAAjpIhaAAIAAguIDmAAIAAAuIhbAAIAADpgAj1CMIAAkXIBPgBQAVAAAfAIQAUAHANANQAMAMAGARQAGAPAAASQAAASgHARQgHAPgNANQgNANgSAGQgcAIgQAAIglgBIAABlgAjEhdIAABWIAjACQALAAAJgCQAKgDAHgGQAHgGAEgIQAEgJAAgLQAAgLgDgIQgEgJgGgFQgHgGgKgCQgKgDgMAAgAr0CMIAAjpIhaAAIAAguIDnAAIAAAuIhbAAIAADpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ93, new cjs.Rectangle(-84.7,-14.4,169.4,28.9), null);


(lib.Символ92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ArkCMQgOgEgNgGQgLgHgJgJQgJgIgGgJIAbghQANAPASAJQATAKARAAQAKAAAJgCQAKgDAHgFQAHgFAEgHQAEgJAAgKQAAgIgDgHQgDgHgGgFQgGgFgJgCQgKgDgMAAIgdAAIAAgtIAbAAQARAAALgKQAGgEADgIQAEgGAAgIQAAgKgDgGQgDgHgGgEQgLgJgSAAQgSgBgNAIQgOAHgMAQIgcghQAHgJAJgJQAKgHAMgGQAMgGANgDQANgEAPAAQASABAPAEQAQAFALALQALAJAGAOQAHAPAAASQAAASgKAQQgEAIgHAHQgIAHgJAGIAAABQAMADAKAFQAIAGAHAKQAFAIADALQADAKAAAMQAAAUgIAPQgIAPgOALQgNALgSAGQgSAFgTABQgSAAgQgFgAkfCMIABgxQAKABAHgDQAKgGAHgPQAGgLAKgqQAFgYAHhKIAEg4ICwAAIAAEXIgwAAIAAjpIhSAAIgFA1QgKBIgGAZQgFATgGAOQgGANgHAKQgHAKgHAGQgIAGgJADQgJADgMAAIgQgBgALxCMIAAjGIiSDGIgrAAIAAkXIAxAAIAADGICTjGIArAAIAAEXgAG1CMIAAjpIh9AAIAADpIgxAAIAAkXIDfAAIAAEXgAAhCMIAAkXICiAAIAAAuIhxAAIAABGIBlAAIAAAtIhlAAIAABIIB1AAIAAAugAlgCMIgdhIIh4AAIgdBIIgyAAIB3kYIArAAIB3EYgAmQAXIgphjIgpBjIBSAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ92, new cjs.Rectangle(-80.3,-14.4,160.6,28.9), null);


(lib.Символ91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArkCMQgOgEgNgGQgLgHgJgJQgJgIgGgJIAbghQANAPASAJQATAKARAAQAKAAAJgCQAKgDAHgFQAHgFAEgHQAEgJAAgKQAAgIgDgHQgDgHgGgFQgGgFgJgCQgKgDgMAAIgdAAIAAgtIAbAAQARAAALgKQAGgEADgIQAEgGAAgIQAAgKgDgGQgDgHgGgEQgLgJgSAAQgSgBgNAIQgOAHgMAQIgcghQAHgJAJgJQAKgHAMgGQAMgGANgDQANgEAPAAQASABAPAEQAQAFALALQALAJAGAOQAHAPAAASQAAASgKAQQgEAIgHAHQgIAHgJAGIAAABQAMADAKAFQAIAGAHAKQAFAIADALQADAKAAAMQAAAUgIAPQgIAPgOALQgNALgSAGQgSAFgTABQgSAAgQgFgAkfCMIABgxQAKABAHgDQAKgGAHgPQAGgLAKgqQAFgYAHhKIAEg4ICwAAIAAEXIgwAAIAAjpIhSAAIgFA1QgKBIgGAZQgFATgGAOQgGANgHAKQgHAKgHAGQgIAGgJADQgJADgMAAIgQgBgALxCMIAAjGIiSDGIgrAAIAAkXIAxAAIAADGICTjGIArAAIAAEXgAG1CMIAAjpIh9AAIAADpIgxAAIAAkXIDfAAIAAEXgAAhCMIAAkXICiAAIAAAuIhxAAIAABGIBlAAIAAAtIhlAAIAABIIB1AAIAAAugAlgCMIgdhIIh4AAIgdBIIgyAAIB3kYIArAAIB3EYgAmQAXIgphjIgpBjIBSAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ91, new cjs.Rectangle(-80.3,-14.4,160.6,28.9), null);


(lib.Символ87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnZCMIABgxQAKABAHgDQAKgGAIgPQAGgMAKgpQAEgYAIhKIAEg4ICwAAIAAEXIgxAAIAAjpIhRAAIgGA1QgJBHgHAaQgFASgGAPQgGANgGAKQgHAKgIAGQgHAGgJADQgKADgMAAIgQgBgAiXCMIAAkXIAxAAIAABgQAPgCAQAAQAZAAAUAGQATAGAMAMQANAMAGAQQAGAQAAAVQAAAWgHASQgIASgOANQgOAMgVAHQgVAHgbAAgAhmACIAABbIAaACQAOAAAKgDQAKgEAHgGQAHgGAEgJQADgJAAgNQAAgLgDgJQgEgIgHgGQgHgFgKgDQgKgDgNAAgAOBCIQgLgDgGgEIARgqQAKAHALAAQAKAAAHgGQAGgEAFgKIAEgJIh8jMIA4AAIBbCbIBDibIAyAAIhgDWQgHAQgIAMQgIAMgJAIQgJAJgLAEQgLAEgMAAQgLAAgLgEgALzCMIhyiQIAACQIgxAAIAAkXIAxAAIAACEIBuiEIA7AAIhzCCIB7CVgADBCMIAAkXIAxAAIAADpIBXAAIAAjpIAxAAIAADpIBXAAIAAjpIAxAAIAAEXgABDCMIAAkXIAxAAIAAEXgAoZCMIgehIIh3AAIgdBIIgyAAIB3kYIArAAIB2EYgApJAWIgphiIgpBiIBSAAgAtXCMIAAjKIhYB8IgIAAIhZh6IAADIIgxAAIAAkXIAyAAIBfCDIBbiDIAvAAIAAEXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ87, new cjs.Rectangle(-108.9,-14.1,218,28.3), null);


(lib.Символ86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnZCMIABgxQAKABAHgDQAKgGAIgPQAGgMAKgpQAEgYAIhKIAEg4ICwAAIAAEXIgxAAIAAjpIhRAAIgGA1QgJBHgHAaQgFASgGAPQgGANgGAKQgHAKgIAGQgHAGgJADQgKADgMAAIgQgBgAiXCMIAAkXIAxAAIAABgQAPgCAQAAQAZAAAUAGQATAGAMAMQANAMAGAQQAGAQAAAVQAAAWgHASQgIASgOANQgOAMgVAHQgVAHgbAAgAhmACIAABbIAaACQAOAAAKgDQAKgEAHgGQAHgGAEgJQADgJAAgNQAAgLgDgJQgEgIgHgGQgHgFgKgDQgKgDgNAAgAOBCIQgLgDgGgEIARgqQAKAHALAAQAKAAAHgGQAGgEAFgKIAEgJIh8jMIA4AAIBbCbIBDibIAyAAIhgDWQgHAQgIAMQgIAMgJAIQgJAJgLAEQgLAEgMAAQgLAAgLgEgALzCMIhyiQIAACQIgxAAIAAkXIAxAAIAACEIBuiEIA7AAIhzCCIB7CVgADBCMIAAkXIAxAAIAADpIBXAAIAAjpIAxAAIAADpIBXAAIAAjpIAxAAIAAEXgABDCMIAAkXIAxAAIAAEXgAoZCMIgehIIh3AAIgdBIIgyAAIB3kYIArAAIB2EYgApJAWIgphiIgpBiIBSAAgAtXCMIAAjKIhYB8IgIAAIhZh6IAADIIgxAAIAAkXIAyAAIBfCDIBbiDIAvAAIAAEXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ86, new cjs.Rectangle(-108.9,-14.1,218,28.3), null);


(lib.Символ84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACNCOQgOgDgOgFQgNgFgLgIQgMgHgJgJQgKgKgHgLQgIgMgFgNQgFgNgDgPQgCgPAAgQQAAgOACgPQACgOAFgNQAFgNAHgLQAHgLAJgLQAJgJALgIQALgIAOgFQANgFAPgDQAQgDARgBQASABAfAHQAWAIAOANIgWAlQgOgKgNgEQgQgGgUABQgTAAgRAGQgRAHgMANQgNANgGASQgHASAAAWQAAAWAHASQAHASANANQANAOARAGQASAIAWgBQASAAAQgFQASgGAOgLIATAlQgHAHgKAFQgJAGgMAFQgiAIgSABQgQAAgPgDgAi3COQgPgDgNgFQgNgFgMgIQgLgHgKgJQgKgKgIgLQgHgMgGgNQgFgNgDgPQgDgPAAgQQAAgOADgPQADgOAFgNQAFgNAIgMQAHgLAKgKQAJgKAMgHQAMgIANgFQANgFAPgDQAPgDAQgBQAPAAAPADQAOADAOAFQANAFAMAHQALAIAKAJQAKAKAIALQAHAMAGANQAFANADAOQADAQAAAPQAAAPgDAPQgDAOgFAOQgGANgHAMQgIALgKAJQgKAKgLAIQgMAIgNAEQgOAGgOACQgPADgPABQgQAAgOgDgAi+haQgRAHgNANQgNANgHASQgHASAAAVQAAAVAIASQAGASANANQANAOARAHQARAIAUgBQAVABASgIQASgHAMgOQAMgOAGgRQAHgTAAgUQAAgVgHgSQgHgSgNgNQgNgNgRgHQgSgIgTABQgUgBgRAIgALjCMIAAjGIiTDGIgrAAIAAkXIAxAAIAADGICTjGIArAAIAAEXgAFuCMIAAjpIhaAAIAAguIDnAAIAAAuIhbAAIAADpgAngCMIAAkXICeAAIAAAuIhtAAIAADpgArNCJQgLgEgFgEIARgqQAKAHALAAQAJAAAHgGQAHgEAEgJIAEgKIh7jMIA3AAIBcCbIBDibIAxAAIhfDWQgHARgIALQgIANgJAHQgJAJgLAEQgLAEgNAAQgLAAgLgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ84, new cjs.Rectangle(-78.8,-14.4,157.6,28.9), null);


(lib.Символ83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACNCOQgOgDgOgFQgNgFgLgIQgMgHgJgJQgKgKgHgLQgIgMgFgNQgFgNgDgPQgCgPAAgQQAAgOACgPQACgOAFgNQAFgNAHgLQAHgLAJgLQAJgJALgIQALgIAOgFQANgFAPgDQAQgDARgBQASABAfAHQAWAIAOANIgWAlQgOgKgNgEQgQgGgUABQgTAAgRAGQgRAHgMANQgNANgGASQgHASAAAWQAAAWAHASQAHASANANQANAOARAGQASAIAWgBQASAAAQgFQASgGAOgLIATAlQgHAHgKAFQgJAGgMAFQgiAIgSABQgQAAgPgDgAi3COQgPgDgNgFQgNgFgMgIQgLgHgKgJQgKgKgIgLQgHgMgGgNQgFgNgDgPQgDgPAAgQQAAgOADgPQADgOAFgNQAFgNAIgMQAHgLAKgKQAJgKAMgHQAMgIANgFQANgFAPgDQAPgDAQgBQAPAAAPADQAOADAOAFQANAFAMAHQALAIAKAJQAKAKAIALQAHAMAGANQAFANADAOQADAQAAAPQAAAPgDAPQgDAOgFAOQgGANgHAMQgIALgKAJQgKAKgLAIQgMAIgNAEQgOAGgOACQgPADgPABQgQAAgOgDgAi+haQgRAHgNANQgNANgHASQgHASAAAVQAAAVAIASQAGASANANQANAOARAHQARAIAUgBQAVABASgIQASgHAMgOQAMgOAGgRQAHgTAAgUQAAgVgHgSQgHgSgNgNQgNgNgRgHQgSgIgTABQgUgBgRAIgALjCMIAAjGIiTDGIgrAAIAAkXIAxAAIAADGICTjGIArAAIAAEXgAFuCMIAAjpIhaAAIAAguIDnAAIAAAuIhbAAIAADpgAngCMIAAkXICeAAIAAAuIhtAAIAADpgArNCJQgLgEgFgEIARgqQAKAHALAAQAJAAAHgGQAHgEAEgJIAEgKIh7jMIA3AAIBcCbIBDibIAxAAIhfDWQgHARgIALQgIANgJAHQgJAJgLAEQgLAEgNAAQgLAAgLgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ83, new cjs.Rectangle(-78.8,-14.4,157.6,28.9), null);


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mish();
	this.instance.parent = this;
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ78, new cjs.Rectangle(-25,-25,50,50), null);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiLBbIAAgcIhrAAIAAAcIgZAAIAAg1IARAAQAIgOAFgQQAEgMACgQQAEgSABgUIABgfIBfAAIAAB/IAVAAIAAA1gAjNglQgCAOgCANIgLAnIgFAJIBAAAIAAhmIgqAAgAoAA/IAAiXIAsgCQANABAKADQAKACAGAGQAGAEADAHQACAHAAAJQAAAGgBAFQgBAFgEAFIgGAIIgJAFIAAABIAKADQAFADAEAFQADAFACAEQACAGABAIQAAALgFAKQgEAIgIAGQgHAGgLACQgKADgNAAgAnlAmIARABQAHAAAGgBQAFgCAEgDQADgDACgEQACgEAAgFQAAgFgCgEQgCgEgDgCIgJgDIgLgBIgTAAgAnlhAIAAAnIASAAQAKAAAGgFQADgDACgDQACgEAAgGQAAgEgCgEQgCgDgDgCQgGgGgLAAgALdA/IAAiYIAbAAIAAA0IARgBQAOABAMADQAKADAIAHQAGAHAEAIQAEAJgBALQAAAMgDAJQgFAKgIAHQgIAHgMAEQgQAEgLAAgAL4gMIAAAyIAPABQAHgBAGgBQAFgCAEgDQAFgEACgFQACgFAAgGQAAgHgCgEQgDgFgEgCQgEgEgFgBQgGgBgHgBgAFHA/IAAiYIAbAAIAAA0IARgBQAOABAKADQALADAHAHQAHAHAEAIQADAJAAALQAAAMgEAJQgEAKgJAHQgHAHgMAEQgLAEgPAAgAFigMIAAAyIAOABQAIAAAGgCQAFgCAEgEQADgDADgFQACgFAAgGQAAgHgCgEQgDgEgDgDQgEgDgFgCQgGgBgHgBgAIDA/IAAiYIAbAAIAAB/IAwAAIAAh/IAaAAIAAB/IAvAAIAAh/IAbAAIAACYgAG+A/IAAiYIAbAAIAACYgAECA/IAAhuIgwBEIgEAAIgwhDIAABtIgbAAIAAiYIAbAAIA0BHIAxhHIAaAAIAACYgAAPA/IAAhsIhPBsIgXAAIAAiYIAbAAIAABsIBPhsIAXAAIAACYgAl6A/IAAiYIBZAAIAAAZIg+AAIAAAnIA4AAIAAAYIg4AAIAAAnIBAAAIAAAZgAozA/IgRgnIhAAAIgRAnIgbAAIBBiYIAYAAIBACYgApNAAIgXg3IgWA3IAtAAgArgA/IAAhAIhGAAIAABAIgbAAIAAiYIAbAAIAAA+IBGAAIAAg+IAaAAIAACYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ76, new cjs.Rectangle(-83.4,-9,166.9,18.1), null);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiLBbIAAgcIhrAAIAAAcIgZAAIAAg1IARAAQAIgOAFgQQAEgMACgQQAEgSABgUIABgfIBfAAIAAB/IAVAAIAAA1gAjNglQgCAOgCANIgLAnIgFAJIBAAAIAAhmIgqAAgAoAA/IAAiXIAsgCQANABAKADQAKACAGAGQAGAEADAHQACAHAAAJQAAAGgBAFQgBAFgEAFIgGAIIgJAFIAAABIAKADQAFADAEAFQADAFACAEQACAGABAIQAAALgFAKQgEAIgIAGQgHAGgLACQgKADgNAAgAnlAmIARABQAHAAAGgBQAFgCAEgDQADgDACgEQACgEAAgFQAAgFgCgEQgCgEgDgCIgJgDIgLgBIgTAAgAnlhAIAAAnIASAAQAKAAAGgFQADgDACgDQACgEAAgGQAAgEgCgEQgCgDgDgCQgGgGgLAAgALdA/IAAiYIAbAAIAAA0IARgBQAOABAMADQAKADAIAHQAGAHAEAIQAEAJgBALQAAAMgDAJQgFAKgIAHQgIAHgMAEQgQAEgLAAgAL4gMIAAAyIAPABQAHgBAGgBQAFgCAEgDQAFgEACgFQACgFAAgGQAAgHgCgEQgDgFgEgCQgEgEgFgBQgGgBgHgBgAFHA/IAAiYIAbAAIAAA0IARgBQAOABAKADQALADAHAHQAHAHAEAIQADAJAAALQAAAMgEAJQgEAKgJAHQgHAHgMAEQgLAEgPAAgAFigMIAAAyIAOABQAIAAAGgCQAFgCAEgEQADgDADgFQACgFAAgGQAAgHgCgEQgDgEgDgDQgEgDgFgCQgGgBgHgBgAIDA/IAAiYIAbAAIAAB/IAwAAIAAh/IAaAAIAAB/IAvAAIAAh/IAbAAIAACYgAG+A/IAAiYIAbAAIAACYgAECA/IAAhuIgwBEIgEAAIgwhDIAABtIgbAAIAAiYIAbAAIA0BHIAxhHIAaAAIAACYgAAPA/IAAhsIhPBsIgXAAIAAiYIAbAAIAABsIBPhsIAXAAIAACYgAl6A/IAAiYIBZAAIAAAZIg+AAIAAAnIA4AAIAAAYIg4AAIAAAnIBAAAIAAAZgAozA/IgRgnIhAAAIgRAnIgbAAIBBiYIAYAAIBACYgApNAAIgXg3IgWA3IAtAAgArgA/IAAhAIhGAAIAABAIgbAAIAAiYIAbAAIAAA+IBGAAIAAg+IAaAAIAACYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ75, new cjs.Rectangle(-83.4,-9,166.9,18.1), null);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],22.1,-147.9,22.1,105.3).s().p("AoqePMARVg8dMAAAA8dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ72, new cjs.Rectangle(-55.5,-193.5,111,387), null);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-393.6,-156.1,1.23,1.024);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ70, new cjs.Rectangle(-393.6,-156.1,787.3,312.3), null);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.parent = this;
	this.instance.setTransform(-71,-51,0.736,0.736);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ66, new cjs.Rectangle(-71,-51,109,147.3), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5.2,1,1).p("AhHjNQAigMAlAAQA4AAAuAYABODMQgkANgqABQgxgBgpgTADHhbQATAqAAAxQAAAmgMAiAjABlQgYgtgBg4QABgpANgj");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(-24.3,-24.3,48.6,48.6), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F000D").s().p("Aj/X0MAAAgvnIH/AAMAAAAvng");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F000D").s().p("AiLX0MAAAgvnIEXAAMAAAAvng");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sg4_16();
	this.instance.parent = this;
	this.instance.setTransform(-10.5,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(-10.5,-24,21,48), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sg4_13();
	this.instance.parent = this;
	this.instance.setTransform(-43.5,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-43.5,-31,87,62), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sg4_10();
	this.instance.parent = this;
	this.instance.setTransform(-17.5,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-17.5,-25.5,35,51), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sg4_05();
	this.instance.parent = this;
	this.instance.setTransform(-30,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-30,-45.5,60,91), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sg4_02();
	this.instance.parent = this;
	this.instance.setTransform(-35,-70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-35,-70.5,70,141), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F000D").s().p("AjHX0MAAAgvnIGPAAMAAAAvng");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F000D").s().p("AjbX0MAAAgvnIG3AAMAAAAvng");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sg2_03();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-46.5,-54,93,108), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sg2_07();
	this.instance.parent = this;
	this.instance.setTransform(-37.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-37.5,-49,75,98), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sg2_10();
	this.instance.parent = this;
	this.instance.setTransform(-17,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-17,-28,34,56), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sg2_14();
	this.instance.parent = this;
	this.instance.setTransform(-42,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-42,-31,84,62), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sg2_17();
	this.instance.parent = this;
	this.instance.setTransform(-19,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-19,-20,38,40), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sg1_19();
	this.instance.parent = this;
	this.instance.setTransform(-40.5,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-40.5,-31.5,81,63), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sg1_14();
	this.instance.parent = this;
	this.instance.setTransform(-17.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-17.5,-29,35,58), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sg1_10();
	this.instance.parent = this;
	this.instance.setTransform(-30.5,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-30.5,-46.5,61,93), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sg1_06();
	this.instance.parent = this;
	this.instance.setTransform(-31,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-31,-39.5,62,79), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sg1_03();
	this.instance.parent = this;
	this.instance.setTransform(-29,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-29,-31.5,58,63), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F000D").s().p("AAeANQgIgEABgGQAAgFACgDQADgDAMgFQANgFAHAIQAJAIgBAFQAAAGgGAEQgHADgJAAQgKAAgGgDgAg8ANQgIgEABgGQAAgFACgDQADgDANgFQAMgFAHAIQAJAIgBAFQAAAGgGAEQgHADgJAAQgKAAgGgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-6.8,-1.6,13.7,3.2), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sg_03();
	this.instance.parent = this;
	this.instance.setTransform(-48,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-48,-79,96,158), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sg_06();
	this.instance.parent = this;
	this.instance.setTransform(-16,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-16,-25,32,50), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sg_09();
	this.instance.parent = this;
	this.instance.setTransform(-30,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-30,-35.5,60,71), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sg_14();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-15.5,-28,31,56), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sg_18();
	this.instance.parent = this;
	this.instance.setTransform(-40,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-40,-29.5,80,59), null);


(lib.Символ90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ93();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ94();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.5);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-87,-16,173,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ90, new cjs.Rectangle(-86.7,-14.9,176,35), null);


(lib.Символ88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ86();
	this.instance.parent = this;
	this.instance.setTransform(10,-0.7);

	this.instance_1 = new lib.Символ87();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10,0.8);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-111,-16,222,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ88, new cjs.Rectangle(-100.9,-15.4,225,35), null);


(lib.Символ85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ83();
	this.instance.parent = this;
	this.instance.setTransform(38,-0.6);

	this.instance_1 = new lib.Символ84();
	this.instance_1.parent = this;
	this.instance_1.setTransform(38,0.6);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-81,-16,162,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ85, new cjs.Rectangle(-42.8,-15.8,164,36), null);


(lib.Символ82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ85();
	this.instance.parent = this;
	this.instance.setTransform(-201.6,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.35,scaleY:1.35},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},12,cjs.Ease.get(1)).to({scaleX:1.24,scaleY:1.24},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).to({scaleX:1.24,scaleY:1.24},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).wait(1));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ88();
	this.instance_1.parent = this;
	this.instance_1.setTransform(171.4,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,regY:-0.1,scaleX:0.8,scaleY:0.8,x:171.5,y:-2},10,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,x:171.4,y:-1.8},12,cjs.Ease.get(1)).to({scaleX:1.19,scaleY:1.19},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).to({scaleX:1.19,scaleY:1.19},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-244.4,-17.8,540.8,36.6);


(lib.Символ79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ78();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.9,y:-6.6},4,cjs.Ease.get(1)).wait(1).to({scaleY:1,y:0},4,cjs.Ease.get(1)).wait(1).to({scaleY:0.9,y:-6.6},4,cjs.Ease.get(1)).wait(1).to({scaleY:1,y:0},4,cjs.Ease.get(1)).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ75();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.2);

	this.instance_1 = new lib.Символ76();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.3);
	this.instance_1.filters = [new cjs.BlurFilter(2, 4, 1)];
	this.instance_1.cache(-85,-11,171,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ77, new cjs.Rectangle(-84.4,-10.8,172,25), null);


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 72
	this.instance = new lib.Символ72();
	this.instance.parent = this;
	this.instance.setTransform(-283.4,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:-9.5,x:-244.2,y:9.4},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-20.5,x:-199.6},17,cjs.Ease.get(1)).to({regY:0,scaleX:1,scaleY:1,rotation:-11,x:-238.2,y:9.5},17,cjs.Ease.get(-1)).to({regX:0,scaleX:1,scaleY:1,rotation:0,x:-283.4},20,cjs.Ease.get(1)).wait(1));

	// Символ 72
	this.instance_1 = new lib.Символ72();
	this.instance_1.parent = this;
	this.instance_1.setTransform(283.5,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:7,x:242.8,y:16.3},15,cjs.Ease.get(-1)).to({rotation:15,x:196.5,y:3.5},17,cjs.Ease.get(1)).to({rotation:8,x:236.5,y:14.5},17,cjs.Ease.get(-1)).to({rotation:0,x:283.5,y:27.5},20,cjs.Ease.get(1)).wait(1));

	// Символ 72
	this.instance_2 = new lib.Символ72();
	this.instance_2.parent = this;
	this.instance_2.setTransform(95.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-0.1,regY:-0.1,rotation:-9.3,x:51.3,y:-27.6},15,cjs.Ease.get(-1)).to({regX:0,rotation:-19.7,x:1.4},17,cjs.Ease.get(1)).to({regX:0.1,regY:-0.2,scaleX:1,scaleY:1,rotation:-10.5,x:44.8,y:-27.7},17,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:95.5,y:-27.5},20,cjs.Ease.get(1)).wait(1));

	// Символ 72
	this.instance_3 = new lib.Символ72();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-142.1,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-0.1,regY:-0.1,rotation:-9,x:-104.6},15,cjs.Ease.get(-1)).to({rotation:-19.5,x:-62.2},17,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-10.5,x:-98.9},17,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-142.1},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-338.9,-221,677.9,442);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ70();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.41},6,cjs.Ease.get(-1)).to({alpha:0},9).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ70();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-393.6,-156.1,787.3,312.3);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ73();
	this.instance.parent = this;
	this.instance.setTransform(-40,-4);
	this.instance.alpha = 0.281;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ71();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ69, new cjs.Rectangle(-393.6,-225,787.3,442), null);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ66();
	this.instance.parent = this;
	this.instance.setTransform(7,84,1,1,0,0,0,0,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,scaleX:1,scaleY:1,rotation:-11.6,y:84.1},14,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-24.2},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-12,x:6.9},15,cjs.Ease.get(-1)).to({regX:0,scaleX:1,scaleY:1,rotation:0,x:7,y:84},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-57,109,147.3);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.parent = this;
	this.instance.setTransform(0.5,0.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5.2,1,1).p("AAAlTIAAD1AAABnIAADtABnAAIDtAAAlTAAID1AA");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(-36.5,-36.5,73.1,73.1), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ91();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ92();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.5);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-82,-16,165,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(-82.3,-14.9,168,35), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-10.5,-24,21,48), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(-43.5,-31,87,62), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-17.5,-25.5,35,51), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-30,-45.5,60,91), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-35,-70.5,70,141), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sg4_13.png
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// sg4_16.png
	this.instance_1 = new lib.Символ52();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.1,3.7,1,1,0,0,0,5.6,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:5.7,rotation:-5.3,x:12.9,y:8.3},14,cjs.Ease.get(-1)).to({regX:5.6,rotation:-10.9,x:12.5,y:13.1},15,cjs.Ease.get(1)).to({regX:5.7,rotation:-5.3,x:12.9,y:8.5},15,cjs.Ease.get(-1)).to({regX:5.6,rotation:0,x:13.1,y:3.7},15,cjs.Ease.get(1)).wait(1));

	// sg4_10.png
	this.instance_2 = new lib.Символ48();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-8.3,96.9,1,1,0,0,0,-8.8,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:5},14,cjs.Ease.get(-1)).to({rotation:10.4},15,cjs.Ease.get(1)).to({rotation:5.1},15,cjs.Ease.get(-1)).to({rotation:0},15,cjs.Ease.get(1)).wait(1));

	// sg4_05.png
	this.instance_3 = new lib.Символ46();
	this.instance_3.parent = this;
	this.instance_3.setTransform(16,48.7,1,1,0,0,0,23,40.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-3.8,x:19.9,y:51.7},14,cjs.Ease.get(-1)).to({rotation:-8.2,x:24,y:54.9},15,cjs.Ease.get(1)).to({rotation:-4,x:20.1,y:51.8},15,cjs.Ease.get(-1)).to({rotation:0,x:16,y:48.7},15,cjs.Ease.get(1)).wait(1));

	// sg4_02.png
	this.instance_4 = new lib.Символ44();
	this.instance_4.parent = this;
	this.instance_4.setTransform(15,-11.9,1,1,0,0,0,-4,63.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-7.1,x:13.9,y:-8},14,cjs.Ease.get(-1)).to({rotation:-15,x:12.8,y:-3.8},15,cjs.Ease.get(1)).to({rotation:-7.3,x:14,y:-7.9},15,cjs.Ease.get(-1)).to({rotation:0,x:15,y:-11.9},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-146,98,298);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 90
	this.instance = new lib.Символ90();
	this.instance.parent = this;
	this.instance.setTransform(162.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.17,scaleY:1.17},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(1));

	// Символ 55
	this.instance_1 = new lib.Символ55();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-167,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-0.1,scaleX:1.24,scaleY:1.24,x:-167.1},7,cjs.Ease.get(-1)).to({regX:0,scaleX:1,scaleY:1,x:-167},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249.3,-14.9,502.4,35);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-46.5,-54,93,108), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-37.5,-49,75,98), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-17,-28,34,56), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-42,-31,84,62), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-19,-20,38,40), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sg2_14.png
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(-5,119);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// sg2_17.png
	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50.4,-75,1,1,0,0,0,-15.4,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-16.1,scaleX:1,scaleY:1.05,rotation:1.3,x:-56,y:-70.6},14,cjs.Ease.get(-1)).to({regX:-15.5,scaleX:1.01,scaleY:1.1,rotation:3,x:-62,y:-65.7},15,cjs.Ease.get(1)).to({regY:-16.2,scaleX:1,scaleY:1.05,rotation:1.5,x:-56.3,y:-70.4},15,cjs.Ease.get(-1)).to({regX:-15.4,regY:-16,scaleX:1,scaleY:1,rotation:0,x:-50.4,y:-75},15,cjs.Ease.get(1)).wait(1));

	// sg2_10.png
	this.instance_2 = new lib.Символ34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-13.6,87.8,1,1,0,0,0,-10.6,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-10.7,regY:18.9,rotation:4.3,y:87.9},14,cjs.Ease.get(-1)).to({regY:18.8,rotation:9,x:-13.7,y:87.8},15,cjs.Ease.get(1)).to({rotation:4.3,x:-13.6,y:87.9},15,cjs.Ease.get(-1)).to({regX:-10.6,rotation:0,y:87.8},15,cjs.Ease.get(1)).wait(1));

	// sg2_07.png
	this.instance_3 = new lib.Символ36();
	this.instance_3.parent = this;
	this.instance_3.setTransform(10.7,47.4,1,1,0,0,0,12.2,45.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:45.5,rotation:-6,x:13.9,y:49.5},14,cjs.Ease.get(-1)).to({rotation:-12.7,x:17.2,y:51.5},15,cjs.Ease.get(1)).to({regY:45.4,rotation:-6.3,x:14,y:49.4},15,cjs.Ease.get(-1)).to({rotation:0,x:10.7,y:47.4},15,cjs.Ease.get(1)).wait(1));

	// sg2_03.png
	this.instance_4 = new lib.Символ38();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-11.1,-46,1,1,0,0,0,-5.6,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-5.7,rotation:2,x:-18,y:-40},14,cjs.Ease.get(-1)).to({regY:47.9,rotation:4.3,x:-25.2,y:-33.7},15,cjs.Ease.get(1)).to({regY:48,rotation:2,x:-18.1,y:-39.7},15,cjs.Ease.get(-1)).to({regX:-5.6,rotation:0,x:-11.1,y:-46},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-148,95,298);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-40.5,-31.5,81,63), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-17.5,-29,35,58), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-30.5,-46.5,61,93), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-31,-39.5,62,79), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-29,-31.5,58,63), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sg1_19.png
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(2.5,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// sg1_14.png
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.5,72.3,1,1,0,0,0,7,20.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:20.4,rotation:-8.1,y:72.4},14,cjs.Ease.get(-1)).to({regY:20.3,rotation:-17,x:10.6,y:72.3},15,cjs.Ease.get(1)).to({regY:20.4,rotation:-8.3,x:10.5,y:72.5},15,cjs.Ease.get(-1)).to({regY:20.3,rotation:0,y:72.3},15,cjs.Ease.get(1)).wait(1));

	// sg1_10.png
	this.instance_2 = new lib.Символ23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-12.1,31.7,1,1,0,0,0,-22.6,45.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:45.1,rotation:3,x:-17.1,y:35.4},14,cjs.Ease.get(-1)).to({rotation:6.2,x:-22.5,y:39.5},15,cjs.Ease.get(1)).to({rotation:3,x:-17.4,y:35.6},15,cjs.Ease.get(-1)).to({regY:45.2,rotation:0,x:-12.1,y:31.7},15,cjs.Ease.get(1)).wait(1));

	// sg1_06.png
	this.instance_3 = new lib.Символ21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-15.8,-46.9,1,1,0,0,0,-4.8,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:4.5,x:-16.1,y:-42.7},14,cjs.Ease.get(-1)).to({regX:-4.9,rotation:9.4,x:-16.6,y:-38.1},15,cjs.Ease.get(1)).to({rotation:4.6,x:-16.2,y:-42.4},15,cjs.Ease.get(-1)).to({regX:-4.8,rotation:0,x:-15.8,y:-46.9},15,cjs.Ease.get(1)).wait(1));

	// sg1_03.png
	this.instance_4 = new lib.Символ19();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-24.8,-107.9,1,1,0,0,0,-9.8,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-9.9,rotation:7.1,x:-20.4,y:-103.7},14,cjs.Ease.get(-1)).to({regX:-9.8,rotation:15,x:-15.6,y:-99.2},15,cjs.Ease.get(1)).to({rotation:7.3,x:-20.2,y:-103.5},15,cjs.Ease.get(-1)).to({rotation:0,x:-24.8,y:-107.9},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-162,87,297);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance.cache(-9,-4,18,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-7.8,-2.6,18,8), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-16,-25,32,50), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-30,-35.5,60,71), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-15.5,-28,31,56), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-40,-29.5,80,59), null);


(lib.Символ81 = function(mode,startPosition,loop) {
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

	// Слой 3
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(2.8,58.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-6.9,alpha:1},6).wait(1).to({y:58.1,alpha:0},6).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ82();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-106},6,cjs.Ease.get(1)).wait(1).to({y:0},6,cjs.Ease.get(1)).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ96();
	this.instance_2.parent = this;
	this.instance_2.setTransform(52.5,80.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).wait(7));

	// Слой 4
	this.instance_3 = new lib.Символ95();
	this.instance_3.parent = this;
	this.instance_3.setTransform(16.5,101.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-246.6,-17.8,544.5,97.9);


(lib.Символ80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ77();
	this.instance.parent = this;
	this.instance.setTransform(-16.3,5.3);

	this.instance_1 = new lib.Символ79();
	this.instance_1.parent = this;
	this.instance_1.setTransform(82,0,0.71,0.71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ80, new cjs.Rectangle(-100.7,-17.7,200.5,37.2), null);


(lib.Символ74 = function(mode,startPosition,loop) {
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

	// Слой 1 - копия
	this.instance = new lib.Символ80();
	this.instance.parent = this;
	this.instance.setTransform(-12.2,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,scaleX:0.83,x:-29.7},2).to({regX:0,scaleX:1,x:244.2},3).wait(1).to({regX:-0.1,scaleX:0.83,x:-29.7},3).to({regX:0,scaleX:1,x:-12.2},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.9,-22.7,200.5,37.2);


(lib.Символ68 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ67();
	this.instance.parent = this;
	this.instance.setTransform(-7,220);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-8},3).to({y:6},2).wait(1).to({y:-8},2).to({y:220},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,163,109,147.3);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ59();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.72,scaleY:0.72,rotation:45},11,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.5,-36.5,73.1,73.1);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiwATIAAhTIFhAAIAABTg");
	var mask_graphics_1 = new cjs.Graphics().p("AiwAgIAAhUIFhAAIAABUg");
	var mask_graphics_2 = new cjs.Graphics().p("AiwAqIAAhTIFhAAIAABTg");
	var mask_graphics_3 = new cjs.Graphics().p("AiwAqIAAhTIFhAAIAABTg");
	var mask_graphics_4 = new cjs.Graphics().p("AiwAqIAAhTIFhAAIAABTg");
	var mask_graphics_5 = new cjs.Graphics().p("AiwAgIAAhUIFhAAIAABUg");
	var mask_graphics_6 = new cjs.Graphics().p("AiwATIAAhTIFhAAIAABTg");
	var mask_graphics_7 = new cjs.Graphics().p("AiwAgIAAhUIFhAAIAABUg");
	var mask_graphics_8 = new cjs.Graphics().p("AiwAqIAAhTIFhAAIAABTg");
	var mask_graphics_9 = new cjs.Graphics().p("AiwAqIAAhTIFhAAIAABTg");
	var mask_graphics_10 = new cjs.Graphics().p("AiwAqIAAhTIFhAAIAABTg");
	var mask_graphics_11 = new cjs.Graphics().p("AiwAgIAAhUIFhAAIAABUg");
	var mask_graphics_12 = new cjs.Graphics().p("AiwATIAAhTIFhAAIAABTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-0.6,y:-6.5}).wait(1).to({graphics:mask_graphics_1,x:-0.6,y:-5.3}).wait(1).to({graphics:mask_graphics_2,x:-0.6,y:-3.8}).wait(1).to({graphics:mask_graphics_3,x:-0.6,y:-1.3}).wait(1).to({graphics:mask_graphics_4,x:-0.6,y:-3.8}).wait(1).to({graphics:mask_graphics_5,x:-0.6,y:-5.3}).wait(1).to({graphics:mask_graphics_6,x:-0.6,y:-6.5}).wait(1).to({graphics:mask_graphics_7,x:-0.6,y:-5.3}).wait(1).to({graphics:mask_graphics_8,x:-0.6,y:-3.8}).wait(1).to({graphics:mask_graphics_9,x:-0.6,y:-1.3}).wait(1).to({graphics:mask_graphics_10,x:-0.6,y:-3.8}).wait(1).to({graphics:mask_graphics_11,x:-0.6,y:-5.3}).wait(1).to({graphics:mask_graphics_12,x:-0.6,y:-6.5}).wait(18));

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(-18.4,-55.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-48,-79,96,158), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sg_18.png
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,122.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// sg_03.png
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26,8,1,1,0,0,0,26.5,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:2.8,x:23.5,y:14.3},14,cjs.Ease.get(-1)).to({regX:26.6,rotation:6,x:20.9,y:20.9},15,cjs.Ease.get(1)).to({rotation:2.8,x:23.5,y:14.5},15,cjs.Ease.get(-1)).to({regX:26.5,rotation:0,x:26,y:8},15,cjs.Ease.get(1)).wait(1));

	// sg_09.png
	this.instance_2 = new lib.Символ8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-15,49,1,1,0,0,0,-15.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-15.6,rotation:4.3,x:-20,y:52.5},14,cjs.Ease.get(-1)).to({regX:-15.5,rotation:9.2,x:-25.2,y:56.2},15,cjs.Ease.get(1)).to({regY:29.6,rotation:4.5,x:-20.1,y:52.8},15,cjs.Ease.get(-1)).to({regY:29.5,rotation:0,x:-15,y:49},15,cjs.Ease.get(1)).wait(1));

	// sg_06.png
	this.instance_3 = new lib.Символ10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-25.5,6.6,1,1,0,0,0,0,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:2.5,x:-26.9,y:9.5},14,cjs.Ease.get(-1)).to({regY:22.5,rotation:5.5,x:-28.5,y:12.6},15,cjs.Ease.get(1)).to({rotation:2.6,x:-27,y:9.6},15,cjs.Ease.get(-1)).to({regY:22.6,rotation:0,x:-25.5,y:6.6},15,cjs.Ease.get(1)).wait(1));

	// sg_14.png
	this.instance_4 = new lib.Символ6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(6.8,98,1,1,0,0,0,7.8,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-7.1,x:6.9},14,cjs.Ease.get(-1)).to({regX:7.7,rotation:-15,x:6.8},15,cjs.Ease.get(1)).to({regY:23.1,rotation:-7.3,y:98.1},15,cjs.Ease.get(-1)).to({regX:7.8,regY:23,rotation:0,y:98},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,-146,96,298);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.parent = this;
	this.instance.setTransform(-29.5,-11.5,1,1,0,0,0,-29.5,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:6.7,x:-1.5,y:3.3},0).wait(1).to({rotation:13.3,x:-3.4,y:6.5},0).wait(1).to({rotation:20,x:-5.7,y:9.4},0).wait(1).to({rotation:26.7,x:-8.3,y:12},0).wait(1).to({rotation:33.3,x:-11.2,y:14.3},0).wait(1).to({rotation:40,x:-14.3,y:16.3},0).wait(1).to({rotation:46.7,x:-17.6,y:17.8},0).wait(1).to({rotation:53.3,x:-21.1,y:19},0).wait(1).to({rotation:60,x:-24.7,y:19.8},0).wait(1).to({rotation:66.7,x:-28.4,y:20.1},0).wait(1).to({rotation:73.3,x:-32.1},0).wait(1).to({rotation:80,x:-35.7,y:19.5},0).wait(1).to({rotation:86.7,x:-39.3,y:18.6},0).wait(1).to({rotation:93.3,x:-42.7,y:17.3},0).wait(1).to({rotation:100,x:-45.9,y:15.6},0).wait(1).to({rotation:106.7,x:-49,y:13.5},0).wait(1).to({rotation:113.3,x:-51.7,y:11},0).wait(1).to({rotation:120,x:-54.2,y:8.3},0).wait(1).to({rotation:126.7,x:-56.3,y:5.3},0).wait(1).to({rotation:133.3,x:-58.1,y:2.1},0).wait(1).to({rotation:140,x:-59.5,y:-1.3},0).wait(1).to({rotation:146.7,x:-60.5,y:-4.9},0).wait(1).to({rotation:153.3,x:-61,y:-8.5},0).wait(1).to({rotation:160,x:-61.2,y:-12.2},0).wait(1).to({rotation:166.7,x:-60.9,y:-15.9},0).wait(1).to({rotation:173.3,x:-60.1,y:-19.5},0).wait(1).to({rotation:180,x:-59,y:-23},0).wait(1).to({rotation:186.7,x:-57.5,y:-26.3},0).wait(1).to({rotation:193.3,x:-55.6,y:-29.5},0).wait(1).to({rotation:200,x:-53.3,y:-32.4},0).wait(1).to({rotation:206.7,x:-50.7,y:-35},0).wait(1).to({rotation:213.3,x:-47.8,y:-37.3},0).wait(1).to({rotation:220,x:-44.7,y:-39.3},0).wait(1).to({rotation:226.7,x:-41.4,y:-40.8},0).wait(1).to({rotation:233.3,x:-37.9,y:-42},0).wait(1).to({rotation:240,x:-34.3,y:-42.8},0).wait(1).to({rotation:246.7,x:-30.6,y:-43.1},0).wait(1).to({rotation:253.3,x:-26.9},0).wait(1).to({rotation:260,x:-23.3,y:-42.5},0).wait(1).to({rotation:266.7,x:-19.7,y:-41.6},0).wait(1).to({rotation:273.3,x:-16.3,y:-40.3},0).wait(1).to({rotation:280,x:-13.1,y:-38.6},0).wait(1).to({rotation:286.7,x:-10,y:-36.5},0).wait(1).to({rotation:293.3,x:-7.3,y:-34},0).wait(1).to({rotation:300,x:-4.8,y:-31.3},0).wait(1).to({rotation:306.7,x:-2.7,y:-28.3},0).wait(1).to({rotation:313.3,x:-0.9,y:-25.1},0).wait(1).to({rotation:320,x:0.5,y:-21.7},0).wait(1).to({rotation:326.7,x:1.5,y:-18.1},0).wait(1).to({rotation:333.3,x:2,y:-14.5},0).wait(1).to({rotation:340,x:2.2,y:-10.8},0).wait(1).to({rotation:346.7,x:1.9,y:-7.1},0).wait(1).to({rotation:353.3,x:1.1,y:-3.5},0).wait(1).to({rotation:360,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.5,-36.5,73.1,73.1);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.parent = this;
	this.instance.setTransform(-29.5,-11.5,1,1,0,0,0,-29.5,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:6.7,x:-1.5,y:3.3},0).wait(1).to({rotation:13.3,x:-3.4,y:6.5},0).wait(1).to({rotation:20,x:-5.7,y:9.4},0).wait(1).to({rotation:26.7,x:-8.3,y:12},0).wait(1).to({rotation:33.3,x:-11.2,y:14.3},0).wait(1).to({rotation:40,x:-14.3,y:16.3},0).wait(1).to({rotation:46.7,x:-17.6,y:17.8},0).wait(1).to({rotation:53.3,x:-21.1,y:19},0).wait(1).to({rotation:60,x:-24.7,y:19.8},0).wait(1).to({rotation:66.7,x:-28.4,y:20.1},0).wait(1).to({rotation:73.3,x:-32.1},0).wait(1).to({rotation:80,x:-35.7,y:19.5},0).wait(1).to({rotation:86.7,x:-39.3,y:18.6},0).wait(1).to({rotation:93.3,x:-42.7,y:17.3},0).wait(1).to({rotation:100,x:-45.9,y:15.6},0).wait(1).to({rotation:106.7,x:-49,y:13.5},0).wait(1).to({rotation:113.3,x:-51.7,y:11},0).wait(1).to({rotation:120,x:-54.2,y:8.3},0).wait(1).to({rotation:126.7,x:-56.3,y:5.3},0).wait(1).to({rotation:133.3,x:-58.1,y:2.1},0).wait(1).to({rotation:140,x:-59.5,y:-1.3},0).wait(1).to({rotation:146.7,x:-60.5,y:-4.9},0).wait(1).to({rotation:153.3,x:-61,y:-8.5},0).wait(1).to({rotation:160,x:-61.2,y:-12.2},0).wait(1).to({rotation:166.7,x:-60.9,y:-15.9},0).wait(1).to({rotation:173.3,x:-60.1,y:-19.5},0).wait(1).to({rotation:180,x:-59,y:-23},0).wait(1).to({rotation:186.7,x:-57.5,y:-26.3},0).wait(1).to({rotation:193.3,x:-55.6,y:-29.5},0).wait(1).to({rotation:200,x:-53.3,y:-32.4},0).wait(1).to({rotation:206.7,x:-50.7,y:-35},0).wait(1).to({rotation:213.3,x:-47.8,y:-37.3},0).wait(1).to({rotation:220,x:-44.7,y:-39.3},0).wait(1).to({rotation:226.7,x:-41.4,y:-40.8},0).wait(1).to({rotation:233.3,x:-37.9,y:-42},0).wait(1).to({rotation:240,x:-34.3,y:-42.8},0).wait(1).to({rotation:246.7,x:-30.6,y:-43.1},0).wait(1).to({rotation:253.3,x:-26.9},0).wait(1).to({rotation:260,x:-23.3,y:-42.5},0).wait(1).to({rotation:266.7,x:-19.7,y:-41.6},0).wait(1).to({rotation:273.3,x:-16.3,y:-40.3},0).wait(1).to({rotation:280,x:-13.1,y:-38.6},0).wait(1).to({rotation:286.7,x:-10,y:-36.5},0).wait(1).to({rotation:293.3,x:-7.3,y:-34},0).wait(1).to({rotation:300,x:-4.8,y:-31.3},0).wait(1).to({rotation:306.7,x:-2.7,y:-28.3},0).wait(1).to({rotation:313.3,x:-0.9,y:-25.1},0).wait(1).to({rotation:320,x:0.5,y:-21.7},0).wait(1).to({rotation:326.7,x:1.5,y:-18.1},0).wait(1).to({rotation:333.3,x:2,y:-14.5},0).wait(1).to({rotation:340,x:2.2,y:-10.8},0).wait(1).to({rotation:346.7,x:1.9,y:-7.1},0).wait(1).to({rotation:353.3,x:1.1,y:-3.5},0).wait(1).to({rotation:360,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.5,-36.5,73.1,73.1);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ61();
	this.instance.parent = this;
	this.instance.setTransform(-70.5,-135.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-336.9},24,cjs.Ease.get(-1)).to({x:-614.4},25,cjs.Ease.get(1)).to({x:-342.5},25,cjs.Ease.get(-1)).to({x:-70.5},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-171.7,73.1,73.1);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(3).call(this.frame_6).wait(3).call(this.frame_9).wait(3));

	// Слой 5
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(0.5,-0.5);

	this.instance_1 = new lib.spi();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-68,-147);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},1).wait(2));

	// Слой 3
	this.instance_2 = new lib.Символ28();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,2);

	this.instance_3 = new lib.spi();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-68,-147);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_3}]},1).to({state:[]},2).wait(3));

	// Слой 2
	this.instance_4 = new lib.Символ17();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-2,16);

	this.instance_5 = new lib.spi();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-68,-147);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},1).to({state:[]},2).wait(6));

	// Слой 1
	this.instance_6 = new lib.Символ1();
	this.instance_6.parent = this;

	this.instance_7 = new lib.spi();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-68,-147);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},1).to({state:[]},2).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,-146,96,298);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ63();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ64, new cjs.Rectangle(-36.5,-36.5,73.1,73.1), null);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ57();
	this.instance.parent = this;
	this.instance.setTransform(70.5,135.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:235.7},15,cjs.Ease.get(-1)).to({y:356.2},18,cjs.Ease.get(1)).to({y:245.7},18,cjs.Ease.get(-1)).to({y:135.2},18,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.5,-36.5,73.1,73.1);


(lib.Символ56 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ62();
	this.instance.parent = this;
	this.instance.setTransform(-53.6,-85.9,1,1,0,0,0,16.9,49.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-171.7,73.1,73.1);


(lib.Символ65 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ64();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		stage.canvas.style.cursor = "none";
		this.priz.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_7.bind(this));
		
		function fl_CustomMouseCursor_7() {
			this.priz.x = stage.mouseX/window.devicePixelRatio;
			this.priz.y = stage.mouseY/window.devicePixelRatio;
		}
		
		stage.canvas.style.cursor = "none";
		this.ruka.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.ruka.x = stage.mouseX/window.devicePixelRatio;
		
		}
		
		this.addEventListener("tick", fl_CustomMouseCursor_4.bind(this));
		
		function fl_CustomMouseCursor_4() {
		
		this.fon.x = - stage.mouseX / 10/window.devicePixelRatio;
		}
		
		 this.cursor = "none";
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.prizeldo.gotoAndStop(1);
			_this.priz.gotoAndStop(1);
			_this.ruka.gotoAndPlay(1);
			_this.mishka.gotoAndPlay(0);
			_this.txt.gotoAndPlay(0);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		 function fl_MouseOutHandler_2()
		{
		    _this.damaspin.gotoAndStop(0);
			_this.prizeldo.gotoAndStop(0);
			_this.priz.gotoAndStop(0);
			_this.ruka.gotoAndPlay(7);
			_this.mishka.gotoAndPlay(6);
			_this.txt.gotoAndPlay(7);
		}
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.spin1.addEventListener("mouseover", fl_MouseOverHandler_11);
		
		function fl_MouseOverHandler_11()
		{
			_this.damaspin.gotoAndPlay(0);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.spin2.addEventListener("mouseover", fl_MouseOverHandler_22);
		
		function fl_MouseOverHandler_22()
		{
			_this.damaspin.gotoAndPlay(3);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.spin3.addEventListener("mouseover", fl_MouseOverHandler_32);
		
		function fl_MouseOverHandler_32()
		{
		    _this.damaspin.gotoAndPlay(9);	
		}
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.spin4.addEventListener("mouseover", fl_MouseOverHandler_42);
		
		function fl_MouseOverHandler_42()
		{
			_this.damaspin.gotoAndPlay(6);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 9
	this.txt = new lib.Символ81();
	this.txt.parent = this;
	this.txt.setTransform(309.6,54.7);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Слой 8
	this.mishka = new lib.Символ74();
	this.mishka.parent = this;
	this.mishka.setTransform(571,289.7,0.655,0.655);

	this.timeline.addTween(cjs.Tween.get(this.mishka).wait(1));

	// Слой 6
	this.ruka = new lib.Символ68();
	this.ruka.parent = this;
	this.ruka.setTransform(573,232);

	this.timeline.addTween(cjs.Tween.get(this.ruka).wait(1));

	// mouseover
	this.spin4 = new lib.Символ54();
	this.spin4.parent = this;
	this.spin4.setTransform(238.9,152.6,2.548,1);
	new cjs.ButtonHelper(this.spin4, 0, 1, 2, false, new lib.Символ54(), 3);

	this.spin3 = new lib.Символ53();
	this.spin3.parent = this;
	this.spin3.setTransform(99.4,152.6,4.65,1);
	new cjs.ButtonHelper(this.spin3, 0, 1, 2, false, new lib.Символ53(), 3);

	this.spin2 = new lib.Символ40();
	this.spin2.parent = this;
	this.spin2.setTransform(381.9,152.6,3.481,1);
	new cjs.ButtonHelper(this.spin2, 0, 1, 2, false, new lib.Символ40(), 3);

	this.spin1 = new lib.Символ39();
	this.spin1.parent = this;
	this.spin1.setTransform(532,152.6,3.261,1,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.spin1, 0, 1, 2, false, new lib.Символ39(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.spin1},{t:this.spin2},{t:this.spin3},{t:this.spin4}]}).wait(1));

	// Слой 5
	this.priz = new lib.Символ65();
	this.priz.parent = this;
	this.priz.setTransform(767.2,182.3);

	this.timeline.addTween(cjs.Tween.get(this.priz).wait(1));

	// Слой 4
	this.prizeldo = new lib.Символ56();
	this.prizeldo.parent = this;
	this.prizeldo.setTransform(665.4,177.5);

	this.timeline.addTween(cjs.Tween.get(this.prizeldo).wait(1));

	// damochka
	this.damaspin = new lib.Символ2();
	this.damaspin.parent = this;
	this.damaspin.setTransform(321,152);

	this.timeline.addTween(cjs.Tween.get(this.damaspin).wait(1));

	// bg
	this.fon = new lib.Символ69();
	this.fon.parent = this;
	this.fon.setTransform(-68.2,0,1,1,0,0,0,-387.9,-152.1);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(246,79.6,787.4,615.2);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1490198428535", id:"bg"},
		{src:"images/mish.png?1490198428535", id:"mish"},
		{src:"images/ruka.png?1490198428535", id:"ruka"},
		{src:"images/sg1_03.png?1490198428535", id:"sg1_03"},
		{src:"images/sg1_06.png?1490198428535", id:"sg1_06"},
		{src:"images/sg1_10.png?1490198428535", id:"sg1_10"},
		{src:"images/sg1_14.png?1490198428535", id:"sg1_14"},
		{src:"images/sg1_19.png?1490198428535", id:"sg1_19"},
		{src:"images/sg2_03.png?1490198428535", id:"sg2_03"},
		{src:"images/sg2_07.png?1490198428535", id:"sg2_07"},
		{src:"images/sg2_10.png?1490198428535", id:"sg2_10"},
		{src:"images/sg2_14.png?1490198428535", id:"sg2_14"},
		{src:"images/sg2_17.png?1490198428535", id:"sg2_17"},
		{src:"images/sg4_02.png?1490198428535", id:"sg4_02"},
		{src:"images/sg4_05.png?1490198428535", id:"sg4_05"},
		{src:"images/sg4_10.png?1490198428535", id:"sg4_10"},
		{src:"images/sg4_13.png?1490198428535", id:"sg4_13"},
		{src:"images/sg4_16.png?1490198428535", id:"sg4_16"},
		{src:"images/sg_03.png?1490198428535", id:"sg_03"},
		{src:"images/sg_06.png?1490198428535", id:"sg_06"},
		{src:"images/sg_09.png?1490198428535", id:"sg_09"},
		{src:"images/sg_14.png?1490198428535", id:"sg_14"},
		{src:"images/sg_18.png?1490198428535", id:"sg_18"},
		{src:"images/spi.png?1490198428535", id:"spi"},
		{src:"sounds/Kick.mp3?1490198428535", id:"Kick"},
		{src:"sounds/Snare27wav.mp3?1490198428535", id:"Snare27wav"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;