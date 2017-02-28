(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,31);


(lib.tovar = function() {
	this.initialize(img.tovar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,176);// helper functions:

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


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("Lenovo IdeaPad 110-15ACL (80TJ00D0RA)", "bold 13px 'Ubuntu'", "#767B89");
	this.text.lineHeight = 17;
	this.text.lineWidth = 265;
	this.text.parent = this;
	this.text.setTransform(1.6,1.6,0.78,0.78);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,210,18), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("НА 567 000 ГРН ДЕШЕВЛЕ!", "bold 20px 'Ubuntu'", "#EF2F6F");
	this.text.lineHeight = 24;
	this.text.lineWidth = 265;
	this.text.parent = this;
	this.text.setTransform(1.6,1.6,0.78,0.78);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EF2F6F").ss(1,1,1).p("AlYAAIKxAA");
	this.shape.setTransform(35.1,221.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-0.4,0,210.5,222.8), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tovar();
	this.instance.parent = this;
	this.instance.setTransform(-88,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-88,-88,176,176), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgmhOIBNBOIhNBP");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-4.9,-8.9,9.9,17.8), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgmhOIBNBOIhNBP");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-4.9,-8.9,9.9,17.8), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("ХОЧЕШЬ КУПИТЬ", "bold 24px 'Ubuntu'", "#EF2F6F");
	this.text.lineHeight = 29;
	this.text.lineWidth = 265;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,269.2,30.9), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkzBUIgQgEIAHgfQAMAFAMAAQAHAAAHgEQAHgDAGgLIhAh5IAqAAIAoBXIAdhXIAoAAIgvB2QgHAQgHAKQgIALgJAGQgIAFgIACQgJADgIAAQgJAAgJgCgAF6BTIgbgFIAAijIAmAAIAAA4IALAAQAVAAAPADQAPAEAKAHQAKAHAFAKQAFAKAAAPQAAAOgFALQgFALgLAHQgVAOglAAgAGFACIAAAyIAdgBQAHgBAGgDQAFgDADgFQADgFAAgHQAAgHgDgFQgDgFgGgDQgGgDgIgBIgWgBgADvBSIAAiHIgzAAIAAggICLAAIAAAgIgyAAIAACHgAB/BSIAAhtQgVAZgTAbQgZAmgKATIggAAIAAinIAlAAIAABiIA7hOIARgUIAfAAIAACngAg4BSIAAiHIg+AAIAACHIgmAAIAAinICKAAIAACngAl9BSIgMgSIggglQgIgJgJgHIAABHIgmAAIAAinIAmAAIAAA/IA5g/IAtAAIhHBNQAOALAZAcQANAQAXAjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-48.1,-8.5,96.2,17.2), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EF2F6F","#B02252"],[0,1],0,16.8,0,-16.7).s().p("AvxC/QgoAAAAgoIAAktQAAgoAoAAIfjAAQAoAAAAAoIAAEtQAAAogoAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-104.9,-19.1,210,38.3), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-120,-200,240,400), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-96,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-96,-15.5,192,31), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EF2F6E").ss(3,1,1).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-121.5,-201.5,243,403), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 12
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(5.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({x:6.8},2,cjs.Ease.get(1)).to({x:8.8},3,cjs.Ease.get(1)).to({x:5.8},4,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:2},9,cjs.Ease.get(1)).to({x:3},2,cjs.Ease.get(1)).to({x:-5.7},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.7,-8.9,21.5,17.8);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(52.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-104.9,-19.1,210,38.3), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06},14,cjs.Ease.get(-1)).to({scaleX:1.12,scaleY:1.12},15,cjs.Ease.get(1)).to({scaleX:1.06,scaleY:1.06},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-88,176,176);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.77},9,cjs.Ease.get(-1)).to({alpha:0.512},10,cjs.Ease.get(1)).to({alpha:0.758},10,cjs.Ease.get(-1)).to({alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.5,-201.5,243,403);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.43,scaleY:0.43,x:-232},0).to({scaleX:1,scaleY:1,x:0,alpha:1},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-88,176,176);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.9,-19.1,210,38.3);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-112.1,-20.4,224.4,40.8), null);


// stage content:
(lib._240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open("link1", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 2
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(120,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,200.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120,357.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 8
	this.instance_3 = new lib.Символ25();
	this.instance_3.parent = this;
	this.instance_3.setTransform(120,86.1,1,1,0,0,0,105,9);

	this.instance_4 = new lib.Символ17();
	this.instance_4.parent = this;
	this.instance_4.setTransform(120,119,1,1,0,0,0,105,23.3);

	this.instance_5 = new lib.Символ9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120.1,65.5,0.78,0.78,0,0,0,134.6,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Слой 6
	this.text = new cjs.Text("12123 грн ", "bold 12px 'Ubuntu'", "#7F859B");
	this.text.lineHeight = 15;
	this.text.lineWidth = 71;
	this.text.parent = this;
	this.text.setTransform(17,310.7);

	this.text_1 = new cjs.Text("546 666 грн ", "bold 16px 'Ubuntu'", "#EF2F6F");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 102;
	this.text_1.parent = this;
	this.text_1.setTransform(223,308.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	// Слой 4
	this.instance_6 = new lib.Символ16();
	this.instance_6.parent = this;
	this.instance_6.setTransform(120,210);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 3
	this.instance_7 = new lib.Символ4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(118.5,198.6,243,403);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/logo.png?1487863398028", id:"logo"},
		{src:"images/tovar.png?1487863398028", id:"tovar"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;