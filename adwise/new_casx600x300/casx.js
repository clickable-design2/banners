(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,51);


(lib.casinoxlogo = function() {
	this.initialize(img.casinoxlogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,20);


(lib.chip = function() {
	this.initialize(img.chip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,86);


(lib.dol = function() {
	this.initialize(img.dol);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,100);


(lib.man1 = function() {
	this.initialize(img.man1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,260);


(lib.man2 = function() {
	this.initialize(img.man2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,268);


(lib.man3 = function() {
	this.initialize(img.man3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,197,363);


(lib.xc22as_16_03 = function() {
	this.initialize(img.xc22as_16_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,56);


(lib.xcas_09 = function() {
	this.initialize(img.xcas_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,88);


(lib.xcas_0_02 = function() {
	this.initialize(img.xcas_0_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,93);


(lib.xcas_0_04 = function() {
	this.initialize(img.xcas_0_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,93);


(lib.xcas_0_06 = function() {
	this.initialize(img.xcas_0_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,93);


(lib.xcas_0_08 = function() {
	this.initialize(img.xcas_0_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,93);


(lib.xcas_0_10 = function() {
	this.initialize(img.xcas_0_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,93);// helper functions:

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


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFAE01").s().p("A/cCTIAAklMA+5AAAIAAElg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-201.3,-14.7,402.6,29.4), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dol();
	this.instance.parent = this;
	this.instance.setTransform(36.2,-15.3,0.681,0.681,97.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-36.2,-23.6,72.4,47.6), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chip();
	this.instance.parent = this;
	this.instance.setTransform(-20.7,-21,0.488,0.488);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-20.7,-21,41.5,42), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.man3();
	this.instance.parent = this;
	this.instance.setTransform(-98.5,-181.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-98.5,-181.5,197,363), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.man1();
	this.instance.parent = this;
	this.instance.setTransform(-72,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-72,-130,144,260), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.man2();
	this.instance.parent = this;
	this.instance.setTransform(-100,-134);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-100,-134,200,268), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFAE01").s().rr(-89,-25.5,178,51,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-89,-25.5,178,51), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-89,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-89,-25.5,178,51), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjQBYIgBAAIAAiJQAWgBAZAAIAvABIgCAYIg9AAIAAAfIAVAAQAdABAKAIQAMAKAAAYQAAANgDAIQgDAJgHAEQgHAFgJABQgJACgNAAIgzgDgAiyBDIAVAAQAMAAAFgEQADgDAAgMQAAgNgDgEQgDgBgEgBIgKgBIgVAAgAFXBYIAAiJIAzgBQAcAAALAIQAKAHABAVQgBAHgBAGQgCAEgDAEQgFAJgNAAIAAABQAQACAGAJQADAEACAHQACAGgBAJQAAAVgKAIQgFAEgJABQgJACgNAAQgmAAgUgCgAF1BDIAigBQAEgBACgBQACgDABgDQABgEABgFQAAgNgGgFQgEgDgNgBIgWAAgAF1AHIAWAAQALAAAEgDQAEgEAAgKQAAgLgEgCQgFgEgMAAIgUgBgAClBYIgBAAIAAiJIAeAAIAAAzIAUAAQAcAAAMAKQAFAEADAJQACAIABAOQAAAZgKAIQgGAGgJABQgIADgMAAQglAAgSgCgADCBDIAUAAIAKgBQAEgBACgDQADgDAAgNQAAgNgDgFIgGgEIgKgBIgUAAgArJBUIACgVQAQACAdACQAMAAADgEQAFgDAAgLQAAgNgFgEQgCgCgEgBQgEgBgGAAIgbAAIAAgWIAbAAQAKAAAEgDQAEgDAAgKQAAgKgEgDQgFgEgLAAQgPAAgYADIgDgXQAMgCAggBQAbAAAKAIQAGADACAIQADAHAAAKQAAAHgCAGQgBAEgDAEQgFAJgNAAIAAABQAIABAFADQAGADADAEQAGAJAAARQAAALgCAGQgDAHgFAFQgKAHgaAAQgfAAgVgGgAKtBYIAAhSQAAgIACgKIgCAAQgDAJgFAIIguBTIgfAAIAAiJIAdAAIAABQIgBATIABAAQACgHAGgLIAuhRIAfAAIAACJgAIrBYIgKgkIgvAAIgKAkIggAAIAoiAQABgEADgDQADgCAEAAIAcAAQAFAAADACQACADABAEIAoCAgAIaAdIgOg2IgGAAIgOA2IAiAAgAEcBYIAAiJIAeAAIAACJgABLBYIAAhvIgqAAIAAgaIBxAAIAAAaIgpAAIAABvgAgBBYIgKgkIgvAAIgKAkIggAAIApiAQABgEACgDQADgCAEAAIAdAAQAEAAADACQADADAAAEIAoCAgAgSAdIgNg2IgGAAIgOA2IAhAAgAj+BYIgKgkIgvAAIgKAkIggAAIAoiAQABgEADgDQADgCAEAAIAcAAQAFAAADACQACADABAEIAoCAgAkPAdIgOg2IgGAAIgOA2IAiAAgAnOBYIAAiJQAegBAXAAQAdAAAKAJQAGAFACAIQADAKAAANQAAAMgDAIQgCAJgFAGQgKAJgaAAQgNAAgNgBIAAAygAmvgbIAAAqIAVAAQAMABAEgFQAEgEAAgMQAAgNgEgEIgGgEIgKgBgAn7BYIgKgkIgvAAIgKAkIggAAIAoiAQABgEADgDQADgCAEAAIAdAAQADAAAEACQACADABAEIAoCAgAoMAdIgOg2IgGAAIgOA2IAiAAgAKDg9QgFgCgFgEQgJgKABgNIAUAAQgBARAOAAQAHAAAEgEQADgEgBgJIAUAAQACANgKAKQgEAEgHACQgFACgJABQgIgBgHgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-71.4,-9,142.8,18.1), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFAE00").s().p("AEWBZIAAhSQAAgIACgKIgCAAQgDAKgEAHIgvBTIgeAAIAAiJIAdAAIAABQIgCATIABAAQADgHAFgLIAvhRIAfAAIAACJgACUBZIgJgkIgwAAIgKAkIggAAIAoiBQACgDADgDQADgCADAAIAdAAQAEAAADACQACACABAEIAoCBgACDAeIgNg2IgGAAIgPA2IAiAAgAg6BZIAAiJQAdgBAYAAQAbAAALAJQAFAFADAIQACAKAAANQAAAMgCAIQgDAKgFAFQgKAJgZAAQgNAAgNgBIAAAygAgcgZIAAApIAWAAQALABADgFQAFgEAAgMQAAgNgFgFIgFgDIgJgBgAilBZIAAhsQAAgGACgGQACgFAEgEQAIgIANAAQArAAASACIgBAXIgwAAQgGgBgCADQgDADAAAFIAABmgAjeBZIAAhSQAAgIACgKIgCAAQgDAKgFAHIguBTIgfAAIAAiJIAeAAIAABQIgCATIABAAQACgHAGgLIAvhRIAeAAIAACJgADtg8QgGgCgEgFQgKgJACgMIAUAAQgCAQAOAAQAIAAADgEQADgFAAgHIATAAQACAMgJAJQgFAFgGACQgGACgJAAQgHAAgHgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-30.7,-8.9,61.5,17.9), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhvBoIgBgdIhcAAIgDAdIgVAAIAAg0IAPAAQANgjAFgyQABgNAIgJQAJgHANgBIA6AAIAABzIASAAIAAA0gAikgmQgCADAAAGQgDAdgEASQgGAYgGAKIAwAAIAAhcIgSAAQgGgBgDADgAnRA+QgNgPgBgqQAAgTAEgOQADgOAHgIQAMgPAiAAQAgAAAOAPQAGAIADAOQADAOAAATQAAAqgMAPQgOAPggAAQgiAAgMgPgAmxgmQgFADgDAEQgGAKABAaQgBAcAGAJQAGAKAQAAQAPAAAFgKQAHgJAAgcQAAgagHgKQgCgEgGgDQgFgDgHABQgIgBgGADgAhFBLIgBAAIAAiKIAeAAIAAAzIAUAAQAbAAAMAKQAFAEADAJQACAJABAMQgBAZgJAKQgGAFgJACQgHACgMAAQglAAgSgBgAgoA0IAUAAIAKgBQAFgBABgBQAEgEgBgOQABgNgEgEIgGgEIgKgBIgUAAgAHCBLIAAhSQAAgJACgJIgBAAQgEAIgEAKIgvBSIgeAAIAAiKIAdAAIAABQIgCAUIABAAQADgIAFgKIAvhSIAfAAIAACKgAFABLIgKgkIgvAAIgKAkIggAAIApiCQABgDACgCQADgCAEgBIAdAAQAEABADACQACACABADIApCCgAEvAOIgNg2IgGAAIgPA2IAiAAgAC8BLIgeg+IgBAAIgeA+IggAAIAkhHIghhDIAgAAIAaA6IADAAIAag6IAgAAIghBDIAkBHgAAxBLIAAiKIAeAAIAACKgAkzBLIAAhxIgpAAIAAgZIBxAAIAAAZIgpAAIAABxgAGZhLQgGgCgEgFQgKgIACgNIATAAQAAAQAOAAQAGAAAEgEQADgFgBgHIAUAAQACANgJAIQgEAFgHACQgGACgIAAQgIAAgHgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-47.9,-10.4,95.9,20.9), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.casinoxlogo();
	this.instance.parent = this;
	this.instance.setTransform(-89,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-89,-10,178,20), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-300,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-300,-150,600,300), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.xc22as_16_03();
	this.instance.parent = this;
	this.instance.setTransform(-26.5,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-26.5,-28,53,56), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.xcas_0_10();
	this.instance.parent = this;
	this.instance.setTransform(-43,-42,0.934,0.934);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-43,-42,85,86.9), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.xcas_0_06();
	this.instance.parent = this;
	this.instance.setTransform(-39,-41,0.855,0.855);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-39,-41,76.1,79.5), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.xcas_0_04();
	this.instance.parent = this;
	this.instance.setTransform(-42,-39,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.xcas_09();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-44,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-44,-44,88,88), null);


(lib.Символ24_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.xcas_0_02();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-36,-39,0.831,0.831);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24_1, new cjs.Rectangle(-36,-39,71.5,77.3), null);


(lib.Символ20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance_1 = new lib.xcas_0_08();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-38,-40,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20_1, new cjs.Rectangle(-38,-40,75.8,78.4), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-201.3,-14.7,402.6,29.4), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},11).to({alpha:1},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-28,53,56);


(lib.Символ30_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-135.2,1,1,0,0,0,0,-135.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-0.1,rotation:20,y:-135.3},31,cjs.Ease.get(0.98)).to({regX:0,rotation:0,y:-135.2},36,cjs.Ease.get(0.98)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.2,-23.7,72.4,47.6);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.566,0.566);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:10.6},0).wait(1).to({rotation:21.2},0).wait(1).to({rotation:31.8},0).wait(1).to({rotation:42.4},0).wait(1).to({rotation:52.9},0).wait(1).to({rotation:63.5},0).wait(1).to({rotation:74.1},0).wait(1).to({rotation:84.7},0).wait(1).to({rotation:95.3},0).wait(1).to({rotation:105.9},0).wait(1).to({rotation:116.5},0).wait(1).to({rotation:127.1},0).wait(1).to({rotation:137.6},0).wait(1).to({rotation:148.2},0).wait(1).to({rotation:158.8},0).wait(1).to({rotation:169.4},0).wait(1).to({rotation:180},0).wait(1).to({rotation:190.6},0).wait(1).to({rotation:201.2},0).wait(1).to({rotation:211.8},0).wait(1).to({rotation:222.4},0).wait(1).to({rotation:232.9},0).wait(1).to({rotation:243.5},0).wait(1).to({rotation:254.1},0).wait(1).to({rotation:264.7},0).wait(1).to({rotation:275.3},0).wait(1).to({rotation:285.9},0).wait(1).to({rotation:296.5},0).wait(1).to({rotation:307.1},0).wait(1).to({rotation:317.6},0).wait(1).to({rotation:328.2},0).wait(1).to({rotation:338.8},0).wait(1).to({rotation:349.4},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-11.9,23.5,23.8);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:9.3},34,cjs.Ease.get(-1)).to({y:20},39,cjs.Ease.get(1)).to({y:9.5},40,cjs.Ease.get(-1)).to({y:0},36,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.5,-181.5,197,363);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:6.1},19,cjs.Ease.get(-1)).to({y:12.5},20,cjs.Ease.get(1)).to({y:6.3},20,cjs.Ease.get(-1)).to({y:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-134,200,268);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(0,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:9.7},24,cjs.Ease.get(-1)).to({y:0},25,cjs.Ease.get(1)).to({y:9.5},25,cjs.Ease.get(-1)).to({y:19},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-111,144,260);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 16
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(72,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 15
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(170.5,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-86,-157,355,383), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.07},7,cjs.Ease.get(-1)).to({alpha:0.141},7,cjs.Ease.get(1)).to({alpha:0.066},8,cjs.Ease.get(-1)).to({alpha:0},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-25.5,178,51);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 7
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(-267.3,48.7,1.228,1.228);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({x:-1.7},6).to({x:-11.7},3).wait(53).to({y:35,alpha:0.75},2).to({y:73.7,alpha:0},6).to({_off:true},1).wait(8));

	// Символ 6
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-267.7,3.9,2.825,2.825,0,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({x:-2.2},6).to({x:-12.2},3).wait(61).to({y:-9.9,alpha:0.75},2).to({y:28.9,alpha:0},6).to({_off:true},1).wait(4));

	// Символ 5
	this.instance_2 = new lib.Символ5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-267.2,-40.5,1.811,1.811);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:-1.6},6).to({x:-11.6},3).wait(69).to({regX:-0.1,regY:-0.1,x:-11.8,y:-54.4,alpha:0.75},2).to({regX:0,regY:0,x:-11.6,y:-15.5,alpha:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-354.9,-59.4,175.3,119.3);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-89,-25.5,178,51.1), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.154,1);
	this.instance.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance.cache(-203,-17,407,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-242.3,-24.7,488,52), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(-2.7,2.5,1,1,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:0,rotation:1.2,y:2.4},0).wait(1).to({rotation:2.5},0).wait(1).to({rotation:3.7},0).wait(1).to({rotation:5},0).wait(1).to({rotation:6.2},0).wait(1).to({rotation:7.5},0).wait(1).to({rotation:8.7},0).wait(1).to({rotation:10},0).wait(1).to({rotation:11.2},0).wait(1).to({rotation:12.5},0).wait(1).to({rotation:13.7},0).wait(1).to({rotation:14.9},0).wait(1).to({rotation:16.2},0).wait(1).to({rotation:17.4},0).wait(1).to({rotation:18.7},0).wait(1).to({rotation:19.9},0).wait(1).to({rotation:21.2},0).wait(1).to({rotation:22.4},0).wait(1).to({rotation:23.7},0).wait(1).to({rotation:24.9},0).wait(1).to({rotation:26.2},0).wait(1).to({rotation:27.4},0).wait(1).to({rotation:28.7},0).wait(1).to({rotation:29.9},0).wait(1).to({rotation:31.1},0).wait(1).to({rotation:32.4},0).wait(1).to({rotation:33.6},0).wait(1).to({rotation:34.9},0).wait(1).to({rotation:36.1},0).wait(1).to({rotation:37.4},0).wait(1).to({rotation:38.6},0).wait(1).to({rotation:39.9},0).wait(1).to({rotation:41.1},0).wait(1).to({rotation:42.4},0).wait(1).to({rotation:43.6},0).wait(1).to({rotation:44.8},0).wait(1).to({rotation:46.1},0).wait(1).to({rotation:47.3},0).wait(1).to({rotation:48.6},0).wait(1).to({rotation:49.8},0).wait(1).to({rotation:51.1},0).wait(1).to({rotation:52.3},0).wait(1).to({rotation:53.6},0).wait(1).to({rotation:54.8},0).wait(1).to({rotation:56.1},0).wait(1).to({rotation:57.3},0).wait(1).to({rotation:58.5},0).wait(1).to({rotation:59.8},0).wait(1).to({rotation:61,y:2.5},0).wait(1).to({rotation:62.3},0).wait(1).to({rotation:63.5},0).wait(1).to({rotation:64.8},0).wait(1).to({rotation:66},0).wait(1).to({rotation:67.3},0).wait(1).to({rotation:68.5},0).wait(1).to({rotation:69.8},0).wait(1).to({rotation:71},0).wait(1).to({rotation:72.2},0).wait(1).to({rotation:73.5},0).wait(1).to({rotation:74.7},0).wait(1).to({rotation:76},0).wait(1).to({rotation:77.2},0).wait(1).to({rotation:78.5},0).wait(1).to({rotation:79.7},0).wait(1).to({rotation:81},0).wait(1).to({rotation:82.2},0).wait(1).to({rotation:83.5},0).wait(1).to({rotation:84.7},0).wait(1).to({rotation:86},0).wait(1).to({rotation:87.2},0).wait(1).to({rotation:88.4},0).wait(1).to({rotation:89.7},0).wait(1).to({rotation:90.9},0).wait(1).to({rotation:92.2},0).wait(1).to({rotation:93.4},0).wait(1).to({rotation:94.7},0).wait(1).to({rotation:95.9},0).wait(1).to({rotation:97.2},0).wait(1).to({rotation:98.4},0).wait(1).to({rotation:99.7},0).wait(1).to({rotation:100.9},0).wait(1).to({rotation:102.1},0).wait(1).to({rotation:103.4},0).wait(1).to({rotation:104.6},0).wait(1).to({rotation:105.9},0).wait(1).to({rotation:107.1},0).wait(1).to({rotation:108.4},0).wait(1).to({rotation:109.6},0).wait(1).to({rotation:110.9},0).wait(1).to({rotation:112.1},0).wait(1).to({rotation:113.4},0).wait(1).to({rotation:114.6},0).wait(1).to({rotation:115.8},0).wait(1).to({rotation:117.1},0).wait(1).to({rotation:118.3},0).wait(1).to({rotation:119.6},0).wait(1).to({rotation:120.8,y:2.6},0).wait(1).to({rotation:122.1},0).wait(1).to({rotation:123.3},0).wait(1).to({rotation:124.6},0).wait(1).to({rotation:125.8},0).wait(1).to({rotation:127.1},0).wait(1).to({rotation:128.3},0).wait(1).to({rotation:129.6},0).wait(1).to({rotation:130.8},0).wait(1).to({rotation:132},0).wait(1).to({rotation:133.3},0).wait(1).to({rotation:134.5},0).wait(1).to({rotation:135.8},0).wait(1).to({rotation:137},0).wait(1).to({rotation:138.3},0).wait(1).to({rotation:139.5},0).wait(1).to({rotation:140.8},0).wait(1).to({rotation:142},0).wait(1).to({rotation:143.3},0).wait(1).to({rotation:144.5},0).wait(1).to({rotation:145.7},0).wait(1).to({rotation:147},0).wait(1).to({rotation:148.2},0).wait(1).to({rotation:149.5},0).wait(1).to({rotation:150.7},0).wait(1).to({rotation:152},0).wait(1).to({rotation:153.2},0).wait(1).to({rotation:154.5},0).wait(1).to({rotation:155.7},0).wait(1).to({rotation:157},0).wait(1).to({rotation:158.2},0).wait(1).to({rotation:159.4},0).wait(1).to({rotation:160.7},0).wait(1).to({rotation:161.9},0).wait(1).to({rotation:163.2},0).wait(1).to({rotation:164.4},0).wait(1).to({rotation:165.7},0).wait(1).to({rotation:166.9},0).wait(1).to({rotation:168.2},0).wait(1).to({rotation:169.4},0).wait(1).to({rotation:170.7},0).wait(1).to({rotation:171.9},0).wait(1).to({rotation:173.1},0).wait(1).to({rotation:174.4},0).wait(1).to({rotation:175.6},0).wait(1).to({rotation:176.9},0).wait(1).to({rotation:178.1},0).wait(1).to({rotation:179.4},0).wait(1).to({rotation:180.6,x:-2.8},0).wait(1).to({rotation:181.9},0).wait(1).to({rotation:183.1},0).wait(1).to({rotation:184.4},0).wait(1).to({rotation:185.6},0).wait(1).to({rotation:186.9},0).wait(1).to({rotation:188.1},0).wait(1).to({rotation:189.3},0).wait(1).to({rotation:190.6},0).wait(1).to({rotation:191.8},0).wait(1).to({rotation:193.1},0).wait(1).to({rotation:194.3},0).wait(1).to({rotation:195.6},0).wait(1).to({rotation:196.8},0).wait(1).to({rotation:198.1},0).wait(1).to({rotation:199.3},0).wait(1).to({rotation:200.6},0).wait(1).to({rotation:201.8},0).wait(1).to({rotation:203},0).wait(1).to({rotation:204.3},0).wait(1).to({rotation:205.5},0).wait(1).to({rotation:206.8},0).wait(1).to({rotation:208},0).wait(1).to({rotation:209.3},0).wait(1).to({rotation:210.5},0).wait(1).to({rotation:211.8},0).wait(1).to({rotation:213},0).wait(1).to({rotation:214.3},0).wait(1).to({rotation:215.5},0).wait(1).to({rotation:216.7},0).wait(1).to({rotation:218},0).wait(1).to({rotation:219.2},0).wait(1).to({rotation:220.5},0).wait(1).to({rotation:221.7},0).wait(1).to({rotation:223},0).wait(1).to({rotation:224.2},0).wait(1).to({rotation:225.5},0).wait(1).to({rotation:226.7},0).wait(1).to({rotation:228},0).wait(1).to({rotation:229.2},0).wait(1).to({rotation:230.4},0).wait(1).to({rotation:231.7},0).wait(1).to({rotation:232.9},0).wait(1).to({rotation:234.2},0).wait(1).to({rotation:235.4},0).wait(1).to({rotation:236.7},0).wait(1).to({rotation:237.9},0).wait(1).to({rotation:239.2},0).wait(1).to({rotation:240.4,y:2.5},0).wait(1).to({rotation:241.7},0).wait(1).to({rotation:242.9},0).wait(1).to({rotation:244.2},0).wait(1).to({rotation:245.4},0).wait(1).to({rotation:246.6},0).wait(1).to({rotation:247.9},0).wait(1).to({rotation:249.1},0).wait(1).to({rotation:250.4},0).wait(1).to({rotation:251.6},0).wait(1).to({rotation:252.9},0).wait(1).to({rotation:254.1},0).wait(1).to({rotation:255.4},0).wait(1).to({rotation:256.6},0).wait(1).to({rotation:257.9},0).wait(1).to({rotation:259.1},0).wait(1).to({rotation:260.3},0).wait(1).to({rotation:261.6},0).wait(1).to({rotation:262.8},0).wait(1).to({rotation:264.1},0).wait(1).to({rotation:265.3},0).wait(1).to({rotation:266.6},0).wait(1).to({rotation:267.8},0).wait(1).to({rotation:269.1},0).wait(1).to({rotation:270.3},0).wait(1).to({rotation:271.6},0).wait(1).to({rotation:272.8},0).wait(1).to({rotation:274},0).wait(1).to({rotation:275.3},0).wait(1).to({rotation:276.5},0).wait(1).to({rotation:277.8},0).wait(1).to({rotation:279},0).wait(1).to({rotation:280.3},0).wait(1).to({rotation:281.5},0).wait(1).to({rotation:282.8},0).wait(1).to({rotation:284},0).wait(1).to({rotation:285.3},0).wait(1).to({rotation:286.5},0).wait(1).to({rotation:287.8},0).wait(1).to({rotation:289},0).wait(1).to({rotation:290.2},0).wait(1).to({rotation:291.5},0).wait(1).to({rotation:292.7},0).wait(1).to({rotation:294},0).wait(1).to({rotation:295.2},0).wait(1).to({rotation:296.5},0).wait(1).to({rotation:297.7},0).wait(1).to({rotation:299},0).wait(1).to({rotation:300.2,y:2.4},0).wait(1).to({rotation:301.5},0).wait(1).to({rotation:302.7},0).wait(1).to({rotation:303.9},0).wait(1).to({rotation:305.2},0).wait(1).to({rotation:306.4},0).wait(1).to({rotation:307.7},0).wait(1).to({rotation:308.9},0).wait(1).to({rotation:310.2},0).wait(1).to({rotation:311.4},0).wait(1).to({rotation:312.7},0).wait(1).to({rotation:313.9},0).wait(1).to({rotation:315.2},0).wait(1).to({rotation:316.4},0).wait(1).to({rotation:317.6},0).wait(1).to({rotation:318.9},0).wait(1).to({rotation:320.1},0).wait(1).to({rotation:321.4},0).wait(1).to({rotation:322.6},0).wait(1).to({rotation:323.9},0).wait(1).to({rotation:325.1},0).wait(1).to({rotation:326.4},0).wait(1).to({rotation:327.6},0).wait(1).to({rotation:328.9},0).wait(1).to({rotation:330.1},0).wait(1).to({rotation:331.3},0).wait(1).to({rotation:332.6},0).wait(1).to({rotation:333.8},0).wait(1).to({rotation:335.1},0).wait(1).to({rotation:336.3},0).wait(1).to({rotation:337.6},0).wait(1).to({rotation:338.8},0).wait(1).to({rotation:340.1},0).wait(1).to({rotation:341.3},0).wait(1).to({rotation:342.6},0).wait(1).to({rotation:343.8},0).wait(1).to({rotation:345.1},0).wait(1).to({rotation:346.3},0).wait(1).to({rotation:347.5},0).wait(1).to({rotation:348.8},0).wait(1).to({rotation:350},0).wait(1).to({rotation:351.3},0).wait(1).to({rotation:352.5},0).wait(1).to({rotation:353.8},0).wait(1).to({rotation:355},0).wait(1).to({rotation:356.3},0).wait(1).to({rotation:357.5},0).wait(1).to({rotation:358.8},0).wait(1).to({rotation:360,x:-2.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-25.6,53,56);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2
	this.instance = new lib.Символ30_1();
	this.instance.parent = this;
	this.instance.setTransform(-180,80);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).to({x:-130,y:495.7},211).to({_off:true},1).wait(42));

	// Слой 1 - копия: 2
	this.instance_1 = new lib.Символ30_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(90,80);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},0).to({x:80,y:455.7},211).to({_off:true},20).wait(42));

	// Слой 1 - копия
	this.instance_2 = new lib.Символ30_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-110,50);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({x:-200,y:465.7},211).wait(1).to({x:-110,y:50},0).to({x:-200,y:465.7},65).to({_off:true},1).wait(9));

	// Слой 1
	this.instance_3 = new lib.Символ30_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:465.7},211).wait(1).to({y:50},0).to({y:465.7},93).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.2,26.3,72.4,47.6);


