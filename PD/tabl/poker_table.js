(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.ace_bubna = function() {
	this.initialize(img.ace_bubna);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.blue_chip = function() {
	this.initialize(img.blue_chip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,84);


(lib.chip = function() {
	this.initialize(img.chip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,84);


(lib.frame = function() {
	this.initialize(img.frame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,305);


(lib.j_bubna = function() {
	this.initialize(img.j_bubna);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.k_bubna = function() {
	this.initialize(img.k_bubna);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.q_bubna = function() {
	this.initialize(img.q_bubna);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.seven_trefa = function() {
	this.initialize(img.seven_trefa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.table = function() {
	this.initialize(img.table);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,888,594);


(lib.ten_bubna = function() {
	this.initialize(img.ten_bubna);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.two_pika = function() {
	this.initialize(img.two_pika);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.user_1 = function() {
	this.initialize(img.user_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,148);


(lib.user_2 = function() {
	this.initialize(img.user_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,148);


(lib.user_3 = function() {
	this.initialize(img.user_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,147);


(lib.you = function() {
	this.initialize(img.you);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,99);// helper functions:

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


(lib.two_pika_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.two_pika();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.two_pika_1, new cjs.Rectangle(0,0,232,325), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blue_chip();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,85,84), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.user_3();
	this.instance.parent = this;
	this.instance.setTransform(566,346);

	this.instance_1 = new lib.user_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(623,7);

	this.instance_2 = new lib.user_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(45,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(45,7,677,486), null);


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


(lib.chip_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.chip();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.chip_1, new cjs.Rectangle(0,0,85,84), null);


(lib.card_frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.frame();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.card_frame, new cjs.Rectangle(0,0,212,305), null);


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


(lib.card_frames = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.card_frame();
	this.instance.parent = this;
	this.instance.setTransform(830.4,152.5,1,1,0,0,0,106,152.5);

	this.instance_1 = new lib.card_frame();
	this.instance_1.parent = this;
	this.instance_1.setTransform(588.9,152.5,1,1,0,0,0,106,152.5);

	this.instance_2 = new lib.card_frame();
	this.instance_2.parent = this;
	this.instance_2.setTransform(347.5,152.5,1,1,0,0,0,106,152.5);

	this.instance_3 = new lib.card_frame();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1071.9,152.5,1,1,0,0,0,106,152.5);

	this.instance_4 = new lib.card_frame();
	this.instance_4.parent = this;
	this.instance_4.setTransform(106,152.5,1,1,0,0,0,106,152.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.card_frames, new cjs.Rectangle(0,0,1177.9,305), null);


(lib.ace_bubna_1 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(116.1,159.1,1,1,0,0,0,100,146.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.ace_bubna();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


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


(lib.q_bubna_1 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(116.1,159.3,1,1,0,0,0,100,146.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.q_bubna();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.main_scene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_242 = function() {
		this.k_bubna.gotoAndPlay(1);
		this.ten_bubna.gotoAndPlay(1);
		this.j_bubna.gotoAndPlay(1);
		this.parent.users.all_in.ace_bubna.gotoAndPlay(1);
		this.parent.users.all_in.q_bubna.gotoAndPlay(1);
		
		//Butoon trigger
		
		alert("button trigger");
		
		//
	}
	this.frame_499 = function() {
		this.parent.users.all_in.ace_bubna.gotoAndPlay(0);
		this.parent.users.all_in.q_bubna.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(242).call(this.frame_242).wait(257).call(this.frame_499).wait(1));

	// Layer 43
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(342.2,278.7,1,1,0,0,0,42.6,42.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(266).to({_off:false},0).to({regX:43.3,regY:42.6,scaleX:0.31,scaleY:0.31,x:333.6,y:277.5,alpha:1},8,cjs.Ease.get(1)).to({regX:43.8,regY:43.1,scaleX:0.36,scaleY:0.36},3,cjs.Ease.get(1)).to({regX:44.5,regY:43.8,scaleX:0.31,scaleY:0.31},2,cjs.Ease.get(1)).wait(210).to({alpha:0},10).wait(1));

	// Layer 42
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(698.6,305.1,1,1,0,0,0,42.6,42.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(284).to({_off:false},0).to({regX:43.3,regY:42.6,scaleX:0.31,scaleY:0.31,x:690,y:303.9,alpha:1},8,cjs.Ease.get(1)).to({regX:43.8,regY:43.1,scaleX:0.36,scaleY:0.36},3,cjs.Ease.get(1)).to({regX:44.5,regY:43.8,scaleX:0.31,scaleY:0.31},2,cjs.Ease.get(1)).wait(192).to({alpha:0},10).wait(1));

	// Layer 41
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(659,305.1,1,1,0,0,0,42.6,42.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(297).to({_off:false},0).to({regX:43.3,regY:42.6,scaleX:0.31,scaleY:0.31,x:650.4,y:303.9,alpha:1},8,cjs.Ease.get(1)).to({regX:43.8,regY:43.1,scaleX:0.36,scaleY:0.36},3,cjs.Ease.get(1)).to({regX:44.5,regY:43.8,scaleX:0.31,scaleY:0.31},2,cjs.Ease.get(1)).wait(179).to({alpha:0},10).wait(1));

	// Layer 40
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(553.4,265.5,1,1,0,0,0,42.6,42.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(252).to({_off:false},0).to({regX:43.3,regY:42.6,scaleX:0.31,scaleY:0.31,x:544.8,y:264.3,alpha:1},8,cjs.Ease.get(1)).to({regX:43.8,regY:43.1,scaleX:0.36,scaleY:0.36},3,cjs.Ease.get(1)).to({regX:44.5,regY:43.8,scaleX:0.31,scaleY:0.31},2,cjs.Ease.get(1)).wait(224).to({alpha:0},10).wait(1));

	// Layer 39
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(384.4,318.3,1,1,0,0,0,42.6,42.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(288).to({_off:false},0).to({regX:43.3,regY:42.6,scaleX:0.31,scaleY:0.31,x:375.8,y:317.1,alpha:1},8,cjs.Ease.get(1)).to({regX:43.8,regY:43.1,scaleX:0.36,scaleY:0.36},3,cjs.Ease.get(1)).to({regX:44.5,regY:43.8,scaleX:0.31,scaleY:0.31},2,cjs.Ease.get(1)).wait(188).to({alpha:0},10).wait(1));

	// Layer 38
	this.instance_5 = new lib.Symbol2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(381.8,278.7,1,1,0,0,0,42.6,42.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(269).to({_off:false},0).to({regX:43.3,regY:42.6,scaleX:0.31,scaleY:0.31,x:373.2,y:277.5,alpha:1},8,cjs.Ease.get(1)).to({regX:43.8,regY:43.1,scaleX:0.36,scaleY:0.36},3,cjs.Ease.get(1)).to({regX:44.5,regY:43.8,scaleX:0.31,scaleY:0.31},2,cjs.Ease.get(1)).wait(207).to({alpha:0},10).wait(1));

	// Layer 37
	this.instance_6 = new lib.Symbol2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(408.2,291.9,1,1,0,0,0,42.6,42.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(256).to({_off:false},0).to({regX:43.3,regY:42.6,scaleX:0.31,scaleY:0.31,x:399.6,y:290.7,alpha:1},8,cjs.Ease.get(1)).to({regX:43.8,regY:43.1,scaleX:0.36,scaleY:0.36},3,cjs.Ease.get(1)).to({regX:44.5,regY:43.8,scaleX:0.31,scaleY:0.31},2,cjs.Ease.get(1)).wait(220).to({alpha:0},10).wait(1));

	// Layer 36
	this.instance_7 = new lib.Symbol2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(596.9,265.5,1,1,0,0,0,42.6,42.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(276).to({_off:false},0).to({regX:43.3,regY:42.6,scaleX:0.31,scaleY:0.31,x:588.3,y:264.3,alpha:1},8,cjs.Ease.get(1)).to({regX:43.8,regY:43.1,scaleX:0.36,scaleY:0.36},3,cjs.Ease.get(1)).to({regX:44.5,regY:43.8,scaleX:0.31,scaleY:0.31},2,cjs.Ease.get(1)).wait(200).to({alpha:0},10).wait(1));

	// Layer 35
	this.instance_8 = new lib.Symbol2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(513.8,305.1,1,1,0,0,0,42.6,42.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(301).to({_off:false},0).to({regX:43.3,regY:42.6,scaleX:0.31,scaleY:0.31,x:505.2,y:303.9,alpha:1},8,cjs.Ease.get(1)).to({regX:43.8,regY:43.1,scaleX:0.36,scaleY:0.36},3,cjs.Ease.get(1)).to({regX:44.5,regY:43.8,scaleX:0.31,scaleY:0.31},2,cjs.Ease.get(1)).wait(175).to({alpha:0},10).wait(1));

	// Layer 34
	this.instance_9 = new lib.Symbol2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(619.4,278.7,1,1,0,0,0,42.6,42.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(262).to({_off:false},0).to({regX:43.3,regY:42.6,scaleX:0.31,scaleY:0.31,x:610.8,y:277.5,alpha:1},8,cjs.Ease.get(1)).to({regX:43.8,regY:43.1,scaleX:0.36,scaleY:0.36},3,cjs.Ease.get(1)).to({regX:44.5,regY:43.8,scaleX:0.31,scaleY:0.31},2,cjs.Ease.get(1)).wait(214).to({alpha:0},10).wait(1));

	// Layer 33
	this.instance_10 = new lib.Symbol2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(474.2,278.7,1,1,0,0,0,42.6,42.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(288).to({_off:false},0).to({regX:43.3,regY:42.6,scaleX:0.31,scaleY:0.31,x:465.6,y:277.5,alpha:1},8,cjs.Ease.get(1)).to({regX:43.8,regY:43.1,scaleX:0.36,scaleY:0.36},3,cjs.Ease.get(1)).to({regX:44.5,regY:43.8,scaleX:0.31,scaleY:0.31},2,cjs.Ease.get(1)).wait(188).to({alpha:0},10).wait(1));

	// Layer 32
	this.instance_11 = new lib.Symbol2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(487.4,265.5,1,1,0,0,0,42.6,42.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(243).to({_off:false},0).to({regX:43.3,regY:42.6,scaleX:0.31,scaleY:0.31,x:478.8,y:264.3,alpha:1},8,cjs.Ease.get(1)).to({regX:43.8,regY:43.1,scaleX:0.36,scaleY:0.36},3,cjs.Ease.get(1)).to({regX:44.5,regY:43.8,scaleX:0.31,scaleY:0.31},2,cjs.Ease.get(1)).wait(233).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_12 = new lib.chip_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(690.3,271.5,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(298).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:681.5,y:270.2,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:681.6},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:681.5},2,cjs.Ease.get(1)).wait(178).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_13 = new lib.chip_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(690.3,324.3,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(290).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:681.5,y:323,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:681.6},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:681.5},2,cjs.Ease.get(1)).wait(186).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_14 = new lib.chip_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(637.4,297.8,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(274).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:628.7,y:296.6,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:628.8},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:628.7},2,cjs.Ease.get(1)).wait(202).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_15 = new lib.chip_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(624.3,311.1,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(283).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:615.5,y:309.8,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:615.6},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:615.5},2,cjs.Ease.get(1)).wait(193).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_16 = new lib.chip_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(663.9,284.7,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(291).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:655.1,y:283.4,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:655.2},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:655.1},2,cjs.Ease.get(1)).wait(185).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_17 = new lib.chip_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(637.5,271.5,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(283).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:628.7,y:270.2,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:628.8},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:628.7},2,cjs.Ease.get(1)).wait(193).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_18 = new lib.chip_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(584.7,287.3,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(278).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:575.9,y:286,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:576},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:575.9},2,cjs.Ease.get(1)).wait(198).to({alpha:0},10).wait(1));

	// Layer 2 copy 7
	this.instance_19 = new lib.chip_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(595,308.2,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(295).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:586.3,y:306.9,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31},2,cjs.Ease.get(1)).wait(181).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_20 = new lib.chip_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(611.1,258.3,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(291).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:602.3,y:257,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:602.4},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:602.3},2,cjs.Ease.get(1)).wait(185).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_21 = new lib.chip_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(611.1,297.9,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(285).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:602.3,y:296.6,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:602.4},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:602.3},2,cjs.Ease.get(1)).wait(191).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_22 = new lib.chip_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(558.3,311.1,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(287).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:549.5,y:309.8,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:549.6},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:549.5},2,cjs.Ease.get(1)).wait(189).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_23 = new lib.chip_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(584.7,271.5,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(280).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:575.9,y:270.2,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:576},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:575.9},2,cjs.Ease.get(1)).wait(196).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_24 = new lib.chip_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(558.3,284.7,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(276).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:549.5,y:283.4,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:549.6},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:549.5},2,cjs.Ease.get(1)).wait(200).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_25 = new lib.chip_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(505.5,284.7,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(272).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:496.7,y:283.4,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:496.8},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:496.7},2,cjs.Ease.get(1)).wait(204).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_26 = new lib.chip_1();
	this.instance_26.parent = this;
	this.instance_26.setTransform(399.9,284.7,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(264).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:391.1,y:283.4,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:391.2},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:391.1},2,cjs.Ease.get(1)).wait(212).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_27 = new lib.chip_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(545.1,324.3,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(248).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:536.3,y:323,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:536.4},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:536.3},2,cjs.Ease.get(1)).wait(228).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_28 = new lib.chip_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(492.3,311.1,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(257).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:483.5,y:309.8,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:483.6},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:483.5},2,cjs.Ease.get(1)).wait(219).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_29 = new lib.chip_1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(320.7,271.5,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(265).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:311.9,y:270.2,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:312},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:311.9},2,cjs.Ease.get(1)).wait(211).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_30 = new lib.chip_1();
	this.instance_30.parent = this;
	this.instance_30.setTransform(531.9,271.5,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(257).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:523.1,y:270.2,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:523.2},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:523.1},2,cjs.Ease.get(1)).wait(219).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_31 = new lib.chip_1();
	this.instance_31.parent = this;
	this.instance_31.setTransform(479.1,287.3,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(252).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:470.3,y:286,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:470.4},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:470.3},2,cjs.Ease.get(1)).wait(224).to({alpha:0},10).wait(1));

	// Layer 2 copy 7
	this.instance_32 = new lib.chip_1();
	this.instance_32.parent = this;
	this.instance_32.setTransform(344.2,308.2,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(269).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:335.5,y:306.9,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31},2,cjs.Ease.get(1)).wait(207).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_33 = new lib.chip_1();
	this.instance_33.parent = this;
	this.instance_33.setTransform(413.1,258.3,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_33.alpha = 0;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(265).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:404.3,y:257,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:404.4},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:404.3},2,cjs.Ease.get(1)).wait(211).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_34 = new lib.chip_1();
	this.instance_34.parent = this;
	this.instance_34.setTransform(531.9,297.9,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_34.alpha = 0;
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(259).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:523.1,y:296.6,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:523.2},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:523.1},2,cjs.Ease.get(1)).wait(217).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_35 = new lib.chip_1();
	this.instance_35.parent = this;
	this.instance_35.setTransform(399.9,311.1,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_35.alpha = 0;
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(261).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:391.1,y:309.8,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:391.2},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:391.1},2,cjs.Ease.get(1)).wait(215).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_36 = new lib.chip_1();
	this.instance_36.parent = this;
	this.instance_36.setTransform(386.7,271.5,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_36.alpha = 0;
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(256).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:377.9,y:270.2,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:378},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:377.9},2,cjs.Ease.get(1)).wait(220).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_37 = new lib.chip_1();
	this.instance_37.parent = this;
	this.instance_37.setTransform(426.3,284.7,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_37.alpha = 0;
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(250).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:417.5,y:283.4,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:417.6},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:417.5},2,cjs.Ease.get(1)).wait(226).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_38 = new lib.chip_1();
	this.instance_38.parent = this;
	this.instance_38.setTransform(439.5,297.9,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_38.alpha = 0;
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(253).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:430.7,y:296.6,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:430.8},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:430.7},2,cjs.Ease.get(1)).wait(223).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_39 = new lib.chip_1();
	this.instance_39.parent = this;
	this.instance_39.setTransform(360.3,260.9,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_39.alpha = 0;
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(258).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:351.5,y:259.6,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:351.6},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:351.5},2,cjs.Ease.get(1)).wait(218).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_40 = new lib.chip_1();
	this.instance_40.parent = this;
	this.instance_40.setTransform(450.1,274.1,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_40.alpha = 0;
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(262).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:441.3,y:272.8,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:441.4},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:441.3},2,cjs.Ease.get(1)).wait(214).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_41 = new lib.chip_1();
	this.instance_41.parent = this;
	this.instance_41.setTransform(426.3,311.1,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_41.alpha = 0;
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(255).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:417.5,y:309.8,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:417.6},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:417.5},2,cjs.Ease.get(1)).wait(221).to({alpha:0},10).wait(1));

	// Layer 2 copy 6
	this.instance_42 = new lib.chip_1();
	this.instance_42.parent = this;
	this.instance_42.setTransform(464.6,286,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_42.alpha = 0;
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(260).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:455.8,y:284.7,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:455.9},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:455.8},2,cjs.Ease.get(1)).wait(216).to({alpha:0},10).wait(1));

	// Layer 2 copy 5
	this.instance_43 = new lib.chip_1();
	this.instance_43.parent = this;
	this.instance_43.setTransform(459.2,306.7,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_43.alpha = 0;
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(251).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:450.4,y:305.4,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:450.5},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:450.4},2,cjs.Ease.get(1)).wait(225).to({alpha:0},10).wait(1));

	// Layer 2 copy 4
	this.instance_44 = new lib.chip_1();
	this.instance_44.parent = this;
	this.instance_44.setTransform(367.2,301.9,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_44.alpha = 0;
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(261).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:358.4,y:300.6,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:358.5},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:358.4},2,cjs.Ease.get(1)).wait(215).to({alpha:0},10).wait(1));

	// Layer 2 copy 3
	this.instance_45 = new lib.chip_1();
	this.instance_45.parent = this;
	this.instance_45.setTransform(353.4,288.1,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_45.alpha = 0;
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(255).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:344.6,y:286.8,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:344.7},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:344.6},2,cjs.Ease.get(1)).wait(221).to({alpha:0},10).wait(1));

	// Layer 2 copy 2
	this.instance_46 = new lib.chip_1();
	this.instance_46.parent = this;
	this.instance_46.setTransform(374.1,284.7,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_46.alpha = 0;
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(246).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:365.3,y:283.4,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:365.4},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:365.3},2,cjs.Ease.get(1)).wait(230).to({alpha:0},10).wait(1));

	// Layer 2 copy
	this.instance_47 = new lib.chip_1();
	this.instance_47.parent = this;
	this.instance_47.setTransform(377.5,298.5,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_47.alpha = 0;
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(255).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:368.8,y:297.2,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31},2,cjs.Ease.get(1)).wait(221).to({alpha:0},10).wait(1));

	// Layer 2
	this.instance_48 = new lib.chip_1();
	this.instance_48.parent = this;
	this.instance_48.setTransform(360.3,274.3,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_48.alpha = 0;
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(242).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:351.5,y:273,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:351.6},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:351.5},2,cjs.Ease.get(1)).wait(234).to({alpha:0},10).wait(1));

	// j_bubna
	this.j_bubna = new lib.j_bubna_1();
	this.j_bubna.parent = this;
	this.j_bubna.setTransform(838.9,157.4,0.036,0.55,0,0,0,116,162.5);
	this.j_bubna._off = true;

	this.timeline.addTween(cjs.Tween.get(this.j_bubna).wait(230).to({_off:false},0).to({scaleX:0.55},6,cjs.Ease.get(1)).to({regX:116.2,regY:163,scaleX:0.52,scaleY:0.52,x:839.8,y:157.9},6,cjs.Ease.get(1)).wait(247).to({alpha:0},10).wait(1));

	// back
	this.instance_49 = new lib.back_1();
	this.instance_49.parent = this;
	this.instance_49.setTransform(839.6,157.7,0.715,0.715,0,0,0,116.1,162.6);
	this.instance_49.alpha = 0;
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(202).to({_off:false},0).to({regX:116,regY:162.5,scaleX:0.52,scaleY:0.52,y:157.6,alpha:1},15,cjs.Ease.get(1)).wait(1).to({regY:162.6,scaleX:0.55,scaleY:0.55,y:157.7},6,cjs.Ease.get(-1)).to({regX:117.5,scaleX:0.03},6,cjs.Ease.get(-1)).to({_off:true},1).wait(258).to({_off:false},0).to({alpha:0},10).wait(1));

	// five_chirva
	this.ten_bubna = new lib.ten_bubna_1();
	this.ten_bubna.parent = this;
	this.ten_bubna.setTransform(713.9,157.6,0.027,0.52,0,0,0,116.3,162.5);
	this.ten_bubna._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ten_bubna).wait(165).to({_off:false},0).to({regX:116,regY:162.6,scaleX:0.55,scaleY:0.55,y:157.7},6,cjs.Ease.get(1)).to({regX:116.1,regY:162.5,scaleX:0.52,scaleY:0.52,y:157.6},6,cjs.Ease.get(1)).wait(312).to({alpha:0},10).wait(1));

	// back
	this.instance_50 = new lib.back_1();
	this.instance_50.parent = this;
	this.instance_50.setTransform(713.9,157.7,0.715,0.715,0,0,0,116.1,162.6);
	this.instance_50.alpha = 0;
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(137).to({_off:false},0).to({regY:162.5,scaleX:0.52,scaleY:0.52,x:713.8,y:157.6,alpha:1},15,cjs.Ease.get(1)).wait(1).to({regX:116.2,regY:162.6,scaleX:0.55,scaleY:0.55,x:713.9,y:157.7},6,cjs.Ease.get(-1)).to({regX:117.9,scaleX:0.03},6,cjs.Ease.get(-1)).to({_off:true},1).wait(323).to({_off:false},0).to({alpha:0},10).wait(1));

	// seven_pika
	this.k_bubna = new lib.k_bubna_1();
	this.k_bubna.parent = this;
	this.k_bubna.setTransform(588.7,157.7,0.027,0.548,0,0,0,120.5,162.6);
	this.k_bubna._off = true;

	this.timeline.addTween(cjs.Tween.get(this.k_bubna).wait(99).to({_off:false},0).to({regX:116.2,scaleX:0.55,x:588.6},7,cjs.Ease.get(1)).to({regX:116.1,regY:162.5,scaleX:0.52,scaleY:0.52,x:588.5,y:157.6},6,cjs.Ease.get(1)).wait(377).to({alpha:0},10).wait(1));

	// back
	this.instance_51 = new lib.back_1();
	this.instance_51.parent = this;
	this.instance_51.setTransform(588.6,157.7,0.715,0.715,0,0,0,116.2,162.6);
	this.instance_51.alpha = 0;
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(25).to({_off:false},0).to({regX:116.1,regY:162.5,scaleX:0.52,scaleY:0.52,x:588.5,y:157.6,alpha:1},15,cjs.Ease.get(1)).wait(46).to({regX:116.2,regY:162.6,scaleX:0.55,scaleY:0.55,x:588.6,y:157.7},6,cjs.Ease.get(-1)).to({regX:120.5,scaleX:0.03,x:588.7},7,cjs.Ease.get(-1)).to({_off:true},1).wait(389).to({_off:false},0).to({alpha:0},10).wait(1));

	// seven_trefa
	this.seven_trefa = new lib.seven_trefa_1();
	this.seven_trefa.parent = this;
	this.seven_trefa.setTransform(462.9,157.7,0.027,0.548,0,0,0,117.7,162.6);
	this.seven_trefa._off = true;

	this.timeline.addTween(cjs.Tween.get(this.seven_trefa).wait(90).to({_off:false},0).to({regX:116,scaleX:0.55,x:462.8},7,cjs.Ease.get(1)).to({regY:162.5,scaleX:0.52,scaleY:0.52,y:157.6},7,cjs.Ease.get(1)).wait(385).to({alpha:0},10).wait(1));

	// back
	this.instance_52 = new lib.back_1();
	this.instance_52.parent = this;
	this.instance_52.setTransform(462.9,157.7,0.715,0.715,0,0,0,116.1,162.6);
	this.instance_52.alpha = 0;
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(18).to({_off:false},0).to({regX:116,regY:162.5,scaleX:0.52,scaleY:0.52,x:462.8,y:157.6,alpha:1},15,cjs.Ease.get(1)).wait(45).to({regY:162.6,scaleX:0.55,scaleY:0.55,y:157.7},6,cjs.Ease.get(-1)).to({regX:117.7,scaleX:0.03,x:462.9},6,cjs.Ease.get(-1)).to({_off:true},1).wait(398).to({_off:false},0).to({alpha:0},10).wait(1));

	// ace_bubna
	this.two_pika = new lib.two_pika_1();
	this.two_pika.parent = this;
	this.two_pika.setTransform(337.5,157.7,0.028,0.548,0,0,0,117,162.6);
	this.two_pika._off = true;

	this.timeline.addTween(cjs.Tween.get(this.two_pika).wait(82).to({_off:false},0).to({regX:116,scaleX:0.55},6,cjs.Ease.get(1)).to({regY:162.5,scaleX:0.52,scaleY:0.52,x:337.6,y:157.6},7,cjs.Ease.get(1)).wait(394).to({alpha:0},10).wait(1));

	// back
	this.instance_53 = new lib.back_1();
	this.instance_53.parent = this;
	this.instance_53.setTransform(337.6,157.7,0.724,0.724,0,0,0,116,162.6);
	this.instance_53.alpha = 0;
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(9).to({_off:false},0).to({regY:162.5,scaleX:0.52,scaleY:0.52,y:157.6,alpha:1},16,cjs.Ease.get(1)).wait(45).to({regX:116.2,regY:162.6,scaleX:0.55,scaleY:0.55},6,cjs.Ease.get(-1)).to({regX:116,scaleX:0.03},6,cjs.Ease.get(-1)).to({_off:true},1).wait(406).to({_off:false},0).to({alpha:0},10).wait(1));

	// card_frames
	this.instance_54 = new lib.card_frames();
	this.instance_54.parent = this;
	this.instance_54.setTransform(588.6,156.1,0.52,0.52,0,0,0,589.1,152.6);
	this.instance_54.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).to({alpha:1},9).wait(480).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.4,76.8,612.2,158.5);


