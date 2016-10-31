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
		{src:"images/brick.png?1477903696145", id:"brick"},
		{src:"images/colum.png?1477903696145", id:"colum"},
		{src:"images/fon.jpg?1477903696145", id:"fon"},
		{src:"images/h1.png?1477903696145", id:"h1"},
		{src:"images/h2.png?1477903696145", id:"h2"},
		{src:"images/h3.png?1477903696145", id:"h3"},
		{src:"images/hhh1.png?1477903696145", id:"hhh1"},
		{src:"images/hhh2.png?1477903696145", id:"hhh2"},
		{src:"images/pric.png?1477903696145", id:"pric"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.brick = function() {
	this.initialize(img.brick);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,60);


(lib.colum = function() {
	this.initialize(img.colum);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,200);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,722,320);


(lib.h1 = function() {
	this.initialize(img.h1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,73);


(lib.h2 = function() {
	this.initialize(img.h2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,63);


(lib.h3 = function() {
	this.initialize(img.h3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,64);


(lib.hhh1 = function() {
	this.initialize(img.hhh1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,117);


(lib.hhh2 = function() {
	this.initialize(img.hhh2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,156);


(lib.pric = function() {
	this.initialize(img.pric);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,87);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hhh1();
	this.instance.parent = this;
	this.instance.setTransform(1,157);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,157,136,117);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hhh2();
	this.instance.parent = this;
	this.instance.setTransform(0,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,14,152,156);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.brick();
	this.instance.parent = this;
	this.instance.setTransform(-8,64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,64,128,60);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(2,1,1).p("AGaAAQAACqh4B4Qh4B4iqAAQipAAh4h4Qh4h4AAiqQAAipB4h4QB4h4CpAAQCqAAB4B4QB4B4AACpg");
	this.shape.setTransform(41,41);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,84,84);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ATACLQgKAAgFgFQgFgGAAgJIAAgJQAAgKAFgEQAFgGAKAAIASAAQAKAAAEAGQAGAEAAAKIAAAJQAAAJgGAGQgEAFgKAAgAySCJQgMgBgKgDQgKgEgJgEQgIgFgHgHQgHgGgFgJQgFgIgDgKQgEgKgCgMQgBgMgBgNQABgOABgMQACgKAEgKQADgKAFgIQAFgIAHgHQAHgGAIgGQAJgEAKgDQAKgEAMgBIA6gBQAPAAAPADQAQAFALAIQANAIAGAMQAEAGACAHQACAHAAAIQAAAHgGAEQgEADgFAAIgSAAQgGAAgFgEQgFgDgFgHQgEgMgJgFQgKgHgNAAIgaAAQgQAAgKAEQgLAEgGAHQgGAHgDAKQgCAMgBAUQABASACAMQADANAGAHQAGAIALADQAKADAQABIAdAAQAOgBAJgGQAJgGAEgLQAFgJAFgDQAFgEAHAAIARAAQAPACAAAOQAAAIgCAHQgBAHgEAGQgHAMgNAJQgLAHgQAEQgOAEgQAAgAPsCJQgGAAgDgDQgFgEAAgGIAAgRQAAgGAFgDQADgEAGgBIAFAAQAIAAAQADIAEAAQAGAAAHgDQAGgCAFgEQAFgFAEgIIAGgQIgMAAQgTAAgPgEQgOgEgLgHQgKgJgJgLQgIgMgIgPIgWg0QgCgGACgFQACgEAGAAIAeAAQAIAAAEAEQAGAEACAGIARAoQADAJAFAHQAEAEAGAFQAGAEAIADQAHACAKAAIASAAIAahKQACgGAFgEQAGgDAGgBIAdAAQAGAAADAEQACAFgBAFIgwCHQgGAOgGAKQgHALgKAIQgKAIgOAEQgPAFgSgBgANzCJQgGAAgFgDQgDgEAAgGIAAiNIg0COQgCAFgFAEQgFADgGAAIgVAAQgFAAgGgDQgFgEgCgFIg0iOIAACNQAAAGgDAEQgFADgFAAIgaAAQgHAAgDgDQgFgEAAgGIAAi0QAAgGAFgFQAEgEAFAAIA7AAQAGAAAGAEQAEAFACAGIArB6IAsh6QACgGAFgFQAEgEAHAAIA7AAQAGAAAEAEQADAFABAGIAAC0QgBAGgDAEQgEADgGAAgAGsCJQgGAAgEgDQgEgEAAgGIAAi0QAAgGAEgFQAEgEAGAAIBvAAQAWAAAQAGIAPAFQAHAEAGAFQAFAFAFAGQAEAHADAIQADAIABAJIACARIgCAUQgBAJgDAHQgDAIgEAHQgFAGgFAFQgGAFgHAEIgPAGQgQAFgWAAIhGAAIAAAhQAAAGgEAEQgEADgGAAgAHVAyIA2AAQALAAAJgCQAJgCAHgEQAGgFAEgHQADgJAAgMQAAgLgDgHQgEgJgGgEQgHgEgJgBQgJgCgLAAIg2AAgAFMCJQgFAAgEgDQgEgEAAgGIAAiGIhNCGQgDAGgGAEQgHADgFAAIgwAAQgHAAgDgDQgFgEAAgGIAAi0QAAgGAFgFQADgEAHAAIAZAAQAFAAAFAEQAEAFAAAFIAACRIBTiQQAEgGAFgFQAGgEAGAAIAqAAQAHAAADAEQAEAFAAAGIAAC0QAAAGgEAEQgEADgGAAgAiiCJQgFAAgFgDQgDgEAAgGIAAi0QAAgGADgFQAFgEAFAAIAcAAQAFAAAEAEQAFAFAAAFIAACZIBAAAIAAiZQAAgFAEgFQAEgEAGAAIAcAAQAFAAAEAEQAEAFAAAGIAACYIA+AAIAAiZQAAgFAFgFQAEgEAFAAIAcAAQAFAAAFAEQADAFAAAGIAAC0QAAAGgDAEQgFADgFAAgAlqCJQgGAAgEgDQgEgEAAgGIAAiGIhNCGQgDAGgGAEQgGADgFAAIgxAAQgGAAgEgDQgEgEAAgGIAAi0QAAgGAEgFQAEgEAGAAIAZAAQAGAAAEAEQAFAFAAAFIAACRIBTiQQADgGAGgFQAFgEAGAAIArAAQAGAAADAEQAEAFAAAGIAAC0QAAAGgEAEQgDADgGAAgArqCJQgFAAgFgDQgDgEAAgGIAAi1QAAgFADgFQAFgEAFAAICpAAQAGAAAEAEQAEAFAAAGIAAANQAAAGgEAEQgEAEgGAAIiAAAIAAAoIBuAAQAGAAAEAFQAEADABAHIAAANQgBAGgEAEQgEAEgGAAIhuAAIAAArICAAAQAFAAAEAEQAFAEAAAFIAAAPQAAAGgFAEQgDADgHAAgAvYCJQgFAAgDgDQgEgEAAgGIAAi0QAAgGAEgFQAEgEAFAAIClAAQAGAAAEAEQAEAFAAAGIAAANQAAAFgEAFQgEAEgGAAIh7AAIAAAiIBIAAQARAAAOADQAPAFAKAHQAMAJAGAMQAGATAAALIgCAQIgEANQgGANgMAJQgKAIgPAEQgOADgRAAgAutBgIBIAAQAMAAAGgHQAHgFgBgNQABgMgHgHQgGgGgMgBIhIAAgAS9BLQgFAAgFgEQgDgEAAgFIgFh2QAAgGAFgFQAEgEAFAAIAfAAQAHAAADAEQAFAFAAAGIgFB2QAAAFgEAEQgEAEgFAAgAnChaQgIgDgHgFQgGgHgEgIQgDgHgBgLQAAgHAIAAIAMAAQAIAAADAHQACAGAEACQAGADAHAAQAHAAAFgDQAFgCACgGQADgHAHAAIAMAAQAIAAAAAHQAAALgDAHQgEAIgGAHQgHAFgJADQgKADgKAAQgLAAgKgDg");
	this.shape.setTransform(125.5,14);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,251,27.9);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiNBnIgUgIQgJgFgIgGQgHgHgGgJQgFgIgEgLQgFgKgCgMQgBgNAAgOQAAgNABgMQACgNAFgLQAEgKAFgJQAGgIAHgHQAIgGAJgFIAUgIQAPgEAjgCIAbACQAMABAMADQAKADAKAFQAJAFAIAGQAFAHAFAIQAHAJADAKQAFALACANQABAMAAANQAAAOgBANQgCAMgFAKQgDALgHAIQgFAJgFAHQgIAGgJAFQgKAEgKAEQgMADgMACIgbABQgjgCgPgEgAh3hAQgMAEgIAKQgHAJgEAMQgDANAAAQQAAARADAMQAEAOAHAIQAIAKAMAEQAMAFAQgBQARABAMgFQAMgEAHgKQAIgIAEgOQADgMAAgRQAAgQgDgNQgEgMgIgJQgHgKgMgEQgMgEgRAAQgQAAgMAEgANPBqQgIAAgGgFQgFgGAAgJIAAgJQAAgKAFgEQAGgGAIAAIASAAQALAAAEAGQAFAEABAKIAAAJQgBAJgFAGQgEAFgLAAgAK/BoQgGAAgEgDQgEgEAAgGIAAiGIhNCGQgCAGgHAEQgGADgGAAIgwAAQgGAAgEgDQgEgEAAgGIAAi0QAAgGAEgFQAEgEAGAAIAZAAQAGAAAFAEQAEAFgBAFIAACRIBUiQQADgGAFgFQAHgEAFAAIArAAQAGAAADAEQAFAFAAAGIAAC0QAAAGgFAEQgEADgFAAgAHSBoQgFAAgGgDQgIgEgDgGIgZgpQgKgPgIgGQgFgFgGgCQgGgCgHAAIgfAAIAABHQAAAGgFAEQgEADgFAAIgcAAQgFAAgEgDQgEgEAAgGIAAi0QAAgGAEgFQAEgEAFAAIAcAAQAFAAAEAEQAFAFAAAGIAABFIAfAAQANAAAKgGQAJgIAKgPIAWgoQAEgHAGgFQAFgDAGAAIAiAAQAFAAABAEQACAEgDAHIghA5QgHANgGAGQgOALgKACQAJAAAMALQAJAJAHAMIAlA7QAEAGgBAEQgCADgGAAgADPBoQgFAAgFgDQgEgEAAgGIAAg4Ig5AAQgTAAgRgFQgQgFgNgJQgFgEgFgHQgFgFgDgGQgEgHgBgJQgCgIAAgKIAAgxQAAgGAEgFQAEgEAGAAIAbAAQAGAAAEAEQAEAFAAAGIAAAxQAAAIADAHQACAHAEAEQAEAFAIACQAGACAIAAIA5AAIAAhUQAAgGAEgFQAFgEAFAAIAbAAQAHAAADAEQAFAFAAAGIAAC0QAAAGgFAEQgDADgHAAgAmuBoQgGAAgEgDQgEgEAAgGIAAi0QAAgGAEgFQAEgEAGAAIB3AAQAPAAANADQAOAEAKAHQAMAIAFALQAEAGACAGQABAHAAAIQAAAMgFAJQgEAJgKAJQAGAEAGADQAFAFAEAGQADAHACAHIACAOQgBAPgGANQgGAMgLAIQgKAIgOAEQgOADgQAAgAmFBBIBUAAQALAAAGgHQAHgGAAgMQAAgMgHgHQgGgGgLgBIhUAAgAmFgWIBPAAQAJAAAFgGQAGgFAAgKQAAgKgGgGQgFgFgJAAIhPAAgAqOBoQgFAAgFgDQgDgEAAgGIAAi1QAAgFADgFQAFgEAFAAICpAAQAGAAAEAEQAEAFAAAGIAAANQAAAGgEAEQgEAEgGAAIiAAAIAAAqIBuAAQAGAAAEAFQAEADABAHIAAALQgBAGgEAEQgEAEgGAAIhuAAIAAArICAAAQAFAAAEAEQAFAEAAAFIAAAPQAAAGgFAEQgDADgHAAgAuoBoQgGAAgEgDQgEgEAAgGIAAgPQAAgFAEgEQAEgEAGAAIALAAIAbhtQAEgMAKgRQAJgLANgHQAMgFAQgDQAOgCASgBIBPAAQAFAAAFAEQADAFAAAFIAAC1QAAAGgDAEQgFADgFAAgAs1g8QgGACgEADQgKAIgDAOIgYBgIBnAAIAAh9IgsAAQgGAAgGACgANIAqQgJAAAAgJQAAgKADgIQADgHAEgFQAIgHAOgJIAXgLQAKgIAAgIQAAgMgIgGQgIgFgSgBIgHAAQgLABgJAEQgJAEgEAJQgEAIgFAEQgFACgGABIgSAAQgEgBgFgCQgFgFAAgJQAAgNAHgKQAHgLAMgHQALgIAPgEQAOgDAOAAIARAAQASAAAOACQAQAEALAHQAMAIAGANQADAGACAHQACAIAAAJQAAALgDAHQgCAIgGAFQgHAJgRAGQgiAOAAANQAAAJgJAAg");
	this.shape.setTransform(95.2,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190.3,21.9);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AGBBoIgSgHQgJgEgHgGQgHgGgGgHQgGgHgEgJQgEgIgDgMQgDgKgBgNIgaAAIAABMQAAAGgEAEQgEADgGAAIgcAAQgGAAgEgDQgEgEAAgGIAAi0QAAgGAEgFQAEgEAGAAIAcAAQAGAAAEAEQAEAFAAAGIAABBIAbAAIAFgUQADgKAFgIIAKgPIAMgLQAKgHAXgJQANgCAdgCIAYACQAMABAKADQALADAIAFQAJAFAHAGQAIAHAFAIQAGAJADAKIAHAYQABAMAAANQAAAOgBANIgHAWQgDALgGAIQgFAJgIAHQgHAGgJAFQgIAEgLAEQgKADgMACIgYABQgegCgNgDgAGThAQgKAEgHAKQgIAJgDAMQgDANAAAQQAAAQADANQADAOAIAIQAHAKAKAEQAKAFAPgBQAOABALgFQALgEAGgKQAHgIADgOQAEgNAAgQQAAgQgEgNQgDgMgHgJQgGgKgLgEQgLgEgOAAQgPAAgKAEgAKEBoQgFAAgEgDQgFgEAAgGIAAiZIhBAAQgGAAgEgEQgEgEAAgGIAAgNQAAgGAEgFQAEgEAGAAIC5AAQAGAAAFAEQADAFABAGIAAANQgBAGgDAEQgFAEgGAAIhBAAIAACZQAAAGgDAEQgFADgFAAgACYBoQgGAAgEgDQgEgEAAgGIAAglIhoAAIgKAlQgCAGgFAEQgEADgGAAIgbAAQgGAAgDgDQgDgEABgGIAkiKIAFgPQAEgHAFgGQAJgLAOgHQAMgFAQgDQAOgCARgBIBPAAQAGAAADAEQAEAFAAAFIAAC1QAAAGgEAEQgEADgFAAgABTg8QgGACgGAEQgEAEgEAFQgDAFgDAIIgMAsIBdAAIAAhKIgpAAQgIAAgGACgAhhBoQgFAAgEgDQgEgEAAgGIAAiZIgkAAQgHAAgHACQgFACgFAEQgFAEgEAFQgEAFgCAIIghB7QgCAGgEAEQgFADgGAAIgfAAQgFABgCgEQgDgEABgFIAliLQADgIADgHQAEgHAEgGQAKgLAOgHQAMgFAQgDQAOgCARgBIBJAAQAGAAADAEQAEAFAAAGIAAC0QAAAGgEAEQgEADgGAAgAnTBoQgGAAgEgDQgEgEAAgGIAAi1QAAgFAEgFQAEgEAGAAICpAAQAFAAAFAEQADAFAAAGIAAANQAAAGgDAEQgFAEgFAAIiAAAIAAAqIBuAAQAFAAAFAFQAEADAAAHIAAALQAAAGgEAEQgFAEgFAAIhuAAIAAArICAAAQAFAAAEAEQAEAEAAAFIAAAPQAAAGgEAEQgEADgGAAgArtBoQgGAAgFgDQgEgEAAgGIAAgPQAAgFAEgEQAFgEAGAAIALAAIAbhtQADgMAKgRQAJgLAOgHQAMgFAQgDQAOgCARgBIBPAAQAGAAAEAEQAEAFAAAFIAAC1QAAAGgEAEQgEADgGAAgAp7g8QgFACgFADQgJAIgDAOIgZBgIBoAAIAAh9IgsAAQgGAAgHACg");
	this.shape.setTransform(76.5,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153,21.9);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ACwBnIgVgIQgJgFgHgGQgJgHgFgJQgGgIgEgLQgDgKgDgMQgCgNAAgOQAAgNACgMQADgNADgLQAEgKAGgJQAFgIAJgHQAHgGAJgFIAVgIQAOgEAjgCIAbACQANABALADQAKADAJAFQAKAFAHAGQAIAHAFAIQAGAJAFAKQADALACANQACAMAAANQAAAOgCANQgCAMgDAKQgFALgGAIQgFAJgIAHQgHAGgKAFQgJAEgKAEQgLADgNACIgbABQgjgCgOgEgADEhAQgLAEgIAKQgIAJgDAMQgEANAAAQQAAARAEAMQADAOAIAIQAIAKALAEQANAFAQgBQARABAMgFQAMgEAIgKQAHgIAEgOQADgMAAgRQAAgQgDgNQgEgMgHgJQgIgKgMgEQgMgEgRAAQgQAAgNAEgAgXBoQgFAAgFgDQgEgEAAgGIAAiZIhBAAQgGAAgEgEQgEgEAAgGIAAgNQAAgGAEgFQAEgEAGAAIC3AAQAHAAADAEQAFAFAAAGIAAANQAAAGgFAEQgDAEgHAAIhBAAIAACZQAAAGgDAEQgFADgFAAgAi1BoQgGAAgEgDQgFgEAAgGIAAg4Ig4AAQgUAAgQgFQgRgFgMgJQgGgEgEgHQgGgFgCgGQgEgHgCgJQgCgIAAgKIAAgxQAAgGAEgFQAFgEAGAAIAbAAQAGAAAEAEQADAFAAAGIAAAxQABAIACAHQADAHADAEQAFAFAHACQAGACAJAAIA4AAIAAhUQAAgGAFgFQAEgEAGAAIAbAAQAGAAAEAEQAEAFAAAGIAAC0QAAAGgEAEQgEADgGAAg");
	this.shape.setTransform(34.4,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.8,21.9);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg19AckMAAAg5IMBr7AAAMAAAA5Ig");
	this.shape.setTransform(345.5,182.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,691,365.8);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000033").s().p("AAxBjQhUgLgsgBIgugBQgbgBgTgEQgcgHghgTQgwgaABgfQAAgPAMgOQALgMAQgGQAXgIAqAEIA0ACQAdAAAXgEIAbgHIAbgHQAQgDAXgBIAogBQAmgCBBgQQAqgJATACQAQABANAIQAPAIAGAOQAJAUgJAaQgHAQgTAVIgTAXIgIAOQgFAJgEAEQgMAPgZAIQgnAMg0AAIglgBg");
	this.shape.setTransform(28.1,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.2,20.2);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131,64);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,63);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,73);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon();
	this.instance.parent = this;
	this.instance.setTransform(-40,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,0,722,320);


(lib.копияshape149 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkDhaIIHAAIkEC1g");
	this.shape.setTransform(0,17.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,8.1,52.2,18.3);


(lib.shape34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33FF00").ss(1,0,0,3).p("AAAAGIAAgL");
	this.shape.setTransform(-209.4,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(-235.9,293);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","#CC0000"],[0,1],-15.6,-0.3,2.3,-0.3).s().p("AA/WxIgqgTQghgTgigKMgAqgs6IBLAAMABmAtzg");
	this.shape_2.setTransform(-197,146.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","#CC0000"],[0,1],-20.5,-0.4,1.9,0.9).s().p("AhvV8MACagszIBFAAMgCRAtvQgwgKgegyg");
	this.shape_3.setTransform(-232.6,146.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000000","#CC0000"],[0,1],4.6,-94.2,4.6,36.3).s().p("AhVW4MACRgtvIAaAAMgCpAtvg");
	this.shape_4.setTransform(-227.4,146.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000000","#CC0000"],[0,1],-24.6,-4.5,17,-1.5).s().p("AhvW3IAAAAMACpgtwIA2AAMgBEAtHIgDABIgZALIgBABQg4AegtABg");
	this.shape_5.setTransform(-224.6,146.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#000000","#CC0000"],[0,1],11.8,0.6,-2.1,0.6).s().p("AAA2jIAkAAIAhAAMgAiAswQgyABg1AWg");
	this.shape_6.setTransform(-213.1,144.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#000000","#CC0000"],[0,1],1,-127.8,1,158.2).s().p("AAfWbQghgIgjAAMAAigswIABAAMAAoAs7g");
	this.shape_7.setTransform(-205.7,143.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#000000","#CC0000"],[0,1],-46.7,5.8,9.1,1.9).s().p("AAmW8IgcgEMgBmgtzIAmAAMACTAtoQgXAPgcAAIgEAAg");
	this.shape_8.setTransform(-189.2,146.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#000000","#CC0000"],[0,1],-23.9,1.5,-4.7,0.2).s().p("Ahf20IAgAAMACfAs0QgSAjgaASg");
	this.shape_9.setTransform(-185.1,146.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.8,-2.2,68.3,295.9);


(lib.shape33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33FF00").ss(1,0,0,3).p("AAAAGIAAgL");
	this.shape.setTransform(-144.6,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#CC0000"],[0,1],-20.5,-0.4,1.9,0.9).s().p("AhvV8MACagszIBFAAMgCRAtvQgwgKgegyg");
	this.shape_1.setTransform(-167.8,146.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAg");
	this.shape_2.setTransform(-171.1,293);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","#CC0000"],[0,1],-15.6,-0.3,2.3,-0.3).s().p("AA/WxQgUgHgWgMQghgTgigKMgAqgs6IBLAAMABmAtzg");
	this.shape_3.setTransform(-132.2,146.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000000","#CC0000"],[0,1],-46.7,5.8,9.1,1.9).s().p("AAmW8IgcgEMgBmgtzIAmAAMACTAtoQgXAPgcAAIgEAAg");
	this.shape_4.setTransform(-124.4,146.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000000","#CC0000"],[0,1],-23.9,1.5,-4.7,0.2).s().p("Ahf20IAgAAMACfAs0QgSAjgaASg");
	this.shape_5.setTransform(-120.3,146.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#000000","#CC0000"],[0,1],4.6,-94.2,4.6,36.3).s().p("AhVW4MACRgtvIAaAAMgCpAtvg");
	this.shape_6.setTransform(-162.6,146.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#000000","#CC0000"],[0,1],-24.6,-4.5,17,-1.5).s().p("AhvW3IAAAAMACpgtwIA2AAMgBEAtHIgDABIgZALIgBABQg4AegtABg");
	this.shape_7.setTransform(-159.8,146.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#000000","#CC0000"],[0,1],11.8,0.6,-2.1,0.6).s().p("AAA2jIAkAAIAhAAMgAiAswQgyABg1AWg");
	this.shape_8.setTransform(-148.3,144.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#000000","#CC0000"],[0,1],1,-127.8,1,158.2).s().p("AAfWbQghgIgjAAMAAigswIABAAMAAoAs7g");
	this.shape_9.setTransform(-140.9,143.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179,-2.2,68.3,295.9);


(lib.shape32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33FF00").ss(1,0,0,3).p("AAAAGIAAgL");
	this.shape.setTransform(-78.6,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAAIABAAIAAAAg");
	this.shape_1.setTransform(-105.1,293);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","#CC0000"],[0,1],11.8,0.6,-2.1,0.6).s().p("AAA2jIAkAAIAhAAMgAiAswQgyABg1AWg");
	this.shape_2.setTransform(-82.3,144.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","#CC0000"],[0,1],-20.5,-0.4,1.9,0.9).s().p("AhvV8MACagszIBFAAMgCRAtvQgwgKgegyg");
	this.shape_3.setTransform(-101.8,146.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000000","#CC0000"],[0,1],4.6,-94.2,4.6,36.3).s().p("AhVW4MACRgtvIAaAAMgCpAtvg");
	this.shape_4.setTransform(-96.6,146.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000000","#CC0000"],[0,1],-24.6,-4.5,17,-1.5).s().p("AhvW3IAAAAMACpgtwIA2AAMgBEAtHIgDABIgZALIgBABQg4AegtABg");
	this.shape_5.setTransform(-93.8,146.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#000000","#CC0000"],[0,1],-15.6,-0.3,2.3,-0.3).s().p("AA/WxIgqgTQgggTgjgKMgAqgs6IBKAAMABnAtzg");
	this.shape_6.setTransform(-66.2,146.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#000000","#CC0000"],[0,1],-46.7,5.8,9.1,1.9).s().p("AAmW8IgcgEMgBmgtzIAmAAMACTAtoQgXAPgcAAIgEAAg");
	this.shape_7.setTransform(-58.4,146.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#000000","#CC0000"],[0,1],-23.9,1.5,-4.7,0.2).s().p("Ahf20IAgAAMACfAs0QgSAjgaASg");
	this.shape_8.setTransform(-54.3,146.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#000000","#CC0000"],[0,1],1,-127.8,1,158.2).s().p("AAfWbQghgIgjAAMAAigswIABAAMAAoAs7g");
	this.shape_9.setTransform(-74.9,143.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113,-2.2,68.3,295.9);


(lib.shape31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33FF00").ss(1,0,0,3).p("AAAAGIAAgL");
	this.shape.setTransform(-13.8,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAAIABAAIAAAAg");
	this.shape_1.setTransform(-40.3,293);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","#CC0000"],[0,1],-20.5,-0.4,1.9,0.9).s().p("AhvV8MACagszIBFAAMgCRAtvQgwgKgegyg");
	this.shape_2.setTransform(-37,146.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","#CC0000"],[0,1],4.6,-94.2,4.6,36.3).s().p("AhVW4MACRgtvIAaAAMgCpAtvg");
	this.shape_3.setTransform(-31.8,146.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000000","#CC0000"],[0,1],-24.6,-4.5,17,-1.5).s().p("AhvW3IAAAAMACpgtwIA2AAMgBEAtHIgDABIgZALIgBABQg4AegtABg");
	this.shape_4.setTransform(-29,146.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000000","#CC0000"],[0,1],11.8,0.6,-2.1,0.6).s().p("AAA2jIAkAAIAhAAMgAiAswQgyABg1AWg");
	this.shape_5.setTransform(-17.5,144.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#000000","#CC0000"],[0,1],1,-127.8,1,158.2).s().p("AAfWbQghgIgjAAMAAigswIABAAMAAoAs7g");
	this.shape_6.setTransform(-10.1,143.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#000000","#CC0000"],[0,1],-46.7,5.8,9.1,1.9).s().p("AAmW8IgcgEMgBmgtzIAmAAMACTAtoQgXAPgcAAIgEAAg");
	this.shape_7.setTransform(6.4,146.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#000000","#CC0000"],[0,1],-15.6,-0.3,2.3,-0.3).s().p("AA/WxQgUgHgWgMQgggTgjgKMgAqgs6IBKAAMABnAtzg");
	this.shape_8.setTransform(-1.4,146.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#000000","#CC0000"],[0,1],-23.9,1.5,-4.7,0.2).s().p("Ahf20IAgAAMACfAs0QgSAjgaASg");
	this.shape_9.setTransform(10.5,146.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.2,-2.2,68.3,295.9);


(lib.shape30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33FF00").ss(1,0,0,3).p("AAAAGIAAgL");
	this.shape.setTransform(-177,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#DF0000"],[0,1],-17.9,0.5,7.1,-1).s().p("AAaW8MgCWgt3IBaAAMACfAszQghBEg+AAIgEAAg");
	this.shape_1.setTransform(-155.6,146.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","#DF0000"],[0,1],32.4,-0.2,-9.8,2.8).s().p("ABCWjQgmgWgciUMgBqgquIAcAAIBHAAMAByAtrQgTgIgWgLg");
	this.shape_2.setTransform(-169.1,146.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","#DF0000"],[0,1],-18.1,4.7,3.9,4.7).s().p("AhAUcMgAdgpzIBRAAMABqAqvQhPmVhPFZg");
	this.shape_3.setTransform(-178.6,136.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000000","#DF0000"],[0,1],-7.4,0,4.7,0).s().p("AgZ2pIAZAAMAAaApzIgzDgg");
	this.shape_4.setTransform(-187.8,145.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000000","#DF0000"],[0,1],-5.2,-0.1,5.2,0.2).s().p("AAX25IAcAAMAAAAtTIgBABQg4AegsABg");
	this.shape_5.setTransform(-195.7,146.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#000000","#DF0000"],[0,1],-30.3,-2.2,3.5,-0.6).s().p("AhZV6MACagszIAZAAMgBMAtzIgBAAQhBAAglhAg");
	this.shape_6.setTransform(-202.3,146.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#000000","#DF0000"],[0,1],-8.5,0,8.5,0).s().p("AAfWwMgBygtrIASAAMACWAt3QgZgBgdgLg");
	this.shape_7.setTransform(-161.4,146.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.4,-2.2,68.3,295.9);


(lib.shape26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#CC0000"],[0,1],-24.6,-4.4,17,-1.4).s().p("AhvW4MACpgtwIA2AAMgBEAtHIibAqg");
	this.shape.setTransform(5.4,146.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#CC0000"],[0,1],-15.6,-0.3,2.3,-0.3).s().p("AguWBMgAqgs6IBKAAMABnAtzg");
	this.shape_1.setTransform(33,146.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","#CC0000"],[0,1],-46.7,6,9.1,2.1).s().p("Ahc25IAmAAMACTAtoIhSALg");
	this.shape_2.setTransform(40.8,146.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","#CC0000"],[0,1],-23.9,1.5,-4.7,0.2).s().p("Ahf20IAgAAMACfAs0QgSAjgaASg");
	this.shape_3.setTransform(44.9,146.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000000","#CC0000"],[0,1],1,-127.8,1,158.2).s().p("AglWTMAAigswIABAAMAAoAs7g");
	this.shape_4.setTransform(24.3,143.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000000","#CC0000"],[0,1],11.8,0.6,-2.1,0.6).s().p("AAA2jIBFAAMgAiAswQgyABg1AWg");
	this.shape_5.setTransform(16.9,144.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#000000","#CC0000"],[0,1],4.6,-94.2,4.6,36.3).s().p("AhVW4MACRgtvIAaAAMgCpAtvg");
	this.shape_6.setTransform(2.6,146.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#000000","#CC0000"],[0,1],-20.5,-0.4,1.9,0.9).s().p("AhvV8MACagszIBFAAMgCRAtvQgwgKgegyg");
	this.shape_7.setTransform(-2.6,146.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAg");
	this.shape_8.setTransform(-5.9,293);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,0,68.3,293.3);


(lib.shape23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#DF0000"],[0,1],-17.6,-2.9,4.4,-2.9).s().p("AhY2jIBRAAMABgAs4QhYgWhZAlg");
	this.shape.setTransform(18.5,144.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#DF0000"],[0,1],32.4,-0.2,-9.8,2.8).s().p("AgJWDMgBhgs4IBjAAMAByAtrg");
	this.shape_1.setTransform(28.5,146.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","#DF0000"],[0,1],-30.3,-2.2,3.5,-0.6).s().p("AhZV6MACagszIAZAAMgBMAtzIgBAAQhBAAglhAg");
	this.shape_2.setTransform(-4.7,146.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","#DF0000"],[0,1],-5.2,-0.1,5.2,0.2).s().p("AAY25IAcAAMAAAAtTIhnAgg");
	this.shape_3.setTransform(1.9,146.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000000","#DF0000"],[0,1],-17.9,0.5,7.1,-1).s().p("AAaW8MgCWgt3IBaAAMACfAszQghBEg+AAIgEAAg");
	this.shape_4.setTransform(42,146.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000000","#DF0000"],[0,1],-6,0,6.1,0).s().p("AgL2pIAXAAMAAAAtIIgXALg");
	this.shape_5.setTransform(8.4,145.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#000000","#DF0000"],[0,1],-8.5,0,8.5,0).s().p("AAeWwMgBygtrIASAAMACWAt3QgZgBgdgLg");
	this.shape_6.setTransform(36.2,146.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,0,68.3,293.7);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 47
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(515.5,245.3,0.623,0.623,29,0,0,77,138.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:39.7,y:258.4},9).wait(1).to({regX:69,regY:215.5,rotation:35.8,x:482.9,y:289.1},0).wait(1).to({rotation:32.8,x:484.6,y:286.7},0).wait(1).to({rotation:30.7,x:485.8,y:284.9},0).wait(1).to({rotation:29.4,x:486.6,y:283.8},0).wait(1).to({regX:77,regY:138.5,rotation:29,x:514.5,y:243.8},0).to({x:515.5,y:245.3},5).wait(1));

	// Символ 46
	this.instance_1 = new lib.Символ46();
	this.instance_1.parent = this;
	this.instance_1.setTransform(532.2,216.6,0.623,0.623,29,0,0,75.8,85.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:54.7,x:539.9,y:249.3},9).wait(1).to({regX:76,regY:92,rotation:45.1,x:533.2,y:240.3},0).wait(1).to({rotation:37.6,x:530.8,y:231.4},0).wait(1).to({rotation:32.3,x:529.1,y:225},0).wait(1).to({rotation:29.1,x:528,y:221.1},0).wait(1).to({regX:75.9,regY:85.2,rotation:28,x:529.6,y:216},0).wait(1).to({regX:76,regY:92,rotation:28.1,x:527.8,y:219.8},0).wait(1).to({rotation:28.2,x:528,y:219.9},0).wait(1).to({rotation:28.4,x:528.6,y:220},0).wait(1).to({rotation:28.6,x:529.3,y:220.2},0).wait(1).to({regX:75.8,regY:85.2,rotation:29,x:532.2,y:216.6},0).wait(1));

	// Символ 44
	this.instance_2 = new lib.Символ44();
	this.instance_2.parent = this;
	this.instance_2.setTransform(533.6,188.8,1,1,0,0,0,69.4,77.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:69.5,regY:77.9,rotation:45,x:561,y:227.7},9).wait(1).to({regX:56,regY:94,rotation:21,x:531.5,y:208.7},0).wait(1).to({rotation:2.3,x:527.1,y:191.5},0).wait(1).to({rotation:-11,x:524.9,y:178.2},0).wait(1).to({rotation:-19,x:523.9,y:169.7},0).wait(1).to({regX:69.4,regY:77.9,rotation:-21.7,x:530.1,y:146.8},0).wait(1).to({regX:56,regY:94,rotation:-20.8,x:523.5,y:168.3},0).wait(1).to({rotation:-18.2,x:523,y:173},0).wait(1).to({rotation:-13.9,x:522.2,y:180.8},0).wait(1).to({rotation:-7.8,x:521.3,y:191.5},0).wait(1).to({regX:69.4,regY:77.8,rotation:0,x:533.6,y:188.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(433.1,154.9,162.2,182.5);


(lib.Символ25 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(-248.9,-13,0.795,0.795,0,0,0,120,138.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ24 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(-248.9,-13,0.795,0.795,0,0,0,120,138.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,129,145.1);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(33,33,0.805,0.805,0,0,0,41,41);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({regX:40.8,regY:40.8,scaleX:0.05,scaleY:0.05},9).wait(1));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33,33,0.805,0.805,0,0,0,41,41);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({regX:40.8,regY:40.8,scaleX:0.05,scaleY:0.05},9).to({_off:true},1).wait(4));

	// Слой 1
	this.instance_2 = new lib.Символ19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(33,33,0.805,0.805,0,0,0,41,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:40.8,regY:40.8,scaleX:0.05,scaleY:0.05},9).to({_off:true},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,67.6,67.6);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(125.5,14,1,1,0,0,0,125.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:114.6},3).to({x:613.6},7).wait(1).to({x:-344.7},0).to({x:148},8).to({x:125.5},4).wait(3).to({scaleX:1.05,scaleY:1.05,y:14.1},3,cjs.Ease.get(-1)).to({regY:13.9,scaleX:1.11,scaleY:1.11,x:125.6,y:13.9},3,cjs.Ease.get(1)).to({regY:13.8,scaleX:1.07,scaleY:1.07,x:125.7},3,cjs.Ease.get(-1)).to({regY:14,scaleX:1,scaleY:1,x:125.5,y:14},3,cjs.Ease.get(1)).wait(3).to({scaleX:1.05,scaleY:1.05,y:14.1},3,cjs.Ease.get(-1)).to({regY:13.9,scaleX:1.11,scaleY:1.11,x:125.6,y:13.9},3,cjs.Ease.get(1)).to({regY:13.8,scaleX:1.07,scaleY:1.07,x:125.7},3,cjs.Ease.get(-1)).to({regY:14,scaleX:1,scaleY:1,x:125.5,y:14},3,cjs.Ease.get(1)).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,251,27.9);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(345.4,182.9,1,1,0,0,0,345.4,182.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.352},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,691,365.8);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.colum();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(41.4,196.4,1.279,1,0,0,0,28.1,10.1);
	this.instance_1.alpha = 0.48;
	this.instance_1.filters = [new cjs.BlurFilter(13, 13, 1)];
	this.instance_1.cache(-2,-2,60,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,0,90,217.3);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 15
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(342.4,21.3,1,1,0,0,0,95.2,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({y:-48.2},7).to({y:25.5},4).to({y:18.5},2).wait(1).to({y:21.3},0).wait(7));

	// Символ 14
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(159.9,21.3,1,1,0,0,0,76.5,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({y:-48.2},8).to({y:25.5},4).to({y:18.5},2).wait(1).to({y:21.3},0).wait(10));

	// Символ 13
	this.instance_2 = new lib.Символ13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(37.6,21.3,1,1,0,0,0,34.4,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({y:-48.2},7).to({y:25.5},4).to({y:18.5},2).wait(1).to({y:21.3},0).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.2,10.3,434.3,21.9);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AoiGvQg9gOgdgIQgxgOgmgPQg8gYgOgkQgFgNAAgTIAAgiQgBgYgGgkIgKg8QgHg2AIhQIANiHIACgjQACgUAGgOQAKgZAagWQAMgLAlgaIBDguQAngaAfgOQAygYBdgTQBjgUA6ABQAoABA7ALIBiARQA1AIBUAFQBwAGAcADQBHAGCJAYQCXAbA9APQAaAGAQAIQAWALAKARQAHAKAEARIAHAdQAHAWAXAfQAcAlAHANQAKASALAoQAMAtAJAzQAEAUgBAMQAAASgHAMQgEAHgJAJIgOAQQgIAMgGAZIgRA9QAAABABAAQAAAAAAAAQABAAAAAAQABAAABAAIAFAAQADABgBAEQAAAEgDADQgsA4hEAiQhCAhhKAFQg7AEhVgPQhggUgwgIQhUgNhqAAQg9AAh/AGQABAHgNADQhWARhVAkQgiAOgMADQgJADgVADQgTADgKADIgaAIQgPAGgLABIgJABQgRAAgcgGg");
	var mask_graphics_19 = new cjs.Graphics().p("AoiGvQg9gOgdgIQgxgOgmgPQg8gYgOgkQgFgNAAgTIAAgiQgBgYgGgkIgKg8QgHg2AIhQIANiHIACgjQACgUAGgOQAKgZAagWQAMgLAlgaIBDguQAngaAfgOQAygYBdgTQBjgUA6ABQAoABA7ALIBiARQA1AIBUAFQBwAGAcADQBHAGCJAYQCXAbA9APQAaAGAQAIQAWALAKARQAHAKAEARIAHAdQAHAWAXAfQAcAlAHANQAKASALAoQAMAtAJAzQAEAUgBAMQAAASgHAMQgEAHgJAJIgOAQQgIAMgGAZIgRA9QAAABABAAQAAAAAAAAQABAAAAAAQABAAABAAIAFAAQADABgBAEQAAAEgDADQgsA4hEAiQhCAhhKAFQg7AEhVgPQhggUgwgIQhUgNhqAAQg9AAh/AGQABAHgNADQhWARhVAkQgiAOgMADQgJADgVADQgTADgKADIgaAIQgPAGgLABIgJABQgRAAgcgGg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:340.9,y:33.3}).wait(19).to({graphics:mask_graphics_19,x:340.9,y:33.3}).wait(1));

	// Символ 4
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(340.5,43,1,1,0,0,0,65.5,32);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:47.8},4,cjs.Ease.get(-1)).to({y:53},5,cjs.Ease.get(1)).to({y:48},5,cjs.Ease.get(-1)).to({y:43},5,cjs.Ease.get(1)).wait(1));

	// Слой 5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AFnFTIhwglQgkgMgSgFQgegIgZgBQgYgCgnAFQgxAGgPABQgQAAhOgHQg7gFgkAIQgPADgiANIg3AVQgQAGgKACQgOACgLgEQgTgHgOgiQgQgngThEQgdhrgJg+IgKhIQgGgsgHgdIgHgbQgEgPAAgMQgBgSAJggQAKgjABgPIACgQQACgJAFgEQAHgHARAAIBSABQAxABAhgFIAkgGQAXgFAOgBQAkgCA0ALIBYASQAaAFA2AEQA4AEAaAEIA7ALQAlAIAXACIAkADQAVADAOAHQAQAHAQASIAcAgIAZAcQAPAQAHAOQAJATAEAkQAFAuAEBEQADAvgDAdQgDAhgPA2IgcBhQgHAbgJAPQgLATgQACIgEAAQgHAAgOgEg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AFnFTIhwglQgkgMgSgFQgegIgZgBQgYgCgnAFQgxAGgPABQgQAAhOgHQg7gFgkAIQgPADgiANIg3AVQgQAGgKACQgOACgLgEQgTgHgOgiQgQgngThEQgdhrgJg+IgKhIQgGgsgHgdIgHgbQgEgPAAgMQgBgSAJggQAKgjABgPIACgQQACgJAFgEQAHgHARAAIBSABQAxABAhgFIAkgGQAXgFAOgBQAkgCA0ALIBYASQAaAFA2AEQA4AEAaAEIA7ALQAlAIAXACIAkADQAVADAOAHQAQAHAQASIAcAgIAZAcQAPAQAHAOQAJATAEAkQAFAuAEBEQADAvgDAdQgDAhgPA2IgcBhQgHAbgJAPQgLATgQACIgEAAQgHAAgOgEg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:187,y:36.8}).wait(19).to({graphics:mask_1_graphics_19,x:187,y:36.8}).wait(1));

	// Символ 3
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(189.5,44,1,1,0,0,0,32.5,31.5);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:41.7},4,cjs.Ease.get(-1)).to({y:39},5,cjs.Ease.get(1)).to({y:41.5},5,cjs.Ease.get(-1)).to({y:44},5,cjs.Ease.get(1)).wait(1));

	// Слой 6 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AFWHoQg6gVg5giIgbgQQgQgJgNgEQgMgEgVgFIghgHIgggLQgUgHgNgDQgOgDgUgBIghgBQgTgCg0gIQgsgIgbAAQgYAAgxAIQgwAIgZgBQg2AAg+gZQgngRhFgnIh4hFQgDgBgCgDIAAgBQgVgYgPgrIgXhKQgGgSgWguQgSgqgHgZQgJghgHg6QgDgXAAgRQgBgUAEgYQAOhPAyg4QAVgXAtgiQAugkAagJQAjgMAzAGQAeADA7AJQAZACAugBQAwAAAWABQAgADAtAJIBLARQA5ALBSAJQBgAKBVAFQBhAFBvADQB2ADA1AGQBgAKBHAZQApAPAIAWQAFAOgEAQQgCAKgJAUQhOCoguCyIgOA0QgIAdgJAVQgOAlgoBAIgdAwQgHAMgHADQgFACgOAAQgRABgOALQgPAMgFARIgDAdQgBATgGAJQgHANgSAHQgMAEgWAEIgfADIgLAAIAAABQAAABAAABQAAABAAAAQgBAAAAABQgBAAgBAAIgFgBg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AFWHoQg6gVg5giIgbgQQgQgJgNgEQgMgEgVgFIghgHIgggLQgUgHgNgDQgOgDgUgBIghgBQgTgCg0gIQgsgIgbAAQgYAAgxAIQgwAIgZgBQg2AAg+gZQgngRhFgnIh4hFQgDgBgCgDIAAgBQgVgYgPgrIgXhKQgGgSgWguQgSgqgHgZQgJghgHg6QgDgXAAgRQgBgUAEgYQAOhPAyg4QAVgXAtgiQAugkAagJQAjgMAzAGQAeADA7AJQAZACAugBQAwAAAWABQAgADAtAJIBLARQA5ALBSAJQBgAKBVAFQBhAFBvADQB2ADA1AGQBgAKBHAZQApAPAIAWQAFAOgEAQQgCAKgJAUQhOCoguCyIgOA0QgIAdgJAVQgOAlgoBAIgdAwQgHAMgHADQgFACgOAAQgRABgOALQgPAMgFARIgDAdQgBATgGAJQgHANgSAHQgMAEgWAEIgfADIgLAAIAAABQAAABAAABQAAABAAAAQgBAAAAABQgBAAgBAAIgFgBg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:49.8,y:28.9}).wait(19).to({graphics:mask_2_graphics_19,x:49.8,y:28.9}).wait(1));

	// Символ 2
	this.instance_2 = new lib.Символ2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(40,36.5,1,1,0,0,0,40,36.5);

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:41.3},4,cjs.Ease.get(-1)).to({y:46.5},5,cjs.Ease.get(1)).to({y:41.5},5,cjs.Ease.get(-1)).to({y:36.5},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,406,75);


(lib.Символ8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance_2 = new lib.Символ20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(44.1,44.1,1,1,0,0,0,33,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(2,1,1).p("AE7AAQAACChdBcQhcBdiCAAQiBAAhdhdQhchcAAiCQAAiBBchdQBdhcCBAAQCCAABcBcQBdBdAACBg");
	this.shape.setTransform(44.3,43.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance_3 = new lib.pric();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87,87);


(lib.sprite150 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.копияshape149("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.992,1.992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.9,16.1,103.9,36.3);


(lib.sprite27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape26("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,0,68.3,293.3);


(lib.sprite24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape23("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,0,68.3,293.7);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8_1();
	this.instance.parent = this;
	this.instance.setTransform(43.5,43.5,1,1,0,0,0,43.5,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87,87);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(714.1,70.5,1,1,0,0,0,203,37.5);

	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(704.1,160,1,1,0,0,0,320,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(344.1,0,722,320);


(lib.sprite152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.sprite150();
	this.instance.parent = this;
	this.instance.setTransform(0.2,-40.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,scaleY:1.01,y:-42.5},2).to({scaleX:0.93,scaleY:1.08,y:-49.4},2).to({scaleX:0.83,scaleY:1.18,y:-60.8},2).to({scaleX:0.89,scaleY:1.11,x:0.1,y:-65.4},1).to({scaleX:0.94,scaleY:1.07,y:-68.6},1).to({scaleX:0.97,scaleY:1.03,x:0.2,y:-70.7},1).to({scaleX:1,scaleY:1,y:-72.6},2).to({scaleX:1,scaleY:1,y:-72.8},1).to({scaleX:1,scaleY:1,y:-72.5},1).to({scaleX:0.99,scaleY:1.01,y:-71.5},1).to({scaleX:0.97,scaleY:1.03,y:-69.6},1).to({scaleX:0.94,scaleY:1.06,y:-66.5},1).to({scaleX:0.89,scaleY:1.1,y:-62.2},1).to({scaleX:0.79,scaleY:1.2,y:-51.9},2).to({scaleX:1,scaleY:1,y:-40.8},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.7,-24.8,103.9,36.4);


(lib.sprite36копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite27();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,0,68.3,293.3);


(lib.sprite36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite27();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:-1.8},3).to({scaleY:1,skewX:-4.5},5).to({scaleY:1,skewX:-5.5},2).to({scaleY:0.99,skewX:-7.8,x:-0.1},8).to({scaleY:0.99,skewX:-8},1).to({scaleY:0.99,skewX:-8.4},5).to({scaleY:1,skewX:8.3,x:0.2},17).to({scaleY:0.99,skewX:-3.4,x:0},13).to({skewX:-3.3},2).to({skewX:-2.8},3).to({skewX:-0.8},5).to({skewX:0,x:-0.1},2).to({scaleY:0.99,skewX:-1.3,x:0.1},16).to({scaleY:1,skewX:0,x:0},93).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,0,68.3,293.3);


(lib.sprite35копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_154 = function() {
		/* stop ();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(154).call(this.frame_154).wait(26));

	// Layer 1
	this.instance = new lib.sprite24();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,0.992,0,-7.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:4.3,x:0.1},21).to({scaleY:0.99,skewX:-3.5,x:0},8).to({skewX:-3},3).to({skewX:-2.5},2).to({scaleY:0.99,skewX:-1.6},2).to({skewX:-0.5},2).to({skewX:0},1).to({skewX:1.5,x:-0.1},2).to({skewX:2},6).to({scaleY:1,skewX:0,x:0},103).wait(5).to({scaleY:1,skewX:-1.8},3).to({scaleY:1,skewX:-3.5},3).to({scaleY:0.99,skewX:-6.8},9).to({skewX:-7.5},3).to({skewX:-8},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,0,105.4,289);


(lib.sprite35копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite24();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,0.993,0,-7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:-7.5},2).to({skewX:-8},6).to({scaleY:1,skewX:4.3,x:0.1},22).to({scaleY:0.99,skewX:-3.5,x:0},8).to({skewX:-3},3).to({skewX:-2.5},2).to({scaleY:0.99,skewX:-1.6},2).to({skewX:-0.5},2).to({skewX:0},1).to({skewX:1.5,x:-0.1},2).to({skewX:2},6).to({scaleY:1,skewX:0,x:0},103).wait(5).to({scaleY:1,skewX:-1.8},3).to({scaleY:1,skewX:-3.5},3).to({scaleY:0.99,skewX:-6.8},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,0,103.9,289.3);


(lib.sprite35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_179 = function() {
		/* stop ();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(179).call(this.frame_179).wait(1));

	// Layer 1
	this.instance = new lib.sprite24();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:-1.8},3).to({scaleY:1,skewX:-3.5},3).to({scaleY:0.99,skewX:-6.8},9).to({skewX:-7.5},3).to({skewX:-8},6).to({scaleY:1,skewX:4.3,x:0.1},22).to({scaleY:0.99,skewX:-3.5,x:0},8).to({skewX:-3},3).to({skewX:-2.5},2).to({scaleY:0.99,skewX:-1.6},2).to({skewX:-0.5},2).to({skewX:0},1).to({skewX:1.5,x:-0.1},2).to({skewX:2},6).to({scaleY:1,skewX:0,x:0},103).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,0,68.3,293.7);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(43.5,43.5,1,1,0,0,0,43.5,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:89.4},11,cjs.Ease.get(-1)).to({x:143.5},13,cjs.Ease.get(1)).to({x:91.5},13,cjs.Ease.get(-1)).to({x:43.5},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87,87);


(lib.U = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.arrow = new lib.sprite152();
	this.arrow.parent = this;
	this.arrow.setTransform(6.4,23,0.228,0.342);
	this.arrow.shadow = new cjs.Shadow("#FF9900",0,0,11);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,2.5,51,40);


(lib.sprite68 = function(mode,startPosition,loop) {
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

	// Слой 2
	this.instance = new lib.U();
	this.instance.parent = this;
	this.instance.setTransform(-228.8,-40.5,0.708,0.708,0,-90,90,6.4,11.5);

	this.instance_1 = new lib.U();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-171,-40.5,0.708,0.708,90,0,0,6.4,11.3);

	this.instance_2 = new lib.U();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-199.9,-11.7,0.708,0.708,0,180,0,6.5,11.5);

	this.instance_3 = new lib.U();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-199.9,-69.5,0.708,0.708,0,0,0,6.5,11.3);

	this.instance_4 = new lib.U();
	this.instance_4.parent = this;
	this.instance_4.setTransform(295.3,-39.8,0.708,0.708,0,-90,90,6.4,11.5);

	this.instance_5 = new lib.U();
	this.instance_5.parent = this;
	this.instance_5.setTransform(353.1,-39.8,0.708,0.708,90,0,0,6.4,11.3);

	this.instance_6 = new lib.U();
	this.instance_6.parent = this;
	this.instance_6.setTransform(324.2,-11,0.708,0.708,0,180,0,6.5,11.5);

	this.instance_7 = new lib.U();
	this.instance_7.parent = this;
	this.instance_7.setTransform(324.2,-68.8,0.708,0.708,0,0,0,6.5,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.sprite37копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 15
	this.instance = new lib.shape34("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.sprite36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-230,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},20).wait(100));

	// Layer 13
	this.instance_2 = new lib.shape30("synched",0);
	this.instance_2.parent = this;

	this.instance_3 = new lib.sprite35();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-197.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},18).wait(102));

	// Layer 11
	this.instance_4 = new lib.shape33("synched",0);
	this.instance_4.parent = this;

	this.instance_5 = new lib.sprite36();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-165.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},16).wait(104));

	// Layer 9
	this.instance_6 = new lib.shape30("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(65.6,0);

	this.instance_7 = new lib.sprite35();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-132,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},14).wait(106));

	// Layer 7
	this.instance_8 = new lib.shape32("synched",0);
	this.instance_8.parent = this;

	this.instance_9 = new lib.sprite36();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-99.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},12).wait(108));

	// Layer 5
	this.instance_10 = new lib.shape30("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(130.8,0);

	this.instance_11 = new lib.sprite35();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-66.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},10).wait(110));

	// Layer 3
	this.instance_12 = new lib.shape31("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.sprite36();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-34.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},8).wait(112));

	// Layer 1
	this.instance_14 = new lib.shape30("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(196.1,0);

	this.instance_15 = new lib.sprite35();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-1.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14}]}).to({state:[{t:this.instance_15}]},6).wait(114));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.8,-2.2,296.8,295.9);


(lib.sprite37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 15
	this.instance = new lib.sprite36();
	this.instance.parent = this;
	this.instance.setTransform(-230,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	// Layer 13
	this.instance_1 = new lib.sprite35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-197.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

	// Layer 11
	this.instance_2 = new lib.sprite36();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-165.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

	// Layer 9
	this.instance_3 = new lib.sprite35копия2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-132,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	// Layer 7
	this.instance_4 = new lib.sprite36();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-99.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// Layer 5
	this.instance_5 = new lib.sprite35();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-66.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	// Layer 3
	this.instance_6 = new lib.sprite36();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-34.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120));

	// Layer 1
	this.instance_7 = new lib.sprite35копия();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-1.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// Слой 2
	this.instance_8 = new lib.sprite36копия();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-176.6,0,4.866,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.8,0,332.4,293.7);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(43.5,43.5,1,1,0,0,0,43.5,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:91.8},14,cjs.Ease.get(-1)).to({y:143.5},15,cjs.Ease.get(1)).to({y:90.2},16,cjs.Ease.get(-1)).to({y:43.5},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87,87);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A6iLPIAA2dQaiFIajlIIAAWdg");
	mask.setTransform(7.3,62);

	// Слой 3
	this.instance = new lib.sprite37копия();
	this.instance.parent = this;
	this.instance.setTransform(-137.1,-104.4,0.306,0.437,0,0,180);

	this.instance_1 = new lib.sprite37копия();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-63.3,-104.4,0.306,0.437,0,0,180);

	this.instance_2 = new lib.sprite37копия();
	this.instance_2.parent = this;
	this.instance_2.setTransform(16.2,-104.4,0.306,0.437,0,0,180);

	this.instance_3 = new lib.sprite37копия();
	this.instance_3.parent = this;
	this.instance_3.setTransform(94.2,-104.4,0.306,0.437,0,0,180);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],1.2,14.9,1.2,-31.9).s().p("A6SCoIAAlPMA0lAAAIAAFPg");
	this.shape.setTransform(8.9,31.4);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance_4 = new lib.sprite37();
	this.instance_4.parent = this;
	this.instance_4.setTransform(94.2,-57,0.306,0.437,0,0,180);

	this.instance_5 = new lib.sprite37();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-143.3,-56.5,0.306,0.437,0,0,180);

	this.instance_6 = new lib.sprite37();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-63.3,-56.5,0.306,0.437,0,0,180);

	this.instance_7 = new lib.sprite37();
	this.instance_7.parent = this;
	this.instance_7.setTransform(16.2,-57,0.306,0.437,0,0,180);

	this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.7,-9.9,340,81.8);


(lib.Символ23копия = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(43.5,-36.5,1,1,0,0,0,43.5,43.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ23 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(43.5,43.5,1,1,0,0,0,43.5,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87,87);


// stage content:



(lib._3_back_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("tick", fl_CustomMouseCursor1.bind(this));
		
		function fl_CustomMouseCursor1() {
			this.pricel.x = stage.mouseX;
			this.pricel.y = stage.mouseY;
			_this.brick.x = stage.mouseX;
		}
		
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
			this.fon.x = -stage.mouseX / 10;
		}
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		function fl_MouseOverHandler_5() {
			_this.black.gotoAndPlay(1);
			_this.celi.gotoAndStop(1);
			_this.brr.gotoAndStop(1);
			_this.prr.gotoAndStop(1);
			_this.brick.gotoAndStop(1);
			_this.pricel.gotoAndStop(1);
		
		}
		
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		function fl_MouseOutHandler_2() {
			_this.black.gotoAndStop(0);
			_this.celi.gotoAndPlay(0);
			_this.brr.gotoAndStop(0);
			_this.prr.gotoAndStop(0);
			_this.brick.gotoAndStop(0);
			_this.pricel.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.pricel = new lib.Символ23копия();
	this.pricel.parent = this;
	this.pricel.setTransform(787.7,129,1,1,0,0,0,43.5,43.5);

	this.prr = new lib.Символ23();
	this.prr.parent = this;
	this.prr.setTransform(322.6,139,1,1,0,0,0,43.5,43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prr},{t:this.pricel}]}).wait(1));

	// Слой 2
	this.brick = new lib.Символ25();
	this.brick.parent = this;
	this.brick.setTransform(682.1,248.5,1,1,0,0,0,-60,66);

	this.brr = new lib.Символ24();
	this.brr.parent = this;
	this.brr.setTransform(451,248.5,1,1,0,0,0,-60,66);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.brr},{t:this.brick}]}).wait(1));

	// Слой 11
	this.celi = new lib.sprite68();
	this.celi.parent = this;
	this.celi.setTransform(255,135.9,1.077,1.077);

	this.timeline.addTween(cjs.Tween.get(this.celi).wait(1));

	// Слой 7
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(322.6,139.6,1,1,0,0,0,125.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// OBJECTS
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["rgba(0,0,0,0)","rgba(174,82,23,0)","#AE5217","#BB611A","#CB721E","#D67F21","#DD8622","#DF8822","#4D2010"],[0,0.886,0.886,0.886,0.89,0.898,0.902,0.914,1],-7.1,12.4,7.2,-12.3).ss(2).p("ACFAAQAAA3goAnQgmAng3AAQg2AAgmgnQgognAAg3QAAg2AognQAmgnA2AAQA3AAAmAnQAoAnAAA2g");
	this.shape.setTransform(604.1,94.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","rgba(245,188,59,0)","#F5BC3B","#F5BD3C","#F5CF52","#F5DC63","#F5E46E","#F5E772","#F9F2C3"],[0,0.792,0.792,0.796,0.82,0.847,0.871,0.898,1],-34.3,22.9,40,-26.6).s().p("AhcBeQgngngBg3QABg2AngnQAmgnA2AAQA3AAAmAnQAnAnABA2QgBA3gnAnQgmAng3AAQg2AAgmgng");
	this.shape_1.setTransform(604.1,94.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F2E56E","#CB822E","#F7C448","#E5A83B","#CC812A","#E2A33E","#F0B94C","#F5C151","#FEF3C3","#FDEEB4","#FBDF8E","#F7C855","#F5BC3B","rgba(245,188,59,0)","rgba(0,0,0,0)"],[0,0.224,0.29,0.333,0.38,0.431,0.471,0.498,0.647,0.671,0.71,0.769,0.792,0.792,1],-34.3,22.9,40,-26.6).s().p("AhcBeQgngngBg3QABg2AngnQAmgnA2AAQA3AAAmAnQAnAnABA2QgBA3gnAnQgmAng3AAQg2AAgmgng");
	this.shape_2.setTransform(604.1,94.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().ls(["rgba(0,0,0,0)","rgba(174,82,23,0)","#AE5217","#BB611A","#CB721E","#D67F21","#DD8622","#DF8822","#4D2010"],[0,0.886,0.886,0.886,0.89,0.898,0.902,0.914,1],-7.1,12.4,7.2,-12.3).ss(2).p("ACFAAQAAA3gnAnQgnAng3AAQg1AAgognQgngnAAg3QAAg2AngnQAognA1AAQA3AAAnAnQAnAnAAA2g");
	this.shape_3.setTransform(40.1,94.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0)","rgba(245,188,59,0)","#F5BC3B","#F5BD3C","#F5CF52","#F5DC63","#F5E46E","#F5E772","#F9F2C3"],[0,0.792,0.792,0.796,0.82,0.847,0.871,0.898,1],-34.3,22.9,40,-26.6).s().p("AhdBeQgngnAAg3QAAg2AngnQAognA1AAQA3AAAnAnQAnAnAAA2QAAA3gnAnQgnAng3AAQg1AAgogng");
	this.shape_4.setTransform(40.1,94.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#F2E56E","#CB822E","#F7C448","#E5A83B","#CC812A","#E2A33E","#F0B94C","#F5C151","#FEF3C3","#FDEEB4","#FBDF8E","#F7C855","#F5BC3B","rgba(245,188,59,0)","rgba(0,0,0,0)"],[0,0.224,0.29,0.333,0.38,0.431,0.471,0.498,0.647,0.671,0.71,0.769,0.792,0.792,1],-34.3,22.9,40,-26.6).s().p("AhdBeQgngnAAg3QAAg2AngnQAognA1AAQA3AAAnAnQAnAnAAA2QAAA3gnAnQgnAng3AAQg1AAgogng");
	this.shape_5.setTransform(40.1,94.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 6
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#F2E56E","#CB822E","#F7C448","#E5A83B","#CC812A","#E2A33E","#F0B94C","#F5C151","#FEF3C3","#FDEEB4","#FBDF8E","#F7C855","#F5BC3B","rgba(245,188,59,0)","rgba(0,0,0,0)"],[0,0.224,0.29,0.333,0.38,0.431,0.471,0.498,0.647,0.671,0.71,0.769,0.792,0.792,1],-334.4,-3.2,465.6,-3.2).s().p("Eg0OAARIAAhiUA0FACDAvdgCFQCeAHCeAEIAABIQicAIieAKQ6qBC4wAAQ5DAA3HhDg");
	this.shape_6.setTransform(336.4,94.4,1.024,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(357.6,160.8,2.087,1,0,0,0,23.5,64.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(325.6,14.1,0.754,0.754,0,0,0,243.7,19.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 8
	this.instance_3 = new lib.Символ8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(39.7,184.6,1,1.094,0,0,0,30,100);

	this.instance_4 = new lib.Символ8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(603.4,184.6,1,1.094,0,0,0,30,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Слой 10
	this.black = new lib.Символ12();
	this.black.parent = this;
	this.black.setTransform(317.6,156.4,1,1,0,0,0,345.4,182.9);

	this.timeline.addTween(cjs.Tween.get(this.black).wait(1));

	// Слой 1
	this.fon = new lib.Символ10();
	this.fon.parent = this;
	this.fon.setTransform(-15.5,145,1,1,0,0,0,361,160);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(272.8,126,736.8,365.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;