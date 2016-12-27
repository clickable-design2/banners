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
p.nominalBounds = new cjs.Rectangle(0,0,894,894);


(lib.katay_03 = function() {
	this.initialize(img.katay_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,116);


(lib.katay_06 = function() {
	this.initialize(img.katay_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,98);


(lib.katay_09 = function() {
	this.initialize(img.katay_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,261,138);


(lib.katay_12 = function() {
	this.initialize(img.katay_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,85);


(lib.katay_15 = function() {
	this.initialize(img.katay_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,137);


(lib.katay_20 = function() {
	this.initialize(img.katay_20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,217);


(lib.katay_25 = function() {
	this.initialize(img.katay_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,82);


(lib.katay_28 = function() {
	this.initialize(img.katay_28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,125);


(lib.katay_2_03 = function() {
	this.initialize(img.katay_2_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,142);


(lib.katay_2_06 = function() {
	this.initialize(img.katay_2_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,119);


(lib.katay_32 = function() {
	this.initialize(img.katay_32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,74);


(lib.katay_33 = function() {
	this.initialize(img.katay_33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,141);


(lib.katay_dd32 = function() {
	this.initialize(img.katay_dd32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,172);


(lib.katay_w33 = function() {
	this.initialize(img.katay_w33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,402,398);


(lib.katay_w3e3 = function() {
	this.initialize(img.katay_w3e3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,89);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,513,102);


(lib.mous = function() {
	this.initialize(img.mous);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.ng_02 = function() {
	this.initialize(img.ng_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,276);


(lib.ng_1 = function() {
	this.initialize(img.ng_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);// helper functions:

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


(lib.Символ91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,1,1).p("AB1jUQAcAQAYAZQAnAnARAvADdBXQgFANgHAMQgQAbgYAYQgZAZgdAQAjghMQAQg1ArgqQAXgYAbgPAheDVQgngSggggQgdgdgQghQgBgBgBgCQgDgGgCgG");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ91, new cjs.Rectangle(-25,-23.7,50,47.6), null);


(lib.Символ90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AAzhqQASAJAPAOQAOAPAIAQABnA6QgIAOgLAMQgPAOgSAJAhpg0QAIgQAOgPQAMgLAOgIAg5BnQgOgIgMgLQgLgMgIgO");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ90, new cjs.Rectangle(-11.6,-11.6,23.2,23.4), null);


(lib.Символ83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mous();
	this.instance.parent = this;
	this.instance.setTransform(-32,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ83, new cjs.Rectangle(-32,-32,64,64), null);


(lib.Символ82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#07CDFF").s().p("AiUBPIAAgRIhTAAIAAARIgcAAIAAgwIAFAAQAIAAADgDQADgEABgKIAKhaIBhAAIAABrIAOAAIAAAwgAjLAPQgCAOgFADIAqAAIAAhNIgdAAgAheA/IAAiLIAlAAIAABEIBIhFIALAAIAACLIgjAAIAAhHIhKBIgAKiA+IAAiKIAkAAIAAAqIAaAAQAIAAAOADQAJAFAGAGQAGAHAEAJQADAIAAAKQAAAJgDAIQgEAJgGAHQgGAHgJAEQgOAFgIgBgALGAfIAaAAQAHgBAEgFQAEgFAAgGQAAgHgEgFQgEgEgHgBIgaAAgAHTA+IAAiKIAlAAIAABqIAiAAIAAhqIAkAAIAABqIAiAAIAAhqIAlAAIAACKgAGRA+IAAiKIAkAAIAACKgAEPA+IAAiKIAjAAIAAAqIAaAAQAJAAANADQAJAFAHAGQAGAHADAJQADAIAAAKQAAAJgDAIQgDAJgGAHQgHAHgJAEQgNAFgJgBgAEyAfIAaAAQAHgBAFgFQADgFAAgGQAAgHgEgFQgEgEgHgBIgaAAgADMA+IAAg/IgeAeIgEAAIgegeIAAA/IgkAAIAAiLIANAAIA3A9IA4g9IANAAIAACLgAlsA+IAAiKIBYAAIAAAfIgzAAIAAAVIAvAAIAAAeIgvAAIAAAXIA0AAIAAAhgAolA+IgIgRIg0AAIgIARIgnAAIAAgEIBBiIIAQAAIBACIIAAAEgAo5AOIgOghIgPAhIAdAAgArBA+IAAg4IgrAAIAAA4IglAAIAAiKIAlAAIAAAyIArAAIAAgyIAlAAIAACKgAnyA9IAAiKIA+AAQAJAAAJADQAIADAGAFQAFAHAEAHQADAIAAAKQAAAHgDAGQgEAHgFAEQAFACADAEQADACACAEQAFAHAAAKQAAAJgDAIQgDAIgGAFQgFAGgJADQgIADgLAAgAnNAeIAcAAQAFAAADgEQACgDABgEQAAgFgDgDQgDgFgFAAIgcAAgAnNgWIAWAAQAFAAADgDQADgDAAgFQAAgFgDgDQgDgFgFAAIgWAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ82, new cjs.Rectangle(-78.5,-7.9,157.1,15.8), null);


(lib.Символ79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s().p("ABVWEIAAyAITeAAIAASAgA0yoTIAAtwMAkNAAAIAANwg");
	this.shape.setTransform(17.2,97.2);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.katay_dd32();
	this.instance.parent = this;
	this.instance.setTransform(-98,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ78, new cjs.Rectangle(-98,-86,196,172), null);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.katay_w33();
	this.instance.parent = this;
	this.instance.setTransform(-82.3,-81.5,0.41,0.41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ77, new cjs.Rectangle(-82.3,-81.5,164.6,163), null);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AOFBgIAAi8IAtAAIAAC8gALrBgIAAi8IAsAAIAABEIAgAAQAOgBAMAFQAMAEAIAJQAJAHAFALQAFAMgBAOQAAAOgFAKQgEALgKAIQgIAIgLAEQgNAEgNAAgAMXA6IAgAAQAKAAAFgHQAEgFAAgLQAAgKgEgFQgFgHgKAAIggAAgAJCBgIAAi8IBOAAQAOAAAMAFQAMAFAJAIQAJAIAFANQAFAMAAANQAAANgEALQgDAKgHAIQgFAGgGAEQgGAEgGADQgNAFgQAAIghAAIAAA8gAJvgDIAhAAQALAAAEgFQAFgFABgPIgBgLQgCgFgEgFQgFgEgJAAIghAAgAH9BgIgIgfIhCAAIgHAfIgtAAIAoiiQACgHADgGQAEgGAGgDQAGgDAIgDQAHgBAKAAQAJAAAHABQAJADAFADQAGADADAGQAFAGACAHIAnCigAHtAZIgShPQgBgFgFAAQgGAAAAAFIgSBPIAwAAgAB4BgIAAi8IAtAAIAACVIA1AAIAAiVIAtAAIAACVIA0AAIAAiVIAsAAIAAC8gAh5BgIAAi8IAtAAIAABEIAjAAQAOgBAMAFQAMAEAHAJQAJAHAEALQAEAMABAOQAAAOgGAKQgEALgJAIQgHAIgMAEQgMAEgNAAgAhMA6IAjAAQAKAAAEgHQAFgFAAgLQAAgKgFgFQgEgHgKAAIgjAAgAjqBgIAAiVIgpAAIAAgnICBAAIAAAnIgrAAIAACVgAlYBgIAAhYQAAgPACgOIAAAAQgHARgGAJIgxBbIgqAAIAAi8IAqAAIAABYQAAAMgDASIABAAQAHgRAHgMIAwhZIArAAIAAC8gAovBgIAAiVIgqAAIAAgnICBAAIAAAnIgrAAIAACVgAqUBgIgHgfIhCAAIgHAfIguAAIApiiQABgHAEgGQAEgGAFgDQAHgDAHgDQAHgBAKAAQAJAAAIABQAIADAFADQAGADAEAGQAEAGACAHIAoCigAqkAZIgShPQAAgFgGAAQgFAAgBAFIgSBPIAwAAgAtMBgIgOgwQgEgPgGgHQgHgGgKAAIgPAAIAABMIgtAAIAAi8IAtAAIAABLIAOAAIAnhLIAzAAIgxBVQAPAHANAfIAXBBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ75, new cjs.Rectangle(-94.6,-9.6,189.2,19.2), null);


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKyBgIAAi8IBOAAQAPAAAMAFQAMAFAIAIQAKAIAEANQAFAMAAANQAAANgEALQgDAKgHAIQgFAGgGAEQgFAEgHADQgNAFgQAAIghAAIAAA8gALfgDIAhAAQALAAAFgFQAFgFAAgPIgBgLQgCgFgEgFQgFgEgJAAIghAAgAJtBgIgHgfIhDAAIgGAfIguAAIAoiiQACgHAEgGQAEgGAFgDQAGgDAIgDQAHgBAKAAQAJAAAIABQAIADAFADQAGADAEAGQAEAGACAHIAoCigAJdAZIgShPQgBgFgFAAQgFAAgBAFIgSBPIAwAAgADoBgIAAi8IAtAAIAACVIA1AAIAAiVIAtAAIAACVIA0AAIAAiVIAtAAIAAC8gAgIBgIAAi8IAsAAIAABEIAiAAQAOgBAMAFQAMAEAIAJQAJAHAEALQAFAMAAAOQAAAOgFAKQgFALgJAIQgIAIgMAEQgMAEgNAAgAAkA6IAiAAQAKAAAFgHQAEgFAAgLQAAgKgEgFQgFgHgKAAIgiAAgAh5BgIAAiVIgqAAIAAgnICBAAIAAAnIgrAAIAACVgAjoBgIAAhYQAAgPADgOIgBAAQgHARgGAJIgxBbIgqAAIAAi8IAqAAIAABYQAAAMgCASIABAAQAGgRAHgMIAwhZIArAAIAAC8gAm/BgIAAiVIgqAAIAAgnICCAAIAAAnIgrAAIAACVgAojBgIgIgfIhCAAIgHAfIguAAIApiiQACgHADgGQAEgGAGgDQAGgDAHgDQAIgBAJAAQAKAAAHABQAIADAGADQAFADAEAGQAEAGACAHIAoCigAozAZIgShPQgBgFgGAAQgFAAgBAFIgSBPIAxAAgArcBgIgNgwQgEgPgHgHQgHgGgKAAIgPAAIAABMIgtAAIAAi8IAtAAIAABLIAPAAIAmhLIAzAAIgxBVQAPAHANAfIAYBBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ74, new cjs.Rectangle(-83.4,-9.6,166.8,19.2), null);


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("APrBFIhHkgIDXhmMAhRAAAIAAIYI+0BrgEgzLADXIAAoYMAhRAAAIDXBmIhIEgIksD9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ73, new cjs.Rectangle(-327.6,-32.2,655.2,64.5), null);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("APrBFIhHkgIDXhmMAhRAAAIAAIYI+0BrgEgzLADXIAAoYMAhRAAAIDXBmIhIEgIksD9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ71, new cjs.Rectangle(-327.6,-32.2,655.2,64.5), null);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-2.8,29.7,-2.8,-33.8).s().p("Eg5jAHgIAAu/MBzHAAAIAAO/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ70, new cjs.Rectangle(-368.4,-48,736.8,96), null);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhmCMQgQgDgMgFQgMgFgJgHQgKgIgHgJQgHgKgFgLQgFgLgDgNQgEgRgBgoQAAgUAFgkQAEgNAEgLQAFgMAHgJQAHgKAKgHQAKgIALgFQANgFAPgDQAPgCATAAQASAAAQACQAPADAMAFQALAFAKAIQAJAHAHAKQAHAJAFAMQAFALACANQAGAkABAUQgCAogEARQgDANgFALQgFALgGAKQgIAJgJAIQgKAHgKAFQgNAFgPADQgQADgSAAQgTAAgPgDgAhlhLQgLAGgGANQgFAKgDARIgBAeQABAqAHAQQAHAMALAHQANAHAUAAQATAAANgHQAMgHAGgMQAIgQAAgqIgBgeQgCgRgFgKQgHgNgLgGQgNgIgTAAQgUAAgNAIgAQOCMIgLguIhiAAIgKAuIhEAAIA8juQADgMAFgIQAGgJAIgEQAJgGAKgCQALgDAOAAQAPAAALADQALACAJAGQAIAEAGAJQAFAIAEAMIA7DugAP2AlIgbh2QgBgIgJABQgGgBgDAIIgaB2IBIAAgAL9CMIgUhHQgGgWgKgJQgKgKgOAAIgXAAIAABwIhCAAIAAkWIBCAAIAABvIAWAAIA5hvIBKAAIhIB9QAXALATAwIAjBegAH0CMIAAiBQAAgYAFgTIgCAAQgKAZgJANIhICGIg+AAIAAkWIA+AAIAACCQAAASgDAcIABAAQAIgZALgSIBHiFIA/AAIAAEWgABlCMIAAkWIBoAAQAWAAARAGQARAFANAJQANALAGAPQAHAQAAATQgBASgIAQQgJANgMAIQAIADAHAFQAHAHAGAIQAEAHADALQAEAKAAALQgBAUgHAQQgIAPgNAKQgMAJgTAGQgRAEgVAAgAClBVIAyAAQAPAAAHgJQAGgHAAgQQAAgNgHgGQgIgHgQAAIgvAAgAClgbIAoAAQAOAAAJgGQAIgIAAgNQAAgOgIgHQgIgGgRAAIgmAAgAmFCMIAAkWICmAAIAAA6IhjAAIAADcgAoICMQgYABgUgIQgSgFgNgNQgMgLgGgQQgGgOAAgRIAAhxQAAgRAFgNQAHgPALgLQANgNASgFQAUgIAZAAIBWAAIAAA6IhWAAQgPAAgJAKQgJAJAAAPIAAATIBnAAIAAA5IhnAAIAAAVQAAANAJAKQAJAIAPABIBWAAIAAA5gArbCMIAAhyIhXAAIAAByIhDAAIAAkWIBDAAIAABrIBXAAIAAhrIBDAAIAAEWgAvrCMQgZABgUgIQgSgFgNgNQgMgLgHgQQgGgOAAgRIAAhxQAAgRAFgNQAGgPAMgLQANgNATgFQATgIAbAAIBPAAIAAA6IhPAAQgQAAgKAKQgIAJAAAPIAABhQAAANAJAKQAJAIAQABIBPAAIAAA5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ69, new cjs.Rectangle(-110.5,-14.3,221,28.6), null);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AhmBIQgQgDgMgFQgMgGgJgHQgKgHgHgKQgHgKgFgLQgFgLgDgMQgEgRgBgoIAAAAIAAgDIAAgBIAAgDIBCAAIAAAHIAAAAQABAqAHARQAHALALAHQANAGAUAAQATAAANgGQAMgHAGgLQAIgRAAgqIAAgHIBBAAIABADIAAABIAAADIAAAAQgCAogEARQgDAMgFALQgFALgGAKQgIAKgJAHQgKAHgKAGQgNAFgPADQgQADgSAAQgTAAgPgDgAQOBIIgLgvIhiAAIgKAvIhEAAIAkiSIBBAAIgKArIBIAAIgKgrIBBAAIAkCSgAL9BIIgUhHQgGgVgKgKQgKgKgOAAIgXAAIAABwIhCAAIAAiSICfAAIACADIABABIACADQANAPAMAeIAjBegAH0BIIAAiBIABgKIAAgDIAAgBIAAgDIA+AAIAACSgAFeBIIAAiSIA+AAIAAADIAAABIAAADQAAAQgDAVIABAAQAHgUAJgRIABgDIABgBIABgDIA+AAIgBADIgBABIgBADIgEAGIhICFgABlBIIAAiSICuAAIgDADIgCABIAGADIAJAGQAHAGAGAIQAEAIADAKQAEALAAALQgBASgHARQgIAOgNAKQgMAKgTAFQgRAFgVAAgAClAQIAyAAQAPAAAHgJQAGgHAAgOQAAgNgHgGQgIgIgQABIgvAAgAmFBIIAAiSIBDAAIAACSgAoIBIQgYAAgUgHQgSgGgNgMQgMgMgGgPQgGgOAAgRIAAg/ICpAAIAAAkIhnAAIAAAWQAAAMAJAJQAJAJAPAAIBWAAIAAA6gArbBIIAAhxIhXAAIAABxIhDAAIAAiSIDdAAIAACSgAvrBIQgZAAgUgHQgSgGgNgMQgMgMgHgPQgGgOAAgRIAAg/IBDAAIAAA6QAAANAJAIQAJAJAQAAIBPAAIAAA6g");
	this.shape.setTransform(0,6.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AP+BEIgQhKQgCgIgIAAQgHAAgCAIIgRBKIhBAAIAYhcQADgLAFgIQAGgJAIgFQAJgGALgCQALgCAOgBQAOABALACQAMACAIAGQAJAFAFAJQAGAIADALIAXBcgAJ6BEIAAiDIBDAAIAABuIAVAAIA5huIBLAAIhIB8IAJAGIACABgAIHBEIAAgBQABgOADgMIgBAAIgMAaIgBABIg+AAIABAAIBHiDIA/AAIAACDgAFwBEIAAiDIA/AAIAACAIAAACIAAABgAB3BEIAAiDIBpAAQAVAAARAFQASAFAMAKQANALAHAPQAGAPAAATQAAASgJAPQgGAKgIAHIgCABgAC3AvIAoAAQAPgBAIgGQAIgHAAgNQAAgOgIgGQgIgGgQAAIgnAAgAAHBEIAAgXQgDgRgEgKQgGgNgMgFQgMgIgUAAQgUAAgMAIQgMAFgGANQgFAKgCARIgBAXIhDAAIAAgBQABgTAEgdQAEgNAEgLQAFgLAHgJQAIgKAJgHQAKgIAMgFQAMgFAPgDQAQgDASAAQASAAAQADQAPADALAFQAMAFAKAIQAJAHAHAKQAHAJAFALQAFALADANQAEAdABATIAAABgAlyBEIAAiDIClAAIAAA5IhjAAIAABKgApZBEIAAgyQAAgRAGgNQAGgPALgLQANgMASgGQAUgHAZAAIBWAAIAAA5IhWAAQgPAAgJAJQgJAJAAAQIAAATIBnAAIAAAVgAtiBEIAAiDIBCAAIAABqIBYAAIAAhqIBCAAIAACDgAw+BEIAAgyQAAgRAGgNQAGgPAMgLQAMgMATgGQAUgHAaAAIBPAAIAAA5IhPAAQgQAAgJAJQgJAJAAAQIAAAog");
	this.shape_1.setTransform(-1.8,-7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ68, new cjs.Rectangle(-110.5,-14.3,221,28.6), null);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmiCLQgQgDgMgFQgMgFgKgHQgJgIgHgJQgHgKgFgMQgFgKgDgNQgEgRgCgoQAAgUAGgkQADgNAFgLQAFgMAHgJQAHgKAKgHQAJgIAMgEQANgGAPgDQAPgCASAAQATAAAPACQAPADANAGQAMAEAJAIQAKAHAHAKQAHAJAFAMQAFALACANQAGAkAAAUQgBAogEARQgDANgFAKQgFAMgHAKQgHAJgJAIQgKAHgMAFQgNAFgPADQgPADgTAAQgSAAgPgDgAmhhMQgLAGgGANQgGAKgCARIgBAeQABAqAHAQQAGAMAMAHQANAHATAAQAUAAANgHQAMgHAGgMQAIgQAAgqIgBgeQgCgRgFgKQgHgNgLgGQgNgHgUgBQgTABgNAHgAKUCLIAAiBQAAgYAEgTIgBAAQgLAZgIANIhICGIg/AAIAAkWIA/AAIAACCQAAASgEAcIABAAQAJgZALgSIBHiFIA/AAIAAEWgAEDCLIAAkWIB0AAQAVAAASAIQASAHANAMQANANAHASQAGARAAAUQAAASgEAQQgFARgKAMQgHAIgJAGQgIAGgLAEQgTAHgXAAIgxAAIAABZgAFGgGIAxAAQARAAAGgIQAHgIAAgWQAAgKgBgFQgCgJgGgGQgIgHgNAAIgxAAgAB/CLQgYABgUgIQgSgFgNgNQgLgLgHgQQgGgOAAgRIAAhxQAAgRAGgNQAGgPALgLQANgNASgFQAUgIAZAAIBWAAIAAA6IhWAAQgPAAgJAJQgJAKAAAPIAAATIBnAAIAAA5IhnAAIAAAVQAAANAJAKQAKAIAOABIBWAAIAAA5gAjWCLIAAkWIDAAAIAAA6Ih+AAIAAAwIAxAAQAVgBARAGQASAGANALQANALAGAQQAHAQgBAVQAAAUgHAQQgHARgNAKQgMAMgRAFQgSAHgUgBgAiUBSIAxAAQAPgBAHgHQAHgIgBgQQAAgOgGgGQgHgHgPAAIgxAAgAptCLQgZABgUgIQgSgFgNgNQgMgLgGgQQgHgOAAgRIAAhxQAAgRAGgNQAGgPAMgLQAMgNATgFQAUgIAaAAIBPAAIAAA6IhPAAQgQAAgJAJQgJAKAAAPIAABhQAAANAJAKQAJAIAQABIBPAAIAAA5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ67, new cjs.Rectangle(-72.3,-14.2,144.6,28.4), null);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AmiBIQgQgDgMgFQgMgFgKgIQgJgHgHgKQgHgJgFgMQgFgLgDgMQgEgRgCgnIAAgEIAAgBIAAgDIBDAAIAAAIQABAqAHAQQAGALAMAHQANAHATAAQAUAAANgHQAMgHAGgLQAIgQAAgqIAAgIIBCAAIAAADIAAABIAAAEQgBAngEARQgDAMgFALQgFAMgHAJQgHAKgJAHQgKAIgMAFQgNAFgPADQgPADgTAAQgSAAgPgDgAKUBIIAAiAIAAgOIAAgBIAAgDIA/AAIAACSgAH9BIIAAiSIA/AAIAAADIAAABQgBASgDAXIABAAQAIgXAKgSIAAgBIACgDIA+AAIgCADIAAABIgFAJIhICFgAEDBIIAAiSIBDAAIAAABIAxAAIAHgBIBUAAIgBADIgBABQgEANgIAJQgHAJgJAGQgIAGgLAEQgTAHgXAAIgxAAIAABYgAB/BIQgYAAgUgHQgSgGgNgMQgLgLgHgQQgGgOAAgQIAAhAICpAAIAAAlIhnAAIAAAVQAAANAJAIQAKAJAOAAIBWAAIAAA6gAjWBIIAAiSIC8AAIADADIAAABQAIAJAEALQAHAQgBAVQAAATgHAQQgHAQgNALQgMAMgRAFQgSAGgUAAgAiUAOIAxAAQAPAAAHgIQAHgGgBgQQAAgOgGgHQgHgGgPAAIgxAAgAptBIQgZAAgUgHQgSgGgNgMQgMgLgGgQQgHgOAAgQIAAhAIBDAAIAAA6QAAANAJAIQAJAJAQAAIBPAAIAAA6g");
	this.shape.setTransform(0,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AKUBDIAAgBQABgOADgMIgBAAIgMAaIAAABIg+AAIBHiDIA/AAIAACDgAH9BDIAAiDIA/AAIAACBIAAABIAAABgAF+BDIAFgBQAHgCAEgFQAHgIAAgVQAAgKgBgGQgCgIgGgGQgIgGgNAAIgxAAIAABJIhDAAIAAiDIB0AAQAVAAASAHQASAHANANQANANAHASQAGAQAAAUQAAASgEAQIgBACIAAABgAAcBDIAAgyQAAgRAGgNQAGgPALgLQANgMASgGQAUgHAZAAIBWAAIAAA6IhWAAQgPAAgJAIQgJAKAAAPIAAATIBnAAIAAAVgAjWBDIAAiDIDAAAIAAA6Ih+AAIAAAuIAxAAQAVAAARAGQASAGANALIADADIABABgAlGBDIgBgXQgCgRgFgKQgHgNgLgFQgNgIgUAAQgTAAgNAIQgLAFgGANQgGAKgCARIgBAXIhDAAIAAgBQABgTAFgdQADgNAFgKQAFgMAHgJQAHgKAKgHQAJgIAMgFQANgFAPgDQAPgCASAAQATAAAPACQAPADANAFQAMAFAJAIQAKAHAHAKQAHAJAFAMQAFAKACANQAFAdABATIAAABgArSBDIAAgyQAAgRAGgNQAGgPAMgLQAMgMATgGQAUgHAaAAIBPAAIAAA6IhPAAQgQAAgJAIQgJAKAAAPIAAAog");
	this.shape_1.setTransform(0,-7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ66, new cjs.Rectangle(-72.3,-14.2,144.6,28.4), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,1,1).p("AB+jKQAWAOAUAUQAlAlASAuADYBmQgSAkgeAeQgUAUgWAPAjehVQARguAlglQAYgXAbgQAh1DQQgbgQgYgYQgegegRgk");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(-24.7,-23.2,49.6,46.5), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003399").s().p("A89RiIAAtsIPsAAIAANsgAn1j1IAAtsMAkzAAAIAANsg");
	this.shape.setTransform(135.2,-68.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.katay_2_06();
	this.instance.parent = this;
	this.instance.setTransform(-25.2,-68.3,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(-56,-68.3,112,136.7), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.katay_2_03();
	this.instance.parent = this;
	this.instance.setTransform(-44,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(-44,-71,88,142), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],0,-31.3,0,31.4).s().p("Eg3LAGoIAAtPMBuXAAAIAANPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-353.2,-42.4,706.4,84.8), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6FAFD").s().p("AgmAmQgQgQAAgWQAAgWAQgQQARgQAVAAQAXAAAQAQQAQAQAAAWQAAAWgQAQQgQARgXAAQgVAAgRgRg");
	this.shape.setTransform(-9.8,-1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDF3F9").s().p("AgmAnQgRgQAAgXQAAgVARgRQAQgQAWAAQAXAAAQAQQAQARABAVQgBAXgQAQQgQARgXgBQgWABgQgRg");
	this.shape_1.setTransform(9.8,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-15.3,-6.8,30.7,13.7), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.katay_dd32();
	this.instance.parent = this;
	this.instance.setTransform(-98,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-98,-86,196,172), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(12.1,1,1).p("ApYDRQCShxD2g0QBHgQDBgcQCngYBggZQBcgaA/ggQBPgqAwg7");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-66.1,-26.9,132.3,53.9), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ng_02();
	this.instance.parent = this;
	this.instance.setTransform(77.8,-165.2,1.197,1.197,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-77.8,-165.2,155.6,330.4), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-330.4,-157.4,1.032,1.032);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-330.4,-157.4,660.8,314.9), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.katay_w3e3();
	this.instance.parent = this;
	this.instance.setTransform(-44,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-44,-44.5,88,89), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#341303").s().p("Ah/AhQAEgFAIgFQAJgFAAgPQAAgPAMAEQAMAEAIAEQAJAGgBAKQAAAJgNAGQgPAGgSABQgTAAAEgFgAA5AKQgPgCgCgJQgDgIAMgKQALgKASgFQASgFAPADQAPADACAIQADAKgMAJQgLAJgTAFQgLADgKAAIgLgBg");
	this.shape.setTransform(1.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-11.4,-3.8,25.8,7.6), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ng_1();
	this.instance.parent = this;
	this.instance.setTransform(-334,-130.1,1.044,0.854);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-334,-130.1,668,260.4), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.katay_33();
	this.instance.parent = this;
	this.instance.setTransform(-31,-70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-31,-70.5,62,141), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.katay_03();
	this.instance.parent = this;
	this.instance.setTransform(-53,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-53,-58,106,116), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.katay_06();
	this.instance.parent = this;
	this.instance.setTransform(-147,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-147,-49,294,98), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.katay_09();
	this.instance.parent = this;
	this.instance.setTransform(-130.5,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-130.5,-69,261,138), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.katay_12();
	this.instance.parent = this;
	this.instance.setTransform(-23,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-23,-42.5,46,85), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.katay_15();
	this.instance.parent = this;
	this.instance.setTransform(-60,-68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-60,-68.5,120,137), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.katay_20();
	this.instance.parent = this;
	this.instance.setTransform(-88,-108.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-88,-108.5,176,217), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.katay_25();
	this.instance.parent = this;
	this.instance.setTransform(-40,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-40,-41,80,82), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.katay_28();
	this.instance.parent = this;
	this.instance.setTransform(-65,-62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-65,-62.5,130,125), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.katay_32();
	this.instance.parent = this;
	this.instance.setTransform(-65.5,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-65.5,-37,131,74), null);


(lib.Символ12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.elk_2uu1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-329,-987,0.736,0.736);

	this.instance_2 = new lib.elk_2uu1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-328.9,-328.9,0.736,0.736);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12_1, new cjs.Rectangle(-329,-987,658,1316), null);


(lib.Символ89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ90();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.57,scaleY:0.57},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},6,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ91();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.14,scaleY:1.14},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.1,-23.3,50,47.6);


(lib.Символ84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ83();
	this.instance.parent = this;
	this.instance.setTransform(-20,8,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.23,y:3.4},7,cjs.Ease.get(1)).to({scaleY:0.38,y:8},4,cjs.Ease.get(1)).to({scaleY:0.23,y:3.4},4,cjs.Ease.get(1)).to({scaleY:0.38,y:8},5,cjs.Ease.get(1)).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-4,24,24);


(lib.Символ80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AiUBPIAAgRIhTAAIAAARIgcAAIAAgwIAFAAQAIAAADgDQADgEABgKIAKhaIBhAAIAABrIAOAAIAAAwgAjLAPQgCAOgFADIAqAAIAAhNIgdAAgAheA/IAAiLIAlAAIAABEIBIhFIALAAIAACLIgjAAIAAhHIhKBIgAKiA+IAAiKIAkAAIAAAqIAaAAQAIAAAOADQAJAFAGAGQAGAHAEAJQADAIAAAKQAAAJgDAIQgEAJgGAHQgGAHgJAEQgOAFgIgBgALGAfIAaAAQAHgBAEgFQAEgFAAgGQAAgHgEgFQgEgEgHgBIgaAAgAHTA+IAAiKIAlAAIAABqIAiAAIAAhqIAkAAIAABqIAiAAIAAhqIAlAAIAACKgAGRA+IAAiKIAkAAIAACKgAEPA+IAAiKIAjAAIAAAqIAaAAQAJAAANADQAJAFAHAGQAGAHADAJQADAIAAAKQAAAJgDAIQgDAJgGAHQgHAHgJAEQgNAFgJgBgAEyAfIAaAAQAHgBAFgFQADgFAAgGQAAgHgEgFQgEgEgHgBIgaAAgADMA+IAAg/IgeAeIgEAAIgegeIAAA/IgkAAIAAiLIANAAIA3A9IA4g9IANAAIAACLgAlsA+IAAiKIBYAAIAAAfIgzAAIAAAVIAvAAIAAAeIgvAAIAAAXIA0AAIAAAhgAolA+IgIgRIg0AAIgIARIgnAAIAAgEIBBiIIAQAAIBACIIAAAEgApWAOIAdAAIgOghgArBA+IAAg4IgrAAIAAA4IglAAIAAiKIAlAAIAAAyIArAAIAAgyIAlAAIAACKgAnyA9IAAiKIA+AAQAJAAAJADQAIADAGAFQAFAHAEAHQADAIAAAKQAAAHgDAGQgEAHgFAEQAFACADAEQADACACAEQAFAHAAAKQAAAJgDAIQgDAIgGAFQgFAGgJADQgIADgLAAgAnNAeIAcAAQAFAAADgEQACgDABgEQAAgFgDgDQgDgFgFAAIgcAAgAnNgWIAWAAQAFAAADgDQADgDAAgFQAAgFgDgDQgDgFgFAAIgWAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ82();
	this.instance.parent = this;
	this.instance.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ80, new cjs.Rectangle(-78.5,-7.9,157.1,16.8), null);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ75();
	this.instance.parent = this;
	this.instance.setTransform(209.6,-6.3);

	this.instance_1 = new lib.Символ74();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-209.2,-6.3);

	this.instance_2 = new lib.Символ71();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-2.4);
	this.instance_2.alpha = 0.461;

	this.instance_3 = new lib.Символ73();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,2.4);
	this.instance_3.alpha = 0.309;
	this.instance_3.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance_3.cache(-330,-34,659,69);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ76, new cjs.Rectangle(-330.6,-34.6,664,74.8), null);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 75
	this.instance = new lib.Символ76();
	this.instance.parent = this;
	this.instance.setTransform(0,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-6.4},19,cjs.Ease.get(1)).to({y:2.4},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-330.6,-32.2,664,75.8);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ68();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ69();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.8);
	this.instance_1.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_1.cache(-112,-16,225,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ65, new cjs.Rectangle(-112.5,-14.5,228,36), null);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ66();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ67();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,2.2);
	this.instance_1.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_1.cache(-74,-16,149,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ64, new cjs.Rectangle(-74.3,-14.2,152,36.2), null);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 65
	this.instance = new lib.Символ65();
	this.instance.parent = this;
	this.instance.setTransform(-30.6,15.3,1,1,0,0,0,-110.5,15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({regX:-110.4,regY:15.2,scaleX:1.25,scaleY:1.25,x:-30.5,y:15.2},8,cjs.Ease.get(1)).to({scaleX:1.04,scaleY:1.04,x:-30.6,y:15.4},5,cjs.Ease.get(1)).to({regX:-110.5,regY:15.3,scaleX:1,scaleY:1,y:15.3},3).wait(1));

	// Символ 64
	this.instance_1 = new lib.Символ64();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-45.9,15.3,1,1,0,0,0,72.2,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.31,scaleY:1.31,x:-45.8},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:-45.9},8,cjs.Ease.get(1)).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192.4,-14.5,387.8,36);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(-24.7,-23.2,49.6,46.5), null);


(lib.Символ56 = function(mode,startPosition,loop) {
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

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A5VhQIcu35IV9aZI8uX6g");
	var mask_graphics_1 = new cjs.Graphics().p("A5VhQIcu35IV9aZI8uX6g");
	var mask_graphics_2 = new cjs.Graphics().p("A5VhQIcu35IV9aZI8uX6g");
	var mask_graphics_3 = new cjs.Graphics().p("A5VhQIcu35IV9aZI8uX6g");
	var mask_graphics_4 = new cjs.Graphics().p("A5VhQIcu35IV9aZI8uX6g");
	var mask_graphics_5 = new cjs.Graphics().p("A5VhQIcu35IV9aZI8uX6g");
	var mask_graphics_6 = new cjs.Graphics().p("A5VhQIcu35IV9aZI8uX6g");
	var mask_graphics_7 = new cjs.Graphics().p("A5VhQIcu35IV9aZI8uX6g");
	var mask_graphics_8 = new cjs.Graphics().p("A5VhQIcu35IV9aZI8uX6g");
	var mask_graphics_9 = new cjs.Graphics().p("A5VhQIcu35IV9aZI8uX6g");
	var mask_graphics_10 = new cjs.Graphics().p("A5VhQIcu35IV9aZI8uX6g");
	var mask_graphics_11 = new cjs.Graphics().p("A5VhQIcu35IV9aZI8uX6g");
	var mask_graphics_12 = new cjs.Graphics().p("A5VhQIcu35IV9aZI8uX6g");
	var mask_graphics_13 = new cjs.Graphics().p("A5VhQIcu35IV9aZI8uX6g");
	var mask_graphics_14 = new cjs.Graphics().p("A5VhQIcu35IV9aZI8uX6g");
	var mask_graphics_15 = new cjs.Graphics().p("A5VhQIcu35IV9aZI8uX6g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-70.8,y:-94.8}).wait(1).to({graphics:mask_graphics_1,x:-70.8,y:-94.8}).wait(1).to({graphics:mask_graphics_2,x:-70.8,y:-94.8}).wait(1).to({graphics:mask_graphics_3,x:-70.8,y:-94.8}).wait(1).to({graphics:mask_graphics_4,x:-70.8,y:-94.8}).wait(1).to({graphics:mask_graphics_5,x:-70.8,y:-94.8}).wait(1).to({graphics:mask_graphics_6,x:-70.8,y:-94.8}).wait(1).to({graphics:mask_graphics_7,x:-70.8,y:-94.8}).wait(1).to({graphics:mask_graphics_8,x:-70.8,y:-94.8}).wait(1).to({graphics:mask_graphics_9,x:-70.8,y:-94.8}).wait(1).to({graphics:mask_graphics_10,x:-70.8,y:-94.8}).wait(1).to({graphics:mask_graphics_11,x:-70.8,y:-94.8}).wait(1).to({graphics:mask_graphics_12,x:-70.8,y:-94.8}).wait(1).to({graphics:mask_graphics_13,x:-70.8,y:-94.8}).wait(1).to({graphics:mask_graphics_14,x:-70.8,y:-94.8}).wait(1).to({graphics:mask_graphics_15,x:-70.8,y:-94.8}).wait(1));

	// Слой 1
	this.instance = new lib.Символ78();
	this.instance.parent = this;
	this.instance.setTransform(-11.3,-25,0.695,0.695,-45);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-90.5,y:-116.1},7,cjs.Ease.get(1)).wait(1).to({x:-11.3,y:-25},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.7,-115.4,180.8,180.8);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-9.9,y:-12},9,cjs.Ease.get(1)).to({x:0,y:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-68.3,112,136.7);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ53();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-3.5},7,cjs.Ease.get(0.98)).to({x:0},7,cjs.Ease.get(0.98)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-71,88,142);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(0,110.3);

	this.instance_1 = new lib.Символ32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-17.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-353.2,-157.4,706.4,314.9), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AjYA7IATjaIGeAkIgTDag");
	var mask_graphics_1 = new cjs.Graphics().p("AjYBbIATjaIGeAlIgTDag");
	var mask_graphics_2 = new cjs.Graphics().p("AjYBbIATjaIGeAlIgTDag");
	var mask_graphics_3 = new cjs.Graphics().p("AjYBbIATjaIGeAlIgTDag");
	var mask_graphics_4 = new cjs.Graphics().p("AjYBbIATjaIGeAlIgTDag");
	var mask_graphics_5 = new cjs.Graphics().p("AjYBEIATjaIGeAlIgTDag");
	var mask_graphics_6 = new cjs.Graphics().p("AjYA7IATjaIGeAkIgTDag");
	var mask_graphics_7 = new cjs.Graphics().p("AjYBbIATjaIGeAlIgTDag");
	var mask_graphics_8 = new cjs.Graphics().p("AjYBbIATjaIGeAlIgTDag");
	var mask_graphics_9 = new cjs.Graphics().p("AjYBbIATjaIGeAlIgTDag");
	var mask_graphics_10 = new cjs.Graphics().p("AjYBbIATjaIGeAlIgTDag");
	var mask_graphics_11 = new cjs.Graphics().p("AjYBEIATjaIGeAlIgTDag");
	var mask_graphics_12 = new cjs.Graphics().p("AjYA7IATjaIGeAkIgTDag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.9,y:-16}).wait(1).to({graphics:mask_graphics_1,x:-0.1,y:-9.6}).wait(1).to({graphics:mask_graphics_2,x:-0.8,y:-3.7}).wait(1).to({graphics:mask_graphics_3,x:-1,y:-1.8}).wait(1).to({graphics:mask_graphics_4,x:0.1,y:-11.5}).wait(1).to({graphics:mask_graphics_5,x:0.7,y:-15.1}).wait(1).to({graphics:mask_graphics_6,x:0.9,y:-16}).wait(1).to({graphics:mask_graphics_7,x:-0.1,y:-9.6}).wait(1).to({graphics:mask_graphics_8,x:-0.8,y:-3.7}).wait(1).to({graphics:mask_graphics_9,x:-1,y:-1.8}).wait(1).to({graphics:mask_graphics_10,x:0.1,y:-11.5}).wait(1).to({graphics:mask_graphics_11,x:0.7,y:-15.1}).wait(1).to({graphics:mask_graphics_12,x:0.9,y:-16}).wait(28));

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.3,-6.8,30.7,0.3);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-98,-86,196,172), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-66.1,-26.9,132.3,53.9), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(17.8,157.5,1,1,0,0,0,0,157.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:157.3,scaleX:1.02,scaleY:1.02,x:18,y:157.4},59,cjs.Ease.get(1)).to({regX:0,regY:157.5,scaleX:1,scaleY:1,x:17.8,y:157.5},60,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-335.4,-157.4,706.4,314.9);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-6.8,y:9},4,cjs.Ease.get(1)).to({x:0,y:0},4,cjs.Ease.get(1)).to({x:-6.8,y:9},4,cjs.Ease.get(1)).to({x:0,y:0},4,cjs.Ease.get(1)).wait(74));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-44.5,88,89);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-12.4,-4.8,31,12), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:658.2},254).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-329,-987,658,1316);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ77();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.snegovik = new lib.Символ56();
	this.snegovik.parent = this;
	this.snegovik.setTransform(6,21);

	this.timeline.addTween(cjs.Tween.get(this.snegovik).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-227,-234.7,324.5,321.9), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-147,-49,294,98), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-130.5,-69,261,138), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-23,-42.5,46,85), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-60,-68.5,120,137), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-88,-108.5,176,217), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-40,-41,80,82), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-65.5,-37,131,74), null);


