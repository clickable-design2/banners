(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"europoker600_300_atlas_", frames: [[900,449,70,104],[802,343,96,143],[802,488,70,104],[972,414,35,54],[972,343,35,69],[802,0,122,127],[972,470,41,38],[874,488,20,34],[874,555,58,68],[926,0,70,104],[900,198,96,143],[802,129,209,67],[900,343,70,104],[0,0,800,600],[802,198,96,143]]}
];


// symbols:



(lib.acehearts = function() {
	this.spriteSheet = ss["europoker600_300_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.aceromms = function() {
	this.spriteSheet = ss["europoker600_300_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.acespades = function() {
	this.spriteSheet = ss["europoker600_300_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.arm = function() {
	this.spriteSheet = ss["europoker600_300_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.armtwo = function() {
	this.spriteSheet = ss["europoker600_300_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.girl = function() {
	this.spriteSheet = ss["europoker600_300_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.spriteSheet = ss["europoker600_300_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.handtwo = function() {
	this.spriteSheet = ss["europoker600_300_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.head = function() {
	this.spriteSheet = ss["europoker600_300_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.kingcross = function() {
	this.spriteSheet = ss["europoker600_300_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.kingspates = function() {
	this.spriteSheet = ss["europoker600_300_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["europoker600_300_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.ninerombs = function() {
	this.spriteSheet = ss["europoker600_300_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.tablepoker = function() {
	this.spriteSheet = ss["europoker600_300_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.tshirt = function() {
	this.spriteSheet = ss["europoker600_300_atlas_"];
	this.gotoAndStop(14);
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


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACFBRQgLgFgHgHQgGgIgDgJQgDgKAAgLQAAgQAFgOQAFgOAKgLIALgKIANgHQAOgGARAAQALAAAJACQAIACAHADIgMAcIgKgEQgFgBgIAAQgJAAgHADQgHADgFAGQgKAMAAAUQAAAMAFAIQAFAHAOAAQAHAAAHgBIALgEIADAdIgPAFQgIACgLAAQgPAAgKgEgAgNBRQgJgEgFgHQgFgIgDgJQgCgKAAgKIABgQQACgIADgIQAFgNALgLIALgKQAGgEAHgEQAOgFAQAAIAUABIAPACIAOAGIgPBAQgEANACAOQABAOAFALIggAEIgGgLQgGAGgIADQgIAEgLAAQgLAAgIgEgAAVgNQgHAEgFAHQgGAFgDAJQgCAIAAAKQAAALADAHQAEAHAKAAQAGAAAEgCQAFgDAFgEIANg+IgGgBIgGAAQgIAAgHAEgAh2BRIAgiFIg5AAIggCFIglAAIAoilICEAAIgoClg");
	this.shape.setTransform(21.3,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.7,17);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmFBWIAeh7IAQgEQAKgCAKAAQAKAAAIADQAHAEAFAFQAFAFABAHQADAHAAAIQAAAMgFAMQgEAKgHAIQgIAIgKAEQgLAFgNAAIgMgBIgIAggAlRgUIgNA0IAIABQAHAAAGgDQAGgDAEgEQAEgFACgGQACgHABgHQgBgHgDgGQgEgFgIgBIgLABgAIcA2QgGgDgFgDQgEgEgCgEQgCgFAAgFQAAgJAFgGQADgGAHgEQAFgDAHgCIAOgEIAKgEQADgDAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQgCgBgHgBIgLABIgLAEIAAgWIANgCQAIgCAJAAQAPAAAHAGQAFACABAFQACAEAAAFIgBAJIgCAIQgEAGgGAEQgHAEgHADIgXAJQgFACAAAEQABADACABQADACAHAAQAHAAAGgCIAPgEIABAVIgNAFQgJACgMAAQgJAAgGgCgAD4A0QgHgDgFgFQgFgFgCgIQgCgHAAgIIABgMIACgJIAGgKIAGgJQAHgJALgFIALgEIAMgBQAGAAAGACQAFACAEADQAFAEACAEQACAFAAAHIgBAJIgDAHQgFAGgIAFQgIAEgLADQgLACgNAAQABAHAEADQAEADAKAAIAMgBIAKgCIACAUIgMAEQgIABgJABQgLAAgIgEgAEOgVIgHAGIgGAHQgCAEgBAFQALgBAHAAIALgEIAEgEIABgGQABgIgKAAQgEAAgFABgACFAuQgEgGgDgHQgCgGAAgJQAAgNAFgKQACgHAIgLIAIgGIAIgFQAJgEALgBIAIABIAIACQgBgJgCgFQgCgFgEgDQgDgDgFgBIgKgBQgKAAgKAEIgCgXIANgDIAMgBQAKABAJACIAJAEIAHAGQAHAHADAKIADANIAAAPIgBAVIgCARQgEAQgIAKQgHAKgLAEIgLAFIgLABQgSgBgJgJgACmgOQgFADgEAFQgEAFgCAGQgCAHABAIQAAAEACAFQAEADAGAAQAGABAEgDQAFgDADgFQAEgGACgJQADgHABgOQgGgDgHAAQgGAAgFADgAj+A0QgGgDgEgFQgEgFgCgIQgCgGAAgJIABgMIAEgKQAEgLAIgIIAJgHIAJgGQALgFANAAIAOABIALACIAMAEIgMAwQgCAKAAALQABAKAEAIIgYAEIgCgFIgCgEQgFAEgHADQgFACgIABQgJAAgHgEgAjjgRQgGADgEAEQgEAGgCAFQgCAHAAAGQAAAJADAFQADAFAIAAQAEAAADgCQADgBAEgEIAKguIgEgBIgFAAQgGAAgFAEgAnJA2QgGgDgFgEQgFgGgCgHQgCgHgBgLIABgOIAJglQAEgKAFgIQAGgIAIgGQAIgGAKgEQAKgDANgCIAZgEIgBAXQgIACgJABQgIAAgJACQgIACgHAGQgHAEgFAMQAGgDANgBQAHAAAGABQAFADAFADQAFAEACAHQADAGAAAJIgBAOIgDAMIgFAKIgHAIQgIAJgKADIgKAEIgKABQgIAAgGgCgAm2gOIgLADIgDANIgBALQABALADAFQADAEAHAAQAEAAAFgDQAFgCADgFQADgEACgGQADgGAAgHQAAgJgEgEQgFgEgFABQgFAAgFACgAo3A0QgHgDgEgFQgDgFgCgIQgCgGAAgJIABgMIAEgKQAEgLAHgIIAJgHIAKgGQAKgFANAAIAPABIALACIALAEIgLAwQgDAKABALQABAKADAIIgYAEIgCgFIgBgEQgGAEgGADQgGACgHABQgKAAgGgEgAodgRQgFADgEAEQgEAGgCAFQgCAHgBAGQAAAJAEAFQADAFAHAAQAFAAADgCQADgBADgEIAKguIgEgBIgEAAQgGAAgGAEgAquA1QgKgDgJgEIANgXQAIAFAHACQAIABAJAAQAGABAFgCQAGgCADgCQAEgCACgEQABgDAAgEQABgGgGgEQgEgDgLAAIgUAAIAFgWIAQAAIAKgBIAJgDQADgCADgDQACgEAAgFQAAgFgEgCQgEgCgHgBQgGAAgIACQgIADgHAEIgFgYQAJgEAKgCQAKgDAMAAQAKAAAIADQAGACAFAEQAFAEACAGQABAFAAAGQABAKgHAJQgDAFgEADQgEADgHACQAKAFADAHQAEAFgBAHQAAAIgCAHQgEAIgHAGQgHAGgLAEQgMAFgQAAQgMgBgLgCgAJxAzQgHgEgDgGQgDgHgBgHQAAgJADgIIAMgzIAbAAIgOA6IAAAIQABADACACQACADAFAAQAEAAADgCQAEgBAEgEIAPhDIAbAAIgOA1QgCAKABALQABAKADAIIgYAEIgDgJIgMAGQgGADgIAAQgLAAgGgEgAGnAyIAWhbIAbAAIgIAiIAOgBQAIAAAGACQAHACADADQAJAGAAAOQAAAHgDAHQgDAGgGAGQgHAFgJACQgJADgNAAQgSAAgUgFgAHQALIgFABIgFAVIALABQAKAAAGgEQAEgDAAgGQAAgFgDgDQgEgDgHABgAgUAyIAWhbIAbAAIgIAiIANgBQAJAAAGACQAGACAEADQAJAGAAAOQAAAHgDAHQgEAGgGAGQgGAFgJACQgKADgNAAQgRAAgUgFgAAVALIgGABIgEAVIAKABQALAAAFgEQAFgDAAgGQAAgFgEgDQgEgDgHABgAFzA1IAJgmIgcAAIgJAmIgbAAIAXheIAbAAIgJAkIAcAAIAIgkIAbAAIgWBegAhEA1IANg3IAAgGQAAgFgCgDQgCgFgHAAIgHACIgGADIgCASIgMAzIgbAAIANg3IABgGQAAgFgDgDQgCgFgHAAIgJABIgSBJIgbAAIAXhaIAOgEIAXgCQAIAAAGACQAFADAFAEQAGgEAIgDQAGgCAJAAQAIAAAGACQAGADAEAEQAEAEACAGQACAGAAAHIgBAGIgNA6g");
	this.shape.setTransform(70.6,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(0,0,141.1,17.3), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABLBaQgIgEgGgHQgFgHgCgJQgDgKAAgLIACgQQABgIADgHQAGgOAKgKIAMgKQAGgFAHgDQAOgGARAAIAUABIAOADIAPAFIgQBBQgDANABAOQACAOAEALIggAEIgFgLQgHAFgIAEQgIAEgKAAQgMAAgJgFgABugDQgHADgFAGQgFAHgDAJQgDAIAAAKQAAALAEAHQADAHALAAQAFAAAFgDQAEgCAFgFIACgMIALgxIgFgBIgGAAQgJAAgHAEgAg5BcQgIgDgGgHQgGgGgDgKQgEgKAAgNIAFgmIAJgfQAFgOAHgKQAHgLAKgIQALgIANgFQAOgFAQgCIAigFIgCAfIgWADQgMAAgLADQgJADgKAHQgJAHgHAPQAJgEARgCQAIAAAHADQAIACAGAGQAGAFAEAJQADAHAAAMQAAAKgBAJIgEAQIgHAOQgEAGgFAFQgKALgMAFIgOAEIgOACQgKAAgJgDgAgfAAIgOAFIgEASIgBAQQAAAOAEAGQAFAFAJAAQAGAAAGgDQAFgDAFgGQAFgGADgIQACgJAAgKQAAgMgFgFQgFgEgIAAQgGAAgHACgAkdBaQgJgEgFgHQgFgHgDgJQgCgKAAgLIABgQQACgIADgHQAFgOALgKIALgKQAHgFAHgDQAOgGAQAAIAUABIAPADIAOAFIgPBBQgEANACAOQABAOAFALIggAEIgGgLQgGAFgIAEQgIAEgLAAQgMAAgIgFgAj6gDQgHADgFAGQgGAHgDAJQgDAIAAAKQAAALAEAHQAEAHAKAAQAGAAAEgDQAFgCAFgFIANg9IgGgBIgGAAQgIAAgHAEgAm9BcQgQgBgMgDIAnifQANgDAPgBIAcgBQAOAAALADQAKADAHAFQAGAFAEAHQADAHAAAHIgBALQgBAGgEAGQgDAFgFAGQgGAFgJADQALAEAFAJQAFAIAAAKQAAAMgFAKQgFALgKAIIgLAIIgPAFIgSAEgAmuA+IAVABIAOgBQAHgBAGgDQAGgDADgFQAEgFAAgIIgBgGQgCgEgDgCQgCgDgFgCQgFgCgGAAIgaAAgAmUgtIgIAkIAXAAQAHAAAGgBQAFgCAEgDQAHgGAAgJQAAgEgCgDQgCgEgEgCIgHgCIgJgBgAGWBbIgFgNIgQgeIgJgMIgNA3IgjAAIAeh9IAkAAIgMAtIAxgtIArAAIgdAdQgOAOgUAQIAUAfIAPAjgAECBbIAMgyIglAAIgMAyIgkAAIAeh9IAkAAIgLAuIAlAAIALguIAkAAIgeB9gAivAkIAIghIBGAAIgIAhg");
	this.shape.setTransform(47.4,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(0,0,94.8,19), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().rr(-82.5,-20,165,40,12.5);
	this.shape.setTransform(82.5,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3300").s().rr(-82.5,-20,165,40,12.5);
	this.shape_1.setTransform(82.5,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(0,0,165,44), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.aceromms();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(0,0,96,143), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg+LAhcMAAAhC3MB8XAAAMAAABC3g");
	this.shape.setTransform(398,214);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(0,0,796,428), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AMBBXIAAg7IibAAIAAA7IgwAAIAAhkIAhAAQAMgUAGgVQAFgQAEgQIAvAAIgBAHQgDARgFASQgFARgJAOIBQAAIAAhJIAxAAIAABJIAmAAIAABkgAGcAeQgLgBgKgEQgUgIgPgOQgHgGgHgJQgFgJgFgLQgEgKgDgNQgCgNAAgOIAAgEIA0AAIAAAEQAAAQAEAOQAEANAIAJQAHAJALAGQALAEAOAAQAOAAALgEQAKgGAIgJQAIgJAEgNQAEgOAAgQIAAgEIA0AAIAAAEQAAAOgDANQgCANgEAKQgIAVgQAOQgOAOgVAIQgUAIgXgBQgMAAgKgCgAl1AeQgLgBgLgEQgUgIgPgOQgHgGgGgJQgGgJgEgLQgEgKgDgNQgCgNAAgOIAAgEIAzAAIAAAEQABAQAEAOQADANAIAJQAHAJALAGQAMAEANAAQAOAAAMgEQAKgGAIgJQAHgJAEgNQAEgOABgQIAAgEIAzAAIAAAEQAAAOgCANQgCANgFAKQgIAVgPAOQgOAOgVAIQgUAIgYgBQgLAAgKgCgAp2AdQgSAAgTgFIAAhuICVAAQANAHAFAKQAIAOgBARQAAAigZARQgNAJgTAFQgSAEgaAAgAprgLIAaACIAUgCQAKgBAGgDQAHgEADgFQAEgHAAgIQAAgPgMgHQgFgDgIgCIgzgCgAD0AcIgUgkQgQgYgKgJIglA0IgJARIg5AAQANgaAUgaIAqg8IgBgCIA8AAIAAAAQATAYAcApIAcAxgAg6AcIAAhyIAxAAIAABygAjIAcIAAhyIAxAAIAAAYIATgYIAxAAQgPATgNAVQghAxgOAZgAswAcIAAhyIAyAAIAAByg");
	this.shape.setTransform(88.4,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F99D00").s().p("AMPBaIAAhAIg0AAIgGBAIgvAAIABgJQAEgUABgWIABg2ICSAAIAABpgAIhBaQAAgOgDgLQgFgOgHgJQgIgKgKgFQgMgFgNAAQgOAAgMAFQgLAGgHAJQgIAKgDANQgEAMgBANIgzAAQABgaAIgUQAJgVAPgPQAQgOATgHQAKgEALgCQALgCALAAQAWAAAUAIQALADAIAGQAJAEAIAIQAPAPAIAVQAIAUABAagADdBaIhGhpIA8AAIAqA/IAsg/IA4AAIhHBpgAgGBaIAAgeIgZAeIgwAAIBRhpIApAAIAABpgAiUBaIAAhpIAyAAIAABpgAjwBaQAAgOgEgLQgEgOgIgJQgHgKgLgFQgLgFgOAAQgOAAgLAFQgLAGgHAJQgIAKgEANQgDAMgBANIg0AAQABgaAIgUQAKgVAPgPQAPgOAUgHQAKgEAKgCQALgCALAAQAXAAATAIQALADAIAGQAJAEAIAIQAPAPAJAVQAIAUABAagApnBaIAAhmIBEgGQAUAAASADQASADANAHQANAHAHAMQAEAGABAHQACAHAAAJQAAAOgGAKQgGALgNAHIALAFgAo2AWIAAAxIAsgCQAIgBAFgDQAFgDACgFQADgFAAgGQAAgHgDgFQgCgFgFgCQgLgGgTAAgAr7BaIAAhAIhDAAIAAgpIC4AAIAAApIhEAAIAABAgAhEgmQgKgDgHgGQgIgGgEgIQgFgJgCgLIAigIQACAMAGAFQAGAFAIAAQAIAAAGgFQAGgEADgNIAfAJQgBAKgFAJQgEAIgIAGQgHAGgJADQgKADgKAAQgLAAgJgDg");
	this.shape_1.setTransform(83.1,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(0,0,170,35.5), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEhAvQgDgDAAgGIABgGIADgEIAFgDIAFgBQAFAAADADQAEACAAAHIgCAFIgDAFIgEADIgFABQgFAAgEgDgAB1AwQgGgDgEgEQgEgFgCgFQgBgGAAgGIADgRIAEgHIAFgHQAGgHAIgEIAIgCIAKgBQAFAAAEABQAEABADADQADADACADQACAEAAAFIgBAHIgDAFQgDAGgGADQgHAEgIABQgJACgKAAQABAFAEADQADACAHAAIAJAAIAJgDIABARIgKACQgGACgHAAQgJAAgFgCgACGgJIgGAEIgFAFIgCAIQAJAAAFgCQAFgBADgCQADgCABgBIABgEQAAgGgHAAIgHABgAgaAwQgGgDgEgFQgEgDgCgHQgBgFAAgGQAAgKADgIQADgIAGgGIAGgFIAIgFQAIgEAJABIALABIAJADIgHAQIgGgCIgHgBQgEAAgFACQgEABgDAEQgGAGAAANQAAAGADAFQADAFAJgBIAHgBIAGgCIACARIgIADIgLABQgJAAgGgCgAh+AwQgGgDgEgFQgEgDgCgHQgCgFAAgGQAAgKADgIQADgIAGgGIAHgFIAHgFQAIgEAKABIAMABIAJADIgIAQIgFgCIgIgBQgFAAgEACQgEABgDAEQgGAGAAANQAAAGADAFQADAFAIgBIAIgBIAHgCIABARIgIADIgMABQgIAAgGgCgAjUAwQgFgDgDgEQgDgEgBgGIgCgLIABgKIADgJQADgHAGgHIAHgFIAIgFQAIgDAJAAIAVACIAIADIgJAlQgCAIABAIQABAIACAHIgSACIgDgHIgJAGQgFACgGAAQgHAAgFgCgAi/gGQgEABgDAFQgEACgBAGQgCAFAAAFQAAAHACAEQACADAHAAQADAAACgBIAGgEIABgHIAHgcIgEgBIgDAAQgFAAgEADgAkxAwIgQgBIAWheIARgCIAQAAQAIAAAGABQAHACADAEQAEADACADQACAEAAAFIgBAGIgCAHIgFAGIgJAFQAGADADAEQADAFAAAFQAAAHgCAHQgDAGgGAEIgHAFIgIAEIgLABgAkoAfIAGAAIAOAAQAEAAAEgCQADgCACgDQACgDAAgEIgBgFQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgEgDIgHgBIgPAAgAkZgfIgFAVIAOAAIAHgBIAFgDQAEgDAAgFIgBgEIgDgEIgEgCIgGAAgAD6AwIALgwQAAgDgCgDQgCgDgFAAQgDAAgDACIgFACIABABIAAACIgCAKIgJAoIgVAAIAKgwQAAgDgBgDQgCgDgGAAIgHABIgOA4IgUAAIAQhGIATgEIAKAAQAHAAAEACQAFABAEADIAKgEQAFgCAHAAQAGAAAFACQAFABADADQADAEABAEQACAFAAAFIgBAEIgKAugAA3AwIAGgYIgLABQgFAAgFgCQgEAAgEgDQgDgCgCgFQgCgEAAgFIACgJIAEgTIAVAAIgGAZIABADIADACIADACIAMgBIAIgfIAUAAIgRBIgAEsgCQgDgDAAgFIABgGIADgFIAFgDIAFAAQAFgBADADQADADAAAFQAAAEgBADQgBADgCABIgFADIgFAAQgFAAgDgCg");
	this.shape.setTransform(32.2,6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF750D").s().p("AA3A+IAEgRQgIgBgEgDIgJgEIAJgPIAEACIALAEIAGABIAGgBQADAAADgBIADgDQACgCAAgEIgBgDIgCgEIgNgGQgIgFgEgFQgEgHAAgHQAAgFACgEQABgFADgEQAEgDAFgDQAGgCAHgBIAEgPIARAAIgDAQIAKADIAHADIgJAPQgDgDgFgBIgLgCQgGAAgEADQgEACAAAFIAAADIACADIAEADIANAHIAHAFIAEAHQACAEAAAFQAAAHgCAFQgCAEgEAEQgEADgFADIgNACIgDARgAgXAuQgFgCgDgEQgCgEgBgFIgCgLIABgPQAAgHADgGIAEgNIAFgKQAEgFAEgEIAIgGIAIgEQAFgCAGAAQAHAAAEADQAFACADAEQADAEACAGIABAKQgBAQgDAMIgEANQgDAGgDAEQgGAKgJAFQgIAGgLAAQgHAAgFgDgAABgfIgHAHIgFAKIgFAVIgBAKQAAAHACAEQADADAEAAQAFAAADgDIAGgHIAFgKIAGgVIABgKQAAgHgDgDQgCgEgEAAQgFAAgDADgAhgAuQgFgCgEgEQgEgEgDgHQgDgGABgIQAAgNAEgLIAFgLIAIgKQAIgJANgGQAOgFASAAIAGAAIgDAQIgQACQgIABgFACQgHADgEAEQgFAFgDAHIAJgDIAJgBQAFAAAEACIAIAFQADADACAEQACAFAAAGIgBAJIgCAHQgCAHgGAFQgFAFgGACQgHADgIAAQgGAAgGgDgAhWACIgHACQgCAFAAAGQAAAHADAFQAEAEAGAAIAGgBIAFgEQAFgEgBgJQABgHgEgDQgEgCgFAAIgHABg");
	this.shape_1.setTransform(79.9,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(0,0,91.4,12.4), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhYA2QgFgDgEgFQgEgFgBgGQgCgGAAgHIABgLIADgKQAEgJAHgHIAIgHIAIgFQAKgEALAAIAFAAIASADIAKADIgLArQgCAJABAJQABAJADAIIgWADIgDgIIgKAGQgFADgHAAQgIAAgGgDgAhAgIQgFACgEAFQgDADgCAGQgCAGAAAGQAAAIADAEQACAFAHAAQAEAAADgCQADgBADgEIABgIIAIghIgEAAIgEAAQgGAAgEADgACtA1QgEgDAAgHQAAgDACgDIADgGIAFgDIAGgBQAGAAAEADQAEADAAAHQAAAEgCADIgDAFIgGADIgGABQgFAAgEgDgAjCA2IgPgCIAahsIBIAAIgGAVIguAAIgFATIAIAAQAMAAAIACQAIACAFAEQAFAEACAFQACAFAAAIQAAAMgFAIIgGAHIgHAGQgJAEgKACQgLACgKAAIgSgBgAi0AiIAKAAQAIAAAFgBQAFgCADgCIAEgGIABgHIgBgFIgDgEIgGgDIgKgBIgJAAgACEA2IgEgJIgQgcIgJAlIgYAAIAVhTIAXAAIgHAeIAggeIAdAAIgTAUQgKAJgNAKIAHAJIAGAMIAKAXgAAhA2IAIghIgZAAIgIAhIgXAAIAUhTIAYAAIgIAeIAZAAIAHgeIAYAAIgUBTgAC5gDQgEgDAAgGQAAgEACgDIADgFIAFgEIAGgBQAGAAAEADQADADAAAHIgBAHIgDAFQgDACgDABIgGABQgFAAgEgDg");
	this.shape.setTransform(21,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CC00").s().p("ABwBHIAEgUQgIgBgGgDIgJgFIAJgRIAKAFIAHACIAIABIAHgBIAGgBIAEgEQACgCAAgEIgBgFIgDgDIgFgDIgJgFQgKgFgFgHQgEgHAAgJQAAgFACgFQACgFAEgEQAEgEAGgDQAGgDAIgBIAFgRIAUAAIgFASQAGABAFACIAJAEIgKARQgEgDgGgCQgGgBgGAAQgGAAgFACQgFADAAAFIAAAEIACAEIAEADIAQAJQAEACADADQAEADACAFQACAEAAAGQAAAIgDAFQgCAGgEAEQgFAEgGACQgGADgIAAIgEAUgAAWA1QgFgDgEgFQgDgEgCgGIgBgMIABgSIADgPIAFgOQACgGAEgGQAEgGAEgEQAEgEAGgDQAFgDAFgCIAMgBQAIAAAGADQAFACADAFQAEAFABAGQACAFAAAHQAAASgEAOIgFAOQgDAHgEAFQgHALgKAGQgKAHgNAAQgIAAgFgDgAAxgkQgEADgDAFQgEAFgCAHIgHAYIAAALQAAAJACADQADAEAFAAQAFAAAEgDQAFgDADgFQADgFADgGIAGgZIABgLQAAgIgCgEQgDgEgFAAQgFAAgFADgAg9A2QgGgBgFgDQgFgEgDgFQgDgFAAgIQAAgFABgEQABgEADgFIAIgIIALgHQgEgDgCgFQgDgFAAgGQAAgHACgGQADgGAFgFQAEgFAIgDQAFgCAMgBQAHAAAGACQAFACAFADQAEAEACAFQACAEAAAGIgBAIIgCAIQgDAEgEAEQgFAEgHADIAFADIAEAFIADAHIABAIQAAAHgCAGQgDAHgGAEQgFAFgIADQgIADgKAAIgMgCgAg0AJQgEADgBADIgDAFIgBAFQAAAGAEADQAEACAGAAIAGgBQAEgBACgCQACgBACgDQABgDAAgEIgBgFQgBgDgCgCIgFgEIgFgDIgIAFgAgqgkQgEAEAAAGQAAAFADAEQADADAFADIAIgEIAEgFQADgFAAgEQAAgFgDgDQgDgDgGAAQgGAAgEAEgAikA2QgJgCgHgEIAJgTQAEADAHACQAHACAHAAIAJgBIAHgDQAEgCACgEQACgDAAgFQAAgHgGgDQgFgEgJAAIgKAAIAEgRIAMAAIAHgBIAHgCIAFgFQACgDAAgEQAAgGgEgCQgEgDgGAAQgFAAgGACQgGABgHAEIgGgSQAIgFAIgCQAJgCAJAAQAIAAAGACQAHACAEAEQAEAEACAFQADAFAAAFIgCAIIgEAIQgCAEgFADIgJAEIAGAEIAFAFQADAHAAAIQAAAGgDAHQgCAGgGAGQgGAFgJADIgKADIgMABQgJAAgIgCg");
	this.shape_1.setTransform(63.8,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(0,0,81.9,14.2), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJJBIIAAhtIANgEQAIgBALAAQAJAAAIADQAIADAFAFQAFAGADAJQADAIAAAIQAAAKgCAIQgDAIgEAGQgFAFgHAEQgHADgJAAQgHAAgGgCIgIgEIAAAigAJegcIgGABIAAA0IAIADQAFADAGAAQAGAAAFgDQAFgCACgEQADgEACgGIABgMQAAgNgHgIQgEgDgFgCQgFgCgGAAgAEFBBIAAgXIg+AAIAAAXIgOAAIAAgjIAJAAQAFgIADgIQADgIACgIQACgJAAgJIABgUIA2AAIAABGIALAAIAAAjgADcABIgEAPIgGAOIAnAAIAAg5IgaAAgAs+ApQgKgEgHgIQgIgGgEgMQgEgKAAgOQAAgOAEgKQAEgLAIgIQAHgHAKgEQAJgDALgBQALABAKADIAIAFIAIAGQAHAIAFALIADALIABANIgBANIgDALQgFAMgHAGQgDAFgFACIgIAFQgKADgLABQgLgBgJgDgAs5g1QgHADgFAFQgFAGgCAIQgDAJAAAJQAAAKADAIQACAIAFAGQAFAGAHACQAHAEAIAAQAIAAAHgEQAHgCAFgGQAEgGADgIQADgIAAgKQAAgJgDgJQgDgIgEgGQgFgFgHgDQgHgEgIAAQgIAAgHAEgANNApQgDgDAAgEQAAgFADgDQADgEAFAAQAFAAADAEQADADAAAFQAAAEgDADQgDADgFAAQgFAAgDgDgAMFArIgLgEIADgMIAJACQAHACAJAAQAKAAAFgDQAGgEAAgGQAAgEgCgDIgFgEIgHgCIgUgBIAAgLIATAAIAGgBIAEgEQACgCAAgEQAAgDgCgDIgEgDIgGgCIgHgBIgGABIgMADIgEABIgDgNIAEgCIAOgCIAHgBQAHABAHABQAGACAEADQAFACACAFQADAEAAAGIgBAGIgEAGIgEAEIgEADQAHABAEAFQADADABADIABAIQAAAHgDAEQgCAEgFADQgFADgGACQgHABgIAAQgKAAgHgBgALCArQgFAAgDgDQgIgCgGgHQgFgFgCgIQgDgIAAgKIABgJIADgIQADgJAFgGQAFgFAHgDQAHgDAHAAQAJAAAGADQAHADAEAFQAJALAAAVIAAABIAAADIg5AAQAAAHACAFQACAFADADQAHAHAOAAQAIAAAFgCIAIgCIACAMIgJAEQgHABgJAAgALcgHQAAgKgGgGQgFgHgJABQgFAAgEACIgHAEQgCAEgCAEIgCAIIAqAAIAAAAgAILArQgFAAgDgDQgIgCgGgHQgFgFgCgIQgDgIAAgKIABgJIADgIQADgJAFgGQAFgFAHgDQAHgDAHAAQAJAAAGADQAHADAEAFQAJALAAAVIAAABIAAADIg5AAQAAAHACAFQACAFADADQAHAHAOAAQAIAAAFgCIAIgCIACAMIgJAEQgHABgJAAgAIlgHQAAgKgGgGQgFgHgJABQgFAAgEACIgHAEQgCAEgCAEIgCAIIAqAAIAAAAgAExArQgGgCgFgDQgEgEgCgFQgDgEAAgIQAAgGADgFQADgGAFgBQAEgEAHgBQAGgBAHgBIAFAAIAKACIAAgLIgDgHQgCgCgEgCQgEgBgFAAIgNABIgIACIgCgMIAJgDQAHgBAIgBQAJABAGACQAGADAEADQAEAFABAFQACAHAAAHIAAAyIghAEQgHAAgFgBgAE6AEIgHACIgFAEQgCADAAAEIABAHIAEAEQAFADAJAAIAQgBIAAgYIgFgCIgJgBgAB4ApQgHgDgGgGQgFgFgDgJQgDgIAAgKQAAgIADgIQADgJAFgGQAGgFAHgDQAHgDAIgBQAJABAHADQAHADAGAFQAFAGADAJQADAIAAAIQAAAKgDAIQgDAJgFAFQgGAGgHADQgHADgJAAQgIAAgHgDgAB2gVQgDAEgCAGQgBAGAAAFQAAAHABAGQACAFADAEQADAFAFACQAEACAFAAQAGAAAEgCQAFgCADgFQAGgHAAgPQAAgMgGgJQgHgIgLAAQgKAAgHAIgAhOArQgFAAgDgDQgIgCgGgHQgFgFgCgIQgDgIAAgKIABgJIADgIQADgJAFgGQAFgFAHgDQAHgDAHAAQAJAAAGADQAHADAEAFQAJALAAAVIAAABIAAADIg5AAQAAAHACAFQACAFADADQAHAHAOAAQAIAAAFgCIAIgCIACAMIgJAEQgHABgJAAgAg0gHQAAgKgGgGQgFgHgJABQgFAAgEACIgHAEQgCAEgCAEIgCAIIAqAAIAAAAgAlsArQgGgCgEgDQgFgEgCgFQgCgEAAgIQAAgGACgFQADgGAFgBQAFgEAGgBQAHgBAHgBIAEAAIALACIgBgLIgDgHQgCgCgEgCQgDgBgGAAIgNABIgIACIgCgMIAKgDQAHgBAHgBQAJABAHACQAGADADADQAEAFACAFQABAHAAAHIAAAyIggAEQgHAAgGgBgAliAEIgHACIgFAEQgCADAAAEIABAHIAEAEQAFADAJAAIAQgBIAAgYIgFgCIgJgBgAp3ApQgHgDgGgGQgFgFgDgJQgDgIAAgKQAAgIADgIQADgJAFgGQAGgFAHgDQAHgDAIgBQAJABAHADQAHADAGAFQAFAGADAJQADAIAAAIQAAAKgDAIQgDAJgFAFQgGAGgHADQgHADgJAAQgIAAgHgDgAp5gVQgDAEgCAGQgBAGAAAFQAAAHABAGQACAFADAEQADAFAFACQAEACAFAAQAGAAAEgCQAFgCADgFQAGgHAAgPQAAgMgGgJQgHgIgLAAQgKAAgHAIgAHIAqIAAghIgIACIgLABQgHAAgGgBQgGgBgEgEQgEgDgCgEQgCgGAAgJIAAgYIAPAAIAAAYQAAAJAEAFQAFACAIAAIALAAIAHgBIAAgnIAPAAIAABSgABFAqIgEgIIgSgaIgWAiIgQAAQAGgLAIgLIAPgUIgbgoIAQAAIAUAdIAUgdIAQAAIgbAnIAQAUQAIAMAGALgAiRAqIAAg+IgqA+IgNAAIAAhSIAOAAIAAA6IAqg6IANAAIAABSgAjxAqIAAglIgmAAIAAAlIgPAAIAAhSIAPAAIAAAhIAmAAIAAghIAPAAIAABSgAmiAqIAAghIgIACIgLABQgHAAgFgBQgGgBgEgEQgEgDgDgEQgCgGAAgJIAAgYIAPAAIAAAYQAAAJAFAFQAFACAIAAIAKAAIAHgBIAAgnIAPAAIAABSgAn3AqIAAglIgmAAIAAAlIgPAAIAAhSIAPAAIAAAhIAmAAIAAghIAPAAIAABSgAqqAqIgSgWIgLgKIgKgIIAAAoIgOAAIAAhSIAOAAIAAAjIAkgjIARAAIglAmIALAIIAVAYIAIAMgANNgWQgDgDAAgEQAAgFADgDQADgDAFAAQAFAAADADQADADAAAFQAAAEgDADQgDADgFAAQgFAAgDgDg");
	this.shape.setTransform(86.4,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(0,0,172.8,14.3), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOArQgFgIgCgLQgDgKAAgOQAAgbAKgPQAFgHAHgEQAHgEAIAAQAJAAAHAEQAHAEAFAHQAKAPAAAbQAAAOgDAKQgCALgFAIQgFAHgHAEQgHAEgJAAQgRAAgKgPgAAfgoQgEAEgDAFIgDAPIgBAQIABASIADANQADAGAEAEQAEAEAGAAQAGAAAFgEQAEgEACgGQADgFABgIIABgSIgBgQQgBgIgDgHQgCgFgEgEQgFgEgGAAQgGAAgEAEgAgxA4IAAhZIgEADIgGAEIgOAFIgFgLQAJgDAJgGQAJgFAHgJIAKAAIAABvg");
	this.shape.setTransform(11.4,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAsQALAAAHgCQAJgCAFgDQAGgFAEgHQAEgGACgKIgJADIgLABQgIAAgHgCQgHgEgEgEQgEgEgCgGQgCgGAAgHQAAgGACgGQADgHAEgFQAEgFAHgDQAGgEAJAAQAIAAAHAEQAHACAFAHQAEAGACAIQADAJAAALQAAAggQARQgJAIgLAEQgMAFgQAAgAgJgpIgGAFQgCADgCAFIgBAIQAAAKAGAHQAFAEAKAAIAKgBIAKgCIAAgHIgBgNQgBgHgDgEQgCgFgEgDQgFgCgFAAQgFAAgEACg");
	this.shape_1.setTransform(6.4,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRA3QgHgDgEgEQgEgFgCgFIgBgKIABgJIAEgIIAGgHIAHgEQgIgFgEgGQgEgHAAgIQAAgHADgFQACgGAEgEQAFgEAGgDQAGgCAHAAQAJAAAGADQAHACAEAFQAEAEACAFQACAFAAAFQAAAEgCAEIgEAIIgFAHIgGAEQATAIAAAUQAAAGgCAGQgCAGgFAEQgFAEgGADQgHACgJAAQgMgBgFgCgAgRANIgCAHIgBAIIABAFQABAEACADIAHAEQAEACAFAAQAFAAAEgCQAFgBACgDQADgDABgDIABgGQAAgGgCgDIgFgHQgEgDgFgCIgKgEQgIAFgEAFgAgIgrIgGAEIgDAGIgBAFIABAHIAEAHQADADAEADIAKAEQAHgFAEgFIADgHIABgHIgBgFQgBgDgDgDIgFgEQgEgBgFAAQgEAAgEABg");
	this.shape_2.setTransform(6.5,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSA4QABgNAEgOQADgOAGgOIAKgYQAHgLAGgHIg1AAIAAgOIBFAAIAAANIgLARQgHAKgFANQgGAMgEAPIgEAfg");
	this.shape_3.setTransform(6.5,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOA2QgGgEgFgFQgFgHgDgJQgCgIAAgLQAAgPAEgMQAFgNAJgJQAHgIAMgEIAMgDIAOgCIABANIgSABQgHADgFAEQgGAEgFAHQgDAGgCAKIAJgDIAKgCQAJAAAHAEQAGACAEAFQAFAEABAGQACAGAAAHQAAAGgCAGQgCAHgEAFQgEAFgHAEQgGADgJAAQgJAAgHgDgAgJAAIgKADIAAADIAAAEIABANQAAAGADAGQACAEAFADQAEADAFAAQAGAAADgDQAEgCADgDIADgIIAAgIIAAgKIgEgHQgGgEgKAAIgJAAg");
	this.shape_4.setTransform(6.6,11.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPA4IgOgEIgEgBIADgNIAJADQAGACAJAAQAGAAAFgBQAFgCADgDQADgCABgEQACgDgBgEQAAgHgCgEQgCgFgFgDQgFgDgIgCQgJgBgNAAIAEg3IA0AAIAAANIgnAAIAAAGIgCAYQALABAIACQAJADAGAFQAGADACAHQADAGAAAJQAAAHgCAGQgDAHgFAEQgFAFgIACQgHADgKAAg");
	this.shape_5.setTransform(6.5,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AALA4IAAgdIgxAAIAAgKIAIgQIANgSIAOgUIAOgSIAPAAIAABGIAMAAIAAAMIgMAAIAAAdgAACgZIgZAoIAiAAIAAg0g");
	this.shape_6.setTransform(6.5,11.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgPA6IgTgGIADgNIAJADQAHACAIABQAHAAAFgCQAFgBADgDQADgDABgEQACgEAAgEQAAgGgCgFQgDgDgEgDQgEgCgGgCIgKAAIgEAAIAAgLIAGAAIAIgCQADAAAEgDQADgCACgDQADgEAAgFQAAgEgCgDIgFgGIgGgDIgFgBQgJAAgFADIgJAEIgGgMIAMgFIAIgCIAJgBQAHAAAHACQAGADAEADQAFAEABAFQADAGAAAGQAAAFgCADQAAAEgDADQgFAGgHADIAIAEIAHAFIAFAIQABAFABAGQAAAHgCAHQgDAGgFAEQgGAFgIADQgHACgKAAg");
	this.shape_7.setTransform(6.4,11.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AggA5IAAgEQAAgHADgHQACgGAEgGIAJgLIAXgYQADgEABgEQACgEAAgEQAAgFgBgDIgEgGIgGgDIgHgBIgIABIgHADIgFADIgDADIgIgKIAFgEIAGgFIAJgDQAFgCAGAAQAIAAAGACQAHACAEAEQAJAIAAAPQAAAGgCAFIgGALIgfAhIgFAIQgCADAAADIAyAAIAAANg");
	this.shape_8.setTransform(6.4,11.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AAHA4IAAhZIgFADIgFAEIgNAFIgFgLQAJgDAIgGQAJgFAGgJIALAAIAABvg");
	this.shape_9.setTransform(5.7,11.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgaArQgFgIgDgLQgCgKAAgOQAAgbAKgPQAEgHAHgEQAHgEAIAAQAJAAAGAEQAHAEAFAHQAKAPAAAbQAAAOgCAKQgDALgFAIQgFAHgHAEQgGAEgJAAQgRAAgJgPgAgJgoQgFAEgCAFIgEAPIgBAQIABASIAEANQACAGAFAEQAEAEAFAAQAGAAAEgEQAEgEADgGQACgFABgIIABgSIgBgQQgBgIgCgHQgDgFgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_10.setTransform(6.5,11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},25).to({state:[{t:this.shape_2}]},25).to({state:[{t:this.shape_3}]},25).to({state:[{t:this.shape_4}]},25).to({state:[{t:this.shape_5}]},25).to({state:[{t:this.shape_6}]},25).to({state:[{t:this.shape_7}]},25).to({state:[{t:this.shape_8}]},25).to({state:[{t:this.shape_9}]},25).to({state:[{t:this.shape_10}]},25).to({state:[]},29).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,5.6,15.8,11.6);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A0607").s().p("Eg0fAB4IAAjvMBo/AAAIAADvg");
	this.shape.setTransform(336,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,672,24), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,122,127), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.head();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,58,68), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.armtwo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,35,69), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.handtwo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,20,34), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.arm();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,35,54), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,41,38), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tablepoker();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.825,0.825);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,660,495), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kingspates();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,96,143), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tshirt();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,96,143), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.acespades();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.743,0.743);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,52.1,77.3), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.acehearts();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.743,0.743);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,52.1,77.3), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ninerombs();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.743,0.743);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,52.1,77.3), null);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kingcross();
	this.instance.parent = this;
	this.instance.setTransform(-26,-38.6,0.743,0.743);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-38.6,52.1,77.3);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tshirt();
	this.instance.parent = this;
	this.instance.setTransform(-48,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-71.5,96,143);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(77.2,29.5,1,1,0,0,0,47.4,9.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CC00").s().rr(-75,-31,150,62,12.5);
	this.shape.setTransform(75,31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#669900").s().rr(-75,-31,150,62,13.2);
	this.shape_1.setTransform(75,35.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FF33").s().rr(-75,-31,150,62,12.5);
	this.shape_2.setTransform(75,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape_2},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,66.1);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(76.2,30.4,1,1,0,0,0,21.3,8.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3333").s().rr(-75,-31,150,62,12.5);
	this.shape.setTransform(75,31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().rr(-75,-31,150,62,13.2);
	this.shape_1.setTransform(75,35.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().rr(-75,-31,150,62,12.5);
	this.shape_2.setTransform(75,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape_2},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,66.1);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(82.4,18.6,0.915,0.915,0,0,0,70.6,8.7);

	this.instance_1 = new lib.Символ44();
	this.instance_1.parent = this;
	this.instance_1.setTransform(82.5,22,1,1,0,0,0,82.5,22);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().rr(-82.5,-20,165,40,12.5);
	this.shape.setTransform(82.5,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3300").s().rr(-82.5,-20,165,40,12.5);
	this.shape_1.setTransform(82.5,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165,44);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(82.5,22,1,1,0,0,0,82.5,22);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(0,0,165,44), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(75,33,1,1,0,0,0,75,33);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(0,0,150,66.1), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(75,102,1,1,0,0,0,75,33);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(0,69,150,66.1), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(48,71.5,1,1,0,0,0,48,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(0,0,96,143), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(397.9,214,1,1,0,0,0,397.9,214);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).wait(495).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,796,428);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(48.8,284.8,1,1,0,0,0,45.7,6.2);

	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(528.1,13.1,1.354,1.354,0,0,0,41,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(3.1,3.5,580.3,287.5), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(81,20.7,1.415,1.415,0,0,0,85,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.48,scaleY:1.48,x:81.1,y:20.8},4,cjs.Ease.get(-1)).to({regY:17.6,scaleX:1.57,scaleY:1.57,y:20.6},5,cjs.Ease.get(1)).to({scaleX:1.49,scaleY:1.49,x:81.2,y:20.8},5,cjs.Ease.get(-1)).to({regY:17.7,scaleX:1.42,scaleY:1.42,x:81,y:20.7},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.2,-4.3,240.6,50.2);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(336,46.4,1,3.933,0,0,0,336,11.8);
	this.instance.alpha = 0.93;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(0,0,672,94.4), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 31
	this.timer2 = new lib.Символ31();
	this.timer2.parent = this;
	this.timer2.setTransform(453.7,33.2,1.328,1.328,0,0,0,11.1,11);
	this.timer2.alpha = 0;
	this.timer2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.timer2).wait(210).to({_off:false},0).to({alpha:1},9).wait(291));

	// Символ 32
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(320.3,35.2,1.328,1.328,0,0,0,86.4,7.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(208).to({_off:false},0).to({alpha:1},8).wait(294));

	// Символ 29
	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(340.8,-218.3,1,1,0,0,0,85,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(204).to({y:-10.3,alpha:0},0).to({alpha:1},8).wait(298));

	// Слой 1
	this.instance_2 = new lib.Символ28();
	this.instance_2.parent = this;
	this.instance_2.setTransform(328.8,5.6,1,0.085,0,0,0,336,47.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(199).to({_off:false},0).to({scaleY:1},7,cjs.Ease.get(1)).wait(304));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(216.6,-240.4,240.6,50.2);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(48,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,96,143), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(48,71.5,1,1,0,0,0,48,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,96,143), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(48,71.5,1,1,0,0,0,48,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:47,y:76.1},13,cjs.Ease.get(-1)).to({x:45.8,y:81.8},16,cjs.Ease.get(1)).to({x:46.9,y:76.7},15,cjs.Ease.get(-1)).to({x:48,y:71.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,143);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(48,71.5,1,1,0,0,0,48,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:48.9,y:76.5},15,cjs.Ease.get(-1)).to({x:49.8,y:81.9},16,cjs.Ease.get(1)).to({x:48.9,y:76.7},16,cjs.Ease.get(-1)).to({x:48,y:71.5},16,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,143);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(26,38.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,52.1,77.3), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(26,38.6,1,1,0,0,0,26,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,52.1,77.3), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 14
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(216.7,199.3,1,1,0,0,0,48,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(509));

	// Символ 16
	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(95.9,-61.5,0.126,0.056,0,-19.4,0,48.1,70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.56,scaleY:0.53,skewX:-9.6,x:149.9,y:-19.6},7,cjs.Ease.get(-1)).to({regX:48,regY:71.5,scaleX:1,scaleY:1,skewX:0,x:169.5,y:14.5},7,cjs.Ease.get(1)).to({scaleX:0.06},5,cjs.Ease.get(-1)).to({_off:true},1).wait(490));

	// Символ 15
	this.instance_2 = new lib.Символ15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(169.5,13.7,0.033,1,0,0,0,48,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({scaleX:1},5).wait(25).to({y:3.7},5,cjs.Ease.get(-1)).to({y:-6.3},5,cjs.Ease.get(1)).to({rotation:-6,x:176.9,y:34.8},5,cjs.Ease.get(-1)).to({rotation:-12.2,x:184.3,y:75.9},5,cjs.Ease.get(1)).wait(441));

	// Символ 16
	this.instance_3 = new lib.Символ16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(95.9,-61.5,0.126,0.056,0,-19.4,0,48.1,70.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({scaleX:0.56,scaleY:0.53,skewX:-9.6,x:149.9,y:-19.6},7,cjs.Ease.get(-1)).to({regX:48,regY:71.5,scaleX:1,scaleY:1,skewX:0,x:273.5,y:14.5},7,cjs.Ease.get(1)).to({scaleX:0.05},5,cjs.Ease.get(-1)).to({_off:true},1).wait(471));

	// Символ 14
	this.instance_4 = new lib.Символ14();
	this.instance_4.parent = this;
	this.instance_4.setTransform(273.5,13.7,0.033,1,0,0,0,48,71.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(37).to({_off:false},0).to({scaleX:1},5).wait(17).to({y:4.5},5,cjs.Ease.get(-1)).to({y:-4.7},5,cjs.Ease.get(1)).to({regX:48.1,rotation:4.8,x:264.8,y:35.1},5,cjs.Ease.get(-1)).to({regX:48,rotation:10,x:255.9,y:74.6},5,cjs.Ease.get(1)).wait(431));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(88.5,-65.2,176.3,336.1);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handtwo.png
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(127,55,1,1,0,0,0,10,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:10.1,scaleX:1,scaleY:1,skewX:-3.8,skewY:-4.3,x:129.3,y:55.2},14,cjs.Ease.get(-1)).to({regY:17.1,scaleX:1,scaleY:1,skewX:-8,skewY:-9.2,x:131.5,y:55.3},15,cjs.Ease.get(1)).to({regY:17,scaleX:1,scaleY:1,skewX:-3.8,skewY:-4.5,x:129.3,y:55.1},15,cjs.Ease.get(-1)).to({regX:10,scaleX:1,scaleY:1,skewX:0,skewY:0,x:127,y:55},15,cjs.Ease.get(1)).wait(1));

	// armtwo.png
	this.instance_1 = new lib.Символ23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(142.5,99.5,1,1,0,0,0,17.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:17.6,regY:34.6,scaleX:1,scaleY:1,skewX:3,skewY:2.3,x:144.5,y:99},14,cjs.Ease.get(-1)).to({regX:17.5,scaleX:1,scaleY:1,skewX:6.2,skewY:5,x:146.4,y:98.2},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,skewX:3,skewY:2.3,x:144.5,y:98.9},15,cjs.Ease.get(-1)).to({regY:34.5,scaleX:1,scaleY:1,skewX:0,skewY:0,x:142.5,y:99.5},15,cjs.Ease.get(1)).wait(1));

	// head.png
	this.instance_2 = new lib.Символ24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(92,34,1,1,0,0,0,29,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:29.1,scaleX:1,scaleY:1,skewX:5.3,skewY:4.6,x:94.9,y:33.5},14,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:11,skewY:9.8,x:97.6,y:32.9},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,skewX:5.3,skewY:4.8,x:94.8,y:33.5},15,cjs.Ease.get(-1)).to({regX:29,scaleX:1,scaleY:1,skewX:0,skewY:0,x:92,y:34},15,cjs.Ease.get(1)).wait(1));

	// hand.png
	this.instance_3 = new lib.Символ20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(20.5,135,1,1,0,0,0,20.5,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,skewX:4.8,skewY:1.5,x:22.1,y:135.7},14,cjs.Ease.get(-1)).to({regX:20.6,regY:19.1,scaleX:1,scaleY:1.01,skewX:10.1,skewY:3.4,x:23.8,y:136.4},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,skewX:5,skewY:1.5,x:22.2,y:135.8},15,cjs.Ease.get(-1)).to({regX:20.5,regY:19,scaleX:1,scaleY:1,skewX:0,skewY:0,x:20.5,y:135},15,cjs.Ease.get(1)).wait(1));

	// arm.png
	this.instance_4 = new lib.Символ21();
	this.instance_4.parent = this;
	this.instance_4.setTransform(32.5,104,1,1,0,0,0,17.5,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:17.6,regY:27.1,scaleX:1,scaleY:1,skewX:-2,skewY:-2.8,x:34.4,y:104.9},14,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:-4.4,skewY:-5.7,x:36.1,y:105.7},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,skewX:-2.1,skewY:-2.8,x:34.3,y:105},15,cjs.Ease.get(-1)).to({regX:17.5,regY:27,scaleX:1,scaleY:1,skewX:0,skewY:0,x:32.5,y:104},15,cjs.Ease.get(1)).wait(1));

	// girl.png
	this.instance_5 = new lib.Символ25();
	this.instance_5.parent = this;
	this.instance_5.setTransform(99,69.5,1,1,0,0,0,61,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:61.1,skewX:0.5,x:99.8,y:69.6},14,cjs.Ease.get(-1)).to({regX:61,skewX:1.3,x:100.5,y:69.5},15,cjs.Ease.get(1)).to({regX:61.1,skewX:0.5,x:99.9,y:69.6},15,cjs.Ease.get(-1)).to({regX:61,skewX:0,x:99,y:69.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,154);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(1));

	// Слой 4
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(539.5,214,1,1,0,0,0,82.5,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:154},14,cjs.Ease.get(1)).to({y:214},15,cjs.Ease.get(-1)).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(936,102,1,1,0,0,0,75,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:742},14,cjs.Ease.get(1)).to({x:936},15,cjs.Ease.get(-1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ41();
	this.instance_2.parent = this;
	this.instance_2.setTransform(102.5,31,1,1,0,0,0,102.5,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:358.5},14,cjs.Ease.get(1)).to({x:102.5},15,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,69,1011,167);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(48,71.5,1,1,0,0,0,48,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,96,143), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(48,71.5,1,1,0,0,0,48,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({_off:false},0).to({regX:48.1,rotation:9,x:329.6,y:140.9},8,cjs.Ease.get(-1)).to({regX:48,rotation:0,x:575.7,y:201.6},7,cjs.Ease.get(1)).wait(401));

	// Слой 1
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(48,71.5,1,1,0,0,0,48,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(84).to({rotation:10.5,x:273.2,y:116.1},7,cjs.Ease.get(-1)).to({rotation:0,x:530.5,y:167.1},8,cjs.Ease.get(1)).wait(411));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,143);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tshirt.png
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(-136.9,43.8,0.145,0.058,0,-25.2,0,46.6,73.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({_off:false},0).to({regX:46.5,regY:73.7,scaleX:0.33,scaleY:0.29,skewX:-13.3,x:-119.4,y:36.9},9,cjs.Ease.get(-1)).to({regX:48,regY:71.6,scaleX:0.54,scaleY:0.54,skewX:0,x:-105.5,y:46.9},10,cjs.Ease.get(1)).to({regX:49,scaleX:0.02,x:-105.6},5,cjs.Ease.get(-1)).to({_off:true},1).wait(376));

	// ninerombs.png
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-105.4,46.6,0.077,1,0,0,0,26.1,38.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(133).to({_off:false},0).to({regX:26,scaleX:1,x:-104},4,cjs.Ease.get(1)).wait(373));

	// tshirt.png
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-136.9,43.8,0.145,0.058,0,-25.2,0,46.6,73.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(128).to({_off:false},0).to({regX:46.4,scaleX:0.35,scaleY:0.31,skewX:-11.8,x:-92.7,y:37.9},10,cjs.Ease.get(-1)).to({regX:48,regY:71.6,scaleX:0.54,scaleY:0.54,skewX:0,x:-46,y:46.9},9,cjs.Ease.get(1)).to({regX:49,scaleX:0.02,x:-45.6},5,cjs.Ease.get(-1)).to({_off:true},1).wait(357));

	// acehearts.png
	this.instance_3 = new lib.Символ8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-45.9,46.6,0.077,1,0,0,0,26.1,38.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(152).to({_off:false},0).to({regX:26,scaleX:1,x:-46},4,cjs.Ease.get(1)).wait(354));

	// tshirt.png
	this.instance_4 = new lib.Символ6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-136.9,43.8,0.145,0.058,0,-25.2,0,46.6,73.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(147).to({_off:false},0).to({regX:46.4,scaleX:0.35,scaleY:0.31,skewX:-11.8,x:-62,y:37.9},10,cjs.Ease.get(-1)).to({regX:48,regY:71.6,scaleX:0.54,scaleY:0.54,skewX:0,x:12,y:46.9},9,cjs.Ease.get(1)).to({regX:49,scaleX:0.02,x:11.9},5,cjs.Ease.get(-1)).to({_off:true},1).wait(338));

	// acespades.png
	this.instance_5 = new lib.Символ10();
	this.instance_5.parent = this;
	this.instance_5.setTransform(12.1,46.6,0.077,1,0,0,0,26.1,38.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(171).to({_off:false},0).to({regX:26,scaleX:1,x:12},4,cjs.Ease.get(1)).wait(335));

	// tshirt.png
	this.instance_6 = new lib.Символ6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-136.9,43.8,0.145,0.058,0,-25.2,0,46.6,73.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(166).to({_off:false},0).to({regX:46.4,scaleX:0.35,scaleY:0.31,skewX:-11.8,x:-31.4,y:37.9},10,cjs.Ease.get(-1)).to({regX:48,regY:71.6,scaleX:0.54,scaleY:0.54,skewX:0,x:70,y:46.9},9,cjs.Ease.get(1)).to({regX:49,scaleX:0.02,x:70.9},5,cjs.Ease.get(-1)).to({_off:true},1).wait(319));

	// kingcross.png
	this.instance_7 = new lib.Символ7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-322.4,-180.6,1,1,0,0,0,26,38.6);

	this.instance_8 = new lib.Символ11();
	this.instance_8.parent = this;
	this.instance_8.setTransform(70.1,46.6,0.077,1,0,0,0,26.1,38.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[]},118).to({state:[{t:this.instance_8}]},72).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8}]},315).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(190).to({_off:false},0).to({regX:26,scaleX:1,x:70},4,cjs.Ease.get(1)).wait(316));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-348.4,-219.2,52,77.3);


