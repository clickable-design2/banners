(function (lib, img, cjs, ss, an) {

// symbols:
    
(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,430);


(lib.blue = function() {
	this.initialize(img.blue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,422,94);


(lib.cup = function() {
	this.initialize(img.cup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,245,367);


(lib.flag = function() {
	this.initialize(img.flag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,391);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,61);


(lib.money = function() {
	this.initialize(img.money);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,16);


(lib.red = function() {
	this.initialize(img.red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,422,94);// helper functions:

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


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cup();
	this.instance.parent = this;
	this.instance.setTransform(0,21.5,0.722,0.722,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(0,0,207.9,284.7), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZBCIAAgtIgRAAIgdAtIgkAAIAegqIAFgIIgKgGQgFgEgDgFQgEgEgCgGQgCgHAAgHQAAgKADgIQADgIAHgFQAGgGAJgCQAJgDAKAAIA7AAIAACDgAgJgnQgGAFAAALQAAALAHAGQAGAFAJAAIASAAIAAgrIgRAAQgLAAgGAFg");
	this.shape.setTransform(210.3,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAeBCIAAhFIAAgQIAAAAIgKAQIgwBFIggAAIAAiDIAfAAIAABGIAAAQIAAAAIAKgQIAwhGIAgAAIAACDg");
	this.shape_1.setTransform(196.2,33.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAnBSIAAgfIhrAAIAAiEIAhAAIAABoIA0AAIAAhoIAhAAIAABoIATAAIAAA7g");
	this.shape_2.setTransform(180.8,35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeBDQgIgDgGgFQgGgGgDgHQgEgIAAgIQAAgIACgGQACgGAEgEQAHgIAMgGQAQgGAigCIAFAAIAAgCQAAgGgCgFQgCgEgDgDQgHgFgLAAQgJAAgKAEQgIADgJAGIgMgYQAIgHAPgFQAOgEAOAAQANAAAKADQALAEAGAGQAIAHADAKQAEAKAAAMIAABSIgeAAIAAgLIAAgKIAAAAQgHALgKAHIgMAFQgFABgIAAQgIAAgIgCgAgIAJQgHADgFAEQgEAEAAAHQgBAHAGAFQAFAFAKAAQAFAAAGgDQAGgDAEgFQAEgFACgGQACgHAAgGIAAgDIgFAAQgSAAgKADg");
	this.shape_3.setTransform(164.8,33.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhBBeIAAi4IAeAAIAAAKIAAAJIAAAAIAIgJIAKgHQAMgGAMAAQANAAAMAFQAKAFAIAJQAIAKADAMQAFANAAAPQAAAQgFAMQgEANgIAJQgJAJgKAFQgMAFgNAAQgKAAgKgFQgKgFgHgJIAAAAIAAAMIAAA4gAgMg+QgGACgEAFQgFAGgDAHQgDAJAAAKQAAAIADAHQABAIAFAEQAEAGAGAEQAHADAHAAQAGAAAGgDQAGgCAFgGQAEgFADgGQACgIAAgKQAAgJgCgIQgDgIgEgFQgEgGgGgDQgGgDgHAAQgGAAgGADg");
	this.shape_4.setTransform(150.7,35.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQBCIAAhnIgrAAIAAgcIB3AAIAAAcIgsAAIAABng");
	this.shape_5.setTransform(135.8,33.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGBEIgOgEQgNgFgKgKQgJgJgFgNQgFgNAAgOQAAgNAFgNQAFgMAJgKQAKgKANgFIAOgEIAPgBQAOAAANAEQAHADAGADQAGAEAFAFIgPAXQgGgHgJgDQgKgEgJAAQgJAAgHADQgHADgGAGQgFAFgDAIQgDAHAAAIQAAAIADAIQADAHAGAGQAFAGAIADQAGADAKAAQAKAAALgFQAKgEAIgIIAMAYQgEAFgGAEIgOAHQgTAFgLAAg");
	this.shape_6.setTransform(122.4,33.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAeBCIAAhFIAAgQIAAAAIgKAQIgwBFIggAAIAAiDIAfAAIAABGIAAAQIAAAAIAKgQIAwhGIAgAAIAACDg");
	this.shape_7.setTransform(107.2,33.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgqBCIAAiDIBVAAIAAAcIg1AAIAABng");
	this.shape_8.setTransform(94.5,33.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGBEIgOgEQgNgFgKgKQgJgKgFgMQgFgNAAgOQAAgOAFgNQAFgNAJgJQAJgJAMgFQANgFANAAQAOAAAMAEQAKAFAIAJQAHAIAEAMQAEALAAAOIgBALIhaAAQABAJADAGQAEAHAFAEQAFAFAHACQAGACAIAAQAKAAAKgEQAJgEAJgGIANAXQgKAJgPAFQgOAFgPAAgAAegPQAAgHgCgFQgCgFgEgEQgDgEgFgCQgFgBgFAAQgGAAgFABQgFACgFAEQgEAEgCAFQgDAFgBAHIA5AAIAAAAg");
	this.shape_9.setTransform(81.1,33.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhABcIAAi3IBGAAQANAAALAEQAKAEAIAIQAJAIADALQAFALAAAOQAAANgFALQgDAKgJAJQgIAIgKAEQgLAFgNAAIglAAIAAA/gAgfAAIAfAAQAHAAAGgCQAGgCADgEQAEgEADgGQACgGAAgHQAAgHgCgGQgDgGgEgEQgDgEgGgCQgGgDgGAAIggAAg");
	this.shape_10.setTransform(66.7,30.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D32B28").s().p("AwtE2QiBAAhbhbQhahaAAiBQAAh/BahcQBbhaCBAAMAhbAAAQCBAABaBaQBbBcAAB/QAACBhbBaQhaBbiBAAg");
	this.shape_11.setTransform(138,31);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAZBCIAAgtIgRAAIgdAtIgkAAIAegqIAFgIIgKgGQgFgEgDgFQgEgEgCgGQgCgHAAgHQAAgKADgIQADgIAHgFQAGgGAJgCQAJgDAKAAIA7AAIAACDgAgJgnQgGAFAAALQAAALAHAGQAGAFAJAAIASAAIAAgrIgRAAQgLAAgGAFg");
	this.shape_12.setTransform(210.3,33.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AAeBCIAAhFIAAgQIAAAAIgKAQIgwBFIggAAIAAiDIAfAAIAABGIAAAQIAAAAIAKgQIAwhGIAgAAIAACDg");
	this.shape_13.setTransform(196.2,33.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AAnBSIAAgfIhrAAIAAiEIAhAAIAABoIA0AAIAAhoIAhAAIAABoIATAAIAAA7g");
	this.shape_14.setTransform(180.8,35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgeBDQgIgDgGgFQgGgGgDgHQgEgIAAgIQAAgIACgGQACgGAEgEQAHgIAMgGQAQgGAigCIAFAAIAAgCQAAgGgCgFQgCgEgDgDQgHgFgLAAQgJAAgKAEQgIADgJAGIgMgYQAIgHAPgFQAOgEAOAAQANAAAKADQALAEAGAGQAIAHADAKQAEAKAAAMIAABSIgeAAIAAgLIAAgKIAAAAQgHALgKAHIgMAFQgFABgIAAQgIAAgIgCgAgIAJQgHADgFAEQgEAEAAAHQgBAHAGAFQAFAFAKAAQAFAAAGgDQAGgDAEgFQAEgFACgGQACgHAAgGIAAgDIgFAAQgSAAgKADg");
	this.shape_15.setTransform(164.8,33.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AhBBeIAAi4IAeAAIAAAKIAAAJIAAAAIAIgJIAKgHQAMgGAMAAQANAAAMAFQAKAFAIAJQAIAKADAMQAFANAAAPQAAAQgFAMQgEANgIAJQgJAJgKAFQgMAFgNAAQgKAAgKgFQgKgFgHgJIAAAAIAAAMIAAA4gAgMg+QgGACgEAFQgFAGgDAHQgDAJAAAKQAAAIADAHQABAIAFAEQAEAGAGAEQAHADAHAAQAGAAAGgDQAGgCAFgGQAEgFADgGQACgIAAgKQAAgJgCgIQgDgIgEgFQgEgGgGgDQgGgDgHAAQgGAAgGADg");
	this.shape_16.setTransform(150.7,35.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgQBCIAAhnIgrAAIAAgcIB3AAIAAAcIgsAAIAABng");
	this.shape_17.setTransform(135.8,33.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgGBEIgOgEQgNgFgKgKQgJgJgFgNQgFgNAAgOQAAgNAFgNQAFgMAJgKQAKgKANgFIAOgEIAPgBQAOAAANAEQAHADAGADQAGAEAFAFIgPAXQgGgHgJgDQgKgEgJAAQgJAAgHADQgHADgGAGQgFAFgDAIQgDAHAAAIQAAAIADAIQADAHAGAGQAFAGAIADQAGADAKAAQAKAAALgFQAKgEAIgIIAMAYQgEAFgGAEIgOAHQgTAFgLAAg");
	this.shape_18.setTransform(122.4,33.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AAeBCIAAhFIAAgQIAAAAIgKAQIgwBFIggAAIAAiDIAfAAIAABGIAAAQIAAAAIAKgQIAwhGIAgAAIAACDg");
	this.shape_19.setTransform(107.2,33.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgqBCIAAiDIBVAAIAAAcIg1AAIAABng");
	this.shape_20.setTransform(94.5,33.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgGBEIgOgEQgNgFgKgKQgJgKgFgMQgFgNAAgOQAAgOAFgNQAFgNAJgJQAJgJAMgFQANgFANAAQAOAAAMAEQAKAFAIAJQAHAIAEAMQAEALAAAOIgBALIhaAAQABAJADAGQAEAHAFAEQAFAFAHACQAGACAIAAQAKAAAKgEQAJgEAJgGIANAXQgKAJgPAFQgOAFgPAAgAAegPQAAgHgCgFQgCgFgEgEQgDgEgFgCQgFgBgFAAQgGAAgFABQgFACgFAEQgEAEgCAFQgDAFgBAHIA5AAIAAAAg");
	this.shape_21.setTransform(81.1,33.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AhABcIAAi3IBGAAQANAAALAEQAKAEAIAIQAJAIADALQAFALAAAOQAAANgFALQgDAKgJAJQgIAIgKAEQgLAFgNAAIglAAIAAA/gAgfAAIAfAAQAHAAAGgCQAGgCADgEQAEgEADgGQACgGAAgHQAAgHgCgGQgDgGgEgEQgDgEgGgCQgGgDgGAAIggAAg");
	this.shape_22.setTransform(66.7,30.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AwtE2QiBAAhbhbQhahaAAiBQAAh/BahcQBbhaCBAAMAhbAAAQCBAABaBaQBbBcAAB/QAACBhbBaQhaBbiBAAg");
	this.shape_23.setTransform(138,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276.1,62);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhRBgIAli/IA+AAIARABIARACQAGADAGAEQAGAEAEAGQADAFADAGQACAHAAAIQAAAGgCAGIgGANQgEAHgGAEQgFAFgHAEIAAAAQAGADAFADIAHAJQAFAJAAAMQAAAMgDAJQgEAKgGAIQgHAHgJAGQgIAFgLADIgPADIgOABgAgaA4IAbAAQAIAAAGgEQAFgCADgHQADgFABgHQAAgGgEgEQgFgFgJAAIgbAAgAgLgVIAXAAQAKAAAFgHQAGgGAAgIQAAgGgDgDQgEgEgIAAIgWAAg");
	this.shape.setTransform(81.5,48.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeBiQgKgBgIgDIgQgJIgMgJIgLgNQgEgHgDgIQgEgHgCgKQgBgIAAgJQAAgMACgKQADgLAEgKQAEgKAHgJQAGgKAIgHQAIgIAKgGQAJgGAKgFQAKgEAKgCQAKgDALAAQALAAAJACQAJABAJADQAHADAIAFIANAKQAGAGAEAGQAGAHACAHQAEAJACAIQABAIAAAKQAAALgCAKQgDAMgEAKQgFAKgGAKQgHAJgIAIQgIAHgJAHQgJAGgKAFQgKAEgLACQgKADgLAAQgKAAgJgCgAgMgyQgMAEgIAKQgKAKgFAMQgGAMABANQAAAKADAJQACAIAHAGQAFAGAIADQAIAEAJAAQALgBAMgFQALgFAJgJQAJgKAGgNQAFgNAAgNQAAgKgDgIQgDgHgGgGQgGgHgHgCQgIgEgJAAQgMAAgLAGg");
	this.shape_1.setTransform(62.1,48.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AALBgIgZhOIgWAAIgPBOIgvAAIAli/IAvAAIgOBKIASAAIA2hKIA3AAIhJBeIAAABIAjBgg");
	this.shape_2.setTransform(42.7,48.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPBgIAShaQACgLAGgUIAAAAQgNAUgKALIhGBaIgvAAIAli/IAvAAIgRBaIgJAfIABAAQAMgTAKgMIBGhaIAwAAIglC/g");
	this.shape_3.setTransform(22.4,48.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQBgIAPhLIhFAAIgPBLIgvAAIAli/IAvAAIgOBMIBFAAIAPhMIAvAAIgmC/g");
	this.shape_4.setTransform(2,48.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhTBgIAli/IBJAAQAIgBAIACQAHACAGACQAHAEAFAEQAGAGADAGQAEAGACAHQABAIAAAIQAAAMgDALQgDAMgGAIQgGAJgIAIQgIAHgKAFQgHADgHABQgIACgIAAIgjAAIgLA7gAgRgDIAWAAQAKAAAGgEQAHgFAEgHQAEgIAAgKQAAgIgFgFQgFgFgKAAIgWAAg");
	this.shape_5.setTransform(-16.6,48.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhOBgIAli/IB4AAIgIAoIhIAAIgHAjIA5AAIgIAoIg5AAIgHAkIBMAAIgIAog");
	this.shape_6.setTransform(-32.7,48.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPBgIAeiYIhDAAIgeCYIgvAAIAli/ICiAAIglC/g");
	this.shape_7.setTransform(-51,48.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeBiQgJgBgJgDIgQgJIgMgJIgLgNQgEgHgDgIQgEgHgCgKQgBgIAAgJQAAgMACgKQACgLAFgKQAFgKAGgJQAGgKAJgHQAHgIAKgGQAIgGALgFQAKgEAKgCQAKgDALAAQALAAAJACQAJABAJADQAHADAIAFIANAKQAGAGAEAGQAFAHAEAHQADAJABAIQACAIAAAKQAAALgDAKQgCAMgEAKQgFAKgHAKQgGAJgIAIQgIAHgJAHQgJAGgKAFQgLAEgKACQgKADgLAAQgKAAgJgCgAgMgyQgMAEgIAKQgKAKgFAMQgGAMAAANQAAAKAEAJQACAIAHAGQAFAGAIADQAIAEAJAAQALgBAMgFQALgFAJgJQAJgKAGgNQAFgNAAgNQAAgKgDgIQgDgHgGgGQgFgHgJgCQgHgEgKAAQgKAAgMAGg");
	this.shape_8.setTransform(-72.2,48.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWBiQgJgBgJgDQgIgDgIgFIgMgKIgLgMQgEgIgDgHIgGgRQgBgJAAgJQAAgMACgJQACgMAFgKQAFgKAFgJQAHgKAIgHQAHgIAKgGQAIgGALgFQAKgEALgCQAKgDAMAAQAJAAALACQAKABAJADQAKAEAJAFQAKAGAGAHIgaAgQgKgHgLgEQgNgGgNAAIgPACQgGACgGADQgMAFgJALQgJAJgDAMQgFAMAAALQAAAJADAJQADAIAFAGQAGAGAIAEQAJADAKABQALgBATgGQANgGAOgLIASAmQgHAGgJAGQgJAEgKAFQgLADgLACQgKADgKAAQgKAAgKgCg");
	this.shape_9.setTransform(-92.3,48.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-104.9,30.9,197.5,36.4), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoBgIAHgoIAqAAIgIAogAgcAlIAViEIAxAAIgfCEg");
	this.shape.setTransform(-92.1,79.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPBgIAShaQACgKAGgWIAAAAQgNAVgKALIhGBaIgvAAIAli/IAvAAIgRBaIgJAfIABAAQAMgTAKgMIBGhaIAwAAIglC/g");
	this.shape_1.setTransform(-106.6,79.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAtBzIAHgmIhuAAIgIAmIgrAAIAPhNIAUAAQAJgMAHgOQAHgMAGgOQAIgTAIgkIAJgtICCAAIgeCYIAWAAIgPBNgAAPhBQgIAhgHATQgOAlgJAOIA4AAIAWhwIgnAAg");
	this.shape_2.setTransform(-129.1,81.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAsBgIgFgoIg7AAIgTAoIgzAAIBki/IA2AAIAbC/gAAkASIgEglIgCghIAAAAQgIAVgGAMIgRAlIAlAAg");
	this.shape_3.setTransform(-148.5,79.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfBhQgJgCgJgDQgIgEgHgGQgIgFgFgHIAbgeQAHAJALAEQAKAGAKAAQAMgBAJgGQAEgDADgFQACgFAAgGQAAgHgEgDQgFgFgJAAIgcAAIAHgkIAXAAQAKAAAIgHQAEgDACgEQACgFAAgFQAAgHgEgFQgFgEgKAAQgIAAgIADQgLAEgMAJIgRgiQAIgGAJgGQAJgEAJgCQAOgFAPAAQANAAALADQALAEAIAFQAJAHAEAIQAFAKAAAMQAAAHgCAIQgDAHgEAHQgFAGgGAFQgGAFgIADIAAAAQAKAEAGAKQADAFACAGQACAFAAAHQAAAHgCAIQgCAGgDAGQgHAMgLAIQgLAJgPAFQgOAEgNAAQgKAAgKgDg");
	this.shape_4.setTransform(-164.1,79.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeBiQgKgBgIgDIgQgIIgNgKIgKgNQgFgHgDgIQgDgIgCgIQgBgJAAgJQAAgMADgKQABgLAFgKQAFgKAGgJQAHgJAHgIQAIgIAJgGQAJgGAKgFQALgEAKgDQAKgCALAAQAKAAAKACQAJACAIADQAJADAHAEIANAKQAGAGAEAGQAGAHACAIQAEAHACAJQABAJAAAJQAAALgCAKQgDALgEAKQgFALgGAKQgHAIgIAJQgIAHgJAHQgJAGgKAEQgKAFgLACQgKADgLAAQgJAAgKgCgAgMgyQgLAEgJAKQgKAJgFANQgGAMABANQAAAKACAJQAEAIAFAGQAGAGAIADQAIADAJABQALAAALgGQAMgFAJgKQAJgJAGgMQAFgNAAgNQAAgLgDgHQgDgIgGgHQgGgFgHgEQgIgDgJAAQgLAAgMAGg");
	this.shape_5.setTransform(-182.1,79.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAPBgIAeiYIhDAAIgeCYIgvAAIAli/ICiAAIglC/g");
	this.shape_6.setTransform(-203.4,79.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-215.9,61.7,129.8,36.4), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhOBgIAmjAIAuAAIgLA8IAfAAQAMAAAKAEQAKAEAHAIQAHAIADAJQAEAKAAANQAAAOgGAOQgFAOgKALQgPANgJAEIgPAFQgIABgIAAgAgXA4IAXAAQAHAAAGgCQAFgDAEgFQAEgFACgFQADgHAAgGQAAgJgGgFQgFgFgKgBIgXAAg");
	this.shape.setTransform(104.4,17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhRBgIAljAIA9AAIASABIAQADQAIAEAFADQAGAFAEAFQAEAFACAHQACAGAAAHQAAAHgCAHIgGAMQgEAHgFAEQgHAFgGAEIAAAAQAGADAEADIAHAJQAGAJAAAMQAAAMgEAKQgDAJgHAIQgGAHgIAGQgJAFgLADIgOADIgPABgAgaA4IAcAAQAHAAAGgDQAFgEADgFQAEgHgBgGQAAgHgDgEQgFgEgJAAIgbAAgAgLgVIAYAAQAJAAAFgGQAGgHAAgIQAAgGgDgDQgEgEgIAAIgWAAg");
	this.shape_1.setTransform(87.2,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAsBgIgFgoIg7AAIgTAoIgzAAIBkjAIA2AAIAbDAgAAkASIgEgkIgCghIAAAAQgIAUgGANIgRAkIAlAAg");
	this.shape_2.setTransform(68,17.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag4BgIAdiXIg6AAIAIgpICjAAIgIApIg6AAIgdCXg");
	this.shape_3.setTransform(53.8,17.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWBiQgJgCgJgDQgIgDgHgEIgOgKIgKgMQgEgIgEgHIgEgRQgCgJAAgJQAAgLADgKQACgLAEgLQAEgKAHgJQAGgKAHgHQAJgIAIgGQAKgGAJgEQALgFALgCQAKgDALAAQALAAAJACQALABAKADQAJAEAKAFQAIAGAHAHIgaAgQgKgHgMgFQgNgEgMgBIgPACQgGABgHADQgLAHgJAKQgIAKgEALQgFAMAAALQAAAJACAJQAEAIAFAGQAGAGAIAEQAJADAKAAQAKAAAUgGQANgGANgLIASAmQgGAGgJAGQgJAFgLAEQgJADgMADQgLACgJAAQgLAAgJgCg");
	this.shape_4.setTransform(34.7,17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeBiQgJgCgJgDIgQgIIgMgKIgLgMQgEgHgDgIQgEgHgCgKQgBgIAAgKQAAgLACgKQACgLAFgKQAEgKAHgJQAGgKAJgHQAHgIAKgGQAIgGALgEQAKgFAKgCQAKgDALAAQALAAAJACQAJABAJADQAHAEAIAEIANAKQAGAFAEAIQAFAGADAHQAEAJACAIQABAIAAAJQAAAMgDAKQgCALgEALQgFAKgHAJQgGAJgIAIQgIAJgJAGQgJAGgKAFQgKAEgLADQgKACgLAAQgKAAgJgCgAgMgzQgLAFgJAKQgKAKgFALQgGANAAANQABAKADAIQACAJAHAGQAFAGAIAEQAIADAJgBQALAAAMgFQALgFAJgJQAJgKAGgNQAFgNAAgNQAAgJgDgJQgDgHgGgGQgFgHgJgCQgHgDgJgBQgLABgMAEg");
	this.shape_5.setTransform(13.4,17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,115.2,36.4), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag3CEIAKg4IA5AAIgKA4gAgnAyIAei1IBBAAIgpC1g");
	this.shape.setTransform(136.2,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhoCBQgOgFgNgKIAgguQAFAFAHADQAJADAJAAQAIAAAGgEQAGgEAFgHIhAjFIBDAAIAaBeQAFATADARIABAAQAGgRAKgSIAyhfIBIAAIhzDFQgUAigOAOQgLAKgNAGQgOAGgQAAQgSAAgPgFg");
	this.shape_1.setTransform(119.9,25.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAPCEIgihrIgeAAIgVBrIhBAAIA0kHIBAAAIgUBmIAZAAIBKhmIBMAAIhlCCIAAABIAxCEg");
	this.shape_2.setTransform(95.7,25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAXCEIAUhoIhgAAIgUBoIhAAAIAzkHIBBAAIgVBqIBfAAIAUhqIBCAAIg0EHg");
	this.shape_3.setTransform(67.8,25.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgpCGQgNgCgMgFQgLgDgKgHQgKgGgIgIQgIgHgGgKQgHgKgEgKQgEgLgCgMQgDgMAAgMQAAgQAEgOQADgPAGgOQAGgOAJgNQAJgMALgKQAKgLANgIQAMgKAOgFQAOgHAPgDQANgCAPAAQAOAAANACQANACAMAEQALAEAKAHQAKAFAIAIQAIAHAGAKQAHAJAEAKQAEALADAMQACALAAAMQAAARgDAOQgEAPgGAOQgGAPgJAMQgJANgLALQgLALgMAIQgNAIgNAHQgOAGgPADQgOADgOABQgOgBgNgCgAgRhGQgPAIgNAMQgMANgIAQQgHASAAASQAAANAEAMQAFALAHAJQAIAJALAEQALAFAMgBQAPABAQgIQAQgHAMgNQANgNAHgRQAIgSAAgSQAAgOgEgLQgEgLgIgIQgIgIgLgEQgLgEgMgBQgQAAgQAHg");
	this.shape_4.setTransform(38.5,25.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhqCEIA0kHIChAAIgLA3IhgAAIgpDQg");
	this.shape_5.setTransform(14.8,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,145.2,51.4), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAVCoIAZh7QACgQAJgdIgBAAQgRAcgOARIhhB7IhBAAIA0kHIBAAAIgYB6QgDARgIAdIAAAAQASgcAOgSIBgh6IBCAAIg0EHgAAFhuQgLgEgIgGQgIgGgFgJQgEgIAAgKIABgOIAvAAIgBAIQAAAHAFAFQAFAGAJAAQALAAAGgGQAJgHACgNIAvAAQgDAQgHAMQgHALgLAHQgKAHgNAEQgNADgOAAQgPAAgMgDg");
	this.shape.setTransform(171.5,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA7CEIgFg4IhSAAIgaA4IhFAAICIkHIBKAAIAlEHgAAxAZIgGgyIgCguIAAAAQgLAdgIARIgYAyIAzAAg");
	this.shape_1.setTransform(142.6,25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhyCEIAzkHIBkAAQALAAALACQAKACAIAEQAJAEAIAHQAHAGAEAKQAFAIADAKQADALgBAKQABARgFAPQgEAPgJAMQgHANgMAKQgLALgNAFQgJAFgLACQgKACgLAAIgwAAIgPBSgAgXgEIAeAAQAOAAAIgFQAKgHAEgKQAGgMAAgNQAAgLgHgHQgGgHgNAAIggAAg");
	this.shape_2.setTransform(121.4,25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhqCEIA0kHIChAAIgLA3IhgAAIgpDQg");
	this.shape_3.setTransform(101.1,25.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAVCEIAZh7QACgQAJgcIgBAAQgRAbgOARIhgB7IhCAAIA0kHIBAAAIgXB7QgEAQgIAdIAAAAQASgcAOgRIBgh7IBCAAIg0EHg");
	this.shape_4.setTransform(76.2,25.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA1CEIAzkHIBBAAIg0EHgAioCEIAzkHIBBAAIgQBRIAoAAQARABAMAFQAOAGAJAKQAKAKAEAOQAFAOAAARQAAAUgHASQgIAUgNAOQgUASgMAGQgKAEgKACQgLADgMAAgAhcBMIAdAAQAJABAIgEQAHgDAGgHQAFgGADgJQADgIAAgJQAAgMgHgHQgHgHgPAAIgcAAg");
	this.shape_5.setTransform(45.1,25.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhvCEIAzkHIBUAAIAZABQAMACAKADQAJADAIAGQAIAFAFAHQAGAIADAJQACAIAAAKQAAAJgCAJQgDAKgGAIQgFAIgHAHQgIAHgKAFIAAABQAJADAGAEQAGAFAEAHQAHAOAAARQAAAPgFANQgFANgJALQgIAKgMAIQgMAGgOAFIgUAEIgVACgAgkBMIAmAAQAKABAIgFQAIgEAEgJQAEgIAAgIQAAgKgFgFQgGgGgMAAIgmAAgAgPgdIAgAAQANAAAIgJQAIgJAAgMQAAgHgFgFQgFgFgLAAIgfAAg");
	this.shape_6.setTransform(15.4,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,188.8,51.4), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flag();
	this.instance.parent = this;
	this.instance.setTransform(-344.1,777.6,1.559,1.559,-53.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-344.1,277.9,861.8,864.6), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().rr(-453.2,-300,906.4,600,39.1);
	this.shape.setTransform(542.7,605.4,0.885,2.018);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(141.6,-0.1,802.3,1210.9), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.8,1,1).p("AhZg+IgtAAAizADIg8AAAgiA/IgyAAADwADIlxAAADwA/IjNAAADDg5IjgAA");
	this.shape.setTransform(24,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-1,-1,50.1,14.5), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKB8IgCgBIgEgEQgCgCgBgDIAAgEIABgGIADgEQACgDACgBIAHgBIAAAAQAIABADADIAEAIQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABIgBACIgCAFQgCACgDACIgFACgAgpB8IgCAAIgEgCIgDgDQgDgEAAgJQAAgEABgCIADgDIADgDQADgCAFABIAAgBIAIADIADABIAEAIIAAAJIgDAFIgCADIgGADIgEABgAAxBsIgGgBIgDgDIgDgEIgBgFIABgHIACgDIAFgEIAHgCIAIACIACACIADADIACAFIABAEIgBADIgCAEIgCACQgCADgGABIgCABgAhQBXIgCAAIgBAAIgEgCIgDgEIgCgDIgBgHIABgFIACgEIADgDQAEgFAFACIAAgCQAIACAEAEIABABIAAACIACADQACADgBAFIgBADIgBADQgEAGgHABIgDABgAAZBSIgFgBIgBgBIgDgBIgEgDIgBgEQgBgDAAgDIABgEIACgEIAFgFIAHgBIAAAAQAEAAAEACIADADIAEAGQABADgBADIgBACIgCAFIgDADIgHADgABVBOIgCgCQgDgCgCgDQgEgIAEgGIAEgFIADgCIAGAAIAAgBQAEAAAFADQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAIACACIABACIAAAEIAAAFIgBACIgCAEIgDADIgGABIgDABgAggBMIgHgBIgCgCIgDgDQgGgIAFgJIAEgEIACgBIAHgBIAAgCQAHAAAFAEIADACIABADIABADIABAEIgBAFIgCAEIgDADQgGADgFAAIgBAAgAhnAyIgFgCIgDgBIgEgGQgEgHAFgIIAFgFIAHgBIAAAAQAIAAADAEIAEAHIAAAFIAAADIgDAEIgCAEIgEABIgEACgABAApIgCgBIgCgBIgGgFIgCgDIgBgHIABgDIACgFIAGgEIAGgBIAAAAQAEAAAFADQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAIABACIACADIABAEIgBAFIgBACIgCADQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgEACgABrAkIgGgCIgEgDIgCgEIgBgFIABgGIACgDIAEgFIAIgBIAAgBQAIACADAEIABABIABACIABACIABAEQAAAFgBABIgBACIgBACIgBABQgDADgGABIgCAAgAg7ASIgCAAIgCAAIgCgBIgCgCQgDgBgCgDQgDgGACgFIACgEIADgEQAEgCAFAAIAAgBIAIADIACACIADADIACADIAAAFIAAADIgDAFIgCACQgEACgEABgAhxAIIgBAAIgDgCIgEgEQgEgFAEgIIAFgGIACgBIAGgBIAAgBQAFABADACIADACIAEAHQABADgBACIAAADIgBACIgCACIgDACIgCACIgHABgABlgUIgCgBIgCAAIgDgDQgEgGABgGQAAgGAGgEIACgBIAHgBQAHABAEADIABACIACAEQACAEgCAFIgCACIAAACIgCACIgEACIgGACgAA5gZIgEgBIgCAAIgCgCQgFgEgBgDIgBgEQAAgEACgDIAFgGIACgCIAGgBIAAgBQAJACACAEIAEAHQAAABAAAAQABABAAAAQAAABgBAAQAAABAAABIAAACIgDAFIgCACIgIAEgAgrgiIgFgCIgCgBIgDgDIgDgFIAAgEIAAgEIACgEIAEgFIACgBIAHgBIAAAAQADAAAEACIAFAEIABACIABACIABAFIgBAFIgBACIgBACIgCACIgEACIgGACgAhcgpIgCAAIgCgBIgEgEIgDgCIgBgDIgBgGIABgDIABgDIACgDIADgCQAEgCAFAAIgBgBIAIADIACABIADADQADAFAAAEIgDAHIgCACQgDADgFACIgDAAgAAOgvIgIgDIgDgEIgCgDIAAgFIAAgEIADgFIADgDQADgCAGAAIAAgBIAIACIACABIACAEIADAFIAAAFIgBADIgCAEIgEAEIgIACgABUg+IgFgCIgDgBIgEgGQgEgIAFgGIADgEIACgCIAHgBIAAAAQAIABADAEIADADIABADIAAAGIAAACIgDAFIgCADIgEABIgDACgAg3hNIgCgBIgCAAIgCgCQgFgDgBgDIgBgFQAAgGADgEIAGgEIAGgCIAAAAQAEAAAFADIADACIABADIACACQABACgBAEIAAAEIgDAEIgCACIgIAEgAArhWIgCgBIgCAAIgCgCQgDgCgDgFQgBgFABgEIACgFIAEgDIACgBIAGgCIAAAAQAFAAAFAEIACACIABACIACADIAAACIAAAFIgEAHQgCADgHACgAgHhfIgCAAIgFgDIgEgEIgBgCIgBgHIABgDIABgDIACgCIADgCQACgCAGAAIAAgBQADAAACACQADAAACADIAEAHQABAEgBADIgCADIgBABQgBABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAQgDADgDAAIgCABg");
	this.shape.setTransform(12.4,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,24.8,25), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,560.1,301.1), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,225,61), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.money();
	this.instance.parent = this;
	this.instance.setTransform(-2,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-2,8,41,16), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(104,142.3,1,1,0,0,0,104,142.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:146.6},9,cjs.Ease.get(-1)).to({y:152.3},12,cjs.Ease.get(1)).to({y:147.1},11,cjs.Ease.get(-1)).to({y:142.3},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207.9,284.7);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Символ 26
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(-174.8,64.4,2.885,2.885,0,0,0,57.6,18.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.07,scaleY:2.07,y:61.9,alpha:1},9,cjs.Ease.get(1)).wait(11));

	// Символ 28
	this.instance_1 = new lib.Символ28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(165.5,62,2.659,2.659,0,0,0,98.9,18.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({scaleX:2.07,scaleY:2.07,x:165.3,y:61.9,alpha:1},9,cjs.Ease.get(1)).wait(7));

	// Символ 27
	this.instance_2 = new lib.Символ27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(519.6,61.9,2.726,2.726,0,0,0,65,18.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({scaleX:2.07,scaleY:2.07,x:519.4,alpha:1},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-340.9,11.9,332.3,105);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 25
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(263.3,25.7,1,1,0,0,0,72.5,25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:268.3},7,cjs.Ease.get(-1)).to({x:273.3},7,cjs.Ease.get(1)).to({x:267.9},8,cjs.Ease.get(-1)).to({x:263.3},7,cjs.Ease.get(1)).wait(1));

	// Символ 24
	this.instance_1 = new lib.Символ24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(94.5,25.7,1,1,0,0,0,94.5,25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:99.5},7,cjs.Ease.get(-1)).to({x:104.5},7,cjs.Ease.get(1)).to({x:99.2},8,cjs.Ease.get(-1)).to({x:94.5},7,cjs.Ease.get(1)).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,335.9,51.4);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(150.5,179,1,1,0,0,0,150.5,179);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:184.7},14,cjs.Ease.get(-1)).to({y:190.9},15,cjs.Ease.get(1)).to({y:185},15,cjs.Ease.get(-1)).to({y:179},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-344.1,277.9,861.8,864.6);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(138.1,26.5,1.148,1.148,0,0,0,138,31);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-20.4,-9.1,317,71.2), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// Слой 4
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(537.8,131.9,1,1,0,0,0,98.9,54.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(18).to({alpha:0},20).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-198.1,179,1,1,0,0,0,150.5,179);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:364},19,cjs.Ease.get(1)).to({x:369.8,y:838.3},20,cjs.Ease.get(-1)).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(299,159.7,1,1,0,0,0,453.2,299.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({alpha:0.68},18,cjs.Ease.get(1)).to({alpha:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-692.7,277.9,861.8,864.6);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(54.1,25.5,1.201,1.201,0,0,0,24,6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHBMIgQgFQgOgGgLgLQgKgKgGgOQgFgOAAgQQAAgPAFgPQAGgOAKgLQAKgKAOgGQAOgFAPAAQAPAAANAFQAMAGAIAKQAIAIAFANQAEANAAAPIgBANIhkAAQABAJADAIQAEAHAGAFQAGAFAIACQAGADAJAAQALAAALgEQALgFAJgHIAOAaQgLAKgQAFQgQAGgQAAgAAhgRQAAgIgCgFQgCgGgEgEQgEgEgFgCQgGgCgGAAQgGAAgGACQgGACgFAEQgEAFgDAFQgDAGgBAHIA/AAIAAAAg");
	this.shape.setTransform(236.3,27.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAhBJIAAhNIABgRIgBAAIgLARIg1BNIgkAAIAAiSIAjAAIAABOIgBASIABAAIALgSIA1hOIAkAAIAACSg");
	this.shape_1.setTransform(219.5,27.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAfBJIAAg7Ig+AAIAAA7IgkAAIAAiSIAkAAIAAA5IA+AAIAAg5IAlAAIAACSg");
	this.shape_2.setTransform(202.1,27.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHBMIgQgFQgOgGgLgLQgKgKgGgOQgFgOAAgQQAAgPAFgPQAGgOAKgLQAKgKAOgGQAOgFAPAAQAPAAANAFQAMAGAIAKQAIAIAFANQAEANAAAPIgBANIhkAAQABAJADAIQAEAHAGAFQAGAFAIACQAGADAJAAQALAAALgEQALgFAJgHIAOAaQgLAKgQAFQgQAGgQAAgAAhgRQAAgIgCgFQgCgGgEgEQgEgEgFgCQgGgCgGAAQgGAAgGACQgGACgFAEQgEAFgDAFQgDAGgBAHIA/AAIAAAAg");
	this.shape_3.setTransform(185.2,27.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhIBoIAAjMIAhAAIAAALIAAALIAAAAQAEgGAFgFQAFgFAGgDQANgGAOAAQAOAAAMAFQAMAGAKAKQAIALAEAOQAFAOAAARQAAARgFAOQgFAOgJAKQgJAKgNAFQgMAGgOAAQgMAAgLgGQgLgFgIgKIAAAAIAAANIAAA+gAgNhFQgHADgFAFQgFAHgDAIQgEAJAAAMQAAAJADAHQADAJAEAFQAFAHAHADQAGAEAJAAQAGAAAHgDQAHgDAFgGQAFgFADgIQADgJAAgLQAAgKgDgJQgCgIgFgGQgFgGgHgDQgGgEgIAAQgHABgGACg");
	this.shape_4.setTransform(168.8,30);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeBHQgPgFgLgLQgLgKgGgOIgFgPQgCgHAAgJQAAgKAHgUQAGgOALgLQALgKAPgGQAOgFAQAAQARAAAOAFQAPAGALAKQALALAHAOQAGAUAAAKQAAAJgCAHIgEAPQgGAOgMAKQgLALgOAFQgPAGgRAAQgQAAgOgGgAgQgpQgIADgGAGQgGAGgDAIQgDAJAAAJQAAAKADAIQADAJAGAGQAGAHAIADQAIADAIAAQAJAAAIgDQAIgDAGgHQAGgGAEgJQADgIAAgKQAAgJgDgJQgEgIgGgGQgGgGgIgDQgIgEgJAAQgIAAgIAEg");
	this.shape_5.setTransform(150.4,27.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaBJIglg7IgUAAIAAA7IgkAAIAAiSIAkAAIAAA4IASAAIAjg4IApAAIgvBHIAAAAIA0BLg");
	this.shape_6.setTransform(134.2,27.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHBMIgPgFQgPgGgKgLQgLgKgFgOQgGgOAAgQQAAgOAGgPQAFgNALgLQAKgLAPgGIAPgEIARgCQAQAAAOAFIAOAHQAHAEAFAGIgQAZQgHgHgKgEQgLgFgKAAQgKAAgIAEQgIADgGAHQgGAFgDAJQgDAJAAAIQAAAJADAIQADAJAGAGQAHAHAIADQAIAEAKAAQALAAAMgFQAMgGAIgIIAOAaQgFAFgHAFIgOAHQgWAHgMAAg");
	this.shape_7.setTransform(117.7,27.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgwBkQgJgEgKgGIARgcIAJAHQAHADAGAAQAIAAAFgEQAFgFADgJIhQidIAoAAIAsBbQAFAMAFAPIABAAIAIgaIAhhcIAnAAIg/ChQgJAWgJAJQgHAHgGAEQgKAEgLAAQgKAAgLgEg");
	this.shape_8.setTransform(100.8,24.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D32B28").s().p("AwtE2QiBAAhbhbQhahaAAiBQAAh/BahcQBbhaCBAAMAhbAAAQCBAABaBaQBbBcAAB/QAACBhbBaQhaBbiBAAg");
	this.shape_9.setTransform(139.9,24.8,1.201,1.201);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-25.9,-12.4,331.6,74.5), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(12.4,12.2,1,1,0,0,0,12.4,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.3,24.8,25);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(372.2,65,1,1,0,0,0,12.4,12.5);
	this.instance.alpha = 0.52;

	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(81.1,65,1,1,0,0,0,12.4,12.5);
	this.instance_1.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.blue();
	this.instance_2.parent = this;
	this.instance_2.setTransform(40,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(40,0,422,94), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(1077.4,-329.5,1.283,1.283,0,180,0,280.1,150.5);

	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(359.7,-329.5,1.283,1.283,0,180,0,280.1,150.5);

	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1077.3,439.9,1.283,1.283,0,180,0,280.1,150.5);

	this.instance_3 = new lib.Символ4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(359.5,439.9,1.283,1.283,0,180,0,280.1,150.5);

	this.instance_4 = new lib.Символ4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1077.3,54.2,1.283,1.283,0,0,0,280.1,150.5);

	this.instance_5 = new lib.Символ4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(359.5,54.2,1.283,1.283,0,0,0,280.1,150.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,-522.8,1436.8,1155.9), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 7
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(426,36.1,0.91,0.91,0,0,0,211,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:211.1,regY:46.9,x:409},22,cjs.Ease.get(-1)).to({regX:211,regY:47,x:391},23,cjs.Ease.get(1)).to({regX:211.1,regY:46.9,x:409.4},22,cjs.Ease.get(-1)).to({x:424.6},14,cjs.Ease.get(1)).to({regX:211,regY:47,x:426},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(270.4,-6.7,384,85.6);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Symbol24();
	this.instance.parent = this;
	this.instance.setTransform(115.7,80.5,0.653,0.653,-36.5,0,0,21.1,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:20.8,scaleX:0.38,scaleY:0.38,rotation:-149.3,x:68.7,y:53.6},14).to({regX:21.4,regY:12.8,scaleX:0.29,scaleY:0.29,rotation:-276.5,x:51.7,y:44.1,alpha:0},5).wait(1));

	// Layer 5
	this.instance_1 = new lib.Symbol24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.2,73.2,0.38,0.38,-164.9,0,0,20.7,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:21,regY:12.3,scaleX:0.36,scaleY:0.36,rotation:-172.8,x:65.5,y:72.7},1).to({regX:21.6,regY:12.7,scaleX:0.27,scaleY:0.27,rotation:-300,x:47.3,y:70.9,alpha:0},5).wait(1).to({regX:21.1,scaleX:0.62,scaleY:0.62,rotation:-420,x:116.4,y:78.2,alpha:1},0).to({regX:20.9,regY:12.6,scaleX:0.4,scaleY:0.4,rotation:-516.7,x:72.8,y:73.5},12).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(70,84.3,0.579,0.579,-123.3,0,0,21.1,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:12.4,scaleX:0.42,scaleY:0.42,rotation:-187.8,x:36.8,y:89.4},8).to({regX:21.4,regY:12.7,scaleX:0.31,scaleY:0.31,rotation:-315,x:16.1,y:92.7,alpha:0},5).wait(1).to({regX:21.1,regY:12.6,scaleX:0.71,scaleY:0.71,rotation:-435,x:94.6,y:80.4,alpha:1},0).to({regY:12.7,scaleX:0.6,scaleY:0.6,rotation:-475.3,x:74,y:83.7},5).wait(1));

	// Layer 3
	this.instance_3 = new lib.Symbol24();
	this.instance_3.parent = this;
	this.instance_3.setTransform(74.5,47.8,0.554,0.554,-95.6,0,0,21.1,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:12.6,scaleX:0.46,scaleY:0.46,rotation:-127.8,x:62.8,y:33.3},4).to({regX:21.2,regY:12.5,scaleX:0.35,scaleY:0.35,rotation:-255,x:48.1,y:15.2,alpha:0},5).wait(1).to({regY:12.6,scaleX:0.79,scaleY:0.79,rotation:-375,x:103.6,y:84.1,alpha:1},0).to({regY:12.7,scaleX:0.58,scaleY:0.58,rotation:-447.7,x:77.4,y:51.3},9).wait(1));

	// Layer 2
	this.instance_4 = new lib.Symbol24();
	this.instance_4.parent = this;
	this.instance_4.setTransform(34.8,74.4,0.325,0.325,110.8,0,0,20.9,12.2);
	this.instance_4.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:21.4,regY:12.8,scaleX:0.29,scaleY:0.29,rotation:60,x:27,y:73.6,alpha:0},2).wait(1).to({regX:21.1,regY:12.7,scaleX:0.65,scaleY:0.65,rotation:-60,x:100,y:81.4,alpha:1},0).to({regX:20.9,regY:12.4,scaleX:0.38,scaleY:0.38,rotation:-172.8,x:46.3,y:75.6},14).to({regY:12.3,scaleX:0.34,scaleY:0.34,rotation:-223.6,x:38.7,y:74.8,alpha:0.602},2).wait(1));

	// Layer 1
	this.instance_5 = new lib.Symbol24();
	this.instance_5.parent = this;
	this.instance_5.setTransform(94.6,73,0.714,0.714,-69.2,0,0,21.1,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:21.2,scaleX:0.46,scaleY:0.46,rotation:-157.8,x:46.9,y:54.4},11).to({regY:12.7,scaleX:0.35,scaleY:0.35,rotation:-285,x:25.1,y:46.1,alpha:0},5).wait(1).to({regX:21.1,regY:12.6,scaleX:0.79,scaleY:0.79,rotation:-405,x:107.6,y:78,alpha:1},0).to({scaleX:0.74,scaleY:0.74,rotation:-421.2,x:99,y:74.6},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(29.1,37.3,100.4,59.7);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 1
	this.tek = new lib.Символ22();
	this.tek.parent = this;
	this.tek.setTransform(168,25.7,1,1,0,0,0,168,25.7);

	this.timeline.addTween(cjs.Tween.get(this.tek).to({alpha:0},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,335.9,51.4);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(30));

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(0.9,46.9,0.74,0.74,0,0,0,271.6,56.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-513.2},28,cjs.Ease.get(-1)).wait(1).to({x:0.9},28,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,284.2,63.3);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(138,31,1,1,0,0,0,138,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:140.4,y:33.4},2).to({y:31},1).to({y:28.6},1).to({x:135.6,y:33.4},2).to({x:138,y:31},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.9,-12.4,331.6,74.5);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(1.4,65.9,0.782,0.782,0,0,0,12.4,12.6);
	this.instance.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(292.6,65.4,1,1,0,0,0,12.4,12.5);
	this.instance_1.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.red();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-40,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 2
	this.instance_3 = new lib.Symbol23();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-165.6,-35.2,1.526,1.526,0,0,0,21.1,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-153.3,0,535.3,94), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(304.6,150.5,1.087,1,0,0,0,280.1,150.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-304.6},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-522.8,1562.4,1155.9);


(lib.Символ17 = function(mode,startPosition,loop) {
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

	// Слой 3
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(-462.4,23.2,1,1,0,0,0,138,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:129.5,y:23},10,cjs.Ease.get(1)).to({x:604.6,y:23.2},9).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(209,193.5,1,1,0,0,0,104,142.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({x:177.2,y:-32.5},5,cjs.Ease.get(1)).to({x:232.6,y:195.6},9,cjs.Ease.get(-1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(128,28.9,0.928,0.928,0,0,0,138,31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:118.9},5,cjs.Ease.get(-1)).wait(5).to({y:28.9},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-620.8,-16.9,904.4,74.5);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 6
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(322,51,1,1,0,0,0,211,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:403.2},22,cjs.Ease.get(-1)).to({x:488},23,cjs.Ease.get(1)).to({x:401.1},22,cjs.Ease.get(-1)).to({x:329.1},14,cjs.Ease.get(1)).to({x:322},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.3,4,535.3,94);


// stage content:
(lib.fonrace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
        
        var _this = this,
			canvasBox = document.getElementById('canvasBox'),
			canvasBg = document.getElementById('canvas_bg'),
			apearBox = document.getElementById('apearBox');
			
		apearBox.classList.remove('remove');
		apearBox.classList.add('add');
        
        canvasBox.addEventListener('click', function(){
			window.callClick();
		});
        
        canvasBox.style.backgroundColor = 'rgba(0,0,0,1)';
        
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
				
				function fl_Clickover()
				{
				    this.girl.gotoAndPlay(2);
					this.but.gotoAndPlay(2);
					this.car.gotoAndPlay(2);
					this.tek.gotoAndPlay(2);
					
				
				}
				
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
				
				function fl_Clickout()
				{   
					this.girl.gotoAndPlay(20);
					this.but.gotoAndPlay(11);
					this.car.gotoAndPlay(30);
					this.tek.gotoAndPlay(15);
				
				}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Символ 2
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(193.3,35.5,0.881,0.881,0,0,0,112.7,30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.but = new lib.Символ17();
	this.but.parent = this;
	this.but.setTransform(149.2,570.6,0.711,0.711,0,0,0,128,28.8);

	this.timeline.addTween(cjs.Tween.get(this.but).wait(1));

	// girl.png
	this.girl = new lib.Символ15();
	this.girl.parent = this;
	this.girl.setTransform(13.6,112.7,0.567,0.567,0,0,0,150.5,179);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 3
	this.tek = new lib.Символ33();
	this.tek.parent = this;
	this.tek.setTransform(147.8,104.4,0.86,0.86,0,0,0,168,25.7);

	this.timeline.addTween(cjs.Tween.get(this.tek).wait(1));

	// Символ 1
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,388.8,0.528,0.528,0,0,0,58.5,21.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.car = new lib.Символ14();
	this.car.parent = this;
	this.car.setTransform(171.1,399.5,0.623,0.623,0,0,0,142.1,31.7);

	this.timeline.addTween(cjs.Tween.get(this.car).wait(1));

	// Символ 5
	this.instance_2 = new lib.Символ5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(605.6,431.3,1,1.093,0,0,0,609.1,150.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-314.8,-4.6,2023.8,1263.3);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		/*{src:"images/back.jpg", id:"back"},
		{src:"images/blue.png", id:"blue"},
		{src:"images/cup.png", id:"cup"},
		{src:"images/flag.png", id:"flag"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/money.png", id:"money"},
		{src:"images/red.png", id:"red"}*/
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;