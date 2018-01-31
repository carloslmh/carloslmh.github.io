(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Prototipo_atlas_", frames: [[0,0,640,640],[0,642,655,462]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Copiadetiempopng2 = function() {
	this.spriteSheet = ss["Prototipo_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.mapa = function() {
	this.spriteSheet = ss["Prototipo_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.Símbolo23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgPQAHgFANgFQANgEALAAQAUAAAMANQALANAAAYIAABXIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUADgJAHQgJAHAAAPQAAAMAJAIQAHAIAPgBQASAAANgNQANgPAAgXIAAgMg");
	this.shape.setTransform(163.9,21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKA1IAAhaIgZAAIAAgLIAZAAIAAgjIAFgCIAFgCIAAAnIAkAAIAAALIgkAAIAABYQABAOAEAGQAEAGALAAQAHAAAJgEIAAALQgJAEgJAAQgcAAAAgjg");
	this.shape_1.setTransform(153.4,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzAJIAAhNIAMAAIAABKQAAAbAJANQAJAMAUAAQARAAAMgOQALgOAAgXIAAhLIANAAIAACGIgNAAIAAgZIAAAAQgOAcgdAAQgvAAAAg8g");
	this.shape_2.setTransform(142.2,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfBFIAAiGIAMAAIAAAeIAAAAQAFgQAKgIQAJgJAOAAQAHAAAGACIAAANQgHgEgHAAQgRAAgJARQgLAQAAAdIAABAg");
	this.shape_3.setTransform(131.5,21.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfBFIAAiGIAMAAIAAAeIAAAAQAFgQAKgIQAJgJAOAAQAHAAAGACIAAANQgHgEgIAAQgPAAgKARQgLAQAAAdIAABAg");
	this.shape_4.setTransform(115.2,21.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgPQAHgFANgFQANgEALAAQAUAAAMANQALANAAAYIAABXIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUADgJAHQgJAHAAAPQAAAMAJAIQAHAIAPgBQASAAANgNQANgPAAgXIAAgMg");
	this.shape_5.setTransform(102.9,21.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfA0QgRgTAAgfQAAgfATgVQATgUAdAAQAPAAAPAHIAAANQgPgJgRAAQgXABgOAQQgPARAAAbQAAAaANAQQAOAPAVAAQAUAAAPgKIAAANQgPAJgVAAQgaAAgRgTg");
	this.shape_6.setTransform(90.6,21.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmA+IAAgPQAHAGAKADQAJADAIAAQAeAAAAgZQABgJgIgGQgGgHgPgHQgUgHgHgJQgJgJABgNQAAgQAMgKQANgLASAAQARAAAMAIIAAANQgPgKgQAAQgMAAgJAIQgHAGgBALQABAKAFAGQAFAGAQAHQAVAJAIAIQAIAIAAAOQAAAQgMAKQgMALgVAAQgTAAgNgJg");
	this.shape_7.setTransform(79.4,21.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgzAJIAAhNIAMAAIAABKQAAAbAJANQAJAMAUAAQARAAAMgOQAMgOgBgXIAAhLIANAAIAACGIgNAAIAAgZIAAAAQgOAcgcAAQgwAAAAg8g");
	this.shape_8.setTransform(66.7,22);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag0BeIAAi8IAxAAQAVABANAMQANALAAAUQABARgJAMQgJAMgPAFIAAAAQATACALAMQALAMAAASQAAAYgOAQQgQAPgZgBgAgoBTIAkAAQAVAAAMgLQAMgLAAgUQAAgng1ABIgcAAgAgogIIAbAAQATAAANgLQAMgKAAgTQAAghgnAAIggAAg");
	this.shape_9.setTransform(52.7,19.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0099CC").s().p("AwfC5IAAlyMAg/AAAIAAFyg");
	this.shape_10.setTransform(105.6,18.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006699").s().p("AwfC5IAAlyMAg/AAAIAAFyg");
	this.shape_11.setTransform(105.6,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,211.2,37.1);


(lib.Símbolo22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AALA6IAAhnQgGAFgGAEQgHAEgIACIAAgGIAJgEIAHgFIAHgGIAIgGIACAAIAABzg");
	this.shape.setTransform(68.9,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAkQgGgHAAgKQAAgTAcgFIAYgEQAAgagUAAQgMAAgNALIAAgJQAEgEAJgCQAHgDAGAAQANABAGAHQAHAIAAAPIAAA0IgHAAIAAgQIgBAAQgDAHgIAFQgHAGgIAAQgLgBgIgGgAABAAQgMACgFAEQgFAEgBAJQABAIAFAEQAEAFAIAAQALAAAIgJQAIgJAAgNIAAgHg");
	this.shape_1.setTransform(57.9,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAyQgJgLAAgTQAAgTAKgMQALgMAPAAQASAAAIAPIAAAAIAAg0IAIAAIAAB3IgIAAIAAgOIAAAAQgFAHgHAFQgIAEgIAAQgQAAgJgLgAgSgGQgJAIAAASQAAAQAHAJQAIAKAMAAQANgBAHgIQAIgJAAgMIAAgPQAAgLgHgHQgHgIgMAAQgMAAgIAKg");
	this.shape_2.setTransform(49.3,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAkQgHgHAAgKQAAgTAcgFIAYgEQAAgagUAAQgMAAgNALIAAgJQAFgEAHgCQAIgDAGAAQAMABAIAHQAGAIAAAPIAAA0IgHAAIAAgQIAAAAQgEAHgHAFQgIAGgIAAQgMgBgGgGgAAAAAQgLACgGAEQgEAEAAAJQAAAIAEAEQAFAFAJAAQALAAAHgJQAIgJAAgNIAAgHg");
	this.shape_3.setTransform(40.9,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSApIAAhQIAHAAIAAASIAAAAQADgJAGgFQAFgFAIAAQAFAAADABIAAAIQgEgDgEAAQgKAAgGAKQgGAKAAARIAAAmg");
	this.shape_4.setTransform(34.9,13.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXAkQgGgHAAgKQAAgTAcgFIAYgEQAAgagUAAQgMAAgNALIAAgJQAEgEAJgCQAHgDAGAAQAMABAIAHQAGAIAAAPIAAA0IgHAAIAAgQIAAAAQgFAHgHAFQgHAGgIAAQgLgBgIgGgAAAAAQgLACgGAEQgEAEAAAJQAAAIAEAEQAFAFAJAAQAKAAAIgJQAIgJAAgNIAAgHg");
	this.shape_5.setTransform(27.5,13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfA5IAAhxIAcAAQAQAAAJAIQAKAJAAAPQAAAQgLAJQgKAKgSAAIgQAAIAAAugAgXAEIAQAAQAPAAAIgGQAIgIAAgNQAAgZgdAAIgSAAg");
	this.shape_6.setTransform(20.3,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009999").s().p("AmrBqQgKAAAAgKIAAi/QAAgKAKAAINXAAQAKAAAAAKIAAC/QAAAKgKAAg");
	this.shape_7.setTransform(43.8,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo22, new cjs.Rectangle(0,0,87.6,23.2), null);


(lib.Símbolo21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfBFIAAiGIAMAAIAAAeIAAAAQAFgQAKgIQAJgJANAAQAIAAAGACIAAANQgGgEgJAAQgQAAgJARQgLAQAAAdIAABAg");
	this.shape.setTransform(103.2,20.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgPQAHgFANgFQANgEALAAQAUAAAMANQALANAAAYIAABXIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUADgJAHQgJAHAAAPQAAAMAJAIQAHAHAPAAQASABANgOQANgPAAgXIAAgMg");
	this.shape_1.setTransform(90.9,20.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfA0QgRgTAAgeQAAggATgUQATgVAdAAQAPAAAPAGIAAAOQgPgIgRgBQgXABgOARQgPAQAAAbQAAAaANAQQAOAPAVAAQAUAAAPgKIAAAMQgPAKgVAAQgaAAgRgTg");
	this.shape_2.setTransform(78.6,20.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmA9IAAgOQAHAGAKAEQAKACAGAAQAgABAAgaQAAgJgIgGQgGgHgQgHQgSgHgJgJQgHgJAAgNQAAgQAMgKQANgLARAAQASAAAMAIIAAANQgPgKgQAAQgNAAgHAIQgJAGAAALQAAAKAGAGQAEAGARAIQAVAIAIAIQAIAJAAANQAAAQgMAKQgMALgVAAQgTAAgNgKg");
	this.shape_3.setTransform(67.4,20.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgzAJIAAhNIAMAAIAABKQAAAbAJANQAJAMATAAQASAAAMgOQALgOAAgXIAAhLIANAAIAACGIgNAAIAAgZIAAAAQgOAcgdAAQgvAAAAg8g");
	this.shape_4.setTransform(54.7,21);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag1BeIAAi8IAyAAQAVABAOALQANAMgBAUQAAARgIAMQgJAMgQAFIAAAAQAUACAMAMQALAMgBASQABAYgQAPQgPAQgZgBgAgnBTIAjAAQAUAAAMgLQANgKAAgVQAAgng1ABIgbAAgAgngIIAaAAQATAAAMgLQANgKAAgTQAAghgngBIgfAAg");
	this.shape_5.setTransform(40.7,18.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099CC").s().p("AqFC5IAAlyIULAAIAAFyg");
	this.shape_6.setTransform(64.6,18.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006699").s().p("AqFC5IAAlyIULAAIAAFyg");
	this.shape_7.setTransform(64.6,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129.2,37.1);


(lib.Símbolo20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfBFIAAiGIAMAAIAAAeIABAAQAEgQAKgIQAJgJAOAAQAHAAAGACIAAANQgHgEgHAAQgRAAgJARQgLAQAAAdIAABAg");
	this.shape.setTransform(238.3,31.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmA8QgLgLAAgQQAAgiAvgIIAogGQAAgsghAAQgVAAgVASIAAgOQAHgHANgDQANgFALAAQAUAAAMANQALANAAAZIAABWIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAIAPAAQASAAANgOQANgPAAgXIAAgMg");
	this.shape_1.setTransform(226,31.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2BDIAAgEIBYh2IhSAAIAAgMIBnAAIAAAEIhZB3IBWAAIAAALg");
	this.shape_2.setTransform(213.3,31.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFBeIAAiGIALAAIAACGgAgGhNQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADACAAAFQAAAEgDADQgDAEgEAAQgDAAgDgEg");
	this.shape_3.setTransform(204.3,28.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFBkIAAjHIALAAIAADHg");
	this.shape_4.setTransform(198.7,28.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmA8QgLgLAAgQQAAgiAvgIIAogGQAAgsghAAQgVAAgVASIAAgOQAHgHANgDQANgFALAAQAUAAAMANQALANAAAZIAABWIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAIAPAAQASAAANgOQANgPAAgXIAAgMg");
	this.shape_5.setTransform(189,31.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgzAJIAAhNIAMAAIAABKQAAAbAJANQAJAMATAAQASAAAMgOQALgOAAgXIAAhLIANAAIAACGIgNAAIAAgZIAAAAQgOAcgdAAQgvAAAAg8g");
	this.shape_6.setTransform(175.3,31.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLA1IAAhaIgYAAIAAgLIAYAAIAAgjIAHgCIAEgCIAAAnIAkAAIAAALIgkAAIAABYQAAAOAFAGQAEAGALAAQAIAAAIgEIAAALQgJAEgJAAQgdAAAAgjg");
	this.shape_7.setTransform(164.1,29.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfA0QgRgTAAgfQAAgfATgVQATgUAdAAQAPAAAPAHIAAANQgPgJgRAAQgXAAgOARQgPARAAAaQAAAbANAQQAOAPAVABQAUAAAPgLIAAANQgPAJgVAAQgaAAgRgTg");
	this.shape_8.setTransform(154.2,31.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA+BeIgVg6IhRAAIgWA6IgOAAIBHi8IAMAAIBGC8gAgEg/IggBXIBIAAIgfhWIgDgIIgCgHIAAAAIgEAOg");
	this.shape_9.setTransform(139.7,28.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0099CC").s().p("A8HEuIAApbMA4PAAAIAAJbg");
	this.shape_10.setTransform(180,30.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006699").s().p("A8HEuIAApbMA4PAAAIAAJbg");
	this.shape_11.setTransform(180,30.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,360,60.4);


(lib.Símbolo19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfBFIAAiGIAMAAIAAAeIABAAQAEgQAKgIQAJgJAOAAQAHAAAGACIAAANQgHgEgHAAQgRAAgJARQgLAQAAAdIAABAg");
	this.shape.setTransform(217.6,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmA8QgLgLAAgQQAAgjAvgHIAogGQAAgrghgBQgVABgVARIAAgOQAHgHANgDQANgFALAAQAUAAAMANQALANAAAZIAABXIgMAAIAAgbIAAAAQgHANgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUADgJAHQgJAHAAAPQAAAMAJAIQAHAIAPAAQASAAANgPQANgOAAgXIAAgMg");
	this.shape_1.setTransform(205.3,32.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqBTQgQgSAAggQAAghARgTQASgUAaAAQAeAAANAZIABAAIAAhXIAMAAIAADHIgMAAIAAgYIgBAAQgGANgNAHQgNAIgQAAQgYAAgQgTgAgfgMQgOAQAAAcQAAAcAMAPQANAPATAAQAWAAANgOQANgOAAgVIAAgZQAAgSgMgNQgMgNgUAAQgVAAgNAQg");
	this.shape_2.setTransform(190.8,29.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfBFIAAiGIAMAAIAAAeIABAAQAEgQAKgIQAJgJAOAAQAHAAAGACIAAANQgHgEgHAAQgQAAgKARQgLAQAAAdIAABAg");
	this.shape_3.setTransform(180.8,32.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmA8QgLgLAAgQQAAgjAvgHIAogGQAAgrghgBQgVABgVARIAAgOQAHgHANgDQANgFALAAQAUAAAMANQALANAAAZIAABXIgMAAIAAgbIAAAAQgHANgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUADgJAHQgJAHAAAPQAAAMAJAIQAHAIAPAAQASAAANgPQANgOAAgXIAAgMg");
	this.shape_4.setTransform(168.5,32.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzAJIAAhNIAMAAIAABKQAAAbAJANQAJAMATAAQATAAALgOQAMgOAAgXIAAhLIAMAAIAACGIgMAAIAAgZIgBAAQgOAcgcAAQgwAAAAg8g");
	this.shape_5.setTransform(154.7,32.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwBHQgYgZAAgsQAAgqAZgcQAagdAqAAQAZAAAXAKIAAAPQgZgNgZAAQgjAAgVAYQgWAZAAAlQAAAnAUAXQAVAXAhAAQAaAAATgMIAAg+IgsAAIAAgMIA5AAIAABRQgdARgfAAQgmAAgXgbg");
	this.shape_6.setTransform(138.3,29.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0099CC").s().p("A8HEuIAApbMA4PAAAIAAJbg");
	this.shape_7.setTransform(180,30.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006699").s().p("A8HEuIAApbMA4PAAAIAAJbg");
	this.shape_8.setTransform(180,30.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,360,60.4);


(lib.Símbolo18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmA8QgLgLAAgQQAAgiAvgIIAogGQAAgsghAAQgVAAgVASIAAgOQAHgHANgDQANgFALAAQAUAAAMANQALANAAAZIAABWIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAIAPAAQASAAANgOQANgPAAgXIAAgMg");
	this.shape.setTransform(262.1,31.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLA1IAAhaIgYAAIAAgLIAYAAIAAgjIAHgCIAFgCIAAAnIAjAAIAAALIgjAAIAABYQgBAOAFAGQAEAGALAAQAHAAAJgEIAAALQgKAEgHAAQgeAAAAgjg");
	this.shape_1.setTransform(251.6,29.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzAJIAAhNIAMAAIAABKQAAAbAJANQAJAMATAAQATAAALgOQAMgOAAgXIAAhLIAMAAIAACGIgMAAIAAgZIgBAAQgOAcgdAAQgvAAAAg8g");
	this.shape_2.setTransform(240.3,31.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AApBeIgZg3QgIgRgHgGQgIgFgLgBIgYAAIAABUIgMAAIAAi8IA0AAQAYAAAOAOQAOANAAAXQAAAUgMAOQgLAMgVAFIAAAAQALAFALAWIAcA8gAgqAAIAhAAQAVAAAMgMQANgMAAgTQAAgSgLgKQgMgKgVAAIgjAAg");
	this.shape_3.setTransform(226.2,28.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfBFIAAiGIAMAAIAAAeIAAAAQAFgQAKgIQAJgJANAAQAIAAAGACIAAANQgGgEgJAAQgPAAgKARQgLAQAAAdIAABAg");
	this.shape_4.setTransform(207.3,31.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmA8QgLgLAAgQQAAgiAvgIIAogGQAAgsghAAQgVAAgVASIAAgOQAHgHANgDQANgFALAAQAUAAAMANQALANAAAZIAABWIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAIAPAAQASAAANgOQANgPAAgXIAAgMg");
	this.shape_5.setTransform(195,31.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag2BDIAAgEIBZh2IhSAAIAAgMIBmAAIAAAEIhZB3IBWAAIAAALg");
	this.shape_6.setTransform(182.3,31.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFBeIAAiGIALAAIAACGgAgGhNQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADACAAAFQAAAEgDADQgDAEgEAAQgDAAgDgEg");
	this.shape_7.setTransform(173.3,28.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFBkIAAjHIALAAIAADHg");
	this.shape_8.setTransform(167.7,28.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmA8QgLgLAAgQQAAgiAvgIIAogGQAAgsghAAQgVAAgVASIAAgOQAHgHANgDQANgFALAAQAUAAAMANQALANAAAZIAABWIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAIAPAAQASAAANgOQANgPAAgXIAAgMg");
	this.shape_9.setTransform(158,31.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgzAJIAAhNIAMAAIAABKQAAAbAJANQAJAMATAAQASAAAMgOQAMgOAAgXIAAhLIAMAAIAACGIgMAAIAAgZIgBAAQgOAcgcAAQgwAAAAg8g");
	this.shape_10.setTransform(144.3,31.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKA1IAAhaIgZAAIAAgLIAZAAIAAgjIAFgCIAGgCIAAAnIAjAAIAAALIgjAAIAABYQAAAOAEAGQAEAGALAAQAIAAAIgEIAAALQgKAEgHAAQgdAAAAgjg");
	this.shape_11.setTransform(133.1,29.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfA0QgRgTAAgfQAAgfATgVQATgUAdAAQAPAAAPAHIAAANQgPgJgRAAQgXAAgOARQgPARAAAaQAAAbANAQQAOAPAVABQAUAAAPgLIAAANQgPAJgVAAQgaAAgRgTg");
	this.shape_12.setTransform(123.2,31.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA/BeIgXg6IhQAAIgWA6IgOAAIBHi8IALAAIBHC8gAgEg/IgfBXIBIAAIghhWIgCgIIgCgHIAAAAIgEAOg");
	this.shape_13.setTransform(108.7,28.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0099CC").s().p("A8HEuIAApbMA4PAAAIAAJbg");
	this.shape_14.setTransform(180,30.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006699").s().p("A8HEuIAApbMA4PAAAIAAJbg");
	this.shape_15.setTransform(180,30.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,360,60.4);


(lib.Símbolo17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmA8QgLgLAAgQQAAgjAvgHIAogGQAAgrghAAQgVAAgVARIAAgOQAHgHANgDQANgFALAAQAUAAAMANQALANAAAZIAABXIgMAAIAAgbIAAAAQgHAOgMAHQgNAJgOAAQgTAAgLgLgAABAAQgUADgJAHQgJAHAAAPQAAAMAJAIQAHAIAPAAQASgBANgOQANgOAAgXIAAgMg");
	this.shape.setTransform(241.4,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLA1IAAhaIgYAAIAAgLIAYAAIAAgjIAHgCIAFgCIAAAnIAjAAIAAALIgjAAIAABYQgBAOAFAGQAEAGALAAQAHAAAJgEIAAALQgKAEgHAAQgeAAAAgjg");
	this.shape_1.setTransform(230.9,31.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzAJIAAhNIAMAAIAABKQAAAbAJANQAJAMATAAQATAAALgOQAMgOAAgXIAAhLIAMAAIAACGIgMAAIAAgZIgBAAQgOAcgdAAQgvAAAAg8g");
	this.shape_2.setTransform(219.6,33.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AApBfIgZg4QgIgRgHgGQgIgGgLAAIgYAAIAABVIgMAAIAAi8IA0AAQAYAAAOANQAOANAAAWQAAAVgMAOQgLANgVAEIAAAAQALAFALAWIAcA9gAgqAAIAhAAQAVAAAMgMQANgMAAgTQAAgSgLgKQgMgLgVAAIgjAAg");
	this.shape_3.setTransform(205.5,30.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfBFIAAiGIAMAAIAAAeIAAAAQAFgQAKgIQAJgJANAAQAIAAAGACIAAANQgGgEgJAAQgPAAgKARQgLAQAAAdIAABAg");
	this.shape_4.setTransform(186.6,33.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFBfIAAiGIALAAIAACGgAgGhMQgDgDAAgFQAAgEADgDQADgCADAAQAEAAADACQADADAAAEQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_5.setTransform(178.4,30.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqBTQgQgSAAggQAAghARgTQASgUAaAAQAeAAANAZIABAAIAAhXIAMAAIAADHIgMAAIAAgYIgBAAQgGANgNAHQgNAIgQAAQgYAAgQgTgAgfgMQgOAQAAAcQAAAcAMAPQANAPATAAQAWAAANgOQANgOAAgVIAAgZQAAgSgMgNQgMgNgUAAQgVAAgNAQg");
	this.shape_6.setTransform(167.6,30.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmA8QgLgLAAgQQAAgjAvgHIAogGQAAgrghAAQgVAAgVARIAAgOQAHgHANgDQANgFALAAQAUAAAMANQALANAAAZIAABXIgMAAIAAgbIAAAAQgHAOgMAHQgNAJgOAAQgTAAgLgLgAABAAQgUADgJAHQgJAHAAAPQAAAMAJAIQAHAIAPAAQASgBANgOQANgOAAgXIAAgMg");
	this.shape_7.setTransform(153.6,33.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAoBeIAAhPQAAgvgjAAQgSAAgNAOQgNAOAAAUIAABOIgMAAIAAiGIAMAAIAAAYIABAAQAOgcAfAAQAWAAAMAPQALAPAAAaIAABSgAgog+QAAgNAGgIQAHgIAKAAQAJAAAMAJQAIAIAHAAQAFAAADgFQAFgEAAgKIAJAAQAAAOgGAIQgHAIgLAAQgIAAgKgKQgJgIgHAAQgNAAAAATg");
	this.shape_8.setTransform(140.1,30.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA/BfIgWg8IhRAAIgWA8IgOAAIBHi8IAMAAIBGC8gAgEg/IggBXIBIAAIgfhXIgDgIIgCgGIAAAAIgEAOg");
	this.shape_9.setTransform(124.3,30.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0099CC").s().p("A8HEuIAApbMA4PAAAIAAJbg");
	this.shape_10.setTransform(180,30.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006699").s().p("A8HEuIAApbMA4PAAAIAAJbg");
	this.shape_11.setTransform(180,30.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,360,60.4);


(lib.Símbolo16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfBFIAAiGIAMAAIAAAeIABAAQAEgQAKgIQAJgJAOAAQAHAAAGACIAAANQgHgEgHAAQgRAAgJARQgLAQAAAdIAABAg");
	this.shape.setTransform(241.4,28.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguAzQgRgTAAgfQAAghASgTQASgTAdAAQAcAAARATQARATAAAgQAAAggRATQgRAUgeAAQgcAAgSgUgAgkgqQgOAPAAAcQAAAaAOARQANAPAXAAQAZAAANgPQANgQAAgcQAAgcgNgPQgNgQgYAAQgXABgOAQg");
	this.shape_1.setTransform(228.5,29);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqBTQgQgSAAggQAAghARgTQASgUAaAAQAeAAANAZIABAAIAAhXIAMAAIAADHIgMAAIAAgYIgBAAQgGANgNAHQgNAIgQAAQgYAAgQgTgAgfgMQgOAQAAAcQAAAcAMAPQANAPATAAQAWAAANgOQANgOAAgVIAAgZQAAgSgMgNQgMgNgUAAQgVAAgNAQg");
	this.shape_2.setTransform(212.9,25.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgPQAHgFANgFQANgEALAAQAUAAAMANQALANAAAYIAABXIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUADgJAHQgJAHAAAPQAAAMAJAIQAHAIAPgBQASAAANgNQANgPAAgXIAAgMg");
	this.shape_3.setTransform(198.9,29);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfBFIAAiGIAMAAIAAAeIAAAAQAFgQAKgIQAJgJANAAQAIAAAGACIAAANQgGgEgJAAQgPAAgKARQgLAQAAAdIAABAg");
	this.shape_4.setTransform(188.9,28.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLA1IAAhaIgYAAIAAgLIAYAAIAAgjIAHgCIAEgCIAAAnIAkAAIAAALIgkAAIAABYQAAAOAFAGQAEAGALAAQAIAAAIgEIAAALQgKAEgIAAQgdAAAAgjg");
	this.shape_5.setTransform(179.5,27.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmA+IAAgPQAHAGAKADQAKADAGAAQAgAAAAgZQAAgJgIgGQgGgHgQgHQgSgHgJgJQgHgJAAgNQAAgQAMgLQANgKARAAQASAAAMAIIAAANQgPgKgQAAQgNAAgHAIQgJAGAAALQAAAKAGAGQAEAGARAHQAVAJAIAIQAIAIAAAOQAAAQgMAKQgMALgVAAQgTAAgNgJg");
	this.shape_6.setTransform(170.4,29);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFBeIAAiGIALAAIAACGgAgGhNQgDgDAAgEQAAgEADgDQADgCADgBQAEABADACQADACAAAFQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_7.setTransform(162.3,26.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAoBFIAAhNQAAgxgjAAQgTAAgMAOQgNAPAAAVIAABMIgMAAIAAiGIAMAAIAAAZIABAAQAPgcAeAAQAWAAALAPQAMAOAAAbIAABRg");
	this.shape_8.setTransform(152.4,28.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFBeIAAiGIALAAIAACGgAgGhNQgDgDAAgEQAAgEADgDQADgCADgBQAEABADACQADACAAAFQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_9.setTransform(142.3,26.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABPBFIAAhQQAAgZgIgLQgIgKgSAAQgQAAgLAOQgMANAAAVIAABOIgLAAIAAhRQAAgtgiAAQgRAAgLAOQgLAOAAAVIAABNIgMAAIAAiGIAMAAIAAAXIABAAQAOgaAbAAQAPAAALAIQAKAJADAOQAGgPAMgIQAMgIANAAQAtAAAAA3IAABSg");
	this.shape_10.setTransform(128.5,28.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgqBTQgQgSAAggQAAghARgTQASgUAaAAQAeAAANAZIABAAIAAhXIAMAAIAADHIgMAAIAAgYIgBAAQgGANgNAHQgNAIgQAAQgYAAgQgTgAgfgMQgOAQAAAcQAAAcAMAPQANAPATAAQAWAAANgOQANgOAAgVIAAgZQAAgSgMgNQgMgNgUAAQgVAAgNAQg");
	this.shape_11.setTransform(109.3,25.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA/BeIgXg6IhQAAIgWA6IgOAAIBHi8IALAAIBHC8gAgEg/IgfBWIBIAAIghhVIgCgIIgCgHIAAAAIgEAOg");
	this.shape_12.setTransform(93.7,26.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0099CC").s().p("A3zEgIAAo/MAvnAAAIAAI/g");
	this.shape_13.setTransform(152.4,28.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006699").s().p("A3zEgIAAo/MAvnAAAIAAI/g");
	this.shape_14.setTransform(152.4,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_14},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,304.8,57.6);


(lib.Símbolo14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AifAEIABAAIE+idIAAEzg");
	this.shape.setTransform(60,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099CC").s().p("ApuDQIAAmgITcAAIAAGggACJCiIAAkzIk9CdIgBAAg");
	this.shape_1.setTransform(62.3,20.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006699").s().p("ApuDQIAAmgITcAAIAAGggACJCiIAAkzIk9CdIgBAAg");
	this.shape_2.setTransform(62.3,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124.5,41.7);


(lib.Símbolo13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiZCgICWk/IAAABICdE+g");
	this.shape.setTransform(63,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099CC").s().p("ApuDQIAAmgITcAAIAAGggAiSCRIEzAAIiek9IAAgBg");
	this.shape_1.setTransform(62.3,20.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006699").s().p("ApuDQIAAmgITcAAIAAGggAiSCRIEzAAIiek9IAAgBg");
	this.shape_2.setTransform(62.3,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124.5,41.7);


(lib.Símbolo12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AifAEIABAAIE+idIAAEzg");
	this.shape.setTransform(58,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099CC").s().p("ApuDQIAAmgITcAAIAAGggAB1CiIAAkzIk9CdIgBAAg");
	this.shape_1.setTransform(62.3,20.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006699").s().p("ApuDQIAAmgITcAAIAAGggAB1CiIAAkzIk9CdIgBAAg");
	this.shape_2.setTransform(62.3,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124.5,41.7);


(lib.Símbolo11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiZCgICWk/IAAABICdE+g");
	this.shape.setTransform(63,20.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099CC").s().p("ApuDQIAAmgITcAAIAAGggAiSCeIEzAAIiek+IAAgBg");
	this.shape_1.setTransform(62.3,20.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006699").s().p("ApuDQIAAmgITcAAIAAGggAiSCeIEzAAIiek+IAAgBg");
	this.shape_2.setTransform(62.3,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124.5,41.7);


(lib.Símbolo10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiZCgICWk/IAAABICdE+g");
	this.shape.setTransform(59,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099CC").s().p("ApuDQIAAmgITcAAIAAGggAi6CUIE0AAIiek+IAAgBg");
	this.shape_1.setTransform(62.3,20.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006699").s().p("ApuDQIAAmgITcAAIAAGggAi6CUIE0AAIiek+IAAgBg");
	this.shape_2.setTransform(62.3,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124.5,41.7);


(lib.Símbolo9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AifAEIABAAIE+idIAAEzg");
	this.shape.setTransform(54,20.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099CC").s().p("ApuDQIAAmgITcAAIAAGggABOCYIAAkzIk+CdIgBAAg");
	this.shape_1.setTransform(62.3,20.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006699").s().p("ApuDQIAAmgITcAAIAAGggABOCYIAAkzIk+CdIgBAAg");
	this.shape_2.setTransform(62.3,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124.5,41.7);


(lib.Símbolo8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgOQAHgGANgFQANgEALAAQAUAAAMANQALANAAAZIAABWIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAIAPgBQASAAANgNQANgPAAgXIAAgMg");
	this.shape.setTransform(181,27.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKA1IAAhaIgZAAIAAgLIAZAAIAAgjIAFgCIAGgCIAAAnIAjAAIAAALIgjAAIAABYQAAAOAEAGQAEAGALAAQAIAAAIgEIAAALQgJAEgJAAQgcAAAAgjg");
	this.shape_1.setTransform(170.5,25.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzAJIAAhNIAMAAIAABKQAAAbAJANQAJAMAUAAQARAAAMgOQALgOAAgXIAAhLIANAAIAACGIgNAAIAAgZIAAAAQgOAcgdAAQgvAAAAg8g");
	this.shape_2.setTransform(159.3,27.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfBFIAAiGIAMAAIAAAeIAAAAQAFgQAKgIQAJgJAOAAQAHAAAGACIAAANQgHgEgHAAQgRAAgJARQgLAQAAAdIAABAg");
	this.shape_3.setTransform(148.6,27.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnA0QgQgTAAghQAAgdAQgVQARgUAaAAQAZAAAOASQANASAAAeIAAAFIhjAAQAAAcANAPQANAPAVAAQAXAAAWgQIAAANQgVAPgaAAQgZAAgQgTgAgbguQgMAMgDAZIBWAAQgBgYgLgNQgKgNgSAAQgSAAgNANg");
	this.shape_4.setTransform(129,27.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqBTQgQgSAAggQAAghARgTQASgUAaAAQAeAAANAZIABAAIAAhXIAMAAIAADHIgMAAIAAgYIgBAAQgGANgNAHQgNAIgQAAQgYAAgQgTgAgfgMQgOAQAAAcQAAAcAMAPQANAPATAAQAWAAANgOQANgOAAgVIAAgZQAAgSgMgNQgMgNgUAAQgVAAgNAQg");
	this.shape_5.setTransform(114.2,24.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnA0QgQgTAAghQAAgdAQgVQARgUAaAAQAZAAAOASQANASAAAeIAAAFIhjAAQAAAcANAPQANAPAVAAQAXAAAWgQIAAANQgVAPgaAAQgZAAgQgTgAgbguQgMAMgDAZIBWAAQgBgYgLgNQgKgNgSAAQgSAAgNANg");
	this.shape_6.setTransform(92.9,27.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFBkIAAjHIALAAIAADHg");
	this.shape_7.setTransform(83.3,24.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFBkIAAjHIALAAIAADHg");
	this.shape_8.setTransform(77.7,24.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgOQAHgGANgFQANgEALAAQAUAAAMANQALANAAAZIAABWIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAIAPgBQASAAANgNQANgPAAgXIAAgMg");
	this.shape_9.setTransform(68,27.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLA1IAAhaIgYAAIAAgLIAYAAIAAgjIAHgCIAEgCIAAAnIAkAAIAAALIgkAAIAABYQAAAOAFAGQAEAGALAAQAIAAAIgEIAAALQgKAEgIAAQgdAAAAgjg");
	this.shape_10.setTransform(57.5,25.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnA0QgQgTAAghQAAgdAQgVQARgUAaAAQAZAAAOASQANASAAAeIAAAFIhjAAQAAAcANAPQANAPAVAAQAXAAAWgQIAAANQgVAPgaAAQgZAAgQgTgAgbguQgMAMgDAZIBWAAQgBgYgLgNQgKgNgSAAQgSAAgNANg");
	this.shape_11.setTransform(46.8,27.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgqBTQgQgSAAggQAAghARgTQASgUAaAAQAeAAANAZIABAAIAAhXIAMAAIAADHIgMAAIAAgYIgBAAQgGANgNAHQgNAIgQAAQgYAAgQgTgAgfgMQgOAQAAAcQAAAcAMAPQANAPATAAQAWAAANgOQANgOAAgVIAAgZQAAgSgMgNQgMgNgUAAQgVAAgNAQg");
	this.shape_12.setTransform(31.9,24.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0099CC").s().p("AwfEJIAAoSMAg/AAAIAAISg");
	this.shape_13.setTransform(105.6,26.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006699").s().p("AwfEJIAAoSMAg/AAAIAAISg");
	this.shape_14.setTransform(105.6,26.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_14},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,211.2,53.1);


(lib.Símbolo7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmA9IAAgOQAHAGAKAEQAKACAGAAQAgABAAgaQAAgJgHgGQgHgHgQgHQgSgHgJgJQgHgJAAgNQAAgQAMgKQANgLARAAQASAAAMAHIAAAOQgPgJgQAAQgNgBgHAIQgJAGABALQgBAKAGAGQAEAGARAIQAVAIAIAIQAIAJAAANQAAAQgMAKQgMALgVAAQgTAAgNgKg");
	this.shape.setTransform(231.6,30.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguAzQgRgTAAgfQAAghASgTQASgTAdAAQAcAAARATQARATAAAgQAAAfgRAUQgRAUgeAAQgcAAgSgUgAgkgqQgOAQAAAbQAAAaAOAQQANARAXgBQAZAAANgPQANgQAAgcQAAgcgNgPQgNgPgYAAQgXgBgOARg");
	this.shape_1.setTransform(218.7,30.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFBeIAAiGIALAAIAACGgAgGhMQgDgDAAgFQAAgEADgDQADgCADgBQAEABADACQADACAAAFQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_2.setTransform(208.3,27.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfBFIAAiGIAMAAIAAAeIABAAQAEgQAKgIQAJgJANAAQAIAAAGACIAAANQgHgEgHAAQgQAAgKARQgLAQAAAdIAABAg");
	this.shape_3.setTransform(202,30);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgrghAAQgVAAgVARIAAgPQAHgGANgEQANgEALAAQAUAAAMANQALANAAAYIAABXIgMAAIAAgaIAAAAQgHAOgMAHQgNAJgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAHAPAAQASABANgOQANgPAAgXIAAgMg");
	this.shape_4.setTransform(189.7,30.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfBFIAAiGIAMAAIAAAeIABAAQAEgQAKgIQAJgJAOAAQAHAAAGACIAAANQgHgEgHAAQgRAAgJARQgLAQAAAdIAABAg");
	this.shape_5.setTransform(179.8,30);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguAzQgRgTAAgfQAAghASgTQASgTAdAAQAcAAARATQARATAAAgQAAAfgRAUQgRAUgeAAQgcAAgSgUgAgkgqQgOAQAAAbQAAAaAOAQQANARAXgBQAZAAANgPQANgQAAgcQAAgcgNgPQgNgPgYAAQgXgBgOARg");
	this.shape_6.setTransform(166.8,30.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAoBkIAAhRQAAgXgJgLQgJgLgSAAQgQAAgOAOQgNAMAAAZIAABLIgMAAIAAjHIAMAAIAABZIABAAQAPgcAeAAQAWAAAMAPQALAOAAAZIAABUg");
	this.shape_7.setTransform(152.2,26.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHBeIAAhHIg6h1IAOAAIAsBbIAHAOIAAAAIAGgNIAuhcIAOAAIg9B0IAABIg");
	this.shape_8.setTransform(130.2,27.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmA9IAAgOQAHAGAKAEQAJACAIAAQAeABAAgaQAAgJgGgGQgIgHgPgHQgSgHgJgJQgHgJgBgNQAAgQANgKQANgLARAAQARAAANAHIAAAOQgPgJgQAAQgNgBgHAIQgIAGAAALQAAAKAEAGQAGAGAQAIQAWAIAHAIQAIAJAAANQAAAQgMAKQgMALgUAAQgUAAgNgKg");
	this.shape_9.setTransform(110.3,30.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgrghAAQgVAAgVARIAAgPQAHgGANgEQANgEALAAQAUAAAMANQALANAAAYIAABXIgMAAIAAgaIAAAAQgHAOgMAHQgNAJgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAHAPAAQASABANgOQANgPAAgXIAAgMg");
	this.shape_10.setTransform(98,30.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKA1IAAhaIgZAAIAAgLIAZAAIAAgjIAGgCIAEgCIAAAnIAkAAIAAALIgkAAIAABYQABAOAEAGQAEAGALAAQAHAAAJgEIAAALQgJAEgJAAQgcAAAAgjg");
	this.shape_11.setTransform(87.5,28.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgzAJIAAhNIAMAAIAABKQAAAbAJANQAJAMAUAAQARAAAMgOQAMgOAAgXIAAhLIAMAAIAACGIgMAAIAAgZIgBAAQgOAcgcAAQgwAAAAg8g");
	this.shape_12.setTransform(76.2,30.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AApBeIgZg3QgIgRgHgGQgHgGgMABIgXAAIAABTIgOAAIAAi8IA1AAQAYAAAOAOQAOAOAAAVQABAVgMAOQgMANgVADIAAABQALAEALAXIAcA8gAgpgBIAgAAQAUAAANgLQANgLAAgUQAAgSgMgKQgLgLgUAAIgjAAg");
	this.shape_13.setTransform(62.1,27.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0099CC").s().p("A3zEgIAAo/MAvnAAAIAAI/g");
	this.shape_14.setTransform(152.4,28.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006699").s().p("A3zEgIAAo/MAvnAAAIAAI/g");
	this.shape_15.setTransform(152.4,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,304.8,57.6);


(lib.Símbolo6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgOQAHgGANgFQANgEALAAQAUAAAMANQALANAAAZIAABWIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAIAPgBQASAAANgNQANgPAAgXIAAgMg");
	this.shape.setTransform(241.8,33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfBFIAAiGIAMAAIAAAeIABAAQAEgQAKgIQAJgJAOAAQAHAAAGACIAAANQgHgEgHAAQgQAAgKARQgLAQAAAdIAABAg");
	this.shape_1.setTransform(224.4,33);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgOQAHgGANgFQANgEALAAQAUAAAMANQALANAAAZIAABWIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAIAPgBQASAAANgNQANgPAAgXIAAgMg");
	this.shape_2.setTransform(212.1,33.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxBaIAAgMQAWAMATAAQA3AAAAg7IAAgSIgBAAQgQAcggAAQgYAAgQgSQgQgTAAgfQAAggARgVQARgUAbAAQAeAAANAZIABAAIAAgWIAMAAIAAB8QAAAngRARQgQASgiAAQgUAAgVgLgAgghIQgNARAAAbQAAAcAMAPQANAOAUAAQAVAAANgNQANgPAAgTIAAgbQAAgRgMgNQgMgNgUgBQgVAAgOARg");
	this.shape_3.setTransform(197.7,36.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnA0QgQgTAAghQAAgdAQgVQARgUAaAAQAZAAAOASQANASAAAeIAAAFIhjAAQAAAbANAQQANAPAVAAQAXAAAWgQIAAANQgVAPgaAAQgZAAgQgTgAgbguQgMAMgDAZIBWAAQgBgYgLgNQgKgNgSAAQgSAAgNANg");
	this.shape_4.setTransform(183.8,33.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFBkIAAjHIALAAIAADHg");
	this.shape_5.setTransform(174.2,29.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFBkIAAjHIALAAIAADHg");
	this.shape_6.setTransform(168.6,29.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguA0QgRgUAAgfQAAghASgTQASgTAdAAQAcAAARATQARATAAAgQAAAggRAUQgRATgeAAQgcAAgSgTgAgkgrQgOAQAAAcQAAAaAOARQANAPAXAAQAZAAANgPQANgQAAgcQAAgcgNgPQgNgQgYAAQgXABgOAPg");
	this.shape_7.setTransform(150.9,33.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABPBFIAAhQQAAgZgIgLQgIgKgSAAQgQAAgLAOQgMANAAAVIAABOIgLAAIAAhRQAAgtgiAAQgRAAgLAOQgLAOAAAVIAABNIgMAAIAAiGIAMAAIAAAXIABAAQAOgaAbAAQAPAAALAIQAKAJADAOQAGgPAMgIQAMgIANAAQAtAAAAA3IAABSg");
	this.shape_8.setTransform(132.3,33);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AguA0QgRgUAAgfQAAghASgTQASgTAdAAQAcAAARATQARATAAAgQAAAggRAUQgRATgeAAQgcAAgSgTgAgkgrQgOAQAAAcQAAAaAOARQANAPAXAAQAZAAANgPQANgQAAgcQAAgcgNgPQgNgQgYAAQgXABgOAPg");
	this.shape_9.setTransform(113.5,33.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgqBIQgZgbAAgpQAAgtAbgcQAagcAoAAQAWAAAUAIIAAANQgUgJgWAAQgjAAgWAYQgWAZAAAmQAAAnAVAXQAVAWAgAAQAaAAAVgLIAAAOQgXAJgZAAQgmAAgYgag");
	this.shape_10.setTransform(97.4,30.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0099CC").s().p("A3zEgIAAo/MAvnAAAIAAI/g");
	this.shape_11.setTransform(152.4,28.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006699").s().p("A3zEgIAAo/MAvnAAAIAAI/g");
	this.shape_12.setTransform(152.4,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_12},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,304.8,57.6);


(lib.Símbolo5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfBFIAAiGIAMAAIAAAeIAAAAQAFgQAKgIQAJgJANAAQAIAAAGACIAAANQgGgEgJAAQgPAAgKARQgLAQAAAdIAABAg");
	this.shape.setTransform(184.8,31.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmA8QgLgLAAgQQAAgjAvgHIAogGQAAgrghgBQgVABgVARIAAgOQAHgHANgDQANgFALAAQAUAAAMANQALANAAAZIAABXIgMAAIAAgbIAAAAQgHANgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUADgJAHQgJAHAAAPQAAAMAJAIQAHAIAPAAQASAAANgPQANgOAAgXIAAgMg");
	this.shape_1.setTransform(172.5,32);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfBFIAAiGIAMAAIAAAeIABAAQAEgQAKgIQAJgJANAAQAIAAAGACIAAANQgGgEgIAAQgRAAgJARQgLAQAAAdIAABAg");
	this.shape_2.setTransform(162.5,31.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKA1IAAhaIgZAAIAAgLIAZAAIAAgjIAFgCIAFgCIAAAnIAkAAIAAALIgkAAIAABYQABAOAEAGQAEAGALAAQAHAAAJgEIAAALQgJAEgJAAQgcAAAAgjg");
	this.shape_3.setTransform(153.1,30.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAoBFIAAhNQAAgxgjAAQgTAAgMAOQgNAPAAAVIAABMIgMAAIAAiGIAMAAIAAAZIABAAQAPgcAeAAQAWAAALAPQAMAOAAAbIAABRg");
	this.shape_4.setTransform(142.1,31.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtBfIAAi8IBXAAIAAAMIhKAAIAABLIBEAAIAAALIhEAAIAABNIBOAAIAAANg");
	this.shape_5.setTransform(128.3,29.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099CC").s().p("A3zEgIAAo/MAvnAAAIAAI/g");
	this.shape_6.setTransform(152.4,28.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006699").s().p("A3zEgIAAo/MAvnAAAIAAI/g");
	this.shape_7.setTransform(152.4,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,304.8,57.6);


(lib.Símbolo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfBFIAAiGIAMAAIAAAeIAAAAQAFgQAKgIQAJgJANAAQAIAAAGACIAAANQgGgEgJAAQgQAAgJARQgLAQAAAdIAABAg");
	this.shape.setTransform(192.3,29.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgOQAHgGANgFQANgEALAAQAUAAAMANQALANAAAZIAABWIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAIAPgBQASAAANgNQANgPAAgXIAAgMg");
	this.shape_1.setTransform(180,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfBFIAAiGIAMAAIAAAeIABAAQAEgQAKgIQAJgJANAAQAIAAAGACIAAANQgHgEgHAAQgQAAgKARQgLAQAAAdIAABAg");
	this.shape_2.setTransform(170.1,29.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKA1IAAhaIgZAAIAAgLIAZAAIAAgjIAFgCIAFgCIAAAnIAkAAIAAALIgkAAIAABYQABAOAEAGQAEAGALAAQAHAAAJgEIAAALQgJAEgJAAQgcAAAAgjg");
	this.shape_3.setTransform(160.6,28.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmA+IAAgPQAHAGAKADQAJADAIAAQAeAAAAgZQAAgJgGgGQgIgHgPgHQgSgHgJgJQgIgJAAgNQAAgRANgKQANgKARAAQARAAANAIIAAANQgPgKgQAAQgNAAgIAHQgHAHAAALQAAAKAEAGQAFAGARAHQAWAJAHAIQAIAIAAAOQAAAQgMALQgMAKgUAAQgUAAgNgJg");
	this.shape_4.setTransform(151.6,30);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFBeIAAiGIALAAIAACGgAgGhNQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEABQgDgBgDgDg");
	this.shape_5.setTransform(143.4,27.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxBaIAAgMQAWAMATAAQA3AAAAg7IAAgSIgBAAQgQAcggAAQgYAAgQgSQgQgTAAgfQAAggARgVQARgUAbAAQAeAAANAZIABAAIAAgWIAMAAIAAB8QAAAngRARQgQASgiAAQgUAAgVgLgAgghIQgNARAAAbQAAAcAMAPQANAOAUAAQAVAAANgNQANgPAAgTIAAgbQAAgRgMgNQgMgNgUgBQgVAAgOARg");
	this.shape_6.setTransform(132.6,33);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnA0QgQgTAAghQAAgdAQgVQARgUAaAAQAZAAAOASQANASAAAeIAAAFIhjAAQAAAcANAPQANAPAVAAQAXAAAWgQIAAANQgVAPgaAAQgZAAgQgTgAgbguQgMAMgDAZIBWAAQgBgYgLgNQgKgNgSAAQgSAAgNANg");
	this.shape_7.setTransform(118.7,30);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AApBeIgZg3QgIgRgIgGQgGgFgMAAIgYAAIAABTIgMAAIAAi8IA0AAQAYAAAOAOQAPANAAAXQAAAUgNAOQgLAMgVAFIAAAAQALAEAKAXIAcA8gAgqAAIAhAAQAUAAANgMQANgLAAgUQAAgSgLgKQgMgKgVAAIgjAAg");
	this.shape_8.setTransform(104.9,27.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0099CC").s().p("A3zEgIAAo/MAvnAAAIAAI/g");
	this.shape_9.setTransform(152.4,28.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006699").s().p("A3zEgIAAo/MAvnAAAIAAI/g");
	this.shape_10.setTransform(152.4,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,304.8,57.6);


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAoBFIAAhNQAAgxgjAAQgSAAgNAOQgNAPAAAVIAABMIgMAAIAAiGIAMAAIAAAZIABAAQAPgcAeAAQAWAAAMAPQALAOAAAbIAABRg");
	this.shape.setTransform(174.4,29.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFBeIAAiGIALAAIAACGgAgGhNQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEABQgDgBgDgDg");
	this.shape_1.setTransform(164.3,27.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxBaIAAgMQAWAMATAAQA3AAAAg7IAAgSIgBAAQgQAcggAAQgYAAgQgSQgQgTAAgfQAAggARgVQARgUAbAAQAeAAANAZIABAAIAAgWIAMAAIAAB8QAAAngRARQgQASgiAAQgUAAgVgLgAgghIQgNARAAAbQAAAcAMAPQANAOAUAAQAVAAANgNQANgPAAgTIAAgbQAAgRgMgNQgMgNgUgBQgVAAgOARg");
	this.shape_2.setTransform(153.5,33);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguA0QgRgUAAgfQAAghASgTQASgTAdAAQAcAAARATQARATAAAgQAAAggRAUQgRATgeAAQgcAAgSgTgAgkgrQgOAQAAAcQAAAaAOARQANAPAXAAQAZAAANgPQANgQAAgcQAAgcgNgPQgNgQgYAAQgXABgOAPg");
	this.shape_3.setTransform(138.8,30);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrBeIAAi8IANAAIAACwIBKAAIAAAMg");
	this.shape_4.setTransform(125.8,27.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0099CC").s().p("A3zEgIAAo/MAvnAAAIAAI/g");
	this.shape_5.setTransform(152.4,28.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006699").s().p("A3zEgIAAo/MAvnAAAIAAI/g");
	this.shape_6.setTransform(152.4,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,304.8,57.6);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AifAEIABAAIE+idIAAEzg");
	this.shape.setTransform(55,20.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099CC").s().p("ApuDQIAAmgITcAAIAAGggABXCYIAAkzIk+CdIgBAAg");
	this.shape_1.setTransform(62.3,20.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006699").s().p("ApuDQIAAmgITcAAIAAGggABXCYIAAkzIk+CdIgBAAg");
	this.shape_2.setTransform(62.3,20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("ApuDQIAAmgITcAAIAAGggABXCYIAAkzIk+CdIgBAAg");
	this.shape_3.setTransform(62.3,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_2}]},1).to({state:[{t:this.shape},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124.5,41.7);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRCqIAAjnIAhAAIAADngAgPiBQgHgGAAgKQAAgKAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAKQAAAJgHAHQgHAHgJAAQgKAAgFgHg");
	this.shape.setTransform(28.9,28.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099CC").s().p("AjLDAQhUhQAAhwQAAhwBUhPQBVhQB2AAQB4AABTBQQBVBPAABwQAABwhVBQQhTBQh4AAQh2AAhVhQg");
	this.shape_1.setTransform(28.8,30.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFAGQgDgCABgEQgBgDADgCQADgCACgBQADABADACQADACAAADQAAAEgDACQgDACgDAAQgCAAgDgCg");
	this.shape_2.setTransform(47.9,-30.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAPIAAgMQAGgFAKgDQAKgDAIgBQARAAAJAKQAJALAAAUIAABFIgJAAIAAgVIgBAAQgFALgKAGQgKAHgLAAQgPAAgJgJgAABAAQgQACgHAGQgHAFAAANQAAAJAHAHQAGAGALAAQAPAAAKgMQALgMAAgSIAAgJg");
	this.shape_3.setTransform(40,-34.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AguBQIAAicIAKAAIAAAWIAAAAQAGgMALgHQAKgGAMAAQAVAAAMAOQALAPAAAXQAAAbgNAQQgNARgVAAQgYAAgMgVIAAAAIAABEgAgag5QgKAMAAARIAAAOQgBAPALAMQAKAMAQgBQAQAAALgOQAKgNAAgXQAAgVgJgLQgKgNgQAAQgSAAgKAOg");
	this.shape_4.setTransform(29.2,-32.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAPIAAgMQAGgFAKgDQAKgDAIgBQARAAAJAKQAJALAAAUIAABFIgJAAIAAgVIgBAAQgFALgKAGQgKAHgLAAQgPAAgJgJgAABAAQgQACgHAGQgHAFAAANQAAAJAHAHQAGAGALAAQAPAAAKgMQALgMAAgSIAAgJg");
	this.shape_5.setTransform(17.2,-34.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA/A3IAAhAQgBgUgFgIQgHgJgOAAQgNAAgJALQgJALAAARIAAA+IgJAAIAAhAQAAglgcAAQgNAAgIAMQgJALAAARIAAA9IgJAAIAAhrIAJAAIAAASIABAAQALgUAVAAQAMAAAJAGQAIAHACALQAFgLAKgHQAJgGALAAQAkAAAAArIAABCg");
	this.shape_6.setTransform(3.4,-35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEBQIAAifIAJAAIAACfg");
	this.shape_7.setTransform(-13.7,-37.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfAqQgNgPAAgbQAAgXANgQQAOgQAUgBQAVABALAOQAKAOAAAYIAAADIhPAAQAAAWAKANQALANAQAAQATAAARgOIAAAKQgRANgUAAQgUAAgNgPgAgVglQgKALgCASIBEAAQAAgSgJgLQgJgKgOAAQgOAAgKAKg");
	this.shape_8.setTransform(-21.4,-34.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAgA3IAAg+QAAgngcAAQgPAAgKAMQgKALAAARIAAA9IgJAAIAAhrIAJAAIAAAUIABAAQAMgWAXAAQASAAAJALQAJAMAAAWIAABAg");
	this.shape_9.setTransform(-38.3,-35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfAqQgNgPAAgbQAAgXAOgQQANgQAVgBQATABALAOQALAOAAAYIAAADIhPAAQAAAWALANQAJANASAAQASAAARgOIAAAKQgQANgWAAQgTAAgNgPgAgVglQgKALgDASIBFAAQgBgSgIgLQgJgKgOAAQgOAAgKAKg");
	this.shape_10.setTransform(-49.7,-34.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfAqQgNgPAAgbQAAgXAOgQQANgQAVgBQATABALAOQALAOAAAYIAAADIhPAAQAAAWAKANQAKANASAAQASAAARgOIAAAKQgQANgWAAQgTAAgNgPgAgVglQgKALgDASIBFAAQgBgSgIgLQgJgKgOAAQgOAAgKAKg");
	this.shape_11.setTransform(-66.4,-34.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAqIAAhHIgUAAIAAgJIAUAAIAAgcIAEgCIAEgCIAAAgIAdAAIAAAJIgdAAIAABGQAAALAEAFQADAFAJAAQAGAAAHgEIAAAJQgIAEgGAAQgXAAAAgdg");
	this.shape_12.setTransform(-75.2,-36.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAfA3IAAg+QAAgngcAAQgOAAgKAMQgKALAAARIAAA9IgKAAIAAhrIAKAAIAAAUIAAAAQAMgWAYAAQASAAAJALQAJAMAAAWIAABAg");
	this.shape_13.setTransform(-83.9,-35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfAqQgNgPAAgbQAAgXANgQQAOgQAUgBQAVABAKAOQALAOAAAYIAAADIhPAAQAAAWALANQAKANAQAAQATAAARgOIAAAKQgRANgUAAQgUAAgNgPgAgVglQgKALgCASIBEAAQAAgSgJgLQgIgKgPAAQgOAAgKAKg");
	this.shape_14.setTransform(-95.3,-34.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA/A3IAAhAQAAgUgHgIQgGgJgOAAQgMAAgKALQgJALAAARIAAA+IgJAAIAAhAQAAglgcAAQgNAAgIAMQgJALAAARIAAA9IgJAAIAAhrIAJAAIAAASIABAAQALgUAWAAQALAAAJAGQAIAHACALQAFgLAKgHQAJgGALAAQAkAAAAArIAABCg");
	this.shape_15.setTransform(-109.5,-35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAPIAAgMQAGgFAKgDQAKgDAIgBQARAAAJAKQAJALAAAUIAABFIgJAAIAAgVIgBAAQgFALgKAGQgKAHgLAAQgPAAgJgJgAABAAQgQACgHAGQgHAFAAANQAAAJAHAHQAGAGALAAQAPAAAKgMQALgMAAgSIAAgJg");
	this.shape_16.setTransform(-124,-34.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIAqIAAhHIgUAAIAAgJIAUAAIAAgcIAEgCIAEgCIAAAgIAdAAIAAAJIgdAAIAABGQAAALAEAFQADAFAJAAQAGAAAHgEIAAAJQgIAEgGAAQgXAAAAgdg");
	this.shape_17.setTransform(-132.4,-36.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYAqQgOgPAAgZQAAgZAPgQQAQgRAWAAQANAAALAGIAAALQgLgIgPAAQgRAAgMAOQgMAOAAAUQAAAWALAMQAKANASAAQAPAAANgJIAAAKQgNAIgQAAQgVAAgNgPg");
	this.shape_18.setTransform(-140.3,-34.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgfAqQgNgPAAgbQAAgXAOgQQANgQAVgBQATABALAOQALAOAAAYIAAADIhPAAQAAAWAKANQAKANASAAQASAAARgOIAAAKQgQANgWAAQgTAAgNgPgAgVglQgKALgDASIBFAAQgBgSgIgLQgJgKgOAAQgOAAgKAKg");
	this.shape_19.setTransform(-150.6,-34.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgZA3IAAhrIAKAAIAAAYQAEgMAIgHQAHgHALAAQAFAAAGACIAAAKQgGgDgGgBQgNAAgIAOQgIANAAAYIAAAyg");
	this.shape_20.setTransform(-158.4,-34.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_21.setTransform(-165,-37);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgiBDQgMgPAAgZQAAgaANgQQAPgQAUAAQAYAAALAUIAAAAIAAhFIAKAAIAACfIgKAAIAAgUIAAAAQgFAKgLAGQgKAGgMAAQgUAAgNgOgAgZgJQgLAMAAAXQAAAWAKAMQAKANAQAAQARAAAKgMQALgLgBgRIAAgUQAAgOgJgKQgJgLgRAAQgPAAgMANg");
	this.shape_22.setTransform(-173.6,-37.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgDAIAAQARgBAJAKQAJALAAAUIAABFIgJAAIAAgVIgBAAQgFALgKAGQgKAHgLgBQgPABgJgJgAABAAQgQACgHAGQgHAGAAAMQAAAJAHAHQAGAGALAAQAPAAAKgMQALgMAAgRIAAgKg");
	this.shape_23.setTransform(-70,-62.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEBQIAAifIAJAAIAACfg");
	this.shape_24.setTransform(-77.3,-65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgZA3IAAhrIAKAAIAAAYQAEgMAIgHQAHgHALAAQAFAAAGACIAAAKQgGgDgGAAQgNAAgIANQgIANAAAYIAAAyg");
	this.shape_25.setTransform(-82.4,-62.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgDAIAAQARgBAJAKQAJALAAAUIAABFIgJAAIAAgVIgBAAQgFALgKAGQgKAHgLgBQgPABgJgJgAABAAQgQACgHAGQgHAGAAAMQAAAJAHAHQAGAGALAAQAPAAAKgMQALgMAAgRIAAgKg");
	this.shape_26.setTransform(-92.2,-62.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAgA3IAAg+QAAgngdAAQgOAAgKAMQgKALAAARIAAA9IgKAAIAAhrIAKAAIAAAUIABAAQALgWAZAAQARAAAJALQAKAMAAAWIAABAg");
	this.shape_27.setTransform(-103,-62.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AglApQgNgQAAgZQAAgZAOgPQAPgQAWABQAXgBAOAQQANAPAAAZQAAAagOAPQgNAPgYAAQgXAAgOgPgAgdgiQgLANAAAWQAAAVALANQAMANARAAQAUAAALgNQAKgNAAgWQAAgWgKgNQgLgMgTAAQgSAAgMANg");
	this.shape_28.setTransform(-114.9,-62.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_29.setTransform(-123.2,-64.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgZAqQgNgPAAgZQAAgZAPgQQAPgQAXAAQANAAALAEIAAAMQgMgIgOAAQgRAAgMAOQgMAOAAAUQAAAWALAMQALANAQAAQAQAAAMgJIAAAKQgLAIgRgBQgVAAgOgOg");
	this.shape_30.setTransform(-130.2,-62.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgZAqQgNgPAAgZQAAgZAPgQQAQgQAWAAQAMAAAMAEIAAAMQgLgIgOAAQgSAAgMAOQgMAOAAAUQAAAWALAMQAKANARAAQARAAALgJIAAAKQgLAIgRgBQgVAAgOgOg");
	this.shape_31.setTransform(-139.8,-62.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgfAqQgNgPAAgbQAAgXANgQQAOgRAUABQAVgBALAOQAKAOAAAZIAAADIhPAAQAAAXAKAMQALANAQAAQATAAARgOIAAAKQgRAMgUAAQgUAAgNgOgAgVglQgKALgCASIBEAAQAAgSgJgLQgJgKgOAAQgOAAgKAKg");
	this.shape_32.setTransform(-150.1,-62.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEBQIAAifIAJAAIAACfg");
	this.shape_33.setTransform(-157.8,-65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgfAqQgNgPAAgbQAAgXAOgQQANgRAVABQATgBALAOQALAOAAAZIAAADIhPAAQAAAXAKAMQAKANASAAQASAAARgOIAAAKQgQAMgWAAQgTAAgNgOgAgVglQgKALgDASIBFAAQgBgSgIgLQgJgKgOAAQgOAAgKAKg");
	this.shape_34.setTransform(-165.4,-62.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgeAxIAAgMQAFAFAIADQAIADAGAAQAYAAAAgVQAAgHgFgFQgGgGgMgEQgPgGgGgIQgHgHAAgKQAAgOAKgHQAKgJAOABQAOAAAKAFIAAALQgMgIgNAAQgJAAgHAGQgGAFAAAJQAAAIAEAEQAEAFANAHQARAGAGAHQAGAGAAALQAAANgJAIQgKAJgQgBQgQABgKgIg");
	this.shape_35.setTransform(-175,-62.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgkApQgOgPAAgaQAAgZAPgQQAOgPAXABQAXgBANAPQANAQAAAZQAAAZgNAQQgOAPgYAAQgXAAgNgPgAgdgiQgLANAAAWQAAAVALANQALANATAAQATAAAKgNQALgMAAgXQAAgWgLgNQgKgMgTAAQgSAAgMANg");
	this.shape_36.setTransform(11.9,-89.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgMAZIAPgxIAKAAIgRAxg");
	this.shape_37.setTransform(-3,-84.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgkApQgOgPAAgaQAAgZAPgQQAOgPAWABQAYgBANAPQANAQAAAZQAAAZgOAQQgNAPgYAAQgWAAgOgPgAgcgiQgMANAAAWQAAAVAMANQAKANASAAQAUAAAKgNQALgMAAgXQAAgWgLgNQgKgMgTAAQgSAAgLANg");
	this.shape_38.setTransform(-10.8,-89.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAfA3IAAg+QAAgngcAAQgOAAgKAMQgKALAAARIAAA9IgKAAIAAhrIAKAAIAAAUIAAAAQAMgWAZAAQARAAAJALQAKAMAAAWIAABAg");
	this.shape_39.setTransform(-22.5,-90.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_40.setTransform(-30.7,-92.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgIAqIAAhHIgUAAIAAgJIAUAAIAAgcIAEgCIAEgCIAAAgIAdAAIAAAJIgdAAIAABGQAAALAEAFQADAFAJAAQAGAAAHgEIAAAJQgIAEgGAAQgXAAAAgdg");
	this.shape_41.setTransform(-36.2,-91.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgeAxIAAgMQAFAFAIADQAIADAGAAQAYAAAAgVQAAgHgFgFQgGgGgMgEQgPgGgGgIQgHgHAAgKQAAgOAKgHQAKgJAOABQAOgBAKAGIAAALQgMgIgNAAQgJAAgHAGQgGAFAAAJQAAAIAEAEQAEAGANAGQARAGAGAHQAGAGAAALQAAANgJAIQgKAJgQgBQgQABgKgIg");
	this.shape_42.setTransform(-43.4,-89.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgfAqQgNgPAAgbQAAgXANgQQAOgRAUABQAVgBALAOQAKAOAAAZIAAADIhPAAQAAAXAKAMQALANAQAAQATAAARgNIAAAJQgQAMgWAAQgTAAgNgOgAgVgkQgKAKgDASIBFAAQgBgSgIgKQgIgLgPAAQgOAAgKALg");
	this.shape_43.setTransform(-53.1,-89.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AghBDQgNgPAAgZQAAgaANgQQAOgQAVAAQAZAAAKAUIABAAIAAhFIAJAAIAACfIgJAAIAAgUIgBAAQgFAKgLAGQgKAGgMAAQgUAAgMgOgAgYgJQgMAMAAAXQAAAWAKAMQAKANAQAAQARAAALgMQAKgLAAgRIAAgUQAAgOgKgKQgJgLgRAAQgPAAgLANg");
	this.shape_44.setTransform(-65,-92.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgtBOIAAgKQAEACAFAAQANAAAIgSIAKgYIgphqIALAAIAgBXIACAEIABAEIAAAAIACgIIAihXIALAAIg0CBQgFAOgIAHQgHAHgLAAQgFAAgEgBg");
	this.shape_45.setTransform(-81.4,-87.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAgA3IAAg+QAAgngcAAQgPAAgKAMQgKALAAARIAAA9IgJAAIAAhrIAJAAIAAAUIABAAQAMgWAYAAQARAAAJALQAKAMAAAWIAABAg");
	this.shape_46.setTransform(-97.8,-90.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgfAqQgNgPAAgbQAAgXAOgQQANgRAVABQATgBALAOQALAOAAAZIAAADIhPAAQAAAXAKAMQAKANASAAQASAAARgNIAAAJQgQAMgWAAQgTAAgNgOgAgVgkQgKAKgDASIBFAAQgBgSgIgKQgJgLgOAAQgOAAgKALg");
	this.shape_47.setTransform(-109.2,-89.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgmBJIAAgKQARAJAOAAQAsAAAAgwIAAgNIAAAAQgMAWgagBQgUAAgNgOQgMgOAAgZQAAgaANgQQAOgQAVAAQAZAAAKATIAAAAIAAgRIAKAAIAABjQAAAegNAOQgOAPgbAAQgPgBgQgHgAgZg6QgLAOAAAWQAAAWAKALQAKANAQAAQARAAAKgMQAKgLAAgPIAAgVQAAgPgJgKQgKgLgQAAQgQAAgLANg");
	this.shape_48.setTransform(-121.1,-87.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_49.setTransform(-129,-92.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgZA3IAAhrIAKAAIAAAYQAEgMAIgHQAHgHALAAQAGAAAFACIAAAKQgFgEgHABQgNAAgIANQgIANAAAXIAAAzg");
	this.shape_50.setTransform(-134,-90);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgkApQgOgPAAgaQAAgZAOgQQAPgPAWABQAYgBANAPQANAQAAAZQAAAZgOAQQgNAPgYAAQgWAAgOgPgAgcgiQgMANAAAWQAAAVAMANQALANARAAQAUAAAKgNQALgMAAgXQAAgWgLgNQgKgMgTAAQgSAAgLANg");
	this.shape_51.setTransform(-144.4,-89.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgfAqQgNgPAAgbQAAgXAOgQQANgRAVABQATgBALAOQALAOAAAZIAAADIhPAAQAAAXALAMQAJANASAAQASAAARgNIAAAJQgQAMgWAAQgTAAgNgOgAgVgkQgKAKgDASIBFAAQgBgSgIgKQgJgLgOAAQgOAAgKALg");
	this.shape_52.setTransform(-161.7,-89.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgiBDQgMgPAAgZQAAgaANgQQAPgQAUAAQAYAAALAUIAAAAIAAhFIAKAAIAACfIgKAAIAAgUIAAAAQgFAKgLAGQgKAGgMAAQgUAAgNgOgAgZgJQgLAMAAAXQAAAWAKAMQAKANAQAAQARAAAKgMQALgLgBgRIAAgUQAAgOgJgKQgJgLgRAAQgPAAgMANg");
	this.shape_53.setTransform(-173.6,-92.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAfA3IAAg+QAAgngcAAQgOAAgKAMQgKALAAARIAAA9IgKAAIAAhrIAKAAIAAAUIAAAAQAMgWAYAAQASAAAJALQAJAMAAAWIAABAg");
	this.shape_54.setTransform(50.5,-117.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgkApQgOgPAAgaQAAgaAPgPQAOgOAXAAQAXAAANAOQANAPAAAaQAAAZgOAQQgNAPgYAAQgWAAgOgPgAgcgiQgMANAAAWQAAAVAMANQAKANATAAQATAAAKgNQALgNAAgWQAAgWgLgNQgKgMgTAAQgSAAgLANg");
	this.shape_55.setTransform(38.6,-117.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_56.setTransform(30.3,-119.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgYAqQgOgQAAgYQAAgZAPgQQAPgQAXAAQAMAAAMAEIAAALQgMgHgNAAQgSAAgMAOQgMANAAAVQAAAWALAMQAKANASAAQAQAAAMgJIAAAKQgNAHgQAAQgVABgNgPg");
	this.shape_57.setTransform(23.3,-117.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgYAqQgOgQAAgYQAAgZAPgQQAPgQAXAAQANAAALAEIAAALQgMgHgOAAQgRAAgMAOQgMANAAAVQAAAWALAMQALANARAAQAPAAAMgJIAAAKQgLAHgRAAQgVABgNgPg");
	this.shape_58.setTransform(13.7,-117.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgfAqQgNgQAAgaQAAgXAOgRQANgPAVAAQATAAALANQALAOAAAZIAAADIhPAAQAAAXALANQAJAMASAAQASAAARgNIAAAKQgQAMgWgBQgTABgNgPgAgVgkQgKAKgDASIBFAAQgBgSgIgKQgJgLgOAAQgOAAgKALg");
	this.shape_59.setTransform(3.4,-117.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgZA3IAAhrIAKAAIAAAYQAEgNAIgGQAHgHALAAQAGAAAFACIAAAKQgFgEgHABQgNAAgIANQgIANAAAXIAAAzg");
	this.shape_60.setTransform(-4.4,-117.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_61.setTransform(-11,-119.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgiBDQgMgPAAgZQAAgaANgQQAOgQAVAAQAYAAALAUIAAAAIAAhFIAKAAIAACfIgKAAIAAgUIAAAAQgFAKgKAGQgLAGgMAAQgUAAgNgOgAgZgJQgLAMAAAXQAAAWAKAMQAKANAQAAQARAAAKgMQAKgLAAgRIAAgUQAAgOgJgKQgJgLgRAAQgQAAgLANg");
	this.shape_62.setTransform(-19.6,-120);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgEAIABQARAAAJAKQAJAKAAAUIAABFIgJAAIAAgVIgBAAQgFAKgKAHQgKAGgLAAQgPAAgJgIgAABAAQgQADgHAFQgHAGAAAMQAAAJAHAHQAGAGALAAQAPAAAKgMQALgLAAgSIAAgKg");
	this.shape_63.setTransform(-36.7,-117.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgEBQIAAifIAJAAIAACfg");
	this.shape_64.setTransform(-44,-120.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgZA3IAAhrIAKAAIAAAYQAEgNAIgGQAHgHALAAQAFAAAGACIAAAKQgGgEgGABQgNAAgIANQgIANAAAXIAAAzg");
	this.shape_65.setTransform(-54.9,-117.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_66.setTransform(-61.5,-119.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgkA8IAAAAIAAATIgKAAIAAifIAKAAIAABKIAAAAQAGgMALgGQAKgHAMAAQAVAAAMAOQALAPAAAXQAAAbgNARQgOAQgUAAQgYAAgMgVgAgagJQgKALAAARIAAAOQgBAQALAMQAKAMAQAAQAQAAALgPQAKgOAAgXQAAgUgKgLQgJgMgQAAQgSAAgKANg");
	this.shape_67.setTransform(-69.3,-120);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_68.setTransform(-78,-119.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgZA3IAAhrIAKAAIAAAYQAEgNAIgGQAHgHALAAQAGAAAEACIAAAKQgEgEgHABQgNAAgIANQgIANAAAXIAAAzg");
	this.shape_69.setTransform(-83.1,-117.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgYAqQgOgQAAgYQAAgZAPgQQAQgQAWAAQANAAALAEIAAALQgLgHgPAAQgRAAgMAOQgMANAAAVQAAAWALAMQAKANASAAQAPAAANgJIAAAKQgNAHgQAAQgVABgNgPg");
	this.shape_70.setTransform(-92.1,-117.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgeAxIAAgMQAFAFAIADQAIADAGAAQAYAAAAgVQAAgHgFgFQgGgGgMgFQgPgGgGgGQgHgIAAgKQAAgOAKgHQAKgIAOAAQAOgBAKAGIAAALQgMgIgNAAQgJAAgHAGQgGAGAAAIQAAAIAEAEQAEAGANAFQARAHAGAHQAGAGAAALQAAANgJAIQgKAIgQAAQgQAAgKgHg");
	this.shape_71.setTransform(-101.1,-117.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgfAqQgNgQAAgaQAAgXANgRQAOgPAUAAQAVAAALANQAKAOAAAZIAAADIhPAAQAAAXAKANQALAMAQAAQATAAARgNIAAAKQgRAMgVgBQgTABgNgPgAgVgkQgKAKgDASIBFAAQAAgSgJgKQgIgLgPAAQgOAAgKALg");
	this.shape_72.setTransform(-110.8,-117.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgfAqQgNgQAAgaQAAgXANgRQAOgPAUAAQAVAAALANQAKAOAAAZIAAADIhPAAQAAAXAKANQALAMAQAAQATAAARgNIAAAKQgRAMgUgBQgUABgNgPgAgVgkQgKAKgCASIBEAAQAAgSgJgKQgJgLgOAAQgOAAgKALg");
	this.shape_73.setTransform(-127.6,-117.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AghBDQgNgPAAgZQAAgaAOgQQANgQAWAAQAYAAAKAUIABAAIAAhFIAJAAIAACfIgJAAIAAgUIgBAAQgFAKgKAGQgLAGgMAAQgUAAgMgOgAgYgJQgMAMAAAXQAAAWAKAMQAKANAQAAQARAAALgMQAJgLABgRIAAgUQAAgOgKgKQgKgLgPAAQgRAAgKANg");
	this.shape_74.setTransform(-139.5,-120);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgfAqQgNgQAAgaQAAgXAOgRQANgPAVAAQATAAALANQALAOAAAZIAAADIhPAAQAAAXAKANQAKAMASAAQASAAARgNIAAAKQgQAMgWgBQgTABgNgPgAgVgkQgKAKgDASIBFAAQgBgSgIgKQgJgLgOAAQgOAAgKALg");
	this.shape_75.setTransform(-150.6,-117.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgpAHIAAg9IAKAAIAAA7QAAAWAHAKQAIAKAPAAQAOAAAKgMQAJgLAAgSIAAg8IAKAAIAABrIgKAAIAAgUIgBAAQgLAWgWAAQgnAAAAgwg");
	this.shape_76.setTransform(-161.9,-117.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgpBMIAAiXIAkAAQAWAAANALQAMALAAAVQAAAVgOANQgNANgYAAIgWAAIAAA9gAgfAGIAWAAQATAAALgJQAKgKAAgSQAAgigmAAIgYAAg");
	this.shape_77.setTransform(-173.1,-119.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0099FF").s().p("AK7HnI+KAAIAAyoMAmfAAAIAASoIg6AAIjvDag");
	this.shape_78.setTransform(-63.9,-69.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0099CC").s().p("AjLDAQgtgqgUg0QgTguAAg0QAAhwBUhPQBVhQB2AAQB4AABTBQQBVBPAABwQAAA0gTAuQgVA0gtAqQhTBQh4AAQh2AAhVhQg");
	this.shape_79.setTransform(28.8,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{y:28.7}}]}).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape,p:{y:26.7}},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_79},{t:this.shape,p:{y:26.7}}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.6,58.6);


(lib.rutax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcA2IgcguIAAAAIgDAHIgCACIgYAlIgMAAIAkg1Igjg2IALAAIAYAnIAFAJIAAAAIAFgJIAagnIALAAIglA2IAkA1g");
	this.shape.setTransform(29.2,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ak7CUIAAknIJ3AAIAAEng");
	this.shape_1.setTransform(31.6,14.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(2,1,1).p("AKluNQAAAXgRARQgIAIgKAEQgKAEgLAAQgXAAgRgQQgHgIgEgIQgGgLAAgNQAAgXARgQQAOgPASgBQAEgBAEAAQAMAAALAFQAJAEAHAIQAHAGAFAJQAEAJABAJQAAADAAADgATPGVQAAAXgQAQQgRARgXAAQgXAAgQgRQgRgQAAgXQAAgIACgIQAEgNALgKQAMgNAPgDQACAAADgBQADAAAEAAQANAAAKAFQAJAEAIAIQAHAHAEAJQAEAHABAKQAAADAAADgAJVAjQAAAGgBAFQgEAQgMAMQgQARgXAAQgXAAgRgRQgDgCgCgDQgMgPAAgTQAAgFABgEQADgRANgMQAIgIAIgEQAIgEAIgBQAEAAAEAAQAMAAALAFQAJAEAHAIQAHAGAFAJQAEAHABAKQAAADAAADgAu5qYQAAAXgQARQgRAQgWAAQgBAAAAAAQgXAAgRgQQgEgFgDgEQgGgJgCgKQgBgGAAgGQAAgXAQgQQABgBAAAAQAOgOARgBQAEgBAEAAQAMAAALAFQAJAEAIAIQAGAGAFAJQAEAJABAJQAAADAAADgAxeOOQAAAGgBAGQgEAQgLALQgRARgXAAQgXAAgRgRQgQgQAAgXQAAgXAQgQQACgCAAAAQAOgNAQgCQAEAAAEAAQAMAAALAFQACABACABQAEACADADQADACADADQAGAHAFAJQAEAHABAKQAAADAAADgAEGrPQAAARgJANQgDAFgFAFQgQAQgXAAIAAAAQgXAAgRgQQgIgIgEgKQgFgKAAgMQAAgXARgQQAOgPASgBQAEgBAEAAQAMAAALAFQAJAEAHAIQAEAEAEAFQACADACADQAEAJABAJQAAADAAADg");
	this.shape_2.setTransform(268.5,309.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ay+O2QgQgRAAgXQAAgXAQgQIADgCQANgNARgCIAHAAQAMAAALAFIAFACIAGAFIAFAFQAIAGAEAKQAEAHABAKIAAAGIgBAMQgEAQgMAMQgQAQgXAAQgXAAgRgQgARvG8QgQgQAAgXQAAgIACgIQAEgNAKgKQANgNAPgDIAEAAIAIgBQAMAAALAFQAJAEAHAIQAIAHAEAIQAEAIABAKIAAAGQAAAXgRAQQgQARgXAAQgXAAgRgRgAH1BKIgFgFQgLgPgBgTIABgJQADgRANgMQAIgIAIgEQAIgEAIAAIAHgBQANAAALAFQAJAEAHAIQAHAGAFAIQADAJACAJIAAAGIgCALQgDAQgMAMQgQARgYAAQgWAAgRgRgAvxpgQgXAAgQgQIgIgJQgGgJgCgKIgBgMQAAgXARgQIAAgBQAOgOARgCIAIAAQAMAAALAFQAJAEAHAIQAIAGAEAKQAEAHABAKIAAAGQAAAXgRARQgQAQgWAAIgBAAgADNqXQgXAAgQgRQgIgHgEgKQgEgKAAgMQAAgXAQgQQAOgOASgCIAHgBQANAAALAFQAIAEAIAIIAIAJIAEAGQADAIABAKIAAAGQABARgJANIgIAJQgQARgXAAgAJFtmQgHgHgEgIQgGgLAAgNQAAgXARgQQAOgOASgCIAHgBQANAAALAFQAIAEAIAIQAHAHAFAIQADAJABAJIAAAGQAAAXgQAQQgIAJgKAEQgKAEgMAAQgWAAgRgRg");
	this.shape_3.setTransform(268.5,309.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AlmfWIABgMIAAgGQgBgJgEgIQgFgJgHgHIgFgFQBRAFAugHQBJgKArgnQA0gwAUhpQAHgnAJhdQAIhVALguQAPhHAhg1QAmg9A4gcQAmgTBhgPQBagOApgcQAxghAchDQAUgxANhQQAQhcAMglQAWhHApgoQAVgVBYgzQBGgpAVgsIAahVQAQgxAfgPQAFgCAVgGQAQgFAIgGQAFgEAHgKQAEAKAIAIQAQAQAXAAIABAAIgCAEQgJAPgRAJQgHAEgZAJQgVAHgKAIQgXARgMAtQgRA9gGALQgTAng7AiQhUAwgMAKQgxApgbBLQgQAtgTBgQgRBYgWAzQggBJg3AjQgqAbhvARQhqAQgsAiQg0AngaBVQgPAzgIBRIgMCGQgXCmheBDQg0AlhRAHQgTACgaAAIg2gCgAnCeNQABgigHgpQgFgagNgwIgpiaQgMgvgCgcQgCgrASgcQAGgIAOgPQANgPAGgJQAYgmgQg6QgJghgihDQgZguAJgeQAEgLAKgOIASgYQAXgfADgrQADgngOgoQgUgygHgaQgLgsARgcQAMgTA4ghQAvgcACgfQABgXgjgzQgegsAQgXQAHgLASgHIAfgLQAggLAXgdQARgUAHgYIAHAJQARAQAXAAIABAAQgMAigZAdQgkAogyANQAZAgAHApQAGApgNAmQgOAmgfAbQggAbgnAJQAkBGAHBOQAHBMgZA5IgQAgQgIASgBAPQgBASAMAeQAhBVAGAlQAMBGgiArIgSAUQgLALgEAKQgHAPABAUQABAMAFAYIBQFoIgEgCQgLgFgMAAIgIABQgQABgOANIABgUgAZWXvQgegLgTgiQgPgdgFgnIgEhHQgEgpgMgaQgOghgegVQgegWgjgEQgSgCgnADQgmADgTgDQgegGgTgYIgEgGIAFAGQAQAQAXAAQAXAAARgQQAMgNADgQQAcgEAdAEQA3AGAsAeQAsAeAZAxQAaAxgBA2QAAA2ABALQAFAkAZAMQAWALAfgOQASgIAjgWQAsgZA0AEQAwADAlAYQgQADgMANQgKAKgEANIgDgBQgtgehTAtQgqAXgVAHQgUAGgSAAQgPAAgNgEgAScRIQgjgXgNgnQgLgiAFgsQADgfANgvQAWhMBXjqQBIi/AYh6QgdAVhKgKQhKgKgdAUQgPAKgPAaQgUAigGAHQgVAaghALIgRAEQAIgNAAgRIAAgGQgBgJgEgIIgDgHQAJgBAFgCQAXgJARgmQAWgtAMgLQAVgUAkgCQAUgCAxAGQAtAEAVgDQAWgDAPgKQAEAIAHAIQAQAQAXAAQAMAAAKgEQABAfgIAlQgHAggVA+QhfEUhVDyQgNAjgCAXQgDAhAPAVQAMAQAbAMIAvATIAHADQgJAEgHAIQgNANgDARQgIACgJAAQgZAAgYgQgA+D6vIAAkoIJ4AAIAAEog");
	this.shape_4.setTransform(192.4,200.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_4},{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.2,29.6);


(lib.an_RadioButton = function(options) {
	this._element = new $.an.RadioButton(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.an_CSS = function(options) {
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.an_Checkbox = function(options) {
	this._element = new $.an.Checkbox(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.updruta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo18();
	this.instance.parent = this;
	this.instance.setTransform(180,30.2,1,1,0,0,0,180,30.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.updruta, new cjs.Rectangle(0,0,360,60.4), null);


(lib.Símbolo15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo20();
	this.instance.parent = this;
	this.instance.setTransform(180,30.2,1,1,0,0,0,180,30.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo15, new cjs.Rectangle(0,0,360,60.4), null);


(lib.sa4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo13();
	this.instance.parent = this;
	this.instance.setTransform(62.3,24.8,1,1,0,0,0,62.3,20.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sa4, new cjs.Rectangle(0,3.9,124.5,41.7), null);


(lib.sa3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo11();
	this.instance.parent = this;
	this.instance.setTransform(62.3,24.8,1,1,0,0,0,62.3,20.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sa3, new cjs.Rectangle(0,3.9,124.5,41.7), null);


(lib.sa2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo10();
	this.instance.parent = this;
	this.instance.setTransform(62.3,24.8,1,1,0,0,0,62.3,20.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sa2, new cjs.Rectangle(0,3.9,124.5,41.7), null);


(lib.sa1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo2();
	this.instance.parent = this;
	this.instance.setTransform(62.3,24.8,1,1,0,0,0,62.3,20.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sa1, new cjs.Rectangle(0,3.9,124.5,41.7), null);


(lib.guardar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo19();
	this.instance.parent = this;
	this.instance.setTransform(180,30.2,1,1,0,0,0,180,30.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.guardar, new cjs.Rectangle(0,0,360,60.4), null);


(lib.btnrutas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo7();
	this.instance.parent = this;
	this.instance.setTransform(152.4,28.8,1,1,0,0,0,152.4,28.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnrutas, new cjs.Rectangle(0,0,304.8,57.6), null);


(lib.btnregistrar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo4();
	this.instance.parent = this;
	this.instance.setTransform(152.4,28.8,1,1,0,0,0,152.4,28.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnregistrar, new cjs.Rectangle(0,0,304.8,57.6), null);


(lib.btnlogin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo3();
	this.instance.parent = this;
	this.instance.setTransform(152.4,28.8,1,1,0,0,0,152.4,28.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnlogin, new cjs.Rectangle(0,0,304.8,57.6), null);


(lib.btnentrar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo5();
	this.instance.parent = this;
	this.instance.setTransform(152.4,28.8,1,1,0,0,0,152.4,28.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnentrar, new cjs.Rectangle(0,0,304.8,57.6), null);


(lib.btndetalle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo8();
	this.instance.parent = this;
	this.instance.setTransform(105.6,26.6,1,1,0,0,0,105.6,26.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btndetalle, new cjs.Rectangle(0,0,211.2,53.1), null);


(lib.btncomo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo6();
	this.instance.parent = this;
	this.instance.setTransform(152.4,28.8,1,1,0,0,0,152.4,28.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btncomo, new cjs.Rectangle(0,0,304.8,57.6), null);


(lib.atrasc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo14();
	this.instance.parent = this;
	this.instance.setTransform(62.3,24.8,1,1,0,0,0,62.3,20.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.atrasc, new cjs.Rectangle(0,3.9,124.5,41.7), null);


(lib.atrasb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo12();
	this.instance.parent = this;
	this.instance.setTransform(62.3,24.8,1,1,0,0,0,62.3,20.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.atrasb, new cjs.Rectangle(0,3.9,124.5,41.7), null);


(lib.atras1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo9();
	this.instance.parent = this;
	this.instance.setTransform(62.3,24.8,1,1,0,0,0,62.3,20.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.atras1, new cjs.Rectangle(0,3.9,124.5,41.7), null);


(lib.admin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo16();
	this.instance.parent = this;
	this.instance.setTransform(152.4,28.8,1,1,0,0,0,152.4,28.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.admin, new cjs.Rectangle(0,0,304.8,57.6), null);


(lib.addruta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo17();
	this.instance.parent = this;
	this.instance.setTransform(180,30.2,1,1,0,0,0,180,30.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.addruta, new cjs.Rectangle(0,0,360,60.4), null);


// stage content:
(lib.Prototipo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.btnlogin.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop(1);
		}
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.btnregistrar.addEventListener("click",  fl_ClickToGoToAndStopAtFrame_4.bind(this));
	}
	this.frame_1 = function() {
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.btnentrar.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			this.gotoAndStop(2);
		}
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.btnadmin.addEventListener("click", fl_ClickToGoToAndStopAtFrame_25.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_25()
		{
			this.gotoAndStop(6);
		}
	}
	this.frame_2 = function() {
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.btncomo.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop(3);
		}
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.btnrutas.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndStop(5);
		}
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.sa1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_13.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_13()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_3 = function() {
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.btndetalle.addEventListener("click", fl_ClickToGoToAndStopAtFrame_9.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_9()
		{
			this.gotoAndStop(4);
		}
		
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.atras1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_10.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_10()
		{
			this.gotoAndStop(2);
		}
		
		
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.sa2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_14.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_14()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_4 = function() {
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.atrasb.addEventListener("click", fl_ClickToGoToAndStopAtFrame_11.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_11()
		{
			this.gotoAndStop(3);
		}
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.sa3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_15.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_15()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_5 = function() {
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.atrasc.addEventListener("click", fl_ClickToGoToAndStopAtFrame_12.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_12()
		{
			this.gotoAndStop(2);
		}
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.sa4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_16.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_16()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_6 = function() {
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.btnaddruta.addEventListener("click", fl_ClickToGoToAndStopAtFrame_17.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_17()
		{
			this.gotoAndStop(7);
		}
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.btnupdruta.addEventListener("click", fl_ClickToGoToAndStopAtFrame_18.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_18()
		{
			this.gotoAndStop(8);
		}
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.sa4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_19.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_19()
		{
			this.gotoAndStop(1);
		}
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.atrasc.addEventListener("click", fl_ClickToGoToAndStopAtFrame_20.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_20()
		{
			this.gotoAndStop(6);
		}
	}
	this.frame_7 = function() {
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.sa4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_21.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_21()
		{
			this.gotoAndStop(1);
		}
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.atrasc.addEventListener("click", fl_ClickToGoToAndStopAtFrame_22.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_22()
		{
			this.gotoAndStop(6);
		}
		
		
		
		
		
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.btnguardar.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_9.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_9()
		{
			this.gotoAndPlay(9);
		}
	}
	this.frame_8 = function() {
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.sa4.addEventListener("click", fl_ClickToGoToAndStopAtFrame_23.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_23()
		{
			this.gotoAndStop(1);
		}
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.atrasc.addEventListener("click", fl_ClickToGoToAndStopAtFrame_24.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_24()
		{
			this.gotoAndStop(6);
		}
		
		
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.btnupd.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_10.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_10()
		{
			this.gotoAndPlay(9);
		}
	}
	this.frame_34 = function() {
		this.gotoAndStop(6);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(26).call(this.frame_34).wait(1));

	// Capa 3
	this.instance = new lib.an_Checkbox({'id': '', 'label':'', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-checkbox'});

	this.instance.setTransform(268.5,786,1,1,0,0,0,50,11);

	this.instance_1 = new lib.an_Checkbox({'id': 'instance_1', 'label':'', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-checkbox'});

	this.instance_1.setTransform(110.8,787,1,1,0,0,0,50,11);

	this.instance_2 = new lib.an_Checkbox({'id': 'instance_2', 'label':'', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-checkbox'});

	this.instance_2.setTransform(404,625.8,1,1,0,0,0,50,11);

	this.instance_3 = new lib.an_Checkbox({'id': 'instance_3', 'label':'', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-checkbox'});

	this.instance_3.setTransform(280.6,634.8,1,1,0,0,0,50,11);

	this.instance_4 = new lib.an_Checkbox({'id': 'instance_4', 'label':'', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-checkbox'});

	this.instance_4.setTransform(128.1,648,1,1,0,0,0,50,11);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOA5IAAgeIg1AAIAAgHIAQgTIAPgTIAMgUIAKgSIAIAAIAABMIARAAIAAAHIgRAAIAAAegAACgXIgKARIgMAOIgKAMIAsAAIAAg/IgMAUg");
	this.shape.setTransform(439.5,620.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAkQgHgHAAgJQAAgUAcgFIAYgEQAAgagUAAQgMAAgNALIAAgJQAFgDAHgDQAIgCAGAAQANAAAGAIQAHAHAAAPIAAA0IgHAAIAAgRIAAAAQgFAIgGAGQgIAEgIAAQgLAAgHgGgAABAAQgMACgFAEQgGAEABAKQgBAGAGAFQAEAFAIAAQALAAAIgJQAIgJAAgNIAAgHg");
	this.shape_1.setTransform(426.6,621.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAyQgKgLAAgTQAAgUALgLQAKgMAQAAQASAAAHAPIABAAIAAg0IAHAAIAAB3IgHAAIAAgOIgBAAQgEAHgHAEQgIAFgJAAQgOAAgKgLgAgTgGQgIAIAAARQAAARAHAJQAIAKAMAAQANAAAIgJQAHgJAAgMIAAgPQAAgLgHgHQgIgJgLABQgMgBgJALg");
	this.shape_2.setTransform(418,620);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAkQgGgHAAgJQAAgUAcgFIAYgEQAAgagUAAQgMAAgNALIAAgJQAEgDAJgDQAHgCAGAAQAMAAAIAIQAGAHAAAPIAAA0IgHAAIAAgRIAAAAQgFAIgHAGQgHAEgIAAQgLAAgIgGgAAAAAQgLACgGAEQgEAEAAAKQAAAGAEAFQAFAFAJAAQAKAAAIgJQAIgJAAgNIAAgHg");
	this.shape_3.setTransform(409.6,621.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSApIAAhQIAHAAIAAASIAAAAQADgJAGgFQAFgFAIAAQAEAAAEABIAAAIQgDgDgFAAQgKAAgFAKQgHAKAAARIAAAmg");
	this.shape_4.setTransform(403.6,621.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXAkQgGgHAAgJQAAgUAcgFIAYgEQAAgagUAAQgMAAgNALIAAgJQAEgDAJgDQAHgCAGAAQANAAAGAIQAHAHAAAPIAAA0IgHAAIAAgRIgBAAQgDAIgHAGQgIAEgIAAQgLAAgIgGgAABAAQgMACgFAEQgGAEAAAKQAAAGAGAFQAEAFAIAAQALAAAIgJQAIgJAAgNIAAgHg");
	this.shape_5.setTransform(396.2,621.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfA5IAAhxIAcAAQAQAAAJAIQAKAJAAAPQAAAQgLAJQgKAKgSAAIgQAAIAAAugAgXAEIAQAAQAPAAAIgGQAIgIAAgNQAAgZgdAAIgSAAg");
	this.shape_6.setTransform(389,620.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNA3QgGgDgFgHQgEgGgCgKQgDgJAAgNQAAgOADgMQADgMAGgJQAGgIAIgFQAHgFALAAQAJAAAHADIAAAIQgIgEgJAAQgIAAgGAEQgHAEgEAIQgFAHgDALQgCAKAAAMIAAAAQAJgSATAAQAHAAAFACQAGADAEAFQAEAEACAGQADAGAAAIQAAAIgDAHQgCAHgFAFQgEAFgHADQgGADgHAAQgHAAgGgEgAgIgEQgFACgEADQgDAEgCAFQgCAFAAAFQAAAGACAGIAFAKQADAFAFACQAFADAEAAQAGAAAFgCQAEgCAEgEQADgEACgGQACgFAAgHQAAgGgCgGQgCgFgDgEQgDgDgFgCQgEgDgGAAQgFAAgEADg");
	this.shape_7.setTransform(304.6,781.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWAkQgHgGAAgLQAAgTAcgFIAYgDQAAgbgUAAQgMAAgNALIAAgJQAEgEAIgCQAIgCAGgBQAMABAIAHQAGAIAAAPIAAAzIgHAAIAAgPIAAAAQgFAHgHAFQgHAFgIABQgMAAgGgHgAAAAAQgLACgGAEQgEAEAAAJQAAAIAEAEQAFAFAJAAQALAAAHgJQAIgIAAgOIAAgHg");
	this.shape_8.setTransform(291.8,783);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAyQgKgLAAgTQAAgUALgLQALgMAOAAQATAAAHAPIABAAIAAg0IAHAAIAAB3IgHAAIAAgPIgBAAQgDAIgIAFQgIAEgIAAQgQAAgJgLgAgSgGQgJAIAAASQAAAQAIAJQAHAKAMgBQANAAAHgJQAIgIAAgMIAAgQQAAgJgHgJQgIgHgMgBQgLAAgIALg");
	this.shape_9.setTransform(283.1,781.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXAkQgGgGAAgLQAAgTAcgFIAYgDQAAgbgUAAQgMAAgNALIAAgJQAEgEAJgCQAHgCAGgBQANABAGAHQAHAIAAAPIAAAzIgHAAIAAgPIgBAAQgDAHgHAFQgIAFgIABQgLAAgIgHgAABAAQgMACgFAEQgGAEAAAJQAAAIAGAEQAEAFAIAAQALAAAIgJQAIgIAAgOIAAgHg");
	this.shape_10.setTransform(274.7,783);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSApIAAhQIAHAAIAAASIABAAQACgJAGgFQAFgFAIAAQAEAAAEABIAAAIQgEgDgFAAQgJAAgGAKQgGAKAAARIAAAmg");
	this.shape_11.setTransform(268.7,782.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWAkQgHgGAAgLQAAgTAcgFIAYgDQAAgbgUAAQgMAAgNALIAAgJQAFgEAHgCQAIgCAGgBQAMABAHAHQAHAIAAAPIAAAzIgHAAIAAgPIAAAAQgEAHgHAFQgIAFgIABQgMAAgGgHgAAAAAQgLACgGAEQgEAEAAAJQAAAIAEAEQAFAFAJAAQALAAAHgJQAIgIAAgOIAAgHg");
	this.shape_12.setTransform(261.4,783);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfA5IAAhxIAcAAQAQAAAJAIQAKAJAAAPQAAAQgLAJQgKAKgSAAIgQAAIAAAugAgXAEIAQAAQAPAAAIgGQAIgIAAgNQAAgZgdAAIgSAAg");
	this.shape_13.setTransform(254.1,781.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeA1IAAgJQANAIAMAAQAMAAAIgHQAIgHAAgLQAAgNgJgGQgJgHgPAAIgJAAIAAgFIAIAAQAOAAAIgHQAIgGAAgMQAAgKgGgGQgGgGgKAAQgKAAgMAIIAAgIQANgHAKAAQANAAAIAIQAIAHAAAMQAAAXgXAGIAAABQAMABAHAGQAIAIAAAMQAAAPgLAJQgKAJgPAAQgNAAgMgGg");
	this.shape_14.setTransform(317.5,630.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAkQgGgGAAgKQAAgVAcgEIAYgDQAAgbgUAAQgMAAgNALIAAgJQAEgEAJgCQAHgCAGgBQANAAAGAJQAHAHAAAPIAAAzIgHAAIAAgQIgBAAQgDAJgIAFQgHAEgIAAQgLABgIgHgAABAAQgMACgFAEQgFAEgBAKQABAGAFAFQAEAFAIAAQALAAAIgJQAIgIAAgOIAAgHg");
	this.shape_15.setTransform(305,632);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgZAyQgJgLAAgTQAAgUAKgLQALgMAPAAQASAAAIAPIAAAAIAAg0IAIAAIAAB3IgIAAIAAgPIAAAAQgFAIgHAEQgIAFgIAAQgQAAgJgLgAgSgHQgJAJAAARQAAARAHAJQAIAJAMAAQANABAIgKQAHgIAAgMIAAgQQAAgKgHgIQgHgHgMgBQgMABgIAJg");
	this.shape_16.setTransform(296.3,630.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAkQgHgGAAgKQAAgVAcgEIAYgDQAAgbgUAAQgMAAgNALIAAgJQAFgEAHgCQAIgCAGgBQAMAAAIAJQAGAHAAAPIAAAzIgHAAIAAgQIAAAAQgEAJgHAFQgIAEgIAAQgMABgGgHgAAAAAQgLACgGAEQgEAEAAAKQAAAGAEAFQAFAFAJAAQALAAAHgJQAIgIAAgOIAAgHg");
	this.shape_17.setTransform(287.9,632);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgSApIAAhQIAHAAIAAASIAAAAQADgJAGgFQAFgFAIAAQAFAAADABIAAAIQgEgDgEAAQgKAAgGAKQgGAKAAARIAAAmg");
	this.shape_18.setTransform(281.9,631.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgXAkQgGgGAAgKQAAgVAcgEIAYgDQAAgbgUAAQgMAAgNALIAAgJQAEgEAJgCQAHgCAGgBQAMAAAIAJQAGAHAAAPIAAAzIgHAAIAAgQIAAAAQgFAJgHAFQgHAEgIAAQgLABgIgHgAAAAAQgLACgGAEQgEAEAAAKQAAAGAEAFQAFAFAJAAQAKAAAIgJQAIgIAAgOIAAgHg");
	this.shape_19.setTransform(274.6,632);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgfA5IAAhxIAcAAQAQAAAJAIQAKAJAAAPQAAAQgLAJQgKAKgSAAIgQAAIAAAugAgXAEIAQAAQAPAAAIgGQAIgIAAgNQAAgZgdAAIgSAAg");
	this.shape_20.setTransform(267.3,630.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgcA1IAAgIQAKAGALAAQANAAAIgIQAIgHAAgNQAAgbgeAAIgRABIADg2IAvAAIAAAHIgoAAIgCAoIALAAQARAAAJAJQAKAHgBAQQABAQgLAKQgJAKgRAAQgMAAgJgFg");
	this.shape_21.setTransform(144.4,782.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgWAkQgHgHAAgKQAAgTAcgFIAYgEQAAgagUAAQgMAAgNALIAAgJQAFgEAHgCQAIgDAGAAQAMABAIAHQAGAIAAAPIAAA0IgHAAIAAgQIAAAAQgFAHgGAFQgIAGgIAAQgMgBgGgGgAAAAAQgLACgGAEQgEAEAAAJQAAAIAEAEQAFAFAJAAQALAAAHgJQAIgJAAgNIAAgHg");
	this.shape_22.setTransform(131.7,784);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgZAyQgKgLAAgTQAAgTALgMQALgMAOAAQATAAAHAPIABAAIAAg0IAHAAIAAB3IgHAAIAAgPIgBAAQgDAIgIAFQgIAEgJAAQgPAAgJgLgAgTgGQgIAIAAASQAAAQAIAJQAHAKAMAAQANgBAHgIQAIgJAAgMIAAgPQAAgKgHgJQgIgHgMAAQgLAAgJAKg");
	this.shape_23.setTransform(123,782.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgXAkQgGgHAAgKQAAgTAcgFIAYgEQAAgagUAAQgMAAgNALIAAgJQAEgEAJgCQAHgDAGAAQANABAGAHQAHAIAAAPIAAA0IgHAAIAAgQIgBAAQgDAHgIAFQgHAGgIAAQgLgBgIgGgAABAAQgMACgFAEQgFAEgBAJQABAIAFAEQAEAFAIAAQALAAAIgJQAIgJAAgNIAAgHg");
	this.shape_24.setTransform(114.6,784);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSApIAAhQIAHAAIAAASIABAAQACgJAGgFQAFgFAIAAQAFAAADABIAAAIQgDgDgGAAQgJAAgFAKQgHAKAAARIAAAmg");
	this.shape_25.setTransform(108.6,783.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgWAkQgHgHAAgKQAAgTAcgFIAYgEQAAgagUAAQgMAAgNALIAAgJQAFgEAHgCQAIgDAGAAQANABAGAHQAHAIAAAPIAAA0IgHAAIAAgQIAAAAQgFAHgGAFQgIAGgIAAQgLgBgHgGgAABAAQgMACgFAEQgGAEAAAJQAAAIAGAEQAEAFAIAAQALAAAIgJQAIgJAAgNIAAgHg");
	this.shape_26.setTransform(101.3,784);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgfA5IAAhxIAcAAQAQAAAJAIQAKAJAAAPQAAAQgLAJQgKAKgSAAIgQAAIAAAugAgXAEIAQAAQAPAAAIgGQAIgIAAgNQAAgZgdAAIgSAAg");
	this.shape_27.setTransform(94,782.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgfA6IAAgGIABgJIACgIIAFgHIAGgGIAIgGIAJgHIAJgIIAIgHIAFgJQACgFAAgGQAAgLgGgHQgGgGgLAAQgHAAgHADQgHAEgHAGIAAgJQAHgFAHgDQAIgDAHAAQAHAAAFADQAGACAEADQAEAEACAGQACAFAAAHQAAAHgCAGIgGALIgJAJIgLAIIgMAJIgJAJQgDAEgCAEQgBAEAAAGIAAABIA3AAIAAAHg");
	this.shape_28.setTransform(163.3,642.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgWAkQgHgHAAgKQAAgTAcgFIAYgEQAAgagUAAQgMAAgNALIAAgJQAFgEAHgCQAIgDAGAAQANABAGAHQAHAIAAAPIAAA0IgHAAIAAgQIAAAAQgFAHgGAFQgIAGgIAAQgLgBgHgGgAABAAQgMACgFAEQgGAEAAAJQAAAIAGAEQAEAFAJAAQAKAAAIgJQAIgJAAgNIAAgHg");
	this.shape_29.setTransform(150.8,644);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgZAyQgKgLAAgTQAAgTALgMQAKgMAQAAQASAAAHAPIABAAIAAg0IAHAAIAAB3IgHAAIAAgPIgBAAQgEAIgHAFQgIAEgJAAQgOAAgKgLgAgTgGQgIAIAAASQAAAQAHAJQAIAKAMAAQANgBAIgIQAHgJAAgMIAAgPQAAgKgHgJQgIgHgLAAQgMAAgJAKg");
	this.shape_30.setTransform(142.1,642.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXAkQgGgHAAgKQAAgTAcgFIAYgEQAAgagUAAQgMAAgNALIAAgJQAEgEAJgCQAHgDAGAAQAMABAIAHQAGAIAAAPIAAA0IgHAAIAAgQIAAAAQgFAHgHAFQgHAGgIAAQgLgBgIgGgAAAAAQgLACgGAEQgEAEAAAJQAAAIAEAEQAFAFAJAAQAKAAAIgJQAIgJAAgNIAAgHg");
	this.shape_31.setTransform(133.7,644);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgSApIAAhQIAHAAIAAASIAAAAQADgJAGgFQAFgFAIAAQAEAAAEABIAAAIQgDgDgFAAQgKAAgFAKQgHAKAAARIAAAmg");
	this.shape_32.setTransform(127.7,643.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgXAkQgGgHAAgKQAAgTAcgFIAYgEQAAgagUAAQgMAAgNALIAAgJQAEgEAJgCQAHgDAGAAQANABAGAHQAHAIAAAPIAAA0IgHAAIAAgQIgBAAQgDAHgHAFQgIAGgIAAQgLgBgIgGgAABAAQgMACgFAEQgGAEAAAJQAAAIAGAEQAEAFAIAAQALAAAIgJQAIgJAAgNIAAgHg");
	this.shape_33.setTransform(120.4,644);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgfA5IAAhxIAcAAQAQAAAJAIQAKAJAAAPQAAAQgLAJQgKAKgSAAIgQAAIAAAugAgXAEIAQAAQAPAAAIgGQAIgIAAgNQAAgZgdAAIgSAAg");
	this.shape_34.setTransform(113.1,642.4);

	this.instance_5 = new lib.Símbolo22();
	this.instance_5.parent = this;
	this.instance_5.setTransform(98.5,525,1,1,0,0,0,43.8,11.6);

	this.btndetalle = new lib.btndetalle();
	this.btndetalle.parent = this;
	this.btndetalle.setTransform(366.3,510.1,1,1,0,0,0,105.6,26.6);
	this.btndetalle.alpha = 0.852;

	this.instance_6 = new lib.an_Checkbox({'id': 'instance_6', 'label':'', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-checkbox'});

	this.instance_6.setTransform(91.3,528.4,1,1,0,0,0,50,11);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#009999").s().p("A9uOVQgKAAAAgKIAAjAQAAgKAKAAINYAAQAKAAAAAKIAADAQAAAKgKAAgAktOLQgKAAAAgKIAAjAQAAgKAKAAINXAAQAKAAAAAKIAADAQAAAKgKAAgA6vniQgKAAAAgKIAAjAQAAgKAKAAINYAAQAKAAAAAKIAADAQAAAKgKAAgAippaQgKAAAAgKIAAjAQAAgKAKAAINXAAQAKAAAAAKIAADAQAAAKgKAAgAQXrAQgKAAAAgKIAAjAQAAgKAKAAINYAAQAKAAAAAKIAADAQAAAKgKAAg");
	this.shape_35.setTransform(265,701.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgWAkQgHgHAAgKQAAgUAcgEIAYgEQAAgagUAAQgMAAgNALIAAgJQAFgEAHgCQAIgCAGAAQAMAAAIAHQAGAIAAAPIAAA0IgHAAIAAgRIAAAAQgEAJgHAEQgIAGgIAAQgMgBgGgGgAAAAAQgLACgGAEQgEAEAAAJQAAAIAEAEQAFAFAJAAQALAAAHgJQAIgJAAgNIAAgHg");
	this.shape_36.setTransform(152.5,355.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgZAyQgKgLAAgTQAAgTALgMQALgMAOAAQATAAAHAPIABAAIAAg0IAHAAIAAB3IgHAAIAAgOIgBAAQgEAHgHAEQgIAFgJAAQgOAAgKgLgAgTgGQgIAIAAASQAAAQAHAJQAIAKAMAAQANgBAIgIQAHgJAAgMIAAgPQAAgLgHgHQgHgJgNABQgLgBgJALg");
	this.shape_37.setTransform(143.8,353.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgXAkQgGgHAAgKQAAgUAcgEIAYgEQAAgagUAAQgMAAgNALIAAgJQAEgEAJgCQAHgCAGAAQAMAAAIAHQAGAIAAAPIAAA0IgHAAIAAgRIgBAAQgDAJgIAEQgHAGgIAAQgLgBgIgGgAAAAAQgLACgGAEQgEAEgBAJQABAIAEAEQAFAFAIAAQAMAAAHgJQAIgJAAgNIAAgHg");
	this.shape_38.setTransform(135.4,355.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgSApIAAhQIAHAAIAAASIAAAAQADgJAGgFQAFgFAIAAQAFAAADABIAAAIQgDgDgGAAQgJAAgFAKQgHAKAAARIAAAmg");
	this.shape_39.setTransform(129.4,355.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgXAkQgGgHAAgKQAAgUAcgEIAYgEQAAgagUAAQgMAAgNALIAAgJQAFgEAHgCQAIgCAGAAQAMAAAHAHQAHAIAAAPIAAA0IgHAAIAAgRIgBAAQgEAJgGAEQgIAGgIAAQgLgBgIgGgAABAAQgMACgFAEQgGAEAAAJQAAAIAGAEQAEAFAIAAQALAAAIgJQAIgJAAgNIAAgHg");
	this.shape_40.setTransform(122.1,355.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgXAkQgGgHAAgKQAAgUAcgEIAYgEQAAgagUAAQgMAAgNALIAAgJQAEgDAJgDQAHgCAGAAQANAAAGAHQAHAIAAAPIAAA0IgHAAIAAgRIgBAAQgDAJgIAEQgHAGgIgBQgLAAgIgGgAABAAQgMACgFAEQgGAEAAAJQAAAIAGAEQAEAFAIAAQALAAAIgJQAIgJAAgNIAAgHg");
	this.shape_41.setTransform(316.1,319.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgZAyQgJgLAAgTQAAgTAKgMQALgMAPAAQASAAAIAPIAAAAIAAg0IAIAAIAAB3IgIAAIAAgOIAAAAQgFAHgHAFQgIAEgJAAQgPAAgJgLgAgTgGQgIAIAAASQAAAQAHAJQAIAKAMAAQANgBAIgIQAHgJAAgMIAAgPQAAgLgHgHQgHgJgMABQgMgBgJALg");
	this.shape_42.setTransform(307.5,317.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgWAkQgHgHAAgKQAAgUAcgEIAYgEQAAgagUAAQgMAAgNALIAAgJQAFgDAHgDQAIgCAGAAQAMAAAIAHQAGAIAAAPIAAA0IgHAAIAAgRIAAAAQgFAJgGAEQgIAGgIgBQgMAAgGgGgAAAAAQgLACgGAEQgEAEAAAJQAAAIAEAEQAFAFAJAAQALAAAHgJQAIgJAAgNIAAgHg");
	this.shape_43.setTransform(299.1,319.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgSApIAAhQIAHAAIAAASIAAAAQADgJAGgFQAFgFAIAAQAFAAADABIAAAIQgEgDgEAAQgKAAgFAKQgHAKAAARIAAAmg");
	this.shape_44.setTransform(293.1,319.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgXAkQgGgHAAgKQAAgUAcgEIAYgEQAAgagUAAQgMAAgNALIAAgJQAEgDAJgDQAHgCAGAAQAMAAAIAHQAGAIAAAPIAAA0IgHAAIAAgRIgBAAQgDAJgIAEQgHAGgIgBQgLAAgIgGgAABAAQgMACgGAEQgEAEgBAJQABAIAEAEQAFAFAIAAQAMAAAHgJQAIgJAAgNIAAgHg");
	this.shape_45.setTransform(285.7,319.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AALA6IAAhnQgGAFgGAEQgHADgIADIAAgGIAJgEIAHgFIAHgGIAIgGIADAAIAABzg");
	this.shape_46.setTransform(126.6,213.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgXAkQgGgHAAgJQAAgUAcgFIAYgEQAAgagUAAQgMAAgNALIAAgJQAEgDAJgDQAHgDAGABQAMgBAIAJQAGAHAAAPIAAAzIgHAAIAAgQIgBAAQgDAIgIAGQgHAEgIAAQgLAAgIgGgAABAAQgMACgGAEQgEAEgBAKQABAGAEAFQAFAFAIAAQAMAAAHgJQAIgJAAgNIAAgHg");
	this.shape_47.setTransform(115.6,215.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgZAyQgJgLAAgTQAAgUAKgLQAKgMAPAAQATAAAIAPIAAAAIAAg0IAIAAIAAB3IgIAAIAAgOIAAAAQgEAHgIAEQgIAFgIAAQgPAAgKgLgAgSgHQgJAJAAARQAAARAIAJQAHAJAMAAQANABAHgJQAIgJAAgMIAAgQQAAgKgHgHQgIgJgMAAQgLAAgIAKg");
	this.shape_48.setTransform(107,213.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgWAkQgHgHAAgJQAAgUAcgFIAYgEQAAgagUAAQgMAAgNALIAAgJQAFgDAHgDQAIgDAGABQANgBAGAJQAHAHAAAPIAAAzIgHAAIAAgQIgBAAQgEAIgGAGQgIAEgIAAQgLAAgHgGgAABAAQgMACgFAEQgGAEAAAKQAAAGAGAFQAEAFAIAAQALAAAIgJQAIgJAAgNIAAgHg");
	this.shape_49.setTransform(98.6,215.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgWAkQgHgHAAgJQAAgUAcgFIAYgEQAAgagUAAQgMAAgNALIAAgJQAEgDAJgDQAHgDAGABQAMgBAIAJQAGAHAAAPIAAAzIgHAAIAAgQIAAAAQgFAIgHAGQgHAEgIAAQgMAAgGgGgAAAAAQgLACgGAEQgEAEAAAKQAAAGAEAFQAFAFAJAAQALAAAHgJQAIgJAAgNIAAgHg");
	this.shape_50.setTransform(85.2,215.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(2,1,1).p("AuppkQAAAVgQAPQgIAIgJADQgLAFgMAAQgOAAgMgGQgHgEgHgGQgQgPAAgVQAAgWAQgPQARgPAXAAQAXAAARAPQAQAPAAAWgAoXJlQAAAQgJAMQgEAEgEAEQgHAHgJAFQgLAEgMAAQgPAAgMgGQgGgDgHgHQgMgLgDgOQgCgFAAgGQAAgWARgPQAEgEAFgDQANgIASAAQAXAAAQAPQADADACACQAMAOAAASgAQaGVQAAAQgIAMQgEAFgEADQgIAHgJAFQgKAEgNAAQgOAAgMgGQgHgDgGgHQgMgKgDgOQAAgBAAAAQgCgFAAgGQAAgWARgPQAEgEAFgDQAAAAABAAQANgIAQAAQAXAAARAPQACADADACQALAOAAASg");
	this.shape_51.setTransform(148.2,276.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#009999").s().p("AwlMpQgKAAAAgKIAAjAQAAgKAKAAINYAAQAKAAAAAKIAADAQAAAKgKAAgAI+G9QgKAAABgKIAAjAQgBgKAKAAINYAAQALAAgBAKIAADAQABAKgLAAgA2WpUQgKAAAAgKIAAjAQAAgKAKAAINYAAQAKAAAAAKIAADAQAAAKgKAAg");
	this.shape_52.setTransform(201.8,283.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("ApqKTQgGgEgHgFQgMgLgDgPIgCgLQAAgVARgQIAJgHQANgIARAAQAYAAAQAPIAFAFQAMAOAAASQgBAQgIAMIgIAJQgHAGgJAEQgLAFgNAAQgOAAgMgGgAPIHDQgHgEgHgFQgLgLgDgOIAAgBQgCgFAAgGQAAgVAQgQQAFgEAEgCIACgBQANgIAQAAQAXAAARAPIAFAFQALAOAAASQAAAPgIANIgIAJQgIAGgJAEQgKAFgNAAQgOAAgMgGgAv7o2QgHgEgHgFQgQgPAAgWQAAgVAQgQQARgPAXAAQAXAAAQAPQARAQAAAVQAAAWgRAPQgHAHgJAEQgLAEgMAAQgOAAgMgGg");
	this.shape_53.setTransform(148.2,276.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0000CC").s().p("Ab2NaIAEAEQANAOAbAWIAGAGQgRADgQAGQgJgggIgXgAatL2QgSgKgkgJQgngKgQgIIgHgEIABAAQAcgKAkAEQAYADApANQAWAHAFAJQAGALgIAOIgDAEIADARIABAFQgRgXgXgNgA1DELQAAgRgMgOQApgPBRgMQCLgVBHgFQAsgEBNgCQBYgCAigCQAdgCAPgGQALgFALgMIATgUQA0g7A1gNQAWgGApAAIBLgBQBagBAqANQAVAIAfAPIAzAaQBAAcAugOQABghAZgeQAYgbAjgNQAdgLAngDQAagBAuADQAYACAPAEIgBABQgFADgEADQgRAQAAAVQAAAGACAFIAAABIgBAAIgzgHQgegEgVACQgbADgVANQgYAOgJAXIgHAYQgEAOgGAIQgLAPgaAEQgvAKhEgcQhLgjgngLQglgLgvgCQgegBg4ACQgsACgZAFQglAIgYATQgKAJgQATQgRAVgJAIQggAcg2AGQgZADhJgCQhEgBhVAJQg8AFiSAUIgyAJQgcAGgUAIQgOAGgKADQAJgMAAgQgA3TERQgggFgLgSQgNgSAQgqQASgugIgTQgDgIgHgIIgOgOQgggfgTgpQgUgngEgrQgEghAFgxIAHhRQAFhngzgxIgXgUQgOgNgGgKQgLgSgBgqQAAgoAJgRIAHgNQAFgJABgGQABgJgGgLIgMgSQgUgcgJgiQgJgiAEgiIADgpQgCgYgOgLQgFgEgLgEIgRgHQgmgSgFhJQAMAHAOAAQANgBAKgEQAAAOAFAIQAGANAUAIIAgARQAiAYgEBBIgDAxQgBAcAHAUQAEAKAXAjQATAbABAVQABARgOAlQgOAiAEAUQAEAUAaAYQAiAfAGAHQALAPAGAXQAEAOAEAbQAJBHgDArIgHAwQgEAeAAATQAAA/AkAyQAGAJAVAZQASAVAIAPQAPAcABAiQAAAggPAdQAJAKARABQAHAAAPgCIgJAGQgQAQAAAVIABAMQgRgCgQgEg");
	this.shape_54.setTransform(229.4,310.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAPA5IAAgeIg1AAIAAgHIAPgTIAPgTIAMgUIAKgSIAIAAIAABMIARAAIAAAHIgRAAIAAAegAACgXIgLARIgLAOIgKAMIAtAAIAAg/IgNAUg");
	this.shape_55.setTransform(445.1,573.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgXAkQgGgGAAgKQAAgVAcgEIAYgDQAAgbgUAAQgMAAgNALIAAgJQAEgEAJgCQAHgCAGgBQANAAAGAJQAHAHAAAPIAAAzIgHAAIAAgQIgBAAQgDAJgHAFQgIAEgIAAQgLABgIgHgAABAAQgMACgFAEQgGAEAAAKQAAAGAGAFQAEAFAIAAQALAAAIgJQAIgIAAgOIAAgHg");
	this.shape_56.setTransform(432.2,575.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgZAyQgJgLAAgTQAAgUAKgLQALgMAPAAQASAAAIAPIAAAAIAAg0IAIAAIAAB3IgIAAIAAgPIAAAAQgFAIgHAEQgIAFgJAAQgPAAgJgLgAgTgHQgIAJAAARQAAARAHAJQAIAJAMAAQANABAIgKQAHgIAAgMIAAgQQAAgKgHgIQgHgHgMgBQgMABgJAJg");
	this.shape_57.setTransform(423.6,573.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgWAkQgHgGAAgKQAAgVAcgEIAYgDQAAgbgUAAQgMAAgNALIAAgJQAFgEAHgCQAIgCAGgBQAMAAAIAJQAGAHAAAPIAAAzIgHAAIAAgQIAAAAQgFAJgGAFQgIAEgIAAQgMABgGgHgAAAAAQgLACgGAEQgEAEAAAKQAAAGAEAFQAFAFAJAAQALAAAHgJQAIgIAAgOIAAgHg");
	this.shape_58.setTransform(415.2,575.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgXAkQgGgGAAgKQAAgVAcgEIAYgDQAAgbgUAAQgMAAgNALIAAgJQAEgEAJgCQAHgCAGgBQAMAAAIAJQAGAHAAAPIAAAzIgHAAIAAgQIgBAAQgDAJgIAFQgHAEgIAAQgLABgIgHgAABAAQgMACgGAEQgEAEgBAKQABAGAEAFQAFAFAIAAQAMAAAHgJQAIgIAAgOIAAgHg");
	this.shape_59.setTransform(401.8,575.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgXAkQgGgGAAgLQAAgUAcgEIAYgDQAAgbgUAAQgMAAgNALIAAgJQAEgEAJgCQAHgCAGgBQANAAAGAIQAHAIAAAPIAAAzIgHAAIAAgPIgBAAQgDAIgIAEQgHAFgIABQgLAAgIgHgAABAAQgMACgFAEQgFAEgBAJQABAHAFAFQAEAFAIAAQALAAAIgJQAIgIAAgOIAAgHg");
	this.shape_60.setTransform(152.9,596.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgZAyQgJgLAAgTQAAgTAKgMQALgMAPAAQASAAAIAPIAAAAIAAg0IAIAAIAAB3IgIAAIAAgPIAAAAQgFAIgHAFQgIAEgIAAQgQAAgJgLgAgSgHQgJAJAAARQAAARAHAJQAIAJAMAAQANAAAIgJQAHgIAAgMIAAgQQAAgJgHgJQgHgHgMgBQgMABgIAJg");
	this.shape_61.setTransform(144.2,594.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgWAkQgHgGAAgLQAAgUAcgEIAYgDQAAgbgUAAQgMAAgNALIAAgJQAFgEAHgCQAIgCAGgBQAMAAAHAIQAHAIAAAPIAAAzIgHAAIAAgPIAAAAQgEAIgHAEQgIAFgIABQgMAAgGgHgAAAAAQgLACgGAEQgEAEAAAJQAAAHAEAFQAFAFAJAAQALAAAHgJQAIgIAAgOIAAgHg");
	this.shape_62.setTransform(135.8,596.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgXAkQgGgGAAgLQAAgUAcgEIAYgDQAAgbgUAAQgMAAgNALIAAgJQAEgEAJgCQAHgCAGgBQAMAAAIAIQAGAIAAAPIAAAzIgHAAIAAgPIAAAAQgFAIgHAEQgHAFgIABQgLAAgIgHgAAAAAQgLACgGAEQgEAEAAAJQAAAHAEAFQAFAFAJAAQAKAAAIgJQAIgIAAgOIAAgHg");
	this.shape_63.setTransform(122.5,596.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgWAkQgHgGAAgLQAAgTAcgFIAYgDQAAgbgUAAQgMAAgNALIAAgJQAFgEAHgCQAIgCAGgBQAMAAAIAIQAGAIAAAPIAAAzIgHAAIAAgPIAAAAQgEAHgHAFQgIAFgIABQgMAAgGgHgAAAAAQgLACgGAEQgEAEAAAJQAAAIAEAEQAFAFAJAAQALAAAHgJQAIgIAAgOIAAgHg");
	this.shape_64.setTransform(310.4,577.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgZAyQgKgLAAgTQAAgUALgLQALgMAOAAQATAAAHAPIABAAIAAg0IAHAAIAAB3IgHAAIAAgPIgBAAQgEAIgHAFQgIAEgJAAQgOAAgKgLgAgTgGQgIAIAAASQAAAQAHAJQAIAKAMgBQANAAAIgJQAHgIAAgMIAAgQQAAgJgHgJQgHgHgNgBQgLAAgJALg");
	this.shape_65.setTransform(301.8,575.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgXAkQgGgGAAgLQAAgTAcgFIAYgDQAAgbgUAAQgMAAgNALIAAgJQAEgEAJgCQAHgCAGgBQAMAAAIAIQAGAIAAAPIAAAzIgHAAIAAgPIgBAAQgDAHgIAFQgHAFgIABQgLAAgIgHgAAAAAQgLACgFAEQgFAEgBAJQABAIAFAEQAEAFAIAAQAMAAAHgJQAIgIAAgOIAAgHg");
	this.shape_66.setTransform(293.4,577.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgXAkQgGgGAAgLQAAgTAcgFIAYgDQAAgbgUAAQgMAAgNALIAAgJQAFgEAHgCQAIgCAGgBQAMAAAHAIQAHAIAAAPIAAAzIgHAAIAAgPIgBAAQgEAHgGAFQgIAFgIABQgLAAgIgHgAABAAQgMACgFAEQgGAEAAAJQAAAIAGAEQAEAFAIAAQALAAAIgJQAIgIAAgOIAAgHg");
	this.shape_67.setTransform(280,577.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AALA6IAAhoQgGAGgGADQgHAEgJADIAAgHIAKgDIAHgFIAHgFIAIgHIACAAIAABzg");
	this.shape_68.setTransform(130.9,462.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgXAkQgGgGAAgKQAAgVAcgEIAYgDQAAgbgUAAQgMAAgNALIAAgJQAEgEAJgCQAHgCAGgBQANAAAGAJQAHAHAAAPIAAAzIgHAAIAAgQIgBAAQgDAJgIAFQgHAEgIAAQgLABgIgHgAABAAQgMACgFAEQgGAEAAAKQAAAGAGAFQAEAFAIAAQALAAAIgJQAIgIAAgOIAAgHg");
	this.shape_69.setTransform(119.9,464.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgZAyQgJgLAAgTQAAgUAKgLQALgMAPAAQASAAAIAPIAAAAIAAg0IAIAAIAAB3IgIAAIAAgPIAAAAQgFAIgHAEQgIAFgJAAQgPAAgJgLgAgTgHQgIAJAAARQAAARAHAJQAIAJAMAAQANABAIgKQAHgIAAgMIAAgQQAAgJgHgJQgHgHgMgBQgMABgJAJg");
	this.shape_70.setTransform(111.3,462.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgWAkQgHgGAAgKQAAgVAcgEIAYgDQAAgbgUAAQgMAAgNALIAAgJQAFgEAHgCQAIgCAGgBQAMAAAIAJQAGAHAAAPIAAAzIgHAAIAAgQIAAAAQgFAJgGAFQgIAEgIAAQgMABgGgHgAAAAAQgLACgGAEQgEAEAAAKQAAAGAEAFQAFAFAJAAQALAAAHgJQAIgIAAgOIAAgHg");
	this.shape_71.setTransform(102.9,464.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgSApIAAhQIAHAAIAAASIAAAAQADgJAGgFQAFgFAIAAQAFAAADABIAAAIQgEgDgEAAQgKAAgGAKQgGAKAAARIAAAmg");
	this.shape_72.setTransform(96.9,464.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgXAkQgGgGAAgKQAAgVAcgEIAYgDQAAgbgUAAQgMAAgNALIAAgJQAEgEAJgCQAHgCAGgBQAMAAAIAJQAGAHAAAPIAAAzIgHAAIAAgQIgBAAQgDAJgIAFQgHAEgIAAQgLABgIgHgAAAAAQgLACgGAEQgEAEgBAKQABAGAEAFQAFAFAIAAQAMAAAHgJQAIgIAAgOIAAgHg");
	this.shape_73.setTransform(89.5,464.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#009999").s().p("A57L+QgKAAAAgKIAAjAQAAgKAKAAINYAAQAKAAAAAKIAADAQAAAKgKAAgAhTJCQgKAAAAgKIAAjBQAAgJAKAAINXAAQAKAAAAAKIAADAQAAAKgKAAgARtIuQgKAAABgKIAAjAQgBgKAKAAINYAAQALAAgBAKIAADAQABAKgLAAgA/FopQgKAAABgKIAAjAQgBgKAKAAINYAAQALAAgBAKIAADAQABAKgLAAg");
	this.shape_74.setTransform(262,528.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAPA5IAAgeIg1AAIAAgHIAPgTIAPgTIAMgUIAKgSIAIAAIAABMIARAAIAAAHIgRAAIAAAegAACgXIgKARIgMAOIgKAMIAtAAIAAg/IgNAUg");
	this.shape_75.setTransform(445,601);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgXAkQgGgHAAgJQAAgUAcgFIAYgDQAAgbgUAAQgMAAgNALIAAgJQAFgDAHgDQAIgDAGABQAMgBAHAJQAHAHAAAPIAAAzIgHAAIAAgQIgBAAQgEAIgGAGQgIAEgIAAQgLABgIgHgAABAAQgMACgFAEQgGAEAAAKQAAAGAGAFQAEAFAIAAQALAAAIgJQAIgJAAgNIAAgHg");
	this.shape_76.setTransform(432.1,602.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgZAyQgKgLABgTQgBgUALgLQAKgMAQAAQASAAAIAPIAAAAIAAg0IAHAAIAAB3IgHAAIAAgOIAAAAQgFAHgHAEQgIAFgJAAQgOAAgKgLgAgTgHQgIAJAAARQAAARAHAJQAIAJAMAAQANABAIgKQAHgIAAgMIAAgQQAAgJgHgJQgHgIgMAAQgMAAgJAKg");
	this.shape_77.setTransform(423.5,600.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgWAkQgHgHAAgJQAAgUAcgFIAYgDQAAgbgUAAQgMAAgNALIAAgJQAEgDAIgDQAIgDAGABQAMgBAIAJQAGAHAAAPIAAAzIgHAAIAAgQIAAAAQgFAIgHAGQgHAEgIAAQgMABgGgHgAAAAAQgLACgGAEQgEAEAAAKQAAAGAEAFQAFAFAJAAQALAAAHgJQAIgJAAgNIAAgHg");
	this.shape_78.setTransform(415.1,602.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgSApIAAhQIAHAAIAAASIAAAAQADgJAGgFQAFgFAIAAQAFAAADABIAAAIQgDgDgFAAQgKAAgFAKQgHAKAAARIAAAmg");
	this.shape_79.setTransform(409.1,602.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgXAkQgGgHAAgJQAAgUAcgFIAYgDQAAgbgUAAQgMAAgNALIAAgJQAEgDAJgDQAHgDAGABQANgBAGAJQAHAHAAAPIAAAzIgHAAIAAgQIgBAAQgDAIgIAGQgHAEgIAAQgLABgIgHgAABAAQgMACgFAEQgFAEgBAKQABAGAFAFQAEAFAIAAQALAAAIgJQAIgJAAgNIAAgHg");
	this.shape_80.setTransform(401.7,602.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgXAkQgGgHAAgJQAAgUAcgFIAYgEQAAgagUAAQgMAAgNALIAAgJQAEgDAJgDQAHgDAGABQANgBAGAJQAHAHAAAPIAAAzIgHAAIAAgQIgBAAQgDAIgIAGQgHAEgIAAQgLAAgIgGgAABAAQgMACgFAEQgGAEAAAKQAAAGAGAFQAEAFAIAAQALAAAIgJQAIgJAAgNIAAgHg");
	this.shape_81.setTransform(157.3,626);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgZAyQgJgLAAgTQAAgUAKgLQALgMAPAAQASAAAIAPIAAAAIAAg0IAIAAIAAB3IgIAAIAAgOIAAAAQgFAHgHAEQgIAFgJAAQgPAAgJgLgAgTgHQgIAJAAARQAAARAHAJQAIAKAMgBQANABAIgKQAHgIAAgMIAAgQQAAgKgHgHQgHgJgMAAQgMAAgJAKg");
	this.shape_82.setTransform(148.6,624.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgWAkQgHgHAAgJQAAgUAcgFIAYgEQAAgagUAAQgMAAgNALIAAgJQAFgDAHgDQAIgDAGABQAMgBAIAJQAGAHAAAPIAAAzIgHAAIAAgQIAAAAQgFAIgGAGQgIAEgIAAQgMAAgGgGgAAAAAQgLACgGAEQgEAEAAAKQAAAGAEAFQAFAFAJAAQALAAAHgJQAIgJAAgNIAAgHg");
	this.shape_83.setTransform(140.2,626);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgXAkQgGgHAAgJQAAgUAcgFIAYgDQAAgbgUAAQgMAAgNALIAAgJQAEgDAJgDQAHgDAGABQANgBAGAJQAHAHAAAPIAAAzIgHAAIAAgQIgBAAQgDAIgIAGQgHAEgIAAQgLABgIgHgAABAAQgMACgFAEQgFAEgBAKQABAGAFAFQAEAFAIAAQALAAAIgJQAIgJAAgNIAAgHg");
	this.shape_84.setTransform(306.3,611.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgZAyQgJgLAAgTQAAgUAKgLQALgMAPAAQASAAAIAPIAAAAIAAg0IAIAAIAAB3IgIAAIAAgOIAAAAQgFAHgHAEQgIAFgIAAQgQAAgJgLgAgSgHQgJAJAAARQAAARAHAJQAIAJAMAAQANABAHgKQAIgIAAgMIAAgQQAAgJgHgJQgHgIgMAAQgMAAgIAKg");
	this.shape_85.setTransform(297.7,609.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgWAkQgHgHAAgJQAAgUAcgFIAYgDQAAgbgUAAQgMAAgNALIAAgJQAFgDAHgDQAIgDAGABQAMgBAIAJQAGAHAAAPIAAAzIgHAAIAAgQIAAAAQgEAIgHAGQgIAEgIAAQgMABgGgHgAAAAAQgLACgGAEQgEAEAAAKQAAAGAEAFQAFAFAJAAQALAAAHgJQAIgJAAgNIAAgHg");
	this.shape_86.setTransform(289.3,611.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgXAkQgGgHAAgJQAAgUAcgFIAYgDQAAgbgUAAQgMAAgNALIAAgJQAEgDAJgDQAHgDAGABQAMgBAIAJQAGAHAAAPIAAAzIgHAAIAAgQIAAAAQgFAIgHAGQgHAEgIAAQgLABgIgHgAAAAAQgLACgGAEQgEAEAAAKQAAAGAEAFQAFAFAJAAQAKAAAIgJQAIgJAAgNIAAgHg");
	this.shape_87.setTransform(275.9,611.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAKA6IAAhnQgFAFgGAEQgHAEgJACIAAgGIAKgEIAHgFIAHgFIAIgHIACAAIAABzg");
	this.shape_88.setTransform(126.3,494.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgXAkQgGgHAAgKQAAgTAcgFIAYgEQAAgagUAAQgMAAgNALIAAgJQAFgEAHgCQAIgDAGAAQAMABAHAHQAHAIAAAPIAAA0IgHAAIAAgQIgBAAQgEAHgGAFQgIAGgIAAQgLgBgIgGgAABAAQgMACgFAEQgGAEAAAJQAAAIAGAEQAEAFAIAAQALAAAIgJQAIgJAAgNIAAgHg");
	this.shape_89.setTransform(115.3,496.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgZAyQgKgLABgTQgBgTALgMQAKgMAQAAQASAAAIAPIAAAAIAAg0IAHAAIAAB3IgHAAIAAgOIAAAAQgFAHgHAFQgIAEgJAAQgOAAgKgLgAgTgGQgIAIAAASQAAAQAHAJQAIAKAMAAQANgBAIgIQAHgJAAgMIAAgPQAAgLgHgHQgHgIgMAAQgMAAgJAKg");
	this.shape_90.setTransform(106.7,494.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgWAkQgHgHAAgKQAAgTAcgFIAYgEQAAgagUAAQgMAAgNALIAAgJQAEgEAIgCQAIgDAGAAQAMABAIAHQAGAIAAAPIAAA0IgHAAIAAgQIAAAAQgFAHgHAFQgHAGgIAAQgMgBgGgGgAAAAAQgLACgGAEQgEAEAAAJQAAAIAEAEQAFAFAJAAQALAAAHgJQAIgJAAgNIAAgHg");
	this.shape_91.setTransform(98.3,496.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgSApIAAhQIAHAAIAAASIAAAAQADgJAGgFQAFgFAIAAQAFAAADABIAAAIQgDgDgFAAQgKAAgFAKQgHAKAAARIAAAmg");
	this.shape_92.setTransform(92.3,496.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#009999").s().p("A3tLxIg3AAIgUAAQgKAAABgKIAAjAQgBgKAKAAINYAAQALAAgBAKIAADAQABAKgLAAgAhlJiQgKAAAAgKIAAiwIAAgCIAAgOQAAgKAKAAIAeAAIBtAAIAeAAICZAAIIVAAQAKAAAAAKIAADAQAAAKgKAAgASEIIQgKAAAAgKIAAjAQAAgKAKAAINYAAQAKAAAAAKIAADAQAAAKgKAAgA/bocQgKAAAAgKIAAjAQAAgKAKAAINYAAQAKAAAAAKIAADAQAAAKgKAAg");
	this.shape_93.setTransform(259.6,559.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#F05D53").s().p("AgRMuQgWgKg/g2QgygrgogEQgbgCgsAOIhLAZQgrALghgDQgXgDgLgIQgKgIgHgPQgFgKgFgTIgOg3IA3AAIATBCQAmACBcgdQBTgaAuANQAdAIAgAZQATAOAkAfQAfAZAfALQAlAMAegNQAXgKAZggQAhgrAJgHQATgRARgCQALgBAPAFIAaAJQAoALAmgZQAmgZAFgpIACgcQABgQAGgKQAIgNAbgNQAegOATgHQAcgJAYAAQAQAAAVAFIAlAIQAxAJAxgJQAigGAQgPQAEgEAMgPQAJgLAHgFQAKgGAUgDQAWgCAJgFQATgKAJgaQACgHAJgoQAEgWAKgJQAKgIAbAAQAPAAAKAEIAIgFIAAACQgFACAAAHIAAAtQgFgBgEgCQgKADgMgCQgGAngIAWQgNAfgXAPQgKAGgWAHQgWAIgJAFQgFADgeAZQhCAzhxgTIgugIQgbgEgUACQgZACgUAMQgWANgHAWQgEALgDAZQgEAOgKAQIgTAaQgPATgKAJQgPAOgPAFQgVAHgygJQgugHgWALQgMAHgNAQIgVAbQggAmgzALQgSAEgQAAQghAAgcgPgAqEG/QgHgEgPgBQgRgCgGgCQgRgGgKgUQgHgQgCgXQgHhjBHh4IAJgSQAEgKgCgJQgBgHgIgKQgJgMgCgEQgEgKAAgQQACgRgBgJQAAgKgKgiQgShHAWhGIAJgfQAEgRgFgNQgFgLgMgIQgLgHgNgBQgWgDgbAOQgSAJgdAUQghAYgNAHQgaAQgaAEQgeAFgXgMQgcgOgNgiQgLgdAAgmQABgaAIgMQAFgJAJgFQAKgEAJADQgHgfgbgQQgIgFgQgFQgQgGgHgEQgMgGgHgLQgHgMADgLQAEgOAagMQAcgNAGgLQAHgLgDgaQgRiHgDh+QgBgSAGgOQAHgQAOAAQAOABAHAQQAFAMAAATQAAB0AQBzQAHAugDAWQgDASgKAOQgKAQgPAGQAbATAOAOQAVAUAIAWQAKAZgLAaQgLAcgZAEQgDA0AaAMQASAIAdgQQAOgHAtgeQAlgYAYgKQAjgOAjAEQAmAFAVAZQAeAngTBRQgKAtgCARQgDAkAMAYIALAWQAGAMgBAKQAAAFgEANQgEALABAHQABAHAGAJIALAPQANAWgJAfQgFASgUAkQgnBKgMBRQgEAUAIAKQAFAGAKADIASADQARACAMAIQAJAGAGAIIgmAAQgKAAAAAKIAAAVIgBgBgEgiIAF/QgMgGgBgMIAAgIQABgNANgFIAHgBQAAAAABAAQABAAAAAAQABgBAAAAQAAAAAAgBQAIABAHAFQAGAFACAIQACAIgDAIQgEAIgHAEQgGADgGAAQgFAAgFgDgAR/ETQgHgCgFgBQgHAAgMADIhtAAIA4ggQAagPAQgGQAZgIAUAEQANAEAlAYQAdAUAVgDIAPg3QAJggAVgIQAMgEAQADQAJABATAHQBXAgBbAIQAXg7AFg8QAEgzgVgYQgFgGgLgHIgQgMQgUgRAEgTQAEgQAcgJQAigLAJgJQgRgKgKgOQgLgQAAgSQgBgSANgPQANgPASABQgEgSAHgTQAIgSAPgMQAYgVAtgHQAsgHAZAPQAOAIAQAVQAUAZAIAHQARAPAnAPQAqAPAQAMQAWARAKAbQAKAbgFAbQAlALATAKQAeAQANAXIALAXQAGAQAEAIQAHAMAPANIAYAWQAYAYANAgQAMAhgCAiQALgIAOAKQANAJgBANIgPAAQgKAAAAAKIAAASQgJACgIgBQgbgFgOgfQgEgIgKgzQgIgkgSgOQgFgFgRgIQgOgHgHgHQgKgKgHgbQgHgdgIgKQgMgOgogMQglgNgJgSQgFgJAAgSQgCgUgCgIQgHgUgagPIgxgVQglgQgbggIgRgUQgKgLgKgFQgRgIgbAGQgXAGgJAOQgGAIgCANIgEAWQgCAMgHAJQgJAJgKAAQAAAOAYALQAcANAFAKQAHANgJAPQgIAOgQAGQgHADgXAGQgSAFgKAGQAqARACBIQACBJgYBIQgOAqgYALQgMAGgQgBQgMAAgSgEQhTgShbgaQgJALgGAjIgCAJg");
	this.shape_94.setTransform(151.3,571.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_35},{t:this.instance_6},{t:this.btndetalle},{t:this.instance_5},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:163.3,y:642.3}},{t:this.shape_27,p:{x:94,y:782.3}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:114.6,y:784}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:267.3,y:630.4}},{t:this.shape_19},{t:this.shape_18,p:{x:281.9,y:631.9}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:317.5,y:630.4}},{t:this.shape_13,p:{x:254.1,y:781.3}},{t:this.shape_12},{t:this.shape_11,p:{x:268.7,y:782.9}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:389,y:620.2}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},3).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_20,p:{x:78,y:213.5}},{t:this.shape_50},{t:this.shape_11,p:{x:92.6,y:215}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47,p:{x:115.6,y:215.1}},{t:this.shape_46},{t:this.shape_13,p:{x:278.5,y:317.7}},{t:this.shape_45},{t:this.shape_44,p:{x:293.1,y:319.2}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_14,p:{x:328.6,y:317.7}},{t:this.shape_6,p:{x:114.8,y:354.1}},{t:this.shape_40},{t:this.shape_39,p:{x:129.4,y:355.7}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_28,p:{x:165,y:354}}]},1).to({state:[]},1).to({state:[{t:this.shape_74},{t:this.shape_27,p:{x:82.3,y:462.5}},{t:this.shape_73},{t:this.shape_72,p:{x:96.9,y:464.1}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_20,p:{x:272.8,y:575.7}},{t:this.shape_67},{t:this.shape_39,p:{x:287.4,y:577.2}},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_14,p:{x:322.9,y:575.7}},{t:this.shape_13,p:{x:115.2,y:594.5}},{t:this.shape_63},{t:this.shape_18,p:{x:129.8,y:596}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_28,p:{x:165.4,y:594.4}},{t:this.shape_6,p:{x:394.6,y:573.7}},{t:this.shape_59},{t:this.shape_44,p:{x:409.2,y:575.2}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]},2).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_27,p:{x:77.7,y:494.9}},{t:this.shape_24,p:{x:84.9,y:496.5}},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_20,p:{x:268.7,y:610}},{t:this.shape_87},{t:this.shape_72,p:{x:283.3,y:611.6}},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_14,p:{x:318.8,y:610}},{t:this.shape_13,p:{x:119.6,y:624.3}},{t:this.shape_47,p:{x:126.9,y:626}},{t:this.shape_18,p:{x:134.2,y:625.9}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_28,p:{x:169.8,y:624.2}},{t:this.shape_6,p:{x:394.5,y:601}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]},1).to({state:[]},1).wait(26));

	// Capa 2
	this.btnregistrar = new lib.btnregistrar();
	this.btnregistrar.parent = this;
	this.btnregistrar.setTransform(238.8,572,1,1,0,0,0,152.4,28.8);

	this.btnlogin = new lib.btnlogin();
	this.btnlogin.parent = this;
	this.btnlogin.setTransform(237.5,169.4,1,1,0,0,0,152.4,28.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#08080A").s().p("AgnA0QgQgTAAghQAAgeAQgUQARgUAaAAQAZAAAOASQANARAAAfIAAAFIhjAAQAAAcANAPQANAPAVAAQAXAAAWgQIAAANQgVAPgaAAQgZAAgQgTgAgbguQgMANgDAXIBWAAQgBgXgLgNQgKgNgSAAQgSAAgNANg");
	this.shape_95.setTransform(333.9,501);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#08080A").s().p("ABPBFIAAhQQAAgZgIgLQgIgKgSAAQgQAAgLAOQgMANAAAVIAABOIgLAAIAAhRQAAgtgiAAQgRAAgLAOQgLAOAAAVIAABNIgMAAIAAiGIAMAAIAAAXIABAAQAOgaAbAAQAPAAALAIQAKAJADAOQAGgPAMgIQAMgIANAAQAtAAAAA3IAABSg");
	this.shape_96.setTransform(316.1,500.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#08080A").s().p("AgfBFIAAiGIAMAAIAAAeIAAAAQAFgQAKgIQAJgJAOAAQAHAAAGACIAAANQgHgEgHAAQgRAAgJARQgLAQAAAdIAABAg");
	this.shape_97.setTransform(294,500.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#08080A").s().p("AgnA0QgQgTAAghQAAgeAQgUQARgUAaAAQAZAAAOASQANARAAAfIAAAFIhjAAQAAAcANAPQANAPAVAAQAXAAAWgQIAAANQgVAPgaAAQgZAAgQgTgAgbguQgMANgDAXIBWAAQgBgXgLgNQgKgNgSAAQgSAAgNANg");
	this.shape_98.setTransform(281.8,501);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#08080A").s().p("AgtBKIgBAAIAAAYIgMAAIAAjHIAMAAIAABdIABAAQAHgPANgIQAOgIAPAAQAaAAAOASQAPARAAAeQAAAigRAVQgRAVgZAAQgeAAgPgcgAghgMQgNAPAAAVIAAARQAAAUANAPQANAOAUAAQAVAAANgRQAMgSAAgdQAAgZgLgOQgMgPgVAAQgWAAgNAQg");
	this.shape_99.setTransform(267.9,497.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#08080A").s().p("AAoBFIAAhNQAAgxgjAAQgTAAgMAOQgNAPAAAVIAABMIgMAAIAAiGIAMAAIAAAZIABAAQAPgcAeAAQAWAAALAPQAMAOAAAbIAABRg");
	this.shape_100.setTransform(252.8,500.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#08080A").s().p("AgnA0QgQgTAAghQAAgeAQgUQARgUAaAAQAZAAAOASQANARAAAfIAAAFIhjAAQAAAcANAPQANAPAVAAQAXAAAWgQIAAANQgVAPgaAAQgZAAgQgTgAgbguQgMANgDAXIBWAAQgBgXgLgNQgKgNgSAAQgSAAgNANg");
	this.shape_101.setTransform(238.6,501);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#08080A").s().p("ABPBFIAAhQQAAgZgIgLQgIgKgSAAQgQAAgLAOQgMANAAAVIAABOIgLAAIAAhRQAAgtgiAAQgRAAgLAOQgLAOAAAVIAABNIgMAAIAAiGIAMAAIAAAXIABAAQAOgaAbAAQAPAAALAIQAKAJADAOQAGgPAMgIQAMgIANAAQAtAAAAA3IAABSg");
	this.shape_102.setTransform(220.8,500.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#08080A").s().p("AgnA0QgQgTAAghQAAgeAQgUQARgUAaAAQAZAAAOASQANARAAAfIAAAFIhjAAQAAAcANAPQANAPAVAAQAXAAAWgQIAAANQgVAPgaAAQgZAAgQgTgAgbguQgMANgDAXIBWAAQgBgXgLgNQgKgNgSAAQgSAAgNANg");
	this.shape_103.setTransform(202.7,501);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#08080A").s().p("AgfBFIAAiGIAMAAIAAAeIABAAQAEgQAKgIQAJgJAOAAQAHAAAGACIAAANQgHgEgHAAQgQAAgKARQgLAQAAAdIAABAg");
	this.shape_104.setTransform(192.9,500.8);

	this.instance_7 = new lib.an_Checkbox({'id': 'instance_7', 'label':'', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-checkbox'});

	this.instance_7.setTransform(171,504.7,0.291,0.995,0,0,0,50.1,11.2);

	this.txtconfirmar = new lib.an_TextInput({'id': 'txtconfirmar', 'value':'confirmar pasword', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtconfirmar.setTransform(237.4,431.8,3.04,1.992,0,0,0,50.1,11.2);

	this.txtpass = new lib.an_TextInput({'id': 'txtpass', 'value':'password', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtpass.setTransform(237.4,368.8,3.04,1.992,0,0,0,50.1,11.2);

	this.txtemail = new lib.an_TextInput({'id': 'txtemail', 'value':'email', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtemail.setTransform(237.4,305.8,3.04,1.992,0,0,0,50.1,11.2);

	this.estilos = new lib.an_CSS({'id': 'estilos', 'href':'assets/estilos.css'});

	this.estilos.setTransform(419.4,75.2,1,1,0,0,0,50,11);

	this.txtnombre = new lib.an_TextInput({'id': 'txtnombre', 'value':'nombre', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtnombre.setTransform(237.4,241.5,3.04,1.992,0,0,0,50.1,11.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("Ag3BXQgEgEgBgEIgLieIAjgDIBPB+IgJh4QAAgEADgEQAEgDAGgBQAFAAAEACQAEAEABAEIALCeIgjADIhPh+IAJB4QAAAEgDAEQgEAEgFAAIgCAAQgEAAgEgCg");
	this.shape_105.setTransform(249.3,90.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgMBSQgIgEgFgGIghguQgGgJgBgMQgBgLAFgKIAZgyQAJgQAWgCQAUgCALAQIAgAuQAHAJABAMQABAKgFAKIgaAyQgIAQgWACIgCAAQgIAAgIgDgAgEg+QgFAAgDAFIgYAwQgDAGABAGQAAAHAEAGIAfAsQADAEAFAAQAFgBACgEIAYgwQAEgHAAgGQgBgHgEgGIgfgrQgDgEgEAAIgBAAg");
	this.shape_106.setTransform(230.1,91.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#0099FF").s().p("AgthUIBKgFQADABADADQADADAAAFQAAAEgCAEQgDADgDAAIg5ADIACA2IAZgCQADAAADADQACAEABAEQAAAEgCADQgDADgEABIgYABIAEA3IA5gEQAEAAACADQACADABAFQAAAEgCAEQgDADgDABIhKADg");
	this.shape_107.setTransform(297.9,86.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#0099FF").s().p("AgiBXQgDgEAAgEIgIijIAVgBIAXAnIASgqIAVgBIAICjQAAAFgCADQgCAEgEAAQgDAAgDgDQgDgDAAgFIgHiDIgPAgIABAHQAAAEgCADQgDAEgDgBQgDABgCgDQgDgDAAgFIgBgGIgSgfIAHCEQAAAFgCADQgDADgDAAQgDAAgDgCg");
	this.shape_108.setTransform(285.6,87.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#0099FF").s().p("AgiBXQgDgEAAgEQAAgFACgDQADgEADAAIAagBIgHiCIgaACQgDAAgDgDQgDgDAAgFQAAgEACgEQADgEADAAIBCgDQAEAAACADQADADAAAFQAAAEgCAEQgCADgEAAIgZACIAHCBIAZgBQAEAAACACQADAEAAAEQAAAFgCADQgCAEgEAAIhCADQgDAAgDgCg");
	this.shape_109.setTransform(273.4,88);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#0099FF").s().p("Ag3BhQgNgKgBgNQgBgOAQgBQAGgBAEAEQAFADAAAFQABAFADACQADADAFgBIBIgFQAFAAAAgDQAAgCgDgCIh0hzQgJgJAAgKQgBgMAJgKQAJgKAOgBIBLgFQAOgBANAKQANAKABAPQABAFgEAEQgEAFgGAAQgHABgDgDQgDgDgDgIQgDgIgJAAIhIAFQgFABABADQAAAAAAABQAAAAAAABQAAAAABABQAAABABAAIB0BzQAJAJAAAKQABAMgIAJQgKAJgLABIhOAGIgDAAQgOAAgLgJg");
	this.shape_110.setTransform(249.1,69.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#0099FF").s().p("Ag1BhQgOgLgBgQIgLiZQAAgFAEgFQAEgEAGAAQAGgBAFAEQAFAEAAAFIALCZQAAAFAFAEQAEADAGAAIA7gEQAGgBAEgEQAEgEAAgFIgLiZQAAgFAEgFQAEgEAGAAQAGgBAFAEQAEAEAAAFIALCZQABAQgMAMQgMANgSABIg7AEIgDAAQgQAAgNgJg");
	this.shape_111.setTransform(227.4,70.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#0099FF").s().p("AhPhjIBZgGQAYgCATAOQASAPABAVIABALQABAYgSARQAVAOABAXIABAMQACAVgQARQgRAQgYACIhYAGgAASAKIg7AEIAEBAIA7gEQALgBAJgIQAIgJgBgKIgBgLQAAgLgJgHQgIgHgKAAIgDAAgAALhPIg7AEIAFA/IA7gEQALgBAJgIQAIgIgBgLIgBgLQgBgLgJgHQgHgGgLAAIgDAAg");
	this.shape_112.setTransform(205.7,72.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(2,1,1).p("AERlaIg8BAAjemVIAtBLAgpnEIADBYAFdgIIBYgBAFBCHIBMAtAE1ioIBOgqABrlaIAchTAlgk6IBEA4AmzjAIBOAoACIFNIAhBRAh1FbIgUBVAAEFtIADBYADwECIBBA7");
	this.shape_113.setTransform(270.9,72.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#0099FF").s().p("A2gHqIDRiRQCdAwCJAMQExAaKOgpQAOAMAQALIAfAUQBCApBOAPIAWADgAITHEQARgIARgKIABgBQA4gjAngnQCLiLAAjDQAAhUgahKQgWg+gog3QgyhGhGguQg+grhHgUIJMg+IGKPTIwLADQBCgLA7gcgAzQEJQAxgggWg0QBIAtDKAUIABAAQgeBJBBANIACABQirgKiog6gAmXkVIgLgGIgkgTIAGgCIHkgwQgZAUgXAXQhQBPgvB2Qibhmhxg/g");
	this.shape_114.setTransform(236.3,70.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#666666").s().p("AkXBGQAmgpAOgZQAPgYAGgSQAFgRABgaQDBB7EBAbIAeAHIgZAAQhQAGhoAAQiVAAjJgMg");
	this.shape_115.setTransform(190.5,96.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AKmCYIhJgyIBHAYIgBgEQAAgLAIgJQAIgIAMAAQALAAAIAIQAIAJAAALQAAAMgHAIIBQAYIhkgGIhpFHIgCAEgAn2G5QhLgIAehFIABgBICiglQgGBkhgAPIgQAAgAt4FmQgGhBAbhAIAUA9QAFASgCAQQgCASgLAPIgJAKIAAABQgEgBgQANIgCgWgAszCJQBmjzA6hnIACgCIAFgIQA+hbCEABQCyAWC8BeIABABQAHAGgHAGQhTBVhYC3QgUAngkAkQglAlgzARQg2AFgwAAQjHAAhwhVgAGGk5IgtAaIgnhBIC+hvIAsBAIg8AiIAmBBQgvASgrAdgAMrk/IgGgBIgrgIQgcgGgdgCIAJhHIg0gIIAKhLIDaAiIgMBIIg+gGIgLBGIAMACg");
	this.shape_116.setTransform(199.3,58.7);

	this.btnadmin = new lib.admin();
	this.btnadmin.parent = this;
	this.btnadmin.setTransform(238.8,429.4,1,1,0,0,0,152.4,28.8);

	this.btnentrar = new lib.btnentrar();
	this.btnentrar.parent = this;
	this.btnentrar.setTransform(238.8,352,1,1,0,0,0,152.4,28.8);

	this.txtnombreoemail = new lib.an_TextInput({'id': 'txtnombreoemail', 'value':'nombre o email', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtnombreoemail.setTransform(242.6,163.4,3.04,1.992,0,0,0,50.1,11.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#08080A").s().p("AgnA0QgQgSAAgiQAAgeAQgTQARgVAaAAQAZAAAOASQANASAAAeIAAAEIhjAAQAAAcANAQQANAQAVAAQAXAAAWgRIAAANQgVAPgaAAQgZAAgQgTgAgbguQgMAMgDAYIBWAAQgBgXgLgNQgKgNgSABQgSgBgNANg");
	this.shape_117.setTransform(333.9,281);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#08080A").s().p("AgnA0QgQgSAAgiQAAgeAQgTQARgVAaAAQAZAAAOASQANASAAAeIAAAEIhjAAQAAAcANAQQANAQAVAAQAXAAAWgRIAAANQgVAPgaAAQgZAAgQgTgAgbguQgMAMgDAYIBWAAQgBgXgLgNQgKgNgSABQgSgBgNANg");
	this.shape_118.setTransform(281.8,281);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#08080A").s().p("AgnA0QgQgSAAgiQAAgeAQgTQARgVAaAAQAZAAAOASQANASAAAeIAAAEIhjAAQAAAcANAQQANAQAVAAQAXAAAWgRIAAANQgVAPgaAAQgZAAgQgTgAgbguQgMAMgDAYIBWAAQgBgXgLgNQgKgNgSABQgSgBgNANg");
	this.shape_119.setTransform(238.6,281);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#08080A").s().p("AgnA0QgQgSAAgiQAAgeAQgTQARgVAaAAQAZAAAOASQANASAAAeIAAAEIhjAAQAAAcANAQQANAQAVAAQAXAAAWgRIAAANQgVAPgaAAQgZAAgQgTgAgbguQgMAMgDAYIBWAAQgBgXgLgNQgKgNgSABQgSgBgNANg");
	this.shape_120.setTransform(202.7,281);

	this.instance_8 = new lib.Copiadetiempopng2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(46,344,0.603,0.603);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#666666").s().p("AguA0QgRgUAAgfQAAghASgTQASgTAdAAQAcAAARATQARATAAAgQAAAggRAUQgRATgeAAQgcAAgSgTgAgkgrQgOAQAAAcQAAAaAOARQANAPAXAAQAZAAANgPQANgQAAgcQAAgcgNgPQgNgQgYAAQgXABgOAPg");
	this.shape_121.setTransform(451.4,144.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#666666").s().p("Ag6BkIAAjEIAMAAIAAAcIABAAQAHgPAOgIQANgIAPAAQAaAAAPASQAOARAAAfQAAAhgQAVQgSAVgZAAQgfAAgOgcIgBAAIAABWgAghhIQgNAQAAAVIAAARQAAATANAPQANAOAUAAQAUAAAOgRQAMgRAAgdQAAgZgLgPQgMgPgVAAQgWAAgNAQg");
	this.shape_122.setTransform(436.8,147.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#666666").s().p("ABPBFIAAhQQAAgZgIgLQgIgKgSAAQgQAAgLAOQgMANAAAVIAABOIgLAAIAAhRQAAgtgiAAQgRAAgLAOQgLAOAAAVIAABNIgMAAIAAiGIAMAAIAAAXIABAAQAOgaAbAAQAPAAALAIQAKAJADAOQAGgPAMgIQAMgIANAAQAtAAAAA3IAABSg");
	this.shape_123.setTransform(417.8,144.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#666666").s().p("AgnA0QgQgTAAghQAAgdAQgVQARgUAaAAQAZAAAOASQANASAAAeIAAAFIhjAAQAAAbANAQQANAPAVAAQAXAAAWgQIAAANQgVAPgaAAQgZAAgQgTgAgbguQgMAMgDAZIBWAAQgBgYgLgNQgKgNgSAAQgSAAgNANg");
	this.shape_124.setTransform(399.7,144.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#666666").s().p("AgFBeIAAiGIALAAIAACGgAgGhNQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEABQgDgBgDgDg");
	this.shape_125.setTransform(390.1,141.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#666666").s().p("AgKA1IAAhaIgZAAIAAgLIAZAAIAAgjIAFgCIAGgCIAAAnIAjAAIAAALIgjAAIAABYQAAAOAEAGQAEAGALAAQAIAAAIgEIAAALQgKAEgHAAQgdAAAAgjg");
	this.shape_126.setTransform(383.3,142.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#666666").s().p("AgzAJIAAhNIAMAAIAABKQAAAbAJANQAJAMATAAQATAAALgOQALgOAAgXIAAhLIANAAIAACGIgNAAIAAgZIAAAAQgOAcgdAAQgvAAAAg8g");
	this.shape_127.setTransform(364.6,144.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#666666").s().p("AgmA+IAAgPQAHAGAKADQAJADAIAAQAeAAAAgZQAAgJgGgGQgIgHgPgHQgSgHgJgJQgHgJgBgNQAAgRANgKQANgKARAAQARAAANAIIAAANQgPgKgQAAQgNAAgHAIQgIAGAAALQAAAKAEAGQAGAGAQAHQAWAJAHAIQAIAIAAAOQAAAQgMALQgMAKgUAAQgUAAgNgJg");
	this.shape_128.setTransform(352.4,144.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#666666").s().p("AgfBFIAAiGIAMAAIAAAeIAAAAQAFgQAKgIQAJgJANAAQAIAAAGACIAAANQgGgEgJAAQgPAAgKARQgLAQAAAdIAABAg");
	this.shape_129.setTransform(336.1,144.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#666666").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgOQAHgGANgFQANgEALAAQAUAAAMANQALANAAAZIAABWIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAIAPgBQASAAANgNQANgPAAgXIAAgMg");
	this.shape_130.setTransform(323.8,144.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#666666").s().p("AgfBFIAAiGIAMAAIAAAeIABAAQAEgQAKgIQAJgJANAAQAIAAAGACIAAANQgGgEgJAAQgQAAgJARQgLAQAAAdIAABAg");
	this.shape_131.setTransform(313.8,144.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#666666").s().p("AgKA1IAAhaIgZAAIAAgLIAZAAIAAgjIAGgCIAEgCIAAAnIAkAAIAAALIgkAAIAABYQABAOAEAGQAEAGALAAQAHAAAJgEIAAALQgJAEgJAAQgcAAAAgjg");
	this.shape_132.setTransform(304.4,142.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#666666").s().p("AgmA+IAAgPQAHAGAKADQAJADAIAAQAeAAABgZQgBgJgGgGQgIgHgPgHQgSgHgJgJQgHgJgBgNQAAgRANgKQANgKARAAQARAAANAIIAAANQgPgKgQAAQgNAAgHAIQgJAGABALQAAAKAEAGQAGAGAQAHQAWAJAHAIQAIAIAAAOQAAAQgMALQgMAKgUAAQgUAAgNgJg");
	this.shape_133.setTransform(295.3,144.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#666666").s().p("AgFBeIAAiGIALAAIAACGgAgGhNQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEABQgDgBgDgDg");
	this.shape_134.setTransform(287.2,141.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#666666").s().p("AAoBFIAAhNQAAgxgjAAQgTAAgMAOQgNAPAAAVIAABMIgMAAIAAiGIAMAAIAAAZIABAAQAPgcAeAAQAWAAALAPQAMAOAAAbIAABRg");
	this.shape_135.setTransform(277.3,144.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#666666").s().p("AgFBeIAAiGIALAAIAACGgAgGhNQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEABQgDgBgDgDg");
	this.shape_136.setTransform(267.2,141.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#666666").s().p("ABPBFIAAhQQAAgZgIgLQgIgKgSAAQgQAAgLAOQgMANAAAVIAABOIgLAAIAAhRQAAgtgiAAQgRAAgLAOQgLAOAAAVIAABNIgMAAIAAiGIAMAAIAAAXIABAAQAOgaAbAAQAPAAALAIQAKAJADAOQAGgPAMgIQAMgIANAAQAtAAAAA3IAABSg");
	this.shape_137.setTransform(253.4,144.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#666666").s().p("AgqBTQgQgSAAggQAAghARgTQASgUAaAAQAeAAANAZIABAAIAAhXIAMAAIAADHIgMAAIAAgYIgBAAQgGANgNAHQgNAIgQAAQgYAAgQgTgAgfgMQgOAQAAAcQAAAcAMAPQANAPATAAQAWAAANgOQANgOAAgVIAAgZQAAgSgMgNQgMgNgUAAQgVAAgNAQg");
	this.shape_138.setTransform(234.2,141.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#666666").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgOQAHgGANgFQANgEALAAQAUAAAMANQALANAAAZIAABWIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAIAPgBQASAAANgNQANgPAAgXIAAgMg");
	this.shape_139.setTransform(220.2,144.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#666666").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgOQAHgGANgFQANgEALAAQAUAAAMANQALANAAAZIAABWIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAIAPgBQASAAANgNQANgPAAgXIAAgMg");
	this.shape_140.setTransform(199.4,144.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#666666").s().p("AgfBFIAAiGIAMAAIAAAeIAAAAQAFgQAKgIQAJgJAOAAQAHAAAGACIAAANQgHgEgIAAQgPAAgKARQgLAQAAAdIAABAg");
	this.shape_141.setTransform(189.5,144.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#666666").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgOQAHgGANgFQANgEALAAQAUAAAMANQALANAAAZIAABWIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAIAPgBQASAAANgNQANgPAAgXIAAgMg");
	this.shape_142.setTransform(177.2,144.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#666666").s().p("Ag6BkIAAjEIAMAAIAAAcIABAAQAHgPAOgIQANgIAPAAQAaAAAOASQAPARAAAfQAAAhgRAVQgQAVgbAAQgdAAgPgcIgBAAIAABWgAghhIQgNAQAAAVIAAARQAAATANAPQANAOAUAAQAVAAAMgRQANgRAAgdQAAgZgMgPQgMgPgTAAQgXAAgNAQg");
	this.shape_143.setTransform(163.7,147.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#666666").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgOQAHgGANgFQANgEALAAQAUAAAMANQALANAAAZIAABWIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAIAPgBQASAAANgNQANgPAAgXIAAgMg");
	this.shape_144.setTransform(141.3,144.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#666666").s().p("AgqBTQgQgSAAggQAAghARgTQASgUAaAAQAeAAANAZIABAAIAAhXIAMAAIAADHIgMAAIAAgYIgBAAQgGANgNAHQgNAIgQAAQgYAAgQgTgAgfgMQgOAQAAAcQAAAcAMAPQANAPATAAQAWAAANgOQANgOAAgVIAAgZQAAgSgMgNQgMgNgUAAQgVAAgNAQg");
	this.shape_145.setTransform(126.9,141.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#666666").s().p("AgzAJIAAhNIAMAAIAABKQAAAbAJANQAJAMAUAAQARAAAMgOQALgOAAgXIAAhLIANAAIAACGIgNAAIAAgZIAAAAQgOAcgdAAQgvAAAAg8g");
	this.shape_146.setTransform(112.5,144.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#666666").s().p("Ag4BhIAAgMQAFACAGAAQAQAAAKgWIAMgeIgziFIANAAIAqBtIABAFIABAFIABAAIACgKIArhtIAOAAIhBChQgIATgIAIQgJAJgPAAQgFAAgFgCg");
	this.shape_147.setTransform(99.3,147.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#666666").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgOQAHgGANgFQANgEALAAQAUAAAMANQALANAAAZIAABWIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAIAPgBQASAAANgNQANgPAAgXIAAgMg");
	this.shape_148.setTransform(86.2,144.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#666666").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgOQAHgGANgFQANgEALAAQAUAAAMANQALANAAAZIAABWIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAIAPgBQASAAANgNQANgPAAgXIAAgMg");
	this.shape_149.setTransform(65.4,144.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#666666").s().p("AAoBFIAAhNQAAgxgjAAQgSAAgNAOQgNAPAAAVIAABMIgMAAIAAiGIAMAAIAAAZIABAAQAOgcAfAAQAWAAAMAPQALAOAAAbIAABRg");
	this.shape_150.setTransform(51.9,144.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#666666").s().p("AhAAUIAAhzIAMAAIAABxQAABCA1AAQA0AAgBhAIAAhzIAOAAIAABwQAABPhDAAQhAAAABhMg");
	this.shape_151.setTransform(35.8,141.8);

	this.sa1 = new lib.sa1();
	this.sa1.parent = this;
	this.sa1.setTransform(87.8,60,1,1,0,0,0,62.3,23.7);

	this.btnrutas = new lib.btnrutas();
	this.btnrutas.parent = this;
	this.btnrutas.setTransform(240.7,296.8,1,1,0,0,0,152.4,28.8);

	this.btncomo = new lib.btncomo();
	this.btncomo.parent = this;
	this.btncomo.setTransform(240.7,212.8,1,1,0,0,0,152.4,28.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#0099FF").s().p("AgthUIBKgEQADAAADADQACADABAFQAAAEgCAEQgCADgEAAIg6ADIAEA2IAYgCQADAAACAEQADADAAAEQAAAEgCADQgCAEgDAAIgYABIACA3IA6gDQAEAAACACQACAEABAEQAAAFgCADQgDADgDAAIhKAEg");
	this.shape_152.setTransform(374.4,79.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#0099FF").s().p("AgiBXQgDgDAAgFIgIijIAVgBIAXAnIASgqIAVgBIAICjQAAAFgCADQgCAEgEAAQgDAAgDgDQgDgDAAgEIgHiEIgPAgIABAGQAAAFgCADQgDAEgDgBQgDABgCgDQgDgDAAgFIgBgGIgSgfIAHCEQAAAFgCADQgDADgDAAQgDAAgDgCg");
	this.shape_153.setTransform(362.2,79.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#999999").ss(2,1,1).p("EgjXAAAMBGvAAA");
	this.shape_154.setTransform(242.8,122.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(2,1,1).p("AE1ioIBNgqAEQlaIg8BAABqlaIAdhTAgpnEIACBYAjemVIAtBLAFcgIIBYgBADvECIBBA7AFBCHIBLAtAh1FbIgVBVAAEFtIACBYACIFNIAgBRAlhk6IBEA4Am0jAIBOAo");
	this.shape_155.setTransform(347.5,65.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#666666").s().p("AkXBGQAlgpAQgZQAOgYAFgSQAGgRABgaQDBB7EBAbIAeAHIgZAAQhQAGhoAAQiVAAjJgMg");
	this.shape_156.setTransform(267,89.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AKmCYIhJgyIBHAYIgBgEQAAgLAIgJQAIgIAMAAQALAAAIAIQAIAJAAALQAAAMgHAIIBQAYIhkgGIhpFHIgCAEgAn2G5QhLgIAehFIABgBICiglQgGBkhgAPIgQAAgAt4FmQgGhBAbhAIAUA9QAFASgCAQQgCASgLAPIgJAKIAAABQgEgBgQANIgCgWgAszCJQBmjzA6hnIACgCIAFgIQAog6BFgVQAmgLAvAAQAiAEAiAHQCSAdCYBMIABABQAHAGgHAGQhTBVhYC3QgUAngkAkQglAlgzARQg2AFgwAAQjHAAhwhVgAGGk5IgtAaIgnhBIC+hvIAsBAIg8AiIAmBBIgGACQgsASgoAbgAMrk/IgGgBIgrgIQgcgGgdgCIAJhHIg0gIIAKhLIDaAiIgMBIIg+gGIgLBGIAMACg");
	this.shape_157.setTransform(275.9,51.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#0099FF").s().p("A2gHqIDRiRQCdAwCJAMQExAaKOgpQAOAMAQALIAfAUQBCApBOAPIAWADgAITHEQARgIARgKIABgBQA4gjAngnQCLiLAAjDQAAhUgahKQgWg+gog3QgyhGhGguQgogcgtgSQgXgKgZgHIJMg+IGKPTIwLADQBCgLA7gcgAzQEJQAxgggWg0QBIAtDKAUIABAAQgeBJBBANIACABQirgKiog6gAmXkVIgLgGIgkgTIAGgCIHkgwQgZAUgXAXQhQBPgvB2Qibhmhxg/g");
	this.shape_158.setTransform(312.9,62.6);

	this.instance_9 = new lib.Símbolo1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(434.5,315.8,1,1,0,0,0,28.8,29.3);
	new cjs.ButtonHelper(this.instance_9, 0, 1, 2, false, new lib.Símbolo1(), 3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AA+BfIgWg8IhQAAIgWA8IgOAAIBHi8IALAAIBHC8gAgEg/IggBXIBJAAIgghXIgDgIIgCgGIAAAAIgEAOg");
	this.shape_159.setTransform(333.9,161.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AApBfIgZg4QgIgRgIgGQgGgFgMgBIgYAAIAABVIgMAAIAAi8IA0AAQAYAAAOANQAPANAAAXQAAAUgNAOQgLAMgVAFIAAAAQALAFAKAWIAcA9gAgqAAIAhAAQAUAAANgMQANgMAAgTQAAgSgLgKQgMgKgVAAIgjAAg");
	this.shape_160.setTransform(311,161.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AA/BfIgXg8IhQAAIgWA8IgOAAIBHi8IALAAIBHC8gAgEg/IgfBXIBIAAIghhXIgCgIIgCgGIAAAAIgEAOg");
	this.shape_161.setTransform(294.5,161.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgwBHQgYgZAAgsQAAgqAZgcQAagdAqAAQAZAAAXAKIAAAPQgZgNgZAAQgjAAgVAYQgWAZAAAlQAAAnAUAXQAVAXAhAAQAaAAATgMIAAg+IgsAAIAAgMIA5AAIAABRQgdARgfAAQgmAAgXgbg");
	this.shape_162.setTransform(276.7,161.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgtBfIAAi8IBXAAIAAAMIhKAAIAABLIBEAAIAAALIhEAAIAABNIBOAAIAAANg");
	this.shape_163.setTransform(261.5,161.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgrBfIAAi8IANAAIAACvIBKAAIAAANg");
	this.shape_164.setTransform(249,161.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgrBfIAAi8IANAAIAACvIBKAAIAAANg");
	this.shape_165.setTransform(236.6,161.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AhABHQgXgbAAgqQAAgtAYgbQAYgbAqAAQAmAAAYAaQAXAaAAArQAAAugYAbQgYAbgoAAQgoAAgYgbgAg1g9QgVAYAAAlQAAAoAUAXQAUAXAiAAQAiAAAVgXQAUgXAAgoQAAgogUgXQgUgWgiAAQggAAgWAYg");
	this.shape_166.setTransform(212.1,161.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("ABLBfIAAiFIACgcIgBAAIgGAQIhDCRIgEAAIhEiRIgGgRIAAAAIABAZIAACJIgNAAIAAi8IAMAAIBGCXIACAEIABAEIADAHIAAAAIACgEIAEgNIBFiVIAMAAIAAC8g");
	this.shape_167.setTransform(190.6,161.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AhABHQgXgbAAgqQAAgtAYgbQAYgbAqAAQAmAAAYAaQAXAaAAArQAAAugYAbQgYAbgoAAQgoAAgYgbgAg1g9QgVAYAAAlQAAAoAUAXQAUAXAiAAQAiAAAVgXQAUgXAAgoQAAgogUgXQgUgWgiAAQggAAgWAYg");
	this.shape_168.setTransform(169,161.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgqBIQgZgaAAgqQAAgtAbgcQAagcAoAAQAWAAAUAIIAAANQgUgJgWAAQgjAAgWAYQgWAYAAAnQAAAnAVAWQAVAXAgAAQAaAAAVgLIAAAOQgXAJgZAAQgmAAgYgag");
	this.shape_169.setTransform(150.8,161.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgkApQgOgQAAgZQAAgaAPgOQAOgPAWgBQAYABANAPQANAPAAAZQAAAagOAPQgNAQgYAAQgWAAgOgQgAgcgiQgMANAAAWQAAAVAMANQAKANASAAQAUAAAKgNQALgMAAgXQAAgWgLgNQgKgMgTAAQgSAAgLANg");
	this.shape_170.setTransform(420.7,199.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AAfA3IAAg+QAAgngcAAQgOAAgKAMQgKALAAARIAAA9IgKAAIAAhrIAKAAIAAAUIAAAAQAMgWAZAAQARAAAJALQAKAMAAAWIAABAg");
	this.shape_171.setTransform(409,199.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_172.setTransform(400.9,197.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgIAqIAAhHIgUAAIAAgJIAUAAIAAgcIAEgCIAEgCIAAAgIAdAAIAAAJIgdAAIAABGQAAALAEAFQADAFAJAAQAGAAAHgEIAAAJQgIAEgGAAQgXAAAAgdg");
	this.shape_173.setTransform(395.4,197.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgeAxIAAgLQAFAFAIACQAIADAGAAQAYAAAAgVQAAgHgFgGQgGgEgMgFQgPgHgGgHQgHgHAAgKQAAgNAKgJQAKgIAOAAQAOABAKAFIAAALQgMgIgNAAQgJAAgHAGQgGAGAAAIQAAAIAEAFQAEAEANAHQARAGAGAHQAGAGAAALQAAANgJAIQgKAJgQAAQgQAAgKgIg");
	this.shape_174.setTransform(388.1,199.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgfApQgNgPAAgaQAAgXANgQQAOgQAUgBQAVABALAOQAKAOAAAYIAAADIhPAAQAAAWAKANQALANAQAAQATAAARgOIAAAKQgQANgWAAQgTAAgNgQgAgVglQgKALgDASIBFAAQgBgSgIgLQgIgKgPAAQgOAAgKAKg");
	this.shape_175.setTransform(378.4,199.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AghBDQgNgPAAgZQAAgaANgQQAOgQAWAAQAYAAAKAUIABAAIAAhFIAJAAIAACfIgJAAIAAgUIgBAAQgFAKgLAGQgKAGgMAAQgUAAgMgOgAgYgJQgMAMAAAXQAAAWAKAMQAKANAQAAQARAAALgMQAJgLABgRIAAgUQAAgOgKgKQgJgLgQAAQgQAAgLANg");
	this.shape_176.setTransform(366.5,196.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgtBOIAAgKQAEACAFAAQANAAAIgSIAKgYIgphqIALAAIAgBXIACAEIABAEIAAAAIACgIIAihXIALAAIg0CBQgFAOgIAHQgHAHgLAAQgFAAgEgBg");
	this.shape_177.setTransform(350.1,201.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AAgA3IAAg+QAAgngcAAQgPAAgKAMQgKALAAARIAAA9IgJAAIAAhrIAJAAIAAAUIABAAQAMgWAYAAQARAAAJALQAKAMAAAWIAABAg");
	this.shape_178.setTransform(333.7,199.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgfApQgNgPAAgaQAAgXAOgQQANgQAVgBQATABALAOQALAOAAAYIAAADIhPAAQAAAWAKANQAKANASAAQASAAARgOIAAAKQgQANgWAAQgTAAgNgQgAgVglQgKALgDASIBFAAQgBgSgIgLQgJgKgOAAQgOAAgKAKg");
	this.shape_179.setTransform(322.4,199.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgmBIIAAgKQARAKAOAAQAsAAAAgvIAAgPIAAAAQgMAXgaAAQgUAAgNgPQgMgPAAgYQAAgaANgQQAOgRAVAAQAZAAAKAUIAAAAIAAgRIAKAAIAABjQAAAegNAOQgOAOgbAAQgPABgQgJgAgZg5QgLANAAAWQAAAWAKALQAKANAQAAQARAAAKgMQAKgLAAgPIAAgVQAAgPgJgLQgKgKgQAAQgQAAgLAOg");
	this.shape_180.setTransform(310.5,201.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_181.setTransform(302.6,197.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgZA3IAAhrIAKAAIAAAYQAEgMAIgHQAHgHALAAQAGAAAFACIAAAKQgFgDgHgBQgNAAgIAOQgIANAAAYIAAAyg");
	this.shape_182.setTransform(297.5,199.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgkApQgOgQAAgZQAAgaAPgOQAOgPAWgBQAYABANAPQANAPAAAZQAAAagOAPQgNAQgYAAQgWAAgOgQgAgcgiQgMANAAAWQAAAVAMANQALANARAAQAUAAAKgNQALgMAAgXQAAgWgLgNQgKgMgTAAQgSAAgLANg");
	this.shape_183.setTransform(287.2,199.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgfApQgNgPAAgaQAAgXAOgQQANgQAVgBQATABALAOQALAOAAAYIAAADIhPAAQAAAWALANQAJANASAAQASAAARgOIAAAKQgQANgWAAQgTAAgNgQgAgVglQgKALgDASIBFAAQgBgSgIgLQgJgKgOAAQgOAAgKAKg");
	this.shape_184.setTransform(269.8,199.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgiBDQgMgPAAgZQAAgaANgQQAPgQAUAAQAYAAALAUIAAAAIAAhFIAKAAIAACfIgKAAIAAgUIAAAAQgFAKgLAGQgKAGgMAAQgUAAgNgOgAgZgJQgLAMAAAXQAAAWAKAMQAKANAQAAQARAAAKgMQALgLgBgRIAAgUQAAgOgJgKQgJgLgRAAQgPAAgMANg");
	this.shape_185.setTransform(257.9,196.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AAfA3IAAg+QABgngcAAQgPAAgKAMQgKALAAARIAAA9IgJAAIAAhrIAJAAIAAAUIAAAAQAMgWAYAAQASAAAJALQAJAMAAAWIAABAg");
	this.shape_186.setTransform(240.8,199.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgkApQgOgQAAgZQAAgaAPgOQAOgPAXgBQAXABANAPQANAPAAAZQAAAagNAPQgOAQgYAAQgXAAgNgQgAgdgiQgLANAAAWQAAAVALANQALANATAAQATAAAKgNQALgMAAgXQAAgWgLgNQgKgMgTAAQgSAAgMANg");
	this.shape_187.setTransform(228.8,199.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_188.setTransform(220.5,197.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgZApQgNgOAAgZQAAgZAPgQQAQgRAWAAQAMAAAMAGIAAALQgMgIgNAAQgSAAgMAOQgMANAAAWQAAAUALANQALANAQAAQARAAAMgJIAAAKQgMAIgRAAQgVAAgOgQg");
	this.shape_189.setTransform(213.6,199.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgYApQgOgOAAgZQAAgZAPgQQAQgRAWAAQANAAALAGIAAALQgLgIgPAAQgRAAgMAOQgMANAAAWQAAAUALANQAKANASAAQAPAAANgJIAAAKQgNAIgQAAQgVAAgNgQg");
	this.shape_190.setTransform(204,199.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgfApQgNgPAAgaQAAgXAOgQQANgQAVgBQATABALAOQALAOAAAYIAAADIhPAAQAAAWAKANQAKANASAAQASAAARgOIAAAKQgQANgWAAQgTAAgNgQgAgVglQgKALgDASIBFAAQgBgSgIgLQgJgKgOAAQgOAAgKAKg");
	this.shape_191.setTransform(193.7,199.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgZA3IAAhrIAKAAIAAAYQAEgMAIgHQAHgHALAAQAFAAAGACIAAAKQgGgDgGgBQgNAAgIAOQgIANAAAYIAAAyg");
	this.shape_192.setTransform(185.8,199.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_193.setTransform(179.3,197.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgiBDQgMgPAAgZQAAgaANgQQAPgQAUAAQAYAAALAUIAAAAIAAhFIAKAAIAACfIgKAAIAAgUIAAAAQgFAKgLAGQgKAGgMAAQgUAAgNgOgAgZgJQgLAMAAAXQAAAWAKAMQAKANAQAAQARAAAKgMQALgLgBgRIAAgUQAAgOgJgKQgJgLgRAAQgPAAgMANg");
	this.shape_194.setTransform(170.6,196.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgpAHIAAg9IAKAAIAAA7QAAAWAHAKQAIAKAPAAQAOAAAKgMQAJgLAAgSIAAg8IAKAAIAABrIgKAAIAAgUIgBAAQgLAWgWAAQgnAAAAgwg");
	this.shape_195.setTransform(153.2,199.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgeAxIAAgLQAFAFAIACQAIADAGAAQAYAAAAgVQAAgHgFgGQgGgEgMgFQgPgHgGgHQgHgHAAgKQAAgNAKgJQAKgIAOAAQAOABAKAFIAAALQgMgIgNAAQgJAAgHAGQgGAGAAAIQAAAIAEAFQAEAEANAHQARAGAGAHQAGAGAAALQAAANgJAIQgKAJgQAAQgQAAgKgIg");
	this.shape_196.setTransform(143.4,199.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgeAwQgJgIAAgOQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAPIAAgMQAGgFAKgDQAKgDAIgBQARAAAJAKQAJALAAAUIAABFIgJAAIAAgVIgBAAQgFALgKAGQgKAHgLAAQgPAAgJgJgAABAAQgQACgHAGQgHAFAAANQAAAJAHAGQAGAHALAAQAPAAAKgMQALgMAAgSIAAgJg");
	this.shape_197.setTransform(127.8,199.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgkA8IgBAAIAAATIgJAAIAAifIAJAAIAABKIABAAQAFgMALgGQAMgHAMAAQAUAAALAOQAMAPAAAXQAAAbgOARQgNAQgUAAQgYAAgMgVgAgagJQgLALAAARIAAAOQABAQAJAMQALAMAQAAQAQAAAKgPQALgOAAgXQAAgUgJgLQgKgMgQAAQgSAAgKANg");
	this.shape_198.setTransform(117,196.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_199.setTransform(108.3,197.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgYA3IAAhrIAJAAIAAAYQAEgMAIgHQAHgHAKAAQAGAAAGACIAAAKQgGgDgGgBQgNAAgHAOQgJANAAAYIAAAyg");
	this.shape_200.setTransform(103.3,199.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgZApQgNgOAAgZQAAgZAPgQQAQgRAWAAQAMAAAMAGIAAALQgLgIgOAAQgSAAgMAOQgMANAAAWQAAAUALANQAKANARAAQARAAALgJIAAAKQgLAIgRAAQgVAAgOgQg");
	this.shape_201.setTransform(94.2,199.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgeAxIAAgLQAFAFAIACQAIADAGAAQAYAAAAgVQAAgHgFgGQgGgEgMgFQgPgHgGgHQgHgHAAgKQAAgNAKgJQAKgIAOAAQAOABAKAFIAAALQgMgIgNAAQgJAAgHAGQgGAGAAAIQAAAIAEAFQAEAEANAHQARAGAGAHQAGAGAAALQAAANgJAIQgKAJgQAAQgQAAgKgIg");
	this.shape_202.setTransform(85.2,199.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgkBMIAAiXIBFAAIAAAKIg6AAIAAA9IA2AAIAAAIIg2AAIAAA+IA+AAIAAAKg");
	this.shape_203.setTransform(75.8,197.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AAgA3IAAg+QAAgngdAAQgOAAgKAMQgKALAAARIAAA9IgKAAIAAhrIAKAAIAAAUIABAAQALgWAZAAQARAAAJALQAKAMAAAWIAABAg");
	this.shape_204.setTransform(378.5,433.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_205.setTransform(370.4,431.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgKBRIAAhiIgUAAIAAgJIAUAAIAAgTQAAgRAIgJQAIgJANAAQAHAAAEACIAAAKQgEgDgHAAQgTAAAAAbIAAASIAcAAIAAAJIgcAAIAABig");
	this.shape_206.setTransform(365.6,430.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgtBOIAAgKQAEACAFAAQANAAAIgSIAKgYIgphqIALAAIAgBXIACAEIABAEIAAAAIACgIIAihXIALAAIg0CBQgFAOgIAHQgHAHgLAAQgFAAgEgBg");
	this.shape_207.setTransform(351.5,435.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgkApQgOgPAAgZQAAgbAPgPQAOgOAWAAQAYAAANAOQANAPAAAaQAAAZgOAQQgNAPgYAAQgWAAgOgPgAgcgiQgMANAAAWQAAAVAMANQAKANATAAQATAAAKgNQALgNAAgWQAAgWgLgMQgKgNgTAAQgSAAgLANg");
	this.shape_208.setTransform(334.7,433.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_209.setTransform(326.4,431.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgYAqQgOgQAAgYQAAgZAPgQQAPgQAXAAQAMAAAMAEIAAALQgMgHgNAAQgSAAgMAOQgMANAAAVQAAAWALAMQAKANASAAQAQAAAMgJIAAAKQgNAHgQAAQgVABgNgPg");
	this.shape_210.setTransform(319.4,433.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_211.setTransform(312.3,431.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AAgA3IAAg+QAAgngcAAQgPAAgKAMQgKALAAARIAAA9IgJAAIAAhrIAJAAIAAAUIABAAQAMgWAYAAQARAAAJALQAKAMAAAWIAABAg");
	this.shape_212.setTransform(304.5,433.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_213.setTransform(296.3,431.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgfAqQgNgQAAgaQAAgXANgRQAOgPAUAAQAVAAALANQAKAOAAAZIAAAEIhPAAQAAAWALANQAKAMAQAAQATAAARgNIAAAKQgRAMgUgBQgUABgNgPgAgVgkQgKAKgCASIBEAAQAAgSgJgKQgJgLgOAAQgOAAgKALg");
	this.shape_214.setTransform(282.8,433.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AghBDQgNgPAAgZQAAgaAOgQQANgQAWAAQAYAAAKAUIABAAIAAhFIAJAAIAACfIgJAAIAAgUIgBAAQgFAKgKAGQgLAGgMAAQgUAAgMgOgAgYgJQgMAMAAAXQAAAWAKAMQAKANAQAAQARAAALgMQAJgLABgRIAAgUQAAgOgKgKQgKgLgPAAQgRAAgKANg");
	this.shape_215.setTransform(270.9,430.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgEAIABQARAAAJAKQAJAKAAAUIAABFIgJAAIAAgVIgBAAQgFAKgKAHQgKAGgLAAQgPAAgJgIgAABAAQgQADgHAFQgHAGAAAMQAAAJAHAHQAGAGALAAQAPAAAKgMQALgLAAgSIAAgKg");
	this.shape_216.setTransform(253.9,433.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AghBDQgNgPAAgZQAAgaANgQQAOgQAWAAQAYAAAKAUIABAAIAAhFIAJAAIAACfIgJAAIAAgUIgBAAQgFAKgLAGQgKAGgMAAQgUAAgMgOgAgYgJQgMAMAAAXQAAAWAKAMQAKANAQAAQARAAALgMQAKgLAAgRIAAgUQAAgOgKgKQgJgLgQAAQgQAAgLANg");
	this.shape_217.setTransform(242.3,430.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgEAIABQARAAAJAKQAJAKAAAUIAABFIgJAAIAAgVIgBAAQgFAKgKAHQgKAGgLAAQgPAAgJgIgAABAAQgQADgHAFQgHAGAAAMQAAAJAHAHQAGAGALAAQAPAAAKgMQALgLAAgSIAAgKg");
	this.shape_218.setTransform(231.1,433.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgZA3IAAhrIAKAAIAAAYQAEgNAIgGQAHgHALAAQAFAAAGACIAAAKQgGgEgGABQgNAAgIANQgIANAAAXIAAAzg");
	this.shape_219.setTransform(223.2,433.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgEAIABQARAAAJAKQAJAKAAAUIAABFIgJAAIAAgVIgBAAQgFAKgKAHQgKAGgLAAQgPAAgJgIgAABAAQgQADgHAFQgHAGAAAMQAAAJAHAHQAGAGALAAQAPAAAKgMQALgLAAgSIAAgKg");
	this.shape_220.setTransform(213.3,433.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AguBQIAAidIAKAAIAAAXIAAAAQAGgMALgGQALgHALAAQAVAAALAOQAMAOAAAYQAAAbgNARQgNAQgVAAQgYAAgMgWIAAAAIAABFgAgag5QgKAMAAARIAAANQgBAQALALQAKAMAQABQAQAAAKgPQALgNAAgXQAAgVgKgMQgJgLgQgBQgSABgKANg");
	this.shape_221.setTransform(202.6,435.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgYA3IAAhrIAJAAIAAAYQAEgNAIgGQAHgHAKAAQAHAAAFACIAAAKQgGgEgGABQgNAAgHANQgJANAAAXIAAAzg");
	this.shape_222.setTransform(187.4,433.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgEAIABQARAAAJAKQAJAKAAAUIAABFIgJAAIAAgVIgBAAQgFAKgKAHQgKAGgLAAQgPAAgJgIgAABAAQgQADgHAFQgHAGAAAMQAAAJAHAHQAGAGALAAQAPAAAKgMQALgLAAgSIAAgKg");
	this.shape_223.setTransform(177.6,433.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AAfA3IAAg+QAAgngcAAQgOAAgKAMQgKALAAARIAAA9IgKAAIAAhrIAKAAIAAAUIAAAAQANgWAXAAQASAAAJALQAKAMgBAWIAABAg");
	this.shape_224.setTransform(166.8,433.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgkApQgOgPAAgZQAAgbAOgPQAPgOAWAAQAYAAANAOQANAPAAAaQAAAZgOAQQgNAPgYAAQgWAAgOgPgAgcgiQgMANAAAWQAAAVAMANQALANARAAQAUAAAKgNQALgNAAgWQAAgWgLgMQgKgNgTAAQgSAAgLANg");
	this.shape_225.setTransform(154.9,433.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_226.setTransform(146.6,431.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgYAqQgOgQAAgYQAAgZAPgQQAQgQAWAAQANAAALAEIAAALQgLgHgPAAQgRAAgMAOQgMANAAAVQAAAWALAMQAKANASAAQAPAAANgJIAAAKQgNAHgQAAQgVABgNgPg");
	this.shape_227.setTransform(139.6,433.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgZAqQgNgQAAgYQAAgZAPgQQAPgQAXAAQAMAAAMAEIAAALQgMgHgOAAQgRAAgMAOQgMANAAAVQAAAWALAMQALANAQAAQAQAAAMgJIAAAKQgMAHgQAAQgVABgOgPg");
	this.shape_228.setTransform(130,433.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgfAqQgNgQAAgaQAAgXANgRQAOgPAVAAQAUAAAKANQALAOAAAZIAAAEIhPAAQAAAWALANQAKAMARAAQASAAARgNIAAAKQgRAMgUgBQgUABgNgPgAgVgkQgKAKgCASIBEAAQAAgSgJgKQgJgLgOAAQgOAAgKALg");
	this.shape_229.setTransform(119.7,433.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgEBQIAAifIAJAAIAACfg");
	this.shape_230.setTransform(112,430.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgfAqQgNgQAAgaQAAgXANgRQAOgPAUAAQAVAAALANQAKAOAAAZIAAAEIhPAAQAAAWAKANQALAMAQAAQATAAARgNIAAAKQgQAMgWgBQgTABgNgPgAgVgkQgKAKgDASIBFAAQgBgSgIgKQgIgLgPAAQgOAAgKALg");
	this.shape_231.setTransform(104.4,433.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgeAxIAAgMQAFAFAIADQAIADAGAAQAYAAAAgVQAAgHgFgFQgGgFgMgGQgPgGgGgGQgHgIAAgKQAAgOAKgHQAKgIAOAAQAOgBAKAGIAAALQgMgIgNAAQgJAAgHAGQgGAGAAAIQAAAIAEAEQAEAGANAFQARAHAGAHQAGAGAAALQAAANgJAIQgKAIgQAAQgQAAgKgHg");
	this.shape_232.setTransform(94.8,433.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgFBkIAAjHIALAAIAADHg");
	this.shape_233.setTransform(336.5,233.3);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgOQAHgGANgFQANgEALAAQAUAAAMANQALANAAAZIAABWIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAIAPgBQASAAANgNQANgPAAgXIAAgMg");
	this.shape_234.setTransform(326.8,236.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgzAJIAAhNIAMAAIAABKQAAAbAJANQAJAMATAAQASAAAMgOQAMgOAAgXIAAhLIAMAAIAACGIgMAAIAAgZIgBAAQgOAcgcAAQgwAAAAg8g");
	this.shape_235.setTransform(313,236.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgKA1IAAhaIgZAAIAAgLIAZAAIAAgjIAFgCIAGgCIAAAnIAjAAIAAALIgjAAIAABYQAAAOAEAGQAEAGALAAQAIAAAIgEIAAALQgKAEgHAAQgdAAAAgjg");
	this.shape_236.setTransform(301.8,234.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgfA0QgRgTAAgfQAAgfATgVQATgUAdAAQAPAAAPAHIAAANQgPgJgRAAQgXABgOAQQgPARAAAaQAAAbANAQQAOAPAVAAQAUABAPgLIAAANQgPAJgVAAQgaAAgRgTg");
	this.shape_237.setTransform(292,236.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgOQAHgGANgFQANgEALAAQAUAAAMANQALANAAAZIAABWIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAIAPgBQASAAANgNQANgPAAgXIAAgMg");
	this.shape_238.setTransform(279,236.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AAoBFIAAhNQAAgxgjAAQgTAAgMAOQgNAPAAAVIAABMIgMAAIAAiGIAMAAIAAAZIABAAQAPgcAeAAQAWAAALAPQAMAOAAAbIAABRg");
	this.shape_239.setTransform(258.1,236.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AguA0QgRgUAAgfQAAghASgTQASgTAdAAQAcAAARATQARATAAAgQAAAggRAUQgRATgeAAQgcAAgSgTgAgkgrQgOAQAAAcQAAAaAOARQANAPAXAAQAZAAANgPQANgQAAgcQAAgcgNgPQgNgQgYAAQgXABgOAPg");
	this.shape_240.setTransform(243.1,236.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgFBeIAAiGIALAAIAACGgAgGhNQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEABQgDgBgDgDg");
	this.shape_241.setTransform(232.8,233.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgfA0QgRgTAAgfQAAgfATgVQATgUAdAAQAPAAAPAHIAAANQgPgJgRAAQgXABgOAQQgPARAAAaQAAAbANAQQAOAPAVAAQAUABAPgLIAAANQgPAJgVAAQgaAAgRgTg");
	this.shape_242.setTransform(224.1,236.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgfA0QgRgTAAgfQAAgfATgVQATgUAdAAQAPAAAPAHIAAANQgPgJgRAAQgXABgOAQQgPARAAAaQAAAbANAQQAOAPAVAAQAUABAPgLIAAANQgPAJgVAAQgaAAgRgTg");
	this.shape_243.setTransform(212.1,236.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgnA0QgQgTAAghQAAgdAQgVQARgUAaAAQAZAAAOASQANASAAAeIAAAFIhjAAQAAAcANAPQANAPAVAAQAXAAAWgQIAAANQgVAPgaAAQgZAAgQgTgAgbguQgMANgDAYIBWAAQgBgYgLgNQgKgNgSAAQgSAAgNANg");
	this.shape_244.setTransform(199.2,236.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgfBFIAAiGIAMAAIAAAeIAAAAQAFgQAKgIQAJgJANAAQAIAAAGACIAAANQgGgEgJAAQgPAAgKARQgLAQAAAdIAABAg");
	this.shape_245.setTransform(189.4,236.4);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgFBeIAAiGIALAAIAACGgAgGhNQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEABQgDgBgDgDg");
	this.shape_246.setTransform(181.2,233.9);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgqBTQgQgSAAggQAAghARgTQASgUAaAAQAeAAANAZIABAAIAAhXIAMAAIAADHIgMAAIAAgYIgBAAQgGANgNAHQgNAIgQAAQgYAAgQgTgAgfgMQgOAQAAAcQAAAcAMAPQANAPATAAQAWAAANgOQANgOAAgVIAAgZQAAgSgMgNQgMgNgUAAQgVAAgNAQg");
	this.shape_247.setTransform(170.4,233.5);

	this.instance_10 = new lib.mapa();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,471,0.733,0.712);

	this.sa2 = new lib.sa2();
	this.sa2.parent = this;
	this.sa2.setTransform(83.1,37.1,1,1,0,0,0,62.3,23.7);

	this.atras1 = new lib.atras1();
	this.atras1.parent = this;
	this.atras1.setTransform(84.1,88,1,1,0,0,0,62.3,23.7);

	this.txtorigen = new lib.an_TextInput({'id': 'txtorigen', 'value':'direccion de inicio', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtorigen.setTransform(235.4,296.4,3.04,1.992,0,0,0,50.1,11.2);

	this.txtdestino = new lib.an_TextInput({'id': 'txtdestino', 'value':'direccion destino', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtdestino.setTransform(235.4,361.8,3.04,1.992,0,0,0,50.1,11.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#999999").ss(2,1,1).p("EgjVgO/MBGwAAAEgjagVjMBGwAAAEgjaAVkMBGwAAA");
	this.shape_248.setTransform(237.2,278.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#FFFFFF").ss(2,1,1).p("AQghZIAAAjAwfg2IAAgjAEQBaI0vAAIAAgF");
	this.shape_249.setTransform(126.4,141.4);

	this.sa3 = new lib.sa3();
	this.sa3.parent = this;
	this.sa3.setTransform(83.1,33.8,1,1,0,0,0,62.3,23.7);

	this.atrasb = new lib.atrasb();
	this.atrasb.parent = this;
	this.atrasb.setTransform(83.1,88,1,1,0,0,0,62.3,23.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#333333").s().p("AAfA3IAAg+QAAgngcAAQgOAAgKAMQgKALAAARIAAA9IgKAAIAAhrIAKAAIAAAUIAAAAQANgWAXAAQASAAAJALQAKAMgBAWIAABAg");
	this.shape_250.setTransform(437.7,732.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#333333").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_251.setTransform(429.6,730.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#333333").s().p("AA/A3IAAhAQgBgUgFgIQgHgJgOAAQgNAAgJALQgJALAAARIAAA+IgJAAIAAhAQAAglgbAAQgOAAgIAMQgJALAAARIAAA9IgJAAIAAhrIAJAAIAAASIABAAQAKgUAWAAQAMAAAJAGQAIAHACALQAFgLAJgHQAKgGALAAQAkAAAAArIAABCg");
	this.shape_252.setTransform(418.6,732.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#333333").s().p("AgmBHIAAgLQAOAIAPAAQARAAALgKQAKgKAAgRQAAgkgpAAIgWABIAFhIIA+AAIAAAJIg2AAIgDA2IAPgBQAXAAANAMQAMAKAAAWQAAAVgNANQgNANgXAAQgQAAgMgGg");
	this.shape_253.setTransform(398.3,730.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#333333").s().p("AgmBHIAAgLQAOAIAPAAQARAAALgKQAKgKAAgRQAAgkgpAAIgWABIAFhIIA+AAIAAAJIg2AAIgDA2IAPgBQAXAAANAMQAMAKAAAWQAAAVgNANQgNANgXAAQgQAAgMgGg");
	this.shape_254.setTransform(387.2,730.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#333333").s().p("AgcAFIAAgJIA5AAIAAAJg");
	this.shape_255.setTransform(377.4,731.4);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#333333").s().p("AgRBLQgIgDgGgGQgGgFgDgIQgDgJAAgKIABgMQACgGAEgFIAIgKQAGgDAHgCIgKgGQgEgEgDgEQgDgFgCgFQgCgFAAgFQAAgJADgHQAEgHAFgFQAFgFAHgDQAIgDAHAAQAJAAAHADQAHADAFAFQAGAFADAHQADAHAAAJQAAAFgCAFIgFAKIgHAIIgJAGQAHACAFADQAFAFAEAFQADAFACAGIABAMQAAAKgDAIQgDAJgGAFQgGAGgIADQgIADgKAAQgJAAgIgDgAgNACQgGADgFAFQgEAEgDAHQgCAGAAAIQAAAIACAGQADAGAEAFQAFAFAGACQAGADAHAAQAHAAAHgDQAGgCAEgFQAFgFADgGQACgGAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgCQgGgDgIAAQgHAAgGACgAgLhCQgFADgEAEQgEAEgCAFQgCAGAAAGQAAAGACAGQACAFAEAEQAEAEAGACQAFADAFAAQAGAAAFgDQAGgCAEgEQAEgEACgFQACgGAAgGQAAgHgCgFQgCgFgEgEQgEgFgFgCQgGgCgGAAQgGAAgFACg");
	this.shape_256.setTransform(367.4,730.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#333333").s().p("AATBMIAAgoIhHAAIAAgJIAVgZIAUgaIARgaIANgZIAKAAIAABmIAXAAIAAAJIgXAAIAAAogAAEgfIgQAXIgQATIgMAQIA7AAIAAhUIgPAag");
	this.shape_257.setTransform(356.2,730.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#333333").s().p("AgFA1QgCgCgBgEQABgEACgBQACgDADAAQADAAADADQACABAAAEQAAAEgCACQgDADgDAAQgDAAgCgDgAgFgoQgCgDgBgDQABgEACgDQACgCADAAQADAAADACQACADAAAEQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_258.setTransform(342.2,732.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#333333").s().p("AgfAqQgNgPAAgbQAAgXANgQQAOgRAUABQAVgBALAOQAKAOAAAZIAAADIhPAAQAAAXAKAMQALANAQAAQATAAARgNIAAAJQgQAMgWAAQgTAAgNgOgAgVglQgKALgDASIBFAAQgBgSgIgLQgIgKgPAAQgOAAgKAKg");
	this.shape_259.setTransform(334.3,732.3);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#333333").s().p("AgcBiIAAgKQAJAEAIAAQAaAAABgrIAAhpIAJAAIAABnQAAA2glAAQgHAAgJgDgAAPhWQgDgDAAgDQAAgEADgCQACgCADAAQADAAADACQACACAAAEQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_260.setTransform(324.6,732.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#333333").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgEAIABQARgBAJAKQAJALAAAUIAABFIgJAAIAAgVIgBAAQgFALgKAGQgKAHgLgBQgPABgJgJgAABAAQgQACgHAGQgHAGAAAMQAAAJAHAHQAGAGALAAQAPAAAKgMQALgMAAgRIAAgKg");
	this.shape_261.setTransform(318.9,732.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#333333").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_262.setTransform(311.5,730.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#333333").s().p("AgEA2IgqhrIALAAIAgBVIADALIAAAAQABgHACgDIAhhWIALAAIgrBrg");
	this.shape_263.setTransform(304.4,732.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#333333").s().p("AgfAqQgNgPAAgbQAAgXANgQQAOgRAUABQAVgBALAOQAKAOAAAZIAAADIhPAAQAAAXALAMQAKANAQAAQATAAARgNIAAAJQgRAMgUAAQgUAAgNgOgAgVglQgKALgCASIBEAAQAAgSgJgLQgJgKgOAAQgOAAgKAKg");
	this.shape_264.setTransform(288.2,732.3);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#333333").s().p("AghBDQgNgPAAgZQAAgaAOgQQANgQAWAAQAYAAAKAUIABAAIAAhFIAJAAIAACfIgJAAIAAgUIgBAAQgFAKgKAGQgLAGgMAAQgUAAgMgOgAgYgJQgMAMAAAXQAAAWAKAMQAKANAQAAQARAAALgMQAJgLABgRIAAgUQAAgOgKgKQgKgLgPAAQgRAAgKANg");
	this.shape_265.setTransform(276.3,729.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#333333").s().p("AAcA2IgcguIAAAAIgDAHIgDACIgXAlIgMAAIAkg1Igjg2IALAAIAYAmIAFAKIAAAAIAGgJIAZgnIALAAIglA2IAkA1g");
	this.shape_266.setTransform(260.3,732.3);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#333333").s().p("AglApQgNgQAAgZQAAgZAOgPQAPgQAXABQAWgBAOAQQANAPAAAZQAAAagNAPQgOAPgYAAQgXAAgOgPgAgdgiQgLANAAAWQAAAVALANQAMANARAAQAUAAALgNQAKgNAAgWQAAgWgKgNQgLgMgTAAQgSAAgMANg");
	this.shape_267.setTransform(250.1,732.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#333333").s().p("AgYA3IAAhrIAJAAIAAAYQAEgMAIgHQAHgHAKAAQAHAAAEACIAAAKQgFgDgGAAQgNAAgHANQgJANAAAYIAAAyg");
	this.shape_268.setTransform(241.7,732.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#333333").s().p("AguBQIAAicIAKAAIAAAWIAAAAQAGgMALgHQAKgGAMAAQAVAAAMAOQALAOAAAYQAAAbgNAQQgNARgVAAQgYAAgMgVIAAAAIAABEgAgag5QgKAMAAARIAAAOQgBAPALAMQAKAMAQgBQAQAAALgOQAKgNAAgXQAAgVgKgLQgJgNgQAAQgSAAgKAOg");
	this.shape_269.setTransform(231.7,734.7);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#333333").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgEAIABQARgBAJAKQAJALAAAUIAABFIgJAAIAAgVIgBAAQgFALgKAGQgKAHgLgBQgPABgJgJgAABAAQgQACgHAGQgHAGAAAMQAAAJAHAHQAGAGALAAQAPAAAKgMQALgMAAgRIAAgKg");
	this.shape_270.setTransform(219.7,732.3);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#333333").s().p("AgkApQgOgQAAgZQAAgZAPgPQAOgQAXABQAXgBANAQQANAPAAAZQAAAagNAPQgOAPgYAAQgXAAgNgPgAgdgiQgLANAAAWQAAAVALANQALANATAAQATAAAKgNQALgNAAgWQAAgWgLgNQgKgMgTAAQgSAAgMANg");
	this.shape_271.setTransform(202.7,732.3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#333333").s().p("AguBQIAAicIAKAAIAAAWIAAAAQAGgMAKgHQALgGAMAAQAVAAAMAOQALAOAAAYQAAAbgOAQQgNARgUAAQgZAAgLgVIAAAAIAABEgAgag5QgLAMABARIAAAOQAAAPAKAMQAKAMAQgBQAQAAALgOQAKgNAAgXQAAgVgJgLQgKgNgQAAQgSAAgKAOg");
	this.shape_272.setTransform(191,734.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#333333").s().p("AA/A3IAAhAQAAgUgHgIQgGgJgOAAQgMAAgKALQgJALAAARIAAA+IgJAAIAAhAQAAglgcAAQgNAAgIAMQgJALAAARIAAA9IgJAAIAAhrIAJAAIAAASIABAAQALgUAWAAQALAAAJAGQAIAHACALQAFgLAKgHQAJgGALAAQAkAAAAArIAABCg");
	this.shape_273.setTransform(175.8,732.2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#333333").s().p("AgfAqQgNgPAAgbQAAgXAOgQQANgRAVABQATgBALAOQALAOAAAZIAAADIhPAAQAAAXALAMQAJANASAAQASAAARgNIAAAJQgQAMgWAAQgTAAgNgOgAgVglQgKALgDASIBFAAQgBgSgIgLQgJgKgOAAQgOAAgKAKg");
	this.shape_274.setTransform(161.4,732.3);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#333333").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_275.setTransform(153.7,730.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#333333").s().p("AgEBMIAAiNIgsAAIAAgKIBhAAIAAAKIgsAAIAACNg");
	this.shape_276.setTransform(145.9,730.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#333333").s().p("AAfA3IAAg+QAAgngcAAQgOAAgKAMQgKALAAARIAAA9IgKAAIAAhrIAKAAIAAAUIAAAAQAMgWAYAAQASAAAJALQAJAMAAAWIAABAg");
	this.shape_277.setTransform(436.6,680.2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#333333").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_278.setTransform(428.5,678.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#333333").s().p("AA+A3IAAhAQAAgUgFgIQgHgJgOAAQgNAAgJALQgJALAAARIAAA+IgJAAIAAhAQAAglgbAAQgNAAgKAMQgIALAAARIAAA9IgKAAIAAhrIAKAAIAAASIAAAAQALgUAWAAQANAAAHAGQAJAHACALQAFgLAJgHQAKgGALAAQAkAAgBArIAABCg");
	this.shape_279.setTransform(417.5,680.2);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#333333").s().p("AgmBIIAAgMQAOAIAPAAQARAAALgKQAKgKAAgRQAAgkgpAAIgWABIAFhIIA+AAIAAAJIg2AAIgDA2IAPgBQAXAAANAMQAMAKAAAWQAAAVgNANQgNANgXAAQgQAAgMgFg");
	this.shape_280.setTransform(397.2,678.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#333333").s().p("AAOBNIAAiKQgIAHgIAFIgUAJIAAgJIAMgFIAKgGIAKgIIAKgIIADAAIAACZg");
	this.shape_281.setTransform(387.1,678);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#333333").s().p("AgoBGIAAgLQARALAPAAQASAAAKgKQALgJAAgPQAAgRgMgJQgMgIgVAAIgMAAIAAgIIAKAAQAUAAALgJQAKgIAAgQQAAgOgIgHQgHgIgOAAQgOAAgQAKIAAgLQASgIAOAAQARAAAKAKQAKAJAAAQQABAfgeAIIAAABQAQABAKAKQAJAKAAAPQAAAUgOAMQgNAMgWAAQgRAAgPgIg");
	this.shape_282.setTransform(332.3,679.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#333333").s().p("AgeAwQgJgIAAgOQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAPIAAgMQAGgFAKgDQAKgDAIgBQARABAJAJQAJALAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLABQgPAAgJgJgAABAAQgQACgHAGQgHAFAAANQAAAKAHAFQAGAHALAAQAPAAAKgMQALgLAAgTIAAgJg");
	this.shape_283.setTransform(315.6,681.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#333333").s().p("AgiBDQgMgPAAgZQAAgaAOgQQAOgQAVAAQAXAAALAUIAAAAIAAhFIAKAAIAACfIgKAAIAAgUIAAAAQgFAKgKAGQgLAGgMAAQgUAAgNgOgAgZgJQgLAMAAAXQAAAWAKAMQAKANAQAAQARAAAKgMQAKgLAAgRIAAgUQABgOgKgKQgKgLgPAAQgRAAgLANg");
	this.shape_284.setTransform(304,678.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#333333").s().p("AgeAwQgJgIAAgOQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAPIAAgMQAGgFAKgDQAKgDAIgBQARABAJAJQAJALAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLABQgPAAgJgJgAABAAQgQACgHAGQgHAFAAANQAAAKAHAFQAGAHALAAQAPAAAKgMQALgLAAgTIAAgJg");
	this.shape_285.setTransform(292.8,681.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#333333").s().p("AgYA3IAAhrIAJAAIAAAYQAEgNAIgGQAHgHAKAAQAHAAAEACIAAAKQgFgDgGgBQgNAAgHAOQgJANAAAYIAAAyg");
	this.shape_286.setTransform(284.9,681.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#333333").s().p("AgeAwQgJgIAAgOQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAPIAAgMQAGgFAKgDQAKgDAIgBQARABAJAJQAJALAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLABQgPAAgJgJgAABAAQgQACgHAGQgHAFAAANQAAAKAHAFQAGAHALAAQAPAAAKgMQALgLAAgTIAAgJg");
	this.shape_287.setTransform(275,681.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#333333").s().p("AguBQIAAidIAJAAIAAAXIABAAQAGgMAKgHQALgGANAAQAUAAAMAOQALAPAAAYQAAAagOAQQgMARgVAAQgZAAgLgVIgBAAIAABEgAgag6QgLANAAARIAAAOQAAAPALALQAKAMAQAAQAQAAALgOQAKgNAAgXQAAgUgJgMQgKgMgQAAQgSAAgKAMg");
	this.shape_288.setTransform(264.3,683.7);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#333333").s().p("AAfA3IAAg+QAAgngcAAQgOAAgKAMQgKALAAARIAAA9IgKAAIAAhrIAKAAIAAAUIAAAAQAMgWAYAAQASAAAJALQAJAMAAAWIAABAg");
	this.shape_289.setTransform(186.1,683.2);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#333333").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_290.setTransform(177.9,681.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#333333").s().p("AA+A3IAAhAQAAgUgFgIQgHgJgOAAQgNAAgJALQgJALAAARIAAA+IgJAAIAAhAQAAglgbAAQgNAAgKAMQgIALAAARIAAA9IgKAAIAAhrIAKAAIAAASIABAAQAKgUAWAAQANAAAHAGQAJAHACALQAFgLAJgHQAKgGALAAQAkAAAAArIAABCg");
	this.shape_291.setTransform(167,683.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#333333").s().p("AgRBLQgIgDgGgGQgGgFgDgIQgDgJAAgKIABgMQACgGAEgFIAIgKQAGgDAHgCIgKgGQgEgEgDgEQgDgFgCgFQgCgFAAgFQAAgJADgHQAEgHAFgFQAFgFAHgDQAIgDAHAAQAJAAAHADQAHADAFAFQAGAFADAHQADAHAAAJQAAAFgCAFIgFAKIgHAIIgJAGQAHACAFADQAFAFAEAFQADAFACAGIABAMQAAAKgDAIQgDAJgGAFQgGAGgIADQgIADgKAAQgJAAgIgDgAgNACQgGADgFAFQgEAEgDAHQgCAGAAAIQAAAIACAGQADAGAEAFQAFAFAGACQAGADAHAAQAHAAAHgDQAGgCAEgFQAFgFADgGQACgGAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgCQgGgDgIAAQgHAAgGACgAgLhCQgFADgEAEQgEAEgCAFQgCAGAAAGQAAAGACAGQACAFAEAEQAEAEAGACQAFADAFAAQAGAAAFgDQAGgCAEgEQAEgEACgFQACgGAAgGQAAgHgCgFQgCgFgEgEQgEgFgFgCQgGgCgGAAQgGAAgFACg");
	this.shape_292.setTransform(146.6,681.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#333333").s().p("AAOBNIAAiKQgIAHgIAFIgUAJIAAgJIAMgFIAKgGIAKgIIAKgIIADAAIAACZg");
	this.shape_293.setTransform(62,681);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#333333").s().p("AgqBNIAAgHQAAgHACgFQAAgHADgEQACgFAEgEIAIgJIALgIIAMgKIANgKQAFgDAFgGQAFgFACgHQACgGABgKQgBgPgIgHQgIgJgPAAQgJAAgKAEQgJAFgJAIIAAgMQAIgGALgEQAKgEAKAAQAIAAAIADQAIADAFAFQAFAFADAHQACAHAAAJQAAAKgCAIQgDAJgFAHIgMALIgPAKIgRAOQgGAFgFAGQgEAFgCAFQgCAGAAAIIAAABIBKAAIAAAJg");
	this.shape_294.setTransform(53,681);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#333333").s().p("AAOBNIAAiKQgIAHgIAFIgUAJIAAgJIAMgFIAKgGIAKgIIAKgIIADAAIAACZg");
	this.shape_295.setTransform(43.2,681);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#333333").s().p("AAfA3IAAg+QAAgngcAAQgOAAgKAMQgKALAAARIAAA9IgKAAIAAhrIAKAAIAAAUIAAAAQANgWAXAAQASAAAJALQAKAMgBAWIAABAg");
	this.shape_296.setTransform(437.7,643.2);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#333333").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_297.setTransform(429.6,641.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#333333").s().p("AA/A3IAAhAQgBgUgFgIQgHgJgOAAQgNAAgJALQgJALAAARIAAA+IgJAAIAAhAQAAglgbAAQgOAAgIAMQgJALAAARIAAA9IgJAAIAAhrIAJAAIAAASIABAAQAKgUAWAAQAMAAAJAGQAIAHACALQAFgLAJgHQAKgGALAAQAkAAAAArIAABCg");
	this.shape_298.setTransform(418.6,643.2);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#333333").s().p("AghA7QgMgTAAglQAAgnANgVQAMgUAWAAQAsAAAABNQAAAmgNAUQgMAUgVAAQgVAAgMgTgAgZgyQgKARAAAjQAAAhAKARQAJASAQAAQARAAAJgSQAJgSAAghQAAhFgiAAQgQAAgKASg");
	this.shape_299.setTransform(398.2,641.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#333333").s().p("AgqBNIAAgHQAAgHABgFQABgHADgEQACgFADgEIAJgIIAKgJIANgJIAMgLQAHgDAEgGQAEgFADgHQACgGAAgKQABgPgJgHQgIgJgPAAQgJAAgJAEQgKAFgJAIIAAgMQAJgGAKgEQAJgEAKAAQAKAAAHADQAIADAEAFQAGAFACAHQADAHABAJQgBAKgDAIQgCAIgGAIIgMAKIgPALIgQAOQgGAFgFAFQgEAFgDAGQgCAGAAAIIAAABIBLAAIAAAJg");
	this.shape_300.setTransform(386.9,641.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#333333").s().p("AgqBNIAAgHQAAgHACgFQABgHACgEQACgFAEgEIAIgIIAKgJIANgJIANgLQAFgDAFgGQAEgFADgHQADgGgBgKQAAgPgIgHQgIgJgPAAQgJAAgKAEQgJAFgJAIIAAgMQAJgGAKgEQAKgEAKAAQAIAAAIADQAIADAEAFQAGAFADAHQACAHAAAJQAAAKgCAIQgEAIgFAIIgLAKIgQALIgQAOQgGAFgFAFQgFAFgCAGQgBAGAAAIIAAABIBKAAIAAAJg");
	this.shape_301.setTransform(332.1,641.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#333333").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgDAIAAQARAAAJAKQAJAKAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLAAQgPAAgJgIgAABAAQgQACgHAGQgHAGAAAMQAAAKAHAFQAGAHALAAQAPAAAKgMQALgMAAgRIAAgKg");
	this.shape_302.setTransform(315.4,643.4);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#333333").s().p("AghBDQgNgPAAgZQAAgaAOgQQANgQAWAAQAXAAALAUIABAAIAAhFIAJAAIAACfIgJAAIAAgUIgBAAQgFAKgLAGQgKAGgMAAQgUAAgMgOgAgYgJQgMAMAAAXQAAAWAKAMQAKANAQAAQARAAALgMQAJgLABgRIAAgUQAAgOgKgKQgJgLgQAAQgQAAgLANg");
	this.shape_303.setTransform(303.9,640.9);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#333333").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgDAIAAQARAAAJAKQAJAKAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLAAQgPAAgJgIgAABAAQgQACgHAGQgHAGAAAMQAAAKAHAFQAGAHALAAQAPAAAKgMQALgMAAgRIAAgKg");
	this.shape_304.setTransform(292.7,643.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#333333").s().p("AgZA3IAAhrIAKAAIAAAYQAEgNAIgGQAHgHAKAAQAGAAAGACIAAAKQgGgDgGAAQgNAAgIANQgIANAAAXIAAAzg");
	this.shape_305.setTransform(284.7,643.3);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#333333").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgDAIAAQARAAAJAKQAJAKAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLAAQgPAAgJgIgAABAAQgQACgHAGQgHAGAAAMQAAAKAHAFQAGAHALAAQAPAAAKgMQALgMAAgRIAAgKg");
	this.shape_306.setTransform(274.9,643.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#333333").s().p("AguBQIAAidIAKAAIAAAXIAAAAQAGgMALgGQAKgHAMAAQAVAAAMAOQALAOAAAZQAAAagNARQgNAQgVAAQgYAAgMgWIAAAAIAABFgAgag6QgKANAAARIAAANQgBAQALALQAKANAQAAQAQAAALgPQAKgNAAgXQAAgUgJgNQgKgMgQAAQgSAAgKANg");
	this.shape_307.setTransform(264.1,645.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#333333").s().p("AAfA3IAAg+QAAgngcAAQgOAAgKAMQgKALAAARIAAA9IgKAAIAAhrIAKAAIAAAUIAAAAQAMgWAYAAQASAAAJALQAJAMAAAWIAABAg");
	this.shape_308.setTransform(186.1,643.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#333333").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_309.setTransform(177.9,641.2);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#333333").s().p("AA+A3IAAhAQAAgUgFgIQgHgJgOAAQgNAAgJALQgJALAAARIAAA+IgJAAIAAhAQAAglgbAAQgNAAgKAMQgIALAAARIAAA9IgKAAIAAhrIAKAAIAAASIABAAQAKgUAWAAQANAAAHAGQAJAHACALQAFgLAJgHQAKgGALAAQAkAAAAArIAABCg");
	this.shape_310.setTransform(167,643.2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#333333").s().p("AgmBIIAAgMQAOAJAPAAQARAAALgLQAKgKAAgRQAAgkgpAAIgWABIAFhIIA+AAIAAAJIg2AAIgDA2IAPgBQAXAAANAMQAMALAAAUQAAAWgNANQgNANgXAAQgQAAgMgFg");
	this.shape_311.setTransform(146.6,641.3);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#333333").s().p("AgRBLQgIgDgGgGQgGgFgDgIQgDgJAAgKIABgMQACgGAEgFIAIgKQAGgDAHgCIgKgGQgEgEgDgEQgDgFgCgFQgCgFAAgFQAAgJADgHQAEgHAFgFQAFgFAHgDQAIgDAHAAQAJAAAHADQAHADAFAFQAGAFADAHQADAHAAAJQAAAFgCAFIgFAKIgHAIIgJAGQAHACAFADQAFAFAEAFQADAFACAGIABAMQAAAKgDAIQgDAJgGAFQgGAGgIADQgIADgKAAQgJAAgIgDgAgNACQgGADgFAFQgEAEgDAHQgCAGAAAIQAAAIACAGQADAGAEAFQAFAFAGACQAGADAHAAQAHAAAHgDQAGgCAEgFQAFgFADgGQACgGAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgCQgGgDgIAAQgHAAgGACgAgLhCQgFADgEAEQgEAEgCAFQgCAGAAAGQAAAGACAGQACAFAEAEQAEAEAGACQAFADAFAAQAGAAAFgDQAGgCAEgEQAEgEACgFQACgGAAgGQAAgHgCgFQgCgFgEgEQgEgFgFgCQgGgCgGAAQgGAAgFACg");
	this.shape_312.setTransform(61,641.2);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#333333").s().p("AAOBNIAAiKQgIAHgIAFIgUAJIAAgJIAMgFIAKgGIAKgIIAKgIIADAAIAACZg");
	this.shape_313.setTransform(50.9,641);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#333333").s().p("AAOBNIAAiKQgIAHgIAFIgUAJIAAgJIAMgFIAKgGIAKgIIAKgIIADAAIAACZg");
	this.shape_314.setTransform(43.2,641);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#666666").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgEAIABQARgBAJALQAJAKAAAUIAABFIgJAAIAAgVIgBAAQgFAKgKAHQgKAHgLgBQgPAAgJgIgAABAAQgQADgHAFQgHAFAAANQAAAJAHAHQAGAGALAAQAPAAAKgMQALgMAAgRIAAgKg");
	this.shape_315.setTransform(439.7,599);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#666666").s().p("AgiBDQgMgPAAgZQAAgaANgQQAOgQAVAAQAYAAALAUIAAAAIAAhFIAKAAIAACfIgKAAIAAgUIAAAAQgFAKgKAGQgLAGgMAAQgUAAgNgOgAgZgJQgLAMAAAXQAAAWAKAMQAKANAQAAQARAAAKgMQAKgLAAgRIAAgUQAAgOgJgKQgJgLgRAAQgQAAgLANg");
	this.shape_316.setTransform(428.1,596.5);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#666666").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgEAIABQARgBAJALQAJAKAAAUIAABFIgJAAIAAgVIgBAAQgFAKgKAHQgKAHgLgBQgPAAgJgIgAABAAQgQADgHAFQgHAFAAANQAAAJAHAHQAGAGALAAQAPAAAKgMQALgMAAgRIAAgKg");
	this.shape_317.setTransform(416.9,599);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#666666").s().p("AgnBJIAAgKQARAJAQAAQAsAAAAgwIAAgNIgBAAQgMAWgagBQgUAAgMgOQgNgOAAgZQAAgaAOgQQANgQAWAAQAXAAALATIABAAIAAgRIAJAAIAABjQAAAegNAOQgNAPgbAAQgQgBgRgHgAgZg6QgLAOAAAWQAAAWAKALQAKANAQAAQARAAAKgMQALgLAAgPIAAgVQAAgPgKgKQgKgLgPAAQgRAAgLANg");
	this.shape_318.setTransform(405.4,601.4);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#666666").s().p("AgfAqQgNgPAAgbQAAgXAOgQQANgRAUABQAVgBALAOQAKAOAAAZIAAADIhPAAQAAAXAKAMQALANAQAAQATAAARgNIAAAKQgQALgWAAQgTAAgNgOgAgVgkQgKAKgDASIBFAAQgBgSgIgKQgIgLgPAAQgOAAgKALg");
	this.shape_319.setTransform(394.3,599);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#666666").s().p("AgEBQIAAifIAJAAIAACfg");
	this.shape_320.setTransform(386.6,596.4);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#666666").s().p("AgEBQIAAifIAJAAIAACfg");
	this.shape_321.setTransform(382.1,596.4);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#666666").s().p("AglApQgNgPAAgaQAAgaAOgPQAPgOAWAAQAYAAANAOQANAPAAAaQAAAZgOAQQgNAPgYAAQgXAAgOgPgAgcgiQgMANAAAWQAAAVAMANQALANARAAQAUAAALgNQAKgNAAgWQAAgWgKgNQgLgMgTAAQgSAAgLANg");
	this.shape_322.setTransform(437.6,571.5);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#666666").s().p("AguBQIAAidIAKAAIAAAXIAAAAQAFgMAMgGQALgHAMAAQAUAAALAOQAMAOAAAYQAAAbgNARQgOAQgUAAQgZAAgLgWIAAAAIAABFgAgag5QgKAMAAARIAAANQgBAQAKALQALAMAQABQAQAAAKgPQALgNAAgXQAAgVgKgMQgJgLgQgBQgSABgKANg");
	this.shape_323.setTransform(425.9,573.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#666666").s().p("AA+A3IAAhAQAAgUgFgIQgHgJgOAAQgMAAgKALQgJALAAARIAAA+IgJAAIAAhAQAAglgbAAQgNAAgKAMQgIALAAARIAAA9IgKAAIAAhrIAKAAIAAASIAAAAQALgUAWAAQANAAAHAGQAJAHACALQAFgLAJgHQAKgGALAAQAkAAgBArIAABCg");
	this.shape_324.setTransform(410.7,571.3);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#666666").s().p("AgfAqQgNgQAAgaQAAgXANgRQAOgPAUAAQAVAAALANQAKAOAAAZIAAADIhPAAQAAAXALANQAKAMAQAAQATAAARgNIAAAKQgRAMgUgBQgUABgNgPgAgVgkQgKAKgCASIBEAAQAAgSgJgKQgJgLgOAAQgOAAgKALg");
	this.shape_325.setTransform(396.2,571.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#666666").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_326.setTransform(388.5,569.3);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#666666").s().p("AgIAqIAAhHIgUAAIAAgJIAUAAIAAgcIAEgCIAEgCIAAAgIAdAAIAAAJIgdAAIAABGQAAALAEAFQADAFAJAAQAGAAAHgEIAAAJQgIAEgGAAQgXAAAAgdg");
	this.shape_327.setTransform(383,570);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#666666").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgEAIABQARAAAJAKQAJAKAAAUIAABFIgJAAIAAgVIgBAAQgFAKgKAHQgKAGgLAAQgPAAgJgIgAABAAQgQADgHAFQgHAGAAAMQAAAJAHAHQAGAGALAAQAPAAAKgMQALgLAAgSIAAgKg");
	this.shape_328.setTransform(308.8,598.5);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#666666").s().p("AgIAqIAAhHIgUAAIAAgJIAUAAIAAgcIAEgCIAEgCIAAAgIAdAAIAAAJIgdAAIAABGQAAALAEAFQADAFAJAAQAGAAAHgEIAAAJQgIAEgGAAQgXAAAAgdg");
	this.shape_329.setTransform(300.4,597);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#666666").s().p("AgeAxIAAgMQAFAFAIADQAIADAGAAQAYAAAAgVQAAgHgFgFQgGgGgMgFQgPgGgGgGQgHgIAAgKQAAgOAKgHQAKgIAOAAQAOgBAKAGIAAALQgMgIgNAAQgJAAgHAGQgGAGAAAIQAAAIAEAEQAEAGANAFQARAHAGAHQAGAGAAALQAAANgJAIQgKAIgQAAQgQAAgKgHg");
	this.shape_330.setTransform(293.1,598.5);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#666666").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgEAIABQARAAAJAKQAJAKAAAUIAABFIgJAAIAAgVIgBAAQgFAKgKAHQgKAGgLAAQgPAAgJgIgAABAAQgQADgHAFQgHAGAAAMQAAAJAHAHQAGAGALAAQAPAAAKgMQALgLAAgSIAAgKg");
	this.shape_331.setTransform(283.3,598.5);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#666666").s().p("AAfBQIAAhAQABgTgHgJQgHgJgPAAQgNAAgLALQgKAKAAAUIAAA8IgKAAIAAifIAKAAIAABHIAAAAQANgWAXABQASAAAJALQAKALgBAUIAABDg");
	this.shape_332.setTransform(272.6,595.9);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#666666").s().p("AgkApQgOgPAAgaQAAgZAPgQQAOgPAWABQAYgBANAPQANAQAAAZQAAAZgOAQQgNAPgYAAQgWAAgOgPgAgcgiQgMANAAAWQAAAVAMANQAKANATAAQATAAAKgNQALgMAAgXQAAgWgLgNQgKgMgTAAQgSAAgLANg");
	this.shape_333.setTransform(185.7,599);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#666666").s().p("AgkA8IAAAAIAAATIgKAAIAAifIAKAAIAABKIAAAAQAGgMALgGQAKgHAMAAQAVAAAMAOQALAPAAAXQAAAbgNARQgOAQgUAAQgZAAgLgVgAgagJQgKALAAARIAAAOQAAAQAKAMQAKAMAQAAQAQAAALgPQAKgOAAgXQAAgUgJgLQgKgMgQAAQgSAAgKANg");
	this.shape_334.setTransform(174,596.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#666666").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_335.setTransform(165.3,596.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#666666").s().p("AgZA3IAAhrIAKAAIAAAYQAEgMAIgHQAHgHALAAQAGAAAFACIAAAKQgFgEgHABQgNAAgIANQgIANAAAXIAAAzg");
	this.shape_336.setTransform(160.3,598.9);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#666666").s().p("AgYA3IAAhrIAJAAIAAAYQAEgMAIgHQAHgHAKAAQAHAAAEACIAAAKQgFgEgGABQgNAAgHANQgJANAAAXIAAAzg");
	this.shape_337.setTransform(153.1,598.9);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#666666").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgEAIABQARgBAJALQAJAKAAAUIAABFIgJAAIAAgVIgBAAQgFAKgKAHQgKAHgLgBQgPAAgJgIgAABAAQgQADgHAFQgHAFAAANQAAAJAHAHQAGAGALAAQAPAAAKgMQALgMAAgRIAAgKg");
	this.shape_338.setTransform(143.3,599);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#666666").s().p("AgkApQgOgPAAgaQAAgaAOgPQAPgOAWAAQAYAAANAOQANAPAAAaQAAAZgOAQQgNAPgYAAQgWAAgOgPgAgcgiQgMANAAAWQAAAVAMANQALANARAAQAUAAAKgNQALgNAAgWQAAgWgLgNQgKgMgTAAQgSAAgLANg");
	this.shape_339.setTransform(195.8,571.5);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#666666").s().p("AguBQIAAidIAKAAIAAAXIAAAAQAGgMALgGQAKgHAMAAQAVAAALAOQAMAOAAAYQAAAbgNARQgNAQgVAAQgYAAgMgWIAAAAIAABFgAgag5QgKAMAAARIAAANQgBAQAKALQALAMAQABQAQAAAKgPQALgNAAgXQAAgVgKgMQgJgLgQgBQgSABgKANg");
	this.shape_340.setTransform(184.1,573.8);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#666666").s().p("AA+A3IAAhAQABgUgHgIQgGgJgOAAQgMAAgKALQgJALAAARIAAA+IgJAAIAAhAQAAglgbAAQgNAAgKAMQgIALAAARIAAA9IgKAAIAAhrIAKAAIAAASIAAAAQALgUAXAAQAMAAAHAGQAJAHACALQAFgLAKgHQAJgGALAAQAjAAAAArIAABCg");
	this.shape_341.setTransform(168.9,571.3);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#666666").s().p("AgfAqQgNgQAAgaQAAgXANgRQAOgPAVAAQAUAAAKANQALAOAAAZIAAADIhPAAQAAAXALANQAKAMARAAQASAAARgNIAAAKQgRAMgUgBQgUABgNgPgAgVgkQgKAKgCASIBEAAQAAgSgJgKQgIgLgPAAQgOAAgKALg");
	this.shape_342.setTransform(154.5,571.5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#666666").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_343.setTransform(146.8,569.3);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#666666").s().p("AgIAqIAAhHIgUAAIAAgJIAUAAIAAgcIAEgCIAEgCIAAAgIAdAAIAAAJIgdAAIAABGQAAALAEAFQADAFAJAAQAGAAAHgEIAAAJQgIAEgGAAQgXAAAAgdg");
	this.shape_344.setTransform(141.3,570);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#666666").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgDAIAAQARAAAJAKQAJAKAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLAAQgPAAgJgIgAABAAQgQADgHAFQgHAGAAAMQAAAKAHAFQAGAHALAAQAPAAAKgMQALgMAAgRIAAgKg");
	this.shape_345.setTransform(70.4,597.5);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#666666").s().p("AgfApQgNgPAAgaQAAgXAOgRQANgPAVAAQAUAAAKANQALAOAAAZIAAAEIhPAAQAAAWALANQAKAMARAAQASAAARgNIAAAKQgRAMgUgBQgUABgNgQgAgVgkQgKAJgCAUIBEAAQAAgTgJgKQgJgLgOAAQgOAAgKALg");
	this.shape_346.setTransform(59.9,597.5);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#666666").s().p("AAgA3IAAg+QAAgngcAAQgPAAgKAMQgKALAAARIAAA9IgJAAIAAhrIAJAAIAAAUIABAAQAMgWAYAAQARAAAJALQAKAMAAAWIAABAg");
	this.shape_347.setTransform(48.8,597.3);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#666666").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_348.setTransform(40.6,595.3);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#666666").s().p("AgjBMIAAiXIALAAIAACNIA7AAIAAAKg");
	this.shape_349.setTransform(34,595.3);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#666666").s().p("AgoBGIAAgLQARALAPAAQASAAAKgKQAKgJAAgPQABgRgMgJQgMgIgVAAIgMAAIAAgIIAKAAQAUAAALgJQAKgIAAgQQAAgOgHgHQgIgIgOAAQgOAAgQAKIAAgLQASgIAOAAQARAAAKAKQAKAJAAAQQAAAfgdAIIAAABQAQABAKAKQAJAKAAAPQAAAUgOAMQgNAMgWAAQgQAAgQgIg");
	this.shape_350.setTransform(424.9,525.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#666666").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgDAIAAQARAAAJAKQAJAKAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLAAQgPAAgJgIgAABAAQgQADgHAFQgHAGAAAMQAAAKAHAFQAGAHALAAQAPAAAKgMQALgMAAgRIAAgKg");
	this.shape_351.setTransform(408.2,527.3);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#666666").s().p("AgiBDQgMgPAAgZQAAgaANgQQAOgQAVAAQAYAAALAUIAAAAIAAhFIAKAAIAACfIgKAAIAAgUIAAAAQgFAKgKAGQgLAGgMAAQgUAAgNgOgAgZgJQgLAMAAAXQAAAWAKAMQAKANAQAAQARAAAKgMQAKgLAAgRIAAgUQAAgOgJgKQgJgLgRAAQgQAAgLANg");
	this.shape_352.setTransform(396.6,524.8);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#666666").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgDAIAAQARAAAJAKQAJAKAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLAAQgPAAgJgIgAABAAQgQADgHAFQgHAGAAAMQAAAKAHAFQAGAHALAAQAPAAAKgMQALgMAAgRIAAgKg");
	this.shape_353.setTransform(385.4,527.3);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#666666").s().p("AgYA3IAAhrIAJAAIAAAYQAEgNAIgGQAHgHAKAAQAGAAAFACIAAAKQgEgDgHAAQgNAAgHANQgJANAAAXIAAAzg");
	this.shape_354.setTransform(377.5,527.2);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#666666").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgDAIAAQARAAAJAKQAJAKAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLAAQgPAAgJgIgAABAAQgQADgHAFQgHAGAAAMQAAAKAHAFQAGAHALAAQAPAAAKgMQALgMAAgRIAAgKg");
	this.shape_355.setTransform(367.6,527.3);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#666666").s().p("AguBQIAAidIAJAAIAAAXIABAAQAFgMALgGQAMgHAMAAQAUAAALAOQAMAOAAAZQAAAagOARQgNAQgUAAQgYAAgMgWIgBAAIAABFgAgag6QgLANAAARIAAANQABAQAJALQALANAQAAQAQAAAKgPQALgNAAgXQAAgUgJgNQgKgMgQABQgSgBgKANg");
	this.shape_356.setTransform(356.9,529.6);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#666666").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgDAIAAQARAAAJAKQAJAKAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLAAQgPAAgJgIgAABAAQgQADgHAFQgHAGAAAMQAAAKAHAFQAGAHALAAQAPAAAKgMQALgMAAgRIAAgKg");
	this.shape_357.setTransform(339,527.3);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#666666").s().p("AgIAqIAAhHIgUAAIAAgJIAUAAIAAgcIAEgCIAEgCIAAAgIAdAAIAAAJIgdAAIAABGQAAALAEAFQADAFAJAAQAGAAAHgEIAAAJQgIAEgGAAQgXAAAAgdg");
	this.shape_358.setTransform(330.6,525.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#666666").s().p("AgeAxIAAgLQAFAEAIADQAIADAGAAQAYAAAAgVQAAgHgFgGQgGgEgMgGQgPgGgGgGQgHgIAAgKQAAgOAKgIQAKgHAOAAQAOgBAKAGIAAALQgMgIgNAAQgJAAgHAGQgGAGAAAIQAAAIAEAEQAEAFANAGQARAIAGAGQAGAGAAALQAAANgJAIQgKAIgQAAQgQAAgKgHg");
	this.shape_359.setTransform(323.4,527.3);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#666666").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgDAIAAQARAAAJAKQAJAKAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLAAQgPAAgJgIgAABAAQgQADgHAFQgHAGAAAMQAAAKAHAFQAGAHALAAQAPAAAKgMQALgMAAgRIAAgKg");
	this.shape_360.setTransform(313.6,527.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#666666").s().p("AAfBQIAAhAQABgTgHgJQgHgJgPAAQgNAAgKALQgLAKAAAUIAAA8IgKAAIAAifIAKAAIAABHIAAAAQANgWAYABQARAAAJALQAKALAAAUIAABDg");
	this.shape_361.setTransform(302.8,524.7);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#666666").s().p("AAOBNIAAiKQgIAHgIAFIgUAJIAAgJIAMgFIAKgGIAKgIIAKgIIADAAIAACZg");
	this.shape_362.setTransform(286.6,524.9);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#666666").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgDAIAAQARAAAJAKQAJAKAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLAAQgPAAgJgIgAABAAQgQADgHAFQgHAGAAAMQAAAKAHAFQAGAHALAAQAPAAAKgMQALgMAAgRIAAgKg");
	this.shape_363.setTransform(272,527.3);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#666666").s().p("AgiBDQgMgPAAgZQAAgaANgQQAOgQAVAAQAZAAAKAUIAAAAIAAhFIAKAAIAACfIgKAAIAAgUIAAAAQgFAKgLAGQgKAGgMAAQgUAAgNgOgAgYgJQgMAMAAAXQAAAWAKAMQAKANAQAAQARAAALgMQAKgLgBgRIAAgUQAAgOgJgKQgJgLgRAAQgPAAgLANg");
	this.shape_364.setTransform(260.4,524.8);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#666666").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgDAIAAQARAAAJAKQAJAKAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLAAQgPAAgJgIgAABAAQgQADgHAFQgHAGAAAMQAAAKAHAFQAGAHALAAQAPAAAKgMQALgMAAgRIAAgKg");
	this.shape_365.setTransform(249.2,527.3);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#666666").s().p("AgZA3IAAhrIAKAAIAAAYQAEgNAIgGQAHgHALAAQAGAAAFACIAAAKQgFgDgHAAQgNAAgIANQgIANAAAXIAAAzg");
	this.shape_366.setTransform(241.3,527.2);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#666666").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgDAIAAQARAAAJAKQAJAKAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLAAQgPAAgJgIgAABAAQgQADgHAFQgHAGAAAMQAAAKAHAFQAGAHALAAQAPAAAKgMQALgMAAgRIAAgKg");
	this.shape_367.setTransform(231.4,527.3);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#666666").s().p("AguBQIAAidIAJAAIAAAXIABAAQAFgMAMgGQALgHAMAAQAUAAALAOQAMAOAAAZQAAAagNARQgOAQgUAAQgZAAgLgWIgBAAIAABFgAgag6QgLANAAARIAAANQAAAQAKALQALANAQAAQAQAAAKgPQALgNAAgXQAAgUgKgNQgJgMgQABQgSgBgKANg");
	this.shape_368.setTransform(220.7,529.6);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#666666").s().p("AgfApQgNgPAAgaQAAgXANgRQAOgPAUAAQAVAAALANQAKAOAAAZIAAAEIhPAAQAAAVAKAOQALAMAQAAQATAAARgNIAAAKQgQAMgWgBQgTABgNgQgAgVgkQgKAJgDAUIBFAAQgBgTgIgKQgIgLgPAAQgOAAgKALg");
	this.shape_369.setTransform(202.9,527.3);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#666666").s().p("AghBDQgNgPAAgZQAAgaANgQQAOgQAWAAQAYAAAKAUIABAAIAAhFIAJAAIAACfIgJAAIAAgUIgBAAQgFAKgLAGQgKAGgMAAQgUAAgMgOgAgYgJQgMAMAAAXQAAAWAKAMQAKANAQAAQARAAALgMQAKgLAAgRIAAgUQAAgOgKgKQgJgLgQAAQgQAAgLANg");
	this.shape_370.setTransform(191,524.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#666666").s().p("AgeAxIAAgLQAFAEAIADQAIADAGAAQAYAAAAgVQAAgHgFgGQgGgEgMgGQgPgGgGgGQgHgIAAgKQAAgOAKgIQAKgHAOAAQAOgBAKAGIAAALQgMgIgNAAQgJAAgHAGQgGAGAAAIQAAAIAEAEQAEAFANAGQARAIAGAGQAGAGAAALQAAANgJAIQgKAIgQAAQgQAAgKgHg");
	this.shape_371.setTransform(181.2,527.3);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#666666").s().p("AgfApQgNgPAAgaQAAgXAOgRQANgPAUAAQAVAAALANQAKAOAAAZIAAAEIhPAAQAAAVAKAOQALAMAQAAQATAAARgNIAAAKQgQAMgWgBQgTABgNgQgAgVgkQgKAJgDAUIBFAAQgBgTgIgKQgIgLgPAAQgOAAgKALg");
	this.shape_372.setTransform(171.5,527.3);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#666666").s().p("AgiBDQgMgPAAgZQAAgaANgQQAOgQAVAAQAZAAAKAUIAAAAIAAhFIAKAAIAACfIgKAAIAAgUIAAAAQgFAKgLAGQgKAGgMAAQgUAAgNgOgAgYgJQgMAMAAAXQAAAWAKAMQAKANAQAAQARAAALgMQAKgLgBgRIAAgUQAAgOgJgKQgJgLgRAAQgPAAgLANg");
	this.shape_373.setTransform(159.6,524.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#666666").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgDAIAAQARAAAJAKQAJAKAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLAAQgPAAgJgIgAABAAQgQADgHAFQgHAGAAAMQAAAKAHAFQAGAHALAAQAPAAAKgMQALgMAAgRIAAgKg");
	this.shape_374.setTransform(142.6,527.3);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#666666").s().p("AgIAqIAAhHIgUAAIAAgJIAUAAIAAgcIAEgCIAEgCIAAAgIAdAAIAAAJIgdAAIAABGQAAALAEAFQADAFAJAAQAGAAAHgEIAAAJQgIAEgGAAQgXAAAAgdg");
	this.shape_375.setTransform(134.2,525.8);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#666666").s().p("AgpAHIAAg9IAKAAIAAA7QAAAWAHAKQAIAKAPAAQAOAAAKgMQAJgLAAgSIAAg8IAKAAIAABrIgKAAIAAgUIgBAAQgLAWgWAAQgnAAAAgwg");
	this.shape_376.setTransform(125.2,527.4);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#666666").s().p("AgYA3IAAhrIAJAAIAAAYQAEgNAIgGQAHgHAKAAQAHAAAEACIAAAKQgFgDgGAAQgNAAgHANQgJANAAAXIAAAzg");
	this.shape_377.setTransform(116.7,527.2);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#666666").s().p("AgfApQgNgPAAgaQAAgXAOgRQANgPAVAAQATAAALANQALAOAAAZIAAAEIhPAAQAAAVALAOQAJAMASAAQASAAARgNIAAAKQgQAMgWgBQgTABgNgQgAgVgkQgKAJgDAUIBFAAQgBgTgIgKQgJgLgOAAQgOAAgKALg");
	this.shape_378.setTransform(101.1,527.3);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#666666").s().p("AgiBDQgMgPAAgZQAAgaANgQQAPgQAUAAQAZAAAKAUIAAAAIAAhFIAKAAIAACfIgKAAIAAgUIAAAAQgFAKgLAGQgKAGgMAAQgUAAgNgOgAgZgJQgLAMAAAXQAAAWAKAMQAKANAQAAQARAAAKgMQALgLgBgRIAAgUQAAgOgJgKQgJgLgRAAQgPAAgMANg");
	this.shape_379.setTransform(89.2,524.8);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#666666").s().p("AgfApQgNgPAAgaQAAgXANgRQAOgPAUAAQAVAAALANQAKAOAAAZIAAAEIhPAAQAAAVAKAOQALAMAQAAQATAAARgNIAAAKQgRAMgUgBQgUABgNgQgAgVgkQgKAJgCAUIBEAAQAAgTgJgKQgJgLgOAAQgOAAgKALg");
	this.shape_380.setTransform(72.2,527.3);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#666666").s().p("AgEBQIAAifIAJAAIAACfg");
	this.shape_381.setTransform(64.5,524.7);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#666666").s().p("AgEBQIAAifIAJAAIAACfg");
	this.shape_382.setTransform(60.1,524.7);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#666666").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgDAIAAQARAAAJAKQAJAKAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLAAQgPAAgJgIgAABAAQgQADgHAFQgHAGAAAMQAAAKAHAFQAGAHALAAQAPAAAKgMQALgMAAgRIAAgKg");
	this.shape_383.setTransform(52.3,527.3);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#666666").s().p("AgIAqIAAhHIgUAAIAAgJIAUAAIAAgcIAEgCIAEgCIAAAgIAdAAIAAAJIgdAAIAABGQAAALAEAFQADAFAJAAQAGAAAHgEIAAAJQgIAEgGAAQgXAAAAgdg");
	this.shape_384.setTransform(43.9,525.8);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#666666").s().p("AgfApQgNgPAAgaQAAgXAOgRQANgPAVAAQATAAALANQALAOAAAZIAAAEIhPAAQAAAVALAOQAJAMASAAQASAAARgNIAAAKQgQAMgWgBQgTABgNgQgAgVgkQgKAJgDAUIBFAAQgBgTgIgKQgJgLgOAAQgOAAgKALg");
	this.shape_385.setTransform(35.4,527.3);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#666666").s().p("AgiBDQgMgPAAgZQAAgaANgQQAPgQAUAAQAZAAAKAUIAAAAIAAhFIAKAAIAACfIgKAAIAAgUIAAAAQgFAKgLAGQgKAGgMAAQgUAAgNgOgAgZgJQgLAMAAAXQAAAWAKAMQAKANAQAAQARAAAKgMQALgLgBgRIAAgUQAAgOgJgKQgJgLgRAAQgPAAgMANg");
	this.shape_386.setTransform(23.5,524.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFFFFF").s().p("AgfBFIAAiGIAMAAIAAAeIAAAAQAFgQAKgIQAJgJAOAAQAHAAAGACIAAANQgHgEgIAAQgPAAgKARQgLAQAAAdIAABAg");
	this.shape_387.setTransform(412.2,147.1);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFFFFF").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghABQgVgBgVASIAAgPQAHgFANgFQANgEALAAQAUAAAMANQALANAAAYIAABXIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUADgJAHQgJAHAAAPQAAAMAJAIQAHAHAPAAQASABANgOQANgPAAgXIAAgMg");
	this.shape_388.setTransform(399.9,147.3);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFFFFF").s().p("AgmA9IAAgOQAHAGAKAEQAJACAIAAQAeABAAgaQAAgJgGgGQgIgHgPgHQgSgHgJgJQgHgJgBgNQAAgQANgKQANgLARAAQARAAANAIIAAANQgPgKgQABQgNgBgHAIQgIAGAAALQAAAKAEAGQAGAGAQAHQAWAJAHAIQAIAJAAANQAAAQgMAKQgMALgUAAQgUAAgNgKg");
	this.shape_389.setTransform(388.4,147.3);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFFFFF").s().p("AgzAJIAAhNIAMAAIAABKQAAAbAJANQAJAMATAAQASAAAMgOQAMgOAAgXIAAhLIAMAAIAACGIgMAAIAAgZIgBAAQgOAcgcAAQgwAAAAg8g");
	this.shape_390.setTransform(375.7,147.4);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFFFFF").s().p("AguAzQgRgTAAgfQAAghASgTQASgTAdAAQAcAAARATQARATAAAgQAAAfgRAUQgRAUgeAAQgcAAgSgUgAgkgqQgOAPAAAcQAAAaAOAQQANARAXgBQAZAAANgPQANgQAAgcQAAgcgNgPQgNgQgYABQgXAAgOAQg");
	this.shape_391.setTransform(353.6,147.3);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFFFFF").s().p("ABPBFIAAhQQAAgZgIgLQgIgKgSAAQgQAAgLAOQgMANAAAVIAABOIgLAAIAAhRQAAgtgiAAQgRAAgLAOQgLAOAAAVIAABNIgMAAIAAiGIAMAAIAAAXIABAAQAOgaAbAAQAPAAALAIQAKAJADAOQAGgPAMgIQAMgIANAAQAtAAAAA3IAABSg");
	this.shape_392.setTransform(335,147.1);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFFFFF").s().p("AguAzQgRgTAAgfQAAghASgTQASgTAdAAQAcAAARATQARATAAAgQAAAfgRAUQgRAUgeAAQgcAAgSgUgAgkgqQgOAPAAAcQAAAaAOAQQANARAXgBQAZAAANgPQANgQAAgcQAAgcgNgPQgNgQgYABQgXAAgOAQg");
	this.shape_393.setTransform(316.2,147.3);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FFFFFF").s().p("AgqBIQgZgaAAgqQAAgtAbgcQAagcAoAAQAWAAAUAIIAAANQgUgJgWAAQgjAAgWAZQgWAYAAAnQAAAmAVAXQAVAWAgAAQAaAAAVgLIAAANQgXAKgZAAQgmAAgYgag");
	this.shape_394.setTransform(300.1,144.6);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFFFFF").s().p("AgnA0QgQgTAAghQAAgeAQgTQARgVAaAAQAZAAAOASQANARAAAfIAAAFIhjAAQAAAcANAPQANAPAVAAQAXAAAWgQIAAANQgVAPgaAAQgZAAgQgTgAgbguQgMANgDAXIBWAAQgBgXgLgNQgKgMgSAAQgSAAgNAMg");
	this.shape_395.setTransform(171.4,146.3);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFFFFF").s().p("AgqBTQgQgSAAggQAAghARgTQASgUAaAAQAeAAANAZIABAAIAAhXIAMAAIAADHIgMAAIAAgYIgBAAQgGANgNAHQgNAIgQAAQgYAAgQgTgAgfgMQgOAQAAAcQAAAcAMAPQANAPATAAQAWAAANgOQANgOAAgVIAAgZQAAgSgMgNQgMgNgUAAQgVAAgNAQg");
	this.shape_396.setTransform(156.6,143.2);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFFFFF").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgrghAAQgVAAgVARIAAgPQAHgGANgEQANgEALAAQAUAAAMANQALANAAAYIAABYIgMAAIAAgbIAAAAQgHAOgMAHQgNAJgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAHAPAAQASABANgOQANgPAAgXIAAgMg");
	this.shape_397.setTransform(135.2,146.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFFFFF").s().p("AgfA0QgRgTAAgeQAAggATgUQATgVAdAAQAPAAAPAGIAAAOQgPgIgRAAQgXAAgOARQgPARAAAaQAAAaANAQQAOAPAVAAQAUAAAPgKIAAAMQgPAKgVAAQgaAAgRgTg");
	this.shape_398.setTransform(122.8,146.3);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFFFFF").s().p("AgfBFIAAiGIAMAAIAAAeIAAAAQAFgQAKgIQAJgJANAAQAIAAAGACIAAANQgGgEgJAAQgPAAgKARQgLAQAAAdIAABAg");
	this.shape_399.setTransform(113.8,146.1);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FFFFFF").s().p("AgnA0QgQgTAAghQAAgeAQgTQARgVAaAAQAZAAAOASQANARAAAfIAAAFIhjAAQAAAcANAPQANAPAVAAQAXAAAWgQIAAANQgVAPgaAAQgZAAgQgTgAgbguQgMANgDAXIBWAAQgBgXgLgNQgKgMgSAAQgSAAgNAMg");
	this.shape_400.setTransform(101.6,146.3);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FFFFFF").s().p("AgfA0QgRgTAAgeQAAggATgUQATgVAdAAQAPAAAPAGIAAAOQgPgIgRAAQgXAAgOARQgPARAAAaQAAAaANAQQAOAPAVAAQAUAAAPgKIAAAMQgPAKgVAAQgaAAgRgTg");
	this.shape_401.setTransform(88.8,146.3);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FFFFFF").s().p("AA+BeIgWg7IhQAAIgWA7IgOAAIBHi8IALAAIBHC8gAgEg/IggBWIBJAAIghhWIgCgHIgCgHIAAAAIgEAOg");
	this.shape_402.setTransform(74.3,143.6);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#999999").ss(2,1,1).p("EgjBAh2IMfAAEgTeAh2IQAAAEATuAh2IQBAAEgAbAh2IRFAAEgjBARZMBGwAAAEgjugh1MBGwAAA");
	this.shape_403.setTransform(239.2,395);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#0000CC").s().p("AgCAYQgIgCgHgFIgDgEIAAgHIgCgGQgBgFADgFQADgGAGgDQAHgEAFACIAAgDQAPAFAEAHQAEAGgBAIQgCAOgIAFQgFAEgFAAIgFgBg");
	this.shape_404.setTransform(-70.3,540);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#0099CC").s().p("AAvC5IAAlxMAhAAAAIAAFxgEghuAC5IAAlxMAgIAAAIAAFxg");
	this.shape_405.setTransform(242.3,144);

	this.instance_11 = new lib.Símbolo23();
	this.instance_11.parent = this;
	this.instance_11.setTransform(167.4,147.1,1,1,0,0,0,105.6,18.6);
	new cjs.ButtonHelper(this.instance_11, 0, 1, 1);

	this.txtinruta = new lib.an_TextInput({'id': 'txtinruta', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtinruta.setTransform(339.4,147.7,1,1.545,0,0,0,50,11.1);

	this.sa4 = new lib.sa4();
	this.sa4.parent = this;
	this.sa4.setTransform(91.4,37.2,1,1,0,0,0,62.3,23.7);

	this.atrasc = new lib.atrasc();
	this.atrasc.parent = this;
	this.atrasc.setTransform(91.4,88,1,1,0,0,0,62.3,23.7);

	this.instance_12 = new lib.rutax();
	this.instance_12.parent = this;
	this.instance_12.setTransform(111.2,391.7,1,1,0,0,0,31.6,14.8);
	new cjs.ButtonHelper(this.instance_12, 0, 1, 2, false, new lib.rutax(), 3);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#333333").s().p("AgeAwQgJgIAAgOQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAPIAAgMQAGgFAKgDQAKgDAIgBQARAAAJAKQAJALAAAUIAABFIgJAAIAAgWIgBAAQgFAMgKAGQgKAHgLAAQgPAAgJgJgAABAAQgQACgHAGQgHAFAAANQAAAJAHAGQAGAHALAAQAPAAAKgMQALgMAAgSIAAgJg");
	this.shape_406.setTransform(145.9,445.4);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#333333").s().p("AgfApQgNgPAAgaQAAgXANgQQAOgQAUgBQAVABALAOQAKAOAAAYIAAADIhPAAQAAAWAKANQALANAQAAQATAAARgOIAAAKQgRANgVAAQgTAAgNgQgAgVglQgKALgDASIBFAAQAAgSgJgLQgIgKgPAAQgOAAgKAKg");
	this.shape_407.setTransform(135.3,445.4);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#333333").s().p("AAfA3IAAg+QABgngcAAQgPAAgKAMQgKALAAARIAAA9IgJAAIAAhrIAJAAIAAAUIAAAAQAMgWAYAAQASAAAJALQAJAMAAAWIAABAg");
	this.shape_408.setTransform(124.2,445.3);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#333333").s().p("AgEBQIAAifIAJAAIAACfg");
	this.shape_409.setTransform(111.6,442.8);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#333333").s().p("AgeAwQgJgIAAgOQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAPIAAgMQAGgFAKgDQAKgDAIgBQARAAAJAKQAJALAAAUIAABFIgJAAIAAgWIgBAAQgFAMgKAGQgKAHgLAAQgPAAgJgJgAABAAQgQACgHAGQgHAFAAANQAAAJAHAGQAGAHALAAQAPAAAKgMQALgMAAgSIAAgJg");
	this.shape_410.setTransform(98,445.4);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#333333").s().p("AgEBQIAAifIAJAAIAACfg");
	this.shape_411.setTransform(90.7,442.8);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#333333").s().p("AgfApQgNgPAAgaQAAgXANgQQAOgQAUgBQAVABALAOQAKAOAAAYIAAADIhPAAQAAAWAKANQALANAQAAQATAAARgOIAAAKQgRANgUAAQgUAAgNgQgAgVglQgKALgCASIBEAAQAAgSgJgLQgJgKgOAAQgOAAgKAKg");
	this.shape_412.setTransform(77.2,445.4);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#333333").s().p("AgeAwQgJgIAAgOQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAPIAAgMQAGgFAKgDQAKgDAIgBQARAAAJAKQAJALAAAUIAABFIgJAAIAAgWIgBAAQgFAMgKAGQgKAHgLAAQgPAAgJgJgAABAAQgQACgHAGQgHAFAAANQAAAJAHAGQAGAHALAAQAPAAAKgMQALgMAAgSIAAgJg");
	this.shape_413.setTransform(48.2,445.4);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#333333").s().p("AgIAqIAAhHIgUAAIAAgJIAUAAIAAgcIAEgCIAEgCIAAAgIAdAAIAAAJIgdAAIAABGQAAALAEAFQADAFAJAAQAGAAAHgEIAAAJQgIAEgGAAQgXAAAAgdg");
	this.shape_414.setTransform(39.8,443.9);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#333333").s().p("AgpAHIAAg9IAKAAIAAA7QAAAWAHAKQAIAKAPAAQAOAAAKgMQAJgLAAgSIAAg8IAKAAIAABrIgKAAIAAgUIgBAAQgLAWgWAAQgnAAAAgwg");
	this.shape_415.setTransform(30.8,445.5);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#333333").s().p("AgZA3IAAhrIAKAAIAAAYQAEgMAIgHQAHgHALAAQAFAAAFACIAAAKQgEgDgHgBQgNAAgIAOQgIANAAAYIAAAyg");
	this.shape_416.setTransform(22.3,445.3);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#333333").s().p("AA/A3IAAhAQAAgUgHgIQgGgJgOAAQgMAAgKALQgJALAAARIAAA+IgJAAIAAhAQAAglgcAAQgNAAgJAMQgIALAAARIAAA9IgJAAIAAhrIAJAAIAAASIAAAAQALgUAXAAQALAAAIAGQAJAHACALQAFgLAKgHQAJgGALAAQAjAAAAArIAABCg");
	this.shape_417.setTransform(382.1,393.6);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#333333").s().p("AguBQIAAicIAJAAIAAAWIABAAQAFgMALgHQAMgGAMAAQAUAAALAOQAMAPAAAYQAAAagOAQQgNARgUAAQgYAAgMgVIgBAAIAABEgAgag6QgLANAAARIAAAOQAAAPAKAMQALALAQAAQAQAAAKgOQALgNAAgXQAAgUgKgNQgJgLgQAAQgSAAgKAMg");
	this.shape_418.setTransform(367.5,396.1);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#333333").s().p("AgmBIIAAgMQAOAJAPgBQARAAALgKQAKgKAAgRQAAgkgpAAIgWABIAFhIIA+AAIAAAJIg2AAIgDA2IAPgBQAXAAANAMQAMAKAAAVQAAAWgNANQgNANgXAAQgQAAgMgFg");
	this.shape_419.setTransform(349.7,391.7);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#333333").s().p("AAUBMIAAgoIhHAAIAAgJIAUgZIAUgaIAQgaIAOgZIAKAAIAABmIAXAAIAAAJIgXAAIAAAogAAEgfIgQAXIgQATIgMAQIA8AAIAAhUIgQAag");
	this.shape_420.setTransform(338.4,391.6);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#333333").s().p("AgFA1QgDgCAAgDQAAgFADgCQACgCADAAQADAAADACQACACAAAFQAAADgCACQgDADgDAAQgDAAgCgDgAgFgoQgDgDAAgEQAAgDADgCQACgDADAAQADAAADADQACACAAADQAAAEgCADQgDACgDAAQgDAAgCgCg");
	this.shape_421.setTransform(330.2,393.8);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#333333").s().p("AgoBGIAAgLQARALAPAAQASAAALgKQAJgJABgPQAAgRgMgJQgMgIgVAAIgMAAIAAgIIAKAAQAUAAALgJQAKgIAAgQQAAgOgIgHQgHgIgOAAQgOAAgQAKIAAgLQARgIAPAAQAQAAALAKQAKAJAAAQQABAfgeAIIAAABQAQABAKAKQAJAKAAAPQAAAUgOAMQgNAMgWAAQgRAAgPgIg");
	this.shape_422.setTransform(322,391.6);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#333333").s().p("AgqBNIAAgHQAAgHABgGQABgFADgFQACgFADgEIAJgJIAKgIIANgKIAMgKQAHgDAEgFQAFgGACgHQADgGAAgJQAAgPgJgJQgIgIgPAAQgJAAgJAFQgKAEgJAIIAAgMQAJgGAKgEQAJgEAKAAQAKAAAHADQAHADAFAFQAGAFACAHQAEAHAAAJQAAAKgEAJQgCAHgGAHIgMAMIgPAKIgPANQgIAGgEAGQgFAEgBAHQgDAFAAAHIAAACIBLAAIAAAJg");
	this.shape_423.setTransform(310.9,391.5);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#333333").s().p("AghA7QgMgTAAglQAAgnANgVQAMgUAWAAQAsAAAABNQAAAmgNAUQgMAUgVAAQgVAAgMgTgAgZgyQgKARAAAjQAAAhAKARQAJASAQAAQARAAAJgSQAJgSAAghQAAhFgiAAQgQAAgKASg");
	this.shape_424.setTransform(212.2,391.6);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#333333").s().p("AgFA1QgCgCgBgDQABgFACgCQACgCADAAQAEAAACACQACACABAFQgBADgCACQgCADgEAAQgDAAgCgDgAgFgoQgCgDgBgEQABgDACgCQACgDADAAQAEAAACADQACACABADQgBAEgCADQgCACgEAAQgDAAgCgCg");
	this.shape_425.setTransform(204.3,393.8);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#333333").s().p("AgSBKQgIgFgGgIQgGgJgDgNQgDgNAAgRQAAgSAEgQQAEgRAIgLQAHgMALgGQAKgGAOAAQAMAAAKAEIAAAKQgLgFgLAAQgLAAgIAFQgJAGgHAKQgGAKgDAOQgEAOAAAPIABAAQALgYAZAAQAKAAAHAEQAIADAFAHQAGAFADAIQADAJAAAKQAAALgEAJQgDAJgGAHQgGAHgIAEQgJADgJAAQgKAAgIgEgAgMgGQgGADgFAEQgEAFgDAHQgDAHAAAGQAAAJADAIQACAIAFAGQAEAFAGAEQAHAEAGAAQAIAAAGgDQAGgDAFgGQAEgFADgHQACgIAAgIQAAgJgCgHQgCgIgEgFQgFgEgGgDQgGgDgIAAQgGAAgHADg");
	this.shape_426.setTransform(196.5,391.6);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#333333").s().p("AA/A3IAAhAQAAgUgHgIQgGgJgOAAQgMAAgKALQgJALAAARIAAA+IgJAAIAAhAQAAglgcAAQgNAAgJAMQgIALAAARIAAA9IgJAAIAAhrIAJAAIAAASIAAAAQALgUAXAAQALAAAIAGQAJAHACALQAFgLAKgHQAJgGALAAQAjAAAAArIAABCg");
	this.shape_427.setTransform(382.1,353.7);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#333333").s().p("AguBQIAAicIAJAAIAAAWIABAAQAFgMALgHQAMgGAMAAQAUAAALAOQAMAPAAAXQAAAbgOAQQgNARgUAAQgYAAgMgVIgBAAIAABEgAgag5QgLAMAAARIAAAOQAAAPAKAMQALAMAQgBQAQAAAKgOQALgNAAgXQAAgVgKgLQgJgNgQAAQgSAAgKAOg");
	this.shape_428.setTransform(367.5,356.2);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#333333").s().p("AAUBMIAAgoIhHAAIAAgJIAUgZIAUgaIAQgaIAOgZIAKAAIAABmIAXAAIAAAJIgXAAIAAAogAAEgfIgQAXIgQATIgMAQIA8AAIAAhUIgQAag");
	this.shape_429.setTransform(338.4,351.7);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#333333").s().p("AgFA1QgDgCAAgEQAAgEADgBQACgDADAAQADAAADADQACABAAAEQAAAEgCACQgDADgDAAQgDAAgCgDgAgFgoQgDgDAAgDQAAgEADgDQACgCADAAQADAAADACQACADAAAEQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_430.setTransform(330.2,353.9);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#333333").s().p("AgoBGIAAgLQARALAPAAQASAAALgKQAJgJABgPQAAgRgMgJQgMgIgVAAIgMAAIAAgIIAKAAQAUAAALgJQAKgIAAgQQAAgOgIgHQgHgIgOAAQgOAAgQAKIAAgLQARgIAPAAQAQAAALAKQAKAJAAAQQABAfgeAIIAAABQAQABAKAKQAJAKAAAPQAAAUgOAMQgNAMgWAAQgRAAgPgIg");
	this.shape_431.setTransform(322,351.7);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#333333").s().p("AgqBNIAAgHQAAgHABgGQABgFADgFQACgFADgEIAJgIIAKgJIANgJIAMgKQAHgEAEgFQAFgHACgGQADgHAAgIQAAgQgJgHQgIgJgPAAQgJAAgJAFQgKAEgJAIIAAgLQAJgHAKgEQAJgEAKAAQAKAAAHADQAHADAFAFQAGAFACAHQAEAHAAAJQAAALgEAHQgCAJgGAGIgMALIgPAMIgPAMQgIAGgEAFQgFAGgBAGQgDAFAAAHIAAACIBLAAIAAAJg");
	this.shape_432.setTransform(310.9,351.6);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#333333").s().p("AghA7QgMgTAAglQAAgnANgVQAMgUAWAAQAsAAAABNQAAAmgNAUQgMAUgVAAQgVAAgMgTgAgZgyQgKARAAAjQAAAhAKARQAJASAQAAQARAAAJgSQAJgSAAghQAAhFgiAAQgQAAgKASg");
	this.shape_433.setTransform(223.3,351.7);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#333333").s().p("AghA7QgMgTAAglQAAgnANgVQAMgUAWAAQAsAAAABNQAAAmgNAUQgMAUgVAAQgVAAgMgTgAgZgyQgKARAAAjQAAAhAKARQAJASAQAAQARAAAJgSQAJgSAAghQAAhFgiAAQgQAAgKASg");
	this.shape_434.setTransform(212.2,351.7);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#333333").s().p("AgFA1QgCgCgBgEQABgEACgBQACgDADAAQAEAAACADQACABABAEQgBAEgCACQgCADgEAAQgDAAgCgDgAgFgoQgCgDgBgDQABgEACgDQACgCADAAQAEAAACACQACADABAEQgBADgCADQgCACgEAAQgDAAgCgCg");
	this.shape_435.setTransform(204.3,353.9);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#333333").s().p("AgSBKQgIgFgGgIQgGgJgDgNQgDgNAAgRQAAgSAEgQQAEgRAIgLQAHgMALgGQAKgGAOAAQAMAAAKAEIAAAKQgLgFgLAAQgLAAgIAFQgJAGgHAKQgGAKgDAOQgEAOAAAPIABAAQALgYAZAAQAKAAAHAEQAIADAFAHQAGAFADAIQADAJAAAKQAAALgEAJQgDAJgGAHQgGAHgIAEQgJADgJAAQgKAAgIgEgAgMgGQgGADgFAEQgEAFgDAHQgDAHAAAGQAAAJADAIQACAIAFAGQAEAFAGAEQAHAEAGAAQAIAAAGgDQAGgDAFgGQAEgFADgHQACgIAAgIQAAgJgCgHQgCgIgEgFQgFgEgGgDQgGgDgIAAQgGAAgHADg");
	this.shape_436.setTransform(196.5,351.7);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFFFFF").s().p("AATBMIAAgoIhHAAIAAgJIAVgZIAUgaIARgaIANgZIAKAAIAABmIAYAAIAAAJIgYAAIAAAogAAEgfIgQAXIgQATIgMAQIA7AAIAAhUIgPAag");
	this.shape_437.setTransform(112.7,351.7);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FFFFFF").s().p("AAOBNIAAiKQgIAHgIAFIgUAJIAAgJIAMgFIAKgGIAKgIIAKgIIADAAIAACZg");
	this.shape_438.setTransform(102.4,351.5);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FFFFFF").s().p("AgRBLQgIgDgGgGQgGgFgDgIQgDgJAAgKIABgMQACgGAEgFIAIgKQAGgDAHgCIgKgGQgEgEgDgEQgDgFgCgFQgCgFAAgFQAAgJADgHQAEgHAFgFQAFgFAHgDQAIgDAHAAQAJAAAHADQAHADAFAFQAGAFADAHQADAHAAAJQAAAFgCAFIgFAKIgHAIIgJAGQAHACAFADQAFAFAEAFQADAFACAGIABAMQAAAKgDAIQgDAJgGAFQgGAGgIADQgIADgKAAQgJAAgIgDgAgNACQgGADgFAFQgEAEgDAHQgCAGAAAIQAAAIACAGQADAGAEAFQAFAFAGACQAGADAHAAQAHAAAHgDQAGgCAEgFQAFgFADgGQACgGAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgCQgGgDgIAAQgHAAgGACgAgLhCQgFADgEAEQgEAEgCAFQgCAGAAAGQAAAGACAGQACAFAEAEQAEAEAGACQAFADAFAAQAGAAAFgDQAGgCAEgEQAEgEACgFQACgGAAgGQAAgHgCgFQgCgFgEgEQgEgFgFgCQgGgCgGAAQgGAAgFACg");
	this.shape_439.setTransform(118.7,271.6);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FFFFFF").s().p("AAOBNIAAiKQgIAHgIAFIgUAJIAAgJIAMgFIAKgGIAKgIIAKgIIADAAIAACZg");
	this.shape_440.setTransform(108.7,271.5);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFFFFF").s().p("AAOBNIAAiKQgIAHgIAFIgUAJIAAgJIAMgFIAKgGIAKgIIAKgIIADAAIAACZg");
	this.shape_441.setTransform(101,271.5);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#333333").s().p("AA/A3IAAhAQAAgUgHgIQgGgJgOAAQgMAAgKALQgJALAAARIAAA+IgJAAIAAhAQAAglgcAAQgNAAgJAMQgIALAAARIAAA9IgJAAIAAhrIAJAAIAAASIAAAAQALgUAXAAQALAAAIAGQAJAHACALQAFgLAKgHQAJgGALAAQAjAAAAArIAABCg");
	this.shape_442.setTransform(382.1,313.6);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#333333").s().p("AguBQIAAidIAJAAIAAAXIABAAQAFgMALgGQAMgHAMAAQAUAAALAOQAMAPAAAYQAAAagOARQgNAQgUAAQgYAAgMgWIgBAAIAABFgAgag6QgLANAAARIAAANQAAAQAKALQALAMAQAAQAQAAAKgOQALgNAAgXQAAgUgKgNQgJgMgQABQgSgBgKANg");
	this.shape_443.setTransform(367.5,316.1);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#333333").s().p("AgmBIIAAgMQAOAJAPgBQARABALgLQAKgKAAgRQAAgkgpAAIgWABIAFhIIA+AAIAAAJIg2AAIgDA2IAPgBQAXAAANAMQAMALAAAUQAAAWgNANQgNANgXAAQgQAAgMgFg");
	this.shape_444.setTransform(349.7,311.7);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#333333").s().p("AAUBMIAAgoIhHAAIAAgJIAUgZIAUgaIAQgaIAOgZIAKAAIAABmIAXAAIAAAJIgXAAIAAAogAAEgfIgQAXIgQATIgMAQIA8AAIAAhUIgQAag");
	this.shape_445.setTransform(338.4,311.6);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#333333").s().p("AgFA2QgDgDAAgDQAAgEADgDQACgCADAAQADAAADACQACADAAAEQAAADgCADQgDACgDAAQgDAAgCgCgAgFgoQgDgDAAgEQAAgDADgCQACgDADAAQADAAADADQACACAAADQAAAEgCADQgDACgDAAQgDAAgCgCg");
	this.shape_446.setTransform(330.2,313.8);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#333333").s().p("AgoBGIAAgLQARALAPAAQASAAALgKQAJgJABgPQAAgRgMgJQgMgIgVAAIgMAAIAAgIIAKAAQAUAAALgJQAKgIAAgQQAAgOgIgHQgHgIgOAAQgOAAgQAKIAAgLQARgIAPAAQAQAAALAKQAKAJAAAQQABAfgeAIIAAABQAQABAKAKQAJAKAAAPQAAAUgOAMQgNAMgWAAQgRAAgPgIg");
	this.shape_447.setTransform(322,311.6);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#333333").s().p("AgqBNIAAgHQAAgHABgGQABgGADgEQACgFADgEIAJgJIAKgIIANgKIAMgKQAHgDAEgGQAFgFACgHQADgGAAgKQAAgOgJgJQgIgIgPAAQgJAAgJAFQgKAEgJAIIAAgMQAJgGAKgEQAJgEAKAAQAKAAAHADQAHADAFAFQAGAFACAHQAEAHAAAJQAAAKgEAJQgCAHgGAIIgMALIgPAKIgPAOQgIAFgEAGQgFAFgBAFQgDAGAAAHIAAACIBLAAIAAAJg");
	this.shape_448.setTransform(310.9,311.5);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#333333").s().p("AA/A3IAAhAQgBgUgFgIQgHgJgOAAQgNAAgJALQgJALAAARIAAA+IgJAAIAAhAQAAglgbAAQgOAAgIAMQgJALAAARIAAA9IgJAAIAAhrIAJAAIAAASIABAAQAKgUAWAAQAMAAAJAGQAIAHACALQAFgLAJgHQAKgGALAAQAkAAAAArIAABCg");
	this.shape_449.setTransform(254.4,313.6);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#333333").s().p("AgeAwQgJgIAAgOQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAPIAAgMQAGgFAKgDQAKgEAIAAQARABAJAJQAJALAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLABQgPAAgJgJgAABAAQgQADgHAFQgHAFAAANQAAAKAHAFQAGAHALAAQAPAAAKgMQALgLAAgTIAAgJg");
	this.shape_450.setTransform(239.8,313.8);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#333333").s().p("AghA7QgMgTAAglQAAgnANgVQAMgUAWAAQAsAAAABNQAAAmgNAUQgMAUgVAAQgVAAgMgTgAgZgyQgKARAAAjQAAAhAKARQAJASAQAAQARAAAJgSQAJgSAAghQAAhFgiAAQgQAAgKASg");
	this.shape_451.setTransform(223.3,311.6);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#333333").s().p("AghA7QgMgTAAglQAAgnANgVQAMgUAWAAQAsAAAABNQAAAmgNAUQgMAUgVAAQgVAAgMgTgAgZgyQgKARAAAjQAAAhAKARQAJASAQAAQARAAAJgSQAJgSAAghQAAhFgiAAQgQAAgKASg");
	this.shape_452.setTransform(212.2,311.6);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#333333").s().p("AgFA2QgCgDgBgDQABgEACgDQACgCADAAQAEAAACACQACADABAEQgBADgCADQgCACgEAAQgDAAgCgCgAgFgoQgCgDgBgEQABgDACgCQACgDADAAQAEAAACADQACACABADQgBAEgCADQgCACgEAAQgDAAgCgCg");
	this.shape_453.setTransform(204.3,313.8);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#333333").s().p("AgSBKQgIgFgGgIQgGgJgDgNQgDgNAAgRQAAgSAEgQQAEgRAIgLQAHgMALgGQAKgGAOAAQAMAAAKAEIAAAKQgLgFgLAAQgLAAgIAFQgJAGgHAKQgGAKgDAOQgEAOAAAPIABAAQALgYAZAAQAKAAAHAEQAIADAFAHQAGAFADAIQADAJAAAKQAAALgEAJQgDAJgGAHQgGAHgIAEQgJADgJAAQgKAAgIgEgAgMgGQgGADgFAEQgEAFgDAHQgDAHAAAGQAAAJADAIQACAIAFAGQAEAFAGAEQAHAEAGAAQAIAAAGgDQAGgDAFgGQAEgFADgHQACgIAAgIQAAgJgCgHQgCgIgEgFQgFgEgGgDQgGgDgIAAQgGAAgHADg");
	this.shape_454.setTransform(196.5,311.6);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FFFFFF").s().p("AAOBNIAAiKQgIAHgIAFIgUAJIAAgJIAMgFIAKgGIAKgIIAKgIIADAAIAACZg");
	this.shape_455.setTransform(116.2,311.4);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FFFFFF").s().p("AgqBNIAAgHQAAgHABgGQACgGACgEQACgFADgEIAJgJIALgIIAMgKIAMgKQAHgDAEgGQAEgFADgHQADgGAAgKQAAgOgJgJQgIgIgPAAQgJAAgKAFQgJAEgJAIIAAgMQAJgGAKgEQAKgEAJAAQAJAAAIADQAHADAGAFQAFAFACAHQAEAHAAAJQAAAKgEAJQgDAHgEAIIgNALIgOAKIgQAOQgIAFgEAGQgEAFgCAFQgCAGgBAHIAAACIBLAAIAAAJg");
	this.shape_456.setTransform(107.2,311.5);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FFFFFF").s().p("AAOBNIAAiKQgIAHgIAFIgUAJIAAgJIAMgFIAKgGIAKgIIAKgIIADAAIAACZg");
	this.shape_457.setTransform(97.4,311.4);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#333333").s().p("AA/A3IAAhAQgBgUgFgIQgHgJgOAAQgNAAgJALQgJALAAARIAAA+IgJAAIAAhAQAAglgcAAQgNAAgIAMQgJALAAARIAAA9IgJAAIAAhrIAJAAIAAASIABAAQALgUAVAAQAMAAAJAGQAIAHACALQAFgLAKgHQAJgGALAAQAkAAAAArIAABCg");
	this.shape_458.setTransform(380.5,273.7);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#333333").s().p("AguBQIAAidIAKAAIAAAXIAAAAQAGgMALgGQAKgHAMAAQAVAAAMAOQALAOAAAZQAAAagNARQgNAQgVAAQgYAAgMgWIAAAAIAABFgAgag6QgKANAAARIAAANQgBAQALALQAKANAQAAQAQAAALgPQAKgNAAgXQAAgUgKgNQgJgMgQABQgSgBgKANg");
	this.shape_459.setTransform(365.8,276.2);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#333333").s().p("AghA7QgMgTAAglQAAgnANgVQAMgUAWAAQAsAAAABNQAAAmgNAUQgMAUgVAAQgVAAgMgTgAgZgyQgKARAAAjQAAAhAKARQAJASAQAAQARAAAJgSQAJgSAAghQAAhFgiAAQgQAAgKASg");
	this.shape_460.setTransform(348,271.6);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#333333").s().p("AgoBGIAAgLQARALAQAAQARAAALgKQAJgJABgPQAAgRgMgJQgMgIgVAAIgLAAIAAgIIAKAAQATAAAKgJQALgIAAgQQAAgOgIgHQgHgIgOAAQgOAAgQAKIAAgLQARgIAOAAQARAAALAKQALAJgBAQQAAAfgdAIIAAABQAQABAJAKQAKAKAAAPQAAAUgOAMQgOAMgUAAQgRAAgQgIg");
	this.shape_461.setTransform(336.6,271.6);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#333333").s().p("AgFA2QgCgDgBgEQABgEACgCQACgCADAAQAEAAACACQACACABAEQgBAEgCADQgCACgEAAQgDAAgCgCgAgFgpQgCgCgBgEQABgDACgCQACgDADAAQAEAAACADQACACABADQgBAEgCACQgCADgEAAQgDAAgCgDg");
	this.shape_462.setTransform(328.9,273.8);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#333333").s().p("AgoBGIAAgLQASALAPAAQARAAAKgKQALgJgBgPQAAgRgLgJQgMgIgVAAIgLAAIAAgIIAJAAQAUAAAKgJQALgIAAgQQAAgOgHgHQgIgIgOAAQgOAAgQAKIAAgLQASgIANAAQASAAAKAKQALAJAAAQQgBAfgdAIIAAABQAQABAJAKQAKAKAAAPQAAAUgOAMQgNAMgVAAQgRAAgQgIg");
	this.shape_463.setTransform(320.7,271.6);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#333333").s().p("AgqBNIAAgHQAAgHACgFQABgHACgEQACgFAEgEIAIgJIAKgIIANgKIANgKQAFgDAFgGQAEgFADgHQADgGgBgKQAAgPgIgHQgIgJgPAAQgJAAgKAEQgJAFgJAIIAAgMQAJgGAKgEQAKgEAKAAQAIAAAIADQAIADAEAFQAGAFADAHQACAHAAAJQAAAKgCAIQgEAJgFAHIgLALIgQAKIgQAOQgGAFgFAGQgFAFgCAFQgBAGAAAIIAAABIBKAAIAAAJg");
	this.shape_464.setTransform(309.6,271.5);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#333333").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgEAIAAQARAAAJALQAJAKAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLAAQgPAAgJgIgAABAAQgQACgHAGQgHAGAAAMQAAAKAHAFQAGAHALAAQAPAAAKgMQALgLAAgTIAAgJg");
	this.shape_465.setTransform(240.2,273.8);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#333333").s().p("AATBMIAAgoIhHAAIAAgJIAVgZIAUgaIARgaIANgZIAKAAIAABmIAYAAIAAAJIgYAAIAAAogAADgfIgPAXIgPATIgOAQIA8AAIAAhUIgQAag");
	this.shape_466.setTransform(212.5,271.6);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#333333").s().p("AgFA2QgCgDgBgEQABgEACgCQACgCADAAQAEAAACACQACACABAEQgBAEgCADQgCACgEAAQgDAAgCgCgAgFgpQgCgCgBgEQABgDACgCQACgDADAAQAEAAACADQACACABADQgBAEgCACQgCADgEAAQgDAAgCgDg");
	this.shape_467.setTransform(204.3,273.8);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#333333").s().p("AgmBIIAAgMQAOAJAPAAQARAAALgLQAKgKAAgRQAAgkgpAAIgWABIAFhIIA+AAIAAAJIg2AAIgDA2IAPgBQAXAAANAMQAMALAAAUQAAAWgNANQgNANgXAAQgQAAgMgFg");
	this.shape_468.setTransform(196.4,271.8);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#666666").s().p("AgeAwQgJgIAAgOQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAPIAAgMQAGgFAKgDQAKgEAIAAQARABAJAJQAJALAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLABQgPAAgJgJgAABAAQgQADgHAFQgHAFAAANQAAAKAHAFQAGAHALAAQAPAAAKgMQALgLAAgTIAAgJg");
	this.shape_469.setTransform(379.3,226.9);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#666666").s().p("AAfA3IAAg+QAAgngbAAQgPAAgKAMQgKALAAARIAAA9IgJAAIAAhrIAJAAIAAAUIAAAAQAMgWAYAAQASAAAJALQAJAMAAAWIAABAg");
	this.shape_470.setTransform(368.6,226.8);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#666666").s().p("AgKBRIAAhiIgTAAIAAgJIATAAIAAgTQAAgRAJgJQAIgJAMAAQAHAAAFACIAAAKQgFgDgIAAQgSAAAAAbIAAASIAbAAIAAAJIgbAAIAABig");
	this.shape_471.setTransform(355.7,224.2);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#666666").s().p("AgeAwQgJgIAAgOQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAPIAAgMQAGgFAKgDQAKgEAIAAQARABAJAJQAJALAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLABQgPAAgJgJgAABAAQgQADgHAFQgHAFAAANQAAAKAHAFQAGAHALAAQAPAAAKgMQALgLAAgTIAAgJg");
	this.shape_472.setTransform(340.9,226.9);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#666666").s().p("AgfApQgNgOAAgbQAAgXANgRQAOgQAVAAQAUAAAKAPQALAOAAAYIAAAEIhPAAQAAAVALAOQAKAMARAAQASAAARgOIAAALQgRALgUABQgUgBgNgPgAgVglQgKAKgCAUIBEAAQAAgTgJgLQgJgKgOAAQgOAAgKAKg");
	this.shape_473.setTransform(330.3,226.9);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#666666").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAPIAAgMQAGgFAKgDQAKgEAIAAQARAAAJALQAJAKAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLABQgPgBgJgIgAABAAQgQADgHAFQgHAGAAAMQAAAKAHAFQAGAHALAAQAPAAAKgMQALgLAAgTIAAgJg");
	this.shape_474.setTransform(264.7,227.9);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#666666").s().p("AgZApQgNgPAAgYQAAgZAPgQQAQgQAWgBQAMABAMAEIAAALQgLgHgOAAQgSAAgMAOQgMANAAAWQAAAUALANQAKANARAAQARAAALgJIAAAKQgLAHgRABQgVgBgOgPg");
	this.shape_475.setTransform(250.4,227.9);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#666666").s().p("AAgA3IAAg+QAAgngdAAQgOAAgKAMQgKALAAARIAAA9IgKAAIAAhrIAKAAIAAAUIABAAQALgWAZAAQARAAAJALQAKAMAAAWIAABAg");
	this.shape_476.setTransform(235.4,227.8);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#666666").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_477.setTransform(227.3,225.7);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#666666").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAPIAAgMQAGgFAKgDQAKgEAIAAQARAAAJALQAJAKAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLABQgPgBgJgIgAABAAQgQADgHAFQgHAGAAAMQAAAKAHAFQAGAHALAAQAPAAAKgMQALgLAAgTIAAgJg");
	this.shape_478.setTransform(213.7,227.9);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#666666").s().p("AgfApQgNgOAAgbQAAgXAOgRQANgQAVAAQATAAAMAOQAKAOAAAZIAAAEIhPAAQAAAVAKAOQAKAMASAAQASAAARgNIAAAKQgQAMgWAAQgTgBgNgPgAgVgkQgKAJgDAUIBFAAQgBgTgIgKQgJgLgOAAQgOAAgKALg");
	this.shape_479.setTransform(203.1,227.9);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#666666").s().p("AAfA3IAAg+QAAgngcAAQgOAAgKAMQgKALAAARIAAA9IgKAAIAAhrIAKAAIAAAUIAAAAQANgWAXAAQASAAAJALQAKAMgBAWIAABAg");
	this.shape_480.setTransform(192,227.8);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#666666").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_481.setTransform(183.9,225.7);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#666666").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAPIAAgMQAGgFAKgDQAKgEAIAAQARAAAJALQAJAKAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLABQgPgBgJgIgAABAAQgQADgHAFQgHAGAAAMQAAAKAHAFQAGAHALAAQAPAAAKgMQALgLAAgTIAAgJg");
	this.shape_482.setTransform(128.2,227.9);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#666666").s().p("AgfApQgNgOAAgbQAAgXAOgRQANgQAVAAQATAAALAOQALAOAAAZIAAAEIhPAAQAAAVAKAOQAKAMASAAQASAAARgNIAAAKQgQAMgWAAQgTgBgNgPgAgVgkQgKAJgDAUIBFAAQAAgTgJgKQgJgLgOAAQgOAAgKALg");
	this.shape_483.setTransform(117.6,227.9);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#666666").s().p("AAfA3IAAg+QAAgngcAAQgOAAgKAMQgKALAAARIAAA9IgKAAIAAhrIAKAAIAAAUIAAAAQANgWAXAAQASAAAJALQAKAMgBAWIAABAg");
	this.shape_484.setTransform(106.5,227.8);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#666666").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_485.setTransform(98.4,225.7);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#666666").s().p("AgjBMIAAiXIALAAIAACNIA8AAIAAAKg");
	this.shape_486.setTransform(91.8,225.7);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#666666").s().p("AgeAxIAAgMQAFAGAIACQAIADAGAAQAYAAAAgVQAAgHgFgFQgGgFgMgFQgPgHgGgHQgHgHAAgKQAAgOAKgHQAKgJAOAAQAOABAKAFIAAALQgMgIgNAAQgJAAgHAGQgGAGAAAIQAAAIAEAFQAEAEANAHQARAGAGAHQAGAGAAALQAAANgJAIQgKAJgQAAQgQAAgKgIg");
	this.shape_487.setTransform(242.9,197.4);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#666666").s().p("AgkApQgOgQAAgZQAAgaAPgOQAOgPAWgBQAYABANAPQANAPAAAZQAAAagOAPQgNAPgYABQgWgBgOgPgAgcgiQgMANAAAWQAAAVAMANQAKANASAAQAUAAAKgNQALgNAAgWQAAgWgLgNQgKgMgTAAQgSAAgLANg");
	this.shape_488.setTransform(232.6,197.4);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#666666").s().p("AgEBMIAAhrIAJAAIAABrgAgFg9QgCgCAAgEQAAgDACgCQADgDACAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_489.setTransform(224.3,195.2);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#666666").s().p("AgYA3IAAhrIAJAAIAAAYQAEgMAIgHQAHgHAKAAQAHAAAEACIAAAKQgFgDgGgBQgNAAgHAOQgJANAAAYIAAAyg");
	this.shape_490.setTransform(219.3,197.3);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#666666").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAPIAAgMQAGgFAKgDQAKgDAIgBQARAAAJAKQAJALAAAUIAABFIgJAAIAAgVIgBAAQgFALgKAGQgKAHgLAAQgPAAgJgJgAABAAQgQACgHAGQgHAFAAANQAAAJAHAHQAGAGALAAQAPAAAKgMQALgMAAgRIAAgKg");
	this.shape_491.setTransform(209.4,197.4);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#666666").s().p("AgZA3IAAhrIAKAAIAAAYQAEgMAIgHQAHgHAKAAQAGAAAGACIAAAKQgGgDgGgBQgNAAgIAOQgIANAAAYIAAAyg");
	this.shape_492.setTransform(201.5,197.3);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#666666").s().p("AgkApQgOgQAAgZQAAgaAPgOQAOgPAXgBQAXABANAPQANAPAAAZQAAAagOAPQgNAPgYABQgWgBgOgPgAgcgiQgMANAAAWQAAAVAMANQAKANATAAQATAAAKgNQALgNAAgWQAAgWgLgNQgKgMgTAAQgSAAgLANg");
	this.shape_493.setTransform(191.1,197.4);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#666666").s().p("AAfBQIAAhBQABgSgHgJQgHgJgPAAQgNAAgLALQgKAKAAAUIAAA8IgKAAIAAifIAKAAIAABHIAAAAQANgVAXgBQASAAAJALQAKAMgBAUIAABDg");
	this.shape_494.setTransform(179.4,194.8);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#666666").s().p("AgtBOIAAgKQAEACAFAAQANAAAIgSIAKgYIgphqIALAAIAgBXIACAEIABAEIAAAAIACgIIAihXIALAAIg0CBQgFAOgIAHQgHAHgLAAQgFAAgEgBg");
	this.shape_495.setTransform(162.8,199.9);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#666666").s().p("AgeAxIAAgMQAFAGAIACQAIADAGAAQAYAAAAgVQAAgHgFgFQgGgFgMgFQgPgHgGgHQgHgHAAgKQAAgOAKgHQAKgJAOAAQAOABAKAFIAAALQgMgIgNAAQgJAAgHAGQgGAGAAAIQAAAIAEAFQAEAEANAHQARAGAGAHQAGAGAAALQAAANgJAIQgKAJgQAAQgQAAgKgIg");
	this.shape_496.setTransform(147.9,197.4);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#666666").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAPIAAgMQAGgFAKgDQAKgDAIgBQARAAAJAKQAJALAAAUIAABFIgJAAIAAgVIgBAAQgFALgKAGQgKAHgLAAQgPAAgJgJgAABAAQgQACgHAGQgHAFAAANQAAAJAHAHQAGAGALAAQAPAAAKgMQALgMAAgRIAAgKg");
	this.shape_497.setTransform(138.1,197.4);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#666666").s().p("AgYA3IAAhrIAJAAIAAAYQAEgMAIgHQAHgHAKAAQAHAAAEACIAAAKQgFgDgGgBQgNAAgHAOQgJANAAAYIAAAyg");
	this.shape_498.setTransform(112.2,197.3);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#666666").s().p("AgfAqQgNgPAAgbQAAgXAOgQQANgQAVgBQATABALAOQALAOAAAYIAAADIhPAAQAAAWALANQAJANASAAQASAAARgOIAAAKQgQANgWAAQgTAAgNgPgAgVglQgKALgDASIBFAAQgBgSgIgLQgJgKgOAAQgOAAgKAKg");
	this.shape_499.setTransform(96.6,197.4);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#666666").s().p("AgfAqQgNgPAAgbQAAgXANgQQAOgQAUgBQAVABALAOQAKAOAAAYIAAADIhPAAQAAAWAKANQALANAQAAQATAAARgOIAAAKQgRANgUAAQgUAAgNgPgAgVglQgKALgCASIBEAAQAAgSgJgLQgJgKgOAAQgOAAgKAKg");
	this.shape_500.setTransform(67.7,197.4);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#666666").s().p("AgEBQIAAifIAJAAIAACfg");
	this.shape_501.setTransform(60,194.8);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#666666").s().p("AgEBQIAAifIAJAAIAACfg");
	this.shape_502.setTransform(55.6,194.8);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#666666").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAPIAAgMQAGgFAKgDQAKgDAIgBQARAAAJAKQAJALAAAUIAABFIgJAAIAAgVIgBAAQgFALgKAGQgKAHgLAAQgPAAgJgJgAABAAQgQACgHAGQgHAFAAANQAAAJAHAHQAGAGALAAQAPAAAKgMQALgMAAgRIAAgKg");
	this.shape_503.setTransform(47.8,197.4);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#666666").s().p("AgfAqQgNgPAAgbQAAgXAOgQQANgQAVgBQATABALAOQALAOAAAYIAAADIhPAAQAAAWALANQAJANASAAQASAAARgOIAAAKQgQANgWAAQgTAAgNgPgAgVglQgKALgDASIBFAAQgBgSgIgLQgJgKgOAAQgOAAgKAKg");
	this.shape_504.setTransform(30.9,197.4);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f().s("#999999").ss(2,1,1).p("A5wppIMeAAAp6ppIP/AAEgjQATmMBGwAAAAJsp4IP/AAEgjfgTlMBGwAAA");
	this.shape_505.setTransform(237.7,303.9);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#FFFFFF").ss(2,1,1).p("AQghZIAAAjAEQBaI0vAAIAAgF");
	this.shape_506.setTransform(126.4,179.4);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#333333").s().p("Ak7IkIAAkoIJ3AAIAAEogAk7CTIAAknIJ3AAIAAEngAk7j7IAAkoIJ3AAIAAEog");
	this.shape_507.setTransform(111.1,311.7);

	this.btnupdruta = new lib.updruta();
	this.btnupdruta.parent = this;
	this.btnupdruta.setTransform(242.4,311.4,1,1,0,0,0,180,30.2);

	this.btnaddruta = new lib.addruta();
	this.btnaddruta.parent = this;
	this.btnaddruta.setTransform(242.4,232.1,1,1,0,0,0,180,30.2);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#006699").s().p("AAoBFIAAhNQAAgxgjAAQgSAAgNAOQgNAPAAAVIAABMIgMAAIAAiGIAMAAIAAAZIABAAQAPgcAeAAQAWAAAMAPQALAOAAAbIAABRg");
	this.shape_508.setTransform(315.3,141.1);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#006699").s().p("AguBSQgRgTAAgfQAAghASgTQASgTAdAAQAcAAARATQARATAAAgQAAAfgRAUQgRAUgeAAQgcAAgSgUgAgkgMQgOAPAAAdQAAAaAOAQQANAQAXAAQAZAAANgPQANgQAAgcQAAgdgNgOQgNgQgYAAQgXAAgOAQgAgQg5IAegsIAOAAIggAsg");
	this.shape_509.setTransform(300.3,138.2);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#006699").s().p("AgFBfIAAiGIALAAIAACGgAgGhMQgDgDAAgFQAAgEADgDQADgCADgBQAEABADACQADACAAAFQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_510.setTransform(290,138.6);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#006699").s().p("AgfA0QgRgTAAgeQAAggATgUQATgVAdAAQAPAAAPAGIAAAOQgPgIgRAAQgXAAgOARQgPARAAAaQAAAaANAQQAOAPAVAAQAUAAAPgKIAAAMQgPAKgVAAQgaAAgRgTg");
	this.shape_511.setTransform(281.3,141.3);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#006699").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgrghAAQgVAAgVARIAAgPQAHgGANgEQANgEALAAQAUAAAMANQALANAAAYIAABYIgMAAIAAgcIAAAAQgHAPgMAHQgNAJgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAHAPAAQASABANgOQANgPAAgXIAAgMg");
	this.shape_512.setTransform(268.3,141.3);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#006699").s().p("AgfBFIAAiGIAMAAIAAAeIAAAAQAFgQAKgIQAJgJAOAAQAHAAAGACIAAANQgHgEgIAAQgPAAgKARQgLAQAAAdIAABAg");
	this.shape_513.setTransform(258.3,141.2);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#006699").s().p("AgLA1IAAhaIgYAAIAAgLIAYAAIAAgjIAHgCIAFgCIAAAnIAjAAIAAALIgjAAIAABYQgBAOAFAGQAEAGALAAQAHAAAJgEIAAALQgKAEgHAAQgeAAAAgjg");
	this.shape_514.setTransform(248.9,139.5);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#006699").s().p("AgmA9IAAgOQAHAGAKAEQAKACAGAAQAgABAAgaQAAgJgIgGQgGgHgPgHQgUgHgHgJQgIgJAAgNQAAgQAMgKQANgLASAAQAQAAANAHIAAAOQgPgJgQAAQgMgBgIAIQgJAGAAALQAAAKAGAGQAEAGARAIQAVAIAIAIQAIAJAAANQAAAQgMAKQgMALgVAAQgTAAgNgKg");
	this.shape_515.setTransform(239.8,141.3);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#006699").s().p("AgFBfIAAiGIALAAIAACGgAgGhMQgDgDAAgFQAAgEADgDQADgCADgBQAEABADACQADACAAAFQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_516.setTransform(231.7,138.6);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#006699").s().p("AAoBFIAAhNQAAgxgjAAQgSAAgNAOQgNAPAAAVIAABMIgMAAIAAiGIAMAAIAAAZIABAAQAPgcAeAAQAWAAALAPQAMAOAAAbIAABRg");
	this.shape_517.setTransform(221.8,141.1);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#006699").s().p("AgFBfIAAiGIALAAIAACGgAgGhMQgDgDAAgFQAAgEADgDQADgCADgBQAEABADACQADACAAAFQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_518.setTransform(211.7,138.6);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#006699").s().p("ABPBFIAAhQQAAgZgIgLQgIgKgSAAQgQAAgLAOQgMANAAAVIAABOIgLAAIAAhRQAAgtgiAAQgRAAgLAOQgLAOAAAVIAABNIgMAAIAAiGIAMAAIAAAXIABAAQAOgaAbAAQAPAAALAIQAKAJADAOQAGgPAMgIQAMgIANAAQAtAAAAA3IAABSg");
	this.shape_519.setTransform(197.9,141.1);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#006699").s().p("AgqBTQgQgSAAggQAAghARgTQASgUAaAAQAeAAANAZIABAAIAAhXIAMAAIAADHIgMAAIAAgYIgBAAQgGANgNAHQgNAIgQAAQgYAAgQgTgAgfgMQgOAQAAAcQAAAcAMAPQANAPATAAQAWAAANgOQANgOAAgVIAAgZQAAgSgMgNQgMgNgUAAQgVAAgNAQg");
	this.shape_520.setTransform(178.7,138.2);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#006699").s().p("AA/BfIgXg8IhQAAIgWA8IgOAAIBHi9IALAAIBHC9gAgEg/IgfBWIBIAAIghhWIgCgHIgCgHIAAAAIgEAOg");
	this.shape_521.setTransform(163.1,138.6);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("#FFFFFF").ss(2,1,1).p("AQghZIAAAjAwfBaIAAgF");
	this.shape_522.setTransform(126.4,179.4);

	this.instance_13 = new lib.an_Checkbox({'id': 'instance_13', 'label':'', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-checkbox'});

	this.instance_13.setTransform(288.1,579,1,1,0,0,0,50,11);

	this.instance_14 = new lib.an_Checkbox({'id': 'instance_14', 'label':'', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-checkbox'});

	this.instance_14.setTransform(131.6,597,1,1,0,0,0,50,11);

	this.instance_15 = new lib.an_Checkbox({'id': 'instance_15', 'label':'', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-checkbox'});

	this.instance_15.setTransform(97.6,464,1,1,0,0,0,50,11);

	this.btnguardar = new lib.guardar();
	this.btnguardar.parent = this;
	this.btnguardar.setTransform(246,763,1,1,0,0,0,180,30.2);

	this.txtcontacto2 = new lib.an_TextInput({'id': 'txtcontacto2', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtcontacto2.setTransform(316.3,334.2,1.12,1.555,0,0,0,50.1,11.3);

	this.txtinicia2 = new lib.an_TextInput({'id': 'txtinicia2', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtinicia2.setTransform(316.3,240.1,1.12,1.555,0,0,0,50.1,11.3);

	this.txtfinaliza2 = new lib.an_TextInput({'id': 'txtfinaliza2', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtfinaliza2.setTransform(316.3,287.2,1.12,1.555,0,0,0,50.1,11.3);

	this.txtlinea2 = new lib.an_TextInput({'id': 'txtlinea2', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtlinea2.setTransform(314.2,193.9,1.12,1.555,0,0,0,50.1,11.3);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#0099CC").s().p("AgHBDQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAADADQAEADAAAEQAAAFgEADQgDADgEAAQgEAAgDgDgAgHgzQgDgDAAgEQAAgFADgDQADgDAEAAQAEAAADADQAEADAAAFQAAAEgEADQgDADgEABQgEgBgDgDg");
	this.shape_523.setTransform(235.9,336.3);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#0099CC").s().p("AguA0QgRgUAAgfQAAghASgTQASgTAdAAQAcAAARATQARATAAAgQAAAfgRAVQgRATgeAAQgcAAgSgTgAgkgrQgOARAAAbQAAAbAOAPQANAQAXABQAZAAANgQQANgQAAgcQAAgcgNgPQgNgPgYAAQgXAAgOAPg");
	this.shape_524.setTransform(225.3,336.3);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#0099CC").s().p("AgKA1IAAhaIgZAAIAAgLIAZAAIAAgjIAFgCIAGgCIAAAnIAjAAIAAALIgjAAIAABYQAAAOAEAGQAEAGALAAQAIAAAIgEIAAALQgKAEgHAAQgdAAAAgjg");
	this.shape_525.setTransform(213.6,334.5);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#0099CC").s().p("AgfA0QgRgTAAgfQAAgfATgUQATgVAdAAQAPAAAPAHIAAANQgPgJgRABQgXAAgOAQQgPASAAAZQAAAbANAQQAOAQAVAAQAUAAAPgLIAAAMQgPAKgVAAQgaAAgRgTg");
	this.shape_526.setTransform(203.8,336.3);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#0099CC").s().p("AgmA8QgLgLAAgQQAAgjAvgHIAogGQAAgrghAAQgVAAgVARIAAgOQAHgHANgDQANgFALAAQAUAAAMANQALANAAAZIAABXIgMAAIAAgbIAAAAQgHAOgMAHQgNAJgOAAQgTAAgLgLgAABAAQgUADgJAHQgJAHAAAPQAAAMAJAIQAHAIAPAAQASgBANgOQANgOAAgXIAAgMg");
	this.shape_527.setTransform(190.8,336.3);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#0099CC").s().p("AgLA1IAAhaIgYAAIAAgLIAYAAIAAgjIAHgCIAEgCIAAAnIAkAAIAAALIgkAAIAABYQAAAOAFAGQAEAGALAAQAIAAAIgEIAAALQgJAEgJAAQgdAAAAgjg");
	this.shape_528.setTransform(180.3,334.5);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#0099CC").s().p("AAoBFIAAhNQAAgxgjAAQgTAAgMAOQgNAPAAAVIAABMIgMAAIAAiGIAMAAIAAAZIABAAQAOgcAfAAQAWAAAMAPQALAOAAAbIAABRg");
	this.shape_529.setTransform(169.3,336.1);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#0099CC").s().p("AguA0QgRgUAAgfQAAghASgTQASgTAdAAQAcAAARATQARATAAAgQAAAfgRAVQgRATgeAAQgcAAgSgTgAgkgrQgOARAAAbQAAAbAOAPQANAQAXABQAZAAANgQQANgQAAgcQAAgcgNgPQgNgPgYAAQgXAAgOAPg");
	this.shape_530.setTransform(154.3,336.3);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#0099CC").s().p("AgqBIQgZgaAAgqQAAgtAbgcQAagcAoAAQAWAAAUAHIAAAOQgUgJgWAAQgjAAgWAYQgWAYAAAnQAAAnAVAWQAVAXAgAAQAaAAAVgKIAAAMQgXAKgZAAQgmAAgYgag");
	this.shape_531.setTransform(138.2,333.6);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#333333").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgEAIABQARAAAJAKQAJAKAAAUIAABFIgJAAIAAgVIgBAAQgFAKgKAHQgKAGgLAAQgPAAgJgIgAABAAQgQADgHAFQgHAGAAAMQAAAJAHAHQAGAGALAAQAPAAAKgMQALgLAAgSIAAgKg");
	this.shape_532.setTransform(120.8,381.6);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#333333").s().p("AgZA3IAAhrIAKAAIAAAYQAEgNAIgGQAHgHALAAQAFAAAGACIAAAKQgGgEgGABQgNAAgIANQgIANAAAXIAAAzg");
	this.shape_533.setTransform(94.9,381.5);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#333333").s().p("AgYA3IAAhrIAJAAIAAAYQAEgNAIgGQAHgHAKAAQAHAAAEACIAAAKQgFgEgGABQgNAAgHANQgJANAAAXIAAAzg");
	this.shape_534.setTransform(81.9,381.5);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#333333").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgEAIABQARAAAJAKQAJAKAAAUIAABFIgJAAIAAgVIgBAAQgFAKgKAHQgKAGgLAAQgPAAgJgIgAABAAQgQADgHAFQgHAGAAAMQAAAJAHAHQAGAGALAAQAPAAAKgMQALgLAAgSIAAgKg");
	this.shape_535.setTransform(72.1,381.6);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#333333").s().p("AgeAwQgJgJAAgNQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAOIAAgLQAGgFAKgDQAKgEAIABQARAAAJAKQAJAKAAAUIAABFIgJAAIAAgVIgBAAQgFAKgKAHQgKAGgLAAQgPAAgJgIgAABAAQgQADgHAFQgHAGAAAMQAAAJAHAHQAGAGALAAQAPAAAKgMQALgLAAgSIAAgKg");
	this.shape_536.setTransform(52.5,381.6);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#333333").s().p("AgIAqIAAhHIgUAAIAAgJIAUAAIAAgcIAEgCIAEgCIAAAgIAdAAIAAAJIgdAAIAABGQAAALAEAFQADAFAJAAQAGAAAHgEIAAAJQgIAEgGAAQgXAAAAgdg");
	this.shape_537.setTransform(44.1,380.1);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#333333").s().p("AgfAqQgNgQAAgaQAAgXANgRQAOgPAVAAQAUAAAKANQALAOAAAZIAAAEIhPAAQAAAWALANQAKAMARAAQASAAARgNIAAAKQgRAMgUgBQgUABgNgPgAgVgkQgKAKgCASIBEAAQAAgSgJgKQgJgLgOAAQgOAAgKALg");
	this.shape_538.setTransform(35.6,381.6);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#0099CC").s().p("AgHBDQgDgEAAgEQAAgFADgDQADgDAEAAQAEAAADADQAEADAAAFQAAAEgEAEQgDADgEAAQgEAAgDgDgAgHgzQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAADADQAEADAAAEQAAAFgEADQgDAEgEgBQgEABgDgEg");
	this.shape_539.setTransform(215.8,292.3);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#0099CC").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgPQAHgFANgFQANgEALAAQAUAAAMANQALANAAAYIAABXIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUADgJAHQgJAHAAAPQAAAMAJAIQAHAIAPgBQASAAANgNQANgPAAgXIAAgMg");
	this.shape_540.setTransform(205.9,292.3);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#0099CC").s().p("Ag2BDIAAgEIBYh3IhRAAIAAgLIBmAAIAAAEIhZB3IBWAAIAAALg");
	this.shape_541.setTransform(193.2,292.3);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#0099CC").s().p("AgFBeIAAiGIALAAIAACGgAgGhNQgDgDAAgEQAAgEADgDQADgCADgBQAEABADACQADACAAAFQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_542.setTransform(184.2,289.6);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#0099CC").s().p("AgFBkIAAjHIALAAIAADHg");
	this.shape_543.setTransform(178.6,289);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#0099CC").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgPQAHgFANgFQANgEALAAQAUAAAMANQALANAAAYIAABXIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUADgJAHQgJAHAAAPQAAAMAJAIQAHAIAPgBQASAAANgNQANgPAAgXIAAgMg");
	this.shape_544.setTransform(168.9,292.3);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#0099CC").s().p("AAoBFIAAhNQAAgxgjAAQgSAAgNAOQgNAPAAAVIAABMIgMAAIAAiGIAMAAIAAAZIABAAQAOgcAfAAQAWAAAMAPQALAOAAAbIAABRg");
	this.shape_545.setTransform(155.4,292.1);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#0099CC").s().p("AgFBeIAAiGIALAAIAACGgAgGhNQgDgDAAgEQAAgEADgDQADgCADgBQAEABADACQADACAAAFQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_546.setTransform(145.3,289.6);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#0099CC").s().p("AgrBeIAAi8IBXAAIAAANIhKAAIAABMIBEAAIAAALIhEAAIAABYg");
	this.shape_547.setTransform(136.9,289.6);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#0099CC").s().p("AgHBDQgDgDAAgFQAAgEADgDQADgEAEAAQAEAAADAEQAEADAAAEQAAAFgEADQgDADgEAAQgEAAgDgDgAgHgzQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAADADQAEADAAAEQAAAFgEADQgDADgEAAQgEAAgDgDg");
	this.shape_548.setTransform(190.1,244.2);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#0099CC").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgOQAHgGANgFQANgEALAAQAUAAAMANQALANAAAZIAABWIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAIAPgBQASAAANgNQANgPAAgXIAAgMg");
	this.shape_549.setTransform(180.1,244.2);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#0099CC").s().p("AgFBeIAAiGIALAAIAACGgAgGhNQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEABQgDgBgDgDg");
	this.shape_550.setTransform(170.9,241.5);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#0099CC").s().p("AgfA0QgRgTAAgfQAAgfATgVQATgUAdAAQAPAAAPAHIAAANQgPgJgRAAQgXABgOAQQgPARAAAaQAAAbANAQQAOAPAVAAQAUABAPgLIAAANQgPAJgVAAQgaAAgRgTg");
	this.shape_551.setTransform(162.2,244.2);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#0099CC").s().p("AgFBeIAAiGIALAAIAACGgAgGhNQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEABQgDgBgDgDg");
	this.shape_552.setTransform(153.4,241.5);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#0099CC").s().p("AAoBFIAAhNQAAgxgjAAQgSAAgNAOQgNAPAAAVIAABMIgMAAIAAiGIAMAAIAAAZIABAAQAPgcAeAAQAWAAALAPQAMAOAAAbIAABRg");
	this.shape_553.setTransform(143.5,244);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#0099CC").s().p("AgFBeIAAi8IALAAIAAC8g");
	this.shape_554.setTransform(133.1,241.5);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#0099CC").s().p("AgHBDQgDgDAAgFQAAgFADgDQADgCAEAAQAEAAADACQAEADAAAFQAAAFgEADQgDADgEAAQgEAAgDgDgAgHgzQgDgDAAgEQAAgFADgDQADgDAEAAQAEAAADADQAEADAAAFQAAAEgEADQgDADgEAAQgEAAgDgDg");
	this.shape_555.setTransform(192.4,195.2);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#0099CC").s().p("AgmA8QgLgLAAgRQAAgiAvgHIAogGQAAgrghAAQgVAAgVARIAAgPQAHgFANgEQANgFALAAQAUAAAMANQALANAAAYIAABYIgMAAIAAgbIAAAAQgHAOgMAHQgNAJgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAHAPAAQASAAANgOQANgOAAgXIAAgMg");
	this.shape_556.setTransform(182.4,195.2);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#0099CC").s().p("AgnA0QgQgTAAghQAAgeAQgTQARgVAaAAQAZAAAOASQANARAAAfIAAAEIhjAAQAAAdANAPQANAPAVAAQAXAAAWgQIAAANQgVAPgaAAQgZAAgQgTgAgbguQgMAMgDAYIBWAAQgBgXgLgNQgKgMgSAAQgSAAgNAMg");
	this.shape_557.setTransform(169.2,195.2);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#0099CC").s().p("AAoBFIAAhNQAAgxgjAAQgTAAgMAOQgNAPAAAVIAABMIgMAAIAAiGIAMAAIAAAZIABAAQAOgcAfAAQAWAAAMAPQALAOAAAbIAABRg");
	this.shape_558.setTransform(155.3,195);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#0099CC").s().p("AgFBfIAAiGIALAAIAACGgAgGhMQgDgDAAgFQAAgEADgDQADgDADABQAEgBADADQADADAAAEQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_559.setTransform(145.1,192.5);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#0099CC").s().p("AgrBfIAAi8IANAAIAACwIBKAAIAAAMg");
	this.shape_560.setTransform(136.9,192.5);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#006699").s().p("AgmA8QgLgLAAgQQAAgjAvgHIAogGQAAgrghAAQgVAAgVARIAAgPQAHgFANgEQANgFALAAQAUAAAMANQALANAAAYIAABYIgMAAIAAgbIAAAAQgHAOgMAHQgNAJgOAAQgTAAgLgLgAABAAQgUADgJAHQgJAHAAAPQAAAMAJAIQAHAHAPABQASgBANgOQANgOAAgXIAAgMg");
	this.shape_561.setTransform(302.5,145.2);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#006699").s().p("AgLA1IAAhaIgYAAIAAgLIAYAAIAAgjIAHgCIAEgCIAAAnIAkAAIAAALIgkAAIAABYQAAAOAFAGQAEAGALAAQAIAAAIgEIAAALQgKAEgIAAQgdAAAAgjg");
	this.shape_562.setTransform(292,143.3);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#006699").s().p("AgzAJIAAhNIAMAAIAABKQAAAbAJANQAJAMATAAQATAAALgOQAMgOAAgXIAAhLIAMAAIAACGIgMAAIAAgZIgBAAQgOAcgcAAQgwAAAAg8g");
	this.shape_563.setTransform(280.7,145.3);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#006699").s().p("AApBfIgZg4QgIgRgHgGQgIgGgLAAIgXAAIAABVIgNAAIAAi8IA0AAQAYAAAOANQAOAOAAAVQAAAVgMAOQgLANgVADIAAABQALAEALAXIAcA9gAgpgBIAgAAQAVAAAMgLQANgMAAgTQAAgSgLgKQgMgLgUAAIgjAAg");
	this.shape_564.setTransform(266.6,142.5);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#006699").s().p("AgfBFIAAiGIAMAAIAAAeIAAAAQAFgQAKgIQAJgJANAAQAIAAAGACIAAANQgGgEgJAAQgQAAgJARQgLAQAAAdIAABAg");
	this.shape_565.setTransform(247.7,145);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#006699").s().p("AgFBfIAAiGIALAAIAACGgAgGhMQgDgEAAgEQAAgEADgDQADgDADABQAEgBADADQADADAAAEQAAAEgDAEQgDADgEAAQgDAAgDgDg");
	this.shape_566.setTransform(239.5,142.5);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#006699").s().p("AgmA8QgLgLAAgQQAAgjAvgHIAogGQAAgrghAAQgVAAgVARIAAgPQAHgFANgEQANgFALAAQAUAAAMANQALANAAAYIAABYIgMAAIAAgbIAAAAQgHAOgMAHQgNAJgOAAQgTAAgLgLgAABAAQgUADgJAHQgJAHAAAPQAAAMAJAIQAHAHAPABQASgBANgOQANgOAAgXIAAgMg");
	this.shape_567.setTransform(214.7,145.2);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#006699").s().p("AAoBeIAAhPQAAgvgjAAQgTAAgMAOQgNAOAAAUIAABOIgMAAIAAiGIAMAAIAAAYIABAAQAOgcAfAAQAWAAAMAPQALAPAAAaIAABSgAgog+QAAgNAGgIQAHgIAKAAQAKAAAKAJQAJAIAHAAQAFAAADgFQAEgEABgKIAJAAQAAAOgGAIQgGAIgMAAQgIAAgKgKQgJgIgHAAQgNAAAAATg");
	this.shape_568.setTransform(201.2,142.5);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#006699").s().p("AA/BfIgXg8IhQAAIgWA8IgOAAIBHi8IAMAAIBGC8gAgEg/IgfBXIBHAAIgghXIgCgIIgCgGIAAAAIgEAOg");
	this.shape_569.setTransform(185.4,142.5);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f().s("#999999").ss(2,1,1).p("EgjfgQAMBGwAAAEgjQAQBMBGwAAA");
	this.shape_570.setTransform(237.7,263);

	this.P4 = new lib.an_Checkbox({'id': 'P4', 'label':'', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-checkbox'});

	this.P4.setTransform(413.3,606,1,1,0,0,0,50,11);

	this.P3 = new lib.an_Checkbox({'id': 'P3', 'label':'', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-checkbox'});

	this.P3.setTransform(287.1,612,1,1,0,0,0,50,11);

	this.P2 = new lib.an_Checkbox({'id': 'P2', 'label':'', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-checkbox'});

	this.P2.setTransform(137,628,1,1,0,0,0,50,11);

	this.P1 = new lib.an_Checkbox({'id': 'P1', 'label':'', 'value':'1', 'disabled':false, 'visible':true, 'class':'ui-checkbox'});

	this.P1.setTransform(97.1,501,1,1,0,0,0,50,11);

	this.instance_16 = new lib.Símbolo21();
	this.instance_16.parent = this;
	this.instance_16.setTransform(217,185.1,1,1,0,0,0,64.6,18.6);
	new cjs.ButtonHelper(this.instance_16, 0, 1, 1);

	this.instance_17 = new lib.an_RadioButton({'id': 'instance_17', 'label':'', 'value':'', 'name':'radio', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.instance_17.setTransform(356.5,271,1,1,0,0,0,50,11);

	this.instance_18 = new lib.an_RadioButton({'id': 'instance_18', 'label':'', 'value':'', 'name':'radio', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.instance_18.setTransform(356.5,228.9,1,1,0,0,0,50,11);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#0099FF").s().p("AgfBFIAAiGIAMAAIAAAeIABAAQAEgQAKgIQAJgJANAAQAIAAAGACIAAANQgGgEgJAAQgQAAgJARQgLAQAAAdIAABAg");
	this.shape_571.setTransform(455.6,271.8);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#0099FF").s().p("AgmA8QgLgLAAgQQAAgjAvgHIAogGQAAgrghAAQgVAAgVARIAAgOQAHgHANgDQANgFALAAQAUAAAMANQALANAAAZIAABXIgMAAIAAgbIAAAAQgHANgMAIQgNAJgOAAQgTAAgLgLgAABAAQgUADgJAHQgJAHAAAPQAAAMAJAIQAHAIAPAAQASgBANgOQANgOAAgXIAAgMg");
	this.shape_572.setTransform(443.3,272);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#0099FF").s().p("AgKA1IAAhaIgZAAIAAgLIAZAAIAAgjIAFgCIAGgCIAAAnIAjAAIAAALIgjAAIAABYQAAAOAEAGQAEAGALAAQAIAAAIgEIAAALQgKAEgHAAQgdAAAAgjg");
	this.shape_573.setTransform(432.8,270.1);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#0099FF").s().p("AgFBfIAAiGIALAAIAACGgAgGhMQgDgDAAgFQAAgEADgDQADgCADAAQAEAAADACQADADAAAEQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_574.setTransform(426.1,269.3);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#0099FF").s().p("AgFBkIAAjHIALAAIAADHg");
	this.shape_575.setTransform(420.5,268.7);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#0099FF").s().p("AgFBfIAAiGIALAAIAACGgAgGhMQgDgDAAgFQAAgEADgDQADgCADAAQAEAAADACQADADAAAEQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_576.setTransform(415,269.3);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#0099FF").s().p("AgtBKIgBAAIAAAYIgMAAIAAjHIAMAAIAABdIABAAQAHgPANgIQAOgIAPAAQAaAAAOASQAPARAAAeQAAAigRAVQgRAVgZAAQgeAAgPgcgAghgMQgNAPAAAVIAAARQAAAUANAPQANAOAUAAQAVAAANgRQAMgSAAgdQAAgZgLgOQgMgPgVAAQgWAAgNAQg");
	this.shape_577.setTransform(405.2,268.9);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#0099FF").s().p("AgmA8QgLgLAAgQQAAgjAvgHIAogGQAAgrghAAQgVAAgVARIAAgOQAHgHANgDQANgFALAAQAUAAAMANQALANAAAZIAABXIgMAAIAAgbIAAAAQgHANgMAIQgNAJgOAAQgTAAgLgLgAABAAQgUADgJAHQgJAHAAAPQAAAMAJAIQAHAIAPAAQASgBANgOQANgOAAgXIAAgMg");
	this.shape_578.setTransform(390.2,272);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#0099FF").s().p("AAoBkIAAhRQAAgXgJgLQgIgLgTAAQgQAAgNAOQgOAMAAAaIAABKIgMAAIAAjHIAMAAIAABaIABAAQAQgcAdAAQAWAAALAOQAMAOAAAaIAABTg");
	this.shape_579.setTransform(376.7,268.7);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#0099FF").s().p("AgmA+IAAgPQAHAGAKADQAJAEAIAAQAegBABgZQgBgJgGgHQgIgGgPgGQgSgIgJgJQgHgJgBgNQAAgQANgLQANgKARAAQARAAANAHIAAAOQgPgKgQABQgNAAgHAGQgJAHABALQAAAKAEAGQAGAGAQAIQAWAIAHAIQAIAJAAANQAAAQgMALQgMAKgUAAQgUAAgNgJg");
	this.shape_580.setTransform(364.2,272);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#0099FF").s().p("AgnA0QgQgSAAgiQAAgeAQgTQARgVAaAAQAZAAAOASQANASAAAeIAAAEIhjAAQAAAcANAQQANAQAVAAQAXAAAWgRIAAANQgVAPgaAAQgZAAgQgTgAgbguQgMAMgDAYIBWAAQgBgXgLgNQgKgNgSABQgSgBgNANg");
	this.shape_581.setTransform(352,272);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#0099FF").s().p("AhHBfIAAi8IAvAAQAvAAAYAXQAYAYABAtQAAAqgaAbQgbAbgtAAgAg6BSIAeAAQApAAAXgVQAWgWAAgoQAAhRhUAAIggAAg");
	this.shape_582.setTransform(336.6,269.3);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#0099FF").s().p("AgfBFIAAiGIAMAAIAAAeIABAAQAEgQAKgIQAJgJAOAAQAHAAAGACIAAANQgHgEgHAAQgQAAgKARQgLAQAAAdIAABAg");
	this.shape_583.setTransform(415.8,229.1);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#0099FF").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgPQAHgFANgFQANgEALAAQAUAAAMANQALANAAAYIAABXIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUADgJAHQgJAHAAAPQAAAMAJAIQAHAIAPgBQASAAANgNQANgPAAgXIAAgMg");
	this.shape_584.setTransform(403.5,229.3);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#0099FF").s().p("AgLA1IAAhaIgYAAIAAgLIAYAAIAAgjIAGgCIAGgCIAAAnIAjAAIAAALIgjAAIAABYQgBAOAFAGQAEAGALAAQAHAAAJgEIAAALQgKAEgHAAQgeAAAAgjg");
	this.shape_585.setTransform(393,227.4);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#0099FF").s().p("AgFBeIAAiGIALAAIAACGgAgGhNQgDgDAAgEQAAgEADgDQADgCADgBQAEABADACQADACAAAFQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_586.setTransform(386.3,226.6);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#0099FF").s().p("AgFBkIAAjHIALAAIAADHg");
	this.shape_587.setTransform(380.7,226);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#0099FF").s().p("AgFBeIAAiGIALAAIAACGgAgGhNQgDgDAAgEQAAgEADgDQADgCADgBQAEABADACQADACAAAFQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_588.setTransform(375.2,226.6);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#0099FF").s().p("AgtBKIgBAAIAAAYIgMAAIAAjHIAMAAIAABdIABAAQAHgPANgIQAOgIAPAAQAaAAAPASQAOARAAAeQAAAigRAVQgQAVgaAAQgeAAgPgcgAghgMQgNAPAAAVIAAARQAAAUANAPQANAOAUAAQAUAAAOgRQAMgSAAgdQAAgZgLgOQgMgPgVAAQgWAAgNAQg");
	this.shape_589.setTransform(365.4,226.2);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#0099FF").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgPQAHgFANgFQANgEALAAQAUAAAMANQALANAAAYIAABXIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUADgJAHQgJAHAAAPQAAAMAJAIQAHAIAPgBQASAAANgNQANgPAAgXIAAgMg");
	this.shape_590.setTransform(350.4,229.3);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#0099FF").s().p("AA2BeIAAhaIhrAAIAABaIgNAAIAAi8IANAAIAABXIBrAAIAAhXIANAAIAAC8g");
	this.shape_591.setTransform(334.9,226.6);

	this.btnupd = new lib.Símbolo15();
	this.btnupd.parent = this;
	this.btnupd.setTransform(243.5,762.8,1,1,0,0,0,180,30.2);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#333333").s().p("AgZA3IAAhrIAKAAIAAAYQAEgNAIgGQAHgHALAAQAGAAAEACIAAAKQgEgEgHAAQgNAAgIAOQgIANAAAXIAAAzg");
	this.shape_592.setTransform(100.5,423);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#333333").s().p("AgYA3IAAhrIAJAAIAAAYQAEgNAIgGQAHgHAKAAQAGAAAGACIAAAKQgGgEgGAAQgNAAgHAOQgJANAAAXIAAAzg");
	this.shape_593.setTransform(87.5,423);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#333333").s().p("AgeAwQgJgIAAgOQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAPIAAgMQAGgFAKgDQAKgEAIAAQARABAJAJQAJALAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLABQgPAAgJgJgAABAAQgQADgHAFQgHAFAAANQAAAKAHAFQAGAHALAAQAPAAAKgMQALgLAAgTIAAgJg");
	this.shape_594.setTransform(77.7,423.1);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#333333").s().p("AgkA8IgBAAIAAATIgJAAIAAifIAJAAIAABKIABAAQAFgMALgGQAMgHAMAAQAUAAALAOQAMAPAAAXQAAAbgOARQgNAQgUAAQgYAAgMgVgAgagJQgLALAAARIAAAOQABAQAJAMQALAMAQAAQAQAAAKgPQALgOAAgXQAAgUgKgLQgJgMgQAAQgSAAgKANg");
	this.shape_595.setTransform(62.5,420.6);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#333333").s().p("AgeAwQgJgIAAgOQAAgbAlgGIAhgFQAAgjgbAAQgQAAgRAPIAAgMQAGgFAKgDQAKgEAIAAQARABAJAJQAJALAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgLABQgPAAgJgJgAABAAQgQADgHAFQgHAFAAANQAAAKAHAFQAGAHALAAQAPAAAKgMQALgLAAgTIAAgJg");
	this.shape_596.setTransform(32.7,423.1);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#333333").s().p("AgYApQgOgPAAgYQAAgZAPgQQAPgRAXAAQAMABAMAFIAAAKQgMgHgNAAQgSAAgMAOQgMANAAAWQAAAUALANQAKANASAAQAQAAAMgJIAAAKQgNAHgQABQgVgBgNgPg");
	this.shape_597.setTransform(22.9,423.1);

	this.txtcontacto = new lib.an_TextInput({'id': 'txtcontacto', 'value':'0980524754', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtcontacto.setTransform(215.8,375.8,1.12,1.555,0,0,0,50.1,11.3);

	this.txtinicia = new lib.an_TextInput({'id': 'txtinicia', 'value':'5 am', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtinicia.setTransform(215.8,281.7,1.12,1.555,0,0,0,50.1,11.3);

	this.txtfinaliza = new lib.an_TextInput({'id': 'txtfinaliza', 'value':'11 pm', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtfinaliza.setTransform(215.8,328.7,1.12,1.555,0,0,0,50.1,11.3);

	this.txtlinea = new lib.an_TextInput({'id': 'txtlinea', 'value':'118', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtlinea.setTransform(214.7,235.4,1.12,1.555,0,0,0,50.1,11.3);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#0099CC").s().p("AgHBDQgDgEAAgEQAAgFADgDQADgCAEAAQAEAAADACQAEADAAAFQAAAEgEAEQgDADgEAAQgEAAgDgDgAgHgzQgDgDAAgEQAAgFADgDQADgDAEAAQAEAAADADQAEADAAAFQAAAEgEADQgDADgEAAQgEAAgDgDg");
	this.shape_598.setTransform(141.9,377.1);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#0099CC").s().p("AguAzQgRgTAAgfQAAghASgTQASgTAdAAQAcAAARATQARATAAAgQAAAggRATQgRAUgeAAQgcAAgSgUgAgkgqQgOAQAAAbQAAAaAOAQQANARAXgBQAZAAANgPQANgQAAgcQAAgcgNgPQgNgPgYAAQgXgBgOARg");
	this.shape_599.setTransform(131.3,377.1);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#0099CC").s().p("AgKA1IAAhaIgZAAIAAgLIAZAAIAAgjIAFgCIAFgCIAAAnIAkAAIAAALIgkAAIAABYQABAOAEAGQAEAGALAAQAHAAAJgEIAAALQgJAEgJAAQgcAAAAgjg");
	this.shape_600.setTransform(119.7,375.3);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#0099CC").s().p("AgfA0QgRgTAAgeQAAggATgUQATgVAdAAQAPAAAPAGIAAAOQgPgIgRAAQgXAAgOARQgPARAAAaQAAAaANAQQAOAPAVAAQAUAAAPgKIAAAMQgPAKgVAAQgaAAgRgTg");
	this.shape_601.setTransform(109.8,377.1);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#0099CC").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgrghAAQgVAAgVARIAAgPQAHgGANgEQANgEALAAQAUAAAMANQALANAAAYIAABYIgMAAIAAgcIAAAAQgHAPgMAHQgNAJgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAHAPAAQASABANgOQANgPAAgXIAAgMg");
	this.shape_602.setTransform(96.8,377.1);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#0099CC").s().p("AgLA1IAAhaIgYAAIAAgLIAYAAIAAgjIAHgCIAEgCIAAAnIAkAAIAAALIgkAAIAABYQAAAOAFAGQAEAGALAAQAIAAAIgEIAAALQgKAEgIAAQgdAAAAgjg");
	this.shape_603.setTransform(86.3,375.3);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#0099CC").s().p("AguAzQgRgTAAgfQAAghASgTQASgTAdAAQAcAAARATQARATAAAgQAAAggRATQgRAUgeAAQgcAAgSgUgAgkgqQgOAQAAAbQAAAaAOAQQANARAXgBQAZAAANgPQANgQAAgcQAAgcgNgPQgNgPgYAAQgXgBgOARg");
	this.shape_604.setTransform(60.4,377.1);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#0099CC").s().p("AgqBIQgZgaAAgqQAAgtAbgcQAagcAoAAQAWAAAUAHIAAAOQgUgJgWAAQgjAAgWAZQgWAXAAAoQAAAmAVAXQAVAWAgAAQAaAAAVgKIAAAMQgXAKgZAAQgmAAgYgag");
	this.shape_605.setTransform(44.3,374.4);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#0099CC").s().p("AgHBDQgDgEAAgEQAAgEADgDQADgDAEgBQAEABADADQAEADAAAEQAAAEgEAEQgDADgEAAQgEAAgDgDgAgHgzQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAADADQAEADAAAEQAAAFgEADQgDAEgEAAQgEAAgDgEg");
	this.shape_606.setTransform(121.9,333.1);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#0099CC").s().p("AgmA8QgLgLAAgQQAAgjAvgHIAogGQAAgrghgBQgVABgVARIAAgOQAHgHANgDQANgFALAAQAUAAAMANQALANAAAZIAABXIgMAAIAAgbIAAAAQgHANgMAIQgNAJgOAAQgTAAgLgLgAABAAQgUADgJAHQgJAHAAAPQAAAMAJAIQAHAIAPAAQASAAANgPQANgOAAgXIAAgMg");
	this.shape_607.setTransform(111.9,333.1);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#0099CC").s().p("Ag2BEIAAgFIBYh2IhRAAIAAgLIBmAAIAAADIhZB3IBWAAIAAAMg");
	this.shape_608.setTransform(99.3,333.1);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#0099CC").s().p("AgFBfIAAiGIALAAIAACGgAgGhNQgDgDAAgEQAAgEADgDQADgCADAAQAEAAADACQADACAAAFQAAAEgDADQgDAEgEAAQgDAAgDgEg");
	this.shape_609.setTransform(90.2,330.4);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#0099CC").s().p("AgmA8QgLgLAAgQQAAgjAvgHIAogGQAAgrghgBQgVABgVARIAAgOQAHgHANgDQANgFALAAQAUAAAMANQALANAAAZIAABXIgMAAIAAgbIAAAAQgHANgMAIQgNAJgOAAQgTAAgLgLgAABAAQgUADgJAHQgJAHAAAPQAAAMAJAIQAHAIAPAAQASAAANgPQANgOAAgXIAAgMg");
	this.shape_610.setTransform(75,333.1);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#0099CC").s().p("AAoBFIAAhNQAAgxgjAAQgSAAgNAOQgNAPAAAVIAABMIgMAAIAAiGIAMAAIAAAZIABAAQAPgcAeAAQAWAAAMAPQALAOAAAbIAABRg");
	this.shape_611.setTransform(61.5,332.9);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#0099CC").s().p("AgFBfIAAiGIALAAIAACGgAgGhNQgDgDAAgEQAAgEADgDQADgCADAAQAEAAADACQADACAAAFQAAAEgDADQgDAEgEAAQgDAAgDgEg");
	this.shape_612.setTransform(51.3,330.4);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#0099CC").s().p("AgrBfIAAi8IBXAAIAAAMIhKAAIAABMIBEAAIAAAMIhEAAIAABYg");
	this.shape_613.setTransform(42.9,330.4);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#0099CC").s().p("AgFBfIAAiGIALAAIAACGgAgGhMQgDgDAAgFQAAgEADgDQADgCADAAQAEAAADACQADADAAAEQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_614.setTransform(77,282.3);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#0099CC").s().p("AgfA0QgRgTAAgfQAAgfATgUQATgVAdAAQAPAAAPAGIAAAOQgPgJgRABQgXAAgOAQQgPASAAAZQAAAbANAQQAOAQAVAAQAUAAAPgLIAAAMQgPAKgVAAQgaAAgRgTg");
	this.shape_615.setTransform(68.3,285);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#0099CC").s().p("AgFBfIAAiGIALAAIAACGgAgGhMQgDgDAAgFQAAgEADgDQADgCADAAQAEAAADACQADADAAAEQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_616.setTransform(59.4,282.3);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#0099CC").s().p("AgFBfIAAi8IALAAIAAC8g");
	this.shape_617.setTransform(39.2,282.3);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#0099CC").s().p("AgnA0QgQgSAAgiQAAgeAQgUQARgUAaAAQAZAAAOASQANARAAAfIAAAFIhjAAQAAAcANAPQANAPAVAAQAXAAAWgQIAAANQgVAPgaAAQgZAAgQgTgAgbguQgMANgDAYIBWAAQgBgYgLgNQgKgNgSAAQgSAAgNANg");
	this.shape_618.setTransform(75.2,236);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#0099CC").s().p("AAoBFIAAhNQAAgxgjAAQgTAAgMAOQgNAPAAAVIAABMIgMAAIAAiGIAMAAIAAAZIABAAQAPgcAeAAQAWAAALAPQAMAOAAAbIAABRg");
	this.shape_619.setTransform(61.3,235.8);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#0099CC").s().p("AgrBeIAAi8IANAAIAACxIBKAAIAAALg");
	this.shape_620.setTransform(42.9,233.3);

	this.txtinruta2 = new lib.an_TextInput({'id': 'txtinruta2', 'value':'118', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtinruta2.setTransform(80.5,183.8,1.14,1.545,0,0,0,50.1,11.1);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#006699").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgOQAHgGANgFQANgEALAAQAUAAAMANQALANAAAZIAABWIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAIAPgBQASAAANgNQANgPAAgXIAAgMg");
	this.shape_621.setTransform(325.8,141.2);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#006699").s().p("AgKA1IAAhaIgZAAIAAgLIAZAAIAAgjIAGgCIAEgCIAAAnIAkAAIAAALIgkAAIAABYQAAAOAFAGQAEAGALAAQAIAAAIgEIAAALQgJAEgJAAQgdAAABgjg");
	this.shape_622.setTransform(315.3,139.3);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#006699").s().p("AgzAJIAAhNIAMAAIAABKQAAAbAJANQAJAMATAAQASAAAMgOQAMgOAAgXIAAhLIAMAAIAACGIgMAAIAAgZIgBAAQgOAcgcAAQgwAAAAg8g");
	this.shape_623.setTransform(304,141.3);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#006699").s().p("AApBeIgZg3QgIgRgHgGQgIgFgLAAIgXAAIAABTIgOAAIAAi8IA1AAQAYAAAOAOQAOANAAAXQABAUgMAOQgMAMgVAFIAAAAQALAEALAXIAcA8gAgpAAIAgAAQAVAAAMgMQANgLAAgUQAAgSgMgKQgLgKgUAAIgjAAg");
	this.shape_624.setTransform(289.9,138.5);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#006699").s().p("AgfBFIAAiGIAMAAIAAAeIABAAQAEgQAKgIQAJgJANAAQAIAAAGACIAAANQgGgEgJAAQgQAAgJARQgLAQAAAdIAABAg");
	this.shape_625.setTransform(271,141);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#006699").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgOQAHgGANgFQANgEALAAQAUAAAMANQALANAAAZIAABWIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAIAPgBQASAAANgNQANgPAAgXIAAgMg");
	this.shape_626.setTransform(258.7,141.2);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#006699").s().p("Ag2BDIAAgEIBZh2IhTAAIAAgMIBnAAIAAAEIhZB3IBWAAIAAALg");
	this.shape_627.setTransform(246,141.2);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#006699").s().p("AgFBeIAAiGIALAAIAACGgAgGhNQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEABQgDgBgDgDg");
	this.shape_628.setTransform(237,138.5);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#006699").s().p("AgFBkIAAjHIALAAIAADHg");
	this.shape_629.setTransform(231.4,137.9);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#006699").s().p("AgmA8QgLgLAAgRQAAghAvgIIAogGQAAgsghAAQgVAAgVASIAAgOQAHgGANgFQANgEALAAQAUAAAMANQALANAAAZIAABWIgMAAIAAgbIAAAAQgHAOgMAJQgNAIgOAAQgTAAgLgLgAABAAQgUAEgJAGQgJAHAAAPQAAAMAJAIQAHAIAPgBQASAAANgNQANgPAAgXIAAgMg");
	this.shape_630.setTransform(221.7,141.2);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#006699").s().p("AgzAJIAAhNIAMAAIAABKQAAAbAJANQAJAMAUAAQARAAAMgOQAMgOgBgXIAAhLIANAAIAACGIgNAAIAAgZIAAAAQgOAcgcAAQgwAAAAg8g");
	this.shape_631.setTransform(208,141.3);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#006699").s().p("AgLA1IAAhaIgYAAIAAgLIAYAAIAAgjIAGgCIAGgCIAAAnIAjAAIAAALIgjAAIAABYQgBAOAFAGQAEAGALAAQAHAAAJgEIAAALQgKAEgHAAQgeAAAAgjg");
	this.shape_632.setTransform(196.8,139.3);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#006699").s().p("AgfA0QgRgTAAgfQAAgfATgVQATgUAdAAQAPAAAPAHIAAANQgPgJgRAAQgXABgOAQQgPARAAAbQAAAaANAQQAOAPAVAAQAUABAPgLIAAANQgPAJgVAAQgaAAgRgTg");
	this.shape_633.setTransform(186.9,141.2);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#006699").s().p("AA+BeIgWg6IhQAAIgWA6IgOAAIBHi8IALAAIBHC8gAgEg/IggBWIBJAAIgghVIgDgIIgCgHIAAAAIgEAOg");
	this.shape_634.setTransform(172.4,138.5);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f().s("#999999").ss(2,1,1).p("EgjfgTkMBGwAAAEgjQATlMBGwAAA");
	this.shape_635.setTransform(237.7,281.7);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f().s("#FFFFFF").ss(2,1,1).p("AFLg0IAAAIAlKAxIAAAE");
	this.shape_636.setTransform(101.6,217.6);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#F05D53").s().p("ACOJJQgRgOgBgoQgDhRgCgWQgHg6gTgoQgKgTgqg5QgjgugIgiQgIgbAFhTQADhFgWgjQgFgIgTgWQgPgSgGgNQgKgWACgtQADgwgIgUQgGgTgdgjQgbgigFgWQgEgOACgWQACgYAAgMQAAgcgKgcQgLgbgTgWIgNgPQgIgJgDgHQgFgKACgLQACgLAJgFQATgLAbAfQAXAaAKAQQARAZAEAXQAEARgBAjQgBAjADARQAGAbAkA1QAhAxACAgQABAIgFAkQgDAaAHAQQAEAKAKANIARAUQAYAfAJAvQAFAigDAzQgBAgAAAOQABAaAGATQAGAQAOAUIAZAhQAxBBAUBQQAUBQgLBQQAUgBALAGQAHAFAEAHQAFAIgCAHQgCAKgMAGQgJAFgMAAIgIABQgUAAgMgKg");
	this.shape_637.setTransform(71.1,559.2);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#FFFFFF").s().p("AgIBvQgEgDAAgGQAAgGAEgDQADgEAFAAQAFAAAEAEQAEADAAAGQAAAGgEADQgEAEgFAAQgFAAgDgEgAgGAxIgCijIAQAAIgCCjg");
	this.shape_638.setTransform(419.2,270.8);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#FFFFFF").s().p("Ag3A+QgVgYAAglQAAgoAWgWQAWgXAiAAQAjAAAUAXQAUAXAAAnQAAAlgVAYQgUAXgkAAQgiAAgVgXgAgrg0QgRAUAAAhQAAAgAQAUQARASAcABQAdgBAQgSQAQgUAAghQAAghgQgTQgQgSgdAAQgbAAgRASg");
	this.shape_639.setTransform(405.4,273.9);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#FFFFFF").s().p("AgNA/IAAhsIgdAAIAAgNIAdAAIAAgqIAHgCIAHgDIAAAvIAqAAIAAANIgqAAIAABqQAAARAFAIQAFAHANAAQAJAAAKgGIAAAOQgLAFgKAAQgjAAAAgrg");
	this.shape_640.setTransform(391.4,271.7);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#FFFFFF").s().p("AgGBxIAAihIANAAIAAChgAgHhcQgEgDAAgGQAAgFAEgDQADgDAEgBQAFABADADQAEADAAAFQAAAGgEADQgDADgFABQgEAAgDgEg");
	this.shape_641.setTransform(383.4,270.7);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#FFFFFF").s().p("AAqBRIgqhFIAAAAIgGAJIgDAFIgjA3IgSAAIA2hPIg1hSIARAAIAkA6IAIAOIAAAAIAIgOIAmg6IARAAIg3BRIA1BQg");
	this.shape_642.setTransform(373.3,273.9);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#FFFFFF").s().p("AgvA/QgUgXAAgoQAAgjAVgZQAUgYAfAAQAeAAARAWQAQAUAAAlIAAAGIh3AAQAAAhAPATQAPATAaAAQAcgBAagTIAAAPQgaASgfAAQgeAAgTgWgAggg3QgPAPgEAcIBnAAQgBgcgMgPQgMgPgWAAQgWgBgPAQg");
	this.shape_643.setTransform(358.3,273.9);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#FFFFFF").s().p("AAwBTIAAheQAAg5gqAAQgXAAgPARQgPAQAAAaIAABcIgOAAIAAihIAOAAIAAAdIABAAQASghAkAAQAbAAANARQAOASAAAhIAABhg");
	this.shape_644.setTransform(332.7,273.7);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#FFFFFF").s().p("Ag3A+QgVgYAAglQAAgoAWgWQAWgXAiAAQAjAAAUAXQAUAXAAAnQAAAlgVAYQgUAXgkAAQgiAAgVgXgAgrg0QgRAUAAAhQAAAgAQAUQARASAcABQAdgBAQgSQAQgUAAghQAAghgQgTQgQgSgdAAQgbAAgRASg");
	this.shape_645.setTransform(314.8,273.9);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#FFFFFF").s().p("AglA/QgVgYAAgkQAAglAXgaQAXgYAjAAQASAAASAHIAAARQgSgKgUAAQgcgBgSAVQgRAUAAAgQAAAfAQAUQAQASAaABQAYgBASgNIAAAQQgSALgZAAQggAAgUgWg");
	this.shape_646.setTransform(298.6,273.9);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#FFFFFF").s().p("AguBIQgNgNAAgUQgBgpA5gJIAxgHQAAg0goAAQgZgBgZAWIAAgSQAIgHAQgFQAPgFANAAQAZAAAOAPQANAQAAAdIAABpIgOAAIAAghIgBAAQgHARgQAKQgOAKgRAAQgYAAgNgNgAABABQgYADgKAIQgLAIAAASQAAAPAKAKQAJAIASABQAVgBAQgQQAQgSAAgbIAAgPg");
	this.shape_647.setTransform(274.2,273.9);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#FFFFFF").s().p("AgzBkQgTgVAAgnQAAgnAVgYQAVgYAgAAQAkAAAQAeIAAAAIAAhoIAPAAIAADvIgPAAIAAgdIAAAAQgIAPgQAJQgPAJgTAAQgeAAgTgWgAgmgOQgQASAAAiQAAAiAPATQAPARAXABQAbgBAPgQQAPgRAAgaIAAgdQAAgWgOgQQgOgPgZAAQgYgBgRAUg");
	this.shape_648.setTransform(256.8,270.2);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#FFFFFF").s().p("AguBIQgOgNAAgUQAAgpA5gJIAxgHQAAg0gnAAQgagBgaAWIAAgSQAKgHAPgFQAPgFANAAQAZAAANAPQAOAQABAdIAABpIgPAAIAAghIgBAAQgIARgOAKQgPAKgRAAQgYAAgNgNgAABABQgYADgLAIQgKAIAAASQAAAPAJAKQALAIAQABQAXgBAPgQQAQgSAAgbIAAgPg");
	this.shape_649.setTransform(240,273.9);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#FFFFFF").s().p("AhBBRIAAgGIBqiOIhjAAIAAgNIB8AAIAAAEIhrCPIBoAAIAAAOg");
	this.shape_650.setTransform(224.8,273.9);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#FFFFFF").s().p("AgGBxIAAihIANAAIAAChgAgHhcQgEgDAAgGQAAgFAEgDQADgDAEgBQAFABADADQAEADAAAFQAAAGgEADQgDADgFABQgEAAgDgEg");
	this.shape_651.setTransform(213.9,270.7);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#FFFFFF").s().p("AgGB4IAAjvIANAAIAADvg");
	this.shape_652.setTransform(207.3,270);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#FFFFFF").s().p("AguBIQgNgNAAgUQAAgpA4gJIAxgHQAAg0goAAQgZgBgaAWIAAgSQAJgHAQgFQAQgFAMAAQAZAAAOAPQAOAQgBAdIAABpIgOAAIAAghIgBAAQgIARgOAKQgPAKgRAAQgXAAgOgNgAABABQgZADgJAIQgLAIAAASQAAAPAJAKQAKAIARABQAWgBAQgQQAQgSAAgbIAAgPg");
	this.shape_653.setTransform(195.7,273.9);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#FFFFFF").s().p("AgvA/QgUgXAAgoQAAgjAVgZQAUgYAfAAQAeAAARAWQAQAUAAAlIAAAGIh3AAQAAAhAPATQAPATAaAAQAcgBAagTIAAAPQgaASgfAAQgeAAgTgWgAggg3QgPAPgEAcIBnAAQgBgcgMgPQgMgPgWAAQgWgBgPAQg");
	this.shape_654.setTransform(179.8,273.9);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#FFFFFF").s().p("AglBSIAAihIAOAAIAAAkIABAAQAFgSAMgLQALgKAQAAQAJABAHACIAAAPQgHgEgKgBQgTABgMATQgNAUAAAkIAABLg");
	this.shape_655.setTransform(168,273.8);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#FFFFFF").s().p("AAwBTIAAheQAAg5gqAAQgXAAgPARQgPAQAAAaIAABcIgOAAIAAihIAOAAIAAAdIABAAQASghAkAAQAbAAANARQAOASAAAhIAABhg");
	this.shape_656.setTransform(144.2,273.7);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#FFFFFF").s().p("Ag3BjQgVgYAAglQAAgoAWgWQAWgXAiAAQAjAAAUAXQAUAXAAAnQAAAlgVAYQgUAXgkAAQgiAAgVgXgAgrgPQgRATAAAiQAAAgAQAUQARASAcABQAdgBAQgSQAQgUAAghQAAgigQgSQgQgSgdAAQgbAAgRASgAgThFIAkg0IAQAAIgmA0g");
	this.shape_657.setTransform(126.2,270.2);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#FFFFFF").s().p("AgGBxIAAihIANAAIAAChgAgHhcQgEgDAAgGQAAgFAEgDQADgDAEgBQAFABADADQAEADAAAFQAAAGgEADQgDADgFABQgEAAgDgEg");
	this.shape_658.setTransform(113.8,270.7);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#FFFFFF").s().p("AglA/QgVgYAAgkQAAglAXgaQAXgYAjAAQASAAASAHIAAARQgSgKgUAAQgcgBgSAVQgRAUAAAgQAAAfAQAUQAQASAaABQAYgBASgNIAAAQQgSALgZAAQggAAgUgWg");
	this.shape_659.setTransform(103.4,273.9);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#FFFFFF").s().p("AglA/QgVgYAAgkQAAglAXgaQAXgYAjAAQASAAASAHIAAARQgSgKgUAAQgcgBgSAVQgRAUAAAgQAAAfAQAUQAQASAaABQAYgBASgNIAAAQQgSALgZAAQggAAgUgWg");
	this.shape_660.setTransform(89,273.9);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#FFFFFF").s().p("ABLBxIgahGIhiAAIgZBGIgRAAIBVjiIAOAAIBUDigAgFhMIgmBpIBXAAIgnhpIgDgJIgCgIIAAAAIgFARg");
	this.shape_661.setTransform(71.5,270.7);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#FFFFFF").s().p("AgHBzIACiiIAMAAIACCigAgIhcQgEgDAAgGQAAgFAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_662.setTransform(56.7,277);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#0099FF").s().p("AgthUIBKgFQAEAAACAEQACADABAFQAAAEgCADQgDAEgDAAIg6ADIAEA2IAYgCQADAAACADQADAEAAAEQAAAEgCADQgCADgEAAIgXACIADA3IA5gEQADAAADADQADADAAAFQAAAEgCAEQgDADgDABIhKADg");
	this.shape_663.setTransform(301.4,86.2);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#0099FF").s().p("AgiBXQgDgDAAgFIgIijIAVgBIAXAnIASgqIAVgBIAICjQAAAFgCADQgCAEgEAAQgDAAgDgDQgDgDAAgFIgHiDIgPAgIABAHQAAAEgCADQgDADgDAAQgDABgCgDQgDgDAAgFIgBgGIgSgfIAHCEQAAAEgCAEQgDADgDABQgDAAgDgDg");
	this.shape_664.setTransform(289.2,86.8);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#0099FF").s().p("AhPhjIBZgGQAYgCATAOQASAPABAVIABALQABAYgSARQAVAOABAXIABAMQACAVgQARQgRAQgYACIhYAGgAASAKIg7AEIAEBAIA7gEQALgBAJgIQAIgJgBgKIgBgLQAAgLgJgHQgIgHgKAAIgDAAgAALhPIg7AEIAFA/IA7gEQALgBAJgIQAIgIgBgLIgBgLQgBgLgJgHQgIgGgKAAIgDAAg");
	this.shape_665.setTransform(209.3,71.9);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f().s("#000000").ss(2,1,1).p("AEQlaIg8BAABqlaIAdhTAjemVIAtBLAgpnEIACBYAE1ioIBNgqAFcgIIBYgBAFBCHIBLAtAm0jAIBOAoACIFNIAgBRAh1FbIgVBVAAEFtIACBYADvECIBBA7Alhk6IBEA4");
	this.shape_666.setTransform(274.5,72.1);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#666666").s().p("AkXBGQAmgpAPgZQAOgYAFgSQAGgRABgaQDBB7EBAbIAeAHIgZAAQhQAGhoAAQiVAAjJgMg");
	this.shape_667.setTransform(194,96.3);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#0099CC").s().p("EgiLASMMAAAgkXMBEXAAAMAAAAkXg");
	this.shape_668.setTransform(239.6,273.2);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f().s("#000000").ss(2,1,1).p("AEQlaIg8BAAE1ioIBNgqAjemVIAtBLAgpnEIACBYABqlaIAdhTAFBCHIBLAtADvECIBBA7AFcgIIBYgBAAEFtIACBYAh1FbIgVBVACIFNIAgBRAlhk6IBEA4Am0jAIBOAo");
	this.shape_669.setTransform(347.5,65.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112,p:{x:205.7,y:72.4}},{t:this.shape_111,p:{x:227.4,y:70.6}},{t:this.shape_110,p:{x:249.1,y:69.2}},{t:this.shape_109,p:{x:273.4,y:88}},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106,p:{x:230.1,y:91.7}},{t:this.shape_105,p:{x:249.3,y:90.3}},{t:this.txtnombre},{t:this.estilos,p:{x:419.4,y:75.2}},{t:this.txtemail},{t:this.txtpass,p:{x:237.4,y:368.8}},{t:this.txtconfirmar},{t:this.instance_7,p:{y:504.7,regX:50.1,regY:11.2,scaleX:0.291,scaleY:0.995,x:171}},{t:this.shape_104,p:{y:500.8}},{t:this.shape_103},{t:this.shape_102,p:{y:500.8}},{t:this.shape_101},{t:this.shape_100,p:{y:500.8}},{t:this.shape_99,p:{y:497.9}},{t:this.shape_98},{t:this.shape_97,p:{y:500.8}},{t:this.shape_96,p:{y:500.8}},{t:this.shape_95},{t:this.btnlogin},{t:this.btnregistrar}]}).to({state:[{t:this.shape_114},{t:this.shape_116},{t:this.shape_115},{t:this.shape_113},{t:this.shape_112,p:{x:205.7,y:72.4}},{t:this.shape_111,p:{x:227.4,y:70.6}},{t:this.shape_110,p:{x:249.1,y:69.2}},{t:this.shape_109,p:{x:273.4,y:88}},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106,p:{x:230.1,y:91.7}},{t:this.shape_105,p:{x:249.3,y:90.3}},{t:this.estilos,p:{x:419.4,y:75.2}},{t:this.instance_7,p:{y:284.7,regX:50.1,regY:11.2,scaleX:0.291,scaleY:0.995,x:171}},{t:this.shape_104,p:{y:280.8}},{t:this.shape_120},{t:this.shape_102,p:{y:280.8}},{t:this.shape_119},{t:this.shape_100,p:{y:280.8}},{t:this.shape_99,p:{y:277.9}},{t:this.shape_118},{t:this.shape_97,p:{y:280.8}},{t:this.shape_96,p:{y:280.8}},{t:this.shape_117},{t:this.txtnombreoemail},{t:this.txtpass,p:{x:241.4,y:226.8}},{t:this.btnentrar},{t:this.btnadmin}]},1).to({state:[{t:this.shape_158,p:{x:312.9,y:62.6}},{t:this.shape_157,p:{x:275.9,y:51.1}},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154,p:{x:242.8,y:122.4}},{t:this.shape_112,p:{x:282.3,y:64.9}},{t:this.shape_111,p:{x:303.9,y:63.1}},{t:this.shape_110,p:{x:325.6,y:61.7}},{t:this.shape_109,p:{x:350,y:80.5}},{t:this.shape_153},{t:this.shape_152},{t:this.shape_106,p:{x:306.6,y:84.1}},{t:this.shape_105,p:{x:325.9,y:82.7}},{t:this.estilos,p:{x:-116.4,y:295.1}},{t:this.btncomo},{t:this.btnrutas},{t:this.sa1},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.instance_8}]},1).to({state:[{t:this.shape_158,p:{x:312.9,y:62.6}},{t:this.shape_157,p:{x:275.9,y:51.1}},{t:this.shape_156},{t:this.shape_155},{t:this.shape_249,p:{y:141.4}},{t:this.shape_248},{t:this.txtdestino},{t:this.txtorigen},{t:this.atras1},{t:this.sa2},{t:this.instance_10,p:{y:471,scaleY:0.712}},{t:this.shape_112,p:{x:282.3,y:64.9}},{t:this.shape_111,p:{x:303.9,y:63.1}},{t:this.shape_110,p:{x:325.6,y:61.7}},{t:this.shape_109,p:{x:350,y:80.5}},{t:this.shape_153},{t:this.shape_152},{t:this.shape_106,p:{x:306.6,y:84.1}},{t:this.shape_105,p:{x:325.9,y:82.7}},{t:this.estilos,p:{x:-70.4,y:216.1}},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.instance_7,p:{y:240.9,regX:50,regY:11,scaleX:1,scaleY:1,x:178.9}},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.instance_9}]},1).to({state:[{t:this.shape_158,p:{x:312.9,y:62.6}},{t:this.shape_157,p:{x:275.9,y:51.1}},{t:this.shape_405},{t:this.shape_156},{t:this.shape_404},{t:this.shape_155},{t:this.shape_249,p:{y:179.4}},{t:this.shape_403},{t:this.instance_10,p:{y:168,scaleY:0.712}},{t:this.shape_112,p:{x:282.3,y:64.9}},{t:this.shape_111,p:{x:303.9,y:63.1}},{t:this.shape_110,p:{x:325.6,y:61.7}},{t:this.shape_109,p:{x:350,y:80.5}},{t:this.shape_153},{t:this.shape_152},{t:this.shape_106,p:{x:306.6,y:84.1}},{t:this.shape_105,p:{x:325.9,y:82.7}},{t:this.estilos,p:{x:-116.4,y:295.1}},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386,p:{x:23.5,y:524.8}},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382,p:{x:60.1,y:524.7}},{t:this.shape_381,p:{x:64.5,y:524.7}},{t:this.shape_380},{t:this.shape_379,p:{x:89.2,y:524.8}},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376,p:{x:125.2,y:527.4}},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348,p:{x:40.6,y:595.3}},{t:this.shape_347,p:{x:48.8,y:597.3}},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343,p:{x:146.8,y:569.3}},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335,p:{x:165.3,y:596.8}},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329,p:{x:300.4,y:597}},{t:this.shape_328},{t:this.shape_327,p:{x:383,y:570}},{t:this.shape_326,p:{x:388.5,y:569.3}},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321,p:{x:382.1,y:596.4}},{t:this.shape_320,p:{x:386.6,y:596.4}},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311,p:{x:146.6,y:641.3}},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299,p:{x:398.2,y:641.2}},{t:this.shape_298,p:{x:418.6,y:643.2}},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291,p:{x:167,y:683.2}},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284,p:{x:304,y:678.8}},{t:this.shape_283,p:{x:315.6,y:681.3}},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265,p:{x:276.3,y:729.8}},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261,p:{x:318.9,y:732.3}},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253,p:{x:398.3,y:730.3}},{t:this.shape_252,p:{x:418.6,y:732.2}},{t:this.shape_251,p:{x:429.6,y:730.1}},{t:this.shape_250},{t:this.atrasb},{t:this.sa3}]},1).to({state:[{t:this.shape_158,p:{x:312.9,y:62.6}},{t:this.shape_157,p:{x:275.9,y:51.1}},{t:this.shape_156},{t:this.shape_507},{t:this.shape_155},{t:this.shape_506},{t:this.shape_505},{t:this.instance_10,p:{y:471,scaleY:0.712}},{t:this.shape_112,p:{x:282.3,y:64.9}},{t:this.shape_111,p:{x:303.9,y:63.1}},{t:this.shape_110,p:{x:325.6,y:61.7}},{t:this.shape_109,p:{x:350,y:80.5}},{t:this.shape_153},{t:this.shape_152},{t:this.shape_106,p:{x:306.6,y:84.1}},{t:this.shape_105,p:{x:325.9,y:82.7}},{t:this.estilos,p:{x:-83.4,y:253.1}},{t:this.shape_386,p:{x:19,y:194.9}},{t:this.shape_504},{t:this.shape_329,p:{x:39.4,y:195.9}},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_379,p:{x:84.7,y:194.9}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_376,p:{x:120.7,y:197.5}},{t:this.shape_327,p:{x:129.7,y:195.9}},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_382,p:{x:179.4,y:225.3}},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_348,p:{x:243.3,y:225.7}},{t:this.shape_475},{t:this.shape_343,p:{x:257.3,y:225.7}},{t:this.shape_474},{t:this.shape_381,p:{x:272.4,y:225.3}},{t:this.shape_321,p:{x:306.6,y:224.3}},{t:this.shape_335,p:{x:311.1,y:224.7}},{t:this.shape_347,p:{x:319.2,y:226.8}},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_326,p:{x:360.4,y:224.7}},{t:this.shape_470},{t:this.shape_469},{t:this.shape_320,p:{x:387.1,y:224.3}},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_311,p:{x:223.7,y:271.8}},{t:this.shape_465},{t:this.shape_291,p:{x:254.7,y:273.7}},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450,p:{x:239.8,y:313.8}},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_261,p:{x:239.8,y:353.9}},{t:this.shape_298,p:{x:254.4,y:353.7}},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_253,p:{x:349.7,y:351.8}},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_299,p:{x:223.3,y:391.6}},{t:this.shape_283,p:{x:239.8,y:393.8}},{t:this.shape_252,p:{x:254.4,y:393.6}},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415,p:{x:30.8,y:445.5}},{t:this.shape_414,p:{x:39.8,y:443.9}},{t:this.shape_413},{t:this.shape_265,p:{x:65.3,y:442.9}},{t:this.shape_412},{t:this.shape_411,p:{x:90.7,y:442.8}},{t:this.shape_410},{t:this.shape_409,p:{x:111.6,y:442.8}},{t:this.shape_251,p:{x:116.1,y:443.2}},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.instance_12},{t:this.atrasc},{t:this.sa4,p:{x:91.4,y:37.2}},{t:this.txtinruta},{t:this.instance_11}]},1).to({state:[{t:this.shape_158,p:{x:312.9,y:62.6}},{t:this.shape_157,p:{x:275.9,y:51.1}},{t:this.shape_156},{t:this.shape_155},{t:this.shape_522},{t:this.shape_154,p:{x:236.9,y:160.5}},{t:this.shape_112,p:{x:282.3,y:64.9}},{t:this.shape_111,p:{x:303.9,y:63.1}},{t:this.shape_110,p:{x:325.6,y:61.7}},{t:this.shape_109,p:{x:350,y:80.5}},{t:this.shape_153},{t:this.shape_152},{t:this.shape_106,p:{x:306.6,y:84.1}},{t:this.shape_105,p:{x:325.9,y:82.7}},{t:this.estilos,p:{x:-107.3,y:199}},{t:this.sa4,p:{x:90.4,y:69.6}},{t:this.shape_521},{t:this.shape_520,p:{x:178.7,y:138.2}},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.btnaddruta},{t:this.btnupdruta}]},1).to({state:[{t:this.shape_158,p:{x:312.9,y:62.6}},{t:this.shape_157,p:{x:275.9,y:51.1}},{t:this.shape_156},{t:this.shape_155},{t:this.shape_522},{t:this.shape_570},{t:this.shape_112,p:{x:282.3,y:64.9}},{t:this.shape_111,p:{x:303.9,y:63.1}},{t:this.shape_110,p:{x:325.6,y:61.7}},{t:this.shape_109,p:{x:350,y:80.5}},{t:this.shape_153},{t:this.shape_152},{t:this.shape_106,p:{x:306.6,y:84.1}},{t:this.shape_105,p:{x:325.9,y:82.7}},{t:this.estilos,p:{x:-74.4,y:233.6}},{t:this.atrasc},{t:this.sa4,p:{x:91.4,y:37.2}},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_520,p:{x:228.7,y:142.1}},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545,p:{x:155.4,y:292.1}},{t:this.shape_544},{t:this.shape_543,p:{x:178.6,y:289}},{t:this.shape_542,p:{x:184.2,y:289.6}},{t:this.shape_541},{t:this.shape_540,p:{x:205.9,y:292.3}},{t:this.shape_539,p:{x:215.8,y:292.3}},{t:this.shape_284,p:{x:23.7,y:379.1}},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_411,p:{x:60.3,y:379}},{t:this.shape_409,p:{x:64.7,y:379}},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_415,p:{x:103.4,y:381.7}},{t:this.shape_414,p:{x:112.4,y:380.1}},{t:this.shape_532},{t:this.instance_10,p:{y:403,scaleY:0.794}},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529,p:{x:169.3,y:336.1}},{t:this.shape_528},{t:this.shape_527,p:{x:190.8,y:336.3}},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523,p:{x:235.9,y:336.3}},{t:this.txtlinea2},{t:this.txtfinaliza2},{t:this.txtinicia2},{t:this.txtcontacto2},{t:this.btnguardar},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_7,p:{y:579,regX:50,regY:11,scaleX:1,scaleY:1,x:411}}]},1).to({state:[{t:this.shape_158,p:{x:312.9,y:62.6}},{t:this.shape_157,p:{x:275.9,y:51.1}},{t:this.shape_156},{t:this.shape_637},{t:this.shape_155},{t:this.shape_636},{t:this.shape_635},{t:this.shape_112,p:{x:282.3,y:64.9}},{t:this.shape_111,p:{x:303.9,y:63.1}},{t:this.shape_110,p:{x:325.6,y:61.7}},{t:this.shape_109,p:{x:350,y:80.5}},{t:this.shape_153},{t:this.shape_152},{t:this.shape_106,p:{x:306.6,y:84.1}},{t:this.shape_105,p:{x:325.9,y:82.7}},{t:this.estilos,p:{x:-74.4,y:233.6}},{t:this.atrasc},{t:this.sa4,p:{x:91.4,y:37.2}},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.txtinruta2},{t:this.shape_620},{t:this.shape_542,p:{x:51.2,y:233.3}},{t:this.shape_619},{t:this.shape_618},{t:this.shape_540,p:{x:88.5,y:236}},{t:this.shape_539,p:{x:98.4,y:236}},{t:this.shape_617},{t:this.shape_529,p:{x:49.6,y:284.8}},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_527,p:{x:86.2,y:285}},{t:this.shape_523,p:{x:96.1,y:285}},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_543,p:{x:84.7,y:329.8}},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_545,p:{x:75.3,y:376.9}},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.txtlinea},{t:this.txtfinaliza},{t:this.txtinicia},{t:this.txtcontacto},{t:this.shape_597},{t:this.shape_596},{t:this.shape_291,p:{x:47.3,y:423}},{t:this.shape_595},{t:this.shape_251,p:{x:70.3,y:420.9}},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_415,p:{x:109,y:423.2}},{t:this.shape_414,p:{x:118,y:421.6}},{t:this.shape_450,p:{x:126.4,y:423.1}},{t:this.instance_10,p:{y:440,scaleY:0.781}},{t:this.btnupd},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.P1},{t:this.P2},{t:this.P3},{t:this.P4}]},1).to({state:[{t:this.shape_158,p:{x:239.9,y:69.6}},{t:this.shape_157,p:{x:202.9,y:58.1}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_154,p:{x:236.9,y:132.5}},{t:this.shape_665},{t:this.shape_111,p:{x:230.9,y:70.1}},{t:this.shape_110,p:{x:252.6,y:68.7}},{t:this.shape_109,p:{x:277,y:87.5}},{t:this.shape_664},{t:this.shape_663},{t:this.shape_106,p:{x:233.6,y:91.1}},{t:this.shape_105,p:{x:252.9,y:89.7}},{t:this.estilos,p:{x:-74.4,y:233.6}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638}]},1).to({state:[{t:this.shape_158,p:{x:312.9,y:62.6}},{t:this.shape_157,p:{x:275.9,y:51.1}},{t:this.shape_668},{t:this.shape_156},{t:this.shape_669},{t:this.shape_154,p:{x:236.9,y:132.5}},{t:this.shape_112,p:{x:282.3,y:64.9}},{t:this.shape_111,p:{x:303.9,y:63.1}},{t:this.shape_110,p:{x:325.6,y:61.7}},{t:this.shape_109,p:{x:350,y:80.5}},{t:this.shape_153},{t:this.shape_152},{t:this.shape_106,p:{x:306.6,y:84.1}},{t:this.shape_105,p:{x:325.9,y:82.7}},{t:this.estilos,p:{x:-74.4,y:233.6}},{t:this.atrasc},{t:this.sa4,p:{x:91.4,y:37.2}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638}]},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(323.6,409.6,386.3,591.3);
// library properties:
lib.properties = {
	width: 480,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Prototipo_atlas_.png", id:"Prototipo_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"},
		{src:"components/ui/src/radiobutton.js", id:"an.RadioButton"},
		{src:"components/ui/src/css.js", id:"an.CSS"},
		{src:"components/ui/src/checkbox.js", id:"an.Checkbox"}
	],
	preloads: []
};


function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;