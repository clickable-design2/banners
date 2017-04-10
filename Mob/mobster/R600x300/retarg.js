(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.boka = function() {
	this.initialize(img.boka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,104);


(lib.dent = function() {
	this.initialize(img.dent);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,17);


(lib.face = function() {
	this.initialize(img.face);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,192);


(lib.foot_left = function() {
	this.initialize(img.foot_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,45);


(lib.foot_right = function() {
	this.initialize(img.foot_right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,57);


(lib.glass = function() {
	this.initialize(img.glass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,17);


(lib.hair = function() {
	this.initialize(img.hair);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,32);


(lib.hand11 = function() {
	this.initialize(img.hand11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,54);


(lib.hvost = function() {
	this.initialize(img.hvost);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,67);


(lib.konec = function() {
	this.initialize(img.konec);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,28);


(lib.lip = function() {
	this.initialize(img.lip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,33);


(lib.lokot = function() {
	this.initialize(img.lokot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,35);


(lib.nog_left = function() {
	this.initialize(img.nog_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,47);


(lib.nog_right = function() {
	this.initialize(img.nog_right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,47);


(lib.ple40 = function() {
	this.initialize(img.ple40);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,33);


(lib.ple4o = function() {
	this.initialize(img.ple4o);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,61);


(lib.waves = function() {
	this.initialize(img.waves);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,753,220);// helper functions:

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


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AAC051").s().rr(-85.05,-17.1,170.1,34.2,17.1);
	this.shape.setTransform(85,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#81923D").s().rr(-85.05,-17.1,170.1,34.2,17.1);
	this.shape_1.setTransform(85,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170.1,34.2);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5151A2").s().p("AiLCRQg6g8AAhVQAAhUA6g8QA6g8BRAAQBSAAA6A8QA6A8AABUQAABVg6A8Qg6A8hSAAQhRAAg6g8g");
	this.shape.setTransform(19.8,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(0,0,39.6,41), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AphGcQg1gcpmAeQDDgcEPhfQh7isAAh3QAAjwFEisQFEiqHJAAQHKAAFDCqQFECsAADwQAADylECqQlDCrnKAAQnJAAlEirg");
	this.shape.setTransform(127.7,58.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(0,0,255.5,116.6), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("ТЫ ЗАХОДИ, ЕСЛИ ЧТО!", "bold 44px 'Coco Gothic'", "#FFFFFF");
	this.text.lineHeight = 60;
	this.text.lineWidth = 737;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,0,741.1,62.2), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("MOBSTER", "bold 50px 'Coco Gothic'", "#FFD200");
	this.text.lineHeight = 68;
	this.text.lineWidth = 256;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(0,0,260.4,70.1), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dent();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,49,17), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lip();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,77,33), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.boka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,149,104), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.foot_right();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,31,57), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,63,32), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,35,54), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.konec();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,27,28), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hvost();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,88,67), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lokot();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,41,35), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nog_left();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,40,47), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nog_right();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,23,47), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ple4o();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,49,61), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ple40();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,69,33), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.foot_left();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,30,45), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,184,192), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F0F10").s().p("ABmCVQgjgsABg+QgBg+AjgsQAjgsAxAAQAwAAAiAsQAjAsAAA+QAAA+gjAsQgiAsgwAAQgxAAgjgsgAkHB5Qgng2AAhLQAAhMAng2QAog2A3AAQA3AAAoA2QAnA2AABMQAABLgnA2QgoA2g3AAQg3AAgog2g");
	this.shape.setTransform(30.3,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(0,0,60.6,38.6), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glass();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,13,17), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.waves();
	this.instance.parent = this;
	this.instance.setTransform(-753,0);

	this.instance_1 = new lib.waves();
	this.instance_1.parent = this;
	this.instance_1.setTransform(753,0);

	this.instance_2 = new lib.waves();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-753,0,2259,220), null);


(lib.Символ57копия3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(12.8,-390.7,0.646,0.646,0,0,0,19.8,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({y:13.3},0).to({y:-390.7},69).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-404,25.6,26.5);


(lib.Символ57копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(12.8,-390.7,0.646,0.646,0,0,0,19.8,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({y:13.3},0).to({y:-390.7},60).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-404,25.6,26.5);


(lib.Символ57копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(12.8,13.3,0.646,0.646,0,0,0,19.8,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({y:-390.7},70).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.6,26.5);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(12.8,13.3,0.646,0.646,0,0,0,19.8,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-390.7},71).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.6,26.5);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.parent = this;
	this.instance.setTransform(85,17.1,1,1,0,0,0,85,17.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ58(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(0,0,170.1,34.2), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(44,11.5,1,1,0,0,0,6.5,8.5);

	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.5,8.5,1,1,0,0,0,6.5,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(0,0,50.5,20), null);


(lib.Символ36копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.text = new cjs.Text("ТЫ НЕ ЗЫБЫЛ\nПРО МЕНЯ?", "bold 22px 'Coco Gothic'", "#333333");
	this.text.lineHeight = 31;
	this.text.lineWidth = 167;
	this.text.parent = this;
	this.text.setTransform(228.9,29.8,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(127.7,58.3,1,1,0,0,0,127.7,58.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36копия, new cjs.Rectangle(0,0,255.5,116.6), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.text = new cjs.Text("КУ-КУ!\nЯ ЗДЕСЬ!", "bold 29px 'Coco Gothic'", "#333333");
	this.text.lineHeight = 40;
	this.text.lineWidth = 144;
	this.text.parent = this;
	this.text.setTransform(82.6,19);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(127.7,58.3,1,1,0,0,0,127.7,58.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(0,0,255.5,116.6), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(1129.5,110,1,1,0,0,0,376.5,110);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1882.7},184).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2259,220);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(38.5,16.5,1,1,0,0,0,38.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,77,33), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(24.5,8.5,1,1,0,0,0,24.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,49,17), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(38.5,15.1,1,1.08,0,0,0,38.5,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleY:0.98,y:13.4},3,cjs.Ease.get(-1)).to({scaleY:0.85,y:11.2},4,cjs.Ease.get(1)).to({scaleY:0.95,y:12.9},3,cjs.Ease.get(-1)).to({scaleY:1.08,y:15.1},4,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(45.5,8.5,1,1,0,0,0,24.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({x:45.6,y:6.8},3,cjs.Ease.get(-1)).to({x:45.8,y:4.4},4,cjs.Ease.get(1)).to({x:45.7,y:6.2},3,cjs.Ease.get(-1)).to({x:45.5,y:8.5},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.6,77,35.7);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(31.5,16,1,1,0,0,0,31.5,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,skewY:1.8,x:31.6,y:17.1},10,cjs.Ease.get(-1)).to({scaleX:1,skewY:4.1,x:31.5,y:18.3},11,cjs.Ease.get(1)).to({scaleX:1,skewY:2,x:31.6,y:17.2},3,cjs.Ease.get(-1)).to({scaleX:1,skewY:0,x:31.5,y:16},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,32);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(13.5,14,1,1,0,0,0,13.5,14);

	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(51.5,55.5,1,1,0,0,0,44,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,95.5,89), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(30.3,19.2,1,1,0,0,0,30.3,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0},0).wait(5).to({alpha:1},0).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0},0).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.6,38.6);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(21.1,16.2,1,1,0,0,0,25.2,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:24.1},19,cjs.Ease.get(-1)).to({x:27.3},20,cjs.Ease.get(1)).to({x:24.2},20,cjs.Ease.get(-1)).to({x:21.1},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,6.2,50.5,20);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ57копия();
	this.instance.parent = this;
	this.instance.setTransform(550.2,353,1,1,0,0,0,12.8,13.2);

	this.instance_1 = new lib.Символ57копия2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(385.9,353,1,1,0,0,0,12.8,13.2);

	this.instance_2 = new lib.Символ57копия3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(221.6,353,1,1,0,0,0,12.8,13.2);

	this.instance_3 = new lib.Символ57();
	this.instance_3.parent = this;
	this.instance_3.setTransform(57.3,346.5,1,1,0,0,0,12.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#464491").ss(1,1,1).p("EgmggdzMAAAA7nAs09zMAAAA7nAM29zMAAAA7nEAmhgdzMAAAA7n");
	this.shape.setTransform(303.7,162.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 3
	this.instance_4 = new lib.Символ34();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-517.5,202.1,1,1,0,0,0,1129.5,110);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5656AD").s().p("EgvzAZAMAAAgx/MBfnAAAMAAAAx/g");
	this.shape_1.setTransform(306,160);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-1647,-64.2,2259,430.5), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAuBKIgDAAIgBgDIgKgXIg/AAIgKAXQAAABAAABQgBAAAAABQgBAAAAAAQgBAAAAAAIgVAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBIgBgCIAQgkIAshpIABgCIAEgBIALAAIADABIACACIA8CMIAAAAIgBADQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAgAAVAVIgVgzIgUAzIApAAg");
	this.shape.setTransform(119.3,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAgBKIgCAAIgBgCIgCgCIgCgCIgrg2QgEADgEABIgJABIAAAzQAAAEgFAAIgTAAQgEAAAAgEIAAiLIABgDIADgBIATAAIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIAAA7QAEAAAFgEQAGgEAFgHIADgEIACgEIADgEIACgDIAIgNQAFgHAGgEIANgHQAHgCAJAAQAEAAAAADIAAASIgBADQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQgFAAgGAFQgGAEgGAIIgGAHIgFAIIgFAHIgEAFIA/BLIABABIAAACIgBAAg");
	this.shape_1.setTransform(104.2,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAiBKIgDgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAh1Ig6AAIAAB1IgCADIgDABIgUAAIgDgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAiLQAAgEAEAAIBrAAIADABIABADIAACLIgBADIgEABg");
	this.shape_2.setTransform(89.4,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTBKQgKgDgJgFQgIgFgHgHQgHgHgFgIQgFgJgDgJQgCgKAAgLQAAgJACgKQADgKAFgJQAFgIAHgHQAHgHAIgFQAJgFAKgDQAJgCAKAAQAKAAAKACQAKADAJAFQAIAFAHAHQAHAHAFAIQAFAJADAKQACAKAAAJQAAALgCAKQgDAJgFAJQgFAIgHAHQgHAHgIAFQgJAFgKADQgKACgKAAQgKAAgJgCgAgSgsQgIAEgHAHQgGAGgDAJQgEAJAAAJQAAAKAEAJQADAJAGAHQAHAGAIAEQAJAEAJAAQAKAAAIgEQAJgEAGgGQAGgHAEgJQADgJAAgKQAAgJgDgJQgEgJgGgGQgGgHgJgEQgIgEgKAAQgJAAgJAEg");
	this.shape_3.setTransform(73.5,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAmBKIgDgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAg9IhBAAIAAA9QAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgDABIgUAAQgFAAAAgEIAAiLIACgDQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIAUAAIADABQABABAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAAA0IBBAAIAAg0IABgDQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAUAAIADABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAIAACLQAAAEgFAAg");
	this.shape_4.setTransform(57.1,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAgBKIgCAAIgBgCIgCgCIgCgCIgrg2QgEADgEABIgJABIAAAzQAAAEgFAAIgTAAQgEAAAAgEIAAiLIABgDIADgBIATAAIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIAAA7QAEAAAFgEQAGgEAFgHIADgEIACgEIADgEIACgDIAIgNQAFgHAGgEIANgHQAHgCAJAAQAEAAAAADIAAASIgBADQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQgFAAgGAFQgGAEgGAIIgGAHIgFAIIgFAHIgEAFIA/BLIABABIAAACIgBAAg");
	this.shape_5.setTransform(41.7,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.parent = this;
	this.instance.setTransform(80.5,0.7,1,1,0,0,0,85,17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(-4.5,-16.4,170.1,34.2), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(29.3,3.8,1,1,0,0,0,25.2,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-0.6},29,cjs.Ease.get(-1)).to({y:-5.2},30,cjs.Ease.get(1)).to({y:-0.7},30,cjs.Ease.get(-1)).to({y:3.8},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50.5,20);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(30.3,19.2,1,1,0,0,0,30.3,19.2);

	this.instance_1 = new lib.Символ40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.5,27.4,1,1,0,0,0,25.2,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(0,0,60.6,38.6), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(107,82.1,1,1,0,0,0,30.3,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(108.5,144.5,1,1,0,0,0,38.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(92,96,1,1,0,0,0,92,96);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(108.5,17,1,1,0,0,0,31.5,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,184,192), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// boka
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(448.5,176,1,1,0,0,0,74.5,52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// nog_right.png
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(410.6,237.5,1,1,0,0,0,11.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// glass.png
	this.instance_2 = new lib.Символ18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(439,138,1,1,0,0,0,92,96);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// foot_right.png
	this.instance_3 = new lib.Символ16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(400.5,281.5,1,1,0,0,0,15.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// foot_left.png
	this.instance_4 = new lib.Символ4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(486,240.5,1,1,0,0,0,15,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// nog_left.png
	this.instance_5 = new lib.Символ8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(486.5,276.5,1,1,0,0,0,20,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// konec.png
	this.instance_6 = new lib.Символ19();
	this.instance_6.parent = this;
	this.instance_6.setTransform(372.3,205.5,1,1,0,0,0,47.8,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(324.5,42,206.5,268), null);


(lib.Символ30копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(39.7,126.5,1.231,1.231,105,0,0,17.7,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58));

	// Слой 2
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(266.4,127.5,1.231,1.231,0,-105,75,17.7,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(58));

	// Слой 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4445AC").s().p("EgvBACZIAAkxMBeDAAAIAAExg");
	this.shape.setTransform(303.5,131.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(58));

	// Слой 3
	this.instance_2 = new lib.Символ5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(52.6,144.2,1.256,1.256,0,0,0,34.5,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.26,skewY:-1.8,x:50.4,y:139},10,cjs.Ease.get(-1)).to({scaleX:1.26,skewY:-4,x:47.6,y:132.3},11,cjs.Ease.get(1)).to({regX:34.6,scaleX:1.26,skewY:-1.8,x:50.2,y:138.3},3,cjs.Ease.get(-1)).to({regX:34.5,scaleX:1.26,skewY:0,x:52.6,y:144.2},3,cjs.Ease.get(1)).to({scaleX:1.26,skewY:-1.8,x:50.4,y:139},10,cjs.Ease.get(-1)).to({scaleX:1.26,skewY:-4,x:47.6,y:132.3},11,cjs.Ease.get(1)).to({scaleX:1.26,skewY:0,x:52.6,y:144.2},9,cjs.Ease.get(-1)).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-368.7,-12.9,1.245,1.245,0,0,0,21.9,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:31.5,y:-18.4},10,cjs.Ease.get(-1)).to({regY:31.6,y:-24.9},11,cjs.Ease.get(1)).to({regY:31.5,y:-19},3,cjs.Ease.get(-1)).to({regY:31.6,y:-12.9},3,cjs.Ease.get(1)).to({regY:31.5,y:-18.4},10,cjs.Ease.get(-1)).to({regY:31.6,y:-24.9},11,cjs.Ease.get(1)).to({y:-12.9},9,cjs.Ease.get(-1)).wait(1));

	// Слой 5
	this.instance_4 = new lib.Символ10();
	this.instance_4.parent = this;
	this.instance_4.setTransform(272.9,141.6,1.256,1.256,-45,0,0,20.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:17.6,x:273,y:139.5},10,cjs.Ease.get(-1)).to({regY:17.5,x:272.9,y:136.6},11,cjs.Ease.get(1)).to({regY:17.6,x:273,y:139.1},3,cjs.Ease.get(-1)).to({regY:17.5,x:272.9,y:141.6},3,cjs.Ease.get(1)).to({regY:17.6,x:273,y:139.5},10,cjs.Ease.get(-1)).to({regY:17.5,x:272.9,y:136.6},11,cjs.Ease.get(1)).to({y:141.6},9,cjs.Ease.get(-1)).wait(1));

	// Слой 4
	this.instance_5 = new lib.Символ6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(235.9,156.2,1.256,1.256,-45,0,0,24.4,30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:154},10,cjs.Ease.get(-1)).to({y:151.2},11,cjs.Ease.get(1)).to({y:153.7},3,cjs.Ease.get(-1)).to({y:156.2},3,cjs.Ease.get(1)).to({y:154},10,cjs.Ease.get(-1)).to({y:151.2},11,cjs.Ease.get(1)).to({y:156.2},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,0,602.6,333.5);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 10
	this.instance = new lib.Символ36копия();
	this.instance.parent = this;
	this.instance.setTransform(204.4,58.5,1.09,1.09,0,0,180,127.7,58.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(67).to({_off:false},0).to({y:38.5,alpha:1},3).wait(39).to({y:48.5,alpha:0},3).wait(23));

	// Слой 9
	this.instance_1 = new lib.Символ36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(405.4,58.5,1.09,1.09,0,0,0,127.7,58.3);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:38.5,alpha:1},4).wait(47).to({y:68.5,alpha:0},3).to({_off:true},1).wait(80));

	// Слой 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_51 = new cjs.Graphics().p("AHsHhIAAkzMggVAACIAAqPMAxTAAAIAAPAg");
	var mask_graphics_54 = new cjs.Graphics().p("A4plHMAxTAAAIAAKNMgxTAACg");
	var mask_graphics_62 = new cjs.Graphics().p("EgvBgFHMBeDAAAIAAKNMheDAACg");
	var mask_graphics_66 = new cjs.Graphics().p("A4mHhIAAvAMAxNAAAIAAKNMggyAAAIAAEzg");
	var mask_graphics_67 = new cjs.Graphics().p("A4mHhIAAvAMAxNAAAIAAPAg");
	var mask_graphics_108 = new cjs.Graphics().p("A4mHhIAAvAMAxNAAAIAAKNI+3AAIAAEzg");
	var mask_graphics_111 = new cjs.Graphics().p("A4mFHIAAqNMAxNAAAIAAKNg");
	var mask_graphics_120 = new cjs.Graphics().p("A4mFHIAAqNMAxNAAAIAAKNg");
	var mask_graphics_126 = new cjs.Graphics().p("A4rHhIAKvAMAxNAAAIAAKNMgilAAAIAAEzg");
	var mask_graphics_128 = new cjs.Graphics().p("A4rHhIAKvAMAxNAAAIAAPAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(51).to({graphics:mask_graphics_51,x:160.3,y:99.2}).wait(3).to({graphics:mask_graphics_54,x:160.3,y:83.9}).wait(8).to({graphics:mask_graphics_62,x:303.5,y:83.9}).wait(4).to({graphics:mask_graphics_66,x:447,y:99.2}).wait(1).to({graphics:mask_graphics_67,x:447,y:99.2}).wait(41).to({graphics:mask_graphics_108,x:447,y:99.2}).wait(3).to({graphics:mask_graphics_111,x:447,y:83.8}).wait(9).to({graphics:mask_graphics_120,x:161,y:83.8}).wait(6).to({graphics:mask_graphics_126,x:160.5,y:99.2}).wait(2).to({graphics:mask_graphics_128,x:160.5,y:99.2}).wait(7));

	// Слой 6
	this.instance_2 = new lib.Символ13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(39.7,126.5,1.231,1.231,105,0,0,17.7,26.9);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({y:101.5},2).to({y:166.5},3).wait(11).to({rotation:0,skewX:-105,skewY:75,x:562.3,y:176.5},0).to({scaleX:1.23,scaleY:1.23,skewX:-104.8,skewY:75.2,x:562.4,y:108.5},2,cjs.Ease.get(-1)).to({scaleX:1.23,scaleY:1.23,skewX:-105,skewY:75,x:562.3,y:126.5},3,cjs.Ease.get(1)).wait(33).to({y:106.5},4).to({y:166.5},3).wait(10).to({rotation:105,skewX:0,skewY:0,x:39.7},0).to({y:101.5},5).to({y:126.5},2).wait(8));

	// Слой 2
	this.instance_3 = new lib.Символ13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(266.4,127.5,1.231,1.231,0,-105,75,17.7,27);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(52).to({y:102.5},2).to({y:167.5},3).wait(6).to({rotation:105,skewX:0,skewY:0,x:335.6,y:177.6},0).to({regY:26.9,scaleX:1.23,scaleY:1.23,rotation:104.8,x:335.7,y:105.6},2,cjs.Ease.get(-1)).to({regY:27,scaleX:1.23,scaleY:1.23,rotation:105,x:335.6,y:127.6},3,cjs.Ease.get(1)).wait(38).to({y:102.6},4).to({y:167.6},3).wait(10).to({rotation:0,skewX:-105,skewY:75,x:266.4,y:167.5},0).to({y:104.5},5).to({y:127.5},2).wait(5));

	// Слой 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4445AC").s().p("EgvBACZIAAkxMBeDAAAIAAExg");
	this.shape.setTransform(303.5,131.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(135));

	// Слой 3
	this.instance_4 = new lib.Символ5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(52.6,144.2,1.256,1.256,0,0,0,34.5,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.26,skewY:-1.8,x:50.4,y:139},10,cjs.Ease.get(-1)).to({scaleX:1.26,skewY:-4,x:47.6,y:132.3},11,cjs.Ease.get(1)).to({regX:34.6,scaleX:1.26,skewY:-1.8,x:50.2,y:138.3},3,cjs.Ease.get(-1)).to({regX:34.5,scaleX:1.26,skewY:0,x:52.6,y:144.2},3,cjs.Ease.get(1)).to({scaleX:1.26,skewY:-1.8,x:50.4,y:139},10,cjs.Ease.get(-1)).to({scaleX:1.26,skewY:-4,x:47.6,y:132.3},11,cjs.Ease.get(1)).to({scaleX:1.26,skewY:0,x:52.6,y:288.2},9,cjs.Ease.get(-1)).wait(8).to({skewY:180,x:549.4,y:284.3},0).to({y:144.3},6,cjs.Ease.get(-1)).to({skewX:1.3,skewY:181.3,x:549.9,y:146.9},4,cjs.Ease.get(-1)).to({skewX:5.7,skewY:185.7,x:551.2,y:154.8},4,cjs.Ease.get(1)).to({skewX:0.5,skewY:180.5,x:549.2,y:145.3},4).to({skewX:0,skewY:180,x:549.4,y:144.3},4,cjs.Ease.get(1)).to({skewX:1.3,skewY:181.3,x:549.9,y:146.9},4,cjs.Ease.get(-1)).to({skewX:5.7,skewY:185.7,x:551.2,y:154.8},4,cjs.Ease.get(1)).to({skewX:0.5,skewY:180.5,x:549.2,y:145.3},4).to({skewX:-4.7,skewY:175.3,x:547.2,y:135.8},4,cjs.Ease.get(1)).to({scaleX:1.25,scaleY:1.25,skewX:-4.6,skewY:175.4,x:547.3,y:210.8},5,cjs.Ease.get(-1)).to({scaleX:1.26,scaleY:1.26,skewX:-4.7,skewY:175.3,x:547.2,y:285.8},5,cjs.Ease.get(1)).wait(10).to({skewX:0,skewY:0,x:52.6,y:288.2},0).to({regX:34.6,y:222.8},5,cjs.Ease.get(-1)).to({regX:34.5,y:144.2},6,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_5 = new lib.Символ2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-368.7,-12.9,1.245,1.245,0,0,0,21.9,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:31.5,y:-18.4},10,cjs.Ease.get(-1)).to({regY:31.6,y:-24.9},11,cjs.Ease.get(1)).to({regY:31.5,y:-19},3,cjs.Ease.get(-1)).to({regY:31.6,y:-12.9},3,cjs.Ease.get(1)).to({regY:31.5,y:-18.4},10,cjs.Ease.get(-1)).to({regY:31.6,y:-24.9},11,cjs.Ease.get(1)).to({y:131.1},9,cjs.Ease.get(-1)).wait(8).to({skewY:180,x:970.7,y:127.1},0).to({y:-12.9},6,cjs.Ease.get(-1)).to({regY:31.5,skewX:1.3,skewY:181.3,x:974.6,y:0.4},4,cjs.Ease.get(-1)).to({regY:31.6,skewX:5.7,skewY:185.7,x:986,y:40.4},4,cjs.Ease.get(1)).to({skewX:0.5,skewY:180.5,x:970.2,y:-7.4},4).to({skewX:0,skewY:180,x:970.7,y:-12.9},4,cjs.Ease.get(1)).to({regY:31.5,skewX:1.3,skewY:181.3,x:974.6,y:0.4},4,cjs.Ease.get(-1)).to({regY:31.6,skewX:5.7,skewY:185.7,x:986,y:40.4},4,cjs.Ease.get(1)).to({skewX:0.5,skewY:180.5,x:970.2,y:-7.4},4).to({skewX:-4.7,skewY:175.3,x:954.2,y:-55.3},4,cjs.Ease.get(1)).to({regY:31.5,scaleX:1.24,scaleY:1.24,skewX:-4.6,skewY:175.4,y:19.5},5,cjs.Ease.get(-1)).to({regY:31.6,scaleX:1.25,scaleY:1.25,skewX:-4.7,skewY:175.3,y:94.7},5,cjs.Ease.get(1)).wait(10).to({skewX:0,skewY:0,x:-368.7,y:131.1},0).to({y:65.6},5,cjs.Ease.get(-1)).to({y:-12.9},6,cjs.Ease.get(1)).wait(1));

	// Слой 5
	this.instance_6 = new lib.Символ10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(272.9,141.6,1.256,1.256,-45,0,0,20.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:17.6,x:273,y:139.5},10,cjs.Ease.get(-1)).to({regY:17.5,x:272.9,y:136.6},11,cjs.Ease.get(1)).to({regY:17.6,x:273,y:139.1},3,cjs.Ease.get(-1)).to({regY:17.5,x:272.9,y:141.6},3,cjs.Ease.get(1)).to({regY:17.6,x:273,y:139.5},10,cjs.Ease.get(-1)).to({regY:17.5,x:272.9,y:136.6},11,cjs.Ease.get(1)).to({y:285.6},9,cjs.Ease.get(-1)).wait(8).to({rotation:0,skewX:45,skewY:-135,x:329.1,y:281.6},0).to({y:141.6},6,cjs.Ease.get(-1)).to({scaleX:1.25,scaleY:1.25,skewX:46.4,skewY:-133.6,x:330,y:138.8},4,cjs.Ease.get(-1)).to({regX:20.4,regY:17.6,scaleX:1.26,scaleY:1.26,skewX:50.7,skewY:-129.3,x:332.2,y:130.4},4,cjs.Ease.get(1)).to({scaleX:1.25,scaleY:1.25,skewX:45.6,skewY:-134.4,x:329.9,y:140.9},4).to({regX:20.5,regY:17.5,scaleX:1.26,scaleY:1.26,skewX:45,skewY:-135,x:329.1,y:141.6},4,cjs.Ease.get(1)).to({scaleX:1.25,scaleY:1.25,skewX:46.4,skewY:-133.6,x:330,y:138.8},4,cjs.Ease.get(-1)).to({regX:20.4,regY:17.6,scaleX:1.26,scaleY:1.26,skewX:50.7,skewY:-129.3,x:332.2,y:130.4},4,cjs.Ease.get(1)).to({scaleX:1.25,scaleY:1.25,skewX:45.6,skewY:-134.4,x:329.9,y:140.9},4).to({regX:20.5,regY:17.4,scaleX:1.26,scaleY:1.26,skewX:40.3,skewY:-139.7,x:327.5,y:151.1},4,cjs.Ease.get(1)).to({scaleX:1.25,scaleY:1.25,x:327.6,y:226.1},5,cjs.Ease.get(-1)).to({scaleX:1.26,scaleY:1.26,x:327.5,y:301.1},5,cjs.Ease.get(1)).wait(10).to({regY:17.5,rotation:-45,skewX:0,skewY:0,x:272.9,y:285.6},0).to({regY:17.6,y:220.2},5,cjs.Ease.get(-1)).to({regY:17.5,y:141.6},6,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.instance_7 = new lib.Символ6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(235.9,156.2,1.256,1.256,-45,0,0,24.4,30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:154},10,cjs.Ease.get(-1)).to({y:151.2},11,cjs.Ease.get(1)).to({y:153.7},3,cjs.Ease.get(-1)).to({y:156.2},3,cjs.Ease.get(1)).to({y:154},10,cjs.Ease.get(-1)).to({y:151.2},11,cjs.Ease.get(1)).to({y:300.2},9,cjs.Ease.get(-1)).wait(8).to({rotation:0,skewX:45,skewY:-135,x:366.1,y:296.3},0).to({y:156.3},6,cjs.Ease.get(-1)).to({scaleX:1.25,scaleY:1.25,skewX:46.4,skewY:-133.6,x:366.6,y:154.3},4,cjs.Ease.get(-1)).to({scaleX:1.26,scaleY:1.26,skewX:50.7,skewY:-129.3,x:367.5,y:148.5},4,cjs.Ease.get(1)).to({scaleX:1.25,scaleY:1.25,skewX:45.6,skewY:-134.4,x:366.5,y:155.7},4).to({scaleX:1.26,scaleY:1.26,skewX:45,skewY:-135,x:366.1,y:156.3},4,cjs.Ease.get(1)).to({scaleX:1.25,scaleY:1.25,skewX:46.4,skewY:-133.6,x:366.6,y:154.3},4,cjs.Ease.get(-1)).to({scaleX:1.26,scaleY:1.26,skewX:50.7,skewY:-129.3,x:367.5,y:148.5},4,cjs.Ease.get(1)).to({scaleX:1.25,scaleY:1.25,skewX:45.6,skewY:-134.4,x:366.5,y:155.7},4).to({scaleX:1.26,scaleY:1.26,skewX:40.3,skewY:-139.7,x:365.5,y:162.8},4,cjs.Ease.get(1)).to({regY:30.8,scaleX:1.25,scaleY:1.25,x:365.4,y:237.8},5,cjs.Ease.get(-1)).to({regY:30.7,scaleX:1.26,scaleY:1.26,x:365.5,y:312.8},5,cjs.Ease.get(1)).wait(10).to({rotation:-45,skewX:0,skewY:0,x:235.9,y:300.2},0).to({x:235.8,y:234.8},5,cjs.Ease.get(-1)).to({x:235.9,y:156.2},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,-5,602.6,338.6);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7));

	// Слой 2
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(764.2,76.6,1.588,1.588,0,0,0,85,17.2);
	this.instance.alpha = 0.27;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:442.2,y:75.4,alpha:1},3).wait(1).to({x:452.2},0).to({x:792.2},4).to({_off:true},1).wait(2));

	// Слой 4
	this.instance_1 = new lib.Символ30копия2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-34.3,263.8,1,1,0,0,0,-32.4,160.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({y:143.8},2).wait(2).to({y:323.8},3).wait(4));

	// Слой 1
	this.instance_2 = new lib.Символ30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-34.3,143.8,1,1,0,0,0,-32.4,160.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:348.3},3).to({_off:true},1).wait(6).to({_off:false,y:317.8},0).to({y:143.8},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-21.5,602.6,338.6);


