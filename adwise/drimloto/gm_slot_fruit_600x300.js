(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.blik = function() {
	this.initialize(img.blik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,80);


(lib.blur = function() {
	this.initialize(img.blur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,170);


(lib.frame = function() {
	this.initialize(img.frame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,286,136);


(lib.Layer1 = function() {
	this.initialize(img.Layer1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,140);


(lib.Layer2 = function() {
	this.initialize(img.Layer2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,146);


(lib.Layer3 = function() {
	this.initialize(img.Layer3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,142);


(lib.Layer4 = function() {
	this.initialize(img.Layer4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,134);


(lib.Layer5 = function() {
	this.initialize(img.Layer5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,148);


(lib.Layer6 = function() {
	this.initialize(img.Layer6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,128);


(lib.logos = function() {
	this.initialize(img.logos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,69);// helper functions:

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


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.647)").s().p("EgyyAYiMAAAgxDMBllAAAMAAAAxDgAzNKjMAmPAAAIAAucMgmPAAAg");
	this.shape.setTransform(325.1,157);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(0,0,650.2,314.1), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B30E31","#EE0D46","#B40D30"],[0,0.518,1],-105.5,0,105.6,0).s().p("AvkD/Qg6AAAAg6IAAmJQAAg6A6AAIfJAAQA6AAAAA6IAAGJQAAA6g6AAg");
	this.shape.setTransform(105.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("AvkD/Qg6AAAAg7IAAmIQAAg6A6AAIfJAAQA6AAAAA6IAAGIQAAA7g6AAg");
	this.shape_1.setTransform(105.5,27.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,211.1,52.8), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FEEC00").ss(2,2).p("EgwzAYSMAAAgwjMBhmAAAMAAAAwjg");
	this.shape.setTransform(319.6,149.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(6.2,-6.5,626.7,312.7), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD400").s().p("AAACJIiyBzIABgBIgDABIBGjFIilhvIDNAAIBGjEIBEDEIDQAAIinBwIBGDEg");
	this.shape.setTransform(27.6,25.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,55.3,50.5), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,204,0.2)","rgba(255,255,204,0.608)","rgba(255,255,204,0.651)","rgba(255,255,204,0.576)","rgba(255,255,204,0)"],[0,0.255,0.525,0.753,1],0,48.1,0,-48).s().p("Az1HMIAAuYMAnrAAAIAAOYg");
	this.shape.setTransform(127,46.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,254.1,92.1), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blur();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,132,170), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Layer6();
	this.instance.parent = this;
	this.instance.setTransform(6,-67,0.318,0.318);

	this.instance_1 = new lib.Layer5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6,-167,0.277,0.277);

	this.instance_2 = new lib.Layer4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9,-262,0.288,0.288);

	this.instance_3 = new lib.Layer3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(12,27,0.31,0.31);

	this.instance_4 = new lib.Layer2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(6,124,0.347,0.347);

	this.instance_5 = new lib.Layer1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(6,-366,0.318,0.318);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7693D0").s().p("EgGFAt5MAAAhbxIMLAAMAAABbxg");
	this.shape.setTransform(39,-97.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,-391.4,78,587.3), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(1,-7,1,1.062);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(1,-7,640,323.8), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logos();
	this.instance.parent = this;
	this.instance.setTransform(3,2,0.929,0.929);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(3,2,77.1,64.1), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blik();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,79,80), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADyBBIAAh/IAlAAIAAA+IABAAIBKhAIAEAAIAAB+IglAAIAAg+IAAAAIhLBBgAujA/IgTgEIAAgfQAIAEAKACQAKACAJAAIALgBIAHgCQAEgDABgDQACgCAAgDQABgGgGgDQgFgEgJAAIgQAAIAAgWIAPAAQAHAAAFgEQAFgCAAgFQAAgFgGgCQgFgEgJAAQgJAAgLACQgKADgFACIAAgeQASgGAXAAQALgBAKADIAJAEIAJAEQAFAEACAGQAEAGAAAIQgBAHgEAIIgGAGQgDAEgFACQAFABAFACQAEADADAEQACADACAFIABAKQAAAJgDAIQgFAGgHAGQgIAFgLADQgJADgNAAQgNAAgKgCgAMGA+IAAh8IAlAAIAABgIAhAAIAAhgIAmAAIAABgIAfAAIAAhgIAmAAIAAB8gALLA+IAAh8IAlAAIAAB8gAJWA+IAAh8IAlAAIAAAvIAVAAQALABAKADQAKACAFAGQAEADAEAGQACAFABAFIABAJQAAAIgCAIQgEAGgGAFQgMAKgRAAgAJ7AkIAOAAQASAAAAgNQAAgHgEgDQgFgEgHAAIgQAAgAHkA+IAAh8IAzAAQAYABAMANQAHAFADAIQADAHAAAJQAAAJgDAIQgDAGgHAGQgGAHgIACQgJAEgLAAIgQAAIAAAngAIJgCIAFAAQALAAAFgFQAGgDAAgJQAAgHgFgDQgFgFgIAAIgJAAgAF8A+IAAh8IBaAAIAAAcIg0AAIAABggAC3A+IAAh8IAlAAIAAB8gABCA+IAAh8IAlAAIAAAvIAVAAQALABAKADQAKACAFAGQAFADADAGQADAFABAFIAAAJQAAAIgCAIQgEAGgGAFQgMAKgSAAgABnAkIAOAAQASAAAAgNQAAgHgFgDQgDgEgIAAIgQAAgAg5A+IAAh8IA8AAQAJABAGACQAHACAFAEQAFAFACAGQADAFAAAIQAAAHgDAGQgEAGgFAGIAAABQAEACAEACIAHAHIADAIIACAJQAAAIgDAHQgDAGgFAGQgGAFgHADQgIACgIAAgAgVAiIAUAAQAHAAADgDQAEgDgBgFQABgHgFgCQgEgEgGAAIgTAAgAgVgMIAPAAQAFAAACgEQAEgCABgGQgBgFgDgCQgCgDgGgBIgPAAgAjhA+IAAh8IAlAAIAAAvIAUAAQAMAAAKAEQAJACAFAGQAFADADAGIADAKIACAJQAAAIgDAIQgDAGgGAFQgHAGgGACQgIADgJgBgAi8AkIARAAQAGAAAEgDQAEgEAAgGQABgHgFgDQgFgEgGAAIgQAAgAk3A+IAAhgIghAAIAAgcIBpAAIAAAcIgjAAIAABggAmAA+IgGgNIgrAAIgGANIgkAAIA+h+IAEAAIA9B+gAmRAZIgKgZIgBAAIgKAZIAVAAgApEA+IAAh8IA0AAQAXABANANQAHAFADAIQADAHAAAJQAAAJgDAIQgDAGgHAGQgGAHgJACQgJAEgLAAIgPAAIAAAngAofgCIAGAAQAKAAAGgFQAFgDAAgJQAAgHgEgDQgGgFgHAAIgKAAgAq/A+IABh8IBdAAIAAAbIg4AAIAAAUIAUAAQAMABAKADQAIACAGAFQAFAEADAFIADAKIACAJQAAAFgCAFIgDAIQgEAHgHAFQgHAFgIACQgHABgHAAgAqZAkIANAAQAJAAAFgDQAEgDAAgHQAAgHgEgDQgFgEgGAAIgQAAgArwA+IgFgNIgsAAIgGANIgkAAIA+h+IAFAAIA8B+gAsAAZIgLgZIgLAZIAWAAg");
	this.shape.setTransform(105.3,26.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(105.5,25.3,1.131,1,0,0,0,105.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-13.8,-0.2,238.7,52.8), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.9,-6.8,627.3,313.3);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(27.6,25.2,1,1,0,0,0,27.6,25.2);
	this.instance.alpha = 0.691;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,55.3,50.5), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(127,46.1,1,1,0,0,0,127,46.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,254.1,92.1);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(66,85,1,1,0,0,0,66,85);
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-2,-2,136,174);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({skewY:180},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,140,178);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 11
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(121.1,582.6,1,1,0,0,0,105.5,26.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(158).to({_off:false},0).wait(1).to({regY:26.1,x:121.7,y:537.5},0).wait(1).to({x:122,y:510.1},0).wait(1).to({x:122.3,y:493.6},0).wait(1).to({x:122.4,y:480.5},0).wait(1).to({x:122.6,y:469.1},0).wait(1).to({x:122.7,y:460.1},0).wait(1).to({x:122.8,y:453.4},0).wait(1).to({x:122.9,y:448.4},0).wait(1).to({y:444.9},0).wait(1).to({x:123,y:442.3},0).wait(1).to({regY:26.4,y:440.8},0).wait(76).to({x:121.1,y:611.6},11).wait(1));

	// Слой 10
	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(124.6,421.1,1,1,0,0,0,325.1,157);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(158).to({_off:false},0).to({alpha:1},11).wait(76).to({alpha:0},11).wait(1));

	// Слой 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzFHOIAAuYILdAAIAAOYgAHpHLIAAuYILdAAIAAOYgAlvHLIAAuYILbAAIAAOYg");
	mask.setTransform(124,442.2);

	// Слой 7
	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(123.5,441.7,1,1,0,0,0,127,46.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(112).to({_off:false},0).to({alpha:1},6).wait(127).to({alpha:0},7).to({_off:true},1).wait(4));

	// Слой 6 - копия: 2
	this.instance_3 = new lib.Символ9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(208.4,441.2,0.585,0.585,0,0,0,66,85.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).to({alpha:0.602},8).wait(71).to({alpha:0.809},0).to({_off:true},1).wait(156));

	// Слой 6 - копия
	this.instance_4 = new lib.Символ9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(122.9,441.2,0.585,0.585,0,0,0,66,85.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21).to({_off:false},0).to({alpha:0.602},8).wait(60).to({alpha:0.809},0).to({_off:true},1).wait(167));

	// Слой 6
	this.instance_5 = new lib.Символ9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(39.4,441.2,0.585,0.585,0,0,0,66,85.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({_off:false},0).to({alpha:0.602},8).wait(49).to({alpha:0.809},0).to({_off:true},1).wait(178));

	// Символ 6
	this.instance_6 = new lib.Символ6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(208,440.5,1,1,0,0,0,38,49);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:39,regY:-97.7,x:209,y:283.8},0).wait(1).to({y:277.3},0).wait(1).to({y:272.6},0).wait(1).to({y:268.6},0).wait(1).to({y:265.2},0).wait(1).to({y:262.9},0).wait(1).to({y:261.2},0).wait(1).to({y:259.9},0).wait(1).to({regX:38,regY:49,x:208,y:405.5},0).wait(1).to({regX:39,regY:-97.7,x:209,y:259.8},0).wait(1).to({y:261.3},0).wait(1).to({y:263.6},0).wait(1).to({y:266.6},0).wait(1).to({y:270.8},0).wait(1).to({y:276.3},0).wait(1).to({y:283.1},0).wait(1).to({y:291.2},0).wait(1).to({y:299.9},0).wait(1).to({y:308.7},0).wait(1).to({y:317.8},0).wait(1).to({y:328.6},0).wait(1).to({y:343.6},0).wait(1).to({y:364.6},0).wait(1).to({regX:38,regY:49,x:208,y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).wait(1).to({regX:39,regY:-97.7,x:209,y:448.3},0).wait(1).to({y:487.2},0).wait(1).to({y:514.5},0).wait(1).to({y:534.5},0).wait(1).to({y:550.6},0).wait(1).to({y:562.9},0).wait(1).to({y:571.9},0).wait(1).to({y:578.5},0).wait(1).to({y:583.5},0).wait(1).to({regX:38,regY:49,x:208,y:734},0).wait(146));

	// Символ 6
	this.instance_7 = new lib.Символ6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(122,440.5,1,1,0,0,0,38,49);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:39,regY:-97.7,x:123,y:283.8},0).wait(1).to({y:277.3},0).wait(1).to({y:272.6},0).wait(1).to({y:268.6},0).wait(1).to({y:265.2},0).wait(1).to({y:262.9},0).wait(1).to({y:261.2},0).wait(1).to({y:259.9},0).wait(1).to({regX:38,regY:49,x:122,y:405.5},0).wait(1).to({regX:39,regY:-97.7,x:123,y:259.8},0).wait(1).to({y:261.3},0).wait(1).to({y:263.6},0).wait(1).to({y:266.6},0).wait(1).to({y:270.8},0).wait(1).to({y:276.3},0).wait(1).to({y:283.1},0).wait(1).to({y:291.2},0).wait(1).to({y:299.9},0).wait(1).to({y:308.7},0).wait(1).to({y:317.8},0).wait(1).to({y:328.6},0).wait(1).to({y:343.6},0).wait(1).to({y:364.6},0).wait(1).to({regX:38,regY:49,x:122,y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).wait(1).to({regX:39,regY:-97.7,x:123,y:462.2},0).wait(1).to({y:501.3},0).wait(1).to({y:526.3},0).wait(1).to({y:545.5},0).wait(1).to({y:559.6},0).wait(1).to({y:569.5},0).wait(1).to({y:576.5},0).wait(1).to({y:581.4},0).wait(1).to({y:584.8},0).wait(1).to({regX:38,regY:49,x:122,y:734},0).wait(157));

	// Символ 6
	this.instance_8 = new lib.Символ6();
	this.instance_8.parent = this;
	this.instance_8.setTransform(38,440.5,1,1,0,0,0,38,49);

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:39,regY:-97.7,x:39,y:283.8},0).wait(1).to({y:277.3},0).wait(1).to({y:272.6},0).wait(1).to({y:268.6},0).wait(1).to({y:265.2},0).wait(1).to({y:262.9},0).wait(1).to({y:261.2},0).wait(1).to({y:259.9},0).wait(1).to({regX:38,regY:49,x:38,y:405.5},0).wait(1).to({regX:39,regY:-97.7,x:39,y:259.8},0).wait(1).to({y:261.3},0).wait(1).to({y:263.6},0).wait(1).to({y:266.6},0).wait(1).to({y:270.8},0).wait(1).to({y:276.3},0).wait(1).to({y:283.1},0).wait(1).to({y:291.2},0).wait(1).to({y:299.9},0).wait(1).to({y:308.7},0).wait(1).to({y:317.8},0).wait(1).to({y:328.6},0).wait(1).to({y:343.6},0).wait(1).to({y:364.6},0).wait(1).to({regX:38,regY:49,x:38,y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).wait(1).to({regX:39,regY:-97.7,x:39,y:445.7},0).wait(1).to({y:480.3},0).wait(1).to({y:504.8},0).wait(1).to({y:524.8},0).wait(1).to({y:542.7},0).wait(1).to({y:557.2},0).wait(1).to({y:568},0).wait(1).to({y:576},0).wait(1).to({y:582.3},0).wait(1).to({regX:38,regY:49,x:38,y:734},0).wait(168));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.8,396,244.4,92.4);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(39.5,40,1,1,0,0,0,39.5,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:185.1},14,cjs.Ease.get(-1)).to({x:341.1},15,cjs.Ease.get(1)).to({_off:true},1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,80);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 - копия (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ADtC0IgCgBIgGgCQgOgHgMgMQgGgHgDgHQgDgHgBgIQgCgXACgRQABgPAGgJQAEgGAGgDIACgGIANgKQAOgLAIgEQALgEASAAQArgBAVAUQAIAHAGAMQAGAJACAHQACAJAAASQAAAbgEAMQgCAJgJAOQgIAKgFADQgHAEgKACQgXAGgRAAIgEAAQgTAAgQgJgAEFBEIgWARIgBABIAIAkIADAHQACAEAEADIADADIAIADIAFABIAIgBIANgCIAFAAIADgEIAHgGQACgDADgHIADgEIABgTIgBgIIgCgFQgCgFgFgEQgDgEgEgCIgSgCIgHgBQgIAAgFACgABaC8IgDgBIgEgCIgBgBIgDgBIgBgCIgBgBIgBgCIgBgBIAAgBIgCgCIAAgBIAAgCIgBgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgBIAAgBIAAgCIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIgZAAIgEgBIgDAAIgDgCIgDgCIgBgBIgCgBIgCgCIAAgBIgBgCIgBgBIgBgCIAAgBIAAgBIAAgCIAAgCIAAgBIgBgBIABgBIAAgCIAAgCIAAgBIAAgBIABgCIABgBIAAgCIABgBIACgBIABgCIABgBIADgCIACgBIADgBIACAAIAEAAIAAgBIAvAAIABAAIAxAAIAEABIADABIADABIADABIABABIACACIABACIABABIABABIABACIAAABIABACIAAABIABACIAAABIAAABIAAACIAAABIAAACIgBABIAAABIgBACIAAACIgBABIgBABIAAACIgCABIgBACIgCABIgCABIgDACIgCABIgCAAIgEABIgbAAIAAABIAAABIAAABIAAACIAAABIAAACIAAABIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAABIAAACIAAABIAAACIAAABIAAABIAAACIAAABIAAACIAAABIAAABIAAACIAAACIAAABIAAABIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAABIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAABIAAABIAAACIAAABIAAACIAAABIAAABIAAACIAAABIAAACIAAABIAAABIAAACIAAACIgBABIAAABIAAACIAAABIgBACIAAABIgBACIgBABIAAABIgBACIgCABIgBACIgCABIgCABIgDACIgEABIgEABIgEgBgAh4CzIgCgCIgGgCQgOgHgMgMQgGgHgDgHQgDgGgBgJQgDgXADgRQABgOAGgJQAEgGAFgEIADgFQAEgFAJgGQAOgLAIgDQAKgFATAAQArgBAVAUQAHAHAHAMIAHAQQACAJAAASQAAAbgDAMQgCAJgJAOQgIALgFADQgHADgKACQgYAGgQAAIgGAAQgSAAgPgIgAhgBDIgXAQIAAACQADAMAFAXIACAIQACADAEADIADADIAJADIAFACIAIgBIANgCIAFgBIADgDIAGgGQADgEADgHIADgDIABgTIgBgJIgDgFQgCgEgEgFQgDgEgFgCIgSgCIgHAAQgIAAgEACgAlfC3QgLgHACgOQAAgFAJgRQADgEANgeIAOgcIASghQADgGAEgEIAAgBQAEgLANgDQANgCAHAKQAEAFAEAJIATAlIAeBFIAEAMQABANgKAHQgKAHgMgEQgIgEgFgJIgIgSQgHgTgUgpQgPAbgJAVQgLAZgFAIQgEAGgHAFQgFADgFAAQgHAAgGgEgAAvgYIgDgBIgEgBIgCgBIgBgCIgCgCIgBgBIgBgBIgBgBIgBgCIAAgCIgBgBIAAgBIgBgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgBIAAgBIAAgCIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIABgCIAAgBIABgBIAAgCIABgCIABgBIABgBIABgCIACgBIABgCIACgBIAEgBIADgCIAEAAIAAAAIAFAAIACACIAEABIACABIACACIABABIACACIAAABIABABIABACIABACIAAABIAAABIABACIAAABIAAACIAAABIAAABIAAACIAAABIAAACIAAABIAAABIAAACIAAABIAAACIAAABIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAABIAAACIAAABIAAACIAAABIAAABIAAACIAAACIAAABIAAABIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAABIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAABIAAACIAAABIAAACIAAABIAAABIAAACIAAABIAAACIAAABIAAABIAAACIAAABIAAACIAAABIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAABIAAACIAAABIgBACIAAABIAAABIgBACIgBACIgBABIAAABIgCABIgBACIgCACIgCABIgEABIgCABIgFABIgEgBgAhhgbIgDgBIgDgCIgCgBIgCgCIgCgBIgBgCIgBgBIgBgBIgBgCIAAgBIgBgCIAAgBIAAgCIAAgBIAAgCIgBgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgBIAAgBIAAgCIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgBIAAgBIAAgCIAAgCIABgBIAAgBIAAgCIAAgBIABgCIAAgBIABgCIABgBIABgBIABgCIABgCIACgBIACgBIADgBIADgBIABgBIAFAAIAAAAIAEAAIADABIACABIAOAAIAjAAQAIADADACQADABAEAEQAGAFADAGQAHANAAAUQAAAXgKAMQgKAMgOADQgMADgRAAIgHAAIAAAAIAAACIAAABIAAACIAAABIAAABIAAACIAAABIAAACIAAABIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIgBABIAAACIAAABIAAABIAAACIgBABIAAACIgBABIgBABIAAACIgCACIgBABIgCABIgCABIgDACIgCABIgCABIgEAAIgFAAgAhGiIIAAACIAAABIAAABIAAACIAAABIAAACIAAABIAAABIAAACIAAACIAAAAIATAAIAFgDQACgCgBgGIgCgEIgEgBIgTAAIAAABgAi1gbIhMgDIgJAAIgFAAQgOABgGgOQgEgIACgLQADgJAIgNIAMgWIAHgRIAMgWIAMgZQAIgOAOAAQALgCAHAKIAEAFQAFAFAEAMIAKAcQAGAQAGAKQAMASABAIQABAFgBAEQADADABAGQACAHgEAJQgEAHgHADQgFADgKAAIgGAAgAjphQIgCAFIAhABIABAAQgMgUgDgIIgDgJIgOAfgABughQgGgFgBgIQgBgFABgEIgBgGIAIg0QAAgHAEgLIAGgRIADgNIADgEQABgFADgEQAFgGAIgCQAHgBAHADQAHAEADAGQAEAIgCAIIAAADIAWAxIADgGIALgWIAFgPIANgXIACgBQAAgEABgDQAHgMANAAQAOAAAGAMQACAEABAIIACATIAAAQIADAMIAGAgIACAPIAAADIAEAIQADAHgCAHQgDAHgHAFQgGAEgIgBQgHgBgGgFQgDgDgBgEQgEgDgCgEIgDgMIgDgVIgGAPQgFARgEAFQgEAEgFACQgDAFgHACIgHACQgFAAgFgBQgKgEgHgNIgPggIAAADIgBANQgBAIgCAFIAAABIgBAHQgDAHgEAEQgGAFgIAAQgJAAgGgFg");
	mask.setTransform(65.4,46.1);

	// Слой 3
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(-41.6,48,1,1,0,0,0,39.5,40);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcBFIAAg7IgNAAQgGAAgFABQgEACgDADQgEAEgDAFIgEALIgHAXIgFAKIgTAAIAGgNIAIgYIAFgMQADgFAEgEQAFgFAHgCIAAgBQgHgBgFgCQgGgCgEgFQgEgEgCgGQgCgGAAgGQAAgJADgHQADgHAGgFQAGgFAKgDQAJgDANAAQAMAAAVADIAACGgAAAg1QgGACgEADQgFADgCAEQgDAGAAAGQAAAGADAFQACAFAFAEIAKAFQAGABAHAAIAPAAIAAgxQgGgCgLAAIgLABg");
	this.shape.setTransform(363.8,57.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmBEIAAiHIBKAAIAAAPIg4AAIAAArIA0AAIAAANIg0AAIAAAxIA6AAIAAAPg");
	this.shape_1.setTransform(354.4,57.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpBFIAAiGIAigDQAMAAAJADQAJADAHAGQAGAFADAHQADAHAAAJQAAAJgDAIQgDAHgFAEQgDAEgFADQgEADgGACQgOADgIAAIgPgBIAAA3gAgYg0IAAA0QAGABAJAAQAIAAAFgBQAHgCAEgDQAEgEADgGQACgFAAgHQAAgGgCgGQgDgFgEgDQgEgDgGgCQgFgCgHAAQgLAAgGACg");
	this.shape_2.setTransform(344,57.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmBEIAAiHIBKAAIAAAPIg4AAIAAArIA0AAIAAANIg0AAIAAAxIA7AAIAAAPg");
	this.shape_3.setTransform(333.7,57.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBEIAAh4IgqAAIAAgPIBkAAIAAAPIgpAAIAAB4g");
	this.shape_4.setTransform(323.3,57.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNBFIgMgEQgGgCgEgEIgJgIIgIgKIgFgMQgCgGgBgHIgBgPIABgOQABgIACgGIAGgNIAHgKIAKgIIAKgGIAMgEQAHgCAGAAQAHAAAGACIAMAEIALAGIAIAIIAIAKIAFAMIADANIABAPQAAAHgBAIQgBAIgDAHIgGAMIgHAKIgKAIQgFAEgGACQgFACgGABIgMACIgNgCgAgJg2QgFABgEADQgIAEgGAIQgFAIgDAKQgDAKAAALQAAALADAKQADAKAFAHQAGAIAIAFQAJAEAJAAQAKAAAIgEQAIgFAGgIQAGgHADgLQADgKAAgLQAAgKgDgKQgDgKgFgIQgGgIgIgEQgEgDgFgBIgKgBQgEAAgFABg");
	this.shape_5.setTransform(311.3,57.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag0A3QAIgBAGgGQAEgEADgHIADgOQACgLAAgXIAAg5IBPAAIAACIIgSAAIAAh5IgrAAIAAApQgBAegDANQgCALgEAIQgEAIgHAEQgNAHgIAAg");
	this.shape_6.setTransform(297.5,58);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAcBFIAAg7IgNAAQgGAAgFABQgEACgDADQgEAEgDAFIgEALIgHAXIgFAKIgTAAIAGgNIAIgYIAFgMQADgFAEgEQAFgFAHgCIAAgBQgHgBgFgCQgGgCgEgFQgEgEgCgGQgCgGAAgGQAAgJADgHQADgHAGgFQAGgFAKgDQAJgDANAAQAMAAAVADIAACGgAAAg1QgGACgEADQgFADgCAEQgDAGAAAGQAAAGADAFQACAFAFAEIAKAFQAGABAHAAIAPAAIAAgxQgGgCgLAAIgLABg");
	this.shape_7.setTransform(281.9,57.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAnBEIgPgrIgvAAIgPArIgSAAIAuiHIAVAAIAuCHgAAVAMIgOgnIgHgZIgGAZIgOAnIApAAg");
	this.shape_8.setTransform(270.9,57.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAhBEIAAhAIhBAAIAABAIgSAAIAAiHIASAAIAAA5IBBAAIAAg5IASAAIAACHg");
	this.shape_9.setTransform(258.1,57.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAhBEIAAhAIhBAAIAABAIgSAAIAAiHIASAAIAAA5IBBAAIAAg5IASAAIAACHg");
	this.shape_10.setTransform(244.9,57.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AglBEIAAiHIBIAAIAAAPIg2AAIAAArIA0AAIAAANIg0AAIAAAxIA5AAIAAAPg");
	this.shape_11.setTransform(233.7,57.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgqBEIAAiFQAIgCAYgBQAMAAAJACQAJADAGAFQAGAEADAGQADAGAAAIQAAAFgCAEQgCAFgCAEIgHAHIgKAFIAAAAIAKAEQAFACAEAEQAEAEADAGQACAGAAAHQAAAJgEAHQgDAHgFAFIgIAFIgLAEQgPADgMAAQgPAAgMgBgAgZA3IAPABQAIAAAEgCQAHgBAFgDQAEgDADgFQAEgGAAgHQAAgGgEgGQgCgFgFgDQgFgDgHgCQgEgBgIAAIgPAAgAgZg1IAAAsIARAAQAGAAAFgCIAJgFQAEgDACgEQACgEAAgFQAAgGgCgEQgCgFgFgCQgDgDgGgBQgEgCgHAAQgKAAgGACg");
	this.shape_12.setTransform(223.3,57.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIBEIAAh4IgpAAIAAgPIBjAAIAAAPIgqAAIAAB4g");
	this.shape_13.setTransform(212.4,57.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AABBFIgMgEQgGgCgFgDQgFgDgFgEIgIgKIgGgMIgEgOIgBgQIABgPIAEgNIAGgNIAJgKQAEgFAGgDQAGgEAGgCIANgFIAPgBQARAAAQAHIgFAOQgFgDgHgBQgHgCgIAAQgMAAgJAEQgKADgHAIQgHAHgEAKQgDAPAAAJQAAAMADAKQAEAKAGAHQAHAHAKAFQAJADAMABQAIAAAIgCQAHgCAGgDIADAPQgFADgJABQgKADgMAAg");
	this.shape_14.setTransform(201.5,57.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgpBFIAAiGIAigDQAMAAAJADQAJADAHAGQAFAFADAHQAEAHAAAJQAAAJgDAIQgDAHgFAEQgDAEgFADQgEADgGACQgOADgIAAIgPgBIAAA3gAgYg0IAAA0QAGABAJAAQAIAAAFgBQAHgCAEgDQAEgEADgGQACgFAAgHQAAgGgCgGQgCgFgEgDQgFgDgGgCQgFgCgHAAQgLAAgGACg");
	this.shape_15.setTransform(190.7,57.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAmBEIgOgrIgwAAIgNArIgTAAIAviHIATAAIAvCHgAAUAMIgNgnIgHgZIgHAZIgNAnIAoAAg");
	this.shape_16.setTransform(178.7,57.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAsBVIgBghIhVAAIgCAhIgNAAIgBgvIAKgBIAIgOIAFgQQAEgKABgOQACgOAAgSIAAgjIBLAAIAAB5IAMABIgBAvgAgMgrQAAAQgBAOQgCANgEALIgLAaIA8AAIAAhqIgqAAg");
	this.shape_17.setTransform(166,59.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgpBEIACgOIAGABQAFgBAFgCQAEgCADgEQAGgFAEgKQACgDgDgFIgthcIAUAAIAbA7IAJAXIABAAIAIgXIAVg7IATAAIgdBGQgQAngIANQgHAIgHAEQgIAFgJAAQgHAAgDgCg");
	this.shape_18.setTransform(154.6,58);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AABBFIgMgEQgGgCgFgDQgFgDgFgEIgIgKIgGgMIgEgOIgBgQIABgPIAEgNIAGgNIAJgKQAEgFAGgDQAGgEAGgCIANgFIAPgBQARAAAQAHIgFAOQgFgDgHgBQgHgCgIAAQgMAAgJAEQgKADgHAIQgHAHgEAKQgDAPAAAJQAAAMADAKQAEAKAGAHQAHAHAKAFQAJADAMABQAIAAAIgCQAHgCAGgDIADAPQgFADgJABQgKADgMAAg");
	this.shape_19.setTransform(143.5,57.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgNBFIgMgEQgGgCgEgEIgJgIIgIgKIgFgMQgCgGgBgHIgBgPIABgOQABgIACgGIAGgNIAHgKIAKgIIAKgGIAMgEQAHgCAGAAQAHAAAGACIAMAEIALAGIAIAIIAIAKIAFAMIADANIABAPQAAAHgBAIQgBAIgDAHIgGAMIgHAKIgKAIQgFAEgGACQgFACgGABIgMACIgNgCgAgJg2QgFABgEADQgIAEgGAIQgFAIgDAKQgDAKAAALQAAALADAKQADAKAFAHQAGAIAIAFQAJAEAJAAQAKAAAIgEQAIgFAGgIQAGgHADgLQADgKAAgLQAAgKgDgKQgDgKgFgIQgGgIgIgEQgEgDgFgBIgKgBQgEAAgFABg");
	this.shape_20.setTransform(130.6,57.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgjBEIAAiHIBIAAIAAAPIg2AAIAAB4g");
	this.shape_21.setTransform(120,57.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAcBFIAAg7IgNAAQgGAAgFABQgEACgDADQgEAEgDAFIgEALIgHAXIgFAKIgTAAIAGgNIAIgYIAFgMQADgFAEgEQAFgFAHgCIAAgBQgHgBgFgCQgGgCgEgFQgEgEgCgGQgCgGAAgGQAAgJADgHQADgHAGgFQAGgFAKgDQAJgDANAAQAMAAAVADIAACGgAAAg1QgGACgEADQgFADgCAEQgDAGAAAGQAAAGADAFQACAFAFAEIAKAFQAGABAHAAIAPAAIAAgxQgGgCgLAAIgLABg");
	this.shape_22.setTransform(259.8,36.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAnBEIgPgrIgvAAIgPArIgSAAIAuiHIAVAAIAuCHgAAVAMIgOgnIgHgZIgGAZIgOAnIApAAg");
	this.shape_23.setTransform(248.8,36.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAhBEIAAhAIhBAAIAABAIgSAAIAAiHIASAAIAAA5IBBAAIAAg5IASAAIAACHg");
	this.shape_24.setTransform(236,36.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgrBDIAAiHIASAAIAAAzIARgBQAJAAAJADQALACAGAFQAIAGAEAHQAEALAAAIQAAAJgCAIQgDAHgFAFQgEAEgGADQgFADgHACQgQAEgKAAQgQAAgMgCgAgZgDIAAA5IAPABQAHAAAFgCQAIgBAEgEQAFgEADgFQADgHAAgHQAAgIgDgGQgDgFgFgEQgFgCgHgCQgFgBgHAAg");
	this.shape_25.setTransform(224.3,36.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag0A3QAIgBAGgGQAEgEADgHIADgOQACgMAAgWIAAg5IBPAAIAACIIgSAAIAAh5IgrAAIAAApQgBAdgDAOQgCALgEAHQgEAJgHAEQgNAHgIAAg");
	this.shape_26.setTransform(211.5,36.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAmBEIgOgrIgwAAIgNArIgTAAIAviHIATAAIAvCHgAAUAMIgNgnIgHgZIgHAZIgNAnIAoAAg");
	this.shape_27.setTransform(200.2,36.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAhBEIAAhAIhBAAIAABAIgSAAIAAiHIASAAIAAA5IBBAAIAAg5IASAAIAACHg");
	this.shape_28.setTransform(187.4,36.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNBFIgMgEQgGgCgEgEIgJgIIgIgKIgFgMQgCgGgBgHIgBgPIABgOQABgIACgGIAGgNIAHgKIAKgIIAKgGIAMgEQAHgCAGAAQAHAAAGACIAMAEIALAGIAIAIIAIAKIAFAMIADANIABAPQAAAHgBAIQgBAIgDAHIgGAMIgHAKIgKAIQgFAEgGACQgFACgGABIgMACIgNgCgAgJg2QgFABgEADQgIAEgGAIQgFAIgDAKQgDAKAAALQAAALADAKQADAKAFAHQAGAIAIAFQAJAEAJAAQAKAAAIgEQAIgFAGgIQAGgHADgLQADgKAAgLQAAgKgDgKQgDgKgFgIQgGgIgIgEQgEgDgFgBIgKgBQgEAAgFABg");
	this.shape_29.setTransform(173.8,36.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAiBEIAAg6IACg2IgBAAIgLAWIgOAWIgqBEIgSAAIAAiHIAQAAIAAA5IgBA5IAAAAQAHgOASgfIArhFIASAAIAACHg");
	this.shape_30.setTransform(160.3,36.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAoBVIgBghIhdAAIAAiIIASAAIAAB5IA9AAIAAh5IASAAIAAB5IAMABIgBAvg");
	this.shape_31.setTransform(147.4,38);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAmBEIgOgrIgwAAIgNArIgTAAIAuiHIAUAAIAvCHgAAUAMIgNgnIgHgZIgHAZIgNAnIAoAAg");
	this.shape_32.setTransform(134.3,36.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAhBEIAAhAIhBAAIAABAIgSAAIAAiHIASAAIAAA5IBBAAIAAg5IASAAIAACHg");
	this.shape_33.setTransform(121.5,36.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1 - копия: 2
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(65.5,48.5,1,1,0,0,0,41.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(27,16,344.4,64.1), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:27.6,regY:25.2,x:27.6,y:25.2,alpha:0},7).to({alpha:1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.3,50.5);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(173.5,101.9,1.454,1.454,0,0,0,27.7,25.2);

	this.instance_1 = new lib.Символ24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(530.9,34.6,1,1,0,0,0,27.6,25.2);

	this.instance_2 = new lib.Символ24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(160.8,270.2,1,1,0,0,0,27.6,25.2);

	this.instance_3 = new lib.Символ24();
	this.instance_3.parent = this;
	this.instance_3.setTransform(574.8,132.2,1.454,1.454,0,0,0,27.7,25.2);

	this.instance_4 = new lib.Символ24();
	this.instance_4.parent = this;
	this.instance_4.setTransform(67,182.6,1,1,0,0,0,27.6,25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_5 = new lib.Символ2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(1,-7,640,323.8), null);


// stage content:
(lib.gm_slot_fruit_600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndStop(244);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(245);
		}
		
		stage.canvas.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(300,152.5,0.959,0.959,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(287.2,49.5,1.174,1.174,0,0,0,192.6,43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.main = new lib.Символ8();
	this.main.parent = this;
	this.main.setTransform(300.2,-4.5,1.297,1.297,0,0,0,123,293.7);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 6
	this.instance_2 = new lib.frame();
	this.instance_2.parent = this;
	this.instance_2.setTransform(117,103,1.297,1.297);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgIBQIAAhHIhFAAIAAgRIBFAAIAAhHIASAAIAABHIBDAAIAAARIhDAAIAABHg");
	this.shape.setTransform(586.7,284);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgbBgQgMgEgIgHQgJgHgEgKQgFgJAAgKQAAgKADgIQADgHAEgIQAGgGAHgFQAGgFAKgDIgBgBQgHgEgGgFQgHgFgDgFQgIgLABgOQAAgLAEgKQAEgJAJgHQAIgHALgEQALgEAMAAQAOAAAKAFQALADAHAHQAHAGAFAKQADAIAAAJQAAAOgHALQgFAGgFAFQgHAGgJAEIAAABQAJADAIAFQAHAFAGAFQAFAHACAIQADAHAAAJQAAAMgGALQgFALgIAHQgKAIgMAEQgMAEgNAAQgOAAgNgFgAgSALQgHAEgEAFQgFAFgCAGQgCAHAAAHQAAAHACAGQADAIAFAEQAFAGAIACQAHAEAIAAQAJAAAHgDQAHgCAGgFQAEgFADgHQADgFAAgIQAAgJgDgHQgCgGgHgFQgFgFgIgEIgRgHQgJACgGAFgAgNhOQgGACgEAFQgFADgCAHQgCAFAAAGQAAAHACAGQADAGAFAFIALAHIAPAFQANgEAIgJQAEgEACgGQACgGAAgGQAAgNgHgJQgFgEgGgDQgGgDgJAAQgGAAgHADg");
	this.shape_1.setTransform(570.1,282.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAIBhIAAipIgBAAIghATIgGgVIAqgWIAWAAIAADBg");
	this.shape_2.setTransform(553.4,282.3);

	this.instance_3 = new lib.Символ1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(300,150,0.959,0.959,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(266,-236.2,641.9,767);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#000069",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1493994876913", id:"back"},
		{src:"images/blik.png?1493994876913", id:"blik"},
		{src:"images/blur.jpg?1493994876913", id:"blur"},
		{src:"images/frame.png?1493994876913", id:"frame"},
		{src:"images/Layer1.png?1493994876913", id:"Layer1"},
		{src:"images/Layer2.png?1493994876913", id:"Layer2"},
		{src:"images/Layer3.png?1493994876913", id:"Layer3"},
		{src:"images/Layer4.png?1493994876913", id:"Layer4"},
		{src:"images/Layer5.png?1493994876913", id:"Layer5"},
		{src:"images/Layer6.png?1493994876913", id:"Layer6"},
		{src:"images/logos.png?1493994876913", id:"logos"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;