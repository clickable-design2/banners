(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Back.jpg?1477927641115", id:"Back"},
		{src:"images/dol.png?1477927641115", id:"dol"},
		{src:"images/hand_l.png?1477927641115", id:"hand_l"},
		{src:"images/hand_r.png?1477927641115", id:"hand_r"},
		{src:"images/reg.png?1477927641115", id:"reg"},
		{src:"images/ten.png?1477927641115", id:"ten"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.Back = function() {
	this.initialize(img.Back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,743,431);


(lib.dol = function() {
	this.initialize(img.dol);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,281,124);


(lib.hand_l = function() {
	this.initialize(img.hand_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,546,280);


(lib.hand_r = function() {
	this.initialize(img.hand_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,280);


(lib.reg = function() {
	this.initialize(img.reg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,45);


(lib.ten = function() {
	this.initialize(img.ten);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,55);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand_l();
	this.instance.parent = this;
	this.instance.setTransform(4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,0,546,280);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ten();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,260,55);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dol();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,281,124);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,743,431);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgtGWIAAg0QgegGgXgPQgXgOgPgYQgQgVgIgfQgHgdAAgmIAAgwIBrAAIAAA4QAAAmAQARQAOAPAcAAQAbAAAPgPQAPgRAAgmQAAgbgJgXQgJgUgRgUQgPgTg6gzQg1gpgXgkQgRgagIgcQgKggAAgkQAAglAHgdQAIgeAPgWQAPgXAWgOQAXgOAdgIIAAg1IBbAAIAAA1QAeAHAXAOQAWAPAQAWQAPAXAIAdQAHAeAAAlIAAAWIhrAAIAAgdQAAgmgOgRQgPgRgbAAQgaAAgOARQgPARAAAmQAAAaAKAXQAIAUARAVQAPASA7AzQA0ApAYAkQAQAaAJAcQAJAgAAAkQAAAlgHAeQgIAegQAWQgPAYgXAOQgXAPgeAGIAAA0g");
	this.shape.setTransform(105.5,44.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhIFkQgggLgWgYQgWgXgLgiQgMghAAgsIAAl1QAAgqAMgjQALgiAWgWQAWgYAggMQAggMAoAAQApAAAgAMQAgAMAWAYQAWAWALAiQAMAjAAAqIAAF1QAAAsgMAhQgLAigWAXQgWAYggALQggAMgpAAQgoAAgggMgAgpj3QgQARAAAlIAAGDQAAAlAQASQAOARAbAAQAcAAAPgRQAPgSAAglIAAmDQAAglgPgRQgPgRgcAAQgbAAgOARg");
	this.shape_1.setTransform(64.8,44.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgLFoIAAokIhYAAIAAhQQAgAAAWgHQAVgHAOgNQARgSARguIBMAAIAALPg");
	this.shape_2.setTransform(24.9,44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129.9,110.3);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGBYQgGgDgGgGQgFgGgDgIQgDgIAAgLIAAgiIgVAAIAABNIgcAAIAAixIAcAAIAABNIAVAAIAAgiQAAgLADgIQADgIAFgGQAGgGAGgDQAIgDAKAAQAKAAAIADQAIADAGAGQAFAGADAIQADAIAAALIAABbQAAALgDAIQgDAIgFAGQgGAGgIADQgIADgKAAQgKAAgIgDgAANg8QgEAEAAAJIAABfQAAAJAEAEQAEAEAHAAQAHAAAEgEQAEgEAAgJIAAhfQAAgJgEgEQgEgEgHAAQgHAAgEAEg");
	this.shape.setTransform(133.5,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATBZIAAh8IgMAqIgVBSIgdAAIAAixIAZAAIAABvIAKglIAVhKIAfAAIAACxg");
	this.shape_1.setTransform(120.4,11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWBlIAAgYIhHAAIAAixIAcAAIAACXIAeAAIAAiXIAdAAIAACYIAMAAIAAAxg");
	this.shape_2.setTransform(109.4,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUBZIgFghIggAAIgFAhIgaAAIAdixIAnAAIAcCxgAAMAgIgMhYIgNBYIAZAAg");
	this.shape_3.setTransform(98.2,11.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoBZIAAixIAoAAQAKAAAIADQAHADAGAGQAFAFADAIQACAJAAAKIAAAYQAAAKgCAIQgDAHgFAFQgGAGgHADQgIADgKAAIgMAAIAABDgAgMgCIAMAAQAGAAAEgEQADgEAAgJIAAgaQAAgKgDgEQgEgDgGAAIgMAAg");
	this.shape_4.setTransform(88.5,11.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMBZIAAiXIgeAAIAAgaIBVAAIAAAaIgdAAIAACXg");
	this.shape_5.setTransform(78.9,11.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRBYQgHgDgGgGQgFgGgDgIQgCgIAAgLIAAhbQAAgLACgIQADgIAFgGQAGgGAHgDQAIgDAJAAQAKAAAIADQAHADAGAGQAFAGADAIQACAIAAALIAAARIgaAAIAAgTQAAgJgEgEQgEgEgHAAQgFAAgDAEQgEAEAAAJIAABfQAAAJAEAEQADAEAFAAQAHAAAEgEQAEgEAAgJIAAgaIAaAAIAAAYQAAALgCAIQgDAIgFAGQgGAGgHADQgIADgKAAQgJAAgIgDg");
	this.shape_6.setTransform(69.4,11.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATBZIAAh8IgMAqIgVBSIgdAAIAAixIAZAAIAABvIAKglIAVhKIAfAAIAACxg");
	this.shape_7.setTransform(59.1,11.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjBZIAAixIBHAAIAAAaIgsAAIAACXg");
	this.shape_8.setTransform(49.1,11.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AglBZIAAixIBLAAIAAAaIgvAAIAAAyIAlAAIAAAXIglAAIAAA0IAvAAIAAAag");
	this.shape_9.setTransform(39.7,11.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoBZIAAixIAoAAQAKAAAIADQAHADAGAGQAFAFADAIQACAJAAAKIAAAYQAAAKgCAIQgDAHgFAFQgGAGgHADQgIADgKAAIgMAAIAABDgAgMgCIAMAAQAGAAAEgEQADgEAAgJIAAgaQAAgKgDgEQgEgDgGAAIgMAAg");
	this.shape_10.setTransform(30.5,11.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAUBZIgEghIghAAIgFAhIgZAAIAcixIAnAAIAcCxgAALAgIgLhYIgOBYIAZAAg");
	this.shape_11.setTransform(16.2,11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRBYQgHgDgFgGQgGgGgCgIQgDgIgBgLIAAgUIAbAAIAAAWQAAAJAEAEQAEAEAGAAQAGAAADgEQAFgFAAgLIAAgOQAAgMgFgFQgFgGgHAAIgHAAIAAgXIAJAAQAGAAAEgEQAFgFAAgKIAAgKQAAgLgFgFQgDgEgGAAQgGAAgEAEQgEAEAAAJIAAAPIgaAAIAAgNQAAgLADgIQACgJAGgFQAFgGAHgDQAIgDAJAAQAKAAAHADQAIADAGAGQAFAGACAIQAEAIAAALIAAAFQAAAOgGAJQgEAJgKAEQAFADAEABQAEAEACAFQAEAJABAOIAAAOQAAALgEAIQgCAIgFAGQgGAGgIADQgHADgKAAQgJAAgIgDg");
	this.shape_12.setTransform(6,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142.1,27.3);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.reg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213,45);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABODYIAAk1IgvE1Ig+AAIgzkwIAAEwIg8AAIAAmvIBfAAIAwExIAvkxIBfAAIAAGvg");
	this.shape.setTransform(124,26.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAuDYIAAkvIgcBpIg3DGIhGAAIAAmvIA9AAIAAEQIAZhdIA2izIBKAAIAAGvg");
	this.shape_1.setTransform(94.2,26.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhjDYIAAmvIBjAAQAYAAATAHQATAGANAOQAMAOAHAUQAGAUAAAaIAAA4QAAAagGAUQgHASgMAOQgNANgTAHQgTAHgYAAIggAAIAACjgAgggGIAgAAQAPAAAJgKQAIgJAAgXIAAhBQAAgWgIgKQgJgIgPAAIggAAg");
	this.shape_2.setTransform(70.1,26.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAyDYIgMhOIhSAAIgLBOIg/AAIBFmvIBiAAIBGGvgAAdBPIgfjaIghDaIBAAAg");
	this.shape_3.setTransform(45,26.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABHD2IAAg7IiPAAIAAA7IhCAAIAAh4IAaAAQAJgLAEgNQAEgMAAgUIAPk7IC9AAIAAFzIAeAAIAAB4gAgcBEQgBAYgFAOQgEAMgJAIIBYAAIAAk1Ig5AAg");
	this.shape_4.setTransform(17.1,29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143.1,66.3);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand_r();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186,280);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(233,350,1,1,0,0,0,233,350);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186,280);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(233,350,1,1,0,0,0,233,350);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:357.5},14,cjs.Ease.get(-1)).to({y:365.5},15,cjs.Ease.get(1)).to({y:357.8},15,cjs.Ease.get(-1)).to({y:350},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186,280);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(260,55,1,1,0,0,0,260,55);
	this.instance.alpha = 0.488;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(260,55,1,1,0,0,0,260,55);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,260,55);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(386.9,77.1,1,1,0,0,0,260,55);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(126.9,22.1,260,55);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 36
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(1031.1,-38.8,0.776,0.776,0,0,0,260.1,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({y:-190.4},14,cjs.Ease.get(1)).wait(38).to({scaleX:0.75,scaleY:0.75},7,cjs.Ease.get(-1)).to({scaleX:0.73,scaleY:0.73},6,cjs.Ease.get(1)).to({regX:260,scaleX:0.75,scaleY:0.75},5,cjs.Ease.get(-1)).to({regX:260.1,scaleX:0.78,scaleY:0.78},6,cjs.Ease.get(1)).to({scaleX:0.75,scaleY:0.75},7,cjs.Ease.get(-1)).to({scaleX:0.73,scaleY:0.73},6,cjs.Ease.get(1)).to({regX:260,scaleX:0.75,scaleY:0.75,y:-190.3},5,cjs.Ease.get(-1)).to({regX:260.1,scaleX:0.78,scaleY:0.78,y:-190.4},6,cjs.Ease.get(1)).to({scaleX:0.75,scaleY:0.75},7,cjs.Ease.get(-1)).to({scaleX:0.73,scaleY:0.73,y:-190.3},6,cjs.Ease.get(1)).to({regX:260,scaleX:0.75,scaleY:0.75},5,cjs.Ease.get(-1)).to({regX:260.1,scaleX:0.78,scaleY:0.78,y:-190.4},6,cjs.Ease.get(1)).to({scaleX:0.75,scaleY:0.75},7,cjs.Ease.get(-1)).to({scaleX:0.73,scaleY:0.73,y:-190.3},6,cjs.Ease.get(1)).to({regX:260,scaleX:0.75,scaleY:0.75},5,cjs.Ease.get(-1)).to({regX:260.1,scaleX:0.78,scaleY:0.78,y:-190.4},6,cjs.Ease.get(1)).to({scaleX:0.75,scaleY:0.75},7,cjs.Ease.get(-1)).to({scaleX:0.73,scaleY:0.73,y:-190.3},5,cjs.Ease.get(1)).wait(16));

	// Символ 37
	this.instance_1 = new lib.Символ37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(971.2,-529.6,0.854,0.854,7.2,0,0,281.1,124);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:281.2,regY:123.9,rotation:-7.6,x:1199.6,y:-364.6},12,cjs.Ease.get(-1)).to({regY:124,rotation:-12.7,x:1275.7,y:-318.4},11,cjs.Ease.get(1)).to({rotation:-3.3,x:1150,y:-264.8},13,cjs.Ease.get(-1)).to({regX:281.1,regY:123.8,rotation:7,x:1008.6,y:-234.5},13,cjs.Ease.get(1)).to({regX:281.2,regY:124,rotation:3.3,x:1080.1,y:-221},13,cjs.Ease.get(-1)).to({regX:281.1,rotation:0,x:1143.5,y:-209.1},14,cjs.Ease.get(1)).wait(124));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(733,-664.8,396.5,643.2);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(371.5,215.5,1,1,0,0,0,371.5,215.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:381.8},38,cjs.Ease.get(-1)).to({x:391.5},36,cjs.Ease.get(1)).to({x:380.9},40,cjs.Ease.get(-1)).to({x:371.5},35,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,743,431);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(213,45,1,1,0,0,0,213,45);
	this.instance.alpha = 0.469;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(213,45,1,1,0,0,0,213,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213,45);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(213,45,1,1,0,0,0,213,45);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213,45);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(46.7,-150.6,1,1,0,0,0,71.5,33.1);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AAAALIgMAWIgLgIIANgWIgVgEIAFgOIAVAIIAAgaIAMAAIAAAbIAUgJIAFAOIgWAGIANAVIgLAIg");
	this.shape.setTransform(-115.1,180.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.3,-185.7,241.5,369.6);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(46.7,-150.6,1,1,0,0,0,71.5,33.1);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AAAALIgMAWIgLgIIANgVIgVgFIAFgOIAVAIIAAgaIAMAAIAAAbIAUgJIAFAOIgWAGIANAVIgLAIg");
	this.shape.setTransform(-115.1,180.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.3,-185.7,241.5,369.6);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(1586.5,290.4,1,1,0,0,0,65,55.1);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:1500.4},3,cjs.Ease.get(-1)).to({x:1385.5},4,cjs.Ease.get(1)).wait(142));

	// Слой 2
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1256.3,502.9,1,1,0,0,0,71,13.7);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({y:421},3,cjs.Ease.get(-1)).to({y:311.9},4,cjs.Ease.get(1)).wait(140));

	// Слой 8
	this.instance_2 = new lib.Анимация1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1161.3,276);
	this.instance_2.alpha = 0.039;

	this.instance_3 = new lib.Анимация2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1210.6,421.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},142).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:1182.4,y:338.5,alpha:0.449},3,cjs.Ease.get(-1)).to({_off:true,x:1210.6,y:421.7,alpha:1},4,cjs.Ease.get(1)).wait(143));

	// Символ 6
	this.instance_4 = new lib.Символ6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1417.5,417.2,1,1,0,0,0,213,45);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({y:386.2,alpha:1},9,cjs.Ease.get(1)).wait(123));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1043,90.3,242.5,369.6);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(866,448.5,1,1,0,0,0,233,350);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({rotation:7.8,x:801,y:449.3},13,cjs.Ease.get(-1)).to({regY:350.1,scaleX:1,scaleY:1,rotation:12.6,x:760.3,y:449.9},5).to({regY:349.9,scaleX:1,scaleY:1,rotation:14.7,x:744.1,y:450},2,cjs.Ease.get(1)).to({rotation:-4.5,x:522.3,y:426.5},5,cjs.Ease.get(1)).to({rotation:-2.3,x:694.2,y:437.4},13,cjs.Ease.get(-1)).to({regY:350,rotation:0,x:866,y:448.5},13,cjs.Ease.get(1)).wait(69).to({rotation:7.8,x:801,y:449.3},13,cjs.Ease.get(-1)).to({regY:350.1,scaleX:1,scaleY:1,rotation:12.6,x:760.3,y:449.9},5).to({regY:349.9,scaleX:1,scaleY:1,rotation:14.7,x:744.1,y:450},2,cjs.Ease.get(1)).to({rotation:-4.5,x:522.3,y:426.5},5,cjs.Ease.get(1)).to({rotation:-2.3,x:694.2,y:437.4},13,cjs.Ease.get(-1)).to({regY:350,rotation:0,x:866,y:448.5},13,cjs.Ease.get(1)).wait(1));

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4xMDIgBACQAMihgQi/QABhZAMglQAMglgBgFQgBgEAGgQQAHgQAlhqQAOgwAIg3QAGgcAGgWQAGgVADgdIACg4QABgdgLgSQgLgSgMgJQgLgJgWgHIgsABIAArsMAxlgADIAAe4MgxpAABg");
	mask.setTransform(524.2,135.8);

	// 3
	this.instance_1 = new lib.Символ24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-204.3,521.9,1,1,0,0,0,303,139);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90).to({_off:false},0).wait(109).to({x:-676.7},5,cjs.Ease.get(-1)).wait(27));

	// 1
	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-569.7,-44.6,1,1,0,0,0,213,121);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({x:-1448.1},10,cjs.Ease.get(-1)).to({_off:true},1).wait(141));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(365.1,36.9,454,341.6);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg8bAdXQhRAAAAhVMAAAg4DQAAhVBRAAMB43AAAQBRAAAABVMAAAA4DQAABVhRAAg");
	mask.setTransform(330.4,143.6);

	// 3
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(20,258.8,0.996,0.996,0,0,0,219.5,242.2);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hand_l.png
	this.instance_1 = new lib.Символ45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(757.9,384,1.041,1.041,0,0,0,683.1,350.3);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 7
	this.instance_2 = new lib.Символ15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(315.5,146.5,1,1,0,0,0,371.5,215.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(264,83.5,743,431);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;