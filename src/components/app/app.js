import template from './app.html';
import button from './../button/button'
import input from './../input/input'
import ul from './../ul/ul'


export default {
    template,
    name: 'vl-app',
    data: function() {
        return {
            newTask:'',
            todos:[{}]
    }

    },
    components: {
        [button.name]: button,
        [input.name]: input,
        [ul.name]: ul

    },
    methods: {
        add: function() {
            this.todos.push({text: this.newTask});
        },
    }
};
