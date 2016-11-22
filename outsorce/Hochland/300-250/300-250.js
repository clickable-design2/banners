(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"300_250_atlas_", frames: [[402,402,400,216],[402,620,400,216],[0,804,400,216],[739,1012,246,148],[402,838,335,210],[0,1022,293,220],[295,1050,417,125],[0,402,400,400],[739,838,231,172],[804,175,170,173],[804,350,170,173],[804,0,170,173],[0,0,400,400],[402,0,400,400]]}
];


// symbols:



(lib.ch_grl = function() {
	this.spriteSheet = ss["300_250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ch_slov = function() {
	this.spriteSheet = ss["300_250_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ch_zel = function() {
	this.spriteSheet = ss["300_250_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai = function() {
	this.spriteSheet = ss["300_250_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_1 = function() {
	this.spriteSheet = ss["300_250_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_2 = function() {
	this.spriteSheet = ss["300_250_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_3 = function() {
	this.spriteSheet = ss["300_250_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.girl = function() {
	this.spriteSheet = ss["300_250_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["300_250_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.sir1 = function() {
	this.spriteSheet = ss["300_250_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.sir2 = function() {
	this.spriteSheet = ss["300_250_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.sir3 = function() {
	this.spriteSheet = ss["300_250_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.wom1 = function() {
	this.spriteSheet = ss["300_250_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.wom2 = function() {
	this.spriteSheet = ss["300_250_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();
// helper functions:

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
	this.instance = new lib.flash0ai_3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.456,0.456);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,190.2,57), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sir1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,170,173), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sir2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,170,173), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sir3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,170,173), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ch_grl();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.602,0.602);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,240.9,130.1), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ch_slov();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.602,0.602);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,240.9,130.1), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ch_zel();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.736,0.736);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,294.5,159), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,400,400), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wom2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,400,400), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wom1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,400,400), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.426,0.426);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,98.5,73.3), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash0ai();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.622,0.622);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,152.9,92), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash0ai_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,335,210), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash0ai_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.519,0.519);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,152,114.1), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(76.5,46,1,1,0,0,0,76.5,46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,152.9,92), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(115.2,66.2,0.63,0.63,0,0,0,167.6,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(9.7,0,211,132.3), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(39.2,29.1,0.795,0.795,0,0,0,49.2,36.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(226).to({x:-8.8},7,cjs.Ease.get(-1)).to({x:-63.8},8,cjs.Ease.get(1)).wait(119).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.3,58.3);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ch_zel.png
	this.instance = new lib.ch_zel();
	this.instance.parent = this;
	this.instance.setTransform(40,0,0.736,0.736);

	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(280.5,32.9,1,1,0,0,0,147.2,79.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},254).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},100).to({state:[{t:this.instance_1}]},10).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(254).to({_off:false},0).to({x:682.8,y:17.4},10,cjs.Ease.get(1)).wait(100).to({x:1076.6},10,cjs.Ease.get(-1)).wait(6));

	// ch_slov.png
	this.instance_2 = new lib.Символ13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(364.8,42.4,1,1,0,0,0,120.5,65);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(249).to({_off:false},0).to({x:767.1,y:26.9},10,cjs.Ease.get(1)).wait(108).to({x:1160.9},10,cjs.Ease.get(-1)).wait(3));

	// ch_grl.png
	this.instance_3 = new lib.Символ14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(213.8,42.4,1,1,0,0,0,120.5,65);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(259).to({_off:false},0).to({x:616.1,y:26.9},10,cjs.Ease.get(1)).wait(100).to({x:1009.9},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40,0,294.5,159);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wom1.jpg
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(196.6,200,1,1,0,0,0,200,200);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,scaleY:1.02,alpha:1},9,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07,y:200.1},57).to({regX:199.9,scaleX:1.09,scaleY:1.09,x:196.5,y:200,alpha:0},14).to({_off:true},10).wait(290));

	// wom2.jpg
	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(196.6,200,1,1,0,0,0,200,200);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(66).to({_off:false},0).to({scaleX:1.02,scaleY:1.02,alpha:1},14,cjs.Ease.get(1)).to({scaleX:1.06,scaleY:1.06,alpha:0.879},86).to({scaleX:1.07,scaleY:1.07,alpha:0},12).to({_off:true},7).wait(195));

	// girl.jpg
	this.instance_2 = new lib.Символ11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(198.3,200,1,1,0,0,0,200,200);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(169).to({_off:false},0).to({scaleX:1.01,scaleY:1.01,x:198.2,y:199.9,alpha:1},15,cjs.Ease.get(1)).to({regX:199.9,scaleX:1.03,scaleY:1.03,x:197.8,y:199.4},51).to({regX:200,scaleX:1.04,scaleY:1.04,x:197.7,alpha:0},12).to({_off:true},1).wait(132));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.4,0,400,400);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(76.5,46,1,1,0,0,0,76.5,46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol, new cjs.Rectangle(0,0,152.9,92), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0ai.png
	this.instance = new lib.flash0ai_3();
	this.instance.parent = this;
	this.instance.setTransform(375,-67,0.456,0.456);

	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(63,-9.6,1.336,1.336,0,0,0,95,28.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},249).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_1}]},100).to({state:[{t:this.instance_1}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(249).to({_off:false},0).to({regY:28.5,scaleX:1,scaleY:1,y:-9.5,alpha:1},15,cjs.Ease.get(1)).wait(100).to({alpha:0},15,cjs.Ease.get(-1)).wait(1));

	// Символ 6
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(583.6,173.1,1,1,0,0,0,76.5,46);

	this.instance_3 = new lib.Symbol();
	this.instance_3.parent = this;
	this.instance_3.setTransform(89.6,10.2,1,1,0,0,0,76.5,46);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.Символ21();
	this.instance_4.parent = this;
	this.instance_4.setTransform(109.6,10.2,1,1,0,0,0,76.5,46);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},179).to({state:[{t:this.instance_4}]},14).to({state:[{t:this.instance_4}]},45).to({state:[{t:this.instance_4}]},11).to({state:[]},1).wait(130));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(179).to({_off:false},0).to({_off:true,x:109.6,alpha:1},14,cjs.Ease.get(1)).wait(187));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(179).to({_off:false},14,cjs.Ease.get(1)).wait(45).to({x:119.6,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(130));

	// Символ 19
	this.instance_5 = new lib.Символ19();
	this.instance_5.parent = this;
	this.instance_5.setTransform(82.6,217,0.576,0.576,0,0,0,85,86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(82).to({regY:86.4,rotation:-66.5,x:-49.7,y:193.6},0).to({regY:86.5,rotation:0,x:-33.4,y:124},10,cjs.Ease.get(1)).wait(78).to({regX:84.9,x:-3.5},8,cjs.Ease.get(-1)).to({regX:85,x:22.6},7,cjs.Ease.get(1)).wait(49).to({x:32.6,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},5).wait(130));

	// Символ 18
	this.instance_6 = new lib.Символ18();
	this.instance_6.parent = this;
	this.instance_6.setTransform(125.8,210.1,0.576,0.576,0,0,0,85,86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(80).to({rotation:-97.5,x:-40.2,y:183.9},0).to({rotation:0,x:9.8,y:117.1},10,cjs.Ease.get(1)).wait(77).to({regX:84.9,x:39.7,y:117},8,cjs.Ease.get(-1)).to({regX:85,x:65.8,y:117.1},7,cjs.Ease.get(1)).wait(50).to({x:75.8,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},7).wait(130));

	// Символ 17
	this.instance_7 = new lib.Символ17();
	this.instance_7.parent = this;
	this.instance_7.setTransform(162.1,220.4,0.576,0.576,0,0,0,85.1,86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(77).to({regY:86.4,rotation:-150,x:-44.4,y:186},0).to({regY:86.5,rotation:0,x:46.1,y:127.4},10,cjs.Ease.get(1)).wait(76).to({x:76},8,cjs.Ease.get(-1)).to({x:102.1},7,cjs.Ease.get(1)).wait(52).to({x:112.1,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},9).wait(130));

	// Символ 5
	this.instance_8 = new lib.Символ20();
	this.instance_8.parent = this;
	this.instance_8.setTransform(91.6,21.3,0.915,0.915,0,0,0,105.5,66.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(64).to({_off:false},0).to({x:105.6,alpha:1},13,cjs.Ease.get(1)).wait(86).to({alpha:0},14,cjs.Ease.get(-1)).to({_off:true},8).wait(195));

	// Символ 4
	this.instance_9 = new lib.Символ4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(100,60.1,1,1,0,0,0,76,57.1);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:120,y:70.1,alpha:1},14,cjs.Ease.get(1)).wait(43).to({x:130,y:80.1,alpha:0},10).to({_off:true},58).wait(255));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24,-67,636,337.3);


