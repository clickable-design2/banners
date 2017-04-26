(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,360);


(lib.chery = function() {
	this.initialize(img.chery);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,170);


(lib.coin1 = function() {
	this.initialize(img.coin1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,66);


(lib.coin10 = function() {
	this.initialize(img.coin10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,131);


(lib.coin2 = function() {
	this.initialize(img.coin2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,81);


(lib.coin3 = function() {
	this.initialize(img.coin3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,52);


(lib.coin4 = function() {
	this.initialize(img.coin4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,66);


(lib.coin5 = function() {
	this.initialize(img.coin5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,162);


(lib.coin6 = function() {
	this.initialize(img.coin6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,83);


(lib.coin7 = function() {
	this.initialize(img.coin7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,65);


(lib.coin8 = function() {
	this.initialize(img.coin8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,108);


(lib.coin9 = function() {
	this.initialize(img.coin9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,61);


(lib.diamond = function() {
	this.initialize(img.diamond);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,229,166);


(lib.lemon = function() {
	this.initialize(img.lemon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,170);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1022,207);


(lib.light_up = function() {
	this.initialize(img.light_up);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1125,680);


(lib.logotype = function() {
	this.initialize(img.logotype);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,17);


(lib.long_btn = function() {
	this.initialize(img.long_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,53);


(lib.long_plashka = function() {
	this.initialize(img.long_plashka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,65);


(lib.red_r = function() {
	this.initialize(img.red_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.richagg = function() {
	this.initialize(img.richagg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,391);


(lib.shadow_down = function() {
	this.initialize(img.shadow_down);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1125,680);


(lib.slot1 = function() {
	this.initialize(img.slot1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,281);


(lib.slot_body1 = function() {
	this.initialize(img.slot_body1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,512);// helper functions:

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


(lib.Символ114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdB/QgUgGgQgLQgRgMgMgPQgNgQgHgTIgcAAIAJgrIChAAIgIArIhBAAQAGAHAJAGQAHAGAKADQAJADAJABQAJABAKgCQAJgCAJgEQAJgEAHgHQAIgGAFgJQAGgJACgLIBAAAQgBAMgEAMQgEAMgGAKIgNATIgQARQgZARgPAFQgfAIgRAAQgUAAgUgGgAiKgCIAJguIAQAAQAHgTANgPQAMgQARgLQAQgLATgGQAUgGAUAAQARAAAfAIQAOAFAaASIAQAQQAIAJAFAKQAGAKAEAMQAEALABAMIhAAAQgDgKgFgJQgFgIgIgHQgHgGgJgEQgIgEgJgCQgKgCgJABQgJAAgIADQgKADgHAFQgJAGgGAHIBNAAIgJAug");
	this.shape.setTransform(402,55.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYCDQgLgDgKgFQgKgGgIgGQgIgIgHgJQgIgMgLgfQgFgPgCgjQAAgRAHgiIAIgXQAFgKAGgKQAHgJAIgHQAIgIAKgFQAKgFALgDQAMgDAMABQANgBALADQALADAKAFQAKAFAIAIQAJAHAGAJQAHAKAFAKIAIAXQAHAiAAARQgDAjgEAPQgLAfgJAMQgGAJgJAIQgIAGgKAGQgKAFgLADQgLACgNAAQgMAAgMgCgAgRhCQgIAGgFAJQgFAJgCANQgDAOAAAQQAAAPADANQACANAFAJQAGAKAHAGQAIAGAJAAQAKAAAIgGQAHgGAGgKQAFgJACgNQADgNAAgPQAAgQgDgOQgCgNgFgJQgGgJgHgGQgIgEgKAAQgJAAgIAEg");
	this.shape_1.setTransform(365.8,55.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYCDQgLgDgKgFQgKgGgIgGQgIgIgHgJQgIgMgLgfQgFgPgCgjQAAgRAHgiIAIgXQAFgKAGgKQAHgJAIgHQAIgIAKgFQAKgFALgDQAMgDAMABQANgBALADQALADAKAFQAKAFAIAIQAJAHAGAJQAHAKAFAKIAIAXQAHAiAAARQgDAjgEAPQgLAfgJAMQgGAJgJAIQgIAGgKAGQgKAFgLADQgLACgNAAQgMAAgMgCgAgRhCQgIAGgFAJQgFAJgCANQgDAOAAAQQAAAPADANQACANAFAJQAGAKAHAGQAIAGAJAAQAKAAAIgGQAHgGAGgKQAFgJACgNQADgNAAgPQAAgQgDgOQgCgNgFgJQgGgJgHgGQgIgEgKAAQgJAAgIAEg");
	this.shape_2.setTransform(342.3,55.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYCDQgLgDgKgFQgKgGgIgGQgIgIgHgJQgIgMgLgfQgFgPgCgjQAAgRAHgiIAIgXQAFgKAGgKQAHgJAIgHQAIgIAKgFQAKgFALgDQAMgDAMABQANgBALADQALADAKAFQAKAFAIAIQAJAHAGAJQAHAKAFAKIAIAXQAHAiAAARQgDAjgEAPQgLAfgJAMQgGAJgJAIQgIAGgKAGQgKAFgLADQgLACgNAAQgMAAgMgCgAgRhCQgIAGgFAJQgFAJgCANQgDAOAAAQQAAAPADANQACANAFAJQAGAKAHAGQAIAGAJAAQAKAAAIgGQAHgGAGgKQAFgJACgNQADgNAAgPQAAgQgDgOQgCgNgFgJQgGgJgHgGQgIgEgKAAQgJAAgIAEg");
	this.shape_3.setTransform(318.8,55.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYCDQgLgDgKgFQgKgGgIgGQgIgIgHgJQgIgMgLgfQgFgPgCgjQAAgRAHgiIAIgXQAFgKAGgKQAHgJAIgHQAIgIAKgFQAKgFALgDQAMgDAMABQANgBALADQALADAKAFQAKAFAIAIQAJAHAGAJQAHAKAFAKIAIAXQAHAiAAARQgDAjgEAPQgLAfgJAMQgGAJgJAIQgIAGgKAGQgKAFgLADQgLACgNAAQgMAAgMgCgAgRhCQgIAGgFAJQgFAJgCANQgDAOAAAQQAAAPADANQACANAFAJQAGAKAHAGQAIAGAJAAQAKAAAIgGQAHgGAGgKQAFgJACgNQADgNAAgPQAAgQgDgOQgCgNgFgJQgGgJgHgGQgIgEgKAAQgJAAgIAEg");
	this.shape_4.setTransform(286.1,55.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYCDQgLgDgKgFQgKgGgIgGQgIgIgHgJQgIgMgLgfQgFgPgCgjQAAgRAHgiIAIgXQAFgKAGgKQAHgJAIgHQAIgIAKgFQAKgFALgDQAMgDAMABQANgBALADQALADAKAFQAKAFAIAIQAJAHAGAJQAHAKAFAKIAIAXQAHAiAAARQgDAjgEAPQgLAfgJAMQgGAJgJAIQgIAGgKAGQgKAFgLADQgLACgNAAQgMAAgMgCgAgRhCQgIAGgFAJQgFAJgCANQgDAOAAAQQAAAPADANQACANAFAJQAGAKAHAGQAIAGAJAAQAKAAAIgGQAHgGAGgKQAFgJACgNQADgNAAgPQAAgQgDgOQgCgNgFgJQgGgJgHgGQgIgEgKAAQgJAAgIAEg");
	this.shape_5.setTransform(262.6,55.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AACCDIAAiVIgUAUIgrgpIBShaIApAAIAAEEg");
	this.shape_6.setTransform(243,55.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaCDQgNgDgMgFQgMgEgLgHQgLgIgJgIQgJgJgHgLQgIgLgFgLQgFgNgCgNQgDgNAAgOQAAgOADgNQACgNAFgNQAFgLAIgLQAHgLAJgJQAJgJALgHQALgHAMgFQAMgFANgDQANgCANAAQAOAAANACQANADAMAFQAMAFALAHQALAHAJAJQAJAJAHALQAIALAFALQAFANACANQADANAAAOQAAANgDAOQgCANgFAMQgFAMgIALQgHAKgJAJQgJAJgLAHQgLAHgMAFQgMAFgNADQgNACgOAAQgNAAgNgCgAgZhDQgNAEgKAJQgKAKgGANQgGAPAAARQAAARAGAPQAGANAKAJQAKAJANAFQAMAFANAAQANAAANgFQANgFAJgJQALgJAFgOQAGgOAAgRQAAgRgGgOQgFgOgLgJQgJgJgNgFQgNgFgNAAQgNAAgMAFg");
	this.shape_7.setTransform(212.2,55.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA5CUIAAglIhvAAIAAAlIg+AAIAAhZIAagGQAIgMAFgvIAKiNIClAAIAADHIATAAIAABggAgQAKQgEAggFAKIA7AAIAAiLIgsAAIgGBhg");
	this.shape_8.setTransform(184.7,57.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA3CCIAAiAIglA3IgiAAIgmg4IAACBIg/AAIAAkDIAyAAIBEBkIBDhkIAyAAIAAEDg");
	this.shape_9.setTransform(149.3,55.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaCDQgNgDgMgFQgMgEgLgHQgLgIgJgIQgJgJgHgLQgIgLgFgLQgFgNgCgNQgDgNAAgOQAAgOADgNQACgNAFgNQAFgLAIgLQAHgLAJgJQAJgJALgHQALgHAMgFQAMgFANgDQANgCANAAQAOAAANACQANADAMAFQAMAFALAHQALAHAJAJQAJAJAHALQAIALAFALQAFANACANQADANAAAOQAAANgDAOQgCANgFAMQgFAMgIALQgHAKgJAJQgJAJgLAHQgLAHgMAFQgMAFgNADQgNACgOAAQgNAAgNgCgAgZhDQgNAEgKAJQgKAKgGANQgGAPAAARQAAARAGAPQAGANAKAJQAKAJANAFQAMAFANAAQANAAANgFQANgFAJgJQALgJAFgOQAGgOAAgRQAAgRgGgOQgFgOgLgJQgJgJgNgFQgNgFgNAAQgNAAgMAFg");
	this.shape_10.setTransform(121.4,55.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA5CUIAAglIhvAAIAAAlIg+AAIAAhZIAagGQAIgMAFgvIAKiNIClAAIAADHIATAAIAABggAgQAKQgEAggFAKIA7AAIAAiLIgsAAIgGBhg");
	this.shape_11.setTransform(93.9,57.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAiCCIAAhlIhDAAIAABlIg/AAIAAkDIA/AAIAABiIBDAAIAAhiIA/AAIAAEDg");
	this.shape_12.setTransform(69.7,55.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaCDQgNgDgMgFQgMgEgLgHQgLgIgJgIQgJgJgHgLQgIgLgFgLQgFgNgCgNQgDgNAAgOQAAgOADgNQACgNAFgNQAFgLAIgLQAHgLAJgJQAJgJALgHQALgHAMgFQAMgFANgDQANgCANAAQAOAAANACQANADAMAFQAMAFALAHQALAHAJAJQAJAJAHALQAIALAFALQAFANACANQADANAAAOQAAANgDAOQgCANgFAMQgFAMgIALQgHAKgJAJQgJAJgLAHQgLAHgMAFQgMAFgNADQgNACgOAAQgNAAgNgCgAgZhDQgNAEgKAJQgKAKgGANQgGAPAAARQAAARAGAPQAGANAKAJQAKAJANAFQAMAFANAAQANAAANgFQANgFAJgJQALgJAFgOQAGgOAAgRQAAgRgGgOQgFgOgLgJQgJgJgNgFQgNgFgNAAQgNAAgMAFg");
	this.shape_13.setTransform(43.9,55.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfCCIAAgXIgXgFIgUgJQgSgJgMgPQgNgPgGgSQgGgRAAgTQAAgSAGgRQAGgSANgPQAMgPASgJIAUgIIAXgGIAAgXIA/AAIAAAXQAQACAaALQATAKAMAOQAMAPAHASQAGARAAATQAAASgGASQgHASgMAPQgNAPgSAJQgaALgQADIAAAXgAAfAyQAJgCAHgFQAGgFAFgHQAEgGADgHQACgJAAgJIgCgQQgCgJgEgGQgEgHgHgFQgHgFgKgCgAgugrQgHAFgEAHQgFAGgCAJQgCAHAAAJQAAAJACAIQACAIAFAGQAEAIAHAEQAHAFAJACIAAhkQgJADgHAEg");
	this.shape_14.setTransform(15.1,55.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA3CCIAAiBIglA3IgiAAIgmg4IAACCIg/AAIAAkCIAyAAIBEBkIBDhkIAyAAIAAECg");
	this.shape_15.setTransform(398.5,16.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABHCCIAAkCIA/AAIAAECgAiFCCIAAkCIA/AAIAABMIAkAAQAPAAAYAIQAQAHAMAOQALAMAFAQQAGAQAAARQAAASgGAQQgFARgLAMQgMANgQAIQgYAHgPABgAhGBFIAkAAQANAAAIgKQAGgIAAgNQAAgMgGgJQgIgJgNAAIgkAAg");
	this.shape_16.setTransform(370.3,16.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhkCCIAAkCIB3AAQAMgBAKAEQAKADAIAHQAJAGAFAJQAHAHADAKQADAJABAKQABAKgCAJQgDAKgFAIQgHAJgJAHQAKAFAIAGQAHAGAFAIQAEAHADAIQACAIAAAJQAAAQgFAPQgGAPgKAMQgLALgPAIQgQAGgUABgAgmBGIA4AAQAJAAAGgIQAFgHAAgJQAAgKgFgGQgGgIgJABIg4AAgAgmgjIAvAAQAIAAAFgFQADgGAAgHQAAgIgDgEQgFgGgHAAIgwAAg");
	this.shape_17.setTransform(344.1,16.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgaCDQgNgDgMgFQgMgEgLgHQgLgIgJgIQgJgJgHgLQgIgLgFgLQgFgNgCgNQgDgNAAgOQAAgOADgNQACgNAFgNQAFgLAIgLQAHgLAJgJQAJgJALgHQALgHAMgFQAMgFANgDQANgCANAAQAOAAANACQANADAMAFQAMAFALAHQALAHAJAJQAJAJAHALQAIALAFALQAFANACANQADANAAAOQAAANgDAOQgCANgFAMQgFAMgIALQgHAKgJAJQgJAJgLAHQgLAHgMAFQgMAFgNADQgNACgOAAQgNAAgNgCgAgZhDQgNAEgKAJQgKAKgGANQgGAPAAARQAAARAGAPQAGANAKAJQAKAJANAFQAMAFANAAQANAAANgFQANgFAJgJQALgJAFgOQAGgOAAgRQAAgRgGgOQgFgOgLgJQgJgJgNgFQgNgFgNAAQgNAAgMAFg");
	this.shape_18.setTransform(317.9,16.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgaCEIgTgFQgRgHgMgNQgLgMgGgRQgFgQAAgSIA6AAQAAAHAEAGQADAGAFAEQAKAHAPAAQANAAALgHQALgHAAgLQAAgJgGgHQgIgJgOAAIgmAAIAAg0IAmAAQAIAAAHgHQAFgHAAgIQAAgLgKgGQgJgHgMABQgOAAgJAHQgKAHAAANIg4AAQAAgOAIgYQAHgQAOgLQANgKAQgGQAQgGASAAQARAAAQAFQARAFAMAKQAOALAHAPQAIAWAAANQAAAPgFAMIgIAMQgGAGgHADQAKAEAHAHQAGAGAEAIQAHANAAATQAAAPgHAOQgGAPgNALQgNAMgTAHQgbAHgPAAg");
	this.shape_19.setTransform(292.3,16.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAmCCIAAiDIhfCDIgqAAIAAkCIA+AAIAACBIBdiBIAtAAIAAECg");
	this.shape_20.setTransform(269.8,16.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AheCCIAAkCIBiAAQAQgBAYAJQARAGALAOQAMAMAFARQAGAQAAASQAAARgGAQQgFAPgMANQgLANgRAIQgYAHgQAAIgjAAIAABOgAgfgGIAjAAQAOAAAIgKQAIgIAAgMQAAgNgIgIQgIgKgOAAIgjAAg");
	this.shape_21.setTransform(247.6,16.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAiCCIAAjFIhDAAIAADFIg/AAIAAkCIDBAAIAAECg");
	this.shape_22.setTransform(225.4,16.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgZCDQgNgDgNgFQgLgEgLgHQgLgIgJgIQgJgJgHgLQgIgLgEgLQgGgNgCgNQgDgNAAgOQAAgOADgNQACgNAGgNQAEgLAIgLQAHgLAJgJQAJgJALgHQALgHALgFQANgFANgDQANgCAMAAQARAAAfAIQAPAFAZASIARAQQAHAJAGAKQAGAKADAMQAFALABAMIhAAAQgEgNgHgLQgIgKgLgHQgLgGgMgDQgLgCgMABQgNACgKAFQgMAGgJAIQgIAKgFANQgGANAAAQQAAAQAGAOQAFAMAJAKQAJAJALAFQALAFAMACQAMABAMgDQAMgDALgGQAKgHAIgKQAIgLADgOIBAAAQgBAMgFAMQgEAMgFAKIgNATIgRARQgZARgOAFQggAIgRAAQgMAAgNgCg");
	this.shape_23.setTransform(190.5,16.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("ABHCCIAAkCIA/AAIAAECgAiFCCIAAkCIA/AAIAABMIAkAAQAPAAAYAIQAQAHAMAOQALAMAFAQQAGAQAAARQAAASgGAQQgFARgLAMQgMANgQAIQgYAHgPABgAhGBFIAkAAQANAAAIgKQAGgIAAgNQAAgMgGgJQgIgJgNAAIgkAAg");
	this.shape_24.setTransform(151.8,16.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AheCCIAAkCIBiAAQAPgBAZAJQAQAGAMAOQAMAMAFARQAGAQAAASQAAARgGAQQgFAPgMANQgMANgQAIQgZAHgPAAIgjAAIAABOgAgfgGIAjAAQAOAAAIgKQAHgIAAgMQAAgNgHgIQgIgKgOAAIgjAAg");
	this.shape_25.setTransform(126.3,16.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAmCCIAAiDIhfCDIgqAAIAAkCIA+AAIAACBIBdiBIAsAAIAAECg");
	this.shape_26.setTransform(103.8,16.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAiCCIAAhlIhDAAIAABlIg/AAIAAkCIA/AAIAABhIBDAAIAAhhIA/AAIAAECg");
	this.shape_27.setTransform(81,16.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AheCCIAAkCIBiAAQAPgBAZAJQAQAGAMAOQAMAMAFARQAGAQAAASQAAARgGAQQgFAPgMANQgMANgQAIQgZAHgPAAIgjAAIAABOgAgfgGIAjAAQAOAAAIgKQAHgIAAgMQAAgNgHgIQgIgKgOAAIgjAAg");
	this.shape_28.setTransform(59.2,16.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhFCCIAmhYIhTirIBGAAIAbA2IAUAzIASgyIAYg3IBGAAIh0EDg");
	this.shape_29.setTransform(36,16.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgeCCIAAjIIhGAAIAAg6IDJAAIAAA6IhFAAIAADIg");
	this.shape_30.setTransform(12,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ114, new cjs.Rectangle(0,0,421.2,80), null);


(lib.Символ110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#02011F").s().p("EiZdA3sMAAAhvYMEy7AAAMAAABvYg");
	this.shape.setTransform(982.2,648.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#01011E","rgba(0,9,64,0)"],[0,1],0,145.2,0,-145.1).s().p("EiZnAW1MAAAgtpMEzPAAAMAAAAtpg");
	this.shape_1.setTransform(983.2,146.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ110, new cjs.Rectangle(0,0,1966.5,1005.1), null);


(lib.Символ109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhCB8IAlhUIhQijIBDAAIAaAzIATAxIARgvIAXg1IBDAAIhvD3g");
	this.shape.setTransform(-7.9,-2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAbB8IAAhMIgQABQgTAAgRgFQgTgFgNgLIgMgMQgGgHgEgIQgEgHgCgKQgCgKAAgMIAAhVIA+AAIAABVQgBAKAFAIQAEAHAHAEQAIAEAIABQAKAAALgCIAAh1IA9AAIAAD3g");
	this.shape_1.setTransform(-30.1,-2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA2B+IgOglIhTAAIgOAlIhBAAIBjj6IArAAIBnD6gAATAgIgBgDIgSg2IgTA0IgCAFIAoAAg");
	this.shape_2.setTransform(-53.6,-2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA3COIAAgjIhqAAIAAAjIg8AAIAAhWIAZgFQAIgLAEguIAKiHICeAAIAAC+IASAAIAABdgAgPAKQgEAfgFAIIA5AAIAAiEIgqAAIgGBdg");
	this.shape_3.setTransform(-79.1,-0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhCB8IAlhUIhQijIBDAAIAaAzIATAxIARgvIAXg1IBDAAIhvD3g");
	this.shape_4.setTransform(-103.3,-2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhaB8IAAj3IA9AAIAABKIAiAAQAOAAAXAHQAQAHALANQALAMAFAPQAGAPAAARQAAARgGAPQgFAQgLAMQgMANgPAHQgXAHgOAAgAgdBCIAiAAQAMAAAHgJQAHgIgBgMQABgMgHgIQgHgJgMAAIgiAAg");
	this.shape_5.setTransform(-134,-2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdB8IAAi+IhDAAIAAg5IDBAAIAAA5IhDAAIAAC+g");
	this.shape_6.setTransform(-155.8,-2.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA2B+IgNglIhUAAIgOAlIhBAAIBkj6IAqAAIBnD6gAATAgIgCgDIgSg2IgSA0IgCAFIAoAAg");
	this.shape_7.setTransform(-179.7,-2.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdB8IAAi+IhDAAIAAg5IDBAAIAAA5IhDAAIAAC+g");
	this.shape_8.setTransform(-204,-2.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABEB8IAAj3IA9AAIAAD3gAiAB8IAAj3IA9AAIAABKIAjAAQAOAAAWAHQAQAHALANQALAMAFAPQAGAPAAARQAAARgGAPQgFAQgLAMQgLANgQAHQgWAHgOAAgAhDBCIAjAAQAMAAAHgJQAHgIAAgMQAAgMgHgIQgHgJgMAAIgjAAg");
	this.shape_9.setTransform(-229.3,-2.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAhB8IAAi9IhBAAIAAC9Ig8AAIAAj3IC5AAIAAD3g");
	this.shape_10.setTransform(-254.3,-2.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYB9QgNgCgMgFQgLgEgKgHQgLgHgIgIQgJgJgHgKQgGgKgFgMQgGgLgCgNQgDgNAAgOQAAgMADgNQACgNAGgMQAFgLAGgKQAHgLAJgIQAIgJALgHQAKgGALgFQAMgFANgDQAMgCANAAQAQAAAeAIQAOAFAYARIAQAPQAHAJAFAJQAGAKADALQAEALACAMIg+AAQgDgNgIgKQgHgKgKgGQgLgGgMgDQgLgCgKABQgMACgLAFQgLAFgIAIQgJAKgEAMQgGANAAAOQAAAQAGANQAEAMAJAJQAJAJAKAFQALAFAMABQALACALgDQANgDAJgGQAKgGAIgKQAHgLADgNIA+AAQgCAMgEALQgEALgFAKIgMATIgQAPQgYARgOAFQgeAIgQAAQgNAAgMgDg");
	this.shape_11.setTransform(-278.9,-2.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAkB8IAAh9IhbB9IgoAAIAAj3IA7AAIAAB8IBah8IAqAAIAAD3g");
	this.shape_12.setTransform(-303.8,-2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ109, new cjs.Rectangle(-315,-18.3,321.9,38.4), null);


(lib.Символ106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.long_btn();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ106, new cjs.Rectangle(0,0,400,53), null);


(lib.Символ103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.richagg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ103, new cjs.Rectangle(0,0,75,391), null);


(lib.Символ102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.slot_body1();
	this.instance.parent = this;
	this.instance.setTransform(2,-168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ102, new cjs.Rectangle(2,-168,500,512), null);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.coin5();
	this.instance.parent = this;
	this.instance.setTransform(32,22,2.263,2.263);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ68, new cjs.Rectangle(32,22,402.8,366.6), null);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.diamond();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ67, new cjs.Rectangle(0,0,229,166), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.logotype();
	this.instance.parent = this;
	this.instance.setTransform(-81,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EiWNAEjIAApFMEsbAAAIAAJFg");
	this.shape.setTransform(0,29.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-961.4,0,1922.8,58.1), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.red_r();
	this.instance.parent = this;
	this.instance.setTransform(-10,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-10,-10,131,131), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_down();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,1125,680), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.light_up();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,1125,680), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slot1();
	this.instance.parent = this;
	this.instance.setTransform(4,1,3.831,3.831);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(4,1,1915.3,1076.4), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.light();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,1022,207), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Режим изоляции
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F69C2D","#E5802A","#D26227","#C44C26","#BC3F25","#B93B25","#BE4124","#CB5223","#E06D23","#F28425","#FEC73F","#FEC840","#FEDD58","#FEE561"],[0,0.035,0.086,0.133,0.176,0.22,0.263,0.322,0.388,0.435,0.655,0.667,0.875,0.996],-9,40.9,8.9,-28.6).s().p("Ah7DlQiRgMghhjQAGgCAXglQAZgpAXgxQBAiLgMhQQAvAmA/ARQAkAKBQAKQBQAKArANQBFAUA4AqIgNBbQgGAxgMAsQgSBGgbAQQgTALhaAHIhzAKQgqADgjAAQgaAAgWgCg");
	this.shape.setTransform(-1.3,-10.6,0.137,0.137);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EF7621","#FEC73F","#FEC840","#FEDD58","#FEE561","#FED298"],[0,0.384,0.396,0.612,0.733,1],-30.9,0,30.9,0).s().p("AguhQQhVgYhggMIhRgIIABgYQAmACA0AHQBjANBXAZQERBOBDCjIgVAJQhAiakOhLg");
	this.shape_1.setTransform(6.5,-6.4,0.137,0.137);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#B23023","#EF7621","#FEC73F","#FEC840","#FEDD58","#FEE561"],[0.055,0.345,0.714,0.725,0.898,0.996],-46.9,0,47,0).s().p("AC5BcQhrg3iQgWQjCgcgVgCQidgNgeArIA6i7QBcgtB6gaQCDgdB7AEQEvAIBsC1Qg0AzgUB1IgMBfQgJA2gMAfQgthtiGhEg");
	this.shape_2.setTransform(5.6,-8.2,0.137,0.137);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#EF7621","#FEC73F","#FEC840","#FEDD58","#FEE561","#FED298"],[0,0.384,0.396,0.612,0.733,1],29.1,-24.4,-32.2,17.7).s().p("AkQD6QAViABOh/QCdj+EggMIABAYQkUAKiXD9QhLCAgUCAg");
	this.shape_3.setTransform(-8.9,-5.7,0.137,0.137);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#B23023","#EF7621","#FEC73F","#FEC840","#FEDD58","#FEE561"],[0.055,0.345,0.714,0.725,0.898,0.996],37.2,-35.2,-50.8,25.2).s().p("AlLD9QhRgxgmgfQhHg6AHg4QAGguBIhYQCSiyEYg4QEBgzDpBKIAjCNQh0g5iAAOQh4AMhrBIQhqBHhDBvQhHB1gLCIQgkgchUgyg");
	this.shape_4.setTransform(-9.6,-6.6,0.137,0.137);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#EF7621","#FEC73F","#FEC840","#FEDD58","#FEE561","#FED298"],[0,0.384,0.396,0.612,0.733,1],-66.9,0,67,0).s().p("AG8GyQkJg2ldhXQlhhYhqi1Qgig3gFg7QgDgiAGgYQABi6ChhSQBYgtBZgCQE3g8F7HeQB1CSBqCuQA0BXAfA7IgMAVQiCj4i6jmQlxnNknA5IgCAAQhWADhNAmQiaBLAACxIgBADIgDAvQAEA5AgA1QArBJBbA7QB3BNC/AwQFbBXEMA5QCGAcBCAMIgIARQhBgJiFgcg");
	this.shape_5.setTransform(-13.7,-16.2,0.137,0.137);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0.396)","rgba(255,255,255,0.6)","rgba(255,255,255,0.098)"],[0.098,0.337,1],-106.9,-67,86.9,60.1).s().p("AkDC7QBim/AkiNIAAABQDfB0CiDzQicEAhQC7QiUieiHg5g");
	this.shape_6.setTransform(-11,-24.4,0.137,0.137);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#F6A02F","#D36F2C","#EDA437","#FEC73F","#FEC840","#FEDD58","#FEE561","#F2BE4C","#D16A2B"],[0.122,0.275,0.42,0.51,0.518,0.655,0.733,0.851,1],-106,-68.4,88,58.8).s().p("AInI/Ii0kRQiMiwhghXQiciNiTgaQhwgTh8AbQiNAehABMQg1BAgBBoQAAA5AXB8QgwgzgphTQgohPgShLQgch1AyhyQAUguBrihQByiuAZggQBch6BVgxQBEgnB7AlQBMAWB2A+QDWBvCcDiQCGDABSEDQAgBoAoDYQAmDUAhBkIAGAXIhNAgQgfgCiLjUg");
	this.shape_7.setTransform(-13.6,-20.5,0.137,0.137);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#B23023","#EF7621","#EFAA38","#DF8730","#CC6228","#C14A23","#BD4221"],[0.055,0.325,0.647,0.737,0.851,0.945,1],-57.8,-32,62.7,55.6).s().p("AE2HMQkkg9iLggQkBg5imh3Qg5gpgthGQguhQgggoIAckGQgTgOA1gtQAvgoBXgyQDPh4BJAFQhmCOBVCUQA1BaCmCJQBKA9B0BBQBCAmCGBHQA6AhCCBrQB0BfBHAeQgRA5AXA7Qiggzj/g4g");
	this.shape_8.setTransform(-13.4,-17,0.137,0.137);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#EF7621","#FEC73F","#FEC840","#FEDD58","#FEE561","#FED298"],[0,0.384,0.396,0.612,0.733,1],-62.3,0,62.4,0).s().p("AodJYIAhgdQAqggA1giQCohrDhhWQEuhzCEh7QCdiSAbj2QASijhdhDQhFgzh5AHQhdAGhEAeIgXAJQjBBPiLCgQkBEmigJSIgXgGQCipZEGkrQCOiiDFhQIAWgKQBIggBkgFQCAgHBLA3QBnBLgTCxQgbD+ihCWQiHB/k2B2QjdBUinBrQg1AigpAgIgfAag");
	this.shape_9.setTransform(7.6,-20.6,0.137,0.137);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#E76646","#FEC73F","#FEC840","#FEDD58","#FEE561","#F2BE4C","#D16A2B"],[0.2,0.51,0.518,0.655,0.733,0.851,0.98],-65.5,48.7,87.4,-40.1).s().p("Aq6LhIghhCQAWieCPh1QBphWDVhbICzhKQBrgsBCggQC9haBShmQAxg+AnhbQAphjALhcQAajpixg9QBUAUAgAMQA/AWAlAhQBGA9AmCGQAZBXAOCJQAIBUgGCAIgKDTQgCBhgjAxQgSAYhmBRQimCEiyBGQi0BHjNAOQiPABhVAFQiaAIhLAqQgkgRgmgIg");
	this.shape_10.setTransform(8.9,-18.4,0.137,0.137);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#B23023","#EF7621","#EFAA38","#DF8730","#CC6228","#C14A23","#BD4221"],[0.055,0.325,0.647,0.737,0.851,0.945,1],-63.1,39.4,78.5,-72.4).s().p("Ap5KfQADkPCFlDQB5knC4jrQA2hFBag+QBbhABogmQD3haCuBhQBwA+hNFFQgeB8grB1QABAmgcAhIAbhHQgBglgdgqQg2hNhRgSQhZgUhWAuQgtAZhkBXQi8Ckh9DvQgcA3grCcQgnCMgsBAQhmgXhtglg");
	this.shape_11.setTransform(7.7,-18.9,0.137,0.137);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E35C1C").s().p("AOsVxMAAAghoIABgCQAEgbgHgbQgPg4g5gSQhkgf7DnBIAGgXQbDHCBlAfQBCAVATA+QALAkgFAiMAAAAhng");
	this.shape_12.setTransform(-3.6,9.6,0.137,0.137);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#B23023","#EF7621","#FEE561","#FDA929","#CA5721"],[0.055,0.157,0.286,0.604,1],-7.8,149.9,63.9,-143).s().p("ALqrnQACgWgIgXQgQgvgwgKQhOgQ7mncIIRhuIbcHYQALAFAKALQAfAhAABJMAAAAiAImbB9g");
	this.shape_13.setTransform(-1,8.8,0.137,0.137);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEC870").s().p("ApCUFMAAAghnQgFgiALgjQATg/BCgVQBHgVPkj0QgCALABANQvlD1g+ASQg5ASgPA3QgHAcAEAbIABACMAAAAhog");
	this.shape_14.setTransform(-5.3,10.4,0.137,0.137);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#B23023","#EF7621","#FEC73F","#F8BC3C","#DF8830","#CC6228","#C14A23","#BD4221"],[0.055,0.157,0.267,0.306,0.541,0.741,0.902,1],7.4,-139.8,-63.2,148.4).s().p("Ax+UfMAAAgiAQAAhJAfghQAKgKALgFIAKgEIavm9IIQCFItrDZQt0DagxAKQgxAKgPAvQgIAYACAVMgAMAiPg");
	this.shape_15.setTransform(-2.9,8.3,0.137,0.137);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#CC3034","#A82124"],[0,0.996],-39.4,2.4,38.8,-4.3).s().p("AiHAbIkEgZIDegcIgJg6IDfAoIEDgMIhQA1ICwAyIkfgGIilAtg");
	this.shape_16.setTransform(11.6,-7,0.137,0.137);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#CC3034","#A82124"],[0,0.996],-53,3.2,52.4,-5.8).s().p("Ai2AkIlfghIEsgmIgMhPIEsA3IFegRIhsBIIDtBEImCgJIjfA8g");
	this.shape_17.setTransform(0.4,-4.4,0.137,0.137);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(255,255,255,0.396)","rgba(255,255,255,0.6)","rgba(255,255,255,0.098)"],[0.098,0.337,1],3.2,-39.9,-2.2,72.9).s().p("AhNFcQgRhiAKiJQALiWAzlVIgGB5QgFCPAFB1QAOF2BnggQgnATgpAJQgXAGgSAAQgoAAgFgfg");
	this.shape_18.setTransform(-0.9,25.8,0.137,0.137);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FC4C4F").s().p("AAYPaIAChdQAM09ALlOQAIjRhGgtQgWgPgbAEIgXAHIBKgqQBLgkAPAZQAOAagRQ7QgJIegMIZIg/AJQAYgWAIhgg");
	this.shape_19.setTransform(22.9,9.5,0.137,0.137);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FC4C4F").s().p("AgdVuQAgoQAQoaQAiwyhMg0QgugekMheQkMhdk9hhQs0j5h4AkQgQgTAFgUQALgnBqgEQGgB8GzB5QNlDyBegSQCZgeWfmgIAmAFQAsAHAlAMQB0AmgLBJQkmApleBBQq7CBkVB3QgqAcgOAZQgGANABAIQBSAuH6CUQHSCJAZAoQASAdAPBwQAPBvAFCEQANFOg6BWQg5BViLBvIu2NJIAAgBQgtAagqAAQgoAAgkgWgABXooIgIBKIgDC2QgIGoADFtQADEdAGDlQAECMAWAuQAnBPBrhOQBCgvBPhIICJiBQA9g4CXh1QCFhnBJhLQCSiYAxhAQBxiTgDhlQgEhwgJiLQgJiYgKhkQgEgqiAgvQhdgjjIgyIlDhSQiogug5giQhuhCgmBJQgTAlADAyIgFgJQAJASgFA1g");
	this.shape_20.setTransform(-1.7,12.1,0.137,0.137);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(255,255,255,0.2)","rgba(255,255,255,0)"],[0,1],-0.5,-40.2,0.1,27.2).s().p("AohiLQGciVGQioQATAPAZAAQB+AFA/BtQAwBUANCSQhgArhUAoQjSBhkGCFQiGBElPCtQANlSACkCg");
	this.shape_21.setTransform(6.2,11.9,0.137,0.137);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FC4C4F").s().p("AhsQ/QB6AWAJseQADi/gFmqQgElSAGhVQAPjGhAh7QgUgmgagbIgVgSQCSAWApB7QAVA+gJA5Ig1fTg");
	this.shape_22.setTransform(-2.5,15.7,0.137,0.137);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#FC4C4F","#E0494B"],[0.004,1],1.1,-80.4,-4.7,59.1).s().p("AprRuMAACgjfITJG7IAMLcIyMRMg");
	this.shape_23.setTransform(7.6,15.3,0.137,0.137);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(255,255,255,0.2)","rgba(255,255,255,0)"],[0,1],-67.1,25.7,79.1,-30.1).s().p("ApCBYIDRiBQAvgMGZi2QHVjPAXgJIgDFBQiSBIlMCmQmHDGiABEQhAAjhdArg");
	this.shape_24.setTransform(15.9,6.8,0.137,0.137);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D1393C").s().p("ApFLTIAAtAISKvYMgAXAiLg");
	this.shape_25.setTransform(16,9.5,0.137,0.137);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DB383C").s().p("A8vg9IDhgwIPLjTIDYgtQCCgbBVgWQCVgmChAPQB2ALDAAxQBtAdE1BNQEIBBCbApQCkAsFKBSIBlA+Il/BTI1jFQg");
	this.shape_26.setTransform(-1.8,-6.3,0.137,0.137);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#CC3034","#A82124"],[0,0.996],-0.9,-110.4,0.8,101.1).s().p("AuEvPIcIl8MgAXAiOI7xIJg");
	this.shape_27.setTransform(11.6,12.8,0.137,0.137);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#CC3034","#A82124"],[0,0.996],-98.7,-131.6,70.2,83.1).s().p("ANaVYQhFgPgmgMQiFgpqDi+Qo2imhTgcQhegWhEgUQiDgpAAgoMAAAghXQAAgeAVgDQALgBAKAEIA3gVIcuHUMgADAkPQgigLhJgPg");
	this.shape_28.setTransform(-14,12.3,0.137,0.137);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-27.4,-31.3,51.5,62.8), null);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.coin8();
	this.instance.parent = this;
	this.instance.setTransform(-81.5,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.5,-54,163,108);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.coin8();
	this.instance.parent = this;
	this.instance.setTransform(-81.5,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.5,-54,163,108);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.coin6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,89,83), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.coin5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,178,162), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.coin9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,120,61), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.coin4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,108,66), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.coin10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,128,131), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.coin3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,143,52), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.coin2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,94,81), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.coin7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,88,65), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.coin1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,96,66), null);


(lib.Символ107копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ109();
	this.instance.parent = this;
	this.instance.setTransform(357.2,34,0.762,0.762,0,0,0,92.6,26.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ106();
	this.instance_1.parent = this;
	this.instance_1.setTransform(330.9,39.3,1,1,0,0,0,365,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ107копия, new cjs.Rectangle(-34.1,-8.7,400,53), null);


(lib.Символ105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ107копия();
	this.instance.parent = this;
	this.instance.setTransform(392,63,1,1,0,0,0,365,48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:365.1,regY:48.1,scaleX:1.06,scaleY:1.06,x:403.1,y:64.8},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.long_plashka();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-24,0,1.086,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.15,scaleY:1.06,x:-36,y:-2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,0,434.4,65);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(1922.8,29.1,1,1,0,0,0,961.4,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(0,0,1922.8,58.1), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(382.9,452.6,1,1,-145.5,0,0,510.9,103.4);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-96.8,77.7,959.5,749.4), null);


(lib.Символ21копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Слой 3
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(220.5,65.5,1,1,0,0,0,65.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:184.1,y:350},2).to({x:220.5,y:65.5},7).wait(1));

	// Слой 6
	this.instance_1 = new lib.Символ103();
	this.instance_1.parent = this;
	this.instance_1.setTransform(152.7,431,1.777,1.777,0,0,0,37.6,195.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.19,y:546.4},2).to({scaleY:1.78,y:431},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(85.9,-10,190.2,788.4);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(562.5,340,1,1,0,0,0,562.5,340);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(563.5,342,1,1,0,0,0,562.5,340);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,1126,682), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ68();
	this.instance.parent = this;
	this.instance.setTransform(-7.1,-353,0.132,0.132,0,0,0,179.1,176.8);

	this.instance_1 = new lib.Символ68();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7.1,60.2,0.132,0.132,0,0,0,179.1,176.8);

	this.instance_2 = new lib.lemon();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-21,-93,0.219,0.219);

	this.instance_3 = new lib.lemon();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-21,-505,0.219,0.219);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_4 = new lib.Символ68();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-7.1,-144.5,0.132,0.132,0,0,0,179.1,176.8);

	this.instance_5 = new lib.Символ68();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-7.1,-279.1,0.132,0.132,0,0,0,179.1,176.8);

	this.instance_6 = new lib.Символ26();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.7,-417.6,0.926,0.926);

	this.instance_7 = new lib.Символ26();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0.7,-211.2,0.926,0.926);

	this.instance_8 = new lib.Символ26();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0.7,-5.6,0.926,0.926);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-26.4,-505,56.2,593.1), null);


(lib.Символ25_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance_1 = new lib.Символ67();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.6,2.1,0.234,0.234,0,0,0,114.5,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25_1, new cjs.Rectangle(-22.3,-17.4,53.7,39), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(48,33,1,1,0,0,0,48,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,96,66), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(48,33,1,1,0,0,0,48,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,66);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(47,40.5,1,1,0,0,0,47,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94,81);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(71.5,26,1,1,0,0,0,71.5,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143,52);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(54,33,1,1,0,0,0,54,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108,66);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(89,81,1,1,0,0,0,89,81);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178,162);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(44.5,41.5,1,1,0,0,0,44.5,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89,83);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(44,32.5,1,1,0,0,0,44,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,65);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(81.5,54);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(81.5,54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:-360},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163,108);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(60,30.5,1,1,0,0,0,60,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},34).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,61);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(64,65.5,1,1,0,0,0,64,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128,131);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// coin10.png
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(879.5,593,1,1,0,0,0,64,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:1361.5},14).wait(1).to({y:44},0).to({y:538.1},9).wait(1));

	// coin9.png
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1173.5,953.9,1,1,0,0,0,60,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:1393},8).wait(1).to({y:75.5},0).to({y:899},15).wait(1));

	// coin8.png
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(35,461.3,1,1,0,0,0,81.5,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:1394.5},17).wait(1).to({y:77},0).to({y:406.4},6).wait(1));

	// coin7.png
	this.instance_3 = new lib.Symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-148,1096.6,1,1,0,0,0,44,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:1371},5).wait(1).to({y:53.5},0).to({y:1041.7},18).wait(1));

	// coin6.png
	this.instance_4 = new lib.Symbol7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1559.5,724.3,1,1,0,0,0,44.5,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:1383},12).wait(1).to({y:65.5},0).to({y:669.4},11).wait(1));

	// coin5.png
	this.instance_5 = new lib.Symbol8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1348.5,1265.7,1,1,0,0,0,89,81);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:1375.5},2).wait(1).to({y:58},0).to({y:1210.8},21).wait(1));

	// coin4.png
	this.instance_6 = new lib.Symbol9();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1037.5,1030.1,1,1,0,0,0,54,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:1359.5},6).wait(1).to({y:42},0).to({y:975.2},17).wait(1));

	// coin3.png
	this.instance_7 = new lib.Symbol10();
	this.instance_7.parent = this;
	this.instance_7.setTransform(425,903,1,1,0,0,0,71.5,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:1397},9).wait(1).to({y:79.5},0).to({y:848.1},14).wait(1));

	// coin2.png
	this.instance_8 = new lib.Symbol11();
	this.instance_8.parent = this;
	this.instance_8.setTransform(274,1133.5,1,1,0,0,0,47,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:1353},4).wait(1).to({y:35.5},0).to({y:1078.6},19).wait(1));

	// Symbol 2
	this.instance_9 = new lib.Symbol12();
	this.instance_9.parent = this;
	this.instance_9.setTransform(156.5,33,1,1,0,0,0,48,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:1350.5},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192,0,1796,1346.7);


(lib.btn12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ107копия();
	this.instance.parent = this;
	this.instance.setTransform(390,63,1,1,0,0,0,365,48);

	this.instance_1 = new lib.long_plashka();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn12, new cjs.Rectangle(-9.1,0,409.1,65), null);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(184,599.2,1,1,144.7,0,0,738.1,684.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:684.5,scaleX:1,scaleY:1,x:184.1,y:599.3,alpha:0.66},9,cjs.Ease.get(-1)).to({regY:684.6,scaleX:1,scaleY:1,x:184,y:599.2,alpha:0.289},10,cjs.Ease.get(1)).to({regY:684.5,scaleX:1,scaleY:1,x:184.1,y:599.3,alpha:0.641},10,cjs.Ease.get(-1)).to({regY:684.6,scaleX:1,scaleY:1,x:184,y:599.2,alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(95.7,472.2,1024.8,221.8);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 25
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(1060.6,888.4,1,1,54.7,0,0,738.1,684.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 25
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1060.6,888.4,1,1,9.7,0,0,738.1,684.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 25
	this.instance_2 = new lib.Символ25();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1060.5,888.3,1,1,-35.3,0,0,738.1,684.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 25
	this.instance_3 = new lib.Символ25();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1060.5,888.4,1,1,-80.3,0,0,738,684.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 25
	this.instance_4 = new lib.Символ25();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1060.4,888.3,1,1,-125.3,0,0,738,684.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Символ 25
	this.instance_5 = new lib.Символ25();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1060.3,888.2,1,1,108,0,0,738,684.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Символ 25
	this.instance_6 = new lib.Символ25();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1060.4,888.3,1,1,-170.3,0,0,738,684.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Символ 25
	this.instance_7 = new lib.Символ57();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1484.3,872.3,1,1,0,0,0,608.1,583.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(124.1,-47.9,1872.6,1872.6), null);


(lib.Символ26_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(1068.4,904.5,1,1,0,0,0,1068.4,904.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},325).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(124.1,-47.9,1872.6,1872.6);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.chery();
	this.instance.parent = this;
	this.instance.setTransform(-18,-93,0.274,0.274);

	this.instance_1 = new lib.lemon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-15,-293,0.232,0.232);

	this.instance_2 = new lib.chery();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-21,-498,0.274,0.274);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ26();
	this.instance_3.parent = this;
	this.instance_3.setTransform(8.8,-410,0.926,0.926);

	this.instance_4 = new lib.Символ25_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1.6,-341.2,0.926,0.926);

	this.instance_5 = new lib.Символ26();
	this.instance_5.parent = this;
	this.instance_5.setTransform(9,-204,0.926,0.926);

	this.instance_6 = new lib.Символ25_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1.6,-134.8,0.926,0.926);

	this.instance_7 = new lib.Символ26();
	this.instance_7.parent = this;
	this.instance_7.setTransform(8.8,2,0.926,0.926);

	this.instance_8 = new lib.Символ25_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1.6,70.8,0.926,0.926);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-21,-498,59.5,588.7), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.chery();
	this.instance.parent = this;
	this.instance.setTransform(-17,-104,0.274,0.274);

	this.instance_1 = new lib.lemon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-19,-309,0.232,0.232);

	this.instance_2 = new lib.chery();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-20,-509,0.274,0.274);

	this.instance_3 = new lib.Символ26();
	this.instance_3.parent = this;
	this.instance_3.setTransform(7,-421,0.926,0.926);

	this.instance_4 = new lib.Символ25_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(2.6,-352.2,0.926,0.926);

	this.instance_5 = new lib.Символ26();
	this.instance_5.parent = this;
	this.instance_5.setTransform(6.5,-214.6,0.926,0.926);

	this.instance_6 = new lib.Символ25_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(2.6,-145.8,0.926,0.926);

	this.instance_7 = new lib.Символ26();
	this.instance_7.parent = this;
	this.instance_7.setTransform(6.5,-9,0.926,0.926);

	this.instance_8 = new lib.Символ25_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(2.6,59.8,0.926,0.926);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-20,-509,54.5,588.7), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 34
	this.movieClip_1 = new lib.Символ34();
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(-2.6,50.6);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(26).to({y:179.8},5).to({y:389.4},5).wait(1).to({y:42.2},0).to({y:179.8},5).to({y:389.4},5).wait(1).to({y:42.2},0).to({y:179.8},5).to({y:389.4},6).wait(1).to({y:42.2},0).wait(1).to({regX:1.6,regY:-208.5,x:-1,y:-99.2},0).wait(1).to({y:-51.1},0).wait(1).to({y:-13.5},0).wait(1).to({y:17},0).wait(1).to({y:42.4},0).wait(1).to({y:63.7},0).wait(1).to({y:81.7},0).wait(1).to({y:96.9},0).wait(1).to({y:109.5},0).wait(1).to({y:119},0).wait(1).to({y:126.9},0).wait(1).to({y:133.8},0).wait(1).to({y:139.9},0).wait(1).to({y:145.4},0).wait(1).to({y:150.5},0).wait(1).to({y:155},0).wait(1).to({y:159.2},0).wait(1).to({y:162.9},0).wait(1).to({y:166.3},0).wait(1).to({y:169.3},0).wait(1).to({y:172},0).wait(1).to({y:174.3},0).wait(1).to({y:176.3},0).wait(1).to({y:177.9},0).wait(1).to({y:179.2},0).wait(1).to({y:180.1},0).wait(1).to({y:180.7},0).wait(1).to({regX:0,regY:0,x:-2.6,y:389.4},0).wait(96).to({y:42.2},0).to({y:179.8},5).to({y:389.4},5).wait(1).to({y:42.2},0).to({y:179.8},5).to({y:389.4},5).wait(1).to({y:42.2},0).to({y:179.8},5).to({y:389.4},6).wait(1).to({y:42.2},0).wait(1).to({regX:1.6,regY:-208.5,x:-1,y:-164.7},0).wait(1).to({y:-163.5},0).wait(1).to({y:-162.6},0).wait(1).to({y:-161.9},0).wait(1).to({y:-161.3},0).wait(1).to({y:-160.8},0).wait(1).to({y:-160.3},0).wait(1).to({y:-160},0).wait(1).to({y:-159.7},0).wait(1).to({y:-159.4},0).wait(1).to({y:-159.2},0).wait(1).to({y:-159.1},0).wait(1).to({y:-158.9},0).wait(1).to({y:-158.8},0).wait(1).to({y:-158.7},0).wait(1).to({y:-158.6},0).wait(1).to({y:-158.5},0).wait(1).to({y:-158.4},0).wait(1).to({y:-158.3},0).wait(1).to({y:-158.2},0).wait(2).to({y:-158.1},0).wait(2).to({y:-158},0).wait(4).to({regX:0,regY:0,x:-2.6,y:50.6},0).wait(64));

	// Символ 27
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(103.2,249.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({y:177.9},5).to({y:387.5},5).wait(1).to({y:40.3},0).to({y:177.9},5).to({y:387.5},5).wait(1).to({y:40.3},0).to({y:177.9},5).to({y:387.5},6).wait(1).to({y:40.3},0).wait(1).to({regX:8.7,regY:-203.7,x:111.9,y:-97.6},0).wait(1).to({y:-50.3},0).wait(1).to({y:-13.4},0).wait(1).to({y:16.5},0).wait(1).to({y:41.4},0).wait(1).to({y:62.3},0).wait(1).to({y:80},0).wait(1).to({y:95},0).wait(1).to({y:107.3},0).wait(1).to({y:116.7},0).wait(1).to({y:124.4},0).wait(1).to({y:131.2},0).wait(1).to({y:137.2},0).wait(1).to({y:142.6},0).wait(1).to({y:147.5},0).wait(1).to({y:152},0).wait(1).to({y:156.1},0).wait(1).to({y:159.8},0).wait(1).to({y:163.1},0).wait(1).to({y:166.1},0).wait(1).to({y:168.7},0).wait(1).to({y:171},0).wait(1).to({y:172.9},0).wait(1).to({y:174.5},0).wait(1).to({y:175.8},0).wait(1).to({y:176.7},0).wait(1).to({y:177.2},0).wait(1).to({regX:0,regY:0,x:103.2,y:381.1},0).wait(96).to({y:40.3},0).to({y:177.9},5).to({y:387.5},5).wait(1).to({y:40.3},0).to({y:177.9},5).to({y:387.5},5).wait(1).to({y:40.3},0).to({y:177.9},5).to({y:387.5},6).wait(1).to({y:40.3},0).wait(1).to({regX:8.7,regY:-203.7,x:111.9,y:-123},0).wait(1).to({y:-93.9},0).wait(1).to({y:-71.3},0).wait(1).to({y:-52.8},0).wait(1).to({y:-37.5},0).wait(1).to({y:-24.7},0).wait(1).to({y:-13.8},0).wait(1).to({y:-4.7},0).wait(1).to({y:3},0).wait(1).to({y:8.7},0).wait(1).to({y:13.4},0).wait(1).to({y:17.6},0).wait(1).to({y:21.3},0).wait(1).to({y:24.6},0).wait(1).to({y:27.6},0).wait(1).to({y:30.4},0).wait(1).to({y:32.9},0).wait(1).to({y:35.2},0).wait(1).to({y:37.2},0).wait(1).to({y:39},0).wait(1).to({y:40.6},0).wait(1).to({y:42},0).wait(1).to({y:43.2},0).wait(1).to({y:44.2},0).wait(1).to({y:45},0).wait(1).to({y:45.5},0).wait(1).to({y:45.9},0).wait(1).to({regX:0,regY:0,x:103.2,y:249.7},0).wait(70));

	// Символ 26
	this.instance_1 = new lib.Символ33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-119.4,265.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({y:175.4},5).to({y:385},5).wait(1).to({y:37.8},0).to({y:175.4},5).to({y:385},5).wait(1).to({y:37.8},0).to({y:175.4},5).to({y:385},6).wait(1).to({y:37.8},0).wait(1).to({regX:7.2,regY:-214.7,x:-112.2,y:-107.6},0).wait(1).to({y:-57.8},0).wait(1).to({y:-18.9},0).wait(1).to({y:12.6},0).wait(1).to({y:38.9},0).wait(1).to({y:60.9},0).wait(1).to({y:79.5},0).wait(1).to({y:95.3},0).wait(1).to({y:108.3},0).wait(1).to({y:118.1},0).wait(1).to({y:126.3},0).wait(1).to({y:133.4},0).wait(1).to({y:139.7},0).wait(1).to({y:145.4},0).wait(1).to({y:150.6},0).wait(1).to({y:155.3},0).wait(1).to({y:159.6},0).wait(1).to({y:163.5},0).wait(1).to({y:167},0).wait(1).to({y:170.1},0).wait(1).to({y:172.9},0).wait(1).to({y:175.3},0).wait(1).to({y:177.4},0).wait(1).to({y:179},0).wait(1).to({y:180.4},0).wait(1).to({y:181.3},0).wait(1).to({y:181.9},0).wait(1).to({regX:0,regY:0,x:-119.4,y:396.8},0).wait(96).to({y:-29.6},0).to({y:175.4},5).to({y:385},5).wait(1).to({y:37.8},0).to({y:175.4},5).to({y:385},5).wait(1).to({y:37.8},0).to({y:175.4},5).to({y:385},6).wait(1).to({y:37.8},0).wait(1).to({regX:7.2,regY:-214.7,x:-112.2,y:-132.9},0).wait(1).to({y:-101.4},0).wait(1).to({y:-76.7},0).wait(1).to({y:-56.7},0).wait(1).to({y:-40.1},0).wait(1).to({y:-26.1},0).wait(1).to({y:-14.3},0).wait(1).to({y:-4.4},0).wait(1).to({y:3.9},0).wait(1).to({y:10.2},0).wait(1).to({y:15.3},0).wait(1).to({y:19.8},0).wait(1).to({y:23.8},0).wait(1).to({y:27.5},0).wait(1).to({y:30.7},0).wait(1).to({y:33.7},0).wait(1).to({y:36.5},0).wait(1).to({y:38.9},0).wait(1).to({y:41.1},0).wait(1).to({y:43.1},0).wait(1).to({y:44.9},0).wait(1).to({y:46.4},0).wait(1).to({y:47.7},0).wait(1).to({y:48.8},0).wait(1).to({y:49.6},0).wait(1).to({y:50.2},0).wait(1).to({y:50.6},0).wait(1).to({regX:0,regY:0,x:-119.4,y:265.4},0).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.4,-455.4,286.7,804.8);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// light
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(962,537,1,1,0,0,0,563,341);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhF2A0WUgaPgyMAaPg2fMCLuAAAUAaNA2vgaOAx8g");
	mask.setTransform(963.2,539.1);

	// Слой 7
	this.icons = new lib.Символ23();
	this.icons.parent = this;
	this.icons.setTransform(975.1,607.1,3.228,3.228,0,0,0,0,0.2);

	var maskedShapeInstanceList = [this.icons];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.icons).wait(1));

	// slot
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(4,1,1915.3,1076.4), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// plashka
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(293.5,5.3,0.439,0.439,0,0,0,961.4,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 11
	this.btn12 = new lib.Символ105();
	this.btn12.parent = this;
	this.btn12.setTransform(106,238.9);
	new cjs.ButtonHelper(this.btn12, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn12).wait(1));

	// Слой 9
	this.instance_1 = new lib.btn12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(993.5,954.5,1,1,0,0,0,390.5,63);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 8
	this.instance_2 = new lib.Символ110();
	this.instance_2.parent = this;
	this.instance_2.setTransform(305.3,248.4,0.444,0.386,0,0,0,983.2,146.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01043B").s().p("AgJCAQgQgEgNgHQgNgIgLgKQgLgKgJgMQgIgNgFgPQgEgOgDgfIguAAIAAB9IgIAAIAAkCIAIAAIAAB+IAuAAQAAgNADgNQACgNAFgMQAEgMAHgKQAHgLAKgKQAJgIAKgHQALgHAMgFQALgEAMgCQAMgDANAAQAPAAANADQANADANAFQALAFALAHQALAHAIAJQAJAJAGALQAIAKAEAMQAEAMADANQADAOAAANQgBAWgFAUQgFARgKARQgKAPgMAKQgMALgPAHQgNAGgSAFQgPADgQAAQgTABgQgGgAACh7QgKACgLAEQgLAEgKAHQgKAGgJAJQgJAKgHAKQgHAKgEANQgEALgCANIgCAYQACAgAFANQAFAOAIAMQAHANALAKQAKAJAMAHQANAHAOAEQAQAFARAAQASAAASgFQASgFAPgJQAQgLAMgPQAMgPAHgUQAFgOADggQAAgMgDgNQgCgMgEgMQgFgLgGgLQgGgKgJgIQgIgJgKgGQgKgHgKgFQgMgEgMgDQgNgCgOgBg");
	this.shape.setTransform(1178.7,921.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01043B").s().p("ABjCDIhjj5IhiD5IgJAAIBokFIAHAAIBoEFg");
	this.shape_1.setTransform(1148.9,921.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#01043B").s().p("AhHCCIAAkDICOAAIAAAIIiGAAIAAB2ICDAAIAAAHIiDAAIAAB1ICHAAIAAAJg");
	this.shape_2.setTransform(1128.4,921.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#01043B").s().p("ABnCgIAAg9IjNAAIAAA9IgIAAIAAhEIAOgBQAJgFAGgIQAGgHAEgLQAFgMAEgaQADgTADgmIAIh8ICLAAIAAD7IAUAAIAABEgAgwgkQgDAngDAUQgJA4gYANICqAAIAAjzIh8AAg");
	this.shape_3.setTransform(1106.1,924.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#01043B").s().p("AhHCCIAAkDICOAAIAAAIIiGAAIAAB2ICDAAIAAAHIiDAAIAAB1ICHAAIAAAJg");
	this.shape_4.setTransform(1084.9,921.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#01043B").s().p("ABPCCIAAiAIidAAIAACAIgIAAIAAkDIAIAAIAAB9ICdAAIAAh9IAIAAIAAEDg");
	this.shape_5.setTransform(1064.2,921.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#01043B").s().p("AgJCAQgPgEgOgHQgNgIgLgKQgLgKgIgMQgJgNgFgPQgEgOgDgfIguAAIAAB9IgIAAIAAkCIAIAAIAAB+IAuAAQAAgNADgNQACgNAFgMQAEgMAHgKQAHgLAKgKQAIgIAMgHQAKgHAMgFQALgEAMgCQAMgDAOAAQAOAAANADQANADANAFQALAFALAHQAKAHAJAJQAJAJAGALQAIAKAEAMQAEAMADANQADAOAAANQgBAWgEAUQgGARgKARQgKAPgMAKQgNALgOAHQgNAGgSAFQgPADgPAAQgTABgRgGgAACh7QgKACgLAEQgLAEgKAHQgLAGgIAJQgJAKgHAKQgGAKgFANQgEALgCANIgDAYQADAgAFANQAFAOAIAMQAHANALAKQAJAJANAHQANAHAOAEQAQAFASAAQARAAASgFQASgFAPgJQAQgLAMgPQAMgPAIgUQAEgOADggQAAgMgDgNQgCgMgEgMQgFgLgGgLQgHgKgHgIQgJgJgJgGQgLgHgKgFQgMgEgMgDQgNgCgNgBg");
	this.shape_6.setTransform(1026.5,921.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#01043B").s().p("AgiCCIAhhJIhYi6IAJAAIBSCwIBOiwIAJAAIhyEDg");
	this.shape_7.setTransform(998.3,921.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#01043B").s().p("ABnCgIAAg9IjOAAIAAA9IgHAAIAAhEIAOgBQAJgFAHgIQAFgHAEgLQAFgMAEgaQADgTADgmIAHh8ICMAAIAAD7IAUAAIAABEgAgwgkQgDAngDAUQgJA4gYANICqAAIAAjzIh8AAg");
	this.shape_8.setTransform(975.5,924.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#01043B").s().p("ACKCCIh/h/IAAgGIB2h+IALAAIh5CBICDCCgAgDCCIAAkDIAHAAIAAEDgAiVCCICDiCIh4iBIAKAAIB2B+IAAAGIh+B/g");
	this.shape_9.setTransform(947.4,921.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#01043B").s().p("ABjCDIgjhWIh/AAIgjBWIgJAAIBokFIAHAAIBoEFgAA9AlIg9icIg8CcIB5AAg");
	this.shape_10.setTransform(920.1,921.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#01043B").s().p("ABICCIiNh/IAAgGICEh+IAMAAIiICBICSCCgAhUCCIAAkDIAJAAIAAEDg");
	this.shape_11.setTransform(899.6,921.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#01043B").s().p("ABICCIiNh/IAAgGICJh+IANAAIiOCBICSCCgAhUCCIAAkDIAJAAIAAEDg");
	this.shape_12.setTransform(870.7,921.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#01043B").s().p("AgTCBQgNgDgLgFQgMgFgJgGQgLgIgIgJIgQgSQgHgLgFgLQgEgLgDgNQgDgOAAgOQAAgOADgNQADgNAEgMQAFgMAHgLQAHgJAJgKQAIgIALgIQAJgHAMgFQALgEANgDQAMgCAMgBQANABANACQAMADALAEQAMAFAKAHQAKAIAIAIQAJAKAHAJQAHALAFAMIgIAAQgGgOgTgWQgIgIgJgHQgKgGgKgFQgMgEgLgDQgMgDgMABQgLgBgMADQgMADgKAEQgLAFgKAGQgJAHgIAIQgIAJgGAJQgHAKgFALQgEALgCANQgDAMAAANQAAANADANQACALAEALQAFALAHAKIAOARQAIAJAJAGQAKAHALAEQAKAGAMABQAMADALAAQAMAAAMgDQALgBAMgGQAKgEAKgHQAJgGAIgJIANgQQAHgJAFgLIAIAAQgFAMgHALQgHALgJAIQgIAJgKAIQgKAGgMAFQgLAFgMADQgNADgNgBQgMABgMgDg");
	this.shape_13.setTransform(846,921.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#01043B").s().p("ABjCDIgjhWIh/AAIgjBWIgJAAIBokFIAHAAIBoEFgAA9AlIg9icIg8CcIB5AAg");
	this.shape_14.setTransform(820.9,921.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#01043B").s().p("AhbCBIAAkBIBoAAQALAAAIACQAJADAIAFQANAKAGARQAFALAAAOQAAANgFAMQgDAKgIAIQgHAIgJAFQAMADALAHQAIAFAHAKQAGAJADALQAEAMAAALQAAAOgFAMQgEANgIAKQgKAKgMAGQgNAGgRAAgAhTB5IBqAAQAPAAAMgFQALgFAIgJQAHgJAEgLQAEgLAAgMQAAgMgEgMQgEgLgHgJQgIgKgLgFQgMgEgPAAIhqAAgAhTgMIBgAAQAJAAAIgDQAIgCAFgFQAMgIAGgOQAEgLAAgLQAAgLgEgLQgGgOgMgJQgFgEgIgDQgIgCgJAAIhgAAg");
	this.shape_15.setTransform(798.4,921.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#01043B").s().p("ABPCCIAAiAIidAAIAACAIgIAAIAAkDIAIAAIAAB9ICdAAIAAh9IAIAAIAAEDg");
	this.shape_16.setTransform(775.7,921.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#01043B").s().p("AgdCAQgQgEgMgIQgNgIgIgMQgJgMgCgQIAAgDIAIgBIAAAEQACANAIALQAIAKAMAIQALAHAOAEQANAEANAAQAOAAAPgFQAPgEALgIQANgJAHgMQAHgMAAgPIgCgOQgCgMgIgIQgHgIgMgEQgKgEgOgDIgagDQgogEgRgIQgNgHgIgLQgIgMgCgSQAAgLADgLQADgMAHgJQAGgIAIgGQAJgGAJgEQANgGAdgCQAOAAAOADQAOAEALAHQALAHAIAKQAIAMACANIABAFIgIABIAAgEQgEgQgKgLQgLgMgSgGQgRgGgQABQgUAAgRAHQgJADgIAGQgHAFgGAHQgGAIgDALQgDAJABALQABAPAIALQAHAJANAGQAPAHAlAFIAcADQAPACALAFQANAFAIAJQAJAJADAOIABAQQAAARgIAOQgHANgOAJQgNAKgQAFQgRAEgPAAQgPAAgOgEg");
	this.shape_17.setTransform(753.8,921.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#01043B").s().p("ABjCDIgjhWIh/AAIgjBWIgJAAIBokFIAHAAIBoEFgAA9AlIg9icIg8CcIB5AAg");
	this.shape_18.setTransform(731.3,921.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#01043B").s().p("AgUCBQgMgDgLgFQgLgFgLgGQgKgIgIgJIgQgSQgHgLgFgLQgEgLgDgNQgDgOAAgOQAAgOADgNQADgNAEgMQAFgMAHgLQAHgJAJgKQAIgIAKgIQALgHALgFQALgEAMgDQANgCAMgBQANABANACQAMADALAEQALAFALAHQAKAIAJAIQAIAKAHAJQAIALAEAMIgIAAQgHgOgSgWQgIgIgKgHQgJgGgKgFQgMgEgLgDQgMgDgMABQgLgBgMADQgLADgLAEQgLAFgKAGQgJAHgIAIQgIAJgGAJQgHAKgEALQgFALgCANQgDAMAAANQAAANADANQACALAFALQAEALAHAKIAOARQAIAJAJAGQAKAHALAEQALAGALABQAMADALAAQAMAAAMgDQALgBAMgGQAKgEAJgHQAKgGAIgJIAOgQQAGgJAFgLIAIAAQgEAMgIALQgHALgIAIQgJAJgKAIQgLAGgLAFQgLAFgMADQgNADgNgBQgMABgNgDg");
	this.shape_19.setTransform(705.9,921.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// slot
	this.slot = new lib.Символ13();
	this.slot.parent = this;
	this.slot.setTransform(296.8,150.3,0.237,0.237,0,0,0,960.1,540.1);

	this.timeline.addTween(cjs.Tween.get(this.slot).wait(1));

	// Слой 6
	this.instance_3 = new lib.Символ114();
	this.instance_3.parent = this;
	this.instance_3.setTransform(300.5,45.4,0.476,0.476,0,0,0,210.7,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ102();
	this.instance_4.parent = this;
	this.instance_4.setTransform(488,437.2,0.815,0.815,0,0,0,484.5,445.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 5
	this.ru4ka = new lib.Символ21копия();
	this.ru4ka.parent = this;
	this.ru4ka.setTransform(502.8,104.5,0.264,0.264,0,0,0,148.6,258.6);

	this.timeline.addTween(cjs.Tween.get(this.ru4ka).wait(1));

	// denga
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(78,-69,0.335,0.335,0,0,0,48,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// light
	this.instance_6 = new lib.Символ26_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(305.5,142.8,0.379,0.379,0,0,0,1068.5,904.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 4
	this.instance_7 = new lib.bg();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-16,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(168.5,-68.2,1329.8,1174.8);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1492162978394", id:"bg"},
		{src:"images/chery.png?1492162978394", id:"chery"},
		{src:"images/coin1.png?1492162978394", id:"coin1"},
		{src:"images/coin10.png?1492162978394", id:"coin10"},
		{src:"images/coin2.png?1492162978394", id:"coin2"},
		{src:"images/coin3.png?1492162978394", id:"coin3"},
		{src:"images/coin4.png?1492162978394", id:"coin4"},
		{src:"images/coin5.png?1492162978394", id:"coin5"},
		{src:"images/coin6.png?1492162978394", id:"coin6"},
		{src:"images/coin7.png?1492162978394", id:"coin7"},
		{src:"images/coin8.png?1492162978394", id:"coin8"},
		{src:"images/coin9.png?1492162978394", id:"coin9"},
		{src:"images/diamond.png?1492162978394", id:"diamond"},
		{src:"images/lemon.png?1492162978394", id:"lemon"},
		{src:"images/light.jpg?1492162978394", id:"light"},
		{src:"images/light_up.png?1492162978394", id:"light_up"},
		{src:"images/logotype.png?1492162978394", id:"logotype"},
		{src:"images/long_btn.png?1492162978394", id:"long_btn"},
		{src:"images/long_plashka.png?1492162978394", id:"long_plashka"},
		{src:"images/red_r.png?1492162978394", id:"red_r"},
		{src:"images/richagg.png?1492162978394", id:"richagg"},
		{src:"images/shadow_down.png?1492162978394", id:"shadow_down"},
		{src:"images/slot1.png?1492162978394", id:"slot1"},
		{src:"images/slot_body1.png?1492162978394", id:"slot_body1"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;