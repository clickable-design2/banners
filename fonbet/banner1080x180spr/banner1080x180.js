(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"banner1080x180_atlas_P_", frames: [[1800,0,60,62],[0,0,1080,180],[1272,0,169,339],[1443,0,153,327],[1082,0,188,327],[1598,0,200,60],[1862,0,45,57]]},
		{name:"banner1080x180_atlas_NP_", frames: [[0,0,1080,180],[0,182,1274,136]]}
];


// symbols:



(lib.ch = function() {
	this.spriteSheet = ss["banner1080x180_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fon = function() {
	this.spriteSheet = ss["banner1080x180_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fon1 = function() {
	this.spriteSheet = ss["banner1080x180_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.footb_03 = function() {
	this.spriteSheet = ss["banner1080x180_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.footb_05 = function() {
	this.spriteSheet = ss["banner1080x180_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.footb_07 = function() {
	this.spriteSheet = ss["banner1080x180_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["banner1080x180_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.orang = function() {
	this.spriteSheet = ss["banner1080x180_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.vip = function() {
	this.spriteSheet = ss["banner1080x180_atlas_P_"];
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
	this.shape.graphics.f("#FFFFFF").s().p("AI1CgIAAk/IDxAAIAAA6IiqAAIAABFICdAAIAAA3IidAAIAABPICuAAIAAA6gAHCCgIhyiOIgYAZIAAB1IhHAAIAAk/IBHAAIAACAIB+iAIBYAAIiLCGICXC5gABsCgIAAiJIiBAAIAACJIhHAAIAAk/IBHAAIAAB6ICBAAIAAh6IBHAAIAAE/gAjfCgIAAk/IBGAAIAAE/gAn9CgIAAk/IBHAAIAABzIBCAAQAYAAAWAGQAUAGAPANQAPANAJASQAKATAAAbQAAAagKATQgIAUgPANQgQAMgWAHQgVAGgagBgAm2BnIA5AAQANAAALgCQAJgDAHgFQAPgLAAgaQAAgNgEgIQgEgJgIgFQgHgFgKgDIgWgCIg5AAgAspCgIAAk/ICRAAQAdgBAWAJQAVAJANAOQAOAPAGATQAGASAAATQAAAUgGASQgGATgOANQgNAPgVAIQgWAKgdAAIhLAAIAABygArjgJIBPgBQALgCAJgGQAIgEAFgKQAFgKAAgPQAAgPgFgKQgFgJgIgFQgJgFgLgCIgYgCIg3AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-81,-16,162.1,32.1), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADqCgIgZhHIh4AAIgZBHIhGAAIB5k/IBHAAIB5E/gAC+AkIgoh1IAAAAIgrB1IBTAAgAhpCgIAAiJIiCAAIAACJIhHAAIAAk/IBHAAIAAB6ICCAAIAAh6IBGAAIAAE/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-30.7,-16,61.5,32.1), null);


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

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-189,-205.5,394.3,394.3), null);


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
	this.instance.setTransform(-397.4,320.3,0.781,0.781,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-397.4,-383,778.5,778.5), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.orang();
	this.instance.parent = this;
	this.instance.setTransform(-339.8,277.3,0.622,0.622,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-339.8,-282.7,619.9,619.9), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AvDEXQg4gRAWg4QAvh2AkhzQAIgagRgTQg6hAA1hDQBfh3BOBbQBsgeBqgxQC+gIgeDIQgGAogSAkQBvBliwA0QgUAGgTAJQBOA/AXBbQABAGgHgBQhVgNg1hSIgRgZQgPAMgOAQQAvBriQAKQgaABgZAAQhwAAhpgggANwEYQmogNmogDQh4AAh3gQQhMgKAbhHQAQgoArADQCCAIBwgSQHZgBHQAgQAXACgBAbQgEBkhwAAIgIAAgAGSAmQgFgfgDgfQgGAggRAcQg0BUgkhWQgJgXgCgaQgPBAhMAUQgiAJgEgkQgEgdAAgcQgtB9iFg5QgYgKgIgaQgNgpgBgoQgJADgMAAQAECKh6ACQgTAAgCgXQgGhkAIhfQgJgEgFgOQgTgvAVgbQgCgHACgKQAHgdAZgGIAAgBQACgIALAAQBvgZAlBJQAMAXgbALQgLAEgLADQAVAOAMARIADgHQAMgbAegFQAbgFAagHQBsAOANBSQANgrAWgmQAJgPASAMQAIAEAGAGIAbghQAMgPARAAQBWAjAVBTQAEhSAXhHQAFgPAWgCQA3gBABA1IAAAEQBuAEAVBdQgBgWAKgcQANgkAigGQBWAKAiAjQgHgfAogFQAOgFAOgDQgCghArgMQBDApgMAYIAOAQQAfAmgwATIgKADQABAZgDAbQgFAjAEAkQByBRiVAIQgwADgJg2QgNhSAJhJQgPgHgLgMQAGAigYAxQgFAKgMALQALAFAMAKQAVASgJAeQgjB7iNhbQgZgQgKgaQgYAwg0AaQgvAWgfAAQgyAAgLg7gAHngQIABAEQAKAIARgHQAag3gIhCIgxgBIADB1gAAshxQADAuAFAuIACABQAPgwgXgsIgBgCIgBABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-100.3,-31.1,200.8,62.3), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA800").s().p("AhjB2IAAgrIAJABQAMAAAIgJQAIgIAFgTQAEgRACgbIACh0ICsAAIAADvIg1AAIAAjDIhGAAIgCBNQgCAkgHAbQgHAbgPAPQgIAHgKAFQgLADgOAAQgNAAgKgDgAG4B3IAAjDIhJAAIAAgsIDFAAIAAAsIhIAAIAADDgACpB3IAAjvIC0AAIAAAsIh/AAIAAAzIB0AAIAAAoIh0AAIAAA8ICBAAIAAAsgAl4B3QAAgVAGgPQAGgPAKgMQAKgMAOgKIA9grQAHgHAFgHQAFgKAAgKQAAgJgDgGQgCgIgFgEQgKgKgQABQgKgBgHAFQgIAFgEAJQgEAHgCAKIgCATIguAAQAAgVAFgRQAFgSAMgMQAKgNAQgHQAQgHAWAAQAQAAAOAEQAPAGALAJQAMAJAGAOQAHAOAAARQAAARgGAOQgGAMgKAJQgJAKgMAIIgvAhQgMAJgJAMIBwAAIAAAqgAozB3QAAgVAGgPQAGgPAKgMQAKgMAOgKIA9grQAHgHAFgHQAFgKAAgKQAAgJgDgGQgCgIgFgEQgKgKgQABQgKgBgHAFQgIAFgEAJQgEAHgBAKIgDATIgtAAQgBgVAFgRQAGgSALgMQAKgNARgHQAQgHAVAAQAQAAAOAEQAPAGAMAJQALAJAGAOQAHAOAAARQAAARgGAOQgGAMgJAJQgKAKgMAIIgvAhQgMAJgIAMIBvAAIAAAqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-56.4,-12.1,112.9,24.2), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkXB0QgKgFgJgGQgKgHgHgIQgQgRgIgXQgHgXAAgaQAAgMABgNQACgMAEgLQAIgYAQgRQAHgJAKgGQAJgHAKgFQAWgKAcAAQAcAAAWAKQALAFAJAHQAJAGAIAJQAPARAIAYQAEALACAMQADANAAAMQAAAagJAXQgIAXgPARQgIAIgJAHQgJAGgLAFQgWAKgcAAQgcAAgWgKgAkDhJQgMAHgIALQgIAMgDAPQgEAPAAAOQAAAPAEAPQADAOAIALQAIAMAMAHQAMAHASAAQASAAANgHQAMgHAIgMQAHgLAEgOQAEgPAAgPQAAgOgEgPQgEgPgHgMQgIgLgMgHQgNgHgSAAQgSAAgMAHgAheB3IAAgrIAIABQANAAAIgIQAIgJAFgSQAEgRACgcIAChzICsAAIAADuIg1AAIAAjCIhGAAIgDBNQgCAkgGAaQgHAbgPAQQgIAHgKAEQgLAEgOAAQgNAAgKgEgAGHB4IAAjuIC0AAIAAAsIh/AAIAAAzIB0AAIAAAoIh0AAIAAA7ICBAAIAAAsgACuB4IAAjuIC0AAIAAAsIh/AAIAAAzIB0AAIAAAoIh0AAIAAA7ICBAAIAAAsgAo8B4IAAjuICyAAIAAArIh9AAIAAAtIA+AAQASAAAQAEQAPAFAMAJQALAJAHAOQAGAOAAATQAAAUgGAPQgGAOgMAJQgMAKgQAEQgQAEgUAAgAoHBNIA2AAQAJAAAIgCQAHgBAGgEQAKgHAAgTQAAgKgDgGQgCgHgGgDQgGgEgHgCIgQgCIg2AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-57.3,-12.6,114.7,25.2), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhyCcIAAg7IioAAIAAA7IgzAAIAAhpIAWAAQAMgPAGgSQAHgRADgUQAEgUACgZIAChbIC2AAIAADOIAdAAIAABpgAjlgPQgCARgGAQQgFASgJAPIBnAAIAAigIhKAAgAHHBhIAAj8IA4AAIAABbIA8AAQATAAARAFQAQAFAMALQALAJAIAPQAGAPABAUQgBAVgGAPQgHAQgMAKQgMAKgRAFQgRAEgUAAgAH/A0IA0AAQALAAAHgCQAJgCAGgEQAKgIABgVQgBgJgDgGQgCgIgGgDQgGgFgIgCIgSgCIg0AAgAFeBhIAAhsIhmAAIAABsIg4AAIAAj8IA4AAIAABhIBmAAIAAhhIA5AAIAAD8gAglBhIAAj8IC9AAIAAAvIiGAAIAAA2IB7AAIAAArIh7AAIAAA+ICJAAIAAAugAqUBhIAAj8IB4AAQASAAAPADQAPADALAHQAKAIAHAMQAFAMAAASQAAATgJANQgIAMgRAIQAXAIAMARQAFAHADAKQADAKAAAMQAAATgHAOQgIAOgNAJQgMAJgRAEQgQAEgQAAgApcA2IBMgBQAIgCAFgEQAFgDAEgHQADgHAAgJQAAgKgDgHQgCgGgGgEQgGgEgGgCQgIgDgKAAIg8AAgApcg0IA5AAQAPAAAJgHQAKgIAAgPQAAgKgEgFQgCgGgGgDQgFgDgHgCIgPgBIg0AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-66,-15.5,132.1,31.2), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGzB6QgLgFgJgGQgKgIgIgIQgRgSgIgYQgIgYAAgcQAAgNACgNQABgNAFgMQAIgZARgSQAIgJAKgHQAJgHALgGQAYgKAdAAQAdAAAYAKQALAGAKAHQAKAHAHAJQARASAJAZQAEAMACANQACANAAANQAAAcgIAYQgJAYgRASQgHAIgKAIQgKAGgLAFQgYALgdAAQgdAAgYgLgAHIhNQgNAHgIAMQgIAMgEAQQgEAQAAAPQAAAQAEAPQAEAPAIAMQAIANANAHQANAHATAAQATAAAOgHQAMgHAIgNQAIgMAEgPQAEgPAAgQQAAgPgEgQQgEgQgIgMQgIgMgMgHQgOgIgTAAQgTAAgNAIgAhgB6QgLgFgKgGIgSgQQgQgSgJgYQgIgYAAgcQAAgNACgNQACgNAEgMQAJgZAQgSQAIgJAKgHQAKgHALgGQAXgKAdAAQAdAAAXAKQAMAGAJAHQAKAHAIAJQARASAIAZIAGAZQADANAAANQAAAcgJAYQgIAYgRASQgIAIgKAIQgJAGgMAFQgXALgdAAQgdAAgXgLgAhMhNQgMAHgJAMQgIAMgEAQQgDAQAAAPQAAAQADAPQAEAPAIAMQAJANAMAHQAOAHASAAQAUAAANgHQAMgHAIgNQAIgMAEgPQAEgPAAgQQAAgPgEgQQgEgQgIgMQgIgMgMgHQgNgIgUAAQgSAAgOAIgAKLB/IAAj8IB4AAQARAAAPACQAPADALAIQALAHAFAMQAGAMAAASQAAATgIANQgJANgRAIQAXAHAMAQQAFAIAEALQACAKAAALQAAATgHAPQgHAOgNAJQgNAIgQAEQgQAFgRAAgALCBTIBNgBQAGgCAGgDQAGgEADgHQADgGAAgKQAAgKgCgHQgDgGgFgFQgGgEgHgCQgHgCgKAAIg9AAgALCgXIA5AAQAPAAAKgHQAJgHAAgQQAAgJgDgFQgDgGgFgEQgGgDgHgBIgOgCIg1AAgAEbB/IhahwIgTAUIAABcIg4AAIAAj8IA4AAIAABlIBjhlIBGAAIhuBqIB4CSgAmKB/IAAj8IByAAQAYAAARAGQAQAIALALQALALAEAPQAGAOAAAQQAAAQgGAOQgEAOgLALQgLALgQAHQgRAHgYAAIg7AAIAABbgAlTgGIA+gCQAJgCAHgDQAHgEAEgIQAEgIAAgLQAAgMgEgIQgEgHgHgEQgHgEgJgCIgSgCIgsAAgApUB/IAAj8ICxAAIAAAvIh5AAIAADNgAq+B/IAAiwIgBAAIhhCwIg+AAIAAj8IA4AAIAACuIAAAAIBhiuIA/AAIAAD8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-86.3,-13.2,172.6,26.6), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA800").s().p("ADICWQgVgHgPgTQgPgSgJgfQgJgfAAgtIADgoQACgSAEgQQAJgfAPgSQAPgRAVgJQAUgHAXAAQAXAAAUAHQAUAJAQARQAQASAJAfQADAQADASIAABRQgDATgDAQQgJAfgQASQgQATgUAHQgUAIgXAAQgXAAgUgIgADdhlQgIAGgFAJQgGAJgDAMIgGAtIABAzQABASAEARQAGARAJAMQAKAMATAAQATAAAKgMQALgMAEgRQAEgRABgSIgBhJIgEgXQgDgMgFgJQgGgJgJgGQgJgFgMAAQgNAAgJAFgAgpCWQgVgHgPgTQgPgSgJgfQgJgfAAgtIACgoQADgSAEgQQAJgfAPgSQAPgRAVgJQAUgHAWAAQAXAAAUAHQAUAJAQARQAQASAJAfIAGAiIAABRIgGAjQgJAfgQASQgQATgUAHQgUAIgXAAQgWAAgUgIgAgUhlQgIAGgFAJQgGAJgDAMIgGAtIABAzQABASAFARQAEARAKAMQAKAMASAAQATAAAKgMQALgMAEgRQAEgRABgSIgBhJIgEgXQgDgMgFgJQgGgJgJgGQgJgFgMAAQgMAAgJAFgAkbCWQgUgHgQgTQgPgSgJgfQgJgfAAgtIACgoQADgSAEgQQAJgfAPgSQAQgRAUgJQAVgHAWAAQAXAAAUAHQAUAJAQARQAQASAIAfQAEAQADASIAABRQgDATgEAQQgIAfgQASQgQATgUAHQgUAIgXAAQgWAAgVgIgAkGhlQgIAGgFAJQgGAJgDAMIgEAXIgBBJQABASAFARQAEARAKAMQAKAMATAAQATAAAKgMQALgMAEgRQAFgRAAgSIAAhJIgFgXQgDgMgFgJQgGgJgJgGQgJgFgMAAQgNAAgJAFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-35.2,-15.8,70.6,31.6), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA800").s().p("ADJCWQgVgHgPgTQgQgSgJgfQgJgfAAgtIADgoIAGgiQAJgfAQgSQAPgRAVgJQAUgHAXAAQAWAAAVAHQAUAJAQARQAPASAJAfQAEAQACASIAABRQgCATgEAQQgJAfgPASQgQATgUAHQgVAIgWAAQgXAAgUgIgADehlQgIAGgGAJQgGAJgDAMIgFAtIABAzQAAASAFARQAFARAKAMQAJAMAUAAQASAAALgMQAKgMAEgRQAFgRABgSIgBhJIgFgXQgCgMgGgJQgGgJgIgGQgJgFgMAAQgNAAgJAFgAgoCWQgVgHgPgTQgQgSgJgfQgJgfAAgtIADgoQACgSAEgQQAJgfAQgSQAPgRAVgJQAUgHAVAAQAXAAAVAHQAUAJAQARQAPASAJAfQAEAQACASIAABRQgCATgEAQQgJAfgPASQgQATgUAHQgVAIgXAAQgVAAgUgIgAgThlQgIAGgGAJQgGAJgDAMIgEAXIgBBJQABASAFARQAFARAKAMQAJAMASAAQATAAALgMQAKgMAEgRQAFgRABgSIgBhJIgFgXQgCgMgGgJQgGgJgIgGQgJgFgNAAQgLAAgJAFgAkeCXQgVgIgPgOQgPgOgIgVQgIgUABgaIA7AAQAAAMADALQAEALAGAHQAHAKAKAEQAJAFAOgBQAVAAAOgMQAHgHAEgJQAEgIAAgMQAAgRgIgJQgGgJgKgEQgLgFgMAAIgYgBIAAgqIAVAAQAMgBAJgFQAKgEAHgHQAGgIAAgNQAAgUgOgLQgMgJgSAAQgLAAgJADQgJAEgGAIQgMAPABAYIg7AAQABgYAIgTQAHgTAOgOQAOgOATgIQATgHAXAAQASAAATAEQATAGAOALQAPALAIAPQAKAQAAAUQAAAYgLAQQgLARgVAFIAAACQAMADALAGQAJAFAIAKQAOASAAAaQAAAYgJATQgKATgPAMQgQANgVAGQgUAHgXAAQgZAAgVgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-35.3,-15.8,70.7,31.6), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlpCWQgNgGgNgJQgMgJgKgKQgUgWgKgeQgKgdAAghQAAgRADgQQABgQAGgPQAKgeAUgWQAKgMAMgIQANgJANgGQAcgNAkAAQAkAAAdANQAOAGALAJQAMAIALAMQAUAWAKAeQAFAPACAQQADAQAAARQAAAhgKAdQgKAegUAWQgLAKgMAJQgLAJgOAGQgdANgkAAQgkAAgcgNgAlRhfQgPAJgKAOQgKAQgEATQgFAUAAATQAAATAFATQAEASAKAPQAKAPAPAJQARAJAXAAQAYAAAQgJQAQgJAKgPQAKgPAEgSQAFgTAAgTQAAgTgFgUQgEgTgKgQQgKgOgQgJQgQgKgYAAQgXAAgRAKgAh5CaIAAg4IAKACQAQAAAKgLQALgLAHgXQAFgXADgkIABiWIDgAAIAAE2IhEAAIAAj9IhcAAIgDBkQgDAvgIAjQgJAigUAVQgKAJgNAFQgOAFgTAAQgPAAgNgFgAH7CcIAAk2IDpAAIAAA5IilAAIAABCICXAAIAAA1IiXAAIAABMICoAAIAAA6gADiCcIAAk2IDoAAIAAA5IilAAIAABCICYAAIAAA1IiYAAIAABMICpAAIAAA6gArmCcIAAk2IDoAAIAAA4IijAAIAAA7IBRAAQAYAAATAFQAUAGAPAMQAPAMAJASQAIASAAAZQAAAagIATQgJASgPAMQgPAMgVAGQgVAGgZAAgAqhBkIBGAAQAMAAAKgDQAJgCAIgFQANgIAAgaQAAgMgDgIQgEgJgHgEQgIgFgJgDIgVgCIhGAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-74.3,-16.3,148.6,32.6), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-34.3,-16.2,34.4,16.2).s().p("AsrM8IOn+8IKwFFIune8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-81.1,-115.2,162.3,230.5), null);


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

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-50.1,-11.8,100.4,23.7), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACKB5IAAgsIiPAAIAAjAIAqAAIAACcIBLAAIAAicIArAAIAACcIAVAAIAABQgAPYBJIgQgJQgIgFgGgHQgNgNgGgTQgGgSAAgUQAAgLACgKIAEgTQAGgSANgOQAGgHAIgFQAHgGAJgEQARgIAWAAQAWAAATAIQAIAEAHAGQAIAFAGAHQAMAOAHASIAFATQACAKAAALQgBAUgGASQgHATgMANQgGAHgIAFIgPAJQgTAIgWAAQgWAAgRgIgAPnhOQgJAFgHAJQgGAKgDAMQgDAMAAAMQAAAMADALQADALAGAJQAHAKAJAFQAKAGAOAAQAPAAAKgGQAKgFAGgKQAGgJADgLQADgLAAgMQAAgMgDgMQgDgMgGgKQgGgJgKgFQgKgGgPAAQgOAAgKAGgAlyBRIAAgVQgtAAgYgUQgNgLgGgPQgGgOAAgUQAAgUAGgPQAGgPAMgKQAYgUAugBIAAgTIAqAAIAAATQAYAAARAFQASAGAMAKQAYAUgBAoQABAUgHAOQgGAPgMAKQgNALgRAFQgRAFgXAAIAAAVgAlIAdQAOgBALgDQAJgDAHgHQANgNAAgWQgBgZgLgMQgHgGgKgDQgKgEgPAAgAmag5QgHAGgDAJQgEAJAAANQAAALAEAJQADAIAHAHQAOANAaABIAAhjQgbABgNAMgAprBRIAAgVQgtAAgYgUQgNgLgGgPQgGgOAAgUQAAgUAGgPQAGgPAMgKQAYgUAugBIAAgTIAqAAIAAATQAYAAARAFQASAGALAKQAZAUAAAoQgBAUgGAOQgGAPgMAKQgMALgSAFQgSAFgWAAIAAAVgApBAdQAOgBAKgDQALgDAGgHQAMgNAAgWQABgZgMgMQgHgGgKgDQgKgEgPAAgAqTg5QgHAGgDAJQgEAJABANQgBALAEAJQADAIAHAHQAOANAaABIAAhjQgbABgNAMgAtbBMQgPgFgLgKQgKgJgIgOQgGgNgCgQIApAAQAHAlAmAAQAVAAANgOQANgOADgYIhHAAIAAghIBGAAQgCgJgEgJQgDgIgHgGQgGgGgIgEQgJgEgLAAQgIAAgHACQgHACgGAFQgFADgFAGQgEAFgBAHIgpAAQACgOAHgLQAHgMALgJQAKgJAPgFQAPgFAQAAQAWAAASAIQARAIAMAOQAMANAHATQADAJACAKQABAKAAAKQAAAWgGASQgDAKgFAIQgFAIgGAGQgMANgRAIQgIADgKACQgKACgKAAQgZgCgJgDgAwqBJIgRgJQgHgFgGgHQgNgNgGgTQgGgSAAgUQAAgLABgKIAFgTQAGgSANgOQAGgHAHgFQAIgGAJgEQARgIAWAAQAWAAATAIQAIAEAIAGQAHAFAGAHQAMAOAHASIAFATQACAKAAALQgBAUgGASQgHATgMANQgGAHgHAFIgQAJQgTAIgWAAQgWAAgRgIgAwbhOQgKAFgGAJQgGAKgDAMQgDAMAAAMQAAAMADALQADALAGAJQAGAKAKAFQAKAGAOAAQAPAAAKgGQAKgFAGgKQAGgJADgLQADgLAAgMQAAgMgDgMQgDgMgGgKQgGgJgKgFQgKgGgPAAQgOAAgKAGgAR7BNIAAjAIBbAAQANAAAMACQALADAJAFQAIAGAEAJQAEAJABAOQgBAOgGAKQgHAKgNAGQASAFAJANQAEAGADAHQACAIAAAJQgBAOgFALQgGALgJAHQgKAGgNADQgMAEgNAAgASmAsIAtAAIAMgBIAKgEQAEgDADgFQACgFAAgIQAAgHgCgFQgCgGgEgCQgFgDgFgBQgGgCgGAAIguAAgASmglIAqAAQAMAAAHgFQAIgGgBgMQAAgHgCgEQgDgEgEgDQgEgCgFgBIgLgBIgnAAgAMvBNIAAicIg5AAIAAgkICdAAIAAAkIg5AAIAACcgAK1BNIAAhSIhOAAIAABSIgrAAIAAjAIArAAIAABKIBOAAIAAhKIAqAAIAADAgAGOBNIAAjAICRAAIAAAkIhnAAIAAApIBeAAIAAAhIheAAIAAAuIBpAAIAAAkgAE/BNIAAiFIgBAAIhJCFIgwAAIAAjAIAqAAIAACFIABAAIBJiFIAwAAIAADAgAhUBNIAAiFIgBAAIhJCFIgwAAIAAjAIAqAAIAACFIABAAIBJiFIAwAAIAADAgAyfBNIhEhVIgOAPIAABGIgrAAIAAjAIArAAIAABNIBLhNIA1AAIhTBRIBbBvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-130.8,-12,261.7,24.2), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA800").s().p("ADqCvQgYgIgSgWQgSgVgKglQgLgjAAg1IADgvQADgWAFgSQAKgkASgWQASgUAYgJQAYgJAaAAQAbAAAXAJQAYAJATAUQASAWAKAkQAFASADAWIAABfQgDAXgFARQgKAlgSAVQgTAWgYAIQgXAKgbAAQgaAAgYgKgAEDh2QgKAGgGALQgHAKgEAPIgEAaIgBBVQABAWAFAUQAGAUALAOQAMAOAWAAQAWAAAMgOQANgOAEgUQAGgUABgWIgBhVIgGgaQgDgPgGgKQgHgLgKgGQgLgHgOABQgPgBgKAHgAgwCvQgYgIgSgWQgSgVgKglQgLgjAAg1IADgvQADgWAFgSQAKgkASgWQASgUAYgJQAYgJAZAAQAbAAAXAJQAYAJATAUQASAWAKAkQAFASADAWIAABfQgDAXgFARQgKAlgSAVQgTAWgYAIQgXAKgbAAQgZAAgYgKgAgXh2QgKAGgGALQgHAKgEAPIgGA2IABA5QABAWAFAUQAGAUALAOQAMAOAVAAQAWAAAMgOQANgOAEgUQAGgUABgWIgBhVIgGgaQgDgPgGgKQgHgLgKgGQgLgHgOABQgOgBgKAHgAlLCvQgYgIgSgWQgSgVgLglQgKgjAAg1IADgvQADgWAEgSQALgkASgWQASgUAYgJQAYgJAaAAQAbAAAXAJQAYAJATAUQASAWAKAkQAFASADAWIAABfQgDAXgFARQgKAlgSAVQgTAWgYAIQgXAKgbAAQgaAAgYgKgAkyh2QgKAGgGALQgHAKgEAPIgEAaIgBBVQABAWAFAUQAGAUALAOQAMAOAWAAQAWAAAMgOQAMgOAFgUQAGgUABgWIgBhVIgGgaQgDgPgGgKQgHgLgKgGQgLgHgOABQgPgBgKAHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-41.2,-18.5,82.6,37), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA800").s().p("ADdCvQgYgIgTgWQgSgVgKglQgKgjAAg1IACgvQAEgWAEgSQAKgkASgWQATgUAYgJQAXgJAbAAQAaAAAYAJQAXAJAUAUQARAWAKAkQAFASADAWIAABfQgDAXgFARQgKAlgRAVQgUAWgXAIQgYAKgaAAQgbAAgXgKgAD2h2QgKAGgHALQgGAKgEAPIgHA2IABA5QABAWAGAUQAFAUAMAOQALAOAXAAQAWAAAMgOQAMgOAFgUQAFgUABgWIAAhVIgGgaQgDgPgHgKQgGgLgLgGQgKgHgOABQgPgBgKAHgAg9CvQgZgIgRgWQgSgVgLglQgLgjABg1IADgvQADgWAEgSQALgkASgWQARgUAZgJQAYgJAaAAQAZAAAYAJQAYAJASAUQASAWALAkQAFASACAWIAABfQgCAXgFARQgLAlgSAVQgSAWgYAIQgYAKgZAAQgaAAgYgKgAglh2QgJAGgGALQgIAKgDAPIgFAaIAABVQAAAWAGAUQAFAUAMAOQALAOAXAAQAVAAAMgOQAMgOAFgUQAFgUACgWIgChVIgFgaQgDgPgGgKQgHgLgKgGQgLgHgNABQgPgBgLAHgAk1CyIAAjmIhZAAIAAg2QATAAASgEQARgCAOgJQAOgJAJgOQAKgNAEgUIA5AAIAAFjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-39.9,-18.5,79.8,37), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon1();
	this.instance.parent = this;
	this.instance.setTransform(-540,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-540,-90,1080,180), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon();
	this.instance.parent = this;
	this.instance.setTransform(-540,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-540,-90,1080,180), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmnCvQgQgHgOgKQgOgKgMgMQgXgagNgiQgLgjAAgnQABgUACgTQADgRAFgTQANgiAXgbQAMgNAOgKQAOgKAQgIQAhgPArAAQApAAAiAPQAQAIAPAKQAOAKALANQAXAbAMAiQAHATACARQAEATAAAUQAAAngNAjQgMAigXAaQgLAMgOAKQgPAKgQAHQgiAQgpAAQgrAAghgQgAmJhvQgTAKgMARQgLASgGAXQgFAWAAAXQAAAXAFAWQAGAVALARQAMASATAKQASALAcgBQAbABATgLQATgKALgSQALgRAGgVQAGgWAAgXQAAgXgGgWQgGgXgLgSQgLgRgTgKQgTgLgbAAQgcAAgSALgAiOC1IAAhCIAMACQASAAANgNQAMgMAIgcQAGgaADgqIACiwIEGAAIAAFqIhQAAIAAknIhrAAIgEB1QgDA2gKApQgKAogXAZQgMAKgQAHQgQAFgWAAQgSAAgPgFgAJQC2IAAlqIERAAIAABDIjBAAIAABNICxAAIAAA9IixAAIAABaIDFAAIAABDgAEHC2IAAlqIERAAIAABDIjAAAIAABNICvAAIAAA9IivAAIAABaIDDAAIAABDgAtkC2IAAlqIEOAAIAABBIi+AAIAABFIBfAAQAbAAAYAGQAXAHASAOQARAOALAVQAIAWABAdQgBAfgIAVQgKAWgSAOQgSAOgYAGQgZAHgdAAgAsUB1IBSAAQAPAAAMgDQAKgDAIgFQAQgKABgeQgBgOgEgKQgEgKgIgGQgJgFgLgDIgZgDIhSAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-86.9,-19,173.8,38.1), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ГАРАНТИРОВАННЫЕ ВЫПЛАТЫ
	this.instance = new lib.Символ60();
	this.instance.parent = this;
	this.instance.setTransform(2,69.3,1,1,0,0,0,0,-16.1);

	this.instance_1 = new lib.Символ59();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.1,62.1,1,1,0,0,0,0,8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Символ 57
	this.instance_2 = new lib.Символ57();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-114.2,-23.5,232.5,125.1), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ53();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ56();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.8,62.4,1,1,0,0,0,0,12.8);

	this.instance_2 = new lib.Символ55();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3.8,70.9,1,1,0,0,0,0,-13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(-69.1,-31,145.9,129.6), null);


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
p.nominalBounds = new cjs.Rectangle(-397.4,-383,778.5,778.5);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:970.3,y:-970.2},61).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-339.8,-282.7,619.9,619.9);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-102,-33,205,66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-102.3,-33.1,208,70), null);


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

	// Слой 1 - копия (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzfE5QhGAAAAhGIAAnlQAAhGBGAAMAm/AAAQBGAAAABGIAAHlQAABGhGAAg");

	// Слой 2
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(-185.3,-12.2);
	this.instance.alpha = 0.289;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:225.7},29).wait(26));

	// Слой 1
	this.instance_1 = new lib.Символ24();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.7,-31.3,263.6,62.6);


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

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-266.5,-127.5,402.8,230.5), null);


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

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-815.9,92.6,1706.6,778.5), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-100,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.6,3);
	this.instance_1.alpha = 0.27;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-101.8,-30.1,207,70), null);


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
	this.instance.setTransform(38,-139.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(124).to({_off:false},0).wait(10).to({y:-15.8,alpha:0},0).to({scaleY:1.17,y:23.2,alpha:1},7).to({scaleY:1,y:14.1},2).wait(32).to({scaleX:1.28,scaleY:1.28,x:48.5,y:19.1},10,cjs.Ease.get(1)).to({regY:-0.7,scaleX:0.08,scaleY:0.08,x:2.6,y:-3.1,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 47
	this.instance_1 = new lib.Символ47();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88.9,-139.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(124).to({_off:false},0).wait(7).to({y:-15.8,alpha:0},0).to({scaleY:1.17,y:23.2,alpha:1},7).to({scaleY:1,y:14.1},2).wait(35).to({regX:-0.1,regY:0.1,scaleX:1.28,scaleY:1.28,x:-113.6,y:19.3},10,cjs.Ease.get(1)).to({regX:-0.7,regY:-0.7,scaleX:0.08,scaleY:0.08,x:-7.3,y:-3.1,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 33
	this.instance_2 = new lib.Символ33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(62.6,-179.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(124).to({_off:false},0).wait(4).to({y:-56.1,alpha:0},0).to({scaleY:1.17,y:-24,alpha:1},7).to({scaleY:1,y:-26.2},2).wait(38).to({scaleX:1.28,scaleY:1.28,x:79.9,y:-32.3},10,cjs.Ease.get(1)).to({regX:0.7,scaleX:0.08,scaleY:0.08,x:4.5,y:-6.2,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 32
	this.instance_3 = new lib.Символ32();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-62.3,-179.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(124).to({_off:false},0).wait(1).to({y:-56.2,alpha:0},0).to({regX:-0.1,regY:-0.1,scaleY:1.17,x:-62.4,y:-24.3,alpha:1},7).to({regX:0,regY:0,scaleY:1,x:-62.3,y:-26.4},2).wait(41).to({regX:-0.1,regY:-0.1,scaleX:1.28,scaleY:1.28,x:-79.6,y:-32.6},10,cjs.Ease.get(1)).to({regX:0,regY:-0.7,scaleX:0.08,scaleY:0.08,x:-5.2,y:-6.2,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 31
	this.instance_4 = new lib.Символ31();
	this.instance_4.parent = this;
	this.instance_4.setTransform(84.1,-117.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(63).to({_off:false},0).wait(13).to({y:6.8,alpha:0},0).to({scaleY:1.14,y:30,alpha:1},6).to({scaleY:1,y:21.3},2).wait(27).to({scaleX:1.1,scaleY:1.1,x:93.4,y:23.5},9,cjs.Ease.get(1)).to({regY:-1,scaleX:0.05,scaleY:0.05,x:-4.3,y:-0.3,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(65));

	// Символ 30
	this.instance_5 = new lib.Символ30();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-81.9,-120.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(63).to({_off:false},0).wait(10).to({y:3.8,alpha:0},0).to({scaleY:1.14,y:26.6,alpha:1},6).to({scaleY:1,y:18.3},2).wait(30).to({regX:-0.1,regY:0.1,scaleX:1.1,scaleY:1.1,x:-89.3,y:20.3},9,cjs.Ease.get(1)).to({regX:-1,regY:-1,scaleX:0.05,scaleY:0.05,x:-13,y:-0.5,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(65));

	// Символ 29
	this.instance_6 = new lib.Символ29();
	this.instance_6.parent = this;
	this.instance_6.setTransform(114.8,-162.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(63).to({_off:false},0).wait(7).to({y:-37.6,alpha:0},0).to({scaleY:1.14,y:-20.7,alpha:1},6).to({scaleY:1,y:-23.1},2).wait(33).to({scaleX:1.1,scaleY:1.1,x:127.2,y:-25.3},9,cjs.Ease.get(1)).to({scaleX:0.05,scaleY:0.05,x:-2.7,y:-2.6,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(65));

	// Символ 28
	this.instance_7 = new lib.Символ28();
	this.instance_7.parent = this;
	this.instance_7.setTransform(30.1,-162.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(63).to({_off:false},0).wait(4).to({y:-37.6,alpha:0},0).to({scaleY:1.14,y:-20.7,alpha:1},6).to({scaleY:1,y:-23.1},2).wait(36).to({scaleX:1.1,scaleY:1.1,x:34,y:-25.3},9,cjs.Ease.get(1)).to({regX:-1,scaleX:0.05,scaleY:0.05,x:-7.1,y:-2.6,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(65));

	// Символ 27
	this.instance_8 = new lib.Символ27();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-94,-162.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(63).to({_off:false},0).wait(1).to({y:-37.9,alpha:0},0).to({scaleY:1.14,y:-21,alpha:1},6).to({scaleY:1,y:-23.4},2).wait(39).to({scaleX:1.1,scaleY:1.1,x:-102.5,y:-25.6},9,cjs.Ease.get(1)).to({scaleX:0.05,scaleY:0.05,x:-13.6,y:-2.6,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(65));

	// Символ 15
	this.instance_9 = new lib.Символ15();
	this.instance_9.parent = this;
	this.instance_9.setTransform(126,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(13).to({y:5.3,alpha:0},0).to({scaleY:1.11,y:30.5,alpha:1},6).to({scaleY:1,y:23.8},2).wait(29).to({scaleX:1.13,scaleY:1.13,x:143.9,y:27.2},9,cjs.Ease.get(1)).to({regX:0.7,scaleX:0.08,scaleY:0.08,x:0.3,y:-0.5,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(126));

	// Символ 14
	this.instance_10 = new lib.Символ14();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-65.3,-120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({y:5.1,alpha:0},0).to({scaleY:1.11,y:30.3,alpha:1},6).to({scaleY:1,y:23.6},2).wait(32).to({scaleX:1.13,scaleY:1.13,x:-72.6,y:27},9,cjs.Ease.get(1)).to({regX:-0.7,regY:-0.7,scaleX:0.08,scaleY:0.08,x:-14.3,y:-0.5,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(126));

	// Символ 13
	this.instance_11 = new lib.Символ13();
	this.instance_11.parent = this;
	this.instance_11.setTransform(134.9,-165.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(7).to({y:-39.7,alpha:0},0).to({scaleY:1.11,y:-19.1,alpha:1},6).to({scaleY:1,y:-21.2},2).wait(35).to({scaleX:1.13,scaleY:1.13,x:154,y:-23.6},9,cjs.Ease.get(1)).to({regX:0.7,regY:-0.7,scaleX:0.08,scaleY:0.08,x:1,y:-3.9,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(126));

	// Символ 12
	this.instance_12 = new lib.Символ12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(37.2,-165.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({y:-39.7,alpha:0},0).to({scaleY:1.11,y:-19.1,alpha:1},6).to({scaleY:1,y:-21.2},2).wait(38).to({scaleX:1.13,scaleY:1.13,x:43.4,y:-23.6},9,cjs.Ease.get(1)).to({regX:-0.7,regY:-0.7,scaleX:0.08,scaleY:0.08,x:-6.5,y:-3.9,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(126));

	// Символ 3
	this.instance_13 = new lib.Символ3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-109.3,-165.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({y:-40.1,alpha:0},0).to({scaleY:1.11,y:-19.6,alpha:1},6).to({scaleY:1,y:-21.6},2).wait(41).to({scaleX:1.13,scaleY:1.13,x:-122.4,y:-24.1},9,cjs.Ease.get(1)).to({regX:-0.7,regY:-0.7,scaleX:0.08,scaleY:0.08,x:-17.6,y:-4,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(126));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196.2,-184.7,372.4,76.3);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 52
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(99.7,-36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.49,scaleY:0.49,x:179.7,y:-26.5},7,cjs.Ease.get(1)).wait(30).to({scaleX:1,scaleY:1,x:99.7,y:-36.5},7,cjs.Ease.get(-1)).to({scaleX:1.27,scaleY:1.27,x:26.8,y:-56.5},8,cjs.Ease.get(1)).wait(31).to({scaleX:1,scaleY:1,x:99.7,y:-36.5},8,cjs.Ease.get(-1)).wait(1));

	// Символ 51
	this.instance_1 = new lib.Символ51();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-148.8,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.22,scaleY:1.22,x:-1.4,y:-48.1},7,cjs.Ease.get(1)).wait(30).to({scaleX:1,scaleY:1,x:-148.8,y:-34},7,cjs.Ease.get(-1)).to({regX:-0.1,regY:-0.1,scaleX:0.56,scaleY:0.56,x:-178.8,y:-24.1},8,cjs.Ease.get(1)).wait(31).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-148.8,y:-34},8,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217.9,-65,435.9,130.1);


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

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-266.5,-127.5,402.8,230.5), null);


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
p.nominalBounds = new cjs.Rectangle(-266.5,-128.4,402.8,230.5);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(-2,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(293.8,7.9,1,1,0,0,0,-67.3,-13.2);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// logo.png
	this.instance_2 = new lib.Символ10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(349.7,-48.5,0.575,0.574,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// footb_05.png
	this.instance_3 = new lib.Символ8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-362.6,84);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// footb_07.png
	this.instance_4 = new lib.Символ9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-282.1,92);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// footb_03.png
	this.instance_5 = new lib.Символ7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-442.6,80);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// fon1.png
	this.instance_6 = new lib.Символ6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// orang.png
	this.instance_7 = new lib.Символ11();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-505.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// fon.jpg
	this.instance_8 = new lib.Символ5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-1321.5,-187.2,1861.5,1058.2), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// vip.png
	this.instance = new lib.Символ61();
	this.instance.parent = this;
	this.instance.setTransform(346.8,-385.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ50();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13.5,-395);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ26();
	this.instance_2.parent = this;
	this.instance_2.setTransform(758.2,-393);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 6
	this.instance_3 = new lib.Символ6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(396.6,-393.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 11
	this.instance_4 = new lib.Символ11();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-109,-388);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Символ 5
	this.instance_5 = new lib.Символ5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(396.6,-393.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-924.9,-521.5,1861.5,1004.5), null);


(lib.Символ4 = function(mode,startPosition,loop) {
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

	// Слой 2
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(-396.6,379.2,1,1,0,0,0,0,-8.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},6).wait(1).to({alpha:0},6).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},6).wait(1).to({alpha:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1321.5,-187.2,1861.5,1058.2);


// stage content:
(lib.banner1080x180 = function(mode,startPosition,loop) {
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
		    _this.main.gotoAndPlay(8);
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
p.nominalBounds = new cjs.Rectangle(-241.5,-1.7,1861.5,1058.2);
// library properties:
lib.properties = {
	width: 1080,
	height: 180,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/banner1080x180_atlas_P_.png?1483697416127", id:"banner1080x180_atlas_P_"},
		{src:"images/banner1080x180_atlas_NP_.jpg?1483697416128", id:"banner1080x180_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;