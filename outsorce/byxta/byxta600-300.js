(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.anchor = function() {
	this.initialize(img.anchor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,663,75);


(lib.arm = function() {
	this.initialize(img.arm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,60);


(lib.backgr = function() {
	this.initialize(img.backgr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,400);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,366,253);


(lib.bodygirl = function() {
	this.initialize(img.bodygirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,282,240);


(lib.bra = function() {
	this.initialize(img.bra);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,88);


(lib.chip = function() {
	this.initialize(img.chip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,30);


(lib.coin = function() {
	this.initialize(img.coin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,45);


(lib.getbonus = function() {
	this.initialize(img.getbonus);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,802,69);


(lib.gun = function() {
	this.initialize(img.gun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,122);


(lib.handpir = function() {
	this.initialize(img.handpir);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,125);


(lib.headgirl = function() {
	this.initialize(img.headgirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,166);


(lib.headpir = function() {
	this.initialize(img.headpir);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,294);


(lib.hleft = function() {
	this.initialize(img.hleft);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,158);


(lib.pistol = function() {
	this.initialize(img.pistol);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,227,184);


(lib.popad = function() {
	this.initialize(img.popad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,656,96);


(lib.shold = function() {
	this.initialize(img.shold);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,149);


(lib.skirt = function() {
	this.initialize(img.skirt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,258,129);


(lib.sword = function() {
	this.initialize(img.sword);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,94);// helper functions:

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


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pistol();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(0,0,227,184), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chip();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(0,0,51,30), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.coin();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(0,0,39,45), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("AgHAmQgEgBgDgCIgGgDIgEgFQgEgGgDgHQgCgHAAgHQAAgGACgHQADgHAEgGIAEgFIAGgDQADgCAEgBIAHgBIAIABQADABADACQAFACAGAGQAEAGACAHQADAHAAAGQAAAHgDAHQgCAHgEAGIgEAFIgGADIgHADIgIABIgHgBgAgEgWIgCAGIgBAQIABARIACAGQACACACAAQADAAABgCQACgCABgEQABgGAAgLQAAgKgBgGIgDgGQgCgCgCAAQgCAAgCACg");
	this.shape.setTransform(105.9,100.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIAaQgDgDgBgGQABgFADgDQAEgFAEAAQAFAAAEAFQADADABAFQgBAGgDADQgEAEgFAAQgEAAgEgEgAgIgHQgDgEgBgFQABgFADgEQAEgEAEAAQAFAAAEAEQADAEABAFQgBAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_1.setTransform(97.8,101.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAhQgDgBgDgCQgCgDgBgEQgCgDABgFIAAgeIgRAAIAAgBIgBgOIAAgBIABgBQAZgEAkAEIABABIAAAEQAAAFgCADQgCACgEACIgGABIgGAAIAAAUQAAAHABAEQABAEACABIACACQABAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQgBADgEADQgFADgFAAQgEAAgDgCg");
	this.shape_2.setTransform(93.1,100.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFAiIgGgBQgGgDgFgFQgFgFgDgGIgCgHIAAgHQAAgGACgGQADgHAFgEIAFgFIAGgDIAHgCIAHgBQAIAAAGACQAFACAEAEQAEADACAEIABAIIgBAGIgCAFIgFAEIgFACQgGACgHAAQgHABgGgCQACAFAEADQACADAGAAIALgBQAGgBAFgDIACAAIAAACQgDAHgFAFIgKAGQgGACgGAAgAAAgSQgDACgCAEQgCAEAAAFIAHAAIAFgCIADgEIABgEQAAgDgCgCQgCgBgDgBIAAAAg");
	this.shape_3.setTransform(86.4,100.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARAhQgDgBgCgCIgEgGQgCgEAAgEIAAgJIgLAAIAAAZIgBABIgaAAIAAgBIABglQAAgHgCgFIgCgEIgDgCQAAgBgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQABgEAFgCQAFgDAFAAIAHABIAGAEQACADACAEIABAIIAAAHIALAAIAAgXIABgBIAZAAIAAABIAAAlQAAAHACADQABAEACACIACABQAAABABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBADgFADQgEADgFAAQgEAAgEgCg");
	this.shape_4.setTransform(79,100.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGAjIgIgDQgGgDgFgEQgFgFgDgHIgBgGIgBgHQAAgEACgJQADgGAFgFQAFgFAGgDIAIgCIAGAAQAFAAAJACQAGADAGAFQAFAFACAGQADAJAAAEQAAAHgDAGQgDAHgEAFQgFAEgHADQgJADgFAAgAgEgSIgDAEIgCAHIgBAHQABALACADIADAFQACABACAAIAFgBQACgBABgEQACgEABgKIgBgHIgCgHIgEgEQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgCAAgCABg");
	this.shape_5.setTransform(71.3,100.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmAhIgEgDQgEgDAAgCIABgCIACgCQAEgIACgKQADgMgBgXIAAgBIAbAAIABABIALAYIANgYIAAgBIAdAAIAAABIABA/IAAAAIgZAAIgBAAIABgZIABgNIgRAlQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgDAAIgCgBIgMggIgBANQAAAGgCAEQgCAFgDACQgCADgDABQgEACgEAAIgFgBg");
	this.shape_6.setTransform(62.5,100.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGAjIgHgDQgHgDgFgEQgFgFgCgHIgDgGIAAgHQAAgEADgJQACgGAFgFQAFgFAHgDIAHgCIAGAAQAFAAAKACQAFADAFAFQAFAFADAGQADAJAAAEQAAAHgDAGQgDAHgEAFQgFAEgGADQgKADgFAAgAgEgSIgEAEIgCAHIAAAHQABALABADIAEAFQACABACAAIAFgBQACgBABgEQACgEABgKIgBgHIgCgHIgDgEQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgCAAgCABg");
	this.shape_7.setTransform(50.8,100.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AARAhQgDgBgCgCIgEgGQgCgEAAgEIAAgJIgLAAIAAAZIgBABIgaAAIAAgBIABglQAAgHgCgFIgCgEIgDgCQAAgBgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQABgEAFgCQAFgDAFAAIAHABIAGAEQACADACAEIABAIIAAAHIALAAIAAgXIABgBIAZAAIAAABIAAAlQAAAHACADQABAEACACIACABQAAABABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBADgFADQgEADgFAAQgEAAgEgCg");
	this.shape_8.setTransform(43.1,100.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARAiIgFgDIgEgEIgCgHQgFAIgCADIgGADIgGABQgGAAgFgDQgFgDgDgFQgDgFgCgGIgBgNIABgMQACgGADgFQAEgFAEgDQAFgDAGAAIAHABIAFACQADADAEAGIAAgJIAAgBIAaAAIABABIgBAlIABAMIADAFIACABIABACQgBADgEADQgFADgFAAIgHgBgAgGgPQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQgDAFAAAHQAAAHADAFQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQAAAAABAAQAAABAAAAQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAABgBQACgFAAgHQAAgHgCgFQgBAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAgBgBAAQgBAAAAAAQgBAAAAAAQgBAAgBABQAAAAAAAAQgBAAAAABg");
	this.shape_9.setTransform(35.3,100.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfAwIgBgBIAAhBIgBgMIgCgEIgDgCQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQABgEAEgCQAFgDAFAAIAHABIAFADQACABACADIACAGIAEgGIADgEIAGgDIAGgBQAGAAAFADQAEADAEAFQADAFACAHQABAFAAAHQAAAHgBAFQgCAHgDAEQgEAFgEADQgFADgGAAIgHgBIgFgCQgDgDgEgGIAAAlIAAABgAAAgcIgDAEQgCAEAAAIQAAAHACAFQABAAAAABQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQADgFAAgHQAAgIgDgEIgDgEQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAg");
	this.shape_10.setTransform(27.2,101.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGAxIgGgCQgGgDgFgFQgEgEgCgGQgDgGAAgGIgBgPIACgPIADgHIADgGIAFgGIAGgEQAIgDAKgCIAGgBQAAgBABAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAHAAIAFABQAEADACAFQABAFgCAEIgDAEIgEAEQgEABgIABIgNABIgGACIgFAEIgEAGQgCAEAAAFIADgFIAFgFIAGgDIAFgCQAHAAAGACQAGACAFAEQAEAFADAFQACAGAAAHQAAAHgCAGQgCAGgFAEQgEAEgHADQgGACgIAAIgGgBgAgDACQgBAAAAABQgBAAAAABQgBAAAAABQAAAAAAABQgCAFAAAHQAAAHACAEQABADACACQAAAAAAAAQABABAAAAQABAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAABgBQAAAAABAAIACgFQACgEAAgHQAAgIgCgEIgCgEQgBgBAAAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAABAAAAg");
	this.shape_11.setTransform(19.7,99.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGAjIgHgDQgHgDgFgEQgFgFgCgHIgDgGIAAgHQAAgEADgJQACgGAFgFQAFgFAHgDIAHgCIAGAAQAFAAAJACQAGADAFAFQAFAFADAGQADAJAAAEQAAAHgDAGQgDAHgEAFQgFAEgHADQgJADgFAAgAgEgSIgEAEIgCAHIAAAHQABALABADIAEAFQACABACAAIAFgBQACgBABgEQACgEABgKIgBgHIgCgHIgDgEQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgCAAgCABg");
	this.shape_12.setTransform(12.5,100.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgEAwIgJgDIgHgEIgHgHIgFgHIgFgIIgCgJIgBgKIABgJIACgJIAEgIIAFgHIAHgGIAIgFIAIgDIAJgBQAIAAAGACQAGACAFADQAFADACAEQACAFAAAFIAAAFIgDAFIgFADQgCACgEAAQgEAAgDgCQAAAAgBgBQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAgGIgBgGQgBgDgCgBQgCgBgDAAQgEAAgDADQgDADgCAFIgDALQgBAGABAEQAAAGACAFIAFAIIAFAFIAHAEIAHAAIAIgBIAHgDIAHgEQAEgDgCAGQgJAYgbABIgDAAIgFgBg");
	this.shape_13.setTransform(4.6,99.2);

	this.instance = new lib.coin();
	this.instance.parent = this;
	this.instance.setTransform(-7.6,85.1,0.487,0.487,66.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-27.8,85.1,137.9,26.1), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(7.3,1,1).p("AB4pwQC6AgCNCNQCRCRAeDAALVgJIm9AAAAFrCIAAHEApkhyQAejACRiRQCNiNC7ghAkDgJInRAAAhtJeQi7ghiNiNQiNiNggi6AJsBpQggC6iNCNQiNCNi6AhAAFEFIAAG+");
	this.shape.setTransform(72.5,70.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-3.6,-3.6,152.3,148.7), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.anchor();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,663,75), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.getbonus();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,802,69), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.popad();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,656,96), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.headpir();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,190,294), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,366,253), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.handpir();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,187,125), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sword();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,423,94), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bra();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,137,88), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hleft();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,137,158), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.arm();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,89,60), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bodygirl();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,282,240), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gun();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,55,122), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.headgirl();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,189,166), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shold();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,56,149), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.skirt();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,258,129), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.backgr();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,800,400), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(113.5,92,1,1,0,0,0,113.5,92);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-0.6,x:115,y:97.3},9,cjs.Ease.get(-1)).to({rotation:-1.5,x:116.5,y:103},10,cjs.Ease.get(1)).to({rotation:-0.8,x:115.2,y:98.2},9,cjs.Ease.get(-1)).to({rotation:0,x:113.5,y:92},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,227,184);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(25.5,15,1,1,0,0,0,25.5,15);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.chip();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51,30);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(19.5,22.5,1,1,0,0,0,19.5,22.5);
	this.instance.alpha = 0.73;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.5,22.5,1,1,0,0,0,19.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39,45);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(19.5,22.5,1,1,0,0,0,19.5,22.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(0,0,39,45), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(19.5,22.5,1,1,0,0,0,19.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(0,0,39,45), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(25.5,15,1,1,0,0,0,25.5,15);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(0,0,51,30), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(39.5,38.5,0.545,0.545,0,0,0,72.5,70.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,83,81);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(72.5,70.7,1,1,0,0,0,72.5,70.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,scaleY:1.04,x:72.6},12,cjs.Ease.get(-1)).to({scaleX:1.09,scaleY:1.09,x:72.5},12,cjs.Ease.get(1)).to({scaleX:1.04,scaleY:1.04,x:72.6,y:70.8},13,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:72.5,y:70.7},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-3.6,152.3,148.7);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 18
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(225.5,47,1,1,0,0,0,211.5,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:211.6,scaleY:1,skewX:10.5,skewY:9.8,x:228.1,y:73.5},4,cjs.Ease.get(-1)).to({regX:211.7,scaleY:1,skewX:23.6,skewY:22,x:231.1,y:106.4},5,cjs.Ease.get(1)).to({scaleY:1,skewX:11.8,skewY:11,x:228.3,y:76.8},5,cjs.Ease.get(-1)).to({regX:211.5,scaleY:1,skewX:0,skewY:0,x:225.5,y:47},5,cjs.Ease.get(1)).wait(1));

	// Символ 20
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(104.9,129.6,1.001,1.002,0,3.2,7,93.6,62.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:93.5,scaleX:1,scaleY:1,skewX:8.8,skewY:11,x:102.3,y:123},4,cjs.Ease.get(-1)).to({regY:62.5,rotation:16,skewX:0,skewY:0,x:98.9,y:114.7},5,cjs.Ease.get(1)).to({regY:62.6,rotation:0,skewX:9.5,skewY:11.5,x:101.9,y:122.2},5,cjs.Ease.get(-1)).to({regX:93.6,scaleX:1,scaleY:1,skewX:3.2,skewY:7,x:104.9,y:129.6},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.5,0,428.6,203.4);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(95,147,1,1,0,0,0,95,147);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.7,x:95.1,y:147.1},2).to({rotation:0,x:95,y:147},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,294);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(68.5,44,1,1,0,0,0,68.5,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.08,x:66.6},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:68.5},20,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,88);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(68.5,79,1,1,0,0,0,68.5,79);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.96,skewY:-4.3,x:71.5,y:83.7},9,cjs.Ease.get(-1)).to({regX:68.6,scaleX:0.92,skewY:-9,x:74.7,y:89},10,cjs.Ease.get(1)).to({regX:68.7,scaleX:0.96,skewY:-4.5,x:71.7,y:84},10,cjs.Ease.get(-1)).to({regX:68.5,scaleX:1,skewY:0,x:68.5,y:79},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,158);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(400,200,1,1,0,0,0,400,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,800,400), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(400,200,1,1,1.7,0,0,400,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0.3,x:400.1,y:200.1},29,cjs.Ease.get(-1)).to({rotation:-1.2},30,cjs.Ease.get(1)).to({regX:400.1,rotation:0.3,x:400.2},30,cjs.Ease.get(-1)).to({regX:400,rotation:1.7,x:400,y:200},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,-12,811.8,424);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bra.png
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(208.4,219,1,1,0,0,0,68.5,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:44.1,rotation:-2.1,x:206.8,y:217.1},12,cjs.Ease.get(-1)).to({regY:44,rotation:-4.5,x:205.1,y:214.9},12,cjs.Ease.get(1)).to({regY:44.1,rotation:-2,x:206.8,y:217.1},13,cjs.Ease.get(-1)).to({regY:44,rotation:0,x:208.4,y:219},12,cjs.Ease.get(1)).wait(1));

	// skirt.png
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(146.4,374.6,1,1,0,0,0,129,64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.99,scaleY:1.01,skewX:-8.5,skewY:-3.1,x:156.9,y:373.9},12,cjs.Ease.get(-1)).to({regX:129.1,scaleX:0.97,scaleY:1.02,skewX:-17.3,skewY:-6.5,x:167.4,y:373.2},12,cjs.Ease.get(1)).to({scaleX:0.99,scaleY:1.01,skewX:-8.3,skewY:-3,x:156.5,y:374},13,cjs.Ease.get(-1)).to({regX:129,scaleX:1,scaleY:1,skewX:0,skewY:0,x:146.4,y:374.6},12,cjs.Ease.get(1)).wait(1));

	// shold.png
	this.instance_2 = new lib.Символ9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(270.5,240,1,1,0,0,0,28,74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:28.1,rotation:-5,x:272.4,y:235},12,cjs.Ease.get(-1)).to({regX:28.2,regY:74.6,rotation:-10.2,x:274.1,y:229.9},12,cjs.Ease.get(1)).to({regX:28.3,rotation:-4.8,x:272.4,y:235.2},13,cjs.Ease.get(-1)).to({regX:28,regY:74.5,rotation:0,x:270.5,y:240},12,cjs.Ease.get(1)).wait(1));

	// hleft.png
	this.instance_3 = new lib.Символ10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(68.5,239.7,1,1,0,0,0,68.5,79);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-2.1,x:68,y:243.2},12,cjs.Ease.get(-1)).to({rotation:-4.5,x:67.3,y:246.4},12,cjs.Ease.get(1)).to({rotation:-2,x:68,y:243},13,cjs.Ease.get(-1)).to({rotation:0,x:68.5,y:239.7},12,cjs.Ease.get(1)).wait(1));

	// headgirl.png
	this.instance_4 = new lib.Символ11();
	this.instance_4.parent = this;
	this.instance_4.setTransform(193.2,67,1,1,0,0,0,94.5,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:0.5,x:188.2,y:67.7},12,cjs.Ease.get(-1)).to({rotation:1,x:183.2,y:68.1},12,cjs.Ease.get(1)).to({regX:94.6,rotation:0.3,x:188.5,y:67.6},13,cjs.Ease.get(-1)).to({regX:94.5,rotation:0,x:193.2,y:67},12,cjs.Ease.get(1)).wait(1));

	// gun.png
	this.instance_5 = new lib.Символ12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(353.6,213.5,1,1,0,0,0,27.5,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,skewX:12.3,skewY:8.5,x:365.8,y:215.3},12,cjs.Ease.get(-1)).to({regX:27.6,regY:61.1,scaleX:1.01,scaleY:1,skewX:24.8,skewY:17.1,x:378.2,y:217.1},12,cjs.Ease.get(1)).to({regY:61.2,scaleX:1,scaleY:1,skewX:11.8,skewY:8.1,x:365.4,y:215.3},13,cjs.Ease.get(-1)).to({regX:27.5,regY:61,scaleX:1,scaleY:1,skewX:0,skewY:0,x:353.6,y:213.5},12,cjs.Ease.get(1)).wait(1));

	// bodygirl.png
	this.instance_6 = new lib.Символ14();
	this.instance_6.parent = this;
	this.instance_6.setTransform(141,222,1,1,0,0,0,141,120);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-2.1,x:139.7,y:222.7},12,cjs.Ease.get(-1)).to({rotation:-4.5,x:138.3,y:223.2},12,cjs.Ease.get(1)).to({regX:140.9,rotation:-2,x:139.8,y:222.7},13,cjs.Ease.get(-1)).to({regX:141,rotation:0,x:141,y:222},12,cjs.Ease.get(1)).wait(1));

	// arm.png
	this.instance_7 = new lib.Символ15();
	this.instance_7.parent = this;
	this.instance_7.setTransform(297.6,284.5,1,1,0,0,0,44.5,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:30.1,scaleY:1.02,skewX:-4.3,skewY:4,x:304.1,y:278.9},12,cjs.Ease.get(-1)).to({regX:44.6,regY:30.2,scaleY:1.04,skewX:-8.5,skewY:8.1,x:310.3,y:273},12,cjs.Ease.get(1)).to({scaleY:1.02,skewX:-4,skewY:3.8,x:303.8,y:279},13,cjs.Ease.get(-1)).to({regX:44.5,regY:30,scaleY:1,skewX:0,skewY:0,x:297.6,y:284.5},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-16,381.1,455.1);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sword.png
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(218.5,89,1,1,0,0,0,218.5,89);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.3,x:221.4,y:94.7},9,cjs.Ease.get(-1)).to({rotation:5.2,x:224.7,y:101},10,cjs.Ease.get(1)).to({regY:88.9,rotation:2.5,x:221.6,y:95},10,cjs.Ease.get(-1)).to({regY:89,rotation:0,x:218.5,y:89},10,cjs.Ease.get(1)).wait(1));

	// headpir.png
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(247.9,220.2,1,1,0,0,0,95,147);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:2.3,x:245.2,y:226.8},9,cjs.Ease.get(-1)).to({regY:147.1,rotation:5.2,x:242,y:234.3},10,cjs.Ease.get(1)).to({regX:95.2,rotation:2.5,x:245.1,y:227.3},10,cjs.Ease.get(-1)).to({regX:95,regY:147,rotation:0,x:247.9,y:220.2},10,cjs.Ease.get(1)).wait(1));

	// body.png
	this.instance_2 = new lib.Символ21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(273,253.5,1,1,0,0,0,183,126.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:2.3,x:268.8,y:261.2},9,cjs.Ease.get(-1)).to({rotation:5.2,x:264,y:269.7},10,cjs.Ease.get(1)).to({regX:183.1,rotation:2.5,x:268.7,y:261.6},10,cjs.Ease.get(-1)).to({regX:183,rotation:0,x:273,y:253.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.5,0,447.6,380);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_222 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_297 = function() {
		this.gotoAndPlay(240);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(222).call(this.frame_222).wait(75).call(this.frame_297).wait(13));

	// anchor.png
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(405.5,197.9,1,1,0,0,0,331.5,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:42.5},9,cjs.Ease.get(1)).to({y:64.7},3,cjs.Ease.get(1)).wait(51).to({y:42.5},3,cjs.Ease.get(1)).to({y:175.7},8,cjs.Ease.get(-1)).to({_off:true},1).wait(235));

	// popad.png
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(411.6,196.8,1,1,0,0,0,328,48);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74).to({_off:false},0).to({y:41.4},9,cjs.Ease.get(1)).to({y:63.6},3,cjs.Ease.get(1)).wait(51).to({y:41.4},3,cjs.Ease.get(1)).to({y:174.6},8,cjs.Ease.get(-1)).to({_off:true},1).wait(74).to({_off:false,y:196.8},0).to({y:41.4},9,cjs.Ease.get(1)).to({y:63.6},3,cjs.Ease.get(1)).wait(9).to({y:54.8},2).to({y:68},2).to({y:59.2},2).to({y:70.2},2).to({y:63.6},2).wait(17).to({y:54.8},2).to({y:68},2).to({y:59.2},2).to({y:70.2},2).to({y:63.6},2).wait(17).to({y:41.4},3,cjs.Ease.get(1)).to({y:174.6},8,cjs.Ease.get(-1)).wait(1));

	// getbonus.png
	this.instance_2 = new lib.Символ26();
	this.instance_2.parent = this;
	this.instance_2.setTransform(412.1,196.8,1.048,1.048,0,0,0,401,34.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(148).to({_off:false},0).to({y:41.4},9,cjs.Ease.get(1)).to({y:63.6},3,cjs.Ease.get(1)).wait(51).to({y:41.4},3,cjs.Ease.get(1)).to({y:174.6},8,cjs.Ease.get(-1)).to({_off:true},1).wait(87));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(74,160.4,663,75);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(25.5,15,1,1,0,0,0,25.5,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(0,0,51,30), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(146,184.7,0.781,0.781,0,0,0,187,220.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:220.6,x:146.1,y:189.3},13,cjs.Ease.get(-1)).to({regY:220.5,x:146,y:194.7},16,cjs.Ease.get(1)).to({regY:220.6,x:146.1,y:189.7},23,cjs.Ease.get(-1)).to({regY:220.5,x:146,y:184.7},22,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,297.5,355.3);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(45.5,44.5,1.152,1.152,0,0,0,39.5,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-54,y:-25.7},9,cjs.Ease.get(-1)).to({x:-164.5,y:-103.6},10,cjs.Ease.get(1)).to({regY:38.5,x:-75.7,y:-89.2},12,cjs.Ease.get(-1)).to({regY:38.6,x:20.5,y:-73.5},13,cjs.Ease.get(1)).to({regY:38.5,x:-62.6,y:-16.8},10,cjs.Ease.get(-1)).to({regY:38.6,x:-162.5,y:51.5},12,cjs.Ease.get(1)).to({x:-58.5,y:48},9,cjs.Ease.get(-1)).to({x:45.5,y:44.5},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,-2.3,95.6,93.3);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(39.5,38.5,0.545,0.545,0,0,0,72.4,70.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},78).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,83,81);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(-20.4,-18.5,1,1,0,0,0,39.5,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-61.9,-59,83,81), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(180.4,392.9,0.879,0.879,-13.7,0,0,228,190.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({regY:190.2,scaleX:0.78,scaleY:0.78,x:-178.6,y:251},10,cjs.Ease.get(1)).wait(15).to({y:539},10,cjs.Ease.get(-1)).wait(115).to({regX:227.9,regY:190.1,rotation:-59.9,x:132.3,y:183},0).to({rotation:-59.9,x:-135.7},12,cjs.Ease.get(1)).wait(18).to({x:131.3},10,cjs.Ease.get(-1)).wait(130).to({regX:227.8,rotation:-170.7,x:-226.6,y:-131.9},0).to({regX:227.9,regY:189.9,scaleX:0.68,scaleY:0.68,x:-210.7,y:115.2},10,cjs.Ease.get(1)).wait(15).to({y:-134.8},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,186.9,456.7,396.9);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 39
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(64.5,81,1,1,0,0,0,25.5,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360,y:-148},14,cjs.Ease.get(0.99)).to({rotation:720,y:81},15,cjs.Ease.get(-1)).wait(1));

	// Символ 39
	this.instance_1 = new lib.Символ39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-200.5,-149.4,0.998,0.998,-75.5,0,0,25.5,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-193.7,y:34},9).wait(1).to({rotation:-360},0).to({rotation:224.2,y:-195},14,cjs.Ease.get(0.99)).to({scaleX:1,scaleY:1,rotation:657.8,y:-169.6},5,cjs.Ease.get(-1)).wait(1));

	// Символ 39
	this.instance_2 = new lib.Символ39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-64.6,-85.2,0.997,0.997,-55.2,0,0,25.6,14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:25.5,regY:15,scaleX:1,scaleY:1,rotation:-95.5,x:-64.4,y:37},5).wait(1).to({rotation:0,x:-64.5},0).to({regX:25.6,regY:15.1,rotation:-537.5,x:-64.6,y:-192.1},14,cjs.Ease.get(0.99)).to({regX:25.5,regY:15,scaleX:1,scaleY:1,rotation:-1127.2,x:-64.5,y:-109.5},9,cjs.Ease.get(-1)).wait(1));

	// Символ 38
	this.instance_3 = new lib.Символ38();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-54.5,-143.3,0.997,0.997,67.2,0,0,19.4,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:19.6,regY:22.5,scaleX:1,scaleY:1,rotation:123.6,x:-54.6,y:68.6},13).wait(1).to({regX:19.5,rotation:0,x:-54.5,y:68.5},0).to({rotation:420.7,y:-160.5},14,cjs.Ease.get(0.99)).to({regX:19.4,regY:22.6,scaleX:1,scaleY:1,rotation:782.7,y:-159.6},1,cjs.Ease.get(-1)).wait(1));

	// Символ 38
	this.instance_4 = new lib.Символ38();
	this.instance_4.parent = this;
	this.instance_4.setTransform(109.7,-152,0.999,0.999,-102.5,0,0,19.5,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:19.4,scaleX:1,scaleY:1,rotation:-187.5,x:109.6,y:-187.6},5).to({regY:22.5,rotation:-867.6,y:41.5},15,cjs.Ease.get(-1)).wait(1).to({regX:19.5,rotation:-720},0).to({rotation:-1165.7,y:-144.9},8,cjs.Ease.get(0.99)).wait(1));

	// Символ 38
	this.instance_5 = new lib.Символ38();
	this.instance_5.parent = this;
	this.instance_5.setTransform(19.5,-141.7,1,1,-86.7,0,0,19.4,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:19.5,regY:22.5,rotation:-100,y:41.5},9).wait(1).to({rotation:0},0).to({regX:19.4,regY:22.4,rotation:-398.2,x:19.4,y:-187.5},14,cjs.Ease.get(0.99)).to({regX:19.5,rotation:-805.2,y:-162.2},5,cjs.Ease.get(-1)).wait(1));

	// Символ 38
	this.instance_6 = new lib.Символ38();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-131.7,-13.6,0.997,0.997,125.9,0,0,19.5,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:19.6,regY:22.6,scaleX:1,scaleY:1,rotation:106.3,x:-131.6,y:41.6},2).wait(1).to({regX:19.5,regY:22.5,rotation:0,x:-131.5,y:41.5},0).to({regY:22.6,rotation:-171.8,x:-131.4,y:-187.6},14,cjs.Ease.get(0.99)).to({regX:19.6,scaleX:1,scaleY:1,rotation:-224.2,x:-131.6,y:-40.9},12,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-221.4,-177.7,357.2,273.8);


