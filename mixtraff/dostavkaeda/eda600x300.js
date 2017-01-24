(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.dama = function() {
	this.initialize(img.dama);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,354,300);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.lapa_03 = function() {
	this.initialize(img.lapa_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,54);


(lib.lapa_06 = function() {
	this.initialize(img.lapa_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,46);


(lib.lapa_09 = function() {
	this.initialize(img.lapa_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,50);


(lib.lapa_12 = function() {
	this.initialize(img.lapa_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,26);


(lib.lapa_18 = function() {
	this.initialize(img.lapa_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,118);


(lib.lapa_21 = function() {
	this.initialize(img.lapa_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,39);


(lib.pizza = function() {
	this.initialize(img.pizza);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,343,143);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lapa_03();
	this.instance.parent = this;
	this.instance.setTransform(-15,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-15,-27,30,54), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lapa_06();
	this.instance.parent = this;
	this.instance.setTransform(-16,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-16,-23,32,46), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lapa_09();
	this.instance.parent = this;
	this.instance.setTransform(-19.5,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-19.5,-25,39,50), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lapa_12();
	this.instance.parent = this;
	this.instance.setTransform(-9.5,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-9.5,-13,19,26), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lapa_21();
	this.instance.parent = this;
	this.instance.setTransform(-11.5,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-11.5,-19.5,23,39), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lapa_18();
	this.instance.parent = this;
	this.instance.setTransform(-49,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-49,-59,98,118), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AAAiKIAAhwIAAh/AAAF6IAAh6IAAhkACLAAIBzAAIB8AAAl5AAIB9AAIBhAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(5.2,1,1).p("AD9AAQAABphLBKQhJBKhpAAIAAAAQhoAAhKhKQhKhKAAhpQAAAAAAgCQABhmBJhKQBKhKBoAAIAAAAQBpAABJBKQBKBKABBmQAAACAAAAg");
	this.shape_1.setTransform(0.1,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-38.7,-38.7,77.5,77.5), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AA+AAQAAAagTARQgSATgZAAQgZAAgSgTQgSgRAAgaQAAgYASgTQASgSAZAAQAZAAASASQATATAAAYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-7.2,-7.2,14.4,14.4), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pizza();
	this.instance.parent = this;
	this.instance.setTransform(-142.3,-59.3,0.83,0.83);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-142.3,-59.3,284.7,118.7), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0099").s().p("EgucAXAMAAAgt/MBc5AAAMAAAAt/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-297.2,-147.2,594.6,294.5), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A6Fa5MAAAg1xMA0LAAAMAAAA1xg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A40Z9MAAAgz5MAxpAAAMAAAAz5g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AYbEDQgJAAAAgJIAAg6Ii7AAQgKAAAAgJIAAlEQAAgJAKAAIA/AAQAKAAAAAJIAAEMIBKAAIAAkMQAAgJAJAAIA/AAQAKAAAAAJIAAEMIAfAAQAJAAAAAKIAABxQAAAJgJAAgATpEDQgKAAAAgJIAAg6Ii7AAQgJAAAAgJIAAlEQAAgJAJAAIBAAAQAJAAAAAJIAAEMIBKAAIAAkMQAAgJAJAAIBAAAQAJAAAAAJIAAEMIAfAAQAKAAAAAKIAABxQAAAJgKAAgAh3DCQgSgDgTgHQgIgDABgIIADgsQABgGAEgCQAEgCAFADQANAHAOAEQAPAEAPAAQAXAAALgKQANgKAAgVQAAgNgGgKQgGgKgLgHQgKgGgPgEQgOgDgRAAQgJgBAAgJIAAgmQAAgIAJgBQATgBAPgDQAOgEAJgGQAJgFAFgIQAEgIAAgKQAAgRgLgJQgLgJgUAAQgOAAgNADQgOADgMAFQgNAFgBgMIgDgqQAAgGAGgDQAQgHAWgEQAVgEAWAAQAaAAAUAGQAVAGANAMQANALAHARQAHAQAAAUQAAAQgDANQgDANgHAKQgHAKgKAHQgIAIgNAFQANAFAKAHQAKAIAHALQAHALAEANQAEAOAAAPQAAAYgIATQgIASgQANQgOANgWAHQgVAGgbAAQgWAAgVgEgAatDAQgNAAAEgMIAahRIhUjtQgEgMANAAIA9AAQAIAAACAIIAmCFIAqiFQACgIAJAAIA+AAQAMAAgDAMIhmFDQgCAHgJAAgAOiDAQgJAAAAgJIAAjPIhFDQQgDAIgKAAIhMAAQgKAAAAgJIAAlEQAAgJAKAAIA5AAQAKAAAAAJIAADQIBFjQQADgJAJAAIBNAAQAJAAAAAJIAAFEQAAAJgJAAgAJyDAQgJAAAAgJIAAkMIhKAAIAAEMQAAAJgJAAIhAAAQgJAAAAgJIAAlEQAAgJAJAAIDcAAQAJAAAAAJIAAFEQAAAJgJAAgAD4DAQgJAAgBgIIgMhBIhOAAIgNBBQgCAIgHAAIhBAAQgMAAADgLIBMlCQACgJAJAAIBgAAQAJAAACAJIBMFCQABAEgDAEQgCADgFAAgADVA4IgaiJIgbCJIA1AAgAl1DAQgJAAAAgJIAAjPIhFDQQgDAIgKAAIhMAAQgKAAAAgJIAAlEQAAgJAKAAIA5AAQAKAAAAAJIAADQIBFjQQADgJAJAAIBNAAQAJAAAAAJIAAFEQAAAJgJAAgAqODAQgJAAgBgIIgMhBIhOAAIgNBBQgCAIgHAAIhBAAQgMAAADgLIBMlCQACgJAJAAIBgAAQAJAAACAJIBMFCQABAEgDAEQgCADgFAAgAqxA4IgaiJIgbCJIA1AAgAvlDAQgKAAAAgJIAAkMIg9AAQgJAAAAgJIAAgvQAAgJAJAAIDNAAQAJAAAAAJIAAAvQAAAJgJAAIg9AAIAAEMQAAAJgKAAgAyFDAQgJAAgBgIIgMhBIhOAAIgNBBQgCAIgHAAIhBAAQgMAAADgLIBMlCQACgJAJAAIBgAAQAJAAACAJIBMFCQABAEgDAEQgCADgFAAgAyoA4IgaiJIgbCJIA1AAgA4tDAQgKAAAAgJIAAlEQAAgJAKAAIBjAAQAaAAAUAGQAUAGANAMQAOAMAGARQAHARAAAXQAAAXgJARQgJARgSAKQALAFAJAIQAJAIAGALQAGAKADAMQAEAMAAANQAAAagIAUQgHATgOANQgOANgWAGQgVAGgcAAgA3nCGIAdAAQATAAAJgLQAJgLAAgXQAAgWgJgLQgJgMgTAAIgdAAgA3ngMIAXAAQARAAAJgJQAJgKAAgVQAAgWgJgJQgJgJgRAAIgXAAgA6lDAQgIAAgDgGIgqhbIgqBbQgDAGgIAAIhCAAQgOAAAGgNIBLifIhKicQgGgOAOAAIBCAAQAIAAADAHIApBZIAphZQADgHAIAAIBCAAQAPAAgHAOIhKCcIBLCfQAHANgPAAgAnLi2QgNgFgKgJQgKgJgGgNQgGgNgBgSQgBgJAKAAIAiAAQAIAAABAHQACAPAGAHQAGAHALAAQALAAAGgHQAGgHACgPQAAgHAJAAIAiAAQAKAAAAAJQgCASgGANQgGANgKAJQgKAJgNAFQgOAEgRAAQgRAAgOgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-188.4,-25.9,376.9,51.9), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-188.4,-25.9,376.9,51.9), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],6.1,-47.5,6.1,29.1).s().p("EgxbAF9IAAr5MBi3AAAIAAL5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-316.4,-38.1,632.8,76.3), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon();
	this.instance.parent = this;
	this.instance.setTransform(-300,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-300,-150,600,300), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dama();
	this.instance.parent = this;
	this.instance.setTransform(-167.6,-142,0.947,0.947);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-167.6,-142,335.3,284.2), null);


<<<<<<< HEAD:mixtraff/dostavkaeda/eda600x300.js
(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("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");
	this.shape.setTransform(253.2,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AZsAwIAJgDQAGgCADgFIACgDIgBgEIgchCIAfAAIAMAtIAAAAIAKgtIAcAAIgPAtQgGAQgJASQgEAIgIAIQgGAFgHACQgFADgGABgA9lBDIgBhmIAXAAIABAJIABAAQAEgFAGgDQAGgDAIAAQAGAAAFADQAFACAFAFQAEAFACAGQADAIAAAIIgBAJIgCAJQgDAGgFAFQgEAFgGADQgGACgHAAQgGAAgEgCQgFgCgCgDIAAAjgA9GgNQgDADgBAEIAAALIAAAFQABADADADQADACAEABIAFgBIAEgEIADgGIABgHQAAgHgDgFIgFgEQgCgBgDAAQgEAAgDADgAV9AmIgIgCIgHgEIgFgGIgFgHIgDgIIgDgTIABgPIADgMIAGgLQADgFAFgDQAGgGAHgCQAIgEAJgBIAYgDIgCAVIgSADQgIABgFACQgFACgEADQgDACgCAFQgDAEAAAEIABAAQADgFAGgEIAHgCIAIgBQAHAAAGACQAHADAEAFQAEAFADAHQACAGAAAIIgBAIIgCAIQgDAGgGAGQgFAFgHADQgHACgJAAIgJgBgAV+gNIgDAHQgCADAAAEQAAAHADAFIAEAGQADABADAAQADAAADgBIADgFQADgFAAgIIAAAAQAAgGgDgFIgDgFQgDgCgDAAQgFAAgDAEgA62ATQAGgCACgDQADgDAAgEIABgMIAAgeIBAAAIAABIIgbAAIAAg0IgMAAIAAALQgBAPgBAGIgDAIIgFAGQgEAEgGACQgGACgIAAgEAnTAAnIgGgBQgDgBgCgCIgDgFIgBgHIABgFIADgGIAFgDIAGgBIAGABIAFADIADAGIABAFIgBAHIgDAFQgCACgDABIgGABgEAlBAAlQgHgDgGgFQgFgFgCgHQgDgHAAgJQAAgGACgGQACgIAFgFIAFgFIAHgEIAIgDIAJgBQAGAAAKADQAGADAEAGQAEAFACAGQACAHAAAHIgBAKIgtAAQAAAFAGACQAFACAHAAIALAAIAKgCIADASQgGACgIABIgNABQgKAAgIgCgEAlGgAPQgCAEgBAEIAWAAQAAgEgCgEIgDgDIgFgBQgGAAgDAEgEAinAAlQgHgDgFgFQgGgFgCgHQgDgHAAgJQAAgHADgHQACgHAGgFIAGgFIAHgEIAJgCIAKgBQAKAAAHADIgEATQgEgBgHAAQgEgBgDACQgDABgDACQgCADgBADQgCAEAAADQAAADACAEQABADADACQACADAEABIAGABQAIAAAEgCIADAUIgJACIgLABQgJAAgIgCgEAguAAlQgEgCgEgDIgFgHIgBgJQAAgHADgGQADgEAGgEQAFgDAIgCQAIgCAKAAIAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQgDgCgGAAIgMABIgJAEIgFgSQAPgGAQAAQAJAAAHADQAGACAEAFQAEAEACAGQACAGAAAGIAAAZIABARIgYAAIgCgGIAAAAQgEAEgGACQgFACgGAAQgFAAgFgCgEAg/AAGQgFACAAAFQAAAEACACQACABAEAAQADAAACgBQADgCABgEIAAgKQgIABgEACgAcUAlQgHgDgFgFQgGgFgDgHIgCgHIgBgJQAAgHADgIQADgHAFgFQAGgFAHgDQAFgCAMgBQAJAAAHADQAHADAFAFQAFAFADAGQACAIAAAHIAAAJIgDAJIgEAGIgFAFQgFAFgIADQgHACgHAAQgJAAgHgCgAcfgQIgEAEQgDAFAAAIQAAAJADAEIAEAFQACABADAAIAFgBIAEgEQADgFAAgJQAAgIgDgFIgEgEQgCgCgDAAQgDAAgCACgAbQAlQgHgDgFgFQgGgFgCgHQgDgHAAgJQAAgHADgHQACgHAGgFIAGgFIAHgEIAJgCIAKgBQAKAAAHADIgEATQgEgBgHAAQgEgBgDACQgDABgDACQgCADgBADQgCAEAAADQAAADACAEQABADADACQACADAEABIAGABQAIAAAEgCIADAUIgJACIgLABQgJAAgIgCgAXPAlQgIgDgFgFQgFgFgDgHIgCgHIgBgJQAAgHADgIQADgHAFgFQAFgFAIgDQAFgCAMgBQAIAAAHADQAHADAFAFQAFAFADAGQADAIAAAHIgBAJIgCAJIgEAGIgFAFQgGAFgHADQgHACgIAAQgIAAgHgCgAXZgQIgEAEQgCAFAAAIQAAAJADAEIADAFQADABADAAIAFgBIADgEQADgFAAgJQAAgIgDgFIgDgEQgCgCgDAAQgEAAgCACgAUHAmIgIgDIgHgFIgFgHQgDgEgEgLQgCgIAAgKQAAgKADgJQABgGAFgKIAGgHIAGgFIAIgDIAKgBIAKABIAIADIAGAFIAGAHQAFAKABAHQACAIAAAKQAAAKgCAJQgEALgDAFIgGAFIgGAGIgIACIgJABIgKgBgAUMgnQgCACgBAEIgDAJIgBAOIABAMIACAKQACADACACQABAAAAABQABAAAAAAQABABABAAQAAAAABAAQADAAACgCQACgCABgEIACgJIABgMIgBgOIgCgJIgDgGQgCgBgDAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAgBAAgASyAmIgJgDIgGgFIgFgHQgDgEgEgLQgCgIAAgKQAAgKACgJQACgGAFgKIAFgHIAHgFIAIgDIAJgBIAKABIAIADIAHAFIAFAHQAFAKACAHQACAIAAAKQAAAKgDAJQgEALgDAFIgFAFIgHAGIgIACIgJABIgJgBgAS3gnQgCACgCAEIgCAJIgBAOIABAMIACAKQABADADACQAAAAABABQAAAAABAAQAAABABAAQABAAAAAAQADAAACgCQACgCACgEIACgJIABgMIgBgOIgCgJIgEgGQgCgBgDAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAgAx2AlQgIgDgFgFQgFgFgDgHQgDgHAAgJQAAgGADgGQACgIAEgFIAGgFIAGgEIAIgDIAKgBQAGAAAJADQAGADAFAGQAEAFACAGQACAHAAAHIgBAKIguAAQABAFAFACQAGACAHAAIAKAAIAKgCIAEASQgHACgHABIgOABQgKAAgHgCgAxxgPQgDAEAAAEIAWAAQAAgEgCgEIgDgDIgGgBQgFAAgDAEgA17AlQgIgDgFgFQgFgFgDgHQgDgHAAgJQAAgGADgGQACgIAEgFIAGgFIAGgEIAIgDIAKgBQAGAAAJADQAGADAFAGQAEAFACAGQACAHAAAHIgBAKIguAAQABAFAFACQAGACAHAAIAKAAIAKgCIAEASQgHACgHABIgOABQgKAAgHgCgA12gPQgDAEAAAEIAWAAQAAgEgCgEIgDgDIgGgBQgFAAgDAEgA5GAlQgHgDgFgFQgGgFgDgHIgCgHIgBgJQAAgHADgIQADgHAFgFQAGgFAHgDQAFgCAMgBQAJAAAHADQAHADAFAFQAFAFADAGQACAIAAAHIAAAJIgDAJIgEAGIgFAFQgFAFgIADQgHACgHAAQgJAAgHgCgA47gQIgEAEQgDAFAAAIQAAAJADAEIAEAFQACABADAAIAFgBIAEgEQADgFAAgJQAAgIgDgFIgEgEQgCgCgDA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");
	this.shape_1.setTransform(253,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,-3.6,506.1,14.1), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(-11.8,18.1,1,1,0,0,0,-11.8,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-11.6,scaleY:0.71,rotation:18.2,x:-11.6,y:18.2},14).to({regX:-11.8,scaleY:1,rotation:0,x:-11.8,y:18.1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-27,30,54);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(-10.6,20.1,1,1,0,0,0,-10.6,20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.85,rotation:5.5,x:-10.9,y:20.7},7,cjs.Ease.get(-1)).to({regX:-10.5,regY:20.2,scaleY:0.71,rotation:11.2,x:-11,y:21},7,cjs.Ease.get(1)).to({regX:-10.6,scaleY:0.84,rotation:5.8,x:-10.9,y:20.6},7,cjs.Ease.get(-1)).to({regY:20.1,scaleY:1,rotation:0,x:-10.6,y:20.1},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-23,32,46);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,skewY:7.5,x:-4.8,y:6.9},7,cjs.Ease.get(-1)).to({scaleX:1.04,skewY:15.1,x:-9.7,y:13.7},7,cjs.Ease.get(1)).to({scaleX:1.02,skewY:8,x:-5.2,y:7.3},7,cjs.Ease.get(-1)).to({scaleX:1,skewY:0,x:0,y:0},8,cjs.Ease.get(1)).wait(1));

=======
(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(-11.8,18.1,1,1,0,0,0,-11.8,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-11.6,scaleY:0.71,rotation:18.2,x:-11.6,y:18.2},14).to({regX:-11.8,scaleY:1,rotation:0,x:-11.8,y:18.1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-27,30,54);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(-10.6,20.1,1,1,0,0,0,-10.6,20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.85,rotation:5.5,x:-10.9,y:20.7},7,cjs.Ease.get(-1)).to({regX:-10.5,regY:20.2,scaleY:0.71,rotation:11.2,x:-11,y:21},7,cjs.Ease.get(1)).to({regX:-10.6,scaleY:0.84,rotation:5.8,x:-10.9,y:20.6},7,cjs.Ease.get(-1)).to({regY:20.1,scaleY:1,rotation:0,x:-10.6,y:20.1},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-23,32,46);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,skewY:7.5,x:-4.8,y:6.9},7,cjs.Ease.get(-1)).to({scaleX:1.04,skewY:15.1,x:-9.7,y:13.7},7,cjs.Ease.get(1)).to({scaleX:1.02,skewY:8,x:-5.2,y:7.3},7,cjs.Ease.get(-1)).to({scaleX:1,skewY:0,x:0,y:0},8,cjs.Ease.get(1)).wait(1));

