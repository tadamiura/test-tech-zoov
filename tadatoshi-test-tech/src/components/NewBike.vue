<template>
	<div class="new-bike typography--button">
		<form
			id="bike"
			class="secondary neutral dark-2 pa-2"
			@submit="addNewBike"
			method="post"
		>
		<h2 class="typography--display-1">Ajouter un nouveau vélo</h2>
		<p class="my-5" v-if="errors.length">
			<b>Please correct the following error(s):</b>
			<ul class="error-message typography--heading danger">
				<li v-for="error in errors" :key="error.id">{{ error }}</li>
			</ul>
		</p>

		<p class="my-5">
			<label class="typography--title" for="serial_number">Serial Number</label><br>
			<input
				class="typography--button my-1 pl-1"
				id="serial_number"
				v-model="serial_number"
				type="text"
				name="serial_number"
				step="any"
				required
			>
		</p>

		<p class="my-5">
			<label class="typography--title" for="location-lat">Location-lat</label><br>
			<input
				class="typography--button my-1 pl-1"
				id="location-lat"
				v-model="lat"
				type="number"
				name="location-lat"
				step="any"
				required
			>
		</p>

		<p class="my-5">
			<label class="typography--title" for="location-lng">Location-lng</label><br>  
			<input
				class="typography--button my-1 pl-1"
				id="location-lng"
				v-model="lng"
				type="text"
				name="location-lng"
				required
			>
		</p>

		<p class="my-5">
			<label class="typography--title" for="in_order">In Order</label><br>
			<select
				class="my-1"
				id="in_order"
				v-model="in_order"
				name="in_order"
			>
				<option :value="true">True</option>
				<option :value="false">False</option>
			</select>
		</p>

		<p class="my-5">
			<label class="typography--title" for="service_status">Service status</label><br>
			<select
				class="my-1"
				id="service_status"
				v-model="service_status"
				name="service_status"
			>
				<option :value="1">FREE</option>
				<option :value="2">BOOKED</option>
				<option :value="3">IN USE</option>
			</select>
		</p>

		<p class="my-5">
			<label class="typography--title" for="battery_level">Battery Level</label><br>
			<input
				class="typography--button my-1 pl-1 py-2"
				id="battery_level"
				type="number"
				v-model.number="battery_level"
				name="battery_level"
				min="0"
				max="100"
			>
		</p>
		
		<p class="my-5">
			<input
				class="button-send neutral typography--button"
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
			isANewBike: false
    };
	},
	props: ["info"],
  methods: {
    addNewBike (e) {
      e.preventDefault();
      this.errors = [];

			const checkBikes = (this.info).find( bike => bike.serial_number === this.serial_number)
			if (checkBikes === undefined) {
				 this.isANewBike = true
				console.log('true ',this.isANewBike)
			} else {
				console.log('false ',this.isANewBike)
				 this.isANewBike = false
			}
      if (this.isANewBike === false) { console.log('test ', this.isANewBike)
        this.errors.push("this serial number already exist");
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
          .then((res) => res.data)
          .then((res) => alert(`le vélo a bien été ajouté`))
          .catch((err) =>
            alert(`erreur dans l'ajout d'un nouveau vélo : ${err}`)
          );
      }
    },
  },
};
</script>