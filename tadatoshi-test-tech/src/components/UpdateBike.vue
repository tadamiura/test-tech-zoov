<template>
    <div>
        <h2>Update bike number {{ bikeInformations.serial_number }}</h2>    
        <form 
        id="update"
        @submit="updateBike"
        method="POST">
            <p>
                <label for="battery">Niveau de la batterie</label>
                <input 
                id="battery" 
                v-model="bikeInformations.battery_level"
                type="number"
                name="battery">    
            </p>
            <p>
                <label for="status">Status</label>
                <input 
                id="status" 
                v-model="bikeInformations.service_status"
                type="number"
                name="status">    
            </p>
            <p>
                <label for="inOrder">En ordre</label>
                <input 
                id="inOrder" 
                v-model="bikeInformations.in_order"
                type="text"
                name="inOrder">    
            </p>
            <p>
            <input
                type="submit"
                value="Submit"
            >
            </p>
        </form>
    </div>
</template>

<script>
import Map from './Map'
import axios from "axios"
export default {
    data () {
        return {
        error: [],
        battery: null,
        status: null,
        inOrder: ''
        }
    },
    props: [ 'bikeInformations'],
    methods: {
        updateBike(e) {
            e.preventDefault()
            const url = 'https://jsonbox.io/box_a3adbf3558b31a69259a'
            const bikeInfo = this.bikeInformations
            axios
            .post(url, bike)
            .then((res) => console.log(res.data))

        }
    }
}
</script>