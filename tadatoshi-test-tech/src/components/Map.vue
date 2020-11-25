<template>
  <div>
    <GmapMap
      :center="{ lat: currentLocation.lat, lng: currentLocation.lng }"
      :zoom="14"
      map-type-id="terrain"
      style="width: 800px; height: 600px"
    >
      <GmapMarker
        :key="index"
        v-for="(bike, index) in info"
        :position="{
          lat: bike.location.coordinates[1],
          lng: bike.location.coordinates[0],
        }"
        @click="showModal(bike)"
      />
    </GmapMap>
    <Modal
      v-show="isModalVisible"
      @close="closeModal"
      :bikeInformations="bikeInformations"
    />
    <UpdateBike
    :bikeInformations="bikeInformations" />
  </div>
</template>
<script>
import axios from "axios";
import Modal from './Modal'
import UpdateBike from './UpdateBike'
export default {
  components: {
      Modal,
      UpdateBike
  },
  data() {
    return {
      info: null,
      currentLocation: { lat: 0, lng: 0 },
      isModalVisible: false,
      bikeInformations: ''
    };
  },
  // created() {
  //   axios
  //     .get("https://jsonbox.io/box_a3adbf3558b31a69259a")
  //     .then((res) =>
  //       res.data.forEach((item, index) => {
  //         this.info = res.data;
  //       })
  //     )
  //     .catch((error) => console.log('error', error));
  // },
  mounted() {
    axios
      .get("https://jsonbox.io/box_a3adbf3558b31a69259a")
      .then((res) =>
        res.data.forEach((item, index) => {
          this.info = res.data;
        })
      )
      .catch((error) => console.log('error', error));
    this.geolocation();
  },
  methods: {
    geolocation() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
    showModal(bike) {
        this.isModalVisible = true;
        this.bikeInformations = bike
      },
    closeModal(bike) {
      this.isModalVisible = false;
    },
    // onClick(bike) {
    //     alert(
    //         "Détail du vélo : \nstatus " +
    //         bike.service_status + "\n" +
    //         "serial number " +
    //         bike.serial_number + "\n" +
    //         "battery level " +
    //         bike.battery_level
    //     );
    // },
  },
};
</script>