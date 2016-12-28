(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.arma = function() {
	this.initialize(img.arma);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,67);


(lib.armikol = function() {
	this.initialize(img.armikol);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,37);


(lib.aska = function() {
	this.initialize(img.aska);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,303,115);


(lib.assy = function() {
	this.initialize(img.assy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,43);


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,508);


(lib.boda = function() {
	this.initialize(img.boda);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,76);


(lib.corner = function() {
	this.initialize(img.corner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,66);


(lib.elka = function() {
	this.initialize(img.elka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,578);


(lib.elkaka = function() {
	this.initialize(img.elkaka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,357,566);


(lib.fing = function() {
	this.initialize(img.fing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,62);


(lib.foot = function() {
	this.initialize(img.foot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,23);


(lib.haed = function() {
	this.initialize(img.haed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,138);


(lib.her = function() {
	this.initialize(img.her);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,42);


(lib.herik = function() {
	this.initialize(img.herik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,42);


(lib.lawkod = function() {
	this.initialize(img.lawkod);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,189);


(lib.leg = function() {
	this.initialize(img.leg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,23);


(lib.leggy = function() {
	this.initialize(img.leggy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,75);


(lib.rabarm = function() {
	this.initialize(img.rabarm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,11);


(lib.rabarman = function() {
	this.initialize(img.rabarman);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,12);


(lib.romkl = function() {
	this.initialize(img.romkl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,94);


(lib.rou = function() {
	this.initialize(img.rou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,166);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,329,85);


(lib.shisha = function() {
	this.initialize(img.shisha);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,88);


(lib.volossa = function() {
	this.initialize(img.volossa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,164);// helper functions:

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


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,1,1).p("AAkAAQAAAPgKALQgLAKgPAAQgOAAgKgKQgLgLAAgPQAAgOALgKQAKgLAOAAQAPAAALALQAKAKAAAOg");
	this.shape.setTransform(3.6,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ63, new cjs.Rectangle(-2.5,-2.5,12.2,12.2), null);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF6699","#C53399"],[0,1],0,-9.8,0,9.8).s().p("AhhBsIA1jkQANgBAVACIBsDqQgZAEgnABIgTg2IgzACIgJA2QgbgEgZgKgAgeAaIAlgGIgag9g");
	this.shape.setTransform(9.8,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(0,0,19.6,24.3), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF6699","#C53399"],[0,1],0,-12.4,0,12.5).s().p("ABYBhIhlABIAAgBIhoAAIgHjiIBUgFIgFCgIAMABIAhgCIgEigIBTAFIgFC6IAwAAIADBGIgqAKg");
	this.shape.setTransform(12.5,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(0,0,25,27.3), null);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF6699","#C53399"],[0,1],0.1,-11.1,0.1,11.1).s().p("AAoAeIhRBRIg9gFIgIjcIBDAGIAJBuIBNhnIA6gIIAKDdIhHADg");
	this.shape.setTransform(11.1,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF6699","#C53399"],[0,1],-3.3,0,3.4,0).s().p("AgdAGQgIgGAIgEQAIgGAUgCQAXABAIAFQAIAFgIAHQgIAHgWAAQgVAAgIgHg");
	this.shape_1.setTransform(10.9,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ57, new cjs.Rectangle(0,0,22.2,25.1), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF6699","#C53399"],[0,1],0,-9.8,0,9.8).s().p("AhhBsIA1jkQANgBAVACIBsDqQgZAEgnABIgTg2IgzACIgJA2QgbgEgZgKgAgeAaIAlgGIgag9g");
	this.shape.setTransform(9.8,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(0,0,19.6,24.3), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF6699","#C53399"],[0,1],0,-8.3,0,8.4).s().p("AhLBCQAWAGARACQARABAJgBQAJgCAFgFIAIgHIAEgJIAAgCQABgIgFgFQgFgGgPgDQgRgFgdgBQAAABAAAAQAAAAAAAAQgBgBAAgBQAAAAAAgCQAAgZACgRIABgBIAZACIARgBIALgEQAEgCADgEIAEgGIACgGIAAgJIgGgJQgEgFgIgBQgJgCgRACQgRACgXAHIgBg1IAbgGIAWgCIAeAEQAOACAOAGQAOAGAJAIQAJAIAGANQAFAOgBASQAAANgGAMQgGALgFAFIgFAEQARAIAHAUQAHASgHAVQgHAWgUAMQgNAKgYAEQgXAEgTABIg5AAQAFgUADgkg");
	this.shape.setTransform(8.4,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(0,0,16.7,24.5), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF6699","#C53399"],[0,1],0.1,-11.1,0.1,11.1).s().p("AAoAeIhRBRIg9gFIgIjcIBDAGIAJBuIBNhnIA6gIIAKDdIhHADg");
	this.shape.setTransform(11.1,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF6699","#C53399"],[0,1],-3.3,0,3.4,0).s().p("AgdAGQgIgGAIgEQAIgGAUgCQAXABAIAFQAIAFgIAHQgIAHgWAAQgVAAgIgHg");
	this.shape_1.setTransform(10.9,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(0,0,22.2,25.1), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF6699","#C53399"],[0,1],0.1,-7.2,0.1,7.3).s().p("AhEB1IgEhfIAGiKIBigEQAWAAARAEIAAA1Ig/AFIAAAcIAzgDIAAABIgJA4IgnAFIAAABIAGAeIA3gDIAABAg");
	this.shape.setTransform(7.3,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(0,0,14.5,24.3), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF6699","#C53399"],[0,1],0,-8.4,0,8.4).s().p("AhTB3IAKj2IA6AAIAAACIBcgCIgKAyIhWgHIgIBaQARgCAQAEQASAEAOAHQAPAGAOAKQAPAJACARQABAQgNAPQgOAPgQAHQgQAIgiAEIgUACQgaAAgdgJgAghAiIgFAuQAWAAALgLQAKgLgGgQQgFgLgNAAQgGAAgIADg");
	this.shape.setTransform(8.4,12.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(0,0,16.8,25.6), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF6699","#C53399"],[0,1],0,-10.8,0,10.8).s().p("Ag/BpQgdgXgKghQgJgiAGgbQAGgbAQgXQAPgYAZgOQAZgPAZgFQAZgEAUAIQATAIAXAgIgnAyQgGgIgYgGQgXgGgRAOQgRAOAAAXQABAYANAIQANAIAJgBQALgCAIgEQAIgEAYgTIA1AqQgNATgKAHIggATQgWALggAHQgIACgHAAQgZAAgWgRg");
	this.shape.setTransform(10.8,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(0,0,21.7,24.4), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fing();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(0,0,27,62), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lawkod();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(0,0,181,189), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.romkl();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-1,-1,82,94), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shisha();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(0,0,81,88), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("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");
	this.shape.setTransform(54.4,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(0,0,108.8,28.5), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlTDEQiMhRAAhzQAAhyCMhSQCNhQDGgBQDHABCNBQQCMBSAAByQAABziMBRQiNBSjHAAQjGAAiNhSg");
	this.shape.setTransform(48,27.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,0,96,55.5), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6B2E2A").s().p("AA2AQIgQgKIgBgBIgjgSQgWgNgdAWQgdAUAIgMQAHgMASgKQATgJAaAGQAaAGAXAQQAXARABAFQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQgEAAgOgIg");
	this.shape.setTransform(6.4,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6B2E2A").s().p("ABDAXIgLgCIgLgDIgGgCIgBAAIgjgMIgGgCQgWgEgWAIIgBABQgZAKAEgLIAAgBQAFgMASgKQASgJAaAGIACABQAYAGAWAOIAFAEQARAMACAFQAAAAAAABQABAAgBAAQAAAAAAABQAAAAgBAAIgCgBg");
	this.shape_1.setTransform(6.5,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6B2E2A").s().p("AAtAZIgFgBIgBAAQgQgBgVgDIgFgBQgZgDgUAAIAAAAQgWABACgNQADgMASgKQASgJAYAGIAEABQAXAFAVAPIAFADQAPALAFAFQAAABABAAQAAABAAAAQAAABAAAAQgBAAAAAAQgBACgKABIgMAAg");
	this.shape_2.setTransform(6.6,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6B2E2A").s().p("AgxAVQgSgJAAgNQAAgNASgKQASgJAbAGQAZAGAXARQAXAQABAFQABAEgYAFQgZAFgZAAQgaAAgSgKg");
	this.shape_3.setTransform(6.8,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,0,14.6,4.9);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,0,329,85), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.armikol();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(0,0,176,37), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.aska();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(0,0,303,115), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.assy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,90,43), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.corner();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,37,66), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leggy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,122,75), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.volossa();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,148,164), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.arma();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,97,67), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.herik();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,36,42), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgkAkQgPgPAAgVQAAgVAPgPQAPgPAVAAQAVAAAPAPQAQAPAAAVQAAAVgQAPQgPAQgVAAQgVAAgPgQg");
	this.shape.setTransform(5.2,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,10.4,10.4), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAFBrQgsAAgggfQgfggAAgsQAAgrAfggQAggfAsAAQAsAAAZAlQAYAlAEAlQAEAngdAgQgcAfgsAAIAAAAg");
	this.shape.setTransform(10.3,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,20.5,21.4), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhLBMQgfggAAgsQAAgrAfggQAggfArAAQAsAAAgAfQAfAgAAArQAAAsgfAgQggAfgsAAQgrAAgggfg");
	this.shape.setTransform(10.7,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,21.4,21.4), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.her();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,37,42), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.foot();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,19,23), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,19,23), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rabarman();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,26,12), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rabarm();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,27,11), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elkaka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,357,566), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elka();
	this.instance.parent = this;
	this.instance.setTransform(38,17.5,0.686,1,0,0,-9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(38,-17.3,200.6,612.8), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.821,0.821);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,656.6,417), null);


(lib.Символ14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.rou();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.067,0.067);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14_1, new cjs.Rectangle(0,0,11.1,11.1), null);


(lib.Символ13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.rou();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13_1, new cjs.Rectangle(0,0,166,166), null);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 59
	this.instance = new lib.Символ59();
	this.instance.parent = this;
	this.instance.setTransform(154.2,20.2,1.534,1.534,0,0,0,9.8,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:9.9,rotation:-3.7,x:154.3,y:19.2},2).to({regX:9.8,rotation:0,x:154.2,y:20.2},2).wait(1));

	// Символ 58
	this.instance_1 = new lib.Символ58();
	this.instance_1.parent = this;
	this.instance_1.setTransform(117.5,24.4,1.534,1.534,0,0,0,12.5,13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:2.2,y:25.4},2).to({rotation:0,y:24.4},2).wait(1));

	// Символ 57
	this.instance_2 = new lib.Символ57();
	this.instance_2.parent = this;
	this.instance_2.setTransform(78.1,19.3,1.534,1.534,0,0,0,11.1,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:12.7,rotation:-4.7,y:18.5},2).to({regY:12.6,rotation:0,y:19.3},2).wait(1));

	// Символ 56
	this.instance_3 = new lib.Символ56();
	this.instance_3.parent = this;
	this.instance_3.setTransform(43.5,20.2,1.534,1.534,0,0,0,9.8,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:4.7,y:21.5},2).to({rotation:0,y:20.2},2).wait(1));

	// Символ 55
	this.instance_4 = new lib.Символ55();
	this.instance_4.parent = this;
	this.instance_4.setTransform(12.8,20,1.534,1.534,0,0,0,8.3,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-4.8,y:19.1},2).to({rotation:0,y:20},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169.2,45.2);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 54
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(104.4,19.3,1.534,1.534,0,0,0,11.2,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:12.5,rotation:4,y:20},2).to({regY:12.6,rotation:0,y:19.3},2).wait(1));

	// Символ 53
	this.instance_1 = new lib.Символ53();
	this.instance_1.parent = this;
	this.instance_1.setTransform(72.8,20.9,1.534,1.534,0,0,0,7.2,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-3,y:20.4},2).to({rotation:0,y:20.9},2).wait(1));

	// Символ 52
	this.instance_2 = new lib.Символ52();
	this.instance_2.parent = this;
	this.instance_2.setTransform(47.6,19.9,1.534,1.534,0,0,0,8.4,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:1.7,y:20.4},2).to({rotation:0,y:19.9},2).wait(1));

	// Символ 51
	this.instance_3 = new lib.Символ51();
	this.instance_3.parent = this;
	this.instance_3.setTransform(16.6,20.4,1.534,1.534,0,0,0,10.8,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:12.3,rotation:-6,y:20},2).to({regY:12.2,rotation:0,y:20.4},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121.3,39.4);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ63();
	this.instance.parent = this;
	this.instance.setTransform(75.3,73.8,1,1,0,0,0,3.6,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(10.6,1,1).p("ACtoIQBxAnBbBbQBwBwAiCPAFsAHIF+AAAgErQIAAE2ArpALIF3AAAohiHQAiiPBvhwQBdhdBzgnAAAGfIAAEyAjAIHQhzgnhdhdQhlhlgmiAAIECeQglCAhmBlQhbBbhxAo");
	this.shape.setTransform(74.6,72.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-5.2,-5.2,159.7,154.7), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(35.5,34.5,1,1,0,0,0,53.9,51.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:56.1,rotation:360,x:37.7},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-22.1,159.7,154.7);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(55,55,1,1,0,0,0,55,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-22.1,159.7,154.7);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.684,0.684,0,0,0,55,55);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(7.2,1,1).p("AA0AAQAAAWgPAPQgPAPgWAAQgVAAgPgPQgPgPAAgWQAAgVAPgPQAPgPAVAAQAWAAAPAPQAPAPAAAVg");
	this.shape.setTransform(0.8,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-53.7,-52.7,109.2,105.8), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ61();
	this.instance.parent = this;
	this.instance.setTransform(45.5,81.6,1,1,0,0,0,84.6,22.6);

	this.instance_1 = new lib.Символ60();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39.4,29.5,1,1,0,0,0,60.6,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-39.1,9.8,169.2,94.3), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 35
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(137.5,54.5,0.852,0.852,-55.6,0,0,40.5,44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 36
	this.instance_1 = new lib.Символ36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(112,168.4,1,1.016,0,-10.2,0,41,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 38
	this.instance_2 = new lib.Символ38();
	this.instance_2.parent = this;
	this.instance_2.setTransform(106.5,73.4,1.088,1,0,-14,9.2,13.5,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 37
	this.instance_3 = new lib.Символ37();
	this.instance_3.parent = this;
	this.instance_3.setTransform(115.8,114.9,1,1.002,0,-6.2,-2.5,90.5,94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(15.2,4.8,201.1,209.7), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(48.4,26.2,0.729,0.729,0,0,0,54.4,14.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(15).to({alpha:0},10,cjs.Ease.get(-1)).to({_off:true},6).wait(5));

	// Символ 33
	this.instance_1 = new lib.Символ33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(145.5,12.7,0.115,0.115,0,0,0,48.4,27.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({x:130.5,y:7.8,alpha:1},9,cjs.Ease.get(1)).wait(34).to({regX:48.5,scaleX:0.21,scaleY:0.21,x:119.2,y:10.1,alpha:0},10,cjs.Ease.get(-1)).wait(1));

	// Символ 33
	this.instance_2 = new lib.Символ33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(142,11.3,0.19,0.19,0,0,0,47.9,27.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({regX:48,regY:27.7,scaleX:0.41,scaleY:0.41,x:102.5,y:-0.2,alpha:1},9,cjs.Ease.get(1)).wait(34).to({regX:48.1,regY:27.6,scaleX:0.56,scaleY:0.56,x:82.1,y:13.2,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(3));

	// Символ 33
	this.instance_3 = new lib.Символ33();
	this.instance_3.parent = this;
	this.instance_3.setTransform(144,9.8,0.26,0.26,0,0,0,48,27.9);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:27.8,scaleX:1,scaleY:1,x:48,y:27.8,alpha:1},9,cjs.Ease.get(1)).wait(35).to({scaleX:1.32,scaleY:1.32,x:27.5,y:56.9,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(131.5,2.6,25,14.5);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(-89.9,49.8,1,1,0,0,0,48,27.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.3,63.4,0.856,1,0,0,180,6.8,3.1);

	this.instance_2 = new lib.Символ31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(21.4,62.3,1,1,0,0,0,6.8,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Слой 1
	this.instance_3 = new lib.haed();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-6.4,0,96.4,138), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 20
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(40,5.2,1,1,0,0,0,5.2,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({regX:4.3,regY:2.8,x:39.1,y:2.8},0).to({rotation:540},5,cjs.Ease.get(-1)).to({rotation:360},5,cjs.Ease.get(1)).wait(15).to({x:34.7,y:-0.5},10,cjs.Ease.get(-1)).to({rotation:720,x:39.1,y:2.8},10,cjs.Ease.get(1)).wait(1));

	// Символ 20
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.2,5.2,1,1,0,0,0,5.2,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({regX:7.5,regY:3,x:7.5,y:3},0).to({rotation:540,x:7.4,y:2.9},5,cjs.Ease.get(-1)).to({rotation:360,x:7.5,y:3},5,cjs.Ease.get(1)).wait(15).to({x:13.9,y:0.4},10,cjs.Ease.get(-1)).to({rotation:720,x:7.5,y:3},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.2,10.4);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.boda();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.3,19,1,1,0,0,0,5.2,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(44.5,17.4,1,1,0,0,0,10.7,10.7);

	this.instance_3 = new lib.Символ17();
	this.instance_3.parent = this;
	this.instance_3.setTransform(14.2,17.4,1,1,0,0,0,10.7,10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,56,76), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(328.3,208.5,1,1,0,0,0,328.3,208.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,656.6,417), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(201.2,283,0.874,1,0,0,0,178.6,283);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(45.1,0,312,566), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 21
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(28.3,29.1,1,1,15.2,0,0,18.1,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:17.9,rotation:-27.2,x:14.4,y:21.2},9,cjs.Ease.get(1)).to({regX:18.1,rotation:15.2,x:28.3,y:29.1},5,cjs.Ease.get(-1)).wait(1));

	// Символ 16
	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(75.1,28.1,1,1,-13.7,0,0,18.5,21.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:20.9,rotation:21.5,x:86,y:18.7},9,cjs.Ease.get(1)).to({regY:21.1,rotation:-13.7,x:75.1,y:28.1},5,cjs.Ease.get(-1)).wait(1));

	// Символ 15
	this.instance_2 = new lib.Символ15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(52,79,1,1,0,0,0,28,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:58.5},9,cjs.Ease.get(1)).to({y:79},5,cjs.Ease.get(-1)).wait(1));

	// Символ 14
	this.instance_3 = new lib.Символ14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(40,123.2,1,1,-11.2,0,0,9.6,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:11.6,rotation:23.7,x:33.8,y:98.3},9,cjs.Ease.get(1)).to({regY:11.5,rotation:-11.2,x:40,y:123.2},5,cjs.Ease.get(-1)).wait(1));

	// Символ 13
	this.instance_4 = new lib.Символ13();
	this.instance_4.parent = this;
	this.instance_4.setTransform(60.7,124.9,1,1,9.2,0,0,9.6,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:9.5,regY:11.6,rotation:-24.2,x:67.4,y:99.2},9,cjs.Ease.get(1)).to({regX:9.6,regY:11.5,rotation:9.2,x:60.7,y:124.9},5,cjs.Ease.get(-1)).wait(1));

	// Символ 12
	this.instance_5 = new lib.Символ12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(81.7,91.8,1,1,48.4,0,0,13.1,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:13,rotation:0,x:90,y:63.5},9,cjs.Ease.get(1)).to({regX:13.1,rotation:48.4,x:81.7,y:91.8},5,cjs.Ease.get(-1)).wait(1));

	// Символ 11
	this.instance_6 = new lib.Символ11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(22.2,98.7,1,1,-54.2,0,0,13.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:0,x:13.5,y:65},9,cjs.Ease.get(1)).to({rotation:-54.2,x:22.2,y:98.7},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.3,3.2,92.8,134.6);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shisha.png
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(17.5,-105.8,0.852,0.852,-10,0,0,40.4,44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.7,x:16.6,y:-85.3},4,cjs.Ease.get(1)).to({regY:44,rotation:-45.7,x:-15.1,y:-248.9},10,cjs.Ease.get(1)).to({regY:44.1,rotation:-10,x:17.5,y:-105.8},8,cjs.Ease.get(-1)).wait(1));

	// romkl.png
	this.instance_1 = new lib.Символ36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-26,-11.9,1,1.016,0,-10.2,0,41,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:40.9,skewX:5.5,skewY:15.7,x:-50.7,y:-6.7},4,cjs.Ease.get(1)).to({regX:41.1,scaleY:1,rotation:-10.7,skewX:0,skewY:0,x:-23,y:-26.5},10,cjs.Ease.get(1)).to({regX:41,scaleY:1.02,rotation:0,skewX:-10.2,x:-26,y:-11.9},8,cjs.Ease.get(-1)).wait(1));

	// fing.png
	this.instance_2 = new lib.Символ38();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-19.4,-108.9,1.088,1,0,-14,9.2,13.5,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:13.4,skewX:1.7,skewY:24.9,x:-18.2,y:-98.3},4,cjs.Ease.get(1)).to({regX:13.5,regY:31,scaleX:1,rotation:2,skewX:0,skewY:0,x:-27.1,y:-121.3},10,cjs.Ease.get(1)).to({regY:30.9,scaleX:1.09,rotation:0,skewX:-14,skewY:9.2,x:-19.4,y:-108.9},8,cjs.Ease.get(-1)).wait(1));

	// lawkod.png
	this.instance_3 = new lib.Символ37();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-16.3,-67.7,1,1,13.2,0,0,90.4,94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:90.3,rotation:28.9,x:-26.3,y:-57.7},4,cjs.Ease.get(1)).to({regX:90.5,scaleX:0.85,scaleY:1.01,rotation:0,skewX:-17.8,skewY:-10.7,x:-22.7,y:-82.6},10,cjs.Ease.get(1)).to({regX:90.4,scaleX:1,scaleY:1,rotation:13.2,skewX:0,skewY:0,x:-16.3,y:-67.7},8,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.9,-180.3,219.4,225.4);


