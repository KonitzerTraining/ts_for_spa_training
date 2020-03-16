"use strict";

console.log('EcmaScript 6 für Angular');

// Add .js extension manually!
import CustomerList from "./customer-list/customer-list.js";

console.log(typeof CustomerList);
console.dir(CustomerList);

let customerList = new CustomerList();

console.log(customerList.searchForName('Peter'));

console.log(customerList.searchForName === CustomerList.prototype.searchForName);
