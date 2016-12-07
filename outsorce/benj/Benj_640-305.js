(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,780,346);


(lib.benj = function() {
	this.initialize(img.benj);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,315);


(lib.blacklight = function() {
	this.initialize(img.blacklight);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,46);


(lib.corn = function() {
	this.initialize(img.corn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,99);


(lib.fing = function() {
	this.initialize(img.fing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,44);


(lib.hand2 = function() {
	this.initialize(img.hand2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,363,294);


(lib.hundred = function() {
	this.initialize(img.hundred);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,76);


(lib.round = function() {
	this.initialize(img.round);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,370);


(lib.shad = function() {
	this.initialize(img.shad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,79);


(lib.thick = function() {
	this.initialize(img.thick);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,53);


(lib.thin = function() {
	this.initialize(img.thin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,58);// helper functions:

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


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.77,0.738);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(0,0,600.7,255.2), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEsChQgKAAgDgEQgCgDABgJIACgKQgQgCgLgFQgLgEgJgHQgJgGgEgJQgGgJgCgLQgCgIAEgFQAEgGAIgCIAygRQAJgEAFACQAFABAEAIQADAIAHAEQAIADAOAAQASAAAHgCQAHgDACgIQABgGgHgEQgHgDgPgDIgngIQgQgEgJgFQgMgGgHgIQgIgHgFgJQgDgKgBgMQgBgMACgOQADgQAHgNQAHgMALgJQALgJAPgGQAPgGAUgEIACgLQABgJAFgEQADgDAKAAIA1AAQAJAAACADQADAEgCAJIgCALQAMACAKAEQAJAEAGAGQAHAGAGAIIAIASQADAIgDAFQgEAEgKAEIgxAVQgJADgEgBQgDgCgEgIQgDgKgGgEQgFgDgOAAQgNAAgIADQgHAEgBAGQgCAHAJAEQAGADAUADQAZAEARAGQARAFAMAIQAIAGAFAHQAGAHADAJQADAKAAALQAAALgCAMQgCARgIAMQgHANgLAJQgMAJgPAGQgQAGgUAEIgCALQgDAJgEAEQgEADgIAAgAAXCOQgKgEgJgGQgHgGgHgIQgGgIgFgJQgEgJgDgKQgDgOADggIAPhQQACgQANgcQAHgNAWgUQARgNAYgHQAPgFAkgCQATAAAeAIQAKAEAIAGQAIAFAHAIQAGAIAFAJQAEAJACAKQAEAegEARIgNBPQgJAggIANQgLATgQAOQgSANgYAHQggAHgSAAQgkgDgOgFgABZg9QgIAGgCALIgPBaQgCALAFAGQAGAGAMAAQAMAAAIgGQAHgGACgLIARhaQACgLgGgGQgFgGgMAAQgNAAgIAGgAjwCOQgKgEgJgGQgIgGgHgIQgHgIgEgJQgFgJgCgKQgDgOADggIAOhQQADgQANgcQAIgNAVgUQARgNAYgHQAPgFAlgCQASAAAeAIQALAEAHAGQAJAFAHAIQAGAIAEAJQAFAJACAKQADAegDARIgOBPQgIAggIANQgLATgRAOQgRANgYAHQghAHgSAAQgjgDgOgFgAivg9QgHAGgCALIgQBaQgCALAGAGQAFAGANAAQAMAAAIgGQAHgGACgLIARhaQABgLgGgGQgFgGgMAAQgMAAgJAGgAmsCQQgKAAgDgEQgDgEACgKIAaiTIgRAJQgMAFgFgBQgFgCgEgJIgQgrQgEgJAEgFQACgFAKgFIBdgxQAOgHAMAAIAZAAQAKAAAEAEQACAEgBAKIgsD6QgCAKgFAEQgFAEgKAAg");
	this.shape.setTransform(197.2,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AIPCMQgQgGgKgNQgJgMgDgSQgDgRAEgWIAShpQACgIAEgEQAEgDAJAAIA5AAQAJAAADADQADAEgCAIIgTBpQgBAIACAEQADADAIAAIAHAAQABgBAAAAQABAAAAAAQAAgBABAAQAAgBAAgBIAUh0QACgIAEgEQAEgDAJAAIA5AAQAJAAADADQADAEgCAIIgcCfQgCALgEAFQgFAFgLAEQgVAIgXADQgXAEgYABQgYAAgRgHgAArCPQgUgEgSgHQgIgFgDgEQgCgFABgKIAcihQABgIAEgEQAFgDAJAAIA2AAQAKAAACADQADAEgBAIIgHAlIAXgBQAPAAAMAEQANADAMAJQAMAHAFASQADAJAAAKIgCAXQgDASgJAPQgJAQgNAKQgOALgTAFQgTAGgXAAQgXAAgTgEgABYAxIgEAWIABACIAIACQAHAAAFgEQAEgEABgGQACgNgPAAgAigCOQgRgDgNgHQgMgIgIgKQgJgLgDgOQgCgJADgGQAEgGAKgCIAlgLQALgCAEABQACACACAHQACAIAFAEQAGAGASAAQALAAAFgCQAEgCABgFQACgJgOAAIgTAAQgIAAgCgCQgDgDACgIIAFgfQACgNAOABIAUAAQANAAABgJQACgIgQAAQgMAAgKADQgIADgDACIgGAIQgFAJgDABQgEABgIgCIghgLQgQgFAJgSQAHgNALgLQAKgKAOgIQAOgGAQgEQARgDAUAAQAWAAARAEQAQAFALAIQALAJAEAMQAFAMgDAPQgCANgIALQgIAKgNAGIAAACQANAHAFAMQAFANgDARQgDARgHAKQgHANgMAIQgMAIgSAEQgTAEgZABQgVgBgSgEgAmECMQgSgHgLgMQgLgMgDgTQgEgRADgWIAHgmQAEgUAJgSQAKgPAPgMQAPgLAUgGQAVgFAZAAQAZAAATAGQARAHAMAMQALANAEAQQADASgDAVIgHAnQgEAVgJARQgKAQgPALQgPAMgVAGQgUAFgaABQgYAAgTgHgAlLADQgEADgCAHIgIAuQgBAGADADQAEAEAHgBQAIABAFgEQAEgDABgGIAIguQADgNgQAAQgIAAgEADgAF+CNQgIAAgEgFQgDgEABgIIAHgjIAYg7IgDAAQgMAagGAIIgRAaQgFAHgFADQgEADgJAAIgWAAQgIAAgEgDQgEgDgCgHIgIgaIgFgiIgEAAIAEA0QAAAKgEASIgCAOQgCAIgFAEQgEAFgJAAIgtAAQgKAAgCgDQgDgEACgKIAfivQACgKAEgEQAEgDALAAIAtAAQAKAAAEADQAEACADAIIAXBIIAyhIQAFgIAFgCQAFgDAKAAIAvAAQAKAAADADQADAEgCAKIgfCvQgCAKgEADQgEADgJABgAq2CNQgKAAgDgFQgDgDABgKIAtj7QABgJAFgFQAFgEAKAAIB7AAQAVABARAFQAQAGAKAJQAKALAEAOQAEAPgDATQgEAUgJAMQgJANgTALIAAACQAJAEAGAHQAHAGAEAKQADAKABALQABALgCANQgEASgJAPQgKAPgPAJQgOAKgUAEQgTAGgXAAgApdBFIAgAAQALgBAGgEQAHgFABgJQACgKgFgEQgEgFgLABIghAAgApKgoIAYAAQAKAAAGgEQAGgFACgIQABgJgEgEQgEgEgLAAIgYAAg");
	this.shape_1.setTransform(71,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("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");
	this.shape_2.setTransform(123.3,13.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Слой 2
	this.instance = new lib.blacklight();
	this.instance.parent = this;
	this.instance.setTransform(-28,-7,0.561,1.115);

	this.instance_1 = new lib.blacklight();
	this.instance_1.parent = this;
	this.instance_1.setTransform(188,-7,0.561,1.115);

	this.instance_2 = new lib.blacklight();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-98,-2,2.981,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-98,-7,432.3,51.3), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blacklight();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(0,0,145,46), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("ABqCAQgFgGgYgSIg2g2IgQgQIhiBZQgVASgNACQgLABgJgHQgKgIAKgFQAJgFAlgrQAkgqAkgkIgXgcIgYgfQgOgSgLgLIgSgUQgJgNABgMQACgNAFADIAOAJQAKAGAMAJQALAJASATQAQATAuAnQAxgsAegeQAegfAIgEQAIgEAHAPQAHAPgGAGIgQARQgLANAFgGIhLBYQBABAAbAoQAMARADAOIgGALQgigMgFgGg");
	this.shape.setTransform(15.1,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,0,30.2,29.3), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,0,363,294), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fing();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(0,0,163,44), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hundred();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,78,76), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#64614C").s().p("ABsAaQgigzg6gOQg6gNgxBAQgzBCAAgnQAAgnAqgbQAqgcA6AAQA7AAAqAcQAqAbAAAnQAAARgHAAQgIAAgUgeg");
	this.shape.setTransform(14.3,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#64614C").s().p("AiSAfQAHgpAqgcQAqgbA6AAQA7AAAqAbQApAcACAqQACArgcgOQgcgOhFAFQhEAEg3AJIgQABQglAAAGgjg");
	this.shape_1.setTransform(14,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#64614C").s().p("AhpBQQg7gxAOgrQAPgtAqgcQAqgbA6AAQA7AAAqAbQApAcAEAvQAEAugWAXQgWAYhQAXQgaAHgWAAQgyAAgoghg");
	this.shape_2.setTransform(13.6,7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.7,28.5,11.1);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.round();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,370,370), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.benj();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,384,315), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.thin();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,22,58), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.thick();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,81,53), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.corn();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,46,99), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shad();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,40,79), null);


(lib.Символ33_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AubVAMAAAgp/Ic3AAMAAAAp/g");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33_1, new cjs.Rectangle(-92.4,-134.4,184.8,268.8), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(301.3,121.6,1,1,0,0,0,300.3,127.6);
	this.instance.alpha = 0.262;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5EEDB").s().p("EgvVAShMAAAglBMBerAAAMAAAAlBg");
	this.shape.setTransform(303,118.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(0,-6,606,255.2), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("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");
	this.shape.setTransform(216.7,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(216.3,22);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 2
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(339,18.3,0.875,0.872,0,0,0,72.2,22.9);

	this.instance_1 = new lib.Символ36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(388.8,18.3,0.875,0.872,0,0,0,72.2,22.9);

	this.instance_2 = new lib.Символ36();
	this.instance_2.parent = this;
	this.instance_2.setTransform(425.5,16.8,0.372,1.066,0,0,0,72.2,22.9);

	this.instance_3 = new lib.Символ36();
	this.instance_3.parent = this;
	this.instance_3.setTransform(54.2,18.3,0.875,0.872,0,0,0,72.2,22.9);

	this.instance_4 = new lib.Символ36();
	this.instance_4.parent = this;
	this.instance_4.setTransform(12.8,18,0.499,1.079,0,0,0,72.3,22.9);

	this.instance_5 = new lib.Символ36();
	this.instance_5.parent = this;
	this.instance_5.setTransform(218.7,19.9,4.779,1,0,0,0,72.4,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-127.4,-7.6,693,50.6), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(15.1,14.7,1,1,0,0,0,15.1,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.87,scaleY:0.87,x:15.2},2,cjs.Ease.get(-1)).to({scaleX:0.74,scaleY:0.74},2,cjs.Ease.get(1)).to({scaleX:0.85,scaleY:0.85},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:15.1},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.2,29.3);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(15.1,14.7,1,1,0,0,0,15.1,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,0,30.2,29.3), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(39,38,1,1,0,0,0,39,38);
	this.instance.alpha = 0.441;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39,38,1,1,0,0,0,39,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78,76);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(20,39.5,1,1,0,0,0,20,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,40,79), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(99.1,99.2,0.535,0.535,0,0,0,185.1,185.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,198.1,198.1), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (this.currentFrame = true){
		this.gotoAndPlay(Math.random() * 40);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(99,99,1,1,0,0,0,99,99);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.51,x:99.1},10,cjs.Ease.get(-1)).to({scaleX:0.06},9,cjs.Ease.get(1)).to({regX:99.2,scaleX:0.53,x:99.2},10,cjs.Ease.get(-1)).to({regX:99,scaleX:1,x:99},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198.1,198.1);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 4
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(65.9,401.6,0.986,0.752,180,0,0,40.5,26.6);

	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(143.6,401.5,0.974,0.752,0,180,0,40.4,26.7);

	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(223,401.6,0.986,0.752,180,0,0,40.6,26.6);

	this.instance_3 = new lib.Символ4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(302.9,401.5,0.974,0.752,0,180,0,40.4,26.7);

	this.instance_4 = new lib.Символ4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(382.2,401.6,0.986,0.752,180,0,0,40.6,26.6);

	this.instance_5 = new lib.Символ4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(460.1,401.5,0.974,0.752,0,180,0,40.4,26.7);

	this.instance_6 = new lib.Символ4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(539.5,401.6,0.986,0.752,180,0,0,40.5,26.6);

	this.instance_7 = new lib.Символ4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(549.8,142.6,0.986,0.752,0,0,0,40.5,26.6);

	this.instance_8 = new lib.Символ4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(472,142.7,0.974,0.752,0,0,180,40.4,26.7);

	this.instance_9 = new lib.Символ4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(392.6,142.6,0.986,0.752,0,0,0,40.6,26.6);

	this.instance_10 = new lib.Символ4();
	this.instance_10.parent = this;
	this.instance_10.setTransform(312.8,142.7,0.974,0.752,0,0,180,40.4,26.7);

	this.instance_11 = new lib.Символ4();
	this.instance_11.parent = this;
	this.instance_11.setTransform(233.4,142.6,0.986,0.752,0,0,0,40.6,26.6);

	this.instance_12 = new lib.Символ4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(155.6,142.7,0.974,0.752,0,0,180,40.4,26.7);

	this.instance_13 = new lib.Символ4();
	this.instance_13.parent = this;
	this.instance_13.setTransform(76.1,142.6,0.986,0.752,0,0,0,40.5,26.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Символ 3
	this.instance_14 = new lib.Символ3();
	this.instance_14.parent = this;
	this.instance_14.setTransform(10,385,0.793,0.752,0,180,-1.2,22.9,49.6);

	this.instance_15 = new lib.Символ3();
	this.instance_15.parent = this;
	this.instance_15.setTransform(601.2,384.7,0.986,0.752,180,0,0,22.9,49.6);

	this.instance_16 = new lib.Символ3();
	this.instance_16.parent = this;
	this.instance_16.setTransform(605.7,159.2,0.793,0.752,0,0,178.8,22.9,49.6);

	this.instance_17 = new lib.Символ3();
	this.instance_17.parent = this;
	this.instance_17.setTransform(14.5,159.5,0.986,0.752,0,0,0,22.9,49.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	// Символ 5
	this.instance_18 = new lib.Символ5();
	this.instance_18.parent = this;
	this.instance_18.setTransform(612.8,359.9,1,1,180,0,0,11,29);

	this.instance_19 = new lib.Символ5();
	this.instance_19.parent = this;
	this.instance_19.setTransform(612.8,306,1,1,180,0,0,11,29);

	this.instance_20 = new lib.Символ5();
	this.instance_20.parent = this;
	this.instance_20.setTransform(612.8,254,1,1,180,0,0,11,29);

	this.instance_21 = new lib.Символ5();
	this.instance_21.parent = this;
	this.instance_21.setTransform(612.8,200.1,1,1,180,0,0,11,29);

	this.instance_22 = new lib.Символ5();
	this.instance_22.parent = this;
	this.instance_22.setTransform(2.8,364,1,1,0,0,0,11,29);

	this.instance_23 = new lib.Символ5();
	this.instance_23.parent = this;
	this.instance_23.setTransform(2.8,306,1,1,0,0,0,11,29);

	this.instance_24 = new lib.Символ5();
	this.instance_24.parent = this;
	this.instance_24.setTransform(2.8,257,1,1,0,0,0,11,29);

	this.instance_25 = new lib.Символ5();
	this.instance_25.parent = this;
	this.instance_25.setTransform(2.8,199,1,1,0,0,0,11,29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18}]}).wait(1));

	// Слой 5
	this.instance_26 = new lib.Символ14();
	this.instance_26.parent = this;
	this.instance_26.setTransform(484.6,264.2,0.773,0.773,0,0,0,99.1,99);
	this.instance_26.alpha = 0.301;

	this.instance_27 = new lib.Символ14();
	this.instance_27.parent = this;
	this.instance_27.setTransform(118.4,264.2,0.773,0.773,0,0,0,99.1,99);
	this.instance_27.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27},{t:this.instance_26}]}).wait(1));

	// Слой 1
	this.instance_28 = new lib.Символ38();
	this.instance_28.parent = this;
	this.instance_28.setTransform(308,266.6,1,1,0,0,0,303,118.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("EgvVgSgMBerAAAMAAAAlBMherAAAg");
	this.shape.setTransform(308,266.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_28}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-8.2,121.5,632,301.2), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 29
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(88.2,21.8,1,1,0,0,0,81.4,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:81.5,regY:21.9,rotation:-7.5,x:90.7,y:29.1},8,cjs.Ease.get(-1)).to({regX:81.4,rotation:-13.2,x:92.4,y:34.4},6,cjs.Ease.get(1)).to({regX:81.5,rotation:-7,x:90.6,y:28.6},7,cjs.Ease.get(-1)).to({regX:81.4,regY:21.8,rotation:0,x:88.2,y:21.8},8,cjs.Ease.get(1)).wait(1));

	// Символ 30
	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(181.5,147,1,1,0,0,0,181.5,147);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:1.8,x:181.6},8,cjs.Ease.get(-1)).to({rotation:3.2},6,cjs.Ease.get(1)).to({regY:146.9,rotation:1.6,y:147.1},7,cjs.Ease.get(-1)).to({regY:147,rotation:0,x:181.5,y:147},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,363,294);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(291.2,106.9,0.849,1,10.7,0,0,14.3,9.5);

	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(232.9,99.9,1,1,0,0,0,14.2,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(192,157.5,1,1,0,0,0,192,157.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,384,315), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(39,38,1,1,0,0,0,39,38);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,78,76), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33_1();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,1.147,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(39,38,1,1,0,0,0,39,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,78,76), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(47,38,1,1,0,0,0,39,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.93,skewX:2.8,x:45.5,y:35.4},7,cjs.Ease.get(-1)).to({scaleY:0.86,skewX:5.5,x:43.9,y:32.6},7,cjs.Ease.get(1)).to({regY:38.1,scaleY:0.93,skewX:2.8,x:45.4,y:35.2},7,cjs.Ease.get(-1)).to({regY:38,scaleY:1,skewX:0,x:47,y:38},8,cjs.Ease.get(1)).wait(1));

	// Символ 2
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20,39.5,1,1,0,0,0,20,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.93,skewX:-2.5,x:21.7,y:36.7},7,cjs.Ease.get(-1)).to({scaleY:0.86,skewX:-5.4,x:23.2,y:33.8},7,cjs.Ease.get(1)).to({scaleY:0.93,skewX:-2.8,x:21.7,y:36.5},7,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:20,y:39.5},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86,79);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(357.9,147,1,1,0,0,0,181.5,147);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(176.4,0,363,294), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 17
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(270,202.5,1,1,0,0,0,43,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 7
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(192,157.5,1,1,0,0,0,192,157.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,384,315), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(162.1,133.4,0.865,0.865,2.2,0,0,181.7,147.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(152.5,6,323.9,266.5), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(152.4,125,0.793,0.793,0,0,0,192.1,157.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,304.5,249.8), null);


(lib.Символ32_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(152.2,124.9,1,1,0,0,0,152.2,124.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:129.8},14,cjs.Ease.get(-1)).to({y:134.9},15,cjs.Ease.get(1)).to({y:129.6},16,cjs.Ease.get(-1)).to({y:124.9},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,304.5,249.8);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(161.9,133.2,1,1,0,0,0,161.9,133.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:139.3},9,cjs.Ease.get(-1)).to({y:146.7},11,cjs.Ease.get(1)).to({y:140.3},9,cjs.Ease.get(-1)).to({y:133.2},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(152.5,6,323.9,266.5);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(198.7,169.4,1,1,0,0,0,161.9,133.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(189.3,42.1,323.9,266.5), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(152.2,124.9,1,1,0,0,0,152.2,124.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:129.8},14,cjs.Ease.get(-1)).to({y:134.9},15,cjs.Ease.get(1)).to({y:129.6},16,cjs.Ease.get(-1)).to({y:124.9},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,304.5,249.8);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(132.2,124.9,1,1,0,0,0,152.2,124.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:253.7},24,cjs.Ease.get(-1)).to({x:370.3},25,cjs.Ease.get(1)).to({x:256.3},25,cjs.Ease.get(-1)).to({x:132.2},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,0,304.5,249.8);


