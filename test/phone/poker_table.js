(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.bonus = function() {
	this.initialize(img.bonus);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,113);


(lib.j_bubna = function() {
	this.initialize(img.j_bubna);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.k_bubna = function() {
	this.initialize(img.k_bubna);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.seven_trefa = function() {
	this.initialize(img.seven_trefa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.ten_bubna = function() {
	this.initialize(img.ten_bubna);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.two_pika = function() {
	this.initialize(img.two_pika);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);// helper functions:

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


(lib.еуче = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("БЕЗ ДЕПОЗИТА", "bold 27px 'RexBold '", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 263;
	this.text.parent = this;
	this.text.setTransform(202.5,241.7,1.517,1.517);

	this.text_1 = new cjs.Text("ВАШ БОНУС", "bold 35px 'RexBold '", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 37;
	this.text_1.lineWidth = 263;
	this.text_1.parent = this;
	this.text_1.setTransform(203.5,3.1,1.517,1.517);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.749)").s().p("A2eWfQpUpUAAtLQAAtKJUpUQJUpUNKAAQNLAAJUJUQJUJUAANKQAANLpUJUQpUJUtLAAQtKAApUpUg");
	this.shape.setTransform(201.7,147.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.еуче, new cjs.Rectangle(-1.8,-55.6,407.9,407), null);


(lib.two_pika_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.two_pika();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.two_pika_1, new cjs.Rectangle(0,0,232,325), null);


(lib.ten = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bonus();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ten, new cjs.Rectangle(0,0,149,113), null);


(lib.seven_trefa_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.seven_trefa();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seven_trefa_1, new cjs.Rectangle(0,0,232,325), null);


(lib.hight_light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("AszW5Qi0AAAAi0MAAAgoJQAAi0C0AAIZnAAQC0AAAAC0MAAAAoJQAAC0i0AAg");
	this.shape.setTransform(100,146.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hight_light, new cjs.Rectangle(0,0,200,293.1), null);


(lib.back_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.back_1, new cjs.Rectangle(0,0,232,325), null);


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hight_light();
	this.instance.parent = this;
	this.instance.setTransform(100,146.5,1,1,0,0,0,100,146.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},18).to({alpha:0},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,293.1);


(lib.k_bubna_1 = function(mode,startPosition,loop) {
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

	// Layer 4
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(116.6,159.5,1,1,0,0,0,100,146.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.k_bubna();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.j_bubna_1 = function(mode,startPosition,loop) {
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

	// Layer 2
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(116,159.2,1,1,0,0,0,100,146.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.j_bubna();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.bonus_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// Layer 1
	this.ten = new lib.ten();
	this.ten.parent = this;
	this.ten.setTransform(110.8,14.3,3.43,3.43,-10.2,0,0,74.5,56.5);
	this.ten.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.ten).to({scaleX:1.33,scaleY:1.33,rotation:0,x:110.5,y:14.1,alpha:1},9,cjs.Ease.get(-1)).to({scaleX:1.52,scaleY:1.52},5,cjs.Ease.get(1)).wait(1));

	// Layer 2
	this.instance = new lib.еуче();
	this.instance.parent = this;
	this.instance.setTransform(111.1,37.1,1,1,0,0,0,203,169.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.93},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-221.6,571.6,471.9);


(lib.ten_bubna_1 = function(mode,startPosition,loop) {
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

	// Layer 2
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(115.9,159.7,1,1,0,0,0,100,146.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 4
	this.instance_1 = new lib.ten_bubna();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.main_portrait = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_161 = function() {
		this.k_bubna.gotoAndPlay(1);
		this.ten_bubna.gotoAndPlay(1);
		this.j_bubna.gotoAndPlay(1);
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(161).call(this.frame_161).wait(1));

	// j_bubna
	this.j_bubna = new lib.j_bubna_1();
	this.j_bubna.parent = this;
	this.j_bubna.setTransform(523.3,340.1,0.036,0.55,0,0,0,116,162.5);
	this.j_bubna._off = true;

	this.timeline.addTween(cjs.Tween.get(this.j_bubna).wait(149).to({_off:false},0).to({scaleX:0.55},6,cjs.Ease.get(1)).to({regX:116.2,regY:163,scaleX:0.52,scaleY:0.52,x:524.2,y:340.6},6,cjs.Ease.get(1)).wait(1));

	// back
	this.instance = new lib.back_1();
	this.instance.parent = this;
	this.instance.setTransform(524,340.4,0.715,0.715,0,0,0,116.1,162.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(128).to({_off:false},0).to({regX:116,regY:162.5,scaleX:0.52,scaleY:0.52,y:340.3,alpha:1},8,cjs.Ease.get(1)).wait(1).to({regY:162.6,scaleX:0.55,scaleY:0.55,y:340.4},6,cjs.Ease.get(-1)).to({regX:117.5,scaleX:0.03},6,cjs.Ease.get(-1)).to({_off:true},1).wait(12));

	// five_chirva
	this.ten_bubna = new lib.ten_bubna_1();
	this.ten_bubna.parent = this;
	this.ten_bubna.setTransform(398.3,340.3,0.027,0.52,0,0,0,116.3,162.5);
	this.ten_bubna._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ten_bubna).wait(104).to({_off:false},0).to({regX:116,regY:162.6,scaleX:0.55,scaleY:0.55,y:340.4},6,cjs.Ease.get(1)).to({regX:116.1,regY:162.5,scaleX:0.52,scaleY:0.52,y:340.3},6,cjs.Ease.get(1)).wait(46));

	// back
	this.instance_1 = new lib.back_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(398.3,340.4,0.715,0.715,0,0,0,116.1,162.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(81).to({_off:false},0).to({regY:162.5,scaleX:0.52,scaleY:0.52,x:398.2,y:340.3,alpha:1},10,cjs.Ease.get(1)).wait(1).to({regX:116.2,regY:162.6,scaleX:0.55,scaleY:0.55,x:398.3,y:340.4},6,cjs.Ease.get(-1)).to({regX:117.9,scaleX:0.03},6,cjs.Ease.get(-1)).to({_off:true},1).wait(57));

	// seven_pika
	this.k_bubna = new lib.k_bubna_1();
	this.k_bubna.parent = this;
	this.k_bubna.setTransform(588.7,157.7,0.027,0.548,0,0,0,120.5,162.6);
	this.k_bubna._off = true;

	this.timeline.addTween(cjs.Tween.get(this.k_bubna).wait(55).to({_off:false},0).to({regX:116.2,scaleX:0.55,x:588.6},7,cjs.Ease.get(1)).to({regX:116.1,regY:162.5,scaleX:0.52,scaleY:0.52,x:588.5,y:157.6},6,cjs.Ease.get(1)).wait(94));

	// back
	this.instance_2 = new lib.back_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(588.6,157.7,0.715,0.715,0,0,0,116.2,162.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({regX:116.1,regY:162.5,scaleX:0.52,scaleY:0.52,x:588.5,y:157.6,alpha:1},10,cjs.Ease.get(1)).wait(17).to({regX:116.2,regY:162.6,scaleX:0.55,scaleY:0.55,x:588.6,y:157.7},6,cjs.Ease.get(-1)).to({regX:120.5,scaleX:0.03,x:588.7},7,cjs.Ease.get(-1)).to({_off:true},1).wait(106));

	// seven_trefa
	this.seven_trefa = new lib.seven_trefa_1();
	this.seven_trefa.parent = this;
	this.seven_trefa.setTransform(462.9,157.7,0.027,0.548,0,0,0,117.7,162.6);
	this.seven_trefa._off = true;

	this.timeline.addTween(cjs.Tween.get(this.seven_trefa).wait(51).to({_off:false},0).to({regX:116,scaleX:0.55,x:462.8},7,cjs.Ease.get(1)).to({regY:162.5,scaleX:0.52,scaleY:0.52,y:157.6},7,cjs.Ease.get(1)).wait(97));

	// back
	this.instance_3 = new lib.back_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(462.9,157.7,0.715,0.715,0,0,0,116.1,162.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({regX:116,regY:162.5,scaleX:0.52,scaleY:0.52,x:462.8,y:157.6,alpha:1},10,cjs.Ease.get(1)).wait(16).to({regY:162.6,scaleX:0.55,scaleY:0.55,y:157.7},6,cjs.Ease.get(-1)).to({regX:117.7,scaleX:0.03,x:462.9},6,cjs.Ease.get(-1)).to({_off:true},1).wait(110));

	// ace_bubna
	this.two_pika = new lib.two_pika_1();
	this.two_pika.parent = this;
	this.two_pika.setTransform(337.5,157.7,0.028,0.548,0,0,0,117,162.6);
	this.two_pika._off = true;

	this.timeline.addTween(cjs.Tween.get(this.two_pika).wait(48).to({_off:false},0).to({regX:116,scaleX:0.55},6,cjs.Ease.get(1)).to({regY:162.5,scaleX:0.52,scaleY:0.52,x:337.6,y:157.6},7,cjs.Ease.get(1)).wait(101));

	// back
	this.instance_4 = new lib.back_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(337.6,157.7,0.724,0.724,0,0,0,116,162.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({regY:162.5,scaleX:0.52,scaleY:0.52,y:157.6,alpha:1},11,cjs.Ease.get(1)).wait(16).to({regX:116.2,regY:162.6,scaleX:0.55,scaleY:0.55},6,cjs.Ease.get(-1)).to({regX:116,scaleX:0.03},6,cjs.Ease.get(-1)).to({_off:true},1).wait(113));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.main_landscape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_161 = function() {
		this.k_bubna.gotoAndPlay(1);
		this.ten_bubna.gotoAndPlay(1);
		this.j_bubna.gotoAndPlay(1);
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(161).call(this.frame_161).wait(1));

	// j_bubna
	this.j_bubna = new lib.j_bubna_1();
	this.j_bubna.parent = this;
	this.j_bubna.setTransform(838.9,157.4,0.036,0.55,0,0,0,116,162.5);
	this.j_bubna._off = true;

	this.timeline.addTween(cjs.Tween.get(this.j_bubna).wait(149).to({_off:false},0).to({scaleX:0.55},6,cjs.Ease.get(1)).to({regX:116.2,regY:163,scaleX:0.52,scaleY:0.52,x:839.8,y:157.9},6,cjs.Ease.get(1)).wait(1));

	// back
	this.instance = new lib.back_1();
	this.instance.parent = this;
	this.instance.setTransform(839.6,157.7,0.715,0.715,0,0,0,116.1,162.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(127).to({_off:false},0).to({regX:116,regY:162.5,scaleX:0.52,scaleY:0.52,y:157.6,alpha:1},9,cjs.Ease.get(1)).wait(1).to({regY:162.6,scaleX:0.55,scaleY:0.55,y:157.7},6,cjs.Ease.get(-1)).to({regX:117.5,scaleX:0.03},6,cjs.Ease.get(-1)).to({_off:true},1).wait(12));

	// five_chirva
	this.ten_bubna = new lib.ten_bubna_1();
	this.ten_bubna.parent = this;
	this.ten_bubna.setTransform(713.9,157.6,0.027,0.52,0,0,0,116.3,162.5);
	this.ten_bubna._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ten_bubna).wait(101).to({_off:false},0).to({regX:116,regY:162.6,scaleX:0.55,scaleY:0.55,y:157.7},6,cjs.Ease.get(1)).to({regX:116.1,regY:162.5,scaleX:0.52,scaleY:0.52,y:157.6},6,cjs.Ease.get(1)).wait(49));

	// back
	this.instance_1 = new lib.back_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(713.9,157.7,0.715,0.715,0,0,0,116.1,162.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(78).to({_off:false},0).to({regY:162.5,scaleX:0.52,scaleY:0.52,x:713.8,y:157.6,alpha:1},10,cjs.Ease.get(1)).wait(1).to({regX:116.2,regY:162.6,scaleX:0.55,scaleY:0.55,x:713.9,y:157.7},6,cjs.Ease.get(-1)).to({regX:117.9,scaleX:0.03},6,cjs.Ease.get(-1)).to({_off:true},1).wait(60));

	// seven_pika
	this.k_bubna = new lib.k_bubna_1();
	this.k_bubna.parent = this;
	this.k_bubna.setTransform(588.7,157.7,0.027,0.548,0,0,0,120.5,162.6);
	this.k_bubna._off = true;

	this.timeline.addTween(cjs.Tween.get(this.k_bubna).wait(51).to({_off:false},0).to({regX:116.2,scaleX:0.55,x:588.6},7,cjs.Ease.get(1)).to({regX:116.1,regY:162.5,scaleX:0.52,scaleY:0.52,x:588.5,y:157.6},6,cjs.Ease.get(1)).wait(98));

	// back
	this.instance_2 = new lib.back_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(588.6,157.7,0.715,0.715,0,0,0,116.2,162.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({regX:116.1,regY:162.5,scaleX:0.52,scaleY:0.52,x:588.5,y:157.6,alpha:1},10,cjs.Ease.get(1)).wait(15).to({regX:116.2,regY:162.6,scaleX:0.55,scaleY:0.55,x:588.6,y:157.7},6,cjs.Ease.get(-1)).to({regX:120.5,scaleX:0.03,x:588.7},7,cjs.Ease.get(-1)).to({_off:true},1).wait(108));

	// seven_trefa
	this.seven_trefa = new lib.seven_trefa_1();
	this.seven_trefa.parent = this;
	this.seven_trefa.setTransform(462.9,157.7,0.027,0.548,0,0,0,117.7,162.6);
	this.seven_trefa._off = true;

	this.timeline.addTween(cjs.Tween.get(this.seven_trefa).wait(49).to({_off:false},0).to({regX:116,scaleX:0.55,x:462.8},7,cjs.Ease.get(1)).to({regY:162.5,scaleX:0.52,scaleY:0.52,y:157.6},7,cjs.Ease.get(1)).wait(99));

	// back
	this.instance_3 = new lib.back_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(462.9,157.7,0.715,0.715,0,0,0,116.1,162.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({regX:116,regY:162.5,scaleX:0.52,scaleY:0.52,x:462.8,y:157.6,alpha:1},10,cjs.Ease.get(1)).wait(14).to({regY:162.6,scaleX:0.55,scaleY:0.55,y:157.7},6,cjs.Ease.get(-1)).to({regX:117.7,scaleX:0.03,x:462.9},6,cjs.Ease.get(-1)).to({_off:true},1).wait(112));

	// ace_bubna
	this.two_pika = new lib.two_pika_1();
	this.two_pika.parent = this;
	this.two_pika.setTransform(337.5,157.7,0.028,0.548,0,0,0,117,162.6);
	this.two_pika._off = true;

	this.timeline.addTween(cjs.Tween.get(this.two_pika).wait(46).to({_off:false},0).to({regX:116,scaleX:0.55},6,cjs.Ease.get(1)).to({regY:162.5,scaleX:0.52,scaleY:0.52,x:337.6,y:157.6},7,cjs.Ease.get(1)).wait(103));

	// back
	this.instance_4 = new lib.back_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(337.6,157.7,0.724,0.724,0,0,0,116,162.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({regY:162.5,scaleX:0.52,scaleY:0.52,y:157.6,alpha:1},11,cjs.Ease.get(1)).wait(14).to({regX:116.2,regY:162.6,scaleX:0.55,scaleY:0.55},6,cjs.Ease.get(-1)).to({regX:116,scaleX:0.03},6,cjs.Ease.get(-1)).to({_off:true},1).wait(115));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.poker_table = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
        var btn = document.getElementById("button_box");
		setTimeout(function() {
			_this.bonus.gotoAndPlay(1);
            btn.className += " pulse";
            btn.style.opacity = 1;
			//alert("button trigger");
			}, 4200);
		_this.main_portrait.visible = true;
		_this.main_landscape.visible = false;
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {
		if(window.innerWidth > window.innerHeight){
			_this.main_portrait.visible = false;
			_this.main_landscape.visible = true;
			}	
		if(window.innerWidth < window.innerHeight){
			_this.main_portrait.visible = true;
			_this.main_landscape.visible = false;
			}
		}
		
		window.onload=function(){resizeCanvas();}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bonus
	this.bonus = new lib.bonus_1();
	this.bonus.parent = this;
	this.bonus.setTransform(283.9,206.1,0.792,0.792,0,0,0,114.9,38.1);

	this.timeline.addTween(cjs.Tween.get(this.bonus).wait(1));

	// landscape
	this.main_landscape = new lib.main_landscape();
	this.main_landscape.parent = this;
	this.main_landscape.setTransform(-249.6,83.7,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.main_landscape).wait(1));

	// poertrait
	this.main_portrait = new lib.main_portrait();
	this.main_portrait.parent = this;
	this.main_portrait.setTransform(293.6,239.9,1.255,1.255,0,0,0,473.1,259.4);

	this.timeline.addTween(cjs.Tween.get(this.main_portrait).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(334.2,225.3,452.8,373.8);
// library properties:
lib.properties = {
	width: 560,
	height: 450,
	fps: 45,
	color: "#000000",
	opacity: 0.00,
	manifest: [
		{src:"assets/back.png", id:"back"},
		{src:"assets/bonus.png", id:"bonus"},
		{src:"assets/j_bubna.png", id:"j_bubna"},
		{src:"assets/k_bubna.png", id:"k_bubna"},
		{src:"assets/seven_trefa.png", id:"seven_trefa"},
		{src:"assets/ten_bubna.png", id:"ten_bubna"},
		{src:"assets/two_pika.png", id:"two_pika"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;