(lib.Символ25_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_2 = new lib.Символ21();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25_1, new cjs.Rectangle(-11.7,-11.9,23.5,23.8), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 21 - копия: 2
	this.instance = new lib.Символ25_1();
	this.instance.parent = this;
	this.instance.setTransform(104.4,-40.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55).to({_off:false},0).to({guide:{path:[104.3,-40.9,76.5,-241.1,51.1,-317.1]}},23).to({guide:{path:[51.1,-317.2,23.5,-399.6,-1.5,-336,-26.4,-272.5,-48.6,-62.9]}},23,cjs.Ease.get(-1)).to({_off:true},1).wait(22));

	// Символ 21 - копия: 2
	this.instance_1 = new lib.Символ25_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(104.4,-40.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({guide:{path:[104.3,-40.9,153.7,-271.4,193,-343.7]}},26).to({guide:{path:[193,-343.7,229.5,-410.7,257.3,-341.5,285.2,-272.3,304.4,-66.9]}},28).wait(1).to({x:104.4,y:-40.9},0).to({guide:{path:[104.3,-40.9,153.7,-271.4,193,-343.7]}},16).to({guide:{path:[193,-343.7,229.5,-410.7,257.3,-341.5,285.2,-272.3,304.4,-66.9]}},19).to({_off:true},1).wait(9));

	// Символ 21 - копия: 2
	this.instance_2 = new lib.Символ25_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(104.4,-40.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).to({guide:{path:[104.3,-40.9,76.5,-241.1,51.1,-317.1]}},23).to({guide:{path:[51.1,-317.2,23.5,-399.6,-1.5,-336,-26.4,-272.5,-48.6,-62.9]}},23).to({_off:true},21).wait(22));

	// Символ 21 - копия: 2
	this.instance_3 = new lib.Символ25_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(104.4,-40.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({guide:{path:[104.3,-40.9,153.7,-271.4,193,-343.7]}},26).to({guide:{path:[193,-343.7,229.5,-410.7,257.3,-341.5,285.2,-272.3,304.4,-66.9]}},28).wait(1).to({x:104.4,y:-40.9},0).to({guide:{path:[104.3,-40.9,153.7,-271.4,193,-343.7]}},26).to({guide:{path:[193,-343.7,229.5,-410.7,257.3,-341.5,285.2,-272.3,304.4,-66.9]}},28).wait(1));

	// Символ 21 - копия
	this.instance_4 = new lib.Символ25_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(104.4,-40.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({_off:false},0).to({guide:{path:[104.3,-40.9,76.5,-241.1,51.1,-317.1]}},23).to({guide:{path:[51.1,-317.2,23.5,-399.6,-1.5,-336,-26.4,-272.5,-48.6,-62.9]}},23).wait(1).to({x:104.4,y:-40.9},0).to({guide:{path:[104.3,-40.9,76.5,-241.1,51.1,-317.1]}},15).to({guide:{path:[51.1,-317.2,23.5,-399.6,-1.5,-336,-26.4,-272.5,-48.6,-62.9]}},16).to({_off:true},1).wait(15));

	// Символ 21
	this.instance_5 = new lib.Символ25_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(104.4,-40.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).to({guide:{path:[104.3,-40.9,153.7,-271.4,193,-343.7]}},26).to({guide:{path:[193,-343.7,229.5,-410.7,257.3,-341.5,285.2,-272.3,304.4,-66.9]}},28).to({_off:true},3).wait(47));

	// Символ 21 - копия
	this.instance_6 = new lib.Символ25_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(104.4,-40.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({guide:{path:[104.3,-40.9,76.5,-241.1,51.1,-317.1]}},23).to({guide:{path:[51.1,-317.2,23.5,-399.6,-1.5,-336,-26.4,-272.5,-48.6,-62.9]}},23).to({_off:true},1).wait(67));

	// Символ 21
	this.instance_7 = new lib.Символ25_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(104.4,-40.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({guide:{path:[104.3,-40.9,153.7,-271.4,193,-343.7]}},26).to({guide:{path:[193,-343.7,229.5,-410.7,257.3,-341.5,285.2,-272.3,304.4,-66.9]}},28).wait(1).to({x:104.4,y:-40.9},0).to({guide:{path:[104.3,-40.9,153.7,-271.4,193,-343.7]}},26).to({guide:{path:[193,-343.7,229.5,-410.7,257.3,-341.5,285.2,-272.3,304.4,-66.9]}},28).to({_off:true},1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(92.6,-52.8,23.5,23.8);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07,y:-4.3},6,cjs.Ease.get(-1)).to({scaleX:1.16,scaleY:1.16,y:-10},8,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07,y:-4.6},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-25.5,178,51.1);


