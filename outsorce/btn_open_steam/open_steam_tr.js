(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 220,
	height: 55,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/active1.png?1486378777314", id:"active1"},
		{src:"images/hover1.png?1486378777314", id:"hover1"},
		{src:"images/normal1.png?1486378777314", id:"normal1"},
		{src:"images/OpenSteamTrades.png?1486378777314", id:"OpenSteamTrades"},
		{src:"images/OpenSteamTradespngкопия.png?1486378777314", id:"OpenSteamTradespngкопия"},
		{src:"images/OpenSteamTradespngкопия2.png?1486378777314", id:"OpenSteamTradespngкопия2"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.active1 = function() {
	this.initialize(img.active1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,53);


(lib.hover1 = function() {
	this.initialize(img.hover1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,55);


(lib.normal1 = function() {
	this.initialize(img.normal1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,55);


(lib.OpenSteamTrades = function() {
	this.initialize(img.OpenSteamTrades);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,197,24);


(lib.OpenSteamTradespngкопия = function() {
	this.initialize(img.OpenSteamTradespngкопия);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,197,24);


(lib.OpenSteamTradespngкопия2 = function() {
	this.initialize(img.OpenSteamTradespngкопия2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,197,24);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.OpenSteamTradespngкопия();
	this.instance.parent = this;
	this.instance.setTransform(11,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.hover1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2,-1,1.015,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-1,223.3,55);


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
	this.instance = new lib.OpenSteamTrades();
	this.instance.parent = this;
	this.instance.setTransform(16,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.normal1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,2,1.022,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,2,224.9,55);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.OpenSteamTradespngкопия2();
	this.instance.parent = this;
	this.instance.setTransform(13,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.active1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2,3,1.019,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,3,220.1,53);


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
	this.instance.setTransform(182.9,51.4,1,1,0,0,0,134.1,36);

	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(153.8,46.5,1,1,0,0,0,100,27.5);

	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(181.9,51.4,1,1,0,0,0,131.1,33.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(49.8,17.4,224.9,55);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AwcEOQgjAAAAghIAAnZQAAghAjAAMAg4AAAQAkAAAAAhIAAHZQAAAhgkAAg");
	var mask_graphics_109 = new cjs.Graphics().p("AwcEOQgjAAAAghIAAnZQAAghAjAAMAg4AAAQAkAAAAAhIAAHZQAAAhgkAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:114.9,y:31.1}).wait(109).to({graphics:mask_graphics_109,x:114.9,y:31.1}).wait(1));

	// Слой 2
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(-75,24.8,1,1,0,0,0,39,56.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({x:277},30,cjs.Ease.get(1)).wait(51));

	// Слой 3
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(128.5,36,1,1,0,0,0,176.5,51);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,4,217.7,54.1);


// stage content:



(lib.open_steam_tr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(171.8,48.1,1,1,0,0,0,176.5,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.1,-7.1,352,113);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;