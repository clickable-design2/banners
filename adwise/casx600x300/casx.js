(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"casx_atlas_", frames: [[0,0,600,300],[348,365,178,51],[348,302,178,20],[202,302,144,260],[0,302,200,268],[602,0,197,363]]}
];


// symbols:



(lib.bg = function() {
	this.spriteSheet = ss["casx_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.btn = function() {
	this.spriteSheet = ss["casx_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.casinoxlogo = function() {
	this.spriteSheet = ss["casx_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.man1 = function() {
	this.spriteSheet = ss["casx_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.man2 = function() {
	this.spriteSheet = ss["casx_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.man3 = function() {
	this.spriteSheet = ss["casx_atlas_"];
	this.gotoAndStop(5);
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
	this.shape.graphics.f("#FFFFFF").s().p("AEWBZIAAhSQAAgIACgKIgCAAQgDAKgEAHIgvBTIgeAAIAAiJIAdAAIAABQIgCATIABAAQADgHAFgLIAvhRIAfAAIAACJgACUBZIgJgkIgwAAIgKAkIggAAIAoiBQACgDADgDQADgCADAAIAdAAQAEAAADACQACACABAEIAoCBgACDAeIgNg2IgGAAIgPA2IAiAAgAg6BZIAAiJQAdgBAYAAQAbAAALAJQAFAFADAIQACAKAAANQAAAMgCAIQgDAKgFAFQgKAJgZAAQgNAAgNgBIAAAygAgcgZIAAApIAWAAQALABADgFQAFgEAAgMQAAgNgFgFIgFgDIgJgBgAilBZIAAhsQAAgGACgGQACgFAEgEQAIgIANAAQArAAASACIgBAXIgwAAQgGgBgCADQgDADAAAFIAABmgAjeBZIAAhSQAAgIACgKIgCAAQgDAKgFAHIguBTIgfAAIAAiJIAeAAIAABQIgCATIABAAQACgHAGgLIAvhRIAeAAIAACJgADtg8QgGgCgEgFQgKgJACgMIAUAAQgCAQAOAAQAIAAADgEQADgFAAgHIATAAQACAMgJAJQgFAFgGACQgGACgJAAQgHAAgHgCg");

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


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07,y:-4.3},6,cjs.Ease.get(-1)).to({scaleX:1.16,scaleY:1.16,y:-10},8,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07,y:-4.6},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-25.5,178,51.1);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.79,scaleY:0.79},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-25.5,178,51.1);


// stage content:
(lib.casx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
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

	// Символ 1
	this.instance_4 = new lib.Символ1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(97.1,150,809,420);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/casx_atlas_.png?1489506057983", id:"casx_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;