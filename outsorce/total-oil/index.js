(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1477318219747", id:"back"},
		{src:"images/bbbo.png?1477318219747", id:"bbbo"},
		{src:"images/car.png?1477318219747", id:"car"},
		{src:"images/headerlogototal.png?1477318219747", id:"headerlogototal"},
		{src:"images/Izo1.png?1477318219747", id:"Izo1"},
		{src:"images/O1.png?1477318219747", id:"O1"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,462,362);


(lib.bbbo = function() {
	this.initialize(img.bbbo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,389,90);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,273);


(lib.headerlogototal = function() {
	this.initialize(img.headerlogototal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,53);


(lib.Izo1 = function() {
	this.initialize(img.Izo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,29);


(lib.O1 = function() {
	this.initialize(img.O1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,155);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPBBIAAhGIgWBGIgvAAIAAiBIAoAAIAABEIAWhEIAvAAIAACBg");
	this.shape.setTransform(-4,18.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,0,17.1,32.8);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.headerlogototal();
	this.instance.parent = this;
	this.instance.setTransform(-3,-152,0.472,0.472);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-152,87.3,25);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhXB5IgiizIAAAAIAACzIg8AAIAAjxIBbAAIAaCOIAAAAIAaiOIBZAAIAAB/Ig6A7IAAh8IgBAAIgcCZIgbAagAB1h4IBBAAIhVBTg");
	this.shape.setTransform(-36.3,44.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfB5IgHgqIgwAAIgHAqIhCAAIA6jxIBOAAIA7DxgAARAfIgRhlIAAAAIgRBlIAiAAg");
	this.shape_1.setTransform(37.2,45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhIB6IgIAAIgIgBIgGgBIAAgzIAEABIAEAAIALgBQAFgBADgGQAEgGACgMIADghIACg0IAAhQICXAAIAADxIhAAAIAAi/IgdAAQAAA7gCAkQAAAmgIAWQgHAWgOAIQgHAEgJACQgJACgMAAg");
	this.shape_2.setTransform(16.7,45.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnB3QgIgEgHgFQgHgGgEgHQgKgPgEgYQgDgXAAgjQAAgWAEgjQAEgYAKgPQALgQAQgGQAJgEAKgBIAVgCQAVAAAPAGQAQAFAIALQAKAKAEANQAFAOgBASIAAAQIg9AAIAAgOQAAgVgEgHQgEgIgJAAQgFABgFADQgEAEgCAJQgCAKgBAQIgBAnIABAoQABARACAKQACAJAEADQAFAFAFAAQAFAAAFgEQADgCACgIIADgSIABgdIA9AAIAAATQAAAagGAQQgIAQgKAJQgMAJgOAEQgPADgPAAQgZAAgRgGg");
	this.shape_3.setTransform(-1.9,45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfB5IgHgqIgwAAIgHAqIhCAAIA6jxIBOAAIA7DxgAARAfIgRhlIAAAAIgRBlIAiAAg");
	this.shape_4.setTransform(-20.5,45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA5B5IAAizIgBAAIgiCzIgrAAIgiizIgBAAIAACzIg7AAIAAjxIBbAAIAYCOIAAAAIAZiOIBbAAIAADxg");
	this.shape_5.setTransform(-42.8,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.6,21.2,108.3,46.6);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhPCLIAAkVIBIAAIAADaIBYAAIAAA7g");
	this.shape.setTransform(84.2,29);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAjCLIgHgxIg4AAIgHAxIhNAAIBEkVIBZAAIBDEVgAATAjIgTh0IAAAAIgUB0IAnAAg");
	this.shape_1.setTransform(63.7,29);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjCLIAAjXIg2AAIAAg+ICzAAIAAA+Ig3AAIAADXg");
	this.shape_2.setTransform(43.9,29);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgtCIQgTgHgMgSQgGgIgEgMIgHgYQgFgcAAgnQAAgYAFgoIAHgZQAEgMAGgIQAMgSATgIQAJgEAMgCIAYgCIAZACQALACAKAEQAKAEAHAHQAIAGAGAJQAMARAFAcQAFAoAAAYQgCAwgDATIgHAYQgEAMgGAIQgGAJgIAGQgHAGgKAEQgKAEgLACIgZACQgggDgNgFgAgLhZQgFAEgDALQgCALgBASIgBAtIABAvQABASACALQADALAFAEQAEAFAHAAQAHAAAGgFQAFgEACgLQACgLABgSIABgvIgBgtQgBgSgCgLQgCgLgFgEQgGgFgHAAQgHAAgEAFg");
	this.shape_3.setTransform(24.1,28.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjCLIAAjXIg2AAIAAg+ICzAAIAAA+Ig2AAIAADXg");
	this.shape_4.setTransform(4.3,29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,1.8,104,53.3);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1BBIgHgBIAAgfIAEAAIAFgBQADgBACgCQACgDABgGIADgRIABgaIABgpIBjAAIAACAIgrAAIAAhgIgSAAIAAAkQAAAQgDALQgCALgEAHQgEAHgFADQgFAEgHABIgPABg");
	this.shape.setTransform(-15.5,28.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPBBIAAhGIgWBGIgvAAIAAiBIAoAAIAABDIAWhDIAvAAIAACBg");
	this.shape_1.setTransform(-27.9,28.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1BBIgHgBIAAgfIAEAAIAFgBQADgBACgCQACgDABgGIADgRIABgaIABgpIBjAAIAACAIgrAAIAAhgIgSAAIAAAkQAAAQgDALQgCALgEAHQgEAHgFADQgFAEgHABIgPABg");
	this.shape_2.setTransform(-41.3,28.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiBBQgHgDgFgFQgHgKAAgRQAAgJABgHQACgHAEgEQAEgDAHgEQAHgDALgDIAQgEQAGgCACgDQADgDAAgGQAAgGgCgDQgDgDgFAAQgFAAgDADQgDAEAAAKIgmAAIABgMQACgGADgEQAEgJAIgFQAIgEAIgCIAPgBQALAAAJABQAKACAGAFQAHAFAEAIQADAIAAAMIAAA+IABAQQABAHADAFIgrAAIgBgHIgBgIIAAAAQgEAJgGAEQgIAEgJAAQgLAAgGgCgAAEAFIgHADQgFACgCAEQgCAEAAAHQAAAGADAEQADAEAEAAQAGAAADgFQADgFAAgLIAAgQIAAAAQgCADgEAAg");
	this.shape_3.setTransform(-53.4,28.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnA5QgGgFgDgJQgDgIAAgMIAmAAIAAABQAAAJADAEQADAEAHAAQADAAADgEQAEgEAAgHIgCgHIgCgFQgCgCgCgBIgGgBIgIAAIAAgXIAGAAQAHAAADgDQAEgDAAgLQAAgHgEgCIgFgBQgEAAgEADQgDAEAAAHIAAABIglAAQAAgMAEgIQAEgIAHgFQAHgFAJgBQAJgCAJAAQAaAAAMAIQAFAEAEAGQACAHAAAJQABAKgHAIQgDAFgDACQgFADgEABQALACAHAGQADAEACAFQABAFAAAHQAAALgDAIQgEAIgIAFQgIAFgJACQgKACgKAAQgZAAgOgKg");
	this.shape_4.setTransform(-64.8,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.4,10,66.1,32.8);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUBAIAAhfIgeAAIAAghIBlAAIAAAhIgeAAIAABfg");
	this.shape.setTransform(79.5,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXBAQgKgEgHgIQgGgIgDgNQgDgMAAgTQAAgRADgNQADgNAHgIQAGgIALgEQALgDAMAAQANAAAJADQALADAGAHQAHAHADAMQADAMAAASIAAALIg+AAIAAARQAAALAEADQADAEADAAQAFAAAEgFQADgFAAgNIAnAAQAAAYgMAMQgMAMgbAAQgNAAgLgDgAgHgjQgCAFAAAKIAAAGIAWAAIAAgGQAAgKgCgFQgEgFgGAAQgFAAgDAFg");
	this.shape_1.setTransform(68.7,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAKBAIAAgyIgTAAIAAAyIgrAAIAAiAIArAAIAAAuIATAAIAAguIArAAIAACAg");
	this.shape_2.setTransform(56.6,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.4,-20,38.4,32.8);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVBiIAAgrIAsAAIAAArgAgSApIgEhIIAAhCIAtAAIAABCIgGBIg");
	this.shape.setTransform(106.2,10.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAnBKIAAhqIgWBqIghAAIgWhnIAABnIguAAIAAiTIBGAAIAOBbIABAAIAPhbIBFAAIAACTg");
	this.shape_1.setTransform(92.3,13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaBKQgMgFgIgJQgHgJgEgOQgDgPAAgWQAAgTADgPQAEgPAIgKQAIgJAMgFQAMgEAOABQAPAAAMADQAKAEAIAIQAIAJADANQAEAOAAAUIAAAOIhIAAIAAATQABAMAEAEQAEAEADAAQAHAAADgGQAEgEAAgQIAtAAQgBAcgNAOQgOANgfAAQgPAAgMgDgAgHgoQgDAFgBAMIAAAHIAaAAIAAgHQAAgMgDgFQgDgGgIAAQgFAAgDAGg");
	this.shape_2.setTransform(76.3,13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag9BKIgIgBIAAgkIAEAAIAGAAQAEgBACgDQACgDACgHIACgUIACgeIABgvIByAAIAACTIgxAAIAAhuIgVAAIAAAqQgBASgDANQgCAMgFAIQgEAIgGAEQgGAEgHABIgSACg");
	this.shape_3.setTransform(61.6,13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfBgQgLgFgHgKQgHgKgDgOQgCgOAAgRIABgvQABgOAGgWQAGgPALgIQALgJAUgDIANgCIAIgBIAFgCIACgDIAkAAQgBAMgCAIQgCAHgGAFQgGAFgKACIgaAFQgTACgLAKQgLAJgBAVIABAAQAFgQAMgIQAFgFAHgCQAGgCAIAAQAPAAALAFQAKAFAGAJQAHAJACAOQADAMAAASQAAASgDAOQgDAOgHAKQgHAKgNAFQgMAFgRAAQgSAAgNgFgAgFgQQgBACgCAFIgDALIgBAXIABAYIACAOQACAFACABQADACACAAQACAAADgCQACgBACgFIACgOIABgXIgBgYIgCgLQgCgFgCgCQgDgBgCAAg");
	this.shape_4.setTransform(48,10.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSBMQgJgBgGgDQgNgHgGgKQgHgKgBgPQgCgOAAgQQAAgNACgOQACgOAHgLQADgGAFgEQAFgEAGgDQANgIATABQAVgBANAHQAMAGAHALQAGAKACAPQACAOAAAOQAAAPgCAOQgDANgGAMQgHAKgMAHQgMAHgVgBQgJAAgJgBgAgFgqQgDABgCAGIgCAOIAAAVIAAAXIACAPQACAFADACQADACACAAQAEAAACgCQADgCACgFIACgPIAAgXIAAgVIgCgOQgCgGgDgBQgCgCgEAAQgCAAgDACg");
	this.shape_5.setTransform(34.1,13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag+BkIAAjDIAwAAIAAAVIAAAAQAFgNAIgGQAGgGANAAQAMAAAJAFQAJAFAFAKQAKAUAAAqQAAATgEAPQgCAOgHAJQgFAIgJAEQgJADgKAAQgKAAgHgEQgIgEgEgMIgBAAIAABBgAgFg8QgDACgCAFIgCANIgBAUIABAUIACALQACAEADACQACACADAAQADAAADgCQADgCACgEIACgLIAAgUIAAgUIgCgNQgCgFgDgCQgDgCgDAAQgDAAgCACg");
	this.shape_6.setTransform(20.3,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAMBKIAAhvIgXAAIAABvIgxAAIAAiTIB5AAIAACTg");
	this.shape_7.setTransform(5.7,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-8.4,116.7,37.7);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwAzIAAhlIBhAAIAAAZIhFAAIAAAPIA1AAIAAAXIg1AAIAAAOIBFAAIAAAYg");
	this.shape.setTransform(145.6,33.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwAzIAAhlIBhAAIAAAZIhFAAIAAAPIA1AAIAAAXIg1AAIAAAOIBFAAIAAAYg");
	this.shape_1.setTransform(133.9,33.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaAzIAAgmIg0AAIAAAmIgbAAIAAhlIAbAAIAAAoIA0AAIAAgoIAcAAIAABlg");
	this.shape_2.setTransform(121.3,33.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAEA1IgbgBIgcgCIAAhmIBhAAIAAAZIhFAAIAAAPIAPgBIAPAAIAEAAQAIAAAMACQAIADAEAEQAFAEACAEQACAFAAAHIAAAGQAAAGgCAGQgCAGgFAEQgFAEgJACQgNADgIAAgAgXALIAAAQIAPABIALAAIAOgBQAFAAACgCIADgCIAAgEIAAgEIgDgDIgHgCIgPAAIgLAAg");
	this.shape_3.setTransform(108.7,33.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBA2QgRAAgLgEQgLgEgHgHIgGgHQgCgEgBgFQgDgJAAgKIAAgGQAAgLADgJQACgJAHgHQAHgHALgEQALgEARAAIADAAIAPABIANADIAKAFIAIAGQAGAHADAJQACAJABALIAAAGQgBAKgCAJIgEAJIgFAHIgIAHIgKAEIgNADIgPABgAgSgaQgGADgDAEQgDAEAAAFIgBAKIABALQAAAFADAFQADAEAGACQAIADAKAAQALAAAHgDQAGgCADgEQADgFACgFIAAgLIAAgKQgCgFgDgEQgDgEgGgDQgKgCgIAAQgNAAgFACg");
	this.shape_4.setTransform(95.5,33.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzA1IAAhmIAcgCIAbgBIAEAAIAMABIAJACQAJADAFAFQAFAFACAHQACAHAAAHIAAAGQAAAIgCAFQgCAHgFAFQgEAFgIADIgJACIgLABIgEAAIgPgBQgIAAgHgBIAAAcgAgXgaIAAAaIAOACIALAAIANgBIAHgCQAAAAABgBQAAAAAAgBQABAAAAgBQAAgBAAAAIAAgHIAAgGQAAgDgCgCQgCgCgFgBIgMgBIgLAAg");
	this.shape_5.setTransform(82.5,33.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AApBBIAAgcIhRAAIAAARIgSALIgGAAIAAg0IALAAQADgCACgFQABgFAAgGIADg7IBeAAIAABNIAQAAIAAApIgTALgAgUgGIgBAJIgDAKIAuAAIAAg0IgoAAg");
	this.shape_6.setTransform(69.5,35.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBA2QgRAAgLgEQgLgEgHgHIgGgHQgCgEgBgFQgDgJAAgKIAAgGQAAgLADgJQADgJAGgHQAHgHALgEQALgEARAAIADAAIAPABIANADIAKAFIAIAGQAGAHADAJQADAJAAALIAAAGQAAAKgDAJIgDAJIgGAHIgIAHIgKAEIgNADIgPABgAgRgaQgHADgDAEQgDAEgBAFIAAAKIAAALQABAFADAFQADAEAHACQAGADALAAQALAAAHgDQAGgCADgEQADgFACgFIAAgLIAAgKQgCgFgDgEQgDgEgGgDQgKgCgIAAQgNAAgEACg");
	this.shape_7.setTransform(55.8,33.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZAzIAAhMIgxAAIAABMIgbAAIAAhlIBoAAIAABlg");
	this.shape_8.setTransform(42.5,33.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.instance = new lib.bbbo();
	this.instance.parent = this;
	this.instance.setTransform(-35,2,0.679,0.679);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,2,264.2,61.1);


(lib.Символ8копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.847)").s().p("A2LAAMAsXgsYMAAABYxg");
	this.shape.setTransform(96.8,217);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.3,-67.1,284.1,568.2);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("A2LAAMAsXgsYMAAABYxg");
	this.shape.setTransform(96.8,217);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.3,-67.1,284.1,568.2);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Izo1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,29);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.O1();
	this.instance.parent = this;
	this.instance.setTransform(-64.5,-77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,-77.5,129,155);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhIB4IgHAAIgIgBIgFgBIAAgxIADAAIAFAAIAKgBQAFgBADgGQADgFACgMIAEgiIACgzIAAhPICVAAIAADuIg/AAIAAi8IgdAAQAAA6gCAkQAAAlgIAVQgHAWgNAIQgIAFgJABQgJACgLAAg");
	this.shape.setTransform(13.6,4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAeB3IgGgqIgwAAIgGAqIhCAAIA6juIBMAAIA7DugAARAeIgRhjIAAAAIgQBjIAhAAg");
	this.shape_1.setTransform(-5,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeB3IAAi5IguAAIAAg1ICZAAIAAA1IguAAIAAC5g");
	this.shape_2.setTransform(-22.1,3.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmB1QgJgDgGgGQgHgFgFgHQgJgPgDgYQgEgXAAgiQAAgVAFgjQADgYAKgPQALgPAQgGQAIgEAKgBIAVgCQAVAAAPAGQAOAFAKAKQAJAKAFAOQADAOAAARIAAAPIg8AAIAAgNQAAgVgEgHQgEgIgJAAQgFAAgFAEQgEAEgBAJQgDAKgBAQIgBAmIABAoQABAQADAJQABAKAEADQAFAEAFAAQAFAAAFgDQADgDACgGIADgSIABgdIA8AAIAAASQAAAagGAQQgHAQgLAJQgMAJgOADQgOAEgPAAQgYAAgRgHg");
	this.shape_3.setTransform(-38.8,3.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3B4IgLgCIAAgvIAGABIAIAAQAMAAAFgHQAGgHADgKIhAioIBGAAIAWBpIABAAIAVhpIBDAAIg4CqIgMAgQgGANgIAIQgJAJgKAEQgNAFgSAAg");
	this.shape_4.setTransform(-56.5,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.1,-19.6,95.6,45.9);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTA9QgEgCgEgDQgDgCgDgEQgDgEgBgFIgEgLQgCgMAAgSQAAgKACgSIAEgLQABgFADgEQAFgIAJgDIAJgDIAKgBIALABIAJADQAFABADADIAHAHQAEAIADAMQACASAAAKQgBAWgBAIQgDAMgEAIQgDAEgEACQgDADgFACQgIADgMAAQgLAAgIgDgAgEgnQgCACgCAFIgBANIAAATIAAAVIABANQACAFACACQACACACAAQAEAAACgCQABgCACgFIABgNIAAgVIAAgTIgBgNQgCgFgBgCQgCgCgEAAQgCAAgCACg");
	this.shape.setTransform(15.8,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghA+IAAh7IBEAAIAAAaIgkAAIAABhg");
	this.shape_1.setTransform(7.5,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUA9QgEgCgDgDQgEgCgCgEQgDgEgCgFIgCgLQgDgMAAgSQAAgKADgSIACgLQACgFADgEQAFgIAIgDIAKgDIAKgBIALABIAKADQAEABAEADIAFAHQAGAIACAMQACASAAAKQAAAWgCAIQgCAMgGAIQgCAEgDACQgEADgEACQgJADgMAAQgLAAgJgDgAgEgnQgCACgBAFIgCANIgBATIABAVIACANQABAFACACQACACACAAQADAAACgCQACgCACgFIACgNIAAgVIAAgTIgCgNQgCgFgCgCQgCgCgDAAQgCAAgCACg");
	this.shape_2.setTransform(-1.7,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPA+IAAhgIgYAAIAAgbIBPAAIAAAbIgZAAIAABgg");
	this.shape_3.setTransform(-10.6,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUA9QgEgCgDgDQgEgCgCgEQgFgIgCgMQgBgMAAgSQAAgKABgSQADgNAFgIQAGgHAIgEIAJgCIAKgBQALAAAIADQAIADAEAFQAFAFACAHQACAHAAAJIAAAIIgfAAIAAgHQAAgKgCgEQgCgEgFAAQgCAAgCACQgCACgBAFIgBANIgBATIABAVIABANQABAFACACQACACACAAQADAAACgCQACgBABgEIACgJIAAgPIAfAAIAAAJQABAOgEAIQgEAIgFAFQgGAFgIABQgHACgIAAQgLAAgKgDg");
	this.shape_4.setTransform(-19.3,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQA+IgEgWIgYAAIgDAWIgiAAIAeh7IAmAAIAfB7gAAIAPIgIgzIAAAAIgIAzIAQAAg");
	this.shape_5.setTransform(-28.8,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAJA+IAAguIgDAAIgFABIgDAAIgDAAQgTABgIgKQgJgIAAgSIAAgrIAhAAIAAAqIABAHIACAEIAEACIACAAIAEAAIAEgBIAAg2IAhAAIAAB7g");
	this.shape_6.setTransform(-38.7,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPA+IAAhgIgYAAIAAgbIBPAAIAAAbIgZAAIAABgg");
	this.shape_7.setTransform(-51.9,2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUA9QgDgCgEgDQgDgCgDgEQgDgEgCgFIgCgLQgDgMAAgSQAAgKADgSIACgLQACgFADgEQAFgIAIgDIAKgDIAKgBIALABIAKADQAEABAEADIAFAHQAFAIADAMQACASAAAKQAAAWgCAIQgDAMgFAIQgCAEgDACQgEADgEACQgJADgMAAQgLAAgJgDgAgEgnQgCACgCAFIgBANIgBATIABAVIABANQACAFACACQACACACAAQAEAAABgCQACgCACgFIACgNIAAgVIAAgTIgCgNQgCgFgCgCQgBgCgEAAQgCAAgCACg");
	this.shape_8.setTransform(-60.8,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.1,-10.2,89.3,23.9);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQBOIAAgdIAcAAIAAAdgAgOAjIAAgIQAAgLADgIQADgHAHgHIAHgJQAEgFACgFQACgHAAgGQAAgIgEgGQgDgEgHgBQgHAAgEAHQgDAHAAAKIAAAGIgdAAIAAgFQAAgKADgIQADgIAFgGQAFgGAIgDQAIgEALAAQAKAAAIADQAJADAGAFQAFAHADAHQADAIAAAJQAAAKgDAHQgDAIgIAJIgJAIQgFAGgDAFQgCAFAAAJIAAADg");
	this.shape.setTransform(18.7,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAbBNIgHghIgnAAIgHAhIghAAIApiZIAkAAIAqCZgAAPASIgPhDIAAAAIgOBDIAdAAg");
	this.shape_1.setTransform(7.6,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMBOQgHgBgGgDQgKgGgFgKQgGgLgCgPQgBgOAAgSQAAgQABgPQACgPAGgKQAFgLAKgGQALgGAPAAQAJAAAGACQAHABAEADQALAFAEAIQAFAJABAJIACASIggAAQAAgQgEgIQgCgEgEgCQgDgCgFAAQgEAAgEADQgEAEgDAHQgBAHgBALIgBAaIABAcQACALACAGQACAGAEACQAEACADAAQAEAAADgBQAEgCADgEQADgEABgIQABgHAAgNIAgAAQAAANgCALQgCALgFAJQgGAIgKAFQgJAFgQAAQgGAAgHgCg");
	this.shape_2.setTransform(-4.3,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUBNIAAhhIgkBhIghAAIAAiZIAeAAIAABhIAkhhIAhAAIAACZg");
	this.shape_3.setTransform(-16.3,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxBNIAAiZIAyAAQAJAAAJACQAIACAGAEQAGAFADAIQADAHAAALQABANgHAJQgFAJgMADIAAABQAGABAGABQAEACAFAFQAHAJAAAQQAAAIgDAJQgBAJgHAFQgFAHgJADQgKAEgOAAgAgSA2IAMAAQAGAAACgBQAFgCADgCQAIgFgBgOQAAgGgBgFQgCgEgEgDQgDgCgEgCIgIAAIgNAAgAgSgNIAJAAIAJgBQAFAAADgDQAGgEAAgMQAAgGgCgEQgBgDgDgDQgFgEgKAAIgLAAg");
	this.shape_4.setTransform(-28.3,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvBNIAAiZIA0AAQAMAAAJAEQAIAEAFAGQAFAHACAJQACAHAAAKQAAALgDAKQgEAIgGAEQgHAFgJADQgJADgKAAIgQAAIAAA+gAgQgGIAOAAQAIAAAFgFQADgDACgFQABgEAAgGQAAgMgFgGQgDgDgEgCQgEgBgEAAIgNAAg");
	this.shape_5.setTransform(-39.8,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrBNIAAiZIBVAAIAAAZIg2AAIAAAlIAzAAIAAAXIgzAAIAAArIA4AAIAAAZg");
	this.shape_6.setTransform(-50.6,2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNBOQgGgBgFgDQgLgGgGgKQgFgLgCgPQgBgOgBgSQABgQABgPQACgPAFgKQAGgLALgGQAKgGAQAAQAHAAAIACQAGABAFADQAKAFAEAIQAFAJABAJIABASIgfAAQAAgQgEgIQgCgEgDgCQgFgCgEAAQgFAAgDADQgEAEgCAHQgCAHgBALIgBAaIABAcQABALADAGQACAGAEACQAEACADAAQAEAAAEgBQADgCACgEQADgEACgIQABgHABgNIAeAAQAAANgCALQgBALgGAJQgFAIgJAFQgKAFgPAAQgHAAgIgCg");
	this.shape_7.setTransform(-61.9,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.6,-12.6,95.5,29.3);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Izo1();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-14.5,31,29);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(95.3,33,1,1,0,0,0,95.3,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.07,scaleY:1.07,x:95.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,2,264.2,61.1);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(77.5,77.5,1.052,1.052);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.7,-4,135.7,163);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(66.3,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-0.8,95.6,45.9);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.9,0.9,89.3,23.9);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(69.6,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.5,29.3);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,15.5,14.5);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-2,-2,35,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-14.5,31,29);


(lib.Символ11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance_1 = new lib.Анимация1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.5,1.3,0.685,0.685);
	this.instance_1.alpha = 0.98;

	this.instance_2 = new lib.Анимация2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(15.5,-37.5,1.2,1.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},110).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},37).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.7,scaleY:0.7,y:0.9,alpha:1},1).to({_off:true,scaleX:1.2,scaleY:1.2,y:-37.5,alpha:0},110).wait(1).to({_off:false,scaleX:0.23,scaleY:0.23,y:14.5,alpha:0.41},0).to({scaleX:0.67,scaleY:0.67,y:1.6,alpha:0.969},37).wait(1));

	// Слой 3
	this.instance_3 = new lib.Анимация1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(15.5,-12,0.866,0.866);
	this.instance_3.alpha = 0.66;

	this.instance_4 = new lib.Анимация2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(15.5,-37.5,1.2,1.2);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},73).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},39).to({state:[{t:this.instance_3}]},36).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true,scaleX:1.2,scaleY:1.2,y:-37.5,alpha:0},73).wait(1).to({_off:false,scaleX:0.23,scaleY:0.23,y:14.5,alpha:0.41},0).to({scaleX:0.7,scaleY:0.7,y:0.9,alpha:1},39).to({scaleX:0.86,scaleY:0.86,y:-11.6,alpha:0.672},36).wait(1));

	// Слой 2
	this.instance_5 = new lib.Анимация1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(15.5,-24.6,1.031,1.031);
	this.instance_5.alpha = 0.34;

	this.instance_6 = new lib.Анимация2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(15.5,-37.5,1.2,1.2);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},37).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},39).to({state:[{t:this.instance_5}]},72).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,scaleX:1.2,scaleY:1.2,y:-37.5,alpha:0},37).wait(1).to({_off:false,scaleX:0.23,scaleY:0.23,y:14.5,alpha:0.41},0).to({scaleX:0.7,scaleY:0.7,y:0.9,alpha:1},39).to({scaleX:1.03,scaleY:1.03,y:-24.3,alpha:0.34},72).wait(1));

	// Слой 1
	this.instance_7 = new lib.Анимация1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(15.5,14.5,0.232,0.232);
	this.instance_7.alpha = 0.41;

	this.instance_8 = new lib.Анимация2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(15.5,-37.5,1.2,1.2);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_7}]},39).to({state:[{t:this.instance_8}]},110).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:0.7,scaleY:0.7,y:0.9,alpha:1},39).to({_off:true,scaleX:1.2,scaleY:1.2,y:-37.5,alpha:0},110).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-39.5,32,57.4);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11_1();
	this.instance.parent = this;
	this.instance.setTransform(135.6,179.5,6.091,2.95,-14.7,0,0,15.6,14.7);

	this.instance_1 = new lib.Символ11_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(145.6,199.2,6.091,1.782,-14.7,0,0,15.6,14.6);

	this.instance_2 = new lib.Символ11_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(125.6,189.2,6.091,1.782,-14.7,0,0,15.6,14.6);

	this.instance_3 = new lib.Символ11_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(135.6,199.2,6.091,1.782,-14.7,0,0,15.6,14.6);

	this.instance_4 = new lib.Символ11_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(135.6,199.2,6.091,1.782,-14.7,0,0,15.6,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,228,210.5);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(120.4,172.1,1,1,0,0,0,120.4,114.9);

	this.instance_1 = new lib.car();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,273.3,273);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_708 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(708).call(this.frame_708).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#787773").ss(3,1,1).p("A3WTXMAAAgm3MAutAAAMAAAAm3IAAAKA3WThIAAgKAXXTXMgutAAA");
	this.shape.setTransform(142.5,91);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#787773").ss(3,1,1).p("A3WThIAAgKAXXTXIAAAKAXXTXMgutAAAMAAAgm3MAutAAAg");
	this.shape_1.setTransform(142.5,91);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(247,68,67,0.498)").ss(3,1,1).p("AXSzWIAKAAA3HzgMAuZAAAIAAAKMAAAAmtMgujAAAMAAAgm3IgKAAA3bThIAAgKIAKAAAXSTXIAAAK");
	this.shape_2.setTransform(143,91);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(247,68,67,0.498)").ss(3,1,1).p("A3HzgMAuZAAAIAAAKIAKAAAXSTXIAAAKAXSzWMAAAAmtMgujAAAMAAAgm3IgKAAA3bThIAAgKIAKAA");
	this.shape_3.setTransform(143,91);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(247,68,67,0.498)").ss(3,1,1).p("AXSzWIAKAAA3HzgMAuZAAAIAAAKMAAAAmtIAAAKA3RTXMAAAgm3IgKAAA3bThIAAgKIAKAAAXSTXMgujAAA");
	this.shape_4.setTransform(143,91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},81).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},74).to({state:[{t:this.shape}]},81).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_1}]},74).to({state:[{t:this.shape}]},81).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape}]},74).to({state:[{t:this.shape_1}]},81).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},74).to({state:[{t:this.shape}]},81).to({state:[{t:this.shape_3}]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},81).wait(156).to({_off:false},0).to({_off:true},1).wait(155).to({_off:false},0).to({_off:true},1).wait(74).to({_off:false},0).to({_off:true},81).wait(156).to({_off:false},0).to({_off:true},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(81).to({_off:false},0).to({_off:true},1).wait(74).to({_off:false},0).to({_off:true},81).wait(75).to({_off:false},0).to({_off:true},81).wait(156).to({_off:false},0).to({_off:true},1).wait(74).to({_off:false},0).to({_off:true},81).wait(4));

	// СЕРВИСА?
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(95,126,1.135,1.135,0,0,0,69.7,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({scaleX:1.3,scaleY:1.3,x:95.1,y:126.1},4,cjs.Ease.get(-1)).to({scaleX:1.14,scaleY:1.14,x:95,y:126},5,cjs.Ease.get(1)).wait(31).to({scaleX:1.3,scaleY:1.3,x:95.1,y:126.1},4,cjs.Ease.get(-1)).to({scaleX:1.14,scaleY:1.14,x:95,y:126},5,cjs.Ease.get(1)).wait(22).to({regY:12.8,x:-63.6,y:126.1},2,cjs.Ease.get(-1)).to({regX:69.6,regY:12.7,x:-301.7,y:126},3,cjs.Ease.get(1)).wait(66).to({regX:69.7,regY:12.8,x:-63.6,y:126.1},3,cjs.Ease.get(-1)).to({regY:12.7,x:95,y:126},2,cjs.Ease.get(1)).wait(9).to({scaleX:1.3,scaleY:1.3,x:95.1,y:126.1},4,cjs.Ease.get(-1)).to({scaleX:1.14,scaleY:1.14,x:95,y:126},5,cjs.Ease.get(1)).wait(31).to({scaleX:1.3,scaleY:1.3,x:95.1,y:126.1},4,cjs.Ease.get(-1)).to({scaleX:1.14,scaleY:1.14,x:95,y:126},5,cjs.Ease.get(1)).wait(22).to({regY:12.8,x:-63.6,y:126.1},2,cjs.Ease.get(-1)).to({regX:69.6,regY:12.7,x:-301.7,y:126},3,cjs.Ease.get(1)).wait(66).to({regX:69.7,regY:12.8,x:-63.6,y:126.1},3,cjs.Ease.get(-1)).to({regY:12.7,x:95,y:126},2,cjs.Ease.get(1)).wait(9).to({scaleX:1.3,scaleY:1.3,x:95.1,y:126.1},4,cjs.Ease.get(-1)).to({scaleX:1.14,scaleY:1.14,x:95,y:126},5,cjs.Ease.get(1)).wait(31).to({scaleX:1.3,scaleY:1.3,x:95.1,y:126.1},4,cjs.Ease.get(-1)).to({scaleX:1.14,scaleY:1.14,x:95,y:126},5,cjs.Ease.get(1)).wait(22).to({regY:12.8,x:-63.6,y:126.1},2,cjs.Ease.get(-1)).to({regX:69.6,regY:12.7,x:-301.7,y:126},3,cjs.Ease.get(1)).wait(66).to({regX:69.7,regY:12.8,x:-63.6,y:126.1},3,cjs.Ease.get(-1)).to({regY:12.7,x:95,y:126},2,cjs.Ease.get(1)).wait(9).to({scaleX:1.3,scaleY:1.3,x:95.1,y:126.1},4,cjs.Ease.get(-1)).to({scaleX:1.14,scaleY:1.14,x:95,y:126},5,cjs.Ease.get(1)).wait(31).to({scaleX:1.3,scaleY:1.3,x:95.1,y:126.1},4,cjs.Ease.get(-1)).to({scaleX:1.14,scaleY:1.14,x:95,y:126},5,cjs.Ease.get(1)).wait(22).to({regY:12.8,x:-63.6,y:126.1},2,cjs.Ease.get(-1)).to({regX:69.6,regY:12.7,x:-301.7,y:126},3,cjs.Ease.get(1)).wait(66).to({regX:69.7,regY:12.8,x:-63.6,y:126.1},3,cjs.Ease.get(-1)).to({regY:12.7,x:95,y:126},2,cjs.Ease.get(1)).wait(9).to({scaleX:1.3,scaleY:1.3,x:95.1,y:126.1},4,cjs.Ease.get(-1)).to({scaleX:1.14,scaleY:1.14,x:95,y:126},5,cjs.Ease.get(1)).wait(31).to({scaleX:1.3,scaleY:1.3,x:95.1,y:126.1},4,cjs.Ease.get(-1)).to({scaleX:1.14,scaleY:1.14,x:95,y:126},5,cjs.Ease.get(1)).wait(22).to({regY:12.8,x:-63.6,y:126.1},2,cjs.Ease.get(-1)).to({regX:69.6,regY:12.7,x:-301.7,y:126},3,cjs.Ease.get(1)).wait(1));

	// ОТ ЧАСТОГО
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(93,93.5,1.135,1.135,0,0,0,67.2,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({regY:10.3,scaleX:1.28,scaleY:1.28,y:93.6},4,cjs.Ease.get(-1)).to({regY:10.2,scaleX:1.14,scaleY:1.14,y:93.5},5,cjs.Ease.get(1)).wait(31).to({regY:10.3,scaleX:1.28,scaleY:1.28,y:93.6},4,cjs.Ease.get(-1)).to({regY:10.2,scaleX:1.14,scaleY:1.14,y:93.5},5,cjs.Ease.get(1)).wait(26).to({regY:10.3,x:-65.7,y:93.6},2,cjs.Ease.get(-1)).to({regX:67.1,regY:10.2,x:-303.7,y:93.5},3,cjs.Ease.get(1)).wait(66).to({regX:67.2,regY:10.3,x:-65.7,y:93.6},3,cjs.Ease.get(-1)).to({regY:10.2,x:93,y:93.5},2,cjs.Ease.get(1)).wait(5).to({regY:10.3,scaleX:1.28,scaleY:1.28,y:93.6},4,cjs.Ease.get(-1)).to({regY:10.2,scaleX:1.14,scaleY:1.14,y:93.5},5,cjs.Ease.get(1)).wait(31).to({regY:10.3,scaleX:1.28,scaleY:1.28,y:93.6},4,cjs.Ease.get(-1)).to({regY:10.2,scaleX:1.14,scaleY:1.14,y:93.5},5,cjs.Ease.get(1)).wait(26).to({regY:10.3,x:-65.7,y:93.6},2,cjs.Ease.get(-1)).to({regX:67.1,regY:10.2,x:-303.7,y:93.5},3,cjs.Ease.get(1)).wait(66).to({regX:67.2,regY:10.3,x:-65.7,y:93.6},3,cjs.Ease.get(-1)).to({regY:10.2,x:93,y:93.5},2,cjs.Ease.get(1)).wait(5).to({regY:10.3,scaleX:1.28,scaleY:1.28,y:93.6},4,cjs.Ease.get(-1)).to({regY:10.2,scaleX:1.14,scaleY:1.14,y:93.5},5,cjs.Ease.get(1)).wait(31).to({regY:10.3,scaleX:1.28,scaleY:1.28,y:93.6},4,cjs.Ease.get(-1)).to({regY:10.2,scaleX:1.14,scaleY:1.14,y:93.5},5,cjs.Ease.get(1)).wait(26).to({regY:10.3,x:-65.7,y:93.6},2,cjs.Ease.get(-1)).to({regX:67.1,regY:10.2,x:-303.7,y:93.5},3,cjs.Ease.get(1)).wait(66).to({regX:67.2,regY:10.3,x:-65.7,y:93.6},3,cjs.Ease.get(-1)).to({regY:10.2,x:93,y:93.5},2,cjs.Ease.get(1)).wait(5).to({regY:10.3,scaleX:1.28,scaleY:1.28,y:93.6},4,cjs.Ease.get(-1)).to({regY:10.2,scaleX:1.14,scaleY:1.14,y:93.5},5,cjs.Ease.get(1)).wait(31).to({regY:10.3,scaleX:1.28,scaleY:1.28,y:93.6},4,cjs.Ease.get(-1)).to({regY:10.2,scaleX:1.14,scaleY:1.14,y:93.5},5,cjs.Ease.get(1)).wait(26).to({regY:10.3,x:-65.7,y:93.6},2,cjs.Ease.get(-1)).to({regX:67.1,regY:10.2,x:-303.7,y:93.5},3,cjs.Ease.get(1)).wait(66).to({regX:67.2,regY:10.3,x:-65.7,y:93.6},3,cjs.Ease.get(-1)).to({regY:10.2,x:93,y:93.5},2,cjs.Ease.get(1)).wait(5).to({regY:10.3,scaleX:1.28,scaleY:1.28,y:93.6},4,cjs.Ease.get(-1)).to({regY:10.2,scaleX:1.14,scaleY:1.14,y:93.5},5,cjs.Ease.get(1)).wait(31).to({regY:10.3,scaleX:1.28,scaleY:1.28,y:93.6},4,cjs.Ease.get(-1)).to({regY:10.2,scaleX:1.14,scaleY:1.14,y:93.5},5,cjs.Ease.get(1)).wait(26).to({regY:10.3,x:-65.7,y:93.6},2,cjs.Ease.get(-1)).to({regX:67.1,regY:10.2,x:-303.7,y:93.5},3,cjs.Ease.get(1)).wait(1));

	// УСТАЛ
	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(92.1,57.8,1.135,1.135,0,0,0,66.3,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:66.4,scaleX:1.29,scaleY:1.29,x:92.2,y:57.9},4,cjs.Ease.get(-1)).to({regX:66.3,scaleX:1.14,scaleY:1.14,x:92.1,y:57.8},5,cjs.Ease.get(1)).wait(31).to({regX:66.4,scaleX:1.29,scaleY:1.29,x:92.2,y:57.9},4,cjs.Ease.get(-1)).to({regX:66.3,scaleX:1.14,scaleY:1.14,x:92.1,y:57.8},5,cjs.Ease.get(1)).wait(30).to({regY:18.7,x:-66.6,y:57.7},2,cjs.Ease.get(-1)).to({regX:66.2,regY:18.8,x:-304.7,y:57.8},3,cjs.Ease.get(1)).wait(66).to({regX:66.3,regY:18.7,x:-66.6,y:57.7},3,cjs.Ease.get(-1)).to({regY:18.8,x:92.1,y:57.8},2,cjs.Ease.get(1)).wait(1).to({regX:66.4,scaleX:1.29,scaleY:1.29,x:92.2,y:57.9},4,cjs.Ease.get(-1)).to({regX:66.3,scaleX:1.14,scaleY:1.14,x:92.1,y:57.8},5,cjs.Ease.get(1)).wait(31).to({regX:66.4,scaleX:1.29,scaleY:1.29,x:92.2,y:57.9},4,cjs.Ease.get(-1)).to({regX:66.3,scaleX:1.14,scaleY:1.14,x:92.1,y:57.8},5,cjs.Ease.get(1)).wait(30).to({regY:18.7,x:-66.6,y:57.7},2,cjs.Ease.get(-1)).to({regX:66.2,regY:18.8,x:-304.7,y:57.8},3,cjs.Ease.get(1)).wait(66).to({regX:66.3,regY:18.7,x:-66.6,y:57.7},3,cjs.Ease.get(-1)).to({regY:18.8,x:92.1,y:57.8},2,cjs.Ease.get(1)).wait(1).to({regX:66.4,scaleX:1.29,scaleY:1.29,x:92.2,y:57.9},4,cjs.Ease.get(-1)).to({regX:66.3,scaleX:1.14,scaleY:1.14,x:92.1,y:57.8},5,cjs.Ease.get(1)).wait(31).to({regX:66.4,scaleX:1.29,scaleY:1.29,x:92.2,y:57.9},4,cjs.Ease.get(-1)).to({regX:66.3,scaleX:1.14,scaleY:1.14,x:92.1,y:57.8},5,cjs.Ease.get(1)).wait(30).to({regY:18.7,x:-66.6,y:57.7},2,cjs.Ease.get(-1)).to({regX:66.2,regY:18.8,x:-304.7,y:57.8},3,cjs.Ease.get(1)).wait(66).to({regX:66.3,regY:18.7,x:-66.6,y:57.7},3,cjs.Ease.get(-1)).to({regY:18.8,x:92.1,y:57.8},2,cjs.Ease.get(1)).wait(1).to({regX:66.4,scaleX:1.29,scaleY:1.29,x:92.2,y:57.9},4,cjs.Ease.get(-1)).to({regX:66.3,scaleX:1.14,scaleY:1.14,x:92.1,y:57.8},5,cjs.Ease.get(1)).wait(31).to({regX:66.4,scaleX:1.29,scaleY:1.29,x:92.2,y:57.9},4,cjs.Ease.get(-1)).to({regX:66.3,scaleX:1.14,scaleY:1.14,x:92.1,y:57.8},5,cjs.Ease.get(1)).wait(30).to({regY:18.7,x:-66.6,y:57.7},2,cjs.Ease.get(-1)).to({regX:66.2,regY:18.8,x:-304.7,y:57.8},3,cjs.Ease.get(1)).wait(66).to({regX:66.3,regY:18.7,x:-66.6,y:57.7},3,cjs.Ease.get(-1)).to({regY:18.8,x:92.1,y:57.8},2,cjs.Ease.get(1)).wait(1).to({regX:66.4,scaleX:1.29,scaleY:1.29,x:92.2,y:57.9},4,cjs.Ease.get(-1)).to({regX:66.3,scaleX:1.14,scaleY:1.14,x:92.1,y:57.8},5,cjs.Ease.get(1)).wait(31).to({regX:66.4,scaleX:1.29,scaleY:1.29,x:92.2,y:57.9},4,cjs.Ease.get(-1)).to({regX:66.3,scaleX:1.14,scaleY:1.14,x:92.1,y:57.8},5,cjs.Ease.get(1)).wait(30).to({regY:18.7,x:-66.6,y:57.7},2,cjs.Ease.get(-1)).to({regX:66.2,regY:18.8,x:-304.7,y:57.8},3,cjs.Ease.get(1)).wait(1));

	// Слой 4 - копия: 2 - копия: 2
	this.instance_3 = new lib.Символ18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(188.3,102.3,0.927,0.927,0,0,0,136.7,143.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(81).to({x:458.3},3).wait(72).to({x:188.3},0).wait(81).to({x:458.3},3).wait(72).to({x:188.3},0).wait(81).to({x:458.3},3).wait(72).to({x:188.3},0).wait(81).to({x:458.3},3).wait(72).to({x:188.3},0).wait(81).to({x:458.3},3).wait(1));

	// Слой 16
	this.instance_4 = new lib.Символ17();
	this.instance_4.parent = this;
	this.instance_4.setTransform(51,171.4,1,1,0,0,0,30,37.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(79).to({x:31},2,cjs.Ease.get(-1)).to({x:-69},3,cjs.Ease.get(1)).wait(66).to({x:31},3).to({x:52},2).wait(1).to({x:51},0).wait(79).to({x:31},2,cjs.Ease.get(-1)).to({x:-69},3,cjs.Ease.get(1)).wait(66).to({x:31},3).to({x:52},2).wait(1).to({x:51},0).wait(79).to({x:31},2,cjs.Ease.get(-1)).to({x:-69},3,cjs.Ease.get(1)).wait(66).to({x:31},3).to({x:52},2).wait(1).to({x:51},0).wait(79).to({x:31},2,cjs.Ease.get(-1)).to({x:-69},3,cjs.Ease.get(1)).wait(66).to({x:31},3).to({x:52},2).wait(1).to({x:51},0).wait(79).to({x:31},2,cjs.Ease.get(-1)).to({x:-69},3,cjs.Ease.get(1)).wait(1));

	// ЛАСТОЧКИ
	this.instance_5 = new lib.Символ12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(195.9,243.1,1,1,0,0,0,79.9,14);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(79).to({_off:false},0).to({y:195.1},2,cjs.Ease.get(-1)).to({regX:65.2,regY:10.3,scaleX:1.08,scaleY:1.08,x:225,y:116.1},3,cjs.Ease.get(1)).wait(19).to({scaleX:1.16,scaleY:1.16,x:225.1},4).to({scaleX:1.08,scaleY:1.08,x:225},4).wait(21).to({scaleX:1.16,scaleY:1.16,x:225.1},4).to({scaleX:1.08,scaleY:1.08,x:225},4).wait(9).to({regX:79.9,regY:14,scaleX:1,scaleY:1,x:240.9,y:117.1},0).wait(1).to({x:195.9,y:195.1},3).to({y:243.1},2).to({_off:true},1).wait(79).to({_off:false},0).to({y:195.1},2,cjs.Ease.get(-1)).to({regX:65.2,regY:10.3,scaleX:1.08,scaleY:1.08,x:225,y:116.1},3,cjs.Ease.get(1)).wait(19).to({scaleX:1.16,scaleY:1.16,x:225.1},4).to({scaleX:1.08,scaleY:1.08,x:225},4).wait(21).to({scaleX:1.16,scaleY:1.16,x:225.1},4).to({scaleX:1.08,scaleY:1.08,x:225},4).wait(9).to({regX:79.9,regY:14,scaleX:1,scaleY:1,x:240.9,y:117.1},0).wait(1).to({x:195.9,y:195.1},3).to({y:243.1},2).to({_off:true},1).wait(79).to({_off:false},0).to({y:195.1},2,cjs.Ease.get(-1)).to({regX:65.2,regY:10.3,scaleX:1.08,scaleY:1.08,x:225,y:116.1},3,cjs.Ease.get(1)).wait(19).to({scaleX:1.16,scaleY:1.16,x:225.1},4).to({scaleX:1.08,scaleY:1.08,x:225},4).wait(21).to({scaleX:1.16,scaleY:1.16,x:225.1},4).to({scaleX:1.08,scaleY:1.08,x:225},4).wait(9).to({regX:79.9,regY:14,scaleX:1,scaleY:1,x:240.9,y:117.1},0).wait(1).to({x:195.9,y:195.1},3).to({y:243.1},2).to({_off:true},1).wait(79).to({_off:false},0).to({y:195.1},2,cjs.Ease.get(-1)).to({regX:65.2,regY:10.3,scaleX:1.08,scaleY:1.08,x:225,y:116.1},3,cjs.Ease.get(1)).wait(19).to({scaleX:1.16,scaleY:1.16,x:225.1},4).to({scaleX:1.08,scaleY:1.08,x:225},4).wait(21).to({scaleX:1.16,scaleY:1.16,x:225.1},4).to({scaleX:1.08,scaleY:1.08,x:225},4).wait(9).to({regX:79.9,regY:14,scaleX:1,scaleY:1,x:240.9,y:117.1},0).wait(1).to({x:195.9,y:195.1},3).to({y:243.1},2).to({_off:true},1).wait(79).to({_off:false},0).to({y:195.1},2,cjs.Ease.get(-1)).to({regX:65.2,regY:10.3,scaleX:1.08,scaleY:1.08,x:225,y:116.1},3,cjs.Ease.get(1)).wait(1));

	// ВАШЕЙ
	this.instance_6 = new lib.Символ13();
	this.instance_6.parent = this;
	this.instance_6.setTransform(352.4,94.1,1,1,0,0,0,54.4,14);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(79).to({_off:false},0).to({x:300.4},2,cjs.Ease.get(-1)).to({regX:80.4,regY:-4,x:269.4,y:90.1},3,cjs.Ease.get(1)).wait(15).to({scaleX:1.14,scaleY:1.14,x:269.5},4).to({scaleX:1,scaleY:1,x:269.4},4).wait(21).to({scaleX:1.14,scaleY:1.14,x:269.5},4).to({scaleX:1,scaleY:1,x:269.4},4).wait(13).to({regX:54.4,regY:14,x:246.4,y:89.1},0).wait(1).to({x:300.4,y:94.1},3).to({x:352.4},2).to({_off:true},1).wait(79).to({_off:false},0).to({x:300.4},2,cjs.Ease.get(-1)).to({regX:80.4,regY:-4,x:269.4,y:90.1},3,cjs.Ease.get(1)).wait(15).to({scaleX:1.14,scaleY:1.14,x:269.5},4).to({scaleX:1,scaleY:1,x:269.4},4).wait(21).to({scaleX:1.14,scaleY:1.14,x:269.5},4).to({scaleX:1,scaleY:1,x:269.4},4).wait(13).to({regX:54.4,regY:14,x:246.4,y:89.1},0).wait(1).to({x:300.4,y:94.1},3).to({x:352.4},2).to({_off:true},1).wait(79).to({_off:false},0).to({x:300.4},2,cjs.Ease.get(-1)).to({regX:80.4,regY:-4,x:269.4,y:90.1},3,cjs.Ease.get(1)).wait(15).to({scaleX:1.14,scaleY:1.14,x:269.5},4).to({scaleX:1,scaleY:1,x:269.4},4).wait(21).to({scaleX:1.14,scaleY:1.14,x:269.5},4).to({scaleX:1,scaleY:1,x:269.4},4).wait(13).to({regX:54.4,regY:14,x:246.4,y:89.1},0).wait(1).to({x:300.4,y:94.1},3).to({x:352.4},2).to({_off:true},1).wait(79).to({_off:false},0).to({x:300.4},2,cjs.Ease.get(-1)).to({regX:80.4,regY:-4,x:269.4,y:90.1},3,cjs.Ease.get(1)).wait(15).to({scaleX:1.14,scaleY:1.14,x:269.5},4).to({scaleX:1,scaleY:1,x:269.4},4).wait(21).to({scaleX:1.14,scaleY:1.14,x:269.5},4).to({scaleX:1,scaleY:1,x:269.4},4).wait(13).to({regX:54.4,regY:14,x:246.4,y:89.1},0).wait(1).to({x:300.4,y:94.1},3).to({x:352.4},2).to({_off:true},1).wait(79).to({_off:false},0).to({x:300.4},2,cjs.Ease.get(-1)).to({regX:80.4,regY:-4,x:269.4,y:90.1},3,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.instance_7 = new lib.Символ20();
	this.instance_7.parent = this;
	this.instance_7.setTransform(359.5,110.1,1,1,0,0,0,8.5,16.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(79).to({_off:false},0).to({x:311.5,y:102.1},2,cjs.Ease.get(-1)).to({x:239.5,y:90.1},3,cjs.Ease.get(1)).wait(11).to({regX:8.6,scaleX:1.31,scaleY:1.31,x:239.7},4).to({regX:8.5,scaleX:1,scaleY:1,x:239.5},4).wait(21).to({regX:8.6,scaleX:1.31,scaleY:1.31,x:239.7},4).to({regX:8.5,scaleX:1,scaleY:1,x:239.5},4).wait(18).to({x:311.5,y:102.1},3).to({x:359.5,y:110.1},2).to({_off:true},1).wait(79).to({_off:false},0).to({x:311.5,y:102.1},2,cjs.Ease.get(-1)).to({x:239.5,y:90.1},3,cjs.Ease.get(1)).wait(11).to({regX:8.6,scaleX:1.31,scaleY:1.31,x:239.7},4).to({regX:8.5,scaleX:1,scaleY:1,x:239.5},4).wait(21).to({regX:8.6,scaleX:1.31,scaleY:1.31,x:239.7},4).to({regX:8.5,scaleX:1,scaleY:1,x:239.5},4).wait(18).to({x:311.5,y:102.1},3).to({x:359.5,y:110.1},2).to({_off:true},1).wait(79).to({_off:false},0).to({x:311.5,y:102.1},2,cjs.Ease.get(-1)).to({x:239.5,y:90.1},3,cjs.Ease.get(1)).wait(11).to({regX:8.6,scaleX:1.31,scaleY:1.31,x:239.7},4).to({regX:8.5,scaleX:1,scaleY:1,x:239.5},4).wait(21).to({regX:8.6,scaleX:1.31,scaleY:1.31,x:239.7},4).to({regX:8.5,scaleX:1,scaleY:1,x:239.5},4).wait(18).to({x:311.5,y:102.1},3).to({x:359.5,y:110.1},2).to({_off:true},1).wait(79).to({_off:false},0).to({x:311.5,y:102.1},2,cjs.Ease.get(-1)).to({x:239.5,y:90.1},3,cjs.Ease.get(1)).wait(11).to({regX:8.6,scaleX:1.31,scaleY:1.31,x:239.7},4).to({regX:8.5,scaleX:1,scaleY:1,x:239.5},4).wait(21).to({regX:8.6,scaleX:1.31,scaleY:1.31,x:239.7},4).to({regX:8.5,scaleX:1,scaleY:1,x:239.5},4).wait(18).to({x:311.5,y:102.1},3).to({x:359.5,y:110.1},2).to({_off:true},1).wait(79).to({_off:false},0).to({x:311.5,y:102.1},2,cjs.Ease.get(-1)).to({x:239.5,y:90.1},3,cjs.Ease.get(1)).wait(1));

	// ДЛЯ
	this.instance_8 = new lib.Символ14();
	this.instance_8.parent = this;
	this.instance_8.setTransform(384.3,64.1,1,1,0,0,0,32.3,14);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(79).to({_off:false},0).to({x:328.3},2,cjs.Ease.get(-1)).to({regX:-26.7,regY:26,x:196.3,y:89.1},3,cjs.Ease.get(1)).wait(7).to({regY:26.1,scaleX:1.27,scaleY:1.27,y:89.2},4).to({regY:26,scaleX:1,scaleY:1,y:89.1},4).wait(21).to({regY:26.1,scaleX:1.27,scaleY:1.27,y:89.2},4).to({regY:26,scaleX:1,scaleY:1,y:89.1},4).wait(21).to({regX:32.3,regY:14,x:254.3,y:59.1},0).wait(1).to({x:328.3,y:64.1},3).to({x:384.3},2).to({_off:true},1).wait(79).to({_off:false},0).to({x:328.3},2,cjs.Ease.get(-1)).to({regX:-26.7,regY:26,x:196.3,y:89.1},3,cjs.Ease.get(1)).wait(7).to({regY:26.1,scaleX:1.27,scaleY:1.27,y:89.2},4).to({regY:26,scaleX:1,scaleY:1,y:89.1},4).wait(21).to({regY:26.1,scaleX:1.27,scaleY:1.27,y:89.2},4).to({regY:26,scaleX:1,scaleY:1,y:89.1},4).wait(21).to({regX:32.3,regY:14,x:254.3,y:59.1},0).wait(1).to({x:328.3,y:64.1},3).to({x:384.3},2).to({_off:true},1).wait(79).to({_off:false},0).to({x:328.3},2,cjs.Ease.get(-1)).to({regX:-26.7,regY:26,x:196.3,y:89.1},3,cjs.Ease.get(1)).wait(7).to({regY:26.1,scaleX:1.27,scaleY:1.27,y:89.2},4).to({regY:26,scaleX:1,scaleY:1,y:89.1},4).wait(21).to({regY:26.1,scaleX:1.27,scaleY:1.27,y:89.2},4).to({regY:26,scaleX:1,scaleY:1,y:89.1},4).wait(21).to({regX:32.3,regY:14,x:254.3,y:59.1},0).wait(1).to({x:328.3,y:64.1},3).to({x:384.3},2).to({_off:true},1).wait(79).to({_off:false},0).to({x:328.3},2,cjs.Ease.get(-1)).to({regX:-26.7,regY:26,x:196.3,y:89.1},3,cjs.Ease.get(1)).wait(7).to({regY:26.1,scaleX:1.27,scaleY:1.27,y:89.2},4).to({regY:26,scaleX:1,scaleY:1,y:89.1},4).wait(21).to({regY:26.1,scaleX:1.27,scaleY:1.27,y:89.2},4).to({regY:26,scaleX:1,scaleY:1,y:89.1},4).wait(21).to({regX:32.3,regY:14,x:254.3,y:59.1},0).wait(1).to({x:328.3,y:64.1},3).to({x:384.3},2).to({_off:true},1).wait(79).to({_off:false},0).to({x:328.3},2,cjs.Ease.get(-1)).to({regX:-26.7,regY:26,x:196.3,y:89.1},3,cjs.Ease.get(1)).wait(1));

	// ЛУЧШЕЕ
	this.instance_9 = new lib.Символ15();
	this.instance_9.parent = this;
	this.instance_9.setTransform(357.7,27.1,1,1,0,0,0,62.7,14);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(79).to({_off:false},0).to({x:301.7},2,cjs.Ease.get(-1)).to({regX:63,regY:14.2,scaleX:1.24,scaleY:1.24,x:237.4,y:23.6},3,cjs.Ease.get(1)).wait(65).to({regX:62.7,regY:14,scaleX:1,scaleY:1,x:243.7,y:20.1},0).wait(1).to({x:301.7,y:27.1},3).to({x:357.7},2).to({_off:true},1).wait(79).to({_off:false},0).to({x:301.7},2,cjs.Ease.get(-1)).to({regX:63,regY:14.2,scaleX:1.24,scaleY:1.24,x:237.4,y:23.6},3,cjs.Ease.get(1)).wait(65).to({regX:62.7,regY:14,scaleX:1,scaleY:1,x:243.7,y:20.1},0).wait(1).to({x:301.7,y:27.1},3).to({x:357.7},2).to({_off:true},1).wait(79).to({_off:false},0).to({x:301.7},2,cjs.Ease.get(-1)).to({regX:63,regY:14.2,scaleX:1.24,scaleY:1.24,x:237.4,y:23.6},3,cjs.Ease.get(1)).wait(65).to({regX:62.7,regY:14,scaleX:1,scaleY:1,x:243.7,y:20.1},0).wait(1).to({x:301.7,y:27.1},3).to({x:357.7},2).to({_off:true},1).wait(79).to({_off:false},0).to({x:301.7},2,cjs.Ease.get(-1)).to({regX:63,regY:14.2,scaleX:1.24,scaleY:1.24,x:237.4,y:23.6},3,cjs.Ease.get(1)).wait(65).to({regX:62.7,regY:14,scaleX:1,scaleY:1,x:243.7,y:20.1},0).wait(1).to({x:301.7,y:27.1},3).to({x:357.7},2).to({_off:true},1).wait(79).to({_off:false},0).to({x:301.7},2,cjs.Ease.get(-1)).to({regX:63,regY:14.2,scaleX:1.24,scaleY:1.24,x:237.4,y:23.6},3,cjs.Ease.get(1)).wait(1));

	// ВСЕ
	this.instance_10 = new lib.Символ16();
	this.instance_10.parent = this;
	this.instance_10.setTransform(250.2,-66.9,1,1,0,0,0,30.2,14);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(79).to({_off:false},0).to({y:-38.9},2,cjs.Ease.get(-1)).to({regX:7.5,regY:44.7,scaleX:1.2,scaleY:1.2,x:226.8,y:-2.3},3,cjs.Ease.get(1)).wait(65).to({regX:30.2,regY:14,scaleX:1,scaleY:1,x:257.2,y:-8.9},0).wait(1).to({x:250.2,y:-38.9},3).to({y:-66.9},2).to({_off:true},1).wait(79).to({_off:false},0).to({y:-38.9},2,cjs.Ease.get(-1)).to({regX:7.5,regY:44.7,scaleX:1.2,scaleY:1.2,x:226.8,y:-2.3},3,cjs.Ease.get(1)).wait(65).to({regX:30.2,regY:14,scaleX:1,scaleY:1,x:257.2,y:-8.9},0).wait(1).to({x:250.2,y:-38.9},3).to({y:-66.9},2).to({_off:true},1).wait(79).to({_off:false},0).to({y:-38.9},2,cjs.Ease.get(-1)).to({regX:7.5,regY:44.7,scaleX:1.2,scaleY:1.2,x:226.8,y:-2.3},3,cjs.Ease.get(1)).wait(65).to({regX:30.2,regY:14,scaleX:1,scaleY:1,x:257.2,y:-8.9},0).wait(1).to({x:250.2,y:-38.9},3).to({y:-66.9},2).to({_off:true},1).wait(79).to({_off:false},0).to({y:-38.9},2,cjs.Ease.get(-1)).to({regX:7.5,regY:44.7,scaleX:1.2,scaleY:1.2,x:226.8,y:-2.3},3,cjs.Ease.get(1)).wait(65).to({regX:30.2,regY:14,scaleX:1,scaleY:1,x:257.2,y:-8.9},0).wait(1).to({x:250.2,y:-38.9},3).to({y:-66.9},2).to({_off:true},1).wait(79).to({_off:false},0).to({y:-38.9},2,cjs.Ease.get(-1)).to({regX:7.5,regY:44.7,scaleX:1.2,scaleY:1.2,x:226.8,y:-2.3},3,cjs.Ease.get(1)).wait(1));

	// Слой 8
	this.instance_11 = new lib.Символ10();
	this.instance_11.parent = this;
	this.instance_11.setTransform(144.3,293,1,1,0,0,0,95.3,33);
	this.instance_11._off = true;
	new cjs.ButtonHelper(this.instance_11, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(79).to({_off:false},0).to({y:245},2,cjs.Ease.get(-1)).to({y:173},3,cjs.Ease.get(1)).wait(66).to({y:245},3,cjs.Ease.get(-1)).to({y:293},2,cjs.Ease.get(1)).to({_off:true},1).wait(79).to({_off:false},0).to({y:245},2,cjs.Ease.get(-1)).to({y:173},3,cjs.Ease.get(1)).wait(66).to({y:245},3,cjs.Ease.get(-1)).to({y:293},2,cjs.Ease.get(1)).to({_off:true},1).wait(79).to({_off:false},0).to({y:245},2,cjs.Ease.get(-1)).to({y:173},3,cjs.Ease.get(1)).wait(66).to({y:245},3,cjs.Ease.get(-1)).to({y:293},2,cjs.Ease.get(1)).to({_off:true},1).wait(79).to({_off:false},0).to({y:245},2,cjs.Ease.get(-1)).to({y:173},3,cjs.Ease.get(1)).wait(66).to({y:245},3,cjs.Ease.get(-1)).to({y:293},2,cjs.Ease.get(1)).to({_off:true},1).wait(79).to({_off:false},0).to({y:245},2,cjs.Ease.get(-1)).to({y:173},3,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_12 = new lib.Символ9();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-158.5,61.5,1,1,0,0,0,64.5,77.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(79).to({_off:false},0).to({x:-68.5,y:59.9},2,cjs.Ease.get(-1)).to({x:66.5,y:57.5},3,cjs.Ease.get(1)).wait(66).to({x:-68.5,y:59.9},3,cjs.Ease.get(-1)).to({x:-158.5,y:61.5},2,cjs.Ease.get(1)).to({_off:true},1).wait(79).to({_off:false},0).to({x:-68.5,y:59.9},2,cjs.Ease.get(-1)).to({x:66.5,y:57.5},3,cjs.Ease.get(1)).wait(66).to({x:-68.5,y:59.9},3,cjs.Ease.get(-1)).to({x:-158.5,y:61.5},2,cjs.Ease.get(1)).to({_off:true},1).wait(79).to({_off:false},0).to({x:-68.5,y:59.9},2,cjs.Ease.get(-1)).to({x:66.5,y:57.5},3,cjs.Ease.get(1)).wait(66).to({x:-68.5,y:59.9},3,cjs.Ease.get(-1)).to({x:-158.5,y:61.5},2,cjs.Ease.get(1)).to({_off:true},1).wait(79).to({_off:false},0).to({x:-68.5,y:59.9},2,cjs.Ease.get(-1)).to({x:66.5,y:57.5},3,cjs.Ease.get(1)).wait(66).to({x:-68.5,y:59.9},3,cjs.Ease.get(-1)).to({x:-158.5,y:61.5},2,cjs.Ease.get(1)).to({_off:true},1).wait(79).to({_off:false},0).to({x:-68.5,y:59.9},2,cjs.Ease.get(-1)).to({x:66.5,y:57.5},3,cjs.Ease.get(1)).wait(1));

	// Слой 5
	this.instance_13 = new lib.Символ8();
	this.instance_13.parent = this;
	this.instance_13.setTransform(61.5,33.1,0.96,0.96,45,0,0,105.6,211);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(79).to({regY:210.9,scaleX:0.96,scaleY:0.96,rotation:44.9,x:-66.4,y:29.1},2,cjs.Ease.get(-1)).to({regY:211,scaleX:0.96,scaleY:0.96,rotation:45,x:-258.5,y:23.1},3,cjs.Ease.get(1)).wait(66).to({regY:210.9,scaleX:0.96,scaleY:0.96,rotation:44.9,x:-66.4,y:29.1},3,cjs.Ease.get(-1)).to({regY:211,scaleX:0.96,scaleY:0.96,rotation:45,x:61.5,y:33.1},2,cjs.Ease.get(1)).wait(80).to({regY:210.9,scaleX:0.96,scaleY:0.96,rotation:44.9,x:-66.4,y:29.1},2,cjs.Ease.get(-1)).to({regY:211,scaleX:0.96,scaleY:0.96,rotation:45,x:-258.5,y:23.1},3,cjs.Ease.get(1)).wait(66).to({regY:210.9,scaleX:0.96,scaleY:0.96,rotation:44.9,x:-66.4,y:29.1},3,cjs.Ease.get(-1)).to({regY:211,scaleX:0.96,scaleY:0.96,rotation:45,x:61.5,y:33.1},2,cjs.Ease.get(1)).wait(80).to({regY:210.9,scaleX:0.96,scaleY:0.96,rotation:44.9,x:-66.4,y:29.1},2,cjs.Ease.get(-1)).to({regY:211,scaleX:0.96,scaleY:0.96,rotation:45,x:-258.5,y:23.1},3,cjs.Ease.get(1)).wait(66).to({regY:210.9,scaleX:0.96,scaleY:0.96,rotation:44.9,x:-66.4,y:29.1},3,cjs.Ease.get(-1)).to({regY:211,scaleX:0.96,scaleY:0.96,rotation:45,x:61.5,y:33.1},2,cjs.Ease.get(1)).wait(80).to({regY:210.9,scaleX:0.96,scaleY:0.96,rotation:44.9,x:-66.4,y:29.1},2,cjs.Ease.get(-1)).to({regY:211,scaleX:0.96,scaleY:0.96,rotation:45,x:-258.5,y:23.1},3,cjs.Ease.get(1)).wait(66).to({regY:210.9,scaleX:0.96,scaleY:0.96,rotation:44.9,x:-66.4,y:29.1},3,cjs.Ease.get(-1)).to({regY:211,scaleX:0.96,scaleY:0.96,rotation:45,x:61.5,y:33.1},2,cjs.Ease.get(1)).wait(80).to({regY:210.9,scaleX:0.96,scaleY:0.96,rotation:44.9,x:-66.4,y:29.1},2,cjs.Ease.get(-1)).to({regY:211,scaleX:0.96,scaleY:0.96,rotation:45,x:-258.5,y:23.1},3,cjs.Ease.get(1)).wait(1));

	// Слой 7
	this.instance_14 = new lib.Символ8копия();
	this.instance_14.parent = this;
	this.instance_14.setTransform(375.8,316.6,0.96,0.96,-135,0,0,105.6,211);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(79).to({_off:false},0).to({x:204.8,y:155.7},5,cjs.Ease.get(-1)).wait(65).to({_off:true},7).wait(79).to({_off:false,x:375.8,y:316.6},0).to({x:204.8,y:155.7},5,cjs.Ease.get(-1)).wait(65).to({_off:true},7).wait(79).to({_off:false,x:375.8,y:316.6},0).to({x:204.8,y:155.7},5,cjs.Ease.get(-1)).wait(65).to({_off:true},7).wait(79).to({_off:false,x:375.8,y:316.6},0).to({x:204.8,y:155.7},5,cjs.Ease.get(-1)).wait(65).to({_off:true},7).wait(79).to({_off:false,x:375.8,y:316.6},0).to({x:204.8,y:155.7},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237.8,-258.1,578.4,578.4);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.498)").ss(1,1,1).p("A3WzlMAutAAAMAAAAnLMgutAAAg");
	this.shape.setTransform(149.5,124.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 5
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(7,35.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("AhPBRIgKgCIAAgkIAHAAIAGAAQAKAAADgFQAEgEAAgJIAFhqICQAAIAACgIgrAAIAAh5Ig9AAIgDBIQgBANgDAJQgDAKgFAGQgGAHgJADQgKAEgOgBg");
	this.shape_1.setTransform(162.7,94.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0)").s().p("AA1BQIgNgfIhPAAIgOAfIgmAAIAAgKIBHiVIApAAIBHCVIAAAKgAAYANIgYg1IgXA1IAvAAg");
	this.shape_2.setTransform(143.6,94);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0)").s().p("AgVBQIAAh4Ig+AAIAAgnICmAAIAAAnIg+AAIAAB4g");
	this.shape_3.setTransform(124.9,94);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0)").s().p("AAIBVQgYAAgRgHQgRgGgJgLQgFgFgEgGQgDgGgCgIQgEgOAAgQIAAgLQAAgQAEgPQAEgOAKgLQAJgKARgHQARgGAYAAIAIAAQAQAAAQACQAPACAPAEIAAAnIgRgEIgRgDIgQgBIgNgBQgRAAgKAEQgKADgFAGQgFAHAAAIIgBASIABASQAAAJAFAGQAFAHAKADQAKAEARAAIANgBIAQgBIARgDIARgEIAAAnIgeAGQgQACgQAAg");
	this.shape_4.setTransform(107.2,94);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0)").s().p("AguBRIgLgBIAAgnIALABIAKABQAKAAAEgCQAEgDADgHIhIhnIAAgKIArAAIAwBOIArhOIApAAIAAAKIhABrIgLATQgFAJgHAGQgEAGgKAEQgJADgNAAg");
	this.shape_5.setTransform(88.5,94.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_1 = new lib.back();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-72,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.8,-98.1,620.8,578.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;