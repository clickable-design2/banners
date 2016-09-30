(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 795,
	height: 545,
	fps: 45,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/ace_bubna.png?1475241393441", id:"ace_bubna"},
		{src:"images/all_in.png?1475241393441", id:"all_in"},
		{src:"images/back.png?1475241393441", id:"back"},
		{src:"images/chip.png?1475241393441", id:"chip"},
		{src:"images/frame.png?1475241393441", id:"frame"},
		{src:"images/j_bubna.png?1475241393441", id:"j_bubna"},
		{src:"images/k_bubna.png?1475241393441", id:"k_bubna"},
		{src:"images/q_bubna.png?1475241393441", id:"q_bubna"},
		{src:"images/seven_trefa.png?1475241393441", id:"seven_trefa"},
		{src:"images/table.png?1475241393441", id:"table"},
		{src:"images/ten_bubna.png?1475241393441", id:"ten_bubna"},
		{src:"images/two_pika.png?1475241393441", id:"two_pika"},
		{src:"images/user_1.png?1475241393441", id:"user_1"},
		{src:"images/user_2.png?1475241393441", id:"user_2"},
		{src:"images/user_3.png?1475241393441", id:"user_3"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.ace_bubna = function() {
	this.initialize(img.ace_bubna);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.all_in = function() {
	this.initialize(img.all_in);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,99);


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


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
p.nominalBounds = new cjs.Rectangle(0,0,795,545);


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


(lib.two_pika_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.two_pika();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.user_3();
	this.instance.parent = this;
	this.instance.setTransform(626,313);

	this.instance_1 = new lib.user_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(628,0);

	this.instance_2 = new lib.user_1();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,727,460);


(lib.seven_trefa_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.seven_trefa();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.hight_light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AszW5QizAAgBi0MAAAgoJQABi0CzAAIZmAAQC1AAgBC0MAAAAoJQABC0i1AAg");
	this.shape.setTransform(100,146.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,293.1);


(lib.chip_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.chip();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,84);


(lib.card_frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.frame();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212,305);


(lib.back_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hight_light();
	this.instance.parent = this;
	this.instance.setTransform(100,146.5,1,1,0,0,0,100,146.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10).to({alpha:0},10).wait(1));

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

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1177.9,305);


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
		
		//alert("button trigger");
		
		//
	}
	this.frame_292 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(242).call(this.frame_242).wait(50).call(this.frame_292).wait(1));

	// Layer 2 copy 7
	this.instance = new lib.chip_1();
	this.instance.parent = this;
	this.instance.setTransform(370.6,295,2.08,2.08,0,0,0,42.6,42.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(269).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:361.9,y:293.7,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31},2,cjs.Ease.get(1)).wait(11));

	// Layer 2 copy 6
	this.instance_1 = new lib.chip_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(360.3,284.7,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(260).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:351.5,y:283.4,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:351.6},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:351.5},2,cjs.Ease.get(1)).wait(20));

	// Layer 2 copy 5
	this.instance_2 = new lib.chip_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(360.3,305.4,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(251).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:351.5,y:304.1,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:351.6},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:351.5},2,cjs.Ease.get(1)).wait(29));

	// Layer 2 copy 4
	this.instance_3 = new lib.chip_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(367.2,301.9,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(261).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:358.4,y:300.6,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:358.5},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:358.4},2,cjs.Ease.get(1)).wait(19));

	// Layer 2 copy 3
	this.instance_4 = new lib.chip_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(353.4,288.1,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(255).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:344.6,y:286.8,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:344.7},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:344.6},2,cjs.Ease.get(1)).wait(25));

	// Layer 2 copy 2
	this.instance_5 = new lib.chip_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(374.1,284.7,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(246).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:365.3,y:283.4,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:365.4},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:365.3},2,cjs.Ease.get(1)).wait(34));

	// Layer 2 copy
	this.instance_6 = new lib.chip_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(377.5,298.5,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(255).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:368.8,y:297.2,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31},2,cjs.Ease.get(1)).wait(25));

	// Layer 2
	this.instance_7 = new lib.chip_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(360.3,274.3,2.08,2.08,0,0,0,42.6,42.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(242).to({_off:false},0).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:351.5,y:273,alpha:1},8,cjs.Ease.get(1)).to({regX:43.1,regY:42.6,scaleX:0.36,scaleY:0.36,x:351.6},3,cjs.Ease.get(1)).to({regX:42.9,regY:42.5,scaleX:0.31,scaleY:0.31,x:351.5},2,cjs.Ease.get(1)).wait(38));

	// j_bubna
	this.j_bubna = new lib.j_bubna_1();
	this.j_bubna.parent = this;
	this.j_bubna.setTransform(838.9,157.4,0.036,0.55,0,0,0,116,162.5);
	this.j_bubna._off = true;

	this.timeline.addTween(cjs.Tween.get(this.j_bubna).wait(230).to({_off:false},0).to({scaleX:0.55},6,cjs.Ease.get(1)).to({regX:116.2,regY:163,scaleX:0.52,scaleY:0.52,x:839.8,y:157.9},6,cjs.Ease.get(1)).wait(51));

	// back
	this.instance_8 = new lib.back_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(839.6,157.7,0.715,0.715,0,0,0,116.1,162.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(202).to({_off:false},0).to({regX:116,regY:162.5,scaleX:0.52,scaleY:0.52,y:157.6,alpha:1},15,cjs.Ease.get(1)).wait(1).to({regY:162.6,scaleX:0.55,scaleY:0.55,y:157.7},6,cjs.Ease.get(-1)).to({regX:117.5,scaleX:0.03},6,cjs.Ease.get(-1)).to({_off:true},1).wait(62));

	// five_chirva
	this.ten_bubna = new lib.ten_bubna_1();
	this.ten_bubna.parent = this;
	this.ten_bubna.setTransform(713.9,157.6,0.027,0.52,0,0,0,116.3,162.5);
	this.ten_bubna._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ten_bubna).wait(165).to({_off:false},0).to({regX:116,regY:162.6,scaleX:0.55,scaleY:0.55,y:157.7},6,cjs.Ease.get(1)).to({regX:116.1,regY:162.5,scaleX:0.52,scaleY:0.52,y:157.6},6,cjs.Ease.get(1)).wait(116));

	// back
	this.instance_9 = new lib.back_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(713.9,157.7,0.715,0.715,0,0,0,116.1,162.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(137).to({_off:false},0).to({regY:162.5,scaleX:0.52,scaleY:0.52,x:713.8,y:157.6,alpha:1},15,cjs.Ease.get(1)).wait(1).to({regX:116.2,regY:162.6,scaleX:0.55,scaleY:0.55,x:713.9,y:157.7},6,cjs.Ease.get(-1)).to({regX:117.9,scaleX:0.03},6,cjs.Ease.get(-1)).to({_off:true},1).wait(127));

	// seven_pika
	this.k_bubna = new lib.k_bubna_1();
	this.k_bubna.parent = this;
	this.k_bubna.setTransform(588.7,157.7,0.027,0.548,0,0,0,120.5,162.6);
	this.k_bubna._off = true;

	this.timeline.addTween(cjs.Tween.get(this.k_bubna).wait(99).to({_off:false},0).to({regX:116.2,scaleX:0.55,x:588.6},7,cjs.Ease.get(1)).to({regX:116.1,regY:162.5,scaleX:0.52,scaleY:0.52,x:588.5,y:157.6},6,cjs.Ease.get(1)).wait(181));

	// back
	this.instance_10 = new lib.back_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(588.6,157.7,0.715,0.715,0,0,0,116.2,162.6);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(25).to({_off:false},0).to({regX:116.1,regY:162.5,scaleX:0.52,scaleY:0.52,x:588.5,y:157.6,alpha:1},15,cjs.Ease.get(1)).wait(46).to({regX:116.2,regY:162.6,scaleX:0.55,scaleY:0.55,x:588.6,y:157.7},6,cjs.Ease.get(-1)).to({regX:120.5,scaleX:0.03,x:588.7},7,cjs.Ease.get(-1)).to({_off:true},1).wait(193));

	// seven_trefa
	this.seven_trefa = new lib.seven_trefa_1();
	this.seven_trefa.parent = this;
	this.seven_trefa.setTransform(462.9,157.7,0.027,0.548,0,0,0,117.7,162.6);
	this.seven_trefa._off = true;

	this.timeline.addTween(cjs.Tween.get(this.seven_trefa).wait(90).to({_off:false},0).to({regX:116,scaleX:0.55,x:462.8},7,cjs.Ease.get(1)).to({regY:162.5,scaleX:0.52,scaleY:0.52,y:157.6},7,cjs.Ease.get(1)).wait(189));

	// back
	this.instance_11 = new lib.back_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(462.9,157.7,0.715,0.715,0,0,0,116.1,162.6);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(18).to({_off:false},0).to({regX:116,regY:162.5,scaleX:0.52,scaleY:0.52,x:462.8,y:157.6,alpha:1},15,cjs.Ease.get(1)).wait(45).to({regY:162.6,scaleX:0.55,scaleY:0.55,y:157.7},6,cjs.Ease.get(-1)).to({regX:117.7,scaleX:0.03,x:462.9},6,cjs.Ease.get(-1)).to({_off:true},1).wait(202));

	// ace_bubna
	this.two_pika = new lib.two_pika_1();
	this.two_pika.parent = this;
	this.two_pika.setTransform(337.5,157.7,0.028,0.548,0,0,0,117,162.6);
	this.two_pika._off = true;

	this.timeline.addTween(cjs.Tween.get(this.two_pika).wait(82).to({_off:false},0).to({regX:116,scaleX:0.55},6,cjs.Ease.get(1)).to({regY:162.5,scaleX:0.52,scaleY:0.52,x:337.6,y:157.6},7,cjs.Ease.get(1)).wait(198));

	// back
	this.instance_12 = new lib.back_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(337.6,157.7,0.724,0.724,0,0,0,116,162.6);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(9).to({_off:false},0).to({regY:162.5,scaleX:0.52,scaleY:0.52,y:157.6,alpha:1},16,cjs.Ease.get(1)).wait(45).to({regX:116.2,regY:162.6,scaleX:0.55,scaleY:0.55},6,cjs.Ease.get(-1)).to({regX:116,scaleX:0.03},6,cjs.Ease.get(-1)).to({_off:true},1).wait(210));

	// card_frames
	this.instance_13 = new lib.card_frames();
	this.instance_13.parent = this;
	this.instance_13.setTransform(588.6,156.1,0.52,0.52,0,0,0,589.1,152.6);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},9).wait(284));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.4,76.8,612.2,158.5);


