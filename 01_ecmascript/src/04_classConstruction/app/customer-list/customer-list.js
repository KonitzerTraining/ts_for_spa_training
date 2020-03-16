export default class CustomerList {

    constructor() {
        // Typüberprüfung fehlt hier noch

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

    searchForName(name) {

        return this.customers.filter((customer) => {
            console.log(this);
            return customer.name === name;
        })
    }
}