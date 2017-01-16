(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,350);


(lib.kata = function() {
	this.initialize(img.kata);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,73);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,68);


(lib.palka = function() {
	this.initialize(img.palka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,28);// helper functions:

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


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.palka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(0,0,52,28), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().rr(-182.2,-38.85,364.4,77.7,27.4);
	this.shape.setTransform(182.2,38.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(0,0,364.4,77.7), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AqdCOQgLgCgKgDQgKgFgJgFQgJgHgIgHIgOgRQgFgJgFgKQgEgLgDgLQgCgMAAgMQAAgLACgLQADgLAEgKQAEgKAGgJQAHgKAHgHQAIgIAJgFQAJgHALgEQAKgEALgCQAMgCANAAQAPAAAOADQAOADAMAGQAKAGAJAJQAJAIAIALIgtAhQgKgMgKgGQgMgHgPABQgLgBgLAFQgJAEgHAJQgHAHgEAKQgDAKAAAMQAAANADALQAEAKAHAIQAHAIAJAEQALAEALABQAIAAAHgCIANgFQAKgHAKgMIAuAfQgIAMgJAIQgJAJgLAHQgMAHgPADQgPAEgSAAQgLAAgLgDgABJCLIAEguIAOABQAIgBAFgDQAGgEAEgNQAFgPADgcQABgTABg5IAAgfICoAAIAADZIg9AAIAAijIgyAAIAAAIQgCA7gDAVQgDAQgEAMQgDAMgFAIQgFAJgGAGQgFAGgGAEQgHADgIABIgOACQgRgBgUgEgAK7CMIAAh6IhUB6Ig4AAIAAjZIA7AAIAAB6IBVh6IA5AAIAADZgAHNCMIAAhBIgbAAIgsBBIhFAAIA0hLQgLgFgIgGQgIgGgHgJQgFgIgDgKQgEgLABgMQAAgKACgIQABgIAEgHQAGgOANgJQAMgKARgEQAQgEATgBIBmAAIAADZgAGNgSQgEADgCAFQgDAFAAAHQAAALAIAIQAFADAGACQAGACAHAAIApAAIAAg1IgoAAQgPAAgJAHgAhuCMIAAjZICvAAIAAA0IhzAAIAAAgIBnAAIAAAwIhnAAIAAAiIB0AAIAAAzgAk/CMIAAjZIBdAAQAVABAQAFQARAFAMAKQAMAKAHAOQAFAVAAALQABAJgCAJQgCAIgEAIQgDAHgEAGIgMALQgMAKgRAFQgRAFgVAAIgeAAIAAA+gAkDAfIAdAAQAIAAAGgCQAHgCAEgEQAFgEACgFQADgGAAgGQAAgGgDgGQgCgEgFgFQgFgDgGgCQgHgBgHAAIgdAAgAnXCMIAAijIhBAAIAAg2IC/AAIAAA2IhBAAIAACjgAKBheQgKgDgHgGQgHgGgFgJQgEgJgCgLIAhgGQADAJAFAFQAGAFAIAAQAIAAAGgFQAFgFADgJIAhAGQgBALgGAJQgEAJgHAGQgHAGgKADQgJADgLAAQgMAAgIgDg");
	this.shape.setTransform(76,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(0,0,151.9,29), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AqdCOQgLgCgKgDQgKgFgJgFQgJgHgIgHIgOgRQgFgJgFgKQgEgLgDgLQgCgMAAgMQAAgLACgLQADgLAEgKQAEgKAGgJQAHgKAHgHQAIgIAJgFQAJgHALgEQAKgEALgCQAMgCANAAQAPAAAOADQAOADAMAGQAKAGAJAJQAJAIAIALIgtAhQgKgMgKgGQgMgHgPABQgLgBgLAFQgJAEgHAJQgHAHgEAKQgDAKAAAMQAAANADALQAEAKAHAIQAHAIAJAEQALAEALABQAIAAAHgCIANgFQAKgHAKgMIAuAfQgIAMgJAIQgJAJgLAHQgMAHgPADQgPAEgSAAQgLAAgLgDgABJCLIAEguIAOABQAIgBAFgDQAGgEAEgNQAFgPADgcQABgTABg5IAAgfICoAAIAADZIg9AAIAAijIgyAAIAAAIQgCA7gDAVQgDAQgEAMQgDAMgFAIQgFAJgGAGQgFAGgGAEQgHADgIABIgOACQgRgBgUgEgAK7CMIAAh6IhUB6Ig4AAIAAjZIA7AAIAAB6IBVh6IA5AAIAADZgAHNCMIAAhBIgbAAIgsBBIhFAAIA0hLQgLgFgIgGQgIgGgHgJQgFgIgDgKQgEgLABgMQAAgKACgIQABgIAEgHQAGgOANgJQAMgKARgEQAQgEATgBIBmAAIAADZgAGNgSQgEADgCAFQgDAFAAAHQAAALAIAIQAFADAGACQAGACAHAAIApAAIAAg1IgoAAQgPAAgJAHgAhuCMIAAjZICvAAIAAA0IhzAAIAAAgIBnAAIAAAwIhnAAIAAAiIB0AAIAAAzgAk/CMIAAjZIBdAAQAVABAQAFQARAFAMAKQAMAKAHAOQAFAVAAALQABAJgCAJQgCAIgEAIQgDAHgEAGIgMALQgMAKgRAFQgRAFgVAAIgeAAIAAA+gAkDAfIAdAAQAIAAAGgCQAHgCAEgEQAFgEACgFQADgGAAgGQAAgGgDgGQgCgEgFgFQgFgDgGgCQgHgBgHAAIgdAAgAnXCMIAAijIhBAAIAAg2IC/AAIAAA2IhBAAIAACjgAKBheQgKgDgHgGQgHgGgFgJQgEgJgCgLIAhgGQADAJAFAFQAGAFAIAAQAIAAAGgFQAFgFADgJIAhAGQgBALgGAJQgEAJgHAGQgHAGgKADQgJADgLAAQgMAAgIgDg");
	this.shape.setTransform(76,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(0,0,151.9,29), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(13,1,1).p("AINAAQAADaiaCZQiZCajaAAQjZAAiaiaQiZiZAAjaQAAjZCZiaQCaiZDZAAQDaAACZCZQCaCaAADZg");
	this.shape.setTransform(52.5,52.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-6.5,-6.5,118,118), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(6,1,1).p("AgdrNIA7AAIAAWbIg7AAg");
	this.shape.setTransform(3,71.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-3,-3,12,149.6), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AA/kqIFZEcIsvE5g");
	this.shape.setTransform(40.8,29.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(0,0,81.6,59.9), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF0000","#FFFF00","#66FF00"],[0,0.29,1],-42.6,0,42.7,0).s().p("AmqHTIA0haQBgA+CXg7QClhACHirQCGiqAZi0QAYikhQhSIBSg3QBbBHgdDNQgfDWiiDNQihDOjFBMQhcAkhJAAQhMAAg2gog");
	this.shape.setTransform(42.7,50.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(0,0,85.4,101.4), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2.1,1,1).p("EgB7AodIABgbMAD2hQe");
	this.shape.setTransform(100.5,258.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF0000","rgba(255,0,0,0)"],[0,1],5.2,-137.2,-7.8,135.2).s().p("An0Q8IBC1uImTgUINtseIAFAFIMZNpImigUIhCVvgAArxDIACgcg");
	this.shape_1.setTransform(83.8,627);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,-1,167.6,740.6), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2.1,1,1).p("EAAAAogIAAgbMAAAhQk");
	this.shape.setTransform(84.4,259.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF0000","rgba(255,0,0,0)"],[0,1],0,-136.4,0,136.4).s().p("AmzRcIAA1wImTAAINGtHIAEAEINDNDImjAAIAAVwgAAEw7IAAgcg");
	this.shape_1.setTransform(83.9,626.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,-1,167.8,739.4), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2.1,1,1).p("AhCAiQAAgcAUgTQAUgUAaAAQAcAAATAUQAUATAAAc");
	this.shape.setTransform(6.7,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-1,-1,15.5,8.8), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAwQgOAAAAgOIAAhDQAAgOAOAAIA9AAQAOAAAAAOIAABDQAAAOgOAAgAgLgUQgGAGAAAJQAAAHAGAGIAEADIAAATIATAAIAAgSIABgBIAEgDQAGgGAAgHQAAgJgGgGQgGgGgJAAQgHAAgGAGg");
	this.shape.setTransform(4.5,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,9.1,9.6), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("ALxh8IG4AAIAAD5Im4AAgALxB9I+ZAAIAAj5IeZAA");
	this.shape.setTransform(119.3,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AvMB9IAAj5IeYAAIAAD5g");
	this.shape_1.setTransform(97.3,12.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjbB9IAAj5IG3AAIAAD5g");
	this.shape_2.setTransform(216.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-2.5,-2.5,243.5,30), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("Ayoh8MAlRAAAIAAD5MglRAAAg");
	this.shape.setTransform(119.3,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AyoB9IAAj5MAlRAAAIAAD5g");
	this.shape_1.setTransform(119.3,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-2.5,-2.5,243.5,30), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("Apph8IcSAAIAAD5I8SAAgAppB9Io/AAIAAj5II/AA");
	this.shape.setTransform(119.3,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AkfB9IAAj5II/AAIAAD5g");
	this.shape_1.setTransform(28.8,12.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AuIB9IAAj5IcRAAIAAD5g");
	this.shape_2.setTransform(148,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-2.5,-2.5,243.5,30), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("AgyHyQgSgLgJgVIgKjXQglgQgXgEQgbgTgMgNQgJgLgMgHIhkAAIgoAKIgJAKIg9gFIgggXQAGgLAIgJICghLIBzgpIARgRIAOgNIBbgsIANgEQAygOAcgOQAWgQAUgSIATgSIArgbQASgpAMgqQANgkAEgvQAQhdAJhfIC4ACQAMCNAOCNQAPCTgFCWQgFCXiJBlQiJBmjUBGIgIgFg");
	this.shape.setTransform(45,50.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,90.1,100.6), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("AnUHxIgPnRIi+hZIgDhXIMomTIDbCHQAegTAhgNQAlgPAkAJQBZAZBVApIAFAUIABAHIAJGyIhLA2Qh1gDh1AFIgeByIBLA3Im4DXIhjgxIgzAtQglAKgmAHQg5AKg6AIg");
	this.shape.setTransform(67.7,54.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,135.3,109.5), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("ApNgZIAAgEIABgEIACgDIAAgBIgDgEIAAgYIEdiGIAyAtIANgGIACACIADgCIANgEQAMgEAOgKIAQgKIAKgGQAMgHAdgLIAGgDQA8gXBFglIAegQIEliKIAHgEIACgBICKhBIABAAIBoAwIAKGzIybIEg");
	this.shape.setTransform(59,51.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,1.5,118,100.1), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.931,0.931);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,605.5,326), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.824,0.824);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,159.8,56), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(26,14,1,1,0,0,0,26,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({rotation:2.7,x:25.3,y:15.3},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,28);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 49
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(80.1,11.5,1,1,0,0,0,76,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:79.8,y:12.5},7,cjs.Ease.get(-1)).to({x:79.5,y:13.5},7,cjs.Ease.get(1)).to({x:79.8,y:12.6},7,cjs.Ease.get(-1)).to({x:80.1,y:11.5},8,cjs.Ease.get(1)).wait(1));

	// Символ 50
	this.instance_1 = new lib.Символ50();
	this.instance_1.parent = this;
	this.instance_1.setTransform(81.7,14.4,1,1,0,0,0,76,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:82,y:13.5},7,cjs.Ease.get(-1)).to({x:82.3,y:12.6},7,cjs.Ease.get(1)).to({x:82,y:13.4},7,cjs.Ease.get(-1)).to({x:81.7,y:14.4},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.1,-3,153.5,31.9);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(71.8,71.8,1,1,90,0,0,3,71.8);

	this.instance_1 = new lib.Символ43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(71.8,71.8,1,1,0,0,0,3,71.8);

	this.instance_2 = new lib.Символ44();
	this.instance_2.parent = this;
	this.instance_2.setTransform(71.8,71.8,1,1,0,0,0,52.5,52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-3,-3,149.6,149.6), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,1,1,0,0,0,71.8,71.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},69).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.8,-74.7,149.6,149.6);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(9.5,9.5,0.216,0.289,-4.7,0,0,40.9,30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:41.1,regY:30.1,scaleX:0.18,scaleY:0.25,rotation:0,skewX:-61.4,skewY:-42.1,x:55.7,y:-42.2},7,cjs.Ease.get(-1)).to({regX:41.2,regY:30.4,scaleX:0.15,scaleY:0.21,skewX:-117.9,skewY:-79.7,x:60.9,y:-92.6},7,cjs.Ease.get(1)).wait(1).to({regX:41.1,regY:30.1,scaleX:0.18,scaleY:0.25,skewX:-61.4,skewY:-42.1,x:55.7,y:-42.2},7,cjs.Ease.get(-1)).to({regX:40.9,regY:30.2,scaleX:0.22,scaleY:0.29,rotation:-4.7,skewX:0,skewY:0,x:9.5,y:9.5},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.9,18.7);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(35.1,103.3,1,1,0,0,0,9.5,9.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(48.7,47.5,0.988,0.551,0,-26.9,-32.2,42.9,51.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(0,0,96.7,112.7), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(176.1,386.4,1,1,15.5,0,0,83.8,369.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-8,x:40.6,y:388},24,cjs.Ease.get(-1)).to({rotation:-32.5,x:-100.8,y:389.6},25,cjs.Ease.get(1)).to({regY:369.3,scaleX:1,scaleY:1,rotation:-8.5,x:37.7,y:388.2},25,cjs.Ease.get(-1)).to({regY:369.2,scaleX:1,scaleY:1,rotation:15.5,x:176.1,y:386.4},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,7.2,359.3,758.4);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(101.7,365.1,1,1,2.7,0,0,83.9,368.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.5,x:74,y:372.3},7,cjs.Ease.get(-1)).to({rotation:-5.9,x:46.1,y:379.4},7,cjs.Ease.get(1)).to({rotation:-1.3,x:75.8,y:371.9},8,cjs.Ease.get(-1)).to({rotation:2.7,x:101.7,y:365.1},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,-8.2,203,746.6);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Слой 3
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(198.2,303,1.207,1,-10.7,0,0,48.5,47.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

	// Слой 2
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(90.7,-149.1,1,1,0,0,0,83.8,369.2);

	this.instance_2 = new lib.Символ24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-101.4,-110.9,1.01,1,0,-30.7,-22.6,83.9,368.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2,p:{scaleX:1.01,rotation:0,skewX:-30.7,skewY:-22.6,x:-101.4,y:-110.9,regX:83.9,regY:368.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:1,rotation:-5,skewX:0,skewY:0,x:52.3,y:-155,regX:83.9,regY:368.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:1.006,rotation:0,skewX:17.4,skewY:11.1,x:223.5,y:-156.9,regX:84,regY:368.2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.4,-511.1,359.3,758.4);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(10,10.8,1.473,1.804,0,0,0,4.5,4.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKBtQgaAAAAgbIAAijQAAgbAaAAICWAAQAYAAAAAbIAACjQAAAbgYAAgAgEg6QgFACgDAGIgGACQgHADgBAJQgEAFgBAHQgEAOAFALQAEAMALAGIgBACIgDACQgEAEgCAGQgBAHACAGQACAGAGADIAIACIAHAAIAJABQAFABAEgBQAJgFAAgNIAAgDQAHgEABgFQACgEgBgEIACgBQAEgDAEgKIAGgRQACgMgIgFIgIgDIgBgDQgBgGgGgEIgFgDQgCgHgHgEIgLgBIgIABg");
	this.shape.setTransform(10.1,10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,20.1,21.8), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(27.1,57.1,0.152,0.191,0,-4.2,-24.7,118.5,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3.4,1,1).p("AHFgxIAAivIgUkiIjNAAAnJCgIA3AoIB0gjIB4AeIBoA8IAKEEIF3ivICHi0IgFjMADpnzIgjExQiWCcn0DB");
	this.shape.setTransform(45.3,64);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(46.1,62.9,1,1,0,0,0,44.7,50.2);
	this.instance_1.alpha = 0.461;
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-2.1,10.8,94.9,106.4), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(60.1,52.2,1,1,0,0,0,60.1,51.9);
	this.instance.alpha = 0.461;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,1.8,118,100.1), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.parent = this;
	this.instance.setTransform(63,32,1,1,0,0,0,26,14);

	this.instance_1 = new lib.kata();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,94,73), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(80.5,29.2,1,1,0,0,0,80.5,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:16.7,scaleX:1.07,scaleY:1.07,x:80.6,y:29.3},9,cjs.Ease.get(-1)).to({scaleX:1.15,scaleY:1.15},10,cjs.Ease.get(1)).to({regX:80.4,scaleX:1.07,scaleY:1.07,x:80.5},10,cjs.Ease.get(-1)).to({regX:80.5,regY:16.6,scaleX:1,scaleY:1,y:29.2},10,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ54();
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.5,28.8,0.67,0.67,0,0,0,182.2,38.8);
	this.instance_1.alpha = 0.852;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.6,2.8,244.2,52.1);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(70.8,71.8,1,1,0,0,0,-1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.1,scaleX:0.93,scaleY:0.93,y:71.9},4,cjs.Ease.get(-1)).to({regY:0,scaleX:0.84,scaleY:0.84,y:71.8},5,cjs.Ease.get(1)).to({regY:0.1,scaleX:0.92,scaleY:0.92,y:71.9},5,cjs.Ease.get(-1)).to({regY:0,scaleX:1,scaleY:1,y:71.8},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,149.6,149.6);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,1,1,0,0,0,71.8,71.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-74.7,-74.7,149.6,149.6), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(161.5,44.4,1,1,0,0,0,47.3,56.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660099").s().p("Ego/gXQMBR/gAXMgARAvPg");
	this.shape.setTransform(262.4,151.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(262.4,151.2,1,1,0,0,0,262.4,151.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ34(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,-1.7,524.9,304.1), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(10,15.6,1,0.782,0,0,0,10,10.8);

	this.instance_1 = new lib.Символ18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.3,3.4,1,1,0,0,0,6.7,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,-1,20.1,25.2), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(14.4,13.7,0.595,0.595,0,0,0,10.1,11.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.7,1,1).p("ACQAAQAAA8gqAqQgqAqg8AAQg7AAgqgqQgqgqAAg8QAAg7AqgqQAqgqA7AAQA8AAAqAqQAqAqAAA7g");
	this.shape.setTransform(14.4,14.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AhlBmQgqgrAAg7QAAg6AqgrQArgqA6AAQA7AAArAqQAqArAAA6QAAA7gqArQgrAqg7AAQg6AAgrgqg");
	this.shape_1.setTransform(14.4,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-1,-1,30.8,30.8), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(44.9,11.6,0.14,0.179,0,-5.5,-23.7);

	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.1,50.2,1,1,0,0,0,60.1,51.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3.4,1,1).p("ApRhDIEniGIAyAsILPlZIBxAtIAKG4IygIIIAAo3");
	this.shape.setTransform(58.9,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-2.2,-2.4,122.2,104.7), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(88.6,149.6,1,1,0,0,0,59,50.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660099").s().p("EgmngYXMBNfAwWMhNvAAZg");
	this.shape.setTransform(248.8,156);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(248.8,156,1,1,0,0,0,248.8,156);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ32(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(0,0,497.6,312), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(8.1,8.2,0.566,0.566,0,0,0,14.3,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-0.5,-0.5,17.3,17.3), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(8.2,8.2,1,1,0,0,0,8.2,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.52},10,cjs.Ease.get(-1)).to({regX:7.9,scaleX:0.01},9,cjs.Ease.get(1)).to({regX:8.2,scaleX:0.54},10,cjs.Ease.get(-1)).to({scaleX:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,17.3,17.3);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(52.8,4.2,1.344,1.344,0,0,0,8.2,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(56.4,25,0.153,0.186,0,-5.6,-24.8,119.2,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3.4,1,1).p("AKPl0Ihfg8AIrmwIhugUIhuAjIjIiCIsuF3AnbHzIB0AxIC5geIA3g3IBVAtIG3jXIg3gyIAPhzICMAUICHgoIAtg3AKnAyIgJmhAnfHyIAEABAqsg5IDSBaIgBHSAqsinIAABp");
	this.shape.setTransform(66.7,53.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(66.2,52.6,1,1,0,0,0,67.7,54.8);
	this.instance_2.alpha = 0.461;
	this.instance_2.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-3.5,-7.4,140.4,117.4), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(276.2,147.4,1,1,0,0,0,67.2,54);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6699CC").s().p("Eg7cga0IXxh5MBfHA4DI86BYg");
	this.shape.setTransform(380.5,183.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(380.4,183.8,1,1,0,0,0,380.4,183.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ33(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,0,760.9,367.7), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(243.8,44.4,1,1,0,0,0,47.3,56.9);

	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(168,113.7,1,1,0,0,0,67.2,54);

	this.instance_2 = new lib.Символ8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(59.5,164.2,1,1,0,0,0,59,50.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},15).to({state:[{t:this.instance_1}]},38).to({state:[{t:this.instance}]},12).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(194.3,-1.7,94.9,106.4);


// stage content:
(lib.Katapulka_600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.pric.alpha=0;
		
		
		this.cursor = "none";
		this.pric.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.pric.x = stage.mouseX/window.devicePixelRatio;
			this.pric.y = stage.mouseY/window.devicePixelRatio;
		}
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		stage.canvas.addEventListener("mouseover", fl_Clickover3.bind(this));
		
		function fl_Clickover3()
		{
		
			this.wall.alpha=0;
			this.pric.alpha=1;
			
		
		
		
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout4.bind(this));
		
		function fl_Clickout4()
		{
		
			this.wall.alpha=1;
			this.wall.gotoAndPlay(0);;
			this.arrow.gotoAndStop(0);
			this.pric.alpha=0;
		
		}
		
		//---------------------
		
		this.left.addEventListener("mouseover", fl_Clickover5.bind(this));
		
		function fl_Clickover5()
		{
		
			this.arrow.gotoAndStop(1);
		
		
		}
		
		this.middle.addEventListener("mouseover", fl_Clickover6.bind(this));
		
		function fl_Clickover6()
		{
		
			this.arrow.gotoAndStop(2);
		
		
		}
		
		this.right.addEventListener("mouseover", fl_Clickover7.bind(this));
		
		function fl_Clickover7()
		{
		
			this.arrow.gotoAndStop(3);
		
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 9
	this.pric = new lib.Символ45();
	this.pric.parent = this;
	this.pric.setTransform(-186.1,84.4,0.473,0.591,0,0,-25.7,-0.4,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// Символ 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(109.2,246.8,1,1,0,0,0,91,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 8
	this.middle = new lib.Символ31();
	this.middle.parent = this;
	this.middle.setTransform(273.2,139.4,1,1,0,0,0,380.4,183.8);

	this.right = new lib.Символ30();
	this.right.parent = this;
	this.right.setTransform(343,142,1,1,0,0,0,262.4,151.2);

	this.left = new lib.Символ29();
	this.left.parent = this;
	this.left.setTransform(221.6,162.5,1,1,0,0,0,248.8,156);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.left},{t:this.right},{t:this.middle}]}).wait(1));

	// Символ 3
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(371,236.1,1,1,0,0,0,47,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.arrow = new lib.Символ23();
	this.arrow.parent = this;
	this.arrow.setTransform(327.7,213.1,0.348,0.306,0,-53.7,-25.4,83.9,112.2);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

	// Слой 6
	this.wall = new lib.Символ28();
	this.wall.parent = this;
	this.wall.setTransform(142.9,98.1,1,1,0,0,0,143.8,107.3);

	this.timeline.addTween(cjs.Tween.get(this.wall).wait(1));

	// Символ 2
	this.instance_2 = new lib.Символ2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(505.9,41,1,1,0,0,0,79.9,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 4
	this.instance_3 = new lib.Символ4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(302.7,153,1,1,0,0,0,302.7,163);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82.2,139.1,823.3,326.9);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.png?1484581708888", id:"back"},
		{src:"images/kata.png?1484581708888", id:"kata"},
		{src:"images/logo.png?1484581708888", id:"logo"},
		{src:"images/palka.png?1484581708888", id:"palka"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;