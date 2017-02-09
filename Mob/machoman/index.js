(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.afro = function() {
	this.initialize(img.afro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,18);


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.Button = function() {
	this.initialize(img.Button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,465,106);


(lib.kadr1txt = function() {
	this.initialize(img.kadr1txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,855,40);


(lib.kadr2txt = function() {
	this.initialize(img.kadr2txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,791,41);


(lib.krug1 = function() {
	this.initialize(img.krug1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,101);


(lib.krug2 = function() {
	this.initialize(img.krug2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,101);


(lib.krug3 = function() {
	this.initialize(img.krug3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,101);


(lib.krug4 = function() {
	this.initialize(img.krug4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.krug5 = function() {
	this.initialize(img.krug5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,102);


(lib.krug6 = function() {
	this.initialize(img.krug6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,116);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,127);


(lib.macho = function() {
	this.initialize(img.macho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,334);


(lib.moment = function() {
	this.initialize(img.moment);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,38);


(lib.natura2 = function() {
	this.initialize(img.natura2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,16);


(lib.nepobochno = function() {
	this.initialize(img.nepobochno);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,38);


(lib.para = function() {
	this.initialize(img.para);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,533);


(lib.para2 = function() {
	this.initialize(img.para2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,311,545);


(lib.podho99 = function() {
	this.initialize(img.podho99);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,38);


(lib.prosto = function() {
	this.initialize(img.prosto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,37);


(lib.S50 = function() {
	this.initialize(img.S50);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,95);// helper functions:

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


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kadr2txt();
	this.instance.parent = this;
	this.instance.setTransform(-395.5,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-395.5,-20.5,791,41);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kadr2txt();
	this.instance.parent = this;
	this.instance.setTransform(-395.5,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-395.5,-20.5,791,41);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.para2();
	this.instance.parent = this;
	this.instance.setTransform(-155.5,-272.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.5,-272.5,311,545);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.krug4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,100,100), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.krug2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,101,101), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.krug1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,101,101), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.krug5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,113,102), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.prosto();
	this.instance.parent = this;
	this.instance.setTransform(56,123);

	this.instance_1 = new lib.krug6();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,156,160), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.moment();
	this.instance.parent = this;
	this.instance.setTransform(-11,106);

	this.instance_1 = new lib.krug3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-11,0,125,144), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,465,106), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.S50();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,109,95), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.para();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,300,533), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,146,127), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kadr1txt();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,855,40), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.macho();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,252,334), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,1024,768), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(76,58,1,1,0,0,0,76,58);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:70.6},9,cjs.Ease.get(-1)).to({x:64.5},10,cjs.Ease.get(1)).to({x:70.3},10,cjs.Ease.get(-1)).to({x:76},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156,160);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(61.5,50.5,1,1,0,0,0,50.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:67},9,cjs.Ease.get(-1)).to({x:73},10,cjs.Ease.get(1)).to({x:67.3},10,cjs.Ease.get(-1)).to({x:61.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,144);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.podho99();
	this.instance.parent = this;
	this.instance.setTransform(0,111);

	this.instance_1 = new lib.Symbol23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(56.5,51,1,1,0,0,0,56.5,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,113,149), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.natura2();
	this.instance.parent = this;
	this.instance.setTransform(-57,109);

	this.instance_1 = new lib.Symbol24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.5,50.5,1,1,0,0,0,50.5,50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-57,0,220,125), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.afro();
	this.instance.parent = this;
	this.instance.setTransform(-10,96);

	this.instance_1 = new lib.Symbol25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.5,34.4,1,1,0,0,0,50.5,50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-10,-16.1,118,130.1), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nepobochno();
	this.instance.parent = this;
	this.instance.setTransform(-39,107);

	this.instance_1 = new lib.Symbol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50,50,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-39,0,176,145), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(155.5,272.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,311,545), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_85 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(6).call(this.frame_85).wait(6));

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(155.5,272.5,1,1,0,0,0,155.5,272.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:263.5},39).to({x:156.7,y:272.5},40).to({x:-212.5},6).to({x:155.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,311,545);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_85 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(6).call(this.frame_85).wait(6));

	// Layer 1
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(150,266.5,1,1,0,0,0,150,266.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:278.2},39).to({y:266.5},40).to({x:495},6).to({x:150},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,533);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(73,63.5,1,1,0,0,0,73,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,146,127), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(73,63.5,1,1,0,0,0,73,63.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000CC").s().p("AgIIhIAAxBIASAAIAARBg");
	this.shape.setTransform(73.1,72.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIBSIAAijIASAAIAACjg");
	this.shape_1.setTransform(73.1,8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},14).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},13).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.06},14).to({_off:true},1).wait(1).to({_off:false},0).to({scaleX:1},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146,127);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(54.5,47.5,1,1,0,0,0,54.5,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({y:43.9},0).wait(1).to({y:52},0).wait(1).to({x:50,y:47.5},0).wait(1).to({x:57.2},0).wait(1).to({x:50.9,y:43},0).wait(1).to({x:59,y:51.1},0).wait(1).to({x:51.8,y:50.2},0).wait(1).to({x:56.3,y:47.5},0).wait(1).to({x:54.5},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109,95);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(141.4,271.1,1,1,0,0,0,54.5,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(126,167,1,1,0,0,0,126,167);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,252,334), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.parent.para1.gotoAndPlay(80);
		this.parent.para2.gotoAndPlay(80);
		this.parent.krug.gotoAndPlay(1);
	}
	this.frame_196 = function() {
		this.parent.para1.gotoAndPlay(86);
		this.parent.para2.gotoAndPlay(86);
		this.parent.krug.gotoAndPlay(35);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(97).call(this.frame_196).wait(4));

	// Layer 2
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(424.5,-163.5);
	this.instance._off = true;

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(424.5,25.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).to({_off:true,y:25.3},3).wait(91).to({_off:false,y:-163.5},3).to({_off:true},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({_off:false},3).wait(91).to({startPosition:0},0).to({_off:true,y:-163.5},3).wait(4));

	// Layer 1
	this.instance_2 = new lib.Symbol12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(427.5,20,1,1,0,0,0,427.5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(96).to({y:-168.6},3).to({_off:true},1).wait(96).to({_off:false},0).to({y:20},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,855,40);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(232.5,53,1,1,0,0,0,232.5,53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43).to({regY:53.1,scaleX:0.9,scaleY:0.9,y:53.2},3,cjs.Ease.get(-1)).to({regY:53,scaleX:1,scaleY:1,y:53},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,465,106);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(512,384,1,1,0,0,0,512,384);
	this.instance.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1024,768), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol30();
	this.instance.parent = this;
	this.instance.setTransform(56.5,51,1,1,0,0,0,56.5,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:51.1},9,cjs.Ease.get(-1)).to({x:45},10,cjs.Ease.get(1)).to({x:50.8},10,cjs.Ease.get(-1)).to({x:56.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,149);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol29();
	this.instance.parent = this;
	this.instance.setTransform(107.5,50.5,1,1,0,0,0,50.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:102.1},9,cjs.Ease.get(-1)).to({x:96},10,cjs.Ease.get(1)).to({x:101.8},10,cjs.Ease.get(-1)).to({x:107.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,125);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol28();
	this.instance.parent = this;
	this.instance.setTransform(60.5,66.6,1,1,0,0,0,50.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:66},9,cjs.Ease.get(-1)).to({x:72},10,cjs.Ease.get(1)).to({x:66.3},10,cjs.Ease.get(-1)).to({x:60.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118,130.1);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol27();
	this.instance.parent = this;
	this.instance.setTransform(89,50,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:94.5},9,cjs.Ease.get(-1)).to({x:100.5},10,cjs.Ease.get(1)).to({x:94.8},10,cjs.Ease.get(-1)).to({x:89},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176,145);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(6));

	// Symbol 22
	this.instance = new lib.Symbol36();
	this.instance.parent = this;
	this.instance.setTransform(70.1,261.7,0.385,0.385,0,0,0,76,58.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regY:58,scaleX:1,scaleY:1,x:298,y:-7},9).wait(25).to({x:70.3,y:96.5,alpha:0},5).wait(1));

	// Symbol 30
	this.instance_1 = new lib.Symbol35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(80.8,274.1,0.385,0.385,0,0,0,56.6,74.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({regX:56.5,scaleX:1,scaleY:1,x:418.5,y:176.9},9).wait(21).to({x:73.5,alpha:0},5).wait(1));

	// Symbol 29
	this.instance_2 = new lib.Symbol34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(82,269.5,0.385,0.385,0,0,0,110.2,62.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({regX:110,regY:62.5,scaleX:1,scaleY:1,x:330,y:320.6},9).wait(16).to({x:65.5,alpha:0},5).wait(1));

	// Symbol 28
	this.instance_3 = new lib.Symbol33();
	this.instance_3.parent = this;
	this.instance_3.setTransform(79.8,268.5,0.385,0.385,0,0,0,59.1,65.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({regX:59,regY:65,scaleX:1,scaleY:1,x:-168,y:321.9},9).wait(12).to({x:73.5,alpha:0},5).wait(1));

	// Symbol 27
	this.instance_4 = new lib.Symbol32();
	this.instance_4.parent = this;
	this.instance_4.setTransform(78.7,273,0.385,0.385,0,0,0,88,72.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({scaleX:1,scaleY:1,x:-265,y:176},9).wait(8).to({x:68.5,alpha:0},5).wait(1));

	// Symbol 21
	this.instance_5 = new lib.Symbol31();
	this.instance_5.parent = this;
	this.instance_5.setTransform(81.1,273.2,0.385,0.385,0,0,0,62.6,72);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(22).to({_off:false},0).to({regX:62.5,scaleX:1,scaleY:1,x:-166.5,y:25},9).wait(4).to({x:75,y:128.5,alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// krug
	this.krug = new lib.Symbol9();
	this.krug.parent = this;
	this.krug.setTransform(508.3,255,1,1,0,0,0,76,58);

	this.timeline.addTween(cjs.Tween.get(this.krug).wait(1));

	// button
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(513,653,1,1,0,0,0,232.5,53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logo
	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(505.8,192.5,1,1,0,0,0,73,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// macho
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(506.5,442,1,1,0,0,0,126,167);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// para1
	this.para1 = new lib.Symbol16();
	this.para1.parent = this;
	this.para1.setTransform(165.5,508.5,1,1,0,0,0,155.5,272.5);

	this.timeline.addTween(cjs.Tween.get(this.para1).wait(1));

	// para2
	this.para2 = new lib.Symbol15();
	this.para2.parent = this;
	this.para2.setTransform(869,500.5,1,1,0,0,0,150,266.5);

	this.timeline.addTween(cjs.Tween.get(this.para2).wait(1));

	// txt
	this.instance_3 = new lib.Symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(515.5,81.7,1,1,0,0,0,427.5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// back
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(513,384,1,1,0,0,0,512,384);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(513,384,1024,781);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/afro.png?1486652721792", id:"afro"},
		{src:"images/back.jpg?1486652721792", id:"back"},
		{src:"images/Button.png?1486652721792", id:"Button"},
		{src:"images/kadr1txt.png?1486652721792", id:"kadr1txt"},
		{src:"images/kadr2txt.png?1486652721792", id:"kadr2txt"},
		{src:"images/krug1.png?1486652721792", id:"krug1"},
		{src:"images/krug2.png?1486652721792", id:"krug2"},
		{src:"images/krug3.png?1486652721792", id:"krug3"},
		{src:"images/krug4.png?1486652721792", id:"krug4"},
		{src:"images/krug5.png?1486652721792", id:"krug5"},
		{src:"images/krug6.png?1486652721792", id:"krug6"},
		{src:"images/logo.png?1486652721792", id:"logo"},
		{src:"images/macho.png?1486652721792", id:"macho"},
		{src:"images/moment.png?1486652721792", id:"moment"},
		{src:"images/natura2.png?1486652721792", id:"natura2"},
		{src:"images/nepobochno.png?1486652721792", id:"nepobochno"},
		{src:"images/para.png?1486652721792", id:"para"},
		{src:"images/para2.png?1486652721792", id:"para2"},
		{src:"images/podho99.png?1486652721792", id:"podho99"},
		{src:"images/prosto.png?1486652721792", id:"prosto"},
		{src:"images/S50.png?1486652721792", id:"S50"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;