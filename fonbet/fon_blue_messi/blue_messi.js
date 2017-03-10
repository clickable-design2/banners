(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,60);


(lib.mes1 = function() {
	this.initialize(img.mes1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.mes10 = function() {
	this.initialize(img.mes10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.mes11 = function() {
	this.initialize(img.mes11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.mes13 = function() {
	this.initialize(img.mes13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.mes14 = function() {
	this.initialize(img.mes14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.mes16 = function() {
	this.initialize(img.mes16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.mes17 = function() {
	this.initialize(img.mes17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.mes19 = function() {
	this.initialize(img.mes19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.mes2 = function() {
	this.initialize(img.mes2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.mes20 = function() {
	this.initialize(img.mes20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.mes22 = function() {
	this.initialize(img.mes22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.mes24 = function() {
	this.initialize(img.mes24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.mes4 = function() {
	this.initialize(img.mes4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.mes5 = function() {
	this.initialize(img.mes5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.mes7 = function() {
	this.initialize(img.mes7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.mes8 = function() {
	this.initialize(img.mes8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);// helper functions:

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


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABwGkQgRgFgLgLQgLgLgFgRQgEgRAAgXIAAgDIA5AAIABAVQACAIAEAHQAEAHAGAEQAHAEAMAAQASAAAJgLQAJgKAAgXQAAgNgDgIQgCgJgFgFQgJgKgWAAIgTAAIAAgtIALABQAMAAAJgDQAIgCAFgGQAFgFACgIQADgJAAgMQAAgSgIgIQgIgIgOAAQgNAAgJAGQgKAFgCAOIgBAHIAAAJIg4AAIAAgDQAAgUAGgPQAGgPALgKQAMgKARgFQARgFAXAAQApAAAXATQAWATAAAlQAAAKgDALQgCAKgGAJQgFAJgIAGQgIAHgLADQAYAFANAQQANAQAAAdQAAAtgZAWQgNALgSAGQgSAFgXAAQgZAAgSgFgAEsGlIAAg1IA3AAIAAA1gAgEGlIgNg9IhMAAIgNA9Ig8AAIBLkeIBIAAIBKEegAhTE5IA4AAIgciAIgBAAgAliGlIAAkeIBlAAQAWAAAPAIQAPAHAJAMQAJAMAEAPQAEAQAAAQQAAAWgGAQQgHARgMAKQgLAKgRAGQgRAFgUAAIgfAAIAABygAkoEIIAZAAQASAAAKgKQAGgFACgIQADgJAAgKQAAgWgJgLQgFgGgIgDQgHgCgLAAIgYAAgAE0FVIgIhxIAAhdIA3AAIAABdIgHBxgABogPIAAg4IkKAAIAAkeIA6AAIAADuIA8AAIAAjuIA4AAIAADuIA9AAIAAjuIA5AAIAADuIAbAAIAABogAC1hHIAAkeICfAAIAAAvIhmAAIAABDIBgAAIAAAwIhgAAIAABMIBqAAIAAAwgAlihHIAAkeICgAAIAAAvIhmAAIAABDIBgAAIAAAwIhgAAIAABMIBqAAIAAAwgAEOl5IAAgvIAtAAIAAAvgADLl5IAAgvIArAAIAAAvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-35.5,-42.5,71,85.1), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKA8IAAh3IAYAAIAAB3gAghA8IAAh3IAYAAIAAB3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-3.4,-6,6.8,12.1), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#396797").s().p("EguYAYUMAAAgwnMBcxAAAMAAAAwng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-296.9,-155.5,593.8,311.2), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mes1();
	this.instance.parent = this;
	this.instance.setTransform(-300,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-300,-150,600,300), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8DA00").s().p("AgVBUIACgeIhaAAIgGAeIgXAAIAHg0IAOAAQALgUAHgTQAHgVAGgbQABgHADgFQAEgFAEgEQAJgHAOAAIA5AAIgPBzIARAAIgHA0gAg0g6QgDADgCAHQgLAzgQAdIAtAAIANhdIgQAAQgHAAgDADgABtA2IgFgkIgvAAIgQAkIgfAAIA6iCQABgDADgCQACgCAEAAIAdAAQAEAAADACQADADABADIAVCBgABlgFIgHg3IgGAAIgVA3IAiAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-13.9,-8.4,27.8,16.8), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnA8QgEgEgCgGQgBgGABgHIALhOQABgHACgFQADgFAEgDQAJgIAOABQArAAAUABIgEAXIg0AAQgGAAgBADQgDACAAAGIgDAUIA1AAIgDAVIg1AAIgEAbQgBAFACACQACADAGAAIAyAAIgBAXQgfABgbAAQgRABgIgKgABfBFIAQhwIgpAAIADgZIBxAAIgDAZIgqAAIgPBwgAhrBFIAJg+IgwAAIgJA+IgeAAIATiJIAfAAIgIA1IAwAAIAIg1IAeAAIgTCJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-18.6,-6.9,37.3,13.9), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AqFi9IULAAQAsAAAAAsIAAEjQAAAsgsAAI0LAAQgsAAAAgsIAAkjQAAgsAsAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E4873").s().p("AqFC+QgsAAAAgsIAAkjQAAgsAsAAIULAAQAsAAAAAsIAAEjQAAAsgsAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-70,-20,140,40), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E3D502").ss(1,1,1).p("AqFi9IULAAQAsAAAAAsIAAEjQAAAsgsAAI0LAAQgsAAAAgsIAAkjQAAgsAsAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E4873").s().p("AqFC+QgsAAAAgsIAAkjQAAgsAsAAIULAAQAsAAAAAsIAAEjQAAAsgsAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-70,-20,140,40), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8DA00").s().p("ADdCGQgVgIgMgRQgMgRgCgcQgEgcAFgmQAGgoAKgbQAKgcAOgPQAegeBAAAQAtAAAlAKIgIAtIhNgCQgVAAgMAGQgMAIgIATQgJAUgFAnQgHAzAHASQAIASAeAAQAvAAAlgEIACAuQgSAFgWADQgWADgbAAQgfAAgWgJgAgLCGQgWgIgLgRQgMgRgCgcQgEgcAFgmQAGgoAKgbQALgcAOgPQAbgeBBAAQAtAAAlAKIgJAtIhMgCQgVAAgMAGQgMAIgIATQgJAUgFAnQgGAzAGASQAIASAeAAQAvAAAlgEIACAuQgSAFgWADQgWADgbAAQgfAAgVgJgAkVB5QgHgIgEgMQgCgNACgPIAWidQABgNAGgJQAEgKAJgIQARgOAcAAQBYAAAnAEIgHAtIhnAAQgMAAgFAEQgFAFgCANIgFApIBtAAIgGAqIhtAAIgIA1QgBAMAEAFQAEAEALAAIBnAAIgCAuQhAADg4AAQghAAgQgSgAI4CKIAWieQAEgWAGgVIgCAAIgUAkIh0ClIg/AAIAnkTIA7AAIgXCcQgCATgIAaIACAAQAJgUANgSIBzijIA+AAIgnETgAmTCKIAXjkIgGAAIhCCsQgGASgUAAIgoAAQgVAAgCgVIgTipIgHAAIgoDkIg5AAIAuj9QACgMAGgEQAFgGALAAIA5AAQAKAAAFAGQAFAFABAJIASCwIAHAAIBAixQADgJAGgFQAHgFAKAAIA6AAQALAAAGAHQAGAFgBAMIgZD7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-66.5,-14.3,133,28.6), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkJCQIAgjfQAjgCAqAAIBLACIgKAnIhiAAIgIAzIAhAAQAXAAAQAEQAPAEAIAIQARAPgFAnQgGAmgSAPQgIAGgPAEQgOADgUAAQg6AAgkgDgAjTBtIAgAAQAWAAAHgGQAEgDADgIQACgGACgLQACgTgFgFQgFgGgUAAIgiAAgAhBCQIAgjfIAwAAIgMBSIAgAAQAXAAAPAFQAPAEAJAHQAQARgGAqQgFAogRAOQgJAIgOADQgOAEgVgBQg8AAgggCgAgKBsIAcAAQAWAAAIgGQADgDADgHQADgHABgLQADgWgEgHQgDgDgGgCQgGgCgLAAIgfAAgAqdCJIAGgiQAnAHAfgBQAUABAJgIQAIgGADgTQABgKgBgFQAAgHgEgDQgGgHgSAAIgsAAIAEgiIApAAQASAAAIgHQAHgFADgRQACgQgGgFQgFgFgTAAQgYAAgnAEIgCgjQAUgEAzgCQAqAAARANQARANgFAiQgCAMgDAJQgEAIgFAGQgKAMgVABIAAACQAsAFgIA4QgDAQgFAMQgFALgJAGQgIAGgPADQgOADgUgBQgyAAgkgJgACRCDQgMgOADgaIASh+QACgLAEgIQAEgIAHgGQANgMAYAAQBGAAAhADIgGAlIhUAAQgKAAgDAEQgEAEgCAJIgFAhIBZAAIgFAjIhZAAIgGAsQgBAJADADQAEAFAJAAIBTAAIgBAlQgdAChFAAQgbAAgNgOgAIyCQQgJAAgEgEQgEgEABgJIACgQQABgHAFgFQAEgEAIAAIALAAQAJAAAEAEQAEAFgBAIIgCAQQgCAQgRAAgAFtCQIAai2IhDAAIAGgpIC3AAIgFApIhDAAIgaC2gAlRCQIgHg6IhNAAIgYA6Ig0AAIBejTQACgGAFgDQAFgDAGAAIAvAAQAGAAAFAFQAEAEABAFIAjDRgAldAuIgLhYIgJAAIgkBYIA4AAgAIsBJIAEgSIAHgRQAJgRAKgJIATgUQAJgLACgHQADgNgGgEQgFgEgPABIhDABIAAghIAmgHIAogBQASAAAMADQANADAJAIQAQANgDAZQgCANgHALQgHAKgJAJIgUARQgJAIgIAMQgJANgDAOgAEJhrQgKABABgKIADgUQACgKAJAAIARAAQALAAgCAKIgDAUQgBAJgKAAgADQhrQgKABABgKIADgUQACgKAKAAIAQAAQALAAgCAKIgDAUQgBAKgKgBg");
	this.shape.setTransform(0,-12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-66.9,-27.3,133.9,29.4), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-100,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-100,-30,200,60), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A4sczMAAAg5PMAnBgAWMAKYA5lg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-158.1,-184.3,316.2,368.6), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E4874").s().p("A4sczMAAAg5PMAnBgAWMAKYA5lg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-158.1,-184.3,316.2,368.6), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABKA8QgHgCgFgFQgJgIAAgRIAAgFIAYAAIABALIADAGQACADADAAQADACAFAAQAFAAAEgEQADgBABgDQACgDAAgEQAAgEgCgDQgBgDgDgCQgCgDgFgBIgKgEQgHgDgGgDQgGgEgFgDQgDgFgCgFQgCgFAAgIQAAgJADgGQACgIAFgEQAFgEAHgCQAHgCAIAAQAIAAAHABQAHACAFAEQAFAEADAGQACAGABAJIAAADIgYAAQABgJgEgEQgDgFgHAAQgEAAgDACQgDABgBABIgCAFIgBAFQAAAGADADQACAEAIAEIATAIIALAFIAHAHQADAEAAAEIABALQAAAKgCAGQgDAIgGADQgFAFgIACQgIACgJAAQgLAAgHgCgAgKA9QgHgBgFgEQgFgFgEgHQgCgIAAgMIAAhTIAYAAIAABbIADAHIAEAEQACACAEAAQAFAAACgCIAEgEIACgHIABhbIAYAAIAABdIgCAJQgEAHgFAFQgFAEgHACQgIABgHAAQgGAAgIgBgACSA8IAAh3IBDAAIAAATIgrAAIAAAdIApAAIAAATIgpAAIAAAgIAtAAIAAAUgAhCA8IgGgZIgfAAIgGAZIgaAAIAgh3IAfAAIAgB3gAhkAPIAYAAIgLg2gAjWA8IAAh3IAqAAQALgBAFAEQAHADAEAFQAEAFACAGQABAHAAAHQAAAJgDAHQgDAHgEAEQgFAEgHACQgIACgIABIgOAAIAAAvgAi+gEIAMAAQAGgBAFgEQADgCAAgDIABgIQABgKgEgFQgCgCgEgBQgCgCgGABIgKAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-21.5,-6.2,43,12.5), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgdAeQgMgNAAgRQAAgQAMgNQANgMAQAAQARAAANAMQAMANAAAQQAAARgMANQgNAMgRAAQgQAAgNgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-4.2,-4.2,8.4,8.4), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D22C2F").s().p("ABQBHQgJgFgFgKQgGgLgCgOQgBgOAAgRQAAgPABgPQACgOAGgKQAFgKAJgGQAKgFARAAQAIAAAGABQAHABAEADQAKAFAEAIQAFAIAAAJIABARIgdAAQAAgQgEgHQgCgEgEgCQgDgCgFAAQgFAAgEAEQgEADgCAGIgDASIgBAZQABARABAKQABALACAFQADAGADACQAEACAEAAQAFAAADgBQAEgCACgEQACgEACgHQABgHAAgMIAeAAQAAAMgCALQgCAKgFAIIgGAHIgIAGQgFACgFABIgOABQgRAAgKgFgAgnBKIAAiSIBSAAIAAAYIg0AAIAAAjIAxAAIAAAXIgxAAIAAAoIA2AAIAAAYgAhVBKQgCgDgBgEIgCglQAAgIgEgFQgEgFgJAAIgQAAIAAA+IgeAAIAAiSIA3AAQAKAAAGACQAIACAFAFQAFAFADAHQADAHAAAKQAAAPgHAJQgGAJgMACIAJADQAFACACADQADACABAFIADALIACAmQABAGAEACIAAABgAh7gIIAMAAQAGAAADgBQAFgBADgDQADgDABgEQACgEAAgGQgBgKgFgFQgEgFgLAAIgOAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-15.4,-7.6,30.8,15.3), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("EgjJgVzMBGTAAAMAAAArnMhGTAAAg");
	this.shape.setTransform(-36.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-262.3,-140.6,452.1,281.3), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EghngUtMBDPAAAMAAAApbMhDPAAAg");
	this.shape.setTransform(-35.9,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-252,-133.5,432.4,267.2), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(0,42.6,1,1,15,0,0,0,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,rotation:-15},9,cjs.Ease.get(0.9)).to({regX:0,rotation:15},10,cjs.Ease.get(0.9)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.3,-48.8,90.6,100.5);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(9.7,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.33,scaleY:1.33},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.6,-45.8,90.6,100.5);


(lib.Символ24_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(109.3,-20.1,1.234,1.234);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24_1, new cjs.Rectangle(-296.9,-155.5,593.8,311.2), null);


(lib.Символ19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(0,0.2);

	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19_1, new cjs.Rectangle(-69.5,-19.5,139,39), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(-0.6,0.4);

	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-69.5,-19.5,139,39), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 7
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(-15,-24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},6,cjs.Ease.get(-1)).to({scaleX:0.77,scaleY:0.77},8,cjs.Ease.get(1)).to({scaleX:0.88,scaleY:0.88,x:-15.1},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:-15},8,cjs.Ease.get(1)).wait(1));

	// Символ 6
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-15.5,17.8,0.791,0.791);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.88,scaleY:0.88},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9},7,cjs.Ease.get(-1)).to({scaleX:0.79,scaleY:0.79},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.5,-39.2,133,58.6);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.2,0);
	this.instance_1.alpha = 0.191;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-158.1,-184.3,323.4,368.6), null);


(lib.Символ25_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.121},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.4,-6,6.8,12.1);


(lib.Символ23_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ25_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.2,0);

	this.instance_2 = new lib.Символ24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-8.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23_1, new cjs.Rectangle(-29.6,-6.2,59.3,12.5), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.121},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,-4.2,8.4,8.4);


(lib.Символ17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 19
	this.instance_2 = new lib.Символ19();
	this.instance_2.parent = this;
	this.instance_2.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0.648},12,cjs.Ease.get(-1)).to({alpha:1},12,cjs.Ease.get(1)).to({alpha:0.641},13,cjs.Ease.get(-1)).to({alpha:0.301},12,cjs.Ease.get(1)).wait(1));

	// Символ 18
	this.instance_3 = new lib.Символ18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1,0.982);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0.648},12,cjs.Ease.get(-1)).to({alpha:0.301},12,cjs.Ease.get(1)).to({alpha:0.66},13,cjs.Ease.get(-1)).to({alpha:1},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-262.3,-140.6,452.1,281.3);


