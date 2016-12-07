(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,185);


(lib.boot = function() {
	this.initialize(img.boot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,122);


(lib.cigan = function() {
	this.initialize(img.cigan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,198);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,708,457);


(lib.guitar = function() {
	this.initialize(img.guitar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,207);


(lib.hair = function() {
	this.initialize(img.hair);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,28);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,45);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,49);


(lib.kist = function() {
	this.initialize(img.kist);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,32);


(lib.kopito = function() {
	this.initialize(img.kopito);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,28);


(lib.l9wka = function() {
	this.initialize(img.l9wka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,32);


(lib.leg = function() {
	this.initialize(img.leg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,43);


(lib.noga3 = function() {
	this.initialize(img.noga3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,100);


(lib.noga4 = function() {
	this.initialize(img.noga4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,203,105);


(lib.nogi = function() {
	this.initialize(img.nogi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,36);


(lib.ring = function() {
	this.initialize(img.ring);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,151);


(lib.ruuuka = function() {
	this.initialize(img.ruuuka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,27);


(lib.tail = function() {
	this.initialize(img.tail);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,54);// helper functions:

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


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACTAhIgPgFIgOgCQgIgBgFgEQgGgEgBgJQAAgIAFgFQAHgHAWgBQARgBAOgDQAUgEAKAAQASAAALAJQAGAFACAHQABAIgDAHQgGAJgNACIgXADIgUADIgMACIgHgBgAjAAXQgWAAgJgIQgGgHAAgJQABgLAHgGQAHgHAQgDQAKgBARAAIAagCIAWgCQAMAAAIAEQANAHACAPQABAOgLAJQgKAHgXAAg");
	this.shape.setTransform(97.8,78.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(23).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// Слой 1
	this.instance = new lib.cigan();
	this.instance.parent = this;
	this.instance.setTransform(134,0,0.788,0.788,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134,156.1);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFF00","rgba(255,255,2,0)"],[0,1],0,0,0,0,0,99.4).s().p("AmCGDQihihAAjiQAAjiChigQCgihDiAAQDiAAChChQChCgAADiQAADiihChQihChjiAAQjiAAigihg");
	this.shape.setTransform(54.8,54.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ63, new cjs.Rectangle(0,0,109.5,109.5), null);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ao8B/IgagEQgWgFgTAAIAAgfIATgGIAAigIgTgDIAAgqICxAHIAMBQIgngFIgLgmIgsABIgTAGIgBAlQANgCANAAIAcABQAQABANAFQAMAFALAKIAAAAQAHAGADAKQAFALAAARQAAAQgEAOQgCAOgHALQgFAKgIAIQgIAIgJAGQgJAFgLADQgKAEgMABIgSABQgQAAgKgCgAo0AGIAABJIAZAAQAHAAAIgEQAHgDAHgHQAHgGACgLQADgLgDgOQgDgSglAAIgXABgAvxB/IgbgEQgVgFgTAAIABgfIASgGIAAigIgSgDIAAgqICvAHIANBQIgogFIgKgmIgtABIgSAGIgBAlQAMgCAOAAIAdABQAOABANAFQANAFALAKIAAAAQAHAGAEAKQADALAAARQAAAQgCAOQgEAOgFALQgGAKgIAIQgIAIgJAGQgJAFgLADQgKAEgLABIgTABQgQAAgKgCgAvpAGIABBJIAYAAQAIAAAGgEQAIgDAHgHQAHgGADgLQABgLgBgOQgEgSglAAIgXABgAL+ARIgMAAIAAA/IASAGIAAAgIhfAAIAAggIAUgGIAAifIgUgEIAAgqIBNAFIgBBeIANAAIAaheIBDgFIAAAqIgUAEIgXBIIAaBXIASAGIAAAgIhFAAgAPXB2IAAggIATgGIABhqIg6BkIAAAGIATAGIAAAgIheAAIAAggIATgGIAAifIgTgEIAAgqIBLAEIAABmIA6hmIA4AAIAADJIASAGIAAAggAHfB2IAAggIAUgGIAAifIgUgEIAAgqICxAEIAMBSIglAAIgMgsIhAAHIABA4IA+AAIABAlIg/AAIgBA5IBAAGIAMgsIAlAAIgMBSgAErB2IAAggIATgGIAAieIgqgEIgNAtIgmAAIAOhYIBLAFICNgBIAMBUIglAAIgNguIgqAEIAACfIATAGIAAAggABHBwIgTgHIgRgLQgHgGgFgJQgHgKgDgMQgEgNgCgQQgCgRABgSQABgTADgRQAEgRAHgPQAIgQALgLQALgLAPgGQAOgGAhgDQAOAAAMACQALACAKAEQALAEAHAHQAIAHAFAIQAOAZADAOQAGAeAAARQgBAigFAPQgJAdgIAMQgFAJgHAHQgJAGgJAFQgKAEgLADQgNACgNAAQgegCgNgEgABchOQgHAFgGAJQgFAJgDAOQgDAOAAATQAAARACAOQACAPAEAJQAEAKAIAFQAJAFALAAQANAAAIgFQAJgFAEgLQAEgKADgPQACgPAAgRQAAgTgCgNQgCgOgFgJQgFgIgHgEQgIgFgLAAQgLAAgIAFgAhiB2IAAggIATgGIAAhqIg5BkIAAAGIATAGIAAAgIheAAIAAggIATgGIAAifIgTgEIAAgqIBLAEIAABmIA5hmIA5AAIAADJIATAGIAAAggAkzB2IAAggIATgGIgPhRIAAgNIgPg+IgNAAIgRA/IAAANIgPBQIASAGIAAAgIhYAAIAAggIATgGIAqirIgWABIgBgjIB0AEIAnDJIASAGIAAAggAr0B2IAAggIASgGIABhqIg5BkIAAAGIATAGIAAAgIhfAAIAAggIATgGIAAifIgTgEIAAgqIBMAEIAABmIA5hmIA4AAIAADJIAUAGIgBAgg");
	this.shape.setTransform(107.7,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ62, new cjs.Rectangle(0,0,215.4,25.8), null);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgeCEIgBg5IA/AEIgCA1gAgcBFIABhYQAQAAAWgHQAMgEAFgGQAGgIgBgKQgBgnhCAIIgLAoIgmAAIAAgDIANhLQAQgEAPgDQAPgCANAAQAMABAMACQAMADAKAEQAKAFAIAGQAIAHAGAIQAHAIADAKQAEAJACALQACAMgCAMQgBAMgFAMQgFAMgHAIQgIAHgLADQgEACgJABIAAAAIgFAyIg4gEg");
	this.shape.setTransform(8.4,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(0,0,16.8,26.5), null);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ABKB6IgpgFIgNhSIAmAAIAMAsIAOAAQANAAARgEQALgDAFgEQAFgFAAgHIADghIgiAAIgiAAIACglIBAAAIgDgkQAAgIgFgFQgFgFgJgDQgSgFgMAAIgOgBIgMAtIgmAAIAMhTQBHgRAzAWQAGACAGAFQAFAGAEAIQAJAPAEATQAEATgDARQgBAJgDAFQgDAFgFAEIABAAQAFABAEAFQAEAGADAJQAEAJABAKQAAAKgCAKQgCALgGAKQgFAKgKAJQgKAJgPAFQgQAFgVAAIgLAAIgbgBgAhUB7IAAgfIATgGIAAhrIg5BkIAAAHIATAGIAAAfIhfAAIAAgfIATgGIAAigIgSgDIgBgqIBMAEIAABlIA5hlIA5AAIgBDJIATAGIgBAfg");
	this.shape.setTransform(19.9,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(0,0,39.8,24.7), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ak/AXIgNAAIAAA/IATAFIAAAgIhfAAIAAggIATgFIAAigIgTgDIAAgqIBMAEIAABfIANAAIAahfIBDgEIAAAqIgUADIgXBJIAZBXIATAGIAAAfIhFABgAE6B7IAAggIATgFIAAggIgUAAIgDALIgNAwIgCAKIhFAAIAAggIAJgCIAKgDIAOgvQgLgGgGgIQgFgJgCgJQgDgTAAgOIACgTQACgJAEgIQAEgIAFgHIAMgNQAIgHAXgKQATgGAWgCIBMgEIAAApIgTAEIAACgIATAFIAAAggAEhgUQAAANAHAHQAFAGAKADQALADALgCIAAg+IgLgBQggAAgBAhgAB5B7IAAggIATgFIAAhGIg/AAIABBGIASAFIAAAgIheAAIAAggIATgFIAAigIgTgEIAAgpIBMAEIgBBYIA/AAIAAhYIA5AAIAADJIATAFIAAAggAiXB2IgSgIIgRgKQgIgGgFgKQgGgJgEgNQgEgNgBgQQgCgQAAgTQABgSADgRQAEgRAHgQQAIgPALgLQALgMAPgGQAPgGAggCQAOgBAMADQAMACAKAEQAKAEAHAHQAIAGAGAJQANAZADAOQAGAdAAARQgBAigEAPQgKAdgHAMQgGAJgHAHQgIAHgKAEQgKAFgLACQgMACgOAAQgegBgNgEgAiBhJQgIAFgGAJQgFAKgDAOQgDANAAATQAAASACAOQACAOAEAKQAEAKAJAFQAIAFAMAAQAMAAAIgFQAJgGAEgKQAEgLADgPQACgOAAgSQAAgTgCgNQgCgOgFgIQgFgJgHgEQgIgEgLAAQgLAAgHAEg");
	this.shape.setTransform(40.9,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(0,0,81.8,24.7), null);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AliB+IgagEQgVgFgUAAIABgfIASgGIAAigIgSgDIAAgqICwAHIAMBQIgngFIgLgmIgsABIgTAGIgBAlQANgCANAAIAdABQAPABANAFQAMAFALAKIAAAAQAHAGAEALQAEAKAAARQAAAQgDAOQgDAOgGALQgGAKgIAIQgHAIgKAGQgJAFgLADQgKAEgLABIgSAAQgRAAgKgBgAlaAFIABBJIAYAAQAIAAAHgEQAHgDAHgHQAHgGADgLQACgLgCgOQgDgSgmAAIgXABgAgOB+QgNgCgCgHIAAgfIAUgGIAoipIgWABIgBglIB0AHIAmDGIATAGIAAAfIhVAAIAAgfIASgGIgJgqIg3AAIgKAqIASAGIAAAiQgbAEgUACIgQABIgJgBgAA4gLIgBAMIAtAAIAAgNIgKg+IgTAAgAHzB3Ig0gCIAAggIATgGIAAigIgTgDIAAgqIBLAEIABBIQATgBAeAFQAKACAIAEQAIAEAFAFQAGAGAEAGQAFAHACAIQAFAVgBANQgBAUgGAOQgGAOgJAKQgUASgaAIQgOADgOABIgVABIgIAAgAIKgCIAAA+QAsAHAAgmQABggghAAIgMABgAEKB1IAAggIATgGIAAieIgqgEIgMAtIgnAAIAOhYIBLAFICNgBIANBUIgmAAIgNguIgqAEIAACfIATAGIAAAggAjXB1IAAggIATgGIAAigIgTgDIAAgqIA5ADQAPAAAPADQAOACANAEQANAEALAHQALAGAJAKQASASABAkQABAjgNARQgFAHgHAGQgIAFgKAEQgLAEgOACQgPABgTgBIAAAgIATAGIAAAggAiLg6IAAA+QAtAGgBglQAAggghAAIgLABgAoyB1IAAggIATgGIANg/IgTgBQgIgBgIgGQgJgGgHgLIgXhIIgTgDIgBgqIBDAEIAbBfIANAAIAAhfIBLgEIAAAqIgUADIgYCgIATAGIAAAgg");
	this.shape.setTransform(62.5,12.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ57, new cjs.Rectangle(0,0,124.9,25.5), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhaB+QgNgCgCgHIAAgfIAUgGIApipIgWABIgBglIBzAHIAmDGIATAGIAAAfIhVAAIAAgfIASgGIgJgqIg2AAIgKAqIASAGIAAAiQgbAEgUACIgRABIgJgBgAgTgLIgBAMIAsAAIAAgNIgKg+IgSAAgADMAQIgMAAIAAA/IASAGIAAAgIheAAIAAggIATgGIAAifIgTgEIAAgqIBMAFIgBBeIANAAIAaheIBDgFIAAAqIgTAEIgYBIIAaBXIASAGIAAAgIhEAAgAjRAQIgMAAIAAA/IASAGIAAAgIheAAIAAggIATgGIAAifIgTgEIAAgqIBMAFIgBBeIANAAIAaheIBDgFIAAAqIgTAEIgYBIIAaBXIASAGIAAAgIhEAAg");
	this.shape.setTransform(29.8,12.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(0,0,59.7,25.4), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AleCRIgHglIhrAAIgGAlIgsAAIgBgLIgFg0IgBgMIATgGIAuisIgXACIgBgjICbAEIAGDJIATAGIgGBLgAlxBAIgHidIgmADIgZCOIAAAMIBGAAgACXBvQgjgJgTABIAAggIATgGIAAifIgTgEIAAgqIBMAHQASgFAdgCQAJAAAIACQAHACAGAFQALAIAGALQAGALACANIAAABQABAMgBAKQgBAKgDAGQgGANgJADQAFAAAIAEQAEADADAKQAEAKADAQQADARgEAQQgDARgLAQQgHAJgLAIQgLAIgQAFQgPAGgSABIgNAAQgMAAgOgCgACsgFIAABIIAZgBQAHAAAHgDQAIgEAHgGQAHgHACgLQACgKgCgPQgDgRgmAAIgWACgADNhhQgKABgJAEQgKAEgDAFIAAAuQA5AGAAghIAAgGIAAgHQAAgLgIgFQgGgEgJAAIgCAAgAJsBmQgXAAgSgFQgTgGgPgKQgdgVABhLQABgSAEgSQADgRAIgRQAHgQALgMQALgLAQgGQA0gVBGAQIAMBRIgmAAIgMgrIgNABQgNAAgRAFQgYAHgHAWQgIAfAAARIABAWQABALAEAJQAGASAZAHQASAFANAAIAOgBIAMgrIAmAAIgMBMQgUADgQAFQgXAEgRAAIgEAAgAMcBmIAAggIATgGIAAieIgqgEIgMAtIgnAAIAOhYIBLAFICNgBIANBUIgmAAIgNguIgqAEIAACfIATAGIAAAggAFsBgIgSgHIgRgLQgIgGgFgJQgGgKgEgMQgEgNgBgQQgCgQAAgTQABgTADgRQAEgRAHgPQAIgQALgLQALgLAPgGQAPgGAggDQAOAAAMACQAMACAKAEQAKAEAHAHQAIAHAGAIQANAZADAOQAGAeAAARQgBAigEAPQgKAdgHAMQgGAJgHAHQgIAGgKAFQgKAEgLADQgMACgOAAQgegCgNgEgAGCheQgIAFgGAJQgFAJgDAOQgDAOAAATQAAASACANQACAPAEAJQAEAKAJAFQAIAFAMAAQAMAAAIgFQAJgFAEgLQAEgKADgPQACgOAAgSQAAgTgCgNQgCgOgFgJQgFgIgHgEQgIgFgLAAQgLAAgHAFgAAGBmIgZhlIgQAAIgaBlIhFAAIAAggIATgGIAahXIgYhIIgUgEIAAgqIBDAFIAbBeIAQAAIAZheIBDgBIAAAmIgTAEIgYBIIAaBXIASAGIAAAggAqiBgIgTgHIgRgLQgHgGgGgJQgGgKgEgMQgDgNgCgQQgCgQABgTQAAgTAEgRQAEgRAHgPQAHgQAMgLQALgLAPgGQAOgGAggDQAOAAAMACQAMACAKAEQAKAEAIAHQAHAHAGAIQANAZAEAOQAGAeAAARQgCAigEAPQgJAdgIAMQgFAJgIAHQgIAGgJAFQgKAEgMADQgMACgNAAQgegCgNgEgAqNheQgIAFgFAJQgGAJgCAOQgDAOAAATQAAASACANQACAPAEAJQAEAKAIAFQAIAFAMAAQANAAAIgFQAIgFAEgLQAFgKACgPQACgOAAgSQAAgTgCgNQgCgOgEgJQgFgIgIgEQgHgFgLAAQgLAAgIAFgAtMBmIAAggIATgGIAAiZIg/gEIAACdIATAGIAAAgIhfAAIAAggIATgGIAAigIgTgDIAAgqIBMAEIB3AAIAADJIATAGIAAAgg");
	this.shape.setTransform(47.4,49.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkPCQIgHglIhrAAIgGAlIgsAAIgBgMIgFg0IgBgMIATgFIAuisIgXABIgBgiICbAEIAGDJIATAFIgGBMgAkiA/IgHidIgmACIgZCOIAAANIBGAAgAjEBuQgMgCgCgHIAAggIATgFIAqiqIgWABIgCgkIB1AGIAmDHIASAFIAAAgIhUAAIAAggIASgFIgKgqIg3AAIgKAqIATAFIAAAjQgcAEgTABIgRABIgKAAgAh9gcIgBAOIAugBIAAgNIgLg/IgTAAgAE+BnIg1gDIAAgfIATgGIAAigIgTgEIAAgpIBMAEIAABIQATgBAeAEQAKADAIAEQAIADAGAGQAGAFAEAHQAEAGADAIQAEAVAAAOQgCATgFAPQgGAOgKAJQgTATgbAHQgNAEgOABIgWABIgHAAgAFVgSIAAA+QArAGABgmQABgfgiAAIgLABgABVBkIAAgfIATgGIAAifIgqgEIgNAuIgmAAIANhZIBLAFICNAAIANBUIglAAIgNgvIgqAFIAACeIASAHIAAAfg");
	this.shape_1.setTransform(53.5,14.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-49,0,193,64.1), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPCYQgMgCgCgHIAAgfIATgGIApipIgWABIgCglIB1AHIAmDGIATAGIAAAfIhVAAIAAgfIASgGIgKgqIg3AAIgKAqIATAGIAAAiQgcAEgTACIgQABIgKgBgAA3AOIgBANIAuAAIAAgOIgLg9IgTAAgAqoCYQgMgCgCgHIAAgfIATgGIAqipIgWABIgCglIB1AHIAmDGIATAGIAAAfIhVAAIAAgfIASgGIgKgqIg3AAIgKAqIATAGIAAAiQgcAEgTACIgRABIgKgBgAphAOIgBANIAuAAIAAgOIgLg9IgTAAgAJwCVIgCg5IBAAEIgBA1gAnKCPIgPAAIAAggIATgGIAAifIgTgEIAAgqIBMAEIAABlIA5hlIA5AAIgBDJIAUAGIgBAgIheAAIAAggIATgGIAAhqIg5BkIAAAGIATAGIAAAgIgPAAgAGgCPIAAggIATgGIAAifIgTgEIAAgqICwAEIANBSIgmAAIgMgsIhAAHIABA3IA+AAIACAmIhAAAIgBA5IBAAGIAMgsIAmAAIgNBSgAE3CPIAAggIATgGIAAhFIg/AAIAABFIATAGIAAAgIhfAAIAAggIATgGIAAifIgTgEIAAgqIBMAEIAABZIA/AAIAAhZIA4AAIAADJIATAGIAAAggAiHCPIAAggIATgGIAAhFIg/AAIABBFIASAGIAAAgIheAAIAAggIATgGIAAifIgTgEIAAgqIBMAEIgBBZIA/AAIAAhZIA5AAIAADJIATAGIAAAggAJyBWIgIhYIgEhwIBRgBIgDBxIgCANIgGBAIgBAOgAmphsIALgsIBqATIgIAeg");
	this.shape.setTransform(69.5,15.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(0,0,139.1,30.6), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApbE7IgCgTIgEgSIgagBIh2gEIgagCIAAggIATgFIAAihIgTgEIAAgqIBMAFIAADJIASAEIATAAIATgDIAAjKIA5AAIAADNIAfgBIgGBQgAg5EZQgNgCgCgHIAAggIAUgFIAqirIgXABIgBgkIBzAGIAmDIIAUAFIAAAgIhWAAIAAggIASgFIgJgrIg3AAIgJArIASAFIAAAjQgbAEgTABIgRABIgKAAgAANCOIgBAOIAugBIAAgNIgLg/IgTAAgAnvERIg1gCIAAgfIATgGIAAihIgTgEIAAgpIBMAEIAABIQATgCAeAFQAKADAIAEQAIADAGAGQAFAFAFAHQAEAGACAIQAFAWAAAOQgCATgGAPQgFAOgKAJQgUATgaAHQgOAEgOABIgVABIgHgBgAnYCYIAAA/QArAGAAgmQABggghAAIgLABgAJKEQIgOgBIAAggIATgFIAAihIgTgEIAAgpIBLAEIAABlIA5hlIA5AAIAADKIATAFIAAAgIhfAAIAAggIATgFIAAhsIg5BlIAAAHIATAFIAAAgIgPABgAl6EQIAAgjIATgDIAAidIgTgDIAAgqIBMAHIAADCIATAEIAAAjgAF2EPIAAggIATgFIAAihIgTgEIAAgpICwAEIANBSIgmAAIgNgsIg/AGIAAA5IA/AAIABAmIhAAAIAAA4IA/AHIANgsIAmAAIgNBRgAEMEPIAAggIATgFIAAhGIg/AAIABBGIASAFIAAAgIheAAIAAggIATgFIAAihIgTgEIAAgpIBMAEIgBBYIA/AAIAAhYIA5AAIAADKIATAFIAAAggAkOEPIAAggIATgEIAAiiIgTgEIAAgqICxAHIAMBRIgmAAIgMgsIhAAGIAACdIAKADIAKACIgBAggAJrATIALgqIBqASIgIAegAgcg7QgkgIgSAAIAAggIASgFIAAihIgSgEIAAgqIBLAHQARgFAdgCQAJAAAIADQAHACAGAEQALAJAGALQAHAKABAOIAAAAQABANgBAKQgBAJgDAHQgGAMgJAEQAFgBAIAEQAEADADALQAEAKADAQQADARgEARQgDAQgKAQQgIAKgKAHQgMAIgPAGQgQAFgSABIgMABQgMAAgNgDgAgIiwIAABKIAYgCQAHABAIgEQAHgDAHgHQAHgGACgLQACgLgCgPQgDgRgmAAIgVABgAAYkLQgJAAgKAFQgIADgEAFIAAAuQA4AHABghIAAgGIgBgIQAAgKgIgFQgGgFgJAAIgCABgArIg7QgjgIgTAAIAAggIATgFIgBihIgSgEIAAgqIBLAHQATgFAdgCQAJAAAHADQAIACAGAEQAKAJAHALQAGAKACAOIAAAAQABANgBAKQgCAJgDAHQgFAMgJAEQAFgBAHAEQAFADADALQADAKAEAQQACARgDARQgDAQgLAQQgHAKgLAHQgLAIgQAGQgPAFgTABIgMABQgNAAgNgDgAq0iwIAABKIAZgCQAIABAHgEQAIgDAGgHQAIgGACgLQACgLgCgPQgDgRgnAAIgWABgAqSkLQgKAAgJAFQgKADgEAFIAAAuQA6AHAAghIAAgGIAAgIQgBgKgHgFQgGgFgJAAIgCABgACFg7QgMgBgCgIIAAgfIAUgFIApirIgWABIgBglIB0AHIAmDIIATAFIAAAfIhVAAIAAgfIASgFIgKgqIg3AAIgKAqIATAFIAAAjQgbAEgUABIgRABIgKgBgADNjFIgBAOIAtgBIAAgNIgKg/IgTAAgAKIhBIg1gDIAAgfIATgGIAAihIgTgEIAAgpIBMAEIABBIQASgBAeAEQALADAHAEQAJADAFAGQAGAFAEAHQAFAGACAIQAEAWAAAOQgCATgFAPQgGAOgJAJQgUATgbAHQgNADgOACIgWABIgHAAgAKfi7IAAA/QArAGABgmQABggghAAIgMABgAoAhBIg0gDIAAgfIATgGIAAihIgTgEIAAgpIBMAEIAABIQATgBAeAEQAKADAIAEQAIADAGAGQAGAFAEAHQAEAGADAIQAEAWgBAOQgBATgGAPQgFAOgKAJQgTATgbAHQgOADgOACIgVABIgIAAgAnoi7IAAA/QArAGABgmQAAggghAAIgLABgAmKhEIAAgiIATgDIAAidIgTgEIAAgpIBMAHIAADCIATAEIAAAigAjohFIgpgFIgNhSIAmAAIANAsIANAAQAOAAARgEQAKgDAFgEQAFgFAAgHIADghIgiAAIghAAIABgmIBAAAIgCgkQgBgIgFgFQgFgFgJgDQgRgFgNAAIgNgBIgNAtIgmAAIANhTQBGgRAzAWQAHACAFAFQAFAGAFAIQAIAPAFATQADATgDARQgBAJgCAFQgEAGgEAEIAAAAQAFABAEAFQAEAGAEAIQADAKABAKQABAKgDAKQgBALgHAKQgFAKgKAJQgKAJgPAFQgPAFgWAAIgLAAIgbgBgAGfhEIAAgfIATgGIAAigIgqgEIgNAuIgmAAIAOhZIBLAFICNAAIAMBUIglAAIgNgvIgqAEIAACgIATAHIAAAfg");
	this.shape.setTransform(78,31.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(0,0,156,63.1), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,0,708,457), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.head();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(0,0,41,49), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.noga4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,203,105), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.noga3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,95,100), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nogi();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,104,36), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruuuka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,109,27), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AynHIQnti9AAkLQAAkKHti9QHui9K5AAQK6AAHtC9QHuC9AAEKQAAELnuC9QntC9q6AAQq5AAnui9g");
	this.shape.setTransform(168.5,64.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,337,129), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,18,43), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tail();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,114,54), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kopito();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,37,28), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kist();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,20,32), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,9,28), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,41,45), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.l9wka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,83,32), null);


(lib.копияshape149 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AkEhaIIJAAIkFC1g");
	this.shape.setTransform(0,17.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,8.1,52.2,18.3);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body();
	this.instance.parent = this;
	this.instance.setTransform(-102.5,-92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.5,-92.5,205,185);


(lib.ring_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ring();
	this.instance.parent = this;
	this.instance.setTransform(-76,-75.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ring_1, new cjs.Rectangle(-76,-75.5,152,151), null);


(lib.guitar_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.guitar();
	this.instance.parent = this;
	this.instance.setTransform(-83.5,-103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.guitar_1, new cjs.Rectangle(-83.5,-103.5,167,207), null);


(lib.boot_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.boot();
	this.instance.parent = this;
	this.instance.setTransform(-50,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.boot_1, new cjs.Rectangle(-50,-61,100,122), null);


(lib.sprite136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.sprite136, null, null);


(lib.shape142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(8.9,1,1).p("AKKqJQELELAAF+QAAF+kLEMQkLEMl/AAQl+AAkLkMQkMkMAAl+QAAl+EMkLQELkMF+AAQF/AAELEMg");
	this.shape.setTransform(199.7,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(103.5,-94.4,192.3,192.3);


(lib.shape137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AIoCbIxQibIRQiaIABAAIAAE1g");
	this.shape.setTransform(-51.2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.5,-13.3,110.7,31.1);


(lib.shape132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEF1D4").s().p("AhVhAIAVgWICXCXIgWAWg");
	this.shape.setTransform(-73.1,-72.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEF1D4").s().p("AhVhAIAVgWICWCXIgVAWg");
	this.shape_1.setTransform(72.8,73);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEF1D4").s().p("AhVBBICWiWIAVAVIiWCXg");
	this.shape_2.setTransform(-72.9,73.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEF1D4").s().p("AhWBBICXiXIAVAWIiWCWg");
	this.shape_3.setTransform(73.1,-73);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.7,-81.7,163.5,163.4);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.parent = this;
	this.instance.setTransform(107.7,12.8,1,1,0,0,0,107.7,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:12.9,scaleX:0.97,scaleY:0.97,x:107.8,y:13},2,cjs.Ease.get(-1)).to({scaleX:0.92,scaleY:0.92},3,cjs.Ease.get(1)).to({regY:13,scaleX:0.97,scaleY:0.97,x:107.7},3,cjs.Ease.get(-1)).to({regY:12.8,scaleX:1,scaleY:1,y:12.8},2,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,215.4,25.8);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(53.6,29.7,1,1,0,0,0,53.6,29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(-49,0,193,64.1), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(75.1,72.9,1.453,1.453,0,0,0,69.5,15.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({regY:15.2,scaleX:1,scaleY:1,x:75,y:72.7,alpha:1},4).to({scaleX:0.48,scaleY:0.48,x:75.1,y:72.8,alpha:0},8).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ50();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55.1,24.9,1.453,1.453,0,0,0,69.5,15.3);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:15.2,scaleX:1,scaleY:1,x:55,y:24.7,alpha:1},4).to({scaleX:0.48,scaleY:0.48,x:55.1,y:24.8,alpha:0},8).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,2.6,202.1,44.4);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(78,31.6,1,1,0,0,0,78,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(0,0,156,63.1), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(53.6,29.7,1,1,0,0,0,53.6,29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.23,scaleY:1.23,x:53.7},3,cjs.Ease.get(-1)).to({regX:53.5,scaleX:1.46,scaleY:1.46,x:53.5},3,cjs.Ease.get(1)).to({scaleX:1.23,scaleY:1.23,x:53.6,y:29.8},3,cjs.Ease.get(-1)).to({regX:53.6,scaleX:1,scaleY:1,y:29.7},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,0,193,64.1);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 61
	this.instance = new lib.Символ61();
	this.instance.parent = this;
	this.instance.setTransform(1220.4,14,1,1,0,0,0,107.7,12.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({x:472.4,y:13.5},8).to({x:485.2},2).wait(56).to({y:45.3,alpha:0},4).wait(1));

	// Символ 60
	this.instance_1 = new lib.Символ60();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1337.6,13.2,1,1,0,0,0,8.3,13.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({x:589.6,y:12.7},8).to({x:602.4},2).wait(58).to({y:44.5,alpha:0},4).wait(1));

	// Символ 59
	this.instance_2 = new lib.Символ59();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1074.4,13.5,1,1,0,0,0,19.9,12.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({x:326.4,y:13},8).to({x:339.2},2).wait(60).to({y:44.8,alpha:0},4).wait(1));

	// Символ 58
	this.instance_3 = new lib.Символ58();
	this.instance_3.parent = this;
	this.instance_3.setTransform(996.7,13.5,1,1,0,0,0,40.9,12.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({x:248.7,y:13},8).to({x:261.5},2).wait(62).to({y:44.8,alpha:0},4).wait(1));

	// Символ 57
	this.instance_4 = new lib.Символ57();
	this.instance_4.parent = this;
	this.instance_4.setTransform(876.3,14.3,1,1,0,0,0,62.5,12.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({x:128.3,y:13.8},8).to({x:141.1},2).wait(64).to({y:45.6,alpha:0},4).wait(1));

	// Символ 56
	this.instance_5 = new lib.Символ56();
	this.instance_5.parent = this;
	this.instance_5.setTransform(767,14.2,1,1,0,0,0,29.8,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:19,y:13.7},8).to({x:31.8},2).wait(66).to({y:45.5,alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(737.2,1.5,59.6,25.4);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.guitar_1();
	this.instance.parent = this;
	this.instance.setTransform(43,92.5,0.653,0.653,0,0,0,-17.6,38.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-17.4,scaleX:0.65,scaleY:0.65,rotation:7.3,x:43.3,y:92.6},7,cjs.Ease.get(-1)).to({regX:-17.5,scaleX:0.65,scaleY:0.65,rotation:15,x:43.1,y:92.5},7,cjs.Ease.get(1)).to({regY:38.3,scaleX:0.65,scaleY:0.65,rotation:7.8,x:43.2,y:92.6},7,cjs.Ease.get(-1)).to({regX:-17.6,regY:38.2,scaleX:0.65,scaleY:0.65,rotation:0,x:43,y:92.5},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109,135.1);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ring_1();
	this.instance.parent = this;
	this.instance.setTransform(52,51.7,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF0000","#990000"],[0,1],0,0,0,0,0,47.6).s().p("AlNFOQiLiKAAjEQAAjDCLiLQCKiKDDAAQDDAACLCKQCLCLAADDQAADEiLCKQiLCLjDAAQjDAAiKiLg");
	this.shape.setTransform(54,50.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(0,0,104,103.3), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(54.5,67.5,1,1,0,0,0,54.5,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ring
	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43,92.5,1,1,0,0,0,52,51.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-9,0,118,144.2), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.boot_1();
	this.instance.parent = this;
	this.instance.setTransform(50,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(0,0,100,122), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 11
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(96,58,1,1,0,0,0,18.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:18.6,regY:14.1,scaleX:1,scaleY:1,rotation:-14.8,x:89.6,y:50},7,cjs.Ease.get(-1)).to({regX:18.4,regY:14,scaleX:1,scaleY:1,rotation:-30,x:83,y:42},7,cjs.Ease.get(1)).to({regX:18.5,regY:14.1,scaleX:1,scaleY:1,rotation:-15.8,x:89.1,y:49.5},7,cjs.Ease.get(-1)).to({regY:14,scaleX:1,scaleY:1,rotation:0,x:96,y:58},8,cjs.Ease.get(1)).wait(1));

	// Символ 13
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(86.5,36.5,1,1,0,0,0,9,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:9.1,regY:21.4,scaleX:1,scaleY:1,rotation:14.8,x:80.9,y:31.5},7,cjs.Ease.get(-1)).to({regY:21.5,scaleX:1,scaleY:1,rotation:30,x:75.1,y:26.6},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:15.8,x:80.4,y:31.2},7,cjs.Ease.get(-1)).to({regX:9,scaleX:1,scaleY:1,rotation:0,x:86.5,y:36.5},8,cjs.Ease.get(1)).wait(1));

	// Символ 5
	this.instance_2 = new lib.Символ5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(41.5,16,1,1,0,0,0,41.5,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-3.3,x:40.4,y:13.6},7,cjs.Ease.get(-1)).to({regY:16.1,rotation:-6.9,x:39.3,y:11.3},7,cjs.Ease.get(1)).to({rotation:-3.6,x:40.4,y:13.5},7,cjs.Ease.get(-1)).to({regY:16,rotation:0,x:41.5,y:16},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114.5,72);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(47.5,50,1,1,0,0,0,47.5,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,95,100), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(10,16,1,1,0,0,0,10,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:7.3,x:8.8,y:16.6},7,cjs.Ease.get(-1)).to({rotation:15,x:7.5,y:17.1},7,cjs.Ease.get(1)).to({rotation:7.8,x:8.7,y:16.7},7,cjs.Ease.get(-1)).to({rotation:0,x:10,y:16},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,32);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(57,27,1,1,0,0,0,57,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,114,54), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(52,18,1,1,0,0,0,52,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,104,36), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(20.5,24.5,1,1,0,0,0,20.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:7.3,x:21.9,y:23.4},12,cjs.Ease.get(-1)).to({rotation:15,x:23.3,y:22.2},12,cjs.Ease.get(1)).to({regX:20.4,rotation:7.1,x:21.8,y:23.5},13,cjs.Ease.get(-1)).to({regX:20.5,rotation:0,x:20.5,y:24.5},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41,49);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(111.3,34.8,1,1,0,0,0,10,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(101.3,18.8,20,32), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(47.5,50,1,1,0,0,0,47.5,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.5,x:48.8,y:46},13,cjs.Ease.get(-1)).to({rotation:-9.2,x:49.9,y:41.8},11,cjs.Ease.get(1)).to({rotation:-5,x:48.9,y:45.6},13,cjs.Ease.get(-1)).to({rotation:0,x:47.5,y:50},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95,100);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(101.5,52.5,1,1,0,0,0,101.5,52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.3,x:99.1,y:56.9},14,cjs.Ease.get(-1)).to({rotation:5,x:96.6,y:61.2},15,cjs.Ease.get(1)).to({regY:52.6,rotation:2.5,x:98.8,y:57.3},15,cjs.Ease.get(-1)).to({regY:52.5,rotation:0,x:101.5,y:52.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,203,105);


(lib.cigan_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ65();
	this.instance.parent = this;
	this.instance.setTransform(-217,-24,1,1,0,0,0,67,78);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-22.3},3,cjs.Ease.get(-1)).to({y:-20},4,cjs.Ease.get(1)).to({y:-22},4,cjs.Ease.get(-1)).to({y:-24},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284,-102,134,156.1);


(lib.sprite150 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.копияshape149("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.992,1.992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite150, new cjs.Rectangle(-51.9,16.1,103.9,36.3), null);


(lib.sprite143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape142("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-199.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite143, new cjs.Rectangle(-95.8,-94.4,192.3,192.3), null);


(lib.sprite138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape137("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite138, new cjs.Rectangle(-106.5,-13.3,110.7,31.1), null);


(lib.sprite133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.shape132("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-3.4,0,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite133, new cjs.Rectangle(-117.4,-114,227.8,228), null);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(1));

	// Слой 1
	this.instance = new lib.cigan_1();
	this.instance.parent = this;
	this.instance.setTransform(85,298);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:148},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199,196,134,156.1);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(78,31.6,1,1,0,0,0,78,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(0,0,156,63.1), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(63.5,67.5,1,1,0,0,0,54.5,67.5);

	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(52,92.5,1,1,0,0,0,52,51.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,x:63.5,y:67.5}}]}).to({state:[{t:this.instance,p:{scaleX:1.046,scaleY:1.046,x:63.6,y:67.6}}]},1).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,x:63.5,y:67.5}}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ63();
	this.instance_2.parent = this;
	this.instance_2.setTransform(51.5,93.5,1.128,1.128,0,0,0,54.8,54.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118,144.2);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(78,31.6,1,1,0,0,0,78,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6.2,y:31.7},2).to({rotation:-5.7,x:78.1},2).to({rotation:6.5,x:78,y:31.6},2).to({rotation:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156,63.1);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(37.8,46.1,0.753,0.753,0,0,0,50.1,61.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:61.1,rotation:10.6,x:37.9},3,cjs.Ease.get(-1)).to({regY:61.2,rotation:25,x:37.8,y:46.2},4,cjs.Ease.get(1)).to({regX:50.2,regY:61.1,rotation:13.3,x:38},7,cjs.Ease.get(-1)).to({regX:50.1,regY:61.2,rotation:0,x:37.8,y:46.1},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75.3,91.9);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(43.9,51.6,1,1,0,0,0,37.6,46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(52,51.6,1,1,0,0,0,52,51.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(0,0,104,103.3), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(95,25.5,1,1,0,0,0,54.5,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:13.6,rotation:4.3,y:28.7},9,cjs.Ease.get(-1)).to({regX:54.6,regY:13.5,rotation:9.2,x:95.1,y:32.1},10,cjs.Ease.get(1)).to({rotation:4.5,y:28.8},10,cjs.Ease.get(-1)).to({regX:54.5,rotation:0,x:95,y:25.5},10,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(95,25.5,1,1,0,0,0,54.5,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-10.3,x:94.3,y:41.3},9,cjs.Ease.get(-1)).to({regY:13.6,scaleX:1,scaleY:1,rotation:-22,x:93.6,y:59},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-10.8,x:94.3,y:42.3},10,cjs.Ease.get(-1)).to({regY:13.5,scaleX:1,scaleY:1,rotation:0,x:95,y:25.5},10,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(251.5,84.6,1,1,0,0,0,101.5,52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

	// Слой 1
	this.instance_3 = new lib.Анимация1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(102.5,92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,353,185);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(52,18,1,1,0,0,0,52,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-7,x:49.5,y:12},9,cjs.Ease.get(-1)).to({rotation:-15,x:46.6,y:5.2},10,cjs.Ease.get(1)).to({regY:18.1,rotation:-7.3,x:49.4,y:11.8},10,cjs.Ease.get(-1)).to({regY:18,rotation:0,x:52,y:18},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,36);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(57,27,1,1,0,0,0,57,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,114,54), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(57,27,1,1,0,0,0,57,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,skewY:3.5,x:57.1,y:30.6},6,cjs.Ease.get(-1)).to({scaleX:1.01,skewY:7,x:57,y:34},6,cjs.Ease.get(1)).to({scaleX:1,skewY:3.8,x:57.1,y:30.8},5,cjs.Ease.get(-1)).to({scaleX:1,skewY:0,x:57,y:27},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114,54);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(8.9,72.2,1,1,-8,0,0,4.5,14.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.6,x:4.2,y:72.8},7,cjs.Ease.get(-1)).to({regY:14,rotation:15,x:-1,y:73.3},8,cjs.Ease.get(1)).to({rotation:3.5,x:4,y:72.8},7,cjs.Ease.get(-1)).to({regY:14.1,rotation:-8,x:8.9,y:72.2},7,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(151,175,1,1,0,0,0,52,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// Слой 2
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(19,11.6,1,1,-6.5,0,0,27.5,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-6.3,x:16.6,y:11.7},7,cjs.Ease.get(-1)).to({rotation:-6.5,x:13.8,y:11.6},8,cjs.Ease.get(1)).to({rotation:-6.3,x:16.5,y:11.7},7,cjs.Ease.get(-1)).to({rotation:-6.5,x:19,y:11.6},7,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ28();
	this.instance_3.parent = this;
	this.instance_3.setTransform(102.5,92.5,1,1,0,0,0,102.5,92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({skewX:-1,x:100.9,y:92.6},7,cjs.Ease.get(-1)).to({scaleY:1,skewX:-2.2,x:99,y:92.5},8,cjs.Ease.get(1)).to({scaleY:1,skewX:-1,x:100.8,y:92.6},7,cjs.Ease.get(-1)).to({skewX:0,x:102.5,y:92.5},7,cjs.Ease.get(1)).wait(1));

	// Слой 5
	this.instance_4 = new lib.Символ17();
	this.instance_4.parent = this;
	this.instance_4.setTransform(263.3,77.1,1,1,0,0,0,57,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.2,-33.1,366.2,226.2);


(lib.sprite152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.sprite150();
	this.instance.parent = this;
	this.instance.setTransform(0.2,-40.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,scaleY:1.01,y:-42.5},2).to({scaleX:0.93,scaleY:1.08,y:-49.4},2).to({scaleX:0.83,scaleY:1.18,y:-60.8},2).to({scaleX:0.89,scaleY:1.11,x:0.1,y:-65.4},1).to({scaleX:0.94,scaleY:1.07,y:-68.6},1).to({scaleX:0.97,scaleY:1.03,x:0.2,y:-70.7},1).to({scaleX:1,scaleY:1,y:-72.6},2).to({scaleX:1,scaleY:1,y:-72.8},1).to({scaleX:1,scaleY:1,y:-72.5},1).to({scaleX:0.99,scaleY:1.01,y:-71.5},1).to({scaleX:0.97,scaleY:1.03,y:-69.6},1).to({scaleX:0.94,scaleY:1.06,y:-66.5},1).to({scaleX:0.89,scaleY:1.1,y:-62.2},1).to({scaleX:0.79,scaleY:1.2,y:-51.9},2).to({scaleX:1,scaleY:1,y:-40.8},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.7,-24.8,103.9,36.4);


(lib.sprite139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite138();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite139, new cjs.Rectangle(-106.5,-13.3,110.7,31.1), null);


(lib.sprite134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite133();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-178.2},49).to({rotation:-181.8},1).to({rotation:-360},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.9,-115.5,230.8,231);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(52,51.6,1,1,0,0,0,52,51.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(0,0,104,103.3), null);


(lib.Символ14копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bo
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(266.5,181.5,1,1,0,0,0,102.5,92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 3
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(334.5,270,1,1,0,0,0,47.5,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 13
	this.instance_2 = new lib.Символ27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(390.7,208.1,1,1,0,0,0,57.2,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 7
	this.instance_3 = new lib.Символ7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(166,175.5,1,1,0,0,0,20.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14копия, new cjs.Rectangle(145.5,55.9,371.5,264.2), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bo
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(266.5,181.5,1,1,0,0,0,102.5,92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 3
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(334.5,270,1,1,0,0,0,47.5,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 13
	this.instance_2 = new lib.Символ27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(390.7,208.1,1,1,0,0,0,57.2,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 7
	this.instance_3 = new lib.Символ7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(166,175.5,1,1,0,0,0,20.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(145.5,55.9,371.5,264.2), null);


(lib.U = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.arrow = new lib.sprite152();
	this.arrow.parent = this;
	this.arrow.setTransform(6.4,23,0.228,0.342);
	this.arrow.shadow = new cjs.Shadow("#FF9900",0,0,11);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

}).prototype = getMCSymbolPrototype(lib.U, new cjs.Rectangle(-17.5,2.5,51,40), null);


(lib.sprite140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.sprite139();
	this.instance.parent = this;
	this.instance.setTransform(0,-143.5,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.sprite139();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-148.7,-2.8,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1 - копия
	this.instance_2 = new lib.sprite139();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,147,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.instance_3 = new lib.sprite139();
	this.instance_3.parent = this;
	this.instance_3.setTransform(144.8,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite140, new cjs.Rectangle(-152.8,-147.6,301.7,298.7), null);


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14копия();
	this.instance.parent = this;
	this.instance.setTransform(166,133.7,1,1,0,0,0,311.5,189.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ74, new cjs.Rectangle(0,0,371.5,264.2), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(173.5,133.7,1,1,0,0,0,311.5,189.5);

	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(168.5,152.7,1,1,0,0,0,168.5,64.5);
	this.instance_1.alpha = 0.602;
	this.instance_1.filters = [new cjs.BlurFilter(44, 44, 1)];
	this.instance_1.cache(-2,-2,341,133);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-22,0,401,264.2), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(152.6,44.1,1,1,0,0,0,69.5,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Слой 1
	this.instance_1 = new lib.Символ47();
	this.instance_1.parent = this;
	this.instance_1.setTransform(189.5,132.1,1,1,0,0,0,189.5,132.1);
	this.instance_1.alpha = 0.84;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.68},4,cjs.Ease.get(-1)).to({alpha:0.48},5,cjs.Ease.get(1)).to({alpha:0.66},5,cjs.Ease.get(-1)).to({alpha:0.84},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,0,401,264.2);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(52,51.6,1,1,0,0,0,52,51.6);

	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(52,51.6,1,1,0,0,0,52,51.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance,p:{scaleX:1.106,scaleY:1.106}}]},1).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ63();
	this.instance_2.parent = this;
	this.instance_2.setTransform(51.3,51,1.173,1.173,0,0,0,54.6,54.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,103.3);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Символ 16
	this.instance = new lib.U();
	this.instance.parent = this;
	this.instance.setTransform(705.9,265.5,1.094,1.094,0,-90,90,6.5,11.6);

	this.instance_1 = new lib.U();
	this.instance_1.parent = this;
	this.instance_1.setTransform(794.9,265.5,1.094,1.094,90,0,0,6.5,11.5);

	this.instance_2 = new lib.U();
	this.instance_2.parent = this;
	this.instance_2.setTransform(750.4,310.1,1.094,1.094,0,180,0,6.4,11.4);

	this.instance_3 = new lib.U();
	this.instance_3.parent = this;
	this.instance_3.setTransform(750.4,220.9,1.094,1.094,0,0,0,6.4,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).wait(1));

	// Символ 14
	this.instance_4 = new lib.Символ74();
	this.instance_4.parent = this;
	this.instance_4.setTransform(723.4,306,1,1,0,0,0,185.8,132.1);

	this.instance_5 = new lib.Символ64();
	this.instance_5.parent = this;
	this.instance_5.setTransform(773.2,309,1,1,0,0,0,85,99);

	this.instance_6 = new lib.Символ14();
	this.instance_6.parent = this;
	this.instance_6.setTransform(703.6,307.5,1,1,0,0,0,311.5,189.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

	// Слой 12
	this.instance_7 = new lib.Символ37();
	this.instance_7.parent = this;
	this.instance_7.setTransform(805.4,238.8,0.682,0.682,-15,0,0,37.6,46.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).wait(1));

	// boot
	this.instance_8 = new lib.Символ46();
	this.instance_8.parent = this;
	this.instance_8.setTransform(719.6,306,1,1,0,0,0,189.5,132.1);

	this.instance_9 = new lib.Символ48();
	this.instance_9.parent = this;
	this.instance_9.setTransform(798.2,233,1,1,0,0,0,42.8,45.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

	// Символ 16
	this.instance_10 = new lib.Символ16();
	this.instance_10.parent = this;
	this.instance_10.setTransform(698.6,326.6,1,1,0,0,0,168.5,64.5);
	this.instance_10.alpha = 0.602;
	this.instance_10.filters = [new cjs.BlurFilter(44, 44, 1)];
	this.instance_10.cache(-2,-2,341,133);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(3));

	// Символ 30
	this.instance_11 = new lib.Символ30();
	this.instance_11.parent = this;
	this.instance_11.setTransform(710.2,205.5,1.096,1.096,0,0,0,354,228.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(322.1,-45,776.2,501);


(lib.sprite141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite140();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:77.5},17).to({scaleX:1,scaleY:1,rotation:177.7,y:-0.1},22).to({rotation:182.3},1).to({scaleX:1,scaleY:1,rotation:259.7,x:0.1,y:0},17).to({scaleX:1,scaleY:1,rotation:360,x:0},22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.8,-147.6,301.7,298.7);


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Слой 1
	this.fon1 = new lib.Символ15();
	this.fon1.parent = this;
	this.fon1.setTransform(368,273.5,1,1,0,0,0,354,228.5);

	this.timeline.addTween(cjs.Tween.get(this.fon1).to({scaleX:1.21,scaleY:1.21},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(336,0,776.2,501);


(lib.sprite144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(22.5,1,1).p("AWJAAQAAJMmfGeQmeGfpMAAQpLAAmemfQmfmeAApMQAApLGfmeQGemfJLAAQJMAAGeGfQGfGeAAJLg");
	this.shape.setTransform(-2.2,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(27));

	// Layer 8
	this.instance = new lib.sprite143();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.251,0.251);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.47,scaleY:0.47},3).to({scaleX:0.65,scaleY:0.65},3).to({scaleX:0.79,scaleY:0.79},3).to({scaleX:0.9,scaleY:0.9},3).to({scaleX:0.97,scaleY:0.97},3).to({scaleX:0.38,scaleY:0.38},4).to({scaleX:0.25,scaleY:0.25},7).wait(1));

	// Layer 6
	this.instance_1 = new lib.sprite141();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.2,2.099,2.099);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.88,scaleY:1.88,y:0.1},2).to({scaleX:1.69,scaleY:1.69},2).to({scaleX:1.52,scaleY:1.52},2).to({scaleX:1.37,scaleY:1.37},2).to({scaleX:1.25,scaleY:1.25},2).to({scaleX:1.15,scaleY:1.15},2).to({scaleX:1.08,scaleY:1.08},2).to({scaleX:1.03,scaleY:1.03,y:0},2).to({scaleX:1.01,scaleY:1.01},1).to({scaleX:1,scaleY:1},2).to({scaleX:2.1,scaleY:2.1,y:0.2},7).wait(1));

	// Layer 3
	this.instance_2 = new lib.sprite136();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,5.843,5.843);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:5.41,scaleY:5.41},1).to({scaleX:4.99,scaleY:4.99},1).to({scaleX:4.6,scaleY:4.6},1).to({scaleX:4.23,scaleY:4.23},1).to({scaleX:3.89,scaleY:3.89},1).to({scaleX:3.57,scaleY:3.57},1).to({scaleX:3.28,scaleY:3.28},1).to({scaleX:3,scaleY:3},1).to({scaleX:2.75,scaleY:2.75},1).to({scaleX:2.53,scaleY:2.53},1).to({scaleX:2.33,scaleY:2.33},1).to({scaleX:2.15,scaleY:2.15},1).to({scaleX:2,scaleY:2},1).to({scaleX:1.87,scaleY:1.87},1).to({scaleX:1.76,scaleY:1.76},1).to({scaleX:1.68,scaleY:1.68},1).to({scaleX:1.62,scaleY:1.62},1).to({scaleX:1.57,scaleY:1.57},2).to({scaleX:5.84,scaleY:5.84},7).wait(1));

	// Layer 1
	this.instance_3 = new lib.sprite134();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1,0.2,1.594,1.594);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.53,scaleY:1.53},1).to({scaleX:1.37,scaleY:1.37},3).to({scaleX:1.2,scaleY:1.2},4).to({scaleX:1.08,scaleY:1.08},4).to({scaleX:1.03,scaleY:1.03},3).to({scaleX:1.01,scaleY:1.01},1).to({scaleX:1.01,scaleY:1.01},1).to({scaleX:1,scaleY:1},2).to({scaleX:1.59,scaleY:1.59},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320.8,-309.7,633.4,627.1);


(lib.Символ41_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.sprite144();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49.5,47.8,0.154,0.154);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41_1, new cjs.Rectangle(0,0,97.8,96.8), null);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(79.9,2.9,1,1,0,0,0,37.6,46);

	this.instance_1 = new lib.Символ41_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.7,24.4,0.504,0.504,0,0,0,48.9,48.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41_1();
	this.instance.parent = this;
	this.instance.setTransform(24.7,24.4,0.504,0.504,0,0,0,48.9,48.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-74.2},7,cjs.Ease.get(-1)).to({x:-215.4},10,cjs.Ease.get(1)).to({regX:48.8,x:-95.4},9,cjs.Ease.get(-1)).to({regX:48.9,x:24.7},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.2,48.8);


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ72();
	this.instance.parent = this;
	this.instance.setTransform(24.7,74.4,1,1,0,0,0,24.7,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:9.8},6,cjs.Ease.get(-1)).to({y:-65.6},7,cjs.Ease.get(1)).to({y:-1},6,cjs.Ease.get(-1)).to({y:74.4},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,50,49.2,48.8);


(lib.Символ76 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ73();
	this.instance.parent = this;
	this.instance.setTransform(24.7,-25.6,1,1,0,0,0,24.7,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.2,48.8);


// stage content:
(lib.horse_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		
		this.addEventListener("tick", fl_CustomMouseCursor1.bind(this));
		function fl_CustomMouseCursor1() {
		this.fon.x = -stage.mouseX / 10/window.devicePixelRatio;
		}
		
		
		
		this.button.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
		this.fon.fon1.gotoAndStop(1);
		this.movieClip_2.gotoAndStop(2);
		stage.canvas.style.cursor = "default";
		}
		
		
		this.button.addEventListener("mouseout", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
		this.fon.fon1.gotoAndStop(0);
			this.movieClip_2.gotoAndStop(1);
		}
		
		this.button2.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_0.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_0()
		{
		this.fon.fon1.gotoAndStop(2);
			this.movieClip_2.gotoAndStop(0);
		}
		
		
		this.button2.addEventListener("mouseout", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
		this.fon.fon1.gotoAndStop(0);
			this.movieClip_2.gotoAndStop(1);
		}
		/* Пользовательский курсор мыши
		Заменяет курсор мыши по умолчанию на указанный экземпляр символа.
		*/
		stage.canvas.style.cursor = "none";
		this.movieClip_2.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.movieClip_2.x = stage.mouseX/window.devicePixelRatio;
			this.movieClip_2.y = stage.mouseY/window.devicePixelRatio;
		}
		//Чтобы восстановить курсор мыши по умолчанию, раскомментируйте следующие строки:
		//this.removeEventListener("tick", fl_CustomMouseCursor.bind(this));
		//stage.removeChild(movieClip_2);
		//stage.canvas.style.cursor = "default";
		
		stage.canvas.addEventListener("mouseover", fl_mouseovery.bind(this));
		function fl_mouseovery()
		{
		this.fon.gotoAndPlay(1);
		this.pop.gotoAndStop(1);
		this.movieClip_2.gotoAndStop(1);
		}
		
		stage.canvas.addEventListener("mouseout", fl_mouseouty.bind(this));
		
		function fl_mouseouty()
		{
		this.fon.gotoAndPlay(0);
		this.pop.gotoAndStop(1);
		this.movieClip_2.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.button = new lib.Символ43();
	this.button.parent = this;
	this.button.setTransform(84,158,1,1,0,0,0,59,72);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Символ43(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// boot
	this.button2 = new lib.Символ42();
	this.button2.parent = this;
	this.button2.setTransform(565.1,178.5,1,1,0,0,0,52,51.6);
	new cjs.ButtonHelper(this.button2, 0, 1, 2, false, new lib.Символ42(), 3);

	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(564.7,268.2,0.57,0.57,0,0,0,53.6,29.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.button2}]}).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(74.1,268.3,0.603,0.603,0,0,0,78.1,31.6);

	this.instance_2 = new lib.Символ38();
	this.instance_2.parent = this;
	this.instance_2.setTransform(320.1,25.1,0.786,0.786,0,0,0,309.2,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Слой 2
	this.pop = new lib.Символ76();
	this.pop.parent = this;
	this.pop.setTransform(440.4,172,1,1,0,0,0,24.7,11.6);

	this.movieClip_2 = new lib.Символ75();
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(777.5,134.8,1,1,0,0,0,24.7,24.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_2},{t:this.pop}]}).wait(1));

	// vs
	this.fon = new lib.Символ78();
	this.fon.parent = this;
	this.fon.setTransform(18.8,63.5,1,1,0,0,0,388.1,250.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(286.7,-34.5,776.2,501);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/body.png?1480942237766", id:"body"},
		{src:"images/boot.png?1480942237766", id:"boot"},
		{src:"images/cigan.png?1480942237766", id:"cigan"},
		{src:"images/fon.jpg?1480942237766", id:"fon"},
		{src:"images/guitar.png?1480942237766", id:"guitar"},
		{src:"images/hair.png?1480942237766", id:"hair"},
		{src:"images/hand.png?1480942237766", id:"hand"},
		{src:"images/head.png?1480942237766", id:"head"},
		{src:"images/kist.png?1480942237766", id:"kist"},
		{src:"images/kopito.png?1480942237766", id:"kopito"},
		{src:"images/l9wka.png?1480942237766", id:"l9wka"},
		{src:"images/leg.png?1480942237766", id:"leg"},
		{src:"images/noga3.png?1480942237766", id:"noga3"},
		{src:"images/noga4.png?1480942237766", id:"noga4"},
		{src:"images/nogi.png?1480942237766", id:"nogi"},
		{src:"images/ring.png?1480942237766", id:"ring"},
		{src:"images/ruuuka.png?1480942237766", id:"ruuuka"},
		{src:"images/tail.png?1480942237766", id:"tail"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;