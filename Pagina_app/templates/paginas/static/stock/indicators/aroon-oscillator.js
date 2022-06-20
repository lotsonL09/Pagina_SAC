/*
 Highstock JS v10.1.0 (2022-04-29)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Wojciech Chmiel

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/aroon-oscillator",["highcharts","highcharts/modules/stock"],function(g){a(g);a.Highcharts=g;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function g(a,c,e,g){a.hasOwnProperty(c)||(a[c]=g.apply(null,e),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:c,
module:a[c]}})))}a=a?a._modules:{};g(a,"Stock/Indicators/MultipleLinesComposition.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,c){var e=a.seriesTypes.sma,g=c.defined,n=c.error,v=c.merge,f;(function(c){function t(b){var h,a=[];b=b||this.points;if(this.fillGraph&&this.nextPoints){if((h=e.prototype.getGraphPath.call(this,this.nextPoints))&&h.length){h[0][0]="L";a=e.prototype.getGraphPath.call(this,b);h=h.slice(0,a.length);for(var d=h.length-1;0<=d;d--)a.push(h[d])}}else a=
e.prototype.getGraphPath.apply(this,arguments);return a}function p(){var b=this,h=b.linesApiNames,d=b.areaLinesNames,c=b.points,p=b.options,u=b.graph,t={options:{gapSize:p.gapSize}},f=[],m=b.getTranslatedLinesNames(b.pointValKey),r=c.length,q;m.forEach(function(b,a){for(f[a]=[];r--;)q=c[r],f[a].push({x:q.x,plotX:q.plotX,plotY:q[b],isNull:!g(q[b])});r=c.length});if(this.userOptions.fillColor&&d.length){var l=m.indexOf(k(d[0]));l=f[l];d=1===d.length?c:f[m.indexOf(k(d[1]))];m=b.color;b.points=d;b.nextPoints=
l;b.color=this.userOptions.fillColor;b.options=v(c,t);b.graph=b.area;b.fillGraph=!0;a.seriesTypes.sma.prototype.drawGraph.call(b);b.area=b.graph;delete b.nextPoints;delete b.fillGraph;b.color=m}h.forEach(function(a,d){f[d]?(b.points=f[d],p[a]?b.options=v(p[a].styles,t):n('Error: "There is no '+a+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),b.graph=b["graph"+a],e.prototype.drawGraph.call(b),b["graph"+a]=b.graph):n('Error: "'+
a+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});b.points=c;b.options=p;b.graph=u;e.prototype.drawGraph.call(b)}function d(b){var a=[];(this.pointArrayMap||[]).forEach(function(d){d!==b&&a.push(k(d))});return a}function k(b){return"plot"+b.charAt(0).toUpperCase()+b.slice(1)}function u(b){var a=[];(this.pointArrayMap||[]).forEach(function(d){a.push(b[d])});return a}function m(){var b=this,a=b.pointArrayMap,d=[],c;d=b.getTranslatedLinesNames();
e.prototype.translate.apply(b,arguments);b.points.forEach(function(h){a.forEach(function(a,k){c=h[a];b.dataModify&&(c=b.dataModify.modifyValue(c));null!==c&&(h[d[k]]=b.yAxis.toPixels(c,!0))})})}var f=[],r=["bottomLine"],x=["top","bottom"],l=["top"];c.compose=function(b){if(-1===f.indexOf(b)){f.push(b);var a=b.prototype;a.linesApiNames=a.linesApiNames||r.slice();a.pointArrayMap=a.pointArrayMap||x.slice();a.pointValKey=a.pointValKey||"top";a.areaLinesNames=a.areaLinesNames||l.slice();a.drawGraph=p;
a.getGraphPath=t;a.toYData=u;a.translate=m;a.getTranslatedLinesNames=d}return b}})(f||(f={}));return f});g(a,"Stock/Indicators/AroonOscillator/AroonOscillatorIndicator.js",[a["Stock/Indicators/MultipleLinesComposition.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,c,e){var g=this&&this.__extends||function(){var a=function(c,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,d){a.__proto__=d}||function(a,d){for(var c in d)d.hasOwnProperty(c)&&(a[c]=d[c])};
return a(c,d)};return function(c,d){function k(){this.constructor=c}a(c,d);c.prototype=null===d?Object.create(d):(k.prototype=d.prototype,new k)}}(),n=c.seriesTypes.aroon,l=e.extend,f=e.merge,w=c.seriesTypes.aroon;e=function(a){function c(){var d=null!==a&&a.apply(this,arguments)||this;d.data=void 0;d.options=void 0;d.points=void 0;return d}g(c,a);c.prototype.getValues=function(a,c){var d=[],e=[],f=[];a=w.prototype.getValues.call(this,a,c);for(c=0;c<a.yData.length;c++){var g=a.yData[c][0];var k=a.yData[c][1];
g-=k;d.push([a.xData[c],g]);e.push(a.xData[c]);f.push(g)}return{values:d,xData:e,yData:f}};c.defaultOptions=f(n.defaultOptions,{tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span><b> {series.name}</b>: {point.y}'}});return c}(n);l(e.prototype,{nameBase:"Aroon Oscillator",linesApiNames:[],pointArrayMap:["y"],pointValKey:"y"});a.compose(n);c.registerSeriesType("aroonoscillator",e);"";return e});g(a,"masters/indicators/aroon-oscillator.src.js",[],function(){})});
//# sourceMappingURL=aroon-oscillator.js.map