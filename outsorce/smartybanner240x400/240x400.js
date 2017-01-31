(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,31);


(lib.tovar = function() {
	this.initialize(img.tovar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,176);// helper functions:

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


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF2F6F").s().p("AD0BPIAAh8IAcgEIALgBQALAAAJADQAKAEAGAGQAGAHAEAJQADAKAAAKQAAAKgDAKQgDAIgFAHQgFAHgIADQgHAEgLAAQgFAAgFgBIgJgEIAAAkgAEPgaIAAAwIAGACIAIABQAKAAAFgGQAFgHAAgMQAAgGgCgFQgBgFgDgEQgDgDgEgCQgEgCgGAAgAAXAiQgGgHgDgKQgDgJAAgMQAAgSAGgOQAGgNAKgKQAFgFAGgDIAOgHQAPgEASAAIABAVQgJABgIABQgIACgGADQgHADgFAFQgFAGgCAGIAIgCIAHAAQAMAAAIACQAJADAFAGQAFAGACAGQADAIAAAHQAAAHgDAIQgDAIgFAFQgFAHgIADIgJAEIgLABQgWgBgMgOgAAugLIgHACIAAACIgBADIABALIADAKQADAEADADQAEACAFAAQAFAAADgCIAFgEQACgEABgDIABgHQAAgEgBgDQgBgDgDgCQgEgGgLAAgAGXAuIAAgmIgcAAIAAAmIgbAAIAAheIAbAAIAAAjIAcAAIAAgjIAbAAIAABegACiAuIAAheIBDAAIAAAXIgoAAIAABHgAgnAuIAAgcIg2AAIAAgTIAXgmIAQgUQAIgLAIgHIAZAAIAABKIANAAIAAAVIgNAAIAAAcgAg2gZQgIALgFALIAcAAIAAgqgAitAuQABgNAEgOIAIgcQAFgNAGgMQAGgNAHgIIg3AAIAAgXIBYAAIAAAUIgNARQgHALgGAOQgGAPgFAPQgEAQgCAQgAkqAuIAAhZQgFAEgHADIgNAFIgIgVIAWgLIAUgOIASAAIAAB7gAmQAuIAAhZQgFAEgHADIgNAFIgIgVIAWgLIAUgOIASAAIAAB7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-43.3,-7.9,86.8,15.9), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EF2F6F").ss(2,1,1).p("AlCAAIKFAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-33.3,-1,66.6,2), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#767B89").s().p("ACwA6IAAhZIAdgEQAIAAAGADQAHACAFAFQAEAEADAHQACAHAAAHQAAAIgCAGQgCAHgEAEQgDAFgGADQgFADgIAAIgHgBIgHgDIAAAagADEgSIAAAiIAFACIAFABQAHAAAEgFQADgEAAgJIgBgIIgDgGIgFgEQgDgBgEAAgAjpAjIgHgCIgFgCIAEgQIAJADQAFACAIAAIAIgBIAFgDQAEgDAAgGQAAgEgBgCIgEgDIgHgCIgPgBIAAgPIAOgBIAFgBQACgBACgDIABgFIgBgEIgDgDIgEgCIgEgBQgGAAgEACQgFABgEADIgHgOIALgGIAHgBIAIgBQAIAAAGACQAGACAEADQAEADABAFQACAFAAAFQAAAGgDAEQgDAFgFADQAEABACADQADACACADIADAFIABAHQAAAHgCAFQgDAFgEAEQgEAEgHACIgQACgAAOASIANgBQAGgBAFgCQAEgCAEgEQADgEABgFIgFABIgGABQgIAAgHgBQgGgCgDgEQgEgEgCgFQgCgFAAgGIACgLQACgGADgEQAEgEAGgDIAGgDIAIAAQARAAAIAKQAEAFADAIQACAHAAAKIgBAMIgCAJIgFAJQgCAFgEADIgIAGIgKAEQgFACgGAAQgHACgHAAgAAhgoQgCABgCADIgCAEIgBAFQAAAHAEADIAEADIAHABIAGgBIAFgBIAAgMIgDgIQgBgDgDgBQgDgCgDAAQgEAAgCABgAg7ASIAOgBQAFgBAFgCQAFgCADgEQADgEACgFIgGABIgGABQgIAAgGgBQgHgCgDgEQgEgEgCgFQgCgFAAgGQAAgFACgGQACgGAEgEQADgEAGgDIAGgDIAIAAQARAAAIAKQAFAFACAIQACAHAAAKIgBAMIgCAJIgFAJQgCAFgEADQgDADgEADIgKAEQgGACgGAAQgHACgHAAgAgogoQgCABgCADIgCAEIgBAFQAAAHAEADIAEADIAHABIAGgBIAFgBIAAgMIgCgIIgFgEQgCgCgEAAQgEAAgCABgAEnAiIAAgbIgVAAIAAAbIgTAAIAAhDIATAAIAAAZIAVAAIAAgZIATAAIAABDgAB1AiIAAhDIAxAAIAAAQIgdAAIAAAzgAhmAiIAAgUIgnAAIAAgOIAcgqIAMgNIASAAIAAA2IAKAAIAAAPIgKAAIAAAUgAhwgRIgKAQIAUAAIAAgegAkhAiIAAhAIgJAFIgJAEIgGgPIAQgIIAOgLIAOAAIAABZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-31.3,-5.8,62.8,11.6), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF2F6F").s().p("AD5A8IgEgEIgBgHQAAgJAFgEQAFgEAGgBQAHABAFAEQAFAEAAAJIgBAHQgBACgDACQgFAFgHAAQgGAAgFgFgACbA9QgJgFgGgIQgGgJgDgLQgDgMAAgQQAAgPADgMIAEgLIAGgJIAGgIIAIgFIAJgDIAJgBQALAAAIAEQAIAFAGAHQAGAJADAMQADAMAAAPQAAAfgMARQgGAIgIAFQgIAEgLAAQgKAAgIgEgAClgmQgDADgCAFQgDAGAAAIIAAAhQAAAHADAGQACAGADADQADADAFAAQAFAAAEgDQADgDACgGIADgNIAAghQgBgIgCgGQgCgFgDgDQgEgDgFAAQgFAAgDADgAA1A9QgJgFgGgIQgGgJgDgLQgDgMAAgQQAAgPADgMIAEgLIAGgJIAGgIIAIgFIAJgDIAJgBQALAAAIAEQAIAFAGAHQAGAJADAMQADAMAAAPQAAAfgMARQgGAIgIAFQgIAEgLAAQgKAAgIgEgAA/gmQgDADgCAFQgDAGAAAIIAAAhQAAAHADAGQACAGADADQADADAFAAQAFAAAEgDQADgDACgGIADgNIAAghQgBgIgCgGQgCgFgDgDQgEgDgFAAQgFAAgDADgAiXBBIgTgEIgGgDIAFgVIAMADQAHACAKAAQAHABAEgCQAFgBACgCQAGgGAAgGQAAgGgCgEQgDgEgFgCQgGgDgKgCQgKgBgOAAIAFhBIBDAAIAAAWIgtAAIgBAYQAaABAMAKQANAKAAATQAAAIgDAIQgDAHgGAFQgGAGgKADQgNADgIAAgAktA9IAAh4QAKgCAKgBIASgBQAQAAAOAEQANAEAJAHQAJAIAFAMIAEAOIABAOIgBAPIgEAOQgFAMgJAIQgJAHgOAEIgOADIghABQgKgBgKgCgAkRgmIAABOIAFAAIAGAAQALAAAHgCQAIgEAFgEQAFgGADgIQACgGAAgKQAAgSgJgLQgKgKgVAAgAhHA+IAAgJQAAgJADgGQACgIAFgGQAEgHAGgEIAagaIAFgHIABgHQAAgHgEgEQgFgDgHAAIgJABIgHAEIgGAEIgEADIgNgSQAHgIALgEIALgEIAMgBQALAAAIADQAHACAGAEQAEAFACAHQADAGAAAIQAAAHgDAHQgDAGgDAGIgKAKIgcAcIgCAFIA0AAIAAAWgAD4AXIAAgEIAAgEIABgKIADgGIAFgGIANgPQAEgDAAgGQAAgEgEgDQgDgEgHABQgGAAgGABQgGACgHAEIgHgVQAHgFAJgBQAKgDAJAAQAMAAAHADQAIADAEAEQAEAGACAFQACAGAAAFQAAAEgCAFIgEAIIgQAQIgEAFIgDAGIgBAGIAAAFg");
	this.shape.setTransform(74.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#767B89").s().p("AH3BAIgLgDQgMgFgIgHIgIgJIgFgMIgEgNIgBgPQAAgPAFgMQAFgMAIgJQAJgIALgEIAMgDIAMgBQANAAALAEIALAFIAJAHQAIAJAFAMQAFAMAAAPIgBAPQgBAHgDAGQgFAMgIAJQgIAHgMAFQgLAEgNAAIgNgBgAH2glQgGAEgFAFQgEAFgCAIQgCAHAAAIQAAAJACAHQACAIAEAGQAFAEAGAEQAGACAIAAQAIAAAGgCQAGgEAEgEQAFgGACgIQACgHAAgJQAAgIgCgHQgCgIgFgGQgEgEgGgEQgGgDgIAAQgIAAgGADgAoRBAIgMgDQgLgFgJgHIgHgJIgGgMIgEgNIgBgPQAAgPAFgMQAFgMAJgJQAIgIAMgEIALgDIAMgBQANAAALAEIALAFIAJAHQAJAJAFAMQAEAMAAAPIgBAPQgBAHgCAGQgFAMgIAJQgJAHgLAFQgMAEgNAAIgMgBgAoTglQgGAEgEAFQgEAFgCAIQgDAHAAAIQAAAJADAHQACAIAEAGQAEAEAGAEQAGACAIAAQAIAAAGgCQAGgEAFgEQAEgGACgIQACgHAAgJQAAgIgCgHQgCgIgEgGQgFgEgGgEQgGgDgIAAQgIAAgGADgAACA/QgJgBgKgDIAAh4IAbAAIAAApIAIAAQAQAAALACQALADAIAFQAHAGAEAHQADAHAAAMQAAAKgEAIQgEAIgHAFQgQALgbAAgAAKADIAAAlIAFAAIARAAIAJgDQAEgDACgDQACgEAAgFQAAgGgCgDQgCgEgFgDIgKgCIgOgBIgDAAgAKtA+QgMgVgOgVIgegmIAABQIgcAAIAAh7IAXAAIANAOIAsA7IAAhJIAbAAIAAB7gAGaA+IgUgbIgNgNIgNgMIAAA0IgcAAIAAh7IAcAAIAAAvIArgvIAhAAIg1A5QAKAIATAUQAKAMARAagAEYA+IAAh7IAcAAIAAB7gADjA+QgMgVgOgVIgegmIAABQIgbAAIAAh7IAXAAIANAOIArA7IAAhJIAcAAIAAB7gAjIA+IAAh7IAcAAIAABkIAjAAIAAhkIAcAAIAABkIAjAAIAAhkIAcAAIAAB7gAk1A+IAAh7IBUAAIAAAXIg4AAIAAAZIAyAAIAAAWIgyAAIAAAeIA8AAIAAAXgAluA+IAAgpIgXABQgLAAgJgCQgKgCgGgFIgGgHIgEgHQgEgIAAgOIAAgmIAcAAIAAAlQAAAHACAEQACAFADADQAEADAEAAIALABIATgBIAAg7IAcAAIAAB7gApvA+IgMgVQgJgNgFgFIgOASIgMAVIggAAQAHgOALgQIAYggIgpg9IAiAAIAYAkIAYgkIAgAAIgoA8IAaAjIAQAcg");
	this.shape_1.setTransform(-33.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-104.6,-6.5,209.2,13), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF2F6F").s().p("AB6A/IgKgCIgGgDIAFgWIAMAEQAHACALABQAGgBAFgBQAFgBACgDQAGgEAAgIQAAgFgCgDQgCgEgEgBIgIgEIgVgBIAAgUIATAAIAHgDQADgBACgDQABgDAAgFQAAgEgBgCIgEgEIgFgCIgGgBQgIAAgGACQgHACgFADIgKgTIAPgIIAKgCIAMgBQALAAAIACQAIADAFAFQAFAEADAHQACAGAAAIQAAAIgEAGQgEAHgHAEQAFACADACQAEACADAEIAEAJQABAFAAAFQAAAJgDAIQgDAGgGAGQgGAFgJADQgOADgJAAgAAVA/IgJgCIgGgCIAFgXIAMAFQAHABAKABQAHgBAEgBQAFgBACgDQAGgFAAgGQAAgGgCgEQgDgDgFgDQgGgDgKgBQgKgCgOAAIAFhBIBDAAIAAAXIgtAAIgBAWQAaACAMALQANAJAAATQAAAIgDAIQgDAIgGAEQgGAGgKADQgNADgIAAgAhMA+QABgNADgOIAJgcQAFgMAGgNQAGgMAGgIIg2AAIAAgYIBXAAIAAAUIgMARQgHALgHAOQgGAOgEAQQgFAQgBAQgAieA+IAAhZQgFAFgHACIgNAGIgIgWIAWgLIATgOIATAAIAAB7g");
	this.shape.setTransform(-47.7,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#767B89").s().p("AB+BQIAAgiIhXAAIAAAiIgbAAIAAg5IASAAQAHgMAEgLQAEgLABgLQACgMABgNIAAgeIBTAAIAABkIAVAAIAAA5gABIgNIgFASQgDAJgEAJIAsAAIAAhNIgcAAgAjBBGIAAhVIAUgEIAHAAQAIAAAGACQAHADAEAEQAEAFADAFQACAHAAAHQAAAIgCAGIgFALQgEAEgFACQgGADgHAAIgHgBIgGgCIAAAZgAiugCIAAAgIAEACIAGAAQAGAAAEgEQADgEAAgJIgBgIIgDgGIgFgDQgDgBgDAAgAOvAsQgCgCgBgDIgCgHQAAgIAFgEQAFgFAHAAQAHAAAFAFQAFAEAAAIIgCAHQgBADgCACQgFAFgHAAQgHAAgFgFgAKqAYQANgBAHgFQADgDADgEQADgEABgFQADgIAEgZQABgOABggIBVAAIAAB7IgcAAIAAhkIgfAAIgBAZQgBAMgCALQgCAKgEAKQgEAKgHAIIgHAGQgEAEgFACIgMADQgGACgHAAgAJRAvQgKAAgLgDIAAh4IAmgDQAMAAAKACQAKABAHAFQAHAEAEAGIADAIIABAJQAAAIgDAGQgEAFgHAFQAMAEAEAIQAFAIAAAIQAAAUgPAKQgHAFgKACQgLADgOAAgAJXAYIAPABIAMgBQAFgBADgCQAEgCACgDQACgDAAgFQAAgIgGgDIgIgDIgdgBgAJXg4IAAAbIAZAAIAIgDIAEgEQABgDAAgEQAAgDgBgDQgCgDgCgBQgGgDgLAAgAhQAvIAAgaIgUAAIAAAaIgSAAIAAhAIASAAIAAAXIAUAAIAAgXIASAAIAABAgAj5AvIAAhAIAuAAIAAAPIgbAAIAAAxgANDAuIAAh7IBUAAIAAAXIg4AAIAAAZIAyAAIAAAXIgyAAIAAAdIA8AAIAAAXgAHPAuIAAh7IBUAAIAAAXIg4AAIAAAZIAyAAIAAAXIgyAAIAAAdIA8AAIAAAXgAEYAuIAAh7IAcAAIAABkIAjAAIAAhkIAcAAIAABkIAjAAIAAhkIAcAAIAAB7gACrAuIAAh7IBUAAIAAAXIg4AAIAAAZIAyAAIAAAXIgyAAIAAAdIA8AAIAAAXgArzAuIgJgbIgxAAIgJAbIgdAAIAxh7IAbAAIAyB7gAsngCIAkAAIgSgvgAuAAuIAAg0IgvAAIAAA0IgcAAIAAh7IAcAAIAAAvIAvAAIAAgvIAcAAIAAB7gAOxAGIgDgYIgBgbIAAggIAcAAIAAAgIgBAbIgDAYg");
	this.shape_1.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-97.2,-8,194.4,16.1), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tovar();
	this.instance.parent = this;
	this.instance.setTransform(-88,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-88,-88,176,176), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgmhOIBNBOIhNBP");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-4.9,-8.9,9.9,17.8), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgmhOIBNBOIhNBP");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-4.9,-8.9,9.9,17.8), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkzBUIgQgEIAHgfQAMAFAMAAQAHAAAHgEQAHgDAGgLIhAh5IAqAAIAoBXIAdhXIAoAAIgvB2QgHAQgHAKQgIALgJAGQgIAFgIACQgJADgIAAQgJAAgJgCgAF6BTIgbgFIAAijIAmAAIAAA4IALAAQAVAAAPADQAPAEAKAHQAKAHAFAKQAFAKAAAPQAAAOgFALQgFALgLAHQgVAOglAAgAGFACIAAAyIAdgBQAHgBAGgDQAFgDADgFQADgFAAgHQAAgHgDgFQgDgFgGgDQgGgDgIgBIgWgBgADvBSIAAiHIgzAAIAAggICLAAIAAAgIgyAAIAACHgAB/BSIAAhtQgVAZgTAbQgZAmgKATIggAAIAAinIAlAAIAABiIA7hOIARgUIAfAAIAACngAg4BSIAAiHIg+AAIAACHIgmAAIAAinICKAAIAACngAl9BSIgMgSIggglQgIgJgJgHIAABHIgmAAIAAinIAmAAIAAA/IA5g/IAtAAIhHBNQAOALAZAcQANAQAXAjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-48.1,-8.5,96.2,17.2), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EF2F6F","#B02252"],[0,1],0,16.8,0,-16.7).s().p("AvxC/QgoAAAAgoIAAktQAAgoAoAAIfjAAQAoAAAAAoIAAEtQAAAogoAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-104.9,-19.1,210,38.3), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-120,-200,240,400), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-96,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-96,-15.5,192,31), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EF2F6E").ss(3,1,1).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-121.5,-201.5,243,403), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(123.6,3.6,1.277,1.277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-32.3,-6.5,211.3,20.3), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(-1.7,-14.6);

	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.7,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-106.3,-21.1,209.2,38.3), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 12
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(5.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({x:6.8},2,cjs.Ease.get(1)).to({x:8.8},3,cjs.Ease.get(1)).to({x:5.8},4,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:2},9,cjs.Ease.get(1)).to({x:3},2,cjs.Ease.get(1)).to({x:-5.7},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.7,-8.9,21.5,17.8);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(52.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-104.9,-19.1,210,38.3), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06},14,cjs.Ease.get(-1)).to({scaleX:1.12,scaleY:1.12},15,cjs.Ease.get(1)).to({scaleX:1.06,scaleY:1.06},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-88,176,176);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.77},9,cjs.Ease.get(-1)).to({alpha:0.512},10,cjs.Ease.get(1)).to({alpha:0.758},10,cjs.Ease.get(-1)).to({alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.5,-201.5,243,403);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.43,scaleY:0.43,x:-232},0).to({scaleX:1,scaleY:1,x:0,alpha:1},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-88,176,176);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.9,-19.1,210,38.3);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-112.1,-20.4,224.4,40.8), null);


// stage content:
(lib._240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(120,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,200.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120,357.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 7
	this.instance_3 = new lib.Символ21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(46.4,314.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 6
	this.instance_4 = new lib.Символ18();
	this.instance_4.parent = this;
	this.instance_4.setTransform(121.8,79.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 4
	this.instance_5 = new lib.Символ16();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 3
	this.instance_6 = new lib.Символ4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(118.5,198.6,243,403);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/logo.png?1485852347253", id:"logo"},
		{src:"images/tovar.png?1485852347253", id:"tovar"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;