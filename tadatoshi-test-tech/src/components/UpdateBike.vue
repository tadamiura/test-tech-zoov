<template>
  <div class="update-bike info pa-3">
    <h2 class="typography--display-1 mb-3"><font-awesome-icon class="mx-1" icon="info-circle"/>Selected Bike's Informations</h2>
    <ul class="typography--body text--left">
      <li class="typography--title">
          <font-awesome-icon class="mx-1" icon="bicycle"/>
          Numéro de série : 
          <span class="text--700">{{ bikeInformations.serial_number }}
          </span>
      </li>
      <br>

      <li class="typography--title">
          <font-awesome-icon class="mx-1" icon="parking"/>
          En ordre : 
          <span class="text--700">{{ inOrder }}
          </span>
      </li>
      <br>

      <li class="typography--title">
          <font-awesome-icon class="mx-1" icon="lock-open"/>
          Etat de service : 
          <span class="text--bold">{{ serviceStatus }}
          </span>
      </li>
      <br>

      <li class="typography--title">
          <font-awesome-icon class="mx-1" icon="battery-three-quarters"/>
      Niveau de batterie : 
          <span class="text--bold">{{ bikeInformations.battery_level}}/{{ maxLevel }}
          </span>
      </li>
      <br>

      <li class="typography--title">
          <font-awesome-icon class="mx-1" icon="compass"/>
          Coordonnées : 
          <br>
          lat : 
          <span class="text--bold">{{ bikeInformations.location.coordinates[1]}}</span>
          <br>
          lng : 
          <span class="text--bold">{{ bikeInformations.location.coordinates[0]}}
          </span>
      </li>
    </ul>    
  </div>
</template>

<script>
import Map from './Map'
import axios from "axios"
export default {
  data () {
      return {
          maxLevel: 100,
          serviceStatus : '',
          inOrder: ''
      }
  },
  props: ['bikeInformations'],
  mounted () {
      this.getInformations()
  },
  methods: {
    getInformations () {
      if (this.bikeInformations.service_status === 1) {
        this.serviceStatus = "FREE"
      } else if (this.bikeInformations.service_status === 2) {
        this.serviceStatus = "BOOKED"
      } else {
        this.serviceStatus = "IN USE"
      }
      if(this.bikeInformations.in_order === true) {
        this.inOrder = "OUI"
      } else {
        this.inOrder = "NON"
      }
    }
  }
}
</script>