(lib.Символ11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-21.8,11.4,1.458,1.458);

	this.instance_2 = new lib.Символ34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(32.8,-25.3,1.582,1.582,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(15));

	// Слой 1
	this.instance_3 = new lib.Символ20_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,-65.7,134.9,121.4);


(lib.Символ10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(-16.2,11.4,2.625,2.625,0,0,0,-0.1,-0.1);

	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(29,-21.1,2.625,2.625,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(30));

	// Слой 1
	this.instance_2 = new lib.Символ24_1();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.7,-88.1,183.7,179.5);


(lib.Символ9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-17.4,-12.4,2.197,2.197,68.2);

	this.instance_2 = new lib.Символ34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(27,21,2.197,2.197,68.2,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(40));

	// Слой 1
	this.instance_3 = new lib.Символ25();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.2,-93,201.5,187.1);


(lib.Символ8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-16.1,-16.2,2.178,2.178,75,0,0,-0.1,-0.1);

	this.instance_2 = new lib.Символ34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(27,23.6,2.178,2.178,75,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// Слой 1
	this.instance_3 = new lib.Символ27();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.7,-91.9,190.7,182.5);


(lib.Символ7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(-21.8,18.3,1.582,1.582,0,0,0,0,-0.1);

	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.7,-24.9,1.582,1.582,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(18));

	// Слой 1
	this.instance_2 = new lib.Символ30();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.1,-65.3,137.3,131.8);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(93.3,62.1,1,1,0,12.2,-167.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-14,-14.1,28,28.2), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.79,scaleY:0.79},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-25.5,178,51.1);


