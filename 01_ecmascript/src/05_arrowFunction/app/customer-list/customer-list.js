import HttpClient from "../lib/http-client.js";
import {devUrl} from "../config.js";

export default class CustomerList {

    constructor() {
        // ES3
        // this.customers = [];

        // ES6 Reflect API
        Reflect.defineProperty(this, 'customers', {
            // Property Descriptor Map (Object.defineProperty())
            value: [],
            writable: true,
            enumerable: true,
            configurable: false
        });

        this.httpClient = new HttpClient();
        Object.seal(this);
    }

    loadCustomersWrong() {
        this.httpClient
            .get(devUrl)
            .then(function () {
                console.log(this);
            });
    }

    loadCustomers() {
        return this.httpClient
            .get(devUrl)
            .then((customers) => {
                console.log(this);
                this.customers = customers;
            });
    }

    searchForName(name) {
        return this.customers.filter((customer) => {
            return customer.name === name;
        })
    }
}