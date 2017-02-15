(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1099,268);


(lib.bamb = function() {
	this.initialize(img.bamb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,74);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,93);


(lib.chel = function() {
	this.initialize(img.chel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,277,235);


(lib.fight = function() {
	this.initialize(img.fight);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,80);


(lib.foot = function() {
	this.initialize(img.foot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,71);


(lib.gon = function() {
	this.initialize(img.gon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,71);


(lib.Layer1 = function() {
	this.initialize(img.Layer1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,92);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,314,97);


(lib.logo1 = function() {
	this.initialize(img.logo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,59);


(lib.logo2 = function() {
	this.initialize(img.logo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,59);


(lib.logo3 = function() {
	this.initialize(img.logo3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,59);


(lib.logo4 = function() {
	this.initialize(img.logo4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,59);


(lib.logo5 = function() {
	this.initialize(img.logo5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,59);


(lib.prilo = function() {
	this.initialize(img.prilo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,92);


(lib.sred = function() {
	this.initialize(img.sred);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,93);


(lib.stav = function() {
	this.initialize(img.stav);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,93);


(lib.teni = function() {
	this.initialize(img.teni);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,64);


(lib.txt1 = function() {
	this.initialize(img.txt1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,28);


(lib.txt2 = function() {
	this.initialize(img.txt2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,323,29);// helper functions:

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


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt2();
	this.instance.parent = this;
	this.instance.setTransform(-161.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.5,-14.5,323,29);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt2();
	this.instance.parent = this;
	this.instance.setTransform(-161.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.5,-14.5,323,29);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt1();
	this.instance.parent = this;
	this.instance.setTransform(-159,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-14,318,28);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt1();
	this.instance.parent = this;
	this.instance.setTransform(-159,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-14,318,28);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhfkAVbQhkAAAAhkMAAAgntQAAhkBkAAMC/JAAAQBkAAAABkMAAAAntQAABkhkAAg");
	this.shape.setTransform(621.7,137.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,1243.4,274.2), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sred();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,99,93), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,78,92), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.prilo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,85,92), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.stav();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,94,93), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],0,0,0,0,0,89).ss(30,1,1).p("AMJAAQAAFBjkDkQjkDklBAAQlBAAjjjkQjkjkAAlBQAAlBDkjjQDjjkFBAAQFBAADkDkQDkDjAAFBg");
	this.shape.setTransform(77.7,77.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-15,-15,185.3,185.3), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fight();
	this.instance.parent = this;
	this.instance.setTransform(0,15.4,1,1,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82.9,93.2);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.teni();
	this.instance.parent = this;
	this.instance.setTransform(42.2,0,1.144,1.144,35.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.3,99.4);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bamb();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,74);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gon();
	this.instance.parent = this;
	this.instance.setTransform(0,42.9,1,1,-41.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.7,96.3);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.foot();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.14,1.14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.1,81);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.chel();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,277,235);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,334,93), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-55,0,55,0).s().p("AolVBMAAAgqBIRLAAMAAAAqBg");
	this.shape.setTransform(55,134.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,110,269), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,314,97), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,59,59), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,59,59), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,59,59), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,59,59), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,59,59), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.066,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1171,268), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol27();
	this.instance.parent = this;
	this.instance.setTransform(621.6,137.1,1,1,0,0,0,621.6,137.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(167,46.5,1,1,0,0,0,167,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.07,scaleY:1.07,x:167.1,y:46.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,334,93);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt2.png
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(161.5,-110.5);
	this.instance._off = true;

	this.instance_1 = new lib.Tween5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(161.5,17.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({_off:true,y:17.5},4).wait(47).to({_off:false,y:-110.5},4).to({_off:true},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},4).wait(47).to({startPosition:0},0).to({_off:true,y:-110.5},4).wait(6));

	// txt1.png
	this.instance_2 = new lib.txt1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,4);

	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(159,18);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(159,-108);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},44).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_4}]},55).to({state:[{t:this.instance_3}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44).to({_off:false},0).to({_off:true,y:-108},5).wait(55).to({_off:false,y:18},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({_off:false},5).wait(55).to({startPosition:0},0).to({_off:true,y:18},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,4,318,28);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(138.5,117.5,1,1,0,0,0,138.5,117.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:113.4},9,cjs.Ease.get(-1)).to({y:108.8},10,cjs.Ease.get(1)).to({y:113.2},10,cjs.Ease.get(-1)).to({y:117.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,277,235);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_199 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_237 = function() {
		this.gotoAndPlay(213);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(199).call(this.frame_199).wait(38).call(this.frame_237).wait(13));

	// stav.png
	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(-1,-130.5,1,1,0,0,0,47,46.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92).to({_off:false},0).to({y:92},7).wait(15).to({regY:46.6,rotation:4,y:92.1},2).to({regY:46.5,rotation:-6.2,x:-0.9,y:92},2).to({rotation:0,x:-1},2).wait(22).to({regY:46.6,rotation:4,y:92.1},2).to({regY:46.5,rotation:-6.2,x:-0.9,y:92},2).to({rotation:0,x:-1},2).wait(23).to({regY:46.6,rotation:4,y:92.1},2).to({regY:46.5,rotation:-6.2,x:-0.9,y:92},2).to({rotation:0,x:-1},2).wait(14).to({alpha:0},4).wait(5).to({alpha:1},12).wait(1).to({regY:46.6,rotation:4,y:92.1},2).to({regY:46.5,rotation:-6.2,x:-0.9,y:92},2).to({rotation:0,x:-1},2).wait(19).to({alpha:0},11).wait(1));

	// prilo.png
	this.instance_1 = new lib.Symbol24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(99.5,-131,1,1,0,0,0,42.5,46);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(96).to({_off:false},0).to({y:91.5},7).wait(15).to({regX:42.6,regY:46.1,rotation:4.7,x:99.6,y:91.7},2).to({regX:42.5,rotation:-6.2,x:99.5},2).to({regY:46,rotation:0,y:91.5},2).wait(22).to({regX:42.6,regY:46.1,rotation:4.7,x:99.6,y:91.7},2).to({regX:42.5,rotation:-6.2,x:99.5},2).to({regY:46,rotation:0,y:91.5},2).wait(23).to({regX:42.6,regY:46.1,rotation:4.7,x:99.6,y:91.7},2).to({regX:42.5,rotation:-6.2,x:99.5},2).to({regY:46,rotation:0,y:91.5},2).wait(10).to({alpha:0},4).wait(5).to({alpha:1},12).wait(5).to({regX:42.6,regY:46.1,rotation:4.7,x:99.6,y:91.7},2).to({regX:42.5,rotation:-6.2,x:99.5},2).to({regY:46,rotation:0,y:91.5},2).wait(15).to({alpha:0},11).wait(1));

	// Layer 1.png
	this.instance_2 = new lib.Symbol25();
	this.instance_2.parent = this;
	this.instance_2.setTransform(191,-131,1,1,0,0,0,39,46);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100).to({_off:false},0).to({y:91.5},7).wait(15).to({regX:39.1,rotation:4.2,x:191.1},2).to({regY:46.1,rotation:-4.2,x:191.2,y:91.6},2).to({regX:39,regY:46,rotation:0,x:191,y:91.5},2).wait(22).to({regX:39.1,rotation:4.2,x:191.1},2).to({regY:46.1,rotation:-4.2,x:191.2,y:91.6},2).to({regX:39,regY:46,rotation:0,x:191,y:91.5},2).wait(23).to({regX:39.1,rotation:4.2,x:191.1},2).to({regY:46.1,rotation:-4.2,x:191.2,y:91.6},2).to({regX:39,regY:46,rotation:0,x:191,y:91.5},2).wait(6).to({alpha:0},4).wait(5).to({alpha:1},12).wait(9).to({regX:39.1,rotation:4.2,x:191.1},2).to({regY:46.1,rotation:-4.2,x:191.2,y:91.6},2).to({regX:39,regY:46,rotation:0,x:191,y:91.5},2).wait(11).to({alpha:0},11).wait(1));

	// sred.png
	this.instance_3 = new lib.Symbol26();
	this.instance_3.parent = this;
	this.instance_3.setTransform(285.5,-130.5,1,1,0,0,0,49.5,46.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(103).to({_off:false},0).to({y:92},7).wait(16).to({rotation:3.7,x:285.6},2).to({regX:49.6,rotation:-3.7,x:285.7},2).to({regX:49.5,rotation:0,x:285.5},2).wait(22).to({rotation:3.7,x:285.6},2).to({regX:49.6,rotation:-3.7,x:285.7},2).to({regX:49.5,rotation:0,x:285.5},2).wait(23).to({rotation:3.7,x:285.6},2).to({regX:49.6,rotation:-3.7,x:285.7},2).to({regX:49.5,rotation:0,x:285.5},2).wait(2).to({alpha:0},4).wait(5).to({alpha:1},12).wait(13).to({rotation:3.7,x:285.6},2).to({regX:49.6,rotation:-3.7,x:285.7},2).to({regX:49.5,rotation:0,x:285.5},2).wait(7).to({alpha:0},11).wait(1));

	// Layer 2
	this.instance_4 = new lib.Symbol22();
	this.instance_4.parent = this;
	this.instance_4.setTransform(137.9,31.7,0.226,0.226,0,0,0,77.7,77.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45).to({_off:false},0).to({regY:77.8,scaleX:9.64,scaleY:9.64,x:138.4,y:32.7,alpha:0.469},8).to({_off:true},1).wait(196));

	// foot.png
	this.instance_5 = new lib.Symbol17();
	this.instance_5.parent = this;
	this.instance_5.setTransform(96.4,36.6,3.877,3.877,0,0,0,37.1,40.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;
	new cjs.ButtonHelper(this.instance_5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(36).to({_off:false},0).to({scaleX:1,scaleY:1,x:131.1,y:37.5,alpha:1},9).wait(44).to({alpha:0},5).to({_off:true},1).wait(155));

	// gon.png
	this.instance_6 = new lib.Symbol18();
	this.instance_6.parent = this;
	this.instance_6.setTransform(82.6,57.7,3.877,3.877,0,0,0,47.9,48.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;
	new cjs.ButtonHelper(this.instance_6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(27).to({_off:false},0).to({scaleX:1,scaleY:1,x:127.6,y:43,alpha:1},9).wait(53).to({alpha:0},5).to({_off:true},1).wait(155));

	// bamb.png
	this.instance_7 = new lib.Symbol19();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-6.8,15.3,3.877,3.877,0,0,0,33.5,37);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;
	new cjs.ButtonHelper(this.instance_7, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(18).to({_off:false},0).to({scaleX:1,scaleY:1,x:104.5,y:32,alpha:1},9).wait(62).to({alpha:0},5).to({_off:true},1).wait(155));

	// teni.png
	this.instance_8 = new lib.Symbol20();
	this.instance_8.parent = this;
	this.instance_8.setTransform(232.6,25.6,3.877,3.877,0,0,0,49.1,49.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;
	new cjs.ButtonHelper(this.instance_8, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,x:166.3,y:34.7,alpha:1},9).wait(71).to({alpha:0},5).to({_off:true},1).wait(155));

	// fight.png
	this.instance_9 = new lib.Symbol21();
	this.instance_9.parent = this;
	this.instance_9.setTransform(122.9,12.3,3.877,3.877,0,0,0,41.4,46.6);
	this.instance_9.alpha = 0;
	new cjs.ButtonHelper(this.instance_9, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1,scaleY:1,x:138,y:31.3,alpha:1},9).wait(80).to({alpha:0},5).to({_off:true},1).wait(155));

	// Layer 1
	this.instance_10 = new lib.Symbol4();
	this.instance_10.parent = this;
	this.instance_10.setTransform(136.5,131.5,1,1,0,0,0,138.5,117.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(89).to({alpha:0},5).wait(100).to({alpha:1},5).to({_off:true},1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.6,-168.3,321.2,417.4);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AF1MTQgDAAgDgCQgMgIAAgxIAAm7QAAg7ASAAIIUAAQASAAAAA7IAAG7QAAAxgMAIQgDACgDAAgAkGMTIgFAAQgDAAgCgCQgNgIAAgxIAAm7QAAg7ASAAIIUAAQASAAAAA7IAAG7QAAAxgNAIQgCACgDAAgAuJMTQgDAAgCgCQgNgIAAgxIAAm7QAAg7ASAAIIVAAQASAAAAA7IAAG7QAAAxgNAIQgCACgDAAgAPvMRQgDAAgDgBQgMgIAAgyIAAm6QAAg8ASABIIUAAQASgBAAA8IAAG6QAAAygMAIQgDABgDAAgA4GMRQgDAAgCgBQgNgIAAgyIAAm7QAAg7ASAAIIVAAQASAAAAA7IAAG7QAAAygNAIQgCABgDAAgA21CgQgRAAgOgDQhGgOAAhTIAArqQAAhkBlAAMAtrAAAQBlAAAABkIAALqQAABUhHANQgOADgQAAg");
	var mask_graphics_19 = new cjs.Graphics().p("AF1MTQgDAAgDgCQgMgIAAgxIAAm7QAAg7ASAAIIUAAQASAAAAA7IAAG7QAAAxgMAIQgDACgDAAgAkGMTIgFAAQgDAAgCgCQgNgIAAgxIAAm7QAAg7ASAAIIUAAQASAAAAA7IAAG7QAAAxgNAIQgCACgDAAgAuJMTQgDAAgCgCQgNgIAAgxIAAm7QAAg7ASAAIIVAAQASAAAAA7IAAG7QAAAxgNAIQgCACgDAAgAPvMRQgDAAgDgBQgMgIAAgyIAAm6QAAg8ASABIIUAAQASgBAAA8IAAG6QAAAygMAIQgDABgDAAgA4GMRQgDAAgCgBQgNgIAAgyIAAm7QAAg7ASAAIIVAAQASAAAAA7IAAG7QAAAygNAIQgCABgDAAgA21CgQgRAAgOgDQhGgOAAhTIAArqQAAhkBlAAMAtrAAAQBlAAAABkIAALqQAABUhHANQgOADgQAAg");
	var mask_graphics_31 = new cjs.Graphics().p("AF1MTQgDAAgDgCQgMgIAAgxIAAm7QAAg7ASAAIIUAAQASAAAAA7IAAG7QAAAxgMAIQgDACgDAAgAkGMTIgFAAQgDAAgCgCQgNgIAAgxIAAm7QAAg7ASAAIIUAAQASAAAAA7IAAG7QAAAxgNAIQgCACgDAAgAuJMTQgDAAgCgCQgNgIAAgxIAAm7QAAg7ASAAIIVAAQASAAAAA7IAAG7QAAAxgNAIQgCACgDAAgAPvMRQgDAAgDgBQgMgIAAgyIAAm6QAAg8ASABIIUAAQASgBAAA8IAAG6QAAAygMAIQgDABgDAAgA4GMRQgDAAgCgBQgNgIAAgyIAAm7QAAg7ASAAIIVAAQASAAAAA7IAAG7QAAAygNAIQgCABgDAAgA21CgQgRAAgOgDQhGgOAAhTIAArqQAAhkBlAAMAtrAAAQBlAAAABkIAALqQAABUhHANQgOADgQAAg");
	var mask_graphics_79 = new cjs.Graphics().p("AF1MTQgDAAgDgCQgMgIAAgxIAAm7QAAg7ASAAIIUAAQASAAAAA7IAAG7QAAAxgMAIQgDACgDAAgAkGMTIgFAAQgDAAgCgCQgNgIAAgxIAAm7QAAg7ASAAIIUAAQASAAAAA7IAAG7QAAAxgNAIQgCACgDAAgAuJMTQgDAAgCgCQgNgIAAgxIAAm7QAAg7ASAAIIVAAQASAAAAA7IAAG7QAAAxgNAIQgCACgDAAgAPvMRQgDAAgDgBQgMgIAAgyIAAm6QAAg8ASABIIUAAQASgBAAA8IAAG6QAAAygMAIQgDABgDAAgA4GMRQgDAAgCgBQgNgIAAgyIAAm7QAAg7ASAAIIVAAQASAAAAA7IAAG7QAAAygNAIQgCABgDAAgA21CgQgRAAgOgDQhGgOAAhTIAArqQAAhkBlAAMAtrAAAQBlAAAABkIAALqQAABUhHANQgOADgQAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:157.1,y:79.9}).wait(19).to({graphics:mask_graphics_19,x:157.1,y:79.9}).wait(12).to({graphics:mask_graphics_31,x:157.1,y:79.9}).wait(48).to({graphics:mask_graphics_79,x:157.1,y:79.9}).wait(1));

	// Layer 8
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(-114,78.5,1,0.824,0,16.2,0,54.9,134.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:397.3},19).wait(61));

	// logo.png
	this.instance_1 = new lib.Symbol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(157,48.5,1,1,0,0,0,157,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

	// logo5.png
	this.instance_2 = new lib.Symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(29.5,130.5,1,1,0,0,0,29.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({scaleX:0.17},7).to({scaleX:1},7).wait(60));

	// logo2.png
	this.instance_3 = new lib.Symbol10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(93.3,130.5,1,1,0,0,0,29.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({scaleX:0.19},7).to({scaleX:1},7).wait(58));

	// logo4.png
	this.instance_4 = new lib.Symbol8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(157,130.5,1,1,0,0,0,29.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({scaleX:0.17},7).to({scaleX:1},7).wait(55));

	// logo3.png
	this.instance_5 = new lib.Symbol9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(220.8,130.5,1,1,0,0,0,29.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({scaleX:0.24},7).to({scaleX:1},7).wait(53));

	// logo1.png
	this.instance_6 = new lib.Symbol11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(284.5,130.5,1,1,0,0,0,29.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({scaleX:0.24},8).to({scaleX:1},8).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,314,160);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		    {
			    _this.man.gotoAndPlay(200);
		
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
			    _this.man.gotoAndPlay(238);
		
		    }
		
			
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 30;
		this.fon.y = - stage.mouseY / 30;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 5
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(903.5,41.5,1,1,0,0,0,161.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.man = new lib.Symbol3();
	this.man.parent = this;
	this.man.setTransform(527.3,123.5,1,1,0,0,0,138.5,117.5);

	this.timeline.addTween(cjs.Tween.get(this.man).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(904,133.5,1,1,0,0,0,167,46.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 2
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(168,62.1,0.87,0.87,0,0,0,157,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.fon = new lib.Symbol1();
	this.fon.parent = this;
	this.fon.setTransform(3.1,-0.1,1,1,0,0,0,47.1,38.9);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

	// Layer 7
	this.instance_3 = new lib.Symbol28();
	this.instance_3.parent = this;
	this.instance_3.setTransform(566.6,92.1,1,1,0,0,0,621.6,137.1);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(397.6,-72.3,1330.8,417.4);
// library properties:
lib.properties = {
	width: 1080,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1487168209661", id:"back"},
		{src:"images/bamb.png?1487168209661", id:"bamb"},
		{src:"images/button.png?1487168209661", id:"button"},
		{src:"images/chel.png?1487168209661", id:"chel"},
		{src:"images/fight.png?1487168209661", id:"fight"},
		{src:"images/foot.png?1487168209661", id:"foot"},
		{src:"images/gon.png?1487168209661", id:"gon"},
		{src:"images/Layer1.png?1487168209661", id:"Layer1"},
		{src:"images/logo.png?1487168209661", id:"logo"},
		{src:"images/logo1.png?1487168209661", id:"logo1"},
		{src:"images/logo2.png?1487168209661", id:"logo2"},
		{src:"images/logo3.png?1487168209661", id:"logo3"},
		{src:"images/logo4.png?1487168209661", id:"logo4"},
		{src:"images/logo5.png?1487168209661", id:"logo5"},
		{src:"images/prilo.png?1487168209661", id:"prilo"},
		{src:"images/sred.png?1487168209661", id:"sred"},
		{src:"images/stav.png?1487168209661", id:"stav"},
		{src:"images/teni.png?1487168209661", id:"teni"},
		{src:"images/txt1.png?1487168209661", id:"txt1"},
		{src:"images/txt2.png?1487168209661", id:"txt2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;