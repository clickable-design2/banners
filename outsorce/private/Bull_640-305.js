(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.arm = function() {
	this.initialize(img.arm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,126);


(lib.armos = function() {
	this.initialize(img.armos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,178);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,312);


(lib.dol1 = function() {
	this.initialize(img.dol1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,54);


(lib.dol2 = function() {
	this.initialize(img.dol2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,75);


(lib.ear = function() {
	this.initialize(img.ear);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,32);


(lib.field = function() {
	this.initialize(img.field);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,479);


(lib.fing = function() {
	this.initialize(img.fing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,39);


(lib.fing2 = function() {
	this.initialize(img.fing2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,58);


(lib.fing3 = function() {
	this.initialize(img.fing3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,36);


(lib.handos = function() {
	this.initialize(img.handos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,187);


(lib.head2 = function() {
	this.initialize(img.head2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,146);


(lib.hear = function() {
	this.initialize(img.hear);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,33);


(lib.note = function() {
	this.initialize(img.note);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,138);// helper functions:

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


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.armos();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ77, new cjs.Rectangle(0,0,173,178), null);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fing3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ76, new cjs.Rectangle(0,0,62,36), null);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fing2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ75, new cjs.Rectangle(0,0,66,58), null);


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fing();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ74, new cjs.Rectangle(0,0,36,39), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AcvDnQgRgDgPgGQgRgGgOgJQgOgIgMgMQgNgLgKgOQgKgPgHgQQgHgRgDgUQgEgSAAgTIAAgEQAAgWAEgUQADgSAIgRQAHgRAKgOQAKgOANgMQAMgLAPgJQAOgIAQgGQAQgGARgDQARgDARAAQASAAAQADQARADAQAGQAPAGAPAIQAOAJAMALQANAMAKAOQAKAOAHARQAIARADASQAEAUAAAWIAAAEQAAARgDARQgDASgHARQgGAQgKAPQgJAOgMAMQgMAMgOAKQgOAJgRAGQgQAHgSADQgSAEgUAAQgSAAgRgDgAcsgzQgTAIgOANQgPAPgIATQgJAWAAAbIAAAEQABAZAHAVQAIAUAPAPQAOANATAHQASAHAWAAQAVAAASgHQATgHAOgNQAPgPAIgUQAIgVABgZIAAgEQAAgbgJgWQgIgTgPgPQgOgOgTgHQgSgHgVAAQgVAAgSAHgA9zDkQgRgCgQgGQgQgGgOgIQgPgJgMgLQgNgMgKgNQgKgPgHgQQgHgRgEgTQgEgSAAgTIAAgEQAAgVAEgUQAEgSAHgRQAHgRAKgOQAKgOANgMQAMgLAPgIQAOgJAQgGQAQgFARgDQARgDARAAQAbAAAZAIQAbAHAWAPIAVARIARAWQAIAMAGANQAFAPADAQIhIAAQgGgPgJgLQgIgKgMgHQgLgIgOgDQgNgDgQAAQgXAAgUAIQgTAIgNAPQgOAPgHATQgIAVAAAYIAAAEQABAUAHATQAHAUANAPQAOAPATAJQATAIAXAAQARAAAOgEQAPgEAMgHQAMgIAIgMQAJgMAEgQIBIAAQgDARgFAQQgFAOgIANQgIAMgKAKIgUASQgWAQgbAIQgaAHgcAAgAUkDiIACg2QAQACAJgCQAKgCAGgFQAIgIAGggIAaj2IDrAAIAAFdIhKAAIAAkaIhgAAIgRC1QgDAjgIAVQgIAWgPALQgPALgYACIgQABQgSAAgYgEgAigDlIAAleIBLAAIAADFIDDjHIAYAAIAAFfIhLAAIAAjIIjFDJgAP6DkIAAldID1AAIAABBIirAAIAABAIBMAAQAeAAAYAIQAXAIAQAPQAJAIAGAKIAIAQQAIATAAAXQAAAYgIAUQgIAUgPAQQgQAPgXAJQgYAJgeAAgARECiIBLAAQANAAAKgEQAJgDAHgHQANgNAAgTQAAgUgNgMQgHgHgJgDQgKgEgNAAIhLAAgAOHDkIgcg6IiRAAIgbA6IhOAAIAAgKIChlWIAiAAICgFWIAAAKgALyBrIBhAAIgwhzgAFRDkIAAldID1AAIAABBIirAAIAABAIBMAAQAeAAAYAIQAXAIAQAPQAJAIAGAKIAIAQQAIATAAAXQAAAYgIAUQgIAUgPAQQgQAPgXAJQgYAJgeAAgAGbCiIBLAAQANAAAKgEQAJgDAHgHQANgNAAgTQAAgUgNgMQgHgHgJgDQgKgEgNAAIhLAAgAkUDkIgbg6IiSAAIgbA6IhOAAIAAgKIChlWIAjAAICgFWIAAAKgAmoBrIBhAAIgxhzgAtODkIAAldICVAAQAYAAAUAHQAUAHAPANQAPAOAIATQAIAUAAAYQAAASgJASQgKARgQAKQAKAEAIAHIADACQAKAIAGAKQAGAKAEAMQADAMAAANQAAAXgIATQgHATgPAOQgOAOgUAHQgWAIgZAAgAsDCjIBTAAQATAAALgLQALgKABgSQAAgKgEgKQgEgJgIgFQgKgHgUAAIhPAAgAsDAWIBEAAQATAAAMgKQALgKAAgRQABgTgMgLQgLgMgUAAIhEAAgAvqDkIAAldIBLAAIAAFdgA0tDkIAAldIBJAAIAABtIBLAAQAQAAAPADQAOADANAGQAQAHAYAXQAKAMAHAPIAFAQQAHAYgDAaQgDAVgJATQgKATgPAPQgQAOgVAIQgXAJgbAAgAzkCiIA/AAQAOAAAMgDQALgDAIgFQAIgGAFgJQAFgKABgMQABgLgDgLQgDgLgGgJQgIgJgJgFIgEgBQgJgEgLAAIhLAAgA50DjIAAldICWAAQAUAAAiALQAWAKAQASQAQASAIAXQAIAXAAAYQAAAYgIAWIgCAGQgIATgOAPQgQASgXAJQghAKgUAAIhLAAIAABjgA4qBAIBMAAQALAAAKgFIAFgCQAHgEAFgHQAHgIAEgLQAEgMAAgMQAAgMgEgKQgDgLgHgIQgHgJgKgFQgKgEgMAAIhMAAgAgiiWQgQgGgLgLQgMgLgGgPIgBgDQgFgOgBgSIAygFQACAQAJAIQAKAIAQAAQAQAAAKgHQAKgIADgRIAyAFQgBASgFAOIgBACQgGAQgMALQgLALgQAGQgQAGgVAAQgTAAgQgGg");
	this.shape.setTransform(205.3,23.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(0,0,410.7,46.8), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Am2CcIDKosIKjD1IjKIrgABRgsIgCAHIgMAjQgTA1gNAeIgIASIACABQAHAFAIADQAEACAEgBIAIgCIAUgIIAGgBIAIgcIAGgiIAFgjQABgMAHgXQgHgGgIgDQgFgBgFAAIgHAAg");
	mask.setTransform(33.9,22);

	// Слой 1
	this.instance = new lib.dol1();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(0,0,75,54), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AofkSIPqjoIBVMNIvqDogAAzCEIAAAAIAEAFQABAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBIgKgJIAGgCIAAgFIAGACIAAAAQADgCABgCIACgGIABgFIAFgKIACgGIAFgEIACgFIABgIIAIgLIABgBIACgBQAEgCACgGQAAgGgDgFQgDgFgOgIIgFgDIgPgPQgUgTgLgQIgRgRIgigjQgVgUgRgKQgKgGAAgDIgBABQgCADgCAFIgBAJIgDAFQgBAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIABALQgBAFAPASIAdAhQAPAQAKAQIAlBAIAgAzIgKACIgRgOIAOAPIACACIABACIAAABIgEABIgBgFIACgBIgCABIABAFIAEgBQACAFAFAAgAgCBLIAUAYIgEgFQgKgKgJgNgAAwB+IgEgFIAKgCIAAAFIgGACIAAAAg");
	mask.setTransform(58.9,36.8);

	// Слой 1
	this.instance = new lib.dol2();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(4.5,0,108.8,75), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("EhEWAVMMAAAgqXMCIuAAAMAAAAqXg");
	this.shape.setTransform(421.4,113.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.field();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-16.1,-22.1,875.1,501.2), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hear();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(0,0,52,33), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ear();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(0,0,50,32), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(0,0,160,312), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.note();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(0,0,92,138), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.handos();
	this.instance.parent = this;
	this.instance.setTransform(-2,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-2,-3,49,187), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.arm();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(0,0,47,126), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AD+AAQAABphLBKQhKBLhpAAQhoAAhLhLQhKhKAAhpQAAhoBKhLQBLhKBoAAQBpAABKBKQBLBLAABog");
	this.shape.setTransform(25.4,25.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-1,-1,52.7,52.7), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AAAhaIAAC1");
	this.shape.setTransform(0,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-1,-1,2,20.2), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AubVAMAAAgp/Ic3AAMAAAAp/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-92.4,-134.4,184.8,268.8), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.parent = this;
	this.instance.setTransform(207.5,25.9,1,1,0,0,0,205.3,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.672},24).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.2,2.5,410.7,46.8);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(400,239.5,1,1,0,0,0,400,239.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:413.5},22,cjs.Ease.get(-1)).to({x:430},27,cjs.Ease.get(1)).to({x:414.7},26,cjs.Ease.get(-1)).to({x:400},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.1,-22.1,875.1,501.2);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(26,16.5,1,1,0,0,0,26,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.3,x:26.2,y:15.2},4,cjs.Ease.get(-1)).to({regX:25.9,rotation:-7.7,x:26.4,y:13.6},5,cjs.Ease.get(1)).to({regY:16.6,rotation:-3.8,x:26.3,y:15.1},8,cjs.Ease.get(-1)).to({regX:26,regY:16.5,rotation:0,x:26,y:16.5},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,33);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(25,16,1,1,0,0,0,25,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4,x:26.2,y:17.7},5,cjs.Ease.get(-1)).to({rotation:-7.2,x:27.2,y:19},4,cjs.Ease.get(1)).to({regX:25.1,rotation:-3.5,x:26.2,y:17.6},5,cjs.Ease.get(-1)).to({regX:25,rotation:0,x:25,y:16},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,32);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(176.4,25.3,0.807,0.807,-0.9,0,0,37.6,27.1);

	this.instance_1 = new lib.Символ53();
	this.instance_1.parent = this;
	this.instance_1.setTransform(171.3,40.8,0.817,0.854,0,-2.5,177.5,62.5,37.5);

	this.instance_2 = new lib.Символ53();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.1,28.8,0.824,0.566,28,0,0,62.4,37.5);

	this.instance_3 = new lib.Символ53();
	this.instance_3.parent = this;
	this.instance_3.setTransform(11.1,35.1,0.848,0.615,26.5,0,0,62.4,37.5);

	this.instance_4 = new lib.Символ53();
	this.instance_4.parent = this;
	this.instance_4.setTransform(9.6,42,0.794,0.586,0,0,0,62.4,37.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_5 = new lib.head2();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-46.6,-19.3,270.3,165.3), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 77
	this.instance = new lib.Символ77();
	this.instance.parent = this;
	this.instance.setTransform(488.5,89,1,1,0,0,0,86.5,89);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1,x:487.4,y:90.8},9,cjs.Ease.get(-1)).to({rotation:2.2,x:486.2,y:92.8},10,cjs.Ease.get(1)).to({rotation:1,x:487.3,y:90.9},10,cjs.Ease.get(-1)).to({rotation:0,x:488.5,y:89},10,cjs.Ease.get(1)).wait(1));

	// Символ 76
	this.instance_1 = new lib.Символ76();
	this.instance_1.parent = this;
	this.instance_1.setTransform(381,42.5,1,1,0,0,0,31,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:31.1,regY:18.1,rotation:5.5,x:382.2,y:39.4},9,cjs.Ease.get(-1)).to({regX:31,regY:18,rotation:12,x:383.2,y:35.7},10,cjs.Ease.get(1)).to({regX:31.1,regY:18.1,rotation:5.8,x:382.2,y:39.2},10,cjs.Ease.get(-1)).to({regX:31,regY:18,rotation:0,x:381,y:42.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 75
	this.instance_2 = new lib.Символ75();
	this.instance_2.parent = this;
	this.instance_2.setTransform(384,-11.6,1,1,0,0,0,33,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:28.9,rotation:-2.8,x:385,y:-8.3},9,cjs.Ease.get(-1)).to({regY:29,rotation:-5.9,x:386.1,y:-4.5},10,cjs.Ease.get(1)).to({regY:28.9,rotation:-2.8,x:385.1,y:-8},10,cjs.Ease.get(-1)).to({regY:29,rotation:0,x:384,y:-11.6},10,cjs.Ease.get(1)).wait(1));

	// Символ 74
	this.instance_3 = new lib.Символ74();
	this.instance_3.parent = this;
	this.instance_3.setTransform(425.9,-13.3,1,1,0,0,0,18,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:18.1,regY:19.4,rotation:3.3,x:426.5,y:-12.7},9,cjs.Ease.get(-1)).to({rotation:6.9,x:427.1,y:-12.1},10,cjs.Ease.get(1)).to({rotation:3.3,x:426.6,y:-12.7},10,cjs.Ease.get(-1)).to({regX:18,regY:19.5,rotation:0,x:425.9,y:-13.3},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(350,-40.6,225,218.6);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(9.1,9.1,1,1,90,0,0,0,9.1);

	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.1,9.1,1,1,0,0,0,0,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-1,-1,20.2,20.2), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(9.1,9.1,1,1,0,0,0,9.1,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,20.2,20.2);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,1.147,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 43
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(92.5,73.5,1,1,0,0,0,92.5,73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 45
	this.instance_1 = new lib.Символ45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(153.5,86.5,1,1,0,0,0,26,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 44
	this.instance_2 = new lib.Символ44();
	this.instance_2.parent = this;
	this.instance_2.setTransform(30,84.5,1,1,0,0,0,25,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-46.6,-18.8,270.3,165.3), null);


(lib.Символ33_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,9.1,9.1);

	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,0.1,1,1,0,0,0,25.4,25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33_1, new cjs.Rectangle(-26.3,-26.3,52.7,52.7), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33_1();
	this.instance.parent = this;
	this.instance.setTransform(15.1,14.7,1,1,0,0,0,15.1,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.87,scaleY:0.87,x:15.2},2,cjs.Ease.get(-1)).to({scaleX:0.74,scaleY:0.74},2,cjs.Ease.get(1)).to({scaleX:0.85,scaleY:0.85},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:15.1},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.3,-26.3,52.7,52.7);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(23.4,22.2,1,1,0,0,0,15.1,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-18.1,-18.8,52.7,52.7), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(161.9,133.2,1,1,0,0,0,161.9,133.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:139.3},9,cjs.Ease.get(-1)).to({y:146.7},11,cjs.Ease.get(1)).to({y:140.3},9,cjs.Ease.get(-1)).to({y:133.2},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(350,-40.6,225,218.6);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(62.9,205.8,1,1,0,0,0,161.9,133.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(251,32,225,218.6), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(92.5,72.5,1,1,0,0,0,92.5,73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(-46.6,-19.3,270.3,165.3), null);


(lib.Символ34_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.hand = new lib.Символ24();
	this.hand.parent = this;
	this.hand.setTransform(308.4,15.2,0.669,0.669,-16.9,0,0,181.6,147);

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34_1, new cjs.Rectangle(330.9,-89.8,185.9,147.6), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 43
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(111.5,57.5,1,1,0,0,0,92.5,73);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.8,x:110.3,y:59.2},15,cjs.Ease.get(-1)).to({rotation:-3.7,x:109.1,y:60.6},14,cjs.Ease.get(1)).to({regY:72.9,rotation:-1.8,x:110.4,y:59.1},15,cjs.Ease.get(-1)).to({regY:73,rotation:0,x:111.5,y:57.5},15,cjs.Ease.get(1)).wait(1));

	// Символ 42
	this.instance_1 = new lib.Символ42();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49,299,1,1,0,0,0,46,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:46.1,scaleX:1,scaleY:1,rotation:-12.5,x:67.8,y:290.3},15,cjs.Ease.get(-1)).to({regY:69.1,scaleX:1,scaleY:1,rotation:-24.2,x:85,y:282.1},14,cjs.Ease.get(1)).to({regY:69.2,scaleX:1,scaleY:1,rotation:-12,x:67,y:290.7},15,cjs.Ease.get(-1)).to({regX:46,regY:69,scaleX:1,scaleY:1,rotation:0,x:49,y:299},15,cjs.Ease.get(1)).wait(1));

	// Символ 40
	this.instance_2 = new lib.Символ40();
	this.instance_2.parent = this;
	this.instance_2.setTransform(34.5,176,1,1,0,0,0,23.5,63);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:63.1,rotation:-3,x:37.8,y:175.5},15,cjs.Ease.get(-1)).to({regY:63,rotation:-5.9,x:40.9,y:174.9},14,cjs.Ease.get(1)).to({regX:23.6,rotation:-2.8,x:37.8,y:175.5},15,cjs.Ease.get(-1)).to({regX:23.5,rotation:0,x:34.5,y:176},15,cjs.Ease.get(1)).wait(1));

	// Символ 46
	this.instance_3 = new lib.Символ46();
	this.instance_3.parent = this;
	this.instance_3.setTransform(110,238,1,1,0,0,0,80,156);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

	// Символ 41
	this.instance_4 = new lib.Символ41();
	this.instance_4.parent = this;
	this.instance_4.setTransform(193.5,214.5,1,1,0,0,0,23.5,95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:23.6,rotation:2,x:190,y:215.3},15,cjs.Ease.get(-1)).to({rotation:4.2,x:186.6,y:216},14,cjs.Ease.get(1)).to({rotation:2,x:190.1,y:215.3},15,cjs.Ease.get(-1)).to({regX:23.5,rotation:0,x:193.5,y:214.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.6,-34.8,270.3,428.8);


(lib.Символ32_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(152.2,124.9,1,1,0,0,0,152.2,124.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:129.8},14,cjs.Ease.get(-1)).to({y:134.9},15,cjs.Ease.get(1)).to({y:129.6},16,cjs.Ease.get(-1)).to({y:124.9},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.6,-34.8,270.3,428.8);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(152.2,124.9,1,1,0,0,0,152.2,124.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:129.8},14,cjs.Ease.get(-1)).to({y:134.9},15,cjs.Ease.get(1)).to({y:129.6},16,cjs.Ease.get(-1)).to({y:124.9},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.6,-34.8,270.3,428.8);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(132.2,124.9,1,1,0,0,0,152.2,124.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:253.7},24,cjs.Ease.get(-1)).to({x:370.3},25,cjs.Ease.get(1)).to({x:256.3},25,cjs.Ease.get(-1)).to({x:132.2},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.6,-34.8,270.3,428.8);


