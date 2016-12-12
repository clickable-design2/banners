(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bedro = function() {
	this.initialize(img.bedro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,85);


(lib.biox = function() {
	this.initialize(img.biox);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,102);


(lib.doola = function() {
	this.initialize(img.doola);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,50);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,350);


(lib.handdd = function() {
	this.initialize(img.handdd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,90);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,190);


(lib.noga = function() {
	this.initialize(img.noga);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,120);


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,97);


(lib.sheki = function() {
	this.initialize(img.sheki);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,14);


(lib.telo = function() {
	this.initialize(img.telo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,171);


(lib.wing = function() {
	this.initialize(img.wing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,237);// helper functions:

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


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsuOiIAA9DIZdAAIAAdDg");
	this.shape.setTransform(81.5,93);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(0,0,163.1,186.1), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhSCsQgIgEgIgFIgGgEQgJgIgIgLQgNgVgFgjQgGgiAAgxQAAghAHgzQAGgjAPgWQAOgVAZgJQAMgGAPgCIAfgCQAfAAAVAHQAWAJANAOIAIAKQAIALAEAOQAGAUAAAaIAAAVIhBAAIgXAAIAAgTQAAgSgCgLQgCgHgBgEQgGgMgOAAQgJAAgGAGQgHAGgDANQgDAOgCAXIAAB0QACAXADAOQADAOAHAFQAFAFAIAAIACAAQAJAAAGgDQAFgFACgJIAEgbIABgpIBYAAIAAAXIAAADQABAlgLAXQgJAYgRANQgPANgWAFQgUAFgWAAQglAAgZgJgAy7CsQgJgEgHgFIgHgEQgJgIgHgLQgHgLgGgOIgJgfQgGgiAAgxQAAggAGgzIAJgfQAGgPAHgLQAOgVAZgKQAMgFAOgCIAggDIAgADQAPACAMAFQAMAFAKAHQAJAJAHAKIABAAQAPAWAGAjQAHAzgBAgQgCA8gEAXQgGAjgPAVQgHALgKAIQgKAHgMAGQgYAJgjAAQgjAAgXgJgAyRhxQgGAGgDANQgEAOgBAXIAAB0QABAXAEAOQADAOAGAFQAFAFAIAAIADAAQALAAAFgFQAHgFADgOQADgOABgXIAAh0QgBgXgDgOIgBgCQgCgMgHgFQgFgGgLAAQgKAAgGAGgATDCvIgXAAIAAhNIBSAAIAAAWIAAA3gAOjCvIgWAAIAAj5IAAhNIAAgXIBbAAIAAAXIAABnIAWAAIAOAAQAdAAAWAHQAXAIANAOIAIALQATAaAAArIgDAfQgCANgFAMQgLAVgQAOQgQANgVAFQgVAFgUAAgAPoBuIAMAAIAKAAQARgDAIgJQAKgMAAgXQgBgNgCgJQgDgLgGgFQgNgKgUAAIgMAAgALvCvIgWAAIAAj5IAAgWIgtAAIgVAAIgCAAIAAg3IAAgXIDkAAIAAAXIAAA3IhEAAIAAEPgAI7CvIgWAAIAAhVIAAgsIgOAAIg0CBIhCAAIgcAAIgFAAIAFgJIA6iCIACgEIgJgFQgRgMgLgTQgGgMgEgPQgDgPAAgRQAAgiAKgWQAKgUARgNQAQgMAUgEQAWgGAVAAIB+AAIAAAXIAAFGgAHzhgQgJALAAAXQAAANADAIQADAKAFADQAGAFAIACQAIACAJAAIAUAAIAAhCIAAgWIgUAAQgXAAgKALgAEqCvIgXAAIAAh5IAAgXIg4AAIAACQIhFAAIgWAAIAAldIBbAAIAAAXIAABqIAWAAIAiAAIAAiBIBbAAIAAAXIAAFGgAj2CvIgWAAIAAhVIAAgsIgOAAIg0CBIhCAAIghAAIA/iLIACgEIgJgFQgRgMgLgTQgGgMgEgPQgDgPAAgRQAAgiAKgWQAKgUARgNQAQgMAUgEQAVgGAWAAIB+AAIAAAXIAAFGgAk+hgQgIALgBAXQAAANAEAIQACAKAFADQAGAFAIACQAIACAJAAIAUAAIAAhCIAAgWIgUAAQgXAAgKALgAqSCvIgWAAIAAj8IAAgWIgqAAIgWAAIAAhLICbAAIAAAXIAABnIAXAAIAMAAQAfAAAVAHQAWAIAOAOIAIALQATAaAAArIgDAfQgCANgFAMQgLAVgQAOQgQANgVAFQgVAFgVAAgApNBuIAMAAIALgBQAQgCAHgJQAKgMAAgXQAAgNgCgJQgDgLgHgFQgMgKgVAAIgLAAgAvNCvIgWAAIAAldIDaAAIAAAXIAAAyIiAAAIAAA+IAXAAIATAAQAbABAVAGQAUAHAOAMQAGAGAFAHQAQAZAAApIgCAeQgCANgFALQgKAVgPAMQgQAMgUAGQgUAEgVAAgAuJBuIASAAIAFAAQASgCAIgIQAJgKgBgXQAAgJgBgHQgCgMgHgFQgKgHgTAAIgSAAgATIBKIgVAAIgKiDIAAh1IBWAAIAAAXIAABeIgKCDg");
	this.shape.setTransform(127.9,18.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#424242").s().p("AhgCoQgMgFgKgHQgKgIgGgLQAHAFAIAEQAZAJAmAAQAWAAAVgFQAUgFAQgNQAQgNAKgXQAKgYAAglIAAgDIAWAAIAAAaQAAAlgKAXQgJAXgRAOQgQANgVAFQgUAFgWAAQgmAAgYgKgAzKCoQgMgFgKgHQgJgIgHgLQAHAFAJAEQAYAJAiAAQAjAAAYgJQAMgFAKgIQAKgIAHgKQAPgWAGgiQAEgXADg8QAAghgHgzQgGgigPgWIAAgBIAGAEQAJAJAIAKQAOAWAHAjQAGAzAAAgQgCA8gEAXQgHAigOAWQgIALgJAIQgKAHgMAFQgYAKgjAAQgjAAgYgKgASeCsIAAgWIA7AAIAAg3IAXAAIAABNgAN/CsIAAgWIBnAAQAVAAAUgGQAVgFAQgNQARgNAKgWQAFgLADgOIACgeQAAgqgSgcQAIAFAGAHQAbAcAAA0IgDAfQgCANgFALQgLAWgQAOQgRAMgUAGQgVAFgVAAgALLCsIAAgWIBFAAIAAkQIBEAAIAAg3IAUAAIAABOIhCAAIAAEPgAIXCsIAAgWIBFAAIAAlHIAVAAIAAA3IABAAIAAEmgAFyCsIAKgWIBDAAIAziCIAOAAIAAAsIgrBsgAEFCsIAAgWIBEAAIAAlHIAXAAIAAE+IgEAJIAEAAIAAAWgAByCsIAAgWIBEAAIAAiQIA4AAIAAAWIghAAIAACQgAkaCsIAAgWIBFAAIAAlHIAWAAIAAFdgAm/CsIAKgWIBDAAIAziCIAOAAIAAAsIgrBsgAq3CsIAAgWIBnAAQAWAAAUgGQAVgFAQgNQARgNAKgWQAFgLACgOIADgeQAAgqgTgcQAIAFAGAHQAcAcAAA0IgDAfQgDANgFALQgKAWgQAOQgRAMgUAGQgVAFgVAAgAvyCsIAAgWIBtAAQAUAAAUgFQAUgFAQgNQAPgMAKgVQAFgLACgNIACgeQAAgogQgZIALAJQAcAZAAA2IgCAeQgDANgFALQgJAVgQAMQgQAMgTAFQgUAFgVAAgAhIBZQgHgFgDgOQgDgNgBgYIAAh0QABgXADgOQADgNAHgGQAGgFAKAAQANAAAGALQADAEABAHIgBAAQgKAAgGAGQgGAFgDAOQgEAOgBAXIAAB0QABAXAEAOIAAACQgIgBgFgFgAy2BZQgGgFgDgOQgEgNgBgYIAAh0QABgXAEgOQADgNAGgGQAGgFAKAAQALAAAGAFQAGAFADAMIgDAAQgKAAgGAGQgHAFgDAOQgDAOgBAXIAAB0QABAXADAOIABACQgIgBgGgFgAPDBUIAAhdIAMAAQAVAAAMAJQAGAFADAKQgIgDgLAAIgMAAIAABIIgKAAgApyBUIAAhdIAMAAQAUAAAMAJQAHAFADAKQgIgDgMAAIgLAAIAABHIgLABgAubBUIgSAAIAAhTIARAAQATAAAKAIQAHAEACAMQgGgCgJAAIgSAAIAAA9IgEAAgASlBHIgCgXIAtAAIAKiCIAAhfIAXAAIAAB1IgKCDgAGUABIAIAFIgBAEIgHgJgAmdABIAIAFIgBAEIgHgJgAHRg1QgGgEgCgJQgDgJAAgNQAAgXAJgLQAJgLAXAAIAUAAIAAAWQgVABgJAKQgJALAAAYQAAALADAIQgIgDgGgEgAlgg1QgGgEgCgJQgDgJAAgNQAAgXAJgLQAJgLAXAAIAUAAIAAAWQgVABgJAKQgJALAAAYQAAALADAIQgIgDgGgEgAgIgzIAAgTIAAgDIBAAAIAAgWQAAgagGgUQgEgOgHgLQAIAGAGAHQANAOAHAUQAGAVAAAZIAAAWgAuthAIAAg/IB/AAIAAgyIAXAAIAABJIiAAAIAAAogAC2hHIAAhqIAXAAIAABqgAPDhKIAAhnIAXAAIAABngApyhKIAAhnIAXAAIAABngAKHhjIAAgXIAtAAIAAAXgAr2hmIAAgXIApAAIAAAXg");
	this.shape_1.setTransform(131.6,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(0,0,258.1,38.5), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AOFCvIgXAAIAAhsIAAhkIg8DQIhOAAIgXAAIAAldIBYAAIAAAWIAACtIAXhKIAkh5IBmAAIAAAWIAAFHgAJdCvIgWAAIAAh5IAAgXIg4AAIAACQIhEAAIgXAAIAAldIBbAAIAAAWIAABrIAXAAIAhAAIAAiBIBbAAIAAAWIAAFHgADWCvIgXAAIAAldIDPAAIAAAWIAAA1Ih0AAIAAA7IAXAAIBWAAIAAAXIAAAwIhtAAIAABFIAXAAIBiAAIAAAXIAAA0gABZCvIgXAAIAAh7IAAiJIgBAAIgwEEIguAAIgTAAIgbiRIgVhzIgBAAIAAEEIg/AAIgXAAIAAldICDAAIAEAWIAgC5IABAAIAJgxIAbieICDAAIAAAWIAAFHgAmSCvIgWAAIAAldIDPAAIAAAWIAAA1Ih0AAIAAA7IAWAAIBXAAIAAAXIAAAwIhtAAIAABFIAWAAIBjAAIAAAXIAAA0gAqcCvIgXAAIAAldICJAAQAbAAASAIQAUAJAMAOIAGAIQAIAMAFAPQAFATAAAXQABAbgIAVQgHATgPAOQgdAbg4AAIggAAIAACFgApXgXIARAAIAGAAQANgCAHgIQAJgLAAgVQAAgLgCgJQgHgXgaAAIgRAAgAuvCvIgWAAIAAldICKAAQAxAAAXAYIAKAMQAEAHAEAIQAFARAAATQAAAOgDANQgDANgHALQgHAKgKAIQgKAHgPADIAAAAQASACAMAHIAKAHQAFAFAFAGIADAFQAGAJACAMQAEANAAAOQAAAXgGATQgFATgNANQgMAOgVAIQgUAHgcAAgAtqBtIAWAAIADAAQAOAAAJgKQAKgLAAgWQAAgLgDgIQgCgHgFgFQgJgLgOAAIgZAAgAtqgkIAWAAQAPgBAHgKQAHgLAAgOQAAgHgCgGQgBgHgEgFQgIgLgOAAIgWAAg");
	this.shape.setTransform(96.6,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#424242").s().p("ANuCvIAAgWIBCAAIAAlHIAWAAIAAFdgALNCvIAAgWIBOAAIA9jQIAABkIgmCCgAJHCvIAAgWIBEAAIAAlHIAXAAIAAFdgAG0CvIAAgWIBFAAIAAiQIA3AAIAAAWIghAAIAACQgAC/CvIAAgWIC9AAIAAg1IAXAAIAABLgABCCvIAAgWIA/AAIAAlHIAXAAIAAFdgAgwCvIgEgWIAvAAIAwkEIABAAIAACJIgbCRgAi3CvIAAgWIA/AAIAAkEIACAAIAVByIAACogAmoCvIAAgWIC+AAIAAg1IAWAAIAABLgAqzCvIAAgWIBGAAIAAiGIAfAAQA5AAAdgaQAOgNAHgVQAIgUAAgbQAAgXgGgUQgEgPgIgMQAJAHAHAJQAMANAHAVQAFATAAAXQABAbgIAVQgHATgPAOQgdAbg4AAIggAAIAACFgAvFCvIAAgWIBzAAQAdgBAUgHQAUgHAMgOQANgOAFgTQAHgTgBgXQAAgNgDgOQgDgLgGgKQAMAIAIAKQAIAMADAOQAEANAAAOQAAAXgGATQgFATgNANQgMAOgVAIQgUAHgcAAgAuBBXIAAhWIAaAAQANABAJAKQAFAGADAHIgIgBIgZAAIAAA/gAEEBOIAAhFIBtAAIAAgxIAWAAIAABHIhtAAIAAAvgAlkBOIAAhFIBtAAIAAgxIAXAAIAABHIhtAAIAAAvgAgmAKIggi4IASAAIAYCIIgJAwgAMPiuIAWAAIAABiIgWBMgAsMgUQgMgJgRgBIAAgBQAOgDALgHQAKgHAHgLQAGgKAEgNQADgNAAgOQgBgUgFgQQgDgIgFgHQAHAEAGAGQALAMAHAPQAFAQAAAUQAAAOgDANQgDANgHALQgHAKgKAIIgIAEIgKgGgAptgtIAAhWIARAAQAaABAGAXIgKgBIgRAAIAAA+IgFABgAuBg7IAAhIIAXAAQAOAAAHALQAEAGACAGIgFAAIgWAAIAAAxgAEEg+IAAg8IB0AAIAAg0IAWAAIAABLIh0AAIAAAlgAlkg+IAAg8IB0AAIAAg0IAXAAIAABLIh0AAIAAAlgAH5hEIAAhqIAWAAIAABqg");
	this.shape_1.setTransform(98.9,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(0,0,195.5,37.3), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ADlCvIgXAAIAAj5IAAgXIgtAAIgRAAIgFAAIAAg3IAAgWIDjAAIAAAWIAAA3IhFAAIAAEQgAg+CvIgWAAIAAldIDOAAIAAAWIAAA1Ih0AAIAAA7IAWAAIBXAAIAAAXIAAAwIhtAAIAABFIAWAAIBjAAIAAAXIAAA0gAjECvIgWAAIAAh5IAAgXIg4AAIAACQIhFAAIgWAAIAAldIBbAAIAAAWIAABrIAWAAIAiAAIAAiBIBbAAIAAAWIAAFHg");
	this.shape.setTransform(36.6,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#424242").s().p("ADOCvIAAgWIBFAAIAAkQIBEAAIAAg3IAXAAIAABNIhFAAIAAEQgAhUCvIAAgWIC9AAIAAg1IAWAAIAABLgAjaCvIAAgWIBEAAIAAlHIAXAAIAAFdgAltCvIAAgWIBEAAIAAiQIA4AAIAAAWIghAAIAACQgAgQBOIAAhFIBsAAIAAgxIAXAAIAABHIhtAAIAAAvgAgQg+IAAg8IBzAAIAAg0IARAAIAAA3IAGAAIAAAUIh0AAIAAAlgAkphEIAAhqIAXAAIAABqgACLhhIAAgWIAtAAIAAAWg");
	this.shape_1.setTransform(38.9,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(0,0,75.5,37.3), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(192.7,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(194.4,17.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(0,0,387.1,32.8), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(0,0,124,97), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgzBAYeMAAAgw7MBmDAAAMAAAAw7g");
	this.shape.setTransform(326.6,156.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,0,653.2,313.1), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bedro();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.459,0.459);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,61,39), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bedro();
	this.instance.parent = this;
	this.instance.setTransform(53.5,10.1,0.459,0.459,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,53.5,69.1), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373435").ss(0.7,0,0,22.9).p("AAAg0QBSAABEAbQA+AYAAAWQAAAQhBACQiBAEgeAEQhdAKg2gIQg0gHAAgVQAAgWA+gYQBEgbBRAAg");
	this.shape.setTransform(21.2,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373435").s().p("AifAxQg0gHAAgVQAAgWA+gYQBEgbBRAAQBSAABEAbQA+AYAAAWQAAAQhBACQiBAEgeAEQg0AGgnAAQggAAgYgEg");
	this.shape_1.setTransform(21.2,5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-1.3,-1,45.2,12.5), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.head();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,153,190), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#69452D").s().p("AiSAMQgBgSAMgQQAsgQBoACQByACAPAcQAHANgDAHQgBAEgGABQhDgHgwgBQhZgBhKAbQgHgIAAgRg");
	this.shape.setTransform(14.7,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,29.5,7.4), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#69452D").s().p("AikBAQgFgHAEgSQAHgkCAglQB1gkA2AEQASAOAGAWQAFASgFAMQhbgHhkAdQhjAkgdAKIgCAAQgFAAgDgEg");
	this.shape.setTransform(16.8,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,33.6,13.6), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKALQgFgEAAgHQAAgGAEgFQAFgEAGAAQAHAAAEAEQAFAFAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape.setTransform(10.7,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.7,0,0,22.9).p("AAAhIQAgAAAWAVQAXAVAAAeQAAAegXAWQgVAVghAAQgfAAgWgVQgXgVAAgfQAAgdAWgWQAXgVAfAAg");
	this.shape_1.setTransform(7.7,7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag1A0QgXgVAAgfQAAgdAWgWQAXgVAfAAQAgAAAWAVQAXAVAAAeQAAAegXAWQgVAVghAAQgfAAgWgVg");
	this.shape_2.setTransform(7.7,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-1,-3.5,20.2,26.2), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAMQgGgFAAgHQAAgGAGgFQAFgFAGAAQAHgBAGAGQAEAFAAAGQAAAHgEAFQgGAFgHAAQgGAAgFgFg");
	this.shape.setTransform(4.8,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.7,0,0,22.9).p("AAAhIQgfAAgWAWQgXAVABAdQAAAeAWAWQAXAVAeAAQAgAAAWgWQAXgVAAgeQAAgegXgVQgWgVggAAg");
	this.shape_1.setTransform(7.6,7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag1A0QgWgWAAgeQgBgdAXgVQAWgWAfAAQAgAAAWAVQAXAVAAAeQAAAegXAVQgWAWggAAQgeAAgXgVg");
	this.shape_2.setTransform(7.6,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-3.7,-3.5,20.1,21.7), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,700,350), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,210,237), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.noga();
	this.instance.parent = this;
	this.instance.setTransform(157,120,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,157,120), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.noga();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,157,120), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,96,171), null);


(lib.handdd_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.handdd();
	this.instance.parent = this;
	this.instance.setTransform(-25,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.handdd_1, new cjs.Rectangle(-25,-45,50,90), null);


(lib.doola_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.doola();
	this.instance.parent = this;
	this.instance.setTransform(-35.5,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.doola_1, new cjs.Rectangle(-35.5,-25,71,50), null);


(lib.biox_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.biox();
	this.instance.parent = this;
	this.instance.setTransform(-60.5,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.biox_1, new cjs.Rectangle(-60.5,-51,121,102), null);


(lib.sprite136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.sprite136, null, null);


(lib.shape142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(8.9,1,1).p("AKKqJQELELAAF+QAAF+kLEMQkLEMl/AAQl+AAkLkMQkMkMAAl+QAAl+EMkLQELkMF+AAQF/AAELEMg");
	this.shape.setTransform(199.7,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(103.5,-94.4,192.3,192.3);


(lib.shape137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AIoCbIxQibIRQiaIABAAIAAE1g");
	this.shape.setTransform(-51.2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.5,-13.3,110.7,31.1);


(lib.shape132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEF1D4").s().p("AhVhAIAVgWICXCXIgWAWg");
	this.shape.setTransform(-73.1,-72.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEF1D4").s().p("AhVhAIAVgWICWCXIgVAWg");
	this.shape_1.setTransform(72.8,73);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEF1D4").s().p("AhVBBICWiWIAVAVIiWCXg");
	this.shape_2.setTransform(-72.9,73.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEF1D4").s().p("AhWBBICXiXIAVAWIiWCWg");
	this.shape_3.setTransform(73.1,-73);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.7,-81.7,163.5,163.4);


(lib.fdef3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Aq/BcQkkgmAAg2QAAg1EkgmQEjgmGcAAQGdAAEjAmQEkAmgBA1QABA2kkAmQkjAmmdAAQmcAAkjgmg");
	this.shape.setTransform(99.6,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fdef3, new cjs.Rectangle(0,0,199.1,26), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.handdd_1();
	this.instance.parent = this;
	this.instance.setTransform(112.1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.3,x:116.1,y:47.7},2,cjs.Ease.get(-1)).to({rotation:10.7,x:120,y:50.4},2,cjs.Ease.get(1)).to({rotation:6.3,x:116.8,y:48.3},2,cjs.Ease.get(-1)).to({rotation:0,x:112.1,y:45},3,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.handdd_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25,47,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:-4.3,skewY:175.7,x:21.8,y:49.2},2,cjs.Ease.get(-1)).to({skewX:-8.7,skewY:171.3,x:18.5,y:51.3},2,cjs.Ease.get(1)).to({skewX:-5.1,skewY:174.9,x:21.1,y:49.7},2,cjs.Ease.get(-1)).to({skewX:0,skewY:180,x:25,y:47},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.1,92);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(160,153.7,1.963,1.65,0,0,0,81.5,93.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2
	this.instance = new lib.doola_1();
	this.instance.parent = this;
	this.instance.setTransform(19.6,13.8,0.549,0.549,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).to({regX:0,regY:0.2,scaleX:1.27,scaleY:1.27,rotation:360,x:-591.6,y:24.9},18).wait(1));

	// Слой 1 - копия
	this.instance_1 = new lib.doola_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.6,53.8,0.549,0.549,0,0,0,0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({regX:0,regY:0.2,scaleX:1.27,scaleY:1.27,rotation:360,x:-620.6,y:-50.1},18).to({_off:true},1).wait(15));

	// Слой 1
	this.instance_2 = new lib.doola_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.6,13.8,0.549,0.549,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0,regY:0.2,scaleX:1.27,scaleY:1.27,rotation:360,x:-591.6,y:24.9},18).to({_off:true},1).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39,27.5);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(31.9,36.1,0.304,0.304,0,0,0,105,118.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(0,0,63.8,72), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(31.9,36.1,0.304,0.304,0,0,0,105,118.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.32,skewY:18.2,y:25.6},3).to({scaleX:0.3,skewY:0,y:36.1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.8,72);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(196.8,27.7,1,1,0,0,0,192.7,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(4.1,12.2,387,32.8), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 45
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(430.5,33.2,1,1,0,0,0,129,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({regX:129.1,scaleX:1.04,scaleY:1.04,x:430.6},2,cjs.Ease.get(-1)).to({regX:129,scaleX:1.11,scaleY:1.11,x:430.5},3,cjs.Ease.get(1)).to({regX:129.1,scaleX:1.06,scaleY:1.06,x:430.6,y:33.3},3,cjs.Ease.get(-1)).to({regX:129,scaleX:1,scaleY:1,x:430.5,y:33.2},3,cjs.Ease.get(1)).wait(1));

	// Символ 44
	this.instance_1 = new lib.Символ44();
	this.instance_1.parent = this;
	this.instance_1.setTransform(190.1,33.3,1,1,0,0,0,97.7,18.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({regY:18.7,scaleX:1.04,scaleY:1.04,x:190.4,y:32.9},2,cjs.Ease.get(-1)).to({regY:18.6,scaleX:1.11,scaleY:1.11,x:190.9,y:32.3},3,cjs.Ease.get(1)).to({regX:97.8,regY:18.7,scaleX:1.06,scaleY:1.06,x:190.6,y:32.9},3,cjs.Ease.get(-1)).to({regX:97.7,regY:18.6,scaleX:1,scaleY:1,x:190.1,y:33.3},3,cjs.Ease.get(1)).wait(9));

	// Символ 43
	this.instance_2 = new lib.Символ43();
	this.instance_2.parent = this;
	this.instance_2.setTransform(41.9,33.3,1,1,0,0,0,37.7,18.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:37.8,regY:18.7,scaleX:1.04,scaleY:1.04,x:42.8,y:32.9},2,cjs.Ease.get(-1)).to({regX:37.7,regY:18.6,scaleX:1.11,scaleY:1.11,x:43.8,y:32.3},3,cjs.Ease.get(1)).to({regX:37.8,regY:18.7,scaleX:1.06,scaleY:1.06,x:43,y:32.9},3,cjs.Ease.get(-1)).to({regX:37.7,regY:18.6,scaleX:1,scaleY:1,x:41.9,y:33.3},3,cjs.Ease.get(1)).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.2,14,555.4,38.5);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(326.6,156.6,1,1,0,0,0,326.6,156.6);
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.504},9,cjs.Ease.get(-1)).to({alpha:0.398},10,cjs.Ease.get(1)).to({alpha:0.5},10,cjs.Ease.get(-1)).to({alpha:0.602},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,653.2,313.1);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(21.2,5.2,1,1,0,0,0,21.2,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:21.3,scaleX:0.67,x:21.3},3,cjs.Ease.get(-1)).to({regX:21.2,scaleX:0.33},3,cjs.Ease.get(1)).to({regX:21.3,scaleX:0.62},3,cjs.Ease.get(-1)).to({regX:21.2,scaleX:1,x:21.2},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-0.3,45.2,11.2);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 19
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(14.7,12.1,1,1,0,0,0,14.7,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:14.8,scaleX:1,scaleY:1,rotation:14.8,x:16.5,y:11.8},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:30,x:18.1,y:11.3},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:15.8,x:16.5,y:11.6},4,cjs.Ease.get(-1)).to({regX:14.7,scaleX:1,scaleY:1,rotation:0,x:14.7,y:12.1},5,cjs.Ease.get(1)).wait(1));

	// Символ 18
	this.instance_1 = new lib.Символ18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(75.9,6.8,1,1,0,0,0,16.8,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-7.3,x:72.8,y:8.8},4,cjs.Ease.get(-1)).to({regY:6.7,rotation:-15,x:69.7,y:10.8},4,cjs.Ease.get(1)).to({regY:6.8,rotation:-7.8,x:72.5,y:9},4,cjs.Ease.get(-1)).to({rotation:0,x:75.9,y:6.8},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92.7,15.8);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 17
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(9.4,12.7,1,1,0,0,0,9.4,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:9.3,regY:9.7,scaleX:1.17,scaleY:1.17,x:9.3,y:10.6},7).to({regX:9.4,regY:9.6,scaleX:1,scaleY:1,x:9.4,y:12.7},8).wait(1));

	// Символ 16
	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(71.8,7.3,1,1,0,0,0,6,7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.18,scaleY:1.18,x:71.9,y:5.2},7).to({scaleX:1,scaleY:1,x:71.8,y:7.3},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-3.5,81.8,29.3);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(192.5,27.6,0.459,0.459,0,0,0,78.6,60.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:78.7,rotation:45,x:170.9,y:82.7},5).to({regX:78.9,regY:60,scaleX:0.46,scaleY:0.46,rotation:67.9,x:149.8,y:97.7},2).to({rotation:90.8,x:122.4,y:99.8},1).to({regX:78.7,regY:59.9,scaleX:0.46,scaleY:0.46,rotation:159.3,x:39.9,y:82.2},3).to({rotation:99.3,x:130,y:100.2},6).to({regY:60,scaleX:0.46,scaleY:0.46,rotation:49.6,x:171.8,y:70.8},3).to({regX:78.6,regY:60.1,scaleX:0.46,scaleY:0.46,rotation:0,x:192.5,y:27.6},3).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(36,79.9,0.459,0.459,0,0,0,78.5,60.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:78.4,regY:60,scaleX:0.46,scaleY:0.46,rotation:-47.6,x:69.4,y:95.8},1).to({regY:60.2,scaleX:0.46,scaleY:0.46,rotation:-95.2,x:103.6,y:91.7},2).to({regY:60.1,rotation:-120,x:121.4,y:79.6},2).to({regX:78.2,scaleX:0.46,scaleY:0.46,rotation:-123.8,x:129.5,y:77.6},1).to({scaleX:0.46,scaleY:0.46,rotation:-127.6,x:138.8,y:74.9},1).to({scaleX:0.46,scaleY:0.46,rotation:-157.7,x:197.8,y:42.9},4).to({rotation:-112.7,x:123.8,y:85.9},6).to({regY:60.2,scaleX:0.46,scaleY:0.46,rotation:-56.4,x:78.8,y:96.9},3).to({regX:78.5,regY:60.1,scaleX:0.46,scaleY:0.46,rotation:0,x:36,y:79.9},3).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ26();
	this.instance_2.parent = this;
	this.instance_2.setTransform(84.6,38.3,1,1,0,0,0,26.7,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:34.6,rotation:-30,x:94.6},5).to({regY:34.5,rotation:-112.7,x:137.5,y:38},6).to({regY:34.6,rotation:-7.7,x:109.5,y:44.3},6).to({rotation:-3.8,x:94.1,y:38.8},3).to({regY:34.5,rotation:0,x:84.6,y:38.3},3).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ27();
	this.instance_3.parent = this;
	this.instance_3.setTransform(137.5,38.9,1,1,0,0,0,30.5,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:36.2,x:120.1,y:53.2},5).to({regX:30.6,regY:19.4,rotation:120,x:85.5,y:37},6).to({rotation:45,x:105,y:42.9},6).to({regX:30.7,scaleX:1,scaleY:1,rotation:22.3,x:121.4,y:40.7},3).to({regX:30.5,regY:19.5,scaleX:1,scaleY:1,rotation:0,x:137.5,y:38.9},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,228.5,107.4);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(1048.2,175,1,1,0,0,0,350,175);

	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(350,175,1,1,0,0,0,350,175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,1398.2,350), null);


