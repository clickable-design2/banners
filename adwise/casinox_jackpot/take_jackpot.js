(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.baraban = function() {
	this.initialize(img.baraban);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,382,382);


(lib.casinox = function() {
	this.initialize(img.casinox);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,409,86);


(lib.golden = function() {
	this.initialize(img.golden);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,128);


(lib.preview = function() {
	this.initialize(img.preview);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);


(lib.strelka = function() {
	this.initialize(img.strelka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,41);// helper functions:

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


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181818").s().p("EgwbAaQMAAAg0fMBg3AAAMAAAA0fg");
	this.shape.setTransform(310,168);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,620,336), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF3300","#FF9900"],[0.396,1],138.5,-6.9,0,138.5,-6.9,201.8).s().p("AmLP6QhIhvhijrMgr7ANcMAoggRcQBthhgQiyI5bj9IY1nBQCDAVhsifI31sAIa8CnQEXAcDNjNQJGpIM6AAQM5AAJHJIQJIJHAAM5QAAM5pIJHQpHJIs5AAQs6AApGpII4NLTg");
	this.shape.setTransform(337.7,206.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,675.4,412.4), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.golden();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.934,0.934);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,231.7,119.6), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANxA+QgkAAAAgkIAAgzQAAgkAkAAIAwAAQAkAAAAAkIAAAzQAAAkgkAAgANlgZIAAAzQAAAMAMAAIAwAAQAMAAAAgMIAAgzQAAgMgMAAIgwAAQgMAAAAAMgAFhA+QgkAAAAgkIAAgzQAAgkAkAAIAwAAQAkAAAAAkIAAAzQAAAkgkAAgAFVgZIAAAzQAAAMAMAAIAwAAQAMAAAAgMIAAgzQAAgMgMAAIgwAAQgMAAAAAMgAkMA+QgkAAAAgkIAAgzQAAgkAkAAIAwAAQAkAAAAAkIAAAzQAAAkgkAAgAkYgZIAAAzQAAAMAMAAIAwAAQAMAAAAgMIAAgzQAAgMgMAAIgwAAQgMAAAAAMgAugA+QgkAAAAgkIAAgzQAAgkAkAAIAwAAQAkAAAAAkIAAAzQAAAkgkAAgAusgZIAAAzQAAAMAMAAIAwAAQAMAAAAgMIAAgzQAAgMgMAAIgwAAQgMAAAAAMgALtA8QgkAAAAgkIAAgvQAAgkAkAAIBUAAIAAAYIhUAAQgMAAAAAMIAAAvQAAAMAMAAIBUAAIAAAYgAJFA8IAAh3IB4AAIAAAYIhgAAIAAAYIBIAAIAAAXIhIAAIAAAYIBgAAIAAAYgAIhA8IAAhfIgkAAQgJAAgDAMIgYBTIgYAAQAWhHACgMQAKgkAaAAIA8AAIAAB3gAEZA8IgngwIgbAAIAAAwIgYAAIAAh3IAYAAIAAAwIAbAAIAngwIAeAAIgwA7IAwA8gAA3A8IAAhSIhHBSIgYAAIAAh3IAYAAIAABSIBHhSIAYAAIAAB3gAisA8IAAh3IBUAAQAkAAAAAkQAAARgHAGQADADACAHQACAGAAAIQAAAkgkAAgAiUAkIA8AAQAMAAAAgMQAAgMgMAAIg8AAgAiUgLIA8AAQAMAAAAgMQAAgMgMAAIg8AAgAlUA8IAAgwIhIAAIAAAwIgYAAIAAh3IAYAAIAAAwIBIAAIAAgwIAYAAIAAB3gAnYA8IAAgYIhIAAIAAAYIgYAAIAAhVQAAgkAkAAIAwAAQAkAAAAAkIAABVgAoggZIAAAlIBIAAIAAglQAAgMgMAAIgwAAQgMAAAAAMgAqMA8IAAhfIgwAAIAAgYIB4AAIAAAYIgwAAIAABfgAscA8QgkAAAAgkIAAgvQAAgkAkAAIBUAAIAAAYIhUAAQgMAAAAAMIAAAvQAAAMAMAAIBUAAIAAAYg");
	this.shape.setTransform(112.2,28.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FB0000","#FF0066"],[0.396,1],0.4,36.9,0.4,-32).s().p("AwqEYQg0AAAAgpIAAncQAAgqA0gBMAhUAAAQA1ABAAAqIAAHcQAAApg1AAg");
	this.shape_1.setTransform(111.9,28.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,223.8,56.1), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.strelka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,40,41), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.baraban();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,382,382), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.preview();
	this.instance.parent = this;
	this.instance.setTransform(0,350.2,0.648,0.648,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,622.6,350.2), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(311.4,175.1,1,1,180,0,0,311.2,175.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,622.6,350.2), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(337.7,206.2,1,1,0,0,0,337.7,206.2);
	this.instance.alpha = 0.199;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(65, 65, 1)];
	this.instance.cache(-2,-2,679,416);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-33,-33,745,482), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(115.8,59.8,1,1,0,0,0,115.8,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,scaleY:1.04,x:115.9},9,cjs.Ease.get(-1)).to({scaleX:1.09,scaleY:1.09,y:59.9},10,cjs.Ease.get(1)).to({scaleX:1.04,scaleY:1.04,y:59.8},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:115.8},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,231.7,119.6);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(215.9,166.5,1,1,0,0,0,111.9,28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#950000","#FF0066"],[0.396,1],1.6,32.1,1.6,-28.7).s().p("AwqEBQg0AAAAg1IAAmXQAAg1A0AAMAhVAAAQA0AAAAA1IAAGXQAAA1g0AAg");
	this.shape.setTransform(215.9,171.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(104,138.4,223.9,58.5), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(111.9,27.3,1,1,0,0,0,111.9,28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#950000","#FF0066"],[0.396,1],1.6,32.1,1.6,-28.7).s().p("AwqEBQg0AAAAg1IAAmXQAAg1A0AAMAhVAAAQA0AAAAA1IAAGXQAAA1g0AAg");
	this.shape.setTransform(111.9,35.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,-0.8,223.9,61.8), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(310,168,1,1,0,0,0,310,168);
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// Слой 3
	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(311.2,175.6,1,1,0,0,0,311.2,175.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.469},9,cjs.Ease.get(-1)).to({alpha:1},10,cjs.Ease.get(1)).to({alpha:0.5},10,cjs.Ease.get(-1)).to({alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(311.2,175.1,1,1,0,0,0,311.2,175.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,622.6,350.7);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(17,190.5,1,1,0,0,0,20,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({x:23},5).to({x:16},5).to({x:23},5).to({x:16},5).to({x:23},5).to({x:17},5).wait(31).to({x:23},5).to({x:16},5).to({x:23},5).to({x:16},5).to({x:23},5).to({x:17},5).wait(1));

	// Слой 5
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(191,191.1,1,1,-27.6,0,0,190.8,190.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).wait(30).to({_off:true},1).wait(30).to({_off:false,regX:191,regY:191,rotation:90,y:191},0).wait(31));

	// Слой 1
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(191,191,1,1,90,0,0,191,191);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:172.8},0).wait(1).to({rotation:255.7},0).wait(1).to({rotation:338.5,x:191.1},0).wait(1).to({rotation:421.3,x:191,y:191.1},0).wait(1).to({rotation:504.1,y:191},0).wait(1).to({rotation:587},0).wait(1).to({rotation:669.8},0).wait(1).to({rotation:752.6},0).wait(1).to({rotation:835.4},0).wait(1).to({rotation:918.3},0).wait(1).to({rotation:1001.1},0).wait(1).to({rotation:1083.9,y:191.1},0).wait(1).to({rotation:1166.8},0).wait(1).to({rotation:1249.6,y:191},0).wait(1).to({rotation:1332.4},0).wait(1).to({rotation:1415.2,x:191.1},0).wait(1).to({rotation:1498.1,x:191},0).wait(1).to({rotation:1580.9},0).wait(1).to({rotation:1663.7},0).wait(1).to({rotation:1746.6,x:191.1},0).wait(1).to({rotation:1829.4,x:191,y:191.1},0).wait(1).to({rotation:1912.2,y:191},0).wait(1).to({rotation:1995},0).wait(1).to({rotation:2077.9},0).wait(1).to({rotation:2160.7,y:191.1},0).wait(1).to({rotation:2243.5},0).wait(1).to({rotation:2326.3,y:191},0).wait(1).to({rotation:2409.2},0).wait(1).to({rotation:2492},0).to({_off:true},1).wait(30).to({_off:false,regX:190.7,regY:190.8,scaleX:1,scaleY:1,rotation:2492.4,y:191.1},0).wait(1).to({regX:191,regY:191,scaleX:1,scaleY:1,rotation:2566.9,y:191.5},0).wait(1).to({rotation:2641.4,x:190.6,y:191.1},0).wait(1).to({rotation:2715.9,x:190.8,y:190.7},0).wait(1).to({rotation:2790.3,x:191.3},0).wait(1).to({rotation:2864.8,x:191.4,y:191.2},0).wait(1).to({rotation:2939.3,x:190.9,y:191.5},0).wait(1).to({rotation:3013.8,x:190.6,y:191.1},0).wait(1).to({rotation:3088.3,x:190.9,y:190.7},0).wait(1).to({rotation:3162.8,x:191.4,y:190.8},0).wait(1).to({rotation:3237.2,x:191.3,y:191.3},0).wait(1).to({rotation:3311.7,x:190.9,y:191.4},0).wait(1).to({rotation:3386.2,x:190.6,y:191},0).wait(1).to({rotation:3460.7,x:190.9,y:190.7},0).wait(1).to({rotation:3535.2,x:191.4,y:190.9},0).wait(1).to({rotation:3609.6,x:191.3,y:191.4},0).wait(1).to({rotation:3684.1,x:190.8},0).wait(1).to({rotation:3758.6,x:190.6,y:190.9},0).wait(1).to({rotation:3833.1,x:191,y:190.6},0).wait(1).to({rotation:3907.6,x:191.4,y:191},0).wait(1).to({rotation:3982.1,x:191.2,y:191.4},0).wait(1).to({rotation:4056.5,x:190.8,y:191.3},0).wait(1).to({rotation:4131,x:190.7,y:190.9},0).wait(1).to({rotation:4205.5,x:191.1,y:190.7},0).wait(1).to({rotation:4280,x:191.5,y:191},0).wait(1).to({rotation:4354.5,x:191.1,y:191.5},0).wait(1).to({rotation:4429,x:190.7,y:191.3},0).wait(1).to({rotation:4503.4,y:190.8},0).wait(1).to({rotation:4577.9,x:191.2,y:190.7},0).wait(1).to({rotation:4652.4,x:191.4,y:191.1},0).wait(1).to({rotation:4770,x:191,y:191},0).to({_off:true},1).wait(30));

	// Слой 6
	this.instance_3 = new lib.Символ19();
	this.instance_3.parent = this;
	this.instance_3.setTransform(22.4,193.2,1,1,0,0,0,337.7,206.2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({alpha:0.5},5,cjs.Ease.get(-1)).to({alpha:1},5,cjs.Ease.get(1)).to({alpha:0},5).to({alpha:0.5},5,cjs.Ease.get(-1)).to({alpha:1},5,cjs.Ease.get(1)).to({alpha:0},5).wait(31).to({alpha:0.5},5,cjs.Ease.get(-1)).to({alpha:1},5,cjs.Ease.get(1)).to({alpha:0},5).to({alpha:0.5},5,cjs.Ease.get(-1)).to({alpha:1},5,cjs.Ease.get(1)).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-348.3,-46,745,482);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// baraban.png
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(191,191,1,1,0,0,0,191,191);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-348.3,-46,745,482), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(112,28.1,1,1,0,0,0,111.9,28.1);

	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-84.6,-109.8,1,1,0,0,0,19.7,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.8,223.9,61.8);


// stage content:
(lib.take_jackpot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(136.8,251.1,1,1,0,0,0,111.9,30.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logo
	this.instance_1 = new lib.casinox();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,1,0.596,0.596);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// text
	this.instance_2 = new lib.Символ17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(136.8,129.8,1,1,0,0,0,115.8,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// baraban
	this.instance_3 = new lib.Символ1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(510.2,148.4,1.109,1.109,0,0,0,191,191);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.instance_4 = new lib.Символ4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(301.2,159.1,1,1,0,0,0,311.2,175.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(215.6,39.1,818,526);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/baraban.png?1490772646383", id:"baraban"},
		{src:"images/casinox.png?1490772646383", id:"casinox"},
		{src:"images/golden.png?1490772646383", id:"golden"},
		{src:"images/preview.jpg?1490772646383", id:"preview"},
		{src:"images/strelka.png?1490772646383", id:"strelka"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;