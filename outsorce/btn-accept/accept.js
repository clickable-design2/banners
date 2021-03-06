(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 260,
	height: 65,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Accept2.png?1486463171184", id:"Accept2"},
		{src:"images/active1.png?1486463171184", id:"active1"},
		{src:"images/hover1.png?1486463171184", id:"hover1"},
		{src:"images/normal1.png?1486463171184", id:"normal1"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.Accept2 = function() {
	this.initialize(img.Accept2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,59);


(lib.active1 = function() {
	this.initialize(img.active1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,255,64);


(lib.hover1 = function() {
	this.initialize(img.hover1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,65);


(lib.normal1 = function() {
	this.initialize(img.normal1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,65);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Accept2();
	this.instance.parent = this;
	this.instance.setTransform(51,10,0.798,0.798);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.active1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.033,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,263.5,64);


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

	// Слой 6
	this.instance = new lib.Accept2();
	this.instance.parent = this;
	this.instance.setTransform(54,10,0.798,0.798);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.instance_1 = new lib.normal1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,2,1.023,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2,265.9,65);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Accept2();
	this.instance.parent = this;
	this.instance.setTransform(51,8,0.798,0.798);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.instance_1 = new lib.hover1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,0,1.026,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,0,266.9,65);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(3.2,53.2,1,1,0,0,0,3.2,53.2);
	this.instance.alpha = 0.102;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-2,-2,10,111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,20,120);


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
	this.instance_1.alpha = 0.102;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_1.cache(-2,-2,82,117);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.3,-5,109.3,127);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(182.9,51.4,1,1,0,0,0,134.1,36);

	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(182.6,51.4,1,1,0,0,0,131.1,33.4);

	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(182.8,53,1,1,0,0,0,131.8,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.8,17.4,265.9,65);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(128.5,36,1,1,0,0,0,176.5,51);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,2.4,266.9,67.7);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AzmE9QgqAAAAgnIAAorQAAgnAqAAMAnMAAAQArAAAAAnIAAIrQAAAngrAAg");
	var mask_graphics_99 = new cjs.Graphics().p("AzmE9QgqAAAAgnIAAorQAAgnAqAAMAnMAAAQArAAAAAnIAAIrQAAAngrAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:183.4,y:50.6}).wait(99).to({graphics:mask_graphics_99,x:183.4,y:50.6}).wait(1));

	// Слой 3
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(-75,53.6,1,1,0,0,0,39,56.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:144.5,y:53.2},24,cjs.Ease.get(-1)).to({x:373,y:52.8},25,cjs.Ease.get(1)).wait(51));

	// Слой 1
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(181.6,50.5,1,1,0,0,0,133.6,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.8,17.4,265.9,65);


// stage content:



(lib.accept = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(123.5,33,1,1,0,0,0,176.5,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,6.6,452,126);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;