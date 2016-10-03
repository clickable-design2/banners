(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/baks.png?1475471372057", id:"baks"},
		{src:"images/best.png?1475471372057", id:"best"},
		{src:"images/fon.jpg?1475471372057", id:"fon"},
		{src:"images/girl1.png?1475471372057", id:"girl1"},
		{src:"images/image34.png?1475471372057", id:"image34"},
		{src:"images/image37.png?1475471372057", id:"image37"},
		{src:"images/image40.png?1475471372057", id:"image40"},
		{src:"images/image79.png?1475471372057", id:"image79"},
		{src:"images/logo.png?1475471372057", id:"logo"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.baks = function() {
	this.initialize(img.baks);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,293,256);


(lib.best = function() {
	this.initialize(img.best);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,116);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.girl1 = function() {
	this.initialize(img.girl1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,289);


(lib.image34 = function() {
	this.initialize(img.image34);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,65);


(lib.image37 = function() {
	this.initialize(img.image37);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,65);


(lib.image40 = function() {
	this.initialize(img.image40);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,65);


(lib.image79 = function() {
	this.initialize(img.image79);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,49);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,107);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF66").s().p("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");
	this.shape.setTransform(107.6,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,215.2,12.4);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF66").s().p("AElBHQgNgFgKgJQgLgJgHgPQgGgPgBgSQABgRAGgPQAHgPALgJQAKgJANgFQAOgFAOAAQAOAAANAFQAOAFALAJQAKAJAHAPQAGAPABARQgBASgGAPQgHAPgKAJQgLAJgOAFQgNAFgOAAQgOAAgOgFgAEvgiQgIAEgFAJQgFAKgBALQABAMAFAKQAFAJAIAEQAIAEAKAAQAKAAAIgEQAIgEAGgJQAFgKAAgMQAAgLgFgKQgGgJgIgEQgIgEgKAAQgKAAgIAEgAt3BHQgNgFgLgJQgKgJgHgPQgHgPABgSQgBgRAHgPQAHgPAKgJQALgJANgFQAOgFAOAAQAOAAANAFQAOAFALAJQALAJAGAPQAHAPgBARQABASgHAPQgGAPgLAJQgLAJgOAFQgNAFgOAAQgOAAgOgFgAttgiQgHAEgGAJQgGAKAAALQAAAMAGAKQAGAJAHAEQAJAEAJAAQAJAAAJgEQAIgEAGgJQAFgKAAgMQAAgLgFgKQgGgJgIgEQgJgEgJAAQgJAAgJAEgAL7BFQgNgEgLgJQgKgJgHgPQgGgPgBgRQABgRAGgOQAHgPAKgJQALgJANgFQAOgFAOAAQAZAAAUAOQAUAOAEAcIglAAQgIgWgYAAQgRAAgJAMQgLALAAARQAAAQALAMQAJAMARAAQAMAAAJgGQAJgGACgMIAlAAQgCAUgLAOQgLANgPAGQgNAFgRAAQgOAAgOgFgAQLBJIAAiRIAlAAIAACRgAN5BJIAAiRIAmAAIAAAsIAbAAQALAAAKADQAJAEAHAGQAFAGAFAHQAEAGABAJQABAIgBAJQgBAIgEAIQgFAIgFAGQgHAGgJADQgKAEgLAAgAOfAnIAIAAIAKAAIAJAAQAGAAAEgEQAEgDABgGQABgFgCgFQgBgFgDgEQgFgEgFAAIgbAAgAJSBJIAAgEIAXgwIgyhYIAAgFIAqAAIAcA2IABAAIAZg2IApAAIAAAFIhGCMgAH8BJIAAg7IgtAAIAAA7IgmAAIAAiRIAmAAIAAA1IAtAAIAAg1IAnAAIAACRgABtBJIAAiRIBqAAIAAAhIhEAAIAAASIAbAAQALAAAJADQAKAEAGAFQAGAGAFAFQAEAHABAIQABAIgBAIQgBAIgEAHQgFAHgGAGQgGAFgKADQgJAEgLAAgACTAnIAbAAQAHAAAEgEQAEgFABgFQgBgGgEgEQgEgFgHAAIgbAAgAhJBJIAAiRIBbAAIAAAhIg1AAIAAAVIAwAAIAAAfIgwAAIAAAaIA3AAIAAAigAiVBJIAAhJIhJBJIgOAAIAAiRIAnAAIAABIIBKhJIANAAIAACSgAnMBJIAAiRIAnAAIAABuIAjAAIAAhuIAnAAIAABuIAjAAIAAhuIAmAAIAACRgApeBJIAAiRIAmAAIAAAsIAbAAQALAAAKADQAJAEAGAGQAHAGAEAHQAEAGABAJQABAIgBAJQgBAIgEAIQgEAIgHAGQgGAGgJADQgKAEgLAAgAo4AnIAIAAIAKAAIAIAAQAHAAAEgEQAEgDABgGQABgFgBgFQgBgFgFgEQgDgEgHAAIgaAAgAqWBJIglhUIgmBUIglAAIAAgGIBDiNIAQAAIBCCNIAAAGgAwvBJIAAiRIBqAAIAAAhIhEAAIAAASIAbAAQALAAAKADQAJAEAHAFQAFAGAFAFQAEAHABAIQABAIgBAIQgBAIgEAHQgFAHgFAGQgHAFgJADQgKAEgLAAgAwJAnIAbAAQAHAAAEgEQAFgFgBgFQAAgGgEgEQgEgFgHAAIgbAAg");
	this.shape.setTransform(107.3,7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,214.5,15.3);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF66").s().p("AtxDNQAAgHgEgHIgJgKIgHgNICZl0IXhAAICRFMQgDAFgCAJIgBAWIABAiIABAHg");
	this.shape.setTransform(90.2,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180.5,41);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.baks();
	this.instance.parent = this;
	this.instance.setTransform(-146.5,-128);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.5,-128,293,256);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAPIgDgBIgBgOQABgPAKABQALABABANIgBANQgCADgJAAIgHgBg");
	this.shape.setTransform(37.4,147.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHALIgCgBQgBgBAAgJIABgMQAIAAAFAHQAGAFABAEIgCAGQgDACgGAAIgHgBg");
	this.shape_1.setTransform(24.2,149.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAEQgGgIAAgCQAAgLAMAEQANAEABALQAAAKgBAAIgCACQgCABgFAAQgEAAgGgLg");
	this.shape_2.setTransform(12.8,149.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},13).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[]},2).wait(7));

	// Слой 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfABQABgPAegJQAfgJABAfQAAAbgtAAQgPAAgDgZg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAJQgCgGACgDQAAgdAaAJQAcAIAAARQAAAIgFAEQgHAGgSAAQgUAAgEgOg");
	this.shape_4.setTransform(-0.2,4.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWALIgCgNQAAgOAYgHQAZgHAAAhQAAAIgFAGQgJAIgMAAQgPAAgGgOg");
	this.shape_5.setTransform(-0.4,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},3).to({state:[]},3).to({state:[]},15).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-2.6,6.4,5.3);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACKAaQgIgFgPAAQgNAAgEgFQgCgDABgDQAAgKApgKQApgKABAbQgBANgBADQgDAIgPAAQgPAAgHgFgAipAIQgKgEAAgMQABgGABgDQADgFAIAAQAJAAAGAHQAFAIAHAAQAYAAAFgLQAFgLAJgBQAcAHAHAIQACADAAALQAAAIgBADQgCAGgJAAQhMAAgWgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(63));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-3.1,36,6.3);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon();
	this.instance.parent = this;
	this.instance.setTransform(-300,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-150,600,300);


(lib.копияСимвол4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("Aq9HIIAAuPIV7AAIAAOPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.2,-45.6,140.5,91.3);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgVAXQgKgKAAgNQAAgMAKgJQAJgKAMAAQANAAAKAKQAJAJAAAMQAAANgJAKQgKAJgNAAQgMAAgJgJg");
	this.shape.setTransform(3.3,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.5,6.5);


(lib.Символ6копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-4.6,0,4.6,0).s().p("AgsDBIAAmBIBZAAIAAGBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-19.3,9.2,38.7);


(lib.shape83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.02)","#FFFFFF"],[0,1],-20.8,-1.9,2.2,15.4).s().p("AkyDyIGRnjIDUAAImQHjg");
	this.shape.setTransform(2.9,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.02)","#FFFFFF"],[0,1],-20.8,-1.9,2.2,15.4).s().p("AkyDyIGQnjIDVAAImQHjg");
	this.shape_1.setTransform(29.7,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,-19.2,88.3,48.5);


(lib.shape80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.image79, null, new cjs.Matrix2D(1,0,0,1,-91,-24.5)).s().p("AuMD0IAAnnIcZAAIAAHng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,-24.5,182,49);


(lib.shape41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.image40, null, new cjs.Matrix2D(1,0,0,1,-33,-32.5)).s().p("AlIFEIAAqHIKSAAIAAKHg");
	this.shape.setTransform(-1.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.1,-32.5,66,65);


(lib.shape38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.image37, null, new cjs.Matrix2D(1,0,0,1,-33,-31.5)).s().p("AlJE7IAAp1IKTAAIAAJ1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-31.5,66,63);


(lib.shape35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.image34, null, new cjs.Matrix2D(1,0,0,1,-32.5,-32.5)).s().p("AlDFEIAAqHIKHAAIAAKHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-32.5,65,65);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ68();
	this.instance.parent = this;
	this.instance.setTransform(107.6,6.2,1,1,0,0,0,107.6,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.98,scaleY:0.98,x:107.7},4,cjs.Ease.get(-1)).to({scaleX:0.95,scaleY:0.95,x:107.6},5,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:0.97,x:107.7},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:107.6},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,215.2,12.4);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ67();
	this.instance.parent = this;
	this.instance.setTransform(107.2,-7.5,1,1,0,0,0,107.2,7.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:7.5,scaleX:0.95,scaleY:0.95,x:107.3,y:-7.6},4,cjs.Ease.get(-1)).to({regX:107.3,scaleX:0.86,scaleY:0.86,y:-7.5},6,cjs.Ease.get(1)).to({regX:107.4,scaleX:0.93,scaleY:0.93,x:107.4},4,cjs.Ease.get(-1)).to({regX:107.2,regY:7.6,scaleX:1,scaleY:1,x:107.2},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-15.1,214.5,15.3);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ65();
	this.instance.parent = this;
	this.instance.setTransform(101,37,1,1,0,0,0,107.2,7.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:21.9},0).to({y:-28.6},8).wait(32).to({y:37},7).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ66();
	this.instance_1.parent = this;
	this.instance_1.setTransform(101,-18,1,1,0,0,0,107.6,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({y:22.4},8).wait(32).to({y:-18},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-24.2,215.2,53.8);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.17,scaleY:1.17},14,cjs.Ease.get(-0.95)).to({scaleX:1.37,scaleY:1.37},15,cjs.Ease.get(1)).to({scaleX:1.18,scaleY:1.18},15,cjs.Ease.get(-0.95)).to({scaleX:1,scaleY:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-150,600,300);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(-45.4,-86.8);
	this.instance.alpha = 0.539;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10.2,-84.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.girl1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-128,-144.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128,-144.5,256,289);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4.8},9,cjs.Ease.get(-1)).to({y:10},10,cjs.Ease.get(1)).to({y:4.5},11,cjs.Ease.get(-1)).to({y:0},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128,-144.5,256,289);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(-30,112);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1.5},10,cjs.Ease.get(-1)).to({rotation:3.2},9,cjs.Ease.get(1)).to({rotation:1.8,x:-29.9},11,cjs.Ease.get(-1)).to({rotation:0,x:-30},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.5,-16,293,256);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(110.7,189.9,1,1,90);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000D2A").s().p("EiKRA6mMAAAh1LMEUjAAAMAAAB1Lg");
	this.shape.setTransform(270.8,185);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-614.2,-190,1770,750);