(lib.Символ4копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(52.9,59.8,1.174,1,-7,0,0,62,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.37,rotation:-15,x:42.7,y:72.3},10,cjs.Ease.get(1)).to({scaleX:1.18,rotation:-7.3,x:52.5,y:60.4},10,cjs.Ease.get(-1)).to({scaleX:1,rotation:0,x:62,y:48.5},10,cjs.Ease.get(1)).to({scaleX:1.17,rotation:-7,x:52.9,y:59.8},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.3,2.8,156.4,114.1);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(62,48.5,1,1,0,0,0,62,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.17,rotation:-7,x:52.9,y:59.8},9,cjs.Ease.get(-1)).to({scaleX:1.37,rotation:-15,x:42.7,y:72.3},10,cjs.Ease.get(1)).to({scaleX:1.18,rotation:-7.3,x:52.5,y:60.4},10,cjs.Ease.get(-1)).to({scaleX:1,rotation:0,x:62,y:48.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124,97);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.sheki();
	this.instance.parent = this;
	this.instance.setTransform(95,109);

	this.instance_1 = new lib.sheki();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33,111);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(85.2,158,1,1,0,0,0,21.2,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ22();
	this.instance_3.parent = this;
	this.instance_3.setTransform(76.4,106.9,1,1,0,0,0,40.6,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 5
	this.instance_4 = new lib.Символ23();
	this.instance_4.parent = this;
	this.instance_4.setTransform(80.9,76.4,1,1,0,0,0,46.3,7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 1
	this.instance_5 = new lib.Символ21();
	this.instance_5.parent = this;
	this.instance_5.setTransform(76.5,95,1,1,0,0,0,76.5,95);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,153,190), null);


(lib.sprite143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape142("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-199.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite143, new cjs.Rectangle(-95.8,-94.4,192.3,192.3), null);


(lib.sprite138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape137("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite138, new cjs.Rectangle(-106.5,-13.3,110.7,31.1), null);


(lib.sprite133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.shape132("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-3.4,0,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite133, new cjs.Rectangle(-117.4,-114,227.8,228), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(31.9,36,1,1,0,0,0,31.9,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.01,skewY:-7.6,y:40.3},3).to({scaleX:1,skewY:0,y:36},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.8,72);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(350,175,1,1,0,0,0,350,175);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-347.1},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1398.2,350);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(12.9,41.4,1,1,0,0,0,31.9,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// biox
	this.instance_1 = new lib.biox_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(62,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// doola
	this.instance_2 = new lib.Символ40();
	this.instance_2.parent = this;
	this.instance_2.setTransform(55,13.8,1,1,0,0,0,19.5,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ39();
	this.instance_3.parent = this;
	this.instance_3.setTransform(85.1,2.8,1,1,0,0,0,31.9,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-19,-33.2,141.5,131.7), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 4
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(203.9,240.6,0.459,0.459,45,0,0,62.2,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:62.3,scaleX:0.46,scaleY:0.46,rotation:44.9,y:236.4},3,cjs.Ease.get(-1)).to({regX:62.2,scaleX:0.46,scaleY:0.46,rotation:45,y:230.6},4,cjs.Ease.get(0.99)).to({regX:62.1,scaleX:0.46,scaleY:0.46,rotation:44.9,x:203.8,y:235.6},4,cjs.Ease.get(-1)).to({regX:62.2,scaleX:0.46,scaleY:0.46,rotation:45,x:203.9,y:240.6},4,cjs.Ease.get(0.99)).wait(1));

	// Символ 2
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(204.4,192.3,0.459,0.459,0,0,0,76.3,94.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:95,rotation:5,x:207.6,y:188},3,cjs.Ease.get(-1)).to({regX:76.4,rotation:12,x:211.6,y:182.3},4,cjs.Ease.get(0.99)).to({rotation:5.8,x:208.1,y:187.4},4,cjs.Ease.get(-1)).to({regX:76.3,regY:94.9,rotation:0,x:204.4,y:192.3},4,cjs.Ease.get(0.99)).wait(1));

	// Символ 1
	this.instance_2 = new lib.Символ1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(212.1,270.1,0.459,0.459,0,0,0,48.1,85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:85.7,y:265.8},3,cjs.Ease.get(-1)).to({regY:85.5,y:260.1},4,cjs.Ease.get(0.99)).to({regY:85.7,y:265.1},4,cjs.Ease.get(-1)).to({regY:85.5,y:270.1},4,cjs.Ease.get(0.99)).wait(1));

	// Символ 4
	this.instance_3 = new lib.Символ4копия();
	this.instance_3.parent = this;
	this.instance_3.setTransform(171.1,244.2,0.459,0.459,30,0,0,62.1,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:62.2,scaleX:0.46,scaleY:0.46,rotation:29.9,y:241},3,cjs.Ease.get(-1)).to({regX:62.1,scaleX:0.46,scaleY:0.46,rotation:30,y:236.7},4,cjs.Ease.get(0.99)).to({regY:48.6,scaleX:0.46,scaleY:0.46,rotation:29.9,x:171,y:240.5},4,cjs.Ease.get(-1)).to({regY:48.5,scaleX:0.46,scaleY:0.46,rotation:30,x:171.1,y:244.2},4,cjs.Ease.get(0.99)).wait(1));

	// Символ 6
	this.instance_4 = new lib.Символ15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(216.2,331.3,1,1,0,0,0,114.2,53.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:327},3,cjs.Ease.get(-1)).to({y:321.3},4,cjs.Ease.get(0.99)).to({y:326.3},4,cjs.Ease.get(-1)).to({y:331.3},4,cjs.Ease.get(0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(102,148.8,228.5,236.3);


(lib.sprite139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite138();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite139, new cjs.Rectangle(-106.5,-13.3,110.7,31.1), null);


(lib.sprite134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite133();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-178.2},49).to({rotation:-181.8},1).to({rotation:-360},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.9,-115.5,230.8,231);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(70.8,94.5,0.869,0.869,0,0,180,249,257.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.fdef3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(105.1,219,0.779,0.779,0,0,0,99.5,13.1);
	this.instance_1.alpha = 0.281;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,0,198.5,229), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(78,73.7,1,1,0,0,0,59,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:100.9},4,cjs.Ease.get(-1)).to({y:135},5,cjs.Ease.get(1)).to({y:104.4},5,cjs.Ease.get(-1)).to({y:73.7},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10,141.5,131.7);