(lib.Символ21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ11_1();
	this.instance_1.parent = this;
	this.instance_1.filters = [new cjs.ColorFilter(0.93, 0.93, 0.93, 1, 17.85, 17.85, 17.85, 0)];
	this.instance_1.cache(-66,-68,139,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21_1, new cjs.Rectangle(-64.5,-65.7,134.9,121.4), null);


(lib.Символ16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ7_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,704.7);

	this.instance_2 = new lib.Символ7_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,616.7);

	this.instance_3 = new lib.Символ7_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,528.5);

	this.instance_4 = new lib.Символ7_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,440.5);

	this.instance_5 = new lib.Символ7_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,352.3);

	this.instance_6 = new lib.Символ7_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,264.3);

	this.instance_7 = new lib.Символ7_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,176.1);

	this.instance_8 = new lib.Символ7_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,88.1);

	this.instance_9 = new lib.Символ7_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,0.1);

	this.instance_10 = new lib.Символ7_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,-88.1);

	this.instance_11 = new lib.Символ7_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,-176.1);

	this.instance_12 = new lib.Символ7_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,-264.3);

	this.instance_13 = new lib.Символ7_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(0,-352.3);

	this.instance_14 = new lib.Символ7_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,-440.5);

	this.instance_15 = new lib.Символ7_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(0,-528.5);

	this.instance_16 = new lib.Символ7_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,-616.7);

	this.instance_17 = new lib.Символ7_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(0,-704.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16_1, new cjs.Rectangle(-68.1,-770,137.3,1541.2), null);


