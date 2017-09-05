import template from './input.html';

export default {
    template,
    name: 'vl-input',
    data: function() {
        return {
            newTask: ''
        }
    },
    props: {
        name: {
            type: String
        }
    }

};
