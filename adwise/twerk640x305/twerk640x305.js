(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.cat = function() {
	this.initialize(img.cat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,102);


(lib.tw_03 = function() {
	this.initialize(img.tw_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,83);


(lib.tw_06 = function() {
	this.initialize(img.tw_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,127);


(lib.tw_09 = function() {
	this.initialize(img.tw_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,145);


(lib.tw_13 = function() {
	this.initialize(img.tw_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,73);


(lib.tw_17 = function() {
	this.initialize(img.tw_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,68);


(lib.tw_23 = function() {
	this.initialize(img.tw_23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,104);


(lib.tw_2311119 = function() {
	this.initialize(img.tw_2311119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,11);


(lib.tw_231119 = function() {
	this.initialize(img.tw_231119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,36);


(lib.tw_2339 = function() {
	this.initialize(img.tw_2339);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,18);


(lib.tw_23449 = function() {
	this.initialize(img.tw_23449);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,122);


(lib.tw_239 = function() {
	this.initialize(img.tw_239);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,165);


(lib.tw_26 = function() {
	this.initialize(img.tw_26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,95);


(lib.tw_29 = function() {
	this.initialize(img.tw_29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,79);


(lib.w256h2561380453915MouseOptions256x25632 = function() {
	this.initialize(img.w256h2561380453915MouseOptions256x25632);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);// helper functions:

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


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ74, new cjs.Rectangle(-128,-17.9,256.1,35.8), null);


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ73, new cjs.Rectangle(-128,-17.9,256.1,35.8), null);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(6.9,1,1).p("ABSjGQAnAPAfAgQAlAlAPAuADLBIQgPAsgkAkQgfAggnAPAjLhEQAPguAlglQAfggAngPAhRDHQgngPgfggQgkgkgPgs");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ68, new cjs.Rectangle(-23.8,-23.3,47.6,46.6), null);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2.9,1,1).p("AAkhWQAQAHAOAOQAQAQAHAUABYAfQgHAUgPAPQgOAOgQAHAhYgdQAHgUAQgQQANgOARgHAgjBXQgRgHgNgOQgQgPgGgU");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ67, new cjs.Rectangle(-10.2,-10,20.6,20.1), null);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABWEvIAAhRIjUAAIgHBRIhkAAIAAiyIAjAAIASg3IAKgrIBxAAIgBAKQgIAqgPAuIB2AAIAAhiIBvAAIAABiIAtAAIgNCygAO3DeIAAjDIBuAAIAADDgAK0DeIAAjDIBuAAIAAAUIAOgUIByAAIiGDDgAIXDeIgehHIibAAIgdBHIh0AAIBSjDIBvAAIgPAlIBaAAIgPglIBxAAIBSDDgAmADeIAAjDIBuAAIAADDgAqCDeIAAjDIBtAAIAAAUIAPgUIBxAAIiFDDgAsoDeIhliUIgoAtIAABnIhvAAIAAjDID8AAICFDDgAO3AHIAAgJIgHAJIhyAAICAi4IBnAAIAAC4gAK0AHIAAi4IBuAAIAAC4gAHDAHIgXg4IgWA4IhuAAIBPi7IBrAAIBQC7gAAlAHIAAhXIhWAAIAAAEIgBAUIgFA/IhwAAQAFgcACgjIABgMIAChtIExAAIAAC4gAmAAHIAAgJIgHAJIhyAAIB/i4IBoAAIAAC4gAqCAHIAAi4IBtAAIAAC4gAwkAHIAAi4IBvAAIAACiICKiiICEAAIiYCsIAJAMgANKjRQgRgGgNgLQgNgMgIgPQgJgRgDgUIA9gMQAGARAJAIQAKAJAPAAQAQAAAKgJQAJgIAGgRIA9AMQgEAUgIARQgJAPgNAMQgNALgRAGQgSAGgUAAQgVAAgRgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ65, new cjs.Rectangle(-106.1,-30.2,212.2,60.6), null);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABWEvIAAhRIjUAAIgHBRIhkAAIAAiyIAjAAIASg3QAGgVAEgWIBxAAIgBAKQgIAqgPAuIB2AAIAAhiIBvAAIAABiIAtAAIgNCygAO3DeIAAjDIBuAAIAADDgAK0DeIAAjDIBuAAIAAAUIAOgUIByAAIiGDDgAIXDeIgehHIibAAIgdBHIh0AAIBSjDIBvAAIgPAlIBaAAIgPglIBxAAIBSDDgAmADeIAAjDIBuAAIAADDgAqCDeIAAjDIBtAAIAAAUIAOgUIByAAIiFDDgAsoDeIhliUIgoAtIAABnIhvAAIAAjDID8AAICFDDgAO3AHIAAgJIgHAJIhyAAICAi4IBnAAIAAC4gAK0AHIAAi4IBuAAIAAC4gAHDAHIgXg4IgWA4IhuAAIBPi7IBrAAIBQC7gAAlAHIAAhXIhWAAIAAAEIgBAUIgFA/IhwAAQAEgcADgjIABgMIAChtIExAAIAAC4gAmAAHIAAgJIgHAJIhyAAIB/i4IBoAAIAAC4gAqCAHIAAi4IBtAAIAAC4gAwkAHIAAi4IBvAAIAACiICKiiICEAAIiYCsIAJAMgANKjRQgRgGgNgLQgNgMgIgPQgJgRgDgUIA9gMQAGARAJAIQAKAJAPAAQAQAAAKgJQAJgIAGgRIA9AMQgEAUgIARQgJAPgNAMQgNALgRAGQgSAGgUAAQgVAAgRgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ63, new cjs.Rectangle(-106.1,-30.3,212.2,60.6), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2.9,1,1).p("AAkhWQAQAHAOAOQAQAQAHAUABYAfQgHAUgPAPQgOAOgQAHAhYgdQAHgUAQgQQANgOARgHAgjBXQgRgHgNgOQgQgPgGgU");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(-10.2,-10,20.6,20.1), null);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(6.9,1,1).p("ABSjGQAnAPAfAgQAlAlAPAuADLBIQgPAsgkAkQgfAggnAPAjLhEQAPguAlglQAfggAngPAhRDHQgngPgfggQgkgkgPgs");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ57, new cjs.Rectangle(-23.8,-23.3,47.6,46.6), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("At4hPIbxAAIAACfI7xAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(-89.9,-9,179.8,18), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg4pAaRMAAAg0hMBxTAAAMAAAA0hg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(-362.5,-168.1,725.2,336.2), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cat();
	this.instance.parent = this;
	this.instance.setTransform(-50,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-50,-51,100,102), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tw_2311119();
	this.instance.parent = this;
	this.instance.setTransform(-25,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-25,-5.5,50,11), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tw_231119();
	this.instance.parent = this;
	this.instance.setTransform(-28.8,-10.9,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-28.8,-23.8,57.6,47.7), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tw_239();
	this.instance.parent = this;
	this.instance.setTransform(-80,-82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-80,-82.5,160,165), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AphC3QgPgCgOgGQgNgFgMgIQgMgIgLgKQgKgKgIgLQgHgMgGgNQgFgOgDgOQgDgOgBgPIABgMIACgPIABgDIABgHIACgHIABgCIAFgKIADgIIBhAAQgHAFgGAHIgFAGIgBACIgFAHIgDAIIgBACQgDAHgBAIIgBAMQAAAPAGAOQAFANAJALQAKAKANAGQAOAGAPAAQAPAAAOgGQANgFAJgLQAKgKAFgOQAFgOAAgPIgBgMIgDgPIgBgCIgEgIIgEgHIgCgCIgFgGQgGgHgIgFIBiAAIAEAIIAEAKIAAACIADAHIACAHIAAADIACAPIAAAMQAAAPgCAOQgEAOgFANQgFANgJAMQgIAMgKAKQgKAKgMAHQgMAIgOAGQgOAGgOACQgQADgQAAQgQAAgPgDgAMCC0QgPgFgPgJIAeg4QAPAKARAAQAGAAAGgDQAHgDAFgGIhFiDIBTAAIAbA3IAag3IBQAAIhHCJQgJATgKANQgKAOgMAIQgLAJgNAEQgOAEgQAAQgTAAgSgFgAJyC1IhGhoIgdAfIAABJIhNAAIAAjMIBNAAIAAAlIABAAIAgglIBaAAIgoAsIBtCggAFDC1IAAieIhsCeIhIAAIAAjMIBNAAIAABRIA4hRIB8AAIAADMgAh6C1IAAjMIBMAAIAAAgICFAAIAAA9IiFAAIAAAtICVAAIAABCgAk/C1IAAjMIBOAAIAADMgAtCC1IhGhoIgdAfIAABJIhOAAIAAjMIBOAAIAAAlIABAAIAfglIBaAAIgnAsIBtCggAOGgrIAZg3IBVAAIgdA3gALqgrIgdg3IBXAAIAbA3gAJBgrIAvg3IBcAAIgxA3gAHCgrIAAg3IBNAAIAAA3gAEigrIAmg3IBIAAIAAA3gACPgrIAAg3IBNAAIAAA3gAh6grIAAg3IDgAAIAAA3gAmSgrIAAg3ID1AAIAAA3gAq9grQAHgKAJgIQAKgKAMgIQAMgIAOgFQAOgGAPgDQAPgDAQAAQAQAAAPADQAPADAOAGQANAFANAIQALAIAKAKQAJAIAHAKgAt0grIAvg3IBdAAIgyA3gAvzgrIAAg3IBOAAIAAA3gAD4h4QgMgEgJgIQgKgIgFgLQgGgMgDgOIArgIQAEALAGAGQAIAHAKAAQALAAAHgHQAHgFADgMIArAIQgCAOgGAMQgGALgKAIQgIAIgMAEQgMAEgPAAQgPAAgLgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-101.1,-18.6,202.3,37.3), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AphC3QgPgCgOgGQgNgFgMgIQgMgIgLgKQgKgKgIgLQgHgMgGgNQgFgOgDgOQgDgOgBgPIABgMIACgPIABgDIABgHIACgHIABgCIAFgKIADgIIBhAAQgHAFgGAHIgFAGIgCACIgEAHIgDAIIgBACQgDAHgBAIIgBAMQAAAPAGAOQAFANAJALQAKAKANAGQAOAGAPAAQAPAAAOgGQANgFAJgLQAKgKAFgOQAFgOAAgPIgBgMIgDgPIgBgCIgEgIIgEgHIgCgCIgFgGQgGgHgIgFIBiAAIAEAIIAEAKIAAACIADAHIACAHIAAADIACAPIAAAMQAAAPgCAOQgEAOgFANQgFANgJAMQgIAMgKAKQgKAKgMAHQgMAIgOAGQgOAGgOACQgQADgQAAQgQAAgPgDgAMCC0QgPgFgPgJIAeg4QAPAKARAAQAGAAAGgDQAHgDAFgGIhFiDIBTAAIAbA3IAag3IBQAAIhHCJQgJATgKANQgKAOgMAIQgLAJgNAEQgOAEgQAAQgTAAgSgFgAJyC1IhGhoIgdAfIAABJIhNAAIAAjMIBNAAIAAAlIABAAIAgglIBaAAIgoAsIBtCggAFDC1IAAieIhsCeIhIAAIAAjMIBNAAIAABRIA4hRIB8AAIAADMgAh6C1IAAjMIBMAAIAAAgICFAAIAAA9IiFAAIAAAtICVAAIAABCgAk/C1IAAjMIBOAAIAADMgAtCC1IhGhoIgdAfIAABJIhOAAIAAjMIBOAAIAAAlIABAAIAfglIBaAAIgnAsIBtCggAOGgrIAZg3IBVAAIgdA3gALqgrIgdg3IBXAAIAaA3gAJBgrIAvg3IBcAAIgxA3gAHCgrIAAg3IBNAAIAAA3gAEigrIAmg3IBIAAIAAA3gACPgrIAAg3IBNAAIAAA3gAh6grIAAg3IDgAAIAAA3gAmSgrIAAg3ID1AAIAAA3gAq9grQAHgKAJgIQAKgKAMgIQAMgIAOgFQAOgGAPgDQAPgDAQAAQAQAAAPADQAPADAOAGQANAFANAIQALAIAKAKQAJAIAHAKgAt0grIAvg3IBdAAIgyA3gAvzgrIAAg3IBOAAIAAA3gAD4h4QgMgEgJgIQgKgIgFgLQgGgMgDgOIArgIQAEALAGAGQAIAHAKAAQALAAAHgHQAHgFADgMIArAIQgCAOgGAMQgGALgKAIQgIAIgMAEQgMAEgPAAQgPAAgLgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-101.1,-18.6,202.3,37.3), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADmCOQgPgCgOgGQgNgFgMgIQgMgIgKgKQgJgIgGgJIgDgEQgHgKgFgMIgCgDIgGgQIBWAAIAIAMIAJAHQAGAGAIADQAOAHAPAAQAQAAANgHQAJgDAGgGIAIgHQAFgGAEgHIBUAAIgGARIgBADQgFALgHALIgDAEQgHAJgJAIQgKAKgMAIQgMAHgOAGQgOAGgOACQgQAEgQAAQgQAAgPgEgAlPCOQgPgCgOgGQgNgFgMgIQgMgIgKgKQgIgIgHgJIgDgEQgHgKgFgLIgCgEIgFgQIBVAAIAIAMIAJAIQAHAFAHADQAOAHAPAAQAQAAANgHQAIgDAHgFIAIgIQAFgFAEgHIBUAAIgGAQIgCAEQgFAKgGALIgEAEQgGAJgJAIQgKAKgMAIQgMAHgOAGQgOAGgOACQgQAEgQAAQgQAAgPgEgAOpCMIAAhkIBNAAIAABkgAL1CMIAAhkICNAAIhFBkgAJ2CMIAAhkIBNAAIAABkgAHFCMIAAhkIBNAAIAABkgAhwCMIAAhjIBNAAIAABjgArJCMIAAhjIDAAAQgMAIgQAEQgWAHgaAAIgnAAIAABQgAtICMIAAhjIBNAAIAABjgAv1CMIAAhjIBNAAIAABjgAv1AVIAAigID6AAIAACgIhNAAIAAhcIhgAAIAABcgArJiLIB3AAQAbAAAWAHQAVAGAPANQAQANAIASQAIAbAAAPQAAAMgCAMQgDAKgEAJQgEAJgHAIIAAABIjYAAgAp8AAIAlAAQAKAAAJgDQAIgCAFgFQAGgFADgHQADgHAAgIQAAgJgDgHQgDgHgGgFQgFgEgJgDQgIgCgKAAIglAAgAnFAVQgBgKAAgLQAAgOADgPQADgOAGgNQAFgNAIgMQAIgLAKgKQAKgKAMgIQANgHANgGQAOgFAPgDQAPgEAQAAQAQAAAPAEQAPACAOAGQAOAGAMAHQAMAIAKAKQAKAKAIALQAIAMAFANQAGANADAOQADAPAAAOQAAAKgCALIhQAAQACgKAAgLQAAgOgFgOQgFgNgKgLQgJgLgNgFQgOgHgQAAQgPAAgOAHQgMAFgKALQgJAKgFAOQgGAOAAAOQAAALADAKgAhwAVIAAigIDIAAIAABEIh7AAIAABcgAHFiLIBNAAIAABpIBkAAIAAhpIBNAAIAACfIj+AAgAFLAUQACgJAAgLQAAgOgFgOQgFgNgKgLQgJgLgNgFQgOgHgQAAQgPAAgOAHQgMAFgKALQgJAKgFAOQgGAOAAAOQAAAKADAKIhRAAQgBgKAAgKQAAgOADgPQADgOAGgNQAFgNAIgMQAIgLAKgKQAKgKAMgIQANgHANgGQAOgFAPgDQAPgEAQAAQAQAAAPAEQAPACAOAGQAOAGAMAHQAMAIAKAKQAKAKAIALQAIAMAFANQAGANADAOQADAPAAAOQAAAKgCAKgAOpAUIAAgkIgZAkIibAAIAAifIBMAAIAACcIBticIBIAAIAACfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-101.4,-14.5,202.9,29.1), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADmCOQgPgCgOgGQgNgFgMgIQgMgIgKgKQgJgIgGgJIgDgEQgHgKgFgMIgCgDIgGgQIBWAAIAIAMIAJAHQAGAGAIADQAOAHAPAAQAQAAANgHQAJgDAGgGIAIgHQAFgGAEgHIBUAAIgGARIgBADQgFALgHALIgDAEQgHAJgJAIQgKAKgMAIQgMAHgOAGQgOAGgOACQgQAEgQAAQgQAAgPgEgAlPCOQgPgCgOgGQgNgFgMgIQgMgIgKgKQgIgIgHgJIgDgEQgHgKgFgLIgCgEIgFgQIBVAAIAIAMIAJAIQAHAFAHADQAOAHAPAAQAQAAANgHQAIgDAHgFIAIgIQAFgFAEgHIBUAAIgGAQIgCAEQgFAKgGALIgEAEQgGAJgJAIQgKAKgMAIQgMAHgOAGQgOAGgOACQgQAEgQAAQgQAAgPgEgAOpCMIAAhkIBNAAIAABkgAL1CMIAAhkICNAAIhFBkgAJ2CMIAAhkIBNAAIAABkgAHFCMIAAhkIBNAAIAABkgAhwCMIAAhjIBNAAIAABjgArJCMIAAhjIDAAAQgMAIgQAEQgWAHgaAAIgnAAIAABQgAtICMIAAhjIBNAAIAABjgAv1CMIAAhjIBNAAIAABjgAv1AVIAAigID6AAIAACgIhNAAIAAhcIhgAAIAABcgArJiLIB3AAQAbAAAWAHQAVAGAPANQAQANAIASQAIAbAAAPQAAAMgCAMQgDAKgEAJQgEAJgHAIIAAABIjYAAgAp8AAIAlAAQAKAAAJgDQAIgCAFgFQAGgFADgHQADgHAAgIQAAgJgDgHQgDgHgGgFQgFgEgJgDQgIgCgKAAIglAAgAnFAVQgBgKAAgLQAAgOADgPQADgOAGgNQAFgNAIgMQAIgLAKgKQAKgKAMgIQANgHANgGQAOgFAPgDQAPgEAQAAQAQAAAPAEQAPACAOAGQAOAGAMAHQAMAIAKAKQAKAKAIALQAIAMAFANQAGANADAOQADAPAAAOQAAAKgCALIhQAAQACgKAAgLQAAgOgFgOQgFgNgKgLQgJgLgNgFQgOgHgQAAQgPAAgOAHQgMAFgKALQgJAKgFAOQgGAOAAAOQAAALADAKgAhwAVIAAigIDIAAIAABEIh7AAIAABcgAHFiLIBNAAIAABpIBkAAIAAhpIBNAAIAACfIj+AAgAFLAUQACgJAAgLQAAgOgFgOQgFgNgKgLQgJgLgNgFQgOgHgQAAQgPAAgOAHQgMAFgKALQgJAKgFAOQgGAOAAAOQAAAKADAKIhRAAQgBgKAAgKQAAgOADgPQADgOAGgNQAFgNAIgMQAIgLAKgKQAKgKAMgIQANgHANgGQAOgFAPgDQAPgEAQAAQAQAAAPAEQAPACAOAGQAOAGAMAHQAMAIAKAKQAKAKAIALQAIAMAFANQAGANADAOQADAPAAAOQAAAKgCAKgAOpAUIAAgkIgZAkIibAAIAAifIBMAAIAACcIBticIBIAAIAACfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-101.4,-14.5,202.9,29.1), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("A4xE7IAAp1MAxjAAAIAAJ1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-158.5,-31.5,317.1,63.1), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tw_23449();
	this.instance.parent = this;
	this.instance.setTransform(-75,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-75,-61,150,122), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-329.6,-157,1.03,1.03);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-329.6,-157,659.2,314.2), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tw_2339();
	this.instance.parent = this;
	this.instance.setTransform(-8.3,-6.1,0.79,0.79,-7.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-8.3,-7.9,16.7,16), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A211F").s().p("AhJAZQgLgBgLgEQgMgEgIgKQgIgKAPABQAOAAAYACQAYABAKAEQAJAFACAIQACAIgTABIgKAAIgVgBgABQgDQAAgLAGgHQAFgGAGACQAGADAEAGIAGAKIAEAGQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQgBACgSAAQgTAAgBgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-11.9,-2.6,23.8,5.3), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tw_03();
	this.instance.parent = this;
	this.instance.setTransform(-36,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-36,-41.5,72,83), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tw_06();
	this.instance.parent = this;
	this.instance.setTransform(-35,-63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-35,-63.5,70,127), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tw_09();
	this.instance.parent = this;
	this.instance.setTransform(-50.5,-72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-50.5,-72.5,101,145), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tw_13();
	this.instance.parent = this;
	this.instance.setTransform(-44,-36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-44,-36.5,88,73), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tw_17();
	this.instance.parent = this;
	this.instance.setTransform(-26,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-26,-34,52,68), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tw_23();
	this.instance.parent = this;
	this.instance.setTransform(-52.5,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-52.5,-52,105,104), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tw_26();
	this.instance.parent = this;
	this.instance.setTransform(-27.5,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-27.5,-47.5,55,95), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tw_29();
	this.instance.parent = this;
	this.instance.setTransform(-66,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-66,-39.5,132,79), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhuA3IAAgLIg5AAIAAALIgVAAIAAghIAKAAIAhhMIALAAIAiBMIAKAAIAAAhgAh+AWIgNgiIgOAiIAbAAgAHiAsIAAhhIAZAAIAAAeIASAAQAGAAAKACQAGADAFAFQAEAFACAGQACAFAAAHQAAAGgCAGQgCAHgEAEQgFAGgGACQgKADgGAAgAH7AWIASAAQAFAAADgEQACgDAAgFQAAgFgCgDQgDgDgFAAIgSAAgAFOAsIAAhhIAZAAIAABKIAYAAIAAhKIAaAAIAABKIAYAAIAAhKIAYAAIAABhgAEcAsIAAhhIAaAAIAABhgAC8AsIAAhhIAZAAIAAAeIASAAQAGAAAKACQAGADAEAFQAEAFADAGQACAFAAAHQAAAGgCAGQgDAHgEAEQgEAGgGACQgKADgGAAgADVAWIASAAQAFAAADgEQACgDAAgFQAAgFgCgDQgDgDgFAAIgSAAgACKAsIAAgsIgUAWIgDAAIgVgWIAAAsIgaAAIAAhhIAKAAIAmAqIAngqIAJAAIAABhgAgTAsIAAgvIgxAvIgJAAIAAhhIAaAAIAAAwIAxgwIAIAAIAABhgAkDAsIAAhhIA8AAIAAAXIgkAAIAAAOIAhAAIAAAVIghAAIAAARIAlAAIAAAWgAliAsIAAhhIApAAQAGAAAGADQAFACAEAEQAEAEADAFQACAGAAAGIgBAJQgDAFgEADQAHADACAEQADAGAAAGQAAAHgCAFQgBAGgEAEQgFAFgFACQgFACgIAAgAlKAWIAUAAQADAAACgDQACgCAAgDQAAgEgCgCQgCgDgDAAIgUAAgAlKgPIAPAAQADAAADgCQABgCAAgDQAAgEgBgCQgDgCgDAAIgPAAgAmHAsIgHgMIglAAIgHAMIgYAAIAAgDIAshfIALAAIAsBfIAAADgAmWALIgLgZIgKAZIAVAAgAn4AsIAAgnIgeAAIAAAnIgZAAIAAhhIAZAAIAAAkIAeAAIAAgkIAaAAIAABhg");
	this.shape.setTransform(423.9,271.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(367.9,265.9,112,11.1), null);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.w256h2561380453915MouseOptions256x25632();
	this.instance.parent = this;
	this.instance.setTransform(-30,-30,0.234,0.234);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.shape109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AETAAQAAByhQBRQhRBQhyAAQhxAAhRhQQhQhRAAhyQAAhxBQhRQBRhQBxAAQByAABRBQQBQBRAABxg");
	this.shape.setTransform(27.5,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ73();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ74();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,2.1);
	this.instance_1.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance_1.cache(-130,-20,260,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ72, new cjs.Rectangle(-129,-17.9,262,42.1), null);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 68
	this.instance = new lib.Символ68();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-8.2},0).wait(1).to({rotation:-16.4},0).wait(1).to({rotation:-24.5},0).wait(1).to({rotation:-32.7},0).wait(1).to({rotation:-40.9},0).wait(1).to({rotation:-49.1},0).wait(1).to({rotation:-57.3},0).wait(1).to({rotation:-65.5},0).wait(1).to({rotation:-73.6},0).wait(1).to({rotation:-81.8},0).wait(1).to({rotation:-90},0).wait(1).to({rotation:-98.2},0).wait(1).to({rotation:-106.4},0).wait(1).to({rotation:-114.5},0).wait(1).to({rotation:-122.7},0).wait(1).to({rotation:-130.9},0).wait(1).to({rotation:-139.1},0).wait(1).to({rotation:-147.3},0).wait(1).to({rotation:-155.5},0).wait(1).to({rotation:-163.6},0).wait(1).to({rotation:-171.8},0).wait(1).to({rotation:-180},0).wait(1).to({rotation:-188.2},0).wait(1).to({rotation:-196.4},0).wait(1).to({rotation:-204.5},0).wait(1).to({rotation:-212.7},0).wait(1).to({rotation:-220.9},0).wait(1).to({rotation:-229.1},0).wait(1).to({rotation:-237.3},0).wait(1).to({rotation:-245.5},0).wait(1).to({rotation:-253.6},0).wait(1).to({rotation:-261.8},0).wait(1).to({rotation:-270},0).wait(1).to({rotation:-278.2},0).wait(1).to({rotation:-286.4},0).wait(1).to({rotation:-294.5},0).wait(1).to({rotation:-302.7},0).wait(1).to({rotation:-310.9},0).wait(1).to({rotation:-319.1},0).wait(1).to({rotation:-327.3},0).wait(1).to({rotation:-335.5},0).wait(1).to({rotation:-343.6},0).wait(1).to({rotation:-351.8},0).wait(1).to({rotation:-360},0).wait(1));

	// Символ 67
	this.instance_1 = new lib.Символ67();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:16.4},0).wait(1).to({rotation:32.7},0).wait(1).to({rotation:49.1},0).wait(1).to({rotation:65.5},0).wait(1).to({rotation:81.8},0).wait(1).to({rotation:98.2},0).wait(1).to({rotation:114.5},0).wait(1).to({rotation:130.9},0).wait(1).to({rotation:147.3},0).wait(1).to({rotation:163.6},0).wait(1).to({rotation:180},0).wait(1).to({rotation:196.4},0).wait(1).to({rotation:212.7},0).wait(1).to({rotation:229.1},0).wait(1).to({rotation:245.5},0).wait(1).to({rotation:261.8},0).wait(1).to({rotation:278.2},0).wait(1).to({rotation:294.5},0).wait(1).to({rotation:310.9},0).wait(1).to({rotation:327.3},0).wait(1).to({rotation:343.6},0).wait(1).to({rotation:360},0).wait(1).to({rotation:376.4},0).wait(1).to({rotation:392.7},0).wait(1).to({rotation:409.1},0).wait(1).to({rotation:425.5},0).wait(1).to({rotation:441.8},0).wait(1).to({rotation:458.2},0).wait(1).to({rotation:474.5},0).wait(1).to({rotation:490.9},0).wait(1).to({rotation:507.3},0).wait(1).to({rotation:523.6},0).wait(1).to({rotation:540},0).wait(1).to({rotation:556.4},0).wait(1).to({rotation:572.7},0).wait(1).to({rotation:589.1},0).wait(1).to({rotation:605.5},0).wait(1).to({rotation:621.8},0).wait(1).to({rotation:638.2},0).wait(1).to({rotation:654.5},0).wait(1).to({rotation:670.9},0).wait(1).to({rotation:687.3},0).wait(1).to({rotation:703.6},0).wait(1).to({rotation:720},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.8,-23.3,47.6,46.6);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ63();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ65();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,2.4);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-108,-32,216,65);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ62, new cjs.Rectangle(-108.1,-30.3,220,67.4), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(0,34.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF0000","#22CB00"],[0,1],-88.9,0,88.9,0).s().p("At4BQIAAifIbxAAIAACfg");
	this.shape.setTransform(0,34.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF0000","#22CB00"],[0,1],-88.7,0,89.1,0).s().p("At2BQIAAifIbtAAIAACfg");
	this.shape_1.setTransform(-0.2,34.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF0000","#22CB00"],[0,1],-88,0,89.8,0).s().p("AtvBQIAAifIbfAAIAACfg");
	this.shape_2.setTransform(-0.9,34.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF0000","#22CB00"],[0,1],-86.9,0,90.9,0).s().p("AtkBQIAAifIbJAAIAACfg");
	this.shape_3.setTransform(-2,34.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF0000","#22CB00"],[0,1],-85.3,0,92.5,0).s().p("AtUBQIAAifIapAAIAACfg");
	this.shape_4.setTransform(-3.6,34.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF0000","#22CB00"],[0,1],-83.3,0,94.5,0).s().p("AtABQIAAifIaBAAIAACfg");
	this.shape_5.setTransform(-5.6,34.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FF0000","#22CB00"],[0,1],-80.8,0,97,0).s().p("AsnBQIAAifIZPAAIAACfg");
	this.shape_6.setTransform(-8.1,34.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FF0000","#22CB00"],[0,1],-77.9,0,99.9,0).s().p("AsKBQIAAifIYVAAIAACfg");
	this.shape_7.setTransform(-11,34.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FF0000","#22CB00"],[0,1],-74.5,0,103.3,0).s().p("AroBQIAAifIXRAAIAACfg");
	this.shape_8.setTransform(-14.4,34.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FF0000","#22CB00"],[0,1],-70.6,0,107.2,0).s().p("ArCBQIAAifIWEAAIAACfg");
	this.shape_9.setTransform(-18.2,34.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FF0000","#22CB00"],[0,1],-66.4,0,111.4,0).s().p("AqXBQIAAifIUvAAIAACfg");
	this.shape_10.setTransform(-22.5,34.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FF0000","#22CB00"],[0,1],-61.6,0,116.2,0).s().p("ApoBQIAAifITQAAIAACfg");
	this.shape_11.setTransform(-27.2,34.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FF0000","#22CB00"],[0,1],-56.5,0,121.3,0).s().p("Ao0BQIAAifIRpAAIAACfg");
	this.shape_12.setTransform(-32.4,34.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FF0000","#22CB00"],[0,1],-50.8,0,127,0).s().p("An7BQIAAifIP3AAIAACfg");
	this.shape_13.setTransform(-38.1,34.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#FF0000","#22CB00"],[0,1],-44.7,0,133.1,0).s().p("Am/BQIAAifIN/AAIAACfg");
	this.shape_14.setTransform(-44.1,34.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FF0000","#22CB00"],[0,1],-38.7,0,139.1,0).s().p("AmCBQIAAifIMFAAIAACfg");
	this.shape_15.setTransform(-50.2,34.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FF0000","#22CB00"],[0,1],-33,0,144.8,0).s().p("AlJBQIAAifIKTAAIAACfg");
	this.shape_16.setTransform(-55.9,34.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FF0000","#22CB00"],[0,1],-27.8,0,150,0).s().p("AkWBQIAAifIIsAAIAACfg");
	this.shape_17.setTransform(-61,34.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#FF0000","#22CB00"],[0,1],-23.1,0,154.7,0).s().p("AjmBQIAAifIHNAAIAACfg");
	this.shape_18.setTransform(-65.8,34.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#FF0000","#22CB00"],[0,1],-18.8,0,159,0).s().p("Ai8BQIAAifIF4AAIAACfg");
	this.shape_19.setTransform(-70,34.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FF0000","#22CB00"],[0,1],-15,0,162.8,0).s().p("AiVBQIAAifIErAAIAACfg");
	this.shape_20.setTransform(-73.9,34.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FF0000","#22CB00"],[0,1],-11.6,0,166.2,0).s().p("Ah0BQIAAifIDoAAIAACfg");
	this.shape_21.setTransform(-77.2,34.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#FF0000","#22CB00"],[0,1],-8.7,0,169.1,0).s().p("AhWBQIAAifICtAAIAACfg");
	this.shape_22.setTransform(-80.2,34.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#FF0000","#22CB00"],[0,1],-6.2,0,171.6,0).s().p("Ag9BQIAAifIB7AAIAACfg");
	this.shape_23.setTransform(-82.7,34.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#FF0000","#22CB00"],[0,1],-4.2,0,173.6,0).s().p("AgpBQIAAifIBTAAIAACfg");
	this.shape_24.setTransform(-84.7,34.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#FF0000","#22CB00"],[0,1],-2.6,0,175.2,0).s().p("AgZBQIAAifIAzAAIAACfg");
	this.shape_25.setTransform(-86.3,34.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#FF0000","#22CB00"],[0,1],-1.5,0,176.3,0).s().p("AgOBQIAAifIAdAAIAACfg");
	this.shape_26.setTransform(-87.4,34.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#FF0000","#22CB00"],[0,1],-0.8,0,177,0).s().p("AgHBQIAAifIAPAAIAACfg");
	this.shape_27.setTransform(-88.1,34.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#FF0000","#22CB00"],[0,1],-0.6,0,177.2,0).s().p("AgFBQIAAifIALAAIAACfg");
	this.shape_28.setTransform(-88.3,34.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#FF0000","#22CB00"],[0,1],-1.3,0,176.5,0).s().p("AgMBQIAAifIAZAAIAACfg");
	this.shape_29.setTransform(-87.6,34.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#FF0000","#22CB00"],[0,1],-2.2,0,175.6,0).s().p("AgVBQIAAifIArAAIAACfg");
	this.shape_30.setTransform(-86.7,34.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#FF0000","#22CB00"],[0,1],-3.4,0,174.4,0).s().p("AgiBQIAAifIBFAAIAACfg");
	this.shape_31.setTransform(-85.4,34.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#FF0000","#22CB00"],[0,1],-5,0,172.8,0).s().p("AgyBQIAAifIBkAAIAACfg");
	this.shape_32.setTransform(-83.8,34.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#FF0000","#22CB00"],[0,1],-7,0,170.8,0).s().p("AhFBQIAAifICLAAIAACfg");
	this.shape_33.setTransform(-81.9,34.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#FF0000","#22CB00"],[0,1],-9.3,0,168.5,0).s().p("AhcBQIAAifIC5AAIAACfg");
	this.shape_34.setTransform(-79.6,34.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#FF0000","#22CB00"],[0,1],-12,0,165.8,0).s().p("Ah3BQIAAifIDvAAIAACfg");
	this.shape_35.setTransform(-76.9,34.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#FF0000","#22CB00"],[0,1],-18.4,0,159.4,0).s().p("Ai3BQIAAifIFvAAIAACfg");
	this.shape_36.setTransform(-70.5,34.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#FF0000","#22CB00"],[0,1],-22.1,0,155.7,0).s().p("AjdBQIAAifIG6AAIAACfg");
	this.shape_37.setTransform(-66.7,34.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#FF0000","#22CB00"],[0,1],-26.2,0,151.6,0).s().p("AkFBQIAAifIILAAIAACfg");
	this.shape_38.setTransform(-62.7,34.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#FF0000","#22CB00"],[0,1],-30.7,0,147.1,0).s().p("AkyBQIAAifIJlAAIAACfg");
	this.shape_39.setTransform(-58.2,34.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#FF0000","#22CB00"],[0,1],-35.5,0,142.3,0).s().p("AliBQIAAifILFAAIAACfg");
	this.shape_40.setTransform(-53.4,34.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#FF0000","#22CB00"],[0,1],-40.6,0,137.2,0).s().p("AmWBQIAAifIMtAAIAACfg");
	this.shape_41.setTransform(-48.2,34.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#FF0000","#22CB00"],[0,1],-46.2,0,131.6,0).s().p("AnNBQIAAifIObAAIAACfg");
	this.shape_42.setTransform(-42.7,34.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#FF0000","#22CB00"],[0,1],-51.7,0,126.1,0).s().p("AoEBQIAAifIQJAAIAACfg");
	this.shape_43.setTransform(-37.2,34.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#FF0000","#22CB00"],[0,1],-56.8,0,121,0).s().p("Ao3BQIAAifIRvAAIAACfg");
	this.shape_44.setTransform(-32.1,34.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#FF0000","#22CB00"],[0,1],-61.5,0,116.3,0).s().p("ApnBQIAAifITPAAIAACfg");
	this.shape_45.setTransform(-27.3,34.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#FF0000","#22CB00"],[0,1],-65.9,0,111.9,0).s().p("AqSBQIAAifIUlAAIAACfg");
	this.shape_46.setTransform(-23,34.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#FF0000","#22CB00"],[0,1],-69.9,0,107.9,0).s().p("Aq6BQIAAifIV1AAIAACfg");
	this.shape_47.setTransform(-19,34.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#FF0000","#22CB00"],[0,1],-73.5,0,104.3,0).s().p("AreBQIAAifIW9AAIAACfg");
	this.shape_48.setTransform(-15.4,34.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#FF0000","#22CB00"],[0,1],-76.7,0,101.1,0).s().p("Ar/BQIAAifIX/AAIAACfg");
	this.shape_49.setTransform(-12.1,34.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#FF0000","#22CB00"],[0,1],-79.6,0,98.2,0).s().p("AsbBQIAAifIY3AAIAACfg");
	this.shape_50.setTransform(-9.3,34.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#FF0000","#22CB00"],[0,1],-82.1,0,95.7,0).s().p("As0BQIAAifIZpAAIAACfg");
	this.shape_51.setTransform(-6.8,34.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#FF0000","#22CB00"],[0,1],-84.1,0,93.7,0).s().p("AtJBQIAAifIaSAAIAACfg");
	this.shape_52.setTransform(-4.7,34.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#FF0000","#22CB00"],[0,1],-85.8,0,92,0).s().p("AtaBQIAAifIa0AAIAACfg");
	this.shape_53.setTransform(-3,34.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#FF0000","#22CB00"],[0,1],-87.2,0,90.6,0).s().p("AtnBQIAAifIbPAAIAACfg");
	this.shape_54.setTransform(-1.7,34.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#FF0000","#22CB00"],[0,1],-88.1,0,89.7,0).s().p("AtxBQIAAifIbiAAIAACfg");
	this.shape_55.setTransform(-0.7,34.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.4,26.4,178.8,17);


(lib.Символ54_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 58
	this.instance = new lib.Символ58();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:16.4},0).wait(1).to({rotation:32.7},0).wait(1).to({rotation:49.1},0).wait(1).to({rotation:65.5},0).wait(1).to({rotation:81.8},0).wait(1).to({rotation:98.2},0).wait(1).to({rotation:114.5},0).wait(1).to({rotation:130.9},0).wait(1).to({rotation:147.3},0).wait(1).to({rotation:163.6},0).wait(1).to({rotation:180},0).wait(1).to({rotation:196.4},0).wait(1).to({rotation:212.7},0).wait(1).to({rotation:229.1},0).wait(1).to({rotation:245.5},0).wait(1).to({rotation:261.8},0).wait(1).to({rotation:278.2},0).wait(1).to({rotation:294.5},0).wait(1).to({rotation:310.9},0).wait(1).to({rotation:327.3},0).wait(1).to({rotation:343.6},0).wait(1).to({rotation:360},0).wait(1).to({rotation:376.4},0).wait(1).to({rotation:392.7},0).wait(1).to({rotation:409.1},0).wait(1).to({rotation:425.5},0).wait(1).to({rotation:441.8},0).wait(1).to({rotation:458.2},0).wait(1).to({rotation:474.5},0).wait(1).to({rotation:490.9},0).wait(1).to({rotation:507.3},0).wait(1).to({rotation:523.6},0).wait(1).to({rotation:540},0).wait(1).to({rotation:556.4},0).wait(1).to({rotation:572.7},0).wait(1).to({rotation:589.1},0).wait(1).to({rotation:605.5},0).wait(1).to({rotation:621.8},0).wait(1).to({rotation:638.2},0).wait(1).to({rotation:654.5},0).wait(1).to({rotation:670.9},0).wait(1).to({rotation:687.3},0).wait(1).to({rotation:703.6},0).wait(1).to({rotation:720},0).wait(1));

	// Символ 57
	this.instance_1 = new lib.Символ57();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:-8.2},0).wait(1).to({rotation:-16.4},0).wait(1).to({rotation:-24.5},0).wait(1).to({rotation:-32.7},0).wait(1).to({rotation:-40.9},0).wait(1).to({rotation:-49.1},0).wait(1).to({rotation:-57.3},0).wait(1).to({rotation:-65.5},0).wait(1).to({rotation:-73.6},0).wait(1).to({rotation:-81.8},0).wait(1).to({rotation:-90},0).wait(1).to({rotation:-98.2},0).wait(1).to({rotation:-106.4},0).wait(1).to({rotation:-114.5},0).wait(1).to({rotation:-122.7},0).wait(1).to({rotation:-130.9},0).wait(1).to({rotation:-139.1},0).wait(1).to({rotation:-147.3},0).wait(1).to({rotation:-155.5},0).wait(1).to({rotation:-163.6},0).wait(1).to({rotation:-171.8},0).wait(1).to({rotation:-180},0).wait(1).to({rotation:-188.2},0).wait(1).to({rotation:-196.4},0).wait(1).to({rotation:-204.5},0).wait(1).to({rotation:-212.7},0).wait(1).to({rotation:-220.9},0).wait(1).to({rotation:-229.1},0).wait(1).to({rotation:-237.3},0).wait(1).to({rotation:-245.5},0).wait(1).to({rotation:-253.6},0).wait(1).to({rotation:-261.8},0).wait(1).to({rotation:-270},0).wait(1).to({rotation:-278.2},0).wait(1).to({rotation:-286.4},0).wait(1).to({rotation:-294.5},0).wait(1).to({rotation:-302.7},0).wait(1).to({rotation:-310.9},0).wait(1).to({rotation:-319.1},0).wait(1).to({rotation:-327.3},0).wait(1).to({rotation:-335.5},0).wait(1).to({rotation:-343.6},0).wait(1).to({rotation:-351.8},0).wait(1).to({rotation:-360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.8,-23.3,47.6,46.6);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.2,x:2.6,y:5.2},2).to({rotation:0,x:0,y:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-5.5,50,11);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(-2,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ44();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-28.8,-27,57.6,50.9), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5));

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.8,-27,57.6,50.9);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ39();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1);
	this.instance_1.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance_1.cache(-103,-21,206,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-102.1,-18.6,208,42), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ37();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.8);
	this.instance_1.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance_1.cache(-103,-16,207,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-102.4,-14.8,208,34), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(35.9,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.1,0.965,1);
	this.instance_1.alpha = 0.48;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-153,-31.5,306.1,63.1), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(64.5,30.2,1,1,0,0,0,64.5,30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-11.1,y:30.3},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-27,y:30.2},14,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-14,x:64.6,y:30.3},12,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:64.5,y:30.2},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-61,150,122);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.eyes = new lib.Символ42();
	this.eyes.parent = this;
	this.eyes.setTransform(-56.9,-10.8);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-85.7,-82.5,165.8,165), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.8},2).to({scaleY:1},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-7.9,16.7,16);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5));

	// Слой 1
	this.kot1 = new lib.Символ27();
	this.kot1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.kot1).to({rotation:-15,x:-18.3,y:-30.3},4,cjs.Ease.get(1)).wait(1).to({rotation:0,x:0,y:0},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.7,-82.5,165.8,165);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance.cache(-14,-5,28,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-12.9,-3.6,28,10), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-35,-63.5,70,127), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-50.5,-72.5,101,145), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.kot = new lib.Символ23();
	this.kot.parent = this;
	this.kot.setTransform(15.8,-13.6,0.687,0.64,52.2,0,0,-0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.kot).wait(1));

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-59.7,-89.2,150.8,151.5), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-26,-34,52,68), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-52.5,-52,105,104), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-27.5,-47.5,55,95), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-66,-39.5,132,79), null);


(lib.sprite110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape109("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite110, new cjs.Rectangle(-1.5,-1.5,58,58), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween22("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,60,60), null);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ72();
	this.instance.parent = this;
	this.instance.setTransform(0.6,27,0.622,0.622,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ55();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-34.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ71, new cjs.Rectangle(-89.4,-8.5,178.8,52.6), null);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ69();
	this.instance.parent = this;
	this.instance.setTransform(-34.6,-6.6,1,1,0,0,0,-34.6,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:-10.6,x:0.6,y:-6.5},0).wait(1).to({rotation:-21.2,x:0,y:-12.9},0).wait(1).to({rotation:-31.8,x:-1.7,y:-19.2},0).wait(1).to({rotation:-42.4,x:-4.6,y:-25},0).wait(1).to({rotation:-52.9,x:-8.5,y:-30.2},0).wait(1).to({rotation:-63.5,x:-13.3,y:-34.6},0).wait(1).to({rotation:-74.1,x:-18.8,y:-38.1},0).wait(1).to({rotation:-84.7,x:-24.8,y:-40.4},0).wait(1).to({rotation:-95.3,x:-31.2,y:-41.7},0).wait(1).to({rotation:-105.9,x:-37.7},0).wait(1).to({rotation:-116.5,x:-44.1,y:-40.5},0).wait(1).to({rotation:-127.1,x:-50.2,y:-38.2},0).wait(1).to({rotation:-137.6,x:-55.7,y:-34.8},0).wait(1).to({rotation:-148.2,x:-60.5,y:-30.4},0).wait(1).to({rotation:-158.8,x:-64.5,y:-25.3},0).wait(1).to({rotation:-169.4,x:-67.4,y:-19.4},0).wait(1).to({rotation:-180,x:-69.2,y:-13.2},0).wait(1).to({rotation:-190.6,x:-69.8,y:-6.7},0).wait(1).to({rotation:-201.2,x:-69.2,y:-0.3},0).wait(1).to({rotation:-211.8,x:-67.5,y:6},0).wait(1).to({rotation:-222.4,x:-64.6,y:11.8},0).wait(1).to({rotation:-232.9,x:-60.7,y:17},0).wait(1).to({rotation:-243.5,x:-55.9,y:21.4},0).wait(1).to({rotation:-254.1,x:-50.4,y:24.9},0).wait(1).to({rotation:-264.7,x:-44.4,y:27.2},0).wait(1).to({rotation:-275.3,x:-38,y:28.5},0).wait(1).to({rotation:-285.9,x:-31.5},0).wait(1).to({rotation:-296.5,x:-25.1,y:27.3},0).wait(1).to({rotation:-307.1,x:-19,y:25},0).wait(1).to({rotation:-317.6,x:-13.5,y:21.6},0).wait(1).to({rotation:-328.2,x:-8.7,y:17.2},0).wait(1).to({rotation:-338.8,x:-4.7,y:12.1},0).wait(1).to({rotation:-349.4,x:-1.8,y:6.2},0).wait(1).to({rotation:-360,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.8,-23.3,47.6,46.6);


(lib.Символ66 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ70();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-9.2},14,cjs.Ease.get(1)).to({regX:0.1,regY:-0.1,rotation:8.8,x:0.1,y:-0.1},30,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:0,x:0,y:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.1,-30.3,220,67.4);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ64();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.91,scaleY:0.91},7,cjs.Ease.get(-1)).to({scaleX:0.82,scaleY:0.82},8,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,y:-0.1},8,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:0},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.1,-30.3,220,67.4);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-257.3},23,cjs.Ease.get(-1)).to({x:-548.2},26,cjs.Ease.get(1)).to({x:-274.1},25,cjs.Ease.get(-1)).to({x:0},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.8,-23.3,47.6,46.6);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(-10.5,-30.3,1.308,1.308,7.5,0,0,-0.1,-1.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ52();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-51,100,102);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-50,-67.8,100,118.8), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(34,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.965,1);
	this.instance_1.alpha = 0.48;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-153,-31.5,306.1,63.1), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 32
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(-147.6,54.5,1,1,0,0,0,-153.1,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({regY:-31.4,rotation:11,y:54.6},8,cjs.Ease.get(1)).wait(1).to({regY:-31.5,rotation:0,y:54.5},8,cjs.Ease.get(-1)).wait(9));

	// Символ 32
	this.instance_1 = new lib.Символ35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-147.6,54.6,1,1,-13.4,0,0,-153.1,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:0,y:54.5},8,cjs.Ease.get(-1)).wait(17).to({rotation:-13.4},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.2,-77.9,320.8,195.5);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5));

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-7.9,16.7,16);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(34.5,31.2);

	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9.5,-26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-62,-78.7,124,157.4), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ai9gEIF0gvIAHA4Il0Avg");
	var mask_graphics_1 = new cjs.Graphics().p("Ai9gEIF0gwIAHA5Il0Avg");
	var mask_graphics_2 = new cjs.Graphics().p("Ai9gEIF0gwIAHA5Il0Awg");
	var mask_graphics_3 = new cjs.Graphics().p("Ai9gEIF0gvIAHA4Il0Awg");
	var mask_graphics_4 = new cjs.Graphics().p("Ai9gEIF0gwIAHA5Il0Awg");
	var mask_graphics_5 = new cjs.Graphics().p("Ai9gEIF0gwIAHA5Il0Avg");
	var mask_graphics_6 = new cjs.Graphics().p("Ai9gEIF0gvIAHA4Il0Avg");
	var mask_graphics_7 = new cjs.Graphics().p("Ai9gEIF0gwIAHA5Il0Avg");
	var mask_graphics_8 = new cjs.Graphics().p("Ai9gEIF0gwIAHA5Il0Awg");
	var mask_graphics_9 = new cjs.Graphics().p("Ai9gEIF0gvIAHA4Il0Awg");
	var mask_graphics_10 = new cjs.Graphics().p("Ai9gEIF0gwIAHA5Il0Awg");
	var mask_graphics_11 = new cjs.Graphics().p("Ai9gEIF0gwIAHA5Il0Avg");
	var mask_graphics_12 = new cjs.Graphics().p("Ai9gEIF0gvIAHA4Il0Avg");
	var mask_graphics_13 = new cjs.Graphics().p("Ai9gEIF0gwIAHA5Il0Avg");
	var mask_graphics_14 = new cjs.Graphics().p("Ai9gEIF0gwIAHA5Il0Awg");
	var mask_graphics_15 = new cjs.Graphics().p("Ai9gEIF0gvIAHA4Il0Awg");
	var mask_graphics_18 = new cjs.Graphics().p("Ai9gEIF0gvIAHA4Il0Avg");
	var mask_graphics_34 = new cjs.Graphics().p("Ai9gEIF0gvIAHA4Il0Avg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.6,y:-6.7}).wait(1).to({graphics:mask_graphics_1,x:0.6,y:-4.7}).wait(1).to({graphics:mask_graphics_2,x:0.6,y:-2.7}).wait(1).to({graphics:mask_graphics_3,x:0.6,y:-0.7}).wait(1).to({graphics:mask_graphics_4,x:0.6,y:-2.7}).wait(1).to({graphics:mask_graphics_5,x:0.6,y:-4.7}).wait(1).to({graphics:mask_graphics_6,x:0.6,y:-6.7}).wait(1).to({graphics:mask_graphics_7,x:0.6,y:-4.7}).wait(1).to({graphics:mask_graphics_8,x:0.6,y:-2.7}).wait(1).to({graphics:mask_graphics_9,x:0.6,y:-0.7}).wait(1).to({graphics:mask_graphics_10,x:0.6,y:-2.7}).wait(1).to({graphics:mask_graphics_11,x:0.6,y:-4.7}).wait(1).to({graphics:mask_graphics_12,x:0.6,y:-6.7}).wait(1).to({graphics:mask_graphics_13,x:0.6,y:-4.7}).wait(1).to({graphics:mask_graphics_14,x:0.6,y:-2.7}).wait(1).to({graphics:mask_graphics_15,x:0.6,y:-0.7}).wait(3).to({graphics:mask_graphics_18,x:0.6,y:-6.7}).wait(16).to({graphics:mask_graphics_34,x:0.6,y:-6.7}).wait(1));

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.9,-3.6,28,2.1);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.rot = new lib.Символ26();
	this.rot.parent = this;
	this.rot.setTransform(-6.4,27.1);

	this.timeline.addTween(cjs.Tween.get(this.rot).wait(1));

	// Слой 2
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(-11.5,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-36,-41.5,72,83), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_41 = function() {
		this.gotoAndPlay(23);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(20).call(this.frame_41).wait(1));

	// tw_03.png
	this.golova = new lib.Символ18();
	this.golova.parent = this;
	this.golova.setTransform(24.2,-73.2,1,1,0,0,0,30.2,16.1);

	this.timeline.addTween(cjs.Tween.get(this.golova).to({rotation:11,x:21.8,y:-53.6},10,cjs.Ease.get(1)).to({rotation:0,x:24.2,y:-73.2},11,cjs.Ease.get(1)).wait(1).to({rotation:11,x:21.8,y:-53.6},9,cjs.Ease.get(1)).to({rotation:0,x:24.2,y:-73.2},10,cjs.Ease.get(1)).wait(1));

	// tw_13.png
	this.bulki = new lib.Символ12();
	this.bulki.parent = this;
	this.bulki.setTransform(29.8,58.4,1,1,0,0,0,-8.2,-32.9);

	this.timeline.addTween(cjs.Tween.get(this.bulki).to({scaleX:0.96,scaleY:0.96,rotation:17.7,x:32.1,y:66.2},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0,x:29.8,y:58.4},11,cjs.Ease.get(1)).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:17.7,x:32.1,y:59.9},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:7,x:29.8,y:58.4},5,cjs.Ease.get(-1)).to({scaleX:0.96,scaleY:0.96,rotation:17.7,x:28.8,y:59.2},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0,x:29.8,y:58.4},5,cjs.Ease.get(1)).wait(1));

	// tw_09.png
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(21.2,29.6,1,1,0,0,0,25.4,32.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:25.3,regY:32.2,rotation:-7,x:29.3,y:36.6},10,cjs.Ease.get(1)).to({regX:25.4,regY:32.1,rotation:0,x:21.2,y:29.6},11,cjs.Ease.get(1)).wait(1).to({regX:25.3,regY:32.2,rotation:-7,x:29.3,y:36.6},9,cjs.Ease.get(1)).to({regX:25.4,regY:32.1,rotation:0,x:21.2,y:29.6},10,cjs.Ease.get(1)).wait(1));

	// tw_17.png
	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20.8,33.4,1,1,0,0,0,13.3,-26.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-26.3,rotation:8.9,x:27.9,y:42},10,cjs.Ease.get(1)).to({regY:-26.4,rotation:0,x:20.8,y:33.4},11,cjs.Ease.get(1)).wait(1).to({rotation:9.4,x:29,y:36.7},9,cjs.Ease.get(1)).to({rotation:0,x:20.8,y:33.4},10,cjs.Ease.get(1)).wait(1));

	// tw_06.png
	this.instance_2 = new lib.Символ16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-77.5,146.5,1,1,0,0,0,-26.8,44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-26.9,rotation:8.7,x:-74.2,y:142.1},10,cjs.Ease.get(1)).to({regX:-26.8,rotation:0,x:-77.5,y:146.5},11,cjs.Ease.get(1)).wait(1).to({regX:-26.9,rotation:8.7,x:-74.2,y:142.1},9,cjs.Ease.get(1)).to({regX:-26.8,rotation:0,x:-77.5,y:146.5},10,cjs.Ease.get(1)).wait(1));

	// tw_29.png
	this.instance_3 = new lib.Символ4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-81,158,1,1,0,0,0,-66,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-66.2,rotation:-1.7,x:-81.1},10,cjs.Ease.get(1)).to({regX:-66,rotation:0,x:-81},11,cjs.Ease.get(1)).wait(1).to({regX:-66.1,regY:27.1,scaleX:1.03,scaleY:1.03,rotation:-4.3,x:-81.1,y:157.9},4,cjs.Ease.get(1)).to({regX:-66.2,regY:26.9,scaleX:1,scaleY:1,rotation:-1.7,y:158},5,cjs.Ease.get(-1)).to({regX:-66.1,regY:27.1,scaleX:1.03,scaleY:1.03,rotation:-4.3,y:157.9},5,cjs.Ease.get(0.99)).to({regX:-66,regY:26.9,scaleX:1,scaleY:1,rotation:0,x:-81,y:158},5).wait(1));

	// tw_26.png
	this.instance_4 = new lib.Символ22();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-19,236.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.7,-130.8,214.9,446.2);


(lib.sprite112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(1.5,21.8,0.85,0.85,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1.5,21.8,1.5,21.4,1.5,21,1.5,15.3,5.5,11.2,9.7,7.1,15.4,7.1,21.1,7.1,25.2,11.2,29.3,15.3,29.3,21,29.3,26.7,25.2,30.8,21.1,34.9,15.4,34.9,9.7,34.9,5.5,30.8,3.3,28.6,2.3,25.8]}},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-3.7,51,51);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ59();
	this.instance.parent = this;
	this.instance.setTransform(-156.9,-141.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-42},13,cjs.Ease.get(-1)).to({y:72.9},15,cjs.Ease.get(1)).to({y:-31.1},16,cjs.Ease.get(-1)).to({y:-141.6},17,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.7,-164.9,47.6,46.6);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1,y:4.9},7,cjs.Ease.get(-1)).to({x:-2.2,y:10.6},8,cjs.Ease.get(1)).to({x:-1.2,y:5.6},9,cjs.Ease.get(-1)).to({x:0,y:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-51,100,102);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(65,51,1,1,10.2,0,0,0,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:51.1,rotation:2.1,y:51.1},15,cjs.Ease.get(-1)).to({rotation:-6.2},16,cjs.Ease.get(1)).to({rotation:1.1},15,cjs.Ease.get(-1)).to({regY:51,rotation:10.2,y:51},18,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.8,-58.2,116.5,118.1);