(lib.Символ15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ8_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,704.7);

	this.instance_2 = new lib.Символ8_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,616.7);

	this.instance_3 = new lib.Символ8_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,528.5);

	this.instance_4 = new lib.Символ8_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,440.5);

	this.instance_5 = new lib.Символ8_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,352.3);

	this.instance_6 = new lib.Символ8_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,264.3);

	this.instance_7 = new lib.Символ8_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,176.1);

	this.instance_8 = new lib.Символ8_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,88.1);

	this.instance_9 = new lib.Символ7_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0.1,0.1);

	this.instance_10 = new lib.Символ8_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,-88.1);

	this.instance_11 = new lib.Символ8_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,-176.1);

	this.instance_12 = new lib.Символ8_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,-264.3);

	this.instance_13 = new lib.Символ8_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(0,-352.3);

	this.instance_14 = new lib.Символ8_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,-440.5);

	this.instance_15 = new lib.Символ8_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(0,-528.5);

	this.instance_16 = new lib.Символ8_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,-616.7);

	this.instance_17 = new lib.Символ8_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(0,-704.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15_1, new cjs.Rectangle(-96.8,-796.6,190.6,1591.9), null);


(lib.Символ14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_3 = new lib.Символ9_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.1,704.7);

	this.instance_4 = new lib.Символ9_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.1,616.7);

	this.instance_5 = new lib.Символ9_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.1,528.5);

	this.instance_6 = new lib.Символ9_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-0.1,440.5);

	this.instance_7 = new lib.Символ9_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-0.1,352.3);

	this.instance_8 = new lib.Символ9_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-0.1,264.3);

	this.instance_9 = new lib.Символ9_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-0.1,176.1);

	this.instance_10 = new lib.Символ9_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-0.1,88.1);

	this.instance_11 = new lib.Символ7_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0.1,0.1);

	this.instance_12 = new lib.Символ9_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-0.1,-88.1);

	this.instance_13 = new lib.Символ9_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-0.1,-176.1);

	this.instance_14 = new lib.Символ9_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-0.1,-264.3);

	this.instance_15 = new lib.Символ9_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-0.1,-352.3);

	this.instance_16 = new lib.Символ9_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-0.1,-440.5);

	this.instance_17 = new lib.Символ9_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-0.1,-528.5);

	this.instance_18 = new lib.Символ9_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-0.1,-616.7);

	this.instance_19 = new lib.Символ9_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-0.1,-704.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14_1, new cjs.Rectangle(-103.3,-797.7,201.5,1596.5), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10_1();
	this.instance.parent = this;
	this.instance.setTransform(0,704.7);

	this.instance_1 = new lib.Символ10_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,616.7);

	this.instance_2 = new lib.Символ10_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,528.5);

	this.instance_3 = new lib.Символ10_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,440.5);

	this.instance_4 = new lib.Символ10_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,352.3);

	this.instance_5 = new lib.Символ10_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,264.3);

	this.instance_6 = new lib.Символ10_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,176.1);

	this.instance_7 = new lib.Символ10_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,88.1);

	this.instance_8 = new lib.Символ7_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-0.2,0);

	this.instance_9 = new lib.Символ10_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,-88.1);

	this.instance_10 = new lib.Символ10_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,-176.1);

	this.instance_11 = new lib.Символ10_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,-264.3);

	this.instance_12 = new lib.Символ10_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,-352.3);

	this.instance_13 = new lib.Символ10_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(0,-440.5);

	this.instance_14 = new lib.Символ10_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,-528.5);

	this.instance_15 = new lib.Символ10_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(0,-616.7);

	this.instance_16 = new lib.Символ10_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,-704.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-92.7,-792.8,183.7,1588.9), null);


