(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,400);


(lib.gold = function() {
	this.initialize(img.gold);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,76);


(lib.gonzales = function() {
	this.initialize(img.gonzales);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,286);


(lib.Gonzosquest = function() {
	this.initialize(img.Gonzosquest);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.GonzosQuestNetEntSlot1 = function() {
	this.initialize(img.GonzosQuestNetEntSlot1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.GonzosQuestNetEntSymbolкопия2 = function() {
	this.initialize(img.GonzosQuestNetEntSymbolкопия2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.GonzosQuestNetEnt1 = function() {
	this.initialize(img.GonzosQuestNetEnt1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.GonzosQuestsymbolNetEnt = function() {
	this.initialize(img.GonzosQuestsymbolNetEnt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.gonzosquestscatter = function() {
	this.initialize(img.gonzosquestscatter);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.monetki = function() {
	this.initialize(img.monetki);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,581,290);


(lib.trava = function() {
	this.initialize(img.trava);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,453,91);// helper functions:

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


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFC603","#FF9900"],[0,1],-68.8,-85,68.8,85).s().p("Ay2EvQgxAAgBgvIAAn8QAAgzAyAAMAltAAAQAyAAAAAzIAAH8QgBAvgxAAg");
	this.shape.setTransform(125.7,30.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(0,0,251.5,60.7), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFF65","#FFFFCC"],[0,1],0,11.4,0,-11.3).s().p("AA6CFIgIAAIg0hXIgNgVQgKADggAAIAABpIgkAAIgUAAIAAkGIA4AAIAAAUIAABZIAUgBIAFAAQAOgBAHgDQAJgFAFgQQAFgKAGgbQAEgNAGgJQAHgLAKgGQALgHAPgCQARgCAUAEIAAARIAAAWQgQgCgJAGQgIAFgEAPQgIAZgGAPQgJATgLAKIBQB6IAAAIg");
	this.shape.setTransform(11.4,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFF65","#FFFFCC"],[0,1],0,13,0,-12.9).s().p("ABkCXIgUAAIAAgSIAAgUIicAAIAAAmIghAAIgUAAIAAhWIAJAAQAQAAAHgJQAFgIACgUIAVixICrAAIAAAUIAADCIAUAAIAIAAIAAAUIAABCgAgiAfQgBAKgEAJQgFALgIAGIAjAAIA/AAIAAiUIAAgTIhCAAg");
	this.shape_1.setTransform(46.3,15.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFF65","#FFFFCC"],[0,1],0,8.2,0,-8.2).s().p("Ag9CEIgUAAIAAkHICgAAIAAAUIAAAeIhnAAIAAA1IAUAAIBMAAIAAAUIAAAcIhgAAIAAA8IAUAAIBWAAIAAAUIAAAgg");
	this.shape_2.setTransform(72,13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFF65","#FFFFCC"],[0,1],0,10.7,0,-10.6).s().p("ABGCEIgUAAIAAi/IAAgUIhjAAIAADTIglAAIgUAAIAAkHIDVAAIAAAUIAADzg");
	this.shape_3.setTransform(96,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFF65","#FFFFCC"],[0,1],0,13.5,0,-13.4).s().p("AgZCGQgNgDgMgDQgMgFgLgGIgMgJIgIgHQgJgIgIgLQgHgLgFgNQgGgNgDgOQgCgPAAgQQAAgQACgPQADgOAGgNQAFgMAIgLQAHgLAKgJQAJgIALgGQALgHAMgEQAMgEANgDQANgCAMAAQANAAAMACQANADAMAEQALAEALAHQALAGAJAJQAHAGAGAIIAEAFQAIALAFAMQAGANADAOQACAPAAAQQAAAOgCAPQgCANgFANQgFAMgHALQgHALgJAJQgJAJgLAHQgKAHgNAFQgMAFgOADQgOACgOAAQgNAAgMgCgAgchOQgOAFgLALQgLALgGAPQgHARAAATQAAAVAHARQAFAPALALIALAIQAHAFAHADQAOAEAPAAQAQAAAOgEQAOgGALgKQALgLAGgPQAGgRAAgVQAAgTgGgRQgDgIgFgGQgEgHgFgFQgLgLgOgFQgOgFgPAAQgPAAgOAFg");
	this.shape_4.setTransform(124.7,13.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFF65","#FFFFCC"],[0,1],0,9.9,0,-9.8).s().p("AgpCDQgMgDgLgHIgHgGQgNgLgGgRQgHgQAAgXIAzAAQAAAKADAIIABACQAEAGAFAFQAEAEAGADIAEABQAIADAJAAQAJAAAIgDQAIgCAGgFQAGgGADgHQADgHAAgIQAAgHgCgGIgBgCQgDgHgGgFQgGgFgIgDQgIgDgJAAIgUAAIAAgsIATAAQAOAAAKgJQAKgJAAgMIgBgJQgCgJgHgGQgKgHgNgBQgPAAgJAHQgLAGAAANIgcAAIgWAAQgBgSAHgNQAGgNANgKQALgHAQgFQAPgEASAAQATAAAQAFQAQAGAMALQAHAGAEAHIAGAKQAGAOAAAQQAAAPgIAOQgIANgOAIQALAGAIAFIAGAFIAIAJIABADQAFAHACAJQADAKAAAMQAAATgGAOQgHAPgNALQgNALgTAGQgUAGgWAAQgWAAgRgGg");
	this.shape_5.setTransform(150.7,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFF65","#FFFFCC"],[0,1],0,11.1,0,-11.1).s().p("AhuCFIAAkHIA5AAIAAAUIAACAIAUgTIB+iDIASAAIAAAXIAADxIgkAAIgUAAIAAhuIAAgoIiRCUIgDADg");
	this.shape_6.setTransform(176.2,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFF65","#FFFFCC"],[0,1],0,9.8,0,-9.7).s().p("AgGCEIgUAAIAAjCIAAgUIgyAAIgUAAIAAgxIDBAAIAAAUIAAAdIhGAAIAADWg");
	this.shape_7.setTransform(200.7,13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFF65","#FFFFCC"],[0,1],-3.1,0,3.1,0).s().p("AgJAbQgHgCgFgFQgJgIAAgMQAAgMAJgIQAHgGAIgBIAGgBQAGAAAFACQAGACAFAEQAGAFACAJIABAGQAAANgJAHQgJAJgNAAQgEAAgFgCg");
	this.shape_8.setTransform(240.7,24.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFF65","#FFFFCC"],[0,1],0,11.9,0,-11.8).s().p("AhMCFQgMgCgKgEIAIguQAKAEAHABQAJABAGgCQAHgCAFgGQAFgGAFgKIALgYIhSiRIgEgHIgHgNIAAgHIA/AAIAKAUIAwBgIACAAIAEgIIAyhsIA8AAIAAAGIgHAOIhdC5QgKAWgJANQgKAPgNAIQgOAIgSAAIgVgDg");
	this.shape_9.setTransform(223.2,14.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFFF65","#FFFFCC"],[0,1],0,3.1,0,-3).s().p("AgFBhIgUAAIgFjBIA9AAIAAAUIgECtg");
	this.shape_10.setTransform(240.6,10.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6D2905").s().p("AqjCYIAAgUIAeAAIAAhCIAUAAIAABWgAt0CYIAAgUIAgAAIAAgmICdAAIAAAUIiIAAIAAAmgAOSByIACgOIAUADQATAAAOgIQANgIAKgPQAKgNAKgWIBdi5IAbAAIAAAGIhkDHQgKAWgJANQgLAPgNAIQgOAIgTAAQgagDgQgGgASOBvQgGgFgCgIQAFACAFAAQANAAAJgJQAJgHAAgNIgBgHQAHABAFAFQAJAIAAANQAAANgJAHQgJAJgNAAQgNAAgJgJgAD2ByQgRgFgNgLQgHgHgGgHQAKAGANAEQARAGAWAAQAXAAATgGQAUgGANgLQANgLAGgPQAHgPAAgSQAAgMgDgJQgCgJgFgIIAEAEQAJAGAGAIQAFAHADALQADAKAAAMQAAASgHAPQgGAPgOALQgNALgSAGQgUAGgXAAQgWAAgRgGgAABB1QgMgDgLgEQgNgEgKgHQgLgGgJgJQgHgGgGgIIANAJQAKAHAMAEQAMAEANADQANACAMAAQAPAAAOgDQAOgCAMgFQAMgFALgHQALgHAJgJQAIgJAIgLQAHgLAFgMQAEgNADgNQACgOAAgOQAAgRgCgPQgEgOgFgNQgGgMgHgLIgEgFIAHAGQAJAIAIALQAIALAFAMQAGANADAOQACAPAAARQAAAOgCANQgDAOgFANQgFAMgGALQgIALgIAJQgJAJgLAHQgKAHgNAFQgMAFgOACQgOADgPAAQgNAAgNgCgAGvBzIAAgXICSiTIAAAoIiBCCgAL5ByIAAgUIAiAAIAAjVIBGAAIAAgdIAQAAIAEAHIAAAqIhGAAIAADVgAJWByIAAgUIAkAAIAAjxIACgCIASAAIAAEHgAjQByIAAgUIAlAAIAAjyIATAAIAAEGgAltByIAAgUIAlAAIAAjTIBkAAIAAAUIhQAAIAADTgApEByIAAgUICQAAIAAgfIAUAAIAAAzgAweByIgNgUIA4AAIAAgIIhQh5QALgLAIgTQAHgPAHgZQAEgPAJgFQAJgGAQACIAAgWIAUADIAAAnQgRgCgIAGQgJAFgEAPQgHAZgHAPQgIATgLALIBQB5IAAAIgAzCByIAAgUIAkAAIAAhoQAgAAAJgDIAOAUQgMACgXAAIAABpgADpAqQgEgFgEgGIAQAAQAAAKADAHQgGgCgFgEgAs8AwQAIgGAGgLQADgJABgKIAPiDIBCAAIAAAUIguAAIgPCDQAAAIgDAIgAqhAuIAAjCIAUAAIAADCgASbAsQgFgCgGAAIgHABIAAgTIAiAAIADitIAUAAIgEDBgAofArIAAg7IBhAAIAAgdIAUAAIAAAwIhhAAIAAAogAguAaQgLgKgGgQQgGgQAAgUQAAgVAGgQQAHgPALgLQAKgLAPgFQAOgFAOAAQAQAAAOAFQAOAFAKALQAGAFAEAGQgGgEgIgDQgOgFgQAAQgQAAgNAFQgNAFgLALQgLALgHAPQgGAQAAAVQAAATAGARQADAIAFAHIgLgJgAEvAAQgIgCgKAAIgUAAIAAgUQAKAAAIADQAIADAGAFQAGAFADAGIABACIgEgCgAHUiUIAUAAIAABtIgUAUgAFUgkQgIgHgKgFQAOgIAHgNQAJgOAAgQQAAgQgGgNIgGgKIAJAGQALAKAGAOQAGANAAAQQAAAQgIAOQgHAKgKAIIgHgFgAPkg0IgxhgIAJAAIAuBYIgEAIgAyeiUIAUAAIAABYIgUABgAofhBIAAg2IBoAAIAAgdIAUAAIAAAxIhoAAIAAAigADIhTQgBgLADgJIAcAAQAAgNALgGQAJgHAPAAQAOAAAJAIQAHAGADAIQgGgCgHAAQgPAAgKAHQgLAGABANgAKzhjIAAgUIAxAAIAAAUg");
	this.shape_11.setTransform(123.9,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(0,0,245.8,32.6), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFF65","#FFFFCC"],[0,1],0,19.2,0,-19.2).s().p("AirD2IgUAAIAAnrIFXAAIAAAUIAABIIjwAAIAABbIAUAAIBWAAQAbAAAZAFQANADALAEQAhALAVAUIANAOQAMAOAIATQALAcAAAgIAAABQAAAggLAcQgLAdgWAVQgWAWggAMQgiANgqAAgAhYCaIAUAAIBVAAQASAAAOgGQANgFAKgJQARgSABgbIAAgBQAAgSgJgOQgEgHgGgFIgBgBQgJgJgNgEQgNgFgSAAIhpAAg");
	this.shape.setTransform(19.2,25.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFF65","#FFFFCC"],[0,1],0,25.1,0,-25.1).s().p("AgxD6QgXgFgXgIQgWgIgUgMQgRgLgQgNIgFgEQgRgQgOgUQgOgVgKgXIgHgUQgEgPgDgQQgGgcAAgeQAAgeAGgcQAEgbALgYQAKgXAOgUQAPgUARgQQARgQAVgMQAUgMAXgJQAWgIAYgEQAXgEAYAAQAYAAAXAEQAYAEAWAJQAXAIATAMQAVAMARAQIARARIAPATQAOAUAKAXQAKAYAFAbQAGAcAAAeQAAAbgFAaQgDATgGARIgEANQgKAXgNAVQgNAUgQARQgRARgUANQgUANgXAJQgXAJgZAFQgbAFgaAAQgZAAgYgEgAg1iSQgbAKgUATQgVAVgLAcQgMAfAAAlQAAAnALAeQAEALAFAJQAKARANANIAJAIQARANAVAIQAaAKAcAAQAeAAAZgKQAbgKAUgTQANgNALgRQAFgJAEgLQAMgegBgnQABgmgMgeQgIgVgNgQIgMgMQgTgTgbgKQgagKgdAAQgdAAgZAKg");
	this.shape_1.setTransform(68.8,25.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFF65","#FFFFCC"],[0,1],0,19.9,0,-19.9).s().p("ABxD2IgTAAIAAi8IAAgUIi8AAIAADQIhUAAIgUAAIAAnrIBoAAIAAAUIAACoIAUAAICoAAIAAi8IBpAAIAAAUIAAHXg");
	this.shape_2.setTransform(122.4,25.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFF65","#FFFFCC"],[0,1],0,22.2,0,-22.1).s().p("AihD0IgWgHIAOhWQASAIAPACQAPACAMgEQAMgEALgLQAJgLAJgTIAVgsIitk2IAAgNIB0AAIAKAUIBkDFIAEAAIADgHIBhjSIBvAAIAAAKIgFAKIi0FtQgSAogSAZQgUAcgYAOQgaAPgiAAQghgEgYgGg");
	this.shape_3.setTransform(170.5,26.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFF65","#FFFFCC"],[0,1],0,24,0,-23.9).s().p("AgkD2QgXgDgWgJQgXgHgUgMQgTgLgQgPIgDgCQgRgQgOgUQgPgTgKgXIgHgUQgFgPgDgQQgGgbAAgeQAAgdAGgcQAFgbAKgYQAKgXAPgUQAOgUARgQQASgQAUgMQAUgMAXgIQAWgIAXgEQAYgEAXAAQAnAAAkALQAlAKAfAVIAdAZIAIAKIAQAUQAMARAHATQAIAUAEAWIhbAAIgKAAQgIgTgLgPIgCgCQgMgPgQgJQgQgKgTgFQgTgFgXAAQgfAAgbAMQgbALgTAVQgTAUgKAdQgLAdAAAiQAAAfAKAcQAGAQAJANQAGALAJAKQAHAIAIAGQAOAMAQAHQAcAMAfAAQAXAAAUgFQAVgGAQgLQARgLAMgQQAGgIAEgJQAFgKAEgMIBlAAIgEAUIgBACIgHAXQgHAUgLASQgLASgOAOIgdAZQgeAWgmALQglALgoAAg");
	this.shape_4.setTransform(219.5,25.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6D2905").s().p("AEvDtIADgNQAYAGAhAEQAhAAAbgPQAYgOAUgcQASgZASgoIC1ltIAZAAIAAAKIi6F3QgSAngSAZQgUAdgYAOQgbAPghAAQgxgFgfgMgApCDyQgYgFgWgHQgWgJgUgMQgUgMgSgQIgPgPQAQANARAKQAUANAWAIQAWAHAYAFQAYAEAZAAQAbAAAagEQAagGAXgJQAXgJAUgNQAUgNARgRQAQgRANgUQANgVAJgWIAFgOQAGgRADgTQAFgZAAgcQAAgdgGgcQgFgbgKgZQgKgXgPgUIgOgTIADADQASAQANAUQAPAVAKAWQAKAZAFAbQAGAbAAAeQAAAbgFAaQgDATgGARIgFAOQgJAWgNAVQgNAUgQARQgRARgUANQgUANgXAJQgXAKgaAEQgaAFgbAAQgZAAgYgEgAOtDuQgYgDgWgJQgWgIgUgMQgVgMgRgQIgRgRQAQAPATAKQAUAMAWAIQAWAIAYAEIAwAEQAoAAAkgKQAmgMAfgVIAdgaQANgNALgSQALgSAIgUIAHgXIAAgCIAYAAIgEAWIgHAXQgIAUgLASQgLASgNAOIgdAZQgfAVgmAMQgkAKgoAAgABkDuIAAgVIBWAAIAAnWIAUAAIAAHrgAi/DuIAAgVIBUAAIAAjPIC7AAIAAAUIinAAIAADQgAzADuIAAgVIC9AAQArAAAigMQAfgMAXgWQAWgWALgcQALgcAAggIAAgBQAAgggLgcQgIgSgNgQIAIAHQAWAUALAbQALAcAAAfIAAACQAAAggLAcQgLAcgWAWQgXAWgfAMQgiANgrAAgAxtB9IAAh/IBqAAQARAAAOADQANAFAJAJIABAAQAGAGAEAGQgGgDgHgCQgOgGgRAAIhqAAIAABtgAqKBbQgOgNgJgRQgFgJgEgKQgLgfAAgnQAAglAMgeQALgdAVgVQAUgSAagLQAagJAeAAQAdAAAaAJQAaAKAUATIALAMQgQgNgVgIQgagKgdAAQgeAAgaAKQgaAKgUATQgVAVgLAdQgMAeAAAlQAAAnALAeQAEALAFAJQAFAKAHAIIgJgIgANfBRQgIgJgHgLQgIgOgGgPQgKgcAAgfQAAgiAKgeQALgcATgUQATgWAbgLQAbgLAgAAQAWAAATAEQAUAGAPAJQARAKAMAPIABACIgKgHQgPgKgUgEQgTgFgWAAQggAAgbALQgbALgTAWQgTAUgLAcQgKAeAAAiQAAAfAKAcQAGAQAIANIALAPQgIgGgIgJgAHag4IhmjFIAKAAIBiC+IgDAHgARahTIgKgUIBcAAQgEgWgIgVQgIgSgLgSIgRgTIAMAKIAZAdQALARAIATQAIAVAEAWgAhrhVIAAioIAUAAIAACogAxthbIAAhaIDwAAIAAhIIAUAAIAABcIjwAAIAABGg");
	this.shape_5.setTransform(123.7,28.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(0,0,245.5,53.6), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFF65","#FFFFCC"],[0,1],0,21.5,0,-21.4).s().p("AhUEvQgkgNgbgXIgDgDQgdgZgQgjQgRglgCgsIB1AAQABAKACAKQAGAYASAPIAHAFQAWAPAkAAQAUAAASgHQARgHANgNQANgNAGgSQAHgSAAgVQAAgkgRgYIgBgBQgOgVgagKQgYgKgfgCQgSgBgUACIgXAEIAAgSIBmixIAMgUIjGAAIgUAAIAAhqIGKAAIAAATIAAABIiHDXQAOADAOAEQATAHARAKQAWAOARAUIAHAJQARAXAJAfQAJAeAAAhQAAAqgPAmQgPAmgbAdQgdAfgnARQg7ARgiAAQgrAAgmgNg");
	this.shape.setTransform(21.5,33);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFF65","#FFFFCC"],[0,1],0,23.2,0,-23.1).s().p("AhYE0QgqgPgggbIgBAAQgggdgRgmQgTgpAAgyIAAjYQAAgxATgoQARgnAggdQAggbArgPQAqgOAvAAQAwAAAqAOQAqAPAfAbQAKAJAJAKIABABQASAVAMAbQASAoAAAxIAADYQAAAygSApQgSAmggAdQgfAbgqAPQgqAOgwAAQgvAAgqgOgAhFi4QgOAKgJAQQgJAQgCAVIgCDCIACAxQACAUAJAQQAJAQAOAKIACACQAbAUApAAQAqAAAcgWQAOgKAJgQQAJgQACgUIACgxIgCjCQgCgVgJgQIgFgIQgHgKgLgIQgcgVgqAAQgrAAgbAVg");
	this.shape_1.setTransform(76.4,32.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFF65","#FFFFCC"],[0,1],0,23.2,0,-23.1).s().p("AhYE0QgqgPgggbIgBAAQgggdgRgmQgTgpAAgyIAAjYQAAgxATgoQARgnAggdQAggbArgPQAqgOAvAAQAwAAAqAOQAqAPAfAbQAKAJAJAKIABABQASAVAMAbQASAoAAAxIAADYQAAAygSApQgSAmggAdQgfAbgqAPQgqAOgwAAQgvAAgqgOgAhFi4QgOAKgJAQQgJAQgCAVIgCAyIACDBQACAUAJAQQAJAQAOAKIACACQAbAUApAAQAqAAAcgWQAOgKAJgQQAJgQACgUIACjBIgCgyQgCgVgJgQIgFgIQgHgKgLgIQgcgVgqAAQgrAAgbAVg");
	this.shape_2.setTransform(134.3,32.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFF65","#FFFFCC"],[0,1],0,16,0,-15.9).s().p("Ag6CVQgbgJgUgRIgEgEQgXgUgNgdQgNgfAAgnQAAglANggQANgdAXgUQAWgUAdgKQAdgKAdAAQAeAAAcAKQAdAKAXAUQAIAHAHAJQANAPAIASQAOAggBAlQABAngOAfQgNAdgXAUQgXAUgdAKQgcAKgeAAQgdAAgdgKgAgog1QgTATAAAiQAAAiATATQAGAGAGAEQANAJAQgBQAYAAARgSQATgTAAgiQAAgagMgSIgHgJQgRgTgYAAQgYAAgRATg");
	this.shape_3.setTransform(182.3,15.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFF65","#FFFFCC"],[0,1],0,21.3,0,-21.2).s().p("Ai2E3IgdAAIEupsIB6AAIgKAUIknJYg");
	this.shape_4.setTransform(204.1,32.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFF65","#FFFFCC"],[0,1],0,16,0,-15.9).s().p("Ag6CVQgagJgUgRIgFgEQgXgUgNgeQgOgfABgmQgBglAOggQANgcAXgVQAXgUAcgKQAdgKAdAAQAeAAAcAKQAeAKAWAUQAJAHAHAJQAMAPAIASQANAgAAAlQAAAmgNAfQgNAegXAUQgWAUgeAKQgcAKgeAAQgdAAgdgKgAgpg1QgSAUAAAhQAAAiASAUQAGAHAHAEQANAIAPAAQAYAAARgTQATgUAAgiQAAgZgLgRIgIgLQgRgRgYAAQgYAAgRARg");
	this.shape_5.setTransform(226,49.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6D2905").s().p("APUE0QgdgJgWgUQgJgIgHgJQAUARAbAJQAcAKAeAAQAfAAAcgKQAdgKAWgTQAYgUAMgeQAOgfAAgmQAAgmgOggQgIgSgMgPIAEAEQAYAUAMAdQAOAfAAAnQAAAmgOAfQgMAdgYAVQgWAUgdAJQgcALgfAAQgeAAgcgLgAAgEtQgqgPgggbQgKgKgJgKQAgAbApAOQAqAPAwAAQAwAAAqgPQAqgOAfgbQAggdASgnQASgpAAgxIAAjYQAAgxgSgpQgMgagSgVIAAAAQAgAcASAnQASApAAAxIAADYQAAAygSAoQgSAnggAdQgfAbgqAPQgqAOgwAAQgwAAgqgOgAoiEtQgqgPgggbQgLgKgJgKQAgAbAqAOQAqAPAxAAQAvAAAqgPQArgOAfgbQAggdARgnQASgpAAgxIAAjYQAAgxgSgpQgMgagSgVIABAAQAgAcARAnQASApAAAxIAADYQAAAygSAoQgRAnggAdQgfAbgrAPQgqAOgvAAQgxAAgqgOgAxDEtQgmgNgcgaQgJgIgJgKQAcAYAkANQAlANAsAAQAjAAA6gRQAogRAdgfQAbgdAPgnQAOgmAAgpQAAghgIgeQgJgegSgZIgHgJQAPANAMAQQASAYAJAfQAIAeAAAhQAAAqgOAlQgPAngbAdQgdAfgoAQQg6ASgjAAQgsAAglgNgAJfEvIAJgUIBaAAIEopYIAeAAIkyJsgAPQDCQgSgUAAgiQAAgiASgUQARgRAZAAQAYAAASARIAHALQgNgJgQAAQgZABgRARQgSAUAAAiQAAAaALATQgHgEgGgHgAxJCgQgSgPgGgYIARAAQABAZAMASIgGgEgAAfCdQgOgLgJgPQgIgQgCgUIgCjCIACgxQACgVAIgRQAJgPAOgKQAbgWAsAAQAqAAAcAWQALAHAHALQgbgTgpgBQgsAAgbAWQgOAKgJAQQgJAPgCAWIgCAxIACDCQACAUAJAQIAFAIIgCgCgAojCdQgOgLgIgPQgJgQgCgUIgDgyIADjBQACgVAJgRQAIgPAOgKQAcgWAsAAQAqAAAcAWQAKAHAIALQgcgTgogBQgsAAgcAWQgOAKgIAQQgJAPgCAWIgDDBIADAyQACAUAJAQIAEAIIgCgCgAvPAKQgYgJgggBQgdgCggAGIAAgTIADgEQATgCATABQAgABAYAKQAZAKAPAVQgJgHgLgFgAIegYQgdgJgWgUQgJgIgHgJQAUARAbAJQAcAKAfAAQAeAAAcgKQAdgKAWgTQAYgUAMgeQAOgfAAgmQAAgmgOggQgIgTgMgPIAEAEQAYAVAMAdQAOAfAAAnQAAAmgOAgQgMAcgYAVQgWAUgdAJQgcALgeAAQgfAAgcgLgAu9hmICHjXIAVAAIAAATIiADLQgNgFgPgCgAIciLQgTgTAAgiQAAgjATgTQARgTAYAAQAZAAARATIAHAJQgNgIgQAAQgYAAgRATQgTATAAAjQAAAZALASQgHgEgFgGgAytjTIAAgVIDIAAIgMAVg");
	this.shape_6.setTransform(124.2,35.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(0,0,244,67.1), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADGF4IAAhdImFAAIAABdIiEAAIAAjVIAWAAQAogBAQgWQANgSAGgzIA0m+IGrAAIAAIaIBHAAIAADVgAhXBNQgCAZgKAXQgMAcgUANID2AAIAAmjIinAAg");
	this.shape.setTransform(337,44.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjMFJIAAqRIGRAAIAAB8IkEAAIAACFID0AAIAAB6Ij0AAIAACWIEMAAIAACAg");
	this.shape_1.setTransform(277.1,39.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkAFJIAAqRIEXAAQAnAAA/AUQArATAeAiQAdAhAPAsQAPAqAAAwQAAAugPApQgQAqgdAfQgeAigsASQg+ASgmAAIiLAAIAAC7gAh2AXICNAAQAXAAATgJQASgKANgPQANgQAHgUQAHgWAAgXQAAgXgHgVQgGgUgNgPQgNgQgSgJQgUgJgXABIiNAAg");
	this.shape_2.setTransform(220.9,39.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjNFJIAAqRIGSAAIAAB8IkEAAIAACFID0AAIAAB6Ij0AAIAACWIEMAAIAACAg");
	this.shape_3.setTransform(161.8,39.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AB+FJIAAoRIj7AAIAAIRIiNAAIAAqRIIVAAIAAKRg");
	this.shape_4.setTransform(99.4,39.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkAFJIAAqRIEWAAQAtAAAmAOQAmANAcAZQAcAZAPAkQAPAlAAAtQAAAlgSAgQgRAigfATQAXAJASAOQARAOANATQALATAGAWQAGAXAAAZQAAArgOAlQgOAjgbAaQgbAagmAOQgoAOgwAAgAh0DPICbAAQAjAAAVgUQAVgTACgiQABgUgIgRQgIgRgOgLQgSgNgnAAIiUAAgAh0g6ICAAAQAkAAAVgSQAVgTABghQAAgkgVgWQgVgVglAAIiAAAg");
	this.shape_5.setTransform(35.4,39.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(0,0,375.2,98), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFCC00","#FFFF99"],[0,1],-135.4,0,135.5,0).s().p("A1KHCIAAuDMAqVAAAIAAODg");
	this.shape.setTransform(135.5,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(0,0,271,90), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.monetki();
	this.instance.parent = this;
	this.instance.setTransform(6,-602);

	this.instance_1 = new lib.monetki();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6,-298);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.monetki();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(0,-602,587,892), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwVAaJQgyAAAAgyMAAAgytQAAgyAyAAMBgrAAAQAyAAAAAyMAAAAytQAAAygyAAg");
	this.shape.setTransform(314.4,167.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,628.8,334.7), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],-19.1,-5.1,19.2,5.2).s().p("AAEIxIkfhNQgwgNANgwID+uzQANgxAwANIEfBNQAwANgNAxIj+OzQgKAmggAAQgJAAgKgDg");
	this.shape.setTransform(32.2,56.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,64.4,112.7), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gonzales();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,160,286), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(323.3,33.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,646.7,66.4), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABWASQgMgHAAgLQAAgKAMgIQANgHARAAQARAAAMAHQAMAIAAAKQAAALgMAHQgMAIgRAAQgRAAgNgIgAiQASQgMgHAAgLQAAgKAMgIQAMgHARAAQARAAAMAHQANAIAAAKQAAALgNAHQgMAIgRAAQgRAAgMgIg");
	this.shape.setTransform(15.7,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,31.5,5.2), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(4,1,1).p("A0vmrMApfAAAIAANXMgpfAAAg");
	this.shape.setTransform(132.8,42.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-2,-2,269.6,89.7), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.GonzosQuestNetEntSlot1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,89.6,89.6), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.GonzosQuestsymbolNetEnt();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,89.6,89.6), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Gonzosquest();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,89.6,89.6), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.GonzosQuestNetEnt1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,89.6,89.6), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.GonzosQuestNetEntSlot1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,89.6,89.6), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.GonzosQuestNetEntSymbolкопия2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,89.6,89.6), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gonzosquestscatter();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,89.6,89.6), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gonzosquestscatter();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,89.6,89.6), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gonzosquestscatter();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,97,97), null);


(lib.Анимация15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gold();
	this.instance.parent = this;
	this.instance.setTransform(-71,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-38,142,76);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 49
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(130.2,166.5,1,1,0,0,0,122.9,16.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:16.4,scaleX:0.92,scaleY:0.92,y:166.6},9,cjs.Ease.get(-1)).to({regY:16.3,scaleX:0.82,scaleY:0.82},10,cjs.Ease.get(1)).to({regX:123,regY:16.4,scaleX:0.91,scaleY:0.91,y:166.7},10,cjs.Ease.get(-1)).to({regX:122.9,regY:16.3,scaleX:1,scaleY:1,y:166.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 48
	this.instance_1 = new lib.Символ48();
	this.instance_1.parent = this;
	this.instance_1.setTransform(130.4,112.4,0.878,0.878,0,0,0,122.8,26.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.94,scaleY:0.94},9,cjs.Ease.get(-1)).to({regX:122.7,scaleX:1,scaleY:1,x:130.3,y:112.3},10,cjs.Ease.get(1)).to({regX:122.8,scaleX:0.94,scaleY:0.94,x:130.5,y:112.4},10,cjs.Ease.get(-1)).to({scaleX:0.88,scaleY:0.88,x:130.4},10,cjs.Ease.get(1)).wait(1));

	// Символ 47
	this.instance_2 = new lib.Символ47();
	this.instance_2.parent = this;
	this.instance_2.setTransform(129.1,38.4,1,1,0,0,0,122,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.92,scaleY:0.92},9,cjs.Ease.get(-1)).to({scaleX:0.82,scaleY:0.82,y:38.5},10,cjs.Ease.get(1)).to({regY:33.6,scaleX:0.91,scaleY:0.91,x:129,y:38.6},10,cjs.Ease.get(-1)).to({regY:33.5,scaleX:1,scaleY:1,x:129.1,y:38.4},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.1,4.9,246,177.9);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(135.4,45,1,1,0,0,0,135.4,45);
	this.instance.alpha = 0.422;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(0,0,271,90), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(290.5,747,1,1,0,0,0,290.5,145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({y:1617},116).to({y:1967},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,587,892);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(302.8,232.4,1,1,0,0,0,314.4,167.3);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-11.6,0,628.8,400), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(32.1,56.4,1,1,0,0,0,32.1,56.4);
	this.instance.alpha = 0.25;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,64.4,112.7), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(978.2,-83.8,0.376,0.376,0,0,0,187.6,49.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFC603","#FF9900"],[0,1],-68.8,-85,68.8,85).s().p("Ay2EwQgyAAAAgzIAAn5QAAgzAyAAMAltAAAQAyAAAAAzIAAH5QAAAzgyAAg");
	this.shape.setTransform(978.2,-85.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6600").s().p("Ay2EvQgyABAAgyIAAn6QAAgzAyAAMAltAAAQAyAAAAAzIAAH6QAAAygygBg");
	this.shape_1.setTransform(978.2,-82.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(852.5,-116.2,251.5,64.5), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(125.7,27.2,0.376,0.376,0,0,0,187.6,49.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFC603","#FF9900"],[0,1],-68.8,-85,68.8,85).s().p("Ay2EwQgygBAAgyIAAn6QAAgyAyABMAltAAAQAygBAAAyIAAH6QAAAygyABg");
	this.shape.setTransform(125.7,24.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6600").s().p("Ay2EvQgyABAAgyIAAn6QAAgzAyAAMAltAAAQAyAAAAAzIAAH6QAAAygygBg");
	this.shape_1.setTransform(125.7,30.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,-6.2,251.5,67), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(71,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,142,76), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.trava();
	this.instance.parent = this;
	this.instance.setTransform(318,0,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.trava();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-18,0,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(356.1,52.4,1,1,0,0,0,323.4,33.1);
	this.instance_2.alpha = 0.602;
	this.instance_2.filters = [new cjs.BlurFilter(19, 19, 1)];
	this.instance_2.cache(-2,-2,651,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-18,0,711.7,99.3), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(457.6,-100.1,1,1,0,0,0,15.7,2.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).wait(21).to({alpha:1},1).to({alpha:0},1).wait(23).to({alpha:1},1).to({alpha:0},1).wait(18).to({alpha:1},1).to({alpha:0},1).wait(13).to({alpha:1},1).to({alpha:0},1).wait(1));

	// gold.png
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(461,-18,1,1,0,0,0,71,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({scaleX:1.03,scaleY:1.03,y:-18.8},7,cjs.Ease.get(-1)).to({scaleX:1.13,scaleY:1.13,x:461.1,y:-21.9},5,cjs.Ease.get(1)).to({regX:71.1,scaleX:1.09,scaleY:1.09,x:461.2,y:-20.9},5,cjs.Ease.get(-1)).to({regX:71,scaleX:1,scaleY:1,x:461,y:-18},5,cjs.Ease.get(1)).to({scaleX:1.06,scaleY:1.06,x:461.1,y:-19.9},5,cjs.Ease.get(-1)).to({scaleX:1.13,scaleY:1.13,y:-21.9},5,cjs.Ease.get(1)).wait(5).to({scaleX:1,scaleY:1,x:461,y:-18},5,cjs.Ease.get(1)).wait(5).to({scaleX:1.13,scaleY:1.13,x:461.1,y:-21.9},5,cjs.Ease.get(1)).wait(5).to({scaleX:1,scaleY:1,x:461,y:-18},5,cjs.Ease.get(1)).wait(6).to({scaleX:1.13,scaleY:1.13,x:461.1,y:-21.9},5,cjs.Ease.get(1)).wait(5).to({scaleX:1,scaleY:1,x:461,y:-18},5,cjs.Ease.get(1)).wait(1));

	// gonzales.png
	this.instance_2 = new lib.Символ18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(470,6,1,1,0,0,0,80,143);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(390,-137,160,286);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 10
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(147.1,-48.1,0.063,0.063,0,0,0,132.8,42.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).to({regX:132.9,regY:42.6,scaleX:0.52,scaleY:0.54,x:147.8,y:-48.6},8,cjs.Ease.get(-1)).to({regX:133.8,regY:41.8,scaleX:1.01,scaleY:1.05,x:148.4,y:-48.9},9,cjs.Ease.get(1)).to({alpha:0.352},5).to({alpha:1},5).to({alpha:0.352},5).to({alpha:1},5).to({alpha:0.352},5).to({alpha:1},6).to({alpha:0.352},5).to({alpha:1},5).to({alpha:0.352},5).to({alpha:1},5).to({alpha:0.352},5).to({alpha:1},5).to({alpha:0.352},5).to({alpha:1},5).to({alpha:0.352},5).to({alpha:1},5).to({_off:true},1).wait(31));

	// Слой 11
	this.instance_1 = new lib.Символ39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(147.7,-47.9,1,1,0,0,0,135.4,45);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(52).to({_off:false},0).to({alpha:0.672},8,cjs.Ease.get(-1)).to({alpha:0.301},9,cjs.Ease.get(1)).to({alpha:0.652},10,cjs.Ease.get(-1)).to({alpha:1},10,cjs.Ease.get(1)).to({alpha:0.633},11,cjs.Ease.get(-1)).to({alpha:0.301},10,cjs.Ease.get(1)).wait(10).to({alpha:1},10,cjs.Ease.get(1)).wait(10).to({alpha:0.301},10,cjs.Ease.get(1)).to({alpha:0},11).wait(21));

	// Слой 7
	this.instance_2 = new lib.Символ10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(237.6,-624.6,1,1,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({y:-137.4},10,cjs.Ease.get(1)).wait(120).to({y:720.6},20).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(147.8,-534.2,1,1,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(31).to({y:-137.4},10,cjs.Ease.get(1)).wait(120).to({y:541},20).wait(1));

	// Слой 3
	this.instance_4 = new lib.Символ6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(57.8,-444.6,1,1,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(31).to({y:-137.4},10,cjs.Ease.get(1)).wait(120).to({y:361},20).wait(1));

	// Слой 9
	this.instance_5 = new lib.Символ4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(237,-535,1,1,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({y:-47.8},10,cjs.Ease.get(1)).wait(131).to({y:810.2},20).wait(1));

	// Слой 8
	this.instance_6 = new lib.Символ3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(147,-444.8,1,1,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20).to({y:-48},10,cjs.Ease.get(1)).wait(131).to({y:630.4},20).wait(1));

	// Слой 1
	this.instance_7 = new lib.Символ2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(57.2,-355.4,0.923,0.923,0,0,0,48.6,48.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:48.5,x:57.1},9,cjs.Ease.get(-1)).to({regY:48.6,x:57.2},10,cjs.Ease.get(1)).wait(1).to({y:-47.4},10,cjs.Ease.get(1)).wait(11).to({regY:48.5,x:57.1},10,cjs.Ease.get(-1)).to({regY:48.6,x:57.2},11,cjs.Ease.get(1)).wait(99).to({y:451},20).wait(1));

	// Слой 6
	this.instance_8 = new lib.Символ9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(237.8,-444.8,1,1,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:-209.6},9,cjs.Ease.get(-1)).to({y:42.4},10,cjs.Ease.get(1)).wait(142).to({y:900.4},20).wait(1));

	// Слой 4
	this.instance_9 = new lib.Символ7();
	this.instance_9.parent = this;
	this.instance_9.setTransform(147.8,-354.4,1,1,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:-162.8},9,cjs.Ease.get(-1)).to({y:42.4},10,cjs.Ease.get(1)).wait(142).to({y:720.8},20).wait(1));

	// Слой 2
	this.instance_10 = new lib.Символ5();
	this.instance_10.parent = this;
	this.instance_10.setTransform(57.8,-265,1,1,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:-116.7},9,cjs.Ease.get(-1)).to({y:42.2},10,cjs.Ease.get(1)).wait(142).to({y:540.6},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.3,-669.4,270.3,449.2);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(125.7,36.7,1,1,0,0,0,125.7,30.4);

	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-844.2,128.8,1,1,0,0,0,8.8,8.8);

	this.instance_2 = new lib.Символ50();
	this.instance_2.parent = this;
	this.instance_2.setTransform(125.2,34.2,1,1,0,0,0,125.7,30.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,251.5,67);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(-803.5,280,1,1,0,0,0,80,143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-493.5,0,160,286), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(69.9,125.1,0.874,0.874,0,0,0,-413.6,143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(0,0,140,250.1), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AytFPQg7AAAAgzIAAo3QAAgzA7AAMAlbAAAQA7AAAAAzIAAI3QAAAzg7AAg");
	var mask_graphics_29 = new cjs.Graphics().p("AytFPQg7AAAAgzIAAo3QAAgzA7AAMAlbAAAQA7AAAAAzIAAI3QAAAzg7AAg");
	var mask_graphics_84 = new cjs.Graphics().p("AytFPQg7AAAAgzIAAo3QAAgzA7AAMAlbAAAQA7AAAAAzIAAI3QAAAzg7AAg");
	var mask_graphics_85 = new cjs.Graphics().p("AytFPQg7AAAAgzIAAo3QAAgzA7AAMAlbAAAQA7AAAAAzIAAI3QAAAzg7AAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:125.7,y:33.5}).wait(29).to({graphics:mask_graphics_29,x:125.7,y:33.5}).wait(55).to({graphics:mask_graphics_84,x:125.7,y:33.5}).wait(1).to({graphics:mask_graphics_85,x:125.7,y:33.5}).wait(1));

	// Слой 3
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(-51.4,27.9,1,1,0,0,0,32.1,56.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:114.2},14,cjs.Ease.get(-1)).to({x:288.6},15,cjs.Ease.get(1)).wait(56).to({x:-51.4},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(125.7,33.5,1,1,0,0,0,125.7,33.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ20(), 3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,251.5,67);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(125.7,-100.1,1,1,0,0,0,125.7,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-83.5,-162.1,335,112.7), null);


// stage content:
(lib.casinox_gonz = function(mode,startPosition,loop) {
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

	// text2
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(480.3,120.5,1,1,0,0,0,127.9,94.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// btn
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.6,407.4,1,1,0,0,0,-296.4,50.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// trava
	this.instance_2 = new lib.Символ15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(145.9,272.1,1,1,0,0,0,179.9,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// gonzo
	this.instance_3 = new lib.Символ36();
	this.instance_3.parent = this;
	this.instance_3.setTransform(292.6,191,1,1,0,0,0,70,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// slots
	this.instance_4 = new lib.Символ1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(54.3,251.5,1,1,0,0,0,48.5,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// monetki
	this.instance_5 = new lib.Символ38();
	this.instance_5.parent = this;
	this.instance_5.setTransform(320.2,-490.6,1.077,1.077,0,0,0,293.5,445.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// bg
	this.instance_6 = new lib.Символ26();
	this.instance_6.parent = this;
	this.instance_6.setTransform(320.5,133.5,1.063,1.063,0,0,0,301.9,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(268,-818.4,710.7,1317);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1500479259598", id:"bg"},
		{src:"images/gold.png?1500479259598", id:"gold"},
		{src:"images/gonzales.png?1500479259598", id:"gonzales"},
		{src:"images/Gonzosquest.jpg?1500479259598", id:"Gonzosquest"},
		{src:"images/GonzosQuestNetEntSlot1.jpg?1500479259598", id:"GonzosQuestNetEntSlot1"},
		{src:"images/GonzosQuestNetEntSymbolкопия2.jpg?1500479259598", id:"GonzosQuestNetEntSymbolкопия2"},
		{src:"images/GonzosQuestNetEnt1.jpg?1500479259598", id:"GonzosQuestNetEnt1"},
		{src:"images/GonzosQuestsymbolNetEnt.jpg?1500479259598", id:"GonzosQuestsymbolNetEnt"},
		{src:"images/gonzosquestscatter.jpg?1500479259598", id:"gonzosquestscatter"},
		{src:"images/monetki.png?1500479259598", id:"monetki"},
		{src:"images/trava.png?1500479259598", id:"trava"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;