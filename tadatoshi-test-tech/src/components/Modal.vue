<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
              Informations sur le vélo
            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>
        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
              <ul>
                  <li>Numéro de série : {{ bikeInformations.serial_number }}</li>
                  <li>En ordre : {{ bikeInformations.service_status }}</li>
                  <li>Niveau de la batterie : {{ bikeInformations.battery_level }}/100</li>
                  <li>status : {{ bikeInformations.service_status }}</li>
              </ul>
          </slot>
        </section>
         <footer class="modal-footer">
          <slot name="footer">
            Mettre à jour

            <!-- <button
              type="button"
              class="btn-green"
              @click="updateStatus(bikeInformations)"
              :bikeInformations="bikeInformations"
            >
              Modifier 
          </button> -->
          <router-link :to="{name: 'update-bike', params:{bikeId: bikeInformations.serial_number}}" 
          class="update-button" 
          tag="button"
          >
          Modifier
          </router-link>
        </slot>
      </footer>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'modal',
    props: [
        'bikeInformations'
    ],
    methods: {
      close() {
        this.$emit('close');
      },
      // updateStatus(bikeInformations) {
      //   this.bikeInformation = bikeInformations
      //   this.$route.push({
      //     path: '/bike'
      //   })
      //   this.$emit('close');
      // }
    },
  };
</script>