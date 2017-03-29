(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.backgrounddarkblue = function() {
	this.initialize(img.backgrounddarkblue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,400);


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


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.backgrounddarkblue();
	this.instance.parent = this;
	this.instance.setTransform(7,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-16,700,400);


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
	this.instance_1.setTransform(191,191.2,1,1,96.4,0,0,190.7,190.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({regX:190.8,rotation:152.4,x:190.9},5,cjs.Ease.get(1)).wait(25).to({_off:true},1).wait(30).to({_off:false,regX:191,regY:191,rotation:220.5,x:191.1,y:191},0).to({rotation:270.2},5,cjs.Ease.get(1)).wait(25).to({rotation:270.2},0).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(191,191,1,1,-90,0,0,191,191);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:-88.9},0).wait(1).to({rotation:-85.4,x:191.1},0).wait(1).to({rotation:-79.7,x:191},0).wait(1).to({rotation:-71.6,x:191.1},0).wait(1).to({rotation:-61.3},0).wait(1).to({rotation:-48.7,x:191},0).wait(1).to({rotation:-33.7},0).wait(1).to({rotation:-16.6},0).wait(1).to({rotation:3,y:191.1},0).wait(1).to({rotation:24.8,y:191},0).wait(1).to({rotation:48.9,y:191.1},0).wait(1).to({rotation:75.3},0).wait(1).to({rotation:104,y:191},0).wait(1).to({rotation:135},0).wait(1).to({rotation:168.3},0).wait(1).to({rotation:203.9},0).wait(1).to({rotation:241.7},0).wait(1).to({rotation:281.9,x:191.1},0).wait(1).to({rotation:324.4,x:191},0).wait(1).to({rotation:369.2},0).wait(1).to({rotation:416.3},0).wait(1).to({rotation:465.6},0).wait(1).to({rotation:517.2},0).wait(1).to({rotation:571.2},0).wait(1).to({rotation:627.5},0).wait(1).to({rotation:686,x:191.1},0).wait(1).to({rotation:746.8,x:191},0).wait(1).to({rotation:810},0).wait(1).to({rotation:692},0).to({_off:true},1).wait(30).to({_off:false,regX:189.8,regY:189.9,scaleX:1,scaleY:1,rotation:512.4,x:192.6,y:191.1},0).wait(1).to({regX:191,regY:191,scaleX:1,scaleY:1,rotation:513.1,x:191,y:190.6},0).wait(1).to({rotation:515.3,y:190.5},0).wait(1).to({rotation:518.8,y:190.4},0).wait(1).to({rotation:523.8,x:191.1,y:190.3},0).wait(1).to({rotation:530.2,y:190.2},0).wait(1).to({rotation:538,x:191.3,y:190},0).wait(1).to({rotation:547.2,x:191.5,y:189.8},0).wait(1).to({rotation:557.8,x:191.7,y:189.6},0).wait(1).to({rotation:569.8,x:192,y:189.5},0).wait(1).to({rotation:583.3,x:192.4,y:189.4},0).wait(1).to({rotation:598.2,x:192.9},0).wait(1).to({rotation:614.5,x:193.3,y:189.5},0).wait(1).to({rotation:632.2,x:193.8,y:189.8},0).wait(1).to({rotation:651.3,x:194.1,y:190.3},0).wait(1).to({rotation:671.9,x:194.3,y:190.9},0).wait(1).to({rotation:693.9,x:194.2,y:191.5},0).wait(1).to({rotation:717.2,x:193.9,y:192},0).wait(1).to({rotation:742,x:193.3,y:192.6},0).wait(1).to({rotation:768.3,x:192.6,y:192.7},0).wait(1).to({rotation:795.9,x:191.8,y:192.6},0).wait(1).to({rotation:825,x:191.2,y:192},0).wait(1).to({rotation:855.4,x:191,y:191.1},0).wait(1).to({rotation:887.3,x:191.1,y:190.2},0).wait(1).to({rotation:920.6,x:191.8,y:189.5},0).wait(1).to({rotation:955.3,x:192.8,y:189.4},0).wait(1).to({rotation:991.5,x:193.8,y:189.8},0).wait(1).to({rotation:1029,x:194.3,y:190.7},0).wait(1).to({rotation:1068,x:194.1,y:191.9},0).wait(1).to({rotation:1108.4,x:193.1,y:192.7},0).wait(1).to({regX:190.5,regY:190.6,rotation:1259.7,x:190.9,y:191.1},0).to({_off:true},1).wait(30));

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

	// baraban
	this.instance_2 = new lib.Символ1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(510.2,148.4,1.109,1.109,0,0,0,191,191);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// text
	this.instance_3 = new lib.Символ17();
	this.instance_3.parent = this;
	this.instance_3.setTransform(136.8,129.8,1,1,0,0,0,115.8,59.8);

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
		{src:"images/backgrounddarkblue.jpg?1490777788199", id:"backgrounddarkblue"},
		{src:"images/baraban.png?1490777788199", id:"baraban"},
		{src:"images/casinox.png?1490777788199", id:"casinox"},
		{src:"images/golden.png?1490777788199", id:"golden"},
		{src:"images/strelka.png?1490777788199", id:"strelka"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;