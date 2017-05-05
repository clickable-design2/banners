(function (lib, img, cjs, ss, an) {

// symbols:

(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,84);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,310,37);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,44);// helper functions:

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


(lib.title_2_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.title_2_in, new cjs.Rectangle(0,0,310,37), null);


(lib.title_1_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.467,0.976],-69.6,-27.1,69.6,-27.1).s().p("EgJWAscQhh1mAA7FQAA14A/yUITxAAQA/SUAAV4QAAbFhiVmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.title_1_in, new cjs.Rectangle(-69.6,-284.4,139.2,568.8), null);


(lib.title_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.title_1, new cjs.Rectangle(0,0,302,44), null);


(lib.stripe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFAD00","#FFCC00"],[0,1],-37.1,-10,37.2,9.9).s().p("AB+M3IqGitQgwgOANgwIFw1fQANgwAxANIKGCuQAwANgNAwIlwVeQgLAnggAAQgIAAgLgDg");
	this.shape.setTransform(55.9,82.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.stripe, new cjs.Rectangle(0,0,111.8,165.1), null);


(lib.logo_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-9,0,0.929,0.929);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_in, new cjs.Rectangle(-9,0,256.3,78), null);


(lib.title2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.title_2_in();
	this.instance.parent = this;
	this.instance.setTransform(155,18.6,1.11,1.11,0,0,0,155,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:155.1,regY:18.6,scaleX:0.93,scaleY:0.93,x:155.1,y:18.7},9,cjs.Ease.get(-1)).to({regY:18.5,scaleX:0.74,scaleY:0.74,y:18.5},10,cjs.Ease.get(1)).to({regY:18.6,scaleX:0.92,scaleY:0.92,y:18.6},10,cjs.Ease.get(-1)).to({regX:155,regY:18.5,scaleX:1.11,scaleY:1.11,x:155},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.title_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(154.1,59.1,0.861,0.861,0,0,0,151,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:151.1,scaleX:0.99,scaleY:0.99,y:59.2},9,cjs.Ease.get(-1)).to({regX:151,scaleX:1.14,scaleY:1.14,x:154},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:154.1},10,cjs.Ease.get(-1)).to({scaleX:0.86,scaleY:0.86,y:59.1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-2,344.1,80);


(lib.sstripe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stripe();
	this.instance.parent = this;
	this.instance.setTransform(55.9,82.5,1,1,0,0,0,55.9,82.5);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sstripe, new cjs.Rectangle(0,0,111.8,165.1), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzPGGQgxAAAAgyIAAqnQAAgyAxAAMAmeAAAQAzAAAAAyIAAKnQAAAygzAAg");
	mask.setTransform(313.4,-26.6);

	// Слой 5
	this.instance = new lib.sstripe();
	this.instance.parent = this;
	this.instance.setTransform(99.8,-23.8,1,1,0,0,0,55.9,82.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:315.5},25,cjs.Ease.get(-1)).to({x:595.8},26,cjs.Ease.get(1)).to({_off:true},1).wait(55));

	// Слой 4
	this.instance_1 = new lib.logo_in();
	this.instance_1.parent = this;
	this.instance_1.setTransform(322.2,-26.6,1,1,0,0,0,128.2,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(107));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(185,-65.6,256.3,78);


