import template from './button.html';

export default {
    template,
    name: 'vl-button',
    props: {
        name: {
            type: String
        }
    },
    methods: {
        add: function() {
            this.$emit('click');
        }
    }
};
