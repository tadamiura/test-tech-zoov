<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Bike/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Bike from './components/Bike'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Bike
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