>>>>>>> origin/gh-pages:mixtraff/dostavkaeda600x300/eda600x300.js
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-25,39,50);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(-5,12,1,1,0,0,0,-5,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:12,y:12.1},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:24.2},7,cjs.Ease.get(1)).to({regX:-4.9,scaleX:1,scaleY:1,rotation:12.8},7,cjs.Ease.get(-1)).to({regX:-5,scaleX:1,scaleY:1,rotation:0,y:12},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-13,19,26);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(-4,18.5,1,1,0,0,0,-4,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:18.6,scaleX:1,scaleY:1,rotation:-10.6,y:18.6},7,cjs.Ease.get(-1)).to({regY:18.4,scaleX:1,scaleY:1,rotation:-21.5,x:-3.9,y:18.4},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-11.3,y:18.6},7,cjs.Ease.get(-1)).to({regY:18.5,scaleX:1,scaleY:1,rotation:0,x:-4,y:18.5},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-19.5,23,39);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-49,-59,98,118), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:4.07,scaleY:4.07,x:0.6,y:0.6,alpha:0},10).to({_off:true},1).wait(10));

	// Слой 1 - копия: 2
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:4.07,scaleY:4.07,x:0.6,y:0.6,alpha:0},10).to({_off:true},1).wait(15));

	// Слой 1 - копия: 2
	this.instance_2 = new lib.Символ31();
	this.instance_2.parent = this;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:4.07,scaleY:4.07,x:0.6,y:0.6,alpha:0},10).to({_off:true},1).wait(20));

	// Слой 1 - копия
	this.instance_3 = new lib.Символ31();
	this.instance_3.parent = this;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:4.07,scaleY:4.07,x:0.6,y:0.6,alpha:0},10).to({_off:true},1).wait(25));

	// Слой 1
	this.instance_4 = new lib.Символ31();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-7.2,14.4,14.4);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:5.6},0).wait(1).to({rotation:11.3},0).wait(1).to({rotation:16.9},0).wait(1).to({rotation:22.5},0).wait(1).to({rotation:28.1},0).wait(1).to({rotation:33.8},0).wait(1).to({rotation:39.4},0).wait(1).to({rotation:45},0).wait(1).to({rotation:50.6},0).wait(1).to({rotation:56.3},0).wait(1).to({rotation:61.9},0).wait(1).to({rotation:67.5},0).wait(1).to({rotation:73.1},0).wait(1).to({rotation:78.8},0).wait(1).to({rotation:84.4},0).wait(1).to({rotation:90},0).wait(1).to({rotation:95.6},0).wait(1).to({rotation:101.3},0).wait(1).to({rotation:106.9},0).wait(1).to({rotation:112.5},0).wait(1).to({rotation:118.1},0).wait(1).to({rotation:123.8},0).wait(1).to({rotation:129.4},0).wait(1).to({rotation:135},0).wait(1).to({rotation:140.6},0).wait(1).to({rotation:146.3},0).wait(1).to({rotation:151.9},0).wait(1).to({rotation:157.5},0).wait(1).to({rotation:163.1},0).wait(1).to({rotation:168.8},0).wait(1).to({rotation:174.4},0).wait(1).to({rotation:180},0).wait(1).to({rotation:185.6},0).wait(1).to({rotation:191.3},0).wait(1).to({rotation:196.9},0).wait(1).to({rotation:202.5},0).wait(1).to({rotation:208.1},0).wait(1).to({rotation:213.8},0).wait(1).to({rotation:219.4},0).wait(1).to({rotation:225},0).wait(1).to({rotation:230.6},0).wait(1).to({rotation:236.3},0).wait(1).to({rotation:241.9},0).wait(1).to({rotation:247.5},0).wait(1).to({rotation:253.1},0).wait(1).to({rotation:258.8},0).wait(1).to({rotation:264.4},0).wait(1).to({rotation:270},0).wait(1).to({rotation:275.6},0).wait(1).to({rotation:281.3},0).wait(1).to({rotation:286.9},0).wait(1).to({rotation:292.5},0).wait(1).to({rotation:298.1},0).wait(1).to({rotation:303.8},0).wait(1).to({rotation:309.4},0).wait(1).to({rotation:315},0).wait(1).to({rotation:320.6},0).wait(1).to({rotation:326.3},0).wait(1).to({rotation:331.9},0).wait(1).to({rotation:337.5},0).wait(1).to({rotation:343.1},0).wait(1).to({rotation:348.8},0).wait(1).to({rotation:354.4},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.8,-39,77.5,77.5);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lapa_18.png
	this.instance = new lib.Символ40();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// lapa_21.png
	this.instance_1 = new lib.Символ41();
	this.instance_1.parent = this;
	this.instance_1.setTransform(48.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// lapa_12.png
	this.instance_2 = new lib.Символ42();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-16.5,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// lapa_09.png
	this.instance_3 = new lib.Символ43();
	this.instance_3.parent = this;
	this.instance_3.setTransform(44.5,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// lapa_06.png
	this.instance_4 = new lib.Символ44();
	this.instance_4.parent = this;
	this.instance_4.setTransform(4,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// lapa_03.png
	this.instance_5 = new lib.Символ45();
	this.instance_5.parent = this;
	this.instance_5.setTransform(20,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-49,-97,113,156), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.6);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-190,-28,381,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-190.4,-26.3,384,59), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-142.3,-59.3,284.7,118.7), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-167.6,-142,335.3,284.2), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03},29,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07},30,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03},31,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},29,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-150,600,300);
