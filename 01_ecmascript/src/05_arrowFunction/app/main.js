import {devUrl, liveUrl} from "./config.js";

console.log('EcmaScript 6 für Angular');

// Add .js extension manually!
import CustomerList from "./customer-list/customer-list.js";

let customerList = new CustomerList();

customerList
    .loadCustomers() // => Promise
    .then(() => {
       let result = customerList.searchForName('Hans');
       console.log(result);
    });


// Kontext wurde mit Object.seal() abgesichert
// delete customerList.customers; => Error


customerList.loadCustomersWrong();
console.log(liveUrl, devUrl);
