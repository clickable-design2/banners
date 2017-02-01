(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 200,
	height: 55,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/active.png?1485963463786", id:"active"},
		{src:"images/Addtocart.png?1485963463786", id:"Addtocart"},
		{src:"images/MorePaymentsOptions.png?1485963463786", id:"MorePaymentsOptions"},
		{src:"images/MorePaymentsOptionspngкопия.png?1485963463786", id:"MorePaymentsOptionspngкопия"},
		{src:"images/normal.png?1485963463786", id:"normal"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.active = function() {
	this.initialize(img.active);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,51);


(lib.Addtocart = function() {
	this.initialize(img.Addtocart);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,24);


(lib.MorePaymentsOptions = function() {
	this.initialize(img.MorePaymentsOptions);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,11);


(lib.MorePaymentsOptionspngкопия = function() {
	this.initialize(img.MorePaymentsOptionspngкопия);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,11);


(lib.normal = function() {
	this.initialize(img.normal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,55);


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
	this.instance = new lib.MorePaymentsOptionspngкопия();
	this.instance.parent = this;
	this.instance.setTransform(26,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.instance_1 = new lib.Addtocart();
	this.instance_1.parent = this;
	this.instance_1.setTransform(29,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.normal();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,4,200,55);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.MorePaymentsOptions();
	this.instance.parent = this;
	this.instance.setTransform(24,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.instance_1 = new lib.Addtocart();
	this.instance_1.parent = this;
	this.instance_1.setTransform(27,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.active();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2,4,1.011,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,4,201.1,51);


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

	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(182.6,51.4,1,1,0,0,0,131.1,33.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52.8,19,200,55);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AvGEOQghAAAAghIAAnZQAAghAhAAIeNAAQAhAAAAAhIAAHZQAAAhghAAg");
	var mask_graphics_29 = new cjs.Graphics().p("AvGEOQghAAAAghIAAnZQAAghAhAAIeNAAQAhAAAAAhIAAHZQAAAhghAAg");
	var mask_graphics_59 = new cjs.Graphics().p("AvGEOQghAAAAghIAAnZQAAghAhAAIeNAAQAhAAAAAhIAAHZQAAAhghAAg");
	var mask_graphics_109 = new cjs.Graphics().p("AvGEOQghAAAAghIAAnZQAAghAhAAIeNAAQAhAAAAAhIAAHZQAAAhghAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:104.8,y:31.1}).wait(29).to({graphics:mask_graphics_29,x:104.8,y:31.1}).wait(30).to({graphics:mask_graphics_59,x:104.8,y:31.1}).wait(50).to({graphics:mask_graphics_109,x:104.8,y:31.1}).wait(1));

	// Слой 3
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(-75,24.8,1,1,0,0,0,39,56.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({x:265},30,cjs.Ease.get(1)).wait(50).to({x:255},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(128.5,36,1,1,0,0,0,176.5,51);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.8,4,200,54.1);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(181.6,50.5,1,1,0,0,0,133.6,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.4,-16.7,330.3,113);


// stage content:
(lib.add_to_cart2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(123.5,33,1,1,0,0,0,176.5,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.4,-7.2,330.3,113);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;