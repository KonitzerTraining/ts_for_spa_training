
// Objekterstellung ES3

console.log(this === window);

function Person(name = null) {
    console.log(this);
    this.name = name;
}

// Methoden gehören dem Prototyp des Konstruktors
Person.prototype.sayHello = function () {
    console.log(this.name);
};
console.log(Person.prototype);

// new static method for String constructor
String.isAString = function (s) {
    if(s === void 0) return false;
    if(s === null || s.constructor === String) {
        return true;
    }
};

let t;
console.log(String.isAString(t));

// Objekt-Erstellung
// new erstellt einen Kontext für die Funktion Person
// Person erweitert diesen Kontext um name
// new gibt die Referenz nach links zurück
let p1 = new Person('Hans');
console.log(p1);
p1.sayHello();

// Context
// Die Funktion erhält ihren Kontext(this)
// durch die Aufrufsituation
/*
document.addEventListener('click', function () {
    console.dir(this);
});
*/

const context = {
    color: 'blue'
};

document.addEventListener('click', function () {
    console.dir(this);

}.bind(this));

// ES6 - Arrow
document.addEventListener('click', () => {
    console.dir(this);
});