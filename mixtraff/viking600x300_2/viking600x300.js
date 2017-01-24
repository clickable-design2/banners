(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bey = function() {
	this.initialize(img.bey);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,83);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.eee = function() {
	this.initialize(img.eee);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,166);


(lib.mech = function() {
	this.initialize(img.mech);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,40);


(lib.navedi = function() {
	this.initialize(img.navedi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,23);


(lib.redeyes = function() {
	this.initialize(img.redeyes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,8);


(lib.viking_03 = function() {
	this.initialize(img.viking_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,91);


(lib.viking_06 = function() {
	this.initialize(img.viking_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,83);


(lib.viking_09 = function() {
	this.initialize(img.viking_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,86);


(lib.viking_12 = function() {
	this.initialize(img.viking_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,90);


(lib.viking_15 = function() {
	this.initialize(img.viking_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,170);


(lib.viking_20 = function() {
	this.initialize(img.viking_20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,156);


(lib.viking_24 = function() {
	this.initialize(img.viking_24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,185);


(lib.viking_28 = function() {
	this.initialize(img.viking_28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,51);


(lib.viking_31 = function() {
	this.initialize(img.viking_31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,41);


(lib.viking_321 = function() {
	this.initialize(img.viking_321);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,372);


(lib.viking_3s21 = function() {
	this.initialize(img.viking_3s21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,39);


(lib.viking_3ss21 = function() {
	this.initialize(img.viking_3ss21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,39);


(lib.viking_3sss21 = function() {
	this.initialize(img.viking_3sss21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,35);


(lib.vraga = function() {
	this.initialize(img.vraga);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,325,69);// helper functions:

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


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mech();
	this.instance.parent = this;
	this.instance.setTransform(-8,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ62, new cjs.Rectangle(-8,-20,16,40), null);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.navedi();
	this.instance.parent = this;
	this.instance.setTransform(-51,-6,0.518,0.518);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(-51,-6,116.1,11.9), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EiTLBM3MAAAiZtMEmXAAAMAAACZtg");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(-942,-491.8,1884.1,983.8), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.vraga();
	this.instance.parent = this;
	this.instance.setTransform(-162,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(-162,-35,325,69), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.bey();
	this.instance.parent = this;
	this.instance.setTransform(-89,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(-89,-42,178,83), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viking_3sss21();
	this.instance.parent = this;
	this.instance.setTransform(17,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(17,-15,26,35), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viking_3ss21();
	this.instance.parent = this;
	this.instance.setTransform(-24,141.6,1.255,1.255,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(-24,-142,49,283.6), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viking_3ss21();
	this.instance.parent = this;
	this.instance.setTransform(-36.3,-6.8,0.321,0.351);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-36.3,-6.8,72.6,13.7), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#993300").s().p("A4jE4IAApvMAxHAAAIAAJvg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#993300").s().p("A4jE4IAApvMAxHAAAIAAJvg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AgDgFIBpAAAgDBmIAAhrIAAhgAhlgFIBiAA");
	this.shape.setTransform(0.4,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(3,1,1).p("AAAi/IAAkXAAAHXIAAkEADcAAID7AAAnWAAIEZAA");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-48.6,-48.6,97.2,97.2), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5.8,1,1).p("AEgAAQAAB4hUBUQhUBUh4AAQh3AAhUhUQhUhUAAh4QAAh3BUhUQBUhUB3AAQBvAABQBIQAHAGAGAGQBGBGAMBeQACATAAAUg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(2,1,1).p("AA3AAQAAAXgQAQQgQAQgXAAQgWAAgQgQQgQgQAAgXQAAgWAQgQQAQgQAWAAQAVAAAQANQABACABABQAOANACASQAAAEAAADg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-31.6,-31.6,63.3,63.3), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viking_321();
	this.instance.parent = this;
	this.instance.setTransform(-74,-196);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-74,-196,190,372), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.redeyes();
	this.instance.parent = this;
	this.instance.setTransform(-8,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-8,-3,20,8), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viking_3s21();
	this.instance.parent = this;
	this.instance.setTransform(-37,-6.3,0.327,0.327);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-37,-6.3,74,12.8), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FADF46").s().p("AgFA5QgCgJgCgOIgCgdQgBgOANgoQAPgogGA3QgFA3ADANQADAOgDAJQgDAKgEAAQgDAAgDgKg");
	this.shape.setTransform(0.1,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FADF46").s().p("AgDA+QgEgCgCgJIgDgXIAAgBIgCgeQACABAJgZIAGgUIADgMQAGgHADAPIgCATIgFAiQgCAgAAAHIgBAGQAAAHgBADIgCACIgBABQgBAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_1.setTransform(0.5,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FADF46").s().p("AgDA7IgCgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAQgCgEgCgIIgDgZIAAgBQgBgMAAgTIAAgBQAFANALgXQACgIADgOIACgMQAFACAHAFIgDAVQgGAYgBALIgDApIgBgBQAAAAAAAAQgBgBAAABQAAAAAAACQgBABAAACQgBAHgBACIgCABIgBgBg");
	this.shape_2.setTransform(0.8,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FADF46").s().p("AgJA7IgCgEIgDgGQgCgFgBgHIgDgbIAAgBQgBgJABgYIAAgBQAIAZAMgXQADgHACgQIABgNQAEALALgDIgEAVQgHAbgBALQgEArgCAAIgBgCQgBgHgBAIQgCAJgDABIgEgBg");
	this.shape_3.setTransform(1.1,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FADF46").s().p("AgRA0QgDgKgBgOIgCgcIAAgkQALAkANgWQAGgJAAgeQADAVAPgMQgOAwgCAOQgGA3gCgLQgCgMgDAKQgCAJgEABQgEgBgDgJg");
	this.shape_4.setTransform(1.4,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FADF46").s().p("AgIA1IgDgFQgCgEgBgIIAAgBIgDgaQgBgKAAgYQAIAXAJgYQACgIABgQIABgGQADATAMgJIABADQAAAKgHAUIgFASQgEAaABALIgBAEQgBgHgBAIQgBAIgCACIgBAAQgDAAgCgEg");
	this.shape_5.setTransform(0.8,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FADF46").s().p("AgEA2QgDgCgCgKIAAgBQgDgKgBgNIgBgfIAAgBQADAIAFgaQACgIAAgOIABACQADASAKgGIACAAQAHgCgKAZIgGARQgEAWADALIACAEQABAAgBAFQAAAHgCADIAAABQgBAAAAABQgBAAAAAAQAAAAAAAAQAAAAgBgBIgCACIgBgBg");
	this.shape_6.setTransform(0.5,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FADF46").s().p("AgFAwQgCgJgCgOIgCgcQgBgKABgsQAFAgAMgNQAOgOgPAeQgOAdAJAQQALAQgEAJQgCAKgEAAQgDAAgDgKg");
	this.shape_7.setTransform(0.2,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FADF46").s().p("AAAA6QgDgCgCgGIgBgDIgDgVIAAgCIgCgaIAAAAQgBgMAFgpIAAgCQAGAQAIgCQAHgFgDAKIgFAPQgLAfAHAPIADAFQAFAMgCAIIgBADQgCAHgEABIgBgBg");
	this.shape_8.setTransform(0.2,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FADF46").s().p("AAAA6QgCgBgCgGIgBgDQgCgJgBgMIAAgCIgDgbIAAAAQgBgNAIgpIABgCQAHABAFAKQAFgBgDAIIgEAQQgIAgAFAPIACAFQAEALgCAIIgBADQgBAHgDABIgCABIgBgBg");
	this.shape_9.setTransform(0.1,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FADF46").s().p("AgEA3IgBgDQgCgJgBgMIAAgCIgDgcIAAgBQgBgMAMgpIAAgCQAJgQACAXQACACgCAJIgDAPQgGAiAEAOIABAEQADAMgBAIIgBADQgCAHgDACIgCAAQgCAAgDgHg");
	this.shape_10.setTransform(0.1,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Слой 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F27533").s().p("AgUBPQgIgPgCgXQgBgYAEgTQAEgVAqhGQAOAngIAhQgGAVADAGQAJAPAAAVQAAAWgJAPQgJAPgMAAQgMAAgJgPg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F27533").s().p("AgMBRIgGgFQgEgEgCgHQgGgNgBgRQgBgQAEgPIADgRQADgRAQgoQAHgCALgMQADAOADAEQAGAJAAAGIAAAQQAAASADgDIAAAEQAGATgBAUIAAABQgCAXgHAQIgBADQgGAPgLADIgBABIgEAAQgGAAgGgEg");
	this.shape_12.setTransform(0.1,0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F27533").s().p("AgJBSQgEgBgEgDQgEgEgEgIQgGgNgBgTQgBgTAFgPIAFgTQADgUALgsQAGAMAHgBQAEASAEgBQAHgBAAgHIAEARQAEATAGgNIAAAEQABAbgCARIAAABQgDAZgFASIgBADQgEAQgKAIIgBAAQgFAFgFAAQgEAAgDgCg");
	this.shape_13.setTransform(0.3,0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F27533").s().p("AgIBaQgFAAgEgDQgFgEgEgIQgIgOgBgVQgCgVAIgQQADgGACgPIALhHQAEAbAFAKQADAXAFgHQAJgLABgUIAGASQAJATAIgWIgBAFQgCAfgDAQIAAACIgIAtIAAAEQgCATgJALIgBABQgHAIgIAAIgEAAg");
	this.shape_14.setTransform(0.6,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F27533").s().p("AgdBTQgIgQgCgWQgBgYAJgRQAJgPAEhVQADBiALgVQAKgVABghQATAyAOgrIgLA8QgHAeAAAWQAAAWgJAPQgJAOgLAAQgNAAgJgOg");
	this.shape_15.setTransform(0.9,-0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F27533").s().p("AgFBdQgJgBgHgKIgEgFQgHgOgCgWQgBgWAIgQIADgLQAEgTAHhBIACAEQAABNAPgQQANgQAJgdQAEAiAFgMIgCAHQgFAVABANIABAJIgCAcIgCAVQAAAKgEAIQgDAJgEAGQgFAHgFACQgEACgDAAIgDAAg");
	this.shape_16.setTransform(0.4,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F27533").s().p("AgLBaQgHgDgGgJIgDgFQgHgOgCgVQgBgTAFgQIACgLIAQhPIABgDQgDBDAWgMQAOgKARgZIAAgBIAAAAIAAABQgJAegCgEIgGAMQgGASAHAMIADAHQACANgBAOIgCAVQgBAKgEAIQgDAHgFAGQgFAFgFABIgEABIgHgBg");
	this.shape_17.setTransform(0.6,0.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F27533").s().p("AggBMQgJgQgBgWQgCgYAFgTIAVhVQgJBZBHhDQgiAhgGAOQgHAQAKALQALALAAAWQAAAWgJAPQgIAOgMAAQgMAAgJgOg");
	this.shape_18.setTransform(1.3,0.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F27533").s().p("AgKBXQgIgBgHgJIgEgGQgIgPgCgWQgBgWAEgTIACgKQAEgSARgzQAAATAHAFQALAYAjgaIgLAOQgNARgEAJIgCAIQgFAPAJALIADAGQAFALgBAPIgDAPQgCALgGAHQgEAGgEADQgFADgFAAIgCAAg");
	this.shape_19.setTransform(0.9,0.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F27533").s().p("AgJBTQgIgCgGgJIgEgFQgHgPgBgVQgBgVADgSIACgJQAEgRATgwQADAIAHgEQAMAaAXgIIgIAPQgLATgCAHIgBAIQgBAMAGANIACAGQADALgBANQgBAJgDAGQgDAKgGAGQgEAFgFACQgDABgDAAIgFAAg");
	this.shape_20.setTransform(0.6,1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F27533").s().p("AgIBWQgHgDgGgJIgDgFQgHgOgBgUQgBgUADgRIACgJQADgQAWgtQAEgEAKgKQALAbALAJIgFAQQgJAUABAHIABAHQACALADANIABAGQACAMgCAMIgFAOQgEAJgGAFQgFAEgFABIgDAAIgHgBg");
	this.shape_21.setTransform(0.2,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-9.3,6.2,18.8);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viking_03();
	this.instance.parent = this;
	this.instance.setTransform(-40.9,-37.3,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-40.9,-37.3,82,74.6), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viking_09();
	this.instance.parent = this;
	this.instance.setTransform(-31.1,-35.2,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-31.1,-35.2,62.3,70.5), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viking_12();
	this.instance.parent = this;
	this.instance.setTransform(-39.7,-36.9,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-39.7,-36.9,79.5,73.8), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viking_20();
	this.instance.parent = this;
	this.instance.setTransform(-34.4,-63.9,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-34.4,-63.9,68.9,127.9), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viking_24();
	this.instance.parent = this;
	this.instance.setTransform(-61.9,-75.8,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-61.9,-75.8,123.8,151.6), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viking_28();
	this.instance.parent = this;
	this.instance.setTransform(-23.7,-20.9,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-23.7,-20.9,47.6,41.8), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viking_31();
	this.instance.parent = this;
	this.instance.setTransform(-33.2,-16.8,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-33.2,-16.8,66.4,33.6), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viking_15();
	this.instance.parent = this;
	this.instance.setTransform(-54.5,-69.6,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-54.5,-69.6,109.1,139.4), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viking_06();
	this.instance.parent = this;
	this.instance.setTransform(-48.8,-34,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-48.8,-34,97.6,68.1), null);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viking_3sss21();
	this.instance.parent = this;
	this.instance.setTransform(-13.3,-18,1.029,1.029);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-18,26.8,36);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viking_3sss21();
	this.instance.parent = this;
	this.instance.setTransform(-13.3,-18,1.029,1.029);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-18,26.8,36);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-313,-156.5,1.043,1.043);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-313,-156.5,626,313);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viking_3sss21.png
	this.instance = new lib.viking_3sss21();
	this.instance.parent = this;
	this.instance.setTransform(68,-15,1.029,1.029);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(81.4,3);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(67.4,3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},48).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},49).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},49).to({state:[{t:this.instance_2}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48).to({_off:false},0).to({_off:true,x:67.4},4,cjs.Ease.get(1)).wait(107));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48).to({_off:false},4,cjs.Ease.get(1)).wait(49).to({startPosition:0},0).to({x:35},4,cjs.Ease.get(1)).wait(49).to({startPosition:0},0).to({x:-17.9},4,cjs.Ease.get(1)).wait(1));

	// Слой 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AxMEtIAApZMAiZAAAIAAJZg");
	var mask_graphics_48 = new cjs.Graphics().p("AxMEtIAApZMAiZAAAIAAJZg");
	var mask_graphics_49 = new cjs.Graphics().p("AwqEtIAApZMAhVAAAIAAJZg");
	var mask_graphics_50 = new cjs.Graphics().p("AwREtIAApZMAgjAAAIAAJZg");
	var mask_graphics_51 = new cjs.Graphics().p("AwCEtIAApZMAgFAAAIAAJZg");
	var mask_graphics_52 = new cjs.Graphics().p("Av8EtIAApZIf5AAIAAJZg");
	var mask_graphics_101 = new cjs.Graphics().p("Av8EtIAApZIf5AAIAAJZg");
	var mask_graphics_102 = new cjs.Graphics().p("Au1EtIAApZIdrAAIAAJZg");
	var mask_graphics_103 = new cjs.Graphics().p("AuDEtIAApZIcHAAIAAJZg");
	var mask_graphics_104 = new cjs.Graphics().p("AtlEtIAApZIbLAAIAAJZg");
	var mask_graphics_105 = new cjs.Graphics().p("AtaEtIAApZIa1AAIAAJZg");
	var mask_graphics_154 = new cjs.Graphics().p("AtaEtIAApZIa1AAIAAJZg");
	var mask_graphics_155 = new cjs.Graphics().p("ArnEtIAApZIXPAAIAAJZg");
	var mask_graphics_156 = new cjs.Graphics().p("AqsEtIAApZIUpAAIAAJZg");
	var mask_graphics_157 = new cjs.Graphics().p("AqsEtIAApZITGAAIAAJZg");
	var mask_graphics_158 = new cjs.Graphics().p("AqsEtIAApZISlAAIAAJZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-26.8,y:-0.6}).wait(48).to({graphics:mask_graphics_48,x:-26.8,y:-0.6}).wait(1).to({graphics:mask_graphics_49,x:-30.2,y:-0.6}).wait(1).to({graphics:mask_graphics_50,x:-32.7,y:-0.6}).wait(1).to({graphics:mask_graphics_51,x:-34.2,y:-0.6}).wait(1).to({graphics:mask_graphics_52,x:-34.8,y:-0.6}).wait(49).to({graphics:mask_graphics_101,x:-34.8,y:-0.6}).wait(1).to({graphics:mask_graphics_102,x:-41.9,y:-0.6}).wait(1).to({graphics:mask_graphics_103,x:-47,y:-0.6}).wait(1).to({graphics:mask_graphics_104,x:-50.1,y:-0.6}).wait(1).to({graphics:mask_graphics_105,x:-51,y:-0.6}).wait(49).to({graphics:mask_graphics_154,x:-51,y:-0.6}).wait(1).to({graphics:mask_graphics_155,x:-62.6,y:-0.6}).wait(1).to({graphics:mask_graphics_156,x:-68.5,y:-0.6}).wait(1).to({graphics:mask_graphics_157,x:-68.5,y:-0.6}).wait(1).to({graphics:mask_graphics_158,x:-68.5,y:-0.6}).wait(1));

	// Символ 47
	this.instance_3 = new lib.Символ47();
	this.instance_3.parent = this;
	this.instance_3.setTransform(2.9,2.3,2.674,2.674);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(159));

	// Символ 23
	this.instance_4 = new lib.Символ23();
	this.instance_4.parent = this;
	this.instance_4.setTransform(4.8,1,2.674,2.674);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(159));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.2,-16,197.8,37.1);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.parent = this;
	this.instance.setTransform(0,20.2,1,1,0,0,0,0,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:22.2,y:20.3},3,cjs.Ease.get(1)).to({rotation:0,y:20.2},3,cjs.Ease.get(1)).to({rotation:22.2,y:20.3},3,cjs.Ease.get(1)).to({rotation:0,y:20.2},3,cjs.Ease.get(1)).to({rotation:22.2,y:20.3},3,cjs.Ease.get(1)).to({rotation:0,y:20.2},3,cjs.Ease.get(1)).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-20,16,40);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ61();
	this.instance.parent = this;
	this.instance.setTransform(86.1,-4.1,0.615,0.615,30,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ60();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(-51,-17.2,147.4,26.2), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 63
	this.instance = new lib.viking_3sss21();
	this.instance.parent = this;
	this.instance.setTransform(19,-3,0.385,0.385);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ47();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5.7,3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// viking_3s21.png
	this.instance_2 = new lib.Символ23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-5,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(-42,-3,74,13.7), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.eee();
	this.instance.parent = this;
	this.instance.setTransform(-6,-55,0.658,0.658);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// Слой 3
	this.instance_1 = new lib.Символ52();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-30.5,-117.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-6.6},9,cjs.Ease.get(-1)).to({y:117},10,cjs.Ease.get(1)).to({y:-0.4},10,cjs.Ease.get(-1)).to({y:-117.8},10,cjs.Ease.get(1)).wait(1));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_1 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_2 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_3 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_4 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_5 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_6 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_7 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_8 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_9 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_10 = new cjs.Graphics().p("Ai9UZMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_11 = new cjs.Graphics().p("Ai9WEMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_12 = new cjs.Graphics().p("Ai9XiMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_13 = new cjs.Graphics().p("Ai9Y0MAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_14 = new cjs.Graphics().p("Ai9Z5MAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_15 = new cjs.Graphics().p("Ai9axMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_16 = new cjs.Graphics().p("Ai9bdMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_17 = new cjs.Graphics().p("Ai9b9MAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_18 = new cjs.Graphics().p("Ai9cQMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_19 = new cjs.Graphics().p("Ai9cWMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_20 = new cjs.Graphics().p("Ai9cQMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_21 = new cjs.Graphics().p("Ai9b+MAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_22 = new cjs.Graphics().p("Ai9bgMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_23 = new cjs.Graphics().p("Ai9a2MAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_24 = new cjs.Graphics().p("Ai9aBMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_25 = new cjs.Graphics().p("Ai9Y/MAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_26 = new cjs.Graphics().p("Ai9XxMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_27 = new cjs.Graphics().p("Ai9WYMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_28 = new cjs.Graphics().p("Ai9UyMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_29 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_30 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_31 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_32 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_33 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_34 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_35 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_36 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_37 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_38 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");
	var mask_graphics_39 = new cjs.Graphics().p("Ai9TGMAAAgmLIF7AAMAAAAmLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.2,y:1.8}).wait(1).to({graphics:mask_graphics_1,x:0.2,y:3.2}).wait(1).to({graphics:mask_graphics_2,x:0.2,y:7.4}).wait(1).to({graphics:mask_graphics_3,x:0.2,y:14.4}).wait(1).to({graphics:mask_graphics_4,x:0.2,y:24.1}).wait(1).to({graphics:mask_graphics_5,x:0.2,y:36.7}).wait(1).to({graphics:mask_graphics_6,x:0.2,y:52.1}).wait(1).to({graphics:mask_graphics_7,x:0.2,y:70.2}).wait(1).to({graphics:mask_graphics_8,x:0.2,y:91.2}).wait(1).to({graphics:mask_graphics_9,x:0.2,y:114.9}).wait(1).to({graphics:mask_graphics_10,x:0.2,y:130.5}).wait(1).to({graphics:mask_graphics_11,x:0.2,y:141.2}).wait(1).to({graphics:mask_graphics_12,x:0.2,y:150.6}).wait(1).to({graphics:mask_graphics_13,x:0.2,y:158.8}).wait(1).to({graphics:mask_graphics_14,x:0.2,y:165.7}).wait(1).to({graphics:mask_graphics_15,x:0.2,y:171.3}).wait(1).to({graphics:mask_graphics_16,x:0.2,y:175.7}).wait(1).to({graphics:mask_graphics_17,x:0.2,y:178.9}).wait(1).to({graphics:mask_graphics_18,x:0.2,y:180.8}).wait(1).to({graphics:mask_graphics_19,x:0.2,y:181.4}).wait(1).to({graphics:mask_graphics_20,x:0.2,y:180.8}).wait(1).to({graphics:mask_graphics_21,x:0.2,y:179}).wait(1).to({graphics:mask_graphics_22,x:0.2,y:176}).wait(1).to({graphics:mask_graphics_23,x:0.2,y:171.8}).wait(1).to({graphics:mask_graphics_24,x:0.2,y:166.5}).wait(1).to({graphics:mask_graphics_25,x:0.2,y:159.9}).wait(1).to({graphics:mask_graphics_26,x:0.2,y:152.1}).wait(1).to({graphics:mask_graphics_27,x:0.2,y:143.2}).wait(1).to({graphics:mask_graphics_28,x:0.2,y:133}).wait(1).to({graphics:mask_graphics_29,x:0.2,y:121.2}).wait(1).to({graphics:mask_graphics_30,x:0.2,y:98.5}).wait(1).to({graphics:mask_graphics_31,x:0.2,y:78.2}).wait(1).to({graphics:mask_graphics_32,x:0.2,y:60.3}).wait(1).to({graphics:mask_graphics_33,x:0.2,y:44.8}).wait(1).to({graphics:mask_graphics_34,x:0.2,y:31.7}).wait(1).to({graphics:mask_graphics_35,x:0.2,y:20.9}).wait(1).to({graphics:mask_graphics_36,x:0.2,y:12.5}).wait(1).to({graphics:mask_graphics_37,x:0.2,y:6.6}).wait(1).to({graphics:mask_graphics_38,x:0.2,y:3}).wait(1).to({graphics:mask_graphics_39,x:0.2,y:1.8}).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ50();
	this.instance_2.parent = this;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.8,-132.8,38,256.8);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 54
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(368.7,-4.3,0.621,0.621,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.68,scaleY:0.68},7,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,y:-4.2},7,cjs.Ease.get(1)).to({regX:0.1,regY:-0.1,scaleX:0.69,scaleY:0.69,y:-4.3},7,cjs.Ease.get(-1)).to({scaleX:0.62,scaleY:0.62},8,cjs.Ease.get(1)).wait(1));

	// Символ 53
	this.instance_1 = new lib.Символ53();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.1,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.85,scaleY:0.85},7,cjs.Ease.get(-1)).to({scaleX:0.7,scaleY:0.7,y:-11.1},7,cjs.Ease.get(1)).to({regX:0.1,regY:-0.1,scaleX:0.84,scaleY:0.84,x:11.2,y:-11.2},7,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,x:11.1,y:-11},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.9,-53,547.8,83);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.92,scaleY:0.92},5,cjs.Ease.get(-1)).to({scaleX:0.82,scaleY:0.82},6,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.6,-48.6,97.2,97.2);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-74,-196,190,372), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14,cjs.Ease.get(1)).to({alpha:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-3,20,8);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ49();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.viking_3s21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.6,-146,1.271,1.271,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-25,-146,50,287.6), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-40.9,-37.3,82,74.6), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-31.1,-35.2,62.3,70.5), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-39.7,-36.9,79.5,73.8), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 - копия
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(-20.1,18,1.864,0.905,-30,0,0,-0.4,0.4);
	this.instance.alpha = 0.379;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-12.3,12.4,1.323,1.323,0,0,0,-0.1,0.1);
	this.instance_2.alpha = 0.59;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-34.4,-63.9,68.9,127.9), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-61.9,-75.8,123.8,151.6), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-23.7,-20.9,47.6,41.8), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-33.2,-16.8,66.4,33.6), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 - копия
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(-22,22.5,1.859,1.323,21.7,0,0,-0.4,0.2);
	this.instance.alpha = 0.461;

	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-34.9,30.1,1.888,1.323,-47.3,0,0,-0.3,0.1);
	this.instance_1.alpha = 0.352;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-28.2,17.4,3.42,1.323,0,0,0,-0.2,0.1);
	this.instance_3.alpha = 0.59;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-54.5,-69.6,109.1,139.4), null);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5));

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.parent = this;
	this.instance.setTransform(0.6,-2.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.4,-5.9,73.9,13.7);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;

	this.instance_1 = new lib.Символ42();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-48.6,-48.6,97.2,97.2), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ44();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-48.6,-48.6,97.2,97.2), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.77,0.77);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(-18.4,124,1,1,0,0,0,-18.4,124);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:10.5,y:124.1},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:22.5},10,cjs.Ease.get(1)).to({regX:-18.3,scaleX:1,scaleY:1,rotation:11.1,x:-18.3},10,cjs.Ease.get(-1)).to({regX:-18.4,scaleX:1,scaleY:1,rotation:0,x:-18.4,y:124},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-196,190,372);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(16.5,-63.6,1,1,19.2,0,0,16.4,-63.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:10.3,x:16.6,y:-63.7},14,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:16.4,y:-63.6},16,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:9.8,x:16.5,y:-63.7},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:19.2,y:-63.6},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.4,-92.7,148.9,167.5);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(29.9,-46.4,1,1,0,0,0,29.9,-46.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:9},10,cjs.Ease.get(-1)).to({rotation:19,x:30,y:-46.5},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:9.3,y:-46.3},11,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:29.9,y:-46.4},10,cjs.Ease.get(1)).to({rotation:36.7,x:30},6,cjs.Ease.get(1)).to({rotation:0,x:29.9},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.4,-63.9,68.9,127.9);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(5.1,13.6);
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-48.8,-34,97.6,68.1), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 13
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(-4.2,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 17
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.5,-53.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-38.6,-88.9,77.3,177.9), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 5
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(0,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 19
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,-55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-94.4,-92.7,148.9,190.5), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(4.4,31.6,1,1,0,0,0,4.4,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.1,x:4,y:32.2},16,cjs.Ease.get(-1)).to({rotation:7,x:3.4,y:32.8},18,cjs.Ease.get(1)).to({rotation:3.3,x:3.9,y:32.2},18,cjs.Ease.get(-1)).to({rotation:0,x:4.4,y:31.6},17,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.8,-34,97.6,68.1);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(25.7,39,0.779,0.779);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-32,-113.7,148,289.8), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 27
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(-29.2,-29.5,1,1,0,0,0,27.6,-30.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-30.9,rotation:2,y:-29.7},10,cjs.Ease.get(-1)).to({regY:-30.8,rotation:4.2,y:-29.5},13,cjs.Ease.get(1)).to({rotation:2,y:-29.6},13,cjs.Ease.get(-1)).to({rotation:0,y:-29.5},8,cjs.Ease.get(1)).wait(1).to({regX:27.4,regY:-30.9,scaleY:0.51,rotation:-1.1,x:-29.9,y:-41.5},3,cjs.Ease.get(-1)).to({regX:27.2,regY:-31,scaleX:1.58,scaleY:0.81,x:-25.9,y:-37.3},2,cjs.Ease.get(1)).to({regX:27.6,regY:-30.8,scaleX:1,scaleY:1,rotation:0,x:-29.2,y:-29.5},2,cjs.Ease.get(1)).wait(1));

	// Символ 26
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15,-75.7,1,1,0,0,0,-26,-75.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-75.5,rotation:3.8,y:-75.5},10,cjs.Ease.get(-1)).to({regY:-75.7,rotation:7.9,y:-75.7},13,cjs.Ease.get(1)).to({rotation:3.8},13,cjs.Ease.get(-1)).to({rotation:0},8,cjs.Ease.get(1)).wait(1).to({rotation:7.9},5,cjs.Ease.get(-1)).to({rotation:0},2,cjs.Ease.get(-1)).wait(1));

	// Символ 15
	this.instance_2 = new lib.Символ15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-2.7,-45.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-92.7,191,190.5);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 3
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(-14.7,-74.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 28
	this.instance_1 = new lib.Символ28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-95.5,-108.7,191,222.5), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.xp = new lib.Символ64();
	this.xp.parent = this;
	this.xp.setTransform(-9.8,-122);

	this.timeline.addTween(cjs.Tween.get(this.xp).wait(53));

	// viking_12.png
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(-4.6,-30);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).to({alpha:0.512},2).to({alpha:0},3).wait(1));

	// viking_31.png
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-35.8,120.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45).to({scaleX:1.46,scaleY:1.46,x:-49.5,y:199.5},4).to({scaleX:1,scaleY:1,x:-35.8,y:120.8},3).wait(1));

	// viking_28.png
	this.instance_2 = new lib.Символ9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(56.8,124.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45).to({scaleX:1.46,scaleY:1.46,x:85.5,y:205.5},4).to({scaleX:1,scaleY:1,x:56.8,y:124.9},3).wait(1));

	// viking_06.png
	this.instance_3 = new lib.Символ29();
	this.instance_3.parent = this;
	this.instance_3.setTransform(22.5,-24.4,1,1,0,0,0,22,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:21.9,rotation:-1.5,x:19.5,y:-23.9},11,cjs.Ease.get(-1)).to({regX:22,rotation:-3.5,x:15.8,y:-23.2},13,cjs.Ease.get(1)).to({rotation:-1.5,x:19.4,y:-23.7},13,cjs.Ease.get(-1)).to({rotation:0,x:22.5,y:-24.4},7,cjs.Ease.get(1)).wait(1).to({regX:21.9,scaleX:1.46,scaleY:1.46,rotation:-3.5,x:25.7,y:-10.5},4,cjs.Ease.get(-1)).to({regX:22,scaleX:1,scaleY:1,rotation:0,x:22.5,y:-24.4},3,cjs.Ease.get(-1)).wait(1));

	// viking_24.png
	this.instance_4 = new lib.Символ11();
	this.instance_4.parent = this;
	this.instance_4.setTransform(64.9,111.2,1,1,0,0,0,56,68.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:56.1,rotation:-1.3,x:65},11,cjs.Ease.get(-1)).to({regX:56,regY:68.5,rotation:-3.2,x:64.9,y:111.3},13,cjs.Ease.get(1)).to({rotation:-1.5,y:111.2},13,cjs.Ease.get(-1)).to({regY:68.4,rotation:0},7,cjs.Ease.get(1)).wait(1).to({regX:56.1,regY:68.5,scaleX:1.46,scaleY:1.46,rotation:-3.2,x:97.5,y:185.6},4,cjs.Ease.get(-1)).to({regX:56,regY:68.4,scaleX:1,scaleY:1,rotation:0,x:64.9,y:111.2},3,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-133,191,278.8);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop;
	}
	this.frame_49 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(1));

	// Слой 1
	this.vik1 = new lib.Символ1();
	this.vik1.parent = this;
	this.vik1.setTransform(-0.5,-6.4);

	this.timeline.addTween(cjs.Tween.get(this.vik1).to({y:0.1},11,cjs.Ease.get(-1)).to({y:7.8},13,cjs.Ease.get(1)).to({y:1},12,cjs.Ease.get(-1)).to({y:-6.4},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-139.4,191,278.8);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_55 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(20).call(this.frame_34).wait(21).call(this.frame_55).wait(1));

	// Слой 1
	this.viki = new lib.Символ37();
	this.viki.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.viki).to({x:-94.7},14,cjs.Ease.get(1)).to({x:88},20,cjs.Ease.get(1)).to({x:-94.7},21,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-139.4,191,278.8);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(8));

	// Слой 8
	this.instance = new lib.Символ65();
	this.instance.parent = this;
	this.instance.setTransform(-227.1,123,0.697,0.697);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16));

	// Слой 7
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(371.8,-11.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:272.6,y:-7.3,alpha:1},7,cjs.Ease.get(1)).wait(1).to({x:371.8,y:-11.2,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Слой 6
	this.instance_2 = new lib.Символ59();
	this.instance_2.parent = this;
	this.instance_2.setTransform(184.7,124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:162.7,alpha:0},7,cjs.Ease.get(1)).wait(1).to({y:124.5,alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.mech = new lib.Символ36();
	this.mech.parent = this;
	this.mech.setTransform(111.2,312.4);
	this.mech.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mech).to({y:15.6,alpha:1},7,cjs.Ease.get(1)).wait(1).to({y:312.4,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.vik = new lib.Символ38();
	this.vik.parent = this;
	this.vik.setTransform(-12.8,24);

	this.timeline.addTween(cjs.Tween.get(this.vik).to({regX:-0.1,scaleX:1.53,scaleY:1.53,x:-0.2,y:60.9},7,cjs.Ease.get(1)).wait(1).to({regX:0,scaleX:1,scaleY:1,x:-12.8,y:24},7,cjs.Ease.get(1)).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ48();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-196.4,-30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0},7).wait(1).to({alpha:1},7).wait(1));

	// Слой 2
	this.instance_4 = new lib.Анимация1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-2,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.35,scaleY:1.35,y:43.7},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,y:-7.5},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-322.5,-164,719.3,652.5);


