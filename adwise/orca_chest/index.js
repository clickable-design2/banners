(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.bonus = function() {
	this.initialize(img.bonus);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,32);


(lib.chestHOVER = function() {
	this.initialize(img.chestHOVER);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,292);


(lib.chest_NON_ACTIVE = function() {
	this.initialize(img.chest_NON_ACTIVE);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,180);


(lib.CURSOR = function() {
	this.initialize(img.CURSOR);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,98);


(lib.Layer24 = function() {
	this.initialize(img.Layer24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,292);


(lib.Layer29 = function() {
	this.initialize(img.Layer29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,316,271);


(lib.Layer33 = function() {
	this.initialize(img.Layer33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,203,211);


(lib.lockgreen = function() {
	this.initialize(img.lockgreen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,62);


(lib.lock = function() {
	this.initialize(img.lock);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,34);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,83);


(lib.otkroy = function() {
	this.initialize(img.otkroy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,34);


(lib.pattern = function() {
	this.initialize(img.pattern);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1279,205);


(lib.Shape1 = function() {
	this.initialize(img.Shape1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,47);


(lib.Shape3 = function() {
	this.initialize(img.Shape3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,183);


(lib.Shape41 = function() {
	this.initialize(img.Shape41);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,128);


(lib.Shape4 = function() {
	this.initialize(img.Shape4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,128);


(lib.Shape5 = function() {
	this.initialize(img.Shape5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,139);


(lib.sunduk = function() {
	this.initialize(img.sunduk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,32);


(lib.ugaday = function() {
	this.initialize(img.ugaday);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,38);// helper functions:

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
	this.instance = new lib.pattern();
	this.instance.parent = this;
	this.instance.setTransform(-639.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-639.5,-102.5,1279,205);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pattern();
	this.instance.parent = this;
	this.instance.setTransform(-639.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-639.5,-102.5,1279,205);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CURSOR();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,80,98), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CURSOR();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,80,98), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Shape3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,45,183), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Shape41();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,50,128), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Shape4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,38,128), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Shape5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,116,139), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sunduk();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,95,32), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.otkroy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,91,34), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bonus();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,145,32), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ugaday();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,91,38), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer33();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,203,211), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lockgreen();
	this.instance.parent = this;
	this.instance.setTransform(54,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,54,62), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer33();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,203,211), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.chest_NON_ACTIVE();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,232,180), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol25();
	this.instance.parent = this;
	this.instance.setTransform(-61.2,19.5,1,1,0,0,0,40,49);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-61.1,19.6,-53.8,22.9,-46.4,26.3,-44.6,26.3,-42.8,26.3,-29.4,33,-16,39.7,-15.3,39.9,-14.7,40.1]}},14,cjs.Ease.get(-1)).to({guide:{path:[-14.6,40.1,11.6,47.3,39.6,48.1]}},15,cjs.Ease.get(1)).to({scaleX:1.01,skewY:180,guide:{path:[39.6,48,41.4,48.1,43.2,48.1]}},1).to({guide:{path:[43.3,48.1,60.2,48.3,78,46.1,86.2,45,94.3,43.7]}},14,cjs.Ease.get(-1)).to({guide:{path:[94.3,43.7,120.3,39.3,145.1,31.2,146.4,31.2,147.6,31.2]}},15,cjs.Ease.get(1)).wait(1).to({guide:{path:[147.6,31.2,146.4,31.2,145.1,31.2,122,38.7,97.8,43.1]}},14,cjs.Ease.get(-1)).to({guide:{path:[97.8,43.1,87.9,44.8,78,46.1,60.2,48.3,43.2,48.1]}},15,cjs.Ease.get(1)).to({scaleX:1,skewY:0,guide:{path:[43.2,48.1,41.4,48.1,39.6,48]}},1).to({guide:{path:[39.6,48.1,13.5,47.4,-11,41.1]}},14,cjs.Ease.get(-1)).to({guide:{path:[-11.1,41.1,-13.6,40.4,-16,39.7,-29.4,33,-42.8,26.3,-44.6,26.3,-46.4,26.3,-53.8,22.9,-61.1,19.6]}},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.2,-29.5,80,98);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape 5.png
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(666,96.5,1,1,0,0,0,58,69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:58.1,scaleX:1.06,x:662.9},3,cjs.Ease.get(-1)).to({scaleX:1.14,x:658.2},3,cjs.Ease.get(1)).to({scaleX:1.08,x:661.4},3,cjs.Ease.get(-1)).to({regX:58,scaleX:1,x:666},3,cjs.Ease.get(1)).wait(1));

	// Shape 4.png
	this.instance_1 = new lib.Symbol21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55,107.4,1,1,1.3,0,0,19.1,64.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.24,scaleY:1,rotation:1.1,x:50.4,y:107.2},3,cjs.Ease.get(-1)).to({regX:18.9,regY:64,scaleX:1.61,scaleY:1,rotation:1.3,x:43.3,y:107},3,cjs.Ease.get(1)).to({regX:19,scaleX:1.37,scaleY:1,rotation:1.1,x:48.1,y:107.2},3,cjs.Ease.get(-1)).to({regX:19.1,regY:64.1,scaleX:1,scaleY:1,rotation:1.3,x:55,y:107.4},3,cjs.Ease.get(1)).wait(1));

	// Shape 4-1.png
	this.instance_2 = new lib.Symbol22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(517,89,1,1,0,0,0,25,64);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.13,x:513.9},3,cjs.Ease.get(-1)).to({scaleX:1.32,x:509.1},3,cjs.Ease.get(1)).to({regX:25.1,scaleX:1.19,x:512.4},3,cjs.Ease.get(-1)).to({regX:25,scaleX:1,x:517},3,cjs.Ease.get(1)).wait(1));

	// Shape 3.png
	this.instance_3 = new lib.Symbol23();
	this.instance_3.parent = this;
	this.instance_3.setTransform(194.5,91.5,1,1,0,0,0,22.5,91.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:22.6,scaleX:1.13,x:191.7},3,cjs.Ease.get(-1)).to({scaleX:1.33,x:187.3},3,cjs.Ease.get(1)).to({scaleX:1.2,x:190.2},3,cjs.Ease.get(-1)).to({regX:22.5,scaleX:1,x:194.5},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,0,689.5,183);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(645.5,102.5);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.5,102.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},49).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:10.5},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,0,1279,205);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(101.5,105.5,1,1,0,0,0,101.5,105.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},39).to({alpha:1},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,203,211);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(27,31,1,1,0,0,0,27,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,62);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(101.5,105.5,1,1,0,0,0,101.5,105.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},39).to({alpha:1},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,203,211);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_31 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(2).call(this.frame_31).wait(1));

	// ugaday.png
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(88.5,6,1,1,0,0,0,45.5,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:45.6,scaleX:1.15,scaleY:1.15,x:88.6,y:6.1},7,cjs.Ease.get(-1)).to({regX:45.5,scaleX:1.3,scaleY:1.3,x:88.5},7,cjs.Ease.get(1)).to({regY:18.9,scaleX:1.16,scaleY:1.16,x:88.6,y:6},7,cjs.Ease.get(-1)).to({regY:19,scaleX:1,scaleY:1,x:88.5},8,cjs.Ease.get(1)).to({_off:true},1).wait(2));

	// bonus.png
	this.instance_1 = new lib.Symbol15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(89.5,54,1,1,0,0,0,72.5,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:16.1,scaleX:0.85,scaleY:0.85,x:89.6,y:54.2},7,cjs.Ease.get(-1)).to({scaleX:0.69,scaleY:0.69,y:54.1},7,cjs.Ease.get(1)).to({scaleX:0.84,scaleY:0.84,x:89.5},7,cjs.Ease.get(-1)).to({regY:16,scaleX:1,scaleY:1,y:54},8,cjs.Ease.get(1)).to({_off:true},1).wait(2));

	// sunduk.png
	this.instance_2 = new lib.Symbol17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(87.5,55,1,1,0,0,0,47.5,16);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).wait(2));

	// otkroy.png
	this.instance_3 = new lib.Symbol16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(87.5,6,1,1,0,0,0,45.5,17);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17,-13,145,83);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lock.png
	this.instance = new lib.lock();
	this.instance.parent = this;
	this.instance.setTransform(114,164,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 6
	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(101,181,1,1,0,0,0,27,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.chestHOVER();
	this.instance_2.parent = this;
	this.instance_2.setTransform(259,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 5
	this.instance_3 = new lib.Symbol11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(139.5,156.5,1,1,0,0,0,101.5,105.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 4
	this.instance_4 = new lib.Shape1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(41,126);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 29.png
	this.instance_5 = new lib.Layer29();
	this.instance_5.parent = this;
	this.instance_5.setTransform(272,-2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer 2
	this.instance_6 = new lib.Layer24();
	this.instance_6.parent = this;
	this.instance_6.setTransform(274,12,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-44,-2,318,306), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(116,90,1,1,0,0,0,116,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 33.png
	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(102.5,79.5,1,1,0,0,0,101.5,105.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 2
	this.instance_2 = new lib.Shape1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(10,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,-26,232,211), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(116,90,1,1,0,0,0,116,90);

	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(97.3,64.8,1,1,0,0,0,129.5,146);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-26,232,211);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(628.5,84.5,1,1,0,0,0,639.5,102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(348,118.5,1,1,0,0,0,362,91.5);
	this.instance_1.alpha = 0.461;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.back();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-5,-18,1279,323), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.pricel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.pricel.x = stage.mouseX/window.devicePixelRatio;
			this.pricel.y = stage.mouseY/window.devicePixelRatio;
		}
		
		this.cursor = "none";
		this.btl.cursor = "none";
		this.btr.cursor = "none";
		
		
		var _this = this;
		
		_this.pricel.visible=false;
		_this.key.visible=true;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		    {
			    _this.pricel.visible=true;
				_this.key.visible=false;
				_this.txt.gotoAndPlay(31);
		
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
				_this.pricel.visible=false;
				_this.key.visible=true;
				_this.txt.gotoAndPlay(1);
		    }
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 6 copy
	this.pricel = new lib.Symbol24();
	this.pricel.parent = this;
	this.pricel.setTransform(-59,133,1,1,0,0,0,40,49);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// Layer 6
	this.key = new lib.Symbol26();
	this.key.parent = this;
	this.key.setTransform(321,249,1,1,0,0,0,40,49);

	this.timeline.addTween(cjs.Tween.get(this.key).wait(1));

	// Layer 3
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(280,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.txt = new lib.Symbol6();
	this.txt.parent = this;
	this.txt.setTransform(327.1,144.5,1,1,0,0,0,94.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 2 copy
	this.btl = new lib.Symbol3();
	this.btl.parent = this;
	this.btl.setTransform(116.4,173,1,1,0,0,180,116,90);
	new cjs.ButtonHelper(this.btl, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btl).wait(1));

	// Layer 2
	this.btr = new lib.Symbol3();
	this.btr.parent = this;
	this.btr.setTransform(528,173,1,1,0,0,0,116,90);
	new cjs.ButtonHelper(this.btr, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btr).wait(1));

	// back
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(321,153.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(221,135.5,1374,323);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1499094636019", id:"back"},
		{src:"images/bonus.png?1499094636019", id:"bonus"},
		{src:"images/chestHOVER.png?1499094636019", id:"chestHOVER"},
		{src:"images/chest_NON_ACTIVE.png?1499094636019", id:"chest_NON_ACTIVE"},
		{src:"images/CURSOR.png?1499094636019", id:"CURSOR"},
		{src:"images/Layer24.png?1499094636019", id:"Layer24"},
		{src:"images/Layer29.png?1499094636019", id:"Layer29"},
		{src:"images/Layer33.png?1499094636019", id:"Layer33"},
		{src:"images/lockgreen.png?1499094636019", id:"lockgreen"},
		{src:"images/lock.png?1499094636019", id:"lock"},
		{src:"images/logo.png?1499094636019", id:"logo"},
		{src:"images/otkroy.png?1499094636019", id:"otkroy"},
		{src:"images/pattern.png?1499094636019", id:"pattern"},
		{src:"images/Shape1.png?1499094636019", id:"Shape1"},
		{src:"images/Shape3.png?1499094636019", id:"Shape3"},
		{src:"images/Shape41.png?1499094636019", id:"Shape41"},
		{src:"images/Shape4.png?1499094636019", id:"Shape4"},
		{src:"images/Shape5.png?1499094636019", id:"Shape5"},
		{src:"images/sunduk.png?1499094636019", id:"sunduk"},
		{src:"images/ugaday.png?1499094636019", id:"ugaday"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;