(lib.sprite140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.sprite139();
	this.instance.parent = this;
	this.instance.setTransform(0,-143.5,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.sprite139();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-148.7,-2.8,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1 - копия
	this.instance_2 = new lib.sprite139();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,147,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.instance_3 = new lib.sprite139();
	this.instance_3.parent = this;
	this.instance_3.setTransform(144.8,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite140, new cjs.Rectangle(-152.8,-147.6,301.7,298.7), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(99.2,102.6,1,1,0,0,0,99.2,102.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:133.5},6,cjs.Ease.get(-1)).to({x:179.2},8,cjs.Ease.get(1)).to({x:136.6},8,cjs.Ease.get(-1)).to({x:99.2},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198.5,229);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(68.5,77.1,1,1,0,0,0,68.5,67.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:19.5},6,cjs.Ease.get(-1)).to({x:-29.5},6,cjs.Ease.get(1)).to({x:19.5},7,cjs.Ease.get(-1)).to({x:68.5},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141.5,131.7);


(lib.sprite141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite140();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:77.5},17).to({scaleX:1,scaleY:1,rotation:177.7,y:-0.1},22).to({rotation:182.3},1).to({scaleX:1,scaleY:1,rotation:259.7,x:0.1,y:0},17).to({scaleX:1,scaleY:1,rotation:360,x:0},22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.8,-147.6,301.7,298.7);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(99.2,114.5,1,1,0,0,0,99.2,114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-241.9},9).to({x:99.2},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198.5,229);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(6));

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(48,108,1.281,1.281,0,0,0,68.4,67.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-289.1},5).to({x:48},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,22,181.2,168.7);


