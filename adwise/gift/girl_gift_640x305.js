(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bedro = function() {
	this.initialize(img.bedro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,57);


(lib.bedro2 = function() {
	this.initialize(img.bedro2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,128);


(lib.boobs = function() {
	this.initialize(img.boobs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,101);


(lib.box = function() {
	this.initialize(img.box);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,203);


(lib.candy = function() {
	this.initialize(img.candy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,120);


(lib.divan11 = function() {
	this.initialize(img.divan11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,297);


(lib.foot = function() {
	this.initialize(img.foot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,121);


(lib.gif4 = function() {
	this.initialize(img.gif4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,100);


(lib.giftt1 = function() {
	this.initialize(img.giftt1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,98);


(lib.gir5 = function() {
	this.initialize(img.gir5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,100);


(lib.lokot = function() {
	this.initialize(img.lokot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,22);


(lib.noga = function() {
	this.initialize(img.noga);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,164);


(lib.ny_tree = function() {
	this.initialize(img.ny_tree);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,316,400);


(lib.pol = function() {
	this.initialize(img.pol);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,766,115);


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,67);// helper functions:

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


(lib.Символ90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("СОБРАНО ПОДАРКОВ 0 ИЗ 5", "27px 'Micra'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 545;
	this.text.parent = this;
	this.text.setTransform(124.6,-0.1,0.621,0.621);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ90, new cjs.Rectangle(-46,-1.4,341.2,40.8), null);


(lib.Символ87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAugCQAAASgOANQgNAOgTAAQgTAAgOgOQgLgKgBgJQAAgCAAgBQAAgBABgBQACgKAPgKQAPgKAPgMQAQgMANAOQAOANAAAUg");
	this.shape.setTransform(4.6,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHAIQgDgEAAgEQAAgDADgEQADgDAEAAQAFAAADADQADAEAAADQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_1.setTransform(5.3,4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghAdQgLgKgBgJIAAgDIABgCQACgKAPgKIAdgWQARgMANAOQANANAAAUQAAASgNANQgNAOgTAAQgTAAgOgOgAAAgCQgDADAAAEQAAAEADADQACAEAFAAQAFAAADgEQADgDAAgEQAAgEgDgDQgDgEgFAAQgFAAgCAEg");
	this.shape_2.setTransform(4.6,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ87, new cjs.Rectangle(-1,-1,11.1,10.7), null);


(lib.Символ81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("ACZHyQgFABgCgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgJgEIjyh2QhKgigXgKQg6gVgdgMQgigOgugWIhPgoQgfgQgcgKIg2gRQgXgIg7gdIgogVQgVgPgMgFQgKgFgSgFIgcgJQgPgFgbgQQgDABgCgBQgDgCAAgGIAAiSQABgZgHgOIgLgSQgDgHgBgSIgBhbQAAgMAEgFQADgGAMgDIGKhlQAUgFAFAJQgDgaAFgbQACgNAEgFQAIgJAXgCQAmgCAQADIAZAFQAOABAJgFQAEgDAKgLQAIgJAHgCQAIgCAQAGQAaALANAJIANAKIANAJQAJAFAcAIQA8AQAyASQADACADADQAVgoAmgiQAYgWAUAAQANgBALAKQAKAKgCAMQAdgFAdgBQAygDANAZQAEAIAAAMIgBAWQgDAiAHAkQADAOAGAGQAFAFAQAGICiAuQAgAKATAJIAeAPQAKAEAdAHQAqAKBNAcQBPAcAnAKQAPAEAFAFQAGAHAAAQIADBbQABAbgNAJIgJAEIgJADIgNAJIAAABQgFA9AHBDQACAYgEAKQgHAVgpAPIibA4Ig0AVIg3AbQgUAKgpARIhRAgQg/AWgSAIQgYAMgjAWIg1AjIACAFIgHgCg");
	this.shape.setTransform(84.6,49.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ81, new cjs.Rectangle(0,0,169.2,99.9), null);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("ABiHhQgggMgOgCIgfgCQgbgBhOgIQgggDgPgFIgcgNQgRgHgXgCIgqgDQgygEgbgJQgHgCgEgCQAAALgGADIgFgDQgCgKACgPIAEgYIABghIAAl6IgHgBQgCAEgFADIgBgJIgBgCIABgCIgDgSIgCgWIgBghIAAhMQAAgVgFgIQAAgEAFgBQAEgBADADQADACAAAGQAFgJAMgFIAXgJQARgGAvggQAngZAcgCQgBgIgPgSQgMgPAFgKQADgFAHgDIANgDQATgGgBgLQgGgKAGgLQAGgMALgEQAJgEANABIAXAEQAKgfAKgOQAIgKALgGQALgGAMACQAIABAUALQAQAJAKgCQAGgBALgFQAKgFAGgBQAIgCAIAHQAIAGgEAHQAIgHALgBQAMgBAJAGQAJAFAFALQAEALgCAKQAGgIANAEQAMAEAGAKIAKAVQAFANAGAGIANAJQAHAGADAFQACAFgBAQQgBANAGAFQBBAABDAPQAIACADAEQADAEgDALQgIAZABA1QAFDqgJD6QADABABAEQABAEgGAGIAAABIAAAEQAAAEgEADQgEAEgBgEIgBgCIgDADIgLAJIgJALIgMAJQgOALgSAQIhAA4IgRAQQgLAKgHALIgJALIgJAGQgEAEgFACQgGACgDgDIgFASg");
	this.shape.setTransform(36.2,49.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ77, new cjs.Rectangle(0,0,72.4,98.5), null);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("ABOH1QgZgDhJgTQhIgThxgPQimgWgUgDQgOgCgEgGQgDgFAAgLQAAjaALjQQgKAAgHgLQgGgJgCgNQgLhAAFg/IgEgEQgEgEACgFQABgHAMgGQAzgaAZgOQAsgYAVgcQgKADgIgKQgHgKACgLQABgIAHgMIAJgUIAEgTQACgMAEgHQAGgJATgMQApgaAZgGQAIgCAUgBQASgCAKgDQANgDAYgLQAhgNBDAAQAQAAAHAEQAOAIACAdQAIgTAVgKQAUgLAUAEQAKACARAIQASAJAIACIAWAFQANACAHAEQAPAIAUAcQAHAKgDAFQgCAEgLAEQgXAFgMAWQANAHAbgNQAbgNANALQAEADAGALQAGAHAUAIQATAHAFAJIAGALQACAGAEADQAGAEAMgBIAtgDQAOAAADAEIABAAIACADQACAEAAAHIAEAeQACAMgEAEIACBQQABAegHAOQgDAEgHAIIgKANQgHAMABATIAGAgQAKArABBCIACBwQADArgBAOQgBAggMAVQgLASgeAZIiXB+QgcAZgVAKQgdAOgmAAQgOAAgPgCg");
	this.shape.setTransform(44,50.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ70, new cjs.Rectangle(0,0,88,100.6), null);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.giftt1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ62, new cjs.Rectangle(0,0,71,98), null);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gif4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(0,0,87,100), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gir5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(0,0,169,100), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgqUACZIAAkxMBUpAAAIAAExg");
	this.shape.setTransform(270.9,15.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(0,0,541.8,30.7), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE1D14").s().p("Ax/AlIAAhKMAj/AAAIAABKg");
	this.shape.setTransform(115.2,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(0,0,230.5,7.5), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A8icjQrzrzAAwwQAAwuLzr0QLzrzQvAAQQvAALzLzQL0L0AAQvQAAQvr0LzQrzLzwvAAQwvAArzrzg");
	this.shape.setTransform(258.2,258.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(0,0,516.5,516.5), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Egx/gX0MBj/AAAMAAAAvpMhj/AAAg");
	this.shape.setTransform(320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-1,-1,642,307), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pol();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(0,0,766,115), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD1D14").s().p("An5BzIAkgEQAmh6AbiiICKgSQAKCVAhCRIAjADIgDAhQAWhJAQhHQAUhVANhUICDgSQAMBLAVBXQAVBWAfBjIhkAXIgNg+IhCAHIgMA/IhigWIgDAVQhLgDhLACQhkAEgyAFgAlxBoIAwgBQgJgsgPhogAhNAzIAtAAIgWiDgAO4C9QgKgCgJgFQgIgFgGgJQgGgJgCgKIgBgJIhcArIhUi4QgBBPAFBMIhcAXIgClbIBngQQgFArgBAZQAtgkAkgkIBXApIhmBVIBqC9QACgIAFgGQAHgIAIgFQAIgFALgDQALgCAKABQAKACAJAHQAJAGAFAIQAGAIACAJQACAKgDAKQgCAKgGAJQgGAJgIAFQgJAFgLACIgKABIgLgBgAwNAPQgDhwACg6IDsghQgCAWAHFOIhjAOIABkXIgrAFQgEA8ABBAQAABAAFBHIhjAVQACg3gEh2gABmAHQABhLgCgtQgBgtgFgPQBZgVA1ADQAaACAUAHQAUAIANANQAdAbABA1QAAAVgFATQgEASgKARQgSAbgfATQgkAYgyAIQgCAjAGBDIhiAKQADhcABhVgAC7hqIACBbQAhAAAUgUQAQgNADgXQAEgdgYgJQgIgEgLAAQgPAAgUAHgAGsCpQgZgOgUgcQgKgMgHgOQgHgPgFgRQgJgjACgkQACgiAJgeQAJgeARgbQArhDBGAAQAfAAAZAOQAZAOAUAbQALAPAHAQQAIAPAEAQQAIAggBAnQgCA/gkA3QgsBDhFAAQgfAAgZgOgAHEg0QgNAggDAgQgBAQAFAOQADAKAEAIQAEAIAGAFQANAMAVAAQAOAAALgGQAKgGAHgNQAMgVABggQAAgRgDgRQgDgRgHgQQgOghgYAAQgbAAgQApgArFCpQgZgOgUgcQgJgMgHgOQgIgPgFgRQgIgjABgkQACgiAJgeQAKgeARgbQArhDBGAAQAeAAAZAOQAZAOAUAbQALAPAIAQQAHAPAFAQQAIAggBAnQgCA/glA3QgrBDhGAAQgfAAgZgOgAqtg0QgNAggDAgQAAAQAFAOQACAKAEAIQAFAIAFAFQAOAMAUAAQAOAAALgGQALgGAHgNQAMgVAAggQAAgRgDgRQgDgRgHgQQgNghgYAAQgcAAgQApgAOkA4IgBh3IgCiAIBuAGIgjD1IhIgEg");
	this.shape.setTransform(104,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8B0B04").s().p("An5BzIAkgEQAmh6AbiiICKgSQAKCVAhCRIAjADIgDAhQAWhJAQhHQAUhVANhUICDgSQAMBLAVBXQAVBWAfBjIhkAXIgNg+IhCAHIgMA/IhigWIgDAVQhLgDhLACQhkAEgyAFgAlxBoIAwgBQgJgsgPhogAhNAzIAtAAIgWiDgAO4C9QgKgCgJgFQgIgFgGgJQgGgJgCgKIgBgJIhcArIhUi4QgBBPAFBMIhcAXIgClbIBngQQgFArgBAZQAtgkAkgkIBXApIhmBVIBqC9QACgIAFgGQAHgIAIgFQAIgFALgDQALgCAKABQAKACAJAHQAJAGAFAIQAGAIACAJQACAKgDAKQgCAKgGAJQgGAJgIAFQgJAFgLACIgKABIgLgBgAwNAPQgDhwACg6IDsghQgCAWAHFOIhjAOIABkXIgrAFQgEA8ABBAQAABAAFBHIhjAVQACg3gEh2gABmAHQABhLgCgtQgBgtgFgPQBZgVA1ADQAaACAUAHQAUAIANANQAdAbABA1QAAAVgFATQgEASgKARQgSAbgfATQgkAYgyAIQgCAjAGBDIhiAKQADhcABhVgAC7hqIACBbQAhAAAUgUQAQgNADgXQAEgdgYgJQgIgEgLAAQgPAAgUAHgAGsCpQgZgOgUgcQgKgMgHgOQgHgPgFgRQgJgjACgkQACgiAJgeQAJgeARgbQArhDBGAAQAfAAAZAOQAZAOAUAbQALAPAHAQQAIAPAEAQQAIAggBAnQgCA/gkA3QgsBDhFAAQgfAAgZgOgAHEg0QgNAggDAgQgBAQAFAOQADAKAEAIQAEAIAGAFQANAMAVAAQAOAAALgGQAKgGAHgNQAMgVABggQAAgRgDgRQgDgRgHgQQgOghgYAAQgbAAgQApgArFCpQgZgOgUgcQgJgMgHgOQgIgPgFgRQgIgjABgkQACgiAJgeQAKgeARgbQArhDBGAAQAeAAAZAOQAZAOAUAbQALAPAIAQQAHAPAFAQQAIAggBAnQgCA/glA3QgrBDhGAAQgfAAgZgOgAqtg0QgNAggDAgQAAAQAFAOQACAKAEAIQAFAIAFAFQAOAMAUAAQAOAAALgGQALgGAHgNQAMgVAAggQAAgRgDgRQgDgRgHgQQgNghgYAAQgcAAgQApgAOkA4IgBh3IgCiAIBuAGIgjD1IhIgEg");
	this.shape_1.setTransform(105.2,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,0,209.1,39.9), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD1D14").s().p("AIdDAIAMgtIkqATIAElfIBmgMQgKBVgDBJQgDBIADA7IApgEIgBkdIBngNQgSCvAIB2IAugGIgGkKIBigRQgIB2gBA0QgBAxABAxIA+gIQgfBTgRBKgAjahkIhRAJIAHheID1gYIAQBfIhcAFQgCAeADBCQAEBAAJBjIhsAXgAgqCSQAahVAThTQAThVAOhVICEgSQALBMAWBWQAVBXAeBjIhlAXIgNg+IhCAHIgLA/gABPAiIAtgBIgXiCgAmVizIBmgQQgUDFAMCQIhdAVgAqVCiQAMg6ABh2QAAhEgEhmIBcgSQgEAvACA3QAYABAVADQAVAEASAIQAfAOASAZQAKAPAFASQAEARAAAVQgBA1gdAgQgNAQgUALQgUAKgaAIQglAIg2AAQgYAAgbgCgAo3gMIgCBcQARACANgCQAOgBAKgHQAYgNgEgcQgDgWgQgLQgPgLgWAAIgQABgAudCgQADhZgGhlIgIiZQAqgTA1AAQA2AAAkAUQASAMAKAPQAKAPACATQADAqgtAmQA2AHAVAuQAMAWgEAXQgCANgFAKQgGAMgJALQgpAshCANQgYADgfABQgfAAgogEgAtOAPIACBAQAZACASgEQAZgIAFgTQAGgagbgJQgNgFgNAAQgOAAgOAFgAtah/IAFBAQArgKAKgSQAIgSgFgKQgGgKgTgBIgIgBQgNAAgPAEgAKjgPQgBhUgHhXIBxgRQgMBFgEAiQgDBFACAlQAHgcAKgdQAKgfAOgeIAhhOIBkgNQgFAugBAuQgCAuABAsIAFCcIhVAUIgKiyQgSAggRAsQgTAugFAkIhjAYQgFg8gChyg");
	this.shape.setTransform(93.7,21.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8B0B04").s().p("AIdDAIAMgtIkqATIAElfIBmgMQgKBVgDBJQgDBIADA7IApgEIgBkdIBngMQgSCuAIB2IAugFIgGkLIBigRQgIB1gBA1QgBAxABAxIA+gIQgfBTgRBKgAjahkIhRAJIAHheID1gYIAQBeIhcAGQgCAeADBCQAEA/AJBkIhsAWgAgqCSQAahVAThTQAThVAOhUICEgSQALBKAWBYQAVBWAeBjIhlAXIgNg+IhCAHIgLA/gABPAiIAtgBIgXiCgAmVizIBmgRQgUDGAMCPIhdAXgAqVCiQAMg6ABh2QAAhEgEhmIBcgSQgEAvACA3QAYABAVADQAVAEASAIQAfAOASAZQAKAPAFASQAEARAAAVQgBA1gdAgQgNAQgUALQgUAKgaAIQglAIg2AAQgYAAgbgCgAo3gLIgCBbQARACANgCQAOgBAKgHQAYgNgEgcQgDgWgQgKQgPgMgWAAIgQACgAudCgQADhagGhjIgIiaQAqgTA1AAQA2gBAkAVQASAMAKAPQAKAPACATQADAqgtAmQA2AHAVAuQAMAWgEAXQgCAMgFALQgGAMgJALQgpAshCANQgYAEgfAAQgfAAgogEgAtOAPIACBAQAZACASgEQAZgIAFgTQAGgagbgJQgNgFgNAAQgOAAgOAFgAtah/IAFBAQArgKAKgSQAIgSgFgKQgGgKgTgBIgIgBQgNAAgPAEgAKjgPQgBhUgHhYIBxgQQgMBFgEAiQgDBFACAlQAHgcAKgeQAKgeAOgeIAhhOIBkgNQgFAugBAuQgCAuABAsIAFCcIhVAUIgKiyQgSAggRAsQgTAugFAkIhjAYQgFg8gChyg");
	this.shape_1.setTransform(94.5,21.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(0,0,188.2,42.9), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AoYMzIgWyzIgmgYIAAitICTgsIABgBQAVgTANgGQAOgGAagDQARgCAIACIAFADQgGgIgBgLIgBgVIAAgWQABgMAEgJQAIgQAVgGQAMgEAaAAQAUAAANACQgJgGgGgIQgEgFgBgFIgCgHIgEgIQgEgJgBgTQAAgMACgFIAFgGQAIgLAGgDQAHgFATgBIAegCIADAAIAAgBIAEgDIAFAAQgFgGgDgKQgCgJgBgSQgBghAGgOIADgHIADgKIAGgGIAFgHIACgEQADgDAGgCQAGgDAGAAIATgBIAVABQALABAIAEIAKAIIALAKIAKALQAIAJAEAKIAFgCQACAKAMASQAQgsBMgMQAGgJATgNQAXAFA0gFQAZApBNAYQgDAPAIAOQBXAigsAzQAcBBAdAKQgXAwgXADQAbAeAHAkID0AdIAAC7IgfAQIgKShIoEDtgAkirjQgZADgNAKQgEADgCADIgEAOIgBABIAAAHQABAKACAEQAGAMANAHIBkgfQgFgXACgSIgOgEIgBAAIgUgBQgRAAgSADgAjttaQgCACgCAEIgIAPQgKARAAAMQgBAHADAEQABADAHAHIAeAbIADADQANgmAzgHQgUgjgHgXIgBAAQgDABgFgBQgNgBgYAAQgIAAgEADgAiLvOQgVACgPANQgFAFgCAEQgCAFAAAKIAAAcIgBAHIgCACQADAIAEAEQAtgeBFgjQgCgEgEgEQgJgIgTgEQgPgEgNAAIgLABg");
	this.shape.setTransform(59.7,101.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,-0.1,119.4,202.8), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmRBNIgHgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgKQAAAAAAgBQAAgBABAAQAAAAABgBQAAAAABAAIABAAIASABQAFAAADgCQACgCADgLIgCAAQgGAAgDgDQgEgEgBgGIgVhIIAAgBQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAQAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIARBAQAAABAAAAQAAABAAABQABAAAAAAQAAABABAAIABAAIARhEQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIARAAIACABIAAACIAAABIgaBcQgFAQgHAFQgIAEgNAAgABqBEIgCgBIgBgCIAAgTIg9AAIAAATIgBACIgCABIgPAAIgCgBIgBgCIAAghIABgCIACgBIALAAIAQg5QAEgQARAAQASAAAFAQIAQA5IAKAAIACABIABACIAAAhIgBACIgCABgABZAdIgOg1IgBgBIgDAAIgBABIgOA1IAhAAgAg5A+QgBAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAIAFgSIAGgTQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIAPAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIgIASIgHATIgCABgAE/ApQgHgHAAgNIAAgBQAAgOAKgGQAJgGAUAAIAKAAIAAgIQAAgHgDgDQgDgCgIAAIgbABQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBIAAgKIACgDIAKgCIASgBQAkAAAAAeIAAA5IgBACIgDABIgNAAIgDgBIgBgCIAAgDQgLAIgLAAQgNAAgIgHgAFSAJQgFADAAAIIAAABQABAFACADQACACAHAAQAIAAAIgFIAAgTIgKAAQgJAAgEACgADsAvQgJgBgCgBQgCgCABgDIAAhMQAAgDABgCQABgCAJAAIASgBQAbAAAJAGQAJAGAAANIAAABQABAHgEAFQgDAFgHABQAOAEAAAQIAAABQAAAOgLAGQgKAHgYAAgAD0AgIAKAAQAOAAAFgDQAFgDAAgHIAAgBQAAgHgEgCQgFgCgKAAIgPAAgAD0gGIAPAAQAJAAAFgDQAFgCAAgHIAAgBQAAgGgFgCQgEgBgLAAIgOAAgACMApQgIgHABgNIAAgBQAAgOAJgGQAJgGAUAAIAKAAIAAgIQAAgHgCgDQgEgCgHAAIgbABQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIAAgKIABgDIALgCIASgBQAjAAAAAeIAAA5IgBACIgDABIgNAAIgCgBIgBgCIAAgDQgMAIgLAAQgNAAgHgHgACeAJQgEADAAAIIAAABQAAAFADADQABACAIAAQAIAAAHgFIAAgTIgKAAQgIAAgFACgAiGAlQgLgKAAgUIAAgKQAAgTAKgLQAKgLASAAQASAAAKALQAKALAAATIAAAHQAAAFgDAAIg0AAQAAAIAEAGQAFAGAKAAIAegBQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAIAAALQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIgKACQgIACgPAAQgQAAgLgLgAh3gVQgFAGAAAJIAAAAIAiAAIAAAAQAAgJgEgGQgGgFgHAAQgIAAgEAFgAGaAoQgHgIAAgUIAAg0IABgCIACgBIAPAAIACABIABACIAAA0QAAAKADAEQACAEAJAAQAGAAAMgHIAAg/IABgCIACgBIAPAAIACABIABACIAABTIgBACIgCABIgPAAIgCgBIgBgCIAAgEQgMAIgOAAQgNAAgHgHgAH1AvIgDgBIgBgCIAAgTQAAAAAAgBQAAgBABAAQAAAAABgBQABAAABAAIANAAQABAAABAAQAAABABAAQAAAAAAABQABABAAAAIAAATIgBACIgDABgAi0AuQgCAAgCgEIgZgjIAAAkIgBACIgDABIgOAAIgCgBIgBgCIAAgkIgaAlIgCABIgCABIgUAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAAAIADgGIAdgmIgVgaIgLgOIAAgBQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAIASAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAAAABIAcAkIAAgjIABgCIACgBIAOAAIADABIABACIAAAjIAcglIABgBIAUAAQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIgBABIggAoIAVAcIAMAQIAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAm/AuIgCgBIgBgCIAAgwIgtAAIAAAwIgBACIgCABIgQAAIgCgBIgBgCIAAhwIABgCIACgBIAQAAIACABIABACIAAAtIAtAAIAAgtIABgCIACgBIAQAAIACABIACACIAABwIgCACIgCABgAH2AMIgCgBIgBgCIgDhQIABgDIADgBIAPAAIADABIABADIgDBQIgBACIgCABgAGog5QgHgEgDgGQgCgGAAgDQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAIAMAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAABABQACAKAKAAQAKAAADgKQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIALAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQABADgDAGQgDAGgGAEQgHAFgKAAQgKAAgGgFg");
	this.shape.setTransform(55.1,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(3.2,3.3,103.7,15.7), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Символ24, null, null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAuCdIgDgBIgBgCIAAhwQAAAAABgBQAAAAAAAAQAAgBAAAAQABAAAAgBQACgBALgCQALgCALAAQATAAAJAKQAKALAAATIAAAMQAAATgKALQgJALgTAAIgPgCIAAAdIgCACIgCABgABAA0IAAA4IAPABQAIAAAFgFQAEgFAAgNIAAgMQAAgMgEgFQgFgGgIAAIgPABgAhLCTIgBgBIgBgCIAAgTIg9AAIAAATIgBACIgCABIgPAAIgCgBIgBgCIAAghIABgCIACgBIALAAIAQg6QAEgQARAAQASAAAFAQIAQA6IAKAAIACABIAAACIAAAhIAAACIgCABgAhbBsIgOg2IgBgBIgDAAIgBABIgNA2IAgAAgACOB0QgLgLAAgSIAAgNQAAgSALgLQAKgLASAAQASAAAKALQAKALAAASIAAANQAAASgKALQgKALgSAAQgSAAgKgLgACdA6QgEAGAAAKIAAANQAAAKAEAGQAEAFAJAAQAIAAAFgFQAEgGAAgKIAAgNQAAgKgEgGQgFgGgIAAQgIAAgFAGgAgoB4QgIgHAAgNIAAgBQAAgOAKgHQAJgGAUAAIAKAAIAAgIQgBgHgCgDQgDgCgHAAIgbABQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIAAgKIABgDIAKgCIATgBQAiAAAAAeIAAA6IgBACIgCABIgOAAIgCgBIgBgCIAAgDQgLAIgLAAQgNAAgHgHgAgWBYQgEADAAAIIAAABQAAAFADADQABACAIAAQAHAAAIgFIAAgTIgKAAQgIAAgFACgAjrB0QgLgLAAgSIAAgNQAAgSALgLQAKgLASAAQASAAAKALQAKALAAASIAAANQAAASgKALQgKALgSAAQgSAAgKgLgAjbA6QgFAGAAAKIAAANQAAAKAFAGQADAFAJAAQAIAAAFgFQAEgGAAgKIAAgNQAAgKgEgGQgFgGgIAAQgIAAgEAGgAE9B+IgDgBIgBgCIAAgTQAAAAAAgBQAAgBABAAQAAAAABgBQABAAABAAIANAAQABAAABAAQAAABABAAQAAAAAAABQABABAAAAIAAATIgBACIgDABgAEVB9QgDAAgCgEIgZgjIAAAkIgBACIgCABIgPAAIgCgBIgBgCIAAhUIABgCIACgBIAPAAIACABIABACIAAAjIAcglIABgBIAUAAQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIgBABIghAoIAWAdIAMAQIAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAkZB9IgCgBIgBgCIAAhAIgBgEQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAgBAAIgVAAQgBAAAAAAQgBAAgBABQAAAAAAAAQgBAAAAABIgBAEIAABAIgBACIgCABIgPAAIgCgBIgBgCIAAhAQAAgLAFgGQAFgGAQAAIAVAAQAQAAAGAGQAFAGAAALIAABAIgBACIgCABgAE/BbIgDgBIgBgCIgDhRIABgDIADgBIAPAAIADABIABADIgDBRIgBACIgCABgAGTgtQgMgKAAgUIAAgLQAAgTALgLQAKgLASAAQASAAAKALQAKALAAATIAAAIQAAAFgDAAIg0AAQAAAIAEAGQAFAGAKAAIAegBIAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAIAAALQAAAAAAABQAAABAAAAQgBABAAAAQgBAAAAAAIgKACQgIACgPAAQgQAAgLgLgAGihoQgFAGAAAJIAAAAIAiAAIAAAAQAAgJgEgGQgGgFgHAAQgIAAgEAFgAE2gtQgKgLAAgTIABgeQAAgIACgIQADgHAFgFQAEgFAHgCQAGgDAQgDIAGgCQADgBABgFQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIARAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAASgWAFIgRADIgHADQgEACAAAEQAFgDAIAAQASAAAKALQAKAKAAATIAAAHQAAATgKALQgKALgSAAQgRAAgLgLgAFBhSIAAAHQAAAMAFAFQAEAFAIAAQARAAAAgWIAAgHQAAgMgDgFQgFgFgJAAQgQAAgBAWgADcgtQgLgKAAgUIAAgLQAAgTAKgLQAKgLASAAQASAAAKALQAKALAAATIAAAIQAAAFgDAAIg0AAQAAAIAEAGQAEAGALAAIAdgBIABAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAIAAALQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAAAIgKACQgJACgOAAQgQAAgLgLgADrhoQgFAGAAAJIAAAAIAiAAIAAAAQAAgJgFgGQgEgFgIAAQgHAAgFAFgACPgtQgJgKgBgSIAAgPQABgTAJgKQALgKAQAAQAKAAAGABIAHACIABADIAAALQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgBAAIgVgBQgPAAAAAVIAAAPQAAAVAPAAIAVgBIABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAKIgBAEIgHABQgGACgKAAQgQAAgLgLgAkMgkIgKgCIgBgCIAAgLQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAABAAIAaACQAIAAAEgDQACgCAAgGIAAgBQAAgGgCgDQgDgCgHAAIgYAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgLQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAYAAQAHAAADgCQACgCAAgGIAAgBQABgGgEgCQgEgBgHAAIgaABQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgLIABgCIAKgCQAJgBAJAAQASAAAJAGQAJAHAAANIAAABQAAAMgMAGQAFACADAGQADAFABAGIAAABQgBAcgjAAQgJAAgJgCgAllgtQgLgLAAgSIAAgNQAAgSALgLQAJgLATAAQARAAALALQAKALgBASIAAANQABASgKALQgLALgRAAQgTAAgJgLgAlWhnQgEAGAAAKIAAANQAAAKAEAGQAEAFAJAAQAHAAAFgFQAFgGAAgKIAAgNQAAgKgFgGQgFgGgHAAQgJAAgEAGgAnEgjQgJgBgDgCQgDgBAAgGIAAhlQAAgEADgCQABgCALgBIATgBQAxAAAAAhIAAADQAAAIgEAGQgDAHgIADQAQAHAAARIAAADQAAARgMAJQgMAJgZAAgAm9g1IANAAQAOAAAHgDQAGgEAAgJIAAgCQAAgIgFgFQgFgEgKAAIgUAAgAm9iJIAAAgIAUAAQAUAAgBgPIAAgCQAAgJgFgDQgHgEgPAAgAAKgqQgIgIABgUIAAg1IABgCIABgBIAQAAIABABIABACIAAA1QABAKACAEQADAEAIAAQAHAAALgHIAAhAIABgCIACgBIAPAAIADABIABACIAABUIgBACIgDABIgPAAIgCgBIgBgCIAAgEQgMAIgNAAQgOAAgGgHgAgkgkIgCgBIgBgBIAAg4IAAgCIAAABIgJAPIgEAJIgCABIgDAAIgPAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgMgXIgBAAIgBgBIAAACIAAA4IgBABIgBABIgPAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIAAhTQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAIAMAAIACABIADABIADAGIASAgIACACIABgBIAVgmQABgDAEAAIANAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAABTQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAi3gkIgMgCQgBAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAhSIACgCIACgBIAOAAIADABIABACIAAAZIAKAAQAqAAAAAfIAAAAQAAAfgqAAgAiwhRIAAAbIAKABQALAAAFgEQAFgDgBgHIAAAAQABgIgFgDQgFgDgLAAg");
	this.shape.setTransform(46.8,15.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,93.6,31.4), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E4D79A","#FFF2B0"],[0,1],207.6,0,-207.5,0).s().p("EggaAKFIAAgCMAAAgiXIAAgJMBA1AAAMAAAAw7g");
	this.shape.setTransform(556.7,156.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E1B800","#FFF2B0"],[0,1],-174.5,0,174.6,0).s().p("A7R6KMA2jAAAMAAAAiXMg2jAR+g");
	this.shape_1.setTransform(174.6,168.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,764.2,335.8), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ATTAAQAADVlqCXQlpCXoAAAQn/AAlqiXQlpiXAAjVQAAjVFpiXQFqiWH/AAQIAAAFpCWQFqCXAADVg");
	this.shape.setTransform(123.5,51.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AtoFsQlqiWAAjWQAAjVFqiXQFpiWH/AAQH/AAFqCWQFqCXAADVQAADWlqCWQlqCXn/AAQn/AAlpiXg");
	this.shape_1.setTransform(123.5,51.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AtpFsQlpiWAAjWQAAjVFpiWQFriXH+AAQIAAAFpCXQFqCWAADVQAADWlqCWQlpCXoAAAQn+AAlriXg");
	this.shape_2.setTransform(129.3,57.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-1,-1,253.8,110), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIIAAQAABTiYA7QiZA6jXAAQjXAAiYg6QiYg7AAhTQAAhSCYg7QCYg6DXAAQDXAACZA6QCYA7AABSg");
	this.shape.setTransform(52,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlvCNQiYg6AAhTQAAhSCYg7QCYg6DXAAQDYAACXA6QCZA7AABSQAABTiZA6QiXA7jYAAQjXAAiYg7g");
	this.shape_1.setTransform(52,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AlvCOQiYg7AAhTQAAhSCYg7QCZg6DWAAQDXAACZA6QCYA7AABSQAABTiYA7QiZA6jXAAQjWAAiZg6g");
	this.shape_2.setTransform(58.3,24.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-1,-1,111.3,45.6), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AExAAQAAA2haAmQhZAmh+AAQh9AAhagmQhZgmAAg2QAAg1BZgmQBagmB9AAQB+AABZAmQBaAmAAA1g");
	this.shape.setTransform(30.5,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjXBcQhZgmAAg2QAAg1BZgmQBagmB9AAQB/AABYAmQBaAmAAA1QAAA2haAmQhYAmh/AAQh9AAhagmg");
	this.shape_1.setTransform(30.5,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFCTQiJgKhbgzQhbgzAAg1QAAg2BZgmQBZgmB/AAQB9AABaAmQBZAnASBJQARBKhdAoQhMAhhoAAQgZAAgbgCg");
	this.shape_2.setTransform(31.5,14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-1,-1,64.1,30.8), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.box();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,120,203), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhjBOQgGgBgCgCQgDgDABgGQACgKAPgLQARgMAOgEQARgHAQAGQAMAEABAIQABAJgKAHIgQALQgNAJgFACQgHACgLAAQgKAAgNgCgAA5gBQgDgEAAgIQAAgPAGgOQAGgOANgOQAFgGAEgCQAGgDAGADQAGADACAPIACAOQgBAIgKAMIgSATQgGAGgFABIgGABQgEAAgDgCg");
	this.shape.setTransform(11,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,22,16.1), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ny_tree();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,316,400), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,45,67), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lokot();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,64,22), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.noga();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,75,164), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bedro2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,83,128), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.foot();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,163,121), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bedro();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,88,57), null);


(lib.CandyCane = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// candy
	this.instance = new lib.candy();
	this.instance.parent = this;
	this.instance.setTransform(0,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.CandyCane, new cjs.Rectangle(0,-75,38,120), null);


(lib.boobs_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.boobs();
	this.instance.parent = this;
	this.instance.setTransform(-43,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.boobs_1, new cjs.Rectangle(-43,-50.5,86,101), null);


(lib.sprite136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.sprite136, null, null);


(lib.shape142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(80.9,1,1).p("AaE6DQKuKvAAPUQAAPUquKvQquKvvWAAQvVAAquqvQquqvAAvUQAAvUKuqvQKuquPVAAQPWAAKuKug");
	this.shape.setTransform(199.7,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.1,-274.1,551.6,551.6);


(lib.shape137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AIoCbIxQibIRQiaIABAAIAAE1g");
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


(lib.Символ88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.boobs_1();
	this.instance.parent = this;
	this.instance.setTransform(43,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ88, new cjs.Rectangle(0,0,86,101), null);


(lib.Символ86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ87();
	this.instance.parent = this;
	this.instance.setTransform(4.5,4.3,1,1,0,0,0,4.5,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.76,scaleY:0.76,x:4.6},4).to({scaleX:1,scaleY:1,x:4.5},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,10.1,9.7);


(lib.Символ80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ81();
	this.instance.parent = this;
	this.instance.setTransform(85.3,50.6,1,1,0,0,0,84.6,50);
	this.instance.alpha = 0.41;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ56();
	this.instance_1.parent = this;
	this.instance_1.setTransform(84.5,50,1,1,0,0,0,84.5,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ80, new cjs.Rectangle(0,0,169.9,100.5), null);


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ77();
	this.instance.parent = this;
	this.instance.setTransform(35.6,50.2,1,1,0,0,0,36.1,49.2);
	this.instance.alpha = 0.41;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ62();
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.5,49,1,1,0,0,0,35.5,49);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ74, new cjs.Rectangle(-0.5,0,72.4,99.4), null);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ70();
	this.instance.parent = this;
	this.instance.setTransform(44.4,50.7,1,1,0,0,0,44,50.2);
	this.instance.alpha = 0.41;

	this.instance_1 = new lib.Символ60();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.5,50,1,1,0,0,0,43.5,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ71, new cjs.Rectangle(0,0,88.4,101), null);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ71();
	this.instance.parent = this;
	this.instance.setTransform(44.1,50.5,1,1,0,0,0,44.1,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:2.5,x:44.2,y:50.6},0).wait(1).to({rotation:0,x:44.1,y:50.5},0).wait(1).to({rotation:-2.2,y:50.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88.4,101);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.parent = this;
	this.instance.setTransform(43.5,50,1,1,0,0,0,43.5,50);

	this.instance_1 = new lib.Символ69();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.5,50,1,1,0,0,0,43.5,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87,100);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ68();
	this.instance.parent = this;
	this.instance.setTransform(43.5,50,1,1,0,0,0,43.5,50);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ68(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ65, new cjs.Rectangle(0,0,88.4,101), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ90();
	this.instance.parent = this;
	this.instance.setTransform(130.1,22.7,1.438,1.438,0,0,0,125.4,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-116.5,-4.4,490.8,58.7), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(324,21.8,0.918,0.918,0,0,0,129.8,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ50();
	this.instance_1.parent = this;
	this.instance_1.setTransform(353,24.8,1.303,1.294,0,0,0,270.9,15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(0,5,706,56.5), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(115.2,3.8,1,1,0,0,0,115.2,3.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8B0B03").s().p("Ax/AlIAAhKMAj/AAAIAABKg");
	this.shape.setTransform(115.9,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(0,0,231.2,9.4), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(115.5,4.7,1,1,0,0,0,115.5,4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.56,x:115.6},5,cjs.Ease.get(-1)).to({regX:115.6,scaleX:0.22},5,cjs.Ease.get(1)).to({regX:115.7,scaleX:0.61,x:115.7},5,cjs.Ease.get(-1)).to({regX:115.5,scaleX:1,x:115.5},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,231.2,9.4);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(113.6,21.2,0.85,0.85,0,0,0,104,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:104.1,scaleX:0.97,scaleY:0.97},5,cjs.Ease.get(-1)).to({regX:104,scaleX:1.09,scaleY:1.09,x:113.5},5,cjs.Ease.get(1)).to({scaleX:0.98,scaleY:0.98,x:113.6},5,cjs.Ease.get(-1)).to({scaleX:0.85,scaleY:0.85},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.2,4.7,177.7,33.9);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(114.4,25.7,1.221,1.221,0,0,0,93.7,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:93.6,scaleX:1.03,scaleY:1.03,x:114.3,y:25.8},5,cjs.Ease.get(-1)).to({regX:93.7,regY:21.1,scaleX:0.85,scaleY:0.85,x:114.4,y:25.7},5,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05,x:114.3},6,cjs.Ease.get(-1)).to({regY:21,scaleX:1.22,scaleY:1.22,x:114.4},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,229.7,52.4);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(113.2,32.6,1,1,0,0,0,114.9,26.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ48();
	this.instance_1.parent = this;
	this.instance_1.setTransform(113.5,63.1,1,1,0,0,0,115.5,4.7);

	this.instance_2 = new lib.Символ46();
	this.instance_2.parent = this;
	this.instance_2.setTransform(114.1,98,1,1,0,0,0,114.1,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-2,6.4,231.2,108.4), null);


(lib.Символ28копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(75.1,23.1,1,1,0,0,0,56,10.6);

	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(74.3,23.6,0.601,0.458,0,0,0,123.6,51.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28копия, new cjs.Rectangle(-0.3,-0.2,152.3,50.2), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(75.7,24.2,1,1,0,0,0,46.8,15.7);

	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(74.3,23.6,0.601,0.458,0,0,0,123.6,51.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-0.3,-0.2,152.3,50.2), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ28копия();
	this.instance.parent = this;
	this.instance.setTransform(131.7,24.9,0.12,0.12,0,0,0,75.8,24.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off:false},0).to({regX:75.9,regY:24.8,scaleX:1,scaleY:1,y:24.8,alpha:1},6).wait(35).to({regX:75.8,regY:24.9,scaleX:0.12,scaleY:0.12,y:24.9,alpha:0},5).to({_off:true},1).wait(15));

	// Слой 1
	this.instance_1 = new lib.Символ28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(131.7,24.8,1,1,0,0,0,75.9,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({regX:76,regY:24.9,scaleX:0.28,scaleY:0.28,alpha:0},6).wait(56).to({regX:75.9,regY:24.8,scaleX:1,scaleY:1,alpha:1},6).wait(6));

	// Символ 19
	this.instance_2 = new lib.Символ19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(45.3,44.2,0.458,0.458,0,0,0,52,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({regY:19.9,scaleX:0.17,scaleY:0.17,alpha:0},5).wait(6).to({regY:20,scaleX:0.46,scaleY:0.46,alpha:1},5).wait(45).to({regY:19.9,scaleX:0.17,scaleY:0.17,alpha:0},0).to({regY:20,scaleX:0.46,scaleY:0.46,alpha:1},5).wait(11));

	// Символ 18
	this.instance_3 = new lib.Символ18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(14,57.5,0.419,0.419,0,0,0,30.5,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({regX:30.6,regY:13.4,scaleX:0.24,scaleY:0.24,alpha:0},5).wait(7).to({regX:30.5,regY:13.2,scaleX:0.42,scaleY:0.42,alpha:1},5).wait(45).to({regX:30.6,regY:13.4,scaleX:0.24,scaleY:0.24,alpha:0},0).to({regX:30.5,regY:13.2,scaleX:0.42,scaleY:0.42,alpha:1},5).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,-0.2,206.8,64.7);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(60,101.5,1,1,0,0,0,60,101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,120,203), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah/DAQgKgBgfgFIjWgrQgagFgMgHQgXgMgNggQgGgOgKgqQgHgbABgMQABgKAIgUQAYg4AUgWQAlgtBJgQQAcgGAkgCIBAgCIELgEQCZACBwAaQBKAQAeAiQAQARAIAXQAIAWgCAXQgCAYgMAUQgMAVgTAOQgPALggANIhMAbQgsAQgbATQgYATgOAHQgZAOgmADQgOABg1AAQhCgChMAJQgiAEgQAAIgHAAg");
	mask.setTransform(22.5,5.4);

	// Слой 2
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(8.2,11,1,1,0,0,0,32,11);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:3.7,y:11.5},9,cjs.Ease.get(-1)).to({x:-1.3,y:12.1},10,cjs.Ease.get(1)).to({x:3.5,y:11.6},10,cjs.Ease.get(-1)).to({x:8.2,y:11},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.5,33.5,1,1,0,0,0,22.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1,skewX:-4,x:20.2,y:33.6},9,cjs.Ease.get(-1)).to({scaleY:1.01,skewX:-8.5,x:17.5,y:33.5},10,cjs.Ease.get(1)).to({regX:22.4,scaleY:1,skewX:-4.3,x:20,y:33.6},10,cjs.Ease.get(-1)).to({regX:22.5,scaleY:1,skewX:0,x:22.5,y:33.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.8,0,68.9,67);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(44,28.5,1,1,0,0,0,44,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,88,57), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(107.5,36.5,1,1,0,0,0,11,8.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(10));

	// boobs
	this.instance_1 = new lib.Символ88();
	this.instance_1.parent = this;
	this.instance_1.setTransform(143.2,94.8,1,1,0,0,0,43,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.05,scaleY:1.05,x:143.3,y:94.7},9).to({scaleX:1,scaleY:1,x:143.2,y:94.8},10).to({scaleX:1.05,scaleY:1.05,x:143.3,y:94.7},9).to({scaleX:1,scaleY:1,x:143.2,y:94.8},10).to({scaleX:1.05,scaleY:1.05,x:143.3,y:94.7},9).to({scaleX:1,scaleY:1,x:143.2,y:94.8},10).wait(1));

	// Слой 1
	this.instance_2 = new lib.divan11();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(58));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,291,297);


(lib.sprite143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape142("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-199.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite143, new cjs.Rectangle(-275.5,-274.1,551.6,551.6), null);


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


(lib.sprite106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Candy-Cane
	this.instance = new lib.CandyCane();
	this.instance.parent = this;
	this.instance.setTransform(14.5,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:38.8},3,cjs.Ease.get(-1)).to({y:32.5},3,cjs.Ease.get(1)).to({y:39.2},4,cjs.Ease.get(-1)).to({y:45},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.5,-30,38,120);


(lib.Символ85 = function(mode,startPosition,loop) {
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

	// Слой 4
	this.instance = new lib.Символ86();
	this.instance.parent = this;
	this.instance.setTransform(114.9,33.2,1,1,0,0,0,4.5,4.3);

	this.instance_1 = new lib.Символ86();
	this.instance_1.parent = this;
	this.instance_1.setTransform(102,41.5,1,1,0,0,0,4.5,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(145.5,148.5,1,1,0,0,0,145.5,148.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,291,297);


(lib.Символ83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(59.6,101.5,1,1,0,0,0,59.6,101.3);
	this.instance.alpha = 0.461;

	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60,101.7,1,1,0,0,0,60,101.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ83, new cjs.Rectangle(0,0,120,203.2), null);


(lib.Символ82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ80();
	this.instance.parent = this;
	this.instance.setTransform(84.5,50,1,1,0,0,0,84.5,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:47.3},0).wait(1).to({y:50},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169.9,100.5);


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ74();
	this.instance.parent = this;
	this.instance.setTransform(36.1,49,1,1,0,0,0,35.5,49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:35.6,rotation:2.7,x:38.6,y:47.4},0).wait(1).to({regX:35.5,rotation:0,x:36.1,y:49},0).wait(1).to({rotation:-3.7,x:32.8,y:46.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72.4,99.4);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(84.5,50,1,1,0,0,0,84.5,50);

	this.instance_1 = new lib.Символ82();
	this.instance_1.parent = this;
	this.instance_1.setTransform(85,50.2,1,1,0,0,0,85,50.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169,100);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.parent = this;
	this.instance.setTransform(35.5,49,1,1,0,0,0,35.5,49);

	this.instance_1 = new lib.Символ78();
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.6,49.7,1,1,0,0,0,36.1,49.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,98);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ67();
	this.instance.parent = this;
	this.instance.setTransform(84.5,50,1,1,0,0,0,84.5,50);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ67(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ64, new cjs.Rectangle(0,0,169.9,100.5), null);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ66();
	this.instance.parent = this;
	this.instance.setTransform(35.5,49,1,1,0,0,0,35.5,49);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ66(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ63, new cjs.Rectangle(-0.5,0,72.4,99.4), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.main1 = new lib.sprite106();
	this.main1.parent = this;
	this.main1.setTransform(34,40.8,0.85,0.85,15,0,0,40,48);

	this.timeline.addTween(cjs.Tween.get(this.main1).to({rotation:0,y:40.9},29).to({rotation:15,y:40.8},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.8,-28.9,57.6,106.9);


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


(lib.Символ84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ83();
	this.instance.parent = this;
	this.instance.setTransform(60,101.5,1,1,0,0,0,60,101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:1.5,x:62.6,y:103.1},0).wait(1).to({rotation:0,x:60,y:101.5},0).wait(1).to({regX:60.1,rotation:-1.5,x:57.6,y:103.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,203.2);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(60,101.5,1,1,0,0,0,60,101.5);

	this.instance_1 = new lib.Символ84();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60,101.4,1,1,0,0,0,60,101.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,203);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.button_1 = new lib.Символ30();
	this.button_1.parent = this;
	this.button_1.setTransform(60,91.5,1,1,0,0,0,60,101.5);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.Символ30(), 3);

	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(60,101.5,1,1,0,0,0,59.6,101.3);
	this.instance.alpha = 0.422;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.button_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,-10.1,120,203.2), null);


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


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(60,101.5,1,1,0,0,0,60,101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:106.5},2,cjs.Ease.get(-1)).to({y:111.5},2,cjs.Ease.get(1)).to({y:107.5},2,cjs.Ease.get(-1)).to({y:101.5},2,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10,120,203);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(60,113.6,1,1,0,0,0,60,101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,2.1,120,203), null);


(lib.sprite141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite140();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:77.5},17).to({scaleX:1,scaleY:1,rotation:177.7,y:-0.1},22).to({rotation:182.3},1).to({scaleX:1,scaleY:1,rotation:259.7,x:0.1,y:0},17).to({scaleX:1,scaleY:1,rotation:360,x:0},22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.8,-147.6,301.7,298.7);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 7
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(208.6,97.3,1,1,2.8,0,0,37.6,82);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:12.5,x:206.5,y:109},13,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:24.2,x:203.8,y:122.9},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:13.8,x:206.2,y:110.7},14,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:2.8,x:208.6,y:97.3},15,cjs.Ease.get(1)).wait(1));

	// Символ 4
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(81.5,135.5,1,1,0,0,0,81.5,60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:60.6,scaleX:1,scaleY:1,rotation:-9.3,x:81.9,y:139.9},13,cjs.Ease.get(-1)).to({regX:81.4,regY:60.5,scaleX:1,scaleY:1,rotation:-20.6,x:82.1,y:144.9},15,cjs.Ease.get(1)).to({regY:60.6,scaleX:1,scaleY:1,rotation:-10.6,x:81.9,y:140.6},14,cjs.Ease.get(-1)).to({regX:81.5,regY:60.5,scaleX:1,scaleY:1,rotation:0,x:81.5,y:135.5},15,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_2 = new lib.Символ11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(126,146.5,1,1,0,0,0,60,101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:60.1,rotation:-1,x:124.4,y:147.7},13,cjs.Ease.get(-1)).to({regX:60,rotation:-2.2,x:122.1,y:148.9},15,cjs.Ease.get(1)).to({rotation:-1,x:124,y:147.8},14,cjs.Ease.get(-1)).to({rotation:0,x:126,y:146.5},15,cjs.Ease.get(1)).wait(1));

	// Символ 6
	this.instance_3 = new lib.Символ6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(148.8,72,1,1,9.7,0,0,41.5,64);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:64.1,scaleX:1,scaleY:1,rotation:15.3,x:153.8,y:77.7},13,cjs.Ease.get(-1)).to({regX:41.6,regY:64,scaleX:1,scaleY:1,rotation:21.9,x:159.5,y:84.1},15,cjs.Ease.get(1)).to({regX:41.7,regY:64.1,scaleX:1,scaleY:1,rotation:16,x:154.5,y:78.4},14,cjs.Ease.get(-1)).to({regX:41.5,regY:64,scaleX:1,scaleY:1,rotation:9.7,x:148.8,y:72},15,cjs.Ease.get(1)).wait(1));

	// Символ 5
	this.instance_4 = new lib.Символ5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(53,103.5,1,1,0,0,0,44,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:28.6,scaleX:1,scaleY:1,rotation:-10,x:49.7,y:112.2},13,cjs.Ease.get(-1)).to({regX:43.9,regY:28.5,scaleX:1,scaleY:1,rotation:-22,x:45.6,y:122.1},15,cjs.Ease.get(1)).to({regX:44,regY:28.6,scaleX:1,scaleY:1,rotation:-11.3,x:49.2,y:113.4},14,cjs.Ease.get(-1)).to({regY:28.5,scaleX:1,scaleY:1,rotation:0,x:53,y:103.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.9,249.9,248.2);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ruka
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(157.5,28.5,1,1,0,0,0,22.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// noga
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(211,191,1,1,0,0,0,117,124);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.girl = new lib.Символ85();
	this.girl.parent = this;
	this.girl.setTransform(145.5,148.5,1,1,0,0,0,145.5,148.5);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,-18.8,343.9,335.9), null);


(lib.sprite144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(22.5,1,1).p("EAn1AABQAAQhrqLpQrqLqwhAAQwgAArqrqQrqrpAAwiQAAwgLqrqQLqrqQgAAQQhAALqLqQLqLqAAQhg");
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

	// Слой 3
	this.instance_4 = new lib.Символ40();
	this.instance_4.parent = this;
	this.instance_4.setTransform(4.2,-3,1,1,0,0,0,258.2,258.2);
	this.instance_4.alpha = 0.309;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320.8,-309.7,633.4,627.1);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(211.5,242.8,1,1,0,0,0,145.5,148.5);

	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(372.5,167.2,0.837,0.837,0,0,0,158.1,199.8);

	this.instance_2 = new lib.Символ35();
	this.instance_2.parent = this;
	this.instance_2.setTransform(383,334.8,1,1,0,0,0,383,57.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(0,0,766,411.4), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sprite144();
	this.instance.parent = this;
	this.instance.setTransform(49.5,47.8,0.154,0.154);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(0,0,97.8,96.8), null);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(24.7,24.4,0.504,0.504,0,0,0,48.9,48.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-74.2},7,cjs.Ease.get(-1)).to({x:-215.4},10,cjs.Ease.get(1)).to({regX:48.8,x:-95.4},9,cjs.Ease.get(-1)).to({regX:48.9,x:24.7},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.2,48.8);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(31.2,7.5,0.504,0.504,0,0,0,48.9,48.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[31.2,7.6,29.3,22.4,18.3,33.4,4.9,46.7,-14,46.7,-32.7,46.7,-46.2,33.4,-59.5,20.1,-59.5,1.2,-59.5,1.1,-59.5,1.1]}},8).to({guide:{path:[-59.6,1,-59.6,-17.8,-46.2,-31.1,-32.8,-44.4,-14.1,-44.4,4.9,-44.4,18.2,-31.1,30.7,-18.6,31.5,-1.2]}},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.6,-16.9,49.2,48.7);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// giftt1
	this.instance = new lib.Символ63();
	this.instance.parent = this;
	this.instance.setTransform(442.7,342.8,1,1,0,0,0,35.5,49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// gif4
	this.instance_1 = new lib.Символ65();
	this.instance_1.parent = this;
	this.instance_1.setTransform(669.7,348.9,1,1,0,0,0,43.5,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// gir5
	this.instance_2 = new lib.Символ64();
	this.instance_2.parent = this;
	this.instance_2.setTransform(553.1,347.5,1,1,0,0,0,84.5,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ36();
	this.instance_3.parent = this;
	this.instance_3.setTransform(383,199.7,1,1,0,0,0,383,199.7);

	this.instance_4 = new lib.Символ22();
	this.instance_4.parent = this;
	this.instance_4.setTransform(382.1,224.4,1,1,0,0,0,382.1,167.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(0,0,766,411.4), null);


(lib.Символ76копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(24.7,26.4,1,1,0,0,0,24.7,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ76копия, new cjs.Rectangle(6.6,-14.9,49.2,48.7), null);


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ72();
	this.instance.parent = this;
	this.instance.setTransform(24.7,74.4,1,1,0,0,0,24.7,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:9.8},6,cjs.Ease.get(-1)).to({y:-65.6},7,cjs.Ease.get(1)).to({y:-1},6,cjs.Ease.get(-1)).to({y:74.4},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,50,49.2,48.8);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.gotoAndPlay(8);
	}
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1).call(this.frame_25).wait(7));

	// Слой 5
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(291.3,146.5,1,1,0,0,0,102.2,31.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:301.3,y:136.5,alpha:0},7).wait(18).to({x:291.3,y:146.5,alpha:1},6).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ51();
	this.instance_1.parent = this;
	this.instance_1.setTransform(415.3,412,1,1,0,0,0,353,15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:373},7).wait(18).to({y:412},6).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ37();
	this.instance_2.parent = this;
	this.instance_2.setTransform(357.1,218.1,0.914,0.914,0,0,0,383.1,199.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:383,scaleX:1,scaleY:1,x:383,y:189.7},7).to({regX:382.9,regY:199.6,scaleX:1.08,scaleY:1.08,y:189.6},9).to({regX:383,regY:199.7,scaleX:1,scaleY:1,y:189.7},8).wait(1).to({regX:383.1,scaleX:0.91,scaleY:0.91,x:357.1,y:218.1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,35.6,761.3,422.6);


(lib.Символ76 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ73();
	this.instance.parent = this;
	this.instance.setTransform(24.7,-25.6,1,1,0,0,0,24.7,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.2,48.8);


// stage content:
(lib.girl_gift_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		this.pricel.alpha=0;
		this.pop2.alpha=0;
		
		stage.canvas.addEventListener("mouseover", fl_mouseovern.bind(this));
		function fl_mouseovern()
		{
		this.vse.gotoAndPlay(1);
			this.pricel.alpha=1;
			this.pop.alpha=0;
			this.pop2.alpha=1;
		}
		
		stage.canvas.addEventListener("mouseout", fl_mouseoutn.bind(this));
		
		function fl_mouseoutn()
		{
		this.vse.gotoAndPlay(26);
			this.pricel.alpha=0;
			this.pop2.alpha=0;
			this.pop.alpha=1;
		}
		
		
		this.cursor = "none";
		
		stage.canvas.style.cursor = "none";
		
		this.pricel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		function fl_CustomMouseCursor() {
			this.pricel.x = stage.mouseX;
			this.pricel.y = stage.mouseY;
			this.pop2.x = stage.mouseX;
			this.pop2.y = stage.mouseY;
		}
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// frame
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 6
	this.pop2 = new lib.Символ76копия();
	this.pop2.parent = this;
	this.pop2.setTransform(698.5,-1.9,1.426,1.426,0,0,0,24.7,11.7);

	this.pop = new lib.Символ76();
	this.pop.parent = this;
	this.pop.setTransform(524.5,172.2,1.426,1.426,0,0,0,24.7,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pop},{t:this.pop2}]}).wait(1));

	// Слой 4
	this.pricel = new lib.Symbol4();
	this.pricel.parent = this;
	this.pricel.setTransform(720.7,206.3,1.031,1.031,-15,0,0,33.9,40.9);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(511.4,55.8,0.868,0.868,0,0,0,113.5,44.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// divan
	this.vse = new lib.Символ38();
	this.vse.parent = this;
	this.vse.setTransform(317,113.4,1,1,0,0,0,383,199.7);

	this.timeline.addTween(cjs.Tween.get(this.vse).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(261,101.8,801.8,422.6);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bedro.png?1482941685659", id:"bedro"},
		{src:"images/bedro2.png?1482941685659", id:"bedro2"},
		{src:"images/boobs.png?1482941685659", id:"boobs"},
		{src:"images/box.png?1482941685659", id:"box"},
		{src:"images/candy.png?1482941685659", id:"candy"},
		{src:"images/divan11.png?1482941685659", id:"divan11"},
		{src:"images/foot.png?1482941685659", id:"foot"},
		{src:"images/gif4.png?1482941685659", id:"gif4"},
		{src:"images/giftt1.png?1482941685659", id:"giftt1"},
		{src:"images/gir5.png?1482941685659", id:"gir5"},
		{src:"images/lokot.png?1482941685659", id:"lokot"},
		{src:"images/noga.png?1482941685659", id:"noga"},
		{src:"images/ny_tree.png?1482941685659", id:"ny_tree"},
		{src:"images/pol.png?1482941685659", id:"pol"},
		{src:"images/ruka.png?1482941685659", id:"ruka"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;