(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1123,843);


(lib.bubles = function() {
	this.initialize(img.bubles);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,833);


(lib.Button = function() {
	this.initialize(img.Button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,96);


(lib.cofii = function() {
	this.initialize(img.cofii);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,58);


(lib.gamepad = function() {
	this.initialize(img.gamepad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,38);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1218,1049);


(lib.Iphone = function() {
	this.initialize(img.Iphone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,412);


(lib.knopka = function() {
	this.initialize(img.knopka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.Layer13 = function() {
	this.initialize(img.Layer13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,25);


(lib.Layer14 = function() {
	this.initialize(img.Layer14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,49);


(lib.Layer5 = function() {
	this.initialize(img.Layer5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,164);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,46);


(lib.logotxt = function() {
	this.initialize(img.logotxt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,42);


(lib.mikrovoln = function() {
	this.initialize(img.mikrovoln);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,46);


(lib.nout = function() {
	this.initialize(img.nout);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,53);


(lib.plita = function() {
	this.initialize(img.plita);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,69);


(lib.ring = function() {
	this.initialize(img.ring);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1022,928);


(lib.smartphone = function() {
	this.initialize(img.smartphone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,65);


(lib.stirka = function() {
	this.initialize(img.stirka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,66);


(lib.wifi = function() {
	this.initialize(img.wifi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,45);


(lib.wifirou = function() {
	this.initialize(img.wifirou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,40);// helper functions:

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


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000","#000000","rgba(0,0,0,0)"],[0,0.325,0.686,1],0,-178.8,0,178.9).s().p("Eh3OAR6MAAAgjzMDudAAAMAAAAjzg");
	this.shape.setTransform(763.1,114.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,1526.3,229.3), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AhQF7QgjgJgWgRQgUgQgLgaQgIgYgBgiIAAg3ICWAAIAAAjQAAAaAJAIQAHAHASAAQAUAAAHgHQAJgIAAgaIAAhUIhGAAQguAAgXgFQgcgFgPgNQgUgOgJggQgIgegBgzIAAjbICWAAIAADbQABAoATAAIAyAAIAAkDICWAAIAAHZQgBAigIAYQgKAagVAQQgWARgjAJQgkAJg1gBQgzABgkgJgAvKF7QgjgJgWgRQgVgQgJgaQgJgYAAgiIAAlcQAAgjAJgXQAJgaAVgQQAWgSAjgHQAkgJA0AAQA1AAAkAJQAjAHAWASQAVAQAKAaQAIAXABAjIAAFcQgBAigIAYQgKAagVAQQgWARgjAJQgkAJg1gBQg0ABgkgJgAuMhtQgJAIAAAaIAAE0QAAAaAJAIQAHAHATAAQAVAAAGgHQAIgIAAgaIAAk0QAAgagIgIQgGgHgVAAQgTAAgHAHgAVVF6IABkaIgBAAIhkEaIiNAAIAApWICOAAIgBERIABAAIBkkRICLAAIAAJWgAOpF6IgLhkIhgAAIgNBkIiPAAIBapWIDiAAIBaJWgANMCoIBDAAIggkNIgCAAgAHhF6IAAnfIhQAAIAAHfIiWAAIAApWIF7AAIAAJWgAl8F6Ihqk1IBjkhICfAAIhxEWIB5FAgAp/F6IAApWICTAAIAAJWgAz7F6IAAnfIhPAAIAAHfIiWAAIAApWIF7AAIAAJWgATikFQgcgIgTgSQgSgSgKgYQgJgZAAghIByAAQAAAaAJAIQAGAHAUAAQAUAAAHgHQAIgIAAgaIB0AAQAAAhgJAZQgKAYgTASQgTASgcAIQgcAKgmgBQgkABgdgKg");
	this.shape.setTransform(182,64.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(31.4,25.4,301.1,77.5), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AoYFiIAAhkIjcAAIAABkIiMAAIAAjSIA8AAIAAnoIF8AAIAAHoIA8AAIAADSgAquCQIBQAAIAAlwIhQAAgAQOD/QgjgJgXgRQgUgQgKgaQgJgYAAgiIAAlcQAAgjAJgXQAKgaAUgQQAXgSAjgHQAjgJA1AAQA0AAAkAJQAkAHAWASQAVAQAJAaQAJAXAAAjIAAFcQAAAigJAYQgJAagVAQQgWARgkAJQgkAJg0gBQg1ABgjgJgARLjpQgIAIAAAaIAAE0QAAAaAIAIQAHAHAUAAQAUAAAGgHQAJgIAAgaIAAk0QAAgagJgIQgGgHgUAAQgUAAgHAHgAj/D/QgkgJgWgRQgUgQgKgaQgJgYAAgiIAAlcQAAgjAJgXQAKgaAUgQQAWgSAkgHQAjgJA1AAQA0AAAkAJQAjAHAXASQAUAQAJAaQAJAXAAAjIAAFcQAAAigJAYQgJAagUAQQgXARgjAJQgkAJg0gBQg1ABgjgJgAjBjpQgJAIAAAaIAAE0QAAAaAJAIQAHAHATAAQAUAAAHgHQAIgIAAgaIAAk0QAAgagIgIQgHgHgUAAQgTAAgHAHgAy+D/QgigJgWgRQgVgQgKgaQgJgYAAgiIAAg3ICWAAIAAAjQAAAaAIAIQAIAHATAAQAUAAAGgHQAJgIAAgaIAAhUIhGAAQgvAAgWgFQgcgFgQgNQgTgNgJggQgJgeAAg0IAAjbICWAAIAADbQAAApAUAAIAyAAIAAkEICWAAIAAHZQAAAigJAYQgJAagWAQQgVARgkAJQgkAJg0gBQg0ABglgJgALdD+IAAj+IhQAAIAAD+IiWAAIAApWICWAAIAADhIBQAAIAAjhICWAAIAAJWgABLD+IAApWIFmAAIAABuIjQAAIAABkIBGAAQAugBAYAEQAbAFAQANQATAQAJAeQAJAfAAAzIAACLQAAAbgKATQgJATgRANQgfAWgwAAgADhCQIAyAAQAUABAAgoIAAhaQAAgngUgBIgyAAg");
	this.shape.setTransform(153.3,76.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(22.2,41.1,262.2,70.9), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AmUEtQgjgKgWgRQgUgQgLgaQgIgXgBgiIAAldQABgiAIgXQALgaAUgRQAWgRAjgIQAkgJA1AAQA0AAAkAJQAjAIAWARQAVARAKAaQAIAXABAiIAAFdQgBAigIAXQgKAagVAQQgWARgjAKQgkAIg0AAQg1AAgkgIgAlWi7QgJAHAAAaIAAE1QAAAaAJAHQAHAHAUAAQATAAAHgHQAJgHAAgaIAAk1QAAgagJgHQgHgHgTAAQgUAAgHAHgAd0EsIAApXIFLAAIAABuIi0AAIAABzICWAAIAABtIiWAAIAACbIC0AAIAABugAasEsIAAkaIAAAAIhkEaIiNAAIAApXICOAAIgBETIABAAIBjkTICNAAIAAJXgATqEsIAAj/IhRAAIAAD/IiWAAIAApXICWAAIAADhIBRAAIAAjhICWAAIAAJXgAKHEsIAApXIFLAAIAABuIi0AAIAABzICVAAIAABtIiVAAIAACbIC0AAIAABugAG5EsIhok1IBjkiICdAAIhvEXIB4FAgAC4EsIAApXICTAAIAAJXgAhXEsIB4lAIhwkXICeAAIBjEiIhqE1gAqyEsIg3m/IgCAAIg3G/IiSAAIBcpXIDeAAIBcJXgAxuEsIABkaIgBAAIhkEaIiMAAIAApXICNAAIgBETIABAAIBkkTICNAAIAAJXgA8GEsIAApXIEAAAQAvAAAfAXQASAMAIATQAKAUAAAaIAACMQAAAzgJAeQgIAfgUAPQgQANgbAFQgXAEguAAIhHAAIAADSgA5wgTIAzAAQATAAABgoIAAhaQgBgogTAAIgzAAgA/YEsIAAnfIhQAAIAAHfIiWAAIAApXIF9AAIAAJXg");
	this.shape.setTransform(251.7,72);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(27.9,41.1,447.7,61.8), null);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.knopka();
	this.instance.parent = this;
	this.instance.setTransform(-18.2,-21.5,0.798,0.798,4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-21.5,43,43);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.knopka();
	this.instance.parent = this;
	this.instance.setTransform(-19.9,-19.9,0.798,0.798);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,39.9,39.9);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AIlEtQgjgKgWgRQgUgQgLgaQgIgXgBgiIAAldQABgiAIgXQALgaAUgRQAWgRAjgIQAkgJA1AAQAzAAAlAJQAjAIAWARQAVARAJAaQAJAXAAAiIAAFdQAAAigJAXQgJAagVAQQgWARgjAKQglAIgzAAQg1AAgkgIgAJji7QgIAHAAAaIAAE1QAAAaAIAHQAHAHAUAAQATAAAHgHQAJgHAAgaIAAk1QAAgagJgHQgHgHgTAAQgUAAgHAHgAyJEtQgjgKgWgRQgVgQgKgaQgJgXAAgiIAAldQAAgiAJgXQAKgaAVgRQAWgRAjgIQAkgJA1AAQA0AAAkAJQAjAIAWARQAVARAJAaQAKAXgBAiIAABhIiVAAIAAhNQAAgagJgHQgGgHgUAAQgUAAgHAHQgIAHAAAaIAAE1QAAAaAIAHQAHAHAUAAQAUAAAGgHQAJgHAAgaIAAhQICVAAIAABkQABAigKAXQgJAagVAQQgWARgjAKQgkAIg0AAQg1AAgkgIgA4zEtQgjgKgWgRQgUgQgKgaQgKgXABgiIAAg3ICVAAIAAAjQAAAaAJAHQAHAHATAAQAUAAAHgHQAIgHAAgaIAAhVIhGAAQguAAgWgEQgcgFgQgNQgUgPgIgfQgKgdABg0IAAjcICVAAIAADcQAAAoAVAAIAxAAIAAkEICXAAIAAHaQAAAigJAXQgKAagVAQQgWARgjAKQglAIg0AAQg0AAgkgIgAYHEsIACkaIgCAAIhkEaIiLAAIAApXICMAAIgBETIABAAIBlkTICLAAIAAJXgANxEsIAApXID3AAQAwAAAfAXQARAMAJATQALAUgBAaIAABZQAAAhgJAVQgMAbgbANIAAABQAcAJAMAdQAKAYAAAqIAABvQAAAagJAUQgJATgSAMQgfAXgvAAgAQCC+IAxAAQAVAAAAgoIAAhJQgCghgTAAIgxAAgAQChBIAxAAQATAAACggIAAg0QAAgogVAAIgxAAgAD0EsIAAj/IhQAAIAAD/IiVAAIAApXICVAAIAADhIBQAAIAAjhICXAAIAAJXgAirEsIgNhkIheAAIgOBkIiOAAIBapXIDiAAIBaJXgAkKBaIBFAAIgikNIgBAAgArZEsIAAnpIh0AAIAAhuIF8AAIAABuIhzAAIAAHpg");
	this.shape.setTransform(176.4,72);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(7.9,41.1,336.9,61.8), null);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.knopka();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.798,0.798);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol41, new cjs.Rectangle(0,0,39.9,39.9), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.149)").s().p("Ehd3BCfMAAAiE8MC7uAAAMAAACE8g");
	this.shape.setTransform(541.1,391.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(-59.6,-34.1,1201.5,850.9), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,1123,843), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,28,49), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,164,164), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,350,96), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.941)").s().p("ABrEIQgfgIgTgPQgSgOgJgWQgIgVAAgeIAAkzQAAgdAIgVQAJgXASgOQATgPAfgIQAggHAuAAQAuAAAgAHQAeAIAUAPQASAOAJAXQAHAVAAAdIAAEzQAAAegHAVQgJAWgSAOQgUAPgeAIQggAHguAAQguAAgggHgACiikQgIAGAAAXIAAEPQAAAXAIAHQAGAFARAAQARAAAGgFQAIgHAAgXIAAkPQAAgXgIgGQgGgGgRAAQgRAAgGAGgAlaByQAAgeAMgYQAMgZAXgRQAXgSBDgeIAYgLIAKgFIAMgIQAKgNAAgUIAAgwQAAgXgHgGQgGgGgSAAQgRAAgGAGQgHAGAAAXIAAAnIiAAAIAAg5QAAgdAHgVQAJgXASgOQATgPAegIQAfgHAsAAQApAAAeAHQAcAIASAPQATAOAIAXQAJAVAAAdIAABcQAAAfgNAXQgKAUgWAPQgWARggAQIhCAjIgKAJQgKAMAAAYIAAARIC+AAIAABqIlAABg");
	this.shape.setTransform(34.7,27.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,69.5,54.3), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.937)").s().p("ABtEIQgfgIgTgPQgSgOgJgWQgHgVAAgeIAAkzQAAgdAHgVQAJgXASgOQATgPAfgIQAggHAuAAQAuAAAgAHQAfAIATAPQATAOAIAXQAIAVAAAdIAAEzQAAAegIAVQgIAWgTAOQgTAPgfAIQggAHguAAQguAAgggHgACkikQgIAGAAAXIAAEPQAAAXAIAHQAGAFARAAQARAAAGgFQAIgHAAgXIAAkPQAAgXgIgGQgGgGgRAAQgRAAgGAGgAkIEIQgfgIgSgPQgSgOgJgWQgJgVAAgeIAAgsICFAAIAAAaQAAAXAGAHQAGAFASAAQASAAAGgFQAHgHAAgXIAAhEQgBgdgQAAIgnAAIAAhgIAnAAQAQAAABgcIAAgyQAAgXgHgGQgGgGgSAAQgSAAgGAGQgGAGAAAXIAAAaIiFAAIAAgsQAAgdAJgVQAJgXASgOQASgPAfgIQAggHAuAAQAuAAAgAHQAeAIAUAQQASAOAIAWQAJAVAAAdIAAA4QAAAegJATQgKAZgYAKQAXAHAKAaQAKAXAAAjIAABMQAAAdgIAUQgHAVgSAPQgSARggAIQghAHgvAAQguAAgggHg");
	this.shape.setTransform(35,27.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,69.9,54.3), null);


(lib.Symbol18copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.937)").s().p("AAOEIQgegIgTgPQgTgOgIgWQgIgVAAgeIAAkzQAAgdAIgVQAIgXATgOQATgPAegIQAggHAtAAQAuAAAhAHQAeAIATAPQATAOAIAXQAIAVAAAdIAAEzQAAAegIAVQgIAWgTAOQgTAPgeAIQghAHguAAQgtAAgggHgABEikQgHAGAAAXIAAEPQAAAXAHAHQAHAFAQAAQASAAAGgFQAIgHgBgXIAAkPQABgXgIgGQgGgGgSAAQgQAAgHAGgAj9EIIAAoPICEAAIAAIPg");
	this.shape.setTransform(45.8,63.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18copy, new cjs.Rectangle(20.4,36.1,50.8,54.2), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cofii();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,65,58), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gamepad();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,61,38), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.light();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,30,46), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mikrovoln();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,70,46), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nout();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,64,53), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plita();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,50,69), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.smartphone();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,39,65), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.stirka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,48,66), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wifi();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.771,0.771);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,42.4,34.7), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wifirou();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,78,40), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bubles();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,970,833), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand
	this.instance = new lib.hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,1218,1049), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Symbol42();
	this.instance.parent = this;
	this.instance.setTransform(176.5,62,1,1,0,0,0,176.5,62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(7.9,41.1,336.9,61.8), null);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol41();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,19.9,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-0.5},2).to({x:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,39.9,39.9);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(425.9,145.7,1.576,1.576,0,0,0,153.3,62.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(81).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(-1)).to({scaleX:1.18,scaleY:1.18},10,cjs.Ease.get(-1)).to({regX:153.2,regY:62,scaleX:0.79,scaleY:0.79,x:425.8,y:145.6},10,cjs.Ease.get(1)).to({scaleX:1.18,scaleY:1.18},10,cjs.Ease.get(-1)).to({regX:153.3,regY:62.1,scaleX:1.58,scaleY:1.58,x:425.9,y:145.7},10,cjs.Ease.get(1)).to({scaleX:1.18,scaleY:1.18},10,cjs.Ease.get(-1)).to({regX:153.2,regY:62,scaleX:0.79,scaleY:0.79,x:425.8,y:145.6},10,cjs.Ease.get(1)).to({scaleX:1.18,scaleY:1.18},10,cjs.Ease.get(-1)).to({regX:153.3,regY:62.1,scaleX:1.58,scaleY:1.58,x:425.9,y:145.7},10,cjs.Ease.get(1)).to({alpha:0},3).to({_off:true},1).wait(2));

	// Слой 2
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(63.3,145.6,0.751,0.751,0,0,0,182,62.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(81).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(-1)).to({regX:181.9,scaleX:1.07,scaleY:1.07},10,cjs.Ease.get(-1)).to({regX:182,regY:62,scaleX:1.39,scaleY:1.39,y:145.5},10,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07,x:63.4,y:145.6},10,cjs.Ease.get(-1)).to({regY:62.1,scaleX:0.75,scaleY:0.75,x:63.3},10,cjs.Ease.get(1)).to({regX:181.9,scaleX:1.07,scaleY:1.07},10,cjs.Ease.get(-1)).to({regX:182,regY:62,scaleX:1.39,scaleY:1.39,y:145.5},10,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07,x:63.4,y:145.6},10,cjs.Ease.get(-1)).to({regY:62.1,scaleX:0.75,scaleY:0.75,x:63.3},10,cjs.Ease.get(1)).to({alpha:0},3).to({_off:true},1).wait(2));

	// Layer 1
	this.instance_2 = new lib.Символ1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-4.4,145.4,0.712,0.712,0,0,0,176.4,62);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:176.3,scaleX:1.03,scaleY:1.03,x:-4.5,y:145.5},9,cjs.Ease.get(-1)).to({regX:176.5,regY:62.1,scaleX:1.39,scaleY:1.39,x:-4.3,y:145.6},10,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05,x:-4.4,y:145.5},10,cjs.Ease.get(-1)).to({regX:176.4,regY:62,scaleX:0.71,scaleY:0.71,y:145.4},10,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05,y:145.5},10,cjs.Ease.get(-1)).to({regX:176.5,regY:62.1,scaleX:1.39,scaleY:1.39,x:-4.3,y:145.6},10,cjs.Ease.get(1)).to({scaleX:1.08,scaleY:1.08,y:145.5},9,cjs.Ease.get(-1)).to({regX:176.4,regY:62,scaleX:0.71,scaleY:0.71,x:-4.4,y:145.4},11,cjs.Ease.get(1)).to({alpha:0},5).to({_off:true},1).wait(82).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(-1)).wait(1));

	// Layer 2
	this.instance_3 = new lib.Символ2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(442.5,145.4,1.36,1.36,0,0,0,251.2,62);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:251.3,scaleX:1.07,scaleY:1.07,x:442.6,y:145.5},9,cjs.Ease.get(-1)).to({regX:251.2,scaleX:0.75,scaleY:0.75,x:442.5,y:145.4},10,cjs.Ease.get(1)).to({scaleX:1.06,scaleY:1.06,y:145.5},10,cjs.Ease.get(-1)).to({scaleX:1.36,scaleY:1.36,y:145.4},10,cjs.Ease.get(1)).to({regX:251.3,scaleX:1.06,scaleY:1.06,x:442.6,y:145.5},10,cjs.Ease.get(-1)).to({regX:251.2,scaleX:0.75,scaleY:0.75,x:442.5,y:145.4},10,cjs.Ease.get(1)).to({regY:62.1,scaleX:1.02,scaleY:1.02,y:145.5},9,cjs.Ease.get(-1)).to({regY:62,scaleX:1.36,scaleY:1.36,y:145.4},11,cjs.Ease.get(1)).to({alpha:0},5).to({_off:true},1).wait(82).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(-1)).wait(1));

	// Слой 4
	this.instance_4 = new lib.Символ5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(261.2,154.2,1.178,0.829,0,12.9,0,762.8,114.7);
	this.instance_4.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(172));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-658.9,61.5,1840.9,185.2);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(20,20);

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(20,20);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(20,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},2).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.9,39.9);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol38();
	this.instance.parent = this;
	this.instance.setTransform(541,391.2,1,1,0,0,0,541,391.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},7).to({alpha:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.6,-34.1,1201.5,850.9);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.6)").s().p("EhdeBAvMAAAiBdMC69AAAMAAACBdg");
	this.shape.setTransform(524.7,410.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.instance = new lib.Symbol37();
	this.instance.parent = this;
	this.instance.setTransform(522.4,413.9,1,1,0,0,0,541,391.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(561.5,421.5,1,1,0,0,0,561.5,421.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(-78.3,-11.4,1201.5,854.5), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol35();
	this.instance.parent = this;
	this.instance.setTransform(561.5,421.5,1,1,0,0,0,561.5,421.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:484},29).to({x:561.5},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.3,-11.4,1201.5,854.5);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol27();
	this.instance.parent = this;
	this.instance.setTransform(14,24.5,1,1,0,0,0,14,24.5);

	this.instance_1 = new lib.Layer13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-16,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},29).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleY:0.59,y:24.6},2,cjs.Ease.get(1)).to({_off:true},1).wait(5).to({_off:false},0).to({scaleY:1,y:24.5},2,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28,49);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol26();
	this.instance.parent = this;
	this.instance.setTransform(93,53.5,1,1,0,0,0,14,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(82,82,1,1,0,0,0,82,82);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,164,164), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(175,45.5,1,1,0,0,0,175,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06,x:175.1,y:45.6},4).to({scaleX:1,scaleY:1,x:175,y:45.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350,96);


(lib.Symbol17copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.949)").s().p("AhhAuIAAhcIDDAAIAABcg");
	this.shape.setTransform(5.2,63.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(45.1,63.2,1,1,0,0,0,35,27.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17copy2, new cjs.Rectangle(-4.6,36.1,84.6,54.2), null);


(lib.Symbol17copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.949)").s().p("AhhAuIAAhcIDDAAIAABcg");
	this.shape.setTransform(1.5,63.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(47.7,63.2,1,1,0,0,0,34.7,27.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17copy, new cjs.Rectangle(-8.3,36.1,90.8,54.2), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.949)").s().p("AhhAuIAAhcIDDAAIAABcg");
	this.shape.setTransform(5.2,63.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.Symbol18copy();
	this.instance.parent = this;
	this.instance.setTransform(45.2,54.5,1,1,0,0,0,45.7,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-4.6,36.1,75.3,54.2), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wifirou.png
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(224.4,750.8,1,1,0,0,0,39,20);

	this.instance_1 = new lib.Symbol17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(220.2,752,0.122,0.866,0,0,0,33.2,63.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({regY:20.1,scaleX:0.16,y:750.9,alpha:0},5).to({_off:true},1).wait(30).to({_off:false},0).to({regY:20,scaleX:1,y:750.8,alpha:1},5).wait(225));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).to({regX:33,scaleX:0.87,x:220.1,alpha:1},4).wait(21).to({regX:33.2,scaleX:0.12,x:220.2,alpha:0},4).to({_off:true},1).wait(230));

	// wifi.png
	this.instance_2 = new lib.Symbol8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(966.2,231.4,1,1,0,0,0,21.2,17.4);

	this.instance_3 = new lib.Symbol17();
	this.instance_3.parent = this;
	this.instance_3.setTransform(962.5,231.7,0.122,0.662,0,0,0,33.3,63.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({scaleX:0.34,alpha:0},5).to({_off:true,regX:33.3,regY:63.5,scaleX:0.12,scaleY:0.66,x:962.5,y:231.7},1).wait(30).to({_off:false,regX:21.2,regY:17.4,scaleX:0.34,scaleY:1,x:966.2,y:231.4},0).to({scaleX:1,alpha:1},5).wait(212));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(37).to({_off:false},1).to({regX:33.1,scaleX:0.66,alpha:1},4).wait(21).to({regX:33.3,scaleX:0.12,alpha:0},4).to({_off:true},1).wait(217));

	// stirka.png
	this.instance_4 = new lib.Symbol9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(795,462.4,1,1,0,0,0,24,33);

	this.instance_5 = new lib.Symbol17copy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(791.6,465.6,0.1,0.886,0,0,0,38,63.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(41).to({scaleX:0.21,x:795.1,alpha:0},5).to({_off:true,regX:38,regY:63.4,scaleX:0.1,scaleY:0.89,x:791.6,y:465.6},1).wait(30).to({_off:false,regX:24,regY:33,scaleX:0.21,scaleY:1,x:795.1,y:462.4},0).to({scaleX:1,x:795,alpha:1},5).wait(203));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(46).to({_off:false},1).to({regX:38.1,regY:63.3,scaleX:0.89,y:465.5,alpha:1},4).wait(21).to({regX:38,regY:63.4,scaleX:0.1,y:465.6,alpha:0},4).to({_off:true},1).wait(208));

	// smartphone.png
	this.instance_6 = new lib.Symbol10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(120.5,601.5,1,1,0,0,0,19.5,32.5);

	this.instance_7 = new lib.Symbol17copy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(116.2,601.5,0.1,0.886,0,0,0,38,63.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(26).to({scaleX:0.33,x:120.6,alpha:0},5).to({_off:true},1).wait(30).to({_off:false},0).to({scaleX:1,x:120.5,alpha:1},5).wait(218));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(32).to({_off:false},0).to({regX:38.1,regY:63.3,scaleX:0.89,x:116.3,y:601.4,alpha:1},4).wait(21).to({regX:38,regY:63.4,scaleX:0.1,x:116.2,y:601.5,alpha:0},4).to({_off:true},1).wait(223));

	// plita.png copy
	this.instance_8 = new lib.Symbol11();
	this.instance_8.parent = this;
	this.instance_8.setTransform(630.5,695.7,1,1,0,0,0,25,34.5);

	this.instance_9 = new lib.Symbol17();
	this.instance_9.parent = this;
	this.instance_9.setTransform(624,696.2,0.22,1.035,0,0,0,33.1,63.4);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(61).to({scaleX:0.31,x:630.6,alpha:0},5).to({_off:true},1).wait(30).to({_off:false},0).to({scaleX:1,x:630.5,alpha:1},5).wait(183));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(67).to({_off:false},0).to({regX:33,scaleX:1.03,x:623.9,alpha:1},4).wait(21).to({regX:33.1,scaleX:0.22,x:624,alpha:0},4).to({_off:true},1).wait(188));

	// plita.png
	this.instance_10 = new lib.Symbol11();
	this.instance_10.parent = this;
	this.instance_10.setTransform(223,261.9,1,1,0,0,0,25,34.5);

	this.instance_11 = new lib.Symbol17();
	this.instance_11.parent = this;
	this.instance_11.setTransform(216.5,262.5,0.22,1.035,0,0,0,33.1,63.4);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(91).to({scaleX:0.31,x:223.1,alpha:0},5).to({_off:true},1).wait(30).to({_off:false},0).to({scaleX:1,x:223,alpha:1},5).wait(153));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(97).to({_off:false},0).to({regX:33,scaleX:1.03,x:216.4,alpha:1},4).wait(21).to({regX:33.1,scaleX:0.22,x:216.5,alpha:0},4).to({_off:true},1).wait(158));

	// nout.png
	this.instance_12 = new lib.Symbol12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(479.4,110.5,1,1,0,0,0,32,26.5);

	this.instance_13 = new lib.Symbol17copy();
	this.instance_13.parent = this;
	this.instance_13.setTransform(477.9,110,0.1,0.886,0,0,0,38,63.4);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(121).to({scaleX:0.2,x:479.5,alpha:0},5).to({_off:true},1).wait(30).to({_off:false},0).to({scaleX:1,x:479.4,alpha:1},5).wait(123));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(127).to({_off:false},0).to({regX:38.1,regY:63.3,scaleX:0.89,alpha:1},4).wait(21).to({regX:38,regY:63.4,scaleX:0.1,alpha:0},4).to({_off:true},1).wait(128));

	// mikrovoln.png
	this.instance_14 = new lib.Symbol13();
	this.instance_14.parent = this;
	this.instance_14.setTransform(144,434.4,1,1,0,0,0,35,23);

	this.instance_15 = new lib.Symbol17copy2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(142.5,437,0.096,0.778,0,0,0,39.2,64.2);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(51).to({scaleX:0.14,x:144.1,alpha:0},5).to({_off:true,regX:39.2,regY:64.2,scaleX:0.1,scaleY:0.78,x:142.5,y:437},1).wait(30).to({_off:false,regX:35,regY:23,scaleX:0.14,scaleY:1,x:144.1,y:434.4},0).to({scaleX:1,x:144,alpha:1},5).wait(193));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(56).to({_off:false},1).to({scaleX:0.78,x:142.4,alpha:1},4).wait(21).to({scaleX:0.1,x:142.5,alpha:0},4).to({_off:true},1).wait(198));

	// light.png
	this.instance_16 = new lib.Symbol14();
	this.instance_16.parent = this;
	this.instance_16.setTransform(273,89.6,1,1,0,0,0,15,23);

	this.instance_17 = new lib.Symbol17copy2();
	this.instance_17.parent = this;
	this.instance_17.setTransform(271.2,88.5,0.073,0.591,0,0,0,39.1,64.3);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(157).to({scaleX:0.43,x:273.1,alpha:0},5).to({_off:true},1).wait(30).to({_off:false},0).to({scaleX:1,x:273,alpha:1},5).wait(87));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(163).to({_off:false},0).to({regX:39.4,regY:64.2,scaleX:0.59,alpha:1},4).wait(21).to({regX:39.1,regY:64.3,scaleX:0.07,alpha:0},4).to({_off:true},1).wait(92));

	// gamepad.png
	this.instance_18 = new lib.Symbol15();
	this.instance_18.parent = this;
	this.instance_18.setTransform(884.5,645,1,1,0,0,0,30.5,19);

	this.instance_19 = new lib.Symbol17();
	this.instance_19.parent = this;
	this.instance_19.setTransform(881.2,646.6,0.163,0.977,0,0,0,33.1,63.5);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(206).to({scaleX:0.21,alpha:0},5).to({_off:true,regX:33.1,regY:63.5,scaleX:0.16,scaleY:0.98,x:881.2,y:646.6},1).wait(30).to({_off:false,regX:30.5,regY:19,scaleX:0.21,scaleY:1,x:884.5,y:645},0).to({scaleX:1,alpha:1},5).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(211).to({_off:false},1).to({scaleX:0.98,x:881,alpha:1},4).wait(21).to({scaleX:0.16,x:881.2,alpha:0},4).to({_off:true},1).wait(43));

	// cofii.png copy
	this.instance_20 = new lib.Symbol16();
	this.instance_20.parent = this;
	this.instance_20.setTransform(24.7,230.4,0.799,0.799,0,0,0,32.5,29);

	this.instance_21 = new lib.Symbol17copy2();
	this.instance_21.parent = this;
	this.instance_21.setTransform(24.6,231.9,0.089,0.722,0,0,0,39.4,64.3);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(243).to({regX:32.7,scaleX:0.16,alpha:0},5).to({_off:true},1).wait(30).to({_off:false},0).to({regX:32.5,scaleX:0.8,alpha:1},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(249).to({_off:false},0).to({regX:39.3,scaleX:0.72,alpha:1},4).wait(21).to({regX:39.4,scaleX:0.09,alpha:0},4).to({_off:true},1).wait(6));

	// cofii.png
	this.instance_22 = new lib.Symbol16();
	this.instance_22.parent = this;
	this.instance_22.setTransform(703.7,205.4,1,1,0,0,0,32.5,29);

	this.instance_23 = new lib.Symbol17copy2();
	this.instance_23.parent = this;
	this.instance_23.setTransform(703.7,207.3,0.111,0.903,0,0,0,39.1,64.3);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(228).to({scaleX:0.2,alpha:0},5).to({_off:true},1).wait(30).to({_off:false},0).to({scaleX:1,alpha:1},5).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(234).to({_off:false},0).to({regX:39.4,regY:64.2,scaleX:0.9,y:207.2,alpha:1},4).wait(21).to({regX:39.1,regY:64.3,scaleX:0.11,y:207.3,alpha:0},4).to({_off:true},1).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,66.6,988.7,704.2);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ring();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Vector Smart Object.png
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(479,466.5,1,1,0,0,0,485,416.5);
	this.instance_1.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-6,0,1028,928), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol24();
	this.instance.parent = this;
	this.instance.setTransform(82,82,1,1,0,0,0,82,82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({rotation:2.2,x:82.1,y:82.1},5).to({rotation:0,x:82,y:82},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164,164);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(514.7,401,1,1,0,0,0,493.7,383);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(517,464,1,1,0,0,0,511,464);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,1028,928), null);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol28();
	this.instance.parent = this;
	this.instance.setTransform(82,82,1,1,0,0,0,82,82);

	this.instance_1 = new lib.Symbol40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.9,32.9,1,1,0,0,0,19.9,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},79).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},64).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({scaleX:1.06,scaleY:1.06,x:82.1,y:82.1},2).to({regX:82.2,regY:82.2,scaleX:0.32,scaleY:0.32,x:33.9,y:35.2},5).to({_off:true},1).wait(65).to({_off:false},0).to({regX:82,regY:82,scaleX:1.06,scaleY:1.06,x:82.1,y:82.1},5).to({scaleX:1,scaleY:1,x:82,y:82},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164,164);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuRUjMAAAgpFIckAAMAAAApFg");
	mask.setTransform(81.4,117.5);

	// Layer 1
	this.instance = new lib.Symbol39();
	this.instance.parent = this;
	this.instance.setTransform(82,82,1,1,0,0,0,82,82);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logotxt.png
	this.instance_1 = new lib.logotxt();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4,186);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,164,228), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(589,376,1,1,0,0,0,82,82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.instance_1 = new lib.Iphone();
	this.instance_1.parent = this;
	this.instance_1.setTransform(486,224);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 2
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(599.8,385.7,1,1,0,0,0,514,464);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(583.4,574.2,1,1,0,0,0,609,524.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-25.6,-78.3,1218,1177), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Symbol43();
	this.instance.parent = this;
	this.instance.setTransform(461.6,48.4,0.709,0.709,0,0,0,176.5,62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// button
	this.instance_1 = new lib.Symbol22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(528.5,701,1,1,0,0,0,175,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hand
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(548.6,527.8,1,1,0,0,0,609,524.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// back
	this.instance_3 = new lib.Symbol34();
	this.instance_3.parent = this;
	this.instance_3.setTransform(553.5,392.5,1,1,0,0,0,561.5,421.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(381.5,309,1304.9,1177);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1485772357981", id:"back"},
		{src:"images/bubles.png?1485772357981", id:"bubles"},
		{src:"images/Button.png?1485772357981", id:"Button"},
		{src:"images/cofii.png?1485772357981", id:"cofii"},
		{src:"images/gamepad.png?1485772357981", id:"gamepad"},
		{src:"images/hand.png?1485772357981", id:"hand"},
		{src:"images/Iphone.png?1485772357981", id:"Iphone"},
		{src:"images/knopka.png?1485772357981", id:"knopka"},
		{src:"images/Layer13.png?1485772357981", id:"Layer13"},
		{src:"images/Layer14.png?1485772357981", id:"Layer14"},
		{src:"images/Layer5.png?1485772357981", id:"Layer5"},
		{src:"images/light.png?1485772357981", id:"light"},
		{src:"images/logotxt.png?1485772357981", id:"logotxt"},
		{src:"images/mikrovoln.png?1485772357981", id:"mikrovoln"},
		{src:"images/nout.png?1485772357981", id:"nout"},
		{src:"images/plita.png?1485772357981", id:"plita"},
		{src:"images/ring.png?1485772357981", id:"ring"},
		{src:"images/smartphone.png?1485772357981", id:"smartphone"},
		{src:"images/stirka.png?1485772357981", id:"stirka"},
		{src:"images/wifi.png?1485772357981", id:"wifi"},
		{src:"images/wifirou.png?1485772357981", id:"wifirou"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;