(lib.sprite144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(22.5,1,1).p("AWJAAQAAJMmfGeQmeGfpMAAQpLAAmemfQmfmeAApMQAApLGfmeQGemfJLAAQJMAAGeGfQGfGeAAJLg");
	this.shape.setTransform(-2.2,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(27));

	// Layer 8
	this.instance = new lib.sprite143();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.251,0.251);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.47,scaleY:0.47},3).to({scaleX:0.65,scaleY:0.65},3).to({scaleX:0.79,scaleY:0.79},3).to({scaleX:0.9,scaleY:0.9},3).to({scaleX:0.97,scaleY:0.97},3).to({scaleX:0.38,scaleY:0.38},4).to({scaleX:0.25,scaleY:0.25},7).wait(1));

	// Layer 6
	this.instance_1 = new lib.sprite141();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.2,2.099,2.099);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.88,scaleY:1.88,y:0.1},2).to({scaleX:1.69,scaleY:1.69},2).to({scaleX:1.52,scaleY:1.52},2).to({scaleX:1.37,scaleY:1.37},2).to({scaleX:1.25,scaleY:1.25},2).to({scaleX:1.15,scaleY:1.15},2).to({scaleX:1.08,scaleY:1.08},2).to({scaleX:1.03,scaleY:1.03,y:0},2).to({scaleX:1.01,scaleY:1.01},1).to({scaleX:1,scaleY:1},2).to({scaleX:2.1,scaleY:2.1,y:0.2},7).wait(1));

	// Layer 3
	this.instance_2 = new lib.sprite136();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,5.843,5.843);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:5.41,scaleY:5.41},1).to({scaleX:4.99,scaleY:4.99},1).to({scaleX:4.6,scaleY:4.6},1).to({scaleX:4.23,scaleY:4.23},1).to({scaleX:3.89,scaleY:3.89},1).to({scaleX:3.57,scaleY:3.57},1).to({scaleX:3.28,scaleY:3.28},1).to({scaleX:3,scaleY:3},1).to({scaleX:2.75,scaleY:2.75},1).to({scaleX:2.53,scaleY:2.53},1).to({scaleX:2.33,scaleY:2.33},1).to({scaleX:2.15,scaleY:2.15},1).to({scaleX:2,scaleY:2},1).to({scaleX:1.87,scaleY:1.87},1).to({scaleX:1.76,scaleY:1.76},1).to({scaleX:1.68,scaleY:1.68},1).to({scaleX:1.62,scaleY:1.62},1).to({scaleX:1.57,scaleY:1.57},2).to({scaleX:5.84,scaleY:5.84},7).wait(1));

	// Layer 1
	this.instance_3 = new lib.sprite134();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1,0.2,1.594,1.594);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.53,scaleY:1.53},1).to({scaleX:1.37,scaleY:1.37},3).to({scaleX:1.2,scaleY:1.2},4).to({scaleX:1.08,scaleY:1.08},4).to({scaleX:1.03,scaleY:1.03},3).to({scaleX:1.01,scaleY:1.01},1).to({scaleX:1.01,scaleY:1.01},1).to({scaleX:1,scaleY:1},2).to({scaleX:1.59,scaleY:1.59},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320.8,-309.7,633.4,627.1);


