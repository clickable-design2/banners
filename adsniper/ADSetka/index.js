(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.a101x = function() {
	this.initialize(img.a101x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,84);


(lib.a21x = function() {
	this.initialize(img.a21x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,80);


(lib.a81x = function() {
	this.initialize(img.a81x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,86);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,63);// helper functions:

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


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A0TjvMAonAAAIAAHfMgonAAAg");
	this.shape.setTransform(130,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-1,-1,262,50), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E21918").s().p("AgpB+IAAj7IBTAAIAAAXIgwAAIAABWIAwAAIAAAXIgwAAIAABfIAwAAIAAAYg");
	this.shape.setTransform(272,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E21918").s().p("AAKCCIgBAAIgUAAIgBAAIgBAAQgLAAgKgGQgJgGAAgbIAAg1IAkAAIAAA+QAAADACACIAFACIAAAAIAAAAQADAAADgCQACgBAAgEIAAg4QAAgHgCgCIgFgGIAAgBIgBgBIgBgBIgdgfIgHgJIgEgFIgBgHIAAgJIAAg3IAAgCIAAgDIgBgDIAAgCIAAgCIAAgBQABgKAFgIQADgEAHgCQAGgCAKAAIAVAAQAKAAAGACQAHACADADQAHAJABAJIAAAGIAAAFIAAACIAAABIAAAsIgkAAIAAg1IgBgEIgDgCIgCgBIgCAAIAAAAIgCAAIgEACQAAABAAABQgBAAAAABQAAAAAAABQAAAAAAABIAAA0IAAAAIAAABIAAAFIABAFIACAEIAEAGIAeAhIABABIAAAAIADACIACACIAGAHQACADAAAIIAAA9QAAAPgCAJQgBAIgEADQgGAEgVAAg");
	this.shape_1.setTransform(261.3,18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E21918").s().p("AAMCAIgXAAQgSAAgGgIQgGgIgCgJIAAgGIAAgHIAAAAIAAjZIAkAAIAADgQAAADACACIAFADIAAAAIAAAAQADAAADgCQACgDAAgDIAAjgIAkAAIAADYQAAAYgIAHQgHAGgKABIgDABg");
	this.shape_2.setTransform(249.7,18.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E21918").s().p("AgLCCIgBAAIgCAAQgLgBgJgFQgJgHAAgZIAAi1IAAAAIAAgIIACgKQADgJAGgHQAGgGAPAAIAXAAQAPAAAGAGQAHAHACAIIACAKIAAAJIAAAAIAAAAIAAC1IAAAAIAAABIAAAGIAAAGQgBAJgHAIQgGAIgSAAgAgEhoQgDADAAADIAAAAIAAAAIAADEIAAABIAAAAQAAADACADQACACADAAQAEAAACgCQACgDAAgEIAAjEQAAgDgBgCIgFgDIgBAAIgBAAQgCAAgCACg");
	this.shape_3.setTransform(238.2,18);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E21918").s().p("AAIB+IAAh4IgPAAIAAB4IgkAAIAAj7IAkAAIAABsIAPAAIAAhsIAkAAIAAD7g");
	this.shape_4.setTransform(226.7,18);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E21918").s().p("AAJB+IgShdIgCAAIAABdIgkAAIAAj7IA4AAQASAAAGAIQAGAIABAJIAAAFIAAAFIAAABIAAAAIAABTIAAAGIAAADQgBAHgDAIQgDAGgJAEIAYBigAgLAKIAFAAQAFAAACgEQAEgEAAgHIAAhUQAAgHgDgDQgCgDgEAAIAAAAIgBAAIgGAAg");
	this.shape_5.setTransform(215.5,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E21918").s().p("AgpB+IAAj7IBSAAIAAAXIguAAIAABWIAuAAIAAAXIguAAIAABfIAvAAIAAAYg");
	this.shape_6.setTransform(204.2,18);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E21918").s().p("AANB+IgNi0IgMC0Ig0AAIgXj7IAmAAIAKC3IANi3IA1AAIANC3IAKi3IAmAAIgXD7g");
	this.shape_7.setTransform(189.8,18);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E21918").s().p("AgLCCIgCAAIgBAAQgLgBgJgFQgJgHAAgZIAAi1IAAAAIABgIIABgKQADgJAGgHQAHgGAOAAIAXAAQAPAAAGAGQAGAHADAIIABAKIABAJIAAAAIAAAAIAAC1IAAAAIAAABIAAAGIgBAGQgBAJgFAIQgHAIgSAAgAgFhoQgCADAAADIAAAAIAAAAIAADEIAAABIAAAAQAAADACADQACACADAAQAEAAACgCQACgDAAgEIAAjEQAAgDgCgCIgEgDIgBAAIgBAAQgCAAgDACg");
	this.shape_8.setTransform(174.7,18);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E21918").s().p("AgrB+IAAj7IA3AAIAFAAIAGABQAIABAHAHQADAEABAHQACAHAAAKIAABXQAAAYgJAGQgIAGgLABIgCAAIgCAAIgTAAIAABagAgHANIAEAAQAEAAADgDQAEgCAAgHIAAhaQAAgGgCgDQgDgDgGAAIgEgBg");
	this.shape_9.setTransform(163.8,18);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E21918").s().p("AgLCAIgDAAIgEAAQgJgBgIgGQgIgHAAgXIAAi1IAAgEIAAgFQAAgKAGgJQADgFAGgCQAHgCAKAAIAXAAQARAAAGAGQAHAHABAIIABAHIAAAHIAAABIAAAAIAAAxIgkAAIAAg6QAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAIgEgDIgCgBIgBAAQgCAAgDACQgCADAAACIAAABIAAAAIAADFIAAABIAAABIACAEQACACADAAQADAAADgCQACgCAAgEIAAg9IAkAAIAAA3IAAAAIAAABIAAAHIgBAIQgCAIgGAHQgHAGgQAAg");
	this.shape_10.setTransform(142.2,18.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E21918").s().p("AgRB+IAAj7IAjAAIAAD7g");
	this.shape_11.setTransform(133.1,18);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E21918").s().p("AgRB+IAAjkIgbAAIAAgXIBZAAIAAAXIgbAAIAADkg");
	this.shape_12.setTransform(124.9,18);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E21918").s().p("AASB+IgHhGIgWAAIgGBGIgjAAIAbj7IA0AAIAaD7gAAKAhIgKiAIAAAAIgKCAIAUAAg");
	this.shape_13.setTransform(113.9,18);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E21918").s().p("AArB+IAAibIgXCbIglAAIgZibIAACbIgkAAIAAj7IA0AAIAaCpIAeipIAxAAIAAD7g");
	this.shape_14.setTransform(98.5,18);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E21918").s().p("AArB+IAAibIgXCbIglAAIgZibIAACbIgkAAIAAj7IA0AAIAaCpIAdipIAyAAIAAD7g");
	this.shape_15.setTransform(79.8,18);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E21918").s().p("AARB+IgFhGIgYAAIgFBGIgiAAIAaj7IA1AAIAYD7gAAKAhIgJiAIgBAAIgKCAIAUAAg");
	this.shape_16.setTransform(64.4,18);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E21918").s().p("AAJB+IgShdIgCAAIAABdIgkAAIAAj7IA4AAQASAAAGAIQAGAIABAJIAAAFIAAAFIAAABIAAAAIAABTIAAAGIAAADQgBAHgDAIQgDAGgJAEIAYBigAgLAKIAFAAQAFAAACgEQAEgEAAgHIAAhUQAAgHgDgDQgCgDgEAAIAAAAIgBAAIgGAAg");
	this.shape_17.setTransform(52.9,18);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E21918").s().p("AgMCCQgQAAgGgHQgHgHgBgIIgBgIIgBgIIAAAAIAAi1IABgIIAAgIQACgJAGgIQAHgHAQAAIAVAAQAVAAAGAIQAHAIAAAJIAAADIAAADIAAAEIAAAFIAAAsIgjAAIAAg2IAAgBIgBAAQAAgDgCgCQgCgBgDgBQgDABgCABQgDADAAADIAADGQAAADACADIAFADIABAAIAAAAQADgBADgCQADgCAAgEIAAhHIgIAAIAAgYIAsAAIAABYQAAAdgKAEQgKAFgNAAg");
	this.shape_18.setTransform(40.9,18);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E21918").s().p("AgLCCIgCAAIgBAAQgLgBgJgFQgJgHAAgZIAAi1IAAAAIABgIIABgKQADgJAGgHQAHgGAOAAIAXAAQAPAAAGAGQAGAHADAIIABAKIABAJIAAAAIAAAAIAAC1IAAAAIAAABIAAAGIgBAGQgBAJgFAIQgHAIgSAAgAgFhoQgCADAAADIAAAAIAAAAIAADEIAAABIAAAAQAAADACADQACACADAAQAEAAACgCQACgDAAgEIAAjEQAAgDgCgCIgEgDIgBAAIgBAAQgCAAgDACg");
	this.shape_19.setTransform(29.4,18);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E21918").s().p("AAJB+IgShdIgCAAIAABdIgkAAIAAj7IA4AAQASAAAGAIQAGAIABAJIAAAFIAAAFIAAABIAAAAIAABTIAAAGIAAADQgBAHgDAIQgDAGgJAEIAYBigAgLAKIAFAAQAFAAACgEQAEgEAAgHIAAhUQAAgHgDgDQgCgDgEAAIAAAAIgBAAIgGAAg");
	this.shape_20.setTransform(18.3,18);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E21918").s().p("AgrB+IAAj7IA3AAIAFAAIAGABQAIABAHAHQADAEABAHQACAHAAAKIAABXQAAAYgIAGQgJAGgLABIgCAAIgCAAIgTAAIAABagAgHANIAEAAQAEAAADgDQAEgCABgHIAAhaQAAgGgDgDQgCgDgHAAIgEgBg");
	this.shape_21.setTransform(6.9,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,278.1,38.1), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,235,63), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMCdIAAiXIgYCXIgtAAIAAk5IAtAAIAACcIAYicIAtAAIAAE5g");
	this.shape.setTransform(497.9,22.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANCdIAAiXIgZCXIgtAAIAAk5IAtAAIAACcIAZicIAtAAIAAE5g");
	this.shape_1.setTransform(482.8,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAKCdIAAiWIgTAAIAACWIgtAAIAAk5IAtAAIAACHIATAAIAAiHIAsAAIAAE5g");
	this.shape_2.setTransform(467.9,22.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWCdIgIhXIgdAAIgHBXIgrAAIAhk5IBCAAIAgE5gAAMAoIgLieIgCAAIgMCeIAZAAg");
	this.shape_3.setTransform(453,22.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAKCdIAAkcIgTAAIAAEcIgtAAIAAk5IBtAAIAAE5g");
	this.shape_4.setTransform(438,22.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA2CdIAAjCIgdDCIgvAAIgfjCIAADCIgsAAIAAk5IBBAAIAgDSIAkjSIA+AAIAAE5g");
	this.shape_5.setTransform(419.1,22.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWCdIgIhXIgdAAIgHBXIgrAAIAhk5IBCAAIAgE5gAAMAoIgLieIgCAAIgMCeIAZAAg");
	this.shape_6.setTransform(399.8,22.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPCdIgbiVIAACVIgtAAIAAk5IAtAAIAACHIAViHIAsAAIgbCUIAgClg");
	this.shape_7.setTransform(385.4,22.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggAOIAAgbIBBAAIAAAbg");
	this.shape_8.setTransform(372.9,24);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTCgIgEgBQgMgBgJgIQgKgIAAgdIAAjiIAAgFIAAgGQAAgNAIgLQADgGAIgDQAIgCAMAAIAeAAQAVAAAIAIQAIAIABAKIABAJIABAIIAAACIAAAAIAAA9IgtAAIAAhIQAAgDgCgDIgEgDIgDgBIgBAAQgDAAgEADQgDACAAAEIAAAAIAAABIAAD2IAAABIAAABIADAFQAEADADAAQADAAAEgDQAEgDgBgEIAAhMIAtAAIAABEIAAABIAAAAIgBAJIgBAKQgCAKgIAIQgIAJgUAAIgeAAg");
	this.shape_9.setTransform(361.5,22.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVCdIAAk5IArAAIAAE5g");
	this.shape_10.setTransform(350.1,22.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVCdIAAkcIgiAAIAAgdIBvAAIAAAdIgiAAIAAEcg");
	this.shape_11.setTransform(339.9,22.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAWCdIgIhXIgdAAIgHBXIgrAAIAhk5IBCAAIAgE5gAAMAoIgLieIgCAAIgMCeIAZAAg");
	this.shape_12.setTransform(326.2,22.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA2CdIAAjCIgdDCIgvAAIgfjCIAADCIgsAAIAAk5IBBAAIAgDSIAkjSIA+AAIAAE5g");
	this.shape_13.setTransform(306.9,22.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AA2CdIAAjCIgdDCIgvAAIgfjCIAADCIgsAAIAAk5IBBAAIAgDSIAkjSIA+AAIAAE5g");
	this.shape_14.setTransform(283.6,22.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAWCdIgIhXIgdAAIgHBXIgrAAIAhk5IBCAAIAgE5gAAMAoIgLieIgCAAIgMCeIAZAAg");
	this.shape_15.setTransform(264.4,22.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAMCdIgXh0IgDAAIAAB0IgsAAIAAk5IBFAAQAXAAAHAKQAIAJABAMIAAAGIAAAGIAAABIAAABIAABoIAAAGIAAAFQgBAJgEAJQgEAIgLAFIAdB6gAgOANIAHAAQAGAAADgFQAEgGAAgIIAAhpQAAgJgEgEQgCgDgFAAIgBAAIgBAAIgHAAg");
	this.shape_16.setTransform(250,22.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgrCZQgIgJgCgJIgCgKIAAgJIAAgBIAAAAIAAjjIAAgJIABgKQADgMAHgJQAIgJAVAAIAaAAQAagBAIAKQAIALABALIAAAEIAAADIAAAGIAAAFIAAA3IgtAAIAAhEIAAAAIAAgBQAAgDgDgDQgCgCgEAAQgEABgDACQgDADAAADIAAD4QAAAEACADIAGAEIABAAIABAAQAEAAADgDQAEgDAAgFIAAhYIgLAAIAAgfIA3AAIAABvQAAAjgMAGQgMAGgQAAIgdABQgVgBgIgJg");
	this.shape_17.setTransform(235.2,22.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQCiIgCAAQgNgBgLgHQgMgHAAggIAAjhIAAgCIABgKIACgNQADgKAIgIQAIgJASABIAdAAQASgBAIAJQAIAIAEAKIACANIAAAKIAAAAIAAACIAADhIAAABIAAAAIAAAHIgBAIQgBAMgHAJQgIAKgXAAIgdABIgCgBgAgGiCQgDADAAAEIAAAAIAAABIAAD1IAAAAIAAABQAAADADADQADADADAAQAFAAADgDQADgDAAgEIAAj1QgBgFgCgCIgGgEIAAAAIgCAAQgDAAgDADg");
	this.shape_18.setTransform(220.7,22.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAMCdIgXh0IgDAAIAAB0IgsAAIAAk5IBFAAQAXAAAHAKQAIAJABAMIAAAGIAAAGIAAABIAAABIAABoIAAAGIAAAFQgBAJgEAJQgEAIgLAFIAdB6gAgOANIAHAAQAGAAADgFQAEgGAAgIIAAhpQAAgJgEgEQgCgDgFAAIgBAAIgBAAIgHAAg");
	this.shape_19.setTransform(206.9,22.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag2CdIAAk5IBEAAIAHAAIAHABQAKABAIAKQAFAEACAJQACAIAAANIAABsQAAAegLAIQgLAIgNABIgDAAIgDAAIgXAAIAABwgAgJAQIAFAAQAFAAAFgDQAEgDAAgJIAAhwQAAgIgDgEQgDgEgHAAIgGAAg");
	this.shape_20.setTransform(192.6,22.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E3191A").s().p("Ag0CdIAAk5IBoAAIAAAdIg7AAIAABrIA7AAIAAAcIg7AAIAAB4IA8AAIAAAdg");
	this.shape_21.setTransform(165.9,22.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E3191A").s().p("AArCdIAAk5IAsAAIAAE5gAhWCdIAAk5IAtAAIAAByIAYAAQASAAAJAIQAJAIACAJIABAKIABAHIAAByIgBAJIgCAKQgCAJgJAIQgJAHgSAAgAgpCAIAJAAQAEAAAEgEQAEgEAAgHIAAhtIAAgDIgCgDIgDgHQgCgDgGAAIgIAAg");
	this.shape_22.setTransform(149.4,22.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E3191A").s().p("AAKCdIAAiWIgTAAIAACWIgsAAIAAk5IAsAAIAACHIATAAIAAiHIAsAAIAAE5g");
	this.shape_23.setTransform(131.8,22.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E3191A").s().p("Ag2CdIAAk5IBBAAQAWAAAIAIQAJAJACAKIABAJIABAJIAAABIAABFQAAARgIAIQgIAHgJADIgHABIgHAAIAAADIAGABIAHABQAKABAIAHQAJAHAAAOIAABVQAAAVgJAJQgIAJgLACIgIACIgIAAgAgJCAIAFAAQAEAAAFgEQAFgDAAgJIAAhWQAAgLgEgEQgFgEgFAAIgFAAgAgJgUIAEAAQAIAAADgDQAEgEAAgHIAAhOQAAgHgEgEQgFgEgFAAIgFAAg");
	this.shape_24.setTransform(117.5,22.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E3191A").s().p("AANCdIAAiXIgZCXIgtAAIAAk5IAtAAIAACcIAZicIAtAAIAAE5g");
	this.shape_25.setTransform(102.6,22.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E3191A").s().p("AgVCdIAAkcIgiAAIAAgdIBvAAIAAAdIgiAAIAAEcg");
	this.shape_26.setTransform(88.9,22.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E3191A").s().p("AAPCdIgbiVIAACVIgtAAIAAk5IAtAAIAACHIAViHIAsAAIgbCUIAgClg");
	this.shape_27.setTransform(76,22.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E3191A").s().p("AgzCdIAAk5IBnAAIAAAdIg7AAIAABrIA7AAIAAAcIg7AAIAAB4IA7AAIAAAdg");
	this.shape_28.setTransform(62,22.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E3191A").s().p("AgVCgIAAghIgVAAIgGAAIgHgBQgKgCgIgJQgEgFgCgIQgCgIAAgMIAAivQAAgYAIgJQAIgKALgBIAGgBIAGgBIAVAAIAAgUIArAAIAAAUIAWAAQAQAAAIAIQAIAHADAJIACANIABAJIAACvQAAAWgIAJQgHAKgJADIgHABIgHAAIgWAAIAAAhgAAWBjQAHAAADgDQADgDABgDIABgFIAAgDIAAAAIAAiuQAAgHgDgGQgDgFgIAAIAAAAIgBAAgAgfhrIgEAGIgBAFIAAAEIAACuIAAAAIAAADIABAFIAEAGQADADAHAAIAAjRIgBAAIgCAAQgFAAgCADg");
	this.shape_29.setTransform(45.7,22.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E3191A").s().p("AgVCgIAAghIgVAAIgGAAIgHgBQgKgCgIgJQgEgFgCgIQgCgIAAgMIAAivQAAgYAIgJQAIgKALgBIAGgBIAGgBIAVAAIAAgUIArAAIAAAUIAWAAQAQAAAIAIQAIAHADAJIACANIABAJIAACvQAAAWgIAJQgHAKgJADIgHABIgHAAIgWAAIAAAhgAAWBjQAHAAADgDQADgDABgDIABgFIAAgDIAAAAIAAiuQAAgHgDgGQgDgFgIAAIAAAAIgBAAgAgfhrIgEAGIgBAFIAAAEIAACuIAAAAIAAADIABAFIAEAGQADADAHAAIAAjRIgBAAIgCAAQgFAAgCADg");
	this.shape_30.setTransform(25.7,22.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E3191A").s().p("AgTCiIgHgBQgLgCgIgKQgFgEgCgKQgCgIAAgNIAAhDIAtAAIAABNQAAAEADACQADADADAAQAFAAACgCIADgFIAAAAIAAgCIAAh0IgjAAIAAgcIAjAAIAAhnQAAgEgCgDIgFgDIgBAAIgCAAIAAAAIgDABIgEAEQgCABAAAEIAABGIgsAAIAAg8IAAAAIAAgKIABgKQADgLAIgJQAFgFAHgCQAHgBAKAAIAbAAIAFAAIAFAAQAMACAJAJQAJAKAAAcIAADiIAAAAIAAAKIgCALQgCAKgIAIQgJAJgTAAIgbABg");
	this.shape_31.setTransform(8.3,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,506.9,47.5), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsCdIAAk5IBZAAIAAAdIgtAAIAAEcg");
	this.shape.setTransform(327.8,22.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6CCIALAAQANAAAGgEQAFgFABgGIABgEIABgDIADgYIgxjzIAxAAIAUCiIASiiIAtAAIgsEPQgFAigOAHQgMAHgXgBIgaABg");
	this.shape_1.setTransform(315.3,22.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhDCCQAIAAAEgEQAEgDABgFIACgGIAAgDIAZkMIBGAAIAVE6IguAAIgIjpIgEAAIgMC9IgBAIIgBAJQgDAMgIAJQgIAKgWAAIgWABg");
	this.shape_2.setTransform(300,22.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTCgIgEgBQgLgBgKgIQgKgIAAgdIAAjiIAAgFIAAgGQABgNAGgLQAEgGAIgDQAIgCANAAIAdAAQAVAAAIAIQAIAIABAKIABAJIABAIIAAACIAAAAIAAA9IgsAAIAAhIQAAgDgDgDIgEgDIgCgBIgCAAQgDAAgDADQgEACAAAEIAAAAIAAABIAAD2IAAABIAAABIAEAFQADADADAAQADAAAEgDQAEgDAAgEIAAhMIAsAAIAABEIAAABIAAAAIgBAJIgBAKQgCAKgIAIQgJAJgTAAIgdAAg");
	this.shape_3.setTransform(286.1,22.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag6CCIALAAQANAAAFgEQAGgFACgGIAAgEIABgDIADgYIgxjzIAwAAIAWCiIASiiIAtAAIgsEPQgGAigNAHQgNAHgWgBIgbABg");
	this.shape_4.setTransform(271.4,22.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAMCdIAAiXIgYCXIgtAAIAAk5IAtAAIAACcIAYicIAtAAIAAE5g");
	this.shape_5.setTransform(243.2,22.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag2CdIAAk5IBBAAQAWAAAIAIQAJAJACAKIABAJIABAJIAAABIAABFQAAARgIAIQgIAHgJADIgHABIgHAAIAAADIAGABIAHABQAKABAIAHQAJAHAAAOIAABVQAAAVgJAJQgIAJgLACIgIACIgIAAgAgJCAIAFAAQAEAAAFgEQAFgDAAgJIAAhWQAAgLgEgEQgFgEgFAAIgFAAgAgJgUIAEAAQAIAAADgDQAEgEAAgHIAAhOQAAgHgEgEQgFgEgFAAIgFAAg");
	this.shape_6.setTransform(215.4,22.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQCiIgCAAQgOgBgKgHQgMgHAAggIAAjhIAAgCIAAgKIADgNQADgKAIgIQAIgJASABIAdAAQASgBAIAJQAIAIADAKIACANIABAKIAAAAIAAACIAADhIAAABIAAAAIAAAHIgBAIQgBAMgIAJQgIAKgWAAIgdABIgCgBgAgGiCQgDADAAAEIAAAAIAAABIAAD1IAAAAIAAABQAAADADADQADADADAAQAFAAACgDQADgDABgEIAAj1QAAgFgDgCIgFgEIgBAAIgCAAQgDAAgDADg");
	this.shape_7.setTransform(201.1,22.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag2CdIAAk5IBEAAIAHAAIAHABQAKABAIAKQAFAEACAJQACAIAAANIAABsQAAAegLAIQgLAIgNABIgDAAIgDAAIgXAAIAABwgAgJAQIAFAAQAFAAAFgDQAEgDAAgJIAAhwQAAgIgDgEQgDgEgHAAIgGAAg");
	this.shape_8.setTransform(187.5,22.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAWCdIgIhXIgdAAIgHBXIgrAAIAhk5IBCAAIAgE5gAAMAoIgLieIgCAAIgMCeIAZAAg");
	this.shape_9.setTransform(172.6,22.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag2CdIAAk5IBBAAQAWAAAIAIQAJAJACAKIABAJIABAJIAAABIAABFQAAARgIAIQgIAHgJADIgHABIgHAAIAAADIAGABIAHABQAKABAIAHQAJAHAAAOIAABVQAAAVgJAJQgIAJgLACIgIACIgIAAgAgJCAIAFAAQAEAAAFgEQAFgDAAgJIAAhWQAAgLgEgEQgFgEgFAAIgFAAgAgJgUIAEAAQAIAAADgDQAEgEAAgHIAAhOQAAgHgEgEQgFgEgFAAIgFAAg");
	this.shape_10.setTransform(157.9,22.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQCiIgCAAQgOgBgKgHQgMgHAAggIAAjhIAAgCIAAgKIADgNQADgKAIgIQAIgJASABIAdAAQASgBAIAJQAIAIADAKIADANIAAAKIAAAAIAAACIAADhIAAABIAAAAIAAAHIgBAIQgBAMgHAJQgJAKgWAAIgdABIgCgBgAgGiCQgDADAAAEIAAAAIAAABIAAD1IAAAAIAAABQAAADADADQADADADAAQAFAAACgDQAEgDAAgEIAAj1QAAgFgDgCIgFgEIgBAAIgCAAQgDAAgDADg");
	this.shape_11.setTransform(143.6,22.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVCdIAAkcIgiAAIAAgdIBvAAIAAAdIgiAAIAAEcg");
	this.shape_12.setTransform(130.4,22.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E3191A").s().p("AAWCdIgIhXIgdAAIgHBXIgrAAIAhk5IBCAAIAgE5gAAMAoIgLieIgCAAIgMCeIAZAAg");
	this.shape_13.setTransform(103.5,22.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E3191A").s().p("AA2CdIAAjCIgdDCIgvAAIgfjCIAADCIgsAAIAAk5IBBAAIAgDSIAkjSIA+AAIAAE5g");
	this.shape_14.setTransform(84.3,22.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E3191A").s().p("AAWCdIgIhXIgdAAIgHBXIgrAAIAhk5IBCAAIAgE5gAAMAoIgLieIgCAAIgMCeIAZAAg");
	this.shape_15.setTransform(65,22.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E3191A").s().p("AhDCCQAIAAAEgEQAEgDABgFIACgGIAAgDIAZkMIBGAAIAVE6IguAAIgIjpIgEAAIgMC9IgBAIIgBAJQgDAMgIAJQgIAKgWAAIgWABg");
	this.shape_16.setTransform(49.5,22.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E3191A").s().p("AAPCdIgbiVIAACVIgtAAIAAk5IAtAAIAACHIAViHIAsAAIgbCUIAgClg");
	this.shape_17.setTransform(35.3,22.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E3191A").s().p("Ag0CdIAAk5IBoAAIAAAdIg7AAIAABrIA7AAIAAAcIg7AAIAAB4IA7AAIAAAdg");
	this.shape_18.setTransform(21.4,22.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E3191A").s().p("Ag2CdIAAk5IBEAAIAHAAIAHABQAKABAIAKQAFAEACAJQACAIAAANIAABsQAAAegLAIQgLAIgNABIgDAAIgDAAIgXAAIAABwgAgJAQIAFAAQAFAAAFgDQAEgDAAgJIAAhwQAAgIgDgEQgDgEgHAAIgGAAg");
	this.shape_19.setTransform(8.6,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,334.2,47.5), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLCZQgHgKgCgLIgBgJIAAgIIAAhsIgVAAIAACWIgtAAIAAk6IAtAAIAACHIAVAAIAAhYIACgWQACgIAEgFQAHgLAIgEIAJgBIAHAAIAeAAQASgBAIAJQAIAIADAKIACANIABAKIAAAAIAAACIAADhIAAAIIgBAJQgCALgIAKQgDAEgIADQgHACgLAAIgeABQgVgBgIgJgAAaiCQgDAEAAAEIAAD1QAAADACADQADAEAFAAQAEAAADgDQADgDAAgDIAAgBIAAAAIAAj1IAAgBIAAAAQAAgEgDgDQgDgDgEAAQgEAAgDADg");
	this.shape.setTransform(409.7,22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMCdIAAiXIgYCXIgsAAIAAk5IAsAAIAACcIAYicIAtAAIAAE5g");
	this.shape_1.setTransform(391.5,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2CdIAAk5IBEAAIAHAAIAHABQAKABAIAKQAFAEACAJQACAIAAANIAABsQAAAegLAIQgLAIgNABIgDAAIgDAAIgXAAIAABwgAgJAQIAFAAQAFAAAFgDQAEgDAAgJIAAhwQAAgIgDgEQgDgEgHAAIgGAAg");
	this.shape_2.setTransform(377.3,22.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQCiIgCAAQgNgBgMgHQgLgHAAggIAAjhIAAgCIAAgKIADgNQADgKAIgIQAIgJASABIAdAAQASgBAIAJQAIAIADAKIACANIABAKIAAAAIAAACIAADhIAAABIAAAAIAAAHIgBAIQgBAMgIAJQgHAKgXAAIgdABIgCgBgAgGiCQgDADAAAEIAAAAIAAABIAAD1IAAAAIAAABQAAADACADQADADAEAAQAFAAACgDQADgDAAgEIAAj1QAAgFgCgCIgFgEIgCAAIgBAAQgDAAgDADg");
	this.shape_3.setTransform(363,22.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVCdIAAkcIgiAAIAAgdIBvAAIAAAdIgiAAIAAEcg");
	this.shape_4.setTransform(349.8,22.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAMCdIAAiXIgYCXIgsAAIAAk5IAsAAIAACcIAYicIAtAAIAAE5g");
	this.shape_5.setTransform(336.1,22.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcC3IAAg0Ig3AAIAAA0IgsAAIAAhRIALAAIAakdIBFAAIAbEdIALAAIAABRgAAQBmIgOjjIgCAAIgQDjIAgAAg");
	this.shape_6.setTransform(321.3,25.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag6CCIALAAQANAAAFgEQAGgFABgGIABgEIABgDIADgYIgxjzIAxAAIAVCiIARiiIAtAAIgsEPQgFAigNAHQgNAHgXgBIgaABg");
	this.shape_7.setTransform(304.8,22.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWCdIgIhXIgdAAIgHBXIgrAAIAhk5IBCAAIAgE5gAAMAoIgLieIgCAAIgMCeIAZAAg");
	this.shape_8.setTransform(289.7,22.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag2CdIAAk5IBBAAQAWAAAIAIQAJAJACAKIABAJIABAJIAAABIAABFQAAARgIAIQgIAHgJADIgHABIgHAAIAAADIAGABIAHABQAKABAIAHQAJAHAAAOIAABVQAAAVgJAJQgIAJgLACIgIACIgIAAgAgJCAIAFAAQAEAAAFgEQAFgDAAgJIAAhWQAAgLgEgEQgFgEgFAAIgFAAgAgJgUIAEAAQAIAAADgDQAEgEAAgHIAAhOQAAgHgEgEQgFgEgFAAIgFAAg");
	this.shape_9.setTransform(261.9,22.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag0CdIAAk5IBoAAIAAAdIg7AAIAABrIA7AAIAAAcIg7AAIAAB4IA7AAIAAAdg");
	this.shape_10.setTransform(235.2,22.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AANCdIAAiXIgZCXIgsAAIAAk5IAsAAIAACcIAZicIAtAAIAAE5g");
	this.shape_11.setTransform(221.3,22.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAKCdIAAiWIgTAAIAACWIgtAAIAAk5IAtAAIAACHIATAAIAAiHIAsAAIAAE5g");
	this.shape_12.setTransform(206.5,22.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAWCdIgIhXIgdAAIgHBXIgrAAIAhk5IBCAAIAgE5gAAMAoIgLieIgCAAIgMCeIAZAAg");
	this.shape_13.setTransform(191.5,22.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAcC3IAAg0Ig3AAIAAA0IgtAAIAAhRIAMAAIAakdIBFAAIAaEdIALAAIAABRgAAQBmIgOjjIgCAAIgQDjIAgAAg");
	this.shape_14.setTransform(176.7,25.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAWCdIgIhXIgdAAIgHBXIgrAAIAhk5IBCAAIAgE5gAAMAoIgLieIgCAAIgMCeIAZAAg");
	this.shape_15.setTransform(160,22.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAKCdIAAkcIgTAAIAAEcIgtAAIAAk5IBtAAIAAE5g");
	this.shape_16.setTransform(145,22.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQCiIgCAAQgNgBgMgHQgLgHAAggIAAjhIAAgCIAAgKIADgNQADgKAIgIQAIgJASABIAdAAQASgBAIAJQAIAIADAKIACANIABAKIAAAAIAAACIAADhIAAABIAAAAIAAAHIgBAIQgBAMgIAJQgHAKgXAAIgdABIgCgBgAgGiCQgDADAAAEIAAAAIAAABIAAD1IAAAAIAAABQAAADACADQAEADADAAQAFAAACgDQADgDAAgEIAAj1QAAgFgCgCIgGgEIgBAAIgBAAQgDAAgDADg");
	this.shape_17.setTransform(130.7,22.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAKCdIAAkcIgTAAIAAEcIgtAAIAAk5IBtAAIAAE5g");
	this.shape_18.setTransform(116.3,22.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E3191A").s().p("AgzCdIAAk5IBnAAIAAAdIg7AAIAABrIA7AAIAAAcIg7AAIAAB4IA7AAIAAAdg");
	this.shape_19.setTransform(76.4,22.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E3191A").s().p("AgQCiIgCAAQgOgBgLgHQgLgHAAggIAAjhIAAgCIAAgKIADgNQADgKAIgIQAIgJASABIAdAAQASgBAIAJQAIAIAEAKIABANIABAKIAAAAIAAACIAADhIAAABIAAAAIAAAHIgBAIQgBAMgIAJQgHAKgXAAIgdABIgCgBgAgGiCQgDADAAAEIAAAAIAAABIAAD1IAAAAIAAABQAAADACADQADADAEAAQAFAAADgDQACgDAAgEIAAj1QABgFgDgCIgGgEIgBAAIgBAAQgDAAgDADg");
	this.shape_20.setTransform(63.1,22.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E3191A").s().p("AAKCdIAAiWIgTAAIAACWIgtAAIAAk5IAtAAIAACHIATAAIAAiHIAsAAIAAE5g");
	this.shape_21.setTransform(48.8,22.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E3191A").s().p("AAKCdIAAh2IgXAAQgaAAgHgHQgEgEgCgJQgCgKAAgOIAAiXIAtAAIAACXIAAADIABADIAEAGQADADAFAAIAGAAIAAimIAtAAIAAE5g");
	this.shape_22.setTransform(34.1,22.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E3191A").s().p("AgQCiIgCAAQgNgBgMgHQgLgHAAggIAAjhIAAgCIABgKIACgNQADgKAIgIQAIgJASABIAdAAQASgBAIAJQAIAIAEAKIACANIAAAKIAAAAIAAACIAADhIAAABIAAAAIAAAHIgBAIQgBAMgHAJQgJAKgWAAIgdABIgCgBgAgGiCQgDADAAAEIAAAAIAAABIAAD1IAAAAIAAABQAAADACADQADADAEAAQAFAAADgDQACgDABgEIAAj1QgBgFgCgCIgGgEIgBAAIgBAAQgDAAgDADg");
	this.shape_23.setTransform(20.6,22.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E3191A").s().p("AgVCdIAAkcIgiAAIAAgdIBvAAIAAAdIgiAAIAAEcg");
	this.shape_24.setTransform(7.4,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,421.4,47.5), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANCdIAAiXIgZCXIgtAAIAAk5IAtAAIAACcIAZicIAtAAIAAE5g");
	this.shape.setTransform(492.2,22.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsCdIAAk5IBZAAIAAAdIgtAAIAAEcg");
	this.shape_1.setTransform(479.6,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2CdIAAk5IAtAAIAAByIAWAAIABAAIAIAAIAJADQAKACAGAJQAIAJAAATIAABxIAAABIgBAIIgBALQgDAJgIAIQgJAHgUAAgAgJCAIAJAAQADAAAEgEQADgEAAgHIAAhtQABgHgDgEIgFgFIgDgBIAAAAIgJAAg");
	this.shape_2.setTransform(467.5,22.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAKCdIAAiWIgTAAIAACWIgsAAIAAk5IAsAAIAACHIATAAIAAiHIAsAAIAAE5g");
	this.shape_3.setTransform(453.2,22.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0CdIAAk5IBoAAIAAAdIg7AAIAABrIA7AAIAAAcIg7AAIAAB4IA8AAIAAAdg");
	this.shape_4.setTransform(439.6,22.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcC3IAAg0Ig3AAIAAA0IgtAAIAAhRIAMAAIAakdIBFAAIAaEdIALAAIAABRgAAQBmIgOjjIgCAAIgPDjIAfAAg");
	this.shape_5.setTransform(426.1,25.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANCdIAAiXIgZCXIgsAAIAAk5IAsAAIAACcIAZicIAtAAIAAE5g");
	this.shape_6.setTransform(396.3,22.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPCdIAAh3IgCAAIgaB3IguAAIAkh5QgLgBgGgHQgGgGgCgHIgCgKIAAgHIAAhuIAAgJIACgKQACgJAJgIQAJgIATAAIBEAAIAAE5gAgBh8QgEADAAAJIAABtQAAAGAEAFQADAEAIAAIAFAAIAAiLIgFAAQgHAAgEADg");
	this.shape_7.setTransform(367.8,22.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA2CdIAAjCIgdDCIgvAAIgfjCIAADCIgsAAIAAk5IBBAAIAgDSIAkjSIA+AAIAAE5g");
	this.shape_8.setTransform(349.4,22.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgzCdIAAk5IBnAAIAAAdIg7AAIAABrIA7AAIAAAcIg7AAIAAB4IA8AAIAAAdg");
	this.shape_9.setTransform(331.4,22.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag2CdIAAk5IBEAAIAHAAIAHABQAKABAIAKQAFAEACAJQACAIAAANIAABsQAAAegLAIQgLAIgNABIgDAAIgDAAIgXAAIAABwgAgJAQIAFAAQAFAAAFgDQAEgDAAgJIAAhwQAAgIgDgEQgDgEgHAAIgGAAg");
	this.shape_10.setTransform(318.6,22.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag2CdIAAk5IBBAAQAWAAAIAIQAJAJACAKIABAJIABAJIAAABIAABFQAAARgIAIQgIAHgJADIgHABIgHAAIAAADIAGABIAHABQAKABAIAHQAJAHAAAOIAABVQAAAVgJAJQgIAJgLACIgIACIgIAAgAgJCAIAFAAQAEAAAFgEQAFgDAAgJIAAhWQAAgLgEgEQgFgEgFAAIgFAAgAgJgUIAEAAQAIAAADgDQAEgEAAgHIAAhOQAAgHgEgEQgFgEgFAAIgFAAg");
	this.shape_11.setTransform(304.2,22.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AANCdIAAiXIgZCXIgtAAIAAk5IAtAAIAACcIAZicIAtAAIAAE5g");
	this.shape_12.setTransform(276.2,22.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhWCdIAAk5IAsAAIAAEcIAVAAIAAkcIArAAIAAEcIAVAAIAAkcIAsAAIAAE5g");
	this.shape_13.setTransform(258,22.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAWCdIgIhXIgdAAIgHBXIgrAAIAhk5IBCAAIAgE5gAAMAoIgLieIgCAAIgMCeIAZAAg");
	this.shape_14.setTransform(239.8,22.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag2CdIAAk5IBBAAQAWAAAIAIQAJAJACAKIABAJIABAJIAAABIAABFQAAARgIAIQgIAHgJADIgHABIgHAAIAAADIAGABIAHABQAKABAIAHQAJAHAAAOIAABVQAAAVgJAJQgIAJgLACIgIACIgIAAgAgJCAIAFAAQAEAAAFgEQAFgDAAgJIAAhWQAAgLgEgEQgFgEgFAAIgFAAgAgJgUIAEAAQAIAAADgDQAEgEAAgHIAAhOQAAgHgEgEQgFgEgFAAIgFAAg");
	this.shape_15.setTransform(225.2,22.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E3191A").s().p("AA2CdIAAjCIgdDCIgvAAIgfjCIAADCIgsAAIAAk5IBBAAIAgDSIAkjSIA+AAIAAE5g");
	this.shape_16.setTransform(180,22.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E3191A").s().p("AAMCdIAAiXIgYCXIgsAAIAAk5IAsAAIAACcIAYicIAtAAIAAE5g");
	this.shape_17.setTransform(160.7,22.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E3191A").s().p("AA2CdIAAjCIgdDCIgvAAIgfjCIAADCIgsAAIAAk5IBBAAIAgDSIAkjSIA+AAIAAE5g");
	this.shape_18.setTransform(141.5,22.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E3191A").s().p("AgQCiIgCAAQgOgBgKgHQgMgHAAggIAAjhIAAgCIAAgKIADgNQADgKAIgIQAIgJASABIAdAAQASgBAIAJQAIAIADAKIACANIABAKIAAAAIAAACIAADhIAAABIAAAAIAAAHIgBAIQgBAMgIAJQgIAKgWAAIgdABIgCgBgAgGiCQgDADAAAEIAAAAIAAABIAAD1IAAAAIAAABQAAADADADQADADADAAQAFAAACgDQADgDABgEIAAj1QAAgFgDgCIgFgEIgBAAIgCAAQgDAAgDADg");
	this.shape_19.setTransform(122.8,22.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E3191A").s().p("AAKCdIAAiWIgTAAIAACWIgtAAIAAk5IAtAAIAACHIATAAIAAiHIAtAAIAAE5g");
	this.shape_20.setTransform(108.5,22.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E3191A").s().p("AgQCiIgCAAQgOgBgLgHQgLgHAAggIAAjhIAAgCIABgKIACgNQADgKAIgIQAIgJASABIAdAAQASgBAIAJQAIAIAEAKIABANIABAKIAAAAIAAACIAADhIAAABIAAAAIAAAHIgBAIQgBAMgIAJQgHAKgXAAIgdABIgCgBgAgGiCQgDADAAAEIAAAAIAAABIAAD1IAAAAIAAABQAAADACADQADADAEAAQAFAAADgDQACgDAAgEIAAj1QABgFgDgCIgGgEIgBAAIgBAAQgDAAgDADg");
	this.shape_21.setTransform(94.1,22.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E3191A").s().p("AAPCdIgbiVIAACVIgtAAIAAk5IAtAAIAACHIAViHIAsAAIgbCUIAgClg");
	this.shape_22.setTransform(80.2,22.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E3191A").s().p("AgTCiIgHgBQgLgCgIgKQgFgEgCgKQgCgIAAgNIAAhDIAtAAIAABNQAAAEADACQADADADAAQAFAAACgCIADgFIAAAAIAAgCIAAh0IgjAAIAAgcIAjAAIAAhnQAAgEgCgDIgFgDIgBAAIgCAAIAAAAIgDABIgEAEQgCABAAAEIAABGIgsAAIAAg8IAAAAIAAgKIABgKQADgLAIgJQAFgFAHgCQAHgBAKAAIAbAAIAFAAIAFAAQAMACAJAJQAJAKAAAcIAADiIAAAAIAAAKIgCALQgCAKgIAIQgJAJgTAAIgbABg");
	this.shape_23.setTransform(65.3,22.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E3191A").s().p("AArCdIAAk5IAsAAIAAE5gAhWCdIAAk5IAtAAIAAByIAXAAQATAAAIAIQAKAIACAJIACAKIAAAHIAAByIAAAJIgDAKQgDAJgIAIQgJAHgSAAgAgpCAIAJAAQAEAAAEgEQADgEABgHIAAhtIAAgDIgBgDIgEgHQgCgDgGAAIgIAAg");
	this.shape_24.setTransform(34.8,22.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E3191A").s().p("AA2CdIAAjCIgdDCIgvAAIgfjCIAADCIgsAAIAAk5IBBAAIAgDSIAkjSIA+AAIAAE5g");
	this.shape_25.setTransform(12.9,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,501.2,47.5), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIBAIAAg2Ig3AAIAAgTIA3AAIAAg2IATAAIAAA2IA1AAIAAATIg1AAIAAA2g");
	this.shape.setTransform(32.7,21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLBxIgDAAIgCAAQgIAAgHgGQgGgGAAgUIAAg3IAAgFIABgFQACgGAEgFQAFgFAKAAIAAgCIAAAAIgBAAIgEAAIgDgBQgGgBgEgFQgEgGAAgLIAAgzIAAgBIAAgBIAAgGIABgIQACgIAGgFQAGgHANAAIATAAQANAAAGAHQAGAFACAIIABAIIAAAHIAAAAIAAABIAAAzQAAAMgFAGQgGAGgKAAIgBAAIAAAAIAAACQAKAAAFAFQAFAFABAGIABAFIAAAFIAAA3QAAALgCAIQgCAGgEADQgJAFgKgBgAgEAKIgCAFIAAABIAABGIAAAAIAAABIACAEQACACACAAQAEAAABgCQACgCAAgDIAAhGQAAgEgCgCQgBgBgEAAQgCAAgCABgAgEhaQgCACAAADIAABEIAAAAIAAABIACADQABABAAAAQABABAAAAQABAAAAAAQABABAAAAQADgBACgCIACgEIAAAAIAAhEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgEgDIAAAAIgBAAQgCAAgCACg");
	this.shape_1.setTransform(20.3,21.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEBuIAAitIgDABIgCACIgHACIgJACIAAgYQANgBAHgIQAGgJABgLIAYAAIAADbg");
	this.shape_2.setTransform(11,21.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E3191A").ss(2,1,1).p("ADeAAQAABchCBAQhABChcAAQhbAAhBhCQhBhAAAhcQAAhbBBhBQBBhBBbAAQBcAABABBQBCBBAABbg");
	this.shape_3.setTransform(22.2,22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-1,-1,46.4,46.4), null);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.a81x();
	this.instance.parent = this;
	this.instance.setTransform(-48.5,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,-43,97,86);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.a81x();
	this.instance.parent = this;
	this.instance.setTransform(-48.5,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,-43,97,86);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.a101x();
	this.instance.parent = this;
	this.instance.setTransform(-50.5,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.5,-42,101,84);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.a101x();
	this.instance.parent = this;
	this.instance.setTransform(-50.5,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.5,-42,101,84);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.a21x();
	this.instance.parent = this;
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-40,80,80);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.a21x();
	this.instance.parent = this;
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-40,80,80);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmBzIAAjlIBMAAIAAAVIgrAAIAABPIArAAIAAAUIgrAAIAABXIAsAAIAAAWg");
	this.shape.setTransform(194.9,23);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BzIAAjlIAhAAIAADPIAPAAIAAjPIAfAAIAADPIAPAAIAAjPIAhAAIAADlg");
	this.shape_1.setTransform(182.5,23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnBzIAAjlIAhAAIAABUIAQAAIAAAAIAGAAIAHACQAGABAFAHQAGAGAAAOIAABSIAAABIAAAGIgBAIQgDAHgFAFQgHAGgOAAgAgGBdIAGAAQACAAADgCQACgDAAgFIAAhQQAAgFgBgDIgDgDIgCgBIgBAAIgGAAg");
	this.shape_2.setTransform(169.7,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxBfQAGAAADgDQADgDABgDIABgEIAAgDIATjDIAzAAIAPDlIgiAAIgGiqIgDAAIgICKIgBAGIgBAGQgBAJgHAHQgGAHgPAAIgRABg");
	this.shape_3.setTransform(158.8,23.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMB2IgBAAQgKAAgIgFQgIgGAAgXIAAikIAAgBIAAgHIACgKQACgHAGgGQAGgHANAAIAVAAQANAAAGAGQAGAGACAIIABAJIABAIIAAAAIAAABIAACkIAAAAIAAABIAAAFIgBAGQgBAIgFAHQgGAHgQAAIgVABIgCgBgAgEheQgCACAAADIAAAAIAACyIAAABIAAAAIABAFQACACADAAQADAAACgCQACgCABgEIAAiyQgBgDgCgCIgDgCIgBAAIgBAAQgCAAgCACg");
	this.shape_4.setTransform(148.3,23);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnBzIAAjlIBIAAIAAAVIgoAAIAABOIAQAAIAGAAIAHACQAHACAGAHQAFAFAAAPIAABDIgBAGIgBAIQgCAHgHAFQgGAGgOAAgAgHBdIAHAAQADAAACgCQADgDAAgGIAAhAQAAgFgDgDIgDgEIgBAAIgBAAIgHAAg");
	this.shape_5.setTransform(138,23);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnBzIAAjlIAhAAIAABUIAQAAIAAAAIAGAAIAHACQAGABAFAHQAGAGAAAOIAABSIAAABIAAAGIgBAIQgDAHgFAFQgHAGgOAAgAgGBdIAGAAQACAAADgCQACgDAAgFIAAhQQAAgFgBgDIgDgDIgCgBIgBAAIgGAAg");
	this.shape_6.setTransform(117.9,23);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPBzIAAjQIgZAAIAAgVIBRAAIAAAVIgZAAIAADQg");
	this.shape_7.setTransform(108.3,23);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAQBzIgFhAIgWAAIgEBAIggAAIAYjlIAwAAIAXDlgAAJAeIgIh0IgBAAIgJB0IASAAg");
	this.shape_8.setTransform(98.3,23);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAHBzIAAhuIgNAAIAABuIghAAIAAjlIAhAAIAABjIANAAIAAhjIAhAAIAADlg");
	this.shape_9.setTransform(87.4,23);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKB2IgGAAIgGgBQgGgCgGgHQgCgDgCgGIgBgPIAAgyIAgAAIAAA4IAAABIAAAAQABADACACQACACACAAQADAAACgCQACgCABgDIAAAAIAAgBIAAhEIgBgDIAAgDQgBgDgDgEQgDgDgIAAIgNAAIAAgUIANAAQAIAAADgDQAEgEAAgEIAAgCIAAgDIAAg8IgBgEIgCgCIgDgBQgDAAgCACQgDACAAADIAAAxIggAAIAAgoIABgHIABgIQACgIAHgHQAGgHAPAAIASAAIAEABIADAAQAIABAHAHQAEAEABAHQACAHAAAKIAAAzIAAAEIgBAFQgCAFgFAFQgFAEgLABIAAADIABAAIAAAAIABAAQAJAAAFAEQAEAEACAEIACAHIAAAFIAAA/QAAAMgCAHQgCAHgEADQgIAFgKAAIgBAAIgCAAIAAAAIgVABg");
	this.shape_10.setTransform(76.8,23);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgqBfIAJAAQAJAAAEgEQAEgDABgEIAAgDIABgCIACgSIgkixIAjAAIAQB2IANh2IAgAAIgfDGQgFAZgJAFQgJAEgQAAIgUABg");
	this.shape_11.setTransform(66.4,23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(129.9,23.9,1,1.167,0,0,0,129.9,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-0.5,-4.6,261,57.2), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(257.3,348.7,1,1,0,0,0,253.4,23.7);

	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(253.4,23.7,1,1,0,0,0,253.4,23.7);

	this.instance_2 = new lib.Символ5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(245.8,105,1,1,0,0,0,167.1,23.7);

	this.instance_3 = new lib.Символ4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(249.6,186.2,1,1,0,0,0,210.7,23.7);

	this.instance_4 = new lib.Символ3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(261.3,267.5,1,1,0,0,0,250.6,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,511.8,372.4), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(89.5,-204.5,1,1,0,0,0,117.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({regY:31.3,scaleX:1.31,scaleY:1.31,x:255.6,y:-132.6},5,cjs.Ease.get(1)).wait(90).to({regY:31.5,scaleX:1,scaleY:1,x:89.5,y:-204.5},5).wait(1));

	// Слой 9
	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(252.2,89.9,1,1,0,0,0,139.1,19);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({_off:false},0).to({regY:18.9,scaleX:0.95,scaleY:0.95,x:253.2,y:-84.2,alpha:1},5,cjs.Ease.get(1)).wait(90).to({regY:19,scaleX:1,scaleY:1,x:252.2,y:89.9,alpha:0},5).wait(1));

	// a21x.png
	this.instance_2 = new lib.a21x();
	this.instance_2.parent = this;
	this.instance_2.setTransform(216,-151);

	this.instance_3 = new lib.Анимация1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(256,-111);
	this.instance_3._off = true;

	this.instance_4 = new lib.Анимация2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-134,-111);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},29).to({state:[{t:this.instance_4}]},5).to({state:[]},1).to({state:[{t:this.instance_3}]},159).to({state:[{t:this.instance_3}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).to({_off:true,x:-134},5,cjs.Ease.get(1)).wait(160).to({_off:false,x:636},0).to({x:256},5,cjs.Ease.get(1)).wait(1));

	// a101x.png
	this.instance_5 = new lib.Анимация3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(669.5,-115);
	this.instance_5._off = true;

	this.instance_6 = new lib.Анимация4("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(251.5,-117);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},0).to({_off:true,x:251.5,y:-117},5,cjs.Ease.get(1)).wait(166));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({_off:false},5,cjs.Ease.get(1)).wait(30).to({startPosition:0},0).to({x:-158.5},5,cjs.Ease.get(1)).to({_off:true},1).wait(130));

	// a81x.png
	this.instance_7 = new lib.Анимация5("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(750.5,-110);
	this.instance_7._off = true;

	this.instance_8 = new lib.Анимация6("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(263.5,-110);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(64).to({_off:false},0).to({_off:true,x:263.5},5,cjs.Ease.get(1)).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(64).to({_off:false},5,cjs.Ease.get(1)).wait(30).to({startPosition:0},0).to({x:-126.5},5,cjs.Ease.get(1)).to({_off:true},1).wait(95));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgpPAEnIAApNMBSfAAAIAAJNg");
	var mask_graphics_199 = new cjs.Graphics().p("EgpPAEnIAApNMBSfAAAIAAJNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:252,y:22.3}).wait(199).to({graphics:mask_graphics_199,x:252,y:22.3}).wait(1));

	// Слой 1
	this.instance_9 = new lib.Символ7();
	this.instance_9.parent = this;
	this.instance_9.setTransform(249.3,187.2,1,1,0,0,0,255.9,186.2);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({y:105.2},5).wait(30).to({y:25.2},5).wait(30).to({y:-56.8},5).wait(90).to({x:245.3,y:-137.8},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-236,533.2,287.8);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(129.9,28,1,1,0,0,0,129.9,24);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A1ykwMArlAAAIAAJhMgrlAAAg");
	this.shape.setTransform(129.5,28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A1yExIAAphMArlAAAIAAJhg");
	this.shape_1.setTransform(129.5,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regY:24,scaleX:1,scaleY:1,x:129.9,y:28}}]}).to({state:[{t:this.instance,p:{regY:24.1,scaleX:1.069,scaleY:1.069,x:130,y:28.1}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regY:24.1,scaleX:1.069,scaleY:1.069,x:130,y:28.1}}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.6,261,57.2);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(297,353,1,1,0,0,0,129.9,28);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ13(), 3);

	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(292.4,367.1,1,1,0,0,0,253.4,122.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E3191A").ss(2,1,1).p("EgpFAFeMBSLAAAEgpFgFdMBSLAAA");
	this.shape.setTransform(291,267);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(541.1,36.6,1,1,0,0,0,22.2,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(301,208.3,553.2,609.4);
// library properties:
lib.properties = {
	width: 580,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/a101x.png?1480007203544", id:"a101x"},
		{src:"images/a21x.png?1480007203544", id:"a21x"},
		{src:"images/a81x.png?1480007203544", id:"a81x"},
		{src:"images/logo.png?1480007203544", id:"logo"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;