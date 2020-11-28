<template>
    <div class="new-bike">
        <form
  id="app"
  @submit="checkForm"
  method="post"
>
	<h2>Ajouter un nouveau vélo</h2>
  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error.id">{{ error }}</li>
    </ul>
  </p>

  <p>
    <label for="serial_number">Serial Number</label><br>
    <input
      id="serial_number"
      v-model="serial_number"
      type="text"
      name="serial_number"
			step="any"
			required
    >
  </p>

  <p>
    <label for="location-lat">Location-lat</label><br>
    <input
      id="location-lat"
      v-model="lat"
      type="number"
      name="location-lat"
			step="any"
			required
    >
  </p>

  <p>
    <label for="location-lng">Location-lng</label><br>  
    <input
      id="location-lng"
      v-model="lng"
      type="text"
      name="location-lng"
			required
    >
  </p>

  <p>
    <label for="in_order">In Order</label><br>
    <select
      id="in_order"
      v-model="in_order"
      name="in_order"
    >
      <option :value="true">True</option>
      <option :value="false">False</option>
    </select>
  </p>

  <p>
    <label for="service_status">Service status</label><br>
    <select
      id="service_status"
      v-model="service_status"
      name="service_status"
    >
      <option :value="1">FREE</option>
      <option :value="2">BOOKED</option>
      <option :value="3">IN USE</option>
    </select>
  </p>

  <p>
    <label for="battery_level">Battery Level</label><br>
    <input
      id="battery_level"
      type="number"
      v-model.number="battery_level"
      name="battery_level"
      min="0"
      max="100"
    >
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
import axios from "axios";

export default {
  data() {
    return {
      errors: [],
      serial_number: null,
      lat: null,
      lng: null,
      in_order: true,
      service_status: 1,
      battery_level: 0,
    };
  },
  methods: {
    checkForm (e) {
      e.preventDefault();
      this.errors = [];

      if (!this.serial_number || !this.lat || !this.lng) {
        this.errors.push("serial number & location are required");
      } else {
        axios
          .post("https://jsonbox.io/box_82a8f61b98e392c9568b", {
            serial_number: this.serial_number,
            location: {
              type: "Point",
              coordinates: [parseFloat(this.lng), parseFloat(this.lat)],
            },
            in_order: this.in_order,
            service_status: this.service_status,
            battery_level: this.battery_level,
          })
          .then((res) => res.data && console.log(res.data))
          .then((res) => alert(`le vélo a bien été ajouté`))
          .catch((err) =>
            alert(`erreur dans l'ajout d'un nouveau vélo : ${err}`)
          );
      }
    },
  },
};
</script>