// stage content:
(lib._300250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		setTimeout(function () {
			this.tek.gotoAndStop(360);
			this.back.gotoAndStop(360);
			this.logo.gotoAndStop(360);
			this.banki.gotoAndStop(360);
		                       
		}, 30000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Символ 8
	this.logo = new lib.Символ15();
	this.logo.parent = this;
	this.logo.setTransform(258.1,32.2,1,1,0,0,0,39.1,29.2);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// Символ 7
	this.tek = new lib.Символ7();
	this.tek.parent = this;
	this.tek.setTransform(194.5,184.1,1,1,0,0,0,105.5,80.1);

	this.timeline.addTween(cjs.Tween.get(this.tek).wait(1));

	// Символ 3
	this.banki = new lib.Символ3();
	this.banki.parent = this;
	this.banki.setTransform(-246.1,238,0.805,0.805,0,0,0,196,79.5);

	this.timeline.addTween(cjs.Tween.get(this.banki).wait(1));

	// Символ 2
	this.back = new lib.Символ2();
	this.back.parent = this;
	this.back.setTransform(152.5,142.5,0.762,0.762,0,0,0,200,200);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0053A4").s().p("A41X1MAAAgvpMAxrAAAMAAAAvpg");
	this.shape.setTransform(146,142.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-221.7,115,1120.8,384.3);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 26,
	color: "#003399",
	opacity: 1.00,
	manifest: [
		{src:"images/300_250_atlas_.png?1479801745861", id:"300_250_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;