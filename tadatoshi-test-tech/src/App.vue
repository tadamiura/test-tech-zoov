<template>
  <div id="app">
    <header class="header">
      <img src="./assets/logo.png" alt="logo">
    </header>
    <Map />
    <footer>
      <div class="contact-us">
        <a :href="`mailto:${contact}`">Contact us</a>
      </div>
      <div class="follow-us-container">
        <a href=""><font-awesome-icon :icon="['fab', 'facebook']" size="2x" /></a>
        <a href=""><font-awesome-icon :icon="['fab', 'linkedin']" size="2x"/></a>
        <a href=""><font-awesome-icon :icon="['fab', 'instagram']" size="2x" /></a>
        <a href=""><font-awesome-icon :icon="['fab', 'snapchat']" size="2x" /></a>    
        <a href=""><font-awesome-icon :icon="['fab', 'youtube']" size="2x" /></a>
        <a href=""><font-awesome-icon :icon="['fab', 'linkedin']" size="2x" /></a>  
      </div>
    </footer>
  </div>
</template>

<script>
import Map from './components/Map'

export default {
  name: 'App',
  components: {
    Map
  },
  data () {
    return {
      contact: 'tadamiura@gmail.com'
    }
  }
}
</script>
