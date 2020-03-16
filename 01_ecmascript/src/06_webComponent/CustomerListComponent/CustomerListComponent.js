import HttpClient from "../lib/http-client.js";

window.customElements.define('customer-list', class extends HTMLElement {
    constructor(props) {
        super(props);

        this.innerHTML = "<h2>Kundenliste</h2>";

        this.http = new HttpClient();

        this.http.get('http://localhost:3000/customers')
            .then(({length}) => {
                this.innerHTML += `<p>Anzahl der Kunden: ${length}</p>`;
            })
    }

});