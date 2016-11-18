(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.blick = function() {
	this.initialize(img.blick);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,46);


(lib.cake = function() {
	this.initialize(img.cake);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,199);


(lib.fon1 = function() {
	this.initialize(img.fon1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,660,250);


(lib.got = function() {
	this.initialize(img.got);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,21);


(lib.gots = function() {
	this.initialize(img.gots);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,15);


(lib.hoch = function() {
	this.initialize(img.hoch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,24);


(lib.lawash = function() {
	this.initialize(img.lawash);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,111);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,47);


(lib.mint = function() {
	this.initialize(img.mint);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,83);


(lib.sushi = function() {
	this.initialize(img.sushi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,197,115);


(lib.tvorog = function() {
	this.initialize(img.tvorog);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,128);


(lib.vkus = function() {
	this.initialize(img.vkus);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,21);// helper functions:

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


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blick();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,28,46), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,69,47), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkGCnIgFgEQgJgEgLgLQg1g1gZgcIgZgiIgPgUQgOgQgigcIgXgTQgQgOgEgIQgDgHAAgIQABgIAFgFQAMgLAaANQAaANASAQQAEAFAFACIALAEQAFACAGAHIAIAMQAGAIAPANQANAMALAPIALANQAEADALAFQAJAFAMASIAWAgQAIALAFACQAIAEAQgFIAjgOQAVgJAQABQARAAAHAIQBKgnB+g6IC2hUQBogsBrgbQAOgDAGABQAFABAEAEQAEAFgBAFQgBAHgLAGQgOAJgeANImnC3IjABVQgWAKgNAEQgUAHgRAAIgEAAQgJAAgGgDg");
	this.shape.setTransform(50,10.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,-6.4,100,34.1), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lawash();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,168,111), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,660,250), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mint();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,95,83), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cake();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,268,199), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.got();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,89,21), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gots();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,110,15), null);


(lib.vkus_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vkus();
	this.instance.parent = this;
	this.instance.setTransform(-51,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.vkus_1, new cjs.Rectangle(-51,-10.5,102,21), null);


(lib.sushi_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sushi();
	this.instance.parent = this;
	this.instance.setTransform(-90,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sushi_1, new cjs.Rectangle(-90,-54,197,115), null);


(lib.hoch_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hoch();
	this.instance.parent = this;
	this.instance.setTransform(-61,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hoch_1, new cjs.Rectangle(-61,-12,122,24), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(34.4,51,0.547,2.387,30,0,0,14.1,22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,68.2,102.7), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(38.3,12.6,1,1,0,0,0,34,51.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:162.1},42).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.3,-38.7,68.2,102.7);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(55,16,1,1,0,0,0,55,7.5);

	this.instance_1 = new lib.hoch_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(182.1,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,243.1,24), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(44.5,10.5,1,1,0,0,0,44.5,10.5);

	this.instance_1 = new lib.vkus_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.6,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,201.6,26.6), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(122.8,13.2,1,1,0,0,0,100.8,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05,x:122.9,y:13.3},7,cjs.Ease.get(-1)).to({scaleX:1.09,scaleY:1.09},7,cjs.Ease.get(1)).to({regX:100.9,scaleX:1.04,scaleY:1.04},8,cjs.Ease.get(-1)).to({regX:100.8,scaleX:1,scaleY:1,x:122.8,y:13.2},7,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(123.5,38.5,1,1,0,0,0,121.5,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.95,scaleY:0.95},7,cjs.Ease.get(-1)).to({scaleX:0.89,scaleY:0.89,x:123.6},7,cjs.Ease.get(1)).to({regX:121.6,scaleX:0.95,scaleY:0.95},8,cjs.Ease.get(-1)).to({regX:121.5,scaleX:1,scaleY:1,x:123.5},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,0,243.1,50.5);


(lib.tvorog_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tvorog();
	this.instance.parent = this;
	this.instance.setTransform(-72.5,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-32.2,47.3,1.16,1.311,0,0,0,18.9,13.8);
	this.instance_1.alpha = 0.301;
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-2,-8,104,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.tvorog_1, new cjs.Rectangle(-72.5,-64,145,135.8), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgDDuQgKgCgOgFIgXgKQgggLgjADIgeAFQgHABgcAAQgsAAgjgCQgbgCgNgHQgHgEgSgRQgMgOgCgEQgDgHgBgTIgDhNQAAgQACgFQADgHAIgIIANgOQAFgHAGgWQAahXBCg9QASgQAPgJIAggQIAggQQATgJAPgDQALgDAggCQBHgEAjAEIACAAIAAAAQAHgCAKAEQAvANAVALQALAGAWAPQAiAZAUATQAcAZARAbQAYAoAIA8QAUAIALASQAFAMgCAHQgBAEgCACIABAJQAEAqgCAoQAAAQgDAJQgGAKgSAOQgNAKgKAEQgOAGgdAAIiIAAQgtAAgVAIQgPAGgIACQgJADgHgCQgFACgGAAIgFAAg");

	// Слой 3
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(-86.1,-1.2,1,1,0,0,0,13.9,23);
	this.instance.alpha = 0.301;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,0,0,0,34.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-34.8,-23.8,69.3,47.7), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lawash
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(381.1,200.6,1,1,0,0,0,84,55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(104).to({x:173.1},7).to({x:193.1},4).wait(38).to({x:186.1},0).to({x:378.2},7).wait(11));

	// sushi
	this.instance_1 = new lib.sushi_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(222.6,294.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({y:166.7},7).to({y:184.7},4).wait(38).to({y:174.7},4).to({y:294.7},4).wait(67));

	// mint
	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(111,237.6,1,1,0,0,0,47.5,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38).to({y:227.6},4).to({y:297.6},5).wait(113).to({y:227.6},8).to({y:237.6},2).wait(1));

	// cake
	this.instance_3 = new lib.Символ3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(198.1,184.5,1,1,0,0,0,134,99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({x:188.1},6).to({x:397.1},9).wait(113).to({x:190.1},8).to({x:198.1},2).wait(1));

	// tvorog
	this.instance_4 = new lib.tvorog_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(72.5,171.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(32).to({x:84.5},6).to({x:-87.5},9).to({x:82.5},7).to({x:72.5},4).wait(31).to({x:84.5},6).to({x:-87.5},9).to({x:82.5},7).to({x:72.5},4).wait(29).to({x:84.5},6).to({x:-87.5},9).to({x:82.5},9).to({x:72.5},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,85,465.1,270.7);


// stage content:
(lib.hoch_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lawash
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(289.6,148,1,1,0,0,0,282.6,142);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logo
	this.instance_1 = new lib.logo_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// got
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(159,82.9,1,1,0,0,0,122.5,27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// fon
	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(246,125,1,1,0,0,0,330,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(66,91.6,660,395.2);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/blick.png?1479128959240", id:"blick"},
		{src:"images/cake.png?1479128959240", id:"cake"},
		{src:"images/fon1.jpg?1479128959240", id:"fon1"},
		{src:"images/got.png?1479128959240", id:"got"},
		{src:"images/gots.png?1479128959240", id:"gots"},
		{src:"images/hoch.png?1479128959240", id:"hoch"},
		{src:"images/lawash.png?1479128959240", id:"lawash"},
		{src:"images/logo.png?1479128959240", id:"logo"},
		{src:"images/mint.png?1479128959240", id:"mint"},
		{src:"images/sushi.png?1479128959240", id:"sushi"},
		{src:"images/tvorog.png?1479128959240", id:"tvorog"},
		{src:"images/vkus.png?1479128959240", id:"vkus"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;