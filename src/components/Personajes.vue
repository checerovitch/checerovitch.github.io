<template>
    <div>
      <h1>Personajes</h1>
      <h5>Data</h5>
      <pre>
        {{ $data }}
      </pre>
      
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Personajes',
  mounted(){
      this.getPersonajes()
  },
  data() {
      return {
          personajes: []
          
      }
  },
  methods: {
      getPersonajes(){
          axios.get('https://swapi.co/api/people/')
          .then((res)=>{
              console.log(res)
              this.personajes= res.data.results
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