(lib.all_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.you();
	this.instance.parent = this;
	this.instance.setTransform(96,48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.q_bubna = new lib.q_bubna_1();
	this.q_bubna.parent = this;
	this.q_bubna.setTransform(158.5,41.5,0.351,0.351,0,0,0,115.8,162.5);

	this.ace_bubna = new lib.ace_bubna_1();
	this.ace_bubna.parent = this;
	this.ace_bubna.setTransform(132.6,54.5,0.351,0.351,0,0,0,116,162.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ace_bubna},{t:this.q_bubna}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.all_in, new cjs.Rectangle(91.9,-15.5,107.4,162.5), null);


(lib.users = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.all_in = new lib.all_in();
	this.all_in.parent = this;
	this.all_in.setTransform(49.1,395.7,1,1,0,0,0,49.5,49.5);
	this.all_in.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.all_in).to({alpha:1},9).wait(475).to({alpha:0},15).wait(1));

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(363.5,230,1,1,0,0,0,363.5,230);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(475).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45,7,677,486.2);


// stage content:
(lib.poker_table = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.scaleX = stage.scaleY = 2;
		
		stage.canvas.width = 795 * 2;
		stage.canvas.height = 545 * 2;
		stage.canvas.style.width = '795px';
		stage.canvas.style.height = '545px';
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Users
	this.users = new lib.users();
	this.users.parent = this;
	this.users.setTransform(388.5,262,1,1,0,0,0,363.5,230);

	this.timeline.addTween(cjs.Tween.get(this.users).wait(1));

	// main
	this.main_scene = new lib.main_scene();
	this.main_scene.parent = this;
	this.main_scene.setTransform(405.6,257,0.656,0.656,0,0,0,588.1,156.5);

	this.timeline.addTween(cjs.Tween.get(this.main_scene).wait(1));

	// Layer 1
	this.instance = new lib.table();
	this.instance.parent = this;
	this.instance.setTransform(-40,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(357.5,249.5,888,594);
// library properties:
lib.properties = {
	width: 795,
	height: 545,
	fps: 45,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/ace_bubna.png?1488457147206", id:"ace_bubna"},
		{src:"images/back.png?1488457147206", id:"back"},
		{src:"images/blue_chip.png?1488457147206", id:"blue_chip"},
		{src:"images/chip.png?1488457147206", id:"chip"},
		{src:"images/frame.png?1488457147206", id:"frame"},
		{src:"images/j_bubna.png?1488457147206", id:"j_bubna"},
		{src:"images/k_bubna.png?1488457147206", id:"k_bubna"},
		{src:"images/q_bubna.png?1488457147206", id:"q_bubna"},
		{src:"images/seven_trefa.png?1488457147206", id:"seven_trefa"},
		{src:"images/table.png?1488457147206", id:"table"},
		{src:"images/ten_bubna.png?1488457147206", id:"ten_bubna"},
		{src:"images/two_pika.png?1488457147206", id:"two_pika"},
		{src:"images/user_1.png?1488457147206", id:"user_1"},
		{src:"images/user_2.png?1488457147206", id:"user_2"},
		{src:"images/user_3.png?1488457147206", id:"user_3"},
		{src:"images/you.png?1488457147206", id:"you"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;