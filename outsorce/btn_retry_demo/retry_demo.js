(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 160,
	height: 40,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/activepngкопия.png?1486459875171", id:"activepngкопия"},
		{src:"images/hoverpngкопия.png?1486459875171", id:"hoverpngкопия"},
		{src:"images/normalpngкопия.png?1486459875171", id:"normalpngкопия"},
		{src:"images/RetryDemo2.png?1486459875171", id:"RetryDemo2"},
		{src:"images/RetryDemo2pngкопия.png?1486459875171", id:"RetryDemo2pngкопия"},
		{src:"images/RetryDemo2pngкопия2.png?1486459875171", id:"RetryDemo2pngкопия2"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.activepngкопия = function() {
	this.initialize(img.activepngкопия);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,37);


(lib.hoverpngкопия = function() {
	this.initialize(img.hoverpngкопия);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,40);


(lib.normalpngкопия = function() {
	this.initialize(img.normalpngкопия);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,40);


(lib.RetryDemo2 = function() {
	this.initialize(img.RetryDemo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,30);


(lib.RetryDemo2pngкопия = function() {
	this.initialize(img.RetryDemo2pngкопия);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,30);


(lib.RetryDemo2pngкопия2 = function() {
	this.initialize(img.RetryDemo2pngкопия2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,30);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.RetryDemo2pngкопия();
	this.instance.parent = this;
	this.instance.setTransform(26,15,0.868,0.868);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.hoverpngкопия();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1,3,1.257,1.257);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,3,201.1,50.3);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFF99","#FFCC00"],[0,1],-3.2,0,3.2,0).s().p("AgVILQgKgKAAgNIAAvnQAAgNAKgKQAJgJAMAAQANAAAJAJQAJAKAAANIAAPnQAAANgJAKQgJAJgNAAQgMAAgJgJg");
	this.shape.setTransform(3.2,53.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.4,106.6);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFF99","#FFCC00"],[0,1],-19.6,-8,19.7,8).s().p("AghIxIlOiJQgegMAMgdIF7udQAKgeAeAMIFOCIQAeAMgMAeIl7OdQgHAVgRAAQgHAAgJgDg");
	this.shape.setTransform(39,56.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78,113);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.RetryDemo2();
	this.instance.parent = this;
	this.instance.setTransform(31,18,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.normalpngкопия();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4,6,1.25,1.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,6,200,50);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.RetryDemo2pngкопия2();
	this.instance.parent = this;
	this.instance.setTransform(29,17,0.864,0.871);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.activepngкопия();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3,6,1.26,1.325);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,6,199.1,49);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(16.7,50.5,1,1,0,0,0,3.2,53.2);
	this.instance.alpha = 0.141;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.5,-2.7,6.4,106.6);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(3.5,57.2,0.469,1,22.5,0,0,3.4,53.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39,56.5,1,1,0,0,0,39,56.5);
	this.instance_1.alpha = 0.141;
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,0,89.4,113);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(182.9,51,1,1,0,0,0,134.1,36);

	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(153.7,46.5,1,1,0,0,0,100,27.5);

	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(181.9,51.4,1,1,0,0,0,131.1,33.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52.8,21,200,50);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AuyD1QggAAAAgeIAAmtQAAgeAgAAIdlAAQAgAAAAAeIAAGtQAAAeggAAg");
	var mask_graphics_109 = new cjs.Graphics().p("AuyD1QggAAAAgeIAAmtQAAgeAgAAIdlAAQAgAAAAAeIAAGtQAAAeggAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:104.6,y:30.8}).wait(109).to({graphics:mask_graphics_109,x:104.6,y:30.8}).wait(1));

	// Слой 3
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(-75,24.8,1,1,0,0,0,39,56.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({x:265},30,cjs.Ease.get(1)).wait(51));

	// Слой 1
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(128.5,36,1,1,0,0,0,176.5,51);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.7,6.3,195.9,49.1);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(181.6,50.5,1,1,0,0,0,133.6,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.4,-16.7,330.2,113);


// stage content:
(lib.retry_demo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(98.4,24.1,0.796,0.721,0,0,0,176.6,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-4.6,262.9,81.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;