// stage content:
(lib.europoker600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		
		
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.timer.gotoAndStop(195);
			this.timer.timer2.gotoAndStop(1);
			this.flop.gotoAndStop(195);
			this.mycards.gotoAndStop(195);
			this.hercards.gotoAndStop(195);
			this.temen.gotoAndStop(195);
			this.buttons.gotoAndPlay(1);
		
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{   
			this.timer.gotoAndPlay(196);
			this.timer.timer2.gotoAndPlay(0);
			this.flop.gotoAndPlay(196);
			this.mycards.gotoAndPlay(196);
			this.hercards.gotoAndPlay(196);
			this.temen.gotoAndPlay(196);
			this.buttons.gotoAndPlay(16);
		
		}
		
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 30/window.devicePixelRatio;
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// buttons
	this.buttons = new lib.Символ42();
	this.buttons.parent = this;
	this.buttons.setTransform(-135.5,150.1,1,1,0,0,0,102.5,31);

	this.timeline.addTween(cjs.Tween.get(this.buttons).wait(1));

	// temen
	this.temen = new lib.Символ37();
	this.temen.parent = this;
	this.temen.setTransform(342,167.1,1,1,0,0,0,397.9,214);

	this.timeline.addTween(cjs.Tween.get(this.temen).wait(1));

	// ban
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(301.3,150.4,1,1,0,0,0,294,147.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11,10,0.464,0.464);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// mycards
	this.mycards = new lib.Символ4();
	this.mycards.parent = this;
	this.mycards.setTransform(271,281.5,1,1,0,0,0,176,73.5);

	this.timeline.addTween(cjs.Tween.get(this.mycards).wait(1));

	// timer
	this.timer = new lib.Символ26();
	this.timer.parent = this;
	this.timer.setTransform(318.4,155.5,1,1,0,0,0,336,12);

	this.timeline.addTween(cjs.Tween.get(this.timer).wait(1));

	// flop
	this.flop = new lib.Символ5();
	this.flop.parent = this;
	this.flop.setTransform(545,174.5,1,1,0,0,0,216.4,71.5);

	this.timeline.addTween(cjs.Tween.get(this.flop).wait(1));

	// hercards
	this.hercards = new lib.Символ6();
	this.hercards.parent = this;
	this.hercards.setTransform(190.7,147.1,0.145,0.058,0,-25.2,0,46.6,73.5);

	this.timeline.addTween(cjs.Tween.get(this.hercards).wait(1));

	// milf
	this.instance_2 = new lib.Символ1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(296,69.1,1,1,0,0,0,80,77);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// tablepoker.jpg
	this.fon = new lib.Символ17();
	this.fon.parent = this;
	this.fon.setTransform(1.9,19.5,1,1,0,0,0,28.9,46.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(62,33.8,1011,595);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 25,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/europoker600_300_atlas_.png?1480066414353", id:"europoker600_300_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;