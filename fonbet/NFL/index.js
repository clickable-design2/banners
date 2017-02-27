(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1112,297);


(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,114);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,79);


(lib.fnl2017 = function() {
	this.initialize(img.fnl2017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,58);


(lib.girls = function() {
	this.initialize(img.girls);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,243);


(lib.kipr = function() {
	this.initialize(img.kipr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,50);


(lib.Layer10 = function() {
	this.initialize(img.Layer10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,108);


(lib.Layer3 = function() {
	this.initialize(img.Layer3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,86);


(lib.Layer4 = function() {
	this.initialize(img.Layer4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,56);


(lib.Layer5 = function() {
	this.initialize(img.Layer5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,97);


(lib.Layer6 = function() {
	this.initialize(img.Layer6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,55);


(lib.Layer7 = function() {
	this.initialize(img.Layer7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,90);


(lib.Layer8 = function() {
	this.initialize(img.Layer8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,180);


(lib.Layer9 = function() {
	this.initialize(img.Layer9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,149);


(lib.logo_n = function() {
	this.initialize(img.logo_n);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,401,124);


(lib.sm = function() {
	this.initialize(img.sm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,314,41);


(lib.t11 = function() {
	this.initialize(img.t11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,311,46);// helper functions:

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


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ball();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.717,0.717);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,81,81.7), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,278,79), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,53,108), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,81,149), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,77,180), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,54,90), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,86,55), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,56,97), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,51,56), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,75,86), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.girls();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,290,243), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo_n();
	this.instance.parent = this;
	this.instance.setTransform(-14,1,0.595,0.595);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-14,1,238.4,73.8), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sm();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.681,0.681);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,213.8,27.9), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.t11();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.681,0.681);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,211.7,31.3), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kipr();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,216,50), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fnl2017();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,291,58), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,1112,297), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol27();
	this.instance.parent = this;
	this.instance.setTransform(139,39.5,1,1,0,0,0,139,39.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.button, null, new cjs.Matrix2D(1,0,0,1,-139,-39.5)).s().p("A1tGLIAAsVMArbAAAIAAMVg");
	this.shape.setTransform(139,39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,x:139,y:39.5}}]}).to({state:[{t:this.instance,p:{scaleX:1.079,scaleY:1.079,x:139.1,y:39.6}}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,278,79);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(108,25,1,1,0,0,0,108,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,216,50), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(145.5,29,1,1,0,0,0,145.5,29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,291,58), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(105.9,15.7,1,1,0,0,0,105.9,15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,211.7,31.3), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(106.9,14,1,1,0,0,0,106.9,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,213.8,27.9), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol28();
	this.instance.parent = this;
	this.instance.setTransform(40.5,40.9,1,1,0,0,0,40.5,40.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,81,81.7), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(145,121.5,1,1,0,0,0,145,121.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:131.5},69).to({y:121.5},70).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,290,243);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(662.5,5,1,1,0,0,0,100.5,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(151).to({scaleX:0.95},0).to({scaleX:1},4).to({scaleX:0.95},5).to({scaleX:1},5).to({scaleX:0.95},5).to({scaleX:1},6).wait(1));

	// Symbol 6
	this.instance_1 = new lib.Symbol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(578.9,-155.3,1,1,0,0,0,105.9,15.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).to({x:457.6,y:-54.9},7,cjs.Ease.get(-1)).to({x:370.9,y:16.7},5,cjs.Ease.get(1)).to({x:363.9,y:26.7},2).to({x:370.9,y:16.7},2).wait(26).to({scaleX:1.06,scaleY:1.06,y:16.8},3).to({scaleX:1,scaleY:1,y:16.7},3).wait(31).to({scaleX:1.06,scaleY:1.06,y:16.8},3).to({scaleX:1,scaleY:1,y:16.7},3).wait(20).to({x:622.9,y:-160.3},5).to({_off:true},1).wait(32));

	// Symbol 7
	this.instance_2 = new lib.Symbol11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-115,-173,1,1,0,0,0,106.9,14);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({x:6.3,y:-87.5},5,cjs.Ease.get(-1)).to({x:152,y:15},6,cjs.Ease.get(1)).to({x:164,y:22},2).to({x:152,y:15},2).wait(8).to({x:142},2).to({x:152},2).wait(10).to({scaleX:1.12,scaleY:1.12,y:15.1},4).to({scaleX:1,scaleY:1,y:15},4).wait(26).to({scaleX:1.12,scaleY:1.12,y:15.1},4).to({scaleX:1,scaleY:1,y:15},4).wait(37).to({x:-9,y:-162},5).to({_off:true},1).wait(32));

	// Symbol 5
	this.instance_3 = new lib.Symbol14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(403.1,64.8,2.685,2.685,0,0,0,108,24.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({scaleX:1.92,scaleY:1.92,x:403,y:64.9,alpha:0.449},5,cjs.Ease.get(-1)).to({regY:25,scaleX:1,scaleY:1,y:65,alpha:1},6,cjs.Ease.get(1)).to({scaleX:0.88,scaleY:0.88,x:403.1},2).to({scaleX:1,scaleY:1,x:403},2).wait(8).to({x:404,y:73},2).to({x:403,y:65},2).wait(8).to({y:75},2).to({y:65},2).wait(89).to({x:521,y:294},5).to({_off:true},1).wait(32));

	// Symbol 4
	this.instance_4 = new lib.Symbol13();
	this.instance_4.parent = this;
	this.instance_4.setTransform(145.3,67,2.306,2.306,0,0,0,145.4,29);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.73,scaleY:1.73,x:145.4,y:67.1,alpha:0.449},4,cjs.Ease.get(-1)).to({regX:145.5,scaleX:1,scaleY:1,x:145.5,y:67,alpha:1},5,cjs.Ease.get(1)).to({regX:145.6,scaleX:0.93,scaleY:0.93,x:145.6,y:67.1},2).to({regX:145.5,scaleX:1,scaleY:1,x:145.5,y:67},2).wait(21).to({x:144.5,y:81},2).to({x:145.5,y:67},2).wait(8).to({x:135.5,y:77},2).to({x:145.5,y:67},2).wait(89).to({x:29.6,y:252},5).to({_off:true},1).wait(32));

	// Layer 1
	this.instance_5 = new lib.Symbol10();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-347.5,90.9,1,1,0,0,0,40.5,40.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(124).to({rotation:720,x:286.5,y:55.2},15).to({x:337.3,y:72.8},2,cjs.Ease.get(-1)).to({x:413.5,y:99.2},3,cjs.Ease.get(1)).to({x:479.5,y:42.2},3,cjs.Ease.get(-1)).to({x:510.5,y:4.2},2,cjs.Ease.get(1)).to({regX:40.6,scaleX:0.88,x:515.6},1).wait(1).to({regX:40.5,scaleX:0.93,x:509.6},0).to({regX:40.6,rotation:360,x:382.6,y:193.2},5,cjs.Ease.get(-1)).wait(3).to({_off:true},1).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-388,-27,1174.4,160.9);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10.png
	this.instance = new lib.Symbol25();
	this.instance.parent = this;
	this.instance.setTransform(406.5,-51,1,1,0,0,0,26.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4,x:406.6},39,cjs.Ease.get(-1)).to({regX:26.6,regY:-0.1,rotation:-8.5,y:-51.1},40,cjs.Ease.get(1)).to({rotation:-4,y:-51},41,cjs.Ease.get(-1)).to({regX:26.5,regY:0,rotation:0,x:406.5},39,cjs.Ease.get(1)).wait(1));

	// Layer 9.png
	this.instance_1 = new lib.Symbol24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(360.5,-50.5,1,1,0,0,0,40.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:2.5,x:360.6},39,cjs.Ease.get(-1)).to({regX:40.6,rotation:5.5},40,cjs.Ease.get(1)).to({rotation:2.5},41,cjs.Ease.get(-1)).to({regX:40.5,rotation:0,x:360.5},39,cjs.Ease.get(1)).wait(1));

	// Layer 8.png
	this.instance_2 = new lib.Symbol23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(314.5,-52,1,1,0,0,0,63.5,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:63.6,regY:0.9,rotation:-3.8,x:314.6},39,cjs.Ease.get(-1)).to({regY:1,rotation:-7.7},40,cjs.Ease.get(1)).to({rotation:-3.8,y:-51.9},41,cjs.Ease.get(-1)).to({regX:63.5,rotation:0,x:314.5,y:-52},39,cjs.Ease.get(1)).wait(1));

	// Layer 7.png
	this.instance_3 = new lib.Symbol22();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-271,9,1,1,0,0,0,1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:5.5},39,cjs.Ease.get(-1)).to({regY:1.1,rotation:11.5,y:9.1},40,cjs.Ease.get(1)).to({rotation:5.5},41,cjs.Ease.get(-1)).to({regY:1,rotation:0,y:9},39,cjs.Ease.get(1)).wait(1));

	// Layer 6.png
	this.instance_4 = new lib.Symbol21();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-160,-54.5,1,1,0,0,0,26,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:25.9,rotation:5.3,x:-160.1},39,cjs.Ease.get(-1)).to({rotation:10.7},40,cjs.Ease.get(1)).to({rotation:5.1,x:-160},41,cjs.Ease.get(-1)).to({regX:26,rotation:0},39,cjs.Ease.get(1)).wait(1));

	// Layer 5.png
	this.instance_5 = new lib.Symbol20();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-236,-0.5,1,1,0,0,0,6,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:2.1},39,cjs.Ease.get(-1)).to({rotation:4.5},40,cjs.Ease.get(1)).to({rotation:2,x:-235.9,y:-0.4},41,cjs.Ease.get(-1)).to({rotation:0,x:-236,y:-0.5},39,cjs.Ease.get(1)).wait(1));

	// Layer 4.png
	this.instance_6 = new lib.Symbol19();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-227.5,-38,1,1,0,0,0,-5.5,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:-1.1,rotation:6,y:-38.1},39,cjs.Ease.get(-1)).to({regY:-1,rotation:12.2,y:-38},40,cjs.Ease.get(1)).to({regX:-5.6,rotation:5.8},41,cjs.Ease.get(-1)).to({regX:-5.5,rotation:0},39,cjs.Ease.get(1)).wait(1));

	// Layer 3.png
	this.instance_7 = new lib.Symbol18();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-326.5,73,1,1,0,0,0,34.5,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-4.5,x:-326.4},39,cjs.Ease.get(-1)).to({rotation:-9.2,x:-326.5},40,cjs.Ease.get(1)).to({regX:34.4,regY:10.1,rotation:-4.5,y:73.1},41,cjs.Ease.get(-1)).to({regX:34.5,regY:10,rotation:0,y:73},39,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-361,-53,794,202);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,0,0,0.2)").s().p("EhcBASSMAAAgkjMC4DAAAMAAAAkjg");
	this.shape.setTransform(558,142.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(504,142,1,1,0,0,0,43,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(556,148.5,1,1,0,0,0,556,148.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-30.9,-1,1177.9,298), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 50;
		this.fon.y = - stage.mouseY / 50;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 9
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(522.5,96,1,1,0,0,0,255.5,48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 5
	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(124,117.5,1,1,0,0,0,145,121.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 3
	this.instance_2 = new lib.Symbol26();
	this.instance_2.parent = this;
	this.instance_2.setTransform(934.1,142.6,0.902,0.902,0,0,0,139.1,39.5);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Symbol26(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.fon = new lib.Symbol2();
	this.fon.parent = this;
	this.fon.setTransform(-12.9,0.6,1,1,0,0,0,1.1,46.6);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(419,43,1254,298);
// library properties:
lib.properties = {
	width: 1080,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1486549851741", id:"back"},
		{src:"images/ball.png?1486549851741", id:"ball"},
		{src:"images/button.png?1486549851741", id:"button"},
		{src:"images/fnl2017.png?1486549851741", id:"fnl2017"},
		{src:"images/girls.png?1486549851741", id:"girls"},
		{src:"images/kipr.png?1486549851741", id:"kipr"},
		{src:"images/Layer10.png?1486549851741", id:"Layer10"},
		{src:"images/Layer3.png?1486549851741", id:"Layer3"},
		{src:"images/Layer4.png?1486549851741", id:"Layer4"},
		{src:"images/Layer5.png?1486549851741", id:"Layer5"},
		{src:"images/Layer6.png?1486549851741", id:"Layer6"},
		{src:"images/Layer7.png?1486549851741", id:"Layer7"},
		{src:"images/Layer8.png?1486549851741", id:"Layer8"},
		{src:"images/Layer9.png?1486549851741", id:"Layer9"},
		{src:"images/logo_n.png?1486549851741", id:"logo_n"},
		{src:"images/sm.png?1486549851741", id:"sm"},
		{src:"images/t11.png?1486549851741", id:"t11"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;