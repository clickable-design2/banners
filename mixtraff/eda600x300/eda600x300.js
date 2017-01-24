(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bonus = function() {
	this.initialize(img.bonus);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,95);


(lib._catch = function() {
	this.initialize(img._catch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,57);


(lib.dama = function() {
	this.initialize(img.dama);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,354,300);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.lapa_03 = function() {
	this.initialize(img.lapa_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,54);


(lib.lapa_06 = function() {
	this.initialize(img.lapa_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,46);


(lib.lapa_09 = function() {
	this.initialize(img.lapa_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,50);


(lib.lapa_12 = function() {
	this.initialize(img.lapa_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,26);


(lib.lapa_18 = function() {
	this.initialize(img.lapa_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,118);


(lib.lapa_21 = function() {
	this.initialize(img.lapa_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,39);


(lib.pizza = function() {
	this.initialize(img.pizza);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,343,143);


(lib.pizza_w = function() {
	this.initialize(img.pizza_w);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,54);// helper functions:

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


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lapa_03();
	this.instance.parent = this;
	this.instance.setTransform(-15,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-15,-27,30,54), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lapa_06();
	this.instance.parent = this;
	this.instance.setTransform(-16,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-16,-23,32,46), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lapa_09();
	this.instance.parent = this;
	this.instance.setTransform(-19.5,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-19.5,-25,39,50), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lapa_12();
	this.instance.parent = this;
	this.instance.setTransform(-9.5,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-9.5,-13,19,26), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lapa_21();
	this.instance.parent = this;
	this.instance.setTransform(-11.5,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-11.5,-19.5,23,39), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lapa_18();
	this.instance.parent = this;
	this.instance.setTransform(-49,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-49,-59,98,118), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AAAiKIAAhwIAAh/AAAF6IAAh6IAAhkACLAAIBzAAIB8AAAl5AAIB9AAIBhAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(5.2,1,1).p("AD9AAQAABphLBKQhJBKhpAAIAAAAQhoAAhKhKQhKhKAAhpQAAAAAAgCQABhmBJhKQBKhKBoAAIAAAAQBpAABJBKQBKBKABBmQAAACAAAAg");
	this.shape_1.setTransform(0.1,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-38.7,-38.7,77.5,77.5), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AA+AAQAAAagTARQgSATgZAAQgZAAgSgTQgSgRAAgaQAAgYASgTQASgSAZAAQAZAAASASQATATAAAYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-7.2,-7.2,14.4,14.4), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pizza();
	this.instance.parent = this;
	this.instance.setTransform(-142.3,-59.3,0.83,0.83);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-142.3,-59.3,284.7,118.7), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A6Fa5MAAAg1xMA0LAAAMAAAA1xg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A40Z9MAAAgz5MAxpAAAMAAAAz5g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dama();
	this.instance.parent = this;
	this.instance.setTransform(-167.6,-142,0.947,0.947);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-167.6,-142,335.3,284.2), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Eg0LAaBMAAAg0BMBoXAAAMAAAA0Bg");
	this.shape.setTransform(334,166.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,668,332.9), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.6)","rgba(0,0,0,0)"],[0,1],-90.5,0,90.5,0).s().p("AuIXXMAAAgutIcRAAMAAAAutg");
	this.shape.setTransform(90.5,149.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,181.1,299), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fon();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,600,300), null);


(lib.pizza_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizza_w();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AznGgIiAs/MApjAAAIBsM/g");
	this.shape.setTransform(99,23);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.pizza_1, new cjs.Rectangle(-39.4,-18.6,276.9,83.2), null);


(lib._catch_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._catch();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A1nGgIBss/MApjAAAIiAM/g");
	this.shape.setTransform(115,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._catch_1, new cjs.Rectangle(-23.4,-8.1,276.9,83.2), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(-11.8,18.1,1,1,0,0,0,-11.8,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-11.6,scaleY:0.71,rotation:18.2,x:-11.6,y:18.2},14).to({regX:-11.8,scaleY:1,rotation:0,x:-11.8,y:18.1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-27,30,54);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(-10.6,20.1,1,1,0,0,0,-10.6,20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.85,rotation:5.5,x:-10.9,y:20.7},7,cjs.Ease.get(-1)).to({regX:-10.5,regY:20.2,scaleY:0.71,rotation:11.2,x:-11,y:21},7,cjs.Ease.get(1)).to({regX:-10.6,scaleY:0.84,rotation:5.8,x:-10.9,y:20.6},7,cjs.Ease.get(-1)).to({regY:20.1,scaleY:1,rotation:0,x:-10.6,y:20.1},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-23,32,46);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,skewY:7.5,x:-4.8,y:6.9},7,cjs.Ease.get(-1)).to({scaleX:1.04,skewY:15.1,x:-9.7,y:13.7},7,cjs.Ease.get(1)).to({scaleX:1.02,skewY:8,x:-5.2,y:7.3},7,cjs.Ease.get(-1)).to({scaleX:1,skewY:0,x:0,y:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-25,39,50);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(-5,12,1,1,0,0,0,-5,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:12,y:12.1},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:24.2},7,cjs.Ease.get(1)).to({regX:-4.9,scaleX:1,scaleY:1,rotation:12.8},7,cjs.Ease.get(-1)).to({regX:-5,scaleX:1,scaleY:1,rotation:0,y:12},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-13,19,26);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(-4,18.5,1,1,0,0,0,-4,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:18.6,scaleX:1,scaleY:1,rotation:-10.6,y:18.6},7,cjs.Ease.get(-1)).to({regY:18.4,scaleX:1,scaleY:1,rotation:-21.5,x:-3.9,y:18.4},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-11.3,y:18.6},7,cjs.Ease.get(-1)).to({regY:18.5,scaleX:1,scaleY:1,rotation:0,x:-4,y:18.5},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-19.5,23,39);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-49,-59,98,118), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:4.07,scaleY:4.07,x:0.6,y:0.6,alpha:0},10).to({_off:true},1).wait(10));

	// Слой 1 - копия: 2
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:4.07,scaleY:4.07,x:0.6,y:0.6,alpha:0},10).to({_off:true},1).wait(15));

	// Слой 1 - копия: 2
	this.instance_2 = new lib.Символ31();
	this.instance_2.parent = this;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:4.07,scaleY:4.07,x:0.6,y:0.6,alpha:0},10).to({_off:true},1).wait(20));

	// Слой 1 - копия
	this.instance_3 = new lib.Символ31();
	this.instance_3.parent = this;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:4.07,scaleY:4.07,x:0.6,y:0.6,alpha:0},10).to({_off:true},1).wait(25));

	// Слой 1
	this.instance_4 = new lib.Символ31();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-7.2,14.4,14.4);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:5.6},0).wait(1).to({rotation:11.3},0).wait(1).to({rotation:16.9},0).wait(1).to({rotation:22.5},0).wait(1).to({rotation:28.1},0).wait(1).to({rotation:33.8},0).wait(1).to({rotation:39.4},0).wait(1).to({rotation:45},0).wait(1).to({rotation:50.6},0).wait(1).to({rotation:56.3},0).wait(1).to({rotation:61.9},0).wait(1).to({rotation:67.5},0).wait(1).to({rotation:73.1},0).wait(1).to({rotation:78.8},0).wait(1).to({rotation:84.4},0).wait(1).to({rotation:90},0).wait(1).to({rotation:95.6},0).wait(1).to({rotation:101.3},0).wait(1).to({rotation:106.9},0).wait(1).to({rotation:112.5},0).wait(1).to({rotation:118.1},0).wait(1).to({rotation:123.8},0).wait(1).to({rotation:129.4},0).wait(1).to({rotation:135},0).wait(1).to({rotation:140.6},0).wait(1).to({rotation:146.3},0).wait(1).to({rotation:151.9},0).wait(1).to({rotation:157.5},0).wait(1).to({rotation:163.1},0).wait(1).to({rotation:168.8},0).wait(1).to({rotation:174.4},0).wait(1).to({rotation:180},0).wait(1).to({rotation:185.6},0).wait(1).to({rotation:191.3},0).wait(1).to({rotation:196.9},0).wait(1).to({rotation:202.5},0).wait(1).to({rotation:208.1},0).wait(1).to({rotation:213.8},0).wait(1).to({rotation:219.4},0).wait(1).to({rotation:225},0).wait(1).to({rotation:230.6},0).wait(1).to({rotation:236.3},0).wait(1).to({rotation:241.9},0).wait(1).to({rotation:247.5},0).wait(1).to({rotation:253.1},0).wait(1).to({rotation:258.8},0).wait(1).to({rotation:264.4},0).wait(1).to({rotation:270},0).wait(1).to({rotation:275.6},0).wait(1).to({rotation:281.3},0).wait(1).to({rotation:286.9},0).wait(1).to({rotation:292.5},0).wait(1).to({rotation:298.1},0).wait(1).to({rotation:303.8},0).wait(1).to({rotation:309.4},0).wait(1).to({rotation:315},0).wait(1).to({rotation:320.6},0).wait(1).to({rotation:326.3},0).wait(1).to({rotation:331.9},0).wait(1).to({rotation:337.5},0).wait(1).to({rotation:343.1},0).wait(1).to({rotation:348.8},0).wait(1).to({rotation:354.4},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.8,-39,77.5,77.5);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lapa_18.png
	this.instance = new lib.Символ40();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// lapa_21.png
	this.instance_1 = new lib.Символ41();
	this.instance_1.parent = this;
	this.instance_1.setTransform(48.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// lapa_12.png
	this.instance_2 = new lib.Символ42();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-16.5,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// lapa_09.png
	this.instance_3 = new lib.Символ43();
	this.instance_3.parent = this;
	this.instance_3.setTransform(44.5,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// lapa_06.png
	this.instance_4 = new lib.Символ44();
	this.instance_4.parent = this;
	this.instance_4.setTransform(4,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// lapa_03.png
	this.instance_5 = new lib.Символ45();
	this.instance_5.parent = this;
	this.instance_5.setTransform(20,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-49,-97,113,156), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.bonus();
	this.instance.parent = this;
	this.instance.setTransform(-125,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-142.3,-59.3,284.7,118.7), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-167.6,-142,335.3,284.2), null);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pizza
	this.instance = new lib.pizza_1();
	this.instance.parent = this;
	this.instance.setTransform(485,40.1,1,1,15,0,0,101,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:27.1,rotation:0,x:485.1},7,cjs.Ease.get(-1)).to({scaleX:1.15,scaleY:1.15,rotation:-15,y:40},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-1.5,y:40.1},7,cjs.Ease.get(-1)).to({regY:27,rotation:15,x:485},8,cjs.Ease.get(1)).wait(1));

	// catch
	this.instance_1 = new lib._catch_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(110,29.6,1,1,-10,0,0,114,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:115,regY:23.5,rotation:-0.5,x:111.1,y:24.6},7,cjs.Ease.get(-1)).to({regX:114,regY:28.4,scaleX:1.11,scaleY:1.11,rotation:9,x:110.1,y:29.6},7,cjs.Ease.get(1)).to({regY:28.6,scaleX:1,scaleY:1,rotation:0.5,y:29.7},7,cjs.Ease.get(-1)).to({rotation:-10,x:110,y:29.6},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-40.3,660.3,152);


