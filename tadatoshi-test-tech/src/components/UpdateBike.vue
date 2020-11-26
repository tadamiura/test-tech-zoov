<template>
    <div class="update-bike">
        <h2>Update bike number {{ bikeInformations.serial_number }}</h2>    
        <form 
        id="update"
        @submit="updateBike(e)"
        method="PUT">
            <p>
                <label for="battery">Niveau de la batterie</label><br>
                <input 
                id="battery" 
                v-model="bikeInformations.battery_level"
                type="number"
                name="battery">    
            </p>
            <!-- <p>
                <label for="status">Status</label><br>
                <input 
                id="status" 
                v-model="bikeInformations.service_status"
                type="number"
                name="status">    
            </p>
            <p>
                <label for="inOrder">En ordre</label><br>
                <input 
                id="inOrder" 
                v-model="bikeInformations.in_order"
                type="text"
                name="inOrder">    
            </p> -->
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
        }
    },
    props: [ 'bikeInformations'],
    methods: {
        updateBike(e) {
            console.log(this.$route.query)
        }
    }
}
</script>