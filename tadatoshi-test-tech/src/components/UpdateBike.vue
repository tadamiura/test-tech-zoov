<template>
    <div class="update-bike">
        <h2><font-awesome-icon icon="info-circle"/>Bike's Informations</h2>
        <ul>
            <li><font-awesome-icon icon="bicycle"/>Numéro de série : {{ bikeInformations.serial_number }}</li>
            <li><font-awesome-icon icon="parking"/>En ordre : {{ bikeInformations.in_order }}</li>
            <li><font-awesome-icon icon="battery-three-quarters"/>Niveau de batterie : {{ bikeInformations.battery_level}}/{{ maxLevel }}</li>
            <li><font-awesome-icon icon="compass"/>Coordonnées : <br>
            lat : {{ bikeInformations.location.coordinates[1]}}<br>
            lng : {{ bikeInformations.location.coordinates[0]}}</li>
        </ul>    
        
    </div>
</template>

<script>
import Map from './Map'
import axios from "axios"
export default {
    data () {
        return {
            maxLevel: 100
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