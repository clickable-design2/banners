(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/fon.jpg?1478517000705", id:"fon"},
		{src:"images/ring.png?1478517000706", id:"ring"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,768,305);


(lib.ring = function() {
	this.initialize(img.ring);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,257,200);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ring();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,257,200);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A4/AAMAx/AAA");
	this.shape.setTransform(160.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,322.1,2);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(165.1,194.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.1,4.8,320,378.7);


(lib.Символ8копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnYBFQgJgDgGgGQgHgHgDgJQgDgIAAgMIAfAAQAAAIAFAFQAFAFAIAAQAIAAAFgFQAFgEAAgHQAAgGgFgFQgFgFgIAAIgKAAIAAgbIAJAAQAGAAAEgEQADgEAAgEQAAgGgDgCQgDgEgGgBQgGABgEACQgDACAAADIggAAQAAgIADgIQAEgHAGgFQAGgFAIgCQAIgCAKAAQALAAAJAEQAIACAGAHQAGAFADAHQADAIAAAIQAAAHgDAGQgEAIgGAFQAGADADABIAHAHQACAFABAFQACAFAAAGQAAAKgEAHQgDAIgHAHQgHAFgKAEQgKADgNAAQgMAAgJgDgAv/BFQgJgDgGgGQgHgHgDgJQgDgIAAgMIAfAAQAAAIAFAFQAFAFAIAAQAIAAAFgFQAFgEAAgHQAAgGgFgFQgFgFgIAAIgKAAIAAgbIAJAAQAGAAAEgEQADgEAAgEQAAgGgDgCQgDgEgGgBQgGABgEACQgDACAAADIggAAQAAgIADgIQAEgHAGgFQAGgFAIgCQAIgCAKAAQALAAAJAEQAIACAGAHQAGAFADAHQADAIAAAIQAAAHgDAGQgEAIgGAFQAGADADABIAHAHQACAFABAFQACAFAAAGQAAAKgEAHQgDAIgHAHQgHAFgKAEQgKADgNAAQgMAAgJgDgAOzBGIAAgEIAWgtIgvhUIAAgGIAoAAIAaA0IABAAIAYg0IAnAAIAAAGIhCCFgANiBGIAAg/IgdAgIgEAAIgeggIAAA/IglAAIAAiLIAOAAIA2A9IA4g9IANAAIAACLgALKBGIgJgSIg3AAIgIASIgjAAIAAgGIA/iHIAPAAIBACHIAAAGgAK2AWIgQgjIgQAjIAgAAgAIzBGIgkhQIgkBQIgjAAIAAgGIA/iHIAQAAIA/CHIAAAGgAGWBGIgfg2IgOAAIAAA2IgkAAIAAiLIAkAAIAAA1IADAAIAMgBIAIgDQAHgEADgIQAEgKAAgbIAlAAQAAAdgEAMQgCAKgGAIQgJAKgGADIAmA9IAAAGgADNBGIAAiLIBXAAIAAAgIg0AAIAAAUIAwAAIAAAeIgwAAIAAAYIA2AAIAAAhgABCBGIAAiLIA+AAQAQABAVAQQAGAHAEAJQADAJAAAKQAAAKgDAIQgEAJgGAHQgGAIgJAFIgLADIgLAAIgaAAIAAAlgABmABIAZAAQAHAAAFgDQADgHABgIQAAgHgEgGQgCgDgDgCQgDgCgEAAIgZAAgAh9BGIAAiLIAjAAIAAAqIAaAAQAJAAANAFQAJADAHAIQAGAGADAIQADAIAAAKQAAAJgDAJQgDAIgGAHQgHAHgJAEQgNAEgJABgAhaAlIAaAAQAHABAEgGQAEgFAAgGQAAgIgEgEQgEgGgHABIgaAAgAjZBGIAAhrIgiAAIAAggIBoAAIAAAgIgiAAIAABrgAkaBGIgIgSIg3AAIgJASIgjAAIAAgGIA/iHIAQAAIA/CHIAAAGgAkuAWIgQgjIgQAjIAgAAgAofBGIgJgSIg3AAIgIASIgjAAIAAgGIA/iHIAPAAIBACHIAAAGgAozAWIgQgjIgQAjIAgAAgAq7BGIgfg2IgNAAIAAA2IglAAIAAiLIAlAAIAAA1IACAAIAMgBIAJgDQAGgEAEgIQAEgKgBgbIAlAAQAAAdgDAMQgDAKgFAIQgJAKgHADIAmA9IAAAGgAtBBGIgIgSIg3AAIgJASIgjAAIAAgGIA/iHIAQAAIA/CHIAAAGgAtVAWIgQgjIgQAjIAgAAg");
	this.shape.setTransform(119.1,22.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69192D").s().p("AnYBFQgJgDgGgGQgHgGgDgKQgDgJAAgLIAfAAQAAAIAFAFQAFAFAIAAQAIAAAFgFQAFgFAAgGQAAgHgFgEQgFgFgIAAIgKAAIAAgbIAJAAQAGAAAEgEQADgEAAgEQAAgFgDgDQgDgEgGAAQgGAAgEACQgDACAAADIggAAQAAgIADgIQAEgHAGgFQAGgFAIgCQAIgCAKAAQALAAAJAEQAIACAGAHQAGAFADAHQADAIAAAIQAAAHgDAGQgEAIgGAFQAGADADABIAHAHQACAFABAFQACAFAAAGQAAAKgEAHQgDAJgHAGQgHAFgKADQgKAEgNAAQgMAAgJgDgAv/BFQgJgDgGgGQgHgGgDgKQgDgJAAgLIAfAAQAAAIAFAFQAFAFAIAAQAIAAAFgFQAFgFAAgGQAAgHgFgEQgFgFgIAAIgKAAIAAgbIAJAAQAGAAAEgEQADgEAAgEQAAgFgDgDQgDgEgGAAQgGAAgEACQgDACAAADIggAAQAAgIADgIQAEgHAGgFQAGgFAIgCQAIgCAKAAQALAAAJAEQAIACAGAHQAGAFADAHQADAIAAAIQAAAHgDAGQgEAIgGAFQAGADADABIAHAHQACAFABAFQACAFAAAGQAAAKgEAHQgDAJgHAGQgHAFgKADQgKAEgNAAQgMAAgJgDgAOzBFIAAgDIAWgtIgvhUIAAgFIAoAAIAaAzIABAAIAYgzIAnAAIAAAFIhCCEgANiBFIAAg+IgdAgIgEAAIgeggIAAA+IglAAIAAiKIAOAAIA2A9IA4g9IANAAIAACKgALKBFIgJgRIg3AAIgIARIgjAAIAAgEIA/iIIAPAAIBACIIAAAEgAK2AWIgQgjIgQAjIAgAAgAIzBFIgkhQIgkBQIgjAAIAAgEIA/iIIAQAAIA/CIIAAAEgAGWBFIgfg2IgOABIAAA1IgkAAIAAiJIAkAAIAAA0IADAAIAMgBIAIgDQAHgEADgIQAEgKAAgaIAlAAQAAAcgEAMQgCAKgGAHQgJALgGADIAmA9IAAAFgADNBFIAAiJIBXAAIAAAfIg0AAIAAAUIAwAAIAAAeIgwAAIAAAZIA2AAIAAAfgABCBFIAAiJIA+AAQAQAAAVAQQAGAHAEAJQADAKAAAJQAAAKgDAIQgEAJgGAHQgGAIgJAFIgLACIgLABIgaAAIAAAkgABmACIAZAAQAHgBAFgDQADgHABgIQAAgHgEgGQgCgDgDgCQgDgCgEAAIgZAAgAh9BFIAAiJIAjAAIAAApIAaAAQAJAAANAFQAJADAHAIQAGAGADAIQADAIAAAKQAAAJgDAJQgDAIgGAHQgHAHgJAEQgNAEgJAAgAhaAmIAaAAQAHAAAEgGQAEgFAAgGQAAgIgEgEQgEgGgHABIgaAAgAjZBFIAAhqIgiAAIAAgfIBoAAIAAAfIgiAAIAABqgAkaBFIgIgRIg3AAIgJARIgjAAIAAgEIA/iIIAQAAIA/CIIAAAEgAkuAWIgQgjIgQAjIAgAAgAofBFIgJgRIg3AAIgIARIgjAAIAAgEIA/iIIAPAAIBACIIAAAEgAozAWIgQgjIgQAjIAgAAgAq7BFIgfg2IgNABIAAA1IglAAIAAiJIAlAAIAAA0IACAAIAMgBIAJgDQAGgEAEgIQAEgKgBgaIAlAAQAAAcgDAMQgDAKgFAHQgJALgHADIAmA9IAAAFgAtBBFIgIgRIg3AAIgJARIgjAAIAAgEIA/iIIAQAAIA/CIIAAAEgAtVAWIgQgjIgQAjIAgAAg");
	this.shape_1.setTransform(119.9,23.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FB4C6C").s().rr(-118.5,-22,237,44,7);
	this.shape_2.setTransform(118.5,22);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237,44);


(lib.Символ8копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnYBFQgJgDgGgGQgHgHgDgJQgDgIAAgMIAfAAQAAAIAFAFQAFAFAIAAQAIAAAFgFQAFgEAAgHQAAgGgFgFQgFgFgIAAIgKAAIAAgbIAJAAQAGAAAEgEQADgEAAgEQAAgGgDgCQgDgEgGgBQgGABgEACQgDACAAADIggAAQAAgIADgIQAEgHAGgFQAGgFAIgCQAIgCAKAAQALAAAJAEQAIACAGAHQAGAFADAHQADAIAAAIQAAAHgDAGQgEAIgGAFQAGADADABIAHAHQACAFABAFQACAFAAAGQAAAKgEAHQgDAIgHAHQgHAFgKAEQgKADgNAAQgMAAgJgDgAv/BFQgJgDgGgGQgHgHgDgJQgDgIAAgMIAfAAQAAAIAFAFQAFAFAIAAQAIAAAFgFQAFgEAAgHQAAgGgFgFQgFgFgIAAIgKAAIAAgbIAJAAQAGAAAEgEQADgEAAgEQAAgGgDgCQgDgEgGgBQgGABgEACQgDACAAADIggAAQAAgIADgIQAEgHAGgFQAGgFAIgCQAIgCAKAAQALAAAJAEQAIACAGAHQAGAFADAHQADAIAAAIQAAAHgDAGQgEAIgGAFQAGADADABIAHAHQACAFABAFQACAFAAAGQAAAKgEAHQgDAIgHAHQgHAFgKAEQgKADgNAAQgMAAgJgDgAOzBGIAAgEIAWgtIgvhUIAAgGIAoAAIAaA0IABAAIAYg0IAnAAIAAAGIhCCFgANiBGIAAg/IgdAgIgEAAIgeggIAAA/IglAAIAAiLIAOAAIA2A9IA4g9IANAAIAACLgALKBGIgJgSIg3AAIgIASIgjAAIAAgGIA/iHIAPAAIBACHIAAAGgAK2AWIgQgjIgQAjIAgAAgAIzBGIgkhQIgkBQIgjAAIAAgGIA/iHIAQAAIA/CHIAAAGgAGWBGIgfg2IgOAAIAAA2IgkAAIAAiLIAkAAIAAA1IADAAIAMgBIAIgDQAHgEADgIQAEgKAAgbIAlAAQAAAdgEAMQgCAKgGAIQgJAKgGADIAmA9IAAAGgADNBGIAAiLIBXAAIAAAgIg0AAIAAAUIAwAAIAAAeIgwAAIAAAYIA2AAIAAAhgABCBGIAAiLIA+AAQAQABAVAQQAGAHAEAJQADAJAAAKQAAAKgDAIQgEAJgGAHQgGAIgJAFIgLADIgLAAIgaAAIAAAlgABmABIAZAAQAHAAAFgDQADgHABgIQAAgHgEgGQgCgDgDgCQgDgCgEAAIgZAAgAh9BGIAAiLIAjAAIAAAqIAaAAQAJAAANAFQAJADAHAIQAGAGADAIQADAIAAAKQAAAJgDAJQgDAIgGAHQgHAHgJAEQgNAEgJABgAhaAlIAaAAQAHABAEgGQAEgFAAgGQAAgIgEgEQgEgGgHABIgaAAgAjZBGIAAhrIgiAAIAAggIBoAAIAAAgIgiAAIAABrgAkaBGIgIgSIg3AAIgJASIgjAAIAAgGIA/iHIAQAAIA/CHIAAAGgAkuAWIgQgjIgQAjIAgAAgAofBGIgJgSIg3AAIgIASIgjAAIAAgGIA/iHIAPAAIBACHIAAAGgAozAWIgQgjIgQAjIAgAAgAq7BGIgfg2IgNAAIAAA2IglAAIAAiLIAlAAIAAA1IACAAIAMgBIAJgDQAGgEAEgIQAEgKgBgbIAlAAQAAAdgDAMQgDAKgFAIQgJAKgHADIAmA9IAAAGgAtBBGIgIgSIg3AAIgJASIgjAAIAAgGIA/iHIAQAAIA/CHIAAAGgAtVAWIgQgjIgQAjIAgAAg");
	this.shape.setTransform(119.1,22.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69192D").s().p("AnYBFQgJgDgGgGQgHgGgDgKQgDgJAAgLIAfAAQAAAIAFAFQAFAFAIAAQAIAAAFgFQAFgFAAgGQAAgHgFgEQgFgFgIAAIgKAAIAAgbIAJAAQAGAAAEgEQADgEAAgEQAAgFgDgDQgDgEgGAAQgGAAgEACQgDACAAADIggAAQAAgIADgIQAEgHAGgFQAGgFAIgCQAIgCAKAAQALAAAJAEQAIACAGAHQAGAFADAHQADAIAAAIQAAAHgDAGQgEAIgGAFQAGADADABIAHAHQACAFABAFQACAFAAAGQAAAKgEAHQgDAJgHAGQgHAFgKADQgKAEgNAAQgMAAgJgDgAv/BFQgJgDgGgGQgHgGgDgKQgDgJAAgLIAfAAQAAAIAFAFQAFAFAIAAQAIAAAFgFQAFgFAAgGQAAgHgFgEQgFgFgIAAIgKAAIAAgbIAJAAQAGAAAEgEQADgEAAgEQAAgFgDgDQgDgEgGAAQgGAAgEACQgDACAAADIggAAQAAgIADgIQAEgHAGgFQAGgFAIgCQAIgCAKAAQALAAAJAEQAIACAGAHQAGAFADAHQADAIAAAIQAAAHgDAGQgEAIgGAFQAGADADABIAHAHQACAFABAFQACAFAAAGQAAAKgEAHQgDAJgHAGQgHAFgKADQgKAEgNAAQgMAAgJgDgAOzBFIAAgDIAWgtIgvhUIAAgFIAoAAIAaAzIABAAIAYgzIAnAAIAAAFIhCCEgANiBFIAAg+IgdAgIgEAAIgeggIAAA+IglAAIAAiKIAOAAIA2A9IA4g9IANAAIAACKgALKBFIgJgRIg3AAIgIARIgjAAIAAgEIA/iIIAPAAIBACIIAAAEgAK2AWIgQgjIgQAjIAgAAgAIzBFIgkhQIgkBQIgjAAIAAgEIA/iIIAQAAIA/CIIAAAEgAGWBFIgfg2IgOABIAAA1IgkAAIAAiJIAkAAIAAA0IADAAIAMgBIAIgDQAHgEADgIQAEgKAAgaIAlAAQAAAcgEAMQgCAKgGAHQgJALgGADIAmA9IAAAFgADNBFIAAiJIBXAAIAAAfIg0AAIAAAUIAwAAIAAAeIgwAAIAAAZIA2AAIAAAfgABCBFIAAiJIA+AAQAQAAAVAQQAGAHAEAJQADAKAAAJQAAAKgDAIQgEAJgGAHQgGAIgJAFIgLACIgLABIgaAAIAAAkgABmACIAZAAQAHgBAFgDQADgHABgIQAAgHgEgGQgCgDgDgCQgDgCgEAAIgZAAgAh9BFIAAiJIAjAAIAAApIAaAAQAJAAANAFQAJADAHAIQAGAGADAIQADAIAAAKQAAAJgDAJQgDAIgGAHQgHAHgJAEQgNAEgJAAgAhaAmIAaAAQAHAAAEgGQAEgFAAgGQAAgIgEgEQgEgGgHABIgaAAgAjZBFIAAhqIgiAAIAAgfIBoAAIAAAfIgiAAIAABqgAkaBFIgIgRIg3AAIgJARIgjAAIAAgEIA/iIIAQAAIA/CIIAAAEgAkuAWIgQgjIgQAjIAgAAgAofBFIgJgRIg3AAIgIARIgjAAIAAgEIA/iIIAPAAIBACIIAAAEgAozAWIgQgjIgQAjIAgAAgAq7BFIgfg2IgNABIAAA1IglAAIAAiJIAlAAIAAA0IACAAIAMgBIAJgDQAGgEAEgIQAEgKgBgaIAlAAQAAAcgDAMQgDAKgFAHQgJALgHADIAmA9IAAAFgAtBBFIgIgRIg3AAIgJARIgjAAIAAgEIA/iIIAQAAIA/CIIAAAEgAtVAWIgQgjIgQAjIAgAAg");
	this.shape_1.setTransform(119.9,23.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E22246").s().rr(-118.5,-22,237,44,7);
	this.shape_2.setTransform(118.5,22);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237,44);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnYBFQgJgDgGgGQgHgHgDgJQgDgIAAgMIAfAAQAAAIAFAFQAFAFAIAAQAIAAAFgFQAFgEAAgHQAAgGgFgFQgFgFgIAAIgKAAIAAgbIAJAAQAGAAAEgEQADgEAAgEQAAgGgDgCQgDgEgGgBQgGABgEACQgDACAAADIggAAQAAgIADgIQAEgHAGgFQAGgFAIgCQAIgCAKAAQALAAAJAEQAIACAGAHQAGAFADAHQADAIAAAIQAAAHgDAGQgEAIgGAFQAGADADABIAHAHQACAFABAFQACAFAAAGQAAAKgEAHQgDAIgHAHQgHAFgKAEQgKADgNAAQgMAAgJgDgAv/BFQgJgDgGgGQgHgHgDgJQgDgIAAgMIAfAAQAAAIAFAFQAFAFAIAAQAIAAAFgFQAFgEAAgHQAAgGgFgFQgFgFgIAAIgKAAIAAgbIAJAAQAGAAAEgEQADgEAAgEQAAgGgDgCQgDgEgGgBQgGABgEACQgDACAAADIggAAQAAgIADgIQAEgHAGgFQAGgFAIgCQAIgCAKAAQALAAAJAEQAIACAGAHQAGAFADAHQADAIAAAIQAAAHgDAGQgEAIgGAFQAGADADABIAHAHQACAFABAFQACAFAAAGQAAAKgEAHQgDAIgHAHQgHAFgKAEQgKADgNAAQgMAAgJgDgAOzBGIAAgEIAWgtIgvhUIAAgGIAoAAIAaA0IABAAIAYg0IAnAAIAAAGIhCCFgANiBGIAAg/IgdAgIgEAAIgeggIAAA/IglAAIAAiLIAOAAIA2A9IA4g9IANAAIAACLgALKBGIgJgSIg3AAIgIASIgjAAIAAgGIA/iHIAPAAIBACHIAAAGgAK2AWIgQgjIgQAjIAgAAgAIzBGIgkhQIgkBQIgjAAIAAgGIA/iHIAQAAIA/CHIAAAGgAGWBGIgfg2IgOAAIAAA2IgkAAIAAiLIAkAAIAAA1IADAAIAMgBIAIgDQAHgEADgIQAEgKAAgbIAlAAQAAAdgEAMQgCAKgGAIQgJAKgGADIAmA9IAAAGgADNBGIAAiLIBXAAIAAAgIg0AAIAAAUIAwAAIAAAeIgwAAIAAAYIA2AAIAAAhgABCBGIAAiLIA+AAQAQABAVAQQAGAHAEAJQADAJAAAKQAAAKgDAIQgEAJgGAHQgGAIgJAFIgLADIgLAAIgaAAIAAAlgABmABIAZAAQAHAAAFgDQADgHABgIQAAgHgEgGQgCgDgDgCQgDgCgEAAIgZAAgAh9BGIAAiLIAjAAIAAAqIAaAAQAJAAANAFQAJADAHAIQAGAGADAIQADAIAAAKQAAAJgDAJQgDAIgGAHQgHAHgJAEQgNAEgJABgAhaAlIAaAAQAHABAEgGQAEgFAAgGQAAgIgEgEQgEgGgHABIgaAAgAjZBGIAAhrIgiAAIAAggIBoAAIAAAgIgiAAIAABrgAkaBGIgIgSIg3AAIgJASIgjAAIAAgGIA/iHIAQAAIA/CHIAAAGgAkuAWIgQgjIgQAjIAgAAgAofBGIgJgSIg3AAIgIASIgjAAIAAgGIA/iHIAPAAIBACHIAAAGgAozAWIgQgjIgQAjIAgAAgAq7BGIgfg2IgNAAIAAA2IglAAIAAiLIAlAAIAAA1IACAAIAMgBIAJgDQAGgEAEgIQAEgKgBgbIAlAAQAAAdgDAMQgDAKgFAIQgJAKgHADIAmA9IAAAGgAtBBGIgIgSIg3AAIgJASIgjAAIAAgGIA/iHIAQAAIA/CHIAAAGgAtVAWIgQgjIgQAjIAgAAg");
	this.shape.setTransform(119.1,22.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69192D").s().p("AnYBFQgJgDgGgGQgHgGgDgKQgDgJAAgLIAfAAQAAAIAFAFQAFAFAIAAQAIAAAFgFQAFgFAAgGQAAgHgFgEQgFgFgIAAIgKAAIAAgbIAJAAQAGAAAEgEQADgEAAgEQAAgFgDgDQgDgEgGAAQgGAAgEACQgDACAAADIggAAQAAgIADgIQAEgHAGgFQAGgFAIgCQAIgCAKAAQALAAAJAEQAIACAGAHQAGAFADAHQADAIAAAIQAAAHgDAGQgEAIgGAFQAGADADABIAHAHQACAFABAFQACAFAAAGQAAAKgEAHQgDAJgHAGQgHAFgKADQgKAEgNAAQgMAAgJgDgAv/BFQgJgDgGgGQgHgGgDgKQgDgJAAgLIAfAAQAAAIAFAFQAFAFAIAAQAIAAAFgFQAFgFAAgGQAAgHgFgEQgFgFgIAAIgKAAIAAgbIAJAAQAGAAAEgEQADgEAAgEQAAgFgDgDQgDgEgGAAQgGAAgEACQgDACAAADIggAAQAAgIADgIQAEgHAGgFQAGgFAIgCQAIgCAKAAQALAAAJAEQAIACAGAHQAGAFADAHQADAIAAAIQAAAHgDAGQgEAIgGAFQAGADADABIAHAHQACAFABAFQACAFAAAGQAAAKgEAHQgDAJgHAGQgHAFgKADQgKAEgNAAQgMAAgJgDgAOzBFIAAgDIAWgtIgvhUIAAgFIAoAAIAaAzIABAAIAYgzIAnAAIAAAFIhCCEgANiBFIAAg+IgdAgIgEAAIgeggIAAA+IglAAIAAiKIAOAAIA2A9IA4g9IANAAIAACKgALKBFIgJgRIg3AAIgIARIgjAAIAAgEIA/iIIAPAAIBACIIAAAEgAK2AWIgQgjIgQAjIAgAAgAIzBFIgkhQIgkBQIgjAAIAAgEIA/iIIAQAAIA/CIIAAAEgAGWBFIgfg2IgOABIAAA1IgkAAIAAiJIAkAAIAAA0IADAAIAMgBIAIgDQAHgEADgIQAEgKAAgaIAlAAQAAAcgEAMQgCAKgGAHQgJALgGADIAmA9IAAAFgADNBFIAAiJIBXAAIAAAfIg0AAIAAAUIAwAAIAAAeIgwAAIAAAZIA2AAIAAAfgABCBFIAAiJIA+AAQAQAAAVAQQAGAHAEAJQADAKAAAJQAAAKgDAIQgEAJgGAHQgGAIgJAFIgLACIgLABIgaAAIAAAkgABmACIAZAAQAHgBAFgDQADgHABgIQAAgHgEgGQgCgDgDgCQgDgCgEAAIgZAAgAh9BFIAAiJIAjAAIAAApIAaAAQAJAAANAFQAJADAHAIQAGAGADAIQADAIAAAKQAAAJgDAJQgDAIgGAHQgHAHgJAEQgNAEgJAAgAhaAmIAaAAQAHAAAEgGQAEgFAAgGQAAgIgEgEQgEgGgHABIgaAAgAjZBFIAAhqIgiAAIAAgfIBoAAIAAAfIgiAAIAABqgAkaBFIgIgRIg3AAIgJARIgjAAIAAgEIA/iIIAQAAIA/CIIAAAEgAkuAWIgQgjIgQAjIAgAAgAofBFIgJgRIg3AAIgIARIgjAAIAAgEIA/iIIAPAAIBACIIAAAEgAozAWIgQgjIgQAjIAgAAgAq7BFIgfg2IgNABIAAA1IglAAIAAiJIAlAAIAAA0IACAAIAMgBIAJgDQAGgEAEgIQAEgKgBgaIAlAAQAAAcgDAMQgDAKgFAHQgJALgHADIAmA9IAAAFgAtBBFIgIgRIg3AAIgJARIgjAAIAAgEIA/iIIAQAAIA/CIIAAAEgAtVAWIgQgjIgQAjIAgAAg");
	this.shape_1.setTransform(119.9,23.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C33852").s().rr(-118.5,-22,237,44,7);
	this.shape_2.setTransform(118.5,22);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237,44);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACFCMIg8iIIAAgEIAiAAIAhBOIABAAIAghOIAiAAIAAAEIg7CIgAg6CKIAAiKIA0AAQAsAAAXBEQgCASgCAIIgGAMIgHAKIgKAJIgMAHQgGADgIABQgHACgHAAgAgXBqIARAAQAGgBAHgDQAGgDAEgFQAFgGACgGQACgHAAgHQAAgHgCgHQgCgHgFgFQgEgFgGgDQgHgEgGABIgRAAgAhvCKIgJgRIg3AAIgIARIgjAAIAAgFIA/iHIAPAAIBACHIAAAFgAiDBZIgQgkIgQAkIAgAAgAiMhFIgHgCIgFgEIgFgFIgDgHIgCgHIgBgIQAAgYAkgMIANACIAGACIAFAFIAFAEIAEAHIACAHIABAJQAAAYgkAMIgNgDgAiGh4QgDABgCACIgEAHQgCADAAAFQAAAEACAEIAEAGIAFAEIAHABIAGgBIAGgEIAEgGQABgEAAgEQAAgFgBgDIgEgHQgDgCgDgBQgDgBgDAAQgEAAgDABgAAVhCIgchFIAAgCIAPAAIAQAnIABAAIAQgnIARAAIAAACIgeBFgAjUhDIgHgCIgGgDIgFgDIgFgGIgDgGIgDgHIgBgIIABgJIADgHIADgHIAFgEIAFgFIAGgCIANgCIALABIAKAFQAGAFACADIADAGIABAHIgRAAIgDgGIgDgCIgEgCIgGgBQgEAAgDACIgFADQgDADgBAEQgBADAAAFQAAAEABADQABADADADIAFAFQADABAEAAIAGgBIAEgCIAEgEIACgEIASAAIgCAGIgDAGIgDAFIgEAEQgFADgGABQgFACgGAAgADQhDIAAg2IgRAAIAAgQIA0AAIAAAQIgRAAIAAA2gACnhDIgMgVIgJAAIAAAVIgSAAIAAhGIAfAAQAFgBAEACIAHAEIAFAFIADAIIABAHIgBAHIgEAHIgFAGIANAWIAAADgACShoIANAAQADAAACgDQACgCAAgDQAAgFgCgBQgCgDgDAAIgNAAgABEhDIAAhGIAsAAIAAAQIgaAAIAAAKIAYAAIAAAPIgYAAIAAANIAbAAIAAAQgAgYhDIgjgjIAAAjIgTAAIAAhHIAHAAIAjAjIAAgiIASAAIAABGg");
	this.shape.setTransform(26.8,16.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.5,2.4,48.7,28);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,305);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8копия();
	this.instance.parent = this;
	this.instance.setTransform(118.5,22,1,1,0,0,0,118.5,22);

	this.instance_1 = new lib.Символ8копия2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(118.5,22,1,1,0,0,0,118.5,22);

	this.instance_2 = new lib.Символ8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(118.5,22,1,1,0,0,0,118.5,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237,44);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(160.1,0,1,1,0,0,0,160.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,321.1,1);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ArpAqIDzhTIPPAAIjzBTg");
	var mask_graphics_25 = new cjs.Graphics().p("AqFAqIDzhTIPPAAIjzBTg");
	var mask_graphics_26 = new cjs.Graphics().p("AphAqIDzhTIPQAAIjzBTg");
	var mask_graphics_27 = new cjs.Graphics().p("AphAqIDzhTIPQAAIjzBTg");
	var mask_graphics_28 = new cjs.Graphics().p("AphAqIDzhTIPQAAIjzBTg");
	var mask_graphics_29 = new cjs.Graphics().p("AphAqIDzhTIPQAAIjzBTg");
	var mask_graphics_30 = new cjs.Graphics().p("ApDAqIDzhTIPQAAIjzBTg");
	var mask_graphics_31 = new cjs.Graphics().p("Am7AqIDzhTIPPAAIjzBTg");
	var mask_graphics_32 = new cjs.Graphics().p("Ak0AqIDzhTIPQAAIjzBTg");
	var mask_graphics_33 = new cjs.Graphics().p("AitAqIDxhTIPSAAIjzBTg");
	var mask_graphics_34 = new cjs.Graphics().p("AglAqIDxhTIPRAAIjzBTg");
	var mask_graphics_35 = new cjs.Graphics().p("ABgAqIDzhTIPRAAIjzBTg");
	var mask_graphics_36 = new cjs.Graphics().p("ADnAqIDzhTIPSAAIjzBTg");
	var mask_graphics_37 = new cjs.Graphics().p("AFvAqIDzhTIPRAAIjzBTg");
	var mask_graphics_38 = new cjs.Graphics().p("AH2AqIDzhTIPRAAIjzBTg");
	var mask_graphics_39 = new cjs.Graphics().p("AJ9AqIDzhTIPSAAIjzBTg");
	var mask_graphics_40 = new cjs.Graphics().p("AMFAqIDzhTIPRAAIjzBTg");
	var mask_graphics_41 = new cjs.Graphics().p("AOMAqIDzhTIPRAAIjzBTg");
	var mask_graphics_42 = new cjs.Graphics().p("AQTAqIDzhTIPSAAIjzBTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-74.6,y:-1.7}).wait(25).to({graphics:mask_graphics_25,x:-64.6,y:-1.7}).wait(1).to({graphics:mask_graphics_26,x:-41.2,y:-1.7}).wait(1).to({graphics:mask_graphics_27,x:-14.1,y:-1.7}).wait(1).to({graphics:mask_graphics_28,x:12.9,y:-1.7}).wait(1).to({graphics:mask_graphics_29,x:40,y:-1.7}).wait(1).to({graphics:mask_graphics_30,x:64,y:-1.7}).wait(1).to({graphics:mask_graphics_31,x:77.6,y:-1.7}).wait(1).to({graphics:mask_graphics_32,x:91.1,y:-1.7}).wait(1).to({graphics:mask_graphics_33,x:104.6,y:-1.7}).wait(1).to({graphics:mask_graphics_34,x:118.2,y:-1.7}).wait(1).to({graphics:mask_graphics_35,x:131.7,y:-1.7}).wait(1).to({graphics:mask_graphics_36,x:145.2,y:-1.7}).wait(1).to({graphics:mask_graphics_37,x:158.8,y:-1.7}).wait(1).to({graphics:mask_graphics_38,x:172.3,y:-1.7}).wait(1).to({graphics:mask_graphics_39,x:185.8,y:-1.7}).wait(1).to({graphics:mask_graphics_40,x:199.4,y:-1.7}).wait(1).to({graphics:mask_graphics_41,x:212.9,y:-1.7}).wait(1).to({graphics:mask_graphics_42,x:226.4,y:-1.7}).wait(33));

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(160.1,0,1,1,0,0,0,160.1,0);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,4);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(164.3,-153.1,1,1,0,0,0,164.3,201);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({y:-157.1},3).to({y:-78.1},19).to({y:-82.1},3).wait(50).to({y:-86.1},3).to({y:-7.1},19).to({y:-11.1},3).wait(50).to({y:-15.1},3).to({y:63.9},19).to({y:59.9},3).wait(51).to({y:55.9},3).to({y:134.9},18).to({y:130.9},3).wait(51).to({y:126.9},3).to({y:205.9},18).to({y:201.9},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.1,-349.3,320,378.7);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance.alpha = 0.16;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.223},4,cjs.Ease.get(-1)).to({alpha:0.301},5,cjs.Ease.get(1)).to({alpha:0.23},5,cjs.Ease.get(-1)).to({alpha:0.16},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(128.5,100,1,1,0,0,0,128.5,100);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 22, 0))];
	this.instance.cache(-2,-2,261,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,261,204);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(368.9,146.5,0.961,0.961,0,0,0,384,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,737.8,293);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(126.1,100,1,1,0,0,0,126.1,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({scaleX:1,scaleY:1,rotation:-14.8,x:126.2},3,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-25},2,cjs.Ease.get(1)).to({rotation:375,x:126.1,y:100.1},21).to({rotation:360,y:100},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,261,204);


// stage content:



(lib.simple_curvis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(594,45,1,1,0,0,0,118.5,22);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ21(), 3);

	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(288,202.1,1,1,0,0,0,164.3,175);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGBGIg8iGIAAgFIAiAAIAgBNIAAAAIAghNIAjAAIAAAFIg8CGg");
	this.shape.setTransform(657.8,-24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag7BGIAAiLIA0AAQAsABAXBEQgBARgDAIIgFAMIgIAKIgJAJIgNAIQgGADgHABQgIACgHAAgAgYAlIARAAQAHAAAHgDQAFgEAFgEQAEgGACgHQACgHAAgGQAAgGgCgGQgCgHgEgFQgFgGgFgDQgHgDgHAAIgRAAg");
	this.shape_1.setTransform(643.9,-24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAkBHIgJgSIg1AAIgIASIgjAAIAAgGIA/iGIANAAIBACGIAAAGgAAQAWIgQgjIgPAjIAfAAg");
	this.shape_2.setTransform(628.9,-25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQBGIAAhqIgiAAIAAghIBlAAIAAAhIghAAIAABqg");
	this.shape_3.setTransform(610.7,-24.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATBGIgWgqIgTAAIAAAqIgkAAIAAiLIA8AAQAKAAAIADQAIADAHAFQAGAFAEAHQAEAGABAIQACAHAAAIQAAAIgDAGQgCAGgFAGQgEAGgHAFIAcAsIAAAGgAgWgCIAYAAQAHABAEgGQAEgFAAgHQAAgHgEgFQgEgGgHABIgYAAg");
	this.shape_4.setTransform(598.8,-24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrBGIAAiLIBVAAIAAAhIgyAAIAAAUIAuAAIAAAdIguAAIAAAYIA0AAIAAAhg");
	this.shape_5.setTransform(585.4,-24.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGBGIg8iGIAAgFIAiAAIAgBNIAAAAIAghNIAjAAIAAAFIg8CGg");
	this.shape_6.setTransform(572.2,-24.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAvBGIhFhFIAABFIglAAIAAiLIAOAAIBEBFIAAhEIAkAAIAACKg");
	this.shape_7.setTransform(557.4,-25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZBEIgMgGQgGgDgFgFIgJgKQgEgGgDgHQgDgHgCgHQgCgJAAgIQABgvBGgYQAIAAASAEIAMAGIALAIIAJAKQAEAGADAHQADAHACAHQABAJAAAHQAAAwhHAYQgRgBgIgDgAgLgiQgHACgFAFQgEAFgDAHQgEAHAAAIQAAAJAEAHQADAHAEAFQAFAFAHACQAGADAFAAQAHAAAGgDQAGgCAFgFQAFgFADgHQADgHAAgJQAAgIgDgHQgDgHgFgFQgFgFgGgCQgGgCgHAAQgFAAgGACg");
	this.shape_8.setTransform(541.5,-24.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJBGIgNgEIgMgFIgLgIIgJgKQgEgFgDgIQgDgGgCgHQgBgJgBgIQABgHABgIQACgIADgHQADgHAEgFIAJgKIALgIQAFgEAHgCIANgDIALgBQALAAALADQALADAJAGQALAKAFAHIAFALIADANIgjAAIgFgJIgHgHIgJgDIgKgCQgFABgHADQgGACgFAGQgEAEgDAHQgDAIAAAHQAAAHADAHQADAHAEAGQAFAFAGADQAHADAFAAQAGABAFgCQAFgBAEgEQAEgCADgEQADgFACgFIAjAAIgEANIgEAMIgIAJQgEAFgEADQgKAGgKAEQgLADgMAAg");
	this.shape_9.setTransform(525.5,-24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 6
	this.instance_2 = new lib.Символ17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(128.1,62.1);
	this.instance_2.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(57.1,49.9,1,1,0,0,0,26.8,20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(58.1,45.2,0.412,0.412,0,0,0,128.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 4
	this.instance_5 = new lib.Символ7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(364,45,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 2
	this.instance_6 = new lib.Символ4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(363.9,69.5,1,1,0,0,0,368.9,146.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(342.8,-277.2,754.1,538.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;