<<<<<<< HEAD:mixtraff/dostavkaeda/eda600x300.js


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(255.5,9.5,1,1,0,0,0,253,7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-0.5,-4.1,520,27), null);
=======
>>>>>>> origin/gh-pages:mixtraff/dostavkaeda600x300/eda600x300.js


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 21
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(186.8,-49,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-44},12,cjs.Ease.get(-1)).to({y:-39},12,cjs.Ease.get(1)).to({y:-44.2},13,cjs.Ease.get(-1)).to({y:-49},12,cjs.Ease.get(1)).wait(1));

	// Символ 21
	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7.5,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-46},12,cjs.Ease.get(-1)).to({y:-51},12,cjs.Ease.get(1)).to({y:-45.8},13,cjs.Ease.get(-1)).to({y:-41},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.5,-146,292.3,164);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 30
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 29
	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-38.8,-39,77.5,77.5), null);


(lib.Символ28 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(143.6,10.9,1,1,0,0,0,87.1,-29.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-0.3,x:-0.3,y:9.4},0).wait(1).to({x:-0.8,y:19.3},0).wait(1).to({x:-1.2,y:29.3},0).wait(1).to({x:-1.6,y:38.7},0).wait(1).to({x:-1.9,y:47.3},0).wait(1).to({x:-2.2,y:54.9},0).wait(1).to({x:-2.5,y:61.5},0).wait(1).to({x:-2.7,y:67.3},0).wait(1).to({x:-3,y:72.4},0).wait(1).to({x:-3.1,y:77},0).wait(1).to({x:-3.3,y:81.2},0).wait(1).to({x:-3.5,y:85.1},0).wait(1).to({x:-3.6,y:88.6},0).wait(1).to({x:-3.8,y:92},0).wait(1).to({x:-3.9,y:95.2},0).wait(1).to({x:-4,y:98.2},0).wait(1).to({x:-4.1,y:101.2},0).wait(1).to({x:-4.3,y:104},0).wait(1).to({x:-4.4,y:106.7},0).wait(1).to({x:-4.5,y:109.3},0).wait(1).to({x:-4.6,y:111.8},0).wait(1).to({x:-4.7,y:114.3},0).wait(1).to({x:-4.8,y:116.7},0).wait(1).to({x:-4.9,y:119.1},0).wait(1).to({x:-5,y:121.4},0).wait(1).to({x:-5.1,y:123.7},0).wait(1).to({x:-5.2,y:125.9},0).wait(1).to({x:-5.3,y:128.1},0).wait(1).to({y:130.2},0).wait(1).to({x:-5.4,y:132.3},0).wait(1).to({x:-5.5,y:134.3},0).wait(1).to({x:-5.6,y:136.2},0).wait(1).to({x:-5.7,y:138},0).wait(1).to({y:139.8},0).wait(1).to({x:-5.8,y:141.5},0).wait(1).to({x:-5.9,y:143.1},0).wait(1).to({y:144.7},0).wait(1).to({x:-6,y:146.1},0).wait(1).to({x:-6.1,y:147.5},0).wait(1).to({y:148.8},0).wait(1).to({x:-6.2,y:149.9},0).wait(1).to({y:151},0).wait(1).to({y:152},0).wait(1).to({x:-6.3,y:152.9},0).wait(1).to({y:153.7},0).wait(1).to({y:154.5},0).wait(1).to({x:-6.4,y:155.1},0).wait(1).to({y:155.7},0).wait(1).to({y:156.2},0).wait(1).to({y:156.7},0).wait(1).to({y:157},0).wait(1).to({x:-6.5,y:157.3},0).wait(1).to({y:157.6},0).wait(1).to({y:157.8},0).wait(1).to({y:158},0).wait(1).to({y:158.1},0).wait(1).to({y:158.2},0).wait(1).to({y:158.3},0).wait(2).to({regY:0,y:158.6},0).wait(1).to({regY:-0.3,x:-6.1,y:149.8},0).wait(1).to({x:-5.8,y:141},0).wait(1).to({x:-5.4,y:132.2},0).wait(1).to({x:-5.1,y:123.6},0).wait(1).to({x:-4.7,y:115.6},0).wait(1).to({x:-4.4,y:108.3},0).wait(1).to({x:-4.2,y:101.8},0).wait(1).to({x:-3.9,y:96.1},0).wait(1).to({x:-3.7,y:91},0).wait(1).to({x:-3.5,y:86.4},0).wait(1).to({x:-3.4,y:82.3},0).wait(1).to({x:-3.2,y:78.5},0).wait(1).to({x:-3.1,y:75},0).wait(1).to({x:-2.9,y:71.7},0).wait(1).to({x:-2.8,y:68.5},0).wait(1).to({x:-2.7,y:65.6},0).wait(1).to({x:-2.6,y:62.8},0).wait(1).to({x:-2.4,y:60.1},0).wait(1).to({x:-2.3,y:57.5},0).wait(1).to({x:-2.2,y:55},0).wait(1).to({x:-2.1,y:52.6},0).wait(1).to({x:-2,y:50.3},0).wait(1).to({x:-1.9,y:48},0).wait(1).to({y:45.7},0).wait(1).to({x:-1.8,y:43.6},0).wait(1).to({x:-1.7,y:41.4},0).wait(1).to({x:-1.6,y:39.3},0).wait(1).to({x:-1.5,y:37.3},0).wait(1).to({x:-1.4,y:35.2},0).wait(1).to({x:-1.3,y:33.3},0).wait(1).to({y:31.3},0).wait(1).to({x:-1.2,y:29.4},0).wait(1).to({x:-1.1,y:27.5},0).wait(1).to({x:-1,y:25.7},0).wait(1).to({y:24},0).wait(1).to({x:-0.9,y:22.3},0).wait(1).to({x:-0.8,y:20.6},0).wait(1).to({x:-0.7,y:19},0).wait(1).to({y:17.5},0).wait(1).to({x:-0.6,y:16},0).wait(1).to({y:14.6},0).wait(1).to({x:-0.5,y:13.2},0).wait(1).to({y:12},0).wait(1).to({x:-0.4,y:10.8},0).wait(1).to({y:9.6},0).wait(1).to({x:-0.3,y:8.5},0).wait(1).to({y:7.5},0).wait(1).to({x:-0.2,y:6.6},0).wait(1).to({y:5.8},0).wait(1).to({y:5},0).wait(1).to({x:-0.1,y:4.3},0).wait(1).to({y:3.6},0).wait(1).to({y:3},0).wait(1).to({y:2.5},0).wait(1).to({x:0,y:2},0).wait(1).to({y:1.6},0).wait(1).to({y:1.2},0).wait(1).to({y:0.9},0).wait(1).to({y:0.6},0).wait(1).to({y:0.4},0).wait(1).to({y:0.2},0).wait(1).to({y:0.1},0).wait(1).to({y:-0.1},0).wait(2).to({y:-0.2},0).wait(1).to({y:-0.3},0).wait(2).to({regY:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.8,-39,77.5,77.5);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,-25.1,1,1,0,0,0,-0.1,-24.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05},11,cjs.Ease.get(-1)).to({scaleX:1.11,scaleY:1.11},11,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05},11,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190.4,-27.1,384,59);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,scaleY:1.04},12,cjs.Ease.get(-1)).to({scaleX:1.08,scaleY:1.08},12,cjs.Ease.get(1)).to({scaleX:1.04,scaleY:1.04},13,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},12,cjs.Ease.get(1)).to({rotation:3.2},3,cjs.Ease.get(1)).to({rotation:-2,y:-5.5},3,cjs.Ease.get(1)).to({rotation:3.2,y:0},3,cjs.Ease.get(1)).to({rotation:0},3,cjs.Ease.get(1)).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.3,-59.3,284.7,118.7);


