(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.arrow1 = function() {
	this.initialize(img.arrow1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1148,540);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.bnt = function() {
	this.initialize(img.bnt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,344,96);


(lib.btn_ma = function() {
	this.initialize(img.btn_ma);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,378,139);


(lib.cash_b = function() {
	this.initialize(img.cash_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,872,82);


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


(lib.depoz = function() {
	this.initialize(img.depoz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,909,128);


(lib.diamond = function() {
	this.initialize(img.diamond);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,229,166);


(lib.dvesti = function() {
	this.initialize(img.dvesti);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,872,128);


(lib.gift = function() {
	this.initialize(img.gift);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,359,354);


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


(lib.red_r = function() {
	this.initialize(img.red_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.ri4ag = function() {
	this.initialize(img.ri4ag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,273);


(lib.ri4ag_tube = function() {
	this.initialize(img.ri4ag_tube);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,306);


(lib.round = function() {
	this.initialize(img.round);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1098,1098);


(lib.shadow_down = function() {
	this.initialize(img.shadow_down);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1125,680);


(lib.slot_1 = function() {
	this.initialize(img.slot_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.txt1 = function() {
	this.initialize(img.txt1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,779,51);


(lib.txt2 = function() {
	this.initialize(img.txt2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,871,51);// helper functions:

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


(lib.Символ101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#387408").s().p("A4fFiIAArDMAw+AAAIAALDg");
	this.shape.setTransform(156.8,35.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#387408").s().p("AKiClIAAg5IkVAAIAAkJIA0AAIAADbIBIAAIAAjbIAzAAIAADbIBIAAIAAjbIAzAAIAADbIAbAAIAABngAr/ClIAAg5IkVAAIAAkJIAzAAIAADbIBIAAIAAjbIAyAAIAADbIBJAAIAAjbIAzAAIAADbIAbAAIAABngAaTBxQgOgCgMgDQgMgEgLgGQgKgHgIgJQgIgJgEgNQgFgNABgRIAyAAQAAAHAEAHQADAHAHAGQAHAGAMAEQALAEAQAAQAQAAAKgEQAKgDAIgGQAGgGADgHQADgIAAgIQAAgMgEgIQgEgHgHgDQgGgEgIgCIg+gBIAAgoIAuAAQAIAAAHgCQAHgCAFgFQAFgEADgHQADgGABgJQAAgLgFgHQgFgHgGgFQgHgEgJgBIgRgCQgLAAgIACIgNAGIgLAIIgFAJIgEAIIgBAHIgyAAIABgOQABgJAEgJQAEgJAIgJQAGgJANgIQAMgHARgFQARgFAZAAQAaAAASAHQASAHAMALQAMAKAFANQAGANgBANIgBAOQgCAIgEAIQgFAHgIAGQgHAHgNAEIAAAAIAUAIIALAHQAFAFAEAHQAEAHADAJQACAKAAANQABARgIAQQgHAPgPAMQgNALgWAHQgUAGgcAAgAXxBsIgRg3IhiAAIgTA3Ig6AAIBfkJIA/AAIBfEJgAXQAHIgghoIgBAAIgiBoIBDAAgARSBsIAAkJIB4AAQAVAAAQAGQAPAGAKALQALALAFAPQAFAQAAAUQAAATgGAQQgGAPgLAMQgLAKgQAGQgRAGgUAAIg9AAIAABggASJghIA1AAQASAAALgJQAKgJAAgVQAAgKgCgIQgDgHgFgFQgFgFgHgCQgIgCgJAAIg1AAgAL0BsIAAkJIDEAAIAAAuIiPAAIAAA7ICDAAIAAAuIiDAAIAABCICUAAIAAAwgACbBsIAAkJIDEAAIAAAuIiPAAIAAA7ICDAAIAAAuIiDAAIAABCICVAAIAAAwgAjABsIAAkJIA3AAIAABpIBEAAIAUADQALACALAFQAKAFAJAJQAIAJAFAOQAFAMAAAVQAAAUgFANQgFAOgIAJQgIAJgLAFQgKAFgJACIgeADgAiJA+IA/gBQAHgBAHgEQAHgEAFgHQAEgHgBgMQABgMgEgHQgFgHgHgDQgGgEgJgBIg+gBgAlrBsIAAjbIhRAAIAAguIDZAAIAAAuIhRAAIAADbgAoEBsIgRg3IhiAAIgTA3Ig7AAIBgkJIA/AAIBeEJgAolAHIghhoIgBAAIgiBoIBEAAgAxyBsIgRg3IhiAAIgSA3Ig7AAIBfkJIBAAAIBdEJgAySAHIgihoIgBAAIgiBoIBFAAgA4SBsIAAkJIB5AAQAVAAAQAGQAPAGALALQAKALAFAPQAFAQAAAUQAAATgGAQQgGAPgLAMQgLAKgRAGQgQAGgVAAIg8AAIAABggA3aghIA0AAQATAAALgJQALgJAAgVQgBgKgCgIQgDgHgFgFQgFgFgIgCQgHgCgKAAIg0AAgA8cBsIAAkJICBAAQARAAAMADQAMADAKAGQAIAFAHAHQAGAHADAHIAGAPIABAPIgBASQgDAIgDAHQgEAGgHAGIgOAJQANAGAIAHQAJAHADAJQAFAIABAJIACARQAAAUgHAOQgHAPgNAKQgNAKgSAGQgTAFgWAAgA7nA+IBFAAQAJAAAIgCQAHgCAHgFQAFgEADgHQADgHABgJQgBgMgDgHQgFgHgGgCQgGgEgHgBIgRgCIhDAAgA7ng0IBEAAIAOgCQAHgBAFgEQAFgEADgGQADgFAAgJQAAgIgDgFQgDgGgFgDQgEgEgGgBIgPgBIhFAAg");
	this.shape.setTransform(187.3,19.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ99, new cjs.Rectangle(5.1,3.3,364.3,33), null);


(lib.Символ94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#387408").s().p("AMlClIAAg5IjDAAIAAkJIA4AAIAADbIBnAAIAAjbIA4AAIAADbIAcAAIAABngAlPBpQgWgKgRgTQgPgSgIgZQgIgaAAgfQAAgZAEgTQAFgUAJgQQAIgPALgLQAMgMAOgHQANgHAPgEQAOgEAPAAQAWAAARAFQAQAFAOAHQAMAIAJAJQAJAKAGALQAFAKADAKIADATIg3AAIgCgIIgFgKIgHgKIgLgJQgGgEgJgCQgJgCgMAAIgLABIgPAFQgHADgHAGQgHAHgGAKQgFAKgEAPQgDAOAAAUQAAAVAEAQQAFARAJAMQAIAMAMAGQAMAGAPAAQASAAALgFQALgFAGgIQAHgIADgIIAGgPIA2AAQgEAZgLASQgKASgPAMQgPANgSAFQgUAGgVAAQgdAAgXgJgAUgBsIAAhpIhIABQgLAAgIAFQgHAEgGAJQgEAJgBAQIgEAoIgDAQIgCAFIg6AAIAFgJIACgIIAJhFQACgJAEgIQAEgGAHgFQAIgGALgEIgLgEQgGgDgHgHQgJgJgEgMQgGgNAAgPIACgSIAGgQIAJgOIAKgLQAIgHAKgEIAVgFICbgDIAAEJgATOhtIgHACIgIAEIgHAGIgFAKQgCAFAAAIQAAAJADAGQACAFAEAEIAJAGIALADIAKABIBIAAIAAhGIg/AAIgEAAgAQUBsIAAizIAAAAIhqCzIg4AAIAAkJIA2AAIAAC0IAAAAIBqi0IA4AAIAAEJgAIEBsIgRg3IhhAAIgTA3Ig7AAIBgkJIA/AAIBeEJgAHkAHIghhoIgBAAIgiBoIBEAAgABlBsIAAkJIB5AAQAUAAARAGQAPAGAKALQALALAEAPQAGAQAAAUQAAATgHAQQgFAPgMAMQgLAKgQAGQgRAGgUAAIg9AAIAABggACcghIA1AAQATAAAKgJQALgJAAgVQAAgKgDgIQgCgHgGgFQgFgFgHgCQgIgCgJAAIg1AAgAhFBsIAAjbIhRAAIAAguIDYAAIAAAuIhQAAIAADbgAn1BsIAAizIgBAAIhpCzIg4AAIAAkJIA1AAIAAC0IABAAIBqi0IA3AAIAAEJgAtnBsIAAkJICyAAIAAAuIh7AAIAADbgAxeBsIAAkJIDDAAIAAAuIiOAAIAAA7ICCAAIAAAuIiCAAIAABCICUAAIAAAwgA1VBsIAAkJIB5AAQAVAAAQAGQAPAGALALQAKALAFAPQAFAQAAAUQAAATgGAQQgGAPgLAMQgMAKgQAGQgQAGgVAAIg8AAIAABggA0dghIA0AAQATAAALgJQALgJAAgVQAAgKgDgIQgDgHgFgFQgFgFgIgCQgHgCgKAAIg0AAg");
	this.shape.setTransform(141.7,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ94, new cjs.Rectangle(5.2,8.1,273.1,33), null);


(lib.Символ93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA2CFIAAizIgBAAIhoCzIg4AAIAAkJIA1AAIAAC0IABAAIBpi0IA3AAIAAEJg");
	this.shape.setTransform(15.5,17.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ93, new cjs.Rectangle(4.7,4,21.5,26.6), null);


(lib.Символ92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(242.4,16.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ92, new cjs.Rectangle(3.2,-3.2,478.5,39.4), null);


(lib.Символ91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dvesti();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ91, new cjs.Rectangle(0,0,872,128), null);


(lib.Символ90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.depoz();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ90, new cjs.Rectangle(0,0,909,128), null);


(lib.Символ87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AZsDFIAAg6Ii6AAIAAA6IgiAAIAAhZIAZAAIAHgSIALguIAJhMIAEhfICoAAIAADrIAeAAIAABZgAXiAHIgOBSIgGATIB9AAIAAjMIhiAAgA4mCNQgTgGgOgKQgPgKgKgNQgLgOgHgPQgHgQgEgRQgDgRAAgRQAAgeAJgaQAIgaARgTQARgSAYgKQAYgLAfAAQAfAAAYALQAYAKARASQARATAJAaQAIAaAAAeQAAARgDARQgEARgHAQQgHAPgKAOQgLANgPAKQgOAKgSAGQgTAFgWAAQgWAAgSgFgA4mheQgSAIgMAOQgMAPgGAUQgHAUAAAXQAAAYAGAUQAGAUAMAPQAMAOASAIQARAIAYAAQAYAAASgIQASgIALgOQAMgPAGgUQAGgUAAgYQAAgXgHgUQgGgUgMgPQgMgOgSgIQgRgIgXAAQgWAAgSAIgAfnCLIAAjrIhbAAIAAgfIDZAAIAAAfIhaAAIAADrgAaqCLIAAkKIDDAAIAAAfIifAAIAABTICTAAIAAAeIiTAAIAABbICiAAIAAAfgAVXCLIhch6IgYAAIAAB6IgkAAIAAh6IgYAAIhcB6IgxAAIBuiKIhsiAIAuAAIBdBzIAYAAIAAhzIAkAAIAABzIAYAAIBehzIAvAAIhsB/IBsCLgAJtCLIAAkKIAkAAIAADrIBfAAIAAjrIAjAAIAADrIBfAAIAAjrIAkAAIAAEKgAITCLIAAkKIAkAAIAAEKgAEmCLIAAkKIAkAAIAABuIBHAAQAYAAASAGQASAFALAJQALAKAGAPQAGAPAAASQAAASgGAOQgGAOgKALQgLAKgQAGQgQAFgUAAgAFKBsIBLAAQALAAAKgCQAJgDAHgFQAHgGAEgJQAEgJAAgNQAAgOgEgJQgEgJgIgFQgIgGgLgCQgLgDgNAAIhEAAgAAuCLIAAkKIBxAAQAWAAAQAGQAQAFAKALQALAKAFAOQAFAPAAARQAAASgFAOQgFAPgLAJQgKAKgQAGQgQAFgWAAIhNAAIAABvgABSgCIBJAAQAcAAANgMQANgMAAgXQAAgXgNgMQgNgMgcAAIhJAAgAiSCLIAAkKICcAAIAAAfIh4AAIAADrgAjtCLIAAjYIgBAAIiHDYIgqAAIAAkKIAkAAIAADXIABAAICIjXIApAAIAAEKgAn5CLIAAkKIAkAAIAAEKgArmCLIAAkKIAkAAIAABuIBHAAQAYAAASAGQASAFALAJQALAKAGAPQAGAPAAASQAAASgGAOQgGAOgKALQgLAKgQAGQgQAFgUAAgArCBsIBLAAQALAAAKgCQAJgDAHgFQAHgGAEgJQAEgJAAgNQAAgOgEgJQgEgJgIgFQgIgGgLgCQgLgDgNAAIhEAAgAveCLIAAkKIB8ABIAWADQAKADAIAFQAJAFAGAIQAHAIAEALQADAKAAANIgBAPQgCAIgEAIQgFAIgGAGQgHAHgKAEIARAHQAIAFAHAHQAHAIAFALQAEALAAAPIgCATQgCAJgFAJQgEAIgIAIQgHAIgKAGQgLAGgNADQgOADgRAAgAu6BsIBIAAQARAAAMgDQAMgEAIgGQAHgGADgIQADgJAAgLQAAgKgDgJQgDgIgHgGQgIgGgMgEQgMgDgRAAIhIAAgAu6gNIBDAAQARAAALgDQALgEAGgGQAGgFACgIIACgRQAAgJgDgIQgDgHgGgFQgHgFgKgDQgLgDgPAAIhDAAgAygCLIAAjYIgBAAIiHDYIgqAAIAAkKIAkAAIAADXIABAAICIjXIApAAIAAEKgA9rCLIAAkKIB7ABIAWADQAKADAJAFQAIAFAHAIQAHAIADALQAEAKAAANIgCAPQgCAIgEAIQgEAIgHAGQgHAHgKAEIARAHQAJAFAHAHQAHAIAEALQAFALAAAPIgCATQgCAJgFAJQgFAIgHAIQgHAIgLAGQgKAGgNADQgOADgRAAgA9HBsIBHAAQASAAAMgDQAMgEAHgGQAHgGAEgIQADgJAAgLQAAgKgDgJQgEgIgHgGQgHgGgMgEQgMgDgSAAIhHAAgA9HgNIBCAAQASAAALgDQALgEAGgGQAFgFACgIIACgRQAAgJgCgIQgDgHgHgFQgGgFgLgDQgKgDgQAAIhCAAgEggKACLIAAjrIhaAAIAAgfIDZAAIAAAfIhbAAIAADrgA0EiUQgMgEgJgHQgJgHgFgJQgEgKAAgLIAhAAQACAPAJAGQAKAGAOAAQAPAAAJgHQAJgGADgOIAgAAQAAAMgEAJQgGAKgIAHQgKAGgMAEQgNADgPAAQgQAAgNgDg");
	this.shape.setTransform(217.3,-8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ87, new cjs.Rectangle(2.4,-28,429.9,39.4), null);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn_ma();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ77, new cjs.Rectangle(0,0,378,139), null);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gift();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.982,0.982);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ75, new cjs.Rectangle(0,0,352.4,347.5), null);


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRBYQgJAAgIgDQgHgDgHgEQgHgEgFgGQgFgFgCgJQgDgIAAgLIAhAAQAAAFACAEQACAFAEADQAFAFAHACQAHADAKgBQAJABAHgDQAHgCAEgEQAFgEACgFIABgKQAAgHgCgFQgDgFgEgCQgEgDgFgBIgJAAIgeAAIAAgZIAdAAQAFAAAEgCQAFgBADgDIAFgHQACgEAAgGQAAgHgDgEQgCgFgFgDQgEgDgGAAIgKgBQgHAAgFABIgJADIgGAGIgEAFIgCAGIAAAEIghAAIABgJIADgMIAHgLQAFgGAIgEQAHgGAMgCQALgDAOgBQARAAALAFQAMAFAIAGQAHAHAEAIQADAIAAAJIgBAJQgBAFgDAFQgDAEgFAFQgFAEgIACIAAABIAGACIAHACIAHAEIAGAHQADAFABAHQACAGAAAIQAAALgFAKQgEAKgJAIQgKAGgNAFQgNAFgRgBg");
	this.shape.setTransform(448.3,36.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAjBVIAAhyIgBAAIhCByIgkAAIAAipIAiAAIAABzIABAAIBChzIAkAAIAACpg");
	this.shape_1.setTransform(431.9,36.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhABVIAAipIBMAAQAOAAAKADQAKAFAGAHQAHAHADAJQADAKAAAOQAAAMgEAJQgDAKgIAGQgHAIgKAEQgLAEgNAAIgmAAIAAA9gAgdgEIAhAAQAMAAAHgHQAHgFAAgNQAAgHgCgFQgCgFgDgDQgDgDgFgCQgFgBgGAAIghAAg");
	this.shape_2.setTransform(416,36.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiBVIAAiMIhDAAIAACMIgjAAIAAipICJAAIAACpg");
	this.shape_3.setTransform(399,36.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAjBrIAAhyIAAAAIhDByIgkAAIAAipIAiAAIAABzIAAAAIBDhzIAkAAIAACpgAgdhPQgMgJAAgSIAbAAIABAGIAEAFQABADADABQAEABAEAAQAFAAADgBIAGgDIADgGIAAgGIAbAAQAAASgLAJQgLAIgWAAQgWAAgKgIg");
	this.shape_4.setTransform(375.4,34.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA7BVIAAipIAkAAIAACpgAgTBVIhKAAIAAipIAjAAIAABDIAiAAIAKAAIAMACQAHABAGADQAHAEAFAFQAGAFAEAJQADAJAAAMQAAANgDAKQgEAIgGAGQgEAFgHADIgMAFIgLACgAg6A4IAeAAIAKgBIAJgDQAFgDACgEQACgEAAgIQAAgIgBgEQgDgGgFgBQgEgDgFAAIgMgBIgcAAg");
	this.shape_5.setTransform(355.9,36.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAhBVIAAhMIhCAAIAABMIgjAAIAAipIAjAAIAABAIBCAAIAAhAIAkAAIAACpg");
	this.shape_6.setTransform(335.9,36.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAJBVIhJAAIAAipIAjAAIAABDIAhAAIAKAAIANACQAHABAGADQAHAEAGAFQAFAFAEAJQADAJAAAMQAAANgDAKQgEAIgFAGQgFAFgHADIgNAFIgLACgAgdA4IAdAAIAKgBIAKgDQAEgDADgEQADgEAAgIQAAgIgDgEQgDgGgEgBQgFgDgFAAIgKgBIgdAAg");
	this.shape_7.setTransform(320,36.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhABWIgKgDIAAggIADABIAEABIADAAIACAAIAGAAQADgBACgEQACgCACgFIACgPIACgXIABgeIAAg7IB1AAIAACpIgjAAIAAiLIgxAAIAAAaIgBAnIgDAgQgDANgDAJQgEAIgFAGQgFAFgGACQgHADgHAAg");
	this.shape_8.setTransform(302.7,37);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag/BVIAAipIB8AAIAAAdIhaAAIAAAmIBSAAIAAAdIhSAAIAAAqIBdAAIAAAfg");
	this.shape_9.setTransform(287.2,36.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRBVIAAiMIg0AAIAAgdICLAAIAAAdIg0AAIAACMg");
	this.shape_10.setTransform(271.5,36.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAjBVIAAhyIgBAAIhCByIgkAAIAAipIAiAAIAABzIABAAIBChzIAkAAIAACpg");
	this.shape_11.setTransform(255.7,36.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAhBVIAAhMIhBAAIAABMIgkAAIAAipIAkAAIAABAIBBAAIAAhAIAkAAIAACpg");
	this.shape_12.setTransform(238.6,36.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhABWIgKgDIAAggIADABIAEABIADAAIACAAIAGAAQADgBACgEQACgCACgFIACgPIACgXIABgeIAAg7IB1AAIAACpIgjAAIAAiLIgxAAIAAAaIgBAnIgDAgQgDANgDAJQgEAIgFAGQgFAFgGACQgHADgHAAg");
	this.shape_13.setTransform(221.2,37);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgjBTQgPgIgKgMQgLgLgFgRQgFgQAAgTQAAgSAFgRQAFgQALgMQAKgMAPgHQAPgGAUgBQATABAPAGQAPAHALAMQAKAMAGAQQAGARAAASQAAATgGAQQgGARgKALQgLAMgPAIQgPAGgTAAQgUAAgPgGgAgSg1QgJAEgGAIQgGAIgDALQgDAKAAAMQAAAMADALQADALAGAIQAGAIAJAEQAIAEAKABQALgBAIgEQAJgEAGgIQAGgIADgLQADgLAAgMQAAgMgDgKQgDgLgGgIQgGgIgJgEQgIgEgLAAQgKAAgIAEg");
	this.shape_14.setTransform(203.8,36.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAhBVIAAiMIhCAAIAACMIgjAAIAAipICJAAIAACpg");
	this.shape_15.setTransform(186.1,36.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgjBTQgPgIgKgMQgLgLgFgRQgFgQAAgTQAAgSAFgRQAFgQALgMQAKgMAPgHQAPgGAUgBQATABAPAGQAPAHALAMQAKAMAGAQQAGARAAASQAAATgGAQQgGARgKALQgLAMgPAIQgPAGgTAAQgUAAgPgGgAgSg1QgJAEgGAIQgGAIgDALQgDAKAAAMQAAAMADALQADALAGAIQAGAIAJAEQAIAEAKABQALgBAIgEQAJgEAGgIQAGgIADgLQADgLAAgMQAAgMgDgKQgDgLgGgIQgGgIgJgEQgIgEgLAAQgKAAgIAEg");
	this.shape_16.setTransform(168.3,36.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA2BnIAAgkIhrAAIAAAkIgeAAIAAhCIAPAAIAFgOIAFgRIAEgSIADgYIADgdIABglIBzAAIAACLIAQAAIAABCgAgQg9IgBAQIgBATIgDAVIgFAVIgHAVIBBAAIAAhuIgwAAg");
	this.shape_17.setTransform(150.4,38.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAJBVIhJAAIAAipIAjAAIAABDIAhAAIAKAAIANACQAHABAGADQAHAEAGAFQAFAFAEAJQADAJAAAMQAAANgDAKQgEAIgFAGQgFAFgHADIgNAFIgLACgAgdA4IAdAAIAKgBIAKgDQAEgDADgEQADgEAAgIQAAgIgDgEQgDgGgEgBQgFgDgFAAIgKgBIgdAAg");
	this.shape_18.setTransform(127.8,36.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRBVIAAiMIg0AAIAAgdICLAAIAAAdIg0AAIAACMg");
	this.shape_19.setTransform(112.1,36.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAqBVIgLgjIg9AAIgMAjIgmAAIA9ipIAoAAIA8CpgAAWAVIgWhDIgVBDIArAAg");
	this.shape_20.setTransform(96.3,36.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhABVIAAipIBMAAQAOAAAKADQAKAFAGAHQAHAHADAJQADAKAAAOQAAAMgEAJQgDAKgIAGQgHAIgKAEQgLAEgNAAIgmAAIAAA9gAgdgEIAhAAQAMAAAHgHQAHgFAAgNQAAgHgCgFQgCgFgDgDQgDgDgFgCQgFgBgGAAIghAAg");
	this.shape_21.setTransform(80.4,36.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag4BVIAAipIBxAAIAAAdIhOAAIAACMg");
	this.shape_22.setTransform(66,36.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAjBVIAAhyIgBAAIhCByIgkAAIAAipIAiAAIAABzIAAAAIBDhzIAkAAIAACpg");
	this.shape_23.setTransform(49.8,36.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AA7BVIAAipIAjAAIAACpgAgTBVIhLAAIAAipIAkAAIAABDIAiAAIAKAAIAMACQAHABAGADQAHAEAFAFQAGAFADAJQAEAJAAAMQAAANgEAKQgDAIgGAGQgEAFgHADIgMAFIgMACgAg6A4IAeAAIAKgBIAKgDQAEgDACgEQADgEAAgIQAAgIgCgEQgDgGgEgBQgFgDgFAAIgMgBIgcAAg");
	this.shape_24.setTransform(30.3,36.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhGBVIAAipIBTAAQALAAAHACIAOAFQAGADADAFIAHAJIADAKIABAKIgBALQgBAFgCAEIgHAIIgJAGQAIAEAFADQAFAFADAGQADAFABAGIABALQgBAMgEAKQgFAJgHAHQgJAGgLADQgMAEgOAAgAgjA4IArAAQAGAAAFgCQAFgBAEgDQADgDACgEQACgFAAgGQAAgHgCgEQgDgEgDgDIgJgDIgLgBIgqAAgAgjgRIArAAIAJgBQAEgBADgCIAFgHQACgDAAgGQAAgFgCgEQgCgDgCgCIgIgDIgIgBIgsAAg");
	this.shape_25.setTransform(10.8,36.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag/BVIAAipIAXAAIAABGIAsAAQAQAAALAEQALADAHAHQAIAFADAJQAEAKAAALQAAALgEAJQgDAKgHAGQgHAHgKADQgKAEgNAAgAgoBBIAvAAIANgCQAGgBAEgDQAFgEACgFQADgHAAgIQAAgJgDgFQgDgGgEgEQgFgDgHgBQgHgCgJAAIgqAAg");
	this.shape_26.setTransform(392.4,11.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgLBVIAAiVIg5AAIAAgUICJAAIAAAUIg6AAIAACVg");
	this.shape_27.setTransform(377.1,11.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgMBYQgJgCgIgEQgJgDgJgHQgIgGgGgKQgGgKgEgNQgDgOAAgRQAAgQADgNQADgOAGgLQAGgJAIgIQAHgGAJgFQAJgEAKgDQAJgCAIAAQALABAKACQAKACAHAEQAIAFAFAFQAHAFADAHQAEAGACAGIADAMIgXAAQgCgIgEgGQgEgHgGgEQgGgFgIgCQgHgDgJAAQgMABgLAEQgLAFgHAKQgIAJgDAMQgEANgBAPQABAPAEANQADANAIAKQAHAIAKAFQALAGAMAAQAKAAAJgFQAJgEAGgGQAGgHAEgHQADgJACgIIAWAAQgBAIgCAIQgDAHgEAHQgEAHgGAHQgGAGgHAFQgJAFgJADQgKACgKAAQgIAAgIgBg");
	this.shape_28.setTransform(361.2,11.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgZBWQgMgEgJgGQgJgGgHgJQgHgIgEgKQgFgKgCgLQgCgLAAgLQAAgTAGgRQAFgPALgNQALgLAPgHQAPgGATgBQAUABAPAGQAPAHALALQALANAFAPQAGARAAATQAAALgCALQgDALgEAKQgFAKgGAIQgHAJgJAGQgKAGgLAEQgMADgOAAQgNAAgMgDgAgZhAQgLAGgHAJQgIAJgEANQgEANAAAOQAAAPADANQAEANAIAJQAHAKALAEQAMAGAOAAQAPAAALgGQAMgEAHgKQAIgJADgNQAEgNAAgPQAAgOgEgNQgEgNgIgJQgHgJgMgGQgLgEgOgBQgNABgMAEg");
	this.shape_29.setTransform(343.5,11.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAtBVIAAhQIhZAAIAABQIgXAAIAAipIAXAAIAABGIBZAAIAAhGIAXAAIAACpg");
	this.shape_30.setTransform(325.8,11.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("ABWBVIg8hOIgOAAIAABOIgXAAIAAhOIgPAAIg6BOIggAAIBGhXIhEhSIAdAAIA7BJIAPAAIAAhJIAXAAIAABJIAOAAIA9hJIAdAAIhEBRIBEBYg");
	this.shape_31.setTransform(305.5,11.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgZBWQgMgEgJgGQgJgGgHgJQgHgIgEgKQgFgKgCgLQgCgLAAgLQAAgTAGgRQAFgPALgNQALgLAPgHQAPgGATgBQAUABAPAGQAPAHALALQALANAFAPQAGARAAATQAAALgCALQgDALgEAKQgFAKgGAIQgHAJgJAGQgKAGgLAEQgMADgOAAQgNAAgMgDgAgZhAQgLAGgHAJQgIAJgEANQgEANAAAOQAAAPADANQAEANAIAJQAHAKALAEQAMAGAOAAQAPAAALgGQAMgEAHgKQAIgJADgNQAEgNAAgPQAAgOgEgNQgEgNgIgJQgHgJgMgGQgLgEgOgBQgNABgMAEg");
	this.shape_32.setTransform(284.5,11.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AA8BVIAAiOIAAAAIgxCOIgVAAIgwiOIgBAAIAACOIgVAAIAAipIAhAAIAvCOIAAAAIAwiOIAhAAIAACpg");
	this.shape_33.setTransform(265.5,11.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgZBXQgNgDgJgGQgKgHgGgKQgFgKgBgPIAWAAQABAHADAHQACAFAGAFQAGAFAIACQAJACAMABQAKAAAJgCQAJgCAGgFQAGgDAEgHQADgGAAgKQAAgGgCgFQgCgGgEgEQgFgEgGgDQgHgBgJAAIgcAAIAAgTIAdAAQAIAAAFgCQAFgDAEgDQADgEACgEQACgFAAgFQAAgIgDgGQgEgFgFgEQgFgDgIgCQgHgCgJAAQgKABgJADQgIADgGAFQgFAFgDAHQgDAHABAHIgWAAQAAgLADgJQACgIAFgGQAFgHAGgEQAGgEAIgDQAHgDAIgBIAPgCQAOAAALAEQAMACAIAHQAIAFAEAJQAFAJAAALQAAANgFAKQgFAJgNAEIAAABQAHACAFADQAGACAEAGQAEAGACAGQACAIAAAJQAAANgGAKQgFAKgKAGQgJAHgNADQgMADgOAAQgOAAgMgCg");
	this.shape_34.setTransform(247.7,11.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgZBWQgMgEgJgGQgJgGgHgJQgHgIgEgKQgFgKgCgLQgCgLAAgLQAAgTAGgRQAFgPALgNQALgLAPgHQAPgGATgBQAUABAPAGQAPAHALALQALANAFAPQAGARAAATQAAALgCALQgDALgEAKQgFAKgGAIQgHAJgJAGQgKAGgLAEQgMADgOAAQgNAAgMgDgAgZhAQgLAGgHAJQgIAJgEANQgEANAAAOQAAAPADANQAEANAIAJQAHAKALAEQAMAGAOAAQAPAAALgGQAMgEAHgKQAIgJADgNQAEgNAAgPQAAgOgEgNQgEgNgIgJQgHgJgMgGQgLgEgOgBQgNABgMAEg");
	this.shape_35.setTransform(230.7,11.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhBBVIAAipIA9AAIARABIAOABQAHADAFADQAGADADAFQAEAFADAHQADAHgBAHIgBAKIgDALQgDAEgEAFQgFAEgGACIALAFQAFACAFAFQAEAFADAHQADAHAAAKIgBALQgCAHgDAFQgDAGgEAFQgFAEgHAEQgHADgIADQgJACgLAAgAgqBBIAtAAQALAAAHgCQAIgCAFgEQAEgEACgGQADgFAAgHQAAgGgDgFQgCgGgEgEQgFgEgIgCQgHgCgLAAIgtAAgAgqgLIAqAAQALAAAHgCQAHgDAEgDQADgEABgFIACgLQAAgGgCgEQgCgFgEgDQgEgEgHgCQgHgBgJAAIgqAAg");
	this.shape_36.setTransform(214,11.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag/BVIAAipIAXAAIAABGIAsAAQAQAAALAEQALADAHAHQAIAFADAJQAEAKAAALQAAALgEAJQgDAKgHAGQgHAHgKADQgKAEgNAAgAgoBBIAvAAIANgCQAGgBAEgDQAFgEACgFQADgHAAgIQAAgJgDgFQgDgGgEgEQgFgDgHgBQgHgCgJAAIgqAAg");
	this.shape_37.setTransform(191.8,11.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgLBVIAAiVIg5AAIAAgUICJAAIAAAUIg6AAIAACVg");
	this.shape_38.setTransform(176.5,11.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgMBYQgJgCgJgEQgJgDgIgHQgHgGgGgKQgHgKgEgNQgDgOAAgRQAAgQADgNQADgOAGgLQAGgJAIgIQAHgGAJgFQAJgEAKgDQAJgCAIAAQALABAKACQAKACAHAEQAIAFAGAFQAGAFADAHQAEAGACAGIADAMIgXAAQgCgIgEgGQgEgHgGgEQgHgFgHgCQgHgDgJAAQgMABgLAEQgLAFgHAKQgIAJgEAMQgDANAAAPQAAAPADANQAEANAIAKQAHAIAKAFQALAGAMAAQALAAAIgFQAJgEAGgGQAGgHAEgHQADgJACgIIAWAAQgBAIgCAIQgDAHgEAHQgEAHgGAHQgGAGgIAFQgIAFgJADQgJACgLAAQgIAAgIgBg");
	this.shape_39.setTransform(160.6,11.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Ag+BVIAAipIB8AAIAAAUIhlAAIAAA1IBdAAIAAASIhdAAIAAA6IBmAAIAAAUg");
	this.shape_40.setTransform(144.4,11.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgMBYQgJgCgIgEQgKgDgHgHQgIgGgHgKQgGgKgEgNQgDgOAAgRQAAgQADgNQADgOAGgLQAGgJAIgIQAHgGAJgFQAJgEAJgDQAKgCAIAAQALABALACQAJACAIAEQAHAFAFAFQAHAFADAHQAEAGADAGIACAMIgWAAQgCgIgFgGQgEgHgGgEQgHgFgHgCQgIgDgIAAQgMABgLAEQgKAFgIAKQgHAJgEAMQgFANAAAPQAAAPAFANQAEANAHAKQAHAIALAFQAKAGALAAQALAAAJgFQAIgEAHgGQAGgHAEgHQADgJACgIIAWAAQAAAIgDAIQgDAHgEAHQgEAHgGAHQgGAGgHAFQgJAFgJADQgJACgMAAQgGAAgJgBg");
	this.shape_41.setTransform(121.1,11.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAzBWIgSg0IhCAAIgTA0IgYAAIBAirIAbAAIA+CrgAAbAQIgahKIgcBKIA2AAg");
	this.shape_42.setTransform(104.7,11.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhABVIAAipIA9AAIAQABIAOABQAGADAGADQAFADAEAFQAEAFADAHQACAHAAAHIgBAKIgDALQgDAEgFAFQgEAEgGACIAKAFQAGACAEAFQAFAFADAHQACAHAAAKIgBALQgBAHgDAFQgDAGgEAFQgFAEgHAEQgGADgJADQgIACgLAAgAgqBBIAtAAQALAAAHgCQAIgCAFgEQAEgEADgGQACgFAAgHQAAgGgCgFQgDgGgEgEQgFgEgIgCQgHgCgLAAIgtAAgAgqgLIAqAAQALAAAHgCQAGgDAEgDQAFgEABgFIABgLQAAgGgCgEQgCgFgEgDQgEgEgHgCQgGgBgKAAIgqAAg");
	this.shape_43.setTransform(89.2,11.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgmBWQgFgCgDgCIAAgWIAEACIAEACIAGACIAEAAIAJgBIAHgEIAFgGIACgGIhGiHIAbAAIA3BvIArhvIAaAAIg2B+IgKAWQgFAIgFAGQgFAGgIACQgGADgLAAQgFAAgFgBg");
	this.shape_44.setTransform(66.6,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ73, new cjs.Rectangle(0,0,458.2,52.5), null);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnFHFQi7i7AAkKQAAkIC7i9QC9i7EIAAQEKAAC7C7QC8C9AAEIQAAEKi8C7Qi7C8kKAAQkIAAi9i8g");
	this.shape.setTransform(64.1,64.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ69, new cjs.Rectangle(0,0,128.2,128.2), null);


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


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.txt1();
	this.instance.parent = this;
	this.instance.setTransform(-134,68);

	this.instance_1 = new lib.txt2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-180,-12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ66, new cjs.Rectangle(-180,-12,871,131), null);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EkroEoWMAAApQrMJXRAAAMAAAJQrg");
	this.shape.setTransform(1158.3,1465.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ65, new cjs.Rectangle(-759.4,-430.9,3835.4,3793.2), null);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.arrow1();
	this.instance.parent = this;
	this.instance.setTransform(99.3,0,0.358,0.358,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ61, new cjs.Rectangle(0,0,452.1,377.1), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcDQIAAg7IA4AAIAAA7gAgNBtIgPizIAAiJIA5AAIAACJIgOCzg");
	this.shape.setTransform(438.6,25.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABuDQIAAlRIgBAAIjSFRIhBAAIAAmfIA4AAIAAFQIABAAIDTlQIBAAAIAAGfg");
	this.shape_1.setTransform(408.1,25.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AifDTIgMgDIAAg0IAIADIANABQANAAAKgKQAJgJAHgRQAHgRAEgYIAHgzIAEg5IACg+IABg/IABg9IEBAAIAAGfIg3AAIAAluIiUAAIgBBfIgFBXQgEAqgHAjQgHAjgNAaQgNAagTAOQgTAOgaAAg");
	this.shape_2.setTransform(365.6,26.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AB+DTIgsh/IijAAIgvB/Ig6AAICbmmIBEAAICXGmgABCAoIhAi4IhFC4ICFAAg");
	this.shape_3.setTransform(327.8,25.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiZDQIAAmfICuAAQAiAAAZAJQAZAJARAQQAQAQAIAWQAIAWAAAcQAAAbgIAXQgIAWgQAPQgRAQgZAJQgZAIgiAAIh3AAIAACtgAhigMIBxAAQAsAAAUgTQATgTAAgjQAAgkgTgTQgUgSgsAAIhxAAg");
	this.shape_4.setTransform(289.1,25.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah5DQIAAmfIDzAAIAAAxIi8AAIAAFug");
	this.shape_5.setTransform(255.8,25.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABuDQIAAlRIgBAAIjSFRIhAAAIAAmfIA3AAIAAFQIABAAIDTlQIBBAAIAAGfg");
	this.shape_6.setTransform(218.4,25.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ACcDQIAAmfIA4AAIAAGfgAjTDQIAAmfIA4AAIAACsIBuAAQAmAAAaAIQAcAJARAPQATAPAIAXQAJAXAAAcQAAAcgJAWQgIAXgRAQQgRAQgYAIQgZAJgeAAgAibCgIB1AAQARAAAPgEQANgEALgIQALgJAGgOQAGgOAAgVQAAgVgGgOQgHgOgLgJQgNgIgPgEQgSgEgVAAIhpAAg");
	this.shape_7.setTransform(172,25.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AifDQIAAmfICVAAIAqABIAiAGQAQAEANAIQAOAIAKANQAKAMAGAQQAGAQAAAVIgDAXQgDAMgHANQgGALgLALQgKAKgQAHIAaAMQANAGALAMQALAMAHASQAHARAAAXIgDAdQgDAOgHAOQgIANgLAMQgLANgQAJQgRAJgUAFQgWAFgbAAgAhoCgIBvAAQAbAAATgGQASgFAMgJQALgKAFgNQAGgOAAgQQAAgQgGgOQgFgNgLgJQgMgKgSgFQgTgFgbAAIhvAAgAhogeIBoAAQAbAAARgFQAQgFAKgJQAJgJADgMIADgaQAAgPgEgLQgFgMgKgIQgKgIgRgEQgQgEgXAAIhoAAg");
	this.shape_8.setTransform(128.1,25.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ACcDQIAAmfIA4AAIAAGfgAjTDQIAAmfIA4AAIAACsIBuAAQAmAAAaAIQAcAJARAPQATAPAIAXQAJAXAAAcQAAAcgJAWQgIAXgRAQQgRAQgYAIQgZAJgeAAgAibCgIB1AAQARAAAPgEQANgEALgIQALgJAGgOQAGgOAAgVQAAgVgGgOQgHgOgLgJQgNgIgPgEQgSgEgVAAIhpAAg");
	this.shape_9.setTransform(66.2,25.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AifDQIAAmfICVAAIAqABIAiAGQAQAEANAIQAOAIAKANQAKAMAGAQQAGAQAAAVIgDAXQgDAMgHANQgGALgLALQgKAKgQAHIAaAMQANAGALAMQALAMAHASQAHARAAAXIgDAdQgDAOgHAOQgIANgLAMQgLANgQAJQgRAJgUAFQgWAFgbAAgAhoCgIBvAAQAbAAATgGQASgFAMgJQALgKAFgNQAGgOAAgQQAAgQgGgOQgFgNgLgJQgMgKgSgFQgTgFgbAAIhvAAgAhogeIBoAAQAbAAARgFQAQgFAKgJQAJgJADgMIADgaQAAgPgEgLQgFgMgKgIQgKgIgRgEQgQgEgXAAIhoAAg");
	this.shape_10.setTransform(22.4,25.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(0,0,447.2,62), null);


(lib.Символ55копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(154.1,39.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(156.1,41.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55копия, new cjs.Rectangle(-154.1,2,618.6,77.8), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AWwFkIAAjnIAuAAIAADngATKFkIAAjnIAuAAIAABGICKAAIAXAWIAAB0IgXAXgAT4E2IBzAAIAAhFIhzAAgAPwFkIgWgXIAAguIAuAAIAAAXIBzAAIAAguIhFAAIAAgvIBFAAIAAguIhzAAIAAAXIguAAIAAgtIAWgYICiAAIAXAYIAABEIgXAYIAXAXIAABFIgXAXgAOSFkIAAiaIh0CaIguAAIAAjnIAuAAIAACaIB0iaIAuAAIAADngAIEFkIAAjnIC4AAIAXAYIAABzIgXAXIiKAAIAABFgAIyDxIBzAAIAAhGIhzAAgAG1FkIAAi5IhzAAIAAC5IguAAIAAjnIDPAAIAADngABBFkIAAiaIhyCaIguAAIAAjnIAuAAIAACaIByiaIAuAAIAADngAiuFkIAAhFIhzAAIAABFIguAAIAAihIBFhGICKAAIAADngAkhDZIAAAYIBzAAIAAhGIhFAAgAmbFkIAAhcIh/AAIgXgXIAAh0IAuAAIAABcIBoAAIAAhcIAuAAIAADngAsEFkIAAguIBdAAIAuguIhdAAIhFhFIAAhGIAvAAIAAAuIAtAuIBGAAIAAhcIAuAAIAACiIhFBFgAtfFkIAAi5IhGAAIgtAuIAACLIgvAAIAAiiIBFhFICLAAIAADngAzWFkIgXgXIAAi4IAXgYIChAAIAXAYIAAC4IgXAXgAy/E2IBzAAIAAiLIhzAAgA08FkIAAi5IhzAAIAAC5IguAAIAAjnIDPAAIAADngAgxBmIgXgXIAAguIAuAAIAAAeIBEAAIAAgeIAuAAIAAAuIgXAXgAymANIAAgtIiKAAIAAAtIgvAAIAAhbIAXAAIAAh0IBGhFIBzAAIAAC5IAXAAIAABbgA0ZirIAABdIBcAAIAAiLIguAAgASYggIAAjnIDEAAIAAAuIiWAAIAAC5gARKggIAAhFIhzAAIAABFIgvAAIAAihIBFhGICLAAIAADngAPXirIAAAYIBzAAIAAhGIhGAAgANdggIAAhcIiAAAIgXgXIAAh0IAvAAIAABcIBoAAIAAhcIAuAAIAADngAJ7ggIAAjnIAuAAIAADngAGUggIAAjnIAuAAIAABGICLAAIAXAWIAAB0IgXAXgAHChOIB0AAIAAhFIh0AAgACoggIAAjnIC4AAIAXAYIAABzIgXAXIiKAAIAABFgADWiTIBzAAIAAhGIhzAAgAgqggIAAiaIhzCaIguAAIAAjnIAuAAIAACaIBziaIAtAAIAADngAkaggIAAhFIhzAAIAABFIguAAIAAihIBFhGICKAAIAADngAmNirIAAAYIBzAAIAAhGIhFAAgAqTggIAAjnIDEAAIAAAuIiWAAIAAC5gAt/ggIAAjnIC4AAIAXAYIAABzIgXAXIiKAAIAABFgAtRiTIBzAAIAAhGIhzAAgAxhggIAAjnIDEAAIAAAuIiWAAIAAAuICLAAIAAAvIiLAAIAAAuICWAAIAAAugAidkeIgXgXIAAguIAuAAIAAAeIBFAAIAAgeIAuAAIAAAuIgXAXgAvukeIAAguIAvAAIAAAugAw+keIAAguIAuAAIAAAug");
	this.shape.setTransform(153.9,37.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AWwFkIAAjnIAuAAIAADngATKFkIAAjnIAuAAIAABFICKAAIAXAYIAAB0IgXAWgAT4E2IBzAAIAAhFIhzAAgAPwFkIgWgWIAAgvIAuAAIAAAXIBzAAIAAguIhFAAIAAguIBFAAIAAgvIhzAAIAAAXIguAAIAAgtIAWgYICiAAIAXAYIAABFIgXAXIAXAXIAABGIgXAWgAOSFkIAAiaIh0CaIguAAIAAjnIAuAAIAACaIB0iaIAuAAIAADngAIEFkIAAjnIC4AAIAXAYIAABzIgXAXIiKAAIAABFgAIyDxIBzAAIAAhGIhzAAgAG1FkIAAi5IhzAAIAAC5IguAAIAAjnIDPAAIAADngABBFkIAAiaIhyCaIguAAIAAjnIAuAAIAACaIByiaIAuAAIAADngAiuFkIAAhFIhzAAIAABFIguAAIAAiiIBFhFICKAAIAADngAkhDaIAAAXIBzAAIAAhGIhFAAgAmbFkIAAhcIh/AAIgXgXIAAh0IAuAAIAABdIBoAAIAAhdIAuAAIAADngAsEFkIAAguIBdAAIAuguIhdAAIhFhGIAAhFIAvAAIAAAvIAtAuIBGAAIAAhdIAuAAIAACiIhFBFgAtfFkIAAi5IhGAAIgtAvIAACKIgvAAIAAiiIBFhFICLAAIAADngAzWFkIgXgWIAAi5IAXgYIChAAIAXAYIAAC5IgXAWgAy/E2IBzAAIAAiLIhzAAgA08FkIAAi5IhzAAIAAC5IguAAIAAjnIDPAAIAADngAgxBmIgXgXIAAguIAuAAIAAAeIBEAAIAAgeIAuAAIAAAuIgXAXgAymANIAAgtIiKAAIAAAtIgvAAIAAhbIAXAAIAAh0IBGhFIBzAAIAAC5IAXAAIAABbgA0ZirIAABdIBcAAIAAiLIguAAgASYggIAAjnIDEAAIAAAuIiWAAIAAC5gARKggIAAhFIhzAAIAABFIgvAAIAAihIBFhGICLAAIAADngAPXirIAAAYIBzAAIAAhGIhGAAgANdggIAAhcIiAAAIgXgXIAAh0IAvAAIAABcIBoAAIAAhcIAuAAIAADngAJ7ggIAAjnIAuAAIAADngAGUggIAAjnIAuAAIAABGICLAAIAXAWIAAB0IgXAXgAHChOIB0AAIAAhFIh0AAgACoggIAAjnIC4AAIAXAYIAABzIgXAXIiKAAIAABFgADWiTIBzAAIAAhGIhzAAgAgqggIAAiaIhzCaIguAAIAAjnIAuAAIAACaIBziaIAtAAIAADngAkaggIAAhFIhzAAIAABFIguAAIAAihIBFhGICKAAIAADngAmNirIAAAYIBzAAIAAhGIhFAAgAqTggIAAjnIDEAAIAAAuIiWAAIAAC5gAt/ggIAAjnIC4AAIAXAYIAABzIgXAXIiKAAIAABFgAtRiTIBzAAIAAhGIhzAAgAxhggIAAjnIDEAAIAAAuIiWAAIAAAuICLAAIAAAvIiLAAIAAAuICWAAIAAAugAidkeIgXgXIAAguIAuAAIAAAeIBFAAIAAgeIAuAAIAAAuIgXAXgAvukeIAAguIAvAAIAAAugAw+keIAAguIAuAAIAAAug");
	this.shape_1.setTransform(155.9,39.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(3.7,2,302.5,73.2), null);


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


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E22000").s().p("AjSDSQhXhXAAh7QAAh6BXhXQBYhYB6AAQB7AABXBYQBYBXAAB6QAAB7hYBXQhXBYh7AAQh6AAhYhYg");
	this.shape.setTransform(914.2,865.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FC5200").s().p("AjRDSQhYhXAAh7QAAh6BYhXQBXhYB6AAQB7AABXBYQBYBXAAB6QAAB7hYBXQhXBYh7AAQh6AAhXhYg");
	this.shape_1.setTransform(356.5,59.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F41B1B").s().p("AjSDTQhXhYAAh7QAAh6BXhYQBYhXB6AAQB7AABXBXQBYBYAAB6QAAB7hYBYQhXBXh7AAQh6AAhYhXg");
	this.shape_2.setTransform(948.3,245.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DF1B00").s().p("EgGPBSDQhXhYgBh7QABh7BXhXQBYhYB6AAQB7AABXBYQBYBXgBB7QABB7hYBYQhXBXh7AAQh6AAhYhXgEAK4BQaQhYhYAAh7QAAh7BYhXQBXhYB7AAQB7AABXBYQBYBXAAB7QAAB7hYBYQhXBXh7AAQh7AAhXhXgEgXQBPsQhYhYAAh7QAAh7BYhXQBXhYB7AAQB7AABYBYQBXBXAAB7QAAB7hXBYQhYBXh7AAQh7AAhXhXgEAb3BKqQhXhXAAh7QAAh7BXhYQBXhXB8AAQB6AABYBXQBXBYAAB7QAAB7hXBXQhYBYh6AAQh8AAhXhYgEgm8BJbQhYhXABh7QgBh7BYhYQBXhXB8AAQB6AABYBXQBXBYABB7QgBB7hXBXQhYBYh6AAQh8AAhXhYgEArCBCXQhXhYAAh7QAAh7BXhXQBYhYB7AAQB7AABXBYQBYBXAAB7QAAB7hYBYQhXBXh7AAQh7AAhYhXgEg1ZBAHQhXhXAAh7QAAh7BXhYQBYhXB6AAQB7AABYBXQBXBYAAB7QAAB7hXBXQhYBYh7AAQh6AAhYhYgEhCHAzgQhYhXAAh7QAAh7BYhYQBXhXB8AAQB7AABXBXQBYBYAAB7QAAB7hYBXQhXBYh7AAQh8AAhXhYgEBBtAo1QhYhXAAh7QAAh7BYhYQBXhXB7AAQB7AABXBXQBYBYAAB7QAAB7hYBXQhXBYh7AAQh7AAhXhYgEhK1AkpQhYhXAAh7QAAh7BYhYQBXhXB8AAQB7AABXBXQBYBYAAB7QAAB7hYBXQhXBYh7AAQh8AAhXhYgEBIQAY1QhXhXAAh7QAAh7BXhYQBYhXB7AAQB7AABYBXQBXBYAAB7QAAB7hXBXQhYBYh7AAQh7AAhYhYgEhQeAUWQhXhYAAh7QAAh7BXhXQBYhYB7AAQB7AABYBYQBXBXAAB7QAAB7hXBYQhYBXh7AAQh7AAhYhXgEBLpAHNQhYhYABh7QgBh7BYhXQBXhXB8AAQB6AABYBXQBXBXABB7QgBB7hXBYQhYBXh6AAQh8AAhXhXgEhSNADHQhXhXgBh6QABh7BXhYQBYhXB6AAQB8AABXBXQBXBYAAB7QAAB6hXBXQhXBYh8AAQh6AAhYhYgEBKGgJ6QhXhYAAh7QAAh7BXhXQBYhYB7AAQB7AABXBYQBYBXAAB7QAAB7hYBYQhXBXh7AAQh7AAhYhXgEhP9gN5QhXhYgBh7QABh7BXhXQBKhKBjgMQgPgMgOgOQhXhXgBh7QABh7BXhYQBYhXB6AAQB8AABXBXQBXBYAAB7QAAB7hXBXQhKBKhjAMQAPAMAOAOQBXBXAAB7QAAB7hXBYQhXBXh8AAQh6AAhYhXgEhHKgmwQhXhXAAh7QAAh7BXhYQBYhXB7AAQB7AABXBXQBYBYAAB7QAAB7hYBXQhXBYh7AAQh7AAhYhYgEg7+g0SQhXhXgBh7QABh7BXhYQBYhXB6AAQB8AABXBXQBYBYgBB7QABB7hYBXQhXBYh8AAQh6AAhYhYgEgupg/QQhXhXAAh7QAAh7BXhYQBYhXB6AAQB7AABYBXQBXBYAAB7QAAB7hXBXQhYBYh7AAQh6AAhYhYgEAkFhBYQhYhYAAh7QAAh7BYhXQBXhYB7AAQB7AABYBYQBXBXAAB7QAAB7hXBYQhYBXh7AAQh7AAhXhXgEAUMhIkQhYhXAAh7QAAh7BYhYQBXhXB7AAQB7AABYBXQBXBYAAB7QAAB7hXBXQhYBYh7AAQh7AAhXhYgEADEhLdQhYhXAAh7QAAh7BYhYQBXhXB8AAQB7AABXBXQBYBYAAB7QAAB7hYBXQhXBYh7AAQh8AAhXhYgEgN9hLdQhXhXAAh7QAAh7BXhYQBYhXB7AAQB7AABYBXQBXBYAAB7QAAB7hXBXQhYBYh7AAQh7AAhYhYg");
	this.shape_3.setTransform(535,533.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF1B00").s().p("AjSDSQhXhXAAh7QAAh6BXhYQBYhXB6AAQB7AABXBXQBYBYAAB6QAAB7hYBXQhXBYh7AAQh6AAhYhYg");
	this.shape_4.setTransform(874.1,160.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E61B05").s().p("AjRDSQhYhXAAh7QAAh6BYhYQBXhXB6AAQB7AABYBXQBXBYAAB6QAAB7hXBXQhYBYh7AAQh6AAhXhYg");
	this.shape_5.setTransform(1001.4,341);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(0,0,1069.9,1067.7), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.coin5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(0,0,178,162), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.coin2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(0,0,94,81), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.coin3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(0,0,143,52), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.coin4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,0,108,66), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.coin7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(0,0,88,65), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.coin8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,0,163,108), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.coin9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,0,120,61), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.coin6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(0,0,89,83), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.coin10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(0,0,128,131), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ri4ag_tube();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,152,306), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ri4ag();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,150,273), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.red_r();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,131,131), null);


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
	this.instance = new lib.slot_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,1920,1080), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.light();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,1022,207), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.coin1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,96,66), null);


(lib.Path_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A82124").s().p("AsSASILHDqINep4Is1L5g");
	this.shape.setTransform(78.7,38.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_38, new cjs.Rectangle(0,0,157.5,76.2), null);


(lib.Path_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5A0A0D").s().p("AAMneIMrHlIsrjMItCKkg");
	this.shape.setTransform(82.3,47.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_37, new cjs.Rectangle(0,0,164.6,95.9), null);


(lib.Path_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC3034","#A82124"],[0,0.996],-22.6,11.1,21.3,-16.9).s().p("AhFBnIisgOIB2iUIgji9ICbBOICThoIgZDBIB7B4IijAxIhBC7g");
	this.shape.setTransform(24.2,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_36, new cjs.Rectangle(0,0,48.4,55), null);


(lib.Path_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC3034","#A82124"],[0,0.996],-31.3,-3.9,28.2,7.2).s().p("AiuBOIiFiTIDZggIB5i8IBFC8IDQAeIiuCOIAHDIIiwhYIjMBrg");
	this.shape.setTransform(30.8,29);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_32, new cjs.Rectangle(0,0,61.7,58.1), null);


(lib.Path_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A82124").s().p("AijINIgvvMICfiZQAnAMArAgQBWA/ATBjIAoDDQAfCiADB/QAMGFjiB6g");
	this.shape.setTransform(21.1,60.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_31, new cjs.Rectangle(0,0,42.2,120.2), null);


(lib.Path_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC3034","#A82124"],[0,0.996],-30.2,0,30.3,0).s().p("AiQBaIieh5IDQhHIBVjPIBlCtIDTgJIiRCrIAsDDIi/g1Ii0COg");
	this.shape.setTransform(30.3,31);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_29, new cjs.Rectangle(0,0,60.6,62.1), null);


(lib.Path_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC3034","#A82124"],[0,0.996],30.3,0,-30.2,0).s().p("AgKC0Ii+A6IAsjSIiSi4IDTAJIBli6IBVDgIDQBMIifCBIAaDug");
	this.shape.setTransform(30.3,33.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_28, new cjs.Rectangle(0,0,60.6,66.8), null);


(lib.Path_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC3034","#A82124"],[0,0.996],-16.6,7,16.2,-11.7).s().p("Ag0BFIh7gQIBbhmIgSiLIBsA+IBvhGIgaCLIBVBbIh4AeIg2CFg");
	this.shape.setTransform(17.6,19.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_27, new cjs.Rectangle(0,0,35.2,39.4), null);


(lib.Path_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC3034","#A82124"],[0,0.996],19.6,8.3,-19.2,-13.8).s().p("AhBBLIiOgjIBkhsIgeikICEBTICAhJIgWCkIBrB4IiSAUIhACXg");
	this.shape.setTransform(20.8,23.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_26, new cjs.Rectangle(0,0,41.7,46.6), null);


(lib.Path_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC3034","#A82124"],[0,0.996],12.3,16.1,-9.9,-15.1).s().p("AhPA8IhjhOIB3gwIAliKIBIBwICBgKIhOB2IAnCFIh6glIhqBdg");
	this.shape.setTransform(17.9,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_25, new cjs.Rectangle(0,0,35.8,41.1), null);


(lib.Path_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC3034","#A82124"],[0,0.996],19.6,8.3,-19.2,-13.8).s().p("AhCBLIiNgiIBkhtIgeikICEBTICAhJIgWCkIBrB4IiSAUIhACXg");
	this.shape.setTransform(20.8,23.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_24, new cjs.Rectangle(0,0,41.7,46.6), null);


(lib.Path_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC3034","#A82124"],[0,0.996],29.2,12.3,-28.4,-20.6).s().p("AhiBwIjSg0ICUihIgtj0IDFB8IC+htIggDzICfCzIjZAeIhfDgg");
	this.shape.setTransform(30.9,34.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_23, new cjs.Rectangle(0,0,61.8,69.1), null);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC3034","#A82124"],[0,0.996],28.2,4.4,-31.8,-8).s().p("Ag/CRIjHAPIBTi4IhtjJIDPA1ICIiXIAqDfIC/BwIi2BYIgUDgg");
	this.shape.setTransform(28.9,32.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_22, new cjs.Rectangle(0,0,57.7,64.8), null);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC3034","#A82124"],[0,0.996],-16.5,7,16.3,-11.7).s().p("AgzBFIh8gRIBbhlIgTiLIBtA+IBvhGIgZCLIBUBbIh4AdIg2CGg");
	this.shape.setTransform(17.6,19.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_21, new cjs.Rectangle(0,0,35.3,39.4), null);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC3034","#A82124"],[0,0.996],-16.6,7,16.2,-11.7).s().p("AgzBFIh8gRIBbhlIgTiLIBsA+IBwhGIgZCLIBUBbIh4AdIg2CGg");
	this.shape.setTransform(17.6,19.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_20, new cjs.Rectangle(0,0,35.3,39.4), null);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC3034","#A82124"],[0,0.996],-16.3,0,16.4,0).s().p("Ah7BXIgogFQAHi9ADhuIBnA6ICMhYIggCvIBqBzIiXAlIhDCog");
	this.shape.setTransform(16.4,24.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0,0,32.8,49.6), null);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC3034","#A82124"],[0,0.996],-29.7,0,29.8,0).s().p("AiKBgIifh5IDQhGIBVjQIBlCtIDJgJInMG7g");
	this.shape.setTransform(29.8,30.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(0,0,59.6,60.8), null);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.396)","rgba(255,255,255,0.6)","rgba(255,255,255,0.098)"],[0.098,0.337,1],-107.1,10.5,98.5,-2.4).s().p("AoEEFQgpjvhRguIq1j3QCaAzC3AzQFuBmCPACQAuAAJmifQKniwDwgpIBAgMQAvgIAgADQBPAJALBOQgDgHgHgGQgsgrihAWQjtAgojB7QpWCHhWA3QgnAaADAWQACAVAtAfQAjAXBdAxICFBFQhAgghCgeQjVhigjASQgeAQgDDbQgBBeADBcQgFhggShngAUvlzQAJARgHATQAAgUgCgQg");
	this.shape.setTransform(133.2,46);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,266.5,92), null);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.098)","rgba(255,255,255,0.4)","rgba(255,255,255,0.098)"],[0.098,0.51,0.996],20.5,-33.5,-13.5,54.4).s().p("AgyEqQB5h+AahCQAlhgADjaQABhugGhbQATBFAKBiQAVDEgsCSQgTA9iQCDQhJBBhFA1QA4gxA9g/g");
	this.shape.setTransform(16.8,41);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,33.6,82.1), null);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC3034","#A82124"],[0,0.996],-18.9,0,19,0).s().p("AhaBYIhjhNICDgqIA3iBIA9BtICEgEIhcBqIAKAxIjQA9g");
	this.shape.setTransform(19,16.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,38,32.2), null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC3034","#A82124"],[0,0.996],-21.7,0,21.7,0).s().p("AAFBdIjdg9IDAhuIAEjHIC0B9IA5gPIgDEmIgIAAIiECXg");
	this.shape.setTransform(21.7,27.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,43.5,55.5), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC3034","#A82124"],[0,0.996],-10.3,0,10.4,0).s().p("AAUBBIh7gRIBbhlIgSiLIBsA+IAagQIgDESIgaBBg");
	this.shape.setTransform(10.4,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,20.8,38.6), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC3034","#A82124"],[0,0.996],-13.3,0,13.3,0).s().p("AiEBSIBYgyIAEjHICtB5IgCDWg");
	this.shape.setTransform(13.3,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,26.7,33.6), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC3034","#A82124"],[0,0.996],-16.5,0,16.6,0).s().p("AiTC0IgSAGIAAnAIAnhHIBVDgIDPBMIifCCIAZDsg");
	this.shape.setTransform(16.6,33.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,33.1,66.7), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC3034","#A82124"],[0,0.996],-19.7,0,19.8,0).s().p("AihAuIgkjFIDEB7IC+htIggDzIApAug");
	this.shape.setTransform(19.8,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,39.6,30.3), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC3034","#A82124"],[0,0.996],-6.8,0,6.9,0).s().p("AhDCGIBgiLIhBiVIBoAVIgJEgg");
	this.shape.setTransform(6.8,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,13.7,31), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.396)","rgba(255,255,255,0.6)","rgba(255,255,255,0.098)"],[0.098,0.337,1],-27.5,166.5,41.2,-114.2).s().p("AjGBmQAAi/AIgEQDZhlCshbIAADiQhaBNkqEMIAAAAQgIAAgBi4g");
	this.shape.setTransform(19.9,28.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,39.8,57.3), null);


(lib.Path_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5A0A0D").s().p("AiSgtQAsghAqgSIE8BMIn/B0QAThMBahBg");
	this.shape.setTransform(25.6,9.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_0, new cjs.Rectangle(0,0,51.1,19.3), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC3034","#A82124"],[0,0.996],-53.1,3.2,52.4,-5.8).s().p("Ai1AkIlgghIEsglIgNhRIEtA4IFegRIhsBIIDtBEImDgJIjeA9g");
	this.shape.setTransform(53.4,11.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,106.8,23.1), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5A0A0D").s().p("Ah9gDQgfg7AMg5IEkDvQjUgHg9h0g");
	this.shape.setTransform(14.8,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,29.7,24.1), null);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5A0A0D").s().p("AEcA9QhfgZkNAKQiHAFh0AKQAxgcBCgdQCGg6BagHIFEBLQgIANgKAMQgRAXgKAAIgDgBg");
	this.shape.setTransform(33.2,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,66.4,12.4), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC3034","#A82124"],[0,0.996],-39.4,2.4,38.8,-4.3).s().p("AiGAaIkFgYIDegbIgJg8IDeAqIEEgNIhQA1ICwAyIkegHIilAug");
	this.shape.setTransform(39.6,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,79.2,17.1), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5A0A0D").s().p("AB4AYQgJgBgTgIQgTgIgJgCQhnApjRgKQhpgFhUgNIklhLQBNhUB6gZQA9gNAtAFICgA7QBLgOCXARQBLAJA9ALIJFCdIA1Bvg");
	this.shape.setTransform(73.1,17.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,146.3,35.3), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5A0A0D").s().p("AAdvXQACgigVgnQgnhIhogcIDLAuQARAGANANQArArgLBqQgLBqgRPlQgIHzgGHdIg9AUg");
	this.shape.setTransform(15,116);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(1.6,0.4,26.9,231.3), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5A0A0D").s().p("AhZRxQgGnegInyQgQvlgMhrQgLhqArgqQAVgVAYgBIC8grQhoAbgnBJQgVAnACAiMAAAAhbg");
	this.shape.setTransform(13.4,116.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0.4,26.9,231.3), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.396)","rgba(255,255,255,0.6)","rgba(255,255,255,0.098)"],[0.098,0.337,1],1.4,-5.3,-5.3,35).s().p("AkDAmQAZg4AMgtQBSACC9AdQCuAbAlALIgIA6QjOgZkxgBg");
	this.shape.setTransform(26,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,52,12.9), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC3034","#A82124"],[0,0.996],-20.1,1.6,32.2,-2.8).s().p("AgcAGIivgQICUgTIgBgPQAYAGA5ALQA1AKAdAIIBhAaIhGgCIhuAeg");
	this.shape.setTransform(20.4,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,40.8,9.1), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.396)","rgba(255,255,255,0.6)","rgba(255,255,255,0.098)"],[0.098,0.337,1],-101.2,64.3,51.9,-24.5).s().p("Ag6BjQg7ggiQhaQBshAA8hKQAigrAfg9QDQBnBSAmIgGB/QgFBRgBAvQgBAvgGAhQgIAfgPAYQibhih7hFg");
	this.shape.setTransform(26.2,26.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,52.4,53.3), null);


(lib.Символ100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ94();
	this.instance.parent = this;
	this.instance.setTransform(250.8,69.3,1,1,0,0,0,141.5,20.5);

	this.instance_1 = new lib.bnt();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.476,1.476);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleX:1.476,scaleY:1.476,x:0,y:0}},{t:this.instance,p:{scaleX:1,scaleY:1,x:250.8,y:69.3}}]}).to({state:[{t:this.instance_1,p:{scaleX:1.583,scaleY:1.583,x:-18,y:-5}},{t:this.instance,p:{scaleX:1.072,scaleY:1.072,x:250.5,y:69.2}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.476,scaleY:1.476,x:0,y:0}},{t:this.instance,p:{scaleX:1,scaleY:1,x:250.8,y:69.3}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.476,scaleY:1.476,x:0,y:0}},{t:this.instance,p:{scaleX:1,scaleY:1,x:250.8,y:69.3}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,507.9,141.8);


(lib.Символ84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ99();
	this.instance.parent = this;
	this.instance.setTransform(250.8,74.9,1,1,0,0,0,186.6,20.5);

	this.instance_1 = new lib.bnt();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.476,1.476);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ84, new cjs.Rectangle(0,0,507.9,141.8), null);


(lib.Символ82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ101();
	this.instance.parent = this;
	this.instance.setTransform(184.8,63.2,1,1,0,0,0,156.8,35.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ101(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ82, new cjs.Rectangle(28,27.8,313.5,70.8), null);


(lib.Символ80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ77();
	this.instance.parent = this;
	this.instance.setTransform(189,69.5,1,1,0,0,0,189,69.5);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, -13))];
	this.instance.cache(-2,-2,382,143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ80, new cjs.Rectangle(0,0,382,143), null);


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ75();
	this.instance.parent = this;
	this.instance.setTransform(176.2,173.7,1,1,0,0,0,176.2,173.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:159.9},7,cjs.Ease.get(-1)).to({y:146},7,cjs.Ease.get(1)).to({y:159},7,cjs.Ease.get(-1)).to({y:173.7},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,352.4,347.5);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ69();
	this.instance.parent = this;
	this.instance.setTransform(64.1,64.1,1,1,0,0,0,64.1,64.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ61();
	this.instance.parent = this;
	this.instance.setTransform(226.1,188.5,1,1,0,0,0,226.1,188.5);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:245.1,alpha:0.18},9,cjs.Ease.get(-1)).to({x:266.1,alpha:0.371},10,cjs.Ease.get(1)).to({x:246.1,alpha:0.191},10,cjs.Ease.get(-1)).to({x:226.1,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ61();
	this.instance_1.parent = this;
	this.instance_1.setTransform(226.1,188.5,1,1,0,0,0,226.1,188.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:245.1},9,cjs.Ease.get(-1)).to({x:266.1},10,cjs.Ease.get(1)).to({x:246.1},10,cjs.Ease.get(-1)).to({x:226.1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,452.1,377.1);


(lib.Символ48копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.button_3.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("http://", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.button_3 = new lib.Символ100();
	this.button_3.parent = this;
	this.button_3.setTransform(260,77.9,1,1,0,0,0,254,70.9);
	new cjs.ButtonHelper(this.button_3, 0, 1, 2, false, new lib.Символ100(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48копия, new cjs.Rectangle(-12,2,544.6,152), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(1922.8,29.1,1,1,0,0,0,961.4,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(0,0,1922.8,58.1), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 8
	this.instance = new lib.dvesti();
	this.instance.parent = this;
	this.instance.setTransform(183,256,0.761,0.761);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg+UAY/MAAAgx9MB8pAAAMAAAAx9g");
	mask.setTransform(492,593);

	// Слой 5
	this.instance_1 = new lib.Символ74();
	this.instance_1.parent = this;
	this.instance_1.setTransform(470.4,652,1,1,0,0,0,176.2,173.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ73();
	this.instance_2.parent = this;
	this.instance_2.setTransform(497.7,417.1,1.314,1.314,0,0,0,229.2,26.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(183,256,663.9,496.9), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(552.6,550.9,1,1,0,0,0,535,533.8);
	this.instance.alpha = 0.48;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({rotation:6.2,y:551},0).wait(6));

	// Слой 1
	this.instance_1 = new lib.round();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1098,1098);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(48,33,1,1,0,0,0,48,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:13},22,cjs.Ease.get(-1)).to({y:-7},22,cjs.Ease.get(1)).to({y:13.5},23,cjs.Ease.get(-1)).to({y:33},22,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,66);


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

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgZFAoFQI4wZouyJMgF8giDIY35pINbj5IPKYhMAITA2OMgS7AlWg");
	mask.setTransform(257,235.7);

	// Слой 2
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(180.1,198,0.895,1,0,0,0,76,153);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.71,scaleY:0.06,x:162.1,y:341.1},2).to({scaleX:0.9,scaleY:1,x:180.1,y:198},7).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(75,380.6,1,1,0,0,0,75,136.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,286,517.1);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(562.5,340,1,1,0,0,0,562.5,340);

	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(563.5,342,1,1,0,0,0,562.5,340);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,1126,682), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(64,65.5,1,1,0,0,0,64,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:84.5},9,cjs.Ease.get(-1)).to({y:105.5},10,cjs.Ease.get(1)).to({y:85.5},10,cjs.Ease.get(-1)).to({y:65.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128,131);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(60,30.5,1,1,0,0,0,60,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:49.8},14,cjs.Ease.get(-1)).to({y:70.5},15,cjs.Ease.get(1)).to({y:50.5},15,cjs.Ease.get(-1)).to({y:30.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,61);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(81.5,54,1,1,0,0,0,81.5,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:74},17,cjs.Ease.get(-1)).to({y:94},17,cjs.Ease.get(1)).to({y:74.6},17,cjs.Ease.get(-1)).to({y:54},18,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163,108);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(44,32.5,1,1,0,0,0,44,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:51.8},14,cjs.Ease.get(-1)).to({y:72.5},15,cjs.Ease.get(1)).to({y:52.5},15,cjs.Ease.get(-1)).to({y:32.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,65);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(44.5,41.5,1,1,0,0,0,44.5,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:32.5},7,cjs.Ease.get(-1)).to({y:23.5},7,cjs.Ease.get(1)).to({y:31.9},7,cjs.Ease.get(-1)).to({y:41.5},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89,83);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(89,81,1,1,0,0,0,89,81);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:61.7},14,cjs.Ease.get(-1)).to({y:41},15,cjs.Ease.get(1)).to({y:61},15,cjs.Ease.get(-1)).to({y:81},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178,162);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(54,33,1,1,0,0,0,54,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:13},12,cjs.Ease.get(-1)).to({y:-7},12,cjs.Ease.get(0.97)).to({y:15.4},14,cjs.Ease.get(-1)).to({y:33},11,cjs.Ease.get(0.97)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108,66);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(71.5,26,1,1,0,0,0,71.5,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4.8},18,cjs.Ease.get(-1)).to({y:-14},16,cjs.Ease.get(1)).to({y:6.6},18,cjs.Ease.get(-1)).to({y:26},17,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143,52);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(47,40.5,1,1,0,0,0,47,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:21.2},14,cjs.Ease.get(-1)).to({y:0.5},15,cjs.Ease.get(1)).to({y:20.5},15,cjs.Ease.get(-1)).to({y:40.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94,81);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// coin1.png
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(-977.8,193,1,1,0,0,0,48,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1311.4,y:366.4},4,cjs.Ease.get(-1)).to({x:-1728.4,y:583.1},5,cjs.Ease.get(1)).wait(1));

	// coin2.png
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-984.8,119.5,1,1,0,0,0,47,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-1113.9,y:344},4,cjs.Ease.get(-1)).to({x:-1275.3,y:624.7},5,cjs.Ease.get(1)).wait(1));

	// coin3.png
	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-954.3,157.5,1,1,0,0,0,71.5,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-834.1,y:371.6},4,cjs.Ease.get(-1)).to({x:-683.9,y:639.2},5,cjs.Ease.get(1)).wait(1));

	// coin4.png
	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-954.3,116,1,1,0,0,0,54,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-596,y:150.2},4,cjs.Ease.get(-1)).to({x:-148.1,y:193},5,cjs.Ease.get(1)).wait(1));

	// coin5.png
	this.instance_4 = new lib.Символ6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-989.3,120,1,1,0,0,0,89,81);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-643.9,y:310.7},4,cjs.Ease.get(-1)).to({x:-212.2,y:549.1},5,cjs.Ease.get(1)).wait(1));

	// coin6.png
	this.instance_5 = new lib.Символ7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-1000,159.5,1,1,0,0,0,44.5,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-1325.3},4,cjs.Ease.get(-1)).to({x:-1731.9},5,cjs.Ease.get(1)).wait(1));

	// coin7.png
	this.instance_6 = new lib.Символ8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-944.3,54.5,1,1,0,0,0,44,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-555.7,y:-82.9},4,cjs.Ease.get(-1)).to({x:-70.1,y:-254.6},5,cjs.Ease.get(1)).wait(1));

	// coin8.png
	this.instance_7 = new lib.Символ9();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-944.3,54,1,1,0,0,0,81.5,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:-841.9,y:-66},4,cjs.Ease.get(-1)).to({x:-713.9,y:-216.1},5,cjs.Ease.get(1)).wait(1));

	// coin9.png
	this.instance_8 = new lib.Символ10();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-997.8,52.5,1,1,0,0,0,60,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-1126.9,y:-98.7},4,cjs.Ease.get(-1)).to({x:-1288.3,y:-287.7},5,cjs.Ease.get(1)).wait(1));

	// coin10.png
	this.instance_9 = new lib.Символ11();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-993.8,118,1,1,0,0,0,64,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:-1313.2,y:-4},4,cjs.Ease.get(-1)).to({x:-1712.4,y:-156.6},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1078.3,0,215.5,226);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Режим изоляции
	this.instance = new lib.Path_5();
	this.instance.parent = this;
	this.instance.setTransform(12.1,2.6,0.137,0.137,0,0,0,26.9,27.4);

	this.instance_1 = new lib.Path_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.8,-12,0.137,0.137,0,0,0,26.6,4);

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
	this.shape_4.graphics.lf(["#B23023","#EF7621","#FEC73F","#FEC840","#FEDD58","#FEE561"],[0.055,0.345,0.714,0.725,0.898,0.996],37.3,-35.2,-50.8,25.2).s().p("AlLD9QhRgxgmgfQhHg6AHg4QAGguBIhYQCSiyEYg4QEBgzDpBKIAjCNQh0g5iAAOQh4AMhrBIQhqBHhDBvQhHB1gLCIQgkgchUgyg");
	this.shape_4.setTransform(-9.6,-6.6,0.137,0.137);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#EF7621","#FEC73F","#FEC840","#FEDD58","#FEE561","#FED298"],[0,0.384,0.396,0.612,0.733,1],-66.9,0,67,0).s().p("AG8GyQkJg2ldhXQlhhYhqi1Qgig3gFg7QgDgiAGgYQABi6ChhSQBYgtBZgCQE3g8F7HeQB1CSBqCuQA0BXAfA7IgMAVQiCj4i6jmQlxnNknA5IgCAAQhWADhNAmQiaBLAACxIgBADIgDAvQAEA5AgA1QArBJBbA7QB3BNC/AwQFbBXEMA5QCGAcBCAMIgIARQhBgJiFgcg");
	this.shape_5.setTransform(-13.7,-16.2,0.137,0.137);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0.396)","rgba(255,255,255,0.6)","rgba(255,255,255,0.098)"],[0.098,0.337,1],-106.9,-67,86.9,60.1).s().p("AkDC7QBim/AkiNIAAABQDfB0CiDzQicEAhQC7QiUieiHg5g");
	this.shape_6.setTransform(-11,-24.4,0.137,0.137);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#F6A02F","#D36F2C","#EDA437","#FEC73F","#FEC840","#FEDD58","#FEE561","#F2BE4C","#D16A2B"],[0.122,0.275,0.42,0.51,0.518,0.655,0.733,0.851,1],-106,-68.5,88,58.8).s().p("AInI/Ii0kRQiMiwhghXQiciNiTgaQhwgTh8AbQiNAehABMQg1BAgBBoQAAA5AXB8QgwgzgphTQgohPgShLQgch1AyhyQAUguBrihQByiuAZggQBch6BVgxQBEgnB7AlQBMAWB2A+QDWBvCcDiQCGDABSEDQAgBoAoDYQAmDUAhBkIAGAXIhNAgQgfgCiLjUg");
	this.shape_7.setTransform(-13.6,-20.5,0.137,0.137);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#B23023","#EF7621","#EFAA38","#DF8730","#CC6228","#C14A23","#BD4221"],[0.055,0.325,0.647,0.737,0.851,0.945,1],-57.8,-32,62.7,55.6).s().p("AE2HMQkkg9iLggQkBg5imh3Qg5gpgthGQguhQgggoIAckGQgTgOA1gtQAvgoBXgyQDPh4BJAFQhmCOBVCUQA1BaCmCJQBKA9B0BBQBCAmCGBHQA6AhCCBrQB0BfBHAeQgRA5AXA7Qiggzj/g4g");
	this.shape_8.setTransform(-13.4,-17,0.137,0.137);

	this.instance_2 = new lib.Group();
	this.instance_2.parent = this;
	this.instance_2.setTransform(15,-18.3,0.137,0.137,0,0,0,30.6,25.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#EF7621","#FEC73F","#FEC840","#FEDD58","#FEE561","#FED298"],[0,0.384,0.396,0.612,0.733,1],-62.4,0,62.4,0).s().p("AodJYIAhgdQAqggA1giQCohrDhhWQEuhzCEh7QCdiSAbj2QASijhdhDQhFgzh5AHQhdAGhEAeIgXAJQjBBPiLCgQkBEmigJSIgXgGQCipZEGkrQCOiiDFhQIAWgKQBIggBkgFQCAgHBLA3QBnBLgTCxQgbD+ihCWQiHB/k2B2QjdBUinBrQg1AigpAgIgfAag");
	this.shape_9.setTransform(7.6,-20.6,0.137,0.137);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#E76646","#FEC73F","#FEC840","#FEDD58","#FEE561","#F2BE4C","#D16A2B"],[0.2,0.51,0.518,0.655,0.733,0.851,0.98],-65.5,48.7,87.4,-40.1).s().p("Aq6LhIghhCQAWieCPh1QBphWDVhbICzhKQBrgsBCggQC9haBShmQAxg+AnhbQAphjALhcQAajpixg9QBUAUAgAMQA/AWAlAhQBGA9AmCGQAZBXAOCJQAIBUgGCAIgKDTQgCBhgjAxQgSAYhmBRQimCEiyBGQi0BHjNAOQiPABhVAFQiaAIhLAqQgkgRgmgIg");
	this.shape_10.setTransform(8.9,-18.4,0.137,0.137);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#B23023","#EF7621","#EFAA38","#DF8730","#CC6228","#C14A23","#BD4221"],[0.055,0.325,0.647,0.737,0.851,0.945,1],-63.1,39.4,78.5,-72.4).s().p("Ap5KfQADkPCFlDQB5knC4jrQA2hFBag+QBbhABogmQD3haCuBhQBwA+hNFFQgeB8grB1QABAmgcAhIAbhHQgBglgdgqQg2hNhRgSQhZgUhWAuQgtAZhkBXQi8Ckh9DvQgcA3grCcQgnCMgsBAQhmgXhtglg");
	this.shape_11.setTransform(7.7,-18.9,0.137,0.137);

	this.instance_3 = new lib.Path_1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.4,-7.2,0.137,0.137,0,0,0,71.8,15.3);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.Path_2_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-9.2,-10.6,0.137,0.137,0,0,0,33.5,6.5);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.Path_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-15.1,-4.2,0.137,0.137,0,0,0,13.5,11);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.Path_4_0();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-9.1,-6.5,0.137,0.137,0,0,0,24.8,8.4);
	this.instance_6.alpha = 0.301;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E35C1C").s().p("AOsVxMAAAghoIABgCQAEgbgHgbQgPg4g5gSQhkgf7DnBIAGgXQbDHCBlAfQBCAVATA+QALAkgFAiMAAAAhng");
	this.shape_12.setTransform(-3.6,9.6,0.137,0.137);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#B23023","#EF7621","#FEE561","#FDA929","#CA5721"],[0.055,0.157,0.286,0.604,1],-7.8,149.9,63.9,-143).s().p("ALqrnQACgWgIgXQgQgvgwgKQhOgQ7mncIIRhuIbcHYQALAFAKALQAfAhAABJMAAAAiAImbB9g");
	this.shape_13.setTransform(-1,8.8,0.137,0.137);

	this.instance_7 = new lib.Path_1_0();
	this.instance_7.parent = this;
	this.instance_7.setTransform(7.8,12.5,0.137,0.137,0,0,0,21.2,116.6);
	this.instance_7.alpha = 0.5;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEC870").s().p("ApCUFMAAAghnQgFgiALgjQATg/BCgVQBHgVPkj0QgCALABANQvlD1g+ASQg5ASgPA3QgHAcAEAbIABACMAAAAhog");
	this.shape_14.setTransform(-5.3,10.4,0.137,0.137);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#B23023","#EF7621","#FEC73F","#F8BC3C","#DF8830","#CC6228","#C14A23","#BD4221"],[0.055,0.157,0.267,0.306,0.541,0.741,0.902,1],7.3,-139.8,-63.2,148.4).s().p("Ax+UfMAAAgiAQAAhJAfghQAKgKALgFIAKgEIavm9IIQCFItrDZQt0DagxAKQgxAKgPAvQgIAYACAVMgAMAiPg");
	this.shape_15.setTransform(-2.9,8.3,0.137,0.137);

	this.instance_8 = new lib.Path_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-11.9,11.7,0.137,0.137,0,0,0,13.1,115.5);
	this.instance_8.alpha = 0.5;

	this.instance_9 = new lib.Path();
	this.instance_9.parent = this;
	this.instance_9.setTransform(6.8,-10.5,0.137,0.137,0,0,0,27.4,2.9);
	this.instance_9.alpha = 0.301;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#CC3034","#A82124"],[0,0.996],-39.4,2.4,38.8,-4.3).s().p("AiHAbIkEgZIDegcIgJg6IDfAoIEDgMIhQA1ICwAyIkfgGIilAtg");
	this.shape_16.setTransform(11.6,-7,0.137,0.137);

	this.instance_10 = new lib.Path_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-3.9,-10.1,0.137,0.137,0,0,0,39.4,6.9);
	this.instance_10.alpha = 0.398;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#CC3034","#A82124"],[0,0.996],-53,3.2,52.4,-5.8).s().p("Ai2AkIlfghIEsgmIgMhPIEsA3IFegRIhsBIIDtBEImCgJIjfA8g");
	this.shape_17.setTransform(0.4,-4.4,0.137,0.137);

	this.instance_11 = new lib.Path_4();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-14,-7.3,0.137,0.137,0,0,0,52.9,9.5);
	this.instance_11.alpha = 0.398;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(255,255,255,0.396)","rgba(255,255,255,0.6)","rgba(255,255,255,0.098)"],[0.098,0.337,1],3.2,-39.9,-2.2,72.9).s().p("AhNFcQgRhiAKiJQALiWAzlVIgGB5QgFCPAFB1QAOF2BnggQgnATgpAJQgXAGgSAAQgoAAgFgfg");
	this.shape_18.setTransform(-0.9,25.8,0.137,0.137);

	this.instance_12 = new lib.Path_6();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-2.6,16.5,0.137,0.137,0,0,0,5.9,13.8);
	this.instance_12.alpha = 0.602;

	this.instance_13 = new lib.Path_7();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-14.4,26.1,0.137,0.137,0,0,0,18.6,17.9);
	this.instance_13.alpha = 0.398;

	this.instance_14 = new lib.Path_8();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-25.3,10.8,0.137,0.137,0,0,0,15.3,33.5);
	this.instance_14.alpha = 0.301;

	this.instance_15 = new lib.Path_9();
	this.instance_15.parent = this;
	this.instance_15.setTransform(21.7,21.9,0.137,0.137,0,0,0,19.3,18.2);
	this.instance_15.alpha = 0.602;

	this.instance_16 = new lib.Path_10();
	this.instance_16.parent = this;
	this.instance_16.setTransform(22.3,11,0.137,0.137,0,0,0,17.2,19.7);
	this.instance_16.alpha = 0.602;

	this.instance_17 = new lib.Path_11();
	this.instance_17.parent = this;
	this.instance_17.setTransform(20.6,1.2,0.137,0.137,0,0,0,27.4,26.6);
	this.instance_17.alpha = 0.602;

	this.instance_18 = new lib.Path_12();
	this.instance_18.parent = this;
	this.instance_18.setTransform(8.2,26.8,0.137,0.137,0,0,0,25.2,18.9);
	this.instance_18.alpha = 0.602;

	this.instance_19 = new lib.Path_13();
	this.instance_19.parent = this;
	this.instance_19.setTransform(13.7,14.7,0.137,0.137,0,0,0,24.1,40.8);

	this.instance_20 = new lib.Path_14();
	this.instance_20.parent = this;
	this.instance_20.setTransform(5.3,-0.1,0.137,0.137,0,0,0,131.6,45.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FC4C4F").s().p("AAYPaIAChdQAM09ALlOQAIjRhGgtQgWgPgbAEIgXAHIBKgqQBLgkAPAZQAOAagRQ7QgJIegMIZIg/AJQAYgWAIhgg");
	this.shape_19.setTransform(22.9,9.5,0.137,0.137);

	this.instance_21 = new lib.Path_16();
	this.instance_21.parent = this;
	this.instance_21.setTransform(5.8,23.1,0.137,0.137,0,0,0,36.5,32);
	this.instance_21.alpha = 0.602;

	this.instance_22 = new lib.Path_17();
	this.instance_22.parent = this;
	this.instance_22.setTransform(0.5,17.5,0.137,0.137,0,0,0,15.3,23.7);
	this.instance_22.alpha = 0.602;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FC4C4F").s().p("AgdVuQAgoQAQoaQAiwyhMg0QgugekMheQkMhdk9hhQs0j5h4AkQgQgTAFgUQALgnBqgEQGgB8GzB5QNlDyBegSQCZgeWfmgIAmAFQAsAHAlAMQB0AmgLBJQkmApleBBQq7CBkVB3QgqAcgOAZQgGANABAIQBSAuH6CUQHSCJAZAoQASAdAPBwQAPBvAFCEQANFOg6BWQg5BViLBvIu2NJIAAgBQgtAagqAAQgoAAgkgWgABXooIgIBKIgDC2QgIGoADFtQADEdAGDlQAECMAWAuQAnBPBrhOQBCgvBPhIICJiBQA9g4CXh1QCFhnBJhLQCSiYAxhAQBxiTgDhlQgEhwgJiLQgJiYgKhkQgEgqiAgvQhdgjjIgyIlDhSQiogug5giQhuhCgmBJQgTAlADAyIgFgJQAJASgFA1g");
	this.shape_20.setTransform(-1.7,12.1,0.137,0.137);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(255,255,255,0.2)","rgba(255,255,255,0)"],[0,1],-0.4,-40.2,0.1,27.2).s().p("AohiLQGciVGQioQATAPAZAAQB+AFA/BtQAwBUANCSQhgArhUAoQjSBhkGCFQiGBElPCtQANlSACkCg");
	this.shape_21.setTransform(6.2,11.9,0.137,0.137);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FC4C4F").s().p("AhsQ/QB6AWAJseQADi/gFmqQgElSAGhVQAPjGhAh7QgUgmgagbIgVgSQCSAWApB7QAVA+gJA5Ig1fTg");
	this.shape_22.setTransform(-2.5,15.7,0.137,0.137);

	this.instance_23 = new lib.Path_20();
	this.instance_23.parent = this;
	this.instance_23.setTransform(10,-0.5,0.137,0.137,0,0,0,23.7,19.3);
	this.instance_23.alpha = 0.602;

	this.instance_24 = new lib.Path_21();
	this.instance_24.parent = this;
	this.instance_24.setTransform(15,7.6,0.137,0.137,0,0,0,22.2,18.6);
	this.instance_24.alpha = 0.602;

	this.instance_25 = new lib.Path_22();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-15.6,13.2,0.137,0.137,0,0,0,28.4,32.5);
	this.instance_25.alpha = 0.398;

	this.instance_26 = new lib.Path_23();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-10.1,4.5,0.137,0.137,0,0,0,31.4,33.1);
	this.instance_26.alpha = 0.602;

	this.instance_27 = new lib.Path_24();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-6.8,21.6,0.137,0.137,0,0,0,20.8,25.5);
	this.instance_27.alpha = 0.602;

	this.instance_28 = new lib.Path_25();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-7.1,12,0.137,0.137,0,0,0,17.2,21.5);
	this.instance_28.alpha = 0.602;

	this.instance_29 = new lib.Path_26();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-22.1,19.9,0.137,0.137,0,0,0,19.3,24.4);
	this.instance_29.alpha = 0.301;

	this.instance_30 = new lib.Path_27();
	this.instance_30.parent = this;
	this.instance_30.setTransform(10,15.2,0.137,0.137,0,0,0,22.9,19.3);
	this.instance_30.alpha = 0.602;

	this.instance_31 = new lib.Path_28();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-22,1,0.137,0.137,0,0,0,28.8,33.1);
	this.instance_31.alpha = 0.301;

	this.instance_32 = new lib.Path_29();
	this.instance_32.parent = this;
	this.instance_32.setTransform(4.6,8.2,0.137,0.137,0,0,0,33.1,29.5);
	this.instance_32.alpha = 0.602;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#FC4C4F","#E0494B"],[0.004,1],1.2,-80.4,-4.7,59.1).s().p("AprRuMAACgjfITJG7IAMLcIyMRMg");
	this.shape_23.setTransform(7.6,15.3,0.137,0.137);

	this.instance_33 = new lib.Path_31();
	this.instance_33.parent = this;
	this.instance_33.setTransform(12.3,12.5,0.137,0.137,0,0,0,26.9,58.6);
	this.instance_33.alpha = 0.398;

	this.instance_34 = new lib.Path_32();
	this.instance_34.parent = this;
	this.instance_34.setTransform(15.4,15.5,0.137,0.137,0,0,0,36.5,29.2);
	this.instance_34.alpha = 0.602;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(255,255,255,0.2)","rgba(255,255,255,0)"],[0,1],-67.1,25.7,79.1,-30.1).s().p("ApCBYIDRiBQAvgMGZi2QHVjPAXgJIgDFBQiSBIlMCmQmHDGiABEQhAAjhdArg");
	this.shape_24.setTransform(15.9,6.8,0.137,0.137);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D1393C").s().p("ApFLTIAAtAISKvYMgAXAiLg");
	this.shape_25.setTransform(16,9.5,0.137,0.137);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DB383C").s().p("A8vg9IDhgwIPLjTIDYgtQCCgbBVgWQCVgmChAPQB2ALDAAxQBtAdE1BNQEIBBCbApQCkAsFKBSIBlA+Il/BTI1jFQg");
	this.shape_26.setTransform(-1.8,-6.3,0.137,0.137);

	this.instance_35 = new lib.Path_36();
	this.instance_35.parent = this;
	this.instance_35.setTransform(14.8,21.9,0.137,0.137,0,0,0,29.5,27.7);
	this.instance_35.alpha = 0.602;

	this.instance_36 = new lib.Path_37();
	this.instance_36.parent = this;
	this.instance_36.setTransform(11.3,24.3,0.137,0.137,0,0,0,84.5,49.9);
	this.instance_36.alpha = 0.301;

	this.instance_37 = new lib.Path_38();
	this.instance_37.parent = this;
	this.instance_37.setTransform(11.6,0.2,0.137,0.137,0,0,0,84.2,36.5);
	this.instance_37.alpha = 0.602;

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#CC3034","#A82124"],[0,0.996],-0.9,-110.4,0.8,101.1).s().p("AuEvPIcIl8MgAXAiOI7xIJg");
	this.shape_27.setTransform(11.6,12.8,0.137,0.137);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#CC3034","#A82124"],[0,0.996],-98.7,-131.6,70.2,83.1).s().p("ANaVYQhFgPgmgMQiFgpqDi+Qo2imhTgcQhegWhEgUQiDgpAAgoMAAAghXQAAgeAVgDQALgBAKAEIA3gVIcuHUMgADAkPQgigLhJgPg");
	this.shape_28.setTransform(-14,12.3,0.137,0.137);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.instance_34},{t:this.instance_33},{t:this.shape_23},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_22},{t:this.instance_21},{t:this.shape_19},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.shape_18},{t:this.instance_11},{t:this.shape_17},{t:this.instance_10},{t:this.shape_16},{t:this.instance_9},{t:this.instance_8},{t:this.shape_15},{t:this.shape_14},{t:this.instance_7},{t:this.shape_13},{t:this.shape_12},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_2},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-27.4,-31.3,51.5,62.8), null);


(lib.Символ25_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance_1 = new lib.Символ67();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.6,2.1,0.234,0.234,0,0,0,114.5,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25_1, new cjs.Rectangle(-22.3,-17.4,53.7,39), null);


(lib.Символ95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ84();
	this.instance.parent = this;
	this.instance.setTransform(254,70.9,1,1,0,0,0,254,70.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ95, new cjs.Rectangle(0,0,507.9,141.8), null);


(lib.Символ81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ80();
	this.instance.parent = this;
	this.instance.setTransform(189,69.5,1,1,0,0,0,189,69.5);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(15, 19, 0, 0))];
	this.instance.cache(-2,-2,386,147);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ81, new cjs.Rectangle(0,0,386,147), null);


(lib.Символ79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ81();
	this.instance.parent = this;
	this.instance.setTransform(189,69.5,1,1,0,0,0,189,69.5);
	this.instance.alpha = 0.391;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.223},6,cjs.Ease.get(-1)).to({alpha:0},8,cjs.Ease.get(1)).to({alpha:0.207},8,cjs.Ease.get(-1)).to({alpha:0.391},7,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ80();
	this.instance_1.parent = this;
	this.instance_1.setTransform(189,69.5,1,1,0,0,0,189,69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,386,147);


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiACDIAAhIIAVgCIAAhxIgVgCIAAhIIB9AAIAABNIAdAAQAYAAATAFQATAGANAMQAOAMAHARQAHAQAAAWQAAAWgHASQgHARgNAMQgOANgRAGQgSAGgWAAgAgFA+IARAAQAMAAAFgHQAFgFAAgNQAAgLgFgGQgGgGgLAAIgRAAg");
	this.shape.setTransform(255.8,65.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhHCDIAAhIIAUgCIAAhvQgOAAgSAEQgRAEgVAIIAAhcIDzAAIAABcQgUgIgRgEQgSgEgOAAIAABvIAUACIAABIg");
	this.shape_1.setTransform(229.6,65.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAnCDIgKgjIg9AAIgKAjIhhAAIAAhZIAXgDIAzipICAAAIA2CpIAWADIAABZgAASAdIgUhHIgTBHIAnAAg");
	this.shape_2.setTransform(202.7,65.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiACDIAAhIIAVgCIAAhxIgVgCIAAhIICmAAQAWAAARAGQARAGALAMQAMAMAGARQAGARAAAWQAAAVgIARQgHARgOANQgPANgUAHQgTAGgZACIgYABIAABIgAgFgKIAOAAQAMAAAGgHQAHgHAAgNQAAgLgFgGQgGgFgLAAIgRAAg");
	this.shape_3.setTransform(175,65.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhrCDIAAhIIAVgCIAAhxIgVgCIAAhIIDXAAIAABgQgNgHgcgHQgcgGgYAAIACA0IAAA7IAcACIAABIg");
	this.shape_4.setTransform(150.3,65.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiDCCIAAi7IgVgCIAAhIIB9AAIgBBlIBGhlIBvAAIAABIIgVACIAABxIAVACIAABIIh9AAIABhgIhEBig");
	this.shape_5.setTransform(122.8,66.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.instance = new lib.Символ79();
	this.instance.parent = this;
	this.instance.setTransform(189,69.5,1,1,0,0,0,189,69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ78, new cjs.Rectangle(0,0,386,147), null);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.parent = this;
	this.instance.setTransform(226.1,174.1,1,1,0,0,0,226.1,188.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ76, new cjs.Rectangle(0,-14.4,452.1,377), null);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(184,599.2,1,1,144.7,0,0,738.1,684.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:684.5,scaleX:1,scaleY:1,x:184.1,y:599.3,alpha:0.664},9,cjs.Ease.get(-1)).to({regY:684.6,scaleX:1,scaleY:1,x:184,y:599.2,alpha:0.289},10,cjs.Ease.get(1)).to({regY:684.5,scaleX:1,scaleY:1,x:184.1,y:599.3,alpha:0.645},10,cjs.Ease.get(-1)).to({regY:684.6,scaleX:1,scaleY:1,x:184,y:599.2,alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(95.7,472.2,1024.8,221.8);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(157.9,157.9,0.288,0.288,0,0,0,548.9,548.9);
	this.instance.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-2,-2,323,323), null);


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
	this.instance_38 = new lib.Символ27();
	this.instance_38.parent = this;
	this.instance_38.setTransform(1068.4,904.5,1,1,0,0,0,1068.4,904.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).to({rotation:360},325).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(124.1,-47.9,1872.6,1872.6);


(lib.Символ35_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance_1 = new lib.chery();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-18,-93,0.274,0.274);

	this.instance_2 = new lib.lemon();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-15,-293,0.232,0.232);

	this.instance_3 = new lib.chery();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-21,-498,0.274,0.274);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Слой 2
	this.instance_4 = new lib.Символ26();
	this.instance_4.parent = this;
	this.instance_4.setTransform(8.8,-410,0.926,0.926);

	this.instance_5 = new lib.Символ25_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1.6,-341.2,0.926,0.926);

	this.instance_6 = new lib.Символ26();
	this.instance_6.parent = this;
	this.instance_6.setTransform(9,-204,0.926,0.926);

	this.instance_7 = new lib.Символ25_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1.6,-134.8,0.926,0.926);

	this.instance_8 = new lib.Символ26();
	this.instance_8.parent = this;
	this.instance_8.setTransform(8.8,2,0.926,0.926);

	this.instance_9 = new lib.Символ25_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1.6,70.8,0.926,0.926);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35_1, new cjs.Rectangle(-21,-498,59.5,588.7), null);


(lib.Символ34_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance_1 = new lib.Символ68();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7.1,-353,0.132,0.132,0,0,0,179.1,176.8);

	this.instance_2 = new lib.Символ68();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-7.1,60.2,0.132,0.132,0,0,0,179.1,176.8);

	this.instance_3 = new lib.lemon();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-21,-93,0.219,0.219);

	this.instance_4 = new lib.lemon();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-21,-505,0.219,0.219);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Слой 2
	this.instance_5 = new lib.Символ68();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-7.1,-144.5,0.132,0.132,0,0,0,179.1,176.8);

	this.instance_6 = new lib.Символ68();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-7.1,-279.1,0.132,0.132,0,0,0,179.1,176.8);

	this.instance_7 = new lib.Символ26();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0.7,-417.6,0.926,0.926);

	this.instance_8 = new lib.Символ26();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0.7,-211.2,0.926,0.926);

	this.instance_9 = new lib.Символ26();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0.7,-5.6,0.926,0.926);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34_1, new cjs.Rectangle(-26.4,-505,56.2,593.1), null);


(lib.Символ33_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance_1 = new lib.chery();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-17,-104,0.274,0.274);

	this.instance_2 = new lib.lemon();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-19,-309,0.232,0.232);

	this.instance_3 = new lib.chery();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-20,-509,0.274,0.274);

	this.instance_4 = new lib.Символ26();
	this.instance_4.parent = this;
	this.instance_4.setTransform(7,-421,0.926,0.926);

	this.instance_5 = new lib.Символ25_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(2.6,-352.2,0.926,0.926);

	this.instance_6 = new lib.Символ26();
	this.instance_6.parent = this;
	this.instance_6.setTransform(6.5,-214.6,0.926,0.926);

	this.instance_7 = new lib.Символ25_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(2.6,-145.8,0.926,0.926);

	this.instance_8 = new lib.Символ26();
	this.instance_8.parent = this;
	this.instance_8.setTransform(6.5,-9,0.926,0.926);

	this.instance_9 = new lib.Символ25_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(2.6,59.8,0.926,0.926);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33_1, new cjs.Rectangle(-20,-509,54.5,588.7), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_123 = function() {
		this.parent.parent.PlayNext();
		this.stop();
	}
	this.frame_245 = function() {
		this.parent.parent.PlayNextRound();
	}
	this.frame_246 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(123).call(this.frame_123).wait(122).call(this.frame_245).wait(1).call(this.frame_246).wait(1));

	// Символ 34
	this.instance = new lib.Символ34_1();
	this.instance.parent = this;
	this.instance.setTransform(-2.6,389.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({y:-23.4},0).wait(1).to({regX:1.6,regY:-208.5,x:-1,y:-231.4},0).wait(1).to({y:-231},0).wait(1).to({y:-230.5},0).wait(1).to({y:-230},0).wait(1).to({y:-229.5},0).wait(1).to({y:-228.9},0).wait(1).to({y:-228.2},0).wait(1).to({y:-227.5},0).wait(1).to({y:-226.7},0).wait(1).to({y:-225.7},0).wait(1).to({y:-224.6},0).wait(1).to({y:-223.2},0).wait(1).to({y:-221.6},0).wait(1).to({y:-219.7},0).wait(1).to({y:-217.4},0).wait(1).to({y:-214.7},0).wait(1).to({y:-211.5},0).wait(1).to({y:-207.8},0).wait(1).to({y:-203.1},0).wait(1).to({y:-196.8},0).wait(1).to({y:-187},0).wait(1).to({regX:0,regY:0,x:-2.6,y:42.2},0).to({y:179.8},5).to({y:389.4},5).wait(1).to({y:42.2},0).to({y:179.8},5).to({y:389.4},5).wait(1).to({y:42.2},0).to({y:179.8},5).to({y:389.4},6).wait(1).to({y:42.2},0).wait(1).to({regX:1.6,regY:-208.5,x:-1,y:-99.2},0).wait(1).to({y:-51.1},0).wait(1).to({y:-13.5},0).wait(1).to({y:17},0).wait(1).to({y:42.4},0).wait(1).to({y:63.7},0).wait(1).to({y:81.7},0).wait(1).to({y:96.9},0).wait(1).to({y:109.5},0).wait(1).to({y:119},0).wait(1).to({y:126.9},0).wait(1).to({y:133.8},0).wait(1).to({y:139.9},0).wait(1).to({y:145.4},0).wait(1).to({y:150.5},0).wait(1).to({y:155},0).wait(1).to({y:159.2},0).wait(1).to({y:162.9},0).wait(1).to({y:166.3},0).wait(1).to({y:169.3},0).wait(1).to({y:172},0).wait(1).to({y:174.3},0).wait(1).to({y:176.3},0).wait(1).to({y:177.9},0).wait(1).to({y:179.2},0).wait(1).to({y:180.1},0).wait(1).to({y:180.7},0).wait(1).to({regX:0,regY:0,x:-2.6,y:389.4},0).wait(75).to({regX:1.6,regY:-208.5,x:-1,y:177.5},0).wait(1).to({y:174.1},0).wait(1).to({y:170.6},0).wait(1).to({y:167},0).wait(1).to({y:163.3},0).wait(1).to({y:159.5},0).wait(1).to({y:155.4},0).wait(1).to({y:151},0).wait(1).to({y:146.1},0).wait(1).to({y:140.6},0).wait(1).to({y:134.2},0).wait(1).to({y:126.4},0).wait(1).to({y:117},0).wait(1).to({y:105.5},0).wait(1).to({y:91.9},0).wait(1).to({y:76.7},0).wait(1).to({y:59.9},0).wait(1).to({y:40.1},0).wait(1).to({y:15.2},0).wait(1).to({y:-18.9},0).wait(1).to({y:-71.6},0).wait(1).to({regX:0,regY:0,x:-2.6,y:42.2},0).to({y:179.8},5).to({y:389.4},5).wait(1).to({y:42.2},0).to({y:179.8},5).to({y:389.4},5).wait(1).to({y:42.2},0).to({y:179.8},5).to({y:389.4},6).wait(1).to({y:42.2},0).wait(1).to({regX:1.6,regY:-208.5,x:-1,y:-164.7},0).wait(1).to({y:-163.5},0).wait(1).to({y:-162.6},0).wait(1).to({y:-161.9},0).wait(1).to({y:-161.3},0).wait(1).to({y:-160.8},0).wait(1).to({y:-160.3},0).wait(1).to({y:-160},0).wait(1).to({y:-159.7},0).wait(1).to({y:-159.4},0).wait(1).to({y:-159.2},0).wait(1).to({y:-159.1},0).wait(1).to({y:-158.9},0).wait(1).to({y:-158.8},0).wait(1).to({y:-158.7},0).wait(1).to({y:-158.6},0).wait(1).to({y:-158.5},0).wait(1).to({y:-158.4},0).wait(1).to({y:-158.3},0).wait(1).to({y:-158.2},0).wait(2).to({y:-158.1},0).wait(2).to({y:-158},0).wait(4).to({regX:0,regY:0,x:-2.6,y:50.6},0).wait(1));

	// Символ 27
	this.instance_1 = new lib.Символ35_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(103.2,381.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({y:-25.3},0).wait(1).to({regX:8.7,regY:-203.7,x:111.9,y:-228.4},0).wait(1).to({y:-227.9},0).wait(1).to({y:-227.3},0).wait(1).to({y:-226.6},0).wait(1).to({y:-225.9},0).wait(1).to({y:-225.1},0).wait(1).to({y:-224.2},0).wait(1).to({y:-223},0).wait(1).to({y:-221.7},0).wait(1).to({y:-220},0).wait(1).to({y:-217.9},0).wait(1).to({y:-215.3},0).wait(1).to({y:-212.1},0).wait(1).to({y:-208.2},0).wait(1).to({y:-203.5},0).wait(1).to({y:-197},0).wait(1).to({y:-186.7},0).wait(1).to({regX:0,regY:0,x:103.2,y:40.3},0).to({y:177.9},5).to({y:387.5},5).wait(1).to({y:40.3},0).to({y:177.9},5).to({y:387.5},5).wait(1).to({y:40.3},0).to({y:177.9},5).to({y:387.5},6).wait(1).to({y:40.3},0).wait(1).to({regX:8.7,regY:-203.7,x:111.9,y:-97.6},0).wait(1).to({y:-50.3},0).wait(1).to({y:-13.4},0).wait(1).to({y:16.5},0).wait(1).to({y:41.4},0).wait(1).to({y:62.3},0).wait(1).to({y:80},0).wait(1).to({y:95},0).wait(1).to({y:107.3},0).wait(1).to({y:116.7},0).wait(1).to({y:124.4},0).wait(1).to({y:131.2},0).wait(1).to({y:137.2},0).wait(1).to({y:142.6},0).wait(1).to({y:147.5},0).wait(1).to({y:152},0).wait(1).to({y:156.1},0).wait(1).to({y:159.8},0).wait(1).to({y:163.1},0).wait(1).to({y:166.1},0).wait(1).to({y:168.7},0).wait(1).to({y:171},0).wait(1).to({y:172.9},0).wait(1).to({y:174.5},0).wait(1).to({y:175.8},0).wait(1).to({y:176.7},0).wait(1).to({y:177.2},0).wait(1).to({regX:0,regY:0,x:103.2,y:381.1},0).wait(79).to({regX:8.7,regY:-203.7,x:111.9,y:173.3},0).wait(1).to({y:169.2},0).wait(1).to({y:164.9},0).wait(1).to({y:160.5},0).wait(1).to({y:155.9},0).wait(1).to({y:151},0).wait(1).to({y:145.5},0).wait(1).to({y:139.1},0).wait(1).to({y:131.6},0).wait(1).to({y:122},0).wait(1).to({y:109.9},0).wait(1).to({y:94.7},0).wait(1).to({y:76.9},0).wait(1).to({y:56.6},0).wait(1).to({y:31.7},0).wait(1).to({y:-2.3},0).wait(1).to({y:-56.5},0).wait(1).to({regX:0,regY:0,x:103.2,y:40.3},0).to({y:177.9},5).to({y:387.5},5).wait(1).to({y:40.3},0).to({y:177.9},5).to({y:387.5},5).wait(1).to({y:40.3},0).to({y:177.9},5).to({y:387.5},6).wait(1).to({y:40.3},0).wait(1).to({regX:8.7,regY:-203.7,x:111.9,y:-123},0).wait(1).to({y:-93.9},0).wait(1).to({y:-71.3},0).wait(1).to({y:-52.8},0).wait(1).to({y:-37.5},0).wait(1).to({y:-24.7},0).wait(1).to({y:-13.8},0).wait(1).to({y:-4.7},0).wait(1).to({y:3},0).wait(1).to({y:8.7},0).wait(1).to({y:13.4},0).wait(1).to({y:17.6},0).wait(1).to({y:21.3},0).wait(1).to({y:24.6},0).wait(1).to({y:27.6},0).wait(1).to({y:30.4},0).wait(1).to({y:32.9},0).wait(1).to({y:35.2},0).wait(1).to({y:37.2},0).wait(1).to({y:39},0).wait(1).to({y:40.6},0).wait(1).to({y:42},0).wait(1).to({y:43.2},0).wait(1).to({y:44.2},0).wait(1).to({y:45},0).wait(1).to({y:45.5},0).wait(1).to({y:45.9},0).wait(1).to({regX:0,regY:0,x:103.2,y:249.7},0).wait(7));

	// Символ 26
	this.instance_2 = new lib.Символ33_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-119.4,328.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-29.6},15).to({y:175.4},5).to({y:385},5).wait(1).to({y:37.8},0).to({y:175.4},5).to({y:385},5).wait(1).to({y:37.8},0).to({y:175.4},5).to({y:385},6).wait(1).to({y:37.8},0).wait(1).to({regX:7.2,regY:-214.7,x:-112.2,y:-107.6},0).wait(1).to({y:-57.8},0).wait(1).to({y:-18.9},0).wait(1).to({y:12.6},0).wait(1).to({y:38.9},0).wait(1).to({y:60.9},0).wait(1).to({y:79.5},0).wait(1).to({y:95.3},0).wait(1).to({y:108.3},0).wait(1).to({y:118.1},0).wait(1).to({y:126.3},0).wait(1).to({y:133.4},0).wait(1).to({y:139.7},0).wait(1).to({y:145.4},0).wait(1).to({y:150.6},0).wait(1).to({y:155.3},0).wait(1).to({y:159.6},0).wait(1).to({y:163.5},0).wait(1).to({y:167},0).wait(1).to({y:170.1},0).wait(1).to({y:172.9},0).wait(1).to({y:175.3},0).wait(1).to({y:177.4},0).wait(1).to({y:179},0).wait(1).to({y:180.4},0).wait(1).to({y:181.3},0).wait(1).to({y:181.9},0).wait(1).to({regX:0,regY:0,x:-119.4,y:396.8},0).wait(81).to({y:-29.6},15).to({y:175.4},5).to({y:385},5).wait(1).to({y:37.8},0).to({y:175.4},5).to({y:385},5).wait(1).to({y:37.8},0).to({y:175.4},5).to({y:385},6).wait(1).to({y:37.8},0).wait(1).to({regX:7.2,regY:-214.7,x:-112.2,y:-132.9},0).wait(1).to({y:-101.4},0).wait(1).to({y:-76.7},0).wait(1).to({y:-56.7},0).wait(1).to({y:-40.1},0).wait(1).to({y:-26.1},0).wait(1).to({y:-14.3},0).wait(1).to({y:-4.4},0).wait(1).to({y:3.9},0).wait(1).to({y:10.2},0).wait(1).to({y:15.3},0).wait(1).to({y:19.8},0).wait(1).to({y:23.8},0).wait(1).to({y:27.5},0).wait(1).to({y:30.7},0).wait(1).to({y:33.7},0).wait(1).to({y:36.5},0).wait(1).to({y:38.9},0).wait(1).to({y:41.1},0).wait(1).to({y:43.1},0).wait(1).to({y:44.9},0).wait(1).to({y:46.4},0).wait(1).to({y:47.7},0).wait(1).to({y:48.8},0).wait(1).to({y:49.6},0).wait(1).to({y:50.2},0).wait(1).to({y:50.6},0).wait(1).to({regX:0,regY:0,x:-119.4,y:265.4},0).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.4,-182.6,287.7,664.1);