(lib.lights = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.title_1_in();
	this.instance.parent = this;
	this.instance.setTransform(512,-16,1.23,1.527,0,24.6,0);
	this.instance.alpha = 0.441;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.58,skewX:28.1,x:476,y:-15.9},15,cjs.Ease.get(-1)).to({scaleY:1.65,skewX:32.7,x:430.5,y:-16},19,cjs.Ease.get(1)).to({scaleY:1.54,skewX:24.6,x:503.8,y:-15.9},20,cjs.Ease.get(-1)).to({scaleY:1.47,skewX:18.8,x:558.8,y:-16},15,cjs.Ease.get(1)).to({scaleY:1.49,skewX:21.6,x:536.1,y:-15.9},17,cjs.Ease.get(-1)).to({scaleY:1.53,skewX:24.6,x:512,y:-16},18,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.title_1_in();
	this.instance_1.parent = this;
	this.instance_1.setTransform(267.2,70.4,1.23,1.512,0,-9.9,0);
	this.instance_1.alpha = 0.441;
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.45,skewX:1.3,x:251.2,y:24.1},15,cjs.Ease.get(-1)).to({scaleY:1.38,skewX:15.7,x:230.7,y:-34.4},19,cjs.Ease.get(1)).to({scaleY:1.57,skewX:-10,x:345.8,y:25.5},20,cjs.Ease.get(-1)).to({scaleY:1.71,skewX:-29.4,x:432.2,y:70.4},15,cjs.Ease.get(1)).to({scaleY:1.61,skewX:-19.8,x:352.2,y:70.5},17,cjs.Ease.get(-1)).to({scaleY:1.51,skewX:-9.9,x:267.2,y:70.4},18,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.title_1_in();
	this.instance_2.parent = this;
	this.instance_2.setTransform(72,-4.8,1.23,1.273,0,-22,16.2);
	this.instance_2.alpha = 0.441;
	this.instance_2.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.23,scaleY:1.27,skewX:-25.8,skewY:12.1,x:95.7,y:-21.8},15,cjs.Ease.get(-1)).to({scaleX:1.23,scaleY:1.27,skewX:-31,skewY:7.2,x:125.5,y:-43.2},19,cjs.Ease.get(1)).to({scaleX:1.23,scaleY:1.23,skewX:-23.1,skewY:12.3,x:74.7,y:-27.2},20,cjs.Ease.get(-1)).to({scaleX:1.23,scaleY:1.2,skewX:-17.2,skewY:16.2,x:36.7,y:-15},15,cjs.Ease.get(1)).to({scaleX:1.23,scaleY:1.23,skewX:-19.5,skewY:16.1,x:53.9,y:-10},17,cjs.Ease.get(-1)).to({scaleX:1.23,scaleY:1.27,skewX:-22,skewY:16.2,x:72,y:-4.8},18,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.9,-410.8,924.7,904.8);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo_1();
	this.instance.parent = this;
	this.instance.setTransform(-156,108.9,1,1,0,0,0,155,22);

	this.instance_1 = new lib.title2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-56.7,1,1,0,0,0,155,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(-267.1,-99.2,439.2,244.9), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this,
			t = _this.title,
			l = _this.lights,
			c = document.getElementById("canvas_container");
			
		window._setCanvasSize = function() {
			
			var iw = window.innerWidth,
				ih = window.innerHeight,
			
				sD = 1,
			
				mW = 380,
				mH = ((iw > ih && iw < 740 && ih < 420) ? 500 : 210),
			
				lW = 850,
				lH = 600,
			
				sW = iw / mW,
				sH = ih / mH,
				sWH = sW * sH;
			
			//Object Position
			
			t.x = iw / 2; t.y = ih * 0.25;
			l.x = iw / 2; l.y = 0; l.scaleX = iw / lW; l.scaleY = ih / lH;
			
			//Object Scale
		
			function SetS(s) {
				t.scaleX = t.scaleY = s;
			}
		
			SetS(sD);
			
			//ReScale
		
			if(iw < mW) {SetS(sW);}
		
			if(ih < mH) {SetS(sH);}
		
			if(iw < mW && ih < mH) {SetS(sWH);}
		
			//Orientation Detect
		
			if(iw > ih) {
				//...//
			}
					
		}
				
		window.onresize=function(){_setCanvasSize();}
		window.onresize();
		
		//Actions
		
		/*c.style.opacity = '1';
		c.classList.add("add_canvas");*/
		
		//...//
		
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// title
	this.title = new lib.title();
	this.title.parent = this;
	//this.title.setTransform(460,-0.1,1,1,0,0,0,0.5,-136.6);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// lights
	this.lights = new lib.lights();
	this.lights.parent = this;
	this.lights.setTransform(460,4,1.191,1.191,0,0,0,315.1,-330.8);

	this.timeline.addTween(cjs.Tween.get(this.lights).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(370.9,366.1,1101.4,1077.8);
// library properties:
lib.properties = {
	width: 920,
	height: 915,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/logo.png", id:"logo"},
		{src:"images/text.png", id:"text"},
		{src:"images/text2.png", id:"text2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;