(lib.Символ22_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ24_1();
	this.instance.parent = this;
	this.instance.setTransform(-309.2,151.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92).to({_off:false},0).to({x:111},8,cjs.Ease.get(1)).wait(23).to({x:-309.2},8,cjs.Ease.get(1)).wait(12));

	// Слой 6
	this.instance_1 = new lib.Символ23_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(354.8,266.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({_off:true},93).wait(20));

	// Слой 4
	this.instance_2 = new lib.Символ21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(381.7,267.2);

	this.instance_3 = new lib.Символ20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(360.1,267.3,0.789,0.789);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).to({state:[]},30).to({state:[{t:this.instance_3},{t:this.instance_2}]},93).wait(20));

	// Слой 5
	this.instance_4 = new lib.Символ17_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(211.7,148.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(143));

	// Слой 2
	this.instance_5 = new lib.Символ23();
	this.instance_5.parent = this;
	this.instance_5.setTransform(300,150);

	this.instance_6 = new lib.mes2();
	this.instance_6.parent = this;

	this.instance_7 = new lib.mes4();
	this.instance_7.parent = this;

	this.instance_8 = new lib.mes5();
	this.instance_8.parent = this;

	this.instance_9 = new lib.mes7();
	this.instance_9.parent = this;

	this.instance_10 = new lib.mes8();
	this.instance_10.parent = this;

	this.instance_11 = new lib.mes10();
	this.instance_11.parent = this;

	this.instance_12 = new lib.mes11();
	this.instance_12.parent = this;

	this.instance_13 = new lib.mes13();
	this.instance_13.parent = this;

	this.instance_14 = new lib.mes14();
	this.instance_14.parent = this;

	this.instance_15 = new lib.mes16();
	this.instance_15.parent = this;

	this.instance_16 = new lib.mes17();
	this.instance_16.parent = this;

	this.instance_17 = new lib.mes19();
	this.instance_17.parent = this;

	this.instance_18 = new lib.mes20();
	this.instance_18.parent = this;

	this.instance_19 = new lib.mes22();
	this.instance_19.parent = this;

	this.instance_20 = new lib.mes24();
	this.instance_20.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_5}]},93).to({state:[{t:this.instance_5}]},19).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},2).wait(121).to({_off:false,scaleX:1.32,scaleY:1.32},0).to({scaleX:1,scaleY:1},19,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.6,0,650.7,300);