(lib.red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(334,166.5,1,1,0,0,0,334,166.5);
	this.instance.alpha = 0.461;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.648},7).to({alpha:0.461},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,668,332.9);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(300,150,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:299.9,scaleX:1.22,scaleY:1.22,x:299.9},79).to({regX:300,scaleX:1,scaleY:1,x:300},80).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 21
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(186.8,-49,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-44},12,cjs.Ease.get(-1)).to({y:-39},12,cjs.Ease.get(1)).to({y:-44.2},13,cjs.Ease.get(-1)).to({y:-49},12,cjs.Ease.get(1)).wait(1));

	// Символ 21
	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7.5,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-46},12,cjs.Ease.get(-1)).to({y:-51},12,cjs.Ease.get(1)).to({y:-45.8},13,cjs.Ease.get(-1)).to({y:-41},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.5,-146,292.3,164);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 30
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 29
	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-38.8,-39,77.5,77.5), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,scaleY:1.04},12,cjs.Ease.get(-1)).to({scaleX:1.08,scaleY:1.08},12,cjs.Ease.get(1)).to({scaleX:1.04,scaleY:1.04},13,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},12,cjs.Ease.get(1)).to({rotation:3.2},3,cjs.Ease.get(1)).to({rotation:-2,y:-5.5},3,cjs.Ease.get(1)).to({rotation:3.2,y:0},3,cjs.Ease.get(1)).to({rotation:0},3,cjs.Ease.get(1)).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.3,-59.3,284.7,118.7);