(lib.Символ94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 47
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(1.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1.3,0.6,9.4,-12.7,24.4,-20.1,45.5,-30.5,67.7,-23,90.1,-15.4,100.5,5.7,102,8.7,103.1,11.8]}},17).to({guide:{path:[103.1,11.8,109.8,30.1,103.4,49.1,95.8,71.4,74.6,81.8,53.5,92.3,31.3,84.7,19.3,80.7,10.8,72.7]}},23).to({guide:{path:[10.7,72.7,3.3,65.8,-1.4,56,-11.8,34.9,-4.3,12.6,-2.1,6.1,1.3,0.6]}},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.6,-38.5,77.5,77.5);


(lib.Символ86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ94();
	this.instance.parent = this;
	this.instance.setTransform(-78.8,30.1,1,1,-18.7,0,0,34.6,43.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6.8,y:30.2},9,cjs.Ease.get(-1)).to({rotation:6.5,x:-78.7,y:30},10,cjs.Ease.get(1)).to({rotation:-6,x:-78.8,y:30.2},10,cjs.Ease.get(-1)).to({rotation:-18.7,y:30.1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173.5,-49.5,98.3,98.3);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-228.1},40,cjs.Ease.get(-1)).to({x:-450.4},39,cjs.Ease.get(1)).to({x:-219.6},41,cjs.Ease.get(-1)).to({x:0},39,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.8,-39,77.5,77.5);


