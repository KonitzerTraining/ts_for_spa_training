export default class HttpClient {
    // Method
    get(url) {

        /**
         * @return Promise
         */
        // fetch: HTML5 API
        return fetch(url)
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .catch(() => {
                console.warn('Server down');
            })
    }

}