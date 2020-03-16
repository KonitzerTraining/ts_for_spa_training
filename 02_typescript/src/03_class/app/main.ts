class Product {
    constructor(public title: string, public price: number) {
    }
}

class Bekleidung extends Product {
    //private size: string;
    // private public
    public static readonly info: string = 'Only for testing';
    private brand: string;

    constructor(public size: string, title: string, price: number, brand: string) {
        super(title, price);
        // Typüberprüfung zur Laufzeit fehlt
        //this.size = size;

        //this.brand = brand;
        Reflect.defineProperty(this, 'brand', {
            value: brand,
            enumerable: true
        });

        console.log(size);
        console.log(this.size);

        Object.seal(this);
    }

    public passtDas(s): boolean {
        return s === this.size;
    }

    get info() {
        return Bekleidung.info;
    }
    /*
    set info() {

    }*/

}

let b = new Bekleidung('L', 'Hemd', 43, 'Olymp');
//console.log(b.info);
console.log(Bekleidung.info);
console.log(b.size);
console.log(b.passtDas('M'));