(lib.Символ18 = function(mode,startPosition,loop) {
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
	this.priz = new lib.Символ86();
	this.priz.parent = this;
	this.priz.setTransform(0.2,0.1,1.256,1.256,0,0,0,-125.6,-0.4);
	this.priz._off = true;

	this.timeline.addTween(cjs.Tween.get(this.priz).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-2.2},24,cjs.Ease.get(0.96)).to({rotation:2.8},35,cjs.Ease.get(0.96)).to({rotation:0},17,cjs.Ease.get(0.96)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190.4,-27.1,384,59);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(-17.1,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-316.4,-38.1,632.8,76.3), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pizza
	this.pizza = new lib.Символ6();
	this.pizza.parent = this;
	this.pizza.setTransform(-16.2,59.4,1.14,1.14);

	this.timeline.addTween(cjs.Tween.get(this.pizza).wait(1));

	// dama
	this.dama = new lib.Символ4();
	this.dama.parent = this;
	this.dama.setTransform(0,0,1.14,1.14);

	this.timeline.addTween(cjs.Tween.get(this.dama).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-191,-161.9,382.1,323.9), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:17.8},4,cjs.Ease.get(1)).to({y:0},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191,-161.9,382.1,323.9);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_112 = function() {
		this.stop();
	}
	this.frame_124 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(13).call(this.frame_112).wait(12).call(this.frame_124).wait(1));

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(0,-13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-0.1,rotation:-2.7,x:-113.1,y:-13.3},24,cjs.Ease.get(-1)).to({regY:0,rotation:0,x:-230.9,y:-13.2},25,cjs.Ease.get(1)).to({rotation:2.2,x:-115.5},25,cjs.Ease.get(-1)).to({rotation:0,x:0},25,cjs.Ease.get(1)).wait(1).to({regY:-0.1,rotation:-2.7,x:-113.1,y:-13.3},6,cjs.Ease.get(-1)).to({regY:0,rotation:0,x:-230.9,y:-13.2},6,cjs.Ease.get(1)).to({rotation:2.2,x:-115.5},6,cjs.Ease.get(-1)).to({rotation:0,x:0},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191,-175.2,382.1,323.9);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(7));

	// Layer 2
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(55,179.5,1,1,0,0,0,315.9,54.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:215.1},6,cjs.Ease.get(-1)).to({y:206.2},1).to({y:179.5},6,cjs.Ease.get(1)).wait(1));

	// Слой 4
