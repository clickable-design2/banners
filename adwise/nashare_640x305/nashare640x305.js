(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.arr = function() {
	this.initialize(img.arr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,150);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.elk_2uu1 = function() {
	this.initialize(img.elk_2uu1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,894,894);


(lib.luk = function() {
	this.initialize(img.luk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,301,262);


(lib.mish = function() {
	this.initialize(img.mish);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.nashare_03 = function() {
	this.initialize(img.nashare_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,99);


(lib.nashare_05 = function() {
	this.initialize(img.nashare_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,88);


(lib.nashare_08 = function() {
	this.initialize(img.nashare_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,80);


(lib.nashare_13 = function() {
	this.initialize(img.nashare_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,137);


(lib.nashare_16 = function() {
	this.initialize(img.nashare_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,191);


(lib.nashare_19 = function() {
	this.initialize(img.nashare_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,108);


(lib.nashare_22 = function() {
	this.initialize(img.nashare_22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,182);


(lib.nashare_26 = function() {
	this.initialize(img.nashare_26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,100);


(lib.nashare_28 = function() {
	this.initialize(img.nashare_28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,82);


(lib.nashare_29_03 = function() {
	this.initialize(img.nashare_29_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,118);


(lib.ten = function() {
	this.initialize(img.ten);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,20);// helper functions:

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


(lib.Символ88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.mish();
	this.instance.parent = this;
	this.instance.setTransform(-23,-21,0.483,0.483);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ88, new cjs.Rectangle(-23,-21,33.8,33.8), null);


(lib.Символ87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjMByIgEglIhaAAIgCAlIgqAAIAAhLQAGAAAFgEQAEgDADgEQADgHADgRQAGgoAEhLICBAAIAACWIAQAAIAABLgAkbAnIA7AAIAAhvIgqAAQgIBagJAVgANqBNIAAi8IAtAAIAABEIAiAAQAOAAAMAEQAMAFAIAIQAJAJAEALQAFALAAAOQAAANgFALQgFALgJAHQgIAIgMAFQgMADgNAAgAOXAoIAiAAQAKgBAFgGQAEgGAAgLQAAgJgEgGQgFgFgKAAIgiAAgAJWBNIAAi8IAtAAIAACWIA1AAIAAiWIAtAAIAACWIA0AAIAAiWIAtAAIAAC8gAIGBNIAAi8IAtAAIAAC8gAFsBNIAAi8IAsAAIAABEIAgAAQAOAAAMAEQAMAFAIAIQAJAJAEALQAFALAAAOQAAANgFALQgFALgJAHQgIAIgMAFQgMADgNAAgAGYAoIAgAAQAKgBAFgGQAEgGAAgLQAAgJgEgGQgFgFgKAAIggAAgAEdBNIAAhTQAAgRAEgmIgxCKIglAAIgwiKIgBAAQAEAmAAARIAABTIgpAAIAAi8IBAAAIArB9IArh9IA9AAIAAC8gAghBNIAAhXQAAgQADgOIgBAAQgHARgGALIgxBZIgqAAIAAi8IAqAAIAABZQAAANgCARIABAAQAGgQAHgNIAwhaIAqAAIAAC8gAmiBNQgRAAgNgEQgMgEgJgJQgIgHgEgLQgEgKAAgLIAAhNQAAgLADgJQAEgKAIgIQAJgIAMgEQANgEASgBIA6AAIAAAnIg6AAQgLAAgGAHQgGAGAAAKIAAANIBGAAIAAAnIhGAAIAAAOQAAAJAGAGQAHAGAKABIA6AAIAAAmgAqJBNIAAi8IBHAAQAOABAMADQAMAEAIAGQAJAHAFAKQAEALAAANQAAAMgGALQgGAJgIAFQAFADAFAEIAIAJQAEAFACAGQACAIAAAHQAAANgGALQgEAKgJAHQgJAHgMADQgMADgOAAgApdAoIAhAAQALAAAEgHQAEgEAAgKQAAgJgEgFQgGgEgLAAIgfAAgApdgkIAbAAQAJABAGgFQAGgFAAgJQAAgJgGgFQgFgEgLAAIgaAAgArNBNIgIgfIhCAAIgHAfIguAAIApihQACgIADgFQAEgGAGgDQAGgEAHgCQAIgCAJABQAKgBAHACQAIACAGAEQAFADAEAGQAEAFACAIIAoChgArdAHIgShPQgBgGgGABQgFgBgBAGIgSBPIAxAAgAuPBNIAAhNIg8AAIAABNIgtAAIAAi8IAtAAIAABJIA8AAIAAhJIAsAAIAAC8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ87, new cjs.Rectangle(-101.7,-11.4,203.4,22.9), null);


(lib.Символ86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjMByIgEglIhaAAIgCAlIgqAAIAAhLQAGAAAFgEQAEgDADgEQADgHADgRQAGgoAEhLICBAAIAACWIAQAAIAABLgAkbAnIA7AAIAAhvIgqAAQgIBagJAVgANqBNIAAi8IAtAAIAABEIAiAAQAOAAAMAEQAMAFAIAIQAJAJAEALQAFALAAAOQAAANgFALQgFALgJAHQgIAIgMAFQgMADgNAAgAOXAoIAiAAQAKgBAFgGQAEgGAAgLQAAgJgEgGQgFgFgKAAIgiAAgAJWBNIAAi8IAtAAIAACWIA1AAIAAiWIAtAAIAACWIA0AAIAAiWIAtAAIAAC8gAIGBNIAAi8IAtAAIAAC8gAFsBNIAAi8IAsAAIAABEIAgAAQAOAAAMAEQAMAFAIAIQAJAJAEALQAFALAAAOQAAANgFALQgFALgJAHQgIAIgMAFQgMADgNAAgAGYAoIAgAAQAKgBAFgGQAEgGAAgLQAAgJgEgGQgFgFgKAAIggAAgAEdBNIAAhTQAAgRAEgmIgxCKIglAAIgwiKIgBAAQAEAmAAARIAABTIgpAAIAAi8IBAAAIArB9IArh9IA9AAIAAC8gAghBNIAAhXQAAgQADgOIgBAAQgHARgGALIgxBZIgqAAIAAi8IAqAAIAABZQAAANgCARIABAAQAGgQAHgNIAwhaIAqAAIAAC8gAmiBNQgRAAgNgEQgMgEgJgJQgIgHgEgLQgEgKAAgLIAAhNQAAgLADgJQAEgKAIgIQAJgIAMgEQANgEASgBIA6AAIAAAnIg6AAQgLAAgGAHQgGAGAAAKIAAANIBGAAIAAAnIhGAAIAAAOQAAAJAGAGQAHAGAKABIA6AAIAAAmgAqJBNIAAi8IBHAAQAOABAMADQAMAEAIAGQAJAHAFAKQAEALAAANQAAAMgGALQgGAJgIAFQAFADAFAEIAIAJQAEAFACAGQACAIAAAHQAAANgGALQgEAKgJAHQgJAHgMADQgMADgOAAgApdAoIAhAAQALAAAEgHQAEgEAAgKQAAgJgEgFQgGgEgLAAIgfAAgApdgkIAbAAQAJABAGgFQAGgFAAgJQAAgJgGgFQgFgEgLAAIgaAAgArNBNIgIgfIhCAAIgHAfIguAAIApihQACgIADgFQAEgGAGgDQAGgEAHgCQAIgCAJABQAKgBAHACQAIACAGAEQAFADAEAGQAEAFACAIIAoChgArdAHIgShPQgBgGgGABQgFgBgBAGIgSBPIAxAAgAuPBNIAAhNIg8AAIAABNIgtAAIAAi8IAtAAIAABJIA8AAIAAhJIAsAAIAAC8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ86, new cjs.Rectangle(-101.7,-11.4,203.4,22.9), null);


(lib.Символ84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.arr();
	this.instance.parent = this;
	this.instance.setTransform(432.6,-197.8,0.519,0.519,0,153.6,-26.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ84, new cjs.Rectangle(398,-279.3,58.4,81.5), null);


(lib.Символ81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.luk();
	this.instance.parent = this;
	this.instance.setTransform(-101.4,-88.3,0.674,0.674);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ81, new cjs.Rectangle(-101.4,-88.3,202.9,176.6), null);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,1,1).p("ACdjaQAPALAPAOACRjaQAHAFAGAFQAOALANANQACACACACQAIAIAHAJADBC3QgBABgBABQgLALgMAKQgDACgCACQAAAAAAAAIgBAAQgCACgCACQgEADgDACACoDOQgCABgCACQAAAAgBABADBC3QgDACgDADQgBABgBABQgIAIgJAIADMCrQgFAGgGAGAjLiqQAFgGAGgGQADgCADgDQABgBABgBQAIgIAIgHAiWjZQgHAEgGAFQgCACgDACAjAi2QABgBABgBQALgLALgJAicDbQgPgLgPgOAiQDbQgHgFgGgFQgOgLgNgNQgCgCgCgCQgIgIgHgJ");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ77, new cjs.Rectangle(-22.9,-24.4,45.8,48.8), null);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("AAzhGQABAAABABQAFAEAEAEQABABAAAAQADADACADAAxhIQABABABABQAHABAFAFABBA9QgBAAAAABQgBAAAAAAIAAABQgBAAAAAAQgCACgBABABEA5QgBACgCACQgBABgBAAAA/A/QgCACgCABIgBABQgBABgBABIAAAAQgBAAAAABQgBABgBAAAA4BFQgCABgBABQgBABgBABAg/g9QABAAAAgBAg/g9IAAAAQABAAAAgBAgyhIQgCABgCACIAAAAQgBABgBABQgCACgDACQAAABgBAAAhDg4QABgCACgCQABAAAAgBAg0BJQgFgEgFgEAgwBJQgCgCgCgBQgFgEgEgEQgBgBAAgBQgDgCgCgD");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ76, new cjs.Rectangle(-8.3,-8.8,16.6,17.7), null);


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(3,1,1).p("AAuhOQAIAFAHAGQACACACACQAHAHAEAHABMA2QgEAHgHAHQgCACgCACQgFAEgEADAhLgyQAEgHAGgGQAJgIAJgGAg0BPQgHgFgGgGQgGgGgEgH");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ74, new cjs.Rectangle(-9.1,-9.3,18.3,18.7), null);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5.4,1,1).p("ACDjgQAWANAVASQAGAGAGAGQATASAOAVADbCbQgOAUgTASQgGAGgGAGQgNALgNAJAjaiSQANgSARgRQAZgZAcgRQABgBABAAAiWDhQgUgOgSgSQgRgRgNgS");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ69, new cjs.Rectangle(-24.5,-25.2,49.2,50.4), null);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgZAiQgPAAgMgEQgNgGgKgIQgKgIgFgLQgGgOAAgQIA8AAQAAAJAGAGQAHAIAIgBIAgAAQAIABAHgIQAHgHAAgIIA6AAQAAAQgFAOQgFALgKAIQgKAIgNAGQgMAEgPAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(-9.7,-3.4,19.5,6.8), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA+BoIAAi0IAAgHIABgUIBWAAIAADPgAiUBoIAAjPIBXAAIAAAUQgBAUgEAZIABAAQAJgYALgVIAJgRIACgDIBVAAIgLAUIgBACIhkC5g");
	this.shape.setTransform(0,9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AA/AGIABgLIBVAAIAAALgAgiAGIAHgLIBTAAIgFALgAiUAGIAAgLIBXAAIAAALg");
	this.shape_1.setTransform(0,-2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("ABABUIAAgCIABgFIACgPIgCAAIgGAPIgCAFIgBACIhTAAIBZinIBXAAIAACngAiUBUIAAinIBXAAIAACng");
	this.shape_2.setTransform(0,-11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(-14.9,-19.4,29.9,38.9), null);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABTBoIgPhBIiIAAIgOBBIheAAIA0jPIBaAAIgPA/IBjAAIgOg/IBaAAIAzDPg");
	this.shape.setTransform(0,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AAkAGIgDgLIBaAAIADALgAh9AGIADgLIBaAAIgCALg");
	this.shape_1.setTransform(0,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAhBXIgUhYQgCgLgLAAQgKAAgCALIgUBYIhaAAIAdhxQAEgPAHgMQAIgMAMgHQAMgHAQgEQAPgDATAAQATAAAQADQAQAEALAHQAMAHAIAMQAIAMAEAPIAdBxg");
	this.shape_2.setTransform(0,-11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ57, new cjs.Rectangle(-17.7,-19.7,35.4,39.5), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA4BoIAAjPIBdAAIAADPgAiUBoIAAjPIBdAAIAADPg");
	this.shape.setTransform(0,9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AA4BUIAAhXIhvAAIAABXIhdAAIAAinIEpAAIAACng");
	this.shape_1.setTransform(0,-11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AA4AGIAAgLIBdAAIAAALgAiUAGIAAgLIBdAAIAAALg");
	this.shape_2.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(-14.9,-19.4,29.9,38.9), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguBmQgVgEgSgHQgQgHgNgLQgOgJgKgPQgJgNgIgQQgGgPgFgSQgEgWgDgxIAAgHIAAgNIBdAAIgBANIABAHQABA0AKAVQAJARAPAJQASAKAbAAQAbAAAUgKQAOgJAKgRQAKgVACg0IAAgHIgBgNIBcAAIAAANIAAAHQgDAxgFAWQgEASgFAPQgIAQgJANQgKAPgOAJQgNALgRAHQgRAHgUAEQgYADgZAAQgYAAgWgDg");
	this.shape.setTransform(0,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("ABSAGIgBgLIBcAAIABALgAitAGIABgLIBdAAIgBALg");
	this.shape_1.setTransform(0,-1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("ABRBWIgBgRQgCgXgIgPQgJgSgQgJQgRgIgcAAQgaAAgRAIQgRAJgIASQgHAPgDAXIgBARIhdAAIAAgCIABgFQACgUADgaQAFgSAGgPQAIgQAJgNQAKgNAOgKQANgLARgHQARgHAVgEQAWgEAYAAQAZAAAXAEQAUAEASAHQARAHAMALQAOAKAKANQAJANAIAQQAGAPAEASIAHAuIAAAFIAAACg");
	this.shape_2.setTransform(0,-11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(-17.4,-19.8,34.8,39.6), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AikBpIAAhQQAQAAAJgFQAJgEAFgJQAJgNADgdIAFgyIACgUIBWAAIgCAUQgHBEgEASQgHAggIATQgKAUgNAMQgPAMgWAFQgSAFgbAAIgLgBgABIBmIAAjPIBdAAIAADPg");
	this.shape.setTransform(0,9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAqBUIAAhXIhTAAIgHBQIAAAFIAAACIhWAAIAAgCIABgFIAMigIEBAAIAACng");
	this.shape_1.setTransform(2.9,-11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AArAGIAAgLIBdAAIAAALgAiHAGIABgLIBXAAIgCALg");
	this.shape_2.setTransform(2.9,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(-16.5,-19.6,33,39.2), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjRBqIgFg7IiOAAIgEA7IhCAAIAAh3QAKAAAIgFQAHgEAEgIQAFgKAEgaIAFgnIBEAAQgIBHgJAVIBcAAIAAhcIBGAAIAABcIAaAAIAAB3gAIdAvQgQgDgOgFQgMgGgKgIQgLgHgHgLQgHgJgGgMQgFgMgEgOQgEgSgBgqIAAgFIBHAAIAAAFQAAAtAIAQQAHAOAMAHQANAIAWAAQAVAAAOgIQAMgHAHgOQAIgQABgtIAAgFIBFAAIAAAFQgBAqgEASQgDAOgFAMQgFAMgHAJQgIALgLAHQgKAIgMAGQgOAFgPADQgSADgTAAQgTAAgRgDgApuAvQgRgDgNgFQgNgGgKgIQgKgHgIgLQgHgJgFgMQgGgMgDgOQgEgSgCgqIAAgFIBIAAIgBAFQABAtAIAQQAHAOAMAHQANAIAVAAQAVAAAPgIQALgHAHgOQAIgQABgtIAAgFIBGAAIAAAFQgCAqgEASQgDAOgEAMQgGAMgHAJQgIALgKAHQgKAIgNAGQgNAFgQADQgRADgUAAQgTAAgQgDgAOVAvIgVhLQgHgXgLgKQgKgLgQAAIgXAAIAAB3IhHAAIAAiYICrAAQAQARAOAjIAlBkgAC5AvIAAiYIDbAAQgFAPgJAKQgHAJgKAGQgIAHgLAEQgVAIgYAAIg1AAIAABdgABOAvIgMgwIhoAAIgKAwIhIAAIAmiYIBFAAIgKArIBMAAIgKgrIBFAAIAlCYgAtHAvIAAiYIBHAAIAACYgAvjAvIAAiYIBGAAIAACYg");
	this.shape.setTransform(0,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AMYAMIAAgXICkAAIgHAMQAHADAHAIgAKhAMIgBgXIBFAAIACAXgAHdAMIACgXIBHAAIgBAXgADbAMIAAgXIBHAAIAAAUIA0AAQASAAAHgJQAEgDACgIIBHAAIgEARIgCAGgABNAMIgGgXIBEAAIAGAXgAgwAMIAGgXIBDAAIgGAXgAjPAMIAAgXIBHAAIAAAXgAldAMIACgXIBFAAIgDAXgAnqAMIgCgXIBGAAIABAXgAquAMIABgXIBHAAIgBAXgAsmAMIAAgXIBIAAIAAAXgAvCAMIAAgXIBHAAIAAAXg");
	this.shape_1.setTransform(-3.3,-4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CCFF").s().p("AL5A+IAAh3IBGAAIAAB1IAXAAIA9h1IBPAAIhFB3gAKAA+IAAgEQgBgRgGgMQgHgNgNgIQgNgHgVAAQgUAAgOAHQgNAIgFANQgGAMgCARIAAAEIhIAAIAEggQAFgOAEgLQAGgMAHgJQAIgLAKgIQAKgHANgGQANgFARgEQAQgDATAAQAUAAAQADQAQAEANAFQANAGAKAHQAKAIAIALQAHAJAGAMQAFALADAOIAEAggAFVA+QACgHAAgMQAAgKgCgGQgCgJgGgHQgIgHgOAAIg1AAIAAA6IhHAAIAAh3IB8AAQAXAAASAIQAUAHANAOQAPANAHATQAHASAAAVQAAAKgCAJgAAoA+IgOg7QgBgIgJAAQgHAAgCAIIgMA7IhFAAIAUhNQADgMAFgJQAHgJAJgFQAJgGALgDQAMgCAOAAQAPAAAMACQAMADAJAGQAJAFAGAJQAGAJADAMIAUBNgAjuA+IAAg6IhCAAIgFA6IhFAAQAFgzADhEIDLAAIAAB3gAoLA+IgBgEQgBgRgGgMQgHgNgMgIQgNgHgWAAQgUAAgOAHQgMAIgGANQgGAMgCARIAAAEIhHAAIAEggQAEgOAFgLQAGgMAGgJQAIgLAKgIQALgHANgGQAMgFARgEQARgDASAAQAUAAAQADQAQAEANAFQAOAGAJAHQAKAIAIALQAHAJAGAMQAFALADAOIAFAggAtFA+IAAg6IhVAAIAAA6IhHAAIAAh3IDjAAIAAB3g");
	this.shape_2.setTransform(-0.2,-11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-99.6,-18,199.3,36), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AK7BMIAAiIIABgQIBCAAIAACYgAIbBMIAAiYIBCAAQgBAUgDAYIACAAQAJgYAKgUIBCAAIgGALIhNCNgAERBMIAAiYIDbAAQgFAPgJAKQgIAJgKAHQgIAGgLAEQgVAJgYAAIg1AAIAABcgACFBMQgaABgVgIQgTgGgOgNQgNgMgGgRQgHgPAAgRIAAhBIC0AAIAAAkIhuAAIAAAYQAAANAKAIQAKALAQgBIBcAAIAAA9gAjoBMIAAiYIDMAAQAIAKAEAMQAIASgBAWQAAAUgHARQgHASgPAMQgNALgSAHQgSAFgWAAgAihAPIA0AAQAQABAHgJQAIgHgBgQQAAgRgHgHQgHgGgQgBIg0AAgAlTBMIgMgxIhpAAIgKAxIhIAAIAmiYIBFAAIgKArIBNAAIgKgrIBFAAIAlCYgAr9BMIAAg9IBkAAQARABAHgJQAHgHAAgPQAAgOgIgGQgIgJgRABIhLAAIAAghICLAAIgBABQAJAEAHAGQAHAHAGAHQAFAJADALQADALAAAMQAAAVgHAQQgIAQgNALQgOALgTAEQgSAGgWgBg");
	this.shape.setTransform(0,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AKwAMQAAgMADgLIBAAAIAAAXgAJjAMIABgDIALgUIBAAAIgLAXgAIPAMIAAgXIBCAAIAAARIAAAGgAEFAMIAAgXIBHAAIAAAUIA0AAQASAAAGgJQAFgDACgIIBHAAIgFAQIgBAHgAAQAMIAAgXIC0AAIAAAXgAjzAMIAAgXICoAAQAQAGALAJIAIAIgAmBAMIgGgXIBEAAIAGAXgAn/AMIAGgXIBDAAIgFAXgAryAMIAAgXICiAAIgCACQgHAMgOAJg");
	this.shape_1.setTransform(1.2,-1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CCFF").s().p("AK+A+IABgIIgBAAIgDAIIhAAAIBAh3IBDAAIAAB3gAIbA+IAAh3IBCAAIAAB3gAGqA+QACgHAAgMQAAgKgBgGQgDgJgGgHQgIgHgOAAIg1AAIAAA6IhGAAIAAh3IB7AAQAXAAATAIQASAHAOAOQAPANAHATQAHASAAAVQAAAKgCAJgAAbA+IAAghQAAgRAGgOQAGgQANgMQANgMAUgIQAUgHAcAAIBcAAIAAA9IhcAAQgRAAgJAKQgKAKAAAQIAAAUIBuAAIAAACgAjoA+IAAh3IDNAAIAAA9IiGAAIAAAyIA0AAQAWAAATAGIAFACgAl7A+IgOg7QgBgIgJAAQgIAAgBAIIgOA7IhEAAIAUhNQADgMAFgJQAGgJAJgFQAKgGALgDQAMgCAPAAQAPAAAMACQAMADAJAGQAJAFAGAJQAGAJADAMIAUBNgArmA+IAAgCIBDAAQAPAAAJgIQAJgHAAgOQAAgPgIgGQgIgGgSAAIhZAAIAAg9IBgAAQAWAAATAGQASAFAMALQAOALAHAPQAGAQgBAWQAAASgJAPg");
	this.shape_2.setTransform(0,-8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(-76.6,-15.1,153.3,30.2), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKvBMIgWhNQgGgXgLgLQgLgLgPAAIgYAAIAAB6IhIAAIAAiWICzAAQANARANAeIAlBngAGQBMIAAiMIAAgKIBDAAIAACWgADtBMIAAiWIBCAAIgDAnIABAAQAHgWALgRIBCAAIgDAFIhPCRgAgiBMIAAiWIDcAAQgFAKgHAJQgIAKgKAHQgIAGgMAEQgVAJgYAAIg2AAIAABfgAiQBMIgMgzIhrAAIgKAzIhJAAIAliWIBHAAIgJAmIBOAAIgJgmIBGAAIAlCWgAr/BMIAAiWIBIAAIAABXIBUAAIAAhXIBJAAIAABXIBUAAIAAhXIBHAAIAACWg");
	this.shape.setTransform(0,7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCFF").s().p("AIQBEIAAiCIBIAAIAAB3IAXAAIA+h3IBRAAIhMCCgAGUBEIACgSIAAAAIgIASIhCAAIBGiCIBEAAIAACCgADvBEIAAiCIBDAAIAACCgAB4BEQAGgJAAgUQAAgKgBgHQgDgIgGgIQgIgGgPAAIg2AAIAABEIhHAAIAAiCIB9AAQAXAAAUAIQASAHAOAOQAQANAHAUQAHASAAAVQAAAPgDAOgAi0BEIgQhFQgCgIgIAAQgJAAgBAIIgPBFIhGAAIAWhYQADgMAGgJQAGgJAJgGQAJgFANgEQAMgCAPAAQAPAAAMACQANAEAIAFQAKAGAGAJQAGAJAEAMIAVBYgAnEBEIAAiCIBHAAIAACCgAphBEIAAiCIBJAAIAACCgAr8BEIAAiCIBIAAIAACCg");
	this.shape_1.setTransform(-0.2,-8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AItAKIAAgTICjAAIgDAEIAMAHIAHAIgAGwAKIAAgIIAAgHIABgEIBCAAIAAATgAFeAKIAFgIIAGgLIBCAAIgCAEIgEAHIgEAIgAEMAKIAAgTIBDAAIAAAJIAAACIAAAIgAgCAKIAAgTIBHAAIAAALIA3AAQAPAAAHgHIABgBIADgDIBKAAIgBAEIgBAEIgBADIgDAIgAiSAKIgFgTIBGAAIAFATgAkVAKIAFgTIBGAAIgFATgAmnAKIAAgTIBHAAIAAATgApDAKIAAgTIBIAAIAAATgArfAKIAAgTIBIAAIAAATg");
	this.shape_2.setTransform(-3.2,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-76.8,-15.4,153.6,30.8), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArQBNIAAg/QAMAAAHgEQAHgDAEgHQAHgJACgXIAFgsIBDAAQgGA5gEAQQgFAYgHAOQgHAQgKAJQgLAKgSAEQgNADgUAAIgKAAgAk8BKQgRgDgNgFQgNgGgKgIQgLgIgIgLQgHgKgGgNQgFgLgEgOQgEgSgBgrIBIAAQABAuAIARQAHANAMAGQAOAIAVAAQAWAAAOgIQAMgGAHgNQAIgRABguIBIAAQgCArgEASQgDAOgFALQgGANgHAKQgIALgKAIQgLAIgNAGQgNAFgQADQgSADgUAAQgTAAgRgDgAKNBKIAAiMIAAgKIBEAAIAACWgAHqBKIAAiWIBDAAIgEAoIABAAQAIgWAKgSIBDAAIgEAGIhOCQgAFpBKIAAh7IhgAAIAAB7IhIAAIAAiWIDvAAIAACWgABABKIAAiWIBIAAIAACWgAhfBKIAAiWIBIAAIAACWgAoYBKIAAiWIBIAAIAACWg");
	this.shape.setTransform(0,7.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AJ3AKIAAgIIABgHIAAgEIBDAAIAAATgAImAKIAEgIIAHgLIBBAAIgBAEIgEAHIgEAIgAHUAKIAAgTIBDAAIAAAJIAAACIAAAIgACrAKIAAgTIDvAAIAAATgAAqAKIAAgTIBIAAIAAATgAh1AKIAAgTIBIAAIAAATgAjuAKIgBgTIBIAAIAAAEIABAHIAAAIgAm1AKIAAgIIAAgHIABgEIBIAAIgBATgAouAKIAAgTIBIAAIAAATgAq6AKIABgIIAAgHIABgEIBCAAIAAAEIgBAHIAAAIg");
	this.shape_1.setTransform(2.2,-0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CCFF").s().p("AJ3BDIADgSIgBAAIgIASIhBAAIBGiCIBEAAIAACCgAHTBDIAAiCIBDAAIAACCgACqBDIAAiCIBIAAIAABzIBgAAIAAhzIBHAAIAACCgAApBDIAAhEIhXAAIAABEIhIAAIAAiCIDnAAIAACCgAjwBDIAAgOQgCgRgGgMQgHgOgNgHQgNgGgWAAQgVAAgNAGQgNAHgGAOQgGAMgCARIgBAOIhIAAQABgSADgYIAJgZQAGgNAHgJQAIgLALgIQAKgIAOgFQAMgGARgDQARgDATAAQAUAAARADQAQADAOAGQANAFAKAIQAKAIAIALQAIAJAFANQAGALADAOIAFAqgAovBDIAAhEIhCAAIgGBEIhCAAIAKiCIDIAAIAACCg");
	this.shape_2.setTransform(2.3,-8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-72.1,-15.4,144.3,30.8), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgcAcQgLgMAAgQQAAgPALgNQANgLAPAAQAQAAAMALQAMANAAAPQAAAQgMAMQgMAMgQAAQgPAAgNgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-4,-4,8,8), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("A6BaCMAAAg0DMA0DAAAMAAAA0Dg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("A7MbwMAAAg3fMA2ZAAAMAAAA3fg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ten();
	this.instance.parent = this;
	this.instance.setTransform(-46,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-46,-30,91,20), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#76372D").s().p("Ah7AbQgGgTAKgFQAJgEAVACQAUADAGAHQAGAJgMAKQgLAKgTADIgEABQgPAAgFgRgAAggDQgEgMAMgLQAMgMAXgDQAWgDAQADQAPADgCAKQgDAJgPAKQgPAJgNABIgcAEIgFAAQgLAAgEgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-12.6,-4.3,25.3,8.8), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nashare_03();
	this.instance.parent = this;
	this.instance.setTransform(-40.5,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-40.5,-49.5,81,99), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nashare_05();
	this.instance.parent = this;
	this.instance.setTransform(-55,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-55,-44,110,88), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nashare_08();
	this.instance.parent = this;
	this.instance.setTransform(-70.5,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-70.5,-40,141,80), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nashare_13();
	this.instance.parent = this;
	this.instance.setTransform(-52,-68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-52,-68.5,104,137), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nashare_16();
	this.instance.parent = this;
	this.instance.setTransform(-70,-95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-70,-95.5,140,191), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nashare_19();
	this.instance.parent = this;
	this.instance.setTransform(-33,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-33,-54,66,108), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nashare_22();
	this.instance.parent = this;
	this.instance.setTransform(-50.5,-91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-50.5,-91,101,182), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nashare_26();
	this.instance.parent = this;
	this.instance.setTransform(-42,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-42,-50,84,100), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nashare_28();
	this.instance.parent = this;
	this.instance.setTransform(-33,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-33,-41,66,82), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nashare_29_03();
	this.instance.parent = this;
	this.instance.setTransform(-60.5,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-60.5,-59,121,118), null);


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

	// Слой 1
	this.instance = new lib.Символ88();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.76,y:-11.2},5,cjs.Ease.get(1)).to({scaleY:1,y:0},5,cjs.Ease.get(1)).to({scaleY:0.76,y:-11.2},5,cjs.Ease.get(1)).to({scaleY:1,y:0},6,cjs.Ease.get(1)).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-21,33.8,33.8);


(lib.Символ85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ89();
	this.instance.parent = this;
	this.instance.setTransform(127.3,0.3,1.295,1.295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ86();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-43.7,-6.2,1.295,1.295);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ87();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-43.7,-4.9,1.295,1.295);
	this.instance_2.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_2.cache(-104,-13,207,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ85, new cjs.Rectangle(-177.5,-26.9,318.8,43.8), null);


(lib.Символ82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ81();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ82, new cjs.Rectangle(-101.4,-88.3,202.9,176.6), null);


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 77
	this.instance = new lib.Символ77();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:6.1},0).wait(1).to({rotation:12.2},0).wait(1).to({rotation:18.3},0).wait(1).to({rotation:24.4},0).wait(1).to({rotation:30.5},0).wait(1).to({rotation:36.6},0).wait(1).to({rotation:42.7},0).wait(1).to({rotation:48.8},0).wait(1).to({rotation:54.9},0).wait(1).to({rotation:61},0).wait(1).to({rotation:67.1},0).wait(1).to({rotation:73.2},0).wait(1).to({rotation:79.3},0).wait(1).to({rotation:85.4},0).wait(1).to({rotation:91.5},0).wait(1).to({rotation:97.6},0).wait(1).to({rotation:103.7},0).wait(1).to({rotation:109.8},0).wait(1).to({rotation:115.9},0).wait(1).to({rotation:122},0).wait(1).to({rotation:128.1},0).wait(1).to({rotation:134.2},0).wait(1).to({rotation:140.3},0).wait(1).to({rotation:146.4},0).wait(1).to({rotation:152.5},0).wait(1).to({rotation:158.6},0).wait(1).to({rotation:164.7},0).wait(1).to({rotation:170.8},0).wait(1).to({rotation:176.9},0).wait(1).to({rotation:183.1},0).wait(1).to({rotation:189.2},0).wait(1).to({rotation:195.3},0).wait(1).to({rotation:201.4},0).wait(1).to({rotation:207.5},0).wait(1).to({rotation:213.6},0).wait(1).to({rotation:219.7},0).wait(1).to({rotation:225.8},0).wait(1).to({rotation:231.9},0).wait(1).to({rotation:238},0).wait(1).to({rotation:244.1},0).wait(1).to({rotation:250.2},0).wait(1).to({rotation:256.3},0).wait(1).to({rotation:262.4},0).wait(1).to({rotation:268.5},0).wait(1).to({rotation:274.6},0).wait(1).to({rotation:280.7},0).wait(1).to({rotation:286.8},0).wait(1).to({rotation:292.9},0).wait(1).to({rotation:299},0).wait(1).to({rotation:305.1},0).wait(1).to({rotation:311.2},0).wait(1).to({rotation:317.3},0).wait(1).to({rotation:323.4},0).wait(1).to({rotation:329.5},0).wait(1).to({rotation:335.6},0).wait(1).to({rotation:341.7},0).wait(1).to({rotation:347.8},0).wait(1).to({rotation:353.9},0).wait(1).to({rotation:360},0).wait(1));

	// Символ 76
	this.instance_1 = new lib.Символ76();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:-12.2},0).wait(1).to({rotation:-24.4},0).wait(1).to({rotation:-36.6},0).wait(1).to({rotation:-48.8},0).wait(1).to({rotation:-61},0).wait(1).to({rotation:-73.2},0).wait(1).to({rotation:-85.4},0).wait(1).to({rotation:-97.6,y:-0.1},0).wait(1).to({rotation:-109.8},0).wait(1).to({rotation:-122},0).wait(1).to({rotation:-134.2},0).wait(1).to({rotation:-146.4},0).wait(1).to({rotation:-158.6},0).wait(1).to({rotation:-170.8},0).wait(1).to({rotation:-183.1},0).wait(1).to({rotation:-195.3},0).wait(1).to({rotation:-207.5},0).wait(1).to({rotation:-219.7},0).wait(1).to({rotation:-231.9},0).wait(1).to({rotation:-244.1},0).wait(1).to({rotation:-256.3},0).wait(1).to({rotation:-268.5},0).wait(1).to({rotation:-280.7,y:0},0).wait(1).to({rotation:-292.9},0).wait(1).to({rotation:-305.1},0).wait(1).to({rotation:-317.3},0).wait(1).to({rotation:-329.5},0).wait(1).to({rotation:-341.7},0).wait(1).to({rotation:-353.9},0).wait(1).to({rotation:-366.1},0).wait(1).to({rotation:-378.3},0).wait(1).to({rotation:-390.5},0).wait(1).to({rotation:-402.7},0).wait(1).to({rotation:-414.9},0).wait(1).to({rotation:-427.1},0).wait(1).to({rotation:-439.3},0).wait(1).to({rotation:-451.5,y:-0.1},0).wait(1).to({rotation:-463.7},0).wait(1).to({rotation:-475.9},0).wait(1).to({rotation:-488.1},0).wait(1).to({rotation:-500.3},0).wait(1).to({rotation:-512.5},0).wait(1).to({rotation:-524.7},0).wait(1).to({rotation:-536.9},0).wait(1).to({rotation:-549.2},0).wait(1).to({rotation:-561.4},0).wait(1).to({rotation:-573.6},0).wait(1).to({rotation:-585.8},0).wait(1).to({rotation:-598},0).wait(1).to({rotation:-610.2},0).wait(1).to({rotation:-622.4},0).wait(1).to({rotation:-634.6,y:0},0).wait(1).to({rotation:-646.8},0).wait(1).to({rotation:-659},0).wait(1).to({rotation:-671.2},0).wait(1).to({rotation:-683.4},0).wait(1).to({rotation:-695.6},0).wait(1).to({rotation:-707.8},0).wait(1).to({rotation:-720},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.9,-24.4,45.8,48.8);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ69();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ70, new cjs.Rectangle(-24.5,-25.2,49.2,50.4), null);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("AAuhOQAIAFAHAGQACACACACQAHAHAEAHABMA2QgEAHgHAHQgCACgCACQgFAEgEADAhLgyQAEgHAGgGQAJgIAJgGAg0BPQgHgFgGgGQgGgGgEgH");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.instance = new lib.Символ74();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance.cache(-11,-11,22,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ68, new cjs.Rectangle(-12.1,-12.3,28,28), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 58
	this.instance = new lib.Символ58();
	this.instance.parent = this;
	this.instance.setTransform(77.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.47,scaleY:0.62,y:11.9},18,cjs.Ease.get(0.9)).wait(3).to({scaleX:0.83,scaleY:1.28,y:-0.9},4).to({scaleX:1,scaleY:1,y:4.5},4).wait(40));

	// Символ 59
	this.instance_1 = new lib.Символ59();
	this.instance_1.parent = this;
	this.instance_1.setTransform(77.4,-20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:-38.1,x:77.5,y:11.8},18).wait(3).to({rotation:0,x:77.4,y:-10.3},0).to({y:-72.8},8,cjs.Ease.get(0.97)).wait(19).to({y:-8.1,alpha:0},0).to({y:-20.8,alpha:1},10,cjs.Ease.get(1)).wait(11));

	// Символ 57
	this.instance_2 = new lib.Символ57();
	this.instance_2.parent = this;
	this.instance_2.setTransform(40.2,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({scaleX:1.32,scaleY:0.9,x:34.6,y:6.3},15).wait(3).to({scaleY:1,y:4.2},0).to({scaleX:0.73,x:45},4,cjs.Ease.get(1)).to({scaleX:1,x:40.2},4,cjs.Ease.get(1)).wait(40));

	// Символ 56
	this.instance_3 = new lib.Символ56();
	this.instance_3.parent = this;
	this.instance_3.setTransform(2.9,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({regX:-0.1,scaleX:1.32,scaleY:0.79,x:-14.7,y:8.7},15).wait(4).to({regX:0,scaleY:1,x:-14.5,y:4.5},0).to({scaleX:0.73,x:17.9},4,cjs.Ease.get(1)).to({scaleX:1,x:2.9},4,cjs.Ease.get(1)).wait(40));

	// Символ 55
	this.instance_4 = new lib.Символ55();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-35.8,4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({scaleX:1.32,scaleY:0.79,x:-65.5,y:8.6},15).wait(5).to({scaleY:1,y:4.4},0).to({scaleX:0.73,x:-10.2},4,cjs.Ease.get(1)).to({scaleX:1,x:-35.8},4,cjs.Ease.get(1)).wait(40));

	// Символ 54
	this.instance_5 = new lib.Символ54();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-75.9,4.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:-0.1,scaleX:1.32,x:-118.5},15).wait(6).to({scaleX:0.73,x:-39.4},4,cjs.Ease.get(1)).to({regX:0,scaleX:1,x:-75.9},4,cjs.Ease.get(1)).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.4,-24.2,184.8,48.5);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-76.8,-15.4,153.6,30.8), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-72.1,-15.4,144.3,30.8), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance.cache(-6,-6,12,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-6,-6,16,16), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AmiAIIMjitIAiCeIsjCtg");
	var mask_graphics_1 = new cjs.Graphics().p("AmiAJIMjitIAiCcIsjCtg");
	var mask_graphics_2 = new cjs.Graphics().p("AmiAIIMjitIAiCdIsjCug");
	var mask_graphics_3 = new cjs.Graphics().p("AmiAJIMjiuIAiCeIsjCsg");
	var mask_graphics_4 = new cjs.Graphics().p("AmiAIIMjisIAiCcIsjCug");
	var mask_graphics_5 = new cjs.Graphics().p("AmiAJIMjiuIAiCeIsjCsg");
	var mask_graphics_6 = new cjs.Graphics().p("AmiAIIMjitIAiCdIsjCug");
	var mask_graphics_7 = new cjs.Graphics().p("AmiAJIMjitIAiCcIsjCtg");
	var mask_graphics_8 = new cjs.Graphics().p("AmiAIIMjitIAiCeIsjCtg");
	var mask_graphics_9 = new cjs.Graphics().p("AmiAJIMjitIAiCcIsjCtg");
	var mask_graphics_10 = new cjs.Graphics().p("AmiAIIMjitIAiCdIsjCug");
	var mask_graphics_11 = new cjs.Graphics().p("AmiAJIMjiuIAiCeIsjCsg");
	var mask_graphics_12 = new cjs.Graphics().p("AmiAIIMjisIAiCcIsjCug");
	var mask_graphics_13 = new cjs.Graphics().p("AmiAJIMjiuIAiCeIsjCsg");
	var mask_graphics_14 = new cjs.Graphics().p("AmiAIIMjitIAiCdIsjCug");
	var mask_graphics_15 = new cjs.Graphics().p("AmiAJIMjitIAiCcIsjCtg");
	var mask_graphics_16 = new cjs.Graphics().p("AmiAIIMjitIAiCeIsjCtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-1.8,y:-12.1}).wait(1).to({graphics:mask_graphics_1,x:-0.9,y:-9.5}).wait(1).to({graphics:mask_graphics_2,x:-0.1,y:-6.8}).wait(1).to({graphics:mask_graphics_3,x:0.8,y:-4.2}).wait(1).to({graphics:mask_graphics_4,x:1.7,y:-1.5}).wait(1).to({graphics:mask_graphics_5,x:0.8,y:-4.2}).wait(1).to({graphics:mask_graphics_6,x:-0.1,y:-6.8}).wait(1).to({graphics:mask_graphics_7,x:-0.9,y:-9.5}).wait(1).to({graphics:mask_graphics_8,x:-1.8,y:-12.1}).wait(1).to({graphics:mask_graphics_9,x:-0.9,y:-9.5}).wait(1).to({graphics:mask_graphics_10,x:-0.1,y:-6.8}).wait(1).to({graphics:mask_graphics_11,x:0.8,y:-4.2}).wait(1).to({graphics:mask_graphics_12,x:1.7,y:-1.5}).wait(1).to({graphics:mask_graphics_13,x:0.8,y:-4.2}).wait(1).to({graphics:mask_graphics_14,x:-0.1,y:-6.8}).wait(1).to({graphics:mask_graphics_15,x:-0.9,y:-9.5}).wait(1).to({graphics:mask_graphics_16,x:-1.8,y:-12.1}).wait(34));

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-4.3,25.3,8.8);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(-8.1,4.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-51.8,-49.5,92.3,99), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-55,-44,110,88), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-70.5,-40,141,80), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-52,-68.5,104,137), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(-8.6,-72.4,1,1,0,0,0,-8.6,-72.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-72.3,scaleX:0.91,scaleY:1.08,x:-1.1,y:-60.9},4,cjs.Ease.get(1)).to({regX:-8.5,regY:-72.4,scaleX:1.14,scaleY:1,x:-12.2,y:-84.7},5,cjs.Ease.get(1)).to({regX:-8.6,scaleX:1,x:-8.6,y:-72.4},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-95.5,140,191);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-33,-54,66,108), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-50.5,-91,101,182), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(0,-36.5,1,1,0,0,0,0,-36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,scaleY:0.88,rotation:-24.2,x:5.2,y:-44.9},4,cjs.Ease.get(1)).to({regX:0,scaleY:1,rotation:0,x:0,y:-36.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-50,84,100);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(8.2,-33.5,1,1,0,0,0,8.2,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:42,x:8.3},4,cjs.Ease.get(1)).to({rotation:0,x:8.2},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-41,66,82);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.58,scaleY:0.81,y:-12},4,cjs.Ease.get(1)).to({regX:0.1,scaleX:1.11,scaleY:1.12,skewX:-10.5,x:12,y:5.5},5,cjs.Ease.get(1)).to({regX:0,scaleX:1,scaleY:1,skewX:0,x:0,y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-59,121,118);


(lib.Символ24_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:658.2},254).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-329,-987,658,1316);


(lib.Символ83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 - копия
	this.instance = new lib.Символ84();
	this.instance.parent = this;
	this.instance.setTransform(-400,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({x:-390,y:31},9,cjs.Ease.get(1)).to({x:-400,y:41},10,cjs.Ease.get(1)).wait(21));

	// Слой 2 - копия: 2
	this.instance_1 = new lib.Символ84();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-440,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({x:-430,y:31},9,cjs.Ease.get(1)).to({x:-440,y:41},10,cjs.Ease.get(1)).wait(32));

	// Слой 2
	this.instance_2 = new lib.Символ84();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-480,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-470,y:31},9,cjs.Ease.get(1)).to({x:-480,y:41},10,cjs.Ease.get(1)).wait(41));

	// Слой 1
	this.instance_3 = new lib.Символ82();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-77.5,78.5,1,1,0,0,0,-77.5,78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-3.6,y:83.5},14,cjs.Ease.get(-1)).to({regX:-77.6,rotation:-7.7,y:88.6},15,cjs.Ease.get(1)).to({regY:78.7,rotation:-3.8,y:83.7},15,cjs.Ease.get(-1)).to({regX:-77.5,regY:78.5,rotation:0,y:78.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.4,-238.3,202.9,326.7);


(lib.Символ79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ78();
	this.instance.parent = this;
	this.instance.setTransform(-16.9,-13,1,1,0,0,0,-16.9,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:18.9,x:-5.1,y:4.8},0).wait(1).to({rotation:37.9,x:-11.5,y:7.6},0).wait(1).to({rotation:56.8,x:-18.5,y:8.3},0).wait(1).to({rotation:75.8,x:-25.4,y:6.6},0).wait(1).to({rotation:94.7,x:-31.3,y:2.8},0).wait(1).to({rotation:113.7,x:-35.6,y:-2.7},0).wait(1).to({rotation:132.6,x:-37.9,y:-9.4},0).wait(1).to({rotation:151.6,x:-38,y:-16.4},0).wait(1).to({rotation:170.5,x:-35.7,y:-23},0).wait(1).to({rotation:189.5,x:-31.4,y:-28.6},0).wait(1).to({rotation:208.4,x:-25.6,y:-32.5},0).wait(1).to({rotation:227.4,x:-18.8,y:-34.2},0).wait(1).to({rotation:246.3,x:-11.8,y:-33.7},0).wait(1).to({rotation:265.3,x:-5.3,y:-30.9},0).wait(1).to({rotation:284.2,x:-0.1,y:-26.2},0).wait(1).to({rotation:303.2,x:3.2,y:-20},0).wait(1).to({rotation:322.1,x:4.4,y:-13.1},0).wait(1).to({rotation:341.1,x:3.3,y:-6.2},0).wait(1).to({rotation:360,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.9,-24.4,45.8,48.8);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ68();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ72, new cjs.Rectangle(-12.1,-12.3,28,28), null);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ70();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ71, new cjs.Rectangle(-24.5,-25.2,49.2,50.4), null);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,6.9,0.838,0.838,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,rotation:-4.7,x:0,y:7},14,cjs.Ease.get(1)).to({rotation:10.3,y:7.1},30,cjs.Ease.get(1)).to({regX:-0.1,regY:-0.1,rotation:0,x:-0.1,y:6.9},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.4,-13.3,154.9,40.6);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 52
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(-13.9,-37.3,1,1,0,0,0,-99.6,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55).to({_off:false},0).to({y:2.7,alpha:1},4).to({x:34.1},7,cjs.Ease.get(1)).to({x:-13.9},7,cjs.Ease.get(1)).to({regY:0.1,scaleX:1.33,scaleY:1.33,x:-53.9,y:2.9},7,cjs.Ease.get(1)).to({regY:0,scaleX:1,scaleY:1,x:-13.9,y:2.7},7,cjs.Ease.get(1)).wait(1).to({x:34.1},7,cjs.Ease.get(1)).to({x:-13.9},7,cjs.Ease.get(1)).to({regY:0.1,scaleX:1.33,scaleY:1.33,x:-53.9,y:2.9},7,cjs.Ease.get(1)).to({regY:0,scaleX:1,scaleY:1,x:-13.9,y:2.7},7,cjs.Ease.get(1)).wait(1).to({y:-37.3,alpha:0},4,cjs.Ease.get(1)).wait(1));

	// Символ 51
	this.instance_1 = new lib.Символ51();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-30.9,-40.3,1,1,0,0,0,76.7,-0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55).to({_off:false},0).to({y:-0.3,alpha:1},4).to({scaleX:1.32,scaleY:1.32,x:17.1},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:-30.9},7,cjs.Ease.get(1)).to({x:-70.9},7,cjs.Ease.get(1)).to({x:-30.9},7,cjs.Ease.get(1)).wait(1).to({scaleX:1.32,scaleY:1.32,x:17.1},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:-30.9},7,cjs.Ease.get(1)).to({x:-70.9},7,cjs.Ease.get(1)).to({x:-30.9},7,cjs.Ease.get(1)).wait(1).to({y:-40.3,alpha:0},4,cjs.Ease.get(1)).wait(1));

	// Символ 49
	this.instance_2 = new lib.Символ49();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4,-0.2,1,1,0,0,0,-76.8,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:36},6,cjs.Ease.get(1)).to({x:4},7,cjs.Ease.get(1)).to({scaleX:1.32,scaleY:1.32,x:-36},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:4},7,cjs.Ease.get(1)).wait(1).to({x:36},6,cjs.Ease.get(1)).to({x:4},7,cjs.Ease.get(1)).to({scaleX:1.32,scaleY:1.32,x:-36},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:4},7,cjs.Ease.get(1)).to({y:37.4,alpha:0},4,cjs.Ease.get(1)).wait(58).to({y:-0.2,alpha:1},4,cjs.Ease.get(1)).wait(1));

	// Символ 48
	this.instance_3 = new lib.Символ48();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-13.3,0.1,1,1,0,0,0,72.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:0.1,scaleX:1.26,scaleY:1.26,x:18.7,y:0.3},6,cjs.Ease.get(1)).to({regY:0,scaleX:1,scaleY:1,x:-13.3,y:0.1},7,cjs.Ease.get(1)).to({x:-53.3},7,cjs.Ease.get(1)).to({x:-13.3},7,cjs.Ease.get(1)).wait(1).to({regY:0.1,scaleX:1.26,scaleY:1.26,x:18.7,y:0.3},6,cjs.Ease.get(1)).to({regY:0,scaleX:1,scaleY:1,x:-13.3,y:0.1},7,cjs.Ease.get(1)).to({x:-53.3},7,cjs.Ease.get(1)).to({x:-13.3},7,cjs.Ease.get(1)).to({y:37.7,alpha:0},4,cjs.Ease.get(1)).wait(58).to({y:0.1,alpha:1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.6,-15.5,315.2,31);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-157.6,-15.5,315.2,31), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 42
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(81.8,-145.7,0.887,0.887);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({alpha:1},6).to({alpha:0},7).wait(1));

	// Символ 42
	this.instance_1 = new lib.Символ42();
	this.instance_1.parent = this;
	this.instance_1.setTransform(58,-141,0.887,0.887);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({alpha:1},6).to({alpha:0},7).wait(10).to({alpha:1},6).to({alpha:0},7).to({_off:true},1).wait(2));

	// Символ 42
	this.instance_2 = new lib.Символ42();
	this.instance_2.parent = this;
	this.instance_2.setTransform(84.7,-127.6,0.887,0.887);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({alpha:1},6).to({alpha:0},7).wait(4).to({alpha:1},6).to({alpha:0},7).to({_off:true},1).wait(4));

	// Символ 42
	this.instance_3 = new lib.Символ42();
	this.instance_3.parent = this;
	this.instance_3.setTransform(68.1,-114.9,0.887,0.887);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},6).to({alpha:0},7).wait(10).to({alpha:1},6).to({alpha:0},7).to({_off:true},1).wait(6));

	// Символ 42
	this.instance_4 = new lib.Символ42();
	this.instance_4.parent = this;
	this.instance_4.setTransform(44.3,-110.2,0.887,0.887);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({alpha:1},6).to({alpha:0},7).wait(4).to({alpha:1},6).to({alpha:0},7).to({_off:true},1).wait(8));

	// Символ 42
	this.instance_5 = new lib.Символ42();
	this.instance_5.parent = this;
	this.instance_5.setTransform(95.9,-85.2,0.887,0.887);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({alpha:1},6).to({alpha:0},7).to({_off:true},1).wait(10));

	// Символ 42
	this.instance_6 = new lib.Символ42();
	this.instance_6.parent = this;
	this.instance_6.setTransform(79.3,-72.5,0.887,0.887);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(17).to({alpha:1},6).to({alpha:0},7).to({_off:true},1).wait(12));

	// Символ 42
	this.instance_7 = new lib.Символ42();
	this.instance_7.parent = this;
	this.instance_7.setTransform(55.5,-67.8,0.887,0.887);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({alpha:1},6).to({alpha:0},7).to({alpha:1},6).to({alpha:0},7).to({_off:true},1).wait(1));

	// Символ 42
	this.instance_8 = new lib.Символ42();
	this.instance_8.parent = this;
	this.instance_8.setTransform(32.1,-54.7,0.887,0.887);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(13).to({alpha:1},6).to({alpha:0},7).to({_off:true},1).wait(16));

	// Символ 42
	this.instance_9 = new lib.Символ42();
	this.instance_9.parent = this;
	this.instance_9.setTransform(124.8,-44.8);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(11).to({alpha:1},6).to({alpha:0},7).to({_off:true},1).wait(18));

	// Символ 42
	this.instance_10 = new lib.Символ42();
	this.instance_10.parent = this;
	this.instance_10.setTransform(96,-38.4);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(9).to({alpha:1},6).to({alpha:0},7).wait(4).to({alpha:1},6).to({alpha:0},7).to({_off:true},1).wait(3));

	// Символ 42
	this.instance_11 = new lib.Символ42();
	this.instance_11.parent = this;
	this.instance_11.setTransform(77.2,-24);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(7).to({alpha:1},6).to({alpha:0},7).to({_off:true},1).wait(22));

	// Символ 42
	this.instance_12 = new lib.Символ42();
	this.instance_12.parent = this;
	this.instance_12.setTransform(50.4,-18.8);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(5).to({alpha:1},6).to({alpha:0},7).to({_off:true},1).wait(24));

	// Символ 42
	this.instance_13 = new lib.Символ42();
	this.instance_13.parent = this;
	this.instance_13.setTransform(24,-4);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(3).to({alpha:1},6).to({alpha:0},7).wait(11).to({alpha:1},6).to({alpha:0},7).to({_off:true},1).wait(2));

	// Символ 42
	this.instance_14 = new lib.Символ42();
	this.instance_14.parent = this;
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({alpha:1},6).to({alpha:0},7).wait(9).to({alpha:1},6).to({alpha:0},7).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-151.2,140.8,161.3);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 - копия
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(-220.5,-0.1,0.654,0.654,-90,0,0,62.4,-72.8);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-289.2,32.5);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.bg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-334,-139,1.045,1.045);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 4
	this.instance_3 = new lib.bg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(612.7,-134.6,1.601,1.601,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-412,-623,1024.7,802.7), null);


