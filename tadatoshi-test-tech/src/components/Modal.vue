<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header secondary typography--heading pa-2" id="modalTitle">
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
        <section class="modal-body px-3 py-2" id="modalDescription">
          <slot name="body">
            <ul class="typography--body ml-1">
              <li class="ml-1">Numéro de série : <span class="text--bold typography--subheading">{{ bikeInformations.serial_number }}</span></li>
              <li class="ml-1">En ordre : <span class="text--bold typography--subheading">{{ inOrder }}</span></li>
              <li class="ml-1">
                Niveau de la batterie : <span class="text--bold typography--subheading">{{ bikeInformations.battery_level }}/{{ maxLevel }}</span>
              </li>
              <li class="ml-1">status : <span class="text--bold typography--subheading">{{ serviceStatus }}</span></li>
            </ul>
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "modal",
  data () {
    return {
        maxLevel: 100,
        serviceStatus : '',
        inOrder: ''
    }
  },
  props: ["bikeInformations"],
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
  },
    close() {
      this.$emit("close");
    },
  },
};
</script>