<<<<<<< HEAD:mixtraff/dostavkaeda/eda600x300.js
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.4,-102.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:16.5,y:-238.4},6,cjs.Ease.get(1)).wait(1).to({x:16.4,y:-102.9},6,cjs.Ease.get(1)).wait(1));

	// Символ 47
	this.instance_2 = new lib.Символ24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(236.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0},6).wait(1).to({alpha:1},6).wait(1));
=======
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(16.4,-102.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:16.5,y:-238.4},6,cjs.Ease.get(1)).wait(1).to({x:16.4,y:-102.9},6,cjs.Ease.get(1)).wait(1));

	// Символ 47
	this.instance_1 = new lib.Символ24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(236.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},6).wait(1).to({alpha:1},6).wait(1));
>>>>>>> origin/gh-pages:mixtraff/dostavkaeda600x300/eda600x300.js

	// Слой 3
	this.damapizza = new lib.Символ8();
	this.damapizza.parent = this;
	this.damapizza.setTransform(117.6,0.1);

	this.timeline.addTween(cjs.Tween.get(this.damapizza).to({scaleX:1.08,scaleY:1.08,x:126.6,y:1.1},6,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:117.6,y:0.1},6,cjs.Ease.get(1)).wait(1));

	// Слой 6
<<<<<<< HEAD:mixtraff/dostavkaeda/eda600x300.js
	this.instance_3 = new lib.Символ22();
	this.instance_3.parent = this;
	this.instance_3.setTransform(9.5,2.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0.309},6,cjs.Ease.get(1)).wait(1).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ2();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.08,scaleY:1.08,x:-0.3,y:1},6,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},6,cjs.Ease.get(1)).wait(1));