(lib.Символ96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ95();
	this.instance.parent = this;
	this.instance.setTransform(254,70.9,1,1,0,0,0,254,70.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,507.9,141.8);


(lib.Символ83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ78();
	this.instance.parent = this;
	this.instance.setTransform(189,69.5,1,1,0,0,0,189,69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.06,scaleY:1.06,y:69.6},0).wait(1).to({scaleX:1,scaleY:1,y:69.5},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,386,147);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.button_2.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			this.parent.parent.PlayNextSlot(); 
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.button_2 = new lib.Символ96();
	this.button_2.parent = this;
	this.button_2.setTransform(260,77.9,1,1,0,0,0,254,70.9);
	new cjs.ButtonHelper(this.button_2, 0, 1, 2, false, new lib.Символ96(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-10.7,2.4,544,155), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(157.9,157.9,1,1,0,0,0,157.9,157.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-2,-2,323,323), null);


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

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,1920,1080), null);


(lib.Символ88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(467.2,441.4,2.955,2.792,0,0,0,158.1,158.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ88, new cjs.Rectangle(-2,-2,941,889), null);


(lib.Символ64копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_47 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(47).call(this.frame_47).wait(1));

	// Слой 7
	this.instance = new lib.Символ93();
	this.instance.parent = this;
	this.instance.setTransform(451.7,488.5,1,1,0,0,0,15.5,20.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({alpha:1},2).wait(32));

	// Слой 12
	this.instance_1 = new lib.Символ92();
	this.instance_1.parent = this;
	this.instance_1.setTransform(446.7,260.9,1,1,0,0,0,242.4,20.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({y:289,alpha:1},4).wait(36));

	// Слой 5
	this.instance_2 = new lib.Символ87();
	this.instance_2.parent = this;
	this.instance_2.setTransform(446.6,154.2,1,1,0,0,0,217.2,20.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({y:225.7,alpha:1},5).wait(36));

	// Слой 6
	this.instance_3 = new lib.Символ48копия();
	this.instance_3.parent = this;
	this.instance_3.setTransform(457.7,709.1,0.615,0.615,0,0,0,262.5,77.7);
	this.instance_3.alpha = 0;
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,15);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({alpha:1},3).to({regX:262.4,regY:77.6,scaleX:0.71,scaleY:0.71,x:457.6,y:709},2).wait(41));

	// Слой 11
	this.instance_4 = new lib.Символ91();
	this.instance_4.parent = this;
	this.instance_4.setTransform(428.6,397.6,0.774,0.774,0,0,0,436.1,64);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({x:470.8,alpha:1},5).wait(31));

	// Слой 10
	this.instance_5 = new lib.Символ90();
	this.instance_5.parent = this;
	this.instance_5.setTransform(410.7,578,0.698,0.698,0,0,0,454.6,64);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({x:452.9,alpha:1},4).wait(29));

	// Слой 1
	this.instance_6 = new lib.Символ88();
	this.instance_6.parent = this;
	this.instance_6.setTransform(448.4,456.6,1.538,1.538,0,0,0,466.6,440.8);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:466.7,scaleX:0.95,scaleY:0.95,x:448.5,alpha:1},5).to({regX:466.6,scaleX:1,scaleY:1,x:448.4},2).wait(41));

	// Слой 8
	this.instance_7 = new lib.Символ1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(473.8,447.5,1.153,1.153,0,0,0,-925.1,151.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({_off:false},0).wait(41));

	// Слой 2
	this.instance_8 = new lib.Символ65();
	this.instance_8.parent = this;
	this.instance_8.setTransform(450.5,458.6,1,1,0,0,0,1158.2,657.2);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:0.391},5).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1467.1,-629.5,3835.4,3793.2);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.win1 = new lib.Символ42();
	this.win1.parent = this;
	this.win1.setTransform(499.2,499.2,1,1,0,0,0,499.2,499.2);

	this.timeline.addTween(cjs.Tween.get(this.win1).wait(1));

	// Слой 2
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(500,500,3.161,3.161,0,0,0,158.1,158.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ63, new cjs.Rectangle(-1.8,-1.8,1005,1005), null);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_37 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(37).call(this.frame_37).wait(11));

	// Слой 5
	this.instance = new lib.Символ58();
	this.instance.parent = this;
	this.instance.setTransform(446.7,164.4,1.085,1.085,0,0,0,223.7,31.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({regY:31.1,scaleX:0.85,scaleY:0.85,x:446.8,y:168.5,alpha:1},5).wait(36));

	// Слой 6
	this.instance_1 = new lib.Символ48();
	this.instance_1.parent = this;
	this.instance_1.setTransform(457.6,-596.5,0.709,0.709,0,0,0,262.4,77.6);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:722.8},5).to({y:709},2).wait(41));

	// Слой 1
	this.instance_2 = new lib.Символ63();
	this.instance_2.parent = this;
	this.instance_2.setTransform(395.2,-889.8,0.888,0.696,0,0,0,445.4,376.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:0.89,x:402.3,y:356.1},5).to({y:333.3},2).wait(35).to({y:388.3,alpha:0},5).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(473.8,447.5,1.153,1.153,0,0,0,-925.1,151.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).wait(37).to({y:502.5,alpha:0},5).wait(1));

	// Слой 2
	this.instance_4 = new lib.Символ65();
	this.instance_4.parent = this;
	this.instance_4.setTransform(450.5,458.6,1,1,0,0,0,1158.2,657.2);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0.391},5).wait(37).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1467.1,-1153.7,3835.4,4317.4);


