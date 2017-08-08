(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,600);


(lib.btn12 = function() {
	this.initialize(img.btn12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,65);


(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,65);


(lib.btn22 = function() {
	this.initialize(img.btn22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,65);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,65);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,113);


(lib.money = function() {
	this.initialize(img.money);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,163);


(lib.rootframes = function() {
	this.initialize(img.rootframes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,33);


(lib.shine = function() {
	this.initialize(img.shine);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,689,690);


(lib.slot1 = function() {
	this.initialize(img.slot1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,343);


(lib.slot2 = function() {
	this.initialize(img.slot2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,343);


(lib.slot3 = function() {
	this.initialize(img.slot3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,343);


(lib.slot4 = function() {
	this.initialize(img.slot4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,343);


(lib.slot5 = function() {
	this.initialize(img.slot5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,343);


(lib.slotmachine = function() {
	this.initialize(img.slotmachine);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,465,348);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,203,88);// helper functions:

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


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.208)","#FFF373","rgba(255,255,255,0.2)"],[0.024,0.51,1],-16.3,0,16.3,0).s().p("AiiE2IAAprIFFAAIAAJrg");
	this.shape.setTransform(16.3,31);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,0,32.6,62), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AhMA6IgLhzIChAAIAOBzg");
	this.shape.setTransform(8.8,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,17.6,11.5), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,83,65), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,83,65), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,203,88), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","#FFEB97"],[0,1],0,0,0,0,0,92.9).s().p("ArrImIAAxLIXXAAIAARLg");
	this.shape.setTransform(74.8,55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,149.7,110), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rootframes();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.774,0.757);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,136.3,25), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slotmachine();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,193,144.5), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.slot5();
	this.instance.parent = this;
	this.instance.setTransform(0,142,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.slot5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,24.5,284.4), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.slot4();
	this.instance.parent = this;
	this.instance.setTransform(0,142,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.slot4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,24.1,284.4), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.slot3();
	this.instance.parent = this;
	this.instance.setTransform(0,142,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.slot3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,24.5,284.4), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.slot2();
	this.instance.parent = this;
	this.instance.setTransform(0,142,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.slot2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,24.5,284.4), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.slot1();
	this.instance.parent = this;
	this.instance.setTransform(0,142,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.slot1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,24.1,284.4), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgzEaQgwgXgSgnQgMgeADguQADgsANgyIADgRQAIgnATg9QAMglAahKIAIgUIACgPQADgaAJgQQALgTATgLQATgLAWABQAWABATANQATAMAIAUQALAYgEAtQgEArgMArQgHAZggBTQgQAogJAgQgBALABAJQACAJAFAOIAHAXIABANQAKALAGAQQAIAVgFAWQgEAVgRARQgQARgVAFQgJACgKAAQgYAAgegPg");
	this.shape.setTransform(12.8,29.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,25.5,59.3), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AvJCoQgXgRgFggQgEgfAQgZQATgeA3gXQBRgiBugSQBAgMCGgNQA/gGAggBQA1gDAqADQASACA/AJQAxAHAfABQATAABKgGQA5gFAiAGQAaAEAxARQAyARAZAEQA4AKBsgUQBugVA2AIQALACAlAIQAeAHATAAQAcABAhgIQAVgGAmgOQAkgNATgKQAegOATgSIAhgkQATgWARgJQAegRAlAOQAkAOALAhQAIAbgLAgQgLAcgXAaQgpAshDAjQgtAXhSAcQgpAOgWAFQgjAJgeAAQgZgBgsgJQgvgKgWgCQgegCgqAHIhIAOQh2AUhdgZIg7gSQgjgMgXgDQgbgEgoADIhDAEQgqABhFgHQhTgJgcgBQhDgDh9APQhSAJgqAHQhEANg0AVIgnARQgYAJgRAEQgQAEgOAAQgeAAgWgQg");
	this.shape.setTransform(99.9,18.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,199.7,36.8), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shine();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,689,690), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(600,0,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,600,500), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(16.3,30.9,1,1,0,0,0,16.3,30.9);
	this.instance.alpha = 0.391;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(11, 11, 1)];
	this.instance.cache(-2,-2,37,66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-6,-6,48,77), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ak8EGQg9gCgugdIgIgFIgPgJIgQgMQgKgIgMgOIgLgNQgEgDgCgDIgLgKQgWgXgFgQIgDgEIAAgCIgBgDIgCgCIgDgIQgFgNgJgOQgGgLACgFQADgHAKACIAIADQAFACAIAAIAGABIAKgCIAKgDIAAAAIAMgIIAIgDIAYgSIAHgGIABgCQADgLAEgCIAAgEIgBgEIgBgLIgDgdIgLhQIgBgCQgCgEAAgEQABgHAMgFQAZgMAigNQAVgIALAAQATgBAMAKIAIAKIAAABIADABIABgDQABgDACgBQAAgGACgHQAEgQALgJQAMgKAcgIQBQgTBxgDIA4gCIACgCQADgEAEgBQABgDADgBQAFgBADADQADABADAFIACAEQA+ABAzAIIAPACIAyAJIAwAJQATAFAGADQAOAHABAOIAAADIADAKIACAIIABgDIACgCQAKgMAOgGQAOgFAUAEQAJACAYAKQAiAPAjAMIANAGQAOAKAAAUQAAAKgGANIgBAKQgFAlgFAxIABAHIAAAIIAQANIANALIADAAQAQAEAJABIALACIARgFQAGgBAEACQAEABABAFQABACgBADQAEADgBAGIgDAGIgXAlIgRAaQgGAMgLAPQgYAigZAUQgtAjhGAIIgMAAQgIAEgJAAQgQAAgOgJIgEgDIgKgGIgDgDIgCgEIgDgEQgBgGgCgBQgCgMAAgXIAAgKIACgGIgBgEQgBgPACgMIACgFIADgDIABgCIgOgBQgYgDglgBIkFgIQhUABg9ACIgHABIgeAFIgGAAQAFAIACALQAJAhgGAiQgEAYgMALQgPAOgfAAIgFAAg");
	var mask_graphics_39 = new cjs.Graphics().p("Ak8EGQg9gCgugdIgIgFIgPgJIgQgMQgKgIgMgOIgLgNQgEgDgCgDIgLgKQgWgXgFgQIgDgEIAAgCIgBgDIgCgCIgDgIQgFgNgJgOQgGgLACgFQADgHAKACIAIADQAFACAIAAIAGABIAKgCIAKgDIAAAAIAMgIIAIgDIAYgSIAHgGIABgCQADgLAEgCIAAgEIgBgEIgBgLIgDgdIgLhQIgBgCQgCgEAAgEQABgHAMgFQAZgMAigNQAVgIALAAQATgBAMAKIAIAKIAAABIADABIABgDQABgDACgBQAAgGACgHQAEgQALgJQAMgKAcgIQBQgTBxgDIA4gCIACgCQADgEAEgBQABgDADgBQAFgBADADQADABADAFIACAEQA+ABAzAIIAPACIAyAJIAwAJQATAFAGADQAOAHABAOIAAADIADAKIACAIIABgDIACgCQAKgMAOgGQAOgFAUAEQAJACAYAKQAiAPAjAMIANAGQAOAKAAAUQAAAKgGANIgBAKQgFAlgFAxIABAHIAAAIIAQANIANALIADAAQAQAEAJABIALACIARgFQAGgBAEACQAEABABAFQABACgBADQAEADgBAGIgDAGIgXAlIgRAaQgGAMgLAPQgYAigZAUQgtAjhGAIIgMAAQgIAEgJAAQgQAAgOgJIgEgDIgKgGIgDgDIgCgEIgDgEQgBgGgCgBQgCgMAAgXIAAgKIACgGIgBgEQgBgPACgMIACgFIADgDIABgCIgOgBQgYgDglgBIkFgIQhUABg9ACIgHABIgeAFIgGAAQAFAIACALQAJAhgGAiQgEAYgMALQgPAOgfAAIgFAAg");
	var mask_graphics_69 = new cjs.Graphics().p("Ak8EGQg9gCgugdIgIgFIgPgJIgQgMQgKgIgMgOIgLgNQgEgDgCgDIgLgKQgWgXgFgQIgDgEIAAgCIgBgDIgCgCIgDgIQgFgNgJgOQgGgLACgFQADgHAKACIAIADQAFACAIAAIAGABIAKgCIAKgDIAAAAIAMgIIAIgDIAYgSIAHgGIABgCQADgLAEgCIAAgEIgBgEIgBgLIgDgdIgLhQIgBgCQgCgEAAgEQABgHAMgFQAZgMAigNQAVgIALAAQATgBAMAKIAIAKIAAABIADABIABgDQABgDACgBQAAgGACgHQAEgQALgJQAMgKAcgIQBQgTBxgDIA4gCIACgCQADgEAEgBQABgDADgBQAFgBADADQADABADAFIACAEQA+ABAzAIIAPACIAyAJIAwAJQATAFAGADQAOAHABAOIAAADIADAKIACAIIABgDIACgCQAKgMAOgGQAOgFAUAEQAJACAYAKQAiAPAjAMIANAGQAOAKAAAUQAAAKgGANIgBAKQgFAlgFAxIABAHIAAAIIAQANIANALIADAAQAQAEAJABIALACIARgFQAGgBAEACQAEABABAFQABACgBADQAEADgBAGIgDAGIgXAlIgRAaQgGAMgLAPQgYAigZAUQgtAjhGAIIgMAAQgIAEgJAAQgQAAgOgJIgEgDIgKgGIgDgDIgCgEIgDgEQgBgGgCgBQgCgMAAgXIAAgKIACgGIgBgEQgBgPACgMIACgFIADgDIABgCIgOgBQgYgDglgBIkFgIQhUABg9ACIgHABIgeAFIgGAAQAFAIACALQAJAhgGAiQgEAYgMALQgPAOgfAAIgFAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:63.6,y:34.2}).wait(39).to({graphics:mask_graphics_39,x:63.6,y:34.2}).wait(30).to({graphics:mask_graphics_69,x:63.6,y:34.2}).wait(1));

	// Слой 3
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(-22.2,33.3,1,1,0,0,0,16.3,30.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:60.8,y:32.2},19,cjs.Ease.get(-1)).to({x:148.3,y:30.9},20,cjs.Ease.get(1)).wait(31));

	// Слой 1
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.608,0.608);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.9,8,113.4,52.4);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(8.8,5.8,1,1,0,0,0,8.8,5.8);
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.25},4).to({alpha:0.801},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.6,11.5);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(140.9,123.2,1,1,0,0,0,8.8,5.8);
	this.instance.alpha = 0.5;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(96.5,72.2,1,1,0,0,0,96.5,72.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193,144.5);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(41.5,32.5,1,1,0,0,0,41.5,32.5);

	this.instance_1 = new lib.btn22();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,65);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(36.9,28.9,0.888,0.888,0,0,0,41.5,32.5);

	this.instance_1 = new lib.btn12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73.7,57.7);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn1.png
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(11.9,96.2,1,1,0,0,0,36.9,28.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06,y:96.3},4,cjs.Ease.get(-1)).to({regX:36.8,scaleX:1.14,scaleY:1.14,x:11.8},5,cjs.Ease.get(1)).wait(5).to({regX:36.9,scaleX:1,scaleY:1,x:11.9,y:96.2},5,cjs.Ease.get(1)).wait(1));

	// btn2.png
	this.instance_1 = new lib.Символ24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(113.5,95.9,1,1,0,0,0,41.5,32.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.97,scaleY:0.97,x:113.6},4,cjs.Ease.get(-1)).to({scaleX:0.92,scaleY:0.92,x:113.5},5,cjs.Ease.get(1)).wait(5).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,63.4,180,65);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(101.5,44,1,1,0,0,0,101.5,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.92,scaleY:0.92,x:101.6},14,cjs.Ease.get(-1)).to({scaleX:0.83,scaleY:0.83},15,cjs.Ease.get(1)).to({regY:44.1,scaleX:0.96,scaleY:0.96,x:101.5,y:44.1},15,cjs.Ease.get(-1)).to({regY:44,scaleX:1,scaleY:1,y:44},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,203,88);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(7.6,28.5,1,1,0,0,0,12.8,29.7);
	this.instance.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance.cache(-2,-2,30,63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-15.2,-11.2,49,83), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(98.7,24,1,1,0,0,0,99.9,18.4);
	this.instance.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance.cache(-2,-2,204,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-11.2,-4.4,223,61), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AvELSIAAjSIBFi/IAGwSIb0AAIAHQbIBDCnIAADhg");
	var mask_graphics_64 = new cjs.Graphics().p("AvELSIAAjSIBFi/IAGwSIb0AAIAHQbIBDCnIAADhg");
	var mask_graphics_69 = new cjs.Graphics().p("AvELSIAAjSIBFi/IAGwSIb0AAIAHQbIBDCnIAADhg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:91.5,y:114.2}).wait(64).to({graphics:mask_graphics_64,x:91.5,y:114.2}).wait(5).to({graphics:mask_graphics_69,x:91.5,y:114.2}).wait(1));

	// Слой 11
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(91.5,102.4,1,1,0,0,0,74.8,55);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({alpha:0.5},2).to({alpha:0},4).to({alpha:0.5},4).to({alpha:0},4).wait(19));

	// frame
	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(90.2,106.7,1,1,0,0,0,68.2,12.5);
	this.instance_1.alpha = 0;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37).to({y:106.1,alpha:1},2).to({alpha:0.461},2).to({alpha:1},2).to({alpha:0.461},2).to({alpha:1},2).to({alpha:0.461},2).to({y:105.7,alpha:0},15).wait(6));

	// slotmachine.png
	this.instance_2 = new lib.Символ25();
	this.instance_2.parent = this;
	this.instance_2.setTransform(91.5,114.2,1,1,0,0,0,96.5,72.2);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70));

	// slot5.png
	this.instance_3 = new lib.Символ14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(145.2,-49.9,1,1,0,0,0,12.2,71.2);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-55.9},13).to({y:25.4},11,cjs.Ease.get(-1)).to({y:121.5},13,cjs.Ease.get(1)).to({y:115.5},2).wait(25).to({alpha:0},0).to({y:-49.9,alpha:1},1).wait(5));

	// slot4.png
	this.instance_4 = new lib.Символ13();
	this.instance_4.parent = this;
	this.instance_4.setTransform(118,-49.9,1,1,0,0,0,12,71.2);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-55.9},11).to({y:3.4},11,cjs.Ease.get(-1)).to({y:73.5},13,cjs.Ease.get(1)).to({y:67.5},4).wait(25).to({alpha:0},0).to({y:-49.9,alpha:1},1).wait(5));

	// slot3.png
	this.instance_5 = new lib.Символ12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(90.2,-49.9,1,1,0,0,0,12.2,71.2);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-55.9},9).to({y:14.4},11,cjs.Ease.get(-1)).to({y:97.5},13,cjs.Ease.get(1)).to({y:91.5},6).wait(25).to({alpha:0},0).to({y:-49.9,alpha:1},1).wait(5));

	// slot2.png
	this.instance_6 = new lib.Символ11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(62.2,-49.9,1,1,0,0,0,12.2,71.2);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:-55.9},7).to({y:3.7},11,cjs.Ease.get(-1)).to({y:74.1},13,cjs.Ease.get(1)).to({y:68.1},8).wait(25).to({alpha:0},0).to({y:-49.9,alpha:1},1).wait(5));

	// slot1.png
	this.instance_7 = new lib.Символ10();
	this.instance_7.parent = this;
	this.instance_7.setTransform(35,-49.9,1,1,0,0,0,12,71.2);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:-55.9},4).to({y:-4.4},12,cjs.Ease.get(-1)).to({y:51.3},13,cjs.Ease.get(1)).to({y:45.3},10).wait(25).to({alpha:0},0).to({y:-49.9,alpha:1},1).wait(5));

	// Слой 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,255,0,0)").ss(1,1,1).p("Aq6l8IV1AAIAAL5I11AAg");
	this.shape.setTransform(91.6,104.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8F6C7").s().p("Aq6F9IAAr5IV0AAIAAL5g");
	this.shape_1.setTransform(91.6,104.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},64).to({state:[{t:this.shape_1},{t:this.shape}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,42,193,144.5);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.money();
	this.instance.parent = this;
	this.instance.setTransform(-190,-22);

	this.instance_1 = new lib.money();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-430,18);

	this.instance_2 = new lib.money();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-190,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-228.2,23,1,1,0,0,0,99.9,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// slot
	this.instance_4 = new lib.Символ5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-94.2,18.8,1,1,0,0,0,232.5,174);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 4
	this.instance_5 = new lib.Символ7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-326.2,9.4,1,1,0,0,0,12.8,29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 1
	this.instance_6 = new lib.money();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-575,-25);

	this.instance_7 = new lib.money();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-575,-276.3,908,469.4), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(293.5,248,1,1,0,0,0,344.5,345);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},149).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(300,250,1,1,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-97,689,690);


