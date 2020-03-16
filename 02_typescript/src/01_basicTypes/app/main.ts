// Implizte Typzuweisung
let a = 234; // a soll nun number sein
a = '234';

// Explizite Typzuweisung mit :
let b1: number;
b1 = null;
b1 = undefined;
b1 = 34;
console.log(b1);

let b2: any = 'egal';

let b3: null;
b3 = null;
b3 = undefined;

// Oder
let path: string | string[] = 'asdf';
path = ['asdf'];

// Collection
let list: Array<string> = ['234', 234];

// Tuple
let record: [number, string, string];
record = [23, 'Hans', 'Berlin'];

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

class Customer implements ICustomer {
    id: number  = null;
    name: string = null;
}

// Typ-Casting (Typescript)
// Hat keinen Einfluß auf JavaScript
let jsonString = JSON.stringify({id: 5, name: 'Peter'});
let data = JSON.parse(jsonString);
// (data as Date).toLocaleString();

console.log((data as ICustomer).name);


