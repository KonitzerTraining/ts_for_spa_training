// ES6 Primer

// Datentypen
// Variablen erhalten ihren Datentyp durch den Wert

// number
// + - / * % += -= *= /= %=
let a1number = 23;
let z = parseInt('234'); // Text in Zahl
console.log(z); // => number

// string
// +
let a2string = 'Text'; // Einfache oder doppelte, ``
console.log('text'.length);

// boolean
// < > <= >= !== === (== != ist nicht typsicher)
// && || !
let a3boolean = 5 > 3; // => true

// undefined
// void 0;
let a4undefined; // => undefined

// symbol
let a5symbol = Symbol(); // unique
// for-of-Schleife = Symbol.iterator

// Referenztypen
// object
// new
// let b1 = new Object();
let b1object = {
    color: 'blue',
}; // object literal notation

// function
let b2function = function () {
    console.log(this);
};

// Inhalt bestimmt den Datentyp
// typeof-Operator
console.log(typeof a1number);
console.log(typeof a2string);
console.log(typeof a3boolean);
console.log(typeof a4undefined);
console.log(typeof a5symbol);

console.log(b1object, typeof  b1object, b1object.constructor === Object);
let b2object = new Object();
console.log(Object.prototype.constructor === Object);
console.log(b2object);
console.log(b2object.__proto__ === Object.prototype);
console.log(b2object.__proto__.constructor === Object.prototype.constructor);
console.log(b2object.__proto__.constructor === Object);

console.log(b2function, typeof  b2function);

// Funktion als Objekt an Console übergeben
console.dir(b2function);
b2function(); // this => window, in diesem Fall
