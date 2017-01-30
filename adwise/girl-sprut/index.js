(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.apteka = function() {
	this.initialize(img.apteka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,27);


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,656,410);


(lib.dim = function() {
	this.initialize(img.dim);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,29);


(lib.pila = function() {
	this.initialize(img.pila);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,431,242);


(lib.pilka = function() {
	this.initialize(img.pilka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,41);


(lib.rhand = function() {
	this.initialize(img.rhand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,107);


(lib.sloy10 = function() {
	this.initialize(img.sloy10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,44);


(lib.sloy11 = function() {
	this.initialize(img.sloy11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,60);


(lib.sloy12 = function() {
	this.initialize(img.sloy12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,31);


(lib.sloy13 = function() {
	this.initialize(img.sloy13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,45);


(lib.sloy14 = function() {
	this.initialize(img.sloy14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,46);


(lib.sloy15 = function() {
	this.initialize(img.sloy15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,61);


(lib.sloy16 = function() {
	this.initialize(img.sloy16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,63);


(lib.sloy17 = function() {
	this.initialize(img.sloy17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,55);


(lib.sloy18 = function() {
	this.initialize(img.sloy18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,51);


(lib.sloy19 = function() {
	this.initialize(img.sloy19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,197);


(lib.sloy21 = function() {
	this.initialize(img.sloy21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,99);


(lib.sloy3 = function() {
	this.initialize(img.sloy3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,92);


(lib.sloy4 = function() {
	this.initialize(img.sloy4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,182);


(lib.sloy5 = function() {
	this.initialize(img.sloy5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,63);


(lib.sloy6 = function() {
	this.initialize(img.sloy6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,126);


(lib.sloy7 = function() {
	this.initialize(img.sloy7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,41);


(lib.sloy8 = function() {
	this.initialize(img.sloy8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,34);


(lib.sloy9 = function() {
	this.initialize(img.sloy9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,53);// helper functions:

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


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dim();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-14.5,31,29);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dim();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-14.5,31,29);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(-328,-205);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328,-205,656,410);


(lib.Symbol69copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAJCgIABgCQAJAAAFgJQAGgIAAgKIgHg7Ig0AAIgFA6QAAALAGAGQAGAHANAEIAAACIhXAAIAAgCQAXgFADgZIAVj7QAAgPgFgGQgFgHgOgGIAAgCICMAAIAAACQgLAEgHAHQgHAIgCAMIAKBjQAMBoAIA0QACAOAFAFQAGAFAOAFQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAAAgAAUAoIgQinIgTAAIgLCnIAuAAg");
	this.shape.setTransform(161.1,28.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AA6DPIgBgMIgCgKIgCgKQgEgMgGgFIgMgIQgIgDgHABIhsAAIAAgGQAMgDAFgKQAEgKAAgOIAAjxQAAgMgEgIQgFgJgMgCIAAgFIBQAAIAAAFQgKAEgFAHQgHAHAAANIAAD6IA4AAIAAjqQAAgOgHgGQgGgGgLgCIAAgFIALgEIAMgHIALgJIAKgMIAIgKIAFgKIAFgBIAAE/QABALAGAIQAHAHATADIABAGIgGAHIgGAHIgGAKIgHAMIgEALIgCAMg");
	this.shape_1.setTransform(141.1,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhTCxIAAgEIAHgDIAHgGIAFgKQADgGAAgJIAAjZQgBgQgEgMQgEgMgNAAIAAgGIAHgDIAJgFIANgLIANgOIAHgKIAFgJIAFAAIAACoIAJgHIALgEIANgCQAOAAAOAFQANAFAKALQALALAGATQAHATAAAcQAAAagGATQgGATgLANQgLAMgQAFQgPAGgTAAgAgJARIgJAHIgGAKIAABqIAZAAQANAAAIgGQAJgFAFgJQAFgIACgNIABgbIgCgYQgCgLgFgHQgFgIgHgEQgHgFgLAAQgIAAgGAEg");
	this.shape_2.setTransform(120.2,26.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ag8C+IgCgBIAAgLIgBgLIgEgMIgGgLIgGgJIgIgGIAAgGIAKgBQAFABAEgEQAEgDAEgJQADgIADgRIAEgrIABhAQAAgwAEgdIAGgsQAGgSAFgGQgIgNgRAAIAAgGICMAAIAAAGQgJAAgEAFQgFAEgCAFIgCAMIAAAPIAADhIABANIADANIAGAKQAFAEAHACIAAAFIhRAAIABgDQALgHAEgKQAGgMAAgPIAAjwIgIAAQgIABgGAFQgGAFgDAQQgFAQgBAeIgEBPQgCBLgGAZQgHAmgHAWQgKAZgNALIgCgBg");
	this.shape_3.setTransform(101,31.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAJCgIABgCQAJAAAFgJQAGgIAAgKIgHg7Ig0AAIgFA6QAAALAGAGQAGAHANAEIAAACIhXAAIAAgCQAXgFADgZIAVj7QAAgPgFgGQgFgHgOgGIAAgCICMAAIAAACQgLAEgHAHQgHAIgCAMIAKBjQAMBoAIA0QACAOAFAFQAGAFAOAFQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAAAgAAUAoIgQinIgTAAIgLCnIAuAAg");
	this.shape_4.setTransform(80.8,28.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgfC4IgFgIIgFgJIgKgLQgLgKgLgGIgLgEIAAgGQAGAAAHgIQAHgIgBgRIAAjyQABgNgFgJQgEgJgNgDIAAgFICtAAIAAAFIgGADIgHAIIgGALIgCAMIAADzQABAMAEAJQAFAIALAFIAAAEIhQAAIAAgEQAVgJAAgaIAAj4Ig3AAIAAFQg");
	this.shape_5.setTransform(60.3,30.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AhBCkQgKgKgDgPIAAgTIACgWIAEgZIAogLIgIAXIgFAXIgCAZQAAAFACADIAGAEQAEABADgCQADgDABgGIAMg4IgmjWQgCgMgFgIQgHgIgJgDIAAgGIBOAAIAAAFQgKADgEAJQgEAJACAPIAUB2IAJg2IAEgVIADgUIACgPIABgJQADgRgEgIQgFgHgIgCIAAgGIBFAAIAAAGQgTADgIAjIgDAQIgHAfIgIApIgJAtIgJAtIgIApIgGAfIgDAQQgEANgIALQgIAKgOAAIgEABQgRAAgJgJg");
	this.shape_6.setTransform(41.4,29.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("ABpDPIgBgMIgCgKIgCgKQgEgMgGgFIgNgIQgGgDgIABIjLAAIAAgGQANgDAEgKQAFgKAAgOIAAjxQAAgMgFgIQgEgJgNgCIAAgFIBQAAIAAAFQgJAEgFAHQgHAHAAANIAAD6IA5AAIAAj6QAAgMgEgIQgFgJgMgCIAAgFIBPAAIAAAFQgJAEgGAHQgGAHAAANIAAD6IA4AAIAAjqQAAgOgGgGQgHgGgMgCIAAgFIAMgEIALgHIALgJIAMgMIAHgKIAGgKIAEgBIAAE/QABALAGAIQAHAHATADIABAGIgGAHIgGAHIgHAKIgHAMIgDALIgBAMg");
	this.shape_7.setTransform(17.2,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol69copy, new cjs.Rectangle(0,0,172.1,63.6), null);


(lib.Symbol69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAJCgIABgCQAJAAAFgJQAGgIAAgKIgHg7Ig0AAIgFA6QAAALAGAGQAGAHANAEIAAACIhXAAIAAgCQAXgFADgZIAVj7QAAgPgFgGQgFgHgOgGIAAgCICMAAIAAACQgLAEgHAHQgHAIgCAMIAKBjQAMBoAIA0QACAOAFAFQAGAFAOAFQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAAAgAAUAoIgQinIgTAAIgLCnIAuAAg");
	this.shape.setTransform(161.1,28.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA6DPIgBgMIgCgKIgCgKQgEgMgGgFIgMgIQgIgDgHABIhsAAIAAgGQAMgDAFgKQAEgKAAgOIAAjxQAAgMgEgIQgFgJgMgCIAAgFIBQAAIAAAFQgKAEgFAHQgHAHAAANIAAD6IA4AAIAAjqQAAgOgHgGQgGgGgLgCIAAgFIALgEIAMgHIALgJIAKgMIAIgKIAFgKIAFgBIAAE/QABALAGAIQAHAHATADIABAGIgGAHIgGAHIgGAKIgHAMIgEALIgCAMg");
	this.shape_1.setTransform(141.1,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhTCxIAAgEIAHgDIAHgGIAFgKQADgGAAgJIAAjZQgBgQgEgMQgEgMgNAAIAAgGIAHgDIAJgFIANgLIANgOIAHgKIAFgJIAFAAIAACoIAJgHIALgEIANgCQAOAAAOAFQANAFAKALQALALAGATQAHATAAAcQAAAagGATQgGATgLANQgLAMgQAFQgPAGgTAAgAgJARIgJAHIgGAKIAABqIAZAAQANAAAIgGQAJgFAFgJQAFgIACgNIABgbIgCgYQgCgLgFgHQgFgIgHgEQgHgFgLAAQgIAAgGAEg");
	this.shape_2.setTransform(120.2,26.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8C+IgCgBIAAgLIgBgLIgEgMIgGgLIgGgJIgIgGIAAgGIAKgBQAFABAEgEQAEgDAEgJQADgIADgRIAEgrIABhAQAAgwAEgdIAGgsQAGgSAFgGQgIgNgRAAIAAgGICMAAIAAAGQgJAAgEAFQgFAEgCAFIgCAMIAAAPIAADhIABANIADANIAGAKQAFAEAHACIAAAFIhRAAIABgDQALgHAEgKQAGgMAAgPIAAjwIgIAAQgIABgGAFQgGAFgDAQQgFAQgBAeIgEBPQgCBLgGAZQgHAmgHAWQgKAZgNALIgCgBg");
	this.shape_3.setTransform(101,31.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAJCgIABgCQAJAAAFgJQAGgIAAgKIgHg7Ig0AAIgFA6QAAALAGAGQAGAHANAEIAAACIhXAAIAAgCQAXgFADgZIAVj7QAAgPgFgGQgFgHgOgGIAAgCICMAAIAAACQgLAEgHAHQgHAIgCAMIAKBjQAMBoAIA0QACAOAFAFQAGAFAOAFQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAAAgAAUAoIgQinIgTAAIgLCnIAuAAg");
	this.shape_4.setTransform(80.8,28.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfC4IgFgIIgFgJIgKgLQgLgKgLgGIgLgEIAAgGQAGAAAHgIQAHgIgBgRIAAjyQABgNgFgJQgEgJgNgDIAAgFICtAAIAAAFIgGADIgHAIIgGALIgCAMIAADzQABAMAEAJQAFAIALAFIAAAEIhQAAIAAgEQAVgJAAgaIAAj4Ig3AAIAAFQg");
	this.shape_5.setTransform(60.3,30.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhBCkQgKgKgDgPIAAgTIACgWIAEgZIAogLIgIAXIgFAXIgCAZQAAAFACADIAGAEQAEABADgCQADgDABgGIAMg4IgmjWQgCgMgFgIQgHgIgJgDIAAgGIBOAAIAAAFQgKADgEAJQgEAJACAPIAUB2IAJg2IAEgVIADgUIACgPIABgJQADgRgEgIQgFgHgIgCIAAgGIBFAAIAAAGQgTADgIAjIgDAQIgHAfIgIApIgJAtIgJAtIgIApIgGAfIgDAQQgEANgIALQgIAKgOAAIgEABQgRAAgJgJg");
	this.shape_6.setTransform(41.4,29.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABpDPIgBgMIgCgKIgCgKQgEgMgGgFIgNgIQgGgDgIABIjLAAIAAgGQANgDAEgKQAFgKAAgOIAAjxQAAgMgFgIQgEgJgNgCIAAgFIBQAAIAAAFQgJAEgFAHQgHAHAAANIAAD6IA5AAIAAj6QAAgMgEgIQgFgJgMgCIAAgFIBPAAIAAAFQgJAEgGAHQgGAHAAANIAAD6IA4AAIAAjqQAAgOgGgGQgHgGgMgCIAAgFIAMgEIALgHIALgJIAMgMIAHgKIAGgKIAEgBIAAE/QABALAGAIQAHAHATADIABAGIgGAHIgGAHIgHAKIgHAMIgDALIgBAMg");
	this.shape_7.setTransform(17.2,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol69, new cjs.Rectangle(0,0,172.1,63.6), null);


(lib.Symbol68copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA/DNQgFgVgHgPQgHgPgNgFIAAgEQAMgFAHgHQAHgHAGgOIAwiMIgshyQgEgMgGgHQgIgHgIgBIAAgGIBQAAIAAAFIgHACIgGAEIgEAIQgBAFADAJIAnBjIANAAIAAhjQAAgPgGgGQgGgHgJAAIABgFIBOAAIAAAEQgKAEgFAHQgEAHgBALIAABjIAOAAIAmhjQAEgMgGgHQgFgHgGgCIAAgFIBMAAIAAAFQgFABgHAHQgHAGgEALIgsB1IAxCMIANASQAGAJANAGIAAAEQgLAEgJAPQgJAPgDAVIgFAAIhOjWIgOAAIAAB6QAAAJAFAIQAFAIAMADIAAAFIhQAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIABgDQAKgFAGgGQAEgGAAgLIAAh6IgNAAIhMDXgAlCCRIgCgCQAEgBAJgGQAMgJgBgNIAAjiQABgLgGgLQgGgMgKgCIAAAAIAAgDIAagTQAOgMAPgVQAAgBABAAQAAAAABAAQAAAAABAAQAAABAAAAIAAAmQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIALgHQAJgHANAAQASAAANAKQANAKAJAUQAOAeAAAoQAAASgDAQQgCAQgGANQgHAUgOAMQgOALgTACQgKABgNgGQgLgFgBgEIAABXQAEAQAHAFIANAJIAAACgAkEhvQgDALAAAhQAAAdADALQADAOAHAHQAGAGALAAQAMAAAJgHQAHgIADgQIADg0QgDgcgIgOQgIgOgOAAQgWAAgGAcgAiOCQIAAgFQAJgCAGgKQAHgJAAgKIAAj1QAAgWgagLIABgFICUAAQgEATgYAnIgGAAIgJgQQgEgHgJAAIgcAAIgBBpIA3AAIAUgPIACAAIAABBIgCAAIgJgJQgHgFgEAAIg4gBIAABtIAaAAQAZAAAKgTIACAAIAYA0IAAACg");
	this.shape.setTransform(32.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol68copy, new cjs.Rectangle(0,0,65,41), null);


(lib.Symbol68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AA/DNQgFgVgHgPQgHgPgNgFIAAgEQAMgFAHgHQAHgHAGgOIAwiMIgshyQgEgMgGgHQgIgHgIgBIAAgGIBQAAIAAAFIgHACIgGAEIgEAIQgBAFADAJIAnBjIANAAIAAhjQAAgPgGgGQgGgHgJAAIABgFIBOAAIAAAEQgKAEgFAHQgEAHgBALIAABjIAOAAIAmhjQAEgMgGgHQgFgHgGgCIAAgFIBMAAIAAAFQgFABgHAHQgHAGgEALIgsB1IAxCMIANASQAGAJANAGIAAAEQgLAEgJAPQgJAPgDAVIgFAAIhOjWIgOAAIAAB6QAAAJAFAIQAFAIAMADIAAAFIhQAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIABgDQAKgFAGgGQAEgGAAgLIAAh6IgNAAIhMDXgAlCCRIgCgCQAEgBAJgGQAMgJgBgNIAAjiQABgLgGgLQgGgMgKgCIAAAAIAAgDIAagTQAOgMAPgVQAAgBABAAQAAAAABAAQAAAAABAAQAAABAAAAIAAAmQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIALgHQAJgHANAAQASAAANAKQANAKAJAUQAOAeAAAoQAAASgDAQQgCAQgGANQgHAUgOAMQgOALgTACQgKABgNgGQgLgFgBgEIAABXQAEAQAHAFIANAJIAAACgAkEhvQgDALAAAhQAAAdADALQADAOAHAHQAGAGALAAQAMAAAJgHQAHgIADgQIADg0QgDgcgIgOQgIgOgOAAQgWAAgGAcgAiOCQIAAgFQAJgCAGgKQAHgJAAgKIAAj1QAAgWgagLIABgFICUAAQgEATgYAnIgGAAIgJgQQgEgHgJAAIgcAAIgBBpIA3AAIAUgPIACAAIAABBIgCAAIgJgJQgHgFgEAAIg4gBIAABtIAaAAQAZAAAKgTIACAAIAYA0IAAACg");
	this.shape.setTransform(32.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol68, new cjs.Rectangle(0,0,65,41), null);


(lib.Symbol61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF0000","#FFFFFF"],[0,1],0,6.6,0,-6.6).s().p("AgRC0IgHkoQAAgSgKgQQgMgUgTgBIAAgIICDAAIAAADIAAAFIgRAFQgKAEgGAKQgIANAAAZIgHEmg");
	this.shape.setTransform(6.6,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol61, new cjs.Rectangle(0,0,13.2,36), null);


(lib.Symbol60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMAkIgmgIIgJADIgGAFIgBgCIgBgCIAdg+QACgEADgCIABAFQAAASALAKQAKAIALAAQAMAAAKgIQALgKAAgSQAAgDABgCIAFAGIAdA+IgBADIAAABIgHgFQgEgDgKAAIgQAFIgeAEg");
	this.shape.setTransform(6.8,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol60, new cjs.Rectangle(0,0,13.6,7.5), null);


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF0000","#FFFFFF"],[0,1],0,12.5,0,-12.5).s().p("AgwEYIgRgZIgNgOIgOgKIgPgGIgRgEIAAgHQAPgDAHgOQAJgOAAgUIAAlVQAAgRgJgOQgKgNgMgEIAAgGIBxAAIAAAGQgJACgKALQgKAMAAAQIAAD3IBPjPIACgdQAAgLgEgHIgLgJIgOgEIAAgIIANgGIAdgTIAMgMIAWgdIAHAAIAAG6IABAOIAFAOIAJANQAFAGAKADIAAAIIhxAAIgBgDIABgEQALgDAKgKQAJgLgBgQIAAjbIhRDbIAABqg");
	this.shape.setTransform(12.5,28);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol59, new cjs.Rectangle(0,0,25,56), null);


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF2F2F").s().p("AgdABQAAgNAIgMQAHgMANAAQAPAAAHALQAJAMAAANQAAAPgJALQgIALgOAAQgcAAAAgkg");
	this.shape.setTransform(3,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol58, new cjs.Rectangle(0,0,6,7.5), null);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF0000","#FFFFFF"],[0,1],0,13.8,0,-13.7).s().p("AAMDjIACgEQANAAAIgMQAHgMAAgNIgJhUIhKgBIgIBSQAAAQAJAJQAJAKARAFIAAAEIh7AAIAAgEQAigGADgkIAelkQAAgUgHgJQgHgKgUgIIAAgEIDHAAIAAAEQgQAEgKALQgKAMgDARIAPCLQAQCUAMBKQADASAHAIQAIAIAUAGQABABAAABQAAAAgBABQAAAAAAABQgBAAgBAAgAAcA5IgXjtIgaABIgQDsIBBAAg");
	this.shape.setTransform(13.8,22.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol57, new cjs.Rectangle(0,0,27.5,45.4), null);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF0000","#FFFFFF"],[0,1],0,11.4,0,-11.4).s().p("AhxggQAAgmAEggQAFghAKgZQAOgmAYgSQAWgTAhAAQAPAAAOAFQAOAEAKALQAKAJAUAhQAPAaARAGIAAAGIhkA/QgEADAAgGQAAgGAMgVQAKgUABgNQAAgTgLgPQgKgPgSAAQg2AAAACSIAAAxQABA5AIAqQAQBIAjAAQAqABAAhJQAAgcgGgLIgWgjIAAgEIBTAkIABAVQABAdgFAYQgFAZgLATQgNAZgVANQgTAMgaAAQhwAAAAkMg");
	this.shape.setTransform(11.4,23.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol56, new cjs.Rectangle(0,0,22.8,47.2), null);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF0000","#FFFFFF"],[0,1],0,13.8,0,-13.7).s().p("AAMDjIACgEQANAAAIgMQAHgMAAgNIgJhUIhKgBIgIBSQAAAQAJAJQAJAKARAFIAAAEIh7AAIAAgEQAigGADgkIAelkQAAgUgHgJQgHgKgUgIIAAgEIDHAAIAAAEQgQAEgKALQgKAMgDARIAPCLQAQCUAMBKQADASAHAIQAIAIAUAGQABABAAABQAAAAgBABQAAAAAAABQgBAAgBAAgAAcA5IgXjtIgaABIgQDsIBBAAg");
	this.shape.setTransform(13.8,22.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol55, new cjs.Rectangle(0,0,27.5,45.4), null);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF0000","#FFFFFF"],[0,1],0,12.4,0,-12.3).s().p("AgtEFIgOgZIgNgPQgQgOgQgIIgQgHIAAgHQAJgCAKgKQAJgLgBgZIAAlXQABgSgGgNQgHgMgSgFIAAgGID2AAIAAAGIgJAFIgJALIgJAPIgDARIAAFZQABAQAGANQAHAMAQAGIAAAHIhxAAIAAgGQAcgNACglIAAleIhPAAIAAHag");
	this.shape.setTransform(12.4,26.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol54, new cjs.Rectangle(0,0,24.7,52.3), null);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF0000","#FFFFFF"],[0,1],0,11.4,0,-11.4).s().p("AhxggQAAgmAEggQAFghAKgZQAOgmAYgSQAWgTAhAAQAPAAAOAFQAOAEAKALQAKAJAUAhQAPAaARAGIAAAGIhkA/QgEADAAgGQAAgGAMgVQAKgUABgNQAAgTgLgPQgKgPgSAAQg2AAAACSIAAAxQABA5AIAqQAQBIAjAAQAqABAAhJQAAgcgGgLIgWgjIAAgEIBTAkIABAVQABAdgFAYQgFAZgLATQgNAZgVANQgTAMgaAAQhwAAAAkMg");
	this.shape.setTransform(11.4,23.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol53, new cjs.Rectangle(0,0,22.8,47.2), null);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.498)").s().p("AHKEGQgUgJgGgSQgPALgUAAQgVgBgOgMQgSACgbgJQglgLgJgBQgTgDgcAEIgwAHQgYACgegDIg2gHQhwgRiVgKIkGgMQjQgKmbgdIrXg0QgugDgHgXQgDgKAGgSQAGgVAAgIQgBgKgMgXQgLgVACgMQAEgVAdgJQAWgIAqgBIHqgVICogFQBLgCAkgKQAOgEAcgJQAZgHASACQANABAbAJQAaAJAOAAQARAAAegMQAfgMAQgBQASAAAmAPQAjAOAUgCQAWgDAVgUQALgKAWgeQArg4ApAIQAQADATARIAgAdQAaAUAjABQAjABAcgSIAVgNQANgGAKAFQAEACAFAGIAJAJQARAQAdgJQASgGAfgUQAWgPASABQALABAIAIQAIAJgCAKQAhAIAhgHQAjgIAagWIAPgMQAJgHAJgBQAKgDAMAFQAHADAPAIQBZAzBpALQAoAFAWgMQAIgEAMgJIATgPQAVgMAzgEQAxgDAWgNQAIgFAPgLQANgKAMgBQALAAANAHIAWAOQAeAUAhAFQAlAFAbgSIAagRQAPgJAMAEQAJADALAOQALAQAHAEQANAHAVgGIAigLQAXgFAdALQAQAGAhATQBAAkAmgVQAMgHAVgXQATgXAOgGQATgJAXAGQAUAFATAOQAJAGAZAVQAUASAOAIQAVAMAcAGQASAEAjADICqASQA9AHAmgBQAqgBAQACQAgAFAOAUQAIALACAQQABAJAAAUIgBCMQAAAegHAMQgKAPgWAGQgPAEgZAAIp8AAQgeAAgPADQgWAGgLACQgRAEgpgCQiMgHiQASIhpAMQg8AFgtgHQAIASgIAUQgIAUgSAHQgIAEgJAAQgKAAgLgGg");
	this.shape.setTransform(186.8,26.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol51, new cjs.Rectangle(0,0,373.7,53.5), null);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.498)").s().p("AsyDdQgUgOgQgoQgSgsgOgOQgWgXhHgNQhEgNgUgdQCVg6CWgdIBhgRIHbhQQA/gKAfAFIAUAEQAMABAIgCQALgDANgLIAWgSQAWgPAtADQA6AFAQgDIAZgHIAYgGQASgDAZAEIArAHQAmAFBNgFIDpgPIA/gDQBOgFAngGQAYgDAJACQAeAFAVAlQANAWAWAuQAMATAVATQANAMAbAUIBYBBQiBAjiEAfIibAkQhUATgtAIQhIANg7ABQguAAgWAHQgMAEgVALIghAQQgmAQhOgDQhTgEgjAMQgXAIgKAAQgJgBgMgGIgUgKQgjgPgkAMIgSAIQgLAEgIAAQgLABgOgFIgZgJQgngMglATIgVAMQgNAGgKgBQgLgBgTgOQgSgOgMAAQgMAAgSAPQgTAPgKACQgKACgPgEIgYgIQgTgFgeAHQgpAKgJAAQgPABgbgDQgdgEgNAAIhJAIIgSABQgeAAgSgNg");
	this.shape.setTransform(106.8,23.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol48, new cjs.Rectangle(0,0,213.7,46.8), null);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.498)").s().p("AMaEuQg/gChQgKQgmgEhogQQphhbpigzQg2gEgcgFQgsgIghgPQgzgYgigvQgjgtgIg4QgHgyAXgcIASgQQAMgKAFgIQAFgJADgSQAEgWACgGQAHgXAWgQQAUgOAagEQAlgFA9APQBHARDDA2QCoAvBkAVIBgATQA8AMAkAJQAxAMBMAXIB+AlQBhAcB9AbQBBAPCfAgQA4ALAYACQAtAFAkgFIAcgFQAQgBAMAGQAMAGAQAZIBPB/QAQAZgGAOQgHAQgeAEQhIAJhKAAIgVAAg");
	this.shape.setTransform(100,30.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(0,0,199.9,60.4), null);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.498)").s().p("A4DHzQgmgBgQgOQgLgLgEgUIgFgmQgEgugXgrQgJgPgCgHQgFgOADgKQACgIAJgJIAOgQQAHgKAHgYQAHgZAHgKQARgYAsgEIBLgGQAWgEAagMIAtgZQAngWBXgnIBdgqQAtgSAUgCQAOgCAtADQAlADAUgIQAQgGATgQIAggaQAcgTApgGQAfgGAsACQA+ACATgCQAtgDAegPIAYgOQAPgKAJgEQAVgJAsgFIHUg6IC+gYQBqgPBUgSQBKgPCRgjQB/gcEJgoQEFgoCDgeQBsgYAdgFQBOgNA9AFQAPACADAHQADAIgIALQgZAggxAkQg4AngaAWIgyAqQgdAZgYAMQgVAKgeAHIg1AKQhtAUhdAoQhNAkgoAPQghAMgyAMIhVAUQg7APhQAbIiKAwQiGAvieApQiLAkhFATQh3AhhUAjIhjArQg6AXgtAJIhHALQgrAHgaANQgOAGgaAQQgaARgOAHQgoAThMAGQhcAGgdAIQgRAEg0AVQgqAQgcAEQgTACglgBQgmgBgSACQgSADgaAHIgrAMQhOAVhlADIgmABQg4AAhYgEg");
	this.shape.setTransform(165.5,50.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,331.1,100.6);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("ABYC/IivAAIAAl9ICvAA");
	this.shape.setTransform(8.8,19.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(-1.5,-1.5,20.5,41.2), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("Ahai+IC1AAIAAF9IiuAA");
	this.shape.setTransform(9.1,19.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(-1.5,-1.5,21.1,41.2), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pila();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,431,242), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmQGwQA0hRBIg/QAygsBphBQB9hOA6gqQBXg+Alg+QAOgaANgiQAHgVAMgqIAjh/QAQg5AKgdQAQguATgjQAxhZBNgeQAIgDAHABQAJABABAHQABAJgQAGQg5AYglAxQgTAagQAlQgJAVgQAuQgiBigRBAIgTBFQgMAngNAcQgdA6g2A0QgtArhDArQgVAOhjA6QhKArgrAhQhMA6g6BNQg6BOgiBZQgOAlgVABQAahcA0hRg");
	this.shape.setTransform(47.9,60.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AnRJgQA0hBAhhZQAfhhA/hBQAvg0BphBQB+hNAbhKQAyhYA/ggQAvgFAQgeQAMgSAMgrIAjh/QAQg5AKgcQAQgvATgiQAxhaBNgeQAIgDAHABQAJACABAGQABAJgQAHQg5AYglAxQgTAZgQAlQgJAWgQAuQgiBigRBAIgTBEQgMAngjAOQguAkgzA1QgsAtgrA4QgKAihjA6QhKAsgtAmQhFA5ghBlQghBlg7A5QgRAZgUAAIgCAAg");
	this.shape_1.setTransform(49.2,60.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AnEJjQBOgmAOhgQAKhyA3hDQArg7BphBQB+hNgChoQAOh0BYgCQBPAPATgXQARgRAMgrIAjh/QAQg5AKgcQAQgvATgiQAxhaBNgeQAIgDAHABQAJACABAGQABAJgQAHQg5AYglAxQgTAZgQAlQgJAWgQAuQgiBigRBAIgTBEQgMAng4gBQhBANgvA3QgqAwgVBFQACA2hjA6QhKAsguAsQg/A3gIB9QgIB9hUAZQgRALgSAAIgIAAg");
	this.shape_2.setTransform(50.5,61.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Am3JlQBogLgFhnQgLiDAuhGQAphBBohBQB+hOgfiHQgYiOBzAcQBvAkAXgTQAVgPAMgqIAkh/QAQg5AJgdQAQguATgjQAyhZBMgeQAIgDAIABQAJABAAAHQABAJgQAGQg5AYglAxQgTAagPAlQgKAVgPAuQgiBigSBAIgTBFQgMAnhOgQQhSgJgrA3QgqA1ADBQQAOBLhjA6QhLArgwAxQg4A3ARCVQASCVhtgIIgSABQgQAAgOgDg");
	this.shape_3.setTransform(51.7,61.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Al2JtIg1gQQCDARgYhvQggiTAmhIQAlhIBohBQB+hOg9inQg8inCOA4QCNA5AbgNQAbgNALgqIAkh/QAQg5AJgdQAQguATgjQAyhZBMgeQAIgDAIABQAJABAAAHQABAJgQAGQg5AYglAxQgTAagPAlQgKAVgPAuQgiBigSBAIgTBFQgMAnhjggQhjgfgpA4QgoA5AZBdQAaBfhjA6QhLArgxA2QgyA3AqCsQAjCMhSAAQgTAAgZgIg");
	this.shape_4.setTransform(53,62.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.8,121);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.apteka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,34,27), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sloy18();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,76,51), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sloy21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,116,99), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sloy19();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,103,197), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sloy17();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,62,55), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sloy16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,59,63), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sloy14();
	this.instance.parent = this;
	this.instance.setTransform(106.1,0,1,0.99,0,-18.7,161.3);

	this.instance_1 = new lib.sloy14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(101.4,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,213.4,79.1), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sloy13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,103,45), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sloy12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,89,31), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sloy11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,177,60), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sloy8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,74,34), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sloy7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,78,41), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sloy6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,64,126), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sloy5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,53,63), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sloy4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,250,182), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(15.5,1.3,0.685,0.685);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.5,-37.5,1.2,1.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},52).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},18).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.7,scaleY:0.7,y:0.9},1).to({_off:true,scaleX:1.2,scaleY:1.2,y:-37.5,alpha:0},52).wait(1).to({_off:false,scaleX:0.23,scaleY:0.23,y:14.5,alpha:0.41},0).to({scaleX:0.67,scaleY:0.67,y:1.6,alpha:0.969},18).wait(1));

	// Слой 3
	this.instance_2 = new lib.Анимация1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(15.5,-12,0.866,0.866);

	this.instance_3 = new lib.Анимация2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(15.5,-37.5,1.2,1.2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},34).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},20).to({state:[{t:this.instance_2}]},17).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,scaleX:1.2,scaleY:1.2,y:-37.5,alpha:0},34).wait(1).to({_off:false,scaleX:0.23,scaleY:0.23,y:14.5,alpha:0.41},0).to({scaleX:0.7,scaleY:0.7,y:0.9,alpha:1},20).to({scaleX:0.86,scaleY:0.86,y:-11.6,alpha:0.672},17).wait(1));

	// Слой 2
	this.instance_4 = new lib.Анимация1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(15.5,-24.6,1.031,1.031);
	this.instance_4.alpha = 0.738;

	this.instance_5 = new lib.Анимация2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(15.5,-37.5,1.2,1.2);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},18).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},19).to({state:[{t:this.instance_4}]},34).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,scaleX:1.2,scaleY:1.2,y:-37.5,alpha:0},18).wait(1).to({_off:false,scaleX:0.23,scaleY:0.23,y:14.5,alpha:0.41},0).to({scaleX:0.7,scaleY:0.7,y:0.9,alpha:1},19).to({scaleX:1.03,scaleY:1.03,y:-24.3,alpha:0.34},34).wait(1));

	// Слой 1
	this.instance_6 = new lib.Анимация1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(15.5,14.5,0.232,0.232);
	this.instance_6.alpha = 0.852;

	this.instance_7 = new lib.Анимация2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(15.5,-37.5,1.2,1.2);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},20).to({state:[{t:this.instance_7}]},52).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:0.7,scaleY:0.7,y:0.9,alpha:1},20).to({_off:true,scaleX:1.2,scaleY:1.2,y:-37.5,alpha:0},52).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-39.5,32,57.4);


(lib.Symbol67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol69();
	this.instance.parent = this;
	this.instance.setTransform(86,31.8,1,1,0,0,0,86,31.8);

	this.instance_1 = new lib.Symbol69copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(86,31.8,1,1,0,0,0,86,31.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172.1,63.6);


(lib.Symbol66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol68();
	this.instance.parent = this;
	this.instance.setTransform(33.4,29.8,1,1,0,0,0,32.5,20.5);

	this.instance_1 = new lib.Symbol68copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33.4,29.8,1,1,0,0,0,32.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.9,9.3,65,41);


(lib.Symbol65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol66();
	this.instance.parent = this;
	this.instance.setTransform(87.3,31.8,1,1,0,0,0,33.9,31.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1,x:87.4},4,cjs.Ease.get(-1)).to({regX:34,scaleX:1.23,scaleY:1.23,x:87.5,y:31.9},5,cjs.Ease.get(1)).to({scaleX:1.12,scaleY:1.12,x:87.4},5,cjs.Ease.get(-1)).to({regX:33.9,scaleX:1,scaleY:1,x:87.3,y:31.8},5,cjs.Ease.get(1)).wait(1));

	// Symbol 67
	this.instance_1 = new lib.Symbol67();
	this.instance_1.parent = this;
	this.instance_1.setTransform(86,75.4,1,1,0,0,0,86,31.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:31.9,scaleX:0.95,scaleY:0.95,y:75.5},4,cjs.Ease.get(-1)).to({scaleX:0.88,scaleY:0.88},5,cjs.Ease.get(1)).to({scaleX:0.94,scaleY:0.94,x:86.1},5,cjs.Ease.get(-1)).to({regY:31.8,scaleX:1,scaleY:1,x:86,y:75.4},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,9.3,172.1,97.9);


(lib.Symbol63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol59();
	this.instance.parent = this;
	this.instance.setTransform(12.5,34.2,1,1,0,0,0,12.5,27.9);

	this.instance_1 = new lib.Symbol60();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12.5,3.7,1,1,0,0,0,6.8,3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol63, new cjs.Rectangle(0,0,25,62.2), null);


(lib.Symbol62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol58();
	this.instance.parent = this;
	this.instance.setTransform(7,41.5,1,1,0,0,0,3,3.7);

	this.instance_1 = new lib.Symbol61();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.6,17.9,1,1,0,0,0,6.6,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol62, new cjs.Rectangle(0,0,13.2,45.3), null);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol53();
	this.instance.parent = this;
	this.instance.setTransform(24.4,40.1,1,1,0,0,0,11.4,23.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:11.5,scaleY:1.01,skewX:-8.2,x:24.8,y:33.6},4).to({regX:11.4,scaleY:1,skewX:0,x:24.4,y:40.1},5).wait(25));

	// Layer 3
	this.instance_1 = new lib.Symbol54();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.9,43.5,1,1,0,0,0,12.3,26.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({regX:12.4,scaleY:1.01,skewX:-8.2,x:51.8,y:37},4).to({regX:12.3,scaleY:1,skewX:0,x:50.9,y:43.5},5).wait(21));

	// Layer 4
	this.instance_2 = new lib.Symbol55();
	this.instance_2.parent = this;
	this.instance_2.setTransform(80,40.1,1,1,0,0,0,13.8,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({scaleY:1.01,skewX:-8.2,x:80.3,y:33.6},4).to({scaleY:1,skewX:0,x:80,y:40.1},5).wait(17));

	// Layer 5
	this.instance_3 = new lib.Symbol56();
	this.instance_3.parent = this;
	this.instance_3.setTransform(106.3,40.1,1,1,0,0,0,11.4,23.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({regX:11.5,scaleY:1.01,skewX:-8.2,x:106.7,y:33.6},4).to({regX:11.4,scaleY:1,skewX:0,x:106.3,y:40.1},5).wait(13));

	// Layer 6
	this.instance_4 = new lib.Symbol57();
	this.instance_4.parent = this;
	this.instance_4.setTransform(132.9,40.1,1,1,0,0,0,13.8,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({scaleY:1.01,skewX:-8.2,x:133.2,y:33.6},4).to({scaleY:1,skewX:0,x:132.9,y:40.1},5).wait(9));

	// Layer 7
	this.instance_5 = new lib.Symbol62();
	this.instance_5.parent = this;
	this.instance_5.setTransform(181.8,40,1,1,0,0,0,6.6,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({scaleY:1.01,skewX:-8.2,x:182.1,y:33.5},4).to({scaleY:1,skewX:0,x:181.8,y:40},5).wait(5));

	// Layer 8
	this.instance_6 = new lib.Symbol63();
	this.instance_6.parent = this;
	this.instance_6.setTransform(160.2,37.6,1,1,0,0,0,12.5,31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({regX:12.6,scaleY:1.01,skewX:-8.2,y:31.1},4).to({regX:12.5,scaleY:1,skewX:0,y:37.6},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13,6.5,175.5,63.1);


(lib.Symbol50copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol51();
	this.instance.parent = this;
	this.instance.setTransform(186.8,26.8,1,1,0,0,0,186.8,26.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol50copy, new cjs.Rectangle(0,0,373.7,53.5), null);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol51();
	this.instance.parent = this;
	this.instance.setTransform(186.8,26.8,1,1,0,0,0,186.8,26.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,373.7,53.5);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol50();
	this.instance.parent = this;
	this.instance.setTransform(186.8,26.8,1,1,0,0,0,186.8,26.8);

	this.instance_1 = new lib.Symbol50copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(186.8,26.8,1,1,0,0,0,186.8,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol47copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol48();
	this.instance.parent = this;
	this.instance.setTransform(106.8,23.4,1,1,0,0,0,106.8,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol47copy, new cjs.Rectangle(0,0,213.7,46.8), null);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol48();
	this.instance.parent = this;
	this.instance.setTransform(106.8,23.4,1,1,0,0,0,106.8,23.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213.7,46.8);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol47();
	this.instance.parent = this;
	this.instance.setTransform(106.8,23.4,1,1,0,0,0,106.8,23.4);

	this.instance_1 = new lib.Symbol47copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(106.8,23.4,1,1,0,0,0,106.8,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol44copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol45();
	this.instance.parent = this;
	this.instance.setTransform(100,30.2,1,1,0,0,0,100,30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol44copy, new cjs.Rectangle(0,0,199.9,60.4), null);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol45();
	this.instance.parent = this;
	this.instance.setTransform(100,30.2,1,1,0,0,0,100,30.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199.9,60.4);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol44();
	this.instance.parent = this;
	this.instance.setTransform(100,30.2,1,1,0,0,0,100,30.2);

	this.instance_1 = new lib.Symbol44copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(100,30.2,1,1,0,0,0,100,30.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol40copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol42();
	this.instance.parent = this;
	this.instance.setTransform(165.5,50.3,1,1,0,0,0,165.5,50.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol40copy, new cjs.Rectangle(0,0,331.1,100.6), null);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol42();
	this.instance.parent = this;
	this.instance.setTransform(165.5,50.3,1,1,0,0,0,165.5,50.3);
	this.instance.alpha = 0;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,331.1,100.6);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol38();
	this.instance.parent = this;
	this.instance.setTransform(8.8,19.1,1,1,0,0,0,8.8,19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:15.3},4).to({x:8.8},5).wait(1));

	// Symbol 37
	this.instance_1 = new lib.Symbol37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(72.6,19.1,1,1,0,0,0,9.1,19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:66.1},4).to({x:72.6},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,84.6,41.2);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("AA7AAQAAAYgSARQgRASgYAAQgXAAgRgSQgRgRAAgYQAAgXARgSQARgRAXAAQAYAAARARQASASAAAXg");
	this.shape.setTransform(40.3,18.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Symbol 36
	this.instance = new lib.Symbol36();
	this.instance.parent = this;
	this.instance.setTransform(40.8,19.1,1,1,0,0,0,40.8,19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(-1.5,-1.5,84.6,41.2), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Layer 1
	this.instance = new lib.Symbol34();
	this.instance.parent = this;
	this.instance.setTransform(215.5,121,1,1,0,0,0,215.5,121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:123},0).wait(1).to({y:121},0).wait(1).to({y:123},0).wait(1));

	// Layer 2 copy 5
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(359.1,184.5,3.276,2.212,8.5,0,0,15.5,14.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(4));

	// Layer 2 copy 4
	this.instance_2 = new lib.Символ11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(359.1,184.5,3.276,2.212,8.5,0,0,15.5,14.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(4));

	// Layer 2 copy 3
	this.instance_3 = new lib.Символ11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(359.1,184.5,3.276,2.212,8.5,0,0,15.5,14.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(4));

	// Layer 2 copy 2
	this.instance_4 = new lib.Символ11();
	this.instance_4.parent = this;
	this.instance_4.setTransform(359.1,184.5,3.276,2.212,8.5,0,0,15.5,14.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,431,242);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol33();
	this.instance.parent = this;
	this.instance.setTransform(2.5,139.8,1,1,0,0,0,47.9,60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// rhand.png
	this.instance_1 = new lib.rhand();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-45.4,0,200.5,200.3), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
		this.pil.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AD6JGQhdgDg1ABIhhAEIgHAAQg1ABgkgCQhwgIhHgzIgagUQgQgMgMgFQgSgIgigDQgngDgOgEQgbgIgTgUIgCgCQgVgXAAgbIAAgTQgCgLgIgHQgJgJgRAAQgKgBgPAEIgZAIQgXAGgWgCQgZgCgRgOIgMgLQgHgHgHgDQgFgDgJAAQgJgBgMACQhIAHgvgIQhCgLgogmQgcgagDgdQgBgNAFgRQACgJAJgUIACgGIABAAQA3h/BIh8IAEgHQAdgyATgZIAsg1QAbggAMgYIAWguQANgZASgKQAIgEAPgEIAYgHQARgGAVgRIAigdQBZhMCdgOIAqgDIAEgDQAFgCAHgBIK2gmQB/gHBAACQB/AEBNApQAKAEABAGQAKAGAHAKQALAOAJAkIAaBuQAVBZAJAtQAMA9AIAzIAAAAIACAXQAMBegCB3QgBBHgJCPQgBAWgCALQgDASgIAMIgCADQgIAMgXAUQgaAVgSALIgLAGQgQAIgZAGIgqALQgWAGgjANIgcALIgbAKQg8AUhGAKIgMACQhBAIhRAAQgqAAhogDgAkgoBIA2gGIgJgBIgtAHg");
	var mask_graphics_4 = new cjs.Graphics().p("AD6JGQhdgDg1ABIhhAEIgHAAQg1ABgkgCQhwgIhHgzIgagUQgQgMgMgFQgSgIgigDQgngDgOgEQgbgIgTgUIgCgCQgVgXAAgbIAAgTQgCgLgIgHQgJgJgRAAQgKgBgPAEIgZAIQgXAGgWgCQgZgCgRgOIgMgLQgHgHgHgDQgFgDgJAAQgJgBgMACQhIAHgvgIQhCgLgogmQgcgagDgdQgBgNAFgRQACgJAJgUIACgGIABAAQA3h/BIh8IAEgHQAdgyATgZIAsg1QAbggAMgYIAWguQANgZASgKQAIgEAPgEIAYgHQARgGAVgRIAigdQBZhMCdgOIAqgDIAEgDQAFgCAHgBIK2gmQB/gHBAACQB/AEBNApQAKAEABAGQAKAGAHAKQALAOAJAkIAaBuQAVBZAJAtQAMA9AIAzIAAAAIACAXQAMBegCB3QgBBHgJCPQgBAWgCALQgDASgIAMIgCADQgIAMgXAUQgaAVgSALIgLAGQgQAIgZAGIgqALQgWAGgjANIgcALIgbAKQg8AUhGAKIgMACQhBAIhRAAQgqAAhogDgAkgoBIA2gGIgJgBIgtAHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:417.3,y:124.3}).wait(4).to({graphics:mask_graphics_4,x:417.3,y:124.3}).wait(9));

	// Symbol 30
	this.instance = new lib.Symbol30();
	this.instance.parent = this;
	this.instance.setTransform(401.5,123.5,1,1,0,0,0,77.5,53.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({regX:77.6,rotation:35.2,x:627,y:100.3},8,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.pil = new lib.Symbol31();
	this.pil.parent = this;
	this.pil.setTransform(215.5,121,1,1,0,0,0,215.5,121);

	this.timeline.addTween(cjs.Tween.get(this.pil).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,479,242);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmBsIAAgEQAIgBAFgDQAFgDADgFQAGgHgBgPIAAhzQAAgKgHgGQgHgFgMAAIAVgOQALgIAHgIIAJgLIAACwQAAAjAdAAIAAABIgBAAIAAADg");
	this.shape.setTransform(63.8,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAHBZIAAgBQALgCAAgLIAAgDIgQgnQgEAGgLAiIAAACQAAAHAKAGIAAABIg2AAIgBAAIAAAAIABgCQAFgBAEgEQAFgEAEgFQAahCAAgDIgZg4IgEgHQgHgIgHgBIAAgDIAyAAIAAADQgIAGAAAFIABADIANAhIAYhDIACAAQAEAIAIAMQAIAMAHAHIAAADQgPAAgGAJIgKAUQgJARABAEIAdBCIAGALQAEAEAGABIAAADg");
	this.shape_1.setTransform(46.7,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Symbol28();
	this.instance.parent = this;
	this.instance.setTransform(17,13.5,1,1,0,0,0,17,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(3,1,1).p("Ah+hjID9AAIAADHIj9AAg");
	this.shape_2.setTransform(16.4,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ah+BkIAAjIID9AAIAADIg");
	this.shape_3.setTransform(16.4,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,-4.9,68.9,41.8), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(328,205);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,656,410), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol26();
	this.instance.parent = this;
	this.instance.setTransform(328,205,1,1,0,0,0,328,205);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:316},5).to({x:328},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,656,410);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(39.6,37.6,1,1,0,0,0,39.6,37.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.06,y:36.8},4).to({scaleY:1,y:37.6},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,51);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 14
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(101.8,66.1,1,1,0,0,0,101.8,27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Symbol 13
	this.instance_1 = new lib.Symbol13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(208.1,50,1,1,-5.5,0,0,1.7,32.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:1.8,regY:33,rotation:1,y:50.1},4,cjs.Ease.get(-1)).to({regY:32.9,rotation:9.5,x:208.2,y:50},5,cjs.Ease.get(1)).to({regY:33,rotation:2},5,cjs.Ease.get(-1)).to({regX:1.7,regY:32.9,rotation:-5.5,x:208.1},5,cjs.Ease.get(1)).wait(1));

	// Symbol 12
	this.instance_2 = new lib.Symbol12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(303.1,15.6,1,1,16.7,0,0,1.9,25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,rotation:9.3,x:306,y:27.3},4,cjs.Ease.get(-1)).to({regX:2,regY:25.2,scaleX:1,scaleY:1,rotation:0.3,x:309.6,y:42},5,cjs.Ease.get(1)).to({rotation:8.3,x:306.4,y:28.8},5,cjs.Ease.get(-1)).to({regX:1.9,regY:25.1,rotation:16.7,x:303.1,y:15.6},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9,393.8,126.8);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol43();
	this.instance.parent = this;
	this.instance.setTransform(100.3,30.5,1,1,0,0,0,100,30.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol43(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.sloy15();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,201,61), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol46();
	this.instance.parent = this;
	this.instance.setTransform(106.8,25.4,1,1,0,0,0,106.8,23.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol46(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.sloy10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(233.1,44,1,1,178.5);

	this.instance_2 = new lib.sloy10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,233.1,49.6), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol49();
	this.instance.parent = this;
	this.instance.setTransform(186.9,30.1,1,1,0,0,0,186.8,26.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol49(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.sloy9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(449.9,8.2,1,0.981,0,2,-178);

	this.instance_2 = new lib.sloy9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,449.9,60.2), null);


(lib.Symbol64 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Symbol52();
	this.instance.parent = this;
	this.instance.setTransform(87.3,38.6,1,1,0,0,0,100.2,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-58.9},9).to({y:38.6},10).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol65();
	this.instance_1.parent = this;
	this.instance_1.setTransform(314.5,40.1,1,1,0,0,0,86,53.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:97.4},9).to({x:314.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4.2,400.5,97.9);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol40();
	this.instance.parent = this;
	this.instance.setTransform(165.5,50.3,1,1,0,0,0,165.5,50.3);

	this.instance_1 = new lib.Symbol40copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(165.5,50.3,1,1,0,0,0,165.5,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.pricel1 = new lib.Symbol35();
	this.pricel1.parent = this;
	this.pricel1.setTransform(40.9,18.9,1,1,0,0,0,40.8,19.1);

	this.timeline.addTween(cjs.Tween.get(this.pricel1).to({guide:{path:[40.9,19,38.8,17.8,36.3,16.2,35,15.4,31,12.6,14.3,0.9,0.5,-3.2,-8.1,-5.8,-16.5,-6.1,-25.5,-6.3,-33.5,-3.7,-41.9,-0.9,-48.4,4.9,-55.1,11,-57.9,18.9,-59.8,24.2,-60.1,31.2,-60.2,37.7,-58.7,43.3,-57,49.6,-53.3,54,-45.8,62.7,-30.8,64.7,-19.9,66.2,-8.2,64,2.6,62,13.3,57,23.6,52.2,30.4,46.2,34.3,42.7,38.4,37.6,40.8,34.6,45.5,28.1,55.3,14.2,60.8,7.8,70,-3.2,79.3,-9.7,90.3,-17.5,102.7,-20,116.2,-22.7,127.5,-18,131.4,-16.4,135.9,-13.4,138.2,-11.9,143.7,-7.9,150.5,-3.1,153.3,-0.3,160.8,7.1,163.5,18.9,165.9,29.5,163.8,41.1,161.8,51.7,156.9,57.3,152.2,62.7,142.5,66.1,125.7,71.7,107.6,67.5,89.5,63.3,76.8,50.9,69.6,42.9,65.9,39.1,62.1,35.3,58.4,32.9]}},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.7,84.6,41.2);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
		this.pilk.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer 1
	this.pilk = new lib.Symbol29();
	this.pilk.parent = this;
	this.pilk.setTransform(239.5,353,1,1,0,0,0,239.5,121);

	this.timeline.addTween(cjs.Tween.get(this.pilk).to({y:121},9).to({y:353},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,232,516.5,270.3);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 23
	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(49,94.5,1,1,0,0,0,38,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.1,160.4,1,1,0,0,0,61.1,160.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,103,197), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 10
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(142,61.9,1,1,0,0,0,74,33.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:11.5,x:141.7,y:62.3},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:26,x:141.2,y:62.8},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:12.8,x:141.6,y:62.4},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:142,y:61.9},5,cjs.Ease.get(1)).wait(1));

	// Symbol 8
	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(79.2,33.4,1,1,0,0,0,79.2,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-3.5,x:86.2,y:20.4},4,cjs.Ease.get(-1)).to({regX:79.4,regY:33.2,rotation:-8,x:94.6,y:3.7},5,cjs.Ease.get(1)).to({rotation:-4,x:87,y:18.6},5,cjs.Ease.get(-1)).to({regX:79.2,regY:33.4,rotation:0,x:79.2,y:33.4},5,cjs.Ease.get(1)).wait(1));

	// Symbol 3
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(224.9,73.1,1,1,0,0,0,224.9,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,449.9,103.1);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol41();
	this.instance.parent = this;
	this.instance.setTransform(318,50.7,1,1,0,0,0,165.5,50.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol41(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.sloy3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(246,131,1,1,180);

	this.instance_2 = new lib.sloy3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(243,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,489,131), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sloy21.png
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(139,66.6,1,1,0,0,0,38,61.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.8,x:145.1,y:66.7},4,cjs.Ease.get(-1)).to({rotation:13.1,x:152.6},5,cjs.Ease.get(1)).to({rotation:6.5,x:145.8},5,cjs.Ease.get(-1)).to({rotation:0,x:139,y:66.6},5,cjs.Ease.get(1)).wait(1));

	// sloy18.png
	this.instance_1 = new lib.Symbol24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(158.8,200.3,1,1,0,0,0,58.8,160.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:160.4,rotation:2.5,x:158.9,y:200.4},4,cjs.Ease.get(-1)).to({rotation:6},5,cjs.Ease.get(1)).to({regX:58.9,regY:160.5,rotation:2.8,y:200.5},5,cjs.Ease.get(-1)).to({regX:58.8,regY:160.3,rotation:0,x:158.8,y:200.3},5,cjs.Ease.get(1)).wait(1));

	// sloy17.png
	this.instance_2 = new lib.Symbol17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(104.1,83.7,1,1,0,0,0,55.1,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:5.5,x:109.5,y:81.2},4,cjs.Ease.get(-1)).to({regY:10.6,rotation:12.5,x:116.1,y:78.1},5,cjs.Ease.get(1)).to({regY:10.7,rotation:6.1,x:110.1,y:81},5,cjs.Ease.get(-1)).to({rotation:0,x:104.1,y:83.7},5,cjs.Ease.get(1)).wait(1));

	// sloy16.png
	this.instance_3 = new lib.Symbol16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(71.4,124,1,1,0,0,0,50.4,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:58.1,rotation:-4.5,x:76.4,y:119.5},4,cjs.Ease.get(-1)).to({regX:50.5,rotation:-10.2,x:82.8,y:113.7},5,cjs.Ease.get(1)).to({rotation:-5,x:77.2,y:118.9},5,cjs.Ease.get(-1)).to({regX:50.4,regY:58,rotation:0,x:71.4,y:124},5,cjs.Ease.get(1)).wait(1));

	// Layer 20 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACULNQvPhyiUhmQiThlhMhiQhLhiAAiKQAAiJBLhiQBMhhB3gDQB3gDRzASQRzASiHIVQhvG4qrAAQiRAAisgUg");
	mask.setTransform(0.6,73.7);

	// sloy15.png
	this.instance_4 = new lib.Symbol15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-148,70.2,1,1,0,0,0,-4,15.2);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-2.5,x:-140.2,y:70.3},4,cjs.Ease.get(-1)).to({rotation:-6,x:-130.4,y:70.2},5,cjs.Ease.get(1)).to({regY:15.3,rotation:-2.8,x:-139.1,y:70.4},5,cjs.Ease.get(-1)).to({regY:15.2,rotation:0,x:-148,y:70.2},5,cjs.Ease.get(1)).wait(1));

	// sloy14.png
	this.instance_5 = new lib.Symbol22();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-188.4,219.5,1,1,0,0,0,109.9,62.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-2.3,x:-174.2,y:216},4,cjs.Ease.get(-1)).to({rotation:-5.5,x:-156.4,y:211.5},5,cjs.Ease.get(1)).to({regY:63,rotation:-2.6,x:-172.4,y:215.6},5,cjs.Ease.get(-1)).to({regY:62.9,rotation:0,x:-188.4,y:219.5},5,cjs.Ease.get(1)).wait(1));

	// sloy11.png
	this.instance_6 = new lib.Symbol11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(190.5,91,1,1,0,0,0,6.5,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-3.5,x:195.2,y:92.5},4,cjs.Ease.get(-1)).to({regX:6.6,regY:10.1,rotation:-8.2,x:201.1,y:94.3},5,cjs.Ease.get(1)).to({rotation:-4,x:195.8,y:92.6},5,cjs.Ease.get(-1)).to({regX:6.5,regY:10,rotation:0,x:190.5,y:91},5,cjs.Ease.get(1)).wait(1));

	// sloy10.png
	this.instance_7 = new lib.Symbol9();
	this.instance_7.parent = this;
	this.instance_7.setTransform(466.2,106.4,1,1,0,0,0,142.2,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:24.1,rotation:2.1,x:476.9,y:105.1},4,cjs.Ease.get(-1)).to({rotation:5,x:490.2,y:103.3},5,cjs.Ease.get(1)).to({regX:142.3,regY:24,rotation:2.3,x:478.3,y:104.9},5,cjs.Ease.get(-1)).to({regX:142.2,rotation:0,x:466.2,y:106.4},5,cjs.Ease.get(1)).wait(1));

	// sloy6.png
	this.instance_8 = new lib.Symbol7();
	this.instance_8.parent = this;
	this.instance_8.setTransform(185.8,217.8,1,1,0,0,0,20.8,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1,scaleY:1,rotation:-10.5,x:182.7,y:216.4},4,cjs.Ease.get(-1)).to({regX:20.9,scaleX:1,scaleY:1,rotation:-23.7,x:178.7,y:214.6},5,cjs.Ease.get(1)).to({regY:15,scaleX:1,scaleY:1,rotation:-11.8,x:182.3,y:216.4},5,cjs.Ease.get(-1)).to({regX:20.8,regY:14.8,scaleX:1,scaleY:1,rotation:0,x:185.8,y:217.8},5,cjs.Ease.get(1)).wait(1));

	// sloy5.png
	this.instance_9 = new lib.Symbol6();
	this.instance_9.parent = this;
	this.instance_9.setTransform(191,302.8,1,1,0,0,0,49,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1,scaleY:1,rotation:14.3,x:208.8,y:295.8},4,cjs.Ease.get(-1)).to({regX:49.1,scaleX:1,scaleY:1,rotation:32.2,x:231.1,y:286.9},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:16,x:211.1,y:294.8},5,cjs.Ease.get(-1)).to({regX:49,scaleX:1,scaleY:1,rotation:0,x:191,y:302.8},5,cjs.Ease.get(1)).wait(1));

	// sloy4.png
	this.instance_10 = new lib.Symbol5();
	this.instance_10.parent = this;
	this.instance_10.setTransform(141.8,221.2,1,1,0,0,0,227.8,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regY:12.3,rotation:3.8,x:141.9,y:221.3},4,cjs.Ease.get(-1)).to({rotation:9},5,cjs.Ease.get(1)).to({rotation:4.3,x:142},5,cjs.Ease.get(-1)).to({regY:12.2,rotation:0,x:141.8,y:221.2},5,cjs.Ease.get(1)).wait(1));

	// sloy3.png
	this.instance_11 = new lib.Symbol4();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-198.5,342,1,1,0,0,0,203.5,76);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:203.4,rotation:-1.8,x:-205.7,y:345.6},4,cjs.Ease.get(-1)).to({rotation:-4.5,x:-214.6,y:350},5,cjs.Ease.get(1)).to({rotation:-2.1,x:-206.4,y:346.1},5,cjs.Ease.get(-1)).to({regX:203.5,rotation:0,x:-198.5,y:342},5,cjs.Ease.get(1)).wait(1));

	// sloy8.png
	this.instance_12 = new lib.Symbol21();
	this.instance_12.parent = this;
	this.instance_12.setTransform(470.1,257.4,1,1,0,0,0,261.1,72.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:477.2},4,cjs.Ease.get(-1)).to({x:486.1},5,cjs.Ease.get(1)).to({x:478.1},5,cjs.Ease.get(-1)).to({x:470.1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-402,5,1060.9,392);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(162.6,150.5,1,1,0,0,0,125,150.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:146.6},4,cjs.Ease.get(-1)).to({x:162.6},5,cjs.Ease.get(1)).to({x:173.8},5,cjs.Ease.get(-1)).to({x:162.6},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364.4,5,1060.9,392);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Custom Mouse Cursor
		Replaces the default mouse cursor with the specified symbol instance.
		*/
		stage.canvas.style.cursor = "none";
		this.pricel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.pricel.x = stage.mouseX/window.devicePixelRatio;;
			this.pricel.y = stage.mouseY/window.devicePixelRatio;;
		}
		//To restore the default mouse pointer, uncomment the following lines:
		//this.removeEventListener("tick", fl_CustomMouseCursor.bind(this));
		//stage.removeChild(pricel);
		//stage.canvas.style.cursor = "default";
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
				_this.pricel1.visible=true;
				_this.pricel.visible=false;
		
		function fl_MouseOverHandler_5()
		    {
			    _this.pilka.gotoAndPlay(1);
				_this.txt.gotoAndPlay(1);
				_this.pricel.visible=true;
				_this.pricel1.visible=false;
		
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
			    _this.pilka.gotoAndPlay(10);
				_this.txt.gotoAndPlay(10);
				_this.pricel.visible=false;
				_this.pricel1.visible=true;
		
		    }
		
			
		this.addEventListener("tick", fl_CustomMouseCursor7.bind(this));
		
		function fl_CustomMouseCursor7() {
		
		this.pilka.x = - stage.mouseX / 20;
		this.pilka.y = - stage.mouseY / 20;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Symbol 35 copy 2
	this.pricel = new lib.Symbol39();
	this.pricel.parent = this;
	this.pricel.setTransform(-103,124.7,1,1,0,0,0,40.8,19.1);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// Symbol 35 copy
	this.pricel1 = new lib.Symbol39();
	this.pricel1.parent = this;
	this.pricel1.setTransform(332.5,124.7,1,1,0,0,0,40.8,19.1);

	this.timeline.addTween(cjs.Tween.get(this.pricel1).wait(1));

	// Layer 4
	this.instance = new lib.Symbol27();
	this.instance.parent = this;
	this.instance.setTransform(36,223.5,1,1,0,0,0,17,13.5);

	this.instance_1 = new lib.pilka();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17,249);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Symbol 29
	this.pilka = new lib.Symbol32();
	this.pilka.parent = this;
	this.pilka.setTransform(0,1,1,1,0,0,0,-216,-87);

	this.timeline.addTween(cjs.Tween.get(this.pilka).wait(1));

	// Layer 3
	this.txt = new lib.Symbol64();
	this.txt.parent = this;
	this.txt.setTransform(511.7,43.7,1,1,0,0,0,87.7,31.6);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 2
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(268,140.5,1,1,0,0,0,125,150.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.instance_3 = new lib.Symbol25();
	this.instance_3.parent = this;
	this.instance_3.setTransform(326,194,1,1,0,0,0,328,205);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(98.6,141.5,1060.9,601.3);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/apteka.png?1485260064613", id:"apteka"},
		{src:"images/back.jpg?1485260064613", id:"back"},
		{src:"images/dim.png?1485260064613", id:"dim"},
		{src:"images/pila.png?1485260064613", id:"pila"},
		{src:"images/pilka.png?1485260064613", id:"pilka"},
		{src:"images/rhand.png?1485260064613", id:"rhand"},
		{src:"images/sloy10.png?1485260064613", id:"sloy10"},
		{src:"images/sloy11.png?1485260064613", id:"sloy11"},
		{src:"images/sloy12.png?1485260064613", id:"sloy12"},
		{src:"images/sloy13.png?1485260064613", id:"sloy13"},
		{src:"images/sloy14.png?1485260064613", id:"sloy14"},
		{src:"images/sloy15.png?1485260064613", id:"sloy15"},
		{src:"images/sloy16.png?1485260064613", id:"sloy16"},
		{src:"images/sloy17.png?1485260064613", id:"sloy17"},
		{src:"images/sloy18.png?1485260064613", id:"sloy18"},
		{src:"images/sloy19.png?1485260064613", id:"sloy19"},
		{src:"images/sloy21.png?1485260064613", id:"sloy21"},
		{src:"images/sloy3.png?1485260064613", id:"sloy3"},
		{src:"images/sloy4.png?1485260064613", id:"sloy4"},
		{src:"images/sloy5.png?1485260064613", id:"sloy5"},
		{src:"images/sloy6.png?1485260064613", id:"sloy6"},
		{src:"images/sloy7.png?1485260064613", id:"sloy7"},
		{src:"images/sloy8.png?1485260064613", id:"sloy8"},
		{src:"images/sloy9.png?1485260064613", id:"sloy9"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;