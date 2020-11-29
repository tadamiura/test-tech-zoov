<template>
  <div class="map text--center">
    <GmapMap
      :center="{ lat: currentLocation.lat, lng: currentLocation.lng }"
      :zoom="14"
      map-type-id="terrain"
      style="width: 100%; height: 500px"
      class="gmap"
    >
      <GmapMarker
        :key="index"
        v-for="(bike, index) in info"
        :position="{
          lat: bike.location.coordinates[1],
          lng: bike.location.coordinates[0],
        }"
        @click="showModal(bike)"
        :icon="{ url: markerPlace }"
      />
    </GmapMap>
    <Modal
      v-show="isModalVisible"
      @close="closeModal"
      :bikeInformations="bikeInformations"
    />
    <button 
    class="button-add-bike ma-3 neutral typography--button pa-2"
    type="button"
    @click="addBike"
    v-html="createNewBike ? 'QUITTER LE FORMULAIRE' : 'AJOUTER UN VELO'"
    >
    </button>
    <NewBike 
    v-if="createNewBike"
    :bikeInformations="bikeInformations"
    :info="info" 
    />
    <UpdateBike v-if="clickMarker" 
    :bikeInformations="bikeInformations" />
  </div>
</template>
<script>
import axios from "axios";
import Modal from "./Modal";
import UpdateBike from "./UpdateBike";
import NewBike from "./NewBike"
export default {
  components: {
    Modal,
    UpdateBike,
    NewBike
  },
  data() {
    return {
      info: "",
      currentLocation: { lat: 0, lng: 0 },
      isModalVisible: false,
      bikeInformations: "",
      clickMarker: false,
      createNewBike: false,
    };
  },
  computed: {
    markerPlace() {
      return 'https://i.ibb.co/h9G3p1d/sty-QR-logo-pwa-3.png';
    },
  },
  mounted() {
    axios
      .get("https://jsonbox.io/box_82a8f61b98e392c9568b")
      .then((res) =>
        res.data.forEach((item, index) => {
          this.info = res.data;
        })
      )
      .catch((error) => console.log("error", error));
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
      this.bikeInformations = bike;
      this.clickMarker = false;
    },
    closeModal(bike) {
      this.isModalVisible = false;
      this.clickMarker = true;
    },
    addBike() {
        this.createNewBike = !this.createNewBike
    },
  },
};
</script>