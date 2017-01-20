(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.dama = function() {
	this.initialize(img.dama);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,354,300);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.pizza = function() {
	this.initialize(img.pizza);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,343,143);


(lib.ruka_03 = function() {
	this.initialize(img.ruka_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.ruka_06 = function() {
	this.initialize(img.ruka_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,17);


(lib.ruka_10 = function() {
	this.initialize(img.ruka_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,24);


(lib.ruka_13 = function() {
	this.initialize(img.ruka_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,25);


(lib.ruka_16 = function() {
	this.initialize(img.ruka_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,24);


(lib.ruka_21 = function() {
	this.initialize(img.ruka_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,21);


(lib.ruka_241 = function() {
	this.initialize(img.ruka_241);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,123);


(lib.ruka_28 = function() {
	this.initialize(img.ruka_28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,19);// helper functions:

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


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0099").s().p("EgucAXAMAAAgt/MBc5AAAMAAAAt/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-297.2,-147.2,594.6,294.5), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A6Fa5MAAAg1xMA0LAAAMAAAA1xg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A40Z9MAAAgz5MAxpAAAMAAAAz5g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-188.4,-25.9,376.9,51.9), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-188.4,-25.9,376.9,51.9), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],6.1,-47.5,6.1,29.1).s().p("EgxbAF9IAAr5MBi3AAAIAAL5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-316.4,-38.1,632.8,76.3), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon();
	this.instance.parent = this;
	this.instance.setTransform(-300,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-300,-150,600,300), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pizza();
	this.instance.parent = this;
	this.instance.setTransform(-142.3,-59.3,0.83,0.83);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-142.3,-59.3,284.7,118.7), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dama();
	this.instance.parent = this;
	this.instance.setTransform(-167.6,-142,0.947,0.947);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-167.6,-142,335.3,284.2), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_03();
	this.instance.parent = this;
	this.instance.setTransform(-10,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(-10,-10,20,20), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_06();
	this.instance.parent = this;
	this.instance.setTransform(-9.5,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(-9.5,-8.5,19,17), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_10();
	this.instance.parent = this;
	this.instance.setTransform(-9,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(-9,-12,18,24), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_13();
	this.instance.parent = this;
	this.instance.setTransform(-11,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-11,-11,25,25), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_21();
	this.instance.parent = this;
	this.instance.setTransform(-11,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(-11,-10.5,22,21), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_16();
	this.instance.parent = this;
	this.instance.setTransform(-10.5,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-10.5,-12,21,24), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_241();
	this.instance.parent = this;
	this.instance.setTransform(-47,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-47,-61.5,94,123), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_28();
	this.instance.parent = this;
	this.instance.setTransform(-7,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-7,-9.5,14,19), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.6);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-190,-28,381,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-190.4,-26.3,384,59), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,scaleY:1.04},12,cjs.Ease.get(-1)).to({scaleX:1.08,scaleY:1.08},12,cjs.Ease.get(1)).to({scaleX:1.04,scaleY:1.04},13,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},12,cjs.Ease.get(1)).to({rotation:3.2},3,cjs.Ease.get(1)).to({rotation:-2,y:-5.5},3,cjs.Ease.get(1)).to({rotation:3.2,y:0},3,cjs.Ease.get(1)).to({rotation:0},3,cjs.Ease.get(1)).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.3,-59.3,284.7,118.7);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-167.6,-142,335.3,284.2), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03},29,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07},30,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03},31,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},29,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-150,600,300);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.parent = this;
	this.instance.setTransform(6.9,4.2,1,1,0,0,0,6.9,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15},9,cjs.Ease.get(1)).to({rotation:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,20);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(7.8,2.5,1,1,0,0,0,7.8,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-17.5,x:7.9},9,cjs.Ease.get(1)).to({rotation:0,x:7.8},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-8.5,19,17);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(-9,-12,18,24), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(-4,8.5,1,1,0,0,0,-3.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-3.4,rotation:12.7,x:-3.9},9,cjs.Ease.get(1)).to({regX:-3.5,rotation:0,x:-4},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-8,25,25);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,7.2,1,1,0,0,0,-1.5,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15,y:7.3},9,cjs.Ease.get(1)).to({rotation:0,y:7.2},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-10.5,22,21);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-10.5,-12,21,24), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-47,-61.5,94,123), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(0,4.2,1,1,0,0,0,0,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-22.9},9,cjs.Ease.get(1)).to({rotation:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-9.5,14,19);


(lib.Символ16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.1,-25.1,1,1,0,0,0,-0.1,-24.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.05,scaleY:1.05},11,cjs.Ease.get(-1)).to({scaleX:1.11,scaleY:1.11},11,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05},11,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190.4,-27.1,384,59);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pizza
	this.pizza = new lib.Символ6();
	this.pizza.parent = this;
	this.pizza.setTransform(-16.2,59.4,1.14,1.14);

	this.timeline.addTween(cjs.Tween.get(this.pizza).wait(1));

	// dama
	this.dama = new lib.Символ4();
	this.dama.parent = this;
	this.dama.setTransform(0,0,1.14,1.14);

	this.timeline.addTween(cjs.Tween.get(this.dama).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-191,-161.9,382.1,323.9), null);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(0,5.5);

	this.instance_1 = new lib.Символ59();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,-7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ62, new cjs.Rectangle(-10.5,-17.5,21,35), null);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.parent = this;
	this.instance.setTransform(1.5,5.5);

	this.instance_1 = new lib.Символ57();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1,-9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(-10.5,-17.5,21,35), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-2.2},24,cjs.Ease.get(0.96)).to({rotation:2.8},35,cjs.Ease.get(0.96)).to({rotation:0},17,cjs.Ease.get(0.96)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190.4,-27.1,384,59);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(-17.1,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-316.4,-38.1,632.8,76.3), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:17.8},4,cjs.Ease.get(1)).to({y:0},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191,-161.9,382.1,323.9);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_112 = function() {
		this.stop();
	}
	this.frame_124 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(13).call(this.frame_112).wait(12).call(this.frame_124).wait(1));

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(0,-13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-0.1,rotation:-2.7,x:-113.1,y:-13.3},24,cjs.Ease.get(-1)).to({regY:0,rotation:0,x:-230.9,y:-13.2},25,cjs.Ease.get(1)).to({rotation:2.2,x:-115.5},25,cjs.Ease.get(-1)).to({rotation:0,x:0},25,cjs.Ease.get(1)).wait(1).to({regY:-0.1,rotation:-2.7,x:-113.1,y:-13.3},6,cjs.Ease.get(-1)).to({regY:0,rotation:0,x:-230.9,y:-13.2},6,cjs.Ease.get(1)).to({rotation:2.2,x:-115.5},6,cjs.Ease.get(-1)).to({rotation:0,x:0},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191,-175.2,382.1,323.9);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.parent = this;
	this.instance.setTransform(0.2,13.4,1,1,0,0,0,2.2,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:15.3,rotation:-8.5,x:0.3},9).to({regY:15.4,rotation:0,x:0.2},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-19.5,21,35);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.parent = this;
	this.instance.setTransform(6,14.8,1,1,0,0,0,6,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-27.7,y:14.9},9,cjs.Ease.get(1)).to({rotation:0,y:14.8},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-17.5,21,35);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(0,11.7);

	this.instance_1 = new lib.Символ45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25,-17.3);

	this.instance_2 = new lib.Символ63();
	this.instance_2.parent = this;
	this.instance_2.setTransform(16.5,-44.3);

	this.instance_3 = new lib.Символ51();
	this.instance_3.parent = this;
	this.instance_3.setTransform(21.7,-33.9);

	this.instance_4 = new lib.Символ53();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-31.5,-37.3);

	this.instance_5 = new lib.Символ61();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.3,-55.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-47,-73.2,94,146.4), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-0.4,y:9.7},0).wait(1).to({x:-0.8,y:19.6},0).wait(1).to({x:-1.2,y:29.6},0).wait(1).to({x:-1.6,y:39},0).wait(1).to({x:-2,y:47.6},0).wait(1).to({x:-2.3,y:55.2},0).wait(1).to({x:-2.6,y:61.8},0).wait(1).to({x:-2.8,y:67.6},0).wait(1).to({x:-3,y:72.7},0).wait(1).to({x:-3.2,y:77.3},0).wait(1).to({x:-3.4,y:81.5},0).wait(1).to({x:-3.5,y:85.4},0).wait(1).to({x:-3.7,y:88.9},0).wait(1).to({x:-3.8,y:92.3},0).wait(1).to({x:-3.9,y:95.5},0).wait(1).to({x:-4.1,y:98.5},0).wait(1).to({x:-4.2,y:101.5},0).wait(1).to({x:-4.3,y:104.3},0).wait(1).to({x:-4.4,y:107},0).wait(1).to({x:-4.5,y:109.6},0).wait(1).to({x:-4.6,y:112.1},0).wait(1).to({x:-4.7,y:114.6},0).wait(1).to({x:-4.8,y:117},0).wait(1).to({x:-4.9,y:119.4},0).wait(1).to({x:-5,y:121.7},0).wait(1).to({x:-5.1,y:124},0).wait(1).to({x:-5.2,y:126.2},0).wait(1).to({x:-5.3,y:128.4},0).wait(1).to({x:-5.4,y:130.5},0).wait(1).to({x:-5.5,y:132.6},0).wait(1).to({x:-5.6,y:134.6},0).wait(1).to({y:136.5},0).wait(1).to({x:-5.7,y:138.3},0).wait(1).to({x:-5.8,y:140.1},0).wait(1).to({x:-5.9,y:141.8},0).wait(1).to({y:143.4},0).wait(1).to({x:-6,y:145},0).wait(1).to({y:146.4},0).wait(1).to({x:-6.1,y:147.8},0).wait(1).to({x:-6.2,y:149.1},0).wait(1).to({y:150.2},0).wait(1).to({y:151.3},0).wait(1).to({x:-6.3,y:152.3},0).wait(1).to({y:153.2},0).wait(1).to({x:-6.4,y:154},0).wait(1).to({y:154.8},0).wait(1).to({y:155.4},0).wait(1).to({y:156},0).wait(1).to({x:-6.5,y:156.5},0).wait(1).to({y:157},0).wait(1).to({y:157.3},0).wait(1).to({y:157.6},0).wait(1).to({y:157.9},0).wait(1).to({y:158.1},0).wait(1).to({y:158.3},0).wait(1).to({y:158.4},0).wait(1).to({y:158.5},0).wait(1).to({y:158.6},0).wait(3).to({x:-6.2,y:150.1},0).wait(1).to({x:-5.8,y:141.3},0).wait(1).to({x:-5.5,y:132.5},0).wait(1).to({x:-5.1,y:123.9},0).wait(1).to({x:-4.8,y:115.9},0).wait(1).to({x:-4.5,y:108.6},0).wait(1).to({x:-4.2,y:102.1},0).wait(1).to({x:-4,y:96.4},0).wait(1).to({x:-3.8,y:91.3},0).wait(1).to({x:-3.6,y:86.7},0).wait(1).to({x:-3.4,y:82.6},0).wait(1).to({x:-3.3,y:78.8},0).wait(1).to({x:-3.1,y:75.3},0).wait(1).to({x:-3,y:72},0).wait(1).to({x:-2.8,y:68.8},0).wait(1).to({x:-2.7,y:65.9},0).wait(1).to({x:-2.6,y:63.1},0).wait(1).to({x:-2.5,y:60.4},0).wait(1).to({x:-2.4,y:57.8},0).wait(1).to({x:-2.3,y:55.3},0).wait(1).to({x:-2.2,y:52.9},0).wait(1).to({x:-2.1,y:50.6},0).wait(1).to({x:-2,y:48.3},0).wait(1).to({x:-1.9,y:46},0).wait(1).to({x:-1.8,y:43.9},0).wait(1).to({x:-1.7,y:41.7},0).wait(1).to({x:-1.6,y:39.6},0).wait(1).to({y:37.6},0).wait(1).to({x:-1.5,y:35.5},0).wait(1).to({x:-1.4,y:33.6},0).wait(1).to({x:-1.3,y:31.6},0).wait(1).to({x:-1.2,y:29.7},0).wait(1).to({y:27.8},0).wait(1).to({x:-1.1,y:26},0).wait(1).to({x:-1,y:24.3},0).wait(1).to({x:-0.9,y:22.6},0).wait(1).to({y:20.9},0).wait(1).to({x:-0.8,y:19.3},0).wait(1).to({x:-0.7,y:17.8},0).wait(1).to({y:16.3},0).wait(1).to({x:-0.6,y:14.9},0).wait(1).to({y:13.5},0).wait(1).to({x:-0.5,y:12.3},0).wait(1).to({y:11.1},0).wait(1).to({x:-0.4,y:9.9},0).wait(1).to({y:8.8},0).wait(1).to({x:-0.3,y:7.8},0).wait(1).to({y:6.9},0).wait(1).to({y:6.1},0).wait(1).to({x:-0.2,y:5.3},0).wait(1).to({y:4.6},0).wait(1).to({y:3.9},0).wait(1).to({x:-0.1,y:3.3},0).wait(1).to({y:2.8},0).wait(1).to({y:2.3},0).wait(1).to({y:1.9},0).wait(1).to({y:1.5},0).wait(1).to({y:1.2},0).wait(1).to({x:0,y:0.9},0).wait(1).to({y:0.7},0).wait(1).to({y:0.5},0).wait(1).to({y:0.4},0).wait(1).to({y:0.2},0).wait(2).to({y:0.1},0).wait(1).to({y:0},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-73.2,94,146.4);