(lib.Символ20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ19_1();
	this.instance.parent = this;
	this.instance.alpha = 0.301;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ19_1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.5,-19.5,139,39);


(lib.Символ18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.alpha = 0.289;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.5,-19.5,139,39);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ20_1();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-70,-20,140,40), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ18_1();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-70,-20,140,40), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 14
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(-3.6,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({scaleX:0.8,scaleY:0.8},8,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).to({scaleX:0.8,scaleY:0.8},8,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).wait(1));

	// Символ 12
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3.6,-37.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.78,scaleY:0.78},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).to({scaleX:0.78,scaleY:0.78},8,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.1,-56.7,139,92.6);


// stage content:
(lib.blue_messi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(103.3,233);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(115.9,127.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(100.9,41.8,0.548,0.548,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(81.3,142.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 5
	this.instance_4 = new lib.Символ22_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(177.7,-4,1.041,1.041);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(223.2,108.6,879.3,368.6);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/logo.png?1488289626751", id:"logo"},
		{src:"images/mes1.jpg?1488289626751", id:"mes1"},
		{src:"images/mes10.jpg?1488289626751", id:"mes10"},
		{src:"images/mes11.jpg?1488289626751", id:"mes11"},
		{src:"images/mes13.jpg?1488289626751", id:"mes13"},
		{src:"images/mes14.jpg?1488289626751", id:"mes14"},
		{src:"images/mes16.jpg?1488289626751", id:"mes16"},
		{src:"images/mes17.jpg?1488289626751", id:"mes17"},
		{src:"images/mes19.jpg?1488289626751", id:"mes19"},
		{src:"images/mes2.jpg?1488289626751", id:"mes2"},
		{src:"images/mes20.jpg?1488289626751", id:"mes20"},
		{src:"images/mes22.jpg?1488289626751", id:"mes22"},
		{src:"images/mes24.jpg?1488289626751", id:"mes24"},
		{src:"images/mes4.jpg?1488289626751", id:"mes4"},
		{src:"images/mes5.jpg?1488289626751", id:"mes5"},
		{src:"images/mes7.jpg?1488289626751", id:"mes7"},
		{src:"images/mes8.jpg?1488289626751", id:"mes8"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;