=======
	this.instance_2 = new lib.Символ22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.5,2.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0.309},6,cjs.Ease.get(1)).wait(1).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.08,scaleY:1.08,x:-0.3,y:1},6,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},6,cjs.Ease.get(1)).wait(1));
>>>>>>> origin/gh-pages:mixtraff/dostavkaeda600x300/eda600x300.js

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-175.1,632.9,325.2);


// stage content:
(lib.eda600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		stage.canvas.style.cursor = "none";
		this.prizel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		function fl_CustomMouseCursor() {
			this.prizel.x = stage.mouseX/window.devicePixelRatio;
			this.prizel.y = stage.mouseY/window.devicePixelRatio;
		}
		
		
		stage.canvas.style.cursor = "none";
		this.ruchki.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_32.bind(this));
		
		function fl_CustomMouseCursor_32() {
			this.ruchki.x = stage.mouseX/window.devicePixelRatio;
		}
		
		
		 this.vlevo.cursor = "none";
		 this.vpravo.cursor = "none";
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
			_this.prizel.gotoAndStop(1);
			_this.ruchki.gotoAndStop(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		   _this.main.gotoAndPlay(8);
		   _this.prizel.gotoAndStop(0);
		   _this.main.damapizza.gotoAndPlay(0);
			_this.ruchki.gotoAndStop(0);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.vlevo.addEventListener("mouseover", fl_MouseOverHandler_11);
		
		function fl_MouseOverHandler_11()
		{
			_this.main.damapizza.gotoAndPlay(100);
		}
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.vpravo.addEventListener("mouseover", fl_MouseOverHandler_21);
		
		function fl_MouseOverHandler_21()
		{
			_this.main.damapizza.gotoAndPlay(113);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.ruchki = new lib.Символ28();
	this.ruchki.parent = this;
	this.ruchki.setTransform(884.5,265.4);

	this.timeline.addTween(cjs.Tween.get(this.ruchki).wait(1));

	// Actions
	this.vpravo = new lib.Символ20();
	this.vpravo.parent = this;
	this.vpravo.setTransform(133.1,146.1);
	new cjs.ButtonHelper(this.vpravo, 0, 1, 2, false, new lib.Символ20(), 3);

	this.vlevo = new lib.Символ19();
	this.vlevo.parent = this;
	this.vlevo.setTransform(459.1,152.1);
	new cjs.ButtonHelper(this.vlevo, 0, 1, 2, false, new lib.Символ19(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.vlevo},{t:this.vpravo}]}).wait(1));

	// Слой 2
	this.prizel = new lib.Символ18();
	this.prizel.parent = this;
	this.prizel.setTransform(740.9,269.4,1,1,0,0,0,-0.7,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.prizel).wait(1));

	// Слой 1
	this.main = new lib.Символ1();
	this.main.parent = this;
	this.main.setTransform(300,150,1.07,1.07);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(266.1,112.6,690.1,355.6);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
