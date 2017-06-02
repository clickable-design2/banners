(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1496410929803", id:"back"},
		{src:"images/blue.png?1496410929803", id:"blue"},
		{src:"images/cup.png?1496410929803", id:"cup"},
		{src:"images/girl.png?1496410929803", id:"girl"},
		{src:"images/logo.png?1496410929803", id:"logo"},
		{src:"images/money.png?1496410929803", id:"money"},
		{src:"images/red.png?1496410929803", id:"red"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,430);


(lib.blue = function() {
	this.initialize(img.blue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,422,94);


(lib.cup = function() {
	this.initialize(img.cup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,245,367);


(lib.girl = function() {
	this.initialize(img.girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,301,358);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,61);


(lib.money = function() {
	this.initialize(img.money);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,16);


(lib.red = function() {
	this.initialize(img.red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,422,94);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.money();
	this.instance.setTransform(-2,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,8,41,16);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cup();
	this.instance.setTransform(0,21.5,0.722,0.722,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207.9,284.7);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeBLQgGAAgFgCIgIgDIgDgCIAJgUIACABIAEACIAGABQAFAAAFgDQAFgDADgHIAEgKIgthnIAeAAIAXA9IABAHIAAAFIABABIABAAIABgGIACgGIAVg+IAdAAIgwB5QgGAPgIAGQgKAHgLAAIgCAAg");
	this.shape.setTransform(210.5,32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASA1IgagsIgOAAIAAAsIgaAAIAAhpIAaAAIAAApIANAAIAYgpIAeAAIgiAzIAAABIAmA1g");
	this.shape_1.setTransform(199.8,29.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsA1IAAhpIAwAAQAQAAAKAHQAKAHAAANQAAAIgEAHQgDAFgHAEIAAABQAJAAAFAHQAFAGAAAJQAAAKgGAIQgFAGgJAEQgJADgLAAgAgRAjIARAAQAJAAAFgDQAEgFAAgGQAAgGgFgFQgEgDgJAAIgRAAgAgRgIIARAAQAGAAADgEQAEgEAAgGQAAgGgEgDQgDgDgGgBIgRAAg");
	this.shape_2.setTransform(188,29.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcA0QgIgEgFgHQgEgIgBgJQABgMAGgIQAGgFAKgFQAKgEAKgBQAJgCAJABIAFAAIAAgCQAAgKgHgEQgFgFgIAAQgHAAgHAEQgIADgHAEIgKgUQAFgDAHgDIAOgFQAJgCAGABQAVgBAMALQALAMABAUIAABBIgaAAIAAgJIABgGIAAgCQgGAJgIAFQgIAGgKgBQgKAAgIgDgAAEAFQgEAAgGACQgFACgEADQgEAEAAAFQAAAFAEAFQAEAEAIAAQAGAAAFgEQAGgFADgGQADgHAAgGIAAgDIgFAAIgLABg");
	this.shape_3.setTransform(176.1,29.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMA1IAAhSIgjAAIAAgXIBfAAIAAAXIgjAAIAABSg");
	this.shape_4.setTransform(165.6,29.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXAwQgMgIgHgMQgIgNAAgPQAAgOAIgMQAHgNAMgIQANgHARAAQAKAAALADQAMAEAHAJIgLASQgFgGgIgCQgHgEgIAAQgIAAgHAFQgIAEgDAHQgFAIAAAIQAAAJAFAHQAEAHAHAFQAHAFAJAAQAIAAAJgEQAIgEAGgGIALATQgIAIgMAFQgLAFgNgBQgRABgNgIg");
	this.shape_5.setTransform(154.7,29.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqA1IAAhpIAbAAIAAAkIASAAQATABAKAIQALAHAAASQAAAQgKAKQgKAJgVAAgAgPAiIAPAAQAHAAAFgEQAEgEAAgIQAAgIgEgEQgFgFgHgBIgPAAg");
	this.shape_6.setTransform(138.7,29.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLA1IAAhSIgkAAIAAgXIBfAAIAAAXIgjAAIAABSg");
	this.shape_7.setTransform(127.7,29.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcA0QgIgEgFgHQgEgIAAgJQAAgMAGgIQAGgFAKgFQAJgEALgBQAJgCAJABIAEAAIAAgCQABgKgHgEQgFgFgIAAQgHAAgIAEQgHADgGAEIgLgUQAFgDAHgDIAOgFQAJgCAGABQAVgBAMALQALAMAAAUIAABBIgZAAIAAgJIABgGIAAgCQgGAJgIAFQgIAGgKgBQgKAAgIgDgAAEAFQgFAAgFACQgGACgDADQgEAEAAAFQAAAFAEAFQAEAEAIAAQAFAAAGgEQAGgFADgGQADgHAAgGIAAgDIgFAAIgLABg");
	this.shape_8.setTransform(116.5,29.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgxAeQAHgBAFgFQAFgFADgKQADgJgBgTIAAghIBNAAIAABpIgbAAIAAhUIgYAAIAAAMQAAAWgEAQQgFARgKAIQgLAJgSABg");
	this.shape_9.setTransform(104.7,29.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWAwQgNgIgIgNQgGgMAAgPQAAgPAGgMQAHgOAMgGQAMgIAPABQAPgBALAIQAKAGAGAMQAFALABAOIgBAEIAAAFIhIAAQABAJAEAGQAFAGAHADQAFAEAIAAQAIAAAIgEQAIgDAHgFIAKAUQgIAHgMAEQgMADgLAAQgQABgMgIgAAYgMQAAgLgHgFQgFgHgKAAQgIABgHAGQgGAGgCAKIAtAAIAAAAg");
	this.shape_10.setTransform(93.4,29.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAkBBIAAgYIhHAAIAAAYIgYAAIAAguIANAAQAFgJAEgKQADgKABgMQABgLAAgKIAAgVIBNAAIAABTIAPAAIAAAugAgHgmIAAATQgBAJgDAKQgDAJgFAKIAlAAIAAg+IgZAAg");
	this.shape_11.setTransform(80.9,31.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeBCQgRgKgKgSQgJgRAAgVQAAgVAKgRQAJgRARgLQASgJAUgBQAPAAAPAGQAOAEALALIgNAUQgIgHgLgFQgKgEgLAAQgPAAgLAIQgLAGgGAMQgFAMAAANQAAANAFAMQAGALALAIQAMAIAOAAQAMgBALgFQALgEAJgJIAOAUQgGAGgJAGQgIAFgLADQgLAEgNgBQgWAAgRgKg");
	this.shape_12.setTransform(67.2,27.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D32B28").s().p("AwtE2QiAgBhbhaQhbhbAAiAQAAh/BbhbQBbhaCAAAMAhbAAAQCAAABbBaQBbBbAAB/QAACAhbBbQhbBaiAABg");
	this.shape_13.setTransform(138,31);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgeBLQgGAAgFgCIgIgDIgDgCIAJgUIACABIAEACIAGABQAFAAAFgDQAFgDADgHIAEgKIgthnIAeAAIAXA9IABAHIAAAFIABABIABAAIABgGIACgGIAVg+IAdAAIgwB5QgGAPgIAGQgKAHgLAAIgCAAg");
	this.shape_14.setTransform(210.5,32);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AASA1IgagsIgOAAIAAAsIgaAAIAAhpIAaAAIAAApIANAAIAYgpIAeAAIgiAzIAAABIAmA1g");
	this.shape_15.setTransform(199.8,29.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgsA1IAAhpIAwAAQAQAAAKAHQAKAHAAANQAAAIgEAHQgDAFgHAEIAAABQAJAAAFAHQAFAGAAAJQAAAKgGAIQgFAGgJAEQgJADgLAAgAgRAjIARAAQAJAAAFgDQAEgFAAgGQAAgGgFgFQgEgDgJAAIgRAAgAgRgIIARAAQAGAAADgEQAEgEAAgGQAAgGgEgDQgDgDgGgBIgRAAg");
	this.shape_16.setTransform(188,29.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgcA0QgIgEgFgHQgEgIgBgJQABgMAGgIQAGgFAKgFQAKgEAKgBQAJgCAJABIAFAAIAAgCQAAgKgHgEQgFgFgIAAQgHAAgHAEQgIADgHAEIgKgUQAFgDAHgDIAOgFQAJgCAGABQAVgBAMALQALAMABAUIAABBIgaAAIAAgJIABgGIAAgCQgGAJgIAFQgIAGgKgBQgKAAgIgDgAAEAFQgEAAgGACQgFACgEADQgEAEAAAFQAAAFAEAFQAEAEAIAAQAGAAAFgEQAGgFADgGQADgHAAgGIAAgDIgFAAIgLABg");
	this.shape_17.setTransform(176.1,29.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgMA1IAAhSIgjAAIAAgXIBfAAIAAAXIgjAAIAABSg");
	this.shape_18.setTransform(165.6,29.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgXAwQgMgIgHgMQgIgNAAgPQAAgOAIgMQAHgNAMgIQANgHARAAQAKAAALADQAMAEAHAJIgLASQgFgGgIgCQgHgEgIAAQgIAAgHAFQgIAEgDAHQgFAIAAAIQAAAJAFAHQAEAHAHAFQAHAFAJAAQAIAAAJgEQAIgEAGgGIALATQgIAIgMAFQgLAFgNgBQgRABgNgIg");
	this.shape_19.setTransform(154.7,29.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgqA1IAAhpIAbAAIAAAkIASAAQATABAKAIQALAHAAASQAAAQgKAKQgKAJgVAAgAgPAiIAPAAQAHAAAFgEQAEgEAAgIQAAgIgEgEQgFgFgHgBIgPAAg");
	this.shape_20.setTransform(138.7,29.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgLA1IAAhSIgkAAIAAgXIBfAAIAAAXIgjAAIAABSg");
	this.shape_21.setTransform(127.7,29.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgcA0QgIgEgFgHQgEgIAAgJQAAgMAGgIQAGgFAKgFQAJgEALgBQAJgCAJABIAEAAIAAgCQABgKgHgEQgFgFgIAAQgHAAgIAEQgHADgGAEIgLgUQAFgDAHgDIAOgFQAJgCAGABQAVgBAMALQALAMAAAUIAABBIgZAAIAAgJIABgGIAAgCQgGAJgIAFQgIAGgKgBQgKAAgIgDgAAEAFQgFAAgFACQgGACgDADQgEAEAAAFQAAAFAEAFQAEAEAIAAQAFAAAGgEQAGgFADgGQADgHAAgGIAAgDIgFAAIgLABg");
	this.shape_22.setTransform(116.5,29.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgxAeQAHgBAFgFQAFgFADgKQADgJgBgTIAAghIBNAAIAABpIgbAAIAAhUIgYAAIAAAMQAAAWgEAQQgFARgKAIQgLAJgSABg");
	this.shape_23.setTransform(104.7,29.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgWAwQgNgIgIgNQgGgMAAgPQAAgPAGgMQAHgOAMgGQAMgIAPABQAPgBALAIQAKAGAGAMQAFALABAOIgBAEIAAAFIhIAAQABAJAEAGQAFAGAHADQAFAEAIAAQAIAAAIgEQAIgDAHgFIAKAUQgIAHgMAEQgMADgLAAQgQABgMgIgAAYgMQAAgLgHgFQgFgHgKAAQgIABgHAGQgGAGgCAKIAtAAIAAAAg");
	this.shape_24.setTransform(93.4,29.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AAkBBIAAgYIhHAAIAAAYIgYAAIAAguIANAAQAFgJAEgKQADgKABgMQABgLAAgKIAAgVIBNAAIAABTIAPAAIAAAugAgHgmIAAATQgBAJgDAKQgDAJgFAKIAlAAIAAg+IgZAAg");
	this.shape_25.setTransform(80.9,31.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgeBCQgRgKgKgSQgJgRAAgVQAAgVAKgRQAJgRARgLQASgJAUgBQAPAAAPAGQAOAEALALIgNAUQgIgHgLgFQgKgEgLAAQgPAAgLAIQgLAGgGAMQgFAMAAANQAAANAFAMQAGALALAIQAMAIAOAAQAMgBALgFQALgEAJgJIAOAUQgGAGgJAGQgIAFgLADQgLAEgNgBQgWAAgRgKg");
	this.shape_26.setTransform(67.2,27.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AwtE2QiAgBhbhaQhbhbAAiAQAAh/BbhbQBbhaCAAAMAhbAAAQCAAABbBaQBbBbAAB/QAACAhbBbQhbBaiAABg");
	this.shape_27.setTransform(138,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276.1,62);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhQBgIAli/IA8AAIASABQAIABAIADQAPAEAHAMQAIAKAAAPQAAAOgIALQgHANgOAIIAAAAQAMADAFAKQAGAKgBAMQAAAPgGANQgGALgKAIQgLAJgOADQgHADgIABIgNABgAgZA3IAaAAIAHgBIAGgCQAFgEADgFQAEgGAAgGQAAgHgEgEQgEgEgJAAIgaAAgAgKgUIAWAAQAHAAAEgEQAEgDADgEQADgGAAgFQgBgGgDgDQgDgDgIgBIgWAAg");
	this.shape.setTransform(186.7,17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6BYQgVgLgKgTQgMgUAAgZQABgVAIgUQAKgVAQgPQAPgQAVgJQAUgJAVgBQAcABATAKQAVALALAUQALASAAAZQAAAWgJAUQgJAVgQAQQgQAQgVAJQgUAJgUAAQgcAAgUgLgAgTguQgOAJgJAPQgKAPAAARQAAAVAMAMQAMANATAAQAOAAAOgJQAPgKAJgPQAKgPAAgSQAAgUgMgMQgMgMgTAAQgPAAgOAJg");
	this.shape_1.setTransform(167.2,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAKBgIgXhPIgXAAIgPBPIgvAAIAmi/IAvAAIgPBLIASAAIA2hLIA3AAIhKBfIAAAAIAjBgg");
	this.shape_2.setTransform(147.8,17.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPBgIAShaIADgMIADgNIACgGIgBAAIgDAGIgJANIgKAMIhFBaIgwAAIAmi/IAvAAIgSBaIgDAMIgEANIgBAGIAAAAIAEgFIAJgOIAKgMIBFhaIAwAAIgmC/g");
	this.shape_3.setTransform(127.5,17.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQBgIAPhLIhFAAIgPBLIgvAAIAmi/IAvAAIgPBNIBFAAIAOhNIAwAAIgmC/g");
	this.shape_4.setTransform(107.1,17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhTBgIAmi/IBHAAQAJAAAHACQAHABAHADQANAGAIANQAHANAAARQAAAQgGAOQgFANgKAKQgKALgNAGQgHADgIABQgHACgIAAIgiAAIgMA8gAgQgCIAVAAIAIgBQAEgBAEgDQAGgEAEgIQAEgIAAgJQAAgJgFgEQgFgGgJAAIgWAAg");
	this.shape_5.setTransform(88.4,17.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhOBgIAmi/IB3AAIgIAoIhIAAIgHAkIA5AAIgIAmIg5AAIgHAkIBMAAIgIApg");
	this.shape_6.setTransform(72.3,17.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPBgIAeiXIhDAAIgeCXIgvAAIAmi/IChAAIgmC/g");
	this.shape_7.setTransform(54,17.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag6BYQgVgLgKgTQgLgUAAgZQAAgVAJgUQAJgVAQgPQAPgQAVgJQAUgJAUgBQAdABATAKQAVALALAUQALASAAAZQAAAWgJAUQgKAVgPAQQgQAQgVAJQgUAJgUAAQgcAAgUgLgAgTguQgOAJgJAPQgKAPAAARQAAAVAMAMQALANAUAAQAOAAAOgJQAPgKAJgPQAKgPAAgSQAAgUgMgMQgMgMgTAAQgPAAgOAJg");
	this.shape_8.setTransform(32.8,17.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgyBYQgVgKgKgUQgLgTAAgZQAAgWAJgUQAIgVAQgPQAPgQAVgJQAUgJAWgBQAOAAANADQAOADALAGQANAGAJAKIgaAhQgJgIgMgEQgMgFgOAAQgPAAgLAGQgMAGgIAKQgJAKgEAMQgEALgBAKQAAANAGAKQAEAKAKAHQAKAGAOAAQAPAAAOgGQAPgHAMgKIASAlQgJAJgMAHQgNAGgOAEQgPADgMAAQgdAAgUgLg");
	this.shape_9.setTransform(12.6,17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,197.7,36.4);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoBgIAIgpIApAAIgIApgAgbAkIAViDIAvAAIgfCDg");
	this.shape.setTransform(124,17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPBgIAShaIADgMIADgNIACgGIgBAAIgDAGIgJANIgKAMIhFBaIgwAAIAmi/IAvAAIgSBaIgDAMIgEANIgBAGIAAAAIAEgFIAJgOIAKgMIBFhaIAwAAIgmC/g");
	this.shape_1.setTransform(109.5,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAsBzIAIgmIhuAAIgHAmIgsAAIAQhOIAUAAQAMgQAJgSQAIgRAGgSQAGgTAEgRIAJguICBAAIgeCXIAVAAIgPBOgAAOhAIgGAYIgIAcQgDAMgHANQgGANgHALIA4AAIAVhvIgmAAg");
	this.shape_2.setTransform(87,19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AArBgIgEgpIg6AAIgUApIgyAAIBii/IA3AAIAaC/gAAjARIgEgjIAAgOIgBgNIAAgGIgBAAIgCAGIgFANIgHAOIgQAjIAkAAg");
	this.shape_3.setTransform(67.5,17.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgwBbQgSgHgLgOIAbgeQAIAIAKAFQAKAFALAAQAIAAAFgDQAHgCAEgHQAFgFAAgIQAAgIgFgDQgEgEgJAAIgcAAIAIgkIAVAAQAHAAAGgCQAGgDAEgGQAEgFAAgIQAAgGgEgFQgFgEgKAAQgHAAgIACQgKAEgOAJIgRghQAMgKAMgFQALgFALgCQAJgCAJAAQARABANAFQAOAGAIAKQAIALABAQQgBAQgJANQgJANgQAHIAAAAQAKADAHAKQAGAJAAANQAAAPgHAMQgHAMgLAJQgLAJgOAEQgOAFgNgBQgUAAgRgIg");
	this.shape_4.setTransform(51.9,17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6BYQgUgLgMgTQgKgUgBgZQABgVAIgUQAKgVAQgPQAPgQAVgJQAUgJAVgBQAcABATAKQAVALALAUQAMASAAAZQAAAWgKAUQgJAVgQAQQgRAQgUAJQgUAJgUAAQgbAAgVgLgAgTguQgPAJgIAPQgKAPAAARQABAVALAMQAMANASAAQAPAAAPgJQAOgKAJgPQAKgPgBgSQABgUgMgMQgMgMgTAAQgOAAgPAJg");
	this.shape_5.setTransform(33.8,17.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAPBgIAeiXIhDAAIgeCXIgvAAIAmi/IChAAIgmC/g");
	this.shape_6.setTransform(12.5,17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129.9,36.4);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNBgIAli/IAtAAIgJA7IAdAAQARABAMAHQAMAHAGAMQAGALAAARQAAAPgFAOQgGANgKALQgKALgOAGQgOAHgRAAgAgWA3IAWAAQAJABAHgFQAHgEADgIQAEgIAAgIQAAgJgFgGQgFgFgLAAIgVAAg");
	this.shape.setTransform(104.5,17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhQBgIAli/IA8AAIASABQAIABAIADQAOAEAIAMQAIAKAAAPQAAAOgIALQgHANgOAIIAAAAQAMADAFAKQAGAKgBAMQABAPgHANQgGALgKAIQgLAJgOADQgHADgIABIgNABgAgaA3IAbAAIAHgBIAGgCQAGgEADgFQADgGAAgGQAAgHgEgEQgFgEgIAAIgaAAgAgKgUIAWAAQAGAAAFgEQAEgDADgEQADgGAAgFQAAgGgEgDQgEgDgHgBIgWAAg");
	this.shape_1.setTransform(87.3,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AArBgIgEgpIg6AAIgUApIgyAAIBii/IA3AAIAaC/gAAjARIgEgjIAAgOIgBgNIAAgGIgBAAIgCAGIgFANIgHAOIgQAjIAkAAg");
	this.shape_2.setTransform(68.1,17.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag4BgIAeiXIg6AAIAHgoICiAAIgIAoIg6AAIgcCXg");
	this.shape_3.setTransform(53.8,17.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyBYQgVgKgKgUQgLgTAAgZQAAgWAJgUQAIgVAQgPQAPgQAVgJQAUgJAWgBQAOAAANADQANADAMAGQANAGAKAKIgbAhQgJgIgMgEQgMgFgOAAQgPAAgLAGQgMAGgIAKQgJAKgEAMQgEALgBAKQAAANAGAKQAEAKAKAHQAKAGAOAAQAPAAAOgGQAPgHAMgKIASAlQgJAJgNAHQgNAGgOAEQgOADgMAAQgdAAgUgLg");
	this.shape_4.setTransform(34.8,17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6BYQgVgLgKgTQgLgUAAgZQAAgVAJgUQAJgVAQgPQAPgQAVgJQAUgJAUgBQAdABATAKQAVALALAUQALASAAAZQAAAWgJAUQgKAVgPAQQgQAQgVAJQgUAJgUAAQgcAAgUgLgAgTguQgOAJgKAPQgJAPAAARQAAAVAMAMQALANAUAAQAOAAAOgJQAPgKAJgPQAKgPAAgSQAAgUgMgMQgMgMgTAAQgPAAgOAJg");
	this.shape_5.setTransform(13.4,17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115.3,36.4);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag3CEIAKg4IA5AAIgKA4gAgmAyIAdi0IBBAAIgqC0g");
	this.shape.setTransform(136.2,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhnCBQgPgGgMgJIAfguQAFAEAIADQAIAEAKAAQAIAAAGgEQAGgEAEgHIg/jFIBDAAIAaBfIAEASIADANIABAFIABAAIACgFIAEgNIAIgRIAyhgIBIAAIhzDEQgJARgKAQQgNAQgQALQgQAKgWABQgTAAgOgFg");
	this.shape_1.setTransform(119.9,25.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAOCEIgghsIgfAAIgUBsIhBAAIAzkGIBBAAIgVBlIAZAAIBKhlIBMAAIhlCBIAAABIAwCEg");
	this.shape_2.setTransform(95.7,25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWCEIAUhoIheAAIgUBoIhBAAIAzkGIBBAAIgUBpIBeAAIAUhpIBBAAIg0EGg");
	this.shape_3.setTransform(67.8,25.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhQB5QgcgPgPgbQgPgbAAgiQAAgdAMgcQANgdAWgVQAVgWAdgLQAbgNAcAAQAnAAAbAPQAcAOAPAaQAQAbABAhQgBAfgNAcQgNAcgVAWQgWAWgcAMQgcANgcAAQgmAAgcgPgAgbhAQgTAMgNAWQgNAUAAAYQABAdAPAQQAQARAbABQAUgBATgMQAVgNAMgUQANgWAAgZQAAgcgQgPQgQgRgaAAQgUAAgVAMg");
	this.shape_4.setTransform(38.6,25.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhpCEIAzkGICgAAIgLA3IhfAAIgoDPg");
	this.shape_5.setTransform(14.8,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145.2,51.4);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAVCoIAYh7IAEgTIAFgSIACgIIgBAAIgEAIIgMARIgOAUIhfB7IhCAAIAzkGIBBAAIgYB5IgFATIgEASIgCAIIAAAAIAFgIIAMgSIAOgTIBfh5IBCAAIgzEGgAgOh4QgQgMgBgVIAAgFIACgJIAuAAIgBAEIAAAEQAAAIAEAFQAFAFAKAAQAKABAHgGQAIgGADgPIAuAAQgEAWgLANQgMAOgQAGQgQAGgSAAQgegBgQgNg");
	this.shape.setTransform(171.5,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA7CEIgGg4IhQAAIgbA4IhFAAICIkGIBKAAIAlEGgAAwAYIgFgxIgBgTIgBgTIAAgIIgBAAIgDAIIgHATIgJATIgXAxIAyAAg");
	this.shape_1.setTransform(142.6,25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhyCEIA0kGIBiAAQAMAAAKACQAKABAIAFQATAIAKASQAKARAAAXQAAAXgIATQgHARgOAPQgOAPgRAIQgKAEgKADQgKACgLAAIgvAAIgQBSgAgXgDIAeAAQAGgBAFgBQAGgBAEgDQAKgGAFgLQAGgLgBgNQABgMgHgGQgHgHgNAAIgeAAg");
	this.shape_2.setTransform(121.4,25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhpCEIAzkGICgAAIgLA3IhfAAIgoDPg");
	this.shape_3.setTransform(101.1,25.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAUCEIAZh8QABgIADgJIAFgSIACgIIgBAAIgEAIIgMASIgOARIhgB8IhBAAIA0kGIBAAAIgYB6IgEASIgFARIgCAJIAAAAIAFgIIAMgSIAOgSIBfh6IBCAAIgzEGg");
	this.shape_4.setTransform(76.2,25.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA0CEIA0kGIBAAAIgzEGgAinCEIAzkGIBBAAIgQBRIAnAAQAXAAAPAKQAPAKAJARQAJAPAAAXQgBAVgGASQgIASgOAPQgOAPgRAJQgTAKgXAAgAhcBMIAdAAQANAAAJgGQAKgGAEgLQAGgKAAgMQAAgNgIgGQgGgIgPABIgcAAg");
	this.shape_5.setTransform(45.1,25.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhvCEIA0kGIBTAAIAZABQALABAKADQAUAIALAOQALAPAAAUQAAASgLASQgLARgTAKIAAABQARAEAHAOQAIAOAAAQQgBAVgIAQQgJARgOALQgPALgSAFQgKAEgLABQgKABgJABgAgjBMIAlAAIAJgBQAFgBAEgDQAHgEAFgIQAEgIAAgJQAAgJgGgGQgFgFgMAAIglAAgAgPgdIAgAAQAJAAAGgEQAGgEAEgHQADgHAAgHQAAgHgEgGQgFgEgLAAIgeAAg");
	this.shape_6.setTransform(15.4,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188.9,51.4);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,301,358);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().rr(-453.2,-300,906.4,600,39.1);
	this.shape.setTransform(453.2,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,906.4,600);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.8,1,1).p("AhZg9IgtAAAizACIg8AAAgiA+IgyAAADwACIlxAAADwA+IjOAAADDg4IjgAA");
	this.shape.setTransform(24,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,50.1,14.5);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKB8IgDgBIgDgFQgDgCAAgCIgBgFIABgFIAEgEQACgDACgBIAHgBIgBgBQAIACADADIAEAIQAAAAAAABQABAAAAABQAAAAgBABQAAABAAAAIAAADIgDAEQgBADgDACIgGACgAgoB8IgCAAIgFgDIgDgDQgDgEAAgIQAAgEACgCIACgDIAEgEQADgCAEABIAAgBIAJADIADACIADAHIAAAJIgCAFIgDADIgFAEIgFABgAAwBsIgFgBIgEgEIgCgDIgBgGIABgGIACgEIAEgDIAIgCIAIACIACABIADADIACAGIAAADIgBAEIgBADIgCADQgDADgGABIgCAAgAhPBXIgCAAIgCAAIgDgDIgEgDIgBgDIgBgHIAAgGIACgDIADgEQAEgEAGABIAAgBQAHACAEAEIABABIABACIABACQACADgBAFIAAADIgCAEQgEAGgHABIgCABgAAYBRIgEAAIgCgBIgCgBIgEgEIgBgDQgCgEABgDIAAgDIACgFIAGgEIAGgBIAAAAQAFAAADACIADACIAEAHQABADgBADIAAACIgDAEIgDAEIgHACgABVBNIgDgCQgCgBgCgDQgEgIAEgHIAEgEIADgCIAGgBIAAgBQAEAAAFAEQAAAAABAAQAAAAABABQAAAAAAABQAAAAABABIABABIABACIABAFIgBAEIgBADIgCADIgDADIgGACIgCABgAgfBLIgHgBIgDgCIgDgCQgGgJAFgIIAEgFIACgBIAHgBIAAgBQAHAAAFADIADADIACADIABACIAAAFIAAAEIgDAFIgDACQgGAEgEAAIgBgBgAhnAxIgFgCIgCgBIgFgGQgEgHAFgHIAFgGIAIgBIAAAAQAHABAEAEIAEAGIAAAGIgBACIgCAFIgDADIgEABIgDACgABAAoIgDgBIgCgBIgFgEIgCgEIgBgGIABgEIACgEIAFgFIAHgBIAAAAQAEAAAFADQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABIABACIABACIABAFIgBAEIgBACIgCAEQAAAAAAAAQgBABAAAAQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAIgEACgABqAkIgGgCIgDgEIgDgDIgBgGIABgFIADgEIAEgEIAHgBIAAgBQAIACADADIACABIAAADIACACIABADQAAAFgCACIgBABIAAACIgCABQgDAEgGABIgCAAgAg6ASIgCAAIgCAAIgCgBIgDgCQgCgBgCgEQgDgFABgFIADgEIADgDQADgCAGAAIAAgBIAIADIACABIADADIACADIAAAEIgBAEIgCAEIgDADQgDACgEABgAhwAIIgCAAIgCgCIgEgFQgEgEADgHIAFgGIACgBIAHgBIAAgBQAFABADACIADABIAEAIQABADgBACIgBACIgBABIgBACIgDADIgDACIgGABgABkgTIgBgBIgCgBIgDgDQgFgGACgFQAAgGAFgEIACgBIAHgCQAIABADAEIABABIADAFQABAEgCAFIgBACIgBABIgBACIgFADIgGACgAA5gZIgEAAIgCAAIgCgCQgFgEgBgDIgBgFQAAgDABgDIAFgHIACgBIAHgBIAAgBQAIACADADIAEAHQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAIgBADIgCAEIgDADIgHADgAgqgiIgFgBIgDgBIgDgEIgCgEIgBgFIABgDIABgFIAFgEIABgBIAHgBIAAAAQAEAAAEACIAEADIABADIACACIAAAEIAAAGIgBABIgCACIgBACIgFADIgGABgAhbgpIgCAAIgCgBIgFgDIgCgDIgBgDIgBgFIABgEIABgCIACgDIADgDQADgCAFABIAAgBIAIACIACABIACAEQADAEAAAFIgCAGIgCADQgDADgGABIgCAAgAANguIgHgEIgDgDIgCgEIgBgEIABgFIACgEIADgDQAEgDAGAAIgBgBIAIADIACABIADAEIACAFIAAAEIAAADIgDAFIgEADIgHADgABTg9IgFgCIgCgBIgFgGQgEgIAGgHIACgDIACgCIAIgBIAAAAQAIAAADAEIACADIACAEIAAAFIgBADIgCAEIgDAEIgEABIgDACgAg2hNIgCgBIgCAAIgDgBQgEgEgBgDIgBgEQAAgHADgDIAFgFIAHgBIAAAAQAEAAAFACIADADIABADIABACQACACgBAEIgBADIgCAFIgDACIgHADgAArhWIgDgBIgCAAIgCgBQgDgDgCgFQgCgFABgEIADgEIADgEIACgBIAHgBIAAAAQAFAAAFADIACADIABACIABACIABACIAAAGIgEAHQgDACgGACgAgGhfIgDAAIgEgCIgEgEIgBgDIgCgHIABgDIABgCIACgCIADgDQADgCAFAAIAAgBQAEABABABQADAAACAEIAEAGQABAEgCADIgBADIgCACQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQgCADgDgBIgCABg");
	this.shape.setTransform(12.4,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.8,25);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.setTransform(0,0,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,560.1,301.1);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,225,61);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Symbol24();
	this.instance.setTransform(115.7,80.5,0.653,0.653,-36.5,0,0,21.1,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:20.8,scaleX:0.38,scaleY:0.38,rotation:-149.3,x:68.7,y:53.6},14).to({regX:21.4,regY:12.8,scaleX:0.29,scaleY:0.29,rotation:-276.5,x:51.7,y:44.1,alpha:0},5).wait(1));

	// Layer 5
	this.instance_1 = new lib.Symbol24();
	this.instance_1.setTransform(69.2,73.2,0.38,0.38,-164.9,0,0,20.7,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:21,regY:12.4,scaleX:0.36,scaleY:0.36,rotation:-172.8,x:65.5,y:72.7},1).to({regX:21.6,regY:12.7,scaleX:0.27,scaleY:0.27,rotation:-300,x:47.3,y:70.9,alpha:0},5).wait(1).to({regX:21.1,scaleX:0.62,scaleY:0.62,rotation:-420,x:116.4,y:78.2,alpha:1},0).to({regX:20.9,regY:12.6,scaleX:0.4,scaleY:0.4,rotation:-516.7,x:72.8,y:73.5},12).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol24();
	this.instance_2.setTransform(70,84.3,0.579,0.579,-123.3,0,0,21.1,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:12.4,scaleX:0.42,scaleY:0.42,rotation:-187.8,x:36.8,y:89.4},8).to({regX:21.4,regY:12.7,scaleX:0.31,scaleY:0.31,rotation:-315,x:16.1,y:92.7,alpha:0},5).wait(1).to({regX:21.1,regY:12.6,scaleX:0.71,scaleY:0.71,rotation:-435,x:94.6,y:80.4,alpha:1},0).to({regY:12.7,scaleX:0.6,scaleY:0.6,rotation:-475.3,x:74,y:83.7},5).wait(1));

	// Layer 3
	this.instance_3 = new lib.Symbol24();
	this.instance_3.setTransform(74.5,47.8,0.554,0.554,-95.6,0,0,21.1,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:12.6,scaleX:0.46,scaleY:0.46,rotation:-127.8,x:62.8,y:33.3},4).to({regX:21.3,regY:12.5,scaleX:0.35,scaleY:0.35,rotation:-255,x:48.1,y:15.3,alpha:0},5).wait(1).to({regX:21.2,regY:12.6,scaleX:0.79,scaleY:0.79,rotation:-375,x:103.6,y:84.1,alpha:1},0).to({regY:12.7,scaleX:0.58,scaleY:0.58,rotation:-447.7,x:77.4,y:51.3},9).wait(1));

	// Layer 2
	this.instance_4 = new lib.Symbol24();
	this.instance_4.setTransform(34.8,74.4,0.325,0.325,110.8,0,0,20.9,12.2);
	this.instance_4.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:21.4,regY:12.8,scaleX:0.29,scaleY:0.29,rotation:60,x:27,y:73.6,alpha:0},2).wait(1).to({regX:21.1,regY:12.7,scaleX:0.65,scaleY:0.65,rotation:-60,x:100,y:81.4,alpha:1},0).to({regX:20.9,regY:12.4,scaleX:0.38,scaleY:0.38,rotation:-172.8,x:46.3,y:75.6},14).to({scaleX:0.34,scaleY:0.34,rotation:-223.6,x:38.6,y:74.7,alpha:0.602},2).wait(1));

	// Layer 1
	this.instance_5 = new lib.Symbol24();
	this.instance_5.setTransform(94.6,73,0.714,0.714,-69.2,0,0,21.1,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:21.2,scaleX:0.46,scaleY:0.46,rotation:-157.8,x:46.9,y:54.4},11).to({regX:21.3,regY:12.7,scaleX:0.35,scaleY:0.35,rotation:-285,x:25.1,y:46.1,alpha:0},5).wait(1).to({regX:21.1,regY:12.6,scaleX:0.79,scaleY:0.79,rotation:-405,x:107.6,y:78,alpha:1},0).to({scaleX:0.74,scaleY:0.74,rotation:-421.2,x:99,y:74.6},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(29.1,37.3,100.4,59.7);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.setTransform(104,142.3,1,1,0,0,0,104,142.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:146.6},9,cjs.Ease.get(-1)).to({y:152.3},12,cjs.Ease.get(1)).to({y:147.1},11,cjs.Ease.get(-1)).to({y:142.3},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207.9,284.7);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Символ 26
	this.instance = new lib.Символ26();
	this.instance.setTransform(45.8,19.4,1.393,1.393,0,0,0,57.6,18.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,y:18.2,alpha:1},9,cjs.Ease.get(1)).wait(11));

	// Символ 28
	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(210.1,18.2,1.284,1.284,0,0,0,98.9,18.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(1)).wait(7));

	// Символ 27
	this.instance_2 = new lib.Символ27();
	this.instance_2.setTransform(381.2,18.2,1.316,1.316,0,0,0,65,18.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({scaleX:1,scaleY:1,x:381.1,alpha:1},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.4,-5.9,160.6,50.7);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 25
	this.instance = new lib.Символ25();
	this.instance.setTransform(263.3,25.7,1,1,0,0,0,72.5,25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:268.3},7,cjs.Ease.get(-1)).to({x:273.3},7,cjs.Ease.get(1)).to({x:267.9},8,cjs.Ease.get(-1)).to({x:263.3},7,cjs.Ease.get(1)).wait(1));

	// Символ 24
	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(94.5,25.7,1,1,0,0,0,94.5,25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:99.5},7,cjs.Ease.get(-1)).to({x:104.5},7,cjs.Ease.get(1)).to({x:99.2},8,cjs.Ease.get(-1)).to({x:94.5},7,cjs.Ease.get(1)).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,335.9,51.4);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(150.5,179,1,1,0,0,0,150.5,179);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:184.7},14,cjs.Ease.get(-1)).to({y:190.9},15,cjs.Ease.get(1)).to({y:185},15,cjs.Ease.get(-1)).to({y:179},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,301,358);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(138,31,1,1,0,0,0,138,31);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276.1,62);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// Слой 4
	this.instance = new lib.Символ29();
	this.instance.setTransform(250.9,139.7,1,1,0,0,0,98.9,54.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(18).to({alpha:0},20).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(-198.1,179,1,1,0,0,0,150.5,179);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:138.7},19,cjs.Ease.get(1)).to({y:525.5},20,cjs.Ease.get(-1)).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ20();
	this.instance_2.setTransform(299,159.7,1,1,0,0,0,453.2,299.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({alpha:0.68},18,cjs.Ease.get(1)).to({alpha:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-348.6,0,301,358);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ11();
	this.instance.setTransform(66.6,28.8,1,1,0,0,0,24,6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaA3QgPgJgIgOQgIgPAAgRQAAgRAIgPQAIgOAOgIQAOgIARgBQARABAMAHQAMAIAGANQAHANAAARIgBAEIAAAFIhSAAQABALAFAHQAFAIAIADQAGAEAJAAQAKAAAJgEQAJgEAHgGIAMAWQgJAJgNAEQgOAFgNAAQgSgBgPgIgAAbgOQAAgMgHgHQgHgGgKAAQgKAAgIAHQgHAHgDALIA0AAIAAAAg");
	this.shape.setTransform(218.6,30.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAbA9IAAhAIAAgHIABgHIgBAAIgEAHIgFAHIgrBAIgeAAIAAh5IAdAAIAABAIAAAJIgBAGIABAAIAEgHIAFgIIArhAIAeAAIAAB5g");
	this.shape_1.setTransform(204.6,30.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZA9IAAgyIgyAAIAAAyIgeAAIAAh5IAeAAIAAAwIAyAAIAAgwIAfAAIAAB5g");
	this.shape_2.setTransform(190,30.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaA3QgPgJgIgOQgIgPAAgRQAAgRAIgPQAIgOAOgIQAOgIARgBQARABAMAHQAMAIAGANQAHANAAARIgBAEIAAAFIhSAAQABALAFAHQAFAIAIADQAGAEAJAAQAKAAAJgEQAJgEAHgGIAMAWQgJAJgNAEQgOAFgNAAQgSgBgPgIgAAbgOQAAgMgHgHQgHgGgKAAQgKAAgIAHQgHAHgDALIA0AAIAAAAg");
	this.shape_3.setTransform(176,30.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7BWIAAioIAcAAIAAAJIAAAGIgBADIABAAQAGgKAKgGQALgFAKAAQARAAAMAIQAMAIAGAPQAHAOAAATQAAAUgHAMQgIAOgMAIQgMAIgQAAQgJAAgJgEQgJgFgHgIIAAAAIAAADIABAIIAAAzgAgOg3QgHAEgEAJQgFAIABAOQAAAKACAIQAEAHAHAFQAHAFAJABQAHAAAIgFQAGgEAEgHQAEgIABgMQAAgSgJgKQgIgLgNAAQgHAAgHAEg");
	this.shape_4.setTransform(162.2,32.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghA3QgPgIgJgOQgJgOAAgTQAAgRAJgPQAJgOAPgIQAPgIASgBQASABAPAIQAPAIAJAOQAJAPABARQgBATgJAOQgIAOgQAIQgPAJgSAAQgRAAgQgJgAgRggQgIAFgFAJQgFAIAAAKQAAALAFAJQAFAIAIAFQAIAFAJAAQAKAAAIgFQAIgFAFgIQAFgJAAgLQAAgKgFgIQgFgJgIgFQgIgFgKAAQgJAAgIAFg");
	this.shape_5.setTransform(146.9,30.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAVA9IgegyIgQAAIAAAyIgeAAIAAh5IAeAAIAAAvIAPAAIAcgvIAiAAIgnA7IAAAAIArA+g");
	this.shape_6.setTransform(133.4,30.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaA3QgPgJgIgOQgIgOAAgSQAAgQAIgPQAIgOAPgJQAPgIATgBQAMAAANAFQANAEAJAKIgOAVQgGgGgIgEQgJgEgJAAQgJAAgIAGQgJAFgEAIQgFAJAAAJQAAAKAFAIQAEAJAJAFQAIAGAKAAQAKAAAKgFQAJgEAHgHIAMAWQgJAJgNAFQgNAGgPAAQgTgBgPgIg");
	this.shape_7.setTransform(119.7,30.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoBTQgHgDgJgGIAOgXIAJAGQAFACAFABQAHAAAEgEQAEgEACgHIhCiCIAiAAIAkBMIADAJIADAIIABAEIABAAIABgEIADgIIADgJIAbhMIAhAAIg1CFQgDAJgGAJQgFAIgGAGQgJAGgNAAQgJAAgJgDg");
	this.shape_8.setTransform(105.6,28);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D32B28").s().p("AwtE2QiAgBhbhaQhbhbAAiAQAAh/BbhbQBbhaCAAAMAhbAAAQCAAABbBaQBbBbAAB/QAACAhbBbQhbBaiAABg");
	this.shape_9.setTransform(138,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276.1,62);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(12.4,12.2,1,1,0,0,0,12.4,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.3,24.8,25);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ8();
	this.instance.setTransform(372.2,65,1,1,0,0,0,12.4,12.5);
	this.instance.alpha = 0.52;

	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(81.1,65,1,1,0,0,0,12.4,12.5);
	this.instance_1.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.blue();
	this.instance_2.setTransform(40,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40,0,422,94);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ8();
	this.instance.setTransform(1.4,65.9,0.782,0.782,0,0,0,12.4,12.6);
	this.instance.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(292.6,65.4,1,1,0,0,0,12.4,12.5);
	this.instance_1.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.red();
	this.instance_2.setTransform(-40,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 2
	this.instance_3 = new lib.Symbol23();
	this.instance_3.setTransform(-165.6,-35.2,1.526,1.526,0,0,0,21.1,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.3,0,535.3,94);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(839.4,150.5,1,1,0,0,0,280.1,150.5);

	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(280.1,150.5,1,1,0,0,0,280.1,150.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1119.4,301.1);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 7
	this.instance = new lib.Символ7();
	this.instance.setTransform(426,36.1,0.91,0.91,0,0,0,211,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:211.1,regY:46.9,x:409},22,cjs.Ease.get(-1)).to({regX:211,regY:47,x:391},23,cjs.Ease.get(1)).to({regX:211.1,regY:46.9,x:409.4},22,cjs.Ease.get(-1)).to({x:424.6},14,cjs.Ease.get(1)).to({regX:211,regY:47,x:426},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(270.4,-6.7,384,85.6);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(30));

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(0.9,46.9,0.74,0.74,0,0,0,271.6,56.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-513.2},28,cjs.Ease.get(-1)).wait(1).to({x:0.9},28,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,284.2,63.3);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 6
	this.instance = new lib.Символ6();
	this.instance.setTransform(322,51,1,1,0,0,0,211,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:403.2},22,cjs.Ease.get(-1)).to({x:488},23,cjs.Ease.get(1)).to({x:401.1},22,cjs.Ease.get(-1)).to({x:329.1},14,cjs.Ease.get(1)).to({x:322},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.3,4,535.3,94);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(138,31,1,1,0,0,0,138,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:140.4,y:33.4},2).to({y:31},1).to({y:28.6},1).to({x:135.6,y:33.4},2).to({x:138,y:31},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276.1,62);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(304.6,150.5,1.087,1,0,0,0,280.1,150.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-304.6},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1217.3,301.1);


(lib.Символ17 = function(mode,startPosition,loop) {
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

	// Слой 3
	this.instance = new lib.Символ18();
	this.instance.setTransform(-324.5,3.5,1,1,0,0,0,138,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:286.1},7,cjs.Ease.get(1)).to({x:269.6},3,cjs.Ease.get(1)).to({x:604.6},9).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ31();
	this.instance_1.setTransform(258.2,193.5,1,1,0,0,0,104,142.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({y:-26.5},5,cjs.Ease.get(1)).to({y:195.6},9,cjs.Ease.get(-1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ12();
	this.instance_2.setTransform(128,28.9,0.928,0.928,0,0,0,138,31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:118.9},5,cjs.Ease.get(-1)).wait(5).to({y:28.9},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-462.5,-27.5,718.6,85);


// stage content:



(lib.fonrace600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
				
				
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
				
				function fl_Clickover()
				{
				    this.girl.gotoAndPlay(2);
					this.but.gotoAndPlay(2);
					this.car.gotoAndPlay(2);
					
				
				}
				
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
				
				function fl_Clickout()
				{   
					this.girl.gotoAndPlay(20);
					this.but.gotoAndPlay(11);
					this.car.gotoAndPlay(30);
				
				}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Символ 2
	this.instance = new lib.Символ2();
	this.instance.setTransform(501.6,33.7,0.74,0.74,0,0,0,112.5,30.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.but = new lib.Символ17();
	this.but.setTransform(302.1,261.3,1,1,0,0,0,128,28.8);

	this.timeline.addTween(cjs.Tween.get(this.but).wait(1));

	// girl.png
	this.girl = new lib.Символ15();
	this.girl.setTransform(160.6,165.9,0.927,0.927,0,0,0,150.6,179);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(208.1,32.8,1,1,0,0,0,168,25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 1
	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(66.3,148.9,0.847,0.847,0,0,0,58.4,21.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 2
	this.car = new lib.Символ14();
	this.car.setTransform(353.6,166.2,1,1,0,0,0,142.1,31.7);

	this.timeline.addTween(cjs.Tween.get(this.car).wait(1));

	// money.png
	this.instance_3 = new lib.money();
	this.instance_3.setTransform(300,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 5
	this.instance_4 = new lib.Символ5();
	this.instance_4.setTransform(609.1,136.5,1,1.093,0,0,0,609.1,150.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,122,1519.4,359.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;