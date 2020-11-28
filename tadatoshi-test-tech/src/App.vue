<template>
  <div id="app" class="primary">
    <header class="header">
      <img src="./assets/logo.png" alt="logo">
    </header>
    <Map />
    <footer class="typography--subheading text--center">
      <div class="contact-us typography--display-1">
        <a :href="`mailto:${contact}`"><font-awesome-icon class="mx-1" icon="envelope"/>{{ mailMessage }}</a>
      </div>
      <div class="follow-us-container mt-1">
        <a class="mx-1" href=""><font-awesome-icon :icon="['fab', 'facebook']" size="2x" /></a>
        <a class="mx-1" href=""><font-awesome-icon :icon="['fab', 'linkedin']" size="2x"/></a>
        <a class="mx-1" href=""><font-awesome-icon :icon="['fab', 'instagram']" size="2x" /></a>
        <a class="mx-1" href=""><font-awesome-icon :icon="['fab', 'snapchat']" size="2x" /></a>    
        <a class="mx-1" href=""><font-awesome-icon :icon="['fab', 'youtube']" size="2x" /></a>
        <a class="mx-1" href=""><font-awesome-icon :icon="['fab', 'linkedin']" size="2x" /></a>  
      </div>
    </footer>
  </div>
</template>

<style lang="stylus">
@import "~@zoov/design-system/src/styles/index.styl";
</style>

<script>
import Map from './components/Map'

export default {
  name: 'App',
  components: {
    Map
  },
  data () {
    return {
      mailMessage: 'Contactez nous par mail !',
      contact: 'tadamiura@gmail.com'
    }
  }
}
</script>
