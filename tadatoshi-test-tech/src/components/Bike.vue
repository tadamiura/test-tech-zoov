<template>
    <div>
        <GmapMap
            :center="{lat:48.7723, lng:2.24356}"
            :zoom="16"
            map-type-id="terrain"
            style="width: 800px; height: 600px"
        >
            <GmapMarker
            :key="index"
            v-for="(bike, index) in markers"
            :position="bike.position"
            :clickable="true"
            :draggable="true"
            @click="center=bike.position"
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
// import VueAxios from 'vue-axios'
export default {
    data () {
        return{
            info: null,
            center: null,
            markers: []
        }
    },
    mounted() {
        axios
        .get("https://jsonbox.io/box_a3adbf3558b31a69259a")
        .then((res) => (this.info = res.data))
        .catch(error => console.log(error))
    },
    methods: {
        fetchBikes: function () {
            console.log(console.log('bike'))
        }
    }
};
</script>