(lib.Символ40 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ41();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.15,scaleY:1.15},6).to({scaleX:1.12,scaleY:1.12},3).wait(1).to({scaleX:1.15,scaleY:1.15},3).to({scaleX:1,scaleY:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-412,-623,1024.7,802.7);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(24.1,22.6,0.747,0.747,0,0,0,32.2,30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:30.3,scaleX:0.75,scaleY:0.75,rotation:-4.3,y:22.7},12,cjs.Ease.get(-1)).to({regY:30.2,scaleX:0.75,scaleY:0.75,rotation:-8.9,y:22.6},12,cjs.Ease.get(1)).to({regX:32.1,scaleX:0.75,scaleY:0.75,rotation:-4.8},12,cjs.Ease.get(-1)).to({regX:32.2,scaleX:0.75,scaleY:0.75,rotation:0},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.6,-36.9,68.9,73.9);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(-9.9,-60.3,0.747,0.747,0,0,0,-13.3,-39.6);

	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8.7,7.9,0.747,0.747,0,0,0,-11.7,-49.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-38.8,-81.9,77.6,163.9), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(8.5,-47.3,0.747,0.747,0,0,0,9.1,-32.6);

	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.3,9.9,0.747,0.747,0,0,0,10.7,-30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-26.3,-63.2,52.7,126.6), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(11.6,-46.4,1,1,0,0,0,11.6,-46.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:21,x:7.7,y:-44},4,cjs.Ease.get(1)).to({rotation:0,x:11.6,y:-46.4},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.3,-63.2,52.7,126.6);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(-10.4,-60,1,1,0,0,0,-10.4,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-21.2,x:-8,y:-60.4},4,cjs.Ease.get(1)).to({rotation:0,x:-10.4,y:-60},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.8,-81.9,77.6,163.9);


