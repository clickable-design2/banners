(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 230,
	height: 130,
	fps: 24,
	color: "#333333",
	opacity: 0.00,
	manifest: [
		{src:"images/golden_case.png?1489162046659", id:"golden_case"},
		{src:"images/hoverpngкопия.png?1489162046659", id:"hoverpngкопия"},
		{src:"images/normalpngкопия.png?1489162046659", id:"normalpngкопия"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.golden_case = function() {
	this.initialize(img.golden_case);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,157);


(lib.hoverpngкопия = function() {
	this.initialize(img.hoverpngкопия);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,77);


(lib.normalpngкопия = function() {
	this.initialize(img.normalpngкопия);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,65);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#FFCC66","#FFCC33","#FFCC99"],[0,0.314,0.714,1],-11.2,0,11.3,0).s().p("AhvEjIAApFIDfAAIAAJFg");
	this.shape.setTransform(11.3,29.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.6,58.4);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.normalpngкопия();
	this.instance.parent = this;
	this.instance.setTransform(-5,-8,0.685,0.685);

	this.instance_1 = new lib.hoverpngкопия();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4,-17,0.675,0.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-8,171.4,44.6);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.golden_case();
	this.instance.parent = this;
	this.instance.setTransform(-67,-51,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,-51,134.6,102.6);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqQFFIgIkUIAAgBIgBAAIgBAAIAAgBIAAgHIAAgKIAAgBIgCgcIAAgDIgCh2IgBgIIAAgKIABgEIgBgDIABgHIAAAAIAAgCIABgOIAKgpIAMgnQAFgPAJgXIAFgMQACgGADgDIABgEIAKgNIAKgWQADgEADgDIAEgHIABAAQBIh9BxgOIADgDIADgCIADgDIAHgCQAOgCAKADIABABIACAAIAGADIADAFQAjADAmAMIAHgBQANABASgCQAFgBAGABIADACIAEAAQAEABAFAFQAIAHAFAIIAFAGIACADQBzgiBVBFQBlAHgHAIQBXgyB3A+IAKAHIAcgEIACgBIANgDIAIgCIAFABIACgDQAIgIAFgCQAMgGAOAGQAFADAGAFIAGAGQAqACAkAJIAEAAIANABIAFABIAFAAIAKABQAHACAFAHIAJAMIADADQBZA4AOCKIACHRInFDOg");
	mask.setTransform(80.7,50.6);

	// Слой 3
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(-32.4,46.7,1.386,2.781,0,26.8,0,11.4,29.2);
	this.instance.alpha = 0.352;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-2,-2,27,62);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:2.78,x:80.7,y:46.8},24,cjs.Ease.get(-1)).to({scaleY:2.78,x:198.6,y:46.7},25,cjs.Ease.get(1)).wait(30).to({x:-32.4,alpha:0.512},1,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Анимация3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(80.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},79,cjs.Ease.get(-1)).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.5,-0.5,134.6,102.6);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(81,20.5,1,1,0,0,0,81,20.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:22.8},9,cjs.Ease.get(-1)).to({y:24.3},10,cjs.Ease.get(1)).to({y:22.9},10,cjs.Ease.get(-1)).to({y:20.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-17,171.4,53.6);


// stage content:



(lib.black_case_btn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(115,68.3,1,1,0,0,0,82,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// case
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(112.5,50.5,1,1,0,0,0,80.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(57.2,34.3,257.2,158);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;