window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.Vue = require('vue');

const app = new Vue({
    el: '#app',
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(function (response) {
            // handle success
            let det = JSON.stringify(response.data);
            alert(det);

            //alert();
        })
    },
});