(lib.копияСимвол5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.копияСимвол4();
	this.instance.parent = this;
	this.instance.setTransform(-4.3,2.3,1,0.106,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:51.6,y:-36.1},38).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-41.5,121.3,87.5);


(lib.копияСимвол2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.копияСимвол4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.531},9,cjs.Ease.get(-1)).to({alpha:0},10,cjs.Ease.get(1)).to({alpha:0.5},10,cjs.Ease.get(-1)).to({alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.2,-45.6,140.5,91.3);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shape83("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(61.5,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.6,0,88.3,48.5);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(Math.random() * 30);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(3.2,3.2,1,1,0,0,0,3.2,3.2);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},7,cjs.Ease.get(-1)).to({alpha:0},7,cjs.Ease.get(1)).to({alpha:0.461},7,cjs.Ease.get(-1)).to({alpha:1},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-12,38,38);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6копия();
	this.instance.parent = this;
	this.instance.setTransform(48.6,19.2,1,2.718,-74.9,0,0,-5.9,19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:56.4,x:48.7},43).wait(45).to({rotation:56.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-18.1,104,36.3);


(lib.Символ2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(232.3,11.1,1,1,0,0,0,3.2,3.2);

	this.instance_2 = new lib.Символ9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(232.3,24.9,1,1,0,0,0,3.2,3.2);

	this.instance_3 = new lib.Символ9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(232.3,57.6,1,1,0,0,0,3.2,3.2);

	this.instance_4 = new lib.Символ9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(232.3,91.1,1,1,0,0,0,3.2,3.2);

	this.instance_5 = new lib.Символ9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(232.3,104.9,1,1,0,0,0,3.2,3.2);

	this.instance_6 = new lib.Символ9();
	this.instance_6.parent = this;
	this.instance_6.setTransform(7,104.9,1,1,0,0,0,3.2,3.2);

	this.instance_7 = new lib.Символ9();
	this.instance_7.parent = this;
	this.instance_7.setTransform(7,91.2,1,1,0,0,0,3.2,3.2);

	this.instance_8 = new lib.Символ9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(7,57.3,1,1,0,0,0,3.2,3.2);

	this.instance_9 = new lib.Символ9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(7,24.9,1,1,0,0,0,3.2,3.2);

	this.instance_10 = new lib.Символ9();
	this.instance_10.parent = this;
	this.instance_10.setTransform(7,11,1,1,0,0,0,3.2,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Слой 1
	this.instance_11 = new lib.best();
	this.instance_11.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,0,247.3,118.7);


(lib.sprite84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,5,1,1,0,0,0,60.9,24.2);
	this.instance.alpha = 0.469;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,-19.2,88.3,48.5);


(lib.sprite81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape80("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,-24.5,182,49);


(lib.sprite42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape41("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.1,-32.5,66,65);


(lib.sprite39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape38("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-31.5,66,63);


(lib.sprite36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape35("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-32.5,65,65);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(297.5,123);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(121,107,293,256);


(lib.копияСимвол3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(58.7,34.8);

	// Слой 5
	this.instance = new lib.копияСимвол2();
	this.instance.parent = this;
	this.instance.setTransform(61.8,40.6);
	this.instance.alpha = 0.559;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhvCFIgBgCQAAgEAGgNIAIgPIAAAAQgKgBAAgIQgBgFADgBQATgDAGgHQADgFACgHIAFgKQADgGAGgEQAEACgCAJIABAGQAOgBADACQAAAAABAAQAAAAAAABQAAAAAAABQABABAAAAQAAAEgKALIgPAPQgEAFAAAJIgBAQIgJAAQgEAAgCgDIgDgDIgTARIgEgBgAAvBAQgCgOANgPIgIgFQgDgDgBgDQAAgEAFgBIAQgEQAAAAAAAAQABAAAAgBQAAAAAAgBQAAgBAAAAQADgJADgDIAOgTQAGgIABAKQABACgDAGIABAGQANgCAEABQAAAAAAABQABAAAAAAQAAABABAAQAAABAAABQAAACgLAMQgLAMgBADIAAARQgBALgEABQgFAAgFgEIgHgFQgEACgGAHQgGAHgCADQgDgBAAgDgAhOAVIgBgHQADgFAAgDQgEgDAAgDQgBgFAVgLIADAGIABAEIgEAGQACABABAFIAAAFQAAAEgEAAQgDAAgCgCQgCAHgGABgABFhYQgBgCAEgIQAEgIADAAQgEgDAAgDQAAgDAKgJQAKgJAEAAIABAJIABAAIAFgDIAEABIABAGQgBACgHAGQgGAFAAAFQAAACABAFQABAFgEADIgKABQgCAAgCgCIgCgCIgFACIgDADQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAg");
	mask_1.setTransform(63.7,21.2);

	// Слой 6
	this.instance_1 = new lib.копияСимвол5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55.4,43.8);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AlGChIAGgJQAMgTBAheQAcgnAvhKIBIhwQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIADAAQAFAVAQAkQASAqAFAPQAFAOAYAyIAKASIAAg0IgBAAIgBgDIACgBIBDAAIACACIAAA3IAWgaQAOgTAMgJQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAIBDgBIABAAIABABIAAAAIAAABQAAAEgvAxQAKAHAIALIAMAQQAEgKAQgaQAUgfALgQIAAgCIAAgBIACgBIAbAAIAAgBIA7ADIAAAAQAEACACAEIAEAOIASAWQALAOAQAfIABABIAAhBIAAgNIAAgIIAAgCQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAAgBIABABQAFgCAPAAIAAABIAnACIAAgBIABABIABACIAAAAIAAAFIABAJIAAAUIAFAAIAeAAIABABIAUABQgCgHAAgIIABgUIAAgCIAAAAQAAgDAFAAIAAABIAbgBIAbAAIACgBIABABIABAAIABAAIACACIgCACIAABxIgCABIgBABIg6AAIgBAAIgBAAIAAAAIgCgBIAAguIgBgBIgmAAIgCABIgRAAQAEAGAAALIgCAYIgBAEIAAABIABAAIgCACIhwAAIgCgBIAAgBQgEgDgGgHQgIgKgBgEIg8ACIAAABQAAAFgOATIgBAAIgBAAIhjAAIgGgBIgBgDIACAAIABgCQgQgQgJgMQgHgJgMgOIgCAAIAAA2IgDABIgCACIg9AAIgBABQAAAAABAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgDgBIABgDIhQh5IgbAcQghAegPASQgMAOgaAaIgnApQgSAUhLA4gAD7AFQgHAJgBAGIAEgBQAHAAACgDIAQABIgPgSIgGAGgAmwBTIgDAAIgBAAIgTAAIAAABIgBAAIgCAAIABgBIgfACQgMgBgBgBIgVAAIgBAAIgQAAQgBAAgCgHIAAh0IADAAIAAgBIDNAAIABABIgBAAIACADIAAAAIAKASQAGAKAHAFQAAABABAAQAAAAAAABQABAAAAAAQABAAABAAIAEgHIAAAAIgBgBIAKgPIAEgJQACgFADAAIAAAAIAAAAIAAAAIABAAQADgEAHADIAkAAIABAAIAIAAIAPAAIABAAQgEAHgIAHIgLASQgNATgJALIgXAfQgEAFgGALQgGAKgEAEIgXAAIAAABIgLAAIgQAAIAAAAIgHgBIAAgBIgBAAIAAgBIABAAIAAgBIAAAAIAQgdQgBgFgIgLIgKgOIgVgYQgCAAgCAEIgDAGIgHAGQgDABAAAEQAAAFALAIQALAJAAALQAAAMgKAIQgGAFgRAHIgLAAIgBABIgGAAIgCABIAAAAIgEgCgAnQAgQgEACgOABQgBABAAAKQAAAKACACIAMAAIAEgCIASAAIAEgGIACgGQAAgCgHgGQgGgFgGAAIgEABgAnjgIIAAAFQABACAAAJIAFAAIABAAIANAAIALgFQADgDAAgCQAAgEgFgBIgSgDQgDACgIAAg");
	mask_2.setTransform(59.3,49.9);

	// Слой 7
	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(11.7,92.6);
	this.instance_2.alpha = 0.75;
	this.instance_2.shadow = new cjs.Shadow("#FFFF00",0,0,5);

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,117.4,75.5);


(lib.копияСимвол1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.копияСимвол3();
	this.instance.parent = this;
	this.instance.setTransform(0.2,5.2,1.263,1.263,0,0,0,59,41.5);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-74,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.1,-59.6,239,171);


(lib.sprite85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtaCuQgVAAABgQQAAgHAEgJIB6kkQAJgXAYAAIAMAAIACAAIACAAIAMAAIACAAIVnAAIACAAIAJAAIACAAIADAAIACAAIAJAAQAXAAAKAXIB6EkIAEAQQAAAQgTAAg");
	mask.setTransform(-0.1,0.2);

	// Masked Layer 2 - 1
	this.instance = new lib.sprite84();
	this.instance.parent = this;
	this.instance.setTransform(-168.2,-3.6);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({x:136},19).to({_off:true},1).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.sprite43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 11
	this.instance = new lib.sprite42();
	this.instance.parent = this;
	this.instance.setTransform(-41.1,-293.3);

	this.instance_1 = new lib.sprite42();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-41.1,-73.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 9
	this.instance_2 = new lib.sprite39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-42.2,-221.5);

	this.instance_3 = new lib.sprite39();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-42.2,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Layer 7
	this.instance_4 = new lib.sprite36();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-42.2,-147.5);

	this.instance_5 = new lib.sprite36();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-42.2,72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.2,-325.8,66,430.8);


(lib.Символ9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance_1 = new lib.копияСимвол1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.4,-2,0.674,0.674);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.8,-44.2,167,124);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ9_1();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.89,scaleY:0.89},9,cjs.Ease.get(-1)).to({scaleX:0.77,scaleY:0.77},10,cjs.Ease.get(1)).to({scaleX:0.89,scaleY:0.89},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.1,-44.1,168,124);


(lib.Символ5копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4NH0IAAvnMAwbAAAIAAPng");
	mask.setTransform(5,-27);

	// Слой 3
	this.instance = new lib.Символ63();
	this.instance.parent = this;
	this.instance.setTransform(9,0.5,1,1,0,0,0,90.2,20.5);
	this.instance.alpha = 0.352;
	this.instance.compositeOperation = "lighter";

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.instance_1 = new lib.sprite85();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9,-0.5);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 7
	this.instance_2 = new lib.sprite81();
	this.instance_2.parent = this;
	this.instance_2.setTransform(8.5,5);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-20,182,43);


(lib.Символ5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance_3 = new lib.sprite85();
	this.instance_3.parent = this;
	this.instance_3.setTransform(9,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 7
	this.instance_4 = new lib.sprite81();
	this.instance_4.parent = this;
	this.instance_4.setTransform(8.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-24.5,182,49);


(lib.sprite44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 25
	this.instance = new lib.sprite43();
	this.instance.parent = this;
	this.instance.setTransform(39.4,331.1);
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 13
	this.instance_1 = new lib.sprite43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39.4,-110.5);
	this.instance_1.shadow = new cjs.Shadow("#FFFFFF",0,0,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.sprite43();
	this.instance_2.parent = this;
	this.instance_2.setTransform(39.4,-332.1);
	this.instance_2.shadow = new cjs.Shadow("#FFFFFF",0,0,3);

	this.instance_3 = new lib.sprite43();
	this.instance_3.parent = this;
	this.instance_3.setTransform(39.4,-552.1);
	this.instance_3.shadow = new cjs.Shadow("#FFFFFF",0,0,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.8,-882.9,79,1327.2);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.btr = new lib.Символ5_1();
	this.btr.parent = this;
	this.btr.setTransform(102.6,44.5,1,1,0,0,0,20,20);

	this.btr_1 = new lib.Символ5копия2();
	this.btr_1.parent = this;
	this.btr_1.setTransform(102.6,44.5,1,1,0,0,0,20,20);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("Au+ErID5pVIXbAAICqJVg");
	this.shape.setTransform(92,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btr}]}).to({state:[{t:this.btr_1}]},1).to({state:[{t:this.btr}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182,49);


(lib.Символ7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(210,-12.5);

	this.instance_2 = new lib.Символ3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(140,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12,-144.5,272.8,289);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_80 = function() {
		this.parent.p1.gotoAndPlay(1);
		this.parent.win.gotoAndPlay(1);
	}
	this.frame_116 = function() {
		this.parent.p1.gotoAndPlay(1);
		this.parent.win.gotoAndPlay(1);
		this.parent.btt.gotoAndPlay(1);
	}
	this.frame_225 = function() {
		this.parent.p1.gotoAndPlay(7);
		this.parent.win.gotoAndPlay(9);
	}
	this.frame_227 = function() {
		/* _root.btt.gotoAndPlay(8);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(80).call(this.frame_80).wait(36).call(this.frame_116).wait(109).call(this.frame_225).wait(2).call(this.frame_227).wait(8));

	// Слой 14
	this.instance = new lib.sprite44();
	this.instance.parent = this;
	this.instance.setTransform(153.5,294.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({y:92.2},4).to({y:-413.4},10).to({y:-643.9},5).to({y:-655},1).wait(1).to({y:-666.1},0).wait(27).to({y:296.6},1).to({y:111.8},5).to({y:-257.8},10).to({y:-361.9},5).to({y:-368.5},1).to({y:-370.9},1).wait(160));

	// Слой 15
	this.instance_1 = new lib.sprite44();
	this.instance_1.parent = this;
	this.instance_1.setTransform(75.9,297);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:368.4},2).to({y:166.2},4).to({y:-339.4},10).to({y:-569.9},5).to({y:-581},1).wait(1).to({y:-592.1},0).wait(27).to({y:370.6},1).to({y:167.3},5).to({y:-239.3},10).to({y:-356.1},5).to({y:-361.9},1).to({y:-369.4},1).wait(162));

	// Слой 16
	this.instance_2 = new lib.sprite44();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.6,517.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:240.2},4).to({y:-265.4},10).to({y:-495.9},5).to({y:-507},1).wait(1).to({y:-518.1},0).wait(27).to({y:444.6},1).to({y:222.8},5).to({y:-220.8},10).to({y:-361.2},5).to({y:-365.4},1).to({y:-368.4},1).wait(164));

	// Слой 17
	this.instance_3 = new lib.sprite44();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-368.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(230).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.4,-588.5,234.1,1549.7);


(lib.Символ7копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwqIUIAAwnMAhVAAAIAAQng");
	mask.setTransform(106.3,196.8);

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(55.8,536.3,0.939,0.939,0,0,0,19.5,34);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,143.5,213.6,106.6);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ2_1();
	this.instance.parent = this;
	this.instance.setTransform(120,58,1,1,0,0,0,120,58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ7копия();
	this.instance_1.parent = this;
	this.instance_1.setTransform(121.7,541.2,1,1,0,0,0,108.7,678.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#888383","#FFFFFF","#969292"],[0,0.522,1],0.1,-67.5,0,67.7).s().p("AwrISIAAwjMAhXAAAIAAQjg");
	this.shape.setTransform(120.3,59.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-186,247.3,1456.1);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
			this.fon.x = -stage.mouseX / 10;
			this.fon.y = -stage.mouseY / 10;
			this.back.x = -stage.mouseX / -5;
			this.back.y = -stage.mouseY / -5;
		}
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		var _this = this;
		
		this.btr.addEventListener("mouseover", fl_MouseOverHandler_2);
		
		function fl_MouseOverHandler_2() {
			_this.btr.gotoAndPlay(2);
		}
		
		
		this.btr.addEventListener("mouseout", fl_MouseOutHandler);
		
		function fl_MouseOutHandler() {
			_this.btr.gotoAndPlay(5);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.instance = new lib.Символ64();
	this.instance.parent = this;
	this.instance.setTransform(120.2,43.6,0.987,0.987,0,0,0,101.2,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(121.9,824.7,0.999,0.999,0,0,0,121.9,541);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 9
	this.instance_2 = new lib.Символ61();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120,263.5,1,1,0,0,0,91,24.5);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Символ61(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ7_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-45.5,178.9,0.797,0.797);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 2
	this.back = new lib.Символ60();
	this.back.parent = this;
	this.back.setTransform(166,261,1,1,0,0,0,146.5,128);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

	// Слой 1
	this.fon = new lib.Символ1();
	this.fon.parent = this;
	this.fon.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.2,160,1770,1593.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;