<<<<<<< HEAD:mixtraff/dostavkaeda/eda600x300.js
		{src:"images/dama.png?1485244857258", id:"dama"},
		{src:"images/fon.jpg?1485244857258", id:"fon"},
		{src:"images/lapa_03.png?1485244857258", id:"lapa_03"},
		{src:"images/lapa_06.png?1485244857258", id:"lapa_06"},
		{src:"images/lapa_09.png?1485244857258", id:"lapa_09"},
		{src:"images/lapa_12.png?1485244857258", id:"lapa_12"},
		{src:"images/lapa_18.png?1485244857258", id:"lapa_18"},
		{src:"images/lapa_21.png?1485244857258", id:"lapa_21"},
		{src:"images/pizza.png?1485244857258", id:"pizza"}
=======
		{src:"images/dama.png?1485167160255", id:"dama"},
		{src:"images/fon.jpg?1485167160255", id:"fon"},
		{src:"images/lapa_03.png?1485167160255", id:"lapa_03"},
		{src:"images/lapa_06.png?1485167160255", id:"lapa_06"},
		{src:"images/lapa_09.png?1485167160255", id:"lapa_09"},
		{src:"images/lapa_12.png?1485167160255", id:"lapa_12"},
		{src:"images/lapa_18.png?1485167160255", id:"lapa_18"},
		{src:"images/lapa_21.png?1485167160255", id:"lapa_21"},
		{src:"images/pizza.png?1485167160255", id:"pizza"}
>>>>>>> origin/gh-pages:mixtraff/dostavkaeda600x300/eda600x300.js
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;