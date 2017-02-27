(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"banner240x800_atlas_P_", frames: [[1800,0,60,62],[0,0,1080,180],[1272,0,169,339],[1443,0,153,327],[1082,0,188,327],[1598,0,200,60],[1862,0,45,57]]},
		{name:"banner240x800_atlas_NP_", frames: [[0,0,1080,180],[0,182,1274,136]]}
];


// symbols:



(lib.ch = function() {
	this.spriteSheet = ss["banner240x800_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fon = function() {
	this.spriteSheet = ss["banner240x800_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fon1 = function() {
	this.spriteSheet = ss["banner240x800_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.footb_03 = function() {
	this.spriteSheet = ss["banner240x800_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.footb_05 = function() {
	this.spriteSheet = ss["banner240x800_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.footb_07 = function() {
	this.spriteSheet = ss["banner240x800_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["banner240x800_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.orang = function() {
	this.spriteSheet = ss["banner240x800_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.vip = function() {
	this.spriteSheet = ss["banner240x800_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiACcIAAg6IALADQARAAAKgMQAMgKAFgZQAHgXACglIACiaIDlAAIAAE+IhFAAIAAkEIheAAIgEBnQgBAwgKAkQgJAkgUAUQgLAKgOAFQgOAGgTgBQgQABgOgGgARFCeIAAk+IBGAAIAAE+gAMoCeIAAk+IBGAAIAABzIBDAAQAYAAAVAFQAVAGAOANQAPANAJATQAKASgBAaQABAbgKATQgHAUgPALQgRANgVAHQgWAGgaAAgANuBlIA6AAQAMAAALgDQAJgCAIgFQAPgLAAgaQgBgMgEgJQgDgJgIgFQgHgGgKgCIgWgDIg6AAgAJfCeIAAkEIhhAAIAAg6IEGAAIAAA6IhgAAIAAEEgAG0CeIgZhIIh4AAIgZBIIhGAAIB5k+IBIAAIB3E+gAGIAiIgnh1IgBAAIgqB1IBSAAgAjrCeIAAkEIh9AAIAAEEIhGAAIAAk+IEKAAIAAE+gAoyCeIAAk+IBHAAIAAE+gAtOCeIAAk+IBGAAIAABzIBDAAQAYAAAVAFQAUAGAPANQAPANAJATQAKASgBAaQABAbgKATQgHAUgPALQgRANgVAHQgWAGgaAAgAsIBlIA6AAQAMAAALgDQAJgCAHgFQAQgLAAgaQAAgMgFgJQgEgJgHgFQgIgGgKgCIgVgDIg6AAgAyKCeIAAk+ICXAAQAXAAATADQATAEANAIQAOAKAHAQQAIAPgBAWQAAAYgLARQgLAPgUALQAcAIAQAVQAGAKAEAOQADAMAAAPQABAYgKASQgJARgQAMQgQALgVAFQgUAGgVAAgAxEBnIBhgBQAIgDAIgFQAGgEAFgIQAEgJAAgNQAAgLgDgJQgEgJgGgFQgHgGgKgBQgJgEgLAAIhOAAgAxEgfIBIAAQAUAAAMgJQALgJABgUQAAgMgFgHQgDgHgIgFQgGgEgJgBIgTgCIhCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(-116.2,-16.1,232.5,32.3), null);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA900").s().p("ABBBMIgNgHQgGgEgFgGQgKgLgGgPQgFgPAAgRQAAgIACgIIADgQQAGgQAKgLQAFgGAGgEIANgIQAOgGATAAQASAAAPAGIANAIIAMAKQAKALAEAQIAFAQQABAIAAAIQAAARgGAPQgEAPgKALIgMAKIgNAHQgPAHgSAAQgTAAgOgHgABOgwQgHAFgGAHQgFAIgCAJQgDAKAAAKQAAAJADAKQACAJAFAIQAGAIAHAEQAIAFAMAAQAMAAAIgFQAJgEAEgIQAFgIADgJQACgKAAgJQAAgKgCgKQgDgJgFgIQgEgHgJgFQgIgFgMAAQgMAAgIAFgAQRBPIAAidIB2AAIAAAdIhTAAIAAAiIBNAAIAAAaIhNAAIAAAnIBWAAIAAAdgAPQBPIAAidIAjAAIAACdgANDBPIAAidIAjAAIAAA5IAiAAQALAAAKADQALADAHAGQAHAHAFAIQAEAKAAAMQAAANgEAKQgEAJgIAHQgHAGgLADQgLADgMAAgANmAzIAcAAIAMgBQAFgCADgCQAIgFgBgNQAAgGgCgEQgCgFgDgDQgEgDgEgBIgogBgAMCBPIAAhEIhAAAIAABEIgjAAIAAidIAjAAIAAA9IBAAAIAAg9IAjAAIAACdgAJeBPIAAhEIhAAAIAABEIgjAAIAAidIAjAAIAAA9IBAAAIAAg9IAjAAIAACdgAHKBPIgMgjIg8AAIgNAjIgiAAIA8idIAjAAIA8CdgAG0ASIgTg5IgWA5IApAAgADIBPIAAidIBKAAIAVABQAJADAGAEQAIAFADAIQAEAHAAALQAAAMgFAIQgGAIgLAFQAPAEAIAKIAEAMQACAGAAAHQAAAMgEAJQgEAJgKAGQgHAEgKADQgLADgKAAgADrA0IAvgBIAIgDQADgCACgFQADgEAAgGQgBgGgCgEQgBgFgDgCIgIgEQgFgCgFAAIgmAAgADrgOIAiAAQAKAAAFgFQAHgEAAgKQAAgFgCgEIgFgFQgEgDgEgBIgpAAgAh4BPIAAidIBIAAQAPAAAKAEQAKAFAHAHQAGAHADAJQADAJAAAJQAAALgDAIQgDAJgGAGQgHAIgKAEQgKAEgPAAIglAAIAAA5gAhVgEIAnAAQAFgCAEgDQAEgCADgEQADgFAAgIQAAgHgDgFQgDgFgEgCQgEgCgFgBIgMgBIgbAAgAi5BPIAAhtIAAAAIg9BtIgmAAIAAidIAiAAIAABtIABAAIA8htIAnAAIAACdgAmABPIAAiAIgwAAIAAgdICCAAIAAAdIgwAAIAACAgAnlBPIAAhEIhAAAIAABEIgjAAIAAidIAjAAIAAA9IBAAAIAAg9IAiAAIAACdgAp6BPIgLgjIg8AAIgMAjIgiAAIA7idIAjAAIA7CdgAqOASIgUg5IgBAAIgVA5IAqAAgAt0BPIAAidIBIAAQAOAAALAEQALAFAHAHQAFAHAEAJQADAJAAAJQAAALgDAIQgEAJgFAGQgHAIgLAEQgLAEgOAAIgkAAIAAA5gAtQgEIAmAAQAFgCAFgDQAEgCADgEQACgFAAgIQAAgHgCgFQgDgFgEgCQgFgCgFgBIgLgBIgbAAgAukBPIgNgjIg7AAIgMAjIgjAAIA7idIAjAAIA9CdgAu7ASIgTg5IgVA5IAoAAgAyJBPIAAidIBvAAIAAAdIhMAAIAACAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(-116.1,-8.3,232.3,16.6), null);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vip();
	this.instance.parent = this;
	this.instance.setTransform(-22.5,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ57, new cjs.Rectangle(-22.5,-28.5,45,57), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjUB4IgQgJQgIgGgFgGQgNgOgHgSQgFgSAAgVQgBgLACgKIAEgSQAHgTANgOQAFgHAIgFQAIgFAIgEQASgIAWAAQAPAAAPAFQAPAEAKAJQAMAJAHANQAIAMABARIgpAAQgBgHgEgGQgEgGgFgFQgGgEgHgDQgHgDgIAAQgPAAgJAGQgKAGgGAJQgHAJgCALQgDAMgBANQABAMADALQACAMAHAJQAGAJAKAGQAJAFAPAAQAJAAAIgDQAIgDAGgGQAKgMACgTIAqAAQgEAXgEAKQgIAOgKALQgMAKgOAFQgPAGgSAAQgWAAgSgIgAKSB7IAAiFIgCAAIhJCFIgwAAIAAi/IArAAIAACEIABAAIBKiEIAuAAIAAC/gAHIB7IAAi/IArAAIAAC/gAEdB7IAAi/IArAAIAABEIAnAAQAPAAAMAEQANADAJAIQAJAIAFALQAGAMAAAPQAAAQgGAMQgFAMgIAHQgKAIgNAEQgNADgQAAgAFIBZIAiAAQAHAAAHgCQAGgBAEgDQAJgHAAgPQAAgIgDgFQgCgFgFgDQgEgEgGgBIgNgCIgiAAgABpB7IAAi/IBXAAQASAAANAFQANAFAIAJQAHAIAEAMQAEALAAALQAAALgEALQgEALgHAJQgIAJgNAFQgNAFgSAAIgsAAIAABFgACUAVIAugBQAHgBAFgDQAGgDACgGQAEgGAAgIQAAgJgEgGQgCgFgGgDQgFgDgHgBIgNgCIghAAgAgPB7IAAicIg7AAIAAgjICeAAIAAAjIg7AAIAACcgAlRB7IAAi/IAqAAIAAC/gAn9B7IAAi/IArAAIAABEIAnAAQAPAAAMAEQANADAJAIQAJAIAFALQAGAMAAAPQAAAQgGAMQgEAMgKAHQgJAIgNAEQgNADgPAAgAnSBZIAiAAQAHAAAHgCQAFgBAFgDQAJgHAAgPQAAgIgCgFQgDgFgFgDQgEgEgGgBIgNgCIgiAAgAq6B7IAAi/ICPAAIAAAiIhlAAIAAAkIAyAAQAPAAAMADQAMAEAKAHQAJAIAFALQAFAMABAPQgBAQgFAMQgEALgKAIQgKAHgNAEQgNADgPAAgAqQBZIArAAQAIAAAHgCQAFgBAEgDQAJgGAAgPQAAgIgCgFQgCgFgFgDQgFgDgFgCIgOgBIgrAAgAI5h/IAeAAQABAJAFAFQAEAGALAAQAMAAAEgGQAGgFgBgJIAfAAQABAVgNALQgOAKgaAAQgzAAAAgqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(-69.9,-12.8,139.9,25.6), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA900").s().p("AimCAQgMgGgJgHQgLgIgIgJQgRgSgJgZQgJgZABgdQAAgOACgNQACgNAEgNQAJgaARgTQAIgKALgGQAJgIAMgFQAZgLAeAAQAVAAAUAGQAUAHAPALQAQANAJARQAKASACAXIg4AAQgBgKgEgJQgGgIgIgGQgIgGgKgEQgJgEgLAAQgTAAgPAIQgMAIgJAMQgJANgDARQgFAQAAAQQAAAQAFARQADAPAJAMQAJANAMAIQAPAHATAAQANAAALgEQAKgDAIgJQAPgQADgaIA3AAQgEAfgGANQgKAUgPAOQgPAOgVAIQgTAHgZAAQgeAAgZgKgAJQCEIAAjWIhPAAIAAgxIDZAAIAAAxIhQAAIAADWgAEnCEIAAkHIDFAAIAAAxIiLAAIAAA4ICAAAIAAAtIiAAAIAABAICOAAIAAAxgAC6CEIAAhkIgXAFQgOACgPAAQgYAAgSgFQgTgFgNgKQgMgLgHgRQgEgLgCggIAAhPIA6AAIAABQQAAAYANAJQAGAFAJADQAJACALAAQAOAAAMgCIATgDIAAh2IA6AAIAAEHgAk3CEIgUg7IhkAAIgVA7Ig5AAIBkkHIA6AAIBjEHgAlbAeIghhgIgBAAIgjBgIBFAAgArZCEIAAkHIB4AAQAZAAARAHQARAIALALQALAMAFAQQAFAPABAQQgBAQgFAPQgFAPgLALQgLAMgRAHQgRAHgZAAIg9AAIAABfgAqegHIBAgBQAIgCAJgEQAGgEAEgIQAEgIABgMQgBgNgEgIQgEgHgGgFQgJgEgIgBIhAgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(-72.9,-13.8,145.9,27.7), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ch();
	this.instance.parent = this;
	this.instance.setTransform(-30,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(-30,-31,60,62), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-100,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(-100,-30,200,60), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANDDtIAAnZIFkAAIAABXIj7AAIAABlIDnAAIAABRIjnAAIAAB1IEBAAIAABXgAKZDtIipjSIgjAlIAACtIhoAAIAAnZIBoAAIAAC9IC6i9ICCAAIjNDHIDfESgACgDtIAAjMIjAAAIAADMIhoAAIAAnZIBoAAIAAC1IDAAAIAAi1IBoAAIAAHZgAlLDtIAAnZIBoAAIAAHZgArxDtIAAnZIBpAAIAACrIBiAAQAkgBAfAKQAfAIAWAUQAWATANAbQAPAcAAAnQAAAngPAdQgMAegXARQgWASghALQggAIglAAgAqICZIBUAAQATAAAQgFQAOgDALgIQAWgQAAgnQAAgRgGgMQgHgPgKgHQgMgIgOgEIghgDIhUAAgAysDtIAAnZIDWAAQAsAAAgAMQAfANAUAWQATAVAJAcQAKAbAAAcQAAAegKAbQgJAbgTAUQgUAWgfAMQggAOgsAAIhuAAIAACqgAxEgNIB0gDQAQgDAOgHQALgIAIgOQAHgOAAgXQAAgWgHgPQgIgNgLgIQgOgHgQgCIgigFIhSAAg");
	this.shape.setTransform(19,-41);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-100.7,-64.7,239.4,47.4), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFaDtIgkhpIizAAIglBpIhoAAICznZIBqAAICzHZgAEZA2Ig7iuIgBAAIg/CuIB7AAgAicDtIAAjLIjAAAIAADLIhpAAIAAnZIBpAAIAAC1IDAAAIAAi1IBoAAIAAHZg");
	this.shape.setTransform(-61.2,-40.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-106.6,-64.6,90.8,47.5), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.footb_03();
	this.instance.parent = this;
	this.instance.setTransform(-84.5,-169.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-84.5,-169.5,169,339), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.footb_07();
	this.instance.parent = this;
	this.instance.setTransform(-94,-163.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-94,-163.5,188,327), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.footb_05();
	this.instance.parent = this;
	this.instance.setTransform(-76.5,-163.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-76.5,-163.5,153,327), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.orang();
	this.instance.parent = this;
	this.instance.setTransform(-189,150.8,0.395,0.395,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-189,-205.4,394.3,394.3), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.orang();
	this.instance.parent = this;
	this.instance.setTransform(-330.5,254.8,0.65,0.65,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-330.5,-331.1,648.5,648.5), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.orang();
	this.instance.parent = this;
	this.instance.setTransform(-477.4,320.3,0.781,0.781,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-477.4,-383,778.5,778.5), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.orang();
	this.instance.parent = this;
	this.instance.setTransform(-339.8,277.3,0.622,0.622,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-339.8,-282.7,619.9,619.8), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA800").s().p("AlLGIIAAiPIAcACQAoAAAcgbQAbgdAQg8QAOg7AGheIAFmBIJAAAIAAMeIivAAIAAqKIjpAAIgLECQgFB4gYBZQgWBZg0A0QgZAagkANQgiALgxABQgqgBgggLgAW5GLIAAqKIjxAAIAAiUIKRAAIAACUIjyAAIAAKKgAIyGLIAAseIJYAAIAACUImnAAIAACpIGEAAIAACIImEAAIAADHIGwAAIAACSgAzoGLQAAhFATgxQAVgzAhgpQAjgnAtggIDLiTQAYgVAQgbQARgeAAgiQAAgdgIgYQgJgXgRgOQghghgzAAQgiABgZAPQgZAQgPAdQgNAYgFAiIgIA9IiYAAQgChCARg7QASg6AngqQAigqA2gZQA1gXBIAAQA1AAAxAOQAyAUAkAeQAnAfATAuQAYAuAAA6QAAA5gUAuQgUAnggAhQgeAhgoAbIieBuQgnAfgdApIFzAAIAACIgA9XGLQAAhFAVgxQASgzAigpQAignAwggIDKiTQAXgVAQgbQAQgeABgiQgBgdgHgYQgJgXgQgOQgighg0AAQghABgZAPQgZAQgNAdQgPAYgDAiIgJA9IiXAAQgEhCAQg7QAVg6AlgqQAigqA4gZQA1gXBFAAQA3AAAwAOQAyAUAlAeQAlAfAUAuQAXAuAAA6QAAA5gSAuQgWAngdAhQggAhgoAbIidBuQgoAfgcApIF0AAIAACIg");
	this.shape.setTransform(-70.1,-90.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-258.1,-131.2,376.1,80.7), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuOF5QghgRgegTQgfgXgYgaQgyg3gbhLQgYhJAAhVQAAgrAEgpQAHgnANglQAbhNAyg3QAYgdAfgUQAegXAhgQQBIggBbAAQBaAABJAgQAiAQAdAXQAgAUAYAdQAzA3AZBNQANAlAHAnQAIApAAArQAABVgcBJQgZBLgzA3QgYAaggAXQgdATgiARQhJAghaAAQhbAAhIgggAtOjxQgnAXgaAlQgYAmgMAxQgNAxAAAxQAAAxANAvQAMAuAYAlQAaAlAnAXQApAXA6AAQA7AAAogXQAqgXAXglQAZglALguQANgvABgxQgBgxgNgxQgLgxgZgmQgXglgqgXQgogXg7AAQg6AAgpAXgAkzGEIAAiMIAaADQAoAAAcgbQAagcAQg7QANg4AHhcIAFl4IIyAAIAAMKIirAAIAAp7IjmAAIgJD9QgGB1gVBWQgWBYgzAzQgYAYgjANQgiAMgvAAQgoAAghgMgAT4GHIAAsKIJKAAIAACPImdAAIAACmIF7AAIAACEIl7AAIAADCIGlAAIAACPgAI2GHIAAsKIJJAAIAACPImdAAIAACmIF7AAIAACEIl7AAIAADCIGmAAIAACPgA9JGHIAAsKIJFAAIAACMImZAAIAACSIDMAAQA7AAA0APQAvAPAnAeQAkAeAWAuQAWAuAAA/QAABBgWAvQgTAugnAfQgnAfg0ANQg0AOg/AAgA6dD7ICxAAQAeAAAagGQAWgFATgNQAjgXgBg+QAAgfgKgTQgHgXgUgLQgSgNgZgHIgzgFIixAAg");
	this.shape.setTransform(53.4,-194.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-133.2,-235.6,373.2,81.9), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlGG4IAAilInXAAIAAClIiQAAIAAkpIA8AAQAhgqASgxQAUgyAKg5QALg6ADhFIAFkBIIGAAIAAJGIBRAAIAAEpgAqIgtQgIAzgPAuQgQAxgYAqIElAAIAAnGIjVAAgAUGETIAArKICeAAIAAEBICqAAQA2AAAuAOQAvANAgAfQAiAbAVAqQASArABA4QgBA8gSAsQgSAtglAbQggAcgwAOQgxANg5AAgAWkCUICUAAQAcAAAYgGQAWgGARgLQAfgYAAg6QAAgbgKgTQgHgVgRgKQgPgOgXgEIgzgGIiTAAgAPeETIAAkzIkhAAIAAEzIieAAIAArKICeAAIAAESIEhAAIAAkSICfAAIAALKgAhrETIAArKIIaAAIAACFIl8AAIAACXIFcAAIAAB7IlcAAIAACvIGDAAIAACEgA9JETIAArKIFRAAQAzAAArAHQAqAIAeAWQAfAVAQAiQAQAiAAAyQAAA2gYAlQgZAjgxAXQBDAVAiAwQAOAVAKAeQAHAdAAAgQAAA2gVApQgUAngmAaQgjAYgtALQguANgwAAgA6rCYIDVgDQAVgGARgKQAOgJAKgUQAJgTAAgaQAAgdgIgTQgGgSgQgNQgRgLgTgFQgWgIgbAAIipAAgA6riWICfAAQArAAAZgTQAcgVABgsQAAgbgKgOQgJgRgQgKQgNgJgWgEIgogEIiSAAg");
	this.shape.setTransform(-93.3,28.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-280,-15.6,373.3,88.1), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AOpEHQgYgKgVgOQgVgRgRgSQgkgngSgzQgSgzABg9QgBgeAFgbQADgcAKgaQASg1AkgmQARgVAVgOQAVgQAYgMQAygVA/gBQA/ABAyAVQAZAMAVAQQAVAOAQAVQAkAmATA1QAIAaAFAcQAFAbAAAeQAAA9gSAzQgTAzgkAnQgQASgVARQgVAOgZAKQgyAXg/AAQg/AAgygXgAPVioQgcARgSAYQgRAcgHAiQgKAjAAAgQAAAjAKAhQAHAfARAaQASAbAcAQQAcAPApABQApgBAdgPQAbgQARgbQARgaAJgfQAJghAAgjQAAgggJgjQgJgigRgcQgRgYgbgRQgdgQgpAAQgpAAgcAQgAjQEHQgYgKgWgOQgUgRgSgSQgjgngSgzQgRgzAAg9QAAgeAFgbQADgcAJgaQASg1AjgmQASgVAUgOQAWgQAYgMQAxgVA/gBQA/ABAzAVQAZAMAUAQQAWAOAQAVQAkAmASA1QAIAaAFAcQAGAbgBAeQAAA9gSAzQgSAzgkAnQgQASgWARQgUAOgZAKQgzAXg/AAQg/AAgxgXgAikioQgbARgTAYQgQAcgJAiQgIAjABAgQgBAjAIAhQAJAfAQAaQATAbAbAQQAdAPAnABQArgBAcgPQAbgQARgbQARgaAJgfQAIghAAgjQAAgggIgjQgJgigRgcQgRgYgbgRQgcgQgrAAQgnAAgdAQgAV4EQIAAofIECAAQAmABAgAFQAgAHAYAPQAWAQAMAbQANAZAAAnQAAApgSAcQgUAbgjARQAyAQAZAjQALARAHAYQAGAVAAAZQAAApgPAfQgQAegcATQgbASgjAJQgiAKglgBgAXvCzIClgCQAOgEANgIQAMgIAGgPQAIgOAAgUQAAgWgGgPQgFgNgMgKQgMgJgQgEQgPgGgVAAIiDAAgAXvgyIB7AAQAgAAAUgPQAVgQAAgiQAAgUgGgLQgHgMgMgIQgLgGgPgEIgggDIhxAAgAJgEQIjAjwIgpAsIAADEIh5AAIAAofIB5AAIAADZIDVjZICXAAIjuDkIECE7gAtSEQIAAofID3AAQAzABAlAOQAiAQAZAXQAWAYAJAgQAMAgABAgQgBAjgMAgQgJAdgWAYQgZAZgiAPQglAPgzAAIh/AAIAADCgAragPICFgDQAUgEAPgHQAPgJAIgRQAIgQAAgaQAAgZgIgRQgIgQgPgIQgPgJgUgDIgmgEIhfAAgA0DEQIAAofIF8AAIAABlIkEAAIAAG6gA3nEQIAAl6IgDAAIjQF6IiGAAIAAofIB5AAIAAF5IABAAIDPl5ICHAAIAAIfg");
	this.shape.setTransform(72.7,-59.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-113,-88.2,371.4,57.1), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA800").s().p("AHuFxQg0gRglguQgmgugWhLQgWhNABhuIAFhlQAGgtAKgmQAWhLAmguQAlgrA0gVQAwgRA5AAQA4AAAxARQAxAVApArQAmAuAXBLQAIAmAGAtIAADLQgGAugIAnQgXBLgmAuQgpAugxARQgxAUg4AAQg5AAgwgUgAIhj5QgUANgNAWQgOAXgIAeIgOBvIACB9QACAtALAqQANAqAYAeQAYAfAvAAQAuAAAagfQAZgeAKgqQAMgqACgtIgDi1IgLg3QgFgegOgXQgOgWgWgNQgWgNgeAAQggAAgWANgAhmFxQg0gRglguQglgugVhLQgXhNAAhuIAFhlQAHgtALgmQAVhLAlguQAlgrA0gVQAxgRA4AAQA4AAAxARQAxAVApArQAmAuAWBLQAJAmAHAtIAADLQgHAugJAnQgWBLgmAuQgpAugxARQgxAUg4AAQg4AAgxgUgAgyj5QgUANgOAWQgNAXgIAeIgOBvIABB9QACAtANAqQALAqAZAeQAXAfAvAAQAuAAAZgfQAageAKgqQAMgqACgtIgDi1IgLg3QgGgegNgXQgOgWgWgNQgWgNgeAAQgfAAgWANgAq6FxQgygRgnguQgmgugWhLQgVhNAAhuIAFhlQAGgtAKgmQAWhLAmguQAngrAygVQAygRA4AAQA3AAAxARQAzAVAnArQAnAuAVBLQAJAmAIAtIAADLQgIAugJAnQgVBLgnAuQgnAugzARQgxAUg3AAQg4AAgygUgAqGj5QgUANgOAWQgNAXgIAeIgKA3IgCC1QACAtAMAqQALAqAZAeQAXAfAwAAQAuAAAagfQAageAJgqQAMgqABgtIgBi1IgMg3QgGgegNgXQgOgWgWgNQgWgNgeAAQggAAgWANg");
	this.shape.setTransform(-27.2,-104.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-114.1,-143.8,173.8,77.9), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA800").s().p("AHyFzQg0gSgmguQgngugWhMQgWhNAAhvIAGhkQAHgtAJgnQAWhLAnguQAmgrA0gVQAxgSA4AAQA3AAAzASQAxAVAoArQAlAuAWBLQALAnAFAtIAADLQgFAvgLAmQgWBMglAuQgoAugxASQgzATg3ABQg4gBgxgTgAImj6QgVAOgOAWQgPAWgHAeIgOBxIADB9QABAtAMAqQALAqAZAeQAYAeAwAAQAtAAAageQAageAKgqQANgqABgtIgBi2IgNg4QgGgegOgWQgOgWgVgOQgXgOgdAAQggAAgVAOgAhlFzQgzgSgmguQgmgugWhMQgWhNAAhvIAHhkQAFgtAKgnQAWhLAmguQAmgrAzgVQAzgSA1AAQA5AAAzASQAxAVAoArQAlAuAWBLQAKAnAGAtIAADLQgGAvgKAmQgWBMglAuQgoAugxASQgzATg5ABQg1gBgzgTgAgvj6QgVAOgPAWQgOAWgHAeIgKA4IgDC2QADAtAMAqQALAqAZAeQAYAeAtAAQAvAAAageQAageAKgqQANgqACgtIgCi2IgNg4QgGgegOgWQgOgWgVgOQgXgOgfAAQgdAAgVAOgArFF1QgzgSglgkQgkgjgVg0QgUgxAChBICSAAQAAAdAJAcQAIAaARAUQAQAWAYAMQAXALAigBQA1AAAjgeQARgTAJgUQAKgVAAgcQAAgrgTgWQgQgXgZgLQgagLgdAAIg9gBIAAhqIA1AAQAegDAWgMQAZgLAQgQQAQgVAAggQAAgwgigcQgfgXgsAAQgbAAgXAJQgVAJgPATQgeAmABA6IiRAAQACg7AUguQASgxAighQAigkAvgSQAvgSA6AAQAtABAuAKQAvAOAjAcQAkAbAVAmQAZAoAAAxQAAA5gcApQgaAqg0ANIAAAFQAdAGAaAQQAYANASAYQAkAtAABAQAAA8gXAuQgZAvglAeQgoAhgyAPQgyAQg5ABQg/AAg0gSg");
	this.shape.setTransform(-139.2,-103.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-226.5,-142.5,174.7,78.1), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuIF2QgigOgfgWQgfgWgZgZQgxg3gbhMQgXhIgBhTQABgtAFgoQAGgnAMglQAbhLAxg5QAZgcAfgUQAfgWAigRQBFgfBcAAQBZAABIAfQAiARAeAWQAeAUAZAcQAyA5AbBLQAMAlAGAnQAHAoAAAtQAABTgZBIQgbBMgyA3QgZAZgeAWQgeAWgiAOQhIAhhZAAQhcAAhFghgAtLjwQgmAXgaAkQgYAngNAvQgKAygBAyQABAvAKAvQANAuAYAlQAaAlAmAXQApAWA7ABQA7gBAogWQAogXAZglQAYglAMguQALgvAAgvQAAgygLgyQgMgvgYgnQgZgkgogXQgogYg7AAQg7AAgpAYgAkyGBIAAiLIAbADQApABAZgcQAagbAQg6QAOg5AHhbIADl3IIxAAIAAMIIipAAIAAp6IjlAAIgKD8QgGB0gVBYQgWBWgzAzQgYAYgiAMQgjAMguAAQgoAAghgMgATzGGIAAsIIJIAAIAACOImcAAIAACmIF6AAIAACEIl6AAIAADAIGkAAIAACQgAI0GGIAAsIIJGAAIAACOImcAAIAACmIF6AAIAACEIl6AAIAADAIGlAAIAACQgA9BGGIAAsIIJEAAIAACLImZAAIAACTIDMAAQA6AAAzAOQAwANAnAfQAlAfAWAtQAUAvAAA+QAABAgUAwQgVAtgmAeQgmAeg1AOQg1AQg9AAgA6WD5ICwAAQAeAAAZgGQAXgFASgNQAjgUgBhBQABgdgKgVQgIgWgTgLQgSgMgYgHIg0gGIiwAAg");
	this.shape.setTransform(83.6,-199);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-102.2,-239.7,371.7,81.4), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#ED0909","#F44747"],[0,1],0,29.9,0,-29.8).s().p("AzfE5QhGAAAAhGIAAnlQAAhGBGAAMAm/AAAQBGAAAABGIAAHlQAABGhGAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-131.7,-31.3,263.6,62.6), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#400000").s().p("AzfE5QhGAAAAhGIAAnlQAAhGBGAAMAm/AAAQBGAAAABGIAAHlQAABGhGAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-131.7,-31.2,263.6,62.6), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApjBTIAAgfIhXAAIAAAfIgbAAIAAg3IAMAAQAFgIAEgIQAEgKABgJIADgYIABgwIBgAAIAABrIAOAAIAAA3gAqegGQgCAIgDAKQgDAIgEAIIA2AAIAAhTIgnAAgACHAyIgLgGIgJgJQgJgIgEgNQgEgMAAgOIABgPIADgNQAEgMAJgKIAJgIQAFgEAGgCQAMgGAQAAQAKAAAKADQAKADAIAGQAIAHAFAIQAFAJABAMIgcAAQgBgGgDgDQgCgFgEgDQgEgDgFgCQgFgCgFAAQgKAAgHAEQgHAEgEAHQgEAGgCAIQgCAIAAAJQAAAIACAHQACAIAEAGQAEAGAHAFQAHADAKAAQAGAAAGgCQAFgCAEgEQAHgIACgNIAcAAQgDAPgDAHQgFAKgHAHQgIAHgKAEQgKAEgMAAQgQAAgMgGgAszAyIgLgGIgJgJQgJgIgEgNQgEgMAAgOIABgPIADgNQAEgMAJgKQAEgFAFgDQAFgEAGgCQAMgGAQAAQAKAAAKADQAKADAIAGQAIAHAEAIQAGAJABAMIgdAAQAAgGgDgDQgCgFgEgDQgEgDgFgCQgFgCgFAAQgKAAgHAEQgHAEgEAHQgEAGgCAIQgDAIAAAJQAAAIADAHQACAIAEAGQAEAGAHAFQAHADAKAAQAGAAAGgCQAFgCAEgEQAHgIABgNIAdAAQgDAPgDAHQgFAKgHAHQgIAHgKAEQgKAEgMAAQgQAAgMgGgAL6A1IgGgCIAAgXIAFACIAHABQAHgBAEgCQAEgDABgFIg1hjIAhAAIAkBFIAbhFIAeAAIgpBgIgJARQgFAIgFAFQgGAEgGACQgGACgIAAQgFAAgEgCgAnNA0IAAgYIAFABQAHAAAEgFQAEgFADgJQADgKABgPIAAhAIBgAAIAACDIgdAAIAAhrIgnAAIgCArQgBAUgDAPQgEAOgJAJQgEAEgGACQgGACgHAAQgHAAgGgCgAK5A0Igvg5IgKAJIAAAwIgdAAIAAiDIAdAAIAAA1IA0g1IAlAAIg6A4IA/BLgAHhA0IAAiDIA+AAQAJAAAIACQAIACAGADQAFAEADAHQADAFAAAKQAAAKgEAGQgFAIgIADQAMAEAGAJIAEAJQACAFAAAGQAAAKgEAHQgEAIgHAEQgGAFgJACQgIACgJAAgAH+AeIAfAAIAIgBIAHgDIAFgFQABgEAAgEQAAgGgBgDQgBgEgDgBIgHgDQgEgCgFABIgfAAgAH+gZIAdAAQAIAAAFgEQAFgEAAgIQAAgFgCgDIgEgFIgGgCIgIgBIgbAAgAG3A0IgKgdIgxAAIgLAdIgdAAIAyiDIAeAAIAyCDgAGlACIgQgxIgSAxIAiAAgAEOA0IAAhrIgoAAIAAgYIBtAAIAAAYIgoAAIAABrgAhJA0IAAiDIAdAAIAAAwIAgAAQAKAAAHACQAJADAGAFQAGAFAEAJQADAHAAAKQAAALgDAIQgDAIgHAFQgGAFgJADQgIACgLAAgAgsAdIAcAAIAJgBQAEgBADgDQAFgEAAgKQAAgGgBgDQgCgDgCgCIgHgDIgJgCIgcAAgAicA0IAAhrIgoAAIAAgYIBsAAIAAAYIgnAAIAABrgAjjA0IgKgdIgyAAIgKAdIgdAAIAyiDIAdAAIAyCDgAj1ACIgQgxIgBAAIgRAxIAiAAgAo6A0IAAiDIBjAAIAAAYIhGAAIAAAdIBAAAIAAAWIhAAAIAAAgIBHAAIAAAYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-85.7,-8.3,171.5,16.6), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApjBTIAAgfIhXAAIAAAfIgbAAIAAg3IAMAAQAFgIAEgIQAEgKABgJIADgYIABgwIBgAAIAABrIAOAAIAAA3gAqegGQgCAIgDAKQgDAIgEAIIA2AAIAAhTIgnAAgACHAyIgLgGIgJgJQgJgIgEgNQgEgMAAgOIABgPIADgNQAEgMAJgKIAJgIQAFgEAGgCQAMgGAQAAQAKAAAKADQAKADAIAGQAIAHAFAIQAFAJABAMIgcAAQgBgGgDgDQgCgFgEgDQgEgDgFgCQgFgCgFAAQgKAAgHAEQgHAEgEAHQgEAGgCAIQgCAIAAAJQAAAIACAHQACAIAEAGQAEAGAHAFQAHADAKAAQAGAAAGgCQAFgCAEgEQAHgIACgNIAcAAQgDAPgDAHQgFAKgHAHQgIAHgKAEQgKAEgMAAQgQAAgMgGgAszAyIgLgGIgJgJQgJgIgEgNQgEgMAAgOIABgPIADgNQAEgMAJgKQAEgFAFgDQAFgEAGgCQAMgGAQAAQAKAAAKADQAKADAIAGQAIAHAEAIQAGAJABAMIgdAAQAAgGgDgDQgCgFgEgDQgEgDgFgCQgFgCgFAAQgKAAgHAEQgHAEgEAHQgEAGgCAIQgDAIAAAJQAAAIADAHQACAIAEAGQAEAGAHAFQAHADAKAAQAGAAAGgCQAFgCAEgEQAHgIABgNIAdAAQgDAPgDAHQgFAKgHAHQgIAHgKAEQgKAEgMAAQgQAAgMgGgAL6A1IgGgCIAAgXIAFACIAHABQAHgBAEgCQAEgDABgFIg1hjIAhAAIAkBFIAbhFIAeAAIgpBgIgJARQgFAIgFAFQgGAEgGACQgGACgIAAQgFAAgEgCgAnNA0IAAgYIAFABQAHAAAEgFQAEgFADgJQADgKABgPIAAhAIBgAAIAACDIgdAAIAAhrIgnAAIgCArQgBAUgDAPQgEAOgJAJQgEAEgGACQgGACgHAAQgHAAgGgCgAK5A0Igvg5IgKAJIAAAwIgdAAIAAiDIAdAAIAAA1IA0g1IAlAAIg6A4IA/BLgAHhA0IAAiDIA+AAQAJAAAIACQAIACAGADQAFAEADAHQADAFAAAKQAAAKgEAGQgFAIgIADQAMAEAGAJIAEAJQACAFAAAGQAAAKgEAHQgEAIgHAEQgGAFgJACQgIACgJAAgAH+AeIAfAAIAIgBIAHgDIAFgFQABgEAAgEQAAgGgBgDQgBgEgDgBIgHgDQgEgCgFABIgfAAgAH+gZIAdAAQAIAAAFgEQAFgEAAgIQAAgFgCgDIgEgFIgGgCIgIgBIgbAAgAG3A0IgKgdIgxAAIgLAdIgdAAIAyiDIAeAAIAyCDgAGlACIgQgxIgSAxIAiAAgAEOA0IAAhrIgoAAIAAgYIBtAAIAAAYIgoAAIAABrgAhJA0IAAiDIAdAAIAAAwIAgAAQAKAAAHACQAJADAGAFQAGAFAEAJQADAHAAAKQAAALgDAIQgDAIgHAFQgGAFgJADQgIACgLAAgAgsAdIAcAAIAJgBQAEgBADgDQAFgEAAgKQAAgGgBgDQgCgDgCgCIgHgDIgJgCIgcAAgAicA0IAAhrIgoAAIAAgYIBsAAIAAAYIgnAAIAABrgAjjA0IgKgdIgyAAIgKAdIgdAAIAyiDIAdAAIAyCDgAj1ACIgQgxIgBAAIgRAxIAiAAgAo6A0IAAiDIBjAAIAAAYIhGAAIAAAdIBAAAIAAAWIhAAAIAAAgIBHAAIAAAYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-85.7,-8.3,171.5,16.6), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhXB2IAAgsIh/AAIAAAsIgmAAIAAhPIAQAAQAJgMAFgNQAFgNADgPQADgPABgTIABhFICLAAIAACcIAWAAIAABPgAiphPIgEBEQgCANgFAMQgEANgGAMIBOAAIAAh6Ig5AAgAFaBKIAAi/IAqAAIAABFIAuAAQAOAAANAEQAMADAJAIQAJAIAGALQAFAMAAAOQAAAQgFAMQgFAMgKAHQgJAIgNAEQgNADgPAAgAGEAoIAoAAQAIAAAGgCQAGgBAEgDQAJgHAAgPQAAgIgDgEQgCgFgEgDQgFgEgGgBIgNgCIgoAAgAEKBKIAAhSIhOAAIAABSIgqAAIAAi/IAqAAIAABJIBOAAIAAhJIArAAIAAC/gAgcBKIAAi/ICQAAIAAAjIhmAAIAAApIBdAAIAAAhIhdAAIAAAvIBoAAIAAAjgAn1BKIAAi/IBbAAQAOAAALACQAMACAIAGQAIAFAEAKQAFAJAAANQAAAPgHAKQgHAJgMAGQARAGAJANQAEAGADAHQACAHAAAJQAAAPgGALQgFAKgKAHQgKAHgMADQgMADgNAAgAnKApIAtAAIAMgBIAKgEQAEgDADgFQACgFAAgHQAAgIgCgFQgCgEgEgDQgEgDgGgCQgFgCgHAAIguAAgAnKgnIArAAQALAAAHgGQAIgFAAgMQAAgHgDgEQgCgFgEgCQgEgDgGgBIgLgBIgnAAg");
	this.shape.setTransform(-136.9,18,3.728,3.728);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-323.9,-26,374.2,88.2), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADFCsIAAg/IjMAAIAAkRIA7AAIAADfIBsAAIAAjfIA9AAIAADfIAfAAIAABxgAV9BpQgMgGgLgIQgKgHgJgKQgSgTgJgaQgJgaAAgdQAAgQADgOIAGgbQAJgaASgVQAJgJAKgHQALgJAMgGQAagLAfABQAggBAaALQAMAGAKAJQALAHAJAJQARAVAKAaQAEANACAOQADAOAAAQQABAdgKAaQgKAagRATQgJAKgLAHQgKAIgMAGQgaALggAAQgfAAgagLgAWThxQgNAJgJANQgJANgEARQgEARgBASQABARAEAQQAEAQAJANQAJAOANAHQAPAIAUAAQAVAAAOgIQAPgHAJgOQAIgNAEgQQAFgQAAgRQAAgSgFgRQgEgRgIgNQgJgNgPgJQgOgIgVAAQgUAAgPAIgAoRB0IAAgeQhBAAgigeQgSgOgJgXQgIgUgBgcQABgdAIgVQAJgVARgPQAigcBCgBIAAgbIA8AAIAAAbQAigBAYAIQAaAHARAPQAiAdAAA5QAAAcgJAUQgJAXgRAOQgSAPgZAHQgZAIggAAIAAAegAnVApQAUgBAPgFQAOgEAJgKQASgTAAgfQAAgkgRgRQgIgJgPgEQgQgFgUgBgApKhSQgKAIgFANQgEANgBATQABAQAEANQAFALAKAKQAUATAlABIAAiOQgmABgTASgAt1B0IAAgeQhAAAgjgeQgSgOgJgXQgIgUgBgcQABgdAIgVQAJgVARgPQAigcBCgBIAAgbIA8AAIAAAbQAhgBAaAIQAZAHARAPQAiAdAAA5QAAAcgJAUQgJAXgRAOQgSAPgZAHQgZAIggAAIAAAegAs5ApQAUgBAPgFQAPgEAJgKQASgTAAgfQAAgkgRgRQgJgJgPgEQgPgFgVgBgAuuhSQgJAIgGANQgEANAAATQAAAQAEANQAGALAJAKQAUATAlABIAAiOQgnABgSASgAzMBsQgWgHgPgNQgPgOgKgUQgKgTgCgXIA5AAQAMA2A1AAQAeAAATgVQATgUAEgiIhmAAIAAgvIBkAAQgCgNgGgMQgFgMgJgIQgIgKgNgFQgMgGgPAAQgMAAgKADQgKADgJAHQgHAFgGAHQgGAIgDAKIg5AAQACgUAKgQQAKgSAQgMQAPgNAUgGQAVgIAYABQAfgBAaALQAZAMARATQASAUAIAaQAGANABAPQADAOAAAPQAAAfgKAaQgFAOgGALQgHALgJAKQgQASgZALQgMAFgOADQgOADgPAAQgigDgOgFgA31BpQgMgGgKgIQgLgHgIgKQgTgTgIgaQgJgaAAgdQAAgQACgOQACgOAFgNQAIgaATgVQAIgJALgHQAKgJAMgGQAagLAgABQAfgBAaALQAMAGALAJQALAHAIAJQASAVAJAaQAFANABAOQAEAOAAAQQAAAdgKAaQgJAagSATQgIAKgLAHQgLAIgMAGQgaALgfAAQggAAgagLgA3ehxQgOAJgJANQgIANgFARQgEARAAASQAAARAEAQQAFAQAIANQAJAOAOAHQAOAIAVAAQAVAAAOgIQAOgHAIgOQAJgNAFgQQAEgQAAgRQAAgSgEgRQgFgRgJgNQgIgNgOgJQgOgIgVAAQgVAAgOAIgAZnBtIAAkRICCAAQATAAAQADQARADALAHQAMAJAGANQAHANAAATQAAAVgKAOQgKAOgRAIQAYAJANASQAHAJADAKQADAKAAANQAAAVgIAQQgIAPgPAKQgNAJgRAFQgSAEgSAAgAakA/IBBAAIARgCQAHgCAHgEQAGgEADgHQAEgHAAgLQAAgLgDgHQgCgIgGgDQgHgEgIgCQgIgDgKgBIhBAAgAakg1IA9AAQARAAAJgIQAMgIAAgRQAAgKgFgFQgDgHgGgEQgFgDgIgBIgQgCIg4AAgASNBtIAAjfIhTAAIAAgyIDiAAIAAAyIhTAAIAADfgAPeBtIAAh1IhvAAIAAB1Ig9AAIAAkRIA9AAIAABoIBvAAIAAhoIA9AAIAAERgAI4BtIAAkRIDPAAIAAAyIiRAAIAAA7ICFAAIAAAvIiFAAIAABDICUAAIAAAygAHIBtIAAi+IgCAAIhoC+IhFAAIAAkRIA9AAIAAC9IABAAIBpi9IBEAAIAAERgAh5BtIAAi+IgBAAIhpC+IhEAAIAAkRIA9AAIAAC9IABAAIBoi9IBFAAIAAERgA6aBtIhih4IgUAUIAABkIg9AAIAAkRIA9AAIAABuIBshuIBLAAIh3ByICBCfg");
	this.shape.setTransform(56.1,-58.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-130.8,-75.3,373.9,34.5), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA800").s().p("AHvFzQg0gTgmguQgmgtgVhMQgXhMAAhwIAHhjQAFgvALgmQAVhLAmgvQAmgqA0gVQAxgSA4AAQA4AAAyASQAxAVAoAqQAnAvAWBLQAJAmAHAvIAADJQgHAwgJAmQgWBMgnAtQgoAugxATQgyATg4ABQg4gBgxgTgAIij7QgUAOgOAWQgNAXgJAdIgJA4IgCC2QACAvALAoQANArAXAdQAZAfAvAAQAvAAAZgfQAagdAKgrQALgoADgvIgDi2IgLg4QgGgdgOgXQgOgWgWgOQgWgNgeAAQggAAgWANgAhmFzQg0gTgmguQgmgtgVhMQgWhMAAhwIAFhjQAGgvALgmQAVhLAmgvQAmgqA0gVQAxgSA3AAQA4AAAyASQAyAVAoAqQAmAvAWBLQAJAmAHAvIAADJQgHAwgJAmQgWBMgmAtQgoAugyATQgyATg4ABQg3gBgxgTgAgyj7QgVAOgNAWQgOAXgIAdIgOBzIACB7QACAvAMAoQALArAZAdQAYAfAuAAQAuAAAagfQAbgdAJgrQAMgoACgvIgCi2IgMg4QgGgdgOgXQgOgWgWgOQgWgNgeAAQgeAAgWANgAq8FzQg0gTgmguQgmgtgWhMQgVhMAAhwIAFhjQAHgvAJgmQAWhLAmgvQAmgqA0gVQAygSA4AAQA4AAAxASQAyAVAoAqQAmAvAWBLQAKAmAGAvIAADJQgGAwgKAmQgWBMgmAtQgoAugyATQgxATg4ABQg4gBgygTgAqIj7QgUAOgOAWQgOAXgIAdIgKA4IgCC2QACAvAMAoQAMArAYAdQAYAfAwAAQAtAAAbgfQAZgdAKgrQAMgoACgvIgCi2IgMg4QgGgdgOgXQgNgWgXgOQgWgNgdAAQggAAgWANg");
	this.shape.setTransform(-46.7,-92.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-133.8,-131.4,174.4,78.1), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA800").s().p("AHVF1Qg0gTgngvQgmgtgWhMQgVhMAAhxIAGhkQAFguAKgnQAWhLAmgvQAngsA0gTQAxgTA5ABQA4gBAyATQAyATAoAsQAnAvAUBLQALAnAFAuIAADKQgFAxgLAmQgUBMgnAtQgoAvgyATQgyATg4ABQg5gBgxgTgAIJj8QgUAPgOAVQgOAXgIAdIgOBzIACB9QACAuAMApQAMArAYAdQAYAgAwAAQAuAAAaggQAagdAKgrQAMgpACguIgCi3IgMg5QgGgdgOgXQgOgVgWgPQgWgNgeAAQggAAgWANgAiDF1Qg0gTgmgvQgmgtgWhMQgXhMAAhxIAHhkQAGguAKgnQAWhLAmgvQAmgsA0gTQAzgTA3ABQA4gBAyATQAyATAoAsQAlAvAWBLQALAnAFAuIAADKQgFAxgLAmQgWBMglAtQgoAvgyATQgyATg4ABQg3gBgzgTgAhPj8QgTAPgPAVQgOAXgIAdIgKA5IgBC3QABAuAMApQAMArAYAdQAXAgAxAAQAtAAAaggQAagdAKgrQANgpACguIgDi3IgMg5QgFgdgOgXQgOgVgWgPQgXgNgdAAQgfAAgXANgAqQF5IAAnoIi9AAIAAh0QAoABAmgIQAkgGAegSQAegSATgeQAVgbAHgtIB7AAIAALzg");
	this.shape.setTransform(-147.2,-91.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-231.8,-130.8,169.3,78.5), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon1();
	this.instance.parent = this;
	this.instance.setTransform(-424,-90,0.892,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-424,-90,963.8,180), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuPF6QgjgQgegVQgegWgZgbQgzg2gbhLQgYhKAAhVQAAgsAGgnQAHgnALgnQAbhMAzg4QAZgdAegUQAegWAjgRQBHggBbAAQBZAABJAgQAjARAfAWQAeAUAZAdQAzA4AaBMQAMAnAGAnQAIAnAAAsQAABVgaBKQgaBLgzA2QgZAbgeAWQgfAVgjAQQhJAghZAAQhbAAhHgggAtQjwQgnAVgZAlQgZAngMAwQgNAyAAAxQAAAxANAvQAMAvAZAkQAZAnAnAWQAoAWA7AAQA7AAApgWQApgWAXgnQAZgkAMgvQANgvAAgxQAAgxgNgyQgMgwgZgnQgXglgpgVQgpgZg7AAQg7AAgoAZgAk0GEIAAiNIAaAFQApAAAbgcQAagbAPg7QAQg4AFhdIAFl5II0AAIAAMMIirAAIAAp8IjmAAIgKD9QgGB1gVBXQgXBYgzAzQgZAXgiANQgiAMgvAAQgoAAghgMgAT7GIIAAsMIJLAAIAACQImfAAIAACmIF8AAIAACFIl8AAIAADAIGnAAIAACRgAI2GIIAAsMIJLAAIAACQImeAAIAACmIF7AAIAACFIl7AAIAADAIGmAAIAACRgA9OGIIAAsMIJGAAIAACLImZAAIAACVIDNAAQA7AAAzAOQAxAOAmAfQAlAeAXAuQATAvAAA+QAABCgTAuQgVAvgnAfQgnAeg1AOQg0AOhAAAgA6hD8ICwAAQAfAAAagHQAXgFASgMQAigWABhAQAAgegKgVQgIgWgTgMQgTgMgYgHIg1gGIiwAAg");
	this.shape.setTransform(100.2,-199.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-86.9,-240.5,374.1,82), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ГАРАНТИРОВАННЫЕ ВЫПЛАТЫ
	this.instance = new lib.Символ60();
	this.instance.parent = this;
	this.instance.setTransform(-245.3,220.3,0.89,0.89,0,0,0,-0.1,-16.1);

	this.instance_1 = new lib.Символ59();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-245.1,214,0.89,0.89,0,0,0,0,8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Символ 57
	this.instance_2 = new lib.Символ57();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-247,163.1,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-348.6,137.8,206.9,111.3), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(2.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ56();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3,62.4,1,1,0,0,0,0,12.8);

	this.instance_2 = new lib.Символ55();
	this.instance_2.parent = this;
	this.instance_2.setTransform(6,70.9,1,1,0,0,0,0,-13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(-67,-31,145.9,129.6), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(174.1,-174);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:772.2,y:-772.2},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-379.5,394.3,394.3);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:912.2,y:-912.2},69).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-330.5,-331.1,648.5,648.5);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:990.2,y:-990.2},84).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-477.4,-383,778.5,778.5);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:970.3,y:-970.2},61).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-339.8,-282.7,619.9,619.8);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance.cache(-134,-33,268,67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-133.7,-33.2,270,70), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-131.7,-31.3,263.6,62.6), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ19();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.3);
	this.instance_1.alpha = 0.57;
	this.instance_1.filters = [new cjs.BlurFilter(2, 2, 3)];
	this.instance_1.cache(-88,-10,176,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-88.7,-10,180,26), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-133.7,-31.3,270,70), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(511.3,475.6);
	this.instance.alpha = 0.32;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1 - копия: 2
	this.instance_1 = new lib.Символ41();
	this.instance_1.parent = this;
	this.instance_1.setTransform(243.4,475.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1 - копия
	this.instance_2 = new lib.Символ39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-204.6,475.6);
	this.instance_2.alpha = 0.738;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ37();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-476.1,476.1);
	this.instance_3.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-815.9,92.6,1706.5,778.5), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-12},28,cjs.Ease.get(-1)).to({y:-25},30,cjs.Ease.get(1)).to({y:-12},29,cjs.Ease.get(-1)).to({y:0},27,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-163.5,188,327);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-11.2},19,cjs.Ease.get(-1)).to({y:-23},20,cjs.Ease.get(1)).to({y:-11.5},20,cjs.Ease.get(-1)).to({y:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-163.5,153,327);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:9.8},24,cjs.Ease.get(-1)).to({y:20},25,cjs.Ease.get(1)).to({y:9.6},26,cjs.Ease.get(-1)).to({y:0},24,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-169.5,169,339);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 48
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(38,-1073.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(124).to({_off:false},0).wait(10).to({y:-73.6,alpha:0},0).to({scaleY:1.17,y:23.2,alpha:1},7).to({scaleY:1,y:14.1},2).wait(32).to({scaleX:1.28,scaleY:1.28,x:48.5,y:19.1},10,cjs.Ease.get(1)).to({regY:-0.7,scaleX:0.08,scaleY:0.08,x:2.6,y:-3.1,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 47
	this.instance_1 = new lib.Символ47();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88.9,-1073.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(124).to({_off:false},0).wait(7).to({y:-73.6,alpha:0},0).to({scaleY:1.17,y:23.2,alpha:1},7).to({scaleY:1,y:14.1},2).wait(35).to({regX:-0.1,regY:0.1,scaleX:1.28,scaleY:1.28,x:-113.6,y:19.3},10,cjs.Ease.get(1)).to({regX:-0.7,regY:-0.7,scaleX:0.08,scaleY:0.08,x:-7.3,y:-3.1,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 33
	this.instance_2 = new lib.Символ33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(62.6,-1114.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(124).to({_off:false},0).wait(4).to({y:-113.9,alpha:0},0).to({scaleY:1.17,y:-24,alpha:1},7).to({scaleY:1,y:-26.2},2).wait(38).to({scaleX:1.28,scaleY:1.28,x:79.9,y:-32.3},10,cjs.Ease.get(1)).to({regX:0.7,scaleX:0.08,scaleY:0.08,x:4.5,y:-6.2,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 32
	this.instance_3 = new lib.Символ32();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-62.3,-1114.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(124).to({_off:false},0).wait(1).to({y:-114.1,alpha:0},0).to({regX:-0.1,regY:-0.1,scaleY:1.17,x:-62.4,y:-24.3,alpha:1},7).to({regX:0,regY:0,scaleY:1,x:-62.3,y:-26.4},2).wait(41).to({regX:-0.1,regY:-0.1,scaleX:1.28,scaleY:1.28,x:-79.6,y:-32.6},10,cjs.Ease.get(1)).to({regX:0,regY:-0.7,scaleX:0.08,scaleY:0.08,x:-5.2,y:-6.2,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 31
	this.instance_4 = new lib.Символ31();
	this.instance_4.parent = this;
	this.instance_4.setTransform(84.1,-1170.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(63).to({_off:false},0).wait(13).to({y:-51.1,alpha:0},0).to({scaleY:1.14,y:30,alpha:1},6).to({scaleY:1,y:21.3},2).wait(27).to({scaleX:1.1,scaleY:1.1,x:93.4,y:23.5},9,cjs.Ease.get(1)).to({regY:-1,scaleX:0.05,scaleY:0.05,x:-4.3,y:-0.3,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(65));

	// Символ 30
	this.instance_5 = new lib.Символ30();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-81.9,-1173.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(63).to({_off:false},0).wait(10).to({y:-54,alpha:0},0).to({scaleY:1.14,y:26.6,alpha:1},6).to({scaleY:1,y:18.3},2).wait(30).to({regX:-0.1,regY:0.1,scaleX:1.1,scaleY:1.1,x:-89.3,y:20.3},9,cjs.Ease.get(1)).to({regX:-1,regY:-1,scaleX:0.05,scaleY:0.05,x:-13,y:-0.5,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(65));

	// Символ 29
	this.instance_6 = new lib.Символ29();
	this.instance_6.parent = this;
	this.instance_6.setTransform(114.8,-1214.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(63).to({_off:false},0).wait(7).to({y:-95.4,alpha:0},0).to({scaleY:1.14,y:-20.7,alpha:1},6).to({scaleY:1,y:-23.1},2).wait(33).to({scaleX:1.1,scaleY:1.1,x:127.2,y:-25.3},9,cjs.Ease.get(1)).to({scaleX:0.05,scaleY:0.05,x:-2.7,y:-2.6,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(65));

	// Символ 28
	this.instance_7 = new lib.Символ28();
	this.instance_7.parent = this;
	this.instance_7.setTransform(30.1,-1214.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(63).to({_off:false},0).wait(4).to({y:-95.4,alpha:0},0).to({scaleY:1.14,y:-20.7,alpha:1},6).to({scaleY:1,y:-23.1},2).wait(36).to({scaleX:1.1,scaleY:1.1,x:34,y:-25.3},9,cjs.Ease.get(1)).to({regX:-1,scaleX:0.05,scaleY:0.05,x:-7.1,y:-2.6,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(65));

	// Символ 27
	this.instance_8 = new lib.Символ27();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-94,-1215.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(63).to({_off:false},0).wait(1).to({y:-95.7,alpha:0},0).to({scaleY:1.14,y:-21,alpha:1},6).to({scaleY:1,y:-23.4},2).wait(39).to({scaleX:1.1,scaleY:1.1,x:-102.5,y:-25.6},9,cjs.Ease.get(1)).to({scaleX:0.05,scaleY:0.05,x:-13.6,y:-2.6,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(65));

	// Символ 15
	this.instance_9 = new lib.Символ15();
	this.instance_9.parent = this;
	this.instance_9.setTransform(126,-1185.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(13).to({y:-52.5,alpha:0},0).to({scaleY:1.11,y:30.5,alpha:1},6).to({scaleY:1,y:23.8},2).wait(29).to({scaleX:1.13,scaleY:1.13,x:143.9,y:27.2},9,cjs.Ease.get(1)).to({regX:0.7,scaleX:0.08,scaleY:0.08,x:0.3,y:-0.5,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(126));

	// Символ 14
	this.instance_10 = new lib.Символ14();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-65.3,-1185.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({y:-52.8,alpha:0},0).to({scaleY:1.11,y:30.3,alpha:1},6).to({scaleY:1,y:23.6},2).wait(32).to({scaleX:1.13,scaleY:1.13,x:-72.6,y:27},9,cjs.Ease.get(1)).to({regX:-0.7,regY:-0.7,scaleX:0.08,scaleY:0.08,x:-14.3,y:-0.5,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(126));

	// Символ 13
	this.instance_11 = new lib.Символ13();
	this.instance_11.parent = this;
	this.instance_11.setTransform(134.9,-1230.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(7).to({y:-97.5,alpha:0},0).to({scaleY:1.11,y:-19.1,alpha:1},6).to({scaleY:1,y:-21.2},2).wait(35).to({scaleX:1.13,scaleY:1.13,x:154,y:-23.6},9,cjs.Ease.get(1)).to({regX:0.7,regY:-0.7,scaleX:0.08,scaleY:0.08,x:1,y:-3.9,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(126));

	// Символ 12
	this.instance_12 = new lib.Символ12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(37.2,-1230.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({y:-97.5,alpha:0},0).to({scaleY:1.11,y:-19.1,alpha:1},6).to({scaleY:1,y:-21.2},2).wait(38).to({scaleX:1.13,scaleY:1.13,x:43.4,y:-23.6},9,cjs.Ease.get(1)).to({regX:-0.7,regY:-0.7,scaleX:0.08,scaleY:0.08,x:-6.5,y:-3.9,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(126));

	// Символ 3
	this.instance_13 = new lib.Символ3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-109.3,-1230.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({y:-97.9,alpha:0},0).to({scaleY:1.11,y:-19.6,alpha:1},6).to({scaleY:1,y:-21.6},2).wait(41).to({scaleX:1.13,scaleY:1.13,x:-122.4,y:-24.1},9,cjs.Ease.get(1)).to({regX:-0.7,regY:-0.7,scaleX:0.08,scaleY:0.08,x:-17.6,y:-4,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(126));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.9,-1471.1,375.9,348);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(-420,167.7,0.527,0.527,0,0,0,-10,-146.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// footb_05.png
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-426.6,628.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// footb_07.png
	this.instance_2 = new lib.Символ9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-346.1,636.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// footb_03.png
	this.instance_3 = new lib.Символ7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-506.6,624.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// fon1.png
	this.instance_4 = new lib.Символ6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-419.6,255,0.84,1.373,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// orang.png
	this.instance_5 = new lib.Символ11();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-454.6,-113.2,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-1325.6,-929.1,1073.5,1729.2), null);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 52
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(-145.5,278.4,0.612,0.612,0,0,0,-245.2,193.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-245.1,regY:193.1,scaleX:1.01,scaleY:1.01,y:117.6},13,cjs.Ease.get(-1)).wait(28).to({regX:-245.2,regY:193.3,scaleX:0.61,scaleY:0.61,y:278.4},13,cjs.Ease.get(1)).wait(32));

	// Символ 51
	this.instance_1 = new lib.Символ51();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-142.9,114.1,1.382,1.382,0,0,0,5.9,33.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:6,regY:33.6,scaleX:0.56,scaleY:0.56,x:-142.8,y:-48.4},13,cjs.Ease.get(-1)).wait(28).to({regX:5.9,regY:33.7,scaleX:1.38,scaleY:1.38,x:-142.9,y:114.1},13,cjs.Ease.get(1)).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.6,24.7,201.6,287.8);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// vip.png
	this.instance = new lib.Символ61();
	this.instance.parent = this;
	this.instance.setTransform(122.8,-224.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 6
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-23.3,-65.3,1,1.369,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 11
	this.instance_2 = new lib.Символ11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-58,-501.1,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-929,-1317,1028.9,1791.6), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.202,1.199);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-133.7,-31.3,270,70), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(0,-1,1.046,1.046,0,0,0,0,-0.1);
	this.instance.alpha = 0.199;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:-0.8},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:-0.1,scaleX:1.05,scaleY:1.05,y:-1},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:-0.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.7,-32.2,270,70);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(10));

	// Слой 1
	this.btn1 = new lib.Символ26();
	this.btn1.parent = this;
	this.btn1.setTransform(-420.4,392.4,0.846,0.846,0,0,0,-0.2,0.2);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn1).to({y:658},6,cjs.Ease.get(1)).to({y:642},3,cjs.Ease.get(-1)).wait(1).to({y:658},3,cjs.Ease.get(1)).to({y:392.4},6,cjs.Ease.get(-1)).wait(1));

	// Слой 4
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(-417.9,-23.7,0.957,0.957);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Слой 2
	this.instance_1 = new lib.Символ49();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-396.6,379.2,1,1,0,0,0,0,-8.8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},9).wait(1).to({alpha:0},9).wait(1));

	// Слой 1
	this.m1 = new lib.Символ1();
	this.m1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.m1).to({alpha:0},9).wait(1).to({alpha:1},9).wait(1));

	// Слой 5
	this.instance_2 = new lib.fon();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-252,-255,1.037,1.867,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1325.6,-929.1,1073.6,1794.1);


// stage content:
(lib.banner240x800 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		function fl_MouseOverHandler_5()
		{
		_this.main.gotoAndPlay(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		function fl_MouseOutHandler_2()
		{
		_this.main.gotoAndPlay(11);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.main = new lib.Символ4();
	this.main.parent = this;
	this.main.setTransform(540,95.5);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-665.6,-433.6,1073.6,1794.1);
// library properties:
lib.properties = {
	width: 240,
	height: 800,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/banner240x800_atlas_P_.png?1483704487298", id:"banner240x800_atlas_P_"},
		{src:"images/banner240x800_atlas_NP_.jpg?1483704487298", id:"banner240x800_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;