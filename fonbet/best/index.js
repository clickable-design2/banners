(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,445);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,78);


(lib.diplom = function() {
	this.initialize(img.diplom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,268);


(lib.kuboc = function() {
	this.initialize(img.kuboc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,219,312);


(lib.logored = function() {
	this.initialize(img.logored);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,214,66);// helper functions:

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


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(-139,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139,-39,278,78);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6C0QgagJgTgRQgSgRgJgYQgKgYAAgfIAAhzQAAgeAKgZQAJgYASgRQATgRAagJQASgFAqgEQAbAAAWAGQAXAFARALQARALAMAQQAMARAHAVQAEANgMAFIgVAHQgNAEgFgMQgFgPgHgLQgIgLgLgHQgLgHgOgDQgPgDgTAAQgWAAgRAFQgRAFgMALQgMALgGAQQgGAQAAATIAAB1QAAAUAGAPQAGAQAMALQAMALARAFQASAGAVAAQATAAAPgEQAPgDALgHQALgIAIgKQAHgLAFgPQAEgOANAFIAVAIQAOAEgFANQgHAWgMARQgNAQgRALQgRALgWAFQgXAGgbAAQgqgDgSgGg");
	this.shape.setTransform(185.3,22.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah3C1QgNAAAAgNIAAlPQAAgNANAAIAWAAQAOAAAAANIAAB2IBjAAQAbABAWAHQAWAIAPAPQAPAPAIAUQAIAWAAAaQAAAbgIAWQgIAVgQAPQgPAPgVAIQgWAIgbAAgAhTCHIBeAAQARAAANgFQANgFAJgIQAJgKAFgNQAFgNAAgQQAAgQgFgNQgFgNgJgJQgJgIgNgFQgNgEgRAAIheAAg");
	this.shape_1.setTransform(142.1,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah5C1QgNAAAAgNIAAlPQAAgNANAAICNAAQAYAAATAGQATAGANAMQANAMAHASQAHARAAAXIgDAaQgCANgGAKQgGAJgIAJQgIAHgLAFIAAABQAOAFALAGQALAJAHALQAHAKAEAPQADAPAAASQAAAXgHATQgIARgPANQgOANgUAGQgVAHgZAAgAhVCHIBtAAQAOAAALgEQAMgDAHgIQAHgGAEgMQAEgKAAgPQAAgOgEgKQgEgLgHgHQgIgIgLgEQgLgDgOgBIhtAAgAhVgZIBkAAQAOAAALgDQAKgEAHgGQAIgHADgKQAEgLAAgNQAAg4g5ABIhkAAg");
	this.shape_2.setTransform(109.3,22.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACDC1QgVABgEgMIgfhTIiWAAIggBTQgEAMgUgBIgSAAQgOAAAEgNICFlSQAEgKANgBIATAAQANAAAEALICFFSQAEANgOAAgAA9AuIgziEQgJgcAAgVIgCAAIgBAHQgBATgHAWIg0CFIB7AAg");
	this.shape_3.setTransform(75.9,22.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKC1QgNAAAAgNIAAkuIhhAAQgNgBAAgNIAAgTQAAgNANAAIDxAAQANAAAAANIAAATQAAANgNABIhgAAIAAEuQAAANgOAAg");
	this.shape_4.setTransform(48.8,22.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6C0QgagJgTgRQgSgRgJgYQgKgYAAgfIAAhzQAAgeAKgZQAJgYASgRQATgRAagJQASgFAqgEQAbAAAWAGQAXAFARALQARALAMAQQAMARAHAVQAEANgMAFIgVAHQgNAEgFgMQgFgPgHgLQgIgLgLgHQgLgHgOgDQgPgDgTAAQgWAAgRAFQgRAFgMALQgMALgGAQQgGAQAAATIAAB1QAAAUAGAPQAGAQAMALQAMALARAFQASAGAVAAQATAAAPgEQAPgDALgHQALgIAIgKQAHgLAFgPQAEgOANAFIAVAIQAOAEgFANQgHAWgMARQgNAQgRALQgRALgWAFQgXAGgbAAQgqgDgSgGg");
	this.shape_5.setTransform(19,22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,203,55), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAED64").s().p("ABRCOQgKAAAAgKIAAiLQAAgdAHg4IgBAAQgXAsgSAdIhpCbQgEAGgHAAIgSAAQgLAAAAgKIAAkHQAAgKALAAIARAAQALAAAAAKIAACIQAAArgHAtIABAAQALgXAhg1IBniYQADgGAHAAIASAAQALAAAAAKIAAEHQAAAKgLAAg");
	this.shape.setTransform(188.9,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAED64").s().p("ABpCOQgKAAAAgKIAAiQQAAgWAHg1IgCAAQgTArgOAYIgyBaQgEAHgIAAIgJAAQgJAAgEgHIgzhaQgMgVgTguIgCAAQAGAyABAZIAACQQAAAKgKAAIgQAAQgKAAAAgKIAAkHQAAgKAKAAIAOAAQAKAAAFAIIBbCiIBciiQAEgIAKAAIAPAAQAKAAAAAKIAAEHQAAAKgKAAg");
	this.shape_1.setTransform(158.9,18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAED64").s().p("ABRCOQgKAAAAgKIAAiLQAAgdAHg4IgBAAQgXAsgSAdIhpCbQgEAGgHAAIgSAAQgLAAAAgKIAAkHQAAgKALAAIARAAQALAAAAAKIAACIQAAArgHAtIABAAQALgXAhg1IBniYQADgGAHAAIASAAQALAAAAAKIAAEHQAAAKgLAAg");
	this.shape_2.setTransform(128.9,18);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAED64").s().p("AiOCOQgLAAAAgKIAAkHQAAgKALAAIARAAQALAAAAAKIAADtIBgAAIAAjtQAAgKALAAIAQAAQAKAAAAAKIAADtIBhAAIAAjtQAAgKAKAAIASAAQAKAAAAAKIAAEHQAAAKgKAAg");
	this.shape_3.setTransform(96.6,18);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FAED64").s().p("ABMCOQgKAAAAgKIAAhmQgqAGgZABQgbAAgTgHQgUgFgMgNQgNgMgGgRQgGgTAAgYIAAhHQAAgKALAAIASAAQAKAAAAAKIAABHQAAAQAEALQAEAMAIAHQAIAIAMAEQANADAQAAIAlgBQARgCAMgEIAAh9QAAgKAKAAIASAAQALAAAAAKIAAEHQAAAKgLAAg");
	this.shape_4.setTransform(64.8,18);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAED64").s().p("AgvCOQgKAAAFgKIAkhIIhji/QgGgKALAAIASAAQAKAAADABQADABAEAHIBLCVIBIiVQACgGAEgCQADgBAKAAIARAAQAKAAgEAKIh+EIQgCAGgDABQgDACgJAAg");
	this.shape_5.setTransform(41.3,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FAED64").s().p("AhrCKIgIgPQgFgKALgEIAPgJQAGgEAHgKQAHgJAEgRQALg5AAgwIAAhYQAAgLAKAAICcAAQALAAAAALIAAEGQAAAKgLAAIgRAAQgLAAAAgKIAAjtIhkAAIAAA/IgBAxIgFAnQgKApgGANQgFAMgKAKQgHAIgJAGIgTAKIgGACQgFAAgDgHg");
	this.shape_6.setTransform(14.5,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,204.8,44), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.04,1.04);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,624.3,463), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.diplom();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,199,268), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kuboc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,219,312), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAED64").s().p("AAACOQgOAAgFgFQgGgFAAgOIAAgDQAAgPAGgEQAFgGAOAAIABAAQAPAAAEAGQAGAEAAAPIAAADQAAAOgGAFQgEAFgPAAgAgFA+QgLAAAAgLIgGi0QAAgMANAAIAUAAQANAAAAAMIgGC0QgBALgKAAg");
	this.shape.setTransform(179.1,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAED64").s().p("AgmBkQgRgEgJgHQgJgIgFgLQgEgMAAgQQAAgRAEgLQAGgMAJgGQALgHAQgEQAQgDAXAAIAkACIAAgLQAAgJgCgHQgCgHgEgFQgFgEgHgDQgIgCgKAAQgaAAgMASQgFAGgDABQgCABgHgCIgPgHQgHgDgBgEQgCgEAEgGQAFgKAHgHQAIgHAKgFQAJgFAMgDQANgCANAAQAUAAAQAFQAPAEAKAKQAKAKAGAPQAEAOAAAUIAABhQAAAKgDAFQgCAEgIADQgMAFgQACQgSADgXAAQgXAAgQgEgAgdAXQgJAGABANQAAANAHAGQAIAGAVAAQAWAAAOgDQAEgBAAgEIAAgoIgogCQgUAAgIAGg");
	this.shape_1.setTransform(164.3,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAED64").s().p("ABQB9QgMAAAAgMIAAgpIiHAAIAAApQAAAMgMAAIgTAAQgLAAAAgMIAAhGQAAgMALAAIAIAAQAGgEAFgJQAEgHADgLQAEgOACgrIAAg3QAAgMALAAIB8AAQAMAAAAAMIAACPIASAAQALAAAAAMIAABGQAAAMgLAAgAgXg2QAAAdgEAWQgEAUgIAOIBMAAIAAhyIg8AAg");
	this.shape_2.setTransform(143.2,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAED64").s().p("AgkBjQgQgFgLgKQgMgKgFgOQgHgOAAgSIAAg3QAAgSAHgOQAFgOAMgKQALgKAQgFQAQgFAUAAQAVAAAQAFQAQAFAMAKQALAKAGAOQAGAOAAASIAAA3QAAASgGAOQgGAOgLAKQgMAKgQAFQgQAFgVAAQgUAAgQgFgAgRg9QgJACgFAFQgGAFgDAGQgDAHAAAJIAAA3QAAAIADAHQADAHAGAEQAFAFAJADQAHACAKAAQAKAAAIgCQAJgDAGgFQAFgEADgHQADgHAAgIIAAg3QAAgJgDgHQgDgGgFgFQgGgFgJgCQgIgCgKAAQgKAAgHACg");
	this.shape_3.setTransform(121,21);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FAED64").s().p("Ag4BjQgLAAAAgMIAAitQAAgLALAAIBwAAQAMAAAAALIAAARQAAAMgMAAIhPAAIAACQQAAAMgMAAg");
	this.shape_4.setTransform(103.4,21);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAED64").s().p("AgxCHQgMAAAGgNIBfjUIh5AAQgHABgDgDQgDgDAAgHIAAgTQAAgHADgDQADgDAHAAICjAAQAHAAADADQADADAAAHIAAANQAAAKgEAIIhfDVQgDAHgEADQgEACgMAAg");
	this.shape_5.setTransform(76,17.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FAED64").s().p("AAfCHQgHAAgDgDQgDgDAAgHIAAjGIg0AdQgHAEgFgBQgEAAgDgIIgKgQQgDgHABgEQACgDAGgEIBJgqQAJgGAKAAIASAAQAHAAADADQADADAAAHIAADzQAAAHgDADQgDADgHAAg");
	this.shape_6.setTransform(56.3,17.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FAED64").s().p("AgpCGQgTgGgNgMQgNgMgHgRQgHgRAAgWIAAhgQAAgVAHgRQAHgRANgMQANgMATgGQATgHAWAAQAYAAATAHQASAGANAMQANAMAHARQAHARAAAVIAABgQAAAWgHARQgHARgNAMQgNAMgSAGQgTAHgYAAQgWAAgTgHgAgVhcQgKADgHAGQgGAGgEAJQgEAJAAALIAABgQAAAMAEAJQAEAIAGAHQAHAGAKADQAKADALAAQANAAAKgDQAJgDAHgGQAHgHAEgIQADgJAAgMIAAhgQAAgLgDgJQgEgJgHgGQgHgGgJgDQgKgDgNAAQgLAAgKADg");
	this.shape_7.setTransform(36.9,17.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FAED64").s().p("AhTCKQgHAAgDgDQgDgDAAgHIAAgdQAAgSAGgOQAGgOAMgKQAQgNAjgPQAYgJAYgNQAKgIAFgKQAFgKAAgMQAAgJgDgHQgDgIgGgGQgGgGgIgDQgJgDgJAAQgSAAgNAIQgNAJgIARQgDAHgDABQgDACgHgCIgVgIQgGgCgCgEQgCgEACgGQAGgQAKgMQAJgLANgIQAMgIAQgEQAPgEASAAQAVAAAQAHQARAGANAMQANANAGAPQAGAPAAARQAAAUgGAQQgFAQgMAKQgLALgVAMQgVALgdAMIgLAEIgFADIgLAGQgLAGAAAMIAAAGIB+AAQAHAAADADQADADAAAHIAAATQAAAHgDADQgDADgHAAg");
	this.shape_8.setTransform(13.9,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,185.7,42), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABHBgQgHAAAAgHIAAhhQAAgPAFgkIgCAAQgMAegJAQIgjA8QgCAFgGAAIgGAAQgFAAgDgFIgjg9QgIgNgMggIgCAAQAFAiAAARIAABhQAAAHgHAAIgLAAQgHAAAAgHIAAixQAAgHAHAAIAKAAQAHAAADAFIA9BuIA+htQADgGAGAAIALAAQAHAAAAAHIAACxQAAAHgHAAg");
	this.shape.setTransform(282.4,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggBgQgNgGgKgJQgKgIgEgNQgFgNgBgQIAAg8QABgRAFgMQAEgNAKgKQAKgJANgEQAKgDAWgCQAMAAAUAFQAOAEAKAJQAJAKAGANQAEAMAAARIAAA8QAAAQgEANQgGANgJAIQgKAJgOAGQgUAEgMAAQgWgBgKgDgAgUhIQgKADgFAGQgHAGgDAIQgDAJgBALIAAA8QABALADAIQADAIAHAGQAFAGAKADQAJADALAAQAMAAAJgDQAJgDAHgGQAGgGADgIQAEgIgBgLIAAg8QABgLgEgJQgDgIgGgGQgHgGgJgDQgJgCgMAAQgLAAgJACg");
	this.shape_1.setTransform(262.6,12.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/BgQgGAAAAgHIAAixQAAgHAGAAIBHAAQAOAAAMAEQAMAEAIAIQAIAIAFAMQADALAAAOQAAAOgDAMQgFAKgIAIQgIAIgMAEQgLAEgPAAIgzAAIAAA/QgBAHgGAAgAgrACIAxAAQAJAAAHgCQAHgCAEgFQAFgEADgHQACgHAAgJQAAgIgCgHQgDgHgFgFQgEgFgHgCQgHgDgJAAIgxAAg");
	this.shape_2.setTransform(245.7,12.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag3BgQgHAAAAgHIAAixQAAgHAHAAIBrAAQAIAAgBAHIAAAKQABAHgIAAIhYAAIAAA6IBMAAQAHAAAAAIIAAAJQAAAHgHAAIhMAAIAAA8IBcAAQAHAAAAAHIAAALQAAAHgHAAg");
	this.shape_3.setTransform(229.4,12.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA3BgQgMAAgDgGIgcg6QgGgNgHgEQgHgFgPAAIgVAAIAABPQAAAHgHAAIgMAAQgHAAAAgHIAAixQAAgHAHAAIAMAAQAHAAAAAHIAABMIATAAIAFAAIA4hNQADgEADgBIAIgBIAOAAQABAAAAAAQABABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABgBAAQAAABAAABQAAAAgBABIg+BRQAJADAIAHQAIAHAGAMIAiBCQAEAIgIAAg");
	this.shape_4.setTransform(213.6,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag3BgQgHAAAAgHIAAixQAAgHAHAAIBrAAQAIAAgBAHIAAAKQABAHgIAAIhYAAIAAA6IBMAAQAHAAAAAIIAAAJQAAAHgHAAIhMAAIAAA8IBcAAQAHAAAAAHIAAALQAAAHgHAAg");
	this.shape_5.setTransform(197.2,12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABHBgQgHAAAAgHIAAhhQAAgPAFgkIgCAAQgMAegJAQIgjA8QgCAFgGAAIgGAAQgFAAgDgFIgjg9QgIgNgMggIgCAAQAFAiAAARIAABhQAAAHgHAAIgLAAQgHAAAAgHIAAixQAAgHAHAAIAKAAQAHAAADAFIA9BuIA+htQADgGAGAAIALAAQAHAAAAAHIAACxQAAAHgHAAg");
	this.shape_6.setTransform(178.1,12.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA3BgQgMAAgDgGIgcg6QgGgNgHgEQgHgFgPAAIgVAAIAABPQAAAHgHAAIgMAAQgHAAAAgHIAAixQAAgHAHAAIAMAAQAHAAAAAHIAABMIATAAIAFAAIA4hNQADgEADgBIAIgBIAOAAQABAAAAAAQABABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABgBAAQAAABAAABQAAAAgBABIg+BRQAJADAIAHQAIAHAGAMIAiBCQAEAIgIAAg");
	this.shape_7.setTransform(159.7,12.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfBgQgHAAAEgHIAYgxIhDiAQgEgHAHAAIAMAAIAJABQACABADAEIAzBkIAwhkIAEgFIAIgBIAMAAQAHAAgDAHIhUCyQgCADgCACIgIABg");
	this.shape_8.setTransform(142.7,12.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag/BgQgHAAAAgHIAAixQAAgHAHAAIBxAAQAIAAgBAHIAAAKQABAHgIAAIheAAIAAA2IA5AAQANAAALAEQALAEAHAHQAIAHAEAKQAEALAAANQAAANgEALQgEAKgIAIQgHAHgLAEQgLAEgNAAgAgsBHIA2AAQAIAAAHgCQAFgCAFgEQAEgFADgGQACgGAAgHQAAgIgCgGQgDgGgEgEQgFgEgFgCQgHgDgIAAIg2AAg");
	this.shape_9.setTransform(126.4,12.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA1BgQgHAAAAgHIAAhOIhbAAIAABOQAAAHgHAAIgMAAQgHAAAAgHIAAixQAAgHAHAAIAMAAQAHAAAAAHIAABLIBbAAIAAhLQAAgHAHAAIAMAAQAHAAAAAHIAACxQAAAHgHAAg");
	this.shape_10.setTransform(102,12.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA3B7QgHAAAAgHIAAheQAAgVAFgkIgBAAQgQAegMASIhGBqQgDAEgFAAIgMAAQgHAAAAgHIAAixQAAgHAHAAIAMAAQAHAAAAAHIAABbQAAAdgFAfIABAAQAHgQAXgkIBEhmQADgEAEAAIANAAQAHAAAAAHIAACxQAAAHgHAAgAgPhUQgGgCgGgEQgGgDgDgGQgFgFgDgHQAAgFAEgCIAJgDQAGgBABAEQADAJAGAEQAHAFAJAAQAJAAAHgFQAGgEADgJQACgEAFABIAKADQAFACgCAFQgCAHgEAFQgFAGgGADQgFAEgHACQgIABgIAAQgIAAgIgBg");
	this.shape_11.setTransform(83.4,10.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABFBgQgKAAgDgGIgQgsIhPAAIgRAsQgCAGgLAAIgKAAQgHAAADgHIBGizQABgFAIAAIAKAAQAGAAADAFIBGCzQACAHgIAAgAAgAZIgbhHQgFgOAAgLIgBAAIAAAEQgBAKgDALIgbBHIBAAAg");
	this.shape_12.setTransform(65.5,12.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhIBeIgGgLQgDgGAHgDIAKgGQAEgDAFgHQAFgGADgLQAHgnAAggIAAg8QAAgGAHAAIBpAAQAHAAAAAGIAACxQAAAHgHAAIgMAAQgHAAAAgHIAAigIhDAAIAAArIgBAhIgDAbQgHAbgEAJQgDAHgHAHQgFAGgGADIgNAHIgDABQgEAAgCgDg");
	this.shape_13.setTransform(46.9,13);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AA1BgQgHAAAAgHIAAhOIhbAAIAABOQAAAHgHAAIgMAAQgHAAAAgHIAAixQAAgHAHAAIAMAAQAHAAAAAHIAABLIBbAAIAAhLQAAgHAHAAIAMAAQAHAAAAAHIAACxQAAAHgHAAg");
	this.shape_14.setTransform(29.4,12.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AggBgQgNgGgKgJQgJgIgGgNQgEgNAAgQIAAg8QAAgRAEgMQAGgNAJgKQAKgJANgEQAKgDAWgCQAMAAAUAFQAOAEAKAJQAJAKAGANQAEAMAAARIAAA8QAAAQgEANQgGANgJAIQgKAJgOAGQgUAEgMAAQgWgBgKgDgAgUhIQgKADgFAGQgHAGgDAIQgEAJAAALIAAA8QAAALAEAIQADAIAHAGQAFAGAKADQAJADALAAQAMAAAJgDQAJgDAGgGQAHgGADgIQADgIAAgLIAAg8QAAgLgDgJQgDgIgHgGQgGgGgJgDQgJgCgMAAQgLAAgJACg");
	this.shape_15.setTransform(11.2,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,295.2,31), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAED64").s().p("ACyDyQgRAAAAgSIAAj1QAAglAMhbIgDAAQggBKgXApIhWCZQgHAMgOAAIgQAAQgOAAgHgMIhYiaQgUgjgfhPIgEAAQALBWAAAqIAAD1QAAASgSAAIgaAAQgRAAAAgSIAAm/QAAgRARgBIAYAAQARABAIAOICcEUICbkUQAIgPARAAIAaAAQARABAAARIAAG/QAAASgRAAg");
	this.shape.setTransform(268.5,29.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAED64").s().p("ACKDyQgRAAAAgSIAAjsQAAgzAMhfIgDAAQgmBMggAwIizELQgGAIgMABIgfAAQgRAAAAgSIAAm/QAAgRARgBIAeAAQASABAAARIAADoQAABJgMBNIACAAQATgoA4haICvkFQAFgJANAAIAfAAQARABAAARIAAG/QAAASgRAAg");
	this.shape_1.setTransform(217.5,29.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAED64").s().p("AjzDyQgSAAAAgSIAAm/QAAgRASgBIAeAAQASABAAARIAAGUICjAAIAAmUQAAgRASgBIAdAAQASABAAARIAAGUICjAAIAAmUQAAgRASgBIAeAAQASABAAARIAAG/QAAASgSAAg");
	this.shape_2.setTransform(162.7,29.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAED64").s().p("ACCDyQgSAAAAgSIAAitQhHAMgrAAQguAAghgLQghgKgVgWQgWgUgKgfQgKgeAAgqIAAh4QAAgRASgBIAeAAQASABAAARIAAB4QAAAbAHATQAGAUANANQAOANAVAHQAWAFAcAAIA/gBQAcgEAVgGIAAjVQAAgRASgBIAeAAQASABAAARIAAG/QAAASgSAAg");
	this.shape_3.setTransform(108.7,29.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FAED64").s().p("AhQDyQgSAAAJgSIA+h6IiqlFQgJgRASgBIAfAAQARAAAFACQAFADAHAMICBD9IB5j9QAFgMAFgCQAGgCAQgBIAeAAQARABgHARIjWHBQgEAJgGADQgFAEgOAAg");
	this.shape_4.setTransform(68.7,29.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAED64").s().p("Ai3DsIgNgaQgJgRASgIIAZgOQALgIAMgRQAMgPAHgcQAShiAAhSIAAiWQAAgSASAAIEKAAQASAAAAASIAAG/QAAARgSAAIgeAAQgSAAAAgRIAAmTIirAAIAABqIgCBTIgIBEQgRBGgKAVQgIAUgRASQgNANgPAKIggASQgFACgEAAQgKAAgFgKg");
	this.shape_5.setTransform(23.2,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,297.9,72), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABSBiQgHAAAAgHIAAi0QAAgIAHAAIAMAAQAHAAAAAIIAAC0QAAAHgHAAgAhdBiQgHAAAAgHIAAi0QAAgIAHAAIAMAAQAHAAAAAIIAABAIA3AAQAOAAALADQAMAFAIAIQAIAIAFALQAEALAAAPQAAAOgEAMQgFALgIAJQgIAHgMAEQgLAFgOAAgAhKBJIA0AAQAJAAAHgCQAGgDAFgFQAFgFADgHQACgHAAgIQAAgJgCgIQgDgGgFgFQgFgFgGgCQgHgCgJAAIg0AAg");
	this.shape.setTransform(193.6,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA2BiQgHAAAAgHIAAhQIhdAAIAABQQAAAHgIAAIgMAAQgHAAAAgHIAAi0QAAgIAHAAIAMAAQAIAAAAAIIAABMIBdAAIAAhMQAAgIAHAAIANAAQAHAAAAAIIAAC0QAAAHgHAAg");
	this.shape_1.setTransform(172,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABHBiQgLAAgCgGIgSgtIhQAAIgRAtQgDAGgLAAIgJAAQgIAAADgHIBHi2QACgGAIAAIAKAAQAHAAACAGIBHC2QADAHgIAAgAAhAZIgchHQgFgPAAgLIAAAAIAAAEQgBAKgEALIgcBIIBCAAg");
	this.shape_2.setTransform(153.9,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA2BiQgHAAAAgHIAAhQIhdAAIAABQQAAAHgIAAIgMAAQgHAAAAgHIAAi0QAAgIAHAAIAMAAQAIAAAAAIIAABMIBdAAIAAhMQAAgIAHAAIANAAQAHAAAAAIIAAC0QAAAHgHAAg");
	this.shape_3.setTransform(135.3,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXBjQgNgDgKgFQgKgHgHgJQgHgIgEgMQgDgHAHgCIAMgFQAHgCACAHQADAIAEAGQAFAGAGAEQAHAEAJABQAJACALAAQAKAAAJgCQAIgCAFgFQAFgEADgGQADgHAAgIQAAgIgCgGQgCgGgEgEQgEgEgGgDQgGgCgIAAIgqAAQgIAAAAgHIAAgJQAAgGAIgBIAnAAQAHAAAGgCQAFgCAEgEQAEgEACgGQACgFAAgHQAAghgoAAQgKAAgJABQgIADgGADQgGAEgFAGQgEAFgCAJQgDAGgGgCIgMgEQgHgCADgHQADgMAHgJQAHgIAJgGQAKgGAMgDQANgDAQAAQAPAAANAEQAMAEAIAGQAIAIAFAKQAEAKAAAOQAAAHgCAHQgBAGgDAGQgDAGgFAEQgEAEgGACQAIADAFADQAGAFADAGQAEAFACAJQACAHAAAJQAAAOgFAKQgEALgJAIQgJAHgNAFQgOADgRAAQgPAAgNgDg");
	this.shape_4.setTransform(117.3,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA4BiQgHAAAAgHIAAhfQAAgVAFgmIgBAAQgQAegMAUIhIBrQgDAEgFAAIgNAAQgGAAAAgHIAAi0QAAgIAGAAIANAAQAHAAAAAIIAABcQAAAegFAgIABAAQAHgQAXgmIBHhoQACgEAFAAIANAAQAGAAAAAIIAAC0QAAAHgGAAg");
	this.shape_5.setTransform(99,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhABiQgHAAAAgHIAAi0QAAgIAHAAIBJAAQAOAAAMAEQAMAFAIAIQAJAIAEAMQAEALAAAPQAAAOgEAMQgFAKgHAIQgJAJgMADQgMAFgOAAIg2AAIAABAQABAHgIAAgAgtACIAzAAQAJAAAIgCQAGgCAFgFQAFgFADgGQACgIAAgIQAAgJgCgHQgDgHgFgFQgFgFgGgDQgIgCgJAAIgzAAg");
	this.shape_6.setTransform(81.4,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA2BiQgIAAABgHIAAijIhcAAIAACjQAAAHgIAAIgMAAQgHAAAAgHIAAi0QAAgIAHAAICCAAQAIAAAAAIIAAC0QAAAHgIAAg");
	this.shape_7.setTransform(62.8,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABSBiQgHAAAAgHIAAi0QAAgIAHAAIAMAAQAHAAAAAIIAAC0QAAAHgHAAgAhdBiQgHAAAAgHIAAi0QAAgIAHAAIAMAAQAHAAAAAIIAABAIA3AAQAOAAALADQAMAFAIAIQAIAIAFALQAEALAAAPQAAAOgEAMQgFALgIAJQgIAHgMAEQgLAFgOAAgAhKBJIA0AAQAJAAAHgCQAGgDAFgFQAFgFADgHQACgHAAgIQAAgJgCgIQgDgGgFgFQgFgFgGgCQgHgCgJAAIg0AAg");
	this.shape_8.setTransform(35,11.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABJBiQgIAAABgHIAAhjQAAgPAEglIgBAAQgNAegJAQIgjA+QgDAFgGABIgGAAQgFgBgEgFIgjg+QgIgOgMggIgCAAQAFAjgBARIAABjQAAAHgHAAIgLAAQgGAAgBgHIAAi0QABgIAGAAIAKAAQAHAAADAGIA/BvIA/hvQADgGAHAAIALAAQAGAAABAIIAAC0QgBAHgGAAg");
	this.shape_9.setTransform(11.7,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-0.1,0,206.5,28.8), null);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,1,1,0,0,0,102.4,22);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.3,-24,218,58);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(1.6,250,1,1,0,0,0,1.6,250);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.6},14,cjs.Ease.get(-1)).to({rotation:7.7},15,cjs.Ease.get(1)).to({rotation:3.8},15,cjs.Ease.get(-1)).to({rotation:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199,268);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(109.5,156,1,1,0,0,0,109.5,156);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:163.7},14,cjs.Ease.get(-1)).to({y:172},15,cjs.Ease.get(1)).to({y:163.5},16,cjs.Ease.get(-1)).to({y:156},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,219,312);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(139,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,278,78), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(101.5,27.5,1,1,0,0,0,101.5,27.5);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-5,-2,217,69), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(99.5,159,1,1,0,0,0,109.5,156);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// diplom.png
	this.instance_1 = new lib.Symbol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(216.5,147,1,1,0,0,0,99.5,134);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-10,3,326,312), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(139,39,1,1,0,0,0,139,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.08,scaleY:1.08,x:139.1,y:39.1},0).wait(2).to({scaleX:1,scaleY:1,x:139,y:39},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,278,78);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.Tween4();
	this.instance.parent = this;
	this.instance.setTransform(378.8,90.6);
	this.instance.shadow = new cjs.Shadow("#000000",0,3,4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(114).to({_off:false},0).to({x:262.8},2,cjs.Ease.get(-1)).to({x:88.8},3,cjs.Ease.get(1)).wait(32).to({x:85.8},0).wait(1).to({x:91.8},0).wait(1).to({x:85.8},0).wait(1).to({x:91.8},0).wait(1).to({x:85.8},0).wait(1).to({x:91.8},0).wait(1).to({x:88.8},0).wait(47).to({x:262.8},3).to({x:378.8},2).to({_off:true},1).wait(15));

	// Layer 6
	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(397.7,45.7,1,1,0,0,0,101.5,27.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(112).to({_off:false},0).to({x:273.7},2,cjs.Ease.get(-1)).to({x:87.7},3,cjs.Ease.get(1)).wait(21).to({x:84.7},0).wait(1).to({x:90.7},0).wait(1).to({x:84.7},0).wait(1).to({x:90.7},0).wait(1).to({x:84.7},0).wait(1).to({x:90.7},0).wait(1).to({x:87.7},0).wait(58).to({x:273.7},3).to({x:397.7},2).to({_off:true},1).wait(17));

	// Layer 3
	this.instance_2 = new lib.Symbol9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(87,303,1,1,0,0,0,139,39);
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Symbol9(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(110).to({_off:false},0).to({y:280.5},2,cjs.Ease.get(-1)).to({y:162},3,cjs.Ease.get(1)).wait(53).to({regY:39.1,scaleX:0.95,scaleY:0.95,x:87.1,y:162.1},2,cjs.Ease.get(-1)).to({regY:39,scaleX:0.86,scaleY:0.86,x:87,y:162},3,cjs.Ease.get(1)).to({scaleX:0.92,scaleY:0.92,x:87.1},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:87},3,cjs.Ease.get(1)).wait(22).to({y:280.5},3).to({y:303},2).to({_off:true},1).wait(19));

	// Layer 1
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(92.7,27,1,1,0,0,0,107.7,15);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({x:89.7},0).wait(1).to({x:95.7},0).wait(1).to({x:89.7},0).wait(1).to({x:95.7},0).wait(1).to({x:89.7},0).wait(1).to({x:92.7},0).wait(64).to({x:232.7},2,cjs.Ease.get(-1)).to({x:442.7},3,cjs.Ease.get(1)).wait(106).to({x:232.7},3).to({x:92.7},2).wait(10));

	// Layer 2
	this.instance_4 = new lib.Symbol4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(85.3,84,1,1,0,0,0,148.9,36);
	this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40).to({x:82.3},0).wait(1).to({x:88.3},0).wait(1).to({x:82.3},0).wait(1).to({x:88.3},0).wait(1).to({x:82.3},0).wait(1).to({x:85.3},0).wait(56).to({x:225.3},2,cjs.Ease.get(-1)).to({x:435.3},3,cjs.Ease.get(1)).wait(107).to({x:225.3},3).to({x:85.3},2).wait(7));

	// Layer 3
	this.instance_5 = new lib.Symbol5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(84.6,123,1,1,0,0,0,147.6,15.5);
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50).to({x:81.6},0).wait(1).to({x:87.6},0).wait(1).to({x:81.6},0).wait(1).to({x:87.6},0).wait(1).to({x:81.6},0).wait(1).to({x:84.6},0).wait(48).to({x:224.6},2,cjs.Ease.get(-1)).to({x:434.6},3,cjs.Ease.get(1)).wait(108).to({x:224.6},3).to({x:84.6},2).wait(4));

	// Layer 4
	this.instance_6 = new lib.Symbol6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(87.4,167.7,1,1,0,0,0,92.8,21);
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60).to({x:84.4},0).wait(1).to({x:90.4},0).wait(1).to({x:84.4},0).wait(1).to({x:90.4},0).wait(1).to({x:84.4},0).wait(1).to({x:87.4},0).wait(40).to({x:227.4},2,cjs.Ease.get(-1)).to({x:437.4},3,cjs.Ease.get(1)).wait(109).to({x:227.4},3).to({x:87.4},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.6,10,311,190.7);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.y = - stage.mouseY / 30;
		}
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 5
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(457.3,109.3,1,1,0,0,0,107.7,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.instance_1 = new lib.logored();
	this.instance_1.parent = this;
	this.instance_1.setTransform(329,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 2
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(163.5,162,1,1,0,0,0,204.5,161);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.fon = new lib.Symbol14();
	this.fon.parent = this;
	this.fon.setTransform(1,1,1,1,0,0,0,13,80);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(249,71,663.3,463);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1499763014689", id:"back"},
		{src:"images/button.png?1499763014689", id:"button"},
		{src:"images/diplom.png?1499763014689", id:"diplom"},
		{src:"images/kuboc.png?1499763014689", id:"kuboc"},
		{src:"images/logored.png?1499763014689", id:"logored"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;