(lib.Символ15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (this.currentFrame = true){
		this.gotoAndPlay(Math.random() * 160);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(160));

	// Слой 1
	this.instance_4 = new lib.Символ14_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(5.5,5.5,1,1,0,0,0,5.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-108.5,y:1467.7},159).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.1,11.1);


(lib.Символ12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (this.currentFrame = true){
		this.gotoAndPlay(Math.random() * 30);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// Слой 1
	this.instance_1 = new lib.Символ13_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(83,83,1,1,0,0,0,83,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:1192.5,y:5062.7},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,166,166);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(252.6,16.9,1.229,1.229,0,0,0,162.9,24);
	this.instance.alpha = 0.461;

	this.instance_1 = new lib.Символ41();
	this.instance_1.parent = this;
	this.instance_1.setTransform(248.3,17.5,1.229,1.229,0,0,0,162.9,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ62, new cjs.Rectangle(0,-0.6,212.3,116.4), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(34.7,34,0.472,0.472,0,0,0,55,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-2.5,-2.5,75.4,73.1), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.pric = new lib.Символ42();
	this.pric.parent = this;
	this.pric.setTransform(35.2,34,0.691,0.691,0,0,0,0.8,0.1);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-2.5,-2.5,75.4,73.1), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(94.5,108,1,1,0,0,0,109.7,112.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:109.8,regY:112.6,rotation:6.3,x:104.7,y:119.5},10,cjs.Ease.get(-1)).to({regY:112.7,rotation:12,x:113.6,y:129.9},9,cjs.Ease.get(1)).to({rotation:5.8,x:104.2,y:119},10,cjs.Ease.get(-1)).to({regX:109.7,rotation:0,x:94.5,y:108},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,201.1,209.7);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 7
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(148.5,338.5,0.999,0.999,5.3,0,0,148.6,289.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:148.5,regY:289,scaleX:1,scaleY:1,rotation:0,y:332},26).wait(1).to({regX:148.6,rotation:8.4,x:148.6,y:342},38).to({regY:289.1,rotation:5.5,x:148.5,y:338.7},14).wait(1));

	// Символ 6
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(603.5,283,1,1,0,0,0,178.5,283);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:283.1,rotation:-5.9,x:603.6,y:303.2},38).to({regY:283,rotation:0,x:603.5,y:283},41).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.4,0,771.7,651.6);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_60 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_121 = function() {
		this.gotoAndPlay(61)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(61).call(this.frame_121).wait(1));

	// Символ 4
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(172.5,5,1,1,0,0,0,51.5,63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(61).to({rotation:25,x:213.6,y:-14.6},7,cjs.Ease.get(-1)).to({regX:51.6,regY:63.1,rotation:5.5,x:254.6,y:70.6},7,cjs.Ease.get(1)).to({scaleX:1.13,scaleY:1.13,rotation:1.3,x:262.8,y:16.9},7,cjs.Ease.get(-1)).to({regY:63,scaleX:1.27,scaleY:1.27,rotation:-3.3,x:229.1,y:142.7},8,cjs.Ease.get(1)).to({regX:51.8,scaleX:1.1,scaleY:1.1,rotation:-19.5,x:126.8,y:-86.6},8,cjs.Ease.get(-1)).to({regX:51.7,scaleX:0.95,scaleY:0.95,rotation:-3.3,x:36.7,y:-34.9},7,cjs.Ease.get(1)).to({regX:51.8,regY:62.9,scaleX:0.98,scaleY:0.98,rotation:24.9,x:99.3,y:-73.7},8,cjs.Ease.get(-1)).to({regX:51.5,regY:63,scaleX:1,scaleY:1,rotation:0,x:172.5,y:5},7,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Символ 25
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(45,69,1,1,0,0,0,45,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-2.3,x:42.2,y:71.2},16,cjs.Ease.get(-1)).to({rotation:-4.9,x:39.3,y:73.2},14,cjs.Ease.get(1)).to({rotation:-2.3,x:42.3,y:71},15,cjs.Ease.get(-1)).to({rotation:0,x:45,y:69},14,cjs.Ease.get(1)).wait(2).to({rotation:-2.3,x:42.2,y:71.2},16,cjs.Ease.get(-1)).to({rotation:-4.9,x:39.3,y:73.2},14,cjs.Ease.get(1)).to({rotation:-2.8,x:41.6,y:71.6},13,cjs.Ease.get(-1)).to({regX:44.9,rotation:-6.7,x:42,y:74.3},1).to({regX:45,rotation:-2.3,x:42.3,y:71},2).wait(1).to({rotation:0,x:45,y:69},12,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Символ 22
	this.instance_2 = new lib.Символ22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(64.5,152,1,1,0,0,0,48.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-4.3,x:63.2,y:148.5},16,cjs.Ease.get(-1)).to({rotation:-9,x:61.7,y:144.9},14,cjs.Ease.get(1)).to({regX:48.6,rotation:-4.3,x:63.3,y:148.6},15,cjs.Ease.get(-1)).to({regX:48.5,rotation:0,x:64.5,y:152},14,cjs.Ease.get(1)).wait(2).to({rotation:-4.3,x:63.2,y:148.5},16,cjs.Ease.get(-1)).to({rotation:-9,x:61.7,y:144.9},14,cjs.Ease.get(1)).to({regX:48.6,rotation:-4.3,x:63.3,y:148.6},15,cjs.Ease.get(-1)).to({regX:48.5,rotation:0,x:64.5,y:152},14,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Символ 23
	this.instance_3 = new lib.Символ23();
	this.instance_3.parent = this;
	this.instance_3.setTransform(130,144,1,1,0,0,0,74,82);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,skewY:-2,y:146.8},16,cjs.Ease.get(-1)).to({scaleX:1,skewY:-4.3,y:149.6},14,cjs.Ease.get(1)).to({scaleX:1,skewY:-2,y:146.7},15,cjs.Ease.get(-1)).to({scaleX:1,skewY:0,y:144},14,cjs.Ease.get(1)).wait(2).to({scaleX:1,skewY:-2,y:146.8},16,cjs.Ease.get(-1)).to({scaleX:1,skewY:-4.3,y:149.6},14,cjs.Ease.get(1)).to({scaleX:1,skewY:-2,y:146.7},15,cjs.Ease.get(-1)).to({scaleX:1,skewY:0,y:144},14,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Символ 26
	this.instance_4 = new lib.Символ26();
	this.instance_4.parent = this;
	this.instance_4.setTransform(36.5,148,1,1,0,0,0,18.5,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120).to({_off:true},1).wait(1));

	// Символ 27
	this.instance_5 = new lib.Символ27();
	this.instance_5.parent = this;
	this.instance_5.setTransform(163,80.1,1,0.837,0,0,0,45,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:1,y:76.5},3,cjs.Ease.get(-1)).wait(11).to({scaleY:0.85,y:79.8},1,cjs.Ease.get(1)).to({scaleY:1,y:76.5},3).wait(11).to({scaleY:0.81,y:80.6},1,cjs.Ease.get(-1)).to({scaleY:1,y:76.5},3).wait(11).to({scaleY:0.81,y:80.6},1,cjs.Ease.get(-1)).to({scaleY:1,y:76.5},3).wait(13).to({regY:21.6,scaleY:0.84,y:80.1},0).to({regY:21.5,scaleY:1,y:76.5},3).wait(56).to({scaleY:0.81,y:80.6},0).to({_off:true},1).wait(1));

	// Символ 28
	this.instance_6 = new lib.Символ28();
	this.instance_6.parent = this;
	this.instance_6.setTransform(198.5,145.5,1,1,0,0,0,151.5,57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120).to({_off:true},1).wait(1));

	// Символ 29
	this.instance_7 = new lib.Символ29();
	this.instance_7.parent = this;
	this.instance_7.setTransform(112,215.5,1,1,0,0,0,88,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:18.6,rotation:1.1,x:112.5,y:213.7},16,cjs.Ease.get(-1)).to({regY:18.5,rotation:2.5,x:112.9,y:211.8},14,cjs.Ease.get(1)).to({regY:18.6,rotation:1,x:112.4,y:213.8},15,cjs.Ease.get(-1)).to({regY:18.5,rotation:0,x:112,y:215.5},14,cjs.Ease.get(1)).wait(2).to({regY:18.6,rotation:1.1,x:112.5,y:213.7},16,cjs.Ease.get(-1)).to({regY:18.5,rotation:2.5,x:112.9,y:211.8},14,cjs.Ease.get(1)).to({regY:18.6,rotation:1,x:112.4,y:213.8},15,cjs.Ease.get(-1)).to({regY:18.5,rotation:0,x:112,y:215.5},14,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Символ 30
	this.instance_8 = new lib.Символ30();
	this.instance_8.parent = this;
	this.instance_8.setTransform(188.5,180.5,1,1,0,0,0,164.5,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120).to({_off:true},1).wait(1));

	// Символ 24
	this.instance_9 = new lib.Символ24();
	this.instance_9.parent = this;
	this.instance_9.setTransform(264,125.5,1,1,0,0,0,61,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:37.6,rotation:1.8,x:262.8,y:127.6},16,cjs.Ease.get(-1)).to({rotation:3.7,x:261.5,y:129.5},14,cjs.Ease.get(1)).to({rotation:1.8,x:262.8,y:127.4},15,cjs.Ease.get(-1)).to({regY:37.5,rotation:0,x:264,y:125.5},14,cjs.Ease.get(1)).wait(2).to({regY:37.6,rotation:1.8,x:262.8,y:127.4},13,cjs.Ease.get(-1)).to({regX:61.1,rotation:4,x:261.3,y:129.7},1,cjs.Ease.get(1)).to({regX:61,rotation:1.8,x:262.8,y:127.4},4,cjs.Ease.get(1)).to({rotation:1.8},1,cjs.Ease.get(1)).to({rotation:3.7,x:261.5,y:129.5},11,cjs.Ease.get(1)).to({rotation:1.8,x:262.8,y:127.4},15,cjs.Ease.get(-1)).to({regY:37.5,rotation:0,x:264,y:125.5},14,cjs.Ease.get(1)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-54.8,359.4,288.8);


(lib.Символ18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12_1();
	this.instance.parent = this;
	this.instance.setTransform(723.1,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_1 = new lib.Символ12_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(676.1,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_2 = new lib.Символ12_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(628,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_3 = new lib.Символ12_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(581,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_4 = new lib.Символ12_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(533,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_5 = new lib.Символ12_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(486,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_6 = new lib.Символ12_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(438,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_7 = new lib.Символ12_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(391,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_8 = new lib.Символ12_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(345,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_9 = new lib.Символ12_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(298,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_10 = new lib.Символ12_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(250,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_11 = new lib.Символ12_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(203,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_12 = new lib.Символ12_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(155,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_13 = new lib.Символ12_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(108,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_14 = new lib.Символ12_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(59.9,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_15 = new lib.Символ12_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(12.9,12.9,0.156,0.156,0,0,0,83,83);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18_1, new cjs.Rectangle(0,0,736,25.8), null);


(lib.Символ17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12_1();
	this.instance.parent = this;
	this.instance.setTransform(628.5,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_1 = new lib.Символ12_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(608.3,5.6,0.067,0.067,0,0,0,82.7,83.4);

	this.instance_2 = new lib.Символ12_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(587.8,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_3 = new lib.Символ12_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(567.7,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_4 = new lib.Символ12_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(547.2,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_5 = new lib.Символ12_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(527,5.6,0.067,0.067,0,0,0,82.7,83.4);

	this.instance_6 = new lib.Символ12_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(506.5,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_7 = new lib.Символ12_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(486.4,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_8 = new lib.Символ12_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(466.7,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_9 = new lib.Символ12_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(446.6,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_10 = new lib.Символ12_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(426.1,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_11 = new lib.Символ12_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(406,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_12 = new lib.Символ12_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(385.4,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_13 = new lib.Символ12_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(365.3,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_14 = new lib.Символ12_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(344.8,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_15 = new lib.Символ12_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(324.6,5.6,0.067,0.067,0,0,0,82.7,83.4);

	this.instance_16 = new lib.Символ12_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(309.4,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_17 = new lib.Символ12_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(289.2,5.6,0.067,0.067,0,0,0,82.7,83.4);

	this.instance_18 = new lib.Символ12_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(268.7,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_19 = new lib.Символ12_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(248.6,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_20 = new lib.Символ12_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(228.1,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_21 = new lib.Символ12_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(207.9,5.6,0.067,0.067,0,0,0,82.7,83.4);

	this.instance_22 = new lib.Символ12_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(187.4,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_23 = new lib.Символ12_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(167.3,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_24 = new lib.Символ12_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(147.6,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_25 = new lib.Символ12_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(127.5,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_26 = new lib.Символ12_1();
	this.instance_26.parent = this;
	this.instance_26.setTransform(107,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_27 = new lib.Символ12_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(86.9,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_28 = new lib.Символ12_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(66.3,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_29 = new lib.Символ12_1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(46.2,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_30 = new lib.Символ12_1();
	this.instance_30.parent = this;
	this.instance_30.setTransform(25.7,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_31 = new lib.Символ12_1();
	this.instance_31.parent = this;
	this.instance_31.setTransform(5.5,5.6,0.067,0.067,0,0,0,82.7,83.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17_1, new cjs.Rectangle(0,0,634,11.1), null);


(lib.Символ16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ15_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(679.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_2 = new lib.Символ15_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(672.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_3 = new lib.Символ15_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(662.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_4 = new lib.Символ15_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(655,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_5 = new lib.Символ15_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(648.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_6 = new lib.Символ15_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(640.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_7 = new lib.Символ15_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(631.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_8 = new lib.Символ15_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(623.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_9 = new lib.Символ15_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(618.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_10 = new lib.Символ15_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(610.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_11 = new lib.Символ15_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(600.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_12 = new lib.Символ15_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(593.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_13 = new lib.Символ15_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(586.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_14 = new lib.Символ15_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(579,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_15 = new lib.Символ15_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(569.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_16 = new lib.Символ15_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(561.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_17 = new lib.Символ15_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(556.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_18 = new lib.Символ15_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(548.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_19 = new lib.Символ15_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(538.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_20 = new lib.Символ15_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(531.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_21 = new lib.Символ15_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(524.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_22 = new lib.Символ15_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(517,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_23 = new lib.Символ15_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(507.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_24 = new lib.Символ15_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(499.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_25 = new lib.Символ15_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(494.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_26 = new lib.Символ15_1();
	this.instance_26.parent = this;
	this.instance_26.setTransform(486.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_27 = new lib.Символ15_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(477,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_28 = new lib.Символ15_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(469.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_29 = new lib.Символ15_1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(462.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_30 = new lib.Символ15_1();
	this.instance_30.parent = this;
	this.instance_30.setTransform(455.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_31 = new lib.Символ15_1();
	this.instance_31.parent = this;
	this.instance_31.setTransform(445.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_32 = new lib.Символ15_1();
	this.instance_32.parent = this;
	this.instance_32.setTransform(437.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_33 = new lib.Символ15_1();
	this.instance_33.parent = this;
	this.instance_33.setTransform(432.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_34 = new lib.Символ15_1();
	this.instance_34.parent = this;
	this.instance_34.setTransform(424.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_35 = new lib.Символ15_1();
	this.instance_35.parent = this;
	this.instance_35.setTransform(415,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_36 = new lib.Символ15_1();
	this.instance_36.parent = this;
	this.instance_36.setTransform(407.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_37 = new lib.Символ15_1();
	this.instance_37.parent = this;
	this.instance_37.setTransform(400.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_38 = new lib.Символ15_1();
	this.instance_38.parent = this;
	this.instance_38.setTransform(393.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_39 = new lib.Символ15_1();
	this.instance_39.parent = this;
	this.instance_39.setTransform(383.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_40 = new lib.Символ15_1();
	this.instance_40.parent = this;
	this.instance_40.setTransform(375.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_41 = new lib.Символ15_1();
	this.instance_41.parent = this;
	this.instance_41.setTransform(370.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_42 = new lib.Символ15_1();
	this.instance_42.parent = this;
	this.instance_42.setTransform(362.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_43 = new lib.Символ15_1();
	this.instance_43.parent = this;
	this.instance_43.setTransform(353.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_44 = new lib.Символ15_1();
	this.instance_44.parent = this;
	this.instance_44.setTransform(345.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_45 = new lib.Символ15_1();
	this.instance_45.parent = this;
	this.instance_45.setTransform(338.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_46 = new lib.Символ15_1();
	this.instance_46.parent = this;
	this.instance_46.setTransform(331.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_47 = new lib.Символ15_1();
	this.instance_47.parent = this;
	this.instance_47.setTransform(321.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_48 = new lib.Символ15_1();
	this.instance_48.parent = this;
	this.instance_48.setTransform(314.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_49 = new lib.Символ15_1();
	this.instance_49.parent = this;
	this.instance_49.setTransform(308.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_50 = new lib.Символ15_1();
	this.instance_50.parent = this;
	this.instance_50.setTransform(300.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_51 = new lib.Символ15_1();
	this.instance_51.parent = this;
	this.instance_51.setTransform(291.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_52 = new lib.Символ15_1();
	this.instance_52.parent = this;
	this.instance_52.setTransform(283.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_53 = new lib.Символ15_1();
	this.instance_53.parent = this;
	this.instance_53.setTransform(276.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_54 = new lib.Символ15_1();
	this.instance_54.parent = this;
	this.instance_54.setTransform(269.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_55 = new lib.Символ15_1();
	this.instance_55.parent = this;
	this.instance_55.setTransform(259.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_56 = new lib.Символ15_1();
	this.instance_56.parent = this;
	this.instance_56.setTransform(252.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_57 = new lib.Символ15_1();
	this.instance_57.parent = this;
	this.instance_57.setTransform(243.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_58 = new lib.Символ15_1();
	this.instance_58.parent = this;
	this.instance_58.setTransform(235.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_59 = new lib.Символ15_1();
	this.instance_59.parent = this;
	this.instance_59.setTransform(226.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_60 = new lib.Символ15_1();
	this.instance_60.parent = this;
	this.instance_60.setTransform(218.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_61 = new lib.Символ15_1();
	this.instance_61.parent = this;
	this.instance_61.setTransform(212,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_62 = new lib.Символ15_1();
	this.instance_62.parent = this;
	this.instance_62.setTransform(204.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_63 = new lib.Символ15_1();
	this.instance_63.parent = this;
	this.instance_63.setTransform(194.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_64 = new lib.Символ15_1();
	this.instance_64.parent = this;
	this.instance_64.setTransform(187.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_65 = new lib.Символ15_1();
	this.instance_65.parent = this;
	this.instance_65.setTransform(181.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_66 = new lib.Символ15_1();
	this.instance_66.parent = this;
	this.instance_66.setTransform(173.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_67 = new lib.Символ15_1();
	this.instance_67.parent = this;
	this.instance_67.setTransform(164.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_68 = new lib.Символ15_1();
	this.instance_68.parent = this;
	this.instance_68.setTransform(156.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_69 = new lib.Символ15_1();
	this.instance_69.parent = this;
	this.instance_69.setTransform(150,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_70 = new lib.Символ15_1();
	this.instance_70.parent = this;
	this.instance_70.setTransform(142.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_71 = new lib.Символ15_1();
	this.instance_71.parent = this;
	this.instance_71.setTransform(132.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_72 = new lib.Символ15_1();
	this.instance_72.parent = this;
	this.instance_72.setTransform(125.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_73 = new lib.Символ15_1();
	this.instance_73.parent = this;
	this.instance_73.setTransform(119.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_74 = new lib.Символ15_1();
	this.instance_74.parent = this;
	this.instance_74.setTransform(112.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_75 = new lib.Символ15_1();
	this.instance_75.parent = this;
	this.instance_75.setTransform(102.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_76 = new lib.Символ15_1();
	this.instance_76.parent = this;
	this.instance_76.setTransform(95,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_77 = new lib.Символ15_1();
	this.instance_77.parent = this;
	this.instance_77.setTransform(88.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_78 = new lib.Символ15_1();
	this.instance_78.parent = this;
	this.instance_78.setTransform(80.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_79 = new lib.Символ15_1();
	this.instance_79.parent = this;
	this.instance_79.setTransform(71.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_80 = new lib.Символ15_1();
	this.instance_80.parent = this;
	this.instance_80.setTransform(63.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_81 = new lib.Символ15_1();
	this.instance_81.parent = this;
	this.instance_81.setTransform(57.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_82 = new lib.Символ15_1();
	this.instance_82.parent = this;
	this.instance_82.setTransform(50.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_83 = new lib.Символ15_1();
	this.instance_83.parent = this;
	this.instance_83.setTransform(40.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_84 = new lib.Символ15_1();
	this.instance_84.parent = this;
	this.instance_84.setTransform(33,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_85 = new lib.Символ15_1();
	this.instance_85.parent = this;
	this.instance_85.setTransform(26.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_86 = new lib.Символ15_1();
	this.instance_86.parent = this;
	this.instance_86.setTransform(18.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_87 = new lib.Символ15_1();
	this.instance_87.parent = this;
	this.instance_87.setTransform(9.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_88 = new lib.Символ15_1();
	this.instance_88.parent = this;
	this.instance_88.setTransform(1.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16_1, new cjs.Rectangle(0,0,681.3,2.9), null);


(lib.Символ11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ18_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(908.1,43,1,1,0,0,0,367.9,12.9);

	this.instance_2 = new lib.Символ17_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(857.1,13.4,1,1,0,0,0,316.9,5.5);

	this.instance_3 = new lib.Символ16_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(894.9,1.4,1,1,0,0,0,340.6,1.4);

	this.instance_4 = new lib.Символ15_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1576.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_5 = new lib.Символ15_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1569.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_6 = new lib.Символ15_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1559.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11_1, new cjs.Rectangle(540.2,0,1038,55.9), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(35.2,34,1,1,0,0,0,35.2,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-2.5,-2.5,75.4,73.1), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.pric = new lib.Символ47();
	this.pric.parent = this;
	this.pric.setTransform(48.3,19.9,1,1,0,0,0,35.2,34);

	this.timeline.addTween(cjs.Tween.get(this.pric).to({x:-47,y:48.7},9,cjs.Ease.get(-1)).to({x:-152.9,y:80.8},10,cjs.Ease.get(1)).to({x:-246.8,y:19.8},11,cjs.Ease.get(-1)).to({x:-323.7,y:-30.2},9,cjs.Ease.get(1)).to({x:-400.9,y:28.6},10,cjs.Ease.get(-1)).to({x:-478.1,y:87.3},10,cjs.Ease.get(1)).to({x:-400.9,y:28.6},10,cjs.Ease.get(-1)).to({x:-323.7,y:-30.2},10,cjs.Ease.get(1)).to({x:-246.8,y:19.8},9,cjs.Ease.get(-1)).to({x:-152.9,y:80.8},11,cjs.Ease.get(1)).to({x:-47,y:48.7},10,cjs.Ease.get(-1)).to({x:48.3,y:19.9},9,cjs.Ease.get(1)).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.5,-16.6,75.4,73.1);


// stage content:
(lib.regina640305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		
		
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.rabbit.gotoAndPlay(62);
		
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{   
			this.rabbit.gotoAndPlay(0);
		
		}
		
		
		
		this.shish2.alpha=0;
		this.pric2.alpha=0;
		
		this.cursor = "none";
		this.pric2.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pric2.x = stage.mouseX/window.devicePixelRatio;
			this.pric2.y = stage.mouseY/window.devicePixelRatio;
			this.shish2.x = stage.mouseX/window.devicePixelRatio;
		}
		
		stage.canvas.addEventListener("mouseover", fl_Clickover3.bind(this));
		
		function fl_Clickover3()
		{
		
		
			this.shish.alpha=0;
			this.shish2.alpha=1;
			this.pric.alpha=0;
			this.pric2.alpha=1;
			
		
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout3.bind(this));
		
		function fl_Clickout3()
		{
		
		
			this.shish.alpha=1;
			this.shish2.alpha=0;
			this.pric.alpha=1;
			this.pric2.alpha=0;
		
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 8
	this.pric = new lib.Символ50();
	this.pric.parent = this;
	this.pric.setTransform(577.7,128.9,1,1,0,0,0,35.2,34);

	this.pric2 = new lib.Символ48();
	this.pric2.parent = this;
	this.pric2.setTransform(795.1,44.6,1,1,0,0,0,35.2,34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pric2},{t:this.pric}]}).wait(1));

	// Слой 7
	this.shish2 = new lib.Символ40();
	this.shish2.parent = this;
	this.shish2.setTransform(506.5,256.4,0.889,0.889,0,0,0,100.5,104.9);

	this.shish = new lib.Символ1();
	this.shish.parent = this;
	this.shish.setTransform(609.6,418,0.889,0.889,0,0,0,90.5,112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shish},{t:this.shish2}]}).wait(1));

	// Символ 5
	this.rabbit = new lib.Символ5();
	this.rabbit.parent = this;
	this.rabbit.setTransform(443,188,1,1,0,0,0,276,117);

	this.timeline.addTween(cjs.Tween.get(this.rabbit).wait(1));

	// Символ 1
	this.instance = new lib.Символ62();
	this.instance.parent = this;
	this.instance.setTransform(540,72.1,1,1,0,0,0,124.1,58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// elka.png
	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(325,115.5,1,1,0,0,0,391,310.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// elkaka.png
	this.instance_2 = new lib.Символ11_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-457.2,14.1,1,1,0,0,0,83,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 3
	this.instance_3 = new lib.Символ8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(326.3,102.5,1,1,0,0,0,328.3,208.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(264.4,-42.5,1093.7,651.6);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 26,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/arma.png?1482930257257", id:"arma"},
		{src:"images/armikol.png?1482930257257", id:"armikol"},
		{src:"images/aska.png?1482930257257", id:"aska"},
		{src:"images/assy.png?1482930257257", id:"assy"},
		{src:"images/back.jpg?1482930257257", id:"back"},
		{src:"images/boda.png?1482930257257", id:"boda"},
		{src:"images/corner.png?1482930257257", id:"corner"},
		{src:"images/elka.png?1482930257257", id:"elka"},
		{src:"images/elkaka.png?1482930257257", id:"elkaka"},
		{src:"images/fing.png?1482930257257", id:"fing"},
		{src:"images/foot.png?1482930257257", id:"foot"},
		{src:"images/haed.png?1482930257257", id:"haed"},
		{src:"images/her.png?1482930257257", id:"her"},
		{src:"images/herik.png?1482930257257", id:"herik"},
		{src:"images/lawkod.png?1482930257257", id:"lawkod"},
		{src:"images/leg.png?1482930257257", id:"leg"},
		{src:"images/leggy.png?1482930257257", id:"leggy"},
		{src:"images/rabarm.png?1482930257257", id:"rabarm"},
		{src:"images/rabarman.png?1482930257257", id:"rabarman"},
		{src:"images/romkl.png?1482930257257", id:"romkl"},
		{src:"images/rou.png?1482930257257", id:"rou"},
		{src:"images/shadow.png?1482930257257", id:"shadow"},
		{src:"images/shisha.png?1482930257257", id:"shisha"},
		{src:"images/volossa.png?1482930257257", id:"volossa"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;