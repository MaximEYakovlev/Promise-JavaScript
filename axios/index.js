import axios from 'axios';

axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.headers)
    .then((headers) => console.log(headers))
    .catch((error) => {
        // handle error
        console.log(error);
    })
    .finally(() => {
        // always executed
        console.log('done');
    });
