<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
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
        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <ul>
              <li>Numéro de série : {{ bikeInformations.serial_number }}</li>
              <li>En ordre : {{ bikeInformations.in_order }}</li>
              <li>
                Niveau de la batterie : {{ bikeInformations.battery_level }}/100
              </li>
              <li>status : {{ bikeInformations.service_status }}</li>
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
  props: ["bikeInformations"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>