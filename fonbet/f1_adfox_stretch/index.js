(function (lib, img, cjs, ss, an) {

// symbols:

(lib.blue = function() {
	this.initialize(img.blue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,422,94);


(lib.cup = function() {
	this.initialize(img.cup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,245,367);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAXBAIAAgrIgPAAIgdArIghAAIAcgpIAFgIIgKgFIgIgJQgDgEgCgGQgCgGgBgHQABgJADgIQADgIAGgFQAGgFAIgDQAJgDAKAAIA5AAIAAB/gAgIglQgHAFAAAKQAAALAHAFQAGAFAJAAIAQAAIAAgpIgPAAQgLAAgFAFg");
	this.shape.setTransform(207.7,32.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcBAIAAhDIABgQIAAAAIgKAQIguBDIgfAAIAAh/IAeAAIAABEIAAAPIAAAAIAKgPIAuhEIAfAAIAAB/g");
	this.shape_1.setTransform(194.1,32.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAlBPIAAgeIhmAAIAAh/IAfAAIAABkIAyAAIAAhkIAgAAIAABkIATAAIAAA5g");
	this.shape_2.setTransform(179.3,33.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdBAQgIgDgFgFQgGgFgDgHQgEgHAAgJQAAgGADgGQABgGAEgFQAGgHANgFQAPgHAggBIAFAAIAAgCQAAgGgCgFQgCgEgDgCQgGgFgLAAQgIAAgKADQgIADgIAGIgNgXQAJgHAOgEQAOgFANAAQAMAAAKAEQAKADAGAHQAIAGADAJQAEAKAAAMIAABPIgeAAIAAgLIABgJIgBAAQgFAKgLAGIgKAFIgNACQgJAAgHgDgAgIAJQgHACgEAEQgFAEABAHQAAAHAEAEQAGAGAJAAQAFAAAGgEQAGgCADgFQAEgFACgGQADgGgBgGIAAgDIgFAAQgRAAgKADg");
	this.shape_3.setTransform(163.8,32.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag+BaIAAiwIAdAAIAAAJIgBAJIABAAQADgFAEgEQAEgEAGgDQALgFAMAAQAMAAALAFQAKAEAIAJQAHAJAEAMQAEANAAAPQAAAOgEAMQgEAMgIAJQgIAJgLAFQgKAEgNAAQgKAAgJgEQgKgFgHgJIAAAAIAAALIAAA2gAgLg8QgGADgFAFQgEAFgDAHQgDAIAAAKQAAAIADAHQACAHAEAEQAEAGAGADQAGADAHAAQAGAAAGgCQAGgDAEgFQAEgFADgGQACgIAAgJQAAgJgCgHQgCgIgFgFQgEgFgFgDQgGgDgHAAQgGAAgFACg");
	this.shape_4.setTransform(150.2,34.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPBAIAAhkIgqAAIAAgbIBzAAIAAAbIgrAAIAABkg");
	this.shape_5.setTransform(135.9,32.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGBBIgNgDQgNgFgJgKQgJgJgFgMQgFgMAAgOQAAgNAFgMQAFgMAJgJQAJgJANgFIANgEIAOgCQAOAAANAFIAMAGQAGADAEAFIgOAWQgGgGgJgEQgJgEgJAAQgJAAgGADQgHADgFAGQgFAFgDAHQgDAIAAAHQAAAIADAHQADAHAFAGQAFAFAHAEQAHADAJAAQAKAAAKgFQAKgEAIgIIAMAXIgLAJIgMAGQgUAGgKAAg");
	this.shape_6.setTransform(123,32.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAcBAIAAhDIABgQIAAAAIgKAQIguBDIgfAAIAAh/IAeAAIAABEIAAAPIAAAAIAKgPIAuhEIAfAAIAAB/g");
	this.shape_7.setTransform(108.4,32.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpBAIAAh/IBTAAIAAAbIgzAAIAABkg");
	this.shape_8.setTransform(96.1,32.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGBBIgOgEQgMgFgJgJQgJgJgFgMQgFgMABgOQgBgNAFgNQAEgMAKgJQAIgJAMgFQAMgFANAAQANAAAMAFQAKAEAHAJQAIAIADALQAEALgBANIAAALIhXAAQABAIADAHQAEAGAFAEQAFAEAGADQAGACAHAAQAKAAAKgEQAJgEAIgGIAMAWQgKAJgOAFQgNAFgOAAgAAdgPQAAgGgCgFQgCgFgDgEQgEgDgFgCQgEgCgFAAQgGAAgEACQgGACgEAEQgEADgCAFIgFALIA4AAIAAAAg");
	this.shape_9.setTransform(83.3,32.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag+BZIAAixIBEAAQAMAAALAEQAKAFAHAHQAIAIAFAKQADALAAANQAAANgDALQgFAJgIAIQgHAIgKAEQgLAEgMAAIgjAAIAAA+gAgdAAIAdAAQAHAAAFgCQAGgCAEgEQADgEACgFQADgGAAgHQAAgHgDgFQgCgGgDgEQgEgEgFgCQgFgCgIAAIgdAAg");
	this.shape_10.setTransform(69.4,29.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D32B28").s().p("AwtE2QiBAAhbhbQhahaAAiBQAAh/BahcQBbhaCBAAMAhbAAAQCBAABaBaQBbBcAAB/QAACBhbBaQhaBbiBAAg");
	this.shape_11.setTransform(138,31);

	/*this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("Ag0BEIAIgTQAGAEAGAAQAGAAAFgDQAFgEADgGIAEgKIgthoIAeAAIAWA9IADANIAEgMIAVg+IAdAAIgwB6QgCAHgFAFQgDAFgFAEQgFAEgGABQgFABgGABQgNAAgJgIg");
	this.shape_12.setTransform(210.2,35.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AATA2IgbgsIgOAAIAAAsIgbAAIAAhqIAbAAIAAApIANAAIAZgpIAdAAIgiAzIAAAAIAnA3g");
	this.shape_13.setTransform(199.5,33.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgsA2IAAhqIAwAAQAIAAAHABQAHACAEAEQAFADADAFQACAGAAAGQAAAIgDAGQgEAGgHAEIAAAAQAFABAEABIAGAHQAEAGAAAIQAAAIgDAGQgDAGgFAEQgGAEgHACQgHACgJAAgAgSAkIATAAQAIAAAFgEQAEgEAAgHQAAgGgEgEQgFgEgIAAIgTAAgAgSgIIASAAQAGAAAEgFQAEgDAAgHQAAgFgEgEQgEgDgHAAIgRAAg");
	this.shape_14.setTransform(187.8,33.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgZA2QgFgCgFgFQgFgEgDgGQgDgGAAgHQAAgGACgFQACgEACgFQAGgFAKgFQANgFAbgCIAEAAIAAgBQAAgGgBgDQgCgDgDgDQgFgEgJAAQgGAAgJADQgHACgHAFIgKgTQAHgGAMgDQALgEALAAQAKAAAJADQAIADAGAFQAGAGADAHQADAJAAAJIAABDIgZAAIAAgJIAAgJIAAAAQgFAJgJAGIgIADQgFACgFAAQgIAAgHgCgAgHAIQgFACgEACQgDAFAAAEQAAAHADADQAFAEAHABQAFgBAFgCQAEgDADgDQAEgEACgFQABgFAAgFIAAgEIgEAAQgOABgJADg");
	this.shape_15.setTransform(175.9,33.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgMA2IAAhUIgkAAIAAgWIBgAAIAAAWIgjAAIAABUg");
	this.shape_16.setTransform(165.4,33.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgFA3IgLgDQgKgFgJgIQgHgHgEgKQgEgLAAgLQAAgKAEgKQAEgLAHgHQAJgIAKgFIALgDIAMgBQALAAALADIALAGIAIAHIgMASQgFgFgHgDQgIgDgIgBQgHABgFACQgGACgFAFQgEAFgCAGQgCAGAAAGQAAAHACAFQACAHAFAFQAEAEAHACQAFAEAHAAQAJAAAIgFQAIgDAHgHIAKATIgIAIIgLAGQgRAEgIAAg");
	this.shape_17.setTransform(154.5,33.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgqA2IAAhqIAaAAIAAAkIATAAQAKAAAHACQAIACAFAFQAFAFADAFQACAHAAAIQAAAJgCAGQgCAHgFAEQgFAFgIACQgIACgKABgAgQAjIAQAAQAIAAAEgFQAFgEAAgIQAAgIgFgEQgFgFgIAAIgPAAg");
	this.shape_18.setTransform(138.5,33.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgMA2IAAhUIgjAAIAAgWIBgAAIAAAWIgkAAIAABUg");
	this.shape_19.setTransform(127.5,33.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgYA2QgHgCgEgFQgFgEgDgGQgDgGAAgHQAAgGACgFQABgEADgFQAGgFAKgFQANgFAagCIAFAAIAAgBQAAgGgBgDQgCgDgDgDQgFgEgJAAQgGAAgIADQgIACgHAFIgKgTQAHgGALgDQAMgEALAAQALAAAIADQAIADAGAFQAGAGADAHQADAJAAAJIAABDIgZAAIAAgJIAAgJIAAAAQgFAJgJAGIgIADQgFACgGAAQgHAAgGgCgAgGAIQgHACgCACQgEAFgBAEQABAHAEADQAEAEAHABQAFgBAFgCQAEgDADgDQAEgEACgFQACgFgBgFIAAgEIgFAAQgNABgIADg");
	this.shape_20.setTransform(116.3,33.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgxAfQAFgBAEgDQAEgDADgFQADgGACgJQABgKAAgOIAAghIBOAAIAABqIgbAAIAAhUIgZAAIAAALQgBATgCAMQgFAQgDAHIgHAIQgDAEgFADIgKADQgGACgGAAg");
	this.shape_21.setTransform(104.6,33.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgFA3IgLgDQgLgFgHgIQgIgHgEgLQgEgJAAgMQAAgLAEgLQAEgKAHgIQAIgHAKgEQAJgEALAAQAMAAAIAEQAJAEAHAGQAFAIAEAJQADAJAAAKIgBAKIhIAAQAAAHADAGQACAEAFAEQAEAEAGABQAEADAHAAQAIAAAHgEQAJgDAGgGIAKATQgHAIgMAEQgMAEgMAAgAAYgNQAAgFgCgEQgBgEgDgDQgDgDgEgCQgEgBgEAAQgEAAgEABIgJAFIgFAHIgDAJIAuAAIAAAAg");
	this.shape_22.setTransform(93.3,33.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AAkBCIAAgZIhHAAIAAAZIgZAAIAAgvIANAAQAEgFADgJQADgHACgIQACgMAAgVIAAgWIBOAAIAABUIAQAAIAAAvgAgHgnQAAAQgCANQgGAUgFAJIAnAAIAAg+IgaAAg");
	this.shape_23.setTransform(80.8,35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgHBLQgHgBgHgDQgIgDgGgEQgGgEgFgFQgFgGgEgGQgEgGgCgHQgDgHgBgIQgCgIAAgHQAAgIACgHIAEgPIAHgNIAJgLQAFgFAGgFQAGgEAHgCQAHgDAIgCQAGgBAJAAIAPABIAOAEQAIADAGADQAHAEAFAFIgNAVQgIgIgLgEQgLgFgLABQgLgBgKAFQgJADgGAIQgGAHgEAJQgDAJAAALQAAAKADAJQAEAKAGAHQAHAIAJAEIAKADIAKABIAMgBIAMgEQAHgDANgLIAOAUQgPANgJAEQgIADgIACQgJACgKAAIgQgCg");
	this.shape_24.setTransform(67.2,31.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AwtE2QiBAAhbhbQhahaAAiBQAAh/BahcQBbhaCBAAMAhbAAAQCBAABaBaQBbBcAAB/QAACBhbBaQhaBbiBAAg");
	this.shape_25.setTransform(138,31);*/

	//this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276.1,62);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhRBhIAljBIA+AAIARABIARAEQAGACAGAFQAGAEAEAFQADAFADAHQACAGAAAHQAAAHgCAHIgGAMQgEAGgGAGQgFAFgHADIAAABQAGACAFACIAHAJQAFAKAAANQAAALgDAKQgEAJgGAIQgHAHgJAFQgIAGgLADIgPAEIgOABgAgaA4IAbAAQAIAAAGgDQAFgEADgFQADgHABgGQAAgGgEgFQgFgEgJAAIgbAAgAgLgVIAXAAQAKAAAFgGQAGgHAAgJQAAgFgDgEQgEgDgIAAIgWAAg");
	this.shape.setTransform(110.8,42.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeBiQgKgBgIgEIgQgHIgMgLIgLgMQgEgHgDgIQgEgIgCgIQgBgJAAgJQAAgMACgKQADgKAEgLQAEgKAHgJQAGgKAIgHQAIgIAKgGQAJgHAJgEQALgEAKgDQAKgCALAAQALAAAJACQAJABAJAEQAHADAIAEIANAKQAGAGAEAGQAGAHACAIQAEAHACAJQABAJAAAIQAAAMgCAKQgDALgEAKQgFALgGAJQgHAKgIAHQgIAJgJAGQgJAGgKAEQgKAFgLADQgKACgLAAQgKAAgJgCgAgMgzQgMAGgIAJQgKAJgFAMQgGANABANQAAAKADAIQACAJAHAGQAFAGAIAEQAIACAJAAQALABAMgGQALgFAJgKQAJgJAGgMQAFgNAAgNQAAgLgDgHQgDgIgGgHQgGgFgHgEQgIgCgJAAQgMAAgLAEg");
	this.shape_1.setTransform(91.4,42.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AALBhIgZhPIgWAAIgPBPIgvAAIAljBIAvAAIgOBLIASAAIA2hLIA3AAIhJBgIAAAAIAjBhg");
	this.shape_2.setTransform(72,42.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPBhIAShaQACgLAGgWIAAAAQgNAVgKAMIhGBaIgvAAIAljBIAvAAIgRBaIgJAgIABAAQAMgTAKgNIBGhaIAwAAIglDBg");
	this.shape_3.setTransform(51.7,42.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQBhIAPhMIhFAAIgPBMIgvAAIAljBIAvAAIgOBOIBFAAIAPhOIAvAAIgmDBg");
	this.shape_4.setTransform(31.2,42.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhTBhIAljBIBJAAQAIAAAIACQAHACAGACQAHAEAFAFQAGAFADAFQAEAHACAIQABAHAAAIQAAAMgDALQgDAMgGAIQgGAJgIAHQgIAIgKAEQgHAEgHABQgIACgIAAIgjAAIgLA8gAgRgCIAWAAQAKAAAGgFQAHgFAEgHQAEgIAAgJQAAgJgFgFQgFgFgKAAIgWAAg");
	this.shape_5.setTransform(12.6,42.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhOBhIAljBIB4AAIgIApIhIAAIgHAjIA5AAIgIAnIg5AAIgHAlIBMAAIgIApg");
	this.shape_6.setTransform(-3.4,42.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPBhIAeiYIhDAAIgeCYIgvAAIAljBICiAAIglDBg");
	this.shape_7.setTransform(-21.7,42.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeBiQgJgBgJgEIgQgHIgMgLIgLgMQgEgHgDgIQgEgIgCgIQgBgJAAgJQAAgMACgKQACgKAFgLQAFgKAGgJQAGgKAJgHQAHgIAKgGQAIgHALgEQAKgEAKgDQAKgCALAAQALAAAJACQAJABAJAEQAHADAIAEIANAKQAGAGAEAGQAFAHAEAIQADAHABAJQACAJAAAIQAAAMgDAKQgCALgEAKQgFALgHAJQgGAKgIAHQgIAJgJAGQgJAGgKAEQgLAFgKADQgKACgLAAQgKAAgJgCgAgMgzQgMAGgIAJQgKAJgFAMQgGANAAANQAAAKAEAIQACAJAHAGQAFAGAIAEQAIACAJAAQALABAMgGQALgFAJgKQAJgJAGgMQAFgNAAgNQAAgLgDgHQgDgIgGgHQgFgFgJgEQgHgCgKAAQgKAAgMAEg");
	this.shape_8.setTransform(-42.9,42.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWBiQgJgBgJgEQgIgDgIgEIgMgKIgLgNQgEgGgDgIIgGgQQgBgJAAgKQAAgMACgKQACgLAFgKQAFgKAFgJQAHgKAIgHQAHgIAKgGQAIgHALgEQAKgEALgDQAKgCAMAAQAJAAALACQAKABAJAEQAKADAJAFQAKAGAGAHIgaAhQgKgIgLgFQgNgEgNAAIgPABQgGACgGACQgMAGgJAKQgJALgDAMQgFALAAALQAAAJADAIQADAJAFAGQAGAHAIADQAJAEAKgBQALABATgHQANgGAOgKIASAlQgHAGgJAFQgJAGgKADQgLAFgLACQgKACgKAAQgKAAgKgCg");
	this.shape_9.setTransform(-63.1,42.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-75.7,24.6,197.5,36.4), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpBhIAIgpIAqAAIgIApgAgcAlIAViFIAwAAIgeCFg");
	this.shape.setTransform(-25.8,66.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPBhIAShaQACgLAGgWIAAAAQgNAVgKAMIhGBaIgvAAIAljBIAvAAIgRBaIgJAgIABAAQAMgTAKgNIBGhaIAwAAIglDBg");
	this.shape_1.setTransform(-40.3,66.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAtBzIAHglIhuAAIgIAlIgrAAIAPhOIAUAAQAJgMAHgNQAHgMAGgPQAIgSAIgkIAJguICCAAIgeCYIAWAAIgPBOgAAPhBQgIAigHASQgOAkgJAOIA4AAIAWhvIgnAAg");
	this.shape_2.setTransform(-62.8,68.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAsBhIgFgpIg7AAIgTApIgzAAIBkjBIA2AAIAbDBgAAkASIgEgkIgCgiIAAAAQgIAWgGAMIgRAkIAlAAg");
	this.shape_3.setTransform(-82.2,66.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfBiQgJgCgJgEQgIgEgHgGQgIgFgFgGIAbgfQAHAJALAEQAKAFAKABQAMAAAJgHQAEgDADgFQACgFAAgFQAAgIgEgDQgFgFgJAAIgcAAIAHgkIAXAAQAKAAAIgHQAEgDACgEQACgEAAgGQAAgIgEgDQgFgFgKAAQgIAAgIAEQgLADgMAJIgRgiQAIgGAJgGQAJgEAJgCQAOgFAPAAQANAAALADQALADAIAGQAJAGAEAJQAFAKAAALQAAAJgCAHQgDAHgEAHQgFAGgGAFQgGAFgIADIAAABQAKADAGAKQADAFACAGQACAGAAAGQAAAHgCAIQgCAGgDAGQgHAMgLAIQgLAIgPAGQgOAEgNAAQgKAAgKgCg");
	this.shape_4.setTransform(-97.8,66.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeBiQgJgBgJgEIgQgHIgMgLIgLgMQgEgHgDgIQgEgIgCgIQgBgJAAgJQAAgMACgKQACgKAFgLQAFgKAGgJQAGgKAJgHQAHgIAKgGQAIgHALgEQAKgEAKgDQAKgCALAAQALAAAJACQAJABAJAEQAHADAIAEIANAKQAGAGAEAGQAFAHAEAIQADAHABAJQACAJAAAIQAAAMgDAKQgCALgEAKQgFALgHAJQgGAKgIAHQgIAJgJAGQgJAGgKAEQgLAFgKADQgKACgLAAQgKAAgJgCgAgMgzQgMAGgIAJQgKAJgFAMQgGANAAANQAAAKAEAIQACAJAHAGQAFAGAIADQAIADAJAAQALABAMgGQALgFAJgKQAJgJAGgMQAFgNAAgNQAAgLgDgHQgDgIgGgHQgFgFgJgEQgHgCgKAAQgKAAgMAEg");
	this.shape_5.setTransform(-115.8,66.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAPBhIAeiYIhDAAIgeCYIgvAAIAljBICiAAIglDBg");
	this.shape_6.setTransform(-137.1,66.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-149.6,48.9,129.8,36.4), null);


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


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKB8IgCgBIgEgEQgCgCgBgDIAAgEIABgGIADgEQACgDACgBIAHgBIAAAAQAIABADADIAEAIQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABIgBACIgCAFQgCACgDACIgFACgAgpB8IgCAAIgEgCIgDgDQgDgEAAgJQAAgEABgCIADgDIADgDQADgCAFABIAAgBIAIADIADABIAEAIIAAAJIgDAFIgCADIgGADIgEABgAAxBsIgGgBIgDgDIgDgEIgBgFIABgHIACgDIAFgEIAHgCIAIACIACACIADADIACAFIABAEIgBADIgCAEIgCACQgCADgGABIgCABgAhQBXIgCAAIgBAAIgEgCIgDgEIgCgDIgBgHIABgFIACgEIADgDQAEgFAFACIAAgCQAIACAEAEIABABIAAACIACADQACADgBAFIgBADIgBADQgEAGgHABIgDABgAAZBSIgFgBIgBgBIgDgBIgEgDIgBgEQgBgDAAgDIABgEIACgEIAFgFIAHgBIAAAAQAEAAAEACIADADIAEAGQABADgBADIgBACIgCAFIgDADIgHADgABVBOIgCgCQgDgCgCgDQgEgIAEgGIAEgFIADgCIAGAAIAAgBQAEAAAFADQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAIACACIABACIAAAEIAAAFIgBACIgCAEIgDADIgGABIgDABgAggBMIgHgBIgCgCIgDgDQgGgIAFgJIAEgEIACgBIAHgBIAAgCQAHAAAFAEIADACIABADIABADIABAEIgBAFIgCAEIgDADQgGADgFAAIgBAAgAhnAyIgFgCIgDgBIgEgGQgEgHAFgIIAFgFIAHgBIAAAAQAIAAADAEIAEAHIAAAFIAAADIgDAEIgCAEIgEABIgEACgABAApIgCgBIgCgBIgGgFIgCgDIgBgHIABgDIACgFIAGgEIAGgBIAAAAQAEAAAFADQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAIABACIACADIABAEIgBAFIgBACIgCADQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgEACgABrAkIgGgCIgEgDIgCgEIgBgFIABgGIACgDIAEgFIAIgBIAAgBQAIACADAEIABABIABACIABACIABAEQAAAFgBABIgBACIgBACIgBABQgDADgGABIgCAAgAg7ASIgCAAIgCAAIgCgBIgCgCQgDgBgCgDQgDgGACgFIACgEIADgEQAEgCAFAAIAAgBIAIADIACACIADADIACADIAAAFIAAADIgDAFIgCACQgEACgEABgAhxAIIgBAAIgDgCIgEgEQgEgFAEgIIAFgGIACgBIAGgBIAAgBQAFABADACIADACIAEAHQABADgBACIAAADIgBACIgCACIgDACIgCACIgHABgABlgUIgCgBIgCAAIgDgDQgEgGABgGQAAgGAGgEIACgBIAHgBQAHABAEADIABACIACAEQACAEgCAFIgCACIAAACIgCACIgEACIgGACgAA5gZIgEgBIgCAAIgCgCQgFgEgBgDIgBgEQAAgEACgDIAFgGIACgCIAGgBIAAgBQAJACACAEIAEAHQAAABAAAAQABABAAAAQAAABgBAAQAAABAAABIAAACIgDAFIgCACIgIAEgAgrgiIgFgCIgCgBIgDgDIgDgFIAAgEIAAgEIACgEIAEgFIACgBIAHgBIAAAAQADAAAEACIAFAEIABACIABACIABAFIgBAFIgBACIgBACIgCACIgEACIgGACgAhcgpIgCAAIgCgBIgEgEIgDgCIgBgDIgBgGIABgDIABgDIACgDIADgCQAEgCAFAAIgBgBIAIADIACABIADADQADAFAAAEIgDAHIgCACQgDADgFACIgDAAgAAOgvIgIgDIgDgEIgCgDIAAgFIAAgEIADgFIADgDQADgCAGAAIAAgBIAIACIACABIACAEIADAFIAAAFIgBADIgCAEIgEAEIgIACgABUg+IgFgCIgDgBIgEgGQgEgIAFgGIADgEIACgCIAHgBIAAAAQAIABADAEIADADIABADIAAAGIAAACIgDAFIgCADIgEABIgDACgAg3hNIgCgBIgCAAIgCgCQgFgDgBgDIgBgFQAAgGADgEIAGgEIAGgCIAAAAQAEAAAFADIADACIABADIACACQABACgBAEIAAAEIgDAEIgCACIgIAEgAArhWIgCgBIgCAAIgCgCQgDgCgDgFQgBgFABgEIACgFIAEgDIACgBIAGgCIAAAAQAFAAAFAEIACACIABACIACADIAAACIAAAFIgEAHQgCADgHACgAgHhfIgCAAIgFgDIgEgEIgBgCIgBgHIABgDIABgDIACgCIADgCQACgCAGAAIAAgBQADAAACACQADAAACADIAEAHQABAEgBADIgCADIgBABQgBABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAQgDADgDAAIgCABg");
	this.shape.setTransform(12.4,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,24.8,25), null);


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


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(138,31,1,1,0,0,0,138,31);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,276.1,62), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(187.7,23.2,1,1,0,0,0,138,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(189.3,-25.1,1,1,0,0,0,104,142.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(49.7,-167.4,276.1,284.7), null);


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

	// Символ 26
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(61.2,20.6,1.516,1.516,0,0,0,57.6,18.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({regX:57.5,scaleX:1.09,scaleY:1.09,x:61.1,y:19.3,alpha:1},9,cjs.Ease.get(1)).wait(62).to({alpha:0},9).wait(1));

	// Символ 28
	this.instance_1 = new lib.Символ28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(239.9,19.3,1.397,1.397,0,0,0,98.8,18.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(73).to({_off:false},0).to({scaleX:1.09,scaleY:1.09,x:239.8,alpha:1},9,cjs.Ease.get(1)).wait(58).to({alpha:0},9).wait(1));

	// Символ 27
	this.instance_2 = new lib.Символ27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(425.8,19.2,1.432,1.432,0,0,0,65,18.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(77).to({_off:false},0).to({regX:65.1,scaleX:1.09,scaleY:1.09,x:425.9,y:19.3,alpha:1},11,cjs.Ease.get(1)).wait(52).to({alpha:0},9).wait(1));

	// Слой 1
	this.tek = new lib.Символ22();
	this.tek.parent = this;
	this.tek.setTransform(168,25.7,1,1,0,0,0,168,25.7);
	this.tek.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.tek).to({alpha:1},9).wait(49).to({alpha:0},11).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,335.9,51.4);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 7
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(40.5,36.1,0.91,0.91,0,0,0,211,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:211.1,regY:46.9,x:177.7},22,cjs.Ease.get(-1)).to({x:229.1},23,cjs.Ease.get(1)).to({regX:211,regY:47,x:40.5},22,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.1,-6.7,384,85.6);


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


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 6
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(322,51,1,1,0,0,0,211,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:403.2},22,cjs.Ease.get(-1)).to({x:488},23,cjs.Ease.get(1)).to({x:401.1},22,cjs.Ease.get(-1)).to({x:329.1},14,cjs.Ease.get(1)).to({x:322},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.3,4,535.3,94);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(53.3,13.2,0.528,0.528,0,0,0,58.5,21.1);

	this.car = new lib.Символ14();
	this.car.parent = this;
	this.car.setTransform(232.3,23.9,0.623,0.623,0,0,0,142.1,31.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.car},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0.1,0,311.2,53.8), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
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
        
		var _this = this;
		window._setCanvasSize = function() {
			
			var stageSize = getWindowSize();
			var w = stageSize.iw;
			
			_this.logo.x = 0;
			_this.logo.y = 0;
			
			 _this.but.x = w;
			_this.but.y = 250;
			
			 _this.cars.x = w / 3;
			_this.cars.y = 125;
			
			 _this.tek.x = w / 2;
			_this.tek.y = 60;
			
			if(w > 490){
				 _this.tek.x = w * 0.7;
				_this.tek.y = 40;
			}
		}
				
		window.onresize=function(){_setCanvasSize();}
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Символ 2
	this.logo = new lib.Символ2();
	this.logo.parent = this;
	this.logo.setTransform(0,0,0.55,0.55,0,0,0,-16,-9.8);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// Слой 1
	this.but = new lib.Символ17();
	this.but.parent = this;
	this.but.setTransform(299,250,0.711,0.711,0,0,0,337.4,64.5);

	this.timeline.addTween(cjs.Tween.get(this.but).wait(1));

	// Слой 3
	this.tek = new lib.Символ33();
	this.tek.parent = this;
	this.tek.setTransform(149.1,61.4,0.86,0.86,0,0,0,167.5,22.2);

	this.timeline.addTween(cjs.Tween.get(this.tek).wait(1));

	// Символ 1
	this.cars = new lib.Символ3();
	this.cars.parent = this;
	this.cars.setTransform(149,124.1,1,1,0,0,0,180.2,5.8);

	this.timeline.addTween(cjs.Tween.get(this.cars).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(118.9,130.4,325.1,282.1);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#00CC00",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		/*{src:"images/blue.png", id:"blue"},
		{src:"images/cup.png", id:"cup"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/money.png", id:"money"},
		{src:"images/red.png", id:"red"}*/
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;