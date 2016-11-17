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
		{src:"images/background.jpg?1479111386576", id:"background"},
		{src:"images/girl_by__001.png?1479111386576", id:"girl_by__001"},
		{src:"images/girl_by__02.png?1479111386576", id:"girl_by__02"},
		{src:"images/girl_by__05.png?1479111386576", id:"girl_by__05"},
		{src:"images/girl_by__08.png?1479111386576", id:"girl_by__08"},
		{src:"images/girl_by__12.png?1479111386576", id:"girl_by__12"},
		{src:"images/girl_by__15.png?1479111386576", id:"girl_by__15"},
		{src:"images/girl_by__19.png?1479111386576", id:"girl_by__19"},
		{src:"images/girl_by__22.png?1479111386576", id:"girl_by__22"},
		{src:"images/girl_by__29.png?1479111386576", id:"girl_by__29"},
		{src:"images/girl_by__31.png?1479111386576", id:"girl_by__31"},
		{src:"images/glass.png?1479111386576", id:"glass"},
		{src:"images/hand.png?1479111386576", id:"hand"},
		{src:"images/hands2.png?1479111386576", id:"hands2"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,618,396);


(lib.girl_by__001 = function() {
	this.initialize(img.girl_by__001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,36);


(lib.girl_by__02 = function() {
	this.initialize(img.girl_by__02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,51);


(lib.girl_by__05 = function() {
	this.initialize(img.girl_by__05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,97);


(lib.girl_by__08 = function() {
	this.initialize(img.girl_by__08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,209);


(lib.girl_by__12 = function() {
	this.initialize(img.girl_by__12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,112);


(lib.girl_by__15 = function() {
	this.initialize(img.girl_by__15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,36);


(lib.girl_by__19 = function() {
	this.initialize(img.girl_by__19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,96);


(lib.girl_by__22 = function() {
	this.initialize(img.girl_by__22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,64);


(lib.girl_by__29 = function() {
	this.initialize(img.girl_by__29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,163);


(lib.girl_by__31 = function() {
	this.initialize(img.girl_by__31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,135);


(lib.glass = function() {
	this.initialize(img.glass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,412);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,200);


(lib.hands2 = function() {
	this.initialize(img.hands2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,195);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#06528E").s().p("A/iDpICVnRMA8wAAAIiVHRg");
	this.shape.setTransform(185.2,21);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.7,-2.3,403.9,46.7);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("Ap7LjIAA3GIT3AAIAAXGg");
	this.shape.setTransform(63.6,74);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("ApaLRIAA2iIS1AAIAAWig");
	this.shape.setTransform(60.3,72.2);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand();
	this.instance.parent = this;
	this.instance.setTransform(0,11.4,0.772,0.772,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.1,164.1);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hands2();
	this.instance.parent = this;
	this.instance.setTransform(0,10.6,0.712,0.712,-5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120.1,148.7);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("ACvAAQAABIgzA0Qg0AzhIAAQhHAAg0gzQgzg0AAhIQAAhHAzg0QA0gzBHAAQBIAAA0AzQAzA0AABHg");
	this.shape.setTransform(17.6,17.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,37.2,37.2);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("ABFAAQAAAcgVAUQgUAVgcAAQgcAAgUgVQgUgUAAgcQAAAAAAAAQAAgBAAAAQABgcATgTQAUgUAcAAQAAAAAAAAQAcAAAUAUQAVAUAAAcIgmAAAhEAAIAmAAAAAhEIAAAnAAABFIAAgl");
	this.shape.setTransform(7,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,15.9,15.9);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgzGAdGMAAAg6LMBmNAAAMAAAA6Lg");
	this.shape.setTransform(327.1,186.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,654.3,372.4);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("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");
	this.shape.setTransform(137.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("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");
	this.shape_1.setTransform(141,21.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,278.5,43.2);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AooCYQgLgEgHgIQgHgJgCgNQgDgPAEgSIAojeQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAwgOA+ACQAXABAUAGQAUAGAOAMQAOAMAGARQADAIABAKQAAAKgCAMQgDASgJAQQgJAUgRAMQgJAIgMAGQgMAHgOAEQgOAEgRACQgSADgUgBIgDATQgDAWACAOQACAKAGAFIAHAGQADACgBADQgHAMgSAKQgYAMgMAAQgNAAgKgFgAnGhrIgTBrQALAAALgEQALgFAIgIQAIgIAFgLQAGgLACgLQACgMgCgJQgCgKgGgHQgGgHgIgDQgGgCgHAAIgIABgA1ACYQgLgEgGgIQgHgJgCgNQgDgPADgSIAojeQAAAAAAgBQAAAAAAAAQABAAAAgBQABAAAAAAQAwgOA+ACQAYABATAGQAUAGAOAMQAOAMAGARQAEAIAAAKQAAAKgBAMQgEASgIAQQgKAUgRAMQgJAIgLAGQgMAHgOAEQgPAEgRACQgRADgUgBIgEATQgDAWADAOQABAKAGAFIAIAGQADACgCADQgGAMgTAKQgYAMgMAAQgNAAgKgFgAzehrIgTBrQAMAAALgEQAKgFAIgIQAIgIAFgLQAGgLACgLQACgMgCgJQgCgKgGgHQgGgHgIgDQgGgCgGAAIgJABgAKCCaQgLgDgJgEQgSgJgKgQQgKgPgDgVQgEgTAEgWIAii7QAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIDDAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAIAxgyATQggAMgvgMIgKA3IBDAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIgHAoQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIhDAAIgFAeQgCAKADAHQABAHAGAFQAJAJASABQARABATgFQASgEAMgHQAHgEACADQACADgDAIQgDAJgIALQgKAMgNAKQgQANgTAGQgcAIgRAAQgNAAgLgCgAPTCbQgMgDgJgFQgJgGgGgIQgGgIgEgLQgIgSgCgcQgCgUABgdQgIgCgHAEIgTB8QgBABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIhYAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIAnjcQACgRgDgKQgDgHgFgFIgHgEQgDgCACgDQAGgLASgJQAUgKARAAQAMAAAKAEQALADAHAIQAHAJADALQACAOgDAQIgNBCQADgCAKgBQAEgYAJgVQAJgXAOgRQAPgSASgLIAUgJQALgEALgBQAOgCALADQAMADAHAHQAIAHACAKQADALgEAMQgSA8hDgXQAGgWgOAAQgGAAgGAFQgFAEgFAJQgJAPgEAZQAKAAAHADQAHAEAFAGQAGAKAIAXQAJAgAHAPQAHAPAIAKQAKAMAKADQADABgDAIQgDAHgGAJQgIAKgKAHQgMAIgOABIgNABIgNgBgACOCZQgNgDgMgGQgMgGgKgJQgJgIgIgLQgIgLgFgNQgGgNgDgNQgCgPAAgPQgBgPADgPQADgOAFgPQAFgOAHgOQAIgNAKgNQAJgMAMgLQALgKANgJQAMgIAPgGQAOgHAPgDQAPgDAQAAQAYgBAUAGQATAFAMAKQANAKAFAOQAGAOgDAQQgBAJgFAIQgEAIgHAHQgHAHgJAEQgJAEgLAAQgOAAgJgEQgIgEACgGIAEgUQABgKgCgIQgDgIgFgFQgGgFgKAAQgNAAgNALQgMAKgKAQQgJAQgGATQgFASgBAOQgBATADAQQADAPAHAKQAGALAKAHQAJAHALADQALADANAAQAMgBAMgDQAOgDALgGQANgHALgIQAOgKgKAUQgrBOhVACIgEAAQgNAAgMgDgAWvCYQgOgDgLgGQgMgGgKgIQgKgIgHgLQgIgLgFgMQgFgNgCgNQgDgOAAgPQAAgPADgQQADgOAFgPQAFgOAHgOQAIgOAJgNQAKgMALgLQALgLANgIQAMgJAPgGQAOgGAPgDQAPgDAQAAQAQAAAOADQAOADAMAGQAMAGAKAJQAKAIAHALQAIALAFAMQAFANACAOQACAOAAAOQAAAPgDAOQgCAQgGAPQgFAPgHAOQgHANgJANQgKAMgLALQgLALgMAIQgNAIgOAGQgOAGgQADQgPAEgRAAQgPAAgPgEgAXmhgQgLAJgJARQgKAQgHAUQgGATgEAQQgDASAAATQAAATAEAQQAEARAHAJQAHALALAAQAMAAALgKQALgKAJgQQAJgQAHgUQAHgSADgTQADgQAAgTQAAgUgDgQQgEgRgHgJQgIgKgLAAQgLAAgLAKgAQ6CXQgJgEgGgHQgMgNACgLQAAgCAMgLQAOgPANgUIARggQAKgUAIgWQAJgbAIggQAKgjAHgpIAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAQAXgGAcgEQAcgDAdAAQAcAAAbADQAaAEAWAGQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIg0EeQAAABgBAAQAAABAAAAQAAAAAAAAQgBAAAAAAIhVAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAABgBIAqjvIgtAAQgrD6hbAAQgMAAgJgFgAwOCYQgPgDgLgGQgMgGgKgIQgKgIgHgLQgIgLgFgMQgFgNgCgNQgDgOAAgPQAAgPADgQQADgOAFgPQAFgOAHgOQAIgOAJgNQAKgMALgLQALgLANgIQANgJAOgGQAOgGAPgDQAPgDAQAAQAQAAAOADQAOADAMAGQAMAGAKAJQAKAIAHALQAIALAFAMQAFANACAOQACAOAAAOQAAAPgDAOQgCAQgGAPQgFAPgHAOQgHANgJANQgKAMgLALQgLALgMAIQgNAIgOAGQgOAGgQADQgPAEgQAAQgQAAgOgEgAvYhgQgLAJgJARQgJAQgIAUQgGATgEAQQgCASAAATQAAATADAQQAEARAHAJQAHALALAAQAMAAALgKQALgKAJgQQAJgQAHgUQAHgSADgTQADgQAAgTQAAgUgDgQQgEgRgHgJQgIgKgLAAQgLAAgLAKgAGXCYQgKgFgHgIQgHgIgDgNQgCgNADgRIAeilQgxABgYAFQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBQgLgvAwgWQAQgIARgCQAOgBAYABIAzAFQAlACAjABIAagBQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAHA4gzAPQgTAGgjgFIgXCIQgDAVACAMQADAKAFAFIAHAGQAEACgCADQgGALgSAKQgUAKgSAAQgMAAgKgDgArpCYQgKgFgHgIQgHgIgCgNQgDgNADgRIAfilQgyABgYAFQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAgBQgKgvAvgWQAQgIARgCQAPgBAXABIAzAFQAlACAjABIAbgBQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAHA4gzAPQgTAGgjgFIgXCIQgDAVADAMQACAKAFAFIAIAGQADACgCADQgFALgTAKQgUAKgRAAQgNAAgKgDgAiuCTQgBAAAAAAQAAAAAAAAQgBAAABgBQAAAAAAgBIAWh0IAMglQhRB1gbAkQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIhTAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIAnjcQABgRgDgKQgCgHgFgFIgHgEQgDgCACgDQAGgLASgJQAUgKARAAQAMAAAKAEQALADAHAIQAHAJACALQADAOgDAQIgOBUIgKAgIBxipQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIBMAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIgyEeQgBABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgA3WCTQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAABgBIAqjuIhIAAIgrDuQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIhUAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIAykeQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAYgGAhgEQAhgDAjAAQAkAAAgADQAhAEAVAGQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIgzEeQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape.setTransform(180.4,15.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AooCYQgLgEgHgIQgGgJgDgNQgCgPADgSIAojeQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAwgOA+ACQAYABATAGQAUAGAOAMQAOAMAGARQADAIABAKQAAAKgCAMQgDASgIAQQgKAUgRAMQgJAIgMAGQgLAHgPAEQgOAEgRACQgSADgUgBIgDATQgDAWACAOQACAKAGAFIAHAGQADACgBADQgHAMgSAKQgYAMgMAAQgNAAgKgFgAnGhrIgTBrQALAAALgEQALgFAIgIQAIgIAFgLQAGgLACgLQACgMgCgJQgCgKgGgHQgGgHgIgDQgGgCgGAAIgJABgA1ACYQgLgEgGgIQgHgJgCgNQgDgPADgSIAojeQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAQAwgOA+ACQAYABATAGQAUAGAOAMQAOAMAGARQAEAIAAAKIgBAWQgEASgIAQQgKAUgRAMQgJAIgLAGQgMAHgOAEQgPAEgRACQgRADgUgBIgEATQgDAWADAOQABAKAGAFIAIAGQADACgCADQgGAMgTAKQgYAMgMAAQgNAAgKgFgAzehrIgTBrQAMAAALgEQAKgFAIgIQAIgIAFgLQAGgLACgLQACgMgCgJQgCgKgGgHQgFgHgJgDQgGgCgGAAIgJABgAKCCaQgLgDgJgEQgSgJgKgQQgKgPgDgVQgDgTADgWIAii7QAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIDDAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABAAQAHAxgyATQggAMgvgMIgKA3IBEAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgHAoQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIhDAAIgFAeQgCAKADAHQABAHAGAFQAJAJATABQAQABATgFQASgEAMgHQAHgEACADQACADgDAIQgDAJgIALQgKAMgNAKQgQANgTAGQgcAIgRAAQgNAAgLgCgAPTCbQgMgDgJgFQgJgGgGgIQgGgIgEgLQgIgSgCgcQgCgUABgdQgIgCgHAEIgTB8QgBABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIhYAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIAnjcQACgRgDgKQgDgHgFgFIgHgEQgDgCACgDQAGgLASgJQAUgKARAAQAMAAAKAEQALADAHAIQAHAJADALQACAOgDAQIgNBCQADgCAKgBQAEgYAJgVQAJgXAOgRQAPgSASgLIAUgJQALgEAMgBQANgCALADQAMADAIAHQAHAHACAKQADALgEAMQgSA8hDgXQAGgWgOAAQgGAAgGAFQgFAEgFAJQgJAPgEAZQAKAAAHADQAHAEAFAGQAGAKAIAXQAJAgAHAPQAHAPAIAKQAKAMAKADQADABgDAIQgDAHgGAJQgIAKgKAHQgMAIgOABIgNABIgNgBgACOCZQgNgDgMgGQgMgGgKgJQgJgIgIgLQgIgLgFgNQgGgNgCgNQgDgPAAgPQgBgPADgPQADgOAFgPQAFgOAIgOQAHgNAKgNQAJgMAMgLQALgKANgJQANgIAOgGQAOgHAPgDQAQgDAPAAQAYgBAUAGQATAFAMAKQANAKAGAOQAFAOgDAQQgBAJgFAIQgEAIgHAHQgHAHgJAEQgJAEgLAAQgOAAgJgEQgIgEACgGIAEgUQABgKgCgIQgCgIgGgFQgGgFgKAAQgNAAgNALQgMAKgKAQQgJAQgGATQgFASgBAOQgBATADAQQADAPAHAKQAGALAKAHQAJAHALADQALADANAAQAMgBAMgDQAOgDALgGQANgHALgIQAOgKgJAUQgsBOhVACIgEAAQgNAAgMgDgAWwCYQgPgDgLgGQgMgGgKgIQgKgIgHgLQgIgLgFgMQgFgNgCgNQgDgOAAgPQAAgPADgQQADgOAFgPQAFgOAIgOQAHgOAJgNQAKgMALgLQALgLANgIQANgJAOgGQAOgGAPgDQAPgDAQAAQAQAAAOADQAOADAMAGQAMAGAKAJQAKAIAHALQAIALAFAMQAFANACAOQACAOAAAOQAAAPgCAOQgDAQgGAPQgFAPgHAOQgHANgJANQgKAMgLALQgLALgMAIQgNAIgOAGQgOAGgQADQgPAEgQAAQgQAAgOgEgAXmhgQgLAJgJARQgJAQgIAUQgGATgEAQQgCASAAATQAAATADAQQAEARAHAJQAHALALAAQAMAAALgKQALgKAJgQQAKgQAGgUQAHgSADgTQADgQAAgTQAAgUgDgQQgEgRgHgJQgIgKgLAAQgLAAgLAKgAQ6CXQgJgEgGgHQgMgNACgLQAAgCAMgLQAPgPAMgUIARggQAKgUAIgWQAJgbAJggQAJgjAHgpIAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAQAXgGAcgEQAcgDAdAAQAcAAAbADQAbAEAVAGQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIg0EeQAAABgBAAQAAABAAAAQAAAAAAAAQgBAAAAAAIhVAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAABgBIAqjvIgtAAQgrD6hbAAQgMAAgJgFgAwOCYQgOgDgMgGQgMgGgKgIQgKgIgHgLQgIgLgFgMQgFgNgCgNQgDgOAAgPQAAgPADgQQADgOAFgPQAFgOAIgOQAHgOAJgNQAKgMALgLQALgLANgIQANgJAOgGQAOgGAPgDQAPgDAQAAQAQAAAOADQAOADAMAGQAMAGAKAJQAKAIAHALQAIALAFAMQAFANACAOQACAOAAAOQAAAPgCAOQgDAQgGAPQgFAPgHAOQgHANgJANQgKAMgLALQgLALgMAIQgNAIgOAGQgOAGgQADQgPAEgQAAQgQAAgOgEgAvYhgQgLAJgJARQgJAQgIAUQgGATgEAQQgCASAAATQAAATADAQQAEARAHAJQAHALALAAQAMAAALgKQALgKAJgQQAKgQAGgUQAHgSADgTQADgQABgTQAAgUgEgQQgEgRgHgJQgIgKgLAAQgLAAgLAKgAGXCYQgKgFgHgIQgHgIgDgNQgCgNADgRIAeilQgxABgYAFQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBQgKgvAvgWQAQgIARgCQAOgBAYABIAzAFQAlACAjABIAbgBQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAHA4gzAPQgTAGgjgFIgXCIQgDAVACAMQADAKAFAFIAHAGQAEACgCADQgGALgSAKQgUAKgSAAQgMAAgKgDgAroCYQgLgFgHgIQgHgIgCgNQgDgNADgRIAfilQgyABgYAFQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAgBQgKgvAwgWQAPgIARgCQAPgBAXABIAzAFQAmACAiABIAbgBQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQAHA4gzAPQgTAGgjgFIgXCIQgDAVADAMQACAKAFAFIAIAGQADACgCADQgFALgTAKQgUAKgRAAQgNAAgJgDgAiuCTQgBAAAAAAQAAAAAAAAQgBAAABgBQAAAAAAgBIAWh0IAMglQhRB1gbAkQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIhTAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIAnjcQABgRgDgKQgCgHgFgFIgHgEQgDgCACgDQAGgLASgJQAUgKARAAQAMAAAKAEQALADAHAIQAHAJADALQACAOgDAQIgOBUIgKAgIBxipIACgCIBMAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIgyEeQgBABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgA3WCTQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAABgBIAqjuIhIAAIgrDuQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIhUAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIAykeQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAABAAQAXgGAhgEQAhgDAjAAQAkAAAgADQAhAEAVAGQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIgzEeQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_1.setTransform(183.2,15.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.7,0,334.3,31.5);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand();
	this.instance.parent = this;
	this.instance.setTransform(-12.7,7.9,0.77,0.77,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.7,-5.4,102.6,165);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hands2();
	this.instance.parent = this;
	this.instance.setTransform(0,8.9,0.714,0.714,-4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118.2,147.6);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_by__08();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,204,209);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_by__001();
	this.instance.parent = this;
	this.instance.setTransform(14,-3.5,1.2,1.2,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.8,-3.5,40.2,49.5);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A0/mwIUjrdIVcW0I1LNng");
	this.shape.setTransform(134.4,116.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268.9,233.3);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAtFKIgHgBQgDACgEgBQgGAAgDgEQgDgCAAgFQgFgBgCgDIgCgDIgLgPQgIgMgBgFQgCgGAAgQQAAgMADgHQAGgMAIADQAFABADAFQACAEgBAGIgDALQgBAFADAJIACADIACAGQAFAKANAEIAHABQAHABAIAAQAPgBALgDIAKgCQgHgIgHgJQgVghgEghQgiACgUgDQgdgDgVgNQgNgIgUgUQgWgWgLgIQgQgKgcgIIgZgHIgFgJIgKgLIgMgQQgHgLgGgEQgHgEgBgDIgCgGIgHgDQgEgCAAgDQgGgBgNgJIgWgRQgSgMgGgHQgBgDgEgHIgCgGIAAgIQAAgQgDghQgCgcgFgMQgHgOgBgIQAAgNgCgIIAGgbIADgSQAJgXADgMQADgMABgTQABgTADgJQAEgPAMgIQAFgDAGABQAHAAACAFQAEAGgFAIIgCAEIADAEQACADAAAJIAAAcIgGAXIgCANIAKAAQAcABAQAUQAMAQADAeQAGAkgDAiQgBAXABAGQAGAQAQALQAQALAaAIIAuANQBEATAvA5QA1ADAXAGQApAMAXAdQAHALAMAXIAFAJIAEgDQAHgDAHACQAEAAAIAEQAFABAEgBQATgBASgEQAmgIALAAQAKAAAGACQAOAGACAPQABAGgEAHQgDAGgGAEQgFACgLACIgBABIgMANIgaAZQgXATgdANQgNAFgKABQgJATgNAIQgLAIgPABIgFAAIgNAFQgIAFgIgBIgEgBIgDACIgJABIgjAAIgBABQgEADgEABIgBAAIgJgCgADPDfIAFgBIAKgGIgPAAIAAAHg");
	this.shape.setTransform(34.6,33.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.7,0,67.9,66.5);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAXEZIgIgmQgEgSgDgHQgFgNgGgIIgHgFIAAgCQAAgMgFgGQgHgLgXgCQAAgUgDgYIgPhVQgJgzgChFQgBgpAChRQABgwAKgVQAIgRAOgKQAPgLARAAQAOABAOAMQAMALAHAQQAGAOACASIABAiQADBWAHBUIgEAGQgEAJABAVQABARAFAKIAFAGIgCACQgHAHgCAKQgBAHABAMIACASQAAAJgBARIgCAZQABANAGALQAHAMALAEIgBBwQgKAPgQALQgJAGgJADIgHgng");
	this.shape.setTransform(7.6,32);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.2,64.1);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAlECQhMgEhBg1QhBg1gShMQgGgZgCgoIgEg/IgHg5QgDgiADgXQAEgeARgYQATgaAagFQAegHAeAUQAcATANAgQAKAaAEAkIACBBQACAnAHAZQAIAhARAWQALAMAIABQAJABALgHIARgPQAbgYApAIQAoAJAUAgQASAfgHAoQgHAngaAbQgZAagmANQgeAKgiAAIgJAAg");
	this.shape.setTransform(20.9,25.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.8,51.7);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACvGWQgVgJgRgVQgPgTgHgZQgKghABhBQAAiDACiCQAAhBgHggQgGgkgTgTQgRgTgogMQhLgYhRABQguABgOgBQgigDgWgPQgSgMgLgVQgKgWABgWQACgXAOgTQANgUAWgJQARgIAmgCQDegOCNBYQA1AhAVApQANAZAHAtQAMBQgCCXQgDCgAJBIIAEArQABAYgGARQgMAhgiAPQgSAIgSAAQgPAAgPgGg");
	this.shape.setTransform(29.3,41.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.6,82.6);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AHRKCQgNgEgPgLIgagUQgRgNgcgRIgvgbQgogXgrgdIhhg/QiLhbhBgyQhvhVhGhVQgegkg0hMIh+i2Qgng6gKgSQhKiDgCiXQAAg5ATgdQAXggAsgBQAtAAAXAgQAQAXAEAoIAEBGQAFAkASAoQAMAbAZAtIAwBUQAdAwAaAiIAsA3QAeAjAOATIAfAtQAUAbANAQQAcAiA3AuQBsBZCmBoQBmBABQAuQAjAUAPALQAbASARATQAUAYAIAcQAKAegJAbQgKAggjARQgTAKgTAAQgOAAgOgGg");
	this.shape.setTransform(58.1,64.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116.2,129.7);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_by__22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,64);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_by__15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,36);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_by__29();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93,163);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_by__02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,51);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(49.5,82,1,1,0,0,0,49.5,82);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:45.9,y:78.4},4).to({x:49.5,y:82},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.1,164.1);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(32.1,130.1,1,1,0,0,0,32.1,130.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:8.5,y:130.2},4).to({rotation:0,y:130.1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120.1,148.7);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(66.3,82,1,1,0,0,0,49.5,82);

	this.instance_1 = new lib.Символ47();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60,74.4,1,1,0,0,180,60,74.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.8,0,99.1,164.1);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(24.9,24.8,1,1,0,0,0,7,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:6.9,scaleX:1.2,scaleY:1.2,rotation:-60,x:25.4,y:25.2},9,cjs.Ease.get(-1)).to({regX:7,scaleX:1,scaleY:1,rotation:-120,x:24.9,y:24.6},10,cjs.Ease.get(1)).to({rotation:0,y:24.8},10,cjs.Ease.get(-1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ41();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25.2,24.8,1,1,0,0,0,17.6,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.1,6.7,36.2,36.2);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(351.8,275.9,1.097,1.111,0,0,0,327.1,186.2);
	this.instance.alpha = 0.09;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.146,1.146);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.1,0,717.9,482.7);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(170.3,25,1,1,0,0,0,137.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07,x:171.4,y:23},9).to({scaleX:1,scaleY:1,x:170.3,y:25},10).to({scaleX:1.07,scaleY:1.07,x:171.4,y:23},10).to({scaleX:1,scaleY:1,x:170.3,y:25},10).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ62();
	this.instance_1.parent = this;
	this.instance_1.setTransform(172.6,25.6,0.897,1.057,0,0,0,185.1,21);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,0.9,362,49.4);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(183,9.7,1,1,0,0,0,182.5,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:182.4,regY:17.2,scaleX:1.13,scaleY:1.13,x:181.7,y:10},9).to({regX:182.5,regY:17.3,scaleX:1,scaleY:1,x:183,y:9.7},10).to({regX:182.4,regY:17.2,scaleX:1.13,scaleY:1.13,x:181.7,y:10},10).to({regX:182.5,regY:17.3,scaleX:1,scaleY:1,x:183,y:9.7},10).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ62();
	this.instance_1.parent = this;
	this.instance_1.setTransform(182.8,7.7,1,1,0,0,0,185.1,21);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-15.7,403.9,46.7);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(38.5,77,1,1,0,0,0,38.5,77);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:33.6,y:72.1},9).to({x:38.5,y:77},10).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkFEGQhshtAAiZQAAiYBshtQBthsCYAAQCZAABsBsQBtBtAACYQAACZhtBtQhsBsiZAAQiYAAhthsg");
	this.shape.setTransform(39.5,93.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.7,-5.4,102.6,165);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(29.2,130.9,1,1,0,0,0,29.2,130.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:18.9,y:131},9).to({rotation:1.8,y:130.9},10).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkFEGQhthtAAiZQAAiYBthtQBthtCYAAQCZAABtBtQBtBtAACYQAACZhtBtQhtBtiZAAQiYAAhthtg");
	this.shape.setTransform(57.7,95.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118.2,147.6);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(102,104.5,1,1,0,0,0,102,104.5);
	this.instance.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance.cache(-2,-2,208,213);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.girl_by__08();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,218,223);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glass();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.628,0.628);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(143.5,134.8,1,1,0,0,0,134.4,116.7);
	this.instance_1.alpha = 0.461;
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-2,-2,273,237);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2 - копия: 2
	this.instance_2 = new lib.Символ19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(143.5,134.8,1,1,0,0,0,134.4,116.7);
	this.instance_2.alpha = 0.238;
	this.instance_2.compositeOperation = "lighter";
	this.instance_2.filters = [new cjs.BlurFilter(11, 11, 1)];
	this.instance_2.cache(-2,-2,273,237);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 2 - копия
	this.instance_3 = new lib.Символ19();
	this.instance_3.parent = this;
	this.instance_3.setTransform(143.5,134.8,1,1,0,0,0,134.4,116.7);
	this.instance_3.alpha = 0.488;
	this.instance_3.filters = [new cjs.BlurFilter(16, 16, 1)];
	this.instance_3.cache(-2,-2,273,237);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,313.9,263.1);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_by__19();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.9,65,1,1,0,0,0,7.5,32);
	this.instance_1.alpha = 0.352;
	this.instance_1.filters = [new cjs.BlurFilter(7, 7, 1)];
	this.instance_1.cache(-2,-2,19,68);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.4,105);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_by__12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(36.6,86,1,1,0,0,0,20.9,25.9);
	this.instance_1.alpha = 0.352;
	this.instance_1.filters = [new cjs.BlurFilter(15, 15, 1)];
	this.instance_1.cache(-2,-2,46,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.7,123.1);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_by__31();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(54.7,73.6,1,1,0,0,0,58.1,64.8);
	this.instance_1.alpha = 0.34;
	this.instance_1.filters = [new cjs.BlurFilter(15, 15, 1)];
	this.instance_1.cache(-2,-2,120,134);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,0,142.4,150.8);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(102,104.5,1,1,0,0,0,102,104.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(56.6,149.3,1,1,0,0,0,29.2,41.2);
	this.instance_1.alpha = 0.352;
	this.instance_1.filters = [new cjs.BlurFilter(15, 15, 1)];
	this.instance_1.cache(-2,-2,63,87);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,218,223);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_by__05();
	this.instance.parent = this;
	this.instance.setTransform(6,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39.2,55.8,1,1,0,0,0,34.2,33.2);
	this.instance_1.alpha = 0.41;
	this.instance_1.filters = [new cjs.BlurFilter(14, 14, 1)];
	this.instance_1.cache(-1,-2,72,71);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-3,90.4,103.6);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(156.8,115.3,1,1,0,0,0,157,129.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-14,313.9,263.1);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 11
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(-6.6,82,1,1,0,0,0,11.7,48);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:11.6,rotation:4.2,x:-3},21,cjs.Ease.get(-1)).to({regX:11.7,rotation:19.2,x:13.5,y:77},21,cjs.Ease.get(1)).to({rotation:0,x:-6.6,y:82},21).to({rotation:19.2,x:13.5,y:77},19).to({rotation:0,x:-6.6,y:82},23).wait(1));

	// girl_by__12.png
	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.5,174,1,1,0,0,0,40.5,98);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:2.2},21,cjs.Ease.get(-1)).to({rotation:15.9,x:15.5,y:173.4},21,cjs.Ease.get(1)).to({rotation:0,x:21.5,y:174},21).to({rotation:15.9,x:15.5,y:173.4},19).to({rotation:0,x:21.5,y:174},23).wait(1));

	// girl_by__22.png
	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(201.8,57.8,1,1,0,0,0,9.3,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:11.9,x:207.4,y:62.3},21,cjs.Ease.get(-1)).to({x:186.8,y:38.9},21,cjs.Ease.get(1)).to({rotation:0,x:207.3,y:57.8},21).to({rotation:11.9,x:209.3,y:83.9},19).to({rotation:0,x:201.8,y:57.8},23).wait(1));

	// girl_by__26.png
	this.instance_3 = new lib.Символ4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(130.5,101,1,1,0,0,0,140.5,122);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:1.3,x:130.6},14,cjs.Ease.get(-1)).to({rotation:3.2,y:101.1},7).wait(21).to({rotation:0,x:130.5,y:101},21).to({rotation:8.9,x:125,y:110.2},19).to({rotation:0,x:130.5,y:101},23).wait(1));

	// Слой 2
	this.instance_4 = new lib.Символ20();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-7.2,42.9,1,1,0,0,0,20.1,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:19.9,regY:24.9,scaleX:1.02,skewX:-5,skewY:-16.5,x:-7.4,y:44},21,cjs.Ease.get(-1)).to({skewX:10,skewY:-1.5,y:38.9},21,cjs.Ease.get(1)).to({regX:20.1,regY:24.8,scaleX:1,skewX:0,skewY:0,x:-7.2,y:42.9},21).wait(43));

	// girl_by__05.png
	this.instance_5 = new lib.Символ5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(11.8,35.5,1,1,0,0,0,80.8,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-2.5,y:35.6},21,cjs.Ease.get(-1)).to({regX:80.7,rotation:12.5},21,cjs.Ease.get(1)).to({regX:80.8,rotation:0,y:35.5},21).wait(43));

	// girl_by__08.png
	this.instance_6 = new lib.Символ6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(102,104.5,1,1,0,0,0,102,104.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(106));

	// girl_by__31.png
	this.instance_7 = new lib.Символ7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(109.1,193.6,1,1,0,0,0,34.1,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:1.5},21,cjs.Ease.get(-1)).wait(21).to({rotation:0},21).to({rotation:1.5},19).to({rotation:0},23).wait(1));

	// girl_by__29.png
	this.instance_8 = new lib.Символ8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(188.9,177.9,1,1,0,0,0,28.9,47.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:48,rotation:2.5,y:178},21,cjs.Ease.get(-1)).wait(21).to({regY:47.9,rotation:0,y:177.9},21).to({regY:48,rotation:2.5,y:178},19).to({regY:47.9,rotation:0,y:177.9},23).wait(1));

	// girl_by__19.png
	this.instance_9 = new lib.Символ10();
	this.instance_9.parent = this;
	this.instance_9.setTransform(21.5,96.2,1,1,0,0,0,21.5,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:-0.8,y:96.3},21,cjs.Ease.get(-1)).to({rotation:3.9,y:91.8},21,cjs.Ease.get(1)).to({rotation:0,y:96.2},21).to({rotation:3.9,y:91.8},19).to({rotation:0,y:96.2},23).wait(1));

	// girl_by__15.png
	this.instance_10 = new lib.Символ11();
	this.instance_10.parent = this;
	this.instance_10.setTransform(160.3,64,1,1,0,0,0,41.5,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:6.7,x:170.9,y:64.6},21,cjs.Ease.get(-1)).to({x:149.4,y:41.3},21,cjs.Ease.get(1)).to({rotation:0,x:171.5,y:64},21).to({rotation:6.7,x:170.8,y:86.3},19).to({rotation:0,x:160.3,y:64},23).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.3,-35,374,363.8);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 1
	this.mouse = new lib.Символ46();
	this.mouse.parent = this;
	this.mouse.setTransform(43.3,74.4,1,1,0,0,0,60,74.4);
	this.mouse.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mouse).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.1,164.1);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(131.9,145.2,0.8,0.8,0.1,0,0,101,146);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.91,scaleY:0.91,x:119.7,y:154.4},9).to({scaleX:0.8,scaleY:0.8,x:131.9,y:145.2},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,0,300.9,293.6);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(17.8,18.2,1.053,1.053,0,0,0,24.4,24.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,38.1,38.1);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.fon = new lib.Символ37();
	this.fon.parent = this;
	this.fon.setTransform(7.2,231,1,1,0,0,0,0,231);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,717.9,482.7);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(4.4,-1.8,1.366,1.366,0,0,0,24.4,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-147.1,y:29.8},9).to({x:-212.2,y:-5.2},10).to({x:-156.2,y:-51.4},10).to({x:-16.2,y:-22.7},10).to({x:116.8,y:21.4},10).to({x:209.2,y:8.1},10).to({x:215.5,y:-40.9},10).to({x:145.5,y:-54.2},10).to({x:22,y:-14.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.6,-65.7,440.5,99.3);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(164.5,48.3,1,1,0,0,0,164.5,48.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-428.6,y:51.9},14).to({x:-1033.6},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,0.9,362,49.4);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1).call(this.frame_15).wait(15));

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(171.6,46.5,1,1,0,0,0,186.8,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-472.4},14).to({x:780.6},1).to({x:171.6},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.3,6.3,403.9,46.7);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 1
	this.fon = new lib.Символ45();
	this.fon.parent = this;
	this.fon.setTransform(54.1,241.3,1,1,0,0,0,54.1,241.3);

	this.timeline.addTween(cjs.Tween.get(this.fon).to({scaleX:1.05,scaleY:1.05,x:39.5,y:252.6},9).to({scaleX:1,scaleY:1,x:54.1,y:241.3},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,717.9,482.7);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 1
	this.pricel = new lib.Символ42();
	this.pricel.parent = this;
	this.pricel.setTransform(42.6,49.2,1,1,0,0,0,24,23.9);

	this.timeline.addTween(cjs.Tween.get(this.pricel).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.7,49.4,49.4);


// stage content:



(lib.protri = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		
		
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		this.cursor = "none";
		
		
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.text.gotoAndPlay(1);
		    this.text2.gotoAndPlay(1);
		    this.pricel.gotoAndPlay(0);
			this.pricel2.gotoAndPlay(0);
			this.telka.gotoAndPlay(0);
			this.fon.gotoAndPlay(0);
			this.mouse.gotoAndPlay(1);
			
		}
		
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.text.gotoAndPlay(16);
		    this.text2.gotoAndPlay(15);
		    this.pricel.gotoAndPlay(10);
			this.pricel2.gotoAndPlay(10);
			this.telka.gotoAndPlay(10);
			this.fon.gotoAndPlay(10);
			this.mouse.gotoAndPlay(10);
		
		}
		
		
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 10;
		
		}
		
		
		this.bt1.addEventListener("mouseover", fl_bt1.bind(this));
		
		function fl_bt1()
		{
			this.mouse.mouse.gotoAndStop(1);
			
		}
		
		this.bt2.addEventListener("mouseover", fl_bt2.bind(this));
		
		function fl_bt2()
		{
			this.mouse.mouse.gotoAndStop(0);
			
		}
		
		stage.canvas.style.cursor = "none";
		this.mouse.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.mouse.x = stage.mouseX/window.devicePixelRatio;
			this.mouse.y = stage.mouseY/window.devicePixelRatio;
		}
		
		stage.canvas.style.cursor = "none";
		this.pricel2.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_3.bind(this));
		
		function fl_CustomMouseCursor_3() {
			this.pricel2.x = stage.mouseX/window.devicePixelRatio;
			this.pricel2.y = stage.mouseY/window.devicePixelRatio;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mouse
	this.mouse = new lib.Символ61();
	this.mouse.parent = this;
	this.mouse.setTransform(167,239.7,1,1,0,0,0,49.5,82);

	this.timeline.addTween(cjs.Tween.get(this.mouse).wait(1));

	// pricel2
	this.pricel2 = new lib.Символ54();
	this.pricel2.parent = this;
	this.pricel2.setTransform(191.2,246.6,1.595,1.595,0,0,0,63.5,76.9);

	this.timeline.addTween(cjs.Tween.get(this.pricel2).wait(1));

	// pricel
	this.pricel = new lib.Символ53();
	this.pricel.parent = this;
	this.pricel.setTransform(309.1,168.9,1.354,1.354,0,0,0,24.1,24.3);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// girl
	this.telka = new lib.Символ55();
	this.telka.parent = this;
	this.telka.setTransform(318.9,207.2,1,1,0,0,0,147.2,141);

	this.timeline.addTween(cjs.Tween.get(this.telka).wait(1));

	// text2
	this.text2 = new lib.Символ36();
	this.text2.parent = this;
	this.text2.setTransform(885,44.3,1,1,0,0,0,165.4,48.3);

	this.timeline.addTween(cjs.Tween.get(this.text2).wait(1));

	// text
	this.text = new lib.Символ31();
	this.text.parent = this;
	this.text.setTransform(290.9,44.4,1,1,0,0,0,166.7,48.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Слой 9
	this.bt2 = new lib.Символ52();
	this.bt2.parent = this;
	this.bt2.setTransform(535.4,225,1,1,0,0,0,63.6,74);
	new cjs.ButtonHelper(this.bt2, 0, 1, 2, false, new lib.Символ52(), 3);

	this.bt1 = new lib.Символ51();
	this.bt1.parent = this;
	this.bt1.setTransform(58.3,226.9,1,1,0,0,0,60.3,72.2);
	new cjs.ButtonHelper(this.bt1, 0, 1, 2, false, new lib.Символ51(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bt1},{t:this.bt2}]}).wait(1));

	// kursor2
	this.kursor2 = new lib.Символ24();
	this.kursor2.parent = this;
	this.kursor2.setTransform(546.5,229,1,1,0,0,0,38.5,77);

	this.timeline.addTween(cjs.Tween.get(this.kursor2).wait(1));

	// kursor
	this.kursor = new lib.Символ23();
	this.kursor.parent = this;
	this.kursor.setTransform(50.1,223.7,1,1,0,0,0,59.1,73.8);

	this.timeline.addTween(cjs.Tween.get(this.kursor).wait(1));

	// fon
	this.fon = new lib.Символ56();
	this.fon.parent = this;
	this.fon.setTransform(-14.5,108.4,1,1,0,0,0,50.5,249.4);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(235,9,1138.3,500.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;