// stage content:
(lib.slot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		this.bnt1.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		
		function fl_MouseClickHandler() {
			this.ru4ka.gotoAndPlay(1);
			this.slot.icons.gotoAndPlay(1);
			this.bnt1.visible = false;
			this.bnt12.visible = false;
		}
		this.bnt12.addEventListener("click", fl_MouseClickHandler1.bind(this));
		
		function fl_MouseClickHandler1() {
			this.ru4ka.gotoAndPlay(1);
			this.slot.icons.gotoAndPlay(1);
			this.bnt1.visible = false;
			this.bnt12.visible = false;
		}
		
		this.PlayNext = function(){
			_this.round1.gotoAndPlay(1);
		}
		
		this.PlayNextRound = function(){
			_this.round2.gotoAndPlay(1);
		}
		
		this.PlayNextSlot = function(){
			_this.slot.icons.gotoAndPlay(150);
			_this.round1.gotoAndPlay(43);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 13
	this.bnt12 = new lib.Символ82();
	this.bnt12.parent = this;
	this.bnt12.setTransform(962,718.5,1,1,0,0,0,189,69.5);

	this.timeline.addTween(cjs.Tween.get(this.bnt12).wait(1));

	// btn1
	this.bnt1 = new lib.Символ70();
	this.bnt1.parent = this;
	this.bnt1.setTransform(1439.4,275.5,0.779,0.779,0,0,0,64.1,64.1);
	new cjs.ButtonHelper(this.bnt1, 0, 1, 2, false, new lib.Символ70(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bnt1).wait(1));

	// Слой 2
	this.instance = new lib.Символ76();
	this.instance.parent = this;
	this.instance.setTransform(452.9,455.8,0.816,0.816,0,0,0,226.1,188.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// plashka
	this.instance_1 = new lib.Символ46();
	this.instance_1.parent = this;
	this.instance_1.setTransform(960,29.1,1,1,0,0,0,961.4,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// round2
	this.round2 = new lib.Символ64копия();
	this.round2.parent = this;
	this.round2.setTransform(960.3,506.7,0.646,0.646,0,0,0,456.2,456.3);

	this.timeline.addTween(cjs.Tween.get(this.round2).wait(1));

	// round
	this.round1 = new lib.Символ64();
	this.round1.parent = this;
	this.round1.setTransform(960.3,506.7,0.646,0.646,0,0,0,456.2,456.3);

	this.timeline.addTween(cjs.Tween.get(this.round1).wait(1));

	// Слой 14
	this.instance_2 = new lib.Символ83();
	this.instance_2.parent = this;
	this.instance_2.setTransform(955.6,717.8,1,1,0,0,0,189,69.5);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Символ83(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 10
	this.instance_3 = new lib.cash_b();
	this.instance_3.parent = this;
	this.instance_3.setTransform(526,779);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// slot
	this.slot = new lib.Символ13();
	this.slot.parent = this;
	this.slot.setTransform(956.6,480,0.685,0.685,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.slot).wait(1));

	// ru4ka
	this.ru4ka = new lib.Символ21копия();
	this.ru4ka.parent = this;
	this.ru4ka.setTransform(1389.2,408.4,0.685,0.685,0,0,0,148.5,258.6);

	this.timeline.addTween(cjs.Tween.get(this.ru4ka).wait(1));

	// Слой 3
	this.instance_4 = new lib.Символ55копия();
	this.instance_4.parent = this;
	this.instance_4.setTransform(959.1,931.6,1,1,0,0,0,154,39.9);

	this.instance_5 = new lib.Символ55();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1547.1,173.3,1,1,0,0,0,154,39.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Слой 7
	this.instance_6 = new lib.Символ66();
	this.instance_6.parent = this;
	this.instance_6.setTransform(959.3,199.4,0.802,0.802,0,0,0,254.6,99.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// light
	this.instance_7 = new lib.Символ26_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(966.1,551,1,1,0,0,0,1068.4,904.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 4
	this.instance_8 = new lib.bg();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(676.8,5,2479.6,2791.9);
// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/arrow1.png?1490623185453", id:"arrow1"},
		{src:"images/bg.jpg?1490623185453", id:"bg"},
		{src:"images/bnt.png?1490623185453", id:"bnt"},
		{src:"images/btn_ma.png?1490623185453", id:"btn_ma"},
		{src:"images/cash_b.png?1490623185453", id:"cash_b"},
		{src:"images/chery.png?1490623185453", id:"chery"},
		{src:"images/coin1.png?1490623185453", id:"coin1"},
		{src:"images/coin10.png?1490623185453", id:"coin10"},
		{src:"images/coin2.png?1490623185453", id:"coin2"},
		{src:"images/coin3.png?1490623185453", id:"coin3"},
		{src:"images/coin4.png?1490623185453", id:"coin4"},
		{src:"images/coin5.png?1490623185453", id:"coin5"},
		{src:"images/coin6.png?1490623185453", id:"coin6"},
		{src:"images/coin7.png?1490623185453", id:"coin7"},
		{src:"images/coin8.png?1490623185453", id:"coin8"},
		{src:"images/coin9.png?1490623185453", id:"coin9"},
		{src:"images/depoz.png?1490623185453", id:"depoz"},
		{src:"images/diamond.png?1490623185453", id:"diamond"},
		{src:"images/dvesti.png?1490623185453", id:"dvesti"},
		{src:"images/gift.png?1490623185453", id:"gift"},
		{src:"images/lemon.png?1490623185453", id:"lemon"},
		{src:"images/light.jpg?1490623185453", id:"light"},
		{src:"images/light_up.png?1490623185453", id:"light_up"},
		{src:"images/logotype.png?1490623185453", id:"logotype"},
		{src:"images/red_r.png?1490623185454", id:"red_r"},
		{src:"images/ri4ag.png?1490623185454", id:"ri4ag"},
		{src:"images/ri4ag_tube.png?1490623185454", id:"ri4ag_tube"},
		{src:"images/round.png?1490623185454", id:"round"},
		{src:"images/shadow_down.png?1490623185454", id:"shadow_down"},
		{src:"images/slot_1.png?1490623185454", id:"slot_1"},
		{src:"images/txt1.png?1490623185454", id:"txt1"},
		{src:"images/txt2.png?1490623185454", id:"txt2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;