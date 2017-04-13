(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1000);


(lib.blick = function() {
	this.initialize(img.blick);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,958,454);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,373,92);


(lib.footer = function() {
	this.initialize(img.footer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,476);


(lib.kubok = function() {
	this.initialize(img.kubok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,321,541);


(lib.lefts = function() {
	this.initialize(img.lefts);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,352,207);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,314,97);


(lib.rights = function() {
	this.initialize(img.rights);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,353,207);


(lib.tr1 = function() {
	this.initialize(img.tr1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,393,567);


(lib.txt = function() {
	this.initialize(img.txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,92);


(lib.zida = function() {
	this.initialize(img.zida);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,452,592);// helper functions:

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


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blick();
	this.instance.parent = this;
	this.instance.setTransform(-202.2,-95.8,0.422,0.422);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.2,-95.8,404.4,191.6);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blick();
	this.instance.parent = this;
	this.instance.setTransform(-202.2,-95.8,0.422,0.422);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.2,-95.8,404.4,191.6);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],-28.4,0,28.4,0).s().p("AkbLWIAA2rII3AAIAAWrg");
	this.shape.setTransform(28.4,72.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,56.9,145.2), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.069,1.069);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,2052.3,1068.9), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(-1,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-1,3,373,92), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rights();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,353,207), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lefts();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,352,207), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tr1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,393,567), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zida();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,452,592), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.footer();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1920,476), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(19.7,70.2,1.564,0.715,0,18.4,0,28.4,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-41.1,21,121.7,98.5), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(176.5,103.5,1,1,0,0,0,176.5,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:97.6},19,cjs.Ease.get(-1)).to({y:91.4},20,cjs.Ease.get(1)).to({y:97.8},21,cjs.Ease.get(-1)).to({y:103.5},19,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,353,207);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(176,103.5,1,1,0,0,0,176,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:109.4},19,cjs.Ease.get(-1)).to({y:115.5},20,cjs.Ease.get(1)).to({y:108.9},22,cjs.Ease.get(-1)).to({y:103.5},18,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,352,207);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(202.2,95.8,0.399,0.399);
	this.instance.alpha = 0.27;

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(202.2,95.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:1,scaleY:1,rotation:360,alpha:1},44).wait(77));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false,rotation:720},44).to({alpha:0},3).wait(73).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(121.6,57.6,161.2,76.4);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(69.2,115.8,1,1,0,0,0,202.2,95.8);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.kubok();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-11.4,0,281.6,455.4), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(207.5,325.5,1,1,0,0,0,176.5,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(196.5,283.5,1,1,0,0,0,196.5,283.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,393,567), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(226,304.5,1,1,0,0,0,176,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(226,296,1,1,0,0,0,226,296);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,452,592), null);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(186.5,46,1,1,0,0,0,186.5,46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(-1,3,373,92), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(186.5,46,1,1,0,0,0,186.5,46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({regY:46.1,scaleX:0.93,scaleY:0.93,x:186.6,y:46.2},3,cjs.Ease.get(-1)).to({scaleX:0.85,scaleY:0.85,y:46.1},3,cjs.Ease.get(1)).to({regX:186.6,scaleX:0.93,scaleY:0.93,x:186.7},3,cjs.Ease.get(-1)).to({regX:186.5,regY:46,scaleX:1,scaleY:1,x:186.5,y:46},3,cjs.Ease.get(1)).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,3,373,92);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(28.4,72.5,1,1,0,0,0,28.4,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:458.4},29).to({_off:true},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.1,21,121.7,98.5);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(137.7,37.9);

	// Layer 2
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(-60.4,34.9,1,1,0,0,0,28.4,72.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.txt();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.826,0.826);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,275.9,76), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(171,42.3,0.916,0.916,0,0,0,186.6,46.1);

	this.instance_1 = new lib.Symbol2copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(170.9,42.2,0.959,0.959,0,0,0,186.5,46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,2.8,341.7,84.3);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(170.8,42.1,1,1,0,0,0,170.8,42.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-8.9,0.9,357.8,88.3), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.back.x = - stage.mouseX / -25;
		this.back.y = - stage.mouseY / -25;
		}
		
		
		
		
		
		canvas.style.cursor = "pointer";
		canvas.addEventListener("click", function() {
		    window.callClick();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 13
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(1223,56,1,1,0,0,0,138,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logo.png
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(554,23,0.709,0.709);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// fuuter
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(962,669,1,1,0,0,0,960,238);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// button
	this.instance_3 = new lib.Symbol13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(964.4,569.4,1,1,0,0,0,170.8,42.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 5
	this.instance_4 = new lib.Symbol7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(965.1,317.7,1,1,0,0,0,135.1,227.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 6
	this.instance_5 = new lib.Symbol3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1277.1,440.3,0.917,0.917,0,0,0,226,296.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer 8
	this.instance_6 = new lib.Symbol5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(638.9,412.1,0.904,0.904,0,0,0,196.5,283.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Layer 1
	this.back = new lib.Symbol16();
	this.back.parent = this;
	this.back.setTransform(1.5,1.5,1,1,0,0,0,66.5,110.5);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(895,341,2052.3,1068.9);
// library properties:
lib.properties = {
	width: 1920,
	height: 900,
	fps: 24,
	color: "#400200",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1491922769988", id:"back"},
		{src:"images/blick.png?1491922769988", id:"blick"},
		{src:"images/button.png?1491922769988", id:"button"},
		{src:"images/footer.png?1491922769988", id:"footer"},
		{src:"images/kubok.png?1491922769988", id:"kubok"},
		{src:"images/lefts.png?1491922769988", id:"lefts"},
		{src:"images/logo.png?1491922769988", id:"logo"},
		{src:"images/rights.png?1491922769988", id:"rights"},
		{src:"images/tr1.png?1491922769988", id:"tr1"},
		{src:"images/txt.png?1491922769988", id:"txt"},
		{src:"images/zida.png?1491922769988", id:"zida"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;