(lib.Символ53_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.sprite112();
	this.instance.parent = this;
	this.instance.setTransform(503.2,260.7,0.501,0.501,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Layer 1
	this.instance_1 = new lib.sprite110();
	this.instance_1.parent = this;
	this.instance_1.setTransform(493,253.2,0.659,0.659,0,0,0,0,0.1);
	this.instance_1.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// Слой 1
	this.instance_2 = new lib.Символ54();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0.531},4,cjs.Ease.get(-1)).to({alpha:0},5,cjs.Ease.get(1)).to({alpha:0.5},5,cjs.Ease.get(-1)).to({alpha:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(367.9,252.1,162.3,38.2);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(-74,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({y:-101.8},10).wait(23).to({skewY:180,x:76},0).wait(18).to({y:24.8},10).wait(1).to({rotation:88.8,skewY:0,x:-202,y:-254.9},0).wait(23).to({x:-89},8).wait(33).to({rotation:0,skewX:91.2,skewY:-88.8,y:-106.8},0).wait(24).to({x:-249},9).wait(25).to({regX:55.2,regY:15.3,skewX:-13.8,skewY:-193.8,x:554.1,y:16.2},0).to({skewX:-13.8,x:500.1,y:-94.8},10).wait(35).to({rotation:-61.2,skewX:0,skewY:-360,x:480.1,y:-68.6},0).wait(11).to({x:591.1,y:42.4},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.2,-59,116.5,118.1);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(8));

	// Слой 6
	this.instance = new lib.Символ53_1();
	this.instance.parent = this;
	this.instance.setTransform(-205,-96,0.921,0.921);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-120},2).to({y:-15.7},5).wait(1).to({y:-120},5).to({y:-96},2).wait(1));

	// Слой 10
	this.instance_1 = new lib.Символ71();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-156.4,-257.6,1,1,0,0,0,0,-13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.69,x:-156.6,y:-104.6},5).to({scaleY:1,y:-121.1},2).wait(1).to({scaleY:0.69,y:-104.6},2).to({scaleY:1,x:-156.4,y:-257.6},5).wait(1));

	// Слой 9
	this.instance_2 = new lib.Символ61();
	this.instance_2.parent = this;
	this.instance_2.setTransform(203,-168);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-61.1,alpha:1},7,cjs.Ease.get(1)).wait(1).to({y:-168,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Слой 8
	this.instance_3 = new lib.Символ60();
	this.instance_3.parent = this;
	this.instance_3.setTransform(474.8,52.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0},7).wait(1).to({alpha:1},7).wait(1));

	// Слой 6
	this.instance_4 = new lib.Символ50();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-149.8,241.8,1,1,0,0,0,-7.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16));

	// Слой 4
	this.instance_5 = new lib.Символ30();
	this.instance_5.parent = this;
	this.instance_5.setTransform(292.2,295.6,1,1,35.5,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:111.6},7,cjs.Ease.get(1)).wait(1).to({y:295.6},7,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.dama = new lib.Символ1();
	this.dama.parent = this;
	this.dama.setTransform(0,-27.3,0.788,0.788,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.dama).to({regY:-0.2,scaleX:1.17,scaleY:1.17,y:-5.8},5).to({scaleX:1.01,scaleY:1.01},2).wait(1).to({scaleX:1.17,scaleY:1.17},2).to({regY:-0.1,scaleX:0.79,scaleY:0.79,y:-27.3},5).wait(1));

	// Слой 5
	this.instance_6 = new lib.Символ31();
	this.instance_6.parent = this;
	this.instance_6.setTransform(154.7,-34.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:0.76,x:115.7},2).to({scaleX:1,x:647.8},5).wait(1).to({scaleX:0.76,x:115.7},5).to({scaleX:1,x:154.7},2).wait(1));

	// Слой 7
	this.instance_7 = new lib.Символ53();
	this.instance_7.parent = this;
	this.instance_7.setTransform(37.8,22);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:0.359},7).wait(1).to({alpha:0},7).wait(1));

	// Слой 3
	this.instance_8 = new lib.Символ28();
	this.instance_8.parent = this;
	this.instance_8.setTransform(51.6,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1.18,scaleY:1.18},5).to({scaleX:1.12,scaleY:1.12},2).wait(1).to({scaleX:1.18,scaleY:1.18},2).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-324.8,-252.9,725.2,641.7);


