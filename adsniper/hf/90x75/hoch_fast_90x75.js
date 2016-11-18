(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.actia = function() {
	this.initialize(img.actia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,50);


(lib.gol_kr = function() {
	this.initialize(img.gol_kr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,42);


(lib.hoch_la = function() {
	this.initialize(img.hoch_la);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,12);


(lib.ili = function() {
	this.initialize(img.ili);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,8);


(lib.koddd = function() {
	this.initialize(img.koddd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,47);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,25);


(lib.one_for_30 = function() {
	this.initialize(img.one_for_30);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,38);


(lib.plasha = function() {
	this.initialize(img.plasha);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,19);


(lib.put10 = function() {
	this.initialize(img.put10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,37);


(lib.sin_kr = function() {
	this.initialize(img.sin_kr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,42);


(lib.txt_otdih = function() {
	this.initialize(img.txt_otdih);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,13);


(lib.v_krugah = function() {
	this.initialize(img.v_krugah);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,37);


(lib.vmestes_hoho = function() {
	this.initialize(img.vmestes_hoho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,21);


(lib.win = function() {
	this.initialize(img.win);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,12);


(lib.zel_krug = function() {
	this.initialize(img.zel_krug);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,57);// helper functions:

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


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,207,66,0)","#FFF53C","rgba(255,250,49,0)"],[0,0.482,1],-5.5,0,5.6,0).s().p("AhOGuIAAtbICdAAIAANbg");
	this.shape.setTransform(7.9,43);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,15.8,86), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.actia();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,84,50), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ili();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,20,8), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.win();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,60,12), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zel_krug();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,59,57), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gol_kr();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,42,42), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sin_kr();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,42,42), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,33.1).s().p("AjkDlQhfhfAAiGQAAiFBfhfQBfhfCFAAQCGAABfBfQBfBfAACFQAACGhfBfQhfBfiGAAQiFAAhfhfg");
	this.shape.setTransform(32.4,32.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,64.8,64.8), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Am8lxIN5AAIAALjIt5AAg");
	this.shape.setTransform(44.5,37);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-1,-1,91,76), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0054A6").s().p("AnQGGIAAsLIOhAAIAAMLg");
	this.shape.setTransform(46.5,39);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,93,78), null);


(lib.vmestes_hoho_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vmestes_hoho();
	this.instance.parent = this;
	this.instance.setTransform(-37,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.vmestes_hoho_1, new cjs.Rectangle(-37,-10.5,74,21), null);


(lib.v_krugah_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v_krugah();
	this.instance.parent = this;
	this.instance.setTransform(-23.5,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.v_krugah_1, new cjs.Rectangle(-23.5,-18.5,47,37), null);


(lib.txt_otdih_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.txt_otdih();
	this.instance.parent = this;
	this.instance.setTransform(-39,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_otdih_1, new cjs.Rectangle(-39,-6.5,78,13), null);


(lib.plasha_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plasha();
	this.instance.parent = this;
	this.instance.setTransform(-44.5,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.plasha_1, new cjs.Rectangle(-44.5,-9.5,89,19), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-23.5,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-23.5,-12.5,47,25), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(7.9,43,1,1,0,0,0,7.9,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:115.7},31).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.8,86);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plasha_1();
	this.instance.parent = this;
	this.instance.setTransform(44.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,89,19), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhJBtQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIACgIQADgJgHgVIgMglQgEgMgDgFIgDgFIACAXIABAIIAAASIgBAHQgCAEgEgBQAAADgDABIgFABIgKAAIgFgBQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAgHQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBIgBgUIgCgCIAAgLIgJAAIgKABIgCAAIABAeQABADgBADIgBABIAAABIgBABQgCACgEABIgHAAIgDAEQgDACgCgCQgCgBAAgEIgBgGQABgDgBgDIgBgEIgDgtIABgEQAAAAAAgBQABgBAAAAQABAAAAgBQABAAABAAQABAAgBAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIABAAIALAAIAJAAIAGABIAEgBIAPABIATgCQAEgBACACIACACQACgCAFAAIARgBIAFABIABACIADACIAIALIAFADIACgJIACgEQABgCAGAAQAMAAADgBIAEgBIAFgBIAKAAIAIABIAFgBQAMgCAYABQAFAAACACIACADIABAIIgBAHQgDAEgHACIgLABIABAMIAAAaQAAAFgCACQgCACgEAAIgHAAIgGACQgFABgCgCQgBgDAAgEIgFgrIgKAAQAAADgHANIgRArIgGAMQgEAGgGABIgGACIgEAFQgBADgDABIgBAAIgDgCgAD0BMQgGAAgDgCIgEgEIgDgCIgEgEIgJgQQgEgLABgUIABgHIAFgFQAJgGAHgDQAHgDAJAAQAIABADABIARAJQAPALgBARIgCANIgDAJIgDAGIgDAEQgFAKgFABIgHABgAEwBIQgEgDAAgKIAAgTIgBgYIgBgEIgCgEQgCgDABgFQACgCAEgCIAJgBIAHgBQAEgCADABQAAAAABAAQABAAAAAAQAAAAABABQAAAAABAAQACACAAAEIAAAFQAAAEAEAFIAFgIQACgEADgCQADgCANgBIALAAQAEAAACABQABABABAEQABAIgHAPQgBADgCABIgDADQgBADACADQABAFADAEIAHAHQAEAEAAAFQgBAIgJACIgOAAQgGAAgCgBIgJgIQgDgEgGgBQgCAIgDADIgIACIgIACQgFAAgDgDgAChBKQgEgBgDgCIgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAIgEglIAAgEIgBgCQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAgFIgDgMIgBgCQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBIACAAQAAAAABAAQABAAAAgBQABAAAAAAQABABAAAAIADgBIAngFIAIABQACACADADIAEAFIACAIQAAAKgEAFQAEACADAFQAGAIgCAHIgDAIIgDAFQgDAEgHACIgPAFIgJABgAkzA6IgGgIIgCgIIgFgPQgEgPACgMQAEgQAJgKQAGgFAFgBIAFAAIAEgBQAFgDAIAAIANABQAPAEAKAOQAJANABAPIAAANQgBAIgCAGIgHAOIgFAIQgEAIgDACIgIACIgJABIgGABQgUAAgOgQgAkbAAIgCAFIgCARIAAAIIABAHIADAEQACACADgCIAEgEQAHgGACgDQAEgEgBgHIgEgLQgDgHgEgCIgEgBQgEAAgCAEgAlnBHQgBgCABgEIAAgGIgCgEIABgIQABgEgBgDIgEgoIgEAFQgCACgEgBIgBAAIgCAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAgBQAAAAAAAAQAAgGACgCIAJgFIADgDIADgEIACgCIAAgBIACgEQACgEADACIABAAIABAAIAEgDQAGgDAEAFIAGgBQADAAACADQADACgDAEIgCACIgBAEQAAANACALIAFAvQADAEgBACQgBAEgDABQgDACgFABIgOABIgFACIgFgBgABNBFIgHgBIgLgIIgGgOIgBgGQgCgLADgMQACgHAEgFQAFgFAKgCQAFgBAMAAQAKAAAFACIAGACIANASQACAEAAAFQAAADgDADIgFACIgIADQgQAEgDACQAEABAFgBQAIgCACABIAEAEQADAGgCAHIgBADIgEADQgGACgMAAgAAGgQQgDAAgCgCQgBgCABgJQAAgHgKgLIgFgGQABAKgEADIgFABIgKABQgFAAgCgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgBgNIgDABIABAHQAAAEgCADIgFACIgGABIgFACQgDAAgDgBQgBgCAAgFIAAgHIgDgbIgDgOQgCgGABgCQABgCAFgBIAIABIAJgCQAEABACAEIgBAJIAFAAQADgGABgGQABgGABAAQADgCADACIALADQAFACAEgBIAJgDQAEgCAEABQACABAEAGIAHANQADgIADgCQADgCAIgBQAHAAACACQADADgDAGIgDAHIgEAFIgEAHIgDAMIgGAhQgCAGgFADQgFACgEAAIgDAAgAAehZIgBABIAAABIAAABIgBACIADgCIABgCIACgCIgEAAgAhYgaIgDgBIgHgBQgFAAgCgDIAAgEIACgIQgIABgIgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBIgEABQABAJgDAEQgCACgDAAQgDAAgCgDIgFgBQgEAAgBgBQgCgCAAgEIAAgJIABgGIgCAEIgDAFIgIAIQgCABgEAAIgFAAIgDAAIgGACIgHABQgGAAgEgCIgLgIIgHgJIgBgDIgBgGIAAgFIACgDQACgGABgFIAAgFIAEgFIABgCIABgBIADgEQACgCADAAQAEgCAEgBIANAAIACgBIAEAAIAEACQANAKACADIAEALIABAEIAAAHIAAAMIAAAAIAAAAIACgDIAHgFIABgFIACgQIgBgHQgCgGACgCQABgDAFgBIAngCQADAAACACQABABgBAIIgBAIIABAVIABADIAGADQAGADABAHIgBANQgBAHgCACQgCACgEAAIgEgBgAjHhPQgDAEADAEQABACAFADQAHAFAHADIABAAIADgGQACgGgCgHQgCgHgHgDIgCgBQAAABABAAQAAAAAAABQABAAAAABQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQgBABgFgBIgEAAIgDAAgABggjQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgCgCAAgEQACgKgBgFIgCgFQgBgEABgCIABgBIAAgDIgBgEIgCgNIABgCIgBgBQgCgDACgCQABgCAEgBIALgDIAFgBQADABAAAGIAAAeIABgDIABgDIACgDIAGgHIACgDIACgEIABAAQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBIACgEQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAIAEgBIAGgCQAEAAABADQACADAAAHIAAAcIAAABIABAHIAAAJQAAAEgCACQgCADgHAAQgGgBgDgDQgBgDABgDIAAgDIAAgHIgBgBQABgKgBgLIgBABIgIAOIgGAIIABAEIABAMQgDADgFAAIgKABIgBABIgBAAgACsglIgEgBQgEgBgBgEIgBgHQAAgEACgBQACgCAEAAIAGABIAEABIAEAAQACABADgBIACgEQABgEgBgBIgIgBQgFAAgCgDIgCgEQgCgFABgCIADgDIAEAAIALAAIADgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgCgCQgFgCgFABIgIABQgFgBAAgDQAAgDADgDIAEgEIAFgBQALgBAGADIAHAGIADADQACAEgCAIIgEAHIADAEIABALIgCAGIgDAGQgDAHgEABIgFABg");
	mask.setTransform(39,10.4);

	// Слой 2
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(-15.3,11.6,1,1,0,0,0,7.9,43);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.put10();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,77,37), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AC2BWIgIgMIgDgKQgFgUAAgKQAAgFACgEIAGgNIAFgEIAFgHIAHgDIAFgDIAGgBQAFAAADABQAEABAFAEIANAJIACADQAJALgBAVQAAASgHALQgCAEgLAKIgHAGQgEABgFAAIgDAAQgNAAgIgIgADFAcQgEAGAAAHQAAADACAFQABAHAEAGQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQAIgJgCgMIgBgFIgDgFIgFgJQgEAAgDAGgABcBWIgIgMIgDgKQgFgUAAgKQAAgFACgEIAGgNIAFgEIAFgHIAHgDIAFgDIAGgBQAFAAADABQAEABAFAEIANAJIACADQAJALgBAVQAAASgHALQgCAEgLAKIgHAGQgEABgFAAIgDAAQgNAAgIgIgABrAcQgEAGAAAHQAAADACAFQABAHAEAGQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQAIgJgCgMIgBgFIgDgFIgFgJQgEAAgDAGgAgBBWIgHgMIgEgKQgFgUABgKQAAgFACgEIAGgNIAEgEIAEgHIAHgDIAFgDIAGgBQAFAAAEABQADABAFAEIANAJIADADQAIALgBAVQAAASgHALQgCAEgKAKIgHAGQgFABgFAAIgDAAQgNAAgHgIgAANAcQgEAGAAAHQAAADACAFQACAHADAGQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQAIgJgBgMIgBgFIgDgFIgGgJQgEAAgDAGgAhwBeIgGgBIgFgCQgLgEgEgFQgDgFgCgBIgEgCQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBIgFgEIgDAFIgEAFQgFAHgLAFQgKAFgGABIgOAAIgHAAQgGgBgHgDIgMgGQgDgDAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAEgCIADgEQAEgGAGAEIAFADIAFABQAMAAAGgFQAFgEgDgEIgEgDQgEgCgBgBIgIABIgCAAQgDACgDgCIgBAAQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAIAAAAIACgDIAFgDIABgCIADgEIACgGIADgIQgGADgLgBQgEAAgCgCIgBgFIgCgCIAAgDIAAgFIAAgDIADgEQABAAAAAAQABgBAAAAQABAAAAAAQABABAAAAIACgBIARABQASACASgBQAFAAABACQAEADgEADIgDACIgMASIgCAEIgDADIgBAAIALABQAGABAEADIAEADIAAAAIACgIIACgGIADgEIADgFIADgHQADgFAAgDIAGgDIAFgBIAFgBIAPgCQAJgBAEACQAFACAFAFIAJAKQADAFACAFIADALIAAAXIgFAOQgDAIgEAEQgEAEgJADIgGADIgIACIgBAAgAhxBPIAEgBIgFgCIgDgBIAEAEgAh6AZQgCABgBAIQAAANACAFIAFAJIACADIAEACQAGACAJAAQABgNgCgKQAAgGgCgEQgEgKgMgBIgGABgAhWgSIgBgEQgCgDABgCIgaABQgBAFgEADQgFADgEgFQgGABgCgDIgBgFIAAgQIACgFQACgCAHAAIAAgDIAAAAIgDgOIAAgNQgBgFADgDQADgCACADQADgCAEAAIAQAAIAEAAIAGAAIAEACIACAGIgBAYIABAFIAEADQAGAFAEALQADAGgBAEQgCAEgEACQgDABgFAAQgEgBgBgBgABqgXIgBgFIgBgUIABgXIABgKQAAAAAAgBQgBAAAAgBQAAAAABAAQAAgBAAAAQABgDAFgBIAFAAQACABAAAGIACAPIAEgIIACgHIACgDQADgDADACQABgFAFAAQAFAAABAEIAAAGIABAFIAAAHIAAAVIgBAGIgBADQACAAADACQADADgCACQgBAEgFAAIgHAAIgEABQgEAAgBgFIAAgIQABgFgCgMIgCAFIgFAPQgDAIgFABQABAEgDABIgDABQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAA1gXIgEgCIgCAAIgHgBIgDgEIAAgFIAAgIIAAgGIgBgCQgDADgCgBIgCgBIgEAAIgDAAIAAAMIgBAGQgBAEgFAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgEABgBgEIAAgEIgCgOIgBgDIgBgOIgBgDIgBgQIABgEIACgDIAGgBIACgCIACAAQADAAACACIACAHIABAIIAAAGIABADIAAABIACAAQAFgCAHAAIAAgSQABgDAEAAIABAAIABgBQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABIAGgBQADABABACIABAFIAAAyIgBAGQgBADgDAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAgAAvgoIAAADIAAABIAAAAIABgBIAAgDgACigZQgCgCAAgDIABgEQACgCAEAAIAKABIAHABIADgBQAFgBABgCIAAgCQABgCADgEIAAgCIgLgBIgDgBQgBAAAAgBQAAAAgBAAQAAgBAAgBQAAAAgBgBQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAMgIIAFgDQgEgBgDgCIgCgCIgCgBQgHAAgEACQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBgFAHgCQAGgDALAAQAEAAACACIADADIAEABIADADIACACIABACQABAFgBADQgCADgGADQAEACADAGIABAHIAAAHQgDAFgHADIgIAEIgEABIgRAAQgHAAgBgCgAgygYQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAIgBgGIgBgDIgBgDIAAgrQAAgEABgDQABgDAEgBIABAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAABIABAFIABACIACABQACABAAAFQABAHgBAHQACgBABgFIADgGIADgHIABgCIAEgEIACgCQADgCACADIADAEIACAFIABAIIgBAqQgCADgCAAIgEgCQgHABgDgBQgDgBAAgEQAAgDACgCIACgBIABgCIgBgPIgEAGQgFALgBAFIgBADIgEAGQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAgAivgYQgEAAgEgCIgHgEIgJgIIAAgFIAAgMQAAgGAEgHIAGgMQAEgFADAAIAEABIACgBIALgBQACgBADABQACABAEAEQAGAGABADIAAAJIAAAKQAAAGgCAEIgBABIgCAEIgEAEIgBADIgDAEIgDADgAirhJIAAACQgGAHAAAJIABAGIAEAHQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAIABgCQACgDADAAIACAAIABgCIACgIIgBgHIgCgFQgCgFgCAAIgDgCIgCACg");
	mask.setTransform(41.9,9);

	// Слой 2
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(-10,2.6,1,1,0,0,0,7.9,43);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.one_for_30();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,85,38), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmIDeQgBAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgDIgCgCQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAgBIgBglQAAgDACgDQACgEAGgCIAMgBIAKAAQAEABACAGIABACIADANQAAAEgCADIgEADIgIAFIgFAEQgEACgGgBIABAKIABAEQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQgBAFgCAAIgBABIgEgCgAmBCqQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAIAAAMQAFAAAAAFIADgCIADgEIAEgBQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIAAgEIgDgIgABfDIQgCgCAAgFIAAgNIAAgFIgDgEIgCgCIgDAAIgMABIgCAMIgCALIgDAEQgDABgDgCQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgBgxIAAgDIAEgCIABAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAIABAVQALgEAJACIADAAIAHAGIAFAHIAAAFIAAAQQAAADgBADQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAIgDgCgAD7DFQgHgGAAgOQAAgMAGgEQACgBAFAAIAJAAQAAAAABAAQAAAAABAAQAAgBAAAAQAAAAABgBQABgBgCgEQgDgDAAgCIAEgEQAEgCACABQAEABAAAHIAAAfQAAAJgCAEQgBAEgDABIgEABIgEABQgJAAgFgFgAD/CrIgBACIAAAFIAAAEQAAABAAABQAAAAAAABQABAAAAABQAAAAABABIAEAEIAEAAIADgBIACgCQABgDgBgDIgBgFIgCgFIgBgBIgBgBIgIAAgAjeDGQgBgBAAgFIgBgRIAAgDQgCgCgEABQgFACgCACIgBADIgBAMQABACgBADQgBADgEABQgDAAgCgDIgCgGIAAgWIABgGQADgDACABQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQAEAAAGgEIAFAAIAGABIAEAEIAEgEQADgDAJAAIAEABQADABAEAIIACADIACACIACAHIABAGIgBAGQAAAGgDAAQgCACgDgDQgCgCAAgEIABgFIgCgGIgHgLQgGgBgCAGIgBALIgCAEIABAFQgBAFgDABIgDABQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAgBgAGBDIIgIgEQgHgEgDgEQgEgGgBgKIgBgOQAAgHAEgBQAEAAACAEIABAHQgBARAIAHQACADADgBIADgCQAGgHgCgKIgBgIQAAgEADgDQAEgCAEADQADADgBAEIgBAGQAAADABAEIAEAPQABAGgCACQgDAEgEgEQgCgCgBgFQAAABgBAAQAAAAgBAAQAAABAAAAQgBABAAAAIgBAEQgCAEgEAAIgBgBgADeDFIgBgGIABgKIgBgEQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAgBQgEgCgCABQgGABgBAGIgBALQAAADgDAEQgDADgEgCQgBgBgDgFIgGgaQgBgEABgCIAEgCQADgBACABQACACAAAFQAAAGACACQABgFAFgEQAFgEAGABIAIADQAGAEACAEQACACAAAGIgBARQgCADgDAAQgCAAgCgDgABwDHIgCgFIgDgtIAAgGQACgEADABQADABABAEQACAHAAAOIACAUQABAIgBACQgBABAAABQAAAAgBABQAAAAgBAAQAAABgBAAIgBAAIgDgBgACWDGQgGAAgDgFIgBgHQABgJAHgEQAIgFAGAHQADgCAEABIAAgBQgBgCgEgDQgFgCgBgCIgCgDIgEABQgEACgCgFQgCgEAEgDQAGgEAGADIAHAHIAHAFQADADABADIABAGQAAAGgBACIAAADQAAAFgCADQgCADgFABIgJABIgKgBgACZC3IgBABIgBACQgBAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAIAMAAIADAAIACgCIgEgDQgBAAAAAAQgBAAAAAAQAAgBgBABQAAAAAAAAIgCAAIgCAAIgCAAIgBgBgAg5DEIgBgGIgBgWQgJgDgJAEIgFABIgBAAIABAEQACALgCAGQgBAEgCABQgDADgDgDIgBgFIgBgcIgBgKIgCgGQAAgFAEgCQADgCACABQAEACAAAIIAAALIADgCQAGgDAQACIAHACQADADAAAHIABAUIgBAGQgBAEgEAAQgDAAgBgDgAkmDCQgDgCgEgIQgDgGABgEIADgEIAAgEIADgEIAFgEQAEgCAEAAQAFAAACABIAFAFIAEAFQABAEgBAFQAAAHgCAEIgEAGQgEAEgDAAIgEABQgFAAgEgEgAkdCmIgDADIgCACIAAACIAAAHIAAACIACACIACADQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAgBIABgCIACgDIABgGQABgDgCgCQgCgEgCAAIgCAAgAAiDEIgLgBQgHgDgCgIQgBgHACgIQADgIAFgDIAKgBIAHAAQAFABACADQADAEgEACQgBABgEAAIgKAAIgEAAIgCAEIgBAIQABAEADACIAKAAIAEgBIAHgDQAFABgBAGQgBAEgEACIgJABgAlVC/IAAgHIgDgUQAAgHAEgBQAEgBACAFQAIgGAFAAQAIAAADAGQACAEgCADQgBAEgFgBQgEgCAAgDQgGAAgEAHQgCAFABAHQABAFgBADQgBAEgFAAQgDAAgBgFgAErDBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgEQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAABAAIAAACIABABQADAEgEADIgEABQgDAAgCgCgAh1DBIgBgEIABgFQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAAgBQADABADAEIABACQACAEgEACIgEABQgDAAgCgCgAFHDDQgBAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAgBIgBgEIAAgaIABgFIAIgCIAIgBQADABAEAFQADADABACQAAAGgFABQgFABgDgFIgCAOIgBAEIgBAGQgBAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAIgBAAgAgkC9QgEgDgBgDIABgGIAAgGIADgGQAEgGAFgCQAGgDAIADQAHACACAHQACADAAAGQAAAGgCAEQgEAIgKABIgCAAQgHAAgIgFgAgYCnIgDABIgCADQgCAEACAFIABACIAGABIAFAAIADgEIAAgJQAAgCgEgBIgEgBgAicDAQgKgCgEgFQgEgEACgFIABgDIACgFIADgFIAIgFIAGgBQAIAAAEACQAFADACAGQABAGgBAGQgDAJgGACQgDACgEAAIgHgBgAibCoIgEADQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAIABAEIAJADQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQADgBABgEIABgEQAAgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQgBgBgEAAIgEAAgAhNATQgEgCgBgDIgBgHIAAgeIgBgHIgBgEIgBgPIAAgFIABgEIADgDQACgCAEAAQAFAAACAEIADAAQAKgCAFABQAJABADAGIAGAIQACACAAAFIAAAGIgBAJIgDAEQgDAGgEADIgGADIgKADIgGgBIABALIgBAHQgCAEgEABIgEACIgDgBgAg+gnIgDAAIABAPIAFgBQADAAADgEQAFgFgFgEQgCgCgDAAIgEABgAGZAJQgHgEABgGIABgEIgBgHQAAgFAGgCQAGgDAEADQAEADABAKQAAAIgCADQgEAFgFAAIgEgBgAjgACIgGgOIgYAAQACAIgHAEQgDABgEgBQgEAAgCgCQgCgEAAgGIAAgPIABgHQABgEADgBIAEgBIADAAIAAgJQAAgGAEgEQAEgDAHAAIAMAAIAHgBQAEAAACABQAHACABAMQABAIgBAKIAAABQADADABAIIABADIABADIADALQgBAGgHACIgDAAQgFAAgDgFgAjyggIAIAAQABgFgBgDIgJgBIABAJgAmkADQgEgDABgIIABglIACgJIAAgHQAAgEACgCQACgDAGAAQAFgBAEABIAGACIAJACIAHABQAIABACACQADACABAFIgBAHQgBARACALQACAJgBAEQgDAEgEACQgEABgEgCQgDgCgCgGIgBgJIgBgaIgPgCIgBAHQgBAEABAEQAAAOgCAOIgBAFQgBAFgGABIgCAAQgEAAgCgEgAFOgDIgBgJIAAgKIgDgYIgBgJQADgGAFgBQAHAAADAEIACAIIABAJIAFgDIAEgFIACgCIABgEQAAgDADgDQAEgDAGABQAGACADAEIABAGIABAFQABAKgBAOQAAAGgBADQgDAGgGgBQgGAAgDgGIAAgNIgBAAIgEADIgBABIAAABIgEAGQgDADgBACIgBAGQgBAGgHABIgCAAQgGAAgCgFgAAJABIgKgCIAAAAQgDABgDgCQgEgCgCgIQgDgKAAgaQABgJACgCQACgDAEgBQAEAAACACQAEAEAAAJIAAADIABgBQALgFAKAHIAFADIAIAEIAEAFIADAEIAAAFQABAEgBADQgBAFgEADIgNAIIgLABgAAJgZIgFACIABADIACAAIAIABQAEABADgCIABgBIgGgEIgDgCQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAgABWgDIgCgFQgDgLAAgJIAAgOQgCgLAAgDQACgFAEgBQAFgCAEACQAFAEABALQACALgBAPQAFgBAKgBIAAgPIgDgJQAAgEAEgGQAEgFADAAQAFgCAFAEQADAEAAAJIAAAWIAKAAIAEgCIAAgDIABgIIgBgHIgCgFQgBgFAEgEQAEgDAEAAQADAAAEACQAEAEAAAKIABAKIgBAQQgDAJgHAEIgIACIgLAAIgIAAIgGACIgOABIgPADIgEAAQgGAAgDgEgAiagFQgDgEABgJQABgSgBgNQAAgJABgCQADgFAFAAQAGgBADAFQACAEAAAHIAAAGQAGgCAJgGQACgIAIgCQAJgBADAIQABAEgDAHIgDAGQgCADgFACIgFACIANAFQAFACACACQACAEAAADQABAJgHACQgFACgGgEIgJgFIgJgDIgGgDIAAABQAAAIgCADQgCAEgGABQgFAAgEgFgAlDgDIgFgBQgHgDgGgHIgDgFIgBgFIABgFIABgEIABgEIAAgHIACgFIAKgNQADgCAFgBIAOABQAKABAFAGIAFAKQADAIAAALIgBAJIgCAFIgEAFQgDAEgIACIgNABgAk/grIgCACQgDAFACADIAFAHIAAADIAIAAIACAAQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAgBIAAgGIgBgFIgCgFQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQgCABgEAAgAD0gDQgDAAgEgDIgGgEIgMgGQgGgBgDgEIAAAGQAAAEgBADQgDAEgFABQgFAAgDgDQgDgEAAgMQABgKgCgLIgBgKQACgGAHgBQAHgBADAGIACAIIAJgGIAFgEIAGgIQAFgEAGADQAGADgBAJQAAAKgLAGIgGAEIALAFIAJAFQAHAFgBAHQgCAJgHAAIgBAAgAA5gHQgEgDgBgKQgDgZAAgMQAAgEABgEQAEgHAHABQAHABABAHIABAHQgCARAEAPQACAKgBAEQgCAEgFABIgDABQgEAAgCgDgAEUgGQgHgBgFgEIgDgEQgCgCAAgFIgBgOIABgMQABgDAGgKIADgEQADgCAIAAIAIAAIAMADQADAAADADIAIAKIACAHQAAALgDAHQgEALgJAGIgEADIgGABIgOgBgAEYgsIgCADIAAAFIAAAFQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQACABAFAAIACAAIACgCQACgDACgHIAAgFIgEgDIgIgBIgCAAgAFohHIgJgEQgFgDAAgFIACgEIADgEQABgCAFAAIANADIAFADQADADAAAEIgCAFQgCADgFABIgDABIgGgBgAiVhkQgEgBgCgDQgDgDAAgFIABgJIgCgHQgBgJADgEIAEgDIAGgBIgDgQIAAgIQAAgFADgDIAGgDIAEgCIAEAAIAEgCIAFgBIAPABIAHgBQAFAAADAFIABADIACADIABAEQACAQgBALIgBADQACABABAEIADAJQAEAJgDAGQgCAEgGABQgFABgDgEIgDgGQgCgHgDgBIgEgBIgHABQgMABgHgCIAAALQAAAHgEAEQgDADgEAAIgBgBgAiAiiIgCABIAAABIAEAQIAAABIANgCIADAAQACgHgBgKIgLgCIgBAAIgHACgAFWhmQgDgDgBgGQgCgIAAgJQAAgEACgDQABgFAFgBIAEgBIAAgIIAAgFIgCgEIgBgGQAAgHADgDIAEgDQAKgEAEAAIAMABIAHABQAGAAAEACQAFABACAFQACADAAAJIAAAPIAAACIAAAAQADACACACIACAKIAAANQAAAIgFACQgEADgFgDQgEgBgBgGIgCgKIggAAIABANQgBAFgCACQgDADgEAAQgEAAgDgCgAFwiPIAQgBIAAgQIgQgBQABAJgBAJgAD0hsQgEAAgDgDIgFgHQgGgHgGgDIgLgHIAAgBIAAAFQAAAJgDAEQgGAGgIgGQgCgBgCgDIAAgFIAAgNIAAgFIgBgDIgBgGIAAgSIABgFQABgGAGgBQAGgCAEAFQADAEAAAIIgBAFIAEgCIAHgDQAFgBABgCIABgDIADgGIACgCIACgDQAFgGAHADQAEADABAEQACAEgCAFIgDAHIgMANIgHADIgBAAIADACIATAPIAGAGQABAFAAAEQgBAEgCADQgDADgDAAIgBAAgAEUhyQgFgDgIgLIgEgGIgBgIQAAgEACgCIADgFIAAgIQAAgGAFgEQAEgEAHgDIAGgDQAOgEAMAGIAEADIAEADIADAFIABAGIACAFIABAHQAAARgKAJIgMAJIgJAFIgGABQgGAAgHgFgAEfifIgEACIAAAEQAAAHgBAJIAHAHIAKgHQAGgEAAgFIAAgIQgBgEgCgCQgCgCgGAAgABoh0IgLgDIgIgEQgFgEgCgDQgCgEAAgJIAAgCQgCgEABgEQABgDABgBIABgBIAEgPIACgFIAEgFIAJgGQAGgDAFACQADABAHAHIAKALQAEAEACAFQACAFgCAGQgBAGgFACIgFACIgCABQgDABgEAAIgIAAIgEABIAAABIABAAIAFAAIAFACIAFABQAEABACACQADADAAAEQAAADgCAEQgCADgEABIgDAAQgFAAgHgDgABlijIgCAEIABAAIALgBIgIgIQgBABgBAEgAjnh3QgCgDAAgFIABgRIgBgIIgBgGIAAgSQAAgEADgCQADgDAFAAQAHAAADADQADADAAAGQABAHgBAHQAAAAABAAQABAAAAgBQABAAAAgBQAAAAABgBIAEgIQACgGAEgEQAEgFAGABIAFABQAIABACABQADADAAAJIAAATIgBAFQgBAGABALQAAAGgDADQgEAFgGgCQgGgCgBgGIgBgDIgBgBQgEgBAAgHIAAgGIgGAEIgHAMQgFALgGACIgDAAQgGAAgDgGgAkkhzIgGgEQgGgGgCgFQgCgFABgHQAAgEABgCIAHgFIAHgFIAIgDIAHgCQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgDgBQgHABgFgCQgIgFABgHQABgFAEgCQACgDAGABIAEACQAEABAJAAIAIAGIAFAGQAEAFADAJIACALIABAKIgCAJIgEAEIgKAHQgEACgQAAIgEABIgFgBgAkUiNIgEABIgCAAIgCACIgCADIAKAAIAEAAIACgCIADgFIgBAAIgIABgAmRh7IgCgGIgCgmIAAgfIABgFIADgDQADgCAFAAQAFABABAEIACAFIABAQIAAAHIABAEIAAABIAGgBIAfAAIABAAIABgDIAAgFIACgGIABgGQgBgIACgDQABgEAFgCQAFgBAEADQADADABAIIAAAMIABAFIAAArQAAAIgCADQgEAEgGgBQgGAAgDgEQgCgEABgGIAAgJIgBgDQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgJgBIgXAAIgFgBIABASQAAAHgDAEQgDAEgFAAQgFAAgDgFgAg5h4QgEgBgBgDQgCgCAAgKIgBgMQgBgMACgIIABgGQACgGAFAAQAGgBADAEQAEAEgBAIQAEgCAGgIIAIgIIAGgEQAHgCAEAFIACAEQADAIAAARIAAAUIABAEQAAAFgCADQgDADgFAAIgGgCIgEgFIgBgFIAAgVIgBAAQgKAHgGAIIgBADIgBAEQAAAEgBADQgDAFgFAAIgFgBgAAXh7QgEgEABgNIgBgXIAAgCIgKAAQgEABgEgBQgFgEAAgGQABgIAFgBIAPgBIABgBIAXAAIAGABIAIACIAGADQADADAAAEQAAAFgFAEIgGABQgDABgDgBIgEgCIgDAAIgBAAIAAAAIACAeIgBAIQgBAFgGACIgDABQgEAAgDgEgAjPi/IgKgGIgIgEQgCgCAAgGIABgHQAEgHAIADQAEACAHAGQAFgGAEgCQAGgEAGACQAFADAAAGQABADgDAEIgGAFIgHAIQgEAEgFAAIgGgCg");
	mask.setTransform(42,22.4);

	// Слой 2
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(-15.3,11.6,1,1,0,0,0,7.9,43);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.koddd();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,85,47), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjKA3QgDgDAAgKQAAgKAEgDQADgDAHABQAEgRgCgNQgBgMACgDQACgDAGgCIAMgDQAKgDAKABQAIABADACQADADADAFIACAKIAAAMQAAAIACAFQACAHAGAGIAEAFQAEAHgHAGQgDACgEAAQgLACgHgEIgGgEQgDgBgIAAIgLgBIgEAAIgCADQgCACgDABIgDABIgBACQgCAFgFABIgCABQgFAAgCgEgAimgFIgCABIgBADIABAWIAUAAIgBgIIABgNIgBgFIgCgCIgDgBQgGAAgGADgAAPAvQgEgDAAgFIACgEIADgHIAJgMIAIgJIgLgFQgIgCgCgHQgCgJAHgDIAGgBQAFAAACACIADACIACACQAIADAFAHQAAAAAAAAQABAAAAgBQAAAAAAAAQABgBAAgBIADgFIACgFQAEgHAGABQAHAAADAHQACAGgFAKIgHAKIgBACIABACQAEAGADAHIABAGQABAEgDADQgDAEgFAAQgFABgEgGIgCgEQgDgFgDgDIgNAOIgDAFQgCACgEABIgCABQgEAAgDgDgAFSAoIgHgEIgFgHIgFgIIgBgKQAAgLADgDIAFgFQADgFACgBIAFgDIAFgEQADgBAEAAIALgBQAHgBAFACQAEACAHAFIAEAFIACAFQAFAJgCAHQgCAKgLADIgJABIgIACIAFABIAGgBQAIAAACAJQABAHgHAEQgDACgFAAIgBAAQgLAAgUgJgAFggBIgEABIgEAEIAHABIAFABQABABAAAAQABAAAAAAQABAAABAAQAAAAABgBIADgBIAIgBQAAgCgEgCIgDgCIgDgBgAhYAwQgGAAgCgBQgDgCgBgEIgCgFIgBgJQABgLgBgKQgDgKABgGQAAgHAEgDQACgCAFAAIAEABIAKADQACABACAHIABACIACABQAJABAFAFIAGAFIAEADQAEAFABAFIABAGQAAAGgCADQgBAGgFACIgGACIgFADIgGABIgHABIgFABIgEABIgEgBgAhTAaIABABIAFgBIAFAAQADAAACgCQABAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIgDgCIgFgGIgJgBgAlGAwIgOgCIgWgGQgLgDgFgDQgMgIgDgWQgCgXALgOIANgMIAKgGIAOgFQAGgCAIAAIAPABQAJAAADACIAEADIAGAHQAGAHABAFQABAEgBADIABAEIABgBQAKgCATAAIAtABQAHACABAGQAAAHgFADQgEACgEAAIgKABIAAADIABAFIgBAgIgDAFQgEAFgEAAQgEAAgFgDQgFgCgCgCIgBgFIABgFIADgEIABgGIAAgOIAAgEIgBgCIAAgBIgBAAQgFgBgCgCQgHgBgJACIgEAAIAAADQADAHgBADQgBADgCACIgCAIQgFAMgMAHQgLAGgLAAIgEAAgAlbgWQgEABgBABQAAABAAAAQAAABgBAAQAAABAAABQAAAAAAABQgCALAEALQABABAAABQAAAAABABQAAAAAAABQABAAAAAAIADABQAKADAHgBQAJgBAGgFIAHgIQACgBABgDIAAgBIgFgOIgGgCIgQgDIgCAAIgPACgAEZAsQgGgEABgLIACgfIgFAAQgIAAgEgBQgGgDgBgGIAAgEIADgFQAEgDAIABIAOABIACgBIACgBIAFgBIARAAIAFABQACAAADADQAEAEAAAFQAAAFgFADQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgDABgEgBIgEgCIgFAAIAAAGQgBALACAKIgBANQgCAHgFACIgFABQgCAAgDgCgAC1AuQgGgBgDgFIgBgHIABgRIABgEIAAgNIgEgHQgCgIAHgFQAFgDAFADIAEACQADADABAGIABAFIAAALIAKgQIAEgFIAEgEIAEgBIAGAAIAAABIAEgBQAFAAACADQAEAEAAAJIgBAcQAAAJgCADQgEAEgGgBQgEAAgDgEQgDgDAAgFIACgHIABgLIgNASIgCAEQgDAFgEAAIgDAGQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgEABIgCAAgAgQAsQgFgDgBgDIgBgFIABgiIgBgEIgCgEQgCgGAFgEIAIgEIAGgCIAAAAIAHACQABACABAFIAAAJIADAcIAAAIQAAAJgEADIgFADIgGACIgFgCgABqAsQgEgBgEgDIgFgFQgEgFgCgFQgDgGACgFIAGgLQAGgEAHABQgHgFABgIQAAgEADgCQADgDAEAAIAGABIAJAAQAFAAADACIAKAIIAFAGQADAEABAFIABAOQAAAGgCAEQgCAGgHAGQgCADgCAAIgHABIgPABIgJgBgABqAUIAFAEIACAAIAQAAIABgDIgQgCQgFAAgDABgADIggIgGgDIgJgCQgFgCgCgGQgCgGAFgDQADgDAGAAQAFABAFACIAEABIAGgDQAJgDAFAFQADACAAADQABAEgCADIgIAGQgIAGgDAAIgBAAIgGgCg");
	mask.setTransform(38.6,5.4);

	// Слой 2
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(-15.3,11.6,1,1,0,0,0,7.9,43);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.txt_otdih_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,78,13), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo_1();
	this.instance.parent = this;
	this.instance.setTransform(23.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.7,2.7,1,1,0,0,0,32.4,32.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-8.7,-29.7,64.8,64.8), null);


(lib.hoch_la_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkBA3IgCgGQgCgIAAgNIAAgXQgMAAgKACIgKABIAAAAQABASAAAJIgBAHQgCAEgGAEQgEAEgEAAQgDAAgEgCQgEgCAAgEQgBgCAAgDIAAgGIgDgRIgCgeIAAgeIABgGQABgEAGgCIAJgCIAHABQAEACABAGIABAKQAAAIABAQIAGABIAGgBIASAAIABgdIABgHQACgEAFgBIAJAAIAHgCQAFAAADADQADADgBAKQgDAbABA3QAAAFgCADQgCACgEACIgIAEQgGAAgDgDgAgrAtIgIgLQgCgFABgHIACgMIABgoIgBgEIgDgDQgDgDAAgFQABgFADgCQAEgDAJABQAHABACADQAEADAAAKIAAAEIAIAAIASABIAJABQAGACACAEIABAFQAFASgCASQgBACABADIACADQABADgBAFIgDAHIgEAEIgGABQgIAAgDgGIgBgFIgBgFIAAghIABgGIgLgBIgCAAIgDACQgEACgDAAIACAhIgBAKQgBAHgEAEQgDACgEAAQgEAAgDgDgAC1AwIgHgDQgFgDgBgCQgCgEABgKIAAgvIABgHIAGgFIAFgCIAFgBIANABIALADQAOAGAEAHIADAIQADAOgBAZIgBAGQgBAEgDADQgGAFgFABQgEABgEgDQgEgDgBgEIAAgZIABgFQABgEAAgJIgBgEIgCgDIgLgDIAAAZIAAAIIABAFIABAKQgBAJgCACQgDAEgEAAIgBAAgAEIAsQgIgDgCgFIgEgHQgDgLAAgRIABgIQADgSATgHQAGgDAFAAIAOgEQgBgGADgFQAFgHAGACIAHADIAHACQAEADAAAFIgCAHIAAArIADAQQABAKgFAFQgDADgHACQgGACgOABIgKAAQgMAAgHgDgAEWgHIgEACIgBACQgCADABACIABADIAGAHIAVABQABgNgBgOQgNADgJAEgAAsAsQgEgDgCgGIgBgLIABg6QgJABgEgIQgDgJAIgEIAEgCQALgCALAEIAFAEQACACABAEIABARIABAGIAAAzIgDAFIgEAIQgDAEgFAAQgEAAgDgDgAi/AsIgIgGQgHgHgJgMIgDgGQgCgDAAgIIABgHIACgGIADgGIAFgEQADgDADgBIAFgBIAGgEQAGgDANAAIAMACQAGADABAFIABACIABADQACABABADIACAGQADgDAGAAQAGAAAFAEIADAAIAEgOIAFgGQAGgFAEAAIAHgBIAPAAIAHABQAFABABAHQAAAHgFADQgDABgGAAIgLAAQgEAAgCACIgBADIgEAOIAAAHQABAEADACIAEAAIAKAAIAIABQAGAEAAAGQABAFgFAFQgEADgKAAQgKgBgGgCQgNgGgFgMQgHAAgMgEIgDALQgBADgCACIgHACIgHAFIgEABIgGACIgIACIgIgCgAi0gMIgGADIgGADQAAAEgFAEQgCAEAFAGQAIAKAKgEIAIgEIABgEIAAgKIgBgLIgJgCIgDABgABWAmIgGgJQgDgGADgHIAFgJQAFgHAIAAIAFgBIAQABIACgBIABgCQAAgFgCgDQgBgEgFABIgDABQgDACgGABQgJAAgEgEQgEgFACgFQABgFAGgBIAHgBIAGgDQAFgDALADIAEACIAGADIAEAGIACAEIACAIIABAkQgBAJgDACQgCADgEAAQgJADgVAAQgMAAgEgEgABlASIgBADIAOABIADgBIADgBIABgBQAAAAABgBQAAAAAAAAQAAAAAAAAQgBAAAAAAg");
	mask.setTransform(0,-0.4);

	// Слой 2
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(-52.4,-3.7,1,1,0,0,0,7.9,43);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hoch_la();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-32.5,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.hoch_la_1, new cjs.Rectangle(-32.5,-6,65,12), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 22 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_281 = new cjs.Graphics().p("AhZC4IAAkCIBlAAIAAECg");
	var mask_graphics_282 = new cjs.Graphics().p("AiQC4IAAkCIEhAAIAAECg");
	var mask_graphics_283 = new cjs.Graphics().p("AjvC4IAAkCIHfAAIAAECg");
	var mask_graphics_284 = new cjs.Graphics().p("AlOC4IAAkCIKdAAIAAECg");
	var mask_graphics_285 = new cjs.Graphics().p("AmtC4IAAkCINbAAIAAECg");
	var mask_graphics_286 = new cjs.Graphics().p("AoLC4IAAkCIQXAAIAAECg");
	var mask_graphics_331 = new cjs.Graphics().p("AoLC4IAAkCIQXAAIAAECg");
	var mask_graphics_332 = new cjs.Graphics().p("AoMC5IAAjDIQZAAIAADDg");
	var mask_graphics_333 = new cjs.Graphics().p("AoMC5IAAiFIQYAAIAACFg");
	var mask_graphics_334 = new cjs.Graphics().p("AoLC5IAAhGIQXAAIAABGg");
	var mask_graphics_335 = new cjs.Graphics().p("AoLC4IAAgGIQXAAIAAAGg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(281).to({graphics:mask_graphics_281,x:-9,y:18.5}).wait(1).to({graphics:mask_graphics_282,x:-4.2,y:18.5}).wait(1).to({graphics:mask_graphics_283,x:4.4,y:18.5}).wait(1).to({graphics:mask_graphics_284,x:13.1,y:18.5}).wait(1).to({graphics:mask_graphics_285,x:21.7,y:18.5}).wait(1).to({graphics:mask_graphics_286,x:34.5,y:18.5}).wait(45).to({graphics:mask_graphics_331,x:34.5,y:18.5}).wait(1).to({graphics:mask_graphics_332,x:34.4,y:18.5}).wait(1).to({graphics:mask_graphics_333,x:34.2,y:18.5}).wait(1).to({graphics:mask_graphics_334,x:34.1,y:18.5}).wait(1).to({graphics:mask_graphics_335,x:34.5,y:18.5}).wait(1));

	// plasha
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(39.3,23,1,1,0,0,0,44.5,9.5);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(281).to({_off:false},0).wait(55));

	// actia
	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(38,25,1,1,0,0,0,42,25);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(281).to({_off:false},0).to({y:20,alpha:1},4).wait(46).to({y:25,alpha:0},4).wait(1));

	// ili
	this.instance_2 = new lib.Символ14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-38.2,-0.5,1,1,0,0,0,10,4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(222).to({_off:false},0).to({x:41},4).to({x:39.3},2).wait(50).to({y:9.5,alpha:0},3).to({_off:true},1).wait(54));

	// one_for_30
	this.instance_3 = new lib.Символ12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(132.5,24.3,1,1,0,0,0,42.5,19);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(222).to({_off:false},0).to({x:38.3},4).to({x:39},2).wait(50).to({y:34.3,alpha:0},3).to({_off:true},1).wait(54));

	// put10
	this.instance_4 = new lib.Символ13();
	this.instance_4.parent = this;
	this.instance_4.setTransform(38.5,68,1,1,0,0,0,38.5,18.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(181).to({_off:false},0).to({y:24.8},5).to({y:25.5},2).wait(33).to({y:45.5,alpha:0},4).to({_off:true},1).wait(110));

	// win
	this.instance_5 = new lib.Символ11();
	this.instance_5.parent = this;
	this.instance_5.setTransform(39.5,1.5,1.25,1.25,0,0,0,30,6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(181).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4).wait(36).to({y:21.5,alpha:0},4).to({_off:true},1).wait(110));

	// koddd
	this.instance_6 = new lib.Символ10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-61.2,20.3,1,1,0,0,0,42.5,23.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(131).to({_off:false},0).to({x:40.5},5).to({x:39.5},2).wait(41).to({y:42.8,alpha:0},3).to({_off:true},1).wait(153));

	// gol_kr
	this.instance_7 = new lib.Символ8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(38,68.5,1,1,0,0,0,21,21);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(94).to({_off:false},0).to({y:18.3},4).to({y:21},2).wait(26).to({y:33.5,alpha:0},6).to({_off:true},2).wait(202));

	// sin_kr
	this.instance_8 = new lib.Символ7();
	this.instance_8.parent = this;
	this.instance_8.setTransform(60,67.5,1,1,0,0,0,21,21);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(92).to({_off:false},0).to({y:19.3},4).to({y:22},2).wait(28).to({y:34.5,alpha:0},6).to({_off:true},2).wait(202));

	// zel_krug
	this.instance_9 = new lib.Символ9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(16.5,66.5,1,1,0,0,0,29.5,28.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(90).to({_off:false},0).to({y:18.8},4).to({y:21.5},2).wait(30).to({y:34,alpha:0},6).to({_off:true},2).wait(202));

	// v_krugah
	this.instance_10 = new lib.v_krugah_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-36.7,16.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(45).to({_off:false},0).to({x:44.5},3).to({x:39.5},2).wait(34).to({x:37},2).to({x:116},4).to({_off:true},1).wait(245));

	// hoch_la
	this.instance_11 = new lib.hoch_la_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(127.3,16);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(45).to({_off:false},0).to({x:34.5},3).to({x:39.5},2).wait(34).to({x:43},2).to({x:-48.2},4).to({_off:true},1).wait(245));

	// Слой 2
	this.instance_12 = new lib.vmestes_hoho_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(41,64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:40.5,y:25.7},4).to({y:27},2).wait(33).to({y:26.2},2).to({x:41,y:62.5},4).to({_off:true},1).wait(290));

	// Слой 1
	this.instance_13 = new lib.Символ6();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-52.7,6.5,1,1,0,0,0,39,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:42.5},4).to({x:39},2).wait(33).to({x:36.5},2).to({x:131.5},4).to({_off:true},1).wait(290));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.9,-31.4,193,106.5);


