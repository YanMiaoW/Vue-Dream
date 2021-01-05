
Vue.component('c-draw', {
    props: ['lala'],
    template: '<ul><li v-for=" l in lala"> draw a {{l.name}} </li> </ul>'
})



var app = new Vue({
    el: '#app',
    data: {
        tag_name: "aaa",
        add_time: "ass",
        update_time: "ccc",
    },
    methods: {
        "search": function () {
            var req = 'http://192.168.1.4:8000/production/?method=common_query&params={%22tb%22:%20%22hub_kind%22,%22condition%22:[{%22name%22:%22name%22,%22condition%22:%22=%22,%22value%22:%22%E6%8B%89%E9%93%BE%22}],%22columns%22:[%22id%22,%22name%22]}';
            axios.get(req)  
            
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})

