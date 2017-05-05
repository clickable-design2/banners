(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.BWlogo = function() {
	this.initialize(img.BWlogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,38);


(lib.core_logo = function() {
	this.initialize(img.core_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,113);


(lib.Image1 = function() {
	this.initialize(img.Image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.Image2 = function() {
	this.initialize(img.Image2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.Image3 = function() {
	this.initialize(img.Image3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.Image41 = function() {
	this.initialize(img.Image41);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.Image42 = function() {
	this.initialize(img.Image42);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.Image43 = function() {
	this.initialize(img.Image43);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.Meraaslogo = function() {
	this.initialize(img.Meraaslogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,128);// helper functions:

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


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIABASQAAAGABAGQADAEAFADQAFACAJAAQAGAAAHgCIAIgDIABAAIAAAXIgPAEIgNABQgUAAgMgMg");
	this.shape.setTransform(189.4,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAiBPIAAhWIgBgUQgBgJgCgGQgDgFgGgDQgGgDgKAAQgIAAgKAFQgKAFgKAIIAAByIgaAAIAAiYIAaAAIAAARQALgKALgGQALgFAMgBQAXABANAPQAMAOAAAdIAABig");
	this.shape_1.setTransform(176.9,18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgtA8QgUgVAAgmQAAgkAUgWQATgWAfAAQAOAAALAEQALAEAIAJQAJAJADAMQAFANAAASIAAANIhpAAQAAAbANAOQAOAOAWAAQAJAAAIgCIAPgFIALgGIAIgGIACAAIAAAcIgLAFIgMAEIgOADIgPABQgjAAgVgUgAApgQQAAgKgDgIQgBgHgFgFQgEgGgIgDQgGgDgLAAQgJAAgHADQgHADgGAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_2.setTransform(161.7,18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgbBqIgVgFIAAgbIABAAIAIADIALADIAOADIANACQALAAAHgEQAJgDAFgGQAEgFABgHQACgIABgJIAAgOQgLAKgKAEQgKAEgOAAQgaAAgPgUQgQgTAAgkQAAgSAGgPQAEgOAKgLQAJgKALgFQAMgFALgBQAMAAAJAEQAJACAJAFIABgGIAYAAIAACGQAAAngRASQgRASghAAQgMAAgMgBgAgZhFQgMAOAAAbQAAAZAJANQAIANAUAAQAJAAAKgEQALgEAJgHIAAhSQgKgGgIgCQgJgBgHAAQgTAAgLAOg");
	this.shape_3.setTransform(146.1,20.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AA5BmIgTg5IhNAAIgSA5IgcAAIBGjLIAfAAIBGDLgAAfAWIgfhfIgfBfIA+AAg");
	this.shape_4.setTransform(130.5,15.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgsA8QgVgVAAgmQAAgkAUgWQATgWAfAAQAOAAALAEQALAEAIAJQAIAJAFAMQAEANAAASIAAANIhpAAQAAAbAOAOQANAOAWAAQAJAAAJgCIAOgFIAMgGIAIgGIABAAIAAAcIgLAFIgMAEIgNADIgQABQgkAAgTgUgAApgQQgBgKgCgIQgCgHgEgFQgEgGgIgDQgHgDgKAAQgJAAgHADQgHADgGAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_5.setTransform(106.1,18.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgLBMIg5iXIAcAAIApB0IAph0IAbAAIg6CXg");
	this.shape_6.setTransform(91.9,18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgMBnIAAiYIAZAAIAACYgAgNhLIAAgaIAcAAIAAAag");
	this.shape_7.setTransform(81.8,15.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AggBMQgNgEgJgEIAAgeIABAAIAIAGIAMAHIAOAFQAIADAJAAIAMgCQAHgCADgCQAFgCACgFQACgDAAgHQAAgJgFgFQgFgEgNgDIgLgEIgPgDQgSgFgHgKQgIgKAAgQQAAgUAPgNQAQgNAZAAQAMAAANADQANADAJAFIAAAcIgCAAQgJgIgMgFQgNgEgMAAQgMAAgIAFQgJAFAAALQAAAKAFAFQAFAEAMAEIAMADIAOACQARAFAJAJQAIAKAAARQAAAKgDAIQgEAJgIAGQgIAHgKAEQgLADgOAAQgQAAgNgEg");
	this.shape_8.setTransform(72.6,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgdBLQgKgDgGgHQgHgHgEgLQgDgLAAgPIAAhiIAZAAIAABVIACAVQABAIACAGQAEAGAFACQAGADAKAAQAIAAALgFQAKgGAJgHIAAhxIAaAAIAACXIgaAAIAAgRQgMALgKAFQgLAFgMAAQgKAAgIgDg");
	this.shape_9.setTransform(58.3,18.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_10.setTransform(47.4,15.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgPBLQgNgFgJgJQgKgLgFgPQgFgOAAgVQAAgSAFgQQAGgOAJgKQAJgKANgFQAOgGAOAAQANAAALAEQAMADAJAFIAAAdIgBAAIgHgGIgLgFIgMgGQgIgBgGAAQgTgBgMAPQgNAQAAAaQAAAcAMAPQAMAPAUAAQAMgBAMgFQALgFAJgIIABAAIAAAdIgJAEIgLAEIgMADIgNABQgPAAgNgFg");
	this.shape_11.setTransform(37.9,18.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AAkBMIgkg5IgmA5IgdAAIA1hLIg0hMIAfAAIAkA5IAmg5IAdAAIg1BLIA1BMg");
	this.shape_12.setTransform(24.7,18.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("Ag/BmIAAjLIB/AAIAAAYIhkAAIAAA4IBdAAIAAAXIhdAAIAABMIBkAAIAAAYg");
	this.shape_13.setTransform(10.4,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(0,-4.2,196.2,37.8), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.core_logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(0,0,234,113), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeB6QAlg9AAg9QAAgXgFgXQgDgTgIgSQgFgLgQgbIARAAQAXAgALAgQAKAcAAAdQAAAigNAhQgNAggSAXg");
	this.shape.setTransform(307.3,18.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghBcQAAgWAIgfQAIgfAQgcQAOgdASgUIhaAAIAAgWIB3AAIAAASQgSATgRAfQgSAegIAiQgHAXgCAcg");
	this.shape_1.setTransform(295.5,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag8BeQgBgJADgIQAFgMAKgMQALgNATgQQAegYAKgNQALgPAAgNQAAgOgKgJQgKgKgPAAQgQABgKAJQgJALgBARIgXgDQACgaAQgNQAQgOAZgBQAbABAQAPQAPAOAAAXQAAALgEAKQgFALgKALQgLAMgZAUIgZAYIgKAMIBbAAIAAAXg");
	this.shape_2.setTransform(280.7,16.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag8BeQgBgJADgIQAFgMAKgMQALgNATgQQAegYAKgNQALgPAAgNQAAgOgKgJQgKgKgPAAQgQABgKAJQgJALgBARIgXgDQACgaAQgNQAQgOAZgBQAbABAQAPQAPAOAAAXQAAALgEAKQgFALgKALQgLAMgZAUIgZAYIgKAMIBbAAIAAAXg");
	this.shape_3.setTransform(266.2,16.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghBcQAAgWAIgfQAIgfAQgcQAOgdASgUIhaAAIAAgWIB3AAIAAASQgSATgRAfQgSAegIAiQgHAXgCAcg");
	this.shape_4.setTransform(252.1,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgpBQQgRgOgCgXIAXgDQAEATAJAJQAKAIANAAQAQAAAKgLQAMgLAAgRQAAgPgLgLQgKgKgQAAQgFAAgKADIADgTIADAAQAOAAALgIQAMgHAAgQQAAgNgIgIQgJgIgNAAQgNAAgIAIQgKAIgCARIgXgEQAEgXAPgMQAPgNAWAAQAPAAAMAGQANAHAHALQAGAMAAAMQAAAMgGAKQgGAKgNAGQARAEAIALQAKAMAAASQAAAYgSARQgSARgaAAQgZAAgPgPg");
	this.shape_5.setTransform(237.6,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgqBKQgSgVAAgwQAAg1ATgZQASgVAcAAQAWAAAOAMQAOANADAWIgXABQgDgNgFgGQgKgKgNAAQgKAAgIAGQgLAIgGAPQgGAPgBAcQAJgNALgFQAMgHAMAAQAXAAAQARQAQAQAAAbQAAARgHAPQgIAPgNAIQgNAIgRAAQgbAAgSgVgAgXACQgLALAAATQAAALAFALQAFALAJAGQAJAGAJAAQAOAAALgNQAKgLAAgUQAAgTgKgMQgLgJgPgBQgPABgKAJg");
	this.shape_6.setTransform(223.1,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgqBMQgRgYgBg0QABggAGgUQAHgUANgLQAOgLATAAQAPAAAMAGQALAGAHALQAIAMADAQQAEARABAaQAAAhgHAUQgHAUgNAMQgNAKgVAAQgaAAgQgTgAgZg+QgLARAAAtQAAAuALAPQAKAQAPAAQAPAAAMgQQAKgPAAguQAAgtgKgPQgMgPgPAAQgPAAgKANg");
	this.shape_7.setTransform(201.5,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgpBMQgTgYABg0QgBggAHgUQAHgUAOgLQAMgLAUAAQAPAAALAGQALAGAIALQAHAMAFAQQADARABAaQgBAhgGAUQgHAUgNAMQgOAKgUAAQgaAAgPgTgAgZg+QgLARAAAtQAAAuAKAPQALAQAPAAQAPAAALgQQALgPAAguQAAgtgLgPQgLgPgPAAQgPAAgKANg");
	this.shape_8.setTransform(187,16.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgrBPQgRgQAAgZQAAgSAJgMQAJgLARgFQgOgFgHgKQgHgKAAgNQAAgUAPgOQAOgOAYAAQAYAAAPAOQAPAPAAATQAAAOgHAKQgHAJgOAFQASAFAJAMQAIANAAARQAAAYgQAQQgRAQgcAAQgaAAgRgQgAgaALQgLALAAAQQAAAKAFAJQAFAKAJAEQAJAFAJABQARAAAKgLQALgLAAgQQAAgQgLgLQgLgLgQAAQgQAAgKAKgAgVhCQgIAHAAANQAAAMAIAJQAJAIAMAAQANAAAJgIQAIgJAAgMQAAgMgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_9.setTransform(172.6,16.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAPB6QgSgXgNggQgOghAAgiQAAgdAKgcQAMggAXggIAQAAQgPAagFAMQgIASgEASQgFAYAAAXQAAA9AlA9g");
	this.shape_10.setTransform(161.4,18.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgkBZQgRgHgKgPQgKgPAAgTIAXgCQACAOAGAJQAGAJANAGQAMAFAPAAQAOAAALgEQALgEAFgHQAFgIAAgIQAAgJgFgHQgFgGgLgFIghgJQgZgGgLgEQgNgHgGgLQgHgKAAgNQAAgOAIgMQAIgMAPgHQAQgGATAAQATAAAQAHQAQAGAIANQAJANAAARIgXABQgCgRgLgJQgLgJgVAAQgWAAgKAIQgKAIAAAMQAAAKAHAGQAHAHAdAGQAeAHALAFQARAHAHALQAIAMAAAPQAAAPgIANQgJANgQAHQgQAHgUAAQgYAAgRgHg");
	this.shape_11.setTransform(140.8,16.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AA7BdIgWg5IhNAAIgUA5IgaAAIBHi5IAaAAIBMC5gAAeARIgUgzQgJgYgDgOQgEARgGASIgUA2IA+AAg");
	this.shape_12.setTransform(123.6,16.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AA7BdIgWg5IhNAAIgUA5IgaAAIBHi5IAaAAIBMC5gAAeARIgUgzQgJgYgDgOQgEARgGASIgUA2IA+AAg");
	this.shape_13.setTransform(106.3,16.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAzBdIgZgnIgSgaQgGgIgFgEQgGgDgFgCIgOgBIgcAAIAABTIgZAAIAAi5IBRAAQAZAAANAFQANAFAIAMQAIANgBAPQAAAVgMANQgNANgaAEQAJAEAFAFQALAKAKAPIAgAygAg4gKIA1AAQAPAAAKgEQAKgDAEgIQAFgHABgKQAAgNgKgIQgKgIgVgBIg5AAg");
	this.shape_14.setTransform(89.2,16.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhFBdIAAi5ICGAAIAAAWIhtAAIAAA5IBmAAIAAAVIhmAAIAAA/IByAAIAAAWg");
	this.shape_15.setTransform(70.6,16.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ABBBdIAAibIg2CbIgVAAIg2idIAACdIgYAAIAAi5IAlAAIAsCCIAIAcIAKgeIAtiAIAhAAIAAC5g");
	this.shape_16.setTransform(50.8,16.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgpBMQgTgYABg0QgBggAHgUQAHgUAOgLQANgLATAAQAPAAALAGQALAGAIALQAHAMAFAQQAEARAAAaQgBAhgGAUQgHAUgNAMQgOAKgUAAQgaAAgPgTgAgZg+QgLARAAAtQAAAuAKAPQALAQAPAAQAPAAALgQQALgPAAguQAAgtgLgPQgLgPgPAAQgPAAgKANg");
	this.shape_17.setTransform(25.5,16.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgqBMQgRgYgBg0QABggAGgUQAHgUAOgLQANgLATAAQAPAAAMAGQAKAGAIALQAIAMADAQQAEARAAAaQABAhgHAUQgHAUgNAMQgNAKgVAAQgaAAgQgTgAgYg+QgMARAAAtQAAAuALAPQAKAQAPAAQAPAAAMgQQAKgPAAguQAAgtgKgPQgLgPgQAAQgPAAgJANg");
	this.shape_18.setTransform(11,16.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgrBPQgRgQAAgZQAAgSAJgMQAJgLARgFQgOgFgHgKQgHgKAAgNQAAgUAPgOQAOgOAYAAQAYAAAPAOQAPAPAAATQAAAOgHAKQgHAJgOAFQASAFAJAMQAIANAAARQAAAYgQAQQgRAQgcAAQgaAAgRgQgAgaALQgLALAAAQQAAAKAFAJQAFAKAJAEQAJAFAJABQARAAAKgLQALgLAAgQQAAgQgLgLQgLgLgQAAQgQAAgKAKgAgVhCQgIAHAAANQAAAMAIAJQAJAIAMAAQANAAAJgIQAIgJAAgMQAAgMgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_19.setTransform(-3.4,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(-12.6,0,326.1,33.1), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Find out more", "bold 28px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 33;
	this.text.parent = this;
	this.text.setTransform(40.7,38.3,0.958,0.958);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().rr(-129.5,-39,259,78,19.5);
	this.shape.setTransform(129.6,53.3,0.826,0.826);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(22.6,21.2,213.9,64.4), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image43();
	this.instance.parent = this;
	this.instance.setTransform(-4,-33,0.62,0.62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(-4,-33,310,310), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image42();
	this.instance.parent = this;
	this.instance.setTransform(0,-59,0.602,0.602);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,-59,301.3,301.3), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image41();
	this.instance.parent = this;
	this.instance.setTransform(0,-20,0.604,0.604);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,-20,302,302), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image3();
	this.instance.parent = this;
	this.instance.setTransform(-24,-44,1.242,1.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(-24,-44,621.1,621.1), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image2();
	this.instance.parent = this;
	this.instance.setTransform(-22,-4,1.234,1.234);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-22,-4,617.2,617.2), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image1();
	this.instance.parent = this;
	this.instance.setTransform(-19,0,1.201,1.201);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-19,0,600.6,600.6), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAjBkIAAhcQAAgRgIgJQgJgIgOAAQgKAAgKAGQgJAFgEAKQgFAJAAARIAABPIgYAAIAAjHIAYAAIAABIQASgUAZAAQAQAAAMAGQAMAGAFAMQAFALAAAUIAABcg");
	this.shape.setTransform(116.6,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsA4QgSgTAAgkQAAgXAHgSQAIgRAQgJQAQgJASAAQAYAAAPAMQAPAMAEAWIgYAEQgEgPgIgIQgJgGgMAAQgSAAgLAMQgMAOAAAcQAAAdALAOQALANARgBQAPABAKgKQAJgIADgTIAYADQgEAagQAOQgQAOgYAAQgdAAgSgUg");
	this.shape_1.setTransform(102.3,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1BAQgNgLAAgTQAAgKAFgJQAFgJAIgFQAIgEAKgDIAVgEQAdgDAOgFIAAgHQABgPgIgGQgJgIgSAAQgRAAgJAFQgHAHgEAPIgZgEQADgOAIgKQAHgKAPgFQAOgFASAAQASAAAMAFQAMAEAFAGQAGAHACAKIABAXIAAAfQAAAjACAJQABAJAFAJIgaAAQgDgIgCgKQgNALgNAFQgMAFgPAAQgXAAgNgMgAgFAJQgPACgHADQgGACgDAGQgEAFABAHQgBAJAIAHQAIAGAOAAQANABALgHQALgGAFgKQAEgJAAgQIAAgJQgNAFgaAEg");
	this.shape_2.setTransform(87,22.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgvA4QgTgUAAgjQAAgjATgUQATgVAdAAQAdAAASAUQATAUAAAjIAAAGIhsAAQACAYAMANQAMAMARAAQAOABAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAApgNQgCgTgHgJQgMgNgTAAQgQAAgLALQgMALgBATIBQAAIAAAAg");
	this.shape_3.setTransform(71.5,22.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhLBkIAAjHIBLAAQAWAAAOAGQAOAGAIANQAIAMAAAOQAAANgHALQgHAMgOAHQASAFAKAMQAKANAAARQAAAOgGAMQgGAMgJAHQgJAHgNADQgNADgTAAgAgwBNIAxAAIASgBQAJgCAGgEQAGgEAEgHQAEgHAAgKQAAgLgGgIQgFgJgKgDQgLgDgSAAIguAAgAgwgPIArAAQARAAAHgCQALgDAFgHQAFgHAAgLQAAgKgFgHQgFgIgJgDQgJgDgUAAIgoAAg");
	this.shape_4.setTransform(54.7,19.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvA4QgTgUAAgjQAAgjATgUQATgVAdAAQAdAAASAUQATAUAAAjIAAAGIhsAAQACAYAMANQAMAMARAAQAOABAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAApgNQgCgTgHgJQgMgNgTAAQgQAAgLALQgMALgBATIBQAAIAAAAg");
	this.shape_5.setTransform(29.5,22.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjBkIAAhcQAAgRgJgJQgIgIgOAAQgKAAgKAGQgJAFgEAKQgFAJAAARIAABPIgYAAIAAjHIAYAAIAABIQASgUAZAAQAQAAAMAGQAMAGAFAMQAFALAAAUIAABcg");
	this.shape_6.setTransform(14,19.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABAEADABQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_7.setTransform(2.5,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-3.6,2.3,130.1,35.3), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABAEADABQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape.setTransform(274.6,22.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1BAQgNgLAAgTQAAgKAFgJQAFgJAIgFQAIgEAJgDIAXgEQAcgDAOgFIABgHQAAgPgHgGQgKgIgSAAQgRAAgIAFQgJAHgDAPIgZgEQADgOAIgKQAHgKAPgFQAOgFASAAQASAAAMAFQAMAEAFAGQAFAHADAKIABAXIAAAfQAAAjACAJQABAJAFAJIgaAAQgDgIgCgKQgOALgMAFQgMAFgPAAQgXAAgNgMgAgFAJQgPACgGADQgHACgDAGQgEAFAAAHQAAAJAIAHQAHAGAPAAQANABALgHQALgGAFgKQAEgJAAgQIAAgJQgNAFgaAEg");
	this.shape_1.setTransform(262.8,24.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvA4QgTgUAAgjQAAgjATgUQATgVAdAAQAdAAASAUQATAUAAAjIAAAGIhsAAQACAYAMANQAMAMARAAQAOABAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAApgNQgCgTgHgJQgMgNgTAAQgQAAgLALQgMALgBATIBQAAIAAAAg");
	this.shape_2.setTransform(239.5,24.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABAEADABQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_3.setTransform(228,22.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_4.setTransform(220.9,21.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggBFQgLgFgGgHQgFgIgCgLQgCgHAAgPIAAhZIAZAAIAABPQAAATABAHQADAKAHAFQAIAGALAAQAKAAAJgGQAKgGAEgJQAEgKAAgTIAAhMIAZAAIAACQIgWAAIAAgWQgRAZgcAAQgNAAgLgFg");
	this.shape_5.setTransform(209.9,24.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnBgQgSgIgLgQQgKgQgBgUIAZgCQACAPAHAJQAGAKAOAGQANAGARAAQAPAAALgFQAMgEAGgIQAFgIAAgJQAAgKgFgHQgGgHgMgEQgIgEgbgGQgcgHgLgFQgOgHgHgLQgHgMAAgNQAAgQAJgNQAIgNARgHQAQgHAVAAQAVAAARAIQARAHAJAOQAJAOABARIgaACQgCgTgLgKQgMgJgXAAQgXAAgLAJQgLAIAAANQAAALAHAHQAIAHAfAHQAhAHAMAGQARAHAJAMQAIANAAAQQAAAQgJAOQgJAOgSAIQgRAIgVAAQgaAAgTgIg");
	this.shape_6.setTransform(192.8,21.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoBAQgPgLgEgYIAYgDQACAOAKAIQAJAHAQAAQARABAIgIQAIgGAAgKQAAgIgHgFQgFgDgUgFQgagHgLgEQgKgFgGgJQgFgIAAgLQAAgKAEgIQAFgJAIgFQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAIQAGAIACAPIgYADQgCgLgIgHQgHgFgOAAQgRgBgHAGQgHAGAAAHQAAAFADAEQADAEAGACIAVAGQAaAIAKAEQALAEAGAIQAFAJAAAMQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape_7.setTransform(168.7,24.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvA4QgTgUAAgjQAAgjATgUQATgVAdAAQAdAAASAUQATAUAAAjIAAAGIhsAAQACAYAMANQAMAMARAAQAOABAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAApgNQgCgTgHgJQgMgNgTAAQgQAAgLALQgMALgBATIBQAAIAAAAg");
	this.shape_8.setTransform(154,24.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_9.setTransform(143.1,21.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag1BAQgNgLAAgTQAAgKAFgJQAFgJAIgFQAIgEAJgDIAXgEQAcgDAOgFIABgHQAAgPgHgGQgKgIgSAAQgRAAgJAFQgIAHgDAPIgZgEQADgOAIgKQAHgKAPgFQAOgFASAAQASAAAMAFQAMAEAFAGQAFAHADAKIABAXIAAAfQAAAjACAJQABAJAFAJIgaAAQgDgIgCgKQgOALgMAFQgMAFgPAAQgXAAgNgMgAgFAJQgPACgGADQgHACgDAGQgEAFAAAHQAAAJAIAHQAHAGAPAAQANABALgHQALgGAFgKQAEgJAAgQIAAgJQgNAFgaAEg");
	this.shape_10.setTransform(132.3,24.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnBgQgSgIgLgQQgKgQgBgUIAZgCQACAPAHAJQAGAKAOAGQANAGARAAQAPAAALgFQAMgEAGgIQAFgIAAgJQAAgKgFgHQgGgHgMgEQgIgEgbgGQgcgHgLgFQgOgHgHgLQgHgMAAgNQAAgQAJgNQAIgNARgHQAQgHAVAAQAVAAARAIQARAHAJAOQAJAOABARIgaACQgCgTgLgKQgMgJgXAAQgXAAgLAJQgLAIAAANQAAALAHAHQAIAHAfAHQAhAHAMAGQARAHAJAMQAIANAAAQQAAAQgJAOQgJAOgSAIQgRAIgVAAQgaAAgTgIg");
	this.shape_11.setTransform(115.1,21.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgvA4QgTgUAAgjQAAgjATgUQATgVAdAAQAdAAASAUQATAUAAAjIAAAGIhsAAQACAYAMANQAMAMARAAQAOABAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAApgNQgCgTgHgJQgMgNgTAAQgQAAgLALQgMALgBATIBQAAIAAAAg");
	this.shape_12.setTransform(90.3,24.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAiBkIAAhcQAAgRgHgJQgIgIgPAAQgKAAgJAGQgKAFgFAKQgDAJAAARIAABPIgZAAIAAjHIAZAAIAABIQARgUAZAAQAQAAAMAGQAMAGAFAMQAFALAAAUIAABcg");
	this.shape_13.setTransform(74.8,21.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABAEADABQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_14.setTransform(63.3,22.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABAEADABQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_15.setTransform(47.8,22.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_16.setTransform(40.7,21.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgoBAQgPgLgEgYIAYgDQACAOAKAIQAJAHAQAAQARABAIgIQAIgGAAgKQAAgIgHgFQgFgDgUgFQgagHgLgEQgKgFgGgJQgFgIAAgLQAAgKAEgIQAFgJAIgFQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAIQAGAIACAPIgYADQgCgLgIgHQgHgFgOAAQgRgBgHAGQgHAGAAAHQAAAFADAEQADAEAGACIAVAGQAaAIAKAEQALAEAGAIQAFAJAAAMQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape_17.setTransform(30.5,24.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_18.setTransform(20.5,21.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNBkIhOjHIAdAAIA0CQIAKAhIALghIA2iQIAbAAIhPDHg");
	this.shape_19.setTransform(8.5,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-2.8,4.5,283.3,35.3), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgvBVQgSgSAAgaQAAgUAKgNQAKgMASgFQgPgGgIgKQgHgKAAgPQAAgWAPgPQARgOAZAAQAZAAARAPQAPAPAAAWQAAAOgGAKQgIAKgPAGQATAGAJAMQAKAOAAASQAAAagTASQgRARgeAAQgdAAgSgRgAgcAMQgMAMAAARQAAAKAFAKQAFAKAKAGQAKAFAKAAQASAAALgLQAMgMAAgRQAAgSgMgMQgMgLgRAAQgRAAgLALgAgXhIQgJAJAAAMQAAAPAJAJQAJAJAOAAQAOAAAKgJQAIgJABgNQAAgOgKgJQgKgJgNAAQgNAAgKAJg");
	this.shape.setTransform(122,19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMBlIAAidQgIAJgOAIQgPAJgLAFIAAgZQAUgJAQgOQAPgOAGgMIAQAAIAADIg");
	this.shape_1.setTransform(105.5,19.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsBRQgVgZABg4QgBgjAIgVQAIgWAOgMQAOgLAVAAQAQAAAMAGQANAGAHANQAJAMAEASQAFARgBAdQAAAjgHAWQgHAWgOALQgPAMgWAAQgcAAgQgVgAgahDQgNATAAAwQAAAxAMARQALAQAQAAQARAAALgQQAMgRAAgxQAAgxgMgQQgLgQgRAAQgQAAgKAOg");
	this.shape_2.setTransform(90.9,19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhBBlQgBgJAEgJQAFgNALgNQALgNAVgRQAggbALgPQAMgPAAgOQAAgPgLgKQgKgLgRABQgRgBgLALQgKALAAATIgagDQADgcARgPQARgOAbAAQAdAAARAPQARAQAAAYQAAAMgFALQgFAMgLAMQgMANgaAWIgcAaIgKANIBhAAIAAAYg");
	this.shape_3.setTransform(75.1,19.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMBlIAAidQgJAJgNAIQgOAJgMAFIAAgZQAVgJAPgOQAOgOAHgMIAQAAIAADIg");
	this.shape_4.setTransform(51.1,19.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAvBVQgWANgaAAQgbAAgXgNQgWgOgMgXQgMgYAAgdQAAgeAMgYQAMgYAXgNQAWgNAbAAQAbAAAWAOQAXANALAXQAMAYAAAeQAAAYgIATQgHAUgPAPQASANAQAFIgIATQgWgIgVgRgAgyhCQgTAVAAAoQAAAmATAVQATAVAeAAQAOAAAMgFQgMgIgNgEIAFgTQAXAGAPANQAYgVAAgqQAAgYgJgTQgIgSgQgKQgQgKgTAAQgdAAgUAUg");
	this.shape_5.setTransform(33.5,20.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiBKIAAhXQAAgPgCgHQgDgIgHgEQgIgFgKAAQgOAAgMAKQgMAKAAAcIAABOIgYAAIAAiQIAWAAIAAAVQAQgYAdAAQANAAALAFQAMAEAFAIQAGAIACAKQABAHAAARIAABYg");
	this.shape_6.setTransform(7,22.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_7.setTransform(-3.9,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-9,2.3,140.9,35.3), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgvA4QgTgUAAgjQAAgjATgUQATgVAdAAQAdAAASAUQATAUAAAjIAAAGIhsAAQACAYAMANQAMAMARAAQAOABAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAApgNQgCgTgHgJQgMgNgTAAQgQAAgLALQgMALgBATIBQAAIAAAAg");
	this.shape.setTransform(312.3,24.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABKBKIAAhaQAAgPgCgGQgDgHgGgEQgGgEgJAAQgPAAgKAKQgKAKAAAXIAABTIgYAAIAAhdQAAgQgGgJQgGgIgOAAQgKAAgJAGQgJAFgEALQgEAKAAAUIAABKIgYAAIAAiQIAWAAIAAAUQAHgKALgHQALgGAPAAQAQAAAKAGQAKAHAEAMQARgZAcAAQAVAAAMAMQALAMAAAZIAABig");
	this.shape_1.setTransform(293,24.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwA4QgTgUAAgkQAAgoAWgTQATgQAaAAQAeAAATAUQATAUAAAiQAAAbgJAQQgIAQgQAJQgQAJgTAAQgeAAgSgUgAgegpQgMAOAAAbQAAAcAMANQANAOARAAQASAAANgOQAMgOgBgbQABgbgMgOQgNgNgSAAQgRAAgNANg");
	this.shape_2.setTransform(273.5,24.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA0BkIAAheIhnAAIAABeIgbAAIAAjHIAbAAIAABSIBnAAIAAhSIAbAAIAADHg");
	this.shape_3.setTransform(255.7,21.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcBJIgWhXIgGgYIgcBvIgaAAIgsiQIAZAAIAXBSIAIAgIAIgfIAXhTIAYAAIAWBSIAIAcIAIgcIAYhSIAYAAIgtCQg");
	this.shape_4.setTransform(227.7,24.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvA4QgTgUAAgjQAAgjATgUQATgVAdAAQAdAAASAUQATAUAAAjIAAAGIhsAAQACAYAMANQAMAMARAAQAOABAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAApgNQgCgTgHgJQgMgNgTAAQgQAAgLALQgMALgBATIBQAAIAAAAg");
	this.shape_5.setTransform(209.8,24.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA0BkIhoicIAACcIgaAAIAAjHIAbAAIBpCcIAAicIAZAAIAADHg");
	this.shape_6.setTransform(191.9,21.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnBKIAAiQIAXAAIAAAWQAJgPAGgFQAGgFAJAAQANAAANAIIgJAXQgJgGgJAAQgIAAgGAFQgGAFgDAJQgDANAAAPIAABLg");
	this.shape_7.setTransform(170.6,24.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggBFQgLgFgGgHQgFgIgCgLQgCgHAAgPIAAhZIAZAAIAABPQAAATABAHQADAKAHAFQAIAGALAAQAKAAAJgGQAKgGAEgJQAEgKAAgTIAAhMIAZAAIAACQIgWAAIAAgWQgRAZgcAAQgNAAgLgFg");
	this.shape_8.setTransform(156.9,24.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwA4QgTgUAAgkQAAgoAWgTQATgQAaAAQAeAAATAUQATAUAAAiQAAAbgIAQQgJAQgQAJQgQAJgTAAQgeAAgSgUgAgdgpQgNAOAAAbQAAAcANANQALAOASAAQASAAANgOQALgOABgbQgBgbgLgOQgNgNgSAAQgSAAgLANg");
	this.shape_9.setTransform(141.5,24.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag1BjIgDgXQAIACAHAAQAIAAAFgDQAFgDADgFIAIgSIABgGIg2iQIAaAAIAeBUIAKAgQAEgPAGgQIAfhVIAZAAIg3CTQgKAXgEAJQgGANgJAFQgIAGgMAAQgHAAgJgDg");
	this.shape_10.setTransform(126.8,27.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgxA4QgSgUAAgkQAAgoAWgTQATgQAaAAQAeAAATAUQATAUAAAiQAAAbgJAQQgIAQgQAJQgQAJgTAAQgdAAgUgUgAgegpQgMAOAAAbQAAAcAMANQANAOARAAQASAAAMgOQAMgOAAgbQAAgbgMgOQgMgNgSAAQgRAAgNANg");
	this.shape_11.setTransform(104.2,24.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABAEADABQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_12.setTransform(92.7,22.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAjBKIAAhXQAAgPgEgHQgCgIgIgEQgHgFgKAAQgOAAgMAKQgLAKAAAcIAABOIgZAAIAAiQIAWAAIAAAVQAQgYAeAAQANAAALAFQAKAEAGAIQAFAIACAKQACAHAAARIAABYg");
	this.shape_13.setTransform(80.9,24.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_14.setTransform(70,21.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgvA4QgTgUAAgjQAAgjATgUQATgVAdAAQAdAAASAUQATAUAAAjIAAAGIhsAAQACAYAMANQAMAMARAAQAOABAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAApgNQgCgTgHgJQgMgNgTAAQgQAAgLALQgMALgBATIBQAAIAAAAg");
	this.shape_15.setTransform(51.3,24.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgKBJIg3iQIAaAAIAeBVIAJAeIAJgcIAhhXIAZAAIg3CQg");
	this.shape_16.setTransform(36.6,24.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgxA4QgSgUAAgkQAAgoAWgTQATgQAaAAQAeAAATAUQATAUAAAiQAAAbgJAQQgIAQgQAJQgQAJgTAAQgdAAgUgUgAgegpQgMAOAAAbQAAAcAMANQANAOARAAQASAAAMgOQAMgOAAgbQAAgbgMgOQgMgNgSAAQgRAAgNANg");
	this.shape_17.setTransform(21.8,24.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABGBkIAAinIg7CnIgWAAIg6ipIAACpIgZAAIAAjHIAnAAIAvCNIAJAdIALggIAwiKIAkAAIAADHg");
	this.shape_18.setTransform(2.4,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-15.2,4.5,341.3,35.3), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoBAQgPgMgEgXIAYgEQACAPAKAIQAJAIAQAAQARgBAIgGQAIgIAAgJQAAgIgHgEQgFgEgUgFQgagHgLgEQgKgFgGgIQgFgKAAgKQAAgKAEgIQAFgIAIgGQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAIQAGAJACAOIgYADQgCgLgIgHQgHgFgOgBQgRAAgHAGQgHAFAAAIQAAAFADADQADAEAGADIAVAHQAaAGAKAFQALADAGAJQAFAJAAAMQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape.setTransform(235.4,19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgkATgUQATgUAdAAQAdAAASAUQATAUAAAjIAAAGIhsAAQACAYAMANQAMANARAAQAOgBAJgGQAKgHAGgRIAZAEQgGAWgQANQgRAMgZAAQgfAAgSgUgAApgNQgCgSgHgJQgMgPgTAAQgQAAgLAMQgMALgBATIBQAAIAAAAg");
	this.shape_1.setTransform(220.7,19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_2.setTransform(209.8,17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDBfQgHgFgDgGQgDgIAAgWIAAhSIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABADADACQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgEg");
	this.shape_3.setTransform(203,17.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_4.setTransform(195.9,17);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAjBKIAAhXQAAgPgDgHQgEgIgHgEQgHgFgKAAQgOAAgMAKQgMAKAAAcIAABOIgYAAIAAiQIAWAAIAAAVQAQgYAdAAQANAAAMAFQALAEAFAIQAGAIABAKQACAHAAARIAABYg");
	this.shape_5.setTransform(185,19.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgkATgUQATgUAdAAQAdAAASAUQATAUAAAjIAAAGIhsAAQACAYAMANQAMANARAAQAOgBAJgGQAKgHAGgRIAZAEQgGAWgQANQgRAMgZAAQgfAAgSgUgAApgNQgCgSgHgJQgMgPgTAAQgQAAgLAMQgMALgBATIBQAAIAAAAg");
	this.shape_6.setTransform(169.4,19.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABKBKIAAhaQAAgPgCgGQgDgHgGgEQgGgEgJAAQgPAAgKAKQgKAKAAAXIAABTIgYAAIAAhdQAAgQgGgJQgGgIgOAAQgKAAgJAGQgJAFgEALQgEAKAAAUIAABKIgYAAIAAiQIAWAAIAAAUQAHgKALgHQALgGAPAAQAQAAAKAGQAKAHAEAMQARgZAcAAQAVAAAMAMQALAMAAAZIAABig");
	this.shape_7.setTransform(150.1,19.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABABkIgYg8IhSAAIgWA8IgdAAIBNjHIAcAAIBSDHgAAgASIgVg3IgNgpQgEATgHATIgWA6IBDAAg");
	this.shape_8.setTransform(129.1,17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgsA5QgSgUAAgkQAAgXAHgRQAIgTAQgIQAQgJASAAQAYAAAPAMQAPAMAEAWIgYAEQgEgPgIgIQgJgGgMgBQgSAAgLAOQgMANAAAcQAAAdALANQALAOARAAQAPgBAKgIQAJgJADgSIAYACQgEAZgQAOQgQAPgYAAQgdAAgSgTg");
	this.shape_9.setTransform(107,19.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_10.setTransform(96.4,17);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDBfQgHgFgDgGQgDgIAAgWIAAhSIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABADADACQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgEg");
	this.shape_11.setTransform(89.6,17.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgoBAQgPgMgEgXIAYgEQACAPAKAIQAJAIAQAAQARgBAIgGQAIgIAAgJQAAgIgHgEQgFgEgUgFQgagHgLgEQgKgFgGgIQgFgKAAgKQAAgKAEgIQAFgIAIgGQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAIQAGAJACAOIgYADQgCgLgIgHQgHgFgOgBQgRAAgHAGQgHAFAAAIQAAAFADADQADAEAGADIAVAHQAaAGAKAFQALADAGAJQAFAJAAAMQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape_12.setTransform(78.5,19.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag1BAQgNgMAAgSQAAgLAFgIQAFgJAIgFQAIgFAJgCIAXgEQAcgDAOgGIABgGQgBgPgGgHQgKgHgSgBQgRABgIAFQgJAGgDAQIgYgEQACgPAIgJQAHgJAPgGQAOgFASAAQASAAAMAFQALAEAGAHQAFAGADAKIABAXIAAAgQAAAiACAJQABAJAFAJIgaAAQgEgIgBgKQgOALgMAFQgMAFgOAAQgYAAgNgMgAgFAJQgPACgGADQgHADgDAFQgEAFAAAGQAAAKAIAHQAHAGAPABQANAAALgHQALgGAFgLQAEgIAAgRIAAgIQgNAFgaAEg");
	this.shape_13.setTransform(63.8,19.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDBfQgHgFgDgGQgDgIAAgWIAAhSIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABADADACQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgEg");
	this.shape_14.setTransform(52.3,17.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAiBKIAAhXQAAgPgDgHQgDgIgGgEQgIgFgKAAQgPAAgLAKQgLAKAAAcIAABOIgZAAIAAiQIAWAAIAAAVQAQgYAeAAQANAAAKAFQALAEAGAIQAGAIACAKQABAHAAARIAABYg");
	this.shape_15.setTransform(40.5,19.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag1BAQgNgMAAgSQAAgLAFgIQAFgJAIgFQAIgFAKgCIAVgEQAdgDAOgGIABgGQAAgPgIgHQgJgHgSgBQgRABgJAFQgHAGgEAQIgZgEQADgPAIgJQAHgJAPgGQAOgFASAAQASAAAMAFQAMAEAFAHQAGAGACAKIABAXIAAAgQAAAiACAJQABAJAFAJIgaAAQgDgIgCgKQgNALgNAFQgMAFgPAAQgXAAgNgMgAgFAJQgPACgHADQgGADgDAFQgEAFABAGQgBAKAIAHQAIAGAOABQANAAALgHQALgGAFgLQAEgIAAgRIAAgIQgNAFgaAEg");
	this.shape_16.setTransform(24.9,19.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhCBkIAAjHICGAAIAAAXIhsAAIAAA/IBdAAIAAAWIhdAAIAABbg");
	this.shape_17.setTransform(9.2,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-2,-0.3,246.6,35.3), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAXQAIgDADgHQAEgGAAgMIgNAAIAAgcIAbAAIAAAcQAAAPgFAJQgGAKgLAFg");
	this.shape.setTransform(232.5,34.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBAQgPgLgEgYIAYgDQACAOAKAIQAJAHAQAAQARABAIgIQAIgGAAgKQAAgIgHgFQgFgDgUgFQgagHgLgEQgKgFgGgJQgFgIAAgLQAAgKAEgIQAFgJAIgFQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAIQAGAIACAPIgYADQgCgLgIgHQgHgFgOAAQgRgBgHAGQgHAGAAAHQAAAFADAEQADAEAGACIAVAGQAaAIAKAEQALAEAGAIQAFAJAAAMQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape_1.setTransform(221.6,26.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAcBJIgWhXIgGgYIgdBvIgZAAIgtiQIAaAAIAXBSIAJAgIAHgfIAXhTIAZAAIAVBSIAIAcIAIgcIAZhSIAXAAIgtCQg");
	this.shape_2.setTransform(204.6,26.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgvA4QgTgUAAgjQAAgjATgUQATgVAdAAQAdAAASAUQATAUAAAjIAAAGIhsAAQACAYAMANQAMAMARAAQAOABAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAApgNQgCgTgHgJQgMgNgTAAQgQAAgLALQgMALgBATIBQAAIAAAAg");
	this.shape_3.setTransform(186.7,26.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_4.setTransform(175.8,24.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNBkIhOjHIAdAAIA0CQIAKAhIALghIA2iQIAbAAIhPDHg");
	this.shape_5.setTransform(163.9,24.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnBKIAAiQIAXAAIAAAWQAIgPAIgFQAGgFAIAAQAMAAANAIIgIAXQgJgGgJAAQgIAAgFAFQgHAFgCAJQgFANAAAPIAABLg");
	this.shape_6.setTransform(143.3,26.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag1BAQgNgLAAgTQAAgKAFgJQAFgJAIgFQAHgEAKgDIAXgEQAcgDAOgFIAAgHQAAgPgGgGQgKgIgSAAQgRAAgIAFQgIAHgFAPIgXgEQADgOAHgKQAIgKAOgFQAOgFASAAQATAAALAFQALAEAGAGQAFAHADAKIABAXIAAAfQAAAjABAJQACAJAFAJIgaAAQgEgIgBgKQgOALgMAFQgMAFgOAAQgYAAgNgMgAgFAJQgPACgGADQgHACgDAGQgDAFgBAHQABAJAHAHQAHAGAOAAQAOABALgHQALgGAFgKQAEgJAAgQIAAgJQgNAFgaAEg");
	this.shape_7.setTransform(129.7,26.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_8.setTransform(118.8,24.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggBFQgLgFgGgHQgFgIgCgLQgCgHAAgPIAAhZIAZAAIAABPQAAATABAHQADAKAHAFQAIAGALAAQAKAAAJgGQAKgGAEgJQAEgKAAgTIAAhMIAZAAIAACQIgWAAIAAgWQgRAZgcAAQgNAAgLgFg");
	this.shape_9.setTransform(107.9,27);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsA4QgSgTAAgkQAAgXAHgSQAIgRAQgJQAQgJASAAQAYAAAPAMQAPAMAEAWIgYAEQgEgPgIgIQgJgGgMAAQgSAAgLAMQgMAOAAAcQAAAdALAOQALANARgBQAPABAKgKQAJgIADgTIAYADQgEAagQAOQgQAOgYAAQgdAAgSgUg");
	this.shape_10.setTransform(93.7,26.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag1BAQgNgLAAgTQAAgKAFgJQAFgJAIgFQAHgEAKgDIAXgEQAcgDAOgFIAAgHQAAgPgGgGQgKgIgSAAQgRAAgIAFQgIAHgFAPIgXgEQADgOAHgKQAIgKAOgFQAOgFASAAQATAAALAFQALAEAGAGQAFAHADAKIABAXIAAAfQAAAjABAJQACAJAFAJIgaAAQgEgIgBgKQgOALgMAFQgMAFgOAAQgYAAgNgMgAgFAJQgPACgGADQgHACgDAGQgDAFgBAHQABAJAHAHQAHAGAOAAQAOABALgHQALgGAFgKQAEgJAAgQIAAgJQgNAFgaAEg");
	this.shape_11.setTransform(78.4,26.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABAEADABQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_12.setTransform(67,24.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgsA4QgSgTAAgkQAAgXAHgSQAIgRAQgJQAQgJASAAQAYAAAPAMQAPAMAEAWIgYAEQgEgPgIgIQgJgGgMAAQgSAAgLAMQgMAOAAAcQAAAdALAOQALANARgBQAPABAKgKQAJgIADgTIAYADQgEAagQAOQgQAOgYAAQgdAAgSgUg");
	this.shape_13.setTransform(56.4,26.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgvA4QgTgUAAgjQAAgjATgUQATgVAdAAQAdAAASAUQATAUAAAjIAAAGIhsAAQACAYAMANQAMAMARAAQAOABAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAApgNQgCgTgHgJQgMgNgTAAQgQAAgLALQgMALgBATIBQAAIAAAAg");
	this.shape_14.setTransform(41.1,26.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag+BmIAAjHIAXAAIAAASQAHgLALgGQAKgFANAAQASAAAOAJQAPAKAHARQAHASAAAVQAAAWgIARQgIASgPAJQgPAKgRAAQgMAAgJgFQgKgGgHgIIAABHgAgchDQgMAPAAAcQAAAbALANQAMANAQAAQAPAAAMgOQAMgNAAgcQAAgcgMgOQgLgNgPAAQgPAAgNAOg");
	this.shape_15.setTransform(26,29.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgnBgQgSgIgLgQQgKgQgBgUIAZgCQACAPAHAJQAGAKAOAGQANAGARAAQAPAAALgFQAMgEAGgIQAFgIAAgJQAAgKgFgHQgGgHgMgEQgIgEgbgGQgcgHgLgFQgOgHgHgLQgHgMAAgNQAAgQAJgNQAIgNARgHQAQgHAVAAQAVAAARAIQARAHAJAOQAJAOABARIgaACQgCgTgLgKQgMgJgXAAQgXAAgLAJQgLAIAAANQAAALAHAHQAIAHAfAHQAhAHAMAGQARAHAJAMQAIANAAAQQAAAQgJAOQgJAOgSAIQgRAIgVAAQgaAAgTgIg");
	this.shape_16.setTransform(8.4,24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-2.8,6.8,241.4,35.3), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAXQAIgDAEgHQADgGAAgMIgNAAIAAgcIAbAAIAAAcQAAAPgGAJQgFAKgLAFg");
	this.shape.setTransform(264.7,41.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBAQgPgLgEgYIAYgDQACAOAKAIQAJAHAQAAQARABAIgIQAIgGAAgKQAAgIgHgFQgFgDgUgFQgagHgLgEQgKgFgGgJQgFgIAAgLQAAgKAEgIQAFgJAIgFQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAIQAGAIACAPIgYADQgCgLgIgHQgHgFgOAAQgRgBgHAGQgHAGAAAHQAAAFADAEQADAEAGACIAVAGQAaAIAKAEQALAEAGAIQAFAJAAAMQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape_1.setTransform(253.7,33.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAAKACADQABAEADABQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_2.setTransform(243.1,31.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiBKIAAhXQAAgPgDgHQgDgIgGgEQgIgFgKAAQgPAAgLAKQgLAKAAAcIAABOIgZAAIAAiQIAWAAIAAAVQAQgYAeAAQANAAAKAFQALAEAGAIQAGAIACAKQABAHAAARIAABYg");
	this.shape_3.setTransform(231.3,33.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvA4QgTgUAAgjQAAgjATgUQATgVAdAAQAdAAASAUQATAUAAAjIAAAGIhsAAQACAYAMANQAMAMARAAQAOABAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAApgNQgCgTgHgJQgMgNgTAAQgQAAgLALQgMALgBATIBQAAIAAAAg");
	this.shape_4.setTransform(215.7,33.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABKBKIAAhaQAAgPgCgGQgDgHgGgEQgGgEgJAAQgPAAgKAKQgKAKAAAXIAABTIgYAAIAAhdQAAgQgGgJQgGgIgOAAQgKAAgJAGQgJAFgEALQgEAKAAAUIAABKIgYAAIAAiQIAWAAIAAAUQAHgKALgHQALgGAPAAQAQAAAKAGQAKAHAEAMQARgZAcAAQAVAAAMAMQALAMAAAZIAABig");
	this.shape_5.setTransform(196.4,33.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAAKACADQABAEADABQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_6.setTransform(181,31.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmBKIAAiQIAWAAIAAAWQAIgPAIgFQAGgFAJAAQAMAAANAIIgJAXQgJgGgJAAQgIAAgFAFQgHAFgDAJQgDANAAAPIAABLg");
	this.shape_7.setTransform(173.4,33.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag1BAQgNgLAAgTQAAgKAFgJQAFgJAIgFQAIgEAKgEIAVgDQAdgDAOgFIABgHQAAgPgIgGQgJgIgSAAQgRAAgJAFQgHAHgEAPIgZgEQADgOAIgKQAHgKAPgFQAOgFASAAQASAAAMAFQAMAEAFAGQAGAHACAKIABAXIAAAfQAAAjACAJQABAJAFAJIgaAAQgDgIgCgKQgNALgNAFQgMAFgPAAQgXAAgNgMgAgFAJQgPACgGADQgHACgDAGQgDAFAAAHQgBAJAIAHQAHAGAPAAQANABALgHQALgGAFgKQAEgJAAgQIAAgJQgNAFgaAEg");
	this.shape_8.setTransform(159.8,33.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag+BmIAAjHIAXAAIAAASQAHgLALgGQAKgFAMAAQATAAAOAJQAOAKAIARQAHASAAAVQAAAWgIARQgIASgPAJQgQAKgQAAQgLAAgKgFQgKgGgHgIIAABHgAgchDQgMAPAAAcQAAAbAMANQALANAQAAQAQAAALgOQAMgNAAgcQAAgcgMgOQgLgNgPAAQgPAAgNAOg");
	this.shape_9.setTransform(144.7,36.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABABkIgYg8IhSAAIgWA8IgdAAIBNjHIAcAAIBSDHgAAgASIgVg3IgNgpQgEATgHATIgWA6IBDAAg");
	this.shape_10.setTransform(127.2,30.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgoBAQgPgLgEgYIAYgDQACAOAKAIQAJAHAQAAQARABAIgIQAIgGAAgKQAAgIgHgFQgFgDgUgFQgagHgLgEQgKgFgGgJQgFgIAAgLQAAgKAEgIQAFgJAIgFQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAIQAGAIACAPIgYADQgCgLgIgHQgHgFgOAAQgRgBgHAGQgHAGAAAHQAAAFADAEQADAEAGACIAVAGQAaAIAKAEQALAEAGAIQAFAJAAAMQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape_11.setTransform(104.6,33.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggBFQgLgFgGgHQgFgIgCgLQgCgHAAgPIAAhZIAZAAIAABPQAAATABAHQADAKAHAFQAIAGALAAQAKAAAJgGQAKgGAEgJQAEgKAAgTIAAhMIAZAAIAACQIgWAAIAAgWQgRAZgcAAQgNAAgLgFg");
	this.shape_12.setTransform(89.8,33.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgxA4QgSgUAAgkQAAgoAWgTQATgQAaAAQAeAAATAUQATAUAAAiQAAAbgJAQQgIAQgQAJQgQAJgTAAQgdAAgUgUgAgegpQgMAOAAAbQAAAcAMANQANAOARAAQASAAANgOQALgOAAgbQAAgbgLgOQgNgNgSAAQgRAAgNANg");
	this.shape_13.setTransform(74.4,33.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_14.setTransform(63.5,30.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgsA4QgSgTAAgkQAAgXAHgSQAIgRAQgJQAQgJASAAQAYAAAPAMQAPAMAEAWIgYAEQgEgPgIgIQgJgGgMAAQgSAAgLAMQgMAOAAAcQAAAdALAOQALANARgBQAPABAKgKQAJgIADgTIAYADQgEAagQAOQgQAOgYAAQgdAAgSgUg");
	this.shape_15.setTransform(53.8,33.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag1BAQgNgLAAgTQAAgKAFgJQAFgJAIgFQAIgEAJgEIAXgDQAcgDAOgFIABgHQgBgPgGgGQgKgIgSAAQgRAAgIAFQgJAHgDAPIgYgEQACgOAIgKQAHgKAPgFQAOgFASAAQASAAAMAFQALAEAGAGQAGAHACAKIABAXIAAAfQAAAjACAJQABAJAFAJIgaAAQgEgIgBgKQgOALgMAFQgMAFgOAAQgYAAgNgMgAgFAJQgPACgGADQgHACgDAGQgEAFAAAHQAAAJAIAHQAHAGAPAAQANABALgHQALgGAFgKQAEgJAAgQIAAgJQgNAFgaAEg");
	this.shape_16.setTransform(38.6,33.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag+BmIAAjHIAXAAIAAASQAHgLALgGQAJgFANAAQATAAAPAJQANAKAIARQAHASAAAVQAAAWgIARQgIASgPAJQgQAKgQAAQgMAAgJgFQgKgGgGgIIAABHgAgbhDQgNAPAAAcQAAAbAMANQALANAQAAQAQAAALgOQAMgNAAgcQAAgcgLgOQgMgNgPAAQgPAAgMAOg");
	this.shape_17.setTransform(23.5,36.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgnBgQgSgIgLgQQgKgQgBgUIAZgCQACAPAHAJQAGAKAOAGQANAGARAAQAPAAALgFQAMgEAGgIQAFgIAAgJQAAgKgFgHQgGgHgMgEQgIgEgbgGQgcgHgLgFQgOgHgHgLQgHgMAAgNQAAgQAJgNQAIgNARgHQAQgHAVAAQAVAAARAIQARAHAJAOQAJAOABARIgaACQgCgTgLgKQgMgJgXAAQgXAAgLAJQgLAIAAANQAAALAHAHQAIAHAfAHQAhAHAMAGQARAHAJAMQAIANAAAQQAAAQgJAOQgJAOgSAIQgRAIgVAAQgaAAgTgIg");
	this.shape_18.setTransform(5.9,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-5.4,13.5,276.1,35.3), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdBnQgLgFgHgKQgHgKgFgPQgEgPAAgTQAAgUAFgOQAFgOAKgLQAIgKAMgGQAMgGAMAAQALAAAJADQAIACAKAGIAAhCIAZAAIAADTIgZAAIAAgPIgLAIIgKAGIgMAEIgMABQgMAAgLgFgAgZgNQgMANAAAdQAAAaAJAPQAJAOATAAQAJAAAKgEQAKgFAKgIIAAhXQgKgFgHgBQgJgCgIAAQgTAAgLAPg");
	this.shape.setTransform(381.7,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_1.setTransform(371.4,14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoBMIAAiXIAaAAIAAAWQAOgMAKgFQAKgFAKAAIAGAAIAEAAIAAAbIgBAAIgGgBIgHAAQgLAAgLAEQgIAFgKAJIAABrg");
	this.shape_2.setTransform(364,17.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxA7QgSgWAAglQAAglASgWQAUgUAdAAQAfAAASAUQATAWAAAlQAAAngTAVQgSAVgfAAQgfgBgSgVgAgdgrQgMAPAAAcQAAAdAMAPQAKAOATAAQAUAAALgOQALgOAAgeQAAgcgLgPQgLgPgUAAQgTAAgKAPg");
	this.shape_3.setTransform(350.5,17.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AApBmIgpioIgoCoIgeAAIg0jLIAcAAIApCoIApioIAaAAIApCqIApiqIAbAAIgzDLg");
	this.shape_4.setTransform(331.3,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtA8QgUgVAAgmQAAgkATgWQAUgWAfAAQAOAAALAEQALAEAIAJQAJAJADAMQAFANAAASIAAANIhpAAQAAAbANAOQAOAOAWAAQAJAAAIgCIAPgFIALgGIAIgGIACAAIAAAcIgLAFIgMAEIgOADIgPABQgjAAgVgUgAApgQQgBgKgBgIQgDgHgEgFQgFgGgGgDQgIgDgKAAQgJAAgHADQgHADgGAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_5.setTransform(302.7,17.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjBqIAAhXIgBgTQgCgIgDgGQgDgGgFgCQgGgDgJAAQgJAAgKAFQgLAFgJAIIAABxIgaAAIAAjTIAaAAIAABMQAMgKALgFQAKgGAMAAQAWAAANAPQANAPAAAbIAABjg");
	this.shape_6.setTransform(287.5,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIAAASQABAGABAGQADAEAFADQAFACAJAAQAHAAAFgCIAIgDIACAAIAAAXIgOAEIgOABQgUAAgMgMg");
	this.shape_7.setTransform(275.1,15.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAiBOIAAhVIgBgUQgBgJgCgFQgDgGgGgDQgGgDgKAAQgIAAgKAFQgKAFgKAJIAABwIgaAAIAAiXIAaAAIAAAQQALgKALgFQALgFAMAAQAXgBANAQQAMAOAAAcIAABig");
	this.shape_8.setTransform(253.8,17.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMBmIAAiXIAZAAIAACXgAgNhLIAAgaIAcAAIAAAag");
	this.shape_9.setTransform(242.8,15.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_10.setTransform(227.7,14.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgsA8QgVgVAAgmQAAgkAUgWQATgWAfAAQAOAAALAEQALAEAIAJQAIAJAFAMQAEANAAASIAAANIhpAAQAAAbAOAOQANAOAXAAQAIAAAJgCIAOgFIAMgGIAIgGIABAAIAAAcIgLAFIgMAEIgNADIgQABQgkAAgTgUgAApgQQgBgKgCgIQgCgHgEgFQgEgGgIgDQgHgDgKAAQgJAAgHADQgHADgGAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_11.setTransform(217.2,17.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgtA8QgUgVAAgmQAAgkATgWQAUgWAfAAQAOAAALAEQALAEAIAJQAJAJADAMQAFANAAASIAAANIhpAAQAAAbAOAOQANAOAXAAQAIAAAJgCIAOgFIALgGIAIgGIACAAIAAAcIgLAFIgMAEIgOADIgPABQgjAAgVgUgAApgQQAAgKgCgIQgCgHgFgFQgFgGgGgDQgIgDgKAAQgJAAgHADQgIADgFAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_12.setTransform(202.5,17.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAjBqIAAhXIgBgTQgBgIgEgGQgDgGgFgCQgGgDgJAAQgJAAgKAFQgKAFgKAIIAABxIgaAAIAAjTIAaAAIAABMQAMgKALgFQAKgGAMAAQAWAAANAPQANAPAAAbIAABjg");
	this.shape_13.setTransform(187.4,14.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AApBmIgpioIgoCoIgeAAIg0jLIAcAAIApCoIApioIAaAAIApCqIApiqIAbAAIgzDLg");
	this.shape_14.setTransform(166.9,15.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAjBOIAAhVIgBgUQgBgJgEgFQgDgGgFgDQgGgDgJAAQgJAAgKAFQgLAFgJAJIAABwIgaAAIAAiXIAaAAIAAAQQAMgKALgFQAKgFAMAAQAXgBAMAQQANAOAAAcIAABig");
	this.shape_15.setTransform(137.8,17.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgxA7QgSgWAAglQAAglATgWQATgUAdAAQAfAAATAUQASAWAAAlQAAAngSAVQgTAVgfAAQgegBgTgVgAgdgrQgMAPABAcQgBAdAMAPQAKAOATAAQAUAAALgOQAKgOAAgeQAAgcgKgPQgLgPgUAAQgTAAgKAPg");
	this.shape_16.setTransform(122.3,17.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMBmIAAiXIAZAAIAACXgAgOhLIAAgaIAdAAIAAAag");
	this.shape_17.setTransform(111.6,15.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIABASQAAAGABAGQADAEAFADQAFACAJAAQAGAAAHgCIAIgDIABAAIAAAXIgPAEIgNABQgUAAgMgMg");
	this.shape_18.setTransform(103.8,15.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_19.setTransform(91.2,17.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgLBMIg5iXIAcAAIApB0IAph0IAbAAIg6CXg");
	this.shape_20.setTransform(77.9,17.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgoBMIAAiXIAaAAIAAAWQAOgMAKgFQALgFAJAAIAGAAIAEAAIAAAbIgBAAIgGgBIgHAAQgLAAgLAEQgJAFgJAJIAABrg");
	this.shape_21.setTransform(66.8,17.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgtA8QgUgVAAgmQAAgkAUgWQATgWAfAAQAOAAALAEQALAEAIAJQAJAJAEAMQAEANAAASIAAANIhpAAQAAAbANAOQAOAOAWAAQAJAAAIgCIAPgFIAMgGIAIgGIABAAIAAAcIgLAFIgMAEIgOADIgPABQgkAAgUgUgAApgQQgBgKgCgIQgCgHgEgFQgEgGgIgDQgGgDgLAAQgJAAgHADQgIADgFAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_22.setTransform(53.6,17.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AggBMQgNgEgJgFIAAgdIABAAIAIAGIAMAHIAOAFQAIACAJAAIAMgBQAHgBADgCQAFgDACgFQACgDAAgHQAAgJgFgFQgFgFgNgDIgLgDIgPgDQgSgFgHgJQgIgLAAgQQAAgUAPgNQAQgNAZAAQAMAAANADQANADAJAFIAAAbIgCAAQgJgHgMgEQgNgFgMAAQgMAAgIAFQgJAGAAALQAAAJAFAEQAFAGAMACIAMAEIAOADQARAEAJAIQAIAKAAARQAAAKgDAJQgEAJgIAGQgIAHgKADQgLAEgOAAQgQAAgNgEg");
	this.shape_23.setTransform(40.2,17.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUBpQgIgDgJgFIgCAHIgYAAIAAjTIAaAAIAABMQAJgJAMgGQALgGANAAQAaAAAPAVQAPAVAAAjQAAAmgSAXQgSAWgbAAQgMAAgJgDgAgSgWQgKAFgJAHIAABXQAJAEAIACQAHACAKAAQATAAAKgOQAMgOAAgeQgBgbgHgNQgJgOgSAAQgKAAgLAFg");
	this.shape_24.setTransform(26.6,15.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgkBkQgRgIgLgOQgMgNgGgUQgHgUAAgYQAAgaAHgTQAGgTAMgOQALgOARgGQAQgIAUAAQAVAAAQAIQARAGALAOQAMANAGAUQAHAUAAAZQAAAYgGAUQgHAUgMANQgMAOgQAIQgRAGgUAAQgUAAgQgGgAgZhMQgLAFgIALQgIAKgFAQQgEAPAAAUQAAAoARAUQARAWAbAAQAcAAARgWQARgUAAgoQAAgUgFgPQgEgQgIgKQgIgLgLgFQgMgGgOAAQgNAAgMAGg");
	this.shape_25.setTransform(8.4,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-3.5,-4.5,395.6,37.8), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABAEADABQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape.setTransform(254.6,22.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBAQgPgLgEgYIAYgDQACAOAKAIQAJAHAQAAQARABAIgIQAIgGAAgKQAAgIgHgFQgFgDgUgFQgagHgLgEQgKgFgGgJQgFgIAAgLQAAgKAEgIQAFgJAIgFQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAIQAGAIACAPIgYADQgCgLgIgHQgHgFgOAAQgRgBgHAGQgHAGAAAHQAAAFADAEQADAEAGACIAVAGQAaAIAKAEQALAEAGAIQAFAJAAAMQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape_1.setTransform(243.4,24.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvA4QgTgUAAgjQAAgjATgUQATgVAdAAQAdAAASAUQATAUAAAjIAAAGIhsAAQACAYAMANQAMAMARAAQAOABAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAApgNQgCgTgHgJQgMgNgTAAQgQAAgLALQgMALgBATIBQAAIAAAAg");
	this.shape_2.setTransform(228.7,24.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqBcQgRgMABgXIAYADQABALAHAFQAKAHAPAAQAQAAAJgHQAKgGADgNQACgHAAgYQgQATgXAAQgeAAgRgWQgQgVAAgeQAAgUAHgSQAIgSAPgJQANgKAUAAQAZAAAQAVIAAgRIAXAAIAAB8QAAAigHAOQgHAOgPAIQgPAJgVAAQgaAAgPgMgAgahFQgMANAAAbQABAcAKAMQAMANAQAAQARAAAMgNQALgMAAgcQAAgagLgOQgMgNgSAAQgOAAgMANg");
	this.shape_3.setTransform(212.8,27.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnBKIAAiQIAXAAIAAAWQAIgPAIgFQAGgFAIAAQAMAAANAIIgIAXQgJgGgJAAQgIAAgFAFQgHAFgCAJQgFANAAAPIAABLg");
	this.shape_4.setTransform(201.9,24.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag1BAQgNgLAAgTQAAgKAFgJQAFgJAIgFQAHgEAKgDIAXgEQAcgDAOgFIABgHQgBgPgGgGQgKgIgSAAQgRAAgIAFQgIAHgFAPIgXgEQADgOAHgKQAIgKAOgFQAOgFASAAQASAAAMAFQALAEAGAGQAFAHADAKIABAXIAAAfQAAAjABAJQACAJAFAJIgaAAQgDgIgCgKQgOALgMAFQgMAFgOAAQgYAAgNgMgAgFAJQgPACgGADQgHACgDAGQgDAFgBAHQAAAJAIAHQAHAGAOAAQAOABALgHQALgGAFgKQAEgJAAgQIAAgJQgNAFgaAEg");
	this.shape_5.setTransform(188.3,24.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag9BkIAAjHIAaAAIAACwIBiAAIAAAXg");
	this.shape_6.setTransform(173.4,21.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAlBMQgMAOgPAGQgNAHgRAAQgfAAgSgVQgOgRAAgUQAAgTAMgPQAMgOAXgLQgNgQgFgKQgEgJAAgJQAAgSAOgOQAOgNAWAAQATAAANAMQANANAAASQAAAcglAVIAjAsQAHgMADgQIAaAGQgHAagLARQAOASARANIgQATQgPgJgQgTgAgyAXQgHAKAAAKQAAAMAKANQAKANARAAQAMAAAKgGQAMgHAHgLIgsg4QgUAMgHAKgAgahMQgHAGAAAJQAAAFADAFIAHALIALANQAPgKAFgHQAEgHAAgJQAAgKgGgGQgGgHgKAAQgKAAgGAHg");
	this.shape_7.setTransform(148.3,21.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABAEADABQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_8.setTransform(127.2,22.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoBAQgPgLgEgYIAYgDQACAOAKAIQAJAHAQAAQARABAIgIQAIgGAAgKQAAgIgHgFQgFgDgUgFQgagHgLgEQgKgFgGgJQgFgIAAgLQAAgKAEgIQAFgJAIgFQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAIQAGAIACAPIgYADQgCgLgIgHQgHgFgOAAQgRgBgHAGQgHAGAAAHQAAAFADAEQADAEAGACIAVAGQAaAIAKAEQALAEAGAIQAFAJAAAMQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape_9.setTransform(116,24.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgvA4QgTgUAAgjQAAgjATgUQATgVAdAAQAdAAASAUQATAUAAAjIAAAGIhsAAQACAYAMANQAMAMARAAQAOABAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAApgNQgCgTgHgJQgMgNgTAAQgQAAgLALQgMALgBATIBQAAIAAAAg");
	this.shape_10.setTransform(101.3,24.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_11.setTransform(90.4,21.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_12.setTransform(84.2,21.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag1BAQgNgLAAgTQAAgKAFgJQAFgJAIgFQAHgEAKgDIAWgEQAdgDAOgFIAAgHQAAgPgGgGQgKgIgSAAQgRAAgIAFQgIAHgFAPIgXgEQADgOAHgKQAIgKAOgFQAOgFASAAQATAAALAFQAMAEAFAGQAFAHADAKIABAXIAAAfQAAAjABAJQACAJAFAJIgaAAQgEgIgBgKQgOALgMAFQgMAFgOAAQgYAAgNgMgAgFAJQgPACgHADQgGACgDAGQgDAFgBAHQABAJAHAHQAIAGANAAQAOABALgHQALgGAFgKQAEgJAAgQIAAgJQgNAFgaAEg");
	this.shape_13.setTransform(73.4,24.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNBkIAAiwIhCAAIAAgXICfAAIAAAXIhDAAIAACwg");
	this.shape_14.setTransform(60.3,21.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgvA4QgTgUAAgjQAAgjATgUQATgVAdAAQAdAAASAUQATAUAAAjIAAAGIhsAAQACAYAMANQAMAMARAAQAOABAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAApgNQgCgTgHgJQgMgNgTAAQgQAAgLALQgMALgBATIBQAAIAAAAg");
	this.shape_15.setTransform(36.6,24.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAiBkIAAhcQABgRgJgJQgHgIgPAAQgKAAgJAGQgKAFgFAKQgDAJAAARIAABPIgZAAIAAjHIAZAAIAABIQARgUAZAAQAQAAAMAGQAMAGAFAMQAFALAAAUIAABcg");
	this.shape_16.setTransform(21.1,21.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABAEADABQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_17.setTransform(9.6,22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(3.5,4.5,256.9,35.3), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAXQAIgDAEgHQADgGAAgMIgNAAIAAgcIAbAAIAAAcQAAAPgFAJQgGAKgLAFg");
	this.shape.setTransform(214.6,40.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_1.setTransform(207.7,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1BAQgNgMAAgSQAAgLAFgIQAFgJAIgGQAHgDAKgDIAXgEQAcgEAOgFIAAgGQAAgPgGgHQgKgHgSgBQgRAAgIAHQgIAFgFAQIgXgDQADgQAHgJQAIgKAOgFQAOgFASAAQATAAALAEQALAFAGAHQAFAGADAKIABAXIAAAgQAAAiABAJQACAJAFAIIgaAAQgEgHgBgLQgOAMgMAFQgMAFgOAAQgYAAgNgMgAgFAJQgPACgGADQgHADgDAFQgDAFgBAGQABALAHAGQAHAHAOAAQAOgBALgGQALgGAFgLQAEgIAAgRIAAgIQgNAFgaAEg");
	this.shape_2.setTransform(196.8,32.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnBQIAAASIgXAAIAAjHIAZAAIAABHQAPgTAXAAQAOAAAMAGQAMAFAIAJQAHAKAFAOQAEANAAAPQAAAmgSAVQgTAUgaAAQgYAAgPgWgAgcgOQgLAOAAAZQAAAaAHALQALAUAUAAQAPAAAMgPQAMgNAAgcQAAgbgLgOQgMgOgPAAQgQABgMAOg");
	this.shape_3.setTransform(181.6,30.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggBFQgLgFgGgHQgFgIgCgLQgCgHAAgPIAAhZIAZAAIAABPQAAATABAHQADAKAHAFQAIAGALAAQAKAAAJgGQAKgGAEgJQAEgKAAgTIAAhMIAZAAIAACQIgWAAIAAgWQgRAZgcAAQgNAAgLgFg");
	this.shape_4.setTransform(165.6,32.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhSBkIAAjHIBFAAQAXAAAMADQARAEAMAKQAQANAIAVQAIAVAAAbQAAAWgFARQgGASgIAMQgJALgKAHQgKAGgNAEQgOADgSAAgAg3BNIArAAQASAAALgEQAMgEAGgGQAKgKAGgQQAEgQAAgVQAAgggKgRQgKgRgPgFQgLgFgWAAIgqAAg");
	this.shape_5.setTransform(148.2,30);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiBKIAAhXQAAgPgCgHQgDgIgHgEQgIgFgKAAQgPAAgLAKQgMAKAAAcIAABOIgYAAIAAiQIAWAAIAAAVQAQgYAdAAQANAAAMAFQALAEAFAIQAGAIACAKQABAHAAARIAABYg");
	this.shape_6.setTransform(122.2,32.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_7.setTransform(111.3,30);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABABkIgYg8IhSAAIgWA8IgdAAIBNjHIAcAAIBSDHgAAgASIgVg3IgNgpQgEATgHATIgWA6IBDAAg");
	this.shape_8.setTransform(98.9,30);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwA4QgTgTAAglQAAgnAWgUQATgQAaAAQAeAAATATQATAVAAAiQAAAbgJAQQgIAQgQAJQgQAJgTAAQgeAAgSgUgAgegpQgMAOAAAbQAAAcAMANQANAPARAAQASAAANgPQAMgNgBgcQABgbgMgNQgNgOgSgBQgRAAgNAOg");
	this.shape_9.setTransform(75.6,32.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDBfQgHgFgDgHQgDgGAAgXIAAhSIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACADQABADADABQADACAFAAIALgBIADAWQgKACgIAAQgNAAgHgEg");
	this.shape_10.setTransform(64.1,30.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDBfQgHgFgDgHQgDgGAAgXIAAhSIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACADQABADADABQADACAFAAIALgBIADAWQgKACgIAAQgNAAgHgEg");
	this.shape_11.setTransform(48.6,30.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAlBIIgdgtIgIgMIglA5IgeAAIA1hKIgxhGIAfAAIAWAiIAKARIAKgRIAYgiIAeAAIgyBFIA2BLg");
	this.shape_12.setTransform(37.6,32.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgVQATgUAdAAQAdAAASAUQATAUAAAjIAAAGIhsAAQACAYAMANQAMANARAAQAOgBAJgGQAKgIAGgQIAZAEQgGAWgQAMQgRANgZAAQgfAAgSgUgAApgNQgCgTgHgIQgMgOgTgBQgQABgLAKQgMAMgBATIBQAAIAAAAg");
	this.shape_13.setTransform(22.8,32.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AA0BkIhoicIAACcIgaAAIAAjHIAbAAIBpCcIAAicIAZAAIAADHg");
	this.shape_14.setTransform(4.9,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-7.2,12.7,227.9,35.3), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoBAQgPgLgEgYIAYgDQACAOAKAIQAJAHAQAAQARABAIgIQAIgGAAgKQAAgIgHgFQgFgDgUgFQgagHgLgEQgKgFgGgJQgFgIAAgLQAAgKAEgIQAFgJAIgFQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAIQAGAIACAPIgYADQgCgLgIgHQgHgFgOAAQgRgBgHAGQgHAGAAAHQAAAFADAEQADAEAGACIAVAGQAaAIAKAEQALAEAGAIQAFAJAAAMQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape.setTransform(167.8,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBKIAAiQIAXAAIAAAWQAJgPAGgFQAHgFAIAAQANAAANAIIgJAXQgJgGgJAAQgIAAgGAFQgGAFgDAJQgDANAAAPIAABLg");
	this.shape_1.setTransform(157.4,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvA4QgTgUAAgjQAAgjATgUQATgVAdAAQAdAAASAUQATAUAAAjIAAAGIhsAAQACAYAMANQAMAMARAAQAOABAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAApgNQgCgTgHgJQgMgNgTAAQgQAAgLALQgMALgBATIBQAAIAAAAg");
	this.shape_2.setTransform(143.8,15.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABAEADABQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_3.setTransform(132.4,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1BAQgNgLAAgTQAAgKAFgJQAFgJAIgFQAHgEALgEIAVgDQAdgDAOgFIAAgHQABgPgIgGQgJgIgSAAQgRAAgJAFQgIAHgEAPIgYgEQAEgOAHgKQAHgKAPgFQAOgFASAAQATAAALAFQALAEAGAGQAGAHACAKIABAXIAAAfQAAAjABAJQACAJAFAJIgaAAQgEgIgBgKQgNALgNAFQgMAFgPAAQgXAAgNgMgAgFAJQgPACgHADQgGACgDAGQgDAFAAAHQAAAJAHAHQAIAGANAAQAOABALgHQALgGAFgKQAEgJAAgQIAAgJQgNAFgaAEg");
	this.shape_4.setTransform(120.5,15.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcBJIgWhXIgGgYIgcBvIgaAAIgtiQIAaAAIAXBSIAIAgIAIgfIAXhTIAZAAIAVBSIAIAcIAIgcIAYhSIAYAAIgtCQg");
	this.shape_5.setTransform(102.7,15.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgvA4QgTgUAAgjQAAgjATgUQATgVAdAAQAdAAASAUQATAUAAAjIAAAGIhsAAQACAYAMANQAMAMARAAQAOABAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAApgNQgCgTgHgJQgMgNgTAAQgQAAgLALQgMALgBATIBQAAIAAAAg");
	this.shape_6.setTransform(84.8,15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggBFQgLgFgGgHQgFgIgCgLQgCgHAAgPIAAhZIAZAAIAABPQAAATABAHQADAKAHAFQAIAGALAAQAKAAAJgGQAKgGAEgJQAEgKAAgTIAAhMIAZAAIAACQIgWAAIAAgWQgRAZgcAAQgNAAgLgFg");
	this.shape_7.setTransform(69.2,15.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_8.setTransform(58.3,12.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhLBkIAAjHIBLAAQAWAAAOAGQAOAGAIANQAIAMAAAOQAAANgHALQgHAMgOAHQASAFAKAMQAKANAAARQAAAOgGAMQgGAMgJAHQgJAHgNADQgNADgTAAgAgwBNIAxAAIASgBQAJgCAGgEQAGgEAEgHQAEgHAAgKQAAgLgGgIQgFgJgKgDQgLgDgSAAIguAAgAgwgPIArAAQARAAAHgCQALgDAFgHQAFgHAAgLQAAgKgFgHQgFgIgJgDQgJgDgUAAIgoAAg");
	this.shape_9.setTransform(46.3,12.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABAEADABQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_10.setTransform(25.2,13.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag1BAQgNgLAAgTQAAgKAFgJQAFgJAIgFQAIgEAKgEIAVgDQAdgDAOgFIAAgHQABgPgIgGQgJgIgSAAQgRAAgJAFQgHAHgFAPIgYgEQAEgOAHgKQAIgKAOgFQAOgFASAAQATAAALAFQAMAEAFAGQAGAHACAKIABAXIAAAfQAAAjACAJQABAJAFAJIgaAAQgDgIgCgKQgNALgNAFQgMAFgPAAQgXAAgNgMgAgFAJQgPACgHADQgGACgDAGQgEAFABAHQAAAJAHAHQAIAGANAAQAOABALgHQALgGAFgKQAEgJAAgQIAAgJQgNAFgaAEg");
	this.shape_11.setTransform(13.3,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(3.6,-4.5,173.5,35.3), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoBAQgPgLgEgYIAYgEQACAPAKAIQAJAIAQgBQARAAAIgGQAIgIAAgIQAAgJgHgFQgFgDgUgFQgagHgLgEQgKgFgGgIQgFgJAAgLQAAgKAEgIQAFgIAIgGQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAJQAGAHACAPIgYADQgCgLgIgGQgHgHgOABQgRAAgHAFQgHAGAAAHQAAAFADADQADAEAGADIAVAGQAaAIAKAEQALAEAGAIQAFAIAAANQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape.setTransform(230.7,22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBAQgPgLgEgYIAYgEQACAPAKAIQAJAIAQgBQARAAAIgGQAIgIAAgIQAAgJgHgFQgFgDgUgFQgagHgLgEQgKgFgGgIQgFgJAAgLQAAgKAEgIQAFgIAIgGQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAJQAGAHACAPIgYADQgCgLgIgGQgHgHgOABQgRAAgHAFQgHAGAAAHQAAAFADADQADAEAGADIAVAGQAaAIAKAEQALAEAGAIQAFAIAAANQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape_1.setTransform(216.7,22.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvA4QgTgUAAgjQAAgkATgTQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMAMARAAQAOAAAJgGQAKgIAGgQIAZAEQgGAWgQAMQgRANgZAAQgfAAgSgUgAApgNQgCgTgHgIQgMgOgTAAQgQgBgLALQgMAMgBATIBQAAIAAAAg");
	this.shape_2.setTransform(202,22.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmBKIAAiQIAWAAIAAAWQAJgPAGgFQAGgFAJAAQANAAANAIIgJAXQgJgGgJAAQgIAAgGAFQgGAFgDAJQgDANAAAPIAABLg");
	this.shape_3.setTransform(190.7,22.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfBcQgPgKgIgQQgIgSAAgWQAAgWAHgQQAIgSAOgJQAPgKARAAQAMAAALAFQAKAGAHAJIAAhIIAYAAIAADHIgXAAIAAgSQgOAWgaAAQgRAAgOgKgAgagPQgKANgBAcQAAAcAMAOQAMANAPAAQAQAAAMgMQAKgOABgbQAAgcgMgOQgMgOgQAAQgPgBgMAOg");
	this.shape_4.setTransform(176.7,20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABABkIgYg8IhSAAIgWA8IgdAAIBNjHIAcAAIBSDHgAAgASIgVg3IgNgpQgEATgHATIgWA6IBDAAg");
	this.shape_5.setTransform(160.1,19.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDBeQgHgDgDgIQgDgGAAgXIAAhSIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAAKACAEQABADADABQADACAFAAIALgBIADAWQgKACgIAAQgNAAgHgFg");
	this.shape_6.setTransform(140.8,20.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAjBKIAAhXQAAgPgEgHQgCgIgIgEQgHgFgKAAQgOAAgMAKQgLAKAAAcIAABOIgZAAIAAiQIAWAAIAAAVQAQgYAeAAQANAAALAFQAKAEAGAIQAFAIACAKQACAHAAARIAABYg");
	this.shape_7.setTransform(129,22.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgwA4QgTgUAAgkQAAgoAWgTQATgQAaAAQAeAAATAUQATATAAAjQAAAbgIAQQgJAQgQAJQgQAJgTAAQgeAAgSgUgAgdgpQgNAOAAAbQAAAcANAOQAMANARAAQASAAAMgNQAMgOABgcQgBgbgMgNQgMgOgSAAQgRgBgMAOg");
	this.shape_8.setTransform(113.5,22.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnBKIAAiQIAXAAIAAAWQAJgPAGgFQAGgFAJAAQANAAANAIIgJAXQgJgGgJAAQgIAAgGAFQgGAFgDAJQgDANAAAPIAABLg");
	this.shape_9.setTransform(102.2,22.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUBmIAAh9IgVAAIAAgTIAVAAIAAgPQABgPACgIQADgJAKgGQAHgGARAAQAKAAAMACIgDAWIgPgBQgLAAgFAEQgEAFAAANIAAAOIAcAAIAAATIgcAAIAAB9g");
	this.shape_10.setTransform(93.2,19.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmBKIAAiQIAWAAIAAAWQAIgPAIgFQAFgFAKAAQALAAANAIIgIAXQgJgGgJAAQgIAAgFAFQgHAFgCAJQgEANgBAPIAABLg");
	this.shape_11.setTransform(85.1,22.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgvA4QgTgUAAgjQAAgkATgTQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMAMARAAQAOAAAJgGQAKgIAGgQIAZAEQgGAWgQAMQgRANgZAAQgfAAgSgUgAApgNQgCgTgHgIQgMgOgTAAQgQgBgLALQgMAMgBATIBQAAIAAAAg");
	this.shape_12.setTransform(71.5,22.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDBeQgHgDgDgIQgDgGAAgXIAAhSIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAAKACAEQABADADABQADACAFAAIALgBIADAWQgKACgIAAQgNAAgHgFg");
	this.shape_13.setTransform(60.1,20.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag1BAQgNgLAAgTQAAgKAFgJQAFgJAIgGQAIgDAKgEIAVgDQAdgEAOgFIABgGQAAgPgIgGQgJgJgSABQgRgBgJAHQgHAFgEAQIgZgDQADgPAIgKQAHgJAPgGQAOgFASAAQASAAAMAEQAMAFAFAGQAGAHACAKIABAXIAAAfQAAAjACAJQABAJAFAIIgaAAQgDgHgCgLQgNAMgNAFQgMAFgPAAQgXAAgNgMgAgFAJQgPACgGADQgHACgDAGQgDAFAAAHQgBAKAIAGQAHAHAPgBQANAAALgFQALgHAFgKQAEgJAAgRIAAgIQgNAFgaAEg");
	this.shape_14.setTransform(48.2,22.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAwBkIgqiXIgGgYIgFAYIgrCXIgbAAIg1jHIAbAAIAfCCIAIApIAJglIAniGIAfAAIAcBkQALAmAFAhIAKgrIAfiAIAbAAIg3DHg");
	this.shape_15.setTransform(28.4,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(9.2,2.6,234.6,35.3), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqBcQgQgMAAgXIAYADQACALAGAFQAKAHAPAAQAQAAAKgHQAJgGADgNQACgHAAgYQgQATgXAAQgeAAgQgWQgRgVAAgeQAAgUAIgSQAHgSAPgJQAOgKATAAQAYAAARAVIAAgRIAXAAIAAB8QAAAigHAOQgHAOgOAIQgQAJgUAAQgbAAgPgMgAgahFQgMANABAbQAAAcALAMQALANAQAAQARAAALgNQAMgMAAgcQAAgagMgOQgMgNgQAAQgPAAgMANg");
	this.shape.setTransform(128.1,34.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAjBKIAAhXQAAgPgDgHQgEgIgHgEQgHgFgKAAQgOAAgMAKQgMAKAAAcIAABOIgYAAIAAiQIAWAAIAAAVQAQgYAdAAQANAAAMAFQALAEAFAIQAGAIABAKQACAHAAARIAABYg");
	this.shape_1.setTransform(113,31.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_2.setTransform(102.1,28.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiBKIAAhXQAAgPgCgHQgEgIgGgEQgIgFgKAAQgPAAgLAKQgMAKABAcIAABOIgZAAIAAiQIAWAAIAAAVQAQgYAdAAQANAAALAFQAMAEAFAIQAGAIACAKQABAHAAARIAABYg");
	this.shape_3.setTransform(91.3,31.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiBKIAAhXQAAgPgDgHQgCgIgIgEQgHgFgKAAQgPAAgLAKQgLAKAAAcIAABOIgZAAIAAiQIAWAAIAAAVQAQgYAeAAQANAAAKAFQALAEAGAIQAFAIACAKQACAHAAARIAABYg");
	this.shape_4.setTransform(75.7,31.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggBFQgLgFgGgHQgFgIgCgLQgCgHAAgPIAAhZIAZAAIAABPQAAATABAHQADAKAHAFQAIAGALAAQAKAAAJgGQAKgGAEgJQAEgKAAgTIAAhMIAZAAIAACQIgWAAIAAgWQgRAZgcAAQgNAAgLgFg");
	this.shape_5.setTransform(60.1,31.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAAKACADQABAEADABQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_6.setTransform(48.7,28.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnBgQgSgIgLgQQgKgQgBgUIAZgCQACAPAHAJQAGAKAOAGQANAGARAAQAPAAALgFQAMgEAGgIQAFgIAAgJQAAgKgFgHQgGgHgMgEQgIgEgbgGQgcgHgLgFQgOgHgHgLQgHgMAAgNQAAgQAJgNQAIgNARgHQAQgHAVAAQAVAAARAIQARAHAJAOQAJAOABARIgaACQgCgTgLgKQgMgJgXAAQgXAAgLAJQgLAIAAANQAAALAHAHQAIAHAfAHQAhAHAMAGQARAHAJAMQAIANAAAQQAAAQgJAOQgJAOgSAIQgRAIgVAAQgaAAgTgIg");
	this.shape_7.setTransform(35.2,28.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABABkIgYg8IhSAAIgWA8IgdAAIBNjHIAcAAIBSDHgAAgASIgVg3IgNgpQgEATgHATIgWA6IBDAAg");
	this.shape_8.setTransform(10.5,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-4.8,11.3,147.1,35.3), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Meraaslogo();
	this.instance.parent = this;
	this.instance.setTransform(-27,-17,0.995,0.995);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-27,-17,298.6,127.4), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAjBKIAAhXQAAgPgEgHQgCgIgIgEQgHgFgKAAQgOAAgMAKQgMAKAAAcIAABOIgYAAIAAiQIAWAAIAAAVQAQgYAeAAQANAAALAFQAKAEAGAIQAFAIACAKQACAHAAARIAABYg");
	this.shape.setTransform(291.5,21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1BAQgNgMAAgSQAAgLAFgIQAFgJAIgFQAHgFAKgCIAWgEQAdgDAOgGIAAgGQAAgPgGgHQgKgHgSgBQgRABgIAGQgIAFgFAQIgXgEQADgPAHgJQAIgJAOgGQAOgFASAAQATAAALAFQALAEAGAHQAFAGADAKIABAXIAAAgQAAAiABAJQACAJAFAJIgaAAQgEgIgBgKQgOALgMAFQgMAFgOAAQgYAAgNgMgAgFAJQgPACgHADQgGADgDAFQgDAFgBAGQABAKAHAHQAIAGANABQAOAAALgHQALgGAFgLQAEgIAAgRIAAgIQgNAFgaAEg");
	this.shape_1.setTransform(275.9,22.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_2.setTransform(265,19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMBkIAAjHIBMAAQATAAAKACQAPACALAHQAKAHAGAMQAFANAAAPQABAZgRARQgQASgqAAIgzAAIAABRgAgxgEIAzAAQAZAAALgJQALgKAAgRQAAgNgGgJQgGgJgLgDQgGgCgSAAIgzAAg");
	this.shape_3.setTransform(253.1,19.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDBfQgHgFgDgGQgDgIAAgWIAAhSIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABADADACQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgEg");
	this.shape_4.setTransform(231.8,19.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAjBKIAAhXQAAgPgEgHQgCgIgIgEQgHgFgKAAQgOAAgMAKQgMAKAAAcIAABOIgYAAIAAiQIAWAAIAAAVQAQgYAdAAQAOAAALAFQAKAEAGAIQAFAIACAKQACAHAAARIAABYg");
	this.shape_5.setTransform(220,21.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgkATgUQATgUAdAAQAdAAASAUQATAUAAAjIAAAGIhsAAQACAYAMANQAMANARAAQAOgBAJgGQAKgHAGgRIAZAEQgGAWgQANQgRAMgZAAQgfAAgSgUgAApgNQgCgSgHgJQgMgPgTAAQgQAAgLAMQgMALgBATIBQAAIAAAAg");
	this.shape_6.setTransform(204.4,22.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABKBKIAAhaQAAgPgCgGQgDgHgGgEQgGgEgJAAQgPAAgKAKQgKAKAAAXIAABTIgYAAIAAhdQAAgQgGgJQgGgIgOAAQgKAAgJAGQgJAFgEALQgEAKAAAUIAABKIgYAAIAAiQIAWAAIAAAUQAHgKALgHQALgGAPAAQAQAAAKAGQAKAHAEAMQARgZAcAAQAVAAAMAMQALAMAAAZIAABig");
	this.shape_7.setTransform(185.1,21.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag0BjIgEgXQAIACAHAAQAIAAAFgCQAFgEADgEIAHgSIACgHIg3iQIAbAAIAeBUIAKAgQAEgPAGgRIAfhUIAZAAIg3CSQgJAYgFAJQgGANgIAFQgJAGgMAAQgHAAgIgDg");
	this.shape_8.setTransform(166.5,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1BAQgNgMAAgSQAAgLAFgIQAFgJAIgFQAHgFALgCIAVgEQAdgDAOgGIAAgGQABgPgIgHQgJgHgSgBQgRABgJAGQgIAFgEAQIgYgEQAEgPAHgJQAHgJAPgGQAOgFASAAQATAAALAFQALAEAGAHQAGAGACAKIABAXIAAAgQAAAiABAJQACAJAFAJIgaAAQgEgIgBgKQgNALgNAFQgMAFgPAAQgXAAgNgMgAgFAJQgPACgHADQgGADgDAFQgDAFAAAGQAAAKAHAHQAIAGANABQAOAAALgHQALgGAFgLQAEgIAAgRIAAgIQgNAFgaAEg");
	this.shape_9.setTransform(151.6,22.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhMBkIAAjHIBMAAQATAAALACQAPACAKAHQAJAHAGAMQAHANgBAPQAAAZgQARQgQASgqAAIgzAAIAABRgAgxgEIAzAAQAZAAAMgJQAKgKAAgRQAAgNgGgJQgHgJgKgDQgHgCgRAAIgzAAg");
	this.shape_10.setTransform(135,19.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAiBcQgMgOAAgbQAAgVALgPQAKgPAVAAQATAAANANQAMAOgBAaQABAZgMAOQgNAOgTAAQgSAAgMgOgAAyAZQgHAHAAAWQAAATAHAIQAGAIAIAAQAKAAAGgIQAHgIAAgVQgBgUgGgHQgGgIgJAAQgKAAgFAIgAhABqIBtjTIAUAAIhtDTgAhegMQgMgOgBgbQAAgWALgPQALgPAVAAQASAAAMAOQANANAAAaQAAAagNAOQgMAMgSAAQgTAAgLgMgAhPhQQgHAIABAVQgBAUAHAIQAGAHAJAAQAJAAAHgIQAFgHAAgWQAAgTgFgIQgHgIgJAAQgJAAgGAIg");
	this.shape_11.setTransform(105,19.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AguBVQgRgPgCgaIAagBQACASALAKQAKAJAPAAQARAAAMgNQANgNAAgXQgBgVgMgLQgLgMgTAAQgLAAgKAFQgKAGgFAIIgXgDIAUhnIBiAAIAAAYIhPAAIgKA2QASgNASAAQAaAAATASQASASAAAcQAAAcgQATQgUAYggAAQgbAAgSgPg");
	this.shape_12.setTransform(84.9,19.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkBjQAAgXAJgiQAJghARgeQAPggATgVIhhAAIAAgYICBAAIAAATQgTAVgTAhQgTAhgJAkQgIAZgCAeg");
	this.shape_13.setTransform(69.3,19.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgmBoIA5jPIAUAAIg5DPg");
	this.shape_14.setTransform(57.7,19.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAiBcQgMgOAAgbQAAgVAKgPQALgPAVAAQATAAAMANQAMAOAAAaQAAAZgMAOQgNAOgRAAQgTAAgMgOgAAyAZQgHAHAAAWQAAATAHAIQAFAIAKAAQAJAAAGgIQAHgIAAgVQgBgUgGgHQgGgIgJAAQgKAAgFAIgAhABqIBtjTIAUAAIhtDTgAhegMQgNgOAAgbQAAgWALgPQALgPAUAAQATAAANAOQAMANAAAaQAAAagMAOQgNAMgTAAQgRAAgMgMgAhPhQQgGAIAAAVQAAAUAGAIQAGAHAJAAQAJAAAHgIQAFgHABgWQgBgTgFgIQgHgIgJAAQgJAAgGAIg");
	this.shape_15.setTransform(41.3,19.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AguBVQgRgPgDgaIAbgBQACASALAKQALAJAOAAQARAAAMgNQAMgNAAgXQABgVgMgLQgMgMgTAAQgMAAgJAFQgJAGgGAIIgXgDIAUhnIBiAAIAAAYIhPAAIgKA2QARgNATAAQAbAAASASQARASABAcQgBAcgQATQgTAYggAAQgbAAgSgPg");
	this.shape_16.setTransform(21.2,19.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhBBlQgBgKAEgHQAFgOALgNQALgNAVgSQAggaALgPQAMgQAAgOQAAgPgLgJQgKgLgRAAQgRAAgLAMQgKAKAAATIgagDQADgcARgPQARgPAbAAQAdAAARAQQARAQAAAYQAAAMgFAMQgFALgLAMQgMANgaAXIgcAYIgKAOIBhAAIAAAYg");
	this.shape_17.setTransform(5.3,19.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-4.2,2,305.7,35.3), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrBcQgPgMAAgXIAYADQACALAGAFQAJAHAQAAQARAAAJgHQAJgGADgNQACgHAAgYQgQATgXAAQgeAAgQgWQgRgVAAgeQAAgUAIgSQAHgSAOgJQAPgKATAAQAYAAASAVIAAgRIAWAAIAAB8QAAAigHAOQgHAOgOAIQgQAJgUAAQgbAAgQgMgAgahFQgLANAAAbQAAAcALAMQALANAQAAQARAAALgNQAMgMAAgcQAAgagMgOQgMgNgRAAQgOAAgMANg");
	this.shape.setTransform(273.1,22.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAiBKIAAhXQAAgPgCgHQgEgIgGgEQgIgFgKAAQgOAAgMAKQgMAKAAAcIAABOIgYAAIAAiQIAWAAIAAAVQAQgYAdAAQANAAAMAFQALAEAFAIQAFAIADAKQABAHAAARIAABYg");
	this.shape_1.setTransform(258,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_2.setTransform(247.1,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKBJIg4iQIAbAAIAeBVIAJAeIAJgcIAghXIAaAAIg3CQg");
	this.shape_3.setTransform(237.1,20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_4.setTransform(226.9,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag+BkIAAjHIAbAAIAACwIBhAAIAAAXg");
	this.shape_5.setTransform(216.6,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggBcQgOgKgIgRQgIgQAAgXQAAgVAHgSQAIgRAOgKQAOgJASAAQAMAAALAGQAKAFAHAJIAAhIIAYAAIAADIIgXAAIAAgTQgNAWgbAAQgRAAgPgKgAgZgPQgMANAAAcQAAAcAMANQAMAOAPAAQAQABAMgNQALgOgBgbQAAgdgLgOQgMgNgQAAQgQAAgKANg");
	this.shape_6.setTransform(192.3,17.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAiBKIAAhXQAAgPgCgHQgEgIgGgEQgIgFgKAAQgPAAgLAKQgMAKABAcIAABOIgZAAIAAiQIAWAAIAAAVQAQgYAdAAQANAAALAFQAMAEAFAIQAGAIACAKQABAHAAARIAABYg");
	this.shape_7.setTransform(177.2,19.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag1BAQgNgLAAgTQAAgKAFgJQAFgJAIgFQAIgEAKgDIAVgEQAdgDAOgFIABgHQAAgPgIgGQgJgIgSAAQgRAAgJAFQgHAHgEAPIgZgEQADgOAIgKQAHgKAPgFQAOgFASAAQASAAAMAFQAMAEAFAGQAGAHACAKIABAXIAAAfQAAAjACAJQABAJAFAJIgaAAQgDgIgCgKQgNALgNAFQgMAFgPAAQgXAAgNgMgAgFAJQgPACgHADQgGACgDAGQgDAFAAAHQgBAJAIAHQAHAGAPAAQANABALgHQALgGAFgKQAEgJAAgQIAAgJQgNAFgaAEg");
	this.shape_8.setTransform(161.6,20.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_9.setTransform(150.7,17.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoBAQgPgLgEgYIAYgDQACAOAKAIQAJAHAQAAQARABAIgIQAIgGAAgKQAAgIgHgFQgFgDgUgFQgagHgLgEQgKgFgGgJQgFgIAAgLQAAgKAEgIQAFgJAIgFQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAIQAGAIACAPIgYADQgCgLgIgHQgHgFgOAAQgRgBgHAGQgHAGAAAHQAAAFADAEQADAEAGACIAVAGQAaAIAKAEQALAEAGAIQAFAJAAAMQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape_10.setTransform(140.6,20.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMBkIAAjHIAZAAIAADHg");
	this.shape_11.setTransform(129.9,17.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgvA4QgTgUAAgjQAAgjATgUQATgVAdAAQAdAAASAUQATAUAAAjIAAAGIhsAAQACAYAMANQAMAMARAAQAOABAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAApgNQgCgTgHgJQgMgNgTAAQgQAAgLALQgMALgBATIBQAAIAAAAg");
	this.shape_12.setTransform(110.4,20.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKBJIg3iQIAaAAIAeBVIAJAeIAJgcIAhhXIAZAAIg3CQg");
	this.shape_13.setTransform(95.7,20.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_14.setTransform(85.5,17.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgoBAQgPgLgEgYIAYgDQACAOAKAIQAJAHAQAAQARABAIgIQAIgGAAgKQAAgIgHgFQgFgDgUgFQgagHgLgEQgKgFgGgJQgFgIAAgLQAAgKAEgIQAFgJAIgFQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAIQAGAIACAPIgYADQgCgLgIgHQgHgFgOAAQgRgBgHAGQgHAGAAAHQAAAFADAEQADAEAGACIAVAGQAaAIAKAEQALAEAGAIQAFAJAAAMQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape_15.setTransform(75.3,20.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggBFQgLgFgGgHQgFgIgCgLQgCgHAAgPIAAhZIAZAAIAABPQAAATABAHQADAKAHAFQAIAGALAAQAKAAAJgGQAKgGAEgJQAEgKAAgTIAAhMIAZAAIAACQIgWAAIAAgWQgRAZgcAAQgNAAgLgFg");
	this.shape_16.setTransform(60.6,20.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_17.setTransform(49.7,17.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgsA4QgSgTAAgkQAAgXAHgSQAIgRAQgJQAQgJASAAQAYAAAPAMQAPAMAEAWIgYAEQgEgPgIgIQgJgGgMAAQgSAAgLAMQgMAOAAAcQAAAdALAOQALANARgBQAPABAKgKQAJgIADgTIAYADQgEAagQAOQgQAOgYAAQgdAAgSgUg");
	this.shape_18.setTransform(40.1,20.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAlBJIgdgtIgIgNIglA6IgeAAIA1hLIgxhFIAfAAIAWAiIAKAPIAKgPIAZgiIAdAAIgyBDIA2BNg");
	this.shape_19.setTransform(25.7,20.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhKBkIAAjHICQAAIAAAXIh1AAIAAA+IBuAAIAAAWIhuAAIAABFIB6AAIAAAXg");
	this.shape_20.setTransform(9.7,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-1.9,0,285.5,35.3), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BWlogo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,113,38), null);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(123.3,41.8,1,1,0,0,0,56.5,19);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().rr(-96.95,-35.25,193.9,70.5,5);
	this.shape.setTransform(97,35.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(0,0,193.9,70.5), null);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_74 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(74).call(this.frame_74).wait(1));

	// Symbol 36
	this.instance = new lib.Symbol36();
	this.instance.parent = this;
	this.instance.setTransform(126.3,108.4,0.843,0.843,0,0,0,149.8,20);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(52));

	// Symbol 35
	this.instance_1 = new lib.Symbol35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(126.3,32.9,0.843,0.843,0,0,0,129.4,39);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14,cjs.Ease.get(1)).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36.2,17.9,180.4,54.3);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 39
	this.instance = new lib.Symbol39();
	this.instance.parent = this;
	this.instance.setTransform(0,149.8,1,1,0,0,0,98.4,20);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({alpha:1},14).wait(55));

	// Symbol 38
	this.instance_1 = new lib.Symbol38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,56.5,1,1,0,0,0,117,56.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,0,234,113);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 40
	this.instance = new lib.Symbol40();
	this.instance.parent = this;
	this.instance.setTransform(1.3,-27.3,1,1,0,0,0,126.4,62.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(315).to({_off:false},0).wait(54).to({alpha:0},6).wait(1));

	// Symbol 37
	this.instance_1 = new lib.Symbol37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(100.1,-35.8,0.844,0.844,0,0,0,117,84.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(270).to({_off:false},0).wait(39).to({alpha:0},6).to({_off:true},1).wait(60));

	// Symbol 34
	this.instance_2 = new lib.Symbol34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1,1,0,0,0,151,126);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(215).to({_off:false},0).to({scaleX:1.02,scaleY:1.02,x:0.2,y:0.1,alpha:1},8,cjs.Ease.get(-1)).to({regX:150.9,scaleX:1.12,scaleY:1.12,x:0,y:1.1},38).to({regX:151,scaleX:1.15,scaleY:1.15,y:1.3,alpha:0},9).to({_off:true},1).wait(105));

	// Symbol 33
	this.instance_3 = new lib.Symbol33();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1,1,0,0,0,151,126);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(172).to({_off:false},0).to({scaleX:1.02,scaleY:1.02,x:0.2,y:0.1,alpha:1},7,cjs.Ease.get(-1)).to({scaleX:1.15,scaleY:1.15,x:0,y:1.3},44).to({_off:true},1).wait(152));

	// Symbol 32
	this.instance_4 = new lib.Symbol32();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,1,1,0,0,0,151,126);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(126).to({_off:false},0).to({scaleX:1.02,scaleY:1.02,x:0.2,y:0.1,alpha:1},8,cjs.Ease.get(-1)).to({scaleX:1.15,scaleY:1.15,x:0,y:1.3},45).to({_off:true},1).wait(196));

	// Symbol 31
	this.instance_5 = new lib.Symbol31();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-70.6,-90.5,0.509,0.509,0,0,0,150.1,91);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(83).to({_off:false},0).to({regX:149.9,scaleX:0.52,scaleY:0.52,x:-70.5,alpha:1},6,cjs.Ease.get(-1)).to({regX:150,scaleX:0.59,scaleY:0.59,x:-77.6,y:-89.9},45).to({_off:true},1).wait(241));

	// Symbol 30
	this.instance_6 = new lib.Symbol30();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-70.5,-90.5,0.509,0.509,0,0,0,151.1,126);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).to({_off:false},0).to({regX:151,regY:125.9,scaleX:0.52,scaleY:0.52,alpha:1},5,cjs.Ease.get(-1)).to({scaleX:0.59,scaleY:0.59,x:-80.6,y:-89.9},45).to({_off:true},1).wait(286));

	// Symbol 29
	this.instance_7 = new lib.Symbol29();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-70.5,-90.5,0.509,0.509,0,0,0,151.1,126);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:151,regY:125.9,scaleX:0.52,scaleY:0.52,alpha:1},14,cjs.Ease.get(-1)).to({scaleX:0.59,scaleY:0.59,x:-74.6,y:-89.9},30).to({_off:true},1).wait(331));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.1,-154.6,305.5,305.6);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 27
	this.instance = new lib.Symbol27();
	this.instance.parent = this;
	this.instance.setTransform(138.9,84.6,1,1,0,0,0,61.5,20);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({y:58.5,alpha:1},14,cjs.Ease.get(1)).wait(54));

	// Symbol 26
	this.instance_1 = new lib.Symbol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(138.8,46.1,1,1,0,0,0,138.8,20);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:20,alpha:1},14,cjs.Ease.get(1)).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,30.6,283.3,35.3);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 25
	this.instance = new lib.Symbol25();
	this.instance.parent = this;
	this.instance.setTransform(155.5,73.5,1,1,0,0,0,61.5,20);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({y:60,alpha:1},14,cjs.Ease.get(1)).wait(53));

	// Symbol 24
	this.instance_1 = new lib.Symbol24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(155.5,33.5,1,1,0,0,0,155.5,20);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:20,alpha:1},14,cjs.Ease.get(1)).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.2,18,341.3,35.3);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 23
	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(132.7,113.5,1,1,0,0,0,121.3,20);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({y:100,alpha:1},14,cjs.Ease.get(1)).wait(46));

	// Symbol 22
	this.instance_1 = new lib.Symbol22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(132.7,73.5,1,1,0,0,0,117.9,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({y:60,alpha:1},14,cjs.Ease.get(1)).wait(55));

	// Symbol 21
	this.instance_2 = new lib.Symbol21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(132.7,33.5,1,1,0,0,0,132.7,20);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:20,alpha:1},14,cjs.Ease.get(1)).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,27,276.1,35.3);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 20
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(194.2,113.2,1,1,0,0,0,194.2,20);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({y:99.8,alpha:1},14,cjs.Ease.get(1)).wait(46));

	// Symbol 19
	this.instance_1 = new lib.Symbol19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(194.2,73.5,1,1,0,0,0,131.9,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({y:60,alpha:1},14,cjs.Ease.get(1)).wait(55));

	// Symbol 18
	this.instance_2 = new lib.Symbol18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(194.3,33.5,1,1,0,0,0,106.7,20);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:20,alpha:1},14,cjs.Ease.get(1)).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80.3,26.1,227.9,35.3);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 17
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(122,126.9,1,1,0,0,0,90.3,20);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({y:100,alpha:1},12,cjs.Ease.get(1)).wait(46));

	// Symbol 16
	this.instance_1 = new lib.Symbol16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(122,86.9,1,1,0,0,0,122,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({y:60,alpha:1},15,cjs.Ease.get(1)).wait(51));

	// Symbol 15
	this.instance_2 = new lib.Symbol15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(122.1,46.9,1,1,0,0,0,68.8,20);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:20,alpha:1},13,cjs.Ease.get(1)).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.5,38.2,147.1,35.3);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(139.5,20,1,1,0,0,0,139.5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-1.9,0,285.5,35.3), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 14
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(1179.5,56.4,1,1,0,0,0,123,52.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(315).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(44).to({alpha:0},9).wait(1));

	// Symbol 12
	this.instance_1 = new lib.Symbol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1179.4,56.1,1,1,0,0,0,138.8,39);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(270).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(31).to({alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(59));

	// Symbol 11
	this.instance_2 = new lib.Symbol11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1179.5,55.3,1,1,0,0,0,155.5,39);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(225).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(31).to({alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(104));

	// Symbol 10
	this.instance_3 = new lib.Symbol10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1179.5,69.8,1,1,0,0,0,145.2,20);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(180).to({_off:false},0).to({y:56.3,alpha:1},9,cjs.Ease.get(1)).wait(27).to({y:42.9,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(150));

	// Symbol 9
	this.instance_4 = new lib.Symbol9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1179.5,54.3,1,1,0,0,0,132.7,58);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(136).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(29).to({alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(194));

	// Symbol 8
	this.instance_5 = new lib.Symbol8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1179.4,54.5,1,1,0,0,0,194.2,58);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(29).to({alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(238));

	// Symbol 7
	this.instance_6 = new lib.Symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1179.4,54.3,1,1,0,0,0,122,58);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(27).to({alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(285));

	// Symbol 6
	this.instance_7 = new lib.Symbol6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1179.4,56.3,1,1,0,0,0,139.5,20);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},8,cjs.Ease.get(1)).wait(27).to({alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(330));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().dr(-96.95,-35.25,193.9,70.5);
	this.shape.setTransform(1175.6,73.2,2.352,2.017);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(375));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(947.6,2.2,456.2,142.2);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol42();
	this.instance.parent = this;
	this.instance.setTransform(-67.7,28,1,1,0,0,0,97,35.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:91},14,cjs.Ease.get(1)).wait(240).to({x:-76.5},10,cjs.Ease.get(-1)).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.7,-7.2,193.9,70.5);


// stage content:
(lib.meraas_300250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// logo
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(37.1,22,0.733,0.733,0,0,0,96.9,35.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.5,220.9,0.718,0.718,0,0,0,1175.5,73.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// back
	this.instance_2 = new lib.Symbol28();
	this.instance_2.parent = this;
	this.instance_2.setTransform(450.5,339.5,1,1,0,0,0,299.5,215.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,94.4,468,305.6);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BWlogo.png?1493279201368", id:"BWlogo"},
		{src:"images/core_logo.jpg?1493279201368", id:"core_logo"},
		{src:"images/Image1.jpg?1493279201368", id:"Image1"},
		{src:"images/Image2.jpg?1493279201368", id:"Image2"},
		{src:"images/Image3.jpg?1493279201368", id:"Image3"},
		{src:"images/Image41.jpg?1493279201368", id:"Image41"},
		{src:"images/Image42.jpg?1493279201368", id:"Image42"},
		{src:"images/Image43.jpg?1493279201368", id:"Image43"},
		{src:"images/Meraaslogo.png?1493279201368", id:"Meraaslogo"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;