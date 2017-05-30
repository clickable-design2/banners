(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.baack = function() {
	this.initialize(img.baack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.baks = function() {
	this.initialize(img.baks);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,421,279);


(lib.bttn = function() {
	this.initialize(img.bttn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,367,100);


(lib.bttntxt = function() {
	this.initialize(img.bttntxt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,222,16);


(lib.graph = function() {
	this.initialize(img.graph);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,869,263);


(lib.invest = function() {
	this.initialize(img.invest);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,439,66);


(lib.kurs = function() {
	this.initialize(img.kurs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,77);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,203,76);


(lib.tr1 = function() {
	this.initialize(img.tr1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,96);


(lib.tr2 = function() {
	this.initialize(img.tr2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,80);


(lib.tr3 = function() {
	this.initialize(img.tr3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,80);


(lib.tr4 = function() {
	this.initialize(img.tr4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,88);// helper functions:

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


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tr1();
	this.instance.parent = this;
	this.instance.setTransform(-43,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-48,86,96);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tr1();
	this.instance.parent = this;
	this.instance.setTransform(-43,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-48,86,96);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tr2();
	this.instance.parent = this;
	this.instance.setTransform(-63,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-40,126,80);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tr2();
	this.instance.parent = this;
	this.instance.setTransform(-63,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-40,126,80);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tr4();
	this.instance.parent = this;
	this.instance.setTransform(-47.5,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,-44,95,88);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tr4();
	this.instance.parent = this;
	this.instance.setTransform(-47.5,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,-44,95,88);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tr3();
	this.instance.parent = this;
	this.instance.setTransform(-64.5,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,-40,129,80);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tr3();
	this.instance.parent = this;
	this.instance.setTransform(-64.5,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,-40,129,80);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kurs();
	this.instance.parent = this;
	this.instance.setTransform(0,42.3,1,1,-44.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,96.8,97), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bttntxt();
	this.instance.parent = this;
	this.instance.setTransform(76,41);

	this.instance_1 = new lib.bttn();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,367,100), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.baks();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,421,279), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,-109);

	this.instance_1 = new lib.invest();
	this.instance_1.parent = this;
	this.instance_1.setTransform(191,-101);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,-109,630,76), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.graph();
	this.instance.parent = this;
	this.instance.setTransform(1738,0);

	this.instance_1 = new lib.graph();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1738,0,1,1,0,0,180);

	this.instance_2 = new lib.graph();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,2607,263), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.baack();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,640,305), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(48.4,48.5,1,1,0,0,0,48.4,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:0.94,scaleY:0.94,y:48.6},1,cjs.Ease.get(-1)).to({regX:48.5,scaleX:0.86,scaleY:0.86,x:48.5},1,cjs.Ease.get(1)).to({regY:48.6,scaleX:0.91,scaleY:0.91},1,cjs.Ease.get(-1)).to({regX:48.4,regY:48.5,scaleX:1,scaleY:1,x:48.4,y:48.5},1,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96.8,97);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(183.5,50,1,1,0,0,0,183.5,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.03,scaleY:1.03,y:50.1},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,367,100);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_51 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(51).call(this.frame_51).wait(1));

	// Layer 1
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(210.5,139.5,1,1,0,0,0,210.5,139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:149.3},12,cjs.Ease.get(-1)).to({y:159.5},13,cjs.Ease.get(1)).to({y:149.5},12,cjs.Ease.get(-1)).to({y:139.5},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,421,279);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A6ZToMAAAgg8QatsmaGMmMAAAAg8g");
	mask.setTransform(165,80.4);

	// Layer 1
	this.baks1 = new lib.Symbol11();
	this.baks1.parent = this;
	this.baks1.setTransform(210.5,139.5,1,1,0,0,0,210.5,139.5);

	var maskedShapeInstanceList = [this.baks1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.baks1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,334,206), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(434.5,131.5,1,1,0,0,0,434.5,131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1303.5},199).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2607,263);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(1277.5,151.5,1,1,0,0,0,1303.5,131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-26,0,2607,305), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(26));

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,226,128,0.2)").s().p("AgqArQgRgSAAgZQAAgYARgSQASgRAYAAQAZAAASARQARASAAAYQAAAZgRASQgSARgZAAQgYAAgSgRg");
	this.shape.setTransform(301,64.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,226,128,0.2)").s().p("AlXFYQiNiOgBjKQABjJCNiOQCOiNDJgBQDKABCOCNQCNCOABDJQgBDKiNCOQiOCNjKAAQjJAAiOiNg");
	this.shape_1.setTransform(301,64.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,226,128,0.2)").s().p("AqFKGQkJkLAAl7QAAl6EJkLQEKkJF7AAQF8AAEKEJQEJELAAF6QAAF7kJELQkKEJl8AAQl7AAkKkJg");
	this.shape_2.setTransform(301,64.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,226,128,0.2)").s().p("AuyOzQmGmGAAotQAAosGGmGQGGmFIsAAQItAAGGGFQGGGGAAIsQAAItmGGGQmGGGotAAQosAAmGmGg");
	this.shape_3.setTransform(301,64.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,226,128,0.2)").s().p("AzfThQoCoDAAreQAArdICoCQICoCLdAAQLeAAICICQICICAALdQAALeoCIDQoCIBreAAQrdAAoCoBg");
	this.shape_4.setTransform(301,64.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,226,128,0.2)").s().p("A4NYNQp+p+AAuPQAAuPJ+p+QJ+p+OPAAQOQAAJ+J+QJ+J+AAOPQAAOPp+J+Qp+J/uQAAQuPAAp+p/g");
	this.shape_5.setTransform(301,64.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,226,128,0.2)").s().p("A86c7Qr6r6AAxBQAAxAL6r6QL6r6RAAAQRBAAL6L6QL6L6AARAQAARBr6L6Qr6L7xBAAQxAAAr6r7g");
	this.shape_6.setTransform(301,64.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,226,128,0.2)").s().p("EghoAhoQt2t2AAzyQAAzxN2t2QN2t3TyAAQTyAAN3N3QN2N2AATxQAATyt2N2Qt3N3zyAAQzyAAt2t3g");
	this.shape_7.setTransform(301.1,64.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,226,128,0.2)").s().p("EgmVAmWQvzvzAB2jQgB2iPzvyQPyvzWjgBQWkABPyPzQPyPyAAWiQAAWjvyPzQvyPy2kAAQ2jAAvyvyg");
	this.shape_8.setTransform(301.1,64.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,226,128,0.2)").s().p("EgrDArDQxuxuAA5VQAA5TRuxvQRvxvZUAAQZVAARvRvQRuRvAAZTQAAZVxuRuQxvRv5VAAQ5UAAxvxvg");
	this.shape_9.setTransform(301.1,64.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},120).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},1).wait(15));

	// tr3.png
	this.instance = new lib.tr3();
	this.instance.parent = this;
	this.instance.setTransform(473,105);

	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(537.5,145);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(547.5,145);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({x:476},0).wait(1).to({x:470},0).wait(1).to({x:476},0).wait(1).to({x:470},0).wait(1).to({x:473},0).wait(21).to({_off:true},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120).to({_off:false},0).wait(5).to({startPosition:0},0).to({x:542},4,cjs.Ease.get(-1)).to({_off:true,x:547.5},5,cjs.Ease.get(1)).wait(5).to({_off:false,x:537.5},5,cjs.Ease.get(1)).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(129).to({_off:false},5,cjs.Ease.get(1)).to({x:542.5},5,cjs.Ease.get(-1)).to({_off:true,x:537.5},5,cjs.Ease.get(1)).wait(1));

	// tr4.png
	this.instance_3 = new lib.tr4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(487,-2);

	this.instance_4 = new lib.Tween3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(534.5,42);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween4("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(544.5,42);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(64).to({x:490},0).wait(1).to({x:484},0).wait(1).to({x:490},0).wait(1).to({x:484},0).wait(1).to({x:487},0).wait(51).to({_off:true},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120).to({_off:false},0).wait(5).to({startPosition:0},0).to({x:539},4,cjs.Ease.get(-1)).to({_off:true,x:544.5},5,cjs.Ease.get(1)).wait(5).to({_off:false,x:534.5},5,cjs.Ease.get(1)).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(129).to({_off:false},5,cjs.Ease.get(1)).to({x:539.5},5,cjs.Ease.get(-1)).to({_off:true,x:534.5},5,cjs.Ease.get(1)).wait(1));

	// tr2.png
	this.instance_6 = new lib.tr2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-9,105);

	this.instance_7 = new lib.Tween5("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(54,145);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween6("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(44,145);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34).to({x:-12},0).wait(1).to({x:-6},0).wait(1).to({x:-12},0).wait(1).to({x:-6},0).wait(1).to({x:-9},0).wait(81).to({_off:true},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120).to({_off:false},0).wait(5).to({startPosition:0},0).to({x:49.6},4,cjs.Ease.get(-1)).to({_off:true,x:44},5,cjs.Ease.get(1)).wait(5).to({_off:false,x:54},5,cjs.Ease.get(1)).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(129).to({_off:false},5,cjs.Ease.get(1)).to({x:49},5,cjs.Ease.get(-1)).to({_off:true,x:54},5,cjs.Ease.get(1)).wait(1));

	// tr1.png
	this.instance_9 = new lib.tr1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(10,-10);

	this.instance_10 = new lib.Tween7("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(53,38);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween8("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(43,38);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5).to({x:7},0).wait(1).to({x:13},0).wait(1).to({x:7},0).wait(1).to({x:13},0).wait(1).to({x:10},0).wait(110).to({_off:true},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120).to({_off:false},0).wait(5).to({startPosition:0},0).to({x:48.6},4,cjs.Ease.get(-1)).to({_off:true,x:43},5,cjs.Ease.get(1)).wait(5).to({_off:false,x:53},5,cjs.Ease.get(1)).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(129).to({_off:false},5,cjs.Ease.get(1)).to({x:48},5,cjs.Ease.get(-1)).to({_off:true,x:53},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-10,611,195);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.button1 = new lib.Symbol15();
	this.button1.parent = this;
	this.button1.setTransform(183.5,50,1,1,0,0,0,183.5,50);
	new cjs.ButtonHelper(this.button1, 0, 1, 2, false, new lib.Symbol15(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-6,-1.6,379,103.3), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Custom Mouse Cursor
		Replaces the default mouse cursor with the specified symbol instance.
		*/
		stage.canvas.style.cursor = "none";
		this.kurs.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kurs.x = stage.mouseX/window.devicePixelRatio;
			this.kurs.y = stage.mouseY/window.devicePixelRatio;
		}
		//To restore the default mouse pointer, uncomment the following lines:
		//this.removeEventListener("tick", fl_CustomMouseCursor.bind(this));
		//stage.removeChild(kurs);
		//stage.canvas.style.cursor = "default";
		var _this = this;
		
		_this.kurs.visible=false;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		    {
				_this.kurs.visible=true;
			    _this.baks.baks1.gotoAndPlay(2);
				_this.servis.gotoAndPlay(121);
		
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
				_this.kurs.visible=false;
				_this.baks.baks1.gotoAndPlay(0);
		
		    }
		
		
			_this.cursor = "none";
			_this.button.cursor = "none";
			_this.button.button1.cursor = "none";
			
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 7
	this.kurs = new lib.Symbol16();
	this.kurs.parent = this;
	this.kurs.setTransform(-105.9,155.5,0.649,0.649,0,0,0,48.4,48.5);

	this.timeline.addTween(cjs.Tween.get(this.kurs).wait(1));

	// Layer 5
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(226.5,146,1,1,0,0,0,219.5,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.button = new lib.Symbol1();
	this.button.parent = this;
	this.button.setTransform(320.5,261,1,1,0,0,0,183.5,50);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Layer 3
	this.baks = new lib.Symbol10();
	this.baks.parent = this;
	this.baks.setTransform(367.5,201.5,1,1,0,0,0,210.5,139.5);

	this.timeline.addTween(cjs.Tween.get(this.baks).wait(1));

	// Layer 4
	this.servis = new lib.Symbol2();
	this.servis.parent = this;
	this.servis.setTransform(90.5,136,1,1,0,0,0,64.5,48);

	this.timeline.addTween(cjs.Tween.get(this.servis).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(321,153.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(182.7,151.5,2719.3,342);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/baack.jpg?1496052441525", id:"baack"},
		{src:"images/baks.png?1496052441525", id:"baks"},
		{src:"images/bttn.png?1496052441525", id:"bttn"},
		{src:"images/bttntxt.png?1496052441525", id:"bttntxt"},
		{src:"images/graph.png?1496052441525", id:"graph"},
		{src:"images/invest.png?1496052441525", id:"invest"},
		{src:"images/kurs.png?1496052441525", id:"kurs"},
		{src:"images/logo.png?1496052441525", id:"logo"},
		{src:"images/tr1.png?1496052441525", id:"tr1"},
		{src:"images/tr2.png?1496052441525", id:"tr2"},
		{src:"images/tr3.png?1496052441525", id:"tr3"},
		{src:"images/tr4.png?1496052441525", id:"tr4"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;