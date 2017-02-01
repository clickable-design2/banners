(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.mouse = function() {
	this.initialize(img.mouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,115);


(lib.pizza1 = function() {
	this.initialize(img.pizza1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,88);


(lib.pizza2 = function() {
	this.initialize(img.pizza2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,88);


(lib.pizza3 = function() {
	this.initialize(img.pizza3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,88);


(lib.pizza4 = function() {
	this.initialize(img.pizza4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,88);


(lib.pizza5 = function() {
	this.initialize(img.pizza5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,88);


(lib.pizzatext = function() {
	this.initialize(img.pizzatext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.radar = function() {
	this.initialize(img.radar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,287);


(lib.setka = function() {
	this.initialize(img.setka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);// helper functions:

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


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza1();
	this.instance.parent = this;
	this.instance.setTransform(-36.4,-36.4,0.829,0.829);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,-36.4,73,73);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza1();
	this.instance.parent = this;
	this.instance.setTransform(-33.7,-40.8,0.852,0.852,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.8,-40.8,81.8,81.8);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza1();
	this.instance.parent = this;
	this.instance.setTransform(-36.4,-36.4,0.829,0.829);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,-36.4,73,73);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mouse();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol51, new cjs.Rectangle(0,0,93,115), null);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCA40").s().p("AglE2Qg7AAhGgfQgwgVgXgbQgYgbAAggQABgnATgoQAXgvAigHQAcgGAnAAQAnAAAUATQATATAAAmQAAAYgQATQgPATgeAOQAQAOAuAAIAeACIASgCQAugRAUgTQAYgZAAgrQAAgYgJgYQgJgYgTgXQgmgugtgCIgFgCIgFgCQgvAAgdARQgOAIgTAYQgOAQgMAAQgLAAhEgtIARicIAUhxQAjgIBhAAQgNAADdAIIASALIAABeQgaAIgcgCQhtABhoAKIgDALIADAZQADAPgFAGIALAAQBDgaBbAAQAWAAAbAIIA7AXQAiARAVARQAUARAHATQAUA6AAAlQAAAegIAfQgJAfgSAgQgkBDgxAdQgJAJgoATQgwAOg0AAg");
	this.shape.setTransform(35.3,50.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol49, new cjs.Rectangle(9.1,19.8,52.3,62), null);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCA40").s().p("AoPA5QgaAAgDgBIgDgCIgCgUQAAgBAAgBQABAAAAgBQABAAAAAAQABAAABAAIAGABIAFgBIAAgGIACgnQAAgNgBAAIgPgBIABgOIABgBIAOgDIAPgCIABAAIAggDQAMAAAJgBIALgCQACAAAAAIIAAAFIgCAYQgDAAgMACIgCgCIABgNIgSABIgOACIgEARIAAABIAUAEIANAEIAMAFIAHAFQAEAEABAFIACAHIgBAJIgDAIQgEAFgGADIgNADIgOADIgRABgAoMAPIgBAWIARAAQAEAAAEgEQAEgDAAgEQAAgEgCgCIgGgFIgPgDIgFAAIAAADgAAcAmIAJgFQgDgKgCAAIgWADIgGACIAAAHQAMACAAADIgBAFIgBAFIgCAEIgTgBQgPAAgKgDIAAgDIACgHQACgFACgBIAKgBQABgBAEgPIALglIAGgZQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIAcABQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIARAzQAEAOAGAKIAJABQACAAgBAFIABANQgEABgHABIgMABIgXAEQgCgHgBgLgAAlAHQgCgHgFgJIgIgPQgDASgBAJQADACAQACIAAAAgAiSAzQgEgDgDgEIgSABIgVAAIgDgBIAAgHQAAgBAAgBQAAgBAAgBQAAAAAAAAQAAgBABAAIAFgEIgCgZIAAgKIgBgOIgOABIgOAAIgDAAIAAAJIABAmIAFABIADACQACADAAAJIABACIgFABIgmABIgBgDIABgNIACgCQAAAAAAABQABAAAAAAQABAAAAAAQABAAABAAIABgDQABgbgBgOIAAgDQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIACgBIgJgBIgBgFIAEgPIAAgBIAeABQAOAAALgBQAYgCAKAAIAGAUIgBAAIgJACIADAjQAAAAAAgBQAAAAAAAAQAAABAAAAQABABAAABIABAIQABABAEgBQAGAAABACIAAAFIADgFIAFgEIAHgBQAJAAAAAMIgBAFIAFgDQAEgCACgEIACgJIAAgJIAAgEIgDgcIgBgBIgKAAIgBAAIAAAAIgBAAIAAgQQAFgCAJgBIAagBQAhgDAJAAIAFASIgBAAIgJADIAEAwQAAgBAAAAQAAAAAAAAQAAAAAAABQABABAAABIABAHIAFAAQAFAAABABIABATIglABIgDgBIAAgGQAAgBAAgBQAAgBABAAQAAgBAAAAQAAgBAAAAIAFgEIAAgDIgCgcIgBgHIgBgXIgQACQgCAEACAHIAAANIAAADIAAAJQgBASgNAMIgIAHIgKADIgKABQgGAAgGgDgAEyA2IgCgCIgCgTQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAGABIAEgBIAAgFIACguIgEAAIgFACIgCgSQAAgFgCgFQAMgCAFABIAagEQADANAAAJQgIAEAAgBIgBARIASAEIAWAIIAHAGQADADABAFIABADIABADQAAADgBAGIgDAIQgDAFgGACIgLAEQgMADgPAAIghABIgEAAgAFVANIgBAEIABASIARAAQAFAAADgEQAEgDAAgEQAAgEgCgCIgGgFQgHgCgGAAIgBAAIgBgBIgFAAIgBADgAlSAyQgJgEgGgIQgMgOAAgXIADgNQAMgsAhAAIAHABQAEAAAGADQAHAEAHAGIABgFQAFgCAMgBIACABIABAeIABAIQAAABgIADIgJADIgHgOQgGgKgDgCIgGgDIgIgBQgDAAgEADIgFAGIgFAMIgDAMIgBAGQAAAKAFAGQADADADACQAEABAFAAIACAAQADAAAHgDQAFgDAEgHIADgFQADgBAIAAQACAAAAAFQAAAGgBAGQgCAFgDAFQgHAKgLAEIgDABQgIAEgIAAQgLAAgJgEgAnFAxQgFgBAAgCIABgMQABgCAHgCIAEgBIgBgLIgCgqQAAgCgGAAIgBAAIgBAAIgFgBIAAgPIAIgCIBOgGIAGAAIAAAEIABAWQAAAKgCADIgPgBIgDgQQgBgDgDAAIgIAAIgCAAIgCAAQgFAAgLADIAAAYIABAAIALgCIABgMIACAAIAMACIABACIAAAVIgBAPIgKABQgBAAgBgGIgBgGIgBgBIgIAEQABAEADAHIAEAJIAagGIAAgJQAAgIADAAIAJACIADAAIABACIACAgIgIABIhLACIgHgBgAGmAyIgTAAIAAgEIABgaIACgCIAOABIABgDIgBgjIAAgEIgEgBIgFgBIgKgBIAAgFQABgRACAAIAFgCIAQgBIAKgBQAJgBAKACIADAQQAAACgMABQgBADABAHIABAZIABAWIAKAEIABAAIAAAAQABgFABAAIAMgCQABAAAHgLIAIgNIgFgHIgKgWIgDgFQgBAAAAgBQgBAAAAAAQgBAAgBgBQAAAAgBAAIgCABIgDAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIABgFQAAgJABgBIAPABIAGgBIAXACQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAABIABAMIgBABIgFACIgDAAQAAACAIAHIAJAJIALgSIgLgBQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAgDADgLQABAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIAmABQADAAAAAFIAAAHIgOAEQgEADgDAJIgLASIALAOIALAVIAJgBIABAAIABACIAAAPIgDABIgdAAIgRADQgDAAAAgLQAAgEACgCIAFgDIgQgRQgHALAAAFQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAIACAAIADAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAABIgBANQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgSgCIgUgBIAAADIAAADIgEABIgYABQgIgBgFABgAC2AtQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBAAAAIgBgCIABgKIAOgFIAAgKIgDgsQgCgBgJAAIgCgBIABAHIAAAJIgCAAIgMgBQgIgBgCgCQgCgQgCAAIgLACIACA2QABABAFAAQAIAAAAACIAAAUIgogBIgBgBIgBAAIAAABIgLAAIgCAAIgDgBIABgHQAAgBAAgBQAAgBAAgBQAAAAABAAQAAgBAAAAIAPgEIgBg7IgBgGIgPACIABAJIAAAGIgBAHIgSgBIgCABQgCAAAAgIIACgeIADgBIBVgBIAIACIADAQQAAgIACgFIASgBIAcAAQACACABAHIABAMIgOAEIAAADIACAJIACAHIADgBIAIgBIASAAIAEgBIAEgBIABgQIgEgBIgJABIAAgBIgBgBIACgHIABgHQAAgCALgBIAMgBIARAAIAHgBQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIADANIgBABIAAAAIgOADIAAAuIAJABIABAKIABAMIgDABIgDABIgVABIgWABIACgUIAFgCIAEgCQgCgMgBAAIgeADIABANIALgBIADACIAAAGIgBALIgOABIgFAAIgdADg");
	this.shape.setTransform(57.1,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol47, new cjs.Rectangle(0.9,0.8,112.4,11.4), null);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00B23A").ss(2,1,1).p("AEgoAIo/QB");
	this.shape.setTransform(28.8,51.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol43, new cjs.Rectangle(-1,-1,59.5,104.6), null);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-155.8,0,155.8,0).s().p("A4VYUMAAAgwnMAwrAAAMAAAAwng");
	this.shape.setTransform(466.5,150.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.setka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(0,-5,622.4,311.2), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCA40").s().p("At8DeQhcABhChCQhBhBAAhcQAAhbBBhCQBChBBcAAIb5AAQBcAABBBBQBCBCAABbQAABchCBBQhBBChcgBg");
	this.shape.setTransform(111.6,22.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,223.2,44.5), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.773,0.773);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,68,68), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.886,0.886);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,78,78), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,74.1,74.1), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.443,0.443);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,39,39), null);


(lib.Symbol30copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00340C").s().p("AiKCKQg5g5AAhRQAAhQA5g5QA6g5BQgBQBRABA5A5QA5A5AABQQAABRg5A5Qg5A5hRAAQhQAAg6g5g");
	this.shape.setTransform(19.6,19.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30copy, new cjs.Rectangle(0,0,39.1,39.1), null);


(lib.Symbol23copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00340C").s().p("AiKCKQg5g5AAhRQAAhQA5g5QA6g5BQgBQBRABA5A5QA5A5AABQQAABRg5A5Qg5A5hRAAQhQAAg6g5g");
	this.shape.setTransform(19.6,19.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23copy, new cjs.Rectangle(0,0,39.1,39.1), null);


(lib.Symbol22copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00340C").s().p("AiKCKQg5g5AAhRQAAhQA5g5QA6g5BQgBQBRABA5A5QA5A5AABQQAABRg5A5Qg5A5hRAAQhQAAg6g5g");
	this.shape.setTransform(19.6,19.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22copy, new cjs.Rectangle(0,0,39.1,39.1), null);


(lib.Symbol21copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00340C").s().p("AiKCKQg5g5AAhRQAAhQA5g5QA6g5BQgBQBRABA5A5QA5A5AABQQAABRg5A5Qg5A5hRAAQhQAAg6g5g");
	this.shape.setTransform(19.6,19.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21copy, new cjs.Rectangle(0,0,39.1,39.1), null);


(lib.Symbol20copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00340C").s().p("AiKCKQg5g5AAhRQAAhQA5g5QA6g5BQgBQBRABA5A5QA5A5AABQQAABRg5A5Qg5A5hRAAQhQAAg6g5g");
	this.shape.setTransform(19.6,19.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20copy, new cjs.Rectangle(0,0,39.1,39.1), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().rs(["rgba(51,255,0,0.188)","#006600","rgba(0,255,0,0.2)"],[0,0.518,1],0,0,0,0,0,14.6).ss(9,1,1).p("ABkAAQAAAqgdAdQgdAdgqAAQgpAAgdgdQgdgdAAgqQAAgpAdgdQAdgdApAAQAqAAAdAdQAdAdAAApg");
	this.shape.setTransform(10,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-4.5,-4.5,29,29), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.458,0.458);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,40.3,40.3), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.458,0.458);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,40.3,40.3), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.458,0.458);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,40.3,40.3), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.458,0.458);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,40.3,40.3), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.458,0.458);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,40.3,40.3), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.radar();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,288,287), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizzatext();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,600,300), null);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol51();
	this.instance.parent = this;
	this.instance.setTransform(42.5,53,1,1,-10.2,0,0,-0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol50, new cjs.Rectangle(42.5,36,111.9,129.7), null);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol49();
	this.instance.parent = this;
	this.instance.setTransform(29.8,52.1,1,1,0,0,0,29.8,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.14,y:52.2},4).to({scaleY:1,y:52.1},5).to({scaleX:1.15,x:29.9},5).to({scaleX:1,x:29.8},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.1,19.8,52.3,62);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol47();
	this.instance.parent = this;
	this.instance.setTransform(56.7,8.2,1,1,0,0,0,56.7,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:56.6,regY:8.1,scaleX:1.8,scaleY:1.8,x:56.6,y:8.1},4).to({regX:56.7,regY:8.2,scaleX:1,scaleY:1,x:56.7,y:8.2},5).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.9,0.8,112.4,11.4);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCA40").s().p("AAUNXIgMgEIAFgVQgbgGgXgDQgOgCgPAFIgVABQgLACgMAEQADgBgMggIACAAIAOgJIgBgOQgCgbgGguIgDgHQgIACgBACIgFgFQAAgGgCgEIgEgVIBOgJIAJABIAAAFQABASgCAIIgHAGIgLABIADAaQgCgIABAPIAFAjQABANACAFIAMgCQAJgBAYAFIABgbIACgTIACgoIgJgHIgCgeQAEgCACAAIAfgDQAXgDATABIgCAiIABgBIgBABQgBADgKgBQgIAAgCACIgMBeIAoALQgCAZgGASQAAANgEAMQgHAAgbgHgAjGNXIgMgEIAFgVQgcgGgWgDQgPgCgOAFIgWABQgLACgLAEQACgBgLggIABAAIAPgJIgBgOQgDgbgFguIgEgHQgHACgCACIgEgFQgBgGgBgEIgEgVIBOgJIAJABIAAAFQAAASgBAIIgHAGIgLABIACAaQgCgIACAPIAEAjQABANADAFIALgCQAKgBAYAFIABgbIABgTIACgoIgJgHIgBgeQADgCADAAIAfgDQAYgDASABIgBAiIABgBIgBABQgCADgKgBQgHAAgDACIgLBeIAnALQgCAZgFASQAAANgFAMQgGAAgcgHgABTM9QgJgDAAgDQAAgRACgFQABgEAOgFIAHgBIgDgUIgChQQgBgDgLAAIgCAAIgCABQgEgBgGgCIACgcIAOgDICRgMIAJABQABABABAFIgBAIIABAiQAAASgDAFIgbgBQgEgMgDgSQgBgGgGAAIgPAAIgGACQgKgBgVAEIAAAtIADABIATgEIACgWIAFAAIAVAEIACADIABAoQAAAOgDAPIgSACQgCAAgBgLIgDgNIgBAAQgCAAgMAIQAAAGAGAMIAHARIAigGIAOgEIAAgRQAAgOAGAAIATAEIADAAQAAAAAAABQAAAAAAAAQABABAAAAQAAABABAAIADA7IgPACIiKADIgCABIgKgCgAD/MiQAAgGAbgLIAAgVQgDgXgBghIAAgZIgJgCIgMACQgGAAgBgFIAEgmIAEgDQAggCAtAAQAQAAAPACQAOACANADIAXAGQAMAFAGAJQACAEADALQAEAMAAAFIgFANQgBAJgHAGIgOALIgXALQgNAFgKADIgkAHIAAAMQAAAKADADIAEAAIAXgCQAEAAAEACQgCAHABAKIAAARQgTAAgmADIg5AEgAE8LAIABAIIACAGIACAAIADgBIADAAIAEgBQAMAAAMgFIAMgJQADgDAAgHQAAgIgHgGQgHgGgJAAIgfAAIAAAggAKEMzIgCAEIhCgCQgKAAgCgDIACgjQALgDAGABIABAAIABAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBABAAIgGgkQAAgMgBgEQgKAQgNAgIgUAtIg1AEIgxgFIgCgZQAEgCAEgBIAOAAQABAAABAAQABAAAAAAQAAAAABAAQAAgBAAAAIADhiIgLgEQgGgCgDgDQgCgBgBgFIgBgfQgBgLADgEIBNAHQAGAagBANQgBAEgFAAIgDgBIgLgBIgBBCQANgKAKgNIArhCIABgHIAGgJIAXAGQAWAFAJAFQgFAkAAAMIgCA7IACANQAEACARABQAHAAAAADIgCAJIANAAQACAAAAAAQABAAABAAQAAAAAAAAQABgBAAAAQACgYAAhKIgKgEQgHgCgDgDQgCgBAAgFIgCgfQgBgLAEgEIBNAHQAFAagBANQAAAEgFAAIgEgBIgLgBIgBBCQAOgKAJgNIArhCIABgHIAGgJIAiAIQAOAEAHAEQgFAkAAAMIgCA7IABANQAEACASABQAGAAAAADIgBAKQgBANgDAIQgCAHgCADIhCgCQgKAAgCgDIACgjQAKgDAHABIAAAAIACAAQAAAAAAAAQABAAAAgBQABAAAAAAQAAgBAAAAIgFgkQAAgMgCgEQgJAQgNAgIgVAtQgFABgeAAIgSADgApBM0IgfAAIgmABQgDAAgDgCIABgNQgBgIACAAIAJgIIgCgvIgCgUIgBgbQgNADgMABIgbgBIgFABQgBAEAAANIACBHIAJABQAGACAAABQADAIACAPIAAAFIgHABIhIABIgBgFIACgXIACgDQABAAAIAAIACgGQAAg0gCgYIAAgHQgCgDgEAAIAEgBIgSgDIAAgIIAGgcIABgCQAdACAaAAQAZAAAVgDQAsgEATABIALAkIgCAAIgRAFIAGBDQAAgCAAAAQAAgBABABQAAAAAAACQAAABABADIABAMQACADAHAAQAMgBABADIABAJIABAAIAOAAQABAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAIAChiIgKgEQgGgCgDgDQgCgBAAgFIgCgfQgBgLADgEIBNAHQAGAagBANQgBAEgFAAIgDgBIgLgBIgBBCQANgKAKgNIArhCIABgHIAGgJIAXAGQAWAFAKAFQgGAkAAAMIgCA7IACANQAEACARABQAHAAgBADIgBAKQgBANgCAIQgCAHgDADIhCgCQgKAAgCgDIADgjQAKgDAGABIABAAIABAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBABAAIgGgkQAAgMgCgEQgJAQgNAgIgUAtIg1AEgALRJkIgXgGIAOgkIAMAHIANAGQAIACAHAAIAQgBIAegIIAIAfIgkAHIgVABgAsEqHQgugBgHgBIgFgCIgDgnQAAgFAHAAIALACIAKgBIgBgLIADhLQABgXgCAAIgdgCIADgZIACgDIAZgEQAPgDANgCIACgBIA7gEQAWAAARgCIAUgEQAEAAAAAPIAAAFIADgLQARgCAPAAIA1ABQADADABAOIADAVIgaAHIAAAHIADAQQAEAMABABIAFgBIAkgEIACABIAFAAIAMgDIAHgBIADgdIgHgBIgSAAIAAgBIAAgCIADgNIAAgNQABgDAUgDIA2gBIANgCQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAABIAFAXIgBACIgBABQgIAAgSAEIAABXIAQABQADAFABAOIACAXQgBABgFABIgGAAQgPADgZAAIgmACIACglQACgCAHgCIAIgDQgEgYgDAAIg2AHIABAXIAUgBIAGAEIAAALQAAAKgCAJQgDACgXAAIg+AGIgJgCQgGgBgBgCIAAgDIABgFIgDAGQgGAKgNAEIgWAGIgbAGQgPABgQAAgAr/rUIgCAoIAhAAQAIAAAHgGQAHgGAAgIQAAgHgCgDQgKgIgDgBIghgGIgDAAIgCAFgArNsnIgbAEIgGAfIAAABIAkAHQAKADAOAFIAWALIAOALQAHAGACAJIADAMIgBALIAWgIIAAgSIgGhUQgDgBgQAAIgGgCIgCAZQgHgCgWAFIgDgDIABgZIggACgAk/qqIARgJQgFgSgEAAIgqAFQgGACgFADIAAANQAXADAAAFIgEATQgBAFgCADQgagEgMABQgcAAgSgGIAAgFIAFgMQADgLAEAAIASgDQACgBAIgcIAThHQAIgYAEgWQACgGAEAAIA2ADQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABIAfBhQAHAaALASQAGAAAMACQACAAAAAIIAAAYQgHADgNABIgXACI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");
	this.shape.setTransform(104,87.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Symbol 48
	this.instance = new lib.Symbol48();
	this.instance.parent = this;
	this.instance.setTransform(99.8,74.6,1,1,0,0,0,29.8,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Symbol 46
	this.instance_1 = new lib.Symbol46();
	this.instance_1.parent = this;
	this.instance_1.setTransform(102.8,127.2,1,1,0,0,0,56.7,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(1.1,1.2,205.7,172.4), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("At8DeQhcABhChCQhBhBAAhcQAAhbBBhCQBChBBcAAIb5AAQBcAABBBBQBCBCAABbQAABchCBBQhBBChcgBg");
	mask.setTransform(111.6,22.3);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.31)").s().p("AsFB3Qk/gyAAhFQAAhEE/gyQFBgwHEgBQHFABFAAwQFAAyABBEQgBBFlAAyQlAAwnFAAQnEAAlBgwg");
	this.shape.setTransform(110.9,7.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.Symbol37();
	this.instance.parent = this;
	this.instance.setTransform(111.5,22.2,1,1,0,0,0,111.5,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,223.2,44.5), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol36();
	this.instance.parent = this;
	this.instance.setTransform(111.5,22.2,1,1,0,0,0,111.5,22.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F24841").ss(2,1,1).p("At8jeIb5AAQBcAABBBBQBCBCAABbQAABchCBBQhBBChcAAI75AAQhcAAhChCQhBhBAAhcQAAhbBBhCQBChBBcAAg");
	this.shape.setTransform(111.6,22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(-1,-9,225.2,54.5), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol32();
	this.instance.parent = this;
	this.instance.setTransform(21,18,1,1,0,0,0,37,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03,rotation:5.2,x:21.1,y:18.1},2).to({scaleX:1,scaleY:1,rotation:0,x:21,y:18},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-19,74.1,74.1);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al/AyQgVAAgDgBIgCgBIgCgSQAAgBAAAAQAAgBABAAQAAAAABgBQABAAABAAIAFABIAEAAIACgnIgBgLIgDAAIgLgBIABgMIACAAIAMgDIAMgCIABAAIAcgCIASgBIAJgCQACAAAAAHIAAAEIgCAVQgDgBgKACIgBgBIABgLIgQABIgMABIgDAPIAAAAIAQAEIAMADIAKAEIAGAFQAEADABAEIABAGIgBAIIgCAHQgEAFgFACIgKADIgNACIgOABgAl7AOIgBATIAOAAQAEAAADgDQAEgDAAgEQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBAAIgFgFIgOgCIgBAAIAAgBIgCAAIAAADgABdAiIAIgFQgCgIgBAAIgUACIgFACIAAAHQAKABAAACIgBAJIgCAEIgRgCQgNAAgJgCIAAgDIACgGQABgEACAAIAJgCQABAAAEgNIAJggIAFgVQABgBAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIAYABQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIAOAsQAEAMAFAJIAIABQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAABIAAALIgJABIgKABIgTAEQgDgGgBgJgABlAHQgBgGgEgHIgHgNQgDAPgBAIQADABANACIAAAAgAg3AtQgEgDgCgDIgQAAIgSABIgDgBIABgGQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAIAFgEIAAgDIgCgTIAAgHIgBgNIgLABQgGABgGgBIgDAAIgBAIIABAgIAFABIACABQACAEAAAHIAAACIgDABIghAAIgBgCIABgLIACgCQAAABAAAAQAAAAABAAQAAAAABAAQABAAAAAAIABgDIAAgiIAAgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAIACAAIgIgCIAAgEIACgNIAAgBIAaABIAWgBQAUgCAJABIAFAQIgBAAIgIADIABAMIABAEIABAOQAAgBAAAAQAAAAAAAAQAAAAAAABQAAAAABABIAAAHIAEAAQAGAAAAABIABAFIACgEIAFgDQADgCACAAQAIAAAAALIAAAEIAEgCQADgCACgEIABgIIAAgHIAAgDIgCgPIAAgJIgBgBIgIAAIgBAAIAAgBIgBABIAAgOQAFgCAHgBIAWgBQAcgCAHAAIAEAQIgBAAIgHACIAEApQAAgBAAAAQAAAAAAAAQAAAAAAABQAAABABABIAAAFQAAABABAAQAAAAAAAAQABAAABAAQAAAAABAAQAEAAACABIAAAQIggABIgCgBIAAgGQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAIAEgEIgBgbIgBgGIgBgTIgNACQgCADACAGIAAALIAAADIAAAHQgBAQgKAKIgHAGIgJADIgJABQgEAAgGgDgAjcAsQgHgDgGgHQgKgNAAgTIADgLQAKgmAdAAIAFABQAEAAAFADQAFADAHAFIABgEQAEgCAKgBQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIABAdIABADQAAABgGADIgIACIgHgMQgFgJgDgCIgEgCIgIgBQgCAAgEADIgEAFQgDAEgBAGIgEAQQAAAIAFAFIAFAEQAEACAEAAIABAAQADAAAGgEQAEgCAEgGIACgEQADgBAGAAQABAAAAAAQABAAAAABQAAAAAAABQAAABAAABIgBAKQgBAFgDAEQgFAJgLADIgBABQgIADgHAAQgJAAgIgDgAFaAnQgGgDgEgFQgFgFgDgHQgGgMAAgNQAAgJACgHQABgHADgFQAEgHAJgDIALgEIAIgBIASADIANADQANAFAFAVQADAJAAAIQAAAFgDAJQgCAJgDAEQgEAGgHAEIgHAEIgHACIgDABIgKAAQgFAAgPgFgAFkghIgCACIgCAFQgBAJAAAMQAAAMADAHQACAEAFAEQAGADAEAAQAFAAADgBQADgCACgDQACgDABgEIAAgHQAAgLgCgKQgCgFgGgGIgGgFQgEgCgFAAIgGABgAk/ArQgEgBAAgBQAAgIABgDQABgBAGgCIADgBIgCguQAAgBgGAAIgBAAIgBAAIgEgBIABgNIAGgCIBIgFIAAAEIABATQAAAIgCACIgMAAIgDgOQgBgBAAAAQAAgBAAAAQgBAAAAgBQgBAAgBAAIgFAAIgCABIgDAAIgNACIAAAVIABAAIAJgCIABgKIABAAIAKACIABABIABASQAAAHgCAGIgIABQgBAAgBgFIAAgGIgBAAIgHAEIADAIIAEAIIAWgFIgBgIQABgGADAAIAHABIADAAIABACIABAcIhHACIgGgBgADiAoIgDgCIAAgBIABgJIALgFIAAgIIgCgmIgJgBIgDAAIABAGIAAAHIgBAAIgLgBIgJgCQgBgOgCAAIgJACIACAuQABABAEAAQAHAAAAACIgBARIgjgCIgBABIgKAAIgDgBIAAgGQAAgBABgBQAAAAAAgBQAAgBAAAAQAAAAAAAAIAOgEIgCgyIAAgFIgNABIAAAIIABAFQABAEgCADIgRgBQgCAAABgHIABgZIACgBIBJgBIAHACIACANIADgLIAOgBIAZABQACABAAAGIABALIgMADIAAADIACAHIACAGIACAAIARgCIAFAAIAEgBIADAAIABgOIgDgBIgIABIAAgBIAAgBIACgGIAAgGQAAgBAJgBIAagBIAFgBIACABIACALIgBABIgNADIAAAnIAIAAIABAJIACAKIgDACIgDAAIgSABIgSABIABgRQAAAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIAEgBQgCgLgBAAIgZACIAAALIAFAAIAEAAIADACIAAAFIgBAJIgMABIgEAAIgTACIgDAAIgDAAg");
	this.shape.setTransform(23.8,-32.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

	// Layer 1
	this.instance = new lib.Symbol30();
	this.instance.parent = this;
	this.instance.setTransform(19.6,19.6,1,1,0,0,0,19.6,19.6);

	this.instance_1 = new lib.Symbol30copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.6,19.6,1,1,0,0,0,19.6,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol31();
	this.instance.parent = this;
	this.instance.setTransform(19.6,19.6,1.385,1.385,0,0,0,19.5,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:19.4,regY:19.4,scaleX:1.44,scaleY:1.44,rotation:9,y:19.5},2).to({regX:19.5,regY:19.5,scaleX:1.39,scaleY:1.39,rotation:0,y:19.6},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-7.4,54,54);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol33();
	this.instance.parent = this;
	this.instance.setTransform(21,20,1,1,0,0,0,39,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:38.9,regY:38.9,scaleX:1.04,scaleY:1.04,rotation:6.5},2).to({regX:39,regY:39,scaleX:1,scaleY:1,rotation:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-19,78,78);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol34();
	this.instance.parent = this;
	this.instance.setTransform(19,18,1,1,0,0,0,34,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,scaleY:1.04,rotation:6.2,x:19.1,y:18.1},2).to({scaleX:1,scaleY:1,rotation:0,x:19,y:18},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-16,68,68);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(21.5,17.5);

	this.instance_1 = new lib.Tween8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.5,17.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween9("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(21.5,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},2).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-19,73,73);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(10.1,10.1,0.4,0.4,0,0,0,10,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:9.6,regY:9.6,scaleX:8.65,scaleY:8.65,x:6.6,y:6.6,alpha:0.199},29).to({alpha:0},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.3,4.3,11.6,11.6);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(20.2,20.2,1,1,0,0,0,20.2,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,40.3,40.3), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pizza5.png
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(-76.8,122.2,1,1,0,0,0,20.2,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:20.1,scaleX:1.19,scaleY:1.19,y:122.3},4).to({regX:20.2,scaleX:1,scaleY:1,y:122.2},5).wait(25));

	// pizza4.png
	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-49.8,222.2,1,1,0,0,0,20.2,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({scaleX:1.18,scaleY:1.18},4).to({scaleX:1,scaleY:1},5).wait(19));

	// pizza3.png
	this.instance_2 = new lib.Symbol11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(8.2,117.2,1,1,0,0,0,20.2,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({regX:20.1,scaleX:1.15,scaleY:1.15,y:117.3},4).to({regX:20.2,scaleX:1,scaleY:1,y:117.2},5).wait(13));

	// pizza2.png
	this.instance_3 = new lib.Symbol12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-133.8,76.2,1,1,0,0,0,20.2,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({regX:20.1,scaleX:1.19,scaleY:1.19,y:76.3},4).to({regX:20.2,scaleX:1,scaleY:1,y:76.2},5).wait(7));

	// pizza1.png
	this.instance_4 = new lib.Symbol13();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-146.8,178.2,1,1,0,0,0,20.2,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({regX:20.1,scaleX:1.19,scaleY:1.19,y:178.3},4).to({regX:20.2,scaleX:1,scaleY:1,y:178.2},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167,56,195.3,186.3);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 43
	this.instance = new lib.Symbol43();
	this.instance.parent = this;
	this.instance.setTransform(28.1,52.4,1,1,-0.9,0,0,28.8,51.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00B138","rgba(0,33,5,0)"],[0,1],-33.9,11.1,36.1,-12).s().p("ApdH9IKOygIItTgIgCABQj4BmkhAAQlzAAkting");
	this.shape.setTransform(60.3,53.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-2.5,-13.8,123.5,135.2), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(58,0.3,1,1,0,0,0,58,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-13.8,123.5,135.2);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(300,150,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,600,300), null);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(300,150,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(0,0,600,300), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ПОЛУЧИТЬ
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F24841").s().p("AK0BMIgIgDIADgOIgjgGQgKgCgKAEQgIgBgHACQgIABgIADQACgBgIgWIABAAIALgHIgCgJQgBgUgEgeIgCgFQgGABgBABIgDgDQAAgFgCgCIgCgPIA2gGIAGABIABAEQAAAMgBAGIgFADIgHACIABARQgCgGACALIADAXQABAKABADIAJgBQAGgBARAEIABgTIABgMIABgcIgHgFIAAgVQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAIAWgDQAQgCANABIgBAYIABgBIgBABQgBACgHgBQgFAAgCACIgIBBIAbAHQgBARgEANQAAAJgDAIQgEAAgUgFgAIcBMIgIgDIADgOIgjgGQgKgCgLAEQgHgBgIACQgHABgIADQABgBgIgWIACAAIAKgHIgBgJQgBgUgEgeIgDgFQgGABAAABIgDgDQgBgFgBgCIgCgPIA2gGIAGABIAAAEQABAMgCAGIgFADIgHACIACARQgCgGABALIADAXQABAKACADIAIgBQAGgBARAEIABgTIABgMIABgcIgGgFIgBgVQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAWgDQARgCANABIgBAYIAAgBIAAABQgCACgHgBQgFAAgBACIgIBBIAbAHQgBARgEANQAAAJgDAIQgFAAgTgFgAsPBEIgKAAQgFAAgRgHIgHgDIAAAHQgFgDgDABIgLgFIgGgEIAIgrIACgBIALABQATADACAFQgCALgCAEQgCADAQADIABABQAPACAHgDQADgFABgFQABgFgCgHQgCgFgEgDIgIgEIgLgDIAAgCIABgEIABgNIACgCIAIABIADAAIABgBQAFgDACgDQADgEgBgEQAAgHgFgEQgFgEgIgBQgGAAgCACQgDADgBAEQgDABAAAIQgTAEgFgBIgDgTIgDgRIACgCIASgDIADABIACADQACgDAJgCQAIgCARADQAKADAIAFQAJAGAFAKQAEAIABAKIABADQgBAIgEAEQgEAJgFADQAIAEAFAGQAEAHAAAIQgBALgFAJQgDAGgIAFIgOAIQgKADgJAAIgDAAgAolBEQgggBgFgBIgDgCIgCgUIAAAOQgFABgJABIgtAHQgDgKgBgNIAMgHQgEgNgCAAIgeAEIgHADIAAAJQAQACAAAEIgDANQgBAEgBACQgTgDgIABQgTAAgNgEIAAgEI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");
	this.shape.setTransform(113.1,22.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// ПОЛУЧИТЬ
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996600").s().p("AK0BMIgIgDIADgOIgjgGQgKgCgKAEQgIgBgHACQgIABgIADQACgBgIgWIABAAIALgHIgCgJQgBgUgEgeIgCgFQgGABgBABIgDgDQAAgFgCgCIgCgPIA2gGIAGABIABAEQAAAMgBAGIgFADIgHACIABARQgCgGACALIADAXQABAKABADIAJgBQAGgBARAEIABgTIABgMIABgcIgHgFIAAgVQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAIAWgDQAQgCANABIgBAYIABgBIgBABQgBACgHgBQgFAAgCACIgIBBIAbAHQgBARgEANQAAAJgDAIQgEAAgUgFgAIcBMIgIgDIADgOIgjgGQgKgCgLAEQgHgBgIACQgHABgIADQABgBgIgWIACAAIAKgHIgBgJQgBgUgEgeIgDgFQgGABAAABIgDgDQgBgFgBgCIgCgPIA2gGIAGABIAAAEQABAMgCAGIgFADIgHACIACARQgCgGABALIADAXQABAKACADIAIgBQAGgBARAEIABgTIABgMIABgcIgGgFIgBgVQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAWgDQARgCANABIgBAYIAAgBIAAABQgCACgHgBQgFAAgBACIgIBBIAbAHQgBARgEANQAAAJgDAIQgFAAgTgFgAsPBEIgKAAQgFAAgRgHIgHgDIAAAHQgFgDgDABIgLgFIgGgEIAIgrIACgBIALABQATADACAFQgCALgCAEQgCADAQADIABABQAPACAHgDQADgFABgFQABgFgCgHQgCgFgEgDIgIgEIgLgDIAAgCIABgEIABgNIACgCIAIABIADAAIABgBQAFgDACgDQADgEgBgEQAAgHgFgEQgFgEgIgBQgGAAgCACQgDADgBAEQgDABAAAIQgTAEgFgBIgDgTIgDgRIACgCIASgDIADABIACADQACgDAJgCQAIgCARADQAKADAIAFQAJAGAFAKQAEAIABAKIABADQgBAIgEAEQgEAJgFADQAIAEAFAGQAEAHAAAIQgBALgFAJQgDAGgIAFIgOAIQgKADgJAAIgDAAgAolBEQgggBgFgBIgDgCIgCgUIAAAOQgFABgJABIgtAHQgDgKgBgNIAMgHQgEgNgCAAIgeAEIgHADIAAAJQAQACAAAEIgDANQgBAEgBACQgTgDgIABQgTAAgNgEIAAgEI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");
	this.shape_1.setTransform(113.1,24.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Symbol 35
	this.instance = new lib.Symbol35();
	this.instance.parent = this;
	this.instance.setTransform(111.5,22.2,1,1,0,0,0,111.5,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(-1,-9,225.2,54.5), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al/AyQgVAAgDgBIgCgBIgCgSQAAgBAAAAQAAgBABAAQAAAAABgBQABAAAAAAIAGABIAEAAIACgnIgBgLIgDAAIgLgBIABgMIACAAIAMgDIAMgCIABAAIAcgCIASgBIAJgCQACAAAAAHIAAAEIgCAVQgDgBgKACIgBgBIABgLIgQABIgMABIgDAPIAAAAIAQAEIALADIALAEIAGAFQAEADABAEIABAGIgBAIIgCAHQgDAFgGACIgLADIgMACIgPABgAl7AOIgCATIAPAAQAEAAAEgDQADgDAAgEQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBAAIgFgFIgOgCIAAAAIgBgBIgCAAIAAADgABdAiIAIgFQgCgIgBAAIgVACIgEACIAAAHQAKABAAACIgBAJIgCAEIgRgCQgNAAgJgCIAAgDIACgGQABgEACAAIAJgCQABAAADgNIAJggIAGgVQABgBAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIAYABQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIAPAsQADAMAFAJIAIABQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAABIABALIgKABIgKABIgTAEQgDgGgBgJgABlAHQgCgGgEgHIgGgNQgEAPAAAIQADABANACIAAAAgAg3AtQgEgDgCgDIgQAAIgSABIgCgBIAAgGQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAAAABAAIAEgEIAAgDIgCgTIAAgHIgBgNIgLABQgHABgFgBIgDAAIgBAIIABAgIAFABIACABQACAEAAAHIAAACIgDABIgZABIgIgBIgBgCIABgLIABgCQABABAAAAQAAAAABAAQAAAAABAAQABAAABAAIABgDIgBgiIAAgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAIACAAIgIgCIAAgEIACgNIAAgBIAaABIAWgBQAUgCAJABIAFAQIgBAAIgIADIABAMIABAEIABAOQAAgBAAAAQAAAAAAAAQAAAAAAABQAAAAABABIAAAHIAEAAQAGAAABABIAAAFIACgEIAFgDQACgCADAAQAIAAAAALIAAAEIAEgCQADgCACgEIABgIIAAgHIAAgDIgCgPIAAgJIAAgBIgJAAIgBAAIAAgBIgBABIAAgOQAFgCAHgBIAWgBQAcgCAHAAIAEAQIgBAAIgHACIAEApQAAgBAAAAQAAAAAAAAQAAAAAAABQAAABABABIAAAFQAAABABAAQAAAAAAAAQABAAABAAQAAAAABAAQAFAAABABIABAQIghABIgCgBIAAgGQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAIAEgEIgCgbIAAgGIgBgTIgNACQgCADACAGIAAALIAAADIAAAHQgBAQgLAKIgGAGIgJADIgJABQgEAAgGgDgAjcAsQgHgDgFgHQgLgNAAgTIADgLQAKgmAdAAIAFABQAEAAAFADQAFADAHAFIABgEQAEgCAKgBQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIABAdIABADQAAABgGADIgIACIgHgMQgFgJgDgCIgEgCIgHgBQgDAAgEADIgEAFQgCAEgCAGIgEAQQAAAIAFAFIAFAEQADACAFAAIABAAQADAAAGgEQAEgCAEgGIACgEQADgBAGAAQABAAAAAAQABAAAAABQAAAAAAABQAAABAAABIgBAKQgBAFgDAEQgFAJgLADIgBABQgIADgHAAQgJAAgIgDgAFaAnQgFgDgFgFQgEgFgEgHQgGgMAAgNQAAgJACgHQABgHADgFQAEgHAJgDIALgEIAIgBIASADIANADQANAFAFAVQADAJAAAIQAAAFgDAJQgCAJgDAEQgEAGgHAEIgHAEIgHACIgDABIgLAAQgEAAgPgFgAFkghIgCACIgCAFQgBAJAAAMQAAAMADAHQADAEAFAEQAFADAEAAQAFAAADgBQADgCACgDQACgDABgEIABgHQAAgLgDgKQgCgFgGgGIgGgFQgEgCgFAAIgGABgAk/ArQgEgBAAgBQAAgIABgDQAAgBAHgCIADgBIgCguQAAgBgGAAIgBAAIgBAAIgEgBIABgNIAGgCIBEgFIAEAAIAAAEIABATQAAAIgCACIgMAAIgEgOQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAgBAAIgGAAIgBABIgDAAIgOACIAAAVIACAAIAJgCIABgKIACAAIAJACIABABIABASQAAAHgCAGIgIABQgBAAAAgFIgBgGIgBAAIgHAEIADAIIAEAIIAWgFIgBgIQABgGACAAIAIABIADAAIABACIABAcIhHACIgGgBgADiAoIgDgCIAAgBIABgJIALgFIAAgIIgCgmIgJgBIgDAAIABAGIAAAHIgBAAIgLgBIgJgCQgBgOgBAAIgKACIACAuQABABAEAAQAHAAAAACIgBARIgjgCIgBABIgKAAIgDgBIABgGQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAAAABAAIAMgEIgBgyIAAgFIgMABIAAAIIAAAFQAAAEAAADIgSgBQgCAAABgHIABgZIACgBIBJgBIAHACIACANIADgLIAOgBIAZABQACABAAAGIABALIgMADIAAADIACAHIACAGIACAAIARgCIAFAAIAEgBIADAAIACgOIgEgBIgIABIAAgBIAAgBIACgGIAAgGQAAgBAJgBIAagBIAFgBIACABIACALIgBABIgNADIAAAnIAIAAIABAJIABAKIgCACIgDAAIgSABIgSABIABgRQAAAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIAEgBQgCgLgCAAIgYACIAAALIAFAAIAEAAIADACIAAAFIgBAJIgMABIgEAAIgTACIgDAAIgDAAg");
	this.shape.setTransform(22.8,-29.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

	// Layer 1
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(19.6,19.6,1,1,0,0,0,19.6,19.6);

	this.instance_1 = new lib.Symbol21copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.6,19.6,1,1,0,0,0,19.6,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al/AyQgVAAgDgBIgCgBIgCgSQAAgBAAAAQAAgBABAAQAAAAABgBQABAAAAAAIAGABIAEAAIACgnIgBgLIgDAAIgLgBIABgMIACAAIAMgDIAMgCIABAAIAcgCIASgBIAJgCQACAAAAAHIAAAEIgCAVQgDgBgKACIgBgBIABgLIgQABIgMABIgDAPIAAAAIAQAEIALADIALAEIAGAFQAEADABAEIABAGIgBAIIgCAHQgDAFgGACIgLADIgMACIgPABgAl7AOIgCATIAPAAQAEAAAEgDQADgDAAgEQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBAAIgFgFIgOgCIAAAAIgBgBIgCAAIAAADgABdAiIAIgFQgCgIgBAAIgVACIgEACIAAAHQAKABAAACIgBAJIgCAEIgRgCQgNAAgJgCIAAgDIACgGQABgEACAAIAJgCQABAAADgNIAJggIAGgVQABgBAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIAYABQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIAPAsQADAMAFAJIAIABQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAABIABALIgKABIgKABIgTAEQgDgGgBgJgABlAHQgCgGgEgHIgGgNQgEAPAAAIQADABANACIAAAAgAg3AtQgEgDgCgDIgQAAIgSABIgCgBIAAgGQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAAAABAAIAEgEIAAgDIgCgTIAAgHIgBgNIgLABQgHABgFgBIgDAAIgBAIIABAgIAFABIACABQACAEAAAHIAAACIgDABIghAAIgBgCIABgLIABgCQABABAAAAQAAAAABAAQAAAAABAAQABAAABAAIABgDIgBgiIAAgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAIACAAIgIgCIAAgEIACgNIAAgBIAaABIAWgBQAUgCAJABIAFAQIgBAAIgIADIABAMIABAEIABAOQAAgBAAAAQAAAAAAAAQAAAAAAABQAAAAABABIAAAHIAEAAQAGAAABABIAAAFIACgEIAFgDQACgCADAAQAIAAAAALIAAAEIAEgCQADgCACgEIABgIIAAgHIAAgDIgCgPIAAgJIAAgBIgJAAIgBAAIAAgBIgBABIAAgOQAFgCAHgBIAWgBQAcgCAHAAIAEAQIgBAAIgHACIAEApQAAgBAAAAQAAAAAAAAQAAAAAAABQAAABABABIAAAFQAAABABAAQAAAAAAAAQABAAABAAQAAAAABAAQAFAAABABIABAQIghABIgCgBIAAgGQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAIAEgEIgCgbIAAgGIgBgTIgNACQgCADACAGIAAALIAAADIAAAHQgBAQgLAKIgGAGIgJADIgJABQgEAAgGgDgAjcAsQgHgDgFgHQgLgNAAgTIADgLQAKgmAdAAIAFABQAEAAAFADQAFADAHAFIABgEQAEgCAKgBQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIABAdIABADQAAABgGADIgIACIgHgMQgFgJgDgCIgEgCIgHgBQgDAAgEADIgEAFQgCAEgCAGIgEAQQAAAIAFAFIAFAEQADACAFAAIABAAQADAAAGgEQAEgCAEgGIACgEQADgBAGAAQABAAAAAAQABAAAAABQAAAAAAABQAAABAAABIgBAKQgBAFgDAEQgFAJgLADIgBABQgIADgHAAQgJAAgIgDgAFaAnQgFgDgFgFQgEgFgEgHQgGgMAAgNQAAgJACgHQABgHADgFQAEgHAJgDIALgEIAIgBIASADIANADQANAFAFAVQADAJAAAIQAAAFgDAJQgCAJgDAEQgEAGgHAEIgHAEIgHACIgDABIgLAAQgEAAgPgFgAFkghIgCACIgCAFQgBAJAAAMQAAAMADAHQADAEAFAEQAFADAEAAQAFAAADgBQADgCACgDQACgDABgEIABgHQAAgLgDgKQgCgFgGgGIgGgFQgEgCgFAAIgGABgAk/ArQgEgBAAgBQAAgIABgDQAAgBAHgCIADgBIgCguQAAgBgGAAIgBAAIgBAAIgEgBIABgNIAGgCIBIgFIAAAEIABATQAAAIgCACIgMAAIgEgOQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAgBAAIgGAAIgBABIgDAAIgOACIAAAVIACAAIAJgCIABgKIACAAIAJACIABABIABASQAAAHgCAGIgIABQgBAAAAgFIgBgGIgBAAIgHAEIADAIIAEAIIAWgFIgBgIQABgGACAAIAIABIADAAIABACIABAcIhHACIgGgBgADiAoIgDgCIAAgBIABgJIALgFIAAgIIgCgmIgJgBIgDAAIABAGIAAAHIgBAAIgLgBIgJgCQgBgOgBAAIgKACIACAuQABABAEAAQAHAAAAACIgBARIgjgCIgBABIgKAAIgDgBIABgGQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAAAABAAIAMgEIgBgyIAAgFIgMABIAAAIIAAAFQAAAEAAADIgSgBQgCAAABgHIABgZIACgBIBJgBIAHACIACANIADgLIAOgBIAZABQACABAAAGIABALIgMADIAAADIACAHIACAGIACAAIARgCIAFAAIAEgBIADAAIACgOIgEgBIgIABIAAgBIAAgBIACgGIAAgGQAAgBAJgBIAagBIAFgBIACABIACALIgBABIgNADIAAAnIAIAAIABAJIABAKIgCACIgDAAIgSABIgSABIABgRQAAAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIAEgBQgCgLgCAAIgYACIAAALIAFAAIAEAAIADACIAAAFIgBAJIgMABIgEAAIgTACIgDAAIgDAAg");
	this.shape.setTransform(22.8,-32.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(19.6,19.6,1,1,0,0,0,19.6,19.6);

	this.instance_1 = new lib.Symbol20copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.6,19.6,1,1,0,0,0,19.6,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al/AyQgVAAgDgBIgCgBIgCgSQAAgBAAAAQAAgBABAAQAAAAABgBQABAAABAAIAFABIAEAAIACgnIgBgLIgDAAIgLgBIABgMIACAAIAMgDIAMgCIABAAIAcgCIASgBIAJgCQACAAAAAHIAAAEIgBAVQgEgBgKACIgBgBIAAgLIgPABIgMABIgDAPIAAAAIAQAEIAMADIAKAEIAHAFQADADAAAEIACAGIgBAIIgCAHQgDAFgGACIgKADIgNACIgOABgAl7AOIgBATIAOAAQAEAAADgDQAEgDAAgEQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBAAIgFgFIgOgCIgBAAIgBgBIgBAAIAAADgABdAiIAIgFQgCgIgBAAIgUACIgFACIAAAHQAKABAAACIgCAJIgBAEIgSgCQgMAAgJgCIAAgDIACgGQABgEACAAIAJgCQABAAAEgNIAJggIAFgVQABgBAAgBQAAAAAAgBQABAAAAAAQAAAAABAAIAYABQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAIAOAsQAEAMAFAJIAIABQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAABIAAALIgJABIgKABIgTAEQgDgGgBgJgABlAHQgBgGgEgHIgHgNQgDAPgBAIQADABANACIAAAAgAg3AtQgEgDgCgDIgQAAIgSABIgDgBIABgGQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAIAFgEIAAgDIgBgTIgBgHIgBgNIgMABQgFABgGgBIgDAAIgBAIIACAgIADABIADABQACAEABAHIAAACIgEABIghAAIgBgCIACgLIABgCQAAABAAAAQAAAAABAAQAAAAABAAQABAAAAAAIABgDIAAgiIAAgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAIABAAIgIgCIAAgEIADgNIAAgBIAaABIAWgBQAUgCAJABIAFAQIgBAAIgIADIABAMIABAEIABAOQAAgBAAAAQAAAAAAAAQAAAAAAABQAAAAABABIAAAHIAEAAQAGAAAAABIABAFIACgEIAFgDQADgCADAAQAHAAAAALIAAAEIAEgCQADgCACgEIACgIIAAgHIAAgDIgDgPIAAgJIgBgBIgIAAIgBAAIgBgBIAAABIAAgOQAEgCAIgBIAWgBQAbgCAIAAIAEAQIgBAAIgHACIAEApQAAgBAAAAQAAAAAAAAQAAABAAAAQAAABABABIAAAFQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAEAAABABIABAQIgfABIgDgBIAAgGQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAIAEgEIgBgbIgBgGIgBgTIgNACQgCADACAGIAAALIAAADIAAAHQgBAQgKAKIgHAGIgJADIgJABQgEAAgGgDgAjbAsQgIgDgGgHQgKgNAAgTIADgLQAKgmAdAAIAFABQAEAAAFADQAGADAGAFIABgEQAEgCAKgBQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIACAdIAAADQAAABgGADIgJACIgGgMQgFgJgDgCIgEgCIgIgBQgCAAgEADIgEAFQgDAEgBAGIgEAQQAAAIAFAFIAFAEQAEACADAAIACAAQADAAAGgEQAEgCAEgGIACgEQADgBAGAAQABAAAAAAQABAAAAABQAAAAAAABQABABAAABIgCAKQgBAFgDAEQgFAJgLADIgCABQgHADgHAAQgJAAgHgDgAFbAnQgHgDgEgFQgEgFgDgHQgHgMAAgNQAAgJABgHQACgHADgFQAEgHAJgDIAKgEIAJgBIASADIANADQANAFAGAVQACAJAAAIQAAAFgDAJQgCAJgDAEQgEAGgHAEIgHAEIgHACIgDABIgKAAQgFAAgOgFgAFkghIgCACIgCAFQgBAJAAAMQAAAMADAHQADAEAEAEQAGADAEAAQAFAAADgBQADgCACgDQACgDAAgEIABgHQAAgLgCgKQgCgFgGgGIgGgFQgEgCgFAAIgGABgAk+ArQgFgBAAgBQAAgIABgDQABgBAGgCIADgBIgDguQABgBgGAAIgBAAIgBAAIgEgBIABgNIAGgCIBIgFIABAEIAAATQAAAIgCACIgNAAIgCgOQgBgBAAAAQAAgBAAAAQgBAAAAgBQgBAAgBAAIgFAAIgBABIgEAAIgNACIAAAVIABAAIAJgCIABgKIABAAIAKACIABABIABASQAAAHgCAGIgIABQgBAAgBgFIgBgGIAAAAIgHAEIAEAIIADAIIAWgFIgBgIQABgGADAAIAIABIACAAIABACIABAcIhHACIgFgBgADiAoIgDgCIAAgBIABgJIALgFIAAgIIgCgmIgJgBIgDgBIABAHIAAAHIgBAAIgLgBIgJgCQgBgOgCAAIgJACIACAuQABABAEAAQAHAAAAACIAAARIgkgCIAAABIgLAAIgDgBIAAgGQAAgBABgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAOgEIgBgyIgBgFIgNABIAAAIIABAFQABAEgCADIgRgBQgBAAgBgHIACgZIACgBIBJgBIAHACIADANIACgLIAOgBIAZABQACABAAAGIABALIgMADIAAADIACAHIACAGIACAAIARgCIAFAAIAEgBIADAAIABgOIgDgBIgIABIAAgBIAAgBIABgGIAAgGQABgBAJgBIAZgBIAGgBIACABIABALIAAABIgMADIAAAnIAHAAIACAJIABAKIgDACIgDAAIgTABIgSABIACgRQAAAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIAEgBQgCgLgBAAIgZACIAAALIAGAAIADAAIADACIAAAFIgBAJIgMABIgEAAIgTACIgDAAIgDAAg");
	this.shape.setTransform(23.5,-30.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

	// Layer 1
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(19.6,19.6,1,1,0,0,0,19.6,19.6);

	this.instance_1 = new lib.Symbol22copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.6,19.6,1,1,0,0,0,19.6,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al+AyQgWAAgDgBIgCgBIgCgSQAAgBAAAAQAAgBABAAQAAAAABgBQABAAAAAAIAGABIAEAAIABgnIAAgLIgDAAIgKgBIABgMIABAAIALgDIAOgCIABAAIAbgCIASgBIAJgCQACAAAAAHIAAAEIgBAVQgEgBgKACIgBgBIAAgLIgPABIgNABIgCAPIAAAAIARAEIAKADIALAEIAHAFQADADAAAEIADAGIgCAIIgDAHQgDAFgFACIgLADIgMACIgPABgAl8AOIgBATIAQAAQADAAADgDQAEgDAAgEQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAAAIgGgFIgNgCIgCAAIgBgBIgBAAIgBADgABeAiIAHgFQgCgIgCAAIgUACIgEACIAAAHQALABAAACIgDAJIgBAEIgSgCQgNAAgIgCIAAgDIACgGQABgEADAAIAIgCQABAAADgNIAJggIAHgVQAAgBAAgBQAAAAAAgBQABAAAAAAQAAAAABAAIAZABQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIAOAsQAEAMAFAJIAIABQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAABIAAALIgJABIgLABIgTAEQgCgGAAgJgABlAHQgCgGgDgHIgIgNQgDAPAAAIQADABANACIAAAAgAg3AtQgEgDgCgDIgQAAIgRABIgEgBIABgGQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAAAABAAIAEgEIAAgDIgBgTIgBgHIAAgNIgNABQgFABgHgBIgCAAIAAAIIABAgIADABIAEABQABAEABAHIAAACIglABIAAgCIABgLIAAgCQABAAAAABQAAAAABAAQAAAAABAAQABAAAAAAIACgDIgBgiIAAgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIABAAIgIgCIAAgEIADgNIABgBIAZABIAWgBQAUgCAJABIAFAQIgBAAIgIADIABAMIABAEIAAAOQABgBAAAAQAAAAAAAAQAAAAAAABQAAAAAAABIABAHIAFAAQAFAAAAABIABAFIADgEIAEgDQADgCADAAQAHAAAAALIAAAEIAEgCQADgCACgEIACgIIAAgHIAAgDIgCgPIAAgJIgBgBIgJAAIgBAAIgBgBIAAABIAAgOQAFgCAHgBIAWgBQAbgCAIAAIAFAQIgBAAIgIACIADApQABgBAAAAQAAAAAAAAQAAAAAAABQAAABAAABIABAFQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAFAAAAABIABAQIgfABIgDgBIABgGQgBgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAIAEgEIgBgbIgBgGIgBgTIgNACQgBADABAGIAAALIAAADIAAAHQAAAQgMAKIgHAGIgIADIgJABQgFAAgFgDgAjbAsQgIgDgGgHQgKgNAAgTIADgLQAKgmAdAAIAGABQADAAAGADQAFADAGAFIABgEQAFgCAKgBQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIACAdIAAADQAAABgHADIgIACIgGgMQgFgJgCgCIgGgCIgHgBQgCAAgDADIgFAFQgDAEgBAGIgEAQQAAAIAFAFIAFAEQADACAEAAIADAAQACAAAGgEQAEgCADgGIADgEQADgBAHAAQAAAAAAAAQABAAAAABQAAAAAAABQABABAAABIgBAKQgCAFgDAEQgGAJgJADIgDABQgHADgGAAQgKAAgHgDgAFbAnQgGgDgFgFQgEgFgDgHQgHgMAAgNQAAgJABgHQACgHADgFQAEgHAJgDIAKgEIAJgBIARADIAOADQANAFAGAVQACAJAAAIQAAAFgDAJQgDAJgDAEQgDAGgHAEIgIAEIgGACIgEABIgKAAQgEAAgOgFgAFkghIgBACIgCAFQgCAJAAAMQAAAMAEAHQABAEAGAEQAFADAFAAQAEAAADgBQADgCACgDQACgDAAgEIABgHQAAgLgDgKQgBgFgGgGIgFgFQgFgCgFAAIgGABgAk+ArQgFgBAAgBQAAgIABgDQAAgBAHgCIADgBIgDguQAAgBgEAAIgBAAIgBAAIgFgBIABgNIAGgCIBDgFIAFAAIABAEIAAATQAAAIgBACIgOAAIgDgOQAAAAAAgBQAAgBAAAAQgBAAAAgBQgBAAAAAAIgHAAIAAABIgDAAIgPACIAAAVIABAAIAJgCIABgKIACAAIALACIABABIAAASQAAAHgBAGIgIABQgCAAgBgFIgBgGIAAAAIgHAEIAEAIIACAIIAXgFIAAgIQAAgGACAAIAJABIABAAIABACIACAcIhHACIgFgBgADiAoIgDgCIAAgBIAAgJIANgFIAAgIIgEgmIgJgBIgCgBIABAHIAAAHIgBAAIgKgBIgJgCQgCgOgCAAIgJACIACAuQABABAEAAQAHAAAAACIAAARIgkgCIAAABIgLAAIgDgBIAAgGQAAgBABgBQAAgBAAAAQAAgBAAAAQAAAAABAAIAMgEIAAgyIgBgFIgNABIAAAIIABAFQABAEgCADIgRgBQgCAAAAgHIACgZIACgBIBJgBIAIACIACANIABgLIAQgBIAYABQABABABAGIABALIgLADIAAADIABAHIACAGIACAAIAHgBIAPgBIAEgBIADAAIACgOIgEgBIgIABIAAgBIgBgBIACgGIAAgGQABgBAJgBIAZgBIAGgBIABABIACALIgBABIgLADIAAAnIAHAAIACAJIAAAKIgCACIgDAAIgTABIgSABIACgRQAAgBAAAAQABAAAAAAQABAAAAAAQABgBABAAIAEgBQgCgLgBAAIgaACIABALIAGAAIADAAIADACIAAAFIgBAJIgMABIgEAAIgTACIgDAAIgDAAg");
	this.shape.setTransform(21.1,-36.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

	// Layer 1
	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(19.5,19.5,1.611,1.611,0,0,0,19.5,19.5);

	this.instance_1 = new lib.Symbol23copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.6,19.6,1,1,0,0,0,19.6,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol25();
	this.instance.parent = this;
	this.instance.setTransform(116.7,165.9,1,1,0,0,0,19.6,19.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol25(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.6,121.7,1,1,0,0,0,19.6,19.6);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol29();
	this.instance_2.parent = this;
	this.instance_2.setTransform(32.6,19.6,1,1,0,0,0,19.6,19.6);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 5
	this.instance_3 = new lib.Symbol27();
	this.instance_3.parent = this;
	this.instance_3.setTransform(89.7,65.7,1,1,0,0,0,19.6,19.6);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.Symbol27(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 6
	this.instance_4 = new lib.Symbol26();
	this.instance_4.parent = this;
	this.instance_4.setTransform(174.7,60.7,1,1,0,0,0,19.6,19.6);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.Symbol26(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-18.4,-34.4,236.5,235.8), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(97.6,93.2,1,1,0,0,0,97.1,92.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(316.5,82.5,1,1,0,0,0,149.5,138.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,195.3,186.3), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(213.2,136.2,1,1,0,0,0,158.2,93.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(139,203.2,1,1,0,0,0,53,60.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(144,143.5,1,1,0,0,0,144,143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 4
	this.instance_3 = new lib.Symbol15();
	this.instance_3.parent = this;
	this.instance_3.setTransform(144.1,143.1,1,1,0,0,0,10,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,288,287), null);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol38();
	this.instance.parent = this;
	this.instance.setTransform(111.5,18.2,1,1,0,0,0,111.5,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.07,scaleY:1.07,x:111.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-9,225.2,54.5);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol40();
	this.instance.parent = this;
	this.instance.setTransform(300,150,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol41, new cjs.Rectangle(0,0,600,300), null);


(lib.Symbol39copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol41();
	this.instance.parent = this;
	this.instance.setTransform(300,150,1,1,0,0,0,300,150);
	this.instance.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39copy, new cjs.Rectangle(0,0,600,300), null);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol41();
	this.instance.parent = this;
	this.instance.setTransform(300,150,1,1,0,0,0,300,150);
	this.instance.alpha = 0.059;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.18},9).to({alpha:0.059},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		 this.pizza.x = - stage.mouseX / 15;
		 this.pizza.y = - stage.mouseY / 15;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.Symbol39();
	this.instance.parent = this;
	this.instance.setTransform(300,150,1,1,0,0,0,300,150);

	this.pizza = new lib.Symbol39copy();
	this.pizza.parent = this;
	this.pizza.setTransform(-5.7,-0.1,1,1,0,0,0,-5.7,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.pizza}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Custom Mouse Cursor
		Replaces the default mouse cursor with the specified symbol instance.
		*/
		stage.canvas.style.cursor = "none";
		this.kurs.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kurs.x = stage.mouseX/window.devicePixelRatio;
			this.kurs.y = stage.mouseY/window.devicePixelRatio;
		}
		//To restore the default mouse pointer, uncomment the following lines:
		//this.removeEventListener("tick", fl_CustomMouseCursor.bind(this));
		//stage.removeChild(kurs);
		//stage.canvas.style.cursor = "default";
		
		
		var _this = this;
		
		_this.kurs.visible=false;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		    {
			    _this.pica.gotoAndPlay(0);
				_this.kurs.visible=true;
		
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
			    _this.pica.gotoAndPlay(1);
				_this.kurs.visible=false;
		
		    }
		
			
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 6
	this.kurs = new lib.Symbol50();
	this.kurs.parent = this;
	this.kurs.setTransform(-120.4,144.6,0.564,0.564,0,0,0,46.5,57.6);

	this.timeline.addTween(cjs.Tween.get(this.kurs).wait(1));

	// Layer 5
	this.instance = new lib.Symbol45();
	this.instance.parent = this;
	this.instance.setTransform(442.9,115.9,1,1,0,0,0,103.2,89.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.instance_1 = new lib.Symbol44();
	this.instance_1.parent = this;
	this.instance_1.setTransform(451.2,244.9,1,1,0,0,0,111.5,18.2);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 3
	this.instance_2 = new lib.Symbol4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(156,150.5,1,1,0,0,0,144,143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// back
	this.pica = new lib.Symbol2();
	this.pica.parent = this;
	this.pica.setTransform(306,150,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get(this.pica).wait(1));

	// Layer 2
	this.instance_3 = new lib.Symbol42();
	this.instance_3.parent = this;
	this.instance_3.setTransform(300,150,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(177.3,145,745.1,311.2);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/mouse.png?1485963404906", id:"mouse"},
		{src:"images/pizza1.png?1485963404906", id:"pizza1"},
		{src:"images/pizza2.png?1485963404906", id:"pizza2"},
		{src:"images/pizza3.png?1485963404906", id:"pizza3"},
		{src:"images/pizza4.png?1485963404906", id:"pizza4"},
		{src:"images/pizza5.png?1485963404906", id:"pizza5"},
		{src:"images/pizzatext.png?1485963404906", id:"pizzatext"},
		{src:"images/radar.png?1485963404906", id:"radar"},
		{src:"images/setka.png?1485963404906", id:"setka"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;