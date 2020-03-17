// Implizte Typzuweisung
let a = 234; // a soll nun number sein
a = '234';

// Explizite Typzuweisung mit :
let b1: number;
b1 = null; // typeof null => object
b1 = undefined;
b1 = null;
console.log(b1);

// Beliebig
let b2: any = 'egal'; // Wie in EcmaScript

let b3: null; // Wert als Typ
b3 = null;
b3 = undefined;

// Oder
let path: string | string[] = 'asdf';
console.log(path);
path = ['asdf', 23];
console.log(path);

// Collection
let list: Array<string> = ['234', 234];

// Tuple
let record: [number, string, string];
record = [23, 'Hans', 'Berlin', true];

// Enum
enum Sendung {
    Verschollen,
    Gelagert,
    Unterwegs,
    Geliefert
}

let myPost: Sendung = Sendung.Verschollen;

if (myPost === Sendung.Verschollen) {
    console.log('weg');
}

// Datenmodellierung via Interface
// Interaces werden nicht in JavaScript umgewandelt
// Können als Model während der Konzeptionsphase hinterlegt werden.

interface IContact {
    phone?: string;
    email?: string;
}

interface IAddress {
    street: string;
    zip: string;
}

// interface
interface ICustomer extends IContact{
    id: number;
    name: string;
    address?: IAddress;
}

let c1: ICustomer = {
    id: 5,
    name: 'hans',
    phone: '02934890',
    address: {
        street: 'Im Zeil 234',
        zip: '24389'
    }
};

let c2: ICustomer = {
    id: 6,
    name: 'Peter',
};

class Customer implements ICustomer {
    id: number  = null;
    name: string = null;
}
let c3: Customer;
console.log(c3);
// Typ-Casting (Typescript)
// Hat keinen Einfluß auf JavaScript
let jsonString = JSON.stringify({id: 5, name: 'Peter'});

// zum Beispiel Rest-Antwort
let data = JSON.parse(jsonString);
// (data as Date).toLocaleString();

console.log((data as ICustomer).name);

type employee = IAddress;
let e: employee = {
    street: 'asdf',
    zip: '93489'
};