(lib.Символ80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ79();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ80, new cjs.Rectangle(-22.9,-24.4,45.8,48.8), null);


(lib.Символ75 = function(mode,startPosition,loop) {
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

	// Символ 77
	this.instance = new lib.Символ80();
	this.instance.parent = this;
	this.instance.setTransform(0.3,-0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ72();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ73, new cjs.Rectangle(-12.1,-12.3,28,28), null);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 73
	this.instance = new lib.Символ73();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-12.2},0).wait(1).to({rotation:-24.4},0).wait(1).to({rotation:-36.6},0).wait(1).to({rotation:-48.8},0).wait(1).to({rotation:-61},0).wait(1).to({rotation:-73.2},0).wait(1).to({rotation:-85.4},0).wait(1).to({rotation:-97.6},0).wait(1).to({rotation:-109.8},0).wait(1).to({rotation:-122},0).wait(1).to({rotation:-134.2},0).wait(1).to({rotation:-146.4},0).wait(1).to({rotation:-158.6},0).wait(1).to({rotation:-170.8},0).wait(1).to({rotation:-183.1},0).wait(1).to({rotation:-195.3},0).wait(1).to({rotation:-207.5},0).wait(1).to({rotation:-219.7},0).wait(1).to({rotation:-231.9},0).wait(1).to({rotation:-244.1},0).wait(1).to({rotation:-256.3},0).wait(1).to({rotation:-268.5},0).wait(1).to({rotation:-280.7},0).wait(1).to({rotation:-292.9},0).wait(1).to({rotation:-305.1},0).wait(1).to({rotation:-317.3},0).wait(1).to({rotation:-329.5},0).wait(1).to({rotation:-341.7},0).wait(1).to({rotation:-353.9},0).wait(1).to({rotation:-366.1},0).wait(1).to({rotation:-378.3},0).wait(1).to({rotation:-390.5},0).wait(1).to({rotation:-402.7},0).wait(1).to({rotation:-414.9},0).wait(1).to({rotation:-427.1},0).wait(1).to({rotation:-439.3},0).wait(1).to({rotation:-451.5},0).wait(1).to({rotation:-463.7},0).wait(1).to({rotation:-475.9},0).wait(1).to({rotation:-488.1},0).wait(1).to({rotation:-500.3},0).wait(1).to({rotation:-512.5},0).wait(1).to({rotation:-524.7},0).wait(1).to({rotation:-536.9},0).wait(1).to({rotation:-549.2},0).wait(1).to({rotation:-561.4},0).wait(1).to({rotation:-573.6},0).wait(1).to({rotation:-585.8},0).wait(1).to({rotation:-598},0).wait(1).to({rotation:-610.2},0).wait(1).to({rotation:-622.4},0).wait(1).to({rotation:-634.6},0).wait(1).to({rotation:-646.8},0).wait(1).to({rotation:-659},0).wait(1).to({rotation:-671.2},0).wait(1).to({rotation:-683.4},0).wait(1).to({rotation:-695.6},0).wait(1).to({rotation:-707.8},0).wait(1).to({rotation:-720},0).wait(1));

	// Символ 71
	this.instance_1 = new lib.Символ71();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:6.1},0).wait(1).to({rotation:12.2},0).wait(1).to({rotation:18.3},0).wait(1).to({rotation:24.4},0).wait(1).to({rotation:30.5},0).wait(1).to({rotation:36.6},0).wait(1).to({rotation:42.7},0).wait(1).to({rotation:48.8},0).wait(1).to({rotation:54.9},0).wait(1).to({rotation:61},0).wait(1).to({rotation:67.1},0).wait(1).to({rotation:73.2},0).wait(1).to({rotation:79.3},0).wait(1).to({rotation:85.4},0).wait(1).to({rotation:91.5},0).wait(1).to({rotation:97.6},0).wait(1).to({rotation:103.7},0).wait(1).to({rotation:109.8},0).wait(1).to({rotation:115.9},0).wait(1).to({rotation:122},0).wait(1).to({rotation:128.1},0).wait(1).to({rotation:134.2},0).wait(1).to({rotation:140.3},0).wait(1).to({rotation:146.4},0).wait(1).to({rotation:152.5},0).wait(1).to({rotation:158.6},0).wait(1).to({rotation:164.7},0).wait(1).to({rotation:170.8},0).wait(1).to({rotation:176.9},0).wait(1).to({rotation:183.1},0).wait(1).to({rotation:189.2},0).wait(1).to({rotation:195.3},0).wait(1).to({rotation:201.4},0).wait(1).to({rotation:207.5},0).wait(1).to({rotation:213.6},0).wait(1).to({rotation:219.7},0).wait(1).to({rotation:225.8},0).wait(1).to({rotation:231.9},0).wait(1).to({rotation:238},0).wait(1).to({rotation:244.1},0).wait(1).to({rotation:250.2},0).wait(1).to({rotation:256.3},0).wait(1).to({rotation:262.4},0).wait(1).to({rotation:268.5},0).wait(1).to({rotation:274.6},0).wait(1).to({rotation:280.7},0).wait(1).to({rotation:286.8},0).wait(1).to({rotation:292.9},0).wait(1).to({rotation:299},0).wait(1).to({rotation:305.1},0).wait(1).to({rotation:311.2},0).wait(1).to({rotation:317.3},0).wait(1).to({rotation:323.4},0).wait(1).to({rotation:329.5},0).wait(1).to({rotation:335.6},0).wait(1).to({rotation:341.7},0).wait(1).to({rotation:347.8},0).wait(1).to({rotation:353.9},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-25.2,49.2,50.4);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ61();
	this.instance.parent = this;
	this.instance.setTransform(0,-6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.19,scaleY:1.19},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.4,-20.2,154.9,40.6);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.parent = this;
	this.instance.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(-77.4,-13.3,154.9,40.6), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(12,8.5);

	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-35.4,-51.2,0.747,0.747,0,0,0,-34.5,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-50.7,-90.4,101.5,180.9), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(-32.1,5.6);

	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(42.2,-19.7,0.747,0.747,0,0,0,48.8,25.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-58.4,-68.8,116.9,137.8), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(41.1,-20,1,1,0,0,0,41.1,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-19.9,rotation:20.2,y:-19.9},4,cjs.Ease.get(1)).to({regY:-20,rotation:0,y:-20},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.4,-68.8,116.9,137.8);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(-36.8,-50,1,1,0,0,0,-36.8,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-50.1,rotation:-15,y:-50.1},4,cjs.Ease.get(1)).to({regY:-50,rotation:0,y:-50},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.7,-90.4,101.5,180.9);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// nashare_16.png
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(30.4,-27.1,0.747,0.747);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// nashare_03.png
	this.instance_1 = new lib.Символ35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.5,-113.6,1,1,0,0,0,-4.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// nashare_22.png
	this.instance_2 = new lib.Символ11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(46.1,-41.1,0.747,0.747);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// nashare_19.png
	this.instance_3 = new lib.Символ30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-9.6,39.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// nashare_13.png
	this.instance_4 = new lib.Символ29();
	this.instance_4.parent = this;
	this.instance_4.setTransform(80.8,70.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// nashare_29_03.png
	this.instance_5 = new lib.Символ5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(45.4,19.7,0.747,0.747,0,0,0,0.1,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-68.1,-150.5,199.7,311.9), null);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ63();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ64, new cjs.Rectangle(-24.5,-25.2,49.2,50.4), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(111.2,36.8,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:65.6},4,cjs.Ease.get(1)).to({y:36.8},10,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(142.7,144.9);
	this.instance_1.alpha = 0.121;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.66},4,cjs.Ease.get(1)).to({x:158.7,alpha:0.262},5,cjs.Ease.get(1)).to({x:142.7,alpha:0.129},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61.7,-72.6,145.2,226.7);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ64();
	this.instance.parent = this;
	this.instance.setTransform(-119.5,-5,1,1,0,0,0,-20.5,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:9.2,x:-100.1,y:3.2},0).wait(1).to({rotation:18.5,x:-101.7,y:6.2},0).wait(1).to({rotation:27.7,x:-103.7,y:9},0).wait(1).to({rotation:36.9,x:-106.2,y:11.3},0).wait(1).to({rotation:46.2,x:-109,y:13.2},0).wait(1).to({rotation:55.4,x:-112,y:14.7},0).wait(1).to({rotation:64.6,x:-115.3,y:15.7},0).wait(1).to({rotation:73.8,x:-118.6,y:16.1},0).wait(1).to({rotation:83.1,x:-122,y:16},0).wait(1).to({rotation:92.3,x:-125.4,y:15.3},0).wait(1).to({rotation:101.5,x:-128.5,y:14.1},0).wait(1).to({rotation:110.8,x:-131.5,y:12.4},0).wait(1).to({rotation:120,x:-134.1,y:10.3},0).wait(1).to({rotation:129.2,x:-136.4,y:7.7},0).wait(1).to({rotation:138.5,x:-138.2,y:4.9},0).wait(1).to({rotation:147.7,x:-139.5,y:1.7},0).wait(1).to({rotation:156.9,x:-140.4,y:-1.6},0).wait(1).to({rotation:166.2,x:-140.7,y:-4.9},0).wait(1).to({rotation:175.4,x:-140.4,y:-8.3},0).wait(1).to({rotation:184.6,x:-139.6,y:-11.6},0).wait(1).to({rotation:193.8,x:-138.3,y:-14.8},0).wait(1).to({rotation:203.1,x:-136.4,y:-17.6},0).wait(1).to({rotation:212.3,x:-134.2,y:-20.2},0).wait(1).to({rotation:221.5,x:-131.6,y:-22.3},0).wait(1).to({rotation:230.8,x:-128.6,y:-24},0).wait(1).to({rotation:240,x:-125.5,y:-25.3},0).wait(1).to({rotation:249.2,x:-122.1,y:-25.9},0).wait(1).to({rotation:258.5,x:-118.8,y:-26.1},0).wait(1).to({rotation:267.7,x:-115.4,y:-25.7},0).wait(1).to({rotation:276.9,x:-112.1,y:-24.7},0).wait(1).to({rotation:286.2,x:-109,y:-23.3},0).wait(1).to({rotation:295.4,x:-106.2,y:-21.4},0).wait(1).to({rotation:304.6,x:-103.8,y:-19},0).wait(1).to({rotation:313.8,x:-101.7,y:-16.3},0).wait(1).to({rotation:323.1,x:-100.2,y:-13.3},0).wait(1).to({rotation:332.3,x:-99.1,y:-10.1},0).wait(1).to({rotation:341.5,x:-98.5,y:-6.7},0).wait(1).to({rotation:350.8,y:-3.4},0).wait(1).to({rotation:360,x:-99,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.6,-25.2,49.1,50.4);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_111 = function() {
		this.stop();
	}
	this.frame_132 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(22).call(this.frame_111).wait(21).call(this.frame_132).wait(1));

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(69.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:29.9,y:18.8},6,cjs.Ease.get(1)).to({x:-69.6,y:28.8},8,cjs.Ease.get(-1)).wait(1).to({x:-104.8,y:18.8},6,cjs.Ease.get(1)).to({x:-192.8,y:8.8},8,cjs.Ease.get(-1)).wait(1).to({x:-227.3,y:18.8},6,cjs.Ease.get(1)).to({x:-313.6,y:28.8},8,cjs.Ease.get(-1)).wait(1).to({skewY:180,x:-39.2},0).to({x:-4.4,y:18.8},6,cjs.Ease.get(1)).to({x:82.4,y:8.8},8,cjs.Ease.get(-1)).wait(1).to({x:125.2,y:18.8},6,cjs.Ease.get(1)).to({x:232,y:28.8},8,cjs.Ease.get(-1)).wait(1).to({x:264,y:18.8},6,cjs.Ease.get(1)).to({x:344,y:8.8},8,cjs.Ease.get(-1)).wait(1).to({skewY:0,x:69.6},0).to({x:-313.6},20,cjs.Ease.get(1)).wait(1).to({skewY:180,x:-39.2},0).to({x:344},20,cjs.Ease.get(1)).wait(1).to({skewY:0,x:69.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(131.3,-63.8,145.2,226.7);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ65();
	this.instance.parent = this;
	this.instance.setTransform(-45,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-271.3,y:15.4},32,cjs.Ease.get(-1)).to({x:-533.1,y:33.1},37,cjs.Ease.get(1)).to({x:-282.1,y:16.1},36,cjs.Ease.get(-1)).to({x:-45,y:0},34,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.6,-25.2,49.1,50.4);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ66();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-56,y:184.1},50,cjs.Ease.get(1)).to({x:0,y:0},50,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.6,-25.2,49.1,50.4);


