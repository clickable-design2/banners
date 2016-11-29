(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bgg = function() {
	this.initialize(img.bgg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.btnbg = function() {
	this.initialize(img.btnbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,421,435);


(lib.grid = function() {
	this.initialize(img.grid);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,412,323);// helper functions:

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


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btnbg();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.931,0.931);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(0,0,392,405), null);


(lib.Символ11копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(38,61.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11копия2, new cjs.Rectangle(2.2,37.1,71.7,49.6), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjFB2IgBhZIARAAIABAIQAFgFAEgCQAGgDAHAAQAFAAAFACQAFADAEAEQADAEACAGQACAGABAIIgBAIIgCAHQgCAGgFAEQgDAEgGADQgFACgFAAQgGAAgFgCQgEgCgCgEIAAAAIAAAggAitAtQgDADgBAFIAAADIAAAJIAAAEQABAEADADQAEACADAAIAHgBIADgDIADgGIACgIIgCgHIgCgFIgEgEQgDgBgDAAQgEAAgEACgAB9BOQAGgBABgCQADgDABgFIABgNIAAgZIAzAAIAAA/IgTAAIAAgwIgOAAIAAALIgBAUIgEAHQgBADgDACQgDAEgEABQgFACgGAAgAgTBdIgHgCIgFgEIgGgFQgCgEgDgKQgCgHgBgJIABgMIADgLIAEgJIAGgHQAFgFAGgDQAHgDAJgBIASgBIgBAOQgFACgKAAIgLADQgFACgEAEQgCADgDAEIgCAJIABAAQADgGAFgDIAHgDIAGAAQAHAAAEACQAFACAEAEQADAEADAGQACAGAAAHQgBAIgCAGQgCAGgFAFQgEAEgGACQgFADgIAAIgHgBgAgSAsIgDADQgCADAAADIgBAHQABAJABAEIAEAFQADABADAAIAHgBIADgEQACgEAAgJIAAgHIgCgGIgEgEQgCgCgEAAQgDAAgDACgAAgBcIAAg/IAUAAIAAASIAKAAIALABIAJAEQAEADACAEQADAEAAAGQAAAGgDAEQgCAEgDADIgHADIgIADQgGABgJAAQgKAAgLgBgAA0A9IAAASIAGABQAGAAADgDIADgDQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBIgDgDQgDgCgFAAIgHABgAD3BcIAAgTIACgcIgBAAIgHARIgMAeIgZAAIAAg/IATAAIAAATIgBAaIAAAAIAUgtIAYAAIAAA/gABiBcIAAg/IAUAAIAAA/gAhMBcIAAgTIABgcIAAAAIgHARIgNAeIgYAAIAAg/IASAAIAAATIgBAaIABAAIATgtIAZAAIAAA/gAjpBcIAAgwIgUAAIAAAwIgTAAIAAg/IA7AAIAAA/gAi/gRIAAhiIATAAIABAKQAEgGAGgDQAGgDAHAAQAGAAAFADQAGACADAFQAFAFACAGQADAHgBAIIgBAJIgBAIQgDAGgFAFQgEAFgGACQgFACgGAAQgHAAgFgCQgEgCgCgEIAAAjgAikhhQgDAEgBAEIAAAEIAAAKIAAAEQABAFADADQAEADAEAAQAEAAADgCIAEgEIAEgGIABgIIgBgIIgEgGQgBgDgDgBQgDgCgDAAQgFAAgEADgAAfgXIAAgWIg2AAIAAhGIAVAAIAAA1IAWAAIAAg1IAVAAIAAA2IAIABIgBAlgABNguQgGgDgFgEQgFgFgCgHQgDgGAAgIQAAgHADgHQABgGAFgGQAEgFAHgDIAHgDIAJgBQAFAAAJADQAFADAEAFQAEAFACAHQACAGgBAGIAAAJIgtAAQAAADACADIAEAEIAGACIAHABQAIAAAMgDIADAPQgGACgGABIgNABQgJAAgIgCgABnhYQgBgFgCgEIgEgEQgDgBgDAAQgDAAgCABQgDABgCADQgDAEgBAFIAbAAIAAAAgAhXguQgGgDgGgEQgFgFgCgGQgDgHAAgJQAAgIADgHQACgHAFgFQAGgEAGgDQAHgDAIAAQAIAAAHADQAGADAFAEQAFAFACAHQADAGAAAIIgBAJIgCAIQgDAGgGAFQgEAFgHACQgGACgIAAQgHAAgHgCgAhOhjQgEABgBADQgCADAAAEIgBAIIABAIIACAHQACADADABQADACADAAQADAAADgCIAEgEQACgDABgEIABgIIgBgIIgCgHIgFgEQgDgCgDAAQgEAAgCACgADngtIAAg1IgUAAIAAgRIA/AAIAAARIgUAAIAAA1gACzgtIAAgcIgWAAIAAAcIgVAAIAAhGIAVAAIAAAZIAWAAIAAgZIAWAAIAABGgAjlgtIAAg1IgWAAIAAA1IgWAAIAAhGIBBAAIAABGg");
	this.shape.setTransform(37.4,15.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(10,4,54.7,23.6), null);


(lib.Symbol13copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(19,20,22,0)","#131416"],[0,1],-76,0,76,0).s().p("Ar3X6MAAAgv0IXvAAMAAAAv0g");
	this.shape.setTransform(76,153.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13copy, new cjs.Rectangle(0,0,152.1,306.1), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-76,0,76,0).s().p("Ar3X6MAAAgv0IXvAAMAAAAv0g");
	this.shape.setTransform(76,153.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,152.1,306.1), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhC8AS9MAAAgl4MCF4AAAMAAAAl4g");
	mask.setTransform(412.6,121.3);

	// Layer 1 copy
	this.instance = new lib.grid();
	this.instance.parent = this;
	this.instance.setTransform(935,0,1.204,1.204,0,0,180);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.grid();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.204,1.204);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0.1,841,242.5), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8BC02").s().p("Ah8B9Qg0gzAAhKQAAhIA0g0QAzg0BJAAQBKAAA0A0QAzA0AABIQAABKgzAzQg0A0hKAAQhJAAgzg0g");
	this.shape.setTransform(27.9,27.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(248,188,2,0.298)").s().p("AjEDFQhRhSgBhzQABhyBRhSQBShRBygBQBzABBSBRQBRBSABByQgBBzhRBSQhSBRhzABQhygBhShRgAh8h8Qg0A0AABIQAABKA0AzQAzA0BJAAQBKAAA0g0QAzgzAAhKQAAhIgzg0Qg0g0hKAAQhJAAgzA0g");
	this.shape_1.setTransform(27.9,27.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,55.7,55.7), null);


(lib.img_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// img_src
	this.instance = new lib.bgg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img_container, new cjs.Rectangle(0,0,600,300), null);


(lib.curve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC00").ss(2,2,0,3).p("EjyHgB1INcLZIP82BIS6cRMAKLgiiMAKeAlqIXaxWIQQJsIQa4/ITYNSINnxhMAQGAggISezCINaIQIbXwjII5c5MAf4ghRIIncHIJEszINcLZIP82BIS6cRMAKLgiiMAKeAlqIXaxWIQQJsIQa4/ITYNSINnxhMAQGAggISczD");
	this.shape.setTransform(958.7,119.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.curve, new cjs.Rectangle(-592.3,-3,3102.1,245.8), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(196,202.5,1,1,0,0,0,196,202.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,scaleY:1.02,x:196.1,y:202.6},9,cjs.Ease.get(-1)).to({scaleX:1.05,scaleY:1.05,x:196},10,cjs.Ease.get(1)).to({regX:195.9,scaleX:1.02,scaleY:1.02,y:202.5},11,cjs.Ease.get(-1)).to({regX:196,scaleX:1,scaleY:1},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,392,405);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEOCQIAAghQgRgBgRgEQgPgEgLgGIALgqQAMAHAOAEQAQAFARAAQAPAAAJgGQAKgGAAgKQAAgKgJgHQgJgHgUgHQgPgFgLgGQgMgGgIgGQgJgIgEgKQgFgKAAgNQAAgLAEgLQAEgKAIgIQAIgIALgGQALgGAOgCIAAgiIAjAAIAAAfQAYABAbALIgKAoQgagMgZAAQgQAAgIAGQgHAFAAAIQAAAJAKAHQAJAGAYAJQAQAFALAHQALAHAHAHQAHAHAEAKQADAKAAAMQAAAMgEALQgEAKgIAJQgIAJgMAGQgMAGgPACIAAAkgABHBzQgJgCgIgFQgIgEgHgHQgHgGgFgIQgKgQgGgWQgFgVAAgYQAAgZAGgWQADgOANgXQAFgJAHgGQAHgGAIgFQAIgEAKgDQAKgCALAAQALAAAKACQAKADAIAFQAIAEAHAHQAHAGAFAIQAKAQAFAWQAEAUAAAZQAAAagFAVQgJAcgHAKQgGAIgGAGQgHAHgIAEQgJAEgJACQgKADgLAAQgLAAgKgDgABQhKQgHAFgEAKQgEAKgDAOQgCAQAAATQAAATACAPQADAOAEAKQAEAJAGAFQAHAFAHAAQAIAAAGgFQAGgFAEgKQAFgKACgOQACgPAAgTQAAgTgCgOQgCgPgFgKQgEgKgGgEQgGgFgIAAQgHAAgGAEgAh8BzQgKgCgIgFQgIgEgHgHQgGgGgGgIQgKgQgFgWQgFgVAAgYQAAgZAFgWQADgOANgXQAGgJAHgGQAGgGAJgFQAIgEAKgDQAJgCALAAQAMAAAKACQAJADAJAFQAIAEAGAHQAHAGAFAIQAKAQAFAWQAFAUAAAZQAAAagFAVQgJAcgIAKQgFAIgHAGQgHAHgIAEQgIAEgKACQgKADgKAAQgLAAgKgDgAh0hKQgGAFgEAKQgFAKgCAOQgCAQAAATQAAATACAPQACAOAEAKQAFAJAGAFQAGAFAIAAQAIAAAGgFQAGgFAEgKQAEgKACgOQACgPAAgTQAAgTgCgOQgCgPgEgKQgEgKgGgEQgGgFgIAAQgIAAgGAEgAk5ByIAAi1IgBAAIgsAUIgJgoIA9gcIAtAAIAADlg");
	this.shape.setTransform(37.4,31.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ11копия2();
	this.instance.parent = this;
	this.instance.setTransform(37.7,163.1,1,1,0,0,0,37,7);

	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(37.7,90.8,1,1,0,0,0,37,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(37.5,71.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0.6,3.8,73.9,239), null);


(lib.dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(27.9,27.9,1,1,0,0,0,27.9,27.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.21,scaleY:1.21},4,cjs.Ease.get(-1)).to({regX:27.8,regY:27.8,scaleX:1.47,scaleY:1.47},5,cjs.Ease.get(1)).to({regX:27.7,regY:27.7,scaleX:1.24,scaleY:1.24,x:27.8,y:27.8},5,cjs.Ease.get(-1)).to({regX:27.9,regY:27.9,scaleX:1,scaleY:1,x:27.9,y:27.9},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.7,55.7);


(lib.map_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// img_map
	this.img_container = new lib.img_container();
	this.img_container.parent = this;
	this.img_container.setTransform(3299.6,150,1,1,0,0,180,300,150);

	this.img_container_1 = new lib.img_container();
	this.img_container_1.parent = this;
	this.img_container_1.setTransform(2699.6,150,1,1,0,0,0,300,150);

	this.img_container_2 = new lib.img_container();
	this.img_container_2.parent = this;
	this.img_container_2.setTransform(2099.6,150,1,1,0,0,180,300,150);

	this.img_container_3 = new lib.img_container();
	this.img_container_3.parent = this;
	this.img_container_3.setTransform(1500,150,1,1,0,0,0,300,150);

	this.img_container_4 = new lib.img_container();
	this.img_container_4.parent = this;
	this.img_container_4.setTransform(900,150,1,1,0,0,180,300,150);

	this.img_container_5 = new lib.img_container();
	this.img_container_5.parent = this;
	this.img_container_5.setTransform(300,150,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.img_container_5},{t:this.img_container_4},{t:this.img_container_3},{t:this.img_container_2},{t:this.img_container_1},{t:this.img_container}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.map_container, new cjs.Rectangle(0,0,3599.6,300), null);


(lib.map = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// map_animation
	this.map_container = new lib.map_container();
	this.map_container.parent = this;
	this.map_container.setTransform(905.8,175.7,1,1,0,0,0,900,150);

	this.timeline.addTween(cjs.Tween.get(this.map_container).to({x:-294.2},299).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.8,25.7,3599.6,300);


(lib.curve_movement = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.dot = new lib.dot();
	this.dot.parent = this;
	this.dot.setTransform(309.9,101.2,0.5,0.5,0,0,0,27.9,27.9);

	this.timeline.addTween(cjs.Tween.get(this.dot).to({guide:{path:[309.9,101.3,321.5,109.2,333.1,117.2,376.7,61.1,420.2,5.1,471.7,109.1,523.2,213.1,582.3,152.2,641.4,91.3,684.3,117.7,727.2,144.1,814.8,91.1,902.3,38.2,930.8,130.6,959.3,223.1,1061.3,116.6,1163.2,10.2,1190.8,100.1,1218.3,190.1,1247.3,149.1,1276.3,108.2,1319.3,144.6,1362.3,181.1,1413.3,110.6,1464.3,40.2,1524.8,130.6,1585.3,221.1,1617.9,110.6,1650.4,0.1,1683.9,120.6,1717.4,241.1,1792.3,185.6,1867.2,130.1,1919.2,161.1,1971.2,192.1,2023.7,112.1,2076.2,32.2,2126.4,66.6,2176.6,101]}},309).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgrSAboMAAAg3PMBWlAAAMAAAA3Pg");
	var mask_graphics_1 = new cjs.Graphics().p("Egr+AboMAAAg3PMBX9AAAMAAAA3Pg");
	var mask_graphics_2 = new cjs.Graphics().p("EgsqAboMAAAg3PMBZVAAAMAAAA3Pg");
	var mask_graphics_3 = new cjs.Graphics().p("EgtWAboMAAAg3PMBatAAAMAAAA3Pg");
	var mask_graphics_4 = new cjs.Graphics().p("Egt2AboMAAAg3PMBbtAAAMAAAA3Pg");
	var mask_graphics_5 = new cjs.Graphics().p("EguWAboMAAAg3PMBctAAAMAAAA3Pg");
	var mask_graphics_6 = new cjs.Graphics().p("Egu2AboMAAAg3PMBdtAAAMAAAA3Pg");
	var mask_graphics_7 = new cjs.Graphics().p("EgvVAboMAAAg3PMBerAAAMAAAA3Pg");
	var mask_graphics_8 = new cjs.Graphics().p("Egv1AboMAAAg3PMBfrAAAMAAAA3Pg");
	var mask_graphics_9 = new cjs.Graphics().p("EgwVAboMAAAg3PMBgrAAAMAAAA3Pg");
	var mask_graphics_10 = new cjs.Graphics().p("Egw1AboMAAAg3PMBhrAAAMAAAA3Pg");
	var mask_graphics_11 = new cjs.Graphics().p("EgxVAboMAAAg3PMBirAAAMAAAA3Pg");
	var mask_graphics_12 = new cjs.Graphics().p("Egx1AboMAAAg3PMBjrAAAMAAAA3Pg");
	var mask_graphics_13 = new cjs.Graphics().p("EgyUAboMAAAg3PMBkpAAAMAAAA3Pg");
	var mask_graphics_14 = new cjs.Graphics().p("Egy0AboMAAAg3PMBlpAAAMAAAA3Pg");
	var mask_graphics_15 = new cjs.Graphics().p("EgzUAboMAAAg3PMBmpAAAMAAAA3Pg");
	var mask_graphics_16 = new cjs.Graphics().p("Egz0AboMAAAg3PMBnpAAAMAAAA3Pg");
	var mask_graphics_17 = new cjs.Graphics().p("Eg0MAboMAAAg3PMBoZAAAMAAAA3Pg");
	var mask_graphics_18 = new cjs.Graphics().p("Eg0jAboMAAAg3PMBpHAAAMAAAA3Pg");
	var mask_graphics_19 = new cjs.Graphics().p("Eg07AboMAAAg3PMBp3AAAMAAAA3Pg");
	var mask_graphics_20 = new cjs.Graphics().p("Eg1SAboMAAAg3PMBqlAAAMAAAA3Pg");
	var mask_graphics_21 = new cjs.Graphics().p("Eg1qAboMAAAg3PMBrVAAAMAAAA3Pg");
	var mask_graphics_22 = new cjs.Graphics().p("Eg2BAboMAAAg3PMBsDAAAMAAAA3Pg");
	var mask_graphics_23 = new cjs.Graphics().p("Eg2ZAboMAAAg3PMBszAAAMAAAA3Pg");
	var mask_graphics_24 = new cjs.Graphics().p("Eg2wAboMAAAg3PMBthAAAMAAAA3Pg");
	var mask_graphics_25 = new cjs.Graphics().p("Eg3IAboMAAAg3PMBuRAAAMAAAA3Pg");
	var mask_graphics_26 = new cjs.Graphics().p("Eg3fAboMAAAg3PMBu/AAAMAAAA3Pg");
	var mask_graphics_27 = new cjs.Graphics().p("Eg33AboMAAAg3PMBvvAAAMAAAA3Pg");
	var mask_graphics_28 = new cjs.Graphics().p("Eg4OAboMAAAg3PMBwdAAAMAAAA3Pg");
	var mask_graphics_29 = new cjs.Graphics().p("Eg4mAboMAAAg3PMBxNAAAMAAAA3Pg");
	var mask_graphics_30 = new cjs.Graphics().p("Eg49AboMAAAg3PMBx7AAAMAAAA3Pg");
	var mask_graphics_31 = new cjs.Graphics().p("Eg5VAboMAAAg3PMByrAAAMAAAA3Pg");
	var mask_graphics_32 = new cjs.Graphics().p("Eg5tAboMAAAg3PMBzbAAAMAAAA3Pg");
	var mask_graphics_33 = new cjs.Graphics().p("Eg6EAboMAAAg3PMB0JAAAMAAAA3Pg");
	var mask_graphics_34 = new cjs.Graphics().p("Eg6cAboMAAAg3PMB05AAAMAAAA3Pg");
	var mask_graphics_35 = new cjs.Graphics().p("Eg6zAboMAAAg3PMB1nAAAMAAAA3Pg");
	var mask_graphics_36 = new cjs.Graphics().p("Eg7LAboMAAAg3PMB2XAAAMAAAA3Pg");
	var mask_graphics_37 = new cjs.Graphics().p("Eg7iAboMAAAg3PMB3FAAAMAAAA3Pg");
	var mask_graphics_38 = new cjs.Graphics().p("Eg76AboMAAAg3PMB31AAAMAAAA3Pg");
	var mask_graphics_39 = new cjs.Graphics().p("Eg8fAboMAAAg3PMB4/AAAMAAAA3Pg");
	var mask_graphics_40 = new cjs.Graphics().p("Eg9DAboMAAAg3PMB6HAAAMAAAA3Pg");
	var mask_graphics_41 = new cjs.Graphics().p("Eg9oAboMAAAg3PMB7RAAAMAAAA3Pg");
	var mask_graphics_42 = new cjs.Graphics().p("Eg+NAboMAAAg3PMB8bAAAMAAAA3Pg");
	var mask_graphics_43 = new cjs.Graphics().p("Eg+yAboMAAAg3PMB9lAAAMAAAA3Pg");
	var mask_graphics_44 = new cjs.Graphics().p("Eg/XAboMAAAg3PMB+vAAAMAAAA3Pg");
	var mask_graphics_45 = new cjs.Graphics().p("Eg/8AboMAAAg3PMB/5AAAMAAAA3Pg");
	var mask_graphics_46 = new cjs.Graphics().p("EhAgAboMAAAg3PMCBBAAAMAAAA3Pg");
	var mask_graphics_47 = new cjs.Graphics().p("EhBFAboMAAAg3PMCCLAAAMAAAA3Pg");
	var mask_graphics_48 = new cjs.Graphics().p("EhBqAboMAAAg3PMCDVAAAMAAAA3Pg");
	var mask_graphics_49 = new cjs.Graphics().p("EhCPAboMAAAg3PMCEfAAAMAAAA3Pg");
	var mask_graphics_50 = new cjs.Graphics().p("EhC0AboMAAAg3PMCFpAAAMAAAA3Pg");
	var mask_graphics_51 = new cjs.Graphics().p("EhDZAboMAAAg3PMCGzAAAMAAAA3Pg");
	var mask_graphics_52 = new cjs.Graphics().p("EhD9AboMAAAg3PMCH7AAAMAAAA3Pg");
	var mask_graphics_53 = new cjs.Graphics().p("EhEiAboMAAAg3PMCJFAAAMAAAA3Pg");
	var mask_graphics_54 = new cjs.Graphics().p("EhFHAboMAAAg3PMCKPAAAMAAAA3Pg");
	var mask_graphics_55 = new cjs.Graphics().p("EhFzAboMAAAg3PMCLnAAAMAAAA3Pg");
	var mask_graphics_56 = new cjs.Graphics().p("EhGgAboMAAAg3PMCNBAAAMAAAA3Pg");
	var mask_graphics_57 = new cjs.Graphics().p("EhHMAboMAAAg3PMCOZAAAMAAAA3Pg");
	var mask_graphics_58 = new cjs.Graphics().p("EhH4AboMAAAg3PMCPxAAAMAAAA3Pg");
	var mask_graphics_59 = new cjs.Graphics().p("EhIkAboMAAAg3PMCRJAAAMAAAA3Pg");
	var mask_graphics_60 = new cjs.Graphics().p("EhJQAboMAAAg3PMCShAAAMAAAA3Pg");
	var mask_graphics_61 = new cjs.Graphics().p("EhJ9AboMAAAg3PMCT7AAAMAAAA3Pg");
	var mask_graphics_62 = new cjs.Graphics().p("EhKpAboMAAAg3PMCVTAAAMAAAA3Pg");
	var mask_graphics_63 = new cjs.Graphics().p("EhLVAboMAAAg3PMCWrAAAMAAAA3Pg");
	var mask_graphics_64 = new cjs.Graphics().p("EhMBAboMAAAg3PMCYDAAAMAAAA3Pg");
	var mask_graphics_65 = new cjs.Graphics().p("EhMvAboMAAAg3PMCZfAAAMAAAA3Pg");
	var mask_graphics_66 = new cjs.Graphics().p("EhNcAboMAAAg3PMCa5AAAMAAAA3Pg");
	var mask_graphics_67 = new cjs.Graphics().p("EhOJAboMAAAg3PMCcTAAAMAAAA3Pg");
	var mask_graphics_68 = new cjs.Graphics().p("EhO2AboMAAAg3PMCdtAAAMAAAA3Pg");
	var mask_graphics_69 = new cjs.Graphics().p("EhPjAboMAAAg3PMCfHAAAMAAAA3Pg");
	var mask_graphics_70 = new cjs.Graphics().p("EhQRAboMAAAg3PMCgjAAAMAAAA3Pg");
	var mask_graphics_71 = new cjs.Graphics().p("EhQ+AboMAAAg3PMCh9AAAMAAAA3Pg");
	var mask_graphics_72 = new cjs.Graphics().p("EhRrAboMAAAg3PMCjXAAAMAAAA3Pg");
	var mask_graphics_73 = new cjs.Graphics().p("EhSYAboMAAAg3PMCkxAAAMAAAA3Pg");
	var mask_graphics_74 = new cjs.Graphics().p("EhTGAboMAAAg3PMCmNAAAMAAAA3Pg");
	var mask_graphics_75 = new cjs.Graphics().p("EhTzAboMAAAg3PMCnnAAAMAAAA3Pg");
	var mask_graphics_76 = new cjs.Graphics().p("EhUgAboMAAAg3PMCpBAAAMAAAA3Pg");
	var mask_graphics_77 = new cjs.Graphics().p("EhVNAboMAAAg3PMCqbAAAMAAAA3Pg");
	var mask_graphics_78 = new cjs.Graphics().p("EhV6AboMAAAg3PMCr1AAAMAAAA3Pg");
	var mask_graphics_79 = new cjs.Graphics().p("EhWoAboMAAAg3PMCtRAAAMAAAA3Pg");
	var mask_graphics_80 = new cjs.Graphics().p("EhXVAboMAAAg3PMCurAAAMAAAA3Pg");
	var mask_graphics_81 = new cjs.Graphics().p("EhYCAboMAAAg3PMCwFAAAMAAAA3Pg");
	var mask_graphics_82 = new cjs.Graphics().p("EhYvAboMAAAg3PMCxfAAAMAAAA3Pg");
	var mask_graphics_83 = new cjs.Graphics().p("EhZdAboMAAAg3PMCy7AAAMAAAA3Pg");
	var mask_graphics_84 = new cjs.Graphics().p("EhZtAboMAAAg3PMCzbAAAMAAAA3Pg");
	var mask_graphics_85 = new cjs.Graphics().p("EhZ+AboMAAAg3PMCz9AAAMAAAA3Pg");
	var mask_graphics_86 = new cjs.Graphics().p("EhaOAboMAAAg3PMC0dAAAMAAAA3Pg");
	var mask_graphics_87 = new cjs.Graphics().p("EhafAboMAAAg3PMC0/AAAMAAAA3Pg");
	var mask_graphics_88 = new cjs.Graphics().p("EhavAboMAAAg3PMC1fAAAMAAAA3Pg");
	var mask_graphics_89 = new cjs.Graphics().p("EhbAAboMAAAg3PMC2BAAAMAAAA3Pg");
	var mask_graphics_90 = new cjs.Graphics().p("EhbQAboMAAAg3PMC2hAAAMAAAA3Pg");
	var mask_graphics_91 = new cjs.Graphics().p("EhbhAboMAAAg3PMC3DAAAMAAAA3Pg");
	var mask_graphics_92 = new cjs.Graphics().p("EhbxAboMAAAg3PMC3jAAAMAAAA3Pg");
	var mask_graphics_93 = new cjs.Graphics().p("EhcCAboMAAAg3PMC4FAAAMAAAA3Pg");
	var mask_graphics_94 = new cjs.Graphics().p("EhcSAboMAAAg3PMC4lAAAMAAAA3Pg");
	var mask_graphics_95 = new cjs.Graphics().p("EhcjAboMAAAg3PMC5HAAAMAAAA3Pg");
	var mask_graphics_96 = new cjs.Graphics().p("EhczAboMAAAg3PMC5nAAAMAAAA3Pg");
	var mask_graphics_97 = new cjs.Graphics().p("EhdEAboMAAAg3PMC6JAAAMAAAA3Pg");
	var mask_graphics_98 = new cjs.Graphics().p("EhdUAboMAAAg3PMC6pAAAMAAAA3Pg");
	var mask_graphics_99 = new cjs.Graphics().p("EhdlAboMAAAg3PMC7LAAAMAAAA3Pg");
	var mask_graphics_100 = new cjs.Graphics().p("Ehd1AboMAAAg3PMC7rAAAMAAAA3Pg");
	var mask_graphics_101 = new cjs.Graphics().p("EheGAboMAAAg3PMC8NAAAMAAAA3Pg");
	var mask_graphics_102 = new cjs.Graphics().p("EheWAboMAAAg3PMC8tAAAMAAAA3Pg");
	var mask_graphics_103 = new cjs.Graphics().p("Ehe6AboMAAAg3PMC91AAAMAAAA3Pg");
	var mask_graphics_104 = new cjs.Graphics().p("EhfeAboMAAAg3PMC+9AAAMAAAA3Pg");
	var mask_graphics_105 = new cjs.Graphics().p("EhgDAboMAAAg3PMDAHAAAMAAAA3Pg");
	var mask_graphics_106 = new cjs.Graphics().p("EhgnAboMAAAg3PMDBPAAAMAAAA3Pg");
	var mask_graphics_107 = new cjs.Graphics().p("EhhLAboMAAAg3PMDCXAAAMAAAA3Pg");
	var mask_graphics_108 = new cjs.Graphics().p("EhhvAboMAAAg3PMDDfAAAMAAAA3Pg");
	var mask_graphics_109 = new cjs.Graphics().p("EhiTAboMAAAg3PMDEnAAAMAAAA3Pg");
	var mask_graphics_110 = new cjs.Graphics().p("Ehi3AboMAAAg3PMDFvAAAMAAAA3Pg");
	var mask_graphics_111 = new cjs.Graphics().p("EhjbAboMAAAg3PMDG3AAAMAAAA3Pg");
	var mask_graphics_112 = new cjs.Graphics().p("Ehj/AboMAAAg3PMDH/AAAMAAAA3Pg");
	var mask_graphics_113 = new cjs.Graphics().p("EhkjAboMAAAg3PMDJHAAAMAAAA3Pg");
	var mask_graphics_114 = new cjs.Graphics().p("EhlHAboMAAAg3PMDKPAAAMAAAA3Pg");
	var mask_graphics_115 = new cjs.Graphics().p("EhlrAboMAAAg3PMDLXAAAMAAAA3Pg");
	var mask_graphics_116 = new cjs.Graphics().p("EhmPAboMAAAg3PMDMfAAAMAAAA3Pg");
	var mask_graphics_117 = new cjs.Graphics().p("EhmzAboMAAAg3PMDNnAAAMAAAA3Pg");
	var mask_graphics_118 = new cjs.Graphics().p("EhnXAboMAAAg3PMDOvAAAMAAAA3Pg");
	var mask_graphics_119 = new cjs.Graphics().p("Ehn7AboMAAAg3PMDP3AAAMAAAA3Pg");
	var mask_graphics_120 = new cjs.Graphics().p("EhofAboMAAAg3PMDQ/AAAMAAAA3Pg");
	var mask_graphics_121 = new cjs.Graphics().p("EhpDAboMAAAg3PMDSHAAAMAAAA3Pg");
	var mask_graphics_122 = new cjs.Graphics().p("EhpnAboMAAAg3PMDTPAAAMAAAA3Pg");
	var mask_graphics_123 = new cjs.Graphics().p("EhqLAboMAAAg3PMDUXAAAMAAAA3Pg");
	var mask_graphics_124 = new cjs.Graphics().p("EhqvAboMAAAg3PMDVfAAAMAAAA3Pg");
	var mask_graphics_125 = new cjs.Graphics().p("EhrTAboMAAAg3PMDWnAAAMAAAA3Pg");
	var mask_graphics_126 = new cjs.Graphics().p("Ehr3AboMAAAg3PMDXvAAAMAAAA3Pg");
	var mask_graphics_127 = new cjs.Graphics().p("EhsbAboMAAAg3PMDY3AAAMAAAA3Pg");
	var mask_graphics_128 = new cjs.Graphics().p("Ehs/AboMAAAg3PMDZ/AAAMAAAA3Pg");
	var mask_graphics_129 = new cjs.Graphics().p("EhtjAboMAAAg3PMDbHAAAMAAAA3Pg");
	var mask_graphics_130 = new cjs.Graphics().p("EhuHAboMAAAg3PMDcPAAAMAAAA3Pg");
	var mask_graphics_131 = new cjs.Graphics().p("EhuXAboMAAAg3PMDcvAAAMAAAA3Pg");
	var mask_graphics_132 = new cjs.Graphics().p("EhumAboMAAAg3PMDdNAAAMAAAA3Pg");
	var mask_graphics_133 = new cjs.Graphics().p("Ehu2AboMAAAg3PMDdtAAAMAAAA3Pg");
	var mask_graphics_134 = new cjs.Graphics().p("EhvFAboMAAAg3PMDeLAAAMAAAA3Pg");
	var mask_graphics_135 = new cjs.Graphics().p("EhvVAboMAAAg3PMDerAAAMAAAA3Pg");
	var mask_graphics_136 = new cjs.Graphics().p("EhvkAboMAAAg3PMDfJAAAMAAAA3Pg");
	var mask_graphics_137 = new cjs.Graphics().p("Ehv0AboMAAAg3PMDfpAAAMAAAA3Pg");
	var mask_graphics_138 = new cjs.Graphics().p("EhwDAboMAAAg3PMDgHAAAMAAAA3Pg");
	var mask_graphics_139 = new cjs.Graphics().p("EhwTAboMAAAg3PMDgnAAAMAAAA3Pg");
	var mask_graphics_140 = new cjs.Graphics().p("EhwiAboMAAAg3PMDhFAAAMAAAA3Pg");
	var mask_graphics_141 = new cjs.Graphics().p("EhwyAboMAAAg3PMDhlAAAMAAAA3Pg");
	var mask_graphics_142 = new cjs.Graphics().p("EhxBAboMAAAg3PMDiDAAAMAAAA3Pg");
	var mask_graphics_143 = new cjs.Graphics().p("EhxRAboMAAAg3PMDijAAAMAAAA3Pg");
	var mask_graphics_144 = new cjs.Graphics().p("EhxgAboMAAAg3PMDjBAAAMAAAA3Pg");
	var mask_graphics_145 = new cjs.Graphics().p("EhxwAboMAAAg3PMDjhAAAMAAAA3Pg");
	var mask_graphics_146 = new cjs.Graphics().p("Ehx/AboMAAAg3PMDj/AAAMAAAA3Pg");
	var mask_graphics_147 = new cjs.Graphics().p("EhyPAboMAAAg3PMDkfAAAMAAAA3Pg");
	var mask_graphics_148 = new cjs.Graphics().p("EhysAboMAAAg3PMDlZAAAMAAAA3Pg");
	var mask_graphics_149 = new cjs.Graphics().p("EhzKAboMAAAg3PMDmVAAAMAAAA3Pg");
	var mask_graphics_150 = new cjs.Graphics().p("EhzoAboMAAAg3PMDnRAAAMAAAA3Pg");
	var mask_graphics_151 = new cjs.Graphics().p("Eh0GAboMAAAg3PMDoNAAAMAAAA3Pg");
	var mask_graphics_152 = new cjs.Graphics().p("Eh0kAboMAAAg3PMDpJAAAMAAAA3Pg");
	var mask_graphics_153 = new cjs.Graphics().p("Eh1CAboMAAAg3PMDqFAAAMAAAA3Pg");
	var mask_graphics_154 = new cjs.Graphics().p("Eh1fAboMAAAg3PMDq/AAAMAAAA3Pg");
	var mask_graphics_155 = new cjs.Graphics().p("Eh19AboMAAAg3PMDr7AAAMAAAA3Pg");
	var mask_graphics_156 = new cjs.Graphics().p("Eh2bAboMAAAg3PMDs3AAAMAAAA3Pg");
	var mask_graphics_157 = new cjs.Graphics().p("Eh25AboMAAAg3PMDtzAAAMAAAA3Pg");
	var mask_graphics_158 = new cjs.Graphics().p("Eh3hAboMAAAg3PMDvDAAAMAAAA3Pg");
	var mask_graphics_159 = new cjs.Graphics().p("Eh4JAboMAAAg3PMDwTAAAMAAAA3Pg");
	var mask_graphics_160 = new cjs.Graphics().p("Eh4xAboMAAAg3PMDxjAAAMAAAA3Pg");
	var mask_graphics_161 = new cjs.Graphics().p("Eh5aAboMAAAg3PMDy1AAAMAAAA3Pg");
	var mask_graphics_162 = new cjs.Graphics().p("Eh6CAboMAAAg3PMD0FAAAMAAAA3Pg");
	var mask_graphics_163 = new cjs.Graphics().p("Eh6qAboMAAAg3PMD1VAAAMAAAA3Pg");
	var mask_graphics_164 = new cjs.Graphics().p("Eh7SAboMAAAg3PMD2lAAAMAAAA3Pg");
	var mask_graphics_165 = new cjs.Graphics().p("Eh76AboMAAAg3PMD31AAAMAAAA3Pg");
	var mask_graphics_166 = new cjs.Graphics().p("Eh8iAboMAAAg3PMD5FAAAMAAAA3Pg");
	var mask_graphics_167 = new cjs.Graphics().p("Eh9LAboMAAAg3PMD6XAAAMAAAA3Pg");
	var mask_graphics_168 = new cjs.Graphics().p("Eh9zAboMAAAg3PMD7nAAAMAAAA3Pg");
	var mask_graphics_169 = new cjs.Graphics().p("Eh+SAboMAAAg3PMD8lAAAMAAAA3Pg");
	var mask_graphics_170 = new cjs.Graphics().p("Eh+wAboMAAAg3PMD9hAAAMAAAA3Pg");
	var mask_graphics_171 = new cjs.Graphics().p("Eh/PAboMAAAg3PMD+fAAAMAAAA3Pg");
	var mask_graphics_172 = new cjs.Graphics().p("Eh/uAboMAAAg3PMD/dAAAMAAAA3Pg");
	var mask_graphics_173 = new cjs.Graphics().p("EiANAboMAAAg3PMEAbAAAMAAAA3Pg");
	var mask_graphics_174 = new cjs.Graphics().p("EiArAboMAAAg3PMEBXAAAMAAAA3Pg");
	var mask_graphics_175 = new cjs.Graphics().p("EiBKAboMAAAg3PMECVAAAMAAAA3Pg");
	var mask_graphics_176 = new cjs.Graphics().p("EiBpAboMAAAg3PMEDTAAAMAAAA3Pg");
	var mask_graphics_177 = new cjs.Graphics().p("EiCHAboMAAAg3PMEEQAAAMAAAA3Pg");
	var mask_graphics_178 = new cjs.Graphics().p("EiCmAboMAAAg3PMEFNAAAMAAAA3Pg");
	var mask_graphics_179 = new cjs.Graphics().p("EiDFAboMAAAg3PMEGLAAAMAAAA3Pg");
	var mask_graphics_180 = new cjs.Graphics().p("EiDkAboMAAAg3PMEHJAAAMAAAA3Pg");
	var mask_graphics_181 = new cjs.Graphics().p("EiECAboMAAAg3PMEIFAAAMAAAA3Pg");
	var mask_graphics_182 = new cjs.Graphics().p("EiEhAboMAAAg3PMEJDAAAMAAAA3Pg");
	var mask_graphics_183 = new cjs.Graphics().p("EiFAAboMAAAg3PMEKBAAAMAAAA3Pg");
	var mask_graphics_184 = new cjs.Graphics().p("EiFfAboMAAAg3PMEK/AAAMAAAA3Pg");
	var mask_graphics_185 = new cjs.Graphics().p("EiF8AboMAAAg3PMEL5AAAMAAAA3Pg");
	var mask_graphics_186 = new cjs.Graphics().p("EiGZAboMAAAg3PMEMzAAAMAAAA3Pg");
	var mask_graphics_187 = new cjs.Graphics().p("EiG2AboMAAAg3PMENtAAAMAAAA3Pg");
	var mask_graphics_188 = new cjs.Graphics().p("EiHTAboMAAAg3PMEOnAAAMAAAA3Pg");
	var mask_graphics_189 = new cjs.Graphics().p("EiHwAboMAAAg3PMEPhAAAMAAAA3Pg");
	var mask_graphics_190 = new cjs.Graphics().p("EiINAboMAAAg3PMEQbAAAMAAAA3Pg");
	var mask_graphics_191 = new cjs.Graphics().p("EiIqAboMAAAg3PMERVAAAMAAAA3Pg");
	var mask_graphics_192 = new cjs.Graphics().p("EiJHAboMAAAg3PMESPAAAMAAAA3Pg");
	var mask_graphics_193 = new cjs.Graphics().p("EiJlAboMAAAg3PMETLAAAMAAAA3Pg");
	var mask_graphics_194 = new cjs.Graphics().p("EiKCAboMAAAg3PMEUFAAAMAAAA3Pg");
	var mask_graphics_195 = new cjs.Graphics().p("EiKfAboMAAAg3PMEU/AAAMAAAA3Pg");
	var mask_graphics_196 = new cjs.Graphics().p("EiK8AboMAAAg3PMEV5AAAMAAAA3Pg");
	var mask_graphics_197 = new cjs.Graphics().p("EiLZAboMAAAg3PMEWzAAAMAAAA3Pg");
	var mask_graphics_198 = new cjs.Graphics().p("EiL2AboMAAAg3PMEXtAAAMAAAA3Pg");
	var mask_graphics_199 = new cjs.Graphics().p("EiMTAboMAAAg3PMEYnAAAMAAAA3Pg");
	var mask_graphics_200 = new cjs.Graphics().p("EiMwAboMAAAg3PMEZhAAAMAAAA3Pg");
	var mask_graphics_201 = new cjs.Graphics().p("EiNNAboMAAAg3PMEabAAAMAAAA3Pg");
	var mask_graphics_202 = new cjs.Graphics().p("EiNqAboMAAAg3PMEbVAAAMAAAA3Pg");
	var mask_graphics_203 = new cjs.Graphics().p("EiOIAboMAAAg3PMEcRAAAMAAAA3Pg");
	var mask_graphics_204 = new cjs.Graphics().p("EiOlAboMAAAg3PMEdLAAAMAAAA3Pg");
	var mask_graphics_205 = new cjs.Graphics().p("EiPCAboMAAAg3PMEeFAAAMAAAA3Pg");
	var mask_graphics_206 = new cjs.Graphics().p("EiPRAboMAAAg3PMEejAAAMAAAA3Pg");
	var mask_graphics_207 = new cjs.Graphics().p("EiPgAboMAAAg3PMEfBAAAMAAAA3Pg");
	var mask_graphics_208 = new cjs.Graphics().p("EiPvAboMAAAg3PMEffAAAMAAAA3Pg");
	var mask_graphics_209 = new cjs.Graphics().p("EiP+AboMAAAg3PMEf9AAAMAAAA3Pg");
	var mask_graphics_210 = new cjs.Graphics().p("EiQNAboMAAAg3PMEgbAAAMAAAA3Pg");
	var mask_graphics_211 = new cjs.Graphics().p("EiQcAboMAAAg3PMEg5AAAMAAAA3Pg");
	var mask_graphics_212 = new cjs.Graphics().p("EiQrAboMAAAg3PMEhXAAAMAAAA3Pg");
	var mask_graphics_213 = new cjs.Graphics().p("EiQ7AboMAAAg3PMEh3AAAMAAAA3Pg");
	var mask_graphics_214 = new cjs.Graphics().p("EiRKAboMAAAg3PMEiVAAAMAAAA3Pg");
	var mask_graphics_215 = new cjs.Graphics().p("EiRZAboMAAAg3PMEizAAAMAAAA3Pg");
	var mask_graphics_216 = new cjs.Graphics().p("EiRoAboMAAAg3PMEjRAAAMAAAA3Pg");
	var mask_graphics_217 = new cjs.Graphics().p("EiR3AboMAAAg3PMEjvAAAMAAAA3Pg");
	var mask_graphics_218 = new cjs.Graphics().p("EiSGAboMAAAg3PMEkNAAAMAAAA3Pg");
	var mask_graphics_219 = new cjs.Graphics().p("EiSVAboMAAAg3PMEkrAAAMAAAA3Pg");
	var mask_graphics_220 = new cjs.Graphics().p("EiSkAboMAAAg3PMElJAAAMAAAA3Pg");
	var mask_graphics_221 = new cjs.Graphics().p("EiSzAboMAAAg3PMElnAAAMAAAA3Pg");
	var mask_graphics_222 = new cjs.Graphics().p("EiTCAboMAAAg3PMEmFAAAMAAAA3Pg");
	var mask_graphics_223 = new cjs.Graphics().p("EiTRAboMAAAg3PMEmjAAAMAAAA3Pg");
	var mask_graphics_224 = new cjs.Graphics().p("EiThAboMAAAg3PMEnDAAAMAAAA3Pg");
	var mask_graphics_225 = new cjs.Graphics().p("EiTwAboMAAAg3PMEnhAAAMAAAA3Pg");
	var mask_graphics_226 = new cjs.Graphics().p("EiT/AboMAAAg3PMEn/AAAMAAAA3Pg");
	var mask_graphics_227 = new cjs.Graphics().p("EiUOAboMAAAg3PMEodAAAMAAAA3Pg");
	var mask_graphics_228 = new cjs.Graphics().p("EiUcAboMAAAg3PMEo5AAAMAAAA3Pg");
	var mask_graphics_229 = new cjs.Graphics().p("EiUqAboMAAAg3PMEpVAAAMAAAA3Pg");
	var mask_graphics_230 = new cjs.Graphics().p("EiU4AboMAAAg3PMEpxAAAMAAAA3Pg");
	var mask_graphics_231 = new cjs.Graphics().p("EiVGAboMAAAg3PMEqNAAAMAAAA3Pg");
	var mask_graphics_232 = new cjs.Graphics().p("EiVUAboMAAAg3PMEqpAAAMAAAA3Pg");
	var mask_graphics_233 = new cjs.Graphics().p("EiViAboMAAAg3PMErFAAAMAAAA3Pg");
	var mask_graphics_234 = new cjs.Graphics().p("EiVwAboMAAAg3PMErhAAAMAAAA3Pg");
	var mask_graphics_235 = new cjs.Graphics().p("EiV+AboMAAAg3PMEr9AAAMAAAA3Pg");
	var mask_graphics_236 = new cjs.Graphics().p("EiWMAboMAAAg3PMEsZAAAMAAAA3Pg");
	var mask_graphics_237 = new cjs.Graphics().p("EiWaAboMAAAg3PMEs1AAAMAAAA3Pg");
	var mask_graphics_238 = new cjs.Graphics().p("EiWoAboMAAAg3PMEtRAAAMAAAA3Pg");
	var mask_graphics_239 = new cjs.Graphics().p("EiW2AboMAAAg3PMEttAAAMAAAA3Pg");
	var mask_graphics_240 = new cjs.Graphics().p("EiXEAboMAAAg3PMEuJAAAMAAAA3Pg");
	var mask_graphics_241 = new cjs.Graphics().p("EiXSAboMAAAg3PMEulAAAMAAAA3Pg");
	var mask_graphics_242 = new cjs.Graphics().p("EiXgAboMAAAg3PMEvBAAAMAAAA3Pg");
	var mask_graphics_243 = new cjs.Graphics().p("EiXuAboMAAAg3PMEvdAAAMAAAA3Pg");
	var mask_graphics_244 = new cjs.Graphics().p("EiX8AboMAAAg3PMEv5AAAMAAAA3Pg");
	var mask_graphics_245 = new cjs.Graphics().p("EiYKAboMAAAg3PMEwVAAAMAAAA3Pg");
	var mask_graphics_246 = new cjs.Graphics().p("EiYYAboMAAAg3PMEwxAAAMAAAA3Pg");
	var mask_graphics_247 = new cjs.Graphics().p("EiYmAboMAAAg3PMExNAAAMAAAA3Pg");
	var mask_graphics_248 = new cjs.Graphics().p("EiY0AboMAAAg3PMExpAAAMAAAA3Pg");
	var mask_graphics_249 = new cjs.Graphics().p("EiZCAboMAAAg3PMEyFAAAMAAAA3Pg");
	var mask_graphics_250 = new cjs.Graphics().p("EiZQAboMAAAg3PMEyhAAAMAAAA3Pg");
	var mask_graphics_251 = new cjs.Graphics().p("EiZ7AboMAAAg3PMEz3AAAMAAAA3Pg");
	var mask_graphics_252 = new cjs.Graphics().p("EialAboMAAAg3PME1LAAAMAAAA3Pg");
	var mask_graphics_253 = new cjs.Graphics().p("EibPAboMAAAg3PME2fAAAMAAAA3Pg");
	var mask_graphics_254 = new cjs.Graphics().p("Eib6AboMAAAg3PME31AAAMAAAA3Pg");
	var mask_graphics_255 = new cjs.Graphics().p("EickAboMAAAg3PME5JAAAMAAAA3Pg");
	var mask_graphics_256 = new cjs.Graphics().p("EidOAboMAAAg3PME6dAAAMAAAA3Pg");
	var mask_graphics_257 = new cjs.Graphics().p("Eid5AboMAAAg3PME7zAAAMAAAA3Pg");
	var mask_graphics_258 = new cjs.Graphics().p("EiejAboMAAAg3PME9HAAAMAAAA3Pg");
	var mask_graphics_259 = new cjs.Graphics().p("EifNAboMAAAg3PME+bAAAMAAAA3Pg");
	var mask_graphics_260 = new cjs.Graphics().p("Eif4AboMAAAg3PME/xAAAMAAAA3Pg");
	var mask_graphics_261 = new cjs.Graphics().p("EigiAboMAAAg3PMFBFAAAMAAAA3Pg");
	var mask_graphics_262 = new cjs.Graphics().p("EihMAboMAAAg3PMFCZAAAMAAAA3Pg");
	var mask_graphics_263 = new cjs.Graphics().p("Eih3AboMAAAg3PMFDvAAAMAAAA3Pg");
	var mask_graphics_264 = new cjs.Graphics().p("EiihAboMAAAg3PMFFDAAAMAAAA3Pg");
	var mask_graphics_265 = new cjs.Graphics().p("EijLAboMAAAg3PMFGXAAAMAAAA3Pg");
	var mask_graphics_266 = new cjs.Graphics().p("Eij2AboMAAAg3PMFHtAAAMAAAA3Pg");
	var mask_graphics_267 = new cjs.Graphics().p("EikgAboMAAAg3PMFJBAAAMAAAA3Pg");
	var mask_graphics_268 = new cjs.Graphics().p("EilKAboMAAAg3PMFKVAAAMAAAA3Pg");
	var mask_graphics_269 = new cjs.Graphics().p("Eil3AboMAAAg3PMFLvAAAMAAAA3Pg");
	var mask_graphics_270 = new cjs.Graphics().p("EimkAboMAAAg3PMFNJAAAMAAAA3Pg");
	var mask_graphics_271 = new cjs.Graphics().p("EinRAboMAAAg3PMFOjAAAMAAAA3Pg");
	var mask_graphics_272 = new cjs.Graphics().p("Ein9AboMAAAg3PMFP7AAAMAAAA3Pg");
	var mask_graphics_273 = new cjs.Graphics().p("EioqAboMAAAg3PMFRVAAAMAAAA3Pg");
	var mask_graphics_274 = new cjs.Graphics().p("EipXAboMAAAg3PMFSvAAAMAAAA3Pg");
	var mask_graphics_275 = new cjs.Graphics().p("EiqDAboMAAAg3PMFUHAAAMAAAA3Pg");
	var mask_graphics_276 = new cjs.Graphics().p("EiqwAboMAAAg3PMFVhAAAMAAAA3Pg");
	var mask_graphics_277 = new cjs.Graphics().p("EirdAboMAAAg3PMFW7AAAMAAAA3Pg");
	var mask_graphics_278 = new cjs.Graphics().p("EisKAboMAAAg3PMFYVAAAMAAAA3Pg");
	var mask_graphics_279 = new cjs.Graphics().p("Eis2AboMAAAg3PMFZtAAAMAAAA3Pg");
	var mask_graphics_280 = new cjs.Graphics().p("EitUAboMAAAg3PMFapAAAMAAAA3Pg");
	var mask_graphics_281 = new cjs.Graphics().p("EityAboMAAAg3PMFblAAAMAAAA3Pg");
	var mask_graphics_282 = new cjs.Graphics().p("EiuPAboMAAAg3PMFcfAAAMAAAA3Pg");
	var mask_graphics_283 = new cjs.Graphics().p("EiutAboMAAAg3PMFdbAAAMAAAA3Pg");
	var mask_graphics_284 = new cjs.Graphics().p("EivLAboMAAAg3PMFeXAAAMAAAA3Pg");
	var mask_graphics_285 = new cjs.Graphics().p("EivoAboMAAAg3PMFfRAAAMAAAA3Pg");
	var mask_graphics_286 = new cjs.Graphics().p("EiwGAboMAAAg3PMFgNAAAMAAAA3Pg");
	var mask_graphics_287 = new cjs.Graphics().p("EiwkAboMAAAg3PMFhJAAAMAAAA3Pg");
	var mask_graphics_288 = new cjs.Graphics().p("EixCAboMAAAg3PMFiFAAAMAAAA3Pg");
	var mask_graphics_289 = new cjs.Graphics().p("EixfAboMAAAg3PMFi/AAAMAAAA3Pg");
	var mask_graphics_290 = new cjs.Graphics().p("Eix9AboMAAAg3PMFj7AAAMAAAA3Pg");
	var mask_graphics_291 = new cjs.Graphics().p("EiybAboMAAAg3PMFk3AAAMAAAA3Pg");
	var mask_graphics_292 = new cjs.Graphics().p("Eiy4AboMAAAg3PMFlxAAAMAAAA3Pg");
	var mask_graphics_293 = new cjs.Graphics().p("EizWAboMAAAg3PMFmtAAAMAAAA3Pg");
	var mask_graphics_294 = new cjs.Graphics().p("Eiz0AboMAAAg3PMFnpAAAMAAAA3Pg");
	var mask_graphics_295 = new cjs.Graphics().p("Ei0RAboMAAAg3PMFojAAAMAAAA3Pg");
	var mask_graphics_296 = new cjs.Graphics().p("Ei0vAboMAAAg3PMFpfAAAMAAAA3Pg");
	var mask_graphics_297 = new cjs.Graphics().p("Ei1NAboMAAAg3PMFqbAAAMAAAA3Pg");
	var mask_graphics_298 = new cjs.Graphics().p("Ei1qAboMAAAg3PMFrVAAAMAAAA3Pg");
	var mask_graphics_299 = new cjs.Graphics().p("Ei2WAboMAAAg3PMFstAAAMAAAA3Pg");
	var mask_graphics_300 = new cjs.Graphics().p("Ei3BAboMAAAg3PMFuDAAAMAAAA3Pg");
	var mask_graphics_301 = new cjs.Graphics().p("Ei3sAboMAAAg3PMFvZAAAMAAAA3Pg");
	var mask_graphics_302 = new cjs.Graphics().p("Ei4YAboMAAAg3PMFwxAAAMAAAA3Pg");
	var mask_graphics_303 = new cjs.Graphics().p("Ei5DAboMAAAg3PMFyHAAAMAAAA3Pg");
	var mask_graphics_304 = new cjs.Graphics().p("Ei5vAboMAAAg3PMFzfAAAMAAAA3Pg");
	var mask_graphics_305 = new cjs.Graphics().p("Ei6aAboMAAAg3PMF01AAAMAAAA3Pg");
	var mask_graphics_306 = new cjs.Graphics().p("Ei7FAboMAAAg3PMF2LAAAMAAAA3Pg");
	var mask_graphics_307 = new cjs.Graphics().p("Ei7xAboMAAAg3PMF3jAAAMAAAA3Pg");
	var mask_graphics_308 = new cjs.Graphics().p("Ei8cAboMAAAg3PMF45AAAMAAAA3Pg");
	var mask_graphics_309 = new cjs.Graphics().p("Ei9IAboMAAAg3PMF6RAAAMAAAA3Pg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:32.7,y:88.4}).wait(1).to({graphics:mask_graphics_1,x:37.1,y:88.4}).wait(1).to({graphics:mask_graphics_2,x:41.5,y:88.4}).wait(1).to({graphics:mask_graphics_3,x:45.9,y:88.4}).wait(1).to({graphics:mask_graphics_4,x:49,y:88.4}).wait(1).to({graphics:mask_graphics_5,x:52.2,y:88.4}).wait(1).to({graphics:mask_graphics_6,x:55.4,y:88.4}).wait(1).to({graphics:mask_graphics_7,x:58.6,y:88.4}).wait(1).to({graphics:mask_graphics_8,x:61.8,y:88.4}).wait(1).to({graphics:mask_graphics_9,x:65,y:88.4}).wait(1).to({graphics:mask_graphics_10,x:68.1,y:88.4}).wait(1).to({graphics:mask_graphics_11,x:71.3,y:88.4}).wait(1).to({graphics:mask_graphics_12,x:74.5,y:88.4}).wait(1).to({graphics:mask_graphics_13,x:77.7,y:88.4}).wait(1).to({graphics:mask_graphics_14,x:80.9,y:88.4}).wait(1).to({graphics:mask_graphics_15,x:84.1,y:88.4}).wait(1).to({graphics:mask_graphics_16,x:87.3,y:88.4}).wait(1).to({graphics:mask_graphics_17,x:89.6,y:88.4}).wait(1).to({graphics:mask_graphics_18,x:92,y:88.4}).wait(1).to({graphics:mask_graphics_19,x:94.3,y:88.4}).wait(1).to({graphics:mask_graphics_20,x:96.7,y:88.4}).wait(1).to({graphics:mask_graphics_21,x:99,y:88.4}).wait(1).to({graphics:mask_graphics_22,x:101.4,y:88.4}).wait(1).to({graphics:mask_graphics_23,x:103.7,y:88.4}).wait(1).to({graphics:mask_graphics_24,x:106.1,y:88.4}).wait(1).to({graphics:mask_graphics_25,x:108.4,y:88.4}).wait(1).to({graphics:mask_graphics_26,x:110.8,y:88.4}).wait(1).to({graphics:mask_graphics_27,x:113.1,y:88.4}).wait(1).to({graphics:mask_graphics_28,x:115.5,y:88.3}).wait(1).to({graphics:mask_graphics_29,x:117.8,y:88.3}).wait(1).to({graphics:mask_graphics_30,x:120.2,y:88.3}).wait(1).to({graphics:mask_graphics_31,x:122.5,y:88.3}).wait(1).to({graphics:mask_graphics_32,x:124.9,y:88.3}).wait(1).to({graphics:mask_graphics_33,x:127.2,y:88.3}).wait(1).to({graphics:mask_graphics_34,x:129.6,y:88.3}).wait(1).to({graphics:mask_graphics_35,x:131.9,y:88.3}).wait(1).to({graphics:mask_graphics_36,x:134.3,y:88.3}).wait(1).to({graphics:mask_graphics_37,x:136.6,y:88.3}).wait(1).to({graphics:mask_graphics_38,x:139,y:88.4}).wait(1).to({graphics:mask_graphics_39,x:142.7,y:88.4}).wait(1).to({graphics:mask_graphics_40,x:146.4,y:88.4}).wait(1).to({graphics:mask_graphics_41,x:150.1,y:88.4}).wait(1).to({graphics:mask_graphics_42,x:153.7,y:88.4}).wait(1).to({graphics:mask_graphics_43,x:157.4,y:88.4}).wait(1).to({graphics:mask_graphics_44,x:161.1,y:88.4}).wait(1).to({graphics:mask_graphics_45,x:164.8,y:88.4}).wait(1).to({graphics:mask_graphics_46,x:168.5,y:88.4}).wait(1).to({graphics:mask_graphics_47,x:172.1,y:88.4}).wait(1).to({graphics:mask_graphics_48,x:175.8,y:88.4}).wait(1).to({graphics:mask_graphics_49,x:179.5,y:88.4}).wait(1).to({graphics:mask_graphics_50,x:183.2,y:88.4}).wait(1).to({graphics:mask_graphics_51,x:186.8,y:88.4}).wait(1).to({graphics:mask_graphics_52,x:190.5,y:88.4}).wait(1).to({graphics:mask_graphics_53,x:194.2,y:88.4}).wait(1).to({graphics:mask_graphics_54,x:198,y:88.4}).wait(1).to({graphics:mask_graphics_55,x:202.4,y:88.4}).wait(1).to({graphics:mask_graphics_56,x:206.8,y:88.4}).wait(1).to({graphics:mask_graphics_57,x:211.2,y:88.4}).wait(1).to({graphics:mask_graphics_58,x:215.6,y:88.4}).wait(1).to({graphics:mask_graphics_59,x:220,y:88.4}).wait(1).to({graphics:mask_graphics_60,x:224.4,y:88.4}).wait(1).to({graphics:mask_graphics_61,x:228.9,y:88.4}).wait(1).to({graphics:mask_graphics_62,x:233.3,y:88.4}).wait(1).to({graphics:mask_graphics_63,x:237.7,y:88.4}).wait(1).to({graphics:mask_graphics_64,x:242.2,y:88.4}).wait(1).to({graphics:mask_graphics_65,x:246.7,y:88.4}).wait(1).to({graphics:mask_graphics_66,x:251.2,y:88.4}).wait(1).to({graphics:mask_graphics_67,x:255.8,y:88.4}).wait(1).to({graphics:mask_graphics_68,x:260.3,y:88.4}).wait(1).to({graphics:mask_graphics_69,x:264.8,y:88.4}).wait(1).to({graphics:mask_graphics_70,x:269.3,y:88.4}).wait(1).to({graphics:mask_graphics_71,x:273.8,y:88.4}).wait(1).to({graphics:mask_graphics_72,x:278.4,y:88.4}).wait(1).to({graphics:mask_graphics_73,x:282.9,y:88.4}).wait(1).to({graphics:mask_graphics_74,x:287.4,y:88.4}).wait(1).to({graphics:mask_graphics_75,x:291.9,y:88.4}).wait(1).to({graphics:mask_graphics_76,x:296.4,y:88.4}).wait(1).to({graphics:mask_graphics_77,x:301,y:88.4}).wait(1).to({graphics:mask_graphics_78,x:305.5,y:88.4}).wait(1).to({graphics:mask_graphics_79,x:310,y:88.4}).wait(1).to({graphics:mask_graphics_80,x:314.5,y:88.4}).wait(1).to({graphics:mask_graphics_81,x:319.1,y:88.4}).wait(1).to({graphics:mask_graphics_82,x:323.6,y:88.4}).wait(1).to({graphics:mask_graphics_83,x:328.1,y:88.4}).wait(1).to({graphics:mask_graphics_84,x:329.8,y:88.4}).wait(1).to({graphics:mask_graphics_85,x:331.4,y:88.4}).wait(1).to({graphics:mask_graphics_86,x:333.1,y:88.4}).wait(1).to({graphics:mask_graphics_87,x:334.7,y:88.4}).wait(1).to({graphics:mask_graphics_88,x:336.4,y:88.4}).wait(1).to({graphics:mask_graphics_89,x:338,y:88.4}).wait(1).to({graphics:mask_graphics_90,x:339.7,y:88.4}).wait(1).to({graphics:mask_graphics_91,x:341.4,y:88.4}).wait(1).to({graphics:mask_graphics_92,x:343,y:88.4}).wait(1).to({graphics:mask_graphics_93,x:344.7,y:88.4}).wait(1).to({graphics:mask_graphics_94,x:346.3,y:88.4}).wait(1).to({graphics:mask_graphics_95,x:348,y:88.4}).wait(1).to({graphics:mask_graphics_96,x:349.7,y:88.4}).wait(1).to({graphics:mask_graphics_97,x:351.3,y:88.4}).wait(1).to({graphics:mask_graphics_98,x:353,y:88.4}).wait(1).to({graphics:mask_graphics_99,x:354.6,y:88.4}).wait(1).to({graphics:mask_graphics_100,x:356.3,y:88.4}).wait(1).to({graphics:mask_graphics_101,x:357.9,y:88.4}).wait(1).to({graphics:mask_graphics_102,x:359.5,y:88.4}).wait(1).to({graphics:mask_graphics_103,x:363.1,y:88.4}).wait(1).to({graphics:mask_graphics_104,x:366.7,y:88.4}).wait(1).to({graphics:mask_graphics_105,x:370.3,y:88.4}).wait(1).to({graphics:mask_graphics_106,x:373.9,y:88.4}).wait(1).to({graphics:mask_graphics_107,x:377.5,y:88.4}).wait(1).to({graphics:mask_graphics_108,x:381.1,y:88.4}).wait(1).to({graphics:mask_graphics_109,x:384.7,y:88.4}).wait(1).to({graphics:mask_graphics_110,x:388.3,y:88.4}).wait(1).to({graphics:mask_graphics_111,x:391.9,y:88.4}).wait(1).to({graphics:mask_graphics_112,x:395.5,y:88.4}).wait(1).to({graphics:mask_graphics_113,x:399.1,y:88.4}).wait(1).to({graphics:mask_graphics_114,x:402.7,y:88.4}).wait(1).to({graphics:mask_graphics_115,x:406.3,y:88.4}).wait(1).to({graphics:mask_graphics_116,x:409.9,y:88.4}).wait(1).to({graphics:mask_graphics_117,x:413.5,y:88.3}).wait(1).to({graphics:mask_graphics_118,x:417.1,y:88.3}).wait(1).to({graphics:mask_graphics_119,x:420.7,y:88.3}).wait(1).to({graphics:mask_graphics_120,x:424.4,y:88.3}).wait(1).to({graphics:mask_graphics_121,x:428,y:88.3}).wait(1).to({graphics:mask_graphics_122,x:431.6,y:88.3}).wait(1).to({graphics:mask_graphics_123,x:435.2,y:88.3}).wait(1).to({graphics:mask_graphics_124,x:438.8,y:88.3}).wait(1).to({graphics:mask_graphics_125,x:442.4,y:88.3}).wait(1).to({graphics:mask_graphics_126,x:446,y:88.3}).wait(1).to({graphics:mask_graphics_127,x:449.6,y:88.3}).wait(1).to({graphics:mask_graphics_128,x:453.2,y:88.3}).wait(1).to({graphics:mask_graphics_129,x:456.8,y:88.3}).wait(1).to({graphics:mask_graphics_130,x:460.4,y:88.4}).wait(1).to({graphics:mask_graphics_131,x:461.9,y:88.4}).wait(1).to({graphics:mask_graphics_132,x:463.5,y:88.4}).wait(1).to({graphics:mask_graphics_133,x:465,y:88.4}).wait(1).to({graphics:mask_graphics_134,x:466.6,y:88.4}).wait(1).to({graphics:mask_graphics_135,x:468.1,y:88.4}).wait(1).to({graphics:mask_graphics_136,x:469.6,y:88.4}).wait(1).to({graphics:mask_graphics_137,x:471.2,y:88.4}).wait(1).to({graphics:mask_graphics_138,x:472.7,y:88.4}).wait(1).to({graphics:mask_graphics_139,x:474.3,y:88.4}).wait(1).to({graphics:mask_graphics_140,x:475.8,y:88.4}).wait(1).to({graphics:mask_graphics_141,x:477.3,y:88.4}).wait(1).to({graphics:mask_graphics_142,x:478.9,y:88.4}).wait(1).to({graphics:mask_graphics_143,x:480.4,y:88.4}).wait(1).to({graphics:mask_graphics_144,x:482,y:88.4}).wait(1).to({graphics:mask_graphics_145,x:483.5,y:88.4}).wait(1).to({graphics:mask_graphics_146,x:485,y:88.4}).wait(1).to({graphics:mask_graphics_147,x:486.7,y:88.4}).wait(1).to({graphics:mask_graphics_148,x:489.7,y:88.4}).wait(1).to({graphics:mask_graphics_149,x:492.7,y:88.4}).wait(1).to({graphics:mask_graphics_150,x:495.7,y:88.4}).wait(1).to({graphics:mask_graphics_151,x:498.6,y:88.4}).wait(1).to({graphics:mask_graphics_152,x:501.6,y:88.4}).wait(1).to({graphics:mask_graphics_153,x:504.6,y:88.4}).wait(1).to({graphics:mask_graphics_154,x:507.6,y:88.4}).wait(1).to({graphics:mask_graphics_155,x:510.6,y:88.4}).wait(1).to({graphics:mask_graphics_156,x:513.5,y:88.4}).wait(1).to({graphics:mask_graphics_157,x:516.5,y:88.4}).wait(1).to({graphics:mask_graphics_158,x:520.5,y:88.4}).wait(1).to({graphics:mask_graphics_159,x:524.5,y:88.4}).wait(1).to({graphics:mask_graphics_160,x:528.5,y:88.4}).wait(1).to({graphics:mask_graphics_161,x:532.5,y:88.4}).wait(1).to({graphics:mask_graphics_162,x:536.6,y:88.4}).wait(1).to({graphics:mask_graphics_163,x:540.6,y:88.4}).wait(1).to({graphics:mask_graphics_164,x:544.6,y:88.4}).wait(1).to({graphics:mask_graphics_165,x:548.6,y:88.4}).wait(1).to({graphics:mask_graphics_166,x:552.6,y:88.4}).wait(1).to({graphics:mask_graphics_167,x:556.6,y:88.4}).wait(1).to({graphics:mask_graphics_168,x:560.7,y:88.4}).wait(1).to({graphics:mask_graphics_169,x:563.8,y:88.4}).wait(1).to({graphics:mask_graphics_170,x:566.9,y:88.4}).wait(1).to({graphics:mask_graphics_171,x:569.9,y:88.4}).wait(1).to({graphics:mask_graphics_172,x:573,y:88.4}).wait(1).to({graphics:mask_graphics_173,x:576.1,y:88.4}).wait(1).to({graphics:mask_graphics_174,x:579.1,y:88.4}).wait(1).to({graphics:mask_graphics_175,x:582.2,y:88.4}).wait(1).to({graphics:mask_graphics_176,x:585.2,y:88.4}).wait(1).to({graphics:mask_graphics_177,x:588.3,y:88.4}).wait(1).to({graphics:mask_graphics_178,x:591.4,y:88.4}).wait(1).to({graphics:mask_graphics_179,x:594.4,y:88.4}).wait(1).to({graphics:mask_graphics_180,x:597.5,y:88.4}).wait(1).to({graphics:mask_graphics_181,x:600.6,y:88.4}).wait(1).to({graphics:mask_graphics_182,x:603.6,y:88.4}).wait(1).to({graphics:mask_graphics_183,x:606.7,y:88.4}).wait(1).to({graphics:mask_graphics_184,x:609.9,y:88.4}).wait(1).to({graphics:mask_graphics_185,x:612.8,y:88.4}).wait(1).to({graphics:mask_graphics_186,x:615.7,y:88.4}).wait(1).to({graphics:mask_graphics_187,x:618.6,y:88.4}).wait(1).to({graphics:mask_graphics_188,x:621.5,y:88.4}).wait(1).to({graphics:mask_graphics_189,x:624.4,y:88.4}).wait(1).to({graphics:mask_graphics_190,x:627.3,y:88.4}).wait(1).to({graphics:mask_graphics_191,x:630.2,y:88.4}).wait(1).to({graphics:mask_graphics_192,x:633.1,y:88.4}).wait(1).to({graphics:mask_graphics_193,x:636,y:88.4}).wait(1).to({graphics:mask_graphics_194,x:638.9,y:88.4}).wait(1).to({graphics:mask_graphics_195,x:641.8,y:88.4}).wait(1).to({graphics:mask_graphics_196,x:644.7,y:88.4}).wait(1).to({graphics:mask_graphics_197,x:647.6,y:88.4}).wait(1).to({graphics:mask_graphics_198,x:650.5,y:88.4}).wait(1).to({graphics:mask_graphics_199,x:653.4,y:88.4}).wait(1).to({graphics:mask_graphics_200,x:656.4,y:88.4}).wait(1).to({graphics:mask_graphics_201,x:659.3,y:88.4}).wait(1).to({graphics:mask_graphics_202,x:662.2,y:88.4}).wait(1).to({graphics:mask_graphics_203,x:665.1,y:88.4}).wait(1).to({graphics:mask_graphics_204,x:668,y:88.4}).wait(1).to({graphics:mask_graphics_205,x:671,y:88.4}).wait(1).to({graphics:mask_graphics_206,x:672.5,y:88.4}).wait(1).to({graphics:mask_graphics_207,x:674,y:88.4}).wait(1).to({graphics:mask_graphics_208,x:675.6,y:88.4}).wait(1).to({graphics:mask_graphics_209,x:677.1,y:88.4}).wait(1).to({graphics:mask_graphics_210,x:678.6,y:88.4}).wait(1).to({graphics:mask_graphics_211,x:680.1,y:88.4}).wait(1).to({graphics:mask_graphics_212,x:681.6,y:88.4}).wait(1).to({graphics:mask_graphics_213,x:683.1,y:88.4}).wait(1).to({graphics:mask_graphics_214,x:684.6,y:88.4}).wait(1).to({graphics:mask_graphics_215,x:686.1,y:88.4}).wait(1).to({graphics:mask_graphics_216,x:687.6,y:88.4}).wait(1).to({graphics:mask_graphics_217,x:689.1,y:88.4}).wait(1).to({graphics:mask_graphics_218,x:690.6,y:88.4}).wait(1).to({graphics:mask_graphics_219,x:692.2,y:88.4}).wait(1).to({graphics:mask_graphics_220,x:693.7,y:88.4}).wait(1).to({graphics:mask_graphics_221,x:695.2,y:88.4}).wait(1).to({graphics:mask_graphics_222,x:696.7,y:88.4}).wait(1).to({graphics:mask_graphics_223,x:698.2,y:88.4}).wait(1).to({graphics:mask_graphics_224,x:699.7,y:88.4}).wait(1).to({graphics:mask_graphics_225,x:701.2,y:88.4}).wait(1).to({graphics:mask_graphics_226,x:702.7,y:88.4}).wait(1).to({graphics:mask_graphics_227,x:704.2,y:88.4}).wait(1).to({graphics:mask_graphics_228,x:705.6,y:88.4}).wait(1).to({graphics:mask_graphics_229,x:707,y:88.4}).wait(1).to({graphics:mask_graphics_230,x:708.4,y:88.4}).wait(1).to({graphics:mask_graphics_231,x:709.8,y:88.4}).wait(1).to({graphics:mask_graphics_232,x:711.2,y:88.4}).wait(1).to({graphics:mask_graphics_233,x:712.6,y:88.4}).wait(1).to({graphics:mask_graphics_234,x:714,y:88.4}).wait(1).to({graphics:mask_graphics_235,x:715.5,y:88.4}).wait(1).to({graphics:mask_graphics_236,x:716.9,y:88.4}).wait(1).to({graphics:mask_graphics_237,x:718.3,y:88.4}).wait(1).to({graphics:mask_graphics_238,x:719.7,y:88.4}).wait(1).to({graphics:mask_graphics_239,x:721.1,y:88.4}).wait(1).to({graphics:mask_graphics_240,x:722.5,y:88.4}).wait(1).to({graphics:mask_graphics_241,x:723.9,y:88.4}).wait(1).to({graphics:mask_graphics_242,x:725.3,y:88.4}).wait(1).to({graphics:mask_graphics_243,x:726.7,y:88.4}).wait(1).to({graphics:mask_graphics_244,x:728.1,y:88.4}).wait(1).to({graphics:mask_graphics_245,x:729.5,y:88.4}).wait(1).to({graphics:mask_graphics_246,x:730.9,y:88.4}).wait(1).to({graphics:mask_graphics_247,x:732.3,y:88.4}).wait(1).to({graphics:mask_graphics_248,x:733.7,y:88.4}).wait(1).to({graphics:mask_graphics_249,x:735.1,y:88.4}).wait(1).to({graphics:mask_graphics_250,x:736.5,y:88.4}).wait(1).to({graphics:mask_graphics_251,x:740.7,y:88.4}).wait(1).to({graphics:mask_graphics_252,x:744.9,y:88.4}).wait(1).to({graphics:mask_graphics_253,x:749.2,y:88.4}).wait(1).to({graphics:mask_graphics_254,x:753.4,y:88.4}).wait(1).to({graphics:mask_graphics_255,x:757.6,y:88.4}).wait(1).to({graphics:mask_graphics_256,x:761.8,y:88.4}).wait(1).to({graphics:mask_graphics_257,x:766,y:88.4}).wait(1).to({graphics:mask_graphics_258,x:770.3,y:88.4}).wait(1).to({graphics:mask_graphics_259,x:774.5,y:88.4}).wait(1).to({graphics:mask_graphics_260,x:778.7,y:88.4}).wait(1).to({graphics:mask_graphics_261,x:782.9,y:88.4}).wait(1).to({graphics:mask_graphics_262,x:787.2,y:88.4}).wait(1).to({graphics:mask_graphics_263,x:791.4,y:88.4}).wait(1).to({graphics:mask_graphics_264,x:795.6,y:88.4}).wait(1).to({graphics:mask_graphics_265,x:799.8,y:88.4}).wait(1).to({graphics:mask_graphics_266,x:804,y:88.4}).wait(1).to({graphics:mask_graphics_267,x:808.3,y:88.4}).wait(1).to({graphics:mask_graphics_268,x:812.7,y:88.4}).wait(1).to({graphics:mask_graphics_269,x:817.1,y:88.4}).wait(1).to({graphics:mask_graphics_270,x:821.6,y:88.4}).wait(1).to({graphics:mask_graphics_271,x:826,y:88.4}).wait(1).to({graphics:mask_graphics_272,x:830.5,y:88.4}).wait(1).to({graphics:mask_graphics_273,x:835,y:88.4}).wait(1).to({graphics:mask_graphics_274,x:839.4,y:88.4}).wait(1).to({graphics:mask_graphics_275,x:843.9,y:88.4}).wait(1).to({graphics:mask_graphics_276,x:848.3,y:88.4}).wait(1).to({graphics:mask_graphics_277,x:852.8,y:88.4}).wait(1).to({graphics:mask_graphics_278,x:857.2,y:88.4}).wait(1).to({graphics:mask_graphics_279,x:861.9,y:88.4}).wait(1).to({graphics:mask_graphics_280,x:864.8,y:88.4}).wait(1).to({graphics:mask_graphics_281,x:867.8,y:88.4}).wait(1).to({graphics:mask_graphics_282,x:870.8,y:88.4}).wait(1).to({graphics:mask_graphics_283,x:873.7,y:88.4}).wait(1).to({graphics:mask_graphics_284,x:876.7,y:88.4}).wait(1).to({graphics:mask_graphics_285,x:879.6,y:88.4}).wait(1).to({graphics:mask_graphics_286,x:882.6,y:88.4}).wait(1).to({graphics:mask_graphics_287,x:885.5,y:88.4}).wait(1).to({graphics:mask_graphics_288,x:888.5,y:88.4}).wait(1).to({graphics:mask_graphics_289,x:891.5,y:88.4}).wait(1).to({graphics:mask_graphics_290,x:894.4,y:88.4}).wait(1).to({graphics:mask_graphics_291,x:897.4,y:88.4}).wait(1).to({graphics:mask_graphics_292,x:900.3,y:88.4}).wait(1).to({graphics:mask_graphics_293,x:903.3,y:88.4}).wait(1).to({graphics:mask_graphics_294,x:906.2,y:88.4}).wait(1).to({graphics:mask_graphics_295,x:909.2,y:88.4}).wait(1).to({graphics:mask_graphics_296,x:912.2,y:88.4}).wait(1).to({graphics:mask_graphics_297,x:915.1,y:88.4}).wait(1).to({graphics:mask_graphics_298,x:918.3,y:88.4}).wait(1).to({graphics:mask_graphics_299,x:922.6,y:88.4}).wait(1).to({graphics:mask_graphics_300,x:927,y:88.4}).wait(1).to({graphics:mask_graphics_301,x:931.3,y:88.4}).wait(1).to({graphics:mask_graphics_302,x:935.6,y:88.4}).wait(1).to({graphics:mask_graphics_303,x:940,y:88.4}).wait(1).to({graphics:mask_graphics_304,x:944.3,y:88.4}).wait(1).to({graphics:mask_graphics_305,x:948.6,y:88.4}).wait(1).to({graphics:mask_graphics_306,x:953,y:88.4}).wait(1).to({graphics:mask_graphics_307,x:957.3,y:88.4}).wait(1).to({graphics:mask_graphics_308,x:961.7,y:88.4}).wait(1).to({graphics:mask_graphics_309,x:966,y:88.4}).wait(1));

	// stat
	this.curve = new lib.curve();
	this.curve.parent = this;
	this.curve.alpha = 0.57;

	var maskedShapeInstanceList = [this.curve];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.curve).wait(310));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-244.4,-3,568.2,245.8);


(lib.stat_curve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// curve_movement
	this.curve_movement = new lib.curve_movement();
	this.curve_movement.parent = this;
	this.curve_movement.setTransform(1253.2,155.2,1,1,0,0,0,1254.2,119.2);

	this.timeline.addTween(cjs.Tween.get(this.curve_movement).to({x:-613.3},309).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-593.2,-52.4,3101.9,353.5);


(lib.graph = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// curve
	this.stat_curve = new lib.stat_curve();
	this.stat_curve.parent = this;
	this.stat_curve.setTransform(0,260.9,0.798,0.798,0,0,0,-1,277.1);

	this.timeline.addTween(cjs.Tween.get(this.stat_curve).wait(1));

	// graph
	this.map = new lib.map();
	this.map.parent = this;
	this.map.setTransform(-186.8,260.9,0.87,0.87,0,0,0,5.7,325.7);
	this.map.alpha = 0.578;

	this.timeline.addTween(cjs.Tween.get(this.map).wait(1));

}).prototype = getMCSymbolPrototype(lib.graph, new cjs.Rectangle(-472.4,-1.9,3416.5,282.1), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(55.3,34.8,1,1,0,0,0,37,7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAA1PMAAAAqf");
	this.shape.setTransform(113.7,154.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(76.1,153,1,1,180,0,0,76,153.1);

	this.instance_2 = new lib.Symbol13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(563.1,153.1,1,1,0,0,0,76,153.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// stat_curve
	this.graph = new lib.graph();
	this.graph.parent = this;
	this.graph.setTransform(0,278.7,1,1,0,0,0,-187,260.6);

	this.timeline.addTween(cjs.Tween.get(this.graph).wait(1));

	// Layer 3 copy
	this.instance_3 = new lib.Symbol13copy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(318.7,93.7,1.231,2.095,90,0,0,76.1,153);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 1
	this.instance_4 = new lib.Symbol10();
	this.instance_4.parent = this;
	this.instance_4.setTransform(196.1,151,0.751,0.751,0,0,0,248,194.5);
	this.instance_4.alpha = 0.711;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 5
	this.instance_5 = new lib.Символ35();
	this.instance_5.parent = this;
	this.instance_5.setTransform(520.5,152.5,1,1,0,0,0,196,202.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#131416").s().p("Egx/AX1MAAAgvpMBj/AAAMAAAAvpg");
	this.shape_1.setTransform(320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.6,102.5,3416.4,405);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/bgg.png?1479391974856", id:"bgg"},
		{src:"images/btnbg.png?1479391974856", id:"btnbg"},
		{src:"images/grid.png?1479391974856", id:"grid"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;