(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.baltikalogo = function() {
	this.initialize(img.baltikalogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,130);


(lib.Bez_imeni1 = function() {
	this.initialize(img.Bez_imeni1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,130);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,576);


(lib.bolel = function() {
	this.initialize(img.bolel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,669,441);


(lib.Dinamo_2 = function() {
	this.initialize(img.Dinamo_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,130);


(lib.Emblema_FK_Kuban_2003_svg = function() {
	this.initialize(img.Emblema_FK_Kuban_2003_svg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,130);


(lib.fakel_2 = function() {
	this.initialize(img.fakel_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,130);


(lib.FC_Sokol_Saratov_Logo_svg = function() {
	this.initialize(img.FC_Sokol_Saratov_Logo_svg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,130);


(lib.flag = function() {
	this.initialize(img.flag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,663,577);


(lib.foolb = function() {
	this.initialize(img.foolb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,374,657);


(lib.himki = function() {
	this.initialize(img.himki);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,130);


(lib.logo_fb = function() {
	this.initialize(img.logo_fb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,301,93);


(lib.logo_fnl = function() {
	this.initialize(img.logo_fnl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,150);


(lib.LogotipFKEnisej_8 = function() {
	this.initialize(img.LogotipFKEnisej_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,130);


(lib.luchlogo = function() {
	this.initialize(img.luchlogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,130);


(lib.Mordoviya = function() {
	this.initialize(img.Mordoviya);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,130);


(lib.Neftehimik = function() {
	this.initialize(img.Neftehimik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,130);


(lib.shinnik = function() {
	this.initialize(img.shinnik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,130);


(lib.Sibir = function() {
	this.initialize(img.Sibir);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,130);


(lib.skalogo_flat = function() {
	this.initialize(img.skalogo_flat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,123);


(lib.spartak = function() {
	this.initialize(img.spartak);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,130);


(lib.Tambov_1 = function() {
	this.initialize(img.Tambov_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,130);


(lib.Tosno_1 = function() {
	this.initialize(img.Tosno_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,130);


(lib.txt3 = function() {
	this.initialize(img.txt3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,434,34);


(lib.txttt6 = function() {
	this.initialize(img.txttt6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,69);


(lib.txxt5 = function() {
	this.initialize(img.txxt5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,443,43);


(lib.tyumen_1 = function() {
	this.initialize(img.tyumen_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,130);


(lib.uzor = function() {
	this.initialize(img.uzor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.volgar_1 = function() {
	this.initialize(img.volgar_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,130);


(lib.zenitlogo20131925CYANRGB_2 = function() {
	this.initialize(img.zenitlogo20131925CYANRGB_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,129);// helper functions:

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


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shinnik();
	this.instance.parent = this;
	this.instance.setTransform(770,7);

	this.instance_1 = new lib.Mordoviya();
	this.instance_1.parent = this;
	this.instance_1.setTransform(625,7);

	this.instance_2 = new lib.himki();
	this.instance_2.parent = this;
	this.instance_2.setTransform(483,7);

	this.instance_3 = new lib.tyumen_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(325,7);

	this.instance_4 = new lib.Tosno_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(179,7);

	this.instance_5 = new lib.Neftehimik();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,7);

	this.instance_6 = new lib.volgar_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(908,7);

	this.instance_7 = new lib.Tambov_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1048,7);

	this.instance_8 = new lib.Emblema_FK_Kuban_2003_svg();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1202,7);

	this.instance_9 = new lib.fakel_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1380,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(0,0,1496,137), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.luchlogo();
	this.instance.parent = this;
	this.instance.setTransform(1429,20);

	this.instance_1 = new lib.LogotipFKEnisej_8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1279,20);

	this.instance_2 = new lib.spartak();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1146,20);

	this.instance_3 = new lib.Dinamo_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1006,0);

	this.instance_4 = new lib.skalogo_flat();
	this.instance_4.parent = this;
	this.instance_4.setTransform(827,20);

	this.instance_5 = new lib.FC_Sokol_Saratov_Logo_svg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(686,20);

	this.instance_6 = new lib.zenitlogo20131925CYANRGB_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(507,20);

	this.instance_7 = new lib.Bez_imeni1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(329,13);

	this.instance_8 = new lib.Sibir();
	this.instance_8.parent = this;
	this.instance_8.setTransform(170,28);

	this.instance_9 = new lib.baltikalogo();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,0,1551,158), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqeFWQgNgCgMgDQgMgGgMgGQgLgGgKgJQgKgJgIgKQgIgLgGgNQgFgOgEgPQgDgQAAgRQAAgQADgQQAEgPAFgOQAGgMAIgLQAIgLAKgJQAKgJALgGQAMgHAMgEIAZgHIAagCQAWAAAUAGQAWAGASAMQAWAUAIANQAGAKAEALQAEAMACANIhEAAQgEgKgGgIQgFgHgIgFQgHgFgKgCQgJgCgLAAQgPgBgNAGQgMAFgJAKQgJALgFAOQgFAOAAAQQAAAPAFAOQAFAOAJAKQAJALAMAGQANAGAPABQALgBAKgDQAKgDAIgFQAIgGAGgHQAFgJADgLIBEAAQgBAOgFANQgEAMgGAKQgGALgIAIQgHAIgJAHQgRANgXAGQgUAGgXAAgAJTFWIAAgIIArhXIhcioIAAgKIBOAAIAzBkIACAAIAvhkIBMAAIAAAKIiCEHgAHMFWIg8hpQgJABgSAAIAABoIhHAAIAAkRIBHAAIAABnIAFAAQANAAAKgCQAKgCAHgFQANgIAHgPQAHgTAAg0IBIAAQAAA3gHAYQgFATgKAPQgSAUgNAJIBKB4IAAALgAAiFWIAAkRIB1AAQARAAAQAHQAQAFALANQAMAKAGAQQAHAPAAASQAAANgGAMQgGAOgJAIQAQAIAIAPQAIAOAAATQAAASgFAPQgGAQgKALQgLANgQAGQgQAHgVAAgABmEYIA4AAQAKAAAFgHQAGgHAAgJQAAgJgGgHQgGgIgKAAIg3AAgABmCwIAsAAQAKAAAGgIQAFgFAAgKQAAgIgGgHQgFgGgKAAIgsAAgAhEFWIgQgjIhsAAIgQAjIhEAAIAAgKIB6kKIAfAAIB7EKIAAAKgAhrD4IgghHIgfBHIA/AAgAmlFWIAAjSIhDAAIAAg/IDLAAIAAA/IhDAAIAADSgAmUgkIAAgeIiiAAIAAAeIg5AAIAAhbIAbAAIBejZIAeAAIBhDZIAcAAIAABbgAnAiAIgnhjIgmBjIBNAAgAsehCQgNgDgNgEQgMgEgLgHQgMgGgJgJQgKgJgIgLQgIgLgGgNQgGgNgDgPQgDgPAAgRQAAgRADgQQADgPAGgNQAGgNAIgMQAIgKAKgJQAJgIAMgIQALgGAMgFIAagGIAZgCQAXAAAUAGQAWAGARANQAWASAIANQAHAKAEAMQAEAMACAOIhFAAQgDgLgGgHQgGgIgHgFQgIgFgJgCQgJgCgMgBQgPABgMAFQgNAGgJAJQgJAKgEAOQgFAOAAASQAAAPAEANQAFAOAJAKQAJALANAGQAMAGAPABQAMgBAKgCQAKgEAHgFQAIgFAGgJQAGgIACgLIBFAAQgCAPgEAMQgEAMgGALQgGAJgIAJQgIAIgJAHQgRAMgWAHQgVAFgXAAgAK3hDIAAkRIBGAAIAABRIAyAAQAQAAAbAJQASAHANAPQAMAMAGASQAGAQAAATQAAATgGARQgGARgMANQgNAOgSAIQgbAIgQAAgAL9iBIAyAAQAOAAAIgLQAHgKAAgNQAAgNgHgJQgJgLgNAAIgyAAgAIEhDIAAjTIhDAAIAAg+IDLAAIAAA+IhDAAIAADTgAF0hDIgQgiIhsAAIgQAiIhEAAIAAgKIB7kLIAeAAIB7ELIAAAKgAFNihIgfhIIgfBIIA+AAgABfhDIhHigIhECgIhEAAIAAgKIB5kLIAfAAIB7ELIAAAKgAk4hDIAAkRICqAAIAAA+IhlAAIAAAnIBdAAIAAA+IhdAAIAAAwIBpAAIAAA+g");
	this.shape.setTransform(91.3,34.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,0,182.7,68.9), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flag();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,663,577), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EiV5AsmMAAAhZLMErzAAAMAAABZLg");
	this.shape.setTransform(959.4,285.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,1918.8,570.9), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.txttt6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,183,69), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().rr(-221.35,-67.1,442.7,134.2,23.2);
	this.shape.setTransform(167.2,50.7,0.756,0.756);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#780000").s().rr(-221.35,-67.1,442.7,134.2,23.2);
	this.shape_1.setTransform(167.2,58.7,0.756,0.756);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,334.5,109.4), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.foolb();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,374,657), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo_fnl();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,147,150), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bolel();
	this.instance.parent = this;
	this.instance.setTransform(0,130.5,1,1,-11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,742.2,563), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flag();
	this.instance.parent = this;
	this.instance.setTransform(648.5,0,1,1,0,-12,168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,768.5,702.3), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.logo_fb();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,301,93), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.txt3();
	this.instance.parent = this;
	this.instance.setTransform(12,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(12,4,434,34), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.txxt5();
	this.instance.parent = this;
	this.instance.setTransform(8,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(8,-6,443,43), null);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#780000").s().p("A+8KfQhgAAhEhEQhEhEAAhgIAAttQAAhgBEhEQBEhEBgAAMA95AAAQBgAABEBEQBEBEAABgIAANtQAABghEBEQhEBEhgAAg");
	this.shape.setTransform(0,4,0.756,0.756);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.2,-46.7,334.5,101.4);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(167.2,46.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(0,0,334.5,101.4), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(2));

	// Слой 5
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(167.2,50.8,1,1,0,0,0,91.3,34.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},5).wait(2));

	// Слой 2
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(167.2,50.8,1,1,0,0,0,91.3,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7));

	// Слой 4
	this.instance_2 = new lib.Символ32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(167.2,50.7,1,1,0,0,0,167.2,50.7);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1.03,y:51.7,alpha:1},5).wait(2));

	// Слой 1
	this.instance_3 = new lib.Символ19();
	this.instance_3.parent = this;
	this.instance_3.setTransform(167.2,50.7,1,1,0,0,0,167.2,50.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,334.5,109.4);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(167.2,50.8,1,1,0,0,0,91.3,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(2));

	// Слой 1
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(167.2,50.7,1,1,0,0,0,167.2,50.7);

	this.instance_2 = new lib.Символ29();
	this.instance_2.parent = this;
	this.instance_2.setTransform(167.2,54.7,1,1,0,0,0,167.2,54.7);

	this.instance_3 = new lib.Символ20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(167.2,50.8,1,1,0,0,0,91.3,34.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1},{t:this.instance_3}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,334.5,109.4);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(331.5,288.5,1,1,0,0,0,331.5,288.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,663,577), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(959.4,285.4,1,1,0,0,0,959.4,285.4);
	this.instance.alpha = 0.289;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,1918.8,570.9), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(187,268.5,1,1,0,0,0,187,328.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:297.8},19,cjs.Ease.get(-1)).to({y:328.5},20,cjs.Ease.get(1)).to({y:298.5},20,cjs.Ease.get(-1)).to({y:268.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-60,374,657);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(371.1,281.5,1,1,0,0,0,371.1,281.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:281.4,rotation:-1.5,x:371.2,y:300.9},19,cjs.Ease.get(-1)).to({regY:281.5,rotation:-3.5,y:321.5},20,cjs.Ease.get(1)).to({regX:371,regY:281.6,rotation:-1.6,x:371.1,y:301.6},20,cjs.Ease.get(-1)).to({regX:371.1,regY:281.5,rotation:0,y:281.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,742.2,563);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(498.4,482.9,1,1,-25.7,0,0,384.2,351);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,997,966), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(331.5,288.5,1,1,0,0,0,331.5,288.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,skewY:2.5,x:331.6,y:304},14,cjs.Ease.get(-1)).to({scaleX:1,skewY:5.5,x:331.5,y:320.6},15,cjs.Ease.get(1)).to({scaleX:1,skewY:2.5,x:331.6,y:303.5},16,cjs.Ease.get(-1)).to({scaleX:1,skewY:0,x:331.5,y:288.5},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,663,577);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(167.2,54.7,1,1,0,0,0,167.2,54.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ28(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,334.5,109.4), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(229.3,25,1,1,0,0,0,229.3,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.14,scaleY:1.14,y:25.1},9,cjs.Ease.get(-1)).to({scaleX:1.3,scaleY:1.3},10,cjs.Ease.get(1)).to({scaleX:1.15,scaleY:1.15,x:229.4},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:229.3,y:25},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(229.3,89.3,1.407,1.407,0,0,0,229.3,25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.21,scaleY:1.21,x:229.4},9,cjs.Ease.get(-1)).to({regY:25,scaleX:1,scaleY:1,x:229.3,y:89.1},10,cjs.Ease.get(1)).to({scaleX:1.2,scaleY:1.2,y:89.2},10,cjs.Ease.get(-1)).to({regY:25.1,scaleX:1.41,scaleY:1.41,y:89.3},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-6,610.8,113.5);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(73.5,75,1,1,0,0,0,73.5,75);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-4,-2,161,164), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(959.4,285.4,1,1,0,0,0,959.4,285.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.773},9,cjs.Ease.get(-1)).to({alpha:0.52},10,cjs.Ease.get(1)).to({alpha:0.762},10,cjs.Ease.get(-1)).to({alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1918.8,570.9);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(498.4,483,1,1,0,0,0,498.4,483);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,skewY:3,y:509.9},29,cjs.Ease.get(-1)).to({scaleX:1,skewY:5.7,y:533.1},25,cjs.Ease.get(1)).to({scaleX:1,skewY:2.8,x:498.5,y:507.2},29,cjs.Ease.get(-1)).to({scaleX:1,skewY:0,x:498.4,y:483},27,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,997,966);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(1437.4,354.5,1,1,0,0,0,959.4,285.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1933,0);

	this.instance_2 = new lib.bg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-115,0);

	this.instance_3 = new lib.bg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(909,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-115,0,3072,639.9), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(73.4,101.1,1.347,1.347,0,0,0,73.4,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.18,scaleY:1.18,x:73.5,y:112.5},9,cjs.Ease.get(-1)).to({regX:73.5,scaleX:1,scaleY:1,y:125},10,cjs.Ease.get(1)).to({scaleX:1.17,scaleY:1.17,y:113.1},10,cjs.Ease.get(-1)).to({regX:73.4,scaleX:1.35,scaleY:1.35,x:73.4,y:101.1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.4,-1.9,211,215);


// stage content:
(lib.fullscreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		canvas.style.cursor = "pointer";
		canvas.addEventListener("click", function() {
		    window.callClick();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 10
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(460.1,877.2,0.316,0.316,0,0,0,748.2,68.6);

	this.instance_1 = new lib.Символ33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(460.1,816.3,0.316,0.316,0,0,0,775.6,79.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(461.2,545.8,1.095,1.095,0,0,0,229.5,57.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(460,695,1.407,1.407,0,0,0,167.2,50.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(460,305.6,1,1,0,0,0,73.5,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 2
	this.instance_5 = new lib.Символ5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(460,107.5,1,1,0,0,0,150.5,46.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.uzor, null, new cjs.Matrix2D(1,0,0,1,-249.4,-540.4)).s().p("EipZBuUMAAMjcnQJdJoJdIlIACABIAHAGIAGAHIABAAIABABIACACIAcAZUAhuAedAhjAQ8UBS/Ap4BRzgo7IA/ggQORnOOQpwQVqu1Vk0rIAcgaIACgCIABgBIABgBIAHgGIAGgHIACgCQGwmfGunDMAAADcng");
	this.shape.setTransform(460,607);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_5}]}).wait(1));

	// Слой 8
	this.instance_6 = new lib.Символ15();
	this.instance_6.parent = this;
	this.instance_6.setTransform(25.9,281.4,1,1,0,0,0,371.1,281.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 9
	this.instance_7 = new lib.Символ16();
	this.instance_7.parent = this;
	this.instance_7.setTransform(826.9,420.5,1,1,0,0,0,187,328.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 7
	this.instance_8 = new lib.Символ14();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-178.7,156.1,1,1,0,0,0,498.4,483);

	this.instance_9 = new lib.Символ8();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1115.3,149.4,1,1,0,0,0,331.5,288.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(1));

	// Слой 3
	this.instance_10 = new lib.Символ11();
	this.instance_10.parent = this;
	this.instance_10.setTransform(508.4,221,1,1,0,0,0,1478.5,288);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-625.1,130.6,3072,1640);
// library properties:
lib.properties = {
	width: 920,
	height: 915,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/baltikalogo.png?1488205124264", id:"baltikalogo"},
		{src:"images/Bez_imeni1.png?1488205124264", id:"Bez_imeni1"},
		{src:"images/bg.jpg?1488205124264", id:"bg"},
		{src:"images/bolel.png?1488205124264", id:"bolel"},
		{src:"images/Dinamo_2.png?1488205124264", id:"Dinamo_2"},
		{src:"images/Emblema_FK_Kuban_2003_svg.png?1488205124264", id:"Emblema_FK_Kuban_2003_svg"},
		{src:"images/fakel_2.png?1488205124264", id:"fakel_2"},
		{src:"images/FC_Sokol_Saratov_Logo_svg.png?1488205124264", id:"FC_Sokol_Saratov_Logo_svg"},
		{src:"images/flag.png?1488205124264", id:"flag"},
		{src:"images/foolb.png?1488205124264", id:"foolb"},
		{src:"images/himki.png?1488205124264", id:"himki"},
		{src:"images/logo_fb.png?1488205124264", id:"logo_fb"},
		{src:"images/logo_fnl.png?1488205124264", id:"logo_fnl"},
		{src:"images/LogotipFKEnisej_8.png?1488205124264", id:"LogotipFKEnisej_8"},
		{src:"images/luchlogo.png?1488205124264", id:"luchlogo"},
		{src:"images/Mordoviya.png?1488205124264", id:"Mordoviya"},
		{src:"images/Neftehimik.png?1488205124264", id:"Neftehimik"},
		{src:"images/shinnik.png?1488205124264", id:"shinnik"},
		{src:"images/Sibir.png?1488205124264", id:"Sibir"},
		{src:"images/skalogo_flat.png?1488205124264", id:"skalogo_flat"},
		{src:"images/spartak.png?1488205124264", id:"spartak"},
		{src:"images/Tambov_1.png?1488205124264", id:"Tambov_1"},
		{src:"images/Tosno_1.png?1488205124264", id:"Tosno_1"},
		{src:"images/txt3.png?1488205124264", id:"txt3"},
		{src:"images/txttt6.png?1488205124264", id:"txttt6"},
		{src:"images/txxt5.png?1488205124264", id:"txxt5"},
		{src:"images/tyumen_1.png?1488205124264", id:"tyumen_1"},
		{src:"images/uzor.jpg?1488205124264", id:"uzor"},
		{src:"images/volgar_1.png?1488205124264", id:"volgar_1"},
		{src:"images/zenitlogo20131925CYANRGB_2.png?1488205124264", id:"zenitlogo20131925CYANRGB_2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;