(lib.Символ92 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ89();
	this.instance.parent = this;
	this.instance.setTransform(0.2,-0.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ84();
	this.instance.parent = this;
	this.instance.setTransform(93.8,-100.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ80();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-23.2,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.light();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-272,-142);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ81, new cjs.Rectangle(-272,-142,513,102), null);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ70();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.9,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ63, new cjs.Rectangle(-365.5,-53,736.8,96), null);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ59();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.499,0.499);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.26,scaleY:0.26},9,cjs.Ease.get(1)).to({scaleX:0.5,scaleY:0.5},9,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ59();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.21,scaleY:1.21},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.7,-23.2,49.6,46.5);


(lib.Символ52 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-68.3,112,136.7);


(lib.Символ50 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4,cjs.Ease.get(1)).wait(1).to({alpha:0},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-71,88,142);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(-10.9,-16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ42();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-98,-86,196,172), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(-7.2,86,1,1,0,0,0,-7.2,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-7.2,x:-7.1},19,cjs.Ease.get(1)).to({rotation:5.8,x:-7.2,y:86.1},40,cjs.Ease.get(1)).to({rotation:0,y:86},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98,-86,196,172);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-68,-29,136,58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-71.1,-31.9,146,66), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(4,-3.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-67.1,-35.6,146,67), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AjVgZIGUhWIAXBsImUBVg");
	var mask_graphics_1 = new cjs.Graphics().p("AjVgKIGUhWIAXBrImUBWg");
	var mask_graphics_2 = new cjs.Graphics().p("AjVgKIGUhWIAXBrImUBWg");
	var mask_graphics_3 = new cjs.Graphics().p("AjVgKIGUhWIAXBrImUBWg");
	var mask_graphics_4 = new cjs.Graphics().p("AjVgKIGUhWIAXBrImUBWg");
	var mask_graphics_5 = new cjs.Graphics().p("AjVgKIGUhWIAXBrImUBWg");
	var mask_graphics_6 = new cjs.Graphics().p("AjVgKIGUhWIAXBrImUBWg");
	var mask_graphics_7 = new cjs.Graphics().p("AjVgKIGUhWIAXBrImUBWg");
	var mask_graphics_8 = new cjs.Graphics().p("AjVgKIGUhWIAXBrImUBWg");
	var mask_graphics_9 = new cjs.Graphics().p("AjVgKIGUhWIAXBrImUBWg");
	var mask_graphics_10 = new cjs.Graphics().p("AjVgKIGUhWIAXBrImUBWg");
	var mask_graphics_11 = new cjs.Graphics().p("AjVgKIGUhWIAXBrImUBWg");
	var mask_graphics_12 = new cjs.Graphics().p("AjVgZIGUhWIAXBsImUBVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-1.5,y:-11.2}).wait(1).to({graphics:mask_graphics_1,x:-0.7,y:-8.5}).wait(1).to({graphics:mask_graphics_2,x:0,y:-4.2}).wait(1).to({graphics:mask_graphics_3,x:0.8,y:0}).wait(1).to({graphics:mask_graphics_4,x:0,y:-3.2}).wait(1).to({graphics:mask_graphics_5,x:-0.7,y:-6.4}).wait(1).to({graphics:mask_graphics_6,x:-1.5,y:-9.6}).wait(1).to({graphics:mask_graphics_7,x:-0.7,y:-6.4}).wait(1).to({graphics:mask_graphics_8,x:0,y:-3.2}).wait(1).to({graphics:mask_graphics_9,x:0.8,y:0}).wait(1).to({graphics:mask_graphics_10,x:0,y:-4.2}).wait(1).to({graphics:mask_graphics_11,x:-0.7,y:-8.5}).wait(1).to({graphics:mask_graphics_12,x:-1.5,y:-11.2}).wait(43));

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-4.8,31,1.8);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(-18.1,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-53,-58,106,116), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.ruka1 = new lib.Символ50();
	this.ruka1.parent = this;
	this.ruka1.setTransform(31,36);

	this.timeline.addTween(cjs.Tween.get(this.ruka1).wait(1));

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.ruka2 = new lib.Символ52();
	this.ruka2.parent = this;
	this.ruka2.setTransform(-23.7,46.5);

	this.timeline.addTween(cjs.Tween.get(this.ruka2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-79.7,-62.5,154.7,177.3), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_73 = function() {
		this.gotoAndPlay(51);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(24).call(this.frame_73).wait(1));

	// katay_03.png
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(-54,-79.9,1,1,0,0,0,51.5,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:51.4,rotation:-3.5,x:-37.8,y:-67.8},11,cjs.Ease.get(-1)).to({regX:51.6,rotation:-8,x:-18.4,y:-53.4},13,cjs.Ease.get(1)).to({regX:51.5,rotation:-4,x:-35.6,y:-66.1},12,cjs.Ease.get(-1)).to({rotation:0,x:-54,y:-79.9},13,cjs.Ease.get(1)).wait(1).to({regX:51.4,rotation:-3.5,x:-37.8,y:-67.8},5,cjs.Ease.get(-1)).to({regX:51.6,rotation:-8,x:-18.4,y:-53.4},6,cjs.Ease.get(1)).to({regX:51.5,rotation:-4,x:-35.6,y:-66.1},6,cjs.Ease.get(-1)).to({rotation:0,x:-54,y:-79.9},6,cjs.Ease.get(1)).wait(1));

	// katay_32.png
	this.instance_1 = new lib.Символ5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-131.5,24.6,1,1,0,0,0,49,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:4,x:-113.8,y:36.8},11,cjs.Ease.get(-1)).to({rotation:9,x:-93,y:51.1},13,cjs.Ease.get(1)).to({regY:0.1,rotation:4.5,x:-111.4,y:38.6},12,cjs.Ease.get(-1)).to({regY:0,rotation:0,x:-131.5,y:24.6},13,cjs.Ease.get(1)).wait(1).to({rotation:4,x:-113.8,y:36.8},5,cjs.Ease.get(-1)).to({rotation:9,x:-93,y:51.1},6,cjs.Ease.get(1)).to({regY:0.1,rotation:4.5,x:-111.4,y:38.6},6,cjs.Ease.get(-1)).to({regY:0,rotation:0,x:-131.5,y:24.6},6,cjs.Ease.get(1)).wait(1));

	// katay_28.png
	this.sisi = new lib.Символ7();
	this.sisi.parent = this;
	this.sisi.setTransform(-2.7,11.1,1,1,-8.7);

	this.timeline.addTween(cjs.Tween.get(this.sisi).to({regY:0.1,scaleY:1.03,rotation:0,skewX:5.7,skewY:-8.6,x:5.5,y:24.1},11,cjs.Ease.get(-1)).to({regY:0,scaleY:1,rotation:-8.7,skewX:0,skewY:0,x:35.8,y:38.6},13,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.03,rotation:0,skewX:-9.5,x:19.8,y:33.6},12,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-8.7,skewX:0,x:-2.7,y:11.1},13,cjs.Ease.get(1)).wait(1).to({regY:0.2,scaleY:1.02,rotation:0,skewX:3.9,skewY:-8.6,x:1.2,y:25.8},5,cjs.Ease.get(-1)).to({regY:0,scaleY:1,rotation:-8.7,skewX:0,skewY:0,x:35.8,y:38.6},6,cjs.Ease.get(1)).to({regX:0.1,regY:0.2,scaleX:1.01,scaleY:1.03,rotation:0,skewX:-16.8,skewY:-1.1,x:25.8,y:32.3},6,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-8.7,skewX:0,skewY:0,x:-2.7,y:11.1},6,cjs.Ease.get(1)).wait(1));

	// katay_25.png
	this.instance_2 = new lib.Символ9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-250,64.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:8.8,x:-235.4,y:66},11,cjs.Ease.get(-1)).to({rotation:19.2,x:-218,y:67.6},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:9.8,x:-233.4,y:66.1},12,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:-250,y:64.6},13,cjs.Ease.get(1)).wait(1).to({rotation:8.8,x:-235.4,y:66},5,cjs.Ease.get(-1)).to({rotation:19.2,x:-218,y:67.6},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:9.8,x:-233.4,y:66.1},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:-250,y:64.6},6,cjs.Ease.get(1)).wait(1));

	// katay_20.png
	this.instance_3 = new lib.Символ11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(62,141.1,1,1,0,0,0,-41.1,102);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-41,rotation:5,x:62.1},11,cjs.Ease.get(-1)).to({regX:-41.1,rotation:10.9,x:62},13,cjs.Ease.get(1)).to({rotation:5.5},12,cjs.Ease.get(-1)).to({rotation:0},13,cjs.Ease.get(1)).wait(1).to({regX:-41,rotation:5,x:62.1},5,cjs.Ease.get(-1)).to({regX:-41.1,rotation:10.9,x:62},6,cjs.Ease.get(1)).to({rotation:5.5},6,cjs.Ease.get(-1)).to({rotation:0},6,cjs.Ease.get(1)).wait(1));

	// katay_09.png
	this.instance_4 = new lib.Символ17();
	this.instance_4.parent = this;
	this.instance_4.setTransform(58.8,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:75.3,y:-32.1},11,cjs.Ease.get(-1)).to({x:94.8,y:-17.5},13,cjs.Ease.get(1)).to({x:77.5,y:-30.4},12,cjs.Ease.get(-1)).to({x:58.8,y:-44.5},13,cjs.Ease.get(1)).wait(1).to({x:75.3,y:-32.1},5,cjs.Ease.get(-1)).to({x:94.8,y:-17.5},6,cjs.Ease.get(1)).to({x:77.5,y:-30.4},6,cjs.Ease.get(-1)).to({x:58.8,y:-44.5},6,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_5 = new lib.Символ22();
	this.instance_5.parent = this;
	this.instance_5.setTransform(53,111.6,1,1,0,0,0,-10,56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:-9.9,rotation:6.8,x:57.3,y:111.2},11,cjs.Ease.get(-1)).to({rotation:15,x:62.1,y:110.7},13,cjs.Ease.get(1)).to({regX:-9.8,rotation:7.8,x:57.9,y:111.1},12,cjs.Ease.get(-1)).to({regX:-10,rotation:0,x:53,y:111.6},13,cjs.Ease.get(1)).wait(1).to({regX:-9.9,rotation:6.8,x:57.3,y:111.2},5,cjs.Ease.get(-1)).to({rotation:15,x:62.1,y:110.7},6,cjs.Ease.get(1)).to({regX:-9.8,rotation:7.8,x:57.9,y:111.1},6,cjs.Ease.get(-1)).to({regX:-10,rotation:0,x:53,y:111.6},6,cjs.Ease.get(1)).wait(1));

	// katay_15.png
	this.instance_6 = new lib.Символ13();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-90,-17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-72.7,y:-6},11,cjs.Ease.get(-1)).to({x:-52.2,y:8.1},13,cjs.Ease.get(1)).to({x:-70.3,y:-4.4},12,cjs.Ease.get(-1)).to({x:-90,y:-17.9},13,cjs.Ease.get(1)).wait(1).to({x:-72.7,y:-6},5,cjs.Ease.get(-1)).to({x:-52.2,y:8.1},6,cjs.Ease.get(1)).to({x:-70.3,y:-4.4},6,cjs.Ease.get(-1)).to({x:-90,y:-17.9},6,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.instance_7 = new lib.Символ35();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-186.6,42.7);
	this.instance_7.alpha = 0.43;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:-0.1,regY:0.1,rotation:3.5,x:-172.2,y:51.3},11,cjs.Ease.get(-1)).to({regX:0,regY:0,rotation:8,x:-155,y:61.1},13,cjs.Ease.get(1)).to({regX:-0.1,regY:0.1,rotation:4,x:-170.3,y:52.4},12,cjs.Ease.get(-1)).to({regX:0,regY:0,rotation:0,x:-186.6,y:42.7},13,cjs.Ease.get(1)).wait(1).to({regX:-0.1,regY:0.1,rotation:3.5,x:-172.2,y:51.3},5,cjs.Ease.get(-1)).to({regX:0,regY:0,rotation:8,x:-155,y:61.1},6,cjs.Ease.get(1)).to({regX:-0.1,regY:0.1,rotation:4,x:-170.3,y:52.4},6,cjs.Ease.get(-1)).to({regX:0,regY:0,rotation:0,x:-186.6,y:42.7},6,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.shar = new lib.Символ23();
	this.shar.parent = this;
	this.shar.setTransform(-168.6,82.5);

	this.timeline.addTween(cjs.Tween.get(this.shar).to({scaleX:1,scaleY:1,rotation:12.3,x:-158.6},11,cjs.Ease.get(-1)).to({regX:-0.1,regY:0.1,scaleX:1,scaleY:1,rotation:26.8,x:-146.8},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:13.8,x:-157.3,y:82.6},12,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-168.6,y:82.5},13,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,rotation:12.3,x:-158.6},5,cjs.Ease.get(-1)).to({regX:-0.1,regY:0.1,scaleX:1,scaleY:1,rotation:26.8,x:-146.8},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:13.8,x:-157.3,y:82.6},6,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-168.6,y:82.5},6,cjs.Ease.get(1)).wait(1));

	// katay_12.png
	this.instance_8 = new lib.Символ15();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-125,13.2,1,1,0,0,0,0,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:-0.1,rotation:4.1,x:-104.7,y:22.4},11,cjs.Ease.get(-1)).to({regX:0,rotation:9.2,x:-80.5,y:33.2},13,cjs.Ease.get(1)).to({regX:-0.1,rotation:4.8,x:-101.9,y:23.7},12,cjs.Ease.get(-1)).to({regX:0,rotation:0,x:-125,y:13.2},13,cjs.Ease.get(1)).wait(1).to({regX:-0.1,rotation:4.1,x:-104.7,y:22.4},5,cjs.Ease.get(-1)).to({regX:0,rotation:9.2,x:-80.5,y:33.2},6,cjs.Ease.get(1)).to({regX:-0.1,rotation:4.8,x:-101.9,y:23.7},6,cjs.Ease.get(-1)).to({regX:0,rotation:0,x:-125,y:13.2},6,cjs.Ease.get(1)).wait(1));

	// katay_06.png
	this.instance_9 = new lib.Символ19();
	this.instance_9.parent = this;
	this.instance_9.setTransform(66.8,138.5,1,1,0,0,0,-133.3,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:-5.2},24,cjs.Ease.get(1)).to({rotation:0},25,cjs.Ease.get(1)).wait(1).to({rotation:-5.2},11,cjs.Ease.get(1)).to({rotation:0},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-395.6,-153.9,742.7,323.6);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.parent = this;
	this.instance.setTransform(-162.4,-176.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-690.4,y:-108},38,cjs.Ease.get(1)).to({x:-504,y:52.8},22,cjs.Ease.get(1)).to({x:-347.2,y:-174.4},31,cjs.Ease.get(1)).to({x:-413.6,y:0},20,cjs.Ease.get(1)).to({regX:-0.1,scaleX:0.57,scaleY:0.57},6,cjs.Ease.get(1)).to({regX:0,scaleX:1,scaleY:1},5,cjs.Ease.get(1)).to({regX:-0.1,scaleX:0.57,scaleY:0.57},6,cjs.Ease.get(1)).to({regX:0,scaleX:1,scaleY:1},6,cjs.Ease.get(1)).to({x:-162.4,y:-176.8},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.1,-200,49.6,46.5);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ61();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ57, new cjs.Rectangle(-187.1,-200,49.6,46.5), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:-178.4},15,cjs.Ease.get(1)).wait(52).to({y:0},15,cjs.Ease.get(1)).wait(25).to({rotation:51,x:-212.8,y:-105.6},0).to({x:-61.6,y:-185.6},11,cjs.Ease.get(1)).wait(33).to({x:-212.8,y:-105.6},12,cjs.Ease.get(1)).wait(39).to({regY:0.1,rotation:153.3,x:-169,y:-487.2},0).to({x:-77.8,y:-346.4},12,cjs.Ease.get(1)).wait(32).to({x:-170.6,y:-507.2},12,cjs.Ease.get(1)).wait(38).to({rotation:305.8,x:619,y:-150.5},0).to({x:477.4,y:-253.7},14,cjs.Ease.get(1)).wait(40).to({x:619,y:-150.5},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98,-86,196,172);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.baba1 = new lib.Символ1();
	this.baba1.parent = this;
	this.baba1.setTransform(0,60,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.baba1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-251.7,-37.9,472.5,205.8), null);


