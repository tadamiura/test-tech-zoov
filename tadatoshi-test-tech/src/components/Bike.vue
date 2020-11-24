<template>
    <div>
        <GmapMap
            :center="{lat: currentLocation.lat, lng: currentLocation.lng}"
            :zoom="12"
            map-type-id="terrain"
            style="width: 800px; height: 600px"
        >
            <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
            />
        </GmapMap>  
        <div v-for="bike in info" :key="bike.id">
            <h1>number : {{ bike.serial_number }}</h1>
            <p>batterie level : {{ bike.battery_level }}</p>
            <p>Location : <br>
            long : {{bike.location.coordinates[0] }}<br>
            lat : {{ bike.location.coordinates[1] }} </p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return{
            info: null,
            markers: [],
            currentLocation : { lat:0, lng: 0 },
        }
    },
    mounted() {
        this.geolocation();
        axios
        .get("https://jsonbox.io/box_a3adbf3558b31a69259a")
        .then((res) => (this.info = res.data) && console.log(res.data))
        .catch(error => console.log(error));
    },
    methods: {
        geolocation () {
            navigator.geolocation.getCurrentPosition((position) => {
                this.currentLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
                };
            });
        },
    }
};
</script>