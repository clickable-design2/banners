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
p.nominalBounds = new cjs.Rectangle(0,0,197,363);// helper functions:

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


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(0,-135.2,1,1,0,0,0,0,-135.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,rotation:20,y:-135.3},31,cjs.Ease.get(0.98)).to({regX:0,rotation:0,y:-135.2},36,cjs.Ease.get(0.98)).wait(1));

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


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(-180,80);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).to({x:-130,y:495.7},211).to({_off:true},1).wait(42));

	// Слой 1 - копия: 2
	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(90,80);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},0).to({x:80,y:455.7},211).to({_off:true},20).wait(42));

	// Слой 1 - копия
	this.instance_2 = new lib.Символ30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-110,50);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({x:-200,y:465.7},211).wait(1).to({x:-110,y:50},0).to({x:-200,y:465.7},65).to({_off:true},1).wait(9));

	// Слой 1
	this.instance_3 = new lib.Символ30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:465.7},211).wait(1).to({y:50},0).to({y:465.7},93).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.2,26.3,72.4,47.6);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-11.7,-11.9,23.5,23.8), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 21 - копия: 2
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(104.4,-40.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55).to({_off:false},0).to({guide:{path:[104.3,-40.9,76.5,-241.1,51.1,-317.1]}},23).to({guide:{path:[51.1,-317.2,23.5,-399.6,-1.5,-336,-26.4,-272.5,-48.6,-62.9]}},23,cjs.Ease.get(-1)).to({_off:true},1).wait(22));

	// Символ 21 - копия: 2
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(104.4,-40.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({guide:{path:[104.3,-40.9,153.7,-271.4,193,-343.7]}},26).to({guide:{path:[193,-343.7,229.5,-410.7,257.3,-341.5,285.2,-272.3,304.4,-66.9]}},28).wait(1).to({x:104.4,y:-40.9},0).to({guide:{path:[104.3,-40.9,153.7,-271.4,193,-343.7]}},16).to({guide:{path:[193,-343.7,229.5,-410.7,257.3,-341.5,285.2,-272.3,304.4,-66.9]}},19).to({_off:true},1).wait(9));

	// Символ 21 - копия: 2
	this.instance_2 = new lib.Символ25();
	this.instance_2.parent = this;
	this.instance_2.setTransform(104.4,-40.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).to({guide:{path:[104.3,-40.9,76.5,-241.1,51.1,-317.1]}},23).to({guide:{path:[51.1,-317.2,23.5,-399.6,-1.5,-336,-26.4,-272.5,-48.6,-62.9]}},23).to({_off:true},21).wait(22));

	// Символ 21 - копия: 2
	this.instance_3 = new lib.Символ25();
	this.instance_3.parent = this;
	this.instance_3.setTransform(104.4,-40.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({guide:{path:[104.3,-40.9,153.7,-271.4,193,-343.7]}},26).to({guide:{path:[193,-343.7,229.5,-410.7,257.3,-341.5,285.2,-272.3,304.4,-66.9]}},28).wait(1).to({x:104.4,y:-40.9},0).to({guide:{path:[104.3,-40.9,153.7,-271.4,193,-343.7]}},26).to({guide:{path:[193,-343.7,229.5,-410.7,257.3,-341.5,285.2,-272.3,304.4,-66.9]}},28).wait(1));

	// Символ 21 - копия
	this.instance_4 = new lib.Символ25();
	this.instance_4.parent = this;
	this.instance_4.setTransform(104.4,-40.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({_off:false},0).to({guide:{path:[104.3,-40.9,76.5,-241.1,51.1,-317.1]}},23).to({guide:{path:[51.1,-317.2,23.5,-399.6,-1.5,-336,-26.4,-272.5,-48.6,-62.9]}},23).wait(1).to({x:104.4,y:-40.9},0).to({guide:{path:[104.3,-40.9,76.5,-241.1,51.1,-317.1]}},15).to({guide:{path:[51.1,-317.2,23.5,-399.6,-1.5,-336,-26.4,-272.5,-48.6,-62.9]}},16).to({_off:true},1).wait(15));

	// Символ 21
	this.instance_5 = new lib.Символ25();
	this.instance_5.parent = this;
	this.instance_5.setTransform(104.4,-40.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).to({guide:{path:[104.3,-40.9,153.7,-271.4,193,-343.7]}},26).to({guide:{path:[193,-343.7,229.5,-410.7,257.3,-341.5,285.2,-272.3,304.4,-66.9]}},28).to({_off:true},3).wait(47));

	// Символ 21 - копия
	this.instance_6 = new lib.Символ25();
	this.instance_6.parent = this;
	this.instance_6.setTransform(104.4,-40.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({guide:{path:[104.3,-40.9,76.5,-241.1,51.1,-317.1]}},23).to({guide:{path:[51.1,-317.2,23.5,-399.6,-1.5,-336,-26.4,-272.5,-48.6,-62.9]}},23).to({_off:true},1).wait(67));

	// Символ 21
	this.instance_7 = new lib.Символ25();
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


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(233.9,-467.7,1.285,1.285);

	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(130.1,-487.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ28();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-4.4,23.9,1,1,0,0,0,-4.4,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-51,-461.4,331.4,495), null);


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
	this.instance = new lib.Символ27();
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

	// Символ 1
	this.instance_4 = new lib.Символ1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(97.1,53.3,857.1,516.7);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1489508282822", id:"bg"},
		{src:"images/btn.png?1489508282822", id:"btn"},
		{src:"images/casinoxlogo.png?1489508282822", id:"casinoxlogo"},
		{src:"images/chip.png?1489508282822", id:"chip"},
		{src:"images/dol.png?1489508282822", id:"dol"},
		{src:"images/man1.png?1489508282822", id:"man1"},
		{src:"images/man2.png?1489508282822", id:"man2"},
		{src:"images/man3.png?1489508282822", id:"man3"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;