// stage content:
(lib.viking600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var zagl = document.getElementById("zagl");
		zagl.style.display = 'none';


		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		stage.canvas.style.cursor = "none";
		this.priz.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.priz.x = stage.mouseX/window.devicePixelRatio;
			this.priz.y = stage.mouseY/window.devicePixelRatio;
		}
		
		this.cursor = "none";
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		  function fl_MouseOverHandler_5()
		{
		    _this.priz.gotoAndStop(1);    
			_this.main.gotoAndPlay(1);
			_this.main.vik.viki.gotoAndPlay(1);
			_this.main.vik.viki.vik1.xp.gotoAndPlay(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.priz.gotoAndStop(0);    	
		    _this.main.gotoAndPlay(9);
			_this.main.vik.viki.gotoAndStop(0);
			_this.main.vik.gotoAndStop(0);
			_this.main.vik.viki.vik1.xp.gotoAndPlay(6);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.vlevo.addEventListener("mouseover", fl_MouseOverHandler_11);
		
		function fl_MouseOverHandler_11()
		{
			_this.main.vik.gotoAndPlay(35);
		}
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.vpravo.addEventListener("mouseover", fl_MouseOverHandler_22);
		
		function fl_MouseOverHandler_22()
		{
			_this.main.vik.gotoAndPlay(15);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.priz = new lib.Символ39();
	this.priz.parent = this;
	this.priz.setTransform(650.4,116.8);

	this.timeline.addTween(cjs.Tween.get(this.priz).wait(1));

	// Слой 4
	this.vpravo = new lib.Символ46();
	this.vpravo.parent = this;
	this.vpravo.setTransform(143.2,144.4,1,5.269);
	new cjs.ButtonHelper(this.vpravo, 0, 1, 2, false, new lib.Символ46(), 3);

	this.vlevo = new lib.Символ45();
	this.vlevo.parent = this;
	this.vlevo.setTransform(457.6,144.4,1,5.269);
	new cjs.ButtonHelper(this.vlevo, 0, 1, 2, false, new lib.Символ45(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.vlevo},{t:this.vpravo}]}).wait(1));

	// Слой 1
	this.main = new lib.Символ21();
	this.main.parent = this;
	this.main.setTransform(301,156.9);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(278.4,130,719.4,665.4);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bey.png?1484583165321", id:"bey"},
		{src:"images/bg.jpg?1484583165321", id:"bg"},
		{src:"images/eee.png?1484583165321", id:"eee"},
		{src:"images/mech.png?1484583165321", id:"mech"},
		{src:"images/navedi.png?1484583165321", id:"navedi"},
		{src:"images/redeyes.png?1484583165321", id:"redeyes"},
		{src:"images/viking_03.png?1484583165321", id:"viking_03"},
		{src:"images/viking_06.png?1484583165321", id:"viking_06"},
		{src:"images/viking_09.png?1484583165321", id:"viking_09"},
		{src:"images/viking_12.png?1484583165321", id:"viking_12"},
		{src:"images/viking_15.png?1484583165321", id:"viking_15"},
		{src:"images/viking_20.png?1484583165321", id:"viking_20"},
		{src:"images/viking_24.png?1484583165321", id:"viking_24"},
		{src:"images/viking_28.png?1484583165321", id:"viking_28"},
		{src:"images/viking_31.png?1484583165321", id:"viking_31"},
		{src:"images/viking_321.png?1484583165321", id:"viking_321"},
		{src:"images/viking_3s21.png?1484583165321", id:"viking_3s21"},
		{src:"images/viking_3ss21.png?1484583165321", id:"viking_3ss21"},
		{src:"images/viking_3sss21.png?1484583165321", id:"viking_3sss21"},
		{src:"images/vraga.png?1484583165321", id:"vraga"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;