(lib.Символ3 = function(mode,startPosition,loop) {
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

	// Слой 7
	this.instance = new lib.Символ81();
	this.instance.parent = this;
	this.instance.setTransform(22.9,28.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-126.2,alpha:0},7,cjs.Ease.get(1)).wait(1).to({y:28.2,alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Слой 11
	this.instance_1 = new lib.Символ72();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.4,-239.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-104.5,alpha:1},7,cjs.Ease.get(1)).wait(1).to({y:-239.7,alpha:0},7,cjs.Ease.get(0.99)).wait(1));

	// Слой 9
	this.instance_2 = new lib.Символ63();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-108.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-191.3,alpha:0},7,cjs.Ease.get(1)).wait(1).to({y:-108.1,alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Слой 10
	this.instance_3 = new lib.Символ57();
	this.instance_3.parent = this;
	this.instance_3.setTransform(424.6,63.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0},7).wait(1).to({alpha:1},7).wait(1));

	// Слой 2
	this.instance_4 = new lib.Символ25();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-2.5,58.1,0.981,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-0.1,regY:0.1,scaleX:1.14,scaleY:1.16,x:-3.1,y:22.1},7,cjs.Ease.get(1)).wait(1).to({regX:0,regY:0,scaleX:0.98,scaleY:1,x:-2.5,y:58.1},7,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.baba = new lib.Символ2();
	this.baba.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.baba).to({scaleX:1.16,scaleY:1.16,x:-0.1,y:-45.2},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},7,cjs.Ease.get(1)).wait(1));

	// Слой 7
	this.instance_5 = new lib.Символ34();
	this.instance_5.parent = this;
	this.instance_5.setTransform(243.8,37.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.19,scaleY:1.19,x:276.3,y:5.6},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:243.8,y:37.2},7).wait(1));

	// Слой 5
	this.instance_6 = new lib.Символ31();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-232,114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-276,y:90.9},7,cjs.Ease.get(1)).wait(1).to({x:-232,y:114.5},7,cjs.Ease.get(1)).wait(1));

	// Слой 8
	this.instance_7 = new lib.Символ40();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-212,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:0},7).wait(1).to({alpha:1},7).wait(1));

	// Слой 3
	this.instance_8 = new lib.Символ25();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1,7,1.184,1.184,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1.37,scaleY:1.37,y:-37.1},7,cjs.Ease.get(1)).wait(1).to({scaleX:1.18,scaleY:1.18,y:7},7,cjs.Ease.get(1)).wait(1));

	// Слой 6
	this.instance_9 = new lib.Символ33();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-0.6,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1.12,scaleY:1.12,y:-51.5},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,y:-19.5},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-394.6,-272,791.2,608);


