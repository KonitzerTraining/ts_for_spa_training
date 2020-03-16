// Implizte Typzuweisung
var a = 234; // a soll nun number sein
a = '234';
// Explizite Typzuweisung mit :
var b1;
b1 = null;
b1 = undefined;
b1 = 34;
console.log(b1);
var b2 = 'egal';
var b3;
b3 = null;
b3 = undefined;
// Oder
var path = 'asdf';
path = ['asdf'];
// Collection
var list = ['234', 234];
// Tuple
var record;
record = [23, 'Hans', 'Berlin'];
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
var Customer = /** @class */ (function () {
    function Customer() {
        this.id = null;
        this.name = null;
    }
    return Customer;
}());
// Typ-Casting (Typescript)
// Hat keinen Einfluß auf JavaScript
var jsonString = JSON.stringify({ id: 5, name: 'Peter' });
var data = JSON.parse(jsonString);
// (data as Date).toLocaleString();
console.log(data.name);
//# sourceMappingURL=main.js.map