(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,629,338);


(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,59);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,80);


(lib.girl = function() {
	this.initialize(img.girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,316);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,71);


(lib.service = function() {
	this.initialize(img.service);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,105);


(lib.service1 = function() {
	this.initialize(img.service1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,105);


(lib.service2 = function() {
	this.initialize(img.service2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,107);


(lib.service3 = function() {
	this.initialize(img.service3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,103);// helper functions:

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


(lib.Tween46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguCDIAJg3IAwAAIgIA3gAgHiCIA2AAIgoCrIgdAHg");
	this.shape.setTransform(210.1,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA3BAIhZAAIgfBDIgzAAICFkHIAzAAIAxEAIgyAJgAAxAYIgQhkIgwBkIBAAAg");
	this.shape_1.setTransform(190.3,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag7CDIAijaIhLAAIAHgrIDCAAIAAArIhNAAIgiDag");
	this.shape_2.setTransform(170.5,-1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhbCDIApkFICOAAIgFAqIheAAIgKA/IBHAAIAAApIhOAAIgLBJIBhAAIgHAqg");
	this.shape_3.setTransform(149.4,-1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiCBZQAQgDAMgHQAMgIAJgNQAJgMAIgVQAHgTAIgdIAfhuICVAAIgqEFIgxAAIAjjbIg4AAIgWBQQgLAngLAZQgQAfgKALQgHAJgIAGQgJAHgJAEQgcAKgSADg");
	this.shape_4.setTransform(125.9,-1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjCGQgLgCgKgEQgJgEgIgGQgJgGgGgHIgMgRIgIgUQgFgNgCgiQAAgSADgRQADgRAGgQQAGgQAIgOQAJgNALgLIARgPQAKgGAKgFQALgEALgCQAKgCANAAIAXACQALACAKAEQAKAEAIAGQAIAFAGAIIAMARIAIATQAHAeAAARQAAATgDAQQgDASgGAQQgGAPgIAOQgJAPgLAKIgRAPQgKAGgKAFQgKAEgLACQgMACgLAAgAgKhbQgLAFgKAJQgHAIgGAKQgGALgFANQgFAOgCAPQgDAOAAAQQAAARAEAOQADAOAHAIQAHAKAKAFQAKAEANAAQAMAAALgEQAKgGAKgJQAHgHAGgLQAHgLAEgMQAFgNACgQQADgOAAgQQAAgSgEgOQgDgNgHgJQgHgJgKgFQgKgEgNAAQgMAAgKAEg");
	this.shape_5.setTransform(92.7,-1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhZCDIAqkFICJAAIAAAsIhfAAIgjDZg");
	this.shape_6.setTransform(71.2,-1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhcCDIArkFICOAAIgGAqIhfAAIgJA/IBGAAIAAApIhMAAIgNBJIBhAAIgHAqg");
	this.shape_7.setTransform(52.9,-1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AitCDIAqkFIAxAAIgjDaIBPAAIAjjaIAxAAIgjDaIBPAAIAijaIAyAAIgpEFg");
	this.shape_8.setTransform(25.2,-1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA3BAIhZAAIgfBDIgzAAICFkHIAzAAIAxEAIgyAJgAAxAYIgQhkIgwBkIBAAAg");
	this.shape_9.setTransform(-7.1,-1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AheCDIAqkFIBDAAQAUAAAPAEQAPAEAKAJQAKAHAFALQAFALAAAOQAAAMgDAKQgEALgGAHQgGAIgJAHQgIAFgKAEIAQAIQAHAFAFAGQAFAIADAIQADAJAAAKQAAAUgIAQQgIAPgOALQgOAKgUAGQgUAFgXAAgAgpBeIAYAAQANAAAJgCQALgDAIgGQAHgGAEgIQAEgJAAgLQAAgJgDgHQgDgHgGgFQgGgEgJgDQgJgCgMAAIgSAAgAgWgWIAUAAQAKAAAJgCQAJgDAHgFQAHgFAEgHQAEgJAAgJQAAgPgJgIQgKgJgTAAIgVAAg");
	this.shape_10.setTransform(-28.4,-1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhhCDIAqkFIA9AAQAWAAASAFQARAEALAKQAMAJAGAPQAGANAAASQAAAUgIARQgHARgOALQgPAMgUAHQgeAGgRAAIgTAAIgPBhgAgagFIARAAQANAAAMgCQAKgEAJgGQAGgHAEgJQAEgJAAgLQAAgKgDgGQgDgHgFgFQgGgFgIgCQgJgDgMAAIgQAAg");
	this.shape_11.setTransform(-56.3,-1.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgjCGQgLgCgKgEQgJgEgIgGQgJgGgGgHIgMgRIgIgUQgFgNgCgiQAAgSADgRQADgRAGgQQAGgQAIgOQAJgNALgLIARgPQAKgGAKgFQALgEALgCQAKgCANAAIAXACQALACAKAEQAKAEAIAGQAIAFAGAIIAMARIAIATQAHAeAAARQAAATgDAQQgDASgGAQQgGAPgIAOQgJAPgLAKIgRAPQgKAGgKAFQgKAEgLACQgMACgLAAgAgKhbQgLAFgKAJQgHAIgGAKQgGALgFANQgFAOgCAPQgDAOAAAQQAAARAEAOQADAOAHAIQAHAKAKAFQAKAEANAAQAMAAALgEQAKgGAKgJQAHgHAGgLQAHgLAEgMQAFgNACgQQADgOAAgQQAAgSgEgOQgDgNgHgJQgHgJgKgFQgKgEgNAAQgMAAgKAEg");
	this.shape_12.setTransform(-79.9,-1.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgoCAIgSgIQgIgGgHgHQgHgHgGgJIgIgTQgFgOgDgiQAAgRADgOQADgQAFgPQAFgOAGgNQAIgMAJgLQAJgLAKgIQALgJANgGQAMgGANgDQAOgEAPAAQATAAATAHQARAFAOALIgOAtQgMgMgOgGQgPgHgPAAQgJAAgKADQgJACgGAFQgPAIgMAQQgMAQgFAUQgGAUAAAVQAAATAEAOQAFAOAHAJQAJAJALAFQALAFANAAQAPAAARgGQAPgFAPgJIAAAsQgPAIgRAFQgSAFgTAAQgdgDgNgFg");
	this.shape_13.setTransform(-103.4,-1.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAeCDIAShxIhkAAIgSBxIgyAAIAqkFIAxAAIgQBoIBkAAIAQhoIAyAAIgqEFg");
	this.shape_14.setTransform(-127.7,-1.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgjCGQgLgCgKgEQgJgEgIgGQgJgGgGgHIgMgRIgIgUQgFgNgCgiQAAgSADgRQADgRAGgQQAGgQAIgOQAJgNALgLIARgPQAKgGAKgFQALgEALgCQAKgCANAAIAXACQALACAKAEQAKAEAIAGQAIAFAGAIIAMARIAIATQAHAeAAARQAAATgDAQQgDASgGAQQgGAPgIAOQgJAPgLAKIgRAPQgKAGgKAFQgKAEgLACQgMACgLAAgAgKhbQgLAFgKAJQgHAIgGAKQgGALgFANQgFAOgCAPQgDAOAAAQQAAARAEAOQADAOAHAIQAHAKAKAFQAKAEANAAQAMAAALgEQAKgGAKgJQAHgHAGgLQAHgLAEgMQAFgNACgQQADgOAAgQQAAgSgEgOQgDgNgHgJQgHgJgKgFQgKgEgNAAQgMAAgKAEg");
	this.shape_15.setTransform(-153.6,-1.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAdCDIAijaIhiAAIgiDaIgyAAIAqkFIDFAAIgqEFg");
	this.shape_16.setTransform(-179.2,-1.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgoCAIgSgIQgIgGgHgHQgHgHgFgJIgJgTQgFgOgDgiQAAgRADgOQADgQAEgPQAFgOAHgNQAIgMAJgLQAJgLAKgIQAMgJAMgGQAMgGANgDQANgEAPAAQAUAAATAHQARAFAOALIgOAtQgNgMgNgGQgOgHgQAAQgJAAgKADQgIACgIAFQgPAIgLAQQgMAQgFAUQgGAUAAAVQAAATAEAOQAFAOAHAJQAJAJALAFQALAFANAAQAPAAARgGQAPgFAPgJIAAAsQgPAIgRAFQgTAFgSAAQgdgDgNgFg");
	this.shape_17.setTransform(-202.2,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216.7,-21,433.4,42);


(lib.Tween45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguCDIAJg3IAwAAIgIA3gAgHiCIA2AAIgoCrIgdAHg");
	this.shape.setTransform(210.1,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA3BAIhZAAIgfBDIgzAAICFkHIAzAAIAxEAIgyAJgAAxAYIgQhkIgwBkIBAAAg");
	this.shape_1.setTransform(190.3,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag7CDIAijaIhLAAIAHgrIDCAAIAAArIhNAAIgiDag");
	this.shape_2.setTransform(170.5,-1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhbCDIApkFICOAAIgFAqIheAAIgKA/IBHAAIAAApIhOAAIgLBJIBhAAIgHAqg");
	this.shape_3.setTransform(149.4,-1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiCBZQAQgDAMgHQAMgIAJgNQAJgMAIgVQAHgTAIgdIAfhuICVAAIgqEFIgxAAIAjjbIg4AAIgWBQQgLAngLAZQgQAfgKALQgHAJgIAGQgJAHgJAEQgcAKgSADg");
	this.shape_4.setTransform(125.9,-1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjCGQgLgCgKgEQgJgEgIgGQgJgGgGgHIgMgRIgIgUQgFgNgCgiQAAgSADgRQADgRAGgQQAGgQAIgOQAJgNALgLIARgPQAKgGAKgFQALgEALgCQAKgCANAAIAXACQALACAKAEQAKAEAIAGQAIAFAGAIIAMARIAIATQAHAeAAARQAAATgDAQQgDASgGAQQgGAPgIAOQgJAPgLAKIgRAPQgKAGgKAFQgKAEgLACQgMACgLAAgAgKhbQgLAFgKAJQgHAIgGAKQgGALgFANQgFAOgCAPQgDAOAAAQQAAARAEAOQADAOAHAIQAHAKAKAFQAKAEANAAQAMAAALgEQAKgGAKgJQAHgHAGgLQAHgLAEgMQAFgNACgQQADgOAAgQQAAgSgEgOQgDgNgHgJQgHgJgKgFQgKgEgNAAQgMAAgKAEg");
	this.shape_5.setTransform(92.7,-1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhZCDIAqkFICJAAIAAAsIhfAAIgjDZg");
	this.shape_6.setTransform(71.2,-1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhcCDIArkFICOAAIgGAqIhfAAIgJA/IBGAAIAAApIhMAAIgNBJIBhAAIgHAqg");
	this.shape_7.setTransform(52.9,-1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AitCDIAqkFIAxAAIgjDaIBPAAIAjjaIAxAAIgjDaIBPAAIAijaIAyAAIgpEFg");
	this.shape_8.setTransform(25.2,-1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA3BAIhZAAIgfBDIgzAAICFkHIAzAAIAxEAIgyAJgAAxAYIgQhkIgwBkIBAAAg");
	this.shape_9.setTransform(-7.1,-1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AheCDIAqkFIBDAAQAUAAAPAEQAPAEAKAJQAKAHAFALQAFALAAAOQAAAMgDAKQgEALgGAHQgGAIgJAHQgIAFgKAEIAQAIQAHAFAFAGQAFAIADAIQADAJAAAKQAAAUgIAQQgIAPgOALQgOAKgUAGQgUAFgXAAgAgpBeIAYAAQANAAAJgCQALgDAIgGQAHgGAEgIQAEgJAAgLQAAgJgDgHQgDgHgGgFQgGgEgJgDQgJgCgMAAIgSAAgAgWgWIAUAAQAKAAAJgCQAJgDAHgFQAHgFAEgHQAEgJAAgJQAAgPgJgIQgKgJgTAAIgVAAg");
	this.shape_10.setTransform(-28.4,-1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhhCDIAqkFIA9AAQAWAAASAFQARAEALAKQAMAJAGAPQAGANAAASQAAAUgIARQgHARgOALQgPAMgUAHQgeAGgRAAIgTAAIgPBhgAgagFIARAAQANAAAMgCQAKgEAJgGQAGgHAEgJQAEgJAAgLQAAgKgDgGQgDgHgFgFQgGgFgIgCQgJgDgMAAIgQAAg");
	this.shape_11.setTransform(-56.3,-1.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgjCGQgLgCgKgEQgJgEgIgGQgJgGgGgHIgMgRIgIgUQgFgNgCgiQAAgSADgRQADgRAGgQQAGgQAIgOQAJgNALgLIARgPQAKgGAKgFQALgEALgCQAKgCANAAIAXACQALACAKAEQAKAEAIAGQAIAFAGAIIAMARIAIATQAHAeAAARQAAATgDAQQgDASgGAQQgGAPgIAOQgJAPgLAKIgRAPQgKAGgKAFQgKAEgLACQgMACgLAAgAgKhbQgLAFgKAJQgHAIgGAKQgGALgFANQgFAOgCAPQgDAOAAAQQAAARAEAOQADAOAHAIQAHAKAKAFQAKAEANAAQAMAAALgEQAKgGAKgJQAHgHAGgLQAHgLAEgMQAFgNACgQQADgOAAgQQAAgSgEgOQgDgNgHgJQgHgJgKgFQgKgEgNAAQgMAAgKAEg");
	this.shape_12.setTransform(-79.9,-1.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgoCAIgSgIQgIgGgHgHQgHgHgGgJIgIgTQgFgOgDgiQAAgRADgOQADgQAFgPQAFgOAGgNQAIgMAJgLQAJgLAKgIQALgJANgGQAMgGANgDQAOgEAPAAQATAAATAHQARAFAOALIgOAtQgMgMgOgGQgPgHgPAAQgJAAgKADQgJACgGAFQgPAIgMAQQgMAQgFAUQgGAUAAAVQAAATAEAOQAFAOAHAJQAJAJALAFQALAFANAAQAPAAARgGQAPgFAPgJIAAAsQgPAIgRAFQgSAFgTAAQgdgDgNgFg");
	this.shape_13.setTransform(-103.4,-1.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAeCDIAShxIhkAAIgSBxIgyAAIAqkFIAxAAIgQBoIBkAAIAQhoIAyAAIgqEFg");
	this.shape_14.setTransform(-127.7,-1.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgjCGQgLgCgKgEQgJgEgIgGQgJgGgGgHIgMgRIgIgUQgFgNgCgiQAAgSADgRQADgRAGgQQAGgQAIgOQAJgNALgLIARgPQAKgGAKgFQALgEALgCQAKgCANAAIAXACQALACAKAEQAKAEAIAGQAIAFAGAIIAMARIAIATQAHAeAAARQAAATgDAQQgDASgGAQQgGAPgIAOQgJAPgLAKIgRAPQgKAGgKAFQgKAEgLACQgMACgLAAgAgKhbQgLAFgKAJQgHAIgGAKQgGALgFANQgFAOgCAPQgDAOAAAQQAAARAEAOQADAOAHAIQAHAKAKAFQAKAEANAAQAMAAALgEQAKgGAKgJQAHgHAGgLQAHgLAEgMQAFgNACgQQADgOAAgQQAAgSgEgOQgDgNgHgJQgHgJgKgFQgKgEgNAAQgMAAgKAEg");
	this.shape_15.setTransform(-153.6,-1.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAdCDIAijaIhiAAIgiDaIgyAAIAqkFIDFAAIgqEFg");
	this.shape_16.setTransform(-179.2,-1.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgoCAIgSgIQgIgGgHgHQgHgHgFgJIgJgTQgFgOgDgiQAAgRADgOQADgQAEgPQAFgOAHgNQAIgMAJgLQAJgLAKgIQAMgJAMgGQAMgGANgDQANgEAPAAQAUAAATAHQARAFAOALIgOAtQgNgMgNgGQgOgHgQAAQgJAAgKADQgIACgIAFQgPAIgLAQQgMAQgFAUQgGAUAAAVQAAATAEAOQAFAOAHAJQAJAJALAFQALAFANAAQAPAAARgGQAPgFAPgJIAAAsQgPAIgRAFQgTAFgSAAQgdgDgNgFg");
	this.shape_17.setTransform(-202.2,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216.7,-21,433.4,42);


(lib.Tween43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-96,-27,0.785,0.785);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-27,185.4,55.8);


(lib.Tween42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglBoIAIgsIAmAAIgHAsgAgGhnIArAAIgfCHIgXAGg");
	this.shape.setTransform(173,-1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhHBoIAhjPIAmAAIgKBLIAKAAQARAAANAEQAOAEAJAHQAJAIAFAKQAFALAAAPIgCAQQgCAHgDAHQgGAOgMAJQgMAKgRAEQgRAGgUAAgAgbBJIAMAAQALAAAIgDQAJgDAGgFQAHgFADgIQAEgHAAgKQAAgHgDgFQgCgGgFgEQgEgEgHgCQgHgCgIAAIgNAAg");
	this.shape_1.setTransform(160,-1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfBmIgPgIIgMgJIgJgNIgHgPQgEgLgCgbQAAgNACgMQACgMAEgMQAEgLAGgKQAFgKAHgIQAHgJAJgHQAJgGAJgFQAKgFAKgCQALgDALAAQAQAAAPAFQANAEALAJIgKAkQgLgKgKgFQgMgFgMAAQgIAAgHACQgHABgFAEQgMAHgJAMQgJANgFAQQgEAPAAARQAAAPADALQAEALAGAHQAGAIAJADQAJAEAKAAQAMAAANgFQAMgDAMgIIAAAjQgMAGgNAEQgPAEgOAAQgXgCgKgDg");
	this.shape_2.setTransform(144.1,-1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbBoIAWiQIhqCQIgnAAIAijPIAlAAIgXCNIBoiNIAoAAIggDPg");
	this.shape_3.setTransform(124.9,-1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhmBHQANgDAJgGQAJgFAHgKQAHgKAGgRQAGgPAHgXIAYhXIB1AAIggDOIgoAAIAcisIgsAAIgRA/QgJAegJATQgMAagIAIQgGAIgGAEQgHAGgHADQgXAIgNABg");
	this.shape_4.setTransform(104,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAsAzIhGAAIgaA0IgnAAIBojPIApAAIAmDKIgnAHgAAnASIgNhPIgmBPIAzAAg");
	this.shape_5.setTransform(83.1,-1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAFBoIAMhJQgRADgNAAQgPAAgMgDQgMgDgIgHQgIgHgEgKQgEgJAAgOQAAgLACgMIAKg9IAmAAIgJA/IgCAQQABAMAHAGQAEADAGABQAGACAJAAQANAAANgDIAPhkIAoAAIghDPg");
	this.shape_6.setTransform(66.8,-1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAsAzIhGAAIgZA0IgoAAIBpjPIAnAAIAnDKIgoAHgAAnASIgNhPIgmBPIAzAAg");
	this.shape_7.setTransform(45.8,-1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAYBoIANhaIhOAAIgOBaIgnAAIAgjPIAoAAIgOBSIBQAAIAMhSIAoAAIghDPg");
	this.shape_8.setTransform(27.6,-1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AArBoIAgjPIAoAAIghDPgAhyBoIAijPIAmAAIgLBLIAKAAQASAAAOAEQAMAEAJAHQAJAIAGAKQAEALAAAPIgCAQQgBAHgEAHQgGAOgMAJQgLAKgRAEQgQAGgVAAgAhGBJIAMAAQALAAAJgDQAJgDAGgFQAHgFADgIQAEgIAAgJQAAgHgCgFQgDgHgEgDQgFgEgGgCQgIgCgIAAIgOAAg");
	this.shape_9.setTransform(-0.5,-1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhNBoIAhjPIAwAAQATAAANAEQANAEAKAIQAJAHAEALQAFALABAPQgBAQgFANQgHANgLAIQgLAKgQAFQgYAEgMAAIgQAAIgMBOgAgUgDIANAAQAKAAAJgDQAJgDAGgEQAGgFADgHQADgIAAgJQAAgHgDgGQgCgFgEgEQgFgDgHgCQgHgCgJgBIgLAAg");
	this.shape_10.setTransform(-20.3,-1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhGBoIAhjPIBsAAIAAAkIhLAAIgbCrg");
	this.shape_11.setTransform(-35.1,-1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAaBoIAYiQIhrCQIgmAAIAgjPIAlAAIgWCNIBoiNIAoAAIggDPg");
	this.shape_12.setTransform(-52.7,-1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhIBoIAhjPIBwAAIgFAiIhKAAIgHAxIA3AAIAAAhIg8AAIgJA5IBLAAIgFAig");
	this.shape_13.setTransform(-75.8,-1.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAbBoIAWiQIhpCQIgoAAIAijPIAkAAIgVCNIBniNIApAAIghDPg");
	this.shape_14.setTransform(-93.6,-1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAYBoIANhaIhOAAIgOBaIgnAAIAgjPIAoAAIgOBSIBPAAIANhSIAoAAIghDPg");
	this.shape_15.setTransform(-113.7,-1.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgvBoIAcitIg8AAIAGgiICZAAIAAAiIg9AAIgaCtg");
	this.shape_16.setTransform(-131,-1.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhIBoIAhjPIBwAAIgFAiIhKAAIgHAxIA4AAIAAAhIg9AAIgJA5IBLAAIgFAig");
	this.shape_17.setTransform(-147.7,-1.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhmBHQANgDAJgGQAJgFAHgKQAHgKAGgRQAGgPAHgXIAYhXIB1AAIggDOIgoAAIAcisIgsAAIgRA/QgJAegJATQgMAagIAIQgGAIgGAEQgHAGgHADQgXAIgNABg");
	this.shape_18.setTransform(-166.2,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.5,-17,357.1,34);


(lib.Tween41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglBoIAIgsIAmAAIgHAsgAgGhnIArAAIgfCHIgXAGg");
	this.shape.setTransform(173,-1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhHBoIAhjPIAmAAIgKBLIAKAAQARAAANAEQAOAEAJAHQAJAIAFAKQAFALAAAPIgCAQQgCAHgDAHQgGAOgMAJQgMAKgRAEQgRAGgUAAgAgbBJIAMAAQALAAAIgDQAJgDAGgFQAHgFADgIQAEgHAAgKQAAgHgDgFQgCgGgFgEQgEgEgHgCQgHgCgIAAIgNAAg");
	this.shape_1.setTransform(160,-1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfBmIgPgIIgMgJIgJgNIgHgPQgEgLgCgbQAAgNACgMQACgMAEgMQAEgLAGgKQAFgKAHgIQAHgJAJgHQAJgGAJgFQAKgFAKgCQALgDALAAQAQAAAPAFQANAEALAJIgKAkQgLgKgKgFQgMgFgMAAQgIAAgHACQgHABgFAEQgMAHgJAMQgJANgFAQQgEAPAAARQAAAPADALQAEALAGAHQAGAIAJADQAJAEAKAAQAMAAANgFQAMgDAMgIIAAAjQgMAGgNAEQgPAEgOAAQgXgCgKgDg");
	this.shape_2.setTransform(144.1,-1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbBoIAWiQIhqCQIgnAAIAijPIAlAAIgXCNIBoiNIAoAAIggDPg");
	this.shape_3.setTransform(124.9,-1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhmBHQANgDAJgGQAJgFAHgKQAHgKAGgRQAGgPAHgXIAYhXIB1AAIggDOIgoAAIAcisIgsAAIgRA/QgJAegJATQgMAagIAIQgGAIgGAEQgHAGgHADQgXAIgNABg");
	this.shape_4.setTransform(104,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAsAzIhGAAIgaA0IgnAAIBojPIApAAIAmDKIgnAHgAAnASIgNhPIgmBPIAzAAg");
	this.shape_5.setTransform(83.1,-1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAFBoIAMhJQgRADgNAAQgPAAgMgDQgMgDgIgHQgIgHgEgKQgEgJAAgOQAAgLACgMIAKg9IAmAAIgJA/IgCAQQABAMAHAGQAEADAGABQAGACAJAAQANAAANgDIAPhkIAoAAIghDPg");
	this.shape_6.setTransform(66.8,-1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAsAzIhGAAIgZA0IgoAAIBpjPIAnAAIAnDKIgoAHgAAnASIgNhPIgmBPIAzAAg");
	this.shape_7.setTransform(45.8,-1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAYBoIANhaIhOAAIgOBaIgnAAIAgjPIAoAAIgOBSIBQAAIAMhSIAoAAIghDPg");
	this.shape_8.setTransform(27.6,-1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AArBoIAgjPIAoAAIghDPgAhyBoIAijPIAmAAIgLBLIAKAAQASAAAOAEQAMAEAJAHQAJAIAGAKQAEALAAAPIgCAQQgBAHgEAHQgGAOgMAJQgLAKgRAEQgQAGgVAAgAhGBJIAMAAQALAAAJgDQAJgDAGgFQAHgFADgIQAEgIAAgJQAAgHgCgFQgDgHgEgDQgFgEgGgCQgIgCgIAAIgOAAg");
	this.shape_9.setTransform(-0.5,-1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhNBoIAhjPIAwAAQATAAANAEQANAEAKAIQAJAHAEALQAFALABAPQgBAQgFANQgHANgLAIQgLAKgQAFQgYAEgMAAIgQAAIgMBOgAgUgDIANAAQAKAAAJgDQAJgDAGgEQAGgFADgHQADgIAAgJQAAgHgDgGQgCgFgEgEQgFgDgHgCQgHgCgJgBIgLAAg");
	this.shape_10.setTransform(-20.3,-1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhGBoIAhjPIBsAAIAAAkIhLAAIgbCrg");
	this.shape_11.setTransform(-35.1,-1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAaBoIAYiQIhrCQIgmAAIAgjPIAlAAIgWCNIBoiNIAoAAIggDPg");
	this.shape_12.setTransform(-52.7,-1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhIBoIAhjPIBwAAIgFAiIhKAAIgHAxIA3AAIAAAhIg8AAIgJA5IBLAAIgFAig");
	this.shape_13.setTransform(-75.8,-1.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAbBoIAWiQIhpCQIgoAAIAijPIAkAAIgVCNIBniNIApAAIghDPg");
	this.shape_14.setTransform(-93.6,-1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAYBoIANhaIhOAAIgOBaIgnAAIAgjPIAoAAIgOBSIBPAAIANhSIAoAAIghDPg");
	this.shape_15.setTransform(-113.7,-1.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgvBoIAcitIg8AAIAGgiICZAAIAAAiIg9AAIgaCtg");
	this.shape_16.setTransform(-131,-1.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhIBoIAhjPIBwAAIgFAiIhKAAIgHAxIA4AAIAAAhIg9AAIgJA5IBLAAIgFAig");
	this.shape_17.setTransform(-147.7,-1.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhmBHQANgDAJgGQAJgFAHgKQAHgKAGgRQAGgPAHgXIAYhXIB1AAIggDOIgoAAIAcisIgsAAIgRA/QgJAegJATQgMAagIAIQgGAIgGAEQgHAGgHADQgXAIgNABg");
	this.shape_18.setTransform(-166.2,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.5,-17,357.1,34);


(lib.Tween39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.girl();
	this.instance.parent = this;
	this.instance.setTransform(-126.5,-158);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.5,-158,253,316);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B11510","#FD433D"],[0,1],0,41.8,0,-41.9).s().p("Egp2AGnIAAtNMBTtAAAIAANNg");
	this.shape.setTransform(203.9,36.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol56, new cjs.Rectangle(-64,-5.6,535.9,84.7), null);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ball();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.423,0.423);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol53, new cjs.Rectangle(0,0,25,25), null);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol48, new cjs.Rectangle(0,0,290,80), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-185,0,185,0).s().p("A85ejMAAAg9FMA5zAAAMAAAA9Fg");
	this.shape.setTransform(185,195.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,370,391), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.service();
	this.instance.parent = this;
	this.instance.setTransform(-9,11,0.711,0.711);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-9,11,88.2,74.7), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.service1();
	this.instance.parent = this;
	this.instance.setTransform(12,8,0.745,0.745);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(12,8,80.5,78.2), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.service2();
	this.instance.parent = this;
	this.instance.setTransform(-10,-5,0.665,0.665);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-10,-5,77.8,71.2), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.service3();
	this.instance.parent = this;
	this.instance.setTransform(3,13,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(3,13,70.9,70.9), null);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween39("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(126.5,158);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol54, new cjs.Rectangle(0,0,253,316), null);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol53();
	this.instance.parent = this;
	this.instance.setTransform(26.6,-61.9,0.843,0.843,0,0,0,12.5,12.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:12.3,scaleX:0.88,scaleY:0.88,rotation:896.5,guide:{path:[26.6,-61.8,-8.7,-56.5,-41.8,-42.8,-78.1,-27.7,-111.6,-6.9,-128.4,3.5,-140.7,17.8,-143.2,20.7,-146.2,23.2,-148,20,-150.3,17.1]}},12,cjs.Ease.get(-1)).to({regY:12.5,scaleX:1,scaleY:1,rotation:1800,guide:{path:[-150.5,17,-155.6,10.8,-163.1,5.9,-177.7,-3.5,-197,-5.2,-239.1,-8.9,-278.3,1.4,-295.8,6,-308.4,17.3,-308.4,19.8,-308.4,22.2,-321.7,16.9,-333.3,14.5,-349,11,-366,12.4,-385.3,14,-399.2,22.2,-410.9,22.2,-422.6,22.2,-589.8,31.2,-757,40.1]}},37,cjs.Ease.get(1)).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.1,-72.3,21.1,21);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol54();
	this.instance.parent = this;
	this.instance.setTransform(126.5,158,1,1,0,0,0,126.5,158);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol51, new cjs.Rectangle(0,0,253,316), null);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol48();
	this.instance.parent = this;
	this.instance.setTransform(145,40,1,1,0,0,0,145,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({scaleX:0.98,scaleY:0.98},2,cjs.Ease.get(-1)).to({scaleX:0.94,scaleY:0.94,x:145.1},3,cjs.Ease.get(1)).to({regX:145.1,scaleX:0.96,scaleY:0.96,x:145.2},2,cjs.Ease.get(-1)).to({regX:145,scaleX:1,scaleY:1,x:145},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,290,80);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(33,32.5,1,1,0,0,0,33,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol46, new cjs.Rectangle(12,8,80.5,78.2), null);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(31,31.5,1,1,0,0,0,31,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(3,13,70.9,70.9), null);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(38,32,1,1,0,0,0,38,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(-9,11,88.2,74.7), null);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(36,32.5,1,1,0,0,0,36,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol43, new cjs.Rectangle(-10,-5,77.8,71.2), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(465,181.6,1,1,0,0,0,185,195.5);
	this.instance.alpha = 0.641;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.back();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,-13.9,650,391), null);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol47();
	this.instance.parent = this;
	this.instance.setTransform(145,40,1,1,0,0,0,145,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol49, new cjs.Rectangle(0,0,290,80), null);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol49();
	this.instance.parent = this;
	this.instance.setTransform(145,40,1,1,0,0,0,145,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.03,scaleY:1.03,y:40.1},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,290,80);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 46
	this.instance = new lib.Symbol46();
	this.instance.parent = this;
	this.instance.setTransform(409.9,35.7,1.097,1.097,0,0,0,33,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},51).to({scaleX:1.1,scaleY:1.1},4).to({scaleX:1.32,scaleY:1.32,x:433.8,y:170.6},5,cjs.Ease.get(-1)).to({regX:33.1,regY:32.6,scaleX:1.33,scaleY:1.33,x:477.8,y:287.6},5,cjs.Ease.get(1)).wait(25).to({regX:53.1,regY:48.1,x:504.3,y:308.1},1).to({scaleX:1.15,scaleY:1.15,y:308.2},4).to({scaleX:1.33,scaleY:1.33,y:308.1},4).wait(16).to({regX:33,regY:32.5,scaleX:1.55,scaleY:1.55,x:457.6,y:505.4},4).wait(60).to({scaleX:1.1,scaleY:1.1,x:409.9,y:35.7},0).wait(1));

	// Symbol 45
	this.instance_1 = new lib.Symbol45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(340.9,37.9,1.097,1.097,0,0,0,31.1,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.1,scaleY:1.1},51).to({scaleX:1.1,scaleY:1.1},2).to({scaleX:1.32,scaleY:1.32,x:350.7,y:173.3},5,cjs.Ease.get(-1)).to({regX:31.2,scaleX:1.45,scaleY:1.45,x:366.5,y:282.6},5,cjs.Ease.get(1)).wait(21).to({regX:39.4,regY:48.5,x:378.4,y:307.1},1).to({regX:39.5,scaleX:1.28,scaleY:1.28,x:378.5},4).to({regX:39.4,scaleX:1.45,scaleY:1.45,x:378.4},4).wait(20).to({regX:31.1,regY:31.6,scaleX:1.55,scaleY:1.55,x:360.3,y:509.6},6).wait(60).to({scaleX:1.1,scaleY:1.1,x:340.9,y:37.9},0).wait(1));

	// Symbol 44
	this.instance_2 = new lib.Symbol44();
	this.instance_2.parent = this;
	this.instance_2.setTransform(266.3,37.8,1.097,1.097,0,0,0,38,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(51).to({regY:32.1,scaleX:1.3,scaleY:1.3,x:261.3,y:158.2},4,cjs.Ease.get(-1)).to({regX:38.1,regY:32.2,scaleX:1.37,scaleY:1.37,x:244.3,y:286.8},5,cjs.Ease.get(1)).wait(18).to({regX:35.4,regY:48.6,x:240.6,y:309.3},1).to({scaleX:1.24,scaleY:1.24,y:309.2},4).to({scaleX:1.37,scaleY:1.37,y:309.3},4).wait(24).to({regX:38,regY:32.1,scaleX:1.55,scaleY:1.55,x:255.1,y:508.6},8).wait(60).to({regY:32,scaleX:1.1,scaleY:1.1,x:266.3,y:37.8},0).wait(1));

	// Symbol 43
	this.instance_3 = new lib.Symbol43();
	this.instance_3.parent = this;
	this.instance_3.setTransform(180.7,35.7,1.097,1.097,0,0,0,36,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.1,scaleY:1.1},47).to({scaleX:1.1,scaleY:1.1},2).to({scaleX:1.32,scaleY:1.32,x:157.6,y:170.6},5,cjs.Ease.get(-1)).to({regX:36.1,regY:32.6,scaleX:1.42,scaleY:1.42,x:114.6,y:310.6},5,cjs.Ease.get(1)).wait(13).to({regX:28.7,regY:30.6,x:104.1,y:307.7},1).to({scaleX:1.29,scaleY:1.29},4).to({scaleX:1.42,scaleY:1.42},4).wait(28).to({regX:36,regY:32.5,scaleX:1.55,scaleY:1.55,x:134.4,y:505.4},10).wait(60).to({scaleX:1.1,scaleY:1.1,x:180.7,y:35.7},0).wait(1));

	// Layer 12
	this.instance_4 = new lib.Symbol56();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1100,306,1.558,1.76,0,26,0,203.8,36.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({_off:false},0).to({scaleY:1.76,skewX:25.8,x:700,y:306.1},5,cjs.Ease.get(-1)).to({scaleY:1.76,skewX:26,x:300,y:306},5,cjs.Ease.get(1)).wait(50).to({regX:203.7,scaleY:1.76,skewX:25.8,x:-101.1,y:306.1},5,cjs.Ease.get(-1)).to({regX:203.8,scaleY:1.76,skewX:26,x:-502,y:306},5,cjs.Ease.get(1)).wait(61));

	// Layer 11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguCDIAJg3IAwAAIgIA3gAgHiCIA2AAIgoCrIgdAGg");
	this.shape.setTransform(1044.7,250.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA3BAIhZAAIgfBDIgzAAICFkHIAzAAIAxD/IgyAKgAAxAYIgQhkIgwBkIBAAAg");
	this.shape_1.setTransform(1024.9,250.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag7CDIAijaIhLAAIAHgrIDCAAIAAArIhNAAIgiDag");
	this.shape_2.setTransform(1005.1,250.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhbCDIAqkFICOAAIgGAqIhfAAIgJA/IBGAAIAAApIhMAAIgNBJIBhAAIgHAqg");
	this.shape_3.setTransform(984,250.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiCBZQAQgDAMgHQAMgIAJgNQAJgMAIgVQAHgTAIgdIAfhuICVAAIgqEFIgxAAIAjjbIg4AAIgWBQQgLAngLAZQgQAfgKALQgHAJgIAGQgJAHgJAEQgcAKgSADg");
	this.shape_4.setTransform(960.5,250.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjCGQgLgCgKgEQgJgEgIgGQgJgGgGgHIgMgRIgIgUQgFgOgCghQAAgSADgRQADgRAGgQQAGgQAIgOQAJgNALgLIARgPQAKgGAKgEQALgEALgDQAKgCANAAIAXACQALACAKAEQAKAEAIAGQAIAGAGAHIAMARIAIATQAHAeAAARQAAATgDAQQgDASgGAPQgGAQgIAOQgJAOgLALIgRAPQgKAGgKAFQgKADgLADQgMACgLAAgAgKhaQgLAEgKAJQgHAIgGAKQgGALgFANQgFAOgCAPQgDAOAAAQQAAARAEAOQADAOAHAIQAHAKAKAFQAKAEANAAQAMAAALgEQAKgFAKgKQAHgHAGgLQAHgKAEgNQAFgNACgPQADgPAAgQQAAgSgEgNQgDgOgHgJQgHgJgKgFQgKgEgNgBQgMAAgKAGg");
	this.shape_5.setTransform(927.3,250.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhZCDIAqkFICJAAIAAAsIhfAAIgjDZg");
	this.shape_6.setTransform(905.8,250.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhcCDIArkFICOAAIgHAqIhdAAIgKA/IBHAAIAAApIhNAAIgMBJIBgAAIgGAqg");
	this.shape_7.setTransform(887.5,250.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AitCDIAqkFIAxAAIgjDaIBPAAIAjjaIAxAAIgjDaIBPAAIAijaIAyAAIgpEFg");
	this.shape_8.setTransform(859.8,250.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA3BAIhZAAIgfBDIgzAAICFkHIAzAAIAxD/IgyAKgAAxAYIgQhkIgwBkIBAAAg");
	this.shape_9.setTransform(827.5,250.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AheCDIAqkFIBDAAQAUAAAPAEQAPAEAKAIQAKAIAFALQAFALAAAOQAAAMgDAKQgEALgGAHQgGAIgJAHQgIAFgKAEIAQAIQAHAFAFAGQAFAIADAIQADAJAAAKQAAAUgIAQQgIAPgOALQgOAKgUAGQgUAFgXAAgAgpBeIAYAAQANAAAJgCQALgDAIgGQAHgFAEgJQAEgJAAgLQAAgIgDgIQgDgHgGgFQgGgEgJgDQgJgCgMAAIgSAAgAgWgWIAUAAQAKAAAJgCQAJgDAHgFQAHgFAEgHQAEgJAAgJQAAgPgJgIQgKgJgTAAIgVAAg");
	this.shape_10.setTransform(806.2,250.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhhCDIAqkFIA9AAQAXAAARAFQARAEAMAKQALAJAGAPQAGAOAAARQAAAUgIASQgHAQgOALQgPAMgVAHQgdAGgQAAIgUAAIgPBhgAgagFIARAAQANAAALgCQAMgEAHgGQAIgHADgJQAFgJAAgLQAAgKgEgGQgDgHgFgFQgGgFgIgCQgKgDgLAAIgPAAg");
	this.shape_11.setTransform(778.3,250.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgjCGQgLgCgKgEQgJgEgIgGQgJgGgGgHIgMgRIgIgUQgFgOgCghQAAgSADgRQADgRAGgQQAGgQAIgOQAJgNALgLIARgPQAKgGAKgEQALgEALgDQAKgCANAAIAXACQALACAKAEQAKAEAIAGQAIAGAGAHIAMARIAIATQAHAeAAARQAAATgDAQQgDASgGAPQgGAQgIAOQgJAOgLALIgRAPQgKAGgKAFQgKADgLADQgMACgLAAgAgKhaQgLAEgKAJQgHAIgGAKQgGALgFANQgFAOgCAPQgDAOAAAQQAAARAEAOQADAOAHAIQAHAKAKAFQAKAEANAAQAMAAALgEQAKgFAKgKQAHgHAGgLQAHgKAEgNQAFgNACgPQADgPAAgQQAAgSgEgNQgDgOgHgJQgHgJgKgFQgKgEgNgBQgMAAgKAGg");
	this.shape_12.setTransform(754.7,250.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgoCAIgSgIQgIgGgHgHQgHgHgFgJIgJgTQgFgOgDgiQAAgRADgOQADgQAEgPQAFgOAHgNQAIgMAJgLQAJgLAKgIQAMgJAMgGQAMgGANgDQANgEAPAAQAUAAATAHQARAFAOALIgOAtQgNgMgNgGQgOgHgQAAQgKAAgJADQgIACgIAFQgPAIgLAQQgMAQgFAUQgGAUAAAVQAAATAEAOQAFAOAHAJQAIAJAMAFQALAFANAAQAPAAARgGQAPgFAPgJIAAAsQgOAIgSAFQgTAFgSAAQgdgDgNgFg");
	this.shape_13.setTransform(731.2,250.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAdCDIAShxIhjAAIgSBxIgyAAIAqkFIAxAAIgQBoIBkAAIAQhoIAyAAIgpEFg");
	this.shape_14.setTransform(706.9,250.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgjCGQgLgCgKgEQgJgEgIgGQgJgGgGgHIgMgRIgIgUQgFgOgCghQAAgSADgRQADgRAGgQQAGgQAIgOQAJgNALgLIARgPQAKgGAKgEQALgEALgDQAKgCANAAIAXACQALACAKAEQAKAEAIAGQAIAGAGAHIAMARIAIATQAHAeAAARQAAATgDAQQgDASgGAPQgGAQgIAOQgJAOgLALIgRAPQgKAGgKAFQgKADgLADQgMACgLAAgAgKhaQgLAEgKAJQgHAIgGAKQgGALgFANQgFAOgCAPQgDAOAAAQQAAARAEAOQADAOAHAIQAHAKAKAFQAKAEANAAQAMAAALgEQAKgFAKgKQAHgHAGgLQAHgKAEgNQAFgNACgPQADgPAAgQQAAgSgEgNQgDgOgHgJQgHgJgKgFQgKgEgNgBQgMAAgKAGg");
	this.shape_15.setTransform(681,250.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAdCDIAjjaIhiAAIgjDaIgyAAIAqkFIDFAAIgqEFg");
	this.shape_16.setTransform(655.4,250.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgoCAIgSgIQgIgGgHgHQgHgHgFgJIgJgTQgFgOgDgiQAAgRADgOQACgQAFgPQAGgOAHgNQAGgMAKgLQAJgLALgIQAKgJANgGQANgGAMgDQAOgEAOAAQAVAAASAHQARAFAOALIgNAtQgNgMgOgGQgPgHgPAAQgKAAgJADQgJACgHAFQgOAIgMAQQgMAQgFAUQgGAUAAAVQAAATAEAOQAEAOAJAJQAHAJAMAFQALAFANAAQAPAAAQgGQAQgFAPgJIAAAsQgOAIgSAFQgSAFgTAAQgdgDgNgFg");
	this.shape_17.setTransform(632.4,250.4);

	this.instance_5 = new lib.Tween45("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(875.6,242.1);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween46("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(294.6,242.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},59).to({state:[{t:this.instance_5}]},50).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_6}]},17).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_6}]},19).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_6}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(109).to({_off:false},0).to({x:585.1},5,cjs.Ease.get(-1)).to({_off:true,x:294.6},5,cjs.Ease.get(1)).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(114).to({_off:false},5,cjs.Ease.get(1)).wait(17).to({startPosition:0},0).to({scaleX:1.07,scaleY:1.07},3,cjs.Ease.get(-1)).to({scaleX:1.16,scaleY:1.16},4,cjs.Ease.get(1)).to({scaleX:1.09,scaleY:1.09,y:242.2},3,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:242.1},4,cjs.Ease.get(1)).wait(19).to({startPosition:0},0).to({x:589.6},5,cjs.Ease.get(-1)).to({x:884.6},5,cjs.Ease.get(1)).wait(1));

	// ЛЕТНИЕ ИГРЫ НАЧАЛИСЬ!
	this.instance_7 = new lib.Tween41("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(410.3,242.2);

	this.instance_8 = new lib.Tween42("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(410.3,242.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},49).wait(125).to({_off:false},5,cjs.Ease.get(1)).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:false},49).to({x:-223.7,alpha:0},10).to({startPosition:0},110).to({x:93.3,alpha:0.5},5,cjs.Ease.get(-1)).to({_off:true,x:410.3,alpha:1},5,cjs.Ease.get(1)).wait(1));

	// Symbol 50
	this.instance_9 = new lib.Symbol50();
	this.instance_9.parent = this;
	this.instance_9.setTransform(415.3,353,1,1,0,0,0,145,40);
	new cjs.ButtonHelper(this.instance_9, 0, 1, 2, false, new lib.Symbol50(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(49).to({y:493},10).wait(51).to({x:296.3},0).to({y:431.7},4,cjs.Ease.get(-1)).to({y:355},5,cjs.Ease.get(1)).wait(50).to({x:355.8,y:354},5,cjs.Ease.get(-1)).to({x:415.3,y:353},5,cjs.Ease.get(1)).wait(1));

	// logo.png
	this.instance_10 = new lib.Tween43("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(414.7,171);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({startPosition:0},49).to({scaleX:1.13,scaleY:1.13,x:357.2},5,cjs.Ease.get(-1)).to({scaleX:1.26,scaleY:1.26,x:299.7},5,cjs.Ease.get(1)).to({startPosition:0},50).wait(10).to({startPosition:0},0).wait(50).to({startPosition:0},0).to({scaleX:1.13,scaleY:1.13,x:357.1,y:170.9},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:414.7,y:171},5,cjs.Ease.get(1)).wait(1));

	// Symbol 51
	this.instance_11 = new lib.Symbol51();
	this.instance_11.parent = this;
	this.instance_11.setTransform(126.5,270.1,1,1,0,0,0,126.5,158);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:274.6},6,cjs.Ease.get(-1)).to({y:280.1},5,cjs.Ease.get(1)).to({y:275.1},6,cjs.Ease.get(-1)).to({y:270.1},7,cjs.Ease.get(1)).to({y:275.1},6,cjs.Ease.get(-1)).to({y:280.1},6,cjs.Ease.get(1)).to({y:275.1},6,cjs.Ease.get(-1)).to({y:270.1},6,cjs.Ease.get(1)).wait(1).to({x:-171.4,y:263.3,alpha:0},10).wait(110).to({x:-22.4,y:266.7,alpha:0.5},5,cjs.Ease.get(-1)).to({x:126.5,y:270.1,alpha:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5.5,588.8,433.6);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = stage.mouseX / 80;
		this.fon.y = - stage.mouseY / 80;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 7
	this.instance = new lib.Symbol55();
	this.instance.parent = this;
	this.instance.setTransform(294.4,106,1,1,0,0,0,294.4,214.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 6
	this.instance_1 = new lib.Symbol52();
	this.instance_1.parent = this;
	this.instance_1.setTransform(675.5,136.5,1,1,0,0,0,12.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.fon = new lib.Symbol1();
	this.fon.parent = this;
	this.fon.setTransform(0,0.1,1,1,0,0,0,24,19.1);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(276,36.4,724.1,471.6);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1496415879422", id:"back"},
		{src:"images/ball.png?1496415879422", id:"ball"},
		{src:"images/button.png?1496415879422", id:"button"},
		{src:"images/girl.png?1496415879422", id:"girl"},
		{src:"images/logo.png?1496415879422", id:"logo"},
		{src:"images/service.png?1496415879422", id:"service"},
		{src:"images/service1.png?1496415879422", id:"service1"},
		{src:"images/service2.png?1496415879422", id:"service2"},
		{src:"images/service3.png?1496415879422", id:"service3"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;