(lib.Символ36 = function(mode,startPosition,loop) {
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

	// Слой 7
	this.instance = new lib.Символ85();
	this.instance.parent = this;
	this.instance.setTransform(15.7,115.9,0.651,0.651,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.1,scaleX:0.52,x:-14.5,y:116},3).to({regY:0,scaleX:0.65,x:244.3,y:115.9},6).wait(1).to({regY:0.1,scaleX:0.52,x:-14.5,y:116},6).to({regY:0,scaleX:0.65,x:15.7,y:115.9},3).wait(1));

	// Слой 6
	this.instance_1 = new lib.Символ83();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49.5,186.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:52.3,alpha:1},9).wait(1).to({y:186.9,alpha:0},9).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ67();
	this.instance_2.parent = this;
	this.instance_2.setTransform(187.4,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-295,alpha:0},9,cjs.Ease.get(1)).wait(1).to({y:-115,alpha:1},9).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ60();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-197.3,-248.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-71.6},6).to({y:-138.6},3).wait(1).to({y:-71.6},3).to({y:-248.1},6).wait(1));

	// Слой 3
	this.instance_4 = new lib.Символ45();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-196.6,-121.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-197.8,y:-83.2},3).to({x:-200.1,y:-249.5},6).wait(1).to({x:-197.8,y:-83.2},6).to({x:-196.6,y:-121.5},3).wait(1));

	// Слой 1
	this.dama = new lib.Символ3();
	this.dama.parent = this;
	this.dama.setTransform(-203.8,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.dama).to({regX:-0.1,regY:-0.1,scaleX:1.37,scaleY:1.37,x:-204,y:-33.6},6).to({regX:0,regY:0,scaleX:1.23,scaleY:1.23,x:-203.8,y:-33.5},3).wait(1).to({regX:-0.1,regY:-0.1,scaleX:1.37,scaleY:1.37,x:-204,y:-33.6},3).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-203.8,y:-33.5},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-354.2,-261.4,505.1,536.6);


