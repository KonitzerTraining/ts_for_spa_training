// Implizte Typzuweisung
var a = 234; // a soll nun number sein
a = '234';
// Explizite Typzuweisung mit :
var b1;
b1 = null; // typeof null => object
b1 = undefined;
b1 = null;
console.log(b1);
// Beliebig
var b2 = 'egal'; // Wie in EcmaScript
var b3; // Wert als Typ
b3 = null;
b3 = undefined;
// Oder
var path = 'asdf';
console.log(path);
path = ['asdf', 23];
console.log(path);
// Collection
var list = ['234', 234];
// Tuple
var record;
record = [23, 'Hans', 'Berlin', true];
// Enum
var Sendung;
(function (Sendung) {
    Sendung[Sendung["Verschollen"] = 0] = "Verschollen";
    Sendung[Sendung["Gelagert"] = 1] = "Gelagert";
    Sendung[Sendung["Unterwegs"] = 2] = "Unterwegs";
    Sendung[Sendung["Geliefert"] = 3] = "Geliefert";
})(Sendung || (Sendung = {}));
var myPost = Sendung.Verschollen;
if (myPost === Sendung.Verschollen) {
    console.log('weg');
}
var c1 = {
    id: 5,
    name: 'hans',
    phone: '02934890',
    address: {
        street: 'Im Zeil 234',
        zip: '24389'
    }
};
var c2 = {
    id: 6,
    name: 'Peter',
};
var Customer = /** @class */ (function () {
    function Customer() {
        this.id = null;
        this.name = null;
    }
    return Customer;
}());
var c3;
console.log(c3);
// Typ-Casting (Typescript)
// Hat keinen Einfluß auf JavaScript
var jsonString = JSON.stringify({ id: 5, name: 'Peter' });
// zum Beispiel Rest-Antwort
var data = JSON.parse(jsonString);
// (data as Date).toLocaleString();
console.log(data.name);
var e = {
    street: 'asdf',
    zip: '93489'
};
//# sourceMappingURL=main.js.map