(lib.Символ36_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handdd
	this.instance_1 = new lib.Символ51();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.7,60,1,1,0,0,0,68.5,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.sprite144();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.2,-0.3,0.084,0.084);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36_1, new cjs.Rectangle(-66.8,-26.2,137.1,132.3), null);


(lib.Символ40_1 = function(mode,startPosition,loop) {
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
	this.instance_3 = new lib.Символ36_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-31.1,95.5,0.978,1,0,0,180,77,79.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.run_box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.pricel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor9.bind(this));
		
		function fl_CustomMouseCursor9() {
			this.pricel.x = stage.mouseX/window.devicePixelRatio;
			this.pricel.y = stage.mouseY/window.devicePixelRatio;
		}
		
		
		var _this = this;
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		_this.button_1.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler() {
			_this.box.gotoAndPlay(6);
		}
		
		
		_this.button_2.addEventListener("mouseover", fl_MouseOverHandler1);
		
		function fl_MouseOverHandler1() {
			_this.box.gotoAndPlay(1);
		}
		
		
		stage.canvas.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover() {
			_this.man.gotoAndPlay(1);
			_this.pricel.gotoAndStop(1);
		}
		
		stage.canvas.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout() {
			_this.man.gotoAndPlay(11);
			_this.box.gotoAndPlay(6);
				_this.pricel.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 13
	this.pricel = new lib.Символ40_1();
	this.pricel.parent = this;
	this.pricel.setTransform(22.7,209.7,1,1,0,0,0,132.7,108.7);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// Слой 12
	this.button_2 = new lib.Символ47();
	this.button_2.parent = this;
	this.button_2.setTransform(479,154.2,1,1,0,0,0,160.1,153.5);
	new cjs.ButtonHelper(this.button_2, 0, 1, 2, false, new lib.Символ47(), 3);

	this.button_1 = new lib.Символ47();
	this.button_1.parent = this;
	this.button_1.setTransform(158.1,154.2,1,1,0,0,0,160.1,153.5);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.Символ47(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_1},{t:this.button_2}]}).wait(1));

	// Слой 10
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(320,280.8,0.772,0.772,0,0,0,197.6,24.2);

	this.instance_1 = new lib.Символ35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(295.7,16.6,0.671,0.671,0,0,0,245.6,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.box = new lib.Символ49();
	this.box.parent = this;
	this.box.setTransform(525.8,88.6,1,1,0,0,0,70.8,65.8);

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

	// Слой 1
	this.man = new lib.Символ50();
	this.man.parent = this;
	this.man.setTransform(136.7,166.3,1,1,0,0,0,99.2,114.5);

	this.timeline.addTween(cjs.Tween.get(this.man).wait(1));

	// Слой 9
	this.instance_2 = new lib.Символ32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(323.7,152.6,1,1,0,0,0,326.6,156.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(695.1,153,1,1,0,0,0,699.1,175);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(316,130.5,1398.2,350);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bedro.png?1481550288646", id:"bedro"},
		{src:"images/biox.png?1481550288646", id:"biox"},
		{src:"images/doola.png?1481550288646", id:"doola"},
		{src:"images/fon.jpg?1481550288646", id:"fon"},
		{src:"images/handdd.png?1481550288646", id:"handdd"},
		{src:"images/head.png?1481550288646", id:"head"},
		{src:"images/noga.png?1481550288646", id:"noga"},
		{src:"images/ruka.png?1481550288646", id:"ruka"},
		{src:"images/sheki.png?1481550288646", id:"sheki"},
		{src:"images/telo.png?1481550288646", id:"telo"},
		{src:"images/wing.png?1481550288646", id:"wing"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;