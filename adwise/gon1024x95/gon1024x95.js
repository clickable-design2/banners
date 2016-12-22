(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.backgr = function() {
	this.initialize(img.backgr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,168);


(lib.logo3 = function() {
	this.initialize(img.logo3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,462,94);


(lib.meshok1 = function() {
	this.initialize(img.meshok1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,152);


(lib.meshok2 = function() {
	this.initialize(img.meshok2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,204);


(lib.meshok3 = function() {
	this.initialize(img.meshok3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,186);


(lib.snow1 = function() {
	this.initialize(img.snow1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.snow2 = function() {
	this.initialize(img.snow2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.snow3 = function() {
	this.initialize(img.snow3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.tip_02 = function() {
	this.initialize(img.tip_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,139);


(lib.tip_05 = function() {
	this.initialize(img.tip_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,91);// helper functions:

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


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snow3();
	this.instance.parent = this;
	this.instance.setTransform(0,-430,0.537,0.537);

	this.instance_1 = new lib.snow1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(430,-430,0.716,0.716);

	this.instance_2 = new lib.snow2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(215,-430,0.43,0.43);

	this.instance_3 = new lib.snow3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-215,0.537,0.537);

	this.instance_4 = new lib.snow1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(430,-215,0.716,0.716);

	this.instance_5 = new lib.snow2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(215,-215,0.43,0.43);

	this.instance_6 = new lib.snow3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-645,-430,0.537,0.537);

	this.instance_7 = new lib.snow1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-215,-430,0.716,0.716);

	this.instance_8 = new lib.snow2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-430,-430,0.43,0.43);

	this.instance_9 = new lib.snow3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-645,-215,0.537,0.537);

	this.instance_10 = new lib.snow1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-215,-215,0.716,0.716);

	this.instance_11 = new lib.snow2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-430,-215,0.43,0.43);

	this.instance_12 = new lib.snow3();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,0,0.537,0.537);

	this.instance_13 = new lib.snow1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(430,0,0.716,0.716);

	this.instance_14 = new lib.snow2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(215,0,0.43,0.43);

	this.instance_15 = new lib.snow3();
	this.instance_15.parent = this;
	this.instance_15.setTransform(0,215,0.537,0.537);

	this.instance_16 = new lib.snow1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(430,215,0.716,0.716);

	this.instance_17 = new lib.snow2();
	this.instance_17.parent = this;
	this.instance_17.setTransform(215,215,0.43,0.43);

	this.instance_18 = new lib.snow3();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-645,0,0.537,0.537);

	this.instance_19 = new lib.snow1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-215,0,0.716,0.716);

	this.instance_20 = new lib.snow2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-430,0,0.43,0.43);

	this.instance_21 = new lib.snow3();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-645,215,0.537,0.537);

	this.instance_22 = new lib.snow1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-215,215,0.716,0.716);

	this.instance_23 = new lib.snow2();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-430,215,0.43,0.43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-645,-430,1290,860), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#230000").s().p("AyoDMQgUAAAAgUIAAlvQAAgUAUAAMAlRAAAQAUAAAAAUIAAFvQAAAUgUAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-121.2,-20.4,242.6,40.8), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AyqDNQgUAAAAgUIAAlxQAAgUAUAAMAlVAAAQAUAAAAAUIAAFxQAAAUgUAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-121.5,-20.5,243.1,41), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C90006","#FB0110","#C90006","#8A0E12","#C90006"],[0.004,0.498,1,1,1],-121.5,0,121.6,0).s().p("AyqDNQgUAAAAgSIAAl1QAAgSAUAAMAlVAAAQAUAAAAASIAAF1QAAASgUAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-121.5,-20.5,243.1,41), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-95.6,-8.4,191.1,16.9), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9933CC").s().p("ApSJTIAAylISlAAIAASlg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9933CC").s().p("AobIcIAAw3IQ3AAIAAQ3g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9933CC").s().p("An/IAIAAv/IP/AAIAAP/g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.meshok3();
	this.instance.parent = this;
	this.instance.setTransform(-62,-61,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-62,-61,124.1,122.1), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.meshok1();
	this.instance.parent = this;
	this.instance.setTransform(-52.5,-49.8,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-52.5,-49.8,105,99.8), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.meshok2();
	this.instance.parent = this;
	this.instance.setTransform(-67.9,-66.9,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-67.9,-66.9,135.9,133.9), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo3();
	this.instance.parent = this;
	this.instance.setTransform(-175.7,-35.7,0.761,0.761);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-175.7,-35.7,351.5,71.5), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.backgr();
	this.instance.parent = this;
	this.instance.setTransform(-811.6,-133.1,1.585,1.585);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-811.6,-133.1,1623.2,266.3), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tip_02();
	this.instance.parent = this;
	this.instance.setTransform(-67.5,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-67.5,-69.5,135,139), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tip_05();
	this.instance.parent = this;
	this.instance.setTransform(-39.5,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-39.5,-45.5,79,91), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(-61.1,-228,0.8,0.8,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-577,-571.9,1031.9,688), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.027,1.195);
	this.instance.filters = [new cjs.BlurFilter(14, 14, 1)];
	this.instance.cache(-123,-22,247,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-131.7,-31.5,266,66), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},19,cjs.Ease.get(1)).to({alpha:0.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.7,-31.5,266,66);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ32();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ33();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-131.7,-31.5,266,66), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(30,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-32,-61,124.1,122.1), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(-40,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-92.5,-49.8,105,99.8), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-67.9,-66.9,135.9,133.9), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(-70.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-70.2,0.8);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-178,-38,356,76);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-247,-36,357,77), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-67.5,-69.5,135,139), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-4.1},4,cjs.Ease.get(-1)).to({y:-8.7},6,cjs.Ease.get(1)).to({y:-4.6},5,cjs.Ease.get(-1)).to({y:0},5,cjs.Ease.get(1)).wait(1).to({y:-4.1},4,cjs.Ease.get(-1)).to({y:-8.7},6,cjs.Ease.get(1)).to({y:-4.6},5,cjs.Ease.get(-1)).to({y:0},5,cjs.Ease.get(1)).wait(1).to({y:-8.7},20,cjs.Ease.get(1)).to({y:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-45.5,79,91);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tip_05.png
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(-17.2,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// tip_02.png
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-56.7,-69.5,140.3,139), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_51 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_59 = function() {
		this.stop();
	}
	this.frame_67 = function() {
		this.stop();
	}
	this.frame_75 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(51).call(this.frame_51).wait(8).call(this.frame_59).wait(8).call(this.frame_67).wait(8).call(this.frame_75).wait(1));

	// meshok2
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(9.9,53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({y:48},5,cjs.Ease.get(1)).to({y:53},6,cjs.Ease.get(1)).wait(7).to({y:48},6,cjs.Ease.get(1)).to({y:53},5,cjs.Ease.get(1)).wait(12).to({scaleX:1.39,scaleY:1.39,x:10.9,y:20.5},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:9.9,y:53},0).to({scaleX:0.8,scaleY:0.8,x:47.3,y:66.7},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:9.9,y:53},0).to({scaleX:0.74,scaleY:0.74,x:-5.1,y:70.2},7,cjs.Ease.get(1)).wait(1));

	// meshok1
	this.instance_1 = new lib.Символ23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-69.5,60.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({y:55.9},5,cjs.Ease.get(1)).to({y:60.9},6,cjs.Ease.get(1)).wait(17).to({y:55.9},6,cjs.Ease.get(1)).to({y:60.9},5,cjs.Ease.get(1)).wait(7).to({scaleX:0.82,scaleY:0.82,x:-99.2,y:73.9},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:-69.5,y:60.9},0).to({scaleX:1.29,scaleY:1.29,x:-28,y:48.7},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:-69.5,y:60.9},0).to({scaleX:0.74,scaleY:0.74,x:-64,y:76.1},7,cjs.Ease.get(1)).wait(1));

	// meshok3
	this.instance_2 = new lib.Символ24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(100,50.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:45.1},5,cjs.Ease.get(1)).to({y:50.1},6,cjs.Ease.get(1)).wait(27).to({y:45.1},6,cjs.Ease.get(1)).to({y:50.1},5,cjs.Ease.get(1)).wait(2).to({scaleX:0.82,scaleY:0.82,x:129.7,y:65.1},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:100,y:50.1},0).to({scaleX:0.8,scaleY:0.8,x:118.9,y:64.4},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:100,y:50.1},0).to({scaleX:1.2,scaleY:1.2,x:81.9,y:38.1},7,cjs.Ease.get(0.98)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162,-14,354.1,133.9);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(122,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:323},145).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-455,-592.9,1032,688);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;

	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-131.7,-31.5,266,66), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(84.2,-0.3,1.198,1.198);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-211.5,-43.3,426,91.1), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(-16.2,0,1.215,1.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:6.3},22,cjs.Ease.get(-1)).to({y:12.6},22,cjs.Ease.get(1)).to({y:6.2},23,cjs.Ease.get(-1)).to({y:0},22,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.2,-84.4,170.4,168.9);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:1.6},9,cjs.Ease.get(-1)).to({y:3.3},10,cjs.Ease.get(0.95)).to({y:1.7},10,cjs.Ease.get(-1)).to({y:0},10,cjs.Ease.get(0.95)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.7,-31.5,266,66);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(0,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-131.7,-29,266,67), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.alpha = 0.352;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},19,cjs.Ease.get(1)).to({alpha:0.352},20,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.5,-43.3,426,91.1);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo3.png
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(-606.2,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// backgr.jpg
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-817.7,-133.1,1629.3,266.3), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 7
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(-304.1,27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// backgr.jpg
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-599.4,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-1417.1,-131,1629.3,266.3), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(0,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-131.7,-31.5,266,66), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.alpha = 0.281;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ39();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.7,-31.5,266,66);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(439.9,2.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 2
	this.meshki = new lib.Символ2();
	this.meshki.parent = this;
	this.meshki.setTransform(-8,-51);

	this.timeline.addTween(cjs.Tween.get(this.meshki).wait(1));

	// Символ 1
	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 3
	this.instance_2 = new lib.Символ3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(445.1,-7.2,0.635,0.635,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-455,-592.9,1034.6,688), null);