// stage content:
(lib.katay640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		stage.canvas.style.cursor = "none";
		this.prizel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.prizel.x = stage.mouseX/window.devicePixelRatio;
			this.prizel.y = stage.mouseY/window.devicePixelRatio;
		}
		
		 this.cursor = "none";
		
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
			_this.main.baba.baba1.gotoAndPlay(51);
			_this.prizel.gotoAndStop(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(9);
			_this.main.baba.baba1.gotoAndPlay(0);
			_this.prizel.gotoAndStop(0);
		}
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.sisibtn.addEventListener("mouseover", fl_MouseOverHandler_11);
		
		function fl_MouseOverHandler_11()
		{
			_this.main.baba.baba1.sisi.ruka1.gotoAndPlay(1);
			_this.main.baba.baba1.sisi.ruka2.gotoAndPlay(1);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.sisibtn.addEventListener("mouseout", fl_MouseOutHandler_33);
		
		function fl_MouseOutHandler_33()
		{
			_this.main.baba.baba1.sisi.ruka1.gotoAndPlay(6);
			_this.main.baba.baba1.sisi.ruka2.gotoAndPlay(6);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.snegbtn.addEventListener("mouseover", fl_MouseOverHandler_82);
		
		function fl_MouseOverHandler_82()
		{
		    _this.main.baba.baba1.shar.snegovik.gotoAndPlay(0);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.snegbtn.addEventListener("mouseout", fl_MouseOutHandler_26);
		
		function fl_MouseOutHandler_26()
		{
		    _this.main.baba.baba1.shar.snegovik.gotoAndPlay(9);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.prizel = new lib.Символ92();
	this.prizel.parent = this;
	this.prizel.setTransform(726.3,39.8);

	this.timeline.addTween(cjs.Tween.get(this.prizel).wait(1));

	// Слой 4
	this.snegbtn = new lib.Символ79();
	this.snegbtn.parent = this;
	this.snegbtn.setTransform(103.9,51.1);
	new cjs.ButtonHelper(this.snegbtn, 0, 1, 2, false, new lib.Символ79(), 3);

	this.sisibtn = new lib.Символ55();
	this.sisibtn.parent = this;
	this.sisibtn.setTransform(322.6,187.7);
	new cjs.ButtonHelper(this.sisibtn, 0, 1, 2, false, new lib.Символ55(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sisibtn},{t:this.snegbtn}]}).wait(1));

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(319.5,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.main = new lib.Символ3();
	this.main.parent = this;
	this.main.setTransform(320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(245.4,-839,791.2,1480.1);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1482854884130", id:"bg"},
		{src:"images/elk_2uu1.png?1482854884130", id:"elk_2uu1"},
		{src:"images/katay_03.png?1482854884130", id:"katay_03"},
		{src:"images/katay_06.png?1482854884130", id:"katay_06"},
		{src:"images/katay_09.png?1482854884130", id:"katay_09"},
		{src:"images/katay_12.png?1482854884130", id:"katay_12"},
		{src:"images/katay_15.png?1482854884130", id:"katay_15"},
		{src:"images/katay_20.png?1482854884130", id:"katay_20"},
		{src:"images/katay_25.png?1482854884130", id:"katay_25"},
		{src:"images/katay_28.png?1482854884130", id:"katay_28"},
		{src:"images/katay_2_03.png?1482854884130", id:"katay_2_03"},
		{src:"images/katay_2_06.png?1482854884130", id:"katay_2_06"},
		{src:"images/katay_32.png?1482854884130", id:"katay_32"},
		{src:"images/katay_33.png?1482854884130", id:"katay_33"},
		{src:"images/katay_dd32.png?1482854884130", id:"katay_dd32"},
		{src:"images/katay_w33.png?1482854884130", id:"katay_w33"},
		{src:"images/katay_w3e3.png?1482854884130", id:"katay_w3e3"},
		{src:"images/light.png?1482854884130", id:"light"},
		{src:"images/mous.png?1482854884130", id:"mous"},
		{src:"images/ng_02.png?1482854884130", id:"ng_02"},
		{src:"images/ng_1.png?1482854884130", id:"ng_1"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;