(lib.Символ30 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(27.8,-56.6,1,1,0,0,0,152.2,124.9);

	this.instance_1 = new lib.Символ32_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-133.1,-101.9,1.196,1.196);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:0,regY:0,scaleX:1.2,scaleY:1.2,x:-133.1,y:-101.9},1,cjs.Ease.get(1)).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},1,cjs.Ease.get(1)).to({regY:-0.1,rotation:15.5,x:85.7,y:-74.5},6,cjs.Ease.get(-1)).to({regY:0,rotation:0,x:169.1,y:-101.9},7,cjs.Ease.get(1)).to({regX:-0.1,regY:-0.1,rotation:-19,x:-24.4,y:28.9},7,cjs.Ease.get(-1)).to({rotation:0,x:-123.8,y:-102},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.1,-216.3,270.3,428.8);


// stage content:
(lib.Bull_640305 = function(mode,startPosition,loop) {
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
	this.hand.setTransform(566,198.3,0.855,0.855,13.2,0,0,181.5,147.1);

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1));

	// Слой 7
	this.outhand = new lib.Символ34_1();
	this.outhand.parent = this;
	this.outhand.setTransform(423.1,312.5,1,1,0,0,0,252.8,113.9);

	this.timeline.addTween(cjs.Tween.get(this.outhand).wait(1));

	// Слой 10
	this.girl = new lib.Символ30();
	this.girl.parent = this;
	this.girl.setTransform(167.3,204.8);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 11
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(322.4,71,1.384,1.384,0,0,0,205.3,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ51();
	this.instance_1.parent = this;
	this.instance_1.setTransform(285,130.5,1,1,0,0,0,400,239.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(188.9,21.3,956.7,548.4);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/arm.png?1481548624068", id:"arm"},
		{src:"images/armos.png?1481548624068", id:"armos"},
		{src:"images/body.png?1481548624068", id:"body"},
		{src:"images/dol1.png?1481548624068", id:"dol1"},
		{src:"images/dol2.png?1481548624068", id:"dol2"},
		{src:"images/ear.png?1481548624068", id:"ear"},
		{src:"images/field.jpg?1481548624068", id:"field"},
		{src:"images/fing.png?1481548624068", id:"fing"},
		{src:"images/fing2.png?1481548624068", id:"fing2"},
		{src:"images/fing3.png?1481548624068", id:"fing3"},
		{src:"images/handos.png?1481548624068", id:"handos"},
		{src:"images/head2.png?1481548624068", id:"head2"},
		{src:"images/hear.png?1481548624068", id:"hear"},
		{src:"images/note.png?1481548624068", id:"note"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;