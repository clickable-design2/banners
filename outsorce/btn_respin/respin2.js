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
		{src:"images/active1.png?1486459174721", id:"active1"},
		{src:"images/hover2.png?1486459174721", id:"hover2"},
		{src:"images/normal.png?1486459174721", id:"normal"},
		{src:"images/ReSpin2.png?1486459174721", id:"ReSpin2"},
		{src:"images/strelka.png?1486459174721", id:"strelka"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.active1 = function() {
	this.initialize(img.active1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,63);


(lib.hover2 = function() {
	this.initialize(img.hover2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,65);


(lib.normal = function() {
	this.initialize(img.normal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,353,102);


(lib.ReSpin2 = function() {
	this.initialize(img.ReSpin2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,41);


(lib.strelka = function() {
	this.initialize(img.strelka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,58);


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


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.strelka();
	this.instance.parent = this;
	this.instance.setTransform(3,1,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,1,32.8,38.1);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ReSpin2();
	this.instance.parent = this;
	this.instance.setTransform(-16,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-8,141,41);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 3
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(41.7,32.9,1,1,0,0,0,20.9,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:19.4,regY:20,rotation:75.5,x:45.6,y:30.9},0).wait(1).to({rotation:142.2,x:48.7,y:33.4},0).wait(1).to({rotation:200,x:47.8,y:35.1},0).wait(1).to({rotation:248.9,x:45.8,y:35},0).wait(1).to({rotation:288.9,x:44.7,y:33.7},0).wait(1).to({rotation:320,x:44.6,y:32.4},0).wait(1).to({rotation:342.2,x:44.9,y:31.6},0).wait(1).to({rotation:355.5,x:45.3,y:31.2},0).wait(1).to({rotation:360,x:45.4,y:31},0).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(166.7,34.4,1,1,0,0,0,57.6,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// Слой 1
	this.instance_2 = new lib.hover2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,260,65);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(10,51.8,1,1,0,0,0,3.2,53.2);
	this.instance.alpha = 0.102;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,-1.4,6.4,106.6);


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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,0,92.8,113);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 3
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(46.9,32.9,1,1,0,0,0,20.9,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:19.4,regY:20,rotation:75.5,x:48.4,y:30.9},0).wait(1).to({rotation:142.2,x:49.3,y:33.4},0).wait(1).to({rotation:200,x:47.8,y:35.1},0).wait(1).to({rotation:248.9,x:45.8,y:35},0).wait(1).to({rotation:288.9,x:44.7,y:33.7},0).wait(1).to({rotation:320,x:44.6,y:32.4},0).wait(1).to({rotation:342.2,x:44.9,y:31.6},0).wait(1).to({rotation:355.5,x:45.3,y:31.2},0).wait(1).to({rotation:360,x:45.4,y:31},0).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(171.5,34.4,1,1,0,0,0,57.6,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// Слой 1
	this.instance_2 = new lib.normal();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2,0,0.755,0.706);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,0,266.6,72.1);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// Слой 3
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(44.1,35.3,1,1,0,0,0,20.9,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:19.4,regY:20,rotation:68.4,x:45.3,y:33.1},0).wait(1).to({rotation:129.6,x:46.6,y:35.2},0).wait(1).to({rotation:183.6,x:45.6,y:37.2},0).wait(1).to({rotation:230.4,x:43.7,y:37.6},0).wait(1).to({rotation:270,x:42.3,y:36.8},0).wait(1).to({rotation:302.4,x:41.8,y:35.5},0).wait(1).to({rotation:327.6,x:41.9,y:34.5},0).wait(1).to({rotation:345.6,x:42.2,y:33.8},0).wait(1).to({rotation:356.4,x:42.5,y:33.5},0).wait(1).to({rotation:360,x:42.6,y:33.4},0).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(169.1,36.8,1,1,0,0,0,57.6,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11));

	// Слой 1
	this.instance_2 = new lib.active1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2,2,1.008,1.026);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,262.1,64.7);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(182.9,51,1,1,0,0,0,134.1,36);

	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(184.2,51.5,1,1,0,0,0,130,32.5);

	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(182.6,51.4,1,1,0,0,0,131.1,33.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50.8,15,266.6,72.1);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(128.5,36,1,1,0,0,0,176.5,51);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.8,0,266.6,72.1);


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
p.nominalBounds = new cjs.Rectangle(50.8,15,266.6,72.1);


// stage content:



(lib.respin2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(123.5,33,1,1,0,0,0,176.5,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.8,11.6,446.2,113);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;