// stage content:
(lib.retarg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 3;
		var _this = this;
		
		stage.canvas.addEventListener("mouseover", fl_mouseout1.bind(this));
		
		function fl_mouseout1()
		{
		_this.mobs.gotoAndPlay(1);
		}
		
		stage.canvas.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout()
		{
		_this.mobs.gotoAndPlay(9);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(299.1,85,0.769,0.769,0,0,0,370.6,31.2);

	this.instance_1 = new lib.Символ32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(83.3,30.8,0.584,0.584,0,0,0,118.5,31.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.mobs = new lib.Символ35();
	this.mobs.parent = this;
	this.mobs.setTransform(-34,329.3,1,1,0,0,0,-33,160.3);

	this.timeline.addTween(cjs.Tween.get(this.mobs).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(299.9,149.5,1,0.966,0,0,0,305.9,159.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1353,83.2,2259,552.9);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/boka.png?1491832927310", id:"boka"},
		{src:"images/dent.png?1491832927310", id:"dent"},
		{src:"images/face.png?1491832927310", id:"face"},
		{src:"images/foot_left.png?1491832927310", id:"foot_left"},
		{src:"images/foot_right.png?1491832927310", id:"foot_right"},
		{src:"images/glass.png?1491832927310", id:"glass"},
		{src:"images/hair.png?1491832927310", id:"hair"},
		{src:"images/hand11.png?1491832927310", id:"hand11"},
		{src:"images/hvost.png?1491832927310", id:"hvost"},
		{src:"images/konec.png?1491832927310", id:"konec"},
		{src:"images/lip.png?1491832927310", id:"lip"},
		{src:"images/lokot.png?1491832927310", id:"lokot"},
		{src:"images/nog_left.png?1491832927310", id:"nog_left"},
		{src:"images/nog_right.png?1491832927310", id:"nog_right"},
		{src:"images/ple40.png?1491832927310", id:"ple40"},
		{src:"images/ple4o.png?1491832927310", id:"ple4o"},
		{src:"images/waves.png?1491832927310", id:"waves"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;