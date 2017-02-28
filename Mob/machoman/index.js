(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.afro = function() {
	this.initialize(img.afro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,18);


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.Button = function() {
	this.initialize(img.Button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,465,106);


(lib.kadr1txt = function() {
	this.initialize(img.kadr1txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,855,40);


(lib.kadr2txt = function() {
	this.initialize(img.kadr2txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,791,41);


(lib.krug1 = function() {
	this.initialize(img.krug1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,101);


(lib.krug2 = function() {
	this.initialize(img.krug2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,101);


(lib.krug3 = function() {
	this.initialize(img.krug3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,101);


(lib.krug4 = function() {
	this.initialize(img.krug4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.krug5 = function() {
	this.initialize(img.krug5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,102);


(lib.krug6 = function() {
	this.initialize(img.krug6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,116);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,127);


(lib.macho = function() {
	this.initialize(img.macho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,334);


(lib.moment = function() {
	this.initialize(img.moment);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,38);


(lib.natura2 = function() {
	this.initialize(img.natura2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,16);


(lib.nepobochno = function() {
	this.initialize(img.nepobochno);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,38);


(lib.para = function() {
	this.initialize(img.para);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,533);


(lib.para2 = function() {
	this.initialize(img.para2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,311,545);


(lib.podho99 = function() {
	this.initialize(img.podho99);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,38);


(lib.prosto = function() {
	this.initialize(img.prosto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,37);


(lib.S50 = function() {
	this.initialize(img.S50);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,95);// helper functions:

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


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kadr2txt();
	this.instance.parent = this;
	this.instance.setTransform(-395.5,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-395.5,-20.5,791,41);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kadr2txt();
	this.instance.parent = this;
	this.instance.setTransform(-395.5,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-395.5,-20.5,791,41);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.para2();
	this.instance.parent = this;
	this.instance.setTransform(-155.5,-272.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.5,-272.5,311,545);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],0,0,0,0,0,23.9).ss(15.3,1,1).p("ACfAAQAABCgvAuQguAvhCAAQhBAAgvgvQguguAAhCQAAhBAugvQAvguBBAAQBCAAAuAuQAvAvAABBg");
	this.shape.setTransform(15.9,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],0,0.1,0,0,0.1,45.2).ss(19.2,1,1).p("AldAAQAAiRBnhmQBmhmCQAAQCRAABmBmQBnBmAACRQAACQhnBnQhmBniRAAQiQAAhmhnQhnhnAAiQg");
	this.shape_1.setTransform(15.9,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],0,0.1,0,0,0.1,66.4).ss(23.2,1,1).p("AobAAQAAjgCeieQCeieDfAAQDgAACeCeQCeCeAADgQAADfieCeQieCgjgAAQjfAAieigQieieAAjfg");
	this.shape_2.setTransform(15.8,16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],0,0.1,0,0,0.1,87.7).ss(27.1,1,1).p("ArZAAQAAkvDVjWQDWjVEuAAQEvAADWDVQDVDWAAEvQAAEujVDVQjWDYkvAAQkuAAjWjYQjVjVAAkug");
	this.shape_3.setTransform(15.8,16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],0,0.2,0,0,0.2,108.9).ss(31,1,1).p("AuYAAQAAl+ENkOQEOkNF9AAQF+AAENENQEOEOAAF+QAAF9kOENQkNEQl+AAQl9AAkOkQQkNkNAAl9g");
	this.shape_4.setTransform(15.7,16.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],0,0.2,0,0,0.2,130.2).ss(34.9,1,1).p("AxWgBQAAnNFFlFQFFlFHMAAQHNAAFFFFQFFFFAAHNQAAHNlFFEQlFFJnNAAQnMAAlFlJQlFlEAAnNg");
	this.shape_5.setTransform(15.7,16.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],0,0.2,0,0,0.2,151.4).ss(38.8,1,1).p("A0UgBQAAocF8l9QF9l8IbAAQIcAAF9F8QF8F9AAIcQAAIbl8F9Ql9GAocAAQobAAl9mAQl8l9AAobg");
	this.shape_6.setTransform(15.6,16.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],0,0.2,0,0,0.2,172.7).ss(42.7,1,1).p("A3TgCQAAprG0m0QG1m0JqAAQJrAAG0G0QG1G0AAJrQAAJrm1G0Qm0G5prAAQpqAAm1m5Qm0m0AAprg");
	this.shape_7.setTransform(15.6,16.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],0,0.3,0,0,0.3,193.9).ss(46.6,1,1).p("A6RgCQAAq6HsnsQHsnsK5AAQK7AAHrHsQHsHsAAK6QAAK6nsHsQnrHxq7AAQq5AAnsnxQnsnsAAq6g");
	this.shape_8.setTransform(15.5,16.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],0,0.3,0,0,0.3,215.2).ss(50.6,1,1).p("A9QgCQAAsJIkokQIkokMIAAQMKAAIjIkQIkIkAAMJQAAMJokIjQojIqsKAAQsIAAokoqQokojAAsJg");
	this.shape_9.setTransform(15.5,16.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],0,0.3,0,0,0.3,236.4).ss(54.5,1,1).p("EggOgACQAAtZJbpbQJcpbNXAAQNYAAJbJbQJcJbAANZQAANXpcJcQpbJhtYAAQtXAApcphQpbpcAAtXg");
	this.shape_10.setTransform(15.4,16.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],0,0.3,0,0,0.3,257.7).ss(58.4,1,1).p("EgjMgADQAAunKTqTQKTqTOmAAQOnAAKTKTQKTKTAAOnQAAOnqTKTQqTKaunAAQumAAqTqaQqTqTAAung");
	this.shape_11.setTransform(15.4,16.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],0,0.4,0,0,0.4,279).ss(62.3,1,1).p("EgmLgADQAAv2LLrLQLLrLP1AAQP2AALLLLQLLLLAAP2QAAP1rLLLQrLLTv2AAQv1AArLrTQrLrLAAv1g");
	this.shape_12.setTransform(15.3,16.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],0,0.4,0,0,0.4,300.2).ss(66.2,1,1).p("EgpJgADQAAxGMCsCQMDsCREAAQRFAAMDMCQMCMCAARGQAAREsCMDQsDMKxFAAQxEAAsDsKQsCsDAAxEg");
	this.shape_13.setTransform(15.3,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],0,0.4,0,0,0.4,321.4).ss(70.1,1,1).p("EgsHgAEQAAyUM6s6QM6s6STAAQSUAAM6M6QM6M6AASUQAASUs6M6Qs6NDyUAAQyTAAs6tDQs6s6AAyUg");
	this.shape_14.setTransform(15.2,16.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],0,0.5,0,0,0.5,342.7).ss(74.1,1,1).p("EgvGgAEQAAzjNytyQNytyTiAAQTjAANyNyQNyNyAATjQAATjtyNyQtyN7zjAAQziAAtyt7QtytyAAzjg");
	this.shape_15.setTransform(15.2,16.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],0,0.5,0,0,0.5,363.9).ss(78,1,1).p("EgyEgAEQAA0yOpuqQOquqUxAAQUyAAOqOqQOpOqAAUyQAAUyupOpQuqO00yAAQ0xAAuqu0QupupAA0yg");
	this.shape_16.setTransform(15.1,16.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],0,0.5,0,0,0.5,385.2).ss(81.9,1,1).p("Eg1CgAFQAA2BPgvhQPhvhWBAAQWBAAPhPhQPhPhAAWBQAAWBvhPhQvhPs2BAAQ2BAAvhvsQvgvhAA2Bg");
	this.shape_17.setTransform(15.1,16.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],0,0.6,0,0,0.6,406.5).ss(85.8,1,1).p("Eg4BgAFQAA3QQZwZQQZwZXPAAQXQAAQZQZQQZQZAAXQQAAXQwZQZQwZQk3QAAQ3PAAwZwkQwZwZAA3Qg");
	this.shape_18.setTransform(15,16.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],0,0.6,0,0,0.6,427.7).ss(89.7,1,1).p("Eg6/gAGQAA4fRQxQQRQxRYfAAQYfAARRRRQRQRQAAYfQAAYfxQRRQxRRd4fAAQ4fAAxQxdQxQxRAA4fg");
	this.shape_19.setTransform(15,16.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],-0.1,0.6,0,-0.1,0.6,448.9).ss(93.6,1,1).p("Eg9+gAFQAA5vSIyIQSIyIZuAAQZuAASJSIQSISIAAZvQAAZtyISIQyJSV5uAAQ5uAAyIyVQyIyIAA5tg");
	this.shape_20.setTransform(15,16.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],-0.1,0.6,0,-0.1,0.6,470.2).ss(97.5,1,1).p("EhA8gAGQAA6+S/y/QTAzAa9AAQa9AATATAQTAS/AAa+QAAa9zATAQzATN69AAQ69AAzAzNQy/zAAA69g");
	this.shape_21.setTransform(14.9,16.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],0,0.7,0,0,0.7,491.5).ss(101.5,1,1).p("EhD6gAGQAA8NT3z3QT3z4cMAAQcNAAT3T4QT3T3AAcNQAAcMz3T3Qz3UG8NAAQ8MAAz30GQz3z3AA8Mg");
	this.shape_22.setTransform(14.8,16.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],-0.1,0.7,0,-0.1,0.7,512.7).ss(105.4,1,1).p("EhG5gAGQAA9cUv0vQUv0vdbAAQdcAAUvUvQUvUvAAdcQAAda0vUwQ0vU99cAAQ9bAA0v09Q0v0wAA9ag");
	this.shape_23.setTransform(14.8,16.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],-0.1,0.7,0,-0.1,0.7,534).ss(109.3,1,1).p("EhJ3gAHQAA+rVm1mQVn1neqAAQerAAVmVnQVnVmAAerQAAeq1nVnQ1mV2+rAAQ+qAA1n12Q1m1nAA+qg");
	this.shape_24.setTransform(14.8,16.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],-0.1,0.7,0,-0.1,0.7,555.2).ss(113.2,1,1).p("EhM2gAHQAA/6We2eQWf2ff5AAQf6AAWeWfQWfWeAAf6QAAf52fWeQ2eWv/6AAQ/5AA2f2vQ2e2eAA/5g");
	this.shape_25.setTransform(14.7,16.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],-0.1,0.7,0,-0.1,0.7,576.5).ss(117.1,1,1).p("EhP0gAHUAAAghJAXWgXWUAXWgXWAhIAAAUAhJAAAAXWAXWUAXWAXWAAAAhJUAAAAhIgXWAXWUgXWAXmghJAAAUghIAAAgXWgXmUgXWgXWAAAghIg");
	this.shape_26.setTransform(14.7,16.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],-0.1,0.8,0,-0.1,0.8,597.7).ss(121,1,1).p("EhSygAIUAAAgiYAYNgYNUAYOgYOAiXAAAUAiYAAAAYOAYOUAYNAYNAAAAiYUAAAAiXgYNAYOUgYOAYfgiYAAAUgiXAAAgYOgYfUgYNgYOAAAgiXg");
	this.shape_27.setTransform(14.6,16.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],-0.1,0.8,0,-0.1,0.8,619).ss(125,1,1).p("EhVxgAIUAAAgjnAZFgZFUAZGgZGAjmAAAUAjnAAAAZFAZGUAZGAZFAAAAjnUAAAAjmgZGAZFUgZFAZYgjnAAAUgjmAAAgZGgZYUgZFgZFAAAgjmg");
	this.shape_28.setTransform(14.6,16.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],-0.1,0.8,0,-0.1,0.8,640.2).ss(128.9,1,1).p("EhYvgAIUAAAgk2AZ9gZ9UAZ9gZ9Ak1AAAUAk2AAAAZ9AZ9UAZ9AZ9AAAAk2UAAAAk1gZ9AZ9UgZ9AaPgk2AAAUgk1AAAgZ9gaPUgZ9gZ9AAAgk1g");
	this.shape_29.setTransform(14.5,16.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],-0.1,0.8,0,-0.1,0.8,661.5).ss(132.8,1,1).p("EhbtgAJUAAAgmFAa0ga0UAa1ga1AmEAAAUAmEAAAAa1Aa1UAa1Aa0AAAAmFUAAAAmEga1Aa1Uga1AbIgmEAAAUgmEAAAga1gbIUga0ga1AAAgmEg");
	this.shape_30.setTransform(14.5,16.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],-0.1,0.9,0,-0.1,0.9,682.7).ss(136.7,1,1).p("EhesgAJUAAAgnUAbsgbsUAbtgbtAnTAAAUAnTAAAAbtAbtUAbtAbsAAAAnUUAAAAnTgbtAbtUgbtAcAgnTAAAUgnTAAAgbtgcAUgbsgbtAAAgnTg");
	this.shape_31.setTransform(14.4,17);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],-0.1,0.9,0,-0.1,0.9,704).ss(140.6,1,1).p("EhhqgAJUAAAgojAckgckUAckgckAoiAAAUAojAAAAckAckUAckAckAAAAojUAAAAoigckAckUgckAc4gojAAAUgoiAAAgckgc4UgckgckAAAgoig");
	this.shape_32.setTransform(14.4,17);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],-0.1,1,0,-0.1,1,725.2).ss(144.5,1,1).p("EhkpgAKUAAAgpyAdcgdbUAdcgdcApxAAAUApyAAAAdcAdcUAdcAdbAAAApyUAAAApygdcAdcUgdcAdwgpyAAAUgpxAAAgdcgdwUgdcgdcAAAgpyg");
	this.shape_33.setTransform(14.3,17);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],-0.1,1,0,-0.1,1,746.5).ss(148.4,1,1).p("EhnngAKUAAAgrBAeTgeTUAeUgeUArAAAAUArBAAAAeTAeUUAeUAeTAAAArBUAAAArAgeUAeUUgeTAepgrBAAAUgrAAAAgeUgepUgeTgeUAAAgrAg");
	this.shape_34.setTransform(14.3,17.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],-0.1,1,0,-0.1,1,767.7).ss(152.4,1,1).p("EhqlgAKUAAAgsQAfLgfLUAfLgfLAsPAAAUAsQAAAAfLAfLUAfLAfLAAAAsQUAAAAsPgfLAfLUgfLAfhgsQAAAUgsPAAAgfLgfhUgfLgfLAAAgsPg");
	this.shape_35.setTransform(14.2,17.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],-0.1,1,0,-0.1,1,789).ss(156.3,1,1).p("EhtkgALUAAAgtfAgDggCUAgDggDAteAAAUAtfAAAAgDAgDUAgDAgCAAAAtfUAAAAtfggDAgDUggDAgZgtfAAAUgteAAAggDggZUggDggDAAAgtfg");
	this.shape_36.setTransform(14.2,17.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],-0.1,1.1,0,-0.1,1.1,810.2).ss(160.2,1,1).p("EhwigALUAAAguuAg6gg6UAg7gg7AutAAAUAuuAAAAg7Ag7UAg6Ag6AAAAuuUAAAAuugg6Ag6Ugg7AhSguuAAAUgutAAAgg7ghSUgg6gg6AAAguug");
	this.shape_37.setTransform(14.1,17.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],-0.1,1.1,0,-0.1,1.1,831.5).ss(164.1,1,1).p("EhzggALUAAAgv9AhxghyUAhzghyAv8AAAUAv9AAAAhyAhyUAhyAhyAAAAv9UAAAAv8ghyAhzUghyAiJgv9AAAUgv8AAAghzgiJUghxghzAAAgv8g");
	this.shape_38.setTransform(14.1,17.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.502,1],-0.1,1.1,0,-0.1,1.1,852.8).ss(168,1,1).p("EB2ggALUAAAAxLgiqAiqUgiqAjCgxMAAAUgxLAAAgiqgjCUgiqgiqAAAgxLUAAAgxNAiqgipUAiqgiqAxLAAAUAxMAAAAiqAiqUAiqAipAAAAxNg");
	this.shape_39.setTransform(14,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-7.6,47.1,47.2);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.krug4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,100,100), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.krug2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,101,101), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.krug1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,101,101), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.krug5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,113,102), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.prosto();
	this.instance.parent = this;
	this.instance.setTransform(56,123);

	this.instance_1 = new lib.krug6();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,156,160), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.moment();
	this.instance.parent = this;
	this.instance.setTransform(-11,106);

	this.instance_1 = new lib.krug3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-11,0,125,144), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,465,106), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.S50();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,109,95), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.para();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,300,533), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,146,127), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kadr1txt();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,855,40), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.macho();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,252,334), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,1024,768), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(76,58,1,1,0,0,0,76,58);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:70.6},9,cjs.Ease.get(-1)).to({x:64.5},10,cjs.Ease.get(1)).to({x:70.3},10,cjs.Ease.get(-1)).to({x:76},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156,160);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(61.5,50.5,1,1,0,0,0,50.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:67},9,cjs.Ease.get(-1)).to({x:73},10,cjs.Ease.get(1)).to({x:67.3},10,cjs.Ease.get(-1)).to({x:61.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,144);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.podho99();
	this.instance.parent = this;
	this.instance.setTransform(0,111);

	this.instance_1 = new lib.Symbol23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(56.5,51,1,1,0,0,0,56.5,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,113,149), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.natura2();
	this.instance.parent = this;
	this.instance.setTransform(-57,109);

	this.instance_1 = new lib.Symbol24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.5,50.5,1,1,0,0,0,50.5,50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-57,0,220,125), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.afro();
	this.instance.parent = this;
	this.instance.setTransform(-10,96);

	this.instance_1 = new lib.Symbol25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.5,34.4,1,1,0,0,0,50.5,50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-10,-16.1,118,130.1), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nepobochno();
	this.instance.parent = this;
	this.instance.setTransform(-39,107);

	this.instance_1 = new lib.Symbol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50,50,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-39,0,176,145), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(155.5,272.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,311,545), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_85 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(6).call(this.frame_85).wait(6));

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(155.5,272.5,1,1,0,0,0,155.5,272.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:263.5},39).to({x:156.7,y:272.5},40).to({x:-212.5},6).to({x:155.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,311,545);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_85 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(6).call(this.frame_85).wait(6));

	// Layer 1
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(150,266.5,1,1,0,0,0,150,266.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:278.2},39).to({y:266.5},40).to({x:495},6).to({x:150},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,533);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(73,63.5,1,1,0,0,0,73,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,146,127), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(73,63.5,1,1,0,0,0,73,63.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000CC").s().p("AgIIhIAAxBIASAAIAARBg");
	this.shape.setTransform(73.1,72.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIBSIAAijIASAAIAACjg");
	this.shape_1.setTransform(73.1,8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},14).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},13).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.06},14).to({_off:true},1).wait(1).to({_off:false},0).to({scaleX:1},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146,127);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(54.5,47.5,1,1,0,0,0,54.5,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({y:43.9},0).wait(1).to({y:52},0).wait(1).to({x:50,y:47.5},0).wait(1).to({x:57.2},0).wait(1).to({x:50.9,y:43},0).wait(1).to({x:59,y:51.1},0).wait(1).to({x:51.8,y:50.2},0).wait(1).to({x:56.3,y:47.5},0).wait(1).to({x:54.5},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109,95);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(141.4,271.1,1,1,0,0,0,54.5,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(126,167,1,1,0,0,0,126,167);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,252,334), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.parent.para1.gotoAndPlay(80);
		this.parent.para2.gotoAndPlay(80);
		this.parent.krug.gotoAndPlay(1);
	}
	this.frame_196 = function() {
		this.parent.para1.gotoAndPlay(86);
		this.parent.para2.gotoAndPlay(86);
		this.parent.krug.gotoAndPlay(35);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(97).call(this.frame_196).wait(4));

	// Layer 2
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(424.5,-163.5);
	this.instance._off = true;

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(424.5,25.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).to({_off:true,y:25.3},3).wait(91).to({_off:false,y:-163.5},3).to({_off:true},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({_off:false},3).wait(91).to({startPosition:0},0).to({_off:true,y:-163.5},3).wait(4));

	// Layer 1
	this.instance_2 = new lib.Symbol12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(427.5,20,1,1,0,0,0,427.5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(96).to({y:-168.6},3).to({_off:true},1).wait(96).to({_off:false},0).to({y:20},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,855,40);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(232.5,53,1,1,0,0,0,232.5,53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({regY:53.1,scaleX:0.9,scaleY:0.9,y:53.2},3,cjs.Ease.get(-1)).to({regY:53,scaleX:1,scaleY:1,y:53},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,465,106);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol37();
	this.instance.parent = this;
	this.instance.setTransform(512.2,396.2,1,1,0,0,0,15.9,15.9);
	this.instance.alpha = 0.191;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(512,384,1,1,0,0,0,512,384);
	this.instance_1.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1024,768), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol30();
	this.instance.parent = this;
	this.instance.setTransform(56.5,51,1,1,0,0,0,56.5,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:51.1},9,cjs.Ease.get(-1)).to({x:45},10,cjs.Ease.get(1)).to({x:50.8},10,cjs.Ease.get(-1)).to({x:56.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,149);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol29();
	this.instance.parent = this;
	this.instance.setTransform(107.5,50.5,1,1,0,0,0,50.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:102.1},9,cjs.Ease.get(-1)).to({x:96},10,cjs.Ease.get(1)).to({x:101.8},10,cjs.Ease.get(-1)).to({x:107.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,125);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol28();
	this.instance.parent = this;
	this.instance.setTransform(60.5,66.6,1,1,0,0,0,50.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:66},9,cjs.Ease.get(-1)).to({x:72},10,cjs.Ease.get(1)).to({x:66.3},10,cjs.Ease.get(-1)).to({x:60.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118,130.1);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol27();
	this.instance.parent = this;
	this.instance.setTransform(89,50,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:94.5},9,cjs.Ease.get(-1)).to({x:100.5},10,cjs.Ease.get(1)).to({x:94.8},10,cjs.Ease.get(-1)).to({x:89},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176,145);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(6));

	// Symbol 22
	this.instance = new lib.Symbol36();
	this.instance.parent = this;
	this.instance.setTransform(70.1,261.7,0.385,0.385,0,0,0,76,58.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regY:58,scaleX:1,scaleY:1,x:298,y:-7},9).wait(25).to({x:70.3,y:96.5,alpha:0},5).wait(1));

	// Symbol 30
	this.instance_1 = new lib.Symbol35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(80.8,274.1,0.385,0.385,0,0,0,56.6,74.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({regX:56.5,scaleX:1,scaleY:1,x:418.5,y:176.9},9).wait(21).to({x:73.5,alpha:0},5).wait(1));

	// Symbol 29
	this.instance_2 = new lib.Symbol34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(82,269.5,0.385,0.385,0,0,0,110.2,62.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({regX:110,regY:62.5,scaleX:1,scaleY:1,x:330,y:320.6},9).wait(16).to({x:65.5,alpha:0},5).wait(1));

	// Symbol 28
	this.instance_3 = new lib.Symbol33();
	this.instance_3.parent = this;
	this.instance_3.setTransform(79.8,268.5,0.385,0.385,0,0,0,59.1,65.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({regX:59,regY:65,scaleX:1,scaleY:1,x:-168,y:321.9},9).wait(12).to({x:73.5,alpha:0},5).wait(1));

	// Symbol 27
	this.instance_4 = new lib.Symbol32();
	this.instance_4.parent = this;
	this.instance_4.setTransform(78.7,273,0.385,0.385,0,0,0,88,72.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({scaleX:1,scaleY:1,x:-265,y:176},9).wait(8).to({x:68.5,alpha:0},5).wait(1));

	// Symbol 21
	this.instance_5 = new lib.Symbol31();
	this.instance_5.parent = this;
	this.instance_5.setTransform(81.1,273.2,0.385,0.385,0,0,0,62.6,72);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(22).to({_off:false},0).to({regX:62.5,scaleX:1,scaleY:1,x:-166.5,y:25},9).wait(4).to({x:75,y:128.5,alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// krug
	this.krug = new lib.Symbol9();
	this.krug.parent = this;
	this.krug.setTransform(508.3,255,1,1,0,0,0,76,58);

	this.timeline.addTween(cjs.Tween.get(this.krug).wait(1));

	// button
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(513,653,1,1,0,0,0,232.5,53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logo
	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(505.8,192.5,1,1,0,0,0,73,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// macho
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(506.5,442,1,1,0,0,0,126,167);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// para1
	this.para1 = new lib.Symbol16();
	this.para1.parent = this;
	this.para1.setTransform(165.5,508.5,1,1,0,0,0,155.5,272.5);

	this.timeline.addTween(cjs.Tween.get(this.para1).wait(1));

	// para2
	this.para2 = new lib.Symbol15();
	this.para2.parent = this;
	this.para2.setTransform(869,500.5,1,1,0,0,0,150,266.5);

	this.timeline.addTween(cjs.Tween.get(this.para2).wait(1));

	// txt
	this.instance_3 = new lib.Symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(515.5,81.7,1,1,0,0,0,427.5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// back
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(513,384,1,1,0,0,0,512,384);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(513,384,1024,781);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/afro.png?1486972675088", id:"afro"},
		{src:"images/back.jpg?1486972675088", id:"back"},
		{src:"images/Button.png?1486972675088", id:"Button"},
		{src:"images/kadr1txt.png?1486972675088", id:"kadr1txt"},
		{src:"images/kadr2txt.png?1486972675088", id:"kadr2txt"},
		{src:"images/krug1.png?1486972675088", id:"krug1"},
		{src:"images/krug2.png?1486972675088", id:"krug2"},
		{src:"images/krug3.png?1486972675088", id:"krug3"},
		{src:"images/krug4.png?1486972675088", id:"krug4"},
		{src:"images/krug5.png?1486972675088", id:"krug5"},
		{src:"images/krug6.png?1486972675088", id:"krug6"},
		{src:"images/logo.png?1486972675088", id:"logo"},
		{src:"images/macho.png?1486972675088", id:"macho"},
		{src:"images/moment.png?1486972675088", id:"moment"},
		{src:"images/natura2.png?1486972675088", id:"natura2"},
		{src:"images/nepobochno.png?1486972675088", id:"nepobochno"},
		{src:"images/para.png?1486972675088", id:"para"},
		{src:"images/para2.png?1486972675088", id:"para2"},
		{src:"images/podho99.png?1486972675088", id:"podho99"},
		{src:"images/prosto.png?1486972675088", id:"prosto"},
		{src:"images/S50.png?1486972675088", id:"S50"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;