// stage content:
(lib.hoch_fast_90x75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		setTimeout(function() {
		         _this.ban.gotoAndStop(320);
		    }, 30000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// frame
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(45,37.5,1,1,0,0,0,44.5,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// vmestes_hoho
	this.ban = new lib.Символ5();
	this.ban.parent = this;
	this.ban.setTransform(45,48.8,1,1,0,0,0,39,18.7);

	this.timeline.addTween(cjs.Tween.get(this.ban).wait(1));

	// logo
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(45,12.5,1,1,0,0,0,23.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(45.5,38.1,1,1,0,0,0,46.5,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.9,7.8,201,134.8);
// library properties:
lib.properties = {
	width: 90,
	height: 75,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/actia.png?1479225225911", id:"actia"},
		{src:"images/gol_kr.png?1479225225911", id:"gol_kr"},
		{src:"images/hoch_la.png?1479225225911", id:"hoch_la"},
		{src:"images/ili.png?1479225225911", id:"ili"},
		{src:"images/koddd.png?1479225225911", id:"koddd"},
		{src:"images/logo.png?1479225225911", id:"logo"},
		{src:"images/one_for_30.png?1479225225911", id:"one_for_30"},
		{src:"images/plasha.jpg?1479225225911", id:"plasha"},
		{src:"images/put10.png?1479225225911", id:"put10"},
		{src:"images/sin_kr.png?1479225225911", id:"sin_kr"},
		{src:"images/txt_otdih.png?1479225225911", id:"txt_otdih"},
		{src:"images/v_krugah.png?1479225225911", id:"v_krugah"},
		{src:"images/vmestes_hoho.png?1479225225911", id:"vmestes_hoho"},
		{src:"images/win.png?1479225225911", id:"win"},
		{src:"images/zel_krug.png?1479225225911", id:"zel_krug"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;