(lib.Символ94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 47
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(1.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1.3,0.6,9.4,-12.7,24.4,-20.1,45.5,-30.5,67.7,-23,90.1,-15.4,100.5,5.7,102,8.7,103.1,11.8]}},17).to({guide:{path:[103.1,11.8,109.8,30.1,103.4,49.1,95.8,71.4,74.6,81.8,53.5,92.3,31.3,84.7,19.3,80.7,10.8,72.7]}},23).to({guide:{path:[10.7,72.7,3.3,65.8,-1.4,56,-11.8,34.9,-4.3,12.6,-2.1,6.1,1.3,0.6]}},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.8,-72.6,94,146.4);


(lib.Символ86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ94();
	this.instance.parent = this;
	this.instance.setTransform(-78.8,30.1,1,1,-18.7,0,0,34.6,43.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6.8,y:30.2},9,cjs.Ease.get(-1)).to({rotation:6.5,x:-78.7,y:30},10,cjs.Ease.get(1)).to({rotation:-6,x:-78.8,y:30.2},10,cjs.Ease.get(-1)).to({rotation:-18.7,y:30.1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184.7,-72.2,128.5,156.5);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-228.1},40,cjs.Ease.get(-1)).to({x:-450.4},39,cjs.Ease.get(1)).to({x:-219.6},41,cjs.Ease.get(-1)).to({x:0},39,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-73.2,94,146.4);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.priz = new lib.Символ86();
	this.priz.parent = this;
	this.priz.setTransform(0.2,0.1,1.256,1.256,0,0,0,-125.6,-0.4);
	this.priz._off = true;

	this.timeline.addTween(cjs.Tween.get(this.priz).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(7));

	// Слой 4
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(16.4,-102.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:16.5,y:-238.4},6,cjs.Ease.get(1)).wait(1).to({x:16.4,y:-102.9},6,cjs.Ease.get(1)).wait(1));

	// Символ 47
	this.instance_1 = new lib.Символ24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(236.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},6).wait(1).to({alpha:1},6).wait(1));

	// Слой 3
	this.damapizza = new lib.Символ8();
	this.damapizza.parent = this;
	this.damapizza.setTransform(117.6,0.1);

	this.timeline.addTween(cjs.Tween.get(this.damapizza).to({scaleX:1.08,scaleY:1.08,x:126.6,y:1.1},6,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:117.6,y:0.1},6,cjs.Ease.get(1)).wait(1));

	// Слой 6
	this.instance_2 = new lib.Символ22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.5,2.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0.309},6,cjs.Ease.get(1)).wait(1).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.08,scaleY:1.08,x:-0.3,y:1},6,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-175.1,632.9,325.2);