(lib.Символ12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ21_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-704.7);

	this.instance_2 = new lib.Символ11_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,704.7);

	this.instance_3 = new lib.Символ11_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,616.7);

	this.instance_4 = new lib.Символ11_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,528.5);

	this.instance_5 = new lib.Символ11_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,440.5);

	this.instance_6 = new lib.Символ11_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,352.3);

	this.instance_7 = new lib.Символ11_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,264.3);

	this.instance_8 = new lib.Символ11_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,176.1);

	this.instance_9 = new lib.Символ11_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,88.1);

	this.instance_10 = new lib.Символ7_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,0.1);

	this.instance_11 = new lib.Символ11_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,-88.1);

	this.instance_12 = new lib.Символ11_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,-176.1);

	this.instance_13 = new lib.Символ11_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(0,-264.3);

	this.instance_14 = new lib.Символ11_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,-352.3);

	this.instance_15 = new lib.Символ11_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(0,-440.5);

	this.instance_16 = new lib.Символ11_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,-528.5);

	this.instance_17 = new lib.Символ11_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(0,-616.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12_1, new cjs.Rectangle(-68.1,-770.4,138.5,1530.8), null);


(lib.Символ32_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance_1 = new lib.Символ37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-67.1,592.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).to({alpha:1},5).to({alpha:0},6).wait(1).to({alpha:1},5).to({alpha:0},6).wait(1).to({alpha:1},5).to({alpha:0},6).wait(1).to({alpha:1},5).to({alpha:0},6).wait(1));

	// Символ 16
	this.instance_2 = new lib.Символ16_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-250,595.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({y:539.6},5).to({y:1171.1},9).to({y:377},1).to({y:1171.1},8).wait(1).to({y:377},0).to({y:632.7},8).to({y:595.7},2).wait(51));

	// Символ 15
	this.instance_3 = new lib.Символ15_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-161.9,595.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({y:539.6},5).to({y:1171.1},9).to({y:377},1).to({y:1171.1},7).wait(1).to({y:377},0).to({y:632.7},10).to({y:595.7},2).wait(54));

	// Символ 14
	this.instance_4 = new lib.Символ14_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-73.9,595.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({y:539.6},5).to({y:1171.1},9).to({y:377},1).to({y:1171.1},8).wait(1).to({y:377},0).to({y:632.7},9).to({y:595.7},2).wait(58));

	// Символ 13
	this.instance_5 = new lib.Символ13();
	this.instance_5.parent = this;
	this.instance_5.setTransform(22.7,595.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({y:539.7},5).to({y:1171.2},9).to({y:377.1},1).to({y:1171.2},8).wait(1).to({y:377.1},0).to({y:632.8},8).to({y:595.8},2).wait(63));

	// Символ 12
	this.instance_6 = new lib.Символ12_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(119,595.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({y:539.6},5).to({y:1171.1},8).to({y:377},1).to({y:1171.1},8).wait(1).to({y:377},0).to({y:632.7},7).to({y:595.7},2).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-318.1,-202,507.5,1596.5);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(2.6,43.4,1,1,0,0,0,39.6,24);

	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-65,19.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-51,-33.5,102.1,67.1), null);


