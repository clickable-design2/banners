(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bezd.png?1475679219406", id:"bezd"},
		{src:"images/d10.png?1475679219406", id:"d10"},
		{src:"images/dar.png?1475679219406", id:"dar"},
		{src:"images/fon.jpg?1475679219406", id:"fon"},
		{src:"images/pj123_03.png?1475679219406", id:"pj123_03"},
		{src:"images/pj_01.png?1475679219406", id:"pj_01"},
		{src:"images/pj_03.png?1475679219406", id:"pj_03"},
		{src:"images/pj_07.png?1475679219406", id:"pj_07"},
		{src:"images/pj_09.png?1475679219406", id:"pj_09"},
		{src:"images/pj_11.png?1475679219406", id:"pj_11"},
		{src:"images/pok.png?1475679219406", id:"pok"},
		{src:"images/ruka.png?1475679219406", id:"ruka"},
		{src:"images/tolko.png?1475679219406", id:"tolko"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.bezd = function() {
	this.initialize(img.bezd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,45);


(lib.d10 = function() {
	this.initialize(img.d10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,160);


(lib.dar = function() {
	this.initialize(img.dar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,211,48);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.pj123_03 = function() {
	this.initialize(img.pj123_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,438,331);


(lib.pj_01 = function() {
	this.initialize(img.pj_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,296);


(lib.pj_03 = function() {
	this.initialize(img.pj_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,204);


(lib.pj_07 = function() {
	this.initialize(img.pj_07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,222);


(lib.pj_09 = function() {
	this.initialize(img.pj_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,194);


(lib.pj_11 = function() {
	this.initialize(img.pj_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,92);


(lib.pok = function() {
	this.initialize(img.pok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,32);


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,183);


(lib.tolko = function() {
	this.initialize(img.tolko);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,43);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pok();
	this.instance.parent = this;
	this.instance.setTransform(-77.5,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,-16,155,32);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pj_03();
	this.instance.parent = this;
	this.instance.setTransform(-96,-102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-102,192,204);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pj_11();
	this.instance.parent = this;
	this.instance.setTransform(-108,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-46,216,92);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.parent = this;
	this.instance.setTransform(-53,-91.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-91.5,106,183);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pj123_03();
	this.instance.parent = this;
	this.instance.setTransform(-219,-165.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219,-165.5,438,331);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dar();
	this.instance.parent = this;
	this.instance.setTransform(-105.5,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.5,-24,211,48);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tolko();
	this.instance.parent = this;
	this.instance.setTransform(-93.5,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.5,-21.5,187,43);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bezd();
	this.instance.parent = this;
	this.instance.setTransform(-95,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-22.5,190,45);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.d10();
	this.instance.parent = this;
	this.instance.setTransform(-103,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-80,206,160);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pj_01();
	this.instance.parent = this;
	this.instance.setTransform(-132.5,-148);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.5,-148,265,296);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pj_07();
	this.instance.parent = this;
	this.instance.setTransform(-83.5,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.5,-111,167,222);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pj_09();
	this.instance.parent = this;
	this.instance.setTransform(-132.5,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.5,-97,265,194);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon();
	this.instance.parent = this;
	this.instance.setTransform(-300,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-150,600,300);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,-16,155,32);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.139,1.139);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.012},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ33();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-46,216,92);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(12,78,1,1,0,0,0,12,78);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15,x:12.1,y:78.1},56,cjs.Ease.get(1)).to({rotation:0,x:12,y:78},58,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-91.5,106,183);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.5,-24,211,48);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(158,81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219,-165.5,438,338);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(0,207.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:10},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.5,185.6,187,43);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(-245,6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({x:0,alpha:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-340,-16.5,190,45);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(0,-237);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({y:0,alpha:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_78 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(78).call(this.frame_78).wait(1));

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(0,-210);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({y:0},59,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-312,192,204);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.9,-52.3,246,104.8);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(-46.6,131.3,1,1,0,0,0,-46.6,131.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:131.4,rotation:2.5,y:131.4},44,cjs.Ease.get(0.99)).to({regY:131.3,rotation:0,y:131.3},45,cjs.Ease.get(0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.5,-148,265,296);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:20},61,cjs.Ease.get(1)).to({y:0},58,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-312,192,204);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(2,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-2.3},0).wait(1).to({y:-2.7},0).wait(1).to({y:-3.1},0).wait(1).to({y:-3.5},0).wait(1).to({y:-3.8},0).wait(1).to({y:-4.1},0).wait(1).to({y:-4.3},0).wait(1).to({y:-4.6},0).wait(1).to({y:-4.8},0).wait(1).to({y:-4.9},0).wait(1).to({y:-5.1},0).wait(1).to({y:-5.3},0).wait(1).to({y:-5.4},0).wait(1).to({y:-5.5},0).wait(1).to({y:-5.6},0).wait(1).to({y:-5.7},0).wait(1).to({y:-5.8},0).wait(1).to({y:-5.9},0).wait(1).to({y:-6},0).wait(1).to({y:-6.1},0).wait(2).to({y:-6.2},0).wait(2).to({y:-6.3},0).wait(2).to({y:-6.4},0).wait(2).to({y:-6.5},0).wait(2).to({y:-6},0).wait(1).to({y:-5.6},0).wait(1).to({y:-5.2},0).wait(1).to({y:-4.8},0).wait(1).to({y:-4.5},0).wait(1).to({y:-4.2},0).wait(1).to({y:-4},0).wait(1).to({y:-3.7},0).wait(1).to({y:-3.5},0).wait(1).to({y:-3.4},0).wait(1).to({y:-3.2},0).wait(1).to({y:-3},0).wait(1).to({y:-2.9},0).wait(1).to({y:-2.8},0).wait(1).to({y:-2.7},0).wait(1).to({y:-2.6},0).wait(1).to({y:-2.5},0).wait(1).to({y:-2.4},0).wait(1).to({y:-2.3},0).wait(1).to({y:-2.2},0).wait(2).to({y:-2.1},0).wait(2).to({y:-2},0).wait(2).to({y:-1.9},0).wait(2).to({y:-1.8},0).wait(2).to({y:-1.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.5,-112.7,167,222);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.5,-97,265,194);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.77,scaleY:0.77},20,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},22,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-46,216,92);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-150,600,300);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(-7,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4},53,cjs.Ease.get(1)).to({y:-16},56,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226,-181.5,438,338);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 6
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(-26.8,128.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 8
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(75.8,114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 12
	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-19.2,-77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.3,-225.5,320.6,451);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15},47,cjs.Ease.get(1)).to({rotation:0},47,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-312,192,204);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(0,149.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).to({y:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.joker1 = new lib.Символ14();
	this.joker1.parent = this;
	this.joker1.setTransform(-0.9,0,0.956,0.956);

	this.timeline.addTween(cjs.Tween.get(this.joker1).to({y:-20},42,cjs.Ease.get(1)).to({y:0},52,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.1,-215.5,306.3,431);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(-516.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-669.2,-215.5,306.4,431);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(10));

	// Символ 4
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(174.5,99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Слой 1
	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(443.6,-109.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:168,y:-104.1},9,cjs.Ease.get(1)).wait(1).to({x:443.6,y:-109.1},9).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-127.1,333.6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:17.5,alpha:1},9,cjs.Ease.get(1)).wait(1).to({y:333.6,alpha:0},9).wait(1));

	// Слой 10
	this.instance_3 = new lib.Символ39();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-15,-183.1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-112.1,alpha:1},9,cjs.Ease.get(1)).wait(1).to({y:-183.1,alpha:0},9).wait(1));

	// Символ 18
	this.instance_4 = new lib.Символ18();
	this.instance_4.parent = this;
	this.instance_4.setTransform(32.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-169.4,alpha:0},9).wait(1).to({x:32.7,alpha:1},9).wait(1));

	// Символ 10
	this.instance_5 = new lib.Символ10();
	this.instance_5.parent = this;
	this.instance_5.setTransform(191.5,-36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-148.5,alpha:0},9).wait(1).to({y:-36.5,alpha:1},9).wait(1));

	// Символ 24
	this.instance_6 = new lib.Символ24();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-181.5,108);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:88},3).to({y:268},6).wait(1).to({y:88},6).to({y:108},3).wait(1));

	// Символ 22
	this.instance_7 = new lib.Символ22();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-181.5,71);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:51},3).to({y:231},6).wait(1).to({y:51},6).to({y:71},3).wait(1));

	// Символ 20
	this.instance_8 = new lib.Символ20();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-184.5,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:165.5,y:-5.5},9,cjs.Ease.get(1)).wait(1).to({x:-184.5,y:-26.5},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-636.5,-348.5,1185.7,838.6);


// stage content:



(lib.pj600x300 = function(mode,startPosition,loop) {
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
		    _this.main.gotoAndPlay(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(11);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// pj_11.png
	this.main = new lib.Символ25();
	this.main.parent = this;
	this.main.setTransform(308.5,145.5);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// fon.jpg
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(300,151,1.05,1.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.1,-53.1,1185.7,838.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;