// stage content:
(lib.slot_king = function(mode,startPosition,loop) {
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

	// logo
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(299.8,37.4,1,1,0,0,0,63.8,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// btn
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(385.5,177.5,1,1,0,0,0,41.5,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// text
	this.instance_2 = new lib.Символ18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(406.5,106,1,1,0,0,0,101.5,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// money
	this.instance_3 = new lib.Символ4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(525.5,270.5,1,1,0,0,0,166.5,81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.instance_4 = new lib.Символ1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(301,150,1,1,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(84,-47,908,690);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1502193753355", id:"bg"},
		{src:"images/btn12.png?1502193753355", id:"btn12"},
		{src:"images/btn1.png?1502193753355", id:"btn1"},
		{src:"images/btn22.png?1502193753355", id:"btn22"},
		{src:"images/btn2.png?1502193753355", id:"btn2"},
		{src:"images/logo.png?1502193753355", id:"logo"},
		{src:"images/money.png?1502193753355", id:"money"},
		{src:"images/rootframes.png?1502193753355", id:"rootframes"},
		{src:"images/shine.png?1502193753355", id:"shine"},
		{src:"images/slot1.png?1502193753355", id:"slot1"},
		{src:"images/slot2.png?1502193753355", id:"slot2"},
		{src:"images/slot3.png?1502193753355", id:"slot3"},
		{src:"images/slot4.png?1502193753355", id:"slot4"},
		{src:"images/slot5.png?1502193753355", id:"slot5"},
		{src:"images/slotmachine.png?1502193753355", id:"slotmachine"},
		{src:"images/text.png?1502193753355", id:"text"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;