// stage content:
(lib.nashare640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 30/window.devicePixelRatio;
		this.fon.y = - stage.mouseY / 30/window.devicePixelRatio;
		}
		
		
		stage.canvas.style.cursor = "none";
		this.priz.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_11.bind(this));
		
		function fl_CustomMouseCursor_11() {
			this.priz.x = stage.mouseX/window.devicePixelRatio;
			this.priz.y = stage.mouseY/window.devicePixelRatio;
		}
		
		this.cursor = "none";
		
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
			_this.fon.gotoAndPlay(1);
			_this.priz.gotoAndStop(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(11);
			_this.fon.gotoAndPlay(11);
			_this.main.dama.gotoAndPlay(0);
			_this.priz.gotoAndStop(0);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.vlevo.addEventListener("mouseover", fl_MouseOverHandler_22);
		
		function fl_MouseOverHandler_22()
		{
			_this.main.dama.gotoAndPlay(91);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.vpravo.addEventListener("mouseover", fl_MouseOverHandler_21);
		
		function fl_MouseOverHandler_21()
		{
			_this.main.dama.gotoAndPlay(113);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.priz = new lib.Символ75();
	this.priz.parent = this;
	this.priz.setTransform(681.6,56.6);

	this.timeline.addTween(cjs.Tween.get(this.priz).wait(1));

	// Слой 3
	this.vlevo = new lib.Символ39();
	this.vlevo.parent = this;
	this.vlevo.setTransform(486.2,153.8);
	new cjs.ButtonHelper(this.vlevo, 0, 1, 2, false, new lib.Символ39(), 3);

	this.vpravo = new lib.Символ38();
	this.vpravo.parent = this;
	this.vpravo.setTransform(145.4,153.6);
	new cjs.ButtonHelper(this.vpravo, 0, 1, 2, false, new lib.Символ38(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.vpravo},{t:this.vlevo}]}).wait(1));

	// Слой 2
	this.instance = new lib.Символ24_1();
	this.instance.parent = this;
	this.instance.setTransform(319.5,-4.5);
	this.instance.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.main = new lib.Символ36();
	this.main.parent = this;
	this.main.setTransform(450.7,171,1,1,0,0,0,-65.7,0);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 4
	this.fon = new lib.Символ40();
	this.fon.parent = this;
	this.fon.setTransform(-14,-2.1,1,1,0,0,0,-334.4,-159.3);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

	// Actions
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("Egx/AX1MAAAgvpMBj/AAAMAAAAvpg");
	this.shape.setTransform(320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(228.4,-839,1024.7,1437.7);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/arr.png?1483018277171", id:"arr"},
		{src:"images/bg.jpg?1483018277171", id:"bg"},
		{src:"images/elk_2uu1.png?1483018277171", id:"elk_2uu1"},
		{src:"images/luk.png?1483018277171", id:"luk"},
		{src:"images/mish.png?1483018277171", id:"mish"},
		{src:"images/nashare_03.png?1483018277171", id:"nashare_03"},
		{src:"images/nashare_05.png?1483018277171", id:"nashare_05"},
		{src:"images/nashare_08.png?1483018277171", id:"nashare_08"},
		{src:"images/nashare_13.png?1483018277171", id:"nashare_13"},
		{src:"images/nashare_16.png?1483018277171", id:"nashare_16"},
		{src:"images/nashare_19.png?1483018277171", id:"nashare_19"},
		{src:"images/nashare_22.png?1483018277171", id:"nashare_22"},
		{src:"images/nashare_26.png?1483018277171", id:"nashare_26"},
		{src:"images/nashare_28.png?1483018277172", id:"nashare_28"},
		{src:"images/nashare_29_03.png?1483018277172", id:"nashare_29_03"},
		{src:"images/ten.png?1483018277172", id:"ten"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;