(lib.Символ47 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(253.5,228.8,1,1,0,0,0,32,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:51.1,scaleX:1.12,scaleY:1.12,x:223.6,y:231.2},9,cjs.Ease.get(-1)).to({regY:51,scaleX:1.24,scaleY:1.24,x:190.5,y:233.8},10,cjs.Ease.get(1)).to({scaleX:1.12,scaleY:1.12,x:222,y:231.3},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:253.5,y:228.8},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,357.2,273.8);


(lib.Символ44 = function(mode,startPosition,loop) {
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

	// Слой 2
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(-116.5,412,1,1,0,0,0,113.5,92);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-24.1,y:356.6},9,cjs.Ease.get(-1)).to({x:78.5,y:295},10,cjs.Ease.get(1)).to({x:-19,y:353.5},10,cjs.Ease.get(-1)).to({x:-116.5,y:412},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(148.8,177.7,1,1,0,0,0,148.8,177.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-9.9},9,cjs.Ease.get(-1)).to({x:-186.3},10,cjs.Ease.get(1)).to({x:-18.7},10,cjs.Ease.get(-1)).to({x:148.8},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230,0,527.6,504);


// stage content:
(lib.byxta600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.pric.alpha=0;
		
		
		this.cursor = "none";
		this.pric.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pric.x = stage.mouseX/window.devicePixelRatio;
			this.pric.y = stage.mouseY/window.devicePixelRatio;
			
		}
		
		
		//-----
		
		stage.canvas.addEventListener("mouseover", fl_Clickover3.bind(this));
		
		function fl_Clickover3()
		{
		
			this.pric.alpha=1;
			this.pric2.alpha=0;
			this.tek.gotoAndPlay(224);
			this.girl.gotoAndPlay(2);
			this.coins.gotoAndPlay(2);
			
			
		
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout3.bind(this));
		
		function fl_Clickout3()
		{
		
			this.pric.alpha=0;
			this.pric2.alpha=1;
			this.tek.gotoAndPlay(299);
			this.girl.gotoAndPlay(21);
			this.coins.gotoAndPlay(21);
		
		}
		
		
		//----
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.tek = new lib.Символ2();
	this.tek.parent = this;
	this.tek.setTransform(295.9,255.5,0.675,0.675,0,0,0,401,55.5);

	this.timeline.addTween(cjs.Tween.get(this.tek).wait(1));

	// Слой 7
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(496,-70.5,1,1,0,0,0,13.8,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 33
	this.pric2 = new lib.Символ33();
	this.pric2.parent = this;
	this.pric2.setTransform(527.7,225.5,1,1,0,0,0,45.5,44.4);

	this.timeline.addTween(cjs.Tween.get(this.pric2).wait(1));

	// Символ 28
	this.pric = new lib.Символ28();
	this.pric.parent = this;
	this.pric.setTransform(118.4,498.4,1,1,0,0,0,-18.6,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// Символ 3
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(911.9,175,1,1,0,0,0,234.3,209.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 5
	this.coins = new lib.Символ47();
	this.coins.parent = this;
	this.coins.setTransform(407.2,222,1,1,0,0,0,178.6,136.8);

	this.timeline.addTween(cjs.Tween.get(this.coins).wait(1));

	// Символ 4
	this.girl = new lib.Символ44();
	this.girl.parent = this;
	this.girl.setTransform(129.8,167.6,1,1,0,0,0,148.8,177.7);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Символ 1
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(316,138.1,1,1,0,0,0,400,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50.9,76.1,1341.3,622.8);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/anchor.png?1479291993491", id:"anchor"},
		{src:"images/arm.png?1479291993491", id:"arm"},
		{src:"images/backgr.jpg?1479291993491", id:"backgr"},
		{src:"images/body.png?1479291993491", id:"body"},
		{src:"images/bodygirl.png?1479291993491", id:"bodygirl"},
		{src:"images/bra.png?1479291993491", id:"bra"},
		{src:"images/chip.png?1479291993491", id:"chip"},
		{src:"images/coin.png?1479291993491", id:"coin"},
		{src:"images/getbonus.png?1479291993491", id:"getbonus"},
		{src:"images/gun.png?1479291993491", id:"gun"},
		{src:"images/handpir.png?1479291993491", id:"handpir"},
		{src:"images/headgirl.png?1479291993491", id:"headgirl"},
		{src:"images/headpir.png?1479291993491", id:"headpir"},
		{src:"images/hleft.png?1479291993491", id:"hleft"},
		{src:"images/pistol.png?1479291993491", id:"pistol"},
		{src:"images/popad.png?1479291993491", id:"popad"},
		{src:"images/shold.png?1479291993491", id:"shold"},
		{src:"images/skirt.png?1479291993491", id:"skirt"},
		{src:"images/sword.png?1479291993491", id:"sword"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;