Vue.component('counter', {
    template: '#counter-template',
    props: ['heading'],
    data: function() {
        return { count: 0 };
    }, 
    methods: {
    	incrementCount: function() {
    		this.count += 1;
    	}
    }
})




new Vue({
    el: '#app'
})
