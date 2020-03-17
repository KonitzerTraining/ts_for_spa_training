export default class CustomerList {
    abc = 123;
    // Alias für die Funktion CustomerList
    constructor() {
        // Typüberprüfung fehlt hier noch
        // Property oder Member
        this.customers = [ // array literal notation
            { // object literal notation == new Object();
                id: 3,
                name: 'Hans',
            },
            {
                id: 4,
                name: 'Peter',
            }
        ]
    }

    // Method (CustomerList.prototype.searchForName)
    searchForName(name) {
       // let _this = this;
        return this.customers.filter((customer) => {
            console.log(this);
            return customer.name === name;
        })
    }

    static info = '1.02.';
}