<template>
    <div class="update-bike">
        <h2><font-awesome-icon icon="info-circle"/>Selected Bike's Informations</h2>
        <ul>
            <li>
                <font-awesome-icon icon="bicycle"/>
                Numéro de série : 
                <span class="bold">{{ bikeInformations.serial_number }}
                </span>
            </li>
            <br>
            <li>
                <font-awesome-icon icon="parking"/>
                En ordre : 
                <span class="bold">{{ inOrder }}
                </span>
            </li>
            <br>
            <li>
                <font-awesome-icon icon="lock-open"/>
                Etat de service : 
                <span class="bold">{{ serviceStatus }}
                </span>
            </li>
            <br>
            <li>
                <font-awesome-icon icon="battery-three-quarters"/>
            Niveau de batterie : 
                <span class="bold">{{ bikeInformations.battery_level}}/{{ maxLevel }}
                </span>
            </li>
            <br>
            <li>
                <font-awesome-icon icon="compass"/>
                Coordonnées : 
                <br>
                lat : 
                <span class="bold">{{ bikeInformations.location.coordinates[1]}}</span>
                <br>
                lng : 
                <span class="bold">{{ bikeInformations.location.coordinates[0]}}
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
        // this.getServiceStatus(),
        // this.getInOrder()
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