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


(lib.radarback = function() {
	this.initialize(img.radarback);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,312,300);


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


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza2();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-35.7,0.811,0.811);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-35.7,71.4,71.4);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza2();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-35.7,0.811,0.811);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-35.7,71.4,71.4);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza2();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-35.7,0.811,0.811);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-35.7,71.4,71.4);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza3();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-35.7,0.811,0.811);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-35.7,71.4,71.4);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza3();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-35.7,0.811,0.811);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-35.7,71.4,71.4);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza3();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-35.7,0.811,0.811);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-35.7,71.4,71.4);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza4();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-35.7,0.811,0.811);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-35.7,71.4,71.4);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza4();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-35.7,0.811,0.811);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-35.7,71.4,71.4);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza4();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-35.7,0.811,0.811);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-35.7,71.4,71.4);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza5();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-35.7,0.811,0.811);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-35.7,71.4,71.4);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza5();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-35.7,0.811,0.811);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-35.7,71.4,71.4);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza5();
	this.instance.parent = this;
	this.instance.setTransform(-35.7,-35.7,0.811,0.811);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-35.7,71.4,71.4);


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCA40").s().p("AgYCKIgMgDIAFgVQgbgGgXgDQgPgCgPAFIgVABQgLACgMAEQADgBgMggIACAAIAPgJIgBgOQgCgbgGgtIgDgHQgJACgBACIgEgFQAAgGgCgEIgEgVIBNgJIAJABIABAGQABARgDAIIgHAFIgKACIACAZQgCgHACAOIAEAjQABANADAFIALgBQAKgCAYAFIABgbIABgTIACgnIgJgHIgBgeQADgCADAAIAggDQAXgDARABIgBAiIAAgBIAAABQgCADgKAAQgGAAgCABIgMBdIAmALQgCAZgGASQAAAOgDALQgIAAgagIgAjzCKIgLgDIAFgVQgcgGgXgDQgOgCgPAFIgWABQgKACgMAEQADgBgMggIACAAIAPgJIgCgOQgCgbgFgtIgEgHQgIACgCACIgDgFQgBgGgCgEIgEgVIBOgJIAJABIABAGQAAARgCAIIgHAFIgKACIACAZQgDgHACAOIAEAjQACANADAFIALgBQAJgCAZAFIAAgbIACgTIABgnIgJgHIgBgeQADgCAEAAIAfgDQAXgDATABIgBAiIAAgBIAAABQgDADgJAAQgIAAgCABIgMBdIAoALQgCAZgGASQAAAOgEALQgHAAgcgIgAAnBxQgKgDABgDQgBgRACgFQABgEAOgFIAHgBIgCgUIgDhPQgBgDgKAAIgDAAIgCABQgDAAgGgDIABgcIAOgDICRgMIAKABQABABAAAFIgBAIIACAhQAAATgDAFIgcgBQgEgMgDgSQAAgGgHABIgOAAIgHABQgJgBgVAEIAAAsIADABIATgEIABgVIAFAAIAWAEIABADIABAnQAAAOgDAPIgRACQgDAAgBgLIgCgNIgBAAQgCAAgNAHQAAAHAHAMIAGARIAjgGIAOgEIgBgRQABgOAFAAIAUAEIADAAQAAAAAAAAQAAABAAAAQAAABABAAQAAABABAAIADA7IgPABIiLAEIgCABIgJgCgADTBWQAAgGAbgLIAAgVQgDgXgCggIAAgaIgJgBIgLACQgHAAAAgFIAEgmIAEgDQAfgCAuAAQAQAAAOACQAOACANADIAXAGQAMAFAGAJQADAEADALQADAMAAAFIgEANQgBAIgIAGIgOALIgXALQgNAFgKADIgjAHIAAAMQAAAKACADIAFAAIAXgCQAEAAADACQgCAHABAKIAAARQgSAAgmADIg6AEgAEPgLIACAIIACAFIACAAIADgBIADAAIAEgBQALAAANgEIALgJQAEgDAAgHQgBgIgGgGQgIgFgIgBIggAAIAAAggAJYBnIgCAEIhCgCQgKgBgCgCIACgjQAKgDAHABIAAAAIACAAQAAAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIgFgkQAAgNgCgDQgJAQgNAgIgVAtIg1AEIgxgFIgCgZQAEgCAFgBIANAAQACAAAAAAQABAAABAAQAAAAAAAAQABgBAAAAIAChiIgKgDQgHgCgDgDQgCgBAAgFIgCgfQgBgLAEgEIBNAHQAFAagBANQAAAEgFAAIgEgBIgLgBIgBBBQAOgKAJgNIArhBIABgHIAGgJIAYAGQAWAFAJAFQgFAlAAALIgCA6IABANQAEADASAAQAGAAAAADIgBAJIANAAQABAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQACgYABhKIgLgDQgGgCgDgDQgCgBAAgFIgCgfQgBgLADgEIBNAHQAGAagBANQgBAEgFAAIgDgBIgLgBIgBBBQANgKAKgNIArhBIABgHIAGgJIAiAIQANAEAIAEQgGAlAAALIgCA6IACANQAEADARAAQAHAAgBADIgBAKQgBANgCAIQgCAIgDACIhCgCQgKgBgCgCIADgjQAKgDAGABIABAAIABAAQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBABAAIgGgkQAAgNgCgDQgJAQgNAgIgUAtQgGABgdAAIgSADgAptBoIgfAAIgnABQgCAAgEgCIABgNQAAgIABAAIAJgIIgCgvIgBgTIgCgaQgNACgMABIgagBIgFABQgBAEgBAMIACBHIAJABQAHACgBABQAEAIABAPIABAFIgIABIhIACIAAgGIABgXIADgEQABABAHAAIACgGQABgzgCgYIAAgHQgCgDgEAAIADgBIgSgDIAAgIIAHgcIABgCQAdACAZAAQAZgBAWgCQArgEAUABIAKAkIgCAAIgRAFIAGBCQAAgCAAAAQABgBAAABQAAAAAAACQABABAAACIABAOQACACAIAAQALgBACACIAAAKIACAAIANAAQABAAABAAQABAAABAAQAAAAAAAAQABgBAAAAIAChiIgKgDQgHgCgDgDQgCgBAAgFIgCgfQgBgLAEgEIBNAHQAFAagBANQAAAEgFAAIgEgBIgKgBIgCBBQAOgKAJgNIArhBIABgHIAHgJIAWAGQAWAFAKAFQgFAlgBALIgBA6IABANQAFADARAAQAGAAAAADIgBAKQgBANgCAIQgDAIgDACIhBgCQgKgBgCgCIACgjQALgDAGABIABAAIABAAQAAAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIgFgkQAAgNgCgDQgJAQgNAgIgVAtIg0AEgAKlhnIgXgFIAOglIAMAHIANAGQAHABAHAAIAQAAIAegIIAIAfIgkAHIgVACg");
	this.shape.setTransform(81.5,14.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol59, new cjs.Rectangle(0,0,162.9,29.2), null);


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.799,0.799);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol58, new cjs.Rectangle(0,0,70.3,70.3), null);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00B138","rgba(0,33,5,0)"],[0,1],-33.9,11.1,36.1,-12).s().p("ApdH9IKOygIItTgIgCABQj3BmkiAAQl0AAksing");
	this.shape.setTransform(60.6,67.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol54, new cjs.Rectangle(0,0,121.2,135.2), null);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FF00","rgba(0,178,58,0.996)","rgba(0,176,58,0.929)","rgba(3,146,45,0)"],[0,0.106,0.263,1],0,0,0,0,0,5.4).s().p("AgiAjQgPgOAAgVQAAgUAPgOQAOgPAUAAQAVAAAOAPQAOAOAAAUQAAAVgOAOQgOAOgVAAQgUAAgOgOg");
	this.shape.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol53, new cjs.Rectangle(0,0,9.9,9.9), null);


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
	this.shape.graphics.f("#FFCA40").s().p("AgHEVIgXgCQgLAAg6gWIgwgTQgRgJgZgdQgagdgLgUQgOgbgIgfQgHgfAAgjQAAhhAihGQAUgqAfgbQAfgdAqgNIBAgPIA+gIIAgAGIAjAEQBQAZAoA+QAoA+AABlQAAA+gIAfQgKAlgWAjQgWAighAfQhHBDhKAAgAhNhIQgZBVAAAkQAABeBeAAQAMAAAdgdQAbgaAIgQQAWgrAIgmIADguQAAhihlgRIgPgIQgkAigaBIg");
	this.shape.setTransform(13,56.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCA40").s().p("AiYEbIgEgcIgHg8QAIgHAdgHIApgMIAcgMIAEgqIgBgTIgBgvIgDiHIgngDIgqADIgFAAIgXgLIgMhHIAfgLQApgDAigeQAfgbAOgpIAQgHIBKgLQAAgEAFAAIAeAAIAGAbQAAgBAAgBQAAAAAAAAQABABAAABQAAACAAACIgBgEIgFA5IgHBhIgFDxIBOAJIAIAQIAFAwIADAaIAAADQgIAZjUAmIhgARQgLABgFgUgAg0B0IAAgEIAAgBIAAABIAAAEIgBAAIAAAAIAAgBIAAABIAAAAIABAAg");
	this.shape_1.setTransform(-35.1,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol49, new cjs.Rectangle(-68.5,6.6,107.6,104.3), null);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("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gDgFQgBAAAAgBQgBAAAAAAQgBAAgBgBQAAAAgBAAIgCABIgDAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIABgFQAAgJABgBIAPABIAGgBIAXACQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAABIABAMIgBABIgFACIgDAAQAAACAIAHIAJAJIALgSIgLgBQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAgDADgLQABAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIAmABQADAAAAAFIAAAHIgOAEQgEADgDAJIgLASIALAOIALAVIAJgBIABAAIABACIAAAPIgDABIgdAAIgRADQgDAAAAgLQAAgEACgCIAFgDIgQgRQgHALAAAFQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAIACAAIADAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAABIgBANQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgSgCIgUgBIAAADIAAADIgEABIgYABQgIgBgFABgAC2AtQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBAAAAIgBgCIABgKIAOgFIAAgKIgDgsQgCgBgJAAIgCgBIABAHIAAAJIgCAAIgMgBQgIgBgCgCQgCgQgCAAIgLACIACA2QABABAFAAQAIAAAAACIAAAUIgogBIgBgBIgBAAIAAABIgLAAIgCAAIgDgBIABgHQAAgBAAgBQAAgBAAgBQAAAAABAAQAAgBAAAAIAPgEIgBg7IgBgGIgPACIABAJIAAAGIgBAHIgSgBIgCABQgCAAAAgIIACgeIADgBIBVgBIAIACIADAQQAAgIACgFIASgBIAcAAQACACABAHIABAMIgOAEIAAADIACAJIACAHIADgBIAIgBIASAAIAEgBIAEgBIABgQIgEgBIgJABIAAgBIgBgBIACgHIABgHQAAgCALgBIAMgBIARAAIAHgBQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIADANIgBABIAAAAIgOADIAAAuIAJABIABAKIABAMIgDABIgDABIgVABIgWABIACgUIAFgCIAEgCQgCgMgBAAIgeADIABANIALgBIADACIAAAGIgBALIgOABIgFAAIgdADg");
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
	this.shape.graphics.f("#FF0000").s().p("At8DeQhcABhChCQhBhBAAhcQAAhbBBhCQBChBBcAAIb5AAQBcAABBBBQBCBCAABbQAABchCBBQhBBChcgBg");
	this.shape.setTransform(111.6,22.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,223.2,44.5), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().rs(["rgba(51,255,0,0.188)","#006600","rgba(0,255,0,0.2)"],[0,0.518,1],0,0,0,0,0,14.6).ss(9,1,1).p("ABkAAQAAAqgdAdQgdAdgqAAQgpAAgdgdQgdgdAAgqQAAgpAdgdQAdgdApAAQAqAAAdAdQAdAdAAApg");
	this.shape.setTransform(10,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-4.5,-4.5,29,29), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.radarback();
	this.instance.parent = this;
	this.instance.setTransform(-3,-4,0.968,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AusOtQmGmFAAooQAAonGGmFQGGmGImAAQIoAAGFGGQGGGFAAInQAAIomGGFQmFGGooAAQomAAmGmGg");
	mask.setTransform(143.6,142.8);

	// Layer 1
	this.instance_1 = new lib.radar();
	this.instance_1.parent = this;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-3,-4,302,300), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizzatext();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,600,300), null);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol58();
	this.instance.parent = this;
	this.instance.setTransform(35.1,35.1,1,1,0,0,0,35.1,35.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(140).to({_off:false},0).to({alpha:1},5).wait(29).to({alpha:0},5).to({_off:true},1).wait(3));

	// pizza5.png
	this.instance_1 = new lib.Tween13("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.7,35.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween11("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(35.7,35.7);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween12("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(35.7,35.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(104).to({_off:false},0).to({_off:true,alpha:1},5).wait(29).to({_off:false,alpha:0},5).to({_off:true},1).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(104).to({_off:false},5).to({_off:true},29).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(109).to({_off:false},29).to({_off:true,alpha:0},5).wait(40));

	// pizza4.png
	this.instance_4 = new lib.Tween17("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(35.7,35.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween15("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(35.7,35.7);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween16("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(35.7,35.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(67).to({_off:false},0).to({_off:true,alpha:1},5).wait(29).to({_off:false,alpha:0},5).to({_off:true},1).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(67).to({_off:false},5).to({_off:true},29).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(72).to({_off:false},29).to({_off:true,alpha:0},5).wait(77));

	// pizza3.png
	this.instance_7 = new lib.Tween21("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(35.7,35.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween19("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(35.7,35.7);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween20("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(35.7,35.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(31).to({_off:false},0).to({_off:true,alpha:1},5).wait(29).to({_off:false,alpha:0},5).to({_off:true},1).wait(112));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(31).to({_off:false},5).to({_off:true},29).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(36).to({_off:false},29).to({_off:true,alpha:0},5).wait(113));

	// pizza2.png
	this.instance_10 = new lib.Tween23("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(35.7,35.7);

	this.instance_11 = new lib.Tween24("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(35.7,35.7);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween25("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(35.7,35.7);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},29).to({state:[{t:this.instance_12}]},5).to({state:[]},1).to({state:[{t:this.instance_10}]},142).to({state:[{t:this.instance_12}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},29).wait(148).to({_off:false},0).to({_off:true,alpha:0},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:false},29).to({_off:true,alpha:0},5).wait(149));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.4,71.4);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol49();
	this.instance.parent = this;
	this.instance.setTransform(98.3,45.5,1,1,0,0,0,29.8,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol55, new cjs.Rectangle(0,0,107.6,104.3), null);


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
	this.instance = new lib.Symbol55();
	this.instance.parent = this;
	this.instance.setTransform(-14.7,58.7,1,1,0,0,0,53.8,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:52.2,scaleY:1.13,y:58.9},4).to({regY:52.1,scaleY:1,y:58.7},5).to({scaleX:1.12,x:-14.6},5).to({scaleX:1,x:-14.7},5).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.5,6.6,107.6,104.3);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol47();
	this.instance.parent = this;
	this.instance.setTransform(56.7,8.2,1,1,0,0,0,56.7,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:56.6,regY:8.1,scaleX:1.8,scaleY:1.8,x:56.6,y:8.1},4).to({regX:56.7,regY:8.2,scaleX:1,scaleY:1,x:56.7,y:8.2},5).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.9,0.8,112.4,11.4);


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


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(10.1,10.1,0.4,0.4,0,0,0,10,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:9.6,regY:9.6,scaleX:8.65,scaleY:8.65,x:6.6,y:6.6,alpha:0.199},29).to({alpha:0},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.3,4.3,11.6,11.6);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 43
	this.instance = new lib.Symbol43();
	this.instance.parent = this;
	this.instance.setTransform(28.1,52.4,1,1,-0.9,0,0,28.8,51.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol54();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.3,53.7,1,1,0,0,0,60.6,67.5);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-2.5,-13.8,123.5,135.2), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy 9
	this.instance = new lib.Symbol53();
	this.instance.parent = this;
	this.instance.setTransform(77,93.4,1.374,1.374,0,0,0,5,5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(88).to({_off:false},0).to({scaleX:1.82,scaleY:1.82,x:77.1,y:93.5},4).to({scaleX:1.37,scaleY:1.37,x:77,y:93.4,alpha:0},7).wait(1));

	// Layer 1 copy 8
	this.instance_1 = new lib.Symbol53();
	this.instance_1.parent = this;
	this.instance_1.setTransform(117,37,1.565,1.565,0,0,0,5,5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(76).to({_off:false},0).to({scaleX:2.07,scaleY:2.07,x:117.1,y:37.1},4).to({scaleX:1.57,scaleY:1.57,x:117,y:37,alpha:0},16).to({_off:true},1).wait(3));

	// Layer 1 copy 7
	this.instance_2 = new lib.Symbol53();
	this.instance_2.parent = this;
	this.instance_2.setTransform(153,14.3,1.496,1.496,0,0,0,5,5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(69).to({_off:false},0).to({scaleX:1.98,scaleY:1.98,x:153.1},4).to({scaleX:1.5,scaleY:1.5,x:153,alpha:0},20).to({_off:true},1).wait(6));

	// Layer 1 copy 6
	this.instance_3 = new lib.Symbol53();
	this.instance_3.parent = this;
	this.instance_3.setTransform(101,-7,1.443,1.443,0,0,0,5,5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(64).to({_off:false},0).to({regY:4.9,scaleX:1.91,scaleY:1.91,x:101.1,y:-7.1},4).to({regY:5,scaleX:1.44,scaleY:1.44,x:101,y:-7,alpha:0},22).to({_off:true},1).wait(9));

	// Layer 1 copy 5
	this.instance_4 = new lib.Symbol53();
	this.instance_4.parent = this;
	this.instance_4.setTransform(133.1,-51.1,1.496,1.496,0,0,0,5,4.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(57).to({_off:false},0).to({regY:5,scaleX:1.98,scaleY:1.98,y:-50.9},4).to({regY:4.9,scaleX:1.5,scaleY:1.5,y:-51.1,alpha:0},26).to({_off:true},1).wait(12));

	// Layer 1 copy 4
	this.instance_5 = new lib.Symbol53();
	this.instance_5.parent = this;
	this.instance_5.setTransform(85,-75.1,1.496,1.496,0,0,0,5,4.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(48).to({_off:false},0).to({regY:5,scaleX:1.98,scaleY:1.98,x:85.1,y:-74.9},4).to({regY:4.9,scaleX:1.5,scaleY:1.5,x:85,y:-75.1,alpha:0},32).to({_off:true},1).wait(15));

	// Layer 1 copy 3
	this.instance_6 = new lib.Symbol53();
	this.instance_6.parent = this;
	this.instance_6.setTransform(17.1,-75.1,1.496,1.496,0,0,0,5,4.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34).to({_off:false},0).to({regY:5,scaleX:1.98,scaleY:1.98,y:-74.9},4).to({regY:4.9,scaleX:1.5,scaleY:1.5,y:-75.1,alpha:0},43).to({_off:true},1).wait(18));

	// Layer 1 copy 2
	this.instance_7 = new lib.Symbol53();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-23.2,-7,1.626,1.626,0,0,0,4.9,5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({_off:false},0).to({regX:5,scaleX:2.15,scaleY:2.15,x:-22.9,y:-6.9},4).to({regX:4.9,scaleX:1.63,scaleY:1.63,x:-23.2,y:-7,alpha:0},55).to({_off:true},1).wait(21));

	// Layer 1 copy
	this.instance_8 = new lib.Symbol53();
	this.instance_8.parent = this;
	this.instance_8.setTransform(17,17,1.687,1.687,0,0,0,5,5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(11).to({_off:false},0).to({scaleX:2.23,scaleY:2.23,x:17.1,y:17.1},4).to({scaleX:1.69,scaleY:1.69,x:17,y:17,alpha:0},60).to({_off:true},1).wait(24));

	// Layer 1
	this.instance_9 = new lib.Symbol53();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-3.2,65,1.748,1.748,0,0,0,4.9,5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({_off:false},0).to({regX:5,scaleX:2.31,scaleY:2.31,x:-2.9,y:65.1},4).to({regX:4.9,scaleX:1.75,scaleY:1.75,x:-3.2,y:65,alpha:0},64).to({_off:true},1).wait(27));

	// Layer 1
	this.instance_10 = new lib.Symbol7();
	this.instance_10.parent = this;
	this.instance_10.setTransform(58,0.3,1,1,0,0,0,58,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:360},99).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("AuSOTQl7l7AAoYQAAoXF7l7QF7l7IXAAQIYAAF7F7QF7F7AAIXQAAIYl7F7Ql7F7oYAAQoXAAl7l7g");
	this.shape.setTransform(58.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.3,-129.5,258.8,258.8);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(139,203.2,1,1,0,0,0,53,60.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(144,143.5,1,1,0,0,0,144,143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(144.1,143.1,1,1,0,0,0,10,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-3,-4,302,300), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(300,150,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,600,300), null);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol57();
	this.instance.parent = this;
	this.instance.setTransform(166.6,37.6,0.942,0.942,0,0,0,35.1,35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCA40").s().p("AggB7IgEgBIgxgCQgfgBgPgFIgNgDQgMgEgBgFQAAgDAMgQIAPgVQAEgEAFAAIAIACIAIABQADAAAzg9IgshCQgSACgRAAIgCgbQAAgJAEgCQAIgEAPgDIBHgKIAjgDIAPAaQAFALAAAHIgaAIIgBACQAAAEAUAZIAggrIgGgCIgCABIgCABIgDgBIAAgBIgBgHIgBgHIADgMQAKgEAUgDIA0gDIAMgBIALgBQAHAAAGAQQAGAMgBAGIAAACIgBACIgSAAQgLAAgIAFQgPAOgaAeQgXAaAAADIAQARIAmAqIAKABIAfgBQAIAAgBAFIgBAZQgCASgBABIhAAKQgoAHgXAAIgQgCQgIgQAAgJQAAgHAKgFIAPgHIgogfIgRATQgKALgEAKIAcAEQAFABAAAFQAAAIgMAVIgEACg");
	this.shape.setTransform(111.4,40.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol48();
	this.instance_1.parent = this;
	this.instance_1.setTransform(78.8,40.5,1,1,0,0,0,29.8,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol56, new cjs.Rectangle(-19.5,-5,220.3,104.3), null);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol59();
	this.instance.parent = this;
	this.instance.setTransform(108,164.5,1,1,0,0,0,81.5,14.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCA40").s().p("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");
	this.shape.setTransform(104,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Symbol 48
	this.instance_1 = new lib.Symbol56();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.3,81.2,1,1,0,0,0,53.8,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Symbol 46
	this.instance_2 = new lib.Symbol46();
	this.instance_2.parent = this;
	this.instance_2.setTransform(106.8,135.2,1,1,0,0,0,56.7,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(-13,1.2,220.3,177.9), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AK0BMIgIgDIADgOIgjgGQgKgCgKAEQgIgBgHACQgIABgIADQACgBgIgWIABAAIALgHIgCgJQgBgUgEgeIgCgFQgGABgBABIgDgDQAAgFgCgCIgCgPIA2gGIAGABIABAEQAAAMgBAGIgFADIgHACIABARQgCgGACALIADAXQABAKABADIAJgBQAGgBARAEIABgTIABgMIABgcIgHgFIAAgVQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAIAWgDQAQgCANABIgBAYIABgBIgBABQgBACgHgBQgFAAgCACIgIBBIAbAHQgBARgEANQAAAJgDAIQgEAAgUgFgAIcBMIgIgDIADgOIgjgGQgKgCgLAEQgHgBgIACQgHABgIADQABgBgIgWIACAAIAKgHIgBgJQgBgUgEgeIgDgFQgGABAAABIgDgDQgBgFgBgCIgCgPIA2gGIAGABIAAAEQABAMgCAGIgFADIgHACIACARQgCgGABALIADAXQABAKACADIAIgBQAGgBARAEIABgTIABgMIABgcIgGgFIgBgVQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAWgDQARgCANABIgBAYIAAgBIAAABQgCACgHgBQgFAAgBACIgIBBIAbAHQgBARgEANQAAAJgDAIQgFAAgTgFgAsPBEIgKAAQgFAAgRgHIgHgDIAAAHQgFgDgDABIgLgFIgGgEIAIgrIACgBIALABQATADACAFQgCALgCAEQgCADAQADIABABQAPACAHgDQADgFABgFQABgFgCgHQgCgFgEgDIgIgEIgLgDIAAgCIABgEIABgNIACgCIAIABIADAAIABgBQAFgDACgDQADgEgBgEQAAgHgFgEQgFgEgIgBQgGAAgCACQgDADgBAEQgDABAAAIQgTAEgFgBIgDgTIgDgRIACgCIASgDIADABIACADQACgDAJgCQAIgCARADQAKADAIAFQAJAGAFAKQAEAIABAKIABADQgBAIgEAEQgEAJgFADQAIAEAFAGQAEAHAAAIQgBALgFAJQgDAGgIAFIgOAIQgKADgJAAIgDAAgAolBEQgggBgFgBIgDgCIgCgUIAAAOQgFABgJABIgtAHQgDgKgBgNIAMgHQgEgNgCAAIgeAEIgHADIAAAJQAQACAAAEIgDANQgBAEgBACQgTgDgIABQgTAAgNgEIAAgEI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");
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
(lib.index2 = function(mode,startPosition,loop) {
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
	this.instance_1.setTransform(448.2,244.9,1,1,0,0,0,111.5,18.2);
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
		{src:"images/mouse.png?1486026191161", id:"mouse"},
		{src:"images/pizza1.png?1486026191161", id:"pizza1"},
		{src:"images/pizza2.png?1486026191161", id:"pizza2"},
		{src:"images/pizza3.png?1486026191161", id:"pizza3"},
		{src:"images/pizza4.png?1486026191161", id:"pizza4"},
		{src:"images/pizza5.png?1486026191161", id:"pizza5"},
		{src:"images/pizzatext.png?1486026191161", id:"pizzatext"},
		{src:"images/radar.png?1486026191161", id:"radar"},
		{src:"images/radarback.png?1486026191161", id:"radarback"},
		{src:"images/setka.png?1486026191161", id:"setka"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;