(lib.all_in_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.all_in();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.q_bubna = new lib.q_bubna_1();
	this.q_bubna.parent = this;
	this.q_bubna.setTransform(62.5,-6.6,0.351,0.351,0,0,0,115.8,162.5);

	this.ace_bubna = new lib.ace_bubna_1();
	this.ace_bubna.parent = this;
	this.ace_bubna.setTransform(36.5,6.4,0.351,0.351,0,0,0,116,162.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ace_bubna},{t:this.q_bubna}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,-63.5,107.4,162.6);


(lib.users = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 4
	this.all_in = new lib.all_in_1();
	this.all_in.parent = this;
	this.all_in.setTransform(49.1,395.7,1,1,0,0,0,49.5,49.5);
	this.all_in.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.all_in).to({alpha:1},9).wait(1));

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(363.5,230,1,1,0,0,0,363.5,230);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,0,731.6,460);


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
	this.users.setTransform(388.5,242,1,1,0,0,0,363.5,230);

	this.timeline.addTween(cjs.Tween.get(this.users).wait(1));

	// main
	this.main_scene = new lib.main_scene();
	this.main_scene.parent = this;
	this.main_scene.setTransform(397.5,239.8,0.871,0.871,0,0,0,588.1,156.3);

	this.timeline.addTween(cjs.Tween.get(this.main_scene).wait(1));

	// Layer 1
	this.instance = new lib.table();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(397.5,272.5,795,545);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;