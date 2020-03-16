// ES6 Primer

// Datentypen
// number
// + - / * % += -= *= /= %=
let a1number = 23;
let z = parseInt('234');
console.log(z); // => number

// string
// +
let a2string = 'Text';

// boolean
// < > <= >= !== ===
// && || !
let a3boolean = 5 > 3; // => true

// undefined
// void 0;
let a4undefined; // => undefined

// symbol
let a5symbol = Symbol(); // unique

// object
// new
// let b1 = new Object();
let b1object = {}; // object literal notation

// function
let b2function = function () {
    console.log(this);
};

// Inhalt bestimmt den Datentyp
console.log(typeof a1number);
console.log(typeof a2string);
console.log(typeof a3boolean);
console.log(typeof a4undefined);
console.log(typeof a5symbol);

console.log(b1object, typeof  b1object);
console.log(b2function, typeof  b2function);

// Funktion als Objekt an Console übergeben
console.dir(b2function);
b2function(); // this => window, in diesem Fall