// stage content:
(lib.gon1024x95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		var _this = this;
		
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.main.meshki.gotoAndPlay(0);
		}
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.depos.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
			_this.main.meshki.gotoAndPlay(53);
		}
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.fs70.addEventListener("mouseover", fl_MouseOverHandler_92);
		
		function fl_MouseOverHandler_92()
		{
			_this.main.meshki.gotoAndPlay(61);
		}
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.mill.addEventListener("mouseover", fl_MouseOverHandler_3);
		
		function fl_MouseOverHandler_3()
		{
			_this.main.meshki.gotoAndPlay(69);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 12
	this.fs70 = new lib.Символ26();
	this.fs70.parent = this;
	this.fs70.setTransform(328.1,48.1);
	new cjs.ButtonHelper(this.fs70, 0, 1, 2, false, new lib.Символ26(), 3);

	this.timeline.addTween(cjs.Tween.get(this.fs70).wait(1));

	// Слой 11
	this.depos = new lib.Символ25();
	this.depos.parent = this;
	this.depos.setTransform(444.8,48.3);
	new cjs.ButtonHelper(this.depos, 0, 1, 2, false, new lib.Символ25(), 3);

	this.timeline.addTween(cjs.Tween.get(this.depos).wait(1));

	// Слой 13
	this.mill = new lib.Символ27();
	this.mill.parent = this;
	this.mill.setTransform(565.6,45.1);
	new cjs.ButtonHelper(this.mill, 0, 1, 2, false, new lib.Символ27(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mill).wait(1));

	// Растровое изображение 8
	this.main = new lib.Символ4();
	this.main.parent = this;
	this.main.setTransform(446.5,44);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(503.4,-501.4,1034.6,688);
// library properties:
lib.properties = {
	width: 1024,
	height: 95,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/backgr.jpg?1482315206025", id:"backgr"},
		{src:"images/logo3.png?1482315206025", id:"logo3"},
		{src:"images/meshok1.png?1482315206025", id:"meshok1"},
		{src:"images/meshok2.png?1482315206025", id:"meshok2"},
		{src:"images/meshok3.png?1482315206025", id:"meshok3"},
		{src:"images/snow1.png?1482315206025", id:"snow1"},
		{src:"images/snow2.png?1482315206025", id:"snow2"},
		{src:"images/snow3.png?1482315206025", id:"snow3"},
		{src:"images/tip_02.png?1482315206025", id:"tip_02"},
		{src:"images/tip_05.png?1482315206025", id:"tip_05"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;