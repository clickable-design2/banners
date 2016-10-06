(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg.jpg?1475756636506", id:"bg"},
		{src:"images/body.png?1475756636506", id:"body"},
		{src:"images/hand.png?1475756636506", id:"hand"},
		{src:"images/rali.jpg?1475756636506", id:"rali"},
		{src:"images/sloRa.jpg?1475756636506", id:"sloRa"}
	]
};



// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,305);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,228);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,177);


(lib.rali = function() {
	this.initialize(img.rali);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,385);


(lib.sloRa = function() {
	this.initialize(img.sloRa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,753);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.49,1],-41.5,-20.1,41.5,20.2).s().p("Ak+YjIoxkPQiGhCA8iRMAQ0goTQA9iSCGBCIIyEQQCGBBg8CRMgQ1AoUQgpBjhNAAQgjAAgqgUg");
	this.shape.setTransform(97.3,159.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,194.7,318.4);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Egx/AX0MAAAgvnMBj/AAAMAAAAvng");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,51,0.2)").s().p("A/uFfQhXABAAhaIAAoLQAAhaBXABMA/dAAAQBXgBAABaIAAILQAABahXgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.8,-35.2,423.7,70.4);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#713F11").s().p("AAZAGQgHgIgMgEQgJgEgOAKQgOAKAAgHQAAgFAKgFQAKgEALAAQAOAAAJAHQAJAGAAAHQAAABAAABQAAAAgBABQAAAAAAAAQAAAAgBAAQgBAAgEgGg");
	this.shape.setTransform(4.5,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#713F11").s().p("AAYAJQgHgIgMgBQgKgCgNAFQgNAHAAgHQAAgFAKgFQAKgFALAAQAOAAAJAIQAJAGAAAIQAAAAAAABQgBABAAAAQAAABAAAAQgBAAAAAAQgCAAgEgEg");
	this.shape_1.setTransform(4.5,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#713F11").s().p("AAYAMQgIgGgNgBQgKgCgMADQgMADAAgHQAAgFAKgFQAKgFALAAQAOAAAJAIQAJAGAAAIQgBAFgDAAIgEgCg");
	this.shape_2.setTransform(4.5,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#713F11").s().p("AAXAOQgIgDgNgBIgWgCQgLAAAAgHQAAgFAKgFQAKgFALAAQAOAAAJAIQAJAGAAAIQgBAHgEAAIgEgBg");
	this.shape_3.setTransform(4.5,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#713F11").s().p("AAAAQQgLAAgKgFQgKgFAAgGQAAgGAKgFQAKgEALAAQAOAAAJAIQAJAHAAAHQgBAIgJABIgSAAIgEAAg");
	this.shape_4.setTransform(4.5,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#713F11").s().p("AAXAPQgIgDgOAAIgVgDQgLgBAAgHQAAgFAKgFQAKgFALAAQAOAAAJAIQAJAGAAAIQgBAHgFAAIgDAAg");
	this.shape_5.setTransform(4.5,2.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#713F11").s().p("AAYANQgJgEgMgCQgLgBgLABQgMACAAgHQAAgFAKgFQAKgFALAAQAOAAAJAIQAJAGAAAIQgBAFgDAAIgEgBg");
	this.shape_6.setTransform(4.5,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#713F11").s().p("AAYALQgIgHgMgCQgKgCgNAEQgMAFAAgHQAAgFAKgFQAKgEALAAQAOAAAJAIQAJAFAAAIQAAABgBABQAAABAAAAQAAABgBAAQAAAAgBAAQgCAAgDgCg");
	this.shape_7.setTransform(4.5,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#713F11").s().p("AAYAIQgHgIgMgBQgKgDgNAGQgNAIAAgHQAAgFAKgFQAKgFALAAQAOAAAJAIQAJAGAAAHQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgCAAgEgFg");
	this.shape_8.setTransform(4.5,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,1.1,6.5,2.6);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27,177);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkVF2IgDgoQAAhhAdhZQAPgtATgiQhCgzh/hvQAAglAngRQASgHBLACQBLACAugMQAugNARhTQAShUAjgiQAjgiAPARQATATAAAqIgCAMQAPAUARAeQAUBJAzAaQAyAaA2gEQA2gFBCADQBBADgHAkQgIAkgjAQQgjAPgUAYQgRAVgkAVQgTANgOALQgHAIgJAGQgSARAAAMIgSAIQA5CAASA2QASA2gDALQgLAvguAAQgQAAhVg8QhJg1gfgbIgDgEIiABPIhxBGQgHAFgGAAQgPAAgIgagAgti1IADAAIgBgCIgCACg");
	this.shape.setTransform(41.2,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82.4,80.1);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sloRa();
	this.instance.setTransform(0,-1324.8,0.697,0.697);

	this.instance_1 = new lib.sloRa();
	this.instance_1.setTransform(0,-882.9,0.697,0.697);

	this.instance_2 = new lib.sloRa();
	this.instance_2.setTransform(0,-440.9,0.697,0.697);

	this.instance_3 = new lib.sloRa();
	this.instance_3.setTransform(0,0,0.697,0.697);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1324.8,89.3,1849.8);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rali();
	this.instance.setTransform(0,370.5,0.973,0.973);

	this.instance_1 = new lib.rali();
	this.instance_1.setTransform(96.3,-234.5,0.973,0.973);

	this.instance_2 = new lib.rali();
	this.instance_2.setTransform(290.5,-234.5,0.973,0.973);

	this.instance_3 = new lib.rali();
	this.instance_3.setTransform(192.2,370,0.973,0.973);

	this.instance_4 = new lib.rali();
	this.instance_4.setTransform(290.5,137,0.973,0.973);

	this.instance_5 = new lib.rali();
	this.instance_5.setTransform(192.2,-2,0.973,0.973);

	this.instance_6 = new lib.rali();
	this.instance_6.setTransform(96.3,140,0.973,0.973);

	this.instance_7 = new lib.rali();
	this.instance_7.setTransform(0,0,0.973,0.973);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-234.5,303.2,979.5);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.setTransform(-49,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-152.5,98,305);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(97.3,159.3,1,1,0,0,0,97.3,159.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.02,skewX:18.6,skewY:28.7,x:641.6,y:-16.1},29).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,194.7,318.4);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aa9B5QgLgEgIgIQgHgIgEgLQgEgMABgPIAAh9QgBgPAEgLQAEgMAHgHQAIgIALgEQALgFANAAQAPAAALAFQALAEAHAIQAHAHAEAMQAFALAAAPIAAB9QAAAPgFAMQgEALgHAIQgHAIgLAEQgLAEgPAAQgNAAgLgEgAbHhTQgFAGAAANIAACCQAAANAFAFQAFAGAJAAQALAAAFgGQAEgFAAgNIAAiCQAAgNgEgGQgFgGgLAAQgJAAgFAGgAR2B5QgLgEgHgIQgHgIgEgLQgDgMgBgPIAAh9QABgPADgLQAEgMAHgHQAHgIALgEQAKgFAOAAQAPAAAKAFQAMAEAGAIQAIAHADAMQAEALAAAPIAAAYIgkAAIAAgaQAAgNgGgGQgFgGgJAAQgKAAgFAGQgFAGAAANIAACCQAAANAFAFQAFAGAKAAQAJAAAFgGQAGgFAAgNIAAgjIAkAAIAAAgQAAAPgEAMQgDALgIAIQgGAIgMAEQgKAEgPAAQgOAAgKgEgAh4B5QgLgEgHgIQgIgIgDgLQgEgMABgPIAAh9QgBgPAEgLQADgMAIgHQAHgIALgEQALgFAOAAQAOAAALAFQALAEAHAIQAHAHADAMQAEALAAAPIAAAYIglAAIAAgaQAAgNgEgGQgGgGgKAAQgJAAgFAGQgFAGAAANIAACCQAAANAFAFQAFAGAJAAQAKAAAGgGQAEgFAAgNIAAgjIAlAAIAAAgQAAAPgEAMQgDALgHAIQgHAIgLAEQgLAEgOAAQgOAAgLgEgApJB5QgLgEgHgIQgIgIgEgLQgDgMAAgPIAAh9QAAgPADgLQAEgMAIgHQAHgIALgEQAKgFAOAAQAPAAALAFQALAEAHAIQAHAHAEAMQAFALAAAPIAAB9QAAAPgFAMQgEALgHAIQgHAIgLAEQgLAEgPAAQgOAAgKgEgAo/hTQgFAGAAANIAACCQAAANAFAFQAFAGAJAAQALAAAFgGQAEgFABgNIAAiCQgBgNgEgGQgFgGgLAAQgJAAgFAGgArUB5QgLgEgHgIQgHgIgDgLQgEgMAAgPIAAgUIAlAAIAAAXQAAANAEAFQAGAGAJAAQAKAAAFgGQAFgGAAgQIAAgTQAAgRgGgHQgGgHgNAAIgNAAIAAghIAPAAQALAAAGgGQAGgGAAgOIAAgNQAAgQgFgHQgFgGgKAAQgJAAgGAGQgEAGAAAN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");
	this.shape.setTransform(212.2,34.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1 - копия
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF0000","#993300"],[0,1],0.2,-33,-0.1,33.1).s().p("A/uC1QhXAAAAhZIAAkQMBCLAAAIAAEQQAABZhXAAg");
	this.shape_1.setTransform(211.8,52.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF0000","#FF6666"],[0,1],-0.3,-39.5,0.4,39.6).s().p("EghFACqIAAj6QAAhZBXAAMA/dAAAQBXAAAABZIAAD6g");
	this.shape_2.setTransform(211.8,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Слой 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("A/uC1QhXAAAAhZIAAkQMBCLAAAIAAEQQAABZhXAAg");
	this.shape_3.setTransform(211.8,55.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,423.7,73.4);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ19();
	this.instance.setTransform(211.8,35.2,1,1,0,0,0,211.8,35.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255.6,-173,679.3,377.3);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ15();
	this.instance.setTransform(73.6,31.6,1,1,0,0,180,5,2.5);

	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(58.6,32.2,1,1,0,0,0,5,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.body();
	this.instance_2.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,114,228);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(13.5,88.6,1,1,0,0,0,13.5,88.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.8,y:89.3},18,cjs.Ease.get(-1)).to({rotation:-8,y:90.1},20,cjs.Ease.get(1)).to({rotation:-3.8,x:13.6,y:89.3},17,cjs.Ease.get(-1)).to({rotation:0,x:13.5,y:88.6},16,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27,177);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(56.5,114,1,1,0,0,0,56.5,114);

	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(13.5,110.1,1,1,0,0,0,13.5,88.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,114,228);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(429.1,39.5,1,1,0,0,0,41.5,40);

	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(331.6,40,1,1,0,0,0,41.5,40);

	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(235.1,40,1,1,0,0,0,41.5,40);

	this.instance_3 = new lib.Символ7();
	this.instance_3.setTransform(137.1,40,1,1,0,0,0,41.5,40);

	this.instance_4 = new lib.Символ7();
	this.instance_4.setTransform(41.5,40.7,1,1,0,0,0,41.5,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.5,470,81.2);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(211.8,35.2,1,1,0,0,0,211.8,35.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255.6,-173,679.3,377.3);


(lib.Символ21копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ16();
	this.instance.setTransform(211.8,35.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},9,cjs.Ease.get(1)).wait(6));

	// Слой 1
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(211.8,35.2,1,1,0,0,0,211.8,35.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.03,scaleY:1.03},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:35.4},9,cjs.Ease.get(1)).to({y:35.2},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255.6,-173,679.3,377.3);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(211.8,35.2,1,1,0,0,0,211.8,35.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255.6,-173,679.3,377.3);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(211.8,35.2,1,1,0,0,0,211.8,35.2);

	this.instance_1 = new lib.Символ21копия();
	this.instance_1.setTransform(211.8,35.2,1,1,0,0,0,211.8,35.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255.6,-173,679.3,377.3);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(56.5,114,1,1,0,0,0,56.5,114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,114,228);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(56.5,114,1,1,0,0,0,56.5,114);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:115.6},10,cjs.Ease.get(-1)).to({y:117},9,cjs.Ease.get(1)).to({y:115.4},11,cjs.Ease.get(-1)).to({y:114},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,114,228);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(41.5,41.4,1,1,0,0,0,41.5,40.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470,81.2);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(239,227.4,1,1,0,0,0,235,40.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(116).to({_off:false},0).wait(23).to({_off:true},1).wait(45));

	// Символ 5
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(43.6,262.4,1,1,0,0,0,44.6,262.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:254.4},4,cjs.Ease.get(-1)).to({x:44.1,y:514.9},7,cjs.Ease.get(-1)).to({x:44.6,y:812.6},8,cjs.Ease.get(1)).to({y:792.6},5,cjs.Ease.get(1)).wait(10).to({y:776.6},5,cjs.Ease.get(-1)).to({y:917.6},10,cjs.Ease.get(-1)).to({y:1058.6},10,cjs.Ease.get(1)).to({y:1038.6},5,cjs.Ease.get(1)).wait(11).to({y:156.4},0).to({y:144.4},4,cjs.Ease.get(-1)).to({y:435.9},10,cjs.Ease.get(-1)).to({y:727.4},10).to({y:717.4},5,cjs.Ease.get(1)).wait(35).to({y:707.4},5,cjs.Ease.get(-1)).to({y:921.5},9,cjs.Ease.get(-1)).to({y:1159.5},10,cjs.Ease.get(1)).to({x:43.6,y:1145.5},5,cjs.Ease.get(1)).wait(1).to({y:262.4},0).wait(16));

	// Символ 5
	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(139.8,434.5,1,1,0,0,0,44.6,262.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({y:426.5},4,cjs.Ease.get(-1)).to({x:140.2,y:686.9},7,cjs.Ease.get(-1)).to({x:140.8,y:984.6},8,cjs.Ease.get(1)).to({y:964.6},5,cjs.Ease.get(1)).wait(10).to({y:948.6},5,cjs.Ease.get(-1)).to({y:1089.6},10,cjs.Ease.get(-1)).to({y:1230.6},10,cjs.Ease.get(1)).to({y:1210.6},5,cjs.Ease.get(1)).wait(11).to({y:328.4},0).to({y:316.4},4,cjs.Ease.get(-1)).to({y:520.9},10,cjs.Ease.get(-1)).to({y:725.4},10).to({y:715.4},5,cjs.Ease.get(1)).wait(35).to({y:705.4},5,cjs.Ease.get(-1)).to({x:141.3,y:1001},9,cjs.Ease.get(-1)).to({x:141.9,y:1329.5},10,cjs.Ease.get(1)).to({x:139.9,y:1318.5},5,cjs.Ease.get(1)).wait(1).to({x:139.8,y:434.5},0).wait(13));

	// Символ 5
	this.instance_3 = new lib.Символ5();
	this.instance_3.setTransform(237,349.5,1,1,0,0,0,44.6,262.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({y:341.5},4,cjs.Ease.get(-1)).to({x:237.5,y:601.9},7,cjs.Ease.get(-1)).to({x:238,y:899.6},8,cjs.Ease.get(1)).to({y:879.6},5,cjs.Ease.get(1)).wait(10).to({y:863.6},5,cjs.Ease.get(-1)).to({y:1004.6},10,cjs.Ease.get(-1)).to({y:1145.6},10,cjs.Ease.get(1)).to({y:1125.6},5,cjs.Ease.get(1)).wait(11).to({y:243.4},0).to({y:231.4},4,cjs.Ease.get(-1)).to({y:453.7},9,cjs.Ease.get(-1)).to({y:725.4},11).to({y:715.4},5,cjs.Ease.get(1)).wait(35).to({y:705.4},5,cjs.Ease.get(-1)).to({x:238.3,y:960.3},9,cjs.Ease.get(-1)).to({x:238.5,y:1243.5},10,cjs.Ease.get(1)).to({x:237.5,y:1232.5},5,cjs.Ease.get(1)).wait(1).to({x:237,y:349.5},0).wait(10));

	// Символ 5
	this.instance_4 = new lib.Символ5();
	this.instance_4.setTransform(333.8,518.5,1,1,0,0,0,44.6,262.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({y:510.5},4,cjs.Ease.get(-1)).to({x:334.2,y:770.9},7,cjs.Ease.get(-1)).to({x:334.8,y:1068.6},8,cjs.Ease.get(1)).to({y:1048.6},5,cjs.Ease.get(1)).wait(10).to({y:1032.6},5,cjs.Ease.get(-1)).to({y:1173.6},10,cjs.Ease.get(-1)).to({y:1314.6},10,cjs.Ease.get(1)).to({y:1294.6},5,cjs.Ease.get(1)).wait(11).to({y:412.4},0).to({y:400.4},4,cjs.Ease.get(-1)).to({y:784},10,cjs.Ease.get(-1)).to({y:1167.5},10).to({y:1157.5},5,cjs.Ease.get(1)).wait(35).to({y:1147.5},5,cjs.Ease.get(-1)).to({x:334.3,y:1270.7},9,cjs.Ease.get(-1)).to({x:333.8,y:1407.5},10,cjs.Ease.get(1)).to({y:1402.5},5,cjs.Ease.get(1)).wait(1).to({y:518.5},0).wait(7));

	// Символ 5
	this.instance_5 = new lib.Символ5();
	this.instance_5.setTransform(431,429.5,1,1,0,0,0,44.6,262.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({y:421.5},4,cjs.Ease.get(-1)).to({x:431.5,y:681.9},7,cjs.Ease.get(-1)).to({x:432,y:979.6},8,cjs.Ease.get(1)).to({y:959.6},5,cjs.Ease.get(1)).wait(10).to({y:943.6},5,cjs.Ease.get(-1)).to({y:1084.6},10,cjs.Ease.get(-1)).to({y:1225.6},10,cjs.Ease.get(1)).to({y:1205.6},5,cjs.Ease.get(1)).wait(11).to({y:323.4},0).to({y:311.4},4,cjs.Ease.get(-1)).to({y:497.2},9,cjs.Ease.get(-1)).to({y:724.4},11).to({y:714.4},5,cjs.Ease.get(1)).wait(36).to({y:704.4},5,cjs.Ease.get(-1)).to({y:996.2},9,cjs.Ease.get(-1)).to({y:1320.5},10,cjs.Ease.get(1)).to({x:431,y:1313.5},5,cjs.Ease.get(1)).wait(1).to({y:429.5},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1324.8,476.7,2105.9);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EggpAjGQkyAAAAj7MAAAg85QAjgzAshIQA1hWAvhXIAUgmQAwgJA7AAMBA4AAAQByAABIAjIB3EvQA4CQg3h8MAAAA8qQAAD7kyAAg");
	mask.setTransform(238.7,300);

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(238,220.9,1,1,0,0,0,151.6,187.2);

	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(237.8,262.4,1,1,0,0,0,237.8,262.4);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,75.4,476.7,449.3);


// stage content:



(lib.fruitofra_640_305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		this.button2.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		
		this.button1.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.button1 = new lib.Символ20();
	this.button1.setTransform(320,253,1,1,0,0,0,211.8,35.2);
	new cjs.ButtonHelper(this.button1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button1).wait(1));

	// Слой 5
	this.button2 = new lib.Символ17();
	this.button2.setTransform(320,152.5);
	new cjs.ButtonHelper(this.button2, 0, 1, 2, false, new lib.Символ17(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button2).wait(1));

	// Слой 3
	this.instance = new lib.Символ9();
	this.instance.setTransform(603.5,191,1.002,1,0,0,0,56.5,114);

	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(45.6,191,1.002,1,0,0,180,56.5,114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(320.5,181.1,1,1,0,0,0,237.8,262.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ2();
	this.instance_3.setTransform(591,153,1,1,0,0,180);

	this.instance_4 = new lib.Символ2();
	this.instance_4.setTransform(49,153);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(172.6,-1253.7,807.5,2105.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;