(lib.Символ27_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(233.9,-467.7,1.285,1.285);

	this.instance_2 = new lib.Символ31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(130.1,-487.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ28();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-4.4,23.9,1,1,0,0,0,-4.4,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27_1, new cjs.Rectangle(-51,-461.4,331.4,495), null);


(lib.Символ23 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ27_1();
	this.instance.parent = this;
	this.instance.setTransform(60.7,4.7,1,1,0,0,0,-4.4,23.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9,cjs.Ease.get(1)).wait(1).to({alpha:0},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14,-480.7,331.5,495);


// stage content:
(lib.casx = function(mode,startPosition,loop) {
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
		    _this.chipsss.gotoAndPlay(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;	
		  function fl_MouseOutHandler_2()
		{
		    _this.chipsss.gotoAndPlay(11);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(337,194);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(152,125.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(139,243.5);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// casinoxlogo.png
	this.instance_3 = new lib.Символ2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(139,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 2
	this.chipsss = new lib.Символ23();
	this.chipsss.parent = this;
	this.chipsss.setTransform(308.8,384);

	this.timeline.addTween(cjs.Tween.get(this.chipsss).wait(1));

	// Слой 3
	this.instance_4 = new lib.Символ32_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(463.5,-342.5,0.646,0.646);
	this.instance_4.alpha = 0.441;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Символ 1
	this.instance_5 = new lib.Символ1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(97.1,-323,857.1,1031.3);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1489652219522", id:"bg"},
		{src:"images/btn.png?1489652219522", id:"btn"},
		{src:"images/casinoxlogo.png?1489652219522", id:"casinoxlogo"},
		{src:"images/chip.png?1489652219522", id:"chip"},
		{src:"images/dol.png?1489652219522", id:"dol"},
		{src:"images/man1.png?1489652219522", id:"man1"},
		{src:"images/man2.png?1489652219522", id:"man2"},
		{src:"images/man3.png?1489652219522", id:"man3"},
		{src:"images/xc22as_16_03.png?1489652219522", id:"xc22as_16_03"},
		{src:"images/xcas_09.png?1489652219522", id:"xcas_09"},
		{src:"images/xcas_0_02.png?1489652219522", id:"xcas_0_02"},
		{src:"images/xcas_0_04.png?1489652219522", id:"xcas_0_04"},
		{src:"images/xcas_0_06.png?1489652219522", id:"xcas_0_06"},
		{src:"images/xcas_0_08.png?1489652219522", id:"xcas_0_08"},
		{src:"images/xcas_0_10.png?1489652219522", id:"xcas_0_10"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;