// var oldMethod;
// ES6 Features

//"use strict"; // ES 10


// ES 3
// Variables
// Deklarationen mit var erfahren ein Hoisting
globalVariable = 'starke Kopplung';

console.log(oldMethod); // undefined
var oldMethod = 123; // ES3 => Deklaration wird verschoben

console.log(window.globalVariable);
console.log(window.oldMethod);

/*
Hoisting:
1. Durchlauf
Variablendeklarationen mit var und
alle Funktionsdefinitionen werden and den Anfang verschoben.
2. Durchlauf
Ausführen der Anweisungen.
*/
function factory () {
    return {
        css
    };
    function css () {
        console.log('bunt');
    }
}
factory().css();

// ES 6
//console.log(newMethod);
let newMethod = '234';

// Konstanten
const BAUSTEIN = 'Platzhalter';

// Template Literal Notation
const ABC = `Mehr-
zeiliger
Text mit ${BAUSTEIN + ' ' + Date.now()}.`;

console.log(ABC);

// Objekte
const title = 'Überschrift';
const prop = 'id';
const o1 = { // new Object();
    color: 'blue', // ES3
    __id__: 3, // könnte privat sein
    title, // title: title;
    sayHello: function () {
    },
    getId() {
        return this.__id__;
    },
    get [prop]() {
        return this.__id__;
    },
    set id(v) {
        console.log(v);
    }
};

o1.amount = 234;
console.log(o1);
console.log((o1.hasOwnProperty === Object.prototype.hasOwnProperaty));

// Zugriff
console.log(o1.color);
console.log(o1['color']);
let i = 'color';
console.log(o1[i]);

for (let key in o1) {
    console.log(key, o1[key]);
}

// Aufruf
console.log(o1.getId());

// Impliziter Aufruf
console.log(o1.id);
o1.id = 'neu';

// Weitere Objekte
// Objekte unterscheiden sich in der Konstruktor-Funktion

let dateObject = new Date(); // Datentyp von Date ist
console.log(typeof Date);
console.dir(Date);
console.log(dateObject.getMinutes === Date.prototype.getMinutes);

// Collections
// iterator method is implemented
// Array
// let liste = new Array();
let liste = [3, 4, 5]; //  Array literal notation
liste.push(7);
console.log(liste);

// ES6 for..of
for (let value of liste) {
    console.log(value);
}
// console.log(value);
// Map
let map = new Map();
let key1 = {id: 5};
let key2 = {id: 7};

// Key can be references
map.set(key1, 45);
map.set(key2, 34);
console.log(map);
for (let values of map) {
    console.log(values);
}

for (let [k, v] of map) {
    console.log(k, v);
}

// Deconstructor
let liste1 = [34, 'Überschrift', 'Max Müller', 234, 23, 56];

// Rest-Operator für den Überhang
let [id, headline, author, ...info] = liste1;
console.log(id, headline, author, info);

let address = {
    name: 'Max Müller',
    plz: '09384'
};

// zip ist Alias für plz
let {name, plz: zip} = address;

console.log(name, zip);

// Spread / Rest / Default
// Rest
function manyParams(a, b = null, ...c) {
    console.log(a, b, c);
}

manyParams(4, 5, 6, 77, 8, 89);

let list3 = [56, 546, 34, 231, 43, 54];
// Spread
manyParams(...list3);

let bigAddress = {
    phone : '039849802394',
    ...address
};

// import {customer} from ''

console.log(bigAddress);

// Hoisting ES3
// Alle Funktionsdefinitionen
// werden an den Anfang des Scopes verschoben,
// auch alle Deklarationen mit var
f1();

function f1() {
    console.log('asdf', a);
    var a = 1; // let ist besser

    if(true) {
        let b = 2; // block-level-scope
    }

    //console.log(b);
}