// stage content:
(lib.twerk640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		stage.canvas.style.cursor = "none";
		this.priz.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.priz.x = stage.mouseX/window.devicePixelRatio;
			this.priz.y = stage.mouseY/window.devicePixelRatio;
		}
		
		this.cursor = "none";
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.priz.gotoAndStop(1);
			_this.main.gotoAndPlay(1);
			_this.main.dama.gotoAndPlay(23);
			_this.main.dama.golova.rot.gotoAndPlay(1);
			_this.main.dama.bulki.kot.gotoAndPlay(1);
			_this.main.dama.bulki.kot.kot1.eyes.gotoAndPlay(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
			_this.priz.gotoAndStop(0);
			_this.main.gotoAndPlay(9);
		    _this.main.dama.gotoAndPlay(0);
			_this.main.dama.golova.rot.gotoAndPlay(5);
			_this.main.dama.bulki.kot.gotoAndPlay(5);
			_this.main.dama.bulki.kot.kot1.eyes.gotoAndPlay(5);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.priz = new lib.Символ66();
	this.priz.parent = this;
	this.priz.setTransform(794.9,180.4);

	this.timeline.addTween(cjs.Tween.get(this.priz).wait(1));

	// Слой 1
	this.main = new lib.Символ2();
	this.main.parent = this;
	this.main.setTransform(272,128.5);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(267.2,28.1,725.2,641.7);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1486482367480", id:"bg"},
		{src:"images/cat.png?1486482367480", id:"cat"},
		{src:"images/tw_03.png?1486482367480", id:"tw_03"},
		{src:"images/tw_06.png?1486482367480", id:"tw_06"},
		{src:"images/tw_09.png?1486482367480", id:"tw_09"},
		{src:"images/tw_13.png?1486482367480", id:"tw_13"},
		{src:"images/tw_17.png?1486482367480", id:"tw_17"},
		{src:"images/tw_23.png?1486482367480", id:"tw_23"},
		{src:"images/tw_2311119.png?1486482367480", id:"tw_2311119"},
		{src:"images/tw_231119.png?1486482367480", id:"tw_231119"},
		{src:"images/tw_2339.png?1486482367480", id:"tw_2339"},
		{src:"images/tw_23449.png?1486482367480", id:"tw_23449"},
		{src:"images/tw_239.png?1486482367480", id:"tw_239"},
		{src:"images/tw_26.png?1486482367480", id:"tw_26"},
		{src:"images/tw_29.png?1486482367480", id:"tw_29"},
		{src:"images/w256h2561380453915MouseOptions256x25632.png?1486482367480", id:"w256h2561380453915MouseOptions256x25632"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;