(lib.target = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 47
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(-10.8,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-10.7,10.6,-2.5,-2.7,12.4,-10.1,33.6,-20.5,55.8,-13,78.1,-5.4,88.5,15.7,90,18.7,91.1,21.8]}},17).to({guide:{path:[91.1,21.8,97.9,40.1,91.4,59.1,83.8,81.4,62.6,91.8,41.6,102.3,19.3,94.7,7.3,90.7,-1.2,82.7]}},23).to({guide:{path:[-1.3,82.7,-8.7,75.8,-13.4,66,-23.8,44.8,-16.3,22.6,-14,16.1,-10.7,10.6]}},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.6,-28.5,77.5,77.5);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pizza
	this.pizza = new lib.Символ6();
	this.pizza.parent = this;
	this.pizza.setTransform(-16.2,59.4,1.14,1.14);

	this.timeline.addTween(cjs.Tween.get(this.pizza).wait(1));

	// dama
	this.dama = new lib.Символ4();
	this.dama.parent = this;
	this.dama.setTransform(0,0,1.14,1.14);

	this.timeline.addTween(cjs.Tween.get(this.dama).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-191,-161.9,382.1,323.9), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:17.8},4,cjs.Ease.get(1)).to({y:0},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191,-161.9,382.1,323.9);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_112 = function() {
		this.stop();
	}
	this.frame_124 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(13).call(this.frame_112).wait(12).call(this.frame_124).wait(1));

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(0,-13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-0.1,rotation:-2.7,x:-113.1,y:-13.3},24,cjs.Ease.get(-1)).to({regY:0,rotation:0,x:-230.9,y:-13.2},25,cjs.Ease.get(1)).to({rotation:2.2,x:-115.5},25,cjs.Ease.get(-1)).to({rotation:0,x:0},25,cjs.Ease.get(1)).wait(1).to({regY:-0.1,rotation:-2.7,x:-113.1,y:-13.3},6,cjs.Ease.get(-1)).to({regY:0,rotation:0,x:-230.9,y:-13.2},6,cjs.Ease.get(1)).to({rotation:2.2,x:-115.5},6,cjs.Ease.get(-1)).to({rotation:0,x:0},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191,-175.2,382.1,323.9);


