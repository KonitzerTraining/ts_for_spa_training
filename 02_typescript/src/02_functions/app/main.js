// Im Funktionskopf Typen angeben
// ? optionaler Parameter
// Default-Werte möglich (gibt es schon ES6)
// ES6-version
function computeES6(x, x1, y) {
    if (x1 === void 0) { x1 = 1; }
    return x * x;
}
var erg1 = computeES6(3, 5, null);
console.log(erg1);
// default return => :void
function compute(x, x1, y) {
    if (x1 === void 0) { x1 = 1; }
    return x * x;
}
console.log(compute(23));
/*
Funktionen mit möglichem Error werden manchmal nicht bis zum Ende ausgeführt
Mit | können mehrere Typen angegeben werden
*/
function multiply(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('number expected');
    }
    return x * y;
}
multiply(234, 12);
// Funktionsdefinition mit Implementierung
// Definitionsteil: (x: number) => number
var fxBig = function (y) {
    return y * y;
};
// Kompakte Variante
var fx = function (y) { return y * y; };
// noch kompakter
var fxCompact = function (y) { return y * y; };
var erg = fxCompact(2);
console.log(erg);
console.log(fx(4));
var fy = function (text) { return text.length; };
console.log(fy('lkasCHLAEIWHRU'));
//# sourceMappingURL=main.js.map