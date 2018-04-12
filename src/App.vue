<template>
  <div id="app">
  <router-link to="/">Home</router-link> |
  <router-link to="/peliculas">Peliculas</router-link> |
  <router-link to="/personajes">Personajes</router-link> |
  <router-link to="/planetas">Planetas</router-link> |
  <router-link to="/vehiculos">Vehiculos</router-link> |
  <router-link to="/cruceros">Cruceros</router-link> |
   <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  
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
