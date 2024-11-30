<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="showDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
        <li><strong>Phone: </strong>{{ friend.phone }}</li>
        <li><strong>mail: </strong>{{ friend.email }}</li>
    </ul>
    </li>
</template>

<script>
export default {
    data() { 
        return {
            detailsAreVisible: false,
            friend: {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '0123 45678 90',
                email: 'manuel@localhost.com',
            },
        };
    },

    methods: {
        showDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    },
    
};
</script>