const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            lastName: '',
        };
    },

    computed: {
        fullName() { 
           
            return this.name + ' ' + this.lastName ;
        }
    },

    watch: {
        
        counter(value) { 
            if (value > 50) {
                this.counter = 0;
            }
        }

    },

    methods: {
        addCounter(n) { 
            this.counter = this.counter + n;
        },

        removeCounter(n) { 
            this.counter = this.counter - n;
        },

        submitForm() { 
            alert('Submitted!')
        },

        resetInput() { 
            this.name = '';
            this.lastName = '';
        }
    }
});

app.mount('#events')