// stage content:
(lib.eda600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		stage.canvas.style.cursor = "none";
		this.prizel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		function fl_CustomMouseCursor() {
			this.prizel.x = stage.mouseX/window.devicePixelRatio;
			this.prizel.y = stage.mouseY/window.devicePixelRatio;
		}
		 this.vlevo.cursor = "none";
		 this.vpravo.cursor = "none";
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
			_this.prizel.gotoAndStop(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		   _this.main.gotoAndPlay(8);
		   _this.prizel.gotoAndStop(0);
		   _this.main.damapizza.gotoAndPlay(0);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.vlevo.addEventListener("mouseover", fl_MouseOverHandler_11);
		
		function fl_MouseOverHandler_11()
		{
			_this.main.damapizza.gotoAndPlay(100);
		}
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.vpravo.addEventListener("mouseover", fl_MouseOverHandler_21);
		
		function fl_MouseOverHandler_21()
		{
			_this.main.damapizza.gotoAndPlay(113);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.vpravo = new lib.Символ20();
	this.vpravo.parent = this;
	this.vpravo.setTransform(133.1,146.1);
	new cjs.ButtonHelper(this.vpravo, 0, 1, 2, false, new lib.Символ20(), 3);

	this.vlevo = new lib.Символ19();
	this.vlevo.parent = this;
	this.vlevo.setTransform(459.1,152.1);
	new cjs.ButtonHelper(this.vlevo, 0, 1, 2, false, new lib.Символ19(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.vlevo},{t:this.vpravo}]}).wait(1));

	// Слой 2
	this.prizel = new lib.Символ18();
	this.prizel.parent = this;
	this.prizel.setTransform(740.9,269.4,1,1,0,0,0,-0.7,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.prizel).wait(1));

	// Слой 1
	this.main = new lib.Символ1();
	this.main.parent = this;
	this.main.setTransform(300,150,1.07,1.07);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(266.1,112.6,690.1,355.6);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dama.png?1484927849285", id:"dama"},
		{src:"images/fon.jpg?1484927849285", id:"fon"},
		{src:"images/pizza.png?1484927849285", id:"pizza"},
		{src:"images/ruka_03.png?1484927849285", id:"ruka_03"},
		{src:"images/ruka_06.png?1484927849285", id:"ruka_06"},
		{src:"images/ruka_10.png?1484927849285", id:"ruka_10"},
		{src:"images/ruka_13.png?1484927849285", id:"ruka_13"},
		{src:"images/ruka_16.png?1484927849285", id:"ruka_16"},
		{src:"images/ruka_21.png?1484927849285", id:"ruka_21"},
		{src:"images/ruka_241.png?1484927849285", id:"ruka_241"},
		{src:"images/ruka_28.png?1484927849285", id:"ruka_28"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;