(lib.Символ30_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(1));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgpiAZjQg+gHgWgDQgogHgngLQgcgIgQgKIgNgIIgVgGQgKgDgLgLIgSgSQgIgHgRgHQgVgIgGgEQgJgFgFAAMAAAgxKMBd5AAAMAAAAzFg");
	mask.setTransform(146.6,-95.2);

	// Слой 1
	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(27.8,-56.6,1,1,0,0,0,152.2,124.9);

	this.instance_2 = new lib.Символ32_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-125.4,-179);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,regX:0,regY:0,x:-125.4,y:-179},1,cjs.Ease.get(1)).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},1,cjs.Ease.get(1)).to({x:54.1},6,cjs.Ease.get(-1)).to({x:127.3},7,cjs.Ease.get(1)).to({x:-47.9},7,cjs.Ease.get(-1)).to({x:-117.6},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.4,-181.5,304.5,249.8);


(lib.Символ34_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.hand = new lib.Символ24();
	this.hand.parent = this;
	this.hand.setTransform(383.4,-14.8,0.669,0.669,-16.9,0,0,181.6,147);

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34_1, new cjs.Rectangle(374.1,-138.6,246.4,217.9), null);


// stage content:
(lib.Benj_640305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cursor = "none";
		this.pric.mouseEnabled = false;
		this.hand.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_5.bind(this));
		this.pric.alpha=0;
		this.hand.alpha=0;
		
		function fl_CustomMouseCursor_5() {
			this.hand.x = stage.mouseX/window.devicePixelRatio;
			this.pric.x = stage.mouseX/window.devicePixelRatio;
			this.pric.y = stage.mouseY/window.devicePixelRatio;	
		}
		
		
		stage.canvas.addEventListener("mouseover", fl_Clickover3.bind(this));
		
		function fl_Clickover3()
		{
		
			this.pric.alpha=1;
			this.hand.alpha=1;
			this.outhand.alpha=0;
		
			
			
		
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout3.bind(this));
		
		function fl_Clickout3()
		{
		
			this.pric.alpha=0;
			this.hand.alpha=0;
			this.outhand.alpha=1;
		}
		
		
		this.but1.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.girl.gotoAndPlay(1);
		
		
		}
		
		this.but1.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{   
			this.girl.gotoAndStop(0);
		
		
		}
		
		
		
		//---------------
		
		this.but2.addEventListener("mouseover", fl_Clickover2.bind(this));
		
		function fl_Clickover2()
		{
		    this.girl.gotoAndPlay(16);
		
		
		}
		
		this.but2.addEventListener("mouseout", fl_Clickout2.bind(this));
		
		function fl_Clickout2()
		{   
			this.girl.gotoAndStop(0);
		
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 6
	this.pric = new lib.Символ31();
	this.pric.parent = this;
	this.pric.setTransform(384,357.9,1,1,0,0,0,15.1,14.7);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// Слой 1
	this.but2 = new lib.Символ34();
	this.but2.parent = this;
	this.but2.setTransform(506.3,151.4,1.688,1.224);
	new cjs.ButtonHelper(this.but2, 0, 1, 2, false, new lib.Символ34(), 3);

	this.but1 = new lib.Символ34();
	this.but1.parent = this;
	this.but1.setTransform(148.7,151.4,1.688,1.224);
	new cjs.ButtonHelper(this.but1, 0, 1, 2, false, new lib.Символ34(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.but1},{t:this.but2}]}).wait(1));

	// Слой 4
	this.hand = new lib.Символ24();
	this.hand.parent = this;
	this.hand.setTransform(591,241.8,0.855,0.855,0,0,0,181.5,147);

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1));

	// Слой 7
	this.outhand = new lib.Символ34_1();
	this.outhand.parent = this;
	this.outhand.setTransform(378.1,380,1,1,0,0,0,252.8,113.9);

	this.timeline.addTween(cjs.Tween.get(this.outhand).wait(1));

	// Слой 8
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(307.1,271,1.343,1.343,0,0,0,122.5,16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 10
	this.girl = new lib.Символ30_1();
	this.girl.parent = this;
	this.girl.setTransform(167.3,194.8);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 9
	this.instance_1 = new lib.Символ35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(419.8,196.6,0.928,0.928,0,0,0,322.9,203.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(164.7,12,1,1,0,0,0,152.5,131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DBD6BC").s().p("Egx6AX1MAAAgvpMBj1AAAMAAAAvpg");
	this.shape.setTransform(319.5,152.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(289.9,88.6,904.4,443.7);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1480954371073", id:"back"},
		{src:"images/benj.png?1480954371073", id:"benj"},
		{src:"images/blacklight.png?1480954371073", id:"blacklight"},
		{src:"images/corn.png?1480954371073", id:"corn"},
		{src:"images/fing.png?1480954371073", id:"fing"},
		{src:"images/hand2.png?1480954371073", id:"hand2"},
		{src:"images/hundred.png?1480954371073", id:"hundred"},
		{src:"images/round.png?1480954371073", id:"round"},
		{src:"images/shad.png?1480954371073", id:"shad"},
		{src:"images/thick.jpg?1480954371073", id:"thick"},
		{src:"images/thin.jpg?1480954371073", id:"thin"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;