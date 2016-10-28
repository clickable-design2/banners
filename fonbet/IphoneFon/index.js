(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 780,
	height: 120,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/arrow.png?1477645609948", id:"arrow"},
		{src:"images/Back.jpg?1477645609948", id:"Back"},
		{src:"images/iphone2_03.png?1477645609948", id:"iphone2_03"},
		{src:"images/iphone2_06.png?1477645609948", id:"iphone2_06"},
		{src:"images/iphone2_09.png?1477645609948", id:"iphone2_09"},
		{src:"images/iphone2_12.png?1477645609948", id:"iphone2_12"},
		{src:"images/iphone2_15.png?1477645609948", id:"iphone2_15"},
		{src:"images/iphone2_19.png?1477645609948", id:"iphone2_19"},
		{src:"images/padal.jpg?1477645609948", id:"padal"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,120);


(lib.Back = function() {
	this.initialize(img.Back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,802,273);


(lib.iphone2_03 = function() {
	this.initialize(img.iphone2_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,335,119);


(lib.iphone2_06 = function() {
	this.initialize(img.iphone2_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,54);


(lib.iphone2_09 = function() {
	this.initialize(img.iphone2_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,62);


(lib.iphone2_12 = function() {
	this.initialize(img.iphone2_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,106);


(lib.iphone2_15 = function() {
	this.initialize(img.iphone2_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,103);


(lib.iphone2_19 = function() {
	this.initialize(img.iphone2_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,64);


(lib.padal = function() {
	this.initialize(img.padal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,780,674);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.iphone2_03();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,335,119);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.iphone2_15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92,103);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.iphone2_19();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252,64);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.iphone2_09();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,246,62);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.iphone2_06();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,246,54);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.iphone2_12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,106);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.padal();
	this.instance.parent = this;
	this.instance.setTransform(0,-674);

	this.instance_1 = new lib.padal();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-674,780,1348);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(167.5,59.5,1,1,0,0,0,167.5,59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.arrow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(305,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,411,120);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(167.5,59.5,1,1,0,0,0,167.5,59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:182.5},9,cjs.Ease.get(-1)).to({x:197.5},9,cjs.Ease.get(1)).to({x:181.7},10,cjs.Ease.get(-1)).to({x:167.5},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,411,120);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATA8IAAgqIgRAAIgSAqIggAAIAZg0QgQgJAAgVQAAgSAMgJQALgKAVAAIAsAAIAAB3gAgGggQgEAEAAAJQAAAJAEAFQADAEAHAAIAPAAIAAgkIgOAAQgHAAgEAFg");
	this.shape.setTransform(181.9,31.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVA8IAAhKIgpBKIgeAAIAAh3IAeAAIAABKIAphKIAeAAIAAB3g");
	this.shape_1.setTransform(171.8,31.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeBLIAAgdIhZAAIAAh4IAdAAIAABhIAqAAIAAhhIAdAAIAABhIATAAIgCA0g");
	this.shape_2.setTransform(159.5,32.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbA8IgIgWIgmAAIgHAWIgfAAIAth3IAZAAIAtB3gAAMAPIgMgoIgMAoIAYAAg");
	this.shape_3.setTransform(146.9,31.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AguA8IAAh3IAuAAQAOAAALAFQAKAFAHAJQAFAKABAMQAAASgOAIQgMALgWAAIgRAAIAAApgAgRgCIARAAQAIAAAFgEQAFgEgBgIQABgIgFgGQgEgFgJAAIgRAAg");
	this.shape_4.setTransform(135.7,31.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNA8IAAhhIgkAAIAAgWIBjAAIAAAWIgkAAIAABhg");
	this.shape_5.setTransform(124.5,31.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkAuQgOgPAAgdIAAgDQAAgTAHgNQAFgNANgIQALgHAOAAQAVAAAOAMQANALACAVIgdAAQAAgLgFgFQgGgFgKAAQgKAAgFAJQgEAHgBATIAAAGQAAATAFAJQAFAIAKAAQAKAAAFgFQAFgEABgLIAdAAQAAANgHAKQgGAKgLAFQgMAFgOAAQgWAAgOgQg");
	this.shape_6.setTransform(113.7,31.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVA8IAAhKIgpBKIgeAAIAAh3IAeAAIAABKIAphKIAeAAIAAB3g");
	this.shape_7.setTransform(102,31.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoA8IAAh3IBQAAIAAAWIgyAAIAABhg");
	this.shape_8.setTransform(91.6,31.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgpA8IAAh3IBSAAIAAAWIg0AAIAAAaIAsAAIAAAUIgsAAIAAAdIA0AAIAAAWg");
	this.shape_9.setTransform(82.2,31.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgvA8IAAh3IAvAAQAOAAALAFQALAFAFAJQAHAKAAAMQgBASgNAIQgMALgWAAIgRAAIAAApgAgRgCIARAAQAIAAAFgEQAFgEAAgIQAAgIgFgGQgFgFgHAAIgSAAg");
	this.shape_10.setTransform(71.6,31.2);

	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(126,32,1,1,0,0,0,126,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252,64);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(126,32,1,1,0,0,0,126,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:31.9,scaleX:1.1,scaleY:1.1,y:31.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252,64);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(33.5,53,1,1,0,0,0,33.5,53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,106);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(123,27,1,1,0,0,0,123,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,246,54);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(123,31,1,1,0,0,0,123,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,246,62);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(46,51.5,1,1,0,0,0,46,51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:49.1},19,cjs.Ease.get(-1)).to({y:46.5},20,cjs.Ease.get(1)).to({y:49},20,cjs.Ease.get(-1)).to({y:51.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92,103);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(46,51.5,1,1,0,0,0,46,51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},249).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92,103);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(390,337,1,1,0,0,0,390,337);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:1011},199).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-674,780,1348);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("Eg9JAJhIAAzBMB6TAAAIAATBg");
	this.shape.setTransform(399.5,145);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(399,-128,1,1,0,0,0,390,337);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Back();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1139,802,1412);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_63 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_73 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(63).call(this.frame_63).wait(10).call(this.frame_73).wait(11));

	// Слой 8
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(185.5,-80.5,1,1,0,0,0,167.5,59.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({_off:false},0).to({y:59.5},8).wait(2).to({y:-80.5},9).wait(1));

	// iphone2_12.png
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.5,59,1,1,0,0,0,33.5,53);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:53.1,scaleX:1.09,scaleY:1.09,rotation:10.2,x:22.6,y:59.3},17,cjs.Ease.get(-1)).to({regY:53,scaleX:1,scaleY:1,rotation:0,x:22.5,y:59},17,cjs.Ease.get(1)).to({regY:53.1,scaleX:1.11,scaleY:1.11,rotation:-11,x:22.6,y:59.2},15,cjs.Ease.get(-1)).to({regY:53,scaleX:1,scaleY:1,rotation:0,x:22.5,y:59},14,cjs.Ease.get(1)).wait(1).to({x:-127.5},8,cjs.Ease.get(-1)).wait(2).to({x:22.5},9).wait(1));

	// iphone2_19.png
	this.instance_2 = new lib.Символ15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(581,62,1,1,0,0,0,126,32);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84));

	// iphone2_15.png
	this.instance_3 = new lib.Символ9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(144,106.5,1,1,0,0,0,46,51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(64).to({y:206.5},8,cjs.Ease.get(-1)).wait(2).to({y:106.5},9).wait(1));

	// iphone2_09.png
	this.instance_4 = new lib.Символ12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(329,83,1,1,0,0,0,123,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.8,scaleY:0.8,x:354,y:89.4},17,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:329,y:83},17,cjs.Ease.get(1)).to({scaleX:1.14,scaleY:1.14,x:311.6,y:78.6},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:329,y:83},14,cjs.Ease.get(1)).wait(1).to({y:203},8,cjs.Ease.get(-1)).wait(2).to({y:83},9).wait(1));

	// iphone2_06.png
	this.instance_5 = new lib.Символ13();
	this.instance_5.parent = this;
	this.instance_5.setTransform(201,29,1,1,0,0,0,123,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:27.1,scaleX:1.11,scaleY:1.11,x:214.7,y:32.1},17,cjs.Ease.get(-1)).to({regY:27,scaleX:1,scaleY:1,x:201,y:29},17,cjs.Ease.get(1)).to({scaleX:0.85,scaleY:0.85,x:182,y:24.9},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:201,y:29},14,cjs.Ease.get(1)).wait(1).to({y:-61},8,cjs.Ease.get(-1)).wait(2).to({y:29},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,2,731,156);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		    {
			    _this.iph.gotoAndPlay(65);
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
			    _this.iph.gotoAndPlay(75);
		    }
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 2
	this.iph = new lib.Символ1();
	this.iph.parent = this;
	this.iph.setTransform(394.5,84.5,1,1,0,0,0,353.5,81.5);

	this.timeline.addTween(cjs.Tween.get(this.iph).wait(1));

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(391,51.5,1,1,0,0,0,401,136.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(380,-1164,802,1412);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;