<template>
    <div>
      <h1>Peliculas</h1>
      <h5>Data</h5>
      <pre>
        {{ $data }}
      </pre>
      
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Peliculas',
  mounted(){
      this.getPeliculas()
  },
  data() {
      return {
          peliculas: []
          
      }
  },
  methods: {
      getPeliculas(){
          axios.get('https://swapi.co/api/films/')
          .then((res)=>{
              console.log(res)
              this.peliculas= res.data.results
            })
            .catch((err) =>{
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>

</style>
