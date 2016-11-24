(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 26,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/arrow.png?1479768370473", id:"arrow"},
		{src:"images/ch_grl.png?1479768370473", id:"ch_grl"},
		{src:"images/ch_slov.png?1479768370473", id:"ch_slov"},
		{src:"images/ch_zel.png?1479768370473", id:"ch_zel"},
		{src:"images/cheese_clock.png?1479768370473", id:"cheese_clock"},
		{src:"images/clock.png?1479768370473", id:"clock"},
		{src:"images/flash0ai.png?1479768370473", id:"flash0ai"},
		{src:"images/flash0ai_1.png?1479768370473", id:"flash0ai_1"},
		{src:"images/flash0ai_2.png?1479768370473", id:"flash0ai_2"},
		{src:"images/flash0ai_3.png?1479768370473", id:"flash0ai_3"},
		{src:"images/kinder1.jpg?1479768370473", id:"kinder1"},
		{src:"images/kinder2.jpg?1479768370473", id:"kinder2"},
		{src:"images/logo.png?1479768370473", id:"logo"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,173);


(lib.ch_grl = function() {
	this.initialize(img.ch_grl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,216);


(lib.ch_slov = function() {
	this.initialize(img.ch_slov);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,216);


(lib.ch_zel = function() {
	this.initialize(img.ch_zel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,216);


(lib.cheese_clock = function() {
	this.initialize(img.cheese_clock);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,385);


(lib.clock = function() {
	this.initialize(img.clock);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,434);


(lib.flash0ai = function() {
	this.initialize(img.flash0ai);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,417,125);


(lib.flash0ai_1 = function() {
	this.initialize(img.flash0ai_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,379,301);


(lib.flash0ai_2 = function() {
	this.initialize(img.flash0ai_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,466,290);


(lib.flash0ai_3 = function() {
	this.initialize(img.flash0ai_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,293,126);


(lib.kinder1 = function() {
	this.initialize(img.kinder1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,600);


(lib.kinder2 = function() {
	this.initialize(img.kinder2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,600);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,172);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kinder2();
	this.instance.setTransform(0,0,1.087,1.087);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,434.7,652);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kinder1();
	this.instance.setTransform(0,0,1.087,1.087);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,434.7,652);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.setTransform(0,0,0.767,0.767);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177.3,132);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cheese_clock();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,385);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.arrow();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,173);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.clock();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,450,434);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ch_zel();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,216);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ch_slov();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,216);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ch_grl();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,216);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash0ai();
	this.instance.setTransform(0,0,0.606,0.606);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252.9,75.8);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash0ai_1();
	this.instance.setTransform(0,0,0.462,0.462);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175,139);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash0ai_2();
	this.instance.setTransform(0,0,0.38,0.38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177,110.1);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash0ai_3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,293,126);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(88.7,-74,1,1,0,0,0,88.7,66);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:66},14,cjs.Ease.get(1)).wait(315).to({alpha:0},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-140,177.3,132);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(124.5,55.9,1,1,0,0,0,126.5,37.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,18,252.9,75.8);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 11
	this.instance = new lib.Символ11();
	this.instance.setTransform(303,108,1,1,0,0,0,200,108);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({regX:200.1,scaleX:0.82,scaleY:0.82,x:745.6,y:127.7},14,cjs.Ease.get(1)).wait(37).to({x:1079.6},11,cjs.Ease.get(-1)).wait(11));

	// Символ 10
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(388,202,1,1,0,0,0,200,108);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:200.1,regY:108.1,scaleX:0.82,scaleY:0.82,x:815,y:204.5},14,cjs.Ease.get(1)).wait(49).to({x:1149},11,cjs.Ease.get(-1)).wait(6));

	// Символ 9
	this.instance_2 = new lib.Символ9();
	this.instance_2.setTransform(200,202,1,1,0,0,0,200,108);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({regX:200.1,regY:108.1,scaleX:0.82,scaleY:0.82,x:661.5,y:204.5},14,cjs.Ease.get(1)).wait(51).to({x:995.5},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(188,94,400,216);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(217.3,334,1,1,0,0,0,217.3,326);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,8,434.7,652);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(217.3,326,1,1,0,0,0,217.3,326);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,434.7,652);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 21
	this.instance = new lib.Символ22();
	this.instance.setTransform(-724.9,326,1,1,0,0,0,217.3,326);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},80).wait(260));

	// Символ 21
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(217.3,330,1,1,0,0,0,217.3,326);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80).to({_off:false},0).to({x:195.3,alpha:1},19).to({x:165.3},61).to({x:147.3,alpha:0},19).to({_off:true},2).wait(159));

	// Символ 20
	this.instance_2 = new lib.Символ23();
	this.instance_2.setTransform(217.3,326,1,1,0,0,0,217.3,326);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(160).to({_off:false},0).to({x:195.3,alpha:1},19).to({x:165.3},61).to({x:147.3,alpha:0},18).wait(82));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-942.2,0,434.7,652);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(146.5,63,1,1,0,0,0,146.5,63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,293,126);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 13
	this.instance = new lib.Символ13();
	this.instance.setTransform(204,107.2,0.687,0.687,0,0,0,84.9,123.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:85,scaleX:0.69,scaleY:0.69,rotation:27.8,x:204.1,y:107.3},25,cjs.Ease.get(-1)).to({regX:84.9,scaleX:0.69,scaleY:0.69,rotation:57.2,x:203.9,y:107.1},25,cjs.Ease.get(1)).wait(50));

	// Символ 14
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(204,107.1,0.687,0.687,0,0,0,200.1,192.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// Символ 12
	this.instance_2 = new lib.Символ12();
	this.instance_2.setTransform(202.6,110.3,0.687,0.687,0,0,0,225,216.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:225.1,regY:216.8,scaleX:0.66,scaleY:0.66},50).to({regX:225,regY:216.9,scaleX:0.69,scaleY:0.69},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.1,-38.7,309.1,298.1);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(348.8,278,1,1,0,0,0,225,217);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(339));

	// Символ 1
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(731.4,235,1,1,-53.5,0,0,225,217.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:217,rotation:0,x:758.9,y:278,alpha:1},11,cjs.Ease.get(1)).wait(73).to({rotation:79.5,x:889.9,y:230,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(240));

	// Символ 11
	this.instance_2 = new lib.Символ24();
	this.instance_2.setTransform(294,155,1,1,0,0,0,294,155);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(259).to({_off:false},0).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(171.9,-23.5,672.1,425.8);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 7
	this.instance = new lib.Символ7();
	this.instance.setTransform(-243.6,65.8,1,1,0,0,0,146.5,63);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(339));

	// Символ 7
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(144.5,65.8,1,1,0,0,0,146.5,63);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14,cjs.Ease.get(1)).wait(70).to({alpha:0},10,cjs.Ease.get(-1)).to({_off:true},6).wait(240));

	// Символ 6
	this.instance_2 = new lib.Символ6();
	this.instance_2.setTransform(55.8,200.3,0.511,0.511,-63.5,0,0,87.5,69.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100).to({_off:false},0).to({regY:69.5,scaleX:1,scaleY:1,rotation:15,x:113.5,y:79.6,alpha:1},10,cjs.Ease.get(1)).to({rotation:0,x:89.5,y:83.5},5,cjs.Ease.get(1)).wait(55).to({scaleX:0.57,scaleY:0.57,rotation:39.2,x:143.2,y:123.7,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},2).wait(159));

	// Символ 5
	this.instance_3 = new lib.Символ5();
	this.instance_3.setTransform(157.5,327,0.53,0.53,-60,0,0,88.4,55.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(180).to({_off:false},0).to({regX:88.5,scaleX:1,scaleY:1,rotation:15,x:77.3,y:273,alpha:1},10,cjs.Ease.get(1)).to({rotation:0,x:88.5,y:291.8},5,cjs.Ease.get(1)).wait(55).to({scaleX:0.45,scaleY:0.45,rotation:-45,x:148.5,y:314.4,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(79));

	// Символ 8
	this.instance_4 = new lib.Символ25();
	this.instance_4.setTransform(151.4,37.9,1,1,0,0,0,126.5,37.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(260).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(59).to({alpha:0},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390.1,2.8,681.1,126);


// stage content:



(lib.hoh300600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(151.6,323.6,1,1,0,0,0,146.5,173.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ26();
	this.instance_1.setTransform(144.7,82,1,1,0,0,0,88.7,66);

	this.instance_2 = new lib.Символ19();
	this.instance_2.setTransform(264.1,274,1,1,0,0,0,280.4,326);

	this.instance_3 = new lib.Символ18();
	this.instance_3.setTransform(-137.4,441.2,1,1,0,0,0,445.5,160.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0053A4").s().p("EgYXAvMMAAAheXMAwvAAAMAAABeXg");
	this.shape.setTransform(149.1,302.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-808.6,176,1263.7,807.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;