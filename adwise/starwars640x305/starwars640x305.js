(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,723,359);


(lib.hend = function() {
	this.initialize(img.hend);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,208);


(lib.mouse = function() {
	this.initialize(img.mouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.sila1 = function() {
	this.initialize(img.sila1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,264);


(lib.sila2 = function() {
	this.initialize(img.sila2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,264);


(lib.sila3 = function() {
	this.initialize(img.sila3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,264);


(lib.sila4 = function() {
	this.initialize(img.sila4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,264);


(lib.sila5 = function() {
	this.initialize(img.sila5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,264);


(lib.sila6 = function() {
	this.initialize(img.sila6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,264);


(lib.sloy2 = function() {
	this.initialize(img.sloy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,212);


(lib.sloy3 = function() {
	this.initialize(img.sloy3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,74);


(lib.sloy4 = function() {
	this.initialize(img.sloy4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,104);


(lib.sloy5 = function() {
	this.initialize(img.sloy5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,87);


(lib.sloy6 = function() {
	this.initialize(img.sloy6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,49);


(lib.sloy7 = function() {
	this.initialize(img.sloy7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,92);


(lib.Sloy8 = function() {
	this.initialize(img.Sloy8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,431);


(lib.sloy9 = function() {
	this.initialize(img.sloy9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,357);// helper functions:

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


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mouse();
	this.instance.parent = this;
	this.instance.setTransform(-22,-22,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(-22,-22,44,44), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjEBhIAAgTIhnAAIAAATIgkAAIAAg5IARAAIA8iIIATAAIA9CIIASAAIAAA5gAjgAnIgZg+IgYA+IAxAAgANbBOIAAisIAtAAIAAAzIAgAAQAKAAARAFQALAFAIAJQAIAJAEALQAEAKAAALQAAAMgEALQgEAKgIAIQgIAJgLAGQgRAFgKAAgAOIAmIAfAAQAJAAAGgHQAEgFAAgJQAAgJgFgFQgFgGgJAAIgfAAgAJUBOIAAisIAtAAIAACDIAqAAIAAiDIAtAAIAACDIAqAAIAAiDIAuAAIAACsgAH7BOIAAisIAtAAIAACsgAFQBOIAAisIAsAAIAAAzIAgAAQALAAAQAFQAMAFAIAJQAIAJAEALQAEAKAAALQAAAMgEALQgEAKgIAIQgIAJgMAGQgQAFgLAAgAF8AmIAgAAQAJAAAFgHQAFgFAAgJQAAgJgFgFQgFgGgJAAIggAAgAD3BOIAAhNIglAnIgFAAIglgnIAABNIgtAAIAAitIAQAAIBEBLIBFhLIAQAAIAACtgAgiBOIAAhUIhXBUIgQAAIAAisIAtAAIAABUIBYhVIAPAAIAACtgAnOBOIAAisIBsAAIAAAnIhAAAIAAAYIA7AAIAAAnIg7AAIAAAfIBCAAIAAAngAp4BOIAAisIBKAAQALAAAKADQAKAFAHAHQAIAIAEAIQAEAKAAAMQAAAIgEAIQgEAIgGAGQALAFAFAJQAFAIAAAMQAAALgDAKQgEALgHAGQgHAIgKAFQgKAEgNAAgApNAnIAjAAQAGgBAEgEQADgFAAgGQAAgFgDgEQgEgFgGAAIgjAAgApNgbIAcAAQAGAAAEgEQADgEAAgGQAAgFgEgEQgDgFgHAAIgbAAgAq6BOIgKgWIhFAAIgKAWIgrAAIAAgHIBOinIATAAIBOCnIAAAHgArTASIgUgtIgTAtIAnAAgAuCBOIAAhGIg1AAIAABGIguAAIAAisIAuAAIAAA/IA1AAIAAg/IAtAAIAACsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(-99.7,-9.7,199.6,19.5), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009933").s().p("Ar5ZoMAAAgzPIXyAAMAAAAzPg");
	this.shape.setTransform(76.2,164);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009933").s().p("Ar5ZoMAAAgzPIXyAAMAAAAzPg");
	this.shape.setTransform(76.2,164);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009933").s().p("A8naaQr2q8gBveQABvdL2q8QL3q9QwAAQQxAAL2K9QL4K8AAPdQAAPer4K8Qr2K9wxgBQwwABr3q9g");
	this.shape.setTransform(259.1,239.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(0,0,518.1,478.1), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A8naaQr2q8gBveQABvdL2q8QL3q9QwAAQQxAAL2K9QL4K8AAPdQAAPer4K8Qr2K9wxgBQwwABr3q9g");
	this.shape.setTransform(259.1,239.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(0,0,518.1,478.1), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("Aiph3QALiAAjhjQAziPBIAAQBJAAAyCPQAkBjALCAACuBGQgICegrB3QgyCPhJAAQhIAAgziPQgqh3gIie");
	this.shape.setTransform(17.4,49);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-1,-1,36.7,100), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,1,1).p("AAAgTIAAAm");
	this.shape.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-2.5,-2.5,5,8.9), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Aj4IZQgGgRABgdIABgxQgCgdgUg2QgVgzgGgMIgTgkQgMgVgGgPQgFgOgKgsQgIglgKgUIgLgTQgHgLgDgJQgDgJgCgOIgCgYQgDgVgTgmQgRgngDgVIgCgTQgBgLgFgHQgDgEgHgFIgKgKQgFgGgDgKIgGgTQgJgWgTgRQgRgRgYgIQAPg4AvgkQgFgOAOgNQAJgHAVgLQAUgLAhgiQAggiAWgKQARgIAYgDQAOgBAcAAQBJgBApAGQA+AJAqAbIAdATQAQAMAOAFQAFACAbAFQAUAEALAHQAPAJAPAbQASAhAIAIQAGAHAMAKIAUARQAXAXgIAWQAJgOAhgJQAjgJAKgNQALgPgFghQgOhcgxhNQgQgaANgJQAMgIARAUQATAZAhA4QAgAvAkAOIAdAIQATAFAKAGQALAGAOAPIAXAYIAgAZQATAOAJANQARAWAEAtQADAngEAwQgDAfgIA3IgcDPQgGADgGgFQgFgFgBgHQgBgFABgJIABgNQgBgTgbgYQgcgZgEgQQiQABiaAIQhOAEgmAMQg1ASgqAsQgoAqgVA3IgMAoQgIAZgGAOQgOAhgCAKQgDALgBATIgBAeQgDAYgPAtQgHAVgKAMQgLANgNAAIgGgBg");
	this.shape.setTransform(55.3,53.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(0,0,110.5,107.6), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("ACTFoIgwAAQgNgBgEgDQgHgEgCgQIgNhaQgPAGgRgTIgOgOQgHgHgHgDQgQgBgIgDQgGgCgDgGQgEgGADgFQiRgCiEgjQgZgHADgOQgfgDgdgPQgdgQgTgZQg1gEgnglQADgFAKgBIABgTIgOgFQAFhEAigOQgOgkAag6IAXgrQANgaAGgTIADgRQADgKAFgFQAJgPAYgDQAjgFAnAbQAOAJARAQIAdAcQAdAaAcAPIAkAQQAUAKALALIAVAaQAMARAKAGQAPAIAgAAIB1AAIAqgBQAYgCASgGQAOgFAngXQAggVAPgLQAZgUAPgUIBYhsQAOgQAJgHQAOgMAOgBQAWgCAWAVIAiAqIAKANQAGAHADAGQAFAMAAAbIgBB6QAAA6gcAMQgQAEgGAEQgHAFgHAVQgRA0g0AdIgfAOQgVAJgLAIQgkAZgRA8IgKAzQgFAhgFARQgFAZgLAOQgPATgeAHQgTAEgeAAIgHAAg");
	this.shape.setTransform(53.4,36);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,0,106.8,72), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0.91)","rgba(0,0,0,0)"],[0,0.173,1],-144.5,0,144.5,0).s().p("A2kePMAAAg8dMAtJAAAMAAAA8dg");
	this.shape.setTransform(144.5,193.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,289,387), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,723,359), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABDCJIAAhzQAAgZAEg0IgCAAIhtDAIhcAAIAAkRIBCAAIAAB2IgDBKIACAAIBsjAIBcAAIAAERg");
	this.shape.setTransform(182,28.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA0CJIg0hVIg1BVIhUAAIBbiLIhWiGIBSAAIAyBUIAvhUIBVAAIhYCKIBeCHg");
	this.shape_1.setTransform(151.8,28.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhRCJIAAkRICjAAIAAA7IhYAAIAAArIBRAAIAAA7IhRAAIAAA0IBYAAIAAA8g");
	this.shape_2.setTransform(127.9,28.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAmCJIAAjVIhLAAIAADVIhLAAIAAkRIDhAAIAAERg");
	this.shape_3.setTransform(102.5,28.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhLBpQghgkAAhEQAAgqAQggQAQghAegRQAegSAoAAQAtAAAoAUIgWA7IgfgNQgPgEgSAAQgZAAgPAVQgPAWAAAlQAABPA8ABQASAAARgGIAigMIAAA/QgiAPgsABQg9AAghglg");
	this.shape_4.setTransform(76.2,28.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhiBpQgjgkAAhFQAAhEAjgkQAiglBAAAQBCAAAiAkQAiAkAABFQAABFgiAkQgiAlhCAAQhAAAgiglgAg2AAQAABQA2AAQAcAAAOgUQANgTAAgpQAAgogNgUQgOgUgcAAQg2AAAABQg");
	this.shape_5.setTransform(47.9,28.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABQC0IAAhVIifAAIAABVIhJAAIAAiSIAYAAQAYgpAQg3QAQg3AEg+IC3AAIAADVIAmAAIAACSgAgyAiIBaAAIAAiYIgwAAQgIBQgiBIg");
	this.shape_6.setTransform(16.7,32.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,199.6,54.9), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABMCcIAAiCQAAgeAFg6IgCAAIh9DaIhoAAIAAk4IBLAAIAACHIgEBVIACAAIB8jcIBpAAIAAE4g");
	this.shape.setTransform(139.8,32.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah3CcIAAk4IBtAAQA/AAAeATQAgATAAAoQAAAbgOASQgNATgXAFIAAADQAdAGAOASQAMASAAAdQAAArgfAYQggAZg4gBgAgjBbIAeAAQAnAAAAgiQAAgPgLgJQgLgHgTAAIgcAAgAgjgjIAaAAQAQAAALgIQAKgIgBgPQAAgagmAAIgYAAg");
	this.shape_1.setTransform(107.2,32.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhwCcIAAk4IBsAAQA6AAAeAaQAeAagBAwQAAA1geAbQgfAdg4AAIgYAAIAABngAgcgPIAQAAQARAAAMgLQALgLAAgTQAAgfgiAAIgWAAg");
	this.shape_2.setTransform(78.8,32.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhwB4QgngqAAhOQAAhOAngpQAngpBJAAQBLAAAnApQAmAoAABPQAABPgnApQgmAphLAAQhJAAgngpgAg+AAQAABbA+AAQAgAAAQgXQAPgWAAguQAAgugQgWQgPgXggAAQg+AAAABbg");
	this.shape_3.setTransform(46.5,32.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhWB3QglgoAAhOQAAgwASglQASgkAjgVQAigTAtAAQAzAAAuAWIgZBDIgjgOQgSgGgTAAQgeAAgRAZQgQAZAAAqQAABbBDAAQAVgBAUgFIAngOIAABIQgnARgyAAQhGAAgmgqg");
	this.shape_4.setTransform(16.1,32.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,159.8,62.6), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Sloy8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,126,431), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sila.psd
	this.instance = new lib.sila1();
	this.instance.parent = this;

	this.instance_1 = new lib.sila2();
	this.instance_1.parent = this;

	this.instance_2 = new lib.sila3();
	this.instance_2.parent = this;

	this.instance_3 = new lib.sila4();
	this.instance_3.parent = this;

	this.instance_4 = new lib.sila5();
	this.instance_4.parent = this;

	this.instance_5 = new lib.sila6();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,265,264);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sloy9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,172,357), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sloy7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,78,92), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sloy6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,34,49), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sloy5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,42,87), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sloy4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,33,104), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sloy3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,107,74), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sloy2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,67,212), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.7},11,cjs.Ease.get(-1)).to({rotation:45},13,cjs.Ease.get(1)).to({rotation:1.8},12,cjs.Ease.get(-1)).to({rotation:-45},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.1,-31.1,62.2,62.2);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 55
	this.instance = new lib.Символ55();
	this.instance.parent = this;
	this.instance.setTransform(-0.7,-15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 54
	this.instance_1 = new lib.Символ54();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(-99.7,-46.4,199.6,83.8), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(17.4,49,1,1,0,0,0,17.4,49);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,36.7,100);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(-157.4,-22.4,1,1,0,0,0,0,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-40.7},49).to({y:-22.4},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.9,-26.8,5,8.9);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(55.2,53.8,1,1,0,0,0,55.2,53.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110.5,107.6);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(53.4,36,1,1,0,0,0,53.4,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},5).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106.8,72);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(53.4,36,1,1,0,0,0,53.4,36);
	this.instance.alpha = 0.469;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(55.2,53.8,1,1,0,0,0,55.2,53.8);
	this.instance.alpha = 0.469;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(65.3,67.8,1,1,0,0,0,65.3,67.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,107,74), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 3
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(112.3,69,1,1,0,0,0,65.3,69);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:66.5,regY:63.1,scaleY:1.08,x:113.5,y:62.3},9).to({regX:65.3,regY:69,scaleY:1,x:112.3,y:69},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(86,178.5,1,1,0,0,0,86,178.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172,357);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(603.5,193.4,1,1,180,0,0,144.5,193.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(144.5,193.5,1,1,0,0,0,144.5,193.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,748,387), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(79.1,172.1,1,1,0,0,0,259.1,239.1);
	this.instance.alpha = 0.371;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(140, 140, 1)];
	this.instance.cache(-2,-2,522,482);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(57));

	// Символ 42
	this.instance_1 = new lib.Символ42();
	this.instance_1.parent = this;
	this.instance_1.setTransform(611.3,165.1,1,1,0,0,0,259.1,239.1);
	this.instance_1.alpha = 0.371;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.BlurFilter(140, 140, 1)];
	this.instance_1.cache(-2,-2,522,482);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(51));

	// Слой 1
	this.instance_2 = new lib.Символ21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(361.5,179.5,1,1,0,0,0,361.5,179.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,723,359);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(79.9,31.2,1,1,0,0,0,79.9,31.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,159.8,62.6), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(100.3,31.2,1,1,0,0,0,79.9,31.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1,x:100.4,y:23.2},2,cjs.Ease.get(-1)).to({regX:80,scaleX:1.24,scaleY:1.24,x:100.5,y:11.2},3,cjs.Ease.get(1)).to({scaleX:1.15,scaleY:1.15,x:100.4,y:19.3},2,cjs.Ease.get(-1)).to({regX:79.9,scaleX:1,scaleY:1,x:100.3,y:31.2},3,cjs.Ease.get(1)).to({scaleX:1.1,scaleY:1.1,x:100.4,y:23.2},2,cjs.Ease.get(-1)).to({regX:80,scaleX:1.24,scaleY:1.24,x:100.5,y:11.2},3,cjs.Ease.get(1)).to({scaleX:1.12,scaleY:1.12,x:100.4,y:21.4},3,cjs.Ease.get(-1)).to({regX:79.9,scaleX:1,scaleY:1,x:100.3,y:31.2},3,cjs.Ease.get(1)).wait(19));

	// ДОСПЕХИ
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(99.8,80.7,1,1,0,0,0,99.8,27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({scaleX:1.07,scaleY:1.07,x:99.9,y:90.7},3,cjs.Ease.get(-1)).to({scaleX:1.14,scaleY:1.14,y:100.7},3,cjs.Ease.get(1)).to({regX:99.7,scaleX:1.07,scaleY:1.07,y:90.7},3,cjs.Ease.get(-1)).to({regX:99.8,scaleX:1,scaleY:1,x:99.8,y:80.7},3,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07,x:99.9,y:90.7},3,cjs.Ease.get(-1)).to({scaleX:1.14,scaleY:1.14,y:100.7},3,cjs.Ease.get(1)).to({regX:99.7,scaleX:1.07,scaleY:1.07,y:90.7},3,cjs.Ease.get(-1)).to({regX:99.8,scaleX:1,scaleY:1,x:99.8,y:80.7},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199.6,108.2);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_103 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_104 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(103).call(this.frame_103).wait(1).call(this.frame_104).wait(2));

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(64,369.5,1,1,-23.5,0,0,64,369.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:63.9,regY:369.5,scaleX:1,scaleY:1,rotation:-13.6,y:374.1},9,cjs.Ease.get(-1)).to({regX:64,scaleX:1,scaleY:1,rotation:19.9,y:389.6},10,cjs.Ease.get(1)).to({rotation:-1.8,y:379.5},10).to({regY:369.4,rotation:-23.5,y:369.5},10,cjs.Ease.get(1)).to({regY:369.5,scaleX:1,scaleY:1,rotation:-14.6,x:64.1,y:373.6},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:19.9,x:64,y:389.6},11,cjs.Ease.get(1)).to({regY:369.6,scaleX:1,scaleY:1,rotation:0.4},7).to({rotation:-719.6},37).wait(1).to({rotation:-1079.6},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.7,5.9,287.1,445.6);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hend();
	this.instance.parent = this;
	this.instance.setTransform(0,42.2,0.623,0.623,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(36.8,-76.9,1,1,0,0,0,22.5,20.5);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,-97.4,279.3,264), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 9
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(230.9,193.6,1,1,0,0,0,53.4,36);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ31(), 3);

	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(215.9,108,1,1,0,0,0,55.2,53.8);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ30(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(57));

	// sloy7.png
	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(202.8,49,1,1,-7.7,0,0,40.2,81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:40.3,rotation:-2,x:202.9},14).to({regX:40.2,rotation:-7.7,x:202.8},15).wait(28));

	// sloy5.png
	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(143.2,134,1,1,0,0,0,29.2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:29.3,rotation:-8.7,x:151.7},14).to({regX:29.2,rotation:0,x:143.2},15).wait(1).to({regX:29.3,regY:2.1,rotation:-39.6,x:123.9,y:120.1},9).to({rotation:-22.4,x:146.9,y:128.6},5).to({rotation:-39.6,x:123.9,y:120.1},5).to({regX:29.2,regY:2,rotation:0,x:143.2,y:134},7).wait(1));

	// sloy4.png
	this.instance_4 = new lib.Символ4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(158.2,57.4,1,1,0,0,0,27.2,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-5.7,y:57.5},14).to({rotation:0,y:57.4},15).wait(1).to({regX:27.3,rotation:19,x:163.9,y:57.5},9).to({regX:27.2,rotation:2,y:57.4},5).to({regX:27.3,rotation:19,y:57.5},5).to({regX:27.2,rotation:0,x:158.2,y:57.4},7).wait(1));

	// sloy6.png
	this.instance_5 = new lib.Символ6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(129.7,216.7,1,1,0,0,0,14.7,6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:151},14).to({x:129.7},15).wait(1).to({regY:6.8,rotation:3.2,x:168.3,y:191.5},9).to({x:165.5,y:206.9},5).to({x:168.3,y:191.5},5).to({regY:6.7,rotation:0,x:129.7,y:216.7},7).wait(1));

	// sloy3.png
	this.instance_6 = new lib.Символ24();
	this.instance_6.parent = this;
	this.instance_6.setTransform(203,213.5,1,1,0,0,0,86,178.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(57));

	// sloy2.png
	this.instance_7 = new lib.Символ2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(263.6,139.3,1,1,0,0,0,14.6,197.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:197.2,rotation:-3},14).to({regY:197.3,rotation:0},15).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(114,-58,202,450);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(0,14.5,1,1,90,0,0,0,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(32.5,-145.4,8.9,5), null);


(lib.Символ26 = function(mode,startPosition,loop) {
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

	// Слой 4
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(99.8,148.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:380.5},4,cjs.Ease.get(1)).to({y:148.4},5,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(99.8,-5.9,1,1,0,0,0,99.8,54.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-160.2,y:-15.9},4).to({x:99.8,y:-5.9},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-60,199.6,245.7);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(89.8,180.7,1,1,0,0,0,89.8,83.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:193.5},6,cjs.Ease.get(-1)).to({y:210.7},8,cjs.Ease.get(1)).to({y:194.7},8,cjs.Ease.get(-1)).to({y:180.7},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,279.3,264);


(lib.Символ14 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(139.7,202,1,1,0,0,0,139.7,132);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-48},4).to({y:202},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,70,279.3,264);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ50();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(57));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(114,-58,202,450);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(45.4,-142.5,1,1,180,0,0,0,14.5);

	this.instance_1 = new lib.Символ38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-45.5,142.5,1,1,0,0,0,0,14.5);

	this.instance_2 = new lib.Символ41();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,0,1,1,0,0,0,17.4,49);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AAoAAQAAARgMALQgLAMgRAAQgQAAgMgMQgLgLAAgRQAAgQALgMQAMgLAQAAQARAAALALQAMAMAAAQg");
	this.shape.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-18.3,-50,36.7,100), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(55.1,88,1,1,0,0,0,37.6,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:15,x:28.9,y:40.6},0).wait(1).to({rotation:30,x:42,y:35.4},0).wait(1).to({rotation:45,x:56.1,y:33.8},0).wait(1).to({rotation:60,x:70,y:35.9},0).wait(1).to({rotation:75,x:83,y:41.6},0).wait(1).to({rotation:90,x:94.1,y:50.4},0).wait(1).to({rotation:105,x:102.5,y:61.7},0).wait(1).to({rotation:120,x:107.6,y:74.9},0).wait(1).to({rotation:135,x:109.2,y:88.9},0).wait(1).to({rotation:150,x:107.1,y:102.9},0).wait(1).to({rotation:165,x:101.5,y:115.8},0).wait(1).to({rotation:180,x:92.7,y:126.9},0).wait(1).to({rotation:195,x:81.3,y:135.3},0).wait(1).to({rotation:210,x:68.2,y:140.5},0).wait(1).to({rotation:225,x:54.1,y:142.1},0).wait(1).to({rotation:240,x:40.2,y:140},0).wait(1).to({rotation:255,x:27.2,y:134.3},0).wait(1).to({rotation:270,x:16.2,y:125.6},0).wait(1).to({rotation:285,x:7.7,y:114.2},0).wait(1).to({rotation:300,x:2.6,y:101},0).wait(1).to({rotation:315,x:1,y:87},0).wait(1).to({rotation:330,x:3.1,y:73},0).wait(1).to({rotation:345,x:8.7,y:60.1},0).wait(1).to({rotation:360,x:17.5,y:49},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-1,36.7,100);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_82 = function() {
		this.stop();
	}
	this.frame_84 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(3).call(this.frame_82).wait(2).call(this.frame_84).wait(1));

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(-71.9,224.5,0.844,0.844,0,0,0,86,178.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:232.5},39).to({y:224.5},40).wait(2).to({regX:221,regY:165.5,scaleX:0.3,skewY:180,x:62,y:213.6},0).wait(1).to({regX:221.1,scaleX:0.84,x:81.9},0).wait(1).to({regX:221,scaleX:0.3,skewY:0,x:62},0).wait(1).to({regX:221.1,scaleX:0.84,x:42},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.3,25,170.3,379.6);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_71 = function() {
		this.stop();
	}
	this.frame_83 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(12).call(this.frame_71).wait(12).call(this.frame_83).wait(1));

	// Слой 1
	this.girl1 = new lib.Символ9();
	this.girl1.parent = this;
	this.girl1.setTransform(50.2,10.2,1,1,0,0,0,87,225);

	this.timeline.addTween(cjs.Tween.get(this.girl1).to({x:16.9,y:15.7},14,cjs.Ease.get(-1)).to({x:-18.8,y:10.2},15,cjs.Ease.get(1)).to({x:15.7,y:15.3},15,cjs.Ease.get(-1)).to({x:50.2,y:10.2},15,cjs.Ease.get(1)).wait(1).to({regY:224.9,scaleX:1.03,scaleY:1.03,rotation:13.5,x:146},11,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-17.7,x:-121.8,y:-12},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.1,-189.7,170.3,379.6);


(lib.Символ51 = function(mode,startPosition,loop) {
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
	this.girl2 = new lib.Символ52();
	this.girl2.parent = this;
	this.girl2.setTransform(51.9,0,1,1,0,0,0,-48.1,0);

	this.timeline.addTween(cjs.Tween.get(this.girl2).to({scaleX:1.26,scaleY:1.26,y:53.1},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,y:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.8,-189.7,170.4,379.6);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(-17.1,-12,0.658,0.658,0,0,0,-25.9,-18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:12.4,x:-3,y:3.4},0).wait(1).to({rotation:24.8,x:-6.7,y:6},0).wait(1).to({rotation:37.2,x:-10.8,y:7.8},0).wait(1).to({rotation:49.7,x:-15.2,y:8.7},0).wait(1).to({rotation:62.1,x:-19.7,y:8.6},0).wait(1).to({rotation:74.5,x:-24.1,y:7.6},0).wait(1).to({rotation:86.9,x:-28.1,y:5.6},0).wait(1).to({rotation:99.3,x:-31.7,y:2.8},0).wait(1).to({rotation:111.7,x:-34.5,y:-0.7},0).wait(1).to({rotation:124.1,x:-36.6,y:-4.7},0).wait(1).to({rotation:136.6,x:-37.7,y:-9},0).wait(1).to({rotation:149,x:-37.8,y:-13.5},0).wait(1).to({rotation:161.4,x:-37,y:-18},0).wait(1).to({rotation:173.8,x:-35.3,y:-22.1},0).wait(1).to({rotation:186.2,x:-32.7,y:-25.8},0).wait(1).to({rotation:198.6,x:-29.4,y:-28.8},0).wait(1).to({rotation:211,x:-25.5,y:-31.1},0).wait(1).to({rotation:223.4,x:-21.2,y:-32.4},0).wait(1).to({rotation:235.9,x:-16.7,y:-32.8},0).wait(1).to({rotation:248.3,x:-12.2,y:-32.3},0).wait(1).to({rotation:260.7,x:-8,y:-30.7},0).wait(1).to({rotation:273.1,x:-4.1,y:-28.4},0).wait(1).to({rotation:285.5,x:-0.9,y:-25.2},0).wait(1).to({rotation:297.9,x:1.5,y:-21.4},0).wait(1).to({rotation:310.3,x:3.1,y:-17.2},0).wait(1).to({rotation:322.8,x:3.8,y:-12.7},0).wait(1).to({rotation:335.2,x:3.4,y:-8.3},0).wait(1).to({rotation:347.6,x:2.1,y:-3.9},0).wait(1).to({rotation:360,x:-0.1,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-32.9,24.2,65.8);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-250.5,y:-70},22,cjs.Ease.get(-1)).to({x:-501.1,y:0},22,cjs.Ease.get(1)).to({x:-245,y:60},23,cjs.Ease.get(-1)).to({x:0,y:0},22,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-32.9,24.2,65.8);


(lib.Символ49 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-32.9,24.2,65.8);


// stage content:
(lib.starwars640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.kur.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kur.x = stage.mouseX/window.devicePixelRatio;
			this.kur.y = stage.mouseY/window.devicePixelRatio;
		}
		
		
		
		var _this = this;
		
		_this.kur.visible=false;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
			_this.pri.gotoAndStop(1);
			_this.txt.gotoAndPlay(1);
			_this.kur.visible=true;
			_this.hend.gotoAndPlay(1);
			_this.girl.gotoAndPlay(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.pri.gotoAndStop(0);    
			_this.txt.gotoAndPlay(5);
			_this.kur.visible=false;
			_this.hend.gotoAndPlay(5);
			_this.girl.gotoAndPlay(9);
			_this.girl.girl2.gotoAndPlay(0);
			
		}
		
		
		this.addEventListener("tick", fl_CustomMouseCursor2.bind(this));
		
		function fl_CustomMouseCursor2() {
		
		this.fon.x = - stage.mouseX / 10;
		this.fon.y = - stage.mouseY / 10;
		}
		
		
		this.b1.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
		_this.girl.girl2.gotoAndPlay(61);
		_this.girl.girl2.girl1.gotoAndPlay(82);
		}
		
		
		this.b2.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
		_this.girl.girl2.gotoAndPlay(72);	
		_this.girl.girl2.girl1.gotoAndPlay(84);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 6
	this.pri = new lib.Символ49();
	this.pri.parent = this;
	this.pri.setTransform(589.9,153.4);

	this.timeline.addTween(cjs.Tween.get(this.pri).wait(1));

	// Слой 5
	this.b1 = new lib.Символ45();
	this.b1.parent = this;
	this.b1.setTransform(178.6,156,2.456,1,0,0,0,76.2,164);
	new cjs.ButtonHelper(this.b1, 0, 1, 2, false, new lib.Символ45(), 3);

	this.b2 = new lib.Символ44();
	this.b2.parent = this;
	this.b2.setTransform(556.8,155,2.456,1,0,0,0,76.2,164);
	new cjs.ButtonHelper(this.b2, 0, 1, 2, false, new lib.Символ44(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b2},{t:this.b1}]}).wait(1));

	// Слой 4
	this.hend = new lib.Символ14();
	this.hend.parent = this;
	this.hend.setTransform(181.4,398,1,1,0,0,0,139.7,132);

	this.timeline.addTween(cjs.Tween.get(this.hend).wait(1));

	// Слой 2
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(523,153.5,1,1,0,0,0,63,215.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.girl = new lib.Символ51();
	this.girl.parent = this;
	this.girl.setTransform(203.8,178.8,1,1,0,0,0,-48.1,0);

	this.kur = new lib.Символ36();
	this.kur.parent = this;
	this.kur.setTransform(-111.4,85.2,0.744,0.744,0,0,0,17.4,49.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.kur},{t:this.girl}]}).wait(1));

	// Символ 17
	this.txt = new lib.Символ26();
	this.txt.parent = this;
	this.txt.setTransform(122.1,155.4,1,1,0,0,0,99.8,54.1);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Слой 7
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(95.5,160.6,1,1,0,0,0,144.5,193.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.fon = new lib.Символ20();
	this.fon.parent = this;
	this.fon.setTransform(-38.6,1.4,1,1,0,0,0,-3.6,17.4);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(195.1,96.4,868.7,656.2);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1481710581300", id:"back"},
		{src:"images/hend.png?1481710581300", id:"hend"},
		{src:"images/mouse.png?1481710581300", id:"mouse"},
		{src:"images/sila1.jpg?1481710581300", id:"sila1"},
		{src:"images/sila2.jpg?1481710581300", id:"sila2"},
		{src:"images/sila3.jpg?1481710581300", id:"sila3"},
		{src:"images/sila4.jpg?1481710581300", id:"sila4"},
		{src:"images/sila5.jpg?1481710581300", id:"sila5"},
		{src:"images/sila6.png?1481710581300", id:"sila6"},
		{src:"images/sloy2.png?1481710581300", id:"sloy2"},
		{src:"images/sloy3.png?1481710581300", id:"sloy3"},
		{src:"images/sloy4.png?1481710581300", id:"sloy4"},
		{src:"images/sloy5.png?1481710581300", id:"sloy5"},
		{src:"images/sloy6.png?1481710581300", id:"sloy6"},
		{src:"images/sloy7.png?1481710581300", id:"sloy7"},
		{src:"images/Sloy8.png?1481710581300", id:"Sloy8"},
		{src:"images/sloy9.png?1481710581300", id:"sloy9"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;