// ES6 Features

// Variables
// Deklarationen mit var erfahren ein Hoisting
console.log(oldMethod);
var oldMethod = 123; // ES3 => Deklaration wird verschoben

// console.log(newMethod);
let newMethod = '234';

// Konstanten
const BAUSTEIN = 'Platzhalter';

// Template Literal Notation
const ABC = `Mehr-
zeiliger
Text mit ${BAUSTEIN}.`;

console.log(ABC);

// Objekte
const title = 'Überschrift';
const o1 = { // new Object();
    color: 'blue',
    __id__: 3,
    title, // title: title;
    sayHello: function () {

    },
    getId() {
        return this.__id__;
    },
    get id() {
        return this.__id__;
    },
    set id(v) {
        console.log(v);
    }
};

o1.amount = 234;
console.log(o1);
console.log((o1.hasOwnProperty === Object.prototype.hasOwnProperty));

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

// Weitere Objekte
// Objekte unterscheiden sich in der Konstruktor-Funktion

let dateObject = new Date();
console.log(dateObject.getMinutes === Date.prototype.getMinutes);

// Collections
// iterator method is implemented
// Array
// let liste = new Array();
let liste = [3, 4, 5]; //  Array literal notation
liste.push(7);
console.log(liste);

for (let value of liste) {
    console.log(value);
}

// Map
let map = new Map();
let key1 = {id: 5};
let key2 = {id: 7};

// Key can be references
map.set(key1, 45);
map.set(key2, 34);
console.log(map);

for (let [k, v] of map) {
    console.log(k, v);
}

// Deconstructor
let liste1 = [34, 'Überschrift', 'Max Müller', 234, 23, 56];
let [id, headline, author, ...info] = liste1;
console.log(id, headline, author, info);

let address = {
    name: 'Max Müller',
    plz: '09384'
};
let {name, plz: zip} = address;

console.log(name, zip);

// Spread / Rest / Default
// spread
function manyParams(a, b = null, ...c) {
    console.log(a, b, c);
}

manyParams(4, 5, 6, 77, 8, 89);

let list3 = [56, 546, 34, 231, 43, 54];
// rest
manyParams(...list3);

let bigAddress = {
    phone : '039849802394',
    ...address
};

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