(lib.Символ1 = function(mode,startPosition,loop) {
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

	// Слой 3
	this.damapizza = new lib.Символ8();
	this.damapizza.parent = this;
	this.damapizza.setTransform(117.6,0.1);

	this.timeline.addTween(cjs.Tween.get(this.damapizza).to({scaleX:1.08,scaleY:1.08,x:126.6,y:1.1},6,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:117.6,y:0.1},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-175.1,382.1,323.9);


// stage content:
(lib.eda600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		this.vlevo.cursor = "none";
		this.vpravo.cursor = "none";
		stage.enableMouseOver();
		
		this.title.alpha = 1;
		this.red.alpha = 0;
		this.ruchki.visible = false;
		this.target.visible = true;
		this.target_2.visible = false;
		
		
		
		
		
		
		stage.canvas.onmouseover = function(){
		    _this.main.gotoAndPlay(1);
			//_this.prizel.gotoAndStop(1);
			_this.ruchki.gotoAndStop(1);
			_this.ruchki.visible = true;
			_this.target.visible = false;
			_this.target_2.visible = true;
			
			var target = _this.title;
			var tween = createjs.Tween.get(target, {loop: false}).to({alpha: 0}, 200);
			
			var target2 = _this.red;
			var tween2 = createjs.Tween.get(target2, {loop: false}).to({alpha: 1}, 200);
		}
		
		stage.canvas.onmouseout = function(){
		    _this.main.gotoAndPlay(8);
		   // _this.prizel.gotoAndStop(0);
			_this.main.damapizza.gotoAndPlay(0);
			_this.ruchki.gotoAndStop(0);
			_this.ruchki.visible = false;
			_this.target.visible = true;
			_this.target_2.visible = false;
			
			var target = _this.title;
			var tween = createjs.Tween.get(target, {loop: false}).to({alpha: 1}, 200);
			
			var target2 = _this.red;
			var tween2 = createjs.Tween.get(target2, {loop: false}).to({alpha: 0}, 200);
		}
		
		
		this.vlevo.addEventListener("mouseover", LeftOver);
		function LeftOver(){_this.main.damapizza.gotoAndPlay(100);}
		
		this.vpravo.addEventListener("mouseover", RightOver);
		function RightOver(){_this.main.damapizza.gotoAndPlay(113);}
		
		this.addEventListener("tick", Target.bind(this));
		
		function Target() {
			this.target_2.x = stage.mouseX/window.devicePixelRatio;
			this.target_2.y = stage.mouseY/window.devicePixelRatio;
			this.ruchki.x = stage.mouseX/window.devicePixelRatio;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// hands
	this.ruchki = new lib.Символ46();
	this.ruchki.parent = this;
	this.ruchki.setTransform(1028.1,276.3,1,1,0,0,0,87.1,-29.1);

	this.timeline.addTween(cjs.Tween.get(this.ruchki).wait(1));

	// target_2
	this.target_2 = new lib.target();
	this.target_2.parent = this;
	this.target_2.setTransform(703.8,88.8,1,1,0,0,0,26.9,48);

	this.timeline.addTween(cjs.Tween.get(this.target_2).wait(1));

	// target
	this.target = new lib.target();
	this.target.parent = this;
	this.target.setTransform(250.1,151,1,1,0,0,0,-10.8,10.2);

	this.timeline.addTween(cjs.Tween.get(this.target).wait(1));

	// hit
	this.vpravo = new lib.Символ20();
	this.vpravo.parent = this;
	this.vpravo.setTransform(150.2,150.6,0.898,0.869,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.vpravo, 0, 1, 2, false, new lib.Символ20(), 3);

	this.vlevo = new lib.Символ19();
	this.vlevo.parent = this;
	this.vlevo.setTransform(450,150.6,0.943,0.9,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.vlevo, 0, 1, 2, false, new lib.Символ19(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.vlevo},{t:this.vpravo}]}).wait(1));

	// girl
	this.main = new lib.Символ1();
	this.main.parent = this;
	this.main.setTransform(299,156,1.018,1.018,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// title
	this.title = new lib.title();
	this.title.parent = this;
	this.title.setTransform(303,148.5,1,1,0,0,0,293,33.5);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// red
	this.red = new lib.red();
	this.red.parent = this;
	this.red.setTransform(300.1,150.6,1,1,0,0,0,334,166.5);

	this.timeline.addTween(cjs.Tween.get(this.red).wait(1));

	// blk
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(510.6,150.5,1,1,180,0,0,90.5,149.5);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(90.5,150.5,1,1,0,0,0,90.5,149.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.instance_2 = new lib.bg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(300,150,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(266.1,127.6,1210.7,345.8);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#666666",
	opacity: 1.00,
	manifest: [
		{src:"images/bonus.png?1485274763642", id:"bonus"},
		{src:"images/_catch.png?1485274763642", id:"_catch"},
		{src:"images/dama.png?1485274763642", id:"dama"},
		{src:"images/fon.jpg?1485274763642", id:"fon"},
		{src:"images/lapa_03.png?1485274763642", id:"lapa_03"},
		{src:"images/lapa_06.png?1485274763642", id:"lapa_06"},
		{src:"images/lapa_09.png?1485274763642", id:"lapa_09"},
		{src:"images/lapa_12.png?1485274763642", id:"lapa_12"},
		{src:"images/lapa_18.png?1485274763642", id:"lapa_18"},
		{src:"images/lapa_21.png?1485274763642", id:"lapa_21"},
		{src:"images/pizza.png?1485274763642", id:"pizza"},
		{src:"images/pizza_w.png?1485274763642", id:"pizza_w"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;