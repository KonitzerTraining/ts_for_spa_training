// Im Funktionskopf Typen angeben
// ? optionaler Parameter
// Default-Werte möglich (gibt es schon ES6)

// ES6-version
function computeES6 (x, x1 = 1, y) {
    return x * x;
}

let erg1 = computeES6(3, 5, null);
console.log(erg1);

// default return => :void
function compute(x: number, x1 = 1, y?: number): number {
    return x * x;
}

console.log(compute(23));

/*
Funktionen mit möglichem Error werden manchmal nicht bis zum Ende ausgeführt
Mit | können mehrere Typen angegeben werden
*/

function multiply(x: number, y: number): number | never {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('number expected');
    }
    return x * y;
}

multiply(234, 12);

// Funktionsdefinition mit Implementierung
// Definitionsteil: (x: number) => number

let fxBig: (x: number) => number = (y: number):number => {
    return y * y;
};

// Kompakte Variante
let fx: (x: number) => number = (y: number):number => y * y;

// noch kompakter
let fxCompact = y => y * y;
let erg = fxCompact(2);
console.log(erg);

console.log(fx(4));

let fy: (y?: string) => number = (